import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { redis } from "@/lib/redis";

// RevenueCat webhook — the mobile counterpart to /api/webhooks/stripe.
// RevenueCat manages App Store / Play Store IAP subscriptions; this endpoint
// keeps the user's Redis `tier` in sync so getUserTier() stays the single
// source of truth across web (Stripe), mobile (RevenueCat), and vouchers.
//
// Setup (RevenueCat dashboard → Project → Webhooks):
//   - URL: https://kryptoscronos.com/api/webhooks/revenuecat
//   - Authorization header value: set to REVENUECAT_WEBHOOK_AUTH (verified below)
// The mobile app MUST call Purchases.logIn(username) so event.app_user_id is our
// lowercase username (not an anonymous $RCAnonymousID).

// Events that grant / extend Pro entitlement.
const GRANT_EVENTS = new Set([
  "INITIAL_PURCHASE",
  "RENEWAL",
  "UNCANCELLATION",
  "PRODUCT_CHANGE",
  "NON_RENEWING_PURCHASE",
]);
// Events that end Pro entitlement (CANCELLATION = auto-renew off but still
// entitled until expiry, so it is NOT a downgrade trigger).
const REVOKE_EVENTS = new Set(["EXPIRATION", "SUBSCRIPTION_PAUSED"]);

function authorized(req: NextRequest): boolean {
  const expected = process.env.REVENUECAT_WEBHOOK_AUTH;
  const got = req.headers.get("authorization") ?? "";
  if (!expected || !got) return false;
  const a = Buffer.from(got);
  const b = Buffer.from(expected);
  // Length-independent constant-time compare via HMAC of each side.
  const ha = createHmac("sha256", "rc").update(a).digest();
  const hb = createHmac("sha256", "rc").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export async function POST(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const event = body?.event;
  if (!event || typeof event.type !== "string") {
    return NextResponse.json({ error: "bad event" }, { status: 400 });
  }

  const appUserId: string = event.app_user_id ?? "";
  // Ignore anonymous users — only act on accounts that called Purchases.logIn(username).
  if (!appUserId || appUserId.startsWith("$RCAnonymousID")) {
    return NextResponse.json({ received: true, skipped: "anonymous" });
  }
  const lower = appUserId.toLowerCase();

  if (GRANT_EVENTS.has(event.type)) {
    const expiryMs = typeof event.expiration_at_ms === "number" ? String(event.expiration_at_ms) : "";
    await redis.hset(`user:${lower}`, {
      tier: "pro",
      rcProExpiry: expiryMs,
      rcEntitlement: Array.isArray(event.entitlement_ids) ? event.entitlement_ids.join(",") : (event.entitlement_id ?? "pro"),
      voucherExpiry: "", // a real purchase supersedes any voucher window
    });
  } else if (REVOKE_EVENTS.has(event.type)) {
    await redis.hset(`user:${lower}`, { rcProExpiry: "" });
    // Only downgrade if no OTHER source still grants Pro (Stripe / voucher).
    const [proStripe, voucherExpiry] = await Promise.all([
      redis.hget(`user:${lower}`, "proStripe"),
      redis.hget(`user:${lower}`, "voucherExpiry"),
    ]);
    const voucherActive = !!voucherExpiry && Date.now() < Number(voucherExpiry);
    if (proStripe !== "1" && !voucherActive) {
      await redis.hset(`user:${lower}`, { tier: "free" });
    }
  }
  // Other event types (TEST, CANCELLATION, BILLING_ISSUE, TRANSFER, etc.) are
  // acknowledged without a tier change.

  return NextResponse.json({ received: true });
}
