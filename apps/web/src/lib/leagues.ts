import "server-only";
import { redis } from "@/lib/redis";
import { deriveEconomy } from "@/lib/economy";
import { stagesMeta } from "@kryptos/core/stages-meta";
import {
  DIVISIONS, DEFAULT_DIVISION, COHORT_SIZE, PROMOTE_COUNT, RELEGATE_COUNT,
  promoteDivision, relegateDivision,
} from "@kryptos/core/leagues";

const STAGE_TITLE = new Map(stagesMeta.map((s) => [s.id, s.title]));

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
  return rows.map((r, i) => ({
    username: r.username,
    weeklyXp: r.weeklyXp,
    xp: deriveEconomy(progs?.[i] ?? null).xp,
    lastStageTitle: lastIds[i] ? (STAGE_TITLE.get(lastIds[i]!) ?? lastIds[i]) : null,
    lastStageClears: Number(fr?.[i * 2] ?? 0),
    pioneerCount: Number(fr?.[i * 2 + 1] ?? 0),
  }));
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
