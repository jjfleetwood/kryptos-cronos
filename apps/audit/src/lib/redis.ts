import { Redis } from "@upstash/redis";

// Lazily build an Upstash client from env. Returns null when the env isn't set
// (e.g. before the founder adds UPSTASH_* to this Vercel project) so the edge
// gate can degrade safely — admins still get in via the pure-HMAC admin_token
// path; the non-admin allowlist path simply denies until Redis is configured.
let client: Redis | null = null;

export function getRedis(): Redis | null {
  if (client) return client;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  client = new Redis({ url, token });
  return client;
}
