import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username")?.trim().toLowerCase();
  if (!username) return NextResponse.json({ error: "missing username" }, { status: 400 });

  const data = await redis.hgetall<{ passwordHash: string; salt: string; email: string }>(
    `user:${username}`
  );
  if (!data || !data.passwordHash || !data.salt) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  return NextResponse.json({ passwordHash: data.passwordHash, salt: data.salt, email: data.email });
}
