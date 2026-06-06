import type { StageConfig, EpochConfig } from "./types";

export const flagFootballEpoch: EpochConfig = {
  id: "flag-football",
  name: "Flag Football",
  subtitle: "From First Snap to High-School Mastery",
  description:
    "The fastest-growing team sport in America — and an Olympic sport for LA 2028 — taught from the ground up. The first ten sections build your foundation: the field, the rules, pulling flags, throwing, catching, routes, and the basics of offense, defense, and agility. The last ten go deep at a high-school level: formations, the quarterback's reads, route concepts, defensive coverages, the pass rush, misdirection, athletic development, and game IQ. Offense, defense, speed, and strategy — all of it.",
  emoji: "🏈",
  color: "emerald",
  unlocked: true,
};

export const flagFootballStages: StageConfig[] = [
  // ─── flag-01: Welcome to Flag Football ───────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The flag football field", location: "Parks, schools, and now the Olympics", era: "Modern", emoji: "🏈" },
    id: "flag-01",
    order: 1,
    title: "Welcome to Flag Football",
    subtitle: "What the game is and why it's exploding",
    category: "sports",
    xp: 85,
    badge: { id: "flag-badge-01", name: "Flag Rookie", emoji: "🏈" },
    challengeType: "quiz",
    info: {
      tagline: "Same football brain, none of the tackling. Flag football keeps the throwing, catching, and strategy of the tackle game — and replaces the hit with pulling a flag off the ball-carrier's belt. It's fast, it's for everyone, and it's now an Olympic sport.",
      year: 2024,
      overview: [
        "Flag football is a non-contact version of American football. Instead of tackling, defenders stop the ball-carrier by pulling one of the two flags hanging from a belt around their waist. No tackling, no big collisions — but all the passing, catching, route-running, and play-calling that make football great.",
        "A few things make the game distinct and accessible:\n- NON-CONTACT — pulling a flag replaces the tackle, so the game is far safer and open to all ages, sizes, and genders.\n- SMALLER & FASTER — usually played 5-on-5 or 7-on-7 on a smaller field, so everyone touches the ball and the pace is quick.\n- SKILL OVER SIZE — speed, agility, route-running, and smarts matter more than raw mass, rewarding technique and football IQ.",
        "The sport is booming, and the stakes are real:\n- It is one of the fastest-growing team sports, especially for girls — many U.S. states now sanction girls' high-school flag football with official state championships.\n- The NFL backs it heavily through NFL FLAG, and the 2023 Pro Bowl became a flag-football event.\n- Most exciting: flag football will debut at the 2028 Los Angeles Olympic Games — meaning the skills in this course lead all the way to a global stage.",
      ],
      technical: {
        title: "5-on-5 vs 7-on-7 and the Core Rules",
        body: [
          "Formats vary, but the essentials are shared:\n- 5-on-5 is the most common (and the Olympic) format; 7-on-7 is also popular, especially in some school leagues.\n- The ball is advanced only by passing and handing/pitching it — there is no tackling and, in most rule sets, no blocking or intentional contact.\n- A defender 'downs' the ball-carrier by removing a flag; where the flag is pulled is where the ball is spotted.",
          "The flow of a possession is simple to grasp:\n- A team gets a set number of downs (often 4) to reach a midfield 'line to gain', then a new set of downs to reach the end zone — or a fixed number of plays to score, depending on the rule set.\n- Points come from touchdowns (6) plus a try for 1 (from a short line) or 2 (from farther out).\n- Because rules differ between NFL FLAG, school associations, and the Olympic code, good players learn the specific rules of their league — but the foundations are universal.",
        ],
      },
      incident: {
        title: "Flag Football Joins the Olympics",
        when: "October 2023",
        where: "International Olympic Committee / Los Angeles 2028",
        impact: "The IOC approved flag football (5-on-5) for the 2028 Los Angeles Olympics — a landmark moment that elevated the sport to the global stage",
        body: [
          "In October 2023, the International Olympic Committee voted to add flag football to the program of the 2028 Summer Olympics in Los Angeles, with both men's and women's 5-on-5 tournaments. It was a milestone decades in the making for a sport once seen as just a backyard or gym-class game.",
          "The decision supercharged an already-growing sport:\n- It gave young players, especially girls, a clear path from school fields to the Olympic podium.\n- The NFL and USA Football championed the bid, and interest in school and club programs surged.\n- It cemented flag football as a serious, skill-driven sport — the reason a complete, high-school-level course like this one matters.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Snap the Ball", sub: "offense starts the play", type: "system" },
          { label: "Pass / Hand Off", sub: "no tackling allowed", type: "attacker" },
          { label: "Pull the Flag", sub: "defense stops the carrier", type: "victim" },
          { label: "Score a Touchdown", sub: "reach the end zone", type: "result" },
        ],
      },
      timeline: [
        { year: 1940, event: "Flag football emerges (military bases popularize the non-contact game)" },
        { year: 1994, event: "NFL FLAG-style youth programs expand nationwide" },
        { year: 2021, event: "Girls' high-school flag football accelerates as states sanction it", highlight: true },
        { year: 2023, event: "Pro Bowl becomes a flag-football event; IOC adds flag football to LA 2028" },
      ],
      keyTakeaways: [
        "Flag football is non-contact: defenders pull a flag instead of tackling — safer and open to everyone",
        "Usually 5-on-5 (the Olympic format) or 7-on-7 on a smaller field, with fast pace and lots of touches",
        "Skill, speed, and football IQ matter more than size, rewarding technique over mass",
        "It's booming — especially for girls — and debuts at the 2028 Los Angeles Olympics",
      ],
      references: [
        { title: "NFL FLAG — official program", url: "https://nflflag.com/" },
        { title: "Flag football at the 2028 Olympics — overview", url: "https://en.wikipedia.org/wiki/Flag_football" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-01-q1", type: "Core Idea", challenge: "How you're stopped.", text: "In flag football, how is the ball-carrier stopped?", options: ["A defender pulls a flag off their belt", "A defender tackles them to the ground", "They run out of bounds only", "The whistle blows every 5 seconds"], correctIndex: 0, explanation: "Pulling a flag replaces the tackle — the play ends where the flag is removed." },
        { id: "flag-01-q2", type: "Format", challenge: "The Olympic format.", text: "What is the most common (and Olympic) flag football format?", options: ["5-on-5", "11-on-11", "3-on-3", "9-on-9"], correctIndex: 0, explanation: "5-on-5 is the standard, and the format chosen for the 2028 Olympics." },
        { id: "flag-01-q3", type: "Big Moment", challenge: "Going global.", text: "At which Games will flag football make its Olympic debut?", options: ["Los Angeles 2028", "Paris 2024", "Tokyo 2020", "Beijing 2022"], correctIndex: 0, explanation: "The IOC approved flag football for LA 2028 in October 2023." },
        { id: "flag-01-q4", type: "Why It's Different", challenge: "What it rewards.", text: "Why does flag football reward skill over size?", options: ["No contact means speed, agility, and IQ matter more than mass", "Bigger players always win", "It's purely random", "Only kicking matters"], correctIndex: 0, explanation: "Without tackling, technique and football smarts decide the game." },
      ],
    },
  },

  // ─── flag-02: The Field & Game Flow ──────────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The flag football field", location: "Standard layout", era: "Modern", emoji: "📐" },
    id: "flag-02",
    order: 2,
    title: "The Field & Game Flow",
    subtitle: "Dimensions, downs, no-run zones, and scoring",
    category: "sports",
    xp: 88,
    badge: { id: "flag-badge-02", name: "Field General", emoji: "📐" },
    challengeType: "quiz",
    info: {
      tagline: "You can't play smart if you don't know the field. Flag football's smaller field, midfield 'line to gain', and special no-run zones shape every play — learn the geography and the rules of moving the chains.",
      year: 2024,
      overview: [
        "A 5-on-5 flag field is smaller than a tackle field — commonly about 70 yards long by 30 wide, split into two 25-yard halves with a 10-yard end zone at each end (rules vary by league). The smaller space means tighter coverage, quicker decisions, and more action.",
        "Moving the ball works on a line-to-gain system:\n- The field is divided so that an offense first must reach a midfield line to earn a new set of downs.\n- A team typically gets 4 downs (plays) to cross midfield, then a new set of 4 to reach the end zone.\n- Fail to advance the chains and the ball turns over to the other team where the play ended.",
        "Two special zones change strategy near the goal:\n- NO-RUN ZONES — usually a 5-yard area before each end zone and before midfield where running plays are illegal, so the offense must pass to score or convert there.\n- This forces passing in key spots and is a uniquely flag-football wrinkle that smart offenses and defenses plan around.\n- Scoring: a touchdown is 6 points, with a 1-point try from a short distance or a 2-point try from farther out, and a safety (2) if the offense is downed in its own end zone.",
      ],
      technical: {
        title: "Field Geography and the Chains",
        body: [
          "Knowing the markings keeps you onside and in bounds:\n- The line of scrimmage is where the ball is spotted; the offense lines up behind it, the defense on the other side.\n- A rusher must usually start a set distance off the line (commonly 7 yards) before they can rush the passer — a rule that shapes the pass rush (covered later).\n- Sidelines and end lines are 'out'; in flag, a player is also 'down' when a flag is pulled, when they step out, or when the ball hits the ground.",
          "The line to gain and no-run zones drive play-calling:\n- Near a no-run zone, defenses can sell out against the pass; offenses counter with quick routes and play-action.\n- Field position matters more on a short field — a turnover near your own end zone is dangerous.\n- Because exact dimensions and zone rules differ (NFL FLAG vs Olympic vs school leagues), always confirm your league's field and rules before a game.",
        ],
        codeExample: {
          label: "5-on-5 Flag Field (typical)",
          code: `  |END|  no-run   midfield   no-run  |END|
  |ZONE|  zone    line-to-gain  zone  |ZONE|
  +----+--------+------------+-------+----+
  | 10 |   25 yards   |   25 yards    | 10 |
  +----+--------+------------+-------+----+
   score   pass-only   1st down   pass-only  score
   ~70 yards long  x  ~30 yards wide (rules vary)`,
        },
      },
      incident: {
        title: "Why Flag Has Its Own Rulebook",
        when: "Modern",
        where: "NFL FLAG, schools, and the Olympic code",
        impact: "Different organizations use different field sizes and rules, so 'the rules' depend on your league — a key thing every player learns",
        body: [
          "Unlike tackle football's fairly standardized rules, flag football is governed by several bodies — NFL FLAG, state high-school associations, recreational leagues, and the international (Olympic) federation — each with its own field dimensions, down systems, and no-run-zone rules.",
          "This variety is part of the sport's accessibility, but it means:\n- Players must learn their specific league's rules: field length, number of downs, rushing distance, and whether blocking or running is allowed.\n- The core concepts (line to gain, no-run zones, flag pulls) carry over everywhere, even as the details change.\n- Coaches design plays around the exact field and zones they're playing on — geography is strategy.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Line of Scrimmage", sub: "where the play starts", type: "system" },
          { label: "Line to Gain (midfield)", sub: "earn a new set of downs", type: "attacker" },
          { label: "No-Run Zone", sub: "must pass to advance", type: "victim" },
          { label: "End Zone", sub: "touchdown = 6", type: "result" },
        ],
      },
      timeline: [
        { year: 1940, event: "Non-contact football standardizes the flag-pull and smaller field" },
        { year: 2000, event: "NFL FLAG codifies youth 5-on-5 field and rules" },
        { year: 2018, event: "International federation standardizes 5-on-5 for global play", highlight: true },
        { year: 2024, event: "Olympic-code field and rules finalized ahead of LA 2028" },
      ],
      keyTakeaways: [
        "A 5-on-5 field is smaller (~70x30 yds with 10-yard end zones) — tighter coverage, faster decisions",
        "Offenses get downs to reach a midfield line to gain, then more downs to reach the end zone",
        "No-run zones (near midfield and the end zone) force passing in key spots",
        "Field size and rules vary by league (NFL FLAG, schools, Olympic) — always confirm yours",
      ],
      references: [
        { title: "NFL FLAG — rules & field", url: "https://nflflag.com/leagues/rules" },
        { title: "Flag football rules — overview", url: "https://en.wikipedia.org/wiki/Flag_football#Rules" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-02-q1", type: "Field", challenge: "Earning downs.", text: "What must an offense reach to earn a fresh set of downs?", options: ["The midfield line to gain", "The 50-yard hash only", "The sideline", "The kickoff line"], correctIndex: 0, explanation: "Cross the midfield line to gain to earn a new set of downs toward the end zone." },
        { id: "flag-02-q2", type: "Special Zone", challenge: "No running here.", text: "What happens in a no-run zone?", options: ["Running plays are illegal — the offense must pass", "Players run faster", "Tackling is allowed", "The clock stops permanently"], correctIndex: 0, explanation: "No-run zones near midfield and the end zone force the offense to throw." },
        { id: "flag-02-q3", type: "Scoring", challenge: "Points.", text: "How many points is a touchdown worth?", options: ["6", "3", "1", "7 automatically"], correctIndex: 0, explanation: "A touchdown is 6, followed by a 1- or 2-point try." },
        { id: "flag-02-q4", type: "Rules Awareness", challenge: "Whose rules?", text: "Why must players confirm the rules before a game?", options: ["Field size and rules differ between leagues (NFL FLAG, school, Olympic)", "Rules are identical everywhere", "There are no rules", "Only referees need to know"], correctIndex: 0, explanation: "Flag football has several governing bodies with different specifics." },
      ],
    },
  },

  // ─── flag-03: Rules & Positions ──────────────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The 5-on-5 lineup", location: "Offense vs defense", era: "Modern", emoji: "🧍" },
    id: "flag-03",
    order: 3,
    title: "Positions & Key Rules",
    subtitle: "Who plays where — and what you can and can't do",
    category: "sports",
    xp: 90,
    badge: { id: "flag-badge-03", name: "Rule Keeper", emoji: "🧍" },
    challengeType: "quiz",
    info: {
      tagline: "With only five players a side, everyone matters and everyone is eligible. Learn the positions, who can catch a pass, and the no-contact rules that define how the game is played cleanly.",
      year: 2024,
      overview: [
        "In 5-on-5, roles are flexible, but common positions exist on each side. On offense:\n- QUARTERBACK (QB) — takes the snap and throws or hands off.\n- CENTER — snaps the ball, then becomes an eligible receiver.\n- RUNNING BACK / RUSHERS & RECEIVERS — line up to run routes or take handoffs.\n- In flag, all offensive players are usually eligible to catch a pass (unlike tackle football).",
        "On defense, players cover and rush:\n- RUSHER — the designated pass-rusher who can chase the QB (from the required distance off the line).\n- DEFENSIVE BACKS / SAFETIES — cover receivers in man or zone and pull flags.\n- With five defenders against five eligible receivers, matchups and communication are everything.",
        "The no-contact rules are what keep the game flag football:\n- No tackling, and in most codes no blocking or intentional contact — you play the ball and the flags, not the body.\n- The QB usually can't run in many rule sets (or there are limits), and there are rules against guarding/shielding your flags (flag guarding) with your arm.\n- Penalties cover contact, flag guarding, offside, illegal rush, and pass interference — clean technique avoids them.",
      ],
      technical: {
        title: "Eligibility, Flag Guarding, and Common Penalties",
        body: [
          "Two rules surprise newcomers:\n- ELIGIBILITY — because almost everyone can catch, defenses can't ignore the center or a 'lineman'; every offensive player is a threat.\n- FLAG GUARDING — the ball-carrier may NOT use a hand, arm, or the ball to block a defender from grabbing a flag; doing so is a penalty (and removes a key 'cheat' from running).",
          "Knowing the common penalties keeps your team out of trouble:\n- Offense: flag guarding, illegal forward pass, offensive pass interference, false start.\n- Defense: illegal contact/holding, defensive pass interference, illegal rush (rushing from too close or too early), stripping the ball.\n- Because contact is penalized, defenders must master pulling flags cleanly without grabbing or shoving — a skill, not a collision.",
        ],
      },
      incident: {
        title: "Everyone Eligible — Why Flag Strategy Differs",
        when: "Modern",
        where: "Flag football tactics",
        impact: "Universal eligibility and no blocking make flag a passing- and spacing-driven game, distinct from tackle football",
        body: [
          "Because nearly every offensive player can catch and there's no blocking, flag football became a game of spacing, route concepts, and quick decisions rather than trench warfare. Defenses can't double everyone, so offenses spread the field and attack matchups.",
          "It reshapes how the game is coached:\n- With no blocking, the QB must get the ball out fast against the rush — timing is king.\n- Defenses rely on coverage discipline and clean flag-pulling, not physicality.\n- The result is a fast, cerebral sport where understanding rules and roles directly translates to winning — the foundation for everything deeper in this course.",
        ],
      },
      diagram: {
        nodes: [
          { label: "QB + Center", sub: "snap, then throw/hand off", type: "system" },
          { label: "Eligible Receivers", sub: "almost everyone can catch", type: "attacker" },
          { label: "Rusher + DBs", sub: "rush and cover", type: "victim" },
          { label: "No Contact", sub: "flags, not tackles", type: "result" },
        ],
      },
      timeline: [
        { year: 1940, event: "Non-contact rules define the flag game" },
        { year: 2000, event: "NFL FLAG standardizes 5-on-5 positions and eligibility" },
        { year: 2015, event: "Flag-guarding enforcement tightens to keep the game clean", highlight: true },
        { year: 2024, event: "Olympic code clarifies rushing, eligibility, and penalties" },
      ],
      keyTakeaways: [
        "In 5-on-5, common roles are QB, center, receivers/backs on offense; rusher and DBs on defense",
        "Almost all offensive players are eligible receivers — every player is a threat",
        "No tackling and (usually) no blocking or contact — you play the ball and the flags",
        "Flag guarding (blocking access to your flags) is illegal; clean technique avoids penalties",
      ],
      references: [
        { title: "NFL FLAG — positions & penalties", url: "https://nflflag.com/leagues/rules" },
        { title: "Flag football positions — overview", url: "https://en.wikipedia.org/wiki/Flag_football" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-03-q1", type: "Eligibility", challenge: "Who can catch.", text: "Who is typically eligible to catch a pass in flag football?", options: ["Almost all offensive players, including the center after the snap", "Only the running back", "Only two designated receivers", "No one — passing is illegal"], correctIndex: 0, explanation: "Universal eligibility makes every offensive player a threat." },
        { id: "flag-03-q2", type: "Penalty", challenge: "Hands off the flags.", text: "What is 'flag guarding'?", options: ["Illegally blocking a defender's access to your flags with hand/arm/ball", "A legal blocking technique", "Covering a receiver", "A type of route"], correctIndex: 0, explanation: "The ball-carrier can't shield their flags — it's a penalty." },
        { id: "flag-03-q3", type: "Defense", challenge: "Chasing the QB.", text: "Which defender is designated to rush the quarterback?", options: ["The rusher (from the required distance off the line)", "The center", "The quarterback", "Nobody can rush"], correctIndex: 0, explanation: "The rusher must start the required distance back before rushing the passer." },
        { id: "flag-03-q4", type: "Contact", challenge: "Clean play.", text: "What is generally NOT allowed in flag football?", options: ["Tackling and (in most codes) blocking or intentional contact", "Throwing the ball", "Running routes", "Pulling flags"], correctIndex: 0, explanation: "It's non-contact — you play the ball and flags, not the body." },
      ],
    },
  },

  // ─── flag-04: Pulling Flags ──────────────────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The flag pull", location: "The defender's craft", era: "Modern", emoji: "🚩" },
    id: "flag-04",
    order: 4,
    title: "Pulling Flags",
    subtitle: "The tackle of flag football — technique and approach",
    category: "sports",
    xp: 92,
    badge: { id: "flag-badge-04", name: "Flag Snatcher", emoji: "🚩" },
    challengeType: "quiz",
    info: {
      tagline: "The flag pull IS the tackle — and it's a real, coachable skill. Miss it and the offense scores; master it and you become the defender no one can shake. It's all about angle, balance, and the eyes.",
      year: 2024,
      overview: [
        "Pulling a flag sounds simple but is the defining defensive skill. A clean pull stops the play exactly where the flag comes off — so good defenders take smart angles, stay balanced, and grab the flag, not the ball-carrier.",
        "The technique has a clear sequence:\n- BREAK DOWN — as you approach, shorten your steps and get under control (a balanced 'breakdown' stance) so you can react to a cut.\n- EYES ON THE HIPS — watch the ball-carrier's belt/hips, not their head or the ball; the hips can't lie about which way they're going.\n- AIM AND PULL — target the flag (usually one on each hip), grab with one hand, and pull it cleanly off, holding it up so the official sees the stop.",
        "Approach and angle separate good defenders from beaten ones:\n- PURSUIT ANGLE — run to where the ball-carrier is GOING, not where they are, so you cut off the escape.\n- DON'T OVERRUN — stay slightly inside-out or use the sideline as an extra defender; let them run into your help.\n- COMPOSURE — many missed flags come from lunging; patient, balanced defenders pull far more flags.",
      ],
      technical: {
        title: "Angles, the Sideline, and Avoiding the Whiff",
        body: [
          "Defense is geometry plus discipline:\n- A proper pursuit angle accounts for the runner's speed — aim ahead of them so your path intersects theirs.\n- Use the sideline as a 'free defender': force the runner toward it so they have less room and you have help.\n- Keep your shoulders square and feet under you; lunging early lets a single cut leave you grabbing air.",
          "Common mistakes and fixes:\n- WHIFFING on a juke: stay balanced and let the runner commit before you reach for the flag.\n- GETTING TURNED AROUND: keep the runner in front and to one side (leverage), never let them cross your face untouched.\n- HOLDING/CONTACT: grab the flag, not the jersey or body — contact is a penalty and a missed stop. Drill the motion until it's automatic.",
        ],
      },
      incident: {
        title: "Why Defense Wins Flag Championships",
        when: "Modern",
        where: "Competitive flag football",
        impact: "Elite flag teams are built on disciplined flag-pulling and pursuit — missed pulls turn short gains into touchdowns on a small field",
        body: [
          "On a small field with fast, eligible receivers, a single missed flag pull often becomes a touchdown — there's no second wave of tacklers to clean up. Championship flag teams obsess over flag-pull fundamentals and pursuit angles the way tackle teams obsess over tackling.",
          "Coaches drill it relentlessly:\n- Breakdown and mirror drills teach balance and reacting to cuts without lunging.\n- Angle-pursuit drills teach defenders to take away the runner's path and use the sideline.\n- The payoff: defenses that pull flags cleanly limit big plays, and limiting big plays wins games on a short field.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Break Down", sub: "balanced, under control", type: "system" },
          { label: "Eyes on the Hips", sub: "read the belt, not the ball", type: "attacker" },
          { label: "Pursuit Angle", sub: "run to where they're going", type: "victim" },
          { label: "Clean Flag Pull", sub: "stop where the flag comes off", type: "result" },
        ],
      },
      timeline: [
        { year: 1940, event: "The flag pull replaces the tackle in non-contact football" },
        { year: 2005, event: "Coaches formalize breakdown and pursuit-angle drills for flag" },
        { year: 2018, event: "Elite club programs make flag-pull technique a core skill", highlight: true },
        { year: 2024, event: "Olympic-level defense emphasizes pursuit and clean pulls" },
      ],
      keyTakeaways: [
        "The flag pull is the tackle — a coachable skill of angle, balance, and clean technique",
        "Break down under control, keep your eyes on the hips/belt, then grab and pull the flag",
        "Take a pursuit angle to where the runner is going, and use the sideline as a free defender",
        "Most missed flags come from lunging — stay balanced and let the runner commit",
      ],
      references: [
        { title: "Flag-pulling technique — coaching basics", url: "https://nflflag.com/" },
        { title: "Pursuit and angles in football defense", url: "https://en.wikipedia.org/wiki/Tackle_(football_move)" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-04-q1", type: "Technique", challenge: "Where to look.", text: "Where should a defender focus when pulling a flag?", options: ["The ball-carrier's hips/belt", "Their eyes", "The football", "The scoreboard"], correctIndex: 0, explanation: "Hips reveal direction; the head and ball can fake you out." },
        { id: "flag-04-q2", type: "Approach", challenge: "Getting there.", text: "What is a proper pursuit angle?", options: ["Running to where the ball-carrier is going, not where they are", "Running straight at their current spot", "Running away from the play", "Standing still"], correctIndex: 0, explanation: "Angle ahead of the runner so your paths intersect and cut off the escape." },
        { id: "flag-04-q3", type: "Balance", challenge: "Don't whiff.", text: "Why should a defender 'break down' before pulling a flag?", options: ["To stay balanced and react to a cut without lunging", "To run faster", "To tackle harder", "To guard their own flags"], correctIndex: 0, explanation: "A balanced breakdown stance lets you mirror cuts instead of grabbing air." },
        { id: "flag-04-q4", type: "Help", challenge: "The extra defender.", text: "How can the sideline help a defender?", options: ["Forcing the runner toward it reduces their room — it acts like a free defender", "It can be tackled", "It speeds up the runner", "It has no effect"], correctIndex: 0, explanation: "Using the boundary limits the runner's options and gives you leverage." },
      ],
    },
  },

  // ─── flag-05: Throwing the Football ──────────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The quarterback's throw", location: "The passing game", era: "Modern", emoji: "🎯" },
    id: "flag-05",
    order: 5,
    title: "Throwing the Football",
    subtitle: "Grip, mechanics, and an accurate spiral",
    category: "sports",
    xp: 92,
    badge: { id: "flag-badge-05", name: "Gunslinger", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "Flag football is a passing game, so the throw is the most important skill on offense. A tight, accurate spiral comes not from arm strength but from grip, footwork, and a smooth motion you can repeat under pressure.",
      year: 2024,
      overview: [
        "Throwing a great pass starts with the grip and the body, not the arm. The spiral — the ball spinning tightly around its long axis — keeps the ball stable and accurate, and it comes from technique anyone can learn.",
        "Build the throw from the ground up:\n- GRIP — fingers across the laces with a little space between the palm and the ball; the index finger and the laces guide the spin.\n- BASE & FEET — start with feet shoulder-width, point your non-throwing shoulder/hip at the target, and step toward the target as you throw.\n- MOTION — bring the ball up by your ear, rotate your hips and torso, and snap the wrist on release so the laces roll off your fingers for spin.",
        "Accuracy beats arm strength in flag:\n- FOLLOW THROUGH — finish with your throwing hand pointing down across your body; a clean follow-through means a clean ball.\n- LEAD THE RECEIVER — throw to where they will be, not where they are, so they catch it in stride.\n- TOUCH — learn to put 'air' under deep throws and zip on short ones; flag's quick timing rewards a fast, accurate release over a big arm.",
      ],
      technical: {
        title: "Spin, Footwork, and Throwing on the Move",
        body: [
          "Why the spiral matters and how to get it:\n- Spin (gyroscopic stability) keeps the nose of the ball steady so it flies straight and is easy to catch; a wobbly ball is slower and harder to handle.\n- The spin comes from the wrist snap and the laces rolling off your fingertips — not from squeezing harder.\n- Power comes from sequencing: legs → hips → torso → shoulder → arm → wrist, like cracking a whip.",
          "Flag QBs often throw under pressure and on the move:\n- Resetting your feet toward the target even while scrambling keeps accuracy; never throw flat-footed if you can step.\n- A quick release beats a strong arm — get the ball out before the rusher arrives (the 7-yard rush rule gives you a beat, but not long).\n- Practice throwing to spots and on timing so the ball arrives as the receiver breaks open.",
        ],
      },
      incident: {
        title: "The Quick Game Wins in Flag",
        when: "Modern",
        where: "Flag football offense",
        impact: "Because there's no blocking, a fast, accurate release defines great flag quarterbacks more than arm strength",
        body: [
          "In tackle football, an offensive line protects the QB. In flag, there's no blocking — so the rusher is coming and the QB must deliver the ball fast and on time. This makes a quick, repeatable, accurate throwing motion the single biggest offensive weapon.",
          "It shapes how QBs train:\n- Footwork and timing drills build a release that's fast and accurate under a live rush.\n- Throwing to spots on rhythm lets the QB beat the rush with the quick game.\n- The best flag QBs aren't the ones who throw hardest — they're the ones who throw accurately, on time, every time.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Grip the Laces", sub: "fingers across, slight gap", type: "system" },
          { label: "Step to the Target", sub: "hips and shoulder aligned", type: "attacker" },
          { label: "Snap the Wrist", sub: "spin = tight spiral", type: "victim" },
          { label: "Lead the Receiver", sub: "accurate, in stride", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "The forward pass is legalized, birthing the throwing game" },
        { year: 1980, event: "West Coast offense proves timing and accuracy beat raw arm strength" },
        { year: 2010, event: "Flag and 7-on-7 spread the quick-passing game to youth", highlight: true },
        { year: 2024, event: "Elite flag QBs prize fast, accurate releases over arm power" },
      ],
      keyTakeaways: [
        "A tight spiral comes from grip and wrist snap (laces rolling off the fingers), not arm strength",
        "Throw from the ground up: feet and hips aligned, step toward the target, sequence legs→hips→arm→wrist",
        "Lead the receiver — throw to where they'll be so they catch it in stride",
        "In flag there's no blocking, so a fast, accurate release beats a big arm",
      ],
      references: [
        { title: "Quarterback throwing mechanics — basics", url: "https://www.usafootball.com/" },
        { title: "The forward pass — history", url: "https://en.wikipedia.org/wiki/Forward_pass" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-05-q1", type: "Spiral", challenge: "Where spin comes from.", text: "What creates a tight spiral?", options: ["The wrist snap and laces rolling off the fingers", "Squeezing the ball as hard as possible", "A long windup", "Throwing flat-footed"], correctIndex: 0, explanation: "Spin (and accuracy) comes from technique, not grip strength." },
        { id: "flag-05-q2", type: "Mechanics", challenge: "Power source.", text: "Where does throwing power mainly come from?", options: ["Sequencing the legs, hips, and torso into the arm", "The arm alone", "The neck", "Jumping straight up"], correctIndex: 0, explanation: "Power is a kinetic chain: legs → hips → torso → arm → wrist." },
        { id: "flag-05-q3", type: "Accuracy", challenge: "Hitting the target.", text: "How should you throw to a moving receiver?", options: ["Lead them — throw to where they'll be so they catch it in stride", "Throw behind them", "Throw at their current spot", "Throw straight up"], correctIndex: 0, explanation: "Leading the receiver lets them catch in stride and keep running." },
        { id: "flag-05-q4", type: "Flag-Specific", challenge: "Beating the rush.", text: "Why is a quick release so important in flag football?", options: ["There's no blocking, so the rusher arrives fast — you must get the ball out", "The ball is heavier", "The field is huge", "Receivers run slowly"], correctIndex: 0, explanation: "Without blockers, timing and a fast release beat the rush." },
      ],
    },
  },

  // ─── flag-06: Catching & Ball Security ───────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The catch", location: "The receiver's hands", era: "Modern", emoji: "🧤" },
    id: "flag-06",
    order: 6,
    title: "Catching & Ball Security",
    subtitle: "Hands, tracking, and securing the football",
    category: "sports",
    xp: 92,
    badge: { id: "flag-badge-06", name: "Sure Hands", emoji: "🧤" },
    challengeType: "quiz",
    info: {
      tagline: "A perfect throw is wasted if it's dropped. Catching is a skill of the eyes and hands working together — see it in, secure it, and keep your flags away from the defender as you turn upfield.",
      year: 2024,
      overview: [
        "Great receivers catch with their hands, not their body, and they finish the catch before doing anything else. The mantra is simple: look it in, catch it, then run — drops usually come from looking upfield before securing the ball.",
        "Use the right hand position for the throw:\n- HIGH BALLS (above the chest) — make a 'diamond' or 'triangle' with your thumbs together, fingers up.\n- LOW BALLS (below the chest) — pinkies together, fingers down, like a basket.\n- Always reach to meet the ball with your hands, watch it all the way into your hands, and squeeze.",
        "Securing the ball matters extra in flag:\n- TUCK IT — bring the ball into your body (high and tight) once caught so it can't be knocked loose.\n- PROTECT YOUR FLAGS — as you turn upfield, keep the ball on the side away from the nearest defender and don't flag-guard (no using your arm to block the flag).\n- TRACK DEEP BALLS — on long throws, find the ball over your shoulder, adjust your speed, and catch it at the highest point.",
      ],
      technical: {
        title: "Hand Position, Tracking, and Catch-and-Go",
        body: [
          "Match your hands to the ball's location:\n- Thumbs-together (diamond) for anything from the chest up; pinkies-together (basket) for anything below.\n- Crossing these up (basket on a high ball) is how easy passes get dropped — drill both until automatic.\n- Catch the ball out in front of you with soft hands, 'giving' slightly to absorb it rather than letting it bounce off.",
          "Turning a catch into yards:\n- Secure first, then transition: many drops are really 'looking to run before catching'.\n- After the catch, get the ball to the arm away from defenders and accelerate; on a small field, yards after the catch win games.\n- On deep balls, track over the correct shoulder, keep your eyes on the ball (not the defender), and high-point it at its peak.",
        ],
      },
      incident: {
        title: "Yards After the Catch — The Flag Difference",
        when: "Modern",
        where: "Flag football offense",
        impact: "Because defenders must pull a flag (not tackle), a secure catch plus elusiveness yields big yards-after-catch on the small field",
        body: [
          "In flag football, a receiver who catches the ball cleanly is hard to stop — there's no tackle, just a flag to pull. So a sure-handed receiver who secures the ball and immediately threatens to run can turn a short completion into a big gain or a touchdown.",
          "This makes catching and ball security doubly valuable:\n- A clean catch + a quick move can leave defenders grabbing for a flag that isn't there.\n- Drops are killers on a short field where every possession counts.\n- Coaches pair catching drills with 'catch-and-go' work so receivers secure the ball and accelerate in one motion.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Track the Ball", sub: "eyes all the way in", type: "system" },
          { label: "Hands to the Ball", sub: "diamond high / basket low", type: "attacker" },
          { label: "Secure & Tuck", sub: "catch before you run", type: "victim" },
          { label: "Protect Flags & Go", sub: "ball away from defenders", type: "result" },
        ],
      },
      timeline: [
        { year: 1906, event: "First legal forward pass completed — catching becomes a craft" },
        { year: 1985, event: "Receiver hand-catching technique becomes standard coaching" },
        { year: 2015, event: "7-on-7 and flag emphasize catch-and-run on small fields", highlight: true },
        { year: 2024, event: "Elite flag receivers train catch-and-go as one motion" },
      ],
      keyTakeaways: [
        "Catch with your hands, watch it all the way in, and secure it before looking to run",
        "Use thumbs-together (diamond) above the chest, pinkies-together (basket) below",
        "Tuck the ball high and tight and keep it away from the nearest defender (no flag guarding)",
        "On a small field, yards after the catch are huge — secure, then accelerate",
      ],
      references: [
        { title: "Receiver catching technique — basics", url: "https://www.usafootball.com/" },
        { title: "Pass catching fundamentals", url: "https://en.wikipedia.org/wiki/Wide_receiver" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-06-q1", type: "Hands", challenge: "High ball.", text: "What hand position do you use for a ball above the chest?", options: ["Thumbs together (diamond), fingers up", "Pinkies together, fingers down", "Hands at your sides", "One hand only"], correctIndex: 0, explanation: "Thumbs-together (diamond) for high balls; basket for low balls." },
        { id: "flag-06-q2", type: "Focus", challenge: "Catch first.", text: "What's the most common cause of drops?", options: ["Looking to run before securing the catch", "Catching with your hands", "Watching the ball in", "Tucking the ball"], correctIndex: 0, explanation: "Look it in and secure it before doing anything else." },
        { id: "flag-06-q3", type: "Security", challenge: "Protect it.", text: "After catching, what should you do with the ball relative to defenders?", options: ["Keep it on the side away from the nearest defender (without flag guarding)", "Hold it loosely out front", "Toss it up", "Switch it constantly"], correctIndex: 0, explanation: "Secure it away from defenders, but never use your arm to block your flags." },
        { id: "flag-06-q4", type: "Deep Ball", challenge: "Going long.", text: "How should you catch a deep pass?", options: ["Track it over your shoulder and high-point it at its peak", "Wait for it to land", "Watch the defender instead", "Close your eyes"], correctIndex: 0, explanation: "Find it over the correct shoulder and catch it at the highest point." },
      ],
    },
  },

  // ─── flag-07: Running Routes ─────────────────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The route tree", location: "The receiver's map", era: "Modern", emoji: "🌳" },
    id: "flag-07",
    order: 7,
    title: "Running Routes",
    subtitle: "The route tree and getting open",
    category: "sports",
    xp: 95,
    badge: { id: "flag-badge-07", name: "Route Runner", emoji: "🌳" },
    challengeType: "quiz",
    info: {
      tagline: "Routes are the language of the passing game. Crisp, precise routes get you open and let the QB throw on time. Learn the 'route tree' — the standard set of patterns — and the cuts that beat a defender.",
      year: 2024,
      overview: [
        "A route is the planned path a receiver runs. The standard patterns are organized into a 'route tree', and running them precisely (right depth, sharp cut, right timing) is what gets you open and lets the QB anticipate the throw.",
        "The core routes every flag player should know:\n- SLANT — a quick angle across the middle; great vs the rush.\n- FLAT / OUT — break toward the sideline (flat is shallow, out is sharper and deeper).\n- CURL / COMEBACK — run upfield, then come back to the ball.\n- POST / CORNER — break toward the goalpost (post) or the back corner (corner) for deep shots.\n- GO (fly) — straight downfield to beat a defender deep.",
        "Precision and timing make routes work:\n- DEPTH & TIMING — break at the right depth so the throw and route sync; a route a yard short or late gets covered.\n- SELL IT — push hard upfield to make the defender respect the deep ball, then snap your cut.\n- SPACING — receivers space out so they don't crowd each other and so the defense can't cover two with one (the basis of route concepts, coming later).",
      ],
      technical: {
        title: "Sharp Cuts, Stems, and Beating Leverage",
        body: [
          "A great route is about the break:\n- Sink your hips and plant to change direction sharply ('snap' the cut) rather than rounding it off — a rounded cut lets the defender stay close.\n- The 'stem' is the path to your break; vary it to attack the defender's leverage (which side they're shading) before cutting away from it.\n- Run routes at game speed in practice so the timing matches the QB's throw.",
          "Reading leverage to choose your move:\n- If a defender plays inside, break outside; if they play outside, break inside or go deep.\n- Against a defender's cushion, attack it: get on top of them so they can't sit on short routes.\n- Crisp, repeatable routes let the QB throw before you're even open (anticipation) — the heart of timing-based offense.",
        ],
        codeExample: {
          label: "The Route Tree (from the line of scrimmage)",
          code: `        GO (fly)
           |       /CORNER
   POST\\   |      /
        \\  |     /
  CURL   \\ |    /  OUT
      \\   \\|   /   /
  SLANT \\  |  /   /
       \\ \\ | /   / FLAT
        \\ \\|/   /
   ======[WR]======  line of scrimmage
   in <---      ---> out
   (break sharp; sell the deep route first)`,
        },
      },
      incident: {
        title: "Timing Routes Made the Modern Passing Game",
        when: "1980s–present",
        where: "Football offense",
        impact: "Precise, timed routes let quarterbacks throw to a spot before the receiver is open — the foundation of efficient passing, and central to flag",
        body: [
          "The timing-based passing game — where the QB releases the ball as the receiver breaks, throwing to a spot rather than waiting to see them open — revolutionized football. It relies on receivers running routes at exact depths and times, so the throw and the break happen together.",
          "Flag football lives on this idea:\n- With no blocking and a quick rush, the QB must throw on timing, which demands precise routes.\n- A route run a yard short, late, or rounded breaks the timing and lets the defense recover.\n- That's why even foundational flag players drill the route tree until each break is crisp and repeatable.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Sell the Stem", sub: "attack the defender's leverage", type: "system" },
          { label: "Sharp Break", sub: "sink hips, snap the cut", type: "attacker" },
          { label: "Right Depth & Timing", sub: "sync with the throw", type: "victim" },
          { label: "Open on Time", sub: "QB throws to the spot", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Route trees formalized as passing offenses grow" },
        { year: 1982, event: "West Coast timing routes dominate the NFL" },
        { year: 2010, event: "7-on-7 spreads route precision to youth football", highlight: true },
        { year: 2024, event: "Flag offenses built on crisp, timed route concepts" },
      ],
      keyTakeaways: [
        "A route is a planned path; the 'route tree' is the standard set (slant, flat, out, curl, post, corner, go)",
        "Run the right depth and timing so the throw and break sync — a route a yard off gets covered",
        "Snap your cuts sharply (sink the hips) instead of rounding them, and sell the deep route first",
        "Read the defender's leverage and break away from it; precise routes enable timing throws",
      ],
      references: [
        { title: "Route tree — overview", url: "https://en.wikipedia.org/wiki/Route_(gridiron_football)" },
        { title: "Receiver route running — basics", url: "https://www.usafootball.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-07-q1", type: "Route Tree", challenge: "Quick inside.", text: "Which route is a quick angle across the middle, great vs the rush?", options: ["Slant", "Go", "Corner", "Comeback"], correctIndex: 0, explanation: "The slant is a fast inside-breaking route that beats the rush." },
        { id: "flag-07-q2", type: "Technique", challenge: "The break.", text: "How should you make a route's cut?", options: ["Sink your hips and snap it sharply", "Round it off slowly", "Slow down before it", "Cut randomly"], correctIndex: 0, explanation: "A sharp, planted cut creates separation; rounded cuts let defenders stay close." },
        { id: "flag-07-q3", type: "Leverage", challenge: "Reading the DB.", text: "If a defender is shading to your inside, where do you usually break?", options: ["Outside (away from their leverage)", "Inside into them", "Straight at them", "It doesn't matter"], correctIndex: 0, explanation: "Break away from the defender's leverage to get open." },
        { id: "flag-07-q4", type: "Timing", challenge: "On time.", text: "Why does precise route depth/timing matter so much?", options: ["The QB throws to a spot as you break — being off breaks the timing", "It looks nicer", "It tires the defender", "Timing is irrelevant"], correctIndex: 0, explanation: "Timing offense throws on the break; a late/short route gets covered." },
      ],
    },
  },

  // ─── flag-08: Offense 101 ────────────────────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The offensive huddle", location: "Moving the ball", era: "Modern", emoji: "📋" },
    id: "flag-08",
    order: 8,
    title: "Offense 101",
    subtitle: "The snap, reads, handoffs, and spacing",
    category: "sports",
    xp: 96,
    badge: { id: "flag-badge-08", name: "Drive Starter", emoji: "📋" },
    challengeType: "quiz",
    info: {
      tagline: "Now put the pieces together. Offense in flag is about getting the ball to playmakers in space, fast — through clean snaps, simple reads, handoffs, and spacing that stretches the defense thin.",
      year: 2024,
      overview: [
        "Offense starts with execution of the basics: a clean snap from center to QB, everyone knowing the play, and the QB getting the ball out quickly to a receiver in space. On a small field with a fast rush, simple and on-time beats fancy and late.",
        "The QB's job each play is to make a quick decision:\n- A 'read' is a rule for who to throw to based on what the defense does (e.g., if the flat defender stays shallow, throw the corner behind him).\n- PROGRESSION — look at your first option, then your second, then check down; don't lock onto one receiver.\n- If nothing's open fast, throw it away safely or take the checkdown — never hold the ball for the rush.",
        "Beyond passing, offenses use runs and spacing:\n- HANDOFFS & PITCHES — give or toss the ball to a runner (outside no-run zones), often off motion or a sweep.\n- SPACING — spread receivers wide and at different depths so defenders can't cover two at once and the field is stretched.\n- TEMPO — lining up quickly can catch a defense unset; controlling tempo keeps defenders guessing.",
      ],
      technical: {
        title: "Reads, Checkdowns, and Stretching the Field",
        body: [
          "A simple read structure keeps the QB decisive:\n- Pre-snap, note the coverage (man or zone — covered later) and any obvious weakness.\n- Post-snap, work the read: high-to-low or one side to the other, with a checkdown (a safe, short option) as the last resort.\n- The clock in your head matters: the ball should usually be out in ~2 seconds against a live rush.",
          "Spacing is the offense's geometry:\n- Horizontal stretch: put receivers across the width so one defender can't cover two (e.g., flat + corner on the same side).\n- Vertical stretch: pair a deep route with a short one in the same area so a defender is wrong either way.\n- Motion and formation (next stage) move defenders and reveal coverage, making the read easier.",
        ],
      },
      incident: {
        title: "Spread and Space — The Flag Offense Philosophy",
        when: "Modern",
        where: "Flag football strategy",
        impact: "With no blocking and everyone eligible, the best flag offenses win by spacing the field and getting the ball out fast",
        body: [
          "Flag football naturally favors spread, space-based offense: there's no line to run behind, every player can catch, and the rush is coming. So coaches spread receivers out, build quick-timing reads, and attack the open grass.",
          "The philosophy is consistent at every level:\n- Get the ball to athletes in space and let them make a defender miss for yards after the catch.\n- Use spacing and motion to make the defense declare and to create two-on-one situations.\n- Keep the QB decisive with clear reads and a checkdown — patient, on-time offense moves the chains.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Clean Snap", sub: "center to QB", type: "system" },
          { label: "Quick Read", sub: "progression + checkdown", type: "attacker" },
          { label: "Ball to Space", sub: "pass or handoff", type: "victim" },
          { label: "Move the Chains", sub: "yards + first downs", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Spread offense concepts spread across football" },
        { year: 2005, event: "7-on-7 popularizes quick-read passing for youth" },
        { year: 2018, event: "Flag offenses standardize spacing and tempo", highlight: true },
        { year: 2024, event: "Olympic-level flag offense built on space and timing" },
      ],
      keyTakeaways: [
        "Offense = clean snap, a quick QB read, and getting the ball to playmakers in space, fast",
        "Work a progression with a checkdown; against a live rush, get the ball out in ~2 seconds",
        "Use handoffs/pitches (outside no-run zones) and motion to attack open grass",
        "Spacing (horizontal + vertical) stretches the defense so one defender can't cover two",
      ],
      references: [
        { title: "Spread offense — overview", url: "https://en.wikipedia.org/wiki/Spread_offense" },
        { title: "Flag football offense basics", url: "https://nflflag.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-08-q1", type: "QB", challenge: "Decision rule.", text: "What is a 'read' for a quarterback?", options: ["A rule for who to throw to based on what the defense does", "A book about football", "A type of route", "The snap count"], correctIndex: 0, explanation: "Reads turn the defense's reaction into the QB's decision." },
        { id: "flag-08-q2", type: "Progression", challenge: "Don't lock on.", text: "What is a 'progression'?", options: ["Looking from a first option to a second to a checkdown", "Running faster each play", "A penalty", "A formation"], correctIndex: 0, explanation: "Working through options (with a checkdown) keeps the QB from locking on." },
        { id: "flag-08-q3", type: "Spacing", challenge: "Stretching it.", text: "Why do offenses space receivers across the field?", options: ["So one defender can't cover two and the field is stretched", "To crowd together", "To confuse their own QB", "To run slower"], correctIndex: 0, explanation: "Horizontal and vertical spacing create two-on-one binds for the defense." },
        { id: "flag-08-q4", type: "Tempo", challenge: "Beat the rush.", text: "Against a live rush with no blockers, when should the ball come out?", options: ["Quickly — usually around 2 seconds", "After 6 seconds", "Only on a scramble", "Never; hold it"], correctIndex: 0, explanation: "No blocking means the QB must deliver on time, fast." },
      ],
    },
  },

  // ─── flag-09: Defense 101 ────────────────────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The defensive front", location: "Stopping the offense", era: "Modern", emoji: "🛡️" },
    id: "flag-09",
    order: 9,
    title: "Defense 101",
    subtitle: "Man vs zone, contain, and not getting beat deep",
    category: "sports",
    xp: 96,
    badge: { id: "flag-badge-09", name: "Lockdown Rookie", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "Defense in flag is about coverage and discipline. With five defenders against five eligible receivers, you either match up man-to-man or guard zones — and above all, you don't get beaten deep.",
      year: 2024,
      overview: [
        "Defense has one job: stop the offense from advancing and scoring, mostly by covering receivers and pulling flags. The two basic coverage philosophies are man and zone, and good defenses communicate and stay disciplined.",
        "The two foundational coverages:\n- MAN-TO-MAN — each defender covers one receiver, following them everywhere. Simple and tight, but vulnerable to picks and double-moves.\n- ZONE — each defender guards an area of the field and covers whoever enters it. Better for keeping things in front and reacting to the ball, but has seams between zones.",
        "Three discipline rules win games:\n- DON'T GET BEAT DEEP — give up short stuff before long; a deep completion on a small field is often a touchdown.\n- CONTAIN THE QB — the rusher and defenders keep the QB from escaping the pocket and buying time.\n- COMMUNICATE — call out routes, switches, and who has whom; busted coverage from missed communication is a leading cause of big plays.",
      ],
      technical: {
        title: "Man vs Zone Trade-offs and Leverage",
        body: [
          "Each coverage has strengths and weaknesses:\n- Man is tight but gets stressed by crossing routes, rubs/picks, and double moves; defenders need quick feet and discipline.\n- Zone keeps the play in front and lets defenders break on the ball, but offenses attack the seams and flood a zone with two receivers.\n- Many defenses mix them or play 'match' (zone that turns into man on certain routes) — covered in the deep stages.",
          "Leverage and depth keep you from getting beat:\n- Play with proper leverage (inside or outside shade) based on your help and the down/distance.\n- Keep a cushion deep enough that no one runs by you, then drive on shorter throws.\n- The rusher's pressure and the coverage must work together: pressure forces quick throws, coverage takes them away.",
        ],
      },
      incident: {
        title: "Coverage Discipline Beats Athleticism",
        when: "Modern",
        where: "Flag football defense",
        impact: "On a small field, disciplined coverage and communication stop more drives than raw speed alone",
        body: [
          "Because flag offenses are built on spacing and timing, defenses that simply chase athletes get picked apart. The defenses that win understand coverage, communicate, and stay disciplined — taking away the deep ball and rallying to pull flags.",
          "It's why even foundational defenders learn the why, not just the who:\n- Knowing man vs zone responsibilities prevents two defenders covering one receiver while another runs free.\n- Talking through motion and crossing routes prevents the busted coverage that yields touchdowns.\n- Discipline (don't bite on fakes, don't get beat deep) turns a fast offense into a frustrated one.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pick Coverage", sub: "man or zone", type: "system" },
          { label: "Communicate", sub: "calls, switches, who has whom", type: "attacker" },
          { label: "Keep It in Front", sub: "don't get beat deep", type: "victim" },
          { label: "Rally & Pull Flags", sub: "stop the gain", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Man and zone coverage philosophies formalized" },
        { year: 2000, event: "7-on-7 spreads coverage concepts to youth" },
        { year: 2018, event: "Flag defenses emphasize communication and deep discipline", highlight: true },
        { year: 2024, event: "Elite flag defense blends man and zone with disguise" },
      ],
      keyTakeaways: [
        "Defense covers receivers (man or zone) and pulls flags; with 5v5, matchups and communication are everything",
        "Man = each defender covers one receiver; zone = each guards an area and covers who enters it",
        "Don't get beat deep — a long completion on a small field is usually a touchdown",
        "Contain the QB and communicate; busted coverage from poor talk causes most big plays",
      ],
      references: [
        { title: "Man vs zone coverage — overview", url: "https://en.wikipedia.org/wiki/Coverage_(American_football)" },
        { title: "Flag football defense basics", url: "https://nflflag.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-09-q1", type: "Coverage", challenge: "Each on one.", text: "What is man-to-man coverage?", options: ["Each defender covers one specific receiver everywhere", "Each defender guards an area", "No one covers anyone", "Only the rusher covers"], correctIndex: 0, explanation: "Man = one defender follows one receiver; zone = guard an area." },
        { id: "flag-09-q2", type: "Coverage", challenge: "Guard the grass.", text: "What is zone coverage?", options: ["Each defender guards an area and covers whoever enters it", "Each defender covers one receiver", "Everyone rushes", "No coverage at all"], correctIndex: 0, explanation: "Zone keeps the play in front and lets defenders break on the ball." },
        { id: "flag-09-q3", type: "Discipline", challenge: "The cardinal rule.", text: "What's the top priority for a flag defender?", options: ["Don't get beat deep — give up short before long", "Always blitz", "Cover two receivers at once", "Ignore communication"], correctIndex: 0, explanation: "A deep completion on a small field is usually a touchdown." },
        { id: "flag-09-q4", type: "Weakness", challenge: "Attacking man.", text: "What stresses man coverage?", options: ["Crossing routes, rubs/picks, and double moves", "Standing still", "A single deep route only", "Nothing"], correctIndex: 0, explanation: "Man is tight but vulnerable to crossers, legal rubs, and double moves." },
      ],
    },
  },

  // ─── flag-10: Agility, Speed & Conditioning ──────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The agility ladder", location: "Footwork & conditioning", era: "Modern", emoji: "⚡" },
    id: "flag-10",
    order: 10,
    title: "Agility, Speed & Conditioning",
    subtitle: "Footwork, cuts, and the athleticism flag demands",
    category: "sports",
    xp: 96,
    badge: { id: "flag-badge-10", name: "Quick Feet", emoji: "⚡" },
    challengeType: "quiz",
    info: {
      tagline: "Flag football is a game of cuts, accelerations, and stops. Whether you're shaking a defender or pulling a flag, the athlete who changes direction fastest usually wins. Agility and conditioning are skills you train.",
      year: 2024,
      overview: [
        "Flag is a non-contact, space game, so change of direction (agility) and short-burst speed matter more than in almost any sport. Getting open, making a defender miss, and mirroring a receiver all come down to footwork and quick acceleration.",
        "The athletic skills that decide plays:\n- ACCELERATION — exploding to top speed in a few steps (most flag plays are short bursts, not long sprints).\n- CHANGE OF DIRECTION — planting and cutting sharply without slowing down too much.\n- DECELERATION & BALANCE — the ability to stop and start is what makes jukes and route breaks work.",
        "How to train it (foundations):\n- AGILITY LADDERS & CONES — drills for foot speed and crisp cuts.\n- SHORT SPRINTS & SHUTTLES — build the burst and the ability to stop-and-go.\n- BALANCE & CORE — a strong, stable core lets you change direction without falling off balance.\n- And condition for the game's pace: many quick reps with short rest, like real flag football.",
      ],
      technical: {
        title: "Why Change of Direction Wins in Flag",
        body: [
          "The physics of a cut:\n- To change direction, you must decelerate, plant, and re-accelerate; the faster and more balanced that sequence, the sharper your move.\n- Low pad level (bending knees/hips, staying low) gives you a stable base to cut from — standing too tall makes you slow to change direction.\n- A juke works by making the defender commit to one direction, then snapping the other way before they can re-plant.",
          "Training transfers directly to the field:\n- Receivers use COD for sharp routes and double moves; defenders use it to mirror and to take pursuit angles.\n- Short shuttle drills (like the 5-10-5) build the start-stop-start ability flag rewards.\n- Conditioning matters because tired legs cut slower and pull fewer flags late in games — fitness is a skill.",
        ],
      },
      incident: {
        title: "The Athlete Who Cuts Fastest Wins",
        when: "Modern",
        where: "Flag football",
        impact: "On a small, non-contact field, change-of-direction ability decides most one-on-one matchups",
        body: [
          "Flag football is full of one-on-one moments: a receiver vs a defender, a runner vs a flag-puller. Without contact to slow anyone down, the player who can accelerate, stop, and cut the fastest usually wins those moments.",
          "That's why athletic development is foundational, not optional:\n- Agility and burst training make routes sharper, jukes nastier, and coverage tighter.\n- Conditioning keeps that quickness in the fourth quarter when games are decided.\n- The deep stages of this course build on this with high-school-level speed and strength training.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Accelerate", sub: "explode in a few steps", type: "system" },
          { label: "Decelerate & Plant", sub: "low, balanced base", type: "attacker" },
          { label: "Sharp Cut", sub: "change direction fast", type: "victim" },
          { label: "Win the 1-on-1", sub: "open, or pull the flag", type: "result" },
        ],
      },
      timeline: [
        { year: 1980, event: "Agility-ladder and cone training spread in sports" },
        { year: 2000, event: "Change-of-direction science informs football training" },
        { year: 2015, event: "7-on-7/flag put a premium on burst and agility", highlight: true },
        { year: 2024, event: "Flag athletes train COD as a core skill" },
      ],
      keyTakeaways: [
        "Flag rewards acceleration and change of direction more than long speed — most plays are short bursts",
        "A sharp cut is decelerate → plant low → re-accelerate; staying low gives a stable base",
        "Train with agility ladders, cones, and short shuttles (e.g., 5-10-5) for crisp cuts and burst",
        "Conditioning is a skill — tired legs cut slower and pull fewer flags late in games",
      ],
      references: [
        { title: "Agility training — overview", url: "https://en.wikipedia.org/wiki/Agility" },
        { title: "Change-of-direction drills — basics", url: "https://www.usafootball.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-10-q1", type: "Athleticism", challenge: "What matters most.", text: "Which athletic quality matters most in flag football?", options: ["Change of direction and short-burst acceleration", "Long-distance endurance only", "Maximum bench press", "Height"], correctIndex: 0, explanation: "Non-contact space games are decided by cuts and burst." },
        { id: "flag-10-q2", type: "Mechanics", challenge: "Cutting.", text: "What is the sequence of a sharp cut?", options: ["Decelerate, plant low, re-accelerate", "Speed up into it", "Stand tall and turn", "Stop completely and walk"], correctIndex: 0, explanation: "A balanced, low plant lets you change direction without losing speed." },
        { id: "flag-10-q3", type: "The Juke", challenge: "Making a miss.", text: "How does a juke beat a defender?", options: ["Make them commit one way, then snap the other before they re-plant", "Run straight at them", "Slow down and wait", "Run out of bounds"], correctIndex: 0, explanation: "Force a commitment, then change direction faster than they can recover." },
        { id: "flag-10-q4", type: "Conditioning", challenge: "Late-game.", text: "Why is conditioning a skill in flag?", options: ["Tired legs cut slower and pull fewer flags late in games", "It doesn't matter", "Only the QB needs fitness", "Games are too short to tire"], correctIndex: 0, explanation: "Quickness fades with fatigue, so fitness preserves your edge." },
      ],
    },
  },

  // ─── flag-11: Offensive Formations & Personnel (deep) ────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "Formations & motion", location: "High-school offense", era: "Modern", emoji: "♟️" },
    id: "flag-11",
    order: 11,
    title: "Formations & Motion",
    subtitle: "Trips, bunch, stack, spread — and using motion",
    category: "sports",
    xp: 110,
    badge: { id: "flag-badge-11", name: "Formation Architect", emoji: "♟️" },
    challengeType: "quiz",
    info: {
      tagline: "Where you line up changes everything. Formations and pre-snap motion stress the defense before the ball is even snapped — creating mismatches, revealing coverage, and freeing receivers. This is where flag offense gets sophisticated.",
      year: 2024,
      overview: [
        "A formation is how the offense aligns its eligible receivers before the snap. By clustering or spreading players, you force the defense to declare how they'll cover — and you can manufacture advantages before the play even starts.",
        "Core flag formations and what they do:\n- SPREAD — receivers split wide across the field to stretch the defense and create space.\n- TRIPS — three receivers to one side, overloading that side so the defense can't match man-for-man easily.\n- BUNCH — three receivers tightly grouped, making it hard to cover man-to-man (legal rubs/picks happen naturally) and creating quick releases.\n- STACK — receivers lined up one behind another, freeing the back receiver from press and confusing assignments.",
        "Pre-snap motion is the offense's scalpel:\n- Sending a receiver in motion before the snap can reveal coverage (a defender following him = man; nobody following = zone).\n- Motion creates mismatches (a slow defender on a fast receiver) and gets a player moving to attack a leverage or a flat quickly.\n- Smart QBs use what motion reveals to confirm the read and choose where to attack.",
      ],
      technical: {
        title: "Creating and Exploiting Mismatches",
        body: [
          "Formations are about numbers and leverage:\n- Overloading a side (trips) can create a 3-on-2 if the defense doesn't rotate, giving a free receiver.\n- Bunch/stack alignments naturally create traffic that frees receivers against man coverage and complicates assignments.\n- The defense must respond (rotate coverage, bump alignments), and that response is information for the offense.",
          "Motion as a diagnostic and a weapon:\n- 'Motion to ID coverage': watch who travels with the motion man — that tells you man vs zone, so the QB knows the read.\n- 'Motion to create': jet/orbit motion gets a fast player on the perimeter with momentum for a quick pitch or swing.\n- Combine formation + motion + concept (next stage) and the offense can dictate the matchup it wants.",
        ],
        codeExample: {
          label: "Common Flag Formations (X = receiver, Q = QB, C = center)",
          code: `  TRIPS RIGHT          BUNCH RIGHT         STACK
  X            C  X     C   X            X  C
  X               XX        X X          X
  X            Q     X     Q       X     X     Q
               (overload)  (cluster)    (one behind another)

  Motion: send a receiver across pre-snap to
  reveal coverage (who follows?) and create a mismatch.`,
        },
      },
      incident: {
        title: "Pre-Snap Chess Wins Flag Games",
        when: "Modern",
        where: "Competitive flag football",
        impact: "Elite offenses win before the snap by using formation and motion to reveal coverage and manufacture mismatches",
        body: [
          "At the high-school and elite levels, flag offenses don't just run plays — they set traps before the snap. By aligning in trips or bunch and using motion, they force the defense to show its hand and create favorable matchups the QB can attack on time.",
          "It turns offense into a chess match:\n- Formation stresses the defense's numbers; motion reveals its coverage; the concept (routes) attacks the weakness.\n- A defense that doesn't adjust gives up free receivers; one that over-adjusts opens something else.\n- Mastering formations and motion is the leap from 'running plays' to 'controlling the matchup' — the heart of deep flag offense.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Align (Formation)", sub: "spread / trips / bunch / stack", type: "system" },
          { label: "Send Motion", sub: "reveal coverage, create speed", type: "attacker" },
          { label: "Defense Declares", sub: "man vs zone shown", type: "victim" },
          { label: "Attack the Mismatch", sub: "free receiver / leverage", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Spread formations transform football offense" },
        { year: 2005, event: "Bunch/stack sets popularized to beat man coverage" },
        { year: 2018, event: "Flag offenses adopt motion to ID coverage", highlight: true },
        { year: 2024, event: "Elite flag offense built on formation + motion chess" },
      ],
      keyTakeaways: [
        "Formations (spread, trips, bunch, stack) stress the defense's numbers and leverage before the snap",
        "Trips overloads a side; bunch/stack create traffic that frees receivers vs man coverage",
        "Pre-snap motion reveals coverage (who follows = man) and creates mismatches/speed",
        "Combine formation + motion + concept to dictate the matchup you want",
      ],
      references: [
        { title: "American football formations — overview", url: "https://en.wikipedia.org/wiki/American_football_positions#Formations" },
        { title: "Pre-snap motion — concept", url: "https://en.wikipedia.org/wiki/Motion_(gridiron_football)" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-11-q1", type: "Formation", challenge: "Overload.", text: "What does a 'trips' formation do?", options: ["Puts three receivers to one side to overload the defense", "Lines everyone up single file", "Removes a receiver", "Is illegal"], correctIndex: 0, explanation: "Trips overloads a side, stressing the defense's ability to match up." },
        { id: "flag-11-q2", type: "Formation", challenge: "Traffic.", text: "Why is a 'bunch' formation effective vs man coverage?", options: ["Clustered receivers create natural traffic/rubs that free them", "It removes receivers", "It slows the offense", "It only helps the defense"], correctIndex: 0, explanation: "Bunch sets create legal traffic that's hard to cover man-to-man." },
        { id: "flag-11-q3", type: "Motion", challenge: "Reading coverage.", text: "How does motion reveal man vs zone?", options: ["If a defender follows the motion man, it's man; if not, it's zone", "It always means blitz", "It hides the coverage", "It has no effect"], correctIndex: 0, explanation: "Who travels with the motion tells the QB the coverage." },
        { id: "flag-11-q4", type: "Concept", challenge: "Winning early.", text: "What is the goal of formation + motion?", options: ["Reveal coverage and manufacture mismatches before the snap", "Confuse your own team", "Waste the play clock", "Avoid throwing"], correctIndex: 0, explanation: "Pre-snap chess creates the matchup the offense wants to attack." },
      ],
    },
  },

  // ─── flag-12: The Quarterback (deep) ─────────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The field general", location: "High-school quarterbacking", era: "Modern", emoji: "🧠" },
    id: "flag-12",
    order: 12,
    title: "Quarterbacking (Deep)",
    subtitle: "Pre-snap reads, progressions, and decision-making",
    category: "sports",
    xp: 115,
    badge: { id: "flag-badge-12", name: "Field General", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "The quarterback is the offense's brain. At a high level it's less about the arm and more about the mind: diagnosing coverage before the snap, working a progression after it, and making fast, smart decisions under a free rusher.",
      year: 2024,
      overview: [
        "Elite quarterbacking is decision-making at speed. The throw matters, but the difference between good and great QBs is reading the defense, knowing where to go with the ball before it's snapped, and never making the killer mistake.",
        "The pre-snap routine wins half the battle:\n- IDENTIFY COVERAGE — count the deep defenders and use motion to tell man from zone, so you know your best matchup.\n- FIND THE LEVERAGE — note which way defenders are shaded and where the open grass is.\n- HAVE A PLAN — decide your first look and your answer if the defense takes it away, before the snap.",
        "Post-snap, it's progressions and protection of the football:\n- WORK THE PROGRESSION — confirm the pre-snap read, then move to your second and third options or the checkdown.\n- BALL PLACEMENT — throw receivers open: lead them away from the defender and to a spot where only they can catch it.\n- DECISION-MAKING — against a free rusher, the cardinal rule is don't force it; a throwaway or checkdown beats an interception every time.",
      ],
      technical: {
        title: "Diagnosing Coverage and Throwing With Anticipation",
        body: [
          "Reading the defense is a system, not a guess:\n- Count safeties (deep defenders): one deep often signals man or single-high zone; two deep signals a two-high zone — each changes where you attack.\n- Confirm with motion and the snap: defenders' reactions tell you if your pre-snap read was right, and you adjust.\n- Know the coverage's weakness (covered next stages) and throw to it on time.",
          "Anticipation separates the elite:\n- Great QBs throw before the receiver is open, releasing as the break happens so the ball and receiver arrive together.\n- Ball placement is a weapon: away from the defender, leading to space, with the right touch (zip vs air).\n- And the leadership intangibles — composure under the rush, command of the huddle, and avoiding the back-breaking turnover — are what make a QB win games.",
        ],
      },
      incident: {
        title: "Great QBs Win With Their Minds",
        when: "Modern",
        where: "Quarterbacking at every level",
        impact: "The best quarterbacks separate themselves by pre-snap diagnosis and decision-making, not arm strength — even more so in flag",
        body: [
          "Across football, the quarterbacks who last and win are the ones who process the game fastest and protect the ball — not necessarily the strongest arms. In flag, with a free rusher and no blocking, that mental edge is decisive: the QB must know where to go before the rush arrives.",
          "It reframes what 'talent' means at QB:\n- Pre-snap diagnosis (coverage, leverage, plan) turns a hard read into an easy throw.\n- Decision discipline (take the checkdown, throw it away) avoids the turnovers that lose games.\n- Anticipation and ball placement let even a modest arm carve up a defense — the high-school QB skill set this stage builds.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pre-Snap Read", sub: "coverage + leverage + plan", type: "system" },
          { label: "Confirm Post-Snap", sub: "motion / defenders react", type: "attacker" },
          { label: "Work Progression", sub: "1st → 2nd → checkdown", type: "victim" },
          { label: "Smart, On-Time Throw", sub: "place it; never force it", type: "result" },
        ],
      },
      timeline: [
        { year: 1980, event: "Timing/progression passing elevates QB decision-making" },
        { year: 2000, event: "Coverage-reading becomes core QB coaching" },
        { year: 2018, event: "Flag/7-on-7 sharpen quick pre-snap diagnosis", highlight: true },
        { year: 2024, event: "Elite flag QBs win with reads and placement over arm" },
      ],
      keyTakeaways: [
        "Elite QB play is decision-making: diagnose coverage pre-snap and know where the ball goes before the snap",
        "Count deep defenders + use motion to ID man vs zone, then attack the coverage's weakness",
        "Work a progression with a checkdown; place the ball to throw receivers open",
        "Against a free rusher, never force it — a throwaway or checkdown beats an interception",
      ],
      references: [
        { title: "Reading defensive coverages — QB basics", url: "https://www.usafootball.com/" },
        { title: "Quarterback play — overview", url: "https://en.wikipedia.org/wiki/Quarterback" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-12-q1", type: "Pre-Snap", challenge: "Before the snap.", text: "What is the QB's most important pre-snap job?", options: ["Identify the coverage and have a plan for where to throw", "Pick the loudest cadence", "Look at the crowd", "Decide nothing until after the snap"], correctIndex: 0, explanation: "Knowing the coverage and plan pre-snap turns hard reads into easy throws." },
        { id: "flag-12-q2", type: "Diagnosis", challenge: "Counting deep.", text: "What does counting the deep safeties help a QB determine?", options: ["The coverage shell (e.g., one-high vs two-high) and where to attack", "The score", "The wind", "Which receiver is tallest"], correctIndex: 0, explanation: "Deep-defender count signals the coverage and its weakness." },
        { id: "flag-12-q3", type: "Decision", challenge: "Under pressure.", text: "With a free rusher and nothing open, what should a QB do?", options: ["Throw it away or take the checkdown — don't force it", "Force it into coverage", "Hold the ball indefinitely", "Spike it randomly"], correctIndex: 0, explanation: "Avoiding the turnover is the cardinal rule under pressure." },
        { id: "flag-12-q4", type: "Placement", challenge: "Throwing them open.", text: "What does good ball placement mean?", options: ["Leading the receiver away from the defender to a spot only they can reach", "Throwing right at the defender", "Throwing behind the receiver", "Throwing as hard as possible always"], correctIndex: 0, explanation: "Placement throws receivers open and prevents interceptions." },
      ],
    },
  },

  // ─── flag-13: Receiver Play (deep) ───────────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "Getting open", location: "High-school receiver craft", era: "Modern", emoji: "🏃" },
    id: "flag-13",
    order: 13,
    title: "Receiver Play (Deep)",
    subtitle: "Releases, leverage, double moves, and separation",
    category: "sports",
    xp: 115,
    badge: { id: "flag-badge-13", name: "Separation Artist", emoji: "🏃" },
    challengeType: "quiz",
    info: {
      tagline: "Getting open is an art. At a high level, receivers manipulate defenders — with releases, stems, and double moves — to create separation, then finish at the catch point. It's a one-on-one battle of deception and precision.",
      year: 2024,
      overview: [
        "Separation is the receiver's job, and it's earned with technique, not just speed. Great receivers attack a defender's leverage, disguise their routes, and use the whole field — especially the sideline — to get open and give the QB a clear, on-time target.",
        "Beating the defender starts at the line and continues through the stem:\n- RELEASE — your first move off the line; against a defender pressing you, use a quick footwork move (jab, swim, speed release) to get past cleanly.\n- STEM — the path of your route before the break; sell a different route with your eyes, speed, and angle to set up your real cut.\n- ATTACK LEVERAGE — break away from where the defender is shading, and 'stack' a deep defender (get directly on top of them) to remove their cushion.",
        "Advanced separation tools:\n- DOUBLE MOVES — fake one route to trigger the defender, then break to your real route (e.g., a hitch-and-go: fake the stop, then sprint deep).\n- TEMPO CHANGES — vary your speed (gear down, then explode) to freeze a defender at the break.\n- FINISH — at the catch point, use your body to shield the defender, high-point the ball, and have sideline awareness to get your feet in bounds.",
      ],
      technical: {
        title: "Releases, Stacking, and the Double Move",
        body: [
          "Winning the rep technically:\n- Against press/man, a clean release is everything — beat the defender's hands and get to your route path without being rerouted.\n- 'Stacking' a defender on a vertical route (running directly through and on top of them) takes away their ability to play the ball over your shoulder.\n- Use the sideline: a back-shoulder or fade to the boundary gives only you a chance at the ball.",
          "Double moves and tempo are about deception:\n- A double move spends time, so it needs the QB's trust and protection from the rush — but it can score on a defender who jumps the first move.\n- Changing tempo (slowing then bursting) breaks a defender's timing more than pure speed does.\n- The best receivers are predictable to their QB (precise) but unpredictable to the defender (deceptive) — that combination creates open windows on time.",
        ],
      },
      incident: {
        title: "Separation Is a Skill, Not Just Speed",
        when: "Modern",
        where: "Receiver play at every level",
        impact: "Elite receivers get open through technique — releases, leverage, and double moves — beating faster defenders with craft",
        body: [
          "Plenty of fast players can't get open, and plenty of average-speed receivers are always open — the difference is craft. Releases, stem manipulation, leverage attacks, and double moves let a technician beat a more athletic defender consistently.",
          "In flag, where coverage is tight on a small field, craft is everything:\n- A clean release and a sharp, disguised route create the split-second window the timing offense needs.\n- Double moves and tempo changes punish defenders who guess.\n- Finishing — shielding, high-pointing, sideline toe-taps — turns separation into completions. This is the receiver skill set that wins at the high-school level.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Win the Release", sub: "beat the defender's hands", type: "system" },
          { label: "Sell the Stem", sub: "disguise the route, attack leverage", type: "attacker" },
          { label: "Double Move / Tempo", sub: "freeze or flip the defender", type: "victim" },
          { label: "Separate & Finish", sub: "high-point, toe the line", type: "result" },
        ],
      },
      timeline: [
        { year: 1985, event: "Route technicians redefine receiver play" },
        { year: 2005, event: "Release and leverage coaching becomes standard" },
        { year: 2018, event: "Flag/7-on-7 reward separation craft over pure speed", highlight: true },
        { year: 2024, event: "Elite flag receivers master releases and double moves" },
      ],
      keyTakeaways: [
        "Separation is earned with technique: clean releases, stem manipulation, and attacking leverage",
        "Stack a deep defender (get on top of them) to remove their cushion on vertical routes",
        "Double moves and tempo changes beat defenders who guess — but they need time/protection",
        "Finish: shield the defender, high-point the ball, and keep your feet in bounds on the sideline",
      ],
      references: [
        { title: "Wide receiver techniques — overview", url: "https://en.wikipedia.org/wiki/Wide_receiver" },
        { title: "Releases and route running — basics", url: "https://www.usafootball.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-13-q1", type: "Release", challenge: "Off the line.", text: "What is a 'release'?", options: ["The receiver's first move to beat a defender off the line", "A type of throw", "A penalty", "The snap"], correctIndex: 0, explanation: "A clean release beats the defender's hands and gets you to your route path." },
        { id: "flag-13-q2", type: "Leverage", challenge: "Stacking.", text: "What does it mean to 'stack' a defender on a deep route?", options: ["Get directly on top of them to remove their cushion", "Stand behind the QB", "Line up in a pile", "Block them"], correctIndex: 0, explanation: "Stacking takes away the defender's ability to play the ball over your shoulder." },
        { id: "flag-13-q3", type: "Double Move", challenge: "Two fakes.", text: "What is a double move?", options: ["Faking one route to trigger the defender, then breaking to the real route", "Running two routes at once", "Changing positions", "A handoff"], correctIndex: 0, explanation: "E.g., a hitch-and-go: fake the stop, then sprint deep past a biting defender." },
        { id: "flag-13-q4", type: "Finish", challenge: "At the catch.", text: "What does 'finishing' a route include?", options: ["Shielding the defender, high-pointing the ball, and getting feet in bounds", "Stopping at the break", "Looking at the crowd", "Slowing down"], correctIndex: 0, explanation: "Separation only counts if you finish the catch in bounds." },
      ],
    },
  },

  // ─── flag-14: Route Concepts & Combinations (deep) ───────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "Route concepts", location: "High-school passing schemes", era: "Modern", emoji: "🕸️" },
    id: "flag-14",
    order: 14,
    title: "Route Concepts & Combinations",
    subtitle: "Mesh, flood, smash, levels — beating coverage with teamwork",
    category: "sports",
    xp: 115,
    badge: { id: "flag-badge-14", name: "Concept Designer", emoji: "🕸️" },
    challengeType: "quiz",
    info: {
      tagline: "Single routes get covered; concepts win. A concept combines several routes to put a defender in a bind — wrong no matter what they do. This is how high-level offenses beat man and zone on purpose, not by luck.",
      year: 2024,
      overview: [
        "A route concept is a coordinated combination of routes designed to stress a specific coverage and create a guaranteed open man. Instead of hoping one receiver wins, the concept makes a defender choose between two receivers and be wrong either way.",
        "Classic concepts every deep flag player should know:\n- SMASH — a short hitch under a corner route; high-low's the cornerback (he can't cover both the flat and the deep corner).\n- FLOOD — three routes at different depths to one side; overloads a zone with more receivers than defenders.\n- MESH — two crossing routes underneath that rub off man defenders and find soft spots in zone.\n- LEVELS / SPACING — receivers at staggered depths/widths so there's always an open window vs zone.",
        "Concepts are built to beat man OR zone:\n- Vs ZONE — flood and high-low concepts put two receivers in one defender's area (he can only take one).\n- Vs MAN — mesh and rub concepts use legal traffic so a defender gets 'picked' and his man comes open.\n- The QB reads the key defender the concept targets and throws off his reaction — the concept makes the read simple.",
      ],
      technical: {
        title: "High-Low, Horizontal Stretch, and Legal Rubs",
        body: [
          "The two stretches concepts use:\n- HIGH-LOW (vertical stretch): one deep + one short in the same area force a defender to commit up or down — throw to the one he leaves.\n- HORIZONTAL STRETCH: two routes spread across a zone (e.g., flat + corner) so one flat defender can't cover both.\n- The QB's read is the defender caught in the bind; his movement dictates the throw.",
          "Beating man with traffic — legally:\n- 'Rub' or 'pick' concepts (like mesh) send receivers close together so man defenders collide or get caught in traffic, springing a receiver open.\n- This is legal as long as receivers run their routes and don't deliberately block defenders (an illegal pick is a penalty) — timing and spacing make it work cleanly.\n- Concepts turn 'getting open' from individual battles into a designed, repeatable advantage — the core of high-school-level passing offense.",
        ],
        codeExample: {
          label: "SMASH concept (high-low on the cornerback)",
          code: `        CORNER (deep)
              \\
               \\        <- CB must choose:
                \\          take the hitch (throw corner)
   HITCH o------ \\         or take the corner (throw hitch)
   (short)        \\
   =====[CB]=======
   QB reads the CB: he can't cover both depths.`,
        },
      },
      incident: {
        title: "Concepts Beat Coverage by Design",
        when: "Modern",
        where: "Football passing offense",
        impact: "Route concepts turn 'get open' into a designed bind on a key defender — the backbone of modern (and flag) passing attacks",
        body: [
          "Modern passing offense is built on concepts: combinations like smash, flood, mesh, and levels that are specifically designed to defeat certain coverages by putting a defender in a no-win situation. The QB simply reads the targeted defender and throws away from him.",
          "Flag football, a pure passing game, lives on these ideas:\n- Concepts let a small offense reliably create open receivers vs both man and zone.\n- They make the QB's read simple and fast — crucial against a free rusher.\n- Pairing formation + motion (earlier) with the right concept is how elite flag offenses dictate completions. This is the strategic peak of flag offense.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Combine Routes", sub: "smash / flood / mesh / levels", type: "system" },
          { label: "Stress a Defender", sub: "high-low or horizontal", type: "attacker" },
          { label: "Read the Key", sub: "throw off his reaction", type: "victim" },
          { label: "Guaranteed Window", sub: "open vs man or zone", type: "result" },
        ],
      },
      timeline: [
        { year: 1980, event: "Concept-based passing (e.g., West Coast) takes over offense" },
        { year: 2000, event: "Air Raid spreads simple, repeatable concepts to all levels" },
        { year: 2018, event: "Flag/7-on-7 built around concepts vs man and zone", highlight: true },
        { year: 2024, event: "Elite flag offenses pair formation + motion + concept" },
      ],
      keyTakeaways: [
        "A concept combines routes to put a key defender in a bind — wrong whichever he chooses",
        "Smash (high-low) and flood (horizontal overload) beat zone; mesh/rubs beat man with legal traffic",
        "The QB reads the targeted defender and throws off his reaction — the concept simplifies the read",
        "Pair formation + motion + concept to reliably create open windows (legal rubs only — no blocking defenders)",
      ],
      references: [
        { title: "Route concepts (smash, flood, mesh) — overview", url: "https://en.wikipedia.org/wiki/Route_(gridiron_football)" },
        { title: "Passing concepts — coaching basics", url: "https://www.usafootball.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-14-q1", type: "Concept", challenge: "High-low.", text: "What does the SMASH concept do to a cornerback?", options: ["High-lows him — he can't cover both the short hitch and the deep corner", "Blocks him legally", "Confuses the QB", "Nothing"], correctIndex: 0, explanation: "Smash forces the CB to choose a depth; throw to the one he leaves." },
        { id: "flag-14-q2", type: "Vs Zone", challenge: "Overload.", text: "How does a FLOOD concept beat zone coverage?", options: ["It puts more receivers in an area than there are defenders", "It removes receivers", "It only works vs man", "It blocks defenders"], correctIndex: 0, explanation: "Three routes to a side overload a zone — someone comes open." },
        { id: "flag-14-q3", type: "Vs Man", challenge: "Traffic.", text: "How does a MESH concept beat man coverage?", options: ["Crossing routes create legal traffic that rubs off man defenders", "It tackles defenders", "It only beats zone", "It uses no routes"], correctIndex: 0, explanation: "Crossers spring receivers when man defenders get caught in traffic." },
        { id: "flag-14-q4", type: "Legality", challenge: "Keep it legal.", text: "What's the line between a legal rub and an illegal pick?", options: ["Receivers must run routes, not deliberately block defenders", "Anything goes", "Picks are always legal", "Rubs are always illegal"], correctIndex: 0, explanation: "Running routes is legal; intentionally blocking a defender is a penalty." },
      ],
    },
  },

  // ─── flag-15: Defensive Coverages (deep) ─────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "Coverage shells", location: "High-school defense", era: "Modern", emoji: "🧩" },
    id: "flag-15",
    order: 15,
    title: "Defensive Coverages (Deep)",
    subtitle: "Cover 0/1/2/3, match, and bracket",
    category: "sports",
    xp: 115,
    badge: { id: "flag-badge-15", name: "Coverage Mind", emoji: "🧩" },
    challengeType: "quiz",
    info: {
      tagline: "Great defense is organized deception. Coverage 'shells' assign every defender a job so the offense has no free window — and disguising which shell you're in makes the QB guess wrong. This is the chess answer to route concepts.",
      year: 2024,
      overview: [
        "A coverage is the plan for how all defenders work together. They're often named by how many deep defenders there are and whether the underneath is man or zone. Knowing the menu lets a defense match the offense's concept and take away its best option.",
        "The core coverages, by deep-defender count:\n- COVER 0 — no deep safety; everyone is in man (all-out, often with a rush). Tight but risky — beaten deep if a receiver wins.\n- COVER 1 — man underneath with one free safety deep to help over the top.\n- COVER 2 — two deep defenders split the deep field; underneath defenders play zones (vulnerable in the deep middle and over the top of the corners).\n- COVER 3 — three deep (each takes a third); four underneath zones; strong vs deep, soft in the flats/seams.",
        "Advanced ideas that win at a high level:\n- MATCH COVERAGE — looks like zone but 'matches' man-to-man based on the routes that release, beating both man and zone weaknesses.\n- BRACKET — double a star receiver with two defenders (one inside/underneath, one over the top) to erase him.\n- DISGUISE — show one shell pre-snap and rotate to another at the snap, so the QB's pre-snap read is wrong.",
      ],
      technical: {
        title: "Shell Weaknesses and Disguise",
        body: [
          "Every coverage trades something:\n- Cover 0/1 (man) is tight but loses if a receiver wins one-on-one or a rub springs someone; needs a pass rush to help.\n- Cover 2 is strong on the sidelines underneath but soft deep-middle and over the corners; Cover 3 is strong deep but soft in the flats.\n- Smart offenses attack the specific weakness — so smart defenses disguise and rotate to hide it.",
          "Disguise and matching are the high-level tools:\n- Pre-snap, align to suggest one coverage; at the snap, rotate a safety or bump defenders into the real one — the QB's plan no longer fits.\n- Match coverage lets zone defenders carry vertical routes like man, removing the seams offenses love.\n- Bracketing a star takes the offense's best weapon away and forces the QB elsewhere. Coverage IQ — knowing your job, the weakness, and how to hide it — is elite flag defense.",
        ],
        codeExample: {
          label: "Cover 2 vs Cover 3 (deep responsibilities)",
          code: `  COVER 2 (two deep halves)     COVER 3 (three deep thirds)
   [DEEP L]      [DEEP R]        [L 1/3]  [MID 1/3]  [R 1/3]
   ---- soft deep-middle ----    ---- soft in the flats ----
   [under zones / corners]       [   four underneath zones  ]
   strong: sidelines short       strong: deep
   weak:  deep middle, fade      weak:  flats, seams`,
        },
      },
      incident: {
        title: "Disguise Wins the Pre-Snap Chess",
        when: "Modern",
        where: "Defensive football",
        impact: "Elite defenses disguise coverage so the QB's pre-snap read is wrong — neutralizing route concepts",
        body: [
          "Offenses use formation and motion to read coverage and pick a concept; defenses fight back with disguise — showing a fake shell and rotating into the real one at the snap. A QB who read 'two-high' pre-snap and gets one-high after the snap is throwing into the wrong coverage.",
          "This pre-snap chess defines high-level play:\n- Match coverage and bracketing remove the easy answers concepts rely on.\n- Disguise makes the QB hold the ball or guess — and against a rush, hesitation is a sack or a bad throw.\n- A defense that knows the shells, their weaknesses, and how to hide them turns the QB's biggest advantage (pre-snap reads) into a liability.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pick the Shell", sub: "Cover 0/1/2/3 + match", type: "system" },
          { label: "Disguise It", sub: "show one, rotate to another", type: "attacker" },
          { label: "Match / Bracket", sub: "erase the concept or the star", type: "victim" },
          { label: "QB Reads Wrong", sub: "hesitation, bad throw", type: "result" },
        ],
      },
      timeline: [
        { year: 1970, event: "Numbered coverage shells (Cover 0–3) formalized" },
        { year: 1995, event: "Match (pattern-match) coverage spreads in college/pro" },
        { year: 2018, event: "Flag defenses adopt disguise and match ideas", highlight: true },
        { year: 2024, event: "Elite flag defense disguises shells to beat concepts" },
      ],
      keyTakeaways: [
        "Coverages are named by deep-defender count and man/zone: Cover 0 (all man), 1 (man + 1 deep), 2 (two deep), 3 (three deep)",
        "Each shell has a weakness (Cover 2 = deep middle; Cover 3 = flats) — offenses attack it, defenses hide it",
        "Match coverage plays zone that 'becomes' man on routes; bracketing doubles a star to erase him",
        "Disguise (show one shell, rotate to another) makes the QB's pre-snap read wrong",
      ],
      references: [
        { title: "Coverage shells (Cover 0–3) — overview", url: "https://en.wikipedia.org/wiki/Coverage_(American_football)" },
        { title: "Pattern-match coverage — concept", url: "https://www.usafootball.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-15-q1", type: "Shells", challenge: "All man, no help.", text: "What is Cover 0?", options: ["Everyone in man with no deep safety help (often with a rush)", "Three deep defenders", "All zone", "No defenders rush"], correctIndex: 0, explanation: "Cover 0 is all man, no deep help — tight but risky deep." },
        { id: "flag-15-q2", type: "Weakness", challenge: "Cover 2 soft spot.", text: "Where is Cover 2 most vulnerable?", options: ["The deep middle and over the top of the corners", "The flats only", "Nowhere", "The line of scrimmage"], correctIndex: 0, explanation: "Two deep halves leave the deep middle and corner fades exposed." },
        { id: "flag-15-q3", type: "Advanced", challenge: "Zone that's man.", text: "What is match coverage?", options: ["Zone that matches man-to-man based on the routes that release", "Pure man with no zone", "No coverage", "A blitz"], correctIndex: 0, explanation: "Match coverage removes zone seams by carrying routes like man." },
        { id: "flag-15-q4", type: "Disguise", challenge: "Fooling the QB.", text: "Why do defenses disguise their coverage?", options: ["So the QB's pre-snap read is wrong after the snap rotation", "To look cool", "To waste time", "It has no purpose"], correctIndex: 0, explanation: "Disguise turns the QB's pre-snap advantage into a liability." },
      ],
    },
  },

  // ─── flag-16: The Pass Rush ──────────────────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The rusher", location: "Pressuring the QB", era: "Modern", emoji: "💨" },
    id: "flag-16",
    order: 16,
    title: "The Pass Rush",
    subtitle: "The 7-yard rusher, contain, and timed pressure",
    category: "sports",
    xp: 112,
    badge: { id: "flag-badge-16", name: "Edge Rusher", emoji: "💨" },
    challengeType: "quiz",
    info: {
      tagline: "Coverage and rush work together: pressure forces a quick throw, coverage takes it away. In flag the rusher usually starts seven yards back — so the rush is a race of timing, angles, and contain, not brute force.",
      year: 2024,
      overview: [
        "The pass rush in flag is governed by a special rule: the designated rusher must start a set distance off the line (commonly 7 yards) before they can rush the QB. That head start for the offense makes rushing a discipline of timing and angles.",
        "What a great rusher does:\n- GET-OFF & SPEED — explode at the snap to cover the 7 yards fast and pressure the QB before he's comfortable.\n- CONTAIN — don't just run straight at the QB; take an angle that keeps him from escaping to the outside (a contained QB can't extend the play).\n- GO FOR THE FLAG — the ultimate pass-rush 'sack' is pulling the QB's flag behind the line; even pressure that forces a bad throw is a win.",
        "Pressure tactics beyond a single rusher:\n- TIMED BLITZ — send an extra rusher on a called play or when you've read run/quick pass, but it leaves a coverage hole, so it's a gamble.\n- SPY — assign a defender to watch ('spy') a mobile QB so he can't scramble for yards.\n- The rush must marry the coverage: a free rusher with busted coverage behind him is worse than no rush at all.",
      ],
      technical: {
        title: "Contain, Timing, and the Rush-Coverage Marriage",
        body: [
          "Contain is the rusher's prime directive:\n- Rush under control to a point that keeps the QB in the pocket; if you fly straight upfield, a step-up or a scramble beats you.\n- Use the 7-yard start to time your arrival with the routes' breaks — pressure that hits as the QB wants to throw is most disruptive.\n- Going for the flag vs going for contain is a read: take the flag when you have him, but never let him escape contain to chase it.",
          "Blitzing is risk management:\n- An extra rusher gets there faster but subtracts a coverage defender — best used on obvious passing downs or with a coverage that can survive it (e.g., a quick man-blitz).\n- Disguise the blitz (show rush, drop; show drop, rush) to confuse the QB's hot read.\n- Above all, the rush and coverage are one system: quick pressure shortens the time coverage must hold, and tight coverage buys time for the rush to arrive.",
        ],
      },
      incident: {
        title: "Pressure + Coverage = Turnovers",
        when: "Modern",
        where: "Flag football defense",
        impact: "The 7-yard rush rule makes timed pressure and contain — not raw speed — the key to disrupting flag quarterbacks",
        body: [
          "Because the rusher spots seven yards, a flag pass rush can't just bull through a line (there isn't one) — it has to win with timing, angle, and contain. A disciplined rush that contains the QB and arrives as routes break forces hurried, inaccurate throws.",
          "Paired with coverage, it creates takeaways:\n- A contained QB with covered receivers has nowhere to go — that's when interceptions and flag-pull 'sacks' happen.\n- Undisciplined rushing (losing contain, blitzing into the wrong coverage) gives up scrambles and big plays.\n- Elite flag defense treats rush and coverage as one unit, and that synergy is what generates turnovers.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Start 7 Yards Back", sub: "the flag rush rule", type: "system" },
          { label: "Get-Off + Angle", sub: "explode and contain", type: "attacker" },
          { label: "Pressure on Time", sub: "arrive as routes break", type: "victim" },
          { label: "Sack / Bad Throw", sub: "flag pull or hurried ball", type: "result" },
        ],
      },
      timeline: [
        { year: 2000, event: "NFL FLAG standardizes the 7-yard rush rule" },
        { year: 2010, event: "Contain-rush technique formalized for flag" },
        { year: 2018, event: "Timed blitzes and QB spies enter elite flag defense", highlight: true },
        { year: 2024, event: "Rush-coverage synergy emphasized at the Olympic level" },
      ],
      keyTakeaways: [
        "The flag rusher usually starts ~7 yards back, so rushing is about timing and angles, not power",
        "Contain the QB (don't let him escape outside) and time your arrival to when routes break",
        "Going for the flag behind the line is the 'sack'; forcing a bad throw is also a win",
        "Rush and coverage are one system — blitz is a gamble that subtracts a coverage defender",
      ],
      references: [
        { title: "Pass rush — overview", url: "https://en.wikipedia.org/wiki/Pass_rush" },
        { title: "Flag football rushing rules", url: "https://nflflag.com/leagues/rules" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-16-q1", type: "Rule", challenge: "The head start.", text: "Where must a flag rusher typically start?", options: ["A set distance back (commonly 7 yards) off the line", "On the line of scrimmage", "In the end zone", "Behind the QB"], correctIndex: 0, explanation: "The 7-yard rule makes rushing about timing and angles." },
        { id: "flag-16-q2", type: "Technique", challenge: "Keep him in.", text: "What is 'contain'?", options: ["Rushing at an angle that keeps the QB from escaping outside", "Running straight at the QB always", "Covering a receiver", "Dropping into coverage"], correctIndex: 0, explanation: "A contained QB can't extend the play by scrambling out." },
        { id: "flag-16-q3", type: "Blitz", challenge: "The gamble.", text: "What is the trade-off of sending an extra blitzer?", options: ["Faster pressure but one fewer coverage defender", "No downside ever", "It's illegal", "It slows the rush"], correctIndex: 0, explanation: "A blitz subtracts a coverage defender, so it's a calculated risk." },
        { id: "flag-16-q4", type: "Synergy", challenge: "Together.", text: "Why must rush and coverage work together?", options: ["Pressure shortens the time coverage must hold; coverage buys time for the rush", "They are unrelated", "Only the rush matters", "Only coverage matters"], correctIndex: 0, explanation: "The two as one system create hurried throws and turnovers." },
      ],
    },
  },

  // ─── flag-17: Run Game & Misdirection ────────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "Misdirection", location: "High-school offense", era: "Modern", emoji: "🌀" },
    id: "flag-17",
    order: 17,
    title: "Run Game & Misdirection",
    subtitle: "Sweeps, motion, reverses, play-action, and screens",
    category: "sports",
    xp: 112,
    badge: { id: "flag-badge-17", name: "Trickster", emoji: "🌀" },
    challengeType: "quiz",
    info: {
      tagline: "Flag isn't all passing. A smart run game and misdirection freeze the defense, set up the pass, and steal easy yards. The best offenses make every play look the same — until it isn't.",
      year: 2024,
      overview: [
        "Even in a passing game, runs and fakes are weapons (outside the no-run zones). Misdirection — making the defense flow one way while the ball goes another — is especially powerful in flag, where pursuit angles and flag-pulling depend on reading the play correctly.",
        "Core run-game and misdirection tools:\n- SWEEPS & PITCHES — get a fast player to the edge with a head start, attacking the perimeter where flag defenses are stretched.\n- JET / ORBIT MOTION — a receiver in fast motion can take a handoff at full speed (jet sweep) or just hold the defense's eyes to set up something else.\n- REVERSES — start a play one direction, then hand off going back the other way to punish over-pursuit.",
        "Misdirection that sets up the pass:\n- PLAY-ACTION — fake the run (or sweep/jet) to suck defenders up, then throw behind them; deadly against aggressive defenses.\n- SCREENS — let the rush come, then dump the ball to a receiver with room to run, turning the defense's aggression against it.\n- The principle: tendencies and fakes manipulate the defense's eyes and feet — make them wrong before they can react.",
      ],
      technical: {
        title: "Attacking Pursuit and Eye Discipline",
        body: [
          "Why misdirection works on flag defenses:\n- Flag defenders rely on pursuit angles and reading the ball; if they misread the direction, their angle is wrong and they can't recover to pull the flag.\n- Jet/orbit motion forces defenders to honor the speed sweep, freezing them or pulling them out of position for a counter.\n- Reverses and counters specifically punish defenses that over-pursue (flow hard to the first action).",
          "Building a misdirection attack:\n- Make plays look identical at the start (same motion, same backfield action) so the defense can't key the difference until it's too late.\n- Pair a run/sweep look with play-action off it — once the defense respects the run, the pass behind it is wide open.\n- Eye discipline is the defense's counter (next stage); the offense's job is to defeat it with convincing fakes and identical pre-snap looks.",
        ],
      },
      incident: {
        title: "Make Them Wrong Before the Snap Pays Off",
        when: "Modern",
        where: "Flag football offense",
        impact: "Misdirection and play-action exploit flag defenders' reliance on reading the play and taking pursuit angles",
        body: [
          "Because flag defenders must diagnose the play and take correct angles to pull flags, an offense that lies convincingly — with motion, fakes, and counters — can put defenders a step out of position, which on a small field means a big gain or a touchdown.",
          "It rounds out a complete offense:\n- Misdirection keeps an aggressive defense honest, slowing its pursuit and pass rush.\n- Play-action off a believable run look creates the easiest throws in football.\n- Combined with formations, motion, and route concepts, a misdirection element makes an offense impossible to key — the mark of a high-school-level attack.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Sell One Direction", sub: "motion / fake / sweep look", type: "system" },
          { label: "Defense Flows", sub: "pursuit + eyes commit", type: "attacker" },
          { label: "Counter / Play-Action", sub: "ball goes the other way", type: "victim" },
          { label: "Defenders Out of Position", sub: "wrong angle = big play", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Misdirection and counters become offensive staples" },
        { year: 1990, event: "Jet/orbit motion spreads across football" },
        { year: 2018, event: "Flag offenses add motion sweeps and play-action", highlight: true },
        { year: 2024, event: "Elite flag attacks make every play look identical" },
      ],
      keyTakeaways: [
        "Runs and misdirection (outside no-run zones) freeze the defense and set up the pass",
        "Jet/orbit motion, sweeps, and reverses attack the perimeter and punish over-pursuit",
        "Play-action and screens turn an aggressive defense's flow and rush against it",
        "Make every play look identical at the start so the defense can't key the difference",
      ],
      references: [
        { title: "Play-action pass — overview", url: "https://en.wikipedia.org/wiki/Play-action_pass" },
        { title: "Misdirection in football offense", url: "https://www.usafootball.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-17-q1", type: "Run Game", challenge: "Edge speed.", text: "What does a sweep or jet motion attack?", options: ["The perimeter, getting a fast player to the edge with momentum", "The deep middle only", "The QB", "Nothing"], correctIndex: 0, explanation: "Sweeps/jets stretch the defense horizontally to the edge." },
        { id: "flag-17-q2", type: "Misdirection", challenge: "Punishing pursuit.", text: "What does a reverse punish?", options: ["A defense that over-pursues the first action", "A defense that sits still", "The offense's own QB", "Good tackling"], correctIndex: 0, explanation: "Reverses counter hard-flowing defenses by going back the other way." },
        { id: "flag-17-q3", type: "Play-Action", challenge: "Fake then throw.", text: "Why is play-action effective?", options: ["Faking the run sucks defenders up, opening throws behind them", "It's a running play", "It only works in the red zone", "It never works"], correctIndex: 0, explanation: "Once the defense respects the run, the pass behind it opens up." },
        { id: "flag-17-q4", type: "Principle", challenge: "Disguise.", text: "What makes misdirection work?", options: ["Plays looking identical at the start so the defense keys the wrong thing", "Telling the defense the play", "Running slowly", "Never using motion"], correctIndex: 0, explanation: "Identical looks defeat the defender's read until it's too late." },
      ],
    },
  },

  // ─── flag-18: Defensive Strategy & Adjustments ───────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The defensive game plan", location: "High-school defense", era: "Modern", emoji: "🗺️" },
    id: "flag-18",
    order: 18,
    title: "Defensive Strategy & Adjustments",
    subtitle: "Recognition, communication, and situational defense",
    category: "sports",
    xp: 112,
    badge: { id: "flag-badge-18", name: "Defensive Coordinator", emoji: "🗺️" },
    challengeType: "quiz",
    info: {
      tagline: "Offenses script chess; defenses answer. Elite flag defense is recognition + communication + situational savvy — diagnosing formations and motion, talking through it, and changing the plan by down, distance, and field position.",
      year: 2024,
      overview: [
        "Defense is reactive, so the best defenses are great at recognizing what's coming and adjusting fast. That means reading formations and motion, communicating instantly, and tailoring coverage/rush to the situation.",
        "Recognition and communication:\n- FORMATION RECOGNITION — trips, bunch, and stack signal likely concepts; align and adjust your coverage to the strength before the snap.\n- HANDLE MOTION — have a rule for motion (travel with it in man, bump/rotate in zone) so it doesn't create a free receiver.\n- TALK — call the strength, switches, and assignments out loud; silent defenses give up busted-coverage touchdowns.",
        "Situational defense changes the plan:\n- DOWN & DISTANCE — on 3rd-and-long, drop into deep zone and rush with contain; on 3rd-and-short or near a no-run zone, expect quick passes.\n- FIELD POSITION — tighten up in the red zone (less field to defend deep) and protect against the quick score; near your own end zone, don't get beat deep.\n- DISGUISE & CHANGE-UPS — vary coverages and pressures so the offense can't get comfortable, and disguise to beat their pre-snap reads.",
      ],
      technical: {
        title: "Eye Discipline, Leverage Rules, and Situational Calls",
        body: [
          "Beating misdirection with discipline:\n- Eye discipline: each defender reads their key (not the backfield magic show), so fakes and motion don't pull them out of position.\n- Leverage rules: align inside or outside based on your help and the coverage, so you funnel receivers to your support and never get crossed up.\n- Communication protocols turn five individuals into one unit that passes off crossers and picks cleanly.",
          "Game-planning by situation:\n- Identify the offense's tendencies (do they sweep on 1st down? throw the smash on 3rd-and-medium?) and take away their favorite.\n- Match personnel and coverage to the down/distance and the no-run zones (where they MUST pass).\n- Keep a few disguises and pressures in your back pocket for key downs — the defense that adjusts faster than the offense controls the game.",
        ],
      },
      incident: {
        title: "The Defense That Adjusts Fastest Wins",
        when: "Modern",
        where: "Competitive flag football",
        impact: "Recognition, communication, and situational adjustments separate elite flag defenses from athletic but beatable ones",
        body: [
          "Offenses use formation, motion, concepts, and misdirection to manufacture advantages. The defenses that hold up don't just out-athlete them — they recognize the looks, communicate instantly, and adjust their coverage, leverage, and pressure to the situation.",
          "It's the defensive mirror of the offensive chess match:\n- Diagnose the formation/motion, talk through the assignment, and disguise the answer.\n- Tailor the call to down, distance, and field position — and take away the offense's best option on the biggest downs.\n- A disciplined, communicating, adjusting defense turns the offense's cleverness into hesitation and mistakes — the hallmark of high-school-level flag defense.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Recognize", sub: "formation + motion", type: "system" },
          { label: "Communicate", sub: "strength, switches, rules", type: "attacker" },
          { label: "Situational Call", sub: "by down/distance/field", type: "victim" },
          { label: "Adjust Faster Than the Offense", sub: "force hesitation", type: "result" },
        ],
      },
      timeline: [
        { year: 1970, event: "Situational defense (down/distance calls) formalized" },
        { year: 2000, event: "Pattern recognition and communication systems mature" },
        { year: 2018, event: "Flag defenses adopt motion rules and situational plans", highlight: true },
        { year: 2024, event: "Elite flag defense out-adjusts offensive chess" },
      ],
      keyTakeaways: [
        "Defense is recognition + communication + situational savvy — diagnose formation/motion and talk it out",
        "Have rules for motion (travel in man, rotate in zone) so it never creates a free receiver",
        "Adjust by down, distance, and field position; tighten in the red zone and on 3rd-and-long",
        "Eye discipline and leverage rules beat misdirection; the faster-adjusting side wins",
      ],
      references: [
        { title: "Defensive game-planning — basics", url: "https://www.usafootball.com/" },
        { title: "Situational football — overview", url: "https://en.wikipedia.org/wiki/American_football_strategy" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-18-q1", type: "Recognition", challenge: "Pre-snap read.", text: "What should a defense do when it sees a trips formation?", options: ["Recognize the overload and adjust coverage to the strength", "Ignore it", "Always blitz", "Leave the strong side uncovered"], correctIndex: 0, explanation: "Align and adjust to the formation's strength before the snap." },
        { id: "flag-18-q2", type: "Motion", challenge: "Handling motion.", text: "Why must a defense have a rule for motion?", options: ["So motion doesn't create a free, uncovered receiver", "To look organized only", "Motion is illegal", "It doesn't matter"], correctIndex: 0, explanation: "Travel with it in man or rotate in zone — never leave the motion man free." },
        { id: "flag-18-q3", type: "Situational", challenge: "Third and long.", text: "What's a smart call on 3rd-and-long?", options: ["Drop into deep zone and rush with contain", "All-out man with no deep help", "Expect only a run", "Leave deep wide open"], correctIndex: 0, explanation: "Protect the sticks deep and make them check down short." },
        { id: "flag-18-q4", type: "Discipline", challenge: "Beating fakes.", text: "What lets defenders beat misdirection?", options: ["Eye discipline — reading their key, not the backfield show", "Watching the fake", "Guessing", "Closing their eyes"], correctIndex: 0, explanation: "Reading your key keeps fakes and motion from pulling you out of position." },
      ],
    },
  },

  // ─── flag-19: Athletic Development (HS) ───────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "Speed & strength training", location: "High-school athletic development", era: "Modern", emoji: "🏋️" },
    id: "flag-19",
    order: 19,
    title: "Athletic Development",
    subtitle: "Speed mechanics, power, agility, and staying healthy",
    category: "sports",
    xp: 112,
    badge: { id: "flag-badge-19", name: "Athlete Built", emoji: "🏋️" },
    challengeType: "quiz",
    info: {
      tagline: "At the high-school level, the athlete you build off the field decides the player you are on it. Speed mechanics, explosive power, agility, recovery, and injury prevention turn skills into a complete, durable competitor.",
      year: 2024,
      overview: [
        "Skills win plays; athleticism wins matchups and seasons. Deliberate training — done safely and with good technique — builds the speed, power, and durability that flag football's cuts and sprints demand.",
        "The pillars of athletic development:\n- SPEED MECHANICS — sprinting is a skill: proper acceleration posture (lean, drive), arm action, and stride. Better mechanics = faster, with no extra effort.\n- POWER & STRENGTH — explosive strength (jumps, sprints, age-appropriate resistance training) drives acceleration and change of direction; train movement, not just muscles.\n- AGILITY — ladders, cones, and reactive drills sharpen the deceleration-and-cut ability flag rewards.",
        "Staying on the field is part of being good:\n- INJURY PREVENTION — warm up dynamically, strengthen hamstrings and the core, and train landing/cutting mechanics to protect knees (ACL) and hamstrings — the most common non-contact injuries.\n- RECOVERY — sleep, hydration, and nutrition are when training actually pays off; overtraining and poor sleep cause both slumps and injuries.\n- CONSISTENCY — steady, progressive training beats occasional max-effort grinds; technique and load increase gradually under guidance.",
      ],
      technical: {
        title: "Training That Transfers (Safely)",
        body: [
          "Make training specific and safe:\n- Most flag plays are short accelerations and cuts, so prioritize acceleration mechanics, plyometrics (jumps/bounds for power), and change-of-direction drills over long-distance running.\n- Strength work for youth/HS athletes should emphasize technique and movement quality with age-appropriate loads — supervised, progressive, never ego-lifting.\n- Reactive agility (responding to a cue, like mirroring a partner) transfers better to games than purely pre-planned drills.",
          "Protecting the athlete:\n- Dynamic warm-ups prep the body; static stretching is better post-activity.\n- Neuromuscular programs (landing/cutting technique, hamstring and hip strength) measurably reduce ACL and hamstring injuries — vital in a cutting sport.\n- Recovery is training: prioritize sleep (the biggest performance lever for teens), hydration, and balanced nutrition; manage workload to avoid overuse. Healthy athletes get to use their skills — durability is a competitive advantage.",
        ],
      },
      incident: {
        title: "Build the Athlete to Unlock the Player",
        when: "Modern",
        where: "High-school athletic development",
        impact: "Speed, power, agility, and injury-prevention training turn skilled players into complete, durable competitors",
        body: [
          "At higher levels, two players with equal skill are separated by athleticism and availability — who's faster, more explosive, and healthy when it matters. Deliberate, safe athletic development is what raises a player's ceiling and keeps them on the field.",
          "For a cutting, sprinting sport like flag, it's essential:\n- Speed mechanics and plyometric power make routes, jukes, and pursuit faster.\n- Injury-prevention training protects the knees and hamstrings that the sport stresses most.\n- Recovery and consistency turn training into real gains. The complete flag player trains the body as seriously as the skills — the foundation for competing at the high-school level and beyond.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Speed Mechanics", sub: "acceleration posture + arms", type: "system" },
          { label: "Power & Agility", sub: "plyos, COD, safe strength", type: "attacker" },
          { label: "Injury Prevention", sub: "ACL/hamstring, landing technique", type: "victim" },
          { label: "Recovery & Consistency", sub: "sleep, fuel, progress", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Sport science formalizes speed and agility training" },
        { year: 2005, event: "ACL/hamstring prevention programs proven effective" },
        { year: 2018, event: "Youth athletic-development guidelines emphasize safe, progressive training", highlight: true },
        { year: 2024, event: "Flag athletes train speed, power, and durability deliberately" },
      ],
      keyTakeaways: [
        "Athleticism wins matchups: train speed mechanics, explosive power, and agility — specific to flag's cuts and bursts",
        "Sprinting is a skill — better acceleration posture and arm action make you faster with no extra effort",
        "Prevent injuries with dynamic warm-ups and ACL/hamstring/core work; landing and cutting technique protect knees",
        "Recovery (sleep, hydration, nutrition) and consistent, progressive, supervised training turn work into gains",
      ],
      references: [
        { title: "Youth athletic development — guidelines", url: "https://www.nsca.com/" },
        { title: "ACL injury prevention — overview", url: "https://en.wikipedia.org/wiki/Anterior_cruciate_ligament_injury#Prevention" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-19-q1", type: "Speed", challenge: "Faster, free.", text: "Why train speed mechanics?", options: ["Sprinting is a skill — better technique makes you faster with no extra effort", "Speed can't be trained", "Only long runs help", "Mechanics slow you down"], correctIndex: 0, explanation: "Acceleration posture and arm action improve speed through technique." },
        { id: "flag-19-q2", type: "Specificity", challenge: "Train the game.", text: "What training transfers best to flag football?", options: ["Acceleration, plyometrics, and change-of-direction work", "Long-distance jogging only", "Max bench press only", "Sitting still"], correctIndex: 0, explanation: "Flag is short bursts and cuts — train those, plus reactive agility." },
        { id: "flag-19-q3", type: "Injury Prevention", challenge: "Stay healthy.", text: "Which most reduces non-contact injuries in a cutting sport?", options: ["Dynamic warm-ups + hamstring/core strength + landing/cutting technique", "Skipping warm-ups", "Only static stretching before play", "Never resting"], correctIndex: 0, explanation: "Neuromuscular programs cut ACL and hamstring injuries notably." },
        { id: "flag-19-q4", type: "Recovery", challenge: "When gains happen.", text: "Why is recovery part of training?", options: ["Sleep, hydration, and nutrition are when the body adapts and improves", "Recovery wastes time", "Only the workout matters", "Teens don't need sleep"], correctIndex: 0, explanation: "Recovery — especially sleep — is the biggest performance lever for teens." },
      ],
    },
  },

  // ─── flag-20: Game IQ & The Next Level ───────────────────────────────────────
  {
    epochId: "flag-football",
    wonder: { name: "The complete player", location: "From HS to the Olympics", era: "Modern", emoji: "🏆" },
    id: "flag-20",
    order: 20,
    title: "Game IQ & The Next Level",
    subtitle: "Situational mastery, leadership, and where flag can take you",
    category: "sports",
    xp: 120,
    badge: { id: "flag-badge-20", name: "Complete Competitor", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "Talent gets you on the field; game IQ wins games. The complete player masters the clock, down-and-distance, and end-game situations, leads teammates, plays clean — and now has a real path from the high-school field all the way to the Olympics.",
      year: 2028,
      overview: [
        "Everything in this course comes together in game IQ: making the right decision for the situation, every time. The smartest player on the field often beats the most talented one by managing the clock, the downs, and the moment.",
        "Situational mastery — the stuff that wins close games:\n- CLOCK & DOWNS — know the score, time, and down/distance on every play; protect a lead by staying in bounds and milking the clock, or hurry up and get out of bounds when trailing.\n- TWO-MINUTE / END-OF-HALF — manage time-outs and tempo to maximize possessions; know when to take a shot and when to take the sure first down.\n- FIELD & ZONE AWARENESS — play to the no-run zones, field position, and the line to gain; take what the defense gives on key downs.",
        "Leadership, sportsmanship, and the path forward:\n- LEADERSHIP — communicate, stay composed, lift teammates, and own mistakes; the best players make everyone around them better.\n- SPORTSMANSHIP — flag is non-contact and community-driven; respect for opponents and officials is part of the game.\n- THE NEXT LEVEL — flag football now offers real pathways: state high-school championships (especially in the booming girls' game), growing college programs, and the ultimate stage — flag football at the 2028 Los Angeles Olympics.",
      ],
      technical: {
        title: "Decision-Making by Situation, and the Pathway",
        body: [
          "Game IQ is situational decision-making:\n- Leading late: stay in bounds, take the safe completion, and run clock; don't risk the turnover that flips the game.\n- Trailing late: get out of bounds to stop the clock, use timeouts wisely, and attack the sticks — calculated aggression, not panic.\n- Every call weighs score, time, down, distance, and field position together — that's the QB's and the team's highest-level skill.",
          "Where flag football can take a player:\n- HIGH SCHOOL: many U.S. states sanction flag football (girls' flag is one of the fastest-growing high-school sports), with official seasons and state championships.\n- COLLEGE: women's flag football is a fast-emerging college sport (NAIA championships and growing NCAA interest), creating scholarship and competitive opportunities.\n- OLYMPIC: flag football debuts at the LA 2028 Olympics — a global stage that didn't exist for this sport a decade ago. The skills in this course lead all the way there.",
        ],
      },
      incident: {
        title: "A Real Path: High School to the Olympic Stage",
        when: "2023–2028",
        where: "United States and the world",
        impact: "Flag football's explosive growth created genuine pathways — from sanctioned high-school championships to college programs to the 2028 Olympics",
        body: [
          "In just a few years, flag football went from gym class to a sport with real competitive ladders. U.S. high-school associations have sanctioned it (girls' flag football is booming with official state titles), colleges have launched women's programs with national championships, and the IOC added flag football to the LA 2028 Olympics.",
          "It means the skills matter beyond fun:\n- A player who masters offense, defense, agility, and game IQ can compete for state titles, earn college opportunities, and dream of the Olympics.\n- The sport rewards smarts, skill, and athleticism over size — opening the door to athletes who might not fit traditional tackle football.\n- Game IQ is the capstone: the complete competitor reads the situation, leads, plays clean, and seizes the moment — on any stage, up to the Olympic one.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Situation", sub: "score, clock, down, field", type: "system" },
          { label: "Make the Smart Call", sub: "protect lead / chase points", type: "attacker" },
          { label: "Lead & Play Clean", sub: "composure + sportsmanship", type: "victim" },
          { label: "The Next Level", sub: "HS titles → college → 2028 Olympics", type: "result" },
        ],
      },
      timeline: [
        { year: 2019, event: "U.S. states begin sanctioning girls' high-school flag football" },
        { year: 2021, event: "Women's college flag football crowns national champions (NAIA)" },
        { year: 2023, event: "IOC adds flag football to the 2028 Los Angeles Olympics", highlight: true },
        { year: 2028, event: "Flag football debuts at the Los Angeles Olympic Games" },
      ],
      keyTakeaways: [
        "Game IQ wins close games: master the clock, down-and-distance, and end-of-half/two-minute situations",
        "Leading late, protect the ball and run clock; trailing late, stop the clock and attack the sticks",
        "Leadership and sportsmanship are part of being a complete, non-contact-sport competitor",
        "Flag now has real pathways: high-school state championships, college programs, and the 2028 LA Olympics",
      ],
      references: [
        { title: "Flag football at the 2028 Olympics", url: "https://en.wikipedia.org/wiki/Flag_football_at_the_2028_Summer_Olympics" },
        { title: "Girls' high-school flag football — growth", url: "https://nflflag.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "flag-20-q1", type: "Clock", challenge: "Protecting a lead.", text: "Leading late, what should the offense generally do?", options: ["Stay in bounds and run clock; avoid the turnover", "Throw deep every play", "Run out of bounds constantly", "Call timeouts to help the defense"], correctIndex: 0, explanation: "Protect the ball and milk the clock to close out the game." },
        { id: "flag-20-q2", type: "Two-Minute", challenge: "Trailing late.", text: "Trailing with little time, what's the smart approach?", options: ["Get out of bounds to stop the clock and attack the line to gain", "Run the clock down", "Avoid timeouts", "Kneel the ball"], correctIndex: 0, explanation: "Stop the clock, use timeouts well, and chase the sticks." },
        { id: "flag-20-q3", type: "Leadership", challenge: "Complete player.", text: "What marks a complete competitor beyond skill?", options: ["Game IQ, leadership, composure, and sportsmanship", "Only raw speed", "Only a strong arm", "Trash talk"], correctIndex: 0, explanation: "Smarts, leadership, and clean play separate the best players." },
        { id: "flag-20-q4", type: "Pathway", challenge: "Where it leads.", text: "What is the ultimate competitive stage flag football now reaches?", options: ["The 2028 Los Angeles Olympic Games", "Only backyard games", "There is none", "The NFL Combine"], correctIndex: 0, explanation: "Flag debuts at the LA 2028 Olympics — a real path from HS to the world stage." },
      ],
    },
  },
];
