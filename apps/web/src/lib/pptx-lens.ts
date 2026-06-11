import "server-only";
import PptxGenJS from "pptxgenjs";
import type { StageConfig, EpochConfig, StageInfo } from "@kryptos/core/types";
import { STAGE_IMAGES } from "@/lib/stage-images";

// PowerPoint generator — turns an epoch's stage content into a slide deck through
// a "lens" (an audience framing). Adding a lens is one entry in LENSES + LENS_IMPL;
// the deck engine (overflow handling, speaker notes, hero images) is shared.

type Section = { label: string; bullets: string[] };
type Lens = {
  id: string;
  name: string;
  subtitle: string;
  accent: string; // hex, no '#'
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
const incidentLine = (info: StageInfo) =>
  [info.incident?.title, info.incident?.impact].filter((x): x is string => !!x);

// Public roster (drives the /decks dropdown).
export const LENSES: Record<string, { id: string; name: string }> = {
  "tech-audit": { id: "tech-audit", name: "Technology Audit" },
  "exec-board": { id: "exec-board", name: "Executive / Board" },
  "training": { id: "training", name: "Training Module" },
  "sales": { id: "sales", name: "Capability Overview" },
};

const LENS_IMPL: Record<string, Lens> = {
  "tech-audit": {
    id: "tech-audit", name: "Technology Audit", subtitle: "Technology Audit Lens", accent: "7C3AED",
    sections: (info) => [
      { label: "The concept", bullets: [lead(info.overview?.[0])] },
      { label: "Risk — what has gone wrong", bullets: incidentLine(info) },
      { label: "Audit controls & takeaways", bullets: (info.keyTakeaways ?? []).slice(0, 5) },
    ],
  },
  "exec-board": {
    id: "exec-board", name: "Executive / Board", subtitle: "Executive Briefing", accent: "2563EB",
    sections: (info) => [
      { label: "Why it matters", bullets: [lead(info.overview?.[0])] },
      { label: "Risk realized", bullets: incidentLine(info) },
      { label: "Decisions & actions", bullets: (info.keyTakeaways ?? []).slice(0, 5) },
    ],
  },
  "training": {
    id: "training", name: "Training Module", subtitle: "Training Module", accent: "16A34A",
    sections: (info) => [
      { label: "What you'll learn", bullets: [lead(info.overview?.[0])] },
      { label: "How it works", bullets: [lead(info.technical?.body?.[0])] },
      { label: "Remember this", bullets: (info.keyTakeaways ?? []).slice(0, 5) },
    ],
  },
  "sales": {
    id: "sales", name: "Capability Overview", subtitle: "Capability Overview", accent: "0891B2",
    sections: (info) => [
      { label: "The problem", bullets: [lead(info.incident?.impact || info.overview?.[0])] },
      { label: "The capability", bullets: [lead(info.overview?.[0])] },
      { label: "Proof points", bullets: (info.keyTakeaways ?? []).slice(0, 4) },
    ],
  },
};

const DARK = "0D1117", PANEL = "161B22", LIGHT = "C9D1D9", MUTED = "6E7681";
const W = 13.33, BASE = "https://www.kryptoscronos.com";

/** Best-effort: fetch a public /img asset and inline it as a data URI (so we don't
 *  bundle the whole image dir into the function). Returns null on any failure. */
async function fetchImage(path: string): Promise<string | null> {
  try {
    const r = await fetch(BASE + path, { signal: AbortSignal.timeout(4000) });
    if (!r.ok) return null;
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length > 700_000) return null; // skip very large
    const ct = r.headers.get("content-type") || "image/jpeg";
    return `data:${ct};base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

/** Rough wrapped-height estimate (inches) for a list of bullets at the given width. */
function bulletsHeight(bullets: string[], w: number): number {
  const cpl = Math.max(20, Math.floor(w * 13)); // ~13 chars per inch at 13pt
  return bullets.reduce((h, b) => h + 0.3 * Math.max(1, Math.ceil(b.length / cpl)), 0.1);
}

export async function buildDeck(epoch: EpochConfig, stages: StageConfig[], lensId: string): Promise<Uint8Array> {
  const lens = LENS_IMPL[lensId] ?? LENS_IMPL["tech-audit"];
  const ACCENT = lens.accent;

  // Prefetch hero images (parallel, best-effort) for stages that have one.
  const imgMap = new Map<string, string>();
  await Promise.all(
    stages
      .filter((s) => STAGE_IMAGES[s.id])
      .map(async (s) => { const d = await fetchImage(STAGE_IMAGES[s.id]); if (d) imgMap.set(s.id, d); }),
  );

  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Kryptós CronOS";
  pptx.company = "Kryptós CronOS";
  pptx.title = `${epoch.name} — ${lens.name}`;

  const footer = (slide: PptxGenJS.Slide) =>
    slide.addText(`${epoch.name}  ·  ${lens.name}`, { x: 0.7, y: 7.05, w: W - 1.4, h: 0.3, fontSize: 9, color: MUTED });

  // ── Title slide ──
  const title = pptx.addSlide();
  title.background = { color: DARK };
  title.addShape("rect", { x: 0, y: 3.05, w: W, h: 0.06, fill: { color: ACCENT } });
  title.addText(epoch.name, { x: 0.7, y: 1.9, w: W - 1.4, h: 1.1, fontSize: 40, bold: true, color: "FFFFFF" });
  title.addText(lens.subtitle, { x: 0.7, y: 3.2, w: W - 1.4, h: 0.6, fontSize: 20, color: ACCENT, bold: true });
  if (epoch.subtitle) title.addText(epoch.subtitle, { x: 0.7, y: 3.9, w: W - 1.4, h: 0.8, fontSize: 14, color: LIGHT });
  title.addText("Kryptós CronOS", { x: 0.7, y: 6.7, w: 6, h: 0.4, fontSize: 12, color: MUTED });

  // ── Scope slide ──
  const scope = pptx.addSlide();
  scope.background = { color: DARK };
  scope.addText("Scope", { x: 0.7, y: 0.45, w: W - 1.4, h: 0.7, fontSize: 28, bold: true, color: ACCENT });
  scope.addText(`${stages.length} modules covered by this assessment.`, { x: 0.7, y: 1.15, w: W - 1.4, h: 0.4, fontSize: 13, color: MUTED });
  scope.addText(
    stages.map((s) => ({ text: s.title, options: { bullet: true, color: LIGHT, fontSize: 14, paraSpaceAfter: 6 } })),
    { x: 0.8, y: 1.7, w: W - 1.6, h: 5.1, valign: "top" },
  );
  footer(scope);

  // ── Per-module slides (overflow → continuation slides) ──
  function newStageSlide(headline: string, year?: number): PptxGenJS.Slide {
    const slide = pptx.addSlide();
    slide.background = { color: DARK };
    slide.addShape("rect", { x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: ACCENT } });
    slide.addText(headline, { x: 0.7, y: 0.4, w: W - 2.2, h: 0.7, fontSize: 23, bold: true, color: "FFFFFF" });
    if (year) slide.addText(String(year), { x: W - 2.0, y: 0.5, w: 1.4, h: 0.4, fontSize: 13, color: MUTED, align: "right" });
    footer(slide);
    return slide;
  }

  for (const s of stages) {
    if (!s.info) continue;
    const sections = lens.sections(s.info).map((sec) => ({ ...sec, bullets: sec.bullets.filter(Boolean) })).filter((sec) => sec.bullets.length);
    const img = imgMap.get(s.id);
    const firstSlide = newStageSlide(s.title, s.info.year);
    if (img) firstSlide.addImage({ data: img, x: 9.0, y: 1.4, w: 3.7, h: 2.08 });
    let slide = firstSlide;
    let onFirst = true;
    let y = 1.4;
    for (const sec of sections) {
      const contentW = onFirst && img ? 7.8 : W - 1.7;
      const estH = 0.42 + bulletsHeight(sec.bullets, contentW) + 0.25;
      if (y + estH > 6.7) { slide = newStageSlide(`${s.title} (cont.)`); onFirst = false; y = 1.4; }
      const w = onFirst && img ? 7.8 : W - 1.7;
      slide.addText(sec.label.toUpperCase(), { x: 0.7, y, w, h: 0.35, fontSize: 12, bold: true, color: ACCENT, charSpacing: 1 });
      y += 0.42;
      const h = bulletsHeight(sec.bullets, w);
      slide.addText(
        sec.bullets.map((b) => ({ text: b, options: { bullet: true, color: LIGHT, fontSize: 13, paraSpaceAfter: 5 } })),
        { x: 0.85, y, w: w - 0.15, h, valign: "top" },
      );
      y += h + 0.25;
    }
    // Speaker notes: the full briefing context for whoever presents.
    firstSlide.addNotes(`${s.info.tagline ?? ""}\n\n${(s.info.overview ?? []).map((p) => p.replace(/\n-\s?/g, " • ")).join("\n\n")}`.trim());
  }

  // ── Closing slide ──
  const end = pptx.addSlide();
  end.background = { color: PANEL };
  end.addText("Generated from Kryptós CronOS", { x: 0.7, y: 3.0, w: W - 1.4, h: 0.6, fontSize: 20, bold: true, color: ACCENT });
  end.addText(`${epoch.name} · ${lens.name} lens · ${stages.length} modules`, { x: 0.7, y: 3.7, w: W - 1.4, h: 0.5, fontSize: 13, color: LIGHT });
  end.addText("Source content is the Kryptós CronOS curriculum. Review before external use.", { x: 0.7, y: 4.2, w: W - 1.4, h: 0.5, fontSize: 11, color: MUTED });

  return (await pptx.write({ outputType: "nodebuffer" })) as Uint8Array;
}
