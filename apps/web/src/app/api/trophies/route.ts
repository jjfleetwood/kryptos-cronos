import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getAuthedUsername } from "@/lib/api-auth";
import { verifyAdminToken } from "@/lib/admin-token";
import { TROPHIES, getTrophy, dailyShopTrophies } from "@kryptos/core/trophies";
import { stages } from "@kryptos/core/stages";
import { milestoneBadges } from "@kryptos/core/milestone-badges";

async function getClaimedCounts(ids: string[]): Promise<Record<string, number>> {
  if (ids.length === 0) return {};
  const pipeline = redis.pipeline();
  for (const id of ids) pipeline.get(`trophy:claimed:${id}`);
  const results = await pipeline.exec();
  const out: Record<string, number> = {};
  ids.forEach((id, i) => { out[id] = Number(results?.[i] ?? 0); });
  return out;
}

/** GET /api/trophies
 *  Admin: full library + claimed counts
 *  User:  daily shop rotation (10) + their owned trophies
 */
export async function GET(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const lower = username.toLowerCase();

  const isAdmin = verifyAdminToken(req.cookies.get("admin_token")?.value) !== null;

  const [inventoryRaw, progressData] = await Promise.all([
    redis.smembers(`inventory:${lower}`),
    redis.hgetall(`progress:${lower}`),
  ]);
  const inventory = (inventoryRaw ?? []) as string[];
  const ownedIds = inventory.filter((id) => TROPHY_MAP_IDS.has(id));

  // Resolve earned badges (stage completions + milestones)
  function parseArr(val: unknown): string[] {
    if (!val) return [];
    if (Array.isArray(val)) return val as string[];
    const s = String(val);
    try { const p = JSON.parse(s); return Array.isArray(p) ? p : []; } catch { return s.split(",").filter(Boolean); }
  }
  const badgeIds = parseArr(progressData?.badges);
  const stageBadgeMap = new Map(stages.map((s) => [s.badge.id, { name: s.badge.name, emoji: s.badge.emoji }]));
  const milestoneBadgeMap = new Map(milestoneBadges.map((b) => [b.id, { name: b.name, emoji: b.emoji, desc: b.desc }]));

  type EarnedBadge = { id: string; name: string; emoji: string; source: "stage" | "milestone"; desc?: string };
  const earnedBadges: EarnedBadge[] = badgeIds
    .map((id): EarnedBadge | null => {
      const sb = stageBadgeMap.get(id);
      if (sb) return { id, name: sb.name, emoji: sb.emoji, source: "stage" };
      const mb = milestoneBadgeMap.get(id);
      if (mb) return { id, name: mb.name, emoji: mb.emoji, source: "milestone", desc: mb.desc };
      return null;
    })
    .filter((b): b is EarnedBadge => b !== null);

  // Everyone (including admin) gets the normal daily rotation + their owned trophies
  const shopTrophies = dailyShopTrophies(lower, 10);
  const allRelevantIds = [...new Set([...shopTrophies.map((t) => t.id), ...ownedIds])];
  const claimedCounts = await getClaimedCounts(allRelevantIds);

  const shopWithSupply = shopTrophies.map((t) => ({
    ...t,
    claimed: claimedCounts[t.id] ?? 0,
    remaining: t.supply - (claimedCounts[t.id] ?? 0),
  }));

  const ownedTrophies = ownedIds
    .map((id) => {
      const t = getTrophy(id);
      if (!t) return null;
      return { ...t, claimed: claimedCounts[id] ?? 0, remaining: t.supply - (claimedCounts[id] ?? 0) };
    })
    .filter(Boolean);

  return NextResponse.json({ mode: "user", shop: shopWithSupply, owned: ownedTrophies, earnedBadges, isAdmin });
}

/** POST /api/trophies
 *  Body: { trophyId: string }
 *  Buy a trophy from the daily shop rotation
 */
export async function POST(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const lower = username.toLowerCase();

  const body = await req.json().catch(() => null) as { trophyId?: string } | null;
  const trophyId = body?.trophyId?.trim() ?? "";
  if (!trophyId) return NextResponse.json({ error: "trophyId required" }, { status: 400 });

  const trophy = getTrophy(trophyId);
  if (!trophy) return NextResponse.json({ error: "Trophy not found" }, { status: 404 });

  // Verify it's in the user's daily rotation (prevents buying arbitrary trophies)
  const isAdmin = verifyAdminToken(req.cookies.get("admin_token")?.value) !== null;
  if (!isAdmin) {
    const shopToday = dailyShopTrophies(lower, 10);
    if (!shopToday.some((t) => t.id === trophyId)) {
      return NextResponse.json({ error: "Trophy not in today's shop" }, { status: 403 });
    }
  }

  // Check already owned
  const alreadyOwned = await redis.sismember(`inventory:${lower}`, trophyId);
  if (alreadyOwned) return NextResponse.json({ error: "Already owned" }, { status: 409 });

  // Check and reserve supply atomically
  const newClaimed = await redis.incr(`trophy:claimed:${trophyId}`);
  if (newClaimed > trophy.supply) {
    await redis.decr(`trophy:claimed:${trophyId}`);
    return NextResponse.json({ error: "Sold out" }, { status: 410 });
  }

  // Check balance
  const progressData = await redis.hgetall(`progress:${lower}`);
  const coins = Number(progressData?.coins ?? 0);
  const coinsSpent = Number(progressData?.coinsSpent ?? 0);
  const spendable = Math.max(0, coins - coinsSpent);

  if (spendable < trophy.price) {
    await redis.decr(`trophy:claimed:${trophyId}`);
    return NextResponse.json({ error: "Insufficient coins", spendable, price: trophy.price }, { status: 402 });
  }

  // Commit: add to inventory and increment coinsSpent
  await Promise.all([
    redis.sadd(`inventory:${lower}`, trophyId),
    redis.hincrbyfloat(`progress:${lower}`, "coinsSpent", trophy.price),
  ]);

  return NextResponse.json({
    ok: true,
    trophy: { id: trophy.id, name: trophy.name, emoji: trophy.emoji },
    newSpendable: spendable - trophy.price,
  });
}

// Set of all trophy IDs for fast membership check
const TROPHY_MAP_IDS = new Set(TROPHIES.map((t) => t.id));
