#!/usr/bin/env node
// Drift Agent — keeps generated/derived content in sync with the source of
// truth so the build never gets blocked and the app's numbers never lie.
// Two checks:
//   1. stages-meta freshness — the client-safe metadata codegen. If it's stale,
//      CI `check:meta` fails and the build is blocked (the #1 board ask).
//   2. headline-count drift — the real registered totals (stages/epochs) vs the
//      "<N> stages / <N> epochs" numbers sprinkled across the app + locales.
//
//   Dry run:  node scripts/drift-agent.mjs
//   Report:   AGENT_REPORT_URL=… AGENT_REPORT_TOKEN=… node scripts/drift-agent.mjs --report
//   Fix meta: node scripts/drift-agent.mjs --fix     (regenerates stages-meta in place)
import { execSync } from "node:child_process";
import { resolve, relative } from "node:path";
import { ROOT, loadStages, makeCollector, report, walk, readFileSync } from "./_agent-lib.mjs";

const FIX = process.argv.includes("--fix");
const c = makeCollector();

// ── 1. stages-meta freshness ───────────────────────────────────────────────────
let metaStale = false;
try {
  execSync("npm run check:meta -w @kryptos/core", { cwd: ROOT, stdio: "pipe" });
} catch {
  metaStale = true;
}
if (metaStale) {
  if (FIX) {
    execSync("npm run gen:meta -w @kryptos/core", { cwd: ROOT, stdio: "inherit" });
    console.log("✓ Regenerated stages-meta (gen:meta).");
  } else {
    c.add(
      "high", "packages/core/src/stages-meta.generated.ts", "", "stale-meta",
      "stages-meta is stale — CI check:meta will block the build",
      "The generated client metadata is out of sync with the content (a stage/epoch was added or its listing fields changed without re-running codegen). CI `check:meta` fails on this, blocking every build. Fix: `npm run gen:meta -w @kryptos/core` (or run this agent with --fix), then commit packages/core/src/stages-meta.generated.ts.",
    );
  }
}

// ── 2. headline-count drift ────────────────────────────────────────────────────
const { stages, cleanup } = loadStages("drift");
try {
  const realStages = stages.length;
  const realEpochs = new Set(stages.map((s) => s.epochId)).size;
  // Scan the app + locales for "<num> stages" / "<num> epochs" that don't match.
  const files = walk(resolve(ROOT, "apps/web/src"), [".ts", ".tsx", ".json"]);
  const reStage = /(\d{3,4})\s*(?:\+\s*)?stages\b/gi;
  const reEpoch = /(\d{2,4})\s*(?:\+\s*)?epochs\b/gi;
  const stageBad = new Map(); // file -> set of wrong numbers
  const epochBad = new Map();
  for (const f of files) {
    const base = f.split(/[\\/]/).pop() ?? "";
    if (base.startsWith("_")) continue; // tooling artifacts (e.g. _missing-*.json)
    const txt = readFileSync(f, "utf8");
    const rel = relative(ROOT, f).replace(/\\/g, "/");
    for (const m of txt.matchAll(reStage)) {
      const n = Number(m[1]);
      if (n >= 100 && n !== realStages) (stageBad.get(rel) ?? stageBad.set(rel, new Set()).get(rel)).add(n);
    }
    for (const m of txt.matchAll(reEpoch)) {
      const n = Number(m[1]);
      if (n >= 30 && n !== realEpochs) (epochBad.get(rel) ?? epochBad.set(rel, new Set()).get(rel)).add(n);
    }
  }
  for (const [rel, nums] of stageBad) {
    c.add("medium", rel, "", "count-drift-stages",
      `${rel}: stale stage count ${[...nums].join("/")} (real: ${realStages})`,
      `This file says "${[...nums].join("/")} stages" but the real registered total is ${realStages}. Headline counts drift whenever an epoch ships without reconciling every copy (homepage, OG/Twitter meta, account/survey pages, transactional emails, and all 7 locales). Fix: update to ${realStages}. See [[project_stat_count_locations]] for the full list of places a count lives.`);
  }
  for (const [rel, nums] of epochBad) {
    c.add("medium", rel, "", "count-drift-epochs",
      `${rel}: stale epoch count ${[...nums].join("/")} (real: ${realEpochs})`,
      `This file says "${[...nums].join("/")} epochs" but the real registered total is ${realEpochs}. Fix: update to ${realEpochs}.`);
  }
} finally {
  cleanup();
}

await report({ agent: "drift", icon: "🧭", label: "Content Drift", findings: c.findings, low: c.low, scope: { stages: stages.length } });
