import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-token";
import { stages as allStages, epochs } from "@kryptos/core/stages";
import { getAuditEpoch, auditStagesForEpoch } from "@kryptos/core/audit-registry";
import { buildDeck, LENSES } from "@/lib/pptx-lens";

/** POST /api/export/pptx { epochId, lens } — generate a slide deck (.pptx) for an
 *  epoch through the chosen lens. Admin only (deck generation is an internal tool). */
export async function POST(req: NextRequest) {
  const adminUsername = verifyAdminToken(req.cookies.get("admin_token")?.value ?? "");
  if (!adminUsername) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const { epochId, lens = "tech-audit" } = (await req.json().catch(() => ({}))) as { epochId?: string; lens?: string };
  if (!LENSES[lens]) return NextResponse.json({ error: "unknown lens" }, { status: 400 });

  // Main catalog first, then the separate Advanced Audit registry.
  const mainEpoch = epochs.find((e) => e.id === epochId);
  const epoch = mainEpoch ?? getAuditEpoch(epochId ?? "");
  if (!epoch) return NextResponse.json({ error: "unknown epoch" }, { status: 404 });
  const stages = mainEpoch ? allStages.filter((s) => s.epochId === epochId) : auditStagesForEpoch(epochId ?? "");
  if (!stages.length) return NextResponse.json({ error: "epoch has no stages" }, { status: 404 });

  const bytes = await buildDeck(epoch, stages, lens);
  const safe = String(epochId).replace(/[^a-z0-9-]/gi, "");
  return new NextResponse(bytes as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "Content-Disposition": `attachment; filename="${safe}-${lens}.pptx"`,
      "Cache-Control": "no-store",
    },
  });
}
