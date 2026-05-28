import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getServerSession } from "@/lib/server-session";

export async function POST(req: NextRequest) {
  const body = await req.json() as Record<string, unknown>;
  const username = getServerSession(req) ?? "anonymous";
  const ts = Date.now();
  const key = `survey:${ts}:${username}`;

  await redis.hset(key, {
    ...Object.fromEntries(
      Object.entries(body).map(([k, v]) => [k, typeof v === "object" ? JSON.stringify(v) : String(v ?? "")])
    ),
    username,
    ts: String(ts),
  });

  // Keep a sorted set for easy retrieval: newest first
  await redis.zadd("survey:index", { score: ts, member: key });

  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  // Admin-only: list all survey responses
  const { searchParams } = new URL(req.url);
  const limit = Math.min(Number(searchParams.get("limit") ?? "50"), 200);

  const keys = await redis.zrange("survey:index", 0, limit - 1, { rev: true });
  if (!keys.length) return NextResponse.json([]);

  const results = await Promise.all(
    keys.map(async (key) => {
      const data = await redis.hgetall(key as string);
      return data;
    })
  );

  return NextResponse.json(results.filter(Boolean));
}
