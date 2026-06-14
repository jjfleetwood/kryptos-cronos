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
  sections: (info: StageInfo, stage?: StageConfig) => Section[];
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
    sections: (info, stage) => {
      // Advanced Audit modules carry a structured audit card — surface it directly.
      const am = stage?.auditMeta;
      if (am) {
        return [
          { label: "Control objective & test", bullets: [lead(am.objective, 420)] },
          { label: "Approach — agentic workflow", bullets: [lead(am.approach, 380)] },
          { label: "Artifacts — evidence to pull", bullets: am.artifacts.slice(0, 5) },
          { label: "Systems of record", bullets: am.system.slice(0, 5) },
          { label: "Data owners", bullets: am.dataOwner.slice(0, 4) },
        ];
      }
      return [
        { label: "The concept", bullets: [lead(info.overview?.[0])] },
        { label: "Risk — what has gone wrong", bullets: incidentLine(info) },
        { label: "Audit controls & takeaways", bullets: (info.keyTakeaways ?? []).slice(0, 5) },
      ];
    },
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
const W = 13.33, H = 7.5, BASE = "https://www.kryptoscronos.com";

/** A deterministic "generated cover" visual built from shapes — used wherever a
 *  stage/epoch has no hero photo so no slide is ever a bare wall of text. A tinted
 *  panel, an accent top bar, and the badge emoji blown up as artwork. */
function addCover(
  slide: PptxGenJS.Slide,
  x: number, y: number, w: number, h: number,
  emoji: string, accent: string,
) {
  slide.addShape("rect", { x, y, w, h, fill: { color: PANEL }, line: { color: accent, width: 1, transparency: 35 } });
  slide.addShape("rect", { x, y, w, h, fill: { color: accent, transparency: 86 } });
  slide.addShape("rect", { x, y, w, h: 0.12, fill: { color: accent } });
  slide.addText(emoji || "🛡️", { x, y, w, h, fontSize: Math.min(80, Math.round(h * 26)), align: "center", valign: "middle" });
}

/** A small rounded "pill" tag (badge name, CVE id, CVSS …). Returns its width so
 *  callers can lay several out left-to-right. */
