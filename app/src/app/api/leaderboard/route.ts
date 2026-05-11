import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {
  const top = await redis.zrange("leaderboard", 0, 49, { rev: true, withScores: true });

  if (!top || top.length === 0) return NextResponse.json([]);

  const players = [];
  for (let i = 0; i < top.length; i += 2) {
    const username = top[i] as string;
    const xp = Number(top[i + 1]);

    const data = await redis.hgetall(`progress:${username}`);
    const stages = data?.stages ? (JSON.parse(data.stages as string) as string[]).length : 0;
    const badges = data?.badges ? (JSON.parse(data.badges as string) as string[]).length : 0;
    const lastActive = data?.lastActive ? Number(data.lastActive) : null;

    players.push({ username, xp, stages, badges, lastActive });
  }

  return NextResponse.json(players);
}
