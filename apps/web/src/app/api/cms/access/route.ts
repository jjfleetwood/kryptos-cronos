import { NextRequest, NextResponse } from "next/server";
import { getAuthedUsername } from "@/lib/api-auth";
import { canAccessEpoch } from "@/lib/cms";

export async function GET(req: NextRequest) {
  const epochId = req.nextUrl.searchParams.get("epochId");
  if (!epochId) return NextResponse.json({ error: "epochId required" }, { status: 400 });

  const username = await getAuthedUsername(req);
  const allowed = await canAccessEpoch(epochId, username);
  return NextResponse.json({ allowed });
}
