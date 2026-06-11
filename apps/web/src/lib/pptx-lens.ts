import "server-only";
import PptxGenJS from "pptxgenjs";
import type { StageConfig, EpochConfig, StageInfo } from "@kryptos/core/types";

// PowerPoint generator — turns an epoch's stage content into a slide deck through
// a "lens" (an audience framing). Phase 1 ships the Technology Audit lens; adding
// a lens is just another entry in LENSES (the deck engine is shared).

type Section = { label: string; bullets: string[] };
type Lens = {
  id: string;
  name: string;
  subtitle: string;
  accent: string; // hex, no '#'
  /** The body sections for one stage's slide, in order. */
  sections: (info: StageInfo) => Section[];
};

/** First sentence (or a clean truncation) of a paragraph that may carry "\n- " bullets. */
function lead(text: string | undefined, max = 300): string {
  if (!text) return "";
  const clean = text.replace(/\n-\s?/g, " ").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const dot = clean.lastIndexOf(". ", max);
  return dot > 80 ? clean.slice(0, dot + 1) : clean.slice(0, max).replace(/[\s,;:]+$/, "") + "…";
}

export const LENSES: Record<string, { id: string; name: string }> = {
  "tech-audit": { id: "tech-audit", name: "Technology Audit" },
};

const LENS_IMPL: Record<string, Lens> = {
  "tech-audit": {
    id: "tech-audit",
    name: "Technology Audit",
    subtitle: "Technology Audit Lens",
    accent: "7C3AED",
    sections: (info) => [
      { label: "The concept", bullets: [lead(info.overview?.[0])] },
      {
        label: "Risk — what has gone wrong",
        bullets: [info.incident?.title, info.incident?.impact].filter((x): x is string => !!x),
      },
      { label: "Audit controls & takeaways", bullets: (info.keyTakeaways ?? []).slice(0, 5) },
    ],
  },
};

const DARK = "0D1117";
const PANEL = "161B22";
const LIGHT = "C9D1D9";
const MUTED = "6E7681";

/** Build a .pptx deck for an epoch through a lens. Returns the file bytes. */
export async function buildDeck(epoch: EpochConfig, stages: StageConfig[], lensId: string): Promise<Uint8Array> {
  const lens = LENS_IMPL[lensId] ?? LENS_IMPL["tech-audit"];
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE"; // 13.33 × 7.5 in
  pptx.author = "Kryptós CronOS";
  pptx.company = "Kryptós CronOS";
  pptx.title = `${epoch.name} — ${lens.name}`;
  const W = 13.33;

  // ── Title slide ────────────────────────────────────────────────────────────
  const title = pptx.addSlide();
  title.background = { color: DARK };
  title.addShape("rect", { x: 0, y: 3.05, w: W, h: 0.06, fill: { color: lens.accent } });
  title.addText(epoch.name, { x: 0.7, y: 1.9, w: W - 1.4, h: 1.1, fontSize: 40, bold: true, color: "FFFFFF" });
  title.addText(lens.subtitle, { x: 0.7, y: 3.2, w: W - 1.4, h: 0.6, fontSize: 20, color: lens.accent, bold: true });
  if (epoch.subtitle) title.addText(epoch.subtitle, { x: 0.7, y: 3.9, w: W - 1.4, h: 0.8, fontSize: 14, color: LIGHT });
  title.addText("Kryptós CronOS", { x: 0.7, y: 6.7, w: 6, h: 0.4, fontSize: 12, color: MUTED });

  // ── Scope slide ────────────────────────────────────────────────────────────
  const scope = pptx.addSlide();
  scope.background = { color: DARK };
  scope.addText("Scope", { x: 0.7, y: 0.45, w: W - 1.4, h: 0.7, fontSize: 28, bold: true, color: lens.accent });
  scope.addText(`${stages.length} modules covered by this assessment.`, { x: 0.7, y: 1.15, w: W - 1.4, h: 0.4, fontSize: 13, color: MUTED });
  scope.addText(
    stages.map((s) => ({ text: s.title, options: { bullet: true, color: LIGHT, fontSize: 14, paraSpaceAfter: 6 } })),
    { x: 0.8, y: 1.7, w: W - 1.6, h: 5.3, valign: "top" },
  );

  // ── One slide per module ─────────────────────────────────────────────────────
  for (const s of stages) {
    if (!s.info) continue;
    const slide = pptx.addSlide();
    slide.background = { color: DARK };
    slide.addShape("rect", { x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: lens.accent } });
    slide.addText(s.title, { x: 0.7, y: 0.4, w: W - 1.4, h: 0.7, fontSize: 24, bold: true, color: "FFFFFF" });
    if (s.info.year) slide.addText(String(s.info.year), { x: W - 2.0, y: 0.45, w: 1.4, h: 0.5, fontSize: 13, color: MUTED, align: "right" });

    let y = 1.4;
    for (const sec of lens.sections(s.info)) {
      const bullets = sec.bullets.filter(Boolean);
      if (!bullets.length) continue;
      slide.addText(sec.label.toUpperCase(), { x: 0.7, y, w: W - 1.4, h: 0.35, fontSize: 12, bold: true, color: lens.accent, charSpacing: 1 });
      y += 0.42;
      const h = Math.min(2.4, 0.32 * bullets.reduce((n, b) => n + Math.max(1, Math.ceil(b.length / 110)), 0) + 0.1);
      slide.addText(
        bullets.map((b) => ({ text: b, options: { bullet: true, color: LIGHT, fontSize: 13, paraSpaceAfter: 5 } })),
        { x: 0.85, y, w: W - 1.7, h, valign: "top" },
      );
      y += h + 0.25;
      if (y > 6.9) break;
    }
  }

  // ── Closing slide ────────────────────────────────────────────────────────────
  const end = pptx.addSlide();
  end.background = { color: PANEL };
  end.addText("Generated from Kryptós CronOS", { x: 0.7, y: 3.0, w: W - 1.4, h: 0.6, fontSize: 20, bold: true, color: lens.accent });
  end.addText(`${epoch.name} · ${lens.name} lens · ${stages.length} modules`, { x: 0.7, y: 3.7, w: W - 1.4, h: 0.5, fontSize: 13, color: LIGHT });
  end.addText("Source content is the Kryptós CronOS curriculum. Review before external use.", { x: 0.7, y: 4.2, w: W - 1.4, h: 0.5, fontSize: 11, color: MUTED });

  return (await pptx.write({ outputType: "nodebuffer" })) as Uint8Array;
}
