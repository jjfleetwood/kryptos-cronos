import "server-only";
import { redis } from "@/lib/redis";
import { verifyAdminToken } from "@/lib/admin-token";

const MAX_LOG_ENTRIES = 1000;

export async function logAdminAction(admin: string, action: string, target?: string): Promise<void> {
  const entry = JSON.stringify({ admin, action, ...(target ? { target } : {}), ts: Date.now() });
  await redis.lpush("audit:log", entry);
  redis.ltrim("audit:log", 0, MAX_LOG_ENTRIES - 1).catch(() => {});
}

// Verified admin username from a token (signature + expiry checked); null if invalid.
export function extractAdminUsername(token: string): string | null {
  return verifyAdminToken(token);
}
