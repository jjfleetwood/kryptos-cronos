import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getAuthedUsername } from "@/lib/api-auth";

const VALID_SKINS = new Set(["youth", "standard", "mature"]);

export async function GET(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ skin: null });

  const data = await redis.hgetall(`progress:${username.toLowerCase()}`);
  const skin = data?.skin ?? null;
  return NextResponse.json({ skin: VALID_SKINS.has(skin as string) ? skin : null });
}

export async function POST(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ ok: false }, { status: 401 });

  const body = await req.json().catch(() => null);
  if (!body?.skin || !VALID_SKINS.has(body.skin)) {
    return NextResponse.json({ error: "invalid skin" }, { status: 400 });
  }

  await redis.hset(`progress:${username.toLowerCase()}`, { skin: body.skin });
  return NextResponse.json({ ok: true });
}
