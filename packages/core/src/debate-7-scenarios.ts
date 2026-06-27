import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the debate epoch "Competitive & Professional
// Mastery." Each spot is a deterministic, skill-based competitive decision — how
// to read a ballot/RFD, adapt to a judge, run or answer an advanced argument,
// navigate a tournament, or choose the right credential/career path. The correct
// line is the one taught in that stage, never luck. correctIndex and explanation
// are stripped server-side before reaching the client. No hand/board/pot/toCall.
export const debate7Scenarios: Record<string, ScenarioConfig> = {
  "debate-7-01": {
    intro: "At the circuit level you don't just debate the opponent — you debate the judge's worldview. Read the paradigm and earn the ballot.",
    spots: [
      {
        id: "deb7-01-s1", label: "Pre-Round Prep",
        situation: "You have ten minutes before a circuit round. Your case is ready, and the judge has a detailed paradigm posted on Tabroom that you haven't read.",
        prompt: "What's the highest-value use of these ten minutes?",
        options: [
          "Re-read your own case one more time",
          "Read the judge's paradigm — it tells you what they value, what they'll vote on, their speed tolerance and pet peeves, i.e. how to win this ballot",
          "Skip the paradigm; all judges decide the same way",
          "Time how fast you can spread your first speech",
        ],
        correctIndex: 1,
        explanation: "A paradigm is the judge's published statement of how they decide. Reading it before a round is as important as case prep, because the same speech wins before one judge and loses before another. It tells you which arguments to run, how fast to speak, and how to weigh — a researchable edge you forfeit if you skip it.",
      },
      {
        id: "deb7-01-s2", label: "Policymaker Judge",
        situation: "The paradigm reads: 'I evaluate the round like a policymaker — show me the plan produces net benefits that outweigh the disadvantages.'",
        prompt: "How should you debate this judge?",
        options: [
          "Run dense procedural theory and ignore the impacts",
          "Spread as fast as possible regardless of content",
          "Frame the round as a real policy decision — weigh net benefits against the disadvantages with explicit cost-benefit comparison",
          "Make only abstract philosophical arguments",
        ],
        correctIndex: 2,
        explanation: "A policymaker weighs the round like a real policy choice, so you frame and weigh accordingly: emphasize the plan's net benefits, engage the disadvantages head-on, and give strong cost-benefit weighing. Matching your argument selection and weighing to the judge's stated type is exactly the adaptation paradigms enable.",
      },
      {
        id: "deb7-01-s3", label: "Binding Instructions",
        situation: "A paradigm states plainly: 'I will not vote on this type of theory argument, and excessive spreading will lower your speaker points.' You have a theory shell ready.",
        prompt: "What's the disciplined call?",
        options: [
          "Drop the theory and debate substance at a clear pace — explicit paradigm instructions are effectively binding",
          "Run the theory anyway; the judge will have to vote on it",
          "Spread even faster to overwhelm the opponent",
          "Run the theory but apologize for it first",
        ],
        correctIndex: 0,
        explanation: "Ignoring explicit paradigm instructions is a self-inflicted loss. An argument the judge won't vote on can't win the round, and spreading against a stated preference needlessly bleeds speaker points. The judge holds the ballot; adapt to what they'll reward.",
      },
      {
        id: "deb7-01-s4", label: "No Written Paradigm",
        situation: "A community volunteer is judging and has no paradigm posted. From their role you infer they're a lay judge.",
        prompt: "How do you adapt?",
        options: [
          "Use maximum speed and technical jargon to look impressive",
          "Run kritiks and dense theory to test them",
          "Refuse to debate until they post a paradigm",
          "Prioritize clarity, persuasion, accessible arguments, vivid stakes, and explicit plain-language weighing",
        ],
        correctIndex: 3,
        explanation: "Absent a written paradigm you infer the type from the judge's role. A lay judge decides on clarity, persuasion, and real-world sense — so slow down, drop jargon, paint vivid stakes, and weigh in plain language. You adapt presentation and strategy, never your honesty or substance.",
      },
    ],
  },

  "debate-7-02": {
    intro: "Sometimes the debate isn't about the topic — it's about whether the other side is playing fairly. Navigate the procedural layer.",
    spots: [
      {
        id: "deb7-02-s1", label: "Spot the T",
        situation: "The resolution is about federal education policy, but the Affirmative's plan is actually about an unrelated environmental issue outside any reasonable reading of the topic.",
        prompt: "What's the right Negative procedural?",
        options: [
          "Run a kritik of education",
          "Topicality — argue the plan isn't within the resolution, so it loses for being untopical regardless of substance",
          "Just run a disadvantage about the environment",
          "Nothing — any plan the Aff likes is allowed",
        ],
        correctIndex: 1,
        explanation: "The Affirmative must defend the resolution as written. A plan outside any reasonable interpretation is untopical, so the Negative runs topicality: interpretation, violation, standards (fairness/education), and a voter. T polices the requirement that both sides debate the actual resolution.",
      },
      {
        id: "deb7-02-s2", label: "Complete the Shell",
        situation: "Your partner wants to run theory but only plans to assert 'their practice is unfair,' with no interpretation, no explanation of why the standard is good, and no voter.",
        prompt: "What must you add for it to be a real argument?",
        options: [
          "Nothing — asserting unfairness is enough",
          "Just say it louder and faster",
          "A second, unrelated theory argument",
          "The full structure: interpretation, violation, standards (fairness/education), and a voter (why it decides the round)",
        ],
        correctIndex: 3,
        explanation: "A bare 'that's unfair' isn't a procedural. Theory and topicality need four parts — interpretation, violation, standards, and a voter — so the judge has something to evaluate and the opponent something to engage. The structure is what turns a complaint into a winnable argument.",
      },
      {
        id: "deb7-02-s3", label: "Pick the Standard",
        situation: "You and the opponent argue competing interpretations of the resolution, and the judge has to decide which interpretation to prefer.",
        prompt: "What standards should you ground your interpretation in?",
        options: [
          "Fairness (does it give both sides equitable ground?) and education (does it promote good debate?)",
          "Whichever interpretation has more words",
          "Whoever spoke louder in the last speech",
          "The interpretation that helps only your side",
        ],
        correctIndex: 0,
        explanation: "Procedural interpretations are justified almost entirely by fairness (equitable ground for both sides) and education (promotes good debate). Defend yours, and attack theirs, on those two grounds — e.g., 'their interpretation leaves the Negative no ground, which is unfair and uneducational.'",
      },
      {
        id: "deb7-02-s4", label: "Read the Room",
        situation: "You're about to run a complex theory argument with no genuine abuse to point to. The judge's paradigm says: 'I strongly dislike theory and rarely vote on it; I want substantive debate.'",
        prompt: "What's the smart decision?",
        options: [
          "Run the theory anyway — theory always wins",
          "Spread the theory faster so the opponent can't answer it",
          "Lean toward substance here — this judge disfavors theory, there's no real abuse, so the procedural likely wastes time and annoys them",
          "Theory is illegal and can never be run",
        ],
        correctIndex: 2,
        explanation: "Procedurals are double-edged and judge-dependent. With no genuine abuse and a paradigm that disfavors theory, running it costs time, the ballot, and credibility. Knowing when NOT to run theory is as important as knowing how — frivolous theory reads as evasive.",
      },
    ],
  },

  "debate-7-03": {
    intro: "The kritik doesn't argue your plan is wrong — it argues the assumptions beneath your whole way of thinking are the problem. Run it, and answer it.",
    spots: [
      {
        id: "deb7-03-s1", label: "Name the Argument",
        situation: "Instead of attacking the plan's workability, the Negative argues that the Affirmative's entire security-based framing reproduces harmful threat-construction the judge should refuse to endorse.",
        prompt: "What kind of argument is this?",
        options: [
          "A topicality argument",
          "A simple solvency press",
          "A kritik — it challenges the assumptions and ideology beneath the case, not the plan on its own terms",
          "A disadvantage with a security impact",
        ],
        correctIndex: 2,
        explanation: "This is a kritik (K). Rather than engaging consequences, it challenges the underlying assumptions and framing — here, that security framing reproduces harmful threat-construction. Kritiks operate at the level of ideology and ask the judge to vote against endorsing a flawed way of thinking.",
      },
      {
        id: "deb7-03-s2", label: "Build It Right",
        situation: "You want to run a capitalism kritik but your block only says 'capitalism is bad,' with no tie to the opponent's case, no alternative, and no framework.",
        prompt: "What's missing?",
        options: [
          "The link (how their case relies on the criticized system), the alternative (what the judge endorses instead), and the framework — plus a developed impact",
          "Nothing — 'capitalism is bad' is a complete K",
          "Only a louder delivery",
          "A topicality violation",
        ],
        correctIndex: 0,
        explanation: "'Capitalism is bad' alone isn't a kritik. A complete K needs a link (how the case reproduces the criticized assumption), an impact (why that's harmful), an alternative (what voting K endorses), and a framework (why to evaluate at the level of assumptions). Without link, alt, and framework the judge has no actionable reason to vote on it.",
      },
      {
        id: "deb7-03-s3", label: "Answer the K",
        situation: "An opponent runs a kritik. Your plan has large, concrete real-world benefits, and the judge's paradigm says they weigh real-world impacts.",
        prompt: "What's often the decisive answer here?",
        options: [
          "Concede the kritik entirely",
          "Win the framework — argue the judge weighs real-world consequences, so the plan's concrete benefits outweigh the K's abstract impact",
          "Ignore the kritik and hope it disappears",
          "Run a louder kritik back at them",
        ],
        correctIndex: 1,
        explanation: "Winning the framework is frequently the decisive answer, especially before a consequences-minded judge. If you win that the round is evaluated on real-world impacts, the plan's tangible benefits outweigh the K's abstract impact. Layer it with contesting the link, defending your assumptions, and attacking the alternative.",
      },
      {
        id: "deb7-03-s4", label: "Whether to Run It",
        situation: "You have a strong, well-researched kritik. The judge is a lay community volunteer whose paradigm asks for clear, accessible, real-world debate.",
        prompt: "What's the wise decision?",
        options: [
          "Run the K — philosophical depth always impresses",
          "Run the K but read it twice as fast",
          "Refuse to debate before a lay judge",
          "Lean toward accessible substantive debate — kritiks are highly judge-dependent and this judge likely won't reward an obscure critique",
        ],
        correctIndex: 3,
        explanation: "Kritiks are powerful but obscure and highly judge-dependent — some judges love them, others won't vote on them. Before a lay judge who wants accessible, real-world debate, an abstract K is a poor bet. The advanced competitor reads the judge and saves the K for paradigms that reward it.",
      },
    ],
  },

  "debate-7-04": {
    intro: "The most sophisticated negative strategy isn't just attacking the plan — it's offering a better alternative while proving the plan causes harm.",
    spots: [
      {
        id: "deb7-04-s1", label: "Attack the DA",
        situation: "The Negative runs a disadvantage with a scary impact (economic collapse). You show the economy is already declining for unrelated reasons, with or without the plan.",
        prompt: "Which element of the DA have you defeated?",
        options: [
          "Uniqueness — if the harm is already happening regardless of the plan, the plan isn't what triggers it, which collapses the DA no matter how big the impact",
          "The impact",
          "The counterplan",
          "The framework",
        ],
        correctIndex: 0,
        explanation: "You've attacked uniqueness. A DA requires the impact not be occurring now, so the plan is what triggers it. If the harm is happening anyway, it isn't unique to the plan — and a missing element collapses the DA regardless of how large the impact sounds.",
      },
      {
        id: "deb7-04-s2", label: "The Power Combo",
        situation: "The Negative argues: 'Our counterplan solves the same harms, but the states do it instead of the federal government — so it avoids the federalism disadvantage the Affirmative's federal plan triggers.'",
        prompt: "What classic strategy is this?",
        options: [
          "A topicality argument",
          "A kritik of federalism",
          "The CP + DA combination — the counterplan captures the Aff's advantages while dodging a disadvantage the plan triggers, giving the benefits without the cost",
          "A simple solvency press",
        ],
        correctIndex: 2,
        explanation: "This is the classic CP + DA power combination. The counterplan captures the Affirmative's advantages while avoiding the federalism disadvantage the federal plan uniquely links to. The judge gets the benefits without the cost, making the plan unnecessary and net worse — the backbone of advanced negative strategy.",
      },
      {
        id: "deb7-04-s3", label: "Test the CP",
        situation: "The Negative runs a counterplan. You respond: 'We could just do both — the plan AND the counterplan together — so the CP isn't a reason to reject our plan.'",
        prompt: "What is this argument, and what does it test?",
        options: [
          "A disadvantage that adds offense",
          "The permutation ('perm') — it tests the CP's competitiveness; if plan and CP can be done together and solve, the CP isn't truly a reason to reject the plan",
          "A topicality violation",
          "A new advantage for the Aff",
        ],
        correctIndex: 1,
        explanation: "This is the permutation. The perm tests competitiveness — the requirement that a CP be a genuine reason to reject the plan, not just a different good idea. If you can do both and solve, the CP isn't competitive. The Negative must then show the CP is mutually exclusive or net-better.",
      },
      {
        id: "deb7-04-s4", label: "Where to Invest",
        situation: "As the Negative with limited speech time, you must choose how to spend it: scattered weak attacks, or a focused comparative strategy the judge can weigh.",
        prompt: "What's the strongest use of your time?",
        options: [
          "Read as many disconnected off-case positions as possible",
          "Make only a single solvency attack and move on",
          "Concede the round and save your voice for elims",
          "Build a competitive counterplan plus a linked disadvantage, then weigh the policy worlds — plan vs. counterplan-plus-status-quo",
        ],
        correctIndex: 3,
        explanation: "Policy debate is a comparison of policy worlds. A competitive CP paired with a DA the plan triggers, plus clear impact weighing (magnitude, probability, timeframe), gives the judge a clean reason the counterplan world is best. Focused, comparative offense beats a scatter of weak attacks.",
      },
    ],
  },

  "debate-7-05": {
    intro: "Winning a tournament is a different skill than winning a round — it's a campaign of preparation, stamina, adaptation, and managing the whole arc.",
    spots: [
      {
        id: "deb7-05-s1", label: "Why Prelims Matter",
        situation: "A new teammate doesn't see why they need both a strong record AND good speaker points in the preliminary rounds before any elimination brackets begin.",
        prompt: "What do prelims and speaker points actually determine?",
        options: [
          "Nothing — only elimination rounds count",
          "Prelims set your seed and whether you 'break' to elims; record and speaker points decide both, so consistency and clean performances matter even in your wins",
          "Speaker points are random and irrelevant",
          "Everyone advances regardless of how prelims go",
        ],
        correctIndex: 1,
        explanation: "Prelims are the rounds everyone debates, and they determine seeding and whether you break to elimination rounds. Your win-loss record and speaker points decide both, so you can't afford to drop winnable rounds, and speaker points can be the tiebreaker for breaking or seeding.",
      },
      {
        id: "deb7-05-s2", label: "The Mixed Panel",
        situation: "In an octofinal you face a three-judge panel: an experienced 'tech' judge, a lay community member, and a policymaker.",
        prompt: "How do you handle it?",
        options: [
          "Adapt only to the tech judge and ignore the other two",
          "Refuse to debate before a panel",
          "Be technically sound AND clear/persuasive with explicit weighing — you need a majority, so reach all three paradigms at once",
          "Assume all panels decide identically, so no adaptation is needed",
        ],
        correctIndex: 2,
        explanation: "Elim panels require a majority of judges who may hold very different paradigms. You can't tailor to just one — be rigorous for the tech judge, clear and vivid for the lay judge, and weigh the policy for the policymaker. Being both technical AND accessible, with explicit weighing, satisfies a mixed panel.",
      },
      {
        id: "deb7-05-s3", label: "After a Bad Beat",
        situation: "Early in the tournament you lose a close round you thought you'd won. You feel rattled with three prelims still to go.",
        prompt: "What's the disciplined response?",
        options: [
          "Let it shake you — one loss should end a run mentally",
          "Go argue with the judge about the decision",
          "Speak twice as fast in the next round out of frustration",
          "Reset and refocus on the next round — resilience keeps one loss from cascading across the campaign",
        ],
        correctIndex: 3,
        explanation: "A tournament is a long campaign, and a single early loss needn't end a run — but letting it rattle you into more losses does. Processing a setback quickly and refocusing on the next round is a real competitive mental skill, tied to composure. The durable competitor bounces back.",
      },
      {
        id: "deb7-05-s4", label: "Managing the Marathon",
        situation: "It's the dinner break before late elims after six prelim rounds. You're exhausted and tempted to keep prepping at full intensity until your next round.",
        prompt: "What best serves the long game?",
        options: [
          "Deliberately manage energy — eat, rest, and recover so you can peak under elimination pressure rather than collapse from fatigue",
          "Skip food and prep nonstop until the round",
          "Stay up debating teammates to stay sharp",
          "Assume fatigue never affects performance",
        ],
        correctIndex: 0,
        explanation: "Tournaments are a marathon, not a sprint. Across many rounds over one or two exhausting days, managing energy, recovering between rounds, and staying sharp late is a genuine skill. Brilliance in one round means little if followed by a fatigued collapse — the champion is the most complete, durable competitor.",
      },
    ],
  },

  "debate-7-06": {
    intro: "Debate has real, recognized credentials. The NSDA's points-and-degrees system turns years of competition into honors colleges and scholarships recognize.",
    spots: [
      {
        id: "deb7-06-s1", label: "The Currency",
        situation: "A first-year competitor wants to know how the NSDA actually tracks and rewards a speech and debate career over time.",
        prompt: "What is the NSDA's system built on?",
        options: [
          "A single end-of-career exam",
          "Merit points earned through participation and success in sanctioned competition, accumulated over a career and translated into degrees",
          "Coaches' personal opinions only",
          "Random draws at the National Tournament",
        ],
        correctIndex: 1,
        explanation: "The NSDA (founded 1925 as the National Forensic League) is the largest U.S. speech and debate honor society. Students earn merit points for participation and success in sanctioned competition; those points accumulate over a career and translate into formal degrees of distinction.",
      },
      {
        id: "deb7-06-s2", label: "The Top Rung",
        situation: "A dedicated senior has climbed the NSDA degree ladder — Merit, Honor, Excellence, Distinction, Special Distinction — and wants to reach the highest degree.",
        prompt: "What is the top degree?",
        options: [
          "Degree of Merit",
          "Degree of Excellence",
          "Academic All American",
          "Degree of Premier Distinction",
        ],
        correctIndex: 3,
        explanation: "The NSDA degree ladder rises with accumulated merit points: Merit, Honor, Excellence, Distinction, Special Distinction, and Premier Distinction at the top. Each requires progressively more points, so the higher degrees signal years of serious, successful competition.",
      },
      {
        id: "deb7-06-s3", label: "Academic All American",
        situation: "A strong competitor also carries an excellent GPA and wants the NSDA honor that recognizes combining competitive success with academics.",
        prompt: "Which honor fits, and what does it require?",
        options: [
          "Academic All American — competitive achievement (a points threshold) plus academic excellence (a high GPA) and other criteria",
          "Degree of Merit, which ignores academics",
          "The Distinguished Toastmaster award",
          "A WUDC bid",
        ],
        correctIndex: 0,
        explanation: "Academic All American recognizes students who combine competitive achievement (a points threshold) with academic excellence (a high GPA) and other criteria — exactly the dual strength colleges and scholarships value. It sits atop the point/degree system as a headline honor.",
      },
      {
        id: "deb7-06-s4", label: "Setting Goals",
        situation: "You're mapping your remaining seasons and want your round-by-round work to build into recognized, lasting accomplishment for college applications.",
        prompt: "What's the strategic way to think about it?",
        options: [
          "Only chase individual trophies; credentials don't matter to colleges",
          "Avoid the National Tournament since qualifying is just luck",
          "Set credentialed goals — reach a higher degree, earn Academic All American, qualify for NSDA Nationals — so your work becomes recognized accomplishment",
          "Ignore points entirely and hope a coach vouches for you",
        ],
        correctIndex: 2,
        explanation: "A debater's competition isn't just round-by-round — it's building a credentialed record. Understanding the points-degrees-honors system lets you set concrete goals (a degree, Academic All American, qualifying for Nationals) that translate your work into lasting recognition admissions officers and scholarship committees understand.",
      },
    ],
  },

  "debate-7-07": {
    intro: "School debate credentials run out with eligibility — but Toastmasters offers a globally recognized path to certify speaking skill for a whole lifetime.",
    spots: [
      {
        id: "deb7-07-s1", label: "After School",
        situation: "A graduating debater loves public speaking but their school competitive eligibility is ending. They want to keep developing and earning recognized credentials as an adult.",
        prompt: "Which organization is built for this?",
        options: [
          "The NSDA, which credentials adults too",
          "Toastmasters International — a global organization where adults at any age and career develop speaking and leadership and earn recognized credentials",
          "Nothing exists once school ends",
          "Only the TOC, which has age limits",
        ],
        correctIndex: 1,
        explanation: "Toastmasters International (founded 1924) is the premier lifelong credentialing path for public speaking and leadership. Where the NSDA credentials a school-age career, Toastmasters continues development into adulthood at any age and in any profession — the answer to 'what happens to these skills after school.'",
      },
      {
        id: "deb7-07-s2", label: "How Pathways Works",
        situation: "A new Toastmaster wants to understand how the current Pathways education program is structured before choosing where to start.",
        prompt: "How does Pathways work?",
        options: [
          "It's a single one-time test",
          "It only involves listening, never speaking",
          "There are no levels or projects — just attendance",
          "You choose a specialized 'path' aligned to your goals and progress through five levels by completing projects (speeches and roles with feedback)",
        ],
        correctIndex: 3,
        explanation: "Pathways is built around choice and progression: members pick a specialized path (persuasive influence, presentation mastery, leadership, etc.) and advance through five levels by completing projects — delivering speeches and taking on roles, with peer feedback. Each level is recognized, and finishing a full path is itself a credential.",
      },
      {
        id: "deb7-07-s3", label: "The Apex Credential",
        situation: "An experienced member has completed extensive communication and leadership requirements over several years and wants the organization's highest recognition.",
        prompt: "What is it?",
        options: [
          "Competent Communicator, the entry-level award",
          "Distinguished Toastmaster (DTM) — the highest award, earned through extensive communication and leadership requirements; a globally recognized mark",
          "There is no top award",
          "A single completed speech",
        ],
        correctIndex: 1,
        explanation: "The Distinguished Toastmaster (DTM) is the highest award Toastmasters confers, earned by completing extensive communication and leadership requirements over a sustained period. It's a globally recognized mark of accomplished speaking and leadership; Competent Communicator is an entry-level legacy award, not the top.",
      },
      {
        id: "deb7-07-s4", label: "The Legacy Ladder",
        situation: "An older mentor mentions earning their 'Competent Communicator,' then 'Advanced Communicator Bronze, Silver, and Gold,' before becoming a DTM.",
        prompt: "What are they describing?",
        options: [
          "Made-up awards that don't exist",
          "The NSDA degree ladder",
          "The legacy Toastmasters ladder — Competent Communicator to Advanced Communicator Bronze/Silver/Gold, plus a leadership track, leading to DTM — still held alongside current Pathways levels",
          "Academic All American levels",
        ],
        correctIndex: 2,
        explanation: "That's the legacy Toastmasters ladder: Competent Communicator, then Advanced Communicator Bronze/Silver/Gold, with a parallel leadership track, all leading toward the DTM. It's still held and referenced by many members, while newcomers progress through the current Pathways five-level structure — same value either way.",
      },
    ],
  },

  "debate-7-08": {
    intro: "Beyond high school lies a whole landscape of collegiate and international debate — its own championships, governing bodies, and the most prestigious honors.",
    spots: [
      {
        id: "deb7-08-s1", label: "Collegiate Policy",
        situation: "A graduating policy debater wants to keep competing in policy in college and asks which national championships and bodies govern that format.",
        prompt: "Which bodies run collegiate policy debate?",
        options: [
          "NPDA and APDA",
          "The NDT (National Debate Tournament) and CEDA (Cross Examination Debate Association)",
          "WUDC and WSDC",
          "Toastmasters and the NSDA",
        ],
        correctIndex: 1,
        explanation: "At the U.S. collegiate level the NDT and CEDA run policy debate; NPDA/APDA govern parliamentary, the NFA runs NFA-LD and individual events, and the AFA oversees national individual events. Winning or placing at these championships is the collegiate policy credential.",
      },
      {
        id: "deb7-08-s2", label: "The Global Pinnacle",
        situation: "A university debater on the British Parliamentary circuit wants to compete for the highest honor in world university debate.",
        prompt: "Which championship is that?",
        options: [
          "WSDC, the high school world championship",
          "The Tournament of Champions at Kentucky",
          "The AFA-NIET",
          "WUDC (World Universities Debating Championship) — the global university championship in British Parliamentary",
        ],
        correctIndex: 3,
        explanation: "WUDC is the World Universities Debating Championship, the global university pinnacle in British Parliamentary; reaching late elims or winning is among the highest honors in the activity. WSDC is the equivalent pinnacle for high school students in the World Schools format.",
      },
      {
        id: "deb7-08-s3", label: "Earning a TOC Bid",
        situation: "A high school competitor wants to qualify for the Tournament of Champions but isn't sure how invitations are earned.",
        prompt: "How do you qualify for the TOC?",
        options: [
          "Earn 'bids' by reaching specified late elimination rounds at designated qualifying tournaments, then accumulate the required number (typically two)",
          "Pay an entry fee and register online",
          "Win a single local tournament",
          "Be nominated by any coach with no competitive requirement",
        ],
        correctIndex: 0,
        explanation: "The TOC, held at the University of Kentucky, is invitation-only via a bid system: designated tournaments award bids to competitors who reach specified late elimination rounds, and accumulating the required number (typically two) earns an invitation. That demands sustained elite performance across the season, which is why a TOC qualification is so prestigious.",
      },
      {
        id: "deb7-08-s4", label: "Mapping the Ladder",
        situation: "An ambitious sophomore wants a realistic multi-year map from school competition toward national and global recognition.",
        prompt: "Which path best reflects the actual ladder?",
        options: [
          "Skip school debate and enter WUDC directly as a freshman",
          "Only ever compete locally; national and world circuits aren't reachable",
          "Build a record in school, earn TOC bids and qualify for NSDA Nationals, then continue into a college program toward NDT/CEDA/NPDA/AFA and the WUDC/WSDC circuit",
          "Win one tournament and stop, since trophies are all that matter",
        ],
        correctIndex: 2,
        explanation: "The realistic ladder runs from building skill and a record in school, to earning TOC bids and qualifying for NSDA Nationals, to a collegiate program competing toward the NDT/CEDA/NPDA/AFA championships and the international WUDC/WSDC circuit — increasingly prestigious arenas and credentials, often with scholarship pathways along the way.",
      },
    ],
  },

  "debate-7-09": {
    intro: "You never understand debate as deeply as when you judge it fairly or teach it clearly. Step to the other side of the ballot.",
    spots: [
      {
        id: "deb7-09-s1", label: "Write the RFD",
        situation: "You're judging a close round and must deliver your reason for decision (RFD) so the debaters learn from it.",
        prompt: "What makes a strong RFD?",
        options: [
          "Just announce the winner with no explanation",
          "Walk through the key voting issues, explain what each side won and dropped, and justify the decision on the arguments — not personal preference",
          "Decide based on which debater you personally liked more",
          "Refuse to give reasons so no one can disagree",
        ],
        correctIndex: 1,
        explanation: "The RFD is the heart of good judging. It should identify the key voting issues, explain what each side won and dropped, and justify the decision on the arguments actually made — the mirror of good crystallization. A clear, argument-based RFD is how judging helps debaters improve.",
      },
      {
        id: "deb7-09-s2", label: "Set Aside Bias",
        situation: "While judging, you personally disagree with the position the Affirmative is defending, but they're clearly winning the arguments on the flow.",
        prompt: "How should you decide?",
        options: [
          "Vote against them because you dislike their position",
          "Flip a coin to stay neutral",
          "Vote on your own opinion of the topic regardless of the flow",
          "Set aside your personal opinion and decide on the arguments actually made and won",
        ],
        correctIndex: 3,
        explanation: "Good judging means setting aside personal bias and deciding on the arguments made and won, not on your own views about the topic. Flowing accurately and weighing fairly, then voting on the round in front of you, is the integrity at the core of judging — and it sharpens your sense of what actually wins.",
      },
      {
        id: "deb7-09-s3", label: "Why Coach",
        situation: "A strong competitor wonders whether spending time coaching novices will help or hurt their own debating.",
        prompt: "What's the real effect of coaching?",
        options: [
          "It deepens your own mastery — teaching forces you to articulate principles you used intuitively ('to teach is to learn twice')",
          "It only wastes time you could spend competing",
          "It has no effect on your own skill at all",
          "It makes you worse by revealing your secrets",
        ],
        correctIndex: 0,
        explanation: "Coaching completes the mastery arc. To teach, you must explain why each technique works, diagnose weaknesses, and model skills — forcing you to articulate principles you may have applied intuitively. 'To teach is to learn twice': coaching makes you understand the skills more deeply than competing alone did.",
      },
      {
        id: "deb7-09-s4", label: "See Both Sides",
        situation: "A competitor still in their playing years asks why they'd bother judging novice rounds now, while they're focused on winning.",
        prompt: "What's the benefit even mid-career?",
        options: [
          "There's none until after you stop competing",
          "Judging teaches you firsthand what persuades and what confuses from the decider's chair — how weighing, signposting, and clarity actually land — making you a sharper competitor now",
          "It only matters for filling tournament judge requirements",
          "It guarantees easier opponents later",
        ],
        correctIndex: 1,
        explanation: "Judging and coaching reveal debate from the other side of the ballot. Seeing what persuades and what confuses a decider — how weighing, signposting, and clarity actually land — makes you a sharper competitor immediately, not just after you stop. The complete arc runs competitor to judge to coach, each role deepening mastery.",
      },
    ],
  },

  "debate-7-10": {
    intro: "The trophies fade and the credentials get filed away — but the ability to think clearly, argue honestly, and persuade well is yours for life.",
    spots: [
      {
        id: "deb7-10-s1", label: "Where Skills Transfer",
        situation: "A debater assumes debate only prepares you to become a lawyer and nothing else.",
        prompt: "What's the fuller picture?",
        options: [
          "Debate skills only apply in law and nowhere else",
          "The skills transfer widely — law, politics, business, consulting, journalism, academia, medicine, entrepreneurship — nearly any field rewarding clear thinking and communication",
          "The skills have no use outside competition",
          "Only delivery transfers; reasoning doesn't",
        ],
        correctIndex: 1,
        explanation: "Debate famously funnels alumni into law and politics, but the skills run far wider — business, consulting, journalism, academia and science, medicine, entrepreneurship. Structured analysis, research, persuasion, and thinking on your feet are core competencies nearly every field rewards.",
      },
      {
        id: "deb7-10-s2", label: "The Real Reward",
        situation: "After a long career you've won trophies and earned NSDA degrees. A younger debater asks what the deepest reward of all this was.",
        prompt: "What's the most lasting value?",
        options: [
          "The trophies themselves, above all",
          "The specific tournament wins, which never fade",
          "A permanent capacity to think clearly, argue honestly, and persuade well — the transferable skills that outlast every trophy",
          "Nothing lasts; it was all just a game",
        ],
        correctIndex: 2,
        explanation: "The trophies and credentials are real and worth pursuing, but they're markers of something more valuable: a permanent capacity for reason and persuasion no one can take away. The deepest reward is the transferable skills — research, logic, argument, listening, persuasion, composure — that serve you for a lifetime.",
      },
      {
        id: "deb7-10-s3", label: "Disagree Well",
        situation: "In an age of polarization, someone asks what civic skill debate develops better than almost any other activity.",
        prompt: "What is it?",
        options: [
          "Winning every argument by any means",
          "Never changing your mind once you've taken a side",
          "Avoiding disagreement entirely",
          "The capacity to disagree well — argue fiercely while respecting the opponent, understand views you don't hold, and follow evidence over feeling",
        ],
        correctIndex: 3,
        explanation: "Debate's deepest value is civic: it trains the increasingly rare capacity to disagree well — to argue a position fiercely while respecting the opponent, to understand opposing views by arguing them, and to follow evidence and change your mind. In an age of polarization and misinformation, these are the skills a free society most needs.",
      },
      {
        id: "deb7-10-s4", label: "The Assigned Side",
        situation: "A novice is frustrated at being assigned to argue a side they personally disagree with and wants to know why it's worth it.",
        prompt: "What's the value of arguing the assigned side?",
        options: [
          "It builds genuine understanding of opposing views and the intellectual honesty to separate an argument's strength from your feelings about its conclusion",
          "It's pointless — only argue what you already believe",
          "It teaches you to ignore evidence that's inconvenient",
          "It's just a quirk of the rules with no real benefit",
        ],
        correctIndex: 0,
        explanation: "The assigned-sides discipline trains genuine understanding of opposing views and the honesty to follow evidence over feeling — antidotes to polarization and motivated reasoning. Learning to argue a side you don't hold, and to judge an argument's strength apart from your feelings about its conclusion, is one of debate's most valuable lifelong gifts.",
      },
    ],
  },
};
