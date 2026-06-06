import type { StageConfig, EpochConfig } from "./types";

export const baseball9Epoch: EpochConfig = {
  id: "baseball-9",
  name: "First Base",
  subtitle: "The Anchor of the Infield",
  description:
    "First base is the busiest receiving position on the diamond — nearly every infield out passes through the first baseman's glove. This complete position course builds the first baseman from the ground up: footwork at the bag, stretching and scooping throws out of the dirt, holding runners, fielding the 3-hole and starting double plays, charging bunts, serving as a cutoff, and the backups and coverages for every situation. From Little League to Freddie Freeman — the Dodgers' Gold Glove cornerstone and World Series MVP — you will learn to anchor the infield and turn your teammates' throws — good and bad — into outs.",
  emoji: "🧤",
  color: "orange",
  unlocked: true,
};

export const baseball9Stages: StageConfig[] = [
  // ─── baseball-9-01: The Anchor of the Infield ─────────────────────────────────
  {
    epochId: "baseball-9",
    wonder: {
      name: "Dodger Stadium",
      location: "Los Angeles, California",
      era: "Modern",
      emoji: "⚓",
    },
    id: "baseball-9-01",
    order: 1,
    title: "First Base — The Anchor of the Infield",
    subtitle: "Why nearly every infield out runs through you",
    category: "sports",
    xp: 85,
    badge: { id: "baseball-9-badge-01", name: "The Anchor", emoji: "⚓" },
    challengeType: "quiz",
    info: {
      tagline: "Every ground ball to the infield ends with a throw to first — the first baseman catches more outs than anyone.",
      year: 1979,
      overview: [
        "First base is the most active receiving position in baseball. On almost every ground ball hit anywhere in the infield, the play ends with a throw to first base — which means the first baseman handles more putouts than any other fielder. The core job is deceptively simple to describe and hard to master: receive throws from the other infielders cleanly, including bad ones in the dirt or off-line, and complete the out. A first baseman who scoops difficult throws turns teammates' errors into outs; one who can't, multiplies them.",
        "Beyond receiving, the first baseman has several jobs:\n- Fields their own area — the '3-hole' between first and second.\n- Holds runners on base.\n- Charges bunts.\n- Starts and finishes double plays.\n- Acts as a cutoff man on throws from right field.\nBecause first base sits at the end of so many plays, the position rewards soft hands, nimble footwork around the bag, and constant awareness of the situation. The stereotype of the slow slugger who 'hides' at first is outdated — elite first-base defense saves runs on a nightly basis.",
        "Left-handed players have a natural advantage at first base (and it's one of the few infield spots a lefty can play well), because a left-hander's glove is on the right hand — better positioned for tags on pickoff throws and for throwing across to second base to start a double play without turning the body. Whether right- or left-handed, the first baseman is the infield's anchor: the steady receiver every throw is aimed at, and the player who makes the rest of the infield look good.",
      ],
      technical: {
        title: "Why First Base Handles the Most Outs",
        body: [
          "The geometry of the game funnels plays to first. A ground ball to the shortstop, the third baseman, the second baseman, or the pitcher almost always ends with a throw to first to retire the batter-runner. Add force outs and the back end of double plays, and the first baseman is involved in a huge share of every game's outs. That volume is why receiving skill at first base is so valuable — small improvements in catching tough throws add up over a season.",
          "The position also demands footwork and flexibility most fans overlook: finding the bag with the feet without looking down, choosing the right foot to anchor, and stretching toward the throw to gain fractions of a second. A first baseman who can pick a short hop and stretch to shorten a throw's flight time saves outs that a stiff, flat-footed receiver would lose.",
        ],
        codeExample: {
          label: "First Base — Core Responsibilities",
          code: `  THE FIRST BASEMAN'S JOBS:
  ✓ RECEIVE throws from all infielders — incl.
    bad ones in the dirt or off-line (scoop!)
  ✓ FIELD the 3-hole (between 1B and 2B)
  ✓ HOLD runners on; take pickoff throws
  ✓ CHARGE bunts; start/finish double plays
  ✓ CUTOFF man on throws from right field
  ✓ BACK UP throws and bases when away from 1B

  WHY IT MATTERS:
  → Almost every infield out ends with a throw
    to first → most putouts of any position
  → Lefties have an edge (glove hand aids tags
    and the throw to second)

  Great 1B defense = your teammates' bad throws
  become outs instead of errors.`,
        },
      },
      incident: {
        title: "Freddie Freeman — The Gold Glove Cornerstone",
        when: "2010–present — Atlanta Braves and Los Angeles Dodgers",
        where: "Dodger Stadium, Los Angeles, California",
        impact: "Freddie Freeman is a Gold Glove first baseman, an MVP, and a two-time World Series champion — including 2024 World Series MVP for the Dodgers — whose reliable, soft-handed defense and remarkable durability make him the cornerstone of the infield.",
        body: [
          "Freddie Freeman is one of the most reliable and durable first basemen of his era. A Gold Glove winner and perennial All-Star, he treats first base as a position to be mastered: soft hands that scoop almost any throw out of the dirt, smart positioning, sure footwork around the bag, and the steadiness to handle every play cleanly. His glove and consistency anchor the infield and let his teammates throw with confidence.",
          "Freeman embodies the modern understanding that first-base defense and dependability matter. A first baseman's soft hands, range, and steadiness save runs and settle a whole defense. For young players, he is a model: first base is not where you stand to rest between at-bats — it is a position to be mastered, and a great defensive first baseman is an anchor the entire infield is built around.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ground Ball to the Infield", sub: "almost anywhere", type: "attacker" },
          { label: "Infielder Throws to First", sub: "good throw or bad", type: "system" },
          { label: "First Baseman Receives", sub: "scoop, stretch, secure", type: "victim" },
          { label: "Out Recorded", sub: "the anchor completes it", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "First base established as the primary destination for infield throws" },
        { year: 1920, event: "Larger, better-padded first basemen's mitts improve receiving" },
        { year: 2018, event: "Freddie Freeman wins a Gold Glove and emerges as a defensive cornerstone at first base", highlight: true },
        { year: 1995, event: "Defensive metrics begin to credit first-base scooping and range" },
        { year: 2015, event: "Statcast quantifies first-base picks and footwork value" },
      ],
      keyTakeaways: [
        "First base handles more putouts than any position — nearly every infield out ends with a throw to first",
        "The core skill is receiving every throw, including bad ones in the dirt, and completing the out",
        "First basemen also field the 3-hole, hold runners, charge bunts, start double plays, and serve as a cutoff",
        "Left-handers have a natural advantage at first base for tags and the throw to second",
      ],
      references: [
        { title: "Little League: Infield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: First Base Play", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame — Defensive Greats", url: "https://baseballhall.org" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-9-01-q1",
          type: "Role",
          challenge: `  A coach explains that one infield position records
  more putouts than any other, because of where
  the ball ends up on most ground balls.`,
          text: "Why does the first baseman handle the most putouts?",
          options: [
            "First basemen are the best fielders on every team",
            "Almost every infield ground ball ends with a throw to first base to retire the batter-runner",
            "The first baseman covers the most ground",
            "Runners are required to be tagged at first",
          ],
          correctIndex: 1,
          explanation: "The geometry of baseball funnels plays to first base: a ground ball to the shortstop, third baseman, second baseman, or pitcher almost always ends with a throw to first to retire the batter-runner. That volume — plus force outs and the ends of double plays — means the first baseman records more putouts than any other fielder, which is exactly why strong receiving skill there is so valuable.",
        },
        {
          id: "baseball-9-01-q2",
          type: "Value",
          challenge: `  An infielder rushes a throw and it bounces in the
  dirt several feet in front of first base. The
  first baseman digs it out for the out.`,
          text: "How does a skilled receiving first baseman affect the rest of the infield?",
          options: [
            "They have no effect — a bad throw is always an error",
            "By scooping difficult and in-the-dirt throws, they turn teammates' errant throws into outs instead of errors",
            "They make the other infielders throw worse",
            "They only matter on perfect throws",
          ],
          correctIndex: 1,
          explanation: "A first baseman who can pick short hops and dig throws out of the dirt converts what would otherwise be errors into outs, directly improving every other infielder's performance and saving runs. This is one of the most valuable and underrated skills at the position — it lets infielders throw with confidence and keeps innings from unraveling on imperfect throws.",
        },
        {
          id: "baseball-9-01-q3",
          type: "Handedness",
          challenge: `  A youth coach notes that left-handed players are
  often steered toward first base, the outfield,
  or pitching, but rarely to shortstop or third.`,
          text: "Why does first base suit left-handed players well?",
          options: [
            "Left-handers run faster",
            "A left-hander's glove is on the right hand, which is better positioned for tags on pickoff throws and for throwing across to second base",
            "Left-handers can only catch with one hand",
            "There is no real reason; it's superstition",
          ],
          correctIndex: 1,
          explanation: "A left-handed first baseman wears the glove on the right hand, which sits on the infield side for applying tags on pickoff throws and makes it easier to throw across the diamond to second base to start a double play without first turning the body. That's why first base (along with the outfield and pitching) is one of the few spots a left-hander can play effectively, while the other infield positions strongly favor right-handers.",
        },
        {
          id: "baseball-9-01-q4",
          type: "Mindset",
          challenge: `  An old stereotype says first base is where you
  "hide" a big slugger who can't field, because
  the position doesn't require much defense.`,
          text: "What does Freddie Freeman's career demonstrate about that stereotype?",
          options: [
            "It's correct — first base defense doesn't matter",
            "First base can be a genuine defensive weapon — Freeman's soft hands, scooping, durability, and steadiness save runs and settle a defense",
            "Only home runs matter at first base",
            "Defense at first base is impossible to measure",
          ],
          correctIndex: 1,
          explanation: "Freddie Freeman shows that first base is a position to be mastered, not a place to hide a bat — a Gold Glove, durable, dependable defender whose soft hands and steadiness save runs and settle a defense. Elite first-base defense matters; the position rewards mastery, not just a big bat.",
        },
      ],
    },
  },

  // ─── baseball-9-02: Footwork at the Bag ───────────────────────────────────────
  {
    epochId: "baseball-9",
    wonder: {
      name: "Comerica Park",
      location: "Detroit, Michigan",
      era: "Modern",
      emoji: "🦶",
    },
    id: "baseball-9-02",
    order: 2,
    title: "Footwork at the Bag",
    subtitle: "Finding the base, setting up, and stretching to the throw",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-9-badge-02", name: "Light Feet", emoji: "🦶" },
    challengeType: "quiz",
    info: {
      tagline: "A first baseman's footwork is invisible when it's good — find the bag by feel, then stretch to steal a step.",
      year: 1985,
      overview: [
        "Receiving a throw at first base starts with footwork, not the glove. As the ball is hit, the first baseman moves to the bag and squares to the throwing fielder, finding the base with the feet without staring at it. The standard setup:\n- Stand with the heels at the front edge of the bag.\n- Present a target with the glove.\n- Read the throw's direction.\n- Only then stretch toward the ball.\nThe mistake young players make is anchoring a foot on the bag too early and reaching, which locks them out of adjusting to an off-line throw.",
        "Which foot goes on the bag matters:\n- Touch the bag with the foot on the same side as the throwing hand (a right-handed first baseman uses the right foot).\n- Stride toward the throw with the glove-side foot to maximize reach and stay balanced.\nThe overriding rule: catch the ball first — if the throw pulls you off the base, prioritize catching it and tagging the runner or the bag, because an uncaught throw is far worse than a missed touch.",
        "The stretch is how a first baseman steals time. By striding toward the throw with the glove-side foot extended while keeping the back foot on the bag, the first baseman shortens the distance the ball travels — turning a bang-bang play into an out by receiving the ball a fraction of a second earlier. But stretch toward the throw, not before it: stretching to the wrong side of an off-line throw is a common error. Read the throw's line first, then stretch to meet it.",
      ],
      technical: {
        title: "Setting Up and Stretching the Right Way",
        body: [
          "Find the bag, then read: move to the base and square to the thrower, heels at the front edge of the bag, glove up as a target. Do not commit the stretch until you read where the throw is going — an early stretch leaves you unable to adjust to a throw that's off-line. For a routine throw, anchor the throwing-hand-side foot on the bag and stride to the ball with the glove-side foot.",
          "Stretch toward the throw: extend toward the ball to shorten its flight, keeping the back foot in contact with the bag. On a throw to your glove side, stretch that way; on a throw to your throwing-hand side, you may need to swap feet or come off the bag to catch it cleanly. Always prioritize catching the ball — if you must leave the bag to secure it, do so and apply a tag, because a dropped throw lets the runner reach and possibly advance.",
        ],
        codeExample: {
          label: "First Base Footwork Sequence",
          code: `  ON A GROUND BALL TO AN INFIELDER:
  1. GO to the bag, square up to the thrower
  2. FIND the bag by FEEL (heels at front edge)
     — do not stare at your feet
  3. PRESENT a glove target, weight balanced
  4. READ the throw's direction FIRST
  5. ANCHOR foot = throwing-hand side
     (RH 1B → right foot on the bag)
  6. STRETCH with the glove-side foot TOWARD
     the throw → shortens the ball's flight,
     steals a fraction of a second
  7. If the throw pulls you off → CATCH FIRST,
     then tag the bag or the runner

  ✗ Don't anchor + reach too early — you can't
    adjust to an off-line throw.`,
        },
      },
      incident: {
        title: "The Quiet Craft of the Stretch",
        when: "1980s — the fundamentals era",
        where: "Comerica Park and ballparks across the game",
        impact: "Coaches have long taught that a first baseman's stretch — extending to receive the throw a split second earlier — is one of the highest-value, least-noticed skills in the field, converting close plays into outs on a nightly basis.",
        body: [
          "The stretch looks effortless when a skilled first baseman does it, which is exactly why it goes unappreciated. By reading the throw and extending toward it while keeping a foot on the bag, the first baseman receives the ball meaningfully sooner — and on bang-bang plays, that fraction of a second is the difference between out and safe. Over a season, a first baseman who stretches well and picks tough throws turns dozens of would-be infield hits and errors into outs.",
          "The craft is in the sequence: find the bag by feel, present a target, read the throw, and only then stretch to meet it. Players who skip the read and stretch blindly get handcuffed by off-line throws. The lesson for young first basemen is that footwork comes before the glove — master moving to the bag and setting up, and the difficult catches become routine.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Move to the Bag", sub: "square to the thrower", type: "system" },
          { label: "Find Base by Feel", sub: "heels at front edge", type: "attacker" },
          { label: "Read the Throw", sub: "direction before stretch", type: "victim" },
          { label: "Stretch to Meet It", sub: "steal a fraction of a second", type: "result" },
        ],
      },
      timeline: [
        { year: 1920, event: "First basemen's footwork formalized as the position professionalizes" },
        { year: 1960, event: "Stretching technique taught to shorten throw flight time" },
        { year: 1985, event: "Aggressive footwork and scoop drills become standard infield instruction", highlight: true },
        { year: 2005, event: "Video analysis refines setup and foot placement at the bag" },
        { year: 2018, event: "Statcast captures first-base receiving and stretch value" },
      ],
      keyTakeaways: [
        "Find the bag by feel and square to the thrower — don't stare down at your feet",
        "Read the throw's direction before committing the stretch, so you can adjust to off-line throws",
        "Anchor the throwing-hand-side foot on the bag and stride to the ball with the glove-side foot",
        "Always prioritize catching the ball — if a throw pulls you off the bag, secure it and tag the bag or runner",
      ],
      references: [
        { title: "USA Baseball: First Base Footwork", url: "https://www.usabaseball.com" },
        { title: "Little League: Infield Coaching Guide", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Infield Fundamentals", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-9-02-q1",
          type: "Setup",
          challenge: `  A young first baseman runs to the bag, slaps a
  foot on it, and reaches out as far as possible
  with the glove before the throw is even released.`,
          text: "What's the problem with anchoring a foot and reaching before reading the throw?",
          options: [
            "Nothing — reaching early is the goal",
            "Committing the stretch early locks you out of adjusting to an off-line throw; you should read the throw's direction first, then stretch to meet it",
            "It's illegal to touch the bag early",
            "Reaching early makes the throw arrive slower",
          ],
          correctIndex: 1,
          explanation: "Stretching before reading the throw is a classic mistake. If the throw is off-line, a first baseman already committed to a full reach can't adjust and gets handcuffed. The correct sequence is: find the bag by feel, present a target, read where the throw is going, and only then stretch toward it. Footwork and reading come before the reach.",
        },
        {
          id: "baseball-9-02-q2",
          type: "Foot Choice",
          challenge: `  A right-handed first baseman is setting up to
  receive a routine throw and needs to decide
  which foot to anchor on the bag.`,
          text: "Which foot should a right-handed first baseman anchor on the bag for maximum reach?",
          options: [
            "The left (glove-side) foot, striding with the right",
            "The right (throwing-hand-side) foot, striding toward the throw with the left (glove-side) foot",
            "Both feet on the bag at once",
            "Whichever foot is closer — it doesn't matter",
          ],
          correctIndex: 1,
          explanation: "A right-handed first baseman anchors the right foot (throwing-hand side) on the bag and strides toward the throw with the left, glove-side foot. This setup maximizes reach toward the ball and keeps the body balanced and able to stretch. Using the correct foot is what allows the long, stable stretch that shortens the throw's flight time.",
        },
        {
          id: "baseball-9-02-q3",
          type: "Stretch",
          challenge: `  On a close (bang-bang) play, a first baseman
  receives the throw flat-footed with the ball
  arriving at the bag, and the runner is called safe.`,
          text: "How does stretching toward the throw help on a bang-bang play?",
          options: [
            "It doesn't change anything",
            "Stretching extends the glove toward the ball, shortening its flight and letting the first baseman receive it a fraction of a second earlier — often the difference between out and safe",
            "It distracts the umpire",
            "It only matters on slow throws",
          ],
          correctIndex: 1,
          explanation: "By stretching toward the throw with the glove-side foot while keeping the back foot on the bag, the first baseman receives the ball noticeably sooner because the ball travels a shorter distance to the glove. On a bang-bang play, that fraction of a second turns a safe call into an out. Over a season, good stretching converts many close plays into outs.",
        },
        {
          id: "baseball-9-02-q4",
          type: "Priority",
          challenge: `  A throw is sailing wide, pulling the first baseman
  off the bag. They keep a foot stubbornly on the
  base and let the ball sail past into foul territory.`,
          text: "What should the first baseman prioritize when a throw pulls them off the bag?",
          options: [
            "Keeping a foot on the bag at all costs, even if the ball gets away",
            "Catching the ball first — come off the bag if necessary to secure it, then tag the bag or the runner",
            "Letting the ball go to avoid an error",
            "Jumping straight up regardless of the throw",
          ],
          correctIndex: 1,
          explanation: "The top priority is always catching the ball. A throw that pulls the first baseman off the bag should still be caught — coming off the base to secure it — because a ball that sails past lets the runner reach and often advance an extra base. After catching, the first baseman can try to tag the runner or hustle back to the bag. An uncaught throw is far worse than a missed touch of the base.",
        },
      ],
    },
  },

  // ─── baseball-9-03: Scooping and Picking Throws ───────────────────────────────
  {
    epochId: "baseball-9",
    wonder: {
      name: "Target Field",
      location: "Minneapolis, Minnesota",
      era: "Modern",
      emoji: "🥄",
    },
    id: "baseball-9-03",
    order: 3,
    title: "Scooping and Picking Throws",
    subtitle: "Digging short hops out of the dirt to save outs",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-9-badge-03", name: "The Vacuum", emoji: "🥄" },
    challengeType: "quiz",
    info: {
      tagline: "The pick is the first baseman's superpower — turning a teammate's bad throw into a routine out.",
      year: 2001,
      overview: [
        "No skill defines a great defensive first baseman like picking throws out of the dirt. Infielders make off-target throws constantly — rushed, on the run, from deep in the hole — and many of them bounce in front of the bag. A first baseman who can scoop these short hops cleanly converts errant throws into outs and saves errors for the whole infield. The pick is part technique, part soft hands, and part fearless commitment to the ball.",
        "The technique for a short hop is to stay down and let the glove work low — present the pocket and 'give' slightly as the ball arrives so it settles in rather than bouncing off. The read depends on the bounce:\n- Long hop — read the bounce early and catch it at the top.\n- Short hop — smother it right out of the dirt.\n- In-between hop (the hardest) — avoid it; work to turn it into a long or short hop.\nPicking the short hop is usually safer than reaching for an awkward in-between bounce.",
        "Footwork supports the pick:\n- Come off the bag to field a wild throw, then tag the runner or dive back to the base.\n- On throws to the side, shift to get the body in front, using the chest as a backstop so a missed pick stays close.\nPicking is built entirely through repetition — thousands of short hops until the hands are soft and the read is instinctive — and it's the single most valuable defensive skill a first baseman can own.",
      ],
      technical: {
        title: "Picking the Short Hop",
        body: [
          "Stay down and give: keep the body low and the glove low, presenting the pocket to the ball at ground level. As the short hop arrives, 'give' with the glove — a slight recoil that absorbs the ball so it settles in rather than ricocheting out. Stabbing rigidly at a short hop causes the ball to pop loose. Soft hands are everything.",
          "Read the hop and choose: the long hop (caught as the ball rises after a bounce) and the short hop (smothered right out of the dirt) are both manageable; the in-between hop is the danger. Read the bounce early to take it on the long hop, or stay down and pick the short hop. Get the body in front when you can, using the chest as a backstop. On a wild throw, come off the bag to catch it, then tag the runner or the base.",
        ],
        codeExample: {
          label: "Scooping / Picking Technique",
          code: `  THROW IS IN THE DIRT — PICK IT:
  ✓ STAY DOWN — low body, low glove
  ✓ Present the pocket AT ground level
  ✓ "GIVE" with the glove as the ball arrives
    (soft hands absorb; rigid hands pop out)
  ✓ Get the body/chest behind it as a backstop

  HOP READING:
  LONG hop   → catch as the ball RISES (readable)
  SHORT hop  → smother right out of the dirt
  IN-BETWEEN → the danger hop: read early to
               turn it into a long or short hop

  WILD THROW → come OFF the bag, secure the ball,
               then TAG the runner or the base.

  Built by REPETITION — thousands of short hops
  until the hands are soft and the read is instinct.`,
        },
      },
      incident: {
        title: "The Pick That Saves the Inning",
        when: "2001 — modern defensive baseball",
        where: "Target Field and ballparks across the game",
        impact: "Defensive analysts increasingly credited first basemen for 'scoops' and 'picks' — recognizing that a first baseman who saves errant throws prevents errors, extra bases, and big innings that a weaker receiver would allow.",
        body: [
          "As defensive analysis matured, teams began formally crediting first basemen for the throws they picked out of the dirt — plays that previously went unrecorded as anything but a routine out. The recognition confirmed what infielders always knew: a first baseman with a great glove around the bag lets the rest of the infield play more freely, because they can throw aggressively knowing a low throw will still be caught.",
          "The pick changes a game's momentum. A scooped short hop on a two-out throw ends an inning that an error would have extended, often saving multiple runs. The skill rewards the unglamorous work of taking thousands of short hops in practice. For young first basemen, mastering the pick is the fastest way to become genuinely valuable on defense — it is the position's signature skill.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Errant Throw in the Dirt", sub: "rushed or off-line", type: "attacker" },
          { label: "Stay Down, Read the Hop", sub: "long, short, or in-between", type: "system" },
          { label: "Give with Soft Hands", sub: "absorb, don't stab", type: "victim" },
          { label: "Out Saved", sub: "error becomes an out", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Soft-hands picking technique emphasized in pro infield instruction" },
        { year: 1985, event: "Soft-handed glovework popularizes aggressive first-base receiving" },
        { year: 2001, event: "Defensive analysis begins crediting first-base scoops and picks", highlight: true },
        { year: 2015, event: "Statcast and fielding metrics quantify picks saved" },
        { year: 2020, event: "Short-hop reaction drills standard in first-base development" },
      ],
      keyTakeaways: [
        "Picking throws out of the dirt is the first baseman's signature skill — it turns teammates' bad throws into outs",
        "Stay down with a low glove and 'give' as the ball arrives — soft hands absorb the short hop instead of popping it out",
        "Read the hop: take the long hop as it rises or smother the short hop; the in-between hop is the danger",
        "Get the body in front as a backstop, and come off the bag to secure a wild throw before tagging",
      ],
      references: [
        { title: "USA Baseball: First Base Receiving Drills", url: "https://www.usabaseball.com" },
        { title: "Little League: Infield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: The Art of the Scoop", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-9-03-q1",
          type: "Hands",
          challenge: `  A first baseman stabs rigidly at a short hop with
  a stiff arm and locked wrist. The ball bounces
  off the glove and rolls away.`,
          text: "What technique would help the first baseman secure the short hop?",
          options: [
            "Stab harder and faster at the ball",
            "Use soft hands — stay low and 'give' with the glove as the ball arrives so it settles into the pocket instead of bouncing out",
            "Close the glove before the ball gets there",
            "Look away at the last second",
          ],
          correctIndex: 1,
          explanation: "Short hops are picked with soft hands. The first baseman stays low and lets the glove 'give' — a slight recoil that absorbs the ball's energy so it settles into the pocket. A rigid, stabbing motion causes the ball to ricochet off the glove. Soft, giving hands are the heart of scooping, and they're built through thousands of repetitions.",
        },
        {
          id: "baseball-9-03-q2",
          type: "Hop Reading",
          challenge: `  A throw bounces toward first base. The first
  baseman can either catch it as it rises off a
  long bounce, smother it right out of the dirt,
  or get caught reaching at an awkward middle bounce.`,
          text: "Which hop is the most dangerous to field, and how should the first baseman handle it?",
          options: [
            "The long hop is the most dangerous",
            "The in-between hop is the danger — read the bounce early to turn it into either a readable long hop or a smothered short hop",
            "All hops are equally easy",
            "The short hop is impossible to field",
          ],
          correctIndex: 1,
          explanation: "The in-between hop — not a long, readable rise and not a smotherable short hop — is the hardest and most dangerous to field, because it tends to handcuff the fielder at an awkward height. The fix is to read the bounce early and adjust the body so the ball becomes either a long hop (caught as it rises) or a short hop (smothered out of the dirt), avoiding the awkward middle bounce.",
        },
        {
          id: "baseball-9-03-q3",
          type: "Body",
          challenge: `  A throw is in the dirt and slightly to the first
  baseman's side. They reach across with just the
  glove and miss; the ball skips to the fence.`,
          text: "How could the first baseman keep that missed pick from getting away?",
          options: [
            "Reach with the glove only and hope",
            "Shift to get the body and chest behind the ball as a backstop, so even a missed pick stays close in front",
            "Turn their back to the throw",
            "Jump over the ball",
          ],
          correctIndex: 1,
          explanation: "Whenever possible, the first baseman shifts to get the body — chest and torso — behind a throw in the dirt, using it as a backstop. That way, even if the glove doesn't pick the ball cleanly, the ball stays close in front rather than skipping to the fence and allowing the runner to advance. Getting the body in front is a key habit, just as it is for catchers blocking.",
        },
        {
          id: "baseball-9-03-q4",
          type: "Value",
          challenge: `  Two outs, runner on second. An infielder makes a
  low, rushed throw that bounces in front of first.
  The first baseman picks it cleanly for the out.`,
          text: "Why is a pick like this so valuable to the team?",
          options: [
            "It isn't valuable — it's just one out",
            "It ends the inning that an error would have extended, preventing extra bases and potential runs — and lets infielders throw aggressively knowing low throws will be caught",
            "It only helps the first baseman's personal stats",
            "Picks have no effect on the rest of the infield",
          ],
          correctIndex: 1,
          explanation: "A clean pick on a two-out throw ends an inning that an error would have prolonged, preventing the extra bases and runs a misplay would have allowed. Just as important, a first baseman known for picking throws lets the whole infield throw with confidence and aggression, because they trust a low throw will still be handled. The pick's value extends well beyond the single out.",
        },
      ],
    },
  },

  // ─── baseball-9-04: Holding Runners ───────────────────────────────────────────
  {
    epochId: "baseball-9",
    wonder: {
      name: "Citizens Bank Park",
      location: "Philadelphia, Pennsylvania",
      era: "Modern",
      emoji: "🔒",
    },
    id: "baseball-9-04",
    order: 4,
    title: "Holding Runners and the Pickoff",
    subtitle: "Footwork on the bag, taking the throw, and getting off to field",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-9-badge-04", name: "Lockdown", emoji: "🔒" },
    challengeType: "quiz",
    info: {
      tagline: "Holding a runner on is a balancing act — keep him close, take the pickoff cleanly, then get off the bag to field.",
      year: 1990,
      overview: [
        "When a runner is on first, the first baseman 'holds' him on — a foot near the bag to give the pitcher a pickoff target and keep the lead short. The job has three parts:\n- Present a good target and take the pickoff throw cleanly for a quick tag.\n- Keep the runner honest so he can't get a big jump to steal.\n- Get off the bag quickly into fielding position once the pitch is delivered.\nA held first baseman covers less ground, so releasing on time matters.",
        "Taking the pickoff throw is a timing play practiced between pitcher and first baseman:\n- Set up with the throwing-hand-side foot against the inside corner of the bag.\n- Present a low target and catch the throw.\n- Sweep the tag down to the inside corner where the diving runner's hand returns.\nThe tag must be quick and low — the runner is diving back, so the glove has to beat the hand — but a clean catch comes first; a great tag means nothing if the ball isn't secured.",
        "Getting off the bag is the part beginners forget. Holding a runner pulls the first baseman toward the line and shrinks the area they can cover. As soon as the pitcher commits to the plate, the first baseman releases off the bag toward fielding position to restore range. With first base open and a fast runner, teams may play behind the runner (not holding) when a steal is less costly than reduced range. Knowing when to hold and when to play off is a situational decision.",
      ],
      technical: {
        title: "Holding On, the Tag, and Releasing to Field",
        body: [
          "Setup and tag: place the throwing-hand-side foot against the inside (home-plate side) corner of the bag, face the pitcher, present a low target. On the pickoff throw, catch first, then sweep a quick, low tag to the inside corner of the bag where the runner's hand returns. Keep the tag low and let the runner dive into it. Don't swipe up high or you'll miss the diving hand.",
          "Hold vs. play off, and releasing: holding shortens the runner's lead but reduces the first baseman's fielding range. Once the pitcher delivers home, the first baseman releases off the bag and gets into fielding position quickly to recover range. With a fast runner and first base the only occupied base, or with a big lead in the game, a team may choose to play behind the runner (not hold) to keep full range, accepting the risk of a steal. It's a trade-off read by the situation.",
        ],
        codeExample: {
          label: "Holding a Runner — Sequence",
          code: `  RUNNER ON FIRST:
  1. HOLD: throwing-hand-side foot on the INSIDE
     corner of the bag, face the pitcher, low target
  2. PICKOFF THROW → CATCH FIRST, then sweep a
     QUICK, LOW tag to the inside corner (where
     the diving hand returns)
  3. PITCH GOES HOME → RELEASE off the bag fast
     into fielding position (restore your range)

  HOLD vs PLAY BEHIND (situational):
  → HOLD: keeps the lead short (steal matters)
  → PLAY BEHIND: full fielding range (when a
    steal is less costly than a hit through the
    bigger hole — e.g., big lead, slow runner)

  Pickoffs are TIMING plays — rehearse them with
  your pitcher.`,
        },
      },
      incident: {
        title: "The Cat-and-Mouse Game at First Base",
        when: "1990s — the high-stolen-base era's tactics endure",
        where: "Citizens Bank Park and ballparks across the game",
        impact: "The constant battle between the runner's lead and the first baseman's hold — pickoff throws, jumps, and the trade-off between holding and fielding range — is one of baseball's enduring strategic subplots, decided by footwork, timing, and situational judgment.",
        body: [
          "Every runner on first sets off a quiet contest: the runner wants the biggest possible lead to steal or advance, and the first baseman, in concert with the pitcher, wants to keep that lead short with the threat of a pickoff. A first baseman who takes pickoff throws cleanly and applies quick, low tags forces runners to shorten their leads, which ripples through the whole inning by making steals and extra bases harder.",
          "But holding a runner has a cost — it pulls the first baseman toward the line and shrinks their fielding range, opening a bigger hole on the right side. Smart teams weigh that trade constantly, sometimes choosing to play behind a runner when keeping full range matters more than the threat of a steal. The first baseman's footwork on the bag and judgment about when to hold are subtle skills that shape the game inning by inning.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Runner on First", sub: "wants a big lead", type: "attacker" },
          { label: "Hold On / Present Target", sub: "foot on inside corner", type: "system" },
          { label: "Take Pickoff, Quick Low Tag", sub: "catch first, then tag", type: "victim" },
          { label: "Release to Field", sub: "restore range on the pitch", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Pickoff plays formalized as pitcher–first baseman timing plays" },
        { year: 1980, event: "Stolen-base era raises the importance of holding runners close" },
        { year: 1990, event: "Hold-vs-play-behind range trade-offs analyzed in pro coaching", highlight: true },
        { year: 2015, event: "Defensive positioning data informs when to hold vs. play off" },
        { year: 2023, event: "Pickoff/disengagement limits and bigger bases reshape the holding game" },
      ],
      keyTakeaways: [
        "Holding a runner keeps his lead short but reduces the first baseman's fielding range — a constant trade-off",
        "Set the throwing-hand-side foot on the inside corner of the bag and present a low target for the pickoff",
        "On a pickoff, catch the ball first, then sweep a quick, low tag to the inside corner where the diving hand returns",
        "Release off the bag into fielding position as soon as the pitch goes home to restore your range",
      ],
      references: [
        { title: "USA Baseball: Holding Runners and Pickoffs", url: "https://www.usabaseball.com" },
        { title: "Little League: Infield Coaching Guide", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Pickoff and Disengagement Rules", url: "https://www.mlb.com/official-information/umpires/official-rules" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-9-04-q1",
          type: "Tag",
          challenge: `  On a pickoff throw, a first baseman catches the
  ball and swipes the tag up high near the runner's
  shoulders as the runner dives back to the bag.`,
          text: "Where should the pickoff tag be applied, and why?",
          options: [
            "Up high near the shoulders — it's easier to reach",
            "Quick and low, sweeping to the inside corner of the bag where the diving runner's hand returns",
            "Anywhere on the runner's body works equally",
            "On the runner's back foot",
          ],
          correctIndex: 1,
          explanation: "A runner diving back to first reaches for the inside corner of the bag with his hand, so the tag must be quick and low — sweeping down to that inside corner to beat the returning hand. Swiping high at the shoulders misses the part of the runner that's actually arriving at the base. The tag is low and fast, and only after the ball is securely caught.",
        },
        {
          id: "baseball-9-04-q2",
          type: "Range",
          challenge: `  With a runner on first, the first baseman holds
  the runner on and then forgets to move once the
  pitch is delivered. A ground ball goes through
  the big gap on the right side.`,
          text: "What should the first baseman do once the pitcher delivers the pitch home?",
          options: [
            "Stay anchored at the bag the entire pitch",
            "Release off the bag into fielding position immediately to restore range to field a batted ball",
            "Run toward home plate",
            "Keep both feet on the base",
          ],
          correctIndex: 1,
          explanation: "Holding a runner pulls the first baseman toward the line and shrinks their fielding range. As soon as the pitcher commits to home plate (and a pickoff is no longer coming), the first baseman must release off the bag and get into fielding position to cover their normal range. Forgetting to release leaves a big hole on the right side for ground balls to sneak through.",
        },
        {
          id: "baseball-9-04-q3",
          type: "Strategy",
          challenge: `  Late in a blowout game, a slow runner is on first.
  The coach tells the first baseman not to hold
  the runner and to play behind him instead.`,
          text: "Why might a team choose to play behind a runner rather than hold him on?",
          options: [
            "Holding runners is against the rules in blowouts",
            "Playing behind restores full fielding range; when a steal is less costly than a ground ball sneaking through the hole, range matters more than the short lead",
            "It makes the runner faster",
            "There's never a reason to play behind a runner",
          ],
          correctIndex: 1,
          explanation: "Holding a runner shrinks the first baseman's range and opens a hole on the right side. When a steal is relatively unimportant — a big lead, a slow runner, or a situation where one base doesn't matter much — a team will play the first baseman behind the runner to keep full fielding range, judging that preventing a hit through the hole is worth more than keeping the runner's lead short. It's a situational trade-off.",
        },
        {
          id: "baseball-9-04-q4",
          type: "Fundamentals",
          challenge: `  A first baseman is so focused on applying a fast
  tag that they reach for the runner before fully
  securing the pickoff throw, and the ball pops out.`,
          text: "What's the correct priority on a pickoff play?",
          options: [
            "Tag as fast as possible, even before catching cleanly",
            "Catch and secure the throw first, then apply the quick low tag — an out only counts if the ball is held",
            "Block the bag with the body",
            "Throw immediately to second base",
          ],
          correctIndex: 1,
          explanation: "Just like a catcher on a tag play, the first baseman must secure the throw before applying the tag. Reaching to tag before catching cleanly causes dropped balls and lets the runner stay safe — or worse, advance. The sequence is catch first, then sweep the quick, low tag to the inside corner. No ball, no out.",
        },
      ],
    },
  },

  // ─── baseball-9-05: Building the First Baseman's Body ─────────────────────────
  {
    epochId: "baseball-9",
    wonder: {
      name: "Chase Field",
      location: "Phoenix, Arizona",
      era: "Modern",
      emoji: "💪",
    },
    id: "baseball-9-05",
    order: 5,
    title: "Building the First Baseman's Body",
    subtitle: "Flexibility, agility, and the reach that saves outs",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-9-badge-05", name: "Long Reach", emoji: "🤸" },
    challengeType: "quiz",
    info: {
      tagline: "First base isn't about size — it's about the flexibility to stretch, the agility to pick, and the reach to save a throw.",
      year: 2008,
      overview: [
        "The image of the first baseman as a big, slow slugger misses what the position demands physically. The most valuable defensive traits are:\n- Flexibility — to stretch low and wide for throws and pick short hops.\n- Agility — quick feet around the bag and lateral range on ground balls.\n- Reach — a longer wingspan genuinely helps receive off-line throws (one reason taller players gravitate to the position).\nStrength and size help the bat and the reach, but they're not the defensive foundation.",
        "Flexibility is the first baseman's most underrated physical asset:\n- The deep, wide stretch that shortens a throw's flight requires hip, hamstring, and groin flexibility.\n- The low pick out of the dirt requires the ability to get down and stay down comfortably.\nMobility work — hip openers, hamstring and groin flexibility, ankle mobility — translates directly to more outs. A stiff first baseman can't stretch far or pick low, no matter how strong they are.",
        "Agility and footwork round out the physical profile: quick, light feet to find the bag without looking, shuffle into position, and react laterally to ground balls in the 3-hole. Single-leg strength and balance support the stretch and the push off the bag. Like every infielder, the first baseman trains the legs, hips, and core for stability and quick movement, plus throwing-arm care for the throws to second and around the horn. The build that matters is mobile and agile, not merely large.",
      ],
      technical: {
        title: "Training Priorities for First Basemen",
        body: [
          "Flexibility and mobility first: prioritize hip, hamstring, and groin flexibility for the deep stretch, plus the ability to get low and stay low for picks. Ankle and hip mobility support quick footwork around the bag. This flexibility is what converts reach into actual outs — the stretch and the low pick both depend on it.",
          "Agility, strength, and arm care: train quick feet and lateral agility for finding the bag and covering the 3-hole; build single-leg strength and balance for the stretch and the push off the base; strengthen legs, hips, and core for stable, powerful movement; and care for the throwing arm (rotator cuff, scapular work) for accurate throws to second and around the infield. Size helps the bat and reach, but mobility and agility drive the defense.",
        ],
        codeExample: {
          label: "First Baseman Body-Building Priorities",
          code: `  FLEXIBILITY (the difference-maker):
  → Hip / hamstring / groin → the DEEP STRETCH
  → Get-low mobility → picking short hops
  → Ankle + hip mobility → quick bag footwork

  AGILITY:
  → Light, quick feet → find the bag by feel
  → Lateral range → cover the 3-hole
  → Single-leg strength/balance → stretch + push

  STRENGTH + ARM:
  → Legs, hips, core → stable, powerful movement
  → Rotator cuff / scapular care → throws to 2B
    and around the horn

  REACH helps (longer wingspan saves off-line
  throws) — but MOBILITY, not size, is the
  defensive foundation.`,
        },
      },
      incident: {
        title: "The Athletic First Baseman",
        when: "2000s — the modern defensive era",
        where: "Chase Field and ballparks across the game",
        impact: "As defensive metrics revealed the run-saving value of first-base picks, stretches, and range, teams began valuing athleticism and flexibility at the position rather than parking the slowest slugger there — reshaping how first basemen train.",
        body: [
          "For decades, conventional wisdom treated first base as the place to stash a bat-first player who couldn't field elsewhere. As fielding analysis matured in the 2000s, it became clear that first-base defense — picking throws, stretching, and covering range — saved real runs, and that flexible, agile first basemen were meaningfully better than stiff ones. The position's physical priorities shifted accordingly.",
          "Modern first basemen train like athletes, not just sluggers: mobility work to stretch and pick, agility for footwork and range, and the strength and arm care every infielder needs. The lesson for young players is that first base rewards flexibility and quick feet far more than size. A nimble, flexible first baseman who can stretch and pick will out-defend a bigger, stiffer one every time.",
        ],
      },
      diagram: {
        nodes: [
          { label: "The Position's Demands", sub: "stretch, pick, range", type: "attacker" },
          { label: "Flexibility + Mobility", sub: "hips, hamstrings, get low", type: "system" },
          { label: "Agility + Single-Leg Strength", sub: "footwork, stretch, push", type: "victim" },
          { label: "Outs Saved", sub: "mobile beats merely large", type: "result" },
        ],
      },
      timeline: [
        { year: 1980, event: "First base still viewed as a spot to hide a slow bat" },
        { year: 2003, event: "Advanced fielding metrics begin valuing first-base defense" },
        { year: 2008, event: "Athleticism and flexibility emphasized in first-base development", highlight: true },
        { year: 2015, event: "Statcast quantifies stretches, picks, and range at first base" },
        { year: 2020, event: "Mobility and agility training standard for first basemen" },
      ],
      keyTakeaways: [
        "First base rewards flexibility, agility, and reach far more than size — the slow-slugger stereotype is outdated",
        "Flexibility (hips, hamstrings, groin) is the foundation of the deep stretch and the low pick",
        "Agile, light feet are needed to find the bag by feel and cover the 3-hole",
        "Train legs, hips, core, and throwing-arm care like any infielder — mobility drives the defense",
      ],
      references: [
        { title: "USA Baseball: Athlete Development", url: "https://www.usabaseball.com" },
        { title: "Little League: Conditioning Basics", url: "https://www.littleleague.org/playing-rules/" },
        { title: "MLB: Defensive Value of First Base", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-9-05-q1",
          type: "Foundation",
          challenge: `  A tall, strong first baseman struggles to stretch
  far for throws and can't get low enough to pick
  short hops, because they're very stiff.`,
          text: "Which physical quality most directly limits this first baseman's defense?",
          options: [
            "Lack of size — they need to be bigger",
            "Lack of flexibility — the deep stretch and low pick depend on hip, hamstring, and groin flexibility",
            "Lack of running speed",
            "Lack of grip strength",
          ],
          correctIndex: 1,
          explanation: "Strength and size aren't the issue — flexibility is. The deep, wide stretch and the ability to get low and stay low for picks both require hip, hamstring, and groin flexibility. A stiff first baseman can't reach far or pick low no matter how strong they are. Flexibility is the most underrated and important physical asset at the position.",
        },
        {
          id: "baseball-9-05-q2",
          type: "Reach",
          challenge: `  A coach is deciding where to play a tall player
  with a long wingspan but average speed.`,
          text: "Why does a longer wingspan specifically help at first base?",
          options: [
            "It makes the player run faster",
            "Greater reach helps the first baseman receive off-line and stretched throws, extending farther to catch the ball sooner",
            "It has no effect at first base",
            "It only matters for hitting",
          ],
          correctIndex: 1,
          explanation: "A longer wingspan extends the first baseman's reach, helping them receive off-line throws and stretch farther toward the ball to catch it a fraction of a second sooner. That's one reason taller players often gravitate to first base. Reach is a genuine asset — but it must be paired with the flexibility to actually use it in a deep stretch.",
        },
        {
          id: "baseball-9-05-q3",
          type: "Agility",
          challenge: `  A first baseman has to find the bag without
  looking down, shuffle into position, and react
  laterally to ground balls in the 3-hole.`,
          text: "Which quality supports all of these footwork-based tasks?",
          options: [
            "Pure upper-body strength",
            "Agility — quick, light feet and lateral quickness for finding the bag, setting up, and covering range",
            "Long-distance endurance",
            "Bat speed",
          ],
          correctIndex: 1,
          explanation: "Finding the bag by feel, shuffling into position, and reacting laterally to ground balls all depend on agility — quick, light feet and lateral quickness. Combined with single-leg strength and balance for the stretch and push off the bag, agility is what makes a first baseman's footwork smooth and their range real. It's an athletic position, not a stationary one.",
        },
        {
          id: "baseball-9-05-q4",
          type: "Stereotype",
          challenge: `  A team's coach insists on always putting the
  biggest, slowest, strongest hitter at first
  base regardless of how stiff or immobile they are.`,
          text: "What did the modern, metrics-driven understanding of first base reveal about this approach?",
          options: [
            "It's the optimal approach — size is all that matters at first",
            "First-base defense (picks, stretches, range) saves real runs, so flexible, agile first basemen are meaningfully better than stiff, immobile ones",
            "Defense at first base can't be measured, so it doesn't matter",
            "Slow players are always better defenders",
          ],
          correctIndex: 1,
          explanation: "Advanced fielding metrics showed that first-base defense — picking throws, stretching, and covering range — saves real runs, and that flexible, agile first basemen meaningfully outperform stiff, immobile ones. Always parking the biggest, stiffest slugger at first ignores that defensive value. Modern teams prize mobility and flexibility at the position, training first basemen like athletes rather than just bats.",
        },
      ],
    },
  },

  // ─── baseball-9-06: Fielding the 3-Hole and Double Plays ──────────────────────
  {
    epochId: "baseball-9",
    wonder: {
      name: "Coors Field",
      location: "Denver, Colorado",
      era: "Modern",
      emoji: "🔃",
    },
    id: "baseball-9-06",
    order: 6,
    title: "Fielding the 3-Hole and Starting Double Plays",
    subtitle: "Range to the right, and the 3-6-3 and 3-6-1",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-9-badge-06", name: "Range Right", emoji: "🔃" },
    challengeType: "quiz",
    info: {
      tagline: "A first baseman with range turns balls into the gap into outs — and can start the slickest double play in the book.",
      year: 1982,
      overview: [
        "First basemen field their own ground balls too:\n- Their primary range is the '3-hole' between first and second, plus anything hit hard at or near the bag.\n- The fundamentals are an infielder's — get in front, field out front with the glove down, make a controlled play.\nThe unique decision: with a runner on, do they field and flip to the pitcher covering first, or take it themselves to the bag?",
        "With a runner on first and a double-play chance, the first baseman can start two plays:\n- 3-6-3 — field, throw to the shortstop covering second, take the return throw at first.\n- 3-6-1 — field, throw to second, then the pitcher covers first for the return.\nThese are among the most athletic plays a first baseman makes, requiring a strong, accurate throw to second and quick footwork back to the bag.",
        "Communication and decision speed are everything on these plays. The first baseman must instantly read whether a double play is on, whether the pitcher is covering first, and where the lead runner is. On a hard-hit ball with the first baseman deep in the hole, the pitcher covering first is essential because the first baseman can't beat the runner back to the bag. Knowing the situation before the pitch — outs, runners, and who covers — lets the first baseman start these double plays cleanly instead of hesitating.",
      ],
      technical: {
        title: "The 3-6-3 and 3-6-1 Double Plays",
        body: [
          "3-6-3: with a runner on first, the first baseman fields the ground ball, throws to the shortstop covering second base for the force, and then hustles back to first to take the return throw for the second out. This requires an accurate throw to the bag at second (leading the shortstop to the base) and quick feet to return to first.",
          "3-6-1: same start, but when the first baseman is too deep in the hole to get back to first in time, the pitcher covers first base and takes the return throw. The first baseman fields, throws to second (shortstop), and the shortstop relays to the pitcher now covering first. The key read is whether the first baseman can beat the runner back to the bag; if not, the pitcher must cover. Both plays demand that the first baseman and pitcher know their responsibilities before the pitch.",
        ],
        codeExample: {
          label: "First Baseman Double Plays",
          code: `  GROUND BALL TO 1B, RUNNER ON FIRST, DP ON:

  3-6-3  (first baseman can get back to the bag)
   1. (3) Field the ball
   2. (6) Throw to SHORTSTOP covering 2nd → force
   3. (3) Hustle BACK to first, take the return
          → second out

  3-6-1  (first baseman too deep in the hole)
   1. (3) Field the ball
   2. (6) Throw to SHORTSTOP covering 2nd → force
   3. (1) PITCHER covers first, takes the relay
          → second out

  KEY READ: can I beat the runner back to first?
   YES → 3-6-3   NO → pitcher covers (3-6-1)

  Know outs, runners, and WHO COVERS before the
  pitch — hesitation kills the double play.`,
        },
      },
      incident: {
        title: "The 3-6-3 — A First Baseman's Signature Play",
        when: "1980s — the fundamentals era",
        where: "Coors Field and ballparks across the game",
        impact: "The 3-6-3 double play — first baseman to shortstop and back to first — is regarded as one of the most athletic and satisfying plays in baseball, a showcase of the range, arm, and footwork a complete first baseman possesses.",
        body: [
          "The 3-6-3 captures everything a defensively skilled first baseman brings: the range to field a ground ball that might have gone for a hit, the arm to throw a strike to second base for the force, and the quick feet to scramble back and receive the return throw for a double play. It is a play that the old 'slow slugger' first baseman simply could not make, and it became a hallmark of the athletic, modern first baseman.",
          "The companion 3-6-1, with the pitcher covering first, shows the teamwork the position requires — the first baseman and pitcher must communicate and execute a rehearsed sequence in a heartbeat. These double plays reward first basemen who know the situation cold and react without hesitation. For young players, learning to start a double play from first base is a milestone that marks the transition from a passive receiver to a complete infielder.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Grounder to First, Runner On", sub: "double play is on", type: "attacker" },
          { label: "Field and Read", sub: "can I beat the runner back?", type: "system" },
          { label: "Throw to Short at Second", sub: "force the lead runner", type: "victim" },
          { label: "Return for the Double Play", sub: "3-6-3 or 3-6-1", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Standard double-play combinations codified in pro defense" },
        { year: 1979, event: "Range and a strong arm showcase first-base-started double plays" },
        { year: 1982, event: "3-6-3 and 3-6-1 taught as core first-base double plays", highlight: true },
        { year: 2010, event: "Defensive metrics credit first-base range to the 3-hole" },
        { year: 2023, event: "Shift restrictions change first-base positioning and double-play angles" },
      ],
      keyTakeaways: [
        "The 3-hole between first and second is the first baseman's primary range responsibility",
        "With a runner on first and a double-play chance, the first baseman can start a 3-6-3 or 3-6-1",
        "The key read is whether the first baseman can beat the runner back to first — if not, the pitcher covers (3-6-1)",
        "Know the outs, runners, and who covers before the pitch; hesitation kills the double play",
      ],
      references: [
        { title: "USA Baseball: Double-Play Mechanics", url: "https://www.usabaseball.com" },
        { title: "Little League: Infield Coaching Guide", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Infield Double Plays", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-9-06-q1",
          type: "Range",
          challenge: `  A ground ball is hit to the right side, into the
  gap between the first and second basemen.`,
          text: "What is the name of the area that is the first baseman's primary range responsibility?",
          options: [
            "The 5-6 hole between third and short",
            "The 3-hole between first and second base",
            "The keystone",
            "The warning track",
          ],
          correctIndex: 1,
          explanation: "The 3-hole — the gap between the first baseman (position 3) and the second baseman — is the first baseman's primary range responsibility, along with balls hit hard at or near the bag. Fielding the 3-hole well, getting the body in front and making a controlled play, turns balls that might sneak through for hits into outs. Range at first base is a real, run-saving skill.",
        },
        {
          id: "baseball-9-06-q2",
          type: "3-6-3",
          challenge: `  Runner on first, ground ball to the first baseman
  near the bag. The first baseman fields it cleanly
  and is close enough to get back to first himself.`,
          text: "What is the sequence of a 3-6-3 double play?",
          options: [
            "Throw home, then to third, then to first",
            "First baseman fields, throws to the shortstop covering second for the force, then hustles back to first to take the return throw",
            "First baseman tags the runner, then throws to third",
            "Pitcher fields, throws to second, then to home",
          ],
          correctIndex: 1,
          explanation: "In a 3-6-3, the first baseman (3) fields the ball, throws to the shortstop (6) covering second base for the force out on the lead runner, and then hustles back to first base (3) to receive the return throw for the second out. It requires an accurate throw leading the shortstop to the bag and quick feet to get back to first — one of the most athletic plays a first baseman makes.",
        },
        {
          id: "baseball-9-06-q3",
          type: "3-6-1",
          challenge: `  Runner on first, hard ground ball pulls the first
  baseman deep into the 3-hole, far from the bag.
  He fields it but can't possibly beat the runner
  back to first base.`,
          text: "How should this double play be completed when the first baseman is too deep in the hole?",
          options: [
            "Give up on the double play entirely",
            "Run a 3-6-1 — throw to short at second, and the pitcher covers first base to take the relay for the second out",
            "Throw the ball to home plate",
            "Have the second baseman cover first base",
          ],
          correctIndex: 1,
          explanation: "When the first baseman is too deep in the hole to get back to first in time, the play becomes a 3-6-1: field, throw to the shortstop (6) covering second for the force, and the pitcher (1) covers first base to take the relay for the second out. The key read is whether the first baseman can beat the runner back — if not, the pitcher must cover first. This is why the pitcher practices covering first on balls to the right side.",
        },
        {
          id: "baseball-9-06-q4",
          type: "Decision",
          challenge: `  A first baseman fields a grounder with a runner on
  first but hesitates, unsure whether a double play
  is on or who is covering — and by the time he
  decides, only one out is available.`,
          text: "What is the fix for a first baseman who hesitates on double-play decisions?",
          options: [
            "React faster after the ball is hit — there's no way to decide sooner",
            "Know the outs, runners, and who covers before each pitch, so the decision is already made when the ball is fielded",
            "Always throw to second regardless of the situation",
            "Always take the easy out at first and never attempt a double play",
          ],
          correctIndex: 1,
          explanation: "Hesitation comes from deciding after the ball is hit. The fix is preparation: before each pitch, the first baseman should know the number of outs, where the runners are, whether a double play is on, and who covers first if he's pulled into the hole. With the decision made in advance, he fields and executes instantly. Anticipation, not raw quickness, is what makes double plays clean.",
        },
      ],
    },
  },

  // ─── baseball-9-07: Charging Bunts ────────────────────────────────────────────
  {
    epochId: "baseball-9",
    wonder: {
      name: "Busch Stadium",
      location: "St. Louis, Missouri",
      era: "Modern",
      emoji: "🏃",
    },
    id: "baseball-9-07",
    order: 7,
    title: "Charging Bunts and the Wheel Play",
    subtitle: "Attacking the sacrifice and forcing the lead out",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-9-badge-07", name: "Bunt Killer", emoji: "🏃" },
    challengeType: "quiz",
    info: {
      tagline: "An aggressive first baseman doesn't just take the bunt out — he can take the lead runner, killing the sacrifice entirely.",
      year: 1983,
      overview: [
        "When a sacrifice bunt is in order — a runner on first or second, fewer than two outs, the offense trying to advance the runner — the first baseman becomes a key part of the defense's response. On a bunt toward the first-base side, the first baseman charges hard, fields the ball, and decides where the play is: the safe out at first, or, if he reads it early enough, the aggressive throw to force the lead runner at second or third. An aggressive, sure-handed first baseman can turn a sacrifice into a failure by retiring the lead runner.",
        "Charging the bunt uses the same footwork principles as a catcher fielding one:\n- Attack the ball, don't wait on it.\n- Circle it so the body is aligned toward the target before fielding.\n- Field with two hands, or a bare-hand scoop on a dead ball.\nBecause the first baseman charges away from first, someone else must cover — usually the second baseman rotates over. That rotation to cover vacated bases is part of the defense's bunt coverage.",
        "The 'wheel play' is an aggressive bunt defense with a runner on second (or first and second) when the defense wants the lead runner at third:\n- The corners (first and third basemen) charge hard.\n- The shortstop covers third.\n- The second baseman covers first — the infield 'wheels' around.\nIt's high-risk, high-reward: executed well it cuts down the lead runner; if the bunt is good or the timing is off, it can leave bases open. The first baseman's aggressive charge is central to making it work.",
      ],
      technical: {
        title: "Charging the Bunt and Covering the Rotation",
        body: [
          "Charge and field: on a likely bunt, the first baseman creeps in with the pitch and charges hard when the ball is bunted to his side. Circle the ball to align the feet toward the target, field with two hands (or bare-hand a dead ball), and come up throwing. Read early whether the lead runner can be retired; if not, take the sure out at first. Don't force a low-percentage throw and end up with no out.",
          "Coverage rotation: when the first baseman charges, the second baseman rotates to cover first base for the throw. On the wheel play (runner on second, going for the out at third), the corners charge, the shortstop covers third, and the second baseman covers first. Everyone must know their rotation assignment before the pitch — a charging first baseman with no one covering first gives away a free base. Communication and rehearsal make bunt defense work.",
        ],
        codeExample: {
          label: "Bunt Defense — First Baseman's Role",
          code: `  SACRIFICE BUNT TO THE FIRST-BASE SIDE:
  1. CREEP in with the pitch, CHARGE on the bunt
  2. CIRCLE the ball, field 2 hands / bare-hand
  3. READ early: can I get the LEAD runner?
       YES → throw ahead (force 2nd or 3rd)
       NO  → take the SURE out at first
  4. The SECOND BASEMAN covers first base
     (you've vacated it by charging)

  THE WHEEL PLAY (runner on 2nd, go for 3rd):
  → Corners (1B + 3B) CHARGE hard
  → Shortstop covers THIRD
  → Second baseman covers FIRST
  → High risk / high reward: cut down the lead
    runner, but a good bunt can leave bases open

  Everyone must know their ROTATION pre-pitch.`,
        },
      },
      incident: {
        title: "Defending the Bunt — The Sure-Handed First Baseman",
        when: "2010–present — the modern Gold Glove era",
        where: "Dodger Stadium and ballparks across the game",
        impact: "A sure-handed, heads-up first baseman turns bunt defense into a weapon — charging under control, fielding cleanly, and reading whether the lead runner can be taken. Done well, it makes the sacrifice a gamble rather than a free out.",
        body: [
          "Bunt defense rewards the first baseman who charges under control and fields surely. Reliable Gold Glove first basemen like Freddie Freeman handle bunts cleanly, get the body in line to throw, and make the right read — taking the lead runner when it's there and the sure out when it isn't. A first baseman who fields bunts cleanly and decisively takes pressure off the whole bunt-defense rotation.",
          "The principle is timeless: a first baseman who fearlessly charges, fields the ball surely, and knows when to attempt the lead-runner out and when to take the sure out is a defensive asset who narrows the other team's options. The aggressive charge can erase a sacrifice; the sure hands ensure the defense at least records the out. For young players, the lesson is to practice charging and fielding bunts until the field-and-throw is clean and the decision is automatic.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Sacrifice Bunt Attempt", sub: "advance the runner", type: "attacker" },
          { label: "Charge and Field", sub: "circle the ball, two hands", type: "system" },
          { label: "Read the Lead Runner", sub: "force ahead or sure out", type: "victim" },
          { label: "Sacrifice Defended", sub: "2B covers first; rotation holds", type: "result" },
        ],
      },
      timeline: [
        { year: 1920, event: "Sacrifice bunt becomes a central small-ball tactic" },
        { year: 1960, event: "Bunt-defense rotations and the wheel play formalized" },
        { year: 1985, event: "Aggressive, sure-handed bunt defense becomes a hallmark of elite first basemen", highlight: true },
        { year: 2000, event: "Analytics question the sacrifice bunt's value, reducing its frequency" },
        { year: 2023, event: "Rule changes and analytics further reshape when teams bunt" },
      ],
      keyTakeaways: [
        "On a bunt to his side, the first baseman charges hard, fields with two hands, and reads whether the lead runner can be retired",
        "When the first baseman charges, the second baseman rotates to cover first base",
        "The wheel play (corners charge, shortstop covers third, second baseman covers first) aggressively targets the lead runner",
        "Aggressive, sure-handed bunt fielding can turn a sacrifice into a lost lead runner — but take the sure out if the aggressive play isn't there",
      ],
      references: [
        { title: "USA Baseball: Bunt Defense", url: "https://www.usabaseball.com" },
        { title: "Little League: Team Defense and Coverages", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Bunt Defense Strategy", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-9-07-q1",
          type: "Coverage",
          challenge: `  A sacrifice bunt is laid down toward first base.
  The first baseman charges hard to field it,
  leaving first base unoccupied.`,
          text: "Who covers first base when the first baseman charges a bunt?",
          options: [
            "Nobody — first base is left open",
            "The second baseman rotates over to cover first base for the throw",
            "The catcher runs all the way to first",
            "The right fielder covers first",
          ],
          correctIndex: 1,
          explanation: "When the first baseman charges in to field a bunt, he vacates first base, so the second baseman rotates over to cover first for the throw. This coverage rotation must be understood by everyone before the pitch — a charging first baseman with no one covering first would give away a free base. Bunt defense is a coordinated team play, not just an individual fielding the ball.",
        },
        {
          id: "baseball-9-07-q2",
          type: "Decision",
          challenge: `  Runner on first, sacrifice bunt to the first-base
  side. The first baseman charges and fields it,
  but the lead runner already has a big jump toward
  second and is nearly there.`,
          text: "What should the first baseman do if the lead runner can't be retired?",
          options: [
            "Force a desperate throw to second anyway and risk throwing it away",
            "Take the sure out at first base rather than forcing a low-percentage throw that could leave no out at all",
            "Hold the ball and concede both runners",
            "Throw to third base",
          ],
          correctIndex: 1,
          explanation: "The first baseman should read the lead runner early. If the lead runner has too big a jump to be retired, forcing a desperate throw risks throwing it away and ending up with no out at all. The smart play is to take the sure out at first. Aggressiveness is valuable, but only when the lead-runner out is actually there — otherwise, securing one out is far better than gambling and getting none.",
        },
        {
          id: "baseball-9-07-q3",
          type: "Wheel Play",
          challenge: `  Runner on second, the defense wants to cut down
  the lead runner at third on a bunt. The corners
  charge hard and the infield rotates.`,
          text: "In the wheel play, who covers third base and who covers first?",
          options: [
            "The third baseman covers third; the first baseman covers first",
            "The shortstop covers third base and the second baseman covers first base, since the corners are charging",
            "The catcher covers third; the pitcher covers first",
            "Nobody covers; all four infielders charge",
          ],
          correctIndex: 1,
          explanation: "On the wheel play, both corner infielders (first and third basemen) charge hard to field the bunt and attack the lead runner, so the infield 'wheels' around: the shortstop covers third base and the second baseman covers first base. It's a high-risk, high-reward play — if executed well it cuts down the lead runner at third, but a good bunt or mistimed rotation can leave bases open. Everyone must know their assignment pre-pitch.",
        },
        {
          id: "baseball-9-07-q4",
          type: "Impact",
          challenge: `  An opposing team stops attempting sacrifice bunts
  toward a particular first baseman, choosing to
  swing away instead.`,
          text: "What does it say about a first baseman when opponents stop bunting toward him?",
          options: [
            "That he's a poor fielder they're trying to protect",
            "That his aggressive charging and sure hands make bunting toward him likely to cost the lead runner — so he has removed the sacrifice as a safe option",
            "That bunting is against the rules in his ballpark",
            "That the opponents simply forgot how to bunt",
          ],
          correctIndex: 1,
          explanation: "When opponents stop bunting toward a first baseman, it's the highest compliment to his defense — it means his aggressive charging and reliable hands make the sacrifice likely to backfire by costing the lead runner. An elite charging, sure-handed first baseman turns the sacrifice from a safe exchange into a gamble and shrinks the other team's options.",
        },
      ],
    },
  },

  // ─── baseball-9-08: Cutoffs, Relays, and Backups ──────────────────────────────
  {
    epochId: "baseball-9",
    wonder: {
      name: "loanDepot Park",
      location: "Miami, Florida",
      era: "Modern",
      emoji: "🔗",
    },
    id: "baseball-9-08",
    order: 8,
    title: "Cutoffs, Relays, and Backups",
    subtitle: "The first baseman's job when the ball is in the outfield",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-9-badge-08", name: "The Link", emoji: "🔗" },
    challengeType: "quiz",
    info: {
      tagline: "When the ball goes to the outfield, the first baseman often becomes the relay link between the throw and the play.",
      year: 1995,
      overview: [
        "The first baseman's responsibilities extend well beyond the infield dirt. On many outfield throws, the first baseman is the cutoff man — the relay link positioned between the outfielder and the target base who can catch the throw and redirect it, keep it accurate, or let it through. The most common assignment: on a base hit to right field or center field with a play at the plate, the first baseman lines up as the cutoff between the outfielder and home, taking the throw from the outfielder and relaying it home or redirecting it to catch a trailing runner.",
        "Being a good cutoff man comes down to a few things:\n- Line up correctly — in a straight line between the outfielder and the target base.\n- Give the outfielder a clear target, often with raised hands.\n- Listen for the catcher, who sees the whole play and calls 'cut' and a base, or lets the throw through.\n- Catch and execute the call instantly — relay home, cut to another base to catch a trailing runner, or let it continue.",
        "The first baseman also has backup duties on plays they're not directly part of:\n- Back up bases to keep overthrows from costing extra bases — e.g., backing up second on a throw from the catcher or right fielder when no one else is covering.\n- Back up a rundown.\nLike every position, the first baseman must know before each pitch whether they'll be a cutoff man, a base coverer, or a backup — the position is woven into the whole defense's throwing game.",
      ],
      technical: {
        title: "Cutoff Positioning and Backup Assignments",
        body: [
          "As cutoff man: on a hit to right or right-center with a play at the plate, the first baseman moves out toward the infield grass and lines up directly between the outfielder and home plate, giving a clear target with raised hands. Catch the throw on the glove side, listen for the catcher's call ('cut home,' 'cut two,' or no call = let it go), and redirect instantly. Proper alignment keeps the throw straight and fast and gives the option to cut down a trailing runner.",
          "Backups and coverage: when not the cutoff man, the first baseman backs up bases to prevent overthrows from becoming extra bases, and covers first on various plays. Know the assignment pre-pitch: cutoff on outfield hits to the right side, base coverage when charging or holding, backup on throws across the infield. The first baseman is part of the relay and backup system that keeps runners from advancing on errant throws.",
        ],
        codeExample: {
          label: "First Baseman — Outfield-Throw Duties",
          code: `  HIT TO RIGHT / RIGHT-CENTER, PLAY AT THE PLATE:
  → 1B is the CUTOFF MAN
    1. Move out to the infield grass
    2. LINE UP between the outfielder and HOME
    3. Raise hands → clear target for the OF
    4. Catch glove-side; LISTEN for the catcher:
         "CUT HOME"  → relay to the plate
         "CUT TWO/THREE" → catch a trailing runner
         (no call) → LET IT GO through
    5. Proper alignment = straight, fast throw

  WHEN NOT THE CUTOFF:
  → BACK UP bases to stop overthrows
  → COVER first on charges/holds/rundowns

  Know your job (cutoff / cover / backup) BEFORE
  each pitch.`,
        },
      },
      incident: {
        title: "The Relay System That Stops the Extra Base",
        when: "1990s — fundamentals-driven defense",
        where: "loanDepot Park and ballparks across the game",
        impact: "Coaching tradition treats the cutoff-and-relay system — with the first baseman as a key link on right-side throws — as essential run prevention, keeping runners from taking extra bases and giving the defense a chance to cut down trailing runners.",
        body: [
          "A well-run cutoff and relay system is one of the clearest signs of a fundamentally sound team. The first baseman's role as the cutoff man on right-side outfield hits keeps throws to the plate accurate and fast, and — crucially — gives the defense the option to redirect the throw to catch a trailing runner trying to take an extra base. A throw that sails all the way home unchecked often lets the batter advance to second; a cutoff man preserves the option to make a play elsewhere.",
          "The system depends on the first baseman lining up correctly and the catcher directing the play. When done right, it routinely turns potential extra bases into held runners and occasional outs. For young players, learning to be a disciplined cutoff man — lining up, giving a target, and executing the catcher's call instantly — is as important as any individual fielding skill, because it connects the outfield and infield into one coordinated defense.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Hit to the Right Side", sub: "play developing at the plate", type: "attacker" },
          { label: "First Baseman Lines Up", sub: "between outfielder and home", type: "system" },
          { label: "Catch and Listen", sub: "catcher calls the play", type: "victim" },
          { label: "Relay or Redirect", sub: "home, cut a runner, or let go", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Cutoff and relay systems formalized in professional coaching" },
        { year: 1980, event: "Catcher-directed cutoffs become the standard system" },
        { year: 1995, event: "First baseman's cutoff role on right-side hits drilled as core defense", highlight: true },
        { year: 2010, event: "Defensive coordinators chart cutoff alignments by batted-ball type" },
        { year: 2020, event: "Positioning data refines cutoff depth and angles" },
      ],
      keyTakeaways: [
        "On hits to the right side with a play at the plate, the first baseman is usually the cutoff man",
        "Line up directly between the outfielder and home, give a clear target, and listen for the catcher's call",
        "Catch and instantly execute: relay home, cut and throw to catch a trailing runner, or let the throw go through",
        "When not the cutoff man, back up bases to keep overthrows from becoming extra bases — know your job pre-pitch",
      ],
      references: [
        { title: "USA Baseball: Cutoffs and Relays", url: "https://www.usabaseball.com" },
        { title: "Little League: Team Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Cutoff and Relay Fundamentals", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-9-08-q1",
          type: "Cutoff Role",
          challenge: `  A base hit drops into right field with a runner
  trying to score from second. The right fielder
  comes up throwing toward home plate.`,
          text: "What is the first baseman's typical role on this play?",
          options: [
            "Stay at first base and watch",
            "Act as the cutoff man — line up between the right fielder and home plate to take and potentially redirect the throw",
            "Run to home plate to make the tag",
            "Cover second base only",
          ],
          correctIndex: 1,
          explanation: "On a hit to right field with a play at the plate, the first baseman is typically the cutoff man, lining up between the right fielder and home plate. He gives the outfielder a target, takes the throw if directed, and can relay it home or redirect it to catch a trailing runner. This relay role keeps the throw fast and accurate and preserves the defense's options.",
        },
        {
          id: "baseball-9-08-q2",
          type: "Direction",
          challenge: `  The first baseman has lined up as the cutoff man.
  The throw from right field is on its way. He
  hears the catcher yelling behind him.`,
          text: "Who directs the cutoff man on whether to cut the throw, and why?",
          options: [
            "The cutoff man decides entirely on his own",
            "The catcher, who sees the entire play and the runners, calls 'cut' and a base or lets the throw go through",
            "The pitcher makes the call",
            "The umpire signals the cutoff",
          ],
          correctIndex: 1,
          explanation: "The catcher directs the cutoff man because the catcher faces the field and sees all the runners. The catcher calls 'cut home,' 'cut two/three' (to catch a trailing runner), or stays silent to let the throw go through to the plate. The first baseman must listen and execute the call instantly. This division of labor — relay man positions, catcher directs — is the heart of the cutoff system.",
        },
        {
          id: "baseball-9-08-q3",
          type: "Alignment",
          challenge: `  A first baseman sets up as the cutoff man but
  stands well off to the side, not in line with
  the outfielder and home plate.`,
          text: "Why must the cutoff man line up directly between the outfielder and the target base?",
          options: [
            "It doesn't matter where he stands",
            "Proper alignment keeps the throw on a straight, fast path to the target and lets the cutoff man cleanly catch and redirect it",
            "Standing off to the side makes the throw faster",
            "Alignment only matters for the catcher",
          ],
          correctIndex: 1,
          explanation: "The cutoff man must line up directly between the outfielder and the target (home plate, in this case) so the throw travels a straight, fast path and so he can cleanly catch and redirect it if the catcher calls for a cut. Standing off to the side means the throw either misses him entirely or arrives at a bad angle to redirect, defeating the purpose of the relay. Alignment is everything for a cutoff man.",
        },
        {
          id: "baseball-9-08-q4",
          type: "Backups",
          challenge: `  On a play where the first baseman is not the
  cutoff man and isn't covering a base, he stands
  flat-footed near first watching the action.`,
          text: "What should the first baseman generally be doing when not directly involved in a play?",
          options: [
            "Standing still near first base",
            "Backing up bases to prevent overthrows from becoming extra bases, based on his pre-pitch assignment",
            "Walking toward the dugout",
            "Arguing with the umpire",
          ],
          correctIndex: 1,
          explanation: "When not the cutoff man or covering a base, the first baseman backs up bases to stop overthrows from costing extra bases — for instance, backing up a throw or a rundown. Like every fielder, he should know his assignment before each pitch: cutoff, cover, or backup. A first baseman is never truly idle when the ball is in play; there's almost always a backup or coverage responsibility somewhere.",
        },
      ],
    },
  },

  // ─── baseball-9-09: Situational IQ ────────────────────────────────────────────
  {
    epochId: "baseball-9",
    wonder: {
      name: "Oriole Park at Camden Yards",
      location: "Baltimore, Maryland",
      era: "Modern",
      emoji: "🧠",
    },
    id: "baseball-9-09",
    order: 9,
    title: "First Base Situational IQ",
    subtitle: "Positioning, tag vs. bag, and knowing the play",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-9-badge-09", name: "Heads-Up", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "The best first basemen think a pitch ahead — where to stand, what the play is, and when to take the sure out.",
      year: 2000,
      overview: [
        "A complete first baseman plays the game in their head before every pitch, starting with positioning:\n- Late in a close game with the tying/go-ahead run, guard the line to prevent a double down the right-field line.\n- With a runner on first, hold the runner.\n- With a slow hitter or a likely pull, adjust depth and angle.\nStanding in the right spot before the pitch turns hard plays into routine ones.",
        "Decision-making on the play is the next layer — instant reads on every ground ball:\n- Force out (just touch the bag) or tag play (the runner isn't forced)?\n- Where's the lead runner, and is the double play on?\n- Take the sure out, or try for the lead runner?\n- With the infield in, charge and maybe throw home.\nThese reads happen in a fraction of a second — only possible if the thinking was done before the pitch.",
        "Communication ties it together. The first baseman talks with the second baseman about who covers on steals and bunts, reminds the pitcher to cover first on balls to the right side, and confirms the number of outs. Knowing the situation — score, inning, outs, runners, count, and the hitter's tendencies — and translating it into positioning and a pre-made plan is what separates a heads-up first baseman from a reactive one. The position is mental as much as physical.",
      ],
      technical: {
        title: "Pre-Pitch Thinking at First Base",
        body: [
          "Positioning: guard the line late in close games to prevent extra-base hits down the right-field line; hold runners when they're on first; adjust depth and angle for the hitter and situation. With the infield in (to cut down a run at the plate), play shallow and be ready to charge and throw home. Positioning is a decision made fresh every pitch based on the situation.",
          "Decisions and communication: know before the pitch whether a batted ball is a force or a tag play, where the lead runner is, and whether the double play is on. Decide in advance whether to take the sure out or attempt the lead runner. Communicate with the second baseman about coverage on steals and bunts, and remind the pitcher to cover first on balls hit to the right side. The thinking is done before the pitch so the reaction is instant.",
        ],
        codeExample: {
          label: "First Base Situational Checklist",
          code: `  EVERY PITCH, KNOW:
  ✓ Score, inning, outs, count
  ✓ Runners — where, and how fast?
  ✓ FORCE play or TAG play if it's hit to me?
  ✓ Is the DOUBLE PLAY on? Sure out vs lead runner?
  ✓ Who covers 1st if I charge/hold? (2B)
  ✓ Pitcher: cover first on balls to the right side

  POSITIONING DECISIONS:
  → Close game, late, tying/go-ahead run on deck
    → GUARD THE LINE (stop the double)
  → Runner on first → HOLD him on
  → Infield IN (cut the run at home) → play shallow,
    ready to charge and throw HOME
  → Adjust depth/angle for the hitter

  Think a pitch AHEAD → react in an instant.`,
        },
      },
      incident: {
        title: "The Thinking First Baseman",
        when: "2000s — the analytics-and-positioning era",
        where: "Oriole Park at Camden Yards and ballparks across the game",
        impact: "As positioning data and situational analysis advanced, the mental side of first base — knowing the play, guarding the line at the right moment, and translating the situation into pre-made decisions — was recognized as a defining trait of the best defensive first basemen.",
        body: [
          "The best defensive first basemen have always been thinkers. A first baseman like Freddie Freeman is valued not only for his glove but for his anticipation and baseball IQ — reading the situation every pitch and seeming to know where the play is before it happens. Guarding the line at the right moment, knowing instantly whether a ground ball was a force or a tag, and deciding in advance whether to chase the lead runner are mental skills that turn good fielders into great ones.",
          "Modern positioning data has formalized some of this — telling fielders where to stand based on the hitter — but the in-the-moment reads still belong to the player. A first baseman who knows the score, outs, runners, and the hitter's tendencies, and who has already decided what to do if the ball comes to them, plays the game a step faster than everyone else. Situational IQ is the quiet skill that makes the physical skills count.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Situation", sub: "score, outs, runners, hitter", type: "system" },
          { label: "Set Positioning", sub: "guard line / hold / infield in", type: "attacker" },
          { label: "Pre-Make the Decision", sub: "force or tag, sure out or lead", type: "victim" },
          { label: "React Instantly", sub: "a step ahead of the play", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "Anticipation and positioning recognized as a defining first-base skill" },
        { year: 2000, event: "Situational positioning increasingly emphasized in coaching", highlight: true },
        { year: 2010, event: "Defensive shift and positioning data become widespread" },
        { year: 2015, event: "Statcast informs first-base depth and line-guarding decisions" },
        { year: 2023, event: "Shift restrictions return more positioning judgment to the fielder" },
      ],
      keyTakeaways: [
        "Positioning is a fresh decision every pitch — guard the line late in close games, hold runners, adjust for the hitter and situation",
        "Know before the pitch whether a batted ball is a force or a tag play and whether the double play is on",
        "Decide in advance whether to take the sure out or attempt the lead runner",
        "Communicate coverage with the second baseman and remind the pitcher to cover first on balls to the right side",
      ],
      references: [
        { title: "USA Baseball: Defensive IQ and Positioning", url: "https://www.usabaseball.com" },
        { title: "Little League: Situational Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Positioning and Strategy", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-9-09-q1",
          type: "Positioning",
          challenge: `  Bottom of the ninth, defense leading by one run.
  A double down the right-field line would put the
  tying run in scoring position.`,
          text: "How should the first baseman position himself in this late, close situation?",
          options: [
            "Play far off the line to cover more of the 3-hole",
            "Guard the line — play close to the foul line to prevent a double down the right-field line",
            "Stand directly on first base",
            "Play in the outfield grass",
          ],
          correctIndex: 1,
          explanation: "Late in a close game, when an extra-base hit down the line would be especially damaging, the first baseman guards the line — positioning close to the right-field foul line to take away the double. This concedes a bit more of the 3-hole (a single through there is less costly than a double down the line). Positioning is a situational decision made fresh each pitch based on the score and the threat.",
        },
        {
          id: "baseball-9-09-q2",
          type: "Force vs Tag",
          challenge: `  Runner on second base only. A ground ball is hit
  to the first baseman, who fields it near the bag.`,
          text: "With a runner on second only, is the play at first base a force or a tag?",
          options: [
            "It's a tag play — the first baseman must tag the batter-runner",
            "It's a force play — the batter-runner is forced to first, so the first baseman just touches the bag with the ball",
            "There is no play available",
            "The first baseman must throw to second",
          ],
          correctIndex: 1,
          explanation: "The batter-runner is always forced to first base (they must run there once they hit the ball), so retiring them at first is a force out — the first baseman simply touches the bag while holding the ball, no tag needed. The runner on second is not forced to advance (first base is open), so that runner couldn't be forced out. Knowing instantly whether a play is a force or a tag is basic situational IQ.",
        },
        {
          id: "baseball-9-09-q3",
          type: "Infield In",
          challenge: `  Runner on third, one out, tie game. The defense
  wants to prevent the runner from scoring on a
  ground ball, so the infield plays in.`,
          text: "How does playing the infield 'in' change the first baseman's responsibility?",
          options: [
            "It doesn't change anything",
            "He plays shallow and must be ready to charge a ground ball and throw home to cut down the run at the plate",
            "He moves to the outfield",
            "He stops fielding ground balls entirely",
          ],
          correctIndex: 1,
          explanation: "With the infield in to cut down a run at the plate, the first baseman plays shallow and must be ready to field a ground ball and throw home to retire the runner trying to score. This trades range (more balls get through a drawn-in infield) for the ability to make a play at the plate. The first baseman has to know this assignment before the pitch and be ready to charge and throw home instantly.",
        },
        {
          id: "baseball-9-09-q4",
          type: "Communication",
          challenge: `  A ground ball is hit hard into the 3-hole, pulling
  the first baseman well away from the bag. He
  fields it but there's no one at first base, and
  the batter reaches safely.`,
          text: "What pre-pitch communication would have prevented this?",
          options: [
            "Nothing could have prevented it",
            "Reminding the pitcher to cover first base on balls hit to the right side, so someone is at the bag when the first baseman is pulled into the hole",
            "Telling the outfielders to move in",
            "Asking the umpire for time",
          ],
          correctIndex: 1,
          explanation: "On hard-hit balls to the right side, the first baseman can be pulled far from the bag and won't be able to get back in time. The pitcher must cover first base on these plays to take the throw — which is why the first baseman reminds the pitcher of this responsibility, and why pitchers drill covering first. Pre-pitch communication about coverage prevents exactly this kind of play where a fielded ball still results in a runner reaching.",
        },
      ],
    },
  },

  // ─── baseball-9-10: The Greats and Mastery ────────────────────────────────────
  {
    epochId: "baseball-9",
    wonder: {
      name: "Cooperstown",
      location: "Cooperstown, New York",
      era: "Modern",
      emoji: "🏆",
    },
    id: "baseball-9-10",
    order: 10,
    title: "The Greats and the Mastery Mindset",
    subtitle: "What the best first basemen teach about the craft",
    category: "sports",
    xp: 100,
    badge: { id: "baseball-9-badge-10", name: "Cornerstone", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "Master first base and you become the cornerstone — the steady glove the whole infield is built around.",
      year: 2018,
      overview: [
        "The greatest defensive first basemen share a set of traits that any young player can pursue:\n- Sure, soft hands that pick anything in the dirt.\n- Flexible, athletic footwork around the bag.\n- The range and arm to field the 3-hole and start double plays.\n- The aggression to charge bunts and attack the lead runner.\n- The situational intelligence to know the play before it happens.\nFreddie Freeman embodies much of it, but the qualities — not the highlight reel — are what to study.",
        "Mastering first base is about reliability above flash. The position's value comes from doing the routine perfectly and the difficult often: catching every catchable throw, scooping the tough ones, finding the bag by feel, stretching to steal a step, and never giving away a base through a mental lapse. A first baseman who handles everything cleanly lets the rest of the infield play freely and aggressively. That dependability is the cornerstone of a good defense.",
        "The mastery mindset is to treat first base as a craft worth perfecting, not a place to rest. That means thousands of repetitions on picks and footwork, studying hitters and situations, communicating constantly, and bringing the same focus to a routine 3-unassisted putout as to a diving stop. The complete first baseman is flexible, agile, sure-handed, aggressive, and heads-up — the anchor every great infield needs. Build those qualities, and you become the player your teammates trust on every throw.",
      ],
      technical: {
        title: "The Complete First Baseman — A Self-Assessment",
        body: [
          "Skills to master: receiving and scooping (soft hands on every throw, including the dirt), footwork at the bag (find it by feel, set up, stretch), holding runners and the pickoff tag, fielding the 3-hole and starting the 3-6-3 and 3-6-1, charging bunts and attacking the lead runner, serving as the cutoff man on right-side outfield hits, and backing up bases. Each is built through deliberate repetition.",
          "Mindset to build: reliability over flash, anticipation over reaction, and constant communication. Know the situation every pitch, pre-make your decisions, and bring full focus to routine plays. Treat the position as a craft — study hitters, rehearse pickoffs and double plays with teammates, and take thousands of short hops in practice. The cornerstone first baseman makes the whole defense better by being the glove everyone can trust.",
        ],
        codeExample: {
          label: "The Complete First Baseman — Checklist",
          code: `  GLOVE / RECEIVING:
  ✓ Pick short hops with soft, giving hands
  ✓ Find the bag by feel; stretch to the throw
  ✓ Catch FIRST, then tag — always secure the ball

  RANGE / ARM:
  ✓ Field the 3-hole; start 3-6-3 and 3-6-1
  ✓ Accurate throw to second; quick feet back

  AGGRESSION:
  ✓ Charge bunts; attack the lead runner when it's
    there — take the sure out when it isn't

  MIND:
  ✓ Cutoff man on right-side hits; back up bases
  ✓ Know the play BEFORE the pitch
  ✓ Communicate coverage; remind the pitcher
  ✓ Reliability over flash — be the trusted glove

  Build these → you are the CORNERSTONE.`,
        },
      },
      incident: {
        title: "The Cornerstone of a Championship Infield",
        when: "2018 — the modern defensive era",
        where: "National Baseball Hall of Fame, Cooperstown, New York",
        impact: "Across eras, championship infields have been anchored by first basemen whose dependability let everyone else play freely — proof that the position's quiet reliability is a foundation of winning defense, not an afterthought.",
        body: [
          "Great defensive teams are built on trust, and the first baseman is the player every infielder trusts most — because every throw they make ends in his glove. A first baseman who catches everything, scoops the tough throws, and never gives away a base lets the shortstop, second baseman, and third baseman throw with full aggression, knowing imperfect throws will still be outs. That confidence ripples through the whole defense and turns close games.",
          "The lesson of the greats is that first base rewards mastery and a relentless, professional approach. Freddie Freeman and the other defensive standouts treat the position as a craft, bringing soft hands, durability, and situational intelligence to a spot many dismissed as a resting place for a bat. For any young player, embracing that mindset — becoming the reliable cornerstone the infield is built around — is the path to making first base a genuine strength rather than a place to hide.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Master the Skills", sub: "scoop, stretch, range, charge", type: "system" },
          { label: "Build the Mindset", sub: "reliability, anticipation, talk", type: "attacker" },
          { label: "Earn the Infield's Trust", sub: "every throw becomes an out", type: "victim" },
          { label: "Become the Cornerstone", sub: "the anchor of the defense", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "First-base defense recognized as a genuine, run-saving craft" },
        { year: 1994, event: "Gold Glove first-base defense established as a benchmark for the position" },
        { year: 2003, event: "Advanced fielding metrics begin crediting first-base defense" },
        { year: 2018, event: "Athleticism, flexibility, and IQ recognized as defining first-base traits", highlight: true },
        { year: 2023, event: "Shift rules return more fielding judgment to first basemen" },
      ],
      keyTakeaways: [
        "The best first basemen combine soft hands, flexible footwork, range and arm, bunt aggression, and situational IQ",
        "First base rewards reliability over flash — catch everything, scoop the tough ones, and never give away a base",
        "The mastery mindset treats the position as a craft: repetition, study, communication, and full focus on routine plays",
        "A trusted, complete first baseman lets the whole infield play freely — the cornerstone of a winning defense",
      ],
      references: [
        { title: "Baseball Hall of Fame — First Basemen", url: "https://baseballhall.org" },
        { title: "USA Baseball: Complete Infield Development", url: "https://www.usabaseball.com" },
        { title: "MLB: The Value of First-Base Defense", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-9-10-q1",
          type: "Traits",
          challenge: `  A young player wants to become a complete defensive
  first baseman and asks which qualities to develop.`,
          text: "Which combination of traits defines the best defensive first basemen?",
          options: [
            "Only size and power",
            "Soft hands for scooping, flexible footwork, range and arm to start double plays, bunt aggression, and situational intelligence",
            "Only running speed",
            "Only a strong throwing arm",
          ],
          correctIndex: 1,
          explanation: "The best defensive first basemen combine sure, soft hands for picking throws; flexible, athletic footwork around the bag; the range and arm to field the 3-hole and start double plays; the aggression to charge bunts and attack lead runners; and the situational IQ to know the play before it happens. It's a complete, athletic skill set — not just size or a single tool. Freddie Freeman embodies these.",
        },
        {
          id: "baseball-9-10-q2",
          type: "Reliability",
          challenge: `  Two first basemen: one makes spectacular diving
  plays but occasionally drops routine throws; the
  other rarely dives but cleanly handles every
  catchable throw and never gives away a base.`,
          text: "Which first baseman is more valuable, and why?",
          options: [
            "The flashy diver — highlight plays win games",
            "The reliable one — first base's value comes from handling every catchable throw and never giving away a base, which lets the whole infield play freely",
            "They're exactly equal",
            "Neither has any value on defense",
          ],
          correctIndex: 1,
          explanation: "First base rewards reliability over flash. A first baseman who cleanly handles every catchable throw and never gives away a base lets the rest of the infield throw aggressively, trusting their throws will become outs. Dropping routine throws — even amid occasional spectacular plays — undermines that trust and costs outs and runs. Dependability is the cornerstone of the position's value.",
        },
        {
          id: "baseball-9-10-q3",
          type: "Mindset",
          challenge: `  A talented first baseman treats the position as a
  place to rest between at-bats, putting in little
  practice on picks, footwork, or situations.`,
          text: "What does the mastery mindset say about this approach?",
          options: [
            "It's fine — first base requires no real practice",
            "First base is a craft to be perfected through repetition, study, and communication — treating it as a resting place wastes the position's run-saving potential",
            "Only hitting practice matters for a first baseman",
            "Practice makes first basemen worse",
          ],
          correctIndex: 1,
          explanation: "The mastery mindset treats first base as a craft worth perfecting, not a place to rest. That means thousands of repetitions on picks and footwork, studying hitters and situations, communicating constantly, and focusing fully on routine plays. A talented player who neglects this wastes the real run-saving potential of the position. The greats earned their value through relentless, professional preparation.",
        },
        {
          id: "baseball-9-10-q4",
          type: "Impact",
          challenge: `  A shortstop says he can throw aggressively on
  tough plays, even rushed or off-line throws,
  because of who's playing first base behind him.`,
          text: "How does a trusted, complete first baseman affect the rest of the infield?",
          options: [
            "It makes no difference to the other infielders",
            "Knowing the first baseman will catch and scoop nearly anything lets the other infielders throw with full aggression and confidence, turning more tough plays into outs",
            "It makes the other infielders lazy",
            "It only helps the first baseman's own statistics",
          ],
          correctIndex: 1,
          explanation: "A trusted, complete first baseman transforms the whole infield. When the shortstop, second baseman, and third baseman know that nearly any throw — even a rushed or low one — will be caught or scooped, they can attack difficult plays with full aggression and confidence, converting more tough chances into outs. That ripple effect is why a dependable first baseman is the cornerstone the entire defense is built around.",
        },
      ],
    },
  },
];
