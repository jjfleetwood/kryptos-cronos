import "server-only";
import { redis } from "@/lib/redis";
import { deriveEconomy } from "@/lib/economy";
import { stagesMeta } from "@kryptos/core/stages-meta";
import {
  DIVISIONS, DEFAULT_DIVISION, COHORT_SIZE, PROMOTE_COUNT, RELEGATE_COUNT,
  promoteDivision, relegateDivision,
} from "@kryptos/core/leagues";

const STAGE_TITLE = new Map(stagesMeta.map((s) => [s.id, s.title]));
const STAGE_TITLE_LIST = stagesMeta.map((s) => s.title);

// ── Cohort seeding (cold-start) ───────────────────────────────────────────────
// A brand-new cohort can legitimately contain just one real player, which makes
// the weekly league feel dead ("just me"). To keep the race motivating we pad
// thin cohorts with deterministic pace-setters: stable for the whole week, seeded
// purely from the cohort key, and entirely COSMETIC — they are never written to
// the real cohort zset, so promotion/relegation and the leaderboard still run on
// genuine human XP only. Padding self-disables once a cohort has enough real
// players (real ≥ target), so it disappears as the platform grows.
const PACE_HANDLES = [
  "n0ctua", "r00tcause", "ByteReaper", "ghostpkt", "nullsector", "h3xwitch",
  "kr4ken", "daemon9", "ph4ntomR", "ICEbreaker", "segfault", "m4lwareMike",
  "sn0wcrash", "TheMorrigan", "b1tflip", "cipherpunk", "v0idwalker", "sh3llby",
  "neonRaccoon", "t0rvald", "qubitQueen", "redqueen7", "p4cketRat", "lockpik",
  "gr3pwolf", "base64kid", "x0rcist", "sudoNova", "fuzzbucket", "c4ffeine",
  "traceroot", "hashslinger", "p1votPete", "kerbster", "blu3team", "0xFelicia",
  "smolPwn", "dr4ku1a", "wireh4ck", "z3roday",
];

function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

/** Deterministic per-cohort display target (14–24) so the ladder feels organic
 *  rather than suspiciously round. Stable for a given cohort key (and thus week). */
function cohortFill(cohort: string): number {
  return 14 + (hashStr(`fill:${cohort}`) % 11);
}

/** Cosmetic pace-setters to pad a thin cohort up to `count` rows. Deterministic
 *  from the cohort key — same opponents and scores all week, never persisted. */
function seedPaceStandings(cohort: string, count: number, exclude: Set<string>): Standing[] {
  const out: Standing[] = [];
  const used = new Set<number>();
  const base = hashStr(cohort);
  for (let i = 0; out.length < count && i < PACE_HANDLES.length * 2; i++) {
    let idx = (base + i * 0x9e3779b1) % PACE_HANDLES.length;
    while (used.has(idx)) idx = (idx + 1) % PACE_HANDLES.length;
    used.add(idx);
    const handle = PACE_HANDLES[idx];
    if (exclude.has(handle.toLowerCase())) continue;
    const r = hashStr(`${cohort}:${handle}`);
    const weeklyXp = 40 + (r % 560);                       // 40..599 — a beatable spread
    const xp = 400 + ((r >> 5) % 7200);                    // plausible lifetime XP
    const lastStageClears = 1 + ((r >> 9) % 36);
    const lastStageTitle = STAGE_TITLE_LIST.length
      ? STAGE_TITLE_LIST[(r >> 13) % STAGE_TITLE_LIST.length]
      : null;
    out.push({ username: handle, weeklyXp, xp, lastStageTitle, lastStageClears, pioneerCount: 0 });
  }
  return out;
}

/** Pad real standings with cosmetic pace-setters up to the cohort's display
 *  target, then rank the combined field by weekly XP. Real players always appear
 *  and rank truthfully among themselves; padding only ever adds rows. */
function padStandings(cohort: string, real: Standing[]): Standing[] {
  const target = cohortFill(cohort);
  if (real.length >= target) return real;
  const exclude = new Set(real.map((r) => r.username.toLowerCase()));
  const bots = seedPaceStandings(cohort, target - real.length, exclude);
  return [...real, ...bots].sort((a, b) => b.weeklyXp - a.weeklyXp);
}

