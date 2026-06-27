import type { ScenarioConfig } from "./types";

// "Read the Play" Decision-Trainer scenarios for the Second Base epoch.
// Each spot is a deterministic, fundamentals-based defensive decision — the
// correct line is the sound second-base play taught in that stage, never a
// coin-flip outcome. correctIndex and explanation are stripped server-side
// before reaching the client.
export const baseball10Scenarios: Record<string, ScenarioConfig> = {
  "baseball-10-01": {
    intro: "You're the second baseman — the keystone of the infield and the shortstop's partner. Before you take a ground ball, make sure you understand the job.",
    spots: [
      {
        id: "bb10-01-s1", label: "The Keystone",
        situation: "A new infielder asks why second base is nicknamed the 'keystone' and you and the shortstop are called the 'keystone combination.'",
        prompt: "What's the right answer?",
        options: [
          "Because second base sits at the center of the infield and the 2B + SS turn double plays and guard the middle together",
          "Because the bag is shaped like a keystone",
          "Because second basemen always bat second",
          "Because it's the easiest position to play",
        ],
        correctIndex: 0,
        explanation: "Second base is the keystone because it sits at the center of the infield, and the second baseman with the shortstop forms the combination that turns double plays and guards the middle — the pivot at the heart of the defense.",
      },
      {
        id: "bb10-01-s2", label: "Your Arm",
        situation: "A coach is choosing where to play two infielders — one has a cannon arm, the other has quick hands and great feet but an average arm.",
        prompt: "Why can the average-arm player still thrive at second base?",
        options: [
          "Because second base is close to first, so the throw is shorter and there's more time on most plays",
          "Because second basemen never have to throw",
          "Because the rules give second basemen extra time",
          "Because arm strength matters more at second than anywhere",
        ],
        correctIndex: 0,
        explanation: "Second base sits close to first, so the throw is much shorter than from short or third — more time on most plays. Quick hands and footwork can outweigh a big arm at second, though range and hands must still be excellent.",
      },
      {
        id: "bb10-01-s3", label: "The Partnership",
        situation: "Before every pitch you and the shortstop flash signs to each other behind your gloves.",
        prompt: "What are you most likely deciding?",
        options: [
          "Who covers second on a steal, who takes a relay, and how to position for this hitter",
          "What to order after the game",
          "Which of you bats first next inning",
          "Nothing — it's just a superstition",
        ],
        correctIndex: 0,
        explanation: "The keystone combination coordinates every pitch: who covers the bag on a steal (it varies by the batter's handedness), who takes a relay, and how to position. A miscommunication can leave second uncovered.",
      },
      {
        id: "bb10-01-s4", label: "Your Range",
        situation: "Across an inning you have to make plays both in the hole toward first and up the middle behind the bag.",
        prompt: "What does this tell you about a second baseman's range?",
        options: [
          "You must cover ground to both sides — into the hole and up the middle behind the bag",
          "You only ever move toward first base",
          "You only ever move up the middle",
          "Range doesn't matter once you have the shorter throw",
        ],
        correctIndex: 0,
        explanation: "The second baseman ranges to both sides — toward first into the hole and up the middle behind the bag (the deepest, hardest throws). Guarding the middle with the shortstop is core to the job.",
      },
    ],
  },

  "baseball-10-02": {
    intro: "Half of defense is being in the right spot before the ball is hit. Read each situation and set your depth and stance.",
    spots: [
      {
        id: "bb10-02-s1", label: "Double-Play Depth",
        situation: "Runner on first, one out. The defense wants to be able to turn two on a ground ball.",
        prompt: "How do you adjust your depth?",
        options: [
          "Move to double-play depth — a step or two in and toward second to reach the bag in time",
          "Play deeper than normal to get more range",
          "Stand right on top of second base",
          "Drift into shallow right field",
        ],
        correctIndex: 0,
        explanation: "With a runner on first and a DP in order, you play double-play depth — a step or two in and toward the bag — shortening the distance to second so you can take a feed and pivot, or feed the shortstop. It trades a little range for DP readiness.",
      },
      {
        id: "bb10-02-s2", label: "Infield In",
        situation: "Runner on third, one out, tie game in the eighth. A ground ball cannot be allowed to score the run.",
        prompt: "Where do you position?",
        options: [
          "Play shallow (infield in), accepting less range, so you can field a grounder and throw home",
          "Play deeper to cover more ground",
          "Retreat onto the outfield grass",
          "Stand on the second-base bag",
        ],
        correctIndex: 0,
        explanation: "When a single run must be cut down at the plate, the infield plays in. You move up shallow — sacrificing range — so you can field a grounder and throw home in time. It's a score-and-situation decision.",
      },
      {
        id: "bb10-02-s3", label: "The Ready Position",
        situation: "On the last pitch you were standing upright and flat-footed when a sharp grounder skipped past before you could react.",
        prompt: "What ready-position habit fixes this?",
        options: [
          "An athletic stance with weight forward and a creep/timing hop, landing loaded as the ball is hit",
          "Stand taller so you can see the ball better",
          "Keep your feet together to stay balanced",
          "Hold your glove behind your back until contact",
        ],
        correctIndex: 0,
        explanation: "A flat-footed fielder loses the first step. The fix is an athletic stance — feet wide, knees bent, weight forward, glove out front — plus a creep step timed so your feet land as the ball reaches the zone, leaving you loaded and moving.",
      },
      {
        id: "bb10-02-s4", label: "Know the Hitter",
        situation: "A pull-heavy left-handed slugger steps in. Batted-ball data says he hammers grounders toward the right side.",
        prompt: "What's the smart positioning move?",
        options: [
          "Shade toward the pull side, into his most likely landing spot, to turn would-be hits into outs",
          "Stay in your exact straight-up spot every batter",
          "Move up the middle, away from the pull side",
          "Positioning is guesswork — just react after contact",
        ],
        correctIndex: 0,
        explanation: "Hitters have strong, predictable tendencies. Shading toward a pull-heavy lefty's pull side puts you in the most likely landing spot, converting hard grounders into outs with no extra range. Being in the right spot is a skill in itself.",
      },
    ],
  },

  "baseball-10-03": {
    intro: "Footwork comes before the glove. Get to the ball, get around it, and field from a base you can throw from.",
    spots: [
      {
        id: "bb10-03-s1", label: "Glove Down",
        situation: "You keep fielding grounders fairly upright with the glove at hip height, and balls are skipping under your glove.",
        prompt: "What's the fielding fix?",
        options: [
          "Get low with the glove down, fingers at the ground, fielding the ball out in front",
          "Field at hip height but react faster",
          "Turn the glove up like a basket and wait",
          "Let the ball slow down before you try to field it",
        ],
        correctIndex: 0,
        explanation: "Balls skip under a high glove. Get low, put the glove on the ground with fingers down, and field out in front — a short hop then deflects up into the glove or your body instead of underneath. A core infield fundamental.",
      },
      {
        id: "bb10-03-s2", label: "Round It Off",
        situation: "There's time on a routine grounder. Your coach tells you not to charge straight in and field flat-footed.",
        prompt: "Why round off your route to the ball?",
        options: [
          "So you field it moving toward the target and your momentum carries into the throw",
          "Because a curved path simply looks better",
          "Because it's slower, giving the runner less time",
          "Routes don't matter from second base",
        ],
        correctIndex: 0,
        explanation: "When there's time, round off the route so you field the ball moving toward first. Your momentum flows into the throw instead of forcing you to stop, gather, and reset — making the field-and-throw one fluid, faster motion.",
      },
      {
        id: "bb10-03-s3", label: "Up the Middle",
        situation: "A grounder is hit behind the second-base bag, forcing you to range far to your right and field it on the run, moving away from first.",
        prompt: "What makes the throw to first hard here?",
        options: [
          "You're moving away from first, so you must plant and throw across your body or flip from an unbalanced position",
          "There's no throw to make on this ball",
          "The throw is shorter than normal so it's easy",
          "The ball is an automatic out either way",
        ],
        correctIndex: 0,
        explanation: "Ranging up the middle behind the bag carries you away from first. You must plant and throw across your body, flip, or make an off-balance throw — among the hardest plays at the position, and where real range is built.",
      },
      {
        id: "bb10-03-s4", label: "The Grip",
        situation: "You field cleanly but grab the ball with a random grip, and your throw tails and sinks, pulling the first baseman off the bag.",
        prompt: "What makes the throw truer?",
        options: [
          "Find a four-seam grip at the center of your body during the transfer for a straight, true throw",
          "Just throw harder regardless of grip",
          "Switch to throwing sidearm every time",
          "Grip has no effect on a thrown ball",
        ],
        correctIndex: 0,
        explanation: "A four-seam grip — fingers across the seams — gives pure backspin and a straight throw; a random grip makes the ball tail and sink. Bring the ball to a four-seam grip at the center of the chest in the transfer for accuracy.",
      },
    ],
  },

  "baseball-10-04": {
    intro: "The pivot is your signature play. Turn two cleanly, get the throw off, and protect yourself from the slide.",
    spots: [
      {
        id: "bb10-04-s1", label: "Score the Play",
        situation: "The shortstop fields a grounder and flips to you at second. You touch the bag for the force and throw to first to complete the double play.",
        prompt: "What is this double play called in scorekeeping?",
        options: [
          "A 4-6-3 double play",
          "A 6-4-3 double play — shortstop (6) to second baseman (4) to first baseman (3)",
          "A 5-4-3 double play",
          "A 3-6-1 double play",
        ],
        correctIndex: 1,
        explanation: "Shortstop (6) to second baseman (4) to first base (3) is a 6-4-3 — the most common double play. You're the pivot man: receive the feed, touch second for the force, relay to first. A 4-6-3 is the reverse.",
      },
      {
        id: "bb10-04-s2", label: "Cross the Bag",
        situation: "You take the feed with a runner bearing down and want to both clear the slide and throw from a strong, balanced base.",
        prompt: "What does the common 'cross the bag' pivot accomplish?",
        options: [
          "It blocks the runner from reaching the base",
          "Stepping across the bag toward the outfield side tags the bag, builds momentum toward first, and carries you off the sliding runner",
          "It lets you throw home instead of to first",
          "It has no effect on the runner or the throw",
        ],
        correctIndex: 1,
        explanation: "The bread-and-butter pivot: catch the feed while stepping across the bag toward the outfield side. It records the force, puts you in a strong throwing position with momentum toward first, and naturally clears you from the slide — all in one motion.",
      },
      {
        id: "bb10-04-s3", label: "Quick Release",
        situation: "You tend to hold the ball a beat too long, and aggressive runners reach the bag just as you're about to throw.",
        prompt: "Why is a quick release both more effective and safer?",
        options: [
          "It isn't — holding the ball longer is better",
          "It only changes accuracy, not safety",
          "Getting rid of the ball fast completes the DP before the runner arrives and reduces contact from the slide",
          "A slow release intimidates the runner into stopping",
        ],
        correctIndex: 2,
        explanation: "A fast release beats the runner to complete the double play and gets the ball out of your hands before contact — better and safer. Holding the ball lets the runner reach the bag as you throw, hurting both the play and you.",
      },
      {
        id: "bb10-04-s4", label: "The Slide Rule",
        situation: "Instead of sliding into the bag, a runner veers well out of the baseline to barrel into you and break up the double play.",
        prompt: "What does the modern (2016) slide rule require?",
        options: [
          "Runners must make a bona fide slide directly into the bag and may not go out of their way to take you out",
          "Runners can do whatever it takes to break up the DP",
          "Runners may never slide into second base at all",
          "The rule only applies in the playoffs",
        ],
        correctIndex: 0,
        explanation: "The 2016 slide rule requires a genuine slide directly into the bag (reachable with a hand or foot) and bans veering out of the baseline to take out the fielder; an illegal slide is an automatic double play. Contact still happens, so you protect yourself with footwork and a quick release.",
      },
    ],
  },

  "baseball-10-05": {
    intro: "When the ball comes to you near the bag, you're the feeder. Give the shortstop a ball he can turn.",
    spots: [
      {
        id: "bb10-05-s1", label: "Right at the Bag",
        situation: "You field a grounder right next to second with a runner bearing down and must feed the shortstop to start the double play.",
        prompt: "What feed is best from right at the bag?",
        options: [
          "A hard overhand throw as fast as you can",
          "A soft underhand toss with a stiff wrist, showing the ball, following the toss a step toward the bag",
          "A bounce throw into the dirt",
          "A blind behind-the-back flip",
        ],
        correctIndex: 1,
        explanation: "From right at the bag the most accurate feed is a soft underhand toss with a firm wrist, ball shown to the shortstop, following it a step so it doesn't sail. A hard throw from that close is tough to handle and can sail.",
      },
      {
        id: "bb10-05-s2", label: "Placement",
        situation: "Your last feed arrived behind the bag on the infield side, pulling the shortstop across the base directly into the sliding runner.",
        prompt: "Where should the feed go?",
        options: [
          "Chest-high and slightly to the outfield side, leading him to the bag without pulling him into the runner",
          "Behind the bag on the infield side",
          "Low and in the dirt so he has to dig it out",
          "It doesn't matter where the feed goes",
        ],
        correctIndex: 0,
        explanation: "A good feed is chest-high, slightly to the outfield side, leading the shortstop to the base so he catches, pivots, and throws while moving away from the runner. An infield-side feed drags him into the slide — slow and dangerous.",
      },
      {
        id: "bb10-05-s3", label: "Take Something Off",
        situation: "You fire every feed as hard as you can, and the shortstop keeps bobbling or fighting them, ruining double plays.",
        prompt: "Why take velocity off the feed?",
        options: [
          "A faster feed is always better",
          "A catchable, turnable feed lets him handle it in one motion; too-hard feeds get bobbled even when accurate",
          "A soft feed lets the runner reach first",
          "Velocity has no effect on the shortstop",
        ],
        correctIndex: 1,
        explanation: "The feed's job is a ball the shortstop can turn in one motion. Too hard — even if accurate — gets bobbled or fought, killing the DP. Take something off so it's soft and catchable. 'Catchable' beats 'fast' every time.",
      },
      {
        id: "bb10-05-s4", label: "Pick the Feed",
        situation: "You field a ball a few steps to the second-base side of the bag — not right on top of it, but close.",
        prompt: "What feed fits this short distance?",
        options: [
          "A long overhand throw with full velocity",
          "A backhand flip from the glove side — quick and natural for a few steps away",
          "A high lob over the runner's head",
          "No feed — run and tag the bag yourself",
        ],
        correctIndex: 1,
        explanation: "Choose the feed by distance: underhand toss right at the bag, a quick backhand flip from the glove side a few steps away, and a firmer four-seam throw (with something off it) from deeper in the hole.",
      },
    ],
  },

  "baseball-10-06": {
    intro: "Second base is a quickness position. Train the body that ranges to both sides and throws from anywhere.",
    spots: [
      {
        id: "bb10-06-s1", label: "What to Build",
        situation: "Two prospects want to play second — one is big, strong, and slow; the other is smaller, quicker, and agile.",
        prompt: "Which traits matter most at second base?",
        options: [
          "Raw size and upper-body power above all",
          "Lateral quickness, first-step explosiveness, and agility over size and raw power",
          "Only a powerful throwing arm",
          "Height, to see over the infield",
        ],
        correctIndex: 1,
        explanation: "Second base rewards quickness and agility over size — lateral quickness for range to both sides, an explosive first step, and footwork agility. A smaller, quicker, more agile player often beats a bigger, slower one here.",
      },
      {
        id: "bb10-06-s2", label: "The Core",
        situation: "You constantly throw across your body and from off-balance angles, and your throws lose accuracy when you're unbalanced.",
        prompt: "What physical quality most helps off-balance throws?",
        options: [
          "Core and rotational strength to throw accurately from awkward positions and absorb contact",
          "Bigger biceps for arm strength",
          "Longer legs for a wider base",
          "Flexible wrists alone",
        ],
        correctIndex: 0,
        explanation: "Second basemen throw across the body and from awkward angles constantly, so a strong, stable core powers accurate off-balance throws and absorbs contact on the pivot. Core and rotational strength are central to the position.",
      },
      {
        id: "bb10-06-s3", label: "Single-Leg Work",
        situation: "You're designing a training plan to make plays on the move, planting and pivoting from unbalanced positions.",
        prompt: "Which focus translates most directly?",
        options: [
          "Long-distance jogging for endurance",
          "Max bench press for upper-body size",
          "Single-leg strength and balance, plus change-of-direction agility drills",
          "Grip-only forearm training",
        ],
        correctIndex: 2,
        explanation: "Single-leg strength and balance let you field and throw from unbalanced positions, plant, pivot, and clear runners. Paired with change-of-direction agility work (ladders, lateral bounds, reaction drills), it builds real range and footwork.",
      },
      {
        id: "bb10-06-s4", label: "Arm Care",
        situation: "Your throw to first is shorter than the shortstop's, but you make many throws from difficult angles all game.",
        prompt: "Why still prioritize arm care?",
        options: [
          "You don't — the short throw means the arm never needs care",
          "The many off-angle throws stress the arm, so rotator-cuff and scapular work protect it",
          "Arm care only matters for pitchers",
          "Throwing harder is the only thing that protects the arm",
        ],
        correctIndex: 1,
        explanation: "Even with a shorter throw to first, second basemen make many throws from awkward angles, so rotator-cuff and scapular strength protect the arm. Mobility (hips, ankles, thoracic spine) keeps fielding low and the throw free.",
      },
    ],
  },

  "baseball-10-07": {
    intro: "Stolen bases and bunts test the keystone partnership. Know who covers, make the tag, and read the play.",
    spots: [
      {
        id: "bb10-07-s1", label: "Who Covers",
        situation: "A right-handed batter is up with a runner threatening to steal second. You and the shortstop must decide coverage.",
        prompt: "Against a right-handed batter, who typically covers second on the steal?",
        options: [
          "The second baseman, because a righty tends to hit toward the left side, freeing the 2B to cover",
          "Nobody — the catcher covers second",
          "Always the shortstop, regardless of the batter",
          "The first baseman sprints over to cover",
        ],
        correctIndex: 0,
        explanation: "Coverage keys off the batter's handedness: against a right-handed hitter (who tends to hit to the left side), the second baseman usually covers second, leaving the shortstop to field the pull side. The pair signals this every pitch.",
      },
      {
        id: "bb10-07-s2", label: "The Tag",
        situation: "You cover on a steal. The catcher's throw beats the runner, and you receive it just ahead of his slide.",
        prompt: "What's the correct tag technique?",
        options: [
          "Catch the ball, drop a low tag in front of the bag, and let the sliding runner come into it",
          "Reach across the bag and swipe at his shoulders",
          "Catch the ball standing tall and wait to tag his chest",
          "Block the bag with your body before you have the ball",
        ],
        correctIndex: 0,
        explanation: "Receive the throw and apply a quick, low tag on the front edge of the bag, letting the runner slide into it — the fastest, surest tag. Catch first, then tag; a snap, low tag beats a high reach across the body.",
      },
      {
        id: "bb10-07-s3", label: "Cover on the Bunt",
        situation: "Runner on first, a sacrifice bunt is in order. The first baseman charges to field it, vacating first base.",
        prompt: "Where does the second baseman go?",
        options: [
          "Break to cover first base so there's a target for the throw on the bunt",
          "Stay put at double-play depth and watch",
          "Sprint to cover home plate",
          "Run to back up the catcher",
        ],
        correctIndex: 0,
        explanation: "On a bunt where the first baseman charges, the second baseman breaks to cover first base so the fielder has a target for the out. Bunt coverage is a coordinated rotation, and covering first is the second baseman's common bunt job.",
      },
      {
        id: "bb10-07-s4", label: "Read the Steal",
        situation: "You've committed to covering second, but the batter squares to bunt at the last instant instead of the runner stealing.",
        prompt: "What does this teach about pre-pitch communication?",
        options: [
          "Coverage signals must be set before the pitch so the bag is never accidentally left open",
          "You should never decide coverage in advance",
          "The shortstop alone makes every call after the pitch",
          "Communication only matters with two outs",
        ],
        correctIndex: 0,
        explanation: "The keystone pair must signal coverage before each pitch so the bag is never left open and both players know their jobs on a steal, bunt, or ball in play. A missed signal can leave second uncovered at the worst moment.",
      },
    ],
  },

  "baseball-10-08": {
    intro: "On balls to the outfield you become the link. Line up the relay, take the cutoff, and back up the bag.",
    spots: [
      {
        id: "bb10-08-s1", label: "The Relay",
        situation: "A ball is laced into the right-center gap. The right fielder runs it down deep, and the hitter is digging for a triple.",
        prompt: "What's the second baseman's job?",
        options: [
          "Run out toward the outfielder as the relay man, line up between him and the target base, and catch-and-throw quickly",
          "Stay at second and wait for the outfielder's long throw",
          "Cover home plate immediately",
          "Run into the outfield and field the ball yourself",
        ],
        correctIndex: 0,
        explanation: "On balls to the right side and right-center, the second baseman is the relay man: sprint toward the outfielder, line up between him and the target base, and take the throw to relay it in quickly — shortening one long throw into two accurate ones.",
      },
      {
        id: "bb10-08-s2", label: "Give a Target",
        situation: "You're the relay man with your back partly to the outfielder, who is about to throw to you from deep in the gap.",
        prompt: "How do you help him deliver an accurate throw?",
        options: [
          "Turn, face him, and raise your hands high as a clear target while lined up with the base",
          "Stand still with your hands down and let him aim",
          "Keep your back to him so you can watch the runner",
          "Crouch low and hide so the runner can't see you",
        ],
        correctIndex: 0,
        explanation: "The relay man turns to face the outfielder and raises his hands high as a target, lined up between the outfielder and the base. A clear, high target gives the outfielder something to throw to and speeds the catch-and-relay.",
      },
      {
        id: "bb10-08-s3", label: "Catch It Right",
        situation: "The outfielder's relay throw is coming in. You want to spin and fire to third or home in one motion.",
        prompt: "How should you set up to receive the relay?",
        options: [
          "Position with your glove side toward the target so you can catch, turn, and throw in one motion",
          "Catch it flat-footed facing the outfield, then turn around",
          "Catch it on your throwing-arm side so you have to reset",
          "Let it bounce to you to save your arm",
        ],
        correctIndex: 0,
        explanation: "Set up so the throw comes to your glove side, letting you catch, pivot, and throw to the base in one fluid motion. Receiving it on the wrong side forces an extra turn and costs the runner-catching time.",
      },
      {
        id: "bb10-08-s4", label: "Back Up",
        situation: "A single is hit to left field with a runner on first, and the throw is going to third base — a play you have no part in.",
        prompt: "What should the second baseman still do?",
        options: [
          "Drift over to back up a base or the throw in case of an overthrow",
          "Stand and watch the play unfold",
          "Leave the field area to rest for the next pitch",
          "Run to argue position with the umpire",
        ],
        correctIndex: 0,
        explanation: "Even when not the primary fielder, the second baseman backs up bases and throws so an overthrow doesn't let runners advance. Backing up is a quiet, constant responsibility that prevents extra bases.",
      },
    ],
  },

  "baseball-10-09": {
    intro: "The best second basemen think before the pitch. Know the outs, the runners, and exactly what you'll do with the ball.",
    spots: [
      {
        id: "bb10-09-s1", label: "DP or Sure Out",
        situation: "Runner on first, two outs, and a slow grounder is hit to you deep in the hole — turning two would be very tight.",
        prompt: "What's the right decision?",
        options: [
          "Take the sure out at first; with two outs you don't need the double play",
          "Force the risky flip to second every time",
          "Hold the ball and run at the runner",
          "Throw home to be safe",
        ],
        correctIndex: 0,
        explanation: "With two outs, any out ends the inning, so take the sure out — usually the throw to first. Forcing a tight double play risks getting nobody. Knowing when the DP isn't needed is core situational IQ.",
      },
      {
        id: "bb10-09-s2", label: "Know the Play",
        situation: "Bases loaded, one out, and a sharp grounder comes right to you at double-play depth.",
        prompt: "What's the cleanest double play here?",
        options: [
          "Step on second yourself for the force, then throw to first to complete the 4-3 double play",
          "Throw home, then have the catcher throw to first",
          "Run the ball to first and hope for one out",
          "Flip to the shortstop running away from the bag",
        ],
        correctIndex: 0,
        explanation: "With bases loaded and the ball to you near the bag, the quickest two is to step on second for the force yourself, then throw to first (a 4-3 double play). You must already know this is the play before the ball is hit.",
      },
      {
        id: "bb10-09-s3", label: "Lead Runner",
        situation: "Runners on first and second, nobody out, and a slow chopper is hit to you. The lead runner is well off the bag.",
        prompt: "What read keeps you out of trouble?",
        options: [
          "Take the available out you can clearly get rather than forcing a hopeless throw to third",
          "Always throw to third no matter what",
          "Hold the ball until everyone stops running",
          "Throw to the outfield to reset the play",
        ],
        correctIndex: 0,
        explanation: "On a slow chopper you may not have a play on the lead runner; forcing it can let everyone reach safely. The thinking second baseman takes the out he can clearly get. Pre-pitch, you should know which outs are realistic.",
      },
      {
        id: "bb10-09-s4", label: "Pre-Pitch Plan",
        situation: "Before the pitch you glance at the scoreboard, the runners, and the count, then set your feet.",
        prompt: "Why run through this every single pitch?",
        options: [
          "So you already know what you'll do with the ball before it's hit, and never have to decide in a rush",
          "It's a superstition with no real value",
          "Only the shortstop needs to think pre-pitch",
          "Thinking slows your reactions down",
        ],
        correctIndex: 0,
        explanation: "Great defenders decide their play before the pitch — outs, runners, depth, and where the ball goes if it's hit to them. Pre-pitch thinking turns split-second plays into executed plans instead of panicked guesses.",
      },
    ],
  },

  "baseball-10-10": {
    intro: "Bring it together — what the greats teach about playing the keystone, and the mindset that makes a complete second baseman.",
    spots: [
      {
        id: "bb10-10-s1", label: "The Exemplar",
        situation: "You study a Hall of Famer who redefined second base for the Brooklyn Dodgers with athleticism, intelligence, and daring.",
        prompt: "Who is this model of the complete second baseman?",
        options: [
          "Jackie Robinson",
          "A pitcher who never played the infield",
          "A power-hitting first baseman",
          "A pure home-run slugger with no glove",
        ],
        correctIndex: 0,
        explanation: "Jackie Robinson broke the color barrier in 1947 and built a Hall of Fame career largely at second — Rookie of the Year, 1949 NL MVP, 1955 champion — a model of skill, footwork, instinct, and feel over raw tools.",
      },
      {
        id: "bb10-10-s2", label: "What Wins",
        situation: "A young player thinks the best second basemen are simply the ones with the strongest arms and biggest highlight dives.",
        prompt: "What actually defines a great second baseman?",
        options: [
          "Quick hands, footwork, instinct, communication, and consistency — not the biggest arm",
          "Only the most spectacular diving plays",
          "The loudest, most aggressive personality",
          "Pure foot speed alone",
        ],
        correctIndex: 0,
        explanation: "The position rewards quick, soft hands, efficient footwork, instinct, and constant communication far more than raw tools. The complete second baseman is the smartest and most reliable, not the flashiest.",
      },
      {
        id: "bb10-10-s3", label: "The Unselfish Skill",
        situation: "You make a perfect feed that lets the shortstop turn an easy double play, but you get no highlight or individual credit for it.",
        prompt: "What does this reveal about the position?",
        options: [
          "Some of the most valuable defensive skills are quiet and unselfish — judged by how easy they make your partner's job",
          "If a play earns no highlight, it has no value",
          "You should only make plays that get you credit",
          "Feeds are unimportant compared to your own range",
        ],
        correctIndex: 0,
        explanation: "A perfect feed makes the shortstop's pivot effortless yet earns no glory. The keystone combination is built on unselfish skills — the quiet, partner-first plays that turn routine outs and win games.",
      },
      {
        id: "bb10-10-s4", label: "The Mindset",
        situation: "You want to actually master second base, not just play it.",
        prompt: "What's the path the greats teach?",
        options: [
          "Endless repetition of footwork from every angle, pre-pitch thinking, and pride in the fundamentals",
          "Wait for natural talent to carry you",
          "Skip practice and focus only on game highlights",
          "Master one play and ignore the rest of the position",
        ],
        correctIndex: 0,
        explanation: "Mastery comes from repeating footwork from every angle, thinking before each pitch, communicating with your shortstop, and taking pride in fundamentals. The complete second baseman is quick, agile, smart, and relentlessly prepared.",
      },
    ],
  },
};
