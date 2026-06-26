import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { supabaseAdmin } from "@/lib/supabase";

// Provision a Redis user record for a Supabase-authenticated client (mobile).
// Mobile clients register/sign in via the Supabase SDK directly and never hit
// /api/auth/register, so they have no `user:{username}` hash for tier/progress.
// This endpoint creates it on first authenticated call and is idempotent (safe
// to call after every login).
//
// SECURITY: the account is keyed to the token's *verified email* claim. The
// chosen username comes from signup metadata but is only honored once, behind a
// uniqueness check; subsequent calls resolve the existing username from the
// `email:{email}` index and ignore metadata (which is user-editable).

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

async function isRateLimited(ip: string): Promise<boolean> {
  const key = `rate:bootstrap:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60);
  return count > 30;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-real-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (await isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const header = req.headers.get("authorization");
  const match = header ? /^Bearer\s+(.+)$/i.exec(header.trim()) : null;
  const token = match ? match[1].trim() : null;
  if (!token) {
    return NextResponse.json({ error: "Bearer token required" }, { status: 401 });
  }

  const { data, error } = await supabaseAdmin.auth.getUser(token);
  if (error || !data?.user) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const email = data.user.email?.toLowerCase().trim() ?? "";
  if (!email) {
    return NextResponse.json({ error: "Account has no verified email." }, { status: 400 });
  }

  // Already provisioned → idempotent no-op, return the bound username.
  const existing = await redis.get<string>(`email:${email}`);
  if (existing) {
    return NextResponse.json({ ok: true, username: String(existing).toLowerCase(), email, provisioned: false });
  }

  // First time: pick the username from signup metadata, enforce uniqueness.
  const desired = (data.user.user_metadata?.username as string | undefined)?.toLowerCase().trim();
  if (!desired || desired.length < 3) {
    return NextResponse.json({ error: "A username of at least 3 characters is required." }, { status: 400 });
  }
  if (await redis.exists(`user:${desired}`)) {
    return NextResponse.json({ error: "Username is already taken.", taken: true }, { status: 409 });
  }

  // Atomically claim the email→username binding (NX) to guard concurrent calls.
  const claimed = await redis.set(`email:${email}`, desired, { nx: true });
  if (claimed !== "OK") {
    const winner = await redis.get<string>(`email:${email}`);
    return NextResponse.json({ ok: true, username: String(winner ?? desired).toLowerCase(), email, provisioned: false });
  }

  await redis.hset(`user:${desired}`, {
    email: escapeHtml(email),
    createdAt: Date.now(),
    authProvider: "supabase",
    // All new users get Pro automatically (see lib/access.ts — a pro tier with no
    // payment-source stamp is a permanent grant that survives OPEN_ACCESS=false).
    tier: "pro",
  });

  return NextResponse.json({ ok: true, username: desired, email, provisioned: true });
}
