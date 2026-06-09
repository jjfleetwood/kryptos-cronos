#!/usr/bin/env node
// Format Drift Agent — flags inline enumerations in stage prose that would read
// better as "- " bullet lists (house style). Conservative: caps cards at the 8
// worst offenders; everything else aggregates into the summary. Report-only.
//   Dry run:  node scripts/format-agent.mjs
//   Report:   AGENT_REPORT_URL=… AGENT_REPORT_TOKEN=… node scripts/format-agent.mjs --report
import { loadStages, makeCollector, report } from "./_agent-lib.mjs";

// High-confidence signal only: a COLON followed by >=3 commas and an "and"/"or"
// within one sentence — i.e. "X: a, b, c, and d". A colon is strong list-intent;
// requiring it avoids flagging ordinary enumerative prose.
const CUE = /:\s+[^.\n]*?,[^.\n]*?,[^.\n]*?,[^.\n]*?,[^.\n]*?\b(and|or)\b/i;

const { stages, cleanup } = loadStages("format_agent");
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

try {
  const perStage = [];
  let total = 0, affected = 0;
  for (const s of stages) {
    const n = countCandidates(s);
    if (n > 0) { perStage.push([s, n]); total += n; affected++; }
  }
  perStage.sort((a, b) => b[1] - a[1]);
  perStage.slice(0, 8).forEach(([s, n]) =>
    c.add("medium", s.id, s.epochId, "inline-list", `${s.id}: ${n} inline list(s) that could be bullets`,
      "A lead sentence + comma series that reads better as a '- ' bulleted list (matches house style)."));
  for (const [, n] of perStage.slice(8)) for (let i = 0; i < n; i++) c.add("low", "", "", "inline-list-candidate", "", "");

  await report({ agent: "format", icon: "🧹", label: "Format Drift", findings: c.findings, low: c.low, scope: { stages: stages.length, affected, total } });
} finally {
  cleanup();
}
