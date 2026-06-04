import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getServerSession } from "@/lib/server-session";
import { requireAdmin } from "@/lib/admin-auth";
import { SHOP_ITEMS } from "@kryptos/core/shop-items";
import { TROPHIES } from "@kryptos/core/trophies";

/** GET /api/admin/catalog
 *  Admin-only. Returns all shop items + all trophies with claimed counts and admin's inventory.
 */
export async function GET(req: NextRequest) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const username = getServerSession(req);
  const lower = (username ?? "").toLowerCase();

  const [inventoryRaw, claimedKeys] = await Promise.all([
    lower ? redis.smembers(`inventory:${lower}`) : Promise.resolve([]),
    (async () => {
      const pipeline = redis.pipeline();
      for (const t of TROPHIES) pipeline.get(`trophy:claimed:${t.id}`);
      return pipeline.exec();
    })(),
  ]);

  const inventory = new Set((inventoryRaw ?? []) as string[]);

  const trophiesWithSupply = TROPHIES.map((t, i) => ({
    ...t,
    claimed: Number(claimedKeys?.[i] ?? 0),
    remaining: t.supply - Number(claimedKeys?.[i] ?? 0),
    owned: inventory.has(t.id),
  }));

  return NextResponse.json({
    items: SHOP_ITEMS.map((i) => ({ ...i, owned: inventory.has(i.id) })),
    trophies: trophiesWithSupply,
  });
}
