import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { hashPassword, generateSalt, PBKDF2_ITERATIONS } from "@/lib/crypto-utils";
import { signSessionToken, sessionCookieOptions, bumpSessionEpoch } from "@/lib/server-session";
import { supabaseAdmin } from "@/lib/supabase";
import { passwordError } from "@/lib/password-policy";
import { isPwnedPassword } from "@/lib/pwned";

async function isRateLimited(ip: string): Promise<boolean> {
  const key = `rate:resetpw:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 3600);
  return count > 5;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-real-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (await isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  const body = await req.json().catch(() => null) as {
    token?: string; password?: string;
  } | null;

  if (!body?.token || !body?.password) {
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }

  const pwError = passwordError(body.password);
  if (pwError) {
    return NextResponse.json({ error: pwError }, { status: 400 });
  }
  if (await isPwnedPassword(body.password)) {
    return NextResponse.json({ error: "That password has appeared in a known data breach. Please choose a different one." }, { status: 400 });
  }

  const username = await redis.get<string>(`reset:${body.token}`);
  if (!username) {
    return NextResponse.json({ error: "Invalid or expired reset link." }, { status: 400 });
  }

  const salt = generateSalt();
  const passwordHash = await hashPassword(body.password, salt);

  await redis.hset(`user:${username}`, { passwordHash, salt, hashIterations: PBKDF2_ITERATIONS });
  await redis.del(`reset:${body.token}`);

  // Sync new password to Supabase (fire-and-forget)
  redis.hget(`user:${username}`, "email").then((email) => {
    if (!email) return;
    supabaseAdmin.auth.admin.listUsers().then(({ data }) => {
      const match = data?.users?.find((u) => u.email === email);
      if (match) {
        supabaseAdmin.auth.admin.updateUserById(match.id, { password: body.password }).catch(() => {});
      }
    }).catch(() => {});
  }).catch(() => {});

  // Invalidate every prior session for this user (a reset means the old password
  // — and any session opened with it — is no longer trusted), then issue a fresh
  // session bound to the new epoch.
  const newEpoch = await bumpSessionEpoch(username);
  const sessionToken = signSessionToken(username, newEpoch);
  const res = NextResponse.json({ username });
  res.cookies.set("session_token", sessionToken, sessionCookieOptions());
  return res;
}
