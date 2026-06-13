// Prose de-bullet applier. Reads a JSON file of [find, replace] string pairs and
// applies each to a target source file — each `find` must match exactly once, or
// the script aborts without writing (so a stale/ambiguous match can't corrupt a
// file). Used to convert terse "\n- " bulleted overview paragraphs into narrative
// prose at scale without reading whole large stage files into the editor.
//
//   node scripts/_prose-apply.mjs <targetFile> <pairsJson>
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(process.cwd(), "../..");
const [, , target, pairsPath] = process.argv;
if (!target || !pairsPath) { console.error("usage: _prose-apply.mjs <targetFile> <pairsJson>"); process.exit(1); }

const file = resolve(ROOT, target);
let src = readFileSync(file, "utf8");
const pairs = JSON.parse(readFileSync(resolve(process.cwd(), pairsPath), "utf8"));

let applied = 0;
for (const [find, replace] of pairs) {
  const n = src.split(find).length - 1;
  if (n !== 1) { console.error(`✗ match count ${n} (expected 1) for:\n   ${find.slice(0, 90)}…`); process.exit(2); }
  src = src.replace(find, replace);
  applied++;
}
writeFileSync(file, src);
console.log(`✓ applied ${applied}/${pairs.length} replacements to ${target}`);
