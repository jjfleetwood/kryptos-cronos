import "server-only";
import PptxGenJS from "pptxgenjs";

// Markdown field guide → .pptx. Moved here with the Agent Risk Audit Guide when it
// left the public web app: the guide and its deck export are owner-only now.
// Parses the guide markdown into a dark-themed slide deck (title / contents /
// per-section slides with tables + bulleted checklists / closing).

const DARK = "0D1117", PANEL = "161B22", LIGHT = "C9D1D9", MUTED = "6E7681";
const W = 13.33, H = 7.5;

/** First sentence (or a clean truncation) of a paragraph. */
function lead(text: string | undefined, max = 300): string {
  if (!text) return "";
  const clean = text.replace(/\n-\s?/g, " ").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const dot = clean.lastIndexOf(". ", max);
  return dot > 80 ? clean.slice(0, dot + 1) : clean.slice(0, max).replace(/[\s,;:]+$/, "") + "…";
}

/** A deterministic shape-built cover so no slide is a bare wall of text. */
function addCover(slide: PptxGenJS.Slide, x: number, y: number, w: number, h: number, emoji: string, accent: string) {
  slide.addShape("rect", { x, y, w, h, fill: { color: PANEL }, line: { color: accent, width: 1, transparency: 35 } });
  slide.addShape("rect", { x, y, w, h, fill: { color: accent, transparency: 86 } });
  slide.addShape("rect", { x, y, w, h: 0.12, fill: { color: accent } });
  slide.addText(emoji || "🛡️", { x, y, w, h, fontSize: Math.min(80, Math.round(h * 26)), align: "center", valign: "middle" });
}

/** Rough wrapped-height estimate (inches) for a list of bullets at the given width. */
function bulletsHeight(bullets: string[], w: number): number {
  const cpl = Math.max(20, Math.floor(w * 13));
  return bullets.reduce((h, b) => h + 0.3 * Math.max(1, Math.ceil(b.length / cpl)), 0.1);
}

type GuideBlock =
  | { kind: "para"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] };
type GuideSection = { title: string; blocks: GuideBlock[] };

