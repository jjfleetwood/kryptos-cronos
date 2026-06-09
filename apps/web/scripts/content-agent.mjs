#!/usr/bin/env node
// Content Integrity Agent — deterministic content QA over every stage. Report-only.
//   Dry run:  node scripts/content-agent.mjs
//   Report:   AGENT_REPORT_URL=… AGENT_REPORT_TOKEN=… node scripts/content-agent.mjs --report
import { loadStages, makeCollector, report } from "./_agent-lib.mjs";

const TECH = new Set(["cybersecurity", "ai", "owasp"]);
const { stages, cleanup } = loadStages("content_agent");
const c = makeCollector();

try {
  // Catalog-wide uniqueness
  const stageIds = new Map(), badgeIds = new Map();
  for (const s of stages) {
    stageIds.set(s.id, (stageIds.get(s.id) || 0) + 1);
    if (s.badge?.id) badgeIds.set(s.badge.id, (badgeIds.get(s.badge.id) || 0) + 1);
  }
  for (const [id, n] of stageIds) if (n > 1) c.add("high", id, "", "dup-stage-id", `Duplicate stage id "${id}" (${n}×)`, "Stage ids must be unique — duplicates collide in routing and progress.");
  for (const [id, n] of badgeIds) if (n > 1) c.add("medium", id, "", "dup-badge-id", `Duplicate badge id "${id}" (${n}×)`, "Badge ids should be unique so awards are attributable.");

  // Per-stage integrity
  for (const s of stages) {
    const info = s.info || {};
    const ep = s.epochId;
    if (!s.badge?.id || !s.badge?.name) c.add("high", s.id, ep, "missing-badge", `${s.id}: missing badge id/name`, "Every stage needs a badge for completion.");
    if (!Array.isArray(info.overview) || info.overview.length === 0) c.add("high", s.id, ep, "empty-overview", `${s.id}: empty overview`, "info.overview has no paragraphs.");
    if (!Array.isArray(info.keyTakeaways) || info.keyTakeaways.length === 0) c.add("medium", s.id, ep, "empty-takeaways", `${s.id}: no key takeaways`, "info.keyTakeaways is empty.");
    if (!info.tagline || !String(info.tagline).trim()) c.add("low", s.id, ep, "empty-tagline", "", "");

    const refs = Array.isArray(info.references) ? info.references : [];
    if (refs.length === 0) {
      if (TECH.has(s.category)) c.add("low", s.id, ep, "no-references", "", "");
    } else {
      const bad = refs.filter((r) => !r?.url || !/^https?:\/\//i.test(String(r.url)));
      if (bad.length) c.add("medium", s.id, ep, "bad-ref-url", `${s.id}: ${bad.length} reference(s) with a missing/malformed URL`, `Refs: ${bad.map((r) => r?.title || "?").join(", ")}`);
    }

    // Thin technical stages
    if (TECH.has(s.category)) {
      if (Array.isArray(info.overview) && info.overview.length < 2) c.add("low", s.id, ep, "thin-overview", "", "");
      if (!info.incident || !info.incident.title) c.add("low", s.id, ep, "missing-incident", "", "");
    }
  }

  await report({ agent: "content", icon: "📝", label: "Content Integrity", findings: c.findings, low: c.low, scope: { stages: stages.length } });
} finally {
  cleanup();
}
