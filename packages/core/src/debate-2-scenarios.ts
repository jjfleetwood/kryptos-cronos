import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the Argumentation & Logic epoch (debate-2).
// Each spot is a deterministic logic call — name the fallacy, judge validity vs.
// soundness, classify deductive vs. inductive, or pick the strongest inference.
// The marked answer is the logically correct identification, re-derived for each
// spot. correctIndex and explanation are stripped server-side before the client.
export const debate2Scenarios: Record<string, ScenarioConfig> = {
  // ─── debate-2-01: The Toulmin Model ───────────────────────────────────────────
  "debate-2-01": {
    intro:
      "Map real arguments into their working parts. Find the part that's doing the hidden work — usually the unstated warrant — before the clash even starts.",
    spots: [
      {
        id: "deb2-01-s1",
        label: "Name the Part",
        situation:
          "Argument: 'The bridge is rated for 10 tons, so this 8-ton truck can cross safely, since any load under the rated capacity is safe to cross.'",
        prompt: "Which clause is the WARRANT — the principle that licenses the move from evidence to conclusion?",
        options: [
          "'The bridge is rated for 10 tons' — the data/evidence",
          "'This 8-ton truck can cross safely' — the conclusion",
          "'Any load under the rated capacity is safe to cross' — the bridging principle",
          "'The truck weighs 8 tons' — a stated fact",
        ],
        correctIndex: 2,
        explanation:
          "The warrant is the general principle that bridges grounds to claim: 'any load under the rated capacity is safe to cross.' The rating is the grounds (data), 'the truck can cross safely' is the claim (conclusion). The warrant is the joint where arguments break, so naming it first is the core Toulmin move.",
      },
      {
        id: "deb2-01-s2",
        label: "Unstated Warrant",
        situation:
          "Argument: 'She graduated top of her class (grounds), so she'll be an excellent manager (claim).' The warrant is left unspoken.",
        prompt: "What is the unstated warrant doing the work?",
        options: [
          "She graduated top of her class",
          "Top academic performance reliably predicts managerial excellence",
          "She'll be an excellent manager",
          "Management is a difficult job",
        ],
        correctIndex: 1,
        explanation:
          "The unstated bridging principle is 'top academic performance reliably predicts managerial excellence.' That's the assumption that licenses the leap from grades to job performance — and exactly where to attack (does academic rank actually predict managing people?). The first and third options are the grounds and claim themselves, not the warrant.",
      },
      {
        id: "deb2-01-s3",
        label: "Honest Qualifier",
        situation:
          "Two versions of a claim:\n  A: 'This program will eliminate all traffic accidents.'\n  B: 'This program will probably reduce accidents at most intersections.'",
        prompt: "Which is the stronger debate claim, and why?",
        options: [
          "A — it sounds more confident and decisive",
          "They are identical in strength",
          "Neither counts as a real claim",
          "B — its honest qualifiers ('probably', 'most') make it defensible, while A's absolute is refuted by a single counterexample",
        ],
        correctIndex: 3,
        explanation:
          "The qualifier calibrates how strongly a claim holds. A's absolute ('eliminate all') is destroyed by one counterexample and invites the 'you overclaimed' attack. B's honest qualifiers make it far harder to refute while still meaningful. Confidence in wording is not strength of argument — matching the qualifier to what you can defend is the sophisticated move.",
      },
      {
        id: "deb2-01-s4",
        label: "Where to Attack",
        situation:
          "Opponent: 'Test scores rose after the new curriculum was adopted (grounds), so the curriculum raised achievement (claim).' You think the inference is the weak point.",
        prompt: "What is the most efficient Toulmin-based attack?",
        options: [
          "Attack the unstated warrant — that the curriculum CAUSED the rise — by raising rebuttal conditions (scores were already trending up; other changes happened too)",
          "Concede the entire argument",
          "Dispute whether the scores actually rose at all",
          "Argue that the curriculum's author is unqualified",
        ],
        correctIndex: 0,
        explanation:
          "Even granting the grounds (scores rose), the argument rests on an unstated warrant: that the curriculum caused the rise. Attacking the warrant with rebuttal conditions (pre-existing trend, confounding changes) is most efficient — if the bridge between evidence and conclusion fails, the conceded grounds no longer support the claim. Disputing the grounds is harder and the personal attack is irrelevant.",
      },
    ],
  },

  // ─── debate-2-02: Deduction — Validity and Soundness ──────────────────────────
  "debate-2-02": {
    intro:
      "Two separate tests decide a deductive argument: validity (does the conclusion follow?) and soundness (validity PLUS true premises). Attacking the wrong one wastes your speech.",
    spots: [
      {
        id: "deb2-02-s1",
        label: "Valid or Sound?",
        situation:
          "P1: All metals conduct electricity.\n  P2: Rubber is a metal.\n  C: Therefore, rubber conducts electricity.\n\n  The logic marches, but the conclusion is false.",
        prompt: "How do you classify and attack this argument?",
        options: [
          "It's invalid — attack the logical form",
          "It's valid but UNSOUND — the form is fine, so deny the false premise 'rubber is a metal'",
          "It's sound and must be accepted",
          "There is no flaw of any kind",
        ],
        correctIndex: 1,
        explanation:
          "The form ('All A are B; X is A; therefore X is B') is valid — if the premises were true the conclusion would follow. So attacking the logic fails. The flaw is soundness: 'rubber is a metal' is false, making the argument valid but unsound. The correct attack denies that premise. Valid form + false conclusion always means a false premise.",
      },
      {
        id: "deb2-02-s2",
        label: "Name the Form",
        situation:
          "P1: If a shape is a square, it has four sides.\n  P2: This shape is a square.\n  C: Therefore, this shape has four sides.",
        prompt: "Is this valid, and what form is it?",
        options: [
          "Invalid — affirming the consequent",
          "Valid — modus tollens",
          "Valid — modus ponens (If P→Q; P; therefore Q)",
          "Invalid — denying the antecedent",
        ],
        correctIndex: 2,
        explanation:
          "This is modus ponens — affirm the antecedent (P is true) and the consequent follows: 'If P→Q; P; ∴ Q.' It is always valid, so the only way to contest the conclusion is to deny a premise, not the logic. Modus tollens would instead deny the consequent ('not Q; ∴ not P').",
      },
      {
        id: "deb2-02-s3",
        label: "Valid but Wrong",
        situation:
          "An opponent runs a perfectly valid syllogism — every step follows — but you're confident the conclusion is false.",
        prompt: "What does this tell you about where the error must be?",
        options: [
          "The error is in the logical form",
          "There is no error; you must be mistaken",
          "The error is in the conclusion itself, independent of the premises",
          "At least one premise must be false — find and deny the weakest premise",
        ],
        correctIndex: 3,
        explanation:
          "Validity guarantees that true premises yield a true conclusion. So a valid argument with a false conclusion must contain a false premise — logically there is nowhere else for the error to hide. Hunt the weakest premise and show it's false or unsupported. Attacking the (valid) form would fail.",
      },
      {
        id: "deb2-02-s4",
        label: "Building Deductively",
        situation:
          "You've built a deductive argument with a rock-solid valid form, but one of your three premises is shaky and hard to defend.",
        prompt: "What is the realistic strength of your argument?",
        options: [
          "Only as strong as its weakest premise — the opponent will ignore the logic and hammer the shaky premise",
          "Very strong — valid form guarantees the conclusion regardless of the premises",
          "Unbeatable, because deduction is certain",
          "Irrelevant — premises don't matter in deduction",
        ],
        correctIndex: 0,
        explanation:
          "A deductive argument is exactly as strong as its weakest premise, because validity alone guarantees nothing about truth. A flawless form on a shaky premise is brittle — a competent opponent skips the logic and breaks the weak premise, severing the chain to your conclusion. Build with premises you can actually defend.",
      },
    ],
  },

  // ─── debate-2-03: Induction and the Strength of Evidence ──────────────────────
  "debate-2-03": {
    intro:
      "Most real arguments are inductive — never certain, only stronger or weaker. Classify the reasoning, then test sample size, representativeness, and scope.",
    spots: [
      {
        id: "deb2-03-s1",
        label: "Deductive or Inductive?",
        situation:
          "Argument: 'Every recorded sunrise in history has come from the east, so tomorrow's sun will rise in the east.'",
        prompt: "Is this deductive or inductive reasoning?",
        options: [
          "Deductive — the conclusion follows with logical necessity",
          "Inductive — it generalizes from many past observations to a prediction; very strong, but not certain",
          "Deductive and sound",
          "Neither — it's a definition",
        ],
        correctIndex: 1,
        explanation:
          "This is induction: it reasons from a large body of specific past observations to a prediction about the future. Even overwhelming evidence makes the conclusion highly probable, never logically necessary (the hallmark of deduction). Strong inductions are still defeasible — they don't carry deductive certainty.",
      },
      {
        id: "deb2-03-s2",
        label: "Sample Size",
        situation:
          "Argument: 'I asked three of my friends and all three liked the new product, so it will be a national hit.'",
        prompt: "How strong is this induction?",
        options: [
          "Strong — three real, satisfied customers prove the trend",
          "It's a valid deductive argument",
          "Weak — a hasty generalization from a tiny, unrepresentative sample (three friends) to a sweeping national claim",
          "Strong, because friends give honest answers",
        ],
        correctIndex: 2,
        explanation:
          "This is a hasty generalization: three friends are far too small and too unrepresentative a sample to support a claim about a whole national market. The decisive critique names the specific weakness — insufficient sample size and selection bias — rather than just disagreeing.",
      },
      {
        id: "deb2-03-s3",
        label: "Representativeness",
        situation:
          "Argument: 'A poll on a luxury-car enthusiast forum found 90% favor cutting the gas tax, so the general public favors cutting it.'",
        prompt: "Why is this induction weak despite the large 90% figure?",
        options: [
          "The sample is unrepresentative — luxury-car forum users aren't the general public, so their views can't be generalized to everyone",
          "90% is too small a majority to count",
          "Polls are never valid evidence",
          "The result should be a raw count, not a percentage",
        ],
        correctIndex: 0,
        explanation:
          "The flaw is representativeness, not the percentage. Luxury-car enthusiasts are a self-selected group with an atypical stake in fuel costs, so they don't mirror the general public. A biased sample can yield any number you like; 90% of an unrepresentative group tells you little about everyone else. Strong generalization needs a sample that reflects the population claimed about.",
      },
      {
        id: "deb2-03-s4",
        label: "Certainty Check",
        situation:
          "A debater insists their inductive argument — based on strong but limited evidence — proves its conclusion 'with absolute certainty' and 'cannot possibly be false.'",
        prompt: "What's the error in this framing?",
        options: [
          "No error — strong enough evidence makes an induction certain",
          "Inductive arguments are always invalid",
          "They should add premises to convert it into a deduction",
          "Induction is never certain — even strong evidence makes a conclusion only probable, so claiming certainty overreaches and invites refutation",
        ],
        correctIndex: 3,
        explanation:
          "Induction is inherently probabilistic — even excellent evidence makes a conclusion likely, never certain (a single black swan overturns 'all swans are white'). Framing an inductive conclusion as a mathematical certainty overreaches and hands the opponent an easy attack: one counterexample or one limitation deflates the inflated claim. Honest qualification is both more accurate and more defensible.",
      },
    ],
  },

  // ─── debate-2-04: Causation vs. Correlation ───────────────────────────────────
  "debate-2-04": {
    intro:
      "Two things moving together is not one causing the other. Run the alternatives — reverse causation, common cause, coincidence, post hoc — before accepting any causal claim.",
    spots: [
      {
        id: "deb2-04-s1",
        label: "Common Cause",
        situation:
          "Claim: 'Ice cream sales and drowning deaths rise and fall together, so eating ice cream causes drowning.'",
        prompt: "What's the flaw in this causal reasoning?",
        options: [
          "It's correct — the tight correlation proves ice cream causes drowning",
          "A common cause — hot summer weather drives BOTH ice cream sales and swimming (hence drownings); the correlation has a third-factor explanation",
          "The sample of summers is too small",
          "Drowning rates cannot be measured accurately",
        ],
        correctIndex: 1,
        explanation:
          "This mistakes correlation for causation by ignoring a common cause: hot weather independently drives both ice cream sales and swimming (and thus drownings). The correlation is real but the claimed mechanism is absurd. Naming the confounding third factor instantly dissolves the causal claim.",
      },
      {
        id: "deb2-04-s2",
        label: "Post Hoc",
        situation:
          "Claim: 'I took the herbal supplement, and a day later my cold went away. So the supplement cured my cold.'",
        prompt: "Which fallacy is this?",
        options: [
          "Straw man",
          "Ad hominem",
          "Post hoc ergo propter hoc — inferring causation merely because the recovery followed the supplement in time",
          "Begging the question",
        ],
        correctIndex: 2,
        explanation:
          "This is post hoc ergo propter hoc ('after this, therefore because of this') — treating temporal sequence as proof of cause. Colds resolve on their own in days, so the recovery would likely have happened anyway. Temporal order is necessary but nowhere near sufficient for causation; without a mechanism and a control, the causal claim is unsupported.",
      },
      {
        id: "deb2-04-s3",
        label: "Reverse Causation",
        situation:
          "Claim: 'Wealthier people report being happier, so being happy is what makes people wealthy.'",
        prompt: "What is the strongest objection?",
        options: [
          "The direction may be reversed (or confounded) — wealth could cause the happiness rather than the other way around, so the claimed causal direction isn't established",
          "Agree — the correlation settles the direction",
          "The sample of people is too small",
          "Happiness cannot be quantified at all",
        ],
        correctIndex: 0,
        explanation:
          "The correlation is symmetric, but the claimed causal direction isn't established. Wealth plausibly causes happiness (security, options), or a third factor (health, stable upbringing) drives both. Reverse causation and confounding are live alternatives the argument never rules out, so 'happiness makes you wealthy' is unproven.",
      },
      {
        id: "deb2-04-s4",
        label: "Establishing Cause",
        situation:
          "A debater wants to prove a new drug actually lowers blood pressure — not merely that taking it correlates with lower readings.",
        prompt: "Which evidence would MOST strongly support genuine causation?",
        options: [
          "A single patient whose blood pressure fell after starting the drug",
          "A larger correlation coefficient between the drug and lower readings",
          "A poll showing most patients believe the drug works",
          "A randomized controlled trial (treatment vs. placebo) plus a plausible biological mechanism for how the drug lowers pressure",
        ],
        correctIndex: 3,
        explanation:
          "A randomized controlled trial randomly assigns the drug, ruling out confounders, and a plausible mechanism explains why it would work — together the gold standard for causation. A single 'after' case is post hoc; a bigger correlation is still just correlation; a belief poll is irrelevant to whether the drug physically works.",
      },
    ],
  },

  // ─── debate-2-05: Formal Fallacies ────────────────────────────────────────────
  "debate-2-05": {
    intro:
      "Some invalid forms mimic the valid ones almost perfectly. Test each conditional: could Q be true without P? Name the counterfeit, then expose the gap.",
    spots: [
      {
        id: "deb2-05-s1",
        label: "Spot the Counterfeit",
        situation:
          "'If it rained, the ground is wet. The ground IS wet. Therefore, it rained.'",
        prompt: "Is this valid, and if not, which fallacy is it?",
        options: [
          "Valid — modus ponens",
          "Affirming the consequent — invalid: the ground could be wet from a sprinkler, so Q (wet) can be true without P (rain)",
          "Valid — modus tollens",
          "Denying the antecedent",
        ],
        correctIndex: 1,
        explanation:
          "This affirms the consequent ('If P→Q; Q; ∴ P'), an invalid counterfeit of modus ponens. 'If it rained' only makes rain sufficient for wetness, not the only cause — a sprinkler, hose, or burst pipe wets the ground too. Since Q can be true without P, observing wetness doesn't prove rain.",
      },
      {
        id: "deb2-05-s2",
        label: "Spot the Counterfeit",
        situation:
          "'If you study, you'll pass. You did NOT study. Therefore, you will not pass.'",
        prompt: "Why is this argument invalid?",
        options: [
          "It's valid — modus tollens",
          "It affirms the consequent",
          "Denying the antecedent — invalid: passing has other routes (prior knowledge, an easy exam), so 'not studying' doesn't guarantee 'not passing'",
          "It is actually valid and sound",
        ],
        correctIndex: 2,
        explanation:
          "This denies the antecedent ('If P→Q; not P; ∴ not Q'), the invalid counterfeit of modus tollens. Studying is one sufficient route to passing, not the only one — you could pass on prior knowledge or an easy test. So 'not P' fails to establish 'not Q.' (Modus tollens denies the consequent, which would be valid.)",
      },
      {
        id: "deb2-05-s3",
        label: "Valid or Fallacy?",
        situation:
          "'If a number is divisible by 4, it is even. This number is NOT even. Therefore, it is not divisible by 4.'",
        prompt: "Is this valid, and what form is it?",
        options: [
          "Valid — modus tollens (If P→Q; not Q; therefore not P)",
          "Invalid — affirming the consequent",
          "Invalid — denying the antecedent",
          "Invalid — undistributed middle",
        ],
        correctIndex: 0,
        explanation:
          "This is genuine modus tollens — deny the consequent ('not Q') and the antecedent must fail ('not P'). If divisibility by 4 guarantees evenness, then a number that isn't even can't be divisible by 4. The form is always valid (and here also sound), so you can't beat it on logic — only by denying a premise, which you can't here.",
      },
      {
        id: "deb2-05-s4",
        label: "Undistributed Middle",
        situation:
          "'All sharks are good swimmers. Michael Phelps is a good swimmer. Therefore, Michael Phelps is a shark.'",
        prompt: "What is the structural error?",
        options: [
          "Nothing — it follows logically",
          "Affirming the consequent",
          "Denying the antecedent",
          "Undistributed middle — sharing the term 'good swimmer' doesn't connect 'Michael Phelps' to 'shark'; many good swimmers aren't sharks",
        ],
        correctIndex: 3,
        explanation:
          "This is the undistributed middle: 'All A are B; X is B; therefore X is A.' The shared middle term ('good swimmer') is too broad to link the categories — lots of good swimmers are not sharks. It's structurally identical to 'dogs are animals; cats are animals; therefore cats are dogs.'",
      },
    ],
  },

  // ─── debate-2-06: Fallacies of Relevance ──────────────────────────────────────
  "debate-2-06": {
    intro:
      "The most common cheat isn't bad logic — it's changing the subject while pretending you didn't. Catch the dodge, but don't over-call: relevant bias and real experts are legitimate.",
    spots: [
      {
        id: "deb2-06-s1",
        label: "Name the Dodge",
        situation:
          "Debater A argues for 'a modest nighttime curfew on delivery trucks downtown.' Debater B replies: 'My opponent wants to ban ALL vehicles from the city and shut down commerce!'",
        prompt: "What fallacy has B committed?",
        options: [
          "Ad hominem — B attacked A's character",
          "Straw man — B distorted A's modest proposal (a truck curfew) into an extreme one (banning all vehicles), then attacked the distortion",
          "Red herring — B changed the subject to an unrelated issue",
          "No fallacy — B fairly summarized A's position",
        ],
        correctIndex: 1,
        explanation:
          "B built a straw man: distorting a narrow proposal (a nighttime truck curfew) into an extreme caricature (banning all vehicles) that's easier to attack. The correct response refuses the distortion and restates the real position. Note it's not a red herring — B is still nominally on the topic, just attacking a misrepresented version of it.",
      },
      {
        id: "deb2-06-s2",
        label: "Fallacy or Legitimate?",
        situation:
          "Two replies to an opponent's cited study:\n  A: 'Ignore him — he never even finished college.'\n  B: 'That study was funded by the company that profits from its conclusion — a relevant conflict of interest.'",
        prompt: "Which reply is a fallacious ad hominem, and which is legitimate?",
        options: [
          "Both are fallacious ad hominems",
          "Both are legitimate",
          "A is a fallacious ad hominem (his schooling is irrelevant to the evidence); B is legitimate source criticism (a funding conflict bears on the evidence's reliability)",
          "A is legitimate; B is the fallacy",
        ],
        correctIndex: 2,
        explanation:
          "A attacks the person to dodge the argument — his education is irrelevant to whether the study's evidence is sound. B flags a genuine, relevant conflict of interest affecting the evidence's reliability, which is fair source criticism, not a personal attack. The line is relevance: dodge the argument = fallacy; question a source's relevant bias = legitimate.",
      },
      {
        id: "deb2-06-s3",
        label: "Name the Dodge",
        situation:
          "'Millions of people are convinced this diet works. With that many believers, it clearly must be effective.'",
        prompt: "What is the flaw?",
        options: [
          "Appeal to popularity (ad populum) — how many people believe something doesn't determine whether it's true",
          "No flaw — widespread belief proves effectiveness",
          "Straw man",
          "A legitimate appeal to authority",
        ],
        correctIndex: 0,
        explanation:
          "This is appeal to popularity: treating the number of believers as evidence of truth. Belief isn't proof — majorities have been confidently wrong throughout history. Whether the diet works depends on controlled evidence, not its headcount. Popularity could be relevant to a question about opinion itself, but here it's offered as proof of effectiveness, which it can't establish.",
      },
      {
        id: "deb2-06-s4",
        label: "Name the Dodge",
        situation:
          "The resolution is whether to require helmets for cyclists. The opponent responds: 'But the REAL outrage is how badly our roads are maintained — that's what we should be talking about!'",
        prompt: "Why is this a red herring, and what's the response?",
        options: [
          "It's relevant and decisive",
          "It's an ad hominem attack",
          "It's a valid appeal to authority",
          "It introduces an off-topic issue (road maintenance) to distract from the helmet question; name the dodge and redirect to the actual resolution",
        ],
        correctIndex: 3,
        explanation:
          "Road maintenance may be a real concern, but here it's a red herring — an irrelevant distraction from whether to require helmets. Even if true, it doesn't bear on the resolution. The response names the dodge and redirects: 'Road upkeep isn't what we're debating; on the helmet requirement itself…' A true-but-irrelevant point is still a relevance fallacy.",
      },
    ],
  },

  // ─── debate-2-07: Fallacies of Presumption and Ambiguity ──────────────────────
  "debate-2-07": {
    intro:
      "These arguments smuggle in a false assumption or hide behind a slippery word. Drag the buried move into the light: supply the missing option, demand each link, pin the word.",
    spots: [
      {
        id: "deb2-07-s1",
        label: "Buried Assumption",
        situation:
          "'We have only two choices: cut the entire arts budget, or watch the school go bankrupt. Which will it be?'",
        prompt: "What fallacy is this, and how do you defeat it?",
        options: [
          "Slippery slope — defeat it by accepting the chain",
          "Equivocation — a word shifted meaning",
          "False dilemma — it offers only two extremes; defeat it by supplying a third option (e.g., a partial cut or new revenue)",
          "A valid forced choice",
        ],
        correctIndex: 2,
        explanation:
          "This is a false dilemma (false dichotomy): it forces a choice between two extremes while ignoring the obvious middle ground — partial cuts, phased reductions, fundraising. You defeat it by naming the buried assumption (that only two options exist) and supplying a reasonable third path, which collapses the 'either/or' framing.",
      },
      {
        id: "deb2-07-s2",
        label: "Buried Assumption",
        situation:
          "'If we allow this one exception to the rule, soon people will demand exceptions for everything, then no rule will be enforced, and eventually society will descend into chaos.'",
        prompt: "What's wrong with this argument?",
        options: [
          "Nothing — the chain of consequences is obviously inevitable",
          "Slippery slope — it asserts an escalating chain of consequences without justifying that each step actually follows; demand evidence for each link",
          "It's a false dilemma",
          "It begs the question",
        ],
        correctIndex: 1,
        explanation:
          "This is a slippery slope: a modest first step (one exception) is claimed to cascade inevitably to an extreme outcome (societal chaos) without justifying any link. Slippery slopes aren't automatically fallacious, but the burden is to show each step follows — here none is justified, so it's just fear of an unproven chain. The response: 'Justify each link, or this is fear, not argument.'",
      },
      {
        id: "deb2-07-s3",
        label: "Buried Assumption",
        situation:
          "'The president is trustworthy because he says he is — and we know he tells the truth because a trustworthy person would never lie.'",
        prompt: "What fallacy is this?",
        options: [
          "Red herring",
          "Hasty generalization",
          "Appeal to authority",
          "Begging the question (circular reasoning) — the conclusion ('he's trustworthy') is assumed in the premises that are supposed to prove it",
        ],
        correctIndex: 3,
        explanation:
          "This is begging the question / circular reasoning: 'he's trustworthy' is supported by 'he tells the truth,' which is justified by 'a trustworthy person wouldn't lie' — assuming the very trustworthiness it's meant to prove. The argument goes in a circle, so nothing is actually demonstrated. Expose it by pointing out the conclusion is doing the work of the premise.",
      },
      {
        id: "deb2-07-s4",
        label: "Slippery Word",
        situation:
          "'Nothing is better than eternal happiness. A cheese sandwich is better than nothing. Therefore, a cheese sandwich is better than eternal happiness.'",
        prompt: "What ambiguity fallacy makes this absurd 'proof' seem to work?",
        options: [
          "Equivocation — the word 'nothing' shifts meaning between the two premises ('no thing is better' vs. 'not having anything'), so the inference is bogus",
          "False dilemma",
          "Slippery slope",
          "Straw man",
        ],
        correctIndex: 0,
        explanation:
          "This is equivocation: 'nothing' means 'there is no thing better than eternal happiness' in the first premise but 'not having anything' in the second. The argument only works by sliding between the two senses. Pin the word to a single meaning and the inference instantly breaks — ambiguity fallacies dissolve the moment a key term is fixed.",
      },
    ],
  },

  // ─── debate-2-08: Reasoning by Analogy ─────────────────────────────────────────
  "debate-2-08": {
    intro:
      "Analogies persuade by familiarity, but every analogy breaks at the point where the cases truly differ. Concede the surface likeness, then hunt the relevant disanalogy.",
    spots: [
      {
        id: "deb2-08-s1",
        label: "Find the Disanalogy",
        situation:
          "'A national government is just like a household budget: when money is tight, you must cut spending. So the government must slash spending during a recession.'",
        prompt: "What is the strongest way to attack this analogy?",
        options: [
          "Deny that governments and households have anything in common at all",
          "Find a relevant disanalogy: unlike a household, a national government issues its own currency and its spending feeds total demand, so the comparison breaks at the very feature the conclusion depends on",
          "Agree completely with the analogy",
          "Argue that households are badly run too",
        ],
        correctIndex: 1,
        explanation:
          "The strong attack is a disanalogy that touches the conclusion: a household can't print money and its spending doesn't move the whole economy, whereas a sovereign government's can and does — exactly the features that make 'just cut spending' transfer or not. You needn't deny all similarity; you locate the one relevant difference where the analogy does its work.",
      },
      {
        id: "deb2-08-s2",
        label: "Relevant Similarity",
        situation:
          "'Books and guns are similar — both can be bought, both are popular, both can be collected. Since we require background checks to buy guns, we should require them to buy books.'",
        prompt: "Why is this a weak analogy?",
        options: [
          "It's strong — it lists several genuine similarities",
          "Books and guns are completely unrelated in every way",
          "The listed similarities (purchasable, popular, collectible) are irrelevant to the conclusion; gun checks exist because guns can kill, a feature books don't share",
          "The analogy begs the question",
        ],
        correctIndex: 2,
        explanation:
          "The analogy piles up similarities that have nothing to do with why we regulate gun purchases — the real reason is lethal danger to others. Books don't share that relevant feature, so the basis for background checks doesn't transfer. Counting similarities is worthless if they're irrelevant; relevance, not quantity, determines analogical strength.",
      },
      {
        id: "deb2-08-s3",
        label: "Defend the Analogy",
        situation:
          "You argue: 'Banning this toxic food additive is like banning leaded gasoline — a justified public-health intervention.' You expect the opponent to claim the cases differ.",
        prompt: "How should you pre-empt the disanalogy attack?",
        options: [
          "Anticipate the likely relevant difference and address it — e.g., 'you may say the additive is less harmful than lead, but the principle (banning a proven public-health hazard) holds at the relevant level, and here's the evidence of harm'",
          "Refuse to acknowledge that any differences exist",
          "Make the analogy more vivid with dramatic language",
          "Add ten more superficial similarities between the cases",
        ],
        correctIndex: 0,
        explanation:
          "Strong analogical advocacy anticipates the disanalogy and defuses it: name the difference the opponent will raise ('the additive is less harmful than lead') and show it doesn't break the inference at the relevant level (the shared principle is banning a proven hazard, and the harm evidence is present). Refusing to acknowledge differences looks evasive; piling on superficial likenesses misses the point.",
      },
      {
        id: "deb2-08-s4",
        label: "Vivid ≠ Strong",
        situation:
          "An opponent lands a catchy, memorable analogy that the audience clearly loves. A novice panics, assuming a vivid analogy must be a strong argument.",
        prompt: "What should the novice remember?",
        options: [
          "Vivid analogies are always logically strong",
          "Analogies can never be refuted once stated",
          "The only possible response is an even more vivid counter-analogy",
          "Vividness isn't strength — an analogy is only as strong as the relevance of its similarities, so a memorable comparison can still be broken by a relevant disanalogy",
        ],
        correctIndex: 3,
        explanation:
          "A vivid analogy can feel persuasive while being logically weak — vividness and strength are different things. Stay calm and test it: are the similarities relevant to the conclusion, and is there a relevant difference that breaks it? A catchy comparison collapses just as readily as a dull one once you find the disanalogy that touches the point.",
      },
    ],
  },

  // ─── debate-2-09: Statistical and Numerical Reasoning ─────────────────────────
  "debate-2-09": {
    intro:
      "Numbers look objective, which is exactly why misleading ones are dangerous. Don't out-calculate the opponent — expose what the statistic leaves out.",
    spots: [
      {
        id: "deb2-09-s1",
        label: "Base Rate",
        situation:
          "'Our screening test for a rare disease is 99% accurate. You tested positive, so you almost certainly have it.' The disease affects 1 in 10,000 people.",
        prompt: "Why might a positive NOT mean you almost certainly have the disease?",
        options: [
          "The test must be malfunctioning",
          "Base-rate neglect — the disease is so rare that false positives from the huge healthy population vastly outnumber the few true positives, so a positive is probably a false alarm",
          "99% accuracy means a 99% chance you're sick",
          "The sample size was too small",
        ],
        correctIndex: 1,
        explanation:
          "This is base-rate neglect. Test 10,000 people: ~1 true case but ~100 false positives (1% of 9,999 healthy people). Among ~101 positives, only ~1 is real — a positive is probably a false alarm. The test's 99% accuracy is not your probability of being sick; you must factor in how rare the disease is to begin with.",
      },
      {
        id: "deb2-09-s2",
        label: "Relative vs. Absolute",
        situation:
          "Headline: 'This snack TRIPLES your risk of a rare disease!' The disease normally affects about 1 in a million people per year.",
        prompt: "How should a debater contextualize this 'tripling'?",
        options: [
          "Panic — a tripled risk is always serious",
          "The study must be fraudulent",
          "Cite the absolute risk: tripling 1-in-a-million is 3-in-a-million — still vanishingly small; 'triples the risk' is alarming framing of a tiny absolute change",
          "Relative risk is the only number that matters",
        ],
        correctIndex: 2,
        explanation:
          "'Triples your risk' is relative-risk framing that's meaningless without the baseline. Tripling a 1-in-a-million annual risk gives 3-in-a-million — still negligible in absolute terms. Reporting relative risk without absolute risk is a classic way to make trivial changes sound terrifying; the move is to demand and supply the absolute numbers.",
      },
      {
        id: "deb2-09-s3",
        label: "Mean vs. Median",
        situation:
          "'The average net worth in our investment club hit $50 million last year — our members are all doing great!' You then learn one member is a newly-joined billionaire.",
        prompt: "What statistical issue does this reveal?",
        options: [
          "The mean is distorted by an extreme outlier (the billionaire); the median net worth would better reflect the typical member and may be far lower",
          "None — a higher average proves broad prosperity",
          "Net worth cannot be averaged",
          "The club is too small to measure",
        ],
        correctIndex: 0,
        explanation:
          "The mean (average) is easily dragged up by a single extreme outlier — one billionaire can lift the average to $50M while the typical member is unchanged. For skewed quantities like wealth, the median (middle value) resists outlier distortion and better represents the typical case. 'All doing great' based on a soaring mean collapses the moment you ask for the median.",
      },
      {
        id: "deb2-09-s4",
        label: "Denominator",
        situation:
          "An opponent declares: 'This app is dangerous — 8,000 people who used it later reported health problems!'",
        prompt: "What's the first question to ask?",
        options: [
          "Nothing — 8,000 is obviously a huge number",
          "Whether any of the 8,000 people were famous",
          "Whether 8,000 is actually a percentage",
          "What's the denominator and the comparison? 8,000 out of how many users, over what period, versus the background rate of such problems among non-users?",
        ],
        correctIndex: 3,
        explanation:
          "A raw count with no denominator is nearly meaningless. 8,000 reports out of, say, 50 million users over years — compared against how often those problems occur anyway — could be far below the background rate, and 'reported after' isn't 'caused by' (post hoc). Demand the denominator and the baseline comparison; big absolute numbers routinely mislead when the base population is hidden.",
      },
    ],
  },

  // ─── debate-2-10: Burden of Proof, Presumption, and Parsimony ─────────────────
  "debate-2-10": {
    intro:
      "Half of winning is knowing whose job it is to prove the point — and refusing to do the other side's work. Burden, presumption, and Occam's razor decide who wins when proof runs out.",
    spots: [
      {
        id: "deb2-10-s1",
        label: "Burden-Shifting",
        situation:
          "Proponent: 'We should roll out this untested reform nationwide. You can't prove it will fail, so there's no reason not to adopt it.'",
        prompt: "What's wrong with this reasoning?",
        options: [
          "Nothing — if no one can disprove it, we should adopt it",
          "It illegitimately shifts the burden of proof — the proponent of change must prove the reform will work; opponents need not prove it will fail",
          "It's a slippery slope",
          "It's a valid appeal to presumption",
        ],
        correctIndex: 1,
        explanation:
          "This shifts the burden of proof. The proponent advocates a change, so the burden is on them to show it works — not on opponents to prove it fails. 'You can't prove it will fail' illegitimately demands disproof of their own claim. The correct reply: 'It's your proposal; prove it works. Failing to disprove it is no reason to adopt it.' Presumption favors no change until that burden is met.",
      },
      {
        id: "deb2-10-s2",
        label: "Appeal to Ignorance",
        situation:
          "'No one has ever proven that aliens have NOT visited Earth. Therefore, they have visited, and we should plan accordingly.'",
        prompt: "What fallacy is this?",
        options: [
          "It's only burden-shifting, nothing more",
          "False dilemma",
          "Appeal to ignorance (argumentum ad ignorantiam) — treating the absence of disproof as proof; 'not shown false' doesn't make it true",
          "Hasty generalization",
        ],
        correctIndex: 2,
        explanation:
          "This is appeal to ignorance: the absence of evidence against the claim is treated as evidence for it. 'No one disproved it' is not 'it's true' — the burden is on the claimant to provide positive evidence. Lacking disproof tells us nothing. (A thorough, well-designed search that found nothing could be weak evidence of absence — but that's positive testing, not mere lack of disproof.)",
      },
      {
        id: "deb2-10-s3",
        label: "Presumption Decides Ties",
        situation:
          "A debate over abolishing a long-standing institution ends with both sides roughly even — neither fully proved its case. Presumption favors the status quo.",
        prompt: "Who should win, and what does this teach the status-quo side?",
        options: [
          "The status-quo side wins on presumption — and the lesson is they can win merely by preventing the change-advocate from meeting its burden, without proving the status quo is ideal",
          "The side proposing change, for being bolder",
          "It's an automatic tie with no winner",
          "The judge should flip a coin",
        ],
        correctIndex: 0,
        explanation:
          "When neither side meets its burden, presumption decides — and here it favors the status quo, so that side wins. The strategic lesson is liberating: a status-quo defender needn't prove the status quo is ideal, only stop the other side from meeting its burden for change. Like a defense winning on reasonable doubt rather than proving innocence, the presumption-holder wins ties.",
      },
      {
        id: "deb2-10-s4",
        label: "Occam's Razor",
        situation:
          "Two explanations fit the same evidence equally well:\n  A: an ordinary, well-understood cause (one assumption).\n  B: an elaborate hidden conspiracy (many unproven assumptions about secret coordination).",
        prompt: "How does parsimony (Occam's razor) apply, and what is its limit?",
        options: [
          "Always pick the most complex explanation",
          "Occam's razor proves A is true with certainty",
          "Complexity reliably indicates truth",
          "Prefer A under equal evidence (fewer assumptions), putting the burden on B to justify its extra machinery — but the razor is a tie-breaker, not proof; if evidence ever required the complexity, simplicity yields",
        ],
        correctIndex: 3,
        explanation:
          "When explanations fit the evidence equally well, Occam's razor prefers the one with fewer unsupported assumptions — here A — and puts the burden on the complex account (B) to justify its extras. The razor is a default and tie-breaker, not a proof: it doesn't certify A as true, and if evidence genuinely required the complexity, simplicity would yield. Used right, it makes the opponent earn every extra assumption.",
      },
    ],
  },
};
