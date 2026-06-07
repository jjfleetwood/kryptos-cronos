import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getAuthedUsername } from "@/lib/api-auth";
import { spendCoins } from "@/lib/economy";
import { MAX_FREEZES, FREEZE_PRICE } from "@kryptos/core/streaks";

/** POST /api/streak/freeze — buy one streak freeze with coins (capped at MAX_FREEZES). */
export async function POST(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const lower = username.toLowerCase();

  const current = Number((await redis.hget(`streak:${lower}`, "freezes")) ?? 0);
  if (current >= MAX_FREEZES) {
    return NextResponse.json({ error: "max freezes", freezes: current }, { status: 409 });
  }

  const wallet = await spendCoins(username, FREEZE_PRICE);
  if (wallet === null) {
    return NextResponse.json({ error: "insufficient coins", price: FREEZE_PRICE }, { status: 402 });
  }

  let freezes = Number(await redis.hincrby(`streak:${lower}`, "freezes", 1));
  if (freezes > MAX_FREEZES) {
    await redis.hset(`streak:${lower}`, { freezes: MAX_FREEZES });
    freezes = MAX_FREEZES;
  }
  return NextResponse.json({ ok: true, freezes, wallet, price: FREEZE_PRICE });
}
