import "server-only";
import { redis } from "@/lib/redis";
import { stagesMeta } from "@kryptos/core/stages-meta";

const TRIAL_DAYS = 7;
const TRIAL_MS = TRIAL_DAYS * 24 * 60 * 60 * 1000;

// ── Open-access dev mode ──────────────────────────────────────────────────────
// During development every module is free for any signed-in user — no paywall,
// no trial expiry, no sequential lock. At launch, flip this to `false` to restore
// the tier gating below (and decide the free/Pro content split at that point).
const OPEN_ACCESS = true;

export async function getUserTier(username: string): Promise<"free" | "pro" | "trial"> {
  // Dev: everyone is Pro, so all content AND Pro-only perks (ARIA hint cooldowns,
  // hints 2+) are open to every signed-in user. Flip OPEN_ACCESS to re-gate at launch.
  if (OPEN_ACCESS) return "pro";
  const lower = username.toLowerCase();
  const [tier, createdAt, voucherExpiry] = await Promise.all([
    redis.hget(`user:${lower}`, "tier"),
    redis.hget(`user:${lower}`, "createdAt"),
    redis.hget(`user:${lower}`, "voucherExpiry"),
  ]);
  // "all-star" was a legacy tier — treat as pro
  if (tier === "pro" || tier === "all-star") {
    // If this pro access came from a voucher, check if it has expired
    if (voucherExpiry && Date.now() > Number(voucherExpiry)) {
      await redis.hset(`user:${lower}`, { tier: "free", voucherExpiry: "" });
      return "free";
    }
    return "pro";
  }
  if (tier === "free") return "free"; // explicit revoke — skip trial
  const age = Date.now() - Number(createdAt ?? 0);
  if (age < TRIAL_MS) return "trial";
  return "free";
}

function parseArr(val: unknown): string[] {
  if (!val) return [];
  if (Array.isArray(val)) return val as string[];
  const s = String(val);
  try { const p = JSON.parse(s); return Array.isArray(p) ? p : []; } catch { return s.split(",").filter(Boolean); }
}

/**
 * Returns true if username may access stageId.
 * - admin / trial → always allowed
 * - pro → sequential gate: must have completed all prior stages in the epoch
 * - free → blocked
 */
export async function canAccessStage(stageId: string, username: string | null): Promise<boolean> {
  if (!username) return false;
  const lower = username.toLowerCase();

  const adminUsername = process.env.ADMIN_USERNAME;
  if (adminUsername && lower === adminUsername.toLowerCase()) return true;

  // Dev: all content is free for every signed-in user (see OPEN_ACCESS above).
  if (OPEN_ACCESS) return true;

  const tier = await getUserTier(lower);

  if (tier === "trial") return true;
  if (tier === "free") return false;

  // Pro: sequential gate — must complete all prior stages in the same epoch
  const stage = stagesMeta.find((s) => s.id === stageId);
  if (!stage) return false;

  const priorStages = stagesMeta
    .filter((s) => s.epochId === stage.epochId && s.order < stage.order);

  if (priorStages.length === 0) return true; // first stage in epoch — always open

  const isAuditEpoch = stage.epochId.startsWith("tech-audit-");

  const [progressData, quizData] = await Promise.all([
    redis.hget(`progress:${lower}`, "stages"),
    isAuditEpoch ? redis.hget(`progress:${lower}`, "quizStages") : Promise.resolve(null),
  ]);

  const completed = new Set(parseArr(progressData));
  if (!isAuditEpoch) return priorStages.every((s) => completed.has(s.id));

  // Audit epochs: quiz completion OR CTF completion unlocks the next stage
  const quizCompleted = new Set(parseArr(quizData));
  return priorStages.every((s) => completed.has(s.id) || quizCompleted.has(s.id));
}
