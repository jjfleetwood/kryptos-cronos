import "server-only";
import { supabaseAdmin } from "./supabase";
import { redis } from "./redis";

// Verify a Supabase-issued access token (JWT) and resolve it to our Redis
// username (lowercased), or null if invalid / unprovisioned.
//
// SECURITY: identity is resolved from the token's *verified top-level email*
// claim, then mapped through the `email:{email}` reverse index — NOT from
// `user_metadata.username`, which is user-editable via `auth.updateUser()` and
// therefore spoofable (would allow account takeover). The email claim reflects
// auth.users.email and cannot be changed without Supabase re-verification.
//
// Uses the official getUser(token) — algorithm-agnostic, so it survives
// Supabase's symmetric→asymmetric signing-key migration. Trade-off: one network
// call to Supabase Auth per authenticated request (future: local JWKS verify).
export async function verifySupabaseJwt(token: string): Promise<string | null> {
  if (!token) return null;
  try {
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data?.user) return null;
    const email = data.user.email?.toLowerCase().trim();
    if (!email) return null;
    const username = await redis.get<string>(`email:${email}`);
    if (!username) return null;
    return String(username).toLowerCase();
  } catch {
    return null;
  }
}
