import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-token";

// ── Owner-only edge gate ──────────────────────────────────────────────────────
// Every route in this deployment requires a valid `admin_token` cookie (minted by
// the main app's /api/admin-session, signed with the shared ADMIN_SECRET). If an
// AUDIT_ALLOWLIST is set, the token's username must also be on it. Unauthorized
// requests get a bare 404 so the deployment stays hidden (no login page, no hint).
//
// Cross-subdomain note: for the admin_token cookie to reach this subdomain, the
// main app must set it with Domain=.<yourdomain> (or mint a token here). See
// docs/AUDIT_EXTRACTION.md infra handoff.
export function proxy(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  const username = verifyAdminToken(token);
  if (!username) return new NextResponse("Not found", { status: 404 });

  const allow = process.env.AUDIT_ALLOWLIST;
  if (allow) {
    const ok = allow.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean).includes(username);
    if (!ok) return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
