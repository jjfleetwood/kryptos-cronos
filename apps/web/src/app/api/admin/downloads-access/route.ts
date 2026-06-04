import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { logAdminAction } from "@/lib/audit";
import { requireAdmin } from "@/lib/admin-auth";

const MODE_KEY = "feature:downloads:mode";
const ALLOWLIST_KEY = "feature:downloads:allowlist";

export async function GET(req: NextRequest) {
  if (!(await requireAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const [mode, members] = await Promise.all([
    redis.get(MODE_KEY),
    redis.smembers(ALLOWLIST_KEY),
  ]);

  return NextResponse.json({
    mode: (mode as string) ?? "off",
    allowlist: members ?? [],
  });
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json() as { action: string; mode?: string; username?: string };

  if (body.action === "set-mode") {
    if (!["off", "allowlist", "all"].includes(body.mode ?? "")) {
      return NextResponse.json({ error: "invalid mode" }, { status: 400 });
    }
    await redis.set(MODE_KEY, body.mode!);
    logAdminAction(admin, "downloads-set-mode", body.mode!).catch(() => {});
    return NextResponse.json({ ok: true });
  }

  if (body.action === "grant" && body.username) {
    await redis.sadd(ALLOWLIST_KEY, body.username);
    logAdminAction(admin, "downloads-grant", body.username).catch(() => {});
    return NextResponse.json({ ok: true });
  }

  if (body.action === "revoke" && body.username) {
    await redis.srem(ALLOWLIST_KEY, body.username);
    logAdminAction(admin, "downloads-revoke", body.username).catch(() => {});
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "unknown action" }, { status: 400 });
}
