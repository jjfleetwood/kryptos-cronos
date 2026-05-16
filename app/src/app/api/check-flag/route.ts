import { NextRequest, NextResponse } from "next/server";
import { stages } from "@/data/stages";
import { getServerSession } from "@/lib/server-session";
import { awardStageInRedis } from "@/lib/server-progress";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.stageId !== "string" || typeof body.flag !== "string") {
    return NextResponse.json({ correct: false }, { status: 400 });
  }

  const stage = stages.find((s) => s.id === body.stageId);
  if (!stage?.ctf?.flag) {
    return NextResponse.json({ correct: false }, { status: 404 });
  }

  const correct = body.flag.trim() === stage.ctf.flag;
  if (!correct) {
    return NextResponse.json({ correct: false });
  }

  // Award server-side if user is authenticated
  const username = getServerSession(req);
  if (username) {
    const progress = await awardStageInRedis(username, stage.id, stage.badge.id);
    return NextResponse.json({ correct: true, progress });
  }

  return NextResponse.json({ correct: true });
}
