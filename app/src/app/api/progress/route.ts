import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

type ProgressPayload = {
  username: string;
  xp: number;
  completedStages: string[];
  badges: string[];
};

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");
  if (!username) return NextResponse.json({ error: "username required" }, { status: 400 });

  const data = await redis.hgetall(`progress:${username}`);
  if (!data) return NextResponse.json(null);

  return NextResponse.json({
    xp: Number(data.xp ?? 0),
    completedStages: data.stages ? JSON.parse(data.stages as string) : [],
    badges: data.badges ? JSON.parse(data.badges as string) : [],
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null) as ProgressPayload | null;
  if (!body?.username) return NextResponse.json({ error: "invalid payload" }, { status: 400 });

  const { username, xp, completedStages, badges } = body;

  await redis.hset(`progress:${username}`, {
    xp,
    stages: JSON.stringify(completedStages),
    badges: JSON.stringify(badges),
    lastActive: Date.now(),
  });

  await redis.zadd("leaderboard", { score: xp, member: username });

  return NextResponse.json({ ok: true });
}
