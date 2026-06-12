#!/usr/bin/env node
// Prose Quality Agent — the merged stage-prose linter (former Format Drift +
// Content Depth agents). Two checks over every stage's prose, one transpile, one
// board label:
//   1. FORMAT — inline enumerations ("Lead: a, b, c, and d") that read better as
//      "- " bullet lists (house style). Supports a supervised --fix write-mode.
//   2. DEPTH  — overviews still in the terse bulleted format, or too thin, rolled
//      up per epoch so it points at the next epoch to deepen.
//   Dry run:  node scripts/prose-quality-agent.mjs
//   Report:   AGENT_REPORT_URL=… AGENT_REPORT_TOKEN=… node scripts/prose-quality-agent.mjs --report
//   Fix:      node scripts/prose-quality-agent.mjs --fix   (supervised write-mode)
//
// --fix (Phase 2 write-mode, approved 2026-06-09): deterministically converts the
// highest-confidence inline lists to bullets ON A BRANCH and opens a PR via gh.
// It never commits to master. Guardrails (bounded blast radius):
//   - only paragraphs whose list-sentence ends the paragraph and parses cleanly
//   - the source literal must match verbatim exactly once across epoch files
//   - max 10 paragraphs per run; core tsc must pass before the PR is opened
//   - requires a clean working tree; restores master and aborts on any failure
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { loadStages, makeCollector, report, walk, ROOT } from "./_agent-lib.mjs";

const FIX = process.argv.includes("--fix");
const MAX_FIXES = 10;
const TECH = new Set(["cybersecurity", "ai", "owasp"]);

// High-confidence FORMAT signal: a COLON followed by >=3 commas and an "and"/"or"
// within one sentence — i.e. "X: a, b, c, and d". A colon is strong list-intent;
// requiring it avoids flagging ordinary enumerative prose.
const CUE = /:\s+[^.\n]*?,[^.\n]*?,[^.\n]*?,[^.\n]*?,[^.\n]*?\b(and|or)\b/i;

const { stages, cleanup } = loadStages("prose_quality");
const c = makeCollector();

function paragraphs(s) {
  const i = s.info || {};
  return [...(i.overview || []), ...((i.technical && i.technical.body) || [])];
}
function countCandidates(s) {
  let n = 0;
  for (const p of paragraphs(s)) {
    if (typeof p !== "string" || p.includes("\n- ")) continue; // already bulleted
    if (CUE.test(p)) n++;
  }
  return n;
}

/** Deterministic transform: "Lead: a, b, c, and d." → "Lead:\n- a\n- b\n- c\n- d".
 *  Returns null unless the paragraph parses cleanly and the list ends it. */
