import type { StageConfig, EpochConfig, CtfConfig } from "./types";
import { mkDeepCtf } from "./ctf-deep";

export const threatFrameworksEpoch: EpochConfig = {
  id: "threat-frameworks",
  name: "Threat Frameworks",
  subtitle: "Thinking Like an Analyst — Kill Chain to ATT&CK",
  description:
    "Tools find alerts; frameworks turn alerts into understanding. This epoch teaches the mental models analysts use to make sense of an adversary: the Cyber Kill Chain, the Diamond Model, MITRE ATT&CK and the ATT&CK Navigator, the Pyramid of Pain, MITRE D3FEND, and STIX/TAXII for sharing — all tied together by the threat-intelligence lifecycle and threat-informed defense. Hands-on analyst exercises (map an intrusion to the kill chain, pivot the Diamond, tag behavior with ATT&CK technique IDs, climb the Pyramid of Pain, map a defense in D3FEND, and author a STIX indicator) alongside the concepts.",
  emoji: "🎯",
  color: "rose",
  unlocked: true,
};

export const threatFrameworksStages: StageConfig[] = [
  // ─── tf-01: Why Frameworks? (Quiz) ───────────────────────────────────────
  {
    epochId: "threat-frameworks",
    wonder: { name: "The map that turns noise into knowledge", location: "Every security operations center", era: "Modern", emoji: "🎯" },
    id: "tf-01",
    order: 1,
    title: "Why Frameworks?",
    subtitle: "From Indicators to Understanding — the Intelligence Lifecycle",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-tf-why", name: "Framework Initiate", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "A flood of alerts isn't security; it's noise. Threat frameworks are the shared mental models that turn scattered indicators into a coherent story about who is attacking, how, and what to do — and a shared language so defenders can describe and compare adversaries.",
      year: 2024,
      overview: [
        "Security tools produce endless atomic observations — an IP, a hash, an alert. On their own they're trivia. Threat frameworks give analysts structure to convert observations into intelligence: understanding of adversary behavior that supports decisions. They answer 'what does this mean and what do we do?' rather than just 'what happened?'.",
        "Frameworks serve three jobs:\n- A shared language: so a SOC analyst, a threat-intel team, and a vendor all describe an attack the same way (e.g., a precise ATT&CK technique instead of a vague 'malware').\n- A complete mental model: so you reason about the whole attack, not just the part your tool saw, and find gaps.\n- A bridge to action: mapping what adversaries do to detections and defenses you can deploy.",
        "Underlying it all is the threat-intelligence lifecycle: Direction (what do we need to know?) → Collection (gather data) → Processing (normalize) → Analysis (turn data into intelligence) → Dissemination (share it) → Feedback (refine). The frameworks in this epoch are the analytical tools used mostly in the analysis and dissemination stages — they're how raw data becomes shareable, actionable understanding.",
      ],
      technical: {
        title: "Data vs. Intelligence, and the Frameworks Map",
        body: [
          "The key distinction is data vs. intelligence: data is raw (a log line, an IOC); intelligence is analyzed, contextualized, and actionable (this IOC belongs to this actor using this technique against targets like us, so here's what to do). Frameworks are what bridge that gap, and each has a focus:\n- Cyber Kill Chain: the stages of an intrusion (sequence).\n- Diamond Model: the elements of a single event and how to pivot between them.\n- MITRE ATT&CK: a detailed catalog of adversary tactics and techniques (behavior).\n- Pyramid of Pain: how much it hurts an adversary to deny different indicators.\n- D3FEND: defensive countermeasures, mapped to ATT&CK.\n- STIX/TAXII: the format and transport for sharing it all.",
          "These aren't competitors; they're complementary lenses you combine. A mature program uses the kill chain to see the sequence, the Diamond to pivot and enrich, ATT&CK to describe behavior precisely and drive detection, the Pyramid to prioritize, D3FEND to choose countermeasures, and STIX/TAXII to share — all inside the intelligence lifecycle. This stage sets that map; the rest of the epoch teaches each lens by doing.",
        ],
      },
      incident: {
        title: "The Field Grew a Common Language",
        when: "2011 → today",
        where: "The global security community",
        impact: "Shared frameworks transformed threat intel from ad-hoc vendor reports into a comparable, actionable, collaborative discipline",
        body: [
          "Before shared frameworks, threat reporting was inconsistent — every vendor named actors and malware differently, and defenders struggled to compare or act on intel. Lockheed Martin's Cyber Kill Chain (2011), the Diamond Model (2013), and MITRE ATT&CK (2013–2015) introduced common structures that let the community describe adversaries the same way.",
          "The shift was profound: ATT&CK technique IDs became a lingua franca across SOCs, vendors, and reports; STIX/TAXII let organizations share indicators machine-to-machine; and 'threat-informed defense' became a discipline. The lesson framing this epoch is that frameworks aren't academic — they're the practical infrastructure that turns isolated observations into collective, actionable knowledge about adversaries.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Raw Data", sub: "IPs, hashes, alerts, logs", type: "attacker" },
          { label: "Frameworks", sub: "kill chain, Diamond, ATT&CK, Pyramid", type: "system" },
          { label: "Intelligence", sub: "contextualized, actionable understanding", type: "victim" },
          { label: "Action & Sharing", sub: "detect, defend, disseminate (STIX/TAXII)", type: "result" },
        ],
      },
      timeline: [
        { year: 2011, event: "Lockheed Martin publishes the Cyber Kill Chain" },
        { year: 2013, event: "The Diamond Model of Intrusion Analysis is introduced" },
        { year: 2015, event: "MITRE ATT&CK released publicly, becoming a common language", highlight: true },
        { year: 2021, event: "MITRE D3FEND and threat-informed defense formalize the defensive mapping" },
      ],
      keyTakeaways: [
        "Frameworks turn raw data (IOCs, alerts) into intelligence — contextualized, actionable understanding",
        "They provide a shared language, a complete mental model, and a bridge from adversary behavior to defense",
        "Each framework is a complementary lens: sequence (kill chain), pivots (Diamond), behavior (ATT&CK), priority (Pyramid), defense (D3FEND), sharing (STIX/TAXII)",
        "All operate within the threat-intelligence lifecycle: direction → collection → processing → analysis → dissemination → feedback",
      ],
      references: [
        { title: "Threat intelligence lifecycle (overview)", url: "https://en.wikipedia.org/wiki/Cyber_threat_intelligence" },
        { title: "MITRE ATT&CK", url: "https://attack.mitre.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "tf-01-q1", type: "Core Idea", challenge: "Data vs intel.", text: "What's the difference between data and intelligence?", options: ["Data is raw observations; intelligence is analyzed, contextualized, and actionable", "They're identical", "Intelligence is just more data", "Data is always secret"], correctIndex: 0, explanation: "Frameworks bridge raw data to actionable understanding." },
        { id: "tf-01-q2", type: "Purpose", challenge: "Why bother.", text: "What is a primary job of threat frameworks?", options: ["Provide a shared language so everyone describes attacks the same way", "Replace all security tools", "Encrypt the network", "Store passwords"], correctIndex: 0, explanation: "A common language lets analysts compare and act on intel." },
        { id: "tf-01-q3", type: "Lifecycle", challenge: "The cycle.", text: "What is the threat-intelligence lifecycle?", options: ["Direction → collection → processing → analysis → dissemination → feedback", "Encrypt → send → decrypt", "Scan → patch → reboot", "Buy → sell → hold"], correctIndex: 0, explanation: "Frameworks operate mostly in analysis and dissemination." },
        { id: "tf-01-q4", type: "Complementary", challenge: "Not rivals.", text: "How do the different frameworks relate?", options: ["They're complementary lenses you combine, not competitors", "You must pick exactly one forever", "They contradict each other", "Only one is real"], correctIndex: 0, explanation: "Mature programs combine sequence, pivots, behavior, priority, defense, and sharing." },
        { id: "tf-01-q5", type: "Focus", challenge: "Behavior catalog.", text: "Which framework is a detailed catalog of adversary behavior?", options: ["MITRE ATT&CK", "The OSI model", "The CIA triad", "RAID levels"], correctIndex: 0, explanation: "ATT&CK catalogs tactics and techniques (behavior)." },
        { id: "tf-01-q6", type: "History", challenge: "Common tongue.", text: "What changed when ATT&CK and the kill chain became widespread?", options: ["The community could describe and compare adversaries with a common language", "Attacks stopped", "Tools became unnecessary", "Reports got less useful"], correctIndex: 0, explanation: "Shared structures made threat intel comparable and actionable." },
      ],
    },
  },

  // ─── tf-02: The Cyber Kill Chain (CTF) ───────────────────────────────────
  {
    epochId: "threat-frameworks",
    wonder: { name: "The anatomy of an intrusion", location: "From first email to final theft", era: "Modern", emoji: "⛓️" },
    id: "tf-02",
    order: 2,
    title: "The Cyber Kill Chain",
    subtitle: "Seven Stages — and Where to Break Them",
    category: "cybersecurity",
    xp: 165,
    badge: { id: "badge-tf-killchain", name: "Chain Breaker", emoji: "⛓️" },
    challengeType: "quiz",
    info: {
      tagline: "An attacker doesn't teleport to your data — they move through stages, and every stage is a chance to stop them. Lockheed Martin's Cyber Kill Chain names those stages so defenders can detect, deny, and disrupt the intrusion before it completes.",
      year: 2024,
      overview: [
        "The Cyber Kill Chain (Lockheed Martin, 2011) models an intrusion as seven sequential stages:\n- Reconnaissance (research the target)\n- Weaponization (build the malware/lure)\n- Delivery (send it — phish, USB, web)\n- Exploitation (trigger the vulnerability)\n- Installation (establish persistence)\n- Command & Control (C2, the attacker's remote control)\n- Actions on Objectives (the actual goal — steal, encrypt, destroy)",
        "Its power is the 'chain' idea: the attacker must complete the stages in order, so a defender who breaks any one link stops the attack. This reframes defense from a single wall into many opportunities — and earlier is better (denying delivery is cheaper than responding after exfiltration).",
        "Defenders use a course-of-action matrix mapping each stage to actions: Detect, Deny, Disrupt, Degrade, Deceive, Destroy. For example, at Delivery you might Deny (block the sender) and Detect (email filtering); at C2 you might Disrupt (block the C2 domain). The kill chain's limitations (it's linear and perimeter/malware-focused, weaker on insiders and post-compromise lateral movement) are exactly what ATT&CK and the Diamond Model complement. In this challenge you'll map an intrusion's events to kill-chain stages and choose where to break it.",
      ],
      technical: {
        title: "The Seven Stages and the Courses of Action",
        body: [
          "Mapping observed activity to stages tells you how far the attacker got and where to act:\n- Recon → Weaponization → Delivery → Exploitation → Installation → C2 → Actions on Objectives.\n- Each earlier stage broken prevents all later ones, so detection coverage across stages matters more than depth at one.\n- The course-of-action matrix (Detect/Deny/Disrupt/Degrade/Deceive/Destroy × each stage) turns the model into a defensive plan.",
          "Limitations to know:\n- It's linear and was built around malware delivery and the perimeter, so it under-models insider threats, credential abuse, and the lateral movement/privilege escalation that dominate modern intrusions.\n- That's why analysts pair it with ATT&CK (rich behavior, especially post-compromise) and the Diamond Model (pivoting/enrichment).\nStill, as a first lens it's invaluable: it forces you to think in stages and to act early. In this challenge you'll assign each event of an intrusion to its kill-chain stage, then identify the earliest link to break.",
        ],
      },
      incident: {
        title: "A Model Built from Real Intrusions",
        when: "2011",
        where: "Lockheed Martin / defense industrial base",
        impact: "Gave defenders a stage-based way to think about — and intervene in — targeted intrusions, especially APT campaigns",
        body: [
          "Lockheed Martin analysts introduced the Cyber Kill Chain in a 2011 paper drawing on defending against advanced persistent threats targeting the defense industrial base. They observed that sophisticated intrusions followed a repeatable sequence, and that mapping defenses to each stage let them intervene at multiple points and learn from intrusions that were stopped early.",
          "The model became foundational in SOCs and incident response and shaped how a generation of defenders thinks. Its later complements (ATT&CK for behavioral depth, the Diamond for analysis, the 'Unified Kill Chain' merging both) build on, rather than replace, its core insight: intrusions are sequences, and sequences can be broken.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Recon → Weaponize → Deliver", sub: "before the breach", type: "attacker" },
          { label: "Exploit → Install → C2", sub: "establishing control", type: "system" },
          { label: "Actions on Objectives", sub: "the actual goal", type: "victim" },
          { label: "Break a Link", sub: "detect/deny/disrupt — earlier is better", type: "result" },
        ],
      },
      timeline: [
        { year: 2011, event: "Lockheed Martin publishes the Cyber Kill Chain", highlight: true },
        { year: 2013, event: "SOCs widely adopt stage-based course-of-action matrices" },
        { year: 2015, event: "ATT&CK adds behavioral depth the kill chain lacked post-compromise" },
        { year: 2017, event: "The 'Unified Kill Chain' merges kill-chain stages with ATT&CK techniques" },
      ],
      keyTakeaways: [
        "The Cyber Kill Chain models intrusions as seven sequential stages from recon to actions on objectives",
        "Because stages are ordered, breaking any one link stops the attack — and earlier is cheaper",
        "Defenders map stages to courses of action: Detect, Deny, Disrupt, Degrade, Deceive, Destroy",
        "It's linear and malware/perimeter-focused, so pair it with ATT&CK and the Diamond Model",
      ],
      references: [
        { title: "Cyber Kill Chain (Lockheed Martin)", url: "https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html" },
        { title: "Kill chain (overview)", url: "https://en.wikipedia.org/wiki/Kill_chain#Computer_security_model" },
      ],
    },
    quiz: {
      questions: [
        { id: "tf-02-q1", type: "Core Idea", challenge: "Stages.", text: "What does the Cyber Kill Chain model?", options: ["An intrusion as seven sequential stages from recon to actions on objectives", "A type of encryption", "A firewall rule", "A password policy"], correctIndex: 0, explanation: "It breaks an intrusion into ordered stages." },
        { id: "tf-02-q2", type: "Power", challenge: "Break a link.", text: "Why is the 'chain' framing powerful?", options: ["Stages are ordered, so breaking any one link stops the whole attack", "Chains are decorative", "It guarantees no attacks", "Order doesn't matter"], correctIndex: 0, explanation: "Defenders get many chances; earlier is better." },
        { id: "tf-02-q3", type: "Stages", challenge: "The goal.", text: "What is the final kill-chain stage?", options: ["Actions on Objectives (the actual goal — steal/encrypt/destroy)", "Reconnaissance", "Weaponization", "Delivery"], correctIndex: 0, explanation: "Actions on Objectives is where the attacker achieves their aim." },
        { id: "tf-02-q4", type: "Defense", challenge: "Courses of action.", text: "What are the kill-chain courses of action?", options: ["Detect, Deny, Disrupt, Degrade, Deceive, Destroy", "Buy, sell, hold", "Read, write, execute", "Start, stop, pause"], correctIndex: 0, explanation: "Each stage maps to these defensive actions." },
        { id: "tf-02-q5", type: "Limits", challenge: "Where it's weak.", text: "What is a limitation of the kill chain?", options: ["It's linear and malware/perimeter-focused, weaker on insiders and lateral movement", "It's too detailed", "It only works for email", "It has no stages"], correctIndex: 0, explanation: "ATT&CK and the Diamond complement these gaps." },
        { id: "tf-02-q6", type: "Strategy", challenge: "Coverage.", text: "Why does detection coverage across stages matter?", options: ["Breaking an earlier stage prevents all later ones, so breadth beats depth at one stage", "Only the last stage matters", "Coverage is irrelevant", "You should ignore early stages"], correctIndex: 0, explanation: "Each earlier link broken prevents the rest." },
      ],
    },
  },

  // ─── tf-03: The Diamond Model (CTF) ──────────────────────────────────────
  {
    epochId: "threat-frameworks",
    wonder: { name: "The four corners of every attack", location: "The analyst's pivot table", era: "Modern", emoji: "💎" },
    id: "tf-03",
    order: 3,
    title: "The Diamond Model",
    subtitle: "Pivoting From One Clue to the Whole Campaign",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-tf-diamond", name: "Diamond Pivoter", emoji: "💎" },
    challengeType: "quiz",
    info: {
      tagline: "Every malicious event has four features: an adversary uses a capability over some infrastructure against a victim. The Diamond Model arranges them so that knowing one corner lets you pivot to discover the others — turning a single clue into a map of the whole campaign.",
      year: 2024,
      overview: [
        "The Diamond Model of Intrusion Analysis (2013) describes a single intrusion event as a diamond with four connected vertices:\n- Adversary (who)\n- Capability (the tool/technique — malware, exploit)\n- Infrastructure (the adversary's IPs/domains/servers)\n- Victim (the target)\nEdges connect them: an adversary develops capabilities and uses infrastructure to reach a victim.",
        "Its core technique is pivoting: each vertex you know is a lever to discover connected ones. Found a malicious domain (Infrastructure)? Pivot to other malware that contacted it (Capability) and other victims it targeted. Identified a malware family (Capability)? Pivot to the infrastructure it uses and, perhaps, the adversary. Analysis is the disciplined exploration of these connections.",
        "The model adds meta-features (timestamp, phase, result, direction) and concepts like activity threads (linking events over time) and social-political and technology axes (the adversary's intent and the tech relationship to the victim). Where the kill chain gives sequence, the Diamond gives structure for analysis and enrichment. They combine well: each kill-chain stage is a Diamond event you can pivot on. In this challenge you'll map an event's four vertices and pivot from a known indicator to uncover the adversary.",
      ],
      technical: {
        title: "Vertices, Pivoting, and Activity Threads",
        body: [
          "Working the Diamond:\n- Populate the vertices from what you observe (e.g., Victim = your finance team; Capability = a specific RAT; Infrastructure = a C2 domain; Adversary = unknown).\n- Pivot along edges: from the C2 domain, look up passive DNS and certificates to find sibling domains and other malware (more Capability/Infrastructure); from the RAT, find other campaigns using it; converge toward attributing the Adversary.\n- Link related events into activity threads to see a campaign, not just an incident.",
          "Why it's powerful for intelligence: it formalizes the analyst's intuition that clues connect, and it makes enrichment systematic rather than ad hoc. It pairs naturally with the kill chain (sequence of events) and ATT&CK (the Capability vertex described as techniques). Its main caution is the same as all attribution work — pivots reveal connections, but confidently naming the Adversary requires care to avoid false links and deception. In this challenge you'll fill in the four vertices and pivot from infrastructure to reveal the adversary behind the campaign.",
        ],
      },
      incident: {
        title: "Formalizing How Analysts Already Thought",
        when: "2013",
        where: "U.S. DoD / intelligence analysis community",
        impact: "Gave intrusion analysis a rigorous, repeatable structure for pivoting and campaign tracking",
        body: [
          "Sergio Caltagirone, Andrew Pendergast, and Christopher Betz published the Diamond Model in 2013, formalizing the way skilled analysts already worked: following connections between an adversary, their tools, their infrastructure, and their targets. It gave the discipline a vocabulary and a method for pivoting and for grouping events into campaigns.",
          "The Diamond became a staple of threat-intelligence training and tooling, especially for the analysis stage of the intelligence lifecycle. Combined with the kill chain and ATT&CK, it underpins how modern intel teams take one indicator and responsibly expand it into an understanding of an adversary's whole operation — the essence of cyber threat intelligence.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Adversary", sub: "who is attacking (often unknown first)", type: "attacker" },
          { label: "Capability", sub: "malware/exploit/technique", type: "system" },
          { label: "Infrastructure", sub: "C2 domains, IPs, servers", type: "victim" },
          { label: "Victim → Pivot", sub: "follow edges to find the rest", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "The Diamond Model of Intrusion Analysis is published", highlight: true },
        { year: 2015, event: "Diamond + kill chain + ATT&CK become the core analyst toolkit" },
        { year: 2018, event: "Pivoting via passive DNS/cert transparency becomes routine tradecraft" },
        { year: 2024, event: "Diamond underpins campaign tracking in modern threat-intel platforms" },
      ],
      keyTakeaways: [
        "The Diamond Model describes an event with four vertices: Adversary, Capability, Infrastructure, Victim",
        "Pivoting along the edges turns one known clue into discovery of the connected others",
        "Activity threads link events over time into campaigns; meta-features add phase/result/direction",
        "It pairs with the kill chain (sequence) and ATT&CK (the Capability described as techniques)",
      ],
      references: [
        { title: "Diamond Model of Intrusion Analysis", url: "https://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf" },
        { title: "Diamond Model (overview)", url: "https://en.wikipedia.org/wiki/Diamond_Model_(intrusion_analysis)" },
      ],
    },
    quiz: {
      questions: [
        { id: "tf-03-q1", type: "Core Idea", challenge: "Four corners.", text: "What are the four vertices of the Diamond Model?", options: ["Adversary, Capability, Infrastructure, Victim", "Read, Write, Execute, Delete", "People, Process, Technology, Data", "Detect, Deny, Disrupt, Destroy"], correctIndex: 0, explanation: "Every event connects these four features." },
        { id: "tf-03-q2", type: "Technique", challenge: "The key move.", text: "What is 'pivoting' in the Diamond Model?", options: ["Using a known vertex to discover connected ones", "Rotating the screen", "Rebooting the server", "Changing passwords"], correctIndex: 0, explanation: "Each known corner is a lever to find the others." },
        { id: "tf-03-q3", type: "Example", challenge: "From a domain.", text: "From a known C2 domain (Infrastructure), what can you pivot to?", options: ["Other malware that contacted it and other victims it targeted", "The victim's payroll", "The weather", "Nothing"], correctIndex: 0, explanation: "Infrastructure links to Capability and Victim." },
        { id: "tf-03-q4", type: "Campaigns", challenge: "Over time.", text: "What are activity threads?", options: ["Linked events over time that reveal a campaign, not just one incident", "CPU threads", "Email chains", "Network cables"], correctIndex: 0, explanation: "Threads group events into a campaign view." },
        { id: "tf-03-q5", type: "Combine", challenge: "Better together.", text: "How does the Diamond combine with the kill chain?", options: ["Each kill-chain stage is a Diamond event you can pivot on", "They can't be used together", "They are the same thing", "One replaces the other"], correctIndex: 0, explanation: "Sequence (kill chain) plus structure (Diamond)." },
        { id: "tf-03-q6", type: "Caution", challenge: "Attribution care.", text: "What's the main caution when pivoting to the Adversary?", options: ["Pivots show connections, but naming the adversary needs care to avoid false links/deception", "Pivoting is always certain", "Adversaries never use deception", "Attribution is trivial"], correctIndex: 0, explanation: "Confident attribution requires guarding against false links." },
      ],
    },
  },

  // ─── tf-04: MITRE ATT&CK (Quiz) ──────────────────────────────────────────
  {
    epochId: "threat-frameworks",
    wonder: { name: "The encyclopedia of adversary behavior", location: "Every modern detection program", era: "Modern", emoji: "📚" },
    id: "tf-04",
    order: 4,
    title: "MITRE ATT&CK",
    subtitle: "The Common Language of What Adversaries Do",
    category: "cybersecurity",
    xp: 165,
    badge: { id: "badge-tf-attack", name: "ATT&CK Scholar", emoji: "📚" },
    challengeType: "quiz",
    info: {
      tagline: "Where the kill chain has 7 stages, ATT&CK has hundreds of specific techniques observed in real attacks — a living encyclopedia of adversary behavior. It became the common language of detection because it describes exactly what attackers do, not just that they did something.",
      year: 2024,
      overview: [
        "MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) is a curated knowledge base of real-world adversary behavior, organized as a matrix. Columns are Tactics — the adversary's goals (e.g., Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, Impact). Cells are Techniques (and sub-techniques) — the specific ways to achieve each tactic, each with an ID like T1566 (Phishing).",
        "ATT&CK is behavior-focused and evidence-based:\n- every technique is documented from observed\n- in-the-wild activity\n- with descriptions\n- examples of which groups/software use it\n- detection guidance\n- mitigations\nThere are matrices for Enterprise, Mobile, and ICS, plus Groups (tracked actors) and Software (malware/tools) mapped to the techniques they use.",
        "Its uses are everywhere in defense: describe an intrusion in precise, shareable terms (technique IDs); assess detection coverage (which techniques can we see?); emulate adversaries (red teams run real techniques); and prioritize. It complements the kill chain (more granular, strong post-compromise) and feeds D3FEND (defenses mapped to techniques). The ATT&CK Navigator, the next stage's tool, visualizes coverage on the matrix. This stage teaches the structure; the next applies it.",
      ],
      technical: {
        title: "Tactics, Techniques, IDs, and the Matrix",
        body: [
          "The hierarchy is the key:\n- Tactic = the 'why' (the adversary's goal for a step), e.g., Persistence.\n- Technique = the 'how' (a way to achieve it), e.g., T1547 Boot or Logon Autostart Execution; sub-techniques refine it further.\n- Procedures = the specific implementation a given actor/tool uses.\n- Groups (e.g., G0016) and Software (e.g., S0154) are mapped to the techniques they're known to use.",
          "How teams use it:\n- Detection engineering: write and assess detections per technique; identify gaps in coverage.\n- Threat intelligence: report intrusions as technique IDs for precision and sharing.\n- Adversary emulation: red teams and tools (e.g., ATT&CK-mapped) execute real techniques to test defenses.\n- Prioritization: focus on techniques most relevant to your threat model.\nATT&CK is descriptive (what's been seen), not a checklist of everything possible, and it's continuously updated. Knowing the tactic→technique→procedure structure is the foundation for the hands-on mapping you'll do next.",
        ],
      },
      incident: {
        title: "From a Research Project to the Industry Standard",
        when: "2013 → today",
        where: "MITRE and the global security community",
        impact: "Became the de facto common language for describing, detecting, and emulating adversary behavior",
        body: [
          "ATT&CK began around 2013 inside MITRE as part of research into improving threat detection, cataloging the techniques adversaries actually used post-compromise. Released publicly (notably from 2015 onward), it grew into the industry's shared taxonomy, with the matrix, Groups, Software, the Navigator, and expansions to Mobile and ICS.",
          "Today, vendors map products to ATT&CK, threat reports cite technique IDs, SOCs measure coverage against it, and red teams emulate real adversaries with it. It realized the promise of a common language better than any prior framework — which is why it sits at the center of this epoch and of modern threat-informed defense.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Tactics", sub: "the adversary's goals (columns)", type: "attacker" },
          { label: "Techniques", sub: "specific behaviors (T-IDs)", type: "system" },
          { label: "Groups & Software", sub: "actors/tools mapped to techniques", type: "victim" },
          { label: "Detect / Emulate / Prioritize", sub: "coverage, red team, intel", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "ATT&CK started inside MITRE as detection research" },
        { year: 2015, event: "ATT&CK released publicly and begins wide adoption", highlight: true },
        { year: 2017, event: "ATT&CK for ICS and Mobile matrices expand the model" },
        { year: 2021, event: "Sub-techniques refine the matrix; ATT&CK is the de facto standard" },
      ],
      keyTakeaways: [
        "ATT&CK is a knowledge base of real adversary behavior as a matrix of Tactics (goals) and Techniques (how)",
        "Each technique has an ID (e.g., T1566 Phishing), documentation, detections, and mitigations",
        "It maps Groups and Software to techniques and covers Enterprise, Mobile, and ICS",
        "Uses: precise reporting, detection-coverage assessment, adversary emulation, and prioritization",
      ],
      references: [
        { title: "MITRE ATT&CK", url: "https://attack.mitre.org/" },
        { title: "ATT&CK Matrix for Enterprise", url: "https://attack.mitre.org/matrices/enterprise/" },
      ],
    },
    quiz: {
      questions: [
        { id: "tf-04-q1", type: "Core Idea", challenge: "What it is.", text: "What is MITRE ATT&CK?", options: ["A knowledge base of real adversary tactics and techniques, as a matrix", "A firewall product", "An encryption standard", "A type of malware"], correctIndex: 0, explanation: "ATT&CK catalogs observed adversary behavior." },
        { id: "tf-04-q2", type: "Structure", challenge: "Goals vs ways.", text: "What is a Tactic in ATT&CK?", options: ["The adversary's goal for a step (e.g., Persistence)", "A specific malware file", "An IP address", "A password"], correctIndex: 0, explanation: "Tactics are the 'why'; techniques are the 'how'." },
        { id: "tf-04-q3", type: "IDs", challenge: "Precise language.", text: "What does a technique ID like T1566 represent?", options: ["A specific documented technique (Phishing)", "A port number", "A CVE", "A subnet"], correctIndex: 0, explanation: "Technique IDs give a precise, shareable vocabulary." },
        { id: "tf-04-q4", type: "Mappings", challenge: "Actors & tools.", text: "What do ATT&CK Groups and Software entries do?", options: ["Map tracked actors and malware/tools to the techniques they use", "List firewall rules", "Store passwords", "Define encryption"], correctIndex: 0, explanation: "Groups/Software tie real actors to techniques." },
        { id: "tf-04-q5", type: "Uses", challenge: "In practice.", text: "Which is a common use of ATT&CK?", options: ["Assessing detection coverage and emulating real adversaries", "Replacing all tools", "Encrypting disks", "Managing payroll"], correctIndex: 0, explanation: "Coverage, emulation, intel, and prioritization." },
        { id: "tf-04-q6", type: "Nature", challenge: "Descriptive.", text: "What kind of catalog is ATT&CK?", options: ["Descriptive — based on observed in-the-wild behavior, continuously updated", "A complete list of every theoretical attack", "A static one-time document", "A list of products"], correctIndex: 0, explanation: "It documents what's been seen, and evolves." },
      ],
    },
  },

  // ─── tf-05: ATT&CK in Practice (CTF) ─────────────────────────────────────
  {
    epochId: "threat-frameworks",
    wonder: { name: "Turning logs into technique IDs", location: "The detection engineer's desk", era: "Modern", emoji: "🗺️" },
    id: "tf-05",
    order: 5,
    title: "ATT&CK in Practice",
    subtitle: "Mapping Behavior to Techniques with the Navigator",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-tf-navigator", name: "Technique Mapper", emoji: "🗺️" },
    challengeType: "quiz",
    info: {
      tagline: "Knowing the ATT&CK matrix is theory; the skill is looking at messy real activity — a log line, an alert, a report sentence — and naming the exact technique. That mapping is what turns observations into shareable intelligence and detection coverage.",
      year: 2024,
      overview: [
        "ATT&CK in practice is the act of mapping: taking observed adversary activity and assigning it the correct tactic and technique IDs. 'A scheduled task was created to run a script at logon' becomes T1053.005 (Scheduled Task) under the Persistence/Execution tactics; 'mimikatz dumped LSASS' becomes T1003.001 (LSASS Memory) under Credential Access.",
        "Good mapping is precise and evidence-based: map to the most specific (sub-)technique the evidence supports, cite the observable, and avoid over-claiming. The result is a set of techniques you can use to communicate the intrusion, compare to prior campaigns, and check against your detections.",
        "The ATT&CK Navigator is the standard tool: it's an interactive matrix where you color and annotate techniques to build 'layers' — e.g., a layer of techniques seen in an incident, a layer of your detection coverage, or a threat-group's known techniques. Overlaying layers reveals gaps (techniques an actor uses that you can't detect) and priorities. In this challenge you'll analyze observed behavior and map it to the correct ATT&CK technique.",
      ],
      technical: {
        title: "Mapping Discipline and Navigator Layers",
        body: [
          "How to map well:\n- Start from the observable (the log/alert/report phrase), identify the adversary's goal (tactic), then the specific method (technique/sub-technique).\n- Prefer the most specific sub-technique the evidence supports; don't guess beyond the evidence.\n- Record the mapping with its source so it's defensible and shareable.",
          "Using the Navigator:\n- Build a layer per purpose: incident techniques, group techniques (import from ATT&CK), and your detection/mitigation coverage.\n- Overlay/score layers to find coverage gaps (red = a technique a relevant actor uses but you can't detect) and to prioritize detection engineering.\n- Share layers (JSON) so teams compare coverage and intel consistently.\nThis closes the loop from the previous stage: ATT&CK's structure becomes operational when you map real behavior to it and act on the gaps. In this challenge you'll examine evidence and assign the correct technique, then confirm the mapping.",
        ],
      },
      incident: {
        title: "Threat-Informed Defense in Action",
        when: "2018 → today",
        where: "SOCs, detection-engineering, and red teams",
        impact: "Mapping to ATT&CK and visualizing coverage with the Navigator became standard practice for measuring and improving defense",
        body: [
          "As ATT&CK matured, the discipline of mapping — by detection engineers, intel analysts, and red teams — became central to 'threat-informed defense.' Organizations map their telemetry and detections to ATT&CK to see what they can and can't catch, and red teams emulate specific groups' technique sets to validate it. MITRE's ATT&CK Evaluations even score vendor products by how well they detect emulated technique chains.",
          "The Navigator made this visual and shareable, turning the abstract matrix into a working coverage map. The practical lesson is that frameworks deliver value only when applied: the repeated act of mapping observations to techniques, finding the gaps, and closing them is how a SOC measurably improves against real adversaries.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Observed Activity", sub: "log line / alert / report", type: "attacker" },
          { label: "Map to Technique", sub: "tactic → technique → sub-technique ID", type: "system" },
          { label: "Navigator Layers", sub: "incident vs detection coverage", type: "victim" },
          { label: "Find & Close Gaps", sub: "prioritize detection engineering", type: "result" },
        ],
      },
      timeline: [
        { year: 2018, event: "ATT&CK Navigator and coverage mapping gain wide use" },
        { year: 2019, event: "MITRE ATT&CK Evaluations score products on emulated technique chains", highlight: true },
        { year: 2021, event: "Center for Threat-Informed Defense formalizes mapping practices" },
        { year: 2024, event: "Mapping observations to ATT&CK is standard SOC/detection-engineering practice" },
      ],
      keyTakeaways: [
        "ATT&CK in practice means mapping observed activity to specific tactic/technique IDs",
        "Map to the most specific sub-technique the evidence supports, and cite the observable",
        "The ATT&CK Navigator builds layers (incident, group, coverage) to reveal gaps and priorities",
        "Repeatedly mapping, finding gaps, and closing them is the core of threat-informed defense",
      ],
      references: [
        { title: "ATT&CK Navigator", url: "https://mitre-attack.github.io/attack-navigator/" },
        { title: "Center for Threat-Informed Defense", url: "https://ctid.mitre.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "tf-05-q1", type: "Core Idea", challenge: "The skill.", text: "What is 'ATT&CK in practice'?", options: ["Mapping observed adversary activity to specific tactic/technique IDs", "Buying a product", "Encrypting logs", "Deleting alerts"], correctIndex: 0, explanation: "Mapping turns observations into shareable, actionable terms." },
        { id: "tf-05-q2", type: "Precision", challenge: "How specific.", text: "How specific should a mapping be?", options: ["The most specific sub-technique the evidence supports, no more", "Always the broadest tactic", "Random", "Never specific"], correctIndex: 0, explanation: "Be precise but don't over-claim beyond evidence." },
        { id: "tf-05-q3", type: "Example", challenge: "Map it.", text: "'mimikatz dumped LSASS' maps to which tactic?", options: ["Credential Access (T1003 LSASS Memory)", "Exfiltration", "Reconnaissance", "Impact"], correctIndex: 0, explanation: "Dumping LSASS is Credential Access." },
        { id: "tf-05-q4", type: "Tool", challenge: "Visualize.", text: "What does the ATT&CK Navigator do?", options: ["Build colored, annotated layers on the matrix to show coverage and gaps", "Run exploits", "Block traffic", "Store passwords"], correctIndex: 0, explanation: "The Navigator visualizes techniques as layers." },
        { id: "tf-05-q5", type: "Gaps", challenge: "Overlay.", text: "What does overlaying a group layer with a coverage layer reveal?", options: ["Techniques a relevant actor uses that you can't detect (gaps)", "The weather", "Your payroll", "Nothing useful"], correctIndex: 0, explanation: "Overlays expose detection gaps to prioritize." },
        { id: "tf-05-q6", type: "Discipline", challenge: "Make it real.", text: "Why is mapping central to threat-informed defense?", options: ["Repeatedly mapping, finding gaps, and closing them measurably improves defense", "Frameworks work without being applied", "It's purely academic", "It replaces detection"], correctIndex: 0, explanation: "Applied mapping drives measurable improvement." },
      ],
    },
  },

  // ─── tf-06: The Pyramid of Pain (CTF) ────────────────────────────────────
  {
    epochId: "threat-frameworks",
    wonder: { name: "The hierarchy of hurt", location: "Where defenders choose their battles", era: "Modern", emoji: "🔺" },
    id: "tf-06",
    order: 6,
    title: "The Pyramid of Pain",
    subtitle: "Hurting the Adversary, Not Just Blocking a Hash",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-tf-pyramid", name: "Pain Dealer", emoji: "🔺" },
    challengeType: "quiz",
    info: {
      tagline: "Blocking a malware hash feels productive — but the attacker recompiles in seconds and you've gained nothing. The Pyramid of Pain ranks indicators by how much it costs the adversary when you deny them, so you spend effort where it actually hurts: their behavior.",
      year: 2024,
      overview: [
        "David Bianco's Pyramid of Pain (2013) ranks types of indicators by how painful they are for an adversary to change if you detect/deny them. From bottom (trivial to change) to top (very hard):\n- Hash values — trivial; one byte changes the hash.\n- IP addresses — easy; rotate to a new IP.\n- Domain names — a bit harder; register/change domains.\n- Network/host artifacts — annoying; patterns in traffic or on disk.\n- Tools — hard; the adversary must find/build new tooling.\n- TTPs (Tactics, Techniques, Procedures) — very hard; this is how they operate, and changing it means retraining and re-engineering their whole approach.",
        "The insight: low-pyramid indicators (hashes, IPs) are cheap to block but equally cheap for the adversary to swap, giving fleeting value. High-pyramid indicators — especially TTPs — are expensive to detect but, once you can, force the adversary to fundamentally change how they operate, which is costly and slow for them.",
        "This directly motivates ATT&CK-based, behavioral detection: detecting a TTP (e.g., 'credential dumping from LSASS') catches the adversary regardless of which hash, IP, or tool they use this week. The strategy is to climb the pyramid — invest in detecting behavior, not just atomic indicators — to impose maximum, durable pain. In this challenge you'll classify a set of indicators by pyramid level and pick the ones that hurt most.",
      ],
      technical: {
        title: "Climbing the Pyramid and Behavioral Detection",
        body: [
          "Using the pyramid:\n- Triage indicators by level: hashes/IPs/domains are useful for quick blocking and enrichment but expect short shelf life.\n- Recognize that the adversary's cost to evade rises as you go up: changing a TTP can mean re-tooling an entire operation.\n- Prioritize building detections for tools and especially TTPs, because they're durable — they keep working as low-level indicators churn.",
          "Connection to the rest of the epoch:\n- TTP detection is essentially ATT&CK technique detection — the Pyramid explains why ATT&CK-based behavioral detection is so valuable.\n- It also guides intel sharing: a shared TTP (with detections) is more valuable than a shared hash that's already stale.\n- Practical programs do both — block atomic indicators for speed and hunt behaviors for durability — but consciously invest upward.\nIn this challenge you'll sort indicators into pyramid levels, then choose the high-pain TTP-level detections to impose lasting cost on the adversary.",
        ],
      },
      incident: {
        title: "Why Indicator Feeds Alone Disappoint",
        when: "2013 → today",
        where: "SOCs and threat-intel programs",
        impact: "Explained why hash/IP blocklists provide fleeting value and drove the shift to behavioral, TTP-based detection",
        body: [
          "Bianco articulated the Pyramid of Pain after the common frustration that consuming feeds of hashes and IPs produced little durable defensive value — adversaries simply rotated indicators. The pyramid gave a crisp explanation and a strategy: measure indicators by adversary cost-to-change, and invest upward toward TTPs.",
          "It became a foundational concept pairing perfectly with ATT&CK's rise: detecting techniques (TTPs) is exactly the high-pain detection the pyramid recommends. Modern programs still use low-level indicators for speed and enrichment, but the strategic emphasis on behavioral detection — imposing real, lasting pain — is a direct legacy of this simple, powerful model.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Hashes / IPs", sub: "trivial for adversary to change", type: "attacker" },
          { label: "Domains / Artifacts", sub: "moderate cost to change", type: "system" },
          { label: "Tools", sub: "hard to change", type: "victim" },
          { label: "TTPs", sub: "very hard — maximum, durable pain", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "David Bianco publishes the Pyramid of Pain", highlight: true },
        { year: 2015, event: "ATT&CK's technique focus aligns with the pyramid's TTP emphasis" },
        { year: 2018, event: "Behavioral/TTP detection becomes the strategic priority over IOC feeds" },
        { year: 2024, event: "Programs combine fast IOC blocking with durable TTP hunting" },
      ],
      keyTakeaways: [
        "The Pyramid of Pain ranks indicators by how costly they are for an adversary to change",
        "Bottom (hashes, IPs) is trivial to swap; top (TTPs) is very hard to change",
        "Detecting behavior/TTPs imposes durable pain — it works regardless of churned hashes/IPs",
        "Climb the pyramid: invest in ATT&CK-style behavioral detection, not just atomic indicators",
      ],
      references: [
        { title: "The Pyramid of Pain (David Bianco)", url: "https://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html" },
        { title: "Pyramid of Pain (overview)", url: "https://www.attackiq.com/glossary/pyramid-of-pain/" },
      ],
    },
    quiz: {
      questions: [
        { id: "tf-06-q1", type: "Core Idea", challenge: "What it ranks.", text: "What does the Pyramid of Pain rank?", options: ["How costly each indicator type is for an adversary to change", "Server uptime", "Password length", "Network speed"], correctIndex: 0, explanation: "It ranks indicators by adversary cost-to-change." },
        { id: "tf-06-q2", type: "Bottom", challenge: "Trivial.", text: "Why is blocking a hash low-value?", options: ["The adversary can change one byte to get a new hash instantly", "Hashes are secret", "Hashes never appear", "It's actually high-value"], correctIndex: 0, explanation: "Hashes are trivial to change — fleeting value." },
        { id: "tf-06-q3", type: "Top", challenge: "Maximum pain.", text: "What sits at the top of the pyramid?", options: ["TTPs — how the adversary operates, very hard to change", "IP addresses", "File hashes", "Domain names"], correctIndex: 0, explanation: "Changing TTPs forces the adversary to re-engineer their approach." },
        { id: "tf-06-q4", type: "Why", challenge: "Durable.", text: "Why is detecting TTPs so valuable?", options: ["It catches the adversary regardless of churned hashes, IPs, or tools", "It's the cheapest to do", "It never works", "It only blocks one IP"], correctIndex: 0, explanation: "Behavioral detection is durable across indicator changes." },
        { id: "tf-06-q5", type: "Connection", challenge: "Familiar.", text: "TTP detection is essentially what?", options: ["ATT&CK technique detection", "Antivirus signatures only", "A firewall rule", "A password reset"], correctIndex: 0, explanation: "The Pyramid explains why ATT&CK behavioral detection matters." },
        { id: "tf-06-q6", type: "Strategy", challenge: "Climb.", text: "What's the strategic takeaway?", options: ["Climb the pyramid — invest in behavioral/TTP detection for lasting pain", "Only consume hash feeds", "Ignore behavior", "Block nothing"], correctIndex: 0, explanation: "Invest upward while still using fast low-level blocking." },
      ],
    },
  },

  // ─── tf-07: MITRE D3FEND (CTF) ───────────────────────────────────────────
  {
    epochId: "threat-frameworks",
    wonder: { name: "The defender's matrix", location: "Where offense meets countermeasure", era: "Modern", emoji: "🛡️" },
    id: "tf-07",
    order: 7,
    title: "MITRE D3FEND",
    subtitle: "Mapping Attacks to Countermeasures",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-tf-d3fend", name: "Countermeasure Cartographer", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "ATT&CK tells you what attackers do. D3FEND tells you what to do about it — a structured catalog of defensive techniques, linked to the attacks they counter, so you can move from 'we're exposed to this technique' to 'here's the specific countermeasure.'",
      year: 2024,
      overview: [
        "MITRE D3FEND is a knowledge graph of defensive countermeasures — the defensive counterpart to ATT&CK. It organizes cybersecurity techniques (e.g., Process Analysis, Network Traffic Analysis, Credential Hardening, Decoy/Deception, Execution Isolation) into defensive tactics like Detect, Harden, Isolate, Deceive, and Evict.",
        "Its key value is the mapping between offense and defense: D3FEND links defensive techniques to the ATT&CK (offensive) techniques they address, via the digital artifacts both touch. So you can take an ATT&CK technique you're worried about and find candidate countermeasures, or take a control you have and see what it actually defends against.",
        "This completes the analyst's loop: kill chain/Diamond/ATT&CK help you understand and describe the threat (offense), the Pyramid tells you where to focus, and D3FEND helps you choose concrete defenses (countermeasures) — all in compatible vocabularies. It turns threat understanding into a defensive plan. In this challenge you'll take an ATT&CK technique and map it to an appropriate D3FEND countermeasure.",
      ],
      technical: {
        title: "Defensive Tactics, Artifacts, and ATT&CK Mapping",
        body: [
          "How D3FEND is structured and used:\n- Defensive tactics group techniques by purpose: Model, Harden, Detect, Isolate, Deceive, Evict (and Restore).\n- Defensive techniques are concrete (e.g., 'File Hashing,' 'Network Traffic Analysis,' 'Decoy File,' 'Process Spawn Analysis').\n- The graph connects offense and defense through digital artifacts — the things both the attack and the countermeasure act on — so the mapping is principled, not arbitrary.",
          "Practical workflow:\n- Start from an ATT&CK technique (from your mapping/coverage gaps in the prior stages) and query D3FEND for countermeasures that address it.\n- Evaluate and select countermeasures appropriate to your environment, then implement and verify.\n- Use it in reverse to inventory what your existing controls defend against and find blind spots.\nD3FEND is newer and still maturing, and it's best used as a structured way to reason from threats to defenses rather than a rigid checklist. In this challenge you'll select an ATT&CK technique and map it to a fitting D3FEND countermeasure.",
        ],
      },
      incident: {
        title: "Completing the Threat-Informed Loop",
        when: "2021 → today",
        where: "MITRE / NSA-funded, and the defender community",
        impact: "Gave defenders a structured, ATT&CK-linked vocabulary for countermeasures, closing the gap from threat to defense",
        body: [
          "MITRE released D3FEND in 2021 (with NSA support) to provide a defensive counterpart to ATT&CK — a common, structured vocabulary for countermeasures and an explicit mapping to the offensive techniques they counter. It addressed a real gap: teams could describe threats precisely with ATT&CK but lacked an equally rigorous way to describe and select defenses.",
          "As it matures, D3FEND is used to reason from ATT&CK coverage gaps to specific countermeasures, to communicate defensive architecture, and to relate products/controls to the attacks they mitigate. Together with ATT&CK it embodies threat-informed defense: a shared language for both what adversaries do and what defenders should do about it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "ATT&CK Technique", sub: "the offensive behavior to counter", type: "attacker" },
          { label: "Digital Artifact", sub: "what both attack & defense touch", type: "system" },
          { label: "D3FEND Technique", sub: "Detect/Harden/Isolate/Deceive/Evict", type: "victim" },
          { label: "Selected Countermeasure", sub: "concrete defense to implement", type: "result" },
        ],
      },
      timeline: [
        { year: 2021, event: "MITRE releases D3FEND (NSA-funded) as ATT&CK's defensive counterpart", highlight: true },
        { year: 2022, event: "D3FEND used to map ATT&CK coverage gaps to countermeasures" },
        { year: 2023, event: "Defensive architecture increasingly described in D3FEND terms" },
        { year: 2024, event: "ATT&CK + D3FEND together operationalize threat-informed defense" },
      ],
      keyTakeaways: [
        "D3FEND is a structured knowledge graph of defensive countermeasures — the defensive counterpart to ATT&CK",
        "It groups techniques into defensive tactics (Detect, Harden, Isolate, Deceive, Evict) and maps them to ATT&CK via digital artifacts",
        "Workflow: from an ATT&CK technique/gap, find candidate countermeasures; or inventory what your controls defend",
        "With ATT&CK it completes threat-informed defense: a shared language for both offense and defense",
      ],
      references: [
        { title: "MITRE D3FEND", url: "https://d3fend.mitre.org/" },
        { title: "D3FEND (overview)", url: "https://en.wikipedia.org/wiki/MITRE_D3FEND" },
      ],
    },
    quiz: {
      questions: [
        { id: "tf-07-q1", type: "Core Idea", challenge: "The counterpart.", text: "What is MITRE D3FEND?", options: ["A structured catalog of defensive countermeasures, the counterpart to ATT&CK", "A type of malware", "An attack tool", "A password manager"], correctIndex: 0, explanation: "D3FEND catalogs defenses, mapped to attacks." },
        { id: "tf-07-q2", type: "Tactics", challenge: "Defensive goals.", text: "Which are D3FEND defensive tactics?", options: ["Detect, Harden, Isolate, Deceive, Evict", "Recon, Weaponize, Deliver", "Buy, sell, hold", "Read, write, execute"], correctIndex: 0, explanation: "D3FEND groups defenses by these tactics." },
        { id: "tf-07-q3", type: "Mapping", challenge: "Offense to defense.", text: "How does D3FEND link to ATT&CK?", options: ["It maps defensive techniques to the ATT&CK techniques they counter, via digital artifacts", "It doesn't connect to ATT&CK", "Randomly", "By IP address"], correctIndex: 0, explanation: "Digital artifacts connect attack and countermeasure." },
        { id: "tf-07-q4", type: "Workflow", challenge: "From threat to fix.", text: "How do you use D3FEND from a coverage gap?", options: ["Take the ATT&CK technique and find candidate countermeasures to implement", "Ignore the gap", "Delete the alert", "Buy more hashes"], correctIndex: 0, explanation: "It bridges from threat understanding to concrete defense." },
        { id: "tf-07-q5", type: "Loop", challenge: "Completes it.", text: "What does D3FEND complete in the analyst's loop?", options: ["The move from understanding the threat to choosing concrete defenses", "The attack itself", "Encryption", "Payroll"], correctIndex: 0, explanation: "It turns threat understanding into a defensive plan." },
        { id: "tf-07-q6", type: "Maturity", challenge: "How to use.", text: "How should D3FEND best be used?", options: ["As a structured way to reason from threats to defenses, not a rigid checklist", "As the only security control", "As an attack framework", "It shouldn't be used"], correctIndex: 0, explanation: "It's a maturing, principled reasoning aid." },
      ],
    },
  },

  // ─── tf-08: STIX & TAXII (CTF) ───────────────────────────────────────────
  {
    epochId: "threat-frameworks",
    wonder: { name: "The language machines use to share threats", location: "Between defenders worldwide", era: "Modern", emoji: "🔁" },
    id: "tf-08",
    order: 8,
    title: "STIX & TAXII",
    subtitle: "Sharing Threat Intel Machine-to-Machine",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-tf-stix", name: "Intel Broadcaster", emoji: "🔁" },
    challengeType: "quiz",
    info: {
      tagline: "Intelligence is only useful if it reaches defenders in time. STIX is a standard language for describing threats so a computer can read them; TAXII is the standard way to deliver that language between organizations — turning one team's discovery into everyone's defense, automatically.",
      year: 2024,
      overview: [
        "STIX (Structured Threat Information eXpression) is a standardized, machine-readable format for representing cyber threat intelligence. Instead of a prose report, you express threats as structured objects: Indicators (e.g., a malicious domain with a detection pattern), Malware, Threat Actors, Attack Patterns (which can reference ATT&CK techniques), Campaigns, Identities, and the Relationships between them.",
        "TAXII (Trusted Automated eXchange of Intelligence Information) is the companion transport protocol — an HTTPS-based API for sharing STIX data. Producers publish to TAXII servers organized into collections and channels; consumers subscribe and pull updates automatically. Together, STIX + TAXII let organizations and ISACs exchange intel machine-to-machine at scale.",
        "This is the dissemination stage of the intelligence lifecycle made operational, and it ties the epoch together: a STIX bundle can encode an Attack Pattern referencing an ATT&CK technique, Indicators a SOC can deploy as detections, and Relationships linking them to a Campaign — exactly the structured understanding the other frameworks produce. Sharing it via TAXII means a discovery by one defender quickly becomes protection for many. In this challenge you'll author a STIX indicator and publish it via TAXII.",
      ],
      technical: {
        title: "STIX Objects, Relationships, and TAXII Delivery",
        body: [
          "The building blocks:\n- STIX Domain Objects (SDOs): Indicator, Malware, Threat-Actor, Attack-Pattern, Campaign, Intrusion-Set, Identity, Course-of-Action, and more.\n- STIX Relationship Objects (SROs): typed links like 'indicates,' 'uses,' 'attributed-to,' connecting SDOs into a graph.\n- Patterns: an Indicator carries a STIX pattern (e.g., a domain or file-hash condition) a tool can evaluate to detect the threat.",
          "Delivery and use:\n- A STIX bundle (JSON) packages objects and relationships; it can reference ATT&CK technique IDs in Attack-Pattern objects, unifying vocabularies.\n- TAXII servers expose collections; clients authenticate and poll/subscribe to receive new intel automatically, enabling near-real-time sharing across ISACs, vendors, and governments.\n- Consumers ingest indicators into detection tools and enrich their own analysis.\nThe result is collective defense: structured, attributable, ATT&CK-aware intel flowing automatically. In this challenge you'll author a STIX Indicator object for a malicious domain, then publish it to a TAXII collection so others can defend.",
        ],
      },
      incident: {
        title: "From Prose Reports to Automated Sharing",
        when: "2012 → today",
        where: "DHS/MITRE, OASIS, and the global community",
        impact: "Standardized, machine-readable intel sharing enabled ISACs and automated feeds, scaling collective defense",
        body: [
          "STIX and TAXII originated from U.S. DHS and MITRE efforts (early 2010s) and were transitioned to the OASIS standards body, with STIX 2.x adopting a clean JSON representation. They solved a core dissemination problem: human-readable reports don't scale or automate, but structured STIX over TAXII does.",
          "Today, Information Sharing and Analysis Centers (ISACs), governments (e.g., CISA's AIS), and commercial threat-intel platforms exchange STIX via TAXII, and STIX Attack-Patterns commonly reference ATT&CK techniques — unifying the frameworks. The lesson closing this stage: frameworks create understanding, and STIX/TAXII move that understanding at machine speed, turning individual discoveries into shared protection.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Analysis Output", sub: "indicators, actors, ATT&CK patterns", type: "system" },
          { label: "STIX (encode)", sub: "machine-readable objects + relationships", type: "victim" },
          { label: "TAXII (transport)", sub: "HTTPS API: collections & channels", type: "attacker" },
          { label: "Collective Defense", sub: "consumers auto-ingest & detect", type: "result" },
        ],
      },
      timeline: [
        { year: 2012, event: "STIX/TAXII originate from DHS/MITRE for structured intel sharing" },
        { year: 2017, event: "STIX 2.0/2.1 (JSON) and TAXII 2.x standardized via OASIS", highlight: true },
        { year: 2019, event: "ISACs and CISA's AIS exchange STIX over TAXII at scale" },
        { year: 2024, event: "STIX Attack-Patterns routinely reference ATT&CK, unifying the frameworks" },
      ],
      keyTakeaways: [
        "STIX is a standardized, machine-readable language for threat intel (Indicators, Malware, Actors, Attack-Patterns, Relationships)",
        "TAXII is the HTTPS transport for sharing STIX via collections/channels, enabling automated exchange",
        "STIX Attack-Patterns can reference ATT&CK techniques, unifying the epoch's frameworks",
        "Together they operationalize dissemination: one defender's discovery becomes collective defense at machine speed",
      ],
      references: [
        { title: "STIX/TAXII (OASIS)", url: "https://oasis-open.github.io/cti-documentation/" },
        { title: "STIX (overview)", url: "https://en.wikipedia.org/wiki/STIX_(cyber_security)" },
      ],
    },
    quiz: {
      questions: [
        { id: "tf-08-q1", type: "Core Idea", challenge: "The language.", text: "What is STIX?", options: ["A standardized, machine-readable format for describing threat intelligence", "A transport protocol only", "A firewall", "A malware family"], correctIndex: 0, explanation: "STIX structures intel as machine-readable objects." },
        { id: "tf-08-q2", type: "Transport", challenge: "The delivery.", text: "What is TAXII?", options: ["The HTTPS-based protocol for sharing STIX data between organizations", "A type of indicator", "An encryption cipher", "A SIEM"], correctIndex: 0, explanation: "TAXII transports STIX via collections/channels." },
        { id: "tf-08-q3", type: "Objects", challenge: "Building blocks.", text: "Which is a STIX object?", options: ["Indicator (with a detection pattern)", "A RAID array", "A subnet mask", "A CPU core"], correctIndex: 0, explanation: "Indicators, Malware, Actors, Attack-Patterns, etc. are SDOs." },
        { id: "tf-08-q4", type: "Unify", challenge: "Tie-in.", text: "How does STIX connect to ATT&CK?", options: ["STIX Attack-Pattern objects can reference ATT&CK technique IDs", "They're unrelated", "STIX replaces ATT&CK", "Only by IP"], correctIndex: 0, explanation: "Attack-Patterns reference ATT&CK, unifying vocabularies." },
        { id: "tf-08-q5", type: "Lifecycle", challenge: "Which stage.", text: "STIX/TAXII operationalize which intelligence-lifecycle stage?", options: ["Dissemination (sharing)", "Reconnaissance", "Exploitation", "Payroll"], correctIndex: 0, explanation: "They move analyzed intel to those who need it." },
        { id: "tf-08-q6", type: "Value", challenge: "Why share.", text: "What's the payoff of STIX/TAXII?", options: ["One defender's discovery becomes collective defense at machine speed", "Slower reports", "Fewer detections", "More manual work"], correctIndex: 0, explanation: "Automated structured sharing scales collective defense." },
      ],
    },
  },

  // ─── tf-09: Intelligence Levels & Attribution (Quiz) ─────────────────────
  {
    epochId: "threat-frameworks",
    wonder: { name: "Who, and how sure?", location: "From the SOC to the boardroom", era: "Modern", emoji: "🧩" },
    id: "tf-09",
    order: 9,
    title: "Intel Levels & Attribution",
    subtitle: "Strategic to Tactical — and the Perils of Naming Names",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-tf-attribution", name: "Careful Analyst", emoji: "🧩" },
    challengeType: "quiz",
    info: {
      tagline: "Threat intelligence serves different audiences at different altitudes — from a board deciding strategy to a sensor blocking an IP. And the hardest question of all, 'who did this?', is a minefield of deception and uncertainty that demands humility and rigor.",
      year: 2024,
      overview: [
        "Threat intelligence is usually described at three levels, by audience and time horizon:\n- Strategic: high-level, for executives/boards — adversary trends, risks, and motivations to guide investment and policy (long horizon, non-technical).\n- Operational: for defenders/IR — specific campaigns, adversary TTPs, and intent to inform defense and hunting (medium horizon).\n- Tactical: for the SOC and tools — concrete indicators (IOCs) and techniques for immediate detection/blocking (short horizon).",
        "Good programs produce intel at the right level for each consumer: a board doesn't need IPs, and a firewall doesn't need geopolitics. The frameworks support this — ATT&CK and the Diamond feed operational/tactical understanding; trend analysis feeds strategic. A common model for the intel-driven operations cycle is F3EAD: Find, Fix, Finish, Exploit, Analyze, Disseminate.",
        "Attribution — identifying the responsible actor — is the most fraught analytic task. Adversaries deliberately deceive: false flags, shared/stolen tools, reused infrastructure, and planted artifacts. Responsible attribution uses structured analytic techniques (like Analysis of Competing Hypotheses), expresses confidence levels and uncertainty, weighs evidence across the Diamond, and avoids the trap of jumping to a nation-state name from thin or misleading indicators. The lesson: be rigorous, state confidence, and remember that for most defenders, knowing the TTPs matters more than knowing the name.",
      ],
      technical: {
        title: "Levels, F3EAD, and Disciplined Attribution",
        body: [
          "Matching intel to consumers:\n- Strategic → leadership decisions (risk, investment); Operational → defensive planning and hunting; Tactical → detection/blocking.\n- The same intrusion yields all three: a tactical IOC, an operational TTP/campaign picture, and a strategic trend.\n- F3EAD links operations and intelligence so findings feed back into action.",
          "Attribution done right:\n- Treat indicators skeptically — they can be forged or shared; weigh multiple lines of evidence (the Diamond's vertices) and behavior (ATT&CK TTPs) over single artifacts.\n- Use structured analytic techniques (e.g., Analysis of Competing Hypotheses) and explicit confidence levels (low/medium/high) to avoid bias and overconfidence.\n- Distinguish clusters/activity groups (a consistent set of behaviors) from named real-world actors; attribution to a specific group/government is a high bar.\n- For most defenders, the actionable value is the TTPs (Pyramid of Pain), not the name. This stage builds the judgment that keeps the technical frameworks honest.",
        ],
      },
      incident: {
        title: "False Flags and the Limits of Certainty",
        when: "2015 → today",
        where: "High-profile attributions and analyses",
        impact: "Deception campaigns showed how attribution can be manipulated, reinforcing the need for confidence levels and rigor",
        body: [
          "Several high-profile cases highlighted attribution's perils. The Olympic Destroyer attack (2018) was engineered with deliberate false flags — planted code and indicators pointing at multiple different actors — specifically to mislead analysts, and it initially did. Across many incidents, shared tooling, commodity malware, and reused infrastructure have caused misattribution or warranted caution.",
          "These cases cemented best practice: express attribution with explicit confidence and reasoning, prefer behavioral evidence over forgeable artifacts, and recognize that adversaries actively exploit analysts' eagerness to name names. For operational defense, the durable value is understanding and detecting the TTPs; attribution, while important strategically and for policy, must be handled with disciplined humility.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Strategic", sub: "trends/risk for leadership", type: "system" },
          { label: "Operational", sub: "campaigns/TTPs for defenders", type: "victim" },
          { label: "Tactical", sub: "IOCs/techniques for the SOC", type: "result" },
          { label: "Attribution", sub: "deception-aware, confidence-rated", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2015, event: "Three-tier (strategic/operational/tactical) intel model widely adopted" },
        { year: 2018, event: "Olympic Destroyer's false flags show attribution can be deliberately manipulated", highlight: true },
        { year: 2020, event: "Structured analytic techniques and confidence levels become standard in intel reporting" },
        { year: 2024, event: "Behavior-over-artifacts and explicit confidence are best-practice attribution" },
      ],
      keyTakeaways: [
        "Threat intel comes in three levels: strategic (leadership), operational (defenders), tactical (SOC/tools)",
        "Match intel to its audience; the same intrusion yields tactical IOCs, operational TTPs, and strategic trends",
        "Attribution is fraught with deception (false flags, shared tools) — use confidence levels and structured analysis",
        "For most defenders, knowing and detecting the TTPs matters more than naming the actor",
      ],
      references: [
        { title: "Cyber threat intelligence (overview)", url: "https://en.wikipedia.org/wiki/Cyber_threat_intelligence" },
        { title: "Analysis of Competing Hypotheses", url: "https://en.wikipedia.org/wiki/Analysis_of_competing_hypotheses" },
      ],
    },
    quiz: {
      questions: [
        { id: "tf-09-q1", type: "Core Idea", challenge: "Three altitudes.", text: "What are the three levels of threat intelligence?", options: ["Strategic, operational, and tactical", "Low, medium, high voltage", "Red, green, blue", "Start, middle, end"], correctIndex: 0, explanation: "They differ by audience and time horizon." },
        { id: "tf-09-q2", type: "Audience", challenge: "Right level.", text: "What does strategic intel serve?", options: ["Executives/boards — trends and risk to guide investment and policy", "Firewalls blocking IPs", "A single alert", "The coffee machine"], correctIndex: 0, explanation: "Strategic intel is high-level and non-technical." },
        { id: "tf-09-q3", type: "Tactical", challenge: "For tools.", text: "What does tactical intel consist of?", options: ["Concrete indicators (IOCs) and techniques for immediate detection/blocking", "Boardroom strategy", "Annual budgets", "Marketing plans"], correctIndex: 0, explanation: "Tactical intel is short-horizon and machine-actionable." },
        { id: "tf-09-q4", type: "Cycle", challenge: "Ops + intel.", text: "What does F3EAD stand for (intel-driven ops)?", options: ["Find, Fix, Finish, Exploit, Analyze, Disseminate", "Filter, Fetch, Forward", "Find, File, Forget", "Fast, Free, Easy"], correctIndex: 0, explanation: "F3EAD links operations with intelligence." },
        { id: "tf-09-q5", type: "Attribution", challenge: "Be careful.", text: "Why is attribution so difficult?", options: ["Adversaries deceive with false flags, shared tools, and reused infrastructure", "It's actually trivial", "Indicators never lie", "Names are obvious"], correctIndex: 0, explanation: "Deception makes naming actors a high bar." },
        { id: "tf-09-q6", type: "Practice", challenge: "What matters.", text: "For most defenders, what's more actionable than the actor's name?", options: ["Knowing and detecting the TTPs", "The actor's birthday", "The flag's color", "The press release"], correctIndex: 0, explanation: "TTP detection (Pyramid of Pain) is the durable value." },
      ],
    },
  },

  // ─── tf-10: Threat-Informed Defense (Quiz) ───────────────────────────────
  {
    epochId: "threat-frameworks",
    wonder: { name: "All the lenses, working together", location: "A mature security program", era: "Modern", emoji: "🧠" },
    id: "tf-10",
    order: 10,
    title: "Threat-Informed Defense",
    subtitle: "Putting Every Framework to Work Together",
    category: "cybersecurity",
    xp: 190,
    badge: { id: "badge-tf-tid", name: "Threat-Informed Defender", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "No single framework is the answer; together they form a system. Threat-informed defense is the practice of using real knowledge of adversaries — through all these lenses — to continuously focus, measure, and improve your defenses where it matters most.",
      year: 2024,
      overview: [
        "Threat-informed defense (a discipline championed by MITRE's Center for Threat-Informed Defense) means letting actual adversary behavior drive your security decisions, rather than generic checklists. It combines every lens in this epoch into one cycle:\n- understand the threat\n- map it\n- prioritize\n- defend\n- share\n- repeat",
        "A worked loop:\n- Understand & describe: use the kill chain (sequence) and Diamond (pivot/enrich) to analyze intrusions, and ATT&CK to describe behavior precisely.\n- Prioritize: use the Pyramid of Pain to invest in durable, behavioral (TTP) detection over fleeting indicators, focused on the techniques your relevant adversaries use.\n- Defend: map ATT&CK gaps to D3FEND countermeasures and implement them; validate with adversary emulation.\n- Share & repeat: disseminate via STIX/TAXII and feed results back through the intelligence lifecycle.",
        "The payoff is focus and measurability: instead of trying to defend everything equally, you concentrate on what adversaries actually do to organizations like yours, measure your coverage (Navigator layers), and close the highest-value gaps. This is also how the frameworks connect to the rest of the curriculum — ATT&CK for ICS secures OT, ATT&CK techniques describe the attacks in the vehicle/robot/space epochs, and the intelligence lifecycle runs the SOC. Frameworks are the connective tissue of the whole field.",
      ],
      technical: {
        title: "The Unified Loop and Continuous Improvement",
        body: [
          "Bringing it together operationally:\n- Inputs: intel (your own + shared via STIX/TAXII), incidents, and red-team results.\n- Model: kill chain + Diamond to analyze, ATT&CK to describe, Pyramid to prioritize.\n- Act: D3FEND to select countermeasures; build/tune detections per technique; emulate adversaries to validate (e.g., ATT&CK Evaluations-style testing).\n- Measure & iterate: Navigator coverage layers quantify progress; feedback refines direction (the lifecycle).",
          "Key principles:\n- Be threat-informed, not tool-informed: start from what adversaries do, then choose controls.\n- Prefer durable, behavioral detection (climb the pyramid) while still using fast indicators.\n- Make it a continuous loop, not a one-off assessment — adversaries adapt, so coverage must too.\n- Share, because collective defense raises everyone's baseline.\nThe closing lesson of the epoch (and a thread through the whole curriculum): frameworks turn raw security activity into a measurable, improving, adversary-focused defense — the difference between being busy and being effective.",
        ],
      },
      incident: {
        title: "From Compliance Checklists to Adversary Focus",
        when: "2018 → today",
        where: "Mature security programs worldwide",
        impact: "Shifted leading programs from generic, compliance-driven controls to measurable, adversary-behavior-driven defense",
        body: [
          "For years, security programs were driven largely by compliance checklists — necessary but not sufficient, and disconnected from what attackers actually did. The rise of ATT&CK and its companions enabled a shift to threat-informed defense: organizations began measuring themselves against real adversary behavior, emulating relevant threats, and prioritizing detection where it mattered.",
          "MITRE's Center for Threat-Informed Defense and the broader community formalized the practice, and ATT&CK Evaluations gave it teeth by testing products against emulated adversaries. The result is programs that can answer 'which real techniques can we detect, and where are our gaps?' — a measurable, improving posture. This is the destination of the epoch: every framework, combined, in a continuous loop that keeps defense focused on the adversary.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Understand", sub: "kill chain, Diamond, ATT&CK", type: "attacker" },
          { label: "Prioritize", sub: "Pyramid of Pain → TTPs", type: "system" },
          { label: "Defend", sub: "D3FEND countermeasures, emulation", type: "victim" },
          { label: "Share & Iterate", sub: "STIX/TAXII, measure coverage, repeat", type: "result" },
        ],
      },
      timeline: [
        { year: 2015, event: "ATT&CK enables describing defense in adversary-behavior terms" },
        { year: 2019, event: "ATT&CK Evaluations test products against emulated adversaries" },
        { year: 2021, event: "Center for Threat-Informed Defense formalizes the discipline", highlight: true },
        { year: 2024, event: "Threat-informed defense — all frameworks in a continuous loop — is best practice" },
      ],
      keyTakeaways: [
        "Threat-informed defense uses real adversary knowledge — through all the frameworks — to focus and measure defense",
        "The loop: understand (kill chain/Diamond/ATT&CK) → prioritize (Pyramid) → defend (D3FEND/emulation) → share (STIX/TAXII) → repeat",
        "It delivers focus and measurability: defend what adversaries actually do, and quantify coverage/gaps",
        "Frameworks are the connective tissue of the whole field — from the SOC to OT, vehicle, robot, and space security",
      ],
      references: [
        { title: "Center for Threat-Informed Defense", url: "https://ctid.mitre.org/" },
        { title: "Threat-informed defense (overview)", url: "https://medium.com/mitre-engenuity/threat-informed-defense-101-1aa84f0bc8d9" },
      ],
    },
    quiz: {
      questions: [
        { id: "tf-10-q1", type: "Core Idea", challenge: "The practice.", text: "What is threat-informed defense?", options: ["Letting real adversary behavior drive security decisions, using the frameworks together", "Following a generic checklist only", "Buying every tool", "Ignoring adversaries"], correctIndex: 0, explanation: "It focuses defense on what adversaries actually do." },
        { id: "tf-10-q2", type: "Loop", challenge: "The cycle.", text: "What's the threat-informed defense loop?", options: ["Understand → prioritize → defend → share → repeat", "Buy → install → forget", "Scan → reboot → done", "Alert → ignore → delete"], correctIndex: 0, explanation: "It's a continuous, adversary-focused cycle." },
        { id: "tf-10-q3", type: "Prioritize", challenge: "Where to invest.", text: "Which framework guides prioritizing durable detection?", options: ["The Pyramid of Pain (invest in TTPs)", "The OSI model", "RAID levels", "The CIA triad alone"], correctIndex: 0, explanation: "The Pyramid pushes investment toward behavioral detection." },
        { id: "tf-10-q4", type: "Defend", challenge: "Pick controls.", text: "What helps map gaps to concrete defenses?", options: ["D3FEND countermeasures (mapped to ATT&CK)", "A password vault", "A firewall brand", "An IP blocklist only"], correctIndex: 0, explanation: "D3FEND turns ATT&CK gaps into countermeasures." },
        { id: "tf-10-q5", type: "Measure", challenge: "Quantify.", text: "How do you measure coverage in this loop?", options: ["ATT&CK Navigator layers showing detected vs. uncovered techniques", "Counting emails", "By gut feeling", "You can't measure it"], correctIndex: 0, explanation: "Navigator layers quantify coverage and gaps." },
        { id: "tf-10-q6", type: "Big Picture", challenge: "Connective tissue.", text: "How do these frameworks relate to the rest of security?", options: ["They're the connective tissue — ATT&CK for ICS, technique-described attacks, the lifecycle running the SOC", "They're isolated trivia", "They only apply to email", "They replace all defense"], correctIndex: 0, explanation: "Frameworks tie the whole field together, from SOC to OT/space." },
      ],
    },
  },
];

