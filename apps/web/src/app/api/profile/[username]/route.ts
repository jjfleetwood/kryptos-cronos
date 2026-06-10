import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { deriveEconomy } from "@/lib/economy";

function parseArr(val: unknown): string[] {
  if (!val) return [];
  if (Array.isArray(val)) return val as string[];
  const s = String(val);
  try { const p = JSON.parse(s); return Array.isArray(p) ? p : []; } catch {
    return s.split(",").filter(Boolean);
  }
}

/** GET /api/profile/[username]
 *  Public profile — stats, badges, completed stages.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;
  const lower = username.toLowerCase();

  const [progressData, streakData] = await Promise.all([
    redis.hgetall(`progress:${lower}`),
    redis.hgetall(`streak:${lower}`),
  ]);

  if (!progressData) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const econ = deriveEconomy(progressData);
  const completedStageIds = parseArr(progressData.stages);
  const badgeIds = parseArr(progressData.badges);
  const streak = Number(streakData?.current ?? 0);
  const longestStreak = Number(streakData?.longest ?? 0);

  return NextResponse.json({
    username: lower,
    xp: econ.xp,
    stages: completedStageIds.length,
    badges: badgeIds.length,
    streak,
    longestStreak,
    completedStageIds,
    badgeIds,
  });
}
