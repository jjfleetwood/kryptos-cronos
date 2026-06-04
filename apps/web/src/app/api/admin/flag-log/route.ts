import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { requireAdmin } from "@/lib/admin-auth";

export async function GET(req: NextRequest) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const raw = await redis.lrange("admin:flag-log", 0, 499);
  const entries = raw.map((item) => {
    try { return typeof item === "string" ? JSON.parse(item) : item; } catch { return null; }
  }).filter(Boolean);

  return NextResponse.json({ entries });
}
