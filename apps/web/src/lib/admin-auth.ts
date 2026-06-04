import "server-only";
import type { NextRequest } from "next/server";
import { redis } from "@/lib/redis";
import { parseAdminToken } from "@/lib/admin-token";

const revokedKey = (u: string) => `admin:revokedBefore:${u.toLowerCase()}`;

/**
 * Resolve the admin identity from a request's admin_token cookie for a PRIVILEGED
 * action. Verifies the signature, the expiry, AND a per-user revocation epoch —
 * any token minted before `revokeAdminSessions` was last called for that user is
 * rejected. Returns the lowercased admin username, or null.
 */
export async function requireAdmin(req: NextRequest): Promise<string | null> {
  const parsed = parseAdminToken(req.cookies.get("admin_token")?.value);
  if (!parsed) return null;
  const revokedBefore = await redis.get<number>(revokedKey(parsed.username));
  if (revokedBefore && parsed.iat < Number(revokedBefore)) return null;
  return parsed.username;
}

/**
 * Revoke every admin token for `username` issued before now — e.g. when admin is
 * removed from an account or a token is suspected compromised. Live admin cookies
 * stop working immediately; the user must re-authenticate.
 */
export async function revokeAdminSessions(username: string): Promise<void> {
  await redis.set(revokedKey(username), Date.now());
}