/**
 * Weekly Leagues engine (Phase 2). Cohorts are week-namespaced, so a new week
 * naturally starts everyone in fresh cohorts; the Monday cron only needs to
 * recompute each user's division from the just-ended week. Placement is lazy —
 * a user joins a cohort the first time they earn XP or open /leagues that week.
 *
 * Redis keys:
 *   league:user:{u}            hash { division, week, cohort }   — current placement
 *   league:fill:{week}:{div}   int  — seq of the cohort currently filling
 *   league:cohort:{cohort}     zset member=username → weekly XP   (cohort = `${week}:${div}:${seq}`)
 */

const DIVISION_IDS = DIVISIONS.map((d) => d.id);

/** Monday (UTC) date string YYYY-MM-DD for the week containing `d`. */
export function weekMondayKey(d = new Date()): string {
  const day = d.getUTCDay();
  const diff = d.getUTCDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), diff));
  return monday.toISOString().slice(0, 10);
}

/** The Monday key of the week before `d`'s week (the week a Monday cron just closed). */
export function prevWeekMondayKey(d = new Date()): string {
  return weekMondayKey(new Date(d.getTime() - 7 * 86_400_000));
}

/** Epoch ms of the next Monday 00:00 UTC — when the current league week resets. */
export function nextResetMs(now = new Date()): number {
  const day = now.getUTCDay();
  const daysUntilNextMonday = ((8 - day) % 7) || 7; // 1..7, never 0
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + daysUntilNextMonday);
}

const userKey = (u: string) => `league:user:${u.toLowerCase()}`;
const fillKey = (week: string, div: string) => `league:fill:${week}:${div}`;
const cohortKey = (cohort: string) => `league:cohort:${cohort}`;

export type LeaguePlacement = { division: string; week: string; cohort: string };

/** Ensure the user is placed in a cohort for `week`; returns the placement. */
export async function ensurePlaced(username: string, week = weekMondayKey()): Promise<LeaguePlacement> {
  const u = username.toLowerCase();
  const rec = (await redis.hgetall(userKey(u))) as Record<string, string> | null;
  const division = rec?.division ?? DEFAULT_DIVISION;

  if (rec?.week === week && rec?.cohort) {
    return { division, week, cohort: rec.cohort };
  }

  await redis.set(fillKey(week, division), 1, { nx: true });
  let seq = Number(await redis.get(fillKey(week, division)));
  let cohort = `${week}:${division}:${seq}`;
  if ((await redis.zcard(cohortKey(cohort))) >= COHORT_SIZE) {
    seq = Number(await redis.incr(fillKey(week, division)));
    cohort = `${week}:${division}:${seq}`;
  }

  // nx so re-placement never wipes an accumulated weekly score.
  await redis.zadd(cohortKey(cohort), { nx: true }, { score: 0, member: u });
  await redis.hset(userKey(u), { division, week, cohort });
  return { division, week, cohort };
}

/** Add weekly league XP (called from the award path on new completions). */
export async function addLeagueXp(username: string, delta: number, week = weekMondayKey()): Promise<void> {
  if (!(delta > 0)) return;
  const placement = await ensurePlaced(username, week);
  await redis.zincrby(cohortKey(placement.cohort), delta, username.toLowerCase());
}

export type Standing = {
  username: string;
  weeklyXp: number;
  xp: number;
  lastStageTitle: string | null;
  lastStageClears: number;
  pioneerCount: number;
};

/** Ranked standings (desc weekly XP) for a cohort, enriched with lifetime XP +
 *  Frontier data (last-cleared + clear count + pioneer count) to match the
 *  leaderboard. */
