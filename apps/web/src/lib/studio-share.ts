import "server-only";
import crypto from "crypto";

// Secret share link for the Studio prose/audiobook. The token is a stable HMAC
// derived from ADMIN_SECRET — unguessable, no new env var, and revocable by
// rotating ADMIN_SECRET. It grants READ access only (the prose + the MP3) to
// anyone with the link, so the manuscript can be shared with family/friends
// without a Pro account, while staying off the public catalog and unindexed.
const SECRET = process.env.ADMIN_SECRET || process.env.SESSION_SECRET || "";

export function studioShareToken(): string {
  if (!SECRET) return "";
  return crypto.createHmac("sha256", SECRET).update("studio-share-v1").digest("hex").slice(0, 32);
}

export function isValidStudioShare(token: string | null | undefined): boolean {
  if (!token || !SECRET) return false;
  const expected = studioShareToken();
  if (token.length !== expected.length) return false;
  try {
    return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}
