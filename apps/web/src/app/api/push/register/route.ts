import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getAuthedUsername } from "@/lib/api-auth";
import { isExpoPushToken } from "@/lib/push";

// Store / clear the caller's Expo push token. Keyed by username in the
// `push:tokens` hash (field = username) so the streak-reminder cron can
// enumerate exactly the users who can receive a push.

export async function POST(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const token = body?.token;
  if (!isExpoPushToken(token)) {
    return NextResponse.json({ error: "invalid push token" }, { status: 400 });
  }

  await redis.hset("push:tokens", { [username.toLowerCase()]: token });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  await redis.hdel("push:tokens", username.toLowerCase());
  return NextResponse.json({ ok: true });
}
