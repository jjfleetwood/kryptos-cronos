import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getServerSession } from "@/lib/server-session";
import { sendVerificationEmail, isVerified } from "@/lib/email-verify";

async function isRateLimited(username: string): Promise<boolean> {
  const key = `rate:resendverify:${username}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 600); // 10-minute window
  return count > 3;
}

// Re-send the verification email to the logged-in user. Rate-limited; no-op (still
// 200) if already verified, so the response never reveals account state.
export async function POST(req: NextRequest) {
  const username = await getServerSession(req);
  if (!username) return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  if (await isRateLimited(username)) {
    return NextResponse.json({ ok: true });
  }

  const data = await redis.hgetall<{ email: string; emailVerified: string; createdAt: string }>(`user:${username}`);
  if (data?.email && !isVerified(data.emailVerified, Number(data.createdAt ?? 0))) {
    await sendVerificationEmail(username, data.email);
  }
  return NextResponse.json({ ok: true });
}
