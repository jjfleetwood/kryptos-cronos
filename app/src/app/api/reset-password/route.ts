import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { signSessionToken, sessionCookieOptions } from "@/lib/server-session";

type ResetPayload = {
  token: string;
  passwordHash: string;
  salt: string;
};

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null) as ResetPayload | null;
  if (!body?.token || !body?.passwordHash || !body?.salt) {
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }

  const { token, passwordHash, salt } = body;

  const username = await redis.get<string>(`reset:${token}`);
  if (!username) {
    return NextResponse.json({ error: "Invalid or expired reset link." }, { status: 400 });
  }

  await redis.hset(`user:${username}`, { passwordHash, salt });
  await redis.del(`reset:${token}`);

  const sessionToken = signSessionToken(username);
  const res = NextResponse.json({ username });
  res.cookies.set("session_token", sessionToken, sessionCookieOptions());
  return res;
}
