import "server-only";
import type { NextRequest } from "next/server";
import { getServerSession } from "./server-session";
import { verifySupabaseJwt } from "./supabase-jwt";
import { verifyAdminToken } from "./admin-token";

function bearerToken(req: NextRequest): string | null {
  const header = req.headers.get("authorization");
  if (!header) return null;
  const match = /^Bearer\s+(.+)$/i.exec(header.trim());
  return match ? match[1].trim() : null;
}

// Verify the HMAC-signed admin_token cookie and return the admin username, or null.
// Centralized here so routes can opt into an admin-identity fallback consistently.
export function extractAdminUsername(req: NextRequest): string | null {
  return verifyAdminToken(req.cookies.get("admin_token")?.value);
}

// Unified identity resolver for API route handlers. Accepts a bearer Supabase
// JWT (mobile clients) first, then falls back to the HMAC session cookie (web).
// Returns a lowercased username, or null. Does NOT include an admin-cookie
// fallback — routes that want one append `?? extractAdminUsername(req)` so
// authorization semantics stay explicit and unchanged from before.
export async function getAuthedUsername(req: NextRequest): Promise<string | null> {
  const token = bearerToken(req);
  if (token) {
    const username = await verifySupabaseJwt(token);
    if (username) return username;
  }
  return getServerSession(req);
}
