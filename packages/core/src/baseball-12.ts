import type { StageConfig, EpochConfig } from "./types";

export const baseball12Epoch: EpochConfig = {
  id: "baseball-12",
  name: "Shortstop",
  subtitle: "The Captain of the Infield",
  description:
    "Shortstop is the most demanding position on the infield — the most ground to cover, the hardest throws to make, and the leadership to captain the entire defense. This complete position course builds the shortstop from the ground up: range to both sides, the deep-hole backhand and jump throw, turning the double play, charging slow rollers, covering the bag, leading cutoffs and relays, positioning the defense, and the all-around athleticism the position requires. From Little League to Ozzie Smith's thirteen Gold Gloves, you will learn to cover the middle, make the impossible throw, and become the captain every infield is built around.",
  emoji: "🪄",
  color: "indigo",
  unlocked: true,
};

export const baseball12Stages: StageConfig[] = [
  // ─── baseball-12-01: The Captain of the Infield ───────────────────────────────
  {
    epochId: "baseball-12",
    wonder: {
      name: "Busch Memorial Stadium",
      location: "St. Louis, Missouri",
      era: "Modern",
      emoji: "🪄",
    },
    id: "baseball-12-01",
    order: 1,
    title: "Shortstop — The Captain of the Infield",
    subtitle: "The most range, the hardest throws, and the leadership",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-12-badge-01", name: "The Captain", emoji: "🪖" },
    challengeType: "quiz",
    info: {
      tagline: "Shortstop is the hardest job on the infield — the most ground to cover, the toughest throws, and the captain's responsibility.",
      year: 1978,
      overview: [
        "Shortstop is widely considered the most demanding position on the infield and one of the most important on the field. The shortstop covers more ground than any other infielder — ranging deep into the hole toward third, up the middle behind second base, and everywhere between — and makes the longest, hardest infield throws, especially from deep in the hole. The position demands the best all-around defensive tools:\n- range\n- soft hands\n- a strong and accurate arm\n- footwork\n- the athleticism to make plays on the move from any position",
        "Beyond physical tools, the shortstop is the captain of the infield — and often the leader of the entire defense:\n- Positions teammates.\n- Directs cutoffs and relays.\n- Communicates coverage with the second baseman.\n- Takes charge on every play.\nBecause the position requires the most talent and the most awareness, the best athlete with the strongest leadership often plays shortstop. Teams build their defense around a great shortstop the way they build around a great pitcher.",
        "The shortstop's signature plays are among the most spectacular and difficult in the game:\n- The deep-hole backhand and throw.\n- The jump or leaping throw.\n- The double-play pivot.\n- The charging barehand on slow rollers. Ozzie Smith, 'The Wizard,' turned the position into an art form with his range, acrobatics, and leadership. This epoch builds the complete shortstop: the range and arm to cover the middle and make the impossible throw, and the intelligence and leadership to captain the defense.",
      ],
      technical: {
        title: "Why Shortstop Is the Most Demanding Infield Position",
        body: [
          "The most range and the hardest throws: the shortstop covers the largest area of any infielder — deep in the hole, up the middle, and everywhere between — and the throw from deep in the hole is the longest and most difficult an infielder makes, often requiring a plant-and-throw or a jump throw across the body. This combination of range and arm is why the position demands the best all-around tools.",
          "The captain's role: the shortstop leads the defense — positioning teammates, directing cutoffs and relays, coordinating coverage with the second baseman, and taking charge on every play. The position's physical and mental demands are why the best athlete with the highest baseball IQ and leadership often plays shortstop, and why teams build their defenses around a great one.",
        ],
        codeExample: {
          label: "Shortstop — Core Responsibilities",
          code: `  THE SHORTSTOP'S JOBS:
  ✓ The MOST RANGE on the infield (deep hole →
    up the middle → everywhere between)
  ✓ The HARDEST THROWS (deep-hole + jump throws)
  ✓ Turn + feed the DOUBLE PLAY
  ✓ CHARGE slow rollers (glove + bare-hand)
  ✓ CAPTAIN the defense: position teammates,
    lead cutoffs/relays, coordinate with the 2B
  ✓ COVER the bag on steals (situational)

  DEFINING TRAITS (the best all-around tools):
  → RANGE + soft hands + a strong, accurate ARM
  → ATHLETICISM to make plays on the move
  → LEADERSHIP + the highest baseball IQ

  Teams build a defense around a great shortstop
  the way they build around a great pitcher.`,
        },
      },
      incident: {
        title: "Ozzie Smith — The Wizard of Oz",
        when: "1978–1996 — San Diego Padres and St. Louis Cardinals",
        where: "Busch Memorial Stadium, St. Louis, Missouri",
        impact: "Ozzie Smith won thirteen consecutive Gold Gloves and is universally regarded as the greatest defensive shortstop in history — 'The Wizard' whose range, acrobatic plays, and leadership redefined what the position could be.",
        body: [
          "Ozzie Smith earned the nickname 'The Wizard of Oz' for defensive plays that seemed to defy physics. He won thirteen straight Gold Gloves, made spectacular diving and barehanded stops, and covered ground no shortstop had before — turning hits into outs with range and acrobatics that drew gasps. He famously did backflips on his way to his position, but his real magic was the consistency and brilliance of his defense over a long career.",
          "Smith's defining play came as a rookie in 1978: ranging up the middle, he leaped for a ground ball that took a sudden bad hop, reached back barehanded to snare it in midair, and threw the runner out — a play so impossible it's still replayed decades later. He is the model of the complete shortstop: extraordinary range, soft hands, a strong arm, acrobatic athleticism, and the leadership to captain a defense. For young shortstops, The Wizard is the standard of what the position can be.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball Hit Anywhere in the Middle", sub: "the most ground to cover", type: "attacker" },
          { label: "Range to the Ball", sub: "deep hole to up the middle", type: "system" },
          { label: "The Hardest Throw", sub: "plant or jump, across the body", type: "victim" },
          { label: "Out Recorded, Defense Led", sub: "the captain delivers", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Shortstop established as the most demanding infield position" },
        { year: 1978, event: "Ozzie Smith debuts and makes his legendary barehanded bad-hop play", highlight: true },
        { year: 1982, event: "Smith joins St. Louis and begins a run of defensive dominance" },
        { year: 1996, event: "Smith retires with 13 Gold Gloves, the standard at the position" },
        { year: 2013, event: "Andrelton Simmons and Statcast-era metrics redefine measuring shortstop range" },
      ],
      keyTakeaways: [
        "Shortstop is the most demanding infield position — the most range and the hardest throws",
        "It requires the best all-around tools: range, soft hands, a strong arm, footwork, and athleticism",
        "The shortstop is the captain of the infield — positioning teammates and leading cutoffs, relays, and coverage",
        "Signature plays include the deep-hole backhand throw, the jump throw, the double-play pivot, and the charging barehand",
      ],
      references: [
        { title: "Little League: Infield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Shortstop Play", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Ozzie Smith", url: "https://baseballhall.org/hall-of-famers/smith-ozzie" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-12-01-q1",
          type: "Role",
          challenge: `  A coach explains that the shortstop is the most
  demanding infield position and the captain of
  the defense.`,
          text: "Why is shortstop considered the most demanding infield position?",
          options: [
            "Because it's the closest position to home plate",
            "Because the shortstop covers the most ground and makes the longest, hardest infield throws, requiring the best all-around tools",
            "Because shortstops bat first in the order",
            "Because it requires the least athleticism",
          ],
          correctIndex: 1,
          explanation: "Shortstop is the most demanding infield position because the shortstop covers more ground than any other infielder — deep in the hole, up the middle, and everywhere between — and makes the longest, hardest throws, especially from deep in the hole. This combination of range and arm demands the best all-around defensive tools: range, soft hands, a strong accurate arm, footwork, and athleticism. It's the most talent-intensive spot on the infield.",
        },
        {
          id: "baseball-12-01-q2",
          type: "Leadership",
          challenge: `  Before and during plays, the shortstop is
  constantly positioning teammates, directing
  cutoffs, and coordinating coverage.`,
          text: "What leadership role does the shortstop typically play?",
          options: [
            "None — the shortstop only fields his position",
            "The captain of the infield and often the whole defense — positioning teammates, directing cutoffs and relays, and coordinating coverage",
            "Only calling pitches",
            "Only batting cleanup",
          ],
          correctIndex: 1,
          explanation: "The shortstop is the captain of the infield and often the leader of the entire defense — positioning teammates, directing cutoffs and relays, coordinating coverage with the second baseman, and taking charge on every play. Because the position demands the most talent and awareness, the best athlete with the strongest leadership and baseball IQ often plays shortstop, and teams build their defenses around a great one.",
        },
        {
          id: "baseball-12-01-q3",
          type: "Signature Play",
          challenge: `  A ground ball is smashed deep into the hole toward
  third base. The shortstop ranges far to his right,
  backhands it, plants, and throws across his body
  all the way to first.`,
          text: "Why is the deep-hole throw considered one of the hardest plays in baseball?",
          options: [
            "It's actually the easiest throw on the infield",
            "The shortstop is moving away from first base and must field on the backhand, then make the longest, most difficult infield throw across his body",
            "There's never a play on a ball in the hole",
            "The throw is downhill and easy",
          ],
          correctIndex: 1,
          explanation: "The deep-hole throw is among the hardest plays in baseball because the shortstop ranges far to his right (away from first base), fields the ball on the backhand, and must then plant and throw across his body all the way across the diamond — the longest, most difficult infield throw, often requiring a jump or leaping throw. It demands elite range, a strong arm, and exceptional footwork all in one play.",
        },
        {
          id: "baseball-12-01-q4",
          type: "Legacy",
          challenge: `  As a rookie, a shortstop leaps for a grounder up
  the middle that takes a sudden bad hop, reaches
  back barehanded to snare it in midair, and throws
  the runner out — a play still replayed decades later.`,
          text: "What does Ozzie Smith's career demonstrate about the shortstop position?",
          options: [
            "That shortstop requires no special skill",
            "That extraordinary range, soft hands, a strong arm, acrobatic athleticism, and leadership can turn the position into a defensive art that anchors a team",
            "That only hitting matters at shortstop",
            "That defense at shortstop can't be measured",
          ],
          correctIndex: 1,
          explanation: "Ozzie Smith — 'The Wizard,' thirteen straight Gold Gloves, and that legendary barehanded bad-hop play as a rookie — proved that shortstop can be a defensive art form. His range, soft hands, strong arm, acrobatic athleticism, and leadership redefined the position and anchored championship defenses. He's the model of the complete shortstop, demonstrating that the position rewards the highest level of all-around defensive mastery.",
        },
      ],
    },
  },

  // ─── baseball-12-02: Positioning and the Ready Position ───────────────────────
  {
    epochId: "baseball-12",
    wonder: {
      name: "Camden Yards",
      location: "Baltimore, Maryland",
      era: "Modern",
      emoji: "📍",
    },
    id: "baseball-12-02",
    order: 2,
    title: "Positioning and Leading the Defense",
    subtitle: "Depth, the ready position, and captaining alignment",
    category: "sports",
    xp: 85,
    badge: { id: "baseball-12-badge-02", name: "Field Marshal", emoji: "📍" },
    challengeType: "quiz",
    info: {
      tagline: "The shortstop doesn't just position himself — he positions the whole infield, then loads into a ready stance to cover it all.",
      year: 2005,
      overview: [
        "Positioning is doubly important for the shortstop: he must position himself optimally to cover the most ground on the infield, and as the captain, he often helps position his teammates too. The shortstop's depth and lateral position change with the situation — normal depth for the best overall range, double-play depth (in and toward second) when a double play is needed, infield in to cut down a run at the plate, and adjustments for the hitter's tendencies, power, and speed. Because the shortstop covers so much ground, being in the right spot before the pitch is essential.",
        "As the infield's captain, the shortstop frequently signals or directs the defense's alignment — waving infielders and sometimes outfielders into position based on the hitter and the game plan, and confirming the situation and coverage. This leadership role means the shortstop must know not only his own positioning but the whole defense's, reading the hitter and situation and ensuring everyone is aligned correctly. Modern teams provide positioning data, but the shortstop often executes and communicates it on the field.",
        "The ready position is critical because the shortstop has so much ground to cover. As the pitch is delivered, the shortstop assumes a low, athletic stance — feet wider than shoulder-width, knees bent, weight forward, glove out front — with a creep step timed so he's loaded and moving as the ball is struck. A shortstop caught flat-footed loses the first step that range depends on. Combining smart positioning, a well-timed creep, and explosive first-step quickness is what lets the shortstop cover the enormous area the position demands.",
      ],
      technical: {
        title: "Depth, Captaining Alignment, and the Ready Position",
        body: [
          "Depth by situation:\n- Play normal depth for the best overall range.\n- Double-play depth (in and toward second) with a runner on first and a double play needed.\n- Infield in to cut down a run at the plate.\n- Adjust laterally for the hitter's tendencies, power, and speed.\nBecause the shortstop covers the most ground, optimal positioning is especially valuable.",
          "Captaining and the ready position: as captain, help position the infield (and sometimes outfield) based on the hitter and game plan, and confirm the situation and coverage. Then load into a low, athletic ready position with a creep step timed to the pitch, so you're moving as the ball is hit. Smart positioning plus explosive first-step quickness is what allows the shortstop to cover his enormous range.",
        ],
        codeExample: {
          label: "Shortstop Positioning and Leadership",
          code: `  POSITION YOURSELF (most ground to cover):
  Normal             → best overall range
  Double-play depth  → IN + toward 2B (runner on
                       1st, DP needed)
  Infield IN         → cut the run at home
  Adjust laterally for the hitter (pull/power/speed)

  CAPTAIN THE DEFENSE:
  → Help POSITION the infield (and sometimes OF)
    by hitter + game plan
  → Confirm the situation + coverage with teammates

  READY POSITION (as the pitch is thrown):
  ✓ Low + athletic, feet wider than shoulders,
    weight forward, glove out front
  ✓ CREEP step → loaded + moving as the ball is hit
  → No flat-footed delay — RANGE depends on the
    first step

  Smart positioning + explosive first step = range.`,
        },
      },
      incident: {
        title: "The Shortstop as the Defense's Quarterback",
        when: "2005 — the positioning era",
        where: "Camden Yards and ballparks across the game",
        impact: "As data-driven positioning transformed defense, the shortstop's role as the on-field leader who aligns teammates and covers the most ground made smart positioning — both his own and the defense's — one of the most valuable skills at the position.",
        body: [
          "The shortstop has always been the infield's quarterback, and the positioning revolution amplified the role. As teams gathered detailed data on where each hitter tends to hit the ball, the shortstop — already the captain — became central to executing and communicating alignment, moving teammates into the right spots and adjusting his own positioning to cover the most likely areas. Because he covers the largest area on the infield, being in the right spot before the pitch turned more balls into outs without any extra range.",
          "Combined with a low, ready stance and an explosive first step, smart positioning is what lets a shortstop cover his enormous territory. The lesson for young shortstops is twofold: master your own positioning by situation and hitter, and embrace the leadership of aligning the defense. Being in the right place — and helping everyone else be too — is a defensive skill as valuable as range itself, and it's a decision made fresh every pitch.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read Hitter + Situation", sub: "captain's view of the field", type: "system" },
          { label: "Position Self + Teammates", sub: "depth, lateral, alignment", type: "attacker" },
          { label: "Low Ready Position", sub: "creep step, loaded", type: "victim" },
          { label: "Cover the Most Ground", sub: "positioning + first step", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Double-play depth and situational positioning formalized" },
        { year: 1980, event: "Shortstop established as the on-field alignment leader" },
        { year: 2005, event: "Data-driven positioning amplifies the shortstop's captain role", highlight: true },
        { year: 2015, event: "Statcast quantifies positioning value and shortstop range" },
        { year: 2023, event: "Shift restrictions return more positioning judgment to the shortstop" },
      ],
      keyTakeaways: [
        "The shortstop positions himself to cover the most ground and, as captain, helps align the whole defense",
        "Depth changes with the situation: normal, double-play depth, infield in, and adjustments for the hitter",
        "The low, athletic ready position with a creep step is essential because the shortstop covers so much ground",
        "Smart positioning plus explosive first-step quickness is what allows the shortstop to cover his enormous range",
      ],
      references: [
        { title: "USA Baseball: Infield Positioning and Leadership", url: "https://www.usabaseball.com" },
        { title: "Little League: Infield Coaching Guide", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Defensive Positioning", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-12-02-q1",
          type: "Captain",
          challenge: `  Before a pitch, the shortstop waves the third
  baseman a few steps toward the line and signals
  the outfield to shade toward right-center.`,
          text: "What does this illustrate about the shortstop's role?",
          options: [
            "He's overstepping — fielders should position only themselves",
            "As the captain of the defense, the shortstop helps position teammates based on the hitter and game plan, not just himself",
            "He's trying to confuse his own team",
            "Positioning others is the coach's job only",
          ],
          correctIndex: 1,
          explanation: "The shortstop is the captain of the defense, so beyond positioning himself to cover the most ground, he often helps align his teammates — waving infielders and outfielders into position based on the hitter and the game plan. This leadership role requires knowing the whole defense's positioning, not just his own. Modern teams provide positioning data, but the shortstop frequently executes and communicates it on the field.",
        },
        {
          id: "baseball-12-02-q2",
          type: "Ready Position",
          challenge: `  As the pitch is thrown, a shortstop stands upright
  and flat-footed. A ground ball in the hole gets
  past him because he can't break quickly enough.`,
          text: "Why is the ready position especially important for a shortstop?",
          options: [
            "It isn't — shortstops don't need to move much",
            "The shortstop covers the most ground, so a low, athletic stance with a creep step is essential to get the explosive first step his range depends on",
            "Standing upright gives better range",
            "Shortstops should keep their feet together",
          ],
          correctIndex: 1,
          explanation: "Because the shortstop covers more ground than any infielder, the ready position is critical: a low, athletic stance with weight forward and a creep step timed to the pitch leaves him loaded and moving as the ball is hit. A flat-footed shortstop loses the explosive first step that his enormous range depends on. Smart positioning combined with that first-step quickness is what lets the shortstop cover his territory.",
        },
        {
          id: "baseball-12-02-q3",
          type: "Double-Play Depth",
          challenge: `  Runner on first, one out. The defense wants to be
  able to turn a double play on a ground ball.`,
          text: "How should the shortstop adjust his depth in a double-play situation?",
          options: [
            "Play as deep as possible",
            "Move to double-play depth — a step or two in and toward second base — to reach the bag in time to turn or feed the double play",
            "Stand on second base",
            "Play in shallow left field",
          ],
          correctIndex: 1,
          explanation: "With a runner on first and a double play in order, the shortstop plays double-play depth: a step or two in and toward second base. This shortens his distance to the bag so he can get there in time to take a feed and pivot, or to field and feed the second baseman. It sacrifices a little range for double-play readiness — a worthwhile trade when turning two is the goal.",
        },
        {
          id: "baseball-12-02-q4",
          type: "Positioning Value",
          challenge: `  Against a hitter who almost always hits ground
  balls up the middle, a shortstop stands in his
  standard spot and a grounder rolls just out of
  reach into center field.`,
          text: "What does smart positioning teach about this play?",
          options: [
            "Positioning makes no difference; only range matters",
            "Shading toward the hitter's tendency (up the middle) would have put the shortstop in the ball's path, turning a hit into an out without any extra range",
            "Shortstops should always stand in the exact same spot",
            "Hitters hit randomly, so positioning is guesswork",
          ],
          correctIndex: 1,
          explanation: "Hitters have predictable tendencies, and the shortstop covers the most ground, so positioning is especially valuable for him. Shading toward a hitter's tendency — up the middle, in this case — puts the shortstop in the ball's most likely path, converting would-be hits into outs without needing extra range. Being in the right spot before the pitch is a defensive skill as valuable as quickness, decided fresh each pitch based on the hitter.",
        },
      ],
    },
  },

  // ─── baseball-12-03: Fielding and Footwork ────────────────────────────────────
  {
    epochId: "baseball-12",
    wonder: {
      name: "Kauffman Stadium",
      location: "Kansas City, Missouri",
      era: "Modern",
      emoji: "🧤",
    },
    id: "baseball-12-03",
    order: 3,
    title: "Fielding Ground Balls and Footwork",
    subtitle: "Range to both sides, clean hops, and the throw",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-12-badge-03", name: "Pure Range", emoji: "🧤" },
    challengeType: "quiz",
    info: {
      tagline: "Range is footwork plus a great first step — get to the ball under control and field it from a base you can throw from.",
      year: 1996,
      overview: [
        "The shortstop fields more ground balls over more territory than any infielder, so fielding and footwork are the foundation of the position. The basics match all infielders:\n- An explosive first step from the ready position.\n- An efficient route to the ball.\n- Field it out in front with the glove down, fingers at the ground.\n- Watch it into the glove and use two hands when possible.\nBut the shortstop does all this while ranging farther and throwing from harder positions than anyone else, so footwork and body control are paramount.",
        "Range to both sides defines the shortstop:\n- To the glove side (into the hole toward third) — a crossover step and often a backhand.\n- Up the middle (to the second-base side) — range left, field, and organize the feet to throw from deep.\nOn routine balls he wants to field moving toward first so momentum carries into the throw — 'rounding off' the ball and fielding it on the correct foot. The less time he has, the more he must field and throw in rhythm rather than flat-footed and resetting.",
        "Reading hops is a key skill given the long throws and quick releases the position demands. The shortstop wants to field the ball on a good hop — charging to take a long hop or staying back for a short hop, avoiding the awkward in-between hop. Getting the body under control before fielding (not overrunning the ball) allows a clean field-and-throw. Footwork after fielding — getting the feet set or throwing on the move — determines whether the long throw arrives in time. Range is ultimately footwork, body control, and a great first step combined.",
      ],
      technical: {
        title: "Fielding Mechanics and Range Footwork",
        body: [
          "Field the ball: explode on the first step, take an efficient route, and on routine balls round off the ball so you field it moving toward first, fielding out in front with the glove down and watching it into the glove. Field on the correct foot so your momentum flows into the throw. Use two hands when the play allows for a secure, quick transfer.",
          "Range and hops: to the glove side, crossover and use the backhand into the hole; up the middle, range left and organize the feet to throw from deep. Read hops — charge to a long hop or stay back for a short hop, avoiding the awkward in-between. Get the body under control before fielding rather than overrunning the ball. Footwork after the catch (set the feet, or throw on the move) determines whether the long throw beats the runner. Range is footwork plus a great first step.",
        ],
        codeExample: {
          label: "Shortstop Fielding and Range",
          code: `  FIELD THE BALL:
  1. Explode on the FIRST STEP (ready position)
  2. Efficient ROUTE; on routine balls ROUND OFF
     so you field MOVING toward first base
  3. Field OUT IN FRONT, glove down, watch it in,
     on the CORRECT FOOT (momentum → throw)
  4. Two hands when possible (secure transfer)

  RANGE TO BOTH SIDES:
  → Glove side / the HOLE → crossover + BACKHAND
  → Up the MIDDLE → range left, organize the feet
    to throw from deep

  READ THE HOP:
  → CHARGE a long hop or STAY BACK for a short hop
  → Avoid the awkward IN-BETWEEN hop
  → Get UNDER CONTROL — don't overrun the ball

  RANGE = footwork + body control + first step.`,
        },
      },
      incident: {
        title: "The Range That Defines a Shortstop",
        when: "1996 — the highlight-reel era",
        where: "Kauffman Stadium and ballparks across the game",
        impact: "From Ozzie Smith to Omar Vizquel to Andrelton Simmons, the greatest shortstops separated themselves through range — getting to balls others couldn't, built on explosive first steps, efficient routes, and footwork that turned difficult chances into outs.",
        body: [
          "What separates a great shortstop from a good one is range — the ability to get to balls that others can't reach and turn them into outs. That range is built not just on speed but on an explosive first step, efficient routes, body control, and the footwork to field and throw from any position. Shortstops like Omar Vizquel and Andrelton Simmons made plays look routine that were anything but, because their fundamentals let them cover an enormous area cleanly.",
          "The lesson is that range is a skill, not just a gift. A great first step (from a good ready position and anticipation), an efficient route, the body control to field under control, and the footwork to throw from deep all combine to create range. Young shortstops build it through endless ground-ball repetition from every angle — to the hole, up the middle, on the move — until fielding and throwing flow as one rhythmic motion. Footwork and body control are what turn athleticism into range.",
        ],
      },
      diagram: {
        nodes: [
          { label: "First Step from Ready", sub: "explode to the ball", type: "system" },
          { label: "Efficient Route, Read the Hop", sub: "field moving toward first", type: "attacker" },
          { label: "Field on the Correct Foot", sub: "momentum into the throw", type: "victim" },
          { label: "The Long Throw, Out Recorded", sub: "range becomes an out", type: "result" },
        ],
      },
      timeline: [
        { year: 1980, event: "Crossover and backhand range techniques standardized for shortstops" },
        { year: 1996, event: "Omar Vizquel's acrobatic range extends the standard at the position", highlight: true },
        { year: 2002, event: "Footwork-for-momentum fielding emphasized in development" },
        { year: 2013, event: "Statcast quantifies shortstop range and route efficiency" },
        { year: 2020, event: "Range and reaction training refined with technology" },
      ],
      keyTakeaways: [
        "The shortstop fields the most ground balls over the most territory, so footwork and body control are the foundation",
        "On routine balls, round off the route to field moving toward first so momentum carries into the throw",
        "Range to both sides uses crossovers and backhands into the hole and organized footwork up the middle",
        "Read hops to field a good bounce, get under control before fielding, and let footwork carry the long throw — range is footwork plus a great first step",
      ],
      references: [
        { title: "USA Baseball: Infield Fielding Mechanics", url: "https://www.usabaseball.com" },
        { title: "Little League: Fielding Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Shortstop Defense", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-12-03-q1",
          type: "Footwork",
          challenge: `  On a routine ground ball, a shortstop runs straight
  at the ball and fields it flat-footed, then has to
  stop, gather, and reset before making the long
  throw to first — and the runner beats it.`,
          text: "What footwork would make the routine play faster?",
          options: [
            "Field flat-footed but throw harder",
            "Round off the route to field the ball moving toward first base, on the correct foot, so momentum carries into the throw in one motion",
            "Wait for the ball to stop rolling",
            "Field the ball behind his body",
          ],
          correctIndex: 1,
          explanation: "Fielding flat-footed and then resetting wastes time, especially with the shortstop's long throw to first. The shortstop should round off the route — taking a slightly curved path so he fields the ball moving toward first base, on the correct foot — so his momentum carries into the throw in one fluid motion. Good footwork turns the field-and-throw into a single rhythmic action, which is faster and more accurate over the long throw.",
        },
        {
          id: "baseball-12-03-q2",
          type: "Range",
          challenge: `  A hard ground ball is hit up the middle, to the
  shortstop's left and behind second base, forcing
  him to range far and field on the move.`,
          text: "What must the shortstop do after fielding a ball ranging up the middle?",
          options: [
            "Nothing — there's never a play up the middle",
            "Organize his feet to throw from deep, since he's moving away from first base and must generate a strong throw from an unbalanced position",
            "Throw immediately without any footwork",
            "Run the ball back to the infield",
          ],
          correctIndex: 1,
          explanation: "Ranging up the middle, the shortstop moves to his left and away from first base, so after fielding he must quickly organize his feet — often planting and throwing from deep, or making a quick footwork adjustment — to generate a strong throw from an unbalanced position. This is one of the position's hardest plays. The footwork to throw from deep and on the move is what gives a shortstop real range up the middle.",
        },
        {
          id: "baseball-12-03-q3",
          type: "Hops",
          challenge: `  A ground ball is hit to the shortstop. He can read
  the bounces and either charge to catch a long hop,
  stay back for a short hop, or get caught at an
  awkward in-between bounce.`,
          text: "How should the shortstop play the hops on a ground ball?",
          options: [
            "Always field the in-between hop",
            "Read the bounces and adjust to field a good hop — charging a long hop or staying back for a short hop, avoiding the awkward in-between",
            "Close his eyes and hope",
            "Field every ball the exact same way regardless of the hop",
          ],
          correctIndex: 1,
          explanation: "The shortstop reads the bounces and adjusts his footwork to field a good hop — charging forward to catch a long hop as it rises, or staying back to take a short hop — while avoiding the awkward in-between hop that handcuffs fielders. Reading and playing hops is especially important for the shortstop because his long throws and quick releases leave no margin for a bobbled bad hop. It's a core fielding skill.",
        },
        {
          id: "baseball-12-03-q4",
          type: "Range as Skill",
          challenge: `  A coach tells a young shortstop that range isn't
  just about how fast he runs.`,
          text: "What does range at shortstop actually depend on?",
          options: [
            "Only raw running speed",
            "An explosive first step, efficient routes, body control, and the footwork to field and throw from any position — footwork and a great first step, not just speed",
            "Only arm strength",
            "Only height",
          ],
          correctIndex: 1,
          explanation: "Range is a skill, not just a gift of speed. It's built on an explosive first step (from a good ready position and anticipation), efficient routes to the ball, the body control to field under control, and the footwork to throw from any position. Great shortstops like Ozzie Smith and Omar Vizquel had range because their fundamentals let them cover an enormous area cleanly. Footwork and a great first step — not just raw speed — create range.",
        },
      ],
    },
  },

  // ─── baseball-12-04: The Deep Hole and the Jump Throw ─────────────────────────
  {
    epochId: "baseball-12",
    wonder: {
      name: "Globe Life Field",
      location: "Arlington, Texas",
      era: "Modern",
      emoji: "🦘",
    },
    id: "baseball-12-04",
    order: 4,
    title: "The Deep Hole and the Jump Throw",
    subtitle: "The backhand, the plant, and the leaping throw",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-12-badge-04", name: "The Hole", emoji: "🦘" },
    challengeType: "quiz",
    info: {
      tagline: "The play in the deep hole is the shortstop's masterpiece — backhand it, plant, and unleash the longest throw on the infield.",
      year: 1996,
      overview: [
        "The signature play of a shortstop is the ball deep in the hole toward third. He ranges far to his right, backhands the ball at full extension, then makes the longest, hardest throw on the infield — all the way to first — while his momentum carries him away from the target. It combines three elite tools:\n- Elite range to reach it.\n- Soft backhand hands to field it.\n- A powerful, accurate arm to complete it.\nThat's why shortstops need the best all-around tools.",
        "There are two main ways to make the throw from the deep hole:\n- Plant-and-throw (the classic) — after the backhand, plant hard on the right foot to stop momentum and build a base, then fire across the body to first.\n- Jump throw (leaping throw) — on balls hit so hard and deep there's no time to plant, catch and throw while leaping and turning in the air, using the jump's momentum for arm strength (Derek Jeter made it famous).\nThe shortstop reads the ball off the bat to decide which is needed — a slower ball allows the plant, a screamer forces the jump.",
        "Both throws demand exceptional arm strength, footwork, and timing. The plant-and-throw requires a strong enough plant to convert backward momentum into a forward throw; the jump throw requires the athleticism to throw accurately while airborne. The shortstop must read the ball off the bat to decide which is needed — a slightly slower ball allows a plant-and-throw, while a screamer deep in the hole forces the jump throw. Mastering the deep-hole play, the hardest in the infielder's repertoire, is what defines a great defensive shortstop.",
      ],
      technical: {
        title: "The Plant-and-Throw and the Jump Throw",
        body: [
          "Plant-and-throw: after backhanding the ball deep in the hole, plant hard on the right foot to stop the momentum carrying you away from first, creating a strong base. Then throw across your body all the way to first, using the planted leg to generate power. This is the standard deep-hole throw when there's enough time to plant.",
          "Jump throw: on a ball hit so hard and deep that there's no time to plant, catch the ball and throw while leaping and turning in the air toward first base, using the momentum of the jump and turn to generate arm strength. Made famous by Derek Jeter, the jump throw is an athletic, advanced play. Read the ball off the bat to choose: a plant-and-throw when there's time, a jump throw on the hardest, deepest balls. Both demand elite arm strength, footwork, and timing.",
        ],
        codeExample: {
          label: "Throwing from the Deep Hole",
          code: `  BALL DEEP IN THE HOLE (toward third):
  1. RANGE far right, BACKHAND it at full extension

  THEN CHOOSE THE THROW:
  ── PLANT-AND-THROW (enough time) ──
   2a. PLANT hard on the RIGHT foot → stop the
       momentum, create a strong base
   3a. Throw ACROSS THE BODY to first (planted leg
       generates power)

  ── JUMP THROW (no time to plant; screamer) ──
   2b. Catch + THROW while LEAPING and TURNING in
       the air toward first
   3b. Use the jump + turn momentum for arm strength
       (Derek Jeter made this famous)

  READ the ball off the bat → time = plant; hardest
  + deepest = jump. Both need elite arm + footwork.`,
        },
      },
      incident: {
        title: "The Jump Throw from the Hole",
        when: "1996–2014 — Derek Jeter's career",
        where: "Globe Life Field and ballparks across the game",
        impact: "Derek Jeter's signature jump throw from deep in the hole — fielding the ball, leaping, and throwing across his body in midair to nip the runner — became one of the most recognizable plays in baseball, showcasing the athleticism the deep-hole throw demands.",
        body: [
          "Derek Jeter made the jump throw from the hole his trademark. Ranging deep to his right, he would field the ball on the backhand and, with no time to plant and set, leap into the air, turn his body toward first base, and fire across the diamond while airborne — using the momentum of the jump to power the throw and nipping the runner by a step. The play became so associated with him that it's often simply called 'the Jeter jump throw.'",
          "The jump throw exists because some balls deep in the hole are hit too hard to allow a plant-and-throw — there's simply no time to stop the momentum and reset. The shortstop must generate the throw from an airborne, turning position, which requires extraordinary athleticism, arm strength, and timing. Along with the plant-and-throw, it's part of the deep-hole repertoire every shortstop must develop. Reading which play the ball demands, and executing it, is the essence of the position's hardest challenge.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball Deep in the Hole", sub: "range far right, backhand", type: "attacker" },
          { label: "Read the Ball Off the Bat", sub: "time to plant, or not?", type: "system" },
          { label: "Plant-and-Throw or Jump Throw", sub: "convert momentum to a throw", type: "victim" },
          { label: "The Longest Throw, Out Recorded", sub: "the shortstop's masterpiece", type: "result" },
        ],
      },
      timeline: [
        { year: 1980, event: "Plant-and-throw from the hole established as the standard deep play" },
        { year: 1996, event: "Derek Jeter's jump throw from the hole becomes a signature play", highlight: true },
        { year: 2002, event: "Deep-hole footwork and throwing drilled in shortstop development" },
        { year: 2013, event: "Statcast measures shortstop arm strength and deep-hole conversions" },
        { year: 2020, event: "Jump-throw and plant-throw technique refined with biomechanics" },
      ],
      keyTakeaways: [
        "The deep-hole play — range right, backhand, and the longest infield throw across the body — is the shortstop's signature",
        "The plant-and-throw stops backward momentum on a hard right-foot plant, then throws across the body to first",
        "The jump throw, used when there's no time to plant, throws while leaping and turning in the air (Derek Jeter's trademark)",
        "Read the ball off the bat to choose: plant-and-throw with time, jump throw on the hardest, deepest balls — both need elite arm and footwork",
      ],
      references: [
        { title: "USA Baseball: Shortstop Throwing Mechanics", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Derek Jeter", url: "https://baseballhall.org/hall-of-famers/jeter-derek" },
        { title: "MLB: Shortstop Defense", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-12-04-q1",
          type: "Plant-and-Throw",
          challenge: `  A shortstop ranges deep into the hole, backhands
  the ball, and has just enough time to set before
  throwing all the way to first.`,
          text: "On the plant-and-throw from the deep hole, what does planting the right foot accomplish?",
          options: [
            "Nothing — the plant is just for show",
            "It stops the momentum carrying him away from first and creates a strong base to throw across his body with power",
            "It signals the runner to stop",
            "It makes the throw shorter",
          ],
          correctIndex: 1,
          explanation: "After backhanding a ball deep in the hole, the shortstop is moving away from first base. Planting hard on the right foot stops that backward momentum and creates a strong, stable base from which to throw across his body all the way to first, with the planted leg generating power. Without the plant, the throw would be weak and inaccurate. The plant-and-throw is the standard deep-hole play when there's time to set.",
        },
        {
          id: "baseball-12-04-q2",
          type: "Jump Throw",
          challenge: `  A ball is smashed so hard and deep into the hole
  that the shortstop fields it on the backhand with
  no time to plant and set his feet.`,
          text: "How can the shortstop still make the throw to first when there's no time to plant?",
          options: [
            "He can't — the play is impossible",
            "Use a jump throw — catch the ball and throw while leaping and turning in the air toward first, using the jump's momentum to generate arm strength",
            "Throw the ball underhand to second base",
            "Hold the ball and concede the hit",
          ],
          correctIndex: 1,
          explanation: "On a ball hit too hard and deep to allow a plant-and-throw, the shortstop uses a jump throw — catching the ball and throwing while leaping and turning his body toward first base in midair, using the momentum of the jump and turn to power the throw. Derek Jeter made this play famous. It's an athletic, advanced technique for the hardest, deepest balls when there's simply no time to stop and set.",
        },
        {
          id: "baseball-12-04-q3",
          type: "Reading the Ball",
          challenge: `  Two balls are hit deep into the hole: one hit
  moderately hard, one absolutely smashed. The
  shortstop reaches both on the backhand.`,
          text: "How does the shortstop decide between a plant-and-throw and a jump throw?",
          options: [
            "Always use the jump throw",
            "Read the ball off the bat — a moderately hit ball leaves time to plant and throw, while the hardest, deepest balls force the jump throw",
            "Always use the plant-and-throw regardless",
            "The decision is random",
          ],
          correctIndex: 1,
          explanation: "The shortstop reads the ball off the bat to choose the throw. A ball hit moderately hard leaves enough time to plant and throw from a strong base, which is more controlled and accurate. The hardest, deepest balls give no time to plant, forcing the jump throw. Reading the speed and depth of the ball and instantly choosing the right technique is part of mastering the deep-hole play.",
        },
        {
          id: "baseball-12-04-q4",
          type: "Difficulty",
          challenge: `  A coach calls the deep-hole play the shortstop's
  "masterpiece" and the hardest play in the
  infielder's repertoire.`,
          text: "Why is the deep-hole play so difficult?",
          options: [
            "It's actually the easiest infield play",
            "It combines elite range, a backhand catch at full extension, and the longest infield throw across the body while moving away from the target",
            "There's never a throw involved",
            "It only requires running speed",
          ],
          correctIndex: 1,
          explanation: "The deep-hole play is the hardest in the infielder's repertoire because it combines three elite skills in one play: the range to get far to the right, a soft backhand catch at full extension, and the longest, most difficult infield throw — across the body, all the way to first, while momentum carries the shortstop away from the target. Mastering it, with either the plant-and-throw or the jump throw, defines a great defensive shortstop.",
        },
      ],
    },
  },

  // ─── baseball-12-05: Building the Shortstop's Body ────────────────────────────
  {
    epochId: "baseball-12",
    wonder: {
      name: "Chase Field",
      location: "Phoenix, Arizona",
      era: "Modern",
      emoji: "💪",
    },
    id: "baseball-12-05",
    order: 5,
    title: "Building the Shortstop's Body",
    subtitle: "All-around athleticism, arm strength, and agility",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-12-badge-05", name: "Total Athlete", emoji: "🏃" },
    challengeType: "quiz",
    info: {
      tagline: "Shortstop demands the most complete athlete on the infield — range, arm, agility, and the body control to do it all on the move.",
      year: 2013,
      overview: [
        "Shortstop requires the most complete physical package of any infield position. Covering the most ground, making the hardest throws, and fielding from every conceivable spot, it demands a blend of:\n- Range — lateral quickness and first-step explosiveness.\n- Arm strength — for the longest, hardest infield throws.\n- Agility and body control — to field on the move and throw from off-balance positions.\n- Overall athleticism.\nWhere other infield positions can lean on one or two standout tools, shortstop needs them all.",
        "Range and quickness come first:\n- Lateral quickness, first-step explosiveness, and change-of-direction agility — built through reaction, lateral-movement, and footwork drills.\n- Single-leg strength and balance — for fielding and throwing off-balance, planting in the hole, and the jump throw.\n- Strong legs and a powerful core — to power the explosive first step and the throws.\nThe shortstop is fundamentally a quick, agile, explosive athlete.",
        "Arm strength sets shortstop apart from second base. The shortstop must make the longest, hardest infield throws — from deep in the hole, across the body, and airborne — so a strong, durable throwing arm is essential, built through sound mechanics, long-toss, and rotator-cuff and scapular strengthening. Core strength powers the across-the-body and jump throws; flexibility and mobility (hips, ankles, thoracic spine, shoulder) keep the fielding low and the arm free and healthy. The shortstop's ideal body combines a second baseman's quickness with a third baseman's arm — the complete infield athlete.",
      ],
      technical: {
        title: "Training Priorities for Shortstops",
        body: [
          "Range, quickness, and agility: prioritize first-step explosiveness, lateral quickness, and change-of-direction agility (reaction drills, lateral movement, footwork ladders). Single-leg strength and balance are essential for fielding and throwing from off-balance positions, planting in the hole, and the jump throw. Strong legs and a powerful core drive the first step and the throws.",
          "Arm strength and durability: build the throwing arm through sound mechanics, a long-toss program, and rotator-cuff and scapular strengthening for the longest, hardest infield throws. Core strength powers across-the-body and jump throws; hip, ankle, thoracic, and shoulder mobility keep the fielding low and the arm free and healthy. The shortstop needs the complete package — a second baseman's quickness and agility plus a third baseman's arm strength.",
        ],
        codeExample: {
          label: "Shortstop Body-Building Priorities",
          code: `  THE MOST COMPLETE INFIELD ATHLETE:

  RANGE / QUICKNESS / AGILITY:
  → First-step explosiveness, lateral quickness
  → Change-of-direction agility (reaction drills,
    lateral work, footwork ladders)
  → Single-leg strength/balance → off-balance
    fielding + throwing, the PLANT, the JUMP THROW
  → Strong legs + core → first step + throws

  ARM STRENGTH + DURABILITY (sets SS apart from 2B):
  → Sound mechanics + long-toss → the LONGEST,
    hardest infield throws
  → Rotator cuff / scapular care for durability
  → Core → across-the-body + jump throws

  MOBILITY:
  → Hip / ankle / thoracic / shoulder → field low,
    throw free + healthy

  IDEAL = a 2B's quickness + a 3B's arm.`,
        },
      },
      incident: {
        title: "The Complete Athlete at Shortstop",
        when: "2013 — the modern athleticism era",
        where: "Chase Field and ballparks across the game",
        impact: "Modern shortstops like Andrelton Simmons combined elite range, a cannon arm, and acrobatic athleticism — the complete physical package that allowed them to make plays no one else could and reset the standard for defensive value at the position.",
        body: [
          "The modern shortstop is the most complete athlete on the infield. Players like Andrelton Simmons combined extraordinary range, a powerful and accurate arm, and the agility and body control to make acrobatic plays from any position — fielding on the move, throwing from the hole and from the air, and converting chances no other shortstop could reach. Defensive metrics confirmed that this complete package saved enormous numbers of runs, making elite shortstop defense one of the most valuable commodities in the game.",
          "Their training reflects the position's all-around demands: quickness and agility for range, single-leg strength for off-balance throws, a strong arm built through long-toss and arm care, and core and mobility work to tie it together. The lesson for young shortstops is that the position rewards the complete athlete — there's no single tool to lean on. Build range, arm, agility, and body control together, and you develop the physical foundation to play the most demanding position on the infield.",
        ],
      },
      diagram: {
        nodes: [
          { label: "The Position's Demands", sub: "range, hardest throws, on the move", type: "attacker" },
          { label: "Range + Quickness + Agility", sub: "first step, lateral, single-leg", type: "system" },
          { label: "Arm Strength + Durability", sub: "long-toss, cuff care, core", type: "victim" },
          { label: "The Complete Infield Athlete", sub: "2B quickness + 3B arm", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "All-around athleticism emphasized for shortstops" },
        { year: 2005, event: "Long-toss, agility, and single-leg training standardized in development" },
        { year: 2013, event: "Andrelton Simmons sets the modern standard for the complete shortstop", highlight: true },
        { year: 2018, event: "Statcast quantifies range, arm strength, and shortstop value" },
        { year: 2022, event: "Integrated athletic-development programs tailored to shortstops" },
      ],
      keyTakeaways: [
        "Shortstop requires the most complete physical package on the infield — range, arm, agility, and body control",
        "Range and quickness come from first-step explosiveness, lateral agility, and single-leg strength for off-balance plays",
        "Arm strength sets shortstop apart — build it with sound mechanics, long-toss, and rotator-cuff care",
        "The ideal shortstop body combines a second baseman's quickness with a third baseman's arm",
      ],
      references: [
        { title: "USA Baseball: Athlete Development", url: "https://www.usabaseball.com" },
        { title: "Little League: Conditioning Basics", url: "https://www.littleleague.org/playing-rules/" },
        { title: "MLB: Shortstop Athleticism", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-12-05-q1",
          type: "Complete Package",
          challenge: `  A coach explains that shortstop demands more
  complete physical tools than any other infield
  position.`,
          text: "Why does shortstop require the most complete physical package?",
          options: [
            "Because shortstops only need to be fast",
            "Because the shortstop covers the most ground, makes the hardest throws, and fields and throws from every position — demanding range, arm, agility, and body control all together",
            "Because shortstop requires no arm strength",
            "Because the position is the least demanding",
          ],
          correctIndex: 1,
          explanation: "Shortstop demands the most complete physical package because the position requires it all: range (to cover the most ground), arm strength (for the longest, hardest throws), agility and body control (to field on the move and throw from off-balance positions), and overall athleticism. Where other infield spots can lean on one or two tools, shortstop needs every one. It's the most talent-intensive position on the infield.",
        },
        {
          id: "baseball-12-05-q2",
          type: "Arm Strength",
          challenge: `  A coach notes that while a second baseman can play
  with an average arm, a shortstop cannot.`,
          text: "Why does shortstop require more arm strength than second base?",
          options: [
            "Shortstops throw less often",
            "The shortstop makes the longest, hardest infield throws — from deep in the hole, across the body, and airborne — while second base has a much shorter throw to first",
            "There's no difference in arm requirements",
            "Second basemen never throw to first",
          ],
          correctIndex: 1,
          explanation: "Arm strength is a key difference between the two middle-infield positions. The shortstop makes the longest, hardest infield throws — from deep in the hole, across the body, and even airborne on the jump throw — so a strong, durable arm is essential. The second baseman, by contrast, has a much shorter throw to first and can play with a more average arm. That's why shortstop combines a second baseman's quickness with a stronger arm.",
        },
        {
          id: "baseball-12-05-q3",
          type: "Single-Leg",
          challenge: `  A shortstop frequently fields on the move and has
  to plant in the hole or throw while leaping for
  the jump throw.`,
          text: "Which training most directly supports these off-balance and airborne throws?",
          options: [
            "Only long-distance running",
            "Single-leg strength and balance training, plus core strength, to stabilize and power throws from off-balance and airborne positions",
            "Only upper-body pressing",
            "Only stretching",
          ],
          correctIndex: 1,
          explanation: "The shortstop constantly fields and throws from off-balance positions — planting in the hole, throwing across his body, and leaping for the jump throw. Single-leg strength and balance training, combined with a strong core, give him the stability and power to make these throws accurately. This off-balance strength is essential to the position's signature plays and complements the range, agility, and arm work.",
        },
        {
          id: "baseball-12-05-q4",
          type: "Ideal Body",
          challenge: `  A young player asks what the ideal shortstop's
  physical profile looks like compared to other
  infielders.`,
          text: "How is the ideal shortstop's body best described?",
          options: [
            "A big, slow slugger's build",
            "A combination of a second baseman's quickness and agility plus a third baseman's arm strength — the complete infield athlete",
            "Only maximum size and weight",
            "Only base-stealing speed",
          ],
          correctIndex: 1,
          explanation: "The ideal shortstop combines a second baseman's quickness and agility (for range and fielding on the move) with a third baseman's arm strength (for the longest, hardest throws) — making the shortstop the most complete athlete on the infield. The position rewards no single dominant tool but rather the full blend of range, arm, agility, and body control. Building all of these together creates the physical foundation for the most demanding infield position.",
        },
      ],
    },
  },

  // ─── baseball-12-06: Turning the Double Play ──────────────────────────────────
  {
    epochId: "baseball-12",
    wonder: {
      name: "Wrigley Field",
      location: "Chicago, Illinois",
      era: "Modern",
      emoji: "🔄",
    },
    id: "baseball-12-06",
    order: 6,
    title: "Turning the Double Play from Shortstop",
    subtitle: "The pivot, the feed, and footwork at the bag",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-12-badge-06", name: "Turn Two", emoji: "🔄" },
    challengeType: "quiz",
    info: {
      tagline: "The shortstop is half of every double play — feeding on balls to the right, pivoting on balls to the left, always clearing the runner.",
      year: 1985,
      overview: [
        "The shortstop is the other half of the keystone combination, and double plays run through him too:\n- On a grounder to the right side (to the second baseman), the shortstop covers second as the pivot man — receive the feed, touch the bag for the force, relay to first (a 4-6-3), all while clearing the sliding runner.\n- On a grounder to the left side (to himself or the third baseman), he fields or covers and feeds the second baseman (a 6-4-3).\nEither way, he's central to turning two.",
        "Pivoting at second base from the shortstop side has its own footwork. Coming across the bag to receive the second baseman's feed, the shortstop can catch and step across toward the outfield side, drag the bag, and throw to first as momentum carries him away from the runner — or use other pivots depending on the feed and the runner. The shortstop usually has a cleaner, more natural angle to first from the bag than the second baseman does, but he must still clear the runner and get rid of the ball quickly.",
        "When the shortstop is the feeder, the same principles apply as for the second baseman's feed — deliver a catchable, turnable ball, choosing by distance:\n- Underhand toss close to the bag.\n- Backhand flip from a few steps away.\n- Firmer throw from deep.\nWhether feeding or pivoting, he must protect himself with a quick release and footwork that clears the runner, especially under the modern slide rule. The double play is a partnership, and the shortstop's half is as essential as the second baseman's.",
      ],
      technical: {
        title: "Pivoting and Feeding from Shortstop",
        body: [
          "Pivot (4-6-3, ball to the right side): cover second, receive the second baseman's feed, touch the bag for the force, and relay to first. A common pivot is to catch and step across the bag toward the outfield side, dragging the bag and throwing as momentum carries you off the runner. The shortstop often has a natural angle to first, but still clears the runner and releases quickly.",
          "Feed (6-4-3, ball to the left side): fielding near the bag, feed the second baseman covering with a catchable, turnable ball chosen by distance — underhand toss close, backhand flip a few steps away, firmer throw from deep. Lead the second baseman to the bag without pulling him into the runner. Whether feeding or pivoting, protect yourself with a quick release and clearing footwork, especially under the slide rule.",
        ],
        codeExample: {
          label: "Shortstop Double Plays",
          code: `  4-6-3 (ball to the RIGHT side — SS PIVOTS):
   1. COVER second; receive the 2B's feed
   2. TOUCH the bag for the force
   3. Step ACROSS toward the outfield side, drag
      the bag, RELAY to first (momentum clears
      the runner)
   → SS often has a natural angle to first, but
     still CLEAR the runner + QUICK release

  6-4-3 (ball to the LEFT side — SS FEEDS):
   1. Field near the bag
   2. FEED the 2B covering — CATCHABLE + turnable
      (underhand close / flip a few steps /
       firmer throw from deep)
   3. LEAD the 2B to the bag, not into the runner

  Slide rule: protect yourself — quick release +
  footwork that clears the runner.`,
        },
      },
      incident: {
        title: "The Keystone Partnership in Motion",
        when: "1985 — the fundamentals era",
        where: "Wrigley Field and ballparks across the game",
        impact: "The double play — the most important defensive sequence in baseball — depends on the seamless partnership between shortstop and second baseman, each able to feed and pivot, communicate coverage, and clear runners, turning routine grounders into two outs.",
        body: [
          "The double play is the heartbeat of infield defense, and it depends on the shortstop and second baseman working as a seamless unit. Each must be able to play both roles — feeding and pivoting — because the play comes from both sides of the infield. On a ball to the right side, the shortstop covers and pivots; on a ball to the left, he fields and feeds. The two must communicate coverage, trust each other's feeds, and execute the footwork to clear runners safely under the slide rule.",
          "Great keystone combinations turn the double play with a fluency built on thousands of repetitions together. The shortstop's half — the 4-6-3 pivot and the 6-4-3 feed — is as essential as the second baseman's. Mastering both roles, choosing the right feed and pivot for each situation, and getting rid of the ball quickly to both complete the play and stay safe are what make a shortstop a complete double-play partner. The partnership, not either player alone, turns two.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ground Ball, Runner on First", sub: "double play in play", type: "attacker" },
          { label: "Right Side → SS Pivots", sub: "cover, receive, touch, relay", type: "system" },
          { label: "Left Side → SS Feeds", sub: "catchable feed to the 2B", type: "victim" },
          { label: "Two Outs, Runner Cleared", sub: "the keystone turns two", type: "result" },
        ],
      },
      timeline: [
        { year: 1920, event: "The 4-6-3 and 6-4-3 double plays become defensive staples" },
        { year: 1980, event: "Pivot and feed techniques standardized for both middle infielders" },
        { year: 1985, event: "Keystone-partnership double-play mechanics drilled as core defense", highlight: true },
        { year: 2016, event: "MLB slide rule changes double-play footwork and safety" },
        { year: 2020, event: "Quick-release pivot and feed technique emphasized" },
      ],
      keyTakeaways: [
        "The shortstop pivots the 4-6-3 (ball to the right side) and feeds the 6-4-3 (ball to the left side)",
        "On the pivot, cover second, touch the bag, and step across toward the outfield side to clear the runner as the throw carries to first",
        "When feeding, deliver a catchable, turnable ball chosen by distance and lead the second baseman to the bag, not into the runner",
        "Protect yourself with a quick release and clearing footwork — the double play is a partnership built on both roles",
      ],
      references: [
        { title: "USA Baseball: Turning the Double Play", url: "https://www.usabaseball.com" },
        { title: "Little League: Middle Infield Coaching", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Double-Play Mechanics and the Slide Rule", url: "https://www.mlb.com/official-information/umpires/official-rules" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-12-06-q1",
          type: "Pivot",
          challenge: `  A ground ball is hit to the second baseman with a
  runner on first. The second baseman flips to
  second base to start the double play.`,
          text: "What is the shortstop's role on this ball hit to the right side?",
          options: [
            "He stays at his position and watches",
            "He covers second base and becomes the pivot man — receiving the feed, touching the bag for the force, and relaying to first (a 4-6-3)",
            "He runs to cover first base",
            "He throws home",
          ],
          correctIndex: 1,
          explanation: "On a ground ball to the second baseman (the right side) with a runner on first, the shortstop covers second base and becomes the pivot man, receiving the second baseman's feed, touching the bag for the force out, and relaying to first to complete a 4-6-3 double play — all while clearing the sliding runner. The shortstop and second baseman split the feed-and-pivot roles depending on which side the ball is hit.",
        },
        {
          id: "baseball-12-06-q2",
          type: "Feed",
          challenge: `  A ground ball is hit right to the shortstop near
  the second-base bag with a runner on first.`,
          text: "What should the shortstop do on a ball he fields near the bag?",
          options: [
            "Run to first base himself",
            "Feed the second baseman covering second with a catchable, turnable ball to start a 6-4-3 double play",
            "Tag the runner and stop",
            "Throw home",
          ],
          correctIndex: 1,
          explanation: "When the shortstop fields a ground ball near the bag (the left side), he becomes the feeder, delivering a catchable, turnable ball to the second baseman covering second to start a 6-4-3 double play. He chooses the feed by distance — an underhand toss close to the bag, a backhand flip a few steps away, or a firmer throw from deeper — and leads the second baseman to the bag without pulling him into the runner.",
        },
        {
          id: "baseball-12-06-q3",
          type: "Clearing the Runner",
          challenge: `  On the pivot at second base, a shortstop wants to
  both clear the incoming sliding runner and throw
  to first from a strong position.`,
          text: "How does stepping across the bag toward the outfield side help on the pivot?",
          options: [
            "It blocks the runner from the base",
            "It tags the bag for the force, builds momentum toward first, and carries the shortstop away from the sliding runner",
            "It lets the shortstop throw home",
            "It has no effect on safety or the throw",
          ],
          correctIndex: 1,
          explanation: "A common shortstop pivot is to receive the feed while stepping across the bag toward the outfield side: this tags the bag for the force, puts the shortstop in a strong throwing position with momentum carrying toward first, and naturally moves him away from the runner sliding into the base. It accomplishes the force, the throw, and self-protection in one motion — important under the slide rule, which requires a quick release and clearing footwork.",
        },
        {
          id: "baseball-12-06-q4",
          type: "Partnership",
          challenge: `  A coach says a shortstop must be able to both feed
  and pivot the double play, not just one.`,
          text: "Why must the shortstop master both feeding and pivoting?",
          options: [
            "He only ever needs to pivot",
            "Double plays come from both sides of the infield — the shortstop feeds on balls to the left side and pivots on balls to the right, so he must execute both roles",
            "Feeding is the second baseman's job alone",
            "Pivoting is never required of a shortstop",
          ],
          correctIndex: 1,
          explanation: "Double plays come from both sides of the infield, so the shortstop must master both roles: on a ball to the left side he fields and feeds the second baseman (6-4-3), and on a ball to the right side he covers second and pivots (4-6-3). The keystone partnership requires both middle infielders to feed and pivot fluently, communicate coverage, and clear runners. Mastering both roles makes the shortstop a complete double-play partner.",
        },
      ],
    },
  },

  // ─── baseball-12-07: Charging Slow Rollers ────────────────────────────────────
  {
    epochId: "baseball-12",
    wonder: {
      name: "Petco Park",
      location: "San Diego, California",
      era: "Modern",
      emoji: "🏃",
    },
    id: "baseball-12-07",
    order: 7,
    title: "Charging Slow Rollers and the Barehand",
    subtitle: "The do-or-die play up the middle and in",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-12-badge-07", name: "Barehand", emoji: "🏃" },
    challengeType: "quiz",
    info: {
      tagline: "On a slow roller, the shortstop charges, bare-hands, and throws on the run — Ozzie Smith turned this into magic.",
      year: 1978,
      overview: [
        "Like the third baseman, the shortstop must master the do-or-die charging play on slow rollers and weakly hit ground balls. When a ball is hit softly toward the shortstop — up the middle, toward second, or in front — he must charge hard, field it (often barehanded if the ball is nearly stopped), and throw on the run to first, all in a fraction of a second. The shortstop's charging play often comes on balls he must attack while moving toward first base or up the middle, demanding the same controlled charge, barehand, and on-the-run throw as the hot corner.",
        "The technique mirrors the third baseman's do-or-die play:\n- Charge under control and circle the ball slightly so momentum carries toward first.\n- Field with the glove on a moving ball, or barehand a ball that's nearly stopped (a glove can't pick a dead ball quickly enough).\n- Time the pickup with the throwing-side foot so fielding and throwing flow in rhythm.\nThe throw is made on the run, often sidearm, prioritizing a quick release and accuracy over power — the play is a race.",
        "The shortstop's charging plays also include his famous barehand on bad hops and tough chances up the middle. Ozzie Smith's legendary rookie play — reaching back barehanded to snare a bad-hop grounder in midair — exemplifies the soft, quick hands and fearless improvisation the position rewards. Building the charging play, the barehand, and the on-the-run throw through endless repetition is what lets a shortstop turn weakly hit balls and bad hops into outs, extending the position's range to the soft stuff as well as the hard.",
      ],
      technical: {
        title: "The Charging Play and Barehand Technique",
        body: [
          "Charge and field: attack the slow roller under control, circling slightly so momentum carries toward first. On a moving ball use the glove; on a nearly-stopped or dead ball, barehand it. Time the pickup with the throwing-side foot so fielding and throwing flow in rhythm, and throw on the run with a quick sidearm release, prioritizing speed and accuracy over power.",
          "The barehand on tough chances: on bad hops and balls that can't be fielded cleanly with the glove, the shortstop's soft, quick hands allow a barehand grab to make a play — as in Ozzie Smith's legendary rookie play. This improvisational skill is built through repetition and fearless soft hands. Charging plays, barehands, and on-the-run throws extend the shortstop's range to weakly hit balls and bad hops, not just hard-hit ones.",
        ],
        codeExample: {
          label: "Charging the Slow Roller (Shortstop)",
          code: `  SLOW ROLLER / WEAK GROUNDER:
  1. CHARGE under control (not reckless)
  2. CIRCLE slightly → momentum toward first
  3. FIELD it:
     → moving ball → GLOVE
     → dead / nearly stopped → BARE-HAND
       (a glove can't pick a dead ball fast enough)
  4. TIME the pickup with the throwing-side foot
     → field + throw in RHYTHM
  5. THROW ON THE RUN, sidearm, QUICK release
     → accuracy + speed > power (it's a race)

  THE BAREHAND ON TOUGH CHANCES:
  → Soft, quick hands → barehand a bad hop to make
    a play (Ozzie Smith's legendary rookie play)
  → Built by REPETITION + fearless hands

  Extends your range to the SOFT stuff + bad hops.`,
        },
      },
      incident: {
        title: "Ozzie Smith's Barehanded Magic",
        when: "April 1978 — San Diego Padres",
        where: "Petco Park and ballparks across the game",
        impact: "Ozzie Smith's rookie barehanded play — diving for a ball up the middle that took a sudden bad hop, reaching back to snare it barehanded in midair, and throwing the runner out — is considered one of the greatest defensive plays ever, exemplifying the soft hands and improvisation the position rewards.",
        body: [
          "As a rookie in 1978, Ozzie Smith made a play that still defines defensive genius. Ranging up the middle, he dove for a ground ball that took a vicious bad hop just as he reached it. Already committed and falling away, Smith reacted with impossible quickness — reaching back with his bare hand to snare the ball out of midair behind him — then sprang up and threw the runner out at first. The play seemed to defy reflexes and physics, and it announced the arrival of 'The Wizard.'",
          "The play exemplifies the soft, quick hands and fearless improvisation that the shortstop position rewards. While few will ever make a play that spectacular, every shortstop builds the same foundational skills — charging slow rollers, bare-handing dead balls and bad hops, and throwing on the run — through relentless repetition. These plays extend a shortstop's range to weakly hit balls and bad bounces, turning would-be hits into outs. Smith's magic was the ultimate expression of skills any shortstop can develop.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Slow Roller / Bad Hop", sub: "do-or-die / improvise", type: "attacker" },
          { label: "Charge Under Control", sub: "circle, momentum to first", type: "system" },
          { label: "Bare-Hand in Rhythm", sub: "soft, quick hands", type: "victim" },
          { label: "Throw on the Run", sub: "quick release, nip the runner", type: "result" },
        ],
      },
      timeline: [
        { year: 1978, event: "Ozzie Smith's barehanded bad-hop play stuns baseball", highlight: true },
        { year: 1985, event: "Charge-and-throw rhythm drills standard in shortstop coaching" },
        { year: 1995, event: "Barehand technique on dead balls and bad hops widely taught" },
        { year: 2013, event: "On-the-run and barehand plays quantified by defensive metrics" },
        { year: 2020, event: "Charging and barehand technique refined in development" },
      ],
      keyTakeaways: [
        "The shortstop must master the do-or-die charging play on slow rollers — charge, barehand, and throw on the run",
        "Charge under control, circle toward first, and barehand a dead ball (a glove can't pick it fast enough)",
        "Time the pickup with the throwing-side foot so fielding and throwing flow in rhythm, then throw on the run",
        "Soft, quick hands enable the barehand on bad hops and tough chances — Ozzie Smith's signature skill",
      ],
      references: [
        { title: "USA Baseball: Slow Roller and Barehand Technique", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Ozzie Smith", url: "https://baseballhall.org/hall-of-famers/smith-ozzie" },
        { title: "Little League: Infield Charging Plays", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-12-07-q1",
          type: "Barehand",
          challenge: `  A weak ground ball nearly stops in the grass in
  front of the charging shortstop. He tries to
  scoop it with his glove but can't get it out
  cleanly in time.`,
          text: "How should the shortstop field a nearly-stopped ball on a do-or-die play?",
          options: [
            "Always use the glove",
            "Bare-hand it — a glove can't pick a dead ball quickly enough, so the barehand pickup is needed to field and throw in time",
            "Wait for the ball to roll again",
            "Kick the ball toward first base",
          ],
          correctIndex: 1,
          explanation: "A glove can't scoop a dead or nearly-stopped ball quickly enough on a do-or-die play, so the shortstop bare-hands it. The barehand pickup, timed with the footwork, lets him field and throw in one rhythmic motion fast enough to retire the runner. On a still-moving ball there may be time to use the glove, but a dead ball demands the bare hand — a key skill for charging plays.",
        },
        {
          id: "baseball-12-07-q2",
          type: "Rhythm",
          challenge: `  A shortstop charges a slow roller, fields it, then
  stops, sets his feet, and throws — and the runner
  beats it out.`,
          text: "What's the key to making the do-or-die charging play in time?",
          options: [
            "Always stop and set the feet before throwing",
            "Field the ball in stride, in rhythm with the throwing-side foot, so the field-and-throw is one continuous motion with a quick release on the run",
            "Throw the ball as hard as possible",
            "Field the ball flat-footed",
          ],
          correctIndex: 1,
          explanation: "The do-or-die play is a race won by rhythm. The shortstop fields the ball in stride, timed with the throwing-side foot, so fielding and throwing flow as one continuous motion with a quick release on the run. Stopping to set the feet — as natural as it feels — takes too long and lets the runner beat it out. Charge, field in rhythm, and throw on the run, all in one fluid motion.",
        },
        {
          id: "baseball-12-07-q3",
          type: "Soft Hands",
          challenge: `  Ranging up the middle, a shortstop reaches a ground
  ball that takes a sudden bad hop just as he gets
  to it, jumping off to the side.`,
          text: "What skill allows a shortstop to still make a play on a sudden bad hop?",
          options: [
            "Closing his eyes and hoping",
            "Soft, quick hands and fearless improvisation — sometimes a barehand grab — to react and snare the ball despite the bad bounce",
            "Stabbing rigidly at the ball",
            "Letting the ball go every time",
          ],
          correctIndex: 1,
          explanation: "A sudden bad hop requires soft, quick hands and fearless improvisation. The shortstop reacts to the unexpected bounce — sometimes with a barehand grab, as in Ozzie Smith's legendary rookie play — to snare the ball despite the bad hop. These reactive, improvisational skills are built through repetition and fearless soft hands, and they're what let a shortstop turn bad bounces into outs rather than errors.",
        },
        {
          id: "baseball-12-07-q4",
          type: "Range",
          challenge: `  A coach explains that charging plays and barehands
  extend a shortstop's range in a way that pure
  speed alone doesn't.`,
          text: "How do charging plays and the barehand extend a shortstop's range?",
          options: [
            "They don't — only running speed creates range",
            "They let the shortstop turn weakly hit balls, slow rollers, and bad hops into outs — extending his range to the soft stuff and tough chances, not just hard-hit balls",
            "They only matter on hard-hit balls",
            "They make the shortstop slower",
          ],
          correctIndex: 1,
          explanation: "Range isn't just about getting to hard-hit balls — it's also about converting weakly hit balls, slow rollers, and bad hops into outs. The charging play, the barehand, and the on-the-run throw extend a shortstop's effective range to the soft stuff and tough chances that pure speed alone won't handle. Mastering these plays, as Ozzie Smith did, lets a shortstop turn balls that look like sure hits into outs.",
        },
      ],
    },
  },

  // ─── baseball-12-08: Relays, Cutoffs, and Leadership ──────────────────────────
  {
    epochId: "baseball-12",
    wonder: {
      name: "Oracle Park",
      location: "San Francisco, California",
      era: "Modern",
      emoji: "🔗",
    },
    id: "baseball-12-08",
    order: 8,
    title: "Relays, Cutoffs, and Leading the Defense",
    subtitle: "The shortstop as the hub of the throwing game",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-12-badge-08", name: "The Hub", emoji: "🔗" },
    challengeType: "quiz",
    info: {
      tagline: "On balls to the outfield the shortstop is the hub — going out for relays, lining up cutoffs, and directing the whole play.",
      year: 1995,
      overview: [
        "On balls hit to the outfield, the shortstop is often the hub of the relay and cutoff system. Generally, on a ball to the left side and left-center gap, the shortstop sprints into the outfield to become the relay man — taking the outfielder's throw and quickly turning and firing to a base — while the second baseman trails as backup. On balls to the right side, the roles flip, and the shortstop may trail the second baseman, lining him up and calling the play. The shortstop's leadership and arm make him central to the throwing game.",
        "Being a good relay man means a tight sequence:\n- Get to the right spot quickly.\n- Give the outfielder a clear target.\n- Catch the throw on the glove side while turning toward the infield.\n- Make a strong, accurate relay to the target base.\nAs the trailing infielder, the shortstop lines up the relay man and calls the target ('two!', 'three!', 'home!', 'cut!'). On many cutoffs he's also the captain who reads the whole play and directs where the throw goes.",
        "The shortstop's leadership extends across the entire defense:\n- Directs cutoffs and relays.\n- Coordinates coverage with the second baseman.\n- Positions teammates and backs up bases when not the relay man.\n- Often makes or relays the key decision on where throws go.\nKnowing his assignment — relay man, trailer, cutoff director, or backup — before each pitch, and leading the execution, is a defining part of the role. He's the hub that connects the outfield and infield into one coordinated defense.",
      ],
      technical: {
        title: "Relay Footwork, Cutoff Leadership, and Backups",
        body: [
          "As the relay man (ball to the left side / left-center): sprint to a spot in line with the outfielder and the target base, give a loud, clear target, catch the throw on the glove side while turning toward the infield, and fire a strong, accurate relay in one motion. As the trailing infielder, line up the relay man and call the target ('two', 'three', 'home', 'cut').",
          "Leadership and backups: on many plays the shortstop directs the cutoffs and reads where the throw should go, because his view and captaincy make him the natural decision-maker. Coordinate coverage with the second baseman, position teammates, and back up bases when not relaying. Know your assignment — relay, trail, direct, or back up — before each pitch, and lead the defense's execution as the hub of the throwing game.",
        ],
        codeExample: {
          label: "Shortstop — Outfield-Ball Duties",
          code: `  BALL TO THE LEFT SIDE / LEFT-CENTER GAP:
  → SS is the RELAY MAN (2B trails as backup)
    1. SPRINT out: outfielder → YOU → target base
    2. Loud, clear TARGET
    3. CATCH glove-side while TURNING to the infield
    4. Strong, accurate RELAY in one motion

  BALL TO THE RIGHT SIDE → 2B relays, SS TRAILS:
  → Line up the relay man + CALL it ("two / three /
    home / cut")

  LEADERSHIP (the hub):
  → DIRECT cutoffs; read where the throw should go
  → Coordinate coverage with the 2B; position
    teammates; BACK UP bases when not relaying

  Know your job (relay / trail / direct / backup)
  BEFORE the pitch — and LEAD the execution.`,
        },
      },
      incident: {
        title: "The Shortstop at the Center of Every Throw",
        when: "1995 — fundamentals-driven defense",
        where: "Oracle Park and ballparks across the game",
        impact: "As the captain and the infielder with the strongest arm and best view, the shortstop sits at the center of the relay and cutoff system — going out for relays, directing throws, and coordinating the defense's response to balls hit anywhere on the field.",
        body: [
          "The shortstop's combination of arm strength, range, and leadership makes him the natural hub of the throwing game. On balls to the left side, he goes out as the relay man, turning a long outfield throw into two quick, accurate ones. On balls to the right, he trails and directs the second baseman. And on cutoff plays throughout the field, his view and captaincy make him a key decision-maker about where throws should go to keep runners from advancing.",
          "This central role requires both the physical skill to execute relays and the leadership to direct the defense. A shortstop who sprints to the right spot, executes a clean catch-turn-throw, and clearly communicates where throws go connects the outfield and infield into one coordinated unit. Knowing his assignment on every batted ball and leading the execution is a defining part of the shortstop's job. He's the hub through which the defense's response to outfield hits flows.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball to the Outfield", sub: "runner advancing", type: "attacker" },
          { label: "Relay or Direct", sub: "out on the left, trail on the right", type: "system" },
          { label: "Catch, Turn, Fire / Call It", sub: "the hub of the throw", type: "victim" },
          { label: "Runner Held, Defense Led", sub: "outfield + infield as one", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Relay-and-cutoff systems formalized in professional coaching" },
        { year: 1980, event: "Shortstop established as the relay hub and cutoff director" },
        { year: 1995, event: "Catch-turn-throw relay footwork and leadership drilled as core defense", highlight: true },
        { year: 2010, event: "Defensive coordinators chart relay alignments by batted-ball type" },
        { year: 2020, event: "Outfield arm and relay positioning informed by tracking data" },
      ],
      keyTakeaways: [
        "On balls to the left side and left-center, the shortstop is usually the relay man; on the right side, he trails and directs",
        "As relay man, sprint to line up with the outfielder and target, give a target, and catch-turn-throw in one motion",
        "As the captain, the shortstop directs cutoffs and reads where throws should go across the field",
        "Know your assignment — relay, trail, direct, or back up — before each pitch, and lead the defense's execution",
      ],
      references: [
        { title: "USA Baseball: Relays, Cutoffs, and Leadership", url: "https://www.usabaseball.com" },
        { title: "Little League: Team Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Relay and Cutoff Fundamentals", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-12-08-q1",
          type: "Relay Role",
          challenge: `  A ball is smashed into the left-center field gap
  and rolls to the wall. The runner is racing
  around the bases.`,
          text: "On a ball to the left-center gap, what is the shortstop's typical role?",
          options: [
            "Stay at his position and wait",
            "Sprint into the outfield to become the relay man, taking the outfielder's throw and firing to a base, while the second baseman trails as backup",
            "Run to home plate",
            "Cover first base",
          ],
          correctIndex: 1,
          explanation: "On a ball to the left-center gap, the shortstop typically goes out as the relay man, sprinting to a spot in line with the outfielder and the target base to receive the throw and quickly relay it. The second baseman trails as the backup and communicator. The middle infielders split relay duties by field side — shortstop out on the left, second baseman out on the right — and the shortstop's arm and leadership make him the natural hub.",
        },
        {
          id: "baseball-12-08-q2",
          type: "Footwork",
          challenge: `  A relay man catches the outfielder's throw, stops,
  gathers himself, takes a couple of steps, and
  then throws — and the runner takes the extra base.`,
          text: "What relay footwork would have saved time?",
          options: [
            "Catching the ball and stopping completely",
            "Catching the throw on the glove side while already turning toward the infield, then firing in one continuous motion",
            "Throwing before catching",
            "Walking the ball back to the infield",
          ],
          correctIndex: 1,
          explanation: "A relay is a race against fast runners, so the catch-turn-throw must be one continuous motion: catch the throw on the glove side while already turning toward the infield, then fire immediately. Stopping, gathering, and resetting wastes precious time and lets the runner take the extra base. Smooth, quick relay footwork is what wins the race, whether the shortstop is the relay man or directing as the trailer.",
        },
        {
          id: "baseball-12-08-q3",
          type: "Leadership",
          challenge: `  On a base hit to the outfield with multiple runners
  moving, several fielders are unsure where the
  throw should go.`,
          text: "Why is the shortstop often the one to direct where the throw goes?",
          options: [
            "Because he's closest to the dugout",
            "As the captain with a strong arm and a good view of the play, the shortstop is the natural decision-maker who reads the play and directs cutoffs and throws",
            "Because the rules require it",
            "Because the shortstop never fields the ball",
          ],
          correctIndex: 1,
          explanation: "The shortstop is the captain of the defense, and his view of the developing play and leadership make him the natural decision-maker about where throws should go. On cutoff and relay plays, he reads the runners and directs the cutoff man — 'cut two', 'cut home', 'let it go' — to keep runners from advancing. His combination of arm, view, and leadership puts him at the center of the throwing game's decisions.",
        },
        {
          id: "baseball-12-08-q4",
          type: "Assignments",
          challenge: `  A shortstop reacts a step slow on outfield balls
  because he isn't sure whether he's the relay man,
  the trailer, or a backup until after the ball is
  hit.`,
          text: "What is the fix for a shortstop who hesitates on his outfield-ball assignments?",
          options: [
            "React faster after the ball is hit",
            "Know his assignment — relay, trail, direct, or back up — before each pitch, based on where a ball would be hit, so he moves instantly",
            "Always run into the outfield on every ball",
            "Wait for a teammate to tell him where to go",
          ],
          correctIndex: 1,
          explanation: "Hesitation on outfield balls comes from not knowing the assignment in advance. The shortstop should know before each pitch what his job will be — relay man on a ball to the left side, trailer/director on a ball to the right, or backup — so he reacts instantly when the ball is hit. As the hub of the throwing game, anticipating his role and leading the execution is part of the shortstop's responsibility every pitch.",
        },
      ],
    },
  },

  // ─── baseball-12-09: Situational IQ ───────────────────────────────────────────
  {
    epochId: "baseball-12",
    wonder: {
      name: "Yankee Stadium",
      location: "Bronx, New York",
      era: "Modern",
      emoji: "🧠",
    },
    id: "baseball-12-09",
    order: 9,
    title: "Shortstop Situational IQ",
    subtitle: "Coverage, double plays, and leading the defense",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-12-badge-09", name: "Field General", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "The shortstop thinks for the whole infield — his pre-pitch plan covers his own play and the defense he's leading.",
      year: 2000,
      overview: [
        "As the captain, the shortstop must process the situation for himself and the whole defense before each pitch. The key reads:\n- Outs, and runners and their speed.\n- Whether a double play is on.\n- Coverage with the second baseman — who covers second on a steal.\n- What to do if the ball comes to him — turn two, take the sure out, get the lead runner, or play home with the infield in.\nBecause he's leading the defense, he must know the whole infield's positioning and assignments, not just his own.",
        "Coverage and double-play decisions are central:\n- Steal coverage is pre-decided by the batter's handedness — the shortstop covers second against a right-handed batter (the second baseman shades to field a pulled grounder); the second baseman covers against a left-handed batter.\n- On a grounder with a runner on first, the shortstop decides whether to turn two or take the sure out, factoring the ball's and runners' speed.\n- With the infield in, he prioritizes cutting down the run at the plate.",
        "Leadership ties it together. The shortstop confirms the situation and coverage with the second baseman, positions teammates, directs cutoffs and relays, and reminds the infield of the outs and the plan. Knowing the situation and translating it into positioning, coverage, and a pre-made plan — for himself and the defense he leads — is the essence of playing shortstop. Like the whole infield, the position is mental as much as physical; for the captain, the thinking covers the entire defense.",
      ],
      technical: {
        title: "Pre-Pitch Thinking for the Captain",
        body: [
          "Decide before the pitch: know the outs, runners and their speed, whether the double play is on, coverage with the second baseman (who covers second on a steal), and what you'll do with the ball — turn two, sure out, lead runner, or play at the plate (infield in). Default to turning two with a runner on first and fewer than two outs, but take the sure out when the ball or the runner is too fast for the double play.",
          "Coverage and leadership: pre-decide steal coverage by handedness (SS covers vs a righty, 2B covers vs a lefty, conventionally), signaling the second baseman every pitch. As captain, confirm the situation and coverage with teammates, position the infield, direct cutoffs and relays, and remind the defense of the outs and the plan. The thinking covers the whole defense, so the reaction — yours and the team's — is instant.",
        ],
        codeExample: {
          label: "Shortstop Situational Checklist (the Captain)",
          code: `  EVERY PITCH, KNOW (for you AND the defense):
  ✓ Score, inning, outs, count
  ✓ Runners — where, and HOW FAST?
  ✓ STEAL coverage with the 2B (signal every pitch):
      RH batter → SS covers 2nd (2B shades to field)
      LH batter → 2B covers 2nd (SS holds left)
  ✓ Is the DOUBLE PLAY on?
  ✓ If it's hit to me → turn two? sure out? lead
    runner? play at the plate (infield in)?

  DEFAULT: runner on 1st, <2 outs → TURN TWO
  → take the SURE OUT when the ball/runner is too fast

  LEAD: confirm situation + coverage, POSITION the
  infield, DIRECT cutoffs/relays, remind the outs.

  The captain thinks for the WHOLE defense.`,
        },
      },
      incident: {
        title: "The Captain Who Thinks for Nine",
        when: "2000s — the analytics-and-IQ era",
        where: "Yankee Stadium and ballparks across the game",
        impact: "The best shortstops are recognized as much for their leadership and baseball IQ — positioning the defense, coordinating coverage, and pre-deciding every play — as for their physical tools, because the captain's thinking shapes the entire defense.",
        body: [
          "The defining trait of a great shortstop is often his mind. As the captain, he thinks not just for himself but for the whole defense — positioning teammates, coordinating coverage, directing cutoffs, and pre-deciding what he'll do with the ball, all before the pitch. This anticipation lets him and the defense react instantly when the ball is in play. A shortstop who has to figure out the play after the ball is hit is a step behind, and so is the defense he leads.",
          "Ozzie Smith and other great shortstops combined spectacular physical tools with this leadership and IQ, seeming to know where every play was going. Modern data informs positioning, but the on-field thinking and leadership belong to the captain. For young shortstops, the lesson is to think the game for the whole defense every pitch — know the situation, set the coverage, position the infield, and pre-make your decision. The captain's thinking is what makes the physical tools, his own and his teammates', count.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Situation", sub: "for self and the defense", type: "system" },
          { label: "Set Coverage + Positioning", sub: "steal coverage, align the infield", type: "attacker" },
          { label: "Pre-Decide the Play", sub: "turn two or sure out?", type: "victim" },
          { label: "Lead Instant Execution", sub: "the captain thinks for nine", type: "result" },
        ],
      },
      timeline: [
        { year: 1985, event: "Situational coverage and double-play reads emphasized for shortstops" },
        { year: 2000, event: "Leadership and baseball IQ recognized as defining shortstop traits", highlight: true },
        { year: 2010, event: "Positioning data integrated with the shortstop's on-field leadership" },
        { year: 2016, event: "Slide rule changes alter double-play decision-making" },
        { year: 2023, event: "Shift restrictions return positioning judgment to the captain" },
      ],
      keyTakeaways: [
        "As captain, the shortstop processes the situation for himself and the whole defense before each pitch",
        "Pre-decide steal coverage with the second baseman, usually by the batter's handedness, and signal every pitch",
        "Default to turning two with a runner on first and fewer than two outs, but take the sure out when the play isn't there",
        "Lead the defense — confirm coverage, position teammates, direct cutoffs, and remind the outs — so execution is instant",
      ],
      references: [
        { title: "USA Baseball: Defensive IQ and Leadership", url: "https://www.usabaseball.com" },
        { title: "Little League: Situational Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Infield Strategy and Leadership", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-12-09-q1",
          type: "Coverage",
          challenge: `  Runner on first, a right-handed batter at the
  plate. The shortstop and second baseman signal
  each other before the pitch about a possible steal.`,
          text: "With a right-handed batter, who conventionally covers second base on a steal?",
          options: [
            "The second baseman covers; the shortstop fields",
            "The shortstop covers second base, while the second baseman shades toward the first-base side to field a pulled ground ball",
            "The pitcher covers second",
            "Nobody covers",
          ],
          correctIndex: 1,
          explanation: "Conventionally, with a right-handed batter, the shortstop covers second base on a steal, while the second baseman shades toward the first-base side to be in position for a pulled ground ball. The logic is to keep the fielder more likely to receive a batted ball in position while the other takes the bag. The shortstop and second baseman signal each other every pitch so exactly one covers. With a left-handed batter, the assignment flips.",
        },
        {
          id: "baseball-12-09-q2",
          type: "Captain",
          challenge: `  Before a pitch, the shortstop confirms the outs,
  positions the third baseman and outfield, signals
  steal coverage to the second baseman, and reminds
  everyone of the situation.`,
          text: "What does this illustrate about the shortstop's pre-pitch responsibility?",
          options: [
            "He's overstepping his role",
            "As the captain, the shortstop thinks for the whole defense — positioning teammates, coordinating coverage, and confirming the situation, not just his own play",
            "This is the coach's job, not the shortstop's",
            "Pre-pitch thinking is unnecessary",
          ],
          correctIndex: 1,
          explanation: "As the captain of the defense, the shortstop's pre-pitch thinking covers the whole infield and often the outfield — positioning teammates, coordinating coverage, confirming the outs, and reminding everyone of the situation. He must know not just his own play but the entire defense's positioning and assignments. This leadership, repeated every pitch, is a defining part of the shortstop's role and what lets the whole defense react instantly.",
        },
        {
          id: "baseball-12-09-q3",
          type: "Double-Play Decision",
          challenge: `  Runner on first, one out. A ground ball is hit
  slowly to the shortstop, and the fast runner
  already has a big jump toward second.`,
          text: "Should the shortstop try to turn two here, or take the sure out?",
          options: [
            "Always force the double play",
            "Take the sure out — the slow ball and the fast runner's big jump make the double play unlikely, so don't risk getting nobody",
            "Throw home",
            "Hold the ball and concede both runners",
          ],
          correctIndex: 1,
          explanation: "The default with a runner on first and fewer than two outs is to turn two, but a slowly hit ball and a fast runner with a big jump make the double play unlikely. Forcing it risks a rushed throw that gets no one. The smart play is the sure out at first. The shortstop reads the ball's speed and the runner's jump and takes the sure out when the double play isn't realistically there — a key situational judgment.",
        },
        {
          id: "baseball-12-09-q4",
          type: "Anticipation",
          challenge: `  A shortstop fields cleanly but hesitates, deciding
  only after he has the ball whether to turn two,
  take the sure out, or check a runner — and the
  delay costs the play.`,
          text: "What's the fix for a shortstop who hesitates after fielding the ball?",
          options: [
            "Field the ball faster — there's no way to decide sooner",
            "Decide before the pitch what to do if the ball is hit to him, so the decision is already made when he fields it",
            "Always throw to first regardless of the situation",
            "Never attempt a double play",
          ],
          correctIndex: 1,
          explanation: "Hesitation comes from deciding after fielding the ball. The fix is anticipation: before each pitch, the shortstop should know the outs, the runners and their speed, whether the double play is on, and exactly what he'll do with the ball. With the decision pre-made, he fields and executes instantly. As the captain, thinking the game every pitch — for himself and the defense — is what eliminates the costly delay.",
        },
      ],
    },
  },

  // ─── baseball-12-10: The Greats and Mastery ───────────────────────────────────
  {
    epochId: "baseball-12",
    wonder: {
      name: "Cooperstown",
      location: "Cooperstown, New York",
      era: "Modern",
      emoji: "🏆",
    },
    id: "baseball-12-10",
    order: 10,
    title: "The Greats and the Mastery Mindset",
    subtitle: "What the best shortstops teach about the craft",
    category: "sports",
    xp: 100,
    badge: { id: "baseball-12-badge-10", name: "The Wizard", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "Master shortstop and you become the captain — the complete athlete and leader the whole defense is built around.",
      year: 2002,
      overview: [
        "The greatest shortstops share a complete set of pursuable traits:\n- Elite range and soft, quick hands.\n- A strong, accurate arm for the deep-hole and jump throws.\n- The agility and body control to field and throw from any position.\n- The footwork to charge, backhand, and turn the double play.\n- The improvisation to make plays on bad hops.\n- The leadership and baseball IQ to captain the defense.\nOzzie Smith embodied all of it with a wizardry that made the position an art — but the qualities, not the highlights, are what to study and build.",
        "Mastering shortstop is about being the complete defender and leader. The position's value comes from covering the most ground, making the hardest throws, turning the double play, and directing the whole defense — and from doing it consistently, never giving away an out through a lapse. A great shortstop anchors a defense the way a great pitcher anchors a staff: teams are built around him. That all-around excellence and leadership are the heart of the captain's position.",
        "The mastery mindset treats shortstop as the most complete craft on the infield, demanding the most repetition and the most all-around development. That means endless ground balls from every angle, deep-hole and jump throws, double-play feeds and pivots, charging and barehand plays, relay footwork, and studying situations and leading the defense until it's automatic. The complete shortstop is rangy, strong-armed, agile, sure-handed, improvisational, and a leader — the captain the whole defense is built around. Build those qualities, and you become the player a championship defense is anchored by.",
      ],
      technical: {
        title: "The Complete Shortstop — A Self-Assessment",
        body: [
          "Skills to master:\n- range and fielding to both sides\n- the deep-hole backhand and the plant-and-throw and jump throw\n- the double-play pivot and feed\n- charging slow rollers and the barehand\n- relay footwork and cutoff leadership\n- coverage\n- backups\nEach is built through deliberate repetition — the most all-around skill set on the infield.",
          "Mindset to build: complete development, leadership, anticipation, and reliability. Develop every tool — range, arm, agility, hands, and IQ — because the position leans on all of them. Captain the defense: position teammates, coordinate coverage, direct cutoffs, and pre-decide every play. Treat shortstop as the most complete craft on the infield, demanding the most repetition. The complete shortstop anchors the whole defense.",
        ],
        codeExample: {
          label: "The Complete Shortstop — Checklist",
          code: `  RANGE / HANDS:
  ✓ Field both sides; charge + barehand; improvise
    on bad hops (soft, quick hands)

  ARM / THROWS:
  ✓ Deep-hole backhand → plant-and-throw OR jump
    throw (the hardest infield throw)

  THE DOUBLE PLAY:
  ✓ Pivot the 4-6-3; feed the 6-4-3; clear the
    runner; quick release

  TEAM / LEADERSHIP:
  ✓ Relay hub + cutoff director; coverage with 2B
  ✓ CAPTAIN: position the defense, pre-decide plays
  ✓ Reliability — never give away an out

  Develop EVERY tool — range, arm, agility, hands,
  IQ — the position leans on all of them.

  Build these → you are THE CAPTAIN the defense is
  built around.`,
        },
      },
      incident: {
        title: "The Wizard Enters the Hall",
        when: "2002 — Ozzie Smith's Hall of Fame induction",
        where: "National Baseball Hall of Fame, Cooperstown, New York",
        impact: "Ozzie Smith was inducted into the Hall of Fame primarily for his defense — a rare honor that confirmed a shortstop's glove and leadership can be the foundation of a championship team and a legendary career.",
        body: [
          "Ozzie Smith was inducted into the Baseball Hall of Fame in 2002, recognized above all for his defense — a rarity in a sport that often celebrates hitting. 'The Wizard' won thirteen straight Gold Gloves, made fifteen All-Star teams, and anchored a championship Cardinals defense with range, acrobatics, soft hands, and leadership that redefined the position. His career proved that a shortstop's glove and captaincy could be the foundation of a great team.",
          "Smith's legacy is the argument that mastering shortstop — the range, the arm, the hands, the double play, and the leadership — can make a player a Hall of Famer and the anchor of a championship defense. For any young shortstop, the lesson is to pursue the most complete craft on the infield: develop every tool, lead the defense, and bring relentless repetition to the position's many skills. Become the complete, captaining shortstop the whole defense is built around, and you become the kind of player championships are anchored by.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Master Every Skill", sub: "range, arm, DP, charge, lead", type: "system" },
          { label: "Develop the Complete Athlete + IQ", sub: "all tools, leadership", type: "attacker" },
          { label: "Anchor the Whole Defense", sub: "built around the captain", type: "victim" },
          { label: "Become the Captain", sub: "the foundation of the defense", type: "result" },
        ],
      },
      timeline: [
        { year: 1978, event: "Ozzie Smith sets the modern standard for complete shortstop play" },
        { year: 1996, event: "Smith retires with 13 Gold Gloves and 15 All-Star selections" },
        { year: 2002, event: "Ozzie Smith inducted into the Hall of Fame, primarily for his defense", highlight: true },
        { year: 2013, event: "Andrelton Simmons and Statcast redefine measuring shortstop value" },
        { year: 2020, event: "Range, arm, agility, and IQ recognized as the complete shortstop's traits" },
      ],
      keyTakeaways: [
        "The best shortstops combine elite range, a strong arm, agility, soft hands, improvisation, and leadership",
        "Shortstop rewards the most complete development on the infield — every tool matters, plus the IQ to captain the defense",
        "The mastery mindset treats the position as the most complete craft, demanding the most repetition across all its skills",
        "Become the complete, captaining shortstop the whole defense is built around — the anchor of a championship defense",
      ],
      references: [
        { title: "Baseball Hall of Fame: Ozzie Smith", url: "https://baseballhall.org/hall-of-famers/smith-ozzie" },
        { title: "USA Baseball: Complete Infield Development", url: "https://www.usabaseball.com" },
        { title: "MLB: The Value of Shortstop Defense", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-12-10-q1",
          type: "Traits",
          challenge: `  A young player wants to become a complete shortstop
  and asks which qualities to develop.`,
          text: "Which combination of traits defines the best shortstops?",
          options: [
            "Only home-run power",
            "Elite range, soft quick hands, a strong arm, agility and body control, improvisation on bad hops, and leadership/IQ to captain the defense",
            "Only running speed",
            "Only a strong arm",
          ],
          correctIndex: 1,
          explanation: "The best shortstops combine elite range and soft, quick hands; a strong, accurate arm for the deep-hole and jump throws; agility and body control to field and throw from any position; the footwork to charge, backhand, and turn the double play; improvisation on bad hops; and the leadership and baseball IQ to captain the defense. Ozzie Smith embodied all of it. Shortstop demands the most complete set of skills on the infield — physical and mental.",
        },
        {
          id: "baseball-12-10-q2",
          type: "Complete Craft",
          challenge: `  A coach tells a young shortstop that, unlike some
  positions where one or two tools can carry you,
  shortstop requires developing everything.`,
          text: "Why does shortstop demand the most complete development?",
          options: [
            "It doesn't — one tool is enough",
            "The position leans on every tool — range, arm, agility, hands, and IQ — so a shortstop must develop all of them rather than relying on one or two standout skills",
            "Only hitting needs to be developed",
            "Shortstops can ignore defense",
          ],
          correctIndex: 1,
          explanation: "Shortstop is the most complete craft on the infield because the position leans on every tool: range to cover the most ground, a strong arm for the hardest throws, agility and body control to field on the move, soft hands and improvisation, and the IQ to captain the defense. A shortstop can't rely on just one or two standout skills the way some positions can — he must develop them all, which is why the position demands the most all-around repetition.",
        },
        {
          id: "baseball-12-10-q3",
          type: "Anchor",
          challenge: `  A team builds its defense around its shortstop the
  way it builds its rotation around its ace pitcher.`,
          text: "Why is a great shortstop described as the anchor of a defense?",
          options: [
            "Because shortstops don't really affect the defense",
            "Because the shortstop covers the most ground, makes the hardest plays, turns the double play, and captains the defense — so his all-around excellence and leadership anchor the whole unit",
            "Because the shortstop bats cleanup",
            "Because only pitching matters on defense",
          ],
          correctIndex: 1,
          explanation: "A great shortstop anchors a defense because he covers the most ground, makes the hardest throws and plays, turns the double play, and leads the entire defense as its captain. His all-around excellence and leadership ripple through every other position — much as a great pitcher anchors a staff. That's why teams build their defenses around a great shortstop, and why mastering the position makes a player so valuable.",
        },
        {
          id: "baseball-12-10-q4",
          type: "Legacy",
          challenge: `  Ozzie Smith was inducted into the Hall of Fame
  primarily for his defense — a rarity in a sport
  that usually celebrates hitting.`,
          text: "What does Ozzie Smith's Hall of Fame career teach young shortstops?",
          options: [
            "That defense doesn't matter to a career",
            "That mastering the complete craft of shortstop — range, arm, hands, the double play, and leadership — can make a player a Hall of Famer and the anchor of a championship defense",
            "That only hitting gets you to the Hall of Fame",
            "That shortstop defense can't be developed",
          ],
          correctIndex: 1,
          explanation: "Ozzie Smith's Hall of Fame induction, primarily for his defense, proves that mastering the complete craft of shortstop can make a player a legend and the anchor of a championship team. 'The Wizard' combined elite range, soft hands, a strong arm, the double play, improvisation, and leadership to redefine the position. The lesson for young shortstops is to pursue that whole craft and become the complete, captaining shortstop the whole defense is built around.",
        },
      ],
    },
  },
];
