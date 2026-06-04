# Content Reformatting Rollout — Resume Checklist

**Goal:** break dense walls-of-text in **all three briefing sections — `overview`, `technical.body` (Technical Deep-Dive), and `incident.body` (Real-World Incident)** — into scannable **bulleted-with-dialogue** format. Approved by Jacob (style locked).

**Status:** ✅ **IN-SCOPE GRIND COMPLETE.** Every in-scope epoch in the order list below is ticked — all security / tech-audit / AI / quantum epochs + cisco-2/3/4/5 + umbrella + stages.ts (ancient + cisco-core) + first-journey ×3 (bt-01..30). Extended curriculum (baseball, driving, french/italian, paris/milan, nails, hair, tapestry — ~210 stages) remains **OUT OF SCOPE** unless Jacob says otherwise. **Quiz rollout is DONE (203/203, v1.23.0).**

## Coloring (shipped in `RichText.tsx` — do NOT re-edit the component)
- `'single-quoted'` terms → amber pill; backtick `code` → cyan monospace pill.
- **Use sparingly.** Backticks for real code/commands only; single quotes for at most a key term or two per section. Keep amber density LOW — match the Overview's restraint. Jacob: "toned down colors like in the overview." Don't quote every severity level, product name, or standard.

## Format (the renderer already supports it — no component change)
- `StageInfo.tsx` `RichBlock` renders bullets: within a single block string, lines starting with `- ` / `•` / `*` become a `<ul>`; non-bullet lines stay prose.
- **Pattern:** a lead framing sentence (prose), then `\n- ` bullet lines, each carrying **a full sentence of real explanation** (not a terse phrase):
  `"Lead framing sentence:\n- First point — a full sentence of dialogue.\n- Second point — a full sentence of dialogue."`
- **Condense, don't just bulletize** — the goal is *less* text that's *more* scannable. Preserve the substance (CVEs, incidents, mechanics, attribution).
- **Canonical reference example: `tech-audit-3.ts` → `audit-a07`** (overview + technical.body + incident.body all done correctly). Copy its rhythm.

## Workflow (per epoch)
1. `node scripts/scan-reformat.mjs <file>.ts` → see which stages are still `wall`.
2. Open the data file; for each wall stage, reformat the `overview`, `technical.body`, and `incident.body` string arrays into lead-sentence + `\n- ` bullets. **Edit strings in place — do not touch ids, xp, codeExample, diagram, timeline, keyTakeaways, references.**
3. `npx tsc --noEmit --skipLibCheck` → expect 0 errors.
4. Re-run `node scripts/scan-reformat.mjs <file>.ts` → confirm stages flipped to DONE.
5. Deploy checkpoint: `npx vercel --prod --yes --project kryptos-cronos`.
6. Tick the epoch below and commit this file.

## Progress detector
`node scripts/scan-reformat.mjs` (no arg = summary; `<file>.ts` = per-stage detail). A stage counts as DONE at ≥3 `\n- ` bullet sequences across its three briefing sections. **Heuristic only — this checklist is the source of truth.** Trust the repo, not chat memory, after any compaction.

## Order (worst offenders first) — IN SCOPE
- [x] tech-audit-3 — ALL 12 DONE (a01–a12) ✅
- [x] tech-audit-1 — ALL 12 DONE (audit-01..12) ✅
- [x] tech-audit-2 — ALL 12 DONE (audit-t01..t12) ✅
- [x] tech-audit-4 — ALL 12 DONE (audit-cm01..cm12) ✅
- [x] mitre — ALL 12 DONE (mitre-01..12) ✅
- [x] mitre-atlas — ALL 12 DONE (atlas-01..12) ✅
- [x] owasp-llm — ALL 12 DONE (llm-01..12) ✅
- [x] quantum-1 — ALL 10 DONE (quantum-01..10) ✅
- [x] quantum-2 — ALL 10 DONE (quantum-b01..b10) ✅
- [x] quantum-3 — ALL 10 DONE (quantum-c01..c10) ✅
- [x] quantum-4 — ALL 10 DONE (quantum-d01..d10) ✅
- [x] emerging-tech — ALL 10 DONE (emerging-01..10) ✅
- [x] cisco-2 — ALL 13 DONE (stage-m13..m25) ✅
- [x] cisco-3 — ALL 8 DONE (stage-m26..m33) ✅
- [x] cisco-4 — ALL 5 DONE (stage-m34..m38) ✅
- [x] cisco-5 — ALL 12 DONE (stage-m39..m50) ✅
- [x] umbrella — ALL 10 DONE (umbrella-01..10) ✅
- [x] stages.ts (ancient + cisco-core) — ALL DONE (stage-01..12 + stage-m01..m12) ✅
- [x] first-journey ×3 — ALL 30 DONE (bt-01..30) ✅ — light-touch bullets (genuine lists only; warm beginner narrative kept as prose)

## OUT OF SCOPE (do not touch unless Jacob asks)
baseball-1..7, driving-1..3, french-basics, italian-basics, paris, milan, nails, hair-color, hair-styling, tapestry.

## Cold-start recipe (after a context reset)
1. From `app/`: `node scripts/scan-reformat.mjs` to see live state.
2. Pick the next unchecked epoch from the IN-SCOPE order above.
3. Reformat its wall stages following `audit-a07` as the model + the coloring rules.
4. `npx tsc --noEmit --skipLibCheck` → `npx vercel --prod --yes --project kryptos-cronos`.
5. Tick the epoch, commit `CONTENT_REFORMAT.md` + the data file.
