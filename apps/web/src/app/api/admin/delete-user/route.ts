import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { redis } from "@/lib/redis";
import { logAdminAction, extractAdminUsername } from "@/lib/audit";

function verifyAdminToken(token: string): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  const colonIdx = token.lastIndexOf(":");
  if (colonIdx === -1) return false;
  const username = token.slice(0, colonIdx);
  const signature = token.slice(colonIdx + 1);
  if (!username || !signature) return false;
  const expected = createHmac("sha256", secret).update(username).digest("hex");
  try {
    const sigBuf = Buffer.from(signature, "hex");
    const expBuf = Buffer.from(expected, "hex");
    if (sigBuf.length !== expBuf.length) return false;
    return timingSafeEqual(sigBuf, expBuf);
  } catch { return false; }
}

export async function POST(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  if (!token || !verifyAdminToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null) as { username?: string } | null;
  const username = body?.username?.toLowerCase().trim();
  if (!username) return NextResponse.json({ error: "username required" }, { status: 400 });

  // Never allow deleting the super-admin account or the acting admin's own account.
  const superAdmin = process.env.ADMIN_USERNAME?.toLowerCase();
  if (superAdmin && username === superAdmin) {
    return NextResponse.json({ error: "Cannot delete the super-admin account" }, { status: 403 });
  }
  if (extractAdminUsername(token)?.toLowerCase() === username) {
    return NextResponse.json({ error: "Cannot delete your own account here" }, { status: 403 });
  }

  const exists = await redis.exists(`user:${username}`);
  if (!exists) return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Mirror the self-serve /api/delete-account purge so both paths stay consistent.
  const userData = await redis.hgetall(`user:${username}`) as Record<string, string> | null;
  const email = userData?.email?.toLowerCase();

  await Promise.all([
    redis.del(`user:${username}`),
    redis.del(`progress:${username}`),
    redis.del(`streak:${username}`),
    redis.zrem("leaderboard", username),
    ...(email ? [redis.del(`nda:${email}`)] : []),
  ]);

  logAdminAction(extractAdminUsername(token) ?? "admin", "delete-user", username).catch(() => {});
  return NextResponse.json({ ok: true, username });
}
