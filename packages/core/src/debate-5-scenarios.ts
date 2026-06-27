import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the Clash epoch (debate-5).
// Each spot puts a real moment of the round in front of the learner and asks
// for the single strongest, most logically effective move — the correct
// rebuttal, the right line-by-line response, the genuine turn, the conceded
// drop. These are skill decisions, never opinion: the marked option is the
// answer that actually wins the exchange. correctIndex and explanation are
// stripped server-side before reaching the client.
export const debate5Scenarios: Record<string, ScenarioConfig> = {
  // ─── debate-5-01: The Flow as Battlefield ───────────────────────────────
  "debate-5-01": {
    intro: "Read the round like a map. Each spot puts a moment of the clash in front of you — diagnose the true state of an argument, then decide where your scarce speaking time belongs.",
    spots: [
      {
        id: "deb5-01-s1", label: "Diagnose the State",
        situation: "In your last speech you made a response to the opponent's disadvantage. In the speech that just ended, they never mentioned that response — they moved on to other arguments.",
        prompt: "What is the state of that argument on your flow?",
        options: [
          "Winning — your last response stands unanswered, so on that point you're ahead",
          "Losing — they spoke most recently, so they're ahead",
          "Contested — both sides have now spoken, so it's a wash",
          "Irrelevant — it can no longer affect the round",
        ],
        correctIndex: 0,
        explanation: "An argument is 'winning' when your last response stands unanswered — exactly the case here. The opponent moved on without rebuilding, so on that argument you're ahead. Speaking order doesn't decide the state; what's unanswered does. Reading each argument's state (winning, losing, contested, dropped) is the live battlefield map that tells you where to commit time.",
      },
      {
        id: "deb5-01-s2", label: "Spend the Time",
        situation: "You have one rebuttal left. The opponent dropped your answer on Argument A, so you've already won it. Argument B is a deep, two-sided clash that the ballot actually hinges on.",
        prompt: "Where should the bulk of your time go?",
        options: [
          "Pile every remaining response onto Argument A to bury it even deeper",
          "Split your time exactly evenly across A and B to be safe",
          "Briefly extend A (it's already won), then pour the rest into the decisive contested Argument B",
          "Abandon both and open a fresh argument the opponent hasn't seen",
        ],
        correctIndex: 2,
        explanation: "Time is the scarcest resource in a round. An argument already won needs only a brief extension to lock it in; over-investing there wins nothing new. The decisive contested clash is where the ballot is actually decided, so that's where the bulk of the time belongs. Reading the board means committing speech time where the round turns — not re-winning settled ground.",
      },
      {
        id: "deb5-01-s3", label: "Where It's Decided",
        situation: "You scan your flow: three arguments you're clearly winning, two you're clearly losing but that are minor and don't touch the ballot, and one contested argument that both sides' paths to victory run through.",
        prompt: "Where is this round actually decided?",
        options: [
          "On the three arguments you're winning — just count them up",
          "On the single contested argument both paths to the ballot run through — that's the decisive clash",
          "On the two minor losing arguments — you must rescue them first",
          "It's already decided; no single argument matters now",
        ],
        correctIndex: 1,
        explanation: "Rounds aren't decided by tallying argument counts — they're decided at the clash both sides need to win. The three winners are nice but settled; the two losers don't reach the ballot. The contested argument both paths run through is the decisive engagement, and a strategist commits forces there. That read is the whole point of the flow-as-battlefield.",
      },
      {
        id: "deb5-01-s4", label: "Free Offense",
        situation: "In your constructive you made an independent advantage. Across two full opponent speeches, neither side has touched it again — the opponent never responded to it at all.",
        prompt: "How should you read and use this argument?",
        options: [
          "Dropped in your favor — it's conceded offense; extend it and weigh it as a clean, uncontested reason to vote for you",
          "Contested and risky — better not to draw attention to it",
          "The opponent's silence means the judge ignored it; abandon it",
          "Losing — because you didn't repeat it every speech, it no longer counts",
        ],
        correctIndex: 0,
        explanation: "An argument the opponent never answered is conceded — it flows as true. An independent advantage left untouched is free, uncontested offense: one of the most valuable things on the flow. The move is to extend it (re-explain it) and weigh it as a clean reason to vote for you. Reading the board surfaces exactly these dropped, decisive arguments.",
      },
    ],
  },

  // ─── debate-5-02: Layered Refutation ────────────────────────────────────
  "debate-5-02": {
    intro: "One response is a single point of failure. In the clash you answer on independent layers — and you pick the refutation that still beats the argument even when a piece is rebuilt.",
    spots: [
      {
        id: "deb5-02-s1", label: "The Robust Refutation",
        situation: "The opponent runs a disadvantage: 'Your trade plan triggers a recession.' You have four candidate responses.",
        prompt: "Which response is the strongest, most robust refutation?",
        options: [
          "'No it won't — that's just wrong.'",
          "'First, no link — the plan doesn't touch the sectors they cite (evidence). Second, even if it links, the impact is small and slow. Third, even if it's real, our growth advantage outweighs.'",
          "'You can't actually prove a recession will happen.'",
          "'Recessions are bad — we agree with you there.'",
        ],
        correctIndex: 1,
        explanation: "Layered refutation gives three independent reasons the argument fails: no link, weak impact, and we outweigh. The opponent must now rebuild all three to win it, while you survive on any one. A single flat denial is one point of failure — rebuild it and the argument lands. The 'even if' cascade is defense in depth: it multiplies their burden and distributes your risk.",
      },
      {
        id: "deb5-02-s2", label: "Spot the Contradiction",
        situation: "A debater layers two responses to an immigration disadvantage: '(1) The plan does NOT increase immigration. (2) And anyway, more immigration is great — we want it.'",
        prompt: "Why is this layering flawed?",
        options: [
          "It isn't flawed — more layers is always better",
          "The two layers contradict — denying the link while praising the impact is a double-turn the opponent exploits: 'By their own logic immigration is good and their plan blocks it — so vote them down.'",
          "The layers are too strong and will look arrogant",
          "There are too few layers to be persuasive",
        ],
        correctIndex: 1,
        explanation: "Layers must be independent AND consistent. Here layer 1 denies the link while layer 2 celebrates the impact — a double-turn. A sharp opponent turns the contradiction into their own offense: if immigration is good and your plan prevents it, your plan is bad. The fix is one coherent line: either deny link and impact, or concede the link and impact-turn it — never both.",
      },
      {
        id: "deb5-02-s3", label: "Order the Layers",
        situation: "You have three answers to an argument: a decisive one ('their evidence was formally retracted — here's the retraction'), a moderate one, and a weak fallback.",
        prompt: "How should you order them?",
        options: [
          "Weak fallback first, saving the decisive one for a dramatic finish",
          "In random order — order doesn't matter once all are said",
          "Decisive first — the judge and opponent weight the first response most, so lead strongest and relegate weaker answers to later 'even if' positions",
          "Give only the moderate one to seem measured",
        ],
        correctIndex: 2,
        explanation: "The first response carries the most weight with both the judge and the opponent, so you lead with your most decisive layer (the retraction) and push weaker fallbacks into 'even if' positions behind it. Burying your best answer wastes the prime slot and risks the judge weighting your weakest response most heavily. Prioritize by strength: best layer first.",
      },
      {
        id: "deb5-02-s4", label: "Match the Depth",
        situation: "The opponent makes a trivial, throwaway point. You're under time pressure and still have a decisive clash to handle.",
        prompt: "What's the disciplined response?",
        options: [
          "One clean response to the throwaway point, saving deep layering for the decisive clash",
          "Build a five-layer fortress on the throwaway point to look thorough",
          "Ignore the throwaway point entirely and hope the judge forgets it",
          "Spend exactly equal time on every argument regardless of weight",
        ],
        correctIndex: 0,
        explanation: "Each layer costs time, so depth should match an argument's importance. A trivial point needs only a single clean response; pouring five layers into it while a decisive clash goes under-covered is a misallocation. Reserve heavy, multi-layered refutation for the arguments that decide the ballot, and answer minor ones efficiently.",
      },
    ],
  },

  // ─── debate-5-03: Turns ─────────────────────────────────────────────────
  "debate-5-03": {
    intro: "The highest-leverage refutation doesn't block the opponent's argument — it flips their own offense into a reason you win. Pick the move that turns it, without unbalancing yourself.",
    spots: [
      {
        id: "deb5-03-s1", label: "Turn vs. Block",
        situation: "Opponent: 'Your plan raises energy costs.' You hold evidence that the plan actually lowers total energy costs by displacing pricier sources.",
        prompt: "Which response generates the most for your side?",
        options: [
          "'That's false' — flatly deny the cost increase",
          "'Even if costs rise a little, it's a price worth paying'",
          "Link-turn it: 'Our plan actually LOWERS total energy costs — here's the evidence — so their own argument is now a reason to vote for us.'",
          "Concede the argument and move on to safer ground",
        ],
        correctIndex: 2,
        explanation: "A flat denial at best neutralizes the argument into a wash; conceding gives it away. The link turn converts the opponent's own argument into offense for you — their 'costs rise' attack becomes 'our plan cuts costs,' a positive reason to vote for you. That asymmetry (you gain offense, not just stop theirs) is why turns are the highest-leverage refutation.",
      },
      {
        id: "deb5-03-s2", label: "Name the Turn",
        situation: "Opponent: 'Your plan increases tourism, and tourism damages the reefs.' You concede tourism rises, but show the new revenue funds reef protection that leaves the reefs measurably healthier.",
        prompt: "What kind of turn is this?",
        options: [
          "An impact turn — concede the link (tourism rises) but flip the value (the increase is actually good)",
          "A link turn — you're denying that tourism rises at all",
          "A double-turn — you've made two contradictory turns",
          "A defensive no-link with no offense",
        ],
        correctIndex: 0,
        explanation: "This is an impact turn: you grant the link (yes, tourism rises) but reverse its value (the increase funds protection, so it's good). A link turn would instead deny the causal direction ('our plan decreases tourism'). Here the link is conceded and the impact is revalued, converting their 'tourism is bad' argument into your advantage.",
      },
      {
        id: "deb5-03-s3", label: "Avoid the Double-Turn",
        situation: "Opponent: 'Your plan raises interest rates, which hurts borrowers.' A debater wants to argue BOTH 'we don't raise rates' AND 'higher rates are actually good.'",
        prompt: "What's the danger, and the fix?",
        options: [
          "No danger — two responses are always safer than one",
          "It's a double-turn: the two contradict, and the opponent argues 'rate hikes are good by your own logic and your plan prevents them — so vote you down.' Fix: commit to ONE turn.",
          "It's a clean layered refutation — keep both responses",
          "Add a third turn to balance the first two",
        ],
        correctIndex: 1,
        explanation: "Link-turning ('no rate increase') and impact-turning ('rate increases are good') the same argument contradict — a double-turn. The opponent pounces: if higher rates are good and your plan prevents them, your plan is bad. The rule is one turn per argument: either deny the link or revalue the impact, never both. Doing both unbalances you and hands them your contradiction.",
      },
      {
        id: "deb5-03-s4", label: "Cash the Dropped Turn",
        situation: "You made a strong impact turn early in the round. The opponent never responded to it. The final speech is approaching.",
        prompt: "What do you do with the turn?",
        options: [
          "Mention it in passing — a good turn speaks for itself",
          "Let it go — it already did its job earlier in the round",
          "Quietly convert it into a defensive 'no link' point",
          "Extend it explicitly as conceded offense and weigh it: 'They dropped our impact turn — it flows uncontested as an independent reason to vote for us, and here's why it outweighs.'",
        ],
        correctIndex: 3,
        explanation: "A dropped turn is conceded offense — one of the most valuable things in a round — but only if you extend and weigh it. Flag it as dropped, re-explain it, and tell the judge why it decides the ballot. Barely mentioning a winning, conceded turn wastes it; extending dropped turns is a primary path to victory.",
      },
    ],
  },

  // ─── debate-5-04: Cross-Examination Strategy ────────────────────────────
  "debate-5-04": {
    intro: "Cross-examination is a trap built one short question at a time. Pick the move that keeps control of the exchange and harvests the concession you'll cash in your speech.",
    spots: [
      {
        id: "deb5-04-s1", label: "Funnel, Not Fishing",
        situation: "You want the opponent to admit their plan names no enforcement body.",
        prompt: "Which line of questioning is strongest?",
        options: [
          "'What do you think about enforcement in general?'",
          "A short funnel: 'Your plan requires compliance, yes? — Which specific body enforces it? — So no enforcement body was named, correct?'",
          "'Don't you agree your plan is completely unenforceable?'",
          "'Tell me everything about how your plan handles enforcement.'",
        ],
        correctIndex: 1,
        explanation: "Open questions hand the opponent free speaking time and surrender control. The funnel of short, closed, leading questions forces narrow answers that close escape routes one at a time, until any honest answer concedes the point. Arguing the conclusion ('it's unenforceable') just lets them defend; the funnel makes them concede it themselves.",
      },
      {
        id: "deb5-04-s2", label: "Bank It",
        situation: "During cross-ex you successfully get the opponent to admit a contradiction in their own case.",
        prompt: "What's the best use of that admission?",
        options: [
          "Argue loudly, right there in cross-ex, why the admission destroys their whole case",
          "Forget it and move to your next question",
          "Bank it and deploy it in your next speech — 'In cross-ex they admitted X, which means...' — where they can't immediately walk it back",
          "Apologize for the pointed question to stay likeable",
        ],
        correctIndex: 2,
        explanation: "Cross-ex is for extracting concessions, not arguing them. Once you have the admission, stop — bank it and deploy it in your speech, where the opponent can't immediately respond. Arguing it during cross-ex wastes questioning time and gives them the chance to explain or retract the concession before it ever reaches the judge in your voice.",
      },
      {
        id: "deb5-04-s3", label: "Don't Ask Blind",
        situation: "You're tempted to throw the opponent a surprise question you don't actually know the answer to, hoping to catch them off guard.",
        prompt: "What's the disciplined choice?",
        options: [
          "Ask it — surprise is your best weapon in cross-ex",
          "Never ask a question whose answer you can't predict or handle — an unknown answer can hand them free time and strengthen their case",
          "Ask it twice so they can't dodge",
          "Ask the judge the question instead of the opponent",
        ],
        correctIndex: 1,
        explanation: "Debate inherited the trial lawyer's cardinal rule: never ask a question whose answer you can't predict or handle. A blind, fishing question is a gamble that can backfire — handing the opponent a chance to strengthen their position. Only ask what you can foresee and use, ideally where any honest answer helps you.",
      },
      {
        id: "deb5-04-s4", label: "Answer the Loaded Question",
        situation: "You're the one being cross-examined. The questioner asks: 'So you admit your plan is reckless and unfunded, right?'",
        prompt: "How should you answer?",
        options: [
          "'Yes' — agree to seem cooperative and reasonable",
          "Refuse to answer the question at all",
          "Give a long, rambling answer that volunteers extra detail about the plan",
          "Reject the loaded framing honestly and concisely without dodging: 'I wouldn't put it that way — it's funded through X and includes safeguard Y.'",
        ],
        correctIndex: 3,
        explanation: "The question smuggles in a framing ('reckless and unfunded') you reject, so decline the premise honestly and concisely while still answering — judges punish dodging. Keep it minimal so you don't volunteer material the questioner can exploit, and stay composed so you're not rattled into the concession they're fishing for. Resist the funnel without evading.",
      },
    ],
  },

  // ─── debate-5-05: Extending Arguments ───────────────────────────────────
  "debate-5-05": {
    intro: "An argument you make once and abandon fades from the flow. Pick the move that carries your winners forward — answered through, re-weighed, and intact at the final speech.",
    spots: [
      {
        id: "deb5-05-s1", label: "What a Real Extension Is",
        situation: "Your economic-growth contention was attacked: 'Growth harms the environment.' In your next speech you simply repeat the contention word-for-word, as if it were uncontested.",
        prompt: "Why isn't that a real extension?",
        options: [
          "It is a real extension — repeating the argument keeps it alive",
          "A real extension must answer THROUGH their response (rebut 'growth harms the environment'), re-reference the argument, and re-weigh it — bare repetition over an unanswered attack drops the argument",
          "You should have started an entirely new contention instead",
          "Extensions don't need to reference the original argument at all",
        ],
        correctIndex: 1,
        explanation: "Repeating an argument the opponent already attacked, as if it were uncontested, isn't extending it — it leaves their response standing. A real extension does three things: references the argument so the judge locates it, answers through the opponent's response, and re-impacts/weighs. Skipping the answer-through is the most common failure.",
      },
      {
        id: "deb5-05-s2", label: "The Complete Extension",
        situation: "Your growth contention was answered with 'growth harms the environment.' You have four ways to extend it.",
        prompt: "Which is a complete extension?",
        options: [
          "'Extend growth.'",
          "'Growth is good — remember our growth argument.'",
          "'Extend our growth contention — they said it harms the environment, but our clean-energy evidence answers that, so it stands; and it outweighs because it helps more people, sooner.'",
          "'They're just wrong about everything on this flow.'",
        ],
        correctIndex: 2,
        explanation: "Only option 3 contains all three parts: it references the contention, answers through the opponent's specific response (the clean-energy evidence rebuts 'harms the environment'), and re-weighs it. The others are bare repetition or assertion — they don't carry the argument over the response, so the judge has no reason to still weigh it.",
      },
      {
        id: "deb5-05-s3", label: "Extend Selectively",
        situation: "Final rebuttal, limited time. On your flow: two contentions you're clearly winning, one dropped turn (conceded offense), and three minor arguments you're losing.",
        prompt: "What do you extend?",
        options: [
          "Everything on the flow, briefly, so nothing is abandoned",
          "The three losing minor arguments, to try to salvage them",
          "Your two winning contentions and the dropped turn (conceded offense); release the three losing minors",
          "Only the losing arguments, since the winners are already safe",
        ],
        correctIndex: 2,
        explanation: "You can't extend everything in limited time, so the flow read guides you: extend your winners, extend dropped turns (free conceded offense worth flagging and weighing), and let the losing, non-decisive minors go. Trying to carry everything spreads you thin; collapsing toward your strongest few is what wins the final speech.",
      },
      {
        id: "deb5-05-s4", label: "Don't Drop the Baton",
        situation: "You won an argument cleanly in your first speech but never mentioned it again through the middle of the round. In the final speech you try to make it your key voting issue.",
        prompt: "What's the problem?",
        options: [
          "An argument not carried through the middle speeches has faded — you can't revive a winner you abandoned as though it were still live; it has to be extended each speech",
          "No problem — an argument made early is permanently in the round",
          "No problem — the judge will remember and weigh it for you",
          "It's ideal — saving your best argument for the final speech is good strategy",
        ],
        correctIndex: 0,
        explanation: "Extension is a relay: each speech must hand the argument to the next, answering new responses and re-weighing. An argument dropped between speeches is a baton dropped on the track — the opponent's responses to it stand unanswered, and you can't suddenly resurrect it as a clean voter in the final speech. Carry winners forward every speech.",
      },
    ],
  },

  // ─── debate-5-06: Frontlining — Defending Your Case ─────────────────────
  "debate-5-06": {
    intro: "When the opponent attacks your case, you don't restate it louder — you answer their attacks point by point. Pick the sharpest line-by-line defense.",
    spots: [
      {
        id: "deb5-06-s1", label: "Answer the Answer",
        situation: "Your contention: 'The plan creates jobs.' The opponent's response: 'Those jobs are temporary and low-wage.' A weak debater simply re-reads the original contention.",
        prompt: "What's the strongest frontline?",
        options: [
          "Repeat 'the plan creates jobs' more forcefully and with more conviction",
          "Directly rebut their specific response: 'The jobs aren't temporary — our evidence shows multi-year infrastructure roles at median wage — so their answer fails and the contention stands.'",
          "Concede the contention and pivot to a different one",
          "Change the subject to a brand-new argument they haven't seen",
        ],
        correctIndex: 1,
        explanation: "Frontlining means answering the answer — engaging the opponent's specific response, not restating your original claim. Re-reading the contention leaves 'temporary and low-wage' standing; directly rebutting it (multi-year, median-wage evidence) defeats their response and the contention survives. You must answer through the attack, not over it.",
      },
      {
        id: "deb5-06-s2", label: "Line by Line",
        situation: "The opponent made three distinct, separate responses to your contention. You have enough time to address them.",
        prompt: "What's the best approach?",
        options: [
          "Answer all three point-by-point, signposting each: 'On their first response... on their second... on their third...'",
          "Give one broad general answer meant to cover all three at once",
          "Answer only the single weakest of the three and ignore the rest",
          "Skip all three and just extend the contention",
        ],
        correctIndex: 0,
        explanation: "Three distinct responses need three distinct answers, delivered line-by-line with clear signposting so the judge can track each on the flow. A single vague answer leaves the stronger responses effectively unaddressed, and answering only the weakest concedes the other two. Signposted, point-by-point frontlining is what keeps the whole contention defended.",
      },
      {
        id: "deb5-06-s3", label: "Prioritize the Threat",
        situation: "Of three attacks on your case, two are minor, but one is a turn that threatens to flip your contention into offense for the opponent. Your time is limited.",
        prompt: "Which attack do you frontline first and hardest?",
        options: [
          "The two minor attacks first; the turn can wait until the end",
          "Spread your time evenly across all three attacks",
          "The turn — it's the one that converts your own argument against you, so answer it first and most thoroughly before it becomes their offense",
          "None of them — just restate your case and move on",
        ],
        correctIndex: 2,
        explanation: "A turn is the most dangerous attack because it doesn't just neutralize your contention — it converts it into a reason to vote for the opponent. Left unanswered, it becomes conceded offense against you. Defensive minor responses only make points a wash; the turn changes the ballot, so it gets answered first and most thoroughly.",
      },
      {
        id: "deb5-06-s4", label: "Don't Shift",
        situation: "The opponent attacks your contention's link. You're tempted to quietly drop the original link and assert a brand-new link you never ran in your case.",
        prompt: "Why is that risky, and what's better?",
        options: [
          "It's fine — you can swap in a new link whenever the old one is attacked",
          "Shifting to an untested new link invites an 'abandonment / new-argument' press and looks evasive; better to DEFEND the original link by answering their attack on it head-on",
          "Drop the whole contention to avoid the fight",
          "Assert three new links at once so at least one survives",
        ],
        correctIndex: 1,
        explanation: "Silently abandoning your original link and grafting on a new one the opponent never got to test is an argument shift — the opponent flags it as a concession on the original link and a new, late argument. Frontlining means defending the ground you actually stood on: answer the attack on the original link directly rather than running from it.",
      },
    ],
  },

  // ─── debate-5-07: Collapsing — Narrowing to Your Winners ────────────────
  "debate-5-07": {
    intro: "You don't win by going for everything. Pick the move that narrows the round onto the ground you're strongest on and pours the whole speech into it.",
    spots: [
      {
        id: "deb5-07-s1", label: "Choose Your Ground",
        situation: "Final rebuttal. You're slightly ahead on five scattered arguments but decisively winning two of them.",
        prompt: "What's the right collapse?",
        options: [
          "Go for all five arguments equally to maximize your paths to victory",
          "Collapse onto the two you're decisively winning — develop and weigh them fully — and let the three marginal ones go",
          "Collapse onto the three marginal arguments to try to firm them up",
          "Add a sixth argument to widen the field",
        ],
        correctIndex: 1,
        explanation: "Collapsing means concentrating the round onto your strongest ground. Two arguments you're decisively winning, fully developed and weighed, give the judge a clear, defensible reason to vote for you. Spreading thin across five only-slightly-ahead arguments develops none of them and invites the opponent to crystallize cleaner ground.",
      },
      {
        id: "deb5-07-s2", label: "Quality Over Quantity",
        situation: "One debater spreads the final speech thinly across eight arguments, fully developing none. The opponent collapses onto two, develops them, and weighs them against the other side's best argument.",
        prompt: "Who is positioned to win, and why?",
        options: [
          "The spreader — eight arguments is eight chances to win",
          "The opponent — a few fully-developed, weighed arguments beat many shallow ones the judge can't actually evaluate or weigh",
          "It's a tie — raw argument count is what decides the ballot",
          "Neither — with this many arguments the judge just picks at random",
        ],
        correctIndex: 1,
        explanation: "Judges vote on developed, weighed arguments, not argument counts. Eight underdeveloped points give the judge nothing to grab; two well-developed, weighed arguments tell the judge exactly why and by how much you win. Collapsing trades breadth for the depth and comparison that actually earn the ballot.",
      },
      {
        id: "deb5-07-s3", label: "Collapse to Offense",
        situation: "You're deciding what to collapse onto: a purely defensive argument that makes the opponent's case a wash, or a winning impact turn that is conceded offense — a positive reason to vote for you.",
        prompt: "Which is the better collapse target?",
        options: [
          "The defensive wash — it feels safer to play not to lose",
          "Neither — collapse onto both equally",
          "The winning turn — collapsing onto offense gives the judge a positive reason to vote FOR you, not merely a reason the opponent's case fails",
          "Whichever argument you happened to spend more time on earlier",
        ],
        correctIndex: 2,
        explanation: "Defense only prevents the opponent from winning; offense gives the judge a reason to actively vote for you. A winning, conceded impact turn is positive offense — collapse onto it so the ballot has a clear affirmative reason, not just a stalemate. When you can collapse to offense, do.",
      },
      {
        id: "deb5-07-s4", label: "Let It Go",
        situation: "You're losing one particular argument badly, but it doesn't decide the ballot. Your time is short.",
        prompt: "What's the right move?",
        options: [
          "Keep fighting it hard so you don't 'lose' anything on the flow",
          "Concede / release it and reallocate that time to the decisive ground you're actually winning",
          "Make the losing argument your final voting issue",
          "Spend half the final speech trying to rescue it",
        ],
        correctIndex: 1,
        explanation: "Collapsing is as much about what you release as what you keep. A losing argument that doesn't decide the ballot isn't worth time — let it go and pour that time into the decisive ground you're winning. Fighting every inch of lost, irrelevant ground is exactly the misallocation collapsing is meant to prevent.",
      },
    ],
  },

  // ─── debate-5-08: Strategic Concession ──────────────────────────────────
  "debate-5-08": {
    intro: "Sometimes the strongest move is to grant the opponent an argument — so you can win the ones that matter. Pick the concession that buys you the round.",
    spots: [
      {
        id: "deb5-08-s1", label: "Concede to Win",
        situation: "The opponent's disadvantage has a true, well-evidenced link you simply can't beat — but only a trivial impact. Your own case carries a huge impact.",
        prompt: "What's the strategic play?",
        options: [
          "Keep fighting the unwinnable link and burn precious time on it",
          "Grant the link, then win on weighing: 'Concede our plan does X — but even granting it, our impact outweighs theirs on magnitude and probability.'",
          "Drop your own case entirely to focus all your time on theirs",
          "Deny the link anyway, with no evidence, and hope it sticks",
        ],
        correctIndex: 1,
        explanation: "Throwing time at a link you can't beat is wasted effort. Granting it concedes nothing that matters — the impact is trivial — and frees you to win where it counts: weighing your huge impact against their small one. Strategic concession is about giving away what doesn't decide the round to win what does.",
      },
      {
        id: "deb5-08-s2", label: "Concede the Non-Essential",
        situation: "The opponent makes one peripheral point that never interacts with your path to the ballot, and one central point that does.",
        prompt: "How should you allocate your time?",
        options: [
          "Grant the peripheral point cleanly and spend your time on the central clash",
          "Contest the peripheral point hardest — never give the opponent anything",
          "Contest both points equally to be thorough",
          "Concede the central clash and argue the peripheral point",
        ],
        correctIndex: 0,
        explanation: "Time spent contesting a point that can't affect the ballot is wasted. Granting the peripheral point cleanly costs you nothing and concentrates your effort on the central clash that actually decides the round. Concede what doesn't matter; fight where it does.",
      },
      {
        id: "deb5-08-s3", label: "Don't Concede Your Offense",
        situation: "Trying to look reasonable and fair-minded, a debater concedes an argument that was actually one of their own winning offensive points.",
        prompt: "What's the error?",
        options: [
          "No error — conceding builds credibility with the judge",
          "Never concede an argument you're winning or that generates your offense — strategic concession means granting what doesn't matter, not giving away your own winners",
          "They should have conceded the entire flow to seem even more reasonable",
          "Conceding is always a mistake under any circumstances",
        ],
        correctIndex: 1,
        explanation: "Strategic concession targets arguments that don't decide the round — not your own offense. Conceding a winning offensive point throws away a reason the judge would have voted for you. The skill is surgical: grant the non-essential to buy focus, but never hand back the arguments that are actually winning you the ballot.",
      },
      {
        id: "deb5-08-s4", label: "Concede the Link, Take the Turn",
        situation: "Opponent: 'Your plan increases X, and X is bad.' You can't beat the link, but you have strong evidence that X is actually good.",
        prompt: "What's the best move?",
        options: [
          "Deny the link weakly and hope the judge buys it",
          "Concede the link and impact-turn it: grant that X happens, prove X is good — converting their argument into your advantage",
          "Concede the whole argument, link and impact together",
          "Stay silent on the argument and move on",
        ],
        correctIndex: 1,
        explanation: "When the link is unbeatable but the impact is wrong, the powerful move is to concede the link and impact-turn it — grant that X happens, then prove X is good. That converts the opponent's 'X is bad' argument into your offense. This is concession in service of a turn: give them the link so you can take the impact.",
      },
    ],
  },

  // ─── debate-5-09: Crystallization — The Final Speech ────────────────────
  "debate-5-09": {
    intro: "The final speech isn't more arguing — it's the story of why you won, told so the judge writes your ballot for you. Pick the crystallizing move.",
    spots: [
      {
        id: "deb5-09-s1", label: "Write the Ballot",
        situation: "Final speech. You could (a) read three more responses on the line-by-line, or (b) name the two key voting issues, explain why you win each, and weigh them against the opponent's best argument.",
        prompt: "What's the crystallizing choice?",
        options: [
          "(a) — pile on more line-by-line responses to cover everything",
          "(b) — crystallize: name the voting issues, show you win them, and weigh them against the opponent's best argument so the judge knows exactly why and by how much you win",
          "Introduce a brand-new contention to surprise the opponent",
          "Re-read your constructive speech word-for-word",
        ],
        correctIndex: 1,
        explanation: "The final speech is for crystallization, not more refutation. Naming the voting issues, explaining why you win them, and weighing them against the opponent's best argument hands the judge a finished decision — the story of the round. Burying that in three more line-by-line responses leaves the judge to assemble the ballot themselves, which they may do against you.",
      },
      {
        id: "deb5-09-s2", label: "Weigh, Don't Just Assert",
        situation: "Both sides are winning an impact. Debater A says 'our impact matters more.' Debater B says 'our impact outweighs on magnitude — millions affected versus thousands — and on probability — ours is near-certain, theirs speculative.'",
        prompt: "Which crystallizes effectively?",
        options: [
          "Debater A — sounding confident is what persuades the judge",
          "Debater B — explicit comparative weighing (magnitude, probability) gives the judge concrete criteria to prefer one impact over the other",
          "Neither — judges decide impact debates purely on delivery",
          "They're identical — both just claim their impact is bigger",
        ],
        correctIndex: 1,
        explanation: "'Ours matters more' is a bare assertion; 'ours outweighs on magnitude and probability, here's the comparison' is weighing. Crystallization demands explicit comparative criteria so the judge has a principled reason to prefer your impact. When both sides win an impact, the side that actually weighs — not just asserts — gives the judge the tools to vote for them.",
      },
      {
        id: "deb5-09-s3", label: "No New Arguments",
        situation: "In the final rebuttal, a debater introduces a brand-new contention the opponent never had any chance to answer.",
        prompt: "Why is this a mistake?",
        options: [
          "New arguments in the last speech are unfair (no chance to respond) and judges disregard them — the final speech is for crystallizing existing arguments, not opening new ones",
          "It's the ideal time for new arguments — the opponent can't refute them",
          "New arguments in the final speech are always rewarded with extra weight",
          "There's no convention about new arguments, so it carries no risk",
        ],
        correctIndex: 0,
        explanation: "A core debate convention bars new arguments in the final rebuttal: the opponent has no speech left to answer them, so judges disregard them and may penalize the attempt. The final speech crystallizes what's already in the round — weighing and storytelling on existing arguments — not fresh offense the other side can't contest.",
      },
      {
        id: "deb5-09-s4", label: "Frame the Clash",
        situation: "A messy round with many arguments scattered across the flow. You're opening your final speech.",
        prompt: "Which opening crystallizes best?",
        options: [
          "'Let me go straight down the flow, argument by argument, all twenty of them...'",
          "'This round comes down to one question: [the central clash]. Here's why we win it, and why it outweighs everything else.'",
          "'We simply made more arguments than they did, so we win.'",
          "'My opponent was clearly unprepared today.'",
        ],
        correctIndex: 1,
        explanation: "Crystallization frames the round around the decisive clash and tells the judge the story of why you win it. Naming the central question and showing why you win and outweigh gives a messy round a clear spine. Marching down all twenty arguments, counting arguments, or attacking the opponent personally all fail to give the judge a reason to vote.",
      },
    ],
  },

  // ─── debate-5-10: The Dropped Argument ──────────────────────────────────
  "debate-5-10": {
    intro: "An argument your opponent forgot to answer is conceded as true — and a single dropped argument, leveraged right, can win the entire round. Pick the move that cashes the drop.",
    spots: [
      {
        id: "deb5-10-s1", label: "Spot the Drop",
        situation: "You ran three arguments. The opponent's speech answered two of them in detail but never mentioned the third at all.",
        prompt: "What is true of that third argument?",
        options: [
          "It's conceded — an unanswered argument flows as true, so you can extend and weigh it as a clean reason to vote for you",
          "It's lost — the opponent ignored it, which means the judge will too",
          "It's contested, just like the two they answered",
          "The silence means it was irrelevant, so it's worthless now",
        ],
        correctIndex: 0,
        explanation: "An argument the opponent never answers is conceded — it flows through the round as true. The third argument isn't lost or irrelevant; it's free, uncontested ground. Recognizing the drop is the first step; the value comes from extending and weighing it as a clean reason the judge should vote for you.",
      },
      {
        id: "deb5-10-s2", label: "Extend AND Weigh",
        situation: "You notice the opponent dropped your third argument. A weak debater just says 'they dropped our third argument' and moves straight on.",
        prompt: "What's missing?",
        options: [
          "Nothing — simply noting that it was dropped is enough to win on it",
          "You must also EXTEND it (re-explain what it is) and WEIGH it — tell the judge why this conceded argument actually decides the round, not merely that it was dropped",
          "You should drop your argument too, to keep things fair",
          "You should re-argue the two arguments they DID answer instead",
        ],
        correctIndex: 1,
        explanation: "Merely announcing 'they dropped it' does almost nothing — the judge needs to know what the argument is and why it matters. Cashing a drop means extending it (re-explaining the conceded argument) and weighing it (showing it's sufficient to decide the ballot). A dropped argument only wins the round when you do the work of leveraging it.",
      },
      {
        id: "deb5-10-s3", label: "Is It Really Dropped?",
        situation: "You'd like to claim a drop, but the opponent did make a brief, general response that does cover your argument.",
        prompt: "Can you call it dropped?",
        options: [
          "Yes — if they didn't answer it line-by-line in detail, it counts as dropped",
          "No — a genuine response, even a brief one, means the argument is contested, not dropped; falsely claiming a drop the judge can see was answered damages your credibility",
          "Yes — you can label any argument 'dropped' and the judge will accept it",
          "It makes no difference whether you call it dropped or contested",
        ],
        correctIndex: 1,
        explanation: "A drop is a total non-response, not a thin one. If the opponent made a genuine response — even brief — the argument is contested, and you must answer through it rather than claim a concession. Falsely calling a visible answer a 'drop' is a credibility risk: the judge has it on their flow and will trust you less for the overclaim.",
      },
      {
        id: "deb5-10-s4", label: "Which Drop Wins",
        situation: "The opponent dropped two of your arguments: a trivial one, and an independent voting issue that — conceded as true — is by itself sufficient to win the round.",
        prompt: "Which dropped argument do you build the round around?",
        options: [
          "The trivial one — it feels like the safer drop to go for",
          "Both equally, since both were dropped",
          "The independent voting issue — extend and weigh the drop that, conceded as true, is on its own sufficient to win the ballot",
          "Neither — by the final speech, drops no longer matter to the judge",
        ],
        correctIndex: 2,
        explanation: "Not all drops are equal. A dropped trivial point changes little; a dropped independent voting issue — conceded as true and sufficient on its own — can win the entire round. Concentrate your final speech on extending and weighing the decisive drop, not the trivial one. The strongest leverage is the conceded argument that, by itself, writes the ballot.",
      },
    ],
  },
};
