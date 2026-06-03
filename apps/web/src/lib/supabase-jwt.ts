import "server-only";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { supabaseAdmin } from "./supabase";
import { redis } from "./redis";

// Verify a Supabase-issued access token (JWT) and resolve it to our Redis
// username (lowercased), or null if invalid / unprovisioned.
//
// SECURITY: identity is resolved from the token's *verified top-level email*
// claim, then mapped through the `email:{email}` reverse index — NOT from
// `user_metadata.username`, which is user-editable via `auth.updateUser()` and
// therefore spoofable (would allow account takeover).
//
// PERF: a fast path verifies the JWT signature locally against the project JWKS
// (asymmetric keys) — no network call. It falls back to the authoritative
// supabaseAdmin.auth.getUser(token) when local verification can't apply (e.g. a
// symmetric-key project whose secret isn't in the JWKS, JWKS fetch hiccup, or a
// token jose rejects). So this is never *less* correct than the getUser-only
// path; the only trade-off is that the fast path trusts signature+expiry and
// won't catch a mid-token-life revocation/ban (acceptable for ~1h tokens).

let jwks: ReturnType<typeof createRemoteJWKSet> | null = null;
function getJwks(): ReturnType<typeof createRemoteJWKSet> | null {
  if (jwks) return jwks;
  const url = process.env.SUPABASE_URL;
  if (!url) return null;
  jwks = createRemoteJWKSet(new URL(`${url}/auth/v1/.well-known/jwks.json`));
  return jwks;
}

// Returns the verified, lowercased email claim, or null if local verification
// did not apply / failed.
async function verifyLocally(token: string): Promise<string | null> {
  const set = getJwks();
  if (!set) return null;
  try {
    const { payload } = await jwtVerify(token, set);
    const email = typeof payload.email === "string" ? payload.email.toLowerCase().trim() : "";
    return email || null;
  } catch {
    return null;
  }
}

async function verifyViaSupabase(token: string): Promise<string | null> {
  try {
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data?.user) return null;
    return data.user.email?.toLowerCase().trim() ?? null;
  } catch {
    return null;
  }
}

export async function verifySupabaseJwt(token: string): Promise<string | null> {
  if (!token) return null;

  // Fast path: local signature verification; fall back to the authoritative API.
  const email = (await verifyLocally(token)) ?? (await verifyViaSupabase(token));
  if (!email) return null;

  const username = await redis.get<string>(`email:${email}`);
  return username ? String(username).toLowerCase() : null;
}
