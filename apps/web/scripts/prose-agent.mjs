#!/usr/bin/env node
// Content Depth Agent — flags stage overviews still in the terse bulleted format
// (rather than the narrative house standard) and overviews that are too thin. This
// powers the ongoing "deepen the prose" work; report-only, aggregated by epoch so
// it points at the next epoch to rewrite instead of flooding the board.
//   Dry run:  node scripts/prose-agent.mjs
//   Report:   AGENT_REPORT_URL=… AGENT_REPORT_TOKEN=… node scripts/prose-agent.mjs --report
import { loadStages, makeCollector, report } from "./_agent-lib.mjs";

const TECH = new Set(["cybersecurity", "ai", "owasp"]);
const { stages, cleanup } = loadStages("prose_agent");
const c = makeCollector();

try {
  const byEpoch = {};
  for (const s of stages) {
    const ov = Array.isArray(s.info?.overview) ? s.info.overview.map(String) : [];
    if (!ov.length) continue;
    const bulletedParas = ov.filter((p) => p.includes("\n- ")).length;
    const chars = ov.join(" ").replace(/\s+/g, " ").length;
    const terse = bulletedParas >= 2;          // 2+ bulleted paragraphs = the old terse format
    const thin = TECH.has(s.category) && chars < 600;
    if (!terse && !thin) continue;
    byEpoch[s.epochId] ??= { terse: 0, thin: 0 };
    if (terse) byEpoch[s.epochId].terse++;
    if (thin) byEpoch[s.epochId].thin++;
    c.add("low", s.id, s.epochId, terse ? "overview-bulleted" : "overview-thin", "", "");
  }

  // One rollup card per epoch that has meaningful depth debt (don't flood per-stage).
  for (const [ep, v] of Object.entries(byEpoch)) {
    if (v.terse + v.thin >= 4) {
      c.add("medium", ep, ep, "prose-depth", `${ep}: ${v.terse} terse/bulleted + ${v.thin} thin overview(s)`,
        `In ${ep}, ${v.terse} stage overview(s) are still in the terse bulleted format (2+ "\\n- " paragraphs) and ${v.thin} are thin (<600 chars). The house standard is sustained narrative prose that threads the epoch's argument (see the deepened quantum epochs). Fix: rewrite the flagged overviews into connected prose. Run \`node apps/web/scripts/prose-agent.mjs\` (dry) for the per-stage list.`);
    }
  }

  await report({ agent: "prose", icon: "✍️", label: "Content Depth", findings: c.findings, low: c.low, scope: { stages: stages.length } });
} finally {
  cleanup();
}