export async function getCohortStandings(cohort: string): Promise<Standing[]> {
  const flat = (await redis.zrange(cohortKey(cohort), 0, -1, { rev: true, withScores: true })) as (string | number)[];
  const rows: { username: string; weeklyXp: number }[] = [];
  for (let i = 0; i < flat.length; i += 2) {
    rows.push({ username: String(flat[i]), weeklyXp: Number(flat[i + 1]) });
  }
  if (rows.length === 0) return [];
  const pipe = redis.pipeline();
  for (const r of rows) pipe.hgetall(`progress:${r.username}`);
  const progs = (await pipe.exec()) as (Record<string, unknown> | null)[];
  const lastIds = progs.map((p) => (p?.lastStageId ? String(p.lastStageId) : null));
  // Second pipeline: clears of each last stage + pioneer count.
  const pipe2 = redis.pipeline();
  for (let i = 0; i < rows.length; i++) {
    pipe2.get(lastIds[i] ? `stage:clears:${lastIds[i]}` : "frontier:noop");
    pipe2.scard(`pioneer:${rows[i].username.toLowerCase()}`);
  }
  const fr = (await pipe2.exec()) as unknown[];
  const standings = rows.map((r, i) => ({
    username: r.username,
    weeklyXp: r.weeklyXp,
    xp: deriveEconomy(progs?.[i] ?? null).xp,
    lastStageTitle: lastIds[i] ? (STAGE_TITLE.get(lastIds[i]!) ?? lastIds[i]) : null,
    lastStageClears: Number(fr?.[i * 2] ?? 0),
    pioneerCount: Number(fr?.[i * 2 + 1] ?? 0),
  }));
  // Cold-start: pad a thin cohort with cosmetic pace-setters so the race isn't
  // "just me". No-op once the cohort has enough real players.
  return padStandings(cohort, standings);
}

export type DivisionSummary = { division: string; members: number; top: Standing[] };

/** "All leagues" view: for each division this week, the total member count across
 *  its cohorts + the top `topN` standings of its headline cohort (seq 1). Lets the
 *  /leagues page show the whole ladder populated, the way the leaderboard shows
 *  everyone — not just the caller's own cohort. */
export async function getDivisionLadder(week = weekMondayKey(), topN = 5): Promise<DivisionSummary[]> {
  const out: DivisionSummary[] = [];
  for (const div of DIVISION_IDS) {
    const maxSeq = Number((await redis.get(fillKey(week, div))) ?? 0);
    let members = 0;
    for (let seq = 1; seq <= maxSeq; seq++) members += await redis.zcard(cohortKey(`${week}:${div}:${seq}`));
    let top: Standing[] = [];
    if (maxSeq >= 1) {
      const headline = `${week}:${div}:1`;
      top = (await getCohortStandings(headline)).slice(0, topN); // padded when thin
      // Reflect the cosmetic pace-setters in the headline cohort so the "N
      // players" header agrees with the padded rows shown beneath it.
      members = Math.max(members, cohortFill(headline));
    }
    out.push({ division: div, members, top });
  }
  return out;
}

/**
 * Weekly reset: walk every cohort of the just-ended week, promote the top
 * PROMOTE_COUNT to the next division and relegate the bottom RELEGATE_COUNT,
 * updating each user's division (next-week placement happens lazily).
 */
export async function runWeeklyReset(endedWeek: string): Promise<{ cohorts: number; promoted: number; relegated: number }> {
  let cohorts = 0, promoted = 0, relegated = 0;
  for (const div of DIVISION_IDS) {
    const maxSeq = Number((await redis.get(fillKey(endedWeek, div))) ?? 0);
    for (let seq = 1; seq <= maxSeq; seq++) {
      const cohort = `${endedWeek}:${div}:${seq}`;
      const members = (await redis.zrange(cohortKey(cohort), 0, -1, { rev: true })) as string[];
      if (!members || members.length === 0) continue;
      cohorts++;
      const promoteTo = promoteDivision(div);
      const relegateTo = relegateDivision(div);
      const n = members.length;
      for (let rank = 0; rank < n; rank++) {
        let newDiv = div;
        if (rank < PROMOTE_COUNT && promoteTo !== div) { newDiv = promoteTo; promoted++; }
        else if (rank >= n - RELEGATE_COUNT && relegateTo !== div) { newDiv = relegateTo; relegated++; }
        if (newDiv !== div) await redis.hset(userKey(members[rank]), { division: newDiv });
      }
    }
  }
  return { cohorts, promoted, relegated };
}
