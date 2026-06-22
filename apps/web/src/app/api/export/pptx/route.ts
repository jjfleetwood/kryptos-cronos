import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-token";
import { stages as allStages, epochs } from "@kryptos/core/stages";
import { buildDeck, buildGuideDeck, LENSES } from "@/lib/pptx-lens";

// Markdown field guides (secured-docs) that can be exported as a deck.
const GUIDE_DECKS: Record<string, { file: string; title: string; subtitle: string; accent: string; emoji: string }> = {
  "agent-risk-audit": { file: "AGENT_RISK_AUDIT_GUIDE.md", title: "Agent Risk Audit — Field Guide", subtitle: "Auditing Agentic-AI Systems", accent: "06B6D4", emoji: "🛡️" },
};

const pptxResponse = (bytes: Uint8Array, name: string) =>
  new NextResponse(bytes as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "Content-Disposition": `attachment; filename="${name.replace(/[^a-z0-9-]/gi, "")}.pptx"`,
      "Cache-Control": "no-store",
    },
  });

/** POST /api/export/pptx { epochId, lens } | { guide } — generate a slide deck
 *  (.pptx) from an epoch (through a lens) or from a markdown field guide.
 *  Admin only (deck generation is an internal tool). */
export async function POST(req: NextRequest) {
  const adminUsername = verifyAdminToken(req.cookies.get("admin_token")?.value ?? "");
  if (!adminUsername) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const { epochId, lens = "tech-audit", guide } = (await req.json().catch(() => ({}))) as { epochId?: string; lens?: string; guide?: string };

  // Field-guide deck: parse the secured-docs markdown into slides.
  if (guide) {
    const g = GUIDE_DECKS[guide];
    if (!g) return NextResponse.json({ error: "unknown guide" }, { status: 404 });
    let md: string;
    try {
      md = fs.readFileSync(path.join(process.cwd(), "secured-docs", g.file), "utf-8");
    } catch {
      return NextResponse.json({ error: "guide unavailable" }, { status: 404 });
    }
    const bytes = await buildGuideDeck(md, { title: g.title, subtitle: g.subtitle, accent: g.accent, emoji: g.emoji });
    return pptxResponse(bytes, `${guide}-guide`);
  }

  if (!LENSES[lens]) return NextResponse.json({ error: "unknown lens" }, { status: 400 });

  const epoch = epochs.find((e) => e.id === epochId);
  if (!epoch) return NextResponse.json({ error: "unknown epoch" }, { status: 404 });
  const stages = allStages.filter((s) => s.epochId === epochId);
  if (!stages.length) return NextResponse.json({ error: "epoch has no stages" }, { status: 404 });

  const bytes = await buildDeck(epoch, stages, lens);
  return pptxResponse(bytes, `${epochId}-${lens}`);
}
