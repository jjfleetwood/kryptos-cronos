import { NextRequest, NextResponse } from "next/server";
import { getAuthedUsername } from "@/lib/api-auth";
import { getQuestState, claimQuest } from "@/lib/quests";
import { redis } from "@/lib/redis";
import { DAILY_GOAL_XP } from "@kryptos/core/streaks";

/** GET /api/quests — active daily/weekly quests + the caller's streak summary. */
export async function GET(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const [quests, streakRaw] = await Promise.all([
    getQuestState(username),
    redis.hgetall(`streak:${username.toLowerCase()}`) as Promise<Record<string, unknown> | null>,
  ]);

  const today = new Date().toISOString().slice(0, 10);
  const dayXp = String(streakRaw?.dayDate ?? "") === today ? Number(streakRaw?.dayXp ?? 0) : 0;

  return NextResponse.json({
    ...quests,
    streak: {
      current: Number(streakRaw?.current ?? 0),
      dayXp,
      goal: DAILY_GOAL_XP,
    },
  });
}

/** POST /api/quests { questId } — claim a completed quest's reward. */
export async function POST(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => null);
  if (!body?.questId || typeof body.questId !== "string") {
    return NextResponse.json({ error: "questId required" }, { status: 400 });
  }

  const result = await claimQuest(username, body.questId);
  if (!result.ok) return NextResponse.json({ error: result.error ?? "claim failed" }, { status: 400 });
  return NextResponse.json(result);
}
