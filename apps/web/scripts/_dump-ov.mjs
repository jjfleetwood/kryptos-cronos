import { loadStages } from "./_agent-lib.mjs";
const epoch = process.argv[2];
const { stages, cleanup } = loadStages("dumpov");
const terse = (p) => (p.match(/\n-\s/g) || []).length >= 2;
for (const s of stages.filter((s) => s.epochId === epoch)) {
  const ov = s.info?.overview || [];
  if (!ov.some(terse)) continue;
  console.log("\n===== " + s.id + " — " + (s.title||"") + " =====");
  ov.forEach((p, i) => console.log(`[p${i}]${terse(p) ? " «TERSE»" : ""} ` + p.replace(/\n/g, "\n")));
}
cleanup();
