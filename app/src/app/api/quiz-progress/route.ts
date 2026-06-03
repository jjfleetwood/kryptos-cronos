import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getAuthedUsername } from "@/lib/api-auth";
import { awardQuizStageInRedis } from "@/lib/server-progress";

function parseArr(val: unknown): string[] {
  if (!val) return [];
  if (Array.isArray(val)) return val as string[];
  const s = String(val);
  try { const p = JSON.parse(s); return Array.isArray(p) ? p : []; } catch { return s.split(",").filter(Boolean); }
}

export async function GET(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ quizCompletedStages: [] });

  const raw = await redis.hget(`progress:${username.toLowerCase()}`, "quizStages");
  return NextResponse.json({ quizCompletedStages: parseArr(raw) });
}

export async function POST(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => null);
  if (!body || typeof body.stageId !== "string") {
    return NextResponse.json({ error: "stageId required" }, { status: 400 });
  }

  const quizCompletedStages = await awardQuizStageInRedis(username, body.stageId);
  return NextResponse.json({ ok: true, quizCompletedStages });
}
