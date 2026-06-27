import type { ScenarioConfig } from "./types";
import { POKER_SCENARIOS } from "./poker-scenarios";
import { cribbage1Scenarios } from "./cribbage-1-scenarios";
import { hearts1Scenarios } from "./hearts-1-scenarios";
import { spades1Scenarios } from "./spades-1-scenarios";
import { euchre1Scenarios } from "./euchre-1-scenarios";
import { bridge1Scenarios } from "./bridge-1-scenarios";

// All "play the hand" Decision-Trainer scenarios across the Card Games track,
// attached to their stages by a load loop in stages.ts.
export const CARD_GAME_SCENARIOS: Record<string, ScenarioConfig> = {
  ...POKER_SCENARIOS,
  ...cribbage1Scenarios,
  ...hearts1Scenarios,
  ...spades1Scenarios,
  ...euchre1Scenarios,
  ...bridge1Scenarios,
};
