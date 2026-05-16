import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getServerSession } from "@/lib/server-session";
import { awardStageInRedis } from "@/lib/server-progress";

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");
  if (!username) return NextResponse.json({ error: "username required" }, { status: 400 });

  const data = await redis.hgetall(`progress:${username.toLowerCase()}`);
  if (!data) return NextResponse.json(null);

  return NextResponse.json({
    xp: Number(data.xp ?? 0),
    completedStages: data.stages ? JSON.parse(data.stages as string) : [],
    badges: data.badges ? JSON.parse(data.badges as string) : [],
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
