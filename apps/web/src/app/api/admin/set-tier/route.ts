import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { logAdminAction } from "@/lib/audit";
import { requireAdmin } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null) as { username?: string; tier?: string } | null;
  const username = body?.username?.toLowerCase().trim();
  const VALID_TIERS = ["pro", "free"] as const;
  type ValidTier = typeof VALID_TIERS[number];
  const tier: ValidTier = VALID_TIERS.includes(body?.tier as ValidTier) ? (body!.tier as ValidTier) : "free";

  if (!username) return NextResponse.json({ error: "username required" }, { status: 400 });

  const exists = await redis.exists(`user:${username}`);
  if (!exists) return NextResponse.json({ error: "User not found" }, { status: 404 });

  await redis.hset(`user:${username}`, { tier });
  logAdminAction(admin, "set-tier", `${username}:${tier}`).catch(() => {});
  return NextResponse.json({ ok: true, username, tier });
}
