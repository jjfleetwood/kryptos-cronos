import type { StageConfig, EpochConfig } from "./types";

export const baseball8Epoch: EpochConfig = {
  id: "baseball-8",
  name: "Catcher",
  subtitle: "The Field General Behind the Plate",
  description:
    "The catcher is the only player who faces the entire field — and the only one involved in every single pitch. This complete position course builds the catcher from the ground up: the stances, receiving and framing, blocking balls in the dirt, the pop-time footwork to throw out runners, fielding bunts and pop-ups, plays at the plate, the backups and coverages for every situation, calling a game, and building the durable lower body the job demands. From Little League to Yadier Molina's nine Gold Gloves, you will learn to run the defense, protect the plate, and become the leader every pitching staff trusts.",
  emoji: "🧤",
  color: "red",
  unlocked: true,
};

export const baseball8Stages: StageConfig[] = [
  // ─── baseball-8-01: The Field General ─────────────────────────────────────────
  {
    epochId: "baseball-8",
    wonder: {
      name: "Busch Stadium",
      location: "St. Louis, Missouri",
      era: "Modern",
      emoji: "🧤",
    },
    id: "baseball-8-01",
    order: 1,
    title: "Behind the Plate — The Field General",
    subtitle: "Why the catcher runs the entire defense",
    category: "sports",
    xp: 85,
    badge: { id: "baseball-8-badge-01", name: "Field General", emoji: "🎖️" },
    challengeType: "quiz",
    info: {
      tagline: "The catcher is the only player who sees the whole field — and the only one in on every pitch. That view is a responsibility.",
      year: 2004,
      overview: [
        "The catcher is the quarterback of the defense. From a crouch behind home plate, the catcher is the one player facing all eight teammates and the entire field of play. That perspective means the catcher is responsible for far more than receiving pitches: calling pitches and locations, directing where fielders position, telling everyone how many outs there are, reminding teammates of the situation, and quarterbacking cutoffs and relays on balls hit to the outfield. No other position touches the game on every single pitch.",
        "Catcher is the most physically demanding and mentally engaged position on the diamond. A catcher crouches and rises 120-plus times per game, absorbs foul tips and blocked balls, manages the pitcher's emotions, and never gets a mental break — because there is no such thing as a pitch a catcher is not part of. Coaches often say the best athlete with the highest baseball IQ and the toughest temperament should catch, because the catcher's decisions and leadership ripple through the whole defense.",
        "Because catchers see everything and control so much, they tend to become coaches and managers at a higher rate than any other position. Learning to catch is learning to think the game from the center of it — anticipating the next play before the pitch is thrown, knowing where every runner is, and being ready to direct teammates the instant the ball is put in play. This epoch builds that complete catcher: the body, the technique, and the mind of the field general.",
      ],
      technical: {
        title: "The Catcher's Responsibilities — Every Pitch",
        body: [
          "Before the pitch: the catcher gives the sign (pitch type and location), sets the target, knows the count and number of outs, and knows what every runner will do on a ball in play. The catcher also positions the defense — waving an outfielder over, reminding the corners about a possible bunt, confirming who covers second on a steal.",
          "After the ball is hit: the catcher's job changes instantly. On a ball to the outfield, the catcher lines up the cutoff man and prepares to defend the plate or direct the throw. On a ball in the dirt or a wild pitch with runners on, the catcher recovers the ball and the pitcher covers home. With nobody on base and a ground ball to the right side, the catcher sprints down the first-base line to back up the throw. The catcher is never a spectator.",
        ],
        codeExample: {
          label: "Catcher Pre-Pitch Checklist",
          code: `  EVERY PITCH, ASK YOURSELF:
  ✓ Score, inning, count, number of OUTS
  ✓ Who is on base — and how fast are they?
  ✓ What pitch + location am I calling, and why?
  ✓ If it is hit on the ground, where is the play?
  ✓ If it is hit in the air, who has priority?
  ✓ Is a bunt or steal likely? Who covers?
  ✓ If it gets by me, who backs up — where do I go?

  THEN: give the sign, set the target, breathe.
  You are the only player who can see it all —
  so you are the one who must say it out loud.`,
        },
      },
      incident: {
        title: "Yadier Molina — The Standard for a Catching Career",
        when: "2004–2023 — St. Louis Cardinals",
        where: "Busch Stadium, St. Louis, Missouri",
        impact: "Across 19 seasons, Yadier Molina won nine Gold Gloves, made ten All-Star teams, and won two World Series — widely regarded as one of the greatest defensive catchers in history and the model of a catcher who controls a game without swinging the bat.",
        body: [
          "Yadier Molina spent his entire 19-year career with the St. Louis Cardinals and redefined what a defensive catcher could mean to a franchise. Runners simply stopped trying to steal on him; his pop time and accuracy were so feared that opponents took the running game out of their plan entirely. But his greatest value was invisible on a stat sheet — the way he managed pitchers, called games, and controlled the tempo and emotion of a pitching staff over a full season.",
          "Molina is the textbook example of the field general: he positioned defenders, blocked everything in the dirt, and earned the absolute trust of every pitcher he caught. Pitchers spoke of 'throwing to Yadi' as a luxury — they could focus on executing because he handled the thinking. His career is proof that a catcher can be the most important player on a championship defense without ever being the loudest bat in the lineup.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Catcher Reads Situation", sub: "score, outs, runners, speed", type: "system" },
          { label: "Calls Pitch + Positions Defense", sub: "sign, target, alignment", type: "attacker" },
          { label: "Ball Is Put in Play", sub: "instant role change", type: "victim" },
          { label: "Directs the Play", sub: "cutoff, plate, or backup", type: "result" },
        ],
      },
      timeline: [
        { year: 1845, event: "Knickerbocker Rules formalize the catcher's spot behind the batter" },
        { year: 1900, event: "Catchers move directly behind the plate full-time as the position professionalizes" },
        { year: 1968, event: "Johnny Bench debuts — revolutionizes one-handed catching and athletic defense" },
        { year: 2004, event: "Yadier Molina debuts with St. Louis — begins a defining defensive career", highlight: true },
        { year: 2015, event: "Statcast begins publicly measuring pop time and framing — quantifying catcher defense" },
        { year: 2023, event: "Molina retires with 9 Gold Gloves; one-knee stances are now standard across the game" },
      ],
      keyTakeaways: [
        "The catcher is the only player who faces the whole field and is involved in every pitch — that view is a leadership responsibility",
        "Before each pitch, know the score, outs, runners, and where the play will be if the ball is hit",
        "After the ball is in play the catcher's role flips instantly — cutoff director, plate defender, or backup",
        "Great catchers control games through preparation and leadership, not just their bat",
      ],
      references: [
        { title: "Little League: Catching Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Catcher Development", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame — Catchers", url: "https://baseballhall.org" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-8-01-q1",
          type: "Role",
          challenge: `  A new player asks why the catcher, and not the
  shortstop or the pitcher, is called the
  "field general" of the defense.`,
          text: "What makes the catcher uniquely positioned to lead the defense?",
          options: [
            "The catcher wears the most equipment, so they are the most protected and can take charge",
            "The catcher is the only player facing the entire field and is involved in every single pitch",
            "The catcher is always the team's best hitter, which earns them respect",
            "The catcher is closest to the umpire, so they hear all the calls first",
          ],
          correctIndex: 1,
          explanation: "The catcher faces all eight teammates and the whole field from behind the plate, and is part of every pitch — calling it, receiving it, and reacting to whatever happens. That total view is why the catcher directs positioning, reminds teammates of the situation, and quarterbacks cutoffs and relays. No other position has both the perspective and the involvement to lead the defense pitch by pitch.",
        },
        {
          id: "baseball-8-01-q2",
          type: "Pre-Pitch",
          challenge: `  Runner on second, one out, tie game, late innings.
  The catcher is about to give the sign.`,
          text: "What should the catcher have already processed before giving the sign?",
          options: [
            "Only the pitch type — location can be decided after the pitcher starts his motion",
            "The score, outs, the runner's speed, where the play goes if it is hit, and backup responsibilities",
            "Nothing specific — the catcher just calls the pitcher's best pitch every time",
            "Only whether to throw a fastball, since the runner cannot be thrown out from second",
          ],
          correctIndex: 1,
          explanation: "A good catcher runs the full pre-pitch checklist every pitch: score, inning, count, outs, who is on base and how fast, what pitch and location and why, where the ball goes if it is hit on the ground or in the air, and what to do if the pitch gets by. With a runner on second in a tie game late, that thinking determines pitch selection, defensive positioning, and the catcher's own backup responsibilities.",
        },
        {
          id: "baseball-8-01-q3",
          type: "Reaction",
          challenge: `  Nobody on base. The batter hits a ground ball
  to the second baseman, who throws to first.
  Where should the catcher be?`,
          text: "With the bases empty and a ground ball to the right side, what is the catcher's job?",
          options: [
            "Stay at home plate in case the batter-runner tries for an inside-the-park play",
            "Sprint down the first-base line to back up the throw to first base",
            "Run to the mound to talk to the pitcher",
            "Cover second base in case of an overthrow",
          ],
          correctIndex: 1,
          explanation: "With nobody on base and a ground ball to the right side, the catcher hustles down the first-base line to back up the throw. If the throw gets away from the first baseman, the backing-up catcher prevents the batter-runner from advancing to second. This is a classic example of how the catcher is never a spectator — the instant the ball is in play, the catcher has a job somewhere on the field.",
        },
        {
          id: "baseball-8-01-q4",
          type: "Leadership",
          challenge: `  Two catchers have nearly identical arm strength
  and receiving skills. One hits .230, the other
  hits .240. Yet coaches say the .230 catcher is
  far more valuable.`,
          text: "Why might a weaker-hitting catcher be considered more valuable?",
          options: [
            "Batting average is the only thing that matters, so the coaches are wrong",
            "Game-calling, pitcher management, blocking, positioning, and leadership create value that does not show up in batting average",
            "The .230 catcher must be faster on the bases",
            "Defense at catcher is unimportant, so the difference must be luck",
          ],
          correctIndex: 1,
          explanation: "A catcher's most important contributions — calling a smart game, managing and earning the trust of the pitching staff, blocking balls in the dirt, framing strikes, positioning the defense, and leading — barely register in offensive stats. Yadier Molina is the definitive example: his bat was solid but unspectacular, yet he is considered one of the most valuable players of his era because of everything he controlled on defense.",
        },
      ],
    },
  },

  // ─── baseball-8-02: The Catcher's Stances ─────────────────────────────────────
  {
    epochId: "baseball-8",
    wonder: {
      name: "Great American Ball Park",
      location: "Cincinnati, Ohio",
      era: "Modern",
      emoji: "🦵",
    },
    id: "baseball-8-02",
    order: 2,
    title: "The Catcher's Stances",
    subtitle: "No-runners, runners-on, and the one-knee setup",
    category: "sports",
    xp: 85,
    badge: { id: "baseball-8-badge-02", name: "Solid Base", emoji: "🦿" },
    challengeType: "quiz",
    info: {
      tagline: "Everything a catcher does starts from the stance — comfort to receive, but ready to explode.",
      year: 2019,
      overview: [
        "A catcher uses different stances for different situations. The primary stance (relaxed, used with no runners on and fewer than two strikes) prioritizes giving a low, comfortable target and a quiet body so the pitcher can find the glove. The feet are roughly shoulder-width, weight on the inside balls of the feet, glove relaxed out front, throwing hand protected behind the glove or behind the back to avoid foul-tip injuries.",
        "The secondary stance (used with runners on base or with two strikes) raises the catcher's center of gravity so they can move explosively — to throw, block, or field. The hips lift slightly, the throwing-side foot may be staggered back a few inches, and the weight shifts so the catcher can come up and throw or drop and block in an instant. The trade-off is that this stance is more tiring and gives a slightly higher target, so it is reserved for when athleticism matters more than pure comfort.",
        "The modern one-knee stance has transformed catching since around 2019. By dropping the glove-side or throwing-side knee to the ground with no runners on, catchers create a lower, more stable platform that improves framing of low pitches and reduces strain on the legs over a long season. The trade-off is reduced mobility for blocking and throwing, so most catchers use one-knee setups with the bases empty and revert to a more athletic stance with runners on. Knowing which stance fits the situation is a core catching skill.",
      ],
      technical: {
        title: "Choosing the Right Stance for the Situation",
        body: [
          "Bases empty, fewer than two strikes: use a relaxed primary stance (traditional two-feet or one-knee) for the best target and framing. The priority is helping the pitcher hit the zone and stealing strikes at the bottom of the zone.",
          "Runners on base or two strikes: use an athletic secondary stance with weight ready to move. Now the priority is being able to block a ball in the dirt or pop up and throw — a passed ball or wild pitch can cost a base or a run, and a strikeout in the dirt must be blocked or thrown to first. Comfort takes a back seat to readiness.",
        ],
        codeExample: {
          label: "Stance Selection Guide",
          code: `  SITUATION              → STANCE
  ─────────────────────────────────────────
  Bases empty, 0-1 strk  → PRIMARY / one-knee
    goal: best target, frame low strikes
  Two strikes            → SECONDARY (athletic)
    goal: block the strikeout in the dirt
  Runner(s) on base      → SECONDARY (athletic)
    goal: ready to THROW or BLOCK instantly

  SECONDARY STANCE KEYS:
  ✓ Hips up, center of gravity raised
  ✓ Throwing-side foot staggered slightly back
  ✓ Weight on inside balls of feet
  ✓ Glove out front, throwing hand protected
  ✓ "Ready to explode" — not resting`,
        },
      },
      incident: {
        title: "The One-Knee Revolution",
        when: "2018–2021 — across Major League Baseball",
        where: "Great American Ball Park and ballparks leaguewide",
        impact: "In just a few seasons, the one-knee stance went from unconventional to standard. Teams adopted it to improve framing of low strikes and to protect catchers' knees and backs over 162-game seasons, fundamentally changing how the position is taught.",
        body: [
          "For over a century, catchers squatted on two feet in a balanced crouch. Beginning around 2018–2019, a wave of catchers led by players such as Tucker Barnhart and later many others dropped a knee to the dirt with the bases empty. Data from pitch-tracking showed the lower, more stable setup helped catchers receive and present low pitches as strikes — a meaningful number of extra called strikes over a season.",
          "The change also addressed a chronic problem: the toll catching takes on the body. A one-knee setup reduces the repetitive deep-squat load on knees and lower backs, helping catchers stay healthier across a long season. The trade-off — less mobility to block and throw — is why catchers still switch to an athletic two-foot stance with runners on base. The revolution shows that even the oldest fundamentals evolve when new information arrives.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Situation", sub: "runners? two strikes?", type: "system" },
          { label: "Choose the Stance", sub: "primary vs secondary", type: "attacker" },
          { label: "Set the Target", sub: "low, quiet, balanced", type: "victim" },
          { label: "Ready to Receive or React", sub: "frame, block, or throw", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Catchers settle directly behind the plate in a balanced two-foot crouch" },
        { year: 1968, event: "Johnny Bench's athletic stance and one-handed style modernize receiving" },
        { year: 2008, event: "Pitch-tracking (PITCHf/x) begins measuring the strike zone precisely" },
        { year: 2019, event: "One-knee stances spread rapidly as framing data validates them", highlight: true },
        { year: 2023, event: "One-knee setups with bases empty become the taught standard at many levels" },
      ],
      keyTakeaways: [
        "Primary stance (bases empty, under two strikes): relaxed, comfortable, best target and framing",
        "Secondary stance (runners on or two strikes): athletic, hips up, ready to block or throw instantly",
        "The one-knee stance improves low-pitch framing and protects the legs, but reduces mobility — use it with bases empty",
        "Protect the throwing hand behind the glove or behind the back to avoid foul-tip injuries",
      ],
      references: [
        { title: "USA Baseball: Catching Mechanics", url: "https://www.usabaseball.com" },
        { title: "Little League: Catching Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: How Framing Changed Catching", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-8-02-q1",
          type: "Stance Choice",
          challenge: `  Runner on first base, one out, count 1-1.
  The catcher is setting up to receive the next pitch.`,
          text: "Which stance should the catcher use with a runner on first?",
          options: [
            "The relaxed primary stance — comfort gives the best target",
            "The athletic secondary stance — ready to pop up and throw or drop and block",
            "A one-knee stance on both knees for maximum stability",
            "It does not matter; stance has no effect with runners on",
          ],
          correctIndex: 1,
          explanation: "With a runner on base, the catcher must be ready to throw (if the runner steals) or block (if the pitch is in the dirt). That calls for the athletic secondary stance — hips raised, weight ready to move explosively. The relaxed primary stance and bases-empty one-knee setups prioritize comfort and framing over mobility, which is the wrong trade-off when a runner can advance.",
        },
        {
          id: "baseball-8-02-q2",
          type: "Two Strikes",
          challenge: `  Bases empty, but the count is now 0-2.
  The pitcher likes to throw a curveball that
  can bounce in the dirt for the strikeout.`,
          text: "Why should the catcher get more athletic with two strikes, even with the bases empty?",
          options: [
            "To intimidate the batter with body language",
            "Because a swinging third strike in the dirt must be blocked or thrown to first — the at-bat is not over until the ball is secured",
            "There is no reason; with bases empty the stance never changes",
            "To give the pitcher a higher target on purpose",
          ],
          correctIndex: 1,
          explanation: "On a two-strike pitch in the dirt that the batter swings at, the batter is not automatically out — if the catcher does not catch it cleanly (with first base open or two outs), the batter can run to first. The catcher must block the ball or be ready to throw to first to complete the strikeout. That readiness requires the athletic secondary stance, even with the bases empty.",
        },
        {
          id: "baseball-8-02-q3",
          type: "One-Knee",
          challenge: `  A youth catcher wants to drop to one knee on
  every pitch because it feels comfortable —
  including with a runner on second base.`,
          text: "What is the main drawback of using a one-knee stance with a runner on base?",
          options: [
            "It is illegal to catch on one knee with runners on",
            "It reduces mobility, making it harder to block balls in the dirt and to pop up and throw out a stealing runner",
            "It gives the pitcher too low a target",
            "There is no drawback — one knee is always better",
          ],
          correctIndex: 1,
          explanation: "The one-knee stance improves low-pitch framing and saves the legs, which is why catchers use it with the bases empty. But it sacrifices mobility — getting out of one knee to block a ball in the dirt or to throw out a runner is slower and less explosive. With runners on base, that lost quickness can cost a base or a run, so catchers switch to an athletic two-foot stance.",
        },
        {
          id: "baseball-8-02-q4",
          type: "Safety",
          challenge: `  A young catcher rests their bare throwing hand
  on the ground next to the glove, out in front,
  while receiving pitches.`,
          text: "Why is exposing the bare throwing hand in front of the body a problem?",
          options: [
            "It slows the transfer to throw",
            "A foul tip or pitch can strike the exposed hand and cause a serious injury — the throwing hand should be protected behind the glove or behind the back",
            "It is against the rules to put the hand on the ground",
            "It gives away the pitch location to the batter",
          ],
          correctIndex: 1,
          explanation: "An exposed bare hand in front of the body is a common cause of broken fingers from foul tips and pitches. With nobody on base, catchers tuck the throwing hand behind their back; with runners on, they keep it loosely behind the glove, ready to transfer but shielded from foul tips. Protecting the throwing hand is a fundamental safety habit every catcher must build early.",
        },
      ],
    },
  },

  // ─── baseball-8-03: Receiving and Framing ─────────────────────────────────────
  {
    epochId: "baseball-8",
    wonder: {
      name: "Petco Park",
      location: "San Diego, California",
      era: "Modern",
      emoji: "🎯",
    },
    id: "baseball-8-03",
    order: 3,
    title: "Receiving and Framing",
    subtitle: "Stealing strikes with quiet, skilled hands",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-8-badge-03", name: "Strike Stealer", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "A great receiver turns borderline pitches into strikes — quietly, without the umpire ever noticing the work.",
      year: 2015,
      overview: [
        "Receiving is the catcher's most frequent skill — it happens on nearly every pitch — and framing is the art of receiving borderline pitches so they are more likely to be called strikes. Good framing is not 'pulling' a ball into the zone with a big, obvious yank; umpires see through that and may even punish it. Real framing is subtle: catching the pitch with a relaxed glove, letting the ball travel deep, and presenting it as a strike with a quiet, controlled hand.",
        "The fundamentals of receiving: a relaxed, slightly open glove (not stabbing at the ball), catching the outer half of the ball so the glove naturally moves toward the zone, and sticking the pitch — holding it still for a beat where it is caught. Catchers work from the bottom of the zone up: low strikes are the hardest to get called and the most valuable to steal, so elite receivers set up so their glove turns over and sticks at the knees rather than dropping below the zone.",
        "Framing has real, measurable value. Pitch-tracking data shows that the best receivers earn their teams a meaningful number of extra called strikes over a season compared to the worst — strikes that translate into more outs and fewer runs. While framing matters most where human umpires call balls and strikes, the underlying skill of clean, quiet receiving makes every pitcher look better and builds the trust between catcher and pitcher that wins games.",
      ],
      technical: {
        title: "How to Frame Without Getting Caught Pulling",
        body: [
          "Catch the ball deep, not out in front. Reaching out to catch a pitch early pulls the glove away from the zone as the ball carries; letting it travel lets the catcher receive it closer to the strike zone. Use a relaxed, slightly turned glove so the pocket meets the outer half of the ball, and let the natural give of the catch present the pitch toward the middle.",
          "Stick it and hold. After the catch, freeze the glove for a fraction of a second so the umpire sees a clean, controlled strike. Big, jerky movements ('yanking') signal that even the catcher thought it was a ball. Set up early and quietly, keep the body and head still, and never lunge — a moving catcher makes a strike look like a ball.",
        ],
        codeExample: {
          label: "Receiving and Framing Checklist",
          code: `  RECEIVE EVERY PITCH:
  ✓ Set the target early, then go quiet
  ✓ Relaxed, slightly open glove (no stabbing)
  ✓ Let the ball TRAVEL — catch it deep
  ✓ Catch the OUTER half so glove works to zone
  ✓ "Stick" the pitch — hold it still a beat

  FRAME FROM THE BOTTOM UP:
  → Low strike = hardest to get, most valuable
  → Turn the glove over to receive at the knees
  → Never let a low strike pull you DOWN

  DO NOT:
  ✗ Yank the ball toward the middle (obvious)
  ✗ Reach out front and drag the glove away
  ✗ Move the head/body — stillness sells strikes`,
        },
      },
      incident: {
        title: "The Statcast Era Reveals the Value of Framing",
        when: "2015 — Statcast goes leaguewide",
        where: "Petco Park and ballparks across MLB",
        impact: "When public pitch-tracking quantified framing, it revealed that elite receivers were worth one to two extra wins per season through stolen strikes alone — reshaping how teams value, scout, and develop catchers.",
        body: [
          "Before precise pitch-tracking, framing was an invisible skill that scouts sensed but could not measure. When Statcast and earlier systems mapped every pitch against the strike zone, analysts could finally see how often each catcher turned borderline pitches into strikes. The gap between the best and worst receivers was enormous — the best stole dozens of extra strikes over a season, the equivalent of significant run prevention.",
          "The discovery changed the catching market overnight. Players who had been undervalued for their bats were suddenly recognized as defensive weapons. Teams began drafting and developing for receiving skill, and framing became a core part of catching instruction at every level. It is a reminder that some of baseball's most valuable skills are the quiet ones — and that good fundamentals are valuable precisely because they are repeatable.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Set Target Early", sub: "then go still", type: "system" },
          { label: "Let the Ball Travel", sub: "catch it deep", type: "attacker" },
          { label: "Receive the Outer Half", sub: "glove works to the zone", type: "victim" },
          { label: "Stick the Strike", sub: "quiet, controlled hold", type: "result" },
        ],
      },
      timeline: [
        { year: 1968, event: "Johnny Bench pioneers one-handed receiving, freeing the bare hand and improving flexibility" },
        { year: 2008, event: "PITCHf/x begins tracking pitch locations against the strike zone" },
        { year: 2015, event: "Statcast quantifies framing leaguewide — elite receivers shown worth 1–2 wins", highlight: true },
        { year: 2019, event: "One-knee stances spread, largely to improve low-pitch framing" },
        { year: 2023, event: "Automated ball-strike (ABS) systems tested in the minors, reframing framing's future" },
      ],
      keyTakeaways: [
        "Framing is subtle, quiet receiving — not an obvious yank of the ball toward the zone",
        "Let the ball travel and catch it deep so the glove does not drag away from the strike zone",
        "Frame from the bottom up — low strikes are the hardest to get and the most valuable to steal",
        "Stick the pitch and stay still — a quiet body and head make borderline pitches look like strikes",
      ],
      references: [
        { title: "MLB Statcast: Catcher Framing", url: "https://baseballsavant.mlb.com" },
        { title: "USA Baseball: Receiving Mechanics", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Johnny Bench", url: "https://baseballhall.org/hall-of-famers/bench-johnny" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-8-03-q1",
          type: "Technique",
          challenge: `  A catcher catches a borderline low strike, then
  quickly yanks the glove up six inches toward
  the middle of the zone to "show" the umpire
  it was a strike.`,
          text: "Why is this big upward yank counterproductive?",
          options: [
            "It is the correct technique — bigger movements convince the umpire",
            "Umpires read the obvious movement as the catcher admitting it was a ball, and it can cost the call",
            "It is illegal and results in an automatic ball",
            "It only matters on high pitches, not low ones",
          ],
          correctIndex: 1,
          explanation: "Real framing is quiet. A big, jerky yank tells the umpire that even the catcher did not think the pitch was a strike where it was caught. Skilled receivers catch the ball deep, present it with a small controlled turn of the glove, and stick it still — selling the strike through calmness, not exaggeration. Obvious pulling often backfires and can lose borderline calls.",
        },
        {
          id: "baseball-8-03-q2",
          type: "Ball Travel",
          challenge: `  Two catchers receive the same outside pitch.
  Catcher A reaches out front to catch it early.
  Catcher B lets the ball travel and catches it deep.`,
          text: "Why does letting the ball travel help frame the outside pitch?",
          options: [
            "It does not matter where you catch it",
            "Catching it deep keeps the glove closer to the zone, while reaching out front drags the glove away from the strike zone as the ball carries",
            "Reaching out front is always better because it is quicker",
            "Letting it travel makes the pitch faster",
          ],
          correctIndex: 1,
          explanation: "An outside pitch is still moving away from the zone as it reaches the catcher. Reaching out to catch it early means receiving it at its farthest point from the strike zone, and the glove gets dragged outward. Letting the ball travel and catching it deep keeps the reception closer to the zone and lets the catcher present it as a strike with a quiet, controlled glove.",
        },
        {
          id: "baseball-8-03-q3",
          type: "Priority",
          challenge: `  A coach tells a young catcher: "If you are going
  to get great at framing one part of the zone,
  master this part first."`,
          text: "Which part of the strike zone is the most valuable to learn to frame?",
          options: [
            "The high pitch, because it is easy to see",
            "The low strike at the knees, because it is the hardest to get called and the most valuable to steal",
            "The middle of the zone, which is already an automatic strike",
            "Pitches a foot outside, to fool the umpire",
          ],
          correctIndex: 1,
          explanation: "Low strikes at the knees are the hardest for umpires to call and therefore the most valuable to frame well. Elite receivers turn the glove over and stick the pitch at the bottom of the zone rather than letting it pull them downward. Pitches clearly out of the zone cannot and should not be framed as strikes — framing works on genuine borderline pitches, especially low ones.",
        },
        {
          id: "baseball-8-03-q4",
          type: "Value",
          challenge: `  Two catchers have the same batting average and
  arm. Pitch-tracking shows Catcher A steals 15
  more strikes per season than Catcher B.`,
          text: "How much can elite framing be worth over a full season?",
          options: [
            "Nothing measurable — framing is a myth",
            "A meaningful amount — the best receivers can be worth one to two extra wins per season through stolen strikes",
            "Only a single run across an entire season",
            "It only matters in the playoffs",
          ],
          correctIndex: 1,
          explanation: "When Statcast quantified framing, it showed the gap between the best and worst receivers was worth roughly one to two wins per season — dozens of extra called strikes that become outs and prevent runs. That discovery reshaped how teams value catchers, elevating strong receivers who had been overlooked for their bats. Framing is proof that quiet, repeatable fundamentals carry real value.",
        },
      ],
    },
  },

  // ─── baseball-8-04: Blocking Balls in the Dirt ────────────────────────────────
  {
    epochId: "baseball-8",
    wonder: {
      name: "Kauffman Stadium",
      location: "Kansas City, Missouri",
      era: "Modern",
      emoji: "🛡️",
    },
    id: "baseball-8-04",
    order: 4,
    title: "Blocking Balls in the Dirt",
    subtitle: "Keeping the ball in front with body and technique",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-8-badge-04", name: "The Wall", emoji: "🧱" },
    challengeType: "quiz",
    info: {
      tagline: "A blocked ball is a saved base or a saved run — catchers don't catch every pitch, they stop it.",
      year: 1989,
      overview: [
        "When a pitch hits the dirt, the catcher's job is not to catch it but to block it — to keep it in front of the body so runners cannot advance. With runners on base, a ball that gets past the catcher (a passed ball or wild pitch) lets every runner move up ninety feet, and can score a run from third. Blocking is one of the most important and selfless skills a catcher develops, because it is about sacrificing the body to protect the team.",
        "The technique: drop to both knees, get the chin down and tucked so the mask faces the ball, round the shoulders forward, and put the glove between the legs to fill the gap (the 'five-hole'). The goal is to create a soft, forward-angled wall so the ball deadens in front of the body and drops straight down, rather than caroming away. Catchers angle their body so a ball in the dirt to their left or right is blocked back toward home plate, not toward the dugout.",
        "Anticipation is half of blocking. A catcher who knows a breaking ball is coming, or who senses the pitcher is struggling to control a pitch, is already prepared to drop and block. With runners on base and two strikes — when pitchers throw their nastiest, hardest-to-control breaking balls — the catcher must expect the ball in the dirt on every pitch. Great blockers turn potential disasters into routine, quiet outs and held runners.",
      ],
      technical: {
        title: "Blocking Mechanics — Building the Wall",
        body: [
          "Drop and round: drop to both knees, tuck the chin to the chest so the throat is protected and the mask angles down at the ball, and round the shoulders forward to absorb and deaden the ball. The glove goes to the ground between the knees to cover the five-hole. The body should form a forward-leaning curve so the ball bounces down and stays close.",
          "Angle to the ball: on a pitch in the dirt to the side, the catcher does not just drop straight down — they shift and angle the chest so the ball deflects back toward the plate and the middle of the field. Keeping the ball in front and nearby (not letting it carom toward the backstop or dugout) is what stops runners from advancing. After the block, find the ball quickly, get to it, and check the runners.",
        ],
        codeExample: {
          label: "Blocking Technique Step-by-Step",
          code: `  WHEN THE PITCH IS IN THE DIRT:
  1. DROP   → both knees to the ground, fast
  2. CHIN   → tuck to chest (protect throat,
              angle mask down at the ball)
  3. GLOVE  → to the ground between the knees
              (cover the "five-hole" gap)
  4. ROUND  → shoulders forward, soft chest
              → ball deadens and drops DOWN
  5. ANGLE  → on side balls, turn the chest so
              the ball deflects back toward HOME
  6. RECOVER→ find the ball, get to it,
              CHECK THE RUNNERS

  MINDSET: with 2 strikes + runners on,
  expect the ball in the dirt EVERY pitch.`,
        },
      },
      incident: {
        title: "The Catcher as Last Line of Defense — 1980s Kansas City",
        when: "1980s — Kansas City Royals",
        where: "Kauffman Stadium (Royals Stadium), Kansas City, Missouri",
        impact: "The Royals' emphasis on fundamentals, including relentless blocking drills, helped define an era where catcher defense was understood as run prevention — every blocked ball a base or run denied to the opponent.",
        body: [
          "In the 1980s, as artificial turf and speed-based baseball put a premium on the running game, the catcher's ability to keep the ball in front became a decisive defensive skill. A passed ball or wild pitch with a runner on third often meant a run; with the bases moving station to station, blocking was as valuable as any hit. Coaches drilled blocking until it became reflexive — drop, tuck, round, and deaden the ball, over and over.",
          "The lesson endures at every level: a catcher who blocks well takes away the cheap base. Pitchers who trust their catcher to block will throw their best breaking balls in the dirt with confidence in big counts, knowing a strikeout pitch that bounces will not turn into a free base. Blocking is the quiet skill that lets a pitching staff be aggressive — and it is built entirely through repetition and toughness.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pitch Hits the Dirt", sub: "block, do not catch", type: "attacker" },
          { label: "Drop and Tuck", sub: "knees down, chin to chest", type: "system" },
          { label: "Round and Angle", sub: "deaden ball toward home", type: "victim" },
          { label: "Recover and Check", sub: "find ball, hold runners", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Catching equipment improves, enabling more aggressive blocking" },
        { year: 1980, event: "Turf and speed baseball raise the value of keeping the ball in front", highlight: true },
        { year: 1989, event: "Blocking drilled as core run-prevention skill across pro and youth programs" },
        { year: 2014, event: "Statcast-era analysis confirms blocking and framing as measurable defensive value" },
        { year: 2020, event: "One-knee stances prompt new blocking techniques from a lower starting position" },
      ],
      keyTakeaways: [
        "Block, do not try to catch, a pitch in the dirt — the goal is to keep it in front of the body",
        "Drop to both knees, tuck the chin, round the shoulders, and fill the five-hole with the glove",
        "Angle the chest so side pitches deflect back toward home plate, not toward the dugout or backstop",
        "With two strikes and runners on, expect the ball in the dirt every pitch — anticipation is half of blocking",
      ],
      references: [
        { title: "USA Baseball: Blocking Fundamentals", url: "https://www.usabaseball.com" },
        { title: "Little League: Catching Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Catcher Defense Explained", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-8-04-q1",
          type: "Goal",
          challenge: `  A pitch bounces in the dirt right in front of the
  plate. A young catcher stabs at it with the
  glove, trying to catch it, and it deflects
  off to the side.`,
          text: "On a ball in the dirt, what is the catcher actually trying to do?",
          options: [
            "Catch it cleanly in the glove every time",
            "Block it — keep it in front of the body so it drops close and runners cannot advance",
            "Let it go to the backstop and reset",
            "Swat it toward the pitcher",
          ],
          correctIndex: 1,
          explanation: "On a ball in the dirt, the catcher's goal is to block, not catch. Stabbing with the glove often deflects the ball away. Instead the catcher drops to both knees, tucks, rounds the shoulders, and uses the chest and body as a soft wall to deaden the ball and keep it close in front. Keeping the ball nearby — even if it is not caught — prevents runners from advancing.",
        },
        {
          id: "baseball-8-04-q2",
          type: "Technique",
          challenge: `  A catcher drops to block but keeps their head up
  and chin high, watching the ball all the way
  with their face exposed.`,
          text: "Why must the catcher tuck the chin to the chest when blocking?",
          options: [
            "It looks more athletic",
            "It protects the throat, angles the mask down so the ball deflects downward, and keeps the body rounded to deaden the ball",
            "It is required by rule",
            "It helps the catcher throw faster afterward",
          ],
          correctIndex: 1,
          explanation: "Tucking the chin protects the exposed throat, angles the mask and head downward so a ball striking the mask deflects down and in front rather than up and away, and helps round the shoulders to create a soft, forward-leaning wall. A high chin leaves the throat vulnerable and tends to make the chest flat or arched, which causes the ball to carom away.",
        },
        {
          id: "baseball-8-04-q3",
          type: "Angles",
          challenge: `  Runner on third, one out. A breaking ball bounces
  in the dirt a foot to the catcher's right.
  The catcher drops straight down without turning,
  and the ball deflects toward the dugout.`,
          text: "What should the catcher have done differently on a ball in the dirt to the side?",
          options: [
            "Nothing — side balls cannot be blocked toward home",
            "Angle the chest toward the ball so it deflects back toward home plate and the middle of the field",
            "Stand up and catch it backhand",
            "Let it go and concede the run",
          ],
          correctIndex: 1,
          explanation: "On a ball in the dirt to the side, the catcher must shift and angle the chest toward the ball so the deflection goes back toward home plate, not toward the dugout. Dropping straight down on a side ball lets it carom away, allowing the runner on third to score. Proper angling keeps the ball close and in front, holding the runner.",
        },
        {
          id: "baseball-8-04-q4",
          type: "Anticipation",
          challenge: `  Two strikes, runner on second. The pitcher's
  best swing-and-miss pitch is a curveball he
  often bounces in front of the plate.`,
          text: "How should the catcher prepare for this two-strike breaking ball?",
          options: [
            "Relax — most pitches are strikes, so blocking is unlikely to be needed",
            "Anticipate a ball in the dirt and be ready to block on every two-strike breaking ball with a runner on",
            "Move closer to the pitcher to catch it sooner",
            "Call only fastballs to avoid the risk",
          ],
          correctIndex: 1,
          explanation: "Anticipation is half of blocking. With two strikes and a runner on base, pitchers throw their nastiest breaking balls — exactly the pitches most likely to bounce. The catcher should expect the ball in the dirt on every one and be ready to drop and block instantly. That readiness lets the pitcher throw his best put-away pitch with confidence, knowing a bounced strikeout will not become a free base.",
        },
      ],
    },
  },

  // ─── baseball-8-05: Pop Time and Throwing ─────────────────────────────────────
  {
    epochId: "baseball-8",
    wonder: {
      name: "Globe Life Field",
      location: "Arlington, Texas",
      era: "Modern",
      emoji: "🚀",
    },
    id: "baseball-8-05",
    order: 5,
    title: "Pop Time and Throwing Out Runners",
    subtitle: "The footwork and transfer that beat the steal",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-8-badge-05", name: "Cannon", emoji: "🚀" },
    challengeType: "quiz",
    info: {
      tagline: "Pop time is the catcher's signature — glove to glove, the whole throw measured in fractions of a second.",
      year: 1999,
      overview: [
        "Pop time is the standard measure of a catcher's throwing on a steal attempt: the time from the moment the pitch hits the catcher's mitt to the moment the ball reaches the fielder's glove at second base. Elite Major League catchers post pop times around 1.9 seconds; an average big-league time is about 2.0 seconds. Pop time combines three things — a fast, clean transfer, quick and efficient footwork, and a strong, accurate arm. A catcher with a cannon arm but slow feet and a sloppy transfer will still be slow.",
        "Footwork is where most pop time is won or lost. The two common techniques are the 'rock and fire' / replace step and the jab step. The key is to get the body moving toward the target and the feet aligned to throw in one efficient motion — no wasted steps, no standing straight up. The catcher receives the ball already shifting their weight from the back side to a throwing position, gaining ground toward second base as they transfer.",
        "The transfer — getting the ball from the glove to the throwing hand into a four-seam grip — must be lightning fast and happen in the center of the body, near the throwing shoulder, not out to the side. A clean transfer with a four-seam grip produces a straight, true throw; a fumbled transfer or a poor grip causes the ball to sail or tail. Accuracy matters as much as velocity: a chest-high throw to the bag that the fielder can catch and apply in one motion beats a faster throw that pulls the fielder off the base.",
      ],
      technical: {
        title: "Building a Quick, Accurate Throw to Second",
        body: [
          "Footwork (right-handed catcher): as the pitch arrives, the catcher replaces the right foot under the body and points the lead (left) shoulder and foot at second base, or uses a quick jab step. The momentum moves toward the target. The throw is made from a strong, balanced base — not falling backward. Wasted motion (standing up, stepping backward, a long stride) adds tenths of a second that let the runner steal safely.",
          "Transfer and grip: bring the glove and throwing hand together at the center of the chest near the throwing shoulder. Find a four-seam grip as fast as possible. Throw on a line, aiming chest-high at the bag so the fielder receives it and applies the tag in one motion. Practice the transfer endlessly — a catcher can shave more time off the clock with a cleaner transfer than with a stronger arm.",
        ],
        codeExample: {
          label: "Pop Time Breakdown",
          code: `  POP TIME = catch  →  transfer  →  footwork
             →  arm  →  ball reaches 2B glove

  BENCHMARKS (throw to 2B):
  Elite MLB   ~1.90 sec
  Average MLB ~2.00 sec
  (youth varies — focus on technique, not radar)

  WHERE TIME IS WON:
  ✓ TRANSFER: glove-to-hand at center chest,
    four-seam grip, no fumbling
  ✓ FOOTWORK: replace/jab step toward target,
    no standing up, no wasted steps
  ✓ ACCURACY: chest-high AT the bag, on a line
    (a catchable throw beats a faster wild one)

  ARM STRENGTH MATTERS — but feet + transfer
  win or lose more pop time than raw velocity.`,
        },
      },
      incident: {
        title: "Iván Rodríguez and the Fastest Release in History",
        when: "1991–2011 — Texas Rangers and others",
        where: "Globe Life Field (The Ballpark in Arlington), Arlington, Texas",
        impact: "Iván 'Pudge' Rodríguez, a 13-time Gold Glove catcher, possessed perhaps the quickest and most accurate throwing in baseball history — pop times reportedly near 1.8 seconds — and led the league in throwing out base stealers repeatedly, deterring the running game entirely.",
        body: [
          "Iván Rodríguez redefined catcher throwing for a generation. His release was so fast and his arm so accurate that runners simply did not test him — the threat alone shut down opposing running games. His pop times were reportedly in the 1.8-second range, faster than nearly anyone measured before or since, achieved through compact, efficient footwork and a transfer so quick it looked instantaneous.",
          "Pudge's example teaches the central lesson of catcher throwing: it is a complete skill, not just an arm. His footwork wasted nothing, his transfer was seamless, and his throws arrived chest-high at the bag ready to apply. Generations of catchers have studied his mechanics to learn that the fastest way to beat a runner is not the hardest throw — it is the cleanest, most efficient one.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Receive the Pitch", sub: "already shifting to throw", type: "system" },
          { label: "Transfer at Center Chest", sub: "four-seam grip, fast", type: "attacker" },
          { label: "Efficient Footwork", sub: "replace/jab toward 2B", type: "victim" },
          { label: "Throw Chest-High to the Bag", sub: "on a line, catchable", type: "result" },
        ],
      },
      timeline: [
        { year: 1968, event: "Johnny Bench's strong, accurate arm sets a defensive standard" },
        { year: 1991, event: "Iván Rodríguez debuts — fastest release of his era begins shutting down the running game", highlight: true },
        { year: 1999, event: "Pop time becomes a common scouting term for catcher throwing" },
        { year: 2015, event: "Statcast publishes pop time leaguewide — elite ~1.9s, average ~2.0s" },
        { year: 2023, event: "Larger bases and pickoff limits boost stolen-base attempts, raising the value of a quick pop time" },
      ],
      keyTakeaways: [
        "Pop time is measured glove-to-glove — elite MLB ~1.9 seconds, average ~2.0 seconds",
        "Footwork and transfer win or lose more time than raw arm strength",
        "Transfer at the center of the chest with a four-seam grip for a straight, true throw",
        "Throw chest-high and on a line to the bag — a catchable throw beats a faster, wilder one",
      ],
      references: [
        { title: "MLB Statcast: Pop Time", url: "https://baseballsavant.mlb.com" },
        { title: "USA Baseball: Catcher Throwing Mechanics", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Iván Rodríguez", url: "https://baseballhall.org/hall-of-famers/rodriguez-ivan" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-8-05-q1",
          type: "Definition",
          challenge: `  A scout writes "pop time 2.0" in a report on a
  catcher's throw to second base.`,
          text: "What exactly does pop time measure?",
          options: [
            "The speed of the throw in miles per hour",
            "The time from the pitch hitting the catcher's mitt to the ball reaching the fielder's glove at second base",
            "How long the catcher holds the ball before throwing",
            "The time it takes the runner to reach second base",
          ],
          correctIndex: 1,
          explanation: "Pop time is the total time from the moment the pitch arrives in the catcher's mitt to the moment the ball reaches the receiving fielder's glove at second base — it captures the entire act of transfer, footwork, and throw, not just arm speed. Elite catchers post around 1.9 seconds and average big leaguers around 2.0. It is the standard way to evaluate a catcher's throwing on steals.",
        },
        {
          id: "baseball-8-05-q2",
          type: "Where Time Is Won",
          challenge: `  Two catchers have the same arm strength on a
  radar gun. One consistently throws out runners;
  the other is consistently late.`,
          text: "If their arm strength is equal, where is the slower catcher most likely losing time?",
          options: [
            "Nowhere — equal arms must mean equal results",
            "In the transfer and footwork — a slow glove-to-hand exchange or wasted steps add tenths of a second",
            "In how hard they grip the ball",
            "In their batting stance",
          ],
          correctIndex: 1,
          explanation: "Arm strength is only one of three ingredients. With equal arms, the slower catcher is almost certainly losing time in the transfer (fumbling the glove-to-hand exchange or finding the grip slowly) or in footwork (standing up, stepping backward, wasted motion). These add up to tenths of a second — the difference between out and safe. Cleaning up the transfer and footwork is the fastest way to improve pop time.",
        },
        {
          id: "baseball-8-05-q3",
          type: "Transfer",
          challenge: `  A catcher receives the pitch and brings the ball
  way out to the side of their body to transfer
  it to the throwing hand before throwing.`,
          text: "Why should the transfer happen at the center of the chest instead of out to the side?",
          options: [
            "It looks more professional",
            "A center-chest transfer near the throwing shoulder is faster and lets the catcher find a four-seam grip cleanly for an accurate throw",
            "Side transfers are against the rules",
            "It does not matter where the transfer happens",
          ],
          correctIndex: 1,
          explanation: "Bringing the glove and throwing hand together at the center of the chest, near the throwing shoulder, is the shortest, fastest path to the throwing position and makes it easier to secure a four-seam grip. Transferring out to the side adds distance and time and often leads to a poor grip, causing the ball to sail or tail. A compact, center-chest transfer is a hallmark of quick-release catchers.",
        },
        {
          id: "baseball-8-05-q4",
          type: "Accuracy",
          challenge: `  Catcher A fires a blazing throw that pulls the
  fielder a step off second base toward the
  outfield. Catcher B throws slightly slower but
  chest-high right at the bag.`,
          text: "Which throw is more likely to retire the runner, and why?",
          options: [
            "Catcher A — velocity always beats accuracy",
            "Catcher B — a chest-high throw at the bag lets the fielder catch and tag in one motion, while a hard throw that pulls the fielder off the bag loses the tag",
            "They are exactly equal in every case",
            "Neither throw can retire a runner",
          ],
          correctIndex: 1,
          explanation: "Accuracy usually beats raw velocity. A throw delivered chest-high and on a line to the bag lets the fielder receive it and apply the tag in a single motion. A faster throw that sails or pulls the fielder off the base costs the time to recover and reapply the tag — often letting the runner in safely. Catchers aim to be both quick and accurate, but a catchable throw to the bag is the priority.",
        },
      ],
    },
  },

  // ─── baseball-8-06: Building the Catcher's Body ───────────────────────────────
  {
    epochId: "baseball-8",
    wonder: {
      name: "Oracle Park",
      location: "San Francisco, California",
      era: "Modern",
      emoji: "💪",
    },
    id: "baseball-8-06",
    order: 6,
    title: "Building the Catcher's Body",
    subtitle: "Legs, hips, core, and durability for the long season",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-8-badge-06", name: "Iron Legs", emoji: "🦵" },
    challengeType: "quiz",
    info: {
      tagline: "Catching is the most physically punishing position — the body that lasts is the one that's built and cared for.",
      year: 2010,
      overview: [
        "No position taxes the body like catching. A catcher squats and rises well over a hundred times a game, absorbs foul tips and blocked balls, throws hard from a crouch, and does it every day across a long season. Building a catcher's body is about three goals: generating power (legs, hips, and core for throwing and blocking), enduring the workload (leg and back strength plus mobility), and staying healthy (knee, hip, and shoulder care). A strong, mobile, durable body is what lets a catcher's skills show up in the late innings of August.",
        "The foundation is the lower body and core. Strong legs power the throw and let a catcher hold a stable crouch for nine innings; mobile hips and ankles allow a deep, balanced squat without straining the knees and back; a strong core transfers energy from the legs to the throwing arm and stabilizes the body during blocks. Posterior-chain strength (glutes, hamstrings, back) protects against the constant flexion of squatting. Single-leg strength and balance work translate directly to throwing footwork.",
        "Durability also comes from mobility and recovery, not just lifting. Hip and ankle mobility keep the squat healthy; thoracic-spine and shoulder mobility protect the throwing arm; and managing workload — rest days, hydration, and listening to the body — prevents the overuse injuries that end catching careers early. The modern one-knee stance is partly a durability tool, reducing the deep-squat load. A catcher who trains the legs, hips, and core and protects the joints will out-last more talented players who neglect the body.",
      ],
      technical: {
        title: "Training Priorities for Catchers",
        body: [
          "Strength and power: build the legs and posterior chain (squats, hinges, lunges, single-leg work) for throwing power and crouch endurance; train the core for rotational power and stability; include throwing-arm care (rotator cuff and scapular strength) to protect the shoulder from the high-volume, high-effort throws catching demands.",
          "Mobility and durability: prioritize hip, ankle, and thoracic-spine mobility so the deep squat stays healthy and the throw stays free. Warm up the legs and arm thoroughly before catching. Manage the workload — catchers need planned rest, because catching every inning of every game is a fast path to breakdown. Hydration, sleep, and recovery are part of the training, not extras.",
        ],
        codeExample: {
          label: "Catcher Body-Building Priorities",
          code: `  POWER (throwing + blocking):
  → Legs + posterior chain: squat, hinge, lunge
  → Core: rotational + anti-rotation stability
  → Single-leg strength → footwork power

  ENDURANCE (the long season):
  → Crouch/leg endurance, back strength
  → Aerobic base for late-game sharpness

  DURABILITY (stay healthy):
  → Hip + ankle mobility → healthy deep squat
  → Thoracic + shoulder mobility → free arm
  → Rotator cuff / scapular care for the throw
  → MANAGE WORKLOAD: rest, sleep, hydrate

  The one-knee stance is partly a DURABILITY
  tool — it reduces deep-squat load over 100+
  squats per game.`,
        },
      },
      incident: {
        title: "Buster Posey and the Cost of the Position",
        when: "2011 — San Francisco Giants",
        where: "Oracle Park (AT&T Park), San Francisco, California",
        impact: "A violent home-plate collision in 2011 shattered Buster Posey's leg and ended his season — accelerating rule changes to protect catchers (the 2014 home-plate collision rule) and highlighting how the position's physical toll shapes careers and even the rules of the game.",
        body: [
          "Buster Posey, a Rookie of the Year and future MVP catcher, suffered a devastating leg injury in a home-plate collision in May 2011. The injury cost him the rest of the season and sparked a leaguewide conversation about catcher safety. In 2014, MLB adopted a rule limiting home-plate collisions, largely in response — evidence of how uniquely punishing the catching position is on the body.",
          "Posey's career also illustrates the durability side of catching: to extend his career, the Giants managed his workload carefully, giving him games at first base and regular rest. The position rewards the players who treat their bodies as long-term assets — building strength and mobility, protecting the joints, and accepting the rest that keeps them productive into the late innings and late seasons of a career.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Squatting 100+ Times/Game", sub: "the catching workload", type: "attacker" },
          { label: "Build Legs, Hips, Core", sub: "power + endurance", type: "system" },
          { label: "Protect the Joints", sub: "mobility, arm care, rest", type: "victim" },
          { label: "Durable, Late-Season Catcher", sub: "skills hold up in August", type: "result" },
        ],
      },
      timeline: [
        { year: 1970, event: "Catching recognized as the position with the shortest average career length" },
        { year: 2010, event: "Sports science emphasizes mobility and workload management for catchers", highlight: true },
        { year: 2011, event: "Buster Posey's home-plate collision injury sparks safety reform" },
        { year: 2014, event: "MLB adopts the home-plate collision rule to protect catchers" },
        { year: 2019, event: "One-knee stances adopted partly to reduce the physical toll of squatting" },
      ],
      keyTakeaways: [
        "Catching is the most physically punishing position — durability is a trained skill, not luck",
        "Build the legs, hips, and core for throwing power, blocking, and a stable crouch all game",
        "Prioritize hip, ankle, and thoracic mobility plus rotator-cuff care to protect the joints",
        "Manage workload with rest, hydration, and sleep — overuse ends catching careers early",
      ],
      references: [
        { title: "USA Baseball: Athlete Development and Arm Care", url: "https://www.usabaseball.com" },
        { title: "MLB: Home-Plate Collision Rule", url: "https://www.mlb.com/official-information/umpires/official-rules" },
        { title: "Little League: Conditioning and Safety", url: "https://www.littleleague.org/playing-rules/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-8-06-q1",
          type: "Foundation",
          challenge: `  A young catcher wants to throw out more runners
  and asks what to train first. They assume the
  answer is "the arm."`,
          text: "Which area provides the foundation for a catcher's throwing power and game-long endurance?",
          options: [
            "Only the throwing arm and forearm",
            "The legs, hips, and core — they power the throw, fuel the crouch, and transfer energy to the arm",
            "Only grip strength",
            "Cardio alone, with no strength work",
          ],
          correctIndex: 1,
          explanation: "Throwing power and blocking power come from the legs, hips, and core, which transfer energy up to the throwing arm — and strong legs are what let a catcher hold a stable crouch for a whole game. Arm care matters, but a catcher who only trains the arm and neglects the lower body and core will lack both power and endurance. The foundation is built from the ground up.",
        },
        {
          id: "baseball-8-06-q2",
          type: "Mobility",
          challenge: `  A catcher is strong but stiff — tight hips and
  ankles make their deep squat awkward, putting
  strain on the knees and lower back.`,
          text: "Why is mobility, not just strength, essential for a catcher?",
          options: [
            "Mobility is irrelevant for catchers",
            "Hip and ankle mobility allow a deep, balanced squat without straining the knees and back, and shoulder mobility keeps the throw healthy",
            "Stiff catchers throw harder",
            "Only outfielders need mobility",
          ],
          correctIndex: 1,
          explanation: "Strength without mobility leads to injury. A catcher squats deeply over a hundred times a game; tight hips and ankles force the knees and lower back to absorb that load. Good hip, ankle, and thoracic-spine mobility allow a balanced, healthy deep squat and a free, protected throwing motion. Mobility and strength together — not strength alone — build a durable catcher.",
        },
        {
          id: "baseball-8-06-q3",
          type: "Durability",
          challenge: `  A coach wants to catch his best catcher every
  inning of every game all season to maximize
  the team's defense.`,
          text: "Why is managing a catcher's workload important?",
          options: [
            "It is not — a good catcher should play every inning",
            "Catching is so physically punishing that planned rest prevents overuse injuries and keeps the catcher productive late in the season",
            "Workload only matters for pitchers",
            "Rest makes catchers worse",
          ],
          correctIndex: 1,
          explanation: "Catching is uniquely taxing, and even durable catchers break down without planned rest. Managing workload — rest days, occasional games at another position, hydration, and sleep — prevents the overuse injuries that shorten catching careers and keeps a catcher's skills sharp in the late innings of a long season. Teams routinely rest their catchers for exactly this reason.",
        },
        {
          id: "baseball-8-06-q4",
          type: "History",
          challenge: `  After a catcher's leg was shattered in a violent
  home-plate collision in 2011, baseball changed
  one of its rules a few years later.`,
          text: "What does the home-plate collision rule reveal about the catching position?",
          options: [
            "That catchers are not really at risk",
            "That the position is uniquely physically punishing — its dangers were significant enough to change the rules of the game",
            "That collisions are good for the sport",
            "That the rule had nothing to do with catcher safety",
          ],
          correctIndex: 1,
          explanation: "Buster Posey's 2011 injury helped drive MLB to adopt the 2014 home-plate collision rule to protect catchers. The fact that the position's physical toll was serious enough to change the rules underscores how punishing catching is. It reinforces the central lesson: a catcher must build and protect the body deliberately, because the position will test it like no other.",
        },
      ],
    },
  },

  // ─── baseball-8-07: Fielding the Position ─────────────────────────────────────
  {
    epochId: "baseball-8",
    wonder: {
      name: "Truist Park",
      location: "Atlanta, Georgia",
      era: "Modern",
      emoji: "🧤",
    },
    id: "baseball-8-07",
    order: 7,
    title: "Fielding the Position",
    subtitle: "Bunts, pop-ups, swinging bunts, and comebackers",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-8-badge-07", name: "Quick Pounce", emoji: "🐾" },
    challengeType: "quiz",
    info: {
      tagline: "The instant the ball is bunted, popped, or dribbled, the catcher becomes a fielder — and often the quarterback of the play.",
      year: 1975,
      overview: [
        "Catchers field more than pitches. On bunts and slow rollers in front of the plate, the catcher is often the best-positioned fielder and must pounce, decide where the play is, and make an accurate throw. On pop-ups around home plate, the catcher tracks a spinning ball with reverse rotation. And because the catcher faces the field and knows the whole situation, they frequently direct who fields the bunt and where the throw should go — quarterbacking the play even when someone else makes it.",
        "Fielding a bunt: come out of the crouch fast, attack the ball, and field it with two hands or a bare-hand-and-glove scoop on a dead ball. The footwork is crucial — circle the ball so the momentum is already moving toward the target base before picking it up, rather than fielding it flat-footed and then turning. The catcher calls out the base ('one!' or 'two!' or 'three!') for themselves and for any other fielder converging on the ball, because the catcher can see the entire developing play.",
        "Fielding a pop-up: a ball popped up near home plate spins back toward the infield with reverse spin, so the catcher turns their back to the infield, finds the ball, removes the mask (and tosses it clear once the ball is located), and drifts to the spot, letting the ball drift back toward the diamond. Catching pop-ups is a distinct skill because of that backspin drift. On comebackers and short swinging bunts, the catcher must be ready to spring up and make a quick, accurate throw, often on the run.",
      ],
      technical: {
        title: "Fielding Bunts and Pop-ups — Footwork and Decisions",
        body: [
          "Bunts: explode out of the crouch and attack the ball so you field it moving toward the target. On a ball you can pick cleanly, get two hands on it; on a dead ball, use a bare-hand scoop with the glove as a backstop. Circle to align your feet with the throw before you pick it up. Most importantly, decide early — call the base loudly, because the catcher's full view of runners makes the catcher the natural director of the play.",
          "Pop-ups: turn your back to the infield, locate the ball, then take the mask off and hold it until you find the ball (throw it well clear once you do, so you don't trip on it). Drift under the ball and let the reverse spin carry it back toward the infield — catch it with the glove turned, giving yourself room as it drifts. Communicate with the first or third baseman so two fielders don't collide.",
        ],
        codeExample: {
          label: "Catcher Fielding Decisions",
          code: `  BUNT IN FRONT OF THE PLATE:
  1. Explode out of the crouch — ATTACK
  2. CIRCLE the ball so feet face the target
  3. Field with two hands (or bare-hand a dead ball)
  4. CALL THE BASE loud — you see all the runners
  5. Throw on a line, lead the fielder to the bag

  POP-UP NEAR HOME:
  1. Turn BACK to the infield, find the ball
  2. Take mask off; hold it until located,
     then throw it CLEAR of your feet
  3. Drift to the spot — ball spins back toward
     the infield (reverse spin)
  4. Glove turned, give room as it drifts back
  5. Call off / coordinate with the corner infielder`,
        },
      },
      incident: {
        title: "The Catcher as On-Field Quarterback",
        when: "1970s — the fundamentals era",
        where: "Truist Park and ballparks across the game",
        impact: "Coaching tradition long established the catcher as the director of bunt plays and pop-ups around the plate — the one fielder who sees every runner and calls out where the ball should go, preventing the confusion that turns easy outs into errors.",
        body: [
          "Because the catcher faces the field and tracks every runner, baseball has always assigned the catcher to quarterback plays in front of and around home plate. On a sacrifice bunt, multiple fielders may converge — the pitcher, the corners, and the catcher — and someone must decide instantly who takes the ball and where it goes. The catcher's full view makes them the natural voice: a loud, clear call prevents two players from going for the same ball or throwing to the wrong base.",
          "This directing role is why coaches drill catchers not only on fielding mechanics but on decision-making and communication. A catcher who fields a bunt cleanly but throws to the wrong base, or who lets a pop-up drop because no one called it, has failed the play. The best catchers turn chaotic little plays — bunts, dribblers, and pop-ups — into routine outs by seeing the play early and telling everyone what to do.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball Bunted or Popped", sub: "catcher becomes a fielder", type: "attacker" },
          { label: "Read the Whole Play", sub: "runners, who fields it", type: "system" },
          { label: "Attack with Footwork", sub: "circle the ball / drift under", type: "victim" },
          { label: "Call It and Make the Play", sub: "loud, accurate, decisive", type: "result" },
        ],
      },
      timeline: [
        { year: 1920, event: "The sacrifice bunt becomes a core strategy, raising the value of catcher fielding" },
        { year: 1975, event: "Coaching standardizes the catcher as director of bunt and pop-up plays", highlight: true },
        { year: 1990, event: "Bare-hand-and-glove bunt scoop technique widely taught for dead balls" },
        { year: 2005, event: "Youth programs emphasize catcher communication on converging plays" },
        { year: 2020, event: "Pitch clock and shift rules subtly change bunt frequency and positioning" },
      ],
      keyTakeaways: [
        "On bunts and slow rollers, attack the ball and circle it so your feet face the target before you pick it up",
        "On pop-ups near home, turn your back to the infield and let the reverse spin drift the ball back toward the diamond",
        "Take the mask off only after locating a pop-up, then throw it clear so you don't trip on it",
        "The catcher sees every runner — call the base loudly and direct converging fielders to avoid collisions and errors",
      ],
      references: [
        { title: "USA Baseball: Catcher Fielding Drills", url: "https://www.usabaseball.com" },
        { title: "Little League: Fielding Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Defensive Fundamentals", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-8-07-q1",
          type: "Bunt Footwork",
          challenge: `  A bunt rolls slowly toward the third-base line.
  The catcher charges straight at it, fields it
  flat-footed facing the line, and then has to
  spin around to throw to first.`,
          text: "What footwork would have made this play faster?",
          options: [
            "There is nothing to improve — spinning is the standard technique",
            "Circle the ball so the feet are already aligned toward first base before fielding, eliminating the extra spin",
            "Field it with the bare hand only, never the glove",
            "Wait for the ball to stop completely before fielding",
          ],
          correctIndex: 1,
          explanation: "Fielding a bunt flat-footed and then spinning wastes time. The catcher should circle the ball — taking a path that aligns the feet toward the target base before picking the ball up — so momentum is already carrying toward the throw. This lets the throw happen in one motion instead of fielding, stopping, turning, and then throwing. Good footwork turns a bunt into a routine out.",
        },
        {
          id: "baseball-8-07-q2",
          type: "Pop-up Spin",
          challenge: `  A batter pops the ball straight up near home plate.
  A new catcher faces the infield and reaches up,
  but the ball keeps drifting back over their head
  toward the pitcher's mound.`,
          text: "Why should the catcher turn their back to the infield on a pop-up near home?",
          options: [
            "To show off",
            "A ball popped up near home has reverse spin that carries it back toward the infield, so turning the back to the infield lets the catcher drift with that natural movement",
            "Because the rules require it",
            "To avoid looking at the pitcher",
          ],
          correctIndex: 1,
          explanation: "A pop-up near home plate spins back toward the infield (reverse spin). If the catcher faces the infield, the ball drifts away over their head. By turning their back to the infield and finding the ball, the catcher can drift under it as the spin carries it back toward the diamond, catching it comfortably. This counterintuitive footwork is a distinct, essential catching skill.",
        },
        {
          id: "baseball-8-07-q3",
          type: "Mask",
          challenge: `  On a pop-up, a catcher rips the mask off
  immediately and drops it right at their feet,
  then loses the ball in the sky and trips over
  the mask while searching.`,
          text: "What is the correct way to handle the mask on a pop-up?",
          options: [
            "Never take the mask off",
            "Keep the mask on until the ball is located, then throw it well clear of your feet so you don't trip on it",
            "Throw the mask straight up in the air",
            "Hand the mask to the umpire first",
          ],
          correctIndex: 1,
          explanation: "The correct sequence is to keep the mask on while finding the ball, then remove it and toss it well clear of the area where you'll be moving. Ripping it off before locating the ball and dropping it underfoot creates a tripping hazard exactly where the catcher will be drifting. Locate first, then discard the mask away from your feet.",
        },
        {
          id: "baseball-8-07-q4",
          type: "Directing",
          challenge: `  A sacrifice bunt is laid down. The pitcher, the
  first baseman, and the catcher all converge on
  the ball, unsure who should take it or where
  to throw.`,
          text: "Why is the catcher the natural player to direct this converging bunt play?",
          options: [
            "The catcher is closest to the dugout",
            "The catcher faces the whole field and sees every runner, so a loud call from the catcher tells everyone who fields it and where the throw goes",
            "The catcher has the strongest arm by rule",
            "The pitcher is not allowed to field bunts",
          ],
          correctIndex: 1,
          explanation: "The catcher is the only fielder facing the entire field with a clear view of every runner, which makes them the natural quarterback of converging plays around the plate. A loud, decisive call ('I got it — two!' or 'pitcher, one!') prevents two fielders from colliding or throwing to the wrong base. Even when another fielder takes the ball, the catcher's view and voice direct the play.",
        },
      ],
    },
  },

  // ─── baseball-8-08: Plays at the Plate ────────────────────────────────────────
  {
    epochId: "baseball-8",
    wonder: {
      name: "Dodger Stadium",
      location: "Los Angeles, California",
      era: "Modern",
      emoji: "🏠",
    },
    id: "baseball-8-08",
    order: 8,
    title: "Plays at the Plate",
    subtitle: "Protecting home safely — lanes, tags, and the rules",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-8-badge-08", name: "Plate Guardian", emoji: "🏠" },
    challengeType: "quiz",
    info: {
      tagline: "The play at the plate is the catcher's defining moment — and modern rules make doing it safely doing it right.",
      year: 2014,
      overview: [
        "A play at the plate is when a runner tries to score and the catcher receives a throw to make the tag. It is the highest-stakes defensive play a catcher makes — a run hangs on it — and historically one of the most dangerous, because runners would collide violently with catchers blocking the plate. Modern rules (MLB's 2014 home-plate collision rule and similar youth rules) now require the catcher to give the runner a clear path to the plate unless the catcher already has the ball, and prohibit runners from targeting the catcher. Doing the play right means doing it safely.",
        "Under current rules, the catcher should set up giving the runner a lane to the plate — typically positioned up the third-base line or in front of the plate, not blocking it — and only move to block the plate once in possession of the ball. The catcher receives the throw, secures it, and applies a sweep tag: a quick, low tag that catches the sliding runner before they reach the plate. Blocking the plate without the ball is now an obstruction violation that can be called safe, so positioning and timing are everything.",
        "The catcher also decides whether it is even a play: on a throw home, the catcher reads whether the runner can be retired or whether to concede the run and prevent a trailing runner from advancing. A force play at home (bases loaded) is a tag-free force — step on the plate. A non-force play requires a tag. Communication with the cutoff man and infielders about where the play is — home, or somewhere else — is part of the catcher's job before the throw even arrives.",
      ],
      technical: {
        title: "The Safe, Legal Play at the Plate",
        body: [
          "Set up legally: give the runner a clear path to the plate. A common technique is to set up in fair territory up the third-base line or in front of the plate, presenting a target to the fielder while leaving the plate accessible, then move to apply the tag once the ball arrives. Blocking the plate before possessing the ball risks an obstruction call (runner ruled safe).",
          "Receive and sweep: catch the ball cleanly first — a dropped ball means a run — then bring the glove down in a quick sweep tag across the runner's path, ideally tagging before the runner reaches the plate. On a force play (bases loaded, fewer than two outs forcing the runner home), no tag is needed — simply touch the plate with the ball. Always secure the ball before worrying about the tag; an out is only an out if you hold on.",
        ],
        codeExample: {
          label: "Play at the Plate — Decision and Technique",
          code: `  BEFORE THE THROW:
  ✓ Is the play even at home? Tell the cutoff man.
  ✓ FORCE (bases loaded) → just touch the plate
  ✓ NON-FORCE → you must TAG the runner

  LEGAL SETUP (collision rules):
  → Give the runner a LANE to the plate
  → Set up up-the-line / in front, NOT blocking
  → Only block the plate ONCE you have the ball
  → Blocking without the ball = obstruction (SAFE)

  THE TAG:
  1. CATCH the ball first — secure it
  2. Quick, low SWEEP tag across the runner's path
  3. Tag BEFORE the runner reaches the plate
  4. Hold on through the slide — no ball, no out`,
        },
      },
      incident: {
        title: "The 2014 Home-Plate Collision Rule",
        when: "2014 — Major League Baseball",
        where: "Dodger Stadium and ballparks leaguewide",
        impact: "After years of dangerous collisions — including the 2011 injury that ended Buster Posey's season — MLB adopted Rule 7.13 (later 6.01(i)), requiring catchers to give runners a path to the plate and barring runners from initiating malicious contact, fundamentally changing how the play is taught.",
        body: [
          "For most of baseball history, the play at the plate was a collision sport: catchers blocked the plate and runners tried to barrel through them to dislodge the ball. The resulting injuries — concussions, broken bones, and career-altering damage — eventually forced change. After Buster Posey's devastating 2011 injury, MLB adopted a home-plate collision rule in 2014 requiring catchers to give the runner a lane and prohibiting runners from targeting the catcher.",
          "The rule reshaped catching technique. The modern play emphasizes positioning to receive the throw while leaving a lane, then applying a quick sweep tag — skill and timing rather than bracing for a crash. Youth leagues have long had even stricter rules, often requiring runners to slide and forbidding blocking the plate. The change made the play safer without making it any less exciting: a well-timed sweep tag to nail a runner at the plate remains one of the game's signature moments.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Throw Coming Home", sub: "force or tag? where is the play?", type: "attacker" },
          { label: "Legal Setup", sub: "give a lane to the plate", type: "system" },
          { label: "Catch First, Then Tag", sub: "secure the ball", type: "victim" },
          { label: "Quick Sweep Tag", sub: "low, before the plate, hold on", type: "result" },
        ],
      },
      timeline: [
        { year: 1970, event: "Pete Rose bowls over catcher Ray Fosse in the All-Star Game — the collision era at its peak" },
        { year: 2011, event: "Buster Posey's home-plate collision injury intensifies the safety debate" },
        { year: 2014, event: "MLB adopts the home-plate collision rule (Rule 7.13)", highlight: true },
        { year: 2016, event: "The rule is refined; sweep-tag technique becomes the taught standard" },
        { year: 2020, event: "Youth collision bans and mandatory-slide rules standard across leagues" },
      ],
      keyTakeaways: [
        "Modern rules require giving the runner a clear lane to the plate unless you already have the ball — blocking without it is obstruction (runner safe)",
        "On a non-force play you must tag the runner; on a force (bases loaded) just touch the plate with the ball",
        "Catch and secure the ball first, then apply a quick, low sweep tag before the runner reaches the plate",
        "Decide before the throw whether the play is at home, and communicate it to the cutoff man",
      ],
      references: [
        { title: "MLB Official Rules: Home-Plate Collisions", url: "https://www.mlb.com/official-information/umpires/official-rules" },
        { title: "Little League: Collision and Sliding Rules", url: "https://www.littleleague.org/playing-rules/" },
        { title: "USA Baseball: Plays at the Plate", url: "https://www.usabaseball.com" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-8-08-q1",
          type: "Rules",
          challenge: `  A throw is coming home. The catcher does not yet
  have the ball, but plants both feet on top of
  home plate, completely blocking it from the
  sliding runner.`,
          text: "Under modern collision rules, what is the problem with blocking the plate before having the ball?",
          options: [
            "Nothing — blocking the plate is always legal",
            "It is obstruction — without possession of the ball the catcher must give the runner a lane, and the runner can be ruled safe",
            "The catcher must also tag with two hands",
            "The runner is automatically out for sliding",
          ],
          correctIndex: 1,
          explanation: "Modern home-plate collision rules require the catcher to give the runner a clear path to the plate unless the catcher already has the ball. Blocking the plate without possession is obstruction, and the umpire can rule the runner safe regardless of the tag. The catcher should set up leaving a lane, then move to block and tag only once the ball is secured.",
        },
        {
          id: "baseball-8-08-q2",
          type: "Force vs Tag",
          challenge: `  Bases loaded, one out. A ground ball is hit and
  the runner from third is forced toward home.
  The catcher receives the throw at the plate.`,
          text: "What must the catcher do to record the out on this play?",
          options: [
            "Apply a sweep tag on the runner before they reach the plate",
            "Simply touch home plate with the ball — it is a force play, so no tag is required",
            "Tag the runner and step on the plate",
            "Throw to first base immediately",
          ],
          correctIndex: 1,
          explanation: "With the bases loaded and a ground ball, the runner from third is forced to advance to home, making this a force play. The catcher only needs to touch home plate while holding the ball — no tag required — just like a force out at any base. Tagging is only necessary on non-force plays. Recognizing force versus tag situations instantly is a core catching decision.",
        },
        {
          id: "baseball-8-08-q3",
          type: "Technique",
          challenge: `  A catcher is so focused on slapping a quick tag
  that they reach for the runner before fully
  securing the throw — and the ball pops out
  as the tag is applied.`,
          text: "What is the correct priority sequence on a tag play at the plate?",
          options: [
            "Tag first, then catch — speed beats everything",
            "Catch and secure the ball first, then apply the tag and hold on through the slide",
            "Block the plate, then catch",
            "Tag and immediately throw to another base",
          ],
          correctIndex: 1,
          explanation: "The catcher must catch and secure the ball before applying the tag. An out only counts if the fielder holds the ball through the tag and any collision or slide. Reaching to tag before securing the throw causes dropped balls and runs. The sequence is: receive cleanly, secure, sweep-tag low and quick, and hold on. No ball, no out — every time.",
        },
        {
          id: "baseball-8-08-q4",
          type: "Decision",
          challenge: `  A single is hit to the outfield with runners on
  first and third. The runner from third is going
  to score easily, and the batter is rounding first.`,
          text: "What decision must the catcher and cutoff man make before the throw even arrives?",
          options: [
            "Always throw home no matter what",
            "Read whether the runner can actually be retired at home; if not, the play may be conceded to keep the trailing runner from advancing into scoring position",
            "Let the ball roll to the backstop",
            "Run toward the outfield to get the ball",
          ],
          correctIndex: 1,
          explanation: "Not every throw should go home. If the runner from third will score easily, firing home accomplishes nothing and may let the batter advance to second. The catcher and cutoff man read the play: if the lead runner can be retired, make the play at the plate; if not, the cutoff man may redirect the throw to keep the trailing runner out of scoring position. Knowing where the play is — before the throw — is essential.",
        },
      ],
    },
  },

  // ─── baseball-8-09: Backups and Coverage ──────────────────────────────────────
  {
    epochId: "baseball-8",
    wonder: {
      name: "Yankee Stadium",
      location: "Bronx, New York",
      era: "Modern",
      emoji: "🗺️",
    },
    id: "baseball-8-09",
    order: 9,
    title: "Backups and Coverage for Every Situation",
    subtitle: "Where the catcher goes when the ball is in play",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-8-badge-09", name: "Always Moving", emoji: "🗺️" },
    challengeType: "quiz",
    info: {
      tagline: "When the ball is hit, the catcher is never done — there's a backup spot or a coverage job on every play.",
      year: 1995,
      overview: [
        "The catcher has a job on every batted ball, and much of it is backing up and coordinating rather than fielding. The single most important rule: with nobody on base, the catcher sprints down the first-base line to back up throws to first on infield grounders. If the first baseman's throw gets away, the backing-up catcher saves a base. This is the catcher's most frequent and most overlooked hustle play — and the one that separates engaged catchers from passive ones.",
        "The catcher also quarterbacks cutoffs and relays from behind the play. On a ball hit to the outfield with a potential play at the plate, the catcher lines up the cutoff man — shouting to position them between the outfielder and home, and then calling 'cut' and a base, or 'let it go,' based on the catcher's full view of the runners. On a wild pitch or passed ball with a runner on third, the pitcher covers home while the catcher recovers the ball and flips or throws to the covering pitcher.",
        "Coverage assignments shift with the situation. The catcher must know, before every pitch, what their job is if the ball is hit or gets away: back up first (bases empty), defend the plate and direct the cutoff (runners in scoring position), recover and feed the pitcher covering home (wild pitch with a runner on third), or field the bunt and call the play. Memorizing these responsibilities until they are automatic is what lets a catcher move the instant the ball is in play, instead of freezing to think.",
      ],
      technical: {
        title: "Catcher Coverage Map by Situation",
        body: [
          "Bases empty, ground ball to the infield: sprint down the first-base line in foul territory to back up the throw to first. This is automatic — do it on every such play, because the one time the throw gets away is the time it matters.",
          "Runners in scoring position, ball to the outfield: stay home, defend the plate, and direct the cutoff man with your voice — 'cut two,' 'cut three,' 'cut home,' or 'no cut.' Wild pitch / passed ball with a runner on third: the pitcher covers home; the catcher recovers the ball fast and delivers it to the pitcher at the plate with a firm, accurate feed. On bunts, field or direct as covered earlier. Know your job before the pitch.",
        ],
        codeExample: {
          label: "Catcher Backup / Coverage Cheat Sheet",
          code: `  SITUATION                  → CATCHER'S JOB
  ───────────────────────────────────────────────
  Bases empty, grounder      → SPRINT to back up
    to the infield             1st base throw
  Runner(s) in scoring pos.,  → Defend plate +
    ball to the outfield       DIRECT the cutoff
  Wild pitch / passed ball,   → Recover ball,
    runner on 3rd              feed the PITCHER
                               covering home
  Bunt in front of plate     → Field it or call
                               who does + the base
  Steal of 2nd or 3rd        → Receive + THROW
  Pop-up near home           → Catch it (back to
                               infield, mask off)

  RULE OF THUMB: know your job BEFORE the pitch,
  so you MOVE the instant the ball is in play.`,
        },
      },
      incident: {
        title: "The Hustle Play That Wins Games",
        when: "1990s — fundamentals-driven baseball",
        where: "Yankee Stadium and ballparks across the game",
        impact: "Championship teams have long preached that the catcher backing up first base on every bases-empty grounder is the model of relentless defense — an unglamorous sprint that occasionally saves a base or a game and always sets the tone for team effort.",
        body: [
          "Coaches at every level use the catcher's back-up-first sprint as the litmus test of effort. On most ground balls to the infield with the bases empty, the throw to first is caught cleanly and the catcher's sprint appears to accomplish nothing. But on the rare wild throw, the backing-up catcher is the only player who can keep the batter-runner from advancing to second — and that saved base can decide a close game.",
          "The deeper point is cultural: a catcher who hustles to back up first on every play, even when it usually doesn't matter, sets a standard of relentless effort for the whole team. Great defensive teams are built on these invisible, repeated hustle plays. The catcher — already the leader and field general — leads by example by being the player who never stops moving when the ball is in play.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Know the Job Pre-Pitch", sub: "backup or coverage?", type: "system" },
          { label: "Ball Is in Play", sub: "move instantly", type: "attacker" },
          { label: "Backup or Direct", sub: "first base / cutoff / home", type: "victim" },
          { label: "Base or Run Saved", sub: "relentless effort pays off", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Cutoff and relay systems formalized in professional coaching" },
        { year: 1980, event: "Catcher-directed cutoffs become standard as catchers quarterback outfield throws" },
        { year: 1995, event: "Back-up-first-base hustle drilled as the model of catcher effort", highlight: true },
        { year: 2010, event: "Defensive coordinators chart catcher coverage on every batted-ball type" },
        { year: 2020, event: "Positioning data refines where catchers direct cutoff men" },
      ],
      keyTakeaways: [
        "With the bases empty and a grounder to the infield, the catcher sprints to back up the throw to first — every time",
        "On outfield balls with runners in scoring position, the catcher directs the cutoff man with clear, loud calls",
        "On a wild pitch or passed ball with a runner on third, the pitcher covers home and the catcher recovers and feeds the throw",
        "Know your backup or coverage job before each pitch so you move the instant the ball is in play",
      ],
      references: [
        { title: "USA Baseball: Cutoffs, Relays, and Backups", url: "https://www.usabaseball.com" },
        { title: "Little League: Team Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Defensive Positioning and Cutoffs", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-8-09-q1",
          type: "Backup",
          challenge: `  Bases empty. A ground ball is hit to the shortstop,
  who throws across to first base. The catcher
  stays at home plate and watches.`,
          text: "Where should the catcher be on a bases-empty ground ball to the infield?",
          options: [
            "At home plate, watching the play",
            "Sprinting down the first-base line in foul territory to back up the throw to first",
            "Covering second base",
            "Running to the mound",
          ],
          correctIndex: 1,
          explanation: "With the bases empty, the catcher's job on an infield grounder is to sprint down the first-base line and back up the throw to first. Most of the time the throw is caught cleanly and the sprint looks pointless — but on the occasional wild throw, the backing-up catcher is the only one who can stop the batter-runner from taking second. It is the catcher's signature hustle play.",
        },
        {
          id: "baseball-8-09-q2",
          type: "Cutoff Direction",
          challenge: `  Runner on second, base hit to right field, a
  possible play at the plate. The right fielder
  throws toward home through the cutoff man.`,
          text: "What is the catcher's role on this throw from the outfield?",
          options: [
            "Run into the outfield to get the ball",
            "Defend the plate and use their full view to direct the cutoff man — 'cut home,' 'cut two,' or 'let it go'",
            "Leave the plate undefended and back up third base",
            "Nothing — the cutoff man decides alone",
          ],
          correctIndex: 1,
          explanation: "On an outfield throw with a potential play at the plate, the catcher stays home to defend the plate and acts as the eyes of the play, loudly directing the cutoff man. Because the catcher sees all the runners, they decide whether to cut the ball and redirect it ('cut two' to catch a trailing runner), cut and throw home, or let it come through. Clear, loud communication is the catcher's job here.",
        },
        {
          id: "baseball-8-09-q3",
          type: "Wild Pitch",
          challenge: `  Runner on third. The pitch sails to the backstop
  for a wild pitch, and the runner breaks for home.`,
          text: "How do the catcher and pitcher cover this play at the plate?",
          options: [
            "The catcher chases the ball and tries to tag the runner alone with no help",
            "The pitcher sprints to cover home while the catcher recovers the ball quickly and feeds it to the pitcher for the tag",
            "The first baseman covers home",
            "Nobody covers home; the run is conceded automatically",
          ],
          correctIndex: 1,
          explanation: "On a wild pitch or passed ball with a runner on third, the catcher cannot both retrieve the ball and cover the plate. The pitcher sprints in to cover home, the catcher hustles to the ball, and the catcher delivers a quick, accurate feed (often a firm toss or a hand-off) to the pitcher to apply the tag. This pitcher-covers-home play must be practiced so it happens automatically.",
        },
        {
          id: "baseball-8-09-q4",
          type: "Preparation",
          challenge: `  A catcher consistently freezes for a beat after
  the ball is hit, trying to figure out where to
  go, and arrives late to back-up and coverage spots.`,
          text: "What is the fix for a catcher who reacts a step late on coverage plays?",
          options: [
            "Move faster after deciding — there is no way to decide sooner",
            "Know the backup or coverage assignment before every pitch, so the body moves the instant the ball is in play instead of pausing to think",
            "Stay at home plate on every play to be safe",
            "Wait for the coach to call out where to go",
          ],
          correctIndex: 1,
          explanation: "The freeze comes from deciding after the ball is hit. Elite catchers run the pre-pitch checklist and already know their job — back up first, direct the cutoff, feed the pitcher covering home, field the bunt — before the pitch is thrown. With the decision made in advance, the catcher reacts instantly when the ball is in play. Anticipation, not raw speed, is what eliminates the late step.",
        },
      ],
    },
  },

  // ─── baseball-8-10: Calling the Game and Leadership ───────────────────────────
  {
    epochId: "baseball-8",
    wonder: {
      name: "Cooperstown",
      location: "Cooperstown, New York",
      era: "Modern",
      emoji: "🧠",
    },
    id: "baseball-8-10",
    order: 10,
    title: "Calling the Game and Leadership",
    subtitle: "Pitch selection, scouting, and earning the staff's trust",
    category: "sports",
    xp: 100,
    badge: { id: "baseball-8-badge-10", name: "Game Caller", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "The highest catching skill is invisible: calling the right pitch at the right moment and leading a staff that trusts you completely.",
      year: 2006,
      overview: [
        "Calling a game is the catcher's mental masterpiece. It means selecting which pitch to throw and where, on every pitch, to get the hitter out — accounting for the hitter's strengths and weaknesses, the count, the situation, what the pitcher throws well that day, and what has already been thrown in the at-bat and the game. A great game-caller sequences pitches so each one sets up the next: establishing a fastball to make a changeup deadly, working a hitter's weakness, and avoiding predictable patterns the hitter can sit on.",
        "Game-calling rests on preparation. Before the game, the catcher studies the opposing hitters — who chases breaking balls, who crushes inside fastballs, who can't catch up to velocity up. During the game, the catcher learns what's working: if the pitcher's curveball is sharp today, lean on it; if the command is off, simplify. The catcher also reads the hitter's adjustments at-bat to at-bat, remembering how each hitter was retired or got a hit last time and adjusting the plan.",
        "Above all, calling a game is about leadership and trust. The catcher must earn the pitcher's confidence so the pitcher commits fully to each pitch — a pitcher who second-guesses the call throws tentatively, and tentative pitches get hit. The catcher manages emotion too: settling a rattled pitcher, slowing the game down with a mound visit, projecting calm in a crisis. Yadier Molina's greatness was largely this invisible work. The complete catcher is part technician, part strategist, and part leader — the steady mind at the center of the defense.",
      ],
      technical: {
        title: "How to Call a Smart Game",
        body: [
          "Sequence with purpose: every pitch should set up a future pitch or exploit a known weakness. Establish the fastball to set up off-speed; change eye levels and locations; avoid falling into predictable patterns (e.g., always breaking ball with two strikes) that a smart hitter will anticipate. Pitch to the pitcher's strengths and the hitter's weaknesses, and respect the count — don't throw a hittable strike when ahead, don't nibble and walk hitters when behind.",
          "Lead the staff: build trust by knowing each pitcher's repertoire and temperament. Call pitches the pitcher believes in so they commit. Recognize when a pitcher is laboring and slow the game with a visit or a few wasted seconds. Keep the pitcher's emotions level after an error or a hard-hit ball. The catcher's calm and conviction become the pitcher's — and a confident pitcher executes better than a talented one who doubts.",
        ],
        codeExample: {
          label: "Game-Calling Principles",
          code: `  PREPARE:
  → Study hitters: chase? crush inside? velo up?
  → Know YOUR pitcher's best stuff TODAY

  SEQUENCE:
  ✓ Each pitch sets up the next
  ✓ Establish fastball → off-speed plays off it
  ✓ Change eye levels + locations
  ✓ Pitcher's strength vs hitter's weakness
  ✓ Respect the COUNT (ahead = expand; behind =
    don't nibble into a walk)
  ✗ Avoid predictable patterns (hitters sit on them)

  LEAD:
  → Call pitches the pitcher TRUSTS → full commit
  → Slow the game down when the pitcher labors
  → Keep emotions level — your calm = his calm

  Trust is the real pitch. A confident pitcher
  beats a talented but doubting one.`,
        },
      },
      incident: {
        title: "Yadier Molina — Calling Championship Games",
        when: "2006 & 2011 — St. Louis Cardinals World Series titles",
        where: "National Baseball Hall of Fame, Cooperstown, New York",
        impact: "Yadier Molina guided two World Series championship pitching staffs, with pitchers repeatedly crediting his game-calling and leadership as the reason they performed at their best — the clearest modern example of catching's invisible, decisive value.",
        body: [
          "Across two World Series titles and many postseason runs, Yadier Molina built a reputation as perhaps the finest game-caller of his generation. Pitchers spoke of shaking off his signs almost never, because his pitch selection and sense of the moment were so trusted. He knew opposing hitters cold, adjusted within games, and managed the emotions of his staff through the highest-pressure situations in the sport.",
          "Molina's career is the argument that the catcher's mind is the position's ultimate skill. He could receive, block, and throw with the best, but what made him a likely Hall of Famer was the invisible work: turning a pitching staff into more than the sum of its arms by calling smart games and earning total trust. For any young catcher, the lesson is that mastering the craft is necessary — but mastering the game, and leading people, is what makes a catcher great.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Study Hitters + Know the Pitcher", sub: "preparation", type: "system" },
          { label: "Select and Sequence Pitches", sub: "set up each pitch", type: "attacker" },
          { label: "Earn Trust, Manage Emotion", sub: "pitcher commits fully", type: "victim" },
          { label: "Staff Performs at Its Best", sub: "the invisible win", type: "result" },
        ],
      },
      timeline: [
        { year: 1968, event: "Johnny Bench combines elite defense with game-management leadership" },
        { year: 1990, event: "Advance scouting reports become standard, deepening game-calling preparation" },
        { year: 2006, event: "Yadier Molina helps call a World Series championship for St. Louis", highlight: true },
        { year: 2011, event: "Molina guides a second Cardinals title; his game-calling becomes legendary" },
        { year: 2015, event: "Data and scouting integrate into catcher game-planning while trust remains central" },
      ],
      keyTakeaways: [
        "Calling a game means selecting and sequencing pitches to exploit the hitter's weakness and set up future pitches",
        "Preparation is the foundation — study hitters before the game and learn what's working during it",
        "Avoid predictable patterns; respect the count; pitch to the pitcher's strengths and the hitter's weaknesses",
        "Leadership and trust are the highest skills — a confident, fully committed pitcher beats a talented but doubting one",
      ],
      references: [
        { title: "Baseball Hall of Fame — Catchers and Game-Calling", url: "https://baseballhall.org" },
        { title: "USA Baseball: Catcher Game Management", url: "https://www.usabaseball.com" },
        { title: "MLB: The Art of Calling a Game", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-8-10-q1",
          type: "Sequencing",
          challenge: `  A pitcher has a great fastball and a sharp
  changeup. The catcher wants to make the
  changeup as effective as possible.`,
          text: "How does sequencing make the changeup more effective?",
          options: [
            "Throw only changeups so the hitter sees a lot of them",
            "Establish the fastball first so the changeup, which looks like a fastball but arrives slower, disrupts the hitter's timing",
            "Never throw the fastball, to hide it",
            "Sequencing has no effect on a changeup",
          ],
          correctIndex: 1,
          explanation: "A changeup works by mimicking the fastball's arm action but arriving slower, breaking the hitter's timing. That only works if the hitter is geared up for the fastball — so the catcher establishes the fastball first to set up the changeup. Good sequencing means each pitch sets up the next; the changeup is deadly precisely because the fastball made the hitter expect speed.",
        },
        {
          id: "baseball-8-10-q2",
          type: "Adjusting",
          challenge: `  In warmups and the first inning, the pitcher's
  curveball is hanging and getting hit hard, but
  his fastball and slider are sharp.`,
          text: "How should the catcher adjust the game plan?",
          options: [
            "Keep calling the curveball equally — the plan shouldn't change",
            "Lean on what's working today (the fastball and slider) and minimize the curveball until it sharpens up",
            "Stop pitching entirely",
            "Call only curveballs to force the pitcher to fix it mid-game",
          ],
          correctIndex: 1,
          explanation: "Game-calling adapts to what's actually working that day. If the curveball is hanging but the fastball and slider are sharp, the catcher leans on the effective pitches and minimizes the one that's getting hit, perhaps testing the curveball again later in a safe count. Reading the pitcher's stuff in real time and adjusting is a core part of calling a smart game.",
        },
        {
          id: "baseball-8-10-q3",
          type: "Predictability",
          challenge: `  A catcher always calls a breaking ball on every
  two-strike count. A veteran hitter notices the
  pattern.`,
          text: "Why is a predictable pattern a problem when calling pitches?",
          options: [
            "It isn't — predictability is good",
            "A hitter who knows the pattern can sit on the expected pitch and be ready for it, neutralizing the pitcher's advantage",
            "Predictable patterns only matter in the minor leagues",
            "The umpire will call more strikes",
          ],
          correctIndex: 1,
          explanation: "Smart hitters look for patterns. If the catcher always calls a breaking ball with two strikes, the hitter can sit on it — anticipating and timing the pitch they know is coming. Good game-callers vary their sequences and locations so hitters can't predict them, occasionally throwing the 'wrong' pitch in a count precisely to stay unpredictable. Mixing it up keeps the hitter guessing.",
        },
        {
          id: "baseball-8-10-q4",
          type: "Leadership",
          challenge: `  A pitcher just gave up a long home run and is
  visibly rattled, rushing his next few pitches
  and missing badly.`,
          text: "What should the catcher do to help the pitcher recover?",
          options: [
            "Say nothing and let the pitcher figure it out alone",
            "Slow the game down — a mound visit or a deliberate pace to settle the pitcher's emotions and restore his focus and conviction",
            "Demand the pitcher throw harder",
            "Call for a pitch the pitcher doesn't trust",
          ],
          correctIndex: 1,
          explanation: "A rattled pitcher rushes and loses command, so the catcher's job is to slow things down — a mound visit, a calming word, or simply a deliberate pace — to settle the pitcher's emotions and restore focus. The catcher's calm becomes the pitcher's calm. Managing the emotional state of the staff is a defining leadership skill, and it's why pitchers credit great catchers like Yadier Molina for their best performances.",
        },
      ],
    },
  },
];
