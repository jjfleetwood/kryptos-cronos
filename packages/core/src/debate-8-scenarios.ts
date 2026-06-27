import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the Psychology of Debate epoch (debate-8).
// Each spot is a deterministic, knowledge-based decision: name the cognitive
// bias, pick the Cialdini principle, choose the inoculation/persuasion move, or
// classify System 1 vs System 2. The psychology is established science, not
// opinion. correctIndex and explanation are stripped server-side before the
// client ever sees them. No hand/board/pot/toCall — these aren't card spots.
export const debate8Scenarios: Record<string, ScenarioConfig> = {
  // ─── debate-8-01: Cognitive Biases in Reasoning ───────────────────────────
  "debate-8-01": {
    intro:
      "You're persuading a real human mind, not an idealized logic engine. Spot the heuristics and biases (Kahneman & Tversky) shaping the round — in the judge and in yourself.",
    spots: [
      {
        id: "deb8-01-s1",
        label: "First Framing",
        situation:
          "In the very first speech, your opponent declares, 'This whole debate comes down to one number: the projected cost.' The judge evaluates everything afterward against that figure.",
        prompt: "Which cognitive bias is the opponent exploiting?",
        options: [
          "Anchoring — the first number or framing encountered disproportionately pulls all later judgment toward it",
          "The availability heuristic",
          "Confirmation bias",
          "The sunk-cost fallacy",
        ],
        correctIndex: 0,
        explanation:
          "This is anchoring: the first value or frame the mind encounters exerts an outsized gravitational pull on every subsequent estimate. By anchoring the round to 'the cost' first, the opponent makes their ground the reference point. The counter is to re-anchor early with your own framing rather than letting theirs stand unchallenged.",
      },
      {
        id: "deb8-01-s2",
        label: "Vivid vs. Dry",
        situation:
          "Two debaters argue the same harm. One reads a dry national statistic; the other tells a concrete, vivid story of one affected person AND cites the statistic. The vivid version feels far weightier to the judge.",
        prompt: "Which heuristic explains why the vivid version lands harder?",
        options: [
          "Anchoring",
          "Loss aversion",
          "The availability heuristic — vivid, easily-recalled examples feel more probable and important than abstract numbers",
          "The halo effect",
        ],
        correctIndex: 2,
        explanation:
          "The availability heuristic: people judge importance and probability by how easily an example comes to mind. A concrete, memorable story is far more 'available' than a dry statistic, so it feels more significant. Pairing a vivid example with the real data is legitimate — it helps a human mind register a true impact's weight, not fabricate one.",
      },
      {
        id: "deb8-01-s3",
        label: "Your Own Blind Spot",
        situation:
          "You're certain your case is overwhelming and the opponent's is obviously weak. In the round you're blindsided by an argument you'd dismissed without really examining it.",
        prompt: "What bias hit you, and what is the right counter?",
        options: [
          "Recency bias — counter by speaking last",
          "Confirmation bias — overrating your own case and underrating theirs; counter by genuinely steelmanning the opponent's strongest version",
          "Anchoring — counter by ignoring their case entirely",
          "No bias; you were just unlucky",
        ],
        correctIndex: 1,
        explanation:
          "Confirmation bias makes you seek and weight evidence that fits what you already believe, so you overrate your case and dismiss the opponent's best argument as 'obviously bad.' The defense is to steelman — build and honestly engage the strongest version of their case (red-teaming) — so nothing blindsides you.",
      },
      {
        id: "deb8-01-s4",
        label: "Fast or Slow",
        situation:
          "A debater floods the round with dense, confusing technical material that demands intense effort to follow. The judge forms a vague, slightly negative impression and later rationalizes the decision against them.",
        prompt: "What does Kahneman's two-system model say happened?",
        options: [
          "The judge ran pure System 2 logic, so the dense material won on merit",
          "Judges have no intuitive reactions; only the flow matters",
          "Dense material always wins regardless of clarity",
          "System 2 is lazy, so the judge's fast intuitive System 1 formed the read (resisting the heavy effort), then System 2 rationalized it — clear material the intuitive mind can grasp persuades more",
        ],
        correctIndex: 3,
        explanation:
          "System 2 (slow, effortful) is lazy and engages reluctantly, so a judge's fast, intuitive System 1 forms the impression — and dense material that demands heavy System 2 effort tends to be resisted. The vague negative read gets rationalized into the decision. Clarity and a clean narrative aren't just style; they work with how the mind actually processes.",
      },
    ],
  },

  // ─── debate-8-02: The Principles of Influence ─────────────────────────────
  "debate-8-02": {
    intro:
      "Cialdini distilled persuasion into reliable principles — reciprocity, commitment/consistency, social proof, authority, liking, scarcity, unity. Name the lever at work, and tell the honest use from the manipulative twin.",
    spots: [
      {
        id: "deb8-02-s1",
        label: "The Locked Admission",
        situation:
          "In cross-examination you get the opponent to clearly concede a key premise. In your next speech you remind the judge of that admission and build on it — and the opponent is now pressured to stay consistent with what they granted.",
        prompt: "Which Cialdini principle is at work?",
        options: [
          "Commitment and consistency — once people commit to a position, they feel pressure to act consistently with it",
          "Scarcity",
          "Reciprocity",
          "Social proof",
        ],
        correctIndex: 0,
        explanation:
          "Commitment and consistency: after making a commitment (here, an admission in cross-ex), people feel internal and social pressure to stay consistent with it, and reversal is costly. This is the engine behind cross-examination strategy — secure a genuine, substantive concession, then hold them to it.",
      },
      {
        id: "deb8-02-s2",
        label: "Real Expert or Famous Face",
        situation:
          "Debater A cites a peer-reviewed study by a leading epidemiologist on an epidemiological question. Debater B cites a famous actor who strongly believes the opposite.",
        prompt: "How do the authority principle and its fallacious twin apply?",
        options: [
          "Both are equally valid uses of authority",
          "Both commit the appeal-to-authority fallacy",
          "A uses authority legitimately (a genuinely qualified, relevant expert); B commits the appeal-to-authority fallacy (a famous non-expert) — authority persuades only when it's real and relevant",
          "Celebrity belief is the stronger authority",
        ],
        correctIndex: 2,
        explanation:
          "Authority is a real lever because people reasonably defer to credible experts — but only when the expertise is genuine and relevant to the question. A's qualified epidemiologist is legitimate authority; B's famous actor is the appeal-to-authority fallacy: fame in an unrelated field is not expertise. The honest principle and the fallacy are two sides of one coin.",
      },
      {
        id: "deb8-02-s3",
        label: "Sharp but Sneering",
        situation:
          "Two debaters are equally sharp on the arguments. One is warm, respectful, and civil toward the opponent. The other is needlessly hostile, sneering, and condescending.",
        prompt: "How does the liking principle bear on their persuasiveness?",
        options: [
          "Hostility makes a debater more persuasive by signaling dominance",
          "Liking has no measurable effect on judges",
          "Only the arguments matter; demeanor is irrelevant",
          "People are more persuaded by those they like and respect; the civil debater builds liking (and influence), the hostile one forfeits it — civility is persuasion, not just ethics",
        ],
        correctIndex: 3,
        explanation:
          "The liking principle holds that people are more open to persuasion from those they like and respect. With equally sharp arguments, the civil debater earns the judge's goodwill and a more receptive hearing, while the needlessly hostile one forfeits it. This is the psychological reason 'tough on the issue, easy on the person' is effective, not merely polite.",
      },
      {
        id: "deb8-02-s4",
        label: "Consensus or Crowd",
        situation:
          "Debater A argues, 'The overwhelming majority of climate scientists — the relevant experts — agree on this.' Debater B argues, 'Most people on the street believe this, so it must be true.'",
        prompt: "Which is legitimate social proof and which is a fallacy?",
        options: [
          "Both are legitimate social proof",
          "A is legitimate (consensus among the relevant knowledgeable experts); B is the ad populum fallacy (mere popularity among non-experts doesn't establish truth)",
          "Both are the ad populum fallacy",
          "Popular belief is stronger evidence than expert consensus",
        ],
        correctIndex: 1,
        explanation:
          "Social proof — looking to what others believe — is legitimate when those others are the relevant knowledgeable people: expert consensus on a technical question is meaningful evidence (A). B's 'everyone on the street believes it' is the ad populum fallacy: raw popularity among non-experts doesn't establish truth. The principle works honestly only as consensus among the relevant experts.",
      },
    ],
  },

  // ─── debate-8-03: How Judges Actually Decide ──────────────────────────────
  "debate-8-03": {
    intro:
      "Judges are boundedly rational (Simon): they satisfice, form a holistic impression, then write a reason-for-decision that justifies it. Use what shapes that impression — primacy, recency, cognitive ease — honestly.",
    spots: [
      {
        id: "deb8-03-s1",
        label: "The Perfect Machine Myth",
        situation:
          "A debater assumes the judge is a flawless tallying machine who will weigh every argument with equal, perfect attention — so they spread their best material evenly and bury key points in the middle.",
        prompt: "What does bounded rationality say about this assumption?",
        options: [
          "It's correct — judges weigh everything with perfect, equal attention",
          "Judges satisfice within cognitive limits and form a holistic impression, not a perfect tally; material buried in the middle is most easily lost, so the assumption is mistaken",
          "Judges ignore arguments entirely and vote on instinct",
          "Only the middle of a round is ever remembered",
        ],
        correctIndex: 1,
        explanation:
          "Bounded rationality (Simon): real deciders don't optimize like machines — they satisfice within limits of attention and memory, forming an overall impression. A judge can't flawlessly tally everything, and key material buried in the middle (between the well-remembered open and close) is easily lost. Treating the judge as a perfect tallying machine risks winning the flow but losing the impression.",
      },
      {
        id: "deb8-03-s2",
        label: "Where the Big Guns Go",
        situation:
          "You want to maximize what the judge actually remembers, and you're deciding where to place your strongest framing and your single most decisive argument.",
        prompt: "Where should they go, and why?",
        options: [
          "All in the middle, where there's the most speaking time",
          "Scattered randomly to keep the judge guessing",
          "At the beginning (primacy — anchors and is remembered) and the end (recency — the decisive crystallization), because the open and close are remembered best and the middle is most easily lost",
          "Only at the very end, never the beginning",
        ],
        correctIndex: 2,
        explanation:
          "The serial-position effect — primacy and recency — means people remember the start and end of a sequence best. Front-load your strongest framing and arguments (primacy, which also anchors evaluation) and deliver a decisive crystallization at the close (recency). The middle is the worst place for crucial material because it's most easily lost.",
      },
      {
        id: "deb8-03-s3",
        label: "Easy Feels True",
        situation:
          "Two rounds are equally substantive and rigorous. One is clearly signposted, well-organized, and easy to follow; the other is just as sound but harder to process. The clear round 'feels' more compelling to the judge.",
        prompt: "What explains this, and what's the honest takeaway?",
        options: [
          "Nothing explains it; only raw substance ever matters",
          "The clear round must secretly have had better arguments",
          "Judges actively prefer confusion",
          "Processing fluency / cognitive ease — easy-to-process information feels truer and more compelling; this rewards honest clarity and organization, not dishonest oversimplification",
        ],
        correctIndex: 3,
        explanation:
          "Cognitive ease (processing fluency): information that's easy to process feels more true and more persuasive, so an equally substantive but clearer round lands harder with a boundedly rational judge. The honest takeaway is to package real rigor in a clear, signposted, followable form — not to dishonestly omit genuine complexity.",
      },
      {
        id: "deb8-03-s4",
        label: "The Felt Gestalt",
        situation:
          "After a round, a judge writes a reason-for-decision that reads like a careful step-by-step tally — but in truth they had a strong felt sense of who won before consciously working through the flow.",
        prompt: "What does this reveal about how to win the round?",
        options: [
          "The written RFD is always a perfect record of step-by-step reasoning",
          "Felt impressions never influence the ballot",
          "Judges often form a felt gestalt of who won and then reconstruct a justifying RFD — so shaping the impression (framing, clarity, strong open/close, explicit weighing) ensures your genuine strengths register holistically",
          "Only the written RFD matters; the impression is irrelevant",
        ],
        correctIndex: 2,
        explanation:
          "The reason-for-decision is often a reconstruction of an impression formed earlier — a felt gestalt of who won, then justified. That's why controlling the impression is powerful: through framing, clarity, a strong open and close, and explicit weighing, you make the felt sense align with the arguments you genuinely won. It's not manipulation; it's ensuring real strengths register to a mind that decides partly by feel.",
      },
    ],
  },

  // ─── debate-8-04: Emotion and Judgment ────────────────────────────────────
  "debate-8-04": {
    intro:
      "The old story says emotion corrupts reason. Damasio's neuroscience says reason without emotion can't even decide. Tell honest pathos from the appeal-to-emotion fallacy.",
    spots: [
      {
        id: "deb8-04-s1",
        label: "The Cold Machine",
        situation:
          "A debater believes the ideal judge is a perfectly cold, emotion-free logic machine, so any appeal to feeling must corrupt the decision — and they strip all emotion from their high-stakes case.",
        prompt: "What does Damasio's research suggest about this view?",
        options: [
          "It's correct — emotion always corrupts judgment",
          "Emotion is essential to decision-making (patients who lost emotional processing kept their logic but couldn't decide), so a purely affectless case underuses the actual machinery of judgment",
          "Judges genuinely have no emotional responses",
          "Logic is irrelevant to how decisions are made",
        ],
        correctIndex: 1,
        explanation:
          "Damasio's patients — intelligent and logical but unable to decide after losing emotional processing — show emotion is woven into the machinery of judgment, not opposed to it. So the 'cold logic machine' ideal is incoherent, and a purely affectless presentation of a high-stakes harm fails to engage the affective system that registers its weight. Aristotle's pairing of logos and pathos had it right.",
      },
      {
        id: "deb8-04-s2",
        label: "Feelings as Data",
        situation:
          "Asked which of two risks is more serious, a judge leans partly on how each one makes them feel, not purely on the statistics.",
        prompt: "What is this, and what does it imply for a debater?",
        options: [
          "A judging defect to be ignored entirely",
          "Proof that statistics never matter",
          "The affect heuristic — people use feelings as information when judging; it implies connecting a real impact to genuine emotion helps the judge register its true weight (used honestly)",
          "A reason to strip all emotion from every argument",
        ],
        correctIndex: 2,
        explanation:
          "This is the affect heuristic (Slovic): people consult their feelings as a fast source of information when judging risks and options. So a judge's emotional response to your impacts is part of how they evaluate the round — connecting a real, warranted impact to the genuine emotion attached to it (the human reality behind the numbers) helps them register its true weight, when it's grounded in a sound argument.",
      },
      {
        id: "deb8-04-s3",
        label: "Honest or Hollow",
        situation:
          "Debater A: 'Here's the data on preventable deaths — and behind each number is a real family. This is what the harm means.' Debater B: 'Just picture the suffering! Feel it!' — with no argument or evidence at all.",
        prompt: "Which use of emotion is legitimate, given the science?",
        options: [
          "Both are equally legitimate",
          "B is legitimate because emotion is part of judgment",
          "Neither — all emotion is manipulation",
          "A is legitimate (real emotion attached to a sound, evidenced argument, engaging the affective machinery of judgment); B is the appeal-to-emotion fallacy (feeling substituted for an argument)",
        ],
        correctIndex: 3,
        explanation:
          "The science that emotion is part of judgment sharpens the ethical line rather than dissolving it. A connects genuine emotion to a sound, evidenced argument — engaging the affective system honestly. B substitutes emotion for an argument (the appeal-to-emotion fallacy), trying to make the judge feel instead of think because there's no reasoning beneath it. Legitimate pathos amplifies a real argument; manipulative pathos replaces one.",
      },
      {
        id: "deb8-04-s4",
        label: "Two Ways to Err",
        situation:
          "A debater wants to calibrate emotion correctly across their case, avoiding both a robotic delivery and manufactured melodrama.",
        prompt: "Given Damasio's finding, how does the error run?",
        options: [
          "The error runs both ways: too little emotion underuses the deciding mind, while dishonestly too much is manufactured feeling with no argument — calibrate rigorous logos with honest pathos",
          "Only too much emotion is ever a mistake",
          "Only too little emotion is ever a mistake",
          "There is no such thing as too much or too little; emotion is irrelevant",
        ],
        correctIndex: 0,
        explanation:
          "Because emotion is part of judgment, the error runs in both directions: a cold, affectless case underuses the affective machinery a decision requires, while manufactured emotion with no real argument beneath it is the appeal-to-emotion fallacy. The complete advocate calibrates — rigorous logos engaging the deliberate system, honest pathos engaging the affective one, both grounded in truth.",
      },
    ],
  },

  // ─── debate-8-05: Cognitive Load and Processing Fluency ───────────────────
  "debate-8-05": {
    intro:
      "The judge has limited working memory (Miller's ~7±2 chunks) and trusts what's easy to process. Manage the load and engineer fluency so your real arguments are received.",
    spots: [
      {
        id: "deb8-05-s1",
        label: "Overloading the Buffer",
        situation:
          "A debater rattles off fourteen distinct unlabeled points in ninety seconds with no structure. The judge retains only a blurry handful and loses the thread.",
        prompt: "Which principle did the debater violate?",
        options: [
          "The mere-exposure effect",
          "The limits of working memory (Miller's ~7±2 chunks) — overloading it past capacity means most points aren't retained; chunking and signposting are needed",
          "The fundamental attribution error",
          "Reciprocity",
        ],
        correctIndex: 1,
        explanation:
          "Working memory holds only about 7±2 chunks at once (Miller). Dumping fourteen unlabeled points blows past that limit, so most are lost. The fix is to chunk and signpost — group points under a few clear headers — so the judge can hold and recall the structure rather than drowning in undifferentiated detail.",
      },
      {
        id: "deb8-05-s2",
        label: "Cleaning the Signal",
        situation:
          "You have a genuinely strong but complex argument. You want the judge to actually grasp and retain it under the time pressure of a fast round.",
        prompt: "What's the best move, given cognitive-load theory?",
        options: [
          "Speak faster to fit in more supporting detail",
          "Add extra jargon to sound authoritative",
          "Chunk it into a few clearly-labeled, signposted steps with a clean structure, reducing extraneous load so working memory can hold the real argument",
          "Bury the conclusion so the judge has to work for it",
        ],
        correctIndex: 2,
        explanation:
          "Cognitive-load theory says working memory is easily overwhelmed, so reduce extraneous load: chunk a complex argument into a few labeled, signposted steps with clean structure. That frees the judge's limited capacity to hold and follow the genuinely important reasoning, rather than spending it decoding clutter, speed, or jargon.",
      },
      {
        id: "deb8-05-s3",
        label: "Smooth Feels Sound",
        situation:
          "A claim presented in clear, legible, fluent language is rated more believable than the exact same claim presented in cluttered, hard-to-read, disfluent form.",
        prompt: "What effect is this, and is it a license to oversimplify dishonestly?",
        options: [
          "Processing fluency — easy-to-process information feels truer; it rewards honest clarity, not dishonest oversimplification of a real argument",
          "The backfire effect — and it means you should add complexity",
          "Anchoring — and it has nothing to do with clarity",
          "The Dunning-Kruger effect",
        ],
        correctIndex: 0,
        explanation:
          "Processing fluency: information that's easy to process feels more true and trustworthy. This rewards honest clarity — making genuinely sound arguments easy to grasp. It is not a license to dishonestly strip out real complexity or omit warranted caveats; the goal is to present true, rigorous content in a fluent, followable form.",
      },
      {
        id: "deb8-05-s4",
        label: "The Disfluent Trap",
        situation:
          "Late in a long round the judge is tired. Your opponent's case is dense and disfluent; yours is clean and well-signposted. You're tempted to also go fast and dense to 'match volume.'",
        prompt: "What does the load-and-fluency research advise?",
        options: [
          "Match their density and speed to avoid looking weak",
          "Add complexity so your case seems more sophisticated",
          "Keep your case clean and fluent — a tired judge with limited capacity will retain and trust the easy-to-process side, so clarity is a real edge, not a concession",
          "Stop signposting, since structure wastes time",
        ],
        correctIndex: 2,
        explanation:
          "A fatigued judge has even less working-memory capacity and leans harder on fluency. Matching the opponent's dense, disfluent style throws away your advantage. Staying clean and signposted means the judge retains and trusts your side — clarity under load is a genuine persuasive edge, not a weakness to hide.",
      },
    ],
  },

  // ─── debate-8-06: Reading People ──────────────────────────────────────────
  "debate-8-06": {
    intro:
      "Nonverbal signals carry real information (Ekman), but confident 'mind-reading' is a trap — lie detection from demeanor is barely better than chance. Read what's reliable; resist what isn't.",
    spots: [
      {
        id: "deb8-06-s1",
        label: "The Lost Judge",
        situation:
          "Mid-speech you notice the judge has stopped taking notes, is frowning slightly, and keeps glancing back at an earlier page of their flow.",
        prompt: "What's the most reliable read, and the right response?",
        options: [
          "They're lying about their reaction — ignore it",
          "It signals confusion or disengagement with the current point — slow down, signpost, and clarify the thread they've lost",
          "It proves they've already decided against you — give up",
          "Nonverbal cues are meaningless; change nothing",
        ],
        correctIndex: 1,
        explanation:
          "Disengagement cues — stopping notes, frowning, flipping back — are among the more reliable nonverbal reads of a listener's processing state: the judge has likely lost the thread. The right response is to slow down, re-signpost, and clarify, recovering the point rather than barreling on or catastrophizing about a verdict.",
      },
      {
        id: "deb8-06-s2",
        label: "The Tell That Isn't",
        situation:
          "Your opponent breaks eye contact and shifts in their seat while answering. You're tempted to tell the judge this 'proves they're lying and know their case is weak.'",
        prompt: "What does the science of deception detection say?",
        options: [
          "Broken eye contact reliably proves deception",
          "Such cues reliably reveal a weak case",
          "People detect lies from demeanor at barely above chance; cues like gaze and fidgeting are unreliable signs of deception (often just nerves) — claiming it 'proves' lying is the mind-reading trap",
          "Fidgeting is a universally validated lie detector",
        ],
        correctIndex: 2,
        explanation:
          "Decades of research show people detect lies from demeanor at only ~54% — barely better than chance — and classic 'tells' like broken eye contact or fidgeting are unreliable, usually just signs of nerves. Claiming a behavioral cue 'proves' deception is the mind-reading trap; argue the substance of their case, not their body language.",
      },
      {
        id: "deb8-06-s3",
        label: "Universal Signals",
        situation:
          "Across very different cultures, including communities with little outside contact, Ekman found certain core facial expressions of emotion are recognized in the same way.",
        prompt: "What did Ekman's cross-cultural work establish?",
        options: [
          "All nonverbal behavior is entirely culture-specific with nothing in common",
          "A set of basic emotional facial expressions appears to be broadly universal across cultures",
          "Facial expressions can be used to reliably detect lies",
          "Nonverbal cues carry no real information",
        ],
        correctIndex: 1,
        explanation:
          "Ekman's cross-cultural fieldwork supported the universality of a set of basic emotional facial expressions (such as happiness, fear, anger, disgust, sadness, surprise) — recognized similarly even in isolated communities. That's a genuine signal. The myth he is often wrongly invoked for — reliable lie detection from the face — is not what the universality finding establishes.",
      },
      {
        id: "deb8-06-s4",
        label: "Read, Don't Over-Read",
        situation:
          "A debater builds an elaborate theory mid-round about exactly what the judge is thinking and feeling, then radically restructures their strategy around that confident guess.",
        prompt: "What's the disciplined view of this 'reading'?",
        options: [
          "Confident mind-reading is a reliable, validated skill — trust it fully",
          "Use broad, reliable engagement cues to adjust (pace, clarity), but treat confident detailed mind-reading as a trap — over-reading a few ambiguous signals leads to bad, overconfident pivots",
          "Ignore the judge completely; cues never carry information",
          "Always assume the judge agrees with you no matter what",
        ],
        correctIndex: 1,
        explanation:
          "The disciplined stance is calibrated: broad engagement cues (confusion, attention, note-taking) reliably inform small adjustments like pace and clarity, but confidently inferring a judge's detailed thoughts from a few ambiguous signals is the mind-reading trap. Over-reading invites overconfident, destabilizing pivots built on guesses, not evidence.",
      },
    ],
  },

  // ─── debate-8-07: Why Minds Resist Good Arguments ─────────────────────────
  "debate-8-07": {
    intro:
      "Good arguments often bounce off because of motivated reasoning and identity (Festinger, Kahan). To change a mind you must lower its defenses, not just pile on facts.",
    spots: [
      {
        id: "deb8-07-s1",
        label: "Reasoning Backward",
        situation:
          "A judge clearly wants one side to win and marshals every bit of logic to defend that conclusion while explaining away contrary evidence.",
        prompt: "What is this phenomenon called?",
        options: [
          "Motivated reasoning — reasoning toward a conclusion you already want, using logic to defend feelings",
          "The availability heuristic",
          "Deliberate practice",
          "The framing effect",
        ],
        correctIndex: 0,
        explanation:
          "Motivated reasoning: people reason toward conclusions they're inclined to want, recruiting logic to defend a felt preference and discounting what contradicts it. Recognizing it explains why piling on more facts often fails — the resistance is motivational, so you must also remove the reasons the mind has to resist.",
      },
      {
        id: "deb8-07-s2",
        label: "The Identity Threat",
        situation:
          "Your argument, though sound, implicitly tells the judge that a belief central to their group identity is wrong. They dig in and resist harder the more evidence you present.",
        prompt: "What's happening, and what's the better approach?",
        options: [
          "They're simply stupid; repeat the facts louder",
          "Identity-protective cognition — when an argument threatens a group-defining belief, people defend the identity; reduce the threat by affirming shared values and decoupling the claim from their identity",
          "The contrast effect; switch to an entirely unrelated topic",
          "Nothing can ever change such a mind, so stop arguing",
        ],
        correctIndex: 1,
        explanation:
          "Identity-protective cognition (Kahan): when accepting a claim feels like betraying a group that defines someone, they defend the identity rather than weigh the evidence — and more facts can entrench them. The better approach lowers the threat: affirm shared values, grant common ground, and frame the claim so accepting it doesn't require abandoning who they are.",
      },
      {
        id: "deb8-07-s3",
        label: "Dissonance in Action",
        situation:
          "Festinger studied a group whose confident prediction publicly and unmistakably failed. Instead of abandoning the belief, many committed to it even more strongly.",
        prompt: "Which theory explains this, and what's the lesson for persuasion?",
        options: [
          "Operant conditioning — so use rewards and punishments",
          "The mere-exposure effect — so just repeat your claim more",
          "Cognitive dissonance — the discomfort of disconfirmation was resolved by doubling down rather than changing; head-on confrontation can entrench, so reduce dissonance instead of maximizing it",
          "Bounded rationality — so the belief was perfectly rational",
        ],
        correctIndex: 2,
        explanation:
          "Cognitive dissonance (Festinger): the acute discomfort of a belief meeting flat disconfirmation gets resolved however is psychologically cheapest — often by rationalizing and doubling down, not by updating. The lesson: a frontal, humiliating confrontation can entrench a view. Effective persuasion gives the mind a low-dissonance off-ramp to change.",
      },
      {
        id: "deb8-07-s4",
        label: "The Graceful Exit",
        situation:
          "You need to move a resistant judge off a position they've publicly leaned toward, without making them feel exposed or foolish for having held it.",
        prompt: "What's the most effective persuasion move?",
        options: [
          "Mock the old position so abandoning it feels obvious",
          "Demand they admit they were completely wrong before you continue",
          "Offer a face-saving path — frame the shift as reasonable given new information or a distinction, so changing costs them no dignity or identity",
          "Repeat your strongest fact at higher volume until they cave",
        ],
        correctIndex: 2,
        explanation:
          "Because resistance is driven by dissonance and identity, the move is to give a graceful, face-saving exit: frame the change as the sensible response to new information or a fair distinction, so updating costs no dignity. Removing the reason to resist does more than adding another reason to agree — you make it psychologically cheap to come your way.",
      },
    ],
  },

  // ─── debate-8-08: Inoculation and Preemption ──────────────────────────────
  "debate-8-08": {
    intro:
      "McGuire's inoculation theory: expose a mind to a weakened form of the opposing argument plus a refutation, and you build its resistance. Time your preemption and two-sided messaging well.",
    spots: [
      {
        id: "deb8-08-s1",
        label: "The Mental Vaccine",
        situation:
          "Before your opponent speaks, you tell the judge, 'They'll argue X — here's why that's weaker than it sounds,' giving a small dose of X and refuting it in advance.",
        prompt: "Which technique is this, and what's its mechanism?",
        options: [
          "The bandwagon effect — building social proof",
          "Inoculation — a weakened dose of the opposing argument plus a refutation builds resistance, so the real attack lands with less force",
          "Anchoring — fixing the first number",
          "Reciprocity — trading concessions",
        ],
        correctIndex: 1,
        explanation:
          "This is inoculation (McGuire): like a vaccine, a weakened dose of the counter-argument paired with a refutation primes the mind to resist the fuller version later. When the opponent then makes the real argument, the judge has already been exposed and given reasons to discount it, so it lands with reduced force.",
      },
      {
        id: "deb8-08-s2",
        label: "Stealing Thunder",
        situation:
          "There's a real weakness in your own case the opponent is sure to exploit. You're deciding whether to raise and address it yourself first or wait and hope they miss it.",
        prompt: "What does the research on 'stealing thunder' advise?",
        options: [
          "Hide it and hope they never notice",
          "Raise it only if directly accused",
          "Disclose and frame the weakness yourself first — 'stealing thunder' reduces its damage and boosts your credibility versus having it exposed by the opponent",
          "Deny the weakness exists even if challenged",
        ],
        correctIndex: 2,
        explanation:
          "Stealing thunder: revealing a weakness in your own case before the opponent does reduces its impact and enhances your perceived credibility and honesty. Raising and framing it on your terms inoculates the judge, whereas letting the opponent 'expose' it makes it land harder and dents your trustworthiness.",
      },
      {
        id: "deb8-08-s3",
        label: "One Side or Two",
        situation:
          "You face a skeptical, knowledgeable judge who is well aware of the strong arguments against your position.",
        prompt: "What's the more persuasive message structure, per the research?",
        options: [
          "A purely one-sided message ignoring all opposing arguments",
          "A two-sided message that acknowledges the strongest opposing arguments and then refutes them — more persuasive and inoculating for an informed, skeptical audience",
          "Refuse to mention the other side so it seems nonexistent",
          "Concede the opposing arguments without any refutation",
        ],
        correctIndex: 1,
        explanation:
          "For an informed, skeptical audience, two-sided messaging — acknowledging the strongest opposing arguments and then refuting them — is more persuasive and durable than a one-sided pitch. It signals fairness, pre-empts what the judge already knows, and inoculates them against the opponent's version. (One-sided can suffice only for an already-friendly, uninformed audience.)",
      },
      {
        id: "deb8-08-s4",
        label: "Forewarn, Then Refute",
        situation:
          "You want the strongest inoculation: not just refuting a point, but priming the judge to actively resist persuasion attempts on it.",
        prompt: "What combination does inoculation theory prescribe?",
        options: [
          "Only a forewarning, with no refutation",
          "Only a refutation, with no forewarning",
          "Forewarning of the coming attack PLUS a refutational preemption (the weakened dose answered) — the warning motivates resistance and the refutation supplies the counterarguments",
          "Neither — simply restate your own case more loudly",
        ],
        correctIndex: 2,
        explanation:
          "Classic inoculation pairs two elements: a forewarning that an attack is coming (which raises the motivation to defend the belief) and refutational preemption (the weakened counter-argument answered in advance, supplying ready counterarguments). Together they build active resistance — the mind is both alerted and armed before the real persuasion attempt arrives.",
      },
    ],
  },

  // ─── debate-8-09: Confidence, Status, and Presence ────────────────────────
  "debate-8-09": {
    intro:
      "First impressions run on two axes — warmth and competence (Fiske). Calibrated confidence reads as competence; prestige beats dominance. Project calm authority without arrogance.",
    spots: [
      {
        id: "deb8-09-s1",
        label: "The Two Axes",
        situation:
          "A debater is brilliant and razor-sharp but comes across as cold, dismissive, and a little contemptuous of everyone in the room.",
        prompt: "In the warmth-competence model, what's the risk?",
        options: [
          "High competence with low warmth can read as cold or untrustworthy; both axes matter, so competence without warmth costs influence",
          "Warmth and competence are the same single trait",
          "Only competence matters; warmth is irrelevant to persuasion",
          "Coldness always maximizes perceived competence and persuasion",
        ],
        correctIndex: 0,
        explanation:
          "Fiske's model says first impressions form on two independent axes: warmth (are you a friend or threat?) and competence (can you back it up?). High competence paired with low warmth reads as cold and can erode trust. The persuasive debater scores on both — credible AND likable — because each axis independently shapes influence.",
      },
      {
        id: "deb8-09-s2",
        label: "Calibrated, Not Cocky",
        situation:
          "One debater asserts everything with absolute, unqualified certainty, even shaky points. Another speaks with steady confidence but accurately signals which claims are rock-solid and which are merely probable.",
        prompt: "Which projects more durable competence, and why?",
        options: [
          "The first — total certainty always reads as strongest",
          "The second — calibrated confidence (matching certainty to actual evidence) builds lasting credibility, while overclaiming collapses when a shaky point is exposed",
          "Neither; confidence has no effect on perceived competence",
          "The first — admitting any uncertainty always destroys authority",
        ],
        correctIndex: 1,
        explanation:
          "The confidence heuristic means people read confidence as competence — but calibration matters. Steady confidence that matches certainty to the evidence is durable; blanket, unqualified certainty on shaky points is fragile, because one exposed overclaim collapses the whole credibility. Calibrated confidence signals you know exactly how strong each claim really is.",
      },
      {
        id: "deb8-09-s3",
        label: "Prestige vs. Dominance",
        situation:
          "Two debaters command attention differently. One earns it through evident skill, generosity, and respect (others want to listen). The other demands it through intimidation, interrupting, and bullying.",
        prompt: "Which status strategy is more persuasive and sustainable?",
        options: [
          "Dominance — intimidation reliably wins judges over time",
          "Prestige — status freely granted for genuine skill and respect is more persuasive and sustainable than dominance won by intimidation",
          "They are equally effective in every setting",
          "Neither status path affects persuasion at all",
        ],
        correctIndex: 1,
        explanation:
          "Prestige (status freely granted because others admire your competence and want to learn from you) is more persuasive and sustainable than dominance (status seized through intimidation and fear). In a debate, prestige earns the judge's genuine receptivity, while dominance breeds resistance and costs the warmth axis — bullying may command the room but rarely wins the mind.",
      },
      {
        id: "deb8-09-s4",
        label: "Steady Under Fire",
        situation:
          "Under a blistering cross-examination, a debater stays calm, measured, and composed rather than rattled, flustered, or defensive.",
        prompt: "Why does this calm presence persuade, on both axes?",
        options: [
          "It doesn't; only the literal words spoken matter",
          "Calm composure signals competence (control of the material) and warmth/security (non-threatened poise), so projecting calm authority strengthens both axes of the impression",
          "Calm reads as weakness and should be avoided under pressure",
          "Only visible aggression projects authority under fire",
        ],
        correctIndex: 1,
        explanation:
          "Composure under fire works on both axes at once: it signals competence (you control the material and aren't shaken) and a kind of warmth/security (you're poised rather than threatened or hostile). Projecting calm authority — confident but not arrogant, unflustered but not cold — strengthens the whole impression, whereas visible rattling undercuts perceived competence.",
      },
    ],
  },

  // ─── debate-8-10: The Debater's Mind ──────────────────────────────────────
  "debate-8-10": {
    intro:
      "The last opponent is your own psychology. Growth mindset (Dweck), deliberate practice (Ericsson), grit (Duckworth), and flow build the mind that masters the craft.",
    spots: [
      {
        id: "deb8-10-s1",
        label: "Fixed or Growth",
        situation:
          "After a tough loss, one debater thinks, 'I'm just not a natural — some people have it and I don't.' Another thinks, 'I haven't mastered this yet — what specifically can I improve?'",
        prompt: "Which mindset predicts long-term improvement, per Dweck?",
        options: [
          "The first — fixed mindset, treating ability as innate and unchangeable, drives improvement",
          "The second — growth mindset, treating ability as developable through effort and learning, drives improvement",
          "Neither mindset has any effect on skill development",
          "Both are equally good for long-term growth",
        ],
        correctIndex: 1,
        explanation:
          "Dweck's research: a growth mindset — believing ability is developable through effort, strategy, and learning — predicts persistence and improvement, while a fixed mindset (ability is innate and static) leads people to avoid challenge and quit after setbacks. Reframing a loss as 'not yet' and asking what to improve is the engine of long-term mastery.",
      },
      {
        id: "deb8-10-s2",
        label: "How to Practice",
        situation:
          "A debater wants to improve fastest. They debate constantly but never target weaknesses or seek feedback — just more reps of what they already do comfortably.",
        prompt: "What does Ericsson's research say is missing?",
        options: [
          "Nothing — sheer volume of reps is what builds expertise",
          "Deliberate practice — focused work on specific weaknesses, at the edge of ability, with feedback — not just comfortable repetition",
          "They should practice less to avoid burnout",
          "Talent is fixed, so practice quality is irrelevant",
        ],
        correctIndex: 1,
        explanation:
          "Ericsson showed expertise comes from deliberate practice, not mere repetition: focused, effortful work targeting specific weaknesses at the edge of your ability, with feedback and correction. Comfortable reps of what you already do well plateau quickly; isolating a weak skill (rebuttal, cross-ex, signposting) and drilling it with feedback drives real growth.",
      },
      {
        id: "deb8-10-s3",
        label: "The Long Game",
        situation:
          "A talented debater quits after a few early losses, while a less naturally gifted teammate keeps showing up, refining, and competing season after season — and eventually surpasses them.",
        prompt: "Which trait, per Duckworth, best explains the second debater's success?",
        options: [
          "Raw talent alone, which they secretly had all along",
          "Grit — sustained passion and perseverance toward long-term goals — often outpredicts raw talent for achievement",
          "A fixed mindset that protected them from failure",
          "Luck, with no role for any psychological trait",
        ],
        correctIndex: 1,
        explanation:
          "Duckworth's grit — sustained passion and perseverance toward long-term goals — often predicts achievement better than raw talent. The teammate who keeps showing up, refining, and persevering through setbacks accumulates the deliberate practice that talent alone never delivers, and overtakes the gifted quitter. Effort compounds; talent that quits does not.",
      },
      {
        id: "deb8-10-s4",
        label: "Into the Zone",
        situation:
          "A debater performs best in a state of complete, energized absorption — challenge and skill perfectly matched, self-consciousness gone, fully immersed in the round.",
        prompt: "What is this state, and what condition produces it?",
        options: [
          "Flow — produced when challenge and skill are well matched (too easy brings boredom, too hard brings anxiety)",
          "Tilt — produced by emotional collapse under pressure",
          "Dissonance — produced by holding contradictory beliefs",
          "Anchoring — produced by fixating on the first argument",
        ],
        correctIndex: 0,
        explanation:
          "This is flow (Csikszentmihalyi): the state of energized, absorbed focus where self-consciousness falls away and performance peaks. It arises when the challenge is well matched to your skill — too easy breeds boredom, too hard breeds anxiety. Building skill through deliberate practice widens the band in which a demanding round can put you into flow rather than panic.",
      },
    ],
  },
};
