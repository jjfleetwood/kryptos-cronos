import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the Foundations of Debate epoch.
// Each spot is a deterministic, theory-based decision — the correct line is the
// sound debate-theory choice taught in that stage, never a matter of opinion.
// correctIndex and explanation are stripped server-side before reaching the client.
export const debate1Scenarios: Record<string, ScenarioConfig> = {
  "debate-1-01": {
    intro: "Before you ever stand to speak, you have to know what a debate IS — a timed, two-sided contest on one resolution, decided by a neutral judge. Make these foundations second nature.",
    spots: [
      {
        id: "deb1-01-s1", label: "Debate or Quarrel?",
        situation: "Two students disagree about school uniforms. They each pick a side, agree to speak three minutes each in alternating turns, and ask a teacher to decide who argued better.",
        prompt: "What converts this from an ordinary argument into a debate?",
        options: [
          "A shared resolution, timed alternating speeches, and a neutral judge deciding on argument quality",
          "Both students feeling strongly about uniforms",
          "Whoever ends up speaking the loudest",
          "The freedom to change the subject when losing",
        ],
        correctIndex: 0,
        explanation: "A debate is defined by structure: one shared topic both sides must address, timed speeches that alternate, and a neutral third party who decides on argument quality — not feeling or volume. A quarrel has none of those.",
      },
      {
        id: "deb1-01-s2", label: "Who Carries Proof?",
        situation: "Resolution: 'This house would ban gas-powered cars by 2035.' The round is about to begin and you are deciding which side bears the burden of proof.",
        prompt: "Which side carries the burden of proof, and why?",
        options: [
          "The Affirmative — they seek a change, so they must give positive reasons to adopt it",
          "The Negative — they always have to disprove the plan",
          "Neither — both sides start perfectly even",
          "Whichever side the judge personally disagrees with",
        ],
        correctIndex: 0,
        explanation: "The burden of proof falls on the side seeking change. The Affirmative asks the judge to adopt the ban, so it must prove the case; the Negative begins with presumption — the default that things stay as they are absent a compelling reason.",
      },
      {
        id: "deb1-01-s3", label: "Silence on Both Sides",
        situation: "In that same round, the Affirmative gives no argument at all, and the Negative also stays silent. The judge must still render a decision.",
        prompt: "On burdens alone, who should win?",
        options: [
          "The Negative — presumption favors no change when the Affirmative fails its burden of proof",
          "The Affirmative — they proposed the more interesting idea",
          "It is a tie and must be debated again",
          "The Affirmative — they spoke first in the speaking order",
        ],
        correctIndex: 0,
        explanation: "Because the Affirmative carries the burden of proof and offered nothing, it has not met that burden. Presumption then awards the round to the Negative: silence loses for the side seeking change.",
      },
      {
        id: "deb1-01-s4", label: "The Biased Judge",
        situation: "A judge personally hates homework. The round is on abolishing homework, and the Negative (keep homework) debates far better — more evidence, clearer answers to every point.",
        prompt: "How should the judge vote?",
        options: [
          "For the Negative — judges decide on comparative persuasion in the round, not personal opinion",
          "For the Affirmative — the judge already agrees homework is bad",
          "Abstain, because the judge is biased on the topic",
          "For whichever side delivered the final speech",
        ],
        correctIndex: 0,
        explanation: "A judge decides on comparative persuasion within the round, bracketing their outside opinion. The Negative out-debated, so the Negative wins — which is exactly why a skilled debater can win a side they personally disagree with.",
      },
    ],
  },

  "debate-1-02": {
    intro: "Every word of the resolution is a promise about what you must prove. Read it first: classify the type, identify the burden, and watch the signpost words.",
    spots: [
      {
        id: "deb1-02-s1", label: "Name the Type",
        situation: "Resolution: 'The federal government should significantly increase its investment in renewable energy.' A debater opens by reciting climate-science facts but never says what the government should do or whether it is worth the cost.",
        prompt: "What type of resolution is this, and what is missing?",
        options: [
          "A policy resolution — facts alone are not enough; it needs harm, solvency, and a cost-benefit",
          "A fact resolution — citing the science fully discharges the burden",
          "A value resolution — only a moral criterion is required",
          "It has no type, so any argument is sufficient",
        ],
        correctIndex: 0,
        explanation: "'Should' plus a government actor and an action make this a policy resolution. Facts establish a harm, but a policy case also needs solvency (the plan addresses the problem) and a weighing of benefits against costs.",
      },
      {
        id: "deb1-02-s2", label: "The Missing Criterion",
        situation: "Resolution: 'A just society ought to value rehabilitation over retribution.' The Affirmative argues rehabilitation lowers reoffending but never defines what makes a society 'just.'",
        prompt: "What essential element of a value debate is missing?",
        options: [
          "A criterion — a standard defining 'just' against which 'better' is measured",
          "Nothing — lower reoffending automatically proves justice",
          "A funded government plan with implementation details",
          "A cross-examination period",
        ],
        correctIndex: 0,
        explanation: "Value resolutions turn on a criterion (value standard). The central value is 'justice'; without defining it, lower reoffending floats free — the judge has no measuring stick to call one approach more just than the other.",
      },
      {
        id: "deb1-02-s3", label: "On Balance",
        situation: "Resolution: 'On balance, social media has done more harm than good to democracy.' The Affirmative proves social media spreads some misinformation, then stops.",
        prompt: "Why is that likely insufficient given the wording?",
        options: [
          "'On balance' demands weighing harms against benefits and showing harms outweigh — not naming one harm",
          "It is fully sufficient — any single harm proves the resolution",
          "The word 'democracy' makes the topic off-limits",
          "Social-media topics cannot be debated on balance",
        ],
        correctIndex: 0,
        explanation: "'On balance' is a signpost telling you the judge weighs good against bad. Proving one harm is not enough; the Affirmative must show the harms outweigh the benefits the Negative will list — a comparative claim.",
      },
      {
        id: "deb1-02-s4", label: "The Abusive Definition",
        situation: "The resolution uses the word 'weapons.' The Affirmative defines 'weapons' so narrowly — 'only intercontinental ballistic missiles' — that the Negative has almost nothing left to contest.",
        prompt: "How should the Negative respond?",
        options: [
          "Challenge it as unreasonable and offer a fair 'reasonable person' definition that preserves debatable ground",
          "Accept it silently — the Affirmative always controls definitions",
          "Forfeit the round on principle",
          "Redefine the whole topic to something unrelated",
        ],
        correctIndex: 0,
        explanation: "Definitions must be reasonable and leave both sides fair ground. A definition engineered to gut the Negative's ground is abusive; the Negative challenges it and offers the reasonable-person interpretation. Definition debates are legitimate clash.",
      },
    ],
  },

  "debate-1-03": {
    intro: "The atom of debate is one complete argument: claim, warrant, impact. An assertion is not an argument until you add why it is true and why it matters.",
    spots: [
      {
        id: "deb1-03-s1", label: "Spot the Gap",
        situation: "A debater says, with great confidence: 'Banning single-use plastics is a terrible idea. Trust me, it's just bad policy.' Nothing else.",
        prompt: "What is missing from this statement?",
        options: [
          "The warrant and impact — there is a claim but no reason it's true and no link to why it decides the round",
          "Nothing — confident delivery is what persuades judges",
          "A louder, more forceful tone",
          "Several more claims exactly like it",
        ],
        correctIndex: 0,
        explanation: "'It's just bad policy, trust me' is a bare claim — no warrant (reason/evidence) and no impact (why it wins). Confidence fills neither gap. One warranted, impacted argument beats a dozen assertions.",
      },
      {
        id: "deb1-03-s2", label: "Finish the Argument",
        situation: "An argument reads — CLAIM: 'School start times should be later.' WARRANT: 'Teen circadian rhythms shift later, and the AAP links early starts to sleep deprivation.' IMPACT: (blank).",
        prompt: "What completes this argument?",
        options: [
          "An impact tying sleep deprivation to why the judge votes Affirmative — harms to health and learning we weigh",
          "Nothing — the warrant already proves the whole case",
          "A second, unrelated claim about cafeteria food",
          "A formal definition of the word 'school'",
        ],
        correctIndex: 0,
        explanation: "Claim and warrant are solid, but the argument stops before the 'so what?' The impact must connect sleep deprivation to the standard the round is weighed on — health, safety, learning — giving the judge a reason to vote.",
      },
      {
        id: "deb1-03-s3", label: "Pick the Valid One",
        situation: "Four statements are offered about a higher minimum wage. You must identify the one that is a genuinely complete claim-warrant-impact argument.",
        prompt: "Which option is a complete argument?",
        options: [
          "'Raising the wage cuts poverty, because higher pay buys necessities and Dube 2019 found poverty fell — so it serves the harm we weigh, vote Aff.'",
          "'Raising the wage is good. Everyone knows it.'",
          "'The minimum wage is currently $7.25 in many states.'",
          "'My opponent is wrong about wages and also spoke too fast.'",
        ],
        correctIndex: 0,
        explanation: "Only the first option has all three parts: a claim (cuts poverty), a warrant (mechanism plus cited evidence), and an impact (links to the weighing standard and the ballot). The others are an assertion, a bare fact, and an attack on delivery.",
      },
      {
        id: "deb1-03-s4", label: "Three Ways to Attack",
        situation: "Your opponent argues — CLAIM: 'Nuclear power is too dangerous.' WARRANT: 'Chernobyl and Fukushima caused disasters.' You know nuclear is among the safest sources per unit of electricity.",
        prompt: "What is the strongest refutation?",
        options: [
          "Sever the warrant: two rare, dated accidents don't represent modern safety; cite deaths-per-TWh showing nuclear is among the safest",
          "Just say 'I disagree' as loudly as possible",
          "Ignore it and make an unrelated point of your own",
          "Concede the argument entirely to seem fair",
        ],
        correctIndex: 0,
        explanation: "You can attack any argument three ways — deny the claim, sever the warrant, or minimize the impact. Here the warrant is two cherry-picked disasters; severing it with deaths-per-TWh counter-evidence is the decisive move.",
      },
    ],
  },

  "debate-1-04": {
    intro: "Evidence is borrowed credibility. Find it, cite it cleanly, and judge whether it is any good — because a confident claim on a blog loses to a modest claim on a peer-reviewed study.",
    spots: [
      {
        id: "deb1-04-s1", label: "Weigh the Sources",
        situation: "On vaccine safety, Debater A cites 'a 2023 meta-analysis in The Lancet of two million patients finding no link.' Debater B cites 'a blog post I found last night saying they're dangerous.'",
        prompt: "Whose evidence should the judge weigh more heavily?",
        options: [
          "Debater A — a recent peer-reviewed meta-analysis with a huge sample from an authoritative journal beats an anonymous blog",
          "Debater B — it sounds newer and more dramatic",
          "They are equal — both are technically 'evidence'",
          "Neither counts unless the full text is read aloud",
        ],
        correctIndex: 0,
        explanation: "Apply the three questions — who, when, how do they know. A peer-reviewed journal with a two-million-patient method beats an anonymous, unsupported blog on every axis. Quality is exactly what a debater must evaluate.",
      },
      {
        id: "deb1-04-s2", label: "Studies Show",
        situation: "Your opponent repeatedly says 'studies show' and 'experts agree' but never names a single study or expert. You hold specific, cited evidence.",
        prompt: "What is the most effective response?",
        options: [
          "Press: which study, by whom, when? Ask the judge to give uncited claims little weight against your specific, cited evidence",
          "Match them by also saying 'studies show' with no citations",
          "Concede the point to appear polite",
          "Object that citing sources is against the rules",
        ],
        correctIndex: 0,
        explanation: "Uncited 'studies show' is unverifiable. Pressing for the citation exposes that there may be none and lets the judge prefer your named author, date, and source. Matching their vagueness would throw away your advantage.",
      },
      {
        id: "deb1-04-s3", label: "The Clipped Quote",
        situation: "A source actually says: 'While early results are promising, the policy failed to reduce crime in the long term.' A debater reads only 'early results are promising' to claim the source supports the policy working.",
        prompt: "What has this debater done?",
        options: [
          "Committed an evidence-ethics violation — clipping the quote to reverse the source's actual conclusion",
          "Nothing wrong — selective quoting is just clever strategy",
          "Made a harmless stylistic choice with no consequences",
          "Strengthened the evidence by trimming it",
        ],
        correctIndex: 0,
        explanation: "The source concludes the policy failed long-term; reading only the opening clause misrepresents the author. That is an evidence-ethics violation in the same category as fabrication and can lose the round automatically.",
      },
      {
        id: "deb1-04-s4", label: "Stale Data",
        situation: "Topic: 'Internet access is now a basic human necessity.' Your opponent's key statistic on global internet usage comes from a 2007 report.",
        prompt: "What is the problem, and how do you exploit it?",
        options: [
          "On a fast-moving topic the 2007 figure is badly outdated; flag the staleness and prefer current data",
          "No problem — older data is always just as good",
          "The statistic is illegal to use and should be struck",
          "You must use the same 2007 report to keep it fair",
        ],
        correctIndex: 0,
        explanation: "Currency (the C in CRAAP) matters most on fast-moving topics, and internet usage is among the fastest. A 2007 figure predates the smartphone era; flag the staleness and ask the judge to prefer recent evidence.",
      },
    ],
  },

  "debate-1-05": {
    intro: "You cannot answer an argument you didn't write down. Flowing — columnar note-taking, one column per speech — is how debaters track every argument and spot what was dropped.",
    spots: [
      {
        id: "deb1-05-s1", label: "Trusting Memory",
        situation: "A novice listens to a fast round writing nothing down. In rebuttal they claim 'they never answered our economy argument' — but the opponent clearly did. The judge frowns.",
        prompt: "What went wrong, and how does flowing fix it?",
        options: [
          "Without a flow they lost track of answers; a flow lines each argument up with its response so you can see what was addressed",
          "Nothing — memory is plenty in a fast round",
          "They simply needed to speak faster",
          "Flowing is only the judge's job, not the debater's",
        ],
        correctIndex: 0,
        explanation: "Claiming a live argument was dropped destroys your credibility — and it happens whenever you trust memory at speed. The flow aligns every argument with its responses across columns so your claims about the round are accurate.",
      },
      {
        id: "deb1-05-s2", label: "The Blank Column",
        situation: "On your flow, your second contention has a completely blank column beneath it in the opponent's speech. They never mentioned it at all.",
        prompt: "What does that blank column mean, and what do you do?",
        options: [
          "The argument was dropped — treated as conceded/true — so extend it and weigh it as a reason you win",
          "It means nothing; safely ignore it",
          "You must drop it too, to be fair to them",
          "It means the judge failed to hear that part",
        ],
        correctIndex: 0,
        explanation: "An unanswered argument is 'dropped' and treated as conceded. Dropped arguments are among your most powerful tools: extend the conceded point and weigh it as a clean reason for the ballot. Spotting blanks is a main reason you flow.",
      },
      {
        id: "deb1-05-s3", label: "Flow the Right Way",
        situation: "A debater tries to flow by writing every word the speaker says, in full sentences, left to right like a paragraph. They fall hopelessly behind within thirty seconds.",
        prompt: "What is the correct flowing technique?",
        options: [
          "Capture structure, not sentences — tag, warrant, and impact in shorthand and symbols, in the speech's column",
          "Transcribe every word as fast as possible to miss nothing",
          "Write only the conclusion of each speech",
          "Stop taking notes and rely entirely on recall",
        ],
        correctIndex: 0,
        explanation: "Speed comes from writing the skeleton — a short tag, the warrant, the impact — using arrows and abbreviations, each argument in its speech's column. You capture the structure, never the full text.",
      },
      {
        id: "deb1-05-s4", label: "Line by Line",
        situation: "It's your rebuttal. You have a complete flow in front of you and need to choose how to deliver your responses.",
        prompt: "What is the disciplined way to give a rebuttal off the flow?",
        options: [
          "Go line by line — answer each argument in the order it appears on the flow, signposting as you go",
          "Give one broad emotional overview and skip the specific clash",
          "Answer only the argument you personally find most interesting",
          "Re-read your original case word for word",
        ],
        correctIndex: 0,
        explanation: "The line-by-line answers arguments in order where they sit on the flow, so the judge can track every response and see what's been handled. A free-floating overview that ignores the specific clash is hard for the judge to credit.",
      },
    ],
  },

  "debate-1-06": {
    intro: "Every speech in a debate has a job — build, answer, or weigh. Knowing which speech you're in tells you exactly what the judge expects.",
    spots: [
      {
        id: "deb1-06-s1", label: "Constructive or Rebuttal?",
        situation: "It's your constructive — the early speech where each side presents its case. You're deciding what belongs here.",
        prompt: "What is the primary job of a constructive speech?",
        options: [
          "Build and present your case — this is where new arguments are introduced",
          "Crystallize the two reasons you win and stop adding anything",
          "Only answer the opponent, never present your own case",
          "Spend the whole time on cross-examination questions",
        ],
        correctIndex: 0,
        explanation: "Constructives are the build phase: you present contentions or a plan, and new arguments are allowed. Answering, extending, and weighing dominate the later rebuttal speeches.",
      },
      {
        id: "deb1-06-s2", label: "New in the Last Speech",
        situation: "You've saved a knockout brand-new contention for your very last speech (the final focus / rebuttal), hoping to surprise the other side with no time left for them to answer.",
        prompt: "What should you expect the judge to do with it?",
        options: [
          "Disregard it as 'new in the rebuttal' — fairness bars wholly new arguments the opponent can't answer",
          "Reward it as a clever, well-timed surprise",
          "Automatically vote for you because it went unanswered",
          "Pause the round to let the opponent respond",
        ],
        correctIndex: 0,
        explanation: "Debate guarantees each argument a response. Unveiling a wholly new argument in the last speech denies the opponent any reply, so judges disregard it. Plant arguments in the constructive and develop them later.",
      },
      {
        id: "deb1-06-s3", label: "The Final Speech",
        situation: "You are giving the final speech of the round. The clash is mostly settled, and the judge is about to decide.",
        prompt: "What is the right content for this last speech?",
        options: [
          "Weigh and crystallize — give the two or three reasons your side wins and why they outweigh",
          "Introduce a fresh independent reason to vote that you held in reserve",
          "Re-read your entire constructive from the top",
          "Raise brand-new evidence on a new contention",
        ],
        correctIndex: 0,
        explanation: "The final speech is the weigh-and-crystallize phase: hand the judge the ballot story — the few reasons you win and why they outweigh. New arguments here are barred and will be ignored.",
      },
      {
        id: "deb1-06-s4", label: "Budgeting Prep",
        situation: "Your team has a small fixed bank of prep time to spend in chunks across the round. It's early, and you're tempted to burn most of it now organizing your first rebuttal.",
        prompt: "How should you treat prep time?",
        options: [
          "Budget it as a scarce resource — don't blow it all early; save some to sharpen later rebuttals",
          "Spend it all immediately so you never have to think on your feet",
          "Never use it — using prep looks weak to the judge",
          "Give your unused prep to the opponent",
        ],
        correctIndex: 0,
        explanation: "Prep time is a finite resource to be budgeted across the round. Spending it all early leaves you scrambling late; hoarding it wastes a tool that could sharpen a crucial rebuttal. Spend it deliberately.",
      },
    ],
  },

  "debate-1-07": {
    intro: "Cross-examination isn't a fight — it's the calm setting of traps you'll spring in your next speech. Ask to build, answer without getting trapped.",
    spots: [
      {
        id: "deb1-07-s1", label: "The Purpose of Cross-Ex",
        situation: "You have a three-minute cross-examination period to question your opponent after their constructive.",
        prompt: "What is the real purpose of cross-examination?",
        options: [
          "Expose weaknesses and set up arguments you'll make in your next speech — not to 'win' the exchange",
          "Deliver a long speech of your own disguised as a question",
          "Humiliate the opponent so the judge dislikes them",
          "Concede your case so the round ends faster",
        ],
        correctIndex: 0,
        explanation: "Cross-ex is for clarifying, exposing weaknesses, and locking in concessions you'll use in your next speech. The points are set up in cross-ex but actually made in the following speech.",
      },
      {
        id: "deb1-07-s2", label: "Pick the Question",
        situation: "You want to pin the opponent down and create material for your next speech. You must choose how to phrase your cross-ex question.",
        prompt: "Which is the most effective cross-ex question?",
        options: [
          "A tight, closed question that forces a clear yes/no or a specific concession",
          "A broad open question that lets them re-deliver their whole case",
          "A rambling multi-part question they can dodge by answering one piece",
          "A rhetorical jab that asks for no real answer",
        ],
        correctIndex: 0,
        explanation: "Tight, closed questions control the exchange and extract usable concessions. Open-ended questions hand the opponent free speech time to repeat their best material.",
      },
      {
        id: "deb1-07-s3", label: "Answering Under Pressure",
        situation: "On the other side now, an opponent asks you a leading question with a hidden trap, pushing for a quick 'yes.'",
        prompt: "What is the best way to answer?",
        options: [
          "Stay calm, answer honestly but concisely, and add a brief qualifier when a flat yes/no would mislead",
          "Refuse to answer anything to avoid the trap",
          "Give a long counter-speech to run out their clock",
          "Concede whatever they want to seem agreeable",
        ],
        correctIndex: 0,
        explanation: "Answer honestly and concisely, but don't let a leading question force a misleading flat answer — a short qualifier protects your position without dodging. Refusing to answer or filibustering reads badly to the judge.",
      },
      {
        id: "deb1-07-s4", label: "Where the Point Lands",
        situation: "In cross-ex you got the opponent to admit their plan has no funding source. The cross-ex period is ending.",
        prompt: "When and where do you actually use that admission?",
        options: [
          "In your next speech — turn the concession into an argument on the flow; cross-ex sets it up, the speech makes it",
          "Right now, by declaring victory during cross-ex itself",
          "Nowhere — admissions in cross-ex don't count",
          "Only if the judge noticed it without you mentioning it",
        ],
        correctIndex: 0,
        explanation: "Concessions won in cross-ex aren't arguments until you deploy them. You bring the funding admission into your next speech, put it on the flow, and weigh it. Cross-ex sets the trap; the speech springs it.",
      },
    ],
  },

  "debate-1-08": {
    intro: "Refutation isn't contradiction — it's a structured reply the judge can follow and write down. Master the four steps: They Say, But, Because, Therefore.",
    spots: [
      {
        id: "deb1-08-s1", label: "Mere Contradiction",
        situation: "Your opponent argues a policy will raise costs. You stand and say only: 'That's wrong. Costs won't go up.' Nothing more.",
        prompt: "Why is this a weak refutation?",
        options: [
          "It's mere contradiction — no warrant, so the judge has no reason to prefer your answer over their argument",
          "It's perfect — flatly denying an argument always defeats it",
          "It's too long and should be shortened further",
          "It's invalid because you can't answer a cost argument",
        ],
        correctIndex: 0,
        explanation: "'That's wrong' with no warrant is mere contradiction. The judge is given no reason to credit your answer over their argument. A complete refutation must add the 'because.'",
      },
      {
        id: "deb1-08-s2", label: "Order the Steps",
        situation: "You want to answer the cost argument using the clean four-step method so it tracks on the flow.",
        prompt: "What is the correct order of the four-step refutation?",
        options: [
          "They Say → But → Because → Therefore",
          "Because → Therefore → They Say → But",
          "But → Therefore → They Say → Because",
          "Therefore → Because → But → They Say",
        ],
        correctIndex: 0,
        explanation: "The method is They Say (signpost the argument), But (your response), Because (warrant it), Therefore (impact it back). Signposting first and warranting always make the refutation complete and trackable.",
      },
      {
        id: "deb1-08-s3", label: "Name the Response",
        situation: "Your opponent claims their plan will reduce traffic. You can show their own plan would actually increase traffic — converting their argument into a reason to vote for you.",
        prompt: "Which type of response is this?",
        options: [
          "A turn — you show their argument actually supports your side, the highest-value refutation",
          "A non-unique — the harm happens anyway regardless of the plan",
          "An impact minimization — even if true it barely matters",
          "A simple denial of the claim with no warrant",
        ],
        correctIndex: 0,
        explanation: "Showing their argument cuts the other way is a turn — the most devastating response, because a dropped turn doesn't just neutralize their point, it becomes an independent reason you win.",
      },
      {
        id: "deb1-08-s4", label: "The Double-Turn Trap",
        situation: "Against one argument, you're tempted to both link-turn it (their plan causes the bad thing) AND impact-turn it (the outcome is actually good) at the same time.",
        prompt: "Why is running both turns at once a mistake?",
        options: [
          "You can 'double-turn' yourself — together they prove the opponent's point and become offense for them",
          "It's never a mistake — more turns are always better",
          "Turns are illegal and the judge will strike them",
          "It wastes time but is otherwise harmless",
        ],
        correctIndex: 0,
        explanation: "Link-turning and impact-turning the same argument simultaneously is a double-turn: you concede their plan causes the outcome and that the outcome is good, handing them offense. Refutation means choosing the right tool, not all of them.",
      },
    ],
  },

  "debate-1-09": {
    intro: "The best argument loses if the judge can't follow it. Delivery — voice, pace, eye contact, and signposting — is how your reasoning reaches the ballot.",
    spots: [
      {
        id: "deb1-09-s1", label: "Too Fast to Flow",
        situation: "A debater has great arguments but speaks in a flat, breakneck rush. The judge keeps losing the thread and stops writing.",
        prompt: "What's the core problem with this delivery?",
        options: [
          "If the judge can't follow and flow it, even the best argument never reaches the ballot",
          "Nothing — speaking fast always signals confidence and wins",
          "The arguments are bad; speed is irrelevant",
          "The judge should simply try harder to keep up",
        ],
        correctIndex: 0,
        explanation: "Delivery exists to get your reasoning onto the judge's flow. A pace and tone the judge can't track means strong arguments are lost. Clarity beats raw speed at the foundational level.",
      },
      {
        id: "deb1-09-s2", label: "Signposting",
        situation: "You're about to move from your opponent's first contention to their second. You want the judge to follow you cleanly on the flow.",
        prompt: "What should you do as you transition?",
        options: [
          "Signpost — verbally label where you are ('On their second contention…') so the judge tracks you on the flow",
          "Switch silently and trust the judge to figure out the jump",
          "Speed up so you cover more ground before time runs out",
          "Restate your entire case before moving on",
        ],
        correctIndex: 0,
        explanation: "Signposting tells the judge exactly which argument you're answering so your response lands in the right place on the flow. Silent transitions leave the judge guessing and your points floating free.",
      },
      {
        id: "deb1-09-s3", label: "Emphasis With the Voice",
        situation: "You reach the single most important impact in your case — the reason the judge should vote for you.",
        prompt: "How should your delivery handle this moment?",
        options: [
          "Slow down and vary pace/volume to mark it as important so the judge knows to weigh it",
          "Race through it at the same flat speed as everything else",
          "Drop your voice to a near-whisper so only the front row hears",
          "Skip emphasizing it — judges weigh everything equally regardless",
        ],
        correctIndex: 0,
        explanation: "Vocal variety — slowing down, shifting volume — signals to the judge what matters most. Monotone delivery flattens your key impact into the noise; deliberate emphasis tells the judge where to look.",
      },
      {
        id: "deb1-09-s4", label: "Eyes Up",
        situation: "A debater reads their entire speech with their head down, eyes glued to the page, never looking at the judge.",
        prompt: "Why does this hurt their persuasion?",
        options: [
          "Eye contact builds credibility and connection; burying your face in notes weakens both",
          "It helps — looking down shows the judge you have thorough notes",
          "Eye contact is irrelevant to how judges decide",
          "It's only a problem in the final speech",
        ],
        correctIndex: 0,
        explanation: "Eye contact projects credibility and engages the judge as a person, not just a flow. Reading head-down the whole time severs that connection and weakens persuasion, even when the content is sound.",
      },
    ],
  },

  "debate-1-10": {
    intro: "The best debaters are fierce competitors and good people in the same round — and judges notice both. Compete hard, stay honest, respect the room.",
    spots: [
      {
        id: "deb1-10-s1", label: "Honesty With Evidence",
        situation: "You're losing a key point and realize a slightly distorted paraphrase of your source would make it sound much stronger than the source actually says.",
        prompt: "What's the right move?",
        options: [
          "Represent the source honestly — misrepresenting evidence is an ethics violation that can lose the round and your reputation",
          "Distort it just a little; everyone shades evidence to win",
          "Invent a second statistic to back it up",
          "Cite a study you never actually read",
        ],
        correctIndex: 0,
        explanation: "Evidence ethics are non-negotiable: you may interpret and emphasize, but never misrepresent what a source says. Distortion can lose the round automatically and destroy the trust the activity runs on.",
      },
      {
        id: "deb1-10-s2", label: "Competing With Respect",
        situation: "Your opponent is clearly less experienced and stumbling. You could mock them to score easy points with a harsh tone, or dismantle their arguments respectfully.",
        prompt: "What does good debate etiquette call for?",
        options: [
          "Attack the arguments hard but treat the person with respect — judges reward fierce, civil competitors",
          "Mock them personally; humiliation is a legitimate tactic",
          "Go easy and throw the round to be nice",
          "Refuse to engage a weaker opponent at all",
        ],
        correctIndex: 0,
        explanation: "Debate separates the argument from the person: compete fiercely on substance, stay civil toward the human. Personal mockery alienates judges; respectful clash wins both the round and the room.",
      },
      {
        id: "deb1-10-s3", label: "Reading the Ballot",
        situation: "You lost a close round. The judge's ballot explains the decision and offers specific feedback on your weaknesses.",
        prompt: "What's the constructive response?",
        options: [
          "Read the feedback, learn from it, and improve — the ballot is how you get better over time",
          "Dismiss it as a biased judge who simply got it wrong",
          "Confront the judge afterward to argue the decision",
          "Ignore it entirely and keep debating exactly the same",
        ],
        correctIndex: 0,
        explanation: "The ballot is the judge's reasoned decision and a growth tool. Skilled debaters mine feedback to fix weaknesses; arguing with the judge or dismissing the ballot wastes the round's most useful output.",
      },
      {
        id: "deb1-10-s4", label: "Decision vs. Result",
        situation: "You made a strategically sound, well-warranted choice in a round, but a few unlucky factors meant you lost the ballot anyway.",
        prompt: "How should you evaluate your performance?",
        options: [
          "Judge the decision, not the single result — sound, well-warranted choices win out over many rounds",
          "It was a bad choice purely because you lost this round",
          "Abandon that strategy forever after one loss",
          "Only the win-loss record matters; reasoning is irrelevant",
        ],
        correctIndex: 0,
        explanation: "A sound process can still lose a single round to factors outside your control. Evaluate the quality of your decisions, not one outcome — good, well-warranted debating wins over the long run.",
      },
    ],
  },
};
