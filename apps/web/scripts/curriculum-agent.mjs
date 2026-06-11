#!/usr/bin/env node
// Curriculum Structure Agent — deterministic checks on how the catalog is wired
// together. These are the "silent" structural bugs that pass the build but break
// the product: a hidden epoch, an unsolvable CTF, a terminal whose extra commands
// never resolve, a stale flag. Report-only.
//   Dry run:  node scripts/curriculum-agent.mjs
//   Report:   AGENT_REPORT_URL=… AGENT_REPORT_TOKEN=… node scripts/curriculum-agent.mjs --report
import { loadStages, makeCollector, report, readFileSync, ROOT } from "./_agent-lib.mjs";
import { resolve } from "node:path";

const read = (p) => { try { return readFileSync(resolve(ROOT, p), "utf8"); } catch { return ""; } };
const { stages, cleanup } = loadStages("curriculum_agent");
const c = makeCollector();

try {
  // Sets parsed from the source of truth for each wiring concern.
  const grouped = new Set(
    [...read("apps/web/src/app/stages/track-data.ts").matchAll(/epochIds:\s*\[([^\]]*)\]/g)]
      .flatMap((m) => [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1])),
  );
  const loaders = new Set(
    [...read("packages/core/src/stage-commands.ts").matchAll(/"([a-z0-9-]+)":\s*\[\s*\(\)\s*=>\s*import/g)].map((m) => m[1]),
  );
  const flagged = new Set(
    [...read("packages/core/src/stage-flags.ts").matchAll(/"([a-z0-9-]+)":\s*"FLAG\{/g)].map((m) => m[1]),
  );

  const epochIds = [...new Set(stages.map((s) => s.epochId))];
  const stageIds = new Set(stages.map((s) => s.id));

  // 1. Orphan epoch — content exists but it's in no track group → unreachable from /stages nav.
  const orphans = epochIds.filter((ep) => !grouped.has(ep));
  if (orphans.length) {
    c.add("medium", "track-data", "", "orphan-epoch",
      `${orphans.length} epoch(s) in no track group: ${orphans.slice(0, 12).join(", ")}${orphans.length > 12 ? "…" : ""}`,
      `These epochs have stages but aren't listed in any epochGroups/extendedGroups group in apps/web/src/app/stages/track-data.ts, so they never appear in the /stages navigation (reachable only by direct URL): ${orphans.join(", ")}. Fix: add each to the right group's epochIds, or confirm it's intentionally hidden.`);
  }

  // 2. CTF stage with no flag — the capture is impossible. Rolled up into one card
  //    (it tends to cluster by epoch) so the board isn't flooded.
  const noFlag = stages.filter((s) => s.challengeType === "ctf" && !flagged.has(s.id)).map((s) => s.id);
  if (noFlag.length) {
    c.add("high", "stage-flags", "", "ctf-missing-flag",
      `${noFlag.length} CTF stage(s) have no flag: ${noFlag.slice(0, 16).join(", ")}${noFlag.length > 16 ? "…" : ""}`,
      `These stages are challengeType "ctf" but have no entry in packages/core/src/stage-flags.ts, so /api/check-flag returns 404 for every submission — they can't be captured: ${noFlag.join(", ")}. Two valid fixes (human call per stage): (a) author "${noFlag[0]}": "FLAG{…}" entries (and make the CTF's files/steps assemble to each flag), or (b) if the stage is meant to be quiz-only, change its challengeType to "quiz". Run \`node apps/web/scripts/curriculum-agent.mjs\` (dry) for the full list.`);
  }

  // 3. Epoch with CTF extraCommands but no lazy loader — terminal commands silently don't resolve.
  const needsLoader = new Set(
    stages.filter((s) => s.ctf?.extraCommands && Object.keys(s.ctf.extraCommands).length).map((s) => s.epochId),
  );
  for (const ep of needsLoader) {
    if (!loaders.has(ep)) {
      c.add("high", ep, ep, "missing-loader", `Epoch "${ep}" has CTF extraCommands but no LOADERS entry`,
        `Stages in "${ep}" define ctf.extraCommands, but "${ep}" isn't in the LOADERS map in packages/core/src/stage-commands.ts, so those extra terminal commands silently fail to resolve at play time. Fix: add \`"${ep}": [() => import("./${ep}")],\` to LOADERS.`);
    }
  }

  // 4. Stale flag — a flag defined for a stage that no longer exists (low, aggregated).
  for (const fid of flagged) if (!stageIds.has(fid)) c.add("low", fid, "", "stale-flag", "", "");

  await report({ agent: "curriculum", icon: "🗂️", label: "Curriculum Structure", findings: c.findings, low: c.low, scope: { epochs: epochIds.length, stages: stages.length } });
} finally {
  cleanup();
}
