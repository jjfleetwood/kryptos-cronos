import { redis } from "@/lib/redis";
import { stages } from "@/data/stages";
import { checkStageMilestones, checkXpMilestones, checkStreakMilestones } from "@/data/milestone-badges";
import type { UserProgress } from "@/lib/progress";

function stageXp(stageId: string): number {
  return stages.find((s) => s.id === stageId)?.xp ?? 0;
}

function getDayKey(): string {
  return `lb:d:${new Date().toISOString().slice(0, 10)}`;
}

function getWeekKey(): string {
  const d = new Date();
  const day = d.getUTCDay();
  const diff = d.getUTCDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), diff));
  return `lb:w:${monday.toISOString().slice(0, 10)}`;
}

function todayUTC(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayUTC(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

/**
 * Awards a stage in Redis for a verified user. XP is computed server-side.
 * Idempotent — calling twice for the same stage has no effect on XP.
 * timePenaltyXp is accumulated only once per new stage completion.
 */
export async function awardStageInRedis(
  username: string,
  stageId: string,
  badgeId?: string,
  timePenaltyXp = 0
): Promise<UserProgress> {
  const key = `progress:${username.toLowerCase()}`;
  const streakKey = `streak:${username.toLowerCase()}`;

  const [data, streakData] = await Promise.all([
    redis.hgetall(key),
    redis.hgetall(streakKey),
  ]);

  function parseArr(val: unknown): string[] {
    if (!val) return [];
    if (Array.isArray(val)) return val as string[];
    const s = String(val);
    try { const p = JSON.parse(s); return Array.isArray(p) ? p : []; } catch { return s.split(",").filter(Boolean); }
  }

  const completedStages: string[] = parseArr(data?.stages);
  const badges: string[] = parseArr(data?.badges);

  const isNew = !completedStages.includes(stageId);

  if (isNew) {
    completedStages.push(stageId);
  }
  if (badgeId && !badges.includes(badgeId)) {
    badges.push(badgeId);
  }

  const baseCoins = completedStages.reduce((sum, id) => sum + stageXp(id), 0);
  const storedPenalty = Number(data?.penalty ?? 0);
  const newPenalty = isNew ? storedPenalty + timePenaltyXp : storedPenalty;
  const coins = Math.max(0, baseCoins - newPenalty);
  // coinsSpent is never modified by stage awards — only the shop route touches it
  const coinsSpent = Number(data?.coinsSpent ?? 0);

  // ── Streak tracking ──
  const today = todayUTC();
  const yesterday = yesterdayUTC();
  const lastDate = streakData?.lastDate ? String(streakData.lastDate) : null;
  let current = Number(streakData?.current ?? 0);
  let longest = Number(streakData?.longest ?? 0);

  if (lastDate === today) {
    // Already counted today — no change
  } else if (lastDate === yesterday) {
    current += 1;
  } else {
    current = 1;
  }
  if (current > longest) longest = current;

  // ── Milestone badges ──
  const stageMilestones = checkStageMilestones(completedStages.length);
  const xpMilestones = checkXpMilestones(coins);
  const streakMilestones = checkStreakMilestones(current);

  for (const id of [...stageMilestones, ...xpMilestones, ...streakMilestones]) {
    if (!badges.includes(id)) badges.push(id);
  }

  await Promise.all([
    redis.hset(key, {
      coins,
      stages: JSON.stringify(completedStages),
      badges: JSON.stringify(badges),
      lastActive: Date.now(),
      penalty: newPenalty,
    }),
    redis.hset(streakKey, {
      current,
      longest,
      lastDate: today,
    }),
  ]);

  // All-time leaderboard (ranked by total coins earned, not spendable balance)
  await redis.zadd("leaderboard", { score: coins, member: username.toLowerCase() });

  // Daily and weekly leaderboards — only update on new stage completion
  if (isNew) {
    const deltaCoins = stageXp(stageId) - timePenaltyXp;
    if (deltaCoins > 0) {
      const dayKey = getDayKey();
      const weekKey = getWeekKey();
      await redis.zincrby(dayKey, deltaCoins, username.toLowerCase());
      await redis.expire(dayKey, 172800); // 48h TTL
      await redis.zincrby(weekKey, deltaCoins, username.toLowerCase());
      await redis.expire(weekKey, 1209600); // 14 day TTL
    }
  }

  return { coins, coinsSpent, completedStages, badges, streak: current };
}
