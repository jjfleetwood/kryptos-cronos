import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { logAdminAction } from "@/lib/audit";
import { requireAdmin } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (!admin) {
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
  if (admin === username) {
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

  logAdminAction(admin, "delete-user", username).catch(() => {});
  return NextResponse.json({ ok: true, username });
}
