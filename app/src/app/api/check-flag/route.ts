import { NextRequest, NextResponse } from "next/server";
import { stages } from "@/data/stages";

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
  return NextResponse.json({ correct });
}
