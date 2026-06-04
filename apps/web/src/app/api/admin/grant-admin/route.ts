import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { logAdminAction } from "@/lib/audit";
import { requireAdmin, revokeAdminSessions } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  const callerUsername = await requireAdmin(req);
  if (!callerUsername) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Only the super admin (ADMIN_USERNAME env var) can grant or revoke admin rights
  const superAdmin = process.env.ADMIN_USERNAME?.toLowerCase();
  if (!superAdmin || callerUsername !== superAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json().catch(() => null) as { username?: string; grant?: boolean } | null;
  const target = body?.username?.toLowerCase().trim();
  const grant = body?.grant === true;

  if (!target) return NextResponse.json({ error: "username required" }, { status: 400 });

  // Super admin access cannot be revoked via this endpoint
  if (target === superAdmin) {
    return NextResponse.json({ error: "Cannot modify super admin access" }, { status: 403 });
  }

  const exists = await redis.exists(`user:${target}`);
  if (!exists) return NextResponse.json({ error: "User not found" }, { status: 404 });

  if (grant) {
    await redis.hset(`user:${target}`, { isAdmin: "true" });
  } else {
    await redis.hdel(`user:${target}`, "isAdmin");
    await revokeAdminSessions(target); // invalidate any live admin tokens for the de-admin'd user
  }

  logAdminAction(callerUsername, grant ? "grant-admin" : "revoke-admin", target).catch(() => {});
  return NextResponse.json({ ok: true, username: target, isAdmin: grant });
}
