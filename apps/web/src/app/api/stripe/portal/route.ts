import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getServerSession } from "@/lib/server-session";
import { redis } from "@/lib/redis";

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json({ error: "Billing not configured." }, { status: 503 });
  }

  const username = getServerSession(req);
  if (!username) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  const customerId = await redis.hget(`user:${username.toLowerCase()}`, "stripeCustomerId") as string | null;
  if (!customerId) {
    return NextResponse.json({ error: "No billing account found. Please upgrade first." }, { status: 404 });
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2026-04-22.dahlia" });
  const origin = req.headers.get("origin") ?? "https://kryptoscronos.com";

  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${origin}/account`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Stripe error";
    console.error("[stripe/portal]", msg);
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}
