import { NextRequest, NextResponse } from "next/server";
import { getStageOverride, saveStageOverride, deleteStageOverride, type StageOverride } from "@/lib/cms";
import { getStage } from "@kryptos/core/stages";
import { logAdminAction, extractAdminUsername } from "@/lib/audit";
import { requireAdmin } from "@/lib/admin-auth";

type Params = { params: Promise<{ stageId: string }> };

/** GET — returns current override + defaults for a stage */
export async function GET(req: NextRequest, { params }: Params) {
  if (!(await requireAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { stageId } = await params;
  const stage = getStage(stageId);
  if (!stage) return NextResponse.json({ error: "Stage not found" }, { status: 404 });

  const override = await getStageOverride(stageId);
  return NextResponse.json({
    stageId,
    override: override ?? {},
    defaults: {
      title: stage.title,
      subtitle: stage.subtitle,
      info_tagline: stage.info.tagline,
      info_overview: stage.info.overview.join("\n"),
      info_keyTakeaways: stage.info.keyTakeaways.join("\n"),
    },
  });
}

/** PUT — save content overrides */
export async function PUT(req: NextRequest, { params }: Params) {
  if (!(await requireAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { stageId } = await params;
  if (!getStage(stageId)) return NextResponse.json({ error: "Stage not found" }, { status: 404 });

  const body = (await req.json()) as StageOverride;
  await saveStageOverride(stageId, body);
  const adminName = extractAdminUsername(req.cookies.get("admin_token")?.value ?? "") ?? "admin";
  logAdminAction(adminName, "cms-stage-save", stageId).catch(() => {});
  return NextResponse.json({ ok: true });
}

/** DELETE — clear all overrides (revert to defaults) */
export async function DELETE(req: NextRequest, { params }: Params) {
  if (!(await requireAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { stageId } = await params;
  await deleteStageOverride(stageId);
  const adminName = extractAdminUsername(req.cookies.get("admin_token")?.value ?? "") ?? "admin";
  logAdminAction(adminName, "cms-stage-delete", stageId).catch(() => {});
  return NextResponse.json({ ok: true });
}
