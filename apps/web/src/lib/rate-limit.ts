import "server-only";
import { redis } from "@/lib/redis";

/**
 * Fixed-window rate limit. Returns true if the caller is now OVER the limit.
 *
 * Key on the AUTHENTICATED username wherever possible — it can't be spoofed —
 * and fall back to the client IP only for pre-auth endpoints.
 */
export async function isRateLimited(
  bucket: string,
  id: string,
  max: number,
  windowSeconds: number
): Promise<boolean> {
  const key = `rate:${bucket}:${id}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, windowSeconds);
  return count > max;
}
