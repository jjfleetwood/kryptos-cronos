import type { CtfConfig } from "./types";

/**
 * Shared factory for deep, step-by-step technical CTF labs (the CTF-expansion
 * sprint — see CTF_EXPANSION.md). Each lab is THREE steps — recon → exploit →
 * extract/verify — where every step is an `extraCommand` that prints realistic
 * terminal output and reveals one flag fragment. A `briefing.txt` plus optional
 * readable artifact files (csv/json/yaml/log) add technical texture.
 *
 * The four fragments (briefing + 3 steps) must concatenate to the stage's
 * `FLAG{...}`, which is mirrored in stage-flags.ts and checked by
 * scripts/validate-ctf.mjs. Pure config — client-safe, no deps.
 */
export type DeepStep = [verb: string, frag: string, label: string, lines: string[]];

export function mkDeepCtf(
  scenario: string,
  brief: string,
  /** Opening fragment — begins the flag, e.g. "FLAG{PR3F1X_". */
  open: string,
  openLabel: string,
  s1: DeepStep,
  s2: DeepStep,
  s3: DeepStep,
  hints: string[],
  extraFiles: Record<string, string> = {},
): CtfConfig {
  const files: Record<string, string> = { "/briefing.txt": brief };
  for (const [k, v] of Object.entries(extraFiles)) files[k.startsWith("/") ? k : "/" + k] = v;
  return {
    scenario,
    hint: hints[0],
    hints,
    fragments: [
      { trigger: "/briefing.txt", value: open, label: openLabel },
      { trigger: s1[0], value: s1[1], label: s1[2] },
      { trigger: s2[0], value: s2[1], label: s2[2] },
      { trigger: s3[0], value: s3[1], label: s3[2] },
    ],
    files,
    dirs: { "/": Object.keys(files).map((p) => ({ name: p.replace(/^\//, ""), isDir: false })) },
    extraCommands: {
      [s1[0]]: () => ({ lines: s1[3] }),
      [s2[0]]: () => ({ lines: s2[3] }),
      [s3[0]]: () => ({ lines: s3[3] }),
    },
  };
}
