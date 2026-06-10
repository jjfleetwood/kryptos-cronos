import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { requireAdmin } from "@/lib/admin-auth";
import { logAdminAction } from "@/lib/audit";
import { stagesMeta as stages } from "@kryptos/core/stages-meta";
import { ECONOMY_VERSION } from "@/lib/economy";
import { addLeagueXp, weekMondayKey } from "@/lib/leagues";
import { checkStageMilestones, checkXpMilestones, checkStreakMilestones } from "@kryptos/core/milestone-badges";

/** POST /api/admin/seed-bots
 *  Admin-only. Seeds a fixed roster of demo "players" so the leaderboard + leagues
 *  look alive pre-launch. Idempotent (deterministic roster). Bots populate XP /
 *  stages / streaks / last-cleared, but deliberately DO NOT touch the Frontier
 *  counters (`stage:clears` / `stage:pioneer`) — being first to clear a stage
 *  stays a real-human feat. Bots are tracked in `bot:names` so they can be cleared.
 *  Body: { reset?: boolean }  — reset removes the existing roster first.
 */

// Cyber-flavoured demo handles + a realistic XP spread (so a new real user lands
// in the middle of the pack, not dead last).
const BOTS: { name: string; xp: number; streak: number }[] = [
  { name: "nullbyte", xp: 8120, streak: 22 }, { name: "r00tkit", xp: 7430, streak: 14 },
  { name: "ph4ntom", xp: 6890, streak: 31 }, { name: "h3xdump", xp: 6240, streak: 8 },
  { name: "syn_ackk", xp: 5780, streak: 17 }, { name: "v0idwalker", xp: 5310, streak: 5 },
  { name: "gh0stshell", xp: 4920, streak: 12 }, { name: "cipher0x", xp: 4475, streak: 26 },
  { name: "packetwitch", xp: 4110, streak: 9 }, { name: "kerneltrap", xp: 3870, streak: 3 },
  { name: "saltythehash", xp: 3540, streak: 19 }, { name: "blu3screen", xp: 3260, streak: 7 },
  { name: "overflowqueen", xp: 2980, streak: 11 }, { name: "dns_drifter", xp: 2740, streak: 4 },
  { name: "rainb0wtable", xp: 2510, streak: 15 }, { name: "segf4ult", xp: 2290, streak: 6 },
  { name: "blackh4tcat", xp: 2080, streak: 21 }, { name: "wireshark_wendy", xp: 1885, streak: 2 },
  { name: "exploitedeve", xp: 1690, streak: 10 }, { name: "tcp_teddy", xp: 1520, streak: 5 },
  { name: "zeroc00l", xp: 1360, streak: 13 }, { name: "metasploitr", xp: 1210, streak: 3 },
  { name: "scriptkiddo", xp: 1075, streak: 8 }, { name: "honeypotty", xp: 940, streak: 4 },
  { name: "fuzzybear", xp: 815, streak: 6 }, { name: "the_pentestr", xp: 700, streak: 2 },
  { name: "crashoverride", xp: 590, streak: 9 }, { name: "byteme", xp: 485, streak: 3 },
  { name: "n00bslayer", xp: 390, streak: 1 }, { name: "firewall_phil", xp: 300, streak: 4 },
  { name: "sudo_sandy", xp: 220, streak: 2 }, { name: "rookie_rae", xp: 150, streak: 1 },
];

function getWeekKey(): string {
  const d = new Date();
  const day = d.getUTCDay();
  const diff = d.getUTCDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), diff));
  return `lb:w:${monday.toISOString().slice(0, 10)}`;
}
function getDayKey(): string {
  return `lb:d:${new Date().toISOString().slice(0, 10)}`;
}

// Deterministic hash → pick a stage so each bot has a stable "last cleared".
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({})) as { reset?: boolean };

  if (body.reset) {
    const existing = (await redis.smembers("bot:names")) as string[];
    for (const b of existing) {
      const lrec = (await redis.hgetall(`league:user:${b}`)) as Record<string, string> | null;
      if (lrec?.cohort) await redis.zrem(`league:cohort:${lrec.cohort}`, b);
      await redis.del(`progress:${b}`, `streak:${b}`, `league:user:${b}`);
      await redis.zrem("leaderboard", b);
      await redis.zrem(getWeekKey(), b);
      await redis.zrem(getDayKey(), b);
    }
    await redis.del("bot:names");
  }

  const now = Date.now();
  const week = getWeekKey();
  const day = getDayKey();
  let seeded = 0;

  for (let i = 0; i < BOTS.length; i++) {
    const { name, xp, streak } = BOTS[i];
    const h = hash(name);
    // Roughly proportion stages to XP (~175 XP/stage), capped at the catalog.
    const stageCount = Math.max(1, Math.min(stages.length, Math.round(xp / 175)));
    const start = h % Math.max(1, stages.length - stageCount);
    const ownedStages = stages.slice(start, start + stageCount);
    const owned = ownedStages.map((s) => s.id);
    const lastStage = stages[(start + stageCount - 1) % stages.length];
    // Believable badges: milestone badges earned by the bot's stats + a handful
    // of the stage-completion badges from the stages it has "cleared".
    const badges = [
      ...checkStageMilestones(stageCount),
      ...checkXpMilestones(xp),
      ...checkStreakMilestones(streak),
      ...ownedStages.slice(0, 6 + (h % 6)).map((s) => s.badge.id),
    ];
    // Spread last-active over the past ~3 days so the recency boards have bots too.
    const lastActive = now - (h % (3 * 86_400_000));

    await redis.hset(`progress:${name}`, {
      xp,
      gv: ECONOMY_VERSION,
      stages: JSON.stringify(owned),
      badges: JSON.stringify(badges),
      lastActive,
      bonus: 0,
      penalty: 0,
      cleanSolves: h % 40,
      lastStageId: lastStage.id,
      lastStageAt: lastActive,
      bot: "1",
    });
    await redis.hset(`streak:${name}`, { current: streak, longest: streak + (h % 10) });
    await redis.zadd("leaderboard", { score: xp, member: name });
    // Give recently-active bots some period XP so daily/weekly aren't empty.
    const weekXp = 50 + (h % 400);
    await redis.zadd(week, { score: weekXp, member: name });
    if (now - lastActive < 86_400_000) await redis.zadd(day, { score: 20 + (h % 120), member: name });
    // Place the bot in a weekly league cohort (so /leagues is populated too).
    await addLeagueXp(name, weekXp, weekMondayKey());
    await redis.sadd("bot:names", name);
    seeded++;
  }

  logAdminAction(admin, "seed-bots", `${seeded} bots`).catch(() => {});
  return NextResponse.json({ ok: true, seeded, reset: !!body.reset });
}
