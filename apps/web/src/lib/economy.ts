import "server-only";
import { redis } from "@/lib/redis";

/**
 * Progression economy (v3 — coin economy retired).
 *
 * The platform no longer has a spendable coin wallet. The only lifetime number
 * is `xp`, which drives Level / Rank / Leagues / leaderboard. It is earn-side
 * only and self-healing (recomputed from completed stages ± penalty/bonus in the
 * award path), so it can never be spent or forged.
 *
 *   - `xp`  lifetime XP.
 *   - `gv`  economy schema version (3 = coins removed).
 *
 * Migration (→ v3) is lazy and lossless: `xp` is taken from the existing `xp`
 * (or the legacy `coins` lifetime total), and the dead `coins`/`coinsEarned`/
 * `coinsSpent` fields are deleted so no reader consumes them.
 */

export const ECONOMY_VERSION = 3;

export type Economy = {
  xp: number;
};

/** Pure: derive the v3 economy from a raw progress hash, applying the migration rule. */
export function deriveEconomy(
  raw: Record<string, unknown> | null | undefined
): Economy & { migrated: boolean } {
  const gv = Number(raw?.gv ?? 0);
  if (gv >= ECONOMY_VERSION) {
    return { xp: Number(raw?.xp ?? 0), migrated: false };
  }
  // Older record: xp is the existing xp, or the legacy `coins`/older `xp` total.
  const xp = Number(raw?.xp ?? raw?.coins ?? 0);
  return { xp, migrated: true };
}

/** Persist a lazy migration (idempotent). Drops the dead coin fields. */
async function persistMigration(key: string, e: Economy): Promise<void> {
  await redis.hset(key, { xp: e.xp, gv: ECONOMY_VERSION });
  await redis.hdel(key, "coins", "coinsEarned", "coinsSpent");
}

/** Read a user's economy, lazily migrating legacy records in place. */
export async function readEconomy(username: string): Promise<Economy> {
  const key = `progress:${username.toLowerCase()}`;
  const raw = await redis.hgetall(key);
  const e = deriveEconomy(raw);
  if (e.migrated) await persistMigration(key, e);
  return e;
}
