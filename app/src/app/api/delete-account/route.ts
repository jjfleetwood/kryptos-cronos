import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getServerSession } from "@/lib/server-session";

export async function DELETE(req: NextRequest) {
  const username = getServerSession(req);
  if (!username) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const lower = username.toLowerCase();

  // Look up email to delete NDA record (email is the NDA key)
  const userData = await redis.hgetall(`user:${lower}`) as Record<string, string> | null;
  const email = userData?.email?.toLowerCase();

  await Promise.all([
    redis.del(`user:${lower}`),
    redis.del(`progress:${lower}`),
    redis.del(`streak:${lower}`),
    redis.zrem("leaderboard", lower),
    ...(email ? [redis.del(`nda:${email}`)] : []),
  ]);

  const response = NextResponse.json({ ok: true });
  response.cookies.set("session_token", "", { maxAge: 0, path: "/" });
  response.cookies.set("admin_token", "", { maxAge: 0, path: "/" });
  return response;
}
