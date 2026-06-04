import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { logAdminAction } from "@/lib/audit";
import { requireAdmin } from "@/lib/admin-auth";

const VALID_SKINS = new Set(["youth", "standard", "mature"]);

export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null) as { username?: string; skin?: string } | null;
  if (!body?.username || !body?.skin || !VALID_SKINS.has(body.skin)) {
    return NextResponse.json({ error: "invalid params" }, { status: 400 });
  }

  await redis.hset(`progress:${body.username.toLowerCase()}`, { skin: body.skin });
  logAdminAction(admin, "set-skin", `${body.username.toLowerCase()}:${body.skin}`).catch(() => {});
  return NextResponse.json({ ok: true });
}
