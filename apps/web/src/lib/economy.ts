import "server-only";
import { redis } from "@/lib/redis";

/**
 * Gamification economy v2 (Phase 0 — economy split).
 *
 * The progress hash historically used ONE number, `coins`, for both the
 * leaderboard rank (lifetime earned) and the shop balance (`coins - coinsSpent`).
 * v2 splits these into disjoint, collision-free fields so earning and spending
 * never write the same key:
 *
 *   - `xp`          lifetime XP — drives Level / Rank / Leagues / leaderboard.
 *                   Earn-side only. Self-healing (recomputed from completed stages).
 *   - `coinsEarned` lifetime coins earned. Earn-side only. Equals `xp` in Phase 0
 *                   but diverges once quests / Pro multipliers grant coins (Phase 3+).
 *   - `coinsSpent`  lifetime coins spent. Spend-side only (atomic accumulator).
 *   - `gv`          economy schema version (2 = split applied).
 *
 * Spendable wallet is DERIVED, never stored: `wallet = coinsEarned - coinsSpent`.
 *
 * Migration (v1 → v2) is lazy and lossless, matching the approved rule:
 *   new xp = old `coins` (or older `xp`)   →  leaderboard rank unchanged
 *   new wallet = old coins - coinsSpent    →  spendable balance unchanged
 * The stale legacy `coins` field is deleted on migration so no un-updated reader
 * can silently consume a frozen lifetime value.
 */

export const ECONOMY_VERSION = 2;

export type Economy = {
  xp: number;
  coinsEarned: number;
  coinsSpent: number;
  /** Derived spendable balance: max(0, coinsEarned - coinsSpent). */
  wallet: number;
};

/** Pure: derive the v2 economy from a raw progress hash, applying the migration rule. */
export function deriveEconomy(
  raw: Record<string, unknown> | null | undefined
): Economy & { migrated: boolean } {
  const gv = Number(raw?.gv ?? 0);
  if (gv >= ECONOMY_VERSION) {
    const xp = Number(raw?.xp ?? 0);
    const coinsEarned = Number(raw?.coinsEarned ?? xp);
    const coinsSpent = Number(raw?.coinsSpent ?? 0);
    return { xp, coinsEarned, coinsSpent, wallet: Math.max(0, coinsEarned - coinsSpent), migrated: false };
  }
  // Legacy v1: `coins` (or older `xp`) held the lifetime total.
  const lifetime = Number(raw?.coins ?? raw?.xp ?? 0);
  const coinsSpent = Number(raw?.coinsSpent ?? 0);
  return { xp: lifetime, coinsEarned: lifetime, coinsSpent, wallet: Math.max(0, lifetime - coinsSpent), migrated: true };
}

/** Persist a lazy migration (idempotent). Drops the stale legacy `coins` field. */
async function persistMigration(key: string, e: Economy): Promise<void> {
  await redis.hset(key, { xp: e.xp, coinsEarned: e.coinsEarned, gv: ECONOMY_VERSION });
  await redis.hdel(key, "coins");
}

/** Read a user's economy, lazily migrating v1 records to v2 in place. */
export async function readEconomy(username: string): Promise<Economy> {
  const key = `progress:${username.toLowerCase()}`;
  const raw = await redis.hgetall(key);
  const e = deriveEconomy(raw);
  if (e.migrated) await persistMigration(key, e);
  return e;
}

/**
 * Spend from the wallet atomically. Migrates first if needed, then decrements the
 * spend-side accumulator with a rollback guard. Returns the new wallet balance, or
 * `null` if the user can't afford it (caller should return 402).
 */
export async function spendCoins(username: string, amount: number): Promise<number | null> {
  if (!(amount > 0)) return null;
  const key = `progress:${username.toLowerCase()}`;
  const raw = await redis.hgetall(key);
  const e = deriveEconomy(raw);
  if (e.migrated) await persistMigration(key, e);
  if (e.wallet < amount) return null;

  const newSpent = Number(await redis.hincrbyfloat(key, "coinsSpent", amount));
  const newWallet = e.coinsEarned - newSpent;
  if (newWallet < 0) {
    // Lost a race — roll the accumulator back and reject.
    await redis.hincrbyfloat(key, "coinsSpent", -amount);
    return null;
  }
  return newWallet;
}
