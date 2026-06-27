import type { ScenarioConfig } from "./types";
import { CARD_GAME_SCENARIOS } from "./card-scenarios";
import { flagFootball1Scenarios } from "./flag-football-1-scenarios";
import { flagFootball2Scenarios } from "./flag-football-2-scenarios";
import { flagFootball3Scenarios } from "./flag-football-3-scenarios";
import { driving1Scenarios } from "./driving-1-scenarios";
import { driving2Scenarios } from "./driving-2-scenarios";
import { driving3Scenarios } from "./driving-3-scenarios";
import { debate1Scenarios } from "./debate-1-scenarios";
import { debate2Scenarios } from "./debate-2-scenarios";
import { debate3Scenarios } from "./debate-3-scenarios";
import { debate4Scenarios } from "./debate-4-scenarios";
import { debate5Scenarios } from "./debate-5-scenarios";
import { debate6Scenarios } from "./debate-6-scenarios";
import { debate7Scenarios } from "./debate-7-scenarios";
import { debate8Scenarios } from "./debate-8-scenarios";
import { baseball1Scenarios } from "./baseball-1-scenarios";
import { baseball2Scenarios } from "./baseball-2-scenarios";
import { baseball3Scenarios } from "./baseball-3-scenarios";
import { baseball4Scenarios } from "./baseball-4-scenarios";
import { baseball5Scenarios } from "./baseball-5-scenarios";
import { baseball6Scenarios } from "./baseball-6-scenarios";
import { baseball7Scenarios } from "./baseball-7-scenarios";
import { baseball8Scenarios } from "./baseball-8-scenarios";
import { baseball9Scenarios } from "./baseball-9-scenarios";
import { baseball10Scenarios } from "./baseball-10-scenarios";
import { baseball11Scenarios } from "./baseball-11-scenarios";
import { baseball12Scenarios } from "./baseball-12-scenarios";
import { baseball13Scenarios } from "./baseball-13-scenarios";
import { baseball14Scenarios } from "./baseball-14-scenarios";
import { baseball15Scenarios } from "./baseball-15-scenarios";

// Every "play the hand / play the spot" Decision-Trainer scenario across the whole
// platform (card games + sports + driving + …), attached to stages by the load
// loop in stages.ts.
export const ALL_SCENARIOS: Record<string, ScenarioConfig> = {
  ...CARD_GAME_SCENARIOS,
  ...flagFootball1Scenarios,
  ...flagFootball2Scenarios,
  ...flagFootball3Scenarios,
  ...driving1Scenarios,
  ...driving2Scenarios,
  ...driving3Scenarios,
  ...debate1Scenarios,
  ...debate2Scenarios,
  ...debate3Scenarios,
  ...debate4Scenarios,
  ...debate5Scenarios,
  ...debate6Scenarios,
  ...debate7Scenarios,
  ...debate8Scenarios,
  ...baseball1Scenarios,
  ...baseball2Scenarios,
  ...baseball3Scenarios,
  ...baseball4Scenarios,
  ...baseball5Scenarios,
  ...baseball6Scenarios,
  ...baseball7Scenarios,
  ...baseball8Scenarios,
  ...baseball9Scenarios,
  ...baseball10Scenarios,
  ...baseball11Scenarios,
  ...baseball12Scenarios,
  ...baseball13Scenarios,
  ...baseball14Scenarios,
  ...baseball15Scenarios,
};
