import { createHmac, timingSafeEqual } from "crypto";

// Canonical admin-token primitives (copied from apps/web/src/lib/admin-token.ts
// so this isolated deployment shares the SAME token format + ADMIN_SECRET as the
// main app — an admin_token minted by the main app's /api/admin-session verifies
// here too). Pure + synchronous so the edge gate (src/proxy.ts) can use them.
//
// Token format (v2): `v2.<username>.<issuedAtMs>.<hmacHex>`, HMAC over
// `v2.<username>.<issuedAtMs>` keyed by ADMIN_SECRET, 8h server-side expiry.

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

export function parseAdminToken(
  token: string | undefined | null
): { username: string; iat: number } | null {
  const secret = getSecret();
  if (!secret || !token) return null;

  const parts = token.split(".");
  if (parts.length < 4 || parts[0] !== "v2") return null;

  const sig = parts[parts.length - 1];
  const iatStr = parts[parts.length - 2];
  const user = parts.slice(1, parts.length - 2).join(".");
  if (!user || !sig || !/^\d+$/.test(iatStr)) return null;

  const iat = Number(iatStr);
  if (!Number.isFinite(iat)) return null;
  if (Date.now() - iat > ADMIN_TOKEN_MAX_AGE_MS) return null;

  const expected = createHmac("sha256", secret).update(`v2.${user}.${iatStr}`).digest("hex");
  if (!safeHexEqual(sig, expected)) return null;

  return { username: user.toLowerCase(), iat };
}

export function verifyAdminToken(token: string | undefined | null): string | null {
  return parseAdminToken(token)?.username ?? null;
}
