import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "@/lib/server-session";
import { signAdminToken } from "@/lib/admin-token";
import { redis } from "@/lib/redis";

// Issues the admin_token cookie — but ONLY for a caller who has already
// password-authenticated AS the admin. Identity is taken from the verified
// HMAC session_token cookie, NEVER from the request body.
//
// SECURITY: this previously minted a valid admin token to anyone who POSTed
// { username: <ADMIN_USERNAME> } with no credential — a full admin-takeover
// bypass. The session-derived identity below closes it. (Login already issues
// the admin cookie on real authentication, so this route is a safe no-op for
// non-admins.)
export async function POST(req: NextRequest) {
  const sessionUser = await getServerSession(req);
  if (!sessionUser) {
    return NextResponse.json({ isAdmin: false }, { status: 401 });
  }
  const lower = sessionUser.toLowerCase();

  const adminUsername = process.env.ADMIN_USERNAME?.toLowerCase();
  const isSuperAdmin = !!adminUsername && lower === adminUsername;
  const isFlaggedAdmin = (await redis.hget(`user:${lower}`, "isAdmin")) === "true";
  if (!isSuperAdmin && !isFlaggedAdmin) {
    return NextResponse.json({ isAdmin: false }, { status: 403 });
  }

  let token: string;
  try {
    token = signAdminToken(lower);
  } catch {
    return NextResponse.json({ isAdmin: false }, { status: 500 });
  }

  const res = NextResponse.json({ isAdmin: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    // Share across *.kryptoscronos.com so the owner-only audit subdomain
    // (apps/audit) can read the same admin_token. Host-only in dev.
    domain: process.env.NODE_ENV === "production" ? ".kryptoscronos.com" : undefined,
    path: "/",
    maxAge: 60 * 60 * 8, // 8h admin elevation; re-login to refresh
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  // Match the set() domain so logout actually clears the subdomain-scoped cookie.
  res.cookies.delete({
    name: "admin_token",
    domain: process.env.NODE_ENV === "production" ? ".kryptoscronos.com" : undefined,
    path: "/",
  });
  return res;
}
