import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { stagesMeta as stages } from "@kryptos/core/stages-meta";

const STAGE_TITLE = new Map(stages.map((s) => [s.id, s.title]));

async function isRateLimited(ip: string): Promise<boolean> {
  const key = `rate:lb:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60); // 1-minute window
  return count > 30;
}

type PlayerRow = {
  username: string;
  /** Ranking score: lifetime XP (all-time) or XP earned in the period (daily/weekly). */
  xp: number;
  stages: number;
  badges: number;
  lastActive: number | null;
  /** Frontier: the player's most-recent clear + that stage's global clear count. */
  lastStageId: string | null;
  lastStageTitle: string | null;
  lastStageClears: number;
  /** How many stages this player was first to clear (Pioneer). */
  pioneerCount: number;
  recencyFallback?: boolean;
};

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

function parseStringArray(val: unknown): string[] {
  if (!val) return [];
  if (Array.isArray(val)) return val as string[];
  const s = String(val);
  try {
    const parsed = JSON.parse(s);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return s.split(",").filter(Boolean);
  }
}

async function buildPlayers(pairs: unknown[]): Promise<PlayerRow[]> {
  const base: (Omit<PlayerRow, "lastStageTitle" | "lastStageClears" | "pioneerCount">)[] = [];
  for (let i = 0; i < pairs.length; i += 2) {
    const username = pairs[i] as string;
    const xp = Number(pairs[i + 1]);
    const data = await redis.hgetall(`progress:${username}`);
    const stages = parseStringArray(data?.stages).length;
    const badges = parseStringArray(data?.badges).length;
    const lastActive = data?.lastActive ? Number(data.lastActive) : null;
    const lastStageId = data?.lastStageId ? String(data.lastStageId) : null;
    base.push({ username, xp, stages, badges, lastActive, lastStageId });
  }
  // Enrich with Frontier data in one pipeline (clears of the last stage + pioneer count).
  const pipe = redis.pipeline();
  for (const p of base) {
    pipe.get(p.lastStageId ? `stage:clears:${p.lastStageId}` : "frontier:noop");
    pipe.scard(`pioneer:${p.username.toLowerCase()}`);
  }
  const res = (await pipe.exec()) as unknown[];
  return base.map((p, i) => ({
    ...p,
    lastStageTitle: p.lastStageId ? (STAGE_TITLE.get(p.lastStageId) ?? p.lastStageId) : null,
    lastStageClears: Number(res?.[i * 2] ?? 0),
    pioneerCount: Number(res?.[i * 2 + 1] ?? 0),
  }));
}

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-real-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (await isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  try {
    const period = req.nextUrl.searchParams.get("period") ?? "alltime";

    if (period === "alltime") {
      const top = await redis.zrange("leaderboard", 0, 49, { rev: true, withScores: true });
      if (!top || top.length === 0) return NextResponse.json([]);
      return NextResponse.json(await buildPlayers(top));
    }

    // Daily or weekly — try period-specific board first
    const boardKey = period === "daily" ? getDayKey() : getWeekKey();
    const top = await redis.zrange(boardKey, 0, 49, { rev: true, withScores: true });

    if (top && top.length > 0) {
      return NextResponse.json(await buildPlayers(top));
    }

    // Period board empty — fall back to all-time board filtered by recency
    const cutoffMs = period === "daily" ? 86_400_000 : 7 * 86_400_000;
    const cutoff = Date.now() - cutoffMs;

    const allTop = await redis.zrange("leaderboard", 0, 99, { rev: true, withScores: true });
    if (!allTop || allTop.length === 0) return NextResponse.json([]);

    const allPlayers = await buildPlayers(allTop);
    const filtered = allPlayers
      .filter((p) => p.lastActive !== null && p.lastActive > cutoff)
      .map((p) => ({ ...p, recencyFallback: true }));

    return NextResponse.json(filtered);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
