import "server-only";
import { redis } from "@/lib/redis";
import { weekMondayKey, addLeagueXp } from "@/lib/leagues";
import { todayUTC } from "@/lib/time-keys";
import { readEconomy } from "@/lib/economy";
import { getUserTier } from "@/lib/access";
import { PRO_DAILY_QUEST_BONUS } from "@kryptos/core/pro-perks";
import {
  dailyQuestsFor, weeklyQuestsFor, getQuestById, DAILY_QUEST_COUNT, type Quest, type QuestMetric,
} from "@kryptos/core/quests";

/**
 * Quest tracking (Phase 3). Per-period counters live in:
 *   quests:{u}:d:{YYYY-MM-DD}   hash { stages, xp, clean, claimed:<id> }
 *   quests:{u}:w:{monday}       hash { stages, xp, clean, claimed:<id> }
 * Counters are bumped from the award path; the XP reward is claimed via the API.
 * Quest selection is derived from the date, not stored.
 */

const dKey = (u: string, date: string) => `quests:${u.toLowerCase()}:d:${date}`;
const wKey = (u: string, week: string) => `quests:${u.toLowerCase()}:w:${week}`;
const D_TTL = 3 * 86_400;
const W_TTL = 16 * 86_400;

/** Advance daily + weekly objective counters (called on each new stage completion). */
export async function bumpQuestCounters(
  username: string,
  delta: { stages?: number; xp?: number; clean?: number }
): Promise<void> {
  const u = username.toLowerCase();
  const dk = dKey(u, todayUTC());
  const wk = wKey(u, weekMondayKey());
  const pipe = redis.pipeline();
  for (const k of [dk, wk]) {
    if (delta.stages) pipe.hincrby(k, "stages", delta.stages);
    if (delta.xp) pipe.hincrbyfloat(k, "xp", delta.xp);
    if (delta.clean) pipe.hincrby(k, "clean", delta.clean);
  }
  pipe.expire(dk, D_TTL);
  pipe.expire(wk, W_TTL);
  await pipe.exec();
}

export type QuestState = Quest & { progress: number; done: boolean; claimed: boolean };

function metricVal(counts: Record<string, unknown> | null, m: QuestMetric): number {
  return Number(counts?.[m] ?? 0);
}

function isClaimed(counts: Record<string, unknown> | null, id: string): boolean {
  const v = counts?.[`claimed:${id}`];
  return v === "1" || v === 1;
}

function build(quests: Quest[], counts: Record<string, unknown> | null): QuestState[] {
  return quests.map((q) => {
    const progress = Math.min(q.target, Math.floor(metricVal(counts, q.metric)));
    return { ...q, progress, done: progress >= q.target, claimed: isClaimed(counts, q.id) };
  });
}

/** The caller's active daily + weekly quests with progress / completion / claim state. */
export async function getQuestState(username: string): Promise<{ daily: QuestState[]; weekly: QuestState[]; pro: boolean }> {
  const u = username.toLowerCase();
  const date = todayUTC();
  const week = weekMondayKey();
  const [dCounts, wCounts, tier] = await Promise.all([
    redis.hgetall(dKey(u, date)) as Promise<Record<string, unknown> | null>,
    redis.hgetall(wKey(u, week)) as Promise<Record<string, unknown> | null>,
    getUserTier(u),
  ]);
  const pro = tier !== "free";
  const dailyCount = DAILY_QUEST_COUNT + (pro ? PRO_DAILY_QUEST_BONUS : 0);
  return {
    daily: build(dailyQuestsFor(date, dailyCount), dCounts),
    weekly: build(weeklyQuestsFor(week), wCounts),
    pro,
  };
}

/** Claim a completed quest's XP reward. Idempotent via HSETNX on the claimed flag. */
export async function claimQuest(
  username: string,
  questId: string
): Promise<{ ok: boolean; error?: string; xp?: number }> {
  const u = username.toLowerCase();
  const quest = getQuestById(questId);
  if (!quest) return { ok: false, error: "unknown quest" };

  const date = todayUTC();
  const week = weekMondayKey();
  const active = quest.period === "daily" ? dailyQuestsFor(date) : weeklyQuestsFor(week);
  if (!active.some((q) => q.id === questId)) return { ok: false, error: "quest not active" };

  const key = quest.period === "daily" ? dKey(u, date) : wKey(u, week);
  const counts = (await redis.hgetall(key)) as Record<string, unknown> | null;
  if (Math.floor(metricVal(counts, quest.metric)) < quest.target) return { ok: false, error: "not complete" };

  // HSETNX makes the claim single-shot even under concurrent requests.
  const claimedNow = await redis.hsetnx(key, `claimed:${questId}`, "1");
  if (!claimedNow) return { ok: false, error: "already claimed" };

  // Grant the reward as bonus XP. It lands in the `bonus` accumulator so the
  // self-healing XP recompute in awardStageInRedis preserves it; `xp` is bumped
  // in lockstep (= baseXp − penalty + bonus). Ensure the record is migrated first.
  await readEconomy(u);
  const pkey = `progress:${u}`;
  await redis.hincrbyfloat(pkey, "bonus", quest.xp);
  await redis.hincrbyfloat(pkey, "xp", quest.xp);
  // Reflect the reward in the all-time + weekly-league standings.
  await redis.zadd("leaderboard", { score: Number((await redis.hget(pkey, "xp")) ?? 0), member: u });
  await addLeagueXp(u, quest.xp);

  return { ok: true, xp: quest.xp };
}