/** Strip the inline markdown that doesn't survive into slide text. */
function stripInline(s: string): string {
  return s
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[☐☑]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseGuide(md: string): { title: string; intro: string[]; sections: GuideSection[] } {
  let title = "";
  const intro: string[] = [];
  const sections: GuideSection[] = [];
  let cur: GuideSection | null = null;
  let para: string[] = [];
  let list: string[] | null = null;
  let table: { head: string[]; rows: string[][] } | null = null;

  const flushPara = () => {
    if (para.length) {
      const text = stripInline(para.join(" "));
      if (text) (cur ? cur.blocks.push({ kind: "para", text }) : intro.push(text));
      para = [];
    }
  };
  const flushList = () => { if (list?.length && cur) cur.blocks.push({ kind: "list", items: list }); list = null; };
  const flushTable = () => { if (table && cur) cur.blocks.push({ kind: "table", head: table.head, rows: table.rows }); table = null; };
  const flushAll = () => { flushPara(); flushList(); flushTable(); };

  for (const raw of md.split(/\r?\n/)) {
    const t = raw.trim();
    if (/^#\s+/.test(t)) { flushAll(); title = stripInline(t.replace(/^#\s+/, "")); continue; }
    if (/^##\s+/.test(t)) { flushAll(); cur = { title: stripInline(t.replace(/^##\s+/, "")), blocks: [] }; sections.push(cur); continue; }
    if (/^#{3,}\s+/.test(t)) { flushAll(); if (cur) cur.blocks.push({ kind: "para", text: stripInline(t.replace(/^#+\s+/, "")) }); continue; }
    if (/^(-{3,}|\*{3,})$/.test(t)) { flushAll(); continue; }
    if (/^\|.*\|$/.test(t)) {
      flushPara(); flushList();
      if (/^\|[\s:|-]+\|$/.test(t)) continue; // header separator
      const cells = t.slice(1, -1).split("|").map((c) => stripInline(c));
      if (!table) table = { head: cells, rows: [] }; else table.rows.push(cells);
      continue;
    }
    if (table) flushTable();
    const li = t.match(/^(?:[-*]|\d+\.)\s+(.*)$/);
    if (li) { flushPara(); const item = stripInline(li[1]); if (item) (list ??= []).push(item); continue; }
    if (list) flushList();
    if (!t) { flushPara(); continue; }
    para.push(t);
  }
  flushAll();
  return { title, intro, sections };
}

export async function buildGuideDeck(
  md: string,
  opts: { title?: string; subtitle?: string; accent?: string; emoji?: string } = {},
): Promise<Uint8Array> {
  const parsed = parseGuide(md);
  const ACCENT = opts.accent ?? "06B6D4";
  const emoji = opts.emoji ?? "🛡️";
  const deckTitle = opts.title ?? (parsed.title || "Field Guide");
  const subtitle = opts.subtitle ?? "Field Guide";

  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Kryptós CronOS";
  pptx.company = "Kryptós CronOS";
  pptx.title = deckTitle;

  const footer = (slide: PptxGenJS.Slide) => {
    slide.addShape("rect", { x: 0.7, y: 7.12, w: 0.14, h: 0.14, fill: { color: ACCENT } });
    slide.addText(`Kryptós CronOS  ·  ${deckTitle}`, { x: 0.95, y: 7.03, w: W - 2.8, h: 0.3, fontSize: 9, color: MUTED });
    slide.slideNumber = { x: W - 1.1, y: 7.03, w: 0.6, h: 0.3, color: MUTED, fontSize: 9, align: "right" };
  };

  // ── Title slide ──
  const title = pptx.addSlide();
  title.background = { color: DARK };
  const bannerX = 8.7, bannerW = W - bannerX;
  addCover(title, bannerX, 0, bannerW, H, emoji, ACCENT);
  title.addShape("rect", { x: bannerX, y: 0, w: 0.06, h: H, fill: { color: ACCENT } });
  title.addShape("rect", { x: 0.7, y: 1.55, w: 0.55, h: 0.14, fill: { color: ACCENT } });
  title.addText("FIELD GUIDE", { x: 0.7, y: 1.7, w: bannerX - 1.0, h: 0.35, fontSize: 12, bold: true, color: ACCENT, charSpacing: 2 });
  title.addText(deckTitle, { x: 0.7, y: 2.15, w: bannerX - 1.0, h: 1.6, fontSize: 34, bold: true, color: "FFFFFF", valign: "top" });
  title.addShape("rect", { x: 0.7, y: 3.95, w: bannerX - 1.0, h: 0.04, fill: { color: ACCENT } });
  title.addText(subtitle, { x: 0.7, y: 4.08, w: bannerX - 1.0, h: 0.5, fontSize: 16, color: ACCENT, bold: true });
  const blurb = [...parsed.intro].sort((a, b) => b.length - a.length)[0];
  if (blurb) title.addText(lead(blurb, 260), { x: 0.7, y: 4.65, w: bannerX - 1.0, h: 1.4, fontSize: 13, color: LIGHT, valign: "top" });
  title.addText(`${parsed.sections.length} sections  ·  Kryptós CronOS`, { x: 0.7, y: 6.7, w: bannerX - 1.0, h: 0.4, fontSize: 12, color: MUTED });

  // ── Contents slide ──
  if (parsed.sections.length > 1) {
    const toc = pptx.addSlide();
    toc.background = { color: DARK };
    toc.addShape("rect", { x: 0, y: 0, w: W, h: 1.15, fill: { color: PANEL } });
    toc.addShape("rect", { x: 0, y: 1.15, w: W, h: 0.04, fill: { color: ACCENT } });
    toc.addText("Contents", { x: 0.7, y: 0.32, w: 8, h: 0.7, fontSize: 28, bold: true, color: "FFFFFF" });
    const mid = Math.ceil(parsed.sections.length / 2);
    const colW = (W - 1.8) / 2;
    const col = (arr: GuideSection[], x: number) =>
      toc.addText(arr.map((s) => ({ text: s.title, options: { color: LIGHT, fontSize: 13, bullet: { code: "2022", indent: 14 }, paraSpaceAfter: 9 } })),
        { x, y: 1.55, w: colW, h: 5.3, valign: "top" });
    col(parsed.sections.slice(0, mid), 0.8);
    if (parsed.sections.length > mid) col(parsed.sections.slice(mid), 0.8 + colW + 0.2);
    footer(toc);
  }

  // ── Section slides (overflow → continuation) ──
  const CW = W - 1.4;
  const newSectionSlide = (headline: string): PptxGenJS.Slide => {
    const slide = pptx.addSlide();
    slide.background = { color: DARK };
    slide.addShape("rect", { x: 0, y: 0, w: 0.18, h: H, fill: { color: ACCENT } });
    slide.addText(headline, { x: 0.7, y: 0.4, w: W - 1.4, h: 0.85, fontSize: 22, bold: true, color: "FFFFFF", valign: "top" });
    footer(slide);
    return slide;
  };

  for (const sec of parsed.sections) {
    let slide = newSectionSlide(sec.title);
    let y = 1.5;
    for (const block of sec.blocks) {
      if (block.kind === "para") {
        const h = bulletsHeight([block.text], CW) + 0.05;
        if (y + h > 6.7) { slide = newSectionSlide(`${sec.title} (cont.)`); y = 1.4; }
        slide.addText(block.text, { x: 0.7, y, w: CW, h, fontSize: 13, color: LIGHT, valign: "top" });
        y += h + 0.12;
      } else if (block.kind === "list") {
        const h = bulletsHeight(block.items, CW);
        if (y + h > 6.7 && y > 1.5) { slide = newSectionSlide(`${sec.title} (cont.)`); y = 1.4; }
        slide.addText(block.items.map((b) => ({ text: b, options: { bullet: { code: "2022", indent: 14 }, color: LIGHT, fontSize: 13, paraSpaceAfter: 6 } })),
          { x: 0.85, y, w: CW - 0.15, h: Math.min(h, 5.1), valign: "top" });
        y += Math.min(h, 5.1) + 0.18;
      } else {
        const rowH = 0.42, estH = rowH * (block.rows.length + 1) + 0.1;
        if (y + estH > 6.7 && y > 1.5) { slide = newSectionSlide(`${sec.title} (cont.)`); y = 1.4; }
        const rows = [
          block.head.map((c) => ({ text: c, options: { bold: true, color: ACCENT, fill: { color: PANEL }, fontSize: 11 } })),
          ...block.rows.map((r) => r.map((c) => ({ text: c, options: { color: LIGHT, fontSize: 11 } }))),
        ];
        slide.addTable(rows, { x: 0.7, y, w: CW, border: { type: "solid", color: "30363D", pt: 0.5 }, fill: { color: DARK }, valign: "middle", margin: 4, autoPage: false });
        y += estH + 0.18;
      }
    }
  }

  // ── Closing slide ──
  const end = pptx.addSlide();
  end.background = { color: PANEL };
  addCover(end, W - 3.6, 2.3, 2.6, 2.6, emoji, ACCENT);
  end.addShape("rect", { x: 0.7, y: 2.85, w: 0.55, h: 0.14, fill: { color: ACCENT } });
  end.addText("Generated from Kryptós CronOS", { x: 0.7, y: 3.0, w: W - 5.0, h: 0.6, fontSize: 20, bold: true, color: "FFFFFF" });
  end.addText(`${deckTitle} · ${parsed.sections.length} sections`, { x: 0.7, y: 3.7, w: W - 5.0, h: 0.5, fontSize: 13, color: ACCENT });
  end.addText("Source content is the Kryptós CronOS field guide. Review before external use.", { x: 0.7, y: 4.2, w: W - 5.0, h: 0.5, fontSize: 11, color: MUTED });

  return (await pptx.write({ outputType: "nodebuffer" })) as Uint8Array;
}
