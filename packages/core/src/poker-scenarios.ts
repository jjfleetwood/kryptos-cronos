import type { ScenarioConfig } from "./types";
import { poker1Scenarios } from "./poker-1-scenarios";
import { poker2Scenarios } from "./poker-2-scenarios";
import { poker3Scenarios } from "./poker-3-scenarios";

// Merged "play the hand" Decision-Trainer scenarios for all poker stages, attached
// to their stages by a load loop in stages.ts.
export const POKER_SCENARIOS: Record<string, ScenarioConfig> = {
  ...poker1Scenarios,
  ...poker2Scenarios,
  ...poker3Scenarios,
};
