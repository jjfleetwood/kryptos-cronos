import { createHmac, timingSafeEqual } from "crypto";

// Canonical admin-token primitives. Pure + synchronous (no Redis) so the Edge
// middleware (proxy.ts) can use them. Privileged API routes should prefer
// `requireAdmin` from "@/lib/admin-auth", which layers Redis-backed revocation
// on top of this signature + expiry check.
//
// Token format (v2): `v2.<username>.<issuedAtMs>.<hmacHex>` where the HMAC is
// over `v2.<username>.<issuedAtMs>` keyed by ADMIN_SECRET. The issued-at lets
// tokens expire server-side (legacy `<user>:<sig>` tokens — which never expired —
// are no longer accepted, so existing admin sessions must re-login once).

export const ADMIN_TOKEN_MAX_AGE_MS = 8 * 60 * 60 * 1000; // 8 hours

function getSecret(): string | null {
  return process.env.ADMIN_SECRET ?? null;
}

function safeHexEqual(a: string, b: string): boolean {
  try {
    const ab = Buffer.from(a, "hex");
    const bb = Buffer.from(b, "hex");
    return ab.length > 0 && ab.length === bb.length && timingSafeEqual(ab, bb);
  } catch {
    return false;
  }
}

/** Mint a fresh admin token for `username` (stamped with the current time). */
export function signAdminToken(username: string): string {
  const secret = getSecret();
  if (!secret) throw new Error("ADMIN_SECRET is not configured");
  const lower = username.toLowerCase().trim();
  const msg = `v2.${lower}.${Date.now()}`;
  const sig = createHmac("sha256", secret).update(msg).digest("hex");
  return `${msg}.${sig}`;
}

/** Verify signature + expiry. Returns `{ username, iat }` or null. */
export function parseAdminToken(
  token: string | undefined | null
): { username: string; iat: number } | null {
  const secret = getSecret();
  if (!secret || !token) return null;

  const parts = token.split(".");
  if (parts.length < 4 || parts[0] !== "v2") return null;

  const sig = parts[parts.length - 1];
  const iatStr = parts[parts.length - 2];
  const user = parts.slice(1, parts.length - 2).join("."); // tolerate dots in username
  if (!user || !sig || !/^\d+$/.test(iatStr)) return null;

  const iat = Number(iatStr);
  if (!Number.isFinite(iat)) return null;
  if (Date.now() - iat > ADMIN_TOKEN_MAX_AGE_MS) return null; // expired

  const expected = createHmac("sha256", secret).update(`v2.${user}.${iatStr}`).digest("hex");
  if (!safeHexEqual(sig, expected)) return null;

  return { username: user.toLowerCase(), iat };
}

/** Verify a token's signature + expiry; returns the lowercased username or null. */
export function verifyAdminToken(token: string | undefined | null): string | null {
  return parseAdminToken(token)?.username ?? null;
}
