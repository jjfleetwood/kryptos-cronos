import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getServerSession } from "@/lib/server-session";

export async function DELETE(req: NextRequest) {
  const username = getServerSession(req);
  if (!username) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const lower = username.toLowerCase();

  await Promise.all([
    redis.del(`user:${lower}`),
    redis.del(`progress:${lower}`),
    redis.del(`streak:${lower}`),
    redis.zrem("leaderboard", lower),
  ]);

  const response = NextResponse.json({ ok: true });
  response.cookies.set("session_token", "", { maxAge: 0, path: "/" });
  response.cookies.set("admin_token", "", { maxAge: 0, path: "/" });
  return response;
}