function chip(slide: PptxGenJS.Slide, x: number, y: number, label: string, fg: string, bg: string): number {
  const w = Math.max(0.7, label.length * 0.105 + 0.34);
  slide.addShape("roundRect", { x, y, w, h: 0.34, fill: { color: bg }, line: { color: fg, width: 0.75, transparency: 55 }, rectRadius: 0.06 });
  slide.addText(label, { x, y, w, h: 0.34, fontSize: 10, color: fg, align: "center", valign: "middle", bold: true });
  return w;
}

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

  // Representative artwork for the deck: the first stage that has a hero photo,
  // otherwise the epoch's badge emoji becomes a generated cover.
  const epochEmoji = stages.find((s) => s.badge?.emoji)?.badge?.emoji ?? "🛡️";
  const heroImg = stages.map((s) => imgMap.get(s.id)).find(Boolean) ?? null;

  const footer = (slide: PptxGenJS.Slide) => {
    slide.addShape("rect", { x: 0.7, y: 7.12, w: 0.14, h: 0.14, fill: { color: ACCENT } });
    slide.addText(`Kryptós CronOS  ·  ${epoch.name}  ·  ${lens.name}`, { x: 0.95, y: 7.03, w: W - 2.8, h: 0.3, fontSize: 9, color: MUTED });
    slide.slideNumber = { x: W - 1.1, y: 7.03, w: 0.6, h: 0.3, color: MUTED, fontSize: 9, align: "right" };
  };

  // ── Title slide — left-framed title with a full-height hero on the right ──
  const title = pptx.addSlide();
  title.background = { color: DARK };
  const bannerX = 8.7, bannerW = W - bannerX;
  if (heroImg) {
    title.addImage({ data: heroImg, x: bannerX, y: 0, w: bannerW, h: H, sizing: { type: "cover", w: bannerW, h: H } });
    title.addShape("rect", { x: bannerX, y: 0, w: bannerW, h: H, fill: { color: DARK, transparency: 55 } });
  } else {
    addCover(title, bannerX, 0, bannerW, H, epochEmoji, ACCENT);
  }
  title.addShape("rect", { x: bannerX, y: 0, w: 0.06, h: H, fill: { color: ACCENT } });
  title.addShape("rect", { x: 0.7, y: 1.55, w: 0.55, h: 0.14, fill: { color: ACCENT } });
  title.addText("CURRICULUM DECK", { x: 0.7, y: 1.7, w: bannerX - 1.0, h: 0.35, fontSize: 12, bold: true, color: ACCENT, charSpacing: 2 });
  title.addText(epoch.name, { x: 0.7, y: 2.15, w: bannerX - 1.0, h: 1.5, fontSize: 38, bold: true, color: "FFFFFF", valign: "top" });
  title.addShape("rect", { x: 0.7, y: 3.85, w: bannerX - 1.0, h: 0.04, fill: { color: ACCENT } });
  title.addText(lens.subtitle, { x: 0.7, y: 3.98, w: bannerX - 1.0, h: 0.5, fontSize: 18, color: ACCENT, bold: true });
  if (epoch.subtitle) title.addText(epoch.subtitle, { x: 0.7, y: 4.55, w: bannerX - 1.0, h: 1.2, fontSize: 13, color: LIGHT, valign: "top" });
  title.addText(`${stages.length} modules  ·  Kryptós CronOS`, { x: 0.7, y: 6.7, w: bannerX - 1.0, h: 0.4, fontSize: 12, color: MUTED });

  // ── Scope slide — header band + stat + two-column module index ──
  const scope = pptx.addSlide();
  scope.background = { color: DARK };
  scope.addShape("rect", { x: 0, y: 0, w: W, h: 1.15, fill: { color: PANEL } });
  scope.addShape("rect", { x: 0, y: 1.15, w: W, h: 0.04, fill: { color: ACCENT } });
  scope.addText("Scope", { x: 0.7, y: 0.32, w: 6, h: 0.7, fontSize: 28, bold: true, color: "FFFFFF" });
  scope.addText(String(stages.length), { x: W - 3.2, y: 0.18, w: 1.3, h: 0.9, fontSize: 40, bold: true, color: ACCENT, align: "right", valign: "middle" });
  scope.addText("modules\nin scope", { x: W - 1.85, y: 0.28, w: 1.3, h: 0.8, fontSize: 11, color: MUTED, valign: "middle" });
  const mid = Math.ceil(stages.length / 2);
  const colW = (W - 1.8) / 2;
  const moduleCol = (arr: StageConfig[], x: number) =>
    scope.addText(
      arr.map((s) => ({ text: `${s.badge?.emoji ?? "▸"}  ${s.title}`, options: { color: LIGHT, fontSize: 12, paraSpaceAfter: 7 } })),
      { x, y: 1.55, w: colW, h: 5.3, valign: "top" },
    );
  moduleCol(stages.slice(0, mid), 0.8);
  if (stages.length > mid) moduleCol(stages.slice(mid), 0.8 + colW + 0.2);
  footer(scope);

  // ── Per-module slides (overflow → continuation slides) ──
  function newStageSlide(headline: string, year?: number): PptxGenJS.Slide {
    const slide = pptx.addSlide();
    slide.background = { color: DARK };
    slide.addShape("rect", { x: 0, y: 0, w: 0.18, h: H, fill: { color: ACCENT } });
    slide.addText(headline, { x: 0.7, y: 0.4, w: W - 2.2, h: 0.7, fontSize: 23, bold: true, color: "FFFFFF" });
    if (year) slide.addText(String(year), { x: W - 2.0, y: 0.5, w: 1.4, h: 0.4, fontSize: 13, color: MUTED, align: "right" });
    footer(slide);
    return slide;
  }

  const VIS_X = 9.0, VIS_Y = 1.62, VIS_W = 3.65, VIS_H = 2.05, CONTENT_W = 7.8;
  for (const s of stages) {
    if (!s.info) continue;
    const sections = lens.sections(s.info, s).map((sec) => ({ ...sec, bullets: sec.bullets.filter(Boolean) })).filter((sec) => sec.bullets.length);
    const img = imgMap.get(s.id);
    const firstSlide = newStageSlide(s.title, s.info.year);

    // Every module slide carries a visual: the hero photo (framed) or a
    // generated badge cover — never a bare text wall.
    firstSlide.addShape("rect", { x: VIS_X - 0.05, y: VIS_Y - 0.05, w: VIS_W + 0.1, h: VIS_H + 0.1, fill: { color: PANEL }, line: { color: ACCENT, width: 1, transparency: 40 } });
    if (img) firstSlide.addImage({ data: img, x: VIS_X, y: VIS_Y, w: VIS_W, h: VIS_H, sizing: { type: "cover", w: VIS_W, h: VIS_H } });
    else addCover(firstSlide, VIS_X, VIS_Y, VIS_W, VIS_H, s.badge?.emoji ?? epochEmoji, ACCENT);

    // Tag row: badge, then CVE / CVSS when present.
    let cx = 0.7;
    if (s.badge?.name) cx += chip(firstSlide, cx, 1.18, `${s.badge.emoji ?? "🏅"} ${s.badge.name}`, LIGHT, PANEL) + 0.15;
    if (s.cveId) cx += chip(firstSlide, cx, 1.18, s.cveId, "FCA5A5", "2A1518") + 0.15;
    if (typeof s.cvssScore === "number") chip(firstSlide, cx, 1.18, `CVSS ${s.cvssScore.toFixed(1)}`, "FCA5A5", "2A1518");

    let slide = firstSlide;
    let onFirst = true;
    let y = VIS_Y;
    for (const sec of sections) {
      const w = onFirst ? CONTENT_W : W - 1.7;
      const estH = 0.42 + bulletsHeight(sec.bullets, w) + 0.25;
      if (y + estH > 6.7) { slide = newStageSlide(`${s.title} (cont.)`); onFirst = false; y = 1.4; }
      const cw = onFirst ? CONTENT_W : W - 1.7;
      slide.addText(sec.label.toUpperCase(), { x: 0.7, y, w: cw, h: 0.35, fontSize: 12, bold: true, color: ACCENT, charSpacing: 1 });
      y += 0.42;
      const h = bulletsHeight(sec.bullets, cw);
      slide.addText(
        sec.bullets.map((b) => ({ text: b, options: { bullet: true, color: LIGHT, fontSize: 13, paraSpaceAfter: 5 } })),
        { x: 0.85, y, w: cw - 0.15, h, valign: "top" },
      );
      y += h + 0.25;
    }
    // Speaker notes: the full briefing context for whoever presents.
    firstSlide.addNotes(`${s.info.tagline ?? ""}\n\n${(s.info.overview ?? []).map((p) => p.replace(/\n-\s?/g, " • ")).join("\n\n")}`.trim());
  }

  // ── Risk landscape — a visual roll-up of the real incidents in this epoch ──
  const risks = stages.filter((s) => s.info?.incident?.title).slice(0, 8);
  if (risks.length) {
    const rk = pptx.addSlide();
    rk.background = { color: DARK };
    rk.addShape("rect", { x: 0, y: 0, w: W, h: 1.15, fill: { color: PANEL } });
    rk.addShape("rect", { x: 0, y: 1.15, w: W, h: 0.04, fill: { color: ACCENT } });
    rk.addText("Risk landscape", { x: 0.7, y: 0.32, w: W - 1.4, h: 0.7, fontSize: 28, bold: true, color: "FFFFFF" });
    const rowH = Math.min(0.66, (6.6 - 1.5) / risks.length);
    risks.forEach((s, i) => {
      const y = 1.55 + i * rowH;
      const inc = s.info!.incident!;
      rk.addShape("ellipse", { x: 0.75, y: y + 0.08, w: 0.16, h: 0.16, fill: { color: ACCENT } });
      rk.addText(
        [
          { text: `${inc.title}`, options: { bold: true, color: "FFFFFF", fontSize: 13 } },
          ...(inc.impact ? [{ text: `   —  ${lead(inc.impact, 130)}`, options: { color: MUTED, fontSize: 11 } }] : []),
        ],
        { x: 1.1, y, w: W - 2.0, h: rowH, valign: "middle" },
      );
    });
    footer(rk);
  }

  // ── Closing slide ──
  const end = pptx.addSlide();
  end.background = { color: PANEL };
  addCover(end, W - 3.6, 2.3, 2.6, 2.6, epochEmoji, ACCENT);
  end.addShape("rect", { x: 0.7, y: 2.85, w: 0.55, h: 0.14, fill: { color: ACCENT } });
  end.addText("Generated from Kryptós CronOS", { x: 0.7, y: 3.0, w: W - 5.0, h: 0.6, fontSize: 20, bold: true, color: "FFFFFF" });
  end.addText(`${epoch.name} · ${lens.name} lens · ${stages.length} modules`, { x: 0.7, y: 3.7, w: W - 5.0, h: 0.5, fontSize: 13, color: ACCENT });
  end.addText("Source content is the Kryptós CronOS curriculum. Review before external use.", { x: 0.7, y: 4.2, w: W - 5.0, h: 0.5, fontSize: 11, color: MUTED });

  return (await pptx.write({ outputType: "nodebuffer" })) as Uint8Array;
}
