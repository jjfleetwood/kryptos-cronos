import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "@/lib/server-session";
import { logAdminAction } from "@/lib/audit";
import { requireAdmin } from "@/lib/admin-auth";
import { awardStageInRedis } from "@/lib/server-progress";
import { stages } from "@kryptos/core/stages";

/** POST /api/admin/award-stage
 *  Admin-only. Awards a stage completion to a user (tests the XP / streak / badge
 *  / leaderboard / email pipeline). Body: { stageId: string, username?: string }
 *  username defaults to the session user if omitted.
 */
export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (!admin) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null) as { stageId?: string; username?: string } | null;
  if (!body || typeof body.stageId !== "string") {
    return NextResponse.json({ error: "stageId required" }, { status: 400 });
  }

  const sessionUser = getServerSession(req);
  const username = (body.username ?? sessionUser ?? "").trim().toLowerCase();
  if (!username) {
    return NextResponse.json({ error: "username required — pass in body or be logged in" }, { status: 400 });
  }

  const stage = stages.find((s) => s.id === body.stageId);
  if (!stage) {
    return NextResponse.json({ error: "stage not found" }, { status: 404 });
  }

  // Award the stage
  const progress = await awardStageInRedis(username, stage.id, stage.badge.id, 0);

  logAdminAction(admin, "award-stage", `${username}:${stage.id}`).catch(() => {});
  return NextResponse.json({
    ok: true,
    username,
    stageId: stage.id,
    stageTitle: stage.title,
    xpAwarded: stage.xp,
    progress,
  });
}
