import { NextRequest, NextResponse } from "next/server";
import { runWeeklyReset, prevWeekMondayKey } from "@/lib/leagues";

// Weekly league reset. Invoked by Vercel Cron each Monday (a GET with
// `Authorization: Bearer <CRON_SECRET>`). Promotes the top of every cohort from
// the just-ended week and relegates the bottom; new cohorts form lazily.
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const endedWeek = prevWeekMondayKey();
  const result = await runWeeklyReset(endedWeek);
  return NextResponse.json({ ok: true, endedWeek, ...result });
}
