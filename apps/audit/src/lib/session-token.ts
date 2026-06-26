import { createHmac, timingSafeEqual } from "crypto";

// Verifies the main app's `session_token` cookie (shared across *.kryptoscronos.com).
// Must mirror apps/web/src/lib/server-session.ts exactly:
//   token = `u:${username}:${hmac}`  where hmac = HMAC-SHA256(secret, `u:${username}`)
//   secret = SESSION_SECRET (falls back to ADMIN_SECRET during transition)
function secret(): string | null {
  return process.env.SESSION_SECRET ?? process.env.ADMIN_SECRET ?? null;
}

function sign(username: string, key: string): string {
  const hmac = createHmac("sha256", key).update(`u:${username}`).digest("hex");
  return `u:${username}:${hmac}`;
}

/** Returns the lowercased username if the token verifies, else null. */
export function verifySessionToken(token: string | undefined | null): string | null {
  const key = secret();
  if (!key || !token) return null;
  try {
    const parts = token.split(":");
    if (parts.length < 3 || parts[0] !== "u") return null;
    const username = parts[1];
    const expected = sign(username, key);
    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return null;
    if (!timingSafeEqual(a, b)) return null;
    return username.toLowerCase();
  } catch {
    return null;
  }
}
