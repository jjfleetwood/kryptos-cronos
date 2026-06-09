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
    c.add("medium", rel, "", "oversized-file", `${rel}: ${lines.length} lines (> ${BIG}) — refactor candidate`, "Large files are harder to review and test; consider extracting components/modules.");
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
