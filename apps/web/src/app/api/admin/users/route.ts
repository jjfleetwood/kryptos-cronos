import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { requireAdmin } from "@/lib/admin-auth";

function parseArr(val: unknown): string[] {
  if (!val) return [];
  if (Array.isArray(val)) return val as string[];
  const s = String(val);
  try { const p = JSON.parse(s); return Array.isArray(p) ? p : []; } catch {
    return s.split(",").filter(Boolean);
  }
}

export async function GET(req: NextRequest) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Scan all user:* keys
  const userKeys: string[] = [];
  let cursor = 0;
  do {
    const [next, batch] = await redis.scan(cursor, { match: "user:*", count: 100 });
    cursor = Number(next);
    userKeys.push(...(batch as string[]));
  } while (cursor !== 0);

  // Fetch user + progress for each in parallel
  const users = await Promise.all(
    userKeys.map(async (key) => {
      const username = key.replace(/^user:/, "");
      const [userData, progressData] = await Promise.all([
        redis.hgetall(key),
        redis.hgetall(`progress:${username}`),
      ]);
      const stageIds = parseArr(progressData?.stages);
      const badges = parseArr(progressData?.badges);
      const streakData = await redis.hgetall(`streak:${username}`);
      const superAdmin = process.env.ADMIN_USERNAME?.toLowerCase();
      let userGroups: string[] = ["career", "curious"];
      if (userData?.userGroups) {
        try { const p = JSON.parse(userData.userGroups as string); if (Array.isArray(p) && p.length > 0) userGroups = p; } catch {}
      }
      return {
        username,
        email: (userData?.email as string) ?? "",
        createdAt: userData?.createdAt ? Number(userData.createdAt) : null,
        tier: (userData?.tier as string) ?? "free",
        isAdmin: userData?.isAdmin === "true" || username === superAdmin,
        coins: Number(progressData?.coins ?? progressData?.xp ?? 0),
        stageIds,
        stages: stageIds.length,
        badges: badges.length,
        streak: streakData?.current ? Number(streakData.current) : 0,
        lastActive: progressData?.lastActive ? Number(progressData.lastActive) : null,
        skin: (progressData?.skin as string) ?? "standard",
        userGroups,
      };
    })
  );

  users.sort((a, b) => b.coins - a.coins);
  return NextResponse.json(users);
}
