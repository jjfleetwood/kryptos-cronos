#!/usr/bin/env node
// CTF integrity validator. Transpiles @kryptos/core and inspects every
// challengeType:"ctf" stage's config for reachability bugs:
//   - fragment file-triggers ("/x") that aren't in `files` (cat can't reach)
//   - fragment command-triggers whose verb has no handler (builtin/extraCommand)
//   - "cat <file>" fragment-triggers where the file is neither a real file
//     nor served by a custom extraCommands.cat (the M03-class bug)
//   - extraCommands that collide with a builtin name (would be shadowed)
//   - pivotTrigger with no handler
//   - assembled fragment values that don't form a FLAG{...}
//
// Run from apps/web:  node scripts/validate-ctf.mjs
// Exits non-zero if any problem is found.

import { execSync } from "node:child_process";
import { createRequire } from "node:module";
import { rmSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(process.cwd(), "../..");
const OUT = resolve(ROOT, ".tmp_validate_ctf");
const require = createRequire(import.meta.url);

// Builtin terminal commands implemented in CtfChallenge.tsx / CtfTerminal.tsx.
const BUILTINS = ["help", "assemble", "pwd", "clear", "cd", "ls", "cat", "submit"];

function fileMatch(files, arg) {
  if (!arg) return false;
  return (
    files.has(arg) ||
    files.has("/" + arg) ||
    [...files].some((p) => p.endsWith("/" + arg))
  );
}

try {
  execSync(
    `npx tsc -p packages/core/tsconfig.json --outDir "${OUT}" --module commonjs --moduleResolution node --noEmit false --declaration false --skipLibCheck`,
    { cwd: ROOT, stdio: "inherit" }
  );

  const { stages } = require(resolve(OUT, "stages.js"));
  const ctfs = stages.filter((s) => s.challengeType === "ctf" && s.ctf);
  const problems = [];

  for (const s of ctfs) {
    const c = s.ctf;
    const files = new Set(Object.keys(c.files || {}));
    const extra = new Set(Object.keys(c.extraCommands || {}));
    const frags = c.fragments || [];

    for (const e of extra) {
      // `cat` is allowed to override (engine falls through to it on a miss).
      if (BUILTINS.includes(e) && e !== "cat")
        problems.push(`${s.id}: extraCommand '${e}' is shadowed by a builtin (won't run)`);
    }

    for (const f of frags) {
      const trig = f.trigger;
      if (trig.startsWith("/")) {
        if (!files.has(trig))
          problems.push(`${s.id}: fragment file-trigger '${trig}' not in files (cat can't reach it)`);
      } else {
        const [verb, arg] = trig.split(/\s+/);
        if (verb === "cat") {
          if (!fileMatch(files, arg) && !extra.has("cat"))
            problems.push(`${s.id}: fragment 'cat ${arg}' — not a real file and no extraCommands.cat (M03-class)`);
        } else if (!extra.has(verb) && !BUILTINS.includes(verb)) {
          problems.push(`${s.id}: fragment cmd-trigger '${trig}' has no handler`);
        }
      }
    }

    if (frags.length) {
      const assembled = frags.map((f) => f.value).join("");
      if (!(assembled.includes("FLAG{") && assembled.trim().endsWith("}")))
        problems.push(`${s.id}: assembled fragments not a FLAG{...}: '${assembled}'`);
    }

    if (c.pivotTrigger) {
      const verb = c.pivotTrigger.split(/\s+/)[0];
      if (!extra.has(verb) && !BUILTINS.includes(verb))
        problems.push(`${s.id}: pivotTrigger '${c.pivotTrigger}' has no handler`);
    }
  }

  console.log(`Validated ${ctfs.length} CTF stages.`);
  if (problems.length) {
    console.log(`\n${problems.length} PROBLEM(S):`);
    problems.forEach((p) => console.log("  - " + p));
    process.exitCode = 1;
  } else {
    console.log("No problems found. ✅");
  }
} finally {
  rmSync(OUT, { recursive: true, force: true });
}
