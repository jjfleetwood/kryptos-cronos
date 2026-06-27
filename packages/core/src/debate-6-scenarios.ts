import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the debate epoch "Rhetoric, Delivery &
// Persuasion." Each spot is a deterministic, skill-based decision drawn from
// well-established persuasion principles — identifying the three appeals,
// picking the most persuasive phrasing, choosing effective delivery, spotting a
// rhetorical device, or fixing a weak delivery habit. The marked answer is the
// genuinely best choice, not an arbitrary one. correctIndex and explanation are
// server-only and stripped before reaching the client.
export const debate6Scenarios: Record<string, ScenarioConfig> = {
  // ─── debate-6-01: Ethos, Pathos, Logos ──────────────────────────────────────
  "debate-6-01": {
    intro: "Aristotle split persuasion into three appeals — ethos (credibility), pathos (emotion), and logos (reason). Learn to name each one the instant you hear it, and to balance them.",
    spots: [
      {
        id: "deb6-01-s1", label: "Name the Appeal",
        situation: "An opponent opens: 'As a registered nurse who has worked ten years in the ER, I can tell you what this policy does to real patients.'",
        prompt: "Which appeal is the speaker leaning on most here?",
        options: [
          "Logos — they're presenting data",
          "Ethos — they're establishing credibility from their experience",
          "Pathos — they're stirring emotion",
          "No appeal — it's a neutral statement",
        ],
        correctIndex: 1,
        explanation: "Citing relevant first-hand experience to earn the audience's trust is ethos — the appeal through the speaker's credibility and character. No data (logos) or emotional image (pathos) has been offered yet; the work being done is to make the audience believe this speaker is worth listening to.",
      },
      {
        id: "deb6-01-s2", label: "Spot the Pathos",
        situation: "A debater says: 'Behind that 12% statistic is a child who goes to bed hungry tonight, in a house with the heat shut off.'",
        prompt: "What is the speaker doing rhetorically?",
        options: [
          "Using pathos to connect a statistic to felt human stakes",
          "Committing a logical fallacy by mentioning a child",
          "Building ethos through personal credentials",
          "Presenting new statistical evidence",
        ],
        correctIndex: 0,
        explanation: "This is pathos used well — it takes a real, warranted figure (the 12%) and makes its human stakes vivid and felt. Pathos becomes a fallacy only when it substitutes for an argument; here it amplifies one, which is legitimate and powerful.",
      },
      {
        id: "deb6-01-s3", label: "The Missing Appeal",
        situation: "A debater has airtight logic and clean evidence, but speaks in a flat monotone, never builds trust, and never connects the argument to why anyone should care. They lose a close round.",
        prompt: "What best explains the loss?",
        options: [
          "Logos alone always wins, so the judge erred",
          "They needed even more evidence",
          "Sound logos is often insufficient alone — without ethos and pathos, a correct case can fail to move the judge",
          "Emotion is irrelevant to persuasion",
        ],
        correctIndex: 2,
        explanation: "Aristotle's core insight: real persuasion blends all three appeals. Logos is necessary but frequently not enough on its own. A technically correct case with no credibility-building (ethos) and no connection to stakes (pathos) can lose to an opponent who weaves all three.",
      },
      {
        id: "deb6-01-s4", label: "Ethos Is Earned",
        situation: "A debater repeatedly tells the judge 'trust me, I'm very credible' — while fumbling their evidence, getting flustered in cross-examination, and refusing to concede an obvious point.",
        prompt: "Why is their ethos collapsing despite the claim?",
        options: [
          "Ethos comes only from age and titles",
          "Ethos is demonstrated through conduct, not asserted — mishandled evidence and lost composure destroy it regardless of the claim",
          "It isn't — saying 'trust me' is enough",
          "Ethos is irrelevant in debate",
        ],
        correctIndex: 1,
        explanation: "Ethos can't be claimed into existence; it's built (or lost) through how you actually conduct yourself — honest evidence handling, composure under pressure, and fair concession. Announcing your credibility while undermining it through your behavior destroys ethos.",
      },
    ],
  },

  // ─── debate-6-02: Vocal Delivery ────────────────────────────────────────────
  "debate-6-02": {
    intro: "Your voice is an instrument — rate, pitch, pause, emphasis, and volume tell the judge what matters before they process the words. Play it deliberately.",
    spots: [
      {
        id: "deb6-02-s1", label: "The Key Impact",
        situation: "You're about to deliver the single most important impact of your speech — the one line the whole round turns on.",
        prompt: "How should you handle your rate on this line?",
        options: [
          "Speed up to convey urgency",
          "Keep the exact same brisk rate as everything else",
          "Slow down and let it land, giving the judge time to absorb and write it",
          "Mumble it quickly to save time",
        ],
        correctIndex: 2,
        explanation: "Slowing down on a key point signals its importance and gives the judge time to write it down. Delivering your crucial impact at the same brisk rate as a minor transition wastes the cue — the contrast of slowing where it matters is what tells the judge to focus.",
      },
      {
        id: "deb6-02-s2", label: "Kill the Filler",
        situation: "A nervous debater fills every gap with 'um,' 'like,' and 'you know,' speaking in one continuous anxious stream.",
        prompt: "What single technique best fixes this?",
        options: [
          "Replace the filler with a deliberate pause",
          "Speak even faster to avoid leaving gaps",
          "Add more filler so it sounds natural",
          "Lower the volume throughout",
        ],
        correctIndex: 0,
        explanation: "The cure for filler is the deliberate pause. Silence is always better than 'um' — it projects control, lets key points land, and gives the judge time to process. Filler signals uncertainty; a controlled pause signals command.",
      },
      {
        id: "deb6-02-s3", label: "Place the Emphasis",
        situation: "You want the judge to understand this is the only argument that decides the round. You say the sentence: 'This is the one issue you vote on.'",
        prompt: "Where does the emphasis do the most work?",
        options: [
          "Stress every word equally for intensity",
          "Stress the operative words — 'the ONE issue you vote on' — to mark what to weigh",
          "Stress nothing; let the words speak for themselves",
          "Stress only the first word",
        ],
        correctIndex: 1,
        explanation: "Emphasis means stressing the operative words so the judge hears what to weight. Flat, even stress (or none) gives no cue. Leaning on 'one' and 'vote' tells the judge exactly where the decision lies — that's emphasis serving the argument.",
      },
      {
        id: "deb6-02-s4", label: "Monotone Trap",
        situation: "A debater delivers strong arguments in a completely flat monotone — no change in rate, pitch, volume, or emphasis. The judge's attention drifts.",
        prompt: "What's the problem?",
        options: [
          "Nothing — content is all that matters",
          "Monotone makes arguments sound more credible",
          "Monotone gives the judge no vocal cues about what's important, draining meaning from even strong arguments",
          "The judge simply isn't trying hard enough",
        ],
        correctIndex: 2,
        explanation: "The voice carries meaning beyond the words. A monotone strips out the cues — slowing, emphasis, pitch change — that tell the judge which points are crucial, so attention drifts and key points blur. Vocal variety guides attention and marks importance.",
      },
    ],
  },

  // ─── debate-6-03: Nonverbal Communication ───────────────────────────────────
  "debate-6-03": {
    intro: "The judge reads your body before they weigh your words. Eye contact, stance, gesture, and presence build (or undercut) the credibility your arguments rely on.",
    spots: [
      {
        id: "deb6-03-s1", label: "Eyes Up",
        situation: "A debater delivers the entire speech reading face-down from their notes, never looking up at the judge.",
        prompt: "Why does this undercut their persuasion?",
        options: [
          "It doesn't — reading from notes is the most accurate way",
          "It breaks eye contact, muffles the voice, and signals unpreparedness, weakening credibility",
          "The judge prefers not to be looked at",
          "Eye contact has no effect on how arguments land",
        ],
        correctIndex: 1,
        explanation: "Delivering face-down breaks eye contact, muffles the voice, and reads as 'reading' rather than commanding the material. Eye contact builds ethos, projects confidence, and lets you read whether the judge is following. What the judge sees should reinforce what they hear.",
      },
      {
        id: "deb6-03-s2", label: "Plant Your Feet",
        situation: "Throughout the speech a debater rocks back and forth, shifts their weight constantly, and paces — visibly restless.",
        prompt: "What's the fix?",
        options: [
          "Pace even more to project energy",
          "It's fine — movement always energizes a speech",
          "Plant the feet shoulder-width, balance the weight, and hold a stable, grounded stance",
          "Sit down to stop the movement",
        ],
        correctIndex: 2,
        explanation: "Constant rocking and pacing distract the judge and project anxiety, undermining command. A stable, grounded stance — feet planted, weight balanced — reads as command and also steadies the voice and breathing. Purposeful movement is fine; restless motion is not.",
      },
      {
        id: "deb6-03-s3", label: "Busy Hands",
        situation: "A debater's hands constantly fidget — twisting a pen, tugging a sleeve, shuffling notes — for the whole speech.",
        prompt: "What's the better use of the hands?",
        options: [
          "Give them a purpose — gestures that emphasize and illustrate, or a neutral resting position",
          "Keep fidgeting; it looks natural and relatable",
          "Hide them in pockets the entire time",
          "Wave them as much as possible to seem energetic",
        ],
        correctIndex: 0,
        explanation: "Fidgeting signals nervousness and distracts from the words. Giving the hands a job — purposeful gestures that reinforce key points, with a neutral rest position otherwise — supports persuasion. The goal isn't constant waving (also distracting) but controlled, meaningful movement.",
      },
      {
        id: "deb6-03-s4", label: "Same Words, Two Verdicts",
        situation: "A coach notes that in the 1960 Kennedy-Nixon debate, radio listeners and TV viewers reached opposite verdicts on the same words.",
        prompt: "What's the lesson for a debater?",
        options: [
          "Nonverbal presence is irrelevant — only words matter",
          "Debaters need a specific 'TV-ready' face to win",
          "Radio is the only fair medium for judging",
          "Nonverbal presence shapes how an audience receives identical arguments, so composed presence reinforces your case while anxious presence undercuts it",
        ],
        correctIndex: 3,
        explanation: "Radio listeners (words only) and TV viewers (words plus presence) split because nonverbal presence colors how identical arguments are received. The judge perceives your presence along with your words; composed, grounded presence builds the ethos that makes them trust your case.",
      },
    ],
  },

  // ─── debate-6-04: Spreading vs. Persuasion ──────────────────────────────────
  "debate-6-04": {
    intro: "How fast should you talk? It depends entirely on who's judging. The real skill isn't fast or slow — it's reading the judge and adapting your delivery to them.",
    spots: [
      {
        id: "deb6-04-s1", label: "Wrong Room for Speed",
        situation: "In a Public Forum round judged by a parent volunteer, a debater spreads at 300 words per minute to fit twelve arguments. The judge stops taking notes, visibly lost.",
        prompt: "Why is this a losing strategy here?",
        options: [
          "It's winning — twelve arguments beats fewer every time",
          "A lay judge can't follow spreading and credits only what they understand, so the extra arguments are wasted",
          "The judge should learn to flow faster",
          "Speed always wins regardless of judge",
        ],
        correctIndex: 1,
        explanation: "A lay judge can't process spreading and credits only what they understand. Every argument past their comprehension limit is wasted, so spreading to a lay judge is a near-guaranteed loss. The fix is to slow down, run fewer and clearer arguments, and prioritize persuasion.",
      },
      {
        id: "deb6-04-s2", label: "Read the Paradigm",
        situation: "Before a circuit round, you read the judge's paradigm: a former college policy debater who 'can handle any speed and rewards technical coverage.'",
        prompt: "How should you calibrate delivery?",
        options: [
          "Speak as slowly as possible regardless of the paradigm",
          "Ignore the paradigm — speed is a matter of personal style",
          "Speak faster and run more arguments while staying clear, since this flow judge can follow density and rewards it",
          "Spread to the point of unintelligibility to maximize coverage",
        ],
        correctIndex: 2,
        explanation: "The paradigm tells you the judge's comprehension limit is high, so you can speak faster and run more arguments — while staying clear, since even fast delivery must remain intelligible. Calibrating up to (but not past) a judge's limit is the skill; against a lay judge you'd slow down.",
      },
      {
        id: "deb6-04-s3", label: "Clarity Is Non-Negotiable",
        situation: "A debater spreads so fast the words blur into noise — even the experienced flow judge can't actually flow several arguments.",
        prompt: "What principle did the debater violate, even with a flow judge?",
        options: [
          "None — faster is always better with flow judges",
          "Clarity is non-negotiable — unintelligible spreading is just noise the judge can't credit, losing those arguments regardless of judge",
          "Flow judges credit arguments they couldn't hear",
          "The judge should record and replay the speech",
        ],
        correctIndex: 1,
        explanation: "Clarity is the one rule that never bends. Even a flow judge credits only what they can actually process, so spreading into a blur loses the arguments that weren't intelligible. Speed is a variable calibrated to the judge's limit; clarity is non-negotiable in every format.",
      },
      {
        id: "deb6-04-s4", label: "The Meta-Skill",
        situation: "A coach says the decades-long 'speed wars' taught debate a deeper lesson than whether fast or slow is 'correct.'",
        prompt: "What is that lesson?",
        options: [
          "Fast delivery is always correct",
          "Slow delivery is always correct",
          "Delivery speed never matters",
          "The real skill is audience adaptation — calibrating delivery to the specific judge, because there's no universally correct speed",
        ],
        correctIndex: 3,
        explanation: "There's no universally correct speed — fast suits an experienced flow judge, measured suits a lay judge. The meta-skill is audience adaptation: read the judge and meet them where they are. It generalizes beyond debate, and the one rule that never bends is that the audience can only credit what they can receive.",
      },
    ],
  },

  // ─── debate-6-05: Word Economy and Concision ────────────────────────────────
  "debate-6-05": {
    intro: "In a timed speech, every wasted word costs you an argument. Concision isn't about speaking fast — it's about cutting the filler so each second carries content.",
    spots: [
      {
        id: "deb6-05-s1", label: "Trim the Fat",
        situation: "A debater opens with: 'In my own personal opinion, I would basically say that, at the end of the day, this plan is, more or less, a really good idea.'",
        prompt: "Which version says the same thing with far better economy?",
        options: [
          "'I personally myself believe this plan is, in my view, a good idea.'",
          "'This plan works — and here's why.'",
          "'At this point in time, it is what it is regarding the plan.'",
          "'Basically the plan is good, more or less, I think.'",
        ],
        correctIndex: 1,
        explanation: "'This plan works — and here's why' cuts every empty filler ('in my own personal opinion,' 'basically,' 'at the end of the day,' 'more or less') and gets straight to a claim plus a promise of warrant. The other options just reshuffle padding without removing it.",
      },
      {
        id: "deb6-05-s2", label: "Concision vs. Speed",
        situation: "Two debaters both want to fit more into a timed speech. One decides to talk faster; the other decides to cut wasted words.",
        prompt: "Which better captures word economy?",
        options: [
          "Cutting wasted words so each second carries content",
          "Talking faster so more words fit in the time",
          "Repeating each point twice for emphasis",
          "Adding qualifiers to sound more careful",
        ],
        correctIndex: 0,
        explanation: "Word economy is about eliminating waste, not raising your words-per-minute. Speaking faster (spreading) is a separate, judge-dependent choice. Concision means expressing an idea in the fewest words that fully convey it, so each second carries substance rather than filler.",
      },
      {
        id: "deb6-05-s3", label: "Omit Needless Words",
        situation: "A debater writes a tag for an argument: 'Due to the fact that the economy is currently in a state of decline at the present time…'",
        prompt: "What's the concise revision?",
        options: [
          "'Owing to the fact of the economy's current ongoing decline at present…'",
          "'Because of the economic decline currently happening right now today…'",
          "'Because the economy is declining…'",
          "'In light of the fact that the economy declines…'",
        ],
        correctIndex: 2,
        explanation: "'Because the economy is declining' carries the full meaning in four words. 'Due to the fact that' is always replaceable by 'because,' and 'currently… at the present time' is redundant. Strunk & White's creed — omit needless words — is the editor's discipline a timed debater needs.",
      },
      {
        id: "deb6-05-s4", label: "What Concision Buys",
        situation: "A debater tightens their case and frees up forty-five seconds in their speech.",
        prompt: "What's the competitive payoff of that saved time?",
        options: [
          "Nothing — concision is purely about sounding elegant",
          "It can be spent making or developing arguments, weighing, or answering the opponent",
          "It should be filled with restating the same point",
          "It forces the debater to end early and lose tempo",
        ],
        correctIndex: 1,
        explanation: "In a strictly timed format, time is the scarce resource. Concision converts wasted seconds into substance — more responses, deeper warrants, clearer weighing. That's why economy is a competitive necessity, not just a matter of style: every cut word can become an argument.",
      },
    ],
  },

  // ─── debate-6-06: Narrative and Framing ─────────────────────────────────────
  "debate-6-06": {
    intro: "Whoever frames the round controls how the judge understands every argument in it. Story and framing turn a pile of points into a coherent, persuasive whole.",
    spots: [
      {
        id: "deb6-06-s1", label: "Set the Frame",
        situation: "You're affirming a policy. You can open by telling the judge: (a) 'This round comes down to one question: does this save lives?' or (b) launching straight into your first sub-point with no framing.",
        prompt: "Why is opening with the framing question stronger?",
        options: [
          "It wastes time the judge would rather spend on evidence",
          "It sets the lens through which the judge evaluates everything that follows, favoring your case",
          "Framing is dishonest and should be avoided",
          "It only matters in the final speech, never the first",
        ],
        correctIndex: 1,
        explanation: "Framing tells the judge what the round is 'about' and what standard decides it. If the judge adopts 'does this save lives?' as the question, every argument is weighed on your strongest ground. The side that sets the frame shapes how all the evidence is understood.",
      },
      {
        id: "deb6-06-s2", label: "Reframe the Clash",
        situation: "Your opponent frames the round as 'individual freedom versus government control,' which favors them. You have a strong public-safety case.",
        prompt: "What's the best response?",
        options: [
          "Accept their frame and argue freedom matters less",
          "Ignore the framing entirely and just read more cards",
          "Offer a competing frame — 'this is about protecting people from preventable harm' — and explain why it's the better lens",
          "Concede the round since their frame is set",
        ],
        correctIndex: 2,
        explanation: "You don't have to debate on the opponent's terms. Offering a competing frame — and giving the judge a reason to prefer it — shifts the lens to ground where your evidence wins. Whoever's frame the judge adopts controls how the clash is understood; contest it rather than accept it.",
      },
      {
        id: "deb6-06-s3", label: "The Concrete Story",
        situation: "You can present an impact as either: (a) 'aggregate welfare losses of 3.2% across the affected population,' or (b) 'a family like the Okafors, who lose their home when this passes — multiplied across a city.'",
        prompt: "For a lay judge, which lands harder and why?",
        options: [
          "(a), because precise percentages are always more persuasive",
          "(b), because a concrete human story makes an abstract impact vivid and memorable",
          "Neither — impacts shouldn't be illustrated",
          "(a), because stories are a logical fallacy",
        ],
        correctIndex: 1,
        explanation: "Narrative is the oldest technology for carrying meaning. A concrete story makes an abstract statistic vivid, memorable, and emotionally weighable — especially for a lay judge. The number gives the scale; the story makes the judge feel why the scale matters. Pair them, don't choose only the number.",
      },
      {
        id: "deb6-06-s4", label: "Story With Substance",
        situation: "A debater tells a moving, vivid story about a struggling family — but never connects it to any evidence or argument about what the policy actually does.",
        prompt: "What's the flaw?",
        options: [
          "There's no flaw — a powerful story is enough to win",
          "The story should have been even longer and more emotional",
          "Narrative must be anchored to a real, warranted argument; a story untethered from evidence is just an emotional appeal",
          "Stories should never appear in debate",
        ],
        correctIndex: 2,
        explanation: "Framing and narrative are force multipliers for a real case, not substitutes for one. An untethered emotional story is the emotional-appeal fallacy. The story has to illustrate a warranted impact — connect it to evidence about what the policy does — to be legitimate persuasion rather than manipulation.",
      },
    ],
  },

  // ─── debate-6-07: Rhetorical Devices ────────────────────────────────────────
  "debate-6-07": {
    intro: "Anaphora, antithesis, tricolon, the rhetorical question — the classical devices make language memorable and quotable. Learn to recognize them and deploy them with restraint.",
    spots: [
      {
        id: "deb6-07-s1", label: "Name the Device",
        situation: "A debater closes: 'We cannot afford this. We cannot survive this. We cannot allow this.'",
        prompt: "Which rhetorical device is this?",
        options: [
          "Antithesis — contrasting opposites",
          "Anaphora — repeating the same opening words across clauses for rhythm and force",
          "Hyperbole — deliberate exaggeration",
          "Rhetorical question — a question asked for effect",
        ],
        correctIndex: 1,
        explanation: "Repeating the same opening phrase ('We cannot…') across successive clauses is anaphora. It builds rhythm and cumulative emphasis, making the line memorable — the device behind 'I have a dream…' and 'We shall fight on the beaches…'.",
      },
      {
        id: "deb6-07-s2", label: "Spot the Antithesis",
        situation: "A debater says: 'My opponent offers fear; we offer a plan. They promise control; we promise freedom.'",
        prompt: "What device structures this line?",
        options: [
          "Antithesis — sharply contrasting opposing ideas in parallel form",
          "Anaphora — repeating opening words",
          "Alliteration — repeating initial consonant sounds",
          "Understatement — deliberately downplaying",
        ],
        correctIndex: 0,
        explanation: "Antithesis sets opposing ideas against each other in parallel grammatical structure ('They promise control; we promise freedom'). The balanced contrast sharpens the choice for the judge and makes the line quotable — a classic persuasive device.",
      },
      {
        id: "deb6-07-s3", label: "The Power of Three",
        situation: "A speaker wants a crisp, rhythmic summary line and considers four phrasings.",
        prompt: "Which uses the tricolon — the rhetorically powerful 'rule of three'?",
        options: [
          "'This policy is unfair.'",
          "'This policy is unfair and also fairly expensive.'",
          "'This policy is unfair, unaffordable, and unworkable.'",
          "'This policy, which a number of analysts have suggested may be somewhat unfair, is bad.'",
        ],
        correctIndex: 2,
        explanation: "A tricolon is a series of three parallel elements — 'unfair, unaffordable, and unworkable.' Three has a natural rhythmic completeness that one or two lack and four dilutes; the parallel structure (and here, alliteration) makes it land and stick.",
      },
      {
        id: "deb6-07-s4", label: "Use With Restraint",
        situation: "A debater packs every sentence with anaphora, antithesis, rhetorical questions, and grand metaphors, until the speech feels like overwrought theater and the actual arguments get lost.",
        prompt: "What principle did they violate?",
        options: [
          "None — more rhetorical devices is always more persuasive",
          "Devices should serve the argument and be used with restraint; overuse becomes empty ornament that buries substance",
          "Rhetorical devices should never be used in debate",
          "They simply needed even more devices to tie it together",
        ],
        correctIndex: 1,
        explanation: "Rhetorical devices amplify a point when used sparingly at high-value moments; wall-to-wall, they become hollow ornament that distracts from the reasoning. The skill is restraint — deploy a device to make a key line land, not to decorate every sentence.",
      },
    ],
  },

  // ─── debate-6-08: Audience Adaptation ───────────────────────────────────────
  "debate-6-08": {
    intro: "The same case must be delivered differently to different judges. Read who is deciding, then tailor your speed, evidence, framing, and emphasis to them.",
    spots: [
      {
        id: "deb6-08-s1", label: "Lay vs. Flow",
        situation: "You have two rounds back to back: one before a parent volunteer, one before an experienced ex-debater who flows every word.",
        prompt: "How should the same case differ between them?",
        options: [
          "Deliver it identically — adapting is a form of pandering",
          "For the lay judge: slower, fewer/clearer arguments, more persuasion and real-world framing; for the flow judge: faster, denser, more technical line-by-line",
          "Spread to both; coverage always wins",
          "Read only emotional appeals to both",
        ],
        correctIndex: 1,
        explanation: "Audience adaptation means tailoring delivery and content to who decides. A lay judge rewards clear, persuasive, real-world argument at a measured pace; an experienced flow judge can handle speed, density, and technical line-by-line. Same case, calibrated delivery.",
      },
      {
        id: "deb6-08-s2", label: "Jargon Check",
        situation: "Before a lay judge, a debater says: 'Extend the delink on the disad — they conceded no uniqueness, so turns the case on the flow.'",
        prompt: "What's wrong with this for this audience?",
        options: [
          "Nothing — technical jargon shows expertise",
          "It's too slow for a lay judge",
          "Insider debate jargon means nothing to a lay judge; it must be translated into plain, persuasive language",
          "The debater should add even more technical terms",
        ],
        correctIndex: 2,
        explanation: "Jargon like 'delink,' 'disad,' 'uniqueness,' and 'turns the case' is opaque to a lay judge, who can only credit what they understand. Adapting means translating the same logic into plain language: 'their main argument doesn't actually follow from this plan, and here's why it backfires.'",
      },
      {
        id: "deb6-08-s3", label: "Know Before You Speak",
        situation: "A skilled debater is about to start and wants to adapt well.",
        prompt: "What should they do first?",
        options: [
          "Decide their delivery in advance and never change it",
          "Assess the judge — paradigm, experience, and what they value — before calibrating delivery",
          "Assume every judge is an expert flow judge",
          "Ask the judge to adapt to the debater instead",
        ],
        correctIndex: 1,
        explanation: "Adaptation starts with assessment: read the judge's paradigm, experience, and values before you speak, then calibrate. A debater who assumes one judge type — or refuses to read the room — will lose rounds they could win. Knowing your audience comes before tailoring to them.",
      },
      {
        id: "deb6-08-s4", label: "One Message, Many Rooms",
        situation: "A coach compares the debater's task to a diplomat who must deliver the same core message to a hostile press, a friendly ally, and a neutral committee.",
        prompt: "What's the transferable lesson?",
        options: [
          "There's one perfect delivery that works on every audience",
          "Effective communicators hold the core message constant while adapting the framing, tone, and emphasis to each audience",
          "You should change your actual position for each audience",
          "Adaptation only matters in diplomacy, not debate",
        ],
        correctIndex: 1,
        explanation: "The diplomat keeps the substance fixed but adapts framing, tone, and emphasis to each room — exactly the debater's skill. Adaptation isn't changing your position (that's flip-flopping); it's delivering the same case so each specific audience can best receive it.",
      },
    ],
  },

  // ─── debate-6-09: Managing Nerves and Composure ─────────────────────────────
  "debate-6-09": {
    intro: "Nerves are physiology, and physiology can be managed. Preparation, breathing, and reframing let you perform the skill you've practiced when the pressure is highest.",
    spots: [
      {
        id: "deb6-09-s1", label: "Reframe the Arousal",
        situation: "Before a big round, a debater's heart is pounding. They can tell themselves either 'I'm so anxious, I'm going to choke' or 'I'm excited and fired up for this.'",
        prompt: "What does the research on reappraisal suggest?",
        options: [
          "Reframing high arousal as excitement (rather than anxiety) improves performance — the body's state is the same, the label changes",
          "You should suppress the feeling entirely and feel nothing",
          "Telling yourself to 'calm down' is reliably the most effective",
          "The physical arousal guarantees a poor performance",
        ],
        correctIndex: 0,
        explanation: "Anxiety and excitement share nearly the same physiology — racing heart, adrenaline. Studies on reappraisal (Brooks, 2013) show relabeling the arousal as excitement beats trying to force calm, because it works with the body's state instead of fighting it. The label you choose shapes the performance.",
      },
      {
        id: "deb6-09-s2", label: "Steady the Breath",
        situation: "A debater feels their nerves spiking and their voice tightening seconds before they speak.",
        prompt: "What's an effective in-the-moment physiological technique?",
        options: [
          "Hold your breath until the feeling passes",
          "Take slow, deep, controlled breaths to lower arousal and steady the voice",
          "Breathe as fast as possible to get more oxygen",
          "Ignore your body entirely and just start talking quickly",
        ],
        correctIndex: 1,
        explanation: "Slow, deep, controlled breathing directly lowers physiological arousal, steadies the voice, and restores composure — it's the simplest reliable tool for managing nerves in the moment. Rapid breathing worsens the spike; breath control brings the body back under command.",
      },
      {
        id: "deb6-09-s3", label: "The Real Antidote",
        situation: "A debater wants to feel confident under pressure and is looking for the most durable source of composure.",
        prompt: "What most reliably reduces performance nerves over time?",
        options: [
          "Hoping the nerves simply won't show up on the day",
          "Avoiding tournaments until the anxiety disappears",
          "Thorough preparation and repeated practice, so the skill is automatic under pressure",
          "Relying on a single deep breath with no other preparation",
        ],
        correctIndex: 2,
        explanation: "Composure is built mostly before the round. Thorough preparation and repetition make the skill automatic, so pressure has less to disrupt — like an athlete's practiced free throw. Breathing and reframing manage the moment, but deep preparation is the durable foundation of confidence.",
      },
      {
        id: "deb6-09-s4", label: "Perform the Practiced Skill",
        situation: "A coach compares the high-pressure final round to a basketball player at the free-throw line in the last seconds of a game.",
        prompt: "What's the lesson about performing under pressure?",
        options: [
          "Under pressure you should attempt something new and dramatic",
          "Pressure means the practiced skill no longer applies",
          "Trust the thousands of practice reps and execute the skill you've trained, rather than overthinking it in the moment",
          "The best players never feel any pressure at all",
        ],
        correctIndex: 2,
        explanation: "The free throw is the same shot whether in practice or the championship; the skill is to trust the training and execute, not to reinvent under pressure. Even elite performers feel nerves — they succeed by letting the practiced skill run rather than overthinking it in the moment.",
      },
    ],
  },

  // ─── debate-6-10: Finding Your Authentic Voice ──────────────────────────────
  "debate-6-10": {
    intro: "All the techniques converge into a style that's genuinely yours. The final mastery is integrating the skills into authentic, persuasive delivery — not imitating someone else.",
    spots: [
      {
        id: "deb6-10-s1", label: "Borrowed or Authentic",
        situation: "A naturally calm, analytical debater forces themselves to imitate a famous fiery, theatrical champion — and comes across as fake and uncomfortable.",
        prompt: "What's the better path?",
        options: [
          "Keep imitating until the borrowed style feels natural",
          "Build a persuasive style on their authentic strengths — calm, precise, analytical — rather than imitating an incompatible one",
          "Abandon delivery entirely and rely on evidence alone",
          "Switch to a brand-new style in every round",
        ],
        correctIndex: 1,
        explanation: "There's no single template for great speaking — calm and precise persuades as powerfully as fiery and theatrical. Forcing an incompatible style reads as inauthentic and undermines ethos. The mastery is integrating the skills around your genuine strengths into a voice that's credibly yours.",
      },
      {
        id: "deb6-10-s2", label: "Why Authenticity Persuades",
        situation: "Two debaters deliver the same content: one in a style that's natural and genuinely theirs, the other in an obviously put-on persona.",
        prompt: "Why does the authentic delivery tend to persuade more?",
        options: [
          "Authenticity is irrelevant; only the words matter",
          "The put-on persona is always more entertaining and therefore wins",
          "Authenticity reads as credible and trustworthy (ethos), while an obvious performance creates distrust",
          "Judges can't tell the difference, so it doesn't matter",
        ],
        correctIndex: 2,
        explanation: "An authentic voice reads as credible and builds ethos; a transparent performance creates a sense that the speaker is hiding something, eroding trust. Persuasion runs on credibility, so the genuine style — even an imperfect one — usually outperforms a polished but phony one.",
      },
      {
        id: "deb6-10-s3", label: "Integration, Not Addition",
        situation: "A debater has separately learned vocal variety, presence, concision, framing, devices, adaptation, and composure.",
        prompt: "What does 'finding your voice' require beyond knowing each skill?",
        options: [
          "Performing every technique at maximum intensity at once",
          "Integrating the skills so they work together naturally in service of the argument, rather than as a checklist of tricks",
          "Picking one skill and ignoring the rest",
          "Using each technique only in isolation, never combined",
        ],
        correctIndex: 1,
        explanation: "Authentic voice is integration, not accumulation. The techniques have to fuse into a natural, coherent style that serves the argument — not a self-conscious checklist run all at once. When the skills become second nature and work together, the delivery reads as genuinely, persuasively yours.",
      },
      {
        id: "deb6-10-s4", label: "Many Masters, Many Voices",
        situation: "A coach points out that the greatest orators in history — from a thunderous preacher to a quiet, precise statesman — sound nothing alike.",
        prompt: "What does this prove about persuasive style?",
        options: [
          "Only the loud, dramatic style ever truly persuades",
          "Great speakers must all sound the same to be effective",
          "There is no single correct style — persuasive power comes from authentically integrating the skills, in whatever voice is genuinely yours",
          "Style is irrelevant since the words do all the work",
        ],
        correctIndex: 2,
        explanation: "History's great orators span thunderous and understated, fiery and analytical — proof there's no one template for greatness. The lesson is to stop chasing someone else's voice and develop your own: integrate the skills authentically, and your genuine style becomes your most persuasive instrument.",
      },
    ],
  },
};
