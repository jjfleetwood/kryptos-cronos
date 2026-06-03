import "server-only";
import type { NextRequest } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { getServerSession } from "./server-session";
import { verifySupabaseJwt } from "./supabase-jwt";

function bearerToken(req: NextRequest): string | null {
  const header = req.headers.get("authorization");
  if (!header) return null;
  const match = /^Bearer\s+(.+)$/i.exec(header.trim());
  return match ? match[1].trim() : null;
}

// Verify the HMAC-signed admin_token cookie and return the admin username, or null.
// Centralized here so routes can opt into an admin-identity fallback consistently.
export function extractAdminUsername(req: NextRequest): string | null {
  const secret = process.env.ADMIN_SECRET;
  const token = req.cookies.get("admin_token")?.value ?? "";
  if (!secret || !token) return null;
  const colonIdx = token.lastIndexOf(":");
  if (colonIdx === -1) return null;
  const user = token.slice(0, colonIdx);
  const sig = token.slice(colonIdx + 1);
  if (!user || !sig) return null;
  const expected = createHmac("sha256", secret).update(user).digest("hex");
  try {
    const a = Buffer.from(sig, "hex");
    const b = Buffer.from(expected, "hex");
    return a.length === b.length && timingSafeEqual(a, b) ? user.toLowerCase() : null;
  } catch {
    return null;
  }
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