// ── CTF mode — hands-on analyst exercises per stage (quiz = half-clear) ──────
// All CTFs now use the shared 3-step mkDeepCtf factory (deepened from 2-step).

const TF_CTF: Record<string, CtfConfig> = {
  "tf-02": mkDeepCtf(
    "You're an analyst handed the events of an intrusion. Map each event to its Cyber Kill Chain stage, spot the off-network early stages, then pick the earliest controllable link to break.",
    "OP: BREAK THE CHAIN\nEvidence: phishing email -> macro exploit -> beacon to C2 -> data staged & exfiltrated.\nGoal: map events to stages, find the early stages, break the chain.\nSequence: map-stages -> find-early -> break-chain",
    "FLAG{K1LL_",
    "Mission Brief",
    ["map-stages", "CH41N_", "Stages Mapped", [
      "$ map-stages",
      "Email=Delivery, macro=Exploitation, beacon=C2, staging/exfil=Actions on Objectives.",
      "The on-network evidence lines up with the back half of the chain.",
      "Next: find-early",
    ]],
    ["find-early", "BR0K3N_", "Early Stages Found", [
      "$ find-early",
      "Recon + Weaponization happened off your network — you can't see them, but they precede Delivery.",
      "Delivery is the first link you actually control.",
      "Next: break-chain",
    ]],
    ["break-chain", "34RLY}", "Chain Broken", [
      "$ break-chain --at delivery",
      "Block/deny the phish at Delivery and the whole chain collapses before Exploitation.",
      "Break the earliest controllable link — defense gets cheaper the earlier you act.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Map the stages. Run: map-stages", "Find the early stages. Run: find-early", "Break the chain. Run: break-chain", "Run 'assemble', then submit the flag"],
    { "killchain.txt": "stages: Recon Weaponize Deliver Exploit Install C2 Actions\nevidence starts at Deliver\nbreak earliest controllable link" },
  ),
  "tf-03": mkDeepCtf(
    "An incident gives you one clue: a C2 domain. Populate the Diamond Model's four vertices, pivot on the infrastructure with passive DNS + cert transparency, and reveal the adversary.",
    "OP: WORK THE DIAMOND\nClue: victim=finance team, capability=a RAT, infrastructure=bad-c2[.]net, adversary=unknown.\nGoal: map vertices, pivot on infra, reveal the adversary.\nSequence: map-vertices -> pivot-infra -> reveal-adversary",
    "FLAG{",
    "Mission Brief",
    ["map-vertices", "D14M0ND_", "Vertices Mapped", [
      "$ map-vertices",
      "Adversary=?, Capability=RAT, Infrastructure=bad-c2[.]net, Victim=finance team.",
      "The Diamond links a capability + infra against a victim by some adversary.",
      "Next: pivot-infra",
    ]],
    ["pivot-infra", "P1V0T_", "Infrastructure Pivoted", [
      "$ pivot-infra bad-c2[.]net --pdns --ct",
      "Passive DNS reveals sibling domains; certificate transparency shows a reused TLS cert.",
      "These shared artifacts cluster the activity.",
      "Next: reveal-adversary",
    ]],
    ["reveal-adversary", "4DV3RS4RY}", "Adversary Revealed", [
      "$ reveal-adversary",
      "The infra cluster + RAT family match a known intrusion set -> adversary vertex filled.",
      "One vertex (infra) pivoted to another (adversary) — the Diamond's core move.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Map the vertices. Run: map-vertices", "Pivot on infra. Run: pivot-infra", "Reveal the adversary. Run: reveal-adversary", "Run 'assemble', then submit the flag"],
    { "diamond.txt": "vertices: adversary / capability / infrastructure / victim\npivot: bad-c2[.]net -> sibling domains + reused cert\n-> known intrusion set" },
  ),
  "tf-05": mkDeepCtf(
    "A log shows a scheduled task created to run a script at logon, then mimikatz dumping LSASS. Analyze the behavior, assign tactics, then tag the precise ATT&CK sub-technique IDs.",
    "OP: TAG THE TECHNIQUE\nEvidence: scheduled task at logon + LSASS credential dump.\nGoal: analyze, assign tactics, tag sub-technique IDs.\nSequence: analyze-behavior -> assign-tactics -> tag-techniques",
    "FLAG{",
    "Mission Brief",
    ["analyze-behavior", "4TTCK_", "Behavior Analyzed", [
      "$ analyze-behavior",
      "Observable 1: schtasks creates a logon-triggered script. Observable 2: LSASS process memory read.",
      "Describe what the adversary DID, not just the artifacts.",
      "Next: assign-tactics",
    ]],
    ["assign-tactics", "T3CHN1QU3_", "Tactics Assigned", [
      "$ assign-tactics",
      "Scheduled task -> Persistence + Execution; LSASS dump -> Credential Access.",
      "Tactics first, then drill to the most specific technique.",
      "Next: tag-techniques",
    ]],
    ["tag-techniques", "M4PP3D}", "Techniques Tagged", [
      "$ tag-techniques",
      "T1053.005 (Scheduled Task) + T1003.001 (LSASS Memory) — mapped and shareable worldwide.",
      "Precise IDs turn one incident into reusable, comparable intel.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Analyze the behavior. Run: analyze-behavior", "Assign tactics. Run: assign-tactics", "Tag the techniques. Run: tag-techniques", "Run 'assemble', then submit the flag"],
    { "attck.txt": "schtasks logon script -> Persistence/Execution -> T1053.005\nLSASS dump -> Credential Access -> T1003.001" },
  ),
  "tf-06": mkDeepCtf(
    "You have a mixed bag of indicators from a campaign. Classify them by Pyramid of Pain level, rank them by adversary cost-to-change, then invest detection in the high-pain TTPs.",
    "OP: MAXIMIZE THE PAIN\nIndicators: a file hash, a C2 IP, a domain, and a 'LSASS credential-dump' behavior.\nGoal: classify, rank by pain, target the TTPs.\nSequence: classify-iocs -> rank-pyramid -> target-ttps",
    "FLAG{PYR4M1D_",
    "Mission Brief",
    ["classify-iocs", "TTP_", "IOCs Classified", [
      "$ classify-iocs",
      "hash -> Hash Values, IP -> IP Addresses, domain -> Domain Names, LSASS-dump -> TTPs.",
      "Each sits at a different level of the pyramid.",
      "Next: rank-pyramid",
    ]],
    ["rank-pyramid", "M4X_", "Ranked by Pain", [
      "$ rank-pyramid",
      "Cost to the adversary if you block it: hash=trivial, IP=easy, domain=moderate, TTP=very hard.",
      "Detecting low-pyramid IOCs barely inconveniences them.",
      "Next: target-ttps",
    ]],
    ["target-ttps", "P41N}", "TTPs Targeted", [
      "$ target-ttps",
      "Built a behavioral detection for the credential-dump TTP — durable even as hashes/IPs churn.",
      "Maximize the adversary's pain: detect behavior, not just atomic indicators.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Classify the IOCs. Run: classify-iocs", "Rank by pain. Run: rank-pyramid", "Target the TTPs. Run: target-ttps", "Run 'assemble', then submit the flag"],
    { "pyramid.txt": "hash=trivial  IP=easy  domain=moderate  tool=annoying  TTP=tough\ninvest detection at the top (TTPs)" },
  ),
  "tf-07": mkDeepCtf(
    "You have an ATT&CK coverage gap: T1003.001 (LSASS Memory) credential dumping. Pick the technique, find its digital artifact, then query MITRE D3FEND for a fitting countermeasure.",
    "OP: COUNTER IT\nGap: ATT&CK T1003.001 (LSASS credential dumping) is undetected/unmitigated.\nGoal: pick the technique, find the artifact, map a D3FEND countermeasure.\nSequence: pick-technique -> find-artifact -> map-countermeasure",
    "FLAG{",
    "Mission Brief",
    ["pick-technique", "D3F3ND_", "Technique Picked", [
      "$ pick-technique T1003.001",
      "Selected the gap: LSASS Memory credential dumping.",
      "D3FEND counters techniques by the digital artifacts they touch.",
      "Next: find-artifact",
    ]],
    ["find-artifact", "C0UNT3R_", "Artifact Found", [
      "$ find-artifact",
      "The artifact is process memory / LSASS access — that's what defenses must watch or harden.",
      "Map the artifact, not just the name.",
      "Next: map-countermeasure",
    ]],
    ["map-countermeasure", "M34SUR3}", "Countermeasure Mapped", [
      "$ map-countermeasure --d3fend",
      "D3FEND returns: Process/LSASS access analysis + credential hardening (e.g., protected LSASS, Credential Guard).",
      "A concrete, technique-driven defense — offense (ATT&CK) mapped to defense (D3FEND).",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Pick the technique. Run: pick-technique", "Find the artifact. Run: find-artifact", "Map a countermeasure. Run: map-countermeasure", "Run 'assemble', then submit the flag"],
    { "d3fend.txt": "technique: T1003.001 (LSASS Memory)\nartifact: process memory / LSASS access\ncounter: access analysis + protected LSASS / Credential Guard" },
  ),
  "tf-08": mkDeepCtf(
    "Your team found a malicious domain. Author a STIX 2.1 Indicator object, enrich the bundle with relationships, then publish it to a TAXII collection so other defenders can detect it.",
    "OP: SHARE THE INTEL\nFinding: malicious C2 domain evil-update[.]net used by an active campaign.\nGoal: author the STIX, enrich it, publish via TAXII.\nSequence: author-stix -> enrich-bundle -> publish-taxii",
    "FLAG{",
    "Mission Brief",
    ["author-stix", "ST1X_", "STIX Authored", [
      "$ author-stix",
      "Built a STIX 2.1 Indicator: pattern = [domain-name:value = 'evil-update[.]net'].",
      "A machine-readable, standard intel object.",
      "Next: enrich-bundle",
    ]],
    ["enrich-bundle", "1ND1C4T0R_", "Bundle Enriched", [
      "$ enrich-bundle",
      "Linked the Indicator via 'indicates' to a Malware SDO + an ATT&CK Attack-Pattern, added confidence + TLP.",
      "Context makes the indicator actionable, not just a string.",
      "Next: publish-taxii",
    ]],
    ["publish-taxii", "SH4R3D}", "Published via TAXII", [
      "$ publish-taxii --collection community",
      "Pushed the STIX bundle to the TAXII collection -> subscribers auto-ingest and deploy detections.",
      "STIX (what) + TAXII (how to share) = collective defense.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Author the STIX. Run: author-stix", "Enrich the bundle. Run: enrich-bundle", "Publish via TAXII. Run: publish-taxii", "Run 'assemble', then submit the flag"],
    { "stix.txt": "Indicator: [domain-name:value='evil-update[.]net']\nrelationships: indicates -> Malware + Attack-Pattern\ntransport: TAXII collection" },
  ),
};

for (const s of threatFrameworksStages) {
  const ctf = TF_CTF[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}

// Deep 3-step CTFs for the remaining quiz stages (shared mkDeepCtf factory).
// Analyst exercises: turn raw data into structured, actionable intelligence.
const TF_CTF2: Record<string, CtfConfig> = {
  "tf-01": mkDeepCtf(
    "Frameworks turn chaos into shared language. Take a pile of raw alerts through the intelligence lifecycle and produce a finished, actionable intel product.",
    "OP: THE INTEL LIFECYCLE\nTarget: a pile of raw, unstructured alerts.\nGoal: collect, process the cycle, produce finished intel.\nSequence: collect-intel -> process-cycle -> produce-finished",
    "FLAG{1NT3L_",
    "Mission Brief",
    ["collect-intel", "CYCL3_", "Intel Collected", [
      "$ collect-intel",
      "Pulled raw data: alerts, logs, OSINT — noisy, unstructured, contradictory.",
      "Raw data is not intelligence yet.",
      "Next: process-cycle",
    ]],
    ["process-cycle", "F1N1SH3D_", "Cycle Processed", [
      "$ process-cycle",
      "Ran the lifecycle: direction -> collection -> processing -> analysis -> dissemination -> feedback.",
      "Correlated and de-duplicated into structured findings.",
      "Next: produce-finished",
    ]],
    ["produce-finished", "PR0DUCT}", "Product Produced", [
      "$ produce-finished",
      "Output: a finished intel product with assessment + confidence that a defender can ACT on.",
      "Frameworks exist so analysts speak one language and produce decisions, not noise.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Collect intel. Run: collect-intel", "Process the cycle. Run: process-cycle", "Produce finished intel. Run: produce-finished", "Run 'assemble', then submit the flag"],
    { "intel.txt": "raw: alerts + logs + OSINT (noisy)\ncycle: direction->collection->processing->analysis->dissemination->feedback\nout: finished, actionable product" },
  ),
  "tf-04": mkDeepCtf(
    "MITRE ATT&CK is the common language for adversary behavior. Take an observed intrusion, map each action to ATT&CK, and tag the precise technique IDs.",
    "OP: SPEAK ATT&CK\nTarget: a logged intrusion's behaviors.\nGoal: observe, map to ATT&CK, tag technique IDs.\nSequence: observe-behavior -> map-attack -> tag-techniques",
    "FLAG{4TTCK_",
    "Mission Brief",
    ["observe-behavior", "T3CHN1QU3_", "Behavior Observed", [
      "$ observe-behavior",
      "Timeline: spearphish link -> PowerShell -> scheduled task -> credential dump -> RDP lateral move.",
      "Describe behavior, not just indicators.",
      "Next: map-attack",
    ]],
    ["map-attack", "1D_", "Mapped to ATT&CK", [
      "$ map-attack",
      "Aligned each action to ATT&CK tactics (Initial Access, Execution, Persistence, Cred Access, Lateral Movement).",
      "Behavior maps cleanly onto the matrix.",
      "Next: tag-techniques",
    ]],
    ["tag-techniques", "M4PP3D}", "Techniques Tagged", [
      "$ tag-techniques",
      "Tagged: T1566.002, T1059.001, T1053.005, T1003, T1021.001 — a shareable behavioral fingerprint.",
      "Now any team worldwide understands this adversary instantly.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Observe behavior. Run: observe-behavior", "Map to ATT&CK. Run: map-attack", "Tag the techniques. Run: tag-techniques", "Run 'assemble', then submit the flag"],
    { "attack.txt": "phish link -> T1566.002\nPowerShell -> T1059.001\nsched task -> T1053.005\ncred dump -> T1003\nRDP -> T1021.001" },
  ),
  "tf-09": mkDeepCtf(
    "Attribution is hard and political. Gather indicators across strategic/operational/tactical levels, cluster the activity, and attribute it to a named actor with calibrated confidence.",
    "OP: WHO DID IT\nTarget: a set of intrusions that may be related.\nGoal: gather indicators, cluster, attribute the actor.\nSequence: gather-indicators -> cluster-activity -> attribute-actor",
    "FLAG{4TTR1BUT10N_",
    "Mission Brief",
    ["gather-indicators", "CLUST3R_", "Indicators Gathered", [
      "$ gather-indicators",
      "Collected TTPs, infrastructure, malware, and targeting across several incidents.",
      "Tactical IOCs change; behavior (TTPs) persists.",
      "Next: cluster-activity",
    ]],
    ["cluster-activity", "4CT0R_", "Activity Clustered", [
      "$ cluster-activity",
      "Shared tooling + infra reuse + consistent targeting -> one activity cluster (e.g., 'UNC####').",
      "Cluster first; name later.",
      "Next: attribute-actor",
    ]],
    ["attribute-actor", "1D3D}", "Actor Attributed", [
      "$ attribute-actor --confidence",
      "Strategic motive + operational TTPs + tactical IOCs align -> attributed to a known group (moderate confidence).",
      "Always state confidence; attribution drives policy, so calibrate it.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Gather indicators. Run: gather-indicators", "Cluster the activity. Run: cluster-activity", "Attribute the actor. Run: attribute-actor", "Run 'assemble', then submit the flag"],
    { "attrib.txt": "levels: strategic / operational / tactical\ncluster: shared tooling + infra reuse + targeting\noutput: named actor + CONFIDENCE" },
  ),
  "tf-10": mkDeepCtf(
    "Threat-informed defense uses the adversary to prioritize your defense. Rank the techniques that matter to you, map D3FEND countermeasures, and close the biggest gaps.",
    "OP: THREAT-INFORMED DEFENSE\nTarget: a defense program with finite resources.\nGoal: prioritize techniques, map D3FEND, close gaps.\nSequence: prioritize-techniques -> map-d3fend -> close-gaps",
    "FLAG{THR34T_",
    "Mission Brief",
    ["prioritize-techniques", "1NF0RM3D_", "Techniques Prioritized", [
      "$ prioritize-techniques",
      "Ranked ATT&CK techniques by how often THIS sector's adversaries use them.",
      "Defend against what attackers actually do, not everything equally.",
      "Next: map-d3fend",
    ]],
    ["map-d3fend", "D3F3ND_", "D3FEND Mapped", [
      "$ map-d3fend",
      "For each top technique, mapped MITRE D3FEND countermeasures and checked current coverage.",
      "Offense (ATT&CK) now drives defense (D3FEND).",
      "Next: close-gaps",
    ]],
    ["close-gaps", "G4PS}", "Gaps Closed", [
      "$ close-gaps",
      "Found 3 high-frequency techniques with no detection -> deployed analytics + controls to cover them.",
      "Threat-informed defense = measurable, prioritized, ever-improving.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Prioritize techniques. Run: prioritize-techniques", "Map D3FEND. Run: map-d3fend", "Close the gaps. Run: close-gaps", "Run 'assemble', then submit the flag"],
    { "tid.txt": "prioritize: ATT&CK by sector adversary frequency\nmap: D3FEND countermeasures + coverage\nclose: 3 uncovered high-freq techniques" },
  ),
};

for (const s of threatFrameworksStages) {
  const ctf = TF_CTF2[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}
