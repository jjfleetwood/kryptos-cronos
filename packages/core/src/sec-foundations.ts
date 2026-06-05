import type { StageConfig, EpochConfig } from "./types";

export const secFoundationsEpoch: EpochConfig = {
  id: "sec-foundations",
  name: "Security Foundations",
  subtitle: "Governance, Controls, Physical Security & Resilience",
  description:
    "Hands-on hacking teaches you how attacks work — but certification exams (Security+, ISC² CC, and the ISACA governance certs) also test the foundational, conceptual half of security: the taxonomy of controls and frameworks, physical security and deception, change management, cryptographic solutions, identity and access management, data protection, resilience and disaster recovery, and security awareness. This epoch rounds out the curriculum with the concepts every security professional must know — the exam-objective bedrock beneath the exploits.",
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
        "A security control is any measure that reduces risk. Exams classify controls two ways. By CATEGORY — how the control is implemented: technical (a.k.a. logical) controls are enforced by technology (firewalls, encryption, access control lists); managerial (administrative) controls are policies, procedures, and risk assessments; operational controls are carried out by people day to day (security guards, awareness training, change management); and physical controls protect the tangible world (locks, fences, cameras).",
        "By TYPE — what the control does relative to an incident: preventive controls stop an incident before it happens (a firewall rule, a locked door); deterrent controls discourage an attacker (warning signs, visible cameras); detective controls identify an incident in progress or after the fact (IDS, logs, audits); corrective controls fix or limit damage after an incident (restoring from backup, patching); compensating controls are alternatives used when the primary control isn't feasible (extra monitoring in place of a missing patch); and directive controls instruct or guide behavior (an acceptable use policy). A single safeguard can be more than one type — a security guard is preventive, deterrent, and detective.",
        "Frameworks organize controls into coherent programs so organizations don't reinvent the wheel. The NIST Cybersecurity Framework (CSF) structures security around core functions — Identify, Protect, Detect, Respond, Recover (and, in CSF 2.0, Govern). ISO/IEC 27001 defines a certifiable Information Security Management System (ISMS) with Annex A controls. The CIS Critical Security Controls are a prioritized, prescriptive checklist. NIST SP 800-53 catalogs detailed controls for federal systems. Knowing which framework does what — and being able to classify any control by category and type — is foundational governance literacy tested across Security+, ISC² CC, CISA, and CRISC.",
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
        "Physical security protects the tangible assets — buildings, data centers, devices, and people — that digital controls depend on. It is layered in defense-in-depth: the PERIMETER deters and delays (fencing, bollards to stop vehicle ramming, lighting, and clear sightlines); the ENTRY controls who gets in (access control vestibules — also called mantraps — that trap a person between two interlocking doors to prevent tailgating, access badges, PIN pads, and biometric locks); and MONITORING detects and records (security guards, motion and door sensors, and video surveillance / CCTV). Each layer maps to control types: a bollard is preventive, a visible camera is deterrent and detective, a guard is all three.",
        "Tailgating (piggybacking) — following an authorized person through a door — is a top physical-access threat, which is why access control vestibules and guards matter: they enforce one-person-at-a-time entry. Other physical concerns include protecting cabling and ports, secure media destruction, environmental controls (HVAC, fire suppression), and visitor management. Physical and cyber security converge in industrial and OT environments, where a USB drive carried through the door can bridge an air gap — as the Stuxnet worm demonstrated.",
        "Deception technology turns the tables by luring attackers into fake assets so defenders can detect and study them. A HONEYPOT is a decoy system that looks valuable but exists only to attract and observe attackers; a HONEYNET is a whole network of honeypots; a HONEYFILE is a bait document (e.g., 'passwords.xlsx') that triggers an alert when opened; and a HONEYTOKEN is a fake credential, API key, or database record planted so that any use of it is a guaranteed sign of compromise. Because legitimate users have no reason to touch these decoys, any interaction is high-fidelity evidence of an intruder. Deception is a detective control that also disrupts and slows attackers.",
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
        "Change management is the formal process for making changes to systems in a controlled, documented, reversible way. It exists because the majority of unplanned outages are self-inflicted — a configuration push, a patch, or an update that wasn't reviewed or tested. The process protects both availability and security: an unreviewed firewall change can open a hole, and an untested update can take down production. A typical workflow: a change request is raised with a clear owner; stakeholders and a change advisory board (CAB) review it; an IMPACT ANALYSIS assesses what could break and who is affected; TEST RESULTS from a non-production environment are attached; a BACKOUT PLAN documents exactly how to revert if it fails; the change is scheduled in an approved MAINTENANCE WINDOW; and the whole thing is documented and version-controlled.",
        "Exams emphasize the supporting pieces: ownership and stakeholder identification, approval workflows, standard operating procedures (SOPs), allow/deny lists that may need updating, restricted activities, downtime planning, and the order of service or application restarts and their dependencies. Legacy applications and undocumented dependencies are classic sources of change failures — restarting one service can cascade into others. Documentation and version control (updating diagrams, configs in Git, and runbooks) ensure the environment's true state is always known and changes are auditable.",
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
        "Resilience keeps services running through failures; recovery restores them after a disaster. The two metrics that drive every design decision come from a Business Impact Analysis (BIA): the Recovery Time Objective (RTO) — the maximum tolerable time to restore a service — and the Recovery Point Objective (RPO) — the maximum tolerable amount of data loss, measured as a point in time. A 1-hour RPO means backups/replication must capture data at least hourly; a 15-minute RTO means you need hot standby, not tape restore. Related reliability metrics include MTTR (mean time to repair) and MTBF (mean time between failures).",
        "HIGH AVAILABILITY designs prevent downtime in the first place: load balancing distributes traffic across redundant servers, clustering lets nodes take over for each other, and platform diversity / multi-cloud avoids a single vendor or technology as a single point of failure. RECOVERY SITES provide somewhere to run if a location is lost: a HOT site is fully equipped and running, ready in minutes (lowest RTO, highest cost); a WARM site has hardware and connectivity but needs data and setup (hours); a COLD site is just space and power (days, lowest cost). Geographic dispersion ensures a single regional disaster — flood, fire, power loss — doesn't take out both primary and recovery.",
        "BACKUPS are the recovery foundation: keep copies onsite (fast restore) and offsite (disaster protection), choose a frequency that meets the RPO, encrypt them, and protect against ransomware with immutable/offline copies (the 3-2-1 rule: three copies, two media types, one offsite). Techniques include full/incremental/differential backups, snapshots, replication (synchronous or asynchronous), and journaling. POWER resilience matters too: an uninterruptible power supply (UPS) bridges short outages and enables clean shutdown, while generators sustain longer ones. Finally, untested recovery is a myth — TEST with tabletop exercises (discussion), simulations, parallel processing (run recovery alongside production), and full failover drills, because the worst time to discover a broken backup is during a real disaster.",
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
        "Cryptography provides confidentiality (encryption), integrity (hashing), and authenticity/non-repudiation (digital signatures). SYMMETRIC encryption (e.g., AES) uses one shared key — fast, but the key must be exchanged securely. ASYMMETRIC encryption (e.g., RSA, ECC) uses a public/private key pair: anything encrypted with the public key can only be decrypted with the matching private key, solving the key-distribution problem. In practice, asymmetric crypto securely exchanges a symmetric session key (key exchange, e.g., Diffie-Hellman), then symmetric crypto does the bulk work — exactly how TLS works. Encryption can be applied at many levels: full-disk, partition, volume, file, database, and record, plus transport (in transit).",
        "PUBLIC KEY INFRASTRUCTURE (PKI) is the system of trust that binds a public key to an identity using digital CERTIFICATES (X.509). A Certificate Authority (CA) signs certificates; a chain of trust runs from a trusted root CA down through intermediates to the end-entity certificate. To get one, you submit a Certificate Signing Request (CSR). Certificates can be self-signed (trusted only by you), CA-signed (trusted publicly), wildcard (*.example.com), or carry Subject Alternative Names. When a certificate must be invalidated early, clients check a Certificate Revocation List (CRL) or query the Online Certificate Status Protocol (OCSP). Key escrow stores keys with a trusted third party for recovery.",
        "HASHING produces a fixed-length, one-way fingerprint of data (e.g., SHA-256) for integrity — change one bit and the hash changes completely. SALTING adds random data before hashing passwords so identical passwords hash differently and rainbow tables fail; KEY STRETCHING (bcrypt, PBKDF2, Argon2) deliberately makes hashing slow to resist brute force. A DIGITAL SIGNATURE hashes a message and encrypts the hash with the signer's PRIVATE key; anyone can verify it with the signer's PUBLIC key, proving integrity, authenticity, and non-repudiation. Keys themselves are protected by hardware: a TPM (Trusted Platform Module) on a device, an HSM (Hardware Security Module) for high-assurance key storage, a secure enclave for isolated processing, and a Key Management System for lifecycle. OBFUSCATION techniques — steganography (hiding data in media), tokenization (replacing data with a token), and data masking — protect data in other ways, while blockchain uses hashing and signatures to build an open public ledger.",
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
        "Identity and Access Management (IAM) controls who can access what, and proves it. The framework is AAA: Authentication (proving who you are), Authorization (what you're allowed to do), and Accounting (logging what you did). Authentication uses FACTORS in categories: something you KNOW (password, PIN), something you HAVE (a hardware token, phone, smart card), something you ARE (biometrics — fingerprint, face), somewhere you ARE (geolocation), and something you DO (behavioral). Multi-Factor Authentication (MFA) combines factors from DIFFERENT categories — a password plus a code from your phone — so a stolen password alone isn't enough. Passwordless approaches (passkeys, security keys) and password managers reduce reliance on memorized secrets.",
        "Single Sign-On (SSO) lets a user authenticate once and access many systems. FEDERATION extends trust across organizations using an Identity Provider (IdP) that vouches for users to Service Providers (SPs). The protocols matter: SAML (XML-based, common in enterprise web SSO), OAuth 2.0 (delegated authorization — granting an app limited access without sharing your password), OpenID Connect (OIDC, an authentication layer on top of OAuth), LDAP (directory queries), and Kerberos (ticket-based authentication in Windows domains). Provisioning creates accounts and assigns permissions; de-provisioning promptly removes access when someone leaves — orphaned accounts are a major risk. Identity proofing verifies a real person, and attestation/recertification periodically reviews that access is still appropriate.",
        "ACCESS CONTROL MODELS define how permissions are granted. Discretionary Access Control (DAC) lets data owners grant access at their discretion. Mandatory Access Control (MAC) enforces access based on system-assigned labels/clearances (used in high-security/military contexts). Role-Based Access Control (RBAC) grants permissions by job role — the most common in enterprises. Rule-Based and Attribute-Based Access Control (ABAC) decide using conditions/attributes (time of day, location, device). Underpinning all of them are least privilege (only the access needed) and separation of duties (no single person controls a whole sensitive process). For privileged accounts, Privileged Access Management (PAM) adds just-in-time access, password vaulting, and ephemeral credentials so powerful accounts aren't standing targets.",
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
        "Protecting data starts with classifying it. Common CLASSIFICATION levels run from public (no harm if disclosed) through private, sensitive, and confidential, up to restricted and critical (severe harm if disclosed). Organizations also categorize by DATA TYPE: regulated data (PII — personally identifiable information; PHI — protected health information; PCI — cardholder data), trade secrets, intellectual property, and financial or legal data. Classification drives the controls: the more sensitive the data, the stronger the protection and the tighter the access. A major cause of breaches is simply not knowing where sensitive data lives or treating it all the same.",
        "Data exists in three STATES, each needing protection: data AT REST (stored on disk — protect with encryption and access controls), data IN TRANSIT (moving across a network — protect with TLS/IPsec), and data IN USE (being processed in memory — the hardest, protected by access controls, secure enclaves, and confidential computing). DATA SOVEREIGNTY and residency add a legal dimension: data is subject to the laws of the country where it's stored, so a company may be required to keep certain data within specific borders (and geolocation/geographic restrictions enforce this). Cross-border transfers are heavily regulated under laws like the EU's GDPR.",
        "PROTECTION METHODS include encryption (confidentiality at rest/in transit), hashing (integrity), masking (showing only part of a value, e.g., **** **** **** 1234), tokenization (replacing sensitive data with a non-sensitive token, keeping the real value in a secure vault), obfuscation, segmentation (isolating sensitive data), and permission restrictions. Data Loss Prevention (DLP) tools detect and block sensitive data from leaving the organization. Governance also defines the data LIFECYCLE — retention schedules, minimization (collect only what's needed), and disposal/sanitization — and assigns ROLES: the data owner (accountable), the controller (decides why/how data is processed), the processor (acts on the controller's behalf), and the custodian/steward (handles day-to-day protection). Privacy laws add rights like the 'right to be forgotten.'",
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
        "The vast majority of breaches involve a human element — a clicked phishing link, a reused password, a social-engineering phone call. Security awareness programs aim to turn the workforce from the weakest link into a 'human firewall.' A mature program includes ongoing TRAINING (at onboarding, recurring throughout the year, and role-based for higher-risk roles like finance and IT), clear POLICIES and handbooks, and SIMULATED PHISHING CAMPAIGNS that safely test and teach employees to recognize and report suspicious messages. The goal isn't to shame people who click, but to build reflexes: pause on urgency, verify unexpected requests, and report.",
        "Awareness covers recognizing ANOMALOUS BEHAVIOR — both in systems and in people. This includes risky behavior (ignoring policy for convenience), unexpected behavior (logins at odd hours or locations), and unintentional behavior (accidentally emailing data to the wrong person). INSIDER THREAT awareness teaches everyone to notice and report concerning signs, recognizing that threats can be malicious (a disgruntled employee), negligent (careless), or compromised (an account taken over). Reporting channels and a blame-light culture are essential — people must feel safe raising a hand quickly when something seems off, because early reporting shrinks the impact of an incident.",
        "OPERATIONAL SECURITY (OpSec) is the day-to-day discipline of not leaking information attackers can use. It covers handling removable media (no unknown USB drives), resisting social engineering (verifying identity before acting on requests), securing hybrid and remote work (home networks, shoulder-surfing, clean-desk and clean-screen habits), strong password management, and minimizing the digital footprint that enables targeted attacks. Awareness is reinforced by monitoring and metrics — phishing-simulation click rates, reporting rates, and training completion — and it must be developed, executed, and continuously refreshed, because attackers constantly evolve their lures. A workforce that pauses, verifies, and reports is the control no technology can replace.",
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
];
