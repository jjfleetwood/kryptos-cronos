import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { sendExpoPush, isExpoPushToken, type PushMessage } from "@/lib/push";

// Daily streak-expiry nudge. Intended to be invoked by Vercel Cron (a GET with
// `Authorization: Bearer <CRON_SECRET>`). Finds users with a registered push
// token whose streak was last advanced *yesterday* (i.e. not yet today) and
// nudges them to keep it alive before the day rolls over.

function ymd(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const tokens = (await redis.hgetall("push:tokens")) as Record<string, string> | null;
  if (!tokens) return NextResponse.json({ checked: 0, sent: 0 });

  const yesterday = ymd(new Date(Date.now() - 24 * 60 * 60 * 1000));
  const messages: PushMessage[] = [];

  for (const [username, token] of Object.entries(tokens)) {
    if (!isExpoPushToken(token)) continue;
    const streak = await redis.hgetall(`streak:${username}`) as { current?: string; lastDate?: string } | null;
    const current = Number(streak?.current ?? 0);
    const lastDate = String(streak?.lastDate ?? "");
    // Active streak that hasn't been continued today → at risk tonight.
    if (current >= 1 && lastDate === yesterday) {
      messages.push({
        to: token,
        title: `🔥 ${current}-day streak at risk`,
        body: `Clear one stage today to keep your ${current}-day streak alive.`,
        data: { type: "streak-reminder" },
      });
    }
  }

  const sent = await sendExpoPush(messages);
  return NextResponse.json({ checked: Object.keys(tokens).length, sent });
}
