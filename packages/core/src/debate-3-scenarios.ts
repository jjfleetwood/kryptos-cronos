import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the debate epoch "The Formats" (debate-3).
// Each spot is a deterministic, knowledge-based decision: read a described round,
// identify the FORMAT, and apply its exact rules — speech order, roles, times, and
// format-specific mechanics. The correct line is the one taught in that stage, never
// a matter of opinion. correctIndex and explanation are stripped server-side before
// reaching the client.
export const debate3Scenarios: Record<string, ScenarioConfig> = {
  // ─── debate-3-01: Policy Debate (Cross-Examination) ───────────────────────────
  "debate-3-01": {
    intro:
      "You're scouting competitive debate formats. Read each round carefully and apply policy debate's rules exactly — speech order, the stock issues, and the Negative's arsenal.",
    spots: [
      {
        id: "deb3-01-s1",
        label: "Name the Format",
        situation:
          "Two two-person teams debate the SAME resolution for the entire year — 'the U.S. federal government should substantially increase its funding of public transportation.' They read quoted evidence 'cards' at 300+ words per minute out of enormous files.",
        prompt: "Which format is this?",
        options: [
          "Public Forum",
          "Lincoln-Douglas",
          "Policy debate (Cross-Examination)",
          "Congressional Debate",
        ],
        correctIndex: 2,
        explanation:
          "A single year-long resolution, two-person teams, dense evidence 'cards,' and high-speed 'spreading' are the signatures of Policy (CX) debate — the oldest and most research-intensive American format.",
      },
      {
        id: "deb3-01-s2",
        label: "The Negative Block",
        situation:
          "On the Negative side, the 2NC delivers its speech and then the 1NR immediately follows — two Negative speeches back-to-back with no Affirmative speech in between.",
        prompt: "What are these two consecutive Negative speeches called?",
        options: [
          "The Negative block",
          "The rebuttal split",
          "Grand crossfire",
          "The authorship speech",
        ],
        correctIndex: 0,
        explanation:
          "The 2NC and 1NR delivered consecutively form the 'Negative block' — a wall of disadvantages, counterplans, and topicality that the lone 1AR must then answer all at once.",
      },
      {
        id: "deb3-01-s3",
        label: "Win Condition",
        situation:
          "The Affirmative has clearly won significance, inherency, and solvency. But the Negative proves the plan is not within the wording of the resolution.",
        prompt: "What is the result?",
        options: [
          "Affirmative wins — they took three of the four stock issues",
          "Negative wins — the plan fails topicality, and the Affirmative must win ALL stock issues",
          "It's a tie, since each side won arguments",
          "The judge disregards topicality as a technicality",
        ],
        correctIndex: 1,
        explanation:
          "The Affirmative must win every stock issue; the Negative wins by defeating any single one. Losing topicality alone is fatal, even with significance, inherency, and solvency conceded.",
      },
      {
        id: "deb3-01-s4",
        label: "Hardest Speech",
        situation:
          "Right after the Negative block, one Affirmative speaker must answer every disadvantage, counterplan, and topicality argument in a short, fixed-length speech.",
        prompt: "Which speech is this — famous as the hardest in debate?",
        options: [
          "The 2AR (final Affirmative rebuttal)",
          "The 1AC (first Affirmative constructive)",
          "The 1AR (first Affirmative rebuttal)",
          "The 2NC (second Negative constructive)",
        ],
        correctIndex: 2,
        explanation:
          "The 1AR must answer the entire Negative block under brutal time pressure — one speaker covering two Negative speeches. That is why it is legendary as debate's hardest speech, demanding ruthless prioritization.",
      },
    ],
  },

  // ─── debate-3-02: Lincoln-Douglas Debate ──────────────────────────────────────
  "debate-3-02": {
    intro:
      "Lincoln-Douglas is debate's philosophy seminar. Identify it, then apply its framework, its speech order, and its solo structure.",
    spots: [
      {
        id: "deb3-02-s1",
        label: "Name the Format",
        situation:
          "One debater faces one debater on the value resolution 'A just society ought to value rehabilitation over retribution.' Each side proposes a core value and a standard for measuring it.",
        prompt: "Which format is this?",
        options: [
          "Policy debate",
          "Lincoln-Douglas",
          "British Parliamentary",
          "Mock Trial",
        ],
        correctIndex: 1,
        explanation:
          "A one-on-one debate on a value resolution ('what is just / ought to be'), decided through a value-and-criterion framework, is Lincoln-Douglas.",
      },
      {
        id: "deb3-02-s2",
        label: "The Framework",
        situation:
          "An LD debater must set up the lens through which the judge will weigh every argument in the round.",
        prompt: "What two elements make up an LD framework?",
        options: [
          "A plan and a counterplan",
          "A value (the core ideal) and a criterion (the standard for measuring or achieving it)",
          "Significance and solvency",
          "Style and strategy",
        ],
        correctIndex: 1,
        explanation:
          "The framework is a VALUE (e.g., justice, autonomy, welfare) plus a CRITERION (e.g., protecting rights, maximizing well-being). Winning the framework controls how all other arguments are weighed.",
      },
      {
        id: "deb3-02-s3",
        label: "Speech Order",
        situation:
          "It's an LD round, one speaker per side. The Affirmative speaks first, the Negative gets one long middle speech, and the Affirmative speaks last.",
        prompt: "Which is the correct LD speech order?",
        options: [
          "1AC, 1NC, 2AC, 2NC, then four rebuttals",
          "AC → NC → 1AR → NR → 2AR (Aff first and last; Neg one long middle speech)",
          "Constructive → Rebuttal → Summary → Final Focus",
          "Authorship, then alternating affirmative and negative speeches",
        ],
        correctIndex: 1,
        explanation:
          "LD runs AC → NC → 1AR → NR → 2AR. The Affirmative speaks first and last but has less total time; the Negative gets one long speech to both rebuild and attack.",
      },
      {
        id: "deb3-02-s4",
        label: "Solo Format",
        situation:
          "A new student asks whether they'll be assigned a partner before their first LD tournament.",
        prompt: "How many debaters compete per side in LD?",
        options: [
          "One — LD is one-on-one, and that single debater does case, cross-ex, rebuttals, and weighing",
          "Two, in a partner team",
          "Three, as in World Schools",
          "Four teams of two, as in British Parliamentary",
        ],
        correctIndex: 0,
        explanation:
          "LD is strictly one-on-one. Because a single person does everything, it rewards versatility and deep individual mastery rather than partner coordination.",
      },
    ],
  },

  // ─── debate-3-03: Public Forum Debate ─────────────────────────────────────────
  "debate-3-03": {
    intro:
      "Public Forum is built for the 'reasonable person.' Identify it and apply its crossfires, its speech order, and the job of the Final Focus.",
    spots: [
      {
        id: "deb3-03-s1",
        label: "Name the Format",
        situation:
          "Two-person teams debate a topic that changes every month, drawn from current events, before a parent volunteer with no debate training. Speeches are short and jargon-free.",
        prompt: "Which format is this?",
        options: [
          "Policy debate",
          "Lincoln-Douglas",
          "Public Forum",
          "Congressional Debate",
        ],
        correctIndex: 2,
        explanation:
          "Monthly current-events topics, two-person teams, short speeches, and a lay 'reasonable person' judge are the hallmarks of Public Forum — designed for accessibility over technical maneuvering.",
      },
      {
        id: "deb3-03-s2",
        label: "Crossfire",
        situation:
          "After the first two speeches, the debaters question each other directly for three minutes. Later, near the end of the round, all four debaters can question one another at once.",
        prompt: "What is that all-four-speakers questioning period called?",
        options: [
          "Cross-examination",
          "Grand crossfire",
          "Points of information",
          "The reply speech",
        ],
        correctIndex: 1,
        explanation:
          "PF's signature is crossfire — direct, two-way questioning. The period near the end where all four speakers participate is the 'grand crossfire'; staying composed there matters because it can devolve into chaos that judges penalize.",
      },
      {
        id: "deb3-03-s3",
        label: "Final Focus",
        situation:
          "Thirty seconds remain in the last speech of the round. You could introduce a brand-new statistic, or explain why your impact outweighs the opponent's even if they win their argument.",
        prompt: "What must the Final Focus do?",
        options: [
          "Introduce the new statistic for a last-second edge",
          "Crystallize and weigh — no new arguments, just the clearest reason you win",
          "Begin another crossfire",
          "Restate the constructive word-for-word",
        ],
        correctIndex: 1,
        explanation:
          "The Final Focus is for crystallization and explicit weighing — telling the lay judge how to compare impacts. New arguments are disregarded; the team that weighs clearly usually wins close rounds.",
      },
      {
        id: "deb3-03-s4",
        label: "Speech Order",
        situation:
          "You're mapping the per-side speech sequence of a Public Forum round, interleaved with crossfires.",
        prompt: "Which is the correct PF speech order for each side?",
        options: [
          "Constructive → Rebuttal → Summary → Final Focus",
          "AC → NC → 1AR → NR → 2AR",
          "1AC → 1NC → 2AC → 2NC",
          "Authorship → alternating affirmative/negative speeches",
        ],
        correctIndex: 0,
        explanation:
          "Each PF side gives a Constructive, a Rebuttal, a Summary, and a Final Focus, with crossfires in between. The compact structure keeps rounds nimble and accessible.",
      },
    ],
  },

  // ─── debate-3-04: Parliamentary Debate ────────────────────────────────────────
  "debate-3-04": {
    intro:
      "Parliamentary debate tests reasoning on your feet. Identify it, then apply its roles, its Points of Information, and its limited-prep rules.",
    spots: [
      {
        id: "deb3-04-s1",
        label: "Name the Format",
        situation:
          "A Government team and an Opposition team receive a motion with only about 15 minutes to prepare and NO evidence files. During speeches, opponents stand and offer 'Point of information?'",
        prompt: "Which format is this?",
        options: [
          "Policy debate",
          "Parliamentary debate",
          "Public Forum",
          "Mock Trial",
        ],
        correctIndex: 1,
        explanation:
          "Government vs. Opposition teams, limited prep (~15–20 min), no evidence files, and Points of Information are the defining features of parliamentary debate, modeled on the House of Commons.",
      },
      {
        id: "deb3-04-s2",
        label: "Point of Information",
        situation:
          "During the Prime Minister's constructive, an Opposition debater stands and says, 'Point of information?'",
        prompt: "What may the speaker holding the floor do?",
        options: [
          "They must immediately yield the floor permanently",
          "They may accept it (and answer briefly) or decline it",
          "The round ends and the Opposition has objected",
          "Nothing — POIs are forbidden in parliamentary debate",
        ],
        correctIndex: 1,
        explanation:
          "A POI is a brief question or challenge offered during an opponent's speech; the speaker may accept (and answer crisply) or decline. Taking one or two shows command; declining all of them can look evasive.",
      },
      {
        id: "deb3-04-s3",
        label: "Who Opens",
        situation:
          "The Government side speaks first and must define the motion before building its case.",
        prompt: "Who delivers that opening Government speech?",
        options: [
          "The Member of Government",
          "The Leader of Opposition",
          "The Prime Minister",
          "The Presiding Officer",
        ],
        correctIndex: 2,
        explanation:
          "The Prime Minister defines the motion, opens the case, and later closes the round; the Member of Government extends it. On the other bench, the Leader of Opposition responds and a Member of Opposition extends.",
      },
      {
        id: "deb3-04-s4",
        label: "Protected Time",
        situation:
          "The Opposition tries to offer Points of Information during the first minute of the Prime Minister's speech, and again during the final minute.",
        prompt: "Why can't they?",
        options: [
          "The opening and closing minutes of a speech are 'protected' from POIs",
          "POIs are only allowed during rebuttals",
          "Only the judge is permitted to interrupt a speech",
          "The Prime Minister waived all POIs in advance",
        ],
        correctIndex: 0,
        explanation:
          "POIs may be offered only during the unprotected middle of constructive speeches. The opening and closing minutes are protected so the speaker can set up and conclude without interruption.",
      },
    ],
  },

  // ─── debate-3-05: British Parliamentary (Worlds) ──────────────────────────────
  "debate-3-05": {
    intro:
      "British Parliamentary puts four teams in one room. Identify it, count its speakers, and master the extension that wins the closing half.",
    spots: [
      {
        id: "deb3-05-s1",
        label: "Name the Format",
        situation:
          "FOUR two-person teams share a single round — two on the Proposition side and two on the Opposition side — and the judges rank all four teams from 1st to 4th. It is the format of the World Universities Debating Championship.",
        prompt: "Which format is this?",
        options: [
          "British Parliamentary (Worlds)",
          "Policy debate",
          "World Schools Debate",
          "Public Forum",
        ],
        correctIndex: 0,
        explanation:
          "Four two-person teams in one room with a 1st-to-4th ranking, used at WUDC, is British Parliamentary — debate's closest thing to a global standard.",
      },
      {
        id: "deb3-05-s2",
        label: "Count the Room",
        situation:
          "Four teams of two debate one motion, split into Opening and Closing halves on each side.",
        prompt: "How many speakers are there, and how does the judge score?",
        options: [
          "Four speakers; the judge simply picks a winner",
          "Eight speakers; the judge RANKS all four teams 1st through 4th",
          "Six speakers; the judge assigns style points only",
          "Two speakers; the round is decided by a coin flip",
        ],
        correctIndex: 1,
        explanation:
          "Four teams of two = eight speakers, and judges rank all four teams 1st–4th. You must beat the other side AND outperform the team sharing your own bench.",
      },
      {
        id: "deb3-05-s3",
        label: "The Extension",
        situation:
          "A Closing Government team is up. To rank above their own Opening Government allies, they must contribute something the opening team did not say.",
        prompt: "What is this fresh, substantive new contribution called?",
        options: [
          "A counterplan",
          "An extension",
          "A reply speech",
          "An objection",
        ],
        correctIndex: 1,
        explanation:
          "A closing team must EXTEND the debate — a new argument, deeper analysis, or new impacts that advance its side beyond the opening team. Merely 'mirroring' the opening allies cannot rank above them.",
      },
      {
        id: "deb3-05-s4",
        label: "Whip Speeches",
        situation:
          "The final two speeches of a BP round are the Government Whip and the Opposition Whip.",
        prompt: "What do the whip speeches generally do?",
        options: [
          "Introduce brand-new arguments for the first time",
          "Summarize and crystallize their side's case — no brand-new arguments",
          "Cross-examine the judging panel",
          "Define the motion for the round",
        ],
        correctIndex: 1,
        explanation:
          "The whip speeches (the last two) summarize and crystallize their side — especially their own team's contribution — and generally cannot introduce brand-new arguments.",
      },
    ],
  },

  // ─── debate-3-06: World Schools Debate ────────────────────────────────────────
  "debate-3-06": {
    intro:
      "World Schools blends research and improvisation and judges three pillars at once. Identify it, then apply its rubric and its signature reply speech.",
    spots: [
      {
        id: "deb3-06-s1",
        label: "Name the Format",
        situation:
          "Two THREE-person teams debate a mix of prepared and impromptu 'This House would…' motions, and every speech is scored on what you say, how you say it, and how well you played the round.",
        prompt: "Which format is this?",
        options: [
          "British Parliamentary",
          "World Schools Debate",
          "Lincoln-Douglas",
          "Congressional Debate",
        ],
        correctIndex: 1,
        explanation:
          "Two three-person teams, a blend of prepared and impromptu motions, and explicit three-pillar judging are the hallmarks of World Schools Debate, the international high-school bridge format.",
      },
      {
        id: "deb3-06-s2",
        label: "The Three Pillars",
        situation:
          "One debater gives a beautifully delivered speech built on weak arguments; another gives brilliant arguments delivered poorly. Both lose marks.",
        prompt: "On which three pillars is every WSD speech judged?",
        options: [
          "Significance, inherency, and solvency",
          "Style, content, and strategy",
          "Value, criterion, and framework",
          "Speed, evidence, and coverage",
        ],
        correctIndex: 1,
        explanation:
          "WSD scores every speech on Style (delivery), Content (argument quality), and Strategy (structure and responsiveness). You can't win on charisma alone or on substance alone — the rubric rewards the well-rounded debater.",
      },
      {
        id: "deb3-06-s3",
        label: "The Reply Speech",
        situation:
          "After all the constructive and rebuttal speeches, each side delivers a short, openly biased overview of why their side won — like a lawyer's closing argument.",
        prompt: "Who is allowed to give this reply speech?",
        options: [
          "The third speaker only",
          "The first or second speaker — never the third",
          "Any teammate the captain chooses",
          "A coach from the sideline",
        ],
        correctIndex: 1,
        explanation:
          "The reply speech is WSD's signature close: a comparative, biased overview given by the FIRST or SECOND speaker — never the third — telling the judges why their side won the key clashes.",
      },
      {
        id: "deb3-06-s4",
        label: "Prep Type",
        situation:
          "One motion was announced a week ahead, allowing full research. Another is handed out with about an hour of prep and no internet access.",
        prompt: "What does this reflect about World Schools?",
        options: [
          "WSD uses only impromptu motions",
          "WSD blends PREPARED (researched) and IMPROMPTU motions, deliberately testing both skill sets",
          "WSD bans research entirely",
          "WSD topics last the whole year like Policy",
        ],
        correctIndex: 1,
        explanation:
          "WSD mixes prepared motions (announced in advance, allowing research) with impromptu motions (about an hour of prep, no internet), so it tests both deep preparation and on-your-feet reasoning.",
      },
    ],
  },

  // ─── debate-3-07: Congressional Debate ────────────────────────────────────────
  "debate-3-07": {
    intro:
      "Congress turns the room into a legislature. Identify it, then apply its speech cycle, the Presiding Officer's job, and the strategy of when to speak.",
    spots: [
      {
        id: "deb3-07-s1",
        label: "Name the Format",
        situation:
          "A chamber of about 20 students, each acting as a legislator, works through a docket of bills and resolutions. They speak for or against each bill, are ranked individually, and run the room under Robert's Rules of Order.",
        prompt: "Which format is this?",
        options: [
          "Public Forum",
          "Congressional Debate",
          "British Parliamentary",
          "Moot Court",
        ],
        correctIndex: 1,
        explanation:
          "A many-competitor chamber debating a docket of bills as legislators, ranked individually, run under parliamentary procedure, is Congressional Debate — a simulation of the U.S. legislature.",
      },
      {
        id: "deb3-07-s2",
        label: "The First Speech",
        situation:
          "A new bill comes up on the docket. The very first speech introduces the bill and is purely constructive, building the case for it.",
        prompt: "What is this opening speech called?",
        options: [
          "The reply speech",
          "The authorship (or sponsorship) speech",
          "The 1AC",
          "The whip speech",
        ],
        correctIndex: 1,
        explanation:
          "The first speech on a bill is the authorship/sponsorship speech — purely constructive, introducing the legislation. Every later speech must engage the arguments already made.",
      },
      {
        id: "deb3-07-s3",
        label: "The Presiding Officer",
        situation:
          "A student runs the chamber — recognizing speakers, conducting motions and votes, and timing speeches — and is scored on doing it fairly and efficiently.",
        prompt: "How does a good Presiding Officer choose who speaks so everyone gets opportunities?",
        options: [
          "By a precedence/recency system",
          "Strict alphabetical order",
          "A new random draw each time",
          "Whoever in the chamber shouts the loudest",
        ],
        correctIndex: 0,
        explanation:
          "The Presiding Officer recognizes speakers using a precedence/recency system so opportunities are distributed fairly. The PO role is itself competitive — a skilled, fair PO can rank highly.",
      },
      {
        id: "deb3-07-s4",
        label: "Strategic Timing",
        situation:
          "You're the fourth person to speak on the affirmative side of a bill, and you plan to deliver essentially the same canned speech the first speaker already gave.",
        prompt: "What's wrong with that plan?",
        options: [
          "Nothing — repeating earlier points is rewarded in Congress",
          "Later speeches must refute prior speakers and add NEW clash; rehashing an earlier speech is penalized",
          "Only the Presiding Officer is permitted to speak late in the cycle",
          "Late speeches in Congress are not scored at all",
        ],
        correctIndex: 1,
        explanation:
          "Early speeches frame the debate, but later speeches are rewarded for refuting prior speakers and advancing new clash. Repeating a speech already given is penalized, so reading the chamber for fresh ground is essential.",
      },
    ],
  },

  // ─── debate-3-08: Mock Trial and Moot Court ───────────────────────────────────
  "debate-3-08": {
    intro:
      "Mock trial and moot court are debate in legal dress. Tell them apart, then apply the rules of evidence, examination types, and appellate argument.",
    spots: [
      {
        id: "deb3-08-s1",
        label: "Trial or Appeal?",
        situation:
          "Students play attorneys and witnesses in a simulated JURY TRIAL, delivering opening statements, examining witnesses, and giving closing arguments from a fixed case packet.",
        prompt: "Which legal-advocacy format is this?",
        options: [
          "Moot court",
          "Mock trial",
          "Congressional Debate",
          "Extemporaneous speaking",
        ],
        correctIndex: 1,
        explanation:
          "Witnesses, a jury trial, and attorney roles make this mock trial. Moot court, by contrast, simulates an APPELLATE argument with no witnesses or jury — just points of law before judges.",
      },
      {
        id: "deb3-08-s2",
        label: "Examination Type",
        situation:
          "Your own friendly witness is on the stand, and you want them to tell their helpful story in their own words.",
        prompt: "Which examination and question style is correct?",
        options: [
          "Direct examination using open-ended questions",
          "Cross-examination using tight leading questions",
          "A closing argument",
          "An objection for hearsay",
        ],
        correctIndex: 0,
        explanation:
          "You question YOUR witness on direct examination with open-ended questions that let them tell the story. Leading questions are the tool of CROSS-examination, used to control and damage the opponent's witnesses.",
      },
      {
        id: "deb3-08-s3",
        label: "The Objection",
        situation:
          "Opposing counsel asks a witness to repeat what some other person said out of court, offered to prove that what was said is true.",
        prompt: "What is the proper objection?",
        options: [
          "Objection — leading the witness",
          "Objection — hearsay",
          "Objection — relevance",
          "No objection; the question is perfectly proper",
        ],
        correctIndex: 1,
        explanation:
          "An out-of-court statement offered for its truth is hearsay. In mock trial you must spot improper questions and object in real time under the rules of evidence; the judge rules on the spot.",
      },
      {
        id: "deb3-08-s4",
        label: "Moot Court",
        situation:
          "Students argue points of law before a panel of judges, with no witnesses or jury, fielding rapid, often hostile questions from a 'hot bench.'",
        prompt: "What bounds their argument?",
        options: [
          "Whatever simply seems fair to the audience",
          "Precedent and the standard of review — they must argue what the law REQUIRES, not just what's fair",
          "A monthly current-events topic",
          "The number of evidence cards each side reads",
        ],
        correctIndex: 1,
        explanation:
          "Moot court is bound by precedent and the standard of review: you argue what the law requires, answer the bench's hypotheticals directly, then pivot back — never dodging, never losing composure.",
      },
    ],
  },

  // ─── debate-3-09: Extemporaneous and Impromptu Speaking ───────────────────────
  "debate-3-09": {
    intro:
      "Sometimes you draw a question and build a speech alone. Identify these solo events and apply their prep rules and the cardinal craft of each.",
    spots: [
      {
        id: "deb3-09-s1",
        label: "Which Event?",
        situation:
          "You draw a question about current events, get roughly 30 minutes to prepare using a limited file of articles, and deliver a structured 7-minute speech alone.",
        prompt: "Which solo speech event is this?",
        options: [
          "Impromptu speaking",
          "Extemporaneous (extemp) speaking",
          "Public Forum",
          "Congressional Debate",
        ],
        correctIndex: 1,
        explanation:
          "A current-events question, about 30 minutes of prep with an article file, and a ~7-minute speech is extemporaneous speaking — debate's research-and-analysis muscle isolated.",
      },
      {
        id: "deb3-09-s2",
        label: "Impromptu Prep",
        situation:
          "A competitor draws a single quotation and must begin speaking very soon after.",
        prompt: "About how much prep is there, and may they research?",
        options: [
          "About 30 minutes, with a file of articles to draw on",
          "Only about 1–2 minutes, with NO research at all",
          "A full hour, with no internet access",
          "No prep whatsoever — they must speak instantly",
        ],
        correctIndex: 1,
        explanation:
          "Impromptu gives only a minute or two of prep and no research. It tests pure spontaneity: instantly generate a thesis, pick two or three supporting examples, and deliver a coherent speech from your own knowledge.",
      },
      {
        id: "deb3-09-s3",
        label: "The Cardinal Rule",
        situation:
          "In extemp you draw 'Will the EU's new policy strengthen the euro?' and you're tempted to give a polished, general speech about the EU economy instead.",
        prompt: "What must you do to score well?",
        options: [
          "Answer the EXACT question drawn — don't drift off it",
          "Avoid committing to any position",
          "Speak for as long as you possibly can",
          "Read your evidence at 300 words per minute",
        ],
        correctIndex: 0,
        explanation:
          "The discipline of extemp is answering the precise question asked. A brilliant speech that drifts off the actual question is penalized, just as a debate answer that misses the actual argument floats free of the flow.",
      },
      {
        id: "deb3-09-s4",
        label: "The Core Skill",
        situation:
          "With only about a minute of impromptu prep left, a competitor freezes, searching for the perfect idea.",
        prompt: "What skill does impromptu most reward?",
        options: [
          "Decisiveness — commit fast to a workable thesis and structure rather than freezing",
          "Memorizing stacks of evidence cards",
          "Partner coordination and signals",
          "Mastery of parliamentary motions",
        ],
        correctIndex: 0,
        explanation:
          "Impromptu rewards decisiveness: commit quickly to a workable interpretation and structure instead of chasing the perfect idea. That instinct is exactly what a debater needs when a round suddenly goes off-script.",
      },
    ],
  },

  // ─── debate-3-10: Choosing Your Format ────────────────────────────────────────
  "debate-3-10": {
    intro:
      "There's no single best format — only the best fit. Match strengths to formats, weigh the logistics that often decide, and remember the skills that transfer everywhere.",
    spots: [
      {
        id: "deb3-10-s1",
        label: "Match the Strength",
        situation:
          "A student loves deep research and technical, evidence-heavy argument, and wants to dig into one topic for an entire year.",
        prompt: "Which format fits best?",
        options: [
          "Impromptu speaking",
          "Policy debate (Cross-Examination)",
          "World Schools Debate",
          "Lincoln-Douglas",
        ],
        correctIndex: 1,
        explanation:
          "A single year-long resolution, huge evidence files, and technical line-by-line make Policy (CX) the natural home for a deep-research, fast-processing student.",
      },
      {
        id: "deb3-10-s2",
        label: "Match the Strength",
        situation:
          "A student loves moral philosophy, prefers competing solo rather than with a partner, and is drawn to questions of justice and ethics over policy mechanics.",
        prompt: "Which format fits best?",
        options: [
          "Lincoln-Douglas",
          "Policy debate",
          "Congressional Debate",
          "Public Forum",
        ],
        correctIndex: 0,
        explanation:
          "One-on-one, value-resolution-based, and built on moral-philosophy frameworks (value/criterion), Lincoln-Douglas is the format for a solo competitor drawn to ethics and justice.",
      },
      {
        id: "deb3-10-s3",
        label: "Logistics Decide",
        situation:
          "A student's strengths point toward Policy, but their school only fields Public Forum and Congress teams, and no nearby tournaments run Policy.",
        prompt: "What is the most important practical factor here?",
        options: [
          "Ignore availability and demand the school start a Policy team",
          "Availability — what your program and circuit actually offer often decides the choice",
          "Only long-term career goals should matter",
          "Pick whichever format has the shortest speeches",
        ],
        correctIndex: 1,
        explanation:
          "Fit matters, but logistics often decide. Availability — what your program and local circuit actually offer — frequently outweighs the ideal match, alongside goals, partner preference, and time commitment.",
      },
      {
        id: "deb3-10-s4",
        label: "The Universal Core",
        situation:
          "Two debaters argue over which single format builds the 'real' skills and whether switching formats means starting over.",
        prompt: "What is true about the core skills across formats?",
        options: [
          "Each format's skills are useless in any other format",
          "Claim-warrant-impact, flowing, refutation, weighing, cross-ex, evidence, and delivery transfer to ALL formats",
          "Only Policy teaches genuinely transferable skills",
          "Skills never carry between solo and team formats",
        ],
        correctIndex: 1,
        explanation:
          "The universal core — claim-warrant-impact, flowing, refutation, weighing, cross-examination, evidence, and delivery — transfers across every format. The format is the vehicle; the skill is the destination.",
      },
    ],
  },
};
