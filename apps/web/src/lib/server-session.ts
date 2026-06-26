import { createHmac, timingSafeEqual } from "crypto";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { redis } from "@/lib/redis";

function secret(): string {
  // SESSION_SECRET is preferred; falls back to ADMIN_SECRET during transition
  const s = process.env.SESSION_SECRET ?? process.env.ADMIN_SECRET;
  if (!s) throw new Error("SESSION_SECRET not configured");
  return s;
}

// Session tokens are bound to a username AND a per-user "session epoch". Bumping
// the stored epoch (on password reset / log-out-everywhere) invalidates every
// previously-issued token, since the epoch baked into them no longer matches.
// Format: `u:{username}:{epoch}:{hmac(u:{username}:{epoch})}`.
export function signSessionToken(username: string, epoch = 0): string {
  const lower = username.toLowerCase().trim();
  const msg = `u:${lower}:${epoch}`;
  const hmac = createHmac("sha256", secret()).update(msg).digest("hex");
  return `${msg}:${hmac}`;
}

// Sync HMAC verification → { username, epoch } or null. Accepts the LEGACY
// epoch-less format (`u:{user}:{hmac}`) as epoch 0 so pre-existing cookies keep
// working until the user's epoch is bumped.
export function parseSessionToken(token: string): { username: string; epoch: number } | null {
  try {
    const key = secret();
    const parts = token.split(":");
    if (parts[0] !== "u") return null;

    let msg: string, sig: string, username: string, epoch: number;
    if (parts.length === 4) {
      username = parts[1];
      epoch = Number(parts[2]);
      sig = parts[3];
      if (!Number.isInteger(epoch) || epoch < 0) return null;
      msg = `u:${username}:${epoch}`;
    } else if (parts.length === 3) {
      username = parts[1];
      epoch = 0;
      sig = parts[2];
      msg = `u:${username}`; // legacy signing input
    } else {
      return null;
    }

    const expected = createHmac("sha256", key).update(msg).digest("hex");
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
    return { username: username.toLowerCase(), epoch };
  } catch {
    return null;
  }
}

/** HMAC-only verify (no epoch enforcement) — returns the username or null. */
export function verifySessionToken(token: string): string | null {
  return parseSessionToken(token)?.username ?? null;
}

/** The user's current session epoch (0 if never bumped). */
export async function getSessionEpoch(username: string): Promise<number> {
  const v = await redis.hget<string | number>(`user:${username.toLowerCase()}`, "sessionEpoch");
  const n = Number(v ?? 0);
  return Number.isFinite(n) ? n : 0;
}

/** Bump the user's session epoch → invalidates all prior sessions. Returns the new epoch. */
export async function bumpSessionEpoch(username: string): Promise<number> {
  return await redis.hincrby(`user:${username.toLowerCase()}`, "sessionEpoch", 1);
}

// Full verification: HMAC + the token's epoch must equal the user's current epoch.
async function verifyWithEpoch(token: string | undefined): Promise<string | null> {
  if (!token) return null;
  const parsed = parseSessionToken(token);
  if (!parsed) return null;
  const current = await getSessionEpoch(parsed.username);
  if (parsed.epoch !== current) return null;
  return parsed.username;
}

export async function getServerSession(req: NextRequest): Promise<string | null> {
  return verifyWithEpoch(req.cookies.get("session_token")?.value);
}

/** For use in Server Component pages (not route handlers). */
export async function getSessionFromCookies(): Promise<string | null> {
  const jar = await cookies();
  return verifyWithEpoch(jar.get("session_token")?.value);
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    // Share across *.kryptoscronos.com so the audit subdomain (apps/audit) can
    // read a logged-in user's session for the allowlist gate. Host-only in dev.
    domain: process.env.NODE_ENV === "production" ? ".kryptoscronos.com" : undefined,
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  };
}
