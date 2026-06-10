import type { StageConfig, EpochConfig } from "./types";

export const baseball10Epoch: EpochConfig = {
  id: "baseball-10",
  name: "Second Base",
  subtitle: "The Pivot and the Keystone Partner",
  description:
    "Second base is the keystone of the middle infield — the pivot man on the double play and the shortstop's partner up the middle. This complete position course builds the second baseman from the ground up: positioning and range to both sides, fielding and footwork, turning the double play from the second-base side, feeding the shortstop, covering the bag on steals and bunts, serving as a relay and cutoff man, and the situational reads that make a keystone defender. From Little League to Jackie Robinson — the Brooklyn Dodgers' Hall of Famer who redefined the position with athleticism, intelligence, and daring — you will learn to turn two, guard the middle, and anchor the defense beside your shortstop.",
  emoji: "🔃",
  color: "blue",
  unlocked: true,
};

export const baseball10Stages: StageConfig[] = [
  // ─── baseball-10-01: The Keystone ─────────────────────────────────────────────
  {
    epochId: "baseball-10",
    wonder: {
      name: "Ebbets Field",
      location: "Brooklyn, New York",
      era: "Modern",
      emoji: "🔑",
    },
    id: "baseball-10-01",
    order: 1,
    title: "Second Base — The Keystone",
    subtitle: "The pivot man and the shortstop's partner",
    category: "sports",
    xp: 85,
    badge: { id: "baseball-10-badge-01", name: "Keystone", emoji: "🔑" },
    challengeType: "quiz",
    info: {
      tagline: "Second base is the keystone — the pivot of the double play and half of the partnership that guards the middle.",
      year: 1991,
      overview: [
        "Second base is called the keystone because it sits at the center of the infield and the second baseman, with the shortstop, forms the keystone combination that turns double plays and guards the middle of the field. The second baseman's defining responsibility is the pivot — receiving a feed at second base and relaying it to first to complete a double play, often while a runner is sliding into them. The position demands quick hands, nimble footwork around the bag, and fearlessness in the face of hard slides.",
        "The second baseman has one big advantage over the other middle infielder: a much shorter throw to first base. Because the position is close to first, the second baseman has more time on most plays and can field a ball cleanly and still make the throw. That shorter throw is one reason the position can be played by someone with a less powerful arm than a shortstop or third baseman, though range, hands, and footwork still must be excellent. The second baseman covers ground to both sides — into the hole toward first and up the middle behind the bag.",
        "Beyond fielding and the pivot, the second baseman:\n- Covers second base on steals and certain bunts.\n- Serves as a cutoff and relay man on balls hit to the right side and to right-center field.\n- Backs up bases.\nThe position is a partnership: the second baseman and shortstop must constantly communicate about who covers the bag, who takes a relay, and how to position. Together they are the heartbeat of the infield defense — and the second baseman is the pivot at the center of it.",
      ],
      technical: {
        title: "Why Second Base Is the Keystone",
        body: [
          "The shorter throw: second base sits close to first base, so the second baseman has more time on throws there than any other infielder. This allows a slightly less powerful arm than shortstop or third base, and it shapes the pivot — the second baseman often has time to set the feet before throwing to first on a double play.",
          "The partnership: the second baseman and shortstop split coverage of the middle and the second-base bag. They communicate before every pitch about who covers on a steal, who takes a relay, and how to position for the hitter. The double play — the most important defensive sequence in baseball — runs through this duo, with the second baseman as the pivot man on balls hit to the left side and the feeder on balls hit to the right side.",
        ],
        codeExample: {
          label: "Second Base — Core Responsibilities",
          code: `  THE SECOND BASEMAN'S JOBS:
  ✓ PIVOT the double play (receive feed → throw 1B)
  ✓ FEED the shortstop on balls he fields near 2B
  ✓ FIELD to both sides — the hole + up the middle
  ✓ COVER second on steals (situational w/ SS)
  ✓ RELAY / CUTOFF on right-side + right-center hits
  ✓ BACK UP bases; cover on bunts

  KEY ADVANTAGES / TRAITS:
  → SHORTER throw to first → more time than SS/3B
  → Quick hands + nimble footwork at the bag
  → Fearlessness on the pivot (runners slide in)
  → Constant communication with the SHORTSTOP

  The 2B + SS = the "keystone combination" that
  turns two and guards the middle.`,
        },
      },
      incident: {
        title: "Jackie Robinson — The Athlete Who Redefined Second Base",
        when: "1947–1956 — Brooklyn Dodgers",
        where: "Ebbets Field, Brooklyn, New York",
        impact: "Jackie Robinson broke baseball's color barrier in 1947 and built a Hall of Fame career largely at second base — Rookie of the Year, the 1949 NL MVP, a 1955 World Series champion, and one of the most intelligent, athletic, and daring players the game has ever known.",
        body: [
          "Jackie Robinson played second base with an athleticism and intelligence that set a new standard for the position. He turned the double play, ranged to both sides, and combined sure hands with electric, fearless baserunning and an instinct for where every play was going. After breaking the color barrier with the Brooklyn Dodgers in 1947, he anchored the middle of the infield on perennial pennant winners and the 1955 World Series champions.",
          "Robinson's brilliance came from fundamentals executed with rare athleticism and baseball intelligence: quick, soft hands; efficient footwork around the bag; daring on the bases; and an uncanny sense of the play. He is a model of the complete second baseman — not the biggest arm or the showiest, but the smartest, most competitive, and most impactful, who made the keystone a place of athletic artistry. Young players study him to learn that second base rewards skill, footwork, instinct, and feel above raw tools.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball Hit to the Infield", sub: "double play in play", type: "attacker" },
          { label: "Keystone Combination", sub: "2B + SS coordinate", type: "system" },
          { label: "Feed or Pivot at Second", sub: "the keystone bag", type: "victim" },
          { label: "Two Outs / Middle Guarded", sub: "the keystone delivers", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Second base established as the pivot of the double-play combination" },
        { year: 1920, event: "The 4-6-3 and 6-4-3 double plays become defensive staples" },
        { year: 1947, event: "Jackie Robinson breaks the color barrier with Brooklyn and redefines second-base play", highlight: true },
        { year: 2000, event: "Defensive metrics begin crediting second-base range and pivots" },
        { year: 2023, event: "Shift restrictions reshape second-base positioning and the keystone partnership" },
      ],
      keyTakeaways: [
        "Second base is the keystone — the pivot of the double play and half of the middle-infield partnership with the shortstop",
        "The second baseman has a shorter throw to first than any other infielder, giving more time on most plays",
        "Core jobs: pivot and feed double plays, field both sides, cover second on steals, relay, and back up",
        "The position rewards quick hands, nimble footwork, and constant communication with the shortstop",
      ],
      references: [
        { title: "Little League: Infield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Middle Infield Play", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Jackie Robinson", url: "https://baseballhall.org/hall-of-famers/robinson-jackie" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-10-01-q1",
          type: "Role",
          challenge: `  A coach explains that second base is called the
  "keystone" and the second baseman and shortstop
  form the "keystone combination."`,
          text: "Why is second base called the keystone position?",
          options: [
            "Because it's the easiest position to play",
            "Because it sits at the center of the infield, and the second baseman with the shortstop forms the combination that turns double plays and guards the middle",
            "Because the bag is shaped like a keystone",
            "Because second basemen bat in the middle of the order",
          ],
          correctIndex: 1,
          explanation: "Second base is the keystone because it sits at the center of the infield, and the second baseman together with the shortstop forms the keystone combination — the duo that turns double plays and guards the middle of the field. The pivot on the double play, the most important defensive sequence in baseball, runs through this partnership, with the second baseman at its center.",
        },
        {
          id: "baseball-10-01-q2",
          type: "Arm",
          challenge: `  A coach is deciding where to play two infielders.
  One has a cannon arm; the other has quick hands
  and great footwork but a more average arm.`,
          text: "Why can second base be played with a less powerful arm than shortstop or third base?",
          options: [
            "Second basemen never have to throw",
            "Second base sits close to first base, so the throw is shorter and the second baseman has more time on most plays",
            "The rules give second basemen extra time",
            "Second base requires no throwing accuracy",
          ],
          correctIndex: 1,
          explanation: "Second base is close to first base, so the throw there is much shorter than from shortstop or third — giving the second baseman more time on most plays. That's why a player with quick hands and excellent footwork but a more average arm can excel at second, while the longer throws from shortstop and third demand stronger arms. Range, hands, and footwork still must be excellent at second.",
        },
        {
          id: "baseball-10-01-q3",
          type: "Pivot",
          challenge: `  On a ground ball to the shortstop with a runner on
  first, the shortstop flips to second base. The
  second baseman receives it and must complete the
  double play.`,
          text: "What is the second baseman's defining responsibility in this sequence?",
          options: [
            "To tag the runner sliding into second",
            "The pivot — receive the feed at second, touch the bag for the force, and relay to first to complete the double play, often with a runner sliding in",
            "To run the ball to first base himself",
            "To throw home",
          ],
          correctIndex: 1,
          explanation: "The pivot is the second baseman's defining skill. On a double play started by the shortstop (a 6-4-3), the second baseman receives the feed at second base, touches the bag for the force out, and relays to first — frequently while a runner is sliding into him. It demands quick hands, nimble footwork at the bag, and fearlessness. Mastering the pivot is central to playing second base.",
        },
        {
          id: "baseball-10-01-q4",
          type: "Partnership",
          challenge: `  Before each pitch, the second baseman and
  shortstop quietly signal to each other behind
  their gloves.`,
          text: "What are the second baseman and shortstop most likely communicating about?",
          options: [
            "What to eat after the game",
            "Coverage responsibilities — who covers second base on a steal, who takes a relay, and how to position for the hitter",
            "The score of a different game",
            "Nothing important — it's just a habit",
          ],
          correctIndex: 1,
          explanation: "The second baseman and shortstop constantly communicate about coverage: who covers second base on a steal (which varies with the batter's handedness), who takes a relay throw, and how to position for the hitter and situation. This partnership is essential — a miscommunication can leave the bag uncovered on a steal. The keystone combination works because the two players coordinate every pitch.",
        },
      ],
    },
  },

  // ─── baseball-10-02: Positioning and Pre-Pitch Setup ──────────────────────────
  {
    epochId: "baseball-10",
    wonder: {
      name: "Progressive Field",
      location: "Cleveland, Ohio",
      era: "Modern",
      emoji: "📍",
    },
    id: "baseball-10-02",
    order: 2,
    title: "Positioning and the Ready Position",
    subtitle: "Depth, double-play depth, and the athletic setup",
    category: "sports",
    xp: 85,
    badge: { id: "baseball-10-badge-02", name: "Right Spot", emoji: "📍" },
    challengeType: "quiz",
    info: {
      tagline: "Half of fielding is being in the right place before the ball is hit — and getting into a ready position you can explode from.",
      year: 2005,
      overview: [
        "Great defense starts before the pitch with positioning and the ready position. The second baseman's depth and lateral position change with the situation:\n- Normal depth for most situations.\n- Double-play depth — a couple steps in and toward the bag — when a double play is needed.\n- Shallow ('infield in') when a run must be cut down at the plate.\nPositioning also shifts with the hitter — pull tendencies, power, and speed all influence where the second baseman stands.",
        "The ready position is the athletic stance every fielder assumes as the pitch is delivered:\n- Feet slightly wider than shoulder-width, knees bent.\n- Weight forward on the balls of the feet, glove out front.\n- A small timing hop or 'creep' step as the pitch reaches the hitter, so the body is loaded and moving when the ball is struck.\nA fielder caught flat-footed loses the crucial first step; one in a good ready position reacts instantly in any direction.",
        "Double-play depth is a key second-base concept. When a double play is in order (runner on first, fewer than two outs), the second baseman moves a step or two closer to the bag and in, shortening the distance to second base so they can get there in time to take a feed and pivot, or to feed the shortstop. This sacrifices a little range for double-play readiness. Knowing when to play double-play depth versus straight-up versus infield-in is a situational decision made before every pitch.",
      ],
      technical: {
        title: "Depth, Positioning, and the Ready Position",
        body: [
          "Depth by situation: play normal depth in most situations; move to double-play depth (a step or two in and toward second base) with a runner on first and a double play needed, to reach the bag in time; play shallow (infield in) when a run at the plate must be cut down, accepting reduced range. Adjust lateral positioning for the hitter's tendencies, power, and speed.",
          "As the pitch is delivered, assume an athletic stance — feet wider than the shoulders, knees bent, weight forward, glove out front. Then take a small timing hop or creep step so you're loaded and moving as the ball is hit; this eliminates the flat-footed delay that costs the first step. Time the creep so your feet land just as the ball reaches the hitting zone, ready to break in any direction.",
        ],
        codeExample: {
          label: "Second Base Positioning and Ready Position",
          code: `  DEPTH BY SITUATION:
  Normal             → standard depth + position
  Double-play needed → DP DEPTH: a step or two
    (runner on 1st,    IN and toward 2B (reach
     <2 outs)          the bag in time)
  Cut the run at home → INFIELD IN (shallow,
                        less range, throw home)
  Adjust laterally for the hitter (pull/power/speed)

  READY POSITION (as the pitch is thrown):
  ✓ Feet wider than shoulders, knees bent
  ✓ Weight FORWARD on the balls of the feet
  ✓ Glove out front
  ✓ CREEP / timing hop → land as the ball reaches
    the zone → loaded + moving, no flat-footed delay

  Be in the right SPOT and the right STANCE before
  the ball is ever hit.`,
        },
      },
      incident: {
        title: "The Positioning Revolution",
        when: "2005–2015 — the analytics era",
        where: "Progressive Field and ballparks across the game",
        impact: "Data on where each hitter tends to hit the ball transformed infield positioning, with second basemen often shifting dramatically based on the batter — proving that being in the right spot before the pitch can be as valuable as range.",
        body: [
          "As batted-ball data matured, teams discovered that hitters have strong, predictable tendencies about where they hit the ball, and they began positioning fielders accordingly. Second basemen, in particular, were often moved dramatically — sometimes into shallow right field against pull-heavy left-handed hitters — because standing in the most likely landing spot turned would-be hits into outs without any extra range. Positioning became a defensive skill in itself.",
          "While rule changes later restricted the most extreme shifts, the core lesson endures: a fielder in the right spot before the pitch covers less ground to reach the ball. Combined with a good ready position and a well-timed creep step, smart positioning is what lets a second baseman make difficult plays look routine. Being in the right place is half of defense — and it's a decision made fresh every pitch.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Situation + Hitter", sub: "outs, runners, tendencies", type: "system" },
          { label: "Set Depth and Position", sub: "normal / DP depth / in", type: "attacker" },
          { label: "Athletic Ready Position", sub: "creep step, loaded", type: "victim" },
          { label: "Explode to the Ball", sub: "no first-step delay", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Double-play depth formalized as a standard infield adjustment" },
        { year: 1980, event: "Ready position and creep step taught as fielding fundamentals" },
        { year: 2005, event: "Batted-ball data begins driving dramatic infield positioning", highlight: true },
        { year: 2015, event: "Statcast quantifies positioning's value relative to range" },
        { year: 2023, event: "Shift restrictions return some positioning judgment to traditional spots" },
      ],
      keyTakeaways: [
        "Positioning changes with the situation: normal depth, double-play depth (in and toward the bag), or infield in",
        "Double-play depth shortens the distance to second so the second baseman can take a feed and pivot in time",
        "The ready position is an athletic stance with weight forward and a creep step timed to the pitch",
        "A well-timed creep eliminates the flat-footed delay that costs the crucial first step",
      ],
      references: [
        { title: "USA Baseball: Infield Positioning and Ready Position", url: "https://www.usabaseball.com" },
        { title: "Little League: Infield Coaching Guide", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Defensive Positioning", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-10-02-q1",
          type: "Double-Play Depth",
          challenge: `  Runner on first base, one out. The defense wants
  to be able to turn a double play on a ground ball.`,
          text: "How should the second baseman adjust his depth in a double-play situation?",
          options: [
            "Play deeper than normal to get more range",
            "Move to double-play depth — a step or two in and toward second base — to reach the bag in time to take a feed and pivot",
            "Stand directly on second base",
            "Play in shallow right field",
          ],
          correctIndex: 1,
          explanation: "With a runner on first and a double play in order, the second baseman plays double-play depth: a step or two in and toward second base. This shortens the distance to the bag so he can get there in time to receive a feed and pivot, or to feed the shortstop. It sacrifices a little range for double-play readiness — a worthwhile trade when turning two is the goal.",
        },
        {
          id: "baseball-10-02-q2",
          type: "Ready Position",
          challenge: `  As the pitch is thrown, a second baseman stands
  upright and flat-footed with his glove at his
  side. A sharp grounder gets past him before he
  can react.`,
          text: "What ready-position habit would help him react in time?",
          options: [
            "Standing more upright to see better",
            "An athletic stance with weight forward and a creep/timing hop so he lands loaded and moving as the ball is hit",
            "Keeping both feet together",
            "Holding the glove behind his back",
          ],
          correctIndex: 1,
          explanation: "A flat-footed fielder loses the crucial first step. The fix is an athletic ready position — feet wider than the shoulders, knees bent, weight forward, glove out front — combined with a small creep step or timing hop timed so the feet land just as the ball reaches the hitting zone. This leaves the body loaded and already moving when the ball is struck, allowing an instant break in any direction.",
        },
        {
          id: "baseball-10-02-q3",
          type: "Infield In",
          challenge: `  Runner on third, one out, tie game late. The
  defense needs to prevent the run from scoring
  on a ground ball.`,
          text: "How should the second baseman position himself when the infield plays 'in'?",
          options: [
            "Play deeper to cover more ground",
            "Play shallow (infield in), accepting reduced range, so he can field a grounder and throw home to cut down the run",
            "Move into the outfield",
            "Stand on second base",
          ],
          correctIndex: 1,
          explanation: "With a runner on third and the need to cut down a run at the plate, the infield plays in, and the second baseman moves up shallow. This sacrifices range — more balls get through a drawn-in infield — in exchange for the ability to field a ground ball and throw home in time to retire the runner trying to score. It's a situational decision based on the score and the importance of that single run.",
        },
        {
          id: "baseball-10-02-q4",
          type: "Positioning",
          challenge: `  Against a pull-heavy left-handed hitter, a second
  baseman stands in his normal straight-up spot,
  and a hard-pulled grounder rolls just out of his
  reach toward the right-field gap.`,
          text: "What does the positioning revolution teach about this play?",
          options: [
            "Positioning makes no difference — only range matters",
            "Standing in the hitter's most likely landing spot (shading toward the pull side) turns would-be hits into outs without any extra range",
            "The second baseman should always stand in the exact same spot",
            "Hitters hit the ball randomly, so positioning is guesswork",
          ],
          correctIndex: 1,
          explanation: "Batted-ball data shows hitters have strong, predictable tendencies. Against a pull-heavy left-handed hitter, shading toward the right side (the pull side) puts the second baseman in the most likely landing spot, converting hard-pulled grounders into routine outs without needing extra range. Being in the right spot before the pitch is a defensive skill in itself — sometimes as valuable as quickness.",
        },
      ],
    },
  },

  // ─── baseball-10-03: Fielding and Footwork ────────────────────────────────────
  {
    epochId: "baseball-10",
    wonder: {
      name: "Kauffman Stadium",
      location: "Kansas City, Missouri",
      era: "Modern",
      emoji: "🧤",
    },
    id: "baseball-10-03",
    order: 3,
    title: "Fielding Ground Balls and Footwork",
    subtitle: "Range to both sides, backhands, and clean transfers",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-10-badge-03", name: "Smooth Glove", emoji: "🧤" },
    challengeType: "quiz",
    info: {
      tagline: "Footwork comes before the glove — get to the ball, get around it, and field it from a base you can throw from.",
      year: 1996,
      overview: [
        "The second baseman must field grounders cleanly to both sides — into the hole toward first and up the middle behind the bag (the deepest, hardest throws). The fundamentals match every infielder:\n- Get a great first step from the ready position.\n- Take an efficient route to the ball.\n- Field it out in front with the glove down, fingers pointing at the ground.\n- Watch it into the glove and use two hands for a quick, secure transfer.\nFootwork — getting the feet around and under the body — is what makes the throw possible.",
        "Range to the glove side (toward first base, into the 3-4 hole) often requires a backhand or a quick crossover. Range up the middle behind the bag requires going to the backhand or, on the deepest balls, fielding and making a strong throw or a flip. The second baseman fields more balls on the move than almost any infielder, so the ability to field from an unbalanced position and quickly get the feet set to throw is essential. The shorter throw to first gives a little extra time to gather and set.",
        "The transfer and footwork to throw are where plays are won or lost:\n- After fielding, get the ball to a four-seam grip at the center of the body and step toward the target.\n- On routine plays, set the feet and make a strong, accurate throw.\n- On plays deep in the hole or up the middle, plant and throw across the body, flip, or throw from an off-balance position.\nPracticing footwork from every angle builds the smooth, repeatable transfers that turn grounders into outs.",
      ],
      technical: {
        title: "Fielding Mechanics and Footwork to Throw",
        body: [
          "Field the ball:\n- from the ready position\n- explode on the first step\n- take an efficient route (round off the ball when you have time so your momentum carries toward the target)\n- get low with the glove down and fingers at the ground\n- field out in front\n- watch it into the glove\nUse two hands for a secure, fast transfer when the play allows.",
          "Footwork to throw: bring the ball to a four-seam grip at the center of the chest, get the feet set with the front shoulder aligned to the target, and step toward the throw. The shorter throw to first gives time to gather on routine plays. On balls in the hole or up the middle, develop the footwork to plant and throw across the body, flip underhand, or throw from a less-than-ideal base — second basemen field more balls on the move than most infielders, so off-balance throwing footwork is a core skill.",
        ],
        codeExample: {
          label: "Ground Ball Fielding and Throwing Footwork",
          code: `  FIELD THE BALL:
  1. Explode on the FIRST STEP (ready position)
  2. Efficient ROUTE — round off the ball if time,
     so momentum carries toward the target
  3. Get LOW: glove down, fingers at the ground,
     field OUT IN FRONT, two hands when possible
  4. WATCH it into the glove

  FOOTWORK TO THROW:
  5. Ball to FOUR-SEAM grip at center chest
  6. Set the feet, front shoulder to the target
  7. STEP and throw through the target
     → Routine: set + strong accurate throw
     → In the hole / up the middle: plant + throw
       across the body, FLIP, or off-balance throw

  Shorter throw to 1B = a little extra time to
  gather. Footwork BEFORE the glove.`,
        },
      },
      incident: {
        title: "The Acrobatic Range of the Modern Second Baseman",
        when: "1990s — the highlight-reel era",
        where: "Kauffman Stadium and ballparks across the game",
        impact: "Second basemen like Jackie Robinson showcased how athleticism and instinct could extend a fielder's range — making plays on the move, from the ground, and across the body that turned hits into outs and redefined expectations at the position.",
        body: [
          "The second baseman fields more balls on the move and from awkward positions than almost any infielder — ranging up the middle, diving into the hole, and flipping from the ground. Players like Jackie Robinson turned this into an art, making athletic plays look routine through superb footwork, instinct, and soft, quick hands. Their range came not just from speed but from the ability to field from any position and instantly organize the feet to throw.",
          "The lesson is that footwork, not just athleticism, creates range. A second baseman who can field a ball deep in the hole, plant, and fire across his body, or who can flip from his knees up the middle, makes plays a stiffer fielder never could. These skills are built through endless repetition of footwork from every angle. Mastering the unbalanced, on-the-move plays is what separates a good second baseman from a great one.",
        ],
      },
      diagram: {
        nodes: [
          { label: "First Step from Ready", sub: "explode to the ball", type: "system" },
          { label: "Efficient Route + Field Low", sub: "out front, two hands", type: "attacker" },
          { label: "Footwork to Throw", sub: "set or throw on the move", type: "victim" },
          { label: "Accurate Throw, Out Recorded", sub: "grounder becomes an out", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Two-hand fielding and footwork formalized in infield instruction" },
        { year: 1980, event: "Crossover and backhand range techniques standardized" },
        { year: 1949, event: "Athletic second-base play popularized by Jackie Robinson and the era's greats", highlight: true },
        { year: 2010, event: "Defensive metrics quantify second-base range to both sides" },
        { year: 2020, event: "Footwork-from-every-angle drills standard in development" },
      ],
      keyTakeaways: [
        "Field ground balls out in front with the glove down and fingers at the ground, using two hands when possible",
        "Footwork comes before the glove — explode on the first step and take an efficient route that carries toward the target",
        "Range to both sides requires backhands, crossovers, and the ability to field on the move",
        "Develop footwork to throw from any base — set on routine plays, plant or flip on balls in the hole or up the middle",
      ],
      references: [
        { title: "USA Baseball: Infield Fielding Mechanics", url: "https://www.usabaseball.com" },
        { title: "Little League: Fielding Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Middle Infield Defense", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-10-03-q1",
          type: "Technique",
          challenge: `  A second baseman fields ground balls standing
  fairly upright, with the glove at hip height,
  and balls keep skipping under his glove.`,
          text: "What fielding adjustment would stop balls from going under the glove?",
          options: [
            "Field with the glove at hip height but faster",
            "Get low with the glove down and fingers pointing at the ground, fielding the ball out in front of the body",
            "Field with the glove turned up like a basket",
            "Wait for the ball to stop rolling",
          ],
          correctIndex: 1,
          explanation: "Balls skip under a glove held too high. The fielder must get low, put the glove down with the fingers pointing at the ground, and field the ball out in front of the body — watching it into the glove. A low glove with fingers down means a ball that takes a short hop deflects up into the glove or the body rather than skipping underneath. This is a core infield fundamental at every position.",
        },
        {
          id: "baseball-10-03-q2",
          type: "Footwork",
          challenge: `  A coach tells a young second baseman: "Don't just
  run straight at the ball and field it flat-footed —
  take a better route to it."`,
          text: "Why round off the route to a ground ball when there's time?",
          options: [
            "It looks more impressive",
            "Rounding off the ball lets the fielder field it while moving toward the target, so momentum carries into the throw instead of having to stop and reset",
            "It's slower, which gives the runner less time",
            "Routes don't matter at second base",
          ],
          correctIndex: 1,
          explanation: "When there's time, the fielder rounds off the route — taking a slightly curved path so they field the ball moving toward the target base. This means their momentum carries into the throw, eliminating the need to field flat-footed and then stop, gather, and reset before throwing. Good footwork and route-running turn the field-and-throw into one fluid motion, which is faster and more accurate.",
        },
        {
          id: "baseball-10-03-q3",
          type: "Range",
          challenge: `  A ground ball is hit up the middle, behind the
  second-base bag, forcing the second baseman to
  range far to his right and field it on the run.`,
          text: "What makes the throw to first difficult on a ball fielded up the middle behind the bag?",
          options: [
            "There's no throw to make on this play",
            "The second baseman is moving away from first base and often must plant and throw across his body or flip, from an unbalanced position",
            "The throw is shorter than normal",
            "The ball is always an automatic out",
          ],
          correctIndex: 1,
          explanation: "On a ball up the middle behind the bag, the second baseman ranges to his right, away from first base, and is moving in the wrong direction to throw. He must plant and throw across his body, flip, or make an off-balance throw — among the harder plays at the position. Developing the footwork to organize the feet quickly and throw from this unbalanced position is what gives a second baseman real range up the middle.",
        },
        {
          id: "baseball-10-03-q4",
          type: "Transfer",
          challenge: `  A second baseman fields the ball cleanly but
  grabs it with a random grip, and his throw to
  first tails and sinks, pulling the first baseman
  off the bag.`,
          text: "What would make the throw straighter and more accurate?",
          options: [
            "Throwing harder regardless of grip",
            "Getting the ball to a four-seam grip at the center of the body during the transfer for a straight, true throw",
            "Throwing sidearm every time",
            "Grip doesn't affect a thrown ball's flight",
          ],
          correctIndex: 1,
          explanation: "A four-seam grip — fingers across the seams — produces pure backspin and a straight, true throw, while a random grip causes the ball to tail or sink unpredictably. The second baseman should bring the ball to a four-seam grip at the center of the chest during the transfer. A clean, consistent grip on every throw significantly improves accuracy, keeping throws on a line to the first baseman's chest.",
        },
      ],
    },
  },

  // ─── baseball-10-04: Turning the Double Play (The Pivot) ──────────────────────
  {
    epochId: "baseball-10",
    wonder: {
      name: "Wrigley Field",
      location: "Chicago, Illinois",
      era: "Modern",
      emoji: "🔄",
    },
    id: "baseball-10-04",
    order: 4,
    title: "Turning the Double Play — The Pivot",
    subtitle: "Footwork at the bag, the relay, and protecting yourself",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-10-badge-04", name: "Turn Two", emoji: "🔄" },
    challengeType: "quiz",
    info: {
      tagline: "The pivot is the second baseman's signature — turn two cleanly, get the throw off, and protect yourself from the slide.",
      year: 1992,
      overview: [
        "The pivot is the second baseman's most distinctive and difficult skill — receiving a feed at second on a double play (a 6-4-3 started by the shortstop), touching the bag for the force, and relaying to first, all while a runner bears down to slide in. It demands:\n- Quick hands on the feed.\n- Footwork that gets into throwing position while clearing the runner.\n- The courage to throw with contact coming.\nA clean pivot turns one out into two and can end an inning or kill a rally.",
        "There are several pivot techniques, chosen by where the feed arrives and where the runner is:\n- Step across the bag toward the outfield side (most common) — drag or tap the bag, then throw to first as momentum carries away from the slide.\n- Step behind the bag.\n- Straddle and push off.\n- 'Rock and throw' on a feed that takes the second baseman to the inside.\nThe goal is always the same: touch the bag, get into a strong throwing position, and clear the runner.",
        "Self-protection is part of the pivot. Modern rules (the 2016 slide rule) require runners to make a bona fide slide directly into the bag and prohibit them from going out of their way to take out the fielder — but contact still happens, and the second baseman must get rid of the ball quickly and use footwork to avoid the worst of it. A common technique is to throw and then get up and over the sliding runner. Getting the throw off before the runner arrives is both more effective and safer. The pivot is a blend of skill, timing, and toughness.",
      ],
      technical: {
        title: "Pivot Techniques and Footwork",
        body: [
          "Common pivot (cross the bag): catch the feed as you step across the bag toward the outfield side, tag the bag with the trailing foot, and throw to first as your momentum carries you away from the sliding runner. This is the bread-and-butter pivot — it clears the runner naturally and lets you throw from a strong base.",
          "Other pivots and protection: on different feeds, step behind the bag, straddle and push off, or rock and throw to the inside. Choose the pivot based on where the feed arrives and where the runner is. For safety and speed, get rid of the ball quickly — a fast release beats the runner and reduces contact — and use footwork (stepping across, or up and over the slide) to avoid the runner's slide. The 2016 slide rule requires a legal slide at the bag, but the fielder still protects himself with quick feet and a quick release.",
        ],
        codeExample: {
          label: "The Pivot — Turning Two",
          code: `  6-4-3 DOUBLE PLAY (SS feeds, 2B pivots):
  1. Receive the feed at the bag
  2. TOUCH the bag for the force (drag/tap)
  3. Get into a strong throwing position
  4. RELAY to first to complete the DP
  5. CLEAR the sliding runner

  COMMON PIVOTS (pick by feed + runner):
  → CROSS the bag (toward the outfield side) →
    bread-and-butter; momentum carries you off
    the runner
  → Step BEHIND the bag
  → STRADDLE and push off
  → ROCK and throw (feed to the inside)

  SAFETY:
  ✓ QUICK RELEASE — beat the runner, less contact
  ✓ Footwork to clear the slide (across / up + over)
  ✓ 2016 slide rule: runner must slide legally to
    the bag (no taking you out)`,
        },
      },
      incident: {
        title: "Jackie Robinson's Double Play and Daring",
        when: "1947–1956 — Brooklyn Dodgers",
        where: "Wrigley Field and ballparks across the game",
        impact: "Jackie Robinson's double-play work was a model of athletic skill under pressure — quick hands, sound footwork, and the toughness to turn two while clearing hard slides, paired with the daring baserunning and intelligence that defined his game.",
        body: [
          "Through Brooklyn's run of pennants and the 1955 World Series title, Jackie Robinson turned the double play with athletic skill and toughness. He received feeds from any angle, found the bag without looking, and released the relay to first quickly — clearing sliding runners with sound footwork. His all-around game, from the pivot to his fearless baserunning, was a decisive weapon in the biggest moments.",
          "Robinson's game was built on fundamentals executed with rare athleticism: soft, quick hands to secure any feed, efficient footwork through the bag, and a quick release that beat the runner. For young players, his example shows that the pivot is mastered through repetition of footwork and hand quickness — and that getting rid of the ball fast is both the most effective and the safest way to turn two.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Feed Arrives at Second", sub: "from the shortstop", type: "attacker" },
          { label: "Touch the Bag, Choose the Pivot", sub: "cross, behind, straddle", type: "system" },
          { label: "Quick Release to First", sub: "beat the runner", type: "victim" },
          { label: "Two Outs, Clear the Slide", sub: "turn two, stay safe", type: "result" },
        ],
      },
      timeline: [
        { year: 1920, event: "The double-play pivot becomes a defensive cornerstone" },
        { year: 1970, event: "Hard takeout slides make the pivot one of the game's most dangerous plays" },
        { year: 1949, event: "Jackie Robinson's athletic double-play work anchors Brooklyn's championship-caliber infield", highlight: true },
        { year: 2016, event: "MLB adopts the slide rule, requiring bona fide slides into the bag" },
        { year: 2020, event: "Quick-release pivot technique emphasized for safety and speed" },
      ],
      keyTakeaways: [
        "The pivot — receive a feed at second, touch the bag, and relay to first — is the second baseman's signature skill",
        "The common pivot crosses the bag toward the outfield side, clearing the runner as momentum carries the throw",
        "Choose the pivot (cross, behind, straddle, rock-and-throw) based on where the feed arrives and where the runner is",
        "A quick release is both the most effective and the safest way to turn two — get rid of the ball before the runner arrives",
      ],
      references: [
        { title: "USA Baseball: Turning the Double Play", url: "https://www.usabaseball.com" },
        { title: "MLB Official Rules: The Slide Rule", url: "https://www.mlb.com/official-information/umpires/official-rules" },
        { title: "Baseball Hall of Fame: Jackie Robinson", url: "https://baseballhall.org/hall-of-famers/robinson-jackie" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-10-04-q1",
          type: "The Pivot",
          challenge: `  A shortstop fields a grounder and flips to second.
  The second baseman must record the force out and
  throw to first to complete the double play.`,
          text: "What is this pivot sequence called in scorekeeping?",
          options: [
            "A 4-6-3 double play",
            "A 6-4-3 double play — shortstop (6) to second baseman (4) to first baseman (3)",
            "A 3-6-4 double play",
            "A 5-4-3 double play",
          ],
          correctIndex: 1,
          explanation: "When the shortstop (position 6) fields the ball and feeds the second baseman (position 4), who relays to first base (position 3), it's a 6-4-3 double play — the most common double play in baseball. The second baseman is the pivot man, receiving the feed, touching second for the force, and throwing to first. (A 4-6-3 is the reverse, started by the second baseman feeding the shortstop.)",
        },
        {
          id: "baseball-10-04-q2",
          type: "Footwork",
          challenge: `  A second baseman receives the feed and wants to
  both clear the incoming sliding runner and throw
  from a strong, balanced position to first.`,
          text: "What does the common 'cross the bag' pivot accomplish?",
          options: [
            "It blocks the runner from reaching the base",
            "Catching the feed while stepping across the bag toward the outfield side tags the bag, builds momentum toward first, and carries the second baseman away from the sliding runner",
            "It allows the second baseman to throw home",
            "It has no effect on the runner or the throw",
          ],
          correctIndex: 1,
          explanation: "The bread-and-butter pivot has the second baseman catch the feed while stepping across the bag toward the outfield side. This tags the bag for the force, puts him in a strong throwing position with momentum carrying toward first, and naturally moves him away from the runner sliding into the base. It's the most common pivot because it accomplishes the force, the throw, and self-protection in one fluid motion.",
        },
        {
          id: "baseball-10-04-q3",
          type: "Safety",
          challenge: `  A second baseman tends to hold the ball a beat too
  long on the pivot, and aggressive runners arrive
  at the bag just as he's about to throw.`,
          text: "Why is a quick release both more effective and safer on the pivot?",
          options: [
            "It isn't — holding the ball longer is better",
            "Getting rid of the ball quickly completes the double play before the runner arrives and reduces the contact and danger of the slide",
            "A slow release intimidates the runner",
            "Release speed only affects accuracy, not safety",
          ],
          correctIndex: 1,
          explanation: "A quick release beats the runner to complete the double play and, just as importantly, gets the ball out of the second baseman's hands before the runner arrives — reducing the contact and danger of the slide. Holding the ball too long lets the runner reach the bag as the throw is made, hurting both the play and the fielder's safety. Speed of release is central to turning two effectively and safely.",
        },
        {
          id: "baseball-10-04-q4",
          type: "Rules",
          challenge: `  A runner, instead of sliding into second base,
  veers well out of the baseline to barrel into
  the second baseman and break up the double play.`,
          text: "What does the modern slide rule require of runners on a double play?",
          options: [
            "Runners can do whatever it takes to break up the double play",
            "Runners must make a bona fide slide directly into the bag and may not go out of their way to take out the fielder",
            "Runners are never allowed to slide into second base",
            "The rule applies only in the playoffs",
          ],
          correctIndex: 1,
          explanation: "The 2016 slide rule requires runners to make a genuine slide directly into the bag — able to reach it with a hand or foot — and prohibits them from veering out of the baseline to take out the fielder. Illegal slides result in the batter-runner being called out too (an automatic double play). The rule made the pivot safer, though contact still happens, so the second baseman protects himself with footwork and a quick release.",
        },
      ],
    },
  },

  // ─── baseball-10-05: The Feed ─────────────────────────────────────────────────
  {
    epochId: "baseball-10",
    wonder: {
      name: "Target Field",
      location: "Minneapolis, Minnesota",
      era: "Modern",
      emoji: "🤲",
    },
    id: "baseball-10-05",
    order: 5,
    title: "Feeding the Shortstop",
    subtitle: "Underhand tosses, flips, and starting the 4-6-3",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-10-badge-05", name: "Clean Feed", emoji: "🤲" },
    challengeType: "quiz",
    info: {
      tagline: "When the ball comes to you near the bag, your feed has to be perfect — give the shortstop a ball he can turn.",
      year: 1998,
      overview: [
        "When the second baseman fields a grounder near the bag with a double play on, he becomes the feeder, delivering to the shortstop covering second to start a 4-6-3. The quality of the feed determines whether the shortstop can turn two — a good feed is:\n- Chest-high and on a straight line.\n- Slightly to the outfield side of the bag.\n- Delivered with a visible grip, so the shortstop sees the ball early.\nThat lets the shortstop catch, pivot, and throw in one motion. A poor feed — too hard, off-target, or hiding the ball — kills the double play.",
        "The type of feed depends on distance and angle:\n- Very close to the bag — a soft underhand toss with a stiff wrist, ball shown to the shortstop.\n- A few steps away — a backhand flip from the glove side, or a quick overhand-style dart.\n- Farther in the hole — a firmer throw with a four-seam grip.\nThe cardinal rule is to take something off the throw so the shortstop can handle it cleanly — a 'catchable' feed beats a fast one.",
        "Footwork and timing matter on the feed too. The second baseman should field the ball under control, get the body oriented toward second, and deliver the feed so it leads the shortstop to the bag without pulling him across it into the runner. On the underhand feed, the second baseman follows the toss toward the bag (so the ball doesn't sail) and gives the shortstop a clear, early look at the ball. A clean, well-placed feed is an unselfish skill — it makes the shortstop's job easy and the double play possible.",
      ],
      technical: {
        title: "Types of Feeds and When to Use Them",
        body: [
          "Close to the bag — underhand feed: use a soft underhand toss with a firm (stiff) wrist, showing the ball to the shortstop, and follow the toss a step toward the bag so it doesn't sail. This is the most accurate feed for short distances. Deliver it chest-high and slightly to the outfield side so the shortstop catches, pivots, and throws cleanly.",
          "Farther away — flips and throws: from a few steps off the bag, a backhand flip (from the glove side) is quick and natural; from deeper in the hole, use a firmer throw with a four-seam grip, but take something off it so it's catchable. Whatever the distance, lead the shortstop to the bag without pulling him across it into the runner, give him an early look at the ball, and prioritize accuracy and 'turnability' over velocity. A feed the shortstop can handle in one motion is the goal.",
        ],
        codeExample: {
          label: "Feeding the Shortstop — Choose by Distance",
          code: `  4-6-3 DP — 2B FEEDS, SS PIVOTS:

  DISTANCE FROM THE BAG → FEED TYPE
  ─────────────────────────────────────────────
  Right at the bag   → UNDERHAND toss (stiff
                       wrist, SHOW the ball,
                       follow it a step)
  A few steps away   → BACKHAND FLIP (glove side)
  Deeper in the hole → firm THROW, four-seam grip
                       (but take something off it)

  EVERY FEED:
  ✓ Chest-high, slightly to the OUTFIELD side
  ✓ Straight line, ball SHOWN early (no hiding it)
  ✓ LEAD the SS to the bag — don't pull him across
    it into the runner
  ✓ "CATCHABLE" beats "fast" — make it turnable

  An unselfish, clean feed makes the double play.`,
        },
      },
      incident: {
        title: "The Unselfish Art of the Feed",
        when: "1990s — fundamentals-driven defense",
        where: "Target Field and ballparks across the game",
        impact: "Coaches have long taught that the feed is an unselfish skill measured not by flash but by how easy it makes the shortstop's pivot — a perfect feed is invisible, and a sloppy one ruins an otherwise routine double play.",
        body: [
          "The feed is one of baseball's most selfless skills. A second baseman who delivers a perfect feed — chest-high, accurate, and showing the ball — makes the shortstop's pivot effortless and the double play routine, yet gets no individual credit for it. A sloppy feed, by contrast, can turn a sure double play into one out or none, even when the shortstop does everything right. The best feeders take pride in making their partner's job easy.",
          "Great keystone combinations are built on trust in the feed. When the shortstop knows the second baseman will consistently deliver a turnable ball, he can commit to the bag and the relay without hesitation. Choosing the right feed for each distance, taking velocity off so it's catchable, and leading the shortstop to the bag are the marks of a refined second baseman. The feed is proof that the most valuable defensive skills are often the quiet, unselfish ones.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Grounder Near the Bag", sub: "2B becomes the feeder", type: "attacker" },
          { label: "Choose the Feed", sub: "underhand, flip, or throw", type: "system" },
          { label: "Deliver It Catchable", sub: "chest-high, show the ball", type: "victim" },
          { label: "Shortstop Turns Two", sub: "clean feed makes the DP", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Underhand feed and backhand flip standardized as double-play feeds" },
        { year: 1980, event: "The 4-6-3 double play a cornerstone of middle-infield defense" },
        { year: 1998, event: "Feed mechanics by distance taught as a core second-base skill", highlight: true },
        { year: 2015, event: "Defensive metrics value the feed's role in double-play conversion" },
        { year: 2020, event: "Drills emphasize 'catchable' feeds over velocity" },
      ],
      keyTakeaways: [
        "When the second baseman fields near the bag, he feeds the shortstop to start a 4-6-3 double play",
        "Choose the feed by distance: underhand toss right at the bag, backhand flip a few steps away, firmer throw from the hole",
        "Deliver every feed chest-high, slightly to the outfield side, showing the ball early so the shortstop sees it",
        "A catchable, turnable feed beats a fast one — the feed is an unselfish skill that makes the shortstop's pivot easy",
      ],
      references: [
        { title: "USA Baseball: Double-Play Feeds", url: "https://www.usabaseball.com" },
        { title: "Little League: Middle Infield Coaching", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Turning the Double Play", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-10-05-q1",
          type: "Feed Choice",
          challenge: `  A second baseman fields a ground ball right next
  to the second-base bag with a runner bearing down,
  and needs to feed the shortstop to start the
  double play.`,
          text: "What type of feed is best when the second baseman fields the ball right at the bag?",
          options: [
            "A hard overhand throw as fast as possible",
            "A soft underhand toss with a stiff wrist, showing the ball to the shortstop and following the toss a step toward the bag",
            "A bounce throw into the dirt",
            "A behind-the-back flip",
          ],
          correctIndex: 1,
          explanation: "From right at the bag, the most accurate feed is a soft underhand toss with a firm, stiff wrist, showing the ball to the shortstop so he picks it up early, and following the toss a step toward the bag so it doesn't sail. A hard throw from that close is difficult to handle and can sail. The underhand feed is gentle, accurate, and turnable — exactly what the shortstop needs.",
        },
        {
          id: "baseball-10-05-q2",
          type: "Placement",
          challenge: `  A second baseman's feed arrives behind the bag and
  to the infield side, pulling the shortstop across
  the bag and directly into the path of the sliding
  runner.`,
          text: "Where should the feed be placed to help the shortstop turn two safely?",
          options: [
            "Behind the bag on the infield side",
            "Chest-high and slightly to the outfield side of the bag, leading the shortstop to the base without pulling him across it into the runner",
            "Low and in the dirt",
            "It doesn't matter where the feed goes",
          ],
          correctIndex: 1,
          explanation: "A good feed arrives chest-high and slightly to the outfield side of the bag, leading the shortstop to the base and letting him catch, pivot, and throw in one motion while moving away from the runner. A feed to the infield side pulls the shortstop across the bag into the runner's path — dangerous and slow. Placement is as important as the type of feed for a clean, safe double play.",
        },
        {
          id: "baseball-10-05-q3",
          type: "Velocity",
          challenge: `  A second baseman fires every feed as hard as he
  can, and the shortstop frequently bobbles them or
  has to fight the ball, ruining double plays.`,
          text: "Why should the second baseman often take velocity off the feed?",
          options: [
            "A faster feed is always better",
            "A 'catchable,' turnable feed lets the shortstop handle it in one motion; a feed that's too hard is bobbled or fought, killing the double play even when accurate",
            "Slow feeds let the runner reach first",
            "Velocity has no effect on the shortstop",
          ],
          correctIndex: 1,
          explanation: "The feed's purpose is to give the shortstop a ball he can turn in one motion. A feed that's too hard — even if accurate — is hard to handle and gets bobbled or fought, ruining the double play. Taking something off the throw so it's soft and catchable lets the shortstop catch, pivot, and relay smoothly. 'Catchable' beats 'fast' on every feed; the goal is turnability, not velocity.",
        },
        {
          id: "baseball-10-05-q4",
          type: "Mindset",
          challenge: `  A coach calls the feed "the most unselfish skill"
  for a second baseman, even though it earns no
  individual highlights.`,
          text: "Why is the feed considered an unselfish skill?",
          options: [
            "Because it's the flashiest play a second baseman makes",
            "Because a perfect feed makes the shortstop's pivot easy and the double play routine, yet the feeder gets no individual credit — its value is in helping the partner",
            "Because feeds count as errors for the second baseman",
            "Because feeds are only made in blowout games",
          ],
          correctIndex: 1,
          explanation: "The feed is unselfish because its entire purpose is to make the shortstop's job easy. A perfect feed — accurate, catchable, and showing the ball — turns a double play into a routine play, but it earns the second baseman no highlight or individual glory. The best feeders take pride in making their partner's pivot effortless. It's a reminder that some of the most valuable defensive skills are the quiet, selfless ones.",
        },
      ],
    },
  },

  // ─── baseball-10-06: Building the Second Baseman's Body ───────────────────────
  {
    epochId: "baseball-10",
    wonder: {
      name: "Petco Park",
      location: "San Diego, California",
      era: "Modern",
      emoji: "💪",
    },
    id: "baseball-10-06",
    order: 6,
    title: "Building the Second Baseman's Body",
    subtitle: "Lateral quickness, agility, and core stability",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-10-badge-06", name: "Quick Twitch", emoji: "⚡" },
    challengeType: "quiz",
    info: {
      tagline: "Second base is a quickness position — fast feet, lateral agility, and a strong core that lets you throw from anywhere.",
      year: 2012,
      overview: [
        "Second base rewards quickness and agility over size and raw power. The physical priorities:\n- Lateral quickness — to range to both sides and reach balls in the hole and up the middle.\n- First-step explosiveness — to break instantly from the ready position.\n- Core and rotational strength — to throw accurately from off-balance positions and absorb contact on the pivot.\n- Footwork agility that ties it all together.\nA smaller, quicker, more agile player often makes a better second baseman than a bigger, stronger but slower one.",
        "Lower-body strength and single-leg stability are the foundation:\n- Strong legs and glutes power the quick first step and the throws.\n- Single-leg strength and balance allow fielding and throwing from unbalanced positions, planting, pivoting, and clearing runners.\n- Agility and change-of-direction training — ladder drills, lateral movement, reaction drills — translate directly to range and footwork around the bag.\nThe core is especially important because the second baseman so often throws across his body or from awkward angles.",
        "Durability and arm care round it out. While the throw to first is shorter than from shortstop, the second baseman makes many throws from difficult positions, so rotator-cuff and scapular strength protect the arm. Flexibility and mobility (hips, ankles, thoracic spine) keep the fielding low and the throwing free. And the pivot's contact with sliding runners makes core stability and body control important for both performance and safety. The build that wins at second base is quick, agile, balanced, and resilient.",
      ],
      technical: {
        title: "Training Priorities for Second Basemen",
        body: [
          "Quickness and agility come first. Prioritize first-step explosiveness, lateral quickness, and change-of-direction agility (reaction drills, lateral bounds, footwork ladders) — these create range and clean footwork at the bag. Single-leg strength and balance let the second baseman field and throw from unbalanced positions and execute the pivot.",
          "Core, mobility, and arm care: build a strong, stable core for accurate off-balance and across-the-body throws and for absorbing contact on the pivot. Maintain hip, ankle, and thoracic mobility to field low and throw freely. Care for the throwing arm (rotator cuff, scapular work) because second basemen make many throws from awkward angles. Quick, agile, balanced, and resilient — not big and strong — is the second baseman's physical ideal.",
        ],
        codeExample: {
          label: "Second Baseman Body-Building Priorities",
          code: `  QUICKNESS + AGILITY (the core of the position):
  → First-step explosiveness (break from ready)
  → Lateral quickness → range to both sides
  → Change-of-direction agility (ladders,
    reaction drills, lateral bounds)
  → Single-leg strength/balance → off-balance
    fielding, throwing, and the PIVOT

  CORE + MOBILITY:
  → Strong, stable CORE → accurate across-the-body
    throws + absorbing pivot contact
  → Hip/ankle/thoracic mobility → field low,
    throw free

  ARM CARE:
  → Rotator cuff / scapular work (many throws
    from awkward angles, even if shorter)

  IDEAL: quick, agile, balanced, resilient —
  NOT big and slow.`,
        },
      },
      incident: {
        title: "The Athletic, Quick-Twitch Second Baseman",
        when: "2010s — the modern athleticism era",
        where: "Petco Park and ballparks across the game",
        impact: "As the game emphasized athleticism and range, second base became a position for quick-twitch, agile defenders whose lateral quickness and footwork turned more balls into outs — confirming that quickness, not size, defines the position physically.",
        body: [
          "The modern second baseman is an athlete defined by quickness and agility. Players who can explode on the first step, range laterally to both sides, and organize their feet instantly to throw from any position make plays that bigger, slower fielders cannot. The position's value lies in covering ground and turning the double play, both of which reward quick-twitch athleticism, footwork, and core control far more than raw size or strength.",
          "This is why young players with great feet, lateral quickness, and body control — even if they lack the arm for shortstop or the power of a corner infielder — often find a home at second base. The training that builds a great second baseman emphasizes agility, single-leg strength and balance, core stability, and mobility. The lesson is that second base is a quickness position: build fast feet and a strong, controlled body, and the range and pivots follow.",
        ],
      },
      diagram: {
        nodes: [
          { label: "The Position's Demands", sub: "range, footwork, pivot", type: "attacker" },
          { label: "Quickness + Agility", sub: "first step, lateral, single-leg", type: "system" },
          { label: "Core + Mobility + Arm Care", sub: "off-balance throws, durability", type: "victim" },
          { label: "Range and Pivots", sub: "quick and agile wins", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Agility and quickness emphasized for middle infielders" },
        { year: 2005, event: "Change-of-direction and reaction training enter baseball development" },
        { year: 2012, event: "Quick-twitch athleticism recognized as the second-base ideal", highlight: true },
        { year: 2018, event: "Single-leg strength and core stability standard in infield training" },
        { year: 2022, event: "Mobility and arm-care programs tailored to middle infielders" },
      ],
      keyTakeaways: [
        "Second base is a quickness position — lateral agility and first-step explosiveness matter more than size",
        "Single-leg strength and balance enable fielding, throwing, and pivoting from unbalanced positions",
        "A strong, stable core powers accurate across-the-body throws and absorbs contact on the pivot",
        "Maintain mobility and throwing-arm care — second basemen make many throws from awkward angles",
      ],
      references: [
        { title: "USA Baseball: Athlete Development", url: "https://www.usabaseball.com" },
        { title: "Little League: Conditioning Basics", url: "https://www.littleleague.org/playing-rules/" },
        { title: "MLB: Middle Infield Athleticism", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-10-06-q1",
          type: "Priority",
          challenge: `  A coach is choosing a second baseman between a
  big, strong but slow-footed player and a smaller,
  quick, agile one with great footwork.`,
          text: "Which physical qualities most define a good second baseman?",
          options: [
            "Size and raw power above all",
            "Quickness and agility — lateral quickness, first-step explosiveness, and footwork to cover ground and turn the double play",
            "Long-distance running endurance",
            "Maximum throwing-arm strength",
          ],
          correctIndex: 1,
          explanation: "Second base rewards quickness and agility over size and power. Lateral quickness to range to both sides, first-step explosiveness, and the footwork to organize the feet and turn the double play are what create value at the position. A smaller, quicker, more agile player typically makes a better second baseman than a bigger, stronger, slower one. It's fundamentally a quick-twitch position.",
        },
        {
          id: "baseball-10-06-q2",
          type: "Single-Leg",
          challenge: `  A second baseman often has to field a ball on the
  move and throw from an unbalanced position, or
  plant on one leg to pivot and clear a runner.`,
          text: "Which type of training most directly supports throwing and pivoting from unbalanced positions?",
          options: [
            "Heavy two-legged squats only",
            "Single-leg strength and balance training, which enables stable fielding, throwing, and pivoting from off-balance positions",
            "Long-distance jogging",
            "Upper-body pressing only",
          ],
          correctIndex: 1,
          explanation: "Single-leg strength and balance training directly translate to the second baseman's reality of fielding and throwing from unbalanced positions, planting to pivot, and clearing runners on the double play. Because so many plays happen on the move or on one leg, the ability to be strong and stable in single-leg positions is essential. It complements the agility and core work that define the position's training.",
        },
        {
          id: "baseball-10-06-q3",
          type: "Core",
          challenge: `  A second baseman ranges up the middle, plants, and
  has to throw all the way across his body to first
  base while off-balance.`,
          text: "Why is core strength especially important for a second baseman?",
          options: [
            "It isn't — only the arm matters for throwing",
            "A strong, stable core powers accurate across-the-body and off-balance throws and helps absorb contact on the pivot",
            "Core strength only helps hitting",
            "It only matters for outfielders",
          ],
          correctIndex: 1,
          explanation: "The second baseman frequently throws across his body and from off-balance positions, and absorbs contact on the pivot — all of which demand a strong, stable core. The core transfers energy from the lower body to the throwing arm and stabilizes the body during awkward throws and collisions. That's why core and rotational strength are a central training priority for the position.",
        },
        {
          id: "baseball-10-06-q4",
          type: "Arm Care",
          challenge: `  Because the throw to first is shorter from second
  base, a young second baseman assumes he doesn't
  need to do any throwing-arm care.`,
          text: "Why should a second baseman still prioritize throwing-arm care despite the shorter throw?",
          options: [
            "He shouldn't — the short throw means arm care is unnecessary",
            "Second basemen make many throws from awkward angles and off-balance positions, so rotator-cuff and scapular care protect the arm from those stresses",
            "Arm care only matters for pitchers",
            "The arm cannot be injured at second base",
          ],
          correctIndex: 1,
          explanation: "Even though the throw to first is shorter, second basemen make a high volume of throws from awkward angles, on the move, and off-balance — stresses that can injure the shoulder over time. Rotator-cuff and scapular strengthening protect the arm from these demands. Arm care isn't only for pitchers or players with long throws; it's important for any fielder who throws frequently from difficult positions.",
        },
      ],
    },
  },

  // ─── baseball-10-07: Covering the Bag ─────────────────────────────────────────
  {
    epochId: "baseball-10",
    wonder: {
      name: "Citi Field",
      location: "Queens, New York",
      era: "Modern",
      emoji: "🛡️",
    },
    id: "baseball-10-07",
    order: 7,
    title: "Covering Second on Steals and Bunts",
    subtitle: "Who covers, the tag, and reading the situation",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-10-badge-07", name: "Bag Cover", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "On a steal, someone has to be at the bag — and the keystone pair decides who, every single pitch.",
      year: 1985,
      overview: [
        "When a runner attempts to steal second base, the second baseman and shortstop must have already decided who covers the bag to take the catcher's throw and apply the tag. The decision is usually based on the batter's handedness and the pitch being thrown, because whoever isn't covering needs to be able to field a batted ball, and the coverage is set so the fielder more likely to be pulled out of position by the hitter stays home. The two middle infielders signal each other before the pitch (often with an open or closed mouth behind the glove) so both know the plan.",
        "The conventional coverage is set by the batter's handedness, keeping the fielder more likely to get a batted ball in position:\n- Right-handed batter — the shortstop covers second (the second baseman shades toward first to field a pulled grounder).\n- Left-handed batter — the second baseman covers second (the shortstop holds the left side).\nTeams adjust for the hitter, the pitch, and the game plan, but the principle is that coverage is pre-arranged and communicated every pitch.",
        "The tag on a steal must be quick and low:\n- The covering fielder straddles or sets up at the bag and gives the catcher a target.\n- Catch the throw, then sweep the tag down to the front edge of the bag where the runner slides in.\n- Apply it low and let the runner slide into it.\nAs with all tag plays, catching the ball comes first — a great tag means nothing if the ball isn't secured. The second baseman also covers second on certain bunt plays whenever his assignment dictates.",
      ],
      technical: {
        title: "Coverage Responsibilities and the Steal Tag",
        body: [
          "Who covers (conventional): right-handed batter → shortstop usually covers second, second baseman shades toward first to field a pulled grounder; left-handed batter → second baseman usually covers second, shortstop holds the left side. The idea is to keep the fielder more likely to get a batted ball in position while the other takes the bag. The pair signals the plan before every pitch so there's no confusion.",
          "The tag: the covering fielder sets up at the bag, presents a target to the catcher, catches the throw, and sweeps a quick, low tag to the front edge of the bag where the runner slides in. Catch first, then tag. Straddling the bag or setting up on the throwing side are common techniques; the key is to receive the ball cleanly and get the glove down low to meet the diving or sliding runner. The second baseman also covers second on designated bunt plays.",
        ],
        codeExample: {
          label: "Second-Base Coverage on a Steal",
          code: `  WHO COVERS SECOND ON A STEAL (conventional):
  RIGHT-handed batter → SHORTSTOP covers
    (2B shades toward 1st to field a pulled grounder)
  LEFT-handed batter  → SECOND BASEMAN covers
    (SS holds the left side)
  → Logic: keep the fielder more likely to get a
    batted ball in position; the other takes the bag
  → SIGNAL each other every pitch (open/closed mouth
    behind the glove) — no confusion

  THE TAG:
  1. Set up at the bag, give the catcher a target
  2. CATCH the throw first — secure it
  3. Sweep a QUICK, LOW tag to the FRONT edge of
     the bag where the runner slides in
  4. Let the runner slide INTO the tag

  Also: 2B covers second on designated BUNT plays.`,
        },
      },
      incident: {
        title: "The Pre-Pitch Signal That Prevents Disaster",
        when: "1980s — the high-steal era",
        where: "Citi Field and ballparks across the game",
        impact: "The quiet open-mouth/closed-mouth signal between second baseman and shortstop before each pitch — deciding who covers on a steal — is a tiny ritual that prevents the catastrophe of a throw sailing into center field with no one at the bag.",
        body: [
          "Every pitch with a runner on first, the second baseman and shortstop exchange a subtle signal to decide who will cover second on a steal. It's an easily overlooked ritual, but forgetting it leads to disaster: if both fielders break for the bag (or neither does), the catcher's throw sails into center field and the runner advances to third or scores. The signal — often as simple as showing or hiding the mouth behind the glove — ensures exactly one fielder covers and the other stays to field a batted ball.",
          "The coverage decision reflects the deeper logic of the keystone partnership: keep the fielder more likely to receive a batted ball in position, and send the other to the bag. Against a right-handed pull hitter, that means the shortstop covers and the second baseman shades toward first; against a lefty, the reverse. This coordination, repeated silently every pitch, is the foundation of middle-infield defense and a habit young players must build until it's automatic.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Runner on First", sub: "steal threat", type: "attacker" },
          { label: "Pre-Pitch Signal", sub: "who covers? (handedness)", type: "system" },
          { label: "Cover the Bag, Take the Throw", sub: "catch first", type: "victim" },
          { label: "Quick Low Tag", sub: "front edge of the bag", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Coverage-by-handedness conventions standardized for middle infielders" },
        { year: 1985, event: "Open/closed-mouth signaling between 2B and SS taught universally", highlight: true },
        { year: 2000, event: "Defensive game plans refine coverage by hitter and pitch" },
        { year: 2015, event: "Pitch-by-pitch coverage cards used in pro defense" },
        { year: 2023, event: "Bigger bases and pickoff limits increase steals, raising coverage stakes" },
      ],
      keyTakeaways: [
        "On a steal, the second baseman and shortstop pre-decide who covers second — usually based on the batter's handedness",
        "Conventionally: right-handed batter → shortstop covers; left-handed batter → second baseman covers",
        "The pair signals each other every pitch (open/closed mouth) so exactly one fielder covers the bag",
        "On the steal tag, catch the throw first, then sweep a quick, low tag to the front edge of the bag",
      ],
      references: [
        { title: "USA Baseball: Middle Infield Coverage", url: "https://www.usabaseball.com" },
        { title: "Little League: Team Defense and Coverages", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Defending the Steal", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-10-07-q1",
          type: "Coverage",
          challenge: `  Runner on first, a right-handed batter at the
  plate. The runner takes off to steal second.`,
          text: "With a right-handed batter, who conventionally covers second base on the steal?",
          options: [
            "The second baseman covers; the shortstop fields",
            "The shortstop covers second base, while the second baseman shades toward the first-base side to field a pulled ground ball",
            "The pitcher covers second",
            "Nobody covers — the catcher holds the ball",
          ],
          correctIndex: 1,
          explanation: "Conventionally, with a right-handed batter, the shortstop covers second base on a steal, while the second baseman shades toward the first-base side to be in position for a pulled ground ball. The logic is to keep the fielder more likely to receive a batted ball (the second baseman, against a righty pull hitter) in position, while the shortstop takes the bag. With a left-handed batter, the assignment flips.",
        },
        {
          id: "baseball-10-07-q2",
          type: "Signal",
          challenge: `  With a runner on first, the second baseman and
  shortstop fail to communicate before the pitch.
  Both break for the bag on the steal, and the
  catcher's throw sails into center field.`,
          text: "What routine would have prevented this disaster?",
          options: [
            "Both fielders should always cover the bag together",
            "A pre-pitch signal between the second baseman and shortstop (such as open/closed mouth behind the glove) deciding who covers, so exactly one fielder goes to the bag",
            "The catcher should never throw to second",
            "The pitcher should cover second base",
          ],
          correctIndex: 1,
          explanation: "Before every pitch with a runner on first, the second baseman and shortstop signal each other — often with an open or closed mouth behind the glove — to decide who covers second. This ensures exactly one fielder breaks for the bag while the other stays to field a batted ball. Skipping the signal leads to both (or neither) covering and the throw sailing into the outfield. It's a small ritual that prevents a big disaster.",
        },
        {
          id: "baseball-10-07-q3",
          type: "The Tag",
          challenge: `  Covering second on a steal, a fielder catches the
  throw and swipes the tag up high at the runner's
  chest as he slides in low to the front of the bag.`,
          text: "Where should the tag be applied on a runner stealing second?",
          options: [
            "High at the chest — it's easier",
            "Quick and low, sweeping to the front edge of the bag where the sliding runner arrives, letting him slide into the tag",
            "On the runner's back as he passes",
            "Anywhere works equally well",
          ],
          correctIndex: 1,
          explanation: "A runner stealing second slides in low to the front edge of the bag, so the tag must be quick and low — sweeping the glove down to that front edge where the runner arrives, letting him slide into the tag. Swiping high at the chest misses the part of the runner actually reaching the base. And as always, the fielder must catch and secure the throw first; the tag only counts if the ball is held.",
        },
        {
          id: "baseball-10-07-q4",
          type: "Logic",
          challenge: `  A young player asks why coverage on a steal is
  decided by the batter's handedness rather than
  just always having the same fielder cover.`,
          text: "What's the logic behind assigning steal coverage by the batter's handedness?",
          options: [
            "It's an arbitrary tradition with no real reason",
            "It keeps the fielder more likely to receive a batted ball in position, sending the other to cover the bag — balancing coverage with the ability to field a hit",
            "The rules require it",
            "Handedness has nothing to do with coverage",
          ],
          correctIndex: 1,
          explanation: "Coverage is assigned by handedness to balance two needs: covering the bag and being able to field a batted ball. A right-handed pull hitter is more likely to hit a grounder toward the second baseman's shaded position, so the shortstop covers the bag; a lefty pull hitter pulls toward the shortstop side, so the second baseman covers. The assignment keeps the more likely fielder home while the other takes the bag — coordinated, not arbitrary.",
        },
      ],
    },
  },

  // ─── baseball-10-08: Relays, Cutoffs, and Backups ─────────────────────────────
  {
    epochId: "baseball-10",
    wonder: {
      name: "Oracle Park",
      location: "San Francisco, California",
      era: "Modern",
      emoji: "🔗",
    },
    id: "baseball-10-08",
    order: 8,
    title: "Relays, Cutoffs, and Backups",
    subtitle: "The middle-infield link on balls to the outfield",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-10-badge-08", name: "Relay Man", emoji: "🔗" },
    challengeType: "quiz",
    info: {
      tagline: "On balls into the gaps, the second baseman becomes the relay link — go get the throw, catch, turn, and fire.",
      year: 1995,
      overview: [
        "On balls hit to the outfield, the second baseman often becomes a relay or cutoff man, the link between the outfielder and the infield. On a ball into the right-center gap or down the right-field line, the second baseman or shortstop sprints into the outfield to become the relay man — receiving the outfielder's throw and quickly turning and firing to a base to keep a runner from advancing. The middle infielders split these duties: generally, on balls to the right side, the second baseman goes out for the relay while the shortstop trails as backup, and vice versa on balls to the left side.",
        "Being a good relay man comes down to:\n- Get out to the right spot quickly.\n- Give the outfielder a clear target — raised hands, calling for the ball.\n- Catch the throw on the glove side while already turning toward the infield.\n- Make a strong, accurate relay to the target base.\nThe trailing infielder lines you up and calls the play ('two!', 'three!', 'home!', or 'cut it'). Catch, turn glove-side, and throw in one motion — relays are races against fast runners.",
        "The second baseman also serves as a cutoff man and backs up bases:\n- Backs up second on throws from the catcher (on steals when the shortstop covers).\n- Backs up first on throws and pickoffs from certain angles.\n- Is part of the relay-and-backup system that prevents extra bases on errant throws.\nAs always, he must know before each pitch whether he'll be a relay man, a cutoff, a base coverer, or a backup on a ball hit to a given part of the field.",
      ],
      technical: {
        title: "Relay Footwork and Backup Assignments",
        body: [
          "As the relay man: on a ball to the right-center gap or down the right-field line, sprint to the outfield grass to a spot in line with the outfielder and the target base. Give a loud, clear target with raised hands. Catch the throw on the glove side while turning toward the infield, and fire a strong, accurate relay in one motion. The trailing infielder (shortstop) lines you up and calls the target ('two', 'three', 'home', or 'cut'). Speed and a clean catch-turn-throw win the race.",
          "Backups and the duo: generally, on a ball to the right side, the second baseman goes out for the relay and the shortstop trails as backup/communicator; on a ball to the left side, they swap. When not relaying, the second baseman backs up bases (second base on steal throws when the shortstop covers, first base on certain throws and pickoffs) to prevent overthrows from becoming extra bases. Know your job — relay, cut, cover, or back up — before the pitch.",
        ],
        codeExample: {
          label: "Second Baseman — Outfield-Ball Duties",
          code: `  BALL TO THE RIGHT-CENTER GAP / RF LINE:
  → 2B is the RELAY MAN (SS trails as backup)
    1. SPRINT out, line up: outfielder → YOU → base
    2. Raise hands, loud target
    3. CATCH glove-side while TURNING to the infield
    4. Strong, accurate RELAY in one motion
    5. SS lines you up + calls it: "TWO / THREE /
       HOME / CUT"

  BALL TO THE LEFT SIDE → SS relays, 2B backs up

  WHEN NOT RELAYING:
  → Back up 2nd on steal throws (when SS covers)
  → Back up 1st on certain throws / pickoffs
  → Prevent overthrows from becoming extra bases

  Know your job (relay / cut / cover / backup)
  BEFORE the pitch.`,
        },
      },
      incident: {
        title: "The Relay Race That Saves a Base",
        when: "1990s — fundamentals-driven defense",
        where: "Oracle Park and ballparks across the game",
        impact: "A crisp relay — outfielder to middle infielder to the base — is one of the clearest signs of a well-drilled team, routinely cutting down runners trying to stretch hits and holding others to fewer bases.",
        body: [
          "When a ball splits the gap, the difference between a double and a triple — or between a runner scoring and being thrown out — often comes down to the relay. A second baseman who sprints to the right spot, gives a clear target, and executes a clean catch-turn-throw turns a long outfield throw into two shorter, faster, more accurate throws. The trailing shortstop lines him up and directs the throw, so the relay arrives at the right base with a chance to make a play.",
          "The relay is a race against fast runners, won by footwork and teamwork. Wasted motion on the catch-and-turn, a poor target, or a miscommunication about where to throw lets runners take the extra base. Well-drilled teams practice relays until the footwork and communication are automatic. For the second baseman, mastering the relay — and knowing when he's the relay man versus the backup — is an essential part of connecting the outfield and infield into one defense.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball Splits the Gap", sub: "runner advancing", type: "attacker" },
          { label: "Relay Man Sprints Out", sub: "line up with outfielder + base", type: "system" },
          { label: "Catch, Turn, Fire", sub: "SS lines up and calls it", type: "victim" },
          { label: "Runner Held or Thrown Out", sub: "the relay wins the race", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Relay-and-cutoff systems formalized in professional coaching" },
        { year: 1980, event: "Middle-infield relay responsibilities split by field side" },
        { year: 1995, event: "Catch-turn-throw relay footwork drilled as core team defense", highlight: true },
        { year: 2010, event: "Defensive coordinators chart relay alignments by batted-ball type" },
        { year: 2020, event: "Outfield arm and relay positioning informed by tracking data" },
      ],
      keyTakeaways: [
        "On balls to the gaps, the second baseman often becomes the relay man — generally on balls to the right side",
        "Sprint to a spot in line with the outfielder and target base, give a clear target, and catch-turn-throw in one motion",
        "The trailing shortstop lines up the relay man and calls the target ('two', 'three', 'home', or 'cut')",
        "When not relaying, back up bases to keep overthrows from becoming extra bases — know your job pre-pitch",
      ],
      references: [
        { title: "USA Baseball: Relays and Cutoffs", url: "https://www.usabaseball.com" },
        { title: "Little League: Team Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Relay and Cutoff Fundamentals", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-10-08-q1",
          type: "Relay Role",
          challenge: `  A ball is smashed into the right-center field gap
  and rolls to the wall. The runner is racing
  around the bases.`,
          text: "On a ball to the right-center gap, what is the second baseman's typical role?",
          options: [
            "Stay at second base and wait",
            "Sprint into the outfield to become the relay man, taking the outfielder's throw and firing to a base — while the shortstop trails as backup",
            "Run to home plate",
            "Cover first base only",
          ],
          correctIndex: 1,
          explanation: "On a ball to the right-center gap, the second baseman typically goes out as the relay man, sprinting to a spot in line with the outfielder and the target base to receive the throw and quickly relay it to a base. The shortstop trails as the backup and communicator. Splitting balls by field side — second baseman out on the right, shortstop out on the left — is the standard middle-infield relay system.",
        },
        {
          id: "baseball-10-08-q2",
          type: "Footwork",
          challenge: `  A relay man catches the outfielder's throw, stops,
  gathers himself, takes a couple of steps, and then
  throws — and the runner takes the extra base.`,
          text: "What relay footwork would have saved time?",
          options: [
            "Catching the ball and stopping completely before throwing",
            "Catching the throw on the glove side while already turning toward the infield, then firing in one continuous motion",
            "Throwing the ball before catching it",
            "Walking the ball back to the infield",
          ],
          correctIndex: 1,
          explanation: "A relay is a race against fast runners, so the catch-turn-throw must be one continuous motion. The relay man catches the throw on his glove side while already turning toward the infield, then fires immediately. Stopping, gathering, and resetting wastes precious time and lets the runner take the extra base. Smooth, quick relay footwork — catch, turn glove-side, throw — is what wins the race.",
        },
        {
          id: "baseball-10-08-q3",
          type: "Communication",
          challenge: `  The second baseman is out in the outfield as the
  relay man, with his back partly to the infield,
  unsure which base to throw to.`,
          text: "Who helps the relay man know where to throw, and how?",
          options: [
            "No one — the relay man guesses",
            "The trailing shortstop lines him up with the target and calls out the base ('two', 'three', 'home') or 'cut'",
            "The umpire signals the base",
            "The outfielder shouts instructions",
          ],
          correctIndex: 1,
          explanation: "The trailing shortstop lines up the relay man with the target base and calls out where to throw — 'two', 'three', 'home', or 'cut' — because the relay man, focused on catching the throw and turning, can't always see the whole play. This division of labor (relay man catches and throws, trailing infielder lines up and directs) lets the relay arrive at the right base quickly with a chance to make a play.",
        },
        {
          id: "baseball-10-08-q4",
          type: "Backups",
          challenge: `  With a runner on first, the shortstop covers second
  on a steal. The second baseman, not covering, has
  to decide what to do.`,
          text: "What should the second baseman do when the shortstop covers second on a steal?",
          options: [
            "Stand still and watch",
            "Back up the throw to second base, in case it gets past the shortstop, to keep the runner from advancing further",
            "Run to cover third base",
            "Leave the field",
          ],
          correctIndex: 1,
          explanation: "When the shortstop covers second on a steal, the second baseman backs up the throw — positioning behind the bag so that if the catcher's throw gets past the shortstop, he can keep the runner from advancing to third. Backing up throws is a key part of the second baseman's job whenever he's not the one covering. A fielder is rarely idle when the ball is in play; there's almost always a backup responsibility.",
        },
      ],
    },
  },

  // ─── baseball-10-09: Situational IQ ───────────────────────────────────────────
  {
    epochId: "baseball-10",
    wonder: {
      name: "Dodger Stadium",
      location: "Los Angeles, California",
      era: "Modern",
      emoji: "🧠",
    },
    id: "baseball-10-09",
    order: 9,
    title: "Second Base Situational IQ",
    subtitle: "Double play or sure out, depth, and knowing the play",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-10-badge-09", name: "Heads-Up", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "The best second basemen have already decided what to do with the ball before it's hit to them.",
      year: 2000,
      overview: [
        "A complete second baseman plays the game mentally before each pitch. The key reads:\n- How many outs and where the runners are.\n- Whether a double play is on.\n- What to do if the ball comes to him — turn two, take the sure out at first, get the lead runner, or check a runner and throw to first.\nWith a runner on first and fewer than two outs the default is to turn two — but on a slow roller or a big jump, the sure out beats forcing a double play that gets nobody.",
        "Depth and positioning flow from the situation:\n- Double-play depth with a runner on first; infield in to cut down a run; guarding against specific hitters.\n- Runner speed — a fast runner can make the double play impossible, so take the sure out.\n- Score — in a blowout, the sure out; in a tie game late, the run-saving play.\nThese judgments must be made before the pitch so the reaction is instant when the ball arrives.",
        "Communication ties it together. The second baseman coordinates coverage with the shortstop (who covers on steals, who relays), reminds the first baseman and pitcher of responsibilities, confirms the number of outs, and signals positioning. Knowing the situation — score, inning, outs, runners, count, the hitter's tendencies, and the runners' speed — and translating it into a pre-made plan is what separates a heads-up second baseman from a reactive one. Like the whole infield, the position is mental as much as physical.",
      ],
      technical: {
        title: "Pre-Pitch Thinking at Second Base",
        body: [
          "Decide before the pitch: know the outs, the runners and their speed, whether the double play is on, and exactly what you'll do if the ball is hit to you. Default to turning two with a runner on first and fewer than two outs — but if the ball is hit slowly, the runner has a big jump, or the runner is very fast, take the sure out at first instead of forcing a double play that gets no one. Factor the score and situation.",
          "Positioning and communication: set your depth (double-play depth, infield in, normal) and lateral position for the situation and hitter. Coordinate with the shortstop on coverage and relays, remind the first baseman and pitcher of their responsibilities, and confirm the outs. The thinking is done before the pitch so the reaction is instant. A heads-up second baseman is always a step ahead of the play.",
        ],
        codeExample: {
          label: "Second Base Situational Checklist",
          code: `  EVERY PITCH, KNOW:
  ✓ Score, inning, outs, count
  ✓ Runners — where, and HOW FAST?
  ✓ Is the DOUBLE PLAY on?
  ✓ If it's hit to me → turn two? sure out? lead
    runner? check + throw to first?

  DEFAULT: runner on 1st, <2 outs → TURN TWO
  BUT take the SURE OUT instead when:
  → ball hit slowly  → runner has a big jump
  → runner is very fast → DP can't be turned

  POSITIONING:
  → DP depth / infield in / normal (by situation)
  → Adjust laterally for the hitter

  COMMUNICATE: coverage + relays with SS; remind
  1B/pitcher; confirm the outs.

  Decide BEFORE the pitch → react in an instant.`,
        },
      },
      incident: {
        title: "The Thinking Second Baseman",
        when: "2000s — the analytics-and-IQ era",
        where: "Dodger Stadium and ballparks across the game",
        impact: "The best second basemen are recognized as much for their anticipation and decision-making — knowing instantly whether to turn two or take the sure out — as for their range and hands, proving that situational IQ is a defining skill at the position.",
        body: [
          "The defining trait of a great second baseman is often mental: the ability to know, before the ball is hit, exactly what to do with it. Whether to attempt the double play or take the sure out, where to position for a given hitter, and how the runners' speed changes the calculus — these reads happen in an instant only because the thinking was done in advance. A second baseman who has to figure out the play after the ball is hit is always a step behind.",
          "Jackie Robinson and other greats combined spectacular physical skills with this anticipation, seeming to know where the ball and the play were going before anyone else. Modern data informs positioning, but the in-the-moment decisions still belong to the player. For young players, the lesson is to think the game every pitch — to know the situation, the runners, and the plan — so that when the ball comes, the body simply executes a decision already made. Situational IQ is what makes the physical tools count.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Situation", sub: "outs, runners, speed, score", type: "system" },
          { label: "Pre-Make the Decision", sub: "turn two or sure out?", type: "attacker" },
          { label: "Set Depth + Coverage", sub: "position and communicate", type: "victim" },
          { label: "React Instantly", sub: "a step ahead of the play", type: "result" },
        ],
      },
      timeline: [
        { year: 1985, event: "Situational depth and double-play reads emphasized in coaching" },
        { year: 2000, event: "Anticipation recognized as a defining middle-infield trait", highlight: true },
        { year: 2010, event: "Positioning data integrated with in-game judgment" },
        { year: 2016, event: "Slide rule changes alter double-play decision-making" },
        { year: 2023, event: "Shift restrictions return more positioning judgment to the fielder" },
      ],
      keyTakeaways: [
        "Decide before the pitch what you'll do if the ball is hit to you — turn two, sure out, or get the lead runner",
        "Default to turning two with a runner on first and fewer than two outs, but take the sure out when the double play isn't there",
        "The runners' speed, the ball's speed, and the score all change whether to attempt the double play",
        "Coordinate coverage and relays with the shortstop and confirm the outs — think the game every pitch",
      ],
      references: [
        { title: "USA Baseball: Defensive IQ and Situations", url: "https://www.usabaseball.com" },
        { title: "Little League: Situational Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Middle Infield Strategy", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-10-09-q1",
          type: "Decision",
          challenge: `  Runner on first, one out. A ground ball is hit
  slowly toward the second baseman, and the fast
  runner already has a big jump toward second.`,
          text: "Should the second baseman try to turn a double play here, or take the sure out?",
          options: [
            "Always force the double play no matter what",
            "Take the sure out at first — the slow ground ball and the fast runner's big jump make a double play unlikely, so don't risk getting nobody",
            "Throw home instead",
            "Hold the ball and concede both runners",
          ],
          correctIndex: 1,
          explanation: "The default with a runner on first and fewer than two outs is to turn two, but a slowly hit ball and a fast runner with a big jump make the double play unlikely. Forcing it risks a rushed, errant throw that gets no one. The smart play is to take the sure out at first. A heads-up second baseman reads the ball's speed and the runner's jump and chooses the sure out when the double play isn't realistically there.",
        },
        {
          id: "baseball-10-09-q2",
          type: "Anticipation",
          challenge: `  A second baseman consistently fields the ball
  cleanly but hesitates, deciding only after he has
  the ball whether to turn two or take the sure out —
  and the delay costs the play.`,
          text: "What's the fix for a second baseman who hesitates after fielding the ball?",
          options: [
            "Field the ball faster — there's no way to decide sooner",
            "Decide before the pitch what to do if the ball is hit to him, so the decision is already made when he fields it",
            "Always throw to first regardless of the situation",
            "Never attempt a double play",
          ],
          correctIndex: 1,
          explanation: "Hesitation comes from deciding after fielding the ball. The fix is anticipation: before each pitch, the second baseman should know the outs, the runners and their speed, whether the double play is on, and exactly what he'll do with the ball. With the decision made in advance, he fields and executes instantly. Thinking the game every pitch — not just reacting faster — is what eliminates the costly delay.",
        },
        {
          id: "baseball-10-09-q3",
          type: "Score",
          challenge: `  Tie game, bottom of the eighth, runner on third
  and one out. The defense must prevent the run.`,
          text: "How does the score and situation affect the second baseman's positioning and plan?",
          options: [
            "It doesn't — he plays the same way every time",
            "He plays infield in (shallow) and prepares to field a grounder and throw home to cut down the tying run, accepting reduced range",
            "He plays as deep as possible",
            "He stops paying attention to the runner on third",
          ],
          correctIndex: 1,
          explanation: "In a tie game late with a runner on third and one out, preventing that run is critical, so the infield plays in. The second baseman plays shallow and prepares to field a ground ball and throw home to cut down the run, accepting reduced range as the trade-off. The score and situation directly shape positioning and the plan — a fielder must factor them into his pre-pitch thinking every time.",
        },
        {
          id: "baseball-10-09-q4",
          type: "Communication",
          challenge: `  Before a pitch with a runner on first, the second
  baseman silently runs through coverage, relay
  responsibilities, and the number of outs with his
  shortstop and reminds the first baseman of a
  responsibility.`,
          text: "Why is this constant pre-pitch communication valuable?",
          options: [
            "It isn't — fielders should focus only on themselves",
            "Coordinating coverage and responsibilities prevents confusion (like an uncovered bag or a missed relay) and ensures everyone reacts correctly when the ball is in play",
            "It distracts the other team",
            "It's only for show",
          ],
          correctIndex: 1,
          explanation: "Constant pre-pitch communication — coordinating who covers on a steal, who relays, confirming the outs, and reminding teammates of responsibilities — prevents the breakdowns that turn routine plays into disasters, like an uncovered bag or a missed relay assignment. The middle infield works as a partnership, and that coordination ensures everyone knows their job and reacts correctly the instant the ball is in play. It's a defining habit of heads-up infielders.",
        },
      ],
    },
  },

  // ─── baseball-10-10: The Greats and Mastery ───────────────────────────────────
  {
    epochId: "baseball-10",
    wonder: {
      name: "Cooperstown",
      location: "Cooperstown, New York",
      era: "Modern",
      emoji: "🏆",
    },
    id: "baseball-10-10",
    order: 10,
    title: "The Greats and the Mastery Mindset",
    subtitle: "What the best second basemen teach about the craft",
    category: "sports",
    xp: 100,
    badge: { id: "baseball-10-badge-10", name: "Keystone Master", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "Master second base and you become the keystone — the agile, sure-handed pivot the whole infield turns on.",
      year: 2011,
      overview: [
        "The greatest second basemen share a set of pursuable traits:\n- Quick, soft hands.\n- Agile, efficient footwork to range to both sides and turn the pivot.\n- The body control to throw from any position.\n- The courage and quick release to turn two through hard slides.\n- The unselfishness to deliver perfect feeds.\n- The situational intelligence to know the play before it happens.\nJackie Robinson embodied all of it with an athleticism and intelligence that made the position an art — but the qualities, not the highlight reel, are what to study and build.",
        "Mastering second base is about skill, feel, and partnership rather than raw tools. The position's value comes from covering ground, turning the double play cleanly, and never giving away an out through a mental lapse or a botched pivot. A great second baseman makes the shortstop better through good feeds and coordination, makes the first baseman's job easier with accurate throws, and anchors the middle of the defense. That partnership and reliability are the heart of the keystone position.",
        "The mastery mindset treats second base as a craft of footwork and feel worth perfecting. That means endless repetition of fielding from every angle, pivots from every feed, and feeds from every distance; studying hitters and situations; communicating constantly with the shortstop; and bringing full focus to routine plays. The complete second baseman is quick, agile, sure-handed, unselfish, and heads-up — the keystone the whole infield turns on. Build those qualities, and you become the partner your shortstop and your pitcher trust on every play.",
      ],
      technical: {
        title: "The Complete Second Baseman — A Self-Assessment",
        body: [
          "Skills to master:\n- fielding to both sides with clean footwork\n- the pivot from every feed\n- the feed from every distance\n- covering the bag and the steal tag\n- the relay and cutoff\n- backing up bases\nEach is built through deliberate repetition from every angle and situation. Quick hands and agile feet are the through-line.",
          "Mindset to build: partnership, unselfishness, anticipation, and reliability. Make your shortstop and first baseman better with perfect feeds and accurate throws, coordinate coverage every pitch, decide before the ball is hit, and bring full focus to routine plays. Treat the position as a craft of footwork and feel — rehearse pivots and feeds with your shortstop, study hitters, and take thousands of reps. The keystone master makes the whole infield turn smoothly.",
        ],
        codeExample: {
          label: "The Complete Second Baseman — Checklist",
          code: `  GLOVE / RANGE:
  ✓ Field both sides with clean footwork
  ✓ Field and throw from any (off-balance) position

  THE DOUBLE PLAY:
  ✓ Pivot from every feed; quick release; clear
    the slide safely
  ✓ Feed the SS from every distance — catchable

  THE BAG + THROWS:
  ✓ Cover on steals (signal coverage every pitch)
  ✓ Quick, low steal tag — catch first
  ✓ Relay man on right-side gaps; back up bases

  MIND:
  ✓ Know the play BEFORE the pitch (turn two vs
    sure out); set depth; communicate with the SS
  ✓ Unselfish + reliable — make your partners better

  Build these → you are the KEYSTONE.`,
        },
      },
      incident: {
        title: "The Keystone of a Champion",
        when: "1947–1956 — Brooklyn Dodgers / 1962 Hall of Fame induction",
        where: "National Baseball Hall of Fame, Cooperstown, New York",
        impact: "Jackie Robinson's Hall of Fame career — Rookie of the Year, an MVP, a World Series title, and a place among the most important figures in the sport's history — stands as proof that a second baseman's skill, athleticism, and intelligence can be the foundation of a championship defense.",
        body: [
          "Jackie Robinson was inducted into the Hall of Fame on the strength of a career that defined complete second-base play and changed the game forever: Rookie of the Year, the 1949 NL MVP, six All-Star selections, and a central role on Brooklyn's pennant winners and 1955 World Series champion. He turned two with athletic skill, ranged to both sides, ran the bases fearlessly, and anchored the middle of championship-caliber defenses through skill, intelligence, and feel rather than raw power.",
          "His career is the argument that mastering second base — the footwork, the pivot, the feed, the partnership, and the IQ — can make a player the foundation of a winning team. For any young second baseman, the lesson is to pursue the complete craft: quick hands and agile feet, unselfish feeds and reliable throws, fearless pivots and heads-up anticipation. Become the keystone the whole infield turns on, and you become the kind of player championship defenses are built around.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Master the Skills", sub: "range, pivot, feed, relay", type: "system" },
          { label: "Build the Mindset", sub: "partnership, anticipation, talk", type: "attacker" },
          { label: "Make Your Partners Better", sub: "perfect feeds, reliable throws", type: "victim" },
          { label: "Become the Keystone", sub: "the pivot the infield turns on", type: "result" },
        ],
      },
      timeline: [
        { year: 1947, event: "Jackie Robinson breaks the color barrier and sets a new standard for complete second-base play" },
        { year: 1955, event: "Robinson anchors Brooklyn's first World Series championship" },
        { year: 2003, event: "Defensive metrics credit second-base range, pivots, and feeds" },
        { year: 1962, event: "Jackie Robinson inducted into the Baseball Hall of Fame", highlight: true },
        { year: 2020, event: "Footwork, agility, and IQ recognized as defining second-base traits" },
      ],
      keyTakeaways: [
        "The best second basemen combine quick hands, agile footwork, fearless pivots, unselfish feeds, and situational IQ",
        "Second base rewards skill, feel, and partnership over raw tools — make your shortstop and first baseman better",
        "The mastery mindset treats the position as a craft of footwork and feel: repetition, study, and constant communication",
        "Become the reliable, unselfish keystone the whole infield turns on — the foundation of a winning defense",
      ],
      references: [
        { title: "Baseball Hall of Fame: Jackie Robinson", url: "https://baseballhall.org/hall-of-famers/robinson-jackie" },
        { title: "USA Baseball: Complete Infield Development", url: "https://www.usabaseball.com" },
        { title: "MLB: The Value of Middle-Infield Defense", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-10-10-q1",
          type: "Traits",
          challenge: `  A young player wants to become a complete second
  baseman and asks which qualities to develop.`,
          text: "Which combination of traits defines the best second basemen?",
          options: [
            "Only size and arm strength",
            "Quick soft hands, agile footwork, fearless pivots, unselfish feeds, body control to throw from anywhere, and situational IQ",
            "Only running speed",
            "Only home-run power",
          ],
          correctIndex: 1,
          explanation: "The best second basemen combine quick, soft hands; agile, efficient footwork to range and pivot; the body control to throw from any position; the courage and quick release to turn two through slides; the unselfishness to deliver perfect feeds; and the situational IQ to know the play in advance. It's a complete skill set built on footwork and feel — not size or arm strength. Jackie Robinson embodied all of it.",
        },
        {
          id: "baseball-10-10-q2",
          type: "Partnership",
          challenge: `  Two second basemen field similarly, but one
  consistently delivers perfect feeds and coordinates
  coverage flawlessly, making his shortstop look
  great; the other is careless with feeds and
  communication.`,
          text: "Why is the first second baseman more valuable?",
          options: [
            "He isn't — feeds and communication don't matter",
            "Second base is a partnership — making the shortstop and first baseman better through perfect feeds and coordination is central to the position's value",
            "Only individual highlight plays matter",
            "Communication actually hurts the defense",
          ],
          correctIndex: 1,
          explanation: "Second base is fundamentally a partnership position. A second baseman who delivers perfect, turnable feeds and coordinates coverage flawlessly makes his shortstop's pivots easy and the whole middle infield function smoothly — that's central to the position's value. Carelessness with feeds and communication undermines double plays and coverage even when the individual fielding is fine. Making your partners better is a defining mark of a great second baseman.",
        },
        {
          id: "baseball-10-10-q3",
          type: "Mindset",
          challenge: `  A talented second baseman practices his hitting
  for hours but rarely drills pivots, feeds, or
  footwork, assuming his athleticism will carry his
  defense.`,
          text: "What does the mastery mindset say about this approach?",
          options: [
            "It's fine — second base requires no skill practice",
            "Second base is a craft of footwork and feel that demands endless repetition of pivots, feeds, and fielding from every angle — athleticism alone isn't enough",
            "Only hitting practice matters",
            "Practicing defense makes second basemen worse",
          ],
          correctIndex: 1,
          explanation: "The mastery mindset treats second base as a craft of footwork and feel that must be perfected through deliberate repetition — pivots from every feed, feeds from every distance, and fielding from every angle. Athleticism is the foundation, but without rehearsing the skills and studying situations, a talented player won't reach the position's potential. The greats earned their grace through relentless, detailed practice.",
        },
        {
          id: "baseball-10-10-q4",
          type: "Legacy",
          challenge: `  Jackie Robinson reached the Hall of Fame as a Rookie
  of the Year, an MVP, and a 1955 World Series champion,
  anchoring championship-caliber defenses from second
  base — and changing the game forever.`,
          text: "What does Jackie Robinson's career teach young second basemen?",
          options: [
            "That second base doesn't matter to winning",
            "That mastering the complete craft of second base — footwork, pivot, feed, partnership, and IQ — can make a player the foundation of a championship defense",
            "That only hitting gets you to the Hall of Fame",
            "That defense can't be developed through practice",
          ],
          correctIndex: 1,
          explanation: "Jackie Robinson's Hall of Fame career — built on athleticism, intelligence, and a 1955 World Series title — proves that mastering the complete craft of second base can make a player the cornerstone of a championship defense and an icon of the game. His excellence came from footwork, the pivot, the feed, the partnership with his shortstop, his daring, and his anticipation. The lesson for young players is to pursue that whole craft and become the keystone the entire infield turns on.",
        },
      ],
    },
  },
];
