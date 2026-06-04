import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { logAdminAction } from "@/lib/audit";
import { requireAdmin } from "@/lib/admin-auth";

const VALID_GROUPS = new Set(["elementary", "junior-hs", "high-school", "university", "career", "curious"]);

export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null) as { username?: string; groups?: unknown } | null;
  const groups = body?.groups;
  if (!body?.username || !Array.isArray(groups) || groups.length === 0 || !groups.every((g) => VALID_GROUPS.has(g as string))) {
    return NextResponse.json({ error: "invalid params" }, { status: 400 });
  }

  const lower = body.username.toLowerCase();
  await redis.hset(`user:${lower}`, { userGroups: JSON.stringify(groups) });
  logAdminAction(admin, "set-group", `${lower}:${(groups as string[]).join(",")}`).catch(() => {});
  return NextResponse.json({ ok: true });
}
