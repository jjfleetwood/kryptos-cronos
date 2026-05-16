import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { signSessionToken, sessionCookieOptions } from "@/lib/server-session";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.username || !body?.passwordHash) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const username = body.username.toLowerCase().trim();
  const data = await redis.hgetall<{ passwordHash: string }>(`user:${username}`);

  if (!data?.passwordHash || data.passwordHash !== body.passwordHash) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const token = signSessionToken(username);
  const res = NextResponse.json({ ok: true });
  res.cookies.set("session_token", token, sessionCookieOptions());
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete("session_token");
  return res;
}
