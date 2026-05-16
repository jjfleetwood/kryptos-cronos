import { redis } from "@/lib/redis";
import { stages } from "@/data/stages";
import type { UserProgress } from "@/lib/progress";

/** Returns the authoritative XP for a stage from the stages data. */
function stageXp(stageId: string): number {
  return stages.find((s) => s.id === stageId)?.xp ?? 0;
}

/** Awards a stage in Redis for a verified user. XP is computed server-side.
 *  Idempotent — calling twice has no effect. */
export async function awardStageInRedis(
  username: string,
  stageId: string,
  badgeId?: string
): Promise<UserProgress> {
  const key = `progress:${username.toLowerCase()}`;
  const data = await redis.hgetall(key);

  const completedStages: string[] = data?.stages
    ? JSON.parse(data.stages as string)
    : [];
  const badges: string[] = data?.badges
    ? JSON.parse(data.badges as string)
    : [];

  if (!completedStages.includes(stageId)) {
    completedStages.push(stageId);
  }
  if (badgeId && !badges.includes(badgeId)) {
    badges.push(badgeId);
  }

  const xp = completedStages.reduce((sum, id) => sum + stageXp(id), 0);

  await redis.hset(key, {
    xp,
    stages: JSON.stringify(completedStages),
    badges: JSON.stringify(badges),
    lastActive: Date.now(),
  });
  await redis.zadd("leaderboard", { score: xp, member: username.toLowerCase() });

  return { xp, completedStages, badges };
}
