import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getServerSession } from "@/lib/server-session";
import { awardStageInRedis } from "@/lib/server-progress";

export async function GET(req: NextRequest) {
  const username = getServerSession(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const lower = username.toLowerCase();
  const [data, streakData] = await Promise.all([
    redis.hgetall(`progress:${lower}`),
    redis.hgetall(`streak:${lower}`),
  ]);
  if (!data) return NextResponse.json(null);

  // Read `coins` field; fall back to legacy `xp` field for existing records
  const coins = Number(data.coins ?? data.xp ?? 0);
  return NextResponse.json({
    coins,
    coinsSpent: Number(data.coinsSpent ?? 0),
    completedStages: data.stages ? JSON.parse(data.stages as string) : [],
    badges: data.badges ? JSON.parse(data.badges as string) : [],
    streak: streakData ? Number(streakData.current ?? 0) : 0,
  });
}

export async function POST(req: NextRequest) {
  // Session cookie required — username is taken from the verified token, not the body
  const username = getServerSession(req);
  if (!username) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body.stageId !== "string") {
    return NextResponse.json({ error: "stageId required" }, { status: 400 });
  }

  const progress = await awardStageInRedis(username, body.stageId, body.badgeId ?? undefined);
  return NextResponse.json({ ok: true, progress });
}
