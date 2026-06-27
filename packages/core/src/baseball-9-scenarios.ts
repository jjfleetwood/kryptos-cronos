import type { ScenarioConfig } from "./types";

// "Play the Position" Decision-Trainer scenarios for the First Base epoch.
// Each spot is a deterministic, fundamentals-based decision — the correct line
// is the proper first-base play taught in that stage, never a coin-flip outcome.
// correctIndex and explanation are stripped server-side before reaching the client.
export const baseball9Scenarios: Record<string, ScenarioConfig> = {
  "baseball-9-01": {
    intro: "You're learning what the first baseman actually does. Before the footwork and the picks, get the role itself straight — first base is the end of nearly every infield play.",
    spots: [
      {
        id: "bb9-01-s1", label: "The Anchor",
        situation: "A sharp ground ball is hit to the shortstop. He fields it cleanly deep in the hole.",
        prompt: "As the first baseman, what is your primary job on this play?",
        options: [
          "Get to the bag, present a target, and receive the throw to record the out",
          "Charge toward the shortstop to help field it",
          "Run to second base to start a double play",
          "Stay still and wait for the ball to come to you",
        ],
        correctIndex: 0,
        explanation: "Almost every infield ground ball ends with a throw to first. Your job is to beat the ball to the bag, give the thrower a clear target, and complete the out — which is why first basemen record more putouts than anyone.",
      },
      {
        id: "bb9-01-s2", label: "Bad Throw",
        situation: "The third baseman rushes and his throw is low, short-hopping the dirt in front of the bag.",
        prompt: "What separates a good defensive first baseman here?",
        options: [
          "Letting it go so it's scored an error on the thrower",
          "Scooping the short hop out of the dirt to turn the bad throw into an out",
          "Jumping straight up to avoid the ball",
          "Calling time before the ball arrives",
        ],
        correctIndex: 1,
        explanation: "A first baseman who picks throws out of the dirt converts teammates' errant throws into outs. That receiving skill — saving errors for the whole infield — is the single most valuable thing the position offers.",
      },
      {
        id: "bb9-01-s3", label: "Why Lefties",
        situation: "A youth coach is deciding where to develop a talented left-handed infielder.",
        prompt: "Why is first base one of the few infield spots that suits a left-hander well?",
        options: [
          "Left-handers can run the bases faster",
          "The position requires less throwing",
          "A lefty's glove is on the right hand — better for tags on pickoffs and throwing across to second",
          "There is no real reason; it's just tradition",
        ],
        correctIndex: 2,
        explanation: "A left-handed first baseman wears the glove on the infield (right) side, which helps apply pickoff tags and lets him throw across to second to start a double play without first turning his body.",
      },
      {
        id: "bb9-01-s4", label: "The Stereotype",
        situation: "An old saying claims first base is where you 'hide' a slow slugger who can't field.",
        prompt: "What does a Gold Glove first baseman like Freddie Freeman prove about that idea?",
        options: [
          "It's correct — first base defense doesn't matter",
          "First base is a position to be mastered; soft hands, scooping, and steadiness save real runs",
          "Only home runs matter at first base",
          "Defense at first base can't be measured",
        ],
        correctIndex: 1,
        explanation: "Elite first-base defense — picking throws, footwork around the bag, and dependable hands — saves runs and settles an entire infield. First base is a craft, not a place to hide a bat.",
      },
    ],
  },

  "baseball-9-02": {
    intro: "Receiving a throw starts with the feet, not the glove. Walk through the footwork sequence at the bag — find the base, read the throw, then steal a step with the stretch.",
    spots: [
      {
        id: "bb9-02-s1", label: "Setup",
        situation: "A ground ball is hit to short. You sprint to the bag and want to set up to receive the throw.",
        prompt: "How should you find and set up on the base?",
        options: [
          "Stare down at your feet until you're sure they're on the bag",
          "Square to the thrower and find the bag by feel, heels at the front edge, glove up as a target",
          "Stand a few feet behind the bag to be safe",
          "Plant both feet on top of the base",
        ],
        correctIndex: 1,
        explanation: "Find the bag by feel — heels at the front edge — while keeping your eyes on the thrower and presenting a target. Looking down at your feet costs you the read on the throw.",
      },
      {
        id: "bb9-02-s2", label: "Foot Choice",
        situation: "You're a right-handed first baseman taking a routine throw and need to pick which foot to anchor.",
        prompt: "Which foot anchors the bag for maximum reach?",
        options: [
          "The right (throwing-hand-side) foot, striding to the throw with the left foot",
          "The left (glove-side) foot, striding with the right",
          "Both feet on the bag at once",
          "Whichever foot lands there first — it doesn't matter",
        ],
        correctIndex: 0,
        explanation: "A right-handed first baseman anchors the right (throwing-hand-side) foot on the bag and strides toward the throw with the glove-side (left) foot — this maximizes reach and keeps you balanced for the stretch.",
      },
      {
        id: "bb9-02-s3", label: "Read First",
        situation: "An eager first baseman slaps a foot on the bag and reaches out full-length before the throw is even released.",
        prompt: "What's wrong with committing the stretch that early?",
        options: [
          "Nothing — reaching as early as possible is the goal",
          "It's illegal to touch the base before the throw",
          "Committing early locks you out of adjusting to an off-line throw; read the throw's direction first, then stretch to meet it",
          "It makes the throw arrive more slowly",
        ],
        correctIndex: 2,
        explanation: "Stretch toward the throw, not before it. If you commit a full reach early and the throw is off-line, you're handcuffed. Read where the ball is going, then extend to meet it.",
      },
      {
        id: "bb9-02-s4", label: "Pulled Off",
        situation: "A throw sails wide, clearly pulling you off the bag as a fast runner closes in.",
        prompt: "What's your top priority?",
        options: [
          "Keep a foot on the bag at all costs, even if the ball gets past you",
          "Catch the ball first — come off the bag to secure it, then tag the runner or get back to the base",
          "Let the ball go so it isn't an error on you",
          "Jump straight up no matter where the throw is",
        ],
        correctIndex: 1,
        explanation: "Catching the ball always comes first. An uncaught throw lets the runner advance an extra base; a missed touch of the bag only costs the one out. Secure it, then try the tag.",
      },
    ],
  },

  "baseball-9-03": {
    intro: "The pick is the first baseman's superpower. These spots are all about digging throws out of the dirt — soft hands, hop reads, and a body behind the ball.",
    spots: [
      {
        id: "bb9-03-s1", label: "Soft Hands",
        situation: "A throw short-hops in front of you. You stab at it rigidly and it pops out of the glove.",
        prompt: "What technique secures the short hop?",
        options: [
          "Stab harder and faster next time",
          "Close the glove before the ball arrives",
          "Stay low and 'give' with the glove as the ball arrives so it settles into the pocket",
          "Turn your head away at the last instant",
        ],
        correctIndex: 2,
        explanation: "Short hops are picked with soft, giving hands — a slight recoil that absorbs the ball's energy. A stiff, stabbing motion makes the ball ricochet out. Soft hands are the heart of the scoop.",
      },
      {
        id: "bb9-03-s2", label: "Hop Read",
        situation: "A throw is bouncing toward you. You can take it on a big readable rise, smother it right out of the dirt, or get caught reaching at an awkward middle bounce.",
        prompt: "Which hop is most dangerous, and how do you handle it?",
        options: [
          "The long hop — close your eyes and hope",
          "The in-between hop — read the bounce early to turn it into a long hop or a smothered short hop",
          "The short hop — it's impossible to field, so back up",
          "All hops are identical; just stick the glove out",
        ],
        correctIndex: 1,
        explanation: "The in-between hop handcuffs you at an awkward height. Read it early and adjust your feet so it becomes either a long hop (caught as it rises) or a short hop (smothered out of the dirt).",
      },
      {
        id: "bb9-03-s3", label: "Body Behind It",
        situation: "A throw is in the dirt and slightly to your side. You reach across with only the glove and miss; the ball skips toward the fence.",
        prompt: "How could you have kept that miss in front of you?",
        options: [
          "Reach with just the glove and hope it sticks",
          "Shift your feet to get your body and chest behind the ball as a backstop",
          "Turn your back to the throw",
          "Hurdle over the ball",
        ],
        correctIndex: 1,
        explanation: "Whenever you can, move your feet to get the chest behind a low throw. Even a missed pick then stays close in front instead of skipping away and letting the runner advance.",
      },
      {
        id: "bb9-03-s4", label: "Game on the Line",
        situation: "Two outs, runner on second. An infielder makes a low, rushed throw that bounces in front of the bag and you pick it cleanly.",
        prompt: "Why does a pick like this matter so much?",
        options: [
          "It doesn't — it's just one routine out",
          "It only helps your personal stats",
          "It ends an inning an error would have extended, and lets infielders throw aggressively knowing low throws get caught",
          "Picks have no effect on the rest of the infield",
        ],
        correctIndex: 2,
        explanation: "A clean two-out pick ends the inning an error would have prolonged, preventing extra bases and runs — and a first baseman known for it lets the whole infield throw with confidence.",
      },
    ],
  },

  "baseball-9-04": {
    intro: "A runner on first sets off a quiet contest. Hold him close, take the pickoff cleanly, then get off the bag to field — these are the holding-game decisions.",
    spots: [
      {
        id: "bb9-04-s1", label: "The Tag",
        situation: "On a pickoff throw you catch the ball and swipe a tag up high near the diving runner's shoulders. He's safe.",
        prompt: "Where should the pickoff tag actually go?",
        options: [
          "Quick and low, sweeping to the inside corner of the bag where the diving hand returns",
          "Up high near the shoulders — it's easier to reach",
          "On the runner's back foot",
          "Anywhere on the body works equally well",
        ],
        correctIndex: 0,
        explanation: "A runner diving back reaches for the inside corner of the bag with his hand. The tag must be quick and low — sweeping down to that corner to beat the returning hand. Swiping high misses what's arriving.",
      },
      {
        id: "bb9-04-s2", label: "Catch First",
        situation: "Focused on a lightning-fast tag, you reach for the runner before fully securing the throw — and the ball pops loose.",
        prompt: "What's the correct priority on a pickoff?",
        options: [
          "Tag as fast as possible, even before the catch is clean",
          "Block the bag with your body",
          "Secure the catch first, then apply the quick, low tag",
          "Immediately throw to second",
        ],
        correctIndex: 2,
        explanation: "Just like a catcher on a tag play: catch and secure the ball first, then tag. Reaching to tag before the catch is clean drops balls and keeps the runner safe — or worse. No ball, no out.",
      },
      {
        id: "bb9-04-s3", label: "Release to Field",
        situation: "You hold the runner on, the pitcher delivers home, and you stay anchored at the bag. A grounder rolls through the big gap on the right side.",
        prompt: "What should you have done once the pitch went home?",
        options: [
          "Stay glued to the bag the entire pitch",
          "Release off the bag into fielding position immediately to restore your range",
          "Sprint toward home plate",
          "Keep both feet on the base",
        ],
        correctIndex: 1,
        explanation: "Holding a runner pulls you toward the line and shrinks your range. The instant the pitcher commits home (no pickoff coming), release off the bag into fielding position or you leave a hole on the right side.",
      },
      {
        id: "bb9-04-s4", label: "Hold or Play Off",
        situation: "Late in a blowout, a slow runner is on first and the coach tells you to play behind him instead of holding.",
        prompt: "Why play behind the runner here?",
        options: [
          "Holding runners is against the rules in a blowout",
          "It makes the runner slower",
          "There's never a reason to play behind a runner",
          "Playing behind restores full fielding range; when a steal barely matters, range is worth more than a short lead",
        ],
        correctIndex: 3,
        explanation: "Holding shrinks your range and opens the right-side hole. With a slow runner, a big lead, or a base that doesn't matter, you play behind to keep full range — preventing a hit through the hole beats keeping the lead short.",
      },
    ],
  },

  "baseball-9-05": {
    intro: "First base isn't about being the biggest body on the field. These spots are about the physical traits that actually save outs — flexibility, agility, and reach.",
    spots: [
      {
        id: "bb9-05-s1", label: "The Foundation",
        situation: "A tall, strong first baseman can't stretch far for throws and can't get low enough to pick short hops because he's very stiff.",
        prompt: "Which physical quality is most directly limiting his defense?",
        options: [
          "Lack of size — he needs to be bigger",
          "Lack of flexibility — the deep stretch and low pick depend on hip, hamstring, and groin flexibility",
          "Lack of straight-line running speed",
          "Lack of grip strength",
        ],
        correctIndex: 1,
        explanation: "Strength isn't the issue — flexibility is. The deep stretch and the ability to get low and stay low for picks both require hip, hamstring, and groin flexibility. It's the position's most underrated physical asset.",
      },
      {
        id: "bb9-05-s2", label: "Reach",
        situation: "A coach is deciding where to play a tall athlete with a long wingspan but only average foot speed.",
        prompt: "Why does a long wingspan specifically help at first base?",
        options: [
          "It makes the player run faster",
          "It only matters for hitting",
          "Greater reach helps receive off-line and stretched throws, extending farther to catch the ball sooner",
          "It has no effect at first base",
        ],
        correctIndex: 2,
        explanation: "A longer reach lets a first baseman extend farther on the stretch and corral off-line throws, catching the ball a fraction sooner. It's a real edge — paired with the flexibility to use it.",
      },
      {
        id: "bb9-05-s3", label: "Agility",
        situation: "You need to find the bag without looking, shuffle into position, and react laterally to a ball hit into the 3-hole.",
        prompt: "Which quality supports all of these footwork tasks?",
        options: [
          "Pure upper-body strength",
          "Long-distance endurance",
          "Agility — quick, light feet and lateral quickness",
          "Bat speed",
        ],
        correctIndex: 2,
        explanation: "Finding the bag by feel, setting up, and ranging to a grounder all depend on agility — light, quick feet and lateral quickness — plus single-leg strength for the stretch. First base is an athletic position.",
      },
      {
        id: "bb9-05-s4", label: "Old vs. New",
        situation: "A coach insists on always parking the biggest, slowest, strongest hitter at first base no matter how immobile he is.",
        prompt: "What did modern fielding metrics reveal about that approach?",
        options: [
          "It's optimal — size is all that matters at first",
          "Slow players are always better defenders",
          "First-base defense can't be measured, so it doesn't matter",
          "First-base defense saves real runs, so flexible, agile first basemen meaningfully outperform stiff ones",
        ],
        correctIndex: 3,
        explanation: "Advanced metrics showed that picks, stretches, and range save real runs. A mobile, flexible first baseman out-defends a bigger, stiffer one — which is why modern teams train first basemen like athletes.",
      },
    ],
  },

  "baseball-9-06": {
    intro: "First basemen field their own grounders too — and can start the slickest double play in the book. Work through range to the right and the 3-6-3 versus the 3-6-1.",
    spots: [
      {
        id: "bb9-06-s1", label: "Your Range",
        situation: "A ground ball is hit hard into the gap between you and the second baseman — the '3-hole.'",
        prompt: "How should you approach a ball hit into your primary range?",
        options: [
          "Leave every ball for the second baseman",
          "Get your body in front, field it out front with the glove down, and make a controlled play",
          "Backhand it stabbing to the side without moving your feet",
          "Let it go and cover the bag instead",
        ],
        correctIndex: 1,
        explanation: "The 3-hole is the first baseman's primary range. Field it like any infielder — body in front, glove down, ball out front — then read whether to take it to the bag yourself or flip to the covering pitcher.",
      },
      {
        id: "bb9-06-s2", label: "3-6-3",
        situation: "Runner on first, double play on. You field the grounder cleanly near the bag and you can clearly beat the runner back to first.",
        prompt: "How does the 3-6-3 double play finish?",
        options: [
          "Throw to the shortstop covering second for the force, then hustle back to first to take the return throw",
          "Tag first yourself, then throw to third",
          "Throw home, then to second",
          "Step on first, then throw to the catcher",
        ],
        correctIndex: 0,
        explanation: "3-6-3: you (3) field and throw to the shortstop (6) covering second for the force, then race back to first (3) to take the return throw for the second out. It needs an accurate throw to the bag and quick feet back.",
      },
      {
        id: "bb9-06-s3", label: "3-6-1",
        situation: "Same double-play chance, but you fielded the ball deep in the hole and you can't get back to first in time.",
        prompt: "Who covers first base to finish the play (the 3-6-1)?",
        options: [
          "The catcher sprints down to cover first",
          "The second baseman covers first",
          "The pitcher covers first and takes the relay throw",
          "Nobody — you concede the second out",
        ],
        correctIndex: 2,
        explanation: "When you're too deep to get back, the pitcher (1) covers first. You field (3), throw to the shortstop (6) at second for the force, and the shortstop relays to the pitcher now on the bag.",
      },
      {
        id: "bb9-06-s4", label: "The Key Read",
        situation: "You field a grounder with a runner on first and a double play in play. Everything hinges on one judgment.",
        prompt: "What's the key read that decides 3-6-3 versus 3-6-1?",
        options: [
          "Which umpire is watching the bag",
          "Whether you can beat the runner back to first — if yes, take it yourself (3-6-3); if not, the pitcher covers (3-6-1)",
          "How hard the ball was hit, regardless of position",
          "Whether the wind is blowing in or out",
        ],
        correctIndex: 1,
        explanation: "The decision is simply: can I beat the runner back to the bag? Yes → 3-6-3. No → the pitcher must cover (3-6-1). You and the pitcher must know your responsibilities before the pitch; hesitation kills the play.",
      },
    ],
  },

  "baseball-9-07": {
    intro: "When the bunt sign is on, the first baseman attacks. These spots cover charging the sacrifice, getting the lead out, and who covers the bag behind you.",
    spots: [
      {
        id: "bb9-07-s1", label: "Charge",
        situation: "Runner on first, no outs, and the batter squares to bunt. The ball is dropped softly up the first-base line.",
        prompt: "What's your first move as the first baseman?",
        options: [
          "Stay back at the bag and wait for the ball to stop",
          "Charge hard, field the bunt cleanly, and look to get the lead runner if you have a play",
          "Let the pitcher field everything",
          "Retreat toward the outfield grass",
        ],
        correctIndex: 1,
        explanation: "On a bunt you charge aggressively. Field it cleanly, then check the lead runner — getting the out at second beats settling for the easy out at first, but only take the lead out if the play is genuinely there.",
      },
      {
        id: "bb9-07-s2", label: "Who Covers",
        situation: "You've charged off the bag to field the bunt, leaving first base unmanned with a runner to retire there.",
        prompt: "Who is responsible for covering first base behind you?",
        options: [
          "Nobody — the out at first is conceded",
          "The shortstop sprints all the way over",
          "The second baseman rotates over to cover first",
          "The center fielder comes in to cover",
        ],
        correctIndex: 2,
        explanation: "When the first baseman charges the bunt, the second baseman rotates over to cover first base. That coverage is what lets you attack the ball aggressively without leaving the bag undefended.",
      },
      {
        id: "bb9-07-s3", label: "The Sure Out",
        situation: "You charge a bunt with a runner on first. The ball is fielded a beat late and the lead runner already has second beaten.",
        prompt: "What's the disciplined play?",
        options: [
          "Force a low-percentage throw to second anyway",
          "Take the sure out at first rather than risk a wild throw that lets everyone advance",
          "Hold the ball and run at the runner",
          "Throw home for no reason",
        ],
        correctIndex: 1,
        explanation: "If the lead runner is clearly safe, take the certain out at first. A rushed, low-percentage throw to second can sail and let both runners advance — never trade a sure out for a long shot.",
      },
      {
        id: "bb9-07-s4", label: "Communication",
        situation: "A bunt trickles into no-man's-land between you, the pitcher, and the catcher.",
        prompt: "What prevents this play from falling apart?",
        options: [
          "Everyone charging silently and hoping",
          "Loud communication — one fielder calls the ball and the others tell him where to throw",
          "The slowest fielder taking it",
          "Letting the ball roll foul on its own",
        ],
        correctIndex: 1,
        explanation: "Bunt defense lives on communication. One fielder loudly calls the ball so two players don't collide or both pull off it, and teammates direct the throw ('one!' / 'two!') since the fielder's back is often to the play.",
      },
    ],
  },

  "baseball-9-08": {
    intro: "When the ball goes to the outfield, the first baseman has a job too. Work through cutoff alignment, relays, and the backups that stop the extra base.",
    spots: [
      {
        id: "bb9-08-s1", label: "The Cutoff",
        situation: "A single is laced to right field with a runner trying to score from second. The throw is coming home.",
        prompt: "What is the first baseman's classic cutoff role here?",
        options: [
          "Cover first base and ignore the throw",
          "Line up between the right fielder and home plate as the cutoff man for the throw to the plate",
          "Run into the outfield to field the ball himself",
          "Stand on the pitcher's mound",
        ],
        correctIndex: 1,
        explanation: "On throws coming home from the right side, the first baseman is the cutoff man — lining up between the outfielder and the plate so he can cut and redirect the throw if the runner can't be gotten at home.",
      },
      {
        id: "bb9-08-s2", label: "Line It Up",
        situation: "You're the cutoff man on a throw to the plate, drifting around with no clear alignment.",
        prompt: "How should you position yourself as the cutoff?",
        options: [
          "Stand wherever feels comfortable",
          "Get directly in line between the outfielder and the target base, offering a chest-high target with arms up",
          "Stand off to the side so the throw goes past you",
          "Crouch down low and stay quiet",
        ],
        correctIndex: 1,
        explanation: "A good cutoff lines up directly between the outfielder and the target base and shows hands up at chest height. Proper alignment lets you catch and redirect the throw — or let it through to the plate — in one motion.",
      },
      {
        id: "bb9-08-s3", label: "Let It Through",
        situation: "You're the cutoff man and the throw home is online and strong, with the runner clearly going to be out at the plate.",
        prompt: "What should you do with the throw?",
        options: [
          "Always cut it off no matter what",
          "Let the accurate throw go through to the catcher and only cut it if the play at the plate is hopeless",
          "Catch it and run it to the mound",
          "Throw it into the stands",
        ],
        correctIndex: 1,
        explanation: "The cutoff reads the play. If the throw is online and the runner is out, let it through to the catcher. You only cut it to stop trailing runners from advancing when the lead runner can't be retired — often on the catcher's call.",
      },
      {
        id: "bb9-08-s4", label: "Backup Duty",
        situation: "A ball is hit to the outfield with a runner on second who's likely to be thrown out at third — first base is empty.",
        prompt: "Where might the first baseman go when he's away from the bag?",
        options: [
          "Stand still at first base regardless",
          "Back up a base on the throw so an overthrow doesn't let runners advance further",
          "Argue with the umpire",
          "Sit down in foul territory",
        ],
        correctIndex: 1,
        explanation: "When not holding the bag or acting as cutoff, the first baseman backs up bases on throws. Backing up an overthrow keeps an errant relay from rolling away and giving the offense another base — the unglamorous part of the job.",
      },
    ],
  },

  "baseball-9-09": {
    intro: "The best first basemen think before the pitch. These spots are pure situational IQ — tag versus bag, where to position, and knowing the play before it happens.",
    spots: [
      {
        id: "bb9-09-s1", label: "Force or Tag",
        situation: "Bases empty, a batter hits a grounder to the second baseman, who throws to you at first.",
        prompt: "Do you need to tag the batter-runner or just touch the base?",
        options: [
          "You must tag the runner before he reaches the bag",
          "It's a force play — just touch first base with the ball before the runner arrives",
          "Both a tag and a touch are required",
          "You must throw to second first",
        ],
        correctIndex: 1,
        explanation: "The batter-runner is forced to first, so simply touching the bag with possession records the out — no tag needed. Knowing force vs. tag instantly is core first-base IQ.",
      },
      {
        id: "bb9-09-s2", label: "Tag Needed",
        situation: "A wild pickoff throw pulls you well off the bag and a runner is steaming back to first, no force in effect.",
        prompt: "What must you do to record the out now?",
        options: [
          "Touch the bag — it's still a force",
          "Apply a tag to the runner, since you're off the base and there's no force",
          "Throw to second immediately",
          "Call time to reset",
        ],
        correctIndex: 1,
        explanation: "Once you're off the bag with no force, the out requires a tag on the runner. Reading whether the situation calls for a touch or a tag — and tagging low and quick — is the difference between an out and a blown play.",
      },
      {
        id: "bb9-09-s3", label: "Know the Play",
        situation: "Runner on second, one out, infield at normal depth. Before the pitch you run through what you'll do on a grounder.",
        prompt: "What's the mark of a high-IQ first baseman here?",
        options: [
          "Wait until the ball is hit to start thinking",
          "Know the outs, runners, and your responsibility before the pitch, so you act without hesitating",
          "Always throw home no matter what",
          "Assume every ball will be hit elsewhere",
        ],
        correctIndex: 1,
        explanation: "Great defenders pre-plan every pitch: outs, runners, where the play goes, who covers. Knowing the situation before the ball is hit removes the hesitation that turns routine plays into safe calls.",
      },
      {
        id: "bb9-09-s4", label: "Positioning",
        situation: "Late innings, protecting a one-run lead, a pull-hitting lefty at the plate with first base open.",
        prompt: "How should your positioning reflect the situation?",
        options: [
          "Always stand the exact same spot regardless of hitter or score",
          "Adjust your depth and lateral position based on the hitter, the count, and whether you need to guard the line",
          "Play as deep as physically possible every time",
          "Stand directly on the bag at all times",
        ],
        correctIndex: 1,
        explanation: "Smart positioning shifts with the hitter's tendencies, the count, and the game state — guarding the line late to stop a double, or holding a runner when the situation demands. Where you stand before the pitch wins outs.",
      },
    ],
  },

  "baseball-9-10": {
    intro: "Bring it all together. These spots draw on everything — receiving, footwork, picks, coverages, and the mindset that makes a first baseman the cornerstone of an infield.",
    spots: [
      {
        id: "bb9-10-s1", label: "Signature Skill",
        situation: "A young player asks which single defensive skill will make him most valuable at first base.",
        prompt: "What's the best answer?",
        options: [
          "Hitting home runs",
          "Picking throws out of the dirt — turning teammates' bad throws into outs",
          "Being the tallest player on the field",
          "Arguing balls and strikes",
        ],
        correctIndex: 1,
        explanation: "The pick is the position's signature skill. A first baseman who scoops short hops saves errors for the whole infield and lets everyone throw with confidence — the fastest way to become genuinely valuable on defense.",
      },
      {
        id: "bb9-10-s2", label: "Footwork First",
        situation: "A coach is teaching a brand-new first baseman where to begin.",
        prompt: "What should come before glovework in the lesson?",
        options: [
          "Bat speed drills",
          "Footwork — moving to the bag, finding it by feel, and setting up to receive",
          "Memorizing the rulebook cover to cover",
          "Long-distance running",
        ],
        correctIndex: 1,
        explanation: "Footwork comes before the glove. Master moving to the bag, finding it by feel, and setting up — and the difficult catches become routine. Good footwork is the foundation everything else is built on.",
      },
      {
        id: "bb9-10-s3", label: "The Cornerstone",
        situation: "You reflect on what a Gold Glove first baseman like Freddie Freeman brings to a championship infield.",
        prompt: "What makes a great first baseman the 'cornerstone' of a defense?",
        options: [
          "He records the fewest putouts so he can rest",
          "His reliable, soft-handed receiving and steadiness let the whole infield throw and play with confidence",
          "He never has to touch the ball",
          "He only matters when he's batting",
        ],
        correctIndex: 1,
        explanation: "A dependable first baseman is the steady receiver every throw is aimed at. His soft hands, footwork, and consistency settle the entire infield — the anchor the rest of the defense is built around.",
      },
      {
        id: "bb9-10-s4", label: "Judge the Process",
        situation: "You make all the right reads on a tough relay, but a perfect throw still beats your tag and the run scores.",
        prompt: "How should you evaluate your play?",
        options: [
          "It was a bad play because the run scored",
          "Good process — you made the correct reads and execution; judge by the decisions and fundamentals, not one result",
          "You should stop playing the position",
          "Results are all that matter in baseball",
        ],
        correctIndex: 1,
        explanation: "Mastery means judging your process, not a single outcome. Sound footwork, correct reads, and clean fundamentals win out over a season — the mindset that keeps good defenders improving.",
      },
    ],
  },
};
