import type { StageConfig, EpochConfig } from "./types";

export const debate2Epoch: EpochConfig = {
  id: "debate-2",
  name: "Argumentation & Logic",
  subtitle: "The Reasoning Engine Beneath Every Argument",
  description:
    "Foundations gave you the shape of an argument; this epoch gives you the engine. You'll learn the Toulmin model that maps any real argument, the difference between deductive certainty and inductive strength, how to tell causation from mere correlation, and how to name and dismantle the formal and informal fallacies that sink weak cases. By the end you'll spot a broken inference the instant you hear it — and never build one yourself.",
  emoji: "🧠",
  color: "cyan",
  unlocked: true,
};

export const debate2Stages: StageConfig[] = [
  // ─── debate-2-01: The Toulmin Model ───────────────────────────────────────────
  {
    epochId: "debate-2",
    wonder: {
      name: "Aristotle's Lyceum",
      location: "Athens, Greece",
      era: "Ancient",
      emoji: "🏛️",
    },
    id: "debate-2-01",
    order: 1,
    title: "The Toulmin Model",
    subtitle: "Mapping any real-world argument into its working parts",
    category: "arts",
    xp: 88,
    badge: { id: "debate-2-badge-01", name: "Argument Cartographer", emoji: "🗺️" },
    challengeType: "quiz",
    info: {
      tagline: "Real arguments are messier than 'claim-warrant-impact' — the Toulmin model shows every hidden moving part.",
      year: 1958,
      overview: [
        "In 1958, philosopher Stephen Toulmin published a model of argument that captures how people actually reason in everyday and professional life — in law, science, and policy — rather than in pure formal logic. It breaks an argument into six parts:\n- Claim — the conclusion you want accepted.\n- Grounds — the data or evidence supporting it.\n- Warrant — the principle connecting grounds to claim.\n- Backing — support for the warrant itself.\n- Qualifier — how strongly the claim holds ('certainly', 'probably', 'in most cases').\n- Rebuttal — the conditions under which the claim would not hold.\nThe model is the debater's X-ray: it reveals the parts of an argument that the speaker left unstated.",
        "The three core parts extend the claim-warrant-impact idea you already know. Grounds are your evidence ('the bridge is rated for 10 tons'). The claim is your conclusion ('so this 8-ton truck can cross safely'). The warrant is the bridging principle that licenses the move from grounds to claim ('a load under the rated capacity is safe to cross'). Most everyday arguments leave the warrant unstated because it seems obvious — and that's exactly where a sharp debater attacks, by questioning the unspoken principle that does all the work.",
        "The three extension parts are where the model becomes a weapon. Backing answers 'why should I accept your warrant?' (engineering standards, in the bridge example). The qualifier forces honesty about strength: 'probably safe' is a very different claim from 'certainly safe', and overclaiming with no qualifier is a vulnerability. The rebuttal builds in the exceptions ('unless the bridge is damaged or the load is unevenly distributed'). A debater who maps an opponent's argument onto Toulmin can instantly find the weakest part — usually an unstated warrant or an overconfident qualifier — and aim there.",
      ],
      technical: {
        title: "Using Toulmin to Build and to Attack",
        body: [
          "To build a robust argument, write all six parts even if you'll only voice three. Stating your qualifier ('this strongly suggests', not 'this proves') pre-empts the opponent's 'you overclaimed' attack. Anticipating the rebuttal ('this holds unless X, and X isn't the case here') closes off their escape routes before they reach them. Supplying backing for your warrant when challenged ('this principle is standard engineering practice — here's the code') defends the joint where most arguments break.",
          "To attack, locate the warrant first — it's usually unstated. Ask 'what principle has to be true for their grounds to support their claim?' Then test that principle: is it actually true? Does it have backing? What are its exceptions (the rebuttal conditions)? Many arguments present strong-looking grounds but rest on a warrant that collapses under scrutiny ('past performance predicts future results' — does it, here?). Attacking the warrant is more efficient than disputing the grounds, because if the bridge between evidence and conclusion fails, the evidence becomes irrelevant.",
        ],
        codeExample: {
          label: "The Six Parts of a Toulmin Argument",
          code: `  GROUNDS ──────warrant licenses──────► CLAIM
  (evidence)                            (conclusion)
  "Bridge rated                         "This 8-ton
   for 10 tons"                          truck can cross"
       │                                     ▲
       │            WARRANT                  │
       └──► "A load under rated capacity ────┘
             is safe to cross"
                     │
                  BACKING: "standard engineering practice"

  QUALIFIER: "almost certainly" (how strong?)
  REBUTTAL:  "...unless the bridge is damaged or
              the load is unevenly distributed"

  ATTACK ORDER:
   1. Find the (usually UNSTATED) warrant
   2. Is the principle true? Does it have backing?
   3. What are its rebuttal conditions (exceptions)?
   4. Is the qualifier honest, or overclaimed?`,
        },
      },
      incident: {
        title: "Aristotle, Toulmin, and the Logic of Real Life",
        when: "350 BCE and 1958 CE",
        where: "The Lyceum, Athens — and the University of Leeds, England",
        impact: "Aristotle founded formal logic; 23 centuries later Toulmin argued that real arguments in law and science don't fit formal syllogisms — and gave debaters a model that matches how persuasion actually works.",
        body: [
          "Aristotle, teaching at his Lyceum around 350 BCE, founded formal logic — the study of valid inference through syllogisms, where conclusions follow necessarily from premises. For over two thousand years, the syllogism was the model of rigorous argument. But formal logic struggles with the arguments people actually make about uncertain, real-world matters: a jury weighing evidence, a scientist inferring a cause, a citizen arguing policy. These arguments are not airtight deductions; they are reasonable inferences that hold 'probably' and 'unless'.",
          "In 'The Uses of Argument' (1958), Stephen Toulmin argued that real reasoning needs a richer map than the syllogism, and offered his six-part model — grounds, warrant, backing, claim, qualifier, rebuttal. Initially controversial among logicians, it became foundational in rhetoric, communication, and competitive debate precisely because it matches how lawyers, scientists, and debaters actually argue: with evidence, bridging principles, honest qualifiers, and built-in exceptions. The model is the bridge between Aristotle's ideal of rigor and the messy, probabilistic arguments that win real rounds and real cases.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Grounds", sub: "the evidence", type: "attacker" },
          { label: "Warrant + Backing", sub: "the bridging principle", type: "system" },
          { label: "Qualifier + Rebuttal", sub: "strength and exceptions", type: "victim" },
          { label: "Claim", sub: "the warranted conclusion", type: "result" },
        ],
      },
      timeline: [
        { year: -350, event: "Aristotle founds formal logic and the syllogism at the Lyceum" },
        { year: 1958, event: "Toulmin publishes 'The Uses of Argument', introducing the six-part model", highlight: true },
        { year: 1979, event: "Toulmin's model becomes central to the field of argumentation and rhetoric" },
        { year: 1990, event: "Debate and composition curricula adopt Toulmin for analyzing real arguments" },
        { year: 2010, event: "Toulmin analysis becomes a standard tool for case-building and refutation" },
        { year: 2024, event: "The model is taught as the analytical core of intermediate argumentation" },
      ],
      keyTakeaways: [
        "The Toulmin model maps any argument into six parts: grounds, warrant, backing, claim, qualifier, rebuttal",
        "The warrant — the principle bridging evidence to conclusion — is usually unstated and is the prime attack point",
        "Qualifiers force honesty about strength ('probably' vs 'certainly'); overclaiming is a vulnerability",
        "Build all six parts even if you voice three; attack by finding the unstated warrant and testing its truth and exceptions",
      ],
      references: [
        { title: "Toulmin's Model of Argument (Purdue OWL)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/historical_perspectives_on_argumentation/toulmin_argument.html" },
        { title: "Stephen Toulmin (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/" },
        { title: "Aristotle's Logic (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/aristotle-logic/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-2-01-q1",
          type: "Finding the Warrant",
          challenge: `  Argument: "She scored in the 99th percentile
  on the entrance exam (grounds), so she'll
  excel in the program (claim)."

  What unstated principle is doing the work?`,
          text: "What is the warrant in this argument?",
          options: [
            "The exam was on a Tuesday",
            "High entrance-exam scores reliably predict success in the program — the bridging principle linking the score to the prediction",
            "She is a hard worker",
            "The program is difficult",
          ],
          correctIndex: 1,
          explanation: "The warrant is the unstated bridging principle that licenses moving from the grounds (99th-percentile score) to the claim (she'll excel): 'high entrance-exam scores reliably predict program success.' That principle is exactly where to attack — does the exam actually predict success? With backing or without? Locating the unstated warrant is the first move in Toulmin analysis, because if the bridge fails, the impressive score becomes irrelevant.",
        },
        {
          id: "debate-2-01-q2",
          type: "Qualifier",
          challenge: `  Two versions of the same claim:

   A: "This policy will eliminate poverty."
   B: "This policy will probably reduce poverty
      for most low-income families."`,
          text: "Why is version B often the stronger debate claim?",
          options: [
            "B is weaker and should be avoided — always claim the maximum",
            "B's honest qualifier ('probably', 'most') makes it defensible, while A's absolute claim ('eliminate') can be refuted by a single counterexample",
            "They are identical in strength",
            "A is better because it sounds more confident",
          ],
          correctIndex: 1,
          explanation: "The qualifier is about how strongly the claim holds. Version A ('eliminate poverty') is an absolute that a single counterexample destroys, and it invites the 'you overclaimed' attack. Version B's honest qualifiers ('probably', 'for most') make it far harder to refute while still being a meaningful claim. Calibrating the qualifier to what you can actually defend is a mark of a sophisticated arguer — confidence in wording is not the same as strength of argument.",
        },
        {
          id: "debate-2-01-q3",
          type: "Attacking the Warrant",
          challenge: `  Opponent: "Crime fell after the new mayor took
  office (grounds), so the mayor's policies reduced
  crime (claim)."

  You suspect the inference is the weak point.`,
          text: "What is the most efficient Toulmin-based attack?",
          options: [
            "Dispute whether crime actually fell",
            "Attack the unstated warrant — that the mayor's policies caused the drop — by raising rebuttal conditions (national crime also fell; other factors)",
            "Concede the whole argument",
            "Argue the mayor is a bad person",
          ],
          correctIndex: 1,
          explanation: "Even granting the grounds (crime fell), the argument rests on an unstated warrant: that the mayor's policies caused the drop. That's the efficient attack point — raise rebuttal conditions that break the bridge (crime fell nationwide regardless; other factors were at work). Attacking the warrant is more powerful than disputing the grounds, because if the link between evidence and conclusion fails, the conceded grounds no longer support the claim.",
        },
        {
          id: "debate-2-01-q4",
          type: "Backing",
          challenge: `  You argue: "This drug should be approved
  (claim) because trials showed it works
  (grounds), since trial success indicates
  real-world efficacy (warrant)."

  The opponent asks: "Why should I believe that
  warrant?"`,
          text: "What part of the Toulmin model answers their challenge?",
          options: [
            "The qualifier",
            "The backing — support for the warrant itself, e.g., the FDA's evidence standards and the history of trial-validated drugs",
            "The claim",
            "The grounds",
          ],
          correctIndex: 1,
          explanation: "When an opponent challenges the warrant ('why believe that principle?'), the backing answers it — it's the support for the warrant itself. Here the backing would be the regulatory evidence standards and the track record of trial-validated drugs that justify treating trial success as indicating real-world efficacy. Backing defends the joint where arguments most often break: the unstated or challenged principle connecting evidence to conclusion.",
        },
      ],
    },
  },

  // ─── debate-2-02: Deductive Reasoning ─────────────────────────────────────────
  {
    epochId: "debate-2",
    wonder: {
      name: "The Stoa Poikile",
      location: "Athens, Greece",
      era: "Ancient",
      emoji: "♟️",
    },
    id: "debate-2-02",
    order: 2,
    title: "Deduction: Validity and Soundness",
    subtitle: "When a conclusion follows necessarily — and when it only seems to",
    category: "arts",
    xp: 88,
    badge: { id: "debate-2-badge-02", name: "The Logician", emoji: "♟️" },
    challengeType: "quiz",
    info: {
      tagline: "A valid argument can be completely false — and knowing the difference is how you avoid being fooled by good-sounding logic.",
      year: -300,
      overview: [
        "Deductive reasoning moves from general premises to a conclusion that follows necessarily — if the premises are true, the conclusion must be true. The classic form is the syllogism: 'All humans are mortal (major premise); Socrates is human (minor premise); therefore Socrates is mortal (conclusion).' Deduction provides certainty, but only conditional certainty: the conclusion is guaranteed only if the premises are true and the form is valid. Debaters use deduction to lock in conclusions the opponent cannot escape without rejecting a premise.",
        "Two separate properties decide whether a deductive argument is any good: validity and soundness. Validity is about form — an argument is valid if the conclusion follows logically from the premises, regardless of whether the premises are actually true. Soundness is stronger — an argument is sound if it is valid AND all its premises are actually true. This distinction is the single most useful idea in this stage: a perfectly valid argument can lead to a false conclusion if a premise is false ('All birds can fly; a penguin is a bird; therefore a penguin can fly' — valid form, false premise, false conclusion).",
        "This matters enormously in debate because opponents often present arguments with impeccable logical form built on a shaky premise. The wrong response is to attack the logic (it's valid — you'll lose). The right response is to deny a premise (it's unsound). When you hear an argument that 'sounds logical' but reaches a conclusion you know is wrong, the error is almost always a false premise, not a logical flaw. Train yourself to ask: is this valid (does it follow)? and separately, is it sound (are the premises true)? — because attacking the wrong one wastes your speech.",
      ],
      technical: {
        title: "Valid Forms and the Premise Attack",
        body: [
          "Some argument forms are valid by structure. Modus ponens: 'If P then Q; P; therefore Q' (If it rains, the ground gets wet; it's raining; therefore the ground is wet). Modus tollens: 'If P then Q; not Q; therefore not P' (If it rains the ground gets wet; the ground is dry; therefore it didn't rain). Hypothetical syllogism: 'If P then Q; if Q then R; therefore if P then R.' These forms are always valid — so if an opponent uses them, you cannot win by attacking the logic. You must deny a premise.",
          "The premise attack is your main deductive weapon. When an argument is valid, find the weakest premise and show it's false or unsupported — that breaks the chain to the conclusion without disputing the logic. Conversely, when you build a deductive argument, your premises are your exposure: state premises you can defend, and expect the opponent to target the weakest one. A deductive argument is only as strong as its most questionable premise, because validity guarantees nothing about truth on its own.",
        ],
        codeExample: {
          label: "Validity vs. Soundness — The Crucial Distinction",
          code: `  VALIDITY  = does the conclusion FOLLOW from the
              premises? (about FORM only)
  SOUNDNESS = valid AND all premises actually TRUE

  ┌── VALID but UNSOUND (false premise) ──────────┐
  │ P1: All birds can fly.        ← FALSE         │
  │ P2: A penguin is a bird.      ← true          │
  │  C: A penguin can fly.        ← false!        │
  │ Form is perfect; conclusion is wrong.         │
  └───────────────────────────────────────────────┘

  VALID FORMS (can't beat the logic — deny a premise):
   MODUS PONENS:  If P→Q; P;     ∴ Q
   MODUS TOLLENS: If P→Q; not Q; ∴ not P
   HYPO. SYLLOG.: If P→Q; if Q→R; ∴ if P→R

  ATTACK RULE:
   valid argument, wrong conclusion → DENY A PREMISE
   (attacking the logic of a valid argument fails)`,
        },
      },
      incident: {
        title: "The Stoics and the Birth of Propositional Logic",
        when: "300 BCE",
        where: "The Stoa Poikile (Painted Porch), Athens",
        impact: "The Stoic philosophers, teaching in the painted colonnade that gave them their name, developed propositional logic — the formal rules of 'if-then' reasoning that underlie every valid deductive argument a debater makes today.",
        body: [
          "Around 300 BCE, Zeno of Citium began teaching in the Stoa Poikile, the 'painted porch' on the edge of the Athenian agora, founding the Stoic school. While Aristotle's logic centered on the syllogism and categories, the Stoics — especially Chrysippus — developed propositional logic: the formal study of how whole statements combine with 'if', 'and', 'or', and 'not'. They identified the valid argument forms still taught today, including modus ponens and modus tollens, giving reasoning a rigorous skeleton.",
          "The Stoic achievement matters to debaters because it isolated form from content — the recognition that an argument's validity depends on its structure, not its subject. This is the root of the validity/soundness distinction: you can check whether a conclusion follows (form, the Stoics' contribution) separately from whether the premises are true (content). When a modern debater hears a slick argument and asks 'wait — is that valid, or just a false premise dressed in good logic?', they are using a tool the Stoics forged on a porch in Athens twenty-three centuries ago.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Premises Asserted", sub: "general statements", type: "attacker" },
          { label: "Check Validity", sub: "does it follow? (form)", type: "system" },
          { label: "Check Soundness", sub: "are premises true?", type: "victim" },
          { label: "Sound Conclusion", sub: "valid + true premises", type: "result" },
        ],
      },
      timeline: [
        { year: -350, event: "Aristotle systematizes the categorical syllogism" },
        { year: -300, event: "The Stoics develop propositional logic and valid 'if-then' forms", highlight: true },
        { year: 1847, event: "George Boole formalizes logic algebraically, enabling modern symbolic logic" },
        { year: 1910, event: "Russell and Whitehead's 'Principia Mathematica' grounds math in formal logic" },
        { year: 1950, event: "Formal logic becomes foundational to computer science and proof" },
        { year: 2024, event: "Validity vs. soundness is a core module in debate's logic curriculum" },
      ],
      keyTakeaways: [
        "Deduction yields necessary conclusions — IF the premises are true and the form is valid",
        "Validity is about form (does it follow?); soundness is validity PLUS true premises",
        "A valid argument can have a false conclusion when a premise is false — that's valid but unsound",
        "Against a valid argument you can't win on logic — deny the weakest premise instead",
      ],
      references: [
        { title: "Validity and Soundness (Internet Encyclopedia of Philosophy)", url: "https://iep.utm.edu/val-snd/" },
        { title: "Stoic Logic (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/logic-ancient/" },
        { title: "Deductive and Inductive Arguments (IEP)", url: "https://iep.utm.edu/deductive-inductive-arguments/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-2-02-q1",
          type: "Validity vs Soundness",
          challenge: `  P1: All politicians are liars.
  P2: Senator Jones is a politician.
   C: Therefore, Senator Jones is a liar.

  The logic is airtight, but you think the
  conclusion is unfair.`,
          text: "Where is the flaw, and how should you attack it?",
          options: [
            "The logic is invalid — attack the form",
            "The argument is valid but unsound — attack the false/overbroad premise 'all politicians are liars', not the logic",
            "The conclusion is logically impossible",
            "There is no flaw; the conclusion must be accepted",
          ],
          correctIndex: 1,
          explanation: "The form is valid — if both premises were true, the conclusion would follow. So attacking the logic fails. The flaw is soundness: the sweeping premise 'all politicians are liars' is false (or at least unsupported), which makes the argument valid but unsound. The correct attack denies that premise. This is the single most common deductive trap: impeccable form resting on a false universal premise.",
        },
        {
          id: "debate-2-02-q2",
          type: "Valid Forms",
          challenge: `  P1: If the bill passes, taxes will rise.
  P2: Taxes did NOT rise.
   C: Therefore, the bill did not pass.`,
          text: "Is this argument valid, and what form is it?",
          options: [
            "Invalid — it's a fallacy",
            "Valid — it's modus tollens (If P→Q; not Q; therefore not P)",
            "Valid — it's modus ponens",
            "Invalid because taxes are unrelated to bills",
          ],
          correctIndex: 1,
          explanation: "This is modus tollens, a always-valid form: 'If P then Q; not Q; therefore not P.' If passing the bill would necessarily raise taxes, and taxes didn't rise, then the bill didn't pass. The form is valid, so the only way to contest the conclusion is to deny a premise — for instance, challenging P1 (maybe the bill could pass without raising taxes). You cannot beat valid form with a logic attack.",
        },
        {
          id: "debate-2-02-q3",
          type: "Premise Attack",
          challenge: `  An opponent runs a perfectly valid syllogism.
  Every step follows. But the conclusion is one
  you're confident is wrong.`,
          text: "What does this tell you about where the error must be?",
          options: [
            "The error is in the logical form",
            "If the form is valid but the conclusion is false, at least one premise must be false — find and deny the weakest premise",
            "There is no error; you must be mistaken",
            "The error is in the conclusion itself, independent of the premises",
          ],
          correctIndex: 1,
          explanation: "Validity guarantees that true premises yield a true conclusion. So if a valid argument reaches a false conclusion, the culprit must be a false premise — logically, there's nowhere else for the error to hide. Your job is to identify the weakest premise and show it's false or unsupported. This deduction-detective habit ('valid but wrong → hunt the false premise') protects you from being bullied by good-sounding logic.",
        },
        {
          id: "debate-2-02-q4",
          type: "Building Deductively",
          challenge: `  You want to build a deductive argument that the
  opponent cannot escape. You have a rock-solid
  logical form, but one of your three premises is
  shaky and hard to defend.`,
          text: "What is the realistic strength of your argument?",
          options: [
            "Very strong — valid form guarantees the conclusion regardless of premises",
            "Only as strong as its weakest premise — the opponent will target the shaky one to break the chain",
            "Unbeatable, because deduction is certain",
            "Irrelevant — premises don't matter in deduction",
          ],
          correctIndex: 1,
          explanation: "A deductive argument is exactly as strong as its weakest premise, because validity alone guarantees nothing about truth. A flawless form built on a shaky premise is brittle — a competent opponent will ignore the logic and hammer the weak premise to break the chain to your conclusion. When building deductively, state premises you can actually defend, and expect the weakest one to be attacked.",
        },
      ],
    },
  },

  // ─── debate-2-03: Inductive Reasoning ─────────────────────────────────────────
  {
    epochId: "debate-2",
    wonder: {
      name: "The Royal Society",
      location: "London, England",
      era: "Modern",
      emoji: "🔬",
    },
    id: "debate-2-03",
    order: 3,
    title: "Induction and the Strength of Evidence",
    subtitle: "Reasoning from examples to generalizations — and how strong that really is",
    category: "arts",
    xp: 86,
    badge: { id: "debate-2-badge-03", name: "The Empiricist", emoji: "🔬" },
    challengeType: "quiz",
    info: {
      tagline: "Most real arguments are inductive — they're never certain, only stronger or weaker, and you win by making yours stronger.",
      year: 1620,
      overview: [
        "Inductive reasoning moves from specific observations to a general conclusion: you observe many instances and infer a pattern. 'Every swan I've seen is white, so all swans are white' is induction — and famously wrong (black swans exist in Australia). Unlike deduction, induction never yields certainty; even with true premises, the conclusion could be false. Instead, inductive arguments are evaluated as strong or weak depending on how well the evidence supports the generalization. Nearly all empirical argument in debate — about effects, trends, and policy outcomes — is inductive.",
        "The strength of an induction depends on the evidence. A larger sample is stronger than a small one (3 cases prove little; 30,000 prove more). A representative sample is stronger than a biased one (surveying only your friends tells you little about the public). More varied evidence is stronger than narrow evidence (the pattern holding across different conditions, places, and times). And the conclusion should not overreach the evidence ('this worked in three small towns' does not establish 'this works everywhere'). These are the levers you push to strengthen your inductions and the cracks you pry open in your opponent's.",
        "Common forms of induction each have a characteristic weakness. Generalization (from a sample to a population) fails when the sample is too small or unrepresentative — that's a hasty generalization. Statistical inference fails when the numbers are cherry-picked or the base rate is ignored. Causal inference fails when correlation is mistaken for causation (the next stage). Argument from analogy fails when the cases aren't relevantly similar. A debater's empirical edge comes from demanding strong inductions from opponents — 'how big was the sample? was it representative?' — while supplying strong ones of their own.",
      ],
      technical: {
        title: "Sample Size, Representativeness, and Overreach",
        body: [
          "Three questions test any inductive generalization. First, sample size: is the evidence base large enough to support the breadth of the claim? A handful of anecdotes cannot ground a universal conclusion. Second, representativeness: does the sample reflect the population it's generalized to, or is it skewed (self-selected respondents, a convenient but atypical group)? Third, scope: does the conclusion stay within what the evidence supports, or does it overreach? 'Three studies in wealthy nations' does not license a claim about all nations.",
          "When attacking an opponent's induction, name the specific weakness rather than waving generally. 'That's just three anecdotes — far too small a sample to support a claim about millions of people' is decisive; 'I disagree' is not. When defending your own, pre-empt the attack: cite the sample size, note the representativeness, and qualify the conclusion to match the evidence. An honestly qualified induction ('this strongly suggests, across large and varied samples, that…') is far more defensible than an overreaching one, and judges reward the calibration.",
        ],
        codeExample: {
          label: "Evaluating an Inductive Argument",
          code: `  INDUCTION: specific observations → general claim
   (never certain — only STRONGER or WEAKER)

  THREE STRENGTH TESTS:
   1. SAMPLE SIZE    big enough for the claim's breadth?
        3 cases → weak;  30,000 cases → strong
   2. REPRESENTATIVE  sample reflect the population?
        "my friends" → biased;  random sample → strong
   3. SCOPE / OVERREACH  conclusion ≤ what evidence shows?
        "worked in 3 towns" ≠ "works everywhere"

  CLASSIC FAILURE — HASTY GENERALIZATION:
   too few or unrepresentative cases → sweeping claim
   "Every swan I've seen is white → all swans white"
   (black swans exist — induction is fallible)

  ATTACK SPECIFICALLY:
   ✓ "sample of 3 — far too small for a claim
      about millions"
   ✗ "I just disagree"`,
        },
      },
      incident: {
        title: "Francis Bacon and the Scientific Method",
        when: "1620",
        where: "England — the Royal Society's intellectual roots",
        impact: "Francis Bacon's 'Novum Organum' (1620) championed careful inductive reasoning from systematic observation as the engine of science — establishing the standards of sample, evidence, and caution that debaters now use to judge empirical claims.",
        body: [
          "In 1620, Francis Bacon published 'Novum Organum' ('New Instrument'), arguing that knowledge of nature should be built by careful induction — systematic observation and experiment accumulating into general conclusions — rather than by deducing the world from accepted authorities. Bacon warned against leaping to broad conclusions from scanty evidence and against the biases ('idols') that distort observation. His method, refined by the Royal Society and generations of scientists, made disciplined induction the foundation of empirical knowledge.",
          "Bacon's caution is exactly the caution a debater needs with empirical claims. He understood that induction is powerful but fallible, that its strength depends on the quantity and quality of evidence, and that the mind is prone to seeing patterns that aren't there. Every time a debater asks 'how large was the sample? was it representative? does the conclusion overreach?', they are applying Baconian standards. Science advanced by demanding strong inductions and distrusting hasty ones — and the same demand separates a rigorous empirical argument from a flimsy one in a debate round.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Observe Instances", sub: "specific cases / data", type: "attacker" },
          { label: "Infer a Pattern", sub: "general conclusion", type: "system" },
          { label: "Test the Strength", sub: "size, representativeness, scope", type: "victim" },
          { label: "Strong Induction", sub: "well-supported generalization", type: "result" },
        ],
      },
      timeline: [
        { year: 1620, event: "Bacon's 'Novum Organum' champions systematic inductive science", highlight: true },
        { year: 1660, event: "The Royal Society institutionalizes evidence-based empirical inquiry" },
        { year: 1739, event: "Hume analyzes the 'problem of induction' — why past patterns may not hold" },
        { year: 1920, event: "Modern statistics formalizes sampling, significance, and representativeness" },
        { year: 1950, event: "Polling and survey science make sample quality a public concern" },
        { year: 2024, event: "Sample-and-scope analysis is core to evaluating empirical debate evidence" },
      ],
      keyTakeaways: [
        "Induction reasons from specific cases to general claims and is never certain — only stronger or weaker",
        "Strength depends on sample size, representativeness, and whether the conclusion overreaches the evidence",
        "Hasty generalization is induction's classic failure: too few or unrepresentative cases yielding a sweeping claim",
        "Attack inductions specifically (sample too small/biased) and defend yours by qualifying the conclusion to the evidence",
      ],
      references: [
        { title: "Deductive and Inductive Arguments (IEP)", url: "https://iep.utm.edu/deductive-inductive-arguments/" },
        { title: "Francis Bacon, Novum Organum (overview)", url: "https://plato.stanford.edu/entries/francis-bacon/" },
        { title: "The Problem of Induction (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/induction-problem/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-2-03-q1",
          type: "Sample Size",
          challenge: `  A debater argues: "I know three people who got
  rich after dropping out of college, so dropping
  out is a smart financial move for young people
  generally."`,
          text: "What is the inductive flaw?",
          options: [
            "Nothing — three real examples prove the trend",
            "Hasty generalization — three anecdotes are far too small and unrepresentative a sample to support a sweeping claim about young people generally",
            "The argument is deductively invalid",
            "Dropping out is always wrong, so the logic fails",
          ],
          correctIndex: 1,
          explanation: "This is a hasty generalization: an inductive leap from a tiny, self-selected sample (three memorable success stories) to a broad claim about young people generally. It ignores sample size, representativeness (survivorship bias — we don't hear about the many who dropped out and struggled), and scope. The decisive attack names the specific weakness: the sample is far too small and skewed to support the breadth of the conclusion.",
        },
        {
          id: "debate-2-03-q2",
          type: "Representativeness",
          challenge: `  "We surveyed visitors to our pro-policy website
  and 95% support the policy — so the public
  clearly supports it."`,
          text: "Why is this induction weak despite the large 95% figure?",
          options: [
            "95% is too small a majority",
            "The sample is unrepresentative — people who visit a pro-policy website are self-selected supporters, so it can't be generalized to the public",
            "Surveys are never valid",
            "The number should be a raw count, not a percentage",
          ],
          correctIndex: 1,
          explanation: "The flaw is representativeness, not the percentage. Visitors to a pro-policy website are a self-selected group already inclined to support the policy, so they don't reflect the general public. A biased sample can produce any number you like; 95% of supporters supporting something is unsurprising and uninformative about everyone else. Strong generalization requires a sample that actually mirrors the population being claimed about.",
        },
        {
          id: "debate-2-03-q3",
          type: "Induction vs Deduction",
          challenge: `  A debater treats their inductive argument — based
  on strong but limited evidence — as if it were a
  mathematical proof, claiming the conclusion is
  'certain' and 'cannot be false.'`,
          text: "What's the error in framing?",
          options: [
            "No error — strong evidence makes induction certain",
            "Induction never yields certainty; even strong inductive evidence only makes a conclusion probable, so claiming certainty overreaches and invites refutation",
            "Inductive arguments are always invalid",
            "They should add more premises to make it deductive",
          ],
          correctIndex: 1,
          explanation: "Induction is fundamentally probabilistic — even excellent evidence makes a conclusion likely, never certain (a single black swan can overturn 'all swans are white'). Framing an inductive conclusion as a mathematical certainty overreaches and hands the opponent an easy attack: one counterexample or one limitation of the evidence undercuts the inflated claim. Honest qualification ('this strongly suggests') is both more accurate and more defensible.",
        },
        {
          id: "debate-2-03-q4",
          type: "Scope",
          challenge: `  Evidence: a policy succeeded in three small,
  wealthy Scandinavian towns.

  Claim: "Therefore this policy will work in
  large, diverse cities across the developing
  world."`,
          text: "What is the problem with this inference?",
          options: [
            "Nothing — success anywhere proves success everywhere",
            "Overreach of scope — the conclusion generalizes far beyond what the narrow, non-representative evidence supports",
            "The sample is too large",
            "The towns should have been bigger to count",
          ],
          correctIndex: 1,
          explanation: "The conclusion overreaches its scope: evidence from three small, wealthy, culturally homogeneous towns cannot support a claim about large, diverse cities in entirely different economic contexts. The relevant conditions differ enormously, so the pattern may not transfer. Strong induction keeps the conclusion within what the evidence covers; here the right qualified claim would be narrow ('this shows promise in small, high-income communities'), and the leap to the developing world is unwarranted.",
        },
      ],
    },
  },

  // ─── debate-2-04: Causation vs Correlation ────────────────────────────────────
  {
    epochId: "debate-2",
    wonder: {
      name: "The Broad Street Pump",
      location: "London, England",
      era: "19th Century",
      emoji: "🔗",
    },
    id: "debate-2-04",
    order: 4,
    title: "Causation vs. Correlation",
    subtitle: "The single most exploited gap in argument — and how to police it",
    category: "arts",
    xp: 90,
    badge: { id: "debate-2-badge-04", name: "Cause & Effect", emoji: "🔗" },
    challengeType: "quiz",
    info: {
      tagline: "Two things moving together is not one causing the other — and most bad arguments live in that gap.",
      year: 1854,
      overview: [
        "Correlation means two things vary together — when one goes up, the other tends to go up (or down). Causation means one thing actually produces the other. The cardinal error of empirical argument is treating correlation as if it proved causation. Ice cream sales and drowning deaths rise together, but ice cream doesn't cause drowning — a third factor (hot weather) drives both. Debaters who can spot and name this gap win empirical exchanges, because a huge fraction of weak arguments — in politics, advertising, and policy — rest on dressing up a correlation as a cause.",
        "There are four ways a correlation between A and B can arise without A causing B. First, reverse causation: B might cause A instead (maybe wealth causes the healthy habit, not the habit causing wealth). Second, a common cause: a third factor C causes both A and B (hot weather causes both ice cream and swimming). Third, coincidence: with enough variables, some will correlate by pure chance (spurious correlations). Fourth, an indirect or mediated chain that isn't what's claimed. Before accepting 'A causes B', a debater should ask which of these alternatives better explains the correlation.",
        "Establishing genuine causation requires more than correlation. The strongest evidence comes from controlled experiments (randomly assigning the cause and watching the effect, which rules out confounders), a plausible mechanism (a reason why A would produce B), correct temporal order (the cause precedes the effect), dose-response (more cause, more effect), and consistency across studies. When you argue causation, supply as many of these as you can; when you attack an opponent's causal claim, point out which they lack — usually they have a bare correlation and no mechanism, no experiment, and an obvious confounder.",
      ],
      technical: {
        title: "The Four Alternatives and the Bradford Hill Criteria",
        body: [
          "When someone claims A causes B from a correlation, run the four alternatives: (1) Does B cause A (reverse causation)? (2) Does some C cause both (confounding/common cause)? (3) Could it be coincidence (especially with cherry-picked variables)? (4) Is the real chain different from the one claimed? If any alternative is plausible and unaddressed, the causal claim is unproven. This checklist is fast and devastating: 'Even granting the correlation, they've shown no mechanism and ignored an obvious common cause — so causation isn't established.'",
          "Epidemiologist Austin Bradford Hill proposed criteria that strengthen a causal inference: strength of association, consistency across studies, specificity, temporality (cause before effect), biological/causal gradient (dose-response), plausible mechanism, coherence with other knowledge, and experimental evidence. You don't recite the list in a round, but you use its spirit: the more of these an opponent's causal claim satisfies, the stronger it is; the fewer, the more it looks like a bare correlation. The gold standard remains the randomized controlled experiment, which is why 'is there an actual experiment, or just an observed correlation?' is such a powerful question.",
        ],
        codeExample: {
          label: "Correlation ≠ Causation — The Four Alternatives",
          code: `  A and B move together. Before "A causes B", ask:

   1. REVERSE      Does B cause A instead?
   2. COMMON CAUSE Does some C cause BOTH A and B?
        (ice cream ↔ drowning ← hot weather)
   3. COINCIDENCE  Chance correlation (cherry-picked)?
   4. WRONG CHAIN  Is the real mechanism different?

  ANY plausible + unaddressed → causation UNPROVEN

  WHAT STRENGTHENS A CAUSAL CLAIM:
   ✓ controlled experiment (rules out confounders) ★
   ✓ plausible mechanism (WHY A → B)
   ✓ temporal order (cause precedes effect)
   ✓ dose-response (more cause → more effect)
   ✓ consistency across many studies

  KILLER QUESTION:
   "Is there an actual experiment — or just an
    observed correlation with no mechanism?"`,
        },
      },
      incident: {
        title: "John Snow, Cholera, and Proving a Cause",
        when: "1854",
        where: "Broad Street, Soho, London",
        impact: "Physician John Snow proved that cholera spread through contaminated water — not 'bad air' — by mapping cases to a single public pump, a landmark demonstration of moving from correlation to a real, actionable cause.",
        body: [
          "In the 1854 cholera outbreak in Soho, the prevailing theory blamed 'miasma' — bad air. John Snow suspected contaminated water and did something revolutionary: he mapped every cholera death and found them clustered around the Broad Street public water pump. He noticed telling exceptions that ruled out alternatives — a nearby workhouse with its own well had few deaths; a woman who had moved away but had Broad Street water delivered because she liked its taste died of cholera. The correlation between the pump and the deaths was tight, and the exceptions pointed to the pump as the cause, not coincidence or air.",
          "Snow's work is celebrated because he didn't stop at a correlation; he marshaled the pattern, the exceptions, and a mechanism (waterborne contamination) to establish causation strongly enough to act — he had the pump handle removed, and the outbreak subsided. It is the founding story of epidemiology and a perfect model of causal argument: a correlation is the starting point, but proving cause requires ruling out alternatives, finding a mechanism, and ideally testing an intervention. A debater making a causal claim should aim for Snow's rigor; one attacking a weak causal claim should note how far it falls short of it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "A and B Correlate", sub: "they move together", type: "attacker" },
          { label: "Check Alternatives", sub: "reverse / common cause / chance", type: "system" },
          { label: "Demand a Mechanism", sub: "experiment, temporal order", type: "victim" },
          { label: "Causation Established", sub: "or exposed as a bare correlation", type: "result" },
        ],
      },
      timeline: [
        { year: 1854, event: "John Snow traces cholera to the Broad Street pump, founding epidemiology", highlight: true },
        { year: 1925, event: "R.A. Fisher develops randomized controlled experiments to isolate causes" },
        { year: 1965, event: "Austin Bradford Hill publishes criteria for inferring causation" },
        { year: 2000, event: "'Correlation is not causation' becomes a watchword against spurious claims" },
        { year: 2011, event: "Spurious-correlation datasets popularize the dangers of chance patterns" },
        { year: 2024, event: "Causal-inference literacy is core to evaluating policy evidence in debate" },
      ],
      keyTakeaways: [
        "Correlation (moving together) is not causation (one producing the other) — most weak empirical arguments confuse them",
        "A correlation can arise from reverse causation, a common cause, coincidence, or a different chain than claimed",
        "Real causation needs more: a mechanism, correct temporal order, dose-response, and ideally a controlled experiment",
        "Attack causal claims by naming the missing piece — usually no mechanism, no experiment, and an obvious confounder",
      ],
      references: [
        { title: "Correlation and Causation (Australian Bureau of Statistics)", url: "https://www.abs.gov.au/" },
        { title: "John Snow and the Broad Street Pump (UCLA Epidemiology)", url: "https://www.ph.ucla.edu/epi/snow.html" },
        { title: "Bradford Hill Criteria (overview)", url: "https://www.ncbi.nlm.nih.gov/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-2-04-q1",
          type: "Common Cause",
          challenge: `  "Cities with more police officers have more
  crime. Therefore, hiring police officers
  CAUSES crime — we should cut police budgets."`,
          text: "What's the flaw in this causal reasoning?",
          options: [
            "It's correct — the correlation proves police cause crime",
            "It ignores reverse causation/common cause — high-crime cities hire more police in response to crime; the causation likely runs the other way",
            "The sample of cities is too small",
            "Crime cannot be measured",
          ],
          correctIndex: 1,
          explanation: "This mistakes correlation for causation and gets the direction backwards. High-crime cities hire more police because of the crime — reverse causation — and city size is a common cause of both. The correlation is real but the claimed mechanism (police cause crime) is almost certainly wrong. Running the four alternatives immediately exposes it: reverse causation and a common cause both explain the correlation far better than 'police cause crime.'",
        },
        {
          id: "debate-2-04-q2",
          type: "Confounding",
          challenge: `  "Studies show coffee drinkers live longer.
  So everyone should drink coffee to extend
  their lifespan."

  You note that coffee drinkers in these studies
  also tend to be wealthier and have better
  healthcare access.`,
          text: "What have you identified?",
          options: [
            "A reverse causation only",
            "A confounder (common cause) — wealth/healthcare access may drive both coffee drinking and longevity, so the causal claim from the correlation is unproven",
            "A coincidence with no relevance",
            "Proof that coffee extends life",
          ],
          correctIndex: 1,
          explanation: "Wealth and healthcare access are confounders — a common cause that could produce both more coffee drinking and longer life — so the observed correlation doesn't establish that coffee itself extends lifespan. This is exactly why observational correlations are weak causal evidence: confounders lurk everywhere. To support the causal claim you'd need to control for wealth/healthcare (or run an experiment); pointing out the unaddressed confounder shows the causation is unproven.",
        },
        {
          id: "debate-2-04-q3",
          type: "Establishing Cause",
          challenge: `  A debater wants to prove their policy actually
  reduces unemployment, not just that the two
  are correlated.`,
          text: "Which evidence would most strongly support genuine causation?",
          options: [
            "A single observation that unemployment fell after the policy",
            "A controlled study (e.g., comparing similar regions with and without the policy) plus a plausible mechanism for how the policy reduces unemployment",
            "A larger correlation coefficient alone",
            "A poll showing people believe the policy works",
          ],
          correctIndex: 1,
          explanation: "The strongest causal evidence comes from a controlled comparison — similar regions with and without the policy — which helps rule out confounders, combined with a plausible mechanism explaining how the policy reduces unemployment. A single 'after' observation is post hoc reasoning; a bigger correlation is still just correlation; a belief poll is irrelevant to actual causation. Experiment-plus-mechanism is the gold standard the debater should aim for.",
        },
        {
          id: "debate-2-04-q4",
          type: "Post Hoc",
          challenge: `  "I wore my lucky socks, and then our team won.
  The socks caused the win."

  A debater uses a structurally identical argument:
  "The new mayor took office, then the economy
  improved, so the mayor caused the improvement."`,
          text: "What fallacy do both arguments share?",
          options: [
            "Straw man",
            "Post hoc ergo propter hoc — assuming that because B followed A, A caused B, with no further evidence of causation",
            "Ad hominem",
            "Begging the question",
          ],
          correctIndex: 1,
          explanation: "Both commit post hoc ergo propter hoc ('after this, therefore because of this') — inferring causation merely from temporal sequence. Wearing socks before a win, or taking office before an economic upturn, establishes only that one preceded the other, not that it caused it. Temporal order is necessary for causation but nowhere near sufficient; without a mechanism, ruling out confounders (the economy may have improved for global reasons), and ideally an experiment, the causal claim is unsupported.",
        },
      ],
    },
  },

  // ─── debate-2-05: Formal Fallacies ────────────────────────────────────────────
  {
    epochId: "debate-2",
    wonder: {
      name: "Principia Mathematica",
      location: "Cambridge, England",
      era: "Modern",
      emoji: "⚠️",
    },
    id: "debate-2-05",
    order: 5,
    title: "Formal Fallacies",
    subtitle: "Arguments that look valid but break the rules of logic itself",
    category: "arts",
    xp: 88,
    badge: { id: "debate-2-badge-05", name: "Flaw Finder", emoji: "⚠️" },
    challengeType: "quiz",
    info: {
      tagline: "Some invalid arguments mimic valid ones almost perfectly — the formal fallacies are the counterfeits you must learn to detect.",
      year: 1910,
      overview: [
        "A formal fallacy is an argument that is invalid because of its structure — the conclusion does not follow from the premises, no matter what the content is. These are dangerous precisely because they resemble valid forms. The two most common counterfeits mimic modus ponens and modus tollens. Affirming the consequent: 'If P then Q; Q; therefore P' — invalid (If it rains the ground is wet; the ground is wet; therefore it rained — but the sprinkler could have wet it). Denying the antecedent: 'If P then Q; not P; therefore not Q' — also invalid (If it rains the ground is wet; it didn't rain; therefore the ground is dry — but again, the sprinkler).",
        "The reason these fail is that 'if P then Q' only tells you P is sufficient for Q, not that P is the only route to Q. Q can happen by other means. Affirming the consequent ignores that other causes could produce Q; denying the antecedent ignores that Q could occur without P. Both confuse a one-way conditional for a two-way (biconditional) one. Once you see the pattern — 'just because P guarantees Q doesn't mean Q guarantees P, or that no-P guarantees no-Q' — these fallacies become easy to catch, even when wrapped in persuasive language.",
        "Another formal fallacy worth knowing is the undistributed middle: 'All A are B; all C are B; therefore all C are A' (All dogs are animals; all cats are animals; therefore all cats are dogs). Sharing a middle term (B, animals) doesn't connect A and C. Formal fallacies appear constantly in real arguments dressed in topical content — a debater who recognizes the underlying invalid form can answer instantly: 'that's affirming the consequent — Q can be true for reasons other than P, so P doesn't follow.' Naming the fallacy, then explaining the gap in plain terms, is the cleanest refutation.",
      ],
      technical: {
        title: "The Counterfeit Conditionals",
        body: [
          "Lay the valid and invalid forms side by side. Valid — Modus ponens: 'If P then Q; P; therefore Q.' Valid — Modus tollens: 'If P then Q; not Q; therefore not P.' Invalid — Affirming the consequent: 'If P then Q; Q; therefore P.' Invalid — Denying the antecedent: 'If P then Q; not P; therefore not Q.' Notice the valid forms work with the antecedent affirmed or the consequent denied; the invalid ones flip this. A reliable test: ask whether Q could be true without P (if yes, affirming the consequent fails) and whether Q could be true even when P is false (if yes, denying the antecedent fails).",
          "In a round, don't just shout the Latin name — that persuades no one. Name the fallacy for precision, then immediately translate it into the concrete gap: 'They say the ground is wet so it must have rained — but that's affirming the consequent: the sprinkler, a burst pipe, or a hose could make the ground wet, so wetness doesn't prove rain.' The plain-language counterexample is what the judge actually credits. Formal-fallacy spotting is a fast, high-confidence refutation because the error is in the structure, independent of any disputed facts.",
        ],
        codeExample: {
          label: "Valid Forms vs. Their Formal-Fallacy Counterfeits",
          code: `  VALID:                  INVALID (counterfeit):
  ───────────────────     ──────────────────────────
  MODUS PONENS            AFFIRMING THE CONSEQUENT
   If P→Q;  P             If P→Q;  Q
   ∴ Q        ✓           ∴ P        ✗
                          (Q can occur without P)

  MODUS TOLLENS           DENYING THE ANTECEDENT
   If P→Q;  not Q         If P→Q;  not P
   ∴ not P     ✓          ∴ not Q     ✗
                          (Q can occur even if not P)

  EXAMPLE (affirming consequent):
   "If it rained, ground is wet. Ground is wet.
    ∴ it rained."  ✗  — sprinkler could wet it!

  UNDISTRIBUTED MIDDLE:
   All A are B; all C are B; ∴ all C are A   ✗
   (dogs & cats are both animals ≠ cats are dogs)

  TEST: could Q be true WITHOUT P? if yes → fallacy`,
        },
      },
      incident: {
        title: "The Quest for Airtight Logic — Principia Mathematica",
        when: "1910–1913",
        where: "Cambridge, England",
        impact: "Russell and Whitehead's monumental attempt to derive all mathematics from pure logic forced an unprecedented precision about which inference forms are genuinely valid — sharpening the very distinctions that let us name formal fallacies.",
        body: [
          "Between 1910 and 1913, Bertrand Russell and Alfred North Whitehead published 'Principia Mathematica', a three-volume attempt to derive all of mathematics from a small set of logical axioms and rules of inference. The project demanded total precision about which steps of reasoning are valid — so much so that it took hundreds of pages to prove that 1 + 1 = 2. This obsessive rigor was the culmination of centuries of work clarifying exactly which argument forms preserve truth and which only appear to.",
          "That precision is what underlies a debater's ability to name a formal fallacy with confidence. When logicians nailed down that 'if P then Q' asserts only that P suffices for Q — not that Q suffices for P — they explained exactly why affirming the consequent is invalid in every instance, regardless of topic. The formal fallacies aren't matters of opinion or rhetoric; they are structural errors that the rigorous study of logic proved to be invalid. A debater who catches one is standing on the same bedrock that Russell and Whitehead spent thousands of pages laying down: an invalid form cannot be rescued by persuasive content.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Argument Sounds Valid", sub: "mimics a good form", type: "attacker" },
          { label: "Check the Structure", sub: "ponens? or counterfeit?", type: "system" },
          { label: "Find the Gap", sub: "could Q be true without P?", type: "victim" },
          { label: "Fallacy Exposed", sub: "name it + plain counterexample", type: "result" },
        ],
      },
      timeline: [
        { year: -350, event: "Aristotle catalogs valid and invalid syllogistic forms" },
        { year: -300, event: "The Stoics formalize the valid conditional forms" },
        { year: 1910, event: "Russell and Whitehead's Principia Mathematica pursues airtight logical derivation", highlight: true },
        { year: 1931, event: "Gödel's incompleteness theorems reshape the limits of formal systems" },
        { year: 1950, event: "Formal logic becomes foundational to computing and proof verification" },
        { year: 2024, event: "Formal-fallacy recognition is a standard debate logic module" },
      ],
      keyTakeaways: [
        "A formal fallacy is invalid because of its structure, regardless of content — it only mimics a valid form",
        "Affirming the consequent ('If P→Q; Q; ∴ P') fails because Q can be true without P",
        "Denying the antecedent ('If P→Q; not P; ∴ not Q') fails because Q can be true even when P is false",
        "Name the fallacy for precision, then expose it with a plain-language counterexample the judge can see",
      ],
      references: [
        { title: "Formal and Informal Fallacies (Internet Encyclopedia of Philosophy)", url: "https://iep.utm.edu/fallacy/" },
        { title: "Affirming the Consequent (Logically Fallacious)", url: "https://www.logicallyfallacious.com/" },
        { title: "Principia Mathematica (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/principia-mathematica/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-2-05-q1",
          type: "Affirming the Consequent",
          challenge: `  "If a country is a democracy, it holds elections.
  Country X holds elections. Therefore, Country X
  is a democracy."

  But you know some authoritarian states hold
  (sham) elections too.`,
          text: "What formal fallacy is this?",
          options: [
            "Denying the antecedent",
            "Affirming the consequent — Q (elections) can be true without P (democracy), so P doesn't follow",
            "Undistributed middle",
            "It is actually valid (modus ponens)",
          ],
          correctIndex: 1,
          explanation: "This affirms the consequent: 'If P→Q; Q; therefore P.' Holding elections (Q) is necessary for but not unique to democracy — authoritarian states stage elections too — so observing elections doesn't prove democracy. The conditional only says democracy is sufficient for elections, not that elections are sufficient for democracy. The plain counterexample (sham elections in autocracies) makes the gap obvious to a judge.",
        },
        {
          id: "debate-2-05-q2",
          type: "Denying the Antecedent",
          challenge: `  "If we raise taxes, the deficit will shrink.
  We are NOT raising taxes. Therefore, the
  deficit will NOT shrink."`,
          text: "Why is this argument invalid?",
          options: [
            "It's valid — it's modus tollens",
            "Denying the antecedent — the deficit could shrink by other means (e.g., spending cuts or growth), so 'not raising taxes' doesn't guarantee 'deficit won't shrink'",
            "It affirms the consequent",
            "Taxes and deficits are unrelated",
          ],
          correctIndex: 1,
          explanation: "This denies the antecedent: 'If P→Q; not P; therefore not Q.' The conditional says raising taxes is one way to shrink the deficit, not the only way. The deficit could shrink through spending cuts or economic growth even without a tax increase — so 'not P' doesn't establish 'not Q.' It mimics the valid modus tollens but flips it: tollens denies the consequent (not Q → not P), which is valid; denying the antecedent is not.",
        },
        {
          id: "debate-2-05-q3",
          type: "Undistributed Middle",
          challenge: `  "All successful entrepreneurs take risks.
  My opponent takes risks. Therefore, my opponent
  is a successful entrepreneur."`,
          text: "What is the structural error?",
          options: [
            "Nothing — it follows logically",
            "Undistributed middle — sharing a term ('takes risks') doesn't connect 'my opponent' to 'successful entrepreneur'; many risk-takers are not entrepreneurs",
            "Affirming the consequent",
            "It's a sound argument",
          ],
          correctIndex: 1,
          explanation: "This is the undistributed middle: 'All A are B; X is B; therefore X is A.' Successful entrepreneurs taking risks doesn't make every risk-taker a successful entrepreneur — gamblers, skydivers, and reckless drivers take risks too. The shared middle term ('takes risks') is too broad to link the two categories. It's structurally the same as 'dogs are animals; cats are animals; therefore cats are dogs.'",
        },
        {
          id: "debate-2-05-q4",
          type: "Refutation Technique",
          challenge: `  You catch your opponent affirming the consequent.
  In your speech you simply say, in Latin,
  "That's affirming the consequent!" and move on.

  The lay judge looks puzzled.`,
          text: "What would make this refutation land better?",
          options: [
            "Saying the Latin name louder",
            "Name it briefly for precision, then translate it into a concrete counterexample showing the consequent can be true without the antecedent",
            "Skip naming it and just assert they're wrong",
            "Use even more technical jargon",
          ],
          correctIndex: 1,
          explanation: "The fallacy name is precise but means nothing to a lay judge on its own. The refutation lands when you pair the name with a plain counterexample: 'They say the ground is wet so it rained — but a sprinkler could wet it, so wetness doesn't prove rain.' The concrete gap is what the judge credits. Naming gives precision; the counterexample gives persuasion — you want both, not jargon alone.",
        },
      ],
    },
  },

  // ─── debate-2-06: Informal Fallacies of Relevance ─────────────────────────────
  {
    epochId: "debate-2",
    wonder: {
      name: "The Areopagus",
      location: "Athens, Greece",
      era: "Ancient",
      emoji: "🎯",
    },
    id: "debate-2-06",
    order: 6,
    title: "Fallacies of Relevance",
    subtitle: "Ad hominem, straw man, red herring, and appeals that dodge the point",
    category: "arts",
    xp: 88,
    badge: { id: "debate-2-badge-06", name: "Relevance Referee", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "The most common cheat in argument isn't bad logic — it's changing the subject while pretending you didn't.",
      year: -399,
      overview: [
        "Informal fallacies are errors in the content or context of reasoning rather than its form, and the largest family is fallacies of relevance — moves that bring in something beside the point and pass it off as a response. They are the most common fallacies in real argument because they're persuasive: they feel like answers while dodging the actual claim. The four every debater must recognize on sight are ad hominem, straw man, red herring, and the irrelevant appeal (to emotion, popularity, or misused authority).",
        "Ad hominem attacks the person instead of the argument ('you can't trust her economics — she's never run a business'). Straw man distorts the opponent's position into a weaker version, then refutes the distortion ('my opponent wants open borders' when they argued for modest visa reform). Red herring introduces an irrelevant distraction to pull attention off the real issue ('we're debating tax policy, but what about the deficit my opponent ignored last year?'). Each is a relevance failure: even if the diversion is true, it doesn't address the claim on the table.",
        "The irrelevant appeals round out the family. Appeal to emotion substitutes feeling for reasons ('think of the children!' with no argument). Appeal to popularity (ad populum) treats wide belief as proof ('most people think X, so X is true'). Appeal to inappropriate authority cites someone outside their expertise (a celebrity on vaccines). Note the nuance: appealing to a relevant expert is legitimate; appealing to a famous non-expert is not — and emotion that's connected to a real argument is fine; emotion as a substitute for one is the fallacy. The skill is catching the substitution and calmly redirecting: 'that doesn't answer my actual argument, which was…'.",
      ],
      technical: {
        title: "Naming the Dodge and Redirecting",
        body: [
          "The antidote to a relevance fallacy is to name the dodge and return to the real point. For a straw man: 'That's not my argument — I argued for X, not the extreme version you described. On my actual argument…' For ad hominem: 'My background doesn't change whether the evidence I cited is true — address the evidence.' For a red herring: 'The deficit isn't what we're debating; on the tax question at hand…' The move is always the same shape: identify that the response is off-target, then drag the debate back to the claim that was dodged.",
          "Be careful not to over-call fallacies. Not every personal reference is ad hominem — questioning a source's relevant bias or qualifications can be legitimate (a study funded by an interested party is fair to flag). Not every emotional appeal is fallacious — emotion tied to a real impact is persuasive and proper. Not every authority citation is the appeal-to-authority fallacy — citing genuine experts in their field is exactly what good evidence does. The fallacy is the irrelevant substitution: attacking the person instead of the argument, distorting instead of engaging, feeling instead of reasoning. Reserve the charge for the genuine dodge.",
        ],
        codeExample: {
          label: "The Four Relevance Fallacies and Their Antidotes",
          code: `  AD HOMINEM     attack the PERSON, not the argument
   "Don't trust her — she's never run a business."
   → "My background doesn't change the evidence.
      Address the argument."

  STRAW MAN      distort their view, refute the distortion
   They said "visa reform"; you attack "open borders".
   → "That's not my argument — I said X, not that."

  RED HERRING    irrelevant distraction off the issue
   "But what about the deficit last year?"
   → "That's not what we're debating. On the
      actual question..."

  IRRELEVANT APPEALS:
   • EMOTION    feeling instead of reasons
   • POPULARITY "everyone believes it" = true?  no
   • BAD AUTHORITY  famous non-expert on the topic

  ⚠ DON'T OVER-CALL: relevant bias, real impacts,
    and genuine experts are all LEGITIMATE.`,
        },
      },
      incident: {
        title: "The Trial of Socrates",
        when: "399 BCE",
        where: "The court near the Areopagus, Athens",
        impact: "Socrates was condemned to death on charges that substituted his unpopularity and personal character for any real argument — a stark warning of what happens when a society lets fallacies of relevance replace reasoned engagement.",
        body: [
          "In 399 BCE, Socrates was tried in Athens on charges of 'impiety' and 'corrupting the youth.' As Plato's account portrays it, the case against him leaned heavily on his reputation, his irritating habit of questioning prominent citizens, and popular resentment — appeals to the jury's feelings and prejudices rather than substantive proof of wrongdoing. Socrates, defending himself, repeatedly tried to drag the discussion back to the actual arguments and evidence, exposing how little the accusations addressed any real offense. He was convicted and sentenced to death.",
          "The trial is a permanent lesson in fallacies of relevance. The prosecution's most effective weapons were ad hominem (attacking Socrates' character and influence) and appeals to popular emotion, not reasoned demonstrations that he had broken a law. Socrates' defense was, in essence, a demand for relevance — answer the actual charge with actual evidence. That a brilliant reasoner could be killed by irrelevant appeals shows why naming and resisting these fallacies matters beyond any trophy: a culture that rewards distraction and personal attack over engagement with the argument can convince itself of anything, and do real harm.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Claim on the Table", sub: "the real issue", type: "attacker" },
          { label: "The Dodge", sub: "attack person / distort / distract", type: "system" },
          { label: "Name It", sub: "'that's not my argument'", type: "victim" },
          { label: "Redirect", sub: "back to the actual claim", type: "result" },
        ],
      },
      timeline: [
        { year: -399, event: "Socrates is condemned partly through ad hominem and appeals to prejudice", highlight: true },
        { year: -350, event: "Aristotle catalogs fallacies in 'Sophistical Refutations'" },
        { year: 1690, event: "John Locke names the 'ad' arguments (ad hominem, ad populum, etc.)" },
        { year: 1970, event: "Informal logic emerges as a field focused on real-world fallacies" },
        { year: 2016, event: "Misinformation makes public fallacy-spotting a civic priority" },
        { year: 2024, event: "Relevance fallacies are core to media literacy and debate curricula" },
      ],
      keyTakeaways: [
        "Fallacies of relevance dodge the claim by introducing something beside the point and passing it off as an answer",
        "Ad hominem attacks the person; straw man distorts the position; red herring distracts with an irrelevant issue",
        "Irrelevant appeals substitute emotion, popularity, or a non-expert's fame for actual reasons",
        "Answer by naming the dodge and redirecting to the real claim — but don't over-call: relevant bias and genuine experts are legitimate",
      ],
      references: [
        { title: "Fallacies (Internet Encyclopedia of Philosophy)", url: "https://iep.utm.edu/fallacy/" },
        { title: "The Trial of Socrates (Plato's Apology)", url: "https://plato.stanford.edu/entries/socrates/" },
        { title: "Logical Fallacies (Purdue OWL)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/logic_in_argumentative_writing/fallacies.html" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-2-06-q1",
          type: "Straw Man",
          challenge: `  Debater A argues for "modest background checks
  on firearm purchases."
  Debater B responds: "My opponent wants to
  confiscate everyone's guns and leave families
  defenseless!"`,
          text: "What fallacy has Debater B committed, and how should A respond?",
          options: [
            "Ad hominem — B attacked A personally",
            "Straw man — B distorted A's modest position into an extreme one; A should say 'that's not my argument — I proposed background checks, not confiscation' and restate the actual claim",
            "Red herring — B changed the subject entirely",
            "No fallacy — B accurately summarized A",
          ],
          correctIndex: 1,
          explanation: "B built a straw man: distorting A's modest proposal (background checks) into an extreme caricature (confiscation) that's easier to attack. The correct response is to refuse the distortion and restate the real position: 'That's not what I argued — I proposed background checks, not confiscation. On my actual argument…' Letting the straw man stand means debating B's invented position instead of your own, which you must not do.",
        },
        {
          id: "debate-2-06-q2",
          type: "Ad Hominem vs Legitimate",
          challenge: `  Two responses to an opponent's cited study:

   A: "You're too young to understand economics."
   B: "That study was funded by the industry it
      benefits — its conclusions may be biased."`,
          text: "Which is a fallacious ad hominem and which is legitimate?",
          options: [
            "Both are fallacious ad hominems",
            "A is fallacious (attacks the person irrelevantly); B is legitimate (flags a relevant conflict of interest affecting the evidence's reliability)",
            "Both are legitimate",
            "A is legitimate; B is the fallacy",
          ],
          correctIndex: 1,
          explanation: "A is a fallacious ad hominem: the opponent's age is irrelevant to whether the study's evidence is sound. B is legitimate: noting that a study was funded by an interested party flags a genuine conflict of interest that bears on the evidence's reliability — that's relevant source criticism, not a personal attack. The line is relevance: attacking the person to dodge the argument is fallacious; questioning a source's relevant bias is fair.",
        },
        {
          id: "debate-2-06-q3",
          type: "Appeal to Popularity",
          challenge: `  "Polls show 70% of people believe this economic
  theory is correct. Therefore, the theory is
  true and we should base policy on it."`,
          text: "What is the flaw?",
          options: [
            "No flaw — majority belief proves truth",
            "Appeal to popularity (ad populum) — how many people believe something doesn't determine whether it's true; widely held beliefs have often been wrong",
            "It's a straw man",
            "The poll sample was too large",
          ],
          correctIndex: 1,
          explanation: "This is appeal to popularity: treating the number of believers as evidence of truth. Belief is not proof — majorities have been confidently wrong throughout history (the shape of the earth, the cause of disease). An economic theory's truth depends on evidence and reasoning, not on its poll numbers. Popularity might be relevant to a question about public opinion itself, but here it's offered as proof of the theory's correctness, which it cannot establish.",
        },
        {
          id: "debate-2-06-q4",
          type: "Red Herring",
          challenge: `  The resolution is about whether to adopt
  a four-day school week. An opponent responds:
  "But have you considered how much teachers are
  underpaid? That's the real scandal in education!"`,
          text: "Why is this a red herring, and what's the response?",
          options: [
            "It's relevant and decisive",
            "It introduces an emotionally engaging but off-topic issue (teacher pay) to distract from the four-day-week question; respond by noting it doesn't address the resolution and returning to the actual issue",
            "It's an ad hominem attack",
            "It's a valid appeal to authority",
          ],
          correctIndex: 1,
          explanation: "Teacher pay may be a real and sympathetic issue, but it's a red herring here — an irrelevant distraction from the actual question of whether to adopt a four-day week. Even if true, it doesn't bear on the resolution. The response names the dodge and redirects: 'Teacher pay isn't what we're debating; on the four-day-week question itself…' A true-but-irrelevant point is still a relevance fallacy when offered as a response to a different claim.",
        },
      ],
    },
  },

  // ─── debate-2-07: Informal Fallacies of Presumption ───────────────────────────
  {
    epochId: "debate-2",
    wonder: {
      name: "The Library of Alexandria",
      location: "Alexandria, Egypt",
      era: "Ancient",
      emoji: "🌀",
    },
    id: "debate-2-07",
    order: 7,
    title: "Fallacies of Presumption and Ambiguity",
    subtitle: "False dilemmas, slippery slopes, circular reasoning, and word games",
    category: "arts",
    xp: 88,
    badge: { id: "debate-2-badge-07", name: "Assumption Auditor", emoji: "🌀" },
    challengeType: "quiz",
    info: {
      tagline: "Some arguments smuggle in a false assumption or hide behind a slippery word — learn to drag the hidden move into the light.",
      year: -250,
      overview: [
        "Where relevance fallacies change the subject, fallacies of presumption sneak in an unjustified assumption, and fallacies of ambiguity exploit unclear language. Both are subtler than name-calling and so are more dangerous in skilled hands. The presumption family includes the false dilemma, the slippery slope, begging the question, and hasty generalization; the ambiguity family includes equivocation. A debater who can name these and expose the buried assumption or shifting word neutralizes arguments that otherwise sound compelling.",
        "The false dilemma (false dichotomy) presents only two options when more exist ('either we cut all environmental regulation or the economy collapses' — ignoring moderate paths). The slippery slope claims one step inevitably leads to an extreme outcome without justifying each link ('if we allow this small rule, soon we'll have total surveillance'). Begging the question assumes the conclusion in the premises ('this policy is the best because no better one exists'). Hasty generalization — already met in induction — leaps from too few cases to a broad rule. Each hides an unproven assumption: that the options are only two, that the chain is inevitable, that the conclusion is already granted, that the sample suffices.",
        "Equivocation, the key ambiguity fallacy, trades on a word changing meaning mid-argument ('Evolution is just a theory, and theories are unproven guesses' — exploiting two senses of 'theory'). The fix for all of these is the same: surface the hidden move. For a false dilemma, supply the missing third option. For a slippery slope, demand justification for each link in the chain. For begging the question, point out the conclusion is assumed, not argued. For equivocation, pin down the word's meaning and show it shifted. Naming the fallacy plus exposing the specific buried assumption is, again, the winning combination.",
      ],
      technical: {
        title: "Surfacing the Hidden Assumption",
        body: [
          "Each presumption fallacy is defeated by exposing what it assumes. False dilemma: 'They frame this as two options, but there's at least a third — a moderate path — so the forced choice is false.' Slippery slope: 'They claim A inevitably leads to Z, but they've justified none of the steps between; each link needs an argument, and without it this is just fear of a chain that may never form.' Begging the question: 'Their premise already assumes the conclusion — that's not an argument, it's a restatement.' The pattern is to make the unstated assumption visible and demand it be earned.",
          "For equivocation, the move is to fix the definitions. When a key term seems to shift, stop and pin it down: 'They use the word theory to mean both a rigorous scientific framework and a wild guess — those are different things, and their argument only works by sliding between them.' Ambiguity fallacies dissolve the moment the word is given a single fixed meaning. This is why the definition work from Foundations matters here: controlling and clarifying the meaning of key terms is not pedantry — it's the defense against arguments that depend on words quietly changing meaning.",
        ],
        codeExample: {
          label: "Presumption & Ambiguity Fallacies — Surface the Move",
          code: `  FALSE DILEMMA   only 2 options when more exist
   "Either total deregulation or economic collapse."
   → supply the missing 3rd: "moderate regulation"

  SLIPPERY SLOPE  A → (no justified links) → extreme Z
   "Allow this rule and we'll end in total surveillance."
   → "Justify each link — or it's just fear."

  BEGGING THE QUESTION  conclusion hidden in the premise
   "It's best because nothing better exists."
   → "You assumed the conclusion; that's not an argument."

  HASTY GENERALIZATION  too few cases → broad rule
   → "Sample's too small/biased for that claim."

  EQUIVOCATION  a word shifts meaning mid-argument
   "Evolution is 'just a theory'; theories are guesses."
   → pin the word: scientific theory ≠ casual guess

  UNIVERSAL FIX: drag the hidden assumption into the light.`,
        },
      },
      incident: {
        title: "Alexandria and the Power of Clear Definition",
        when: "250 BCE",
        where: "The Library of Alexandria, Egypt",
        impact: "The scholars of Alexandria, cataloging and analyzing the world's knowledge, advanced the disciplined definition of terms and classification of arguments that lets us detect when a word is being equivocated or an assumption smuggled in.",
        body: [
          "The Library of Alexandria, flourishing from the 3rd century BCE, gathered scholars who didn't merely collect texts but analyzed them — producing critical editions, grammars, and systematic classifications of knowledge. This work demanded precise definition: to organize and compare ideas across hundreds of thousands of scrolls, scholars had to fix what words meant and identify when authors used the same term in different senses. The grammatical and logical tools refined there sharpened the ability to detect ambiguity and unstated assumptions.",
          "That tradition of definitional precision is the debater's defense against presumption and ambiguity fallacies. An equivocation works only as long as a word's shift in meaning goes unnoticed; a false dilemma survives only while the missing options stay hidden; begging the question passes only if no one names the assumed conclusion. The Alexandrian habit — define your terms, classify the argument, examine what is being taken for granted — is exactly the discipline that drags these hidden moves into the open. Clear definition isn't a dry preliminary; it is the light that dissolves the subtlest fallacies.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Persuasive Argument", sub: "but something's buried", type: "attacker" },
          { label: "Spot the Assumption", sub: "only two options? inevitable chain?", type: "system" },
          { label: "Pin the Words", sub: "did a term shift meaning?", type: "victim" },
          { label: "Assumption Exposed", sub: "the hidden move in the light", type: "result" },
        ],
      },
      timeline: [
        { year: -250, event: "Alexandrian scholars advance systematic definition and textual analysis", highlight: true },
        { year: -350, event: "Aristotle treats fallacies of ambiguity in 'Sophistical Refutations'" },
        { year: 1662, event: "The Port-Royal Logic systematizes informal reasoning errors" },
        { year: 1970, event: "Informal logic formalizes the study of presumption and ambiguity fallacies" },
        { year: 2010, event: "False-dilemma and slippery-slope spotting enter mainstream media literacy" },
        { year: 2024, event: "Presumption and ambiguity fallacies are core to advanced refutation training" },
      ],
      keyTakeaways: [
        "Fallacies of presumption smuggle in an unjustified assumption; fallacies of ambiguity exploit unclear language",
        "False dilemma hides extra options; slippery slope assumes an unjustified inevitable chain; begging the question assumes the conclusion",
        "Equivocation lets a key word shift meaning mid-argument — pin the word to a single meaning to defeat it",
        "Defeat all of them by surfacing the hidden move: supply the missing option, demand each link, name the assumed conclusion",
      ],
      references: [
        { title: "Fallacies of Presumption (Internet Encyclopedia of Philosophy)", url: "https://iep.utm.edu/fallacy/" },
        { title: "Equivocation and Ambiguity (Logically Fallacious)", url: "https://www.logicallyfallacious.com/" },
        { title: "The Library of Alexandria (Britannica)", url: "https://www.britannica.com/topic/Library-of-Alexandria" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-2-07-q1",
          type: "False Dilemma",
          challenge: `  "We have two choices: either we ban this
  technology completely, or we accept that it
  will ruin society. Which will it be?"`,
          text: "What fallacy is this, and how do you defeat it?",
          options: [
            "Slippery slope — defeat by accepting the chain",
            "False dilemma — it presents only two extremes; defeat it by supplying a third option (e.g., regulating the technology rather than banning it or doing nothing)",
            "Equivocation — a word shifted meaning",
            "It's a valid forced choice",
          ],
          correctIndex: 1,
          explanation: "This is a false dilemma (false dichotomy): it forces a choice between two extremes — total ban or societal ruin — while ignoring the obvious middle ground of regulation, oversight, or partial restriction. You defeat it by naming the buried assumption (that only two options exist) and supplying the missing third path. Once a reasonable third option is on the table, the 'either/or' framing collapses.",
        },
        {
          id: "debate-2-07-q2",
          type: "Slippery Slope",
          challenge: `  "If we let students retake one exam, soon
  they'll demand to retake all of them, then
  expect to pass without studying, and eventually
  diplomas will be meaningless."`,
          text: "What's wrong with this argument?",
          options: [
            "Nothing — the chain is obviously inevitable",
            "Slippery slope — it asserts a chain of escalating consequences without justifying that each step actually follows; demand evidence for each link",
            "It's a false dilemma",
            "It begs the question",
          ],
          correctIndex: 1,
          explanation: "This is a slippery slope: it claims a modest first step (one retake) inevitably cascades to an extreme outcome (meaningless diplomas) without justifying any of the links. Slippery slopes aren't automatically fallacious — sometimes a chain really is likely — but the burden is to show each step follows. Here no link is justified; it's an appeal to fear of a chain that may never form. The response: 'Justify each step, or this is just fear of an unproven chain.'",
        },
        {
          id: "debate-2-07-q3",
          type: "Begging the Question",
          challenge: `  "This must be the most reliable news source,
  because it never reports anything false. How do
  we know it never reports anything false? Because
  it's the most reliable source."`,
          text: "What fallacy is this?",
          options: [
            "Red herring",
            "Begging the question (circular reasoning) — the conclusion ('most reliable') is used to support the premise that's supposed to prove it",
            "Hasty generalization",
            "Appeal to authority",
          ],
          correctIndex: 1,
          explanation: "This is begging the question / circular reasoning: the claim 'it's the most reliable source' is supported by 'it never reports anything false,' which is in turn justified by 'it's the most reliable source.' The argument assumes what it's supposed to prove and goes in a circle. Exposing it is simple: point out that the conclusion is doing the work of the premise, so nothing has actually been demonstrated — it's a restatement, not an argument.",
        },
        {
          id: "debate-2-07-q4",
          type: "Equivocation",
          challenge: `  "The law says all 'men' are equal. This statute
  uses the word 'man.' My client is a 'man' in the
  sense of an adult male, so the statute about
  'mankind' applies to him uniquely."`,
          text: "What ambiguity fallacy is being exploited?",
          options: [
            "Straw man",
            "Equivocation — the word 'man/men' is being slid between two meanings (humanity in general vs. adult male) to make the argument work",
            "False dilemma",
            "Slippery slope",
          ],
          correctIndex: 1,
          explanation: "This is equivocation: the term 'man/men' shifts between two distinct meanings — 'humanity in general' (as in 'all men are equal' / 'mankind') and 'adult male' — and the argument only works by sliding between them. The defense is to pin the word to a single meaning and show the argument breaks once the term is fixed. Ambiguity fallacies dissolve the instant a key word is given one clear definition, which is why definitional precision is a real weapon.",
        },
      ],
    },
  },

  // ─── debate-2-08: Analogical Reasoning ────────────────────────────────────────
  {
    epochId: "debate-2",
    wonder: {
      name: "The U.S. Supreme Court",
      location: "Washington, D.C.",
      era: "Modern",
      emoji: "⚖️",
    },
    id: "debate-2-08",
    order: 8,
    title: "Reasoning by Analogy",
    subtitle: "When 'it's just like X' is powerful — and when it falls apart",
    category: "arts",
    xp: 86,
    badge: { id: "debate-2-badge-08", name: "The Analogist", emoji: "⚖️" },
    challengeType: "quiz",
    info: {
      tagline: "Analogies persuade by familiarity — but every analogy can be broken at the point where the two cases truly differ.",
      year: 1803,
      overview: [
        "An argument from analogy claims that because two things are alike in some known respects, they are probably alike in a further respect: 'A regulated internet should work like regulated broadcasting did, because both are mass communication media.' Analogies are among the most persuasive tools in argument because they make an unfamiliar case understandable through a familiar one, and they're central to legal reasoning, ethics, and policy. But they are inductive — never certain — and their strength depends entirely on whether the similarities are relevant to the conclusion.",
        "A strong analogy rests on relevant, numerous, and significant similarities between the cases, with no important differences bearing on the conclusion. A weak analogy relies on superficial similarities while ignoring deep differences. The decisive question is always relevance: do the shared features actually relate to the property being inferred? Two situations can be alike in many ways that have nothing to do with the point — and alike in few ways that are exactly the point. Counting similarities isn't enough; they must be the right similarities.",
        "The standard way to attack an analogy is the disanalogy: identify a relevant difference between the cases that undermines the inference. 'Broadcasting used scarce public airwaves, which justified regulation; the internet isn't spectrum-scarce, so the analogy to broadcast regulation breaks at the very feature that justified it.' A single relevant disanalogy can collapse an analogy no matter how many surface similarities it had. When you use an analogy, pre-empt this by choosing cases alike in the features that matter; when you face one, hunt for the difference that touches the conclusion.",
      ],
      technical: {
        title: "Testing an Analogy and Finding the Disanalogy",
        body: [
          "To evaluate any analogy, ask three things. Are the similarities relevant to the conclusion (not just numerous or vivid)? Are there relevant differences that would block the inference? Is the conclusion appropriately modest given that analogy yields probability, not proof? A good analogy survives all three; a bad one usually fails the first or second — lots of irrelevant similarities, or a glaring relevant difference. The vividness of an analogy is not its strength; a memorable comparison can still be logically weak.",
          "The disanalogy is your scalpel. You don't need to deny that the cases are similar at all — you concede the surface likeness and then locate the one difference that matters for the conclusion. 'Yes, both are communication media, but the feature that justified regulating broadcast — spectrum scarcity — is absent here, and that's the feature the whole analogy depends on.' Conversely, when defending your analogy, anticipate the disanalogy and address it: 'You might say these cases differ in X, but X doesn't affect the conclusion because…' Analogical combat is a contest over which similarities and differences are relevant.",
        ],
        codeExample: {
          label: "Analogy Strength and the Disanalogy Attack",
          code: `  ANALOGY: A and B share features → B has A's property
   (inductive — probable, never certain)

  STRONG analogy:
   ✓ similarities are RELEVANT to the conclusion
   ✓ many + significant shared features
   ✓ NO relevant differences that block the inference
   ✓ conclusion is suitably modest

  WEAK analogy:
   ✗ similarities are superficial / vivid but irrelevant
   ✗ ignores a key RELEVANT difference

  THE DISANALOGY ATTACK (the scalpel):
   concede the surface likeness, then find the ONE
   relevant difference that touches the conclusion:
   "Broadcast was regulated due to SPECTRUM SCARCITY;
    the internet isn't spectrum-scarce — the analogy
    breaks at the very feature that justified it."

  → one relevant disanalogy can sink many similarities`,
        },
      },
      incident: {
        title: "Analogy as the Engine of the Common Law",
        when: "1803 onward",
        where: "The U.S. Supreme Court and common-law courts",
        impact: "The common-law system decides new cases by analogy to past precedents — making reasoning by analogy, and the art of distinguishing cases, the literal machinery of justice in the English-speaking world.",
        body: [
          "Common-law legal systems run on analogy. When a court faces a new case, it reasons from precedent: it looks for past cases that are relevantly similar and applies their rulings, on the principle that like cases should be treated alike. From foundational decisions like Marbury v. Madison (1803) forward, judges build the law case by case through analogical reasoning — and the central skill of an advocate is arguing that a favorable precedent is analogous, or that an unfavorable one is 'distinguishable' (disanalogous in a relevant way).",
          "This makes the courtroom the world's great laboratory for analogical argument. A lawyer citing precedent must show the prior case is alike in the features that matter to the legal question; the opposing lawyer wins by finding the relevant difference that makes the precedent not apply — a disanalogy. Centuries of this practice refined exactly the skills a debater needs: judging which similarities are relevant, which differences are decisive, and how to argue both sides of an analogy. When a debater attacks an analogy by finding the difference that touches the conclusion, they are doing precisely what advocates have done before the bench for two hundred years.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Two Cases Compared", sub: "'B is just like A'", type: "attacker" },
          { label: "Test Relevance", sub: "are the similarities the right ones?", type: "system" },
          { label: "Hunt the Disanalogy", sub: "a relevant difference?", type: "victim" },
          { label: "Analogy Holds or Breaks", sub: "at the point that matters", type: "result" },
        ],
      },
      timeline: [
        { year: 1803, event: "Marbury v. Madison anchors the U.S. precedent-by-analogy tradition", highlight: true },
        { year: 1881, event: "Holmes' 'The Common Law' analyzes reasoning by precedent and analogy" },
        { year: 1949, event: "Edward Levi's 'An Introduction to Legal Reasoning' formalizes legal analogy" },
        { year: 1990, event: "Analogy and disanalogy become standard tools in policy and LD debate" },
        { year: 2015, event: "Analogical reasoning is studied in AI and cognitive science as core to thought" },
        { year: 2024, event: "Analogy/disanalogy is a key module in advanced argumentation" },
      ],
      keyTakeaways: [
        "An argument from analogy infers that cases alike in known ways are alike in a further way — it's inductive, never certain",
        "Strength depends on relevant similarities and the absence of relevant differences — not the number or vividness of likenesses",
        "The disanalogy attack concedes the surface likeness and finds the one relevant difference that touches the conclusion",
        "A single relevant difference can break an analogy with many superficial similarities — relevance is everything",
      ],
      references: [
        { title: "Argument from Analogy (Internet Encyclopedia of Philosophy)", url: "https://iep.utm.edu/argument-from-analogy/" },
        { title: "Legal Reasoning and Precedent (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/legal-reas-prec/" },
        { title: "Analogy and Analogical Reasoning (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/reasoning-analogy/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-2-08-q1",
          type: "Disanalogy",
          challenge: `  "Running a country is just like running a
  business: cut costs, maximize revenue, fire
  underperformers. A successful CEO would make a
  great president."`,
          text: "What is the strongest way to attack this analogy?",
          options: [
            "Deny that businesses and countries have anything in common",
            "Find a relevant disanalogy: a government's purpose (public welfare, rights, services that aren't profitable) differs fundamentally from a business's (profit), so business methods don't transfer at the features that matter",
            "Agree completely with the analogy",
            "Argue that CEOs are bad people",
          ],
          correctIndex: 1,
          explanation: "The strong attack is a disanalogy that touches the conclusion: governments exist to serve public welfare, protect rights, and provide essential but unprofitable services (defense, justice, care for the vulnerable), whereas businesses exist to make a profit and can shed unprofitable functions. That difference is precisely relevant to whether business methods (cut costs, fire underperformers, maximize revenue) should govern a country. You needn't deny all similarity — just locate the relevant difference where the analogy is supposed to do its work.",
        },
        {
          id: "debate-2-08-q2",
          type: "Relevant Similarity",
          challenge: `  Debater A: "Phones and cars are similar — both
  are expensive, both are popular, both come in
  many colors. Since we license drivers, we should
  license phone users."`,
          text: "Why is this a weak analogy?",
          options: [
            "It's strong — many similarities are listed",
            "The listed similarities (price, popularity, color) are irrelevant to the conclusion; licensing exists because cars can kill, and that safety feature isn't shared, so the relevant basis is missing",
            "Phones and cars are completely unrelated",
            "The analogy begs the question",
          ],
          correctIndex: 1,
          explanation: "The analogy piles up similarities (expensive, popular, many colors) that have nothing to do with why we license drivers — the real reason is that operating a car poses lethal risk to others. Phones don't share that relevant feature, so the basis for licensing doesn't transfer. This illustrates the core lesson: counting similarities is worthless if they're irrelevant to the conclusion. Relevance, not quantity or vividness, determines analogical strength.",
        },
        {
          id: "debate-2-08-q3",
          type: "Defending an Analogy",
          challenge: `  You argue: "Banning a dangerous additive is like
  banning lead in paint — a justified public-health
  intervention."

  You expect the opponent to claim the cases differ.`,
          text: "How should you pre-empt the disanalogy attack?",
          options: [
            "Refuse to acknowledge any differences exist",
            "Anticipate the likely relevant difference and address it — e.g., 'you might say the additive is less harmful than lead, but the principle (banning a proven public-health hazard) holds at the relevant level, and here's the evidence of harm'",
            "Make the analogy more vivid with dramatic language",
            "Add ten more superficial similarities",
          ],
          correctIndex: 1,
          explanation: "Strong analogical advocacy anticipates the disanalogy and defuses it in advance. You identify the difference the opponent will likely raise (e.g., 'the additive is less harmful than lead') and show why it doesn't break the inference at the relevant level (the principle is banning a proven hazard; the evidence shows harm here too). Refusing to acknowledge differences looks evasive, and piling on superficial similarities or vivid language doesn't address the relevant point — engaging the disanalogy head-on does.",
        },
        {
          id: "debate-2-08-q4",
          type: "Analogy Limits",
          challenge: `  An opponent presents a vivid, memorable analogy
  that the audience clearly finds compelling. A
  novice panics, thinking a catchy analogy must be
  a strong argument.`,
          text: "What should the novice remember about analogies?",
          options: [
            "Vivid analogies are always logically strong",
            "Vividness is not strength — an analogy is only as strong as the relevance of its similarities, so a memorable comparison can still be broken by a relevant disanalogy",
            "Analogies can never be refuted",
            "The only response is a more vivid counter-analogy",
          ],
          correctIndex: 1,
          explanation: "A memorable, vivid analogy can feel persuasive while being logically weak — vividness and strength are different things. The novice should stay calm and test it: are the similarities actually relevant to the conclusion, and is there a relevant difference that breaks it? A catchy comparison collapses just as readily as a dull one when you find the disanalogy that touches the point. (A counter-analogy can help, but the decisive move is exposing the relevant difference.)",
        },
      ],
    },
  },

  // ─── debate-2-09: Statistical Reasoning ───────────────────────────────────────
  {
    epochId: "debate-2",
    wonder: {
      name: "The Bills of Mortality",
      location: "London, England",
      era: "17th Century",
      emoji: "📊",
    },
    id: "debate-2-09",
    order: 9,
    title: "Statistical and Numerical Reasoning",
    subtitle: "Base rates, percentages, and the tricks numbers play",
    category: "arts",
    xp: 90,
    badge: { id: "debate-2-badge-09", name: "Number Sense", emoji: "📊" },
    challengeType: "quiz",
    info: {
      tagline: "Numbers look objective, which is exactly why misleading ones are so dangerous — learn to read what a statistic isn't telling you.",
      year: 1662,
      overview: [
        "Statistics carry an aura of objectivity that makes them persuasive — and makes misleading ones especially dangerous. A debater needs enough numerical literacy to use good statistics and to expose bad ones. The most common manipulations are simple: confusing percentages with absolute numbers ('crime up 100%' might mean two incidents became four), ignoring the base rate (a '99% accurate' test can still be wrong most times it flags something rare), cherry-picking a favorable time window or subgroup, and citing a relative risk that sounds alarming while the absolute risk is tiny ('doubles your risk' from 1 in a million to 2 in a million).",
        "Base-rate neglect is the most important statistical fallacy and the least intuitive. If a disease affects 1 in 10,000 people and a test is 99% accurate, a positive result still probably means you don't have the disease — because the rare true positives are swamped by the false positives from the huge healthy population. People (and debaters) routinely ignore the base rate and treat the test's accuracy as the chance they're sick. Spotting base-rate neglect — 'how common is the thing being detected in the first place?' — lets you dismantle scary-sounding statistics about rare events.",
        "Other red flags: a statistic with no source or denominator ('10,000 affected' — out of how many? says who?), a graph with a truncated axis exaggerating a trend, an average (mean) hiding a skewed distribution (mean income soars when a few billionaires are added; the median tells the real story), and survivorship bias (studying only the successes). The defense is a set of fast questions: percentage or absolute? what's the base rate? what's the denominator? mean or median? what time window, and why that one? A debater who asks these turns an opponent's impressive-sounding number into a liability — and avoids being fooled themselves.",
      ],
      technical: {
        title: "The Statistical Red-Flag Checklist",
        body: [
          "Run any cited statistic through a quick checklist. Percentage vs. absolute: a big percentage of a tiny number is still tiny, and a small percentage of a huge number is large — always ask which is being used and whether it's the misleading one. Relative vs. absolute risk: 'doubles the risk' is meaningless without the baseline; demand the absolute numbers. Base rate: for any detection or rare-event claim, ask how common the thing is to begin with. Denominator: 'X people affected' needs 'out of how many, and over what period?' Mean vs. median: for income, prices, or any skewed quantity, the median resists distortion by outliers.",
          "Also watch the framing. A truncated or rescaled graph axis can turn a trivial change into a cliff. A carefully chosen start date ('since 2009', the bottom of a crash) flatters a trend; ask why that window. Survivorship bias hides failures by studying only what remained ('successful funds returned X' ignores the funds that collapsed and vanished from the sample). None of this requires advanced math — it requires the discipline to ask what the number leaves out. In a round, you don't out-calculate the opponent; you expose the missing context: 'That percentage hides a tiny base; in absolute terms it's a handful of cases.'",
        ],
        codeExample: {
          label: "Statistical Red Flags — Fast Questions",
          code: `  PERCENTAGE vs ABSOLUTE
   "crime up 100%" → 2 cases became 4? (tiny base)

  RELATIVE vs ABSOLUTE RISK
   "doubles your risk" → 1-in-a-million → 2-in-a-million?
   demand the BASELINE numbers.

  BASE-RATE NEGLECT  (the big one)
   99%-accurate test, disease in 1/10,000:
   a positive is PROBABLY a false positive —
   rare true positives swamped by false positives.
   ASK: how common is the thing in the first place?

  DENOMINATOR     "10,000 affected" → out of how many?
  MEAN vs MEDIAN  outliers inflate the mean (use median)
  TIME WINDOW     "since 2009" → why that start date?
  AXIS GAMES      truncated graph axis exaggerates trends
  SURVIVORSHIP    studying only the survivors hides failures

  → you don't out-calculate; you expose what's MISSING.`,
        },
      },
      incident: {
        title: "John Graunt and the Birth of Statistics",
        when: "1662",
        where: "London, England",
        impact: "John Graunt's analysis of London's 'Bills of Mortality' founded the science of statistics — and immediately demonstrated both the power of numbers to reveal truth and the care required to interpret them honestly.",
        body: [
          "In 1662, the London merchant John Graunt published 'Natural and Political Observations Made upon the Bills of Mortality', analyzing decades of weekly death records. By carefully working with the numbers — accounting for population, comparing causes of death, and noting the limits of his data — Graunt uncovered real patterns: estimates of London's population, the regularity of death rates, and early life tables. He essentially invented demography and statistical reasoning, showing that aggregated numbers could reveal truths invisible in any single case.",
          "Graunt's work also modeled statistical honesty. He was explicit about the unreliability of some records, the guesswork in certain estimates, and the assumptions behind his inferences — the very caution that separates good statistical argument from manipulation. The history of statistics ever since has been a tug-of-war between this power to illuminate and the ease of misleading with selective numbers, broken denominators, and ignored base rates. A debater inherits both sides: the ability to marshal real data like Graunt, and the responsibility — and competitive advantage — of detecting when a number is being used to obscure rather than reveal.",
        ],
      },
      diagram: {
        nodes: [
          { label: "An Impressive Statistic", sub: "looks objective", type: "attacker" },
          { label: "Run the Checklist", sub: "percentage? base rate? denominator?", type: "system" },
          { label: "Find What's Missing", sub: "context the number omits", type: "victim" },
          { label: "Number Exposed", sub: "or honestly used", type: "result" },
        ],
      },
      timeline: [
        { year: 1662, event: "John Graunt founds statistics with the Bills of Mortality", highlight: true },
        { year: 1954, event: "Darrell Huff's 'How to Lie with Statistics' popularizes statistical skepticism" },
        { year: 1973, event: "Kahneman and Tversky document base-rate neglect in human judgment" },
        { year: 2001, event: "Gerd Gigerenzer shows how natural frequencies clarify risk and base rates" },
        { year: 2016, event: "Data journalism and fact-checking raise public statistical literacy" },
        { year: 2024, event: "Statistical-reasoning literacy is core to evaluating empirical debate evidence" },
      ],
      keyTakeaways: [
        "Statistics seem objective, so misleading ones are especially dangerous — learn to ask what a number omits",
        "Base-rate neglect is the key trap: a highly accurate test for a rare event still yields mostly false positives",
        "Distinguish percentage from absolute, relative from absolute risk, and mean from median — each can mislead",
        "You win statistical exchanges by exposing missing context (denominator, base rate, time window), not by out-calculating",
      ],
      references: [
        { title: "Base Rate Fallacy (overview)", url: "https://en.wikipedia.org/wiki/Base_rate_fallacy" },
        { title: "How to Lie with Statistics — Darrell Huff (overview)", url: "https://www.britannica.com/" },
        { title: "Statistical Literacy (Royal Statistical Society)", url: "https://rss.org.uk/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-2-09-q1",
          type: "Base Rate",
          challenge: `  "Our new screening test for a rare disease is
  99% accurate. You tested positive. So you almost
  certainly have the disease."

  The disease affects 1 in 10,000 people.`,
          text: "Why might a positive result NOT mean you almost certainly have the disease?",
          options: [
            "The test is lying",
            "Base-rate neglect — with the disease so rare, false positives from the huge healthy population vastly outnumber the few true positives, so a positive is probably a false alarm",
            "99% accuracy means 99% chance you're sick",
            "The sample size was too small",
          ],
          correctIndex: 1,
          explanation: "This is base-rate neglect. With only 1 in 10,000 having the disease, testing 10,000 people yields ~1 true case but ~100 false positives (1% of 9,999 healthy people). So among ~101 positive results, only ~1 is real — a positive is probably a false alarm. The test's 99% accuracy is not your probability of being sick; you must factor in how rare the disease is. Asking 'how common is the thing in the first place?' is the antidote.",
        },
        {
          id: "debate-2-09-q2",
          type: "Relative vs Absolute",
          challenge: `  Headline: "New study finds this food DOUBLES
  your risk of a rare cancer!"

  The cancer normally affects about 1 in a million
  people per year.`,
          text: "How should a debater contextualize this 'doubling'?",
          options: [
            "Panic — doubling is always serious",
            "Point out the absolute risk: doubling 1-in-a-million is 2-in-a-million — still vanishingly small; 'doubles the risk' is alarming framing of a tiny absolute change",
            "The study must be fraudulent",
            "Relative risk is the only number that matters",
          ],
          correctIndex: 1,
          explanation: "'Doubles your risk' is a relative-risk statement that's meaningless without the baseline. Doubling a 1-in-a-million annual risk gives 2-in-a-million — still negligible in absolute terms. Reporting relative risk without absolute risk is a classic way to make trivial changes sound terrifying. The debater's move is to demand and supply the absolute numbers, which deflates the scary framing. (The reverse trick downplays real risks by hiding behind small-sounding percentages.)",
        },
        {
          id: "debate-2-09-q3",
          type: "Mean vs Median",
          challenge: `  "The average income in our town rose to $200,000
  last year — our economic policies are working
  for everyone!"

  You learn three billionaires moved to town.`,
          text: "What statistical issue does this reveal?",
          options: [
            "None — a higher average proves broad prosperity",
            "The mean is distorted by extreme outliers (the billionaires); the median income would better reflect the typical resident, and it may not have risen at all",
            "The town is too small to measure income",
            "Income cannot be averaged",
          ],
          correctIndex: 1,
          explanation: "The mean (average) is easily distorted by extreme outliers — a few billionaires can pull the average sky-high while the typical resident's income is unchanged. For skewed quantities like income, the median (the middle value) better represents the typical case and resists outlier distortion. The claim that policies are 'working for everyone' based on a soaring mean is exactly the kind of statistic that collapses once you ask for the median.",
        },
        {
          id: "debate-2-09-q4",
          type: "Denominator",
          challenge: `  An opponent declares: "This vaccine is dangerous
  — 5,000 people who got it later reported health
  problems!"`,
          text: "What's the first question to ask?",
          options: [
            "Nothing — 5,000 is obviously a lot",
            "What's the denominator and the comparison? 5,000 out of how many vaccinated, over what period, compared to the background rate of such problems in the unvaccinated?",
            "Whether the people were famous",
            "Whether 5,000 is a percentage",
          ],
          correctIndex: 1,
          explanation: "A raw count with no denominator is nearly meaningless. 5,000 reports out of 500 million doses, over a long period, compared against the rate at which such health problems occur anyway, may be far below the background rate — and 'reported after' isn't 'caused by' (post hoc). The first move is to demand the denominator and the appropriate comparison. Big-sounding absolute numbers routinely mislead when the base population and baseline rate are hidden.",
        },
      ],
    },
  },

  // ─── debate-2-10: Burden of Proof and Presumption ─────────────────────────────
  {
    epochId: "debate-2",
    wonder: {
      name: "The Inns of Court",
      location: "London, England",
      era: "Modern",
      emoji: "⚖️",
    },
    id: "debate-2-10",
    order: 10,
    title: "Burden of Proof, Presumption, and Parsimony",
    subtitle: "Who has to prove what — and why the simpler explanation starts ahead",
    category: "arts",
    xp: 90,
    badge: { id: "debate-2-badge-10", name: "Burden Bearer", emoji: "⚖️" },
    challengeType: "quiz",
    info: {
      tagline: "Half of winning is knowing whose job it is to prove the point — and refusing to do the other side's work for them.",
      year: 1769,
      overview: [
        "The burden of proof is the obligation to support a claim, and it falls on the party making the assertion — especially the party seeking to change the status quo. 'He who asserts must prove.' This connects directly to presumption, the default position that holds until someone meets the burden to overturn it. In a courtroom, the presumption of innocence places the burden on the prosecution. In debate, presumption generally favors the status quo (no change), so the side advocating change carries the burden of proof. Knowing where the burden lies tells you who loses if the argument ends in a tie.",
        "A crucial and common cheat is the attempt to shift the burden of proof — demanding that the other side disprove your claim rather than proving it yourself. 'You can't prove this policy won't work, so we should adopt it' illegitimately flips the burden: the proponent must show it will work, not challenge opponents to show it won't. The related fallacy, appeal to ignorance (argumentum ad ignorantiam), treats the absence of disproof as proof ('no one has shown ghosts don't exist, so they do'). Recognizing burden-shifting lets you refuse to accept an obligation that isn't yours: 'It's your claim — the burden is on you to prove it, not on me to disprove it.'",
        "Finally, parsimony — Occam's razor — is a principle for choosing between explanations that fit the evidence equally well: prefer the one with fewer assumptions. It doesn't say the simplest answer is always true; it says that, all else equal, the explanation requiring fewer unsupported assumptions is the better default, and the more complicated one bears the burden of justifying its extra machinery. In a round, when two explanations account for the same facts, the simpler one starts ahead, and you can press the opponent: 'Your account requires three extra assumptions mine doesn't — what justifies them?' Burden, presumption, and parsimony together govern who must prove what, and which side the default favors when proof runs out.",
      ],
      technical: {
        title: "Holding the Line on Burdens",
        body: [
          "Three rules keep you from doing your opponent's work. First, the asserter proves: if they claim it, the burden is theirs — never accept the inverted demand to disprove their claim. Second, presumption decides ties: if neither side fully proves its case, the side without the burden (usually the status quo) wins, so a debater defending presumption can win by merely preventing the other side from meeting its burden. Third, absence of evidence is handled carefully: 'no proof against X' is not 'proof of X' (appeal to ignorance), though in some contexts a thorough failed search for evidence can be weak evidence of absence — distinguish the two.",
          "Occam's razor is a tie-breaker, not a trump card. Use it when explanations fit the evidence equally well: prefer the one positing fewer unexplained entities or assumptions, and put the burden on the more complex account to justify its additions. Misuse to avoid: the razor doesn't let you dismiss a well-evidenced complex explanation just for being complex — if the evidence requires the complexity, simplicity yields. The principle is about default preference under equal evidence and unjustified assumptions, not a license to always pick the simplest story. Deploy it to make the opponent earn every extra assumption their account smuggles in.",
        ],
        codeExample: {
          label: "Burden, Presumption, and the Razor",
          code: `  BURDEN OF PROOF
   "He who asserts must prove."
   falls on the party CLAIMING / seeking CHANGE.

  PRESUMPTION (the default; decides TIES)
   holds until the burden is met.
   courtroom: innocence | debate: status quo (no change)
   → defender of presumption wins if opponent fails
     to meet their burden.

  BURDEN-SHIFTING (illegitimate):
   "You can't prove it WON'T work → so adopt it."
   → "It's YOUR claim — prove it works; I needn't
      disprove it."

  APPEAL TO IGNORANCE:
   "No one disproved X → X is true."   ✗
   (absence of disproof ≠ proof)

  OCCAM'S RAZOR (tie-breaker under EQUAL evidence):
   prefer the explanation with FEWER assumptions;
   the complex account must justify its extras.
   ⚠ not a license to dismiss well-evidenced complexity.`,
        },
      },
      incident: {
        title: "Blackstone and the Presumption of Innocence",
        when: "1769",
        where: "England — Blackstone's Commentaries",
        impact: "William Blackstone's formulation — 'better that ten guilty persons escape than that one innocent suffer' — enshrined the presumption of innocence and a heavy burden of proof on the accuser, the clearest real-world model of how burden and presumption decide contested questions.",
        body: [
          "In his 'Commentaries on the Laws of England' (1769), William Blackstone articulated a principle that became foundational to English and American law: 'It is better that ten guilty persons escape than that one innocent suffer.' This 'Blackstone ratio' expresses a deliberate allocation of burden and presumption — the accused is presumed innocent, and the prosecution bears a heavy burden ('beyond reasonable doubt') to overcome that presumption. The default, when proof falls short, is acquittal, because the system chooses where to place the risk of error.",
          "This is the clearest real-world demonstration of how burden and presumption settle contested questions. Notice that the defense can win without proving innocence — it need only prevent the prosecution from meeting its burden, because presumption favors the accused. A debater defending the status quo operates the same way: they need not prove the status quo is ideal, only stop the other side from meeting its burden of proof for change. And the law's refusal to treat 'not proven guilty' as 'proven innocent' is exactly the appeal-to-ignorance discipline: absence of proof is not proof of the opposite. Burden, presumption, and the careful handling of missing evidence are not debate technicalities — they are how just systems decide what to believe.",
        ],
      },
      diagram: {
        nodes: [
          { label: "A Claim Is Made", sub: "who asserts it?", type: "attacker" },
          { label: "Burden Falls on Asserter", sub: "refuse to do their work", type: "system" },
          { label: "Presumption Holds", sub: "default wins ties", type: "victim" },
          { label: "Parsimony Breaks Ties", sub: "fewer assumptions start ahead", type: "result" },
        ],
      },
      timeline: [
        { year: 1769, event: "Blackstone formulates the presumption of innocence and the heavy burden on accusers", highlight: true },
        { year: 1320, event: "William of Ockham articulates the principle of parsimony (Occam's razor)" },
        { year: 1935, event: "Woolmington v DPP affirms the prosecution's burden as a 'golden thread' of law" },
        { year: 1970, event: "Burden and presumption become explicit teaching points in academic debate" },
        { year: 2000, event: "Appeal-to-ignorance and burden-shifting enter mainstream critical-thinking curricula" },
        { year: 2024, event: "Burden, presumption, and parsimony anchor the close of the logic epoch" },
      ],
      keyTakeaways: [
        "The burden of proof falls on whoever asserts a claim — especially the side seeking to change the status quo",
        "Presumption is the default that wins ties; defending it, you can win by preventing the other side from meeting its burden",
        "Refuse burden-shifting ('you can't disprove it') and appeal to ignorance ('unrefuted, therefore true') — absence of disproof isn't proof",
        "Occam's razor breaks ties under equal evidence: prefer fewer assumptions, and make complex accounts justify their extras",
      ],
      references: [
        { title: "Burden of Proof (Internet Encyclopedia of Philosophy)", url: "https://iep.utm.edu/fallacy/#BurdenOfProof" },
        { title: "Occam's Razor (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/ockham/" },
        { title: "Presumption of Innocence (Britannica)", url: "https://www.britannica.com/topic/presumption-of-innocence" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-2-10-q1",
          type: "Burden-Shifting",
          challenge: `  Proponent: "We should adopt this experimental
  policy nationwide. You can't prove it will fail,
  so there's no reason not to."`,
          text: "What's wrong with this reasoning?",
          options: [
            "Nothing — if you can't disprove it, adopt it",
            "It illegitimately shifts the burden of proof — the proponent of change must prove the policy will work; opponents need not prove it will fail",
            "It's a slippery slope",
            "It's a valid appeal to presumption",
          ],
          correctIndex: 1,
          explanation: "This shifts the burden of proof. The proponent is advocating a change, so the burden is on them to show the policy will work — not on opponents to prove it won't. 'You can't prove it will fail' illegitimately demands disproof of their claim. The correct response: 'It's your proposal; the burden is on you to demonstrate it works. Failing to disprove it is not a reason to adopt it.' Presumption favors no change until that burden is met.",
        },
        {
          id: "debate-2-10-q2",
          type: "Appeal to Ignorance",
          challenge: `  "No study has ever proven that this supplement
  is ineffective. Therefore, it works and people
  should take it."`,
          text: "What fallacy is this?",
          options: [
            "Burden-shifting only",
            "Appeal to ignorance — treating the absence of disproof as proof; not having shown it's ineffective doesn't establish that it works",
            "False dilemma",
            "Hasty generalization",
          ],
          correctIndex: 1,
          explanation: "This is appeal to ignorance (argumentum ad ignorantiam): the absence of evidence against the supplement is treated as evidence for it. 'No one proved it doesn't work' is not 'it works' — the burden is on the proponent to show efficacy with positive evidence (e.g., controlled trials). Lacking disproof tells us nothing about whether it works. (Note: a thorough, well-designed search that found no effect could be weak evidence of absence — but that's positive testing, not mere lack of disproof.)",
        },
        {
          id: "debate-2-10-q3",
          type: "Presumption and Ties",
          challenge: `  A debate on abolishing a long-standing institution
  ends with both sides roughly even — neither fully
  proved its case. Presumption favors the status quo.`,
          text: "Who should win, and what does this teach the side defending the status quo?",
          options: [
            "The side proposing change, for being bolder",
            "The status-quo side wins on presumption — and the lesson is that they can win by preventing the change-advocate from meeting its burden, without proving the status quo is ideal",
            "It's an automatic tie with no winner",
            "The judge flips a coin",
          ],
          correctIndex: 1,
          explanation: "When neither side meets its burden, presumption decides — and here it favors the status quo, so that side wins. The strategic lesson for a status-quo defender is liberating: you don't have to prove the status quo is ideal; you only have to stop the other side from meeting its burden of proof for change. Just as a defense can win by creating reasonable doubt rather than proving innocence, the presumption-holder wins ties by denying the burden-bearer their proof.",
        },
        {
          id: "debate-2-10-q4",
          type: "Occam's Razor",
          challenge: `  Two explanations fit the same evidence equally well:

   A: An ordinary, well-understood cause (one assumption).
   B: An elaborate hidden conspiracy (many unproven
      assumptions about secret coordination).`,
          text: "How does parsimony (Occam's razor) apply, and what is its limit?",
          options: [
            "Always pick the most complex explanation",
            "Prefer A under equal evidence (fewer assumptions), putting the burden on B to justify its extra machinery — but the razor isn't a trump card if evidence ever requires the complexity",
            "Occam's razor proves A is true with certainty",
            "Complexity always indicates truth",
          ],
          correctIndex: 1,
          explanation: "When explanations fit the evidence equally well, Occam's razor prefers the one with fewer unsupported assumptions — here A — and places the burden on the more complex account (B) to justify its many extra assumptions. The razor is a tie-breaker and default, not a proof: it doesn't certify A as true, and if evidence genuinely required the complexity, simplicity would yield. Used correctly, it makes the opponent earn every additional assumption their story smuggles in rather than getting them for free.",
        },
      ],
    },
  },
];
