#!/usr/bin/env node
// Image Integrity Agent — keeps STAGE_IMAGES honest against the files on disk and
// tracks cover coverage. A STAGE_IMAGES entry pointing at a missing file silently
// degrades to the placeholder; oversized images bloat the page. Report-only.
//   Dry run:  node scripts/image-agent.mjs
//   Report:   AGENT_REPORT_URL=… AGENT_REPORT_TOKEN=… node scripts/image-agent.mjs --report
import { loadStages, makeCollector, report, readFileSync, ROOT } from "./_agent-lib.mjs";
import { resolve, join } from "node:path";
import { readdirSync, statSync } from "node:fs";

const read = (p) => { try { return readFileSync(resolve(ROOT, p), "utf8"); } catch { return ""; } };
const { stages, cleanup } = loadStages("image_agent");
const c = makeCollector();

try {
  const si = read("apps/web/src/lib/stage-images.ts");
  const refs = [...si.matchAll(/"([a-z0-9-]+)":\s*"(\/img\/[^"]+)"/g)].map((m) => ({ id: m[1], path: m[2], file: m[2].replace("/img/", "") }));
  const imgDir = resolve(ROOT, "apps/web/public/img");
  let files = [];
  try { files = readdirSync(imgDir); } catch { /* dir may not exist */ }
  const fileSet = new Set(files);

  // 1. Broken cover — STAGE_IMAGES maps a stage to a file that isn't on disk (high).
  for (const r of refs) {
    if (!fileSet.has(r.file)) {
      c.add("high", r.id, "", "broken-image", `${r.id}: image file missing (${r.path})`,
        `STAGE_IMAGES maps ${r.id} → ${r.path}, but apps/web/public/img/${r.file} doesn't exist, so the stage silently falls back to the placeholder. Fix: add the file (and credit it on /attribution) or remove the STAGE_IMAGES entry.`);
    }
  }

  // 2. Oversized images — perf budget (low, aggregated).
  const BIG = 900 * 1024;
  let big = 0;
  for (const f of files) {
    try { if (statSync(join(imgDir, f)).size > BIG) { big++; c.add("low", f, "", "oversized-image", "", ""); } } catch { /* skip */ }
  }
  if (big >= 10) {
    c.add("low", "img", "", "oversized-image-rollup", "", "");
  }

  // 3. Cover coverage stat — informational (how many stages still render the generated cover).
  const withImg = new Set(refs.map((r) => r.id));
  const onGenerated = stages.filter((s) => !withImg.has(s.id)).length;

  await report({
    agent: "image", icon: "🖼️", label: "Image Integrity",
    findings: c.findings, low: c.low,
    scope: { mapped: refs.length, files: files.length, "on-generated-cover": onGenerated },
  });
} finally {
  cleanup();
}
