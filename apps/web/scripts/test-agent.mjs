#!/usr/bin/env node
// Deep Testing Agent (Phase 1) — validates every quiz and CTF and reports findings
// to the Development scrum board. REPORT-ONLY: it never edits content.
//
//   Dry run (prints, no network):   node scripts/test-agent.mjs
//   Report to the board:            AGENT_REPORT_URL=https://kryptoscronos.com \
//                                   AGENT_REPORT_TOKEN=… node scripts/test-agent.mjs --report
//
// Quiz checks mirror the real grader (check-answer): answers match by option TEXT
// against options[correctIndex] after client-side shuffling — so an out-of-range
// correctIndex makes a question unanswerable, and duplicate option text is ambiguous.
// CTF checks mirror scripts/validate-ctf.mjs (fragment reachability + flag assembly).

import { execSync } from "node:child_process";
import { createRequire } from "node:module";
import { rmSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(process.cwd(), "../..");
const OUT = resolve(ROOT, ".tmp_test_agent");
const require = createRequire(import.meta.url);
const REPORT = process.argv.includes("--report");

const BUILTINS = ["help", "assemble", "pwd", "clear", "cd", "ls", "cat", "submit"];
const norm = (s) => String(s ?? "").trim().toLowerCase();
const fileMatch = (files, arg) => !!arg && (files.has(arg) || files.has("/" + arg) || [...files].some((p) => p.endsWith("/" + arg)));

const findings = [];        // high/medium → become board cards
const low = {};             // checkId → count (aggregated into the summary only)
function add(severity, stageId, epochId, checkId, title, detail) {
  if (severity === "low") { low[checkId] = (low[checkId] || 0) + 1; return; }
  findings.push({ severity, stageId, epochId, checkId, title, detail });
}

try {
  execSync(
    `npx tsc -p packages/core/tsconfig.json --outDir "${OUT}" --module commonjs --moduleResolution node --noEmit false --declaration false --skipLibCheck`,
    { cwd: ROOT, stdio: "inherit" },
  );
  const { stages } = require(resolve(OUT, "stages.js"));

  const quizStages = stages.filter((s) => s.challengeType === "quiz" || s.quiz?.questions?.length);
  const ctfStages = stages.filter((s) => s.challengeType === "ctf" && s.ctf);

  // ── Quiz validation ──────────────────────────────────────────────────────────
  for (const s of stages) {
    if (s.challengeType === "quiz" && !s.quiz?.questions?.length) {
      add("high", s.id, s.epochId, "quiz-missing", `${s.id}: quiz stage has no questions`, "challengeType is 'quiz' but stage.quiz is empty/absent.");
      continue;
    }
    const qs = s.quiz?.questions;
    if (!qs?.length) continue;

    const ids = new Set(), dupIds = [];
    const badIndex = [], noText = [], fewOpt = [], emptyOpt = [], dupOpt = [], noExpl = [];
    for (const q of qs) {
      if (ids.has(q.id)) dupIds.push(q.id); else ids.add(q.id);
      const opts = q.options || [];
      if (!q.text || !String(q.text).trim()) noText.push(q.id);
      if (opts.length < 2) fewOpt.push(q.id);
      if (typeof q.correctIndex !== "number" || q.correctIndex < 0 || q.correctIndex >= opts.length) badIndex.push(q.id);
      if (opts.some((o) => !String(o ?? "").trim())) emptyOpt.push(q.id);
      const seen = new Set(); let dup = false;
      for (const o of opts) { const n = norm(o); if (seen.has(n)) dup = true; seen.add(n); }
      if (dup) dupOpt.push(q.id);
      if (!q.explanation || !String(q.explanation).trim()) noExpl.push(q.id);
    }
    const ep = s.epochId;
    if (badIndex.length) add("high", s.id, ep, "quiz-bad-index", `${s.id}: ${badIndex.length} question(s) with an invalid correctIndex — unanswerable`, `Answers are graded as options[correctIndex]; an out-of-range index can never be matched. Q: ${badIndex.join(", ")}`);
    if (noText.length) add("high", s.id, ep, "quiz-missing-text", `${s.id}: ${noText.length} question(s) missing text`, `Q: ${noText.join(", ")}`);
    if (fewOpt.length) add("high", s.id, ep, "quiz-few-options", `${s.id}: ${fewOpt.length} question(s) with fewer than 2 options`, `Q: ${fewOpt.join(", ")}`);
    if (emptyOpt.length) add("high", s.id, ep, "quiz-empty-option", `${s.id}: ${emptyOpt.length} question(s) with an empty option`, `Q: ${emptyOpt.join(", ")}`);
    if (dupOpt.length) add("medium", s.id, ep, "quiz-dup-options", `${s.id}: ${dupOpt.length} question(s) with duplicate option text`, `Options are matched by text after shuffling — duplicates are ambiguous. Q: ${dupOpt.join(", ")}`);
    if (dupIds.length) add("medium", s.id, ep, "quiz-dup-qid", `${s.id}: duplicate question id(s)`, `Duplicate ids resolve to the first question server-side. ids: ${[...new Set(dupIds)].join(", ")}`);
    if (qs.length < 4) add("low", s.id, ep, "quiz-thin-bank", "", "");
    if (noExpl.length) add("low", s.id, ep, "quiz-missing-explanation", "", "");
  }

  // ── CTF validation (mirrors validate-ctf.mjs) ────────────────────────────────
  for (const s of ctfStages) {
    const c = s.ctf;
    const files = new Set(Object.keys(c.files || {}));
    const extra = new Set(Object.keys(c.extraCommands || {}));
    const frags = c.fragments || [];
    const probs = [];
    for (const e of extra) if (BUILTINS.includes(e) && e !== "cat") probs.push(`extraCommand '${e}' is shadowed by a builtin`);
    for (const f of frags) {
      const trig = f.trigger;
      if (trig.startsWith("/")) {
        if (!files.has(trig)) probs.push(`fragment file-trigger '${trig}' not in files`);
      } else {
        const [verb, arg] = trig.split(/\s+/);
        if (verb === "cat") { if (!fileMatch(files, arg) && !extra.has("cat")) probs.push(`fragment 'cat ${arg}' has no real file or extraCommands.cat`); }
        else if (!extra.has(verb) && !BUILTINS.includes(verb)) probs.push(`fragment cmd '${trig}' has no handler`);
      }
    }
    if (frags.length) { const asm = frags.map((f) => f.value).join(""); if (!(asm.includes("FLAG{") && asm.trim().endsWith("}"))) probs.push(`assembled fragments don't form a FLAG{...}: '${asm}'`); }
    if (c.pivotTrigger) { const verb = c.pivotTrigger.split(/\s+/)[0]; if (!extra.has(verb) && !BUILTINS.includes(verb)) probs.push(`pivotTrigger '${c.pivotTrigger}' has no handler`); }
    if (probs.length) add("high", s.id, s.epochId, "ctf-integrity", `${s.id}: ${probs.length} CTF integrity issue(s)`, probs.join("; "));
  }

  // ── Report ───────────────────────────────────────────────────────────────────
  const summary = { icon: "🧪", label: "Deep Testing", scope: { quizzes: quizStages.length, ctfs: ctfStages.length }, low };
  const high = findings.filter((f) => f.severity === "high").length;
  const med = findings.filter((f) => f.severity === "medium").length;
  console.log(`\n🧪 Deep Testing Agent — ${quizStages.length} quiz stages, ${ctfStages.length} CTF stages`);
  console.log(`Findings: ${high} high · ${med} medium · low(aggregated): ${Object.entries(low).map(([k, v]) => `${k}=${v}`).join(", ") || "none"}`);
  for (const f of findings) console.log(`  [${f.severity.toUpperCase()}] ${f.title}`);
  if (!findings.length) console.log("  ✓ No high/medium findings — quizzes & CTFs structurally clean.");

  if (REPORT) {
    const url = process.env.AGENT_REPORT_URL, token = process.env.AGENT_REPORT_TOKEN;
    if (!url || !token) { console.error("\n--report requires AGENT_REPORT_URL and AGENT_REPORT_TOKEN."); process.exitCode = 1; }
    else {
      const res = await fetch(`${url.replace(/\/$/, "")}/api/agent/report`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ agent: "tester", findings, summary }),
      });
      const out = await res.json().catch(() => ({}));
      console.log(`\nReported to board → ${res.status} ${JSON.stringify(out)}`);
      if (!res.ok) process.exitCode = 1;
    }
  } else {
    console.log("\n(dry run — add --report with AGENT_REPORT_URL + AGENT_REPORT_TOKEN to file cards on the board)");
  }
} finally {
  rmSync(OUT, { recursive: true, force: true });
}
