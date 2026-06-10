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
  for (const [id, n] of stageIds) if (n > 1) c.add("high", id, "", "dup-stage-id", `Duplicate stage id "${id}" (${n}×)`, `The stage id "${id}" is defined ${n} times across the content. Stage ids are the routing + progress key, so duplicates collide: /stages/${id} resolves to whichever loads last, and a learner's completion of one is recorded against the other. Fix: rename the later duplicate(s) to a unique id (and update its stage-flags.ts entry if it has a CTF), then re-run gen:meta.`);
  for (const [id, n] of badgeIds) if (n > 1) c.add("medium", id, "", "dup-badge-id", `Duplicate badge id "${id}" (${n}×)`, `The badge id "${id}" is used by ${n} stages. Badge ids must be unique so an awarded badge is attributable to one stage; duplicates make the trophy/achievement count ambiguous. Fix: give each stage a distinct badge id (e.g. suffix the epoch/stage), keeping the display name as desired.`);

  // Per-stage integrity
  for (const s of stages) {
    const info = s.info || {};
    const ep = s.epochId;
    if (!s.badge?.id || !s.badge?.name) c.add("high", s.id, ep, "missing-badge", `${s.id}: missing badge id/name`, `Stage ${s.id} (${ep}) has no badge.id and/or badge.name. Completing a stage awards its badge, so without one the completion can't be recorded or shown in the trophy vault. Fix: add \`badge: { id: "<unique-id>", name: "<short name>", emoji: "<emoji>" }\` to the stage (see stage-m01 for the shape).`);
    if (!Array.isArray(info.overview) || info.overview.length === 0) c.add("high", s.id, ep, "empty-overview", `${s.id}: empty overview`, `Stage ${s.id} (${ep}) has no info.overview paragraphs, so its briefing page renders an empty body — a dead-end for the learner. Fix: write a 2–3 paragraph overview to the house HS/university standard (a real, attributed hook → the mechanism → why it matters); stage-m01 is the canonical template.`);
    if (!Array.isArray(info.keyTakeaways) || info.keyTakeaways.length === 0) c.add("medium", s.id, ep, "empty-takeaways", `${s.id}: no key takeaways`, `Stage ${s.id} (${ep}) has an empty info.keyTakeaways, so the briefing ends with no summary/retention beat. Fix: add 3–5 one-line takeaways capturing the must-remember points of the stage.`);
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

    // Quiz quality — the answer-length tell + thin pools (the 10-question target).
    const qs = Array.isArray(s.quiz?.questions) ? s.quiz.questions : [];
    if (qs.length > 0) {
      if (qs.length < 10) c.add("low", s.id, ep, "quiz-pool-under-10", "", "");
      let lenTell = 0;
      for (const q of qs) {
        const opts = Array.isArray(q.options) ? q.options.map((o) => String(o).length) : [];
        const ci = Number(q.correctIndex);
        if (opts.length < 2 || !(ci >= 0 && ci < opts.length)) continue;
        const max = Math.max(...opts);
        // The correct option is the single strictly-longest one — a "pick the wordiest" tell.
        if (opts[ci] === max && opts.filter((l) => l === max).length === 1) lenTell++;
      }
      // Aggregated (low) so a systemic, known issue doesn't flood the board with
      // one card per stage. The sweep summary surfaces the count; run this agent
      // dry to get the per-stage list for the debiasing content sprint.
      const frac = lenTell / qs.length;
      if (frac >= 0.7) c.add("low", s.id, ep, "quiz-length-bias", "", "");
    }
  }

  // One rollup card for the systemic quiz-quality work (instead of ~768 cards).
  const lenBias = c.low["quiz-length-bias"] ?? 0;
  const thinPool = c.low["quiz-pool-under-10"] ?? 0;
  if (lenBias > 20 || thinPool > 20) {
    c.add("medium", "quiz-quality", "", "quiz-quality-sprint",
      `Quiz-quality sprint: ${lenBias} stages with the answer-length tell · ${thinPool} pools under 10 questions`,
      `Two systemic quiz issues across the catalog: (1) in ${lenBias} stages the correct option is the single longest one in ≥70% of questions — a "pick the wordiest answer" tell; (2) ${thinPool} stages have a question pool under 10, so a 10-question attempt repeats. Fix is a content sprint, epoch by epoch: even out option lengths (lengthen distractors / tighten the correct answer) and author enough questions for a pool of ≥10. Run \`node apps/web/scripts/content-agent.mjs\` (dry) for the per-stage list.`);
  }

  await report({ agent: "content", icon: "📝", label: "Content Integrity", findings: c.findings, low: c.low, scope: { stages: stages.length } });
} finally {
  cleanup();
}
