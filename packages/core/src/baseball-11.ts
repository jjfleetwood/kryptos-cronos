import type { StageConfig, EpochConfig } from "./types";

export const baseball11Epoch: EpochConfig = {
  id: "baseball-11",
  name: "Third Base",
  subtitle: "The Hot Corner",
  description:
    "Third base is the hot corner — the position closest to right-handed pull hitters, where balls arrive harder and faster than anywhere on the diamond and reactions decide everything. This complete position course builds the third baseman from the ground up: the reaction-ready stance, quick and soft hands on smashes, the long throw across the diamond, charging slow rollers and bare-handing bunts, guarding the line, serving as a cutoff, and the situational reads the corner demands. From Little League to Adrián Beltré — a Dodgers product who became a Hall of Famer and one of the greatest defensive third basemen ever — you will learn to guard the hot corner with fearless hands and a cannon arm.",
  emoji: "🔥",
  color: "red",
  unlocked: true,
};

export const baseball11Stages: StageConfig[] = [
  // ─── baseball-11-01: The Hot Corner ───────────────────────────────────────────
  {
    epochId: "baseball-11",
    wonder: {
      name: "Dodger Stadium",
      location: "Los Angeles, California",
      era: "Modern",
      emoji: "🔥",
    },
    id: "baseball-11-01",
    order: 1,
    title: "Third Base — The Hot Corner",
    subtitle: "Why the ball gets there harder and faster than anywhere",
    category: "sports",
    xp: 85,
    badge: { id: "baseball-11-badge-01", name: "Hot Corner", emoji: "🔥" },
    challengeType: "quiz",
    info: {
      tagline: "They call it the hot corner because the ball arrives in a blink — third base belongs to the fearless.",
      year: 1960,
      overview: [
        "Third base is called the hot corner because the hardest-hit balls in baseball arrive there with the least reaction time. Right-handed hitters — the majority of batters — pull the ball, and a pulled ground ball or line drive screams toward third base faster than anywhere else on the infield. The third baseman stands relatively close to home plate, so a smash can reach them in a fraction of a second. The position belongs to players with lightning reflexes, soft and fearless hands, and the courage to stand in against rockets.",
        "Unlike shortstop or second base, third base prioritizes reactions and arm strength over pure range. The third baseman doesn't have to cover as much ground, but the balls they do field come hard and fast, demanding quick hands that can knock down a smash and still make a play. And because third base is the farthest infield position from first base, the throw across the diamond is the longest an infielder makes — requiring a strong, accurate arm. Quick reflexes plus a cannon arm define the hot corner.",
        "The third baseman also owns a unique set of plays:\n- Charging slow rollers and bunts to barehand and throw on the run.\n- Guarding the foul line late in games to prevent extra-base hits.\n- Handling tag plays at third base.\nThe position is a blend of fearlessness, quick hands, and a strong arm, with the situational intelligence to know when to guard the line, when to charge, and where the play is. Adrián Beltré, who came up with the Dodgers and became a Hall of Famer, turned the hot corner into a defensive art.",
      ],
      technical: {
        title: "Why Third Base Is the Hot Corner",
        body: [
          "Reaction time: third base sits relatively close to home plate, and right-handed pull hitters drive the ball there with tremendous velocity. A hard-hit ball can reach the third baseman in well under a second, leaving no time to think — only to react. This is why quick reflexes and soft, fearless hands matter more than range at the position.",
          "The long throw: third base is the farthest infield spot from first base, so the third baseman makes the longest routine infield throw. A strong, accurate arm is essential, along with the footwork to set and fire across the diamond. Reactions to knock the ball down and an arm to complete the long throw are the two defining physical requirements of the hot corner.",
        ],
        codeExample: {
          label: "Third Base — Core Responsibilities",
          code: `  THE THIRD BASEMAN'S JOBS:
  ✓ REACT to the hardest-hit balls (RH pull hitters)
  ✓ Quick, SOFT, FEARLESS hands — knock it down,
    still make the play
  ✓ The LONG THROW across the diamond (strong arm)
  ✓ CHARGE slow rollers + bunts → bare-hand on the run
  ✓ GUARD THE LINE late (stop extra-base hits)
  ✓ TAG plays at third; cutoff + backups

  DEFINING TRAITS:
  → Lightning REFLEXES + soft hands (reaction > range)
  → A CANNON ARM for the longest infield throw
  → Fearlessness against rockets
  → Situational IQ: when to guard the line, charge,
    or take the sure out

  The "hot corner": where the ball arrives hardest,
  fastest, with the least time to react.`,
        },
      },
      incident: {
        title: "Adrián Beltré — A Hall of Fame Glove at the Corner",
        when: "1998–2018 — Los Angeles Dodgers and beyond",
        where: "Dodger Stadium, Los Angeles, California",
        impact: "Adrián Beltré, who signed with the Dodgers as a teenager and reached the majors at 19, grew into a Hall of Famer and one of the greatest defensive third basemen ever — a five-time Gold Glove winner whose backhand throws from the hole and plays from his knees redefined what the hot corner could be.",
        body: [
          "Adrián Beltré came up with the Los Angeles Dodgers — signed out of the Dominican Republic at 15 and in the big leagues by 19 — and over a 21-year career became the standard for third-base defense. He fielded the hardest-hit balls with soft hands and lightning reflexes and threw from impossible positions — deep in the hole, across his body, even from one knee — turning sure hits into outs. Hitters who smashed what looked like doubles down the line watched Beltré throw them out.",
          "His defensive artistry earned him five Gold Gloves and, in 2024, first-ballot induction into the Hall of Fame. Beltré is the model of the hot corner: fearless against the hardest-hit balls, blessed with soft hands and quick reflexes, and armed with one of the most accurate cannons the position has seen. For young third basemen, he is the standard to study.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Right-Handed Pull Hitter", sub: "the ball comes hard", type: "attacker" },
          { label: "Smash to the Hot Corner", sub: "least reaction time", type: "system" },
          { label: "Quick, Fearless Hands", sub: "knock it down, field it", type: "victim" },
          { label: "Long Throw, Out Recorded", sub: "cannon arm completes it", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Third base established as the 'hot corner' for hard-hit balls" },
        { year: 1998, event: "Adrián Beltré debuts for the Dodgers at 19 — begins a career that redefines the position" },
        { year: 2004, event: "Beltré's breakout season with the Dodgers makes him a star", highlight: true },
        { year: 2007, event: "Beltré wins the first of five Gold Gloves for his glovework at third" },
        { year: 2010, event: "Defensive metrics quantify third-base reactions, range, and arm" },
      ],
      keyTakeaways: [
        "Third base is the hot corner — right-handed pull hitters drive the hardest balls there with the least reaction time",
        "The position prioritizes quick reflexes, soft and fearless hands, and a strong arm over pure range",
        "The throw across the diamond is the longest routine infield throw, requiring a cannon arm",
        "Unique plays include charging slow rollers to bare-hand on the run, guarding the line, and tag plays at third",
      ],
      references: [
        { title: "Little League: Infield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Third Base Play", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Adrián Beltré", url: "https://baseballhall.org/hall-of-famers/beltre-adrian" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-11-01-q1",
          type: "Role",
          challenge: `  A coach explains why third base is nicknamed the
  "hot corner" and warns a new player to be ready
  for the ball at all times.`,
          text: "Why is third base called the hot corner?",
          options: [
            "Because it's the sunniest part of the field",
            "Because right-handed pull hitters drive the hardest-hit balls there with the least reaction time",
            "Because third basemen run the most",
            "Because the bag gets hot in the sun",
          ],
          correctIndex: 1,
          explanation: "Third base is the hot corner because the majority of batters are right-handed and tend to pull the ball, sending hard ground balls and line drives screaming toward third — and the third baseman stands relatively close to home plate, leaving almost no time to react. Balls arrive harder and faster there than anywhere on the infield, which is why the position demands quick reflexes and fearless hands.",
        },
        {
          id: "baseball-11-01-q2",
          type: "Traits",
          challenge: `  A coach is choosing a third baseman between a
  rangy player with an average arm and a player
  with quick reflexes, soft hands, and a cannon arm.`,
          text: "Which qualities most define a good third baseman?",
          options: [
            "Maximum range and running speed above all",
            "Quick reflexes, soft and fearless hands, and a strong arm — reactions and arm strength matter more than range",
            "Only home-run power",
            "Only height",
          ],
          correctIndex: 1,
          explanation: "Third base prioritizes quick reflexes and soft, fearless hands (to handle the hardest-hit balls with little reaction time) plus a strong, accurate arm (for the longest infield throw). The third baseman doesn't have to cover as much ground as a shortstop, but the balls they field come hard and fast. Reactions and arm strength define the position more than pure range.",
        },
        {
          id: "baseball-11-01-q3",
          type: "The Throw",
          challenge: `  A third baseman fields a ground ball deep behind
  the bag and has to throw all the way across the
  infield to first base.`,
          text: "What makes the third baseman's throw to first uniquely demanding?",
          options: [
            "It's the shortest throw on the infield",
            "Third base is the farthest infield position from first base, so it's the longest routine infield throw and requires a strong, accurate arm",
            "Third basemen never throw to first",
            "The throw is downhill and easy",
          ],
          correctIndex: 1,
          explanation: "Third base is the farthest infield position from first base, so the third baseman makes the longest routine infield throw — all the way across the diamond. This demands a strong, accurate arm and the footwork to set and fire, especially on balls fielded deep or in the hole. A cannon arm is one of the two defining physical requirements of the hot corner, alongside quick reflexes.",
        },
        {
          id: "baseball-11-01-q4",
          type: "Legacy",
          challenge: `  A defensive third baseman is so good at turning
  hard smashes and balls down the line into outs —
  throwing from the hole, across his body, even from
  one knee — that he wins five Gold Gloves and a
  first-ballot Hall of Fame plaque.`,
          text: "What does Adrián Beltré's career demonstrate about the hot corner?",
          options: [
            "That third base requires no skill",
            "That fearless soft hands, quick reflexes, and a strong arm can turn the hot corner into a defensive art that wins games and championships",
            "That only hitting matters at third base",
            "That defense at third base can't be measured",
          ],
          correctIndex: 1,
          explanation: "Adrián Beltré — five Gold Gloves, a backhand and one-knee throwing artistry, and first-ballot Hall of Fame induction — proved that the hot corner can be a defensive weapon. His soft hands, quick reflexes, and strong arm turned sure doubles into outs. He's the model of the complete third baseman: fearless against the hardest-hit balls, with the hands to field them and the arm to complete the long throw. The position rewards mastery.",
        },
      ],
    },
  },

  // ─── baseball-11-02: Stance and Positioning ───────────────────────────────────
  {
    epochId: "baseball-11",
    wonder: {
      name: "Citizens Bank Park",
      location: "Philadelphia, Pennsylvania",
      era: "Modern",
      emoji: "📍",
    },
    id: "baseball-11-02",
    order: 2,
    title: "Stance and Positioning",
    subtitle: "Reaction-ready setup, depth, and guarding the line",
    category: "sports",
    xp: 85,
    badge: { id: "baseball-11-badge-02", name: "Ready Stance", emoji: "📍" },
    challengeType: "quiz",
    info: {
      tagline: "With so little reaction time, the third baseman's stance and depth aren't details — they're survival.",
      year: 1995,
      overview: [
        "Because the ball arrives so fast at third base, the ready position is even more critical than at other infield spots. The third baseman assumes a low, athletic stance as the pitch is delivered — feet wider than shoulder-width, knees bent deeply, weight forward on the balls of the feet, glove low and out front — with a timing creep step so the body is loaded and moving when the ball is struck. A third baseman caught upright or flat-footed simply cannot react to a hard smash in time. Staying low and ready is the foundation.",
        "Depth and positioning at third change dramatically with the situation. Normal depth balances range and reaction time. Late in close games, the third baseman guards the line — playing close to the foul line to take away a double down the left-field line. With a bunt likely, the third baseman plays in, ready to charge. Against a hard pull hitter, they may play deeper and toward the line; against a slap or bunt threat, they play in. Each pitch's positioning is a decision based on the hitter and the situation.",
        "Guarding the line is a signature third-base decision. A ball down the third-base line that gets past the fielder is almost always an extra-base hit, and late in a close game, preventing the runner from reaching scoring position is worth more than covering the hole toward shortstop. So the third baseman plays close to the line, conceding a single through the hole in exchange for taking away the double. Knowing when to guard the line versus play normal depth is a key situational judgment at the hot corner.",
      ],
      technical: {
        title: "The Ready Stance and Situational Depth",
        body: [
          "The reaction-ready stance: as the pitch is delivered, get low and athletic — feet wider than the shoulders, deep knee bend, weight forward, glove low and out front — with a creep step timed so the feet land as the ball reaches the hitting zone. Staying low is essential because most hard-hit balls at third are on the ground or low line drives; an upright stance leaves you unable to react down and in time.",
          "Depth by situation:\n- Play normal depth in most situations.\n- Guard the line (close to the foul line) late in close games to take away the double.\n- Play in when a bunt is likely.\n- Adjust deeper and toward the line against hard pull hitters, or in against slap and bunt threats.\nEach is a pre-pitch decision weighing range, reaction time, and the cost of an extra-base hit down the line. Guarding the line concedes the hole to prevent the double.",
        ],
        codeExample: {
          label: "Third Base Stance and Positioning",
          code: `  REACTION-READY STANCE (as the pitch is thrown):
  ✓ Feet WIDER than the shoulders
  ✓ DEEP knee bend, weight FORWARD, glove LOW
  ✓ Creep step → land as the ball reaches the zone
  → Stay LOW: most hard smashes are on the ground
    or low line drives. Upright = no reaction.

  DEPTH BY SITUATION:
  Normal              → balance range + reaction
  GUARD THE LINE      → close to the foul line
    (late, close game)   → take away the DOUBLE,
                           concede the hole single
  Bunt likely         → play IN, ready to charge
  Hard pull hitter    → deeper + toward the line
  Slap / bunt threat  → play IN

  Each pitch's depth = a decision (hitter +
  situation + cost of an extra-base hit).`,
        },
      },
      incident: {
        title: "Guarding the Line in October",
        when: "1995 — postseason baseball",
        where: "Citizens Bank Park and ballparks across the game",
        impact: "Guarding the third-base line late in close games — conceding a single through the hole to prevent a double down the line — is one of baseball's classic situational decisions, decided by the score, the inning, and the cost of letting a runner reach scoring position.",
        body: [
          "Few situational decisions are as visible as a third baseman guarding the line late in a tight game. The defense accepts that a ground ball through the hole toward shortstop will be a single, because a ball down the line that gets past the third baseman would be a double — putting the tying or winning run in scoring position. So the third baseman hugs the foul line, taking away the extra-base hit at the cost of a little range toward the hole.",
          "This trade-off captures the situational thinking the hot corner demands. Early in a game or with a big lead, the third baseman plays normal depth for the best overall coverage; late and close, they guard the line. Knowing which situation calls for which positioning — and getting into a low, reaction-ready stance regardless — is what separates a thinking third baseman from one who just stands and hopes. Positioning is a decision made fresh every pitch.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Situation + Hitter", sub: "score, inning, tendencies", type: "system" },
          { label: "Set Depth", sub: "normal / guard line / in", type: "attacker" },
          { label: "Low, Reaction-Ready Stance", sub: "creep, loaded, glove low", type: "victim" },
          { label: "React to the Smash", sub: "no flat-footed delay", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Guarding-the-line and bunt-defense depths formalized" },
        { year: 1980, event: "Low, reaction-ready stance emphasized for the hot corner" },
        { year: 1995, event: "Situational depth decisions refined in coaching", highlight: true },
        { year: 2010, event: "Positioning data informs third-base depth and angles" },
        { year: 2023, event: "Shift restrictions return positioning judgment to the corner" },
      ],
      keyTakeaways: [
        "The hot corner demands a low, reaction-ready stance — deep knee bend, weight forward, glove low, with a creep step",
        "Stay low because most hard-hit balls at third are on the ground or low line drives",
        "Depth changes with the situation: normal, guard the line late in close games, or play in for a bunt",
        "Guarding the line concedes a single through the hole to take away a double down the left-field line",
      ],
      references: [
        { title: "USA Baseball: Infield Positioning", url: "https://www.usabaseball.com" },
        { title: "Little League: Infield Coaching Guide", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Defensive Positioning", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-11-02-q1",
          type: "Stance",
          challenge: `  A third baseman stands fairly upright with his
  glove around waist height as the pitch is thrown.
  A hard smash one-hops him before he can get the
  glove down.`,
          text: "Why must the third baseman get into a low, reaction-ready stance?",
          options: [
            "It looks more professional",
            "Most hard-hit balls at third are on the ground or low line drives, so a low stance with weight forward lets him react down and in time",
            "A low stance helps him hit better",
            "It doesn't matter how he stands",
          ],
          correctIndex: 1,
          explanation: "Because the ball arrives so fast at third base and most hard-hit balls there are on the ground or low line drives, the third baseman must be low and loaded — deep knee bend, weight forward, glove low — with a creep step timed to the pitch. An upright stance leaves him unable to get the glove down in the split second available. Staying low is essential survival at the hot corner.",
        },
        {
          id: "baseball-11-02-q2",
          type: "Guard the Line",
          challenge: `  Bottom of the ninth, defense leading by one run.
  A double down the left-field line would put the
  tying run in scoring position.`,
          text: "How should the third baseman position himself in this late, close situation?",
          options: [
            "Play toward the shortstop hole for more range",
            "Guard the line — play close to the foul line to take away a double down the left-field line, conceding a single through the hole",
            "Play in for a bunt",
            "Stand on the third-base bag",
          ],
          correctIndex: 1,
          explanation: "Late in a close game, the third baseman guards the line — playing close to the foul line to take away an extra-base hit down the left-field line that would put the tying run in scoring position. This concedes a single through the hole toward shortstop, which is far less damaging than a double. It's a classic situational trade-off: give up range to prevent the extra-base hit when it matters most.",
        },
        {
          id: "baseball-11-02-q3",
          type: "Bunt Depth",
          challenge: `  Runner on first, nobody out, and the opposing
  team's weak hitter squares to bunt to advance
  the runner.`,
          text: "How should the third baseman adjust his depth when a bunt is likely?",
          options: [
            "Play as deep as possible",
            "Play in, closer to the plate, ready to charge the bunt and make a quick play",
            "Guard the foul line far behind the bag",
            "Move to shortstop",
          ],
          correctIndex: 1,
          explanation: "When a bunt is likely, the third baseman plays in — closer to home plate — so he can charge the bunt quickly and make a play, possibly even on the lead runner. Playing at normal or deep depth would give the bunter an easy sacrifice. Recognizing bunt situations and adjusting depth accordingly is a key part of the third baseman's pre-pitch positioning at the hot corner.",
        },
        {
          id: "baseball-11-02-q4",
          type: "Decision",
          challenge: `  It's the second inning of a tie game with nobody
  on base. A third baseman plays tight against the
  foul line, and a ground ball rolls through the
  wide-open hole toward shortstop for a hit.`,
          text: "What was wrong with guarding the line in this situation?",
          options: [
            "Nothing — always guard the line",
            "Guarding the line is for late, close situations; early in the game with no one on, normal depth gives better overall coverage, so hugging the line needlessly opened the hole",
            "He should have played even closer to the line",
            "Third basemen should never field ground balls",
          ],
          correctIndex: 1,
          explanation: "Guarding the line is a situational decision for late, close games when preventing a double is worth conceding the hole. Early in a game with nobody on base, there's no reason to surrender that range — normal depth provides better overall coverage. Guarding the line unnecessarily opened the hole toward shortstop for a hit that proper positioning would have prevented. Positioning must match the situation, every pitch.",
        },
      ],
    },
  },

  // ─── baseball-11-03: Reactions and Soft Hands ─────────────────────────────────
  {
    epochId: "baseball-11",
    wonder: {
      name: "Dodger Stadium",
      location: "Los Angeles, California",
      era: "Modern",
      emoji: "⚡",
    },
    id: "baseball-11-03",
    order: 3,
    title: "Reactions and Soft Hands",
    subtitle: "Handling smashes, knockdowns, and short hops",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-11-badge-03", name: "Quick Hands", emoji: "⚡" },
    challengeType: "quiz",
    info: {
      tagline: "At the hot corner you can't always field it clean — but if you knock it down and stay calm, you can still get the out.",
      year: 1970,
      overview: [
        "The defining skill of a third baseman is handling the hardest-hit balls with quick, soft hands and lightning reactions. Many balls at third can't be fielded cleanly — too hard, a bad hop, gone in a blink — so the great ones:\n- Knock the ball down with the glove or body.\n- Keep it close and under control.\n- Recover and still make the throw.\nThere's often time after a knockdown because the runner is usually a step slower than the ball — fast reflexes plus soft hands turn rockets into outs.",
        "Soft hands mean giving with the ball rather than fighting it. On a hard smash or short hop, the third baseman lets the glove and hands recoil slightly to absorb the velocity, keeping the ball in front and controllable rather than letting it ricochet away. Stabbing rigidly at a hard ball causes it to deflect; soft, giving hands secure it. The same applies to short hops — read the hop, stay down, and give with the glove. On a ball that's knocked down but not cleanly fielded, the third baseman calmly picks it up and still has time to throw out the runner.",
        "Reactions are built through repetition and a ready, anticipating mindset — a third baseman who expects the ball on every pitch reacts far faster than one hoping it goes elsewhere. The training:\n- Rapid-fire short hops.\n- Balls off a wall.\n- Reaction balls with unpredictable bounces.\nFearlessness matters too: a third baseman who flinches or turns away from hard-hit balls can't field them. Quick hands, soft hands, and courage are the hot corner's core.",
      ],
      technical: {
        title: "Knockdowns, Soft Hands, and the Recovery",
        body: [
          "Soft hands and knockdowns: on a hard smash or short hop, give with the glove and hands to absorb the ball and keep it in front, rather than stabbing rigidly (which deflects it). If the ball can't be fielded cleanly, knock it down and keep it close — then calmly pick it up and throw. Because the runner is usually slower than a hard-hit ball, a knockdown often still results in an out if you stay composed and make a strong throw.",
          "Reactions and mindset: expect the ball on every pitch from a low, loaded, fearless stance — anticipation speeds reaction. Build reflexes with rapid-fire short-hop and reaction-ball drills. Read short hops, stay down, and give with the glove. Never flinch or turn away from a hard-hit ball; courage is required to get the glove or body in front. Quick reflexes, soft hands, and fearlessness combine to handle the hot corner's hardest chances.",
        ],
        codeExample: {
          label: "Handling the Hardest-Hit Balls",
          code: `  ON A HARD SMASH OR SHORT HOP:
  ✓ REACT from a low, loaded, fearless stance
  ✓ SOFT HANDS — GIVE with the glove to absorb
    (stabbing rigidly → the ball deflects away)
  ✓ Read the hop, STAY DOWN, body behind it

  IF YOU CAN'T FIELD IT CLEAN:
  → KNOCK IT DOWN and keep it CLOSE in front
  → Stay CALM, pick it up, make a strong throw
  → The runner is usually slower than the ball →
    a knockdown often still gets the out

  BUILD REACTIONS:
  → Rapid-fire short hops, balls off a wall,
    reaction balls (unpredictable bounces)
  → EXPECT the ball every pitch (anticipation
    speeds reaction)
  → Never flinch — FEARLESSNESS is required`,
        },
      },
      incident: {
        title: "Adrián Beltré and the Art of the Reaction Play",
        when: "1998–2018 — across a Hall of Fame career",
        where: "Dodger Stadium and ballparks across the game",
        impact: "Adrián Beltré's defensive performance over two decades — a relentless stream of reaction plays, knockdowns, and impossible throws from the hole and from his knees — made him one of the greatest defensive third basemen in history and a first-ballot Hall of Famer.",
        body: [
          "Across a 21-year career that began with the Dodgers, Adrián Beltré made the reaction play look routine. Against the hardest-hit balls he made play after play that seemed impossible — backhanding line drives, charging slow rollers to bare-hand and throw, and knocking down smashes to keep them in front and still throw out the runner. Opposing hitters were demoralized; even balls that beat him on the first try, he recovered and turned into outs.",
          "What made it possible was the foundation every young third baseman can build: soft, quick hands, fearless reactions, and the composure to recover and throw after a knockdown. Beltré rarely needed to field a smash cleanly on the first try — he knocked it down, stayed calm, and made a strong throw, because he knew the runner was slower than the ball. His career is the ultimate demonstration that reactions, soft hands, and courage define the hot corner.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Hard Smash to Third", sub: "little reaction time", type: "attacker" },
          { label: "React, Get Glove/Body to It", sub: "low, loaded, fearless", type: "system" },
          { label: "Soft Hands / Knockdown", sub: "absorb, keep it close", type: "victim" },
          { label: "Recover and Throw", sub: "runner slower than the ball", type: "result" },
        ],
      },
      timeline: [
        { year: 1998, event: "Adrián Beltré debuts for the Dodgers and begins setting the modern standard for soft hands" },
        { year: 2008, event: "Beltré's glovework earns Gold Gloves and a reputation as the era's best defensive third baseman", highlight: true },
        { year: 1990, event: "Reaction-ball and rapid short-hop drills standardized for the hot corner" },
        { year: 2010, event: "Defensive metrics credit third-base reactions and knockdowns" },
        { year: 2020, event: "Reaction training refined with technology for corner infielders" },
      ],
      keyTakeaways: [
        "Many balls at third can't be fielded cleanly — knock them down, keep them close, and still make the play",
        "Soft hands give with the ball to absorb hard smashes and short hops; stabbing rigidly deflects them",
        "After a knockdown, stay calm and throw — the runner is usually slower than a hard-hit ball, so there's often still time",
        "Build reactions with rapid short-hop and reaction-ball drills, expect the ball every pitch, and never flinch",
      ],
      references: [
        { title: "USA Baseball: Infield Reactions and Soft Hands", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Adrián Beltré", url: "https://baseballhall.org/hall-of-famers/beltre-adrian" },
        { title: "Little League: Fielding Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-11-03-q1",
          type: "Knockdown",
          challenge: `  A rocket is hit to the third baseman that he can't
  catch cleanly. He knocks it down with his glove,
  and the ball drops a few feet in front of him.`,
          text: "After knocking down a hard smash, what should the third baseman do?",
          options: [
            "Give up on the play — a knockdown can't become an out",
            "Stay calm, pick the ball up, and make a strong throw — the runner is usually slower than the ball, so there's often still time for the out",
            "Kick the ball to the shortstop",
            "Throw the ball to the dugout",
          ],
          correctIndex: 1,
          explanation: "A knockdown is not a failure — it's often still an out. Because a hard-hit ball travels faster than the runner runs, a third baseman who knocks the ball down, keeps it close, stays composed, and makes a strong throw frequently still retires the batter. Adrián Beltré built a legend on exactly this: he often knocked smashes down rather than fielding them cleanly, then recovered and threw out the runner. Composure after the knockdown is key.",
        },
        {
          id: "baseball-11-03-q2",
          type: "Soft Hands",
          challenge: `  A third baseman stabs rigidly at a hard short hop
  with a stiff, locked wrist, and the ball ricochets
  off his glove and rolls away.`,
          text: "What technique would help him control the hard short hop?",
          options: [
            "Stab even harder at the ball",
            "Use soft hands — give with the glove to absorb the ball's velocity and keep it in front, rather than stabbing rigidly",
            "Close his eyes on contact",
            "Catch it with his bare hand",
          ],
          correctIndex: 1,
          explanation: "Hard-hit balls and short hops require soft hands. The third baseman gives with the glove and hands — a slight recoil that absorbs the velocity and keeps the ball in front and controllable. Stabbing rigidly at a hard ball causes it to deflect off the glove and away. Soft, giving hands are what allow a third baseman to secure (or at least knock down and keep close) the hardest-hit balls.",
        },
        {
          id: "baseball-11-03-q3",
          type: "Mindset",
          challenge: `  A young third baseman tends to relax and hope the
  ball is hit elsewhere, then reacts a step slow
  when a smash actually comes his way.`,
          text: "What mental habit would improve his reactions at the hot corner?",
          options: [
            "Hoping the ball goes to another fielder",
            "Expecting the ball on every pitch from a low, loaded, ready stance — anticipation speeds reaction time",
            "Standing more upright to relax",
            "Looking at the runner instead of the hitter",
          ],
          correctIndex: 1,
          explanation: "Reaction time improves dramatically with anticipation. A third baseman who expects the ball on every single pitch — low, loaded, and mentally ready for a smash — reacts far faster than one hoping the ball goes elsewhere. With so little time at the hot corner, that readiness is the difference between making the play and getting handcuffed. Combined with reaction drills, the expect-it-every-pitch mindset builds the reflexes the position demands.",
        },
        {
          id: "baseball-11-03-q4",
          type: "Courage",
          challenge: `  Facing a hard-hitting batter, a third baseman
  flinches and turns his head away as the ball is
  smashed toward him, and it gets past him.`,
          text: "Why is fearlessness essential at third base?",
          options: [
            "It isn't — flinching is a good safety habit",
            "A third baseman who flinches or turns away can't get his glove or body in front of the hardest-hit balls, so courage is required to field the position",
            "Courage only matters for hitters",
            "The ball never actually comes hard at third base",
          ],
          correctIndex: 1,
          explanation: "Fearlessness is a core requirement at the hot corner. A third baseman who flinches or turns away from a hard-hit ball cannot get his glove or body in front of it, and the ball gets past him. Fielding rockets demands the courage to stay down, keep the eyes on the ball, and attack it. Combined with soft hands and quick reflexes, that fearlessness is what lets a third baseman handle the hardest chances in the game.",
        },
      ],
    },
  },

  // ─── baseball-11-04: The Long Throw ───────────────────────────────────────────
  {
    epochId: "baseball-11",
    wonder: {
      name: "Coors Field",
      location: "Denver, Colorado",
      era: "Modern",
      emoji: "🎯",
    },
    id: "baseball-11-04",
    order: 4,
    title: "The Long Throw Across the Diamond",
    subtitle: "Arm strength, footwork, and accuracy from the corner",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-11-badge-04", name: "Cannon Arm", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "From the hot corner it's a long way to first — a strong, accurate arm and clean footwork get the ball there in time.",
      year: 2013,
      overview: [
        "The throw from third to first is the longest routine throw an infielder makes, so a strong, accurate arm is one of the two defining requirements (along with quick reactions). But arm strength alone isn't enough — it must pair with:\n- Footwork that creates momentum toward first.\n- A quick, clean transfer.\n- The ability to throw accurately from any angle.\nMany third-base throws come from awkward spots — deep behind the bag, charging a slow roller, or after knocking down a smash.",
        "Footwork creates both velocity and accuracy on the long throw:\n- With time — gather, step toward first with the front shoulder aligned to the target, and throw through it, using a crow-hop or shuffle to build momentum across the diamond.\n- Deep in the hole — plant the back foot and throw across the body.\nThe four-seam grip is essential for a straight, true ball over that distance; a poor grip makes the throw tail or sink and pulls the first baseman off the bag.",
        "Accuracy matters as much as velocity over the long throw, because there's more distance for an errant throw to sail. The third baseman aims chest-high at the first baseman, giving him a catchable target. On do-or-die plays charging a slow roller, the throw is often made on the run, sometimes underhand or sidearm — accuracy and getting rid of the ball quickly matter more than raw power. Building a strong, accurate arm and the footwork to use it from any position is the heart of throwing from third base.",
      ],
      technical: {
        title: "Footwork and Mechanics on the Long Throw",
        body: [
          "With time: gather after fielding, align the front shoulder to first base, and step toward the target, using a crow-hop or shuffle to build momentum across the diamond. Throw through the target with a four-seam grip for a straight, true ball, aiming chest-high. The legs and footwork generate much of the velocity, sparing the arm and improving accuracy.",
          "From awkward positions: on a ball deep in the hole, plant the back foot and throw across the body with a strong, accurate motion; on a charging slow roller, throw on the run, often sidearm or underhand, prioritizing a quick release and accuracy over power. Always use a four-seam grip when possible. Because the throw is long, accuracy is critical — aim chest-high and give the first baseman a catchable target rather than overthrowing.",
        ],
        codeExample: {
          label: "The Long Throw from Third",
          code: `  WITH TIME (routine grounder):
  1. Field, GATHER, align front shoulder to 1B
  2. CROW-HOP / shuffle → momentum across the
     diamond (legs generate velocity)
  3. FOUR-SEAM grip → straight, true ball
  4. Throw THROUGH the target, CHEST-HIGH

  DEEP IN THE HOLE:
  → Plant the back foot, throw ACROSS THE BODY
    with a strong, accurate motion

  CHARGING A SLOW ROLLER (do-or-die):
  → Throw ON THE RUN — often sidearm/underhand
  → QUICK release + ACCURACY > raw power

  KEY: it's the LONGEST infield throw, so
  ACCURACY matters as much as velocity. Aim
  chest-high — a catchable throw beats a wild
  fastball that sails.`,
        },
      },
      incident: {
        title: "The Cannon Arms of the Hot Corner",
        when: "2013 — the modern defensive era",
        where: "Coors Field and ballparks across the game",
        impact: "Modern third basemen like Nolan Arenado and Adrián Beltré became famous for cannon arms paired with elite footwork — making strong, accurate throws from deep in the hole, across the body, and on the run that turned impossible plays into outs.",
        body: [
          "The modern hot corner has showcased some of the strongest, most accurate arms in baseball. Third basemen like Adrián Beltré and Nolan Arenado became legendary not just for arm strength but for the footwork and body control that let them throw accurately from any position — deep behind the bag, off-balance, across the body, even from their knees. Beltré's throws from the hole and Arenado's plays on the run demonstrated that the long throw is as much about footwork and release as raw power.",
          "Their example teaches that a third baseman builds throwing ability on two foundations: a strong arm developed through proper mechanics and arm care, and the footwork to create momentum and accuracy from any angle. Because the throw across the diamond is so long, accuracy is paramount — a chest-high, catchable throw beats a blazing one that sails. Mastering the long throw from every position the hot corner demands is essential to completing the plays that arm makes possible.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Field the Ball", sub: "often awkward position", type: "system" },
          { label: "Footwork for Momentum", sub: "gather, crow-hop, or plant", type: "attacker" },
          { label: "Four-Seam, Throw Through", sub: "straight and true", type: "victim" },
          { label: "Chest-High to First", sub: "accuracy over the long throw", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Strong arm established as a defining third-base requirement" },
        { year: 1980, event: "Footwork-for-momentum technique taught for the long throw" },
        { year: 2004, event: "Adrián Beltré's elite arm and footwork redefine third-base throwing" },
        { year: 2013, event: "Nolan Arenado's on-the-run and across-the-body throws showcase the modern hot corner", highlight: true },
        { year: 2020, event: "Throwing mechanics and arm care refined with technology" },
      ],
      keyTakeaways: [
        "The throw from third to first is the longest routine infield throw — a strong, accurate arm is essential",
        "Footwork creates velocity and accuracy: gather and step with momentum, or plant and throw across the body from the hole",
        "Use a four-seam grip for a straight, true ball over the long distance, and aim chest-high at the first baseman",
        "On do-or-die charging plays, throw on the run with a quick release — accuracy beats raw power over the long throw",
      ],
      references: [
        { title: "USA Baseball: Infield Throwing Mechanics", url: "https://www.usabaseball.com" },
        { title: "Little League: Throwing Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Third Base Defense", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-11-04-q1",
          type: "Footwork",
          challenge: `  A third baseman fields a routine grounder with
  time, but throws flat-footed using only his arm.
  The throw sails and lacks velocity.`,
          text: "What footwork would add velocity and accuracy to the long throw?",
          options: [
            "Throwing harder with just the arm",
            "Gather, align the front shoulder to first, and step toward the target with a crow-hop or shuffle to build momentum across the diamond",
            "Throwing while jumping straight up",
            "Turning his back to first base",
          ],
          correctIndex: 1,
          explanation: "A flat-footed, all-arm throw lacks velocity and accuracy. On the long throw, the third baseman gathers after fielding, aligns the front shoulder to first, and steps toward the target with a crow-hop or shuffle to build momentum across the diamond. The legs and footwork generate much of the velocity and improve accuracy, sparing the arm. Footwork makes the long throw possible — it's not just arm strength.",
        },
        {
          id: "baseball-11-04-q2",
          type: "Accuracy",
          challenge: `  Over the long throw from third, a player tries to
  throw as hard as humanly possible, and the ball
  sails high and pulls the first baseman off the bag.`,
          text: "Why does accuracy matter as much as velocity on the throw from third?",
          options: [
            "It doesn't — only velocity matters",
            "The throw is the longest on the infield, giving an errant throw more distance to sail; a chest-high, catchable throw beats a blazing one that pulls the first baseman off the bag",
            "First basemen prefer fast throws that sail",
            "Accuracy only matters on short throws",
          ],
          correctIndex: 1,
          explanation: "Because the throw across the diamond is the longest on the infield, there's more distance for an errant throw to sail off-target. Overthrowing to maximize velocity often causes the ball to sail high and pull the first baseman off the bag, losing the out. A chest-high, accurate, catchable throw is far more valuable than a blazing one that misses. Accuracy is at least as important as arm strength over the long throw.",
        },
        {
          id: "baseball-11-04-q3",
          type: "Grip",
          challenge: `  A third baseman grabs the ball with a random grip
  and throws to first; the ball tails badly over
  the long distance and the first baseman has to
  reach.`,
          text: "Why is the four-seam grip especially important on the long throw from third?",
          options: [
            "It adds spin that curves the ball on purpose",
            "A four-seam grip produces a straight, true ball with backspin; over the long distance, a poor grip causes the ball to tail or sink and miss the target",
            "Grip doesn't affect a thrown ball",
            "It only matters for pitchers",
          ],
          correctIndex: 1,
          explanation: "A four-seam grip — fingers across the seams — produces pure backspin and a straight, true throw. Over the long distance from third to first, a random grip's side-spin or sink is magnified, causing the ball to tail or sink and miss the target, pulling the first baseman off the bag. Securing a four-seam grip during the transfer is essential for an accurate long throw. The longer the throw, the more grip matters.",
        },
        {
          id: "baseball-11-04-q4",
          type: "On the Run",
          challenge: `  A slow roller dribbles toward third. The third
  baseman charges hard and must throw while still
  moving forward, with no time to set his feet.`,
          text: "How should the third baseman throw on a do-or-die charging play?",
          options: [
            "Stop completely and set his feet before throwing",
            "Throw on the run — often sidearm or underhand — prioritizing a quick release and accuracy over raw power",
            "Throw home instead of to first",
            "Hold the ball since there's no play",
          ],
          correctIndex: 1,
          explanation: "On a do-or-die charging play, there's no time to stop and set the feet — the third baseman must throw on the run, often sidearm or underhand, getting rid of the ball quickly. A quick release and accuracy matter more than raw power here, because the play is a race and the throw is shorter than from deep behind the bag. This is one of the hot corner's signature plays, requiring practiced footwork and a quick, accurate release.",
        },
      ],
    },
  },

  // ─── baseball-11-05: Building the Third Baseman's Body ────────────────────────
  {
    epochId: "baseball-11",
    wonder: {
      name: "Globe Life Field",
      location: "Arlington, Texas",
      era: "Modern",
      emoji: "💪",
    },
    id: "baseball-11-05",
    order: 5,
    title: "Building the Third Baseman's Body",
    subtitle: "Reflexes, first-step quickness, and arm strength",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-11-badge-05", name: "Fast Twitch", emoji: "⚡" },
    challengeType: "quiz",
    info: {
      tagline: "The hot corner is built on reflexes and a strong arm — train fast-twitch reactions and a durable, powerful throwing motion.",
      year: 2010,
      overview: [
        "The third baseman's body is built around two physical priorities:\n- Reaction quickness — fast-twitch reflexes and an explosive first step to handle the hardest-hit balls.\n- Arm strength — to make the longest infield throw.\nUnlike the second baseman's lateral range or the shortstop's all-around athleticism, third base concentrates on quick hands and reactions over short distances, plus the power and durability to throw across the diamond from any position.",
        "Reaction and quickness training is central:\n- Fast-twitch reflexes — rapid short hops, reaction balls, hand-eye and reflex drills.\n- First-step explosiveness work.\n- Strong legs and a powerful core for the explosive first step, awkward-angle throws, and charging on the run.\nSingle-leg strength and balance help the third baseman throw accurately from off-balance positions — deep in the hole or charging a slow roller.",
        "Arm strength and durability are the other pillar. A strong throwing arm is built through proper mechanics, long-toss programs, and rotator-cuff and scapular strengthening to protect the shoulder over the high-effort throws the position demands. Core strength powers the across-the-body throws, and flexibility and mobility (hips, thoracic spine, shoulder) keep the fielding low and the throwing motion free and healthy. The third baseman's ideal build is explosive, fearless, and strong-armed — fast-twitch reactions paired with a durable cannon.",
      ],
      technical: {
        title: "Training Priorities for Third Basemen",
        body: [
          "Reactions and quickness: prioritize fast-twitch reflex training (rapid short hops, reaction balls, hand-eye drills) and first-step explosiveness. Strong legs and a powerful core support the explosive first step and the ability to charge and field on the run. Single-leg strength and balance enable accurate throws from off-balance positions.",
          "Arm strength and durability: build the throwing arm through sound mechanics, long-toss, and rotator-cuff and scapular strengthening to protect the shoulder over the long, high-effort throws. Core strength powers across-the-body throws; hip, thoracic, and shoulder mobility keep the fielding low and the arm free and healthy. The ideal: explosive reactions, fearless hands, and a durable, powerful arm.",
        ],
        codeExample: {
          label: "Third Baseman Body-Building Priorities",
          code: `  REACTIONS + QUICKNESS (the hot corner's core):
  → Fast-twitch reflex training: rapid short hops,
    reaction balls, hand-eye / reflex drills
  → First-step explosiveness
  → Strong legs + core → explosive first step,
    charge + field on the run
  → Single-leg strength/balance → off-balance throws

  ARM STRENGTH + DURABILITY:
  → Sound throwing MECHANICS + long-toss program
  → Rotator cuff / scapular work → protect the
    shoulder over the LONG, high-effort throws
  → Core strength → across-the-body throws

  MOBILITY:
  → Hip / thoracic / shoulder mobility → field low,
    throw free + healthy

  IDEAL: explosive, fearless, strong-armed.`,
        },
      },
      incident: {
        title: "The Explosive, Strong-Armed Modern Third Baseman",
        when: "2010s — the modern athleticism era",
        where: "Globe Life Field and ballparks across the game",
        impact: "Elite modern third basemen combined fast-twitch reflexes with powerful, durable arms — training that emphasized reaction quickness and arm strength produced defenders who handled the hot corner's hardest chances and made throws from anywhere.",
        body: [
          "The best modern third basemen are defined physically by explosive reactions and powerful arms. Players who train fast-twitch reflexes can get their glove or body in front of the hardest smashes, and those who build strong, durable arms can complete the long throw from any position. The position's value — handling rockets and making the long throw — rewards this specific combination of quickness over short distances and throwing power.",
          "Their training reflects those priorities: reaction drills and first-step explosiveness for the reflexes, long-toss and rotator-cuff work for the arm, and core and single-leg strength to throw from awkward positions. The lesson for young players is that third base is built on reflexes and a strong arm. Develop fast-twitch reactions and a durable, powerful throwing motion — along with the fearlessness to use them — and you build the body the hot corner demands.",
        ],
      },
      diagram: {
        nodes: [
          { label: "The Position's Demands", sub: "rockets + the long throw", type: "attacker" },
          { label: "Reactions + Quickness", sub: "fast-twitch, first step", type: "system" },
          { label: "Arm Strength + Durability", sub: "long-toss, cuff care, core", type: "victim" },
          { label: "Handle Rockets, Throw from Anywhere", sub: "explosive and strong-armed", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Reaction and reflex training emphasized for corner infielders" },
        { year: 2005, event: "Long-toss and arm-care programs standardized in development" },
        { year: 2010, event: "Fast-twitch reflexes and arm strength recognized as the third-base ideal", highlight: true },
        { year: 2018, event: "Single-leg strength and core stability standard in infield training" },
        { year: 2022, event: "Reaction technology and arm-care programs tailored to the hot corner" },
      ],
      keyTakeaways: [
        "Third base is built on two priorities: fast-twitch reaction quickness and arm strength",
        "Train reflexes with rapid short-hop and reaction-ball drills, plus first-step explosiveness",
        "Build the arm with sound mechanics, long-toss, and rotator-cuff care for the long, high-effort throws",
        "Core and single-leg strength power across-the-body throws; mobility keeps fielding low and the arm healthy",
      ],
      references: [
        { title: "USA Baseball: Athlete Development and Arm Care", url: "https://www.usabaseball.com" },
        { title: "Little League: Conditioning Basics", url: "https://www.littleleague.org/playing-rules/" },
        { title: "MLB: Corner Infield Athleticism", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-11-05-q1",
          type: "Priority",
          challenge: `  A coach is designing a training program for a
  young third baseman and asks which physical
  qualities to emphasize for the hot corner.`,
          text: "Which two physical priorities most define a third baseman?",
          options: [
            "Long-distance endurance and flexibility only",
            "Fast-twitch reaction quickness and arm strength — reflexes for the hardest-hit balls and a strong arm for the long throw",
            "Maximum size and weight",
            "Base-stealing speed and bunting",
          ],
          correctIndex: 1,
          explanation: "Third base concentrates on two physical priorities: fast-twitch reaction quickness (to handle the hardest-hit balls with little reaction time) and arm strength (to make the longest infield throw). Unlike positions that emphasize lateral range, the hot corner is about quick reactions over short distances plus throwing power. Training should emphasize reflexes, first-step explosiveness, and a strong, durable arm.",
        },
        {
          id: "baseball-11-05-q2",
          type: "Reactions",
          challenge: `  A third baseman wants to improve his ability to
  react to hard smashes and short hops.`,
          text: "Which type of training most directly builds reaction quickness?",
          options: [
            "Long-distance jogging",
            "Fast-twitch reflex drills — rapid short hops, reaction balls with unpredictable bounces, and hand-eye training",
            "Heavy bench pressing only",
            "Stretching alone",
          ],
          correctIndex: 1,
          explanation: "Reaction quickness is built through fast-twitch reflex training: rapid-fire short hops, reaction balls that bounce unpredictably, and hand-eye/reflex drills. These train the hands and reflexes to respond in the split second available at the hot corner. Combined with first-step explosiveness work, they develop the lightning reactions the position demands — something long-distance cardio or pure strength work won't provide.",
        },
        {
          id: "baseball-11-05-q3",
          type: "Arm Care",
          challenge: `  A third baseman makes long, high-effort throws
  across the diamond all game and wants to keep his
  arm strong and healthy over a full season.`,
          text: "What training protects and builds the throwing arm for the long throw?",
          options: [
            "Avoiding all throwing in practice",
            "Sound throwing mechanics, a long-toss program, and rotator-cuff and scapular strengthening to protect the shoulder",
            "Only lifting heavy weights with the legs",
            "Throwing as hard as possible with no warm-up",
          ],
          correctIndex: 1,
          explanation: "A strong, durable throwing arm is built through sound mechanics, a long-toss program to develop arm strength safely, and rotator-cuff and scapular strengthening to protect the shoulder from the long, high-effort throws the position demands. Core strength supports across-the-body throws. This arm-care foundation keeps the arm both powerful and healthy over a full season of long throws from the hot corner.",
        },
        {
          id: "baseball-11-05-q4",
          type: "Off-Balance",
          challenge: `  A third baseman frequently has to throw to first
  from deep in the hole or while charging a slow
  roller, off-balance and on one leg.`,
          text: "Which training helps him throw accurately from off-balance positions?",
          options: [
            "Only two-legged squats",
            "Single-leg strength and balance training, plus core strength, to stabilize and power throws from off-balance positions",
            "Long-distance running",
            "Upper-body work alone",
          ],
          correctIndex: 1,
          explanation: "Third basemen constantly throw from off-balance positions — deep in the hole, across the body, or charging on the run. Single-leg strength and balance training, combined with a strong core, give the third baseman the stability and power to make accurate throws from these awkward positions. This complements the reaction and arm work that define the hot corner's physical training.",
        },
      ],
    },
  },

  // ─── baseball-11-06: Charging Slow Rollers and Bunts ──────────────────────────
  {
    epochId: "baseball-11",
    wonder: {
      name: "Truist Park",
      location: "Atlanta, Georgia",
      era: "Modern",
      emoji: "🏃",
    },
    id: "baseball-11-06",
    order: 6,
    title: "Charging Slow Rollers and Bunts",
    subtitle: "The do-or-die play — bare-hand and throw on the run",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-11-badge-06", name: "Do or Die", emoji: "🏃" },
    challengeType: "quiz",
    info: {
      tagline: "The slow roller is the hot corner's signature test — charge it, bare-hand it, and throw on the run, all in one motion.",
      year: 1970,
      overview: [
        "The charging play on a slow roller or bunt is the third baseman's signature challenge — often called the 'do-or-die' play because there's no time to do anything but attack the ball and throw in one motion. When a ball is hit softly toward third or bunted, the third baseman must charge hard, field it (often barehanded if the ball is nearly stopped), and throw on the run to first, all in a fraction of a second. It's the play that separates great third basemen from average ones, and Adrián Beltré made it look routine.",
        "The technique on the do-or-die charge:\n- Charge under control and circle the ball slightly so the body is moving toward first.\n- Field with the glove on a moving ball; barehand a ball that's nearly stopped (a glove can't pick a dead ball quickly enough).\n- Time the barehand pickup with the throwing-side foot — field with the right foot down, then step and throw off the next step.\nThe throw is made on the run, usually sidearm or a quick three-quarter motion, prioritizing a fast release and accuracy.",
        "Footwork and rhythm are everything:\n- The charge must be controlled, not reckless — overrunning the ball or fielding flat-footed kills the play.\n- The best third basemen field the ball in stride, in rhythm with their feet, so field-and-throw is one continuous motion.\n- On a true do-or-die play, getting rid of the ball quickly matters more than a perfect throw.\nIt's built through endless repetition of charging, barehanding, and throwing on the run until the rhythm is automatic.",
      ],
      technical: {
        title: "The Do-or-Die Charging Play",
        body: [
          "Charge and field: attack the slow roller or bunt under control, circling slightly so your momentum carries toward first base. On a moving ball, use the glove; on a nearly-stopped or dead ball, barehand it — a glove can't scoop a dead ball quickly enough. Time the pickup with the throwing-side foot (field with the right foot down for a right-handed thrower) so fielding and throwing flow in rhythm.",
          "Throw on the run: come up throwing in one motion, usually sidearm or three-quarter, off the step after the pickup. Prioritize a quick release and accuracy over power — the play is a race. Stay under control during the charge; overrunning the ball or fielding it flat-footed ruins the rhythm. Field the ball in stride, in time with the feet, so the whole play is one continuous, rhythmic motion. Built through endless repetition.",
        ],
        codeExample: {
          label: "The Do-or-Die Slow Roller / Bunt",
          code: `  SLOW ROLLER / BUNT TOWARD THIRD:
  1. CHARGE under control (not reckless)
  2. CIRCLE slightly → momentum toward first base
  3. FIELD it:
     → moving ball → GLOVE
     → dead / nearly stopped → BARE-HAND
       (a glove can't pick a dead ball fast enough)
  4. TIME the pickup with the throwing-side foot
     (RH thrower: field with the RIGHT foot down)
  5. THROW ON THE RUN, sidearm / three-quarter,
     off the next step — one continuous motion
  6. QUICK release + ACCURACY > power (it's a race)

  RHYTHM is everything: field IN STRIDE, in time
  with the feet. Overrunning or fielding flat-footed
  kills the play. Built by REPETITION.`,
        },
      },
      incident: {
        title: "Adrián Beltré's Bare-Handed Charge",
        when: "1998–2018 — a Hall of Fame career",
        where: "Truist Park and ballparks across the game",
        impact: "Adrián Beltré's bare-handed charges on slow rollers and bunts — fielding the ball in stride and throwing on the run, often off-balance, to nip the runner — became a defining image of third-base mastery, replicated by generations of great third basemen.",
        body: [
          "Among Adrián Beltré's most iconic plays were his bare-handed charges: attacking a slow roller or bunt, scooping the dead ball with his bare hand in stride, and firing to first on the run — often off-balance — to retire the runner by a step. He made the do-or-die play — the hardest and most exciting at the hot corner — look effortless and routine, because his footwork, rhythm, and quick release were so refined. Hitters who thought a soft tap toward third was a sure hit found Beltré throwing them out.",
          "The play has remained a hallmark of great third basemen, from Beltré to Nolan Arenado and beyond, all of whom mastered the charge, the barehand, and the throw on the run. What looks like pure instinct is built through thousands of repetitions until the field-and-throw is one rhythmic motion. For young third basemen, the do-or-die play is the ultimate test of the position — and mastering it, through relentless practice of charging and barehanding, is a rite of passage at the hot corner.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Slow Roller / Bunt", sub: "do-or-die play", type: "attacker" },
          { label: "Charge Under Control", sub: "circle, momentum to first", type: "system" },
          { label: "Bare-Hand in Stride", sub: "timed with the feet", type: "victim" },
          { label: "Throw on the Run", sub: "quick release, nip the runner", type: "result" },
        ],
      },
      timeline: [
        { year: 2004, event: "Adrián Beltré's bare-handed charges become a hot-corner hallmark" },
        { year: 2011, event: "Beltré's off-balance throws and charges define elite modern defense", highlight: true },
        { year: 1990, event: "Charge-and-throw rhythm drills standard in third-base coaching" },
        { year: 2013, event: "Beltré and Arenado showcase modern do-or-die mastery" },
        { year: 2020, event: "Barehand and on-the-run throwing technique refined in development" },
      ],
      keyTakeaways: [
        "The do-or-die charging play on slow rollers and bunts is the third baseman's signature challenge",
        "Charge under control, circle slightly toward first, and barehand a dead ball (a glove can't pick it fast enough)",
        "Time the pickup with the throwing-side foot so fielding and throwing flow in one rhythmic motion",
        "Throw on the run with a quick sidearm release — accuracy and quickness beat power because the play is a race",
      ],
      references: [
        { title: "USA Baseball: Slow Roller and Bunt Defense", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Adrián Beltré", url: "https://baseballhall.org/hall-of-famers/beltre-adrian" },
        { title: "Little League: Infield Charging Plays", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-11-06-q1",
          type: "Barehand",
          challenge: `  A bunt rolls toward third and comes nearly to a
  stop in the grass. The third baseman charges and
  tries to scoop it with his glove, but can't get
  it out cleanly in time.`,
          text: "How should the third baseman field a nearly-stopped or dead ball on a do-or-die play?",
          options: [
            "Always use the glove, no matter what",
            "Bare-hand it — a glove can't pick a dead ball quickly enough, so the barehand pickup is necessary to field and throw in time",
            "Wait for the ball to start rolling again",
            "Kick the ball toward first base",
          ],
          correctIndex: 1,
          explanation: "A glove can't scoop a dead or nearly-stopped ball quickly enough on a do-or-die play, so the third baseman bare-hands it. The barehand pickup, timed with the footwork, lets him field and throw in one rhythmic motion fast enough to retire the runner. On a still-moving ball there may be time to use the glove, but a dead ball demands the bare hand — a signature skill of the hot corner.",
        },
        {
          id: "baseball-11-06-q2",
          type: "Rhythm",
          challenge: `  A third baseman charges a slow roller, fields it,
  then stops, gathers himself, sets his feet, and
  throws — and the runner beats it out.`,
          text: "What's the key to making the do-or-die play in time?",
          options: [
            "Always stop and set the feet before throwing",
            "Field the ball in stride, in rhythm with the feet, so the field-and-throw is one continuous motion with a quick release on the run",
            "Throw the ball as hard as possible",
            "Field the ball flat-footed",
          ],
          correctIndex: 1,
          explanation: "The do-or-die play is a race won by rhythm. The third baseman fields the ball in stride, timed with his feet, so the fielding and throwing flow as one continuous motion with a quick release on the run. Stopping to gather and set the feet — as natural as it feels — takes too long and lets the runner beat it out. The whole play must be fluid: charge, field in rhythm, and throw on the run.",
        },
        {
          id: "baseball-11-06-q3",
          type: "Control",
          challenge: `  Eager to make a great play, a third baseman sprints
  at a slow roller recklessly, overruns the ball,
  and has to reach back for it, botching the play.`,
          text: "Why must the charge be under control rather than reckless?",
          options: [
            "There's no need for control — faster is always better",
            "Overrunning the ball or charging recklessly disrupts the footwork rhythm needed to field in stride and throw on the run; the charge must be controlled and timed",
            "Control only matters on routine grounders",
            "Reckless charging intimidates the runner",
          ],
          correctIndex: 1,
          explanation: "A reckless charge that overruns the ball forces the third baseman to reach back or stop, destroying the footwork rhythm that makes the do-or-die play work. The charge must be under control and timed so the player fields the ball in stride, in rhythm with the throwing-side foot, and flows into the throw. Controlled aggression — not recklessness — is what allows the field-and-throw to happen in one motion.",
        },
        {
          id: "baseball-11-06-q4",
          type: "The Throw",
          challenge: `  On a do-or-die play, a third baseman fields the
  ball on the run and has a split second to release.
  He tries to plant and throw a perfect overhand
  fastball, and the runner is safe.`,
          text: "What kind of throw is best on a do-or-die charging play?",
          options: [
            "A full overhand throw after planting and setting",
            "A quick sidearm or three-quarter throw on the run, prioritizing a fast release and accuracy over power",
            "A high looping lob",
            "No throw — concede the play",
          ],
          correctIndex: 1,
          explanation: "On a do-or-die play, there's no time to plant and throw a full overhand fastball. The third baseman throws on the run with a quick sidearm or three-quarter motion, prioritizing a fast release and accuracy over raw power. The play is a race, and getting rid of the ball quickly — even from a less powerful arm slot — is what nips the runner. The throw flows out of the charging footwork in one motion.",
        },
      ],
    },
  },

  // ─── baseball-11-07: Backhands and Guarding the Line ──────────────────────────
  {
    epochId: "baseball-11",
    wonder: {
      name: "Oracle Park",
      location: "San Francisco, California",
      era: "Modern",
      emoji: "↩️",
    },
    id: "baseball-11-07",
    order: 7,
    title: "Backhands and Range to the Line",
    subtitle: "Diving stops, the hole, and protecting the corner",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-11-badge-07", name: "Backhand", emoji: "↩️" },
    challengeType: "quiz",
    info: {
      tagline: "Balls down the line and into the hole demand the backhand and the dive — and the strong-armed recovery throw.",
      year: 2004,
      overview: [
        "Though third base prioritizes reactions over range, the third baseman must still cover two areas:\n- Down the third-base line — where a ball that gets past is an extra-base hit.\n- Into the hole toward shortstop.\nBoth often require a backhand play, and sometimes a dive. The backhand into the hole, followed by a strong throw across the body from deep, is one of the most demanding and impressive plays a third baseman makes.",
        "The backhand technique, step by step:\n- On a ball to the glove side, take a crossover step and get the glove out and turned over (palm to the ball, fingers down or to the side).\n- Field the ball out in front on the backhand.\n- Plant the back foot to throw — deep in the hole, plant hard on the right foot and throw across the body all the way to first.\nOn balls just out of reach, a dive to the backhand keeps the ball from going down the line for extra bases.",
        "Diving and recovering is part of protecting the line and the hole. A diving stop down the line can save a double; a dive into the hole can save a hit. After a dive, the third baseman must get up quickly, find the ball or set the feet, and decide whether a throw is still possible — sometimes the dive simply keeps the ball in the infield. Knowing when to dive (when the ball is otherwise unreachable and the stop matters) versus when to keep it in front is situational judgment. The backhand and the dive extend the hot corner's range to the line and the hole.",
      ],
      technical: {
        title: "The Backhand Play and Diving Stops",
        body: [
          "The backhand: on a ball to the glove side, crossover step and extend the glove turned over (palm to the ball), fielding it out in front on the backhand. Plant the back (right) foot hard to anchor, then throw across the body to first. On a ball deep in the hole, this plant-and-throw from the backhand requires a strong arm and clean footwork — one of the position's signature plays.",
          "Diving stops: dive to the backhand or forehand on balls otherwise unreachable, especially down the line (to prevent a double) or into the hole (to prevent a hit). After the dive, get up quickly, find the ball, set the feet if there's time, and decide whether the throw is still on — sometimes simply keeping the ball in the infield is the win. Judge when to dive (unreachable ball, the stop matters) versus when to stay back and keep it in front.",
        ],
        codeExample: {
          label: "Backhand and Diving Range",
          code: `  BALL TO THE GLOVE SIDE (line or hole):
  1. CROSSOVER step toward the ball
  2. Glove OUT and TURNED OVER (palm to the ball,
     fingers down/side) → field on the BACKHAND,
     out in front
  3. PLANT the back (right) foot HARD to anchor
  4. THROW ACROSS THE BODY to first
     → deep in the hole = strong arm + clean
       footwork (a signature play)

  DIVING STOPS:
  → Dive when the ball is otherwise UNREACHABLE
    and the stop matters (line = stop the double;
    hole = stop the hit)
  → After the dive: up FAST, find the ball, set if
    time, decide if the throw is on
  → Sometimes keeping it in the infield IS the win

  Judge: DIVE (unreachable, stop matters) vs STAY
  BACK + keep it in front.`,
        },
      },
      incident: {
        title: "Adrián Beltré's Throws from the Hole",
        when: "2004 — and across a 21-year career",
        where: "Oracle Park and ballparks across the game",
        impact: "Adrián Beltré became famous for backhanding balls deep in the hole and throwing across his body — sometimes from one knee — all the way to first, demonstrating the backhand-and-strong-arm range that defines elite third-base defense.",
        body: [
          "Adrián Beltré, one of the greatest defensive third basemen ever, made the backhand play from deep in the hole a signature. He would range to his right, field the ball on the backhand, plant, and fire across his body — sometimes from off-balance positions or even from one knee — to throw out runners by a step. His arm strength and footwork made plays look possible that seemed impossible, extending his range to the hole far beyond what reactions alone could cover.",
          "Beltré's example shows how the backhand and a strong arm combine to give a third baseman range to the line and the hole. The backhand fields the ball cleanly on the glove side; the plant-and-throw from the backhand delivers it across the diamond. Paired with the willingness to dive on otherwise-unreachable balls, these skills protect the corner from extra-base hits and turn balls in the hole into outs. They're built through repetition of backhand footwork and the strong-armed recovery throw.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball to the Glove Side", sub: "down the line or in the hole", type: "attacker" },
          { label: "Crossover, Backhand It", sub: "glove turned over, out front", type: "system" },
          { label: "Plant and Throw Across Body", sub: "strong arm from the hole", type: "victim" },
          { label: "Range Protected", sub: "double or hit prevented", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Backhand and diving technique refined for corner infielders" },
        { year: 2007, event: "Adrián Beltré's diving stops and backhands set the standard for line defense" },
        { year: 2004, event: "Adrián Beltré's backhand throws from the hole redefine third-base range", highlight: true },
        { year: 2013, event: "Nolan Arenado adds elite diving and backhand plays at the corner" },
        { year: 2020, event: "Range and backhand metrics quantified by Statcast" },
      ],
      keyTakeaways: [
        "Third base must cover the line (where a ball past is an extra-base hit) and the hole toward shortstop",
        "The backhand fields balls on the glove side with the glove turned over, then plant the back foot to throw across the body",
        "The backhand-and-throw from deep in the hole is a signature play demanding a strong arm and clean footwork",
        "Dive on otherwise-unreachable balls — especially to stop a double down the line — then recover and decide if the throw is on",
      ],
      references: [
        { title: "USA Baseball: Backhand and Range Technique", url: "https://www.usabaseball.com" },
        { title: "Little League: Infield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Third Base Defense", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-11-07-q1",
          type: "Backhand",
          challenge: `  A ground ball is hit hard to the third baseman's
  glove side, into the hole toward shortstop, just
  out of reach for a normal forehand.`,
          text: "How should the third baseman field a ball hit to his glove side in the hole?",
          options: [
            "Reach across his body with a forehand",
            "Crossover step and field it on the backhand with the glove turned over, then plant the back foot and throw across the body",
            "Let it go to the shortstop every time",
            "Field it between his legs",
          ],
          correctIndex: 1,
          explanation: "A ball to the glove side in the hole requires a backhand play: crossover step toward the ball, extend the glove turned over (palm to the ball) to field it out in front on the backhand, then plant the back foot hard and throw across the body to first. The backhand-and-throw from deep in the hole is a signature third-base play, demanding a strong arm and clean footwork — Adrián Beltré made it famous.",
        },
        {
          id: "baseball-11-07-q2",
          type: "Plant",
          challenge: `  After backhanding a ball deep in the hole, a third
  baseman tries to throw to first while still drifting
  to his right, and the throw lacks anything on it.`,
          text: "What footwork makes the throw from deep in the hole possible?",
          options: [
            "Throwing while continuing to drift right",
            "Planting the back (right) foot hard to anchor and generate power, then throwing across the body to first",
            "Throwing underhand to first",
            "Running the ball halfway to first",
          ],
          correctIndex: 1,
          explanation: "After backhanding a ball deep in the hole, the third baseman is moving away from first base, so he must plant the back (right) foot hard to anchor himself and generate power, then throw across his body all the way to first. Drifting while throwing produces a weak, inaccurate throw. The hard plant converts his momentum into a strong throw — which is why this play demands both a strong arm and excellent footwork.",
        },
        {
          id: "baseball-11-07-q3",
          type: "Diving",
          challenge: `  A hard ground ball is smashed down the third-base
  line, just out of reach. The third baseman can
  either let it go or dive for it.`,
          text: "Why is a diving stop down the line especially valuable?",
          options: [
            "It isn't — diving is always a bad idea",
            "A ball down the line that gets past the third baseman is almost always an extra-base hit, so a diving stop that keeps it in the infield saves a double",
            "Diving down the line is against the rules",
            "It only matters with the bases empty",
          ],
          correctIndex: 1,
          explanation: "A ball down the third-base line that gets past the fielder almost always rolls into the corner for a double or triple. A diving stop that keeps the ball in the infield — even if no throw is possible — saves the extra-base hit and holds the batter to a single or gets the out. That's why third basemen dive on otherwise-unreachable balls down the line, especially late in close games when an extra-base hit is most costly.",
        },
        {
          id: "baseball-11-07-q4",
          type: "Judgment",
          challenge: `  A routine ground ball is hit a step to the third
  baseman's right, easily reachable with a backhand
  while staying on his feet. Instead, he dives
  dramatically and bobbles it.`,
          text: "What does this reveal about the judgment of when to dive?",
          options: [
            "Diving is always the best choice",
            "Dive only on balls that are otherwise unreachable; diving for a ball you could field on your feet adds risk and can turn an out into an error",
            "Third basemen should never field balls on their feet",
            "Bobbling is unavoidable on every play",
          ],
          correctIndex: 1,
          explanation: "Diving is for balls that are otherwise unreachable and where the stop matters. Diving for a ball you could comfortably field on your feet with a backhand or a step adds unnecessary risk and can turn a routine out into an error. Good third basemen judge when a dive is needed (unreachable ball, important stop) versus when staying on their feet and fielding cleanly is the smarter, safer play. Judgment governs the dive.",
        },
      ],
    },
  },

  // ─── baseball-11-08: Cutoffs, Bunts, and Backups ──────────────────────────────
  {
    epochId: "baseball-11",
    wonder: {
      name: "Wrigley Field",
      location: "Chicago, Illinois",
      era: "Modern",
      emoji: "🔗",
    },
    id: "baseball-11-08",
    order: 8,
    title: "Cutoffs, Bunt Coverage, and Backups",
    subtitle: "The third baseman's role across the whole field",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-11-badge-08", name: "Team Defender", emoji: "🔗" },
    challengeType: "quiz",
    info: {
      tagline: "The third baseman is a cutoff man, a bunt defender, and a backup — with a job on every ball in play.",
      year: 1995,
      overview: [
        "The third baseman's responsibilities extend across the whole field. As a cutoff man, the third baseman lines up for throws coming to third base — on a ball hit to the outfield with a runner trying to take third, the third baseman is the target and receiver, while on certain plays he serves as the cutoff for throws toward third or home from the left-field side. He must know his cutoff assignment, line up correctly, and either take the throw to make a tag at third or relay it as directed.",
        "Bunt coverage is a major third-base responsibility:\n- On a sacrifice bunt, the third baseman often charges to field bunts on the left side.\n- The defense rotates — typically the shortstop covers third when the third baseman charges.\n- On the aggressive wheel play (going for the lead runner at third), the corners charge hard and the shortstop covers third.\nThe third baseman reads the bunt situation, charges or holds based on the call, and communicates coverage with the shortstop and pitcher.",
        "The third baseman also covers third on steals and tag plays and backs up bases:\n- Covers third when a runner steals it, taking the catcher's throw for the tag.\n- Backs up throws to third from the outfield when he's not the cutoff or coverer.\n- Is part of the bunt and relay coverage system.\nAs at every position, he must know before each pitch whether he'll be charging a bunt, covering third, serving as a cutoff, or backing up — there's a job on every ball in play.",
      ],
      technical: {
        title: "Cutoff, Bunt, and Coverage Assignments",
        body: [
          "Cutoffs and third-base coverage: on a ball to the outfield with a runner heading for third, the third baseman is usually the receiver at the bag for the tag, lining up and presenting a target; on some plays he acts as the cutoff for throws coming from the left-field side toward home. He covers third on a steal of third, taking the catcher's throw and applying a quick, low tag.",
          "Bunt coverage and rotation: on a sacrifice bunt, the third baseman often charges to field bunts on the left side, and the shortstop rotates to cover third base. On the wheel play, the corners charge hard and the shortstop covers third. The third baseman reads the play call, charges or holds accordingly, and communicates coverage with the shortstop and pitcher. When not charging or covering, he backs up bases. Know the assignment pre-pitch.",
        ],
        codeExample: {
          label: "Third Baseman — Whole-Field Duties",
          code: `  CUTOFFS / THIRD-BASE COVERAGE:
  → Ball to OF, runner going to 3rd → 3B is the
    RECEIVER at the bag (line up, target, TAG)
  → Some plays → 3B is the CUTOFF for throws from
    the left-field side toward home
  → Steal of THIRD → 3B covers, takes the throw,
    quick LOW tag (catch first!)

  BUNT COVERAGE + ROTATION:
  → Sac bunt → 3B often CHARGES the left side;
    SHORTSTOP rotates to cover THIRD
  → WHEEL PLAY → corners charge hard, SS covers 3rd
  → Read the play call: charge or hold; talk to
    the SS + pitcher

  WHEN NOT CHARGING/COVERING → BACK UP bases

  Know your job (cutoff / cover / charge / backup)
  BEFORE the pitch.`,
        },
      },
      incident: {
        title: "Coverage Rotations That Make Bunt Defense Work",
        when: "1990s — fundamentals-driven defense",
        where: "Wrigley Field and ballparks across the game",
        impact: "Well-drilled bunt-coverage rotations — the third baseman charging while the shortstop covers third — are what allow a defense to field sacrifice bunts aggressively without leaving bases uncovered, a hallmark of fundamentally sound teams.",
        body: [
          "Bunt defense is a coordinated team play, and the third baseman is at its center. When he charges to field a bunt on the left side, third base would be left uncovered unless a teammate rotates over — so the shortstop covers third. On the aggressive wheel play, both corners charge to attack the lead runner while the shortstop again covers third. These rotations, understood and rehearsed by everyone, let the defense field bunts aggressively without giving away a base.",
          "The third baseman's role requires reading the bunt situation, knowing the play call (charge for the sure out, or the wheel to attack the lead runner), and communicating coverage with the shortstop and pitcher. A breakdown — the third baseman charging with no one covering third, or two fielders going for the same ball — turns a routine bunt into a disaster. Well-drilled teams make these rotations automatic, which is why bunt coverage is practiced until everyone knows their job on every bunt situation.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball in Play / Bunt", sub: "third baseman has a job", type: "attacker" },
          { label: "Read the Assignment", sub: "cutoff, cover, charge, backup", type: "system" },
          { label: "Execute with the Rotation", sub: "SS covers third when 3B charges", type: "victim" },
          { label: "Coverage Holds", sub: "no base given away", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Cutoff and bunt-coverage rotations formalized in pro coaching" },
        { year: 1970, event: "The wheel play and corner-charging bunt defense standardized" },
        { year: 1995, event: "Third-base bunt coverage and rotation drilled as core team defense", highlight: true },
        { year: 2010, event: "Defensive coordinators chart coverage by bunt and batted-ball type" },
        { year: 2023, event: "Rule changes and analytics reshape bunt frequency and coverage" },
      ],
      keyTakeaways: [
        "The third baseman is the receiver at third on plays where a runner tries to take the bag, and covers third on a steal",
        "On a sacrifice bunt, the third baseman often charges the left side while the shortstop rotates to cover third",
        "On the wheel play, the corners charge hard to attack the lead runner and the shortstop covers third",
        "Know the assignment pre-pitch — cutoff, cover, charge, or back up — and communicate coverage with the shortstop and pitcher",
      ],
      references: [
        { title: "USA Baseball: Cutoffs, Bunt Defense, and Coverages", url: "https://www.usabaseball.com" },
        { title: "Little League: Team Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Bunt Defense and Cutoffs", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-11-08-q1",
          type: "Bunt Rotation",
          challenge: `  Runner on first, a sacrifice bunt is laid down
  toward third base. The third baseman charges hard
  to field it, leaving third base uncovered.`,
          text: "Who covers third base when the third baseman charges a bunt?",
          options: [
            "Nobody — third base is left open",
            "The shortstop rotates over to cover third base",
            "The catcher runs to cover third",
            "The left fielder covers third",
          ],
          correctIndex: 1,
          explanation: "When the third baseman charges in to field a bunt on the left side, he vacates third base, so the shortstop rotates over to cover it. This coverage rotation must be understood by the whole infield before the pitch — a charging third baseman with no one covering third would give away the bag. Bunt defense is a coordinated team play, and the third-baseman-charges/shortstop-covers rotation is a fundamental part of it.",
        },
        {
          id: "baseball-11-08-q2",
          type: "Steal Coverage",
          challenge: `  A runner on second base takes off to steal third.
  The catcher fires a throw toward third base.`,
          text: "What is the third baseman's job on a steal of third?",
          options: [
            "Stay at his fielding position and watch",
            "Cover third base, take the catcher's throw, and apply a quick, low tag — catching the ball first",
            "Run toward home plate",
            "Cover second base",
          ],
          correctIndex: 1,
          explanation: "On a steal of third, the third baseman covers the bag, takes the catcher's throw, and applies a quick, low tag to the sliding runner — catching and securing the ball first. Just like any tag play, the ball must be secured before the tag, and the tag is applied low to the front edge of the bag where the runner slides in. Covering third on the steal is a core part of the third baseman's coverage responsibilities.",
        },
        {
          id: "baseball-11-08-q3",
          type: "Cutoff/Receiver",
          challenge: `  A base hit to left field with a runner trying to
  advance to third base. The left fielder comes up
  throwing toward third.`,
          text: "What is the third baseman's typical role on a throw to third from the outfield?",
          options: [
            "Run into the outfield to get the ball",
            "Be the receiver at third base — line up at the bag, present a target, take the throw, and apply the tag",
            "Cover home plate",
            "Cut off the throw and hold the ball",
          ],
          correctIndex: 1,
          explanation: "On a ball to the outfield with a runner trying to take third, the third baseman is usually the receiver at the bag — lining up at third, presenting a target to the outfielder (or relay man), taking the throw, and applying the tag to retire the sliding runner. He must position at the bag and catch the throw cleanly before the tag. (On some plays he instead serves as a cutoff for throws toward home from the left side.)",
        },
        {
          id: "baseball-11-08-q4",
          type: "Wheel Play",
          challenge: `  Runner on second, the defense calls the wheel play
  to try to cut down the lead runner at third on a
  bunt. The corners charge hard.`,
          text: "On the wheel play, who covers third base?",
          options: [
            "The third baseman stays back to cover third",
            "The shortstop covers third base, since both corner infielders are charging to attack the bunt and the lead runner",
            "Nobody covers third",
            "The second baseman covers third",
          ],
          correctIndex: 1,
          explanation: "On the wheel play, both corner infielders (first and third basemen) charge hard to field the bunt and attack the lead runner trying to advance to third, so the shortstop covers third base (and the second baseman covers first). The infield 'wheels' around. It's a high-risk, high-reward play aimed at cutting down the lead runner, and it depends on everyone knowing the rotation — especially the shortstop covering third behind the charging third baseman.",
        },
      ],
    },
  },

  // ─── baseball-11-09: Situational IQ ───────────────────────────────────────────
  {
    epochId: "baseball-11",
    wonder: {
      name: "Yankee Stadium",
      location: "Bronx, New York",
      era: "Modern",
      emoji: "🧠",
    },
    id: "baseball-11-09",
    order: 9,
    title: "Third Base Situational IQ",
    subtitle: "Tag plays, infield in, and knowing the play",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-11-badge-09", name: "Heads-Up", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "At the hot corner there's no time to think when the ball arrives — so the thinking has to be done before the pitch.",
      year: 2000,
      overview: [
        "Because the ball arrives so fast at third, situational thinking must be done entirely before the pitch. The third baseman processes the score, inning, outs, runners and their speed, count, and the hitter's tendencies, then decides positioning and plan:\n- Normal, guard the line, infield in, or in for a bunt.\n- Runner on third with the infield in — charge and throw home.\n- Runner on first with a double play on — start a 5-4-3.\n- Tag play at third — apply the tag.\nThese decisions can't wait until the ball is hit.",
        "Tag plays and force decisions are key reads on every ground ball:\n- Is there a force at third (a runner forced from second with the bases loaded, or runners on first and second)?\n- Or do you need to tag a runner?\n- Take the sure out at first, start a double play, look the runner back, or make a play at the plate?\nWith the infield in, the priority shifts to cutting down the run at home. Each scenario needs a pre-made plan executed instantly.",
        "Communication ties it together. The third baseman coordinates bunt coverage and the wheel play with the shortstop and pitcher, confirms the number of outs, reminds teammates of the situation, and signals positioning. Knowing the situation and translating it into positioning and a pre-made plan — before the ball is hit — is what makes the hot corner manageable despite the lack of reaction time. Like the whole infield, third base is mental as much as physical, and at this position the thinking simply has to happen first.",
      ],
      technical: {
        title: "Pre-Pitch Thinking at the Hot Corner",
        body: [
          "Decide before the pitch: with so little reaction time, know the outs, runners and their speed, and exactly what you'll do if the ball is hit to you — sure out at first, start a double play (5-4-3), look the runner back, charge a bunt, or (infield in) field and throw home. Set positioning (normal, guard the line, infield in, in for a bunt) based on the situation. There's no time to decide after the ball is hit.",
          "Force, tag, and communication: know instantly whether you have a force at third (runner forced from second with first occupied) or need to tag. With the infield in, prioritize cutting down the run at home. Coordinate bunt coverage and the wheel play with the shortstop and pitcher, confirm the outs, and signal positioning. The thinking is done before the pitch so the reaction is pure execution.",
        ],
        codeExample: {
          label: "Third Base Situational Checklist",
          code: `  EVERY PITCH (decide BEFORE — no time after):
  ✓ Score, inning, outs, count
  ✓ Runners — where, and HOW FAST?
  ✓ If it's hit to me → sure out? 5-4-3 DP? look
    the runner back? charge a bunt? throw HOME?
  ✓ FORCE at third (runner forced from 2nd, 1st
    occupied) or TAG play?

  POSITIONING:
  → Normal / GUARD THE LINE (late, close) /
    INFIELD IN (cut the run) / IN for a bunt

  INFIELD IN → field + throw HOME to cut the run

  COMMUNICATE: bunt coverage + wheel with SS +
  pitcher; confirm the outs.

  At the hot corner, THINK FIRST so the reaction is
  pure execution.`,
        },
      },
      incident: {
        title: "The Thinking Third Baseman",
        when: "2000s — the analytics-and-IQ era",
        where: "Yankee Stadium and ballparks across the game",
        impact: "Because the hot corner allows so little reaction time, the best third basemen are defined by their pre-pitch anticipation — knowing positioning, force-or-tag situations, and exactly what to do with the ball before it's hit.",
        body: [
          "At the hot corner, where a ball can arrive in under a second, there's no time to think once the ball is hit — so the great third basemen do all their thinking beforehand. They know the situation cold: the outs, the runners' speed, whether they're guarding the line or playing in, whether a batted ball is a force or a tag, and exactly what they'll do with it. When the ball comes, their reaction is pure, pre-decided execution.",
          "Adrián Beltré and the other defensive greats combined their physical gifts with this anticipation, seeming to know the play before it developed. Modern positioning data helps, but the in-the-moment reads belong to the player. For young third basemen, the lesson is especially acute: because the position offers no time to react, you must think the game every pitch — know the situation, set your positioning, and pre-make your decision — so that when the smash comes, you simply do what you already decided. Situational IQ makes the hot corner playable.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Situation", sub: "outs, runners, speed, score", type: "system" },
          { label: "Set Positioning + Pre-Decide", sub: "line, in, force or tag, DP", type: "attacker" },
          { label: "Ball Arrives Fast", sub: "no time to think", type: "victim" },
          { label: "Pure Execution", sub: "do what you decided", type: "result" },
        ],
      },
      timeline: [
        { year: 1998, event: "Adrián Beltré's anticipation sets the standard for hot-corner IQ" },
        { year: 2000, event: "Situational positioning and pre-pitch thinking emphasized in coaching", highlight: true },
        { year: 2010, event: "Positioning data integrated with in-game judgment at third" },
        { year: 2016, event: "Slide rule changes affect double-play decisions started at third" },
        { year: 2023, event: "Shift restrictions return positioning judgment to the corner" },
      ],
      keyTakeaways: [
        "At the hot corner, all situational thinking must be done before the pitch — there's no time once the ball is hit",
        "Pre-decide what to do if the ball is hit to you: sure out, start a 5-4-3, look the runner back, charge a bunt, or throw home",
        "Know instantly whether a batted ball is a force at third or a tag play; with the infield in, cut down the run at home",
        "Coordinate bunt coverage and the wheel play with the shortstop and pitcher, and confirm the outs every pitch",
      ],
      references: [
        { title: "USA Baseball: Defensive IQ and Situations", url: "https://www.usabaseball.com" },
        { title: "Little League: Situational Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Infield Strategy", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-11-09-q1",
          type: "Anticipation",
          challenge: `  A third baseman tries to decide what to do with
  the ball only after a hard smash is already in
  his glove, and the hesitation costs the play.`,
          text: "Why must the third baseman decide what to do with the ball before the pitch?",
          options: [
            "He shouldn't — there's always time to decide after fielding",
            "The ball arrives so fast at the hot corner that there's no time to think once it's hit, so the decision must be pre-made and the reaction pure execution",
            "Deciding early is against the rules",
            "It only matters with two outs",
          ],
          correctIndex: 1,
          explanation: "At the hot corner, a hard-hit ball can arrive in under a second, leaving no time to decide what to do once it's in the glove. The great third basemen pre-decide everything before the pitch — positioning, force-or-tag, and exactly what they'll do with the ball — so their reaction is pure, pre-made execution. Hesitating to decide after fielding costs the play. Thinking must come first at third base.",
        },
        {
          id: "baseball-11-09-q2",
          type: "Infield In",
          challenge: `  Runner on third, one out, tie game late. The
  infield is playing in to prevent the run. A
  ground ball is hit to the third baseman.`,
          text: "With the infield in and a runner on third, what is the third baseman's priority on a ground ball?",
          options: [
            "Throw to first for the sure out and let the run score",
            "Field it and throw home to cut down the runner trying to score, since preventing the run is the priority",
            "Hold the ball and run at the runner",
            "Throw to second base",
          ],
          correctIndex: 1,
          explanation: "With the infield in to prevent a run in a tie game, the priority on a ground ball is to field it and throw home to cut down the runner trying to score from third. The defense has sacrificed range and conceded that some balls will get through, specifically to make a play at the plate on the ones they reach. The third baseman must know this assignment before the pitch and be ready to field and throw home.",
        },
        {
          id: "baseball-11-09-q3",
          type: "Force or Tag",
          challenge: `  Bases loaded, one out. A ground ball is hit to the
  third baseman near the bag.`,
          text: "With the bases loaded, is the play at third base a force or a tag?",
          options: [
            "A tag — he must tag the runner coming from second",
            "A force — with the bases loaded, the runner from second is forced to third, so the third baseman can just touch the bag with the ball",
            "There is no play at third",
            "He must tag and touch the bag",
          ],
          correctIndex: 1,
          explanation: "With the bases loaded, every runner is forced to advance, so the runner coming from second is forced to third. The third baseman simply touches third base while holding the ball for the force out — no tag required — and can even start a 5-4-3 or 5-2-3 double play. Knowing instantly whether a play is a force or a tag, based on which bases are occupied, is essential situational IQ at third base.",
        },
        {
          id: "baseball-11-09-q4",
          type: "Communication",
          challenge: `  Before a pitch in a likely bunt situation, the
  third baseman silently confirms the play call,
  coverage, and number of outs with his shortstop
  and pitcher.`,
          text: "Why is this pre-pitch communication important at third base?",
          options: [
            "It isn't — the third baseman should act alone",
            "Coordinating bunt coverage, the wheel play, and the outs prevents breakdowns like an uncovered base or two fielders going for the same ball",
            "It's only for show",
            "It distracts the third baseman from fielding",
          ],
          correctIndex: 1,
          explanation: "Pre-pitch communication — confirming the bunt play call (charge or wheel), coverage (who covers third when the third baseman charges), and the number of outs — prevents the breakdowns that turn routine plays into disasters, like an uncovered third base or two fielders converging on the same bunt. Third base is part of a coordinated defense, and that communication ensures everyone knows their job before the ball is in play. It's a defining habit of heads-up infielders.",
        },
      ],
    },
  },

  // ─── baseball-11-10: The Greats and Mastery ───────────────────────────────────
  {
    epochId: "baseball-11",
    wonder: {
      name: "Cooperstown",
      location: "Cooperstown, New York",
      era: "Modern",
      emoji: "🏆",
    },
    id: "baseball-11-10",
    order: 10,
    title: "The Greats and the Mastery Mindset",
    subtitle: "What the best third basemen teach about the craft",
    category: "sports",
    xp: 100,
    badge: { id: "baseball-11-badge-10", name: "Corner Master", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "Master the hot corner and you become the guardian — fearless hands and a cannon arm that turn smashes into outs.",
      year: 1983,
      overview: [
        "The greatest third basemen share a set of pursuable traits:\n- Lightning reflexes and soft, fearless hands to handle the hardest-hit balls.\n- A strong, accurate arm for the long throw and the across-the-body throw from the hole.\n- The footwork and rhythm to charge slow rollers and bare-hand bunts.\n- The range and willingness to backhand and dive at the line and in the hole.\n- The situational intelligence to pre-decide every play.\nAdrián Beltré — a Dodgers product — along with greats like Mike Schmidt and Nolan Arenado embodied these qualities; the qualities, not the highlight reels, are what to build.",
        "Mastering third base is about courage, quick hands, and a strong arm applied with intelligence. The position's value comes from turning the hardest-hit balls and the trickiest slow rollers into outs, guarding the line in big moments, and never giving away an extra base. A great third baseman demoralizes hitters — the way Adrián Beltré did from the hole, season after season — by taking away hits they thought were sure things. That fearless reliability at the corner is a foundation of championship defense.",
        "The mastery mindset treats the hot corner as a craft worth perfecting through fearless repetition. That means endless reaction drills, charging and barehanding slow rollers, long-toss and throwing from every angle, backhand and diving work, and studying situations until the pre-pitch thinking is automatic. The complete third baseman is fearless, quick-handed, strong-armed, and heads-up — the guardian of the hot corner. Build those qualities, and you become the defender who turns the hardest position into a strength and breaks the other team's heart with your glove.",
      ],
      technical: {
        title: "The Complete Third Baseman — A Self-Assessment",
        body: [
          "Skills to master: reactions and soft hands on smashes and short hops, the long throw and across-the-body throw from the hole, charging slow rollers and bare-handing bunts, backhands and diving stops at the line and in the hole, cutoff and bunt coverage, and tag plays. Each is built through fearless, deliberate repetition.",
          "Mindset to build: courage, anticipation, and reliability. Stand in fearlessly against the hardest-hit balls, pre-decide every play before the pitch, guard the line when it matters, and never give away an extra base. Treat the hot corner as a craft — drill reactions, charges, backhands, and the long throw, and study situations until the thinking is automatic. The corner master turns the game's hardest-hit balls into outs and anchors the left side of the defense.",
        ],
        codeExample: {
          label: "The Complete Third Baseman — Checklist",
          code: `  HANDS / REACTIONS:
  ✓ React to smashes; soft hands + knockdowns
  ✓ Fearless — never flinch from a hard-hit ball

  ARM / THROWS:
  ✓ The long throw across the diamond (chest-high)
  ✓ Backhand + throw across the body from the hole

  CHARGING / RANGE:
  ✓ Do-or-die: charge, bare-hand, throw on the run
  ✓ Backhand + dive at the line and in the hole

  TEAM / MIND:
  ✓ Cutoff + bunt coverage; tag plays at third
  ✓ Guard the line when it matters
  ✓ Pre-decide every play BEFORE the pitch
  ✓ Never give away an extra base

  Build these → you are the GUARDIAN of the corner.`,
        },
      },
      incident: {
        title: "Breaking Hearts at the Hot Corner",
        when: "1998–2024 — Adrián Beltré, Dodgers product to Hall of Famer",
        where: "National Baseball Hall of Fame, Cooperstown, New York",
        impact: "From Adrián Beltré — a Dodgers product and first-ballot Hall of Famer — to greats like Mike Schmidt and Nolan Arenado, the best third basemen have demoralized opposing hitters by turning sure hits into outs — proof that mastering the hot corner can be a foundation of championship defense.",
        body: [
          "The lineage of great third basemen — Adrián Beltré, Mike Schmidt, Nolan Arenado, and others — shares a defining effect: they broke the hearts of opposing hitters by turning hard smashes and tricky slow rollers into outs. When Beltré threw runners out from the hole and from his knees, when Schmidt and Arenado made the spectacular routine, they took away hits that hitters were sure they had earned. That demoralizing reliability is the ultimate expression of hot-corner mastery.",
          "Their careers prove that mastering third base — the fearless hands, the strong arm, the charging and backhand plays, and the situational IQ — can make a player the foundation of a championship defense. For any young third baseman, the lesson is to pursue the complete craft with courage and relentless repetition: become the fearless, quick-handed, strong-armed guardian of the hot corner. Do that, and you turn the hardest position on the field into a strength that wins games and breaks the other team's heart.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Master the Skills", sub: "react, charge, backhand, throw", type: "system" },
          { label: "Build Courage + IQ", sub: "fearless, pre-decide every play", type: "attacker" },
          { label: "Turn Sure Hits into Outs", sub: "demoralize the hitters", type: "victim" },
          { label: "Become the Guardian", sub: "anchor of the left side", type: "result" },
        ],
      },
      timeline: [
        { year: 1998, event: "Adrián Beltré debuts for the Dodgers, beginning a Hall of Fame defensive career" },
        { year: 1983, event: "Mike Schmidt combines elite defense and power at the hot corner", highlight: true },
        { year: 2004, event: "Adrián Beltré's all-around defense extends the lineage of greats" },
        { year: 2013, event: "Nolan Arenado's spectacular defense continues the tradition" },
        { year: 2020, event: "Reactions, arm, and IQ recognized as the defining hot-corner traits" },
      ],
      keyTakeaways: [
        "The best third basemen combine fearless soft hands, a strong arm, charging and backhand plays, and situational IQ",
        "Third base rewards courage and quick hands applied with intelligence — turn the hardest-hit balls into outs",
        "The mastery mindset treats the hot corner as a craft: fearless repetition of reactions, charges, backhands, and the long throw",
        "Become the fearless, strong-armed guardian who turns sure hits into outs and anchors the left side of the defense",
      ],
      references: [
        { title: "Baseball Hall of Fame — Third Basemen", url: "https://baseballhall.org" },
        { title: "USA Baseball: Complete Infield Development", url: "https://www.usabaseball.com" },
        { title: "MLB: The Value of Third-Base Defense", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-11-10-q1",
          type: "Traits",
          challenge: `  A young player wants to become a complete third
  baseman and asks which qualities to develop.`,
          text: "Which combination of traits defines the best third basemen?",
          options: [
            "Only home-run power",
            "Fearless soft hands and reflexes, a strong accurate arm, charging and backhand plays, and situational IQ",
            "Only base-running speed",
            "Only height and size",
          ],
          correctIndex: 1,
          explanation: "The best third basemen combine lightning reflexes and soft, fearless hands; a strong, accurate arm for the long throw; the footwork to charge slow rollers and bare-hand bunts; the range to backhand and dive at the line and in the hole; and the situational IQ to pre-decide every play. Adrián Beltré, along with greats like Mike Schmidt and Nolan Arenado, embodied these. It's a complete craft of courage, hands, arm, and intelligence — not just power or size.",
        },
        {
          id: "baseball-11-10-q2",
          type: "Impact",
          challenge: `  An opposing hitter smashes what he's sure is a
  double down the line, only to watch the third
  baseman dive, knock it down, and throw him out.
  The hitter walks back to the dugout demoralized.`,
          text: "What does this reveal about the impact of a great third baseman?",
          options: [
            "It's just luck and has no lasting effect",
            "A great third baseman demoralizes hitters by turning sure hits into outs — that fearless reliability is a foundation of championship defense",
            "Hitters don't care about defense",
            "Defense at third base doesn't affect games",
          ],
          correctIndex: 1,
          explanation: "Turning a sure double into an out — as Adrián Beltré did from the hole, season after season — demoralizes hitters and deflates rallies. A great third baseman who consistently takes away hits hitters believe they've earned breaks the other team's spirit and prevents runs. That fearless, demoralizing reliability at the hot corner is a genuine foundation of championship defense, not just highlight material.",
        },
        {
          id: "baseball-11-10-q3",
          type: "Mindset",
          challenge: `  A talented but inconsistent third baseman avoids
  reaction and charging drills because they're hard
  and a little scary, hoping his natural ability
  will carry him.`,
          text: "What does the mastery mindset say about this approach?",
          options: [
            "It's fine — third base requires no special practice",
            "The hot corner is a craft mastered through fearless, deliberate repetition of reactions, charges, backhands, and the long throw — natural ability alone isn't enough",
            "Only hitting practice matters",
            "Avoiding hard drills makes you a better fielder",
          ],
          correctIndex: 1,
          explanation: "The mastery mindset treats the hot corner as a craft mastered through fearless, deliberate repetition — reaction drills, charging and barehanding slow rollers, backhand and diving work, and the long throw from every angle. Avoiding the hard, scary drills leaves a talented player inconsistent and unprepared for the position's hardest plays. The greats earned their fearless reliability through relentless practice, not natural ability alone.",
        },
        {
          id: "baseball-11-10-q4",
          type: "Legacy",
          challenge: `  From Adrián Beltré — a Dodgers product — to Nolan
  Arenado and beyond, a lineage of third basemen has anchored
  great defenses with spectacular play at the hot
  corner.`,
          text: "What does this lineage of great third basemen teach young players?",
          options: [
            "That third base is unimportant to winning",
            "That mastering the complete craft of the hot corner — fearless hands, a strong arm, charging and backhand plays, and IQ — can make a player the foundation of a championship defense",
            "That defense can't be developed",
            "That only power hitters succeed at third",
          ],
          correctIndex: 1,
          explanation: "The lineage anchored by Adrián Beltré — a Dodgers product and first-ballot Hall of Famer — proves that mastering the complete craft of third base can make a player the cornerstone of a championship defense. Their fearless hands, strong arms, charging and backhand plays, and situational IQ turned the hardest-hit balls into outs and anchored the left side. The lesson for young players is to pursue that whole craft with courage and become the guardian of the hot corner.",
        },
      ],
    },
  },
];
