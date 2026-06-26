import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { logAdminAction } from "@/lib/audit";
import { requireAdmin } from "@/lib/admin-auth";

// Controls who (besides admins) may reach the owner-only Agentic Audit deployment
// (apps/audit). Two Redis keys, read by that app's edge gate:
//   audit:access:on   "1" | "0"  — global feature switch
//   audit:allow       Set<username> — the per-user allowlist
// When the global switch is ON, a logged-in user gets in only if they're in the
// allowlist (admins always get in, independent of these keys).

const ENABLED_KEY = "audit:access:on";
const ALLOW_KEY = "audit:allow";

export async function GET(req: NextRequest) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const [enabled, allow] = await Promise.all([
    redis.get<string>(ENABLED_KEY),
    redis.smembers(ALLOW_KEY),
  ]);
  return NextResponse.json({
    enabled: Number(enabled) === 1,
    allow: (allow ?? []).map((u) => String(u).toLowerCase()),
  });
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as {
    enabled?: boolean;
    username?: string;
    grant?: boolean;
  } | null;
  if (!body) return NextResponse.json({ error: "Bad request" }, { status: 400 });

  // Global on/off
  if (typeof body.enabled === "boolean") {
    await redis.set(ENABLED_KEY, body.enabled ? "1" : "0");
    logAdminAction(admin, "audit-access", `enabled:${body.enabled}`).catch(() => {});
  }

  // Per-user grant / revoke
  if (typeof body.username === "string" && typeof body.grant === "boolean") {
    const username = body.username.toLowerCase().trim();
    if (!username) return NextResponse.json({ error: "username required" }, { status: 400 });
    if (body.grant) await redis.sadd(ALLOW_KEY, username);
    else await redis.srem(ALLOW_KEY, username);
    logAdminAction(admin, "audit-access", `${username}:${body.grant ? "grant" : "revoke"}`).catch(() => {});
  }

  const [enabled, allow] = await Promise.all([
    redis.get<string>(ENABLED_KEY),
    redis.smembers(ALLOW_KEY),
  ]);
  return NextResponse.json({
    ok: true,
    enabled: Number(enabled) === 1,
    allow: (allow ?? []).map((u) => String(u).toLowerCase()),
  });
}
