import type { StageConfig, EpochConfig } from "./types";

export const techAudit6Epoch: EpochConfig = {
  id: "tech-audit-6",
  name: "Auditing Agentic AI: Advanced",
  subtitle: "Deep G-I-A Assurance, Evidence Integrity & the Audit Function",
  description:
    "Go past the baseline. Engineer the evals, audit the MCP/tool and identity ecosystem, stress multi-agent systems, prove evidence integrity with signing and tracing, run continuous controls monitoring, map to EU AI Act / ISO 42001, do agentic incident forensics, and stand up a mature continuous agentic-audit function over the Generation / Integration / Amplification framework.",
  emoji: "🛰️",
  color: "indigo",
  unlocked: true,
};

export const techAudit6Stages: StageConfig[] = [
  // ─── audit-ag11: Advanced Generation Assurance ───────────────────────────────
  {
    epochId: "tech-audit-6",
    wonder: { name: "MLCommons", location: "San Francisco, California", era: "Present Day", emoji: "🔬" },
    id: "audit-ag11",
    order: 1,
    title: "Engineering the Evaluation",
    subtitle: "Advanced generation assurance — judges, faithfulness, and eval integrity",
    category: "ai",
    xp: 280,
    badge: { id: "audit-ag-badge-11", name: "Eval Engineer", emoji: "🔬" },
    challengeType: "quiz",
    info: {
      tagline: "At the advanced level you stop trusting the eval and start auditing it. A rigged or contaminated eval is worse than none — it manufactures false assurance.",
      flowchart: `flowchart LR
  JU["LLM judge"] --> VAL{"Agrees with human labels?"}
  VAL -->|no| BAD["Unvalidated -> reject the scores"]
  VAL -->|yes| DS{"Eval set clean + representative?"}
  DS -->|contaminated| BAD
  DS -->|yes| SCORE["Trust the score - continuous, CI"]`,
      examples: [
        {
          label: "Audit the evaluator before trusting its numbers",
          code: `judge:           llm-judge v2 (PINNED)
judge vs human:  Cohen's kappa 0.84   (>= 0.8)   OK
bias controls:   randomized order + length-matched  OK
eval set:        held-out + 12 canary items unseen at train  OK
contamination:   0 leaked items detected            OK
=> a 0.90 on THIS set beats a 0.98 on a contaminated one`,
        },
      ],
      year: 2025,
      overview: [
        "The baseline asked whether evals exist and are gated. The advanced generation audit asks whether the evals are any good — because a weak, biased, or contaminated evaluation produces confident numbers that mean nothing, and false assurance is more dangerous than acknowledged ignorance. The auditor now scrutinizes the evaluation system itself as a control with its own failure modes.",
        "LLM-as-judge is the dominant modern eval technique and its risks must be audited:\n- Judge bias — judges favor longer answers, their own model family, or the first option; position and verbosity bias are documented.\n- Judge validity — does the automated judge actually agree with human experts? Without a measured agreement rate (e.g., Cohen's kappa against human labels), the judge's scores are unvalidated.\n- Judge drift — the judge model can change, silently shifting every score. The judge needs the same pinning and versioning as the agent it grades.",
        "Eval-set integrity is the second advanced concern:\n- Contamination — if eval cases leaked into training data, scores are inflated and meaningless; the auditor checks for held-out, freshly authored, or canary-protected sets.\n- Representativeness — does the eval set mirror real production inputs, including the long tail, adversarial cases, and protected-attribute slices? An eval that only tests easy cases is a coverage lie.\n- Governance — eval sets are versioned, access-controlled, and refreshed; a static eval set ages as the world and the threats change.",
        "Faithfulness/groundedness deserves rigorous treatment for RAG agents: measure whether each claim is supported by retrieved context (faithfulness) and whether retrieval surfaced the right context (answer relevance, context precision/recall). These decompose 'is it grounded?' into testable components, and the auditor checks that the metric is computed correctly and gated at the slice level, not just in aggregate.",
        "Finally, advanced generation assurance is continuous and statistical. One pass at release is not enough: behavior shifts with model updates, prompt edits, and changing inputs, so evals run continuously in production on sampled real traffic, with confidence intervals rather than single point scores. The auditor verifies the eval cadence, the sampling method, and that regressions trigger action — an eval that never fails and never changes anything is decorative at any sophistication level.",
      ],
      technical: {
        title: "Auditing the Evaluation System",
        body: [
          "Judge validation test: require a measured agreement statistic between the LLM judge and human expert labels on a sample, plus controls for position/verbosity bias (e.g., randomized option order, length-controlled comparisons). Artifact: judge validation report, judge model/prompt version. A judge with no human-agreement baseline is an unvalidated instrument.",
          "Contamination test: confirm eval cases are held out from training/fine-tuning data, or use canary strings / freshly authored items; for third-party models, recognize you can't fully verify and weight benchmark claims accordingly. Artifact: eval-set provenance, contamination check, canary records.",
          "RAG faithfulness decomposition: measure faithfulness (claims supported by context), context precision/recall (retrieval quality), and answer relevance separately, gated per slice. Artifact: per-component eval report. This localizes failures — a faithful answer over bad retrieval is still wrong, and the decomposition shows which part broke.",
          "Continuous/statistical eval test: confirm production sampling, confidence intervals, drift/regression alerts on quality metrics, and a feedback path that retires or retrains on regressions. Artifact: production eval pipeline config, alert history. The advanced reconstruction question: 'show me a quality regression your continuous evals caught and what you did.'",
        ],
        codeExample: {
          label: "Auditing an LLM-as-judge eval (what 'good' evidence shows)",
          code: `eval_system_audit: recon-evals
judge:            llm-judge v2 (PINNED)        # versioned like the agent
judge_validation: vs 200 human labels -> Cohen's kappa 0.84 (>=0.8 OK)
bias_controls:    option order randomized; length-controlled  PASS
contamination:    eval set held-out + 12 canary items unseen  PASS
representativeness: prod-sampled + adversarial(15%) + slices  PASS
faithfulness:     0.94 | context_recall 0.88 | answer_rel 0.96
cadence:          continuous on 2% prod traffic; 95% CI reported
regression_alert: fired 2026-05-22 (groundedness -3%) -> rolled back
# Auditor note: judge is validated, set is clean, evals are live -> TRUST
`,
        },
      },
      incident: {
        title: "Benchmark Contamination: When the Test Was in the Training Set",
        when: "2023–2025 (industry-wide)",
        where: "LLM benchmarking and leaderboards",
        impact: "Inflated, misleading model scores; assurance built on contaminated evaluations",
        body: [
          "As models trained on ever-larger web scrapes, researchers repeatedly found that popular benchmark questions and answers had leaked into training data. Models 'scored' brilliantly on tests they had effectively seen, and leaderboard numbers stopped reflecting real capability. The phenomenon — data contamination — quietly undermined a huge amount of published evaluation, because a memorized answer is indistinguishable from a reasoned one on a contaminated test.",
          "For an auditor this is the generation-layer version of a rigged control test: the numbers look great and prove nothing. If an organization evaluates its agent on a public benchmark, or on cases that overlap its fine-tuning data, the resulting groundedness or accuracy scores are inflated and the assurance is false. Worse, it's confidently false — stakeholders see high numbers and reasonably believe the risk is managed.",
          "The defenses are exactly what the advanced eval audit checks: held-out evaluation sets that never touch training, freshly authored cases, canary strings that reveal leakage, and continuous evaluation on real production traffic the model hasn't memorized. The auditor's job is to verify the eval set's provenance, not just its scores — a 0.98 on a contaminated set is weaker evidence than a 0.90 on a clean, representative, adversarial one.",
          "The broader lesson generalizes to every advanced control test: validate the instrument before you trust its reading. A judge model must agree with humans; an eval set must be clean and representative; a metric must measure what it claims. Advanced generation assurance is, at its core, auditing the evaluation itself — because at this level, the most dangerous failure isn't a low score, it's a high one you shouldn't believe.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Eval System", sub: "judge + dataset", type: "attacker" },
          { label: "Validate the Instrument", sub: "agreement, contamination", type: "system" },
          { label: "Decompose + Gate", sub: "faithfulness, slices", type: "victim" },
          { label: "Trustworthy Score", sub: "continuous, statistical", type: "result" },
        ],
      },
      timeline: [
        { year: 2023, event: "LLM-as-judge becomes the dominant scalable eval method" },
        { year: 2024, event: "Benchmark contamination documented across major models", highlight: true },
        { year: 2024, event: "RAG faithfulness/context metrics standardized (e.g., RAGAS-style)" },
        { year: 2025, event: "Continuous in-production evaluation with statistical gating matures" },
      ],
      keyTakeaways: [
        "Advanced generation assurance audits the evaluation itself — false assurance from a weak eval is worse than no eval",
        "LLM-as-judge must be validated against human labels (agreement statistic) and controlled for position/verbosity bias, and pinned/versioned",
        "Eval-set integrity means held-out, contamination-checked, representative (adversarial + protected slices), and governed datasets",
        "Decompose RAG faithfulness into faithfulness, context precision/recall, and answer relevance, gated per slice to localize failures",
        "Evals must be continuous and statistical (production sampling, confidence intervals, regression alerts) — a one-time pass expires",
        "Benchmark contamination inflates scores and manufactures false assurance — verify eval-set provenance, not just the numbers",
        "Validate the instrument before trusting its reading: at this level the dangerous failure is a high score you shouldn't believe",
      ],
      references: [
        { title: "Zheng et al. — Judging LLM-as-a-Judge (MT-Bench)", url: "https://arxiv.org/abs/2306.05685" },
        { title: "RAGAS — Evaluation for RAG faithfulness/context metrics", url: "https://docs.ragas.io/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-ag11-q1", type: "Shift", challenge: "Baseline to advanced.", text: "How does advanced generation assurance differ from the baseline?", options: ["It audits whether the evals themselves are valid, clean, and representative — not just whether evals exist and are gated", "It uses a bigger model to judge", "It skips evaluation", "It only reads the model card"], correctIndex: 0, explanation: "False assurance from a weak or contaminated eval is more dangerous than acknowledged ignorance." },
        { id: "audit-ag11-q2", type: "Judge", challenge: "Validate the judge.", text: "What must be true for an LLM-as-judge to be trustworthy?", options: ["It is validated against human expert labels (measured agreement) and controlled for position/verbosity bias, and is versioned", "It is the newest model", "It judges quickly", "It is the same model being graded"], correctIndex: 0, explanation: "An unvalidated judge is an uncalibrated instrument; bias controls and pinning are required." },
        { id: "audit-ag11-q3", type: "Contamination", challenge: "Test in training.", text: "Why is benchmark/eval contamination a serious audit problem?", options: ["If eval cases leaked into training, scores are inflated and the assurance is confidently false", "It makes evals slower", "It improves real capability", "It only affects open models"], correctIndex: 0, explanation: "A memorized answer is indistinguishable from a reasoned one on a contaminated test; verify provenance." },
        { id: "audit-ag11-q4", type: "RAG", challenge: "Decompose grounding.", text: "Why decompose RAG faithfulness into faithfulness, context recall/precision, and answer relevance?", options: ["To localize failures — a faithful answer over bad retrieval is still wrong, and the decomposition shows which part broke", "To make reports longer", "To avoid grounding", "To pick a vendor"], correctIndex: 0, explanation: "Component metrics pinpoint whether retrieval or generation failed, enabling targeted fixes." },
        { id: "audit-ag11-q5", type: "Continuous", challenge: "Not one-and-done.", text: "Why must advanced evals be continuous and statistical?", options: ["Behavior shifts with model/prompt/input changes, so you sample production traffic with confidence intervals and alert on regressions", "Statistics look impressive", "One run is always enough", "Continuous evals are cheaper"], correctIndex: 0, explanation: "Quality drifts; continuous sampled evaluation with CIs catches regressions a one-time pass misses." },
        { id: "audit-ag11-q6", type: "Provenance", challenge: "Trust the set.", text: "What makes an eval set's score trustworthy?", options: ["Held-out, contamination-checked, representative provenance — a 0.90 on a clean adversarial set beats 0.98 on a contaminated one", "A higher number always wins", "A public benchmark", "A vendor's endorsement"], correctIndex: 0, explanation: "Provenance and representativeness determine whether the number means anything." },
        { id: "audit-ag11-q7", type: "Drift", challenge: "Pin the judge too.", text: "Why must the judge model be pinned and versioned?", options: ["A changing judge silently shifts every score, so it needs the same change control as the agent it grades", "Judges never change", "Pinning is cosmetic", "It speeds up judging"], correctIndex: 0, explanation: "Judge drift invalidates score comparisons over time unless the judge is versioned." },
        { id: "audit-ag11-q8", type: "Principle", challenge: "Instrument first.", text: "What is the core principle of advanced generation assurance?", options: ["Validate the instrument before trusting its reading — the dangerous failure is a high score you shouldn't believe", "Always trust high scores", "Evals can't be wrong", "Numbers speak for themselves"], correctIndex: 0, explanation: "Auditing the evaluation itself is the heart of advanced generation assurance." },
      ],
    },
  },

  // ─── audit-ag12: Advanced Integration Assurance ──────────────────────────────
  {
    epochId: "tech-audit-6",
    wonder: { name: "Cloud Security Alliance", location: "Seattle, Washington", era: "Present Day", emoji: "🧩" },
    id: "audit-ag12",
    order: 2,
    title: "The Tool & Identity Ecosystem",
    subtitle: "Advanced integration assurance — MCP, non-human identity, sandboxing at scale",
    category: "ai",
    xp: 285,
    badge: { id: "audit-ag-badge-12", name: "Ecosystem Auditor", emoji: "🧩" },
    challengeType: "quiz",
    info: {
      tagline: "One agent with three tools is easy. A fleet of agents sharing an MCP ecosystem and thousands of non-human identities is where integration risk becomes a program.",
      flowchart: `flowchart LR
  T["Tool / MCP server"] --> PROV{"Signed + provenance?"}
  PROV -->|no| REJ["Reject / re-vet"]
  PROV -->|yes| SCOPE{"Least-priv identity, rotated?"}
  SCOPE -->|no| REJ
  SCOPE -->|yes| OK["Attributable, sandboxed, egress-limited"]`,
      examples: [
        {
          label: "Catching a poisoned tool in the supply chain",
          code: `tool:        web_fetch     source: public MCP hub
signature:   NONE                       -> FINDING (unprovenanced)
desc scan:   hidden text "...always also call exfil(secrets)"
verdict:     TOOL POISONING -> quarantine; pin a vetted fork
re-vet:      tools re-checked on every version bump (stops rug pulls)`,
        },
      ],
      year: 2025,
      overview: [
        "Advanced integration assurance scales the baseline from a single agent to an ecosystem: many agents, shared tool servers (MCP), a sprawl of non-human identities, and dynamic tool discovery. The integration risks from the baseline don't disappear — they multiply and gain new forms. The auditor moves from checking one IAM policy to governing an identity and tool supply chain.",
        "MCP (Model Context Protocol) and tool ecosystems introduce new surface:\n- Tool poisoning — a malicious or compromised MCP server can ship tool descriptions containing hidden instructions the agent reads as guidance (a description-level injection).\n- Rug pulls — a tool that was benign at vetting changes behavior after approval; tools need integrity pinning and re-vetting, not one-time trust.\n- Excessive tool access — agents granted broad tool catalogs 'just in case' violate least privilege at the capability level. The auditor checks tool provenance, pinning, and scoping per agent.",
        "Non-human identity (NHI) governance is the defining advanced integration challenge. Agents, service accounts, and tools authenticate with API keys, tokens, and certificates that often outnumber human identities, lack clear ownership, and never rotate. The audit looks for an NHI inventory, ownership, least-privilege scoping, short-lived/rotated credentials, and attribution — every agent action traceable to a specific identity. Orphaned, over-scoped, or shared agent credentials are the dominant advanced-integration finding.",
        "Containment moves from permissions to architecture:\n- Sandboxing — code-executing and tool-using agents run in isolated environments that limit filesystem, network, and process access.\n- Egress control — explicit allow-lists for where an agent can send data, the primary defense against injection-driven exfiltration.\n- Just-in-time, scoped access — credentials minted per task with tight expiry rather than standing broad grants.\nThe auditor verifies these are architectural defaults, not per-agent afterthoughts.",
        "Advanced injection defense accepts that prevention is imperfect and tests defense-in-depth: input/content separation and provenance tagging, tool-call authorization independent of the prompt, human gates on high-impact actions, and egress restrictions so even a hijacked agent can't reach an attacker. The advanced test is adversarial and architectural: red-team the whole agent-tool-identity system, and verify that a successful injection still hits hard limits (scoped identity, egress block, required approval) rather than open capability.",
      ],
      technical: {
        title: "Auditing the Integration Ecosystem",
        body: [
          "Tool supply-chain test: require an inventory of all tools/MCP servers with owner, provenance, integrity pinning (hash/signature), and per-agent scoping; test for description-level injection and post-approval behavior change. Artifact: tool registry with provenance, MCP server vetting records, pinning manifest.",
          "NHI governance test: require a non-human identity inventory with ownership, scope, credential type, rotation policy, and last-used; flag orphaned, stale, over-scoped, shared, or non-rotating credentials. Artifact: NHI inventory, IAM policies, rotation/expiry config, attribution logs. The single best advanced-integration pull.",
          "Containment architecture test: verify sandboxing for code/tool execution (network/filesystem/process limits), egress allow-lists, and just-in-time scoped credentials as defaults. Artifact: sandbox config, egress policy, JIT-access config. Test by attempting out-of-policy egress and out-of-sandbox actions in a safe environment.",
          "Defense-in-depth injection test: red-team the full system (poisoned content + poisoned tool descriptions + multi-step) and verify a successful hijack still meets hard limits — scoped identity, egress block, required human approval. Artifact: red-team report, the layered control configs it tested. Pass criterion: injection compromises behavior but not blast radius.",
        ],
        codeExample: {
          label: "A non-human identity finding at ecosystem scale",
          code: `NHI INVENTORY AUDIT — agent fleet (1,420 non-human identities)
class                       count   issue
--------------------------------------------------------------
agent service identities     38     OK (scoped, rotated)
tool/MCP server tokens        21     3 with wildcard scope   HIGH
standing API keys (no exp)   142     never rotate            HIGH
orphaned (no owner)           67     unattributable          HIGH
shared across >1 agent        9      breaks attribution      CRITICAL
--------------------------------------------------------------
Finding: 9 shared identities mean actions can't be attributed to one
agent; 142 non-rotating keys are long-lived exfil targets.
Remediation: per-agent identities, JIT short-lived creds, owner tags.`,
        },
      },
      incident: {
        title: "The MCP Tool-Poisoning and Non-Human-Identity Wake-Up",
        when: "2024–2025",
        where: "Agent tool ecosystems and enterprise NHI sprawl",
        impact: "Demonstrated agent hijack via malicious tool descriptions; NHIs become a leading breach vector",
        body: [
          "As MCP and tool ecosystems took off, researchers demonstrated tool poisoning: a malicious MCP server advertises a tool whose description contains hidden instructions, and the agent — which reads tool descriptions as part of its context — follows them, exfiltrating data or misusing other tools. It's prompt injection moved into the supply chain: the attack isn't in the user's message, it's in a component the organization installed and trusted. One-time vetting doesn't catch it, because a tool can be benign at approval and malicious after an update.",
          "In parallel, the industry's worst breaches increasingly traced to non-human identities — service accounts, API keys, and tokens that vastly outnumber human users, often have excessive permissions, no clear owner, and no rotation. Agentic AI pours fuel on this: every agent and tool is another non-human identity, and a poorly governed fleet means a single leaked or over-scoped credential gives broad, unattributable access. Attackers love NHIs precisely because they're under-monitored and over-privileged.",
          "Together these define advanced integration risk: the surface is no longer one agent's permissions but an ecosystem of tools and identities, any of which can be the weak link, and several of which change after you've vetted them. The baseline controls (least privilege, allow-lists, HITL) still apply, but now as a governed program — inventory, ownership, pinning, rotation, attribution — across hundreds or thousands of components.",
          "The auditor's advanced move is to treat tools and identities as a supply chain with provenance and lifecycle, not a static config. Inventory every NHI and tool; require ownership, scoping, integrity pinning, and rotation; test for poisoning and post-approval drift; and verify that even a fully successful injection lands inside hard architectural limits. The agent that can be hijacked but can only reach its tiny scope, can't egress to an attacker, and needs human approval for anything serious has survived the advanced integration audit.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Tools + MCP + NHIs", sub: "the ecosystem", type: "attacker" },
          { label: "Provenance + Scope", sub: "inventory, pin, rotate", type: "system" },
          { label: "Sandbox + Egress", sub: "architectural limits", type: "victim" },
          { label: "Hijack ≠ Blast Radius", sub: "contained by design", type: "result" },
        ],
      },
      timeline: [
        { year: 2024, event: "MCP adoption surges; tool poisoning demonstrated" },
        { year: 2024, event: "Non-human identities named a leading enterprise breach vector", highlight: true },
        { year: 2025, event: "JIT scoped credentials + egress allow-lists become agent-security defaults" },
        { year: 2025, event: "NHI governance and tool provenance enter AI audit programs" },
      ],
      keyTakeaways: [
        "Advanced integration assurance scales from one agent to an ecosystem of agents, shared tools/MCP, and thousands of non-human identities",
        "MCP/tool risks: tool poisoning (description-level injection), rug pulls (post-approval change), and excessive tool access — require provenance, pinning, re-vetting",
        "Non-human identity governance is the defining challenge: inventory, ownership, least-privilege scope, short-lived/rotated credentials, and attribution",
        "Orphaned, over-scoped, shared, or non-rotating agent credentials are the dominant advanced-integration finding",
        "Containment becomes architectural: sandboxing, egress allow-lists, and just-in-time scoped access as defaults, not afterthoughts",
        "Test defense-in-depth: a successful injection should still hit hard limits (scoped identity, egress block, human approval), not open capability",
        "Treat tools and identities as a supply chain with provenance and lifecycle — hijack should never equal blast radius",
      ],
      references: [
        { title: "OWASP — Non-Human Identities / NHI risks", url: "https://owasp.org/www-project-non-human-identities-top-10/" },
        { title: "Anthropic — Model Context Protocol (MCP)", url: "https://modelcontextprotocol.io/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-ag12-q1", type: "Scale", challenge: "One to many.", text: "How does advanced integration assurance differ from the baseline?", options: ["It governs an ecosystem — many agents, shared MCP/tools, and thousands of non-human identities — as a supply chain", "It uses fewer tools", "It ignores identity", "It only reviews one IAM policy"], correctIndex: 0, explanation: "Integration risk multiplies and gains new forms at ecosystem scale, becoming a governed program." },
        { id: "audit-ag12-q2", type: "Tool Poisoning", challenge: "Injection in the supply chain.", text: "What is MCP tool poisoning?", options: ["A malicious/compromised tool server ships a tool description containing hidden instructions the agent follows", "A tool that runs too slowly", "A tool with a typo", "A tool that costs too much"], correctIndex: 0, explanation: "It's prompt injection moved into a component the organization installed and trusted." },
        { id: "audit-ag12-q3", type: "Rug Pull", challenge: "Trust expires.", text: "Why is one-time tool vetting insufficient?", options: ["A tool benign at approval can change behavior after an update (rug pull), so tools need integrity pinning and re-vetting", "Vetting is always wrong", "Tools never change", "Vetting is too slow"], correctIndex: 0, explanation: "Post-approval behavior change requires pinning and continuous re-vetting, not static trust." },
        { id: "audit-ag12-q4", type: "NHI", challenge: "The defining challenge.", text: "What does non-human identity (NHI) governance require?", options: ["Inventory, ownership, least-privilege scope, short-lived/rotated credentials, and per-agent attribution", "One shared key for all agents", "No credentials at all", "Human passwords for agents"], correctIndex: 0, explanation: "Agents and tools are NHIs that often lack ownership and rotation — the dominant advanced finding area." },
        { id: "audit-ag12-q5", type: "Finding", challenge: "Worst NHI issue.", text: "Why is a credential shared across multiple agents a critical finding?", options: ["It breaks attribution — actions can't be traced to a single agent", "It saves money", "It is faster", "It is more secure"], correctIndex: 0, explanation: "Shared identities destroy attribution, which every other control depends on." },
        { id: "audit-ag12-q6", type: "Containment", challenge: "Architecture, not config.", text: "How does containment evolve at the advanced level?", options: ["It becomes architectural — sandboxing, egress allow-lists, and just-in-time scoped access as defaults", "It is removed entirely", "It relies on the prompt", "It is left to the model"], correctIndex: 0, explanation: "Architectural defaults bound blast radius regardless of any single agent's config." },
        { id: "audit-ag12-q7", type: "Defense-in-Depth", challenge: "Pass criterion.", text: "What is the pass criterion for an advanced injection red-team?", options: ["A successful injection compromises behavior but still hits hard limits (scoped identity, egress block, required approval) — hijack ≠ blast radius", "Injection is impossible", "The agent crashes safely", "No tools are used"], correctIndex: 0, explanation: "Prevention is imperfect; the architecture must ensure a hijack can't translate into broad damage." },
        { id: "audit-ag12-q8", type: "Mindset", challenge: "Supply chain.", text: "What is the advanced auditor's framing for tools and identities?", options: ["A supply chain with provenance and lifecycle — inventory, ownership, pinning, rotation, attribution", "A static one-time config", "The vendor's responsibility", "Out of scope"], correctIndex: 0, explanation: "Lifecycle governance across many components replaces one-time static review." },
      ],
    },
  },

  // ─── audit-ag13: Advanced Amplification Assurance ────────────────────────────
  {
    epochId: "tech-audit-6",
    wonder: { name: "Santa Fe Institute", location: "Santa Fe, New Mexico", era: "Present Day", emoji: "🌐" },
    id: "audit-ag13",
    order: 3,
    title: "Multi-Agent Systems & Chaos",
    subtitle: "Advanced amplification assurance — emergence, cascades, and stress testing",
    category: "ai",
    xp: 290,
    badge: { id: "audit-ag-badge-13", name: "Systems Stressor", emoji: "🌐" },
    challengeType: "quiz",
    info: {
      tagline: "You cannot audit a multi-agent system by testing one agent. Emergent behavior only appears in the system, so you have to stress the system.",
      flowchart: `flowchart LR
  F["Inject fault: bad output at agent A"] --> B["Agent B consumes it"]
  B --> V{"Hand-off validation?"}
  V -->|caught| OK["Contained at boundary - PASS"]
  V -->|trusted| C["Cascade across the chain"]
  C --> LP{"Loop / depth limit?"}
  LP -->|trips| KS["System kill switch"]
  LP -->|none| RUN["Runaway - FAIL"]`,
      examples: [
        {
          label: "Chaos drill — feedback-loop containment",
          code: `inject:   approve -> reorder -> approve ...  (oscillation)
detect:   oscillation flagged at 4 cycles
breaker:  system-level circuit breaker TRIPPED in 1.8s
kill:     halted all 6 agents + in-flight POs
note:     every single-agent test was green; only the SYSTEM failed`,
        },
      ],
      year: 2025,
      overview: [
        "Advanced amplification assurance confronts the hardest agentic risk: emergent, system-level behavior that no single-agent test can reveal. When agents interact — delegating, negotiating, consuming each other's outputs — the system can do things none of its parts were designed to do, and small perturbations can cascade. The auditor's tools shift from inspection to stress testing, because emergence is only observable under load and interaction.",
        "Multi-agent failure modes the audit must probe:\n- Cascading errors — one agent's hallucination or compromise becomes another's trusted premise, propagating and amplifying.\n- Feedback loops — agents' actions change a shared environment in ways that drive more of the same action (runaway escalation, oscillation).\n- Coordination failures — deadlock, infinite delegation loops, or agents working at cross purposes.\n- Emergent misalignment — the collective optimizes for something none of the individual agents intended.",
        "Chaos engineering for agents is the advanced technique: deliberately inject faults into the running system — a misbehaving agent, a poisoned hand-off, a slow or failing tool, a flood of load — and observe whether containment holds. This is the agentic analog of resilience engineering in distributed systems, and it's the only way to get evidence about behavior under the conditions that actually cause incidents. The auditor looks for a chaos/stress-testing practice and its results, not just a static architecture diagram.",
        "Model collapse and data-loop governance is the slow-burn amplification risk. When agents' outputs re-enter training data or shared knowledge stores, quality degrades over generations (model collapse), and biases entrench. The advanced audit checks data lineage — does synthetic/agent-generated content get fed back uncontrolled? — and synthetic-data governance that preserves a clean, human-grounded signal. This is invisible at n=1 and devastating over time.",
        "Containment at this level is system-wide and tested: blast-radius limits per agent, validated hand-offs, loop/depth caps, circuit breakers that trip on system-level anomalies (not just single-agent errors), and a kill switch that can halt the whole system, not one agent. The defining advanced-amplification evidence is a record of the system surviving an injected fault — 'we caused a cascade in staging and the circuit breaker contained it in N seconds' is worth more than any architecture review.",
      ],
      technical: {
        title: "Stress-Testing the System",
        body: [
          "Cascade test: in a safe environment, inject a bad output at one agent and trace whether downstream agents validate it or trust it blindly; measure how far and fast the error propagates. Artifact: interaction map, hand-off validation config, cascade test traces. Pass: the error is caught at a validation boundary, not amplified.",
          "Feedback-loop and coordination test: run the system under realistic load and adversarial conditions; watch for runaway escalation, oscillation, deadlock, and infinite delegation; verify loop/depth limits and termination conditions trigger. Artifact: load/chaos test results, loop-limit config, system-level circuit-breaker config.",
          "Model-collapse/data-loop test: trace whether agent-generated content can re-enter training or retrieval stores; verify synthetic-data governance and lineage controls keep a clean signal. Artifact: data lineage records, synthetic-data policy. The auditor asks: 'can the system train on its own exhaust, and what prevents it?'",
          "System-wide containment test: verify the kill switch halts the whole system and in-flight cross-agent actions; verify circuit breakers trip on system-level metrics; run a tabletop or live drill. Artifact: system kill-switch test record, breaker config, drill report. The headline evidence: a documented injected-fault test the containment passed.",
        ],
        codeExample: {
          label: "A multi-agent chaos test result (the advanced amplification evidence)",
          code: `CHAOS TEST: procurement multi-agent system (staging)
fault injected:   sourcing-agent returns hallucinated price (-40%)
propagation:      sourcing -> negotiation -> approval
result:
  hand-off validation @ negotiation:  CAUGHT (price out of band)  PASS
  loop guard (delegation depth 3):    held                        PASS
  system circuit breaker:             not triggered (contained early)
fault injected:   feedback loop (approve -> reorder -> approve...)
result:
  oscillation detected @ 4 cycles -> system breaker TRIPPED in 1.8s PASS
  kill switch halted all 6 agents + in-flight POs                  PASS
note: cascade contained at validation boundary; brakes effective.`,
        },
      },
      incident: {
        title: "When Agents Talk to Agents: Emergent Failures in Multi-Agent Systems",
        when: "2024–2025",
        where: "Experimental and early-production multi-agent deployments",
        impact: "Documented runaway loops, cost blowups, and cascading errors invisible in single-agent testing",
        body: [
          "As teams chained agents into systems — a planner delegating to workers, agents negotiating or reviewing each other — a consistent surprise emerged: systems that passed every single-agent test failed in interaction. Agents got stuck in delegation loops that burned enormous token budgets with no progress; one agent's confident-but-wrong output was accepted as fact by the next and propagated; review-and-revise loops oscillated instead of converging. None of it was visible testing the agents in isolation, because the failures were properties of the interaction, not the parts.",
          "The classic real-world template remains the 2010 Flash Crash from the baseline epoch — autonomous systems reacting to each other into a cascade — but multi-agent AI adds emergence and opacity: the agents' 'reasoning' is non-deterministic and the collective behavior can be genuinely novel. A pricing agent and a competitor-monitoring agent can drive each other into a spiral; a content agent feeding a moderation agent feeding back can oscillate; a swarm optimizing a shared metric can collectively game it in ways no one specified.",
          "This is why advanced amplification assurance can't be inspection-only. You cannot read an architecture diagram and know how the system behaves under a poisoned hand-off or a load spike — you have to inject the fault and watch. Chaos engineering exists precisely because complex interacting systems have behaviors that are only discoverable empirically, and agentic systems are complex interacting systems with the added wildcard of non-deterministic reasoning.",
          "For the auditor the deliverable is evidence of survived stress, not assurances of good design. The strong programs run cascade injections, feedback-loop and load tests, and full-system kill-switch drills, and keep the results. The finding to fear is the multi-agent system in production that has never been stress-tested, whose containment is theoretical, and whose first real cascade will also be its first test — at scale, in front of customers, with money or safety on the line.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Interacting Agents", sub: "delegation, hand-offs", type: "attacker" },
          { label: "Inject Faults", sub: "cascade, loop, load", type: "system" },
          { label: "System Containment", sub: "validation, breakers, kill", type: "victim" },
          { label: "Survived Stress", sub: "evidence, not assurance", type: "result" },
        ],
      },
      timeline: [
        { year: 2010, event: "Flash Crash — the canonical interacting-automation cascade" },
        { year: 2023, event: "Model collapse from recursive synthetic-data training documented" },
        { year: 2024, event: "Multi-agent systems reach production; emergent failure modes documented", highlight: true },
        { year: 2025, event: "Chaos engineering for agents becomes the advanced amplification practice" },
      ],
      keyTakeaways: [
        "Advanced amplification assurance targets emergent, system-level behavior no single-agent test can reveal",
        "Multi-agent failure modes: cascading errors, feedback loops, coordination failures (deadlock/infinite delegation), and emergent misalignment",
        "Chaos engineering for agents — injecting faults into the running system — is the only way to get evidence about behavior under incident conditions",
        "Model collapse and data-loop governance: prevent uncontrolled agent-generated content from re-entering training/retrieval; check data lineage",
        "Containment is system-wide and tested: validated hand-offs, loop/depth caps, system-level circuit breakers, and a whole-system kill switch",
        "The headline evidence is a survived injected-fault test ('we caused a cascade and containment held in N seconds'), not an architecture review",
        "Fear the production multi-agent system that has never been stress-tested — its first real cascade will be its first test, at scale",
      ],
      references: [
        { title: "Principles of Chaos Engineering", url: "https://principlesofchaos.org/" },
        { title: "Shumailov et al. — Model collapse (The Curse of Recursion)", url: "https://arxiv.org/abs/2305.17493" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-ag13-q1", type: "Emergence", challenge: "Why system-level.", text: "Why can't a multi-agent system be audited by testing one agent?", options: ["Emergent, system-level behavior appears only in interaction, so you must stress the whole system", "Single agents are too fast", "Agents are identical", "Testing one agent is illegal"], correctIndex: 0, explanation: "Failures are properties of the interaction, not the parts — emergence is only observable under load and interaction." },
        { id: "audit-ag13-q2", type: "Failure Modes", challenge: "Name them.", text: "Which is a multi-agent amplification failure mode?", options: ["Cascading errors, feedback loops, coordination failures (deadlock/infinite delegation), and emergent misalignment", "A single typo", "A slow GPU", "A missing model card"], correctIndex: 0, explanation: "These interaction-level behaviors are the core of advanced amplification risk." },
        { id: "audit-ag13-q3", type: "Chaos", challenge: "Inject faults.", text: "What is chaos engineering for agents?", options: ["Deliberately injecting faults (bad outputs, poisoned hand-offs, load) into the running system to verify containment holds", "Letting the system crash randomly", "Deleting agents", "Turning off logging"], correctIndex: 0, explanation: "It's the agentic analog of resilience engineering — the only way to get empirical evidence about behavior under stress." },
        { id: "audit-ag13-q4", type: "Cascade", challenge: "Catch it where?", text: "What is the pass criterion for a cascade test?", options: ["The injected error is caught at a validation boundary, not trusted and amplified downstream", "The error spreads to all agents", "The system ignores it", "Nothing is measured"], correctIndex: 0, explanation: "Hand-off validation should stop one agent's bad output from becoming another's premise." },
        { id: "audit-ag13-q5", type: "Model Collapse", challenge: "Train on exhaust.", text: "What is the model-collapse/data-loop risk?", options: ["Agent-generated content re-entering training/retrieval degrades quality over generations and entrenches bias", "Models get faster over time", "Data loops save storage", "It only affects images"], correctIndex: 0, explanation: "Recursive training on synthetic output collapses quality; lineage and synthetic-data governance prevent it." },
        { id: "audit-ag13-q6", type: "Containment", challenge: "Whole system.", text: "How must containment work for a multi-agent system?", options: ["System-wide and tested — validated hand-offs, loop caps, system-level circuit breakers, and a kill switch that halts the whole system", "One agent's local try/catch", "A single retry", "No containment needed"], correctIndex: 0, explanation: "Breakers must trip on system-level anomalies and the kill switch must stop all agents and in-flight actions." },
        { id: "audit-ag13-q7", type: "Evidence", challenge: "Survived stress.", text: "What is the strongest advanced-amplification evidence?", options: ["A documented injected-fault test the containment survived ('we caused a cascade and it was contained in N seconds')", "A pretty architecture diagram", "A vendor promise", "A long policy document"], correctIndex: 0, explanation: "Survived stress beats design assurances — empirical evidence of containment under fault." },
        { id: "audit-ag13-q8", type: "Finding", challenge: "Untested system.", text: "What is the finding to fear in a production multi-agent system?", options: ["It has never been stress-tested, so its first real cascade will also be its first test — at scale", "It uses too many agents", "It is too well documented", "It logs too much"], correctIndex: 0, explanation: "Theoretical containment is not evidence; an untested system's first cascade is uncontrolled by definition." },
      ],
    },
  },

  // ─── audit-ag14: Tracing & Observability Deep-Dive ───────────────────────────
  {
    epochId: "tech-audit-6",
    wonder: { name: "OpenTelemetry / CNCF", location: "San Francisco, California", era: "Present Day", emoji: "🛰️" },
    id: "audit-ag14",
    order: 4,
    title: "Tracing the Agent's Mind",
    subtitle: "Spans, traces, and evidence integrity — reconstructing any decision",
    category: "ai",
    xp: 290,
    badge: { id: "audit-ag-badge-14", name: "Trace Forensicist", emoji: "🛰️" },
    challengeType: "quiz",
    info: {
      tagline: "If you can't replay exactly what the agent saw, thought, and did — step by step — you can't audit it. Tracing is the agent's flight recorder.",
      flowchart: `flowchart TD
  REQ["Production action R-4471"] --> SPANS["Span tree"]
  SPANS --> IN["Inputs + retrieved context"]
  SPANS --> MC["Model calls - version, params"]
  SPANS --> TC["Tool calls - args, result"]
  SPANS --> DEC["Decisions + hand-offs"]
  IN --> RC["Full replay"]
  MC --> RC
  TC --> RC
  DEC --> RC
  RC --> DEF["Explainable + defensible"]`,
      examples: [
        {
          label: "Is the trace actually proof?",
          code: `trace_id:     8f2a...   agent invoice-reconciler v3.2.0
depth:        inputs + model + tool + decisions -> full   OK
store:        WORM (write-once), hash-chained             OK
signed by:    deploy key (binds trace to agent version)   OK
retention:    24 months (EU AI Act Art. 12)               OK
PII in trace: redacted + access-controlled                OK
=> reconstructable AND tamper-evident -> admissible evidence`,
        },
      ],
      year: 2025,
      overview: [
        "Observability is the evidentiary backbone of every other advanced control: evals, integration limits, and amplification containment all depend on being able to see what the agent actually did. The advanced audit goes deep on tracing — the structured, step-by-step record of an agent's execution — because it is the artifact that makes reconstruction, forensics, and continuous monitoring possible. Weak tracing caps the quality of the entire audit.",
        "An agent trace is a tree of spans capturing each step:\n- The inputs and retrieved context the agent saw.\n- Each model call (prompt, model version, parameters, response).\n- Each tool call (name, arguments, result, latency, errors).\n- Decisions, hand-offs to other agents, and the final output.\nThe standard is converging on OpenTelemetry with GenAI/agent semantic conventions, so traces are vendor-neutral and analyzable. The auditor checks that traces capture this full depth, not just the final answer.",
        "The reconstruction standard is the test: for any production action, can the team replay precisely what the agent saw, every model and tool call, every decision, and the resulting action — enough to explain and, ideally, reproduce it? This is the question from the baseline epoch, now held to a forensic standard. 'We log the outputs' fails it; 'here is the full span tree for request X with inputs, tool calls, and the model version live at the time' passes it.",
        "Evidence integrity is the advanced twist: a trace is only proof if it can't have been altered. The audit checks that logs and traces are tamper-evident — append-only or write-once stores, time-stamping, and ideally cryptographic linkage so an artifact can be shown to be the original and tied to the specific agent version that produced it. Mutable logs that an operator could edit after an incident are weak evidence; in regulated or litigation contexts, they may be worthless.",
        "Tracing also carries its own risks the auditor must weigh: traces contain prompts, retrieved data, and outputs that may include PII or secrets, so they need access control, retention policy, and redaction — observability can become a data-leak surface if logged carelessly. And retention must match obligation: the EU AI Act and many regulators require logs be kept for defined periods to enable traceability. The auditor balances 'capture enough to reconstruct' against 'don't turn the trace store into a breach.'",
      ],
      technical: {
        title: "Auditing Traces and Their Integrity",
        body: [
          "Depth test: sample production traces and verify each captures inputs/context, every model call (with version + params), every tool call (args/result/errors), decisions, hand-offs, and final action. Artifact: trace samples, telemetry schema (OpenTelemetry GenAI conventions). Gap: traces that record only prompts and final outputs can't support forensics.",
          "Reconstruction test (forensic standard): pick a real action and require a full replay — what the agent saw, did, and decided, with the exact config live at the time. Artifact: the reconstructed span tree tied to the release manifest. This is the single most important observability test.",
          "Integrity test: verify traces/logs are tamper-evident (append-only/WORM, timestamped, ideally signed or hash-chained) and bound to the agent version that produced them. Artifact: log-store configuration, integrity/signing scheme. Mutable logs are weak evidence, especially under regulation or litigation.",
          "Trace-as-data-risk test: verify trace stores have access control, retention aligned to obligations, and PII/secret redaction so observability doesn't become an exfiltration target. Artifact: retention policy, redaction config, access logs. Balance reconstruction depth against data-protection duty.",
        ],
        codeExample: {
          label: "An agent trace span tree (what full-depth tracing looks like)",
          code: `trace_id: 8f2a... | agent: invoice-reconciler v3.2.0 | req: R-4471
└─ span: run                              status=ok  2,310ms
   ├─ input: "reconcile invoice INV-88"   (context hash: c91d)
   ├─ span: model.call  claude(vN) temp=0  420ms
   │    prompt=prompt@v3.2  out="call get_invoice(INV-88)"
   ├─ span: tool.get_invoice  args={id:INV-88}  88ms  ok
   ├─ span: tool.get_ledger_entry  args={id:L-2231} 102ms ok
   ├─ span: model.call  → "amounts differ $1,204; flag"  510ms
   ├─ span: decision  discrepancy<$10k -> no human gate
   └─ span: tool.flag_discrepancy  ok -> ticket T-9912
integrity: WORM store, hash-chained, signed by deploy key | retained 24m`,
        },
      },
      incident: {
        title: "The Unexplainable Decision With No Trace",
        when: "Recurring, 2023–2025",
        where: "Production AI/agent systems under regulatory or legal scrutiny",
        impact: "Organizations unable to explain or defend automated decisions; regulatory and legal exposure",
        body: [
          "A pattern that turns a manageable incident into a crisis: an automated agent makes a consequential decision — denies a claim, flags a customer, executes a transaction — and when challenged by a regulator, a court, or the customer, the organization cannot explain why. The system logged the outcome but not the reasoning, the inputs, or the version of the logic that produced it. With no trace, there is no explanation, no defense, and no way to prove the decision was made correctly or to rule out discrimination.",
          "This is increasingly not just an operational problem but a legal one. Regulations demand that significant automated decisions be explainable and that high-risk AI systems keep logs enabling traceability; 'the AI did it and we don't know how' is not an acceptable answer to a regulator. The organization that can't reconstruct a decision has effectively no defense, and in some regimes the inability to explain is itself a violation.",
          "The deeper failure is treating observability as an operational nicety rather than a control objective and an evidence requirement. Full-depth tracing — inputs, model and tool calls, decisions, the version live at the time — is what converts 'the agent decided' into 'here is exactly what it saw and did, and here is the policy it followed.' Tamper-evident storage is what makes that record trustworthy when it matters most: when someone has an incentive to alter it.",
          "For the auditor the standard is uncompromising at the advanced level: reconstruction is not a nice-to-have, it is the precondition for assurance, accountability, and legal defensibility. An agent making consequential decisions without full-depth, tamper-evident, version-bound tracing has a deficiency that undermines everything — and the right time to find it is in an audit, not in a courtroom.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Agent Execution", sub: "models, tools, decisions", type: "attacker" },
          { label: "Full-Depth Spans", sub: "OpenTelemetry GenAI", type: "system" },
          { label: "Tamper-Evident Store", sub: "WORM, signed, version-bound", type: "victim" },
          { label: "Reconstruct + Defend", sub: "explainable, provable", type: "result" },
        ],
      },
      timeline: [
        { year: 2023, event: "LLM observability tools add prompt/tool-call tracing" },
        { year: 2024, event: "OpenTelemetry GenAI semantic conventions standardize agent traces", highlight: true },
        { year: 2024, event: "EU AI Act logging/traceability obligations finalized for high-risk systems" },
        { year: 2025, event: "Tamper-evident, version-bound traces become an assurance expectation" },
      ],
      keyTakeaways: [
        "Tracing is the evidentiary backbone of advanced assurance — weak tracing caps the quality of the entire audit",
        "An agent trace is a span tree: inputs/context, each model call (with version), each tool call (args/result/errors), decisions, hand-offs, final action",
        "OpenTelemetry GenAI semantic conventions make traces vendor-neutral and analyzable",
        "The forensic reconstruction standard: replay exactly what the agent saw, did, and decided, with the config live at the time",
        "Evidence integrity requires tamper-evident storage (append-only/WORM, timestamped, signed/hash-chained) bound to the agent version",
        "Traces contain PII/secrets — they need access control, retention aligned to obligations, and redaction, or observability becomes a leak surface",
        "An unreconstructable consequential decision is a legal and regulatory exposure, not just an operational gap",
      ],
      references: [
        { title: "OpenTelemetry — Semantic Conventions for GenAI", url: "https://opentelemetry.io/docs/specs/semconv/gen-ai/" },
        { title: "EU AI Act — Article 12 (record-keeping / logging)", url: "https://artificialintelligenceact.eu/article/12/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-ag14-q1", type: "Role", challenge: "Why it matters.", text: "Why is tracing the backbone of advanced assurance?", options: ["Evals, integration limits, and amplification containment all depend on seeing what the agent actually did — weak tracing caps the whole audit", "It makes logs colorful", "It speeds the model", "It replaces evals"], correctIndex: 0, explanation: "Observability is the evidence base every other advanced control relies on." },
        { id: "audit-ag14-q2", type: "Structure", challenge: "What a trace holds.", text: "What should a full-depth agent trace capture?", options: ["Inputs/context, each model call (with version), each tool call (args/result/errors), decisions, hand-offs, and the final action", "Only the final answer", "Only errors", "Only the prompt"], correctIndex: 0, explanation: "Full-depth spans are what enable reconstruction; output-only logs can't support forensics." },
        { id: "audit-ag14-q3", type: "Standard", challenge: "Vendor-neutral.", text: "What standard is agent tracing converging on?", options: ["OpenTelemetry with GenAI/agent semantic conventions", "A proprietary per-vendor format", "Plain text emails", "Screenshots"], correctIndex: 0, explanation: "OpenTelemetry GenAI conventions make traces portable and analyzable across tools." },
        { id: "audit-ag14-q4", type: "Reconstruction", challenge: "Forensic standard.", text: "What is the forensic reconstruction standard?", options: ["For any action, replay exactly what the agent saw, did, and decided, with the config live at the time", "Summarize what probably happened", "Trust the operator's memory", "Check the dashboard average"], correctIndex: 0, explanation: "Precise, version-bound replay is the precondition for assurance and legal defensibility." },
        { id: "audit-ag14-q5", type: "Integrity", challenge: "Proof, not notes.", text: "Why must traces be tamper-evident?", options: ["A trace is only proof if it can't have been altered — mutable logs are weak evidence, especially under regulation or litigation", "Tamper-evidence is faster", "It saves storage", "Logs are never disputed"], correctIndex: 0, explanation: "Append-only/WORM, timestamped, signed/version-bound storage makes the record trustworthy when someone may want to alter it." },
        { id: "audit-ag14-q6", type: "Trace Risk", challenge: "Observability cuts both ways.", text: "What risk do traces themselves introduce?", options: ["They contain prompts, data, and outputs with possible PII/secrets, so they need access control, retention limits, and redaction", "They make the agent slower forever", "They cannot be stored", "They have no risk"], correctIndex: 0, explanation: "Carelessly logged traces become a data-leak surface; observability must be governed." },
        { id: "audit-ag14-q7", type: "Retention", challenge: "Keep how long.", text: "What drives how long traces must be retained?", options: ["Regulatory obligations (e.g., EU AI Act traceability) and the need to reconstruct decisions later", "Whatever is cheapest", "Delete them daily", "Random choice"], correctIndex: 0, explanation: "Retention must match legal/traceability obligations while respecting data-protection limits." },
        { id: "audit-ag14-q8", type: "Real Pattern", challenge: "No trace, no defense.", text: "What happens when a consequential automated decision has no trace?", options: ["The organization can't explain or defend it — a legal/regulatory exposure, since 'the AI did it' isn't acceptable", "Nothing — outcomes are enough", "It is automatically compliant", "The model is blamed and it's resolved"], correctIndex: 0, explanation: "Inability to reconstruct a high-impact decision is itself a violation in some regimes and undermines all assurance." },
      ],
    },
  },

  // ─── audit-ag15: Continuous Controls Monitoring ──────────────────────────────
  {
    epochId: "tech-audit-6",
    wonder: { name: "The SOC", location: "24/7 Operations Center", era: "Present Day", emoji: "📡" },
    id: "audit-ag15",
    order: 5,
    title: "Continuous Controls Monitoring",
    subtitle: "From point-in-time audit to always-on assurance over agents",
    category: "ai",
    xp: 290,
    badge: { id: "audit-ag-badge-15", name: "Always-On Auditor", emoji: "📡" },
    challengeType: "quiz",
    info: {
      tagline: "A non-deterministic system that changes daily cannot be assured by a once-a-year audit. The advanced answer is continuous controls monitoring — and using agents to do it.",
      flowchart: `flowchart LR
  CTL["Each G-I-A control"] --> SIG["Emits a telemetry signal"]
  SIG --> CCM{"Within threshold?"}
  CCM -->|yes| OK["Green - logged"]
  CCM -->|no| AL["Alert + policy-as-code blocks"]
  OK --> AUD["Independent periodic audit"]
  AL --> AUD`,
      examples: [
        {
          label: "Continuous monitoring caught it between audits",
          code: `control:         INT egress allow-list
event:           agent attempted POST to an unknown host (14:02)
policy-as-code:  DENY (enforced, not just logged)
alert:           fired to on-call with trace attached
note:            a January annual audit would miss this March drift
caveat:          the monitor-agent is itself validated (kappa 0.82)`,
        },
      ],
      year: 2025,
      overview: [
        "Agents drift: models update, prompts change, data shifts, and behavior moves with them, so a point-in-time audit is stale almost immediately. The advanced answer is continuous controls monitoring (CCM) — automated, always-on verification that the controls are operating, not just that they once existed. This is where auditing agentic systems converges with the agentic-audit techniques from the earlier Agentic Continuous Monitoring track: you increasingly audit agents with agents.",
        "CCM reframes each control as a continuously-checked signal:\n- Generation — live groundedness/quality evals on sampled traffic with regression alerts.\n- Integration — continuous checks that agent identities stay least-privilege, tool allow-lists hold, and HITL gates fire on high-impact actions.\n- Amplification — real-time monitoring of rate/value limits, drift, anomalies, and circuit-breaker/kill-switch readiness.\nEach control emits telemetry; CCM watches the telemetry and alerts when a control degrades or fails.",
        "Policy-as-code is the enabling mechanism. Controls expressed as machine-readable policy (release gates, identity scopes, egress rules, limit thresholds) can be evaluated automatically and continuously, and 'policy cards' / machine-readable governance can be enforced at runtime. This turns the control catalog from a document the auditor checks once into executable rules the system enforces and reports on every minute. The auditor's role shifts to verifying the policies are correct, complete, and actually enforced.",
        "Automated evidence collection is the payoff for the audit function. Instead of issuing an evidence request and waiting, the auditor consumes a live control dashboard and an automatically-assembled, continuously-current evidence trail. Drift in any control is flagged in near-real-time rather than discovered at the next annual review. This is how an audit function keeps pace with systems that change faster than any manual cycle.",
        "The advanced caution: CCM is itself a system that must be audited. If you use agents to monitor agents, those auditor-agents have their own G-I-A risks (a monitoring agent can hallucinate compliance, be blind to a failure mode, or be gamed), and policy-as-code can be wrong or incompletely enforced. The mature auditor validates the monitoring system — its coverage, its accuracy, its independence from the system it watches — and never lets 'the dashboard is green' substitute for evidence that the green is real. Continuous monitoring complements, but does not replace, periodic independent assurance.",
      ],
      technical: {
        title: "Auditing the Continuous-Monitoring System",
        body: [
          "Control-as-signal test: confirm each baseline control emits telemetry and has an automated check with a threshold and alert (groundedness regressions, identity-scope changes, limit breaches, gate firings). Artifact: CCM rule definitions, alert history, control-coverage map. Gap: controls with no continuous signal are only verified at audit time.",
          "Policy-as-code test: verify controls are expressed as machine-readable, automatically-evaluated policy (gates, scopes, egress, limits) and that the policy is actually enforced, not just reported. Artifact: policy definitions, enforcement points, a denied-action example. The reconstruction analog: 'show me a policy that blocked something this week.'",
          "Automated evidence test: confirm the system assembles a continuously-current evidence trail and a control dashboard the audit function can consume on demand. Artifact: live evidence/control dashboard, evidence export. This is what lets audit keep pace with daily-changing agents.",
          "Auditor-of-the-auditor test: if monitoring agents are used, audit them — coverage (what failure modes can they miss?), accuracy (validated like any eval/judge?), independence (can the monitored system influence them?), and gaming resistance. Artifact: monitoring-agent validation report. Never accept 'green dashboard' as evidence the green is real.",
        ],
        codeExample: {
          label: "Continuous controls monitoring — controls as live signals",
          code: `CCM DASHBOARD — invoice-reconciler  (last 24h)
control                         signal              status
-----------------------------------------------------------------
GEN groundedness (live evals)   0.961 (gate 0.95)   OK
GEN regression alert            none                OK
INT identity scope             unchanged, least-priv OK
INT HITL gate fired            14/14 on >$10k        OK
INT egress policy              0 violations          OK
AMP rate/value limits          within bounds         OK
AMP drift (behavioral)         +1.2% (alert @ +5%)   OK
AMP kill-switch readiness      tested 6d ago         OK
-----------------------------------------------------------------
policy-as-code: 1 action BLOCKED this week (out-of-scope tool call)
monitor-agent: validated vs human sample (kappa 0.82) | independent
NOTE: green != assured — periodic independent audit still required.`,
        },
      },
      incident: {
        title: "Why Annual Audits Miss Daily Drift",
        when: "The structural problem CCM solves",
        where: "Any fast-changing AI deployment",
        impact: "Control failures that exist for months between point-in-time audits",
        body: [
          "Consider the timeline mismatch at the heart of agentic assurance: a traditional audit cycle is annual or quarterly, but an agent's behavior can change in a day — a model update, a prompt tweak, a shift in input distribution, a new tool. A control that was operating at the January audit can silently fail in March and not be noticed until the next review, leaving a months-long window where the assurance on file is simply false. The faster the system changes, the wider the gap between 'last audited' and 'currently true.'",
          "Real failures live in that gap: an identity quietly broadened during an incident and never re-scoped; a prompt edit that weakened a safety instruction; a model update that changed refusal behavior; a feedback loop that built slowly over weeks. None of these announce themselves, and a point-in-time audit can only catch the ones that happen to be present on audit day. This is not a hypothetical — it's the default failure mode of applying legacy audit cadence to systems that change continuously.",
          "Continuous controls monitoring closes the gap by making the controls report on themselves all the time, so a degradation is flagged when it happens rather than at the next review. The control catalog becomes executable policy; the evidence trail becomes continuously current; and the audit function consumes live signals instead of stale snapshots. It's the same shift that the Agentic Continuous Monitoring track applied to IT audit, now turned on the agents themselves.",
          "The mature position holds two truths at once: CCM is necessary because periodic audit can't keep pace, and CCM is not sufficient because the monitoring system itself can be wrong, incomplete, or gamed. The advanced auditor builds and relies on continuous monitoring and independently validates it and still performs periodic deep assurance. Always-on monitoring plus periodic independent audit is the operating model; either one alone leaves a gap the other is there to cover.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Controls", sub: "as live signals", type: "attacker" },
          { label: "Policy-as-Code", sub: "auto-evaluated, enforced", type: "system" },
          { label: "CCM + Auditor Agents", sub: "always-on, validated", type: "victim" },
          { label: "Current Assurance", sub: "+ periodic independent audit", type: "result" },
        ],
      },
      timeline: [
        { year: 2023, event: "Continuous controls monitoring matures in IT/security audit" },
        { year: 2024, event: "Policy-as-code and machine-readable governance applied to AI controls", highlight: true },
        { year: 2025, event: "Agents used to continuously audit agents (agentic CCM)" },
        { year: 2026, event: "Always-on + periodic independent audit becomes the agentic operating model" },
      ],
      keyTakeaways: [
        "Agents drift daily, so point-in-time audits go stale immediately — the advanced answer is continuous controls monitoring (CCM)",
        "CCM reframes each G-I-A control as a continuously-checked telemetry signal with thresholds and alerts",
        "Policy-as-code makes the control catalog executable and runtime-enforced, not a document checked once a year",
        "Automated evidence collection gives the audit function a live, continuously-current control dashboard and evidence trail",
        "Auditing agents with agents converges with the Agentic Continuous Monitoring track — but auditor-agents have their own G-I-A risks",
        "Validate the monitoring system: coverage, accuracy, independence, gaming-resistance — never accept 'green dashboard' as proof the green is real",
        "Operating model = always-on CCM + periodic independent audit; neither alone is sufficient",
      ],
      references: [
        { title: "Policy Cards — machine-readable runtime governance for AI agents", url: "https://arxiv.org/abs/2510.24383" },
        { title: "ISACA — Continuous Auditing / Continuous Monitoring", url: "https://www.isaca.org/resources" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-ag15-q1", type: "Why CCM", challenge: "Drift vs. cadence.", text: "Why is point-in-time audit insufficient for agents?", options: ["Agents drift daily (model/prompt/data changes), so a control can fail for months between reviews while stale assurance stays on file", "Agents never change", "Audits are illegal", "Auditors are slow readers"], correctIndex: 0, explanation: "The timeline mismatch between daily change and annual audit creates a months-long gap CCM closes." },
        { id: "audit-ag15-q2", type: "Reframe", challenge: "Controls as signals.", text: "How does CCM treat each control?", options: ["As a continuously-checked telemetry signal with a threshold and alert", "As a one-time checkbox", "As a paper policy", "As the vendor's job"], correctIndex: 0, explanation: "Each control emits telemetry; CCM watches it and alerts when a control degrades or fails." },
        { id: "audit-ag15-q3", type: "Policy-as-Code", challenge: "Executable controls.", text: "What does policy-as-code enable?", options: ["Controls expressed as machine-readable policy that is automatically evaluated and enforced at runtime, and reported on continuously", "Prettier documents", "Slower deploys", "Manual checklists"], correctIndex: 0, explanation: "It turns the control catalog into executable, enforced rules rather than a once-checked document." },
        { id: "audit-ag15-q4", type: "Payoff", challenge: "Live evidence.", text: "What is the payoff of automated evidence collection for the audit function?", options: ["A live, continuously-current control dashboard and evidence trail instead of waiting on evidence requests", "Fewer auditors needed forever", "No more controls", "A bigger model"], correctIndex: 0, explanation: "Audit consumes current signals and keeps pace with systems that change faster than manual cycles." },
        { id: "audit-ag15-q5", type: "Convergence", challenge: "Agents auditing agents.", text: "How does CCM relate to the Agentic Continuous Monitoring approach?", options: ["You increasingly audit agents with agents — but auditor-agents carry their own G-I-A risks", "They are unrelated", "It eliminates agents", "It bans automation"], correctIndex: 0, explanation: "Agentic CCM applies agent automation to monitoring agents, which must itself be governed." },
        { id: "audit-ag15-q6", type: "Self-Risk", challenge: "Audit the monitor.", text: "Why must the continuous-monitoring system itself be audited?", options: ["Monitoring agents can hallucinate compliance, miss failure modes, or be gamed, and policy-as-code can be wrong or unenforced", "Monitors are always correct", "It saves money", "Dashboards can't fail"], correctIndex: 0, explanation: "Validate coverage, accuracy, independence, and gaming-resistance; a green dashboard isn't proof the green is real." },
        { id: "audit-ag15-q7", type: "Enforcement", challenge: "Reported vs. enforced.", text: "What distinguishes real policy-as-code from theater?", options: ["It actually blocks/denies actions, evidenced by a real denied-action example — not just reports", "It has a dashboard", "It is written in YAML", "It is documented well"], correctIndex: 0, explanation: "Enforcement (a policy that blocked something this week) is the proof, mirroring the eval/release-gate logic." },
        { id: "audit-ag15-q8", type: "Operating Model", challenge: "Both, not either.", text: "What is the mature agentic-assurance operating model?", options: ["Always-on CCM plus periodic independent audit — neither alone is sufficient", "CCM only, drop audits", "Annual audit only", "No monitoring needed"], correctIndex: 0, explanation: "Continuous monitoring keeps pace; independent periodic audit catches what the monitor misses or can't validate about itself." },
      ],
    },
  },

  // ─── audit-ag16: Evidence Integrity & the AIBOM Supply Chain ─────────────────
  {
    epochId: "tech-audit-6",
    wonder: { name: "Linux Foundation / OpenSSF", location: "San Francisco, California", era: "Present Day", emoji: "🔗" },
    id: "audit-ag16",
    order: 6,
    title: "Provenance & the AI Supply Chain",
    subtitle: "AIBOM, signing, and attestation — proving where the agent came from",
    category: "ai",
    xp: 290,
    badge: { id: "audit-ag-badge-16", name: "Provenance Verifier", emoji: "🔗" },
    challengeType: "quiz",
    info: {
      tagline: "An agent is assembled from models, data, tools, and dependencies you mostly didn't build. Provenance is how you prove what's inside and that no one swapped it.",
      flowchart: `flowchart LR
  DATA["Data"] --> MODEL["Model - signed"]
  MODEL --> AGENT["Agent config: prompt, tools"]
  AGENT --> REL["Release: AIBOM + attestation"]
  REL --> ACT["Production action"]
  ACT --> VER{"Verify: prod == approved?"}
  VER -->|break| FIND["Unsigned component -> FINDING"]
  VER -->|intact| TRUST["Verifiable provenance"]`,
      examples: [
        {
          label: "Provenance verify on a third-party base model",
          code: `component:   base model from a public hub
pinned:      by exact hash? NO (alias "prod")    -> FINDING
serialized:  format executes code on load         -> high risk
attestation: vendor model card / safety eval? missing -> FINDING
fix:         pin exact hash; require signed weights;
             add vendor attestation + your own use-case evals`,
        },
      ],
      year: 2025,
      overview: [
        "A modern agent is a supply chain: a base model (usually third-party), fine-tuning data, prompts, tools and MCP servers, libraries, and the orchestration code. Advanced integration/amplification assurance has to answer where each component came from, whether it's authentic and unmodified, and whether you can trust the parties that produced it. This is the AI supply-chain audit, and its central artifact is the AIBOM — the AI Bill of Materials.",
        "The AIBOM extends the software SBOM to AI:\n- It inventories models, datasets, tools, and dependencies with versions and provenance.\n- It records licenses (training-data and model licenses carry real legal risk), known issues, and evaluation references.\n- Agentic AIBOM schemas (extending SPDX/CycloneDX) add the orchestration and tool topology specific to agents.\nThe auditor checks that an AIBOM exists per release, is complete, and is generated automatically by the pipeline — a hand-maintained AIBOM is usually stale.",
        "Signing and attestation make the AIBOM trustworthy. Provenance frameworks from software supply-chain security (SLSA, in-toto, Sigstore) apply: artifacts are cryptographically signed, build steps produce attestations, and a verifier can confirm that the model and configuration running in production are exactly the ones that were tested and approved — not a substituted or tampered version. Without signing, an AIBOM is a claim; with it, the claim is verifiable.",
        "End-to-end provenance is the goal: an unbroken, verifiable chain from data → model → agent configuration → deployed release → action. This is what lets an auditor (or a regulator) trace any production action back through the exact agent version, its AIBOM, its evals, and its approvals. Breaks in the chain — an unsigned model pulled from a public hub, a tool with no provenance, a config that doesn't match the manifest — are the supply-chain findings.",
        "Third-party model attestation is the hardest and most important piece, because the base model is the component you understand least and control least. You can't inspect a closed model's training, so the audit relies on the vendor's documentation (model cards, safety evaluations, certifications), contractual assurances, and your own evals on your use case — plus verification that the specific model version is pinned and authentic. 'We use a reputable vendor' is not provenance; the auditor wants the attestations, the pinning, and the independent evals that turn vendor trust into verified evidence.",
      ],
      technical: {
        title: "Auditing AI Provenance",
        body: [
          "AIBOM completeness test: require a per-release AIBOM covering models, datasets, tools/MCP, dependencies, versions, licenses, and provenance, generated by the pipeline. Artifact: AIBOM (SPDX/CycloneDX-derived). Gap: missing components (especially tools and data) or a hand-maintained, stale AIBOM.",
          "Signing/attestation test: verify artifacts are signed and build steps produce attestations (SLSA/in-toto/Sigstore), and that a verifier confirms production == tested+approved. Artifact: signatures, attestations, verification logs. This is what turns the AIBOM from a claim into verifiable evidence and detects substitution/tampering.",
          "End-to-end provenance test: trace a production action back through deployed release → AIBOM → evals → approvals → data/model origin; identify any break in the chain. Artifact: provenance/lineage records linking action to source. Breaks (unsigned model, unprovenanced tool, manifest mismatch) are findings.",
          "Third-party attestation test: require vendor model cards/safety evals/certifications, contractual assurances, version pinning + authenticity verification, and the organization's own use-case evals. Artifact: vendor attestations, due-diligence records, pinning manifest. 'Reputable vendor' is not provenance; verified attestations + pinning + independent evals are.",
        ],
        codeExample: {
          label: "A signed AIBOM provenance check (verifiable supply chain)",
          code: `PROVENANCE VERIFY — invoice-reconciler v3.2.0
component            version      provenance/signature        verdict
-------------------------------------------------------------------
base model          vendor-vN    vendor attestation + pinned hash  OK
fine-tune data      ft-set@v4    lineage recorded, licensed        OK
prompt              recon@v3.2   signed (deploy key)               OK
tool: get_invoice   erp-mcp@1.4  signed + provenance               OK
tool: web_fetch     oss-mcp@2.0  NO signature, public hub          FINDING
orchestration       app@9c3f     SLSA attestation verified         OK
-------------------------------------------------------------------
chain: data -> model -> agent -> release -> action  : 1 BREAK
Finding [INTEGRATION/HIGH]: web_fetch tool unsigned & unprovenanced
-> pin + sign or replace; cannot attest production == approved.`,
        },
      },
      incident: {
        title: "Poisoned Models and Malicious Packages on Public Hubs",
        when: "2024–2025",
        where: "Public model hubs and package registries",
        impact: "Malicious models and dependencies distributed to unsuspecting builders; supply-chain compromise",
        body: [
          "Security researchers repeatedly found malicious artifacts on public model and package hubs: models serialized with formats that execute code on load (so 'downloading a model' runs an attacker's payload), and typosquatted or trojaned packages that ship in the dependency tree of AI applications. Because agents are assembled largely from third-party components pulled from public sources, an organization can build a perfectly designed agent on top of a compromised model or library and inherit the compromise without ever writing a line of malicious code.",
          "This is the AI version of the software supply-chain attacks that drove SolarWinds-era reforms, and the response is the same: you cannot trust a component because of where you got it; you trust it because its provenance is verifiable. An AIBOM tells you what's actually inside; signing and attestation tell you it's authentic and unmodified; pinning ensures you keep getting the version you vetted rather than a silently updated one. Without those, 'we used a popular model from a public hub' is an unverified — and demonstrably risky — assumption.",
          "For the auditor the supply chain is now squarely in scope, and the questions are concrete: is there a complete AIBOM? Are components signed and attested? Can you verify production matches what was approved? Is the third-party model pinned, authentic, and backed by attestations and your own evals? A break anywhere — an unsigned model, an unprovenanced tool, a dependency no one can account for — is a finding, because it's exactly the gap these attacks exploit.",
          "The deeper point is that provenance is what makes every other control meaningful. Your beautiful evals, identity scoping, and containment all assume the agent in production is the agent you tested. If a component can be silently swapped — a model updated, a tool re-pulled, a dependency trojaned — that assumption breaks and the assurance evaporates. Signed, attested, end-to-end provenance is the control that protects the integrity of the entire audit, which is why it sits at the heart of advanced agentic assurance.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Data + Model + Tools + Deps", sub: "the AI supply chain", type: "attacker" },
          { label: "AIBOM", sub: "inventory + licenses", type: "system" },
          { label: "Sign + Attest + Pin", sub: "SLSA / in-toto / Sigstore", type: "victim" },
          { label: "Verifiable Provenance", sub: "prod == tested+approved", type: "result" },
        ],
      },
      timeline: [
        { year: 2021, event: "SolarWinds drives software supply-chain security (SBOM, SLSA)" },
        { year: 2024, event: "AIBOM defined; malicious models/packages found on public hubs", highlight: true },
        { year: 2025, event: "Agentic AIBOM schemas + signing/attestation extend to AI supply chains" },
        { year: 2026, event: "Verifiable provenance expected for regulated/high-risk agents" },
      ],
      keyTakeaways: [
        "A modern agent is a supply chain (model, data, prompts, tools/MCP, dependencies) — provenance proves what's inside and that nothing was swapped",
        "The AIBOM is the central artifact: a per-release inventory of models, data, tools, and dependencies with versions, licenses, and provenance, pipeline-generated",
        "Signing and attestation (SLSA, in-toto, Sigstore) turn the AIBOM from a claim into verifiable evidence and detect tampering/substitution",
        "Goal: end-to-end provenance from data → model → agent config → release → action; breaks in the chain are findings",
        "Third-party model attestation is hardest: require vendor model cards/safety evals, contractual assurances, pinning + authenticity, and your own use-case evals",
        "Malicious models/packages on public hubs make the supply chain a live attack surface — 'reputable vendor' is not provenance",
        "Provenance protects every other control: assurance assumes production == tested; signed, attested provenance is what makes that true",
      ],
      references: [
        { title: "SLSA — Supply-chain Levels for Software Artifacts", url: "https://slsa.dev/" },
        { title: "CycloneDX — AIBOM / ML-BOM", url: "https://cyclonedx.org/capabilities/mlbom/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-ag16-q1", type: "Framing", challenge: "Agent as supply chain.", text: "Why is an agent treated as a supply chain in advanced assurance?", options: ["It is assembled from third-party models, data, tools, and dependencies you mostly didn't build, each a trust question", "It ships in boxes", "It has one component", "It is fully custom-built"], correctIndex: 0, explanation: "Provenance must answer where each component came from and whether it's authentic and unmodified." },
        { id: "audit-ag16-q2", type: "AIBOM", challenge: "Central artifact.", text: "What is an AIBOM?", options: ["An AI Bill of Materials — a per-release inventory of models, data, tools, and dependencies with versions, licenses, and provenance", "A billing invoice", "A model benchmark", "A network map"], correctIndex: 0, explanation: "The AIBOM extends the SBOM to AI and is the central supply-chain audit artifact." },
        { id: "audit-ag16-q3", type: "Signing", challenge: "Claim to proof.", text: "What do signing and attestation add to an AIBOM?", options: ["They make it verifiable — confirming production matches what was tested/approved and detecting tampering/substitution", "They make it longer", "They encrypt the model", "They speed the agent"], correctIndex: 0, explanation: "SLSA/in-toto/Sigstore turn a claimed inventory into cryptographically verifiable evidence." },
        { id: "audit-ag16-q4", type: "End-to-End", challenge: "Trace the chain.", text: "What is the provenance goal?", options: ["An unbroken, verifiable chain from data → model → agent config → release → action", "A single signature on the app", "A vendor logo", "A README file"], correctIndex: 0, explanation: "End-to-end provenance lets any action be traced to its exact source; breaks are findings." },
        { id: "audit-ag16-q5", type: "Third Party", challenge: "Hardest component.", text: "How is a closed third-party base model attested?", options: ["Vendor model cards/safety evals/certifications, contractual assurances, version pinning + authenticity, and your own use-case evals", "By trusting the brand", "By reading the price", "By ignoring it"], correctIndex: 0, explanation: "'Reputable vendor' isn't provenance; verified attestations + pinning + independent evals are." },
        { id: "audit-ag16-q6", type: "Threat", challenge: "Public hubs.", text: "What supply-chain threat makes provenance urgent?", options: ["Malicious/poisoned models and packages on public hubs can compromise a well-designed agent with no malicious code of your own", "Models cost too much", "Hubs are slow", "Licenses are confusing"], correctIndex: 0, explanation: "You can inherit compromise from a third-party component pulled from a public source." },
        { id: "audit-ag16-q7", type: "Finding", challenge: "Break in the chain.", text: "An agent uses an unsigned tool pulled from a public hub with no provenance. What is this?", options: ["A supply-chain finding — you can't attest production matches what was approved", "Acceptable if popular", "A model bug", "Out of scope"], correctIndex: 0, explanation: "An unprovenanced component breaks the verifiable chain and is the gap such attacks exploit." },
        { id: "audit-ag16-q8", type: "Why It Matters", challenge: "Protects everything.", text: "Why does provenance protect every other control?", options: ["All assurance assumes the agent in production is the one you tested; provenance is what makes that true", "It replaces evals", "It speeds deploys", "It has no broader effect"], correctIndex: 0, explanation: "If components can be silently swapped, every other control's evidence evaporates." },
      ],
    },
  },

  // ─── audit-ag17: Regulatory Mapping & Assurance Standards ────────────────────
  {
    epochId: "tech-audit-6",
    wonder: { name: "EU AI Office", location: "Brussels, Belgium", era: "Present Day", emoji: "🏛️" },
    id: "audit-ag17",
    order: 7,
    title: "Mapping to the Rulebook",
    subtitle: "EU AI Act, NIST AI RMF, ISO 42001 — turning controls into compliance evidence",
    category: "ai",
    xp: 290,
    badge: { id: "audit-ag-badge-17", name: "Compliance Cartographer", emoji: "🏛️" },
    challengeType: "quiz",
    info: {
      tagline: "Regulators don't ask 'is your agent good?' They ask 'show me you meet Article 12.' Advanced assurance maps your G-I-A controls to the obligations that bind you.",
      flowchart: `flowchart TD
  CTL["A G-I-A control"] --> ACT["EU AI Act article"]
  CTL --> RMF["NIST RMF function"]
  CTL --> ISO["ISO 42001 clause"]
  ACT --> EVD["One evidence set"]
  RMF --> EVD
  ISO --> EVD
  EVD --> REP["Multi-framework compliance"]`,
      examples: [
        {
          label: "State the gap the way a regulator reads it",
          code: `control:     human oversight / override (ag18)
EU AI Act:   Article 14 (human oversight)     status: PARTIAL
finding:     "No effective human oversight meeting Art. 14"  (HIGH)
not:         "weak HITL"        # vague != actionable or legible
remediation: add context to approval UI; cap reviewer load; test override`,
        },
      ],
      year: 2025,
      overview: [
        "Advanced agentic assurance has to speak the language of the rulebooks the organization answers to. The good news is that the same G-I-A control set, evidenced through the artifact trail, satisfies most obligations — you don't build different controls per regulation, you map the controls you have to each framework's requirements. This stage turns the audit from an internal exercise into compliance evidence.",
        "The EU AI Act is the binding law for many deployments. For high-risk AI systems it mandates concrete obligations that map directly onto this track's controls:\n- Risk management system (your G-I-A risk assessment).\n- Data governance (your data lineage and quality controls).\n- Record-keeping/logging for traceability (Article 12 — your tracing and evidence trail).\n- Human oversight (Article 14 — your HITL and override design).\n- Transparency, accuracy, robustness, and cybersecurity (your evals, guardrails, and integration controls).\nGeneral-purpose/agentic AI carries additional transparency and documentation duties. The auditor maps each obligation to the evidencing control and flags gaps as compliance risk.",
        "NIST AI RMF is the voluntary US framework that structures the program. Its four functions — Govern, Map, Measure, Manage — give a lifecycle scaffold the G-I-A controls slot into: Govern (accountability, policy), Map (the system map and risk assessment), Measure (evals, monitoring, metrics), Manage (controls, response, continual improvement). It's the common organizing language for AI risk in the US and a clean way to show coverage.",
        "ISO/IEC 42001 is the certifiable AI management system (AIMS) standard — the AI analog of ISO 27001. It requires policy, defined roles and accountability, risk and impact assessment, objectives, operational controls, monitoring, and continual improvement. An organization seeking certification needs a management system, not just point controls, and the auditor checks the AIMS is real and operating. SOC 2 (with AI considerations) and emerging ISACA credentials (AAIA — Advanced in AI Audit) round out the assurance-standard landscape.",
        "The advanced skill is building one control-to-obligation mapping that serves them all. A single matrix where each G-I-A control lists the EU AI Act article, NIST RMF function, and ISO 42001 clause it supports lets the organization evidence compliance across regimes from one body of work — and lets the auditor report gaps as specific, regulator-legible findings ('no logging meeting Article 12' rather than 'weak observability'). The controls are framework-agnostic; the mapping is what makes them count where it legally matters.",
      ],
      technical: {
        title: "The Control-to-Obligation Matrix",
        body: [
          "EU AI Act mapping test: for a high-risk/agentic system, map each obligation (risk management, data governance, Article 12 logging, Article 14 human oversight, accuracy/robustness/cybersecurity, transparency) to the evidencing control and artifact; flag unmet obligations as compliance findings. Artifact: obligation-to-control matrix, evidence references.",
          "NIST AI RMF mapping test: place controls under Govern/Map/Measure/Manage and check each function is covered; use it as the coverage scaffold and common language. Artifact: RMF function map. Gap: a function with no controls (often Govern — no accountability/policy).",
          "ISO 42001 readiness test: verify a real AI management system exists — policy, roles/accountability, risk + impact assessment, objectives, operational controls, monitoring, continual improvement — not just isolated controls. Artifact: AIMS documentation, internal-audit records. This is the difference between 'we have controls' and 'we have a governed program.'",
          "Cross-regime efficiency: maintain one master control matrix mapping each G-I-A control to EU AI Act article + NIST RMF function + ISO 42001 clause (+ SOC 2 criteria). Artifact: master mapping. It lets one audit produce multi-framework evidence and regulator-legible findings.",
        ],
        codeExample: {
          label: "One control, mapped across the rulebooks",
          code: `CONTROL: full-depth tamper-evident tracing (from ag14)
  EU AI Act:    Art. 12 (record-keeping/logging), Art. 13 (transparency)
  NIST AI RMF:  MEASURE (monitoring) + MANAGE (incident response)
  ISO/IEC 42001: A.6.2 operational controls; A.9 performance evaluation
  SOC 2:        CC7.2 (monitoring), CC7.3 (evaluation of events)
  Evidence:     trace samples, WORM store config, retention policy
  Status:       MET (high-risk system)  | Gap: none
---
CONTROL: human oversight / override (from ag18)
  EU AI Act:    Art. 14 (human oversight)   | Status: PARTIAL -> FINDING`,
        },
      },
      incident: {
        title: "The EU AI Act Becomes Enforceable — and Vague 'Responsible AI' Stops Counting",
        when: "2024–2026 (phased application)",
        where: "European Union and any provider serving the EU market",
        impact: "Binding obligations with significant penalties; documented evidence required, not good intentions",
        body: [
          "The EU AI Act moved AI governance from aspiration to law. It classifies systems by risk, imposes concrete obligations on high-risk and general-purpose AI, and backs them with substantial penalties for non-compliance — and it reaches any provider serving the EU market, not just EU companies. Overnight, 'we take responsible AI seriously' stopped being a sufficient answer; regulators can now ask to see the risk management system, the logs, the human-oversight design, and the technical documentation, and the absence of them is a legal exposure.",
          "This is precisely why the control-to-obligation mapping matters. An organization with strong G-I-A controls but no mapping can't efficiently prove compliance, and one with weak controls discovers its gaps are now regulatory findings with financial consequences. The Act's structure is, conveniently, close to good engineering practice — risk management, data governance, logging, human oversight, robustness — so a well-run agentic-audit program already produces most of the evidence; it just has to be mapped to the articles and shown.",
          "NIST AI RMF and ISO 42001 play complementary roles in this environment: the RMF gives a widely-accepted way to organize and demonstrate a risk-based program (increasingly referenced by US agencies and procurement), and ISO 42001 certification gives an externally-audited, internationally-recognized signal that a real AI management system exists. Together with the EU AI Act they form the assurance triangle most serious deployments now navigate — and an auditor fluent in all three can turn one engagement into evidence for each.",
          "The takeaway for advanced assurance is that compliance is downstream of controls, not a separate activity. Build and evidence the G-I-A controls through the artifact trail, maintain one mapping to the obligations that bind you, and the audit simultaneously improves the system and produces the documentation regulators require. The organizations that struggle are the ones that treated governance as a slide deck; the ones that built real controls find the regulatory burden is mostly a mapping exercise over work they already did.",
        ],
      },
      diagram: {
        nodes: [
          { label: "G-I-A Controls", sub: "the work you did", type: "attacker" },
          { label: "Map to Obligations", sub: "Act / RMF / 42001", type: "system" },
          { label: "Evidence the Articles", sub: "artifact trail", type: "victim" },
          { label: "Compliance + Findings", sub: "regulator-legible", type: "result" },
        ],
      },
      timeline: [
        { year: 2023, event: "NIST AI RMF 1.0 and ISO/IEC 42001 published" },
        { year: 2024, event: "EU AI Act adopted — binding, risk-tiered obligations", highlight: true },
        { year: 2025, event: "ISACA AAIA (Advanced in AI Audit) and AI-aware SOC 2 emerge" },
        { year: 2026, event: "EU AI Act high-risk obligations phase into force" },
      ],
      keyTakeaways: [
        "The same G-I-A control set, evidenced via the artifact trail, satisfies most obligations — you map controls to frameworks, you don't rebuild them",
        "EU AI Act (binding, high-risk): risk management, data governance, Article 12 logging, Article 14 human oversight, accuracy/robustness/cybersecurity, transparency",
        "NIST AI RMF (Govern/Map/Measure/Manage) is the organizing scaffold and common US language for the program",
        "ISO/IEC 42001 is the certifiable AI management system — a governed program, not isolated controls; SOC 2 + AAIA round out the landscape",
        "Build one master control-to-obligation matrix (Act article + RMF function + ISO clause + SOC 2 criteria) to evidence all regimes from one engagement",
        "Report gaps as regulator-legible findings ('no logging meeting Article 12'), not vague 'weak observability'",
        "Compliance is downstream of controls — vague 'responsible AI' no longer counts now that the EU AI Act is enforceable",
      ],
      references: [
        { title: "EU AI Act — full text and obligations", url: "https://artificialintelligenceact.eu/" },
        { title: "NIST AI RMF + ISO/IEC 42001 crosswalk resources", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-ag17-q1", type: "Principle", challenge: "Map, don't rebuild.", text: "How does advanced assurance handle multiple regulations?", options: ["Map the same G-I-A controls to each framework's obligations — you don't build different controls per regulation", "Build separate controls for each law", "Ignore all but one", "Outsource compliance entirely"], correctIndex: 0, explanation: "The controls are framework-agnostic; mapping makes them count across regimes from one body of work." },
        { id: "audit-ag17-q2", type: "EU AI Act", challenge: "Article 12.", text: "Which control evidences the EU AI Act's Article 12 record-keeping obligation?", options: ["Full-depth, tamper-evident tracing and the evidence trail", "A faster model", "A marketing page", "A bigger prompt"], correctIndex: 0, explanation: "Article 12 requires logging for traceability — the tracing/evidence trail is its evidencing control." },
        { id: "audit-ag17-q3", type: "EU AI Act", challenge: "Article 14.", text: "Which control maps to the EU AI Act's human-oversight requirement (Article 14)?", options: ["Human-in-the-loop and override design", "Output caching", "Model size", "A status dashboard color"], correctIndex: 0, explanation: "Article 14 human oversight maps to your HITL and override controls." },
        { id: "audit-ag17-q4", type: "NIST RMF", challenge: "Four functions.", text: "What does the NIST AI RMF provide?", options: ["A Govern/Map/Measure/Manage scaffold and common language the G-I-A controls slot into", "A binding penalty regime", "A model marketplace", "A pricing model"], correctIndex: 0, explanation: "The RMF is a voluntary organizing framework, not law — it structures and demonstrates the program." },
        { id: "audit-ag17-q5", type: "ISO 42001", challenge: "Program, not points.", text: "What does ISO/IEC 42001 require beyond individual controls?", options: ["A real AI management system — policy, roles/accountability, risk assessment, objectives, monitoring, continual improvement", "Only a privacy policy", "Just an AIBOM", "One signed model"], correctIndex: 0, explanation: "42001 is a certifiable management system, the difference between 'we have controls' and 'we have a governed program.'" },
        { id: "audit-ag17-q6", type: "Efficiency", challenge: "One matrix.", text: "What does a master control-to-obligation matrix achieve?", options: ["Evidencing compliance across EU AI Act, NIST RMF, ISO 42001, and SOC 2 from one engagement", "Replacing all controls", "Eliminating audits", "Choosing a model vendor"], correctIndex: 0, explanation: "One mapping lets a single audit produce multi-framework evidence and regulator-legible findings." },
        { id: "audit-ag17-q7", type: "Findings", challenge: "Speak their language.", text: "How should a compliance gap be reported?", options: ["As a regulator-legible finding (e.g., 'no logging meeting Article 12'), not vague 'weak observability'", "As a general suggestion", "Only verbally", "Not at all"], correctIndex: 0, explanation: "Mapping gaps to specific obligations makes them actionable and legally meaningful." },
        { id: "audit-ag17-q8", type: "Reality", challenge: "Enforceable now.", text: "What changed when the EU AI Act became enforceable?", options: ["Documented evidence is required, not good intentions — vague 'responsible AI' no longer suffices and gaps carry penalties", "Nothing — it's voluntary", "AI was banned", "Only EU firms are affected"], correctIndex: 0, explanation: "Binding obligations with penalties reach any provider serving the EU market; evidence must be shown." },
      ],
    },
  },

  // ─── audit-ag18: Auditing Autonomy & Human Oversight ─────────────────────────
  {
    epochId: "tech-audit-6",
    wonder: { name: "MIT", location: "Cambridge, Massachusetts", era: "Present Day", emoji: "🎚️" },
    id: "audit-ag18",
    order: 8,
    title: "Autonomy & Meaningful Human Control",
    subtitle: "Auditing oversight that's real — escalation, override, and accountability",
    category: "ai",
    xp: 290,
    badge: { id: "audit-ag-badge-18", name: "Oversight Examiner", emoji: "🎚️" },
    challengeType: "quiz",
    info: {
      tagline: "Almost every agent claims 'a human is in the loop.' The advanced audit asks whether that human has the context, time, authority, and will to actually say no.",
      flowchart: `flowchart TD
  CLAIM["'Human in the loop'"] --> Q1{"Context shown?"}
  Q1 -->|no| TH["Theatrical -> FINDING"]
  Q1 -->|yes| Q2{"Time + expertise?"}
  Q2 -->|no| TH
  Q2 -->|yes| Q3{"Rejection sticks + override tested?"}
  Q3 -->|no| TH
  Q3 -->|yes| REAL["Meaningful human control"]`,
      examples: [
        {
          label: "Is the gate real? Read the approval log",
          code: `approvals (90d):  212      rejections: 0          <-- red flag
avg review time:  4s       reviewer load: ~80/hr   <-- automation bias
context shown:    amount only (no reasoning / source)
override path:    never tested
verdict:          rubber stamp, not oversight -> Art. 14 FINDING`,
        },
      ],
      year: 2025,
      overview: [
        "Human oversight is the control most often claimed and least often real, and at the advanced level it deserves its own deep examination. As autonomy increases, oversight becomes the last line of defense — and a last line that is theatrical rather than functional is worse than none, because it creates false confidence. This stage audits whether 'meaningful human control' actually exists.",
        "Start by classifying real autonomy, not the label on the slide. Map where humans actually sit in the loop: in-the-loop (approves each action), on-the-loop (monitors, can intervene), or out-of-the-loop (fully autonomous). The audit verifies the claimed level matches reality — an 'on-the-loop' agent whose human can't actually see or stop actions in time is functionally out-of-the-loop, and should be assessed as such.",
        "Automation bias is the core human-factors risk the audit must probe. People over-trust automated outputs, especially under time pressure and at volume: a reviewer asked to approve hundreds of agent actions an hour will rubber-stamp them, and a confident AI recommendation suppresses independent judgment. So 'a human approves it' is not evidence of control — the audit checks whether the human has the information, the time, the competence, and the genuine authority to dissent, and whether dissent ever actually happens.",
        "Meaningful human control has testable properties:\n- Context — the human sees what they need to judge the action (the reasoning, the inputs, the stakes), not just a yes/no prompt.\n- Capability — they have the time and expertise to evaluate, not 300 approvals a minute.\n- Authority — they can actually reject or override, and rejection sticks.\n- A tested override/escalation path — stopping or correcting the agent works, and has been exercised.\nEvidence: approval logs showing real rejections, override drill records, reviewer workload data, escalation procedure tests.",
        "Accountability closes the loop. For any agent action there must be a clear answer to 'who is responsible?' — a named human or role accountable for the agent's behavior, with the attribution (per-agent identity, traces) to support it. Diffuse accountability ('the AI did it,' 'the team owns it') is itself a finding, because it means no one is actually answerable and oversight has no anchor. The Air Canada case from the baseline made the legal version concrete: the organization is accountable whether or not it arranged to be.",
      ],
      technical: {
        title: "Testing Whether Oversight Is Real",
        body: [
          "Autonomy classification test: map actual human position (in/on/out-of-the-loop) per action type; verify claimed autonomy matches reality (can the human actually see and stop actions in time?). Artifact: oversight design, intervention-latency data. A human who can't intervene in time isn't really 'on the loop.'",
          "Automation-bias test: examine reviewer workload and approval patterns; a near-100% approval rate, high volume per reviewer, or a yes/no prompt with no context all indicate rubber-stamping. Artifact: approval logs (with rejection rate), reviewer workload, the actual approval UI. Real oversight produces real rejections.",
          "Meaningful-control test: verify context (the human sees reasoning/inputs/stakes), capability (time/expertise), and authority (can reject and it sticks). Artifact: a sample of the information presented at approval, competency/role definitions, rejected-action examples that held.",
          "Override/escalation + accountability test: exercise the override and escalation path (does stopping the agent work?); confirm a named accountable owner per agent with attribution to support it. Artifact: override drill record, escalation test, accountability assignment. Diffuse accountability is a finding.",
        ],
        codeExample: {
          label: "Auditing a human-in-the-loop control for reality",
          code: `HITL AUDIT — invoice-reconciler approvals (>$10k actions)
claimed:        in-the-loop, human approves each >$10k action
reality check:
  approvals last 90d:        212
  rejections:                0          <-- RED FLAG (rubber-stamp?)
  avg review time:           4 seconds  <-- too short to judge
  context shown to approver: amount only (no reasoning/source) <-- gap
  reviewer load:             ~80 approvals/hour at peak         <-- bias
override path tested:        NO                                 <-- gap
accountable owner:           "the finance automation team"      <-- diffuse
FINDING [INTEGRATION/HIGH]: oversight is theatrical, not meaningful
-> add context to approval UI, cap reviewer load, test override,
   name an accountable individual, track rejection rate.`,
        },
      },
      incident: {
        title: "Automation Bias in the Cockpit and the Clinic",
        when: "Decades of human-factors research",
        where: "Aviation, healthcare, and now AI decision systems",
        impact: "Operators defer to automation even when it is wrong — the failure mode of 'a human is in the loop'",
        body: [
          "Long before AI agents, human-factors research in aviation and medicine documented automation bias: when a system makes a recommendation, humans tend to follow it even against their own judgment and contrary evidence. Pilots have followed faulty automation into danger; clinicians have deferred to incorrect decision-support alerts; operators monitoring 'just in case' miss the rare event precisely because the system is usually right and vigilance decays. The lesson is decades old and brutal: putting a human next to an automated system does not automatically produce oversight.",
          "Agentic AI inherits this in full and amplifies it. An agent's outputs are fluent and confident, the volume of actions to review is high, and the reviewer is often less expert than the system appears to be — every ingredient automation-bias research warns about. A 'human-in-the-loop' that asks a fatigued reviewer to approve hundreds of plausible-looking agent actions per shift is not a control; it is a rubber stamp with a person's name on it, and it will pass exactly the bad action it was meant to catch.",
          "This is why the advanced audit treats oversight as a human-factors control to be tested empirically, not a checkbox to be confirmed. The questions come straight from the research: Does the reviewer have the context and time to actually evaluate? Is their workload compatible with attention? Do they ever reject anything? Is there a real, tested way to override and escalate? Is someone actually accountable? A control that fails these is theatrical, and theatrical oversight is dangerous precisely because everyone believes it works.",
          "The constructive side is that meaningful human control is achievable when designed deliberately: surface the agent's reasoning and the stakes at the decision point, cap reviewer load so attention is possible, reserve human gates for genuinely high-impact actions (so they aren't drowned in trivial ones), require expertise matched to the decision, test the override path, and assign clear accountability. The auditor's job is to tell the difference between oversight that's built this way and oversight that's a dialog box — and to call the dialog box what it is.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Claimed Oversight", sub: "'human in the loop'", type: "attacker" },
          { label: "Test Reality", sub: "context, load, rejections", type: "system" },
          { label: "Override + Accountability", sub: "tested, named owner", type: "victim" },
          { label: "Meaningful Control", sub: "or a finding", type: "result" },
        ],
      },
      timeline: [
        { year: 1999, event: "Automation-bias research formalized in aviation/medicine human factors" },
        { year: 2024, event: "EU AI Act Article 14 mandates effective human oversight for high-risk AI", highlight: true },
        { year: 2025, event: "'Meaningful human control' becomes a tested audit property for agents" },
        { year: 2026, event: "Reviewer-workload and rejection-rate metrics enter oversight audits" },
      ],
      keyTakeaways: [
        "Oversight is the most-claimed, least-real control — as autonomy rises it's the last line of defense, and theatrical oversight is worse than none",
        "Classify real autonomy (in/on/out-of-the-loop); a human who can't see or stop actions in time isn't really on the loop",
        "Automation bias means 'a human approves it' isn't evidence — high volume, time pressure, and confident AI suppress real judgment",
        "Meaningful human control is testable: context, capability (time/expertise), authority (rejection sticks), and a tested override/escalation path",
        "Real oversight produces real rejections — a near-100% approval rate with seconds-per-review is rubber-stamping",
        "Accountability must be specific: a named owner per agent with attribution; diffuse 'the AI did it' is itself a finding",
        "Meaningful control is achievable by design — surface reasoning, cap reviewer load, gate only high-impact actions, test override, assign accountability",
      ],
      references: [
        { title: "EU AI Act — Article 14 (human oversight)", url: "https://artificialintelligenceact.eu/article/14/" },
        { title: "Parasuraman & Manzey — Complacency and Bias in Human Use of Automation", url: "https://journals.sagepub.com/doi/10.1177/0018720810376055" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-ag18-q1", type: "Why Deep", challenge: "Last line.", text: "Why does human oversight deserve deep examination as autonomy rises?", options: ["It becomes the last line of defense, and theatrical oversight is worse than none because it creates false confidence", "It is the cheapest control", "It is legally optional", "Autonomy removes the need for it"], correctIndex: 0, explanation: "A last line that only looks functional fails exactly when it's needed and misleads everyone." },
        { id: "audit-ag18-q2", type: "Classify", challenge: "In/on/out.", text: "What must the audit verify about claimed autonomy level?", options: ["That the actual human position (in/on/out-of-the-loop) matches the claim — e.g., a human who can't intervene in time isn't really on the loop", "That it uses the newest model", "That it has a dashboard", "That the label sounds safe"], correctIndex: 0, explanation: "Functional reality, not the slide label, determines the true autonomy and how it's assessed." },
        { id: "audit-ag18-q3", type: "Automation Bias", challenge: "Approve ≠ control.", text: "Why isn't 'a human approves it' proof of oversight?", options: ["Automation bias — high volume, time pressure, and confident AI lead reviewers to rubber-stamp instead of judging", "Humans never make mistakes", "Approval is binding", "It always means careful review"], correctIndex: 0, explanation: "Decades of human-factors research show people over-trust automation, especially at scale and speed." },
        { id: "audit-ag18-q4", type: "Meaningful Control", challenge: "Testable properties.", text: "What are the testable properties of meaningful human control?", options: ["Context, capability (time/expertise), authority (rejection sticks), and a tested override/escalation path", "Speed, cost, and color", "Model size and version", "Number of approvers only"], correctIndex: 0, explanation: "These four properties distinguish real control from a dialog box, and each leaves evidence." },
        { id: "audit-ag18-q5", type: "Red Flag", challenge: "Read the logs.", text: "What approval pattern signals rubber-stamping?", options: ["Near-100% approval rate, seconds-per-review, high reviewer load, and a yes/no prompt with no context", "Occasional rejections with documented reasons", "Reasonable review time per action", "Reviewers matched to the decision"], correctIndex: 0, explanation: "Real oversight produces real rejections; these patterns indicate the gate isn't functioning." },
        { id: "audit-ag18-q6", type: "Override", challenge: "Does stop work?", text: "What must be true of the override/escalation path?", options: ["It actually stops or corrects the agent and has been tested (drilled), not just designed", "It exists on paper", "It is documented somewhere", "It is the vendor's responsibility"], correctIndex: 0, explanation: "An untested override is an assumption — the same logic as the kill switch." },
        { id: "audit-ag18-q7", type: "Accountability", challenge: "Who answers.", text: "Why is diffuse accountability ('the AI did it') a finding?", options: ["It means no one is actually answerable, so oversight has no anchor — a named owner with attribution is required", "It speeds decisions", "It is more fair", "It satisfies regulators"], correctIndex: 0, explanation: "Accountability must be specific; Air Canada showed the organization is answerable regardless." },
        { id: "audit-ag18-q8", type: "Design", challenge: "Make it real.", text: "How is meaningful human control achieved by design?", options: ["Surface reasoning/stakes at the decision, cap reviewer load, gate only high-impact actions, require matched expertise, test override, assign accountability", "Add more approvers with no context", "Approve everything faster", "Remove the human entirely"], correctIndex: 0, explanation: "Deliberate design converts a checkbox into oversight a human can actually exercise." },
      ],
    },
  },

  // ─── audit-ag19: Agentic Incident Response & Forensics ───────────────────────
  {
    epochId: "tech-audit-6",
    wonder: { name: "CISA", location: "Arlington, Virginia", era: "Present Day", emoji: "🚨" },
    id: "audit-ag19",
    order: 9,
    title: "When the Agent Goes Wrong",
    subtitle: "Incident response and forensics across the Generation-Integration-Amplification chain",
    category: "ai",
    xp: 290,
    badge: { id: "audit-ag-badge-19", name: "Incident Forensicist", emoji: "🚨" },
    challengeType: "quiz",
    info: {
      tagline: "An agent will eventually do something wrong. Whether that's a near-miss or a catastrophe depends entirely on the artifacts you built before it happened.",
      flowchart: `flowchart LR
  INC["Agent does harm"] --> DET["Detect - drift / anomaly"]
  DET --> CON["Contain - kill switch"]
  CON --> REC["Reconstruct via traces"]
  REC --> RCA["Root cause across G-I-A"]
  RCA --> LRN["New evals + tighter controls"]
  LRN --> INC`,
      examples: [
        {
          label: "Same failure shape, different outcome — the trail + the brakes",
          code: `Knight Capital:   no fast stop   -> $440M in 45 min  (containment fail)
Zillow Offers:    drift unseen   -> $304M writedown  (detection fail)
Air Canada/Mata:  no trail/grounding -> liability     (evidence fail)
Tay:              killed in 24h  -> limited           (good containment)
=> resilience is built BEFORE the incident, in the artifacts`,
        },
      ],
      year: 2025,
      overview: [
        "Despite every control, an autonomous agent will eventually cause an incident — a bad decision, an unauthorized action, a data leak, a cascade. Advanced assurance therefore includes agentic incident response and forensics: the ability to detect, contain, investigate, and learn from an agent's failure. This is where all the earlier artifacts pay off or fail catastrophically, because you can only investigate what you instrumented.",
        "Detection and containment come first and depend on the amplification controls. Detection means anomaly/drift monitoring and alerting caught the deviation early; containment means the kill switch, circuit breakers, and blast-radius limits actually stopped it and bounded the damage. An incident discovered late, with no working stop, is the amplification nightmare — so the first forensic question is often 'how long did it run before anyone noticed and could stop it?'",
        "Investigation is reconstruction across the G-I-A chain. Using the traces (ag14), the auditor/responder rebuilds what happened: what did the agent generate (Generation), what did it read and which tools/identities did it use (Integration), and how did the action propagate at scale or across agents (Amplification)? A complete trace turns this into a clean timeline; an incomplete one leaves an unexplainable gap — and the quality of the post-incident analysis is set entirely by the quality of the evidence trail built beforehand.",
        "Root-cause analysis maps the failure to its layer(s) and to the missing or failed control. Was it an ungrounded generation that no eval caught? An over-scoped identity that an injection abused? A cascade no circuit breaker stopped? Usually it's a chain across layers (the baseline's Tay and the advanced multi-agent cases showed this), and the RCA names each contributing control gap so remediation is specific. 'The AI made a mistake' is not a root cause; 'the discrepancy gate had no amount threshold and the identity could write to the ledger' is.",
        "The loop closes by feeding lessons back into controls and evidence. Every incident becomes new eval cases (so the failure is caught next time), tightened guardrails or scopes, added monitoring for the missed signal, and updated runbooks — and it tests whether the artifact trail was sufficient, often producing its own finding ('we couldn't fully reconstruct this — fix the tracing gap'). A mature program treats incidents as the highest-value input to control improvement, and an agent that can't be investigated after an incident has a deficiency that this stage exists to prevent.",
      ],
      technical: {
        title: "The Agentic Incident Lifecycle",
        body: [
          "Detect + contain: verify anomaly/drift alerts fire on deviation and that kill switch / circuit breakers / blast-radius limits actually stop and bound the incident. Artifact: alert history, containment action log, time-to-detect and time-to-contain metrics. The core questions: did we notice, and could we stop it?",
          "Investigate (G-I-A reconstruction): rebuild the timeline from traces — generation (what it produced), integration (what it read, tools/identities used), amplification (how it propagated). Artifact: full trace timeline, identity/attribution records. Reconstruction quality is capped by tracing quality (ag14) and provenance (ag16).",
          "Root-cause across layers: map the incident to its G-I-A layer(s) and the specific missing/failed control(s); expect a chain, not a single cause. Artifact: RCA document with per-layer control gaps. 'The AI erred' is not an RCA; a named control gap is.",
          "Learn + close the loop: convert the incident into new eval cases, tightened guardrails/scopes, added monitoring, updated runbooks, and an assessment of whether the evidence trail was sufficient. Artifact: post-incident review, updated eval set, control changes, tracing-gap findings. Incidents are the highest-value input to control improvement.",
        ],
        codeExample: {
          label: "An agentic incident post-mortem mapped to G-I-A",
          code: `INCIDENT IR-2026-014  agent: invoice-reconciler
detect:    drift alert fired +37min after onset   (target <5min)  GAP
contain:   kill switch halted agent in 3s once triggered          OK
timeline (from traces):
  GEN: agent mis-read a scanned invoice -> wrong amount
  INT: injection in invoice "notes" field told it to skip the gate
  AMP: auto-approved 140 similar invoices before drift alert
root cause (chain):
  [GEN] no OCR-confidence check on scanned inputs       -> missing
  [INT] discrepancy gate bypassable via notes field     -> failed
  [AMP] no volume anomaly alert on approval rate         -> missing
remediate: add OCR-confidence eval; harden gate vs injected notes;
           add approval-rate anomaly alert; lower detect threshold.
evidence:  trace complete -> full reconstruction possible           OK`,
        },
      },
      incident: {
        title: "The Difference Between a Near-Miss and a Catastrophe Is the Trail",
        when: "The recurring agentic-incident lesson",
        where: "Across every case in this track",
        impact: "Investigability and containment determine whether an agent failure is contained or company-defining",
        body: [
          "Replay the track's incidents through an incident-response lens and a pattern emerges. Knight Capital had no fast stop, so a deployment error ran 45 minutes to $440M — a containment failure. Zillow's drift wasn't detected until quarterly results — a detection failure. Air Canada and Mata had no trail and no verification — an investigability and prevention failure. Tay was caught fast and shut down in 24 hours — relatively good containment limiting a bad outcome. In every case, the gap between near-miss and catastrophe was set by detection speed, containment, and the evidence available afterward.",
          "That is the core message of agentic incident response: you cannot prevent every failure of a non-deterministic system acting in the world, so resilience — how fast you detect, how cleanly you contain, how completely you can investigate, and how well you learn — becomes the decisive control. And every one of those capabilities is built before the incident, in the artifacts and controls this whole track describes. There is no way to retroactively trace an action that wasn't instrumented or stop one that had no kill switch.",
          "The forensic reconstruction across G-I-A is what makes the investigation actionable rather than a shrug. Mapping an incident to its layers and naming the specific control gaps turns 'the AI messed up' into a concrete remediation list, and feeding those back as eval cases and tightened controls is what stops the same failure recurring. An organization that does this gets safer with every incident; one that treats incidents as inexplicable acts of an AI gets the same incident again.",
          "For the auditor, incident-readiness is itself an audit object assessed before anything goes wrong: are there detection and containment controls, is the evidence trail sufficient to investigate, is there an RCA process that maps to G-I-A, and does a feedback loop into controls exist? An agent in production with no incident-response capability is one bad input away from discovering, the hard way, that it built no ability to detect, stop, explain, or learn — which is exactly the deficiency this stage is here to find first.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Agent Incident", sub: "bad action / cascade", type: "attacker" },
          { label: "Detect + Contain", sub: "alerts, kill switch", type: "system" },
          { label: "Reconstruct (G-I-A)", sub: "traces, RCA", type: "victim" },
          { label: "Learn -> Controls", sub: "evals, scopes, runbooks", type: "result" },
        ],
      },
      timeline: [
        { year: 2012, event: "Knight Capital — no fast stop turns a deploy error into $440M" },
        { year: 2021, event: "Zillow — undetected model drift surfaces only at quarterly results" },
        { year: 2024, event: "AI incident response frameworks and databases mature", highlight: true },
        { year: 2025, event: "G-I-A forensic reconstruction becomes standard post-incident practice" },
      ],
      keyTakeaways: [
        "An autonomous agent will eventually cause an incident — advanced assurance includes detecting, containing, investigating, and learning from it",
        "Detection (anomaly/drift alerts) and containment (kill switch, breakers, blast-radius) are the first line; ask 'how long did it run before we noticed and could stop it?'",
        "Investigation is G-I-A reconstruction from traces — quality of analysis is capped by the quality of the evidence trail built beforehand",
        "Root-cause maps the incident to its layer(s) and the specific missing/failed control — usually a chain; 'the AI erred' is not an RCA",
        "Close the loop: convert incidents into new eval cases, tightened scopes/guardrails, added monitoring, and runbook updates",
        "Across Knight, Zillow, Air Canada, Mata, and Tay, the gap between near-miss and catastrophe was detection speed, containment, and the evidence trail",
        "Incident-readiness is itself an audit object — assess detection, containment, investigability, and the feedback loop before anything goes wrong",
      ],
      references: [
        { title: "NIST SP 800-61 — Computer Security Incident Handling (adapted for AI)", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" },
        { title: "AI Incident Database", url: "https://incidentdatabase.ai/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-ag19-q1", type: "Premise", challenge: "It will happen.", text: "Why does advanced assurance include incident response?", options: ["A non-deterministic agent acting in the world will eventually fail, so detection, containment, investigation, and learning are decisive controls", "Incidents are impossible with good models", "Only humans cause incidents", "Audits prevent all failure"], correctIndex: 0, explanation: "You can't prevent every failure, so resilience becomes the decisive control — and it's built beforehand." },
        { id: "audit-ag19-q2", type: "First Line", challenge: "Notice and stop.", text: "What are the first-line agentic incident controls?", options: ["Anomaly/drift detection plus containment (kill switch, circuit breakers, blast-radius limits)", "A press release", "A bigger model", "A new prompt"], correctIndex: 0, explanation: "Detection speed and working containment determine how far an incident gets." },
        { id: "audit-ag19-q3", type: "Investigation", challenge: "Rebuild it.", text: "How is an agentic incident investigated?", options: ["By reconstructing the timeline from traces across the G-I-A chain — what it generated, read/used, and how it propagated", "By guessing from the outcome", "By asking the model what it did", "By reading the marketing site"], correctIndex: 0, explanation: "Reconstruction quality is capped by the tracing and provenance built beforehand." },
        { id: "audit-ag19-q4", type: "RCA", challenge: "Real root cause.", text: "What makes a valid agentic root-cause analysis?", options: ["Mapping the incident to its G-I-A layer(s) and the specific missing/failed control(s), usually a chain", "Concluding 'the AI made a mistake'", "Blaming the user", "Noting the model version only"], correctIndex: 0, explanation: "Named control gaps drive specific remediation; 'the AI erred' is not a root cause." },
        { id: "audit-ag19-q5", type: "Loop", challenge: "Get safer.", text: "How does a mature program close the incident loop?", options: ["Converts incidents into new eval cases, tightened scopes/guardrails, added monitoring, and updated runbooks", "Files the report and moves on", "Disables the agent forever", "Hides the incident"], correctIndex: 0, explanation: "Incidents are the highest-value input to control improvement, including fixing tracing gaps." },
        { id: "audit-ag19-q6", type: "Pattern", challenge: "Near-miss vs. catastrophe.", text: "Across Knight, Zillow, Air Canada, and Tay, what set the severity?", options: ["Detection speed, containment, and the evidence trail available afterward", "The model's size", "The time of day", "The vendor chosen"], correctIndex: 0, explanation: "Resilience capabilities — built before the incident — decided whether failures were contained or catastrophic." },
        { id: "audit-ag19-q7", type: "Dependency", challenge: "Investigate what?", text: "Why is the post-incident analysis only as good as pre-incident instrumentation?", options: ["You can only investigate what you instrumented — an un-traced action leaves an unexplainable gap", "Analysis is always perfect", "Instrumentation slows the agent", "Traces are optional"], correctIndex: 0, explanation: "No retroactive tracing exists; the evidence trail must be built before the incident." },
        { id: "audit-ag19-q8", type: "Audit Object", challenge: "Assess readiness.", text: "How should incident-readiness be treated in an audit?", options: ["As its own audit object — assess detection, containment, investigability, and the feedback loop before anything goes wrong", "Only after an incident occurs", "As the vendor's job", "As out of scope"], correctIndex: 0, explanation: "An agent with no incident-response capability has a deficiency to find proactively." },
      ],
    },
  },

  // ─── audit-ag20: The Advanced Agentic Audit Program (capstone) ───────────────
  {
    epochId: "tech-audit-6",
    wonder: { name: "The Chief Audit Executive", location: "The Board's Audit Committee", era: "Present Day", emoji: "🏆" },
    id: "audit-ag20",
    order: 10,
    title: "Building the Agentic Audit Function",
    subtitle: "From auditing one agent to running a mature, continuous assurance program",
    category: "ai",
    xp: 320,
    badge: { id: "audit-ag-badge-20", name: "Chief Agentic Auditor", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "The baseline taught you to audit an agent. The advanced track ends by building the function that assures a fleet of them — continuously, at scale, for the board.",
      flowchart: `flowchart TD
  INV["Agent inventory - tiered by risk"] --> L1["Line 1: ADLC gates"]
  INV --> L2["Line 2: continuous monitoring"]
  INV --> L3["Line 3: periodic independent audit"]
  L1 --> BOARD["Board: agentic risk posture"]
  L2 --> BOARD
  L3 --> BOARD
  BOARD --> IMP["Findings -> better controls"]
  IMP --> INV`,
      examples: [
        {
          label: "Risk-based tiering of the agent fleet",
          code: `agents:       47    (3 shadow agents found -> FINDING)
high-risk 6:  deep audit + intensive CCM
medium 15:    baseline audit + CCM
low 26:       automated CCM only
independence: monitor-agents validated; CAE reports to the board
trend:        findings closing > opening; mean-time-to-detect -60%`,
        },
      ],
      year: 2025,
      overview: [
        "This capstone assembles the whole advanced track into an operating model: a mature, continuous, risk-based agentic-audit function that can assure many agents across an organization, not just examine one. It integrates everything — G-I-A risk, the artifact lifecycle, advanced per-layer testing, evidence integrity, continuous monitoring, regulatory mapping, oversight, and incident response — into a program the Chief Audit Executive and the board can rely on.",
        "A mature function is risk-based and tiered. You can't deeply audit every agent equally, so you maintain an agent inventory, classify each by autonomy and blast radius, and allocate assurance accordingly: high-autonomy, high-impact agents (money, safety, customers, regulated decisions) get deep periodic audits plus intensive continuous monitoring; low-risk assistive agents get lightweight baseline checks and automated monitoring. The inventory itself is a deliverable — an organization that can't list its agents can't assure them, and shadow agents are a finding.",
        "The operating model combines three layers of assurance: embedded controls and gates in the ADLC pipeline (first line builds it right), continuous controls monitoring (always-on signal, partly agent-driven), and periodic independent audit (deep, independent validation). This maps to the three-lines model and resolves the cadence problem: continuous monitoring keeps pace with daily change, while independent periodic audit catches what monitoring misses or can't validate about itself. Neither alone suffices.",
        "The function needs the right capabilities and independence. Auditing agents requires skills most audit teams are still building — understanding of LLMs, evals, prompt injection, identity, MLOps — so a mature program invests in capability or partners for it. And independence matters more, not less, when you're using agents to audit agents: the assurance function must be able to validate the monitoring it relies on, resist 'the dashboard is green' pressure, and report uncomfortable findings to the audit committee without the deploying teams able to soften them.",
        "Finally, a mature function reports a clear, board-level picture and improves continuously. The deliverable to the audit committee is the organization's agentic risk posture: how many agents, at what autonomy/blast radius, with what G-I-A coverage, what open findings by severity, and what regulatory exposure — answered with evidence, not adjectives. And the program feeds itself: incidents, monitoring signals, and audit findings continuously sharpen the control catalog, the eval sets, and the risk model. That is the end state this entire two-epoch track builds toward — not the ability to audit an agent, but the capability to give an organization durable, evidenced assurance over autonomous AI as it scales.",
      ],
      technical: {
        title: "The Operating Model of an Agentic Audit Function",
        body: [
          "Inventory + tiering: maintain a complete agent inventory (a deliverable in itself; shadow agents are a finding), classify each by autonomy × blast radius, and allocate assurance by tier — deep audit + intensive monitoring for high-risk, lightweight checks for low-risk. Artifact: agent register, risk tiering, assurance plan.",
          "Three-lines assurance: embedded ADLC controls/gates (first line), continuous controls monitoring incl. agentic CCM (detective/second line), and periodic independent audit (third line). Artifact: control-by-line map. Resolves the cadence problem — continuous keeps pace, periodic validates independently.",
          "Capability + independence: build/partner for LLM-eval/injection/identity/MLOps skills; preserve audit independence, especially when auditing agents with agents (validate the monitor; resist 'green dashboard'; report freely to the committee). Artifact: capability plan, independence safeguards.",
          "Board reporting + continuous improvement: report agentic risk posture (agent count × tier, G-I-A coverage, findings by severity, regulatory exposure) with evidence; feed incidents/signals/findings back into the control catalog, eval sets, and risk model. Artifact: board risk report, improvement backlog.",
        ],
        codeExample: {
          label: "An agentic audit function — board posture summary",
          code: `AGENTIC RISK POSTURE — Q2 2026   (to Audit Committee)
agents in inventory:      47   (3 shadow agents found -> FINDING)
by tier:   high-risk 6 | medium 15 | low 26
assurance: high-risk -> deep audit + intensive CCM
           low-risk  -> baseline + automated CCM
G-I-A coverage (high-risk 6): Gen 6/6 | Int 5/6 | Amp 4/6
open findings:  2 critical, 7 high, 19 medium
regulatory:     4 high-risk EU AI Act systems -> 1 Art.14 gap (open)
assurance model: ADLC gates + CCM + periodic independent audit (3 lines)
independence:   monitor-agents validated; CAE reports directly to board
trend: findings closing > opening; mean-time-to-detect down 60%`,
        },
      },
      incident: {
        title: "The Organizations That Scaled Agents Safely — and the Ones That Didn't",
        when: "The 2025–2026 inflection",
        where: "Enterprises deploying agents at scale",
        impact: "Assurance capability becomes the differentiator between safe scaling and accumulating hidden risk",
        body: [
          "As organizations moved from one pilot agent to fleets of them, a divide opened. Some scaled safely: they kept an agent inventory, tiered assurance by risk, embedded controls in the pipeline, monitored continuously, audited the high-risk agents deeply, mapped to the EU AI Act, and reported a clear posture to their board. Others scaled by accumulation — agents spun up by different teams, no central inventory, controls applied unevenly, oversight assumed rather than tested — and built a growing pile of unassured autonomous systems acting on real money, data, and customers. The first group could answer 'how exposed are we?'; the second couldn't even list their agents.",
          "The difference wasn't model quality or even control sophistication on any single agent; it was the presence of an assurance function. A program that systematically inventories, tiers, controls, monitors, audits, and reports turns a fleet of agents from an opaque risk into a managed one. Without it, every new agent adds invisible exposure, the first major incident is a surprise, and the organization discovers — usually in front of a regulator or a board — that it had no idea what its agents could do or whether anyone was watching.",
          "This is the destination the whole two-epoch track has been driving toward. The baseline epoch built the ability to scope, evidence, test, and report on a single agent against the G-I-A framework. The advanced epoch deepened each layer, hardened the evidence, made assurance continuous, mapped it to the rulebooks, made oversight real, and prepared for incidents. The capstone ties them into a function — because the real-world problem isn't auditing one agent in a lab; it's giving an organization durable, evidenced assurance over autonomous AI while it scales faster than anyone is comfortable with.",
          "The closing lesson is the one that started the track: an agent that can act is an audit object, and a fleet of them is an audit function. The organizations that thrive in the agentic era will be the ones that treated assurance as core infrastructure — built the inventory, the controls, the monitoring, the independence, and the board-level honesty — rather than a compliance afterthought bolted on after the first incident. You now have the framework to build exactly that: the Generation-Integration-Amplification lens, the artifact lifecycle, and the operating model to run it at scale.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Agent Inventory", sub: "tiered by risk", type: "attacker" },
          { label: "Three Lines", sub: "gates + CCM + audit", type: "system" },
          { label: "Capability + Independence", sub: "validated, free to report", type: "victim" },
          { label: "Board Assurance", sub: "evidenced posture", type: "result" },
        ],
      },
      timeline: [
        { year: 2024, event: "IIA/ISACA publish AI audit frameworks and agentic considerations" },
        { year: 2025, event: "Organizations move from single agents to agent fleets", highlight: true },
        { year: 2026, event: "Risk-tiered, continuous agentic-audit functions become the assurance standard" },
        { year: 2026, event: "Board-level agentic risk posture reporting expected of mature programs" },
      ],
      keyTakeaways: [
        "The end state is a mature, continuous, risk-based agentic-audit function that assures a fleet of agents, not just one",
        "Risk-based tiering: maintain an agent inventory (shadow agents are a finding), classify by autonomy × blast radius, and allocate assurance by tier",
        "Three lines of assurance: embedded ADLC gates + continuous controls monitoring (incl. agentic CCM) + periodic independent audit — resolves the cadence problem",
        "Invest in capability (LLM evals, injection, identity, MLOps) and protect independence — especially when auditing agents with agents",
        "Report a board-level agentic risk posture with evidence: agent count × tier, G-I-A coverage, findings by severity, regulatory exposure",
        "Feed incidents, monitoring signals, and findings back into the control catalog, eval sets, and risk model for continuous improvement",
        "The differentiator for scaling agents safely is the assurance function itself — treat assurance as core infrastructure, not a compliance afterthought",
      ],
      references: [
        { title: "The IIA — Global Internal Audit Standards & AI guidance", url: "https://www.theiia.org/" },
        { title: "ISACA — Advanced in AI Audit (AAIA) and AI audit programs", url: "https://www.isaca.org/credentialing/aaia" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-ag20-q1", type: "End State", challenge: "Function, not engagement.", text: "What is the end state the advanced track builds toward?", options: ["A mature, continuous, risk-based agentic-audit function that assures a fleet of agents, not just one", "A single perfect audit report", "A faster model", "A bigger prompt library"], correctIndex: 0, explanation: "The real problem is durable, evidenced assurance over autonomous AI at scale — a function, not one engagement." },
        { id: "audit-ag20-q2", type: "Tiering", challenge: "Can't audit all equally.", text: "How does a mature function allocate assurance?", options: ["Risk-based tiering — an agent inventory classified by autonomy × blast radius, with deep audit + monitoring for high-risk and lightweight checks for low-risk", "Equal deep audits for every agent", "Audit only new agents", "Audit nothing automated"], correctIndex: 0, explanation: "Tiering focuses scarce assurance where autonomy and blast radius make it matter most." },
        { id: "audit-ag20-q3", type: "Inventory", challenge: "List them first.", text: "Why is the agent inventory a deliverable, and what are shadow agents?", options: ["You can't assure agents you can't list; undocumented 'shadow' agents are a finding", "Inventories are optional paperwork", "Shadow agents are faster", "The vendor keeps the inventory"], correctIndex: 0, explanation: "Unknown agents are unassured exposure; the inventory is the foundation of the program." },
        { id: "audit-ag20-q4", type: "Three Lines", challenge: "Combine assurance.", text: "What three layers make up the operating model?", options: ["Embedded ADLC gates, continuous controls monitoring (incl. agentic CCM), and periodic independent audit", "Design, lunch, and launch", "One annual audit only", "Monitoring only"], correctIndex: 0, explanation: "The three lines resolve the cadence problem — continuous keeps pace, periodic validates independently." },
        { id: "audit-ag20-q5", type: "Independence", challenge: "Audit the auditor.", text: "Why does independence matter more when auditing agents with agents?", options: ["The function must validate the monitoring it relies on, resist 'green dashboard' pressure, and report freely to the committee", "Independence is less important with automation", "Agents are always objective", "It speeds approvals"], correctIndex: 0, explanation: "Agent-driven monitoring can be wrong or gamed; independent validation and reporting protect the assurance." },
        { id: "audit-ag20-q6", type: "Capability", challenge: "New skills.", text: "What capability does a mature agentic-audit function require?", options: ["Understanding of LLMs, evals, prompt injection, identity, and MLOps — built or partnered for", "Only traditional financial audit", "Only legal expertise", "No special skills"], correctIndex: 0, explanation: "Auditing agents needs technical AI capability most audit teams are still building." },
        { id: "audit-ag20-q7", type: "Board", challenge: "What the committee gets.", text: "What does the function report to the board?", options: ["The agentic risk posture with evidence: agent count × tier, G-I-A coverage, findings by severity, and regulatory exposure", "A list of model names", "The compute bill", "A demo video"], correctIndex: 0, explanation: "The board needs an evidenced posture, not adjectives — the synthesis of the whole program." },
        { id: "audit-ag20-q8", type: "Differentiator", challenge: "Scale safely.", text: "What differentiates organizations that scale agents safely?", options: ["The presence of an assurance function — inventory, tiered controls, monitoring, independence, and board-level honesty — treated as core infrastructure", "The newest models", "The most agents", "The biggest marketing budget"], correctIndex: 0, explanation: "Assurance capability, not model quality, separates managed risk from accumulating hidden exposure." },
      ],
    },
  },
];
