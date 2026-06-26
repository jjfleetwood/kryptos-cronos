import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-token";
import { verifySessionToken } from "@/lib/session-token";
import { getRedis } from "@/lib/redis";

// ── Edge gate ─────────────────────────────────────────────────────────────────
// Two ways in (else a bare 404 so the deployment stays hidden):
//   1. ADMIN  — a valid `admin_token` cookie (minted by the main app's
//      /api/admin-session, shared ADMIN_SECRET). If AUDIT_ALLOWLIST is set, the
//      username must be on it. Pure HMAC, no Redis — admins are never locked out.
//   2. ALLOWLISTED USER — a valid `session_token` (any logged-in main-app user,
//      cookie shared across *.kryptoscronos.com) AND, in Redis, the global switch
//      `audit:access:on` == "1" AND the username is in the `audit:allow` set.
//      Managed from the main admin page (/api/admin/audit-access). Requires the
//      UPSTASH_* env on this project; without it this path safely denies.
const notFound = () => new NextResponse("Not found", { status: 404 });

export async function proxy(req: NextRequest) {
  // 1. Admin path (synchronous, no Redis dependency).
  const adminUser = verifyAdminToken(req.cookies.get("admin_token")?.value);
  if (adminUser) {
    const allow = process.env.AUDIT_ALLOWLIST;
    if (!allow) return NextResponse.next();
    const ok = allow.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean).includes(adminUser);
    if (ok) return NextResponse.next();
    // admin_token present but not on the env allowlist → fall through to user path
  }

  // 2. Allowlisted logged-in user (feature-gated, Redis-backed).
  const sessionUser = verifySessionToken(req.cookies.get("session_token")?.value);
  if (sessionUser) {
    const redis = getRedis();
    if (redis) {
      try {
        const [enabled, member] = await Promise.all([
          redis.get<string>("audit:access:on"),
          redis.sismember("audit:allow", sessionUser),
        ]);
        if (enabled === "1" && member) return NextResponse.next();
      } catch {
        /* Redis error → deny (fall through to 404) */
      }
    }
  }

  return notFound();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
