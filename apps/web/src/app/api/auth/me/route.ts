import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getAuthedUsername } from "@/lib/api-auth";
import { verifyAdminToken } from "@/lib/admin-token";

export async function GET(req: NextRequest) {
  let username = await getAuthedUsername(req);
  const adminUser = verifyAdminToken(req.cookies.get("admin_token")?.value);
  const isAdmin = adminUser !== null;

  // Fallback: use admin token identity when session cookie is absent
  if (!username && adminUser) {
    username = adminUser;
  }

  if (!username) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = await redis.hgetall<{ email: string; tier: string; createdAt: string; voucherExpiry: string }>(`user:${username}`);
  if (!data && !isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const superAdmin = process.env.ADMIN_USERNAME?.toLowerCase();
  const isSuperAdmin = !!superAdmin && username === superAdmin;

  // Compute tier + trial days remaining
  const TRIAL_MS = 7 * 24 * 60 * 60 * 1000;
  const rawTier = data?.tier ?? null;
  const createdAt = Number(data?.createdAt ?? 0);
  let tier: "free" | "pro" | "trial";
  let trialDaysLeft: number | null = null;
  // "all-star" is a legacy tier — treat as pro
  if (rawTier === "pro" || rawTier === "all-star") tier = "pro";
  else if (rawTier === "free") tier = "free";
  else {
    const msLeft = createdAt + TRIAL_MS - Date.now();
    if (msLeft > 0) {
      tier = "trial";
      trialDaysLeft = Math.max(1, Math.ceil(msLeft / (24 * 60 * 60 * 1000)));
    } else {
      tier = "free";
    }
  }

  const voucherExpiry = rawTier === "pro" && data?.voucherExpiry ? Number(data.voucherExpiry) : null;
  return NextResponse.json({ username, email: data?.email ?? "", isAdmin, isSuperAdmin, tier, trialDaysLeft, voucherExpiry });
}
