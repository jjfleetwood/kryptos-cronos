#!/usr/bin/env node
// Docs Agent — keeps the documentation suite current and in sync. Two checks:
//   1. secured-docs sync — every docs/*.md must match apps/web/secured-docs/*.md
//      (the admin Docs panel serves the secured-docs copy; drift means the admin
//      reads stale docs). --fix re-copies the changed files.
//   2. stale headline counts — docs/*.md that cite "<N> stages/epochs" which no
//      longer match the real registered totals from @kryptos/core. --fix rewrites
//      them to the real number.
//
//   Dry run:  node scripts/docs-agent.mjs
//   Report:   AGENT_REPORT_URL=… AGENT_REPORT_TOKEN=… node scripts/docs-agent.mjs --report
//   Fix:      node scripts/docs-agent.mjs --fix
import { readdirSync, readFileSync, writeFileSync, existsSync, copyFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { ROOT, loadStages, makeCollector, report } from "./_agent-lib.mjs";

const FIX = process.argv.includes("--fix");
const DOCS = resolve(ROOT, "docs");
const SECURED = resolve(ROOT, "apps/web/secured-docs");
const c = makeCollector();

const mdFiles = readdirSync(DOCS).filter((f) => f.endsWith(".md"));

// ── 1. secured-docs sync ────────────────────────────────────────────────────────
let synced = 0;
for (const f of mdFiles) {
  const src = join(DOCS, f), dst = join(SECURED, f);
  const srcTxt = readFileSync(src, "utf8");
  const dstTxt = existsSync(dst) ? readFileSync(dst, "utf8") : null;
  if (dstTxt !== srcTxt) {
    if (FIX) { copyFileSync(src, dst); synced++; }
    else c.add("medium", `docs/${f}`, "", "secured-docs-drift",
      `docs/${f} is out of sync with secured-docs/${f}`,
      `The admin Docs panel serves apps/web/secured-docs/${f}, but it differs from the source docs/${f}${dstTxt === null ? " (missing entirely)" : ""}. Admins are reading a stale copy. Fix: \`cp docs/${f} apps/web/secured-docs/${f}\` (or run this agent with --fix).`);
  }
}

// ── 2. stale headline counts in docs ────────────────────────────────────────────
// History/changelog files legitimately cite PAST counts (e.g. "751 -> 741"), so
// they're excluded — flagging (or worse, --fix rewriting) them would corrupt the
// record. Only current-facts docs are checked.
const HISTORY = new Set(["RELEASE_NOTES.md", "GRIND_PLAN.md", "TODO.md", "CHANGELOG.md", "HOURS_LOG.md", "ADR.md"]);
const { stages, cleanup } = loadStages("docs");
try {
  const realStages = stages.length;
  const realEpochs = new Set(stages.map((s) => s.epochId)).size;
  for (const f of mdFiles) {
    if (HISTORY.has(f)) continue;
    const src = join(DOCS, f);
    let txt = readFileSync(src, "utf8");
    const badStages = [...txt.matchAll(/(\d{3,4})\s*stages\b/gi)].map((m) => Number(m[1])).filter((n) => n >= 100 && n !== realStages);
    const badEpochs = [...txt.matchAll(/(\d{2,4})\s*epochs\b/gi)].map((m) => Number(m[1])).filter((n) => n >= 30 && n !== realEpochs);
    if (badStages.length || badEpochs.length) {
      if (FIX) {
        txt = txt.replace(/(\d{3,4})(\s*stages\b)/gi, (m, n, tail) => (Number(n) >= 100 && Number(n) !== realStages ? realStages + tail : m));
        txt = txt.replace(/(\d{2,4})(\s*epochs\b)/gi, (m, n, tail) => (Number(n) >= 30 && Number(n) !== realEpochs ? realEpochs + tail : m));
        writeFileSync(src, txt, "utf8");
        if (existsSync(join(SECURED, f))) copyFileSync(src, join(SECURED, f));
      } else {
        c.add("medium", `docs/${f}`, "", "doc-count-drift",
          `docs/${f}: stale counts — stages ${[...new Set(badStages)].join("/") || "ok"} · epochs ${[...new Set(badEpochs)].join("/") || "ok"} (real: ${realStages}/${realEpochs})`,
          `docs/${f} cites stage/epoch counts that no longer match the real registered totals (${realStages} stages / ${realEpochs} epochs). Fix: update the numbers (or run --fix), then re-sync to secured-docs.`);
      }
    }
  }
} finally {
  cleanup();
}

// ── 3. review-stamp freshness ────────────────────────────────────────────────────
// Every current-facts doc must carry a recent `**Last reviewed:** YYYY-MM-DD` stamp
// so the founder can trust they're reading current VC/business/technical data.
// Report-only: staleness is judgement work (a human or the docs Claude subagent
// re-verifies the figures and re-stamps) — we never auto-stamp an unreviewed doc.
const STALE_DAYS = 45;
const now = Date.now();
let stale = 0, unstamped = 0;
for (const f of mdFiles) {
  if (HISTORY.has(f)) continue;
  const txt = readFileSync(join(DOCS, f), "utf8");
  // Newest date near a "reviewed/updated/date" label anywhere in the doc.
  const dates = [...txt.matchAll(/(?:last reviewed|last updated|date)\b[^\n\d]{0,6}(\d{4}-\d{2}-\d{2})/gi)].map((m) => m[1]);
  if (!dates.length) {
    unstamped++;
    c.add("medium", `docs/${f}`, "", "doc-no-review-stamp",
      `docs/${f}: no "Last reviewed" date stamp`,
      `docs/${f} carries no \`**Last reviewed:** YYYY-MM-DD\` stamp, so there's no signal whether its facts are current. Fix: re-verify the doc against the live product, then add/update the stamp at the top.`);
    continue;
  }
  const newest = dates.sort().at(-1);
  const ageDays = Math.floor((now - Date.parse(newest)) / 86400000);
  if (ageDays > STALE_DAYS) {
    stale++;
    c.add("medium", `docs/${f}`, "", "doc-stale-review",
      `docs/${f}: last reviewed ${ageDays} days ago (${newest})`,
      `docs/${f} was last reviewed ${ageDays} days ago — past the ${STALE_DAYS}-day freshness window. Re-verify its figures (version, counts, financials, status) against the live product and re-stamp \`**Last reviewed:** <today>\`. Business/VC docs are highest priority.`);
  }
}

if (FIX) console.log(`✓ Docs --fix: ${synced} file(s) re-synced + counts reconciled.`);
await report({ agent: "docs", icon: "📚", label: "Docs", findings: c.findings, low: c.low, scope: { docs: mdFiles.length, stale, unstamped } });
