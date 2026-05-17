import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

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

export async function GET(req: NextRequest) {
  const period = req.nextUrl.searchParams.get("period") ?? "alltime";

  let boardKey: string;
  if (period === "daily") {
    boardKey = getDayKey();
  } else if (period === "weekly") {
    boardKey = getWeekKey();
  } else {
    boardKey = "leaderboard";
  }

  const top = await redis.zrange(boardKey, 0, 49, { rev: true, withScores: true });

  if (!top || top.length === 0) return NextResponse.json([]);

  const players = [];
  for (let i = 0; i < top.length; i += 2) {
    const username = top[i] as string;
    const xp = Number(top[i + 1]);

    // For daily/weekly we show period XP but still fetch profile data
    const data = await redis.hgetall(`progress:${username}`);
    const stages = data?.stages ? (JSON.parse(data.stages as string) as string[]).length : 0;
    const badges = data?.badges ? (JSON.parse(data.badges as string) as string[]).length : 0;
    const lastActive = data?.lastActive ? Number(data.lastActive) : null;

    players.push({ username, xp, stages, badges, lastActive });
  }

  return NextResponse.json(players);
}
