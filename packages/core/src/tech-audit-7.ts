import type { StageConfig, EpochConfig } from "./types";

export const techAudit7Epoch: EpochConfig = {
  id: "tech-audit-7",
  name: "Root Cause Analysis",
  subtitle: "Find the Real Cause — Audit, Forensics & Incident RCA",
  description:
    "Stop fixing symptoms. Master root cause analysis for auditors, DFIR/forensics, and security & reliability incidents — the RCA process, 5 Whys, Fishbone, Fault Tree, forensic timeline reconstruction, human & organizational factors (the Swiss Cheese model), cyber-incident causal analysis, corrective & preventive action, and the blameless postmortem.",
  emoji: "🔬",
  color: "teal",
  unlocked: true,
};

export const techAudit7Stages: StageConfig[] = [
  // ─── rca-01: What Is Root Cause Analysis? ────────────────────────────────────
  {
    epochId: "tech-audit-7",
    wonder: { name: "Rogers Commission", location: "Washington, D.C.", era: "Present Day", emoji: "🔎" },
    id: "rca-01",
    order: 1,
    title: "Symptom vs. Cause",
    subtitle: "Why fixing what you can see guarantees the problem comes back",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "rca-badge-01", name: "Cause Seeker", emoji: "🔎" },
    challengeType: "quiz",
    info: {
      tagline: "A symptom tells you something is wrong. A root cause tells you why — and treating the symptom guarantees it happens again.",
      year: 1986,
      overview: [
        "Root cause analysis (RCA) is the disciplined search for the deepest controllable reason a problem occurred — the cause that, if corrected, stops the problem from recurring. It is the difference between mopping the floor and turning off the tap. Every field that investigates failure uses it: auditors asking why a control failed, forensic/DFIR analysts asking how a breach was possible, and reliability engineers asking why a system fell over.",
        "The core distinction is between three layers of cause:\n- Symptom — what you observed (the alert fired, the server crashed, the records leaked).\n- Proximate (immediate) cause — the direct trigger (an unpatched library was exploited).\n- Root cause — the underlying, systemic reason the proximate cause was possible (there was no process that ensured critical patches were applied within SLA).\nFix the symptom and it returns; fix the proximate cause and a similar one returns; fix the root cause and the whole class of problem stops.",
        "RCA is evidence-based, not a guessing game. You do not decide the cause and then look for support — you gather facts, build a timeline, and let the evidence narrow the possibilities. A conclusion you can't trace to evidence is a hypothesis, and shipping a 'fix' for a guessed cause wastes effort while the real cause keeps firing.",
        "The three audiences ask the same question from different angles:\n- Auditor: a control failed — why did it fail, and is the failure isolated or systemic across the control environment?\n- Forensics / DFIR: an attacker succeeded — what was the chain, and what underlying weakness made each step possible?\n- Security / reliability: a system failed — what combination of conditions produced the outcome, and how do we prevent recurrence?\nAll three are RCA; the techniques in this epoch serve all of them.",
        "The recurring trap is stopping too early — at the symptom, at 'human error,' or at the first plausible cause. The most expensive failures in history were not caused by the proximate trigger everyone saw, but by the systemic conditions no one fixed because the investigation stopped once someone found something to blame.",
      ],
      technical: {
        title: "Testing Whether You've Found a Root Cause",
        body: [
          "A candidate is a root cause if it passes three tests:\n- Causation — if it had not existed, the problem would not have occurred (remove it and the chain breaks).\n- Control — it is something the organization can actually fix or influence (not 'the laws of physics' or 'a determined nation-state exists').\n- Evidence — the investigation's facts actually support it, not just a plausible story.\nA 'cause' that fails any of these is either a contributing factor or a guess.",
          "Most real incidents have multiple root causes, not one. The single-root-cause fallacy — insisting on one tidy answer — hides contributing factors that will cause the next incident. Good RCA produces a small set of causal factors, each with its own corrective action.",
          "'Human error' is where analysis should begin, never end. A person clicking a phishing link, fat-fingering a config, or skipping a step is a proximate cause; the root cause is the system that made the error easy, likely, or undetectable (no MFA, no change review, no guardrail). Stopping at 'the operator made a mistake' fixes nothing and blinds you to the design that set them up to fail.",
          "Distinguish a root cause from a contributing factor: removing the root cause breaks the chain; removing a contributing factor only makes the chain less likely. Both deserve corrective action, but the root cause is where prevention has the most leverage.",
        ],
        codeExample: {
          label: "Symptom → proximate → root (a breach, walked down)",
          code: `SYMPTOM:    150M customer records exfiltrated (the headline)
PROXIMATE:  attacker exploited an unpatched Apache Struts CVE
WHY unpatched?  the scanner didn't flag that host
WHY not flagged? the host was missing from the asset inventory
WHY missing?   no process ties new systems to the scan scope
ROOT CAUSE: no asset-management process guaranteeing every system
            is inventoried and in vulnerability-scan scope
# patching the one CVE fixes the symptom; the root cause is the
# missing process that will leave the NEXT system exposed too`,
        },
      },
      flowchart: `flowchart LR
  S["Symptom (what you saw)"] --> Q{"Ask: why?"}
  Q --> P["Proximate cause (the trigger)"]
  P --> Q2{"Why was that possible?"}
  Q2 --> R["Root cause (systemic)"]
  R --> FIX["Fix the cause -> class of problem stops"]
  S -.->|treat symptom only| LOOP["Recurs"]`,
      examples: [
        {
          label: "Symptom vs. root cause — same incident, different fix",
          code: `incident: nightly batch job failed
  symptom fix:  re-ran the job manually           -> fails again tomorrow
  proximate:    disk full on the batch host
  proximate fix: deleted old logs                 -> fills up again next week
  ROOT cause:   no log rotation + no disk-usage alerting
  root fix:     add rotation + alert at 80%       -> class of failure ends`,
        },
      ],
      incident: {
        title: "Space Shuttle Challenger — the O-ring Was the Symptom (1986)",
        when: "January 28, 1986",
        where: "Kennedy Space Center, Florida",
        impact: "Loss of seven crew; the Rogers Commission redefined how organizations investigate failure",
        body: [
          "Challenger broke apart 73 seconds after launch. The proximate cause was clear and quickly found: an O-ring seal in a solid rocket booster failed in unusually cold weather, letting hot gas escape. Physicist Richard Feynman famously demonstrated it by dropping an O-ring sample in ice water. But the O-ring was the symptom of a deeper failure.",
          "The Rogers Commission's root-cause finding was organizational, not mechanical: NASA had repeatedly observed O-ring erosion on prior flights and, because nothing had yet gone catastrophically wrong, had come to treat the danger as acceptable — a pattern sociologist Diane Vaughan later named the 'normalization of deviance.' Engineers who warned against the cold-weather launch were overruled under schedule pressure, and the decision process filtered out the dissent. The cold O-ring was how the accident happened; the broken safety culture was why.",
          "This is the canonical RCA lesson, and it transfers exactly to audit and security. A breach's exploited CVE is the cold O-ring — the visible trigger. The root cause is usually the organizational condition that let the dangerous state persist: the risk accepted by default, the warning that didn't reach a decision-maker, the control everyone assumed someone else owned. Fixing the O-ring (patching the CVE) without fixing the culture (the process that let it stay unpatched) leaves the real cause intact.",
          "Seventeen years later NASA lost Columbia to falling foam — a different proximate cause, the same organizational root cause the Commission had named. The recurrence is the entire point: when RCA stops at the symptom, the system reproduces the failure with a new trigger. The auditor's and investigator's job is to push past the satisfying, blamable proximate cause to the systemic condition that will otherwise cause the next one.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Observed Problem", sub: "the symptom", type: "attacker" },
          { label: "Proximate Cause", sub: "the trigger", type: "system" },
          { label: "Root Cause", sub: "systemic condition", type: "victim" },
          { label: "Corrective Action", sub: "stops recurrence", type: "result" },
        ],
      },
      timeline: [
        { year: 1986, event: "Challenger; Rogers Commission separates proximate (O-ring) from root (safety culture)" },
        { year: 1996, event: "Diane Vaughan names the 'normalization of deviance'" },
        { year: 2003, event: "Columbia — same organizational root cause, new proximate trigger (foam)", highlight: true },
        { year: 2010, event: "RCA standardized across safety, quality, IT audit, and DFIR" },
      ],
      keyTakeaways: [
        "RCA finds the deepest controllable cause that, if fixed, stops the problem recurring — fixing symptoms guarantees recurrence",
        "Three layers: symptom (what you saw) → proximate cause (the trigger) → root cause (the systemic condition that allowed it)",
        "A root cause must pass three tests: causation (remove it, chain breaks), control (you can fix it), and evidence (facts support it)",
        "Most incidents have multiple root causes — the single-root-cause fallacy hides the factors that cause the next one",
        "'Human error' is where analysis begins, not ends — the root cause is the system that made the error easy and undetectable",
        "RCA is evidence-based: gather facts and build a timeline first; a cause you can't trace to evidence is a guess",
        "Challenger: the cold O-ring was the symptom; the normalized safety risk was the root cause — and it recurred as Columbia",
      ],
      references: [
        { title: "Report of the Presidential Commission on the Space Shuttle Challenger Accident (Rogers Commission)", url: "https://history.nasa.gov/rogersrep/genindex.htm" },
        { title: "CISA — Root Cause Analysis guidance", url: "https://www.cisa.gov/" },
      ],
    },
    quiz: {
      questions: [
        { id: "rca-01-q1", type: "Core Idea", challenge: "Define it.", text: "What is root cause analysis?", options: ["The disciplined search for the deepest controllable cause that, if fixed, stops the problem recurring", "Restoring service as fast as possible", "Assigning blame for an incident", "Documenting what the user did wrong"], correctIndex: 0, explanation: "RCA targets the systemic cause so the whole class of problem stops, not just the visible instance." },
        { id: "rca-01-q2", type: "Layers", challenge: "Three levels.", text: "How do symptom, proximate cause, and root cause differ?", options: ["Symptom = what you observed; proximate = the direct trigger; root = the systemic condition that made the trigger possible", "They are three names for the same thing", "Root cause is always a person", "Proximate cause is the least important"], correctIndex: 0, explanation: "Fixing the symptom or proximate cause leaves the systemic root in place to recur." },
        { id: "rca-01-q3", type: "Test", challenge: "Is it a root cause?", text: "Which three tests confirm a candidate is a root cause?", options: ["Causation (remove it, the chain breaks), control (you can fix it), and evidence (facts support it)", "Speed, cost, and convenience", "It blames someone, it's simple, it's one cause", "It's technical, recent, and expensive"], correctIndex: 0, explanation: "A candidate failing any of these is a contributing factor or a guess, not a root cause." },
        { id: "rca-01-q4", type: "Human Error", challenge: "Begin, not end.", text: "Why is 'human error' not an acceptable root cause?", options: ["It's a proximate cause; the root is the system that made the error easy, likely, or undetectable", "Humans never make errors", "It's always the correct root cause", "It speeds up the investigation"], correctIndex: 0, explanation: "Stopping at human error fixes nothing and hides the design that set the person up to fail." },
        { id: "rca-01-q5", type: "Fallacy", challenge: "How many causes?", text: "What is the single-root-cause fallacy?", options: ["Insisting on one tidy cause, which hides the contributing factors that will cause the next incident", "Believing there are always exactly five causes", "Thinking causes don't exist", "Assuming every cause is human"], correctIndex: 0, explanation: "Most real incidents have multiple causal factors, each needing its own corrective action." },
        { id: "rca-01-q6", type: "Discipline", challenge: "Evidence first.", text: "What makes RCA evidence-based rather than guesswork?", options: ["You gather facts and build a timeline first, letting evidence narrow the cause — not decide the cause then seek support", "You pick the most likely cause and ship a fix", "You ask the most senior person", "You blame the last person who touched it"], correctIndex: 0, explanation: "A conclusion you can't trace to evidence is a hypothesis; fixing a guessed cause wastes effort." },
        { id: "rca-01-q7", type: "Real Case", challenge: "Challenger.", text: "In the Challenger disaster, what was the root cause vs. the proximate cause?", options: ["Proximate = a cold O-ring seal failed; root = the organization's normalized acceptance of known O-ring risk under schedule pressure", "Both were the O-ring", "Root cause was the weather", "There was no root cause"], correctIndex: 0, explanation: "The cold O-ring was how it happened; the broken safety culture was why — and it recurred as Columbia." },
        { id: "rca-01-q8", type: "Audiences", challenge: "Same question.", text: "How does RCA apply across audit, forensics, and reliability?", options: ["All ask why the failure was possible — control failure (audit), how the breach was possible (DFIR), why the system failed (reliability)", "Only reliability engineers use RCA", "Each uses a completely different goal", "Auditors don't do RCA"], correctIndex: 0, explanation: "The angle differs but the discipline — find the controllable systemic cause — is the same." },
      ],
    },
  },

  // ─── rca-02: The RCA Process ─────────────────────────────────────────────────
  {
    epochId: "tech-audit-7",
    wonder: { name: "NTSB", location: "Washington, D.C.", era: "Present Day", emoji: "🧭" },
    id: "rca-02",
    order: 2,
    title: "The RCA Process",
    subtitle: "Define, gather, sequence, analyze, fix, verify — the disciplined arc",
    category: "cybersecurity",
    xp: 210,
    badge: { id: "rca-badge-02", name: "Methodical Investigator", emoji: "🧭" },
    challengeType: "quiz",
    info: {
      tagline: "RCA isn't a flash of insight — it's a repeatable process. Skip a step and you'll confidently fix the wrong thing.",
      year: 2020,
      overview: [
        "Good RCA follows a structured arc that any auditor, responder, or engineer can repeat. The arc keeps you from jumping to a conclusion, ensures the cause is supported by evidence, and produces a fix you can verify. The steps:\n- Define the problem precisely.\n- Gather and preserve evidence.\n- Reconstruct the timeline / sequence of events.\n- Identify causal factors and the root cause(s).\n- Recommend corrective and preventive actions.\n- Verify the fix actually works.",
        "Define the problem precisely first. 'The site was down' is too vague to analyze; 'checkout API returned 500s for 18 minutes starting 14:02 UTC, affecting ~30% of sessions' is investigable. A sloppy problem statement guarantees a sloppy analysis — you can't find the cause of a problem you haven't pinned down in time, scope, and impact.",
        "Gather and preserve evidence before it decays. Logs roll over, memory clears, caches expire, and people forget. Capture the facts early — logs, configs, metrics, the change history, interview notes — and preserve their integrity (especially in forensics, where chain of custody matters). The quality of the entire analysis is capped by the quality of the evidence you secured up front.",
        "Reconstruct the timeline, then analyze. Lay the events in order — what changed, what fired, what the system and the people did, and when — and the causal structure usually becomes visible. Only then apply a technique (5 Whys, Fishbone, Fault Tree) to drill from the proximate cause to the root. Recommend corrective actions tied to each causal factor, and — the step everyone skips — verify the fix resolved it and didn't introduce a new problem.",
        "Two disciplines run through every step: stay objective (follow the evidence, not the first suspect or the most blamable person), and separate the investigation from the response. Incident response stops the bleeding (contain, eradicate, recover); RCA explains why it happened so it doesn't recur. Doing them at once — or skipping RCA once service is restored — is how organizations 'resolve' the same incident repeatedly.",
      ],
      technical: {
        title: "The Six Steps, and Where They Go Wrong",
        body: [
          "1) Define: a problem statement with what, where, when, and how-much. Failure mode: vague scope ('it was slow') that can't be analyzed or verified as fixed.",
          "2) Gather + preserve: collect logs, metrics, configs, change records, artifacts, and interviews while they're fresh; protect integrity (hashing, WORM, chain of custody). Failure mode: evidence decays or is contaminated, capping the analysis.",
          "3) Timeline: order every relevant event (changes, alerts, actions, human decisions) on one clock (normalize time zones). Failure mode: events out of order → a false causal story.",
          "4) Analyze: drive from proximate to root with a technique; identify all causal factors. 5) Recommend: a corrective action per factor, prioritized. 6) Verify: confirm the fix works and watch for recurrence. Failure modes: stopping at the first cause; recommending fixes no one validates; closing before verification.",
        ],
        codeExample: {
          label: "A problem statement: vague vs. investigable",
          code: `BAD:  "The app keeps breaking."     # no scope, time, or impact

GOOD: problem:  checkout API 500 errors
      when:     2026-06-09 14:02–14:20 UTC (18 min)
      scope:    ~30% of checkout sessions (region us-east)
      impact:   ~1,400 failed orders; revenue + trust
      change:   deploy v4.2.0 went out at 14:00 UTC
# now it's analyzable: a clear window, scope, and a candidate trigger`,
        },
      },
      flowchart: `flowchart LR
  D["1. Define the problem"] --> G["2. Gather + preserve evidence"]
  G --> T["3. Reconstruct timeline"]
  T --> A["4. Analyze -> causal factors + root"]
  A --> R["5. Recommend corrective actions"]
  R --> V{"6. Verify it worked?"}
  V -->|no| A
  V -->|yes| C["Close + capture lessons"]`,
      examples: [
        {
          label: "Evidence to secure first (before it decays)",
          code: `[volatile first]  memory / running processes, network state
[short-lived]     app + access logs, metrics, traces (rotate fast)
[config]          change history, deploy records, IaC diffs
[context]         alerts fired, on-call actions, comms timeline
[people]          interview notes (memories fade within days)
preserve: hash + write-once store; note collection time + collector`,
        },
      ],
      incident: {
        title: "Why the NTSB Method Beats the Blame Reflex",
        when: "Institutionalized over decades",
        where: "Aviation safety investigation",
        impact: "A repeatable, evidence-first process that made commercial aviation extraordinarily safe",
        body: [
          "The U.S. National Transportation Safety Board investigates every major aviation accident with a disciplined, evidence-first process, and the result is one of the great safety records in engineering history: flying became dramatically safer precisely because each accident was analyzed to its systemic causes and the findings fed back into design, training, and procedure. The method — secure the evidence (the 'black boxes'), build a precise timeline, analyze contributing factors, and publish corrective recommendations — is RCA in its mature form.",
          "What makes it work is the order of operations. Investigators do not start from a suspect and look for support; they preserve the flight-data and cockpit-voice recorders, reconstruct the exact sequence, and let the evidence constrain the conclusions. The output is not 'the pilot erred' but a set of causal and contributing factors — a fatigue-inducing schedule, an ambiguous instrument, a missing checklist step — each with a recommendation. The same accident is rarely allowed to recur because the systemic cause, not just the proximate trigger, is fixed.",
          "For auditors and security teams the transfer is direct. Restoring service (response) is the equivalent of putting out the fire; the NTSB-style RCA is what you do next so the fire can't start the same way again. The six-step arc — define, gather, sequence, analyze, recommend, verify — is the discipline that turns a one-off cleanup into organizational learning.",
          "The cautionary contrast is the organization that, the moment service is restored, declares the incident 'resolved,' names a person who 'made a mistake,' and moves on. It will see the incident again, because nothing systemic changed and the evidence to find the real cause has already decayed. Process discipline — especially preserving evidence early and verifying the fix late — is what separates learning organizations from those that relive their failures.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Define + Gather", sub: "scope + evidence", type: "attacker" },
          { label: "Timeline", sub: "sequence of events", type: "system" },
          { label: "Analyze + Recommend", sub: "causes + fixes", type: "victim" },
          { label: "Verify + Learn", sub: "confirmed, no recurrence", type: "result" },
        ],
      },
      timeline: [
        { year: 1967, event: "NTSB established — independent, evidence-first accident investigation" },
        { year: 2004, event: "RCA process formalized in IT/quality (ISO, ITIL problem management)" },
        { year: 2016, event: "SRE popularizes the blameless postmortem with the same arc", highlight: true },
        { year: 2020, event: "Evidence-first RCA standard across DFIR, audit, and reliability" },
      ],
      keyTakeaways: [
        "The RCA arc: define → gather/preserve evidence → reconstruct timeline → analyze causes → recommend → verify",
        "Define the problem precisely (what, where, when, how much) — a vague problem statement guarantees a vague analysis",
        "Preserve evidence early; the whole analysis is capped by the quality of the facts you secured before they decayed",
        "Build the timeline before analyzing — ordering events on one clock makes the causal structure visible",
        "Recommend a corrective action per causal factor, then verify the fix worked and didn't create a new problem",
        "Separate response (stop the bleeding) from RCA (explain why) — skipping RCA after recovery guarantees recurrence",
        "The NTSB method works because it secures evidence and follows it, rather than starting from a blamable suspect",
      ],
      references: [
        { title: "ISO/IEC 20000 & ITIL — Problem Management (RCA)", url: "https://www.iso.org/standard/70636.html" },
        { title: "NTSB — The Investigative Process", url: "https://www.ntsb.gov/investigations/process/Pages/default.aspx" },
      ],
    },
    quiz: {
      questions: [
        { id: "rca-02-q1", type: "Process", challenge: "The arc.", text: "What is the RCA process arc?", options: ["Define → gather/preserve evidence → reconstruct timeline → analyze causes → recommend → verify", "Guess → fix → hope", "Blame → close → repeat", "Restore → forget"], correctIndex: 0, explanation: "The structured arc keeps you evidence-based and produces a verifiable fix." },
        { id: "rca-02-q2", type: "Define", challenge: "Pin it down.", text: "Why must the problem be defined precisely first?", options: ["You can't analyze (or verify a fix for) a problem you haven't pinned in time, scope, and impact", "Precision wastes time", "Vague is fine if you're fast", "The cause is always obvious"], correctIndex: 0, explanation: "'The app keeps breaking' isn't investigable; a windowed, scoped statement is." },
        { id: "rca-02-q3", type: "Evidence", challenge: "Before it decays.", text: "Why gather and preserve evidence early?", options: ["Logs roll, memory clears, and people forget — the analysis quality is capped by the evidence secured up front", "Evidence never decays", "It's optional in RCA", "Only forensics needs evidence"], correctIndex: 0, explanation: "Securing and protecting facts early (integrity, chain of custody) sets the ceiling on the analysis." },
        { id: "rca-02-q4", type: "Timeline", challenge: "Order first.", text: "Why reconstruct the timeline before analyzing causes?", options: ["Ordering events on one clock makes the causal structure visible and prevents a false causal story", "Timelines are decorative", "Order doesn't matter", "It replaces the analysis"], correctIndex: 0, explanation: "Out-of-order events produce wrong conclusions; one normalized clock is essential." },
        { id: "rca-02-q5", type: "Verify", challenge: "The skipped step.", text: "What is the step teams most often skip?", options: ["Verifying the corrective action actually resolved it and didn't introduce a new problem", "Defining the problem", "Gathering evidence", "Writing a timeline"], correctIndex: 0, explanation: "Closing before verification means you don't actually know the cause is fixed." },
        { id: "rca-02-q6", type: "Separation", challenge: "Two activities.", text: "How do incident response and RCA differ?", options: ["Response stops the bleeding (contain/eradicate/recover); RCA explains why it happened so it doesn't recur", "They are identical", "RCA happens before the incident", "Response is unnecessary"], correctIndex: 0, explanation: "Skipping RCA once service is restored guarantees the incident returns." },
        { id: "rca-02-q7", type: "Objectivity", challenge: "Follow evidence.", text: "What keeps RCA objective?", options: ["Following the evidence rather than starting from the first suspect or most blamable person", "Trusting the senior engineer's hunch", "Picking the simplest story", "Blaming the last change"], correctIndex: 0, explanation: "Starting from a suspect and seeking support produces confident, wrong conclusions." },
        { id: "rca-02-q8", type: "Real Case", challenge: "NTSB.", text: "Why is the NTSB investigative method a model for RCA?", options: ["It secures evidence (black boxes), builds a precise timeline, and publishes systemic causes + recommendations — not blame", "It assigns pilot blame quickly", "It restores flights fastest", "It avoids writing reports"], correctIndex: 0, explanation: "Evidence-first analysis to systemic causes is why the same accidents rarely recur." },
      ],
    },
  },

  // ─── rca-03: The 5 Whys ──────────────────────────────────────────────────────
  {
    epochId: "tech-audit-7",
    wonder: { name: "Toyota Production System", location: "Toyota City, Japan", era: "Present Day", emoji: "❓" },
    id: "rca-03",
    order: 3,
    title: "The 5 Whys",
    subtitle: "The simplest RCA tool — and the easiest to do badly",
    category: "cybersecurity",
    xp: 220,
    badge: { id: "rca-badge-03", name: "Why Chaser", emoji: "❓" },
    challengeType: "quiz",
    info: {
      tagline: "Ask 'why' until you hit something you can fix that explains the evidence. Stop early and you fix a symptom; stop at a person and you fix nothing.",
      year: 1950,
      overview: [
        "The 5 Whys is the most widely used RCA technique because it needs no tools: state the problem, ask 'why did this happen?', and keep asking 'why?' of each answer until you reach a controllable, systemic cause. It originated in the Toyota Production System as a way to push past symptoms to the process failure underneath. 'Five' is a guideline, not a rule — sometimes it's three, sometimes seven; you stop when the next 'why' leaves the system you can change.",
        "It works because each 'why' moves you down the causal chain from the visible symptom toward the systemic cause. The discipline is to answer each 'why' with a fact you can evidence, not a guess — otherwise you build a confident chain to the wrong place. A good 5 Whys reads like the breach example from earlier: each link is supported and each one deepens.",
        "The technique has well-known failure modes you must avoid:\n- Stopping too early — landing on a proximate cause ('the disk was full') and calling it root.\n- Stopping at a person — 'the engineer forgot,' which ends analysis instead of asking why the system allowed forgetting to cause an outage.\n- Single-path tunnel vision — following one chain when several causal threads contributed (5 Whys handles one path well; branch when needed).\n- Unsupported leaps — answering a 'why' with a plausible story rather than evidence.",
        "Used well, the last 'why' lands on something with three properties: it's within your control, fixing it prevents the whole chain, and the evidence supports it — exactly the root-cause test from stage 1. If your final answer is 'because humans make mistakes' or 'because attackers exist,' you've stopped at an uncontrollable truth, not a root cause; back up one step to the controllable condition.",
        "For auditors and security teams, 5 Whys is the everyday tool for a single-threaded failure (a control lapse, an outage, a missed patch). For complex failures with many interacting factors, it's a starting point that you graduate to Fishbone (to brainstorm categories of cause) or Fault Tree (to model combinations) — the next two stages.",
      ],
      technical: {
        title: "Doing 5 Whys Without Fooling Yourself",
        body: [
          "Anchor each 'why' to evidence. For every answer, ask 'how do we know?' — a log line, a config, a change record. An unsupported answer is a hypothesis; mark it and go verify before building further on it.",
          "Test the stopping point against the root-cause criteria: is it controllable, does removing it break the chain, and is it evidenced? If the next 'why' would be an uncontrollable fact of nature/adversary, the previous answer is your root cause. If you've stopped at a person, ask one more 'why the system let that error cause harm.'",
          "Branch when the evidence branches. If a 'why' has two real answers ('the patch wasn't applied' AND 'the WAF rule didn't cover it'), follow both — that's where 5 Whys hands off to Fishbone/Fault Tree. Forcing a single line hides contributing causes.",
          "Separate the corrective action from the cause. Each link can suggest a fix, but prioritize the action at the root (highest leverage) plus quick mitigations at intermediate links. Document the chain so reviewers can challenge any step — a 5 Whys nobody can audit is just an opinion.",
        ],
        codeExample: {
          label: "A clean 5 Whys (each link evidenced)",
          code: `PROBLEM: customer data was exposed via a public S3 bucket
1 why? the bucket's policy allowed public read
        (evidence: bucket policy, access logs)
2 why? it was created by a script with a permissive default
        (evidence: IaC template default = public)
3 why? the template was copied from an old internal example
        (evidence: git blame -> 2021 sample repo)
4 why? no IaC scanning blocks public-bucket policies pre-merge
        (evidence: CI config has no policy check)
5 why? no standard requires storage policies be scanned in CI
        (evidence: secure-baseline doc has no such control)
ROOT: missing CI policy-scan standard for storage  -> add the control
mitigation at link 1: remediate the bucket now`,
        },
      },
      flowchart: `flowchart TD
  P["Problem"] --> W1{"Why? (evidenced)"}
  W1 --> W2{"Why?"}
  W2 --> W3{"Why?"}
  W3 --> W4{"Why?"}
  W4 --> CHK{"Controllable, breaks chain, evidenced?"}
  CHK -->|no, it's a person/nature| BACK["Ask one more / back up"]
  CHK -->|yes| ROOT["Root cause -> corrective action"]`,
      examples: [
        {
          label: "The classic Toyota example (Jefferson Memorial)",
          code: `PROBLEM: the monument's stone is deteriorating
1 why? it's washed frequently with harsh detergent
2 why? to clean off large numbers of bird droppings
3 why? birds are attracted by the spiders they eat
4 why? spiders are drawn by the midges they eat
5 why? midges swarm to the lights lit at dusk
ROOT: lights turned on too early
FIX:  delay the lights ~1 hour  (not "wash less" — that's a symptom)`,
        },
      ],
      incident: {
        title: "5 Whys at Toyota — and How It Goes Wrong Elsewhere",
        when: "1950s–present",
        where: "Toyota Production System; adopted across IT, security, and SRE",
        impact: "A simple, universal RCA tool — powerful when disciplined, misleading when rushed",
        body: [
          "Taiichi Ohno developed the 5 Whys at Toyota as a cornerstone of the Toyota Production System, with a deliberately humble framing: 'Ask why five times.' The genius is that it forces a line worker — not just an engineer — to push past the obvious symptom to the process that produced it. A machine stopped? Don't just reset it: why did it stop (overload), why the overload (poor lubrication), why poor lubrication (the pump failed), why the pump (worn shaft, no filter), why no filter — and now you're fixing a maintenance standard, not resetting a machine for the hundredth time.",
          "The technique spread everywhere because it's free and intuitive, but its very simplicity is the trap. Done in a hurry it produces a confident chain to the wrong place: teams stop at the first fixable thing ('restart the service'), or stop at a person ('Dave deployed it'), and call the analysis done. The result is a 'root cause' that's really a symptom or a scapegoat, and the problem returns.",
          "In security and audit the failure mode is especially seductive because there's always a blamable proximate cause — the user who clicked, the admin who misconfigured, the engineer who skipped a step. The disciplined 5 Whys treats each of those as link one, not the answer: why was a single click able to compromise the network (no MFA, flat network, no EDR)? Each 'why' that turns a person into a system condition is where the real, fixable cause lives.",
          "The lesson is that 5 Whys is only as good as the discipline behind it: evidence under each link, a stopping test against the root-cause criteria, and a willingness to branch when more than one thread contributed. As a tool it's unbeatable for everyday single-thread failures; as an excuse to stop thinking after five quick answers it's worse than nothing, because it dresses a guess in the authority of a method.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Problem", sub: "the symptom", type: "attacker" },
          { label: "Why → Why → Why", sub: "evidenced links", type: "system" },
          { label: "Stopping Test", sub: "controllable + root", type: "victim" },
          { label: "Root Cause + Fix", sub: "highest leverage", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Taiichi Ohno develops the 5 Whys at Toyota" },
        { year: 1988, event: "Toyota Production System documented and exported globally" },
        { year: 2008, event: "5 Whys adopted in IT problem management and Lean/Six Sigma" },
        { year: 2016, event: "Standard in SRE postmortems — with explicit anti-blame discipline", highlight: true },
      ],
      keyTakeaways: [
        "5 Whys: ask 'why?' of each answer until you reach a controllable, evidenced, systemic cause — 'five' is a guideline, not a rule",
        "Anchor every 'why' to evidence ('how do we know?') — an unsupported chain leads confidently to the wrong cause",
        "Stop when the next 'why' would be an uncontrollable fact (nature/adversary); if you stopped at a person, ask why the system allowed the harm",
        "Branch when the evidence branches — multiple causal threads hand 5 Whys off to Fishbone or Fault Tree",
        "Test the stopping point against the root-cause criteria: controllable, breaks the chain, supported by evidence",
        "Fix at the root for leverage, plus quick mitigations at intermediate links; document the chain so reviewers can challenge any step",
        "5 Whys is unbeatable for single-thread failures and worse than nothing as an excuse to stop thinking after five quick answers",
      ],
      references: [
        { title: "Taiichi Ohno — Toyota Production System (5 Whys)", url: "https://en.wikipedia.org/wiki/Five_whys" },
        { title: "Google SRE Workbook — Postmortem Culture", url: "https://sre.google/workbook/postmortem-culture/" },
      ],
    },
    quiz: {
      questions: [
        { id: "rca-03-q1", type: "Technique", challenge: "What it is.", text: "How does the 5 Whys work?", options: ["State the problem, ask 'why?' of each answer until you reach a controllable, evidenced systemic cause", "Ask exactly five questions then stop", "Ask the most senior person five times", "List five possible fixes"], correctIndex: 0, explanation: "'Five' is a guideline; you stop at the controllable root, which may be more or fewer steps." },
        { id: "rca-03-q2", type: "Discipline", challenge: "Evidence each link.", text: "What keeps a 5 Whys chain honest?", options: ["Anchoring each 'why' to evidence — asking 'how do we know?' for every answer", "Answering quickly", "Trusting intuition", "Stopping at the first fix"], correctIndex: 0, explanation: "An unsupported answer is a hypothesis; building on it leads confidently to the wrong cause." },
        { id: "rca-03-q3", type: "Pitfall", challenge: "Stop at a person?", text: "If a 5 Whys lands on 'the engineer forgot,' what should you do?", options: ["Ask one more 'why the system let that error cause harm' — a person is link one, not the root", "Stop — that's the root cause", "Discipline the engineer", "Close the investigation"], correctIndex: 0, explanation: "Stopping at a person ends analysis and fixes nothing; the root is the system that allowed the error to matter." },
        { id: "rca-03-q4", type: "Stopping", challenge: "When to stop.", text: "When have you reached the root with 5 Whys?", options: ["When the answer is controllable, removing it breaks the chain, and evidence supports it", "After exactly five whys", "When you find someone to blame", "When you're tired of asking"], correctIndex: 0, explanation: "If the next 'why' would be an uncontrollable fact, the prior answer is the root." },
        { id: "rca-03-q5", type: "Branching", challenge: "More than one thread.", text: "What do you do when a 'why' has two real answers?", options: ["Follow both — branching is where 5 Whys hands off to Fishbone/Fault Tree", "Pick the simpler one", "Ignore the second", "Restart from the top"], correctIndex: 0, explanation: "Forcing a single line hides contributing causes; multiple threads need a branching technique." },
        { id: "rca-03-q6", type: "Leverage", challenge: "Where to fix.", text: "Where should the primary corrective action target?", options: ["The root cause (highest leverage), plus quick mitigations at intermediate links", "Only the symptom", "Only the person", "Wherever is cheapest"], correctIndex: 0, explanation: "Fixing the root stops the class of problem; intermediate mitigations buy time." },
        { id: "rca-03-q7", type: "Origin", challenge: "Where it began.", text: "Where did the 5 Whys originate?", options: ["The Toyota Production System (Taiichi Ohno) as a way to push past symptoms to the process failure", "NASA", "The NTSB", "Google SRE"], correctIndex: 0, explanation: "Toyota used it to make even line workers reach the systemic cause of a stoppage." },
        { id: "rca-03-q8", type: "Trap", challenge: "Simplicity risk.", text: "Why can the 5 Whys be 'worse than nothing'?", options: ["Rushed, it dresses a guess (stopping at a symptom or scapegoat) in the authority of a method", "It's too complex", "It needs expensive tools", "It only works in factories"], correctIndex: 0, explanation: "Its simplicity is the trap — discipline (evidence, stopping test, branching) is what makes it work." },
      ],
    },
  },

  // ─── rca-04: Fishbone / Ishikawa ─────────────────────────────────────────────
  {
    epochId: "tech-audit-7",
    wonder: { name: "Kawasaki Shipyards", location: "Kobe, Japan", era: "Present Day", emoji: "🐟" },
    id: "rca-04",
    order: 4,
    title: "The Fishbone Diagram",
    subtitle: "Ishikawa — structured brainstorming so you don't miss a category of cause",
    category: "cybersecurity",
    xp: 230,
    badge: { id: "rca-badge-04", name: "Cause Mapper", emoji: "🐟" },
    challengeType: "quiz",
    info: {
      tagline: "5 Whys follows one thread. The fishbone makes sure you've looked down every thread before you commit.",
      year: 1968,
      overview: [
        "The Ishikawa or 'fishbone' diagram is a structured brainstorming tool for problems with many possible causes. You draw the effect (the problem) as the fish's head, then major 'bones' for categories of cause, and branch specific causes off each bone. Its value over 5 Whys is breadth: it forces you to consider every category before fixating on one, so you don't tunnel down a single thread and miss a contributing factor in another.",
        "The classic categories are the '6 Ms' from manufacturing — Machine, Method, Material, Manpower (People), Measurement, and Mother Nature (Environment). For IT, audit, and security the categories are usually adapted to:\n- People — skills, staffing, fatigue, training, ownership.\n- Process — procedures, change control, approvals, runbooks.\n- Technology — systems, configs, tooling, dependencies.\n- Data / Inputs — quality, sources, integrity.\n- Environment — external conditions, timing, pressure.\nThe categories are scaffolding; the point is to brainstorm causes systematically under each so none is overlooked.",
        "The fishbone is a divergent tool — it generates the candidate causes; it does not, by itself, prove which one is the root. You use it to map the possibility space, then converge with evidence (and often a 5 Whys down the most promising bones) to identify the actual causal factors. A fishbone with twenty branches isn't an answer; it's a well-organized list of hypotheses to test against the evidence.",
        "It shines in two situations: complex incidents where multiple factors plausibly contributed (so a single 5 Whys thread would miss things), and team workshops, where the visual structure keeps a group from anchoring on the first idea and ensures quieter categories (Measurement, Environment) actually get considered. For audit, it's a natural way to dissect why a control failed across people/process/technology rather than blaming whichever one is most visible.",
        "The common misuse is treating the diagram as the deliverable. The fishbone organizes thinking; it doesn't replace evidence-gathering or the convergence step. A team that fills in a beautiful diagram and then 'picks' a root cause by consensus rather than by evidence has used a structured method to reach an unstructured guess.",
      ],
      technical: {
        title: "Building and Converging a Fishbone",
        body: [
          "Diverge first: write the precise problem as the head, draw the category bones (People/Process/Technology/Data/Environment for IT), and brainstorm specific causes under each without judging them. Ask the group to populate every category — empty bones are usually unexamined blind spots, not the absence of causes.",
          "Use prompts per category so you don't miss the non-obvious: People (training, ownership, fatigue), Process (was there a procedure; was it followed; was it reviewed), Technology (config, version, dependency, monitoring), Data (quality, source, integrity), Environment (load, timing, external change, pressure).",
          "Converge with evidence: rank the candidate causes by how well the evidence supports them, then drill the top ones with 5 Whys to reach the systemic root. The fishbone tells you where to look; the evidence tells you what's actually true. Mark each branch as confirmed, refuted, or untested.",
          "Output causal factors, not the whole diagram: the deliverable is the small set of evidence-supported causes (often spanning more than one category) plus corrective actions — not the brainstorm. Keep the diagram as an appendix showing what was considered and ruled out, which is itself valuable for reviewers.",
        ],
        codeExample: {
          label: "Fishbone for a security control failure (text form)",
          code: `EFFECT: phishing email led to domain-admin compromise

PEOPLE      -> no security training; one overworked admin owns all
PROCESS     -> no MFA requirement; no tiered-admin standard
TECHNOLOGY  -> flat network; EDR not deployed to that host
DATA/INPUT  -> lookalike domain not on the block list
ENVIRONMENT -> end-of-quarter pressure; alert fatigue

converge (evidence): MFA absent + flat network are confirmed and
each independently enabled the escalation -> two root causes,
in Process and Technology. Training (People) = contributing factor.`,
        },
      },
      flowchart: `flowchart LR
  E["Effect (the problem)"] --> P["People"]
  E --> PR["Process"]
  E --> T["Technology"]
  E --> D["Data / Inputs"]
  E --> EN["Environment"]
  P --> CONV{"Converge with evidence"}
  PR --> CONV
  T --> CONV
  D --> CONV
  EN --> CONV
  CONV --> ROOT["Confirmed causal factors -> fixes"]`,
      examples: [
        {
          label: "Category prompts that surface blind spots",
          code: `People       was anyone trained / accountable / overloaded?
Process      was there a procedure? followed? reviewed? owned?
Technology   config? version? dependency? monitoring/alerting?
Data/Inputs  quality? source? integrity? allow/block lists?
Environment  load? timing? external change? deadline pressure?
# an EMPTY bone usually means an unexamined blind spot, not "no cause"`,
        },
      ],
      incident: {
        title: "Kaoru Ishikawa and the Power of Seeing Every Category",
        when: "1960s–present",
        where: "Japanese quality movement; now universal in RCA",
        impact: "A diagram that stops investigators from fixating on the first or most visible cause",
        body: [
          "Kaoru Ishikawa, a pioneer of Japanese quality management, introduced the cause-and-effect diagram so that teams diagnosing a defect would consider the full breadth of possible causes rather than seizing on the most obvious one. In a factory, the visible culprit is usually the machine; Ishikawa's insight was that the real cause is just as often in method, materials, measurement, or people — categories a panicked team skips when it tunnels on the broken machine in front of it. Forcing every category onto the diagram makes the blind spots visible.",
          "That insight is exactly what audit and security RCA needs, because the visible cause in a breach is almost always 'technology' (the exploited CVE) or 'people' (the user who clicked) — and the systemic causes in process (no patch SLA, no change review) get skipped precisely because they're not in front of you. The fishbone's discipline is to populate Process, Data, and Environment even when Technology already 'explains' it, and that's where the durable fixes usually hide.",
          "The diagram is also a team tool. In a workshop, the first idea voiced tends to anchor the group; a fishbone counters that by demanding contributions in every category before any cause is chosen, and by giving quieter participants a structured place to add the Measurement or Environment causes the loudest voice overlooked. The structure turns a blame-prone meeting into a systematic survey of possibility.",
          "The caution Ishikawa's tool carries is the same one every RCA technique carries: the diagram maps possibilities, it doesn't prove causes. A gorgeous fishbone followed by a show-of-hands vote for the 'root cause' is structured theater. The method's job is to make sure you looked everywhere; the evidence's job is to tell you which branches are real. Used together — diverge with the fishbone, converge with the evidence — it reliably catches the contributing factor a single-thread analysis would have missed.",
        ],
      },
      diagram: {
        nodes: [
          { label: "The Effect", sub: "precise problem", type: "attacker" },
          { label: "Category Bones", sub: "People/Process/Tech/Data/Env", type: "system" },
          { label: "Converge w/ Evidence", sub: "confirm or refute", type: "victim" },
          { label: "Causal Factors", sub: "across categories", type: "result" },
        ],
      },
      timeline: [
        { year: 1968, event: "Kaoru Ishikawa popularizes the cause-and-effect (fishbone) diagram" },
        { year: 1985, event: "Adopted across Total Quality Management and Six Sigma" },
        { year: 2005, event: "Standard in IT problem management and audit RCA", highlight: true },
        { year: 2018, event: "Used in security incident workshops to map people/process/tech causes" },
      ],
      keyTakeaways: [
        "The fishbone (Ishikawa) is structured brainstorming: the problem is the head, category 'bones' branch into specific candidate causes",
        "It adds breadth over 5 Whys — forcing every category prevents tunnel vision down a single thread",
        "IT/security categories: People, Process, Technology, Data/Inputs, Environment (adapted from the manufacturing 6 Ms)",
        "It's a divergent tool — it maps the possibility space; you still converge with evidence to find the actual causes",
        "Empty bones are usually unexamined blind spots — populate Process/Data/Environment even when Technology already 'explains' it",
        "Great for complex multi-factor incidents and team workshops (it counters anchoring on the first idea)",
        "The deliverable is the evidence-confirmed causal factors + fixes, not the diagram — a fishbone plus a vote is structured guessing",
      ],
      references: [
        { title: "Kaoru Ishikawa — Cause-and-Effect Diagram", url: "https://en.wikipedia.org/wiki/Ishikawa_diagram" },
        { title: "ASQ — Fishbone Diagram", url: "https://asq.org/quality-resources/fishbone" },
      ],
    },
    quiz: {
      questions: [
        { id: "rca-04-q1", type: "Tool", challenge: "What it is.", text: "What is a fishbone (Ishikawa) diagram?", options: ["Structured brainstorming: the problem as the head, category bones branching into specific candidate causes", "A network topology map", "A project timeline", "A risk heat map"], correctIndex: 0, explanation: "It organizes cause brainstorming by category so none is overlooked." },
        { id: "rca-04-q2", type: "vs 5 Whys", challenge: "Why use it.", text: "What does the fishbone add over a 5 Whys?", options: ["Breadth — it forces consideration of every category, preventing tunnel vision down one thread", "It's faster", "It proves the root cause by itself", "It needs no evidence"], correctIndex: 0, explanation: "5 Whys follows one path well; the fishbone surveys all categories first." },
        { id: "rca-04-q3", type: "Categories", challenge: "The bones.", text: "What are typical IT/security fishbone categories?", options: ["People, Process, Technology, Data/Inputs, Environment", "TCP, UDP, ICMP, DNS", "P0, P1, P2, P3", "Red, amber, green"], correctIndex: 0, explanation: "Adapted from manufacturing's 6 Ms to fit IT/security causes." },
        { id: "rca-04-q4", type: "Divergent", challenge: "Map vs. prove.", text: "What does the fishbone NOT do by itself?", options: ["Prove which candidate is the root cause — it maps possibilities; you converge with evidence", "Generate candidate causes", "Organize a workshop", "Surface blind spots"], correctIndex: 0, explanation: "It's a divergent tool; the evidence is what confirms which branches are real." },
        { id: "rca-04-q5", type: "Blind Spots", challenge: "Empty bones.", text: "What does an empty category bone usually indicate?", options: ["An unexamined blind spot, not the genuine absence of causes there", "That category is irrelevant", "The analysis is complete", "A drawing error"], correctIndex: 0, explanation: "Process/Data/Environment get skipped precisely because Technology already seems to 'explain' it." },
        { id: "rca-04-q6", type: "Workshops", challenge: "Team effect.", text: "Why is the fishbone good for team workshops?", options: ["It counters anchoring on the first idea by demanding contributions in every category before choosing a cause", "It lets the senior person decide fast", "It avoids disagreement", "It replaces evidence with consensus"], correctIndex: 0, explanation: "The structure gives quieter categories and participants a place, surveying possibility systematically." },
        { id: "rca-04-q7", type: "Converge", challenge: "Finish it.", text: "How do you move from a fishbone to a conclusion?", options: ["Rank candidates by evidence, drill the top ones with 5 Whys, and confirm/refute each branch", "Vote by show of hands", "Pick the most technical cause", "Choose the cheapest fix"], correctIndex: 0, explanation: "Diverge with the fishbone, converge with the evidence — together they catch missed factors." },
        { id: "rca-04-q8", type: "Misuse", challenge: "Theater.", text: "What is the common misuse of a fishbone?", options: ["Treating the diagram as the deliverable and picking a 'root cause' by consensus instead of evidence", "Drawing too few bones", "Using it for simple problems", "Adding an Environment category"], correctIndex: 0, explanation: "The method ensures you looked everywhere; evidence still decides which branches are true." },
      ],
    },
  },

  // ─── rca-05: Fault Tree Analysis ─────────────────────────────────────────────
  {
    epochId: "tech-audit-7",
    wonder: { name: "Bell Labs / Minuteman Program", location: "Murray Hill, New Jersey", era: "Present Day", emoji: "🌳" },
    id: "rca-05",
    order: 5,
    title: "Fault Tree Analysis",
    subtitle: "Top-down logic — when failure needs a COMBINATION of causes",
    category: "cybersecurity",
    xp: 240,
    badge: { id: "rca-badge-05", name: "Logic Modeler", emoji: "🌳" },
    challengeType: "quiz",
    info: {
      tagline: "Some failures need one thing to go wrong. Catastrophes need several at once — fault trees model exactly which combinations break you.",
      year: 1962,
      overview: [
        "Fault Tree Analysis (FTA) is a top-down, deductive technique: you start with the undesired top event (the failure or breach) and work downward through logic gates to the combinations of lower-level causes that could produce it. Where 5 Whys and fishbone are largely qualitative and forward-looking from a symptom, FTA is structured logic — it models how causes combine, which makes it the tool for complex, safety-critical, or defense-in-depth failures where no single cause is sufficient on its own.",
        "The core of FTA is two logic gates:\n- AND gate — the output occurs only if all inputs occur (the events must coincide). AND gates represent your defenses: a breach happens only if the firewall AND the MFA AND the monitoring all fail.\n- OR gate — the output occurs if any input occurs (any one is sufficient). OR gates represent single points of failure: the database is unavailable if the disk fails OR the network fails OR the process crashes.\nReading a tree, AND gates are good news (multiple things must fail together) and OR gates are warnings (any one suffices).",
        "FTA produces two powerful outputs. Qualitatively, it reveals minimal cut sets — the smallest combinations of basic failures that cause the top event. A cut set of size one is a single point of failure (fix it first); large cut sets mean the system is resilient (many things must fail together). Quantitatively, if you attach probabilities to the basic events, you can estimate the likelihood of the top event and find which contributors dominate the risk.",
        "For security, FTA maps directly onto defense-in-depth. A successful data exfiltration might require: initial access AND privilege escalation AND lateral movement AND exfiltration-without-detection. Each is an AND-gated layer; the attack succeeds only when all coincide. Modeling it as a tree shows where you have single points of failure (an OR gate hiding in a layer you thought was redundant) and which control, if added, would most increase the number of things an attacker must defeat.",
        "FTA's cost is effort and rigor — it's heavier than 5 Whys and best reserved for high-consequence systems (safety, finance, critical infrastructure) or for post-incident analysis of failures that clearly required several conditions to align. Used there, it's unmatched at exposing the dangerous truth that a 'defense-in-depth' architecture often has a hidden OR gate that collapses three layers into one.",
      ],
      technical: {
        title: "Reading a Fault Tree",
        body: [
          "Start at the top event (precisely defined) and decompose: ask 'what immediate causes could produce this, and do they combine with AND or OR?' Recurse downward until you reach basic events (root causes you won't decompose further). Gate choice is the crux — an AND models layered defenses that must all fail; an OR models alternatives where any one suffices.",
          "Compute minimal cut sets: the smallest sets of basic events whose joint occurrence triggers the top event. Cut sets of size one are single points of failure — the highest priority. The number and size of cut sets is a resilience metric: many large cut sets = robust; any small cut set = fragile.",
          "Quantify if you have data: assign probabilities to basic events; an AND gate multiplies (rarer), an OR gate roughly adds (more likely). The result estimates the top-event probability and ranks contributors so you fix the dominant risk first, not the scariest-sounding one.",
          "For incidents, build the tree backward from what happened to confirm which conditions had to align, and forward to find the cheapest control that breaks the smallest cut set. The classic finding: a layer you believed was redundant (AND) was actually an OR — a single failure defeated several 'independent' defenses at once.",
        ],
        codeExample: {
          label: "Fault tree for data exfiltration (defense-in-depth)",
          code: `TOP EVENT: customer data exfiltrated
  AND
  ├─ initial access            (OR: phishing | exposed RDP | vuln)
  ├─ privilege escalation      (OR: local exploit | cred reuse)
  ├─ lateral movement          (AND: flat network | no segmentation)
  └─ exfil undetected          (OR: no DLP | no egress monitoring)

minimal cut set (size 1?): "no egress monitoring" + the others...
finding: the 4 AND layers look redundant, BUT each contains an OR —
a single weakness per layer suffices, so the real cut sets are small.
fix priority: close the OR with the highest-probability single input.`,
        },
      },
      flowchart: `flowchart TD
  TOP["Top event: breach"] --> AND{"AND - all must fail"}
  AND --> L1["Initial access"]
  AND --> L2["Priv-esc"]
  AND --> L3["Lateral movement"]
  L1 --> OR1{"OR - any suffices"}
  OR1 --> E1["Phishing"]
  OR1 --> E2["Exposed RDP"]
  AND --> CUT["Minimal cut sets -> single points of failure"]`,
      examples: [
        {
          label: "AND vs OR — why it decides everything",
          code: `OR gate  (any one fails -> output fails) = SINGLE POINT OF FAILURE
  "DB down IF disk fails OR network fails OR process crashes"
  -> three independent risks; fix each; size-1 cut sets

AND gate (all must fail -> output fails) = DEFENSE IN DEPTH
  "Breach IF firewall fails AND MFA fails AND monitoring fails"
  -> resilient; an attacker must defeat all three at once

danger: an AND layer that secretly contains an OR collapses
defense-in-depth back into a single point of failure.`,
        },
      ],
      incident: {
        title: "From Minuteman Missiles to Defense-in-Depth",
        when: "1962–present",
        where: "Bell Labs / U.S. Air Force; now nuclear, aerospace, finance, and security",
        impact: "A rigorous way to find single points of failure hiding inside 'redundant' systems",
        body: [
          "Fault Tree Analysis was developed at Bell Labs in 1962 to evaluate the launch-control system of the Minuteman intercontinental ballistic missile — a system where an undesired top event (an unintended launch, or a failure to launch when commanded) was catastrophic and demanded proof that no small combination of failures could cause it. The technique then spread to civilian nuclear power, aerospace, and any domain where rare, high-consequence failures must be modeled rather than merely brainstormed.",
          "Its enduring power is exposing single points of failure inside systems everyone believed were redundant. Nuclear and aerospace post-mortems repeatedly found that 'independent' safety layers shared a hidden common cause — a single power supply, a single sensor, a single human approval — so what looked like an AND of three defenses was really an OR. The fault tree's minimal cut sets make that visible: if any cut set has size one, the redundancy is an illusion.",
          "Security is full of the same illusion, and FTA is the antidote. Teams describe their architecture as 'defense in depth' — firewall, then segmentation, then EDR, then monitoring — and assume an attacker must defeat every layer (an AND). FTA forces the question of whether the layers are truly independent: if all four log to the same console, share the same admin credential, or can be disabled by the same misconfiguration, then one failure defeats them all and your defense-in-depth collapses to a single point of failure. Modeling it as a tree turns that comfortable assumption into a testable claim.",
          "The trade-off is rigor for effort: FTA is heavier than a 5 Whys and overkill for an everyday single-thread outage. But for high-consequence systems and for post-incident analysis of failures that obviously required several conditions to align, nothing else so precisely answers 'what combinations break us, and which single addition makes us most resilient?' The discipline of asking 'AND or OR?' at every node is what converts a vague faith in layered defenses into a quantified understanding of where they're actually thin.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Top Event", sub: "the failure/breach", type: "attacker" },
          { label: "AND / OR Gates", sub: "how causes combine", type: "system" },
          { label: "Minimal Cut Sets", sub: "single points of failure", type: "victim" },
          { label: "Targeted Control", sub: "breaks smallest cut set", type: "result" },
        ],
      },
      timeline: [
        { year: 1962, event: "FTA invented at Bell Labs for the Minuteman missile system" },
        { year: 1975, event: "WASH-1400 (Reactor Safety Study) popularizes FTA in nuclear" },
        { year: 1981, event: "NRC Fault Tree Handbook standardizes the method", highlight: true },
        { year: 2015, event: "Applied to cyber defense-in-depth and attack-path modeling" },
      ],
      keyTakeaways: [
        "Fault Tree Analysis is top-down deductive: from the undesired top event down through logic gates to combinations of basic causes",
        "AND gate = all inputs must occur (defense-in-depth, resilient); OR gate = any input suffices (single point of failure, fragile)",
        "Minimal cut sets are the smallest combinations that cause the top event — a size-1 cut set is a single point of failure to fix first",
        "With probabilities, FTA quantifies the top-event likelihood and ranks contributors so you fix the dominant risk",
        "In security, FTA maps defense-in-depth and exposes 'redundant' layers that secretly share a common cause (a hidden OR)",
        "It's heavier than 5 Whys — reserve it for high-consequence systems and failures that clearly required several conditions to align",
        "The recurring finding: an AND of 'independent' defenses is really an OR when they share a credential, console, or misconfiguration",
      ],
      references: [
        { title: "NRC/NASA Fault Tree Handbook", url: "https://ntrs.nasa.gov/citations/20000102570" },
        { title: "Fault Tree Analysis — overview", url: "https://en.wikipedia.org/wiki/Fault_tree_analysis" },
      ],
    },
    quiz: {
      questions: [
        { id: "rca-05-q1", type: "Tool", challenge: "What it is.", text: "What is Fault Tree Analysis?", options: ["A top-down deductive technique from an undesired top event down through logic gates to combinations of basic causes", "A forward brainstorm from a symptom", "A network scan", "A blameless interview"], correctIndex: 0, explanation: "FTA models how causes combine, suited to complex/safety-critical failures." },
        { id: "rca-05-q2", type: "Gates", challenge: "AND vs OR.", text: "What do AND and OR gates represent?", options: ["AND = all inputs must occur (defense-in-depth, resilient); OR = any one suffices (single point of failure, fragile)", "AND is fast, OR is slow", "They mean the same thing", "OR is always safer"], correctIndex: 0, explanation: "AND gates are reassuring (many must fail); OR gates are warnings (one suffices)." },
        { id: "rca-05-q3", type: "Cut Sets", challenge: "The key output.", text: "What is a minimal cut set?", options: ["The smallest combination of basic failures whose joint occurrence causes the top event — size 1 = single point of failure", "The cheapest fix", "The longest causal chain", "A list of all events"], correctIndex: 0, explanation: "Cut-set size is a resilience metric; small ones are the top priority." },
        { id: "rca-05-q4", type: "Quantify", challenge: "Add probabilities.", text: "What does attaching probabilities to basic events let FTA do?", options: ["Estimate the top-event likelihood and rank which contributors dominate the risk", "Eliminate the need for evidence", "Prove human error", "Replace the timeline"], correctIndex: 0, explanation: "AND gates multiply (rarer), OR gates add (more likely); ranking guides fixes." },
        { id: "rca-05-q5", type: "Security", challenge: "Defense-in-depth.", text: "How does FTA apply to security defense-in-depth?", options: ["It models layers as AND gates and exposes when 'redundant' layers secretly share a common cause (a hidden OR)", "It blocks attacks directly", "It replaces firewalls", "It only works for hardware"], correctIndex: 0, explanation: "Shared credentials/consoles turn an AND of defenses into a single point of failure." },
        { id: "rca-05-q6", type: "Illusion", challenge: "Hidden OR.", text: "What is the dangerous illusion FTA reveals?", options: ["An AND of 'independent' defenses is really an OR when they share a credential, console, or misconfiguration", "That redundancy is always real", "That OR gates are safe", "That single causes don't exist"], correctIndex: 0, explanation: "One failure then defeats several layers at once — defense-in-depth collapses." },
        { id: "rca-05-q7", type: "When", challenge: "Right tool.", text: "When should you choose FTA over 5 Whys?", options: ["For high-consequence systems and failures that clearly required several conditions to align", "For every minor outage", "When you have no time", "When one cause is obvious"], correctIndex: 0, explanation: "FTA trades effort for rigor; reserve it for combination failures and safety-critical systems." },
        { id: "rca-05-q8", type: "Origin", challenge: "Where from.", text: "Where was FTA originally developed?", options: ["Bell Labs in 1962 to evaluate the Minuteman missile launch-control system", "Toyota factories", "Google SRE", "The NTSB"], correctIndex: 0, explanation: "A catastrophic top event demanded proof no small failure combination could cause it." },
      ],
    },
  },

  // ─── rca-06: Forensic Timeline & Evidence ────────────────────────────────────
  {
    epochId: "tech-audit-7",
    wonder: { name: "The DFIR Lab", location: "Incident Response Bay", era: "Present Day", emoji: "🧪" },
    id: "rca-06",
    order: 6,
    title: "Timeline Reconstruction & Evidence",
    subtitle: "The forensic backbone — building the truth from artifacts, with integrity",
    category: "cybersecurity",
    xp: 250,
    badge: { id: "rca-badge-06", name: "Timeline Builder", emoji: "🧪" },
    challengeType: "quiz",
    info: {
      tagline: "You can't analyze a cause you can't sequence. In forensics, the timeline IS the analysis — and it's only as good as the evidence behind it.",
      year: 2024,
      overview: [
        "In digital forensics and incident response (DFIR), RCA lives or dies on the timeline: a precise, evidence-backed sequence of what happened, when, and in what order. Reconstructing it is how you turn a pile of logs, disk images, and memory captures into a causal story — when the attacker got in, what they touched, how they escalated, what they took, and which control should have stopped each step. Without the timeline you have anecdotes; with it you have analysis.",
        "Timelines are built from artifacts, each a source of timestamped truth:\n- Logs — authentication, application, firewall, EDR, cloud audit trails.\n- Filesystem — MACB timestamps (Modified, Accessed, Changed, Born) on files.\n- Memory — running processes, network connections, injected code at capture time.\n- Network — flow data, DNS, proxy and egress records.\n- Application/cloud — API calls, control-plane events, change history.\nTools like log2timeline/Plaso fuse these into a 'super timeline' on one normalized clock.",
        "Two disciplines make the timeline trustworthy. First, time normalization: every source must be reconciled to one timezone and clock, and clock skew (a host whose time was wrong) must be identified — out-of-order events produce a false causal story, the cardinal forensic error. Second, evidence integrity: collect in order of volatility (memory and live network first, then disk, then archives), hash everything on collection, work from copies, and maintain chain of custody so the evidence is defensible if it ends up in an audit finding, a regulatory filing, or court.",
        "The order of volatility matters because evidence decays at different rates. RAM and live connections vanish on reboot (minutes); logs roll over (hours to days); disk artifacts persist longer; backups longest. Capturing the most volatile first — and never powering off a live system before imaging memory if you can help it — is the difference between reconstructing the attack and guessing at it. The single most common DFIR regret is evidence that decayed before it was secured.",
        "The forensic timeline feeds directly into the RCA techniques: once the sequence is established, you apply 5 Whys to each control that should have fired ('the EDR didn't alert — why?'), or model the attack as a fault tree of layers that failed. The timeline answers 'what happened'; the RCA techniques answer 'why it was possible.' A breach report that lists indicators but never reconstructs the ordered sequence and the per-step control failures has documented the symptom, not found the cause.",
      ],
      technical: {
        title: "Building a Defensible Timeline",
        body: [
          "Collect by order of volatility: live memory + network state first, then disk image, then logs/backups. Hash each artifact at collection (e.g., SHA-256), record who collected it and when, and analyze only copies — never the original. This chain of custody is what makes a finding defensible in audit, regulatory, or legal contexts.",
          "Normalize time before sequencing: convert every source to UTC, detect and correct clock skew, and flag any source whose timestamps can't be trusted. A single mis-set host clock can invert cause and effect; treat time as evidence to be validated, not assumed.",
          "Fuse sources into a super timeline (log2timeline/Plaso, or manual correlation): one ordered stream of events across logs, filesystem MACB, memory, and network. Look for the pivots — first compromise, first privilege change, first lateral move, first exfiltration — and the gaps where a control should have produced an event but didn't.",
          "Drive RCA from the sequence: for each step, ask which control should have detected or blocked it and why it didn't (5 Whys), and whether the steps required a combination of failures (fault tree). The deliverable is the ordered timeline plus, per pivotal step, the control that failed and the systemic reason — that's where the breach's root causes live.",
        ],
        codeExample: {
          label: "A reconstructed intrusion timeline (UTC, evidenced)",
          code: `TIME (UTC)  EVENT                         SOURCE          CONTROL GAP
14:02  phishing link clicked            proxy log       no URL filtering
14:05  macro dropped beacon             EDR (late)      no macro block
14:11  beacon C2 established            netflow         no egress allow-list
14:40  cred dumped (LSASS)              EDR alert (no)  EDR not in block mode
15:20  lateral move to DC               auth log        flat network, no MFA
03:10  bulk read of customer DB         db audit        no DLP / anomaly alert
+9 days exfil to external host          netflow         no egress monitoring
# integrity: each source hashed on collection; clocks normalized to UTC;
# dwell time 9 days -> RCA target = detection gaps, not just the phish`,
        },
      },
      flowchart: `flowchart LR
  A["Artifacts: logs, disk, memory, network"] --> N["Normalize time -> UTC, fix skew"]
  N --> F["Fuse -> super timeline (ordered)"]
  F --> P["Find pivots + control gaps"]
  P --> RCA["Per step: 5 Whys / fault tree"]
  RCA --> ROOT["Systemic causes (e.g., detection gaps)"]`,
      examples: [
        {
          label: "Order of volatility — collect most-perishable first",
          code: `1. memory (RAM): processes, injected code, live keys   [minutes]
2. network state: connections, ARP, routing             [minutes]
3. running system: logged-in users, open files          [minutes]
4. disk: filesystem, MACB timestamps, artifacts         [persistent]
5. logs (local + central), config, change history       [rolls over]
6. archives / backups                                   [longest]
rule: hash on collection; work on copies; keep chain of custody`,
        },
      ],
      incident: {
        title: "Dwell Time — When the Timeline Reveals the Real Cause",
        when: "Recurring pattern across major breaches",
        where: "Enterprise intrusions (Target 2013, OPM 2015, and many since)",
        impact: "The breach's root cause is usually a detection gap the timeline exposes, not the initial entry",
        body: [
          "Reconstruct the timeline of almost any major breach and the same shape appears: the initial access is mundane (a phished credential, an exposed service, an unpatched edge device), but the attacker then operates undetected for weeks or months — the 'dwell time' — before exfiltrating. In the 2013 Target breach the attackers were inside for weeks; in the 2015 OPM breach, over a year. The headline blames the entry point, but the timeline tells a different story: the catastrophic damage came from how long the intrusion went unseen, and the root cause is the detection and response gap, not the initial click.",
          "This is why timeline reconstruction is the heart of breach RCA. Listing indicators of compromise documents that an attack happened; ordering them on one clock reveals where it could have been stopped. Every gap in the timeline — a privilege escalation with no alert, a lateral move across a flat network, a bulk database read with no anomaly detection, an exfiltration with no egress monitoring — is a control that should have fired and didn't. Those gaps, not the phishing email, are where the durable corrective actions live.",
          "The forensic disciplines are what make this story trustworthy enough to act on. If the timeline is built from artifacts collected in the wrong order (the analyst rebooted the box and lost memory), from sources with unreconciled clocks (so events appear out of order), or from evidence whose integrity can't be vouched for, then the 'root cause' rests on sand — and in a regulated breach, a contaminated chain of custody can sink a legal or regulatory position regardless of how good the analysis is. Integrity isn't bureaucracy; it's what makes the conclusion defensible.",
          "The lesson for auditors and responders is that the timeline is both the evidence and the analysis. Build it rigorously — volatility order, hashed artifacts, normalized clocks — and it hands you the root causes by showing exactly which controls failed and for how long. Skip it, and you'll 'resolve' the breach by patching the entry point while the real cause, the months-long blindness, waits to be exploited again through a different door.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Artifacts", sub: "logs/disk/memory/net", type: "attacker" },
          { label: "Normalize + Fuse", sub: "one clock, ordered", type: "system" },
          { label: "Pivots + Gaps", sub: "controls that didn't fire", type: "victim" },
          { label: "Root Causes", sub: "detection/response gaps", type: "result" },
        ],
      },
      timeline: [
        { year: 2012, event: "log2timeline/Plaso enables automated 'super timeline' creation" },
        { year: 2013, event: "Target breach — weeks of dwell time exposed by timeline reconstruction" },
        { year: 2015, event: "OPM breach — over a year undetected; detection gap is the root cause", highlight: true },
        { year: 2024, event: "Timeline-first DFIR standard; dwell time a core breach metric" },
      ],
      keyTakeaways: [
        "In DFIR, RCA lives on the timeline — a precise, evidence-backed sequence turns artifacts into a causal story",
        "Build it from logs, filesystem MACB timestamps, memory, and network/cloud records, fused onto one normalized clock",
        "Normalize time and detect clock skew first — out-of-order events produce a false causal story (the cardinal forensic error)",
        "Preserve evidence integrity: collect by order of volatility (memory first), hash on collection, work on copies, keep chain of custody",
        "Order of volatility matters because evidence decays at different rates — the top DFIR regret is evidence lost before it was secured",
        "The breach's root cause is usually a detection/response gap the timeline exposes (dwell time), not the mundane initial access",
        "Drive RCA from the sequence: per pivotal step, find the control that should have fired and the systemic reason it didn't",
      ],
      references: [
        { title: "SANS DFIR — Timeline Analysis", url: "https://www.sans.org/cyber-security-courses/windows-forensic-analysis/" },
        { title: "NIST SP 800-86 — Guide to Integrating Forensic Techniques into IR", url: "https://csrc.nist.gov/pubs/sp/800/86/final" },
      ],
    },
    quiz: {
      questions: [
        { id: "rca-06-q1", type: "Backbone", challenge: "Why timeline.", text: "Why is the timeline central to forensic RCA?", options: ["A precise, evidence-backed sequence turns scattered artifacts into a causal story you can analyze", "It's required paperwork", "It replaces evidence", "It's only for court"], correctIndex: 0, explanation: "Without sequence you have anecdotes; with it you can find where each step could have been stopped." },
        { id: "rca-06-q2", type: "Sources", challenge: "Build from what.", text: "What artifacts feed a forensic timeline?", options: ["Logs, filesystem MACB timestamps, memory, and network/cloud records, fused onto one clock", "Only firewall logs", "Only the analyst's memory", "Only the final alert"], correctIndex: 0, explanation: "Tools like log2timeline/Plaso fuse many timestamped sources into a super timeline." },
        { id: "rca-06-q3", type: "Time", challenge: "Normalize first.", text: "Why normalize time and detect clock skew before sequencing?", options: ["Out-of-order events produce a false causal story — the cardinal forensic error", "It looks neater", "Time is irrelevant", "To save storage"], correctIndex: 0, explanation: "A single mis-set host clock can invert cause and effect; treat time as evidence to validate." },
        { id: "rca-06-q4", type: "Volatility", challenge: "Collect order.", text: "What does 'order of volatility' mean for evidence collection?", options: ["Collect the most perishable first (memory, live network), then disk, then logs/backups", "Collect the biggest files first", "Collect alphabetically", "Collect whatever's easiest"], correctIndex: 0, explanation: "RAM vanishes on reboot; capturing it before powering off is often decisive." },
        { id: "rca-06-q5", type: "Integrity", challenge: "Defensible evidence.", text: "What preserves evidence integrity?", options: ["Hash artifacts on collection, work on copies, and maintain chain of custody", "Edit logs to clarify them", "Reboot to get a clean state", "Trust the original in place"], correctIndex: 0, explanation: "A contaminated chain of custody can sink a regulatory/legal position regardless of analysis quality." },
        { id: "rca-06-q6", type: "Dwell Time", challenge: "Real root cause.", text: "In major breaches, what does the timeline usually reveal as the root cause?", options: ["A detection/response gap (long dwell time), not the mundane initial access", "The phishing email alone", "The firewall brand", "The user's password length"], correctIndex: 0, explanation: "Damage comes from months unseen; the gaps where controls didn't fire are the durable fixes." },
        { id: "rca-06-q7", type: "Drive RCA", challenge: "From sequence to cause.", text: "How does the timeline feed the RCA techniques?", options: ["Per pivotal step, ask which control should have fired and why it didn't (5 Whys) or model the failed layers (fault tree)", "It replaces 5 Whys and fault trees", "It ends the analysis", "It only lists indicators"], correctIndex: 0, explanation: "The timeline answers 'what happened'; the techniques answer 'why it was possible.'" },
        { id: "rca-06-q8", type: "Failure", challenge: "Symptom report.", text: "What does a breach report that lists indicators but never reconstructs the ordered sequence achieve?", options: ["It documents the symptom, not the cause — missing the per-step control failures", "A complete RCA", "Legal defensibility", "Root-cause closure"], correctIndex: 0, explanation: "The ordered sequence and per-step control gaps are where the breach's root causes live." },
      ],
    },
  },

  // ─── rca-07: Human & Organizational Factors ──────────────────────────────────
  {
    epochId: "tech-audit-7",
    wonder: { name: "The Swiss Cheese Model", location: "Manchester, England", era: "Present Day", emoji: "🧀" },
    id: "rca-07",
    order: 7,
    title: "Human & Organizational Factors",
    subtitle: "The Swiss Cheese model, latent failures, and Just Culture — why 'human error' is never the answer",
    category: "cybersecurity",
    xp: 260,
    badge: { id: "rca-badge-07", name: "Systems Thinker", emoji: "🧀" },
    challengeType: "quiz",
    info: {
      tagline: "People don't fail alone. Behind almost every 'human error' is a set of latent conditions that loaded the gun long before anyone pulled the trigger.",
      year: 1990,
      overview: [
        "Most investigations eventually reach a person: someone clicked, someone skipped a step, someone approved the change. This is where weak RCA stops and strong RCA begins. Psychologist James Reason's work on organizational accidents showed that serious failures are rarely caused by a single unsafe act — they emerge from the combination of an ordinary human slip with weaknesses that the organization built into the system long before, and that analyzing the person without analyzing the system guarantees recurrence with a different person.",
        "Reason's Swiss Cheese model is the standard picture. Every defense layer — training, procedures, technical controls, supervision, alarms — is a slice of cheese, and every slice has holes (weaknesses). The layers usually cover for each other; an accident happens when the holes momentarily line up so a hazard passes through every slice. Two kinds of holes matter:\n- Active failures — unsafe acts at the 'sharp end' (the click, the mistyped command, the skipped check). Visible, immediate, easy to blame.\n- Latent conditions — weaknesses at the 'blunt end' created by design choices, budget pressure, understaffing, deferred maintenance, and tolerated workarounds. They sit dormant, sometimes for years, until an active failure finds them.",
        "Latent conditions are the investigator's real quarry because they are stable and fixable. The analyst who clicked the phishing link will be a different analyst next time; the missing MFA, the alert nobody owns, and the workload that rewards speed over care will be exactly the same. Reason's point is that the sharp-end act is merely the trigger — the system determined how much damage one ordinary slip could do.",
        "Just Culture is the operating policy that makes this analysis possible. It distinguishes three behaviors with three different responses:\n- Human error (an honest slip in a system that allowed it) — console the person, fix the system.\n- At-risk behavior (a shortcut that drifted into normal use) — coach the person, fix the incentives that made the shortcut pay.\n- Reckless behavior (conscious, gross disregard of a known substantial risk) — discipline; genuinely rare.\nThe distinction matters for evidence quality: in a blame culture people stop reporting near-misses and shade their accounts, and the investigation loses the facts it needs. Blamelessness is not softness — it is an evidence-preservation strategy.",
        "For auditors and security teams this changes what a finding looks like. 'User clicked a phishing link' is not a cause; the cause is whatever made the click easy (the lookalike domain passed the filter), consequential (no MFA behind the password), and invisible (no anomalous-login alerting). The corrective action 'retrain the user' is blame in disguise — it fails the causation test (a trained user still slips) and the control test (you cannot patch a human). The Swiss Cheese question for every human-factor finding is: which latent holes let this ordinary act become an incident?",
      ],
      technical: {
        title: "Working the Human Layer Without Blame",
        body: [
          "Separate the sharp end from the blunt end. For every unsafe act, list the latent conditions that shaped it: interface design, time pressure, staffing, conflicting incentives, tolerated workarounds, missing guardrails. The act gets one line in the report; the conditions get the corrective actions.",
          "Apply the substitution test: would another qualified person, in the same context with the same information and pressures, plausibly have done the same thing? If yes, the system is the cause and 'be more careful' is not a fix. If no, ask what was different about the context before concluding anything about the person.",
          "Triage behavior with Just Culture categories — error / at-risk / reckless — and match the response (console + fix system / coach + fix incentives / discipline). Misclassifying error as recklessness destroys reporting; misclassifying recklessness as error destroys accountability. Both misclassifications corrupt future evidence.",
          "Audit the corrective actions for blame-in-disguise: 'retraining,' 'reminder emails,' and 'updated policy' as the only actions mean the latent conditions survived. Demand at least one fix that removes or shrinks a hole in a defense layer — an engineering control, a guardrail, a detection — so the same slip next time hits cheese instead of a hole.",
        ],
        codeExample: {
          label: "Walking a phishing click past 'human error'",
          code: `ACTIVE FAILURE:  analyst clicked a credential-phish link
WHY easy?        lookalike domain passed the mail filter        [latent]
WHY likely?      600-msg/day queue; success measured on speed   [latent]
WHY consequential? no MFA -> stolen password = full access      [latent]
WHY undetected?  no impossible-travel alert on the login        [latent]
JUST CULTURE:    human error, not recklessness
                 -> console the analyst, fix the system
CORRECTIVE:      MFA + lookalike-domain detection + workload review
# 'retrain the user' would treat the trigger and leave the gun loaded`,
        },
      },
      flowchart: `flowchart LR
  H["Hazard / threat"] --> L1["Defense layer 1 (hole: latent)"]
  L1 --> L2["Defense layer 2 (hole: latent)"]
  L2 --> L3["Defense layer 3 (hole: active slip)"]
  L3 --> A["Holes align -> incident"]
  F["Fix latent conditions"] -.->|shrinks the holes| L1`,
      examples: [
        {
          label: "Just Culture triage — three behaviors, three responses",
          code: `human error    honest slip in a system that allowed it
               -> console the person; FIX THE SYSTEM
at-risk        shortcut that drifted into normal use
               -> coach the person; fix the incentives that made it pay
reckless       conscious, gross disregard of known substantial risk
               -> discipline (genuinely rare)
substitution test: would another qualified person, same context,
plausibly have done the same?  yes -> the system is the cause`,
        },
      ],
      incident: {
        title: "Tenerife — When the Latent Conditions Aligned (1977)",
        when: "March 27, 1977",
        where: "Los Rodeos Airport, Tenerife, Canary Islands",
        impact: "583 deaths — the deadliest aviation accident in history; it transformed how the industry treats human and organizational factors",
        body: [
          "A terrorist bomb at Gran Canaria diverted heavy traffic to Los Rodeos, a small fog-prone airport never built for it. Two Boeing 747s — KLM 4805 and Pan Am 1736 — ended up taxiing on the same runway in thickening fog. The KLM captain, the airline's most senior training pilot, began his takeoff roll without a takeoff clearance; the Pan Am jet was still on the runway. The collision killed 583 people. The proximate cause was unambiguous: a premature takeoff by a highly experienced captain.",
          "The investigation's lasting value is what it found behind that act. The captain was under duty-time pressure — new Dutch regulations meant further delay could strand the flight and crew. Radio discipline failed at the worst moment: two transmissions overlapped and cancelled into a squeal (a heterodyne), so the crew never clearly heard that Pan Am was still taxiing. Ambiguous phraseology ('we are now at takeoff') meant the tower and the cockpit understood different things. And the cockpit's steep authority gradient meant the flight engineer's doubt — 'is he not clear, that Pan American?' — was waved off by the captain, and not pressed.",
          "Every one of those is a latent condition: schedule pressure, congestion from the diversion, fog, non-standard phraseology, fragile radio procedure, and a culture in which juniors did not insist when a senior was wrong. The industry's response was systemic, not punitive: Crew Resource Management (CRM) training that legitimizes challenge from junior crew, standardized unambiguous phraseology ('cleared for takeoff' reserved for exactly that), and read-back requirements. Aviation did not fix Tenerife by telling captains to be more careful — it shrank the holes in the slices.",
          "The transfer to security and audit is direct. The junior analyst who doesn't question a senior engineer's risky change, the ambiguous change-approval message both sides read differently, the pressure of a release deadline 'flattening' a review — these are Tenerife's latent conditions wearing IT clothes. When an investigation finds a person at the sharp end, the Tenerife question is the right one: what pressures, ambiguities, and authority gradients made that act likely — and which of them are still in place today?",
        ],
      },
      diagram: {
        nodes: [
          { label: "Active Failure", sub: "the sharp-end slip", type: "attacker" },
          { label: "Latent Conditions", sub: "system weaknesses", type: "system" },
          { label: "Holes Align", sub: "defenses pass-through", type: "victim" },
          { label: "Fix the System", sub: "shrink latent holes", type: "result" },
        ],
      },
      timeline: [
        { year: 1977, event: "Tenerife disaster — latent conditions align behind a sharp-end act" },
        { year: 1990, event: "James Reason's 'Human Error' formalizes active vs latent failures (Swiss Cheese)", highlight: true },
        { year: 2001, event: "David Marx's 'Just Culture' framework: error vs at-risk vs reckless" },
        { year: 2012, event: "Blameless postmortems carry the framework into tech (Etsy, then Google SRE)" },
      ],
      keyTakeaways: [
        "Serious failures combine an ordinary human slip (active failure) with organizational weaknesses (latent conditions) built long before",
        "Swiss Cheese model: defenses are slices with holes; incidents happen when the holes momentarily align — so fix the holes, not the person",
        "Latent conditions are the real quarry: the person changes next time, but the missing MFA and unowned alert will be exactly the same",
        "Just Culture triage: human error → console + fix system; at-risk → coach + fix incentives; reckless (rare) → discipline",
        "Substitution test: if another qualified person would plausibly have done the same, the system is the cause",
        "Blamelessness is an evidence strategy — blame cultures dry up near-miss reporting and corrupt the facts investigations need",
        "'Retrain the user' as the only corrective action is blame in disguise — it fails both the causation and control tests",
      ],
      references: [
        { title: "James Reason — Human error: models and management (BMJ)", url: "https://www.bmj.com/content/320/7237/768" },
        { title: "SKYbrary — Just Culture", url: "https://skybrary.aero/articles/just-culture" },
      ],
    },
    quiz: {
      questions: [
        { id: "rca-07-q1", type: "Model", challenge: "The picture.", text: "What does the Swiss Cheese model describe?", options: ["Defense layers as slices with holes (weaknesses); an incident occurs when the holes momentarily align and a hazard passes through every layer", "A network topology", "A blame assignment chart", "A backup rotation scheme"], correctIndex: 0, explanation: "Defenses usually cover for each other; alignment of weaknesses is what lets a hazard through." },
        { id: "rca-07-q2", type: "Two Holes", challenge: "Active vs latent.", text: "How do active failures and latent conditions differ?", options: ["Active = sharp-end unsafe acts (the click, the slip); latent = blunt-end system weaknesses (design, pressure, staffing) that lie dormant until triggered", "Active failures are hardware, latent are software", "Latent failures are the user's fault", "They are synonyms"], correctIndex: 0, explanation: "The act triggers; the latent conditions determine how much damage one ordinary slip can do." },
        { id: "rca-07-q3", type: "Quarry", challenge: "What to fix.", text: "Why are latent conditions the investigator's real target?", options: ["They are stable and fixable — the person changes next time, but the missing MFA and unowned alert stay exactly the same", "They are easier to blame", "They are always technical", "They can be fixed by retraining"], correctIndex: 0, explanation: "Fixing latent conditions changes the outcome of the next slip; blaming the person changes nothing." },
        { id: "rca-07-q4", type: "Just Culture", challenge: "Three behaviors.", text: "What are Just Culture's three categories and responses?", options: ["Human error → console + fix system; at-risk behavior → coach + fix incentives; reckless behavior → discipline (rare)", "Warn, suspend, terminate", "Ignore, log, escalate", "Novice, expert, manager"], correctIndex: 0, explanation: "Matching the response to the behavior preserves both reporting culture and accountability." },
        { id: "rca-07-q5", type: "Test", challenge: "Substitute.", text: "What is the substitution test?", options: ["Ask whether another qualified person, in the same context with the same pressures, would plausibly have done the same — if yes, the system is the cause", "Swap the failed component and retest", "Replace the employee and re-run the task", "Test a substitute control in staging"], correctIndex: 0, explanation: "It separates individual culpability from system-shaped behavior." },
        { id: "rca-07-q6", type: "Evidence", challenge: "Why blameless.", text: "Why does blame destroy investigations?", options: ["People stop reporting near-misses and shade their accounts, so the investigation loses the facts it needs — blamelessness preserves evidence", "Blame is illegal", "Blame slows the meeting down", "Investigators prefer kindness"], correctIndex: 0, explanation: "Blamelessness is an evidence-quality strategy, not softness." },
        { id: "rca-07-q7", type: "Tenerife", challenge: "The lesson.", text: "What was the deeper finding behind the KLM captain's premature takeoff at Tenerife?", options: ["Latent conditions aligned — duty-time pressure, fog and congestion from a diversion, ambiguous phraseology, overlapping radios, and an authority gradient that muted the crew's doubts", "The captain was poorly trained", "The aircraft was defective", "The airport had no tower"], correctIndex: 0, explanation: "Aviation's response (CRM, standard phraseology) fixed the system, not the individual." },
        { id: "rca-07-q8", type: "Trap", challenge: "Blame in disguise.", text: "Why does 'retrain the user' fail as the sole corrective action?", options: ["It fails the causation test (a trained user still slips) and the control test (you can't patch a human) while leaving every latent hole open", "Training is too expensive", "Users refuse training", "It violates Just Culture discipline rules"], correctIndex: 0, explanation: "At least one action must shrink a hole in a defense layer — a guardrail, control, or detection." },
      ],
    },
  },

  // ─── rca-08: Cyber-Incident Causal Analysis ──────────────────────────────────
  {
    epochId: "tech-audit-7",
    wonder: { name: "The Breach War Room", location: "Atlanta, Georgia", era: "Present Day", emoji: "🕸️" },
    id: "rca-08",
    order: 8,
    title: "Cyber-Incident Causal Analysis",
    subtitle: "Walk the kill chain — every attacker step that worked is a control that failed, and every failed control has its own root cause",
    category: "cybersecurity",
    xp: 270,
    badge: { id: "rca-badge-08", name: "Breach Analyst", emoji: "🕸️" },
    challengeType: "quiz",
    info: {
      tagline: "An attacker needs every step of the chain to work. Each step that worked is a control that failed — and each failed control has a systemic reason underneath it.",
      year: 2017,
      overview: [
        "Breach RCA has a structural advantage over most failure analysis: an intrusion is a sequence of attacker steps, and the defender only had to break one of them. That turns the forensic timeline (rca-06) into a checklist of questions. For every step the attacker completed, ask: which control should have prevented or detected this step, how exactly did that control fail, and what process or organizational condition produced that failure? The answers, laid out step by step, are the breach's causal analysis.",
        "Attack frameworks supply the scaffolding so nothing gets skipped:\n- The Lockheed Martin Cyber Kill Chain (reconnaissance → weaponization → delivery → exploitation → installation → command-and-control → actions on objectives) gives the coarse phases.\n- MITRE ATT&CK gives the fine grain — each timeline step maps to a tactic and technique, and each technique has known preventive and detective controls to test against.\nThe frameworks are not the analysis; they are the checklist that keeps the analysis honest and complete.",
        "For each step, build a causal row: attacker action → expected control → how the control failed → why. Control failures fall into a small set of modes — the control was missing entirely, present but misconfigured, blind (a coverage gap), ignored (it fired and nobody acted), or bypassed (it worked as designed and the design was inadequate). Classify the mode first, then run 5 Whys on it to reach the process-level cause: the scan scope that doesn't track the asset inventory, the alert queue with no owner, the segmentation project that was deferred three budget cycles in a row.",
        "Equifax (2017) is the canonical worked example. The trigger was an unpatched Apache Struts vulnerability (CVE-2017-5638) on a public web application — but the causal matrix runs much deeper. The vulnerable host was missed by scanning because the asset inventory was incomplete. The attackers operated for 76 days undetected because the device that should have inspected encrypted traffic had an expired certificate — expired for about ten months. Once inside, they queried 48 databases because the legacy environment was flat, and they found plaintext credentials that should never have existed. One CVE; at least five independent systemic causes.",
        "The output of breach RCA is a causal matrix, not a patch ticket. Aggregating root causes across steps reveals which ones are systemic — the same cause appearing behind multiple steps is the one with the most leverage. A breach response that patches the entry CVE and closes the incident has fixed exactly one row of the matrix; the detection gap, the flat network, and the inventory hole are still waiting for the next CVE. The matrix converts one painful incident into a prioritized control-improvement program, which is the only form of repayment a breach ever offers.",
      ],
      technical: {
        title: "The Per-Step Causal Matrix",
        body: [
          "Start from the evidence-backed timeline (rca-06) and map each step to an ATT&CK tactic/technique. The mapping forces completeness: steps with no technique assigned are usually steps you haven't actually evidenced yet.",
          "For each step, identify the expected preventive control AND the expected detective control — most steps should have two answers. Then classify each failure mode: missing / misconfigured / blind (coverage gap) / ignored (fired, no action) / bypassed (design inadequate). The mode determines which 'why' question to ask next.",
          "Run 5 Whys on each control failure down to a process cause — ownership, scope, budget, change management, monitoring of the control itself. 'The certificate expired' is not a root cause; 'no process monitors the expiry of certificates that security tooling depends on' is.",
          "Aggregate across rows: root causes that recur behind multiple steps (incomplete inventory, unowned alerts, flat network) are the systemic ones — fix those first. Rank corrective actions by how many future attack paths each one cuts, not by how visible the fix is.",
        ],
        codeExample: {
          label: "Equifax 2017 — the breach as a causal matrix",
          code: `STEP (ATT&CK)              CONTROL THAT FAILED        ROOT CAUSE
initial access: Struts     patching (SLA missed)      patch process had no
CVE-2017-5638 exploited                               verified closure loop
  same step                vuln scanning (blind)      host missing from scans:
                                                      incomplete asset inventory
c2 + exfil: 76 days        TLS inspection (blind)     monitoring device cert
undetected                                            expired ~10 months; nobody
                                                      monitored the monitor
lateral: 48 databases      segmentation (missing)     flat legacy network;
queried                                               project deferred repeatedly
collection: plaintext      secret management          no credential-vaulting
credentials found          (missing)                  standard enforced
# one CVE -> five systemic causes; patching alone fixes none of the last four`,
        },
      },
      flowchart: `flowchart LR
  T["Forensic timeline (ordered steps)"] --> M["Map each step to ATT&CK"]
  M --> C["Expected control per step (prevent + detect)"]
  C --> F["Classify failure mode"]
  F --> W["5 Whys -> process root cause"]
  W --> AGG["Aggregate repeats -> systemic causes"]
  AGG --> PRI["Prioritize by attack paths cut"]`,
      examples: [
        {
          label: "Control failure modes — classify before you ask why",
          code: `missing        control doesn't exist           (no MFA on VPN)
misconfigured  exists, wrong settings          (EDR in detect-only mode)
blind          coverage gap                    (host not in scan scope)
ignored        fired, nobody acted             (alert fatigue, no owner)
bypassed       worked as designed; design      (signed LOLBin allowed by
               was inadequate                   application allow-list)`,
        },
      ],
      incident: {
        title: "Equifax — One CVE, Five Systemic Causes (2017)",
        when: "May 13 – July 30, 2017 (disclosed September 7, 2017)",
        where: "Equifax, Atlanta, Georgia",
        impact: "Personal data of ~147 million people; over $1.4B in remediation and settlement costs; CEO, CIO, and CSO departures; GAO and congressional investigations",
        body: [
          "On March 7, 2017, the Apache Struts vulnerability CVE-2017-5638 was disclosed with a patch available; exploitation in the wild began within days. Equifax's internal alert went out on March 9 telling system owners to patch within 48 hours. The owners of the consumer-dispute portal — a public-facing legacy application running vulnerable Struts — never patched it, and a scan run days later didn't flag the host. Attackers exploited it on May 13 and were not discovered until July 29: 76 days of free movement.",
          "The official investigations (GAO report GAO-18-559 and the House Oversight Committee report) read like a causal-matrix textbook. The scan missed the host because the asset inventory was incomplete. The intrusion stayed invisible because the device performing TLS inspection had an expired certificate — it had been expired for roughly ten months, so encrypted attacker traffic was never inspected; the breach was noticed within a day of the certificate finally being renewed. Inside, the attackers reached 48 databases across a flat legacy environment and found credentials stored in plaintext. Every step of the kill chain maps to a distinct failed control with a distinct process cause.",
          "The public narrative initially did the opposite of RCA: the former CEO's congressional testimony pointed to 'a single employee' who failed to forward the patch email. That is the single-root-cause fallacy fused with blame-the-person — and the House report rejected it, concluding the breach was 'entirely preventable' and caused by systemic failures in IT management, asset inventory, patch verification, and security tooling oversight. One person's missed email cannot be a root cause when the process has no verification loop behind it; the substitution test fails instantly.",
          "Equifax's repayment program is the model takeaway: the post-breach transformation spent on inventory automation, certificate lifecycle monitoring, segmentation, and credential vaulting — the matrix's right-hand column, not just the Struts patch. That is what 'learning from a breach' means in practice: the entry CVE gets one corrective action; the systemic causes get the program. Any breach report whose action list is one patch and one disciplinary referral has documented the intrusion and missed the cause.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attack Steps", sub: "kill chain / ATT&CK", type: "attacker" },
          { label: "Failed Controls", sub: "one per step", type: "system" },
          { label: "Process Causes", sub: "5 Whys each", type: "victim" },
          { label: "Causal Matrix", sub: "prioritized program", type: "result" },
        ],
      },
      timeline: [
        { year: 2011, event: "Lockheed Martin publishes the Cyber Kill Chain" },
        { year: 2015, event: "MITRE ATT&CK released — per-technique controls become checkable" },
        { year: 2017, event: "Equifax: one CVE, 76 days dwell, five systemic causes", highlight: true },
        { year: 2018, event: "GAO-18-559 and the House report document the full causal chain" },
      ],
      keyTakeaways: [
        "Breach RCA walks the attack path step by step: each completed attacker step = a failed control = a 'why' to chase to a process cause",
        "Kill Chain phases and ATT&CK techniques are the checklist that keeps the analysis complete — they scaffold the questions, not the answers",
        "Classify each control failure first: missing, misconfigured, blind, ignored, or bypassed — the mode determines the right 'why'",
        "Run 5 Whys per failed control to a process cause: 'cert expired' is a finding; 'nobody monitors the monitors' is a root cause",
        "Aggregate across steps — root causes recurring behind multiple steps are the systemic ones with the most leverage",
        "Equifax: the Struts CVE was the trigger; inventory gaps, an expired inspection cert (~10 months), a flat network, and plaintext credentials were the causes",
        "Patching the entry CVE fixes one matrix row — a breach response without the full matrix leaves the next attack path intact",
      ],
      references: [
        { title: "GAO-18-559 — Equifax Data Breach: Actions Taken and Lessons Learned", url: "https://www.gao.gov/products/gao-18-559" },
        { title: "MITRE ATT&CK", url: "https://attack.mitre.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "rca-08-q1", type: "Advantage", challenge: "The defender's edge.", text: "What structural advantage does breach RCA exploit?", options: ["An intrusion is a sequence of steps the attacker ALL needed to work — so each completed step is a failed control with its own cause to find", "Attackers always make mistakes", "Breaches have a single root cause", "Logs are always complete"], correctIndex: 0, explanation: "The timeline becomes a checklist: per step, which control should have stopped it and why didn't it?" },
        { id: "rca-08-q2", type: "Scaffolding", challenge: "Frameworks' role.", text: "What role do the Kill Chain and MITRE ATT&CK play in breach RCA?", options: ["They scaffold the analysis — phases and techniques are a completeness checklist of questions, not the answers themselves", "They replace the forensic timeline", "They assign blame", "They are only for red teams"], correctIndex: 0, explanation: "Mapping steps to techniques forces you to evidence every step and test the expected controls." },
        { id: "rca-08-q3", type: "Modes", challenge: "Classify first.", text: "What are the five control-failure modes to classify before asking why?", options: ["Missing, misconfigured, blind (coverage gap), ignored (fired but no action), bypassed (design inadequate)", "Fast, slow, manual, automated, hybrid", "Red, yellow, green, blue, black", "Hardware, software, network, people, process"], correctIndex: 0, explanation: "The failure mode determines which 'why' question the 5 Whys should chase." },
        { id: "rca-08-q4", type: "Depth", challenge: "Finding vs cause.", text: "Why is 'the certificate expired' not a root cause in the Equifax analysis?", options: ["The root cause is the missing process — nothing monitored the expiry of certificates that security tooling depended on ('nobody monitors the monitors')", "Certificates can't expire", "It was the root cause", "Expiry was the attacker's fault"], correctIndex: 0, explanation: "5 Whys continues past the technical state to the process that allowed it to persist ~10 months." },
        { id: "rca-08-q5", type: "Equifax", challenge: "The matrix.", text: "Beyond the unpatched Struts CVE, what systemic causes did the Equifax investigations find?", options: ["Incomplete asset inventory (scan blind spot), an expired TLS-inspection certificate (~10 months — 76 days dwell), a flat legacy network (48 databases reached), and plaintext credentials", "Just the missed patch", "A zero-day with no defense", "Insider collusion"], correctIndex: 0, explanation: "One CVE, five independent systemic causes — patching alone fixes one matrix row." },
        { id: "rca-08-q6", type: "Fallacy", challenge: "The CEO's answer.", text: "What was wrong with blaming 'a single employee' who didn't forward the patch email?", options: ["It's the single-root-cause fallacy plus blame: the substitution test fails instantly because the process had no verification loop behind any one person", "The employee didn't exist", "Email is never used for patching", "Congress required a different answer"], correctIndex: 0, explanation: "The House report rejected it: the breach was 'entirely preventable' due to systemic IT-management failures." },
        { id: "rca-08-q7", type: "Aggregate", challenge: "Leverage.", text: "Why aggregate root causes across all matrix rows?", options: ["Causes recurring behind multiple steps are systemic — fixing them cuts the most future attack paths, so they rank first", "To make the report longer", "To find someone to blame", "Aggregation is only for metrics teams"], correctIndex: 0, explanation: "Rank corrective actions by attack paths cut, not by visibility of the fix." },
        { id: "rca-08-q8", type: "Output", challenge: "What you ship.", text: "What is the proper output of a breach RCA?", options: ["A causal matrix that converts the incident into a prioritized control-improvement program — not just a patch ticket for the entry CVE", "A patched server", "A press release", "A disciplinary referral"], correctIndex: 0, explanation: "The detection gap, flat network, and inventory hole are still waiting for the next CVE otherwise." },
      ],
    },
  },

  // ─── rca-09: Corrective & Preventive Action (CAPA) ───────────────────────────
  {
    epochId: "tech-audit-7",
    wonder: { name: "The Hierarchy of Controls", location: "Quality Engineering Lab", era: "Present Day", emoji: "🛠️" },
    id: "rca-09",
    order: 9,
    title: "Corrective & Preventive Action",
    subtitle: "From root cause to a fix that sticks — CAPA, the hierarchy of controls, and verified effectiveness",
    category: "cybersecurity",
    xp: 280,
    badge: { id: "rca-badge-09", name: "Fix Verifier", emoji: "🛠️" },
    challengeType: "quiz",
    info: {
      tagline: "Finding the root cause is half the job. A fix that isn't engineered, owned, and verified is just a promise — and promises regress.",
      year: 1987,
      overview: [
        "Root cause analysis without follow-through is expensive theater. CAPA — Corrective and Preventive Action — is the discipline, born in quality management (ISO 9001, the FDA's quality-system regulation), that turns causes into durable fixes. It distinguishes three levels of response:\n- Correction — fix the instance (restore the service, patch the host). Necessary, never sufficient.\n- Corrective action — eliminate the root cause so THIS problem cannot recur.\n- Preventive action — extend the fix to places the problem hasn't happened yet but could.\nAn incident response that stops at correction has treated the symptom by definition.",
        "Not all fixes are equal, and the hierarchy of controls (adapted from occupational safety, NIOSH) ranks them by how little they depend on humans behaving well:\n- Elimination — remove the hazard entirely (no long-lived credentials exist to leak).\n- Engineering controls — guardrails that act by themselves (pre-commit secret scanner blocks the push).\n- Administrative controls — policies, procedures, checklists (a PR review step).\n- Training/awareness — the weakest layer alone (a slide deck).\nThe higher the fix sits, the less it erodes. A root cause answered only with a memo and a training module has, in practice, been accepted rather than fixed.",
        "The CAPA loop gives each action a lifecycle: finding → owner → action plan with acceptance criteria → implementation → verification of effectiveness → closure with evidence. Two details carry most of the weight. Every action needs a single named owner and a deadline — 'the team' owns nothing. And the acceptance criteria must be written when the action is opened, not negotiated at closure time, or closure quietly becomes 'we did something.'",
        "Verification of effectiveness is the step that separates real CAPA from ticket-closing, and it is not the same as checking that work was done. Implementation verification asks 'was the scanner deployed?'; effectiveness verification asks 'does the failure mode still reproduce?' — re-run the attack step, re-audit the control, watch the metric for a defined period. The most reliable verification is adversarial: if the root cause was 'rogue hosts escape scan scope,' the test is planting a rogue host and timing its detection, not reading the deployment ticket.",
        "The meta-signal of a broken CAPA program is the repeat finding. When the same issue returns — next audit, next incident — exactly one of three things happened: the root cause was wrong (the RCA failed), the fix was too low on the hierarchy (training where engineering was needed), or effectiveness was never verified (closed on assertion). Repeat-finding rate is therefore the single best KPI for an organization's entire RCA-to-CAPA pipeline, and auditors weight it heavily: one repeat finding tells them more about the control environment than ten new ones.",
      ],
      technical: {
        title: "Engineering Fixes That Don't Regress",
        body: [
          "Map every root cause to the highest feasible level of the hierarchy: can the hazard be eliminated? If not, can a guardrail enforce the safe path automatically? Document explicitly when only an administrative fix is possible and why — that documentation is the honest record of accepted residual risk.",
          "Write the action like an engineering task: single owner, deadline, and acceptance criteria defined at opening ('weekly diff of inventory vs scan scope shows zero unscanned hosts for 90 days'). Vague actions ('improve patching') are unclosable and therefore unfalsifiable.",
          "Verify effectiveness against the failure mode, not the work: re-test the attack step, replay the audit procedure, or watch the agreed metric across the verification window. Close only with evidence attached. If the test can't be defined, the root cause statement is probably too vague to be real.",
          "Convert the fix into a continuous control wherever possible — a monitored rule, a scheduled check, a CI gate — so the inevitable drift gets caught by machinery instead of by the next incident. This is where CAPA hands off to continuous controls monitoring (tech-audit-4).",
        ],
        codeExample: {
          label: "A CAPA record for one root cause (from the breach matrix)",
          code: `ROOT CAUSE:   incomplete asset inventory -> hosts escape scan scope
CORRECTION:   the missed host scanned + patched           [instance]
CORRECTIVE:   provisioning hook auto-enrolls every new    [this cause]
              system into inventory + scan scope
PREVENTIVE:   same hook extended to containers + SaaS     [elsewhere]
HIERARCHY:    engineering control (not a memo)
OWNER/DUE:    infra-platform lead / 2026-06-30
VERIFY (90d): weekly diff inventory-vs-scope = 0 unscanned hosts
              red-team plants a rogue VM -> detected < 24h
CLOSE:        evidence attached; repeat-finding KPI tracked
# closed on proof the failure mode no longer reproduces - not on a ticket`,
        },
      },
      flowchart: `flowchart LR
  R["Root cause"] --> P["Plan: single owner + acceptance criteria"]
  P --> H["Pick highest feasible level: eliminate > engineer > admin > train"]
  H --> I["Implement"]
  I --> V{"Effectiveness verified vs failure mode?"}
  V -->|yes| C["Close with evidence -> continuous control"]
  V -->|no| RO["Re-open: wrong cause or weak fix"] --> R`,
      examples: [
        {
          label: "Hierarchy of controls — same cause, four strengths",
          code: `cause: engineers paste secrets into repositories
train:      annual secure-coding deck              [weakest: erodes]
admin:      policy + a PR checklist line           [depends on humans]
engineer:   pre-commit + CI secret scanner         [blocks the push]
eliminate:  short-lived creds issued from a vault  [nothing long-lived
                                                    exists to paste]
rule: answer a root cause as high on this ladder as feasible`,
        },
      ],
      incident: {
        title: "WannaCry and the NHS — The Warning That Wasn't Verified (2017)",
        when: "May 12, 2017",
        where: "UK National Health Service (80 of 236 trusts affected)",
        impact: "~19,000 cancelled appointments and operations, ambulance diversions, an estimated £92M in costs — from a worm whose patch had existed for two months",
        body: [
          "WannaCry spread through the EternalBlue SMBv1 exploit. Microsoft had shipped the patch (MS17-010) on March 14, 2017 — almost two months before the outbreak. NHS Digital's CareCERT service had issued alerts in March and April explicitly instructing organizations to apply it. When the worm hit on May 12, unpatched and legacy Windows systems across dozens of NHS trusts were encrypted within hours, forcing hospitals to divert ambulances and cancel thousands of appointments.",
          "The National Audit Office investigation found the uncomfortable causal truth: the warning system had worked, and the response system did not exist. The Department of Health 'had no formal mechanism for assessing whether local NHS organisations had complied with their advice' — alerts went out, and nothing verified that anyone acted. Trusts that had patched or blocked SMB at the boundary sailed through; trusts that hadn't were encrypted. The variation wasn't knowledge — everyone got the same alert — it was the absence of an enforcement and verification loop behind the advice.",
          "In CAPA terms, the NHS had corrections available (the patch), a corrective instruction (the CareCERT alert), and no verification of effectiveness — the step that turns advice into a control. An alert that nobody confirms is an administrative control at its weakest: it depends entirely on every recipient independently choosing to comply, with no feedback when they don't. The NAO's recommendations were verification machinery: roll-call compliance reporting, follow-up on critical alerts, and tested response plans.",
          "The transfer to every security program is direct. Vulnerability advisories, audit findings, and policy bulletins are all CareCERT alerts in miniature — they change nothing by themselves. The CAPA question for each is: who is the named owner, what is the deadline, and what independent check confirms the failure mode is actually gone? 'We sent the memo' is the modern 'we issued the alert.' WannaCry's NHS lesson is that the gap between advised and verified is where worms live.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Root Cause", sub: "from the RCA", type: "attacker" },
          { label: "Action + Owner", sub: "criteria at opening", type: "system" },
          { label: "Verify Effectiveness", sub: "failure mode retested", type: "victim" },
          { label: "Durable Control", sub: "monitored, no regress", type: "result" },
        ],
      },
      timeline: [
        { year: 1987, event: "ISO 9001 published — corrective/preventive action enters quality systems" },
        { year: 1996, event: "FDA quality-system regulation makes CAPA a regulated discipline" },
        { year: 2017, event: "WannaCry: advised-but-unverified patching cripples the NHS", highlight: true },
        { year: 2018, event: "NAO report: 'no formal mechanism' to verify compliance — the missing CAPA loop" },
      ],
      keyTakeaways: [
        "CAPA's three levels: correction fixes the instance; corrective action eliminates this root cause; preventive action extends the fix elsewhere",
        "Rank fixes by the hierarchy of controls: elimination > engineering > administrative > training — the higher, the less it depends on humans",
        "A root cause answered only with a memo and training has been accepted, not fixed",
        "Every action needs a single named owner, a deadline, and acceptance criteria written at opening — 'the team' owns nothing",
        "Verify effectiveness against the failure mode (replay the attack step, watch the metric), not against the work being done",
        "Repeat findings mean exactly one of three failures: wrong root cause, fix too low on the hierarchy, or closure without verification",
        "WannaCry/NHS: alerts without a verification loop are advice, not control — the gap between advised and verified is where worms live",
      ],
      references: [
        { title: "NAO — Investigation: WannaCry cyber attack and the NHS", url: "https://www.nao.org.uk/reports/investigation-wannacry-cyber-attack-and-the-nhs/" },
        { title: "NIOSH — Hierarchy of Controls", url: "https://www.cdc.gov/niosh/topics/hierarchy/" },
      ],
    },
    quiz: {
      questions: [
        { id: "rca-09-q1", type: "Levels", challenge: "Three responses.", text: "How do correction, corrective action, and preventive action differ?", options: ["Correction fixes the instance; corrective action eliminates the root cause so it can't recur; preventive action extends the fix to where it hasn't happened yet", "They are synonyms", "Correction is permanent, the others temporary", "Preventive action means more training"], correctIndex: 0, explanation: "Stopping at correction treats the symptom by definition." },
        { id: "rca-09-q2", type: "Hierarchy", challenge: "Rank the fixes.", text: "What is the hierarchy of controls, strongest to weakest?", options: ["Elimination > engineering controls > administrative controls > training/awareness", "Training > policy > firewall > deletion", "Detect > respond > recover > identify", "Cheap > fast > visible > thorough"], correctIndex: 0, explanation: "The ranking measures how little each fix depends on humans behaving well — higher erodes less." },
        { id: "rca-09-q3", type: "Memo Trap", challenge: "Weakest answer.", text: "What does it mean when a root cause is answered only with a memo and a training module?", options: ["The risk has effectively been accepted rather than fixed — administrative/training controls alone erode and depend on everyone complying", "The CAPA is complete", "The cause was organizational so that's appropriate", "Engineering controls were impossible"], correctIndex: 0, explanation: "If only an administrative fix is feasible, document why — that's an honest record of residual risk." },
        { id: "rca-09-q4", type: "Ownership", challenge: "Who and when.", text: "What must every corrective action carry from the moment it's opened?", options: ["A single named owner, a deadline, and acceptance criteria defined at opening — not negotiated at closure", "A budget line and a steering committee", "At least three owners for resilience", "A press statement"], correctIndex: 0, explanation: "'The team' owns nothing, and criteria written at closure time quietly become 'we did something.'" },
        { id: "rca-09-q5", type: "Verify", challenge: "The separating step.", text: "How does verification of effectiveness differ from implementation verification?", options: ["Implementation asks 'was the work done?'; effectiveness asks 'does the failure mode still reproduce?' — replay the attack step or watch the metric over a window", "They are the same checkbox", "Effectiveness is the auditor's opinion", "Implementation is harder"], correctIndex: 0, explanation: "The most reliable verification is adversarial: plant the rogue host and time its detection." },
        { id: "rca-09-q6", type: "Repeats", challenge: "The meta-signal.", text: "A repeat finding means exactly one of which three failures occurred?", options: ["Wrong root cause (RCA failed), fix too low on the hierarchy, or closure without effectiveness verification", "Bad luck, new attackers, or budget cuts", "Wrong auditor, wrong scope, wrong quarter", "None — repeats are normal"], correctIndex: 0, explanation: "Repeat-finding rate is the best single KPI for the whole RCA-to-CAPA pipeline." },
        { id: "rca-09-q7", type: "WannaCry", challenge: "The NHS lesson.", text: "What causal gap did the NAO find behind the NHS WannaCry impact?", options: ["Alerts instructed patching but 'no formal mechanism' verified compliance — advice without a verification loop is not a control", "The patch didn't exist yet", "The worm was undetectable", "Hospitals had no computers to patch"], correctIndex: 0, explanation: "The patch existed for ~2 months and CareCERT alerts went out; the response/verification system didn't exist." },
        { id: "rca-09-q8", type: "Durability", challenge: "After closure.", text: "How do you keep a verified fix from regressing?", options: ["Convert it into a continuous control — a monitored rule, scheduled check, or CI gate — so drift is caught by machinery, not by the next incident", "Re-send the memo annually", "Archive the CAPA record", "Trust the owner to watch it"], correctIndex: 0, explanation: "This is the handoff from CAPA to continuous controls monitoring." },
      ],
    },
  },

  // ─── rca-10: The RCA Report & Blameless Postmortem (capstone) ────────────────
  {
    epochId: "tech-audit-7",
    wonder: { name: "The Postmortem Review", location: "Site Reliability War Room", era: "Present Day", emoji: "📋" },
    id: "rca-10",
    order: 10,
    title: "The RCA Report & Blameless Postmortem",
    subtitle: "Write it down, share it wide, follow it through — and dodge the six classic RCA failures",
    category: "cybersecurity",
    xp: 290,
    badge: { id: "rca-badge-10", name: "Postmortem Author", emoji: "📋" },
    challengeType: "quiz",
    info: {
      tagline: "An RCA that isn't written, shared, and acted on never happened. The postmortem is how one team's worst day becomes the whole organization's immunity.",
      year: 2012,
      overview: [
        "Everything in this epoch converges on a document. The RCA report (in reliability circles, the postmortem) is the deliverable that makes an investigation real: a summary anyone can read in a minute, the impact in honest numbers, the evidence-backed timeline, the causal analysis with the techniques shown (5 Whys chains, the fishbone, the fault tree, the breach matrix), the root causes and contributing factors clearly separated, the corrective actions with owners and dates, and the lessons worth exporting. It serves three audiences at once — executives (impact and risk), engineers (the detail), and auditors or regulators (the evidence trail) — and a report that serves only one of them will fail the other two when it matters.",
        "The 'blameless' in blameless postmortem is an engineering decision, not a courtesy. The practice entered tech through John Allspaw's 2012 essay at Etsy and was systematized in Google's SRE book: write the document in terms of roles, systems, and decisions — not names — and assume that everyone acted reasonably given the information, tools, and pressures they had at the time (the principle of local rationality). The payoff is evidence quality, the same logic as Just Culture (rca-07) and aviation's confidential reporting systems: people who fear the report shade the facts, and an investigation running on shaded facts produces fiction with formatting.",
        "Six classic failures account for most bad RCAs, and a reviewer should check the document against all of them:\n- Premature closure — stopping at the first plausible cause.\n- Single-root-cause fallacy — forcing one tidy answer, hiding contributors.\n- Blame-as-cause — 'human error' accepted as a final answer.\n- Hindsight bias — judging decisions by what is known now, not what was known then.\n- Action-item graveyard — causes found, fixes never landed.\n- Scope dodge — technical causes only, organizational causes off-limits.\nThe last two are the quiet killers: the analysis was right and nothing changed, or the analysis stopped exactly where it would have gotten uncomfortable.",
        "Follow-through is machinery, not virtue. Action items live in the same tracker as engineering work, each with the CAPA fields from rca-09 (owner, deadline, acceptance criteria, verification). The postmortem review meeting exists to pressure-test the analysis — a facilitator keeps it on learning rather than defense. Repeat incidents get linked ('same class as 2025-198'), because recurrence is the system telling you a previous RCA missed or a previous fix regressed. And the finished document goes into a searchable, org-wide archive: the next on-call engineer at 3 a.m. should find your postmortem, not rediscover your incident.",
        "This stage closes the pipeline the epoch has built: detect, then reconstruct the timeline from evidence (rca-06); ask why with the right technique — 5 Whys for linear chains (rca-03), fishbone for breadth (rca-04), fault tree for combinations (rca-05); walk the human layer without blame (rca-07); for breaches, run the per-step causal matrix (rca-08); convert causes into verified CAPA fixes (rca-09); and ship the postmortem so the learning compounds (rca-10). Organizations that run this loop stop having the same incident twice — which, over the years, is the entire difference between the ones that mature and the ones that repeat.",
      ],
      technical: {
        title: "Anatomy of a Strong RCA Report",
        body: [
          "Structure: summary (2-3 sentences, plain language) → impact (users, duration, data, money) → evidence-backed timeline → causal analysis (show the technique, not just conclusions) → root causes vs contributing factors → corrective actions (owner, date, criteria, verification) → lessons learned. Executives read the top; engineers read the middle; auditors read the trail from every cause back to timeline evidence.",
          "Language rules: neutral and falsifiable. Every causal claim cites timeline evidence; counterfactuals are labeled as such ('had X existed, step 4 would likely have been detected'); no names — roles and systems; no judgment words ('carelessly,' 'obviously,' 'should have known') anywhere in the document.",
          "Fight hindsight bias structurally: record what each decision-maker knew at the time of the decision, then evaluate the decision against that. Write near-miss postmortems with the same rigor — a near miss is the same lesson at almost zero cost, and skipping it wastes the cheapest learning available.",
          "Run the review meeting on learning, not defense: a facilitator (not the incident commander) walks the timeline, challenges each cause against the six classic failures, and confirms every action item has an owner who was in the room. Closure of the postmortem is a separate event from closure of its action items — track both, and report the gap.",
        ],
        codeExample: {
          label: "Postmortem skeleton (blameless, evidence-linked)",
          code: `# INCIDENT 2026-041: customer-data access via phished OAuth grant
SUMMARY   consent-phish -> third-party app granted mailbox.read;
          1,204 accounts affected; contained in 31h
TIMELINE  UTC, every entry linked to its artifact (rca-06)
ANALYSIS  5 Whys per failed control + swiss-cheese layer map
CAUSES    R1 no conditional-access policy on OAuth app grants
          R2 consent-phishing outside email-control coverage
CONTRIB   C1 SOC alert fatigue (2,400 alerts/day/analyst)
ACTIONS   A1 block unverified-publisher app grants
             owner: iam-lead  due: 06-30  verify: replay blocked
          A2 consent-grant anomaly alerting
             owner: soc-lead  due: 07-15  verify: red-team detect <1h
LESSONS   shared org-wide; linked: same class as INC-2025-198
# no names; every cause traces to evidence; every action has an owner`,
        },
      },
      flowchart: `flowchart LR
  I["Incident resolved"] --> D["Draft: timeline + analysis + causes"]
  D --> B["Blameless review (facilitated)"]
  B --> A["Actions: owner + date + criteria"]
  A --> T["Track like engineering work"]
  T --> S["Share org-wide, searchable archive"]
  S --> V["Verify fixes + link repeats"] -.->|immunity compounds| I`,
      examples: [
        {
          label: "The six classic RCA failures — review checklist",
          code: `premature closure     stopped at the first plausible cause
single-root-cause     forced one tidy answer; contributors hidden
blame-as-cause        'human error' accepted as the final answer
hindsight bias        judged on what's known NOW, not known THEN
action-item graveyard causes found; fixes never landed
scope dodge           technical causes only; org causes off-limits
reviewer rule: check every postmortem against all six`,
        },
      ],
      incident: {
        title: "Etsy, Google, and the Blameless Turn (2012–2016)",
        when: "2012–2016",
        where: "Etsy and Google, then industry-wide",
        impact: "Blameless postmortems became the standard mechanism for organizational learning from failure in tech",
        body: [
          "In 2012, Etsy's John Allspaw published 'Blameless PostMortems and a Just Culture,' importing decades of safety-science thinking into web engineering. The argument was practical, not sentimental: an engineer who fears punishment gives you a defensive account; an engineer given safety gives you the details — what they saw, what they assumed, what the tooling told them — and 'those details are the difference between learning and not learning.' Etsy backed the culture with symbols, famously awarding a 'three-armed sweater' to celebrate the most instructive failure, making it explicit that surfacing mistakes was career-safe.",
          "Google systematized the practice in the 2016 SRE book's 'Postmortem Culture: Learning from Failure': defined triggers for when a postmortem is mandatory (user-visible impact, data loss, on-call paging beyond thresholds), a standard document template, review by senior engineers for analytical quality, action items tracked in the same systems as engineering work, and an org-wide searchable archive. The chapter's core claim matches this epoch's: the cost of an incident is paid either way — the postmortem is how you collect what the incident already charged you.",
          "Both drew on aviation's quiet precedent. NASA's Aviation Safety Reporting System (ASRS, est. 1976) collects confidential incident reports from pilots and controllers with limited immunity for honest error — and because reporters are protected, it receives millions of reports that would otherwise never be filed, feeding fixes to procedures, cockpit design, and airspace rules. Aviation's safety record is, in part, an evidence-collection achievement: the industry engineered a way to learn from every near miss instead of only from crashes.",
          "The connecting principle across Etsy, Google, and the ASRS is that blamelessness is an evidence-quality strategy with a compounding return. One team's incident, honestly analyzed and widely shared, becomes everyone's immunity; punish the messenger and each team quietly relearns the same lesson at full price. For auditors and security leaders the takeaway is to inspect the machinery, not the slogans: are postmortems written for real incidents and near misses, do they pass the six-failure checklist, are action items landing, and do repeat incidents get linked? That machinery — not any individual hero — is what reliability and security maturity are made of.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Investigation", sub: "timeline + techniques", type: "attacker" },
          { label: "Postmortem Doc", sub: "blameless, evidenced", type: "system" },
          { label: "Review + Actions", sub: "owners, criteria", type: "victim" },
          { label: "Org Immunity", sub: "shared, compounding", type: "result" },
        ],
      },
      timeline: [
        { year: 1976, event: "NASA's ASRS: confidential, immunity-backed incident reporting for aviation" },
        { year: 2012, event: "Allspaw's 'Blameless PostMortems and a Just Culture' at Etsy", highlight: true },
        { year: 2016, event: "Google SRE book codifies postmortem culture, templates, and review" },
        { year: 2024, event: "Postmortem quality and repeat-incident rate are standard maturity metrics" },
      ],
      keyTakeaways: [
        "The report is the deliverable: summary, impact, evidenced timeline, causal analysis shown, causes vs contributors, owned actions, lessons",
        "It must serve three audiences at once — executives (impact), engineers (detail), auditors/regulators (the evidence trail)",
        "Blameless = roles and systems, never names; assume local rationality (reasonable action given what was known at the time)",
        "Check every RCA against the six failures: premature closure, single-root-cause, blame-as-cause, hindsight bias, action graveyard, scope dodge",
        "Follow-through is machinery: actions tracked like engineering work, facilitated reviews, repeat-incident linking, a searchable archive",
        "Write near-miss postmortems with full rigor — they are the same lesson at almost zero cost",
        "The full pipeline: timeline (06) → technique (03–05) → human factors (07) → breach matrix (08) → CAPA (09) → postmortem (10); run it and you stop having the same incident twice",
      ],
      references: [
        { title: "Google SRE Book — Postmortem Culture: Learning from Failure", url: "https://sre.google/sre-book/postmortem-culture/" },
        { title: "Etsy Code as Craft — Blameless PostMortems and a Just Culture", url: "https://www.etsy.com/codeascraft/blameless-postmortems" },
      ],
    },
    quiz: {
      questions: [
        { id: "rca-10-q1", type: "Deliverable", challenge: "What ships.", text: "What makes an RCA real, according to this capstone?", options: ["A written report — evidenced timeline, causal analysis shown, causes vs contributors, owned corrective actions — that is shared and acted on", "A verbal debrief", "A closed ticket", "A press release"], correctIndex: 0, explanation: "An RCA that isn't written, shared, and acted on never happened." },
        { id: "rca-10-q2", type: "Audiences", challenge: "Three readers.", text: "Which three audiences must the report serve simultaneously?", options: ["Executives (impact/risk), engineers (technical detail), and auditors/regulators (the evidence trail)", "Only the incident team", "Marketing, sales, and HR", "The attacker, the vendor, and the press"], correctIndex: 0, explanation: "A report that serves only one audience fails the other two when it matters." },
        { id: "rca-10-q3", type: "Blameless", challenge: "Why no names.", text: "Why are postmortems written blamelessly?", options: ["Evidence quality — people who fear the report shade the facts; use roles/systems, and assume local rationality (reasonable action given what was known then)", "Politeness and morale", "Legal teams require it", "Names are hard to spell"], correctIndex: 0, explanation: "An investigation running on shaded facts produces fiction with formatting." },
        { id: "rca-10-q4", type: "Six Failures", challenge: "The checklist.", text: "Which list names the six classic RCA failures?", options: ["Premature closure, single-root-cause fallacy, blame-as-cause, hindsight bias, action-item graveyard, scope dodge", "Slow, expensive, boring, late, long, vague", "Phishing, malware, DDoS, insider, misconfig, zero-day", "Plan, do, check, act, verify, close"], correctIndex: 0, explanation: "Reviewers should check every postmortem against all six." },
        { id: "rca-10-q5", type: "Hindsight", challenge: "Then, not now.", text: "How do you fight hindsight bias structurally?", options: ["Record what each decision-maker actually knew at decision time and evaluate the decision against that — never against what's known now", "Wait longer before writing", "Only interview managers", "Exclude the timeline"], correctIndex: 0, explanation: "'They should have known' judges with information that didn't exist yet." },
        { id: "rca-10-q6", type: "Graveyard", challenge: "The quiet killer.", text: "What prevents the action-item graveyard?", options: ["Track actions like engineering work — same tracker, single owners, deadlines, verification — and report postmortem closure separately from action closure", "A bigger meeting", "Stronger wording in the report", "Assigning actions to 'the team'"], correctIndex: 0, explanation: "Causes found but fixes never landed is the most common way good analysis changes nothing." },
        { id: "rca-10-q7", type: "Precedent", challenge: "Aviation's lesson.", text: "What does NASA's ASRS demonstrate about blameless reporting?", options: ["Confidential, immunity-backed reporting produces millions of honest near-miss reports — blamelessness is an evidence-collection strategy with compounding returns", "Pilots never make errors", "Anonymity hides the truth", "Only crashes teach anything"], correctIndex: 0, explanation: "Aviation engineered a way to learn from every near miss instead of only from disasters." },
        { id: "rca-10-q8", type: "Capstone", challenge: "The pipeline.", text: "What is the full RCA pipeline this epoch assembled?", options: ["Evidence timeline (06) → right technique: 5 Whys/fishbone/fault tree (03–05) → human factors without blame (07) → breach causal matrix (08) → verified CAPA (09) → blameless postmortem shared org-wide (10)", "Detect → patch → close → repeat", "Blame → discipline → memo → archive", "Scan → alert → escalate → report"], correctIndex: 0, explanation: "Run the loop and the same incident stops happening twice — that's what maturity is made of." },
      ],
    },
  },
];
