import type { ScenarioConfig } from "./types";

// "Behind the Plate" Decision-Trainer scenarios for the Catcher epoch (baseball-8).
// Each spot is a deterministic, skill-based catching decision — the correct line is
// the sound fundamental taught in that stage, never a luck-of-the-draw outcome.
// correctIndex and explanation are stripped server-side before reaching the client.
export const baseball8Scenarios: Record<string, ScenarioConfig> = {
  "baseball-8-01": {
    intro: "You're the field general behind the plate. Before and after every pitch, you're the one player who sees the whole field — so you're the one who has to think.",
    spots: [
      {
        id: "bb8-01-s1", label: "Pre-Pitch",
        situation: "Runner on second, one out, tie game, late innings. You're crouching in to give the sign.",
        prompt: "What should you have already processed before you put down a sign?",
        options: [
          "Just the pitch type — location can wait until the pitcher starts his motion",
          "Score, outs, the runner's speed, where the play goes if it's hit, and your own backup job",
          "Nothing — call the pitcher's best pitch every time regardless",
          "Only whether to throw a fastball, since no one steals from second",
        ],
        correctIndex: 1,
        explanation: "The catcher runs the full checklist every pitch: score, outs, who's on and how fast, the pitch and why, where the ball goes if hit, and the backup job. With a runner on second in a tie game late, that thinking drives pitch selection, defensive positioning, and your own responsibilities.",
      },
      {
        id: "bb8-01-s2", label: "Ball in Play",
        situation: "Bases empty. The batter hits a routine ground ball to the second baseman, who sets to throw to first.",
        prompt: "Where do you go the instant the ball is hit?",
        options: [
          "Stay on home plate in case of an inside-the-park play",
          "Cover second base in case of an overthrow",
          "Sprint down the first-base line in foul territory to back up the throw to first",
          "Jog to the mound to talk to the pitcher",
        ],
        correctIndex: 2,
        explanation: "Bases empty, grounder to the right side or anywhere on the infield: the catcher hustles down the first-base line to back up the throw. If it gets away from the first baseman, the backing-up catcher keeps the batter-runner off second. The catcher is never a spectator.",
      },
      {
        id: "bb8-01-s3", label: "Who Leads",
        situation: "A new player asks why the catcher — not the shortstop or pitcher — is the 'field general' of the defense.",
        prompt: "What makes the catcher uniquely positioned to run the defense?",
        options: [
          "The catcher is the only player facing the entire field and is part of every single pitch",
          "The catcher wears the most equipment, so they're the most protected",
          "The catcher is always the best hitter, which earns respect",
          "The catcher stands closest to the umpire and hears the calls first",
        ],
        correctIndex: 0,
        explanation: "The catcher faces all eight teammates and the whole field, and is involved in every pitch — calling it, receiving it, reacting to whatever follows. That total view is why the catcher positions fielders, reminds teammates of the situation, and quarterbacks cutoffs. No other position has both the perspective and the involvement.",
      },
      {
        id: "bb8-01-s4", label: "Hidden Value",
        situation: "Two catchers have nearly identical arms and receiving skills. One hits .230, the other .240, yet coaches call the .230 catcher far more valuable.",
        prompt: "Why might the weaker-hitting catcher be worth more?",
        options: [
          "Batting average is all that matters, so the coaches are simply wrong",
          "The .230 catcher must be a faster runner",
          "Defense at catcher is unimportant, so it's just luck",
          "Game-calling, pitcher management, blocking, framing, positioning, and leadership create value that never shows up in batting average",
        ],
        correctIndex: 3,
        explanation: "A catcher's biggest contributions — calling a smart game, handling the staff, blocking, framing, positioning, leading — barely register in offensive stats. A catcher prized for everything they control behind the plate can be hugely valuable with a modest bat.",
      },
    ],
  },

  "baseball-8-02": {
    intro: "Everything starts from the stance. Match the setup to the situation — comfort and framing when you can afford it, athleticism and readiness when you can't.",
    spots: [
      {
        id: "bb8-02-s1", label: "Runner On",
        situation: "Runner on first, one out, count 1-1. You're setting up to receive the next pitch.",
        prompt: "Which stance fits this situation?",
        options: [
          "The relaxed primary stance — comfort gives the best target",
          "The athletic secondary stance — hips up, ready to pop and throw or drop and block",
          "A two-knee setup on the ground for maximum stability",
          "It doesn't matter; stance has no effect with runners on",
        ],
        correctIndex: 1,
        explanation: "With a runner on, you must be ready to throw if he steals or block if the pitch is in the dirt. That calls for the athletic secondary stance — hips raised, weight ready to move. The relaxed primary and bases-empty one-knee setups trade away mobility for comfort, the wrong trade when a runner can advance.",
      },
      {
        id: "bb8-02-s2", label: "Two Strikes",
        situation: "Bases empty, but the count is 0-2. The pitcher's out pitch is a curveball that often bounces in the dirt.",
        prompt: "Why get more athletic with two strikes even though no one is on base?",
        options: [
          "To intimidate the hitter with body language",
          "To give the pitcher a deliberately higher target",
          "A swinging third strike in the dirt must be blocked or thrown to first — the at-bat isn't over until the ball is secured",
          "No reason; with bases empty the stance never changes",
        ],
        correctIndex: 2,
        explanation: "On a two-strike pitch in the dirt that the batter swings at, he isn't automatically out — with first base open or two outs he can run if you don't catch it cleanly. You must block it or be ready to throw to first to finish the strikeout, which needs the athletic stance even with the bases empty.",
      },
      {
        id: "bb8-02-s3", label: "One-Knee Trap",
        situation: "A youth catcher loves the one-knee stance and wants to use it on every pitch — including with a runner on second.",
        prompt: "What's the main drawback of the one-knee stance with a runner on?",
        options: [
          "It's illegal to catch on one knee with runners on",
          "It gives the pitcher too low a target",
          "There's no drawback — one knee is always better",
          "It reduces mobility, making it harder to block balls in the dirt and to pop up and throw out a stealer",
        ],
        correctIndex: 3,
        explanation: "The one-knee stance improves low-pitch framing and saves the legs, which is why it's used bases-empty. But getting out of one knee to block or throw is slower and less explosive. With runners on, that lost quickness can cost a base or a run, so catchers switch to an athletic two-foot stance.",
      },
      {
        id: "bb8-02-s4", label: "Hand Safety",
        situation: "Bases empty. A young catcher rests the bare throwing hand on the ground out in front, next to the glove, while receiving.",
        prompt: "Why is exposing the bare hand in front of the body a problem?",
        options: [
          "A foul tip or pitch can break the exposed hand — it should be tucked behind the back (or behind the glove with runners on)",
          "It slows the transfer to throw",
          "It's against the rules to put the hand on the ground",
          "It tips the pitch location to the batter",
        ],
        correctIndex: 0,
        explanation: "An exposed bare hand out front is a common cause of broken fingers from foul tips. Bases empty, tuck it behind your back; with runners on, keep it loosely behind the glove, ready to transfer but shielded. Protecting the throwing hand is a fundamental safety habit.",
      },
    ],
  },

  "baseball-8-03": {
    intro: "Receiving is your most frequent skill. Framing turns borderline pitches into strikes — quietly, the way a strike actually looks, never by faking one.",
    spots: [
      {
        id: "bb8-03-s1", label: "Don't Yank",
        situation: "You catch a borderline low strike, then jerk the glove up six inches toward the middle to 'show' the umpire it was a strike.",
        prompt: "Why is that big upward yank counterproductive?",
        options: [
          "It's correct — bigger movements convince the umpire",
          "Umpires read the obvious movement as you admitting it was a ball, and it can cost the call",
          "It's illegal and results in an automatic ball",
          "It only matters on high pitches, not low ones",
        ],
        correctIndex: 1,
        explanation: "Real framing is quiet. A jerky yank tells the umpire that even the catcher didn't think it was a strike where it was caught. Skilled receivers catch the ball deep, present it with a small controlled turn, and stick it still — selling the strike with calm, not exaggeration.",
      },
      {
        id: "bb8-03-s2", label: "Let It Travel",
        situation: "An outside pitch is on the way, still drifting away from the zone as it reaches you.",
        prompt: "How should you receive it to frame it best?",
        options: [
          "Reach out front and catch it early — quicker is always better",
          "Stab at it hard to stop its movement",
          "Let the ball travel and catch it deep, keeping the glove closer to the zone instead of dragging it outward",
          "Turn your glove over before the ball arrives",
        ],
        correctIndex: 2,
        explanation: "An outside pitch is moving away from the zone. Reaching out catches it at its farthest point and drags the glove outward. Letting it travel and catching it deep keeps the reception nearer the zone, so you can present it as a strike with a quiet, controlled glove.",
      },
      {
        id: "bb8-03-s3", label: "Master First",
        situation: "A coach says: 'If you're going to get great at framing one part of the zone, master this part first.'",
        prompt: "Which part of the zone is most valuable to learn to frame?",
        options: [
          "The high pitch, because it's easy to see",
          "The low strike at the knees — the hardest to get called and the most valuable to steal",
          "The middle of the zone, which is already an automatic strike",
          "Pitches a foot outside, to fool the umpire",
        ],
        correctIndex: 1,
        explanation: "Low strikes at the knees are the hardest for umpires to call and therefore the most valuable to frame. Elite receivers turn the glove over and stick the pitch at the bottom of the zone instead of letting it pull them down. Pitches clearly out of the zone can't and shouldn't be framed.",
      },
      {
        id: "bb8-03-s4", label: "Stay Still",
        situation: "Two catchers receive the same borderline pitch. One sets the target late and is still drifting his head and body as the ball arrives; the other is set early and dead still.",
        prompt: "Why does the still catcher get more of these called strikes?",
        options: [
          "A quiet head and body make a borderline pitch look like a strike; a moving catcher makes a strike look like a ball",
          "Movement has no effect — only glove position matters",
          "The moving catcher actually frames better",
          "Stillness only matters with two strikes",
        ],
        correctIndex: 0,
        explanation: "Set the target early, then go quiet. A still head and body let the umpire focus on a clean, controlled reception. Lunging or drifting late signals doubt and makes even a true strike look like a ball — stillness sells strikes.",
      },
    ],
  },

  "baseball-8-04": {
    intro: "A blocked ball is a saved base or a saved run. You won't catch every pitch in the dirt — but you can keep it in front of you.",
    spots: [
      {
        id: "bb8-04-s1", label: "Block, Don't Catch",
        situation: "A pitch bounces in the dirt right in front of the plate. A young catcher stabs at it with the glove and it deflects off to the side.",
        prompt: "On a ball in the dirt, what are you actually trying to do?",
        options: [
          "Catch it cleanly in the glove every time",
          "Block it — keep it in front of your body so it drops close and runners can't advance",
          "Let it go to the backstop and reset",
          "Swat it back toward the pitcher",
        ],
        correctIndex: 1,
        explanation: "On a ball in the dirt the goal is to block, not catch. Stabbing deflects it away. Drop to both knees, tuck, round the shoulders, and use the chest as a soft wall to deaden the ball and keep it close. Even uncaught, a ball kept nearby stops runners from advancing.",
      },
      {
        id: "bb8-04-s2", label: "Chin Tuck",
        situation: "A catcher drops to block but keeps the head up and chin high, watching the ball all the way with the face exposed.",
        prompt: "Why must you tuck the chin to the chest when blocking?",
        options: [
          "It looks more athletic",
          "It's required by rule",
          "It protects the throat, angles the mask down so the ball deflects downward, and helps round the body to deaden the ball",
          "It helps you throw faster afterward",
        ],
        correctIndex: 2,
        explanation: "Tucking the chin shields the exposed throat, angles the mask down so a ball off it deflects down and in front, and rounds the shoulders into a soft forward wall. A high chin leaves the throat vulnerable and flattens the chest, which lets the ball carom away.",
      },
      {
        id: "bb8-04-s3", label: "Angle It",
        situation: "Runner on third, one out. A breaking ball bounces a foot to your right. You drop straight down without turning, and the ball deflects toward the dugout.",
        prompt: "What should you have done on a ball in the dirt to the side?",
        options: [
          "Nothing — side balls can't be blocked back toward home",
          "Stand up and try to catch it backhand",
          "Concede the run and let it go",
          "Angle your chest toward the ball so it deflects back toward home plate and the middle of the field",
        ],
        correctIndex: 3,
        explanation: "On a side ball you shift and angle the chest toward it so the deflection goes back toward home, not the dugout. Dropping straight down lets it carom away and the runner on third scores. Proper angling keeps the ball close and in front, holding the runner.",
      },
      {
        id: "bb8-04-s4", label: "Anticipate",
        situation: "Two strikes, runner on second. The pitcher's best swing-and-miss pitch is a curveball he often bounces in front of the plate.",
        prompt: "How should you prepare for that two-strike breaking ball?",
        options: [
          "Relax — most pitches are strikes, so a block is unlikely to be needed",
          "Anticipate a ball in the dirt and be ready to block on every two-strike breaking ball with a runner on",
          "Edge closer to the pitcher to catch it sooner",
          "Call only fastballs to avoid the risk",
        ],
        correctIndex: 1,
        explanation: "Anticipation is half of blocking. With two strikes and a runner on, pitchers throw their nastiest breaking balls — the ones most likely to bounce. Expect the dirt on every one and be ready to drop. That readiness lets the pitcher throw his best put-away pitch without fear of a free base.",
      },
    ],
  },

  "baseball-8-05": {
    intro: "Pop time is your signature — glove to glove, the whole throw measured in fractions of a second. Feet and transfer win it, not just the arm.",
    spots: [
      {
        id: "bb8-05-s1", label: "What It Measures",
        situation: "A scout writes 'pop time 2.0' in a report on your throw to second base.",
        prompt: "What exactly does pop time measure?",
        options: [
          "The speed of the throw in miles per hour",
          "How long you hold the ball before releasing",
          "The time from the pitch hitting your mitt to the ball reaching the fielder's glove at second base",
          "How long the runner takes to reach second",
        ],
        correctIndex: 2,
        explanation: "Pop time runs from the pitch arriving in your mitt to the ball reaching the fielder's glove at second — it captures the whole act of transfer, footwork, and throw. Elite catchers post about 1.9 seconds, average big leaguers about 2.0. It's the standard measure of throwing on steals.",
      },
      {
        id: "bb8-05-s2", label: "Where Time Is Lost",
        situation: "Two catchers have identical arm strength on the radar gun. One throws runners out; the other is consistently a hair late.",
        prompt: "With equal arms, where is the slower catcher most likely losing time?",
        options: [
          "Nowhere — equal arms must mean equal results",
          "In the transfer and footwork — a slow glove-to-hand exchange or wasted steps add up to tenths of a second",
          "In how hard he grips the ball",
          "In his batting stance",
        ],
        correctIndex: 1,
        explanation: "Arm strength is one of three ingredients. With equal arms, the slower catcher is losing time in the transfer (fumbling the exchange or finding the grip late) or footwork (standing up, stepping back, wasted motion). Cleaning those up is the fastest way to improve pop time.",
      },
      {
        id: "bb8-05-s3", label: "Transfer Path",
        situation: "A catcher receives the pitch and swings the ball way out to the side of the body to transfer it to the throwing hand.",
        prompt: "Why should the transfer happen at the center of the chest instead?",
        options: [
          "It looks more professional",
          "Side transfers are against the rules",
          "A center-chest transfer near the throwing shoulder is the shortest, fastest path and helps secure a four-seam grip for an accurate throw",
          "It doesn't matter where the transfer happens",
        ],
        correctIndex: 2,
        explanation: "Bringing glove and hand together at the center of the chest, near the throwing shoulder, is the shortest path to the throwing position and makes a four-seam grip easy to find. A side transfer adds distance and time and often a bad grip, making the ball sail or tail.",
      },
      {
        id: "bb8-05-s4", label: "Accurate Beats Wild",
        situation: "Catcher A fires a blazing throw that pulls the fielder a step off the bag toward the outfield. Catcher B throws slightly slower but chest-high right at the bag.",
        prompt: "Which throw is more likely to retire the runner?",
        options: [
          "Catcher A — velocity always beats accuracy",
          "They're exactly equal in every case",
          "Neither throw can retire a runner",
          "Catcher B — a chest-high throw at the bag lets the fielder catch and tag in one motion; a throw that pulls him off the bag loses the tag",
        ],
        correctIndex: 3,
        explanation: "Accuracy usually beats raw velocity. A throw delivered chest-high and on a line lets the fielder receive and tag in one motion. A faster throw that pulls him off the base costs the time to recover and reapply — often letting the runner in. Be quick and accurate, but a catchable throw to the bag is the priority.",
      },
    ],
  },

  "baseball-8-06": {
    intro: "Catching is the most punishing position on the field. Durability is a trained skill — build the body that still works in August.",
    spots: [
      {
        id: "bb8-06-s1", label: "Train First",
        situation: "A young catcher wants to throw out more runners and assumes the answer is to train 'the arm.'",
        prompt: "Which area is the real foundation for throwing power and game-long endurance?",
        options: [
          "Only the throwing arm and forearm",
          "Only grip strength",
          "The legs, hips, and core — they power the throw, fuel the crouch, and transfer energy to the arm",
          "Cardio alone, with no strength work",
        ],
        correctIndex: 2,
        explanation: "Throwing and blocking power come from the legs, hips, and core, which transfer energy up to the arm — and strong legs hold a stable crouch all game. Arm care matters, but a catcher who trains only the arm lacks both power and endurance. Build from the ground up.",
      },
      {
        id: "bb8-06-s2", label: "Mobility Too",
        situation: "A catcher is strong but stiff — tight hips and ankles make his deep squat awkward and strain the knees and lower back.",
        prompt: "Why is mobility, not just strength, essential for a catcher?",
        options: [
          "Mobility is irrelevant for catchers",
          "Hip and ankle mobility allow a deep, balanced squat without straining the knees and back, and shoulder mobility keeps the throw healthy",
          "Stiff catchers actually throw harder",
          "Only outfielders need mobility",
        ],
        correctIndex: 1,
        explanation: "Strength without mobility invites injury. A catcher squats deeply 100-plus times a game; tight hips and ankles push that load onto the knees and lower back. Good hip, ankle, and thoracic mobility allow a healthy deep squat and a free, protected throw. Strength and mobility together build durability.",
      },
      {
        id: "bb8-06-s3", label: "Manage Workload",
        situation: "A coach wants to catch his best catcher every inning of every game all season to maximize the defense.",
        prompt: "Why does managing a catcher's workload matter?",
        options: [
          "It doesn't — a good catcher should play every inning",
          "Workload only matters for pitchers",
          "Catching is so punishing that planned rest prevents overuse injuries and keeps the catcher productive late in the season",
          "Rest makes catchers worse",
        ],
        correctIndex: 2,
        explanation: "Catching is uniquely taxing, and even durable catchers break down without planned rest. Rest days, occasional games at another position, hydration, and sleep prevent the overuse injuries that shorten catching careers and keep skills sharp in the late innings. Teams routinely rest their catchers for this reason.",
      },
      {
        id: "bb8-06-s4", label: "Why a Rule Changed",
        situation: "After a catcher's leg was shattered in a violent home-plate collision in 2011, baseball changed one of its rules a few years later.",
        prompt: "What does the home-plate collision rule reveal about the position?",
        options: [
          "That catchers aren't really at risk",
          "That collisions are good for the sport",
          "That the rule had nothing to do with catcher safety",
          "That the position is uniquely punishing — its dangers were serious enough to change the rules of the game",
        ],
        correctIndex: 3,
        explanation: "Buster Posey's 2011 injury helped drive MLB to adopt the 2014 home-plate collision rule. That the position's toll was serious enough to rewrite the rules underscores how punishing catching is — and reinforces the lesson that a catcher must build and protect the body deliberately.",
      },
    ],
  },

  "baseball-8-07": {
    intro: "The instant the ball is bunted or popped, you stop being a receiver and become a fielder — and often the one who directs the whole play.",
    spots: [
      {
        id: "bb8-07-s1", label: "Bunt Footwork",
        situation: "A bunt rolls slowly toward the third-base line. You charge straight at it, field it flat-footed facing the line, then have to spin all the way around to throw to first.",
        prompt: "What footwork would have made this play faster?",
        options: [
          "Nothing to improve — spinning is the standard technique",
          "Circle the ball so your feet are already aligned toward first base before you field it, eliminating the extra spin",
          "Field it with the bare hand only, never the glove",
          "Wait for the ball to stop completely before fielding",
        ],
        correctIndex: 1,
        explanation: "Fielding flat-footed and then spinning wastes time. Circle the ball — take a path that aligns your feet toward the target base before you pick it up — so momentum is already carrying toward the throw. The throw then happens in one motion instead of field-stop-turn-throw.",
      },
      {
        id: "bb8-07-s2", label: "Pop-Up Spin",
        situation: "A batter pops the ball straight up near home plate. A new catcher faces the infield and reaches up, but the ball keeps drifting back over his head toward the mound.",
        prompt: "Why should you turn your back to the infield on a pop-up near home?",
        options: [
          "To show off",
          "Because the rules require it",
          "A pop-up near home has reverse spin that carries it back toward the infield, so turning your back lets you drift with that natural movement",
          "To avoid looking at the pitcher",
        ],
        correctIndex: 2,
        explanation: "A pop-up near home spins back toward the infield. Facing the infield, the ball drifts away over your head. Turning your back to the infield and finding the ball lets you drift under it as the spin carries it back toward the diamond — a counterintuitive but essential catching skill.",
      },
      {
        id: "bb8-07-s3", label: "The Mask",
        situation: "On a pop-up, a catcher rips the mask off immediately and drops it right at his feet, then loses the ball in the sky and trips over the mask while searching.",
        prompt: "What's the correct way to handle the mask on a pop-up?",
        options: [
          "Keep the mask on until you locate the ball, then throw it well clear of your feet so you don't trip on it",
          "Never take the mask off",
          "Throw the mask straight up in the air",
          "Hand the mask to the umpire first",
        ],
        correctIndex: 0,
        explanation: "Locate first, then discard. Keep the mask on while finding the ball, then remove it and toss it well clear of where you'll be moving. Ripping it off before locating the ball and dropping it underfoot creates a tripping hazard right where you'll be drifting.",
      },
      {
        id: "bb8-07-s4", label: "Direct the Play",
        situation: "A sacrifice bunt is laid down. The pitcher, the first baseman, and you all converge on the ball, unsure who takes it or where to throw.",
        prompt: "Why are you the natural player to direct this converging bunt play?",
        options: [
          "The catcher is closest to the dugout",
          "The catcher has the strongest arm by rule",
          "The catcher faces the whole field and sees every runner, so a loud call tells everyone who fields it and where the throw goes",
          "The pitcher isn't allowed to field bunts",
        ],
        correctIndex: 2,
        explanation: "You're the only fielder facing the entire field with a clear view of every runner — the natural quarterback of plays around the plate. A loud, decisive call ('I got it — two!' or 'pitcher, one!') keeps two fielders from colliding or throwing to the wrong base. Even when someone else takes it, your view and voice run the play.",
      },
    ],
  },

  "baseball-8-08": {
    intro: "The play at the plate is your defining moment. Modern rules make doing it right the same as doing it safely — give the lane, secure the ball, sweep the tag.",
    spots: [
      {
        id: "bb8-08-s1", label: "Give the Lane",
        situation: "A throw is coming home. You don't have the ball yet, but you plant both feet on top of the plate, completely blocking it from the sliding runner.",
        prompt: "Under modern collision rules, what's wrong with blocking the plate before you have the ball?",
        options: [
          "Nothing — blocking the plate is always legal",
          "It's obstruction — without possession you must give the runner a lane, and he can be ruled safe",
          "You must also tag with two hands",
          "The runner is automatically out for sliding",
        ],
        correctIndex: 1,
        explanation: "Modern rules require giving the runner a clear path to the plate unless you already have the ball. Blocking without possession is obstruction, and the umpire can rule the runner safe regardless of the tag. Set up leaving a lane, then move to block and tag once the ball is secured.",
      },
      {
        id: "bb8-08-s2", label: "Force or Tag",
        situation: "Bases loaded, one out. A ground ball is hit and the runner from third is forced toward home. You receive the throw at the plate.",
        prompt: "What must you do to record the out?",
        options: [
          "Apply a sweep tag on the runner before he reaches the plate",
          "Tag the runner and step on the plate",
          "Simply touch home plate with the ball — it's a force play, so no tag is required",
          "Throw to first base immediately",
        ],
        correctIndex: 2,
        explanation: "Bases loaded with a ground ball forces the runner from third to home, making it a force play. You only need to touch the plate while holding the ball — no tag — just like a force at any base. Tagging is only required on non-force plays. Reading force versus tag instantly is a core catching decision.",
      },
      {
        id: "bb8-08-s3", label: "Catch First",
        situation: "A catcher is so eager to slap a quick tag that he reaches for the runner before fully securing the throw — and the ball pops out as the tag lands.",
        prompt: "What's the correct priority sequence on a tag play at the plate?",
        options: [
          "Tag first, then catch — speed beats everything",
          "Catch and secure the ball first, then apply the tag and hold on through the slide",
          "Block the plate, then catch",
          "Tag and immediately throw to another base",
        ],
        correctIndex: 1,
        explanation: "Catch and secure the ball before applying the tag. An out only counts if you hold the ball through the tag and any slide or collision. Reaching to tag before securing the throw causes dropped balls and runs. Receive cleanly, secure, sweep low and quick, and hold on. No ball, no out.",
      },
      {
        id: "bb8-08-s4", label: "Is It a Play?",
        situation: "A single is hit to the outfield with runners on first and third. The runner from third will score easily, and the batter is rounding first.",
        prompt: "What must you and the cutoff man decide before the throw even arrives?",
        options: [
          "Always throw home no matter what",
          "Read whether the runner can actually be retired at home; if not, concede the run and keep the trailing runner out of scoring position",
          "Let the ball roll to the backstop",
          "Run into the outfield to get the ball yourself",
        ],
        correctIndex: 1,
        explanation: "Not every throw goes home. If the runner from third scores easily, firing home accomplishes nothing and may let the batter take second. Read the play: if the lead runner can be retired, make it at the plate; if not, the cutoff man redirects the throw to keep the trailing runner out of scoring position.",
      },
    ],
  },

  "baseball-8-09": {
    intro: "When the ball is hit, you're never done — there's a backup spot or a coverage job on every single play. Know it before the pitch so you move on contact.",
    spots: [
      {
        id: "bb8-09-s1", label: "Back Up First",
        situation: "Bases empty. A ground ball is hit to the shortstop, who throws across to first. The catcher stays at home plate and watches.",
        prompt: "Where should the catcher be on a bases-empty grounder to the infield?",
        options: [
          "At home plate, watching the play",
          "Covering second base",
          "Sprinting down the first-base line in foul territory to back up the throw to first",
          "Running to the mound",
        ],
        correctIndex: 2,
        explanation: "Bases empty, infield grounder: sprint down the first-base line to back up the throw. Most of the time it's caught cleanly and the sprint looks pointless — but on the occasional wild throw you're the only one who can stop the batter-runner from taking second. It's the catcher's signature hustle play.",
      },
      {
        id: "bb8-09-s2", label: "Direct the Cutoff",
        situation: "Runner on second, base hit to right field, a possible play at the plate. The right fielder throws home through the cutoff man.",
        prompt: "What's your role on this throw from the outfield?",
        options: [
          "Run into the outfield to get the ball",
          "Defend the plate and use your full view to direct the cutoff man — 'cut home,' 'cut two,' or 'let it go'",
          "Leave the plate undefended and back up third base",
          "Nothing — the cutoff man decides alone",
        ],
        correctIndex: 1,
        explanation: "On an outfield throw with a possible play at the plate, stay home to defend it and act as the eyes of the play, loudly directing the cutoff man. Because you see all the runners, you decide whether to cut and redirect ('cut two' for a trailing runner), cut and throw home, or let it through.",
      },
      {
        id: "bb8-09-s3", label: "Pitcher Covers Home",
        situation: "Runner on third. The pitch sails to the backstop for a wild pitch, and the runner breaks for home.",
        prompt: "How do you and the pitcher cover this play at the plate?",
        options: [
          "You chase the ball and try to tag the runner alone with no help",
          "The first baseman covers home",
          "The pitcher sprints to cover home while you recover the ball quickly and feed it to him for the tag",
          "Nobody covers home; the run is conceded automatically",
        ],
        correctIndex: 2,
        explanation: "On a wild pitch or passed ball with a runner on third, you can't both retrieve the ball and cover the plate. The pitcher sprints in to cover home, you hustle to the ball and deliver a quick, accurate feed for him to apply the tag. This pitcher-covers-home play has to be practiced until it's automatic.",
      },
      {
        id: "bb8-09-s4", label: "Beat the Freeze",
        situation: "A catcher consistently freezes for a beat after the ball is hit, trying to figure out where to go, and arrives late to his backup and coverage spots.",
        prompt: "What's the fix for a catcher who reacts a step late?",
        options: [
          "Just move faster after deciding — there's no way to decide sooner",
          "Know the backup or coverage assignment before every pitch, so the body moves the instant the ball is in play instead of pausing to think",
          "Stay at home plate on every play to be safe",
          "Wait for the coach to call out where to go",
        ],
        correctIndex: 1,
        explanation: "The freeze comes from deciding after the ball is hit. Elite catchers run the pre-pitch checklist and already know the job — back up first, direct the cutoff, feed the pitcher, field the bunt — before the pitch. Decision made in advance, the body reacts instantly. Anticipation, not raw speed, kills the late step.",
      },
    ],
  },

  "baseball-8-10": {
    intro: "The highest catching skill is invisible: calling the right pitch at the right moment, and leading a staff that trusts you completely.",
    spots: [
      {
        id: "bb8-10-s1", label: "Sequencing",
        situation: "Your pitcher has a great fastball and a sharp changeup. You want to make the changeup as deadly as possible.",
        prompt: "How does sequencing make the changeup more effective?",
        options: [
          "Throw only changeups so the hitter sees a lot of them",
          "Establish the fastball first so the changeup — same arm action, slower arrival — disrupts the hitter's timing",
          "Never throw the fastball, to hide it",
          "Sequencing has no effect on a changeup",
        ],
        correctIndex: 1,
        explanation: "A changeup mimics the fastball's arm action but arrives slower, breaking timing — which only works if the hitter is geared up for the fastball. So you establish the fastball first to set up the changeup. Each pitch sets up the next; the changeup is deadly because the fastball made the hitter expect speed.",
      },
      {
        id: "bb8-10-s2", label: "Adjust the Plan",
        situation: "In warmups and the first inning, the pitcher's curveball is hanging and getting hit hard, but his fastball and slider are sharp.",
        prompt: "How should you adjust the game plan?",
        options: [
          "Keep calling the curveball equally — the plan shouldn't change",
          "Stop pitching entirely",
          "Lean on what's working today — the fastball and slider — and minimize the curveball until it sharpens up",
          "Call only curveballs to force him to fix it mid-game",
        ],
        correctIndex: 2,
        explanation: "Game-calling adapts to what's actually working that day. If the curveball is hanging but the fastball and slider are sharp, lean on the effective pitches and minimize the one getting hit, maybe testing the curve later in a safe count. Reading the pitcher's stuff in real time is core to calling a smart game.",
      },
      {
        id: "bb8-10-s3", label: "Stay Unpredictable",
        situation: "A catcher calls a breaking ball on every two-strike count. A veteran hitter notices the pattern.",
        prompt: "Why is a predictable pattern a problem when calling pitches?",
        options: [
          "It isn't — predictability is good",
          "A hitter who knows the pattern can sit on the expected pitch and be ready for it, neutralizing the pitcher's advantage",
          "Predictable patterns only matter in the minor leagues",
          "The umpire will call more strikes",
        ],
        correctIndex: 1,
        explanation: "Smart hitters hunt patterns. If you always call a breaking ball with two strikes, the hitter sits on it — anticipating and timing the pitch he knows is coming. Good game-callers vary sequences and locations, sometimes calling the 'wrong' pitch in a count precisely to stay unpredictable.",
      },
      {
        id: "bb8-10-s4", label: "Lead the Staff",
        situation: "Your pitcher just gave up a long home run and is visibly rattled, rushing his next few pitches and missing badly.",
        prompt: "What should you do to help him recover?",
        options: [
          "Say nothing and let him figure it out alone",
          "Demand he throw harder",
          "Slow the game down — a mound visit or deliberate pace to settle his emotions and restore his focus and conviction",
          "Call for a pitch he doesn't trust",
        ],
        correctIndex: 2,
        explanation: "A rattled pitcher rushes and loses command, so your job is to slow things down — a mound visit, a calming word, a deliberate pace — to settle his emotions and restore focus. Your calm becomes his calm. Managing the staff's emotional state is a defining leadership skill, and why pitchers credit great game-callers for their best outings.",
      },
    ],
  },
};
