import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { getServerSession } from "@/lib/server-session";
import { redis } from "@/lib/redis";

function signToken(username: string): string {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) throw new Error("ADMIN_SECRET is not configured");
  return createHmac("sha256", secret).update(username).digest("hex");
}

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
  const sessionUser = getServerSession(req);
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
    token = `${lower}:${signToken(lower)}`;
  } catch {
    return NextResponse.json({ isAdmin: false }, { status: 500 });
  }

  const res = NextResponse.json({ isAdmin: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8h admin elevation; re-login to refresh
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete("admin_token");
  return res;
}
