import type { CtfCommand } from "./types";

// CTF terminals can define per-stage `extraCommands` (functions) inline in their
// stage's ctf config. Those functions can't cross the server→client prop boundary,
// so the client terminal must import them. To avoid dragging the entire ~10 MB
// content barrel into the play page, we lazily dynamic-import ONLY the epoch
// file(s) that actually carry extraCommands, on demand. Epochs with no
// extraCommands resolve to `undefined` without loading anything.
//
// Keyed by epochId (the caller passes stage.epochId, so we need neither the
// stages barrel nor stages-meta here). Each loader pulls a single ~150 KB epoch
// chunk. NOTE: `ancient` + `cisco-core` stages still live inline in the heavy
// stages.ts barrel, so those two lazily load it — still off the page first-load.
// TODO: extract ancient/cisco-core into their own epoch files to drop that too.
const LOADERS: Record<string, Array<() => Promise<unknown>>> = {
  "ai-ml-foundations": [() => import("./ai-ml-foundations")],
  "sec-foundations": [() => import("./sec-foundations")],
  "computing-foundations": [() => import("./computing-foundations")],
  "first-journey": [() => import("./first-journey"), () => import("./first-journey-2"), () => import("./first-journey-3")],
  "cisco-enterprise": [() => import("./cisco-2")],
  "cisco-secops": [() => import("./cisco-3"), () => import("./cisco-4")],
  "cisco-advanced": [() => import("./cisco-5")],
  "emerging-tech": [() => import("./emerging-tech")],
  "ot-sec": [() => import("./ot-sec")],
  "physics-of-hacking": [() => import("./physics-of-hacking")],
  "quantum-1": [() => import("./quantum-1")],
  "quantum-2": [() => import("./quantum-2")],
  "quantum-3": [() => import("./quantum-3")],
  "quantum-4": [() => import("./quantum-4")],
  "quantum-5": [() => import("./quantum-5")],
  "robot-sec": [() => import("./robot-sec")],
  "robot-sec-2": [() => import("./robot-sec-2")],
  "space-race": [() => import("./space-race")],
  "space-race-2": [() => import("./space-race-2")],
  "tech-audit-2": [() => import("./tech-audit-2")],
  "threat-frameworks": [() => import("./threat-frameworks")],
  "umbrella": [() => import("./umbrella")],
  "vehicle-sec": [() => import("./vehicle-sec")],
  "vehicle-sec-2": [() => import("./vehicle-sec-2")],
  "ancient": [() => import("./stages")],
  "cisco-core": [() => import("./stages")],
};

type WithCtf = { id?: string; ctf?: { extraCommands?: Record<string, CtfCommand> } };
const cache = new Map<string, Record<string, CtfCommand> | undefined>();

/**
 * Resolve a stage's CTF terminal `extraCommands`, lazily loading only the epoch
 * chunk that contains them. Returns `undefined` (without loading) for stages
 * whose epoch defines no extra commands.
 */
export async function getExtraCommands(
  epochId: string,
  stageId: string
): Promise<Record<string, CtfCommand> | undefined> {
  if (cache.has(stageId)) return cache.get(stageId);
  const loaders = LOADERS[epochId];
  if (!loaders) {
    cache.set(stageId, undefined);
    return undefined;
  }
  for (const load of loaders) {
    const mod = (await load()) as Record<string, unknown>;
    for (const value of Object.values(mod)) {
      if (!Array.isArray(value)) continue;
      const stage = (value as WithCtf[]).find((s) => s && s.id === stageId);
      const cmds = stage?.ctf?.extraCommands;
      if (cmds) {
        cache.set(stageId, cmds);
        return cmds;
      }
    }
  }
  cache.set(stageId, undefined);
  return undefined;
}
