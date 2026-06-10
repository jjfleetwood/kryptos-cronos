#!/usr/bin/env node
// Code Health Agent — deterministic code QA over apps/web/src. Report-only (never edits).
//   Dry run:  node scripts/code-health-agent.mjs
//   Report:   AGENT_REPORT_URL=… AGENT_REPORT_TOKEN=… node scripts/code-health-agent.mjs --report
import { ROOT, makeCollector, report, walk, readFileSync } from "./_agent-lib.mjs";
import { resolve, relative } from "node:path";

const SRC = resolve(ROOT, "apps/web/src");
const BIG = 1400; // line threshold for a "refactor candidate"
const c = makeCollector();
const files = walk(SRC, [".ts", ".tsx"]);

for (const f of files) {
  const rel = relative(ROOT, f).replace(/\\/g, "/");
  const lines = readFileSync(f, "utf8").split("\n");
  if (lines.length > BIG) {
    const over = lines.length - BIG;
    const exports = lines.filter((l) => /^export\s+(default\s+)?(function|const|class)\b/.test(l)).length;
    const components = lines.filter((l) => /^\s*(export\s+)?function\s+[A-Z]/.test(l)).length;
    c.add(
      "medium", rel, "", "oversized-file",
      `${rel}: ${lines.length} lines (${over} over the ${BIG}-line guideline) — refactor candidate`,
      `This file is ${lines.length} lines — ${over} over the ${BIG}-line guideline — with ~${exports} top-level export(s) and ~${components} component-like function(s). Large files are slow to review, hard to test, and merge-conflict-prone. ` +
      `Fix (behaviour-preserving): extract self-contained sections — panels/cards, table rows, modals, or a tab's body — into sibling components in the same folder, and move pure helpers into a co-located \`*.helpers.ts\`. Do it one section at a time, keeping props/logic identical, and re-run tsc + lint + build after each extraction.`,
    );
  }
  let logs = 0, todos = 0, anys = 0, dsi = 0;
  for (const ln of lines) {
    if (/\bconsole\.(log|debug)\s*\(/.test(ln)) logs++;
    if (/\b(TODO|FIXME|HACK|XXX)\b/.test(ln)) todos++;
    if (/\bas any\b|:\s*any\b|<any>/.test(ln)) anys++;
    if (/dangerouslySetInnerHTML/.test(ln)) dsi++;
  }
  for (let i = 0; i < logs; i++) c.add("low", rel, "", "console-log", "", "");
  for (let i = 0; i < todos; i++) c.add("low", rel, "", "todo-comment", "", "");
  for (let i = 0; i < anys; i++) c.add("low", rel, "", "any-type", "", "");
  for (let i = 0; i < dsi; i++) c.add("low", rel, "", "dangerously-set-html", "", "");
}

await report({ agent: "code", icon: "🔧", label: "Code Health", findings: c.findings, low: c.low, scope: { files: files.length } });
