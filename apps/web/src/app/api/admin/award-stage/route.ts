import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getServerSession } from "@/lib/server-session";
import { logAdminAction } from "@/lib/audit";
import { requireAdmin } from "@/lib/admin-auth";
import { awardStageInRedis } from "@/lib/server-progress";
import { stages } from "@kryptos/core/stages";
import { TROPHIES, dailyShopTrophies } from "@kryptos/core/trophies";

/** POST /api/admin/award-stage
 *  Admin-only. Awards a stage completion to a user and optionally grants a random trophy.
 *  Body: { stageId: string, username?: string, grantTrophy?: boolean }
 *  username defaults to the session user if omitted.
 */
export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (!admin) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null) as { stageId?: string; username?: string; grantTrophy?: boolean } | null;
  if (!body || typeof body.stageId !== "string") {
    return NextResponse.json({ error: "stageId required" }, { status: 400 });
  }

  const sessionUser = getServerSession(req);
  const username = (body.username ?? sessionUser ?? "").trim().toLowerCase();
  if (!username) {
    return NextResponse.json({ error: "username required — pass in body or be logged in" }, { status: 400 });
  }

  const stage = stages.find((s) => s.id === body.stageId);
  if (!stage) {
    return NextResponse.json({ error: "stage not found" }, { status: 404 });
  }

  // Award the stage
  const progress = await awardStageInRedis(username, stage.id, stage.badge.id, 0);

  // Optionally grant a random trophy (admin bypass — no coin deduction, no shop restriction)
  let trophy = null;
  if (body.grantTrophy !== false) {
    const alreadyOwned = (await redis.smembers(`inventory:${username}`)) as string[];
    const ownedSet = new Set(alreadyOwned);

    // Pick from today's daily rotation, skipping owned; fallback to any unowned trophy
    const rotation = dailyShopTrophies(username, 10);
    const candidate = rotation.find((t) => !ownedSet.has(t.id)) ?? TROPHIES.find((t) => !ownedSet.has(t.id));

    if (candidate) {
      await redis.sadd(`inventory:${username}`, candidate.id);
      await redis.incr(`trophy:claimed:${candidate.id}`);
      trophy = { id: candidate.id, name: candidate.name, emoji: candidate.emoji, tier: candidate.tier };
    }
  }

  logAdminAction(admin, "award-stage", `${username}:${stage.id}`).catch(() => {});
  return NextResponse.json({
    ok: true,
    username,
    stageId: stage.id,
    stageTitle: stage.title,
    coinsAwarded: stage.xp,
    progress,
    trophy,
  });
}