function transform(p) {
  if (typeof p !== "string" || p.includes("\n") || p.includes('"')) return null;
  const colon = p.lastIndexOf(":");
  if (colon < 10) return null;
  const lead = p.slice(0, colon).trim();
  let tail = p.slice(colon + 1).trim();
  if (!CUE.test(p.slice(Math.max(0, colon - 1)))) return null;
  // The list must END the paragraph and contain no nested structure.
  if (/[;:()"]|e\.g\.|i\.e\./.test(tail)) return null;
  tail = tail.replace(/\.\s*$/, "");
  if (tail.includes(".")) return null; // another sentence follows — too risky
  const rawItems = tail.split(/,\s+/).map((x) => x.trim()).filter(Boolean);
  if (rawItems.length < 3 || rawItems.length > 8) return null;
  const last = rawItems.length - 1;
  rawItems[last] = rawItems[last].replace(/^(and|or)\s+/i, "");
  if (rawItems.some((x) => x.length < 2 || x.length > 90)) return null;
  return `${lead}:\n${rawItems.map((x) => `- ${x}`).join("\n")}`;
}

function sh(cmd) {
  return execSync(cmd, { cwd: ROOT, stdio: ["ignore", "pipe", "pipe"] }).toString().trim();
}

function applyFixes() {
  // -uno: untracked files (e.g. this agent's own .tmp_ transpile dir) don't
  // block the run — only modified tracked files do; we stage core/src only.
  if (sh("git status --porcelain -uno")) {
    console.error("✗ --fix requires a clean working tree (tracked files). Aborting.");
    process.exitCode = 1;
    return null;
  }
  const files = walk(resolve(ROOT, "packages/core/src"), [".ts"]);
  const sources = new Map(files.map((f) => [f, readFileSync(f, "utf8")]));
  const fixes = []; // { file, stageId }
  for (const s of stages) {
    for (const p of paragraphs(s)) {
      if (fixes.length >= MAX_FIXES) break;
      if (typeof p !== "string" || p.includes("\n- ") || !CUE.test(p)) continue;
      const fixed = transform(p);
      if (!fixed) continue;
      // Locate the literal verbatim in exactly one source file, exactly once.
      const hits = files.filter((f) => sources.get(f).includes(p));
      if (hits.length !== 1) continue;
      const file = hits[0];
      const src = sources.get(file);
      if (src.indexOf(p) !== src.lastIndexOf(p)) continue;
      const newLit = fixed.replaceAll("\n", "\\n"); // escape for the TS string literal
      sources.set(file, src.replace(p, newLit));
      fixes.push({ file, stageId: s.id });
    }
  }
  if (!fixes.length) {
    console.log("✓ --fix: no cleanly-fixable paragraphs found (nothing met the safety bar).");
    return null;
  }
  for (const [f, text] of sources) {
    if (fixes.some((x) => x.file === f)) writeFileSync(f, text);
  }
  console.log(`Applying ${fixes.length} bullet normalization(s): ${fixes.map((x) => x.stageId).join(", ")}`);
  // Green gate before anything ships anywhere.
  try {
    execSync("npx tsc -p packages/core/tsconfig.json --noEmit --skipLibCheck", { cwd: ROOT, stdio: "inherit" });
  } catch {
    console.error("✗ tsc gate failed — reverting and aborting.");
    sh("git checkout -- packages/core/src");
    process.exitCode = 1;
    return null;
  }
  const branch = `agent/prose-normalize-${new Date().toISOString().slice(0, 16).replace(/[-:T]/g, "")}`;
  const stageList = [...new Set(fixes.map((x) => x.stageId))].join(", ");
  let prUrl = "";
  try {
    sh(`git checkout -b ${branch}`);
    sh("git add packages/core/src");
    sh(`git commit -m "Prose Quality agent: bullet-normalize ${fixes.length} inline list(s) (${stageList})"`);
    sh(`git push -u origin ${branch}`);
    prUrl = sh(
      `gh pr create --base master --head ${branch} ` +
      `--title "Prose Quality agent: bullet-normalize ${fixes.length} inline list(s)" ` +
      `--body "Deterministic house-style normalization by the Prose Quality Agent (supervised write-mode). Stages: ${stageList}. Core tsc passed before this PR was opened. Human review + merge required — the agent never merges."`,
    );
  } catch (e) {
    console.error(`✗ branch/PR step failed: ${e.message} — restoring master.`);
    try { sh("git checkout master"); sh(`git branch -D ${branch}`); } catch { /* best effort */ }
    process.exitCode = 1;
    return null;
  }
  sh("git checkout master");
  console.log(`✓ PR opened: ${prUrl}`);
  return { branch, prUrl, count: fixes.length, stageList };
}

try {
  // ── Check 1: FORMAT — inline enumerations that should be bullets ──────────────
  const perStage = [];
  let totalLists = 0, affected = 0;
  for (const s of stages) {
    const n = countCandidates(s);
    if (n > 0) { perStage.push([s, n]); totalLists += n; affected++; }
  }
  perStage.sort((a, b) => b[1] - a[1]);
  perStage.slice(0, 8).forEach(([s, n]) =>
    c.add("medium", s.id, s.epochId, "inline-list", `${s.id}: ${n} inline list(s) that could be bullets`,
      "A lead sentence + comma series that reads better as a '- ' bulleted list (matches house style)."));
  for (const [, n] of perStage.slice(8)) for (let i = 0; i < n; i++) c.add("low", "", "", "inline-list-candidate", "", "");

  let pr = null;
  if (FIX) pr = applyFixes();
  if (pr) {
    c.add("medium", pr.branch, "", "normalization-pr",
      `Prose normalization PR: ${pr.count} paragraph(s) bulleted`,
      `Supervised write-mode run. PR: ${pr.prUrl} (stages: ${pr.stageList}). Review + merge is a human action.`);
  }

  // ── Check 2: DEPTH — terse/thin overviews, rolled up per epoch ────────────────
  const byEpoch = {};
  for (const s of stages) {
    const ov = Array.isArray(s.info?.overview) ? s.info.overview.map(String) : [];
    if (!ov.length) continue;
    const bulletedParas = ov.filter((p) => p.includes("\n- ")).length;
    const chars = ov.join(" ").replace(/\s+/g, " ").length;
    const terse = bulletedParas >= 2;                 // 2+ bulleted paragraphs = old terse format
    const thin = TECH.has(s.category) && chars < 600;
    if (!terse && !thin) continue;
    byEpoch[s.epochId] ??= { terse: 0, thin: 0 };
    if (terse) byEpoch[s.epochId].terse++;
    if (thin) byEpoch[s.epochId].thin++;
    c.add("low", s.id, s.epochId, terse ? "overview-bulleted" : "overview-thin", "", "");
  }
  for (const [ep, v] of Object.entries(byEpoch)) {
    if (v.terse + v.thin >= 4) {
      c.add("medium", ep, ep, "prose-depth", `${ep}: ${v.terse} terse/bulleted + ${v.thin} thin overview(s)`,
        `In ${ep}, ${v.terse} stage overview(s) are still in the terse bulleted format (2+ "\\n- " paragraphs) and ${v.thin} are thin (<600 chars). The house standard is sustained narrative prose that threads the epoch's argument (see the deepened quantum epochs). Fix: rewrite the flagged overviews into connected prose. Run \`node apps/web/scripts/prose-quality-agent.mjs\` (dry) for the per-stage list.`);
    }
  }

  await report({
    agent: "prose-quality", icon: "✍️", label: "Prose Quality",
    findings: c.findings, low: c.low,
    scope: { stages: stages.length, listsAffected: affected, inlineLists: totalLists, depthEpochs: Object.keys(byEpoch).length },
  });
} finally {
  cleanup();
}
