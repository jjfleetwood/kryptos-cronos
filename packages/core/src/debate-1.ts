import type { StageConfig, EpochConfig } from "./types";

export const debate1Epoch: EpochConfig = {
  id: "debate-1",
  name: "Foundations of Debate",
  subtitle: "From Your First Round to a Confident Speaker",
  description:
    "Debate is the disciplined art of disagreement — the skill of taking a side, defending it with reasons and evidence, and answering the strongest objections honestly. This first journey starts at zero: what a resolution is, how to build a single clean argument, how to take notes on a fast round, how speeches and cross-examination fit together, and how to win a ballot without ever being rude. Master these foundations and every format that follows becomes learnable.",
  emoji: "🎙️",
  color: "sky",
  unlocked: true,
};

export const debate1Stages: StageConfig[] = [
  // ─── debate-1-01: What Debate Actually Is ─────────────────────────────────────
  {
    epochId: "debate-1",
    wonder: {
      name: "The Pnyx",
      location: "Athens, Greece",
      era: "Ancient",
      emoji: "🏛️",
    },
    id: "debate-1-01",
    order: 1,
    title: "What Debate Actually Is",
    subtitle: "Resolutions, sides, and the burden each side carries",
    category: "arts",
    xp: 80,
    badge: { id: "debate-1-badge-01", name: "First Voice", emoji: "🎙️" },
    challengeType: "quiz",
    info: {
      tagline: "Debate isn't arguing to win at any cost — it's a structured contest of reasons judged by a neutral third party.",
      year: -508,
      overview: [
        "Debate is a formal, rule-governed contest in which two sides argue opposite positions on a single statement called the resolution, and a neutral judge decides who argued more persuasively. It is fundamentally different from a quarrel:\n- There are time limits.\n- An order of speeches.\n- A shared topic both sides must address.\n- A standard of evidence.\nThe goal is not to humiliate your opponent or to be the loudest — it is to give the judge better reasons to vote for your side than the other team gives for theirs.",
        "Every debate has two sides defined by the resolution. The Affirmative (also called Proposition or Government depending on the format) argues that the resolution is true or should be adopted. The Negative (Opposition) argues that it should not. Neither side gets to pick a different topic — both are bound to the same resolution, which is what makes the clash fair and comparable. The judge listens to both, takes notes, and votes for the side that better upheld its burden.",
        "What makes debate a discipline rather than a shouting match is the concept of burden — the specific thing each side must prove to win. The Affirmative carries the burden of proof: because they are asking the judge to accept a change or a claim, they must give positive reasons to do so. The Negative carries the burden of rejoinder: they must answer the Affirmative's case, but they begin with presumption — the default assumption that, absent a compelling reason to change, things stay as they are. Understanding who must prove what is the single most important idea a new debater can learn.",
      ],
      technical: {
        title: "The Anatomy of a Debate Round",
        body: [
          "A debate round has four fixed ingredients regardless of format: a resolution (the single sentence under dispute), two sides (Affirmative and Negative), a sequence of timed speeches that alternate between the sides, and a judge who renders a decision based only on what was said in the round. Some formats add cross-examination periods (direct questioning between speeches) and prep time (a small bank of minutes a team can use between speeches to organize).",
          "The judge decides on comparative persuasion, not personal opinion. A good judge sets aside what they personally believe about the topic and asks only: which side did the better debating? This is why a skilled debater can win a side they personally disagree with — the contest is about the quality of argument and refutation in the room, not about the 'real' truth of the matter outside it.",
        ],
        codeExample: {
          label: "The Structure of Any Debate",
          code: `  RESOLUTION:  one sentence both sides must address
      "Resolved: [the thing being debated]"

  ┌─────────────────┐        ┌─────────────────┐
  │  AFFIRMATIVE    │  vs.   │   NEGATIVE      │
  │  (Proposition)  │        │  (Opposition)   │
  │  burden: PROVE  │        │ burden: ANSWER  │
  │  the resolution │        │  + presumption  │
  └─────────────────┘        └─────────────────┘
            │                        │
            └────────► JUDGE ◄───────┘
        decides on COMPARATIVE persuasion
        (who debated better — not personal opinion)

  BURDEN OF PROOF  → on the side seeking change
  PRESUMPTION      → default: no change unless proven`,
        },
      },
      incident: {
        title: "Democracy's First Debaters — The Athenian Assembly",
        when: "508 BCE — Reforms of Cleisthenes",
        where: "The Pnyx hill, Athens",
        impact: "When Athens placed political decisions in the hands of an assembly of citizens, it made the spoken argument the engine of government — and created the first society in which the ability to debate well determined the course of a state.",
        body: [
          "Around 508 BCE, the reforms of Cleisthenes turned Athens into a direct democracy in which ordinary male citizens gathered on a rocky hill called the Pnyx to debate and vote on the city's decisions — war, taxes, treaties, the exile of rivals. There were no professional politicians issuing decrees; policy was decided by whoever could stand before thousands of fellow citizens and argue most persuasively. For the first time, the spoken argument was not entertainment but the literal mechanism of power.",
          "This is why the Greeks invented the systematic study of argument. Within a century, teachers called Sophists were charging fees to teach rhetoric, Aristotle had written the first textbook analyzing persuasion into ethos, pathos, and logos, and the courts of Athens were decided by citizens defending themselves in speeches they wrote or bought. The modern debate round — two sides, a neutral audience, a decision based on argument — is a direct descendant of that hill. Every time a student stands to give a constructive speech, they are practicing the skill that the Athenians believed free people could not do without.",
        ],
      },
      diagram: {
        nodes: [
          { label: "A Resolution Is Set", sub: "one shared statement", type: "attacker" },
          { label: "Two Sides Take It Up", sub: "Affirmative vs. Negative", type: "system" },
          { label: "Timed Speeches Clash", sub: "each side meets its burden", type: "victim" },
          { label: "Judge Votes", sub: "on comparative persuasion", type: "result" },
        ],
      },
      timeline: [
        { year: -508, event: "Cleisthenes' reforms make argument before the Athenian Assembly the basis of government", highlight: true },
        { year: -350, event: "Aristotle writes 'Rhetoric', the first systematic analysis of persuasion" },
        { year: 1858, event: "The Lincoln-Douglas debates model sustained two-sided argument for an American audience" },
        { year: 1925, event: "The first intercollegiate British-American debate tours formalize competitive debate" },
        { year: 2002, event: "The National Speech & Debate Association (then NFL) standardizes modern U.S. high school formats" },
        { year: 2024, event: "Competitive debate operates in over 100 countries across school, university, and Worlds circuits" },
      ],
      keyTakeaways: [
        "A debate is a timed, two-sided contest on a single resolution decided by a neutral judge — not a quarrel",
        "The Affirmative argues the resolution; the Negative argues against it — neither may change the topic",
        "Burden of proof falls on the side seeking change; the other side begins with presumption (the default of no change)",
        "Judges decide on comparative persuasion — who debated better — not on their own opinion of the topic",
      ],
      references: [
        { title: "National Speech & Debate Association: Getting Started", url: "https://www.speechanddebate.org/introduction-to-competition/" },
        { title: "Aristotle's Rhetoric (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/aristotle-rhetoric/" },
        { title: "Britannica: Debate", url: "https://www.britannica.com/topic/debate" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-1-01-q1",
          type: "Core Concept",
          challenge: `  Two students disagree about whether their
  school should require uniforms. They each
  pick a side, agree to speak for 3 minutes
  each in turns, and ask a teacher to decide
  who argued better.

  What separates this from an ordinary argument?`,
          text: "What feature makes this a debate rather than a quarrel?",
          options: [
            "They feel strongly about the topic",
            "There is a shared topic, timed alternating speeches, and a neutral judge deciding on argument quality",
            "One of them will eventually get louder and win",
            "They are allowed to change the subject if they are losing",
          ],
          correctIndex: 1,
          explanation: "Debate is defined by structure: a single shared resolution both sides must address, timed speeches that alternate between the sides, and a neutral judge who decides based on the quality of argument — not personal feeling or volume. A quarrel has none of these. The presence of a fixed topic, fixed turns, and a third-party decision is exactly what converts a disagreement into a debate.",
        },
        {
          id: "debate-1-01-q2",
          type: "Burdens",
          challenge: `  Resolution: "This house would ban gas-powered
  cars by 2035."

  The Affirmative says nothing — they just sit
  quietly. The Negative gives no speech either.

  Who wins, and why?`,
          text: "If neither side argues, which side should win on burdens alone?",
          options: [
            "The Affirmative — they proposed the more interesting idea",
            "The Negative — presumption favors no change when the Affirmative fails to meet its burden of proof",
            "It is a tie that must be re-debated",
            "The judge picks whichever side they personally agree with",
          ],
          correctIndex: 1,
          explanation: "The Affirmative carries the burden of proof: because they ask the judge to adopt a change (banning gas cars), they must give positive reasons. If they offer none, they have not met their burden, and presumption — the default that things stay as they are absent a compelling reason — awards the round to the Negative. Presumption is precisely the reason the burden of proof matters: silence loses for the side seeking change.",
        },
        {
          id: "debate-1-01-q3",
          type: "Judging",
          challenge: `  A judge is assigned a round on whether
  homework should be abolished. The judge
  personally hates homework.

  The Negative (keep homework) debates far
  better — more evidence, clearer answers.`,
          text: "How should the judge vote?",
          options: [
            "For the Affirmative — the judge already agrees homework is bad",
            "For the Negative — judges decide on comparative persuasion in the round, not personal opinion",
            "Abstain, because they are biased",
            "For whichever side spoke last",
          ],
          correctIndex: 1,
          explanation: "A core principle of judging is that the decision rests on comparative persuasion within the round, not the judge's outside opinion. A good judge brackets their personal view and asks only which side did the better debating. Here the Negative clearly out-debated, so the Negative wins — even though the judge personally dislikes homework. This is also why skilled debaters can win sides they personally disagree with.",
        },
        {
          id: "debate-1-01-q4",
          type: "Sides",
          challenge: `  Resolution: "Resolved: The United States
  should adopt a national high-speed rail
  network."

  A debater is assigned the Negative.`,
          text: "What is the Negative obligated to do in this round?",
          options: [
            "Propose a completely different topic they like better",
            "Argue against adopting the resolution and answer the Affirmative's case for it",
            "Agree with the Affirmative to seem reasonable",
            "Only attack the Affirmative's grammar and delivery",
          ],
          correctIndex: 1,
          explanation: "Both sides are bound to the same resolution. The Negative cannot swap topics; its job is to argue that the resolution should not be adopted and to directly answer (refute) the Affirmative's reasons for it. The Negative also benefits from presumption, but it still must engage the case — simply attacking delivery or staying silent abandons the burden of rejoinder and usually loses.",
        },
      ],
    },
  },

  // ─── debate-1-02: The Resolution ──────────────────────────────────────────────
  {
    epochId: "debate-1",
    wonder: {
      name: "The Roman Forum",
      location: "Rome, Italy",
      era: "Ancient",
      emoji: "⚖️",
    },
    id: "debate-1-02",
    order: 2,
    title: "Reading the Resolution",
    subtitle: "Fact, value, and policy — and the burden each demands",
    category: "arts",
    xp: 82,
    badge: { id: "debate-1-badge-02", name: "Resolution Reader", emoji: "📜" },
    challengeType: "quiz",
    info: {
      tagline: "Every word of the resolution is a promise about what you must prove — read it before you argue it.",
      year: -80,
      overview: [
        "The resolution is the sentence the entire debate orbits, and its type tells you what kind of proof is required. There are three classic types:\n- Fact — claims something is or is not true ('Resolved: Social media does more harm than good to teenagers').\n- Value — claims something is better, worse, just, or moral ('Resolved: A just society values liberty above equality').\n- Policy — claims an actor should take an action ('Resolved: The federal government should provide universal childcare').\nRecognizing the type is the first analytical move in any round.",
        "Each type carries a different burden:\n- Fact resolutions require empirical proof — evidence and reasoning about what is true.\n- Value resolutions require a standard of evaluation: you cannot argue 'better' without first establishing the criterion by which better is measured.\n- Policy resolutions require you to show a problem exists, that your plan solves it, and that solving it is worth the cost.\nA new debater who treats a value topic like a policy topic (or vice versa) will argue past the actual point of clash.",
        "The wording also defines the ground — the set of arguments each side legitimately gets to make. The Affirmative must defend the resolution as written, including signpost words like 'should' (which implies desirability, not certainty), 'on balance' (which invites weighing benefits against harms), and 'significantly' (which sets a threshold). The Negative gets the ground of opposing it. Disputes over what the words mean — definitions — are themselves a legitimate and common part of debate, especially when a term is ambiguous.",
      ],
      technical: {
        title: "Definitions, Ground, and Fair Interpretation",
        body: [
          "Because the resolution is argued by both sides, the Affirmative usually offers definitions of the key terms in their first speech to frame what the debate is about. These definitions must be reasonable — a definition so narrow or so broad that it leaves the Negative no ground to stand on is considered abusive, and the Negative can challenge it. The standard most judges apply is the 'reasonable person' interpretation: how would a thoughtful, informed person read this resolution?",
          "Signpost words quietly set the burden. 'Should' asks whether an action is desirable and workable, not whether it will certainly happen. 'On balance' explicitly tells you the judge will weigh good against bad, so a single benefit is not enough — you must show the benefits outweigh. 'Substantially' or 'significantly' sets a magnitude bar the Affirmative must clear. Reading these words closely tells you exactly what you must prove and what you can safely concede.",
        ],
        codeExample: {
          label: "Three Resolution Types and Their Burdens",
          code: `  TYPE      EXAMPLE                          MUST PROVE
  ───────   ──────────────────────────────   ──────────────
  FACT      "X does more harm than good"     what is TRUE
            → empirical evidence & reasoning

  VALUE     "Liberty is more important       what is BETTER
             than equality"                  → needs a CRITERION
            → establish the standard first,  to measure 'better'
              then argue under it

  POLICY    "The govt SHOULD do X"           a plan is WORTH IT
            → problem exists (harm)          → harm + solvency
            → plan solves it (solvency)        + advantages
            → benefits beat costs

  SIGNPOST WORDS RESET THE BURDEN:
   "should"      = desirable + workable (not certain)
   "on balance"  = weigh good vs. bad — net benefit
   "significant" = must clear a magnitude threshold`,
        },
      },
      incident: {
        title: "Cicero and the Power of Definition",
        when: "80 BCE — Roman courts and Senate",
        where: "The Roman Forum",
        impact: "Cicero, Rome's greatest advocate, won cases and shaped Senate policy by controlling how the question was framed — proving that whoever defines the terms of the debate is already winning it.",
        body: [
          "Marcus Tullius Cicero rose to power in the Roman Republic not as a general but as an orator, arguing cases in the Forum and motions in the Senate. His surviving speeches reveal a master of what debaters now call framing: before answering a charge, he would redefine what the case was really about. In defending a client, he would shift the question from 'did he do it?' to 'what kind of man is being accused, and who benefits from the accusation?' — moving the debate onto ground where he could win.",
          "Roman rhetorical education formalized this into 'stasis theory' — a system for identifying the precise point of disagreement in any dispute: is it a question of fact (did it happen?), definition (what do we call it?), quality (was it justified?), or jurisdiction (is this the right venue?). This is essentially the same analysis a modern debater performs when classifying a resolution as fact, value, or policy. Two thousand years before the first high school tournament, Roman students were taught that you cannot argue well until you know exactly what is in dispute — the lesson at the heart of reading a resolution.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Resolution", sub: "every word is a clue", type: "attacker" },
          { label: "Classify the Type", sub: "fact / value / policy", type: "system" },
          { label: "Identify the Burden", sub: "what must be proven", type: "victim" },
          { label: "Define the Terms", sub: "frame the ground fairly", type: "result" },
        ],
      },
      timeline: [
        { year: -80, event: "Cicero begins his career arguing cases by controlling definitions in the Roman Forum", highlight: true },
        { year: -55, event: "Cicero's 'De Oratore' codifies the orator's analysis of the question in dispute" },
        { year: 1900, event: "American academic debate adopts annual policy resolutions for intercollegiate competition" },
        { year: 1980, event: "Lincoln-Douglas debate formalizes value resolutions with explicit value/criterion structure" },
        { year: 2005, event: "Public Forum debate launches with accessible, topical 'on balance' resolutions" },
        { year: 2024, event: "NSDA releases monthly Public Forum and bimonthly LD resolutions to a national circuit" },
      ],
      keyTakeaways: [
        "Resolutions come in three types — fact (what is true), value (what is better), and policy (what should be done)",
        "Each type sets a different burden: facts need evidence, values need a criterion, policies need harm + solvency",
        "Signpost words like 'should', 'on balance', and 'significantly' silently define exactly what you must prove",
        "The Affirmative usually defines key terms; definitions must be reasonable or the Negative can challenge them",
      ],
      references: [
        { title: "NSDA: Types of Debate Resolutions", url: "https://www.speechanddebate.org/competition-events/" },
        { title: "Cicero, De Oratore (Perseus Digital Library)", url: "http://www.perseus.tufts.edu/" },
        { title: "Stasis Theory in Classical Rhetoric (Purdue OWL)", url: "https://owl.purdue.edu/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-1-02-q1",
          type: "Resolution Type",
          challenge: `  "Resolved: The federal government should
   significantly increase its investment in
   renewable energy."

  A debater starts by listing scientific facts
  about climate change but never explains what
  the government should DO or whether it's worth
  the cost.`,
          text: "What type of resolution is this, and what is the debater failing to do?",
          options: [
            "A fact resolution — facts are all that is needed",
            "A policy resolution — they must show a problem, that the plan solves it, and that it is worth the cost, not just cite facts",
            "A value resolution — they only need a moral criterion",
            "It has no type, so any argument works",
          ],
          correctIndex: 1,
          explanation: "The word 'should' plus a government actor and an action ('increase investment') make this a policy resolution. Citing climate facts establishes a harm, but a policy case also requires solvency (the plan actually addresses the problem) and a weighing of benefits against costs. By stopping at facts, the debater has done one-third of the job and left the plan and its cost-benefit unproven.",
        },
        {
          id: "debate-1-02-q2",
          type: "Value & Criterion",
          challenge: `  "Resolved: A just society ought to value
   rehabilitation over retribution in its
   justice system."

  The Affirmative argues rehabilitation reduces
  reoffending — but never says what makes a
  society 'just'.`,
          text: "What essential element is missing from this value debate?",
          options: [
            "Nothing — lower reoffending automatically proves justice",
            "A criterion — a standard defining what 'just' means, against which 'better' is measured",
            "A government plan with funding details",
            "Cross-examination questions",
          ],
          correctIndex: 1,
          explanation: "Value resolutions turn on a criterion (also called a value premise or standard) — the measuring stick for the central value. Here the central value is 'justice', and the Affirmative must define what makes a society just (e.g., maximizing social welfare, protecting dignity) before they can show rehabilitation serves it. Lower reoffending is evidence, but without a criterion it floats free: the judge has no standard by which to call one approach more 'just' than the other.",
        },
        {
          id: "debate-1-02-q3",
          type: "Signpost Words",
          challenge: `  "Resolved: On balance, social media has done
   more harm than good to democracy."

  The Affirmative proves social media spreads
  some misinformation and stops there.`,
          text: "Why might this be insufficient given the wording?",
          options: [
            "It is fully sufficient — any harm proves the resolution",
            "'On balance' requires weighing harms against benefits and showing harms outweigh, not just naming one harm",
            "The word 'democracy' makes the topic off-limits",
            "Social media topics cannot be debated",
          ],
          correctIndex: 1,
          explanation: "'On balance' is a signpost that explicitly tells you the judge weighs the good against the bad and asks which is greater. Proving social media spreads some misinformation establishes a harm, but the Negative will list benefits (mobilization, access to information, civic connection). To win an 'on balance' resolution, the Affirmative must show the harms outweigh the benefits — a comparative claim, not a single example.",
        },
        {
          id: "debate-1-02-q4",
          type: "Definitions",
          challenge: `  Resolution uses the word "weapons."

  The Affirmative defines "weapons" so narrowly
  — "only intercontinental ballistic missiles" —
  that the Negative has almost nothing left to
  argue about.`,
          text: "How should the Negative respond to this definition?",
          options: [
            "Accept it silently — the Affirmative always controls definitions",
            "Challenge it as unreasonable/abusive and offer a fair 'reasonable person' definition that preserves debatable ground",
            "Forfeit the round",
            "Redefine the topic to something unrelated",
          ],
          correctIndex: 1,
          explanation: "While the Affirmative typically offers definitions, those definitions must be reasonable and leave both sides fair ground. A definition engineered to be so narrow that the Negative has nothing to contest is considered abusive. The Negative can challenge it directly, argue the 'reasonable person' interpretation of 'weapons', and ask the judge to prefer the fairer definition. Definition debates are a legitimate, common layer of clash — not something to ignore.",
        },
      ],
    },
  },

  // ─── debate-1-03: Claim, Warrant, Impact ──────────────────────────────────────
  {
    epochId: "debate-1",
    wonder: {
      name: "Lincoln–Douglas Debate Site",
      location: "Ottawa, Illinois",
      era: "19th Century",
      emoji: "🤝",
    },
    id: "debate-1-03",
    order: 3,
    title: "Claim, Warrant, Impact",
    subtitle: "The anatomy of a single complete argument",
    category: "arts",
    xp: 85,
    badge: { id: "debate-1-badge-03", name: "Argument Architect", emoji: "🧱" },
    challengeType: "quiz",
    info: {
      tagline: "An assertion is not an argument — until you add the reason it's true and why it matters.",
      year: 1858,
      overview: [
        "The atom of debate is the argument, and a complete argument has three parts:\n- Claim — the statement you want the judge to accept ('A higher minimum wage reduces poverty').\n- Warrant — the reasoning or evidence that proves the claim ('because workers earning more can afford necessities, and studies X and Y show poverty fell after wage increases').\n- Impact — why the claim matters to the round ('therefore the Affirmative's plan should be adopted because reducing poverty is the central goal we agreed to weigh').\nDrop any one part and the argument is incomplete.",
        "New debaters almost always make the same mistake: they state claims without warrants. 'This policy is bad' is a claim. It is worthless until you say why it is bad and how you know. The warrant is the 'because' — the logical link or the cited evidence that gives the judge a reason to believe you. A round is won by the side whose claims have the strongest warrants, not the side with the most claims. One fully warranted argument beats five bare assertions.",
        "The impact is what separates good debaters from merely organized ones. Even a true, well-warranted claim is useless if it doesn't connect to why you win. The impact answers the judge's silent question: 'so what?' It links your argument back to the burden or the weighing standard — showing that if the judge believes you, they must vote for you. Strong debaters explicitly impact every argument: they never leave the judge to guess why a point matters.",
      ],
      technical: {
        title: "Building and Stress-Testing an Argument",
        body: [
          "To build an argument, write the claim, then force yourself to complete the sentence 'this is true because…' (the warrant), then 'and this matters because…' (the impact). If you cannot complete both sentences, you do not yet have an argument — you have an opinion. This three-part test is also how you attack the other side: a refutation can deny the claim, sever the warrant ('their evidence doesn't actually show that'), or minimize the impact ('even if true, it barely matters').",
          "Warrants come in two flavors. Empirical warrants rest on evidence — data, studies, expert testimony, historical examples. Analytical warrants rest on reasoning — logic, principle, cause-and-effect that the judge can follow without a citation. The strongest arguments combine both: a logical mechanism explaining why something should be true, plus evidence confirming it is. Relying only on evidence leaves you helpless when the other side has a counter-study; relying only on logic leaves you vulnerable to 'where's your proof?'",
        ],
        codeExample: {
          label: "The Claim–Warrant–Impact Structure",
          code: `  ┌──────────────────────────────────────────┐
  │ CLAIM    What you want the judge to accept │
  │          "Raising the wage cuts poverty."  │
  ├──────────────────────────────────────────┤
  │ WARRANT  WHY it's true (reason + evidence) │
  │          "Higher pay buys necessities;     │
  │           Dube 2019 found poverty fell."   │
  ├──────────────────────────────────────────┤
  │ IMPACT   WHY it matters to the round       │
  │          "Poverty is the harm we weigh —   │
  │           so this is a reason to AFFIRM."   │
  └──────────────────────────────────────────┘

  THREE WAYS TO ATTACK ANY ARGUMENT:
   1. Deny the CLAIM   ("that's false, here's why")
   2. Sever the WARRANT("evidence doesn't show that")
   3. Minimize IMPACT  ("even if true — so what?")`,
        },
      },
      incident: {
        title: "Lincoln, Douglas, and the Warranted Argument",
        when: "1858 — Illinois Senate campaign",
        where: "Seven towns across Illinois",
        impact: "The seven Lincoln-Douglas debates of 1858 became the American model of sustained, two-sided argument because each man did more than assert positions — he built warranted cases and forced his opponent to answer them.",
        body: [
          "In 1858, Abraham Lincoln and Stephen Douglas held seven debates across Illinois over the expansion of slavery into new territories. Each debate ran three hours: one man spoke for sixty minutes, the other answered for ninety, and the first replied for thirty. With no microphones and no soundbites, the format demanded sustained reasoning — a speaker could not survive on slogans for ninety minutes. Each had to state claims, supply warrants (constitutional arguments, moral principles, historical precedent), and impact them to the question of the nation's future.",
          "Lincoln's power lay in the structure of his arguments. He did not merely assert that slavery was wrong; he built warranted chains — that the Declaration's principle of equality applied to all, that allowing slavery's expansion contradicted that principle, and that the consequence was a house divided that could not stand. The modern competitive format named after these debates, Lincoln-Douglas, preserves their core lesson: a position is only as strong as the reasoning beneath it, and the debater who warrants and impacts every claim controls the round.",
        ],
      },
      diagram: {
        nodes: [
          { label: "State the Claim", sub: "what to accept", type: "attacker" },
          { label: "Supply the Warrant", sub: "reason + evidence", type: "system" },
          { label: "Explain the Impact", sub: "why it matters", type: "victim" },
          { label: "Argument Lands", sub: "judge has a reason to vote", type: "result" },
        ],
      },
      timeline: [
        { year: 1858, event: "The Lincoln-Douglas debates model sustained, warranted two-sided argument", highlight: true },
        { year: 1958, event: "Stephen Toulmin's 'The Uses of Argument' formalizes claim-data-warrant structure" },
        { year: 1971, event: "Competitive Lincoln-Douglas debate is named for the 1858 model" },
        { year: 1990, event: "The claim-warrant-impact heuristic becomes standard in U.S. debate coaching" },
        { year: 2010, event: "Impact calculus (weighing) becomes a central judged criterion in policy and PF" },
        { year: 2024, event: "Claim-warrant-impact is taught as the first lesson in most novice debate curricula" },
      ],
      keyTakeaways: [
        "A complete argument has three parts: claim (what), warrant (why it's true), and impact (why it matters)",
        "An assertion without a warrant is just an opinion — the 'because' is what gives the judge a reason to believe",
        "Always impact your arguments: connect them back to the burden or weighing standard so the judge knows why you win",
        "Attack any argument three ways — deny the claim, sever the warrant, or minimize the impact",
      ],
      references: [
        { title: "Stephen Toulmin, The Uses of Argument (overview)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/historical_perspectives_on_argumentation/toulmin_argument.html" },
        { title: "NSDA: Building an Argument", url: "https://www.speechanddebate.org/" },
        { title: "The Lincoln-Douglas Debates of 1858 (Library of Congress)", url: "https://www.loc.gov/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-1-03-q1",
          type: "Argument Anatomy",
          challenge: `  A debater says, with great confidence:

    "Banning single-use plastics is a terrible
     idea. Trust me, it's just bad policy."

  The judge writes a note.`,
          text: "What is missing from this statement?",
          options: [
            "Nothing — confidence is what persuades judges",
            "The warrant and impact — there is a claim but no reason it's true and no explanation of why it matters",
            "A louder delivery",
            "More claims like it",
          ],
          correctIndex: 1,
          explanation: "'It's just bad policy, trust me' is a bare claim. It has no warrant (no reason or evidence showing why the ban is bad) and no impact (no link to why that should decide the round). Confidence and repetition do not fill those gaps. The judge has been given nothing to believe. One fully warranted, impacted argument would beat a dozen assertions like this.",
        },
        {
          id: "debate-1-03-q2",
          type: "Warrants",
          challenge: `  Affirmative argument:

    CLAIM:   "School start times should be later."
    WARRANT: "Because teenage circadian rhythms
              shift later; the AAP (2014) links
              early starts to sleep deprivation."
    IMPACT:  ???`,
          text: "What should the debater add to complete this argument?",
          options: [
            "Nothing — the warrant already proves the case",
            "An impact connecting sleep deprivation to why the judge should vote Affirmative (e.g., harms to health and learning we agreed to weigh)",
            "A second unrelated claim",
            "A definition of 'school'",
          ],
          correctIndex: 1,
          explanation: "The claim and warrant are solid, but the argument stops before the impact — the 'so what?' The debater must connect sleep deprivation to the standard the round is weighed on: harms to adolescent health, safety, and academic performance, and therefore a reason to affirm later start times. Without that link, the judge knows the warrant is true but not why it decides the ballot.",
        },
        {
          id: "debate-1-03-q3",
          type: "Refutation",
          challenge: `  Opponent's argument:
    CLAIM:   "Nuclear power is too dangerous."
    WARRANT: "Chernobyl and Fukushima caused
              disasters."

  You believe nuclear is among the safest energy
  sources per unit of electricity.`,
          text: "Which is the strongest way to attack this argument?",
          options: [
            "Only say 'I disagree' loudly",
            "Sever the warrant: show two anomalous accidents don't represent modern reactor safety, and cite deaths-per-TWh data showing nuclear is among the safest",
            "Ignore it and make your own unrelated point",
            "Concede it entirely",
          ],
          correctIndex: 1,
          explanation: "The opponent's warrant is two cherry-picked disasters. The strongest refutation severs that warrant — showing the evidence doesn't support the general claim — by noting these are rare, dated events and presenting deaths-per-terawatt-hour data where nuclear ranks among the safest sources. This attacks the reasoning directly rather than trading bare assertions. You could additionally minimize the impact, but severing the faulty warrant with counter-evidence is the decisive move.",
        },
        {
          id: "debate-1-03-q4",
          type: "Warrant Types",
          challenge: `  Two debaters defend the same claim:

   Debater A: cites three studies (evidence) but
              can't explain WHY the effect happens.
   Debater B: explains the logical mechanism but
              has no data.`,
          text: "What does the ideal argument do?",
          options: [
            "Use only evidence — data always beats logic",
            "Use only logic — reasoning always beats data",
            "Combine both: a logical mechanism explaining why it's true, plus evidence confirming that it is",
            "Use neither and rely on delivery",
          ],
          correctIndex: 2,
          explanation: "Warrants are strongest when empirical and analytical reasoning combine. Debater A is vulnerable to a counter-study because they can't explain the mechanism; Debater B is vulnerable to 'where's your proof?' The ideal argument pairs a clear causal mechanism (why this should be true) with evidence (data confirming it is), so it survives both 'that's not logical' and 'that's not proven' attacks.",
        },
      ],
    },
  },

  // ─── debate-1-04: Evidence and Sources ────────────────────────────────────────
  {
    epochId: "debate-1",
    wonder: {
      name: "The British Library Reading Room",
      location: "London, England",
      era: "Modern",
      emoji: "📚",
    },
    id: "debate-1-04",
    order: 4,
    title: "Evidence and Sources",
    subtitle: "Finding it, citing it, and judging whether it's any good",
    category: "arts",
    xp: 85,
    badge: { id: "debate-1-badge-04", name: "Evidence Hound", emoji: "🔍" },
    challengeType: "quiz",
    info: {
      tagline: "Evidence is borrowed credibility — and a judge can tell the difference between a study and a stranger's blog.",
      year: 1973,
      overview: [
        "Evidence is the material a debater uses to prove a warrant:\n- statistics\n- peer-reviewed studies\n- expert testimony\n- government reports\n- historical examples\n- credible journalism\nIts purpose is to convert 'I say so' into 'a knowledgeable, neutral source says so', borrowing the source's credibility. But not all evidence is equal, and a central skill of debate is evaluating quality — because a confident claim backed by a random website loses to a modest claim backed by a peer-reviewed study.",
        "Three questions test any piece of evidence:\n- Who said it? — a domain expert or institution beats an anonymous or partisan source.\n- When? — recent data beats stale data on fast-moving topics; a 2009 internet statistic is nearly worthless today.\n- How do they know? — a study with a method and a sample beats an assertion; primary research beats someone summarizing someone else.\nA debater who can ask these three out loud in a round can dismantle weak evidence and protect strong evidence.",
        "Honesty about evidence is non-negotiable, and several moves count as evidence-ethics violations that can disqualify a debater from a tournament:\n- Quoting a source out of context.\n- Inventing statistics.\n- Clipping a quote so it appears to say the opposite of the author's meaning.\n- Fabricating a citation.\nDebate treats evidence as a shared trust: you may interpret and spin, but you may never misrepresent what a source actually says. Cite cleanly — author, qualification, date, source — to both prove your case and protect your integrity.",
      ],
      technical: {
        title: "Citing Evidence and the CRAAP Test",
        body: [
          "A clean spoken citation gives the judge enough to weigh and verify the evidence: the author and their qualification, the publication, and the date — for example, 'Dr. Arindrajit Dube, economist at UMass Amherst, in a 2019 peer-reviewed study, found that…' This takes three seconds and dramatically increases how much weight a judge gives the card. Vague citation ('studies show', 'experts say', 'I read somewhere') invites the opponent to ask 'which study? which expert?' — and you should ask exactly that when they do it to you.",
          "Librarians teach the CRAAP test for source quality:\n- Currency (how recent)\n- Relevance (does it actually address the point)\n- Authority (who wrote it and are they qualified)\n- Accuracy (is it supported and verifiable)\n- Purpose (is the source trying to inform or to sell/persuade)\nIn a round you rarely have time to recite all five, but internalizing them lets you instantly spot the weakest source on the flow and target it: 'their only evidence is a 2008 op-ed from an advocacy group — prefer our 2023 government dataset.'",
        ],
        codeExample: {
          label: "Evidence Quality — The Three Questions + CRAAP",
          code: `  THREE FAST QUESTIONS FOR ANY EVIDENCE:
   1. WHO said it?  expert/institution > anonymous/partisan
   2. WHEN?         recent > stale (esp. fast topics)
   3. HOW do they know?  study w/ method > bare assertion

  THE CRAAP TEST (source evaluation):
   C - Currency    : how recent is it?
   R - Relevance   : does it address THIS point?
   A - Authority   : who wrote it; are they qualified?
   A - Accuracy    : is it supported & verifiable?
   P - Purpose     : inform, or sell/persuade?

  CLEAN SPOKEN CITATION:
   "[Author], [qualification], in [source], [date],
    found that [claim]."
   → bad: "studies show..."  (which study?)

  ⚠ NEVER misrepresent a source — evidence ethics
    violations can DQ you from a tournament.`,
        },
      },
      incident: {
        title: "When a Fabricated Card Ends a Career",
        when: "Ongoing — modern tournament circuit",
        where: "U.S. high school and collegiate debate",
        impact: "Competitive debate enforces evidence ethics so strictly that a single fabricated or distorted card — a miscited statistic, a clipped quote — can cause a team to lose the round, the tournament, and their reputation, because the entire activity depends on trusting that quoted evidence is real.",
        body: [
          "Modern competitive debate, especially policy and Public Forum, runs on 'cards' — quoted excerpts of evidence read aloud and exchanged with opponents. Because rounds move fast and judges can request to read the actual evidence, the circuit has developed firm norms: evidence must be quoted accurately, in context, with a real citation, and the full source must be available on request. Tournaments publish evidence ethics rules, and violations — fabricating a quote, clipping text to reverse its meaning, mis-citing a source's qualifications — are grounds for losing the round automatically and, at the national level, removal from the tournament.",
          "This strictness exists for a reason: the activity teaches research integrity as a competitive skill. A debater who learns that distorting a source carries real, immediate consequences carries that habit into journalism, law, science, and policy. The lesson is the inverse of the cynical view that debate teaches people to argue any side dishonestly — at its best, it trains the opposite: argue any side you're assigned, but never lie about your evidence. The card you read must say what you claim it says.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Find a Source", sub: "study, expert, report", type: "attacker" },
          { label: "Test Its Quality", sub: "who / when / how known", type: "system" },
          { label: "Cite It Cleanly", sub: "author, qual, date, source", type: "victim" },
          { label: "Borrowed Credibility", sub: "claim now carries weight", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Intercollegiate debate adopts evidence-based argumentation on annual policy topics" },
        { year: 1973, event: "Cross-examination debate (CEDA) heightens emphasis on evidence quality and clash", highlight: true },
        { year: 2004, event: "Online evidence and 'card cutting' transform research speed and volume in policy debate" },
        { year: 2010, event: "The CRAAP test is widely adopted in school libraries for source evaluation" },
        { year: 2016, event: "Misinformation and 'fake news' make source-evaluation skills a public priority" },
        { year: 2024, event: "AI-generated text raises new evidence-verification challenges for tournaments" },
      ],
      keyTakeaways: [
        "Evidence borrows a credible source's authority to prove your warrant — but only if the source is actually credible",
        "Test any evidence with three questions: who said it, when, and how do they know?",
        "Cite cleanly — author, qualification, date, source — vague 'studies show' invites the challenge 'which study?'",
        "Never misrepresent a source: evidence ethics violations can lose the round and the tournament",
      ],
      references: [
        { title: "NSDA: Evidence Rules and Ethics", url: "https://www.speechanddebate.org/competition-rules/" },
        { title: "The CRAAP Test (Meriam Library, CSU Chico)", url: "https://library.csuchico.edu/help/source-or-information-good" },
        { title: "Evaluating Sources (Purdue OWL)", url: "https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources_of_information/index.html" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-1-04-q1",
          type: "Source Quality",
          challenge: `  Two debaters cite evidence on vaccine safety:

   Debater A: "A 2023 meta-analysis in The Lancet
              of 2 million patients found no link."
   Debater B: "A blog post I found last night says
              they're dangerous."`,
          text: "Whose evidence should the judge weigh more heavily, and why?",
          options: [
            "Debater B — newer-sounding and more dramatic",
            "Debater A — a recent peer-reviewed meta-analysis with a huge sample from an authoritative journal beats an anonymous blog",
            "They are equal — both are 'evidence'",
            "Neither counts unless read in full",
          ],
          correctIndex: 1,
          explanation: "Apply the three questions. Who: a peer-reviewed journal (The Lancet) vs. an anonymous blogger — authority favors A. When: both recent. How do they know: a meta-analysis of 2 million patients (rigorous method, huge sample) vs. an unsupported assertion. On every axis, A's evidence is stronger. Calling both 'evidence' ignores that quality is exactly what a debater must evaluate — and the judge should be told why A is preferable.",
        },
        {
          id: "debate-1-04-q2",
          type: "Citation",
          challenge: `  A debater repeatedly says "studies show" and
  "experts agree" but never names a single study
  or expert.

  You are the opponent.`,
          text: "What is the most effective response?",
          options: [
            "Match them by also saying 'studies show' without citations",
            "Directly ask/point out: which study? which expert? — and note that uncited claims should carry little weight against your specific, cited evidence",
            "Concede the point to be polite",
            "Object that citations are not allowed",
          ],
          correctIndex: 1,
          explanation: "'Studies show' with no citation is unverifiable and invites exactly one response: which study, by whom, when? Pressing for the citation exposes that there may be none, and you ask the judge to give vague, uncited claims little weight relative to your specific evidence (named author, date, source). Matching their vagueness would forfeit your advantage; the whole point is that your clean citation beats their hand-waving.",
        },
        {
          id: "debate-1-04-q3",
          type: "Evidence Ethics",
          challenge: `  A source actually says: "While early results are
  promising, the policy failed to reduce crime in
  the long term."

  A debater reads only: "early results are
  promising" — to claim the source supports the
  policy working.`,
          text: "What has the debater done?",
          options: [
            "Nothing wrong — selective quoting is just strategy",
            "Committed an evidence ethics violation by clipping the quote to reverse the source's actual conclusion",
            "Made a minor stylistic choice with no consequences",
            "Improved the evidence",
          ],
          correctIndex: 1,
          explanation: "The source's conclusion is that the policy failed long-term; clipping it to read only 'early results are promising' misrepresents what the author actually concluded. That is a clear evidence ethics violation — the same category as fabrication — and in many tournaments it can lose the round automatically. You may interpret and emphasize, but you may never quote a source so as to reverse its meaning. The card must say what you claim it says.",
        },
        {
          id: "debate-1-04-q4",
          type: "Currency",
          challenge: `  Topic: "Internet access is now a basic human
  necessity."

  A debater's key statistic on global internet
  usage is from a 2007 report.`,
          text: "What is the problem, and how would you exploit it?",
          options: [
            "No problem — old data is just as good",
            "On a fast-moving topic the 2007 figure is badly outdated; point this out and prefer current data, since usage has changed enormously since then",
            "The statistic is illegal to use",
            "You must use the same 2007 report to be fair",
          ],
          correctIndex: 1,
          explanation: "Currency (the C in CRAAP) matters most on fast-moving topics, and internet usage is one of the fastest. A 2007 statistic predates the smartphone era and is nearly worthless for describing today's reality. The right move is to flag the staleness and present current data, asking the judge to prefer recent evidence. Old evidence isn't automatically disqualified, but on a topic this dynamic, recency is decisive.",
        },
      ],
    },
  },

  // ─── debate-1-05: Flowing ─────────────────────────────────────────────────────
  {
    epochId: "debate-1",
    wonder: {
      name: "The Oxford Union",
      location: "Oxford, England",
      era: "Modern",
      emoji: "✍️",
    },
    id: "debate-1-05",
    order: 5,
    title: "Flowing the Round",
    subtitle: "The note-taking system that lets you track every argument",
    category: "arts",
    xp: 85,
    badge: { id: "debate-1-badge-05", name: "The Flow Master", emoji: "📝" },
    challengeType: "quiz",
    info: {
      tagline: "You cannot answer an argument you didn't write down — flowing is how debaters never lose the thread.",
      year: 1823,
      overview: [
        "Flowing is the specialized note-taking system debaters use to track every argument through an entire round. Unlike ordinary notes, a flow is organized in vertical columns — one per speech — so that each argument and its responses line up horizontally across the page. This lets you see, at a glance, the entire life of an argument: where it was introduced, how the other side answered it, how it was extended, and whether anyone dropped it. A debater who flows well never says 'they didn't respond to…' when the other side actually did — and never misses that the other side ignored their best point.",
        "The mechanics of flowing:\n- Turn the paper sideways (landscape) and divide it into columns, one for each speech (e.g., 1AC, 1NC, 2AC, 2NC…).\n- As each speaker talks, write their arguments in their column, aligned with the argument they're answering in the previous column.\n- Keep Affirmative and Negative arguments on separate sheets, so each 'flow' tracks one line of clash from start to finish.\n- Write fast — abbreviations and symbols — capturing the structure (claim/warrant/impact) rather than every word.",
        "The payoff of flowing is the line-by-line:\n- In your rebuttal, go down the flow argument by argument, answering each one.\n- Point out which of your arguments the opponent dropped — dropped arguments are conceded as true and become some of your strongest weapons.\n- You cannot do any of this from memory in a fast round; the flow is your map.\nCoaches say it bluntly: 'if it's not on your flow, it didn't happen.' Learning to flow is the difference between reacting and actually debating.",
      ],
      technical: {
        title: "Flow Shorthand and the Line-by-Line",
        body: [
          "Debaters develop personal shorthand to keep up:\n- arrows for cause/effect (→)\n- abbreviations (govt, econ, w/, b/c)\n- symbols for common moves (a circled argument = extend it; a struck-through one = it was answered or dropped)\nYou don't transcribe — you capture the skeleton: the tag (a short label for the argument), the source/warrant, and the impact. Speed comes from writing structure, not sentences. Many debaters now flow on laptops in spreadsheet columns, but the column logic is identical to paper.",
          "The line-by-line is the discipline of answering arguments in order, where they appear on the flow, rather than giving a vague 'overview' that floats free of the specific clash. A strong rebuttal sounds like: 'On their first contention — they say X; first, that's non-unique because…; second, even if true, we outweigh because…; and extend our turn, which they dropped.' Flowing makes this possible because every argument has a fixed place on the page, and you can literally see what has and hasn't been answered.",
        ],
        codeExample: {
          label: "A Flow — Columns Track Arguments Across Speeches",
          code: `  (paper turned sideways — one column per speech)

   1AC (Aff)      1NC (Neg)       2AC (Aff)
   ──────────     ──────────      ──────────
   C1: Econ  ───► "no link,    ─► "extend our
   growth         growth          Dube card —
   ↑ jobs         hurts          they dropped
   [Dube '19]     environ."       the warrant"
                                   ✓ CONCEDED
   C2: Health ──► (no answer!) ─► "they DROPPED
   ↓ poverty                       C2 — flows
   [Lancet]        ✗ DROPPED       Aff, extend"

  KEY MOVES:
   ✓ = argument extended/winning
   ✗ DROPPED = no response → conceded as TRUE
   ───► = answered in the next column

  RULE: "If it's not on your flow, it didn't happen."`,
        },
      },
      incident: {
        title: "The Oxford Union and the Discipline of Listening",
        when: "1823 — founding of the Oxford Union",
        where: "Oxford, England",
        impact: "The world's most famous debating society built its reputation not on speaking alone but on the expectation that members track and answer one another's arguments — the same listening discipline that flowing formalizes.",
        body: [
          "Founded in 1823, the Oxford Union became the most famous debating society in the world, hosting prime ministers, presidents, and provocateurs in its chamber. Its enduring lesson is that great debate is as much about listening as speaking: a Union speaker who ignores what came before and simply delivers a prepared oration is considered to have failed, however eloquent. The chamber rewards those who pick up the previous speakers' points, concede what must be conceded, and dismantle the rest — responsive argument, not parallel monologue.",
          "Competitive debate turned that listening discipline into a tool: the flow. Where a Union orator tracks arguments in their head, a tournament debater tracks them on paper or screen so nothing is lost in a round moving far faster than parliamentary speech. The principle is identical and ancient — you owe your opponent an answer, and you cannot answer what you did not hear. Flowing is simply the engineering that makes rigorous listening possible at speed. The best debaters are, first, the best listeners.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Speaker Argues", sub: "claim / warrant / impact", type: "attacker" },
          { label: "You Flow It", sub: "shorthand, in its column", type: "system" },
          { label: "Track the Clash", sub: "answers line up across", type: "victim" },
          { label: "Line-by-Line", sub: "answer each, spot the drops", type: "result" },
        ],
      },
      timeline: [
        { year: 1823, event: "The Oxford Union is founded, institutionalizing responsive parliamentary debate", highlight: true },
        { year: 1950, event: "American policy debate develops the columnar 'flow' to track fast multi-argument rounds" },
        { year: 1980, event: "Flow shorthand and symbol conventions become standardized in U.S. coaching" },
        { year: 2008, event: "Laptop flowing in spreadsheet software spreads across the policy circuit" },
        { year: 2020, event: "Online debate (NSDA Campus) makes digital flowing the norm for many events" },
        { year: 2024, event: "Flowing is taught in the first weeks of nearly every novice debate program" },
      ],
      keyTakeaways: [
        "Flowing is columnar note-taking — one column per speech — so arguments and their answers line up horizontally",
        "Write structure, not sentences: capture the tag, warrant, and impact in fast shorthand and symbols",
        "Dropped arguments (unanswered points) are conceded as true — the flow is how you spot and exploit them",
        "The line-by-line answers arguments in order on the flow; 'if it's not on your flow, it didn't happen'",
      ],
      references: [
        { title: "NSDA: How to Flow a Debate", url: "https://www.speechanddebate.org/" },
        { title: "The Oxford Union Society — History", url: "https://oxford-union.org/" },
        { title: "Flowing Guide (Stanford National Forensic Institute resources)", url: "https://snfi.stanford.edu/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-1-05-q1",
          type: "Why Flow",
          challenge: `  A novice debater listens to a fast round
  without writing anything down, trusting memory.
  In rebuttal, they say "they didn't answer our
  economy argument" — but the opponent clearly did.

  The judge frowns.`,
          text: "What went wrong, and how does flowing fix it?",
          options: [
            "Nothing — memory is sufficient in fast rounds",
            "Without a flow they lost track of what was answered; a flow lines up each argument with its response so you can see exactly what was and wasn't addressed",
            "They should have spoken faster",
            "Flowing only matters for the judge, not the debater",
          ],
          correctIndex: 1,
          explanation: "Claiming an argument was dropped when it wasn't destroys your credibility with the judge — and it happens whenever you rely on memory in a fast round. The flow fixes this by aligning every argument with its responses across columns, so you can literally see whether something was answered. Flowing isn't optional note-taking; it's the instrument that lets you make accurate claims about the state of the debate.",
        },
        {
          id: "debate-1-05-q2",
          type: "Dropped Arguments",
          challenge: `  On your flow, your second contention has a clean
  column beneath it in the opponent's speech —
  completely blank. They never mentioned it.`,
          text: "What does a 'blank column' (a dropped argument) mean, and what do you do?",
          options: [
            "It means nothing; ignore it",
            "The argument was dropped — treated as conceded/true — so extend it and weigh it as a reason you win",
            "You must drop it too, to be fair",
            "It means the judge didn't hear it",
          ],
          correctIndex: 1,
          explanation: "An argument the other side fails to answer is 'dropped' and is treated as conceded — the judge accepts it as true. That makes dropped arguments among your most powerful tools: you extend the conceded argument ('they dropped our second contention, so it stands') and weigh it as a clean reason to vote for you. Spotting blank columns is one of the main reasons you flow.",
        },
        {
          id: "debate-1-05-q3",
          type: "Flow Mechanics",
          challenge: `  A debater tries to flow by writing every word
  the speaker says in full sentences, left to
  right like a paragraph.

  They fall hopelessly behind within 30 seconds.`,
          text: "What is the correct way to flow?",
          options: [
            "Write even faster in full sentences",
            "Turn the page sideways into columns, write only the structure (tag, warrant, impact) in shorthand and symbols, aligned by argument",
            "Only write the conclusion of each speech",
            "Record audio instead and never take notes",
          ],
          correctIndex: 1,
          explanation: "Transcribing full sentences is impossible at debate speed. Flowing uses landscape columns (one per speech) and captures only the skeleton — a short tag, the warrant, the impact — in personal shorthand and symbols, aligned horizontally with the argument being answered. Writing structure rather than sentences is what makes it fast enough to keep up while still capturing everything you need to answer.",
        },
        {
          id: "debate-1-05-q4",
          type: "Line-by-Line",
          challenge: `  In rebuttal, Debater A gives a vague, emotional
  speech about 'the big picture' that never
  references specific arguments.

  Debater B goes down the flow: "On their C1,
  two responses... On their C2, they dropped our
  turn, extend it..."`,
          text: "Why is Debater B's approach generally more effective?",
          options: [
            "It isn't — emotional overviews always win",
            "The line-by-line answers each argument where it lives on the flow, so the judge can track exactly who is winning each point; vague overviews leave clash unresolved",
            "Because B spoke louder",
            "Because judges dislike organization",
          ],
          correctIndex: 1,
          explanation: "The line-by-line walks the flow argument by argument, resolving each specific point of clash and flagging drops and extensions. This gives the judge a clear, trackable picture of who won each line. A vague 'big picture' overview floats free of the actual arguments, leaving the clash unresolved — the judge is left to reconstruct the debate themselves. Overviews have their place for framing, but they don't substitute for answering the line-by-line.",
        },
      ],
    },
  },

  // ─── debate-1-06: Speaker Roles and Speech Order ──────────────────────────────
  {
    epochId: "debate-1",
    wonder: {
      name: "U.S. House of Representatives",
      location: "Washington, D.C.",
      era: "Modern",
      emoji: "🗳️",
    },
    id: "debate-1-06",
    order: 6,
    title: "Speaker Roles and Speech Order",
    subtitle: "Constructives, rebuttals, prep time, and who does what",
    category: "arts",
    xp: 85,
    badge: { id: "debate-1-badge-06", name: "Floor Recognized", emoji: "🗳️" },
    challengeType: "quiz",
    info: {
      tagline: "Every speech in a debate has a job — and a debater who knows their job wins rounds the disorganized lose.",
      year: 1789,
      overview: [
        "Debate speeches come in two families:\n- Constructives — the early speeches, where new arguments are built and each side presents its case.\n- Rebuttals — where arguments are answered, extended, and weighed; generally no brand-new arguments, because the other side would have no chance to respond.\nUnderstanding this division prevents the classic novice error of saving a great argument for the last speech, where the judge disregards it as unfair 'new in the rebuttal.'",
        "Speeches alternate between the sides in a fixed order set by the format, and each has a defined role. In a typical two-person format:\n- The first speaker presents the case and handles the early clash.\n- The second speaker deepens the rebuttal and begins weighing.\n- The final speech (the 'final focus', 'rebuttal', or 'last speech') stops introducing arguments and crystallizes — the two or three reasons their side has won.\nKnowing which speech you're giving tells you what the judge expects from you.",
        "Most formats also give each team a small bank of prep time — a few minutes total that a team can spend, in chunks, between speeches to organize their responses. Prep time is a resource to be budgeted: spending it all early leaves you scrambling later; hoarding it wastes a tool that could sharpen your rebuttal. Alongside speeches and prep, many formats include cross-examination periods (covered next), where speakers question each other directly. Together, speeches, prep, and cross-ex form the choreography every format arranges differently — but the underlying logic of 'build, then answer, then weigh' is universal.",
      ],
      technical: {
        title: "Constructive vs. Rebuttal — and the 'No New Args' Rule",
        body: [
          "The reason new arguments are barred in rebuttals is fairness: debate guarantees each argument a response. If you could unveil a knockout argument in the very last speech, the opponent would have no speech left to answer it — so judges disregard genuinely new arguments raised late. The boundary has nuance: new responses to existing arguments, new evidence extending an existing argument, and new weighing are usually allowed; a wholly new contention or a new independent reason to vote is not. When in doubt, plant your arguments in the constructive and merely develop them later.",
          "Each speech also has an implicit 'so what should the judge be writing now?' For constructives, the judge writes down your case structure. For middle rebuttals, the judge tracks the clash and the turns. For the final speech, the judge is deciding — so a strong final speech hands them the ballot story: 'Here are the two reasons we win, here's why they outweigh, vote Aff.' Matching your content to the role of the speech you're in is a hallmark of an experienced debater.",
        ],
        codeExample: {
          label: "Speech Roles — Build, Answer, Weigh",
          code: `  CONSTRUCTIVES (early)   → BUILD new arguments
    • present your case (contentions/plan)
    • new arguments ALLOWED here

  REBUTTALS (middle)      → ANSWER + EXTEND
    • refute their case, extend yours
    • new RESPONSES ok; new CONTENTIONS not

  FINAL SPEECH (last)     → WEIGH + CRYSTALLIZE
    • NO new arguments — judge will ignore them
    • "here are the 2 reasons we win; vote us"

  PREP TIME = small shared bank (e.g., 3–4 min)
    • budget it — don't blow it all early
    • used between speeches to organize

  ⚠ NOVICE TRAP: saving your best argument for
    the last speech → judge disregards as "new"`,
        },
      },
      incident: {
        title: "Parliamentary Procedure and the Order of Speech",
        when: "1789 — first rules of the U.S. Congress",
        where: "United States Congress",
        impact: "Legislatures learned early that productive debate requires strict rules about who may speak, when, and for how long — the same structure that makes competitive debate fair and decidable.",
        body: [
          "When the U.S. Congress convened in 1789, one of its first tasks was adopting rules of order governing debate: who could be recognized to speak, how long they could hold the floor, when amendments could be offered, and how debate would be closed before a vote. These rules — later systematized in works like Robert's Rules of Order (1876) — existed because unstructured debate collapses into chaos, with the loudest or most persistent voice dominating and no fair chance for opposing views to be heard and answered in turn.",
          "Competitive debate inherits this insight directly. The fixed sequence of constructives and rebuttals, the time limits, the prohibition on new arguments in the final speech, and the allotment of prep time are all devices to guarantee that each side gets a fair, equal, ordered chance to make and answer arguments. The choreography can feel arbitrary to a beginner, but every rule traces to the same principle the first Congress discovered: a debate is only fair, and only decidable, when everyone knows whose turn it is and what that turn is for.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Constructive", sub: "build the case", type: "attacker" },
          { label: "Rebuttal", sub: "answer + extend", type: "system" },
          { label: "Final Speech", sub: "weigh, no new args", type: "victim" },
          { label: "Fair, Decidable Round", sub: "every arg got a reply", type: "result" },
        ],
      },
      timeline: [
        { year: 1789, event: "The first U.S. Congress adopts rules of order governing who speaks and when", highlight: true },
        { year: 1876, event: "Robert's Rules of Order systematizes parliamentary debate procedure" },
        { year: 1925, event: "Intercollegiate debate fixes the constructive/rebuttal speech structure" },
        { year: 1971, event: "Lincoln-Douglas codifies its one-on-one speech order with value framing" },
        { year: 2005, event: "Public Forum sets a short, alternating speech order with a 'final focus'" },
        { year: 2024, event: "Each NSDA event publishes exact speech times, order, and prep allotments" },
      ],
      keyTakeaways: [
        "Constructive speeches build new arguments; rebuttal speeches answer, extend, and weigh them",
        "New arguments are barred in rebuttals/final speeches — the judge disregards them as unfair to answer",
        "The final speech crystallizes: no new arguments, just the two or three reasons your side wins",
        "Prep time is a small shared bank to budget across the round — don't spend it all early",
      ],
      references: [
        { title: "NSDA: Event Speech Times and Order", url: "https://www.speechanddebate.org/competition-events/" },
        { title: "Robert's Rules of Order (official site)", url: "https://robertsrules.com/" },
        { title: "U.S. House: Rules of the House", url: "https://rules.house.gov/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-1-06-q1",
          type: "New in Rebuttal",
          challenge: `  A debater has a brilliant new contention they've
  been saving. They unveil it for the first time
  in the very last speech of the round, when the
  opponent has no speech left.`,
          text: "How will most judges treat this argument?",
          options: [
            "Award bonus points for saving the best for last",
            "Disregard it as a new argument in the final speech — the opponent had no chance to answer, which is unfair",
            "Require an immediate re-debate",
            "Count it double because it was dramatic",
          ],
          correctIndex: 1,
          explanation: "Debate guarantees each argument a response. A brand-new contention in the last speech denies the opponent any chance to answer, so judges disregard it as 'new in the rebuttal.' The brilliant argument is wasted precisely because it was held too long. The lesson: plant arguments in the constructive, where they can be tested, and merely develop and weigh them later.",
        },
        {
          id: "debate-1-06-q2",
          type: "Speech Roles",
          challenge: `  It's the final speech of the round. A debater
  spends it introducing two new pieces of evidence
  and a new argument, racing to cram everything in.`,
          text: "What should the final speech actually do?",
          options: [
            "Introduce as many new arguments as possible",
            "Crystallize — stop adding arguments and tell the judge the two or three reasons their side has won and why those outweigh",
            "Repeat the constructive word for word",
            "Stay silent to save prep time",
          ],
          correctIndex: 1,
          explanation: "The final speech's job is to crystallize, not construct. New arguments and new evidence there are disregarded (and waste the speech). The judge is deciding now, so the speech should hand them a clear ballot story: the few key reasons this side wins, why those arguments outweigh the opponent's, and an explicit ask for the vote. Cramming in new material signals the debater doesn't understand the role of the speech.",
        },
        {
          id: "debate-1-06-q3",
          type: "Prep Time",
          challenge: `  A team has 4 minutes of prep time for the whole
  round. They use all 4 minutes before their very
  first rebuttal, then have none left for the
  crucial final speeches.`,
          text: "What mistake did they make with prep time?",
          options: [
            "None — using prep early is always best",
            "They failed to budget a shared resource across the round, leaving nothing for the later speeches where organization matters most",
            "They should never use prep time at all",
            "Prep time can be borrowed from the opponent",
          ],
          correctIndex: 1,
          explanation: "Prep time is a small fixed bank for the entire round, and it must be budgeted. Blowing it all before the first rebuttal leaves the team scrambling, unorganized, in the decisive final speeches — often the worst place to be caught short. Good teams spend prep in measured chunks, saving enough to organize the weighing and crystallization at the end. It's a resource-allocation skill as much as a debate skill.",
        },
        {
          id: "debate-1-06-q4",
          type: "Constructive vs Rebuttal",
          challenge: `  In a rebuttal speech (not a constructive), a
  debater wants to respond to the opponent's
  contention with a new piece of evidence that
  directly answers an argument already in the round.`,
          text: "Is this generally allowed?",
          options: [
            "Never — no new evidence is ever allowed after constructives",
            "Generally yes — new responses and new evidence extending or answering existing arguments are usually permitted; what's barred is a wholly new contention or independent voting reason",
            "Only if the judge gives permission first",
            "Only in the final speech",
          ],
          correctIndex: 1,
          explanation: "The 'no new arguments in rebuttals' rule targets wholly new contentions and new independent reasons to vote — not every new word. New responses to existing arguments, and new evidence that extends or answers an argument already in the round, are typically allowed because the clash they address was already opened. The boundary is between developing existing clash (fine) and opening brand-new clash too late to be answered (barred).",
        },
      ],
    },
  },

  // ─── debate-1-07: Cross-Examination Basics ────────────────────────────────────
  {
    epochId: "debate-1",
    wonder: {
      name: "The Old Bailey",
      location: "London, England",
      era: "Modern",
      emoji: "❓",
    },
    id: "debate-1-07",
    order: 7,
    title: "Cross-Examination Basics",
    subtitle: "Asking questions that set up your arguments — and answering without getting trapped",
    category: "arts",
    xp: 88,
    badge: { id: "debate-1-badge-07", name: "The Questioner", emoji: "❓" },
    challengeType: "quiz",
    info: {
      tagline: "Cross-examination isn't a fight — it's the calm setting of traps you'll spring in your next speech.",
      year: 1730,
      overview: [
        "Cross-examination (cross-ex, CX, or 'crossfire' in Public Forum) is a period in which one debater directly questions another — and beginners misread it as a chance to 'win' the exchange. Experienced debaters use it to:\n- Set up arguments they'll make in their next speech.\n- Clarify confusing parts of the opponent's case.\n- Expose weaknesses (missing evidence, contradictions, dropped warrants) on the record, with controlled questions.\nYou rarely 'win' cross-ex on the spot; you plant seeds you harvest later.",
        "Good questioning is strategic:\n- The strongest questions are narrow and lead toward a point: 'Does your plan cost money? Where does the funding come from? You didn't specify a source, correct?' — each answer boxes the opponent in.\n- Open-ended questions ('What do you think about the economy?') hand the opponent free speaking time to repeat their case.\nYou ask short questions and let them give short answers; you're building a record, not having a conversation.",
        "Answering cross-ex is its own skill: stay calm, answer honestly but concisely, and don't volunteer extra material that helps the questioner. If a question is a trap, you can give a brief, accurate answer that resists the framing ('It costs money, like every policy, and the funding comes from reallocating the existing budget'). You never want to be evasive — judges punish dodging — but you also never want to ramble into a concession. Civility matters: cross-ex is conducted to the judge, not as a personal confrontation, and a debater who stays composed while the opponent gets flustered often wins the exchange in the judge's eyes.",
      ],
      technical: {
        title: "Questioning Strategy and Composure",
        body: [
          "Build a question series like a funnel: start with a fact the opponent must concede, narrow toward the weakness, and end on the question that exposes it — but don't argue the conclusion in cross-ex; save it for your speech. Classic setups: establishing that a key term was never defined, that a piece of evidence doesn't actually say what they claimed, that two of their arguments contradict, or that their plan has no funding/enforcement mechanism. You note the concession and then, in your next speech, you say 'in cross-ex they admitted X' — that's where the value is realized.",
          "Composure is a scored impression even when cross-ex itself isn't formally scored. Speaking over the opponent, badgering, or visible frustration reads poorly; calm, precise control reads as mastery. Direct your questions and answers toward the judge's understanding, not at humiliating the opponent. When answering, a useful habit is to answer the question asked, briefly, and then stop talking — silence is safer than the extra sentence that hands the questioner a new opening.",
        ],
        codeExample: {
          label: "Cross-Ex — Funnel Questions, Harvest Later",
          code: `  PURPOSE OF CROSS-EX:
   • set up YOUR next speech (don't argue now)
   • clarify confusing parts of their case
   • expose weaknesses ON THE RECORD

  FUNNEL TECHNIQUE (narrow, leading):
   Q: "Your plan costs money — yes?"      → yes
   Q: "Where does the funding come from?" → "um..."
   Q: "So no funding source was given?"   → concession
   → NEXT SPEECH: "In CX they admitted no funding."

  AVOID:
   ✗ open questions ("what about the economy?")
     → gives them free speech time
   ✗ arguing the conclusion in CX itself
   ✗ badgering / talking over → judges punish it

  ANSWERING:
   ✓ calm, honest, CONCISE — then stop talking
   ✓ resist the trap's framing without dodging`,
        },
      },
      incident: {
        title: "Cross-Examination as the 'Greatest Engine for Truth'",
        when: "1730s onward — English common-law courts",
        where: "The Old Bailey and English courts",
        impact: "The legal practice of cross-examining witnesses — called by jurist John Henry Wigmore 'the greatest legal engine ever invented for the discovery of truth' — gave competitive debate its model for testing claims through pointed questioning rather than mere assertion.",
        body: [
          "Cross-examination developed in English common-law courts through the 1700s as the adversarial system matured: a witness's testimony was not accepted at face value but tested by the opposing advocate's questions, designed to expose inconsistency, bias, or gaps. The legal scholar John Henry Wigmore later called cross-examination 'beyond any doubt the greatest legal engine ever invented for the discovery of truth.' The art was never about volume or insult; it was about precise, controlled questions that let the facts — or the holes in them — reveal themselves.",
          "Competitive debate borrowed the mechanism wholesale, and even named a major format after it: cross-examination debate. The courtroom lesson translates directly. A skilled cross-examiner, in court or in a round, does not deliver a speech disguised as a question; they ask short, leading questions that corner the witness or opponent into useful admissions, then use those admissions in argument. The composure prized in a great trial lawyer — calm, relentless, never rattled — is the same composure that wins a debate cross-ex. The questioner who stays controlled while the answerer flails has already won the exchange.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ask Narrow Questions", sub: "leading, funnel toward weakness", type: "attacker" },
          { label: "Opponent Concedes", sub: "on the record", type: "system" },
          { label: "Note the Admission", sub: "don't argue it yet", type: "victim" },
          { label: "Harvest Next Speech", sub: "'in CX they admitted…'", type: "result" },
        ],
      },
      timeline: [
        { year: 1730, event: "Cross-examination matures in English adversarial common-law courts", highlight: true },
        { year: 1904, event: "Wigmore calls cross-examination 'the greatest engine for the discovery of truth'" },
        { year: 1971, event: "Cross-Examination Debate (later CEDA) centers questioning in U.S. policy debate" },
        { year: 2005, event: "Public Forum introduces 'crossfire' — shared open cross-examination periods" },
        { year: 2015, event: "Grand crossfire (all four debaters) becomes a signature PF moment" },
        { year: 2024, event: "Cross-ex strategy is a standard module in intermediate debate curricula" },
      ],
      keyTakeaways: [
        "Cross-ex sets up arguments for your next speech and exposes weaknesses on the record — it's not where you 'win'",
        "Ask narrow, leading questions that funnel toward a concession; open questions hand the opponent free speech time",
        "When answering, stay calm and concise, resist the trap's framing without dodging, then stop talking",
        "Composure is read by the judge — controlled questioning beats badgering every time",
      ],
      references: [
        { title: "NSDA: Cross-Examination and Crossfire", url: "https://www.speechanddebate.org/" },
        { title: "Wigmore on Evidence (cross-examination)", url: "https://www.britannica.com/topic/cross-examination" },
        { title: "Public Forum Crossfire Guide (NSDA)", url: "https://www.speechanddebate.org/competition-events/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-1-07-q1",
          type: "Purpose",
          challenge: `  During cross-examination, a novice spends the
  whole period arguing loudly with the opponent,
  trying to 'beat' them right there, and declares
  "See? I won that!"

  The judge is unimpressed.`,
          text: "What is cross-examination actually for?",
          options: [
            "Winning the exchange on the spot by out-arguing the opponent",
            "Setting up arguments for your next speech, clarifying their case, and exposing weaknesses on the record",
            "Giving a second constructive speech",
            "Intimidating the opponent into silence",
          ],
          correctIndex: 1,
          explanation: "Cross-ex is preparation, not climax. Its purpose is to set up the arguments you'll make in your next speech, clarify confusing parts of the opponent's case, and get weaknesses (no funding, contradictions, weak evidence) admitted on the record. You rarely 'win' it on the spot — you plant seeds to harvest in your speech. Loud arguing wastes the period and reads poorly to the judge.",
        },
        {
          id: "debate-1-07-q2",
          type: "Question Design",
          challenge: `  Two possible cross-ex questions:

   A: "What are your general thoughts about
       the economy and this whole issue?"
   B: "Your plan costs money — yes? And you
       named no funding source — correct?"`,
          text: "Which question is more strategically effective, and why?",
          options: [
            "A — open questions show you're fair-minded",
            "B — narrow, leading questions funnel toward a concession; A hands the opponent free time to re-deliver their case",
            "They are equally good",
            "A — because longer answers always help the questioner",
          ],
          correctIndex: 1,
          explanation: "Question B is narrow and leading, funneling the opponent toward a specific, useful concession (no funding source) you can cite next speech. Question A is open-ended and simply gives the opponent free speaking time to repeat and strengthen their case — the opposite of your goal. Effective cross-ex uses short, controlled questions that box the opponent in, not invitations to monologue.",
        },
        {
          id: "debate-1-07-q3",
          type: "Answering",
          challenge: `  You're answering cross-ex. The opponent asks a
  sharp trap question. You give a correct one-
  sentence answer — and then keep talking for
  another 30 seconds, volunteering extra detail.`,
          text: "What's the risk of the extra talking?",
          options: [
            "No risk — more explanation always helps",
            "The volunteered detail can hand the questioner a new opening or a concession; answer concisely, then stop talking",
            "It uses the opponent's prep time",
            "It automatically wins the round",
          ],
          correctIndex: 1,
          explanation: "When answering, the safest habit is to answer the question asked — briefly and honestly — and then stop. Volunteering extra material is how answerers talk themselves into concessions or hand the questioner a fresh angle to exploit. You should never be evasive (judges punish dodging), but the extra unprompted sentence is pure downside. Concise, composed answers protect you.",
        },
        {
          id: "debate-1-07-q4",
          type: "Composure",
          challenge: `  In crossfire, Debater A stays calm and asks
  precise questions. Debater B talks over A,
  raises their voice, and looks visibly angry.`,
          text: "How does this typically affect the judge's impression?",
          options: [
            "Debater B looks dominant and wins the exchange",
            "Debater A's controlled composure reads as mastery; B's badgering and frustration read poorly, even though crossfire itself may not be formally scored",
            "Judges ignore demeanor entirely",
            "Whoever is louder is always more persuasive",
          ],
          correctIndex: 1,
          explanation: "Composure is constantly being read by the judge. Calm, precise control signals command of the material; talking over the opponent and visible anger signal the opposite. Even when the cross-ex/crossfire period isn't separately scored, the impression it leaves colors the judge's overall view of who is the better, more credible debater. The composed questioner usually 'wins' the exchange in the judge's eyes.",
        },
      ],
    },
  },

  // ─── debate-1-08: Refutation Basics ───────────────────────────────────────────
  {
    epochId: "debate-1",
    wonder: {
      name: "Hyde Park Speakers' Corner",
      location: "London, England",
      era: "Modern",
      emoji: "💬",
    },
    id: "debate-1-08",
    order: 8,
    title: "The Four-Step Refutation",
    subtitle: "They say / but / because / therefore — answering an argument cleanly",
    category: "arts",
    xp: 88,
    badge: { id: "debate-1-badge-08", name: "The Refuter", emoji: "⚔️" },
    challengeType: "quiz",
    info: {
      tagline: "Refutation isn't contradiction — it's a structured reply the judge can follow and write down.",
      year: 1872,
      overview: [
        "Refutation is the act of answering an opponent's argument, and the cleanest method is four steps — They Say, But, Because, Therefore:\n- They Say — signpost the argument you're answering ('They say the policy will raise costs').\n- But — state your response ('But costs will actually fall').\n- Because — warrant it ('Because economies of scale lower per-unit price, as the 2022 industry report shows').\n- Therefore — impact it back ('Therefore their main disadvantage disappears, and our case stands').\nThis structure forces every refutation to be complete and trackable on the flow.",
        "The four-step method prevents the two most common refutation failures. The first is mere contradiction — 'that's wrong' with no warrant — which gives the judge no reason to prefer your answer over their argument. The second is the disorganized response that never tells the judge which argument is being answered, so it floats free of the flow and the judge can't credit it. By always signposting ('They say…') and always warranting ('Because…'), you guarantee the judge knows what you're answering and why your answer beats it.",
        "There are recognizable categories of response you can reach for:\n- Deny the link — the argument's cause-effect doesn't hold.\n- Deny the impact — even if true, it doesn't matter much.\n- Turn the argument — show it actually supports your side.\n- Present counter-evidence — a better source says the opposite.\n- Show it's non-unique — the supposed harm happens anyway, with or without their plan.\nA debater who internalizes this menu can respond to almost anything quickly — then dresses each response in the four-step structure so it lands cleanly.",
      ],
      technical: {
        title: "The Refutation Menu and the Power of the Turn",
        body: [
          "When an argument comes at you, run the menu: (1) No link — 'their cause doesn't produce their effect.' (2) No impact / minimize — 'even if true, it's trivial compared to our impacts.' (3) Turn — 'their own argument actually helps us' (the most devastating response, because it converts their offense into yours). (4) Counter-evidence — 'a stronger, more recent source says the opposite.' (5) Non-unique — 'this harm exists in the status quo regardless, so it's not a reason to reject our plan.' Picking the right response is faster when you've practiced the menu.",
          "The turn deserves special attention because it's the highest-value refutation. A 'link turn' shows their causal chain runs the other way (their plan causes the good thing they said it prevents, or vice versa). An 'impact turn' concedes the link but argues the outcome is actually good. Turns are powerful because a dropped turn doesn't just neutralize their argument — it becomes an independent reason you win. But turns carry risk: if you link-turn and impact-turn the same argument simultaneously, you can 'double-turn' yourself and prove their point. Refutation is a craft of choosing the right tool, not throwing every tool at once.",
        ],
        codeExample: {
          label: "Four-Step Refutation + The Response Menu",
          code: `  THE FOUR-STEP REFUTATION:
   1. THEY SAY  → signpost the argument (find it on flow)
   2. BUT       → state your response
   3. BECAUSE   → warrant it (reason + evidence)
   4. THEREFORE → impact it back to the round

  EXAMPLE:
   "They say the plan raises costs (THEY SAY).
    But costs fall (BUT) because economies of
    scale cut per-unit price — 2022 report
    (BECAUSE). Therefore their disadvantage
    disappears and our case stands (THEREFORE)."

  THE RESPONSE MENU (pick the right tool):
   • NO LINK      cause ≠ effect
   • NO IMPACT    even if true, trivial
   • TURN         their arg actually helps US ★
   • COUNTER-EVID stronger source says opposite
   • NON-UNIQUE   harm happens anyway

  ⚠ Don't "double-turn" (link-turn + impact-turn
    the same arg = you prove their point).`,
        },
      },
      incident: {
        title: "Speakers' Corner and the Open Test of Ideas",
        when: "1872 — Speakers' Corner legally established",
        where: "Hyde Park, London",
        impact: "Hyde Park's Speakers' Corner made public, face-to-face refutation a civic tradition — anyone could speak, and anyone in the crowd could challenge them, demonstrating that ideas are tested by structured reply, not by silencing.",
        body: [
          "In 1872, the Parks Regulation Act effectively recognized a right to assemble and speak at the northeast corner of Hyde Park, and Speakers' Corner became the world's most famous venue for open public oratory. Anyone could mount a soapbox and argue any (lawful) position — and crucially, the crowd could answer back. Hecklers were not merely tolerated but expected; a speaker's measure was whether they could handle the challenges, refute the objections, and hold their argument under live fire. It was refutation as public sport, centuries before tournament debate.",
          "Speakers' Corner embodies the core conviction behind all refutation: an idea earns its standing by surviving reply, not by avoiding it. A speaker who could not answer the obvious objection lost the crowd; one who answered with a sharp, reasoned response won it. Competitive refutation simply formalizes that street-level test into structure — They Say, But, Because, Therefore — so the reply is complete and the judge can follow it. The instinct is the same: when someone makes a claim, the honest and powerful move is not to shout them down but to answer them, point for point.",
        ],
      },
      diagram: {
        nodes: [
          { label: "They Say", sub: "signpost their argument", type: "attacker" },
          { label: "But + Because", sub: "response + warrant", type: "system" },
          { label: "Therefore", sub: "impact back to the round", type: "victim" },
          { label: "Clean Refutation", sub: "judge can track and credit it", type: "result" },
        ],
      },
      timeline: [
        { year: 1872, event: "Speakers' Corner is established in Hyde Park as a venue for open public debate", highlight: true },
        { year: 1925, event: "Intercollegiate debate formalizes structured refutation as a judged skill" },
        { year: 1980, event: "The 'four-step refutation' becomes a standard teaching heuristic" },
        { year: 1995, event: "Turns and the response menu become core to policy and LD strategy" },
        { year: 2010, event: "Public Forum emphasizes accessible, signposted refutation for lay judges" },
        { year: 2024, event: "Four-step refutation is taught in nearly every novice debate curriculum" },
      ],
      keyTakeaways: [
        "Refute in four steps: They Say (signpost), But (response), Because (warrant), Therefore (impact)",
        "Mere contradiction ('that's wrong') gives the judge no reason to prefer you — always warrant your answer",
        "Run the response menu: no link, no impact, turn, counter-evidence, or non-unique",
        "The turn is the strongest response — it converts their argument into a reason you win — but never double-turn yourself",
      ],
      references: [
        { title: "NSDA: Refutation and Rebuttal", url: "https://www.speechanddebate.org/" },
        { title: "Speakers' Corner (The Royal Parks)", url: "https://www.royalparks.org.uk/parks/hyde-park/things-to-see-and-do/speakers-corner" },
        { title: "Refutation Techniques (Purdue OWL, Argumentation)", url: "https://owl.purdue.edu/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-1-08-q1",
          type: "Four-Step Method",
          challenge: `  Opponent: "Our plan boosts the economy."

  Debater's entire response: "No it doesn't.
  That's just wrong."`,
          text: "What is wrong with this refutation, and what would fix it?",
          options: [
            "Nothing — flat contradiction is enough",
            "It's mere contradiction with no warrant; use the four steps — signpost it, respond, warrant the response with a reason/evidence, then impact it",
            "It should be louder",
            "It should introduce a brand-new contention instead",
          ],
          correctIndex: 1,
          explanation: "'No it doesn't, that's wrong' is bare contradiction — it gives the judge no reason to prefer it over the opponent's claim. The four-step method fixes it: They Say ('they claim the plan boosts the economy'), But ('it actually slows growth'), Because ('it raises borrowing costs — cite evidence'), Therefore ('so their main advantage collapses'). Now the response is warranted, trackable, and creditable.",
        },
        {
          id: "debate-1-08-q2",
          type: "The Turn",
          challenge: `  Opponent argues: "Your plan will increase
  government spending, which is bad."

  You can show their plan actually REDUCES total
  spending by preventing costlier future crises.`,
          text: "What kind of response is this, and why is it powerful?",
          options: [
            "A non-unique — the harm happens anyway",
            "A turn — you show their argument actually supports your side, converting their offense into a reason you win",
            "A simple denial of the impact",
            "A concession",
          ],
          correctIndex: 1,
          explanation: "This is a link turn: you flip their causal claim, showing the plan reduces spending rather than increasing it. Turns are the most powerful refutation because they don't merely neutralize the argument — a turn becomes an independent reason you win, and if the opponent drops it, it's conceded offense for your side. (Just be careful not to also impact-turn the same argument, which would double-turn you.)",
        },
        {
          id: "debate-1-08-q3",
          type: "Response Menu",
          challenge: `  Opponent: "If we adopt this policy, crime will
  rise because of social disruption."

  You have data showing crime has been rising at
  the same rate for a decade regardless of any
  such policy.`,
          text: "Which response from the menu best fits this evidence?",
          options: [
            "Impact turn — the crime increase is actually good",
            "Non-unique — the supposed harm (rising crime) is already happening anyway, so it's not a reason to reject your plan",
            "Concede the link",
            "Double-turn the argument",
          ],
          correctIndex: 1,
          explanation: "Showing that the harm occurs in the status quo regardless of the plan is the 'non-unique' response: their disadvantage isn't caused by your plan because it's already happening for other reasons. This neutralizes the argument as a reason to vote against you. (An impact turn would argue rising crime is good — which is both implausible and not what your evidence shows.) Matching the right menu item to your evidence is the skill.",
        },
        {
          id: "debate-1-08-q4",
          type: "Double-Turn",
          challenge: `  Opponent: "Your plan increases immigration,
  which hurts wages."

  A debater says BOTH: "Our plan doesn't increase
  immigration" AND "Actually, more immigration
  RAISES wages."`,
          text: "What error has the debater committed?",
          options: [
            "None — making two responses is always safer",
            "A double-turn: link-turning ('no increase') and impact-turning ('increase is good') the same argument contradict each other and can end up proving the opponent's point",
            "They used too few responses",
            "They conceded the round",
          ],
          correctIndex: 1,
          explanation: "Saying both 'our plan doesn't increase immigration' (a link turn) and 'more immigration is actually good' (an impact turn) on the same argument is a classic double-turn. The two responses contradict — if immigration is good, you'd want to claim your plan increases it, not deny it. A sharp opponent exploits the contradiction, and you can end up arguing their causal chain for them. Choose one coherent line of response rather than throwing contradictory turns at once.",
        },
      ],
    },
  },

  // ─── debate-1-09: Delivery Basics ─────────────────────────────────────────────
  {
    epochId: "debate-1",
    wonder: {
      name: "Gettysburg",
      location: "Gettysburg, Pennsylvania",
      era: "19th Century",
      emoji: "🎤",
    },
    id: "debate-1-09",
    order: 9,
    title: "Delivery That Persuades",
    subtitle: "Voice, pace, eye contact, and signposting so the judge can follow you",
    category: "arts",
    xp: 85,
    badge: { id: "debate-1-badge-09", name: "Clear Voice", emoji: "🎤" },
    challengeType: "quiz",
    info: {
      tagline: "The best argument loses if the judge can't follow it — delivery is how your reasoning reaches the ballot.",
      year: 1863,
      overview: [
        "Delivery is how your argument travels from your mind to the judge's flow — a brilliant case delivered as an unintelligible blur persuades no one, because the judge can only credit what they can understand and write down. The foundational skills are vocal:\n- A controlled rate — fast enough to fit your content, slow enough to be understood.\n- Variation in pitch and volume to mark importance.\n- Deliberate pauses that let a key point land and give the judge time to write.\nMonotone speed-reading is the most common novice failure — it sacrifices every argument to the goal of saying more of them.",
        "Signposting is the single most important delivery habit for a debater. Signposting means verbally labeling where you are: 'My first contention…', 'Two responses here — first… second…', 'Now moving to their case…'. These signposts are road signs that let the judge keep their flow organized and know exactly which argument you're on. Without them, even clearly spoken content becomes a flood the judge can't sort. With them, a judge can follow a dense speech effortlessly — and a followed argument is a credited argument.",
        "Physical delivery matters too, though less than clarity:\n- Eye contact with the judge (not your notes) builds credibility and lets you read whether they're following.\n- A stable stance, purposeful gestures, and visible composure communicate confidence; fidgeting, swaying, and reading face-down communicate the opposite.\nIn lay-judged formats like Public Forum, accessible delivery can be decisive, because the judge is an ordinary person who rewards clarity and presence. Across all formats the rule holds: delivery serves comprehension, and the debater whose reasoning is easiest to follow has a standing advantage.",
      ],
      technical: {
        title: "Rate, Signposting, and Reading the Judge",
        body: [
          "Calibrate your rate to your judge and format. Some technical circuits tolerate very fast delivery ('spreading'), but most judges — and nearly all lay judges — credit only what they can comprehend and flow. The safe default is brisk but crisp. Prioritize clarity over volume of words, slow down on the tags, warrants, and impacts you most want the judge to write, and never let speed turn your evidence into noise. If the judge stops writing, you've lost them — watch for it.",
          "Signposting works at two levels: macro (which contention or which side's case you're on) and micro (numbering responses within an argument: 'first… second… third…'). Numbered responses are especially powerful because they let the judge create discrete lines on the flow and check each off. Pair signposting with brief eye contact at transition points — looking up as you say 'moving to their second contention' both signals the shift and confirms the judge is with you. Delivery and flowing are two sides of one coin: you signpost so the opponent and judge can flow you.",
        ],
        codeExample: {
          label: "Delivery Checklist — Serve Comprehension",
          code: `  VOCAL:
   ✓ Rate: brisk but CRISP (clarity > word count)
   ✓ Slow down on tags, warrants, key impacts
   ✓ Vary pitch/volume to mark importance
   ✓ Pause after key points (lets the judge WRITE)
   ✗ Monotone speed-reading → judge can't flow it

  SIGNPOSTING (most important habit):
   MACRO: "My first contention...", "Their case now"
   MICRO: "Two responses — first... second..."
   → road signs that keep the judge's flow organized

  PHYSICAL:
   ✓ Eye contact with the JUDGE (not your notes)
   ✓ Stable stance, purposeful gestures, composure
   ✗ Fidgeting, swaying, reading face-down

  WATCH THE JUDGE: if they stop writing → you lost
   them. Slow down, re-signpost, re-land the point.`,
        },
      },
      incident: {
        title: "The Gettysburg Address — Power Without Speed",
        when: "November 19, 1863",
        where: "Gettysburg, Pennsylvania",
        impact: "Lincoln's 272-word Gettysburg Address, delivered in about two minutes, proved that the most persuasive delivery is clear, measured, and purposeful — not the longest or the fastest. The featured orator that day spoke for two hours and is forgotten.",
        body: [
          "At the dedication of the Soldiers' National Cemetery in 1863, the featured speaker was Edward Everett, a celebrated orator who spoke for over two hours. Then Abraham Lincoln rose and delivered 272 words in about two minutes. Everett's marathon is forgotten; Lincoln's brief, measured address is among the most memorized passages in the English language. The contrast is a permanent lesson: persuasive delivery is not about quantity or velocity, but about clarity, structure, and letting each idea land.",
          "Lincoln's delivery worked because every phrase was intelligible and purposeful — he did not rush, he did not pad, and he signposted the structure of his thought ('Four score and seven years ago… Now we are engaged… But in a larger sense…'). A debater can take the practical lesson without the eloquence: speak so you can be understood, mark your structure clearly, slow down for what matters most, and trust that a clear, well-organized argument outperforms a faster, denser one the audience cannot follow. The judge, like Lincoln's audience, remembers what they could actually take in.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Control the Voice", sub: "rate, pitch, pause", type: "attacker" },
          { label: "Signpost Everything", sub: "macro + numbered micro", type: "system" },
          { label: "Read the Judge", sub: "are they still writing?", type: "victim" },
          { label: "Argument Lands", sub: "understood = credited", type: "result" },
        ],
      },
      timeline: [
        { year: 1863, event: "Lincoln's Gettysburg Address models clear, measured, purposeful delivery", highlight: true },
        { year: 1925, event: "Intercollegiate debate begins formally scoring delivery and clarity" },
        { year: 1970, event: "'Spreading' (rapid delivery) emerges in fast policy debate circuits" },
        { year: 2005, event: "Public Forum is designed for persuasive delivery before lay judges" },
        { year: 2015, event: "Online debate puts new emphasis on vocal clarity over a screen" },
        { year: 2024, event: "Signposting and pacing are core delivery skills in novice curricula" },
      ],
      keyTakeaways: [
        "Delivery serves comprehension — the judge can only credit arguments they understand and can write down",
        "Control rate, pitch, and pauses; slow down on the tags, warrants, and impacts you most want flowed",
        "Signpost constantly — macro ('first contention') and micro ('first… second…') — to keep the judge's flow organized",
        "Make eye contact and watch the judge: if they stop writing, slow down, re-signpost, and re-land the point",
      ],
      references: [
        { title: "NSDA: Delivery and Presentation Skills", url: "https://www.speechanddebate.org/" },
        { title: "The Gettysburg Address (Library of Congress)", url: "https://www.loc.gov/exhibits/gettysburg-address/" },
        { title: "Public Speaking Delivery (University of Pittsburgh, Public Speaking)", url: "https://www.coursera.org/learn/public-speaking" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-1-09-q1",
          type: "Rate and Clarity",
          challenge: `  A debater crams a huge case into the time limit
  by reading as fast as humanly possible in a flat
  monotone. Halfway through, the lay judge sets
  down their pen and stops taking notes.`,
          text: "What has gone wrong?",
          options: [
            "Nothing — more arguments always means more chances to win",
            "The delivery outran comprehension; the judge can only credit what they understand and flow, and they've stopped flowing — clarity must come before word count",
            "The judge is simply lazy",
            "The debater should speak even faster to finish",
          ],
          correctIndex: 1,
          explanation: "When the judge sets down their pen, they've stopped flowing — meaning every additional argument is now uncredited noise. Delivery exists to serve comprehension; a flat, maximally fast monotone sacrifices every argument to the goal of saying more of them. The fix is to prioritize clarity: a brisk but crisp rate, slowing on key points, so the judge can actually take the argument in. Understood beats merely spoken.",
        },
        {
          id: "debate-1-09-q2",
          type: "Signposting",
          challenge: `  Two debaters present the same three responses.

   A: "first... second... third..." labeling each.
   B: runs all three together with no labels, in
      one continuous stream.`,
          text: "Why does Debater A's signposting help?",
          options: [
            "It doesn't — labels waste time",
            "Signposts let the judge create discrete lines on the flow and track each response; without them, even clear content becomes an unsortable flood",
            "It only helps the opponent",
            "Judges penalize numbered responses",
          ],
          correctIndex: 1,
          explanation: "Numbered, signposted responses ('first… second… third…') let the judge create separate lines on the flow and check each one off as answered or extended. This is the difference between a speech the judge can organize and a continuous stream they can't sort. Signposting is the most important delivery habit precisely because it makes your content flowable — and a flowed argument is a credited one.",
        },
        {
          id: "debate-1-09-q3",
          type: "Reading the Judge",
          challenge: `  Mid-speech, a debater glances up and notices the
  judge has stopped writing and looks lost.`,
          text: "What is the smart in-round adjustment?",
          options: [
            "Speed up to get through more material before time runs out",
            "Slow down, re-signpost where you are, and re-land the key point so the judge can get back on the flow",
            "Ignore the judge and keep going",
            "Stop speaking entirely",
          ],
          correctIndex: 1,
          explanation: "A judge who stops writing and looks lost is no longer crediting your arguments. The correct adjustment is to slow down, re-signpost ('to be clear, this is still my first contention'), and re-deliver the key point so they can rejoin the flow. Speeding up makes it worse. Reading the judge in real time — and adapting delivery to keep them with you — is an advanced but learnable habit that separates strong speakers from fast ones.",
        },
        {
          id: "debate-1-09-q4",
          type: "Less Is More",
          challenge: `  At Gettysburg, Edward Everett spoke for two
  hours. Lincoln spoke for about two minutes —
  272 words.

  History remembers Lincoln's.`,
          text: "What delivery lesson does this contrast teach a debater?",
          options: [
            "Always speak as long as the time limit allows",
            "Persuasive delivery is about clarity, structure, and letting ideas land — not length or speed; a clear, well-organized argument outperforms a longer or faster one",
            "Memorization is the only thing that matters",
            "Lay audiences prefer two-hour speeches",
          ],
          correctIndex: 1,
          explanation: "The Everett/Lincoln contrast is the classic proof that quantity and velocity are not persuasion. Lincoln's brief, measured, clearly structured address endured because every phrase was intelligible and purposeful. For a debater, the takeaway is practical: speak to be understood, signpost your structure, slow down for what matters, and trust that a clear, organized argument beats a faster or longer one the judge can't fully absorb.",
        },
      ],
    },
  },

  // ─── debate-1-10: Ethics and Etiquette ────────────────────────────────────────
  {
    epochId: "debate-1",
    wonder: {
      name: "United Nations General Assembly",
      location: "New York City, New York",
      era: "Modern",
      emoji: "🤝",
    },
    id: "debate-1-10",
    order: 10,
    title: "Ethics, Etiquette, and the Ballot",
    subtitle: "How to compete hard, stay honest, and respect the people in the room",
    category: "arts",
    xp: 90,
    badge: { id: "debate-1-badge-10", name: "Honorable Advocate", emoji: "🤝" },
    challengeType: "quiz",
    info: {
      tagline: "The best debaters are fierce competitors and good people in the same round — and judges notice both.",
      year: 1945,
      overview: [
        "Debate is adversarial but built on trust and respect, and its core norms aren't optional politeness — they're part of the competition:\n- Evidence ethics — never fabricating or distorting a source — is the most serious; violations can lose rounds and tournaments because the activity depends on quoted evidence being real.\n- Argue the case, not the person — disagree sharply with an argument while treating the opponent with courtesy.\nThe phrase that captures it: be tough on the issue, easy on the person.",
        "Etiquette governs the conduct of the room:\n- Shake hands or acknowledge your opponents.\n- Don't talk over people or make faces during their speeches.\n- Address your remarks to the judge rather than sneering at the opposition.\n- Accept the decision graciously, win or lose.\nThese matter competitively: judges form impressions of credibility and maturity that color close decisions, and many ballots include speaker points for demeanor. A debater who wins arguments but is rude often loses speaker awards — and sometimes loses the round.",
        "Finally, debate carries a deeper ethic that outlasts any tournament: the discipline of arguing positions you may not personally hold teaches you to understand the other side, to separate the strength of an argument from your feelings about its conclusion, and to change your mind when the evidence warrants. This is the civic value the activity was built to teach. The best debaters carry it into the world as intellectual honesty — the willingness to follow reasons where they lead, to grant a good point made against them, and to disagree without contempt. Competing hard and remaining honest and decent are not in tension; together they are the whole point.",
      ],
      technical: {
        title: "The Ballot, Speaker Points, and the Norms That Earn Them",
        body: [
          "Judges record decisions on a ballot: who won, and usually 'speaker points' (a numeric rating of each debater's skill and conduct) plus written feedback. The win/loss is decided on arguments; speaker points reward clarity, strategy, and demeanor, and they determine individual awards and tournament seeding. This dual scoring is deliberate: it means you can win the round but be reminded to improve your conduct, or lose the round but be recognized as a strong, gracious speaker. Reading ballots is one of the fastest ways to improve.",
          "The competitive norms that earn good ballots are concrete: cite evidence honestly and have it ready to show; signpost so the judge can follow you; concede points you genuinely cannot answer rather than pretending (judges respect honesty and punish obvious dodging); stay composed in cross-ex; never make the round personal; and thank the judge and shake hands at the end. None of these soften your competitiveness — they sharpen it, because a judge who trusts you and can follow you is a judge inclined to vote for you in a close round.",
        ],
        codeExample: {
          label: "Debate Ethics and Etiquette — The Core Code",
          code: `  EVIDENCE ETHICS (most serious):
   ✓ quote honestly, in context, with real cite
   ✓ have the full source ready to show
   ✗ fabricate / clip / distort → lose round/tourney

  ARGUE THE ISSUE, NOT THE PERSON:
   "tough on the issue, easy on the person"
   ✓ sharp disagreement with the ARGUMENT
   ✗ insults, sneering, ad hominem

  ROOM ETIQUETTE:
   ✓ acknowledge opponents, shake hands
   ✓ address the JUDGE, not the opposing team
   ✗ talking over, eye-rolling, faces during speeches
   ✓ accept the decision graciously, win or lose

  THE BALLOT:
   • WIN/LOSS  → decided on arguments
   • SPEAKER PTS → clarity, strategy, DEMEANOR
   → rude-but-right often loses speaker awards
   → READ your ballots to improve fastest

  THE DEEPER ETHIC:
   arguing any assigned side → understand opponents,
   judge arguments on merit, change your mind on
   evidence = intellectual honesty for life`,
        },
      },
      incident: {
        title: "Diplomacy as Debate — The United Nations",
        when: "1945 — founding of the United Nations",
        where: "United Nations, New York",
        impact: "The UN was built on the conviction that nations should settle disputes by structured argument and negotiation rather than force — institutionalizing, at global scale, the same ethic that governs a debate round: disagree fiercely, but by reasoned, rule-bound argument, not contempt or violence.",
        body: [
          "After the Second World War, the United Nations was founded in 1945 on a radical premise: that even bitter adversaries should resolve their disputes through structured argument, negotiation, and appeal to shared rules, rather than through force. The General Assembly and Security Council are, in effect, permanent debate chambers — delegations argue opposing positions, cite evidence and law, answer one another, and submit to procedures and votes. The system is imperfect and often frustrating, but its existence reflects humanity's hard-won judgment that argument is better than violence.",
          "The ethic of the debate round scales to this global stage. Diplomats argue fiercely for their nations' interests while observing strict norms of courtesy, recognizing the floor, and addressing the chamber rather than insulting rivals — because the moment argument gives way to contempt, the system stops working. Competitive debate trains exactly this disposition in miniature: the ability to oppose someone's position with everything you have while treating them as a person worthy of respect. It is why educators value debate not merely as a competition but as a school for citizenship — teaching young people to disagree well, which a free society cannot survive without.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Compete Hard", sub: "fierce on the argument", type: "attacker" },
          { label: "Stay Honest", sub: "evidence ethics, concede fairly", type: "system" },
          { label: "Respect the Room", sub: "easy on the person", type: "victim" },
          { label: "Earn the Ballot", sub: "win + speaker points + respect", type: "result" },
        ],
      },
      timeline: [
        { year: 1945, event: "The United Nations institutionalizes argument over force for resolving disputes", highlight: true },
        { year: 1925, event: "Intercollegiate debate adopts codes of conduct and evidence standards" },
        { year: 1970, event: "Speaker points formalize the scoring of conduct alongside the win/loss" },
        { year: 2002, event: "The NSDA Code of Honor sets ethics expectations for member competitors" },
        { year: 2016, event: "Evidence ethics rules tighten across national circuits amid misinformation concerns" },
        { year: 2024, event: "Inclusion, equity, and accessibility norms are formalized in many tournament codes" },
      ],
      keyTakeaways: [
        "Evidence ethics is non-negotiable — fabricating or distorting a source can lose the round and the tournament",
        "Be tough on the issue, easy on the person — argue the case fiercely, treat the opponent with courtesy",
        "Ballots score both the win/loss (on arguments) and speaker points (on clarity, strategy, and demeanor) — read them to improve",
        "Arguing assigned sides teaches intellectual honesty: judge arguments on merit and change your mind on the evidence",
      ],
      references: [
        { title: "NSDA Code of Honor and Competition Rules", url: "https://www.speechanddebate.org/competition-rules/" },
        { title: "United Nations: How the UN Works", url: "https://www.un.org/en/about-us" },
        { title: "Why Debate? Educational Value (NSDA)", url: "https://www.speechanddebate.org/the-benefits-of-debate/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-1-10-q1",
          type: "Evidence Ethics",
          challenge: `  A debater is winning easily but realizes one of
  their best statistics is from a source that
  actually concluded the opposite. They consider
  reading it anyway, trimming the inconvenient
  part.`,
          text: "What is the ethical — and strategically wise — choice?",
          options: [
            "Read the trimmed version; winning is what matters",
            "Do not distort the source — clipping it to reverse its meaning is an evidence ethics violation that can lose the round and the tournament if caught",
            "Invent a different statistic instead",
            "Read it but mumble the citation",
          ],
          correctIndex: 1,
          explanation: "Trimming a source to reverse its actual conclusion is a clear evidence ethics violation — the same category as fabrication. The entire activity rests on quoted evidence being real, so judges and tournaments punish distortion severely, up to losing the round and removal from the event. It's also strategically reckless: opponents can call for the card. The honest move (drop the bad evidence, win on legitimate arguments) is both ethical and safer.",
        },
        {
          id: "debate-1-10-q2",
          type: "Issue vs Person",
          challenge: `  An opponent makes a weak argument. One debater
  responds: "That argument fails for two reasons,
  here's the evidence..." Another responds:
  "Only an idiot would believe that."`,
          text: "Which response reflects good debate conduct, and why does it matter competitively?",
          options: [
            "The insult — it shows confidence and dominance",
            "The reasoned response — 'tough on the issue, easy on the person'; insults read as poor conduct, cost speaker points, and can sway close ballots",
            "Both are equally fine",
            "Neither matters to the judge",
          ],
          correctIndex: 1,
          explanation: "Attacking the argument with reasons and evidence is exactly right; calling the opponent an idiot attacks the person and violates the core norm 'tough on the issue, easy on the person.' Beyond being discourteous, it's competitively costly: judges score demeanor in speaker points and form credibility impressions that decide close rounds. Sharp on the argument, respectful to the human — that combination wins ballots and awards.",
        },
        {
          id: "debate-1-10-q3",
          type: "Conceding Honestly",
          challenge: `  An opponent makes a point the debater genuinely
  cannot answer. The debater can either (a) pretend
  to answer it with obvious hand-waving, or (b)
  concede that point but explain why they still
  win overall.`,
          text: "Which approach do judges generally respect more?",
          options: [
            "Hand-waving — never concede anything",
            "Conceding the point honestly and showing why you still win on balance; judges respect honesty and punish obvious dodging",
            "Staying silent on it and hoping the judge forgets",
            "Insisting the point was never made",
          ],
          correctIndex: 1,
          explanation: "Judges can see through obvious hand-waving, and faking an answer damages your credibility on everything else. Conceding a point you genuinely can't answer — while explaining why you still win the round on balance (weighing, other arguments) — reads as honest and strategically mature. Good debaters routinely grant a point and pivot to why it doesn't decide the round. Honesty about what you can't answer is a strength, not a weakness.",
        },
        {
          id: "debate-1-10-q4",
          type: "The Deeper Value",
          challenge: `  A student is assigned to argue a position they
  personally disagree with. By round's end, they
  understand the opposing view far better and even
  find one of its arguments genuinely strong.`,
          text: "What civic skill is debate cultivating here?",
          options: [
            "Cynical manipulation — learning to argue anything dishonestly",
            "Intellectual honesty — understanding opposing views, judging arguments on their merit rather than feelings, and being willing to change one's mind on evidence",
            "Nothing of value beyond the trophy",
            "How to avoid ever conceding",
          ],
          correctIndex: 1,
          explanation: "Arguing assigned sides is what gives debate its deepest civic value: it forces you to genuinely understand views you don't hold, to separate an argument's strength from your feelings about its conclusion, and to update when the evidence warrants. That's intellectual honesty — the disposition a free society depends on. Far from teaching dishonest manipulation, debate at its best trains people to disagree well, follow reasons where they lead, and respect the opponents they argue against.",
        },
      ],
    },
  },
];
