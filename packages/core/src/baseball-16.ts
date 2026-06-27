import type { StageConfig, EpochConfig } from "./types";

export const baseball16Epoch: EpochConfig = {
  id: "baseball-16",
  name: "Baseball: Situational Team Defense",
  subtitle: "How nine players defend as one",
  description:
    "Great defense is not nine players making plays alone — it is nine players moving as one. This epoch teaches situational team defense: the way the whole field works together once the ball is in play. You will learn cutoffs and relays, bunt defense and the wheel play, the first-and-third defenses, rundowns, double-play depth and the turns, when to play the infield in, fly-ball priority and communication, holding and defending baserunners, positioning and the modern shift rules, and how the entire defense changes to protect a late lead. Every assignment — who is the cutoff man, who covers the bag, force versus tag, who has priority — must be right, because on a team defense one player out of position turns an out into a run.",
  emoji: "🧤",
  color: "teal",
  unlocked: true,
};

export const baseball16Stages: StageConfig[] = [
  // ─── baseball-16-01: Cutoffs & Relays ─────────────────────────────────────────
  {
    epochId: "baseball-16",
    wonder: {
      name: "Dodger Stadium",
      location: "Los Angeles, California",
      era: "Modern",
      emoji: "🎯",
    },
    id: "baseball-16-01",
    order: 1,
    title: "Cutoffs & Relays",
    subtitle: "Lining up the throw, hitting the cutoff man, and the relay",
    category: "sports",
    xp: 100,
    badge: { id: "baseball16-badge-01", name: "The Cutoff Man", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "A throw from the outfield is a team play — the cutoff man is the relay station that turns a long, fading throw into a strong, accurate one and keeps trail runners from advancing.",
      year: 2024,
      overview: [
        "When the ball is hit to the outfield, the throw back to the infield is rarely a single long heave — it runs through a cutoff or relay man. The cutoff man stands between the outfielder and the base, lines himself up with the throw and the target, and either lets the ball go through to the base or cuts it to make a different play. The system exists for three reasons:\n- A relayed throw arrives faster and more accurately than one long fading throw.\n- The cutoff man can redirect the ball to catch a trail runner advancing.\n- He can stop a wild or weak throw before it sails and lets every runner move up.",
        "The assignments are specific and must be known cold:\n- On a base hit with a throw to HOME, the FIRST BASEMAN is the cutoff man, lining up about two-thirds of the way down the line from home toward the outfielder.\n- On a throw to THIRD base, the SHORTSTOP is usually the cutoff (the third baseman stays at the bag to take the tag).\n- On extra-base hits into the gaps, the middle infielders go out as RELAY men — the shortstop on balls to left-center, the second baseman on balls to right-center — to take the throw and relay it in.",
        "The cutoff man's job is active, not passive:\n- He lines up the throw with the base so the outfielder has a target, raising his hands as a sighting point.\n- The catcher, third baseman, or the trailing infielder yells the instruction — 'cut and throw two,' 'cut home,' or 'let it go.'\n- 'Hit the cutoff man' is the cardinal rule: throwing through the cutoff toward the plate when there is no play lets the batter and trail runners take the extra base. The right read is to take the sure out the throw can actually get, and never let a runner advance unchallenged.",
      ],
      technical: {
        title: "Cutoff Assignments and Lining Up the Relay",
        body: [
          "Know who the cutoff man is by where the throw is going. Throw to the plate: the first baseman is the cutoff, positioned roughly two-thirds of the way up the line so he can cut and redirect. Throw to third: the shortstop is the cutoff while the third baseman covers the bag for the tag. On a ball in the gap that becomes a relay, the middle infielder nearest the ball runs out to the grass as the relay man, with the other infielder trailing to back him up and call the play.",
          "Lining up and the verbal read: the cutoff man positions himself in a straight line between the outfielder's throwing point and the target base, then raises his hands so the outfielder has a high, accurate target. A teammate behind the play (catcher on a throw home, an infielder on a relay) makes the call — let it go, cut and hold, or cut and throw to another base. The default is to hit the cutoff man: throwing all the way through on a throw that has no chance lets trail runners advance, so take the sure out and keep the lead runner from moving up.",
        ],
        codeExample: {
          label: "Cutoff and Relay Alignment",
          code: `  BASE HIT, THROW TO HOME:
    CF/LF/RF  --------->  [1B cutoff]  --------->  HOME
                          (2/3 up the line, hands up)
    Catcher calls: LET IT GO / CUT-4 / CUT-HOLD

  THROW TO THIRD:
    OF  --------->  [SS cutoff]  --------->  3B (covers bag)

  EXTRA-BASE HIT IN THE GAP (RELAY):
    Ball to LEFT-CENTER  -> SS goes out as RELAY
    Ball to RIGHT-CENTER -> 2B goes out as RELAY
    The other middle IF TRAILS + makes the call

  THE RULES:
  -> Line up: outfielder - cutoff - base in a straight line
  -> HANDS UP so the OF has a target
  -> HIT THE CUTOFF MAN; take the sure out
  -> Never let a TRAIL runner advance for free`,
        },
      },
      incident: {
        title: "The Throw That Goes Through — and the Run That Scores",
        when: "Every level of baseball",
        where: "Outfields everywhere",
        impact: "The most common team-defense breakdown is an outfielder airmailing the cutoff man on a throw that had no chance at the plate, letting the batter-runner cruise into second and a second run come around to score.",
        body: [
          "Watch any sandlot or even big-league game and the same mistake recurs: a single to the outfield, a runner trying to score, and the outfielder unleashing a long, dramatic throw straight over the cutoff man's head toward home — that arrives late and off-line. The run scores anyway, and now the batter-runner, who would have been held at first, jogs into second on the throw, putting the tying or go-ahead run in scoring position. The big throw felt heroic; it cost two bases.",
          "The disciplined alternative is the whole point of the cutoff system. The first baseman lines up the throw, the catcher reads that the runner will score easily and yells 'cut two,' and the first baseman intercepts the throw and fires to second to nail the batter-runner trying to advance — or simply holds it to freeze him at first. The lesson for every defender is that the cutoff man is not optional scenery. Hitting him, and reading whether to let the ball go, cut and hold, or cut and throw, is what separates a team that concedes one base from a team that concedes three.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball to the Outfield", sub: "a throw is coming in", type: "attacker" },
          { label: "Cutoff Man Lines Up", sub: "1B to home, SS to third", type: "system" },
          { label: "Read the Call", sub: "let it go, cut, or relay", type: "victim" },
          { label: "Sure Out, No Free Bases", sub: "the team play works", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Cutoff and relay systems formalized as baseball defense matures" },
        { year: 1950, event: "Standard cutoff assignments (1B to home, SS to third) become universal", highlight: true },
        { year: 1985, event: "Relay mechanics on gap hits drilled as core team defense" },
        { year: 2015, event: "Statcast measures outfield arm strength and cutoff efficiency" },
        { year: 2024, event: "Hit-the-cutoff-man remains the first lesson of team outfield defense" },
      ],
      keyTakeaways: [
        "The cutoff man is a relay station that makes throws faster, more accurate, and able to catch trail runners",
        "On a throw home the first baseman is the cutoff; on a throw to third the shortstop is the cutoff while the third baseman covers the bag",
        "On gap extra-base hits the middle infielder nearest the ball goes out as the relay man and the other trails to make the call",
        "Hit the cutoff man — take the sure out and never let a trail runner advance for free on a throw that has no play",
      ],
      references: [
        { title: "Little League: Cutoffs and Relays", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Team Defense", url: "https://www.usabaseball.com" },
        { title: "MLB: Cutoff and Relay Fundamentals", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        { id: "baseball-16-01-q1", type: "Assignment", challenge: `  A single to the outfield, the runner from second
  is trying to score, and the throw is coming to
  the plate.`, text: "Who is the cutoff man on a throw to home plate?", options: ["The first baseman, lining up about two-thirds of the way up the line", "The shortstop, standing on second base", "The pitcher, standing on the mound", "The third baseman, at third base"], correctIndex: 0, explanation: "On a throw to home, the first baseman is the cutoff man. He lines up between the outfielder and the plate so he can let the ball through, cut and hold it, or cut and throw to another base based on the catcher's call." },
        { id: "baseball-16-01-q2", type: "Cardinal Rule", challenge: `  An outfielder fields a single and the runner will
  clearly score easily. He airmails the throw over
  the cutoff man toward home.`, text: "Why is 'hit the cutoff man' the cardinal rule here?", options: ["Throwing through with no play lets trail runners advance; the cutoff can take a sure out instead", "It makes the throw look more impressive", "The cutoff man is just a backup and rarely matters", "Outfielders should always throw directly to the plate"], correctIndex: 0, explanation: "When there is no play at the plate, throwing all the way through lets the batter-runner and trail runners take an extra base. Hitting the cutoff man lets him take the sure out — or hold the ball to freeze runners — instead of conceding free bases." },
        { id: "baseball-16-01-q3", type: "Relay", challenge: `  A ball splits the gap into left-center for an
  extra-base hit far from the infield.`, text: "Who goes out as the relay man on a ball to left-center?", options: ["The shortstop, with the second baseman trailing to make the call", "The first baseman, with the catcher trailing", "The third baseman, who leaves the bag uncovered", "The pitcher, who runs to the outfield"], correctIndex: 0, explanation: "On a ball to left-center, the shortstop goes out as the relay man (the second baseman handles right-center). The other middle infielder trails behind him to back up the throw and call where to relay it." },
        { id: "baseball-16-01-q4", type: "Throw to Third", challenge: `  A runner is trying to take third on a hit to the
  outfield and the throw is heading there.`, text: "On a throw to third base, who is the cutoff man and who covers the bag?", options: ["The shortstop is the cutoff and the third baseman covers the bag for the tag", "The third baseman is the cutoff and the shortstop covers", "The pitcher cuts and the catcher covers", "No one cuts; the outfielder throws directly to third"], correctIndex: 0, explanation: "On a throw to third, the shortstop becomes the cutoff man while the third baseman stays at the bag to take the throw and apply the tag. Keeping the third baseman on the base means there is always someone to make the tag." },
        { id: "baseball-16-01-q5", type: "Lining Up", challenge: `  The cutoff man jogs into the infield grass and
  stands off to the side, hands at his waist.`, text: "What should the cutoff man actually do to set up the throw?", options: ["Get in a straight line between the outfielder and the base and raise his hands as a target", "Stand wherever is convenient and wait", "Turn his back to the outfielder", "Stay on the base and never move toward the throw"], correctIndex: 0, explanation: "The cutoff man must line himself up in a straight line between the outfielder's throwing point and the target base, then raise his hands high to give the outfielder an accurate target. Proper alignment is what lets him cut, hold, or relay the ball cleanly." },
      ],
    },
  },

  // ─── baseball-16-02: Bunt Defense ─────────────────────────────────────────────
  {
    epochId: "baseball-16",
    wonder: {
      name: "Wrigley Field",
      location: "Chicago, Illinois",
      era: "Modern",
      emoji: "🛡️",
    },
    id: "baseball-16-02",
    order: 2,
    title: "Bunt Defense",
    subtitle: "Who fields it, who covers, and the lead runner versus the sure out",
    category: "sports",
    xp: 102,
    badge: { id: "baseball16-badge-02", name: "Bunt Stopper", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "A bunt puts the whole infield in motion — corners charge, middle infielders cover, and the defense must decide in an instant whether it has a play on the lead runner or must settle for the sure out at first.",
      year: 2024,
      overview: [
        "When a sacrifice bunt is in order — typically a runner on first, or runners on first and second, with the offense trading an out to advance them — the defense rotates as a unit. The corners (first and third basemen) charge hard as the pitch is delivered, the pitcher breaks toward the ball, and the catcher springs out to field anything he can reach in front of the plate and to direct traffic. Because the corners crash, the middle infielders must rotate to cover the bags those corners vacate.",
        "Coverage is the heart of bunt defense:\n- With a runner on first, the SECOND BASEMAN covers first base (because the first baseman has charged), and the SHORTSTOP covers second.\n- With runners on first and second, the SHORTSTOP and SECOND BASEMAN share covering second and third depending on the look, while the corners and pitcher converge on the ball.\n- Whoever fields the bunt must know before the ball is bunted who is covering each base so he has a target.",
        "The throwing decision is the most important judgment in bunt defense:\n- Get the LEAD runner ONLY if you clearly have a play — fielding the ball cleanly and quickly with the runner not yet near the base.\n- Otherwise take the SURE OUT at first; a botched throw to the lead base can leave everyone safe and turn a sacrifice into a disaster.\n- The WHEEL PLAY is an aggressive call to get the lead runner: with runners on first and second, the third baseman charges, the shortstop rotates to cover third, and the defense tries to force the lead runner there. The SQUEEZE — bunting to score a runner from third — demands a different, all-out charge and a throw home only if the runner is caught.",
      ],
      technical: {
        title: "Coverage Rotation and the Lead-Runner Decision",
        body: [
          "The rotation: as the bunt is shown, the first and third basemen charge and the pitcher breaks off the mound, so the middle infielders must immediately rotate to the vacated bags. Standard runner-on-first coverage: second baseman to first, shortstop to second. The catcher fields anything in front of the plate and is the only fielder facing the whole infield, so he calls which base to throw to. Everyone needs to know the coverage before the pitch so the fielder has a target the instant he picks up the ball.",
          "The decision and the special plays: take the lead runner only with a clean field and a clear play; otherwise take the certain out at first rather than gamble. The wheel play is the aggressive version with runners on first and second — the third baseman crashes, the shortstop wheels around to cover third, and the defense attacks the lead runner there. The suicide or safety squeeze (scoring a runner from third on a bunt) flips the priority: the corners and pitcher charge violently and only throw home if the runner from third is hung up, otherwise they retire the batter at first.",
        ],
        codeExample: {
          label: "Bunt Defense — Charge and Cover",
          code: `  SACRIFICE BUNT, RUNNER ON FIRST:
       3B charges <--   [bunt]   --> 1B charges
                   P breaks in
                   C springs out + CALLS the play

  COVERAGE (corners have crashed):
    2B  --> covers FIRST base
    SS  --> covers SECOND base

  THE DECISION:
  -> Clean field + clear play  = throw to the LEAD base
  -> Anything in doubt         = SURE OUT at first

  WHEEL PLAY (runners on 1st + 2nd):
    3B crashes, SS WHEELS to cover THIRD,
    attack the LEAD runner at third

  SQUEEZE (runner on 3rd):
    Everyone charges; throw HOME only if he is hung up,
    else take the out at first`,
        },
      },
      incident: {
        title: "The Sacrifice the Defense Gives Away",
        when: "Late-inning, one-run games",
        where: "Ballparks at every level",
        impact: "A defense that panics on a bunt — everyone converging on the ball with no one covering a base, or a rushed throw to the lead runner that sails — can turn a routine sacrifice into runners on second and third with no outs.",
        body: [
          "The bunt is a trap for an undisciplined defense. A runner on first, a bunt rolls up the line, and three fielders converge on it while the second baseman forgets to cover first — so the ball is fielded with no one to throw to, and everyone is safe. Or the third baseman fields it cleanly, gets greedy, and fires to second to get the lead runner who is already there safely, the throw skips into the outfield, and now there are runners on second and third with nobody out. The offense bunted for one out and received two free baserunners.",
          "Sound bunt defense is choreography learned in practice. Every fielder knows his job before the pitch: corners charge, middle infielders rotate to cover, the catcher quarterbacks the play by calling the base. The throwing rule keeps it from going wrong — get the lead runner only on a clean, certain play, and otherwise pocket the sure out at first. A team that drills the rotation and respects the sure-out rule turns a bunt into exactly one out, which is all the offense was supposed to get.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Bunt Is Shown", sub: "the sacrifice is on", type: "attacker" },
          { label: "Corners Charge", sub: "middle infielders cover", type: "system" },
          { label: "Catcher Calls the Base", sub: "lead runner or sure out?", type: "victim" },
          { label: "One Out, No Disaster", sub: "the sacrifice held", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "The sacrifice bunt becomes a staple of dead-ball strategy" },
        { year: 1950, event: "Standard charge-and-cover bunt rotations formalized", highlight: true },
        { year: 1980, event: "The wheel play popularized to attack the lead runner" },
        { year: 2010, event: "Analytics question the sacrifice bunt's value, but bunt defense endures" },
        { year: 2024, event: "Bunt defense remains essential against the squeeze and late-game small ball" },
      ],
      keyTakeaways: [
        "On a bunt the corners charge and the pitcher breaks in, so the middle infielders must rotate to cover the vacated bags",
        "With a runner on first the second baseman covers first and the shortstop covers second; the catcher calls the base",
        "Throw to the lead runner only with a clean field and a clear play — otherwise take the sure out at first",
        "The wheel play attacks the lead runner at third; the squeeze flips the priority toward the runner scoring from third",
      ],
      references: [
        { title: "Little League: Bunt Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Defending the Bunt", url: "https://www.usabaseball.com" },
        { title: "MLB: Bunt Coverage Fundamentals", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        { id: "baseball-16-02-q1", type: "Coverage", challenge: `  Runner on first, a sacrifice bunt is laid down and
  the first baseman charges to field it.`, text: "Who covers first base on a sacrifice bunt with a runner on first?", options: ["The second baseman, because the first baseman has charged", "The shortstop, who stays at second", "The pitcher, after fielding the bunt", "Nobody — first base is left open"], correctIndex: 0, explanation: "When the first baseman charges to field the bunt, the second baseman must rotate over to cover first base. The shortstop covers second. Knowing this coverage before the pitch gives the fielder a target to throw to." },
        { id: "baseball-16-02-q2", type: "Decision", challenge: `  A bunt is fielded but the fielder bobbles it for a
  split second and the lead runner is nearly to the
  next base.`, text: "What should the defense do when there is any doubt about the lead runner?", options: ["Take the sure out at first base", "Always throw to the lead base anyway", "Hold the ball and concede everything", "Throw the ball to the dugout"], correctIndex: 0, explanation: "The defense should only go after the lead runner with a clean field and a clear play. With any doubt, take the certain out at first. A rushed or risky throw to the lead base can leave everyone safe and turn a sacrifice into a disaster." },
        { id: "baseball-16-02-q3", type: "The Catcher", challenge: `  Three fielders converge on a bunt in front of the
  plate and none can see the whole infield clearly.`, text: "What special role does the catcher play on a bunt?", options: ["He faces the whole infield and calls which base to throw to", "He stays crouched behind the plate and does nothing", "He runs to cover second base", "He throws his mask at the ball"], correctIndex: 0, explanation: "The catcher springs out, fields anything he can reach in front of the plate, and — because he is the only fielder facing the entire infield — directs traffic by calling which base the fielder should throw to. He quarterbacks the bunt play." },
        { id: "baseball-16-02-q4", type: "Wheel Play", challenge: `  Runners on first and second, and the defense wants
  to aggressively get the lead runner at third.`, text: "On the wheel play, who covers third base?", options: ["The shortstop wheels around to cover third while the third baseman charges", "The third baseman stays at the bag and never moves", "The second baseman covers third", "The pitcher covers third"], correctIndex: 0, explanation: "On the wheel play with runners on first and second, the third baseman crashes to field the bunt, and the shortstop wheels around to cover third base. The defense attacks the lead runner at third — an aggressive but riskier call." },
        { id: "baseball-16-02-q5", type: "Squeeze", challenge: `  A runner is on third and the batter shows bunt to
  try to score him.`, text: "How does defending a squeeze bunt differ from a normal sacrifice?", options: ["Everyone charges hard and only throws home if the runner from third is caught, else takes the out at first", "The defense ignores the runner on third entirely", "The infielders all play deep and concede the run", "The catcher leaves the plate uncovered"], correctIndex: 0, explanation: "On a squeeze, the priority is the runner scoring from third. The corners and pitcher charge violently; they only throw home if the runner is hung up, otherwise they retire the batter at first. It demands a more aggressive, all-out charge than a normal sacrifice." },
      ],
    },
  },

  // ─── baseball-16-03: First-and-Third Defense ──────────────────────────────────
  {
    epochId: "baseball-16",
    wonder: {
      name: "Yankee Stadium",
      location: "Bronx, New York",
      era: "Modern",
      emoji: "♟️",
    },
    id: "baseball-16-03",
    order: 3,
    title: "First-and-Third Defense",
    subtitle: "Defending the double steal without letting the run score",
    category: "sports",
    xp: 105,
    badge: { id: "baseball16-badge-03", name: "Chess Match", emoji: "♟️" },
    challengeType: "quiz",
    info: {
      tagline: "Runners on first and third is a chess match: the runner on first breaks for second to draw a throw, daring the defense to make a play while the runner on third sprints home — and the defense's first priority is always keeping that run off the board.",
      year: 2024,
      overview: [
        "The first-and-third situation is one of the trickiest in baseball. With a runner on first and a runner on third, the offense often tries a delayed or straight double steal: the runner on first breaks for second, hoping the defense throws through to get him while the runner on third breaks for home the moment the catcher's throw leaves his hand. The defense must choose a response before the pitch, and the overriding rule is simple — the priority is keeping the run on third from scoring.",
        "The standard defensive looks against the first-and-third steal are:\n- CONCEDE SECOND — let the runner take second uncontested, keeping the ball with the pitcher or catcher and the runner on third frozen. The safest play when the run matters most.\n- THROW THROUGH to second — the catcher throws to the bag to try to retire the runner stealing, accepting the risk that the runner on third may score.\n- CUT AND THROW HOME — the catcher's throw is intercepted by a middle infielder (or the pitcher cuts it) who fires home if the runner on third broke.",
        "There are also deception plays:\n- The CUT-AND-THROW-BACK — the shortstop or second baseman cuts the throw and fires back to third to catch a too-aggressive runner leaning or breaking.\n- The SNAP THROW from the catcher straight back to third (or a pitcher's pickoff to third) to catch the runner who takes too big a lead.\n- The FAKE TO THIRD (historically a fake-to-third, throw-to-first move, now restricted by rule) and the look-back are about freezing the runner. The constant through all of them: never give up the run cheaply, and make the offense earn it.",
      ],
      technical: {
        title: "Reading the Double Steal and Protecting the Run",
        body: [
          "The looks: with first and third, pick the response by score and inning. Conceding second keeps the run anchored on third and is correct when that run is precious (late, close game). Throwing through to second tries for the out on the trail runner but risks the run scoring on the throw. The cut play splits the difference — a middle infielder or the pitcher cuts the catcher's throw and reads the runner on third: throw home if he broke, complete the throw to second if he held, or fire back to third if he is hung up.",
          "Protecting the lead runner: the catcher can make a quick snap throw back to third, and the pitcher can pick to third, to punish a runner with too big a lead. The old fake-to-third-then-throw-to-first move is now an illegal pitching deception (a balk) at most levels, so deception centers on the cut play and the back-pick. Whatever the call, the first-and-third defense is governed by one priority: keep the run from scoring, and concede a base only when conceding it keeps that run on third.",
        ],
        codeExample: {
          label: "First-and-Third Defensive Looks",
          code: `  RUNNERS ON 1ST + 3RD, R1 breaks for 2nd:

  OPTION 1 - CONCEDE SECOND (safest, late/close):
    Hold the ball; R3 stays frozen at third

  OPTION 2 - THROW THROUGH to 2nd:
    C ---> 2B/SS at the bag  (risk: R3 scores)

  OPTION 3 - CUT AND READ (the middle play):
    C --> [SS/2B or P cuts] --> read R3:
       R3 broke  -> THROW HOME
       R3 held   -> complete to SECOND
       R3 hung   -> throw BACK to THIRD

  BACK-PICKS:
    C snap-throw to 3B  |  P pickoff to 3B
    (catch the too-big lead)

  PRIORITY ALWAYS: keep the RUN from scoring`,
        },
      },
      incident: {
        title: "The Run That Trades for an Out",
        when: "Close, late-inning games",
        where: "Ballparks everywhere",
        impact: "A defense that reflexively throws through to second on a first-and-third steal can hand the offense a run — the runner on third trots home while the defense chases a meaningless out at second base.",
        body: [
          "The first-and-third double steal preys on instinct. A catcher sees the runner break from first and reflexively guns the ball to second base to throw him out — exactly what the offense wanted. The instant the throw leaves the catcher's hand, the runner on third sprints home and scores easily, and the defense has traded a run for an out on a runner who was only stealing to bait that throw. In a one-run game, that reflex loses the lead.",
          "The cure is a pre-pitch plan and the discipline to follow it. If the run on third is precious, the defense concedes second and keeps that runner frozen — a base for nothing, but the run stays off the board. If they want to contest the steal, they use the cut play: a middle infielder or the pitcher cuts the throw and reads the runner on third, going home if he broke and to second only if he is safely held. The lesson of first-and-third is that the run, not the out at second, is what matters, and a smart defense never gives that run away to chase a trail runner.",
        ],
      },
      diagram: {
        nodes: [
          { label: "First and Third, R1 Breaks", sub: "the double-steal bait", type: "attacker" },
          { label: "Pre-Pitch Plan", sub: "concede, throw, or cut", type: "system" },
          { label: "Read the Runner on Third", sub: "home, second, or back to third", type: "victim" },
          { label: "Run Stays Off the Board", sub: "the priority is protected", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "The first-and-third double steal becomes a small-ball weapon" },
        { year: 1960, event: "Cut plays and back-picks formalized as standard responses", highlight: true },
        { year: 1990, event: "The fake-to-third throw-to-first move debated and later restricted" },
        { year: 2013, event: "MLB rules the fake-to-third throw-to-first a balk" },
        { year: 2024, event: "Protect-the-run priority remains the governing rule of first-and-third defense" },
      ],
      keyTakeaways: [
        "On first and third, the offense often uses a double steal to bait a throw while the runner on third tries to score",
        "The overriding priority is keeping the run on third from scoring, not getting the out at second",
        "Standard looks: concede second, throw through, or cut-and-read (home, second, or back to third)",
        "Back-picks — a catcher snap throw or pitcher pickoff to third — punish a runner with too big a lead",
      ],
      references: [
        { title: "Little League: First-and-Third Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Defending the Double Steal", url: "https://www.usabaseball.com" },
        { title: "MLB Official Rules: Balk", url: "https://www.mlb.com/official-information/official-rules" },
      ],
    },
    quiz: {
      questions: [
        { id: "baseball-16-03-q1", type: "Priority", challenge: `  Runners on first and third in a one-run game.
  The runner on first breaks for second.`, text: "What is the defense's overriding priority on a first-and-third steal?", options: ["Keeping the run on third from scoring", "Always getting the out at second base", "Throwing the ball as hard as possible", "Tagging the batter"], correctIndex: 0, explanation: "The governing rule of first-and-third defense is to keep the run on third from scoring. The runner stealing second is often bait; chasing that out can let the run cross the plate, which matters far more than the trail runner." },
        { id: "baseball-16-03-q2", type: "Safe Look", challenge: `  Late in a tight game, the defense does not want to
  risk the run on third scoring at all.`, text: "Which response is the safest when the run on third is most precious?", options: ["Concede second base and keep the runner on third frozen", "Throw through hard to second every time", "Pick off the runner at first", "Walk the next batter"], correctIndex: 0, explanation: "Conceding second — letting the trail runner take the base uncontested while keeping the ball and freezing the runner on third — is the safest play when that run must not score. It gives up a base but keeps the run off the board." },
        { id: "baseball-16-03-q3", type: "Cut Play", challenge: `  The catcher throws toward second, but a middle
  infielder steps in front to intercept it.`, text: "On the cut-and-read play, what does the infielder do after cutting the throw?", options: ["Read the runner on third — home if he broke, second if held, back to third if hung up", "Always throw to first base", "Hold the ball and let everyone advance", "Throw it into center field"], correctIndex: 0, explanation: "The cut play lets a middle infielder (or the pitcher) intercept the catcher's throw and read the runner on third: fire home if he broke for the plate, complete the throw to second if he held, or throw back to third if he is hung up." },
        { id: "baseball-16-03-q4", type: "Back-Pick", challenge: `  The runner on third takes an aggressive lead,
  leaning toward home as the pitch arrives.`, text: "How can the defense punish a runner with too big a lead at third?", options: ["A catcher snap throw or a pitcher pickoff to third base", "Throwing to first base", "Ignoring him completely", "Calling time out repeatedly"], correctIndex: 0, explanation: "A quick snap throw from the catcher back to third, or a pickoff from the pitcher to third, can catch a runner who takes too big a lead. Back-picks keep the runner on third honest and discourage an aggressive jump toward home." },
        { id: "baseball-16-03-q5", type: "Rules", challenge: `  An older defensive trick was the pitcher faking a
  throw to third, then spinning to throw to first.`, text: "What is the status of the fake-to-third, throw-to-first move in modern MLB?", options: ["It is now ruled a balk and is illegal", "It is still legal and encouraged", "It is required on every first-and-third", "It was never a real play"], correctIndex: 0, explanation: "MLB ruled the fake-to-third, throw-to-first move a balk in 2013, making it illegal. Modern deception in first-and-third defense centers instead on the cut play and the back-pick to third." },
      ],
    },
  },

  // ─── baseball-16-04: Rundowns / Pickles ───────────────────────────────────────
  {
    epochId: "baseball-16",
    wonder: {
      name: "Fenway Park",
      location: "Boston, Massachusetts",
      era: "Modern",
      emoji: "🥒",
    },
    id: "baseball-16-04",
    order: 4,
    title: "Rundowns & Pickles",
    subtitle: "Run him back to the lower base with as few throws as possible",
    category: "sports",
    xp: 100,
    badge: { id: "baseball16-badge-04", name: "In a Pickle", emoji: "🥒" },
    challengeType: "quiz",
    info: {
      tagline: "A runner caught between bases should be a guaranteed out — the keys are running him back toward the lower base, going full speed to force a commitment, and getting the tag with as few throws as possible, ideally just one.",
      year: 2024,
      overview: [
        "A rundown — or 'pickle' — happens when a baserunner is caught between two bases with fielders on both ends. It should be an automatic out, but sloppy rundowns let runners escape or, worse, let other runners advance. The whole play is about minimizing throws and forcing the runner to commit. There are a few non-negotiable principles that turn a pickle into a sure out:\n- Run the runner back toward the LOWER (earlier) base.\n- Run full speed at him to force a commitment.\n- Make as FEW throws as possible — ideally one.",
        "Running the runner back toward the lower base is the most important and least intuitive rule. If a runner is caught between first and second, you want to chase him back toward FIRST, not toward second — that way, even if he somehow escapes the tag, he ends up at the base he started from (or is tagged) rather than advancing into scoring position. Driving him toward the lower base means the worst case is no advance, and it keeps any trailing runners from moving up freely.",
        "Executing the tag cleanly is the rest of the play:\n- The fielder with the ball runs HARD at the runner, ball up and ready, forcing him to commit to a direction.\n- He throws only when the receiving fielder calls for it — a single, well-timed throw, dart-like and to the side so the runner does not block it.\n- The receiver gives a clear lane and takes the throw moving toward the runner, applying the tag with TWO HANDS (or securing the ball firmly) so it can't be jarred loose. After throwing, a fielder peels off and circles back to the end of the line in case another throw is needed — but the goal is always one throw, one out.",
      ],
      technical: {
        title: "The Mechanics of a Clean Rundown",
        body: [
          "Direction and tempo: always run the runner back toward the lower base so that, worst case, he gains nothing. The fielder with the ball sprints hard at the runner, holding the ball up and ready, to force him to commit to running one way — a fielder who jogs or pump-fakes lets the runner stall and lets trail runners advance. Speed creates the commitment that makes the tag easy.",
          "Throws and the tag: throw only when the receiving fielder calls for the ball, and make it a single, firm, side-arm or dart throw delivered to the side so the runner's body cannot screen it. The receiver gives a clear running lane, catches the ball moving toward the runner, and applies a two-handed tag that cannot be jarred loose. After releasing a throw, the fielder veers out of the lane and trails to the back of the line in case a second throw is needed. The standard to aim for: one throw, one out, no other runner advances.",
        ],
        codeExample: {
          label: "Rundown Between First and Second",
          code: `  RUNNER CAUGHT BETWEEN 1ST AND 2ND:

   [2B/SS] o----------> runner <----------o [1B]
              run him back toward FIRST (lower base)

  THE KEYS:
  1. DIRECTION  -> drive him toward the LOWER base
  2. SPEED      -> sprint at him, ball UP + ready,
                   force him to COMMIT
  3. THROWS     -> as FEW as possible (ideally ONE)
  4. THE THROW  -> only on the receiver's CALL,
                   to the SIDE (no screen)
  5. THE TAG    -> clear lane, TWO HANDS, secure
  6. AFTER      -> peel off, trail to back of the line

  WATCH trailing runners (don't let them advance!)`,
        },
      },
      incident: {
        title: "The Pickle That Gets Away",
        when: "Every level of baseball",
        where: "Basepaths everywhere",
        impact: "A rundown with too many throws — fielders flipping the ball back and forth, pump-faking, and never committing — gives the runner time to dance until a throw is dropped or sailed, letting him escape and any trailing runner advance.",
        body: [
          "The botched rundown is a youth-baseball staple but happens at every level. Fielders toss the ball back and forth a half-dozen times, each pump-fake giving the runner another chance to change direction, until someone double-clutches, throws into the runner's back, or sails it past the base — and the runner is safe, sometimes with a trailing runner now standing on the next base. What should have been a free out becomes a baserunner, or two, because nobody committed to the simple mechanics.",
          "A clean rundown is fast and short. The fielder with the ball sprints straight at the runner, driving him back toward the lower base so he can gain nothing, and throws exactly once — on the receiver's call, to the side, where the runner can't screen it — and the receiver tags with two hands. The fewer the throws, the fewer the chances to make a mistake, which is why 'one throw, one out' is the standard. And throughout, a defender keeps an eye on any other runner, because the offense often starts a rundown precisely to sneak a trailing runner into scoring position.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Runner Caught Between Bases", sub: "the pickle begins", type: "attacker" },
          { label: "Run Him Toward the Lower Base", sub: "worst case: no advance", type: "system" },
          { label: "Full Speed, One Throw", sub: "force the commitment", type: "victim" },
          { label: "Two-Handed Tag, Out", sub: "one throw, one out", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Rundown fundamentals established as core baserunning defense" },
        { year: 1950, event: "Run-to-the-lower-base and minimize-throws principles standardized", highlight: true },
        { year: 1980, event: "Drill emphasis on a single throw and the two-handed tag" },
        { year: 2010, event: "Coaches teach peeling off and trailing to keep the rundown short" },
        { year: 2024, event: "One throw, one out remains the standard for a clean rundown" },
      ],
      keyTakeaways: [
        "Run the trapped runner back toward the lower (earlier) base so the worst case is no advance",
        "Sprint full speed at the runner with the ball up to force him to commit to a direction",
        "Make as few throws as possible — ideally one, delivered only on the receiver's call and to the side",
        "Apply the tag with two hands, then peel off and trail the line; always watch trailing runners",
      ],
      references: [
        { title: "Little League: Rundowns", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Rundown Mechanics", url: "https://www.usabaseball.com" },
        { title: "MLB: Defensive Fundamentals", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        { id: "baseball-16-04-q1", type: "Direction", challenge: `  A runner is caught in a rundown between first and
  second base.`, text: "Which direction should the defense run him?", options: ["Back toward first base, the lower base", "Toward second base, into scoring position", "It doesn't matter which way", "Toward home plate"], correctIndex: 0, explanation: "Always run the trapped runner back toward the lower (earlier) base. That way, even if he escapes the tag, he gains nothing — he ends up back where he started rather than advancing into scoring position." },
        { id: "baseball-16-04-q2", type: "Throws", challenge: `  Two fielders flip the ball back and forth six times
  while the runner dances between the bases.`, text: "What is the goal for the number of throws in a rundown?", options: ["As few as possible — ideally just one", "As many as possible to confuse the runner", "Exactly five throws", "At least one throw per fielder"], correctIndex: 0, explanation: "The goal is to make as few throws as possible, ideally just one. Every extra throw and pump-fake is another chance to drop or sail the ball and let the runner escape. Fewer throws means fewer mistakes." },
        { id: "baseball-16-04-q3", type: "Tempo", challenge: `  A fielder holds the ball and slowly approaches the
  runner, pump-faking repeatedly.`, text: "Why should the fielder instead run full speed at the runner?", options: ["To force the runner to commit to a direction quickly", "To tire himself out", "To let trailing runners advance", "Because slow is always better"], correctIndex: 0, explanation: "Running full speed at the runner with the ball up and ready forces him to commit to running one direction, which makes the tag easy. A fielder who jogs or pump-fakes lets the runner stall and gives trailing runners time to advance." },
        { id: "baseball-16-04-q4", type: "The Tag", challenge: `  The receiving fielder catches the throw and reaches
  out with the glove to tag the sliding runner.`, text: "How should the tag be applied to secure the out?", options: ["With two hands (or the ball secured firmly) so it can't be jarred loose", "With one finger barely touching the runner", "By dropping the ball and grabbing the runner", "Without looking at the ball"], correctIndex: 0, explanation: "Apply the tag with two hands, or with the ball secured firmly in the glove, so a collision or slide cannot jar it loose. A loose, one-handed tag can be knocked free, turning a sure out into a safe runner." },
        { id: "baseball-16-04-q5", type: "Trailing Runners", challenge: `  A rundown starts between second and third while
  another runner stands at first base.`, text: "What must the defense watch for during a rundown with other runners on base?", options: ["Trailing runners trying to advance while the defense is occupied", "Nothing — only the trapped runner matters", "The batter returning to home plate", "The umpire's signals"], correctIndex: 0, explanation: "Offenses often start a rundown precisely to sneak a trailing runner into scoring position. A defender must keep an eye on any other runner and not let the chase distract the whole team into giving up a free base." },
      ],
    },
  },

  // ─── baseball-16-05: Double-Play Depth & Turns ────────────────────────────────
  {
    epochId: "baseball-16",
    wonder: {
      name: "Citi Field",
      location: "Queens, New York",
      era: "Modern",
      emoji: "🔄",
    },
    id: "baseball-16-05",
    order: 5,
    title: "Double-Play Depth & Turns",
    subtitle: "Depth by the situation, the turns, and when not to turn two",
    category: "sports",
    xp: 108,
    badge: { id: "baseball16-badge-05", name: "Twin Killing", emoji: "🔄" },
    challengeType: "quiz",
    info: {
      tagline: "The double play is the defense's best friend, but turning two starts before the pitch — the infield's depth is set by the score, inning, and outs, and sometimes the right play is to forget the double play and take the sure out.",
      year: 2024,
      overview: [
        "The double play depends first on infield DEPTH, which the middle infielders set before the pitch based on the situation. The three common depths are:\n- DOUBLE-PLAY DEPTH — a couple steps in and toward second base, shortening the distance to the bag so the middle infielders can turn two. Used with a runner on first and a double play in order.\n- NORMAL (straight-up) DEPTH — the standard position for the best overall range when a double play isn't the priority.\n- HALFWAY or IN — pulled in to cut down a run at the plate (covered in its own stage), which usually concedes the double play.",
        "The turns themselves have set choreography, named by the path the ball takes:\n- 6-4-3 — shortstop (6) to second baseman (4) to first baseman (3).\n- 4-6-3 — second baseman (4) to shortstop (6) to first.\n- 5-4-3 — third baseman (5) starts it, around the horn through second to first.\n- 3-6-3 — first baseman (3) to shortstop covering second (6) and back to first (3).\nWho COVERS second on the feed depends on where the ball is hit: the shortstop covers when the ball goes to the second baseman or first baseman, the second baseman covers when the ball goes to the shortstop or third baseman.",
        "Crucially, you don't always turn two:\n- If the ball is hit slowly, deep, or you bobble it, the runner may beat the relay — so you take the SURE OUT at first (or at second) rather than rush a bad turn and end up with no outs.\n- With the game on the line, getting one certain out can matter more than gambling for two.\n- The feed must be accurate and the pivot quick and safe — the pivot man receives, touches second, and clears the sliding runner with a strong, on-time throw to first. Reading whether the double play is really there, and when to settle for one, is the judgment that makes the turn work.",
      ],
      technical: {
        title: "Setting Depth, the Turns, and the Sure-Out Read",
        body: [
          "Depth by situation: with a runner on first and a double play in order, the middle infielders move to double-play depth — a step or two in and toward second — to shorten the throw to the bag. With no double-play need they play normal depth for range. Coverage at second is determined by the ball: the shortstop covers the bag on a ball hit to the second baseman or first baseman, and the second baseman covers on a ball hit to the shortstop or third baseman. Knowing the coverage before the pitch is what lets the feed and pivot happen at full speed.",
          "The turns and the sure out: the common turns are 6-4-3, 4-6-3, 5-4-3, and 3-6-3, each describing the ball's path to retire two. The pivot man receives the feed, touches second, clears the incoming slide, and throws on time to first. But the double play is not automatic — on a slow roller, a deep ball, or a bobble, the runner may beat the relay, and forcing a bad turn can leave you with zero outs. The disciplined read is to take the certain out (usually at first, sometimes the force at second) rather than gamble for two when two isn't there.",
        ],
        codeExample: {
          label: "Double-Play Depth and the Turns",
          code: `  DEPTH (set BEFORE the pitch):
    DP depth  -> a step IN + toward 2B (runner on
                 1st, DP in order; shortens the feed)
    Normal    -> straight up, best range
    In/Halfway-> cut the run at home (concedes the DP)

  THE TURNS (by the ball's path):
    6-4-3  SS -> 2B -> 1B
    4-6-3  2B -> SS -> 1B
    5-4-3  3B -> 2B -> 1B
    3-6-3  1B -> SS(2B bag) -> 1B

  WHO COVERS SECOND:
    Ball to 2B or 1B  -> SS covers the bag
    Ball to SS or 3B  -> 2B covers the bag

  WHEN NOT TO TURN TWO:
    slow roller / deep ball / bobble
       -> take the SURE OUT, don't force a bad turn`,
        },
      },
      incident: {
        title: "The Forced Turn That Gets Nobody",
        when: "Every level of baseball",
        where: "Infields everywhere",
        impact: "An infielder who rushes a double-play turn that was never there — bobbling the feed or short-arming the relay on a slow grounder — can end up with no outs instead of the one out that was a certainty.",
        body: [
          "Greed on the double play is a classic error. A slow ground ball is hit, the runner on first gets a good jump, and the shortstop, set on turning two, rushes the feed to second — the pivot man bobbles it or short-hops the throw to first, and now both runners are safe with nobody out. The defense reached for two outs that were never available and came away with zero, when the simple play was to take the certain out at first or the force at second.",
          "Sound double-play defense starts before the pitch and ends with a read. The middle infielders set their depth by the situation, know who covers the bag based on where the ball is hit, and execute the right turn cleanly. But the best infielders also know when two isn't there — on a slow roller, a deep ball, or a bobble — and bank the sure out instead of gambling. One certain out beats a rushed attempt at two that yields none, especially with the game on the line.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Runner on First, DP in Order", sub: "set double-play depth", type: "attacker" },
          { label: "Field and Feed", sub: "know who covers second", type: "system" },
          { label: "Pivot and Turn", sub: "6-4-3, 4-6-3, 5-4-3, 3-6-3", type: "victim" },
          { label: "Two Outs — or the Sure One", sub: "read whether it's there", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "The double play emerges as a defensive cornerstone" },
        { year: 1950, event: "Standard turns and double-play depth formalized", highlight: true },
        { year: 2016, event: "MLB slide rule requires a bona fide slide, reshaping the pivot" },
        { year: 2018, event: "Statcast quantifies double-play conversion rates and pivot speed" },
        { year: 2024, event: "Depth-by-situation and the sure-out read remain core infield judgment" },
      ],
      keyTakeaways: [
        "Set infield depth before the pitch: double-play depth (in and toward second) with a runner on first and a DP in order",
        "The turns are named by the ball's path — 6-4-3, 4-6-3, 5-4-3, 3-6-3",
        "Coverage at second depends on the ball: the shortstop covers on balls to the second baseman or first baseman, the second baseman on balls to the shortstop or third baseman",
        "Don't force a bad turn — on a slow roller, deep ball, or bobble, take the sure out instead of gambling for two",
      ],
      references: [
        { title: "Little League: Turning the Double Play", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Double-Play Mechanics", url: "https://www.usabaseball.com" },
        { title: "MLB Official Rules: The Slide Rule", url: "https://www.mlb.com/official-information/official-rules" },
      ],
    },
    quiz: {
      questions: [
        { id: "baseball-16-05-q1", type: "Depth", challenge: `  Runner on first, one out, and the defense wants to
  be able to turn two on a ground ball.`, text: "What depth should the middle infielders play?", options: ["Double-play depth — a step or two in and toward second base", "As deep as possible against the wall", "Standing on the outfield grass", "Right behind the pitcher's mound"], correctIndex: 0, explanation: "With a runner on first and a double play in order, the middle infielders play double-play depth — a couple steps in and toward second — to shorten the distance to the bag so they can take the feed and turn two in time." },
        { id: "baseball-16-05-q2", type: "The Turns", challenge: `  A ground ball is hit to the shortstop, who flips to
  the second baseman, who throws to first.`, text: "What is this double play called?", options: ["A 6-4-3 (shortstop to second baseman to first baseman)", "A 4-6-3", "A 5-4-3", "A 3-6-3"], correctIndex: 0, explanation: "Double plays are named by the ball's path using fielder position numbers: shortstop (6) to second baseman (4) to first baseman (3) is a 6-4-3. A 4-6-3 starts with the second baseman, a 5-4-3 with the third baseman." },
        { id: "baseball-16-05-q3", type: "Coverage", challenge: `  A ground ball is hit to the second baseman with a
  runner on first.`, text: "Who covers second base to take the feed?", options: ["The shortstop, since the ball went to the second baseman", "The second baseman covers his own feed", "The third baseman covers second", "The pitcher covers second"], correctIndex: 0, explanation: "Coverage at second depends on where the ball is hit. On a ball to the second baseman (or first baseman), the shortstop covers the bag. On a ball to the shortstop (or third baseman), the second baseman covers." },
        { id: "baseball-16-05-q4", type: "Sure Out", challenge: `  A slow roller is hit and the runner on first has a
  great jump; the turn would be very close.`, text: "What is the disciplined play here?", options: ["Take the sure out rather than force a risky double-play turn", "Always try for two no matter what", "Hold the ball and get no outs", "Throw home"], correctIndex: 0, explanation: "On a slow roller, a deep ball, or a bobble, the runner may beat the relay. Forcing a bad turn can leave you with zero outs, so the disciplined play is to take the certain out rather than gamble for two that isn't there." },
        { id: "baseball-16-05-q5", type: "The Pivot", challenge: `  The pivot man receives the feed at second base with
  a runner bearing down to slide.`, text: "What must the pivot man do to complete the double play safely?", options: ["Touch second, clear the sliding runner, and throw on time to first", "Stand on the bag and hold the ball", "Tag the runner instead of touching the base", "Throw to third base"], correctIndex: 0, explanation: "The pivot man receives the feed, touches second for the force, clears the incoming slide to avoid the takeout, and delivers a strong, on-time throw to first. A quick, safe pivot is what completes the turn." },
      ],
    },
  },

  // ─── baseball-16-06: Infield In / Halfway / Back ──────────────────────────────
  {
    epochId: "baseball-16",
    wonder: {
      name: "Oracle Park",
      location: "San Francisco, California",
      era: "Modern",
      emoji: "📏",
    },
    id: "baseball-16-06",
    order: 6,
    title: "Infield In, Halfway, or Back",
    subtitle: "Trading range for a play at the plate with a runner on third",
    category: "sports",
    xp: 104,
    badge: { id: "baseball16-badge-06", name: "The Read", emoji: "📏" },
    challengeType: "quiz",
    info: {
      tagline: "With a runner on third and fewer than two outs, the infield's depth is a wager: play in to cut the run but concede range, play back to take the out and give up the run, or play halfway and read it on the fly.",
      year: 2024,
      overview: [
        "When a runner is on third base with fewer than two outs, the infield depth becomes a deliberate decision that trades run prevention against making outs. There are three settings:\n- INFIELD IN — the infielders move well in, onto the edge of the grass, so they can field a ground ball and throw home in time to cut down the run. The cost is range: balls that would be routine outs at normal depth now shoot through for hits.\n- HALFWAY (in-between) — a compromise depth where the fielder reads the ball off the bat and decides on the fly whether to go home or take the out at first.\n- INFIELD BACK (normal/deep) — the infielders play normal depth, conceding the run on a ground ball in exchange for the routine out at first.",
        "The choice is dictated by the inning, the score, and the number of outs:\n- LATE and CLOSE (tie game, one-run game, late innings) — play IN to keep the run from scoring, because that single run could decide the game.\n- EARLY or with a comfortable LEAD/DEFICIT — play BACK and concede the run for the out, because trading a run for an out is the percentage play when one run matters less.\n- With TWO OUTS — the question changes; an infielder usually just takes the out at first (a ground ball ends the inning anyway).",
        "Each setting carries a trade-off the defense accepts knowingly:\n- Playing IN dramatically reduces the infielders' range, so it raises the odds of a hit — a deliberate gamble that the ground ball will come to someone with a play at the plate.\n- Playing BACK guarantees the out on most grounders but lets the run score.\n- HALFWAY tries to have it both ways but asks the fielder to make a fast, correct read — go home only if the ball is hit slowly enough and to the right spot, otherwise take the out. Knowing the right depth for the situation, and accepting its trade-off, is how a defense decides what it is willing to give up.",
      ],
      technical: {
        title: "Choosing Depth with a Runner on Third",
        body: [
          "The three depths and their costs: infield IN (on the grass) gives the fielders the angle and time to throw home and cut the run, at the cost of badly reduced range and more hits. Infield BACK (normal depth) concedes the run on a grounder but secures the routine out at first. HALFWAY splits the difference and forces the fielder to read each ball — home if it's slow and well-placed, first if not. The deeper you play, the more outs you make and the more runs you concede; the shallower, the reverse.",
          "The decision rule: weigh the run against the out using inning, score, and outs. Late and close, play in — that one run may be the game. Early, or up or down by several, play back and take the out, because a single run matters less than recording outs. With two outs the calculus usually collapses to taking the out at first, since a ground ball ends the inning. The key discipline is that the depth is chosen consciously before the pitch, and every fielder knows what the team is willing to give up on a ground ball.",
        ],
        codeExample: {
          label: "Infield Depth with a Runner on Third",
          code: `  RUNNER ON THIRD, FEWER THAN 2 OUTS:

  INFIELD IN  (on the grass):
    + can throw HOME, cut the run
    - range CRUSHED -> more hits get through
    USE: late + close, the run decides the game

  HALFWAY (in-between):
    +/- READ the ball: slow + placed -> HOME,
        else take the OUT at first

  INFIELD BACK (normal depth):
    + routine OUT at first on a grounder
    - the run SCORES
    USE: early, or a comfortable lead/deficit

  TWO OUTS:
    -> usually just take the out at first
       (a grounder ends the inning anyway)`,
        },
      },
      incident: {
        title: "The Run You Choose to Give Up",
        when: "Late innings of close games",
        where: "Infields everywhere",
        impact: "A manager who plays the infield in too early — in the second inning with a runner on third — gambles range for a single run that may not matter, and watches ground balls that should be outs scoot through for hits and a big inning.",
        body: [
          "The infield-in decision is one of baseball's purest risk trades, and getting it wrong is costly in both directions. Play in too early, in a game far from decided, and you sacrifice range to save one run that may be meaningless — and a ground ball that a normal-depth infielder fields easily instead skips through the drawn-in defense for a hit, often opening the floodgates to a bigger inning. Play back in the bottom of the ninth of a tie game, and you simply hand the winning run home on a routine grounder.",
          "The discipline is matching depth to the moment. Late and close, the single run on third can decide the game, so the defense plays in and accepts the reduced range as the price of a play at the plate. Early or with a cushion, the percentage play is to concede that run and take the certain out, because outs are worth more than one run when one run won't swing the outcome. Halfway exists for the in-between moments, but it demands a fast, correct read. The lesson is that infield depth is a conscious wager — you decide, before the pitch, exactly which you are more willing to give up: the run or the out.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Runner on Third, < 2 Outs", sub: "run versus out", type: "attacker" },
          { label: "Read Inning, Score, Outs", sub: "how much is the run worth?", type: "system" },
          { label: "Set the Depth", sub: "in, halfway, or back", type: "victim" },
          { label: "Accept the Trade-Off", sub: "you chose what to give up", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Infield-in defense established for run-saving situations" },
        { year: 1950, event: "Depth-by-situation (in, halfway, back) formalized as standard strategy", highlight: true },
        { year: 1990, event: "Win-probability thinking sharpens the in-versus-back decision" },
        { year: 2015, event: "Analytics quantify the range cost of playing the infield in" },
        { year: 2024, event: "The run-versus-out wager remains a defining managerial decision" },
      ],
      keyTakeaways: [
        "With a runner on third and fewer than two outs, infield depth trades run prevention against making outs",
        "Playing in cuts the run but badly reduces range; playing back concedes the run for the sure out; halfway demands a read",
        "Decide by inning, score, and outs — play in late and close, play back early or with a cushion",
        "The depth is a conscious wager: you choose before the pitch whether you'd rather give up the run or the out",
      ],
      references: [
        { title: "Little League: Infield Positioning", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Situational Defense", url: "https://www.usabaseball.com" },
        { title: "MLB: Defensive Strategy", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        { id: "baseball-16-06-q1", type: "Infield In", challenge: `  Bottom of the ninth, tie game, runner on third
  with one out.`, text: "Why does the defense play the infield in here?", options: ["To field a grounder and throw home to cut down the winning run", "To increase their range", "To make the routine out at first easier", "Because it is always correct regardless of situation"], correctIndex: 0, explanation: "Late and close, the run on third can decide the game, so the infield plays in — onto the grass — to field a ground ball and throw home in time to cut the run. The cost is reduced range, an accepted gamble in that moment." },
        { id: "baseball-16-06-q2", type: "The Cost", challenge: `  The infield is drawn in with a runner on third.`, text: "What is the main cost of playing the infield in?", options: ["Reduced range — balls that would be routine outs now go through for hits", "Slower throws to first", "The pitcher tires faster", "The outfielders must move in too"], correctIndex: 0, explanation: "Playing in dramatically reduces the infielders' range. Ground balls that would be easy outs at normal depth shoot through the drawn-in infield for hits, so playing in is a deliberate gamble to save the run." },
        { id: "baseball-16-06-q3", type: "Play Back", challenge: `  Second inning, runner on third, defense leads by
  five runs with one out.`, text: "What is the percentage play for infield depth here?", options: ["Play back and concede the run for the sure out at first", "Play in to save the one run", "Play halfway and guess", "Bring all the outfielders in"], correctIndex: 0, explanation: "Early in the game or with a comfortable lead, a single run matters less than recording outs. The percentage play is to play back, take the routine out at first on a grounder, and concede that one run." },
        { id: "baseball-16-06-q4", type: "Halfway", challenge: `  The infield plays at an in-between depth with a
  runner on third.`, text: "What does playing halfway require of the fielder?", options: ["Reading the ball off the bat and deciding on the fly whether to go home or take the out", "Always throwing home", "Always taking the out at first", "Closing his eyes and reacting"], correctIndex: 0, explanation: "Halfway is a compromise depth. The fielder must read each ball off the bat and decide instantly: go home only if it's hit slowly enough and placed right, otherwise take the out at first. It tries to balance run prevention and making outs." },
        { id: "baseball-16-06-q5", type: "Two Outs", challenge: `  Runner on third with two outs and a ground ball is
  hit to the shortstop.`, text: "How does two outs change the depth calculus?", options: ["The infielder usually just takes the out at first, since a grounder ends the inning anyway", "He must always throw home", "He should play even further in", "He must start a rundown"], correctIndex: 0, explanation: "With two outs, a ground ball that's converted at first ends the inning before the run counts (on a force or with the out recorded before the runner scores in time on most plays). So the infielder usually just takes the sure out at first." },
      ],
    },
  },

  // ─── baseball-16-07: Pop-Up & Fly-Ball Priority and Communication ─────────────
  {
    epochId: "baseball-16",
    wonder: {
      name: "Minute Maid Park",
      location: "Houston, Texas",
      era: "Modern",
      emoji: "📣",
    },
    id: "baseball-16-07",
    order: 7,
    title: "Fly-Ball Priority & Communication",
    subtitle: "The center fielder is king, call it loud, and the infield fly rule",
    category: "sports",
    xp: 102,
    badge: { id: "baseball16-badge-07", name: "I Got It!", emoji: "📣" },
    challengeType: "quiz",
    info: {
      tagline: "A ball in the air can be caught by two or three fielders converging on the same spot — the only thing that prevents a collision or a dropped ball is a clear priority order and a loud, early call.",
      year: 2024,
      overview: [
        "When a fly ball or pop-up goes up, several fielders may be able to reach it, so baseball uses a strict PRIORITY ORDER so everyone knows who has the right of way before the play happens. The core of the order is range and momentum — the player moving toward the ball with the best angle and the easiest throw afterward gets priority:\n- The CENTER FIELDER is the king of the outfield; he has priority over both corner outfielders on any ball he can reach.\n- OUTFIELDERS have priority over INFIELDERS, because they are moving in toward the ball and the infield rather than drifting back.\n- Among infielders, the SHORTSTOP and SECOND BASEMAN have priority over the corner infielders (first and third).",
        "Communication is what makes the priority order work in real time:\n- The fielder taking the ball calls it LOUD and EARLY — 'I got it! I got it!' — multiple times so there's no doubt.\n- The fielders yielding call OFF — 'Take it! Take it!' — and peel away.\n- The CATCHER, who faces the field, often helps direct pop-ups near the plate and points the ball out. On an infield pop-up the catcher takes the balls right around home that he can see and reach.",
        "The infield fly rule protects the offense from a defense deliberately dropping an easy pop-up to turn a double play:\n- It applies with runners on first and second (or bases loaded) and FEWER than two outs, on a fair fly ball an infielder can catch with ordinary effort.\n- The umpire declares 'infield fly, batter is out' — the batter is automatically out whether or not the ball is caught, so the defense can't drop it to force the runners.\n- The runners may advance at their own risk but are not forced. Knowing the rule, the priority order, and calling the ball loudly are what turn a chaotic pop-up into a routine out.",
      ],
      technical: {
        title: "The Priority Order, the Call, and the Infield Fly Rule",
        body: [
          "Priority and the call: the center fielder has priority over the corner outfielders; outfielders have priority over infielders (they're coming in, with a better angle and throw); and the middle infielders (shortstop and second baseman) have priority over the corner infielders. The fielder taking it calls 'I got it' loudly and repeatedly while the others call him off and clear out. The catcher, facing the field, helps locate pop-ups near the plate and takes the ones around home he can reach. Loud, early communication is the only thing that prevents a collision or a ball dropping between two players.",
          "The infield fly rule: with runners on first and second or bases loaded and fewer than two outs, on a fair pop-up an infielder can catch with ordinary effort, the umpire calls the batter out automatically — caught or not. This stops the defense from intentionally letting an easy pop fall to turn an unearned double or triple play on forced runners. The ball stays live and runners may advance at their own risk, but they are not forced to. The rule does not apply to line drives or attempted bunts.",
        ],
        codeExample: {
          label: "Fly-Ball Priority Order",
          code: `  WHO HAS THE RIGHT OF WAY (highest first):

    CENTER FIELDER  (king of the outfield)
        v
    CORNER OUTFIELDERS (LF, RF)
        v
    MIDDLE INFIELDERS (SS, 2B)
        v
    CORNER INFIELDERS (3B, 1B)
        v
    PITCHER  (lowest priority)

  General rule: OUTFIELD over INFIELD (coming in)
  Catcher = helps direct + takes pops near the plate

  THE CALL:  taker yells "I GOT IT!" loud + early
             others yell "TAKE IT!" and PEEL OFF

  INFIELD FLY RULE:
    R1+R2 (or loaded) + < 2 outs + catchable fair pop
       -> batter is OUT automatically (caught or not)
       -> runners NOT forced (advance at own risk)`,
        },
      },
      incident: {
        title: "The Pop-Up That Drops Between Two Fielders",
        when: "Every level of baseball",
        where: "Infields and outfields everywhere",
        impact: "A routine pop-up that two fielders both drift under without calling for — each assuming the other has it — drops untouched between them for a hit, or worse, leads to a jarring collision and an injury.",
        body: [
          "The uncommunicated pop-up is one of baseball's quietest disasters. A lazy fly drifts to short left-center, the shortstop drifts back and the left fielder drifts in, both watching the ball, neither calling for it — and it lands softly on the grass between them as both pull up at the last second, or they crash into each other at full speed. A can-of-corn out becomes a baserunner, and sometimes a player leaves on a stretcher. The ball was easy; the silence was the problem.",
          "The fix is the priority order plus a loud voice. Everyone knows before the play that the center fielder rules the outfield, that outfielders take priority over infielders coming in, and that the middle infielders outrank the corners. The fielder with priority calls 'I got it' loudly and early, the others call him off and peel away, and the catcher helps point out pops near the plate. Add the infield fly rule — which removes the incentive to deliberately drop a pop with runners on — and a chaotic ball in the air becomes a routine, safe out. Communication is not optional; it's the play.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball in the Air", sub: "multiple fielders converge", type: "attacker" },
          { label: "Priority Order", sub: "CF rules, OF over IF", type: "system" },
          { label: "Loud, Early Call", sub: "'I got it!' — others peel off", type: "victim" },
          { label: "Routine, Safe Out", sub: "no drop, no collision", type: "result" },
        ],
      },
      timeline: [
        { year: 1895, event: "The infield fly rule adopted to stop deliberate-drop double plays" },
        { year: 1950, event: "Fly-ball priority order standardized across organized baseball", highlight: true },
        { year: 1980, event: "Communication drills emphasized to prevent outfield collisions" },
        { year: 2010, event: "Catcher's role directing pop-ups formalized in coaching" },
        { year: 2024, event: "Center-field priority and the loud call remain core team defense" },
      ],
      keyTakeaways: [
        "Fly balls use a priority order: the center fielder rules the outfield, outfielders outrank infielders, and middle infielders outrank the corners",
        "The fielder taking the ball calls it loud and early while the others call him off and peel away",
        "The catcher helps direct pop-ups near the plate and takes the ones around home he can reach",
        "The infield fly rule (runners on first and second or loaded, fewer than two outs) makes the batter automatically out so the defense can't drop an easy pop for a double play",
      ],
      references: [
        { title: "MLB Official Rules: Infield Fly", url: "https://www.mlb.com/official-information/official-rules" },
        { title: "USA Baseball: Communication and Priority", url: "https://www.usabaseball.com" },
        { title: "Little League: Fly-Ball Communication", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
      ],
    },
    quiz: {
      questions: [
        { id: "baseball-16-07-q1", type: "Priority", challenge: `  A fly ball goes to left-center and both the center
  fielder and the left fielder can reach it.`, text: "Who has priority on the ball?", options: ["The center fielder — he is the king of the outfield", "The left fielder, always", "Whoever called first regardless of position", "The shortstop"], correctIndex: 0, explanation: "The center fielder has priority over both corner outfielders on any ball he can reach — he is the king of the outfield. He has the most range and the best angle, so the corner outfielders yield to him." },
        { id: "baseball-16-07-q2", type: "Outfield vs Infield", challenge: `  A pop-up drifts to shallow left, reachable by both
  the shortstop and the left fielder.`, text: "Between an outfielder and an infielder, who has priority?", options: ["The outfielder, because he is coming in with a better angle and throw", "The infielder, because he is closer to the bag", "The pitcher", "Neither — they should both back off"], correctIndex: 0, explanation: "Outfielders have priority over infielders on balls both can reach. The outfielder is moving in toward the ball and the infield, giving him a better angle on the catch and an easier throw afterward, so the infielder yields." },
        { id: "baseball-16-07-q3", type: "The Call", challenge: `  Two fielders are converging on the same pop-up.`, text: "What should the fielder taking the ball do?", options: ["Call it loud and early — 'I got it!' — while the others call him off and peel away", "Stay silent and assume the other will move", "Wave his arms without speaking", "Wait until the last second to call it"], correctIndex: 0, explanation: "The fielder taking the ball must call it loud and early, repeating 'I got it!' so there's no doubt, while the yielding fielders call 'Take it!' and peel away. Loud, early communication is the only thing preventing a drop or collision." },
        { id: "baseball-16-07-q4", type: "Infield Fly", challenge: `  Runners on first and second, one out, and the batter
  pops up a catchable fair ball to the infield.`, text: "What does the infield fly rule do here?", options: ["The umpire calls the batter out automatically, whether or not the ball is caught", "The runners are forced to advance", "The defense must intentionally drop the ball", "Nothing — the rule only applies with two outs"], correctIndex: 0, explanation: "With runners on first and second (or loaded) and fewer than two outs, on a catchable fair pop-up the umpire declares the batter out automatically — caught or not. This stops the defense from dropping an easy pop to turn a cheap double play on the forced runners." },
        { id: "baseball-16-07-q5", type: "The Catcher", challenge: `  A pop-up goes straight up near home plate.`, text: "What role does the catcher play on pop-ups near the plate?", options: ["He faces the field, helps direct traffic, and takes the balls around home he can reach", "He always lets an infielder take everything", "He runs to cover second base", "He has the lowest priority on every fly ball"], correctIndex: 0, explanation: "The catcher faces the whole field, so he helps locate and direct pop-ups, and he takes the balls right around home plate that he can see and reach. His view makes him valuable for directing traffic on infield pop-ups." },
      ],
    },
  },

  // ─── baseball-16-08: Holding & Defending Runners ──────────────────────────────
  {
    epochId: "baseball-16",
    wonder: {
      name: "Petco Park",
      location: "San Diego, California",
      era: "Modern",
      emoji: "👟",
    },
    id: "baseball-16-08",
    order: 8,
    title: "Holding & Defending Runners",
    subtitle: "Pickoffs, the slide step, pitchouts, and the backpick",
    category: "sports",
    xp: 103,
    badge: { id: "baseball16-badge-08", name: "Hold 'Em Close", emoji: "👟" },
    challengeType: "quiz",
    info: {
      tagline: "Stopping the running game is a team effort between pitcher and catcher — holding a runner close, quickening delivery, and the occasional pickoff shrink the runner's lead so the catcher actually has a chance to throw him out.",
      year: 2024,
      overview: [
        "Defending baserunners begins with the pitcher, not the catcher. A runner's stolen-base success depends mostly on his LEAD and JUMP, and on how long the pitcher takes to deliver — so the battery's job is to shrink the lead and speed up the delivery. The pitcher's tools are:\n- HOLDING the runner close — varying looks, holding the ball different lengths of time, and keeping the runner from getting comfortable.\n- The PICKOFF throw to first (or to second or third) to drive the runner back or catch him leaning.\n- The SLIDE STEP — a shortened, quicker leg lift that cuts the time to the plate so the catcher has a chance to throw the runner out.",
        "The catcher and the rest of the defense add their own weapons:\n- The PITCHOUT — the catcher calls for a pitch thrown wide and high so he can come up throwing on a suspected steal or hit-and-run, sacrificing a ball in the count for a clean throw.\n- The BACKPICK — a quick throw from the catcher behind a runner who has taken too big a secondary lead at first, second, or third.\n- DAYLIGHT and TIMING plays — the shortstop or second baseman flashes behind the runner at second and the pitcher throws when he sees 'daylight' between the runner and the bag, or on a pre-set timing count.",
        "Holding runners is also a judgment about WHEN to bother:\n- With a fast runner in a close game, controlling the running game is worth real attention — vary the looks, use the slide step, throw over.\n- With a slow runner, a big lead, or a situation where the run barely matters, the pitcher may largely IGNORE the runner and focus on the hitter, since over-attention to a non-threat just disrupts his rhythm.\n- The whole point is to give the catcher a fighting chance: shrink the lead and shorten the delivery, and a stolen base becomes a contested play rather than a free 90 feet.",
      ],
      technical: {
        title: "Shrinking the Lead and the Battery's Tools",
        body: [
          "The pitcher's job: a steal is won mostly on the runner's lead and jump and the pitcher's time to the plate, so the pitcher holds the runner with varied looks and hold times, throws over to first to push the lead back or catch a lean, and uses the slide step to cut his delivery time. A quick delivery is often more valuable than the pickoff itself, because it directly gives the catcher time to throw the runner out. The pickoff move to first must be legal — a balk if the pitcher fails to step or deceives illegally.",
          "The catcher and infield tools: the pitchout trades a ball in the count for a clean, early throw on a suspected steal or hit-and-run. The backpick is a quick catcher throw behind a runner with too large a secondary lead. Daylight and timing plays at second coordinate the pitcher and a middle infielder — throw when daylight appears between runner and bag, or on a counted timing play. And it's a judgment call: hold a fast runner in a close game aggressively, but largely ignore a slow runner or a meaningless one and pitch to the hitter. Every tool aims to shrink the lead and shorten the delivery so the catcher has a real chance.",
        ],
        codeExample: {
          label: "Holding and Defending Runners",
          code: `  THE BATTERY SHRINKS THE LEAD:

  PITCHER:
    -> HOLD: vary looks + hold times
    -> PICKOFF to 1B (legal step! else BALK)
    -> SLIDE STEP: quicker to the plate
       (gives the catcher time to throw)

  CATCHER / INFIELD:
    -> PITCHOUT: wide+high pitch, come up throwing
    -> BACKPICK: quick throw behind a big lead
    -> DAYLIGHT / TIMING play at 2B
       (P throws when SS/2B flashes behind the runner)

  WHEN TO BOTHER:
    fast runner + close game  -> hold aggressively
    slow / meaningless runner -> IGNORE, pitch to hitter

  GOAL: shorter lead + quicker delivery
        = the catcher gets a real chance`,
        },
      },
      incident: {
        title: "The Free 90 Feet",
        when: "Every level of baseball",
        where: "The pitcher's mound",
        impact: "A pitcher who ignores a fast runner — a slow, predictable delivery with no throws over — lets him take a huge lead and a perfect jump, and the runner strolls into second before the catcher's throw arrives, no matter how strong the catcher's arm.",
        body: [
          "Catchers get blamed for stolen bases, but the pitcher usually gives them away. A pitcher who works slowly from the stretch, lifts his leg high, never throws over, and gives the same look every time hands a fast runner everything he needs: a big, comfortable lead and a perfect read on the delivery. The runner times it, breaks early, and is sliding into second with the throw still in the air — the catcher never had a chance, because the lead and the jump were free.",
          "Controlling the running game is a team effort that starts before the pitch. The pitcher varies his looks and hold times, throws over to push the lead back, and uses the slide step to cut his delivery time so the catcher actually has time to throw the runner out. The catcher adds the pitchout, the backpick, and timing plays with the middle infielders. And the defense decides when it's worth the attention — a fast runner in a close game gets held aggressively, while a slow or meaningless runner is ignored so the pitcher can focus on the hitter. The goal of every tool is the same: shrink the lead, shorten the delivery, and turn a free 90 feet into a contested play.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Runner Takes His Lead", sub: "the steal threat", type: "attacker" },
          { label: "Pitcher Shrinks It", sub: "holds, picks, slide steps", type: "system" },
          { label: "Catcher's Tools", sub: "pitchout, backpick, timing", type: "victim" },
          { label: "A Contested Play", sub: "not a free base", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Pickoffs and holding runners become part of pitching craft" },
        { year: 1970, event: "The slide step popularized to combat speed-based offenses", highlight: true },
        { year: 1990, event: "Pitchouts and timing plays refined as the running game peaks" },
        { year: 2023, event: "MLB pitch clock and pickoff limits reshape holding runners" },
        { year: 2024, event: "Shrinking the lead and quickening delivery remain the keys to defending the steal" },
      ],
      keyTakeaways: [
        "Defending the steal starts with the pitcher — the runner's lead, jump, and the pitcher's time to the plate decide most steals",
        "The pitcher holds runners with varied looks, throws over on pickoffs, and uses the slide step to quicken delivery",
        "The catcher adds the pitchout and backpick; daylight and timing plays coordinate the pitcher with the middle infielders",
        "Decide when to bother: hold a fast runner in a close game aggressively, but largely ignore a slow or meaningless one",
      ],
      references: [
        { title: "MLB Official Rules: The Balk and Pickoffs", url: "https://www.mlb.com/official-information/official-rules" },
        { title: "USA Baseball: Controlling the Running Game", url: "https://www.usabaseball.com" },
        { title: "Little League: Holding Runners", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
      ],
    },
    quiz: {
      questions: [
        { id: "baseball-16-08-q1", type: "The Pitcher", challenge: `  A coach says stopping the running game starts on
  the mound, not behind the plate.`, text: "Why does defending the steal begin with the pitcher?", options: ["The runner's success depends mostly on his lead, jump, and the pitcher's time to the plate", "The catcher has nothing to do with throws", "Pitchers are always faster runners", "The umpire decides steals"], correctIndex: 0, explanation: "A steal is won mostly on the runner's lead and jump and how long the pitcher takes to deliver. The pitcher shrinks the lead and quickens his delivery so the catcher actually has time to throw the runner out — it's a team effort that starts on the mound." },
        { id: "baseball-16-08-q2", type: "Slide Step", challenge: `  With a fast runner on first, the pitcher uses a
  shortened, quicker leg lift.`, text: "What is the purpose of the slide step?", options: ["To cut the time to the plate so the catcher has a chance to throw the runner out", "To throw harder", "To deceive the umpire", "To rest the pitcher's legs"], correctIndex: 0, explanation: "The slide step is a shortened, quicker leg lift that reduces the pitcher's time to home plate. A faster delivery directly gives the catcher more time to catch and throw, often making it more valuable than the pickoff itself." },
        { id: "baseball-16-08-q3", type: "Pitchout", challenge: `  The defense suspects a steal or hit-and-run is on,
  so the catcher calls for a pitch thrown wide.`, text: "What is a pitchout?", options: ["A pitch thrown wide and high so the catcher can come up throwing on a suspected steal", "A pitch thrown in the dirt", "An intentional walk", "A pickoff to first base"], correctIndex: 0, explanation: "On a pitchout, the catcher calls for a pitch deliberately thrown wide and high, sacrificing a ball in the count so he can stand and throw cleanly on a suspected steal or hit-and-run. It trades a ball for a clean, early throw." },
        { id: "baseball-16-08-q4", type: "Backpick", challenge: `  A runner at first takes a big secondary lead as the
  pitch reaches the catcher.`, text: "What is a backpick?", options: ["A quick throw from the catcher behind the runner to catch his too-big secondary lead", "A pitch thrown behind the batter", "A pickoff from the pitcher", "A type of bunt"], correctIndex: 0, explanation: "A backpick is a quick throw from the catcher behind a runner who has taken too large a secondary lead at first, second, or third. It punishes a runner who drifts too far off the bag after the pitch." },
        { id: "baseball-16-08-q5", type: "Judgment", challenge: `  A slow runner reaches first with a five-run lead in
  the game.`, text: "How should the pitcher handle a slow or meaningless runner?", options: ["Largely ignore him and focus on the hitter", "Throw over to first ten times in a row", "Always pitch out", "Walk the next batter intentionally"], correctIndex: 0, explanation: "With a slow runner, a big lead, or a situation where the run barely matters, the pitcher should largely ignore the runner and focus on the hitter. Over-attention to a non-threat just disrupts the pitcher's rhythm for no benefit." },
      ],
    },
  },

  // ─── baseball-16-09: Defensive Positioning & Shifts ───────────────────────────
  {
    epochId: "baseball-16",
    wonder: {
      name: "Truist Park",
      location: "Atlanta, Georgia",
      era: "Modern",
      emoji: "🗺️",
    },
    id: "baseball-16-09",
    order: 9,
    title: "Defensive Positioning & Shifts",
    subtitle: "Positioning by tendency, guarding the lines, and the 2023 shift rule",
    category: "sports",
    xp: 106,
    badge: { id: "baseball16-badge-09", name: "Right Spot", emoji: "🗺️" },
    challengeType: "quiz",
    info: {
      tagline: "Being in the right spot before the pitch turns hits into outs without any extra range — defenses position by the hitter's tendencies, the count, and the score, but a 2023 rule now limits how far the infield can shift.",
      year: 2023,
      overview: [
        "Defensive positioning is the art of standing where the ball is most likely to be hit. A defense studies each hitter and shades its fielders accordingly:\n- PULL vs SPRAY — a strong pull hitter is likely to hit the ball to his pull side, so the defense shades that way; a spray hitter who uses the whole field gets a more balanced alignment.\n- POWER and SPEED — against a slow power hitter the infield may play deeper; against a fast slap hitter or bunt threat it plays in.\n- COUNT and SITUATION — in a clear hitting count or with a hit-and-run on, fielders adjust; with a double play in order they set DP depth.",
        "The most aggressive form of positioning was the full SHIFT — stacking three infielders on one side of second base against an extreme pull hitter, daring him to hit the other way. It was wildly effective, which is exactly why it was restricted:\n- In 2023, MLB adopted rules requiring TWO infielders on EACH side of second base, with all four infielders on the INFIELD DIRT, when the pitch is delivered.\n- Infielders may no longer be stacked three to one side, and they cannot switch sides mid-at-bat without repositioning legally.\n- The rule was designed to put more balls in play, restore range-based defense, and reward hitters who used to be erased by the shift.",
        "Within the rules, smart positioning still wins games:\n- Defenses shade infielders and outfielders toward a hitter's tendencies — the second baseman creeping toward the line against a pull hitter, the outfield rotating toward the gap a hitter favors.\n- Late and protecting a lead, corner infielders and corner outfielders GUARD THE LINES to take away extra-base hits down the line, conceding the more harmless single up the middle.\n- The lesson is unchanged: position by the hitter, the count, and the score, and being in the right spot is a defensive skill as valuable as raw range — now practiced within the two-on-each-side constraint.",
      ],
      technical: {
        title: "Positioning by Tendency and the 2023 Shift Restrictions",
        body: [
          "Positioning inputs: align the defense by the hitter's spray tendencies (pull vs all-fields), power and speed, the count, and the situation. Shade toward where a hitter most often hits the ball; play deeper against power, in against speed or a bunt threat; set DP depth with a double play in order. Outfielders rotate toward a hitter's favored gap. Late and protecting a lead, the corners guard the lines to take away doubles, conceding the single up the middle.",
          "The 2023 rule: MLB now requires two infielders positioned on each side of second base, all four on the infield dirt, at the moment the pitch is delivered — ending the extreme pull shift that stacked three infielders to one side. Infielders can't swap sides for a batter without it being a violation, and a breach awards the offense (the batter gets first base or the offense takes the result of the play, by their choice). The rule restores range-based defense and rewards pull hitters who were previously erased, while teams still shade aggressively within the two-on-each-side limit.",
        ],
        codeExample: {
          label: "Positioning and the 2023 Shift Rule",
          code: `  POSITION BY:
    -> PULL vs SPRAY tendency (shade to the hit side)
    -> POWER (play deeper) / SPEED (play in)
    -> COUNT + SITUATION (DP depth, hit-and-run)

  OLD FULL SHIFT (now ILLEGAL):
    3 infielders stacked on the PULL side of 2B
       SS  2B  1B  |  (nobody)  |   3B way over
                   2nd base

  2023 RULE (at the pitch):
    TWO infielders on EACH side of second base
    ALL FOUR on the INFIELD DIRT
       3B   SS | 2B   1B
              2nd base
    -> no 3-to-1 stacking, no mid-AB side swap
    -> violation: offense's choice (batter to 1st
       or take the play)

  LATE + PROTECTING A LEAD:
    corners GUARD THE LINES (take away doubles)`,
        },
      },
      incident: {
        title: "The Shift, and the Rule That Reined It In",
        when: "2010s–2023",
        where: "Major League Baseball",
        impact: "The infield shift became so effective at erasing pull-hitting sluggers that batting averages on balls in play fell and the game grew static — prompting MLB's 2023 rule mandating two infielders on each side of second base.",
        body: [
          "Through the 2010s, teams armed with spray-chart data shifted aggressively, stacking three infielders on the pull side against dead-pull hitters and turning sharply-hit ground balls that used to be singles into routine outs. It was smart, legal, and brutally effective — but as nearly every team adopted it, hits on balls in play dropped, left-handed pull hitters saw their averages crater, and many felt the game had become a parade of strikeouts, walks, and home runs with fewer balls in play and less action.",
          "In 2023 MLB responded with a positioning rule: at the moment of the pitch, two infielders must be on each side of second base and all four must be on the infield dirt, ending the three-to-one stack. The change restored range-based defense and rewarded hitters who had been erased, putting more balls in play. Crucially, it didn't end positioning — teams still shade by tendency, count, and score, and still guard the lines late to protect a lead. The lesson is that being in the right spot remains one of the most valuable defensive skills; the rule simply put boundaries on how far the infield can tilt.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Study the Hitter", sub: "pull, power, speed, count", type: "attacker" },
          { label: "Shade the Defense", sub: "to the likely ball", type: "system" },
          { label: "2023 Shift Rule", sub: "two each side, on the dirt", type: "victim" },
          { label: "Right Spot Within the Rules", sub: "outs without extra range", type: "result" },
        ],
      },
      timeline: [
        { year: 1946, event: "The 'Williams Shift' deployed against Ted Williams, an early extreme shift" },
        { year: 2015, event: "Data-driven shifts spread across MLB and erase pull hitters", highlight: true },
        { year: 2022, event: "Falling balls-in-play and offense prompt rule debate" },
        { year: 2023, event: "MLB mandates two infielders on each side of second, all on the dirt" },
        { year: 2024, event: "Teams shade aggressively within the two-on-each-side constraint" },
      ],
      keyTakeaways: [
        "Defenses position by the hitter's pull/spray tendency, power, speed, the count, and the score",
        "The extreme pull shift stacked three infielders on one side of second base and was hugely effective",
        "MLB's 2023 rule requires two infielders on each side of second base, all four on the infield dirt at the pitch",
        "Late and protecting a lead, corners guard the lines to take away extra-base hits; being in the right spot remains a key skill",
      ],
      references: [
        { title: "MLB: 2023 Rule Changes (Shift Restrictions)", url: "https://www.mlb.com/glossary/rules/shift-restrictions" },
        { title: "USA Baseball: Defensive Positioning", url: "https://www.usabaseball.com" },
        { title: "MLB: Defensive Shift History", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        { id: "baseball-16-09-q1", type: "2023 Rule", challenge: `  A defense wants to stack three infielders on the
  right side against a left-handed pull hitter.`, text: "What does MLB's 2023 shift rule require?", options: ["Two infielders on each side of second base, all four on the infield dirt at the pitch", "Three infielders allowed on the pull side", "All infielders in the outfield grass", "No positioning restrictions at all"], correctIndex: 0, explanation: "The 2023 rule requires two infielders on each side of second base, with all four on the infield dirt, at the moment the pitch is delivered. It ended the extreme three-to-one pull shift that had erased pull hitters." },
        { id: "baseball-16-09-q2", type: "Tendency", challenge: `  Scouting shows a hitter pulls almost everything to
  the right side.`, text: "How does the defense position against a strong pull hitter?", options: ["Shade fielders toward his pull side, where the ball is most likely to go", "Shade everyone the opposite way", "Stand in the exact same spots every time", "Bring the outfielders in to the infield"], correctIndex: 0, explanation: "Against a strong pull hitter, the defense shades its fielders toward the pull side, where he most often hits the ball. Positioning by tendency puts fielders in the ball's likely path, turning hits into outs without extra range." },
        { id: "baseball-16-09-q3", type: "Guard the Lines", challenge: `  Late in a one-run game the defense wants to prevent
  extra-base hits.`, text: "Why do the corners 'guard the lines' late with a lead?", options: ["To take away extra-base hits down the line, conceding the more harmless single up the middle", "To make more double plays", "To bunt for a base hit", "To shift everyone to one side"], correctIndex: 0, explanation: "Guarding the lines means the corner infielders and corner outfielders shade toward the foul lines to take away doubles and triples down the line. The defense concedes a harmless single up the middle to prevent the runner from reaching scoring position." },
        { id: "baseball-16-09-q4", type: "Why Restricted", challenge: `  Through the 2010s the infield shift became extremely
  effective at erasing pull hitters.`, text: "Why did MLB restrict the shift in 2023?", options: ["To put more balls in play and restore range-based defense after the shift suppressed offense", "Because shifts were dangerous to fielders", "To speed up pitching changes", "Because shifts never worked"], correctIndex: 0, explanation: "The shift was so effective that hits on balls in play fell and the game grew static, with pull hitters' averages cratering. MLB restricted it in 2023 to put more balls in play, restore range-based defense, and reward hitters previously erased by the shift." },
        { id: "baseball-16-09-q5", type: "Power vs Speed", challenge: `  A fast slap hitter who can bunt steps to the plate.`, text: "How might the infield adjust its depth against a fast slap or bunt threat?", options: ["Play in, to defend the bunt and field slow rollers in time", "Play as deep as possible", "Ignore him and play normal depth", "Move all infielders to one side"], correctIndex: 0, explanation: "Against a fast slap hitter or bunt threat, the infield plays in to defend the bunt and field slow rollers in time to make the throw. Against a slow power hitter, by contrast, the infield may play deeper for range." },
      ],
    },
  },

  // ─── baseball-16-10: Late-Game & Lead Protection ──────────────────────────────
  {
    epochId: "baseball-16",
    wonder: {
      name: "Kauffman Stadium",
      location: "Kansas City, Missouri",
      era: "Modern",
      emoji: "🔒",
    },
    id: "baseball-16-10",
    order: 10,
    title: "Late-Game & Lead Protection",
    subtitle: "No-doubles defense, conceding a run, and locking down a win",
    category: "sports",
    xp: 110,
    badge: { id: "baseball16-badge-10", name: "Lockdown", emoji: "🔒" },
    challengeType: "quiz",
    info: {
      tagline: "Protecting a late lead flips the defense's priorities — outfielders play deep, corners guard the lines, and the team will happily concede a single, or even a run, to take away the extra-base hit and the big inning that could beat them.",
      year: 2024,
      overview: [
        "When a team is protecting a lead in the late innings, its entire defensive philosophy shifts. Earlier in the game the defense plays to make the most outs; now it plays to prevent the BIG INNING that could erase the lead. The signature alignment is the NO-DOUBLES (or 'prevent') defense:\n- OUTFIELDERS play DEEP, so nothing gets over their heads for a double or triple — they will concede a softer single in front of them.\n- CORNER INFIELDERS GUARD THE LINES to take away extra-base hits down the line.\n- The whole idea is to keep the ball in front of the defense and keep hitters out of scoring position.",
        "Protecting a lead also changes the math on conceding outs and runs:\n- CONCEDE THE SINGLE — with a multi-run lead, the defense happily gives up a single to make sure no double or triple turns a rally into a big inning.\n- CONCEDE A RUN FOR A SURE OUT — with a comfortable lead, the infield may play back and trade a run on a ground ball for the certain out, rather than risk a play at the plate that could let the inning continue.\n- The priority is OUTS and keeping runners out of scoring position, because a string of extra-base hits is what beats a leading team late.",
        "But the priority depends on HOW BIG the lead is:\n- With a ONE-RUN lead in the last inning, the run matters again — the defense may play the infield IN with a runner on third and defend the bunt or suicide squeeze aggressively, because that single run is the game.\n- With a BIGGER lead, the defense reverts to no-doubles, conceding singles and even a run to take outs and prevent the big inning.\n- Defending a late lead also means executing the small stuff cleanly: holding runners, knowing the bunt and squeeze coverages, and hitting cutoff men so a single run never becomes two. The priority shift — from making outs to preventing the big inning, and back to saving the single run when it's close — is the essence of closing out a win.",
      ],
      technical: {
        title: "No-Doubles Defense and the Priority Shift",
        body: [
          "No-doubles alignment: protecting a lead, the outfielders play deep so nothing gets over their heads, the corner infielders guard the lines to take away doubles, and the defense keeps the ball in front and hitters out of scoring position. With a multi-run lead, concede the single and even concede a run for a sure out — the enemy is the big inning built on extra-base hits, not one run. Play back, take the certain out, and keep runners from reaching second and third.",
          "The priority shift by lead size: a one-run lead in the final inning brings the run back into focus — the defense may play the infield in with a runner on third, defend the bunt and suicide squeeze aggressively, and treat the single run as the game. A larger lead reverts to no-doubles and conceding runs for outs. Throughout, the late-game defense must execute the fundamentals cleanly — hold runners, know the bunt and squeeze coverages, and hit the cutoff man — so one run never becomes two and no single rally becomes a crooked number.",
        ],
        codeExample: {
          label: "Late-Game Lead Protection",
          code: `  PROTECTING A LEAD = prevent the BIG INNING

  NO-DOUBLES ('PREVENT') DEFENSE:
    OUTFIELDERS deep  -> nothing over their heads
       LF        CF        RF
        \\        |        /
    CORNERS guard the LINES -> no doubles down the line
    -> keep the ball IN FRONT, runners out of SP

  CONCEDE TO WIN (multi-run lead):
    -> give up the SINGLE (no extra-base hits)
    -> concede a RUN for the SURE OUT (play back)
    -> priority = OUTS, not one run

  ONE-RUN LEAD, LAST INNING (run matters again):
    -> infield IN with a runner on third
    -> defend the bunt / SUICIDE SQUEEZE hard

  ALWAYS: hold runners, know coverages, HIT the cutoff
          -> one run never becomes two`,
        },
      },
      incident: {
        title: "The Double That Beats You Late",
        when: "Late innings of close games",
        where: "Ballparks everywhere",
        impact: "A leading team that lets a fly ball drop over a too-shallow outfielder's head for a double — putting the tying run in scoring position — can watch a manageable single turn into the rally that costs the game.",
        body: [
          "Late-game losses are often built on extra-base hits. A team nursing a two-run lead in the eighth plays its outfielders at normal depth, a deep fly carries over a fielder's head for a double, the next hitter lines a single, and suddenly the tying run is at the plate with a runner in scoring position — all from a ball that, with the outfielders playing deep, would have been a harmless single or an out. The big inning that beats a leading team almost always runs through a double or triple that put a runner in scoring position.",
          "No-doubles defense exists precisely to prevent that. Protecting a lead, the outfielders play deep so nothing gets over their heads, the corners guard the lines, and the defense concedes the single — even a run — to keep hitters out of scoring position and prevent the big inning. The priority flexes with the lead: a one-run lead in the ninth brings the run back into focus, so the infield may play in and defend the squeeze, while a larger lead reverts to conceding singles for outs. Add clean fundamentals — holding runners, knowing the coverages, hitting the cutoff man — and a leading team turns the last few innings into a lockdown instead of a collapse.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Protecting a Late Lead", sub: "prevent the big inning", type: "attacker" },
          { label: "No-Doubles Defense", sub: "outfield deep, guard the lines", type: "system" },
          { label: "Concede to Win", sub: "give up singles, even a run", type: "victim" },
          { label: "Lock Down the Win", sub: "one run never becomes two", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Late-game lead-protection defense becomes standard strategy" },
        { year: 1970, event: "No-doubles ('prevent') alignment formalized for the late innings", highlight: true },
        { year: 1990, event: "The dedicated closer role sharpens late-game defensive focus" },
        { year: 2015, event: "Win-probability data refines when to concede a run for an out" },
        { year: 2024, event: "The priority shift — prevent the big inning, then save the single run — defines closing out wins" },
      ],
      keyTakeaways: [
        "Protecting a late lead shifts the priority from making the most outs to preventing the big inning",
        "No-doubles defense plays outfielders deep and corners on the lines to take away extra-base hits and keep runners out of scoring position",
        "With a multi-run lead, concede the single — and even a run for a sure out — because the big inning is the real threat",
        "With a one-run lead in the last inning, the run matters again: play the infield in and defend the bunt and squeeze aggressively",
      ],
      references: [
        { title: "USA Baseball: Late-Game Defense", url: "https://www.usabaseball.com" },
        { title: "Little League: Defensive Strategy", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Situational Defense", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        { id: "baseball-16-10-q1", type: "No-Doubles", challenge: `  A team protects a two-run lead in the eighth inning.`, text: "How does the no-doubles defense position the outfielders?", options: ["Deep, so nothing gets over their heads for an extra-base hit, conceding a softer single", "Shallow, to catch bloopers", "On the infield dirt", "Stacked on one side of the field"], correctIndex: 0, explanation: "No-doubles defense plays the outfielders deep so nothing gets over their heads for a double or triple. The defense willingly concedes a softer single in front of them to keep hitters out of scoring position and prevent the big inning." },
        { id: "baseball-16-10-q2", type: "Priority Shift", challenge: `  A coach explains that protecting a lead changes what
  the defense is trying to do.`, text: "How does the defense's priority change when protecting a late lead?", options: ["From making the most outs to preventing the big inning that could erase the lead", "From defense to offense", "It does not change at all", "From preventing runs to scoring runs"], correctIndex: 0, explanation: "Protecting a late lead shifts the priority from making the most outs to preventing the big inning. Since a string of extra-base hits is what beats a leading team, the defense focuses on keeping the ball in front and runners out of scoring position." },
        { id: "baseball-16-10-q3", type: "Concede to Win", challenge: `  With a four-run lead, a ground ball is hit with a
  runner on third.`, text: "Why might the defense concede a run for a sure out here?", options: ["With a comfortable lead, a certain out is worth more than preventing one run", "Because the run cannot score on a grounder", "Because conceding runs is always correct", "To force extra innings"], correctIndex: 0, explanation: "With a comfortable lead, the infield plays back and trades a run on a ground ball for the certain out, rather than risk a play at the plate that could extend the inning. The priority is outs and preventing the big inning, not saving one run." },
        { id: "baseball-16-10-q4", type: "One-Run Lead", challenge: `  Bottom of the ninth, one-run lead, runner on third
  with one out.`, text: "How does the defense change with a one-run lead in the last inning?", options: ["The run matters again, so play the infield in and defend the squeeze aggressively", "Concede the run and play deep", "Ignore the runner on third", "Remove an infielder"], correctIndex: 0, explanation: "With a one-run lead in the final inning, that single run is the game, so the run matters again. The defense may play the infield in with a runner on third and defend the bunt and suicide squeeze aggressively to keep the tying run from scoring." },
        { id: "baseball-16-10-q5", type: "Fundamentals", challenge: `  A leading team gives up a single, but the outfielder
  misses the cutoff man and the runner takes second.`, text: "Why are clean fundamentals so important when protecting a lead?", options: ["So one run never becomes two and no single rally becomes a big inning", "Because fundamentals only matter early in the game", "To score more runs", "They don't matter with a lead"], correctIndex: 0, explanation: "Defending a late lead requires executing the small stuff cleanly — holding runners, knowing the bunt and squeeze coverages, and hitting the cutoff man — so that one run never becomes two and no single rally snowballs into the big inning that erases the lead." },
      ],
    },
  },
];
