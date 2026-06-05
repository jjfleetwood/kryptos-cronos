# Kryptós CronOS — Full Visual Makeover Plan (resume-safe)

Goal: take the site from "polished product dashboard" to **award-quality** — benchmarked against this year's most decorated sites (Awwwards Site of the Day/Year, CSS Design Awards, FWA, Webby, Lusion/Active Theory/Locomotive-tier studio work). Two concrete user asks anchor it: **(1) add pictures where there are large blocks of text**, and **(2) break lists out into bullets**. Everything else is the broader beautification pass.

> Source of truth for the content-bullet grind is `CONTENT_REFORMAT.md` + `apps/web/scripts/scan-reformat.mjs`. This doc is the umbrella plan. Update the checkboxes as phases land.

---

## What award-winning sites in 2025–26 actually do (the benchmark)

Recurring traits across the top 50 this year:
1. **A distinctive type system** — a display face with tight tracking for headings, a clean variable sans for body, a real modular type scale. Never the system Arial stack.
2. **Generous whitespace & rhythm** — confident spacing, fewer things per screen, strong vertical cadence.
3. **Motion with intent** — scroll-triggered reveals, easing-rich hovers, page/section transitions, all `prefers-reduced-motion`-safe.
4. **Tactile micro-interactions** — buttons, cards, and links respond physically (magnetic, tilt, shimmer, spring).
5. **Big, art-directed imagery** — full-bleed or large framed media, consistent treatment, captions, never tiny thumbnails floating in boxes.
6. **Texture & depth** — subtle grain/noise, layered gradients, glassmorphism used sparingly and consistently.
7. **Editorial content layout** — scannable: bullets, pull-quotes, numbered steps, callouts — not walls of text.
8. **Cohesive color** — a disciplined palette with one or two hero accents, used consistently for state and hierarchy.
9. **Performance & a11y** — fast LCP, no CLS, keyboard/focus states, WCAG contrast. Beauty that still scores green.

---

## Current-state audit (measured 2026-06-05)

| Dimension | Finding | Award gap |
|---|---|---|
| Body font | **Arial** (globals.css overrides the wired-up Geist) | High — no type identity |
| Display font | none (headings = same family, `font-black`) | High |
| Type scale | ad-hoc Tailwind sizes per page | Medium |
| Images | 371 / 683 stages have one; **312 have none**; 1 image max per stage, capped at `max-h-72` in a centered box | High |
| Content format | **395 / 681 stages still wall-of-text** (286 bulleted) | High (readability) |
| Motion | homepage has nice keyframes; **no scroll-reveal anywhere**; inner pages static | Medium |
| Texture | gradients + grid overlays present; **no grain/noise** | Low–Medium |
| Color | strong cyan/indigo/violet system already | Low (keep, tighten) |
| Reduced-motion | not handled | Medium (a11y) |
| Metadata | OG still says "458 stages / 38 epochs" (stale) | Low |

---

## Phased plan

### Phase 0 — Audit & tokens  ✅ (this doc)
- [x] Inventory images, bullets, fonts, motion (numbers above).
- [x] Confirm `RichBlock` already renders `- ` lines as `<ul>` → bulleting is a content pass.
- [x] Confirm `scan-reformat.mjs` tracks bullet progress (395 walls remain).

### Phase 1 — Typography & design tokens  ⏳ (started)
- [x] Fix the Arial override → body uses Geist sans.
- [x] Add a **display font** (Space Grotesk) as `--font-display`; apply to h1–h3 with tightened tracking.
- [x] Global polish tokens: smooth scroll, `::selection`, refined scrollbar, `prefers-reduced-motion` guard.
- [ ] Define a documented **type scale** (display / h1 / h2 / h3 / body / small / mono) as utilities and migrate pages onto it (rolling).
- [ ] Tighten the spacing scale / section rhythm tokens.
- [ ] Fix stale OG/Twitter metadata counts (683 / 55).

