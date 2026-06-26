import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { redis } from "@/lib/redis";
import { signSessionToken, sessionCookieOptions } from "@/lib/server-session";

function safeCompare(a: string, b: string): boolean {
  try {
    const ab = Buffer.from(a);
    const bb = Buffer.from(b);
    if (ab.length !== bb.length) return false;
    return timingSafeEqual(ab, bb);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.username || !body?.passwordHash) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const username = body.username.toLowerCase().trim();
  const data = await redis.hgetall<{ passwordHash: string }>(`user:${username}`);

  if (!data?.passwordHash || !safeCompare(data.passwordHash, body.passwordHash)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const token = signSessionToken(username);
  const res = NextResponse.json({ ok: true });
  res.cookies.set("session_token", token, sessionCookieOptions());
  return res;
}

export async function DELETE() {
  // Sign out from Supabase (clears JWT cookies)
  try {
    const { createSupabaseServerClient } = await import("@/lib/supabase");
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  } catch { /* best effort */ }

  const res = NextResponse.json({ ok: true });
  // Domain must match sessionCookieOptions() or the subdomain-scoped cookie won't clear.
  res.cookies.delete({
    name: "session_token",
    domain: process.env.NODE_ENV === "production" ? ".kryptoscronos.com" : undefined,
    path: "/",
  });
  return res;
}
