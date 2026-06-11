import { NextRequest, NextResponse } from "next/server";
import { getAuthedUsername } from "@/lib/api-auth";
import { stages as allStages, epochs } from "@kryptos/core/stages";
import { buildDeck, LENSES } from "@/lib/pptx-lens";

/** POST /api/export/pptx { epochId, lens } — generate a slide deck (.pptx) for an
 *  epoch through the chosen lens. Signed-in only. */
export async function POST(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const { epochId, lens = "tech-audit" } = (await req.json().catch(() => ({}))) as { epochId?: string; lens?: string };
  if (!LENSES[lens]) return NextResponse.json({ error: "unknown lens" }, { status: 400 });

  const epoch = epochs.find((e) => e.id === epochId);
  if (!epoch) return NextResponse.json({ error: "unknown epoch" }, { status: 404 });
  const stages = allStages.filter((s) => s.epochId === epochId);
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