### Phase 2 — Motion & micro-interactions
- [ ] `Reveal` component (IntersectionObserver, fade/translate up, staggered) — reduced-motion aware. Wrap section blocks on home, stages, epoch, certs.
- [ ] Richer hovers: magnetic CTA, card tilt already on home (extend to stages/epoch cards), link underlines.
- [ ] Section/page enter transitions (subtle).
- [ ] Animated number counters on stats / readiness rings.

> **SAMPLE EPOCH (awaiting approval):** `ai-ml-foundations` (6 stages) was fully polished as the style demo for the per-epoch "both bullets + images" pass — 11 wall-of-text enumerations converted to bullet lists (42 bullet lines), and 6 self-hosted Wikimedia diagrams added (CNN, Iris scatter, precision/recall, GPT architecture, DevOps toolchain, cloud computing). Once approved, the same pattern grinds across the remaining epochs.

### Phase 3 — Content readability (the big grind; the user's two asks)
**3a. Bullets — 395 wall-of-text stages → bulleted.** Use `scan-reformat.mjs` to pick targets; rewrite prose lists in `overview` / `technical.body` / `incident.body` as `\n- ` lines (renderer turns them into `<ul>`). Preserve facts. Order: extended tracks first (baseball, debate, driving, travel, languages, crafts), then sec-foundations + ai-ml-foundations, then any remaining security. Per-epoch checkpoints; CRLF-safe node scripts.
- [x] **baseball (1–15) DONE** · [ ] debate (1–8) · [ ] driving (1–3) · [ ] travel (paris/milan/french/italian) · [ ] crafts (tapestry/nails/hair) · [ ] sec-foundations · [x] ai-ml-foundations (sample) · [ ] remaining security walls
  - Note: bulleting yield varies — fundamentals/how-to epochs (baseball-1, positions) are list-rich; advanced/concept epochs (baseball-3/4/6/7) are mostly explanatory prose whose keyTakeaways already render as bullets, so only genuine inline lists are bulleted there.
**3b. Images — 312 stages with no image + section images for text-heavy bodies.**
- [ ] Source self-hosted images (Wikimedia pipeline → sharp 800px → `public/img/` → `STAGE_IMAGES`) for the ~312 imageless stages.
- [ ] Extend `StageInfo` to support a **second/section image** (technical or incident) so long bodies get visual breaks. Add optional `technicalImage` / `incidentImage` support keyed by stage id.
- [ ] Bigger, art-directed image frame (see Phase 5).

### Phase 4 — Page-by-page redesign (priority order)
- [ ] **Stage reading view (`StageInfo`)** — the most-read surface: larger imagery, pull-quote overview, better section dividers, captions, sticky progress.
- [ ] **Homepage hero** — push the already-strong hero to SOTY tier (type, motion, depth).
- [ ] **/stages hub** — bolder track headers (done for Sports/Debate); apply rhythm + reveal site-wide.
- [ ] **Epoch page** — hero imagery, stage grid polish.
- [ ] **/certs, /leaderboard, /resume** — editorial polish, animated rings/counters.

### Phase 5 — Imagery art-direction
- [ ] Standardize frame: large, rounded, subtle ring + shadow, gradient mat, optional caption line.
- [ ] Consistent aspect handling (no tiny `object-contain` islands); duotone/grade option for cohesion.
- [ ] Alt text + captions for a11y and editorial feel.

### Phase 6 — Polish & QA
- [ ] Focus-visible states, keyboard nav, WCAG contrast pass.
- [ ] Lighthouse: LCP/CLS/perf budget; lazy-load + sized images.
- [ ] Responsive sweep (mobile-first), reduced-motion verification.
- [ ] Cross-page consistency audit (spacing, type, color, radius).

---

## How to resume
1. `cd apps/web && node scripts/scan-reformat.mjs` → see remaining bullet walls (Phase 3a).
2. Image coverage: stages without a `STAGE_IMAGES` entry are the imageless set (Phase 3b).
3. Check the boxes above as work lands; keep `CONTENT_REFORMAT.md` in sync for the bullet grind.
4. Build gate every checkpoint: from repo root `npx tsc --noEmit -p packages/core/tsconfig.json` + `npm run build`.
