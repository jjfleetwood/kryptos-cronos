import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

type SyncPayload = {
  username: string;
  email: string;
  passwordHash: string;
  salt: string;
};

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null) as SyncPayload | null;
  if (!body?.username || !body?.email || !body?.passwordHash || !body?.salt) {
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }

  const { username, email, passwordHash, salt } = body;

  await redis.hset(`user:${username.toLowerCase()}`, { passwordHash, salt, email: email.toLowerCase() });
  await redis.set(`email:${email.toLowerCase()}`, username.toLowerCase());

  return NextResponse.json({ ok: true });
}
