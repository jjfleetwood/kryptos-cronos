import type { StageConfig, EpochConfig } from "./types";

export const secFoundationsEpoch: EpochConfig = {
  id: "sec-foundations",
  name: "Security Foundations",
  subtitle: "Governance, Controls, Physical Security & Resilience",
  description:
    "Hands-on hacking teaches you how attacks work — but certification exams (Security+, Network+, CySA+, ISC² CC, and the ISACA governance certs) also test the foundational, conceptual half of security: the taxonomy of controls and frameworks, physical security and deception, change management, cryptographic solutions, identity and access management, data protection, resilience and disaster recovery, and security awareness. This epoch rounds out the curriculum with the concepts every security professional must know — the exam-objective bedrock beneath the exploits.",
  emoji: "🏛️",
  color: "slate",
  unlocked: true,
};

export const secFoundationsStages: StageConfig[] = [
  // ─── 01: Security Controls & Frameworks ───────────────────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "NIST Headquarters", location: "Gaithersburg, Maryland", era: "Present Day", emoji: "🧭" },
    id: "sec-foundations-01",
    order: 1,
    title: "Security Controls & Frameworks",
    subtitle: "Control categories and types, and the frameworks that organize them",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "secf-badge-01", name: "Control Architect", emoji: "🧭" },
    challengeType: "quiz",
    info: {
      tagline: "Every safeguard is a 'security control' — and knowing how to classify them is the language of governance and the exam.",
      year: 2014,
      overview: [
        "A security control is any measure that reduces risk. Exams classify controls two ways. By CATEGORY — how the control is implemented:\n- Technical (a.k.a. logical) — enforced by technology (firewalls, encryption, access control lists).\n- Managerial (administrative) — policies, procedures, and risk assessments.\n- Operational — carried out by people day to day (security guards, awareness training, change management).\n- Physical — protect the tangible world (locks, fences, cameras).",
        "By TYPE — what the control does relative to an incident:\n- Preventive — stop an incident before it happens (a firewall rule, a locked door).\n- Deterrent — discourage an attacker (warning signs, visible cameras).\n- Detective — identify an incident in progress or after the fact (IDS, logs, audits).\n- Corrective — fix or limit damage after an incident (restoring from backup, patching).\n- Compensating — alternatives used when the primary control isn't feasible (extra monitoring in place of a missing patch).\n- Directive — instruct or guide behavior (an acceptable use policy).\nA single safeguard can be more than one type — a security guard is preventive, deterrent, and detective.",
        "Frameworks organize controls into coherent programs so organizations don't reinvent the wheel:\n- NIST Cybersecurity Framework (CSF) — structures security around core functions: Identify, Protect, Detect, Respond, Recover (and, in CSF 2.0, Govern).\n- ISO/IEC 27001 — defines a certifiable Information Security Management System (ISMS) with Annex A controls.\n- CIS Critical Security Controls — a prioritized, prescriptive checklist.\n- NIST SP 800-53 — catalogs detailed controls for federal systems.\nKnowing which framework does what — and being able to classify any control by category and type — is foundational governance literacy tested across Security+, ISC² CC, CISA, and CRISC.",
      ],
      technical: {
        title: "Classifying a Control — Category × Type",
        body: [
          "Category answers 'how is it implemented?' (technical, managerial, operational, physical). Type answers 'when/what does it do?' (preventive, deterrent, detective, corrective, compensating, directive). The two are independent axes: encryption is a technical-preventive control; a camera is a physical control that is simultaneously deterrent and detective; an acceptable use policy is a managerial-directive control; a backup restore is a technical-corrective control.",
          "Compensating controls deserve special attention on exams: they are chosen when a required control cannot be implemented (cost, legacy system, business need). Example: an unpatchable legacy server is isolated on its own segment with heavy monitoring — the segmentation and monitoring compensate for the missing patch. Compensating controls must provide a comparable level of protection and are documented as risk exceptions.",
        ],
        codeExample: {
          label: "Control Classification Cheat Sheet",
          code: `  CATEGORY (how it's implemented):
   TECHNICAL/LOGICAL  firewall, encryption, ACL, MFA
   MANAGERIAL/ADMIN   policy, risk assessment, SDLC
   OPERATIONAL        guards, awareness training, change mgmt
   PHYSICAL           lock, fence, camera, bollard

  TYPE (what it does vs an incident):
   PREVENTIVE   stop it       (firewall, locked door)
   DETERRENT    discourage    (warning sign, visible CCTV)
   DETECTIVE    identify      (IDS, logs, audit, alarm)
   CORRECTIVE   fix/limit     (restore backup, patch, IPS block)
   COMPENSATING alternative   (extra monitoring vs missing patch)
   DIRECTIVE    instruct      (AUP, signage, policy)

  FRAMEWORKS:
   NIST CSF   Identify·Protect·Detect·Respond·Recover (+Govern)
   ISO 27001  certifiable ISMS (Annex A controls)
   CIS Controls  prioritized, prescriptive checklist
   NIST 800-53  detailed federal control catalog`,
        },
      },
      incident: {
        title: "NIST CSF Becomes the Common Language",
        when: "2014 — and refreshed as CSF 2.0 in 2024",
        where: "United States and worldwide adoption",
        impact: "Issued after a 2013 executive order, the NIST Cybersecurity Framework gave organizations a shared vocabulary of functions and outcomes, becoming the de facto framework referenced by regulators, insurers, and certification exams across industries.",
        body: [
          "Before the NIST CSF, organizations described their security programs in incompatible ways, making it hard to compare maturity, satisfy regulators, or communicate risk to executives. The CSF's five functions — Identify, Protect, Detect, Respond, Recover — gave everyone a common, outcome-focused language. CSF 2.0 (2024) added a sixth function, Govern, recognizing that governance underpins the others.",
          "The framework's success illustrates why exams test frameworks and control taxonomy: a security professional must be able to map any safeguard to a function and classify it by category and type to communicate clearly with auditors, leadership, and peers. Frameworks turn a pile of disconnected tools into a coherent, defensible program — and the ability to speak that language is foundational governance literacy.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Identify the Risk", sub: "what are we protecting?", type: "system" },
          { label: "Choose a Control", sub: "category: how to implement", type: "attacker" },
          { label: "Classify by Type", sub: "preventive/detective/etc.", type: "victim" },
          { label: "Organize via Framework", sub: "NIST CSF / ISO 27001 / CIS", type: "result" },
        ],
      },
      timeline: [
        { year: 2005, event: "ISO/IEC 27001 published — certifiable ISMS standard" },
        { year: 2013, event: "Executive Order 13636 directs creation of a cybersecurity framework" },
        { year: 2014, event: "NIST Cybersecurity Framework 1.0 released", highlight: true },
        { year: 2018, event: "CIS Controls v7 reorganizes into a prioritized, prescriptive set" },
        { year: 2024, event: "NIST CSF 2.0 adds the Govern function" },
      ],
      keyTakeaways: [
        "Control CATEGORY = how it's implemented: technical, managerial, operational, physical",
        "Control TYPE = what it does: preventive, deterrent, detective, corrective, compensating, directive",
        "A compensating control is an alternative used when the primary control isn't feasible — and must give comparable protection",
        "Frameworks organize controls: NIST CSF (functions), ISO 27001 (certifiable ISMS), CIS Controls (prioritized checklist), NIST 800-53 (catalog)",
      ],
      references: [
        { title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
        { title: "CIS Critical Security Controls", url: "https://www.cisecurity.org/controls" },
        { title: "ISO/IEC 27001 Information Security Management", url: "https://www.iso.org/standard/27001" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-01-q1",
          type: "Control Category",
          challenge: `  A company enforces access using firewall rules,
  full-disk encryption, and multi-factor authentication.`,
          text: "Which control CATEGORY do firewalls, encryption, and MFA belong to?",
          options: [
            "Physical controls",
            "Technical (logical) controls — enforced by technology",
            "Managerial controls",
            "Directive controls",
          ],
          correctIndex: 1,
          explanation: "Firewalls, encryption, and MFA are technical (logical) controls — they are implemented and enforced by technology. Category describes HOW a control is implemented: technical (technology), managerial (policies/risk assessments), operational (people-run processes like training and change management), or physical (locks, fences, cameras). These are independent of the control's TYPE (preventive, detective, etc.).",
        },
        {
          id: "secf-01-q2",
          type: "Control Type",
          challenge: `  After a ransomware incident, the team restores
  affected servers from clean backups to return to
  normal operations.`,
          text: "Restoring from backup after an incident is which control TYPE?",
          options: [
            "Preventive — it stops the incident",
            "Corrective — it fixes or limits damage after an incident",
            "Deterrent — it discourages attackers",
            "Directive — it instructs behavior",
          ],
          correctIndex: 1,
          explanation: "Restoring from backup is a corrective control: it fixes or limits damage after an incident has occurred. Preventive controls stop incidents before they happen; deterrent controls discourage attackers; detective controls identify incidents; directive controls instruct behavior; and compensating controls substitute for an infeasible primary control. The backup itself is preventive/corrective infrastructure, but the act of restoring to recover is corrective.",
        },
        {
          id: "secf-01-q3",
          type: "Compensating Control",
          challenge: `  A critical legacy application runs on an OS that
  can no longer be patched. The team isolates it on
  a dedicated network segment with heavy monitoring
  and strict access rules.`,
          text: "What kind of control is the isolation-plus-monitoring approach here?",
          options: [
            "A preventive control that fully removes the vulnerability",
            "A compensating control — an alternative used because the primary control (patching) isn't feasible",
            "A deterrent control",
            "No control at all",
          ],
          correctIndex: 1,
          explanation: "When the required control (patching) cannot be implemented, an alternative that provides comparable protection is a compensating control. Isolating the unpatchable system on its own segment with monitoring and tight access limits the risk in place of the missing patch. Compensating controls must offer a similar level of protection and are documented as risk exceptions, often with a remediation timeline.",
        },
        {
          id: "secf-01-q4",
          type: "Frameworks",
          challenge: `  An organization wants a prioritized, prescriptive
  checklist of safeguards to implement first, rather
  than a broad outcome-based model.`,
          text: "Which framework best fits a prioritized, prescriptive checklist of controls?",
          options: [
            "NIST CSF — five outcome-focused functions",
            "The CIS Critical Security Controls — a prioritized, prescriptive list",
            "ISO 27001 — a certifiable management-system standard",
            "A risk register",
          ],
          correctIndex: 1,
          explanation: "The CIS Critical Security Controls are a prioritized, prescriptive checklist designed to tell organizations what to do first for the most risk reduction. NIST CSF is outcome-focused (Identify/Protect/Detect/Respond/Recover/Govern) rather than a step-by-step list; ISO 27001 defines a certifiable ISMS; NIST 800-53 is a detailed catalog. Knowing which framework serves which purpose is core governance literacy.",
        },
      ],
    },
  },

  // ─── 02: Physical Security & Deception ────────────────────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "A Secure Data Center", location: "Ashburn, Virginia", era: "Present Day", emoji: "🚧" },
    id: "sec-foundations-02",
    order: 2,
    title: "Physical Security & Deception",
    subtitle: "Perimeter, entry, monitoring — and luring attackers with honeypots",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "secf-badge-02", name: "Perimeter Guard", emoji: "🚧" },
    challengeType: "quiz",
    info: {
      tagline: "All the encryption in the world won't help if an attacker can walk out with the server — physical security is security.",
      year: 2010,
      overview: [
        "Physical security protects the tangible assets — buildings, data centers, devices, and people — that digital controls depend on. It is layered in defense-in-depth:\n- PERIMETER — deters and delays with fencing, bollards to stop vehicle ramming, lighting, and clear sightlines.\n- ENTRY — controls who gets in with access control vestibules (mantraps) that trap a person between two interlocking doors to stop tailgating, plus access badges, PIN pads, and biometric locks.\n- MONITORING — detects and records with security guards, motion and door sensors, and video surveillance / CCTV.\nEach layer maps to control types: a bollard is preventive, a visible camera is deterrent and detective, a guard is all three.",
        "Tailgating (piggybacking) — following an authorized person through a door — is a top physical-access threat, which is why access control vestibules and guards matter: they enforce one-person-at-a-time entry. Other physical concerns round out the picture:\n- Protecting cabling and ports against tapping or unauthorized connections.\n- Secure media destruction so discarded drives don't leak data.\n- Environmental controls such as HVAC and fire suppression.\n- Visitor management — logging and escorting anyone who isn't staff.\nPhysical and cyber security converge in industrial and OT environments, where a USB drive carried through the door can bridge an air gap — as the Stuxnet worm demonstrated.",
        "Deception technology turns the tables by luring attackers into fake assets so defenders can detect and study them:\n- HONEYPOT — a decoy system that looks valuable but exists only to attract and observe attackers.\n- HONEYNET — a whole network of honeypots for broader observation and threat intelligence.\n- HONEYFILE — a bait document (e.g., 'passwords.xlsx') that triggers an alert when opened.\n- HONEYTOKEN — a fake credential, API key, or database record whose every use is a guaranteed sign of compromise.\nBecause legitimate users have no reason to touch these decoys, any interaction is high-fidelity evidence of an intruder. Deception is a detective control that also disrupts and slows attackers.",
      ],
      technical: {
        title: "Layered Physical Defense and Deception Assets",
        body: [
          "Defense-in-depth physically: deter and delay at the perimeter (fence, bollards, lighting), authenticate at entry (vestibule/mantrap, badge, biometric), and detect everywhere (guards, sensors, CCTV). The goal is to make unauthorized physical access slow, noisy, and recorded. Prevent tailgating with vestibules and guards; protect the supply chain of who enters with visitor logs and escorts.",
          "Deception assets are valued for their extremely low false-positive rate. A honeytoken (fake credential or canary record) is cheap to deploy and devastatingly effective: because no legitimate process should ever use it, a single use is near-certain proof of compromise and pinpoints where the attacker is. Honeypots and honeynets additionally gather threat intelligence on attacker tools and techniques, while wasting the attacker's time on worthless targets.",
        ],
        codeExample: {
          label: "Physical Layers + Deception",
          code: `  PERIMETER (deter/delay):
   fencing · bollards (anti-ram) · lighting · clear sightlines
  ENTRY (authenticate, stop tailgating):
   access control VESTIBULE / mantrap · access badge · PIN · biometric
  MONITORING (detect/record):
   security guards · motion + door sensors · CCTV / video surveillance

  TOP THREAT: tailgating (piggybacking) — one authorized
   person, multiple people through the door. Vestibule + guard stop it.

  DECEPTION (detective + disruptive):
   HONEYPOT   decoy system to lure + observe attackers
   HONEYNET   a network of honeypots
   HONEYFILE  bait document ("passwords.xlsx") that alerts on open
   HONEYTOKEN fake credential/key/record — ANY use = compromise
   → near-zero false positives: legit users never touch them`,
        },
      },
      incident: {
        title: "Stuxnet Crosses the Air Gap",
        when: "2010 — discovered targeting Iranian centrifuges",
        where: "Natanz, Iran",
        impact: "Stuxnet showed that a purely physical control — an air gap — can be defeated when physical access (a USB drive carried through the door) is not also controlled, fusing physical and cyber security forever.",
        body: [
          "The Natanz uranium-enrichment facility was air-gapped — its control systems had no internet connection, a physical control meant to make remote attack impossible. Stuxnet, a sophisticated worm, is believed to have crossed that gap on a removable USB drive carried in by a person, then spread to the programmable logic controllers driving the centrifuges and sabotaged them. The air gap was real; the human and physical access around it was not fully controlled.",
          "The lesson is foundational: digital and physical security are inseparable. Controlling who enters, what media they carry, and which ports are usable is as important as firewalls and patches. It is also why deception matters in sensitive environments — honeytokens and honeyfiles planted on critical systems can catch an intruder who has bypassed the perimeter, turning a quiet breach into a loud, detectable one.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker Approaches", sub: "physical or insider", type: "attacker" },
          { label: "Perimeter Deters/Delays", sub: "fence, bollard, lighting", type: "system" },
          { label: "Entry Authenticates", sub: "vestibule, badge, biometric", type: "victim" },
          { label: "Monitoring + Deception Detect", sub: "CCTV, guards, honeytokens", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Honeypots emerge as research tools to study attacker behavior" },
        { year: 2003, event: "The Honeynet Project popularizes networks of decoys for threat intel" },
        { year: 2010, event: "Stuxnet crosses an air gap via USB — physical access defeats a logical control", highlight: true },
        { year: 2015, event: "Access control vestibules (mantraps) become standard in secure facilities" },
        { year: 2020, event: "Honeytokens (canary credentials/records) adopted widely for high-fidelity detection" },
      ],
      keyTakeaways: [
        "Physical security is layered: perimeter (fence/bollard/lighting) → entry (vestibule/badge/biometric) → monitoring (guards/sensors/CCTV)",
        "An access control vestibule (mantrap) and guards stop tailgating — one authorized person letting others in",
        "Physical and cyber security converge: a USB through the door can defeat an air gap (Stuxnet)",
        "Deception assets — honeypot, honeynet, honeyfile, honeytoken — detect intruders with near-zero false positives because legitimate users never touch them",
      ],
      references: [
        { title: "NIST SP 800-53 — Physical & Environmental Protection (PE)", url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" },
        { title: "The Honeynet Project", url: "https://www.honeynet.org" },
        { title: "CISA: Physical Security", url: "https://www.cisa.gov/topics/physical-security" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-02-q1",
          type: "Entry Control",
          challenge: `  A facility wants to stop unauthorized people from
  slipping in behind an employee who badges through
  a door (tailgating).`,
          text: "Which physical control directly prevents tailgating at an entrance?",
          options: [
            "A taller perimeter fence",
            "An access control vestibule (mantrap) — interlocking doors that allow one person through at a time",
            "Full-disk encryption on the servers",
            "A warning sign",
          ],
          correctIndex: 1,
          explanation: "An access control vestibule (mantrap) traps a person between two interlocking doors so only one authorized individual passes at a time, directly preventing tailgating/piggybacking. A fence delays perimeter approach but doesn't stop tailgating at a door; encryption is a technical control unrelated to physical entry; a sign is only a deterrent. Guards also help enforce one-at-a-time entry.",
        },
        {
          id: "secf-02-q2",
          type: "Bollards",
          challenge: `  A data center installs sturdy posts in front of
  its lobby entrance to stop a vehicle from being
  driven into the building.`,
          text: "What are these anti-vehicle posts called, and what control type are they?",
          options: [
            "Honeypots — a detective control",
            "Bollards — a preventive (and deterrent) physical control against vehicle ramming",
            "Vestibules — a corrective control",
            "Sensors — a directive control",
          ],
          correctIndex: 1,
          explanation: "Bollards are sturdy posts that physically prevent a vehicle from ramming a building or crowd — a preventive physical control (also deterrent, since they're visible). They're part of perimeter defense alongside fencing and lighting. Honeypots are deception assets; vestibules control pedestrian entry; sensors detect. Classifying physical safeguards by type (preventive/deterrent/detective) is common on exams.",
        },
        {
          id: "secf-02-q3",
          type: "Deception",
          challenge: `  A defender plants a fake set of admin credentials
  in a config file. These credentials are never used
  by any real system or person. One day, an alert
  fires: someone just tried to use them.`,
          text: "What is this fake credential called, and why is the alert so reliable?",
          options: [
            "A honeypot — and the alert could be a false positive from a user",
            "A honeytoken — and because no legitimate process ever uses it, any use is near-certain proof of compromise",
            "A bollard — and it physically blocks access",
            "A vestibule — and it traps the attacker",
          ],
          correctIndex: 1,
          explanation: "A fake credential, API key, or record planted to detect misuse is a honeytoken. Its power is the near-zero false-positive rate: legitimate users and processes have no reason to ever touch it, so a single use is high-fidelity evidence of an intruder and pinpoints where they are. A honeypot is a whole decoy system; honeytokens are lightweight bait that turn a quiet breach into a loud, detectable one.",
        },
        {
          id: "secf-02-q4",
          type: "Convergence",
          challenge: `  An industrial facility keeps its control systems
  air-gapped (no network connection), believing this
  makes remote attack impossible. An infection still
  occurs.`,
          text: "What does the Stuxnet case teach about air gaps and physical security?",
          options: [
            "Air gaps are perfect and the infection was impossible",
            "Physical access (e.g., a USB drive carried in) can defeat an air gap, so controlling people, media, and ports is essential alongside the gap",
            "Air gaps only fail to insider encryption",
            "Physical security has nothing to do with cyber security",
          ],
          correctIndex: 1,
          explanation: "Stuxnet is believed to have crossed Natanz's air gap on a USB drive carried in by a person, then sabotaged the centrifuge controllers. An air gap is a real control, but it's defeated if physical access — who enters, what removable media they bring, which USB ports work — isn't also controlled. Digital and physical security are inseparable, especially in OT/ICS environments. Deception assets on critical systems can catch such intruders after they cross the gap.",
        },
      ],
    },
  },

  // ─── 03: Change Management ─────────────────────────────────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "A Network Operations Center", location: "Anywhere, 24/7", era: "Present Day", emoji: "🔧" },
    id: "sec-foundations-03",
    order: 3,
    title: "Change Management",
    subtitle: "Approvals, impact analysis, backout plans, and maintenance windows",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "secf-badge-03", name: "Change Controller", emoji: "🔧" },
    challengeType: "quiz",
    info: {
      tagline: "Most outages aren't attacks — they're changes gone wrong. Change management is the discipline that keeps 'fixing it' from breaking everything.",
      year: 2024,
      overview: [
        "Change management is the formal process for making changes to systems in a controlled, documented, reversible way. It exists because the majority of unplanned outages are self-inflicted — a configuration push, patch, or update that wasn't reviewed or tested — and it protects both availability and security: an unreviewed firewall change can open a hole, and an untested update can take down production. A typical workflow runs:\n- A change request is raised with a clear owner stating what and why.\n- Stakeholders and a change advisory board (CAB) review and approve it.\n- An IMPACT ANALYSIS assesses what could break and who is affected.\n- TEST RESULTS from a non-production environment are attached.\n- A BACKOUT PLAN documents exactly how to revert if it fails.\n- The change is scheduled in an approved MAINTENANCE WINDOW.\n- The whole thing is documented and version-controlled.",
        "Exams emphasize the supporting pieces that make a change safe:\n- Ownership and stakeholder identification, plus approval workflows.\n- Standard operating procedures (SOPs) for routine, pre-approved changes.\n- Allow/deny lists and firewall rules that may need updating.\n- Restricted activities and downtime planning for the window.\n- The correct order of service/application restarts, honoring dependencies.\nLegacy applications and undocumented dependencies are classic sources of change failures — restarting one service can cascade into others. Documentation and version control (updating diagrams, configs in Git, and runbooks) ensure the environment's true state is always known and changes are auditable.",
        "Change management is also a security and audit control. Auditors (CISA) expect to see that changes are authorized, tested, and traceable — unauthorized changes are a red flag and a common audit finding. The 2024 CrowdStrike incident, in which a faulty content update was pushed broadly and crashed millions of Windows machines worldwide, is a stark reminder that even routine, well-intentioned changes need staged rollout, testing, and a fast backout path. A good change process turns 'we'll just push this real quick' into a safe, reversible, auditable event.",
      ],
      technical: {
        title: "Anatomy of a Controlled Change",
        body: [
          "The core artifacts: a change request with an owner; stakeholder/CAB approval; an impact analysis (what breaks, who's affected, security implications); test results from a staging environment; a backout/rollback plan; a scheduled maintenance window; and updated documentation/version control. Standard, low-risk changes may be pre-approved via SOPs; emergency changes follow an expedited path but are still documented and reviewed afterward.",
          "Technical implications to plan for: updating allow/deny lists and firewall rules, restricted activities during the window, expected downtime, and the correct sequence of service/application restarts honoring dependencies. Legacy apps and hidden dependencies are the usual culprits in failed changes. Always stage rollouts (canary → broad) rather than pushing everywhere at once, and verify before declaring success.",
        ],
        codeExample: {
          label: "Change Management Workflow",
          code: `  1. REQUEST     who owns it? what + why?
  2. REVIEW      stakeholders / Change Advisory Board (CAB)
  3. IMPACT      what could break? who's affected? security risk?
  4. TEST        results from a NON-PROD/staging environment
  5. BACKOUT     exact steps to REVERT if it fails
  6. SCHEDULE    approved MAINTENANCE WINDOW (low-traffic)
  7. EXECUTE     staged rollout: canary → broad (not all-at-once)
  8. VERIFY      confirm success; watch dependencies/restarts
  9. DOCUMENT    update diagrams, configs (version control), runbook

  RED FLAGS (audit findings):
   ✗ unauthorized / undocumented changes
   ✗ no backout plan · no testing · push-everywhere-at-once`,
        },
      },
      incident: {
        title: "The CrowdStrike Update That Grounded the World",
        when: "July 19, 2024",
        where: "Global — airlines, hospitals, banks",
        impact: "A single faulty content update pushed to millions of Windows machines triggered crashes worldwide, grounding flights and disrupting hospitals and banks — a textbook lesson in why even routine changes demand staged rollout, testing, and a fast backout path.",
        body: [
          "On July 19, 2024, security vendor CrowdStrike pushed a routine sensor content update that contained a defect. Because it deployed broadly and almost simultaneously, millions of Windows systems hit a blue-screen crash loop at once, disrupting airlines, hospitals, banks, and emergency services globally. The fix often required manual, hands-on intervention on each machine — there was no fast remote backout.",
          "The incident wasn't an attack; it was a change-management failure at scale. The lessons are the staples of the discipline: stage rollouts (canary deployments to a small ring before going broad), test thoroughly, and ensure a rapid, reliable backout path. For learners, it's the clearest possible argument that change management isn't bureaucracy — it's the difference between a contained hiccup and a global outage.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Change Request + Owner", sub: "what, why, who", type: "system" },
          { label: "Review + Impact Analysis", sub: "CAB, what breaks?", type: "attacker" },
          { label: "Test + Backout Plan", sub: "staging results, rollback", type: "victim" },
          { label: "Window → Staged Rollout → Document", sub: "reversible + auditable", type: "result" },
        ],
      },
      timeline: [
        { year: 1989, event: "ITIL formalizes change management as an IT service-management discipline" },
        { year: 2012, event: "Knight Capital loses $440M in 45 minutes from a botched software deployment" },
        { year: 2020, event: "GitOps/IaC make changes version-controlled and reviewable by default" },
        { year: 2024, event: "CrowdStrike faulty update causes global Windows outages", highlight: true },
      ],
      keyTakeaways: [
        "Most outages are self-inflicted changes — change management makes changes controlled, tested, documented, and reversible",
        "Core artifacts: owner, stakeholder/CAB approval, impact analysis, test results, backout plan, maintenance window, version control",
        "Plan technical implications: allow/deny lists, downtime, and the correct restart order honoring dependencies (legacy apps bite)",
        "Stage rollouts (canary → broad) and keep a fast backout path — the CrowdStrike outage shows why push-everywhere is dangerous",
      ],
      references: [
        { title: "NIST SP 800-128 — Security-Focused Configuration Management", url: "https://csrc.nist.gov/pubs/sp/800/128/upd1/final" },
        { title: "ITIL Change Enablement (Axelos)", url: "https://www.axelos.com/certifications/itil-service-management" },
        { title: "CISA: CrowdStrike Outage Guidance (2024)", url: "https://www.cisa.gov/news-events" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-03-q1",
          type: "Backout Plan",
          challenge: `  A team is about to deploy a major configuration
  change to production during tonight's window. A
  reviewer asks: "What's our plan if it breaks?"`,
          text: "What change-management artifact answers 'what if it breaks?'",
          options: [
            "The impact analysis",
            "The backout (rollback) plan — documented steps to revert to the prior known-good state",
            "The maintenance window",
            "The acceptable use policy",
          ],
          correctIndex: 1,
          explanation: "The backout plan (rollback plan) documents the exact steps to revert a change to the prior known-good state if it fails. It's a mandatory part of a controlled change — without it, a failed change can mean prolonged downtime. The impact analysis assesses what could break beforehand; the maintenance window is when the change runs; the backout plan is the safety net for when it goes wrong.",
        },
        {
          id: "secf-03-q2",
          type: "Approval",
          challenge: `  An engineer wants to push a firewall rule change.
  Company policy requires it be reviewed by a board
  of stakeholders before it's approved and scheduled.`,
          text: "What is the review board commonly called in change management?",
          options: [
            "The Security Operations Center (SOC)",
            "The Change Advisory Board (CAB) — stakeholders who review and approve changes",
            "The incident response team",
            "The red team",
          ],
          correctIndex: 1,
          explanation: "The Change Advisory Board (CAB) is the group of stakeholders that reviews, prioritizes, and approves changes, weighing risk and impact before a change is scheduled. Identifying owners and stakeholders and routing changes through approval is central to change management and a key audit expectation. The SOC monitors threats, the IR team handles incidents, and the red team tests defenses — different functions.",
        },
        {
          id: "secf-03-q3",
          type: "Impact Analysis",
          challenge: `  Before approving a change to a shared authentication
  service, the team maps which applications depend on
  it, what could break, who would be affected, and any
  security implications.`,
          text: "This assessment of what could break and who is affected is called what?",
          options: [
            "A penetration test",
            "An impact analysis — assessing the consequences and dependencies of a proposed change",
            "A backout plan",
            "A vulnerability scan",
          ],
          correctIndex: 1,
          explanation: "Mapping dependencies, potential breakage, affected stakeholders, and security implications of a proposed change is the impact analysis. It's essential for shared services where a change can cascade — restarting or modifying one component can take down everything that depends on it. The impact analysis informs the approval decision, the test plan, and the backout plan. Legacy apps and hidden dependencies are common sources of unexpected impact.",
        },
        {
          id: "secf-03-q4",
          type: "Rollout",
          challenge: `  A vendor pushes a routine update to millions of
  machines simultaneously. A defect in it crashes
  systems worldwide, and there's no fast way to
  revert remotely.`,
          text: "What change-management practices would have most reduced this risk?",
          options: [
            "Pushing the update even faster to everyone",
            "Staged rollout (canary to a small ring first), thorough testing, and a fast backout path",
            "Skipping testing to save time",
            "Removing the maintenance window",
          ],
          correctIndex: 1,
          explanation: "The 2024 CrowdStrike outage shows the danger of pushing a change everywhere at once. Staging the rollout — deploying first to a small canary ring, watching for problems, then expanding — would have contained the defect to a fraction of systems. Combined with thorough pre-release testing and a fast, reliable backout path, staged rollout is the core defense against change-induced outages at scale.",
        },
      ],
    },
  },

  // ─── 04: Resilience & Recovery (BCDR) ─────────────────────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "OVHcloud Data Center", location: "Strasbourg, France", era: "Present Day", emoji: "♻️" },
    id: "sec-foundations-04",
    order: 4,
    title: "Resilience & Recovery (BC/DR)",
    subtitle: "High availability, recovery sites, backups, and the RTO/RPO that drive them",
    category: "cybersecurity",
    xp: 220,
    badge: { id: "secf-badge-04", name: "Continuity Planner", emoji: "♻️" },
    challengeType: "quiz",
    info: {
      tagline: "It's not if systems fail, but when — resilience keeps you running, and recovery gets you back. Both are driven by RTO and RPO.",
      year: 2021,
      overview: [
        "Resilience keeps services running through failures; recovery restores them after a disaster. The metrics that drive every design decision come from a Business Impact Analysis (BIA):\n- Recovery Time Objective (RTO) — the maximum tolerable time to restore a service; a 15-minute RTO means you need hot standby, not a tape restore.\n- Recovery Point Objective (RPO) — the maximum tolerable data loss, measured as a point in time; a 1-hour RPO means backups/replication must capture data at least hourly.\n- MTTR (mean time to repair) and MTBF (mean time between failures) — the related reliability metrics.\nTogether these numbers set how much you must spend on availability and data protection.",
        "HIGH AVAILABILITY designs prevent downtime in the first place:\n- Load balancing distributes traffic across redundant servers.\n- Clustering lets nodes take over for each other on failure.\n- Platform diversity / multi-cloud avoids any single vendor or technology being a single point of failure.\nRECOVERY SITES give you somewhere to run if a whole location is lost:\n- HOT — fully equipped and running, ready in minutes (lowest RTO, highest cost).\n- WARM — hardware and connectivity in place but needs data and setup (hours).\n- COLD — just space and power (days, lowest cost).\nGeographic dispersion ensures a single regional disaster — flood, fire, power loss — doesn't take out both primary and recovery.",
        "BACKUPS are the recovery foundation, and exams test the details:\n- Keep copies onsite (fast restore) and offsite (disaster protection), following the 3-2-1 rule — three copies, two media types, one offsite.\n- Match backup frequency to the RPO, encrypt the backups, and keep an immutable/offline copy so ransomware can't reach them.\n- Use the right techniques: full/incremental/differential backups, snapshots, replication (synchronous or asynchronous), and journaling.\n- Plan POWER resilience: a UPS bridges short outages and enables clean shutdown, while generators sustain longer ones.\n- TEST recovery with tabletop exercises, simulations, parallel processing, and full failover drills.\nUntested recovery is a myth — the worst time to discover a broken backup is during a real disaster.",
      ],
      technical: {
        title: "Designing to RTO and RPO",
        body: [
          "RTO drives availability architecture: a near-zero RTO demands hot standby, load-balanced clusters, and automated failover; a multi-hour RTO may tolerate a warm site and restore. RPO drives data protection: a near-zero RPO demands synchronous replication; an hours-long RPO allows periodic backups. Costs rise sharply as RTO/RPO approach zero, so the BIA balances the cost of downtime/data loss against the cost of the solution.",
          "Backup strategy essentials: follow 3-2-1 (3 copies, 2 media, 1 offsite), encrypt backups, and keep at least one immutable or air-gapped copy so ransomware can't encrypt your recovery. Match frequency to RPO. Replication and snapshots provide fast recovery points; journaling enables point-in-time recovery. Power: UPS for ride-through and clean shutdown, generators for sustained outages. And test everything — a backup you've never restored is a hope, not a plan.",
        ],
        codeExample: {
          label: "BC/DR Quick Reference",
          code: `  FROM THE BIA:
   RTO  max time to RESTORE a service   (drives availability design)
   RPO  max acceptable DATA LOSS        (drives backup/replication)
   MTTR mean time to repair · MTBF mean time between failures

  HIGH AVAILABILITY: load balancing · clustering · multi-cloud /
   platform diversity (no single point of failure)

  RECOVERY SITES (RTO ↓ / cost ↑):
   HOT   running, ready in minutes     (lowest RTO, highest cost)
   WARM  hardware+conn, needs data     (hours)
   COLD  space + power only            (days, lowest cost)
   + GEOGRAPHIC DISPERSION (survive a regional disaster)

  BACKUPS: 3-2-1 (3 copies · 2 media · 1 offsite) · encrypt ·
   immutable/offline copy vs ransomware · full/incr/diff ·
   snapshots · replication (sync/async) · journaling

  POWER: UPS (ride-through + clean shutdown) · generators (sustained)
  TEST: tabletop · simulation · parallel · full failover`,
        },
      },
      incident: {
        title: "The OVHcloud Data-Center Fire",
        when: "March 10, 2021",
        where: "Strasbourg, France",
        impact: "A fire destroyed one OVHcloud data center and damaged another, wiping out servers for thousands of customers — many of whom had no offsite backup and lost data permanently, a brutal lesson in geographic dispersion and the 3-2-1 rule.",
        body: [
          "In March 2021, a fire broke out at OVHcloud's Strasbourg campus, completely destroying the SBG2 data center and damaging adjacent buildings. Thousands of customers' servers went offline, and for many the data was simply gone. The hardest-hit were those who had treated the cloud provider's single facility as their only copy — no offsite backup, no geographic dispersion. Some businesses lost everything.",
          "The incident is a real-world exam case for resilience and recovery: redundancy within one site doesn't protect against losing the whole site, so geographic dispersion and offsite backups (the '1' in 3-2-1) are essential. It also underscores that 'the cloud' is still someone's data center that can burn down — the customer remains responsible for their own backup strategy. RTO and RPO mean nothing if your only copy is in the building that's on fire.",
        ],
      },
      diagram: {
        nodes: [
          { label: "BIA Sets RTO + RPO", sub: "tolerance for downtime/loss", type: "system" },
          { label: "High Availability", sub: "load balance, cluster, multi-cloud", type: "attacker" },
          { label: "Recovery Site + Backups", sub: "hot/warm/cold, 3-2-1, offsite", type: "victim" },
          { label: "Test the Plan", sub: "tabletop, failover, parallel", type: "result" },
        ],
      },
      timeline: [
        { year: 2001, event: "9/11 destroys data centers; firms with offsite recovery survive, others don't — BC/DR goes mainstream" },
        { year: 2012, event: "Hurricane Sandy floods NYC data centers, stress-testing geographic dispersion" },
        { year: 2017, event: "AWS S3 outage shows single-region dependency risk; multi-region design accelerates" },
        { year: 2021, event: "OVHcloud Strasbourg fire destroys a data center; customers without offsite backups lose data", highlight: true },
        { year: 2024, event: "Ransomware drives adoption of immutable/air-gapped backups as standard" },
      ],
      keyTakeaways: [
        "RTO (max time to restore) and RPO (max data loss) come from the BIA and drive every resilience/recovery decision",
        "High availability prevents downtime: load balancing, clustering, and multi-cloud/platform diversity remove single points of failure",
        "Recovery sites trade cost for speed: hot (minutes), warm (hours), cold (days) — plus geographic dispersion for regional disasters",
        "Back up with 3-2-1, encrypt, keep an immutable/offline copy against ransomware, use UPS/generators for power, and TEST recovery (tabletop/failover)",
      ],
      references: [
        { title: "NIST SP 800-34 — Contingency Planning Guide", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" },
        { title: "CISA: Backups and Recovery (3-2-1)", url: "https://www.cisa.gov/topics/cyber-threats-and-advisories" },
        { title: "ISO 22301 — Business Continuity Management", url: "https://www.iso.org/standard/75106.html" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-04-q1",
          type: "RTO vs RPO",
          challenge: `  A business decides it can tolerate losing at most
  15 minutes of data, and must have a critical service
  back online within 1 hour of an outage.`,
          text: "Which metric is the '15 minutes of data' (RPO) versus the '1 hour to restore' (RTO)?",
          options: [
            "15 minutes is the RTO; 1 hour is the RPO",
            "15 minutes is the RPO (max data loss); 1 hour is the RTO (max time to restore)",
            "Both are the MTBF",
            "Both are the maintenance window",
          ],
          correctIndex: 1,
          explanation: "RPO (Recovery Point Objective) is the maximum acceptable data loss — here 15 minutes — which dictates how often you back up or replicate. RTO (Recovery Time Objective) is the maximum acceptable time to restore the service — here 1 hour — which dictates the availability/recovery architecture. Both come from the Business Impact Analysis and together drive the cost and design of the resilience solution.",
        },
        {
          id: "secf-04-q2",
          type: "Recovery Sites",
          challenge: `  An organization needs to fail over to an alternate
  location within minutes of losing its primary site,
  and is willing to pay for a fully running duplicate.`,
          text: "Which type of recovery site meets a near-immediate RTO?",
          options: [
            "A cold site — just space and power",
            "A hot site — fully equipped and running, ready in minutes (lowest RTO, highest cost)",
            "A warm site — hardware but no current data",
            "No site is needed",
          ],
          correctIndex: 1,
          explanation: "A hot site is fully equipped, running, and continuously updated with data, enabling failover in minutes — the lowest RTO but the highest cost. A warm site has hardware and connectivity but needs data loaded and setup (hours); a cold site is just space and power (days). The right choice balances the RTO requirement against cost. Geographic dispersion of the recovery site protects against regional disasters.",
        },
        {
          id: "secf-04-q3",
          type: "Backups",
          challenge: `  A company keeps three copies of its data on two
  different media types, with one copy stored offsite,
  and keeps one copy immutable/offline.`,
          text: "What backup rule is this, and why does the offsite/immutable copy matter?",
          options: [
            "The 3-2-1 rule — and the offsite/immutable copy survives a site disaster and resists ransomware encryption",
            "The CIA triad — and it has nothing to do with backups",
            "The RTO rule — and it only affects restore speed",
            "There is no benefit to multiple copies",
          ],
          correctIndex: 0,
          explanation: "The 3-2-1 rule — three copies, two media types, one offsite — is the backup standard. The offsite copy survives a disaster that destroys the primary site (as in the OVHcloud fire), and an immutable or air-gapped copy can't be encrypted by ransomware that compromises the live environment. Matching backup frequency to the RPO and encrypting backups complete a sound strategy. Crucially, backups must be tested by actually restoring them.",
        },
        {
          id: "secf-04-q4",
          type: "Testing",
          challenge: `  A team has a documented DR plan and nightly backups
  but has never actually restored from them or run a
  failover. Leadership assumes they're covered.`,
          text: "What is the risk, and how should the plan be validated?",
          options: [
            "No risk — a documented plan is enough",
            "An untested plan may fail when needed; validate with tabletop exercises, simulations, parallel processing, and full failover drills",
            "Testing the plan would cause the disaster",
            "Only the RTO needs to be documented",
          ],
          correctIndex: 1,
          explanation: "An untested recovery plan is a hope, not a guarantee — backups can be corrupt, incomplete, or unrestorable, and failover can have hidden dependencies. Validate with a ladder of tests: tabletop exercises (walk through the plan in discussion), simulations, parallel processing (run recovery alongside production), and full failover drills. The worst time to discover a broken backup is during a real disaster.",
        },
      ],
    },
  },
  // ─── 05: Cryptographic Solutions ──────────────────────────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "A Certificate Authority", location: "The Internet's Trust Backbone", era: "Present Day", emoji: "🔐" },
    id: "sec-foundations-05",
    order: 5,
    title: "Cryptographic Solutions",
    subtitle: "PKI, certificates, hashing, digital signatures, and the tools that protect keys",
    category: "cybersecurity",
    xp: 220,
    badge: { id: "secf-badge-05", name: "Key Master", emoji: "🔐" },
    challengeType: "quiz",
    info: {
      tagline: "Cryptography turns secrets into math — and exams test the building blocks: keys, certificates, hashes, and signatures.",
      year: 2011,
      overview: [
        "Cryptography provides three guarantees — confidentiality (encryption), integrity (hashing), and authenticity/non-repudiation (digital signatures):\n- SYMMETRIC encryption (e.g., AES) uses one shared key — fast, but the key must be exchanged securely.\n- ASYMMETRIC encryption (e.g., RSA, ECC) uses a public/private key pair: data encrypted with the public key only decrypts with the matching private key, solving key distribution.\n- In practice the two combine — asymmetric crypto exchanges a symmetric session key (key exchange, e.g., Diffie-Hellman), then symmetric crypto does the bulk work, exactly how TLS operates.\nEncryption can be applied at many levels: full-disk, partition, volume, file, database, and record, plus transport (in transit).",
        "PUBLIC KEY INFRASTRUCTURE (PKI) is the system of trust that binds a public key to an identity using digital CERTIFICATES (X.509):\n- A Certificate Authority (CA) signs certificates, and a chain of trust runs from a trusted root CA through intermediates to the end-entity certificate.\n- To get one, you submit a Certificate Signing Request (CSR) to the CA.\n- Certificates may be self-signed (trusted only by you), CA-signed (trusted publicly), wildcard (*.example.com), or carry Subject Alternative Names.\n- To invalidate a certificate early, clients check a Certificate Revocation List (CRL) or query the Online Certificate Status Protocol (OCSP).\n- Key escrow stores keys with a trusted third party for recovery.",
        "HASHING produces a fixed-length, one-way fingerprint of data (e.g., SHA-256) for integrity — change one bit and the hash changes completely:\n- SALTING adds random data before hashing passwords so identical passwords hash differently and rainbow tables fail.\n- KEY STRETCHING (bcrypt, PBKDF2, Argon2) deliberately makes hashing slow to resist brute force.\n- A DIGITAL SIGNATURE hashes a message and encrypts the hash with the signer's PRIVATE key; anyone verifies it with the signer's PUBLIC key, proving integrity, authenticity, and non-repudiation.\n- Keys are protected by hardware — a TPM on a device, an HSM for high-assurance storage, a secure enclave for isolated processing, and a KMS for lifecycle.\n- OBFUSCATION techniques — steganography, tokenization, and data masking — protect data in other ways, while blockchain uses hashing and signatures to build an open public ledger.",
      ],
      technical: {
        title: "PKI, Hashing, and Signatures in Practice",
        body: [
          "The asymmetric rule to memorize: encrypt for confidentiality with the RECIPIENT's public key (only they can decrypt with their private key); sign for authenticity with YOUR private key (anyone verifies with your public key). TLS combines both: the server proves identity with its certificate, the parties do an asymmetric key exchange to agree on a symmetric session key, and then encrypt traffic symmetrically for speed.",
          "Certificate lifecycle: generate a key pair, submit a CSR to a CA, the CA validates and issues a signed cert, clients trust it via the chain to a trusted root, and revocation (CRL/OCSP) handles compromise. For passwords, never store them reversibly — store a salted, key-stretched hash (bcrypt/Argon2). Protect private keys in a TPM/HSM, never in plaintext. These mechanics underpin every secure connection and authentication system.",
        ],
        codeExample: {
          label: "Cryptographic Building Blocks",
          code: `  ENCRYPTION (confidentiality):
   SYMMETRIC  one shared key (AES) — fast, key-exchange problem
   ASYMMETRIC public/private pair (RSA/ECC) — solves key exchange
   → TLS: asymmetric key exchange → symmetric session key (speed)
   levels: full-disk · partition · volume · file · database · record

  PKI / CERTIFICATES (trust):
   CA signs certs · CSR requests one · chain of trust to ROOT
   self-signed | CA-signed | wildcard *.x.com | SAN
   revoke via CRL (list) or OCSP (live query) · key escrow (recovery)

  HASHING (integrity): SHA-256 one-way fingerprint
   + SALT (defeat rainbow tables) + KEY STRETCHING (bcrypt/PBKDF2/Argon2)

  DIGITAL SIGNATURE: hash → encrypt hash with PRIVATE key
   verify with PUBLIC key → integrity + authenticity + NON-REPUDIATION

  KEY PROTECTION: TPM (device) · HSM (high-assurance) · secure enclave · KMS
  OBFUSCATION: steganography · tokenization · data masking · blockchain ledger`,
        },
      },
      incident: {
        title: "The DigiNotar CA Breach",
        when: "2011 — the Netherlands",
        where: "DigiNotar, a Dutch Certificate Authority",
        impact: "Attackers breached the DigiNotar CA and issued fraudulent certificates (including for google.com), enabling interception of hundreds of thousands of users' traffic in Iran — proving that PKI's entire trust model collapses if a single CA is compromised.",
        body: [
          "In 2011, attackers compromised the Dutch Certificate Authority DigiNotar and issued more than 500 fraudulent certificates for high-value domains, including google.com. Because browsers trusted DigiNotar as a root CA, these forged certificates let attackers conduct on-path interception of victims' encrypted traffic — primarily against Gmail users in Iran — with the browser showing a valid padlock. Once discovered, browser vendors removed DigiNotar from their trust stores, and the company collapsed.",
          "The breach is the definitive lesson in why PKI mechanics matter: the security of every TLS connection rests on the integrity of CAs and the revocation system. It drove improvements like Certificate Transparency (public logs of issued certs), stricter CA auditing, and certificate pinning. For learners, it shows that a certificate is only as trustworthy as the CA that signed it and the revocation infrastructure (CRL/OCSP) that can invalidate it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Key Pair + CSR", sub: "generate, request a cert", type: "system" },
          { label: "CA Signs the Certificate", sub: "chain of trust to root", type: "attacker" },
          { label: "Encrypt + Sign", sub: "public-key encrypt, private-key sign", type: "victim" },
          { label: "Verify + Revoke", sub: "hash, signature, CRL/OCSP", type: "result" },
        ],
      },
      timeline: [
        { year: 1976, event: "Diffie-Hellman introduces public-key key exchange" },
        { year: 1977, event: "RSA asymmetric algorithm published" },
        { year: 1995, event: "SSL/TLS brings PKI to the web for secure HTTPS" },
        { year: 2011, event: "DigiNotar CA breach issues fraudulent certificates — PKI trust shaken", highlight: true },
        { year: 2018, event: "Certificate Transparency becomes mandatory in major browsers" },
      ],
      keyTakeaways: [
        "Symmetric (AES) is fast with one shared key; asymmetric (RSA/ECC) uses public/private pairs to solve key exchange — TLS uses both",
        "PKI binds keys to identities with certificates: CA signs, CSR requests, chain of trust to a root, revocation via CRL/OCSP",
        "Hash for integrity (SHA-256), salt + key-stretch passwords (bcrypt/Argon2); a digital signature = private-key-encrypted hash giving integrity, authenticity, and non-repudiation",
        "Protect private keys in TPM/HSM/secure enclave; obfuscation (steganography, tokenization, masking) protects data in other ways",
      ],
      references: [
        { title: "NIST SP 800-57 — Key Management Recommendations", url: "https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final" },
        { title: "Let's Encrypt — How Certificates Work", url: "https://letsencrypt.org/how-it-works/" },
        { title: "Certificate Transparency", url: "https://certificate.transparency.dev" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-05-q1",
          type: "Asymmetric Keys",
          challenge: `  Alice wants to send Bob a confidential message
  using asymmetric encryption so only Bob can read it.`,
          text: "Which key should Alice use to encrypt the message?",
          options: [
            "Alice's private key",
            "Bob's public key — only Bob's matching private key can decrypt it",
            "Bob's private key",
            "A shared symmetric key sent in plaintext",
          ],
          correctIndex: 1,
          explanation: "For confidentiality with asymmetric encryption, you encrypt with the RECIPIENT's public key, because only the recipient holds the matching private key needed to decrypt. So Alice encrypts with Bob's public key. (Signing is the reverse: you sign with YOUR private key so others verify with your public key.) In practice, asymmetric crypto exchanges a symmetric session key, which then does the bulk encryption for speed.",
        },
        {
          id: "secf-05-q2",
          type: "Digital Signature",
          challenge: `  A software vendor wants recipients to be able to
  verify that an update genuinely came from them and
  wasn't tampered with.`,
          text: "How does a digital signature provide authenticity, integrity, and non-repudiation?",
          options: [
            "The vendor encrypts the file with the recipient's public key",
            "The vendor hashes the file and encrypts the hash with their private key; anyone verifies it with the vendor's public key",
            "The vendor stores the file's hash on the recipient's device",
            "The vendor uses a salted password",
          ],
          correctIndex: 1,
          explanation: "A digital signature is created by hashing the data and encrypting that hash with the signer's PRIVATE key. Anyone can decrypt the hash with the signer's PUBLIC key and compare it to a freshly computed hash: a match proves the data is unaltered (integrity), that it came from the holder of the private key (authenticity), and that they can't deny signing it (non-repudiation). This is the basis of code signing and certificate trust.",
        },
        {
          id: "secf-05-q3",
          type: "Password Storage",
          challenge: `  A developer is deciding how to store user passwords.
  Options include plaintext, a fast SHA-256 hash, or a
  salted bcrypt/Argon2 hash.`,
          text: "What is the correct way to store passwords?",
          options: [
            "Encrypted so they can be decrypted when needed",
            "A salted, key-stretched hash (bcrypt/Argon2) — one-way, unique per user, and deliberately slow",
            "A plain SHA-256 hash with no salt",
            "Plaintext behind a firewall",
          ],
          correctIndex: 1,
          explanation: "Passwords should be stored as salted, key-stretched hashes using a slow algorithm like bcrypt, PBKDF2, or Argon2. The salt makes identical passwords hash differently and defeats precomputed rainbow tables; key stretching makes each guess expensive, frustrating brute force. A plain fast hash (SHA-256) is too fast and unsalted, and reversible encryption is wrong because passwords should never be recoverable in plaintext.",
        },
        {
          id: "secf-05-q4",
          type: "PKI Trust",
          challenge: `  Attackers compromise a trusted Certificate Authority
  and issue a fraudulent but validly-signed certificate
  for a major website. Browsers show a valid padlock.`,
          text: "What does the DigiNotar breach reveal about PKI, and what mitigates it?",
          options: [
            "Certificates can't be forged, so this is impossible",
            "PKI trust collapses if a CA is compromised; mitigations include certificate revocation (CRL/OCSP), Certificate Transparency logs, and removing the CA from trust stores",
            "Only the website's private key matters",
            "Hashing prevents CA compromise",
          ],
          correctIndex: 1,
          explanation: "Because browsers trust certificates signed by any CA in their root store, a compromised CA can issue fraudulent certificates that look completely valid — exactly what happened with DigiNotar. The trust model depends on CA integrity and the ability to revoke (CRL/OCSP) and detect (Certificate Transparency public logs) bad certificates, plus removing the offending CA from trust stores. A certificate is only as trustworthy as the CA that signed it.",
        },
      ],
    },
  },

  // ─── 06: Identity & Access Management ─────────────────────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "An Identity Provider", location: "The Login Box Everywhere", era: "Present Day", emoji: "🪪" },
    id: "sec-foundations-06",
    order: 6,
    title: "Identity & Access Management",
    subtitle: "AAA, MFA, SSO and federation, and access control models",
    category: "cybersecurity",
    xp: 220,
    badge: { id: "secf-badge-06", name: "Identity Guardian", emoji: "🪪" },
    challengeType: "quiz",
    info: {
      tagline: "Identity is the new perimeter — and the exam wants you to know AAA, the factors of MFA, and who's allowed to do what.",
      year: 2021,
      overview: [
        "Identity and Access Management (IAM) controls who can access what, and proves it — built on the AAA framework: Authentication (proving who you are), Authorization (what you're allowed to do), and Accounting (logging what you did). Authentication draws on FACTORS in distinct categories:\n- Something you KNOW — a password or PIN.\n- Something you HAVE — a hardware token, phone, or smart card.\n- Something you ARE — biometrics such as a fingerprint or face.\n- Somewhere you ARE — geolocation; and something you DO — behavioral patterns.\nMulti-Factor Authentication (MFA) combines factors from DIFFERENT categories — a password plus a code from your phone — so a stolen password alone isn't enough, while passwordless approaches (passkeys, security keys) and password managers reduce reliance on memorized secrets.",
        "Single Sign-On (SSO) lets a user authenticate once and reach many systems, and FEDERATION extends that trust across organizations using an Identity Provider (IdP) that vouches for users to Service Providers (SPs). The protocols matter:\n- SAML — XML-based, common in enterprise web SSO.\n- OAuth 2.0 — delegated authorization, granting an app limited access without sharing your password.\n- OpenID Connect (OIDC) — an authentication layer on top of OAuth.\n- LDAP — directory queries; Kerberos — ticket-based authentication in Windows domains.\nProvisioning creates accounts and assigns permissions; de-provisioning promptly removes access when someone leaves — orphaned accounts are a major risk. Identity proofing verifies a real person, and attestation/recertification periodically reviews that access is still appropriate.",
        "ACCESS CONTROL MODELS define how permissions are granted:\n- Discretionary Access Control (DAC) — data owners grant access at their discretion.\n- Mandatory Access Control (MAC) — the system enforces access by labels/clearances (high-security/military contexts).\n- Role-Based Access Control (RBAC) — permissions follow job role; the most common in enterprises.\n- Rule-Based and Attribute-Based Access Control (ABAC) — decisions use conditions/attributes (time of day, location, device).\nUnderpinning them all are least privilege (only the access needed) and separation of duties (no single person controls a whole sensitive process). For privileged accounts, Privileged Access Management (PAM) adds just-in-time access, password vaulting, and ephemeral credentials so powerful accounts aren't standing targets.",
      ],
      technical: {
        title: "AAA, Factors, and Models",
        body: [
          "MFA strength comes from using DIFFERENT factor categories: two passwords are not MFA; a password (know) + phone code (have) is. Push-based and phishing-resistant FIDO2/WebAuthn security keys are the strongest common options. SSO improves usability and security (fewer passwords, central control) but makes the IdP a high-value target, so protect it with strong MFA and monitoring.",
          "Choosing a model: RBAC scales for most organizations (assign people to roles, roles to permissions); ABAC adds fine-grained, context-aware control; MAC suits classified environments; DAC is flexible but risky at scale. Always layer least privilege and separation of duties on top, and wrap privileged accounts in PAM. De-provision immediately on offboarding and recertify access regularly — most access-related breaches trace to excessive or orphaned permissions.",
        ],
        codeExample: {
          label: "IAM Quick Reference",
          code: `  AAA: Authentication (who) · Authorization (what allowed) · Accounting (log)

  MFA FACTORS (combine DIFFERENT categories):
   KNOW (password/PIN) · HAVE (token/phone/smart card) ·
   ARE (biometric) · somewhere you ARE (geo) · something you DO (behavior)
   → password + phone code = MFA;  two passwords = NOT MFA

  SSO / FEDERATION (IdP vouches to Service Providers):
   SAML (enterprise web SSO) · OAuth2 (delegated authorization) ·
   OIDC (auth on top of OAuth) · LDAP (directory) · Kerberos (tickets)

  ACCESS MODELS:
   DAC owner-discretion · MAC labels/clearance · RBAC by role (common) ·
   ABAC by attributes/context · rule-based
   + LEAST PRIVILEGE + SEPARATION OF DUTIES

  PRIVILEGED ACCESS MGMT (PAM): just-in-time · password vaulting · ephemeral creds
  LIFECYCLE: provision → recertify/attest → DE-PROVISION on offboarding`,
        },
      },
      incident: {
        title: "Colonial Pipeline — One Password, No MFA",
        when: "May 2021",
        where: "Colonial Pipeline, US East Coast fuel supply",
        impact: "Ransomware operators entered Colonial Pipeline through a single legacy VPN account that had a valid password but no multi-factor authentication, shutting down the largest US fuel pipeline and triggering panic buying — a stark lesson in the cost of weak identity controls.",
        body: [
          "In May 2021, the DarkSide ransomware group breached Colonial Pipeline using the credentials of a single VPN account. The password had been exposed (likely in a prior leak), and critically, the VPN required no multi-factor authentication and the account was no longer in active use but had never been de-provisioned. With that one login, attackers reached the network, deployed ransomware, and forced the shutdown of a pipeline supplying nearly half the East Coast's fuel.",
          "Every IAM lesson is in this one breach: MFA would have blocked a stolen-password login; de-provisioning the unused account would have removed the door entirely; least privilege and segmentation would have limited the blast radius; and monitoring/accounting might have caught the anomalous login. It's why exams hammer on MFA, prompt de-provisioning, and least privilege — identity is the perimeter, and a single weak credential can take down critical infrastructure.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Authenticate (AAA)", sub: "factors: know/have/are", type: "system" },
          { label: "MFA + SSO/Federation", sub: "IdP vouches, OIDC/SAML", type: "attacker" },
          { label: "Authorize by Model", sub: "RBAC/ABAC + least privilege", type: "victim" },
          { label: "Account + De-provision", sub: "log, recertify, offboard", type: "result" },
        ],
      },
      timeline: [
        { year: 1993, event: "RADIUS standardizes centralized AAA for network access" },
        { year: 2005, event: "SAML 2.0 enables enterprise web single sign-on" },
        { year: 2012, event: "OAuth 2.0 and later OIDC power delegated auth across the web" },
        { year: 2021, event: "Colonial Pipeline breached via a no-MFA VPN account", highlight: true },
        { year: 2023, event: "Passkeys (FIDO2/WebAuthn) drive mainstream passwordless adoption" },
      ],
      keyTakeaways: [
        "AAA = Authentication (who), Authorization (what), Accounting (log); MFA combines factors from DIFFERENT categories (know/have/are)",
        "SSO and federation use an IdP to vouch for users; SAML (enterprise SSO), OAuth2 (delegated authz), OIDC (authn), Kerberos, LDAP",
        "Access models: DAC (owner), MAC (labels), RBAC (role — common), ABAC (attributes) — always with least privilege and separation of duties",
        "De-provision promptly, recertify access, and wrap privileged accounts in PAM (just-in-time, vaulting, ephemeral) — Colonial Pipeline fell to one no-MFA account",
      ],
      references: [
        { title: "NIST SP 800-63 — Digital Identity Guidelines", url: "https://pages.nist.gov/800-63-3/" },
        { title: "CISA: Multi-Factor Authentication", url: "https://www.cisa.gov/MFA" },
        { title: "FIDO Alliance — Passkeys", url: "https://fidoalliance.org/passkeys/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-06-q1",
          type: "MFA Factors",
          challenge: `  A system asks for a password and then a PIN before
  granting access. A vendor calls this 'multi-factor.'`,
          text: "Is a password plus a PIN true multi-factor authentication?",
          options: [
            "Yes — it's two steps, so it's MFA",
            "No — both are 'something you know'; true MFA combines DIFFERENT factor categories (e.g., know + have)",
            "Yes — any two credentials count",
            "No — MFA requires three factors",
          ],
          correctIndex: 1,
          explanation: "A password and a PIN are both 'something you know,' so requiring both is single-factor (just two knowledge secrets), not MFA. True multi-factor authentication combines factors from DIFFERENT categories — something you know (password) plus something you have (a phone code or security key) or something you are (biometric). The whole point of MFA is that compromising one category (a stolen password) isn't enough.",
        },
        {
          id: "secf-06-q2",
          type: "Access Model",
          challenge: `  A growing company wants to grant permissions based
  on job function — all 'accountants' get the same
  access, all 'engineers' get theirs — and manage it
  centrally as people change roles.`,
          text: "Which access control model fits granting permissions by job role?",
          options: [
            "Mandatory Access Control (MAC) — system-enforced labels",
            "Role-Based Access Control (RBAC) — permissions assigned by role",
            "Discretionary Access Control (DAC) — owner's discretion",
            "No model — assign permissions individually",
          ],
          correctIndex: 1,
          explanation: "Role-Based Access Control (RBAC) assigns permissions to roles and users to roles, so everyone in a role gets the same appropriate access and changes are managed centrally — ideal for most organizations. MAC enforces access via system-assigned security labels (high-security/military); DAC lets data owners grant access at their discretion (flexible but risky at scale); ABAC decides by attributes/context. Least privilege and separation of duties apply on top of any model.",
        },
        {
          id: "secf-06-q3",
          type: "Federation Protocols",
          challenge: `  A web app lets you 'Sign in with Google,' granting
  the app limited access to your profile without ever
  sharing your Google password with the app.`,
          text: "Which protocols enable this delegated, federated sign-in?",
          options: [
            "Kerberos for delegated authorization",
            "OAuth 2.0 (delegated authorization) with OpenID Connect (authentication) — the app trusts Google as the Identity Provider",
            "LDAP directory replication",
            "RADIUS accounting",
          ],
          correctIndex: 1,
          explanation: "'Sign in with Google' uses OAuth 2.0 for delegated authorization (the app gets limited, scoped access without your password) and OpenID Connect (OIDC), which layers authentication on OAuth so the app learns who you are. Google acts as the Identity Provider (IdP) vouching for you to the app (the Service Provider). SAML provides similar federation in enterprise web SSO; LDAP and Kerberos serve directory and domain authentication.",
        },
        {
          id: "secf-06-q4",
          type: "Lifecycle",
          challenge: `  Ransomware operators log into a company's VPN using
  a valid password for an old account that was never
  disabled and had no MFA, then deploy ransomware.`,
          text: "Which IAM failures made the Colonial Pipeline breach possible?",
          options: [
            "Too much MFA and over-restricted access",
            "No MFA on the VPN, plus an unused account that was never de-provisioned (orphaned access)",
            "The password was too long",
            "Federation with a trusted IdP",
          ],
          correctIndex: 1,
          explanation: "The Colonial Pipeline breach combined two classic IAM failures: the VPN required no multi-factor authentication (so a stolen password was enough), and the account was unused but never de-provisioned, leaving an orphaned door open. MFA would have blocked the login; prompt de-provisioning would have removed the account; least privilege and segmentation would have limited the damage. It's why exams stress MFA, offboarding/de-provisioning, and least privilege.",
        },
      ],
    },
  },

  // ─── 07: Data Protection & Classification ─────────────────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "A Data Governance Office", location: "Under GDPR & Global Privacy Law", era: "Present Day", emoji: "🗃️" },
    id: "sec-foundations-07",
    order: 7,
    title: "Data Protection & Classification",
    subtitle: "Data states, classification, sovereignty, and protection methods",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "secf-badge-07", name: "Data Steward", emoji: "🗃️" },
    challengeType: "quiz",
    info: {
      tagline: "You can't protect what you haven't classified — data protection starts with knowing what you have and how sensitive it is.",
      year: 2018,
      overview: [
        "Protecting data starts with classifying it along two axes:\n- By CLASSIFICATION level — from public (no harm if disclosed) through private, sensitive, and confidential, up to restricted and critical (severe harm if disclosed).\n- By DATA TYPE — regulated data (PII, personally identifiable information; PHI, protected health information; PCI, cardholder data), trade secrets, intellectual property, and financial or legal data.\nClassification drives the controls: the more sensitive the data, the stronger the protection and the tighter the access. A major cause of breaches is simply not knowing where sensitive data lives, or treating it all the same.",
        "Data exists in three STATES, each needing its own protection:\n- AT REST — stored on disk; protect with encryption and access controls.\n- IN TRANSIT — moving across a network; protect with TLS/IPsec.\n- IN USE — being processed in memory (the hardest); protect with access controls, secure enclaves, and confidential computing.\nDATA SOVEREIGNTY and residency add a legal dimension: data is subject to the laws of the country where it's stored, so a company may be required to keep certain data within specific borders (enforced via geolocation/geographic restrictions), and cross-border transfers are heavily regulated under laws like the EU's GDPR.",
        "PROTECTION METHODS give you a toolbox:\n- Encryption (confidentiality at rest/in transit) and hashing (integrity).\n- Masking — showing only part of a value, e.g., **** **** **** 1234.\n- Tokenization — replacing sensitive data with a non-sensitive token while the real value stays in a secure vault.\n- Obfuscation, segmentation (isolating sensitive data), and permission restrictions.\n- Data Loss Prevention (DLP) — detects and blocks sensitive data from leaving the organization.\nGovernance also defines the data LIFECYCLE — retention schedules, minimization (collect only what's needed), and disposal/sanitization — and assigns ROLES: the data owner (accountable), the controller (decides why/how data is processed), the processor (acts on the controller's behalf), and the custodian/steward (day-to-day protection). Privacy laws add rights like the 'right to be forgotten.'",
      ],
      technical: {
        title: "Classify, Locate, Protect by State",
        body: [
          "The workflow: discover and inventory data, classify it by sensitivity and type, then apply controls proportional to the classification across all three states. Tokenization and masking are favored for regulated data like PCI because they remove or hide the sensitive value from systems that don't need it, shrinking compliance scope. Encryption protects at rest and in transit; DLP watches the egress points (email, web, USB, cloud uploads) for sensitive data leaving.",
          "Roles and law matter for exams: distinguish controller (decides purpose/means) from processor (acts for the controller) — a GDPR distinction with real liability. Data sovereignty means storage location dictates applicable law, so multinational architectures must consider residency. Retention and minimization reduce risk: data you don't keep can't be breached, and the right to be forgotten may require deletion on request.",
        ],
        codeExample: {
          label: "Data Protection Quick Reference",
          code: `  CLASSIFY (sensitivity): public < private < sensitive <
   confidential < restricted < critical
  DATA TYPES: PII · PHI · PCI (regulated) · trade secret · IP · financial · legal

  THREE STATES → protection:
   AT REST     encryption + access control
   IN TRANSIT  TLS / IPsec
   IN USE      access control · secure enclave · confidential computing

  SOVEREIGNTY: data obeys the laws where it's STORED → residency /
   geographic restrictions; cross-border transfer (GDPR) regulated

  METHODS: encryption · hashing · MASKING (**** 1234) ·
   TOKENIZATION (swap value for a token, vault the real one) ·
   obfuscation · segmentation · permission restrictions · DLP (block egress)

  LIFECYCLE: retention · minimization · disposal/sanitization
  ROLES: owner · controller (why/how) · processor (acts for controller) · custodian/steward`,
        },
      },
      incident: {
        title: "GDPR Redraws Data Protection Worldwide",
        when: "2018 — European Union (global reach)",
        where: "EU, enforced against companies worldwide",
        impact: "The General Data Protection Regulation forced organizations everywhere to inventory and classify personal data, honor data-subject rights, and respect data residency — with fines up to 4% of global revenue making data classification and protection a board-level concern.",
        body: [
          "When GDPR took effect in 2018, it made data protection a legal and financial imperative far beyond Europe, applying to any organization handling EU residents' personal data. It codified concepts now central to security exams: lawful basis for processing, the controller/processor distinction, data minimization and retention limits, breach notification timelines, data-subject rights including the 'right to be forgotten,' and constraints on cross-border transfers (data sovereignty). Penalties reach up to 4% of global annual revenue.",
          "GDPR's lasting effect is that you must know what personal data you hold, where it lives, how sensitive it is, and why you have it — exactly the classification-and-inventory discipline that underpins all data protection. It inspired a wave of similar laws (California's CCPA/CPRA, Brazil's LGPD, and more), making data classification, residency, and lifecycle governance core competencies tested across Security+, the ISACA certs, and privacy-focused roles.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Discover + Inventory", sub: "where does data live?", type: "system" },
          { label: "Classify", sub: "sensitivity + type (PII/PHI/PCI)", type: "attacker" },
          { label: "Protect by State", sub: "at rest / in transit / in use", type: "victim" },
          { label: "Govern Lifecycle", sub: "residency, retention, DLP, roles", type: "result" },
        ],
      },
      timeline: [
        { year: 1996, event: "HIPAA mandates protection of health information (PHI) in the US" },
        { year: 2004, event: "PCI DSS standardizes protection of cardholder data" },
        { year: 2018, event: "EU GDPR takes effect, globalizing data protection and residency", highlight: true },
        { year: 2020, event: "California CCPA/CPRA expands US privacy rights" },
        { year: 2023, event: "Confidential computing matures to protect data in use" },
      ],
      keyTakeaways: [
        "Classify data by sensitivity (public→critical) and type (PII/PHI/PCI, IP, financial) — controls scale with classification",
        "Protect all three states: at rest (encryption), in transit (TLS/IPsec), in use (access control/secure enclave)",
        "Data sovereignty means storage location dictates applicable law — drives residency and geographic restrictions",
        "Use masking, tokenization, encryption, segmentation, and DLP; govern the lifecycle (retention, minimization, disposal) and roles (owner/controller/processor/custodian)",
      ],
      references: [
        { title: "EU GDPR — Official Text", url: "https://gdpr-info.eu" },
        { title: "NIST SP 800-122 — Protecting PII", url: "https://csrc.nist.gov/pubs/sp/800/122/final" },
        { title: "PCI Security Standards Council", url: "https://www.pcisecuritystandards.org" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-07-q1",
          type: "Data States",
          challenge: `  A security team is designing protection for customer
  records stored in a database, sent over the network
  to an app, and processed in server memory.`,
          text: "Which protections match the three data states (at rest, in transit, in use)?",
          options: [
            "Encryption for all three identically",
            "At rest: encryption + access control; in transit: TLS/IPsec; in use: access control, secure enclave / confidential computing",
            "Only encrypt data in transit",
            "Data in use cannot be protected at all",
          ],
          correctIndex: 1,
          explanation: "Data must be protected in all three states with appropriate methods: at rest (on disk) with encryption and access controls; in transit (over the network) with TLS or IPsec; and in use (being processed in memory) — the hardest — with access controls, secure enclaves, and confidential computing. Recognizing the three states and matching protections to each is a core data-protection objective.",
        },
        {
          id: "secf-07-q2",
          type: "Tokenization vs Masking",
          challenge: `  A payment system wants to remove real card numbers
  from most of its databases, replacing each with a
  surrogate value while keeping the real number in a
  secure vault for when it's truly needed.`,
          text: "What technique replaces sensitive data with a non-sensitive surrogate stored in a vault?",
          options: [
            "Masking — showing only the last four digits",
            "Tokenization — substituting a token for the real value, which is kept in a secure vault",
            "Hashing — a one-way fingerprint",
            "Encryption with the public key",
          ],
          correctIndex: 1,
          explanation: "Tokenization replaces sensitive data (like a card number) with a non-sensitive token, while the real value is held in a separate secure vault and only retrieved when necessary. This removes the sensitive data from most systems, shrinking compliance scope (e.g., PCI). Masking only hides part of a value for display (**** 1234) but the real data is still present; hashing is one-way; encryption keeps the value recoverable with a key. Tokenization is favored for regulated data.",
        },
        {
          id: "secf-07-q3",
          type: "Data Sovereignty",
          challenge: `  A multinational company stores EU customers' data in
  a US data center. Regulators raise concerns about
  which laws apply and whether the data may leave the EU.`,
          text: "What concept governs which laws apply based on where data is stored?",
          options: [
            "Data classification",
            "Data sovereignty — data is subject to the laws of the country where it is stored, driving residency and transfer rules",
            "Data masking",
            "The CIA triad",
          ],
          correctIndex: 1,
          explanation: "Data sovereignty means data is subject to the laws and regulations of the country in which it is physically stored. This drives data residency requirements (keeping certain data within specific borders) and tight rules on cross-border transfers — central to GDPR. Multinational architectures must account for where data lives, not just how it's secured. Classification, masking, and the CIA triad are related but don't address jurisdiction.",
        },
        {
          id: "secf-07-q4",
          type: "Roles",
          challenge: `  Under privacy law, one party decides why and how
  personal data is processed, while another party
  processes that data on the first party's behalf.`,
          text: "What are these two roles called?",
          options: [
            "Owner and custodian",
            "Controller (decides why/how) and processor (acts on the controller's behalf)",
            "Attacker and victim",
            "Author and reader",
          ],
          correctIndex: 1,
          explanation: "Under GDPR and similar laws, the controller determines the purposes and means of processing personal data (the 'why' and 'how'), while the processor processes data on the controller's behalf (e.g., a cloud vendor). The distinction carries real legal liability. Related governance roles include the data owner (accountable for the data) and the custodian/steward (day-to-day protection). Knowing these roles is tested across Security+ and the ISACA certs.",
        },
      ],
    },
  },

  // ─── 08: Security Awareness & Operational Security ────────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "The Human Firewall", location: "Every Employee's Inbox", era: "Present Day", emoji: "🧠" },
    id: "sec-foundations-08",
    order: 8,
    title: "Security Awareness & Operational Security",
    subtitle: "Phishing campaigns, insider threat, training, and the human firewall",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "secf-badge-08", name: "Human Firewall", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "The most exploited vulnerability isn't software — it's people. Security awareness turns employees into the last line of defense.",
      year: 2020,
      overview: [
        "The vast majority of breaches involve a human element — a clicked phishing link, a reused password, a social-engineering phone call — so security awareness programs aim to turn the workforce from the weakest link into a 'human firewall.' A mature program includes:\n- Ongoing TRAINING — at onboarding, recurring through the year, and role-based for higher-risk roles like finance and IT.\n- Clear POLICIES and handbooks that set expectations.\n- SIMULATED PHISHING CAMPAIGNS that safely test and teach employees to recognize and report suspicious messages.\nThe goal isn't to shame people who click, but to build reflexes: pause on urgency, verify unexpected requests, and report.",
        "Awareness also covers recognizing ANOMALOUS BEHAVIOR — in systems and in people:\n- Risky behavior — ignoring policy for convenience.\n- Unexpected behavior — logins at odd hours or locations.\n- Unintentional behavior — accidentally emailing data to the wrong person.\nINSIDER THREAT awareness teaches everyone to notice and report concerning signs, recognizing that threats can be malicious (a disgruntled employee), negligent (careless), or compromised (an account taken over). Reporting channels and a blame-light culture are essential — people must feel safe raising a hand quickly when something seems off, because early reporting shrinks the impact of an incident.",
        "OPERATIONAL SECURITY (OpSec) is the day-to-day discipline of not leaking information attackers can use:\n- Handling removable media safely — no unknown USB drives.\n- Resisting social engineering — verifying identity before acting on requests.\n- Securing hybrid and remote work — home networks, shoulder-surfing, clean-desk and clean-screen habits.\n- Strong password management and a minimized digital footprint that denies attackers targeting material.\nAwareness is reinforced by monitoring and metrics — phishing-simulation click rates, reporting rates, and training completion — and it must be developed, executed, and continuously refreshed, because attackers constantly evolve their lures. A workforce that pauses, verifies, and reports is the control no technology can replace.",
      ],
      technical: {
        title: "Building the Human Firewall",
        body: [
          "Effective programs combine education with safe practice and measurement: recurring and role-based training, simulated phishing with immediate teachable moments, easy one-click reporting (a 'report phish' button), and metrics (click rate, report rate, time-to-report) to track improvement. Crucially, the culture must reward reporting over punishing mistakes — a high report rate is the real win, even if some still click.",
          "OpSec habits to instill: never plug in unknown USB media; verify any unexpected request for money, credentials, or data through a known channel (defeats BEC and vishing); lock screens and keep a clean desk; secure remote/hybrid setups; and recognize the signs of social engineering (urgency, authority, scarcity, fear). Tie awareness to clear policies and reporting paths so the right action is obvious. People are the most targeted attack surface and, when trained, the most adaptable defense.",
        ],
        codeExample: {
          label: "Security Awareness Program Elements",
          code: `  TRAINING: onboarding + RECURRING + role-based (finance/IT = higher risk)
  PHISHING SIMULATIONS: safe tests → teachable moments → measure click/report rate
  RECOGNIZE ANOMALOUS BEHAVIOR:
   risky (ignoring policy) · unexpected (odd-hour/location login) ·
   unintentional (data to wrong recipient)
  INSIDER THREAT: malicious · negligent · compromised → notice + REPORT

  OPSEC HABITS:
   ✗ unknown USB media   ✓ verify unexpected requests via known channel
   ✓ lock screen / clean desk   ✓ secure remote-hybrid work
   ✓ strong password mgmt   ✓ spot social-engineering cues
     (urgency · authority · scarcity · fear)

  CULTURE: reward REPORTING over punishing clicks · easy report button
  MEASURE: click rate · report rate · time-to-report · completion`,
        },
      },
      incident: {
        title: "The 2020 Twitter Vishing Attack",
        when: "July 2020",
        where: "Twitter (now X)",
        impact: "Attackers used phone-based social engineering (vishing) to trick Twitter employees into handing over access to internal admin tools, then hijacked high-profile accounts (Obama, Musk, Apple) for a Bitcoin scam — a vivid demonstration that people, not just systems, are the target.",
        body: [
          "In July 2020, a small group of attackers called Twitter employees by phone, impersonating IT support, and convinced several to enter their credentials into a lookalike phishing site — defeating Twitter's defenses through human manipulation rather than a software exploit. With employee access to internal account-management tools, they took over dozens of verified accounts of politicians, celebrities, and companies and posted a cryptocurrency scam, netting bitcoin before the accounts were locked.",
          "The attack is a security-awareness case study: it succeeded through vishing and impersonation, exploiting helpfulness and trust. Defenses are human and procedural — train employees to verify caller identity, never enter credentials from a link, recognize urgency/authority pressure, and report suspicious contact; combined with technical controls like phishing-resistant MFA and least privilege on admin tools. It shows why awareness training and a strong reporting culture are indispensable controls, not optional extras.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Humans Targeted", sub: "phishing, vishing, insider", type: "attacker" },
          { label: "Train + Simulate", sub: "recurring, role-based, phish tests", type: "system" },
          { label: "Recognize + Verify", sub: "pause on urgency, check channel", type: "victim" },
          { label: "Report (Human Firewall)", sub: "easy reporting, safe culture", type: "result" },
        ],
      },
      timeline: [
        { year: 2004, event: "Phishing emerges as a mass threat; awareness training begins formalizing" },
        { year: 2013, event: "Target breach traced to phishing of a third-party vendor — awareness goes board-level" },
        { year: 2016, event: "Spear-phishing of the DNC/Podesta shows targeted human attacks at scale" },
        { year: 2020, event: "Twitter vishing attack hijacks high-profile accounts via employee manipulation", highlight: true },
        { year: 2023, event: "AI-generated phishing and deepfake vishing raise the bar for awareness" },
      ],
      keyTakeaways: [
        "Most breaches involve people — awareness programs build a 'human firewall' through recurring, role-based training",
        "Simulated phishing campaigns teach recognition and reporting; reward reporting over punishing clicks",
        "Teach recognition of anomalous behavior (risky/unexpected/unintentional) and insider threat (malicious/negligent/compromised)",
        "OpSec habits: no unknown USB, verify unexpected requests via a known channel, lock screens, secure remote work — Twitter 2020 fell to vishing",
      ],
      references: [
        { title: "CISA: Security Awareness & Phishing", url: "https://www.cisa.gov/secure-our-world" },
        { title: "SANS Security Awareness", url: "https://www.sans.org/security-awareness-training/" },
        { title: "NIST SP 800-50 — Security Awareness & Training", url: "https://csrc.nist.gov/pubs/sp/800/50/final" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-08-q1",
          type: "Phishing Simulation",
          challenge: `  A company sends fake (but safe) phishing emails to
  its own employees, then shows a brief lesson to
  anyone who clicks, and tracks how many report it.`,
          text: "What is the primary goal of a simulated phishing campaign?",
          options: [
            "To punish and fire employees who click",
            "To safely teach employees to recognize and report phishing, and to measure improvement over time",
            "To actually steal employee passwords",
            "To replace technical email security entirely",
          ],
          correctIndex: 1,
          explanation: "Simulated phishing campaigns are a teaching and measurement tool: they safely test employees, deliver immediate teachable moments to those who click, and track metrics like click rate and (most importantly) report rate over time. The goal is to build reflexes and a reporting culture, not to punish — shaming people drives mistakes underground. A rising report rate is the real measure of a maturing human firewall.",
        },
        {
          id: "secf-08-q2",
          type: "Social Engineering",
          challenge: `  An employee gets an urgent call from someone claiming
  to be IT support, pressuring them to enter their
  password into a website to 'fix an issue immediately.'`,
          text: "What's the correct OpSec response, and what attack is this?",
          options: [
            "Comply quickly because IT asked — this is normal",
            "Refuse, and verify the request through a known channel; this is vishing (voice phishing) / impersonation exploiting urgency and authority",
            "Enter the password but change it later",
            "Forward the call to a coworker",
          ],
          correctIndex: 1,
          explanation: "This is vishing (voice phishing) using impersonation and urgency/authority pressure — exactly how the 2020 Twitter attack succeeded. The correct response is to never enter credentials in response to an unsolicited request, and to verify the caller through a known, independent channel (e.g., call IT back on the official number) and report it. Recognizing social-engineering cues (urgency, authority, scarcity, fear) and verifying before acting are core OpSec habits.",
        },
        {
          id: "secf-08-q3",
          type: "Insider Threat",
          challenge: `  A security team explains that insider threats aren't
  only malicious employees stealing data.`,
          text: "What three categories of insider threat should awareness training cover?",
          options: [
            "Only malicious insiders",
            "Malicious (intentional), negligent (careless), and compromised (account taken over)",
            "Only external hackers",
            "Only IT administrators",
          ],
          correctIndex: 1,
          explanation: "Insider threats fall into three categories: malicious (an intentional bad actor, e.g., a disgruntled employee), negligent (careless mistakes like mishandling data or ignoring policy), and compromised (a legitimate user's account taken over by an attacker). Awareness training teaches everyone to recognize and report concerning behavior across all three, since negligent and compromised insiders cause many incidents without any malicious intent.",
        },
        {
          id: "secf-08-q4",
          type: "Reporting Culture",
          challenge: `  After clicking a suspicious link, an employee is
  afraid they'll be disciplined, so they say nothing.
  The intrusion goes undetected for weeks.`,
          text: "What does this reveal about building an effective awareness program?",
          options: [
            "Employees should always be punished for clicking",
            "A blame-light culture with easy reporting is essential — early reporting shrinks impact, while fear of punishment hides incidents and lets them grow",
            "Reporting doesn't matter once you've clicked",
            "Only technical controls matter",
          ],
          correctIndex: 1,
          explanation: "Fear of punishment is the enemy of detection: an employee who hides a mistake turns a quick, containable incident into a weeks-long undetected breach. Effective programs build a blame-light culture with easy, encouraged reporting (e.g., a one-click 'report phish' button) so people raise a hand immediately. Early reporting dramatically shrinks an incident's impact — making reporting rate, not just click rate, the key program metric.",
        },
      ],
    },
  },
  // ─── 09: Network Media, Cabling & Topologies ─────────────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "A Network Wiring Closet", location: "Every Building's Backbone", era: "Present Day", emoji: "🔌" },
    id: "sec-foundations-09",
    order: 9,
    title: "Network Media, Cabling & Topologies",
    subtitle: "Copper vs fiber, transceivers, and how networks are wired together",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "secf-badge-09", name: "Cable Cartographer", emoji: "🔌" },
    challengeType: "quiz",
    info: {
      tagline: "Before packets fly, signals travel over physical media — and Network+ wants you to know the wires, the light, and the shapes.",
      year: 2024,
      overview: [
        "At the physical layer, data travels over MEDIA, and the two families trade off differently:\n- COPPER twisted-pair (RJ45 Ethernet) rises in bandwidth by category — Cat5e (1 Gbps), Cat6 (1–10 Gbps short runs), Cat6a (10 Gbps to 100 m), Cat7/Cat8 (data-center). It's cheap and easy but limited to ~100 m and prone to electromagnetic interference (EMI), so shielded (STP) variants exist for noisy environments.\n- FIBER-OPTIC carries data as light — single-mode (SMF, tiny core) for long distances (kilometers) at high speed, multimode (MMF, larger core) cheaper for short data-center runs. Fiber is immune to EMI, doesn't emit a tappable signal, and supports the highest bandwidths, but costs more and is more fragile.\nChoosing between them is an engineering trade-off of distance, bandwidth, cost, and interference resistance.",
        "TRANSCEIVERS connect a device to the media:\n- Hot-swappable modules — SFP (1 Gbps), SFP+ (10 Gbps), QSFP/QSFP28 (40/100 Gbps) — plug into switch and router ports and accept either copper or fiber, so one device can speak many media types.\n- Connectors include RJ45 for copper and LC/SC for fiber.\n- Power over Ethernet (PoE) carries electrical power alongside data on copper, running APs, cameras, and phones without a separate power cable.\nThis modularity is what lets a single switch serve a building's mix of copper desks and a fiber backbone.",
        "TOPOLOGY describes how nodes are connected:\n- STAR — every device to a central switch; the dominant modern LAN topology, where one cable fault affects only one device.\n- MESH — many nodes linked directly (full or partial) for redundancy; common in WANs and wireless backhauls because multiple paths survive a link failure.\n- THREE-TIER (core / distribution / access) — structures large campus networks for scalability, while a collapsed core merges layers for smaller sites.\n- SPINE-LEAF — every leaf switch connects to every spine switch, giving predictable, low-latency 'east-west' server-to-server traffic; favored in modern data centers.\n- POINT-TO-POINT — links a single pair of nodes.\nKnowing these shapes — and that physical and logical topology can differ — is core Network+ literacy.",
      ],
      technical: {
        title: "Choosing Media and Topology",
        body: [
          "Media decision factors: distance (fiber for long/backbone, copper for short access), bandwidth (fiber and higher Cat for more), interference (fiber or STP in noisy/industrial settings), security (fiber is harder to tap and doesn't radiate), and cost (copper is cheaper for short runs). A typical building uses fiber for the backbone between closets and copper to the desk, with PoE powering endpoints.",
          "Topology decision factors: star for LAN access (simple, fault-isolated), spine-leaf for data centers (uniform low-latency east-west), three-tier for large campuses (scalable hierarchy), and mesh for redundancy where uptime is critical. Remember the physical-vs-logical distinction: a network physically wired as a star can behave logically as a different topology depending on switching/VLAN configuration.",
        ],
        codeExample: {
          label: "Media + Topology Quick Reference",
          code: `  COPPER (twisted pair, RJ45, ~100 m, EMI-prone):
   Cat5e 1G · Cat6 1–10G(short) · Cat6a 10G@100m · Cat7/8 data-center
   + PoE: power + data on one copper cable (APs, cameras, phones)
  FIBER (light, EMI-immune, hard to tap):
   SMF single-mode = long distance/high speed · MMF multimode = short/cheaper
   connectors: RJ45 (copper) · LC/SC (fiber)
  TRANSCEIVERS (hot-swap modules):
   SFP 1G · SFP+ 10G · QSFP/QSFP28 40/100G (copper or fiber)

  TOPOLOGIES:
   STAR        all → central switch (modern LAN; fault-isolated)
   MESH        many direct links (redundancy; WAN/wireless)
   THREE-TIER  core / distribution / access (large campus)
   SPINE-LEAF  every leaf ↔ every spine (data center east-west)
   POINT-TO-POINT  one pair · collapsed core = merged layers
  physical topology ≠ logical topology (switching/VLANs)`,
        },
      },
      incident: {
        title: "When the Backbone Is a Single Cable",
        when: "Recurring — submarine and backbone fiber cuts",
        where: "Worldwide undersea and terrestrial fiber",
        impact: "Major outages — from severed undersea cables disrupting whole regions' connectivity to a backhoe cutting a city's backbone — repeatedly show that the physical layer is a real attack and failure surface, and that redundancy in media and topology is not optional.",
        body: [
          "The internet runs on physical cables, and they break. Undersea fiber cuts (from ship anchors, earthquakes, or sabotage) have knocked entire countries and regions partly offline; a single backhoe striking a buried backbone has taken down a city's connectivity. Because so much traffic funnels through a few high-capacity fiber paths, a physical cut can have outsized impact — a stark reminder that bandwidth and uptime ultimately depend on copper and glass in the ground and on the seafloor.",
          "The defense is the same principle that drives topology and media choices: redundancy and diverse paths. Mesh and multi-path designs, diverse physical routes (so a single cut doesn't sever everything), and a mix of media protect against physical failure. For Network+, the takeaway is that the physical layer — the cables, transceivers, and topology — is foundational: the most sophisticated routing can't move data over a cable that's been cut, and resilient designs assume the physical layer will sometimes fail.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Choose the Media", sub: "copper vs fiber, distance/EMI/cost", type: "system" },
          { label: "Connect with Transceivers", sub: "SFP/SFP+/QSFP, RJ45/LC", type: "attacker" },
          { label: "Lay Out the Topology", sub: "star, spine-leaf, three-tier, mesh", type: "victim" },
          { label: "Build for Redundancy", sub: "diverse paths survive a cut", type: "result" },
        ],
      },
      timeline: [
        { year: 1983, event: "Twisted-pair Ethernet over copper begins displacing coax" },
        { year: 2002, event: "10 Gigabit Ethernet drives fiber into data-center backbones" },
        { year: 2010, event: "Spine-leaf architectures rise to handle east-west data-center traffic" },
        { year: 2020, event: "400G optics and QSFP-DD push fiber bandwidth higher", highlight: true },
        { year: 2024, event: "Undersea cable cuts repeatedly disrupt regional connectivity, spotlighting physical resilience" },
      ],
      keyTakeaways: [
        "Copper (twisted pair, RJ45, ~100 m, EMI-prone, categories Cat5e→Cat8) is cheap for short runs; fiber (SMF long / MMF short) is EMI-immune, hard to tap, and high-bandwidth",
        "Transceivers (SFP 1G / SFP+ 10G / QSFP 40-100G) connect devices to copper or fiber; PoE carries power and data on one cable",
        "Star is the modern LAN topology; spine-leaf suits data centers; three-tier (core/distribution/access) scales campuses; mesh adds redundancy",
        "The physical layer is a real failure/attack surface — design diverse paths and redundancy because cables get cut",
      ],
      references: [
        { title: "CompTIA Network+ N10-009 Objectives", url: "https://www.comptia.org/certifications/network" },
        { title: "Cabling & Media — Cisco Networking Basics", url: "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking.html" },
        { title: "Spine-Leaf Architecture Explained", url: "https://www.cloudflare.com/learning/network-layer/what-is-a-network/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-09-q1",
          type: "Media Choice",
          challenge: `  A campus needs a high-speed backbone link between
  two buildings 800 meters apart, through an area with
  heavy electrical interference.`,
          text: "Which media best fits a long-distance, EMI-heavy backbone run?",
          options: [
            "Cat6 twisted-pair copper",
            "Single-mode fiber — long distance, highest bandwidth, and immune to electromagnetic interference",
            "Coaxial cable",
            "Wi-Fi only",
          ],
          correctIndex: 1,
          explanation: "Twisted-pair copper is limited to about 100 m and is susceptible to EMI, so it can't span 800 m through electrical noise. Single-mode fiber carries light over kilometers at high bandwidth and is immune to electromagnetic interference (and harder to tap), making it the right choice for a long, noisy backbone run. Multimode fiber would work for shorter data-center runs; copper suits short access links to the desk.",
        },
        {
          id: "secf-09-q2",
          type: "Transceivers",
          challenge: `  A network engineer needs to connect a switch port
  to either a copper or fiber uplink at 10 Gbps using
  a hot-swappable module.`,
          text: "What kind of component plugs into the port to provide this connection?",
          options: [
            "An RJ45 crimp connector",
            "A transceiver such as an SFP+ module (10 Gbps), which accepts copper or fiber",
            "A punchdown block",
            "A PoE injector",
          ],
          correctIndex: 1,
          explanation: "Transceivers are hot-swappable modules that plug into switch/router ports to connect to the media. SFP handles 1 Gbps, SFP+ 10 Gbps, and QSFP/QSFP28 40/100 Gbps, and they come in copper or fiber variants — so one device can speak many media types by swapping modules. RJ45 is a copper connector, a punchdown block terminates cabling, and a PoE injector adds power, not a 10G media interface.",
        },
        {
          id: "secf-09-q3",
          type: "Topology",
          challenge: `  A modern data center needs predictable, low-latency
  communication between any two servers, where every
  access switch connects to every backbone switch.`,
          text: "Which topology provides this uniform, low-latency east-west connectivity?",
          options: [
            "Bus topology",
            "Spine-leaf — every leaf switch connects to every spine switch, giving consistent server-to-server latency",
            "Point-to-point",
            "A single star with one switch",
          ],
          correctIndex: 1,
          explanation: "Spine-leaf is the data-center topology where every leaf (access) switch connects to every spine (backbone) switch, so any server-to-server ('east-west') path crosses the same number of hops — predictable, low latency, and easy to scale by adding spines. Star suits general LAN access; three-tier (core/distribution/access) scales campuses; mesh adds redundancy. Modern virtualized data centers favor spine-leaf for heavy server-to-server traffic.",
        },
        {
          id: "secf-09-q4",
          type: "Physical Resilience",
          challenge: `  A region loses much of its internet connectivity
  when a single undersea fiber cable is severed by a
  ship's anchor.`,
          text: "What design principle prevents a single cable cut from causing a major outage?",
          options: [
            "Using faster transceivers",
            "Redundancy with diverse physical paths (mesh/multi-path) so no single cut severs all connectivity",
            "Switching everything to copper",
            "Nothing — physical cuts are unavoidable and unmitigable",
          ],
          correctIndex: 1,
          explanation: "The physical layer is a real failure surface — cables get cut by anchors, backhoes, and disasters. The defense is redundancy with diverse physical paths: mesh and multi-path topologies and physically separate cable routes so a single cut doesn't sever everything. The same logic drives topology and media choices for uptime. Faster transceivers or different cable types don't help if there's only one path to cut.",
        },
      ],
    },
  },

  // ─── 10: Network Troubleshooting Methodology & Tools ──────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "A Help Desk at 3 A.M.", location: "When the Network Is Down", era: "Present Day", emoji: "🛠️" },
    id: "sec-foundations-10",
    order: 10,
    title: "Network Troubleshooting Methodology & Tools",
    subtitle: "The 7-step process and the tools that find the fault",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "secf-badge-10", name: "Fault Finder", emoji: "🛠️" },
    challengeType: "quiz",
    info: {
      tagline: "When the network breaks, guessing wastes hours. A methodology turns chaos into a systematic hunt for the root cause.",
      year: 2024,
      overview: [
        "Network+ teaches a structured TROUBLESHOOTING METHODOLOGY so engineers fix problems systematically instead of randomly swapping parts. The seven steps run in order:\n- IDENTIFY THE PROBLEM — gather information, question users, note symptoms, determine what recently changed, and duplicate the problem if possible.\n- ESTABLISH A THEORY of probable cause — question the obvious and consider multiple possibilities (top-to-bottom or bottom-to-top of the OSI model).\n- TEST THE THEORY to confirm or deny it — if confirmed, move on; if not, form a new theory or escalate.\n- ESTABLISH A PLAN OF ACTION to resolve the problem, identifying potential effects.\n- IMPLEMENT THE SOLUTION, or escalate as necessary.\n- VERIFY FULL SYSTEM FUNCTIONALITY and, if applicable, add preventive measures.\n- DOCUMENT findings, actions, and outcomes.\nFollowing the steps in order — especially resisting the urge to skip from symptom to a guessed fix — is what the exam tests.",
        "The methodology is paired with TOOLS, split into two kits:\n- SOFTWARE / command-line — ping (reachability and latency), traceroute/tracert (path and where it fails), nslookup/dig (DNS resolution), ipconfig/ifconfig/ip (local IP config), netstat (connections and listening ports), arp (IP-to-MAC), tcpdump and Wireshark (packet capture and protocol analysis), nmap (host/port discovery), and iperf/speed tests (throughput).\n- HARDWARE — a cable tester and wire-map tester (pinout and continuity), a toner/probe (trace a cable in a bundle), a TDR/OTDR (distance to a cable fault in copper/fiber), a light meter (optical power), and a network tap (inline capture).\nPicking the right tool for the symptom is half the battle.",
        "Common issues map to predictable causes:\n- Name-resolution failures point to DNS.\n- An address conflict or no address points to DHCP or a static-IP mistake (APIPA 169.254.x.x means no DHCP).\n- A half/full duplex MISMATCH causes slowness and errors.\n- A switching loop (no spanning tree) causes broadcast storms.\n- Latency, jitter, and packet loss degrade real-time apps.\nThe disciplined flow — identify, theorize, test, plan, implement, verify, document — combined with the right diagnostic tool, is how professionals (and the exam) resolve network problems. Documentation closes the loop: the fix for today's outage becomes tomorrow's faster diagnosis.",
      ],
      technical: {
        title: "Methodology Meets the Right Tool",
        body: [
          "Work the steps in order and let the OSI model guide your theories: is it physical (cable/link light), data-link (switch/VLAN/duplex), network (IP/routing/gateway), or higher (DNS/application)? Start where the evidence points. Confirm the theory with a targeted test before changing anything, and after the fix, verify the whole system works and document what you found and did.",
          "Match tool to symptom: 'can't reach a host' → ping then traceroute to see where it stops; 'site won't load but IP works' → nslookup/dig for DNS; 'no/odd IP address' → ipconfig/ifconfig (169.254.x.x = DHCP failure); 'intermittent slowness' → check duplex, then packet-capture with Wireshark; 'physical link issues' → cable tester/wire map, toner to trace, TDR to locate a break, light meter for fiber power. Documentation of findings and changes is the final, mandatory step.",
        ],
        codeExample: {
          label: "Troubleshooting Methodology + Toolbox",
          code: `  THE 7 STEPS (in order):
   1 IDENTIFY the problem (info, symptoms, recent changes, reproduce)
   2 THEORY of probable cause (question the obvious; OSI top↔bottom)
   3 TEST the theory (confirm/deny → new theory or ESCALATE)
   4 PLAN of action (and potential effects)
   5 IMPLEMENT (or escalate)
   6 VERIFY full functionality (+ preventive measures)
   7 DOCUMENT findings, actions, outcomes

  SOFTWARE TOOLS:
   ping reachability · traceroute path · nslookup/dig DNS ·
   ipconfig/ifconfig IP · netstat connections · arp IP↔MAC ·
   tcpdump/Wireshark capture · nmap discovery · iperf throughput
  HARDWARE TOOLS:
   cable tester / wire map · toner+probe (trace) · TDR/OTDR (find break) ·
   light meter (fiber) · network tap (inline capture)

  SYMPTOM → CAUSE: DNS fail→name svc · 169.254.x.x→DHCP fail ·
   slow+errors→duplex mismatch · broadcast storm→switching loop`,
        },
      },
      incident: {
        title: "Why Guessing Fails: The Cost of Skipping Steps",
        when: "Every unstructured outage response",
        where: "Network operations everywhere",
        impact: "Countless prolonged outages trace to teams that jumped from symptom to a guessed fix, swapped working parts, and never identified the real cause — the reason the structured methodology exists and is tested.",
        body: [
          "A classic failure mode in operations: an outage hits, pressure mounts, and the team starts changing things — rebooting devices, replacing cables, editing configs — without first identifying the problem or forming a testable theory. Sometimes it works by luck; often it makes things worse, masks the real cause, and turns a 20-minute fix into a multi-hour ordeal, occasionally introducing new faults. Worse, without documentation, the same problem recurs and is re-diagnosed from scratch.",
          "The structured methodology exists precisely to counter this. Identifying the problem and forming a theory before acting, testing the theory before implementing, verifying after, and documenting at the end converts a frantic guessing game into a repeatable, fast diagnosis. The discipline — and choosing the right tool (ping vs DNS lookup vs packet capture vs cable tester) for the symptom — is what separates professionals from part-swappers, which is exactly why Network+ devotes a whole domain to it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Identify + Theorize", sub: "symptoms, recent change, OSI", type: "system" },
          { label: "Test the Theory", sub: "right tool: ping/dig/Wireshark", type: "attacker" },
          { label: "Plan + Implement", sub: "fix or escalate", type: "victim" },
          { label: "Verify + Document", sub: "confirm, prevent, record", type: "result" },
        ],
      },
      timeline: [
        { year: 1969, event: "ping's ancestor concepts emerge with ARPANET diagnostics" },
        { year: 1987, event: "traceroute written to map packet paths and find failures" },
        { year: 1998, event: "Wireshark (Ethereal) brings deep packet analysis to everyone" },
        { year: 2009, event: "Structured troubleshooting methodology formalized in CompTIA curricula", highlight: true },
        { year: 2024, event: "AIOps adds automated anomaly detection, but the methodology still governs the fix" },
      ],
      keyTakeaways: [
        "Follow the 7 steps in order: identify → theory → test → plan → implement → verify → document (don't jump from symptom to guessed fix)",
        "Let the OSI model guide theories: physical (cable), data-link (switch/duplex), network (IP/routing), or higher (DNS/app)",
        "Match tool to symptom: ping/traceroute for reachability, nslookup/dig for DNS, ipconfig for IP, Wireshark for deep analysis, cable tester/TDR for physical",
        "169.254.x.x means DHCP failed; duplex mismatch causes slowness/errors; switching loops cause broadcast storms — and always document the fix",
      ],
      references: [
        { title: "CompTIA Network+ Troubleshooting Methodology", url: "https://www.comptia.org/certifications/network" },
        { title: "Wireshark User Guide", url: "https://www.wireshark.org/docs/" },
        { title: "Network Troubleshooting Tools — Cisco", url: "https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13730-ext-ping-trace.html" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-10-q1",
          type: "Methodology Order",
          challenge: `  A network goes down. Under pressure, an engineer
  immediately starts replacing cables and rebooting
  switches before understanding the symptoms.`,
          text: "What should be the FIRST step of the troubleshooting methodology?",
          options: [
            "Implement a solution immediately",
            "Identify the problem — gather information, question users, note symptoms and recent changes",
            "Document the outcome",
            "Replace hardware until it works",
          ],
          correctIndex: 1,
          explanation: "The first step is to identify the problem: gather information, question users, determine the symptoms, check what recently changed, and reproduce the issue if possible. Jumping straight to implementing fixes (swapping cables, rebooting) without identifying the problem or forming a testable theory wastes time, can make things worse, and often masks the real cause. The ordered steps — identify, theorize, test, plan, implement, verify, document — exist to prevent exactly this.",
        },
        {
          id: "secf-10-q2",
          type: "Tool Selection",
          challenge: `  A user reports they can reach a website by its IP
  address but not by its domain name. Everything else
  on the network works.`,
          text: "Which tool best diagnoses this name-resolution problem?",
          options: [
            "A cable tester",
            "nslookup or dig — to test DNS name resolution",
            "ping by IP only",
            "A light meter",
          ],
          correctIndex: 1,
          explanation: "Reaching a site by IP but not by name points squarely at DNS (name resolution). nslookup or dig query DNS to see whether the name resolves and which server answers, confirming or denying a DNS problem. A cable tester checks physical wiring; ping by IP already works here; a light meter measures fiber optical power. Matching the tool to the symptom — DNS symptom → DNS tool — is core troubleshooting skill.",
        },
        {
          id: "secf-10-q3",
          type: "Symptom Diagnosis",
          challenge: `  A workstation can't reach anything on the network,
  and its IP address is shown as 169.254.43.12.`,
          text: "What does a 169.254.x.x (APIPA) address indicate?",
          options: [
            "A successful static IP configuration",
            "The device failed to obtain an address from DHCP and self-assigned an APIPA address",
            "A DNS server problem",
            "A duplex mismatch",
          ],
          correctIndex: 1,
          explanation: "A 169.254.x.x address is an APIPA (Automatic Private IP Addressing) self-assignment that a Windows host gives itself when it cannot reach a DHCP server. It signals a DHCP failure — the DHCP server is down/unreachable, the scope is exhausted, or there's a connectivity problem to it. The fix is to restore DHCP reachability or assign a valid address. Recognizing APIPA as 'DHCP failed' is a classic Network+ diagnostic.",
        },
        {
          id: "secf-10-q4",
          type: "Verify & Document",
          challenge: `  An engineer fixes a routing issue and the affected
  user can now browse. The engineer closes the ticket
  and moves on without checking anything else or
  writing down what happened.`,
          text: "Which final methodology steps did the engineer skip?",
          options: [
            "None — the fix worked, so the job is done",
            "Verify FULL system functionality (and add preventive measures) and DOCUMENT findings, actions, and outcomes",
            "Establish a theory",
            "Identify the problem",
          ],
          correctIndex: 1,
          explanation: "The last two steps are mandatory: verify full system functionality (confirm the whole system works, not just the one symptom, and implement preventive measures where possible) and document the findings, actions, and outcomes. Skipping verification risks an incomplete fix or new side effects; skipping documentation means the next occurrence is re-diagnosed from scratch and lessons are lost. Closing the ticket the moment one symptom clears is a common, costly shortcut.",
        },
      ],
    },
  },

  // ─── 11: Security Operations Reporting, Metrics & Communication ───────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "The Boardroom & the SOC", location: "Where Risk Meets Leadership", era: "Present Day", emoji: "📊" },
    id: "sec-foundations-11",
    order: 11,
    title: "Security Operations Reporting & Metrics",
    subtitle: "Communicating vulnerabilities and incidents to the people who must act",
    category: "cybersecurity",
    xp: 220,
    badge: { id: "secf-badge-11", name: "Signal Reporter", emoji: "📊" },
    challengeType: "quiz",
    info: {
      tagline: "Finding the problem is only half the job — security work that isn't clearly reported to the right people doesn't get fixed.",
      year: 2018,
      overview: [
        "A huge part of real security operations — and a full domain of the CySA+ exam — is REPORTING AND COMMUNICATION: turning technical findings into action by the right stakeholders. Effective vulnerability reporting:\n- Identifies STAKEHOLDERS (system owners, IT, management, compliance) and tailors the message — executives need risk and business impact, engineers need specific remediation steps.\n- PRIORITIZES by severity/CVSS, asset criticality, and exploitability rather than raw counts.\n- Includes METRICS and trends — open vulnerabilities over time, mean time to remediate, SLA compliance.\n- Defines clear ACTION PLANS with owners and deadlines, and supports compliance obligations.\nA report that buries the critical, exploitable, internet-facing vulnerability in a list of 5,000 low findings has failed.",
        "Incident response reporting is about communicating during and after an incident:\n- DURING — a communication plan defines who is told and when: internal stakeholders (executives, legal, HR, PR) and external ones (affected customers, regulators, law enforcement, partners), with regulatory breach-notification deadlines (e.g., GDPR's 72 hours) creating hard timelines.\n- AFTER — the team produces a root cause analysis, a lessons-learned report, and an executive summary.\n- THROUGHOUT — track KPIs like mean time to detect (MTTD), mean time to respond (MTTR), and dwell time.\nThe goal is to drive improvement and meet legal obligations, not to assign blame.",
        "Communication quality determines outcomes, and good reports share three traits:\n- TAILORED to the audience — technical depth for engineers, business risk for leadership.\n- TIMELY — a perfect report delivered too late is useless.\n- HONEST and clear — the catastrophic counter-example is the cover-up, which turns a security incident into a legal, financial, and reputational disaster, as Uber learned in 2016.\nStrong reporting and communication — prioritized vulnerability reports with action plans, a tested incident communication plan, clear stakeholder identification, and meaningful metrics — convert security operations into actual risk reduction and keep an organization on the right side of the law.",
      ],
      technical: {
        title: "Reporting That Drives Action",
        body: [
          "Vulnerability reporting: identify stakeholders and tailor by audience; prioritize by risk (CVSS × asset criticality × exploitability/exposure), not count; include trends and metrics (open findings over time, MTTR, SLA adherence); and give every critical finding an owner, a remediation action, and a deadline. Compliance reporting maps findings to obligations (PCI, HIPAA, etc.).",
          "Incident reporting and communication: have a pre-built communication plan defining internal (exec/legal/PR/HR) and external (customers/regulators/law enforcement) audiences and notification timelines (regulatory deadlines like GDPR's 72 hours). Produce a root cause analysis, lessons-learned, and an executive summary; track KPIs (MTTD, MTTR, dwell time) to measure and improve. Never conceal a breach — cover-ups create far larger legal and reputational damage than the breach itself.",
        ],
        codeExample: {
          label: "Security Reporting Essentials",
          code: `  VULNERABILITY REPORTING:
   ✓ Identify STAKEHOLDERS · tailor by audience (exec=risk, eng=fix)
   ✓ PRIORITIZE by risk: CVSS × asset criticality × exploitability
     (not raw counts — surface the critical, internet-facing, exploitable one)
   ✓ METRICS/trends: open vulns over time · MTTR · SLA compliance
   ✓ ACTION PLAN: owner + remediation + deadline · compliance mapping

  INCIDENT REPORTING & COMMUNICATION:
   WHO + WHEN (plan): internal exec/legal/PR/HR · external customers/
     regulators/law enforcement · notification DEADLINES (GDPR 72h)
   AFTER: root cause analysis · lessons learned · executive summary
   KPIs: MTTD (detect) · MTTR (respond) · DWELL TIME

  TAILOR to audience · be TIMELY · be HONEST
   ✗ NEVER conceal a breach (cover-up = bigger legal/reputational damage)`,
        },
      },
      incident: {
        title: "The Uber Breach Cover-Up",
        when: "2016 (disclosed 2017)",
        where: "Uber",
        impact: "Uber concealed a breach of 57 million users' data, paying the attackers $100,000 to stay quiet and disguising it as a 'bug bounty' — the cover-up led to regulatory penalties and a criminal conviction of the security chief, proving that failing to report is worse than the breach.",
        body: [
          "In 2016, attackers stole the personal data of about 57 million Uber riders and drivers. Rather than disclose the breach to regulators and affected users as required, Uber paid the attackers $100,000 to delete the data and keep quiet, disguising the payment as a bug-bounty reward, and hid the incident for over a year. When it came out, the consequences dwarfed the breach itself: a $148 million settlement with US states, action from regulators worldwide, and — notably — a federal criminal conviction of Uber's chief security officer for obstruction and concealment.",
          "The case is the definitive lesson in security reporting and communication: the obligation to report a breach to the right stakeholders and regulators within required timelines is not optional, and concealment turns a manageable incident into a legal and reputational catastrophe. It underscores why incident response includes a communication plan, why breach-notification laws exist, and why honest, timely reporting — to leadership, regulators, and affected people — is a core competency, not an afterthought.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Findings: Vuln or Incident", sub: "the technical truth", type: "attacker" },
          { label: "Identify Stakeholders", sub: "exec, eng, legal, regulators", type: "system" },
          { label: "Prioritize + Tailor + Time It", sub: "risk-ranked, audience-fit, on deadline", type: "victim" },
          { label: "Action, Metrics, Lessons", sub: "owners, MTTR, RCA — drive fixes", type: "result" },
        ],
      },
      timeline: [
        { year: 2003, event: "California SB 1386 launches modern breach-notification law" },
        { year: 2016, event: "Uber conceals a 57M-record breach and pays hush money", highlight: true },
        { year: 2018, event: "GDPR mandates 72-hour breach notification to regulators" },
        { year: 2022, event: "Uber's former CSO convicted over the 2016 cover-up — a landmark for reporting duty" },
        { year: 2023, event: "SEC requires public companies to disclose material cyber incidents promptly" },
      ],
      keyTakeaways: [
        "Reporting & communication is a full CySA+ domain — security work that isn't clearly reported to the right stakeholders doesn't get fixed",
        "Prioritize vulnerability reports by risk (CVSS × asset criticality × exploitability), include metrics/trends and action plans with owners and deadlines — not raw counts",
        "Incident communication plans define who/when for internal (exec/legal/PR) and external (customers/regulators) audiences, with regulatory deadlines (GDPR 72h); track MTTD/MTTR/dwell time",
        "Tailor to the audience, be timely and honest — and never conceal a breach: the Uber cover-up caused far more damage than the breach itself",
      ],
      references: [
        { title: "CompTIA CySA+ CS0-003 Objectives", url: "https://www.comptia.org/certifications/cybersecurity-analyst" },
        { title: "NIST SP 800-61 — Computer Security Incident Handling", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" },
        { title: "FTC: Uber Settlement", url: "https://www.ftc.gov/news-events" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-11-q1",
          type: "Prioritization",
          challenge: `  A vulnerability scan returns 5,000 findings. The
  analyst must report them to leadership in a way
  that drives the right fixes first.`,
          text: "How should the report prioritize, rather than just listing all 5,000?",
          options: [
            "Alphabetically by hostname",
            "By risk — combining severity/CVSS, asset criticality, and exploitability/exposure — so the critical, internet-facing, exploitable issues surface first",
            "By the order the scanner found them",
            "Only by raw count per system",
          ],
          correctIndex: 1,
          explanation: "Effective vulnerability reporting prioritizes by risk, not raw counts: combine severity (CVSS), asset criticality (how important the system is), and exploitability/exposure (is it internet-facing, is there a known exploit). This surfaces the genuinely dangerous findings — the critical, exploitable, internet-facing vulnerability — instead of burying them among thousands of lows. Each priority finding should carry an owner, a remediation action, and a deadline so the report drives action.",
        },
        {
          id: "secf-11-q2",
          type: "Audience",
          challenge: `  A security analyst must brief both the engineering
  team and the executive board about the same set of
  vulnerabilities.`,
          text: "How should the communication differ between these audiences?",
          options: [
            "Give both the identical raw technical scan output",
            "Tailor it: executives get business risk and impact; engineers get specific, actionable remediation steps",
            "Tell the executives the most technical details possible",
            "Don't report to executives at all",
          ],
          correctIndex: 1,
          explanation: "Reports must be tailored to the audience. Executives need the business risk, impact, and decisions required (risk-focused, concise); engineers need the specific, actionable technical remediation steps. Handing both the same raw scan output fails both — executives can't act on packet-level detail, and engineers need more than a risk summary. Identifying stakeholders and matching the message to each is central to security reporting.",
        },
        {
          id: "secf-11-q3",
          type: "Incident Metrics",
          challenge: `  After an incident, leadership asks how quickly the
  team detected and responded, and how long the
  attacker was inside before being caught.`,
          text: "Which metrics answer these questions?",
          options: [
            "CVSS and CIA",
            "MTTD (mean time to detect), MTTR (mean time to respond), and dwell time (how long the attacker was present)",
            "RTO and RPO only",
            "Bandwidth and latency",
          ],
          correctIndex: 1,
          explanation: "Incident response KPIs measure detection and response performance: mean time to detect (MTTD) is how long until the incident was noticed; mean time to respond (MTTR) is how long to contain/resolve it; and dwell time is how long the attacker was present before discovery. Tracking these over time drives improvement and informs leadership. CVSS measures vulnerability severity; RTO/RPO are recovery objectives; bandwidth/latency are network metrics.",
        },
        {
          id: "secf-11-q4",
          type: "Reporting Duty",
          challenge: `  A company discovers a breach of millions of users'
  data. To avoid embarrassment, executives pay the
  attackers to stay quiet and hide the incident from
  regulators and users for over a year.`,
          text: "What does the Uber case teach about breach reporting?",
          options: [
            "Concealing a breach is a smart way to protect reputation",
            "Failing to report a breach is worse than the breach: it violates notification laws and causes far greater legal, financial, and reputational damage — even criminal liability",
            "Breaches never need to be reported",
            "Only the technical team needs to know",
          ],
          correctIndex: 1,
          explanation: "The 2016 Uber cover-up — concealing a 57-million-record breach, paying hush money disguised as a bug bounty — led to a $148M settlement and a criminal conviction of the security chief. It shows that breach reporting to regulators and affected people within required timelines (e.g., GDPR's 72 hours) is a legal obligation, and concealment turns a manageable incident into a catastrophe. Honest, timely communication to the right stakeholders is a core security-operations competency.",
        },
      ],
    },
  },
  // ─── 12: Risk Assessment & Management ─────────────────────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "The Risk Register", location: "Where Every Threat Gets a Number", era: "Present Day", emoji: "🎲" },
    id: "sec-foundations-12",
    order: 12,
    title: "Risk Assessment & Management",
    subtitle: "Qualitative vs quantitative risk, SLE/ALE/ARO, and the four treatment strategies",
    category: "cybersecurity",
    xp: 220,
    badge: { id: "secf-badge-12", name: "Risk Quant", emoji: "🎲" },
    challengeType: "quiz",
    info: {
      tagline: "Security is risk management — and the exams (and the boardroom) want risk expressed in a language leaders can act on: likelihood, impact, and dollars.",
      year: 2017,
      overview: [
        "Risk is the combination of a threat exploiting a vulnerability and the resulting impact — commonly modeled as RISK = LIKELIHOOD × IMPACT. The management process runs in four moves — identify risks, assess/analyze them, respond (treat) them, and monitor/report — and assessments can be ad hoc, one-time, recurring, or continuous. Two analysis styles answer different needs:\n- QUALITATIVE — rates likelihood and impact on relative scales (low/medium/high) and plots them on a risk matrix or heat map; fast and intuitive, but subjective.\n- QUANTITATIVE — puts dollar figures on risk so controls can be cost-justified.\nMost programs use both: qualitative to triage quickly, quantitative to defend spending.",
        "The quantitative formulas are exam staples:\n- Single Loss Expectancy (SLE) — the loss from one event: SLE = Asset Value (AV) × Exposure Factor (EF, the percentage of the asset lost).\n- Annualized Rate of Occurrence (ARO) — how many times per year the event is expected.\n- Annualized Loss Expectancy (ALE) = SLE × ARO — the expected yearly loss.\n- A control is worth buying when its annual cost is less than the ALE reduction it provides — turning security spending into a defensible cost-benefit decision.\nExample: a $200,000 asset with a 50% exposure factor has an SLE of $100,000; if the event is expected once every two years (ARO = 0.5), the ALE is $50,000 — so a control costing under $50,000/year that prevents it pays for itself.",
        "Risks are tracked in a RISK REGISTER — each with an owner, a key risk indicator (KRI), a threshold, and a status — and two boundaries guide decisions: risk APPETITE (how much risk the organization will pursue toward its objectives — expansionary, neutral, or conservative) and risk TOLERANCE (the acceptable variation around it). For each risk, choose one of four TREATMENT strategies:\n- AVOID — stop the risky activity altogether.\n- MITIGATE/REDUCE — apply controls to lower likelihood or impact.\n- TRANSFER — shift the financial impact, e.g., cyber insurance or outsourcing.\n- ACCEPT — acknowledge and live with it, with a documented exception.\nAfter controls, what remains is RESIDUAL RISK, and the inherent-vs-residual distinction shows a control's effect. Accepting a risk you don't understand is how organizations end up as breach headlines.",
      ],
      technical: {
        title: "Putting Numbers on Risk",
        body: [
          "Quantitative workflow: value the asset (AV), estimate the exposure factor (EF) for the threat, compute SLE = AV × EF, estimate ARO (events/year), and compute ALE = SLE × ARO. Compare control cost to ALE reduction: if a $20,000/year control cuts ALE from $50,000 to $5,000 (a $45,000 reduction), it's worth it. Qualitative analysis complements this where dollar values are hard — use a likelihood × impact matrix to rank and communicate.",
          "Decision framing: set risk appetite/tolerance at the governance level, record risks in a register with owners and KRIs, then treat each via avoid/mitigate/transfer/accept. Note that transfer (insurance) covers financial impact but not reputation or the breach itself, and accept must be a conscious, documented decision — not negligence. Track residual risk against tolerance and report to leadership. This is the shared language of Security+ governance, CRISC, CISM, and CISA risk objectives.",
        ],
        codeExample: {
          label: "Risk Math & Treatment",
          code: `  RISK = LIKELIHOOD × IMPACT

  QUANTITATIVE:
   SLE = Asset Value (AV) × Exposure Factor (EF)   (one event)
   ALE = SLE × ARO (Annualized Rate of Occurrence) (per year)
   BUY a control if  annual cost < ALE reduction
   e.g. AV $200k · EF 50% → SLE $100k · ARO 0.5 → ALE $50k/yr

  QUALITATIVE: likelihood × impact matrix / heat map (low/med/high)

  RISK REGISTER: risk · owner · KRI · threshold · status
  APPETITE (willing to pursue) vs TOLERANCE (acceptable variance)

  TREATMENT (pick one):
   AVOID    stop the activity
   MITIGATE apply controls (↓ likelihood/impact)
   TRANSFER insurance / outsource (financial impact only)
   ACCEPT   live with it — documented exception (NOT negligence)

  INHERENT risk → (controls) → RESIDUAL risk  (track vs tolerance)`,
        },
      },
      incident: {
        title: "Equifax: A Known Risk, Left Untreated",
        when: "2017",
        where: "Equifax",
        impact: "Equifax suffered a breach of 147 million people's data because it failed to patch a known, critical, publicly-disclosed vulnerability for months — a textbook failure of risk treatment, where a high-likelihood, high-impact risk was effectively (and indefensibly) accepted by inaction.",
        body: [
          "In 2017, attackers exploited a critical Apache Struts vulnerability (CVE-2017-5638) that had been publicly disclosed and patched months earlier. Equifax had not applied the patch across its systems, and the flaw let attackers reach a database holding the personal and financial data of about 147 million people. From a risk-management view, this was a known vulnerability (high likelihood of exploitation, a public exploit existed) on a crown-jewel asset (high impact) — the highest-priority quadrant of any risk matrix — that went untreated.",
          "The lesson is the discipline of risk treatment: identified risks must be consciously avoided, mitigated, transferred, or accepted — and 'accept' must be a documented, justified decision, not the default outcome of inaction. A proper quantitative view (the enormous ALE of exposing 147M records versus the trivial cost of patching) makes the right decision obvious. Equifax paid roughly $1.4 billion in settlements and costs. It's the canonical case for why organizations maintain a risk register, prioritize by likelihood × impact, and don't silently accept high risks.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Identify Risk", sub: "threat × vulnerability", type: "attacker" },
          { label: "Assess (Qual/Quant)", sub: "matrix or SLE/ALE/ARO", type: "system" },
          { label: "Treat", sub: "avoid/mitigate/transfer/accept", type: "victim" },
          { label: "Monitor Residual Risk", sub: "register, KRIs, report", type: "result" },
        ],
      },
      timeline: [
        { year: 2004, event: "ISO/IEC 27005 and NIST SP 800-30 formalize IT risk assessment" },
        { year: 2012, event: "ISACA launches CRISC, professionalizing IT risk management" },
        { year: 2017, event: "Equifax breach: a known critical risk left untreated exposes 147M records", highlight: true },
        { year: 2018, event: "FAIR model popularizes quantitative cyber risk in dollars" },
        { year: 2023, event: "SEC rules push boards to govern cyber risk as financial risk" },
      ],
      keyTakeaways: [
        "Risk = likelihood × impact; assess qualitatively (matrix/heat map) or quantitatively (dollars) to justify controls",
        "SLE = Asset Value × Exposure Factor; ALE = SLE × ARO — buy a control when its annual cost is less than the ALE reduction",
        "Track risks in a register (owner, KRI, threshold); set risk appetite vs tolerance at the governance level",
        "Treat every risk: avoid, mitigate, transfer (insurance covers $ only), or accept (documented) — leftover is residual risk; Equifax shows the cost of leaving a known risk untreated",
      ],
      references: [
        { title: "NIST SP 800-30 — Guide for Conducting Risk Assessments", url: "https://csrc.nist.gov/pubs/sp/800/30/r1/final" },
        { title: "ISACA CRISC", url: "https://www.isaca.org/credentialing/crisc" },
        { title: "FAIR Institute — Quantitative Risk", url: "https://www.fairinstitute.org" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-12-q1",
          type: "Quantitative Risk",
          challenge: `  An asset is worth $200,000. A particular threat
  would destroy 50% of its value if it occurred, and
  it's expected to happen once every two years.`,
          text: "What is the Annualized Loss Expectancy (ALE)?",
          options: [
            "$200,000",
            "$50,000 — SLE = $200,000 × 50% = $100,000; ALE = SLE × ARO ($100,000 × 0.5) = $50,000",
            "$100,000",
            "$25,000",
          ],
          correctIndex: 1,
          explanation: "First the Single Loss Expectancy: SLE = Asset Value × Exposure Factor = $200,000 × 50% = $100,000 (the loss from one event). The Annualized Rate of Occurrence is 0.5 (once every two years). So ALE = SLE × ARO = $100,000 × 0.5 = $50,000 per year. This is the figure to compare against a control's annual cost: a safeguard costing less than $50,000/year that prevents the event is cost-justified.",
        },
        {
          id: "secf-12-q2",
          type: "Risk Treatment",
          challenge: `  A company buys a cyber-insurance policy to cover the
  financial losses from a potential ransomware attack,
  rather than eliminating the risk entirely.`,
          text: "Which risk treatment strategy is purchasing insurance?",
          options: [
            "Avoidance",
            "Transfer — shifting the financial impact to a third party (note: it doesn't cover reputation or prevent the breach)",
            "Acceptance",
            "Mitigation",
          ],
          correctIndex: 1,
          explanation: "Buying insurance (or outsourcing) to shift the financial impact to a third party is risk transfer. The four strategies are: avoid (stop the risky activity), mitigate (apply controls to reduce likelihood/impact), transfer (shift financial impact — insurance), and accept (live with it, documented). Importantly, transfer covers financial loss but not reputational damage or the breach itself, so it's usually combined with mitigation, not used alone.",
        },
        {
          id: "secf-12-q3",
          type: "Residual Risk",
          challenge: `  Before controls, a risk is rated 'high.' After
  applying mitigations, some risk still remains.`,
          text: "What is the risk that remains after controls are applied called?",
          options: [
            "Inherent risk",
            "Residual risk — what remains after controls; compared against risk tolerance",
            "Transferred risk",
            "Zero risk",
          ],
          correctIndex: 1,
          explanation: "Inherent risk is the risk before any controls; residual risk is what remains after controls are applied. No control eliminates risk entirely, so residual risk is compared against the organization's risk tolerance — if it's still above tolerance, more treatment is needed. Tracking inherent vs residual risk shows a control's effectiveness and supports the decision to accept (or further treat) what's left.",
        },
        {
          id: "secf-12-q4",
          type: "Risk in Practice",
          challenge: `  A company knows about a critical, publicly-exploited
  vulnerability on a database holding 147 million
  records, but doesn't patch it for months. Attackers
  exploit it.`,
          text: "From a risk-management perspective, what went wrong at Equifax?",
          options: [
            "Nothing — the risk was properly accepted",
            "A high-likelihood, high-impact risk was left untreated (effectively accepted by inaction) instead of being mitigated, despite a trivial-cost patch and an enormous potential ALE",
            "They over-invested in controls",
            "Insurance would have prevented the breach",
          ],
          correctIndex: 1,
          explanation: "The Equifax breach is a textbook risk-treatment failure: a known, publicly-exploited vulnerability (high likelihood) on a crown-jewel asset (high impact) sat in the highest-priority risk quadrant, yet went untreated for months — effectively accepted by inaction. A quantitative view (the massive ALE of exposing 147M records vs. the trivial cost to patch) makes mitigation the obvious choice. Risks must be consciously avoided, mitigated, transferred, or accepted — never silently ignored.",
        },
      ],
    },
  },

  // ─── 13: Secure Development Lifecycle (SDLC) ──────────────────────────────────
  {
    epochId: "sec-foundations",
    wonder: { name: "A CI/CD Pipeline", location: "From Commit to Production", era: "Present Day", emoji: "🧪" },
    id: "sec-foundations-13",
    order: 13,
    title: "Secure Development Lifecycle (SDLC)",
    subtitle: "Building security into software from requirements to deployment",
    category: "cybersecurity",
    xp: 220,
    badge: { id: "secf-badge-13", name: "Shift-Left Engineer", emoji: "🧪" },
    challengeType: "quiz",
    info: {
      tagline: "Security bolted on at the end is expensive and leaky — a secure development lifecycle bakes it in at every phase.",
      year: 2020,
      overview: [
        "The Software Development Lifecycle (SDLC) is the process software follows from idea to retirement: planning and requirements, design, development (coding), testing, deployment, and maintenance/operations. A SECURE SDLC (SSDLC) integrates security into every phase rather than testing for it at the end — the principle of 'shifting left,' because a flaw caught in design costs a fraction of one caught in production. Auditors (CISA's IS Acquisition, Development & Implementation domain) examine whether security and controls are built into the development and acquisition process, including a post-implementation review to confirm the system met its requirements and controls.",
        "Security activities map to each phase:\n- REQUIREMENTS — define security and compliance requirements up front.\n- DESIGN — perform THREAT MODELING (e.g., STRIDE) to anticipate attacks and design defenses (least privilege, input validation, secure defaults).\n- DEVELOPMENT — follow secure coding standards (input validation, output encoding, parameterized queries against injection, proper authentication/session handling) and do peer CODE REVIEW.\n- TESTING — run security tests; DEPLOYMENT — sign code and harden configuration.\nSeparation of environments (dev / test / staging / production) and separation of duties prevent unreviewed or malicious changes from reaching production.",
        "Automated security testing is central to a modern DevSecOps pipeline:\n- SAST (Static Application Security Testing) — analyzes source code without running it, catching injection, hardcoded secrets, and unsafe patterns early.\n- DAST (Dynamic Application Security Testing) — tests the running application from the outside, catching runtime and configuration issues.\n- IAST — combines both; SCA (Software Composition Analysis) — inventories third-party and open-source dependencies to flag known-vulnerable components (most code today is borrowed — Log4Shell was a single vulnerable dependency).\n- Secrets scanning catches credentials committed to code, and code signing proves integrity and origin.\nBuilding these gates into CI/CD — and securing the build pipeline itself — is what the SolarWinds attack proved non-negotiable: attackers compromised the build process to plant a backdoor in trusted, signed software, turning the supply chain into the weapon.",
      ],
      technical: {
        title: "Security at Every Phase",
        body: [
          "Shift left: the earlier a defect is found, the cheaper it is to fix — a requirements/design fix is orders of magnitude cheaper than a production incident. So embed security in each phase: security requirements, threat modeling in design, secure coding + peer review in development, SAST/DAST/SCA/secrets-scanning in CI, code signing at release, and a post-implementation review after deployment. Keep dev/test/staging/prod separate and enforce separation of duties so no one can push unreviewed code straight to production.",
          "Tooling: SAST (white-box, source code) and SCA (dependencies) run early on every commit; DAST (black-box, running app) runs against test/staging; secrets scanning blocks committed credentials; code signing and provenance protect integrity. Crucially, secure the pipeline itself — SolarWinds showed that a compromised build system can backdoor signed, trusted software. Software supply-chain security (SBOMs, signed artifacts, least-privilege build systems) is now a core SSDLC and audit concern.",
        ],
        codeExample: {
          label: "Secure SDLC (shift left)",
          code: `  SDLC PHASES → SECURITY ACTIVITY:
   REQUIREMENTS  define security + compliance requirements
   DESIGN        THREAT MODELING (STRIDE), secure architecture
   DEVELOPMENT   secure coding (validate input, parameterized
                 queries, output encoding) + peer CODE REVIEW
   TESTING       SAST · DAST · SCA · secrets scanning
   DEPLOYMENT    CODE SIGNING · config hardening
   MAINTENANCE   patching · POST-IMPLEMENTATION REVIEW (CISA)

  AUTOMATED TESTING:
   SAST  static, source code (white-box) — early, every commit
   DAST  dynamic, running app (black-box) — test/staging
   IAST  combined · SCA  dependency/known-CVE scan (Log4Shell!)
   secrets scanning · code signing / provenance

  ENV SEPARATION: dev | test | staging | prod + separation of duties
  SECURE THE PIPELINE ITSELF — SolarWinds backdoored the BUILD
   → supply-chain security: SBOM · signed artifacts · least-priv build`,
        },
      },
      incident: {
        title: "SolarWinds: Weaponizing the Build Pipeline",
        when: "2020",
        where: "SolarWinds Orion / ~18,000 organizations",
        impact: "Attackers compromised SolarWinds' software build process and inserted a backdoor into the Orion product, which was then signed and shipped as a trusted update to ~18,000 customers — proving that securing the development lifecycle and the supply chain is as critical as securing the code itself.",
        body: [
          "In the SolarWinds (SUNBURST) attack, a nation-state actor breached SolarWinds and tampered with the BUILD PIPELINE for its Orion network-management software, injecting a stealthy backdoor into the compiled product. Because the malicious code went through the normal build and was digitally signed by SolarWinds, it appeared completely legitimate; roughly 18,000 organizations — including US government agencies and major enterprises — installed the trojanized update through routine patching. The attackers had turned trusted, signed software into a distribution channel for their backdoor.",
          "The attack reframed secure development: it's not enough to write secure code and sign your releases if the pipeline that builds and signs them can be compromised. It accelerated software supply-chain security — SBOMs (software bills of materials), signed and verified build provenance, least-privilege and hardened build systems, and SCA for dependencies. For learners, SolarWinds is the definitive case that the SDLC and its tooling are part of the attack surface, and that auditing how software is built and acquired (a core CISA concern) is essential.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Requirements + Design", sub: "security reqs, threat modeling", type: "system" },
          { label: "Develop + Review", sub: "secure coding, peer review", type: "attacker" },
          { label: "Test in CI", sub: "SAST/DAST/SCA/secrets", type: "victim" },
          { label: "Sign, Deploy, Review", sub: "secure pipeline, post-impl review", type: "result" },
        ],
      },
      timeline: [
        { year: 2002, event: "Microsoft's Trustworthy Computing launches the modern Secure SDLC" },
        { year: 2015, event: "DevSecOps emerges, embedding security into CI/CD pipelines" },
        { year: 2020, event: "SolarWinds attack backdoors a signed product via the build pipeline", highlight: true },
        { year: 2021, event: "Log4Shell shows the danger of unscanned third-party dependencies (SCA)" },
        { year: 2022, event: "SBOMs and signed provenance (SLSA) become supply-chain standards" },
      ],
      keyTakeaways: [
        "A secure SDLC builds security into every phase (requirements→design→dev→test→deploy→maintain) — 'shift left' because early fixes are far cheaper",
        "Key activities: security requirements, threat modeling (design), secure coding + peer review, and a post-implementation review (a core CISA audit point)",
        "Automated testing: SAST (source), DAST (running app), SCA (dependencies — Log4Shell), secrets scanning, and code signing — gated in CI/CD",
        "Secure the pipeline and supply chain itself: SolarWinds backdoored a signed product via the build system — SBOMs, signed provenance, and least-privilege builds matter",
      ],
      references: [
        { title: "NIST SP 800-218 — Secure Software Development Framework (SSDF)", url: "https://csrc.nist.gov/pubs/sp/800/218/final" },
        { title: "OWASP SAMM — Software Assurance Maturity Model", url: "https://owaspsamm.org" },
        { title: "CISA: Software Supply Chain Security", url: "https://www.cisa.gov/supply-chain-security" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "secf-13-q1",
          type: "Shift Left",
          challenge: `  A team currently runs all security testing only
  after the software is built, right before release,
  and fixes are expensive and rushed.`,
          text: "What does 'shifting left' in a secure SDLC mean?",
          options: [
            "Doing all security testing even later, in production",
            "Integrating security into every earlier phase (requirements, design, development) so flaws are caught when they're far cheaper to fix",
            "Removing security testing to ship faster",
            "Only signing the code at the end",
          ],
          correctIndex: 1,
          explanation: "'Shifting left' means moving security earlier in the development lifecycle — defining security requirements, threat modeling in design, secure coding and review during development, and automated testing in CI — rather than bolting a security check onto the end. A flaw caught in design or code review costs a tiny fraction of one caught in production after a breach, so a secure SDLC embeds security in every phase.",
        },
        {
          id: "secf-13-q2",
          type: "SAST vs DAST",
          challenge: `  A pipeline analyzes the application's source code for
  vulnerable patterns without running it, and separately
  tests the deployed, running app from the outside.`,
          text: "Which testing types are these two approaches?",
          options: [
            "Both are SAST",
            "Analyzing source without running = SAST (static); testing the running app from outside = DAST (dynamic)",
            "Both are penetration tests",
            "Source analysis is DAST; running-app testing is SAST",
          ],
          correctIndex: 1,
          explanation: "SAST (Static Application Security Testing) analyzes source code without executing it (white-box) — catching injection flaws, hardcoded secrets, and unsafe patterns early on every commit. DAST (Dynamic Application Security Testing) tests the running application from the outside (black-box) — catching runtime and configuration issues. They're complementary; SCA additionally scans third-party dependencies for known-vulnerable components. Together they form the automated testing gates of a secure CI/CD pipeline.",
        },
        {
          id: "secf-13-q3",
          type: "Dependencies",
          challenge: `  A critical vulnerability is found in a widely-used
  open-source logging library that thousands of apps
  include as a dependency, even though those apps'
  own code is fine.`,
          text: "Which practice/tool is designed to catch known-vulnerable third-party dependencies?",
          options: [
            "DAST on the running app",
            "Software Composition Analysis (SCA) — inventories dependencies and flags known-vulnerable components",
            "Code signing",
            "A firewall rule",
          ],
          correctIndex: 1,
          explanation: "Software Composition Analysis (SCA) inventories all third-party and open-source dependencies (often via an SBOM) and flags those with known vulnerabilities — exactly the gap that the Log4Shell crisis exposed, where a single vulnerable logging library affected thousands of applications whose own code was fine. Since most modern software is largely borrowed code, SCA is essential; SAST checks your code, DAST checks the running app, and SCA checks what you depend on.",
        },
        {
          id: "secf-13-q4",
          type: "Supply Chain",
          challenge: `  Attackers compromise a software vendor's build system
  and insert a backdoor into the product, which is then
  digitally signed and shipped as a trusted update to
  18,000 customers.`,
          text: "What does the SolarWinds attack teach about the secure SDLC?",
          options: [
            "Signed software is always safe",
            "The build pipeline and supply chain are part of the attack surface — securing how software is built (least-privilege builds, SBOMs, verified provenance) is as vital as the code itself",
            "Only the customers were at fault",
            "Secure coding alone fully prevents this",
          ],
          correctIndex: 1,
          explanation: "SolarWinds (SUNBURST) showed that writing secure code and signing releases isn't enough if the build pipeline that compiles and signs them is compromised — the malicious backdoor was built and signed normally, so it looked legitimate to 18,000 customers. Securing the SDLC therefore includes securing the pipeline and supply chain: least-privilege, hardened build systems, SBOMs, verified build provenance, and dependency scanning. Auditing how software is built and acquired is a core CISA concern.",
        },
      ],
    },
  },
];
