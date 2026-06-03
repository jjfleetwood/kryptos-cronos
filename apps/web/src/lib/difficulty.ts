import "server-only";
import { redis } from "@/lib/redis";
import { stages } from "@/data/stages";

const histKey = (u: string) => `diff:${u.toLowerCase()}:history`;
const levelKey = (u: string) => `diff:${u.toLowerCase()}:level`;
const hintsKey = (u: string, s: string) => `diff:${u.toLowerCase()}:hints:${s}`;
const attemptsKey = (u: string, s: string) => `diff:${u.toLowerCase()}:attempts:${s}`;

const TTL_S = 172800; // 48 h — per-stage signal keys

/**
 * 0–100 score for a single stage solve.
 * Time (50 pts): ≤5 min → 50, scales down to 10 at 20+ min.
 * Hints (30 pts): 0 hints → 30, each hint costs 10 pts, min 0.
 * Attempts (20 pts): 0 wrong → 20, each wrong answer costs 5 pts, min 0.
 */
export function computeStageScore(
  timeTakenMs: number,
  hintsUsed: number,
  wrongAttempts: number
): number {
  const fiveMin = 5 * 60_000;
  const tenMin = 10 * 60_000;
  const twentyMin = 20 * 60_000;

  let timeScore: number;
  if (timeTakenMs <= fiveMin) {
    timeScore = 50;
  } else if (timeTakenMs <= tenMin) {
    timeScore = 50 - ((timeTakenMs - fiveMin) / (tenMin - fiveMin)) * 20;
  } else if (timeTakenMs <= twentyMin) {
    timeScore = 30 - ((timeTakenMs - tenMin) / (twentyMin - tenMin)) * 20;
  } else {
    timeScore = 10;
  }

  const hintScore = Math.max(0, 30 - hintsUsed * 10);
  const attemptScore = Math.max(0, 20 - wrongAttempts * 5);
  return Math.round(timeScore + hintScore + attemptScore);
}

/** +20% XP bonus on a clean/fast solve (score ≥ 80), otherwise 0. */
export function computeBonusXp(stageScore: number, stageXp: number): number {
  return stageScore >= 80 ? Math.round(stageXp * 0.2) : 0;
}

/**
 * Cooldown in seconds for Pro ARIA users based on skill level.
 * Struggling users (< 40) get immediate responses; strong users get the standard 30 s.
 */
export function adaptiveCooldownSeconds(skillLevel: number): number {
  if (skillLevel >= 70) return 30;
  if (skillLevel >= 40) return 15;
  return 0;
}

/**
 * Best incomplete stage in the same epoch to tackle next.
 * High-skill users (≥ 60) get the hardest remaining stage; low-skill users get the easiest.
 */
export function getRecommendedNext(
  epochId: string,
  completedStageIds: string[],
  skillLevel: number
): { id: string; title: string } | null {
  const incomplete = stages.filter(
    (s) => s.epochId === epochId && !completedStageIds.includes(s.id)
  );
  if (!incomplete.length) return null;
  incomplete.sort((a, b) => skillLevel >= 60 ? b.xp - a.xp : a.xp - b.xp);
  return { id: incomplete[0].id, title: incomplete[0].title };
}

/** Rolling average skill level 0–100 for the user. Defaults to 50 until they have history. */
export async function getSkillLevel(username: string): Promise<number> {
  const val = await redis.get(levelKey(username));
  return val !== null ? Number(val) : 50;
}

/**
 * Pushes a new stage score into the rolling history (last 10 solves) and recomputes
 * the stored skill level. Returns the new level.
 */
export async function updateSkillLevel(username: string, stageScore: number): Promise<number> {
  const hk = histKey(username);
  await redis.lpush(hk, String(stageScore));
  await redis.ltrim(hk, 0, 9);
  const history = await redis.lrange(hk, 0, -1);
  const avg = history.reduce((sum, v) => sum + Number(v), 0) / history.length;
  const level = Math.round(avg);
  await redis.set(levelKey(username), level);
  return level;
}

export async function getHintsUsed(username: string, stageId: string): Promise<number> {
  const val = await redis.get(hintsKey(username, stageId));
  return val !== null ? Number(val) : 0;
}

export async function trackHint(username: string, stageId: string): Promise<void> {
  const k = hintsKey(username, stageId);
  await redis.incr(k);
  await redis.expire(k, TTL_S);
}

export async function getWrongAttempts(username: string, stageId: string): Promise<number> {
  const val = await redis.get(attemptsKey(username, stageId));
  return val !== null ? Number(val) : 0;
}

export async function trackWrongAttempt(username: string, stageId: string): Promise<void> {
  const k = attemptsKey(username, stageId);
  await redis.incr(k);
  await redis.expire(k, TTL_S);
}
