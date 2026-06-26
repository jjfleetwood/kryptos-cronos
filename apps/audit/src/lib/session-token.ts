import { createHmac, timingSafeEqual } from "crypto";

// Verifies the main app's `session_token` cookie (shared across *.kryptoscronos.com).
// Mirrors apps/web/src/lib/server-session.ts. Two accepted formats:
//   • new:    `u:{user}:{epoch}:{hmac(u:{user}:{epoch})}`
//   • legacy: `u:{user}:{hmac(u:{user})}`
// We only need the identity here (the allowlist gate); epoch enforcement is the
// main app's concern. secret = SESSION_SECRET (falls back to ADMIN_SECRET).
function secret(): string | null {
  return process.env.SESSION_SECRET ?? process.env.ADMIN_SECRET ?? null;
}

/** Returns the lowercased username if the token's HMAC verifies, else null. */
export function verifySessionToken(token: string | undefined | null): string | null {
  const key = secret();
  if (!key || !token) return null;
  try {
    const parts = token.split(":");
    if (parts[0] !== "u") return null;

    let msg: string, sig: string, username: string;
    if (parts.length === 4) {
      username = parts[1];
      const epoch = Number(parts[2]);
      sig = parts[3];
      if (!Number.isInteger(epoch) || epoch < 0) return null;
      msg = `u:${username}:${epoch}`;
    } else if (parts.length === 3) {
      username = parts[1];
      sig = parts[2];
      msg = `u:${username}`;
    } else {
      return null;
    }

    const expected = createHmac("sha256", key).update(msg).digest("hex");
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
    return username.toLowerCase();
  } catch {
    return null;
  }
}
