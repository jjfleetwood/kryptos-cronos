import type { StageConfig, EpochConfig } from "./types";

export const techAudit1Epoch: EpochConfig = {
  id: "tech-audit-1",
  name: "Tech Audit: Foundations",
  subtitle: "ISACA Audit Methodology",
  description: "Master IT audit methodology using ISACA standards — COBIT, CISA, CRISC, and ITGC. Each stage simulates a real audit engagement at a major institution, from risk assessment to audit reporting.",
  emoji: "🔍",
  color: "purple",
  unlocked: true,
};

export const techAudit1Stages: StageConfig[] = [
  // ─── audit-01: COBIT 2019 ─────────────────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "ISACA Global Headquarters", location: "Schaumburg, Illinois", era: "Present Day", emoji: "🏛️" },
    id: "audit-01",
    order: 1,
    title: "The Governance Framework",
    subtitle: "COBIT 2019 — Separating Governance from Management",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-01", name: "COBIT Auditor", emoji: "📋" },
    challengeType: "ctf",
    info: {
      tagline: "Governance sets direction. Management executes. Confusing the two is where audit failures begin.",
      year: 2019,
      overview: [
        "COBIT 2019 is ISACA's flagship framework for IT governance and management, and it underpins almost every IT audit methodology in regulated industries. Its central act is to draw a precise, legally significant line between governance — which sets direction, evaluates options, and monitors outcomes — and management, which plans, builds, runs, and monitors in line with that direction. The distinction is anything but academic: regulators and courts have assigned personal liability to board members who abdicated governance and relied entirely on management self-reporting, which is exactly why every audit begins by locating that boundary before testing anything built on it.",
        "Once the boundary is fixed, the audit traces how intent flows across it. The board and executives govern — approving risk appetite, setting strategy, authorizing major IT investments, and ensuring accountability — while IT leadership manages, implementing controls, operating systems, and reporting performance upward within the parameters the board approved. The auditor occupies an independent third position, verifying both layers and reporting to the audit committee rather than to management precisely to preserve that independence. The work is fundamentally a tracing exercise: the governance cascade runs from board principles to management policies to operational procedures to technical controls, and the auditor walks it in reverse. A control that cannot be traced up to policy authority — or a policy that was never implemented as a control — is a governance gap.",
        "The framework organizes 40 objectives across five domains, each mapped to a part of the IT lifecycle and tailored to context by design factors. EDM (Evaluate, Direct, Monitor) is the board-governance domain, covering risk appetite, IT investment, and performance monitoring. The four management domains follow: APO (Align, Plan, Organise) handles strategy, architecture, risk, and HR planning; BAI (Build, Acquire, Implement) covers projects, change, and requirements; DSS (Deliver, Service, Support) covers operations, incidents, and continuity; and MEA (Monitor, Evaluate, Assess) covers internal controls, compliance, and board reporting. Twelve design factors — enterprise strategy, risk profile, compliance requirements, sourcing model, IT methods, and more — adapt the framework to the organization, because a regulated bank running its own data center has a different target profile than a cloud-native startup. Auditors therefore establish the applicable design factors before they assess capability against any objective.",
        "Two practical points dominate real engagements. The first is that COBIT is a governance framework, not a technical standard: it prescribes no implementations but maps cleanly to NIST CSF, ISO 27001, ITIL, and TOGAF, so auditors routinely encounter strong NIST or ISO technical controls that are simply not connected to board-level accountability. The second is where the findings actually cluster — the EDM domain. The recurring trio is EDM01, the absence of a formal governance charter; EDM03, the absence of an approved risk-appetite statement, which leaves risk decisions to be made ad hoc and without board authority; and EDM05, IT reporting to the board that is either missing or composed entirely of technical metrics the board cannot evaluate. Together these constitute a pervasive governance failure that quietly undermines every other control beneath them.",
      ],
      technical: {
        title: "COBIT 2019 Domain Structure",
        body: [
          "The five domains map to the IT lifecycle and give the auditor an organizing structure:\n- EDM — board governance: a mature domain means a documented IT governance charter, regular board review against approved metrics, and a named oversight body (often the IT steering committee) acting between board meetings.\n- APO — 14 objectives from framework design through architecture, portfolio, risk, and data; APO12 (Risk Management) needs a maintained risk register, defined appetite, and quarterly reviews, and APO13 (Security Management) needs an ISO 27001-aligned ISMS.\n- BAI — 11 objectives on delivery and change; BAI06 (Change Enablement) is the ITGC change-management control and BAI10 (Configuration Management) covers the CMDB and baselines that make it effective.",
          "Auditors rate each objective on COBIT's 0–5 capability scale against a context-set target:\n- 0 Incomplete (not implemented), 1 Performed (basic purpose met but uncontrolled), 2 Managed (planned, monitored, adjusted).\n- 3 Established (a defined process tailored from a standard), 4 Predictable (operates within statistical limits), 5 Optimizing (continuous improvement).\n- Level 3 is the regulated-industry minimum; Level 4–5 is expected only for the most critical controls in the highest-risk environments.",
          "The assessment methodology follows a consistent four-step pattern:\n- Interview board members, CIO, CISO, and process owners to learn how governance is actually exercised, not just documented.\n- Review artifacts — governance charters, risk-appetite statements, board minutes with IT items, steering-committee minutes, IT performance reports.\n- Observe governance in operation — attending steering-committee meetings and examining how investment decisions, exceptions, and escalations are handled.\n- Rate each objective against the capability scale and document the supporting evidence.",
          "Two outputs make the assessment actionable:\n- Evidence collected typically includes a signed governance charter (EDM01), a board-approved risk-appetite statement with quantified thresholds (EDM03), steering-committee minutes showing regular cadence (EDM01/EDM04), board-acknowledged performance dashboards (EDM05), investment approvals with board sign-off (EDM02), and annual capability-assessment results (MEA02) — the absence of any at a regulated institution is reportable.\n- The capability gap analysis records, per objective, current level, target given design factors, the gap, and remediation priority; EDM gaps are always high priority as governance-layer failures, and the analysis drives management's roadmap across subsequent audit cycles.",
        ],
        codeExample: {
          label: "COBIT capability rating worksheet (simplified)",
          code: `# COBIT Capability Assessment — EDM01 (Governance Framework)
# Scale: 0=Incomplete 1=Performed 2=Managed 3=Established 4=Predictable 5=Optimizing

Objective          Current  Target  Gap  Priority
-------------------------------------------------
EDM01 Governance     2        3      1    HIGH
EDM02 Benefits       1        3      2    HIGH
EDM03 Risk           3        3      0    MET
APO01 IT Mgmt Fwk   2        3      1    MEDIUM
APO12 Risk Mgmt      2        4      2    HIGH`,
        },
      },
      incident: {
        title: "The Enron IT Governance Failure (2001)",
        when: "2001 — Enron Corporation collapse",
        where: "Houston, Texas",
        impact: "Largest US bankruptcy at the time; $74B in shareholder losses; Sarbanes-Oxley Act enacted",
        body: [
          "Enron's 2001 collapse remains the canonical governance-layer failure in the IT audit curriculum:\n- The board exercised no meaningful oversight of the special-purpose entities (SPEs) management used to hide billions in debt.\n- IT systems generated reports management selectively shared, presenting profitability that didn't match economic reality, and the governance layer simply accepted what management reported.\n- Board members later testified they didn't understand the SPE structures — and under EDM01, that incomprehension is itself a failure, since the board must establish a framework capable of evaluating what management presents.",
          "The IT dimensions were central, not incidental:\n- Energy-trading systems processed volumes that made manual verification impossible, and mark-to-market accounting on illiquid long-term contracts relied on models only a handful of people understood.\n- The board approved that approach with no independent validation mechanism — a direct EDM03 (Risk Optimisation) failure.\n- Arthur Andersen relied on management-prepared reconciliations rather than independently extracting source data — an audit-independence failure COBIT's MEA domain now addresses explicitly.",
          "The aftermath produced the Sarbanes-Oxley Act (2002), the direct ancestor of COBIT's board-oversight emphasis:\n- Section 404 requires management to assess internal controls over financial reporting and external auditors to attest to it — the lineage of COBIT's EDM domain.\n- Section 302 requires personal CEO/CFO certification of financial-statement accuracy — the governance-accountability mechanism EDM05 addresses at the framework level.",
          "For practicing auditors, Enron's lessons become specific tests and a high remediation bar:\n- For EDM01, review board minutes for IT items of sufficient frequency and depth — minutes showing IT discussed only in passing, or not at all, are a finding.\n- For EDM03, verify the risk-appetite statement is actively used — investment proposals reference it, and appetite exceptions are formally escalated and documented.\n- Remediation needs executive sponsorship and sustained effort: the charter must be followed, the steering committee must actually meet, review real data, challenge management, and document decisions — and when evidence is thin or manufactured after the fact, professional skepticism keeps the finding open.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Board / Executives", sub: "COBIT EDM layer", type: "attacker" },
          { label: "IT Leadership", sub: "APO/BAI/DSS/MEA", type: "system" },
          { label: "IT Auditor", sub: "independent review", type: "victim" },
          { label: "Audit Report", sub: "findings + ratings", type: "result" },
        ],
      },
      timeline: [
        { year: 1996, event: "COBIT 1.0 released — first IT audit framework from ISACA" },
        { year: 2001, event: "Enron collapse — governance failures expose need for IT oversight standards" },
        { year: 2002, event: "Sarbanes-Oxley Act — Section 404 mandates IT controls for public companies" },
        { year: 2019, event: "COBIT 2019 released — updated governance model, 40 objectives", highlight: true },
      ],
      keyTakeaways: [
        "Governance (EDM) sets direction; Management (APO/BAI/DSS/MEA) executes — confusing these layers is a reportable finding",
        "COBIT rates capability 0–5; Level 3 (Established) is the regulated industry minimum baseline",
        "Auditors assess both governance and management layers independently — management self-reporting is never sufficient evidence",
        "SOX Section 404 compliance drove COBIT adoption; board members bear personal liability for governance failures under SOX Section 302",
        "The governance cascade: board principles → management policies → operational procedures → technical controls — auditors trace it in both directions",
        "Design factors determine target capability levels — a bank's COBIT profile differs from a startup's; one-size-fits-all assessments are a methodology gap",
        "EDM01 gap (no governance charter) is always a high-priority finding — without a charter, no other governance control has formal authority",
        "EDM03 gap (no risk appetite statement) means IT risk decisions are being made without board authority — a pervasive control deficiency",
        "Board meeting minutes must show substantive IT engagement — rubber-stamp minutes are evidence of governance failure, not governance health",
        "COBIT maps to NIST CSF, ISO 27001, and ITIL — organizations often have strong technical frameworks but weak governance layers connecting them to the board",
      ],
      references: [
        { title: "COBIT 2019 Framework — ISACA", url: "https://www.isaca.org/resources/cobit" },
        { title: "SOX Section 404 — SEC Guidance", url: "https://www.sec.gov/rules/interp/2007/33-8810.pdf" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-01-q1", type: "Core Idea", challenge: "Two distinct roles.", text: "What is the difference between governance and management in IT?", options: ["Governance sets direction and oversees; management executes within that direction","They are the same thing","Management oversees governance","Governance writes code"], correctIndex: 0, explanation: "Confusing the two is where audit failures begin — governance directs, management executes." },
        { id: "audit-01-q2", type: "COBIT", challenge: "Know the domain.", text: "In COBIT 2019, the EDM domain (Evaluate, Direct, Monitor) represents which layer?", options: ["The governance layer — board-level oversight of IT direction and outcomes","The coding layer","The networking layer","The billing layer"], correctIndex: 0, explanation: "EDM is COBIT's governance layer; APO/BAI/DSS/MEA are the management domains." },
        { id: "audit-01-q3", type: "COBIT", challenge: "Count the domains.", text: "How many governance and management domains does COBIT 2019 define?", options: ["Five — EDM for governance, plus APO, BAI, DSS, MEA for management","Three","Ten","One"], correctIndex: 0, explanation: "COBIT 2019 has five domains: one governance (EDM) and four management." },
        { id: "audit-01-q4", type: "Regulation", challenge: "Post-Enron law.", text: "Which 2002 law formalized IT controls requirements for public companies after Enron?", options: ["The Sarbanes-Oxley Act (Section 404)","GDPR","HIPAA","The Patriot Act"], correctIndex: 0, explanation: "SOX §404 established IT controls requirements for public companies." },
        { id: "audit-01-q5", type: "Real Incident", challenge: "Enron, 2001.", text: "What did the Enron collapse illustrate about IT governance?", options: ["Governance failures and lack of independent oversight enable catastrophic fraud","Servers must be faster","Encryption was missing","It was a network outage"], correctIndex: 0, explanation: "Enron's governance breakdown triggered SOX and modern IT controls requirements." },
        { id: "audit-01-q6", type: "Auditing", challenge: "Trust but verify.", text: "Is management's self-reporting to the board sufficient evidence that governance objectives are met?", options: ["No — auditors must independently verify both governance and management layers","Yes — self-reporting is enough","Only for small companies","Only if signed"], correctIndex: 0, explanation: "Independent verification is required; self-attestation isn't evidence." },
        { id: "audit-01-q7", type: "Maturity", challenge: "The regulated baseline.", text: "What COBIT capability level is the typical minimum for regulated industries?", options: ["Level 3 (Established)","Level 1 (Initial)","Level 2 (Managed)","Level 0 (Incomplete)"], correctIndex: 0, explanation: "Level 3 (Established) is the usual regulated-industry minimum, not level 2." },
        { id: "audit-01-q8", type: "Concept", challenge: "Where failures start.", text: "Why does confusing governance with management cause audit problems?", options: ["Oversight and execution blur, so no one independently checks direction is followed","It speeds up audits","It has no effect","It only matters for startups"], correctIndex: 0, explanation: "Separation of direction and execution is what makes oversight meaningful." },
      ],
    },
    ctf: {
      scenario: "You have been granted access to the ISACA audit terminal at a financial services firm. The COBIT assessment files are loaded. Read the governance charter, identify the five domains, and locate the capability gap that puts this company at regulatory risk.",
      hint: "Read COBIT-ASSESSMENT.txt first, then explore the domains directory.",
      hints: [
        "Start with: cat COBIT-ASSESSMENT.txt",
        "List the domain files: ls domains/",
        "Read the governance layer file: cat domains/EDM.txt",
        "Find the highest-risk gap: cat domains/GAP-REPORT.txt",
        "Run 'assemble' then submit the flag",
      ],
      fragments: [
        { trigger: "/COBIT-ASSESSMENT.txt", value: "FLAG{C0B1T_", label: "Assessment Loaded — Framework Identified" },
        { trigger: "/domains/EDM.txt", value: "3DM_G4P_", label: "EDM Domain — Governance Gap Found" },
        { trigger: "/domains/GAP-REPORT.txt", value: "CR1T1C4L}", label: "Gap Report — Critical Risk Confirmed" },
      ],
      files: {
        "/COBIT-ASSESSMENT.txt": [
          "COBIT 2019 CAPABILITY ASSESSMENT",
          "Client: Meridian Financial Services",
          "Auditor: [You]",
          "Date: 2026-05-15",
          "=================================",
          "",
          "SCOPE: Five COBIT domains assessed.",
          "  EDM — Evaluate, Direct, Monitor (Governance)",
          "  APO — Align, Plan, Organise",
          "  BAI — Build, Acquire, Implement",
          "  DSS — Deliver, Service, Support",
          "  MEA — Monitor, Evaluate, Assess",
          "",
          "Explore domains/ for detail on each domain.",
          "Review domains/GAP-REPORT.txt for risk findings.",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. COBIT 2019 separates governance (EDM — board level) from management (APO/BAI/DSS/MEA — IT execution)",
          "  2. Capability level 1 on EDM01 means no formal governance charter exists — a pervasive audit risk",
          "  3. Auditors independently verify both layers; management self-reporting is never sufficient evidence",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
        "/domains/EDM.txt": [
          "EDM DOMAIN — GOVERNANCE LAYER",
          "==============================",
          "",
          "EDM01 Governance Framework    Current: 1  Target: 3  GAP: 2  CRITICAL",
          "EDM02 Benefits Realisation    Current: 2  Target: 3  GAP: 1  HIGH",
          "EDM03 Risk Optimisation       Current: 1  Target: 3  GAP: 2  CRITICAL",
          "EDM04 Resource Optimisation   Current: 2  Target: 3  GAP: 1  MEDIUM",
          "EDM05 Stakeholder Engagement  Current: 2  Target: 3  GAP: 1  MEDIUM",
          "",
          "Finding: Board has no formal IT governance charter.",
          "No documented risk appetite statement exists.",
          "IT investment decisions made by CTO without board approval.",
        ].join("\n"),
        "/domains/APO.txt": [
          "APO DOMAIN — ALIGN, PLAN, ORGANISE",
          "====================================",
          "APO01 IT Management Framework Current: 2  Target: 3  GAP: 1  MEDIUM",
          "APO12 Risk Management         Current: 2  Target: 3  GAP: 1  HIGH",
          "APO13 Security Management     Current: 3  Target: 3  GAP: 0  MET",
        ].join("\n"),
        "/domains/GAP-REPORT.txt": [
          "CRITICAL GAP SUMMARY",
          "====================",
          "",
          "Highest Risk: EDM01 + EDM03 — both at capability level 1.",
          "Board has no IT governance charter (EDM01).",
          "No formal risk appetite statement (EDM03).",
          "",
          "Regulatory exposure: SOX Section 404 — material weakness likely.",
          "Remediation: Board must adopt IT governance charter within 60 days.",
          "Risk committee must document and approve risk appetite.",
          "",
          "Auditor conclusion: GOVERNANCE FAILURE — escalate to audit committee.",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. EDM01 gap = no IT governance charter — the board cannot direct or monitor IT without one",
          "  2. SOX Section 404 treats missing governance documentation as evidence of material weakness",
          "  3. Escalation to the audit committee (not just management) is required when governance itself fails",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "COBIT-ASSESSMENT.txt", isDir: false }, { name: "domains", isDir: true }],
        "/domains": [
          { name: "EDM.txt", isDir: false },
          { name: "APO.txt", isDir: false },
          { name: "GAP-REPORT.txt", isDir: false },
        ],
      },
    },
  },

  // ─── audit-02: Risk Assessment — CRISC ────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "Federal Reserve Board", location: "Washington, DC", era: "Present Day", emoji: "🏦" },
    id: "audit-02",
    order: 2,
    title: "Risk in the Vault",
    subtitle: "CRISC — IT Risk Identification and Assessment",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-02", name: "Risk Analyst", emoji: "⚖️" },
    challengeType: "ctf",
    info: {
      tagline: "Every control exists to mitigate a risk. Without the risk, the control is just overhead.",
      year: 2010,
      overview: [
        "CRISC (Certified in Risk and Information Systems Control) is ISACA's risk-focused certification and methodology, built on a four-domain approach: IT Risk Identification, IT Risk Assessment, Risk Response and Mitigation, and Risk and Control Monitoring and Reporting. What separates it from a pure compliance framework is the question it asks. Where compliance asks 'did we implement the required control?', CRISC asks the prior and harder question — 'what risks are these controls meant to address, and are they actually reducing those risks to acceptable levels?' Everything downstream flows from that reframing.",
        "The first two domains establish what must be managed and how exposed the organization really is. Risk identification is the most chronically under-resourced of them: a register populated in a single workshop years ago goes stale, so CRISC demands continuous identification as new systems, vendors, regulations, and threats appear. Auditors test this by comparing the register against change logs, vendor onboardings, threat intelligence, and incident databases, hunting for the risks that should be present but are not. Risk assessment then runs a standard method — identify threats and vulnerabilities, score inherent risk before controls, evaluate control effectiveness, calculate residual risk after controls, and compare that residual to the board-approved appetite. The gap between inherent and residual is the control effectiveness, and it must be large enough to bring residual risk back within appetite.",
        "Two artifacts anchor the rest of the work. The first is the set of four risk responses. Accept means the board formally documents and absorbs the loss, and acceptance that is not documented is invalid. Mitigate means adding or strengthening controls. Transfer shifts financial exposure through insurance, indemnification, or outsourcing without eliminating the underlying risk. Avoid discontinues the activity altogether — the most complete response and often the least practical. The second artifact, and the one auditors scrutinize most, is the risk register itself. A mature register carries, for each risk, a unique ID, a threat-and-vulnerability narrative, the affected asset, a named risk owner, an inherent score of likelihood times impact, the controls in place with references, a control-effectiveness rating, the residual score, the response type and treatment plan, the appetite threshold, and the last-review date. Any missing field is itself a finding, because without it the organization cannot demonstrate that it is actually managing the risk.",
        "Two things ultimately determine whether the program is real rather than performative. Risk appetite must be both board-approved and quantitative: 'we have a low appetite for cybersecurity' supplies no threshold, whereas 'no residual score above 12 on the 5×5 matrix without a board-approved exception, and scores of 16 or above escalate immediately to the Audit Committee' is something an auditor can actually test against. And the single most consequential finding is residual risk above appetite with no treatment plan — the organization knows it has exceeded its own threshold and is doing nothing about it. Regulators treat that condition as management negligence: the FDIC and OCC issue Matters Requiring Attention over it, and external auditors may classify it as a significant deficiency or material weakness under SOX 404.",
      ],
      technical: {
        title: "Risk Calculation: Inherent vs Residual",
        body: [
          "Risk scoring turns on the inherent-versus-residual calculation and an honest read of control effectiveness:\n- Inherent risk is Likelihood × Impact before controls, typically 1–5 each for a 1–25 matrix — a critical database open to the internet with no auth is 5 × 5 = 25, while the same database behind a firewall with MFA, encryption, and monitoring drops to a residual ~6.\n- Control effectiveness isn't binary: a control in policy but unenforced rates low, enforced but unmonitored rates medium, enforced-monitored-tested rates high — and the most common error, the one behind Capital One, is overestimating effectiveness and producing an artificially low residual score that hides real exposure.",
          "Two disciplines keep the register trustworthy:\n- Calibration — a single enterprise matrix applied consistently across categories, since mixing a 3×3 for operational risk and a 5×5 for cyber makes risks incomparable; auditors test it by checking that similar real-world consequences produce similar scores (a $10M financial risk at 15 but a $10M cyber risk at 8 means the matrix is miscalibrated).\n- Register review — auditors sample 20–30% of risks for completeness (all fields populated), accuracy (defensible likelihood/impact given current threats and controls), and currency (reviewed within cycle — annually for low, quarterly for high, continuously for critical), with any risk unreviewed since a significant change failing currency regardless of its date.",
          "Treatment-plan testing is the final analytical step for every risk above appetite:\n- Verify a documented plan exists with concrete actions, owners, and completion dates, that progress is tracked, and that residual risk is actually falling over time.\n- 'Implement additional controls by Q4' — with no named controls, owner, or projected post-implementation residual — is not adequate.\n- Completed treatments must be tested: a newly added control has to be operating effectively before the residual score can be revised downward.",
          "The lifecycle closes with reporting, plus one advanced concept that recurs in complex audits:\n- Risk reporting to the board must be at least quarterly for a regulated institution and in business terms — narrative explanations of what scores mean, whether the trend is improving or worsening, and what management is doing about risks above appetite; auditors check a year of board reports for accuracy, completeness, and whether they actually enable governance decisions rather than just the appearance of oversight.\n- Fourth-party risk — the risk a vendor's vendor creates, like a payment processor's cloud provider outage — must be captured for critical relationships; auditors test it by reviewing the top ten vendors by criticality and asking whether the organization has visibility into those vendors' key dependencies.",
        ],
        codeExample: {
          label: "Risk register calculation (5×5 matrix)",
          code: `# Risk scoring: 1=Very Low, 5=Very High
# Residual Risk = Inherent - Control Effectiveness

Risk ID  Threat               Likelihood Impact Inherent Controls  Residual  Status
-------  -------------------  ---------- ------ -------- --------  --------  ------
R-001    Unpatched servers         4       5      20       MFA+FW     8      ABOVE APPETITE
R-002    Phishing — employees      3       4      12       Training   6      WITHIN APPETITE
R-003    Insider data theft        2       5      10       DLP+Audit  4      WITHIN APPETITE
R-004    Ransomware via RDP        4       5      20       None       20     CRITICAL — NO CONTROLS`,
        },
      },
      incident: {
        title: "The Capital One Cloud Misconfiguration (2019)",
        when: "March–July 2019",
        where: "AWS US-East-1",
        impact: "106 million customer records exposed; $190M settlement; CISO resigned",
        body: [
          "Capital One's 2019 breach is the definitive cloud risk-assessment failure:\n- An SSRF flaw in a misconfigured Web Application Firewall (WAF) let the attacker reach the EC2 Instance Metadata Service, retrieve AWS credentials, and download 106 million customer records from S3.\n- The vulnerability was no zero-day — SSRF against cloud metadata services was a well-known attack class, so the risk should have been in the register.",
          "Two CRISC stages failed at once:\n- Risk identification — cloud metadata exposure to application-layer attacks was documented in AWS guidance, OWASP, and threat intel, yet Capital One's process recorded the WAF misconfiguration far below its true inherent risk of 25 because it didn't account for the cloud-specific SSRF attack surface.\n- Control effectiveness — Capital One rated the WAF as highly effective, producing an artificially low residual score, when the WAF was both the attack vector and the failed control; that circular logic is exactly what independent control-effectiveness testing exists to catch.",
          "The aftermath exposed a third failure — monitoring:\n- The OCC fined Capital One $80M and cited multiple risk-management failures, the FTC settlement added $190M, and the CISO resigned within months.\n- The SIEM had actually fired alerts on the anomalous S3 activity during exfiltration, but they weren't investigated promptly — risk that materialized into an incident still wasn't recognized and contained in time.",
          "For auditors, Capital One yields a specific test set for any cloud-operating organization:\n- Does the register explicitly cover cloud attack surfaces — SSRF, IMDS exposure, over-permissioned IAM roles, public S3 buckets?\n- Has the organization run CSPM assessments to confirm configurations match intended architecture, are WAF rules tested against the OWASP Top 10 including SSRF, is metadata-service access restricted at the instance level, and are S3 access controls inventoried and reviewed quarterly?\n- Absence of these from either the risk register or the control library is a finding.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Threat / Vulnerability", sub: "source of risk", type: "attacker" },
          { label: "Inherent Risk Score", sub: "likelihood × impact", type: "system" },
          { label: "Controls Applied", sub: "reduce residual", type: "victim" },
          { label: "Residual vs Appetite", sub: "treat or accept", type: "result" },
        ],
      },
      timeline: [
        { year: 2010, event: "CRISC certification launched by ISACA" },
        { year: 2019, event: "Capital One breach — cloud misconfiguration risk not captured", highlight: true },
        { year: 2020, event: "NIST SP 800-30 Rev 1 — risk assessment guide updated" },
        { year: 2023, event: "SEC cybersecurity rules — material risk disclosure now mandatory" },
      ],
      keyTakeaways: [
        "Inherent risk = likelihood × impact before controls; residual risk = after controls; the gap is control effectiveness",
        "Risk responses: Accept (board-documented), Mitigate (add controls), Transfer (insurance/contract), Avoid (stop the activity)",
        "Risk register must be current — risks not reviewed after significant business changes fail the currency test",
        "Residual risk above appetite requires a documented, board-approved treatment plan with concrete actions and owners",
        "Control effectiveness must be independently assessed — not assumed from the control's existence in policy",
        "Risk appetite must be quantitative — qualitative statements like 'low tolerance' are not auditable thresholds",
        "Risk monitoring must detect when controls fail; Capital One's SIEM fired but nobody investigated",
        "Fourth-party risk (vendor's vendor dependencies) must be captured for critical vendor relationships",
        "Cloud environments require cloud-specific risk categories in the register — generic IT risk taxonomies miss SSRF, IMDS, IAM over-permission",
        "Risk reporting to the board must be in business terms, not raw scores — the board must be able to make governance decisions from the report",
      ],
      references: [
        { title: "CRISC Exam Guide — ISACA", url: "https://www.isaca.org/credentialing/crisc" },
        { title: "NIST SP 800-30 — Guide for Conducting Risk Assessments", url: "https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-02-q1", type: "Core Idea", challenge: "Why controls exist.", text: "What is the relationship between risk and controls?", options: ["Every control exists to mitigate a risk; without the risk, it's just overhead","Controls are random","Risks have no controls","Controls create risk"], correctIndex: 0, explanation: "Controls are justified by the risks they reduce." },
        { id: "audit-02-q2", type: "CRISC", challenge: "What's left over.", text: "What is 'residual risk'?", options: ["The risk remaining after existing controls reduce the inherent risk","Risk before any controls","Risk that can't be measured","A type of audit report"], correctIndex: 0, explanation: "Residual = what remains after controls are applied to inherent risk." },
        { id: "audit-02-q3", type: "CRISC", challenge: "Raw exposure.", text: "How is inherent risk calculated?", options: ["Likelihood × Impact, before any controls are applied","After controls only","By counting employees","Likelihood minus Impact"], correctIndex: 0, explanation: "Inherent risk is raw exposure (L × I) with no controls factored in." },
        { id: "audit-02-q4", type: "Risk Response", challenge: "Spot the fake.", text: "Which is NOT one of the valid risk response options?", options: ["Ignore — defer the decision until the next audit","Avoid","Mitigate","Transfer"], correctIndex: 0, explanation: "The four responses are avoid, mitigate, transfer, accept — 'ignore' isn't one." },
        { id: "audit-02-q5", type: "Risk Appetite", challenge: "When you can't just accept.", text: "Is 'Accept' valid when residual risk exceeds the board-approved risk appetite?", options: ["No — risks above appetite require a board-approved treatment plan","Yes — accept anything","Only on weekends","Only for IT risks"], correctIndex: 0, explanation: "Above-appetite risk can't be unilaterally accepted; it needs board treatment." },
        { id: "audit-02-q6", type: "Real Incident", challenge: "Capital One, 2019.", text: "What did the Capital One breach reveal about risk registers?", options: ["A stale/mis-scored register leaves critical risk treated as acceptable","Cloud is always safe","Encryption is pointless","Risk registers are unnecessary"], correctIndex: 0, explanation: "Misconfiguration risk was under-scored, leaving real exposure unmitigated." },
        { id: "audit-02-q7", type: "Concept", challenge: "Keep it current.", text: "Why must a risk register be kept current?", options: ["Outdated scores hide real exposure and misdirect controls","It looks tidy","Regulators ignore it","It speeds up the network"], correctIndex: 0, explanation: "A stale register creates blind spots where risk is actually critical." },
        { id: "audit-02-q8", type: "Definition", challenge: "Order of operations.", text: "Controls are applied to inherent risk to produce…", options: ["Residual risk","More inherent risk","Risk appetite","A finding"], correctIndex: 0, explanation: "Inherent risk minus the effect of controls = residual risk." },
      ],
    },
    ctf: {
      scenario: "The Federal Reserve's internal audit team has flagged three high-severity items in the risk register. Read each risk file, determine which risk exceeds the board's appetite, and confirm the treatment plan.",
      hint: "Read the risk register, then examine each flagged risk individually.",
      hints: [
        "Start with: cat RISK-REGISTER.txt",
        "Check the appetite threshold: cat BOARD-APPETITE.txt",
        "Read the critical risk: cat risks/R-004.txt",
        "Confirm the treatment: cat risks/TREATMENT-PLAN.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/RISK-REGISTER.txt", value: "FLAG{CR1SC_", label: "Risk Register — Loaded" },
        { trigger: "/risks/R-004.txt", value: "R3S1DU4L_R1SK_", label: "R-004 — Critical Risk Identified" },
        { trigger: "/risks/TREATMENT-PLAN.txt", value: "3XC33DS}", label: "Treatment Plan — Confirmed" },
      ],
      files: {
        "/RISK-REGISTER.txt": [
          "FEDERAL RESERVE — IT RISK REGISTER (EXCERPT)",
          "=============================================",
          "Board Risk Appetite: Residual score ≤ 12",
          "",
          "ID    Threat                    Inherent  Residual  Status",
          "----  ------------------------  --------  --------  ------",
          "R-001 Phishing                     12         6     WITHIN",
          "R-002 Insider threat                10         5     WITHIN",
          "R-003 Third-party API breach        15         9     WITHIN",
          "R-004 Unpatched SWIFT terminals     20        18     EXCEEDS APPETITE",
          "",
          "See risks/ directory for detail. See BOARD-APPETITE.txt for thresholds.",
        ].join("\n"),
        "/BOARD-APPETITE.txt": [
          "BOARD-APPROVED RISK APPETITE STATEMENT",
          "=======================================",
          "Approved: 2026-01-10  Expires: 2027-01-10",
          "",
          "Maximum acceptable residual risk score: 12",
          "Any risk scoring > 12 requires Treatment Plan within 30 days.",
          "Any risk scoring > 16 requires immediate escalation to Audit Committee.",
        ].join("\n"),
        "/risks/R-004.txt": [
          "RISK R-004: UNPATCHED SWIFT TERMINALS",
          "======================================",
          "Threat: Exploitation of CVE-2023-XXXX in SWIFT messaging terminals",
          "Likelihood: 4 (High) — active exploitation in the wild",
          "Impact: 5 (Critical) — direct access to interbank transfers",
          "Inherent Risk: 20",
          "Controls in place: Network segmentation only",
          "Control effectiveness: Low (segmentation bypass known)",
          "Residual Risk: 18  ← EXCEEDS APPETITE (threshold: 12)",
          "Owner: VP Infrastructure",
          "Status: CRITICAL — escalate to Audit Committee",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. Residual risk = inherent risk minus control effectiveness; network segmentation here is rated LOW — so residual stays near 18",
          "  2. Any residual above the board's appetite (12) mandates a documented treatment plan — 'Accept' is not an option here",
          "  3. CRISC risk response: Mitigate (add controls), Transfer (insurance), Avoid (stop activity), or Accept (board approved only)",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
        "/risks/TREATMENT-PLAN.txt": [
          "TREATMENT PLAN — R-004",
          "======================",
          "Response type: MITIGATE",
          "Action 1: Emergency patch deployment — SWIFT terminals — due 2026-05-22",
          "Action 2: Compensating control — application whitelisting — due 2026-05-29",
          "Action 3: Continuous monitoring — IDS alert on SWIFT traffic — due 2026-06-05",
          "Projected residual after treatment: 6 (WITHIN APPETITE)",
          "Approved by: Chief Risk Officer",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "RISK-REGISTER.txt", isDir: false },
          { name: "BOARD-APPETITE.txt", isDir: false },
          { name: "risks", isDir: true },
        ],
        "/risks": [
          { name: "R-004.txt", isDir: false },
          { name: "TREATMENT-PLAN.txt", isDir: false },
        ],
      },
    },
  },

  // ─── audit-03: ITGC ────────────────────────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "New York Stock Exchange", location: "New York, NY", era: "Present Day", emoji: "📊" },
    id: "audit-03",
    order: 3,
    title: "General Controls on the Trading Floor",
    subtitle: "IT General Controls — The Four Pillars",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-03", name: "ITGC Specialist", emoji: "🏗️" },
    challengeType: "ctf",
    info: {
      tagline: "Application controls mean nothing if the general controls beneath them are broken.",
      year: 2002,
      overview: [
        "IT General Controls (ITGCs) are the foundational controls that sit beneath all application-level controls. They are not tied to any single application but apply across the whole IT environment, and the building analogy is exact: a sound floor resting on a cracked foundation is still unsafe. If the ITGCs fail, every application control built on top of them becomes suspect, and the auditor can no longer rely on application output without a great deal of additional compensating work. Four domains make up the foundation. Change Management ensures production changes follow an approved, documented process. Logical Access ensures only authorized users reach systems and data at appropriate privilege. Computer Operations covers reliable running, backups that are performed and tested, and jobs that complete. Program Development ensures new systems are developed, tested, and approved through a defined SDLC. All four appear in every SOX 404 audit, every PCAOB inspection, and every financial-services examination.",
        "ITGC effectiveness governs how much the auditor can trust everything else. A clean ITGC environment lets auditors rely on system-generated reports and automated application controls with minimal additional testing; a failure — especially in change management or logical access — forces substantial expansion of procedures, because the auditor can no longer assume that what the system produces reflects what it is supposed to produce. Findings are then classified by pervasiveness. An isolated deficiency, such as a single unauthorized payroll change, is serious in its own right, but a pervasive one — a change process that routinely bypasses approval — casts doubt across systems and reporting periods at once. Pervasive ITGC failures typically rise to a significant deficiency or material weakness under SOX and require disclosure.",
        "Two structural facts shape every engagement. The first is the accountability chain: SOX Section 404 requires management to assess and attest to the effectiveness of internal control over financial reporting, including the supporting ITGCs, while PCAOB AS 2201 requires external auditors to independently verify that assessment. This two-layer accountability rests on the CEO and CFO personally signing the Section 302 certification, which is why ITGC failures translate into genuine personal legal exposure. The second is scoping: the auditor must identify which systems are 'in scope' — those that process, store, or transmit data flowing into the financial statements, such as the general and subsidiary ledgers, payroll, revenue recognition, and consolidation tools, together with their supporting operating system, database, network, and identity platforms. In the cloud, scope also reaches the platform configuration and the shared-responsibility controls.",
        "A recurring set of findings appears across industries, each one a breakdown that could allow unauthorized changes to, or access of, financial data. In logical access, the classics are terminated employees who still have active accounts and shared privileged accounts that carry no individual accountability. In change management, the recurring failures are developers with production access — a segregation-of-duties violation — and production changes pushed with no approved tickets. And in operations and development, auditors keep finding backups that have never been tested for restorability and new systems deployed with no evidence of security testing. Each is a different door, but all of them open onto the same financial data.",
      ],
      technical: {
        title: "Testing ITGCs: What Auditors Look For",
        body: [
          "Change Management testing starts from the full population of production changes for the period and tests each sampled change:\n- Pull the change-system extract — every ticket with status, dates, developer, approver, affected system, and testing evidence — then sample, or test the full population for critical systems.\n- For each change verify: the ticket opened before the change (not backdated), documented CAB approval with name and date, developer and approver are different people (segregation of duties), test results attached from a non-production environment, a documented rollback plan, and a timely post-implementation review.\n- Emergency changes get extra scrutiny — post-hoc approval within 24–48 hours, genuine urgency rather than convenience, and a rate within limits; above 10% of all changes suggests the emergency path is being used to bypass approval and warrants expanded testing.",
          "Logical Access testing begins from all accounts with access to in-scope systems:\n- For each account verify an approved access request matching the current level, mapping to an active employee (not a terminated worker or contractor), least-privilege consistency with the current role, and completed annual recertification with manager sign-off.\n- Privileged accounts get more: a documented business justification, a named owner, enforced MFA, quarterly activity-log review, and a formal PAM solution where there are multiple admin accounts.",
          "Two more domains round out the operational testing:\n- Computer Operations — for backups, verify jobs run on schedule (job logs), media stored offsite or in separated cloud regions, restoration tested within the past year with documented results, and retention compliant with policy and regulation; unrestored backups are among the most dangerous conditions because failures surface only when the backup is needed.\n- Program Development (SDLC) — for sampled significant projects, verify each phase (requirements, design review, security testing, UAT, formal production approval) was completed and documented; common gaps are security findings not remediated before release, UAT signed off by developers rather than business users, and production deployment bypassing change management.",
          "ITGC conclusions are binary, and remediation must reach root cause:\n- The testing workpaper documents every control, evidence, samples, deviations, and a binary conclusion — effective or not; 'substantially effective' isn't an ITGC conclusion, and missing, degraded, or contradicted evidence means the control fails, which is why ITGC findings carry such downstream weight.\n- Remediation requires process change, not one-time fixes: if five terminated employees had active accounts, deleting them doesn't repair the broken deprovisioning process — auditors require a fixed HR-to-IT workflow, redesigned or automated deprovisioning with mandatory controls, and a look-back review, or the same finding recurs next cycle with escalating consequences.",
        ],
        codeExample: {
          label: "ITGC access review — checking for terminated users with active access",
          code: `# Pull all active AD accounts
Get-ADUser -Filter {Enabled -eq $true} | Select SamAccountName > active_accounts.txt

# Pull HR termination list for the period
# (from HR system export)
Import-Csv terminated_employees.csv | Select EmployeeID, TermDate > terminated.txt

# Compare — any matches = ITGC finding
Compare-Object active_accounts terminated | Where {$_.SideIndicator -eq "=="}
# Output: jsmith terminated 2026-03-15 — still has ACTIVE AD account — FINDING`,
        },
      },
      incident: {
        title: "The MF Global IT Controls Failure (2011)",
        when: "October 2011",
        where: "New York, NY",
        impact: "$1.6B in customer funds missing; firm collapsed; customers made whole only years later",
        body: [
          "MF Global, a major futures broker, collapsed in October 2011 after its systems processed unauthorized transfers of customer segregated funds to cover proprietary trading losses on European sovereign debt:\n- Its ITGCs — specifically change management and logical access — failed to prevent or detect the unauthorized system modifications behind the transfers.\n- It was the eighth-largest US bankruptcy at the time and left customers locked out of their accounts for months.",
          "The change-management failures were systemic and mutually reinforcing:\n- Developers had production access — violating the core segregation-of-duties rule — so code could reach production with no independent review or approval.\n- Change tickets were routinely bypassed for 'urgent' fixes, with the emergency process used so often that auditors later judged it the de facto standard rather than the exception.\n- In effect, change management didn't exist as a meaningful check on production modifications.",
          "Logical access failures compounded the breakdown:\n- Access reviews hadn't been done in over a year, so the basic question — does everyone with access need it? — couldn't be answered from evidence.\n- Service accounts had excessive privileges and no documented owners, making it impossible to tell after the fact whether system-generated transactions were authorized.\n- The trustee found the customer-fund transfers ran through treasury systems using access and functionality that should have been restricted — under functioning ITGCs they'd have been prevented or detected within hours rather than after collapse.",
          "For auditors, MF Global shows that ITGC failures compound rather than add:\n- Each failure — developer production access, bypassed change tickets, overdue access reviews — is significant alone; together they leave the environment essentially uncontrolled.\n- The CISA-curriculum lesson is that ITGC failures are multiplicative, not additive: three deficiencies don't triple normal risk, they create an environment where no application control can be trusted, since any one could have corrupted the others' operation — so auditors must test all four domains, and a clean change-management program does not compensate for failed logical access.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Change Management", sub: "approved changes only", type: "attacker" },
          { label: "Logical Access", sub: "least privilege", type: "system" },
          { label: "Computer Operations", sub: "backups + reliability", type: "victim" },
          { label: "Program Development", sub: "SDLC controls", type: "result" },
        ],
      },
      timeline: [
        { year: 2002, event: "SOX enacted — Section 404 makes ITGCs mandatory for public companies" },
        { year: 2007, event: "PCAOB AS 2201 — auditing standard for internal controls over financial reporting" },
        { year: 2011, event: "MF Global collapse — ITGC failures enable $1.6B customer fund misuse", highlight: true },
        { year: 2023, event: "SEC cyber rules — ITGCs now include cybersecurity incident reporting controls" },
      ],
      keyTakeaways: [
        "The four ITGC pillars: Change Management, Logical Access, Computer Operations, Program Development — all four must be effective",
        "ITGC failures are pervasive — they invalidate reliance on ALL application controls built on the failed foundation",
        "SOX 404 audits spend the majority of IT audit time on ITGCs for financial systems; ITGC failures require expanded audit procedures",
        "Terminated employees with active accounts is among the most common ITGC finding — and the most dangerous in privileged-access environments",
        "Segregation of duties: the developer who writes code and the approver who authorizes production deployment must be different people",
        "Emergency change rate above 10% is a red flag — investigate whether emergency process is being used to bypass standard controls",
        "Unrestored backups are a false control — backups must be tested for recoverability annually with documented results",
        "ITGC remediation requires process change, not just one-time fixes — root cause analysis is mandatory",
        "PCAOB AS 2201 requires external auditors to independently verify management's ICFR assessment — management's self-certification is not sufficient",
        "Shared privileged accounts prevent forensic attribution — every admin action must be traceable to a named individual",
      ],
      references: [
        { title: "PCAOB AS 2201 — Auditing Internal Control", url: "https://pcaobus.org/Standards/Auditing/Pages/AS2201.aspx" },
        { title: "ISACA ITGC Audit Program", url: "https://www.isaca.org/resources/isaca-journal/issues/2016/volume-4/it-general-controls" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-03-q1", type: "Core Idea", challenge: "Foundations first.", text: "How do IT General Controls (ITGCs) differ from application controls?", options: ["ITGCs apply across the whole IT environment and underpin all application controls","ITGCs are app-specific","They are identical","ITGCs only cover printers"], correctIndex: 0, explanation: "Application controls mean nothing if the ITGCs beneath them are broken." },
        { id: "audit-03-q2", type: "Pervasiveness", challenge: "One crack, many doubts.", text: "Why is a single ITGC failure (e.g., emergency changes bypassing approval) so serious?", options: ["It's pervasive — it casts doubt on every report the affected system produced","It only affects one record","It's a minor cosmetic issue","It speeds up audits"], correctIndex: 0, explanation: "ITGC failures invalidate reliance on all application controls in that system." },
        { id: "audit-03-q3", type: "ITGC Pillars", challenge: "Who gets in.", text: "Which ITGC pillar ensures only authorized users can access systems and data?", options: ["Logical Access — least privilege and individual accountability","Physical HVAC","Network speed","Marketing"], correctIndex: 0, explanation: "Logical Access enforces who can reach systems, with accountability." },
        { id: "audit-03-q4", type: "SoD", challenge: "Marking your own homework.", text: "Which is a Segregation of Duties (SoD) violation in change management?", options: ["The developer who wrote the code also approved their own change ticket","Two different people review a change","A CAB approves a change","An auditor reads logs"], correctIndex: 0, explanation: "Self-approval with no independent review is a classic SoD violation." },
        { id: "audit-03-q5", type: "Real Incident", challenge: "MF Global, 2011.", text: "What did the MF Global collapse demonstrate about ITGCs?", options: ["Multiple simultaneous ITGC failures together created the permissive environment for fraud","A single access failure alone caused it","It had no control issues","It was purely market risk"], correctIndex: 0, explanation: "It was several concurrent ITGC failures, not one isolated gap." },
        { id: "audit-03-q6", type: "Reliance", challenge: "Why ITGCs matter to financials.", text: "Why do auditors care so much about ITGCs in a financial audit?", options: ["If ITGCs fail, they can't rely on the system's financial data","They don't care about ITGCs","ITGCs set prices","ITGCs are optional"], correctIndex: 0, explanation: "Reliable financial reporting depends on sound general controls." },
        { id: "audit-03-q7", type: "Definition", challenge: "Name the layer.", text: "Logical access, change management, and operations are examples of…", options: ["IT General Controls","Application controls","Marketing controls","Physical locks only"], correctIndex: 0, explanation: "These environment-wide controls are ITGCs." },
        { id: "audit-03-q8", type: "Concept", challenge: "Build order.", text: "Why test ITGCs before relying on application controls?", options: ["Application controls are only trustworthy if the general controls beneath them hold","App controls come first","ITGCs don't affect apps","It's faster to skip them"], correctIndex: 0, explanation: "Weak ITGCs undermine every application control above them." },
      ],
    },
    ctf: {
      scenario: "You are auditing the NYSE trading platform's ITGCs. The change management log has been pulled for Q1. Find the unauthorized production change that bypassed the approval process.",
      hint: "Read the change log and compare against the approved changes list.",
      hints: [
        "Read the change log: cat CHANGE-LOG.txt",
        "Check approved tickets: cat APPROVED-TICKETS.txt",
        "Identify the anomaly: cat findings/UNAUTHORIZED-CHANGE.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/CHANGE-LOG.txt", value: "FLAG{1TGC_", label: "Change Log — Loaded" },
        { trigger: "/APPROVED-TICKETS.txt", value: "CH4NG3_BYPASSS_", label: "Approved Tickets — Compared" },
        { trigger: "/findings/UNAUTHORIZED-CHANGE.txt", value: "F1ND1NG}", label: "Finding — Unauthorized Change Confirmed" },
      ],
      files: {
        "/CHANGE-LOG.txt": [
          "NYSE TRADING PLATFORM — Q1 PRODUCTION CHANGE LOG",
          "==================================================",
          "CHG-1001  2026-01-08  jsmith    Patch kernel 5.15 → 5.17       APPROVED",
          "CHG-1002  2026-01-22  rjones    Update firewall ruleset v2.1    APPROVED",
          "CHG-1003  2026-02-05  jsmith    Hotfix order-matching engine    NO TICKET",
          "CHG-1004  2026-02-19  alee      TLS cert renewal prod servers   APPROVED",
          "CHG-1005  2026-03-03  rjones    DB index rebuild — trading DB   APPROVED",
          "",
          "5 changes recorded. Cross-reference APPROVED-TICKETS.txt.",
        ].join("\n"),
        "/APPROVED-TICKETS.txt": [
          "APPROVED CHANGE TICKETS — Q1 2026",
          "==================================",
          "CHG-1001  APPROVED  2026-01-05  Approver: T.Williams  Dev: jsmith",
          "CHG-1002  APPROVED  2026-01-19  Approver: T.Williams  Dev: rjones",
          "CHG-1004  APPROVED  2026-02-16  Approver: M.Chen      Dev: alee",
          "CHG-1005  APPROVED  2026-02-28  Approver: T.Williams  Dev: rjones",
          "",
          "NOTE: CHG-1003 has NO corresponding approved ticket.",
        ].join("\n"),
        "/findings/UNAUTHORIZED-CHANGE.txt": [
          "ITGC FINDING — CHANGE MANAGEMENT",
          "=================================",
          "Finding: CHG-1003 applied to production on 2026-02-05 with NO approved ticket.",
          "Developer: jsmith (same developer and approver — segregation of duties violation)",
          "System affected: Order-matching engine (critical financial system)",
          "Risk: Unauthorized code in production; financial reports may be unreliable.",
          "Rating: HIGH — pervasive ITGC deficiency",
          "Required action: All Q1 financial reports require additional procedures.",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. ITGC failures are 'pervasive' — they invalidate reliance on ALL application controls in the affected system",
          "  2. Segregation of Duties (SoD) requires the developer who writes code and the approver who authorizes it to be different people",
          "  3. An unauthorized change to a financial system triggers SOX 404 additional procedures — the auditor cannot simply rely on system output",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "CHANGE-LOG.txt", isDir: false },
          { name: "APPROVED-TICKETS.txt", isDir: false },
          { name: "findings", isDir: true },
        ],
        "/findings": [{ name: "UNAUTHORIZED-CHANGE.txt", isDir: false }],
      },
    },
  },

  // ─── audit-04: Access Control ──────────────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "CIA Headquarters", location: "Langley, Virginia", era: "Present Day", emoji: "🔐" },
    id: "audit-04",
    order: 4,
    title: "Need to Know",
    subtitle: "Access Control Audit — Least Privilege and Recertification",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-04", name: "Access Auditor", emoji: "🗝️" },
    challengeType: "ctf",
    info: {
      tagline: "Access granted and never reviewed is access permanently granted — regardless of role changes.",
      year: 2013,
      overview: [
        "Access control auditing verifies that least privilege actually holds across the environment — that every user, whether employee, contractor, or service account, has exactly the permissions their documented job requires and no more. It sounds simple, but it is hard to maintain in practice: systems accumulate users, people change roles, contractors finish engagements, and business units reorganize. Through all of that churn, access granted for a purpose that no longer exists persists unless an active process removes it. That slow accumulation is permission creep, and finding and remediating it is the reason access audits exist.",
        "The control objectives come from COBIT APO13 and DSS05, aligned with the NIST SP 800-53 Access Control (AC) family, and they set four firm expectations. Provisioning must follow an approved request with a documented business justification. Access must be reviewed and recertified at least annually, with managers confirming that each person's access remains appropriate. Terminated employees must be deprovisioned within 24 hours for standard accounts and immediately — within roughly four hours — for privileged ones. And privileged access must be minimized, documented with justification, protected with MFA, and subject to enhanced monitoring.",
        "Access findings are the most common in all of IT audit, and the most security-critical of them concern privileged access. They range from the merely administrative — missing recertification evidence — to the critical, such as a terminated employee with an active privileged account, and they almost always reflect a coordination problem across HR, IT, and business management. For that reason the auditor tests the process, not just the current access list, because a clean list produced by a broken process will simply fail again next cycle. Privileged Access Management (PAM) is the discipline aimed at the accounts that bypass most application controls — domain and database administrators, root, elevated service accounts, and broad cloud IAM roles. Its controls include just-in-time access that expires automatically, dedicated privileged access workstations (PAWs), session recording, and regular review of privileged rights against actual job requirements.",
        "Three constructs complete the picture. Role-based access control (RBAC) attaches rights to roles rather than to individuals, so assigning the 'Accounts Payable Clerk' role configures access automatically and dramatically simplifies provisioning, deprovisioning, and recertification; auditors verify that role definitions are approved, that assignments match job descriptions, and that no user holds conflicting roles. Segregation-of-duties (SoD) conflicts arise when a single user spans incompatible functions — creating a vendor and approving its payments, initiating and approving wire transfers, or posting and approving journal entries — each of which creates a fraud opportunity, so auditors test access against a conflict matrix. Finally, service accounts are non-human identities for applications and scheduled jobs, and they frequently hold elevated, shared, embedded credentials that no human reviews from one day to the next; auditors inventory them and confirm a documented owner, scheduled credential rotation, interactive logon disabled where it is not needed, and tightly limited permissions.",
      ],
      technical: {
        title: "Access Review Testing Approach",
        body: [
          "Access review testing starts from the complete user-access list of each in-scope system:\n- Extract from Active Directory, LDAP, or the application's user module, including username, status, role/permission level, last logon, last password change, creation date, and manager — this is the working population.\n- For each account, first verify an approved access request on file (service-desk ticket, manager email, or governance workflow) documenting requester, access, justification, and approver; requests that can't be found are provisioning failures.\n- Second, verify the account maps to an active employee by comparing against the HR roster and contractor register — anyone on neither list is an orphaned account.",
          "The next two checks catch permission creep and missing oversight:\n- Third, verify the access level matches the user's current role using the org chart or HR title against the role access matrix — users who changed roles may carry rights from prior roles, which is permission creep.\n- Fourth, verify annual recertification was completed: pull the latest cycle's records and confirm a manager certified each user within the required timeframe, since missing recertification evidence is a gap even if the underlying access is appropriate.",
          "Privileged accounts and the workpaper get more intensive treatment:\n- For each admin or elevated account, verify a documented justification naming the functions requiring privilege, a named owner who reviewed it in the latest cycle, enforced MFA (its absence is a critical finding almost everywhere), session logging, and evidence someone actually reviewed those logs for anomalies within the past quarter.\n- The workpaper records population size, sample, items tested, evidence, deviations, and a conclusion, with deviations classed critical (terminated user with active privileged access, shared admin without MFA), high (missing privileged recertification, SoD conflict in a financial system), or medium (missing standard-user recertification, access slightly above role) — each needing a management response and tracked remediation.",
          "Two higher-level shifts define modern access testing:\n- IGA platforms (SailPoint, Saviynt, Oracle Identity Governance) pull access data, compare it to HR, flag SoD conflicts, and run recertification campaigns — so when one exists, auditors test its configuration (all in-scope systems connected? conflict rules complete and current? campaigns completed on time?) rather than manually comparing lists.\n- The most important output is the pattern, not the individual findings: five terminated users across five systems means a systemic deprovisioning failure, fifteen SoD conflicts mean the role design was never reviewed, twenty missing recertifications mean the campaign was mis-administered — and patterns require systemic remediation (process redesign, automation, org change), so reporting only individual findings gives incomplete assurance.",
        ],
        codeExample: {
          label: "Access review — identifying accounts missing recertification",
          code: `# Pull all accounts with access to classified system
SELECT username, role, last_recert_date, manager
FROM access_control
WHERE system = 'CLASSIFIED-DB'
ORDER BY last_recert_date ASC;

-- Results:
-- jsmith     ADMIN    2024-11-01   T.Williams  ← 18 months ago - OVERDUE
-- rjones     READ     2025-11-15   M.Chen      ← 6 months ago - OK
-- slee       ADMIN    NULL         NULL         ← NO RECERT EVER - FINDING
-- [term]     WRITE    2025-03-01   [TERM]       ← TERMINATED USER - CRITICAL`,
        },
      },
      incident: {
        title: "The Edward Snowden Access Control Failure (2013)",
        when: "2013",
        where: "NSA / Booz Allen Hamilton",
        impact: "1.7M classified documents exfiltrated; most significant intelligence leak in US history",
        body: [
          "Edward Snowden was a Booz Allen Hamilton contractor working as an NSA system administrator when he exfiltrated roughly 1.7 million classified documents in 2012–2013:\n- The enabling failure wasn't a technical vulnerability but a breakdown of the access-management processes that should have stopped a sysadmin from accumulating access far beyond his job.\n- He requested and received access across multiple NSA programs, and the access-review processes never identified or challenged the accumulation.",
          "The core failure was conflating administrative access with content access:\n- Least privilege requires each grant to be justified by current job needs — Snowden's role required admin access to infrastructure (OS, network, storage), not substantive access to the intelligence products stored on it.\n- The NSA's model let administrative access to infrastructure confer access to content, and post-incident reviews found contractors in similar roles held broad, poorly defined entitlements that recertification never challenged.",
          "The recertification failure was about cumulative scope, not individual systems:\n- If reviews happened for contractor accounts at all, they asked whether the user still needed each system — not whether the total scope of access made sense for the role.\n- That distinction is critical: a user can legitimately 'need access' to dozens of systems individually while the combination creates a capability no single person should hold.",
          "Snowden reshaped access-control standards and the auditor's test set:\n- It accelerated User and Entity Behavior Analytics (UEBA) — baselining each user's normal access and alerting on deviation, so a sysadmin suddenly reading thousands of intelligence reports gets flagged — and forced insider-threat controls (access segmentation, activity monitoring, DLP, behavioral analytics) into audits that had focused mainly on external threats.\n- The resulting tests for any sensitive-data environment: does the model separate administrative from content access, are entitlements reviewed for cumulative scope, are contractor accounts reviewed at least as often as employees', and is UEBA deployed on the most sensitive systems?",
        ],
      },
      diagram: {
        nodes: [
          { label: "Access Request", sub: "role-based justification", type: "attacker" },
          { label: "Provisioning", sub: "least privilege grant", type: "system" },
          { label: "Annual Recertification", sub: "manager confirms need", type: "victim" },
          { label: "Termination Process", sub: "same-day deprovisioning", type: "result" },
        ],
      },
      timeline: [
        { year: 2002, event: "SOX Section 404 — access controls become mandatory audit scope" },
        { year: 2013, event: "Snowden — contractor privilege accumulation exposes access control gaps", highlight: true },
        { year: 2016, event: "NIST SP 800-53 Rev 4 — privileged account management controls formalized" },
        { year: 2020, event: "Zero Trust architecture — assume breach, verify every access request" },
      ],
      keyTakeaways: [
        "Least privilege: every user has exactly what they need for their current role — no more, no historical accumulation",
        "Recertification must occur at least annually — missing evidence is a finding regardless of whether underlying access is appropriate",
        "Privileged accounts must be deprovisioned immediately on termination — 24 hours is the outer limit, not the target",
        "Permission creep occurs when access granted for a prior role is never removed — cumulative access must be reviewed, not just individual grants",
        "Segregation of duties conflicts must be identified through a conflict matrix — financial systems especially require create/approve separation",
        "Service accounts require documented owners, restricted interactive logon, scheduled credential rotation, and minimal privilege scope",
        "Shared privileged accounts are a critical finding — every privileged action must be attributable to a named individual",
        "IGA platforms automate access review campaigns but must be configured correctly — auditors test the platform configuration, not just the output",
        "Behavioral analytics (UEBA) is the detective control that compensates for access control gaps — test that it is deployed and tuned",
        "Contractor access requires the same — or more frequent — review cadence as employee access, given bounded engagement scope",
      ],
      references: [
        { title: "NIST SP 800-53 — Access Control Family", url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" },
        { title: "ISACA Access Control Audit Program", url: "https://www.isaca.org/resources/isaca-journal" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-04-q1", type: "Core Idea", challenge: "Just enough access.", text: "What does the principle of least privilege mean?", options: ["Each user has exactly the permissions needed for their job, and nothing more","Everyone is an admin","No one has access","Access never changes"], correctIndex: 0, explanation: "Least privilege minimizes what any account can do or expose." },
        { id: "audit-04-q2", type: "Recertification", challenge: "Review the access.", text: "How often must user access be reviewed/recertified under ISACA standards?", options: ["At least annually for all in-scope accounts","Never","Only when hacked","Every five years"], correctIndex: 0, explanation: "Annual recertification is mandatory — it's not optional for non-privileged accounts." },
        { id: "audit-04-q3", type: "Deprovisioning", challenge: "The clock on termination.", text: "How quickly must privileged accounts be deprovisioned when an employee is terminated?", options: ["Within 24 hours","Within 90 days","At the next annual review","Never"], correctIndex: 0, explanation: "Privileged access must be removed within 24 hours of termination." },
        { id: "audit-04-q4", type: "Real Incident", challenge: "Snowden, 2013.", text: "Which access-control failure does the Snowden case illustrate?", options: ["Privilege accumulation — access never removed after role changes — plus weak recertification","A zero-day exploit","A phishing email","A DDoS attack"], correctIndex: 0, explanation: "Accumulated, un-reviewed access enabled mass data access." },
        { id: "audit-04-q5", type: "Shared Accounts", challenge: "Who did it?", text: "Is a shared admin account used by four people acceptable if the password is complex and rotated?", options: ["No — shared accounts provide no individual accountability or forensic attribution","Yes — complexity is enough","Only for IT staff","Only on weekends"], correctIndex: 0, explanation: "Shared accounts destroy accountability regardless of password strength." },
        { id: "audit-04-q6", type: "Concept", challenge: "Access creep.", text: "Why is 'access granted and never reviewed' dangerous?", options: ["It becomes permanent access regardless of role changes","It expires automatically","It improves security","It saves money"], correctIndex: 0, explanation: "Without review, stale access accumulates into excess privilege." },
        { id: "audit-04-q7", type: "Accountability", challenge: "Individual identity.", text: "Why does each user need their own account?", options: ["So actions can be attributed to an individual for forensics and accountability","To use more licenses","To slow logins","It's not required"], correctIndex: 0, explanation: "Individual accounts enable attribution; shared ones don't." },
        { id: "audit-04-q8", type: "Definition", challenge: "Name the practice.", text: "Periodically confirming each user still needs their access is called…", options: ["Access recertification (review)","Encryption","Patching","Tokenization"], correctIndex: 0, explanation: "Recertification re-validates access against current job needs." },
      ],
    },
    ctf: {
      scenario: "You are auditing access controls on a classified intelligence system. Three findings have been flagged in the access review file. Identify the most critical violation and confirm the remediation required.",
      hint: "Read ACCESS-REVIEW.txt, then examine the specific finding files.",
      hints: [
        "Start: cat ACCESS-REVIEW.txt",
        "Read terminated user finding: cat findings/TERM-USER.txt",
        "Read privileged account finding: cat findings/PRIV-ACCOUNT.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/ACCESS-REVIEW.txt", value: "FLAG{4CC3SS_", label: "Access Review — Loaded" },
        { trigger: "/findings/TERM-USER.txt", value: "CTR1L_T3RM_US3R_", label: "Terminated User — Critical Finding" },
        { trigger: "/findings/PRIV-ACCOUNT.txt", value: "CR1T1C4L}", label: "Privileged Account — Confirmed" },
      ],
      files: {
        "/ACCESS-REVIEW.txt": [
          "ACCESS CONTROL REVIEW — CLASSIFIED SYSTEM",
          "==========================================",
          "Review period: 2026-Q1",
          "Reviewer: External Auditor",
          "",
          "Total accounts reviewed: 47",
          "Findings:",
          "  FINDING-01: Terminated employee account still active (CRITICAL)",
          "  FINDING-02: Shared admin account — no individual accountability (HIGH)",
          "  FINDING-03: 12 accounts missing annual recertification (MEDIUM)",
          "",
          "Detail in findings/ directory.",
        ].join("\n"),
        "/findings/TERM-USER.txt": [
          "FINDING-01: TERMINATED USER — ACTIVE ACCOUNT",
          "=============================================",
          "Username: m.harris",
          "Termination date: 2025-11-30",
          "Account status: ACTIVE as of 2026-05-15 (167 days post-termination)",
          "Access level: READ/WRITE to CLASSIFIED-DB",
          "Last logon: 2026-03-12 (103 days after termination)",
          "",
          "CRITICAL: Account used post-termination. Potential unauthorized access.",
          "Required action: Immediate disable + forensic review of all post-term activity.",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. Privileged accounts must be deprovisioned within 24 hours of termination — 167 days is a critical ITGC failure",
          "  2. Post-termination logon activity is a potential unauthorized access event requiring forensic investigation, not just account deletion",
          "  3. The Snowden case showed that privilege accumulation over time — never removed — is the root cause; recertification is the preventive control",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
        "/findings/PRIV-ACCOUNT.txt": [
          "FINDING-02: SHARED ADMIN ACCOUNT",
          "=================================",
          "Account: svc_admin_shared",
          "Users with credentials: 4 analysts (no individual accountability)",
          "Last password change: 2024-06-01 (23 months ago)",
          "MFA enforced: NO",
          "",
          "HIGH: Shared accounts prevent forensic attribution.",
          "Required action: Replace with individual named admin accounts + MFA.",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "ACCESS-REVIEW.txt", isDir: false }, { name: "findings", isDir: true }],
        "/findings": [
          { name: "TERM-USER.txt", isDir: false },
          { name: "PRIV-ACCOUNT.txt", isDir: false },
        ],
      },
    },
  },

  // ─── audit-05: Change Management ──────────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "NASA Johnson Space Center", location: "Houston, Texas", era: "Present Day", emoji: "🚀" },
    id: "audit-05",
    order: 5,
    title: "No Unauthorized Changes",
    subtitle: "Change Management Controls — ITIL and CAB Process",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-05", name: "Change Manager", emoji: "🔄" },
    challengeType: "ctf",
    info: {
      tagline: "Every production change is a controlled experiment. Without the control, you are flying blind.",
      year: 1986,
      overview: [
        "Change management ensures that every modification to production passes through a documented, approved, and tested process before it ships. It is not bureaucracy for its own sake; it is the control that prevents accidental outages, unauthorized code deployment, and security vulnerabilities from entering production. ITIL 4 sorts changes into three types by risk: Standard changes are pre-approved, low-risk, and routine; Normal changes require Change Advisory Board review; and Emergency changes follow an expedited approval path for critical fixes, with mandatory post-hoc documentation that closes the loop after the fact.",
        "The Change Advisory Board (CAB) reviews and approves Normal changes, and the auditor tests the process against what an effective CAB should enforce. A real CAB is cross-functional — IT management, security, operations, application owners, and business stakeholders — and it assesses risk, confirms testing is complete, verifies an executable rollback plan and an appropriate maintenance window, and then formally authorizes the change; the test of its effectiveness is whether it actually challenges assumptions and rejects unacceptable risk rather than rubber-stamping. For each sampled change, the auditor verifies five elements: an approved ticket opened before the change rather than backdated, documented CAB approval with a name and date, a developer and approver who are different people, test results attached from a non-production environment, and a documented, feasible rollback plan.",
        "Two process safeguards are the common failure points. The emergency path is a necessary safety valve, but it is frequently abused: genuine emergencies — an actively exploited zero-day, a production outage — justify it, but an emergency rate above 10 to 15 percent triggers an investigation into whether developers, or rubber-stamping managers, are routing around CAB review under the guise of urgency. Maintenance windows are the approved low-traffic deployment periods, overnight or on weekends, when the impact of a failure is minimized and staff are watching for it. A change deployed outside the window without emergency authorization is a finding regardless of how technically sound it is, and auditors surface it simply by comparing deployment timestamps against the window schedule.",
        "Two modern concerns close the loop. DevOps and CI/CD strain the human-review model, so ITIL 4 introduces the concept of the 'change authority,' which for low-risk, well-tested changes can be an automated system rather than a board. Here the auditor tests whether the pipeline itself constitutes sufficient control — enforced automated testing, required passing security scans, an immutable deployment audit log, and a halt-on-failure mechanism — because a well-configured pipeline can be more reliable than a manual CAB, but only if its configuration is itself audited. The post-implementation review (PIR) then documents whether the change met its purpose, any side effects, the lessons learned, and the follow-ups. Auditors verify that PIRs were completed on time, typically within five business days, and that issues were tracked to resolution; PIRs that consistently surface unexpected side effects point to a deeper problem — test environments that do not represent production.",
      ],
      technical: {
        title: "Change Management Testing Checklist",
        body: [
          "For each sampled change, the auditor works a structured checklist:\n- Step one — verify the ticket exists and opened before the change by comparing the ticket-creation timestamp to the deployment log; a backdated ticket (created after deployment) is a finding, signaling the control is documented after the fact rather than executed.\n- Step two — verify CAB approval from the meeting minutes or workflow record, confirming the change was reviewed, named approvers signed off, and the approval predates deployment.",
          "The next two steps test independence and proof of testing:\n- Step three — verify segregation of duties: ideally developer, approver, and deployer are three different people, at minimum developer ≠ approver; when the same person appears in both roles the control has failed, because there's no independent check on the change.\n- Step four — verify test evidence: documentation should name the test environment, the test cases executed, each result, who tested, and a business or application-owner sign-off confirming user acceptance.",
          "The final steps cover reversibility and review, and several red flags signal systemic failure:\n- Step five — verify the rollback plan is documented in the ticket before approval, executable within the window, and reviewed by someone able to judge feasibility; 'restore from backup' is insufficient unless it names which backup, where, how long restoration takes, and acceptable data loss (database rollbacks usually include reversing SQL, app deployments name the prior version and steps).\n- Step six — verify a PIR exists within ~5 business days addressing whether the change succeeded, what went wrong, and follow-ups.\n- Red flags: an emergency rate above 10%, out-of-window deployments without emergency designation, developer-equals-approver changes (the tool should block self-approval), and test evidence that's empty or copied unchanged from prior changes.",
          "Three contextual practices shape the engagement:\n- Sampling — under 50 changes, test the full population; 50–250, sample 25–40 at 95% confidence; above 250, use attribute-sampling tables, always deliberately including the highest-risk changes (core financial systems, security infrastructure), management-flagged exceptions, and all emergency changes.\n- Cloud — Infrastructure-as-Code changes (Terraform, CloudFormation, Ansible) need change control too: a documented pull-request review can serve as CAB approval, changes must flow through the pipeline rather than manual console edits that bypass controls, and the person writing the IaC must differ from the one merging it.\n- Change freeze — during quarter-end close, major migrations, or regulatory exams, non-emergency changes are prohibited; auditors verify the freeze was declared, the dates match the triggering events, and no normal changes deployed during it, since freeze violations introduce instability exactly when reliability matters most.",
        ],
        codeExample: {
          label: "Querying change tickets to find SoD violations",
          code: `SELECT
  change_id,
  developer,
  approver,
  change_date,
  CASE WHEN developer = approver THEN 'SOD VIOLATION' ELSE 'OK' END as sod_status
FROM change_tickets
WHERE change_date BETWEEN '2026-01-01' AND '2026-03-31'
  AND environment = 'PRODUCTION'
ORDER BY change_date;

-- Output:
-- CHG-1001  jsmith    t.williams  2026-01-08  OK
-- CHG-1003  jsmith    jsmith      2026-02-05  SOD VIOLATION  ← FINDING`,
        },
      },
      incident: {
        title: "The Knight Capital Flash Crash (2012)",
        when: "August 1, 2012",
        where: "NYSE, New York",
        impact: "$440M loss in 45 minutes; firm collapsed; acquired for $1.4B at distressed price",
        body: [
          "Knight Capital's August 1, 2012 incident is the most dramatic change-management failure in financial-services history:\n- Knight deployed the new Power Peg market-making algorithm by manually copying it to eight of its nine production trading servers — the ninth was missed.\n- The ninth kept running legacy SMARS (Smart Market Access Routing System) code, activated by a flag Power Peg had repurposed, so when NYSE opened at 9:30 AM eight servers ran Power Peg correctly while the ninth executed a 1997-era 'buy high, sell low' strategy at modern algorithmic speed.",
          "Within 45 minutes the damage was catastrophic and traceable to multiple compounding gaps:\n- Knight executed ~4 million trades in 154 stocks, built a $7 billion position buying high and selling low, and lost $440 million in under an hour.\n- The failures: no deployment-verification step confirming the software installed on all nine servers, no monitoring alert for one server trading differently from the others, and no kill switch to halt all trading instantly when the anomaly appeared.",
          "The post-incident SEC investigation showed the risk was known and the response was missing:\n- Knight had documented the SMARS legacy code and the repurposed flag internally — what failed was the process that should have ensured a complete deployment before market open and the monitoring that should have caught it in seconds.\n- Knight also lacked an adequate rollback plan: when the problem was found, there was no rapid way to revert all servers to the prior version simultaneously, so by the time manual intervention stopped trading the losses were realized.",
          "Knight Capital is now required reading in ITIL and CISA curricula as proof that change controls are financial-survival controls:\n- A pre-deployment checklist confirming all nine servers would have cost ten minutes; not having it cost $440 million in 45 minutes and the firm's independence — Knight was acquired by GETCO within months at a distressed valuation, fined $12M by the SEC, and the case set precedent for scrutiny of algorithmic-trading change management.\n- The auditor's requirement for any automated or algorithmic system: deployment verification must automatically confirm the new code runs correctly on every instance before live processing, and the absence of circuit breakers that halt processing on deviation is itself a change-management and computer-operations finding.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Change Request", sub: "developer submits RFC", type: "attacker" },
          { label: "CAB Review", sub: "risk + approval", type: "system" },
          { label: "Test Environment", sub: "evidence required", type: "victim" },
          { label: "Production Deploy", sub: "within window + rollback", type: "result" },
        ],
      },
      timeline: [
        { year: 1986, event: "Challenger disaster — change management failures in O-ring decision" },
        { year: 2000, event: "ITIL v2 — change management process formalized for IT" },
        { year: 2012, event: "Knight Capital — $440M loss from failed software deployment", highlight: true },
        { year: 2019, event: "ITIL 4 — CAB replaced by 'change authority' for agile environments" },
      ],
      keyTakeaways: [
        "Three ITIL change types: Standard (pre-approved), Normal (CAB review), Emergency (expedited + mandatory post-hoc documentation)",
        "Segregation of duties: developer, approver, and deployer should be three different people — developer and approver is the minimum separation",
        "Emergency change rate above 10% is a red flag — investigate whether the emergency designation is being used to bypass CAB review",
        "Rollback plan is mandatory before CAB approval — if you cannot describe how to undo the change, the change is not approved",
        "Maintenance window violations are findings regardless of change content — process discipline matters independently of technical outcome",
        "Pre-deployment verification must confirm all instances received the new code — Knight Capital lost $440M because one of nine servers was missed",
        "Post-implementation review closes the loop — PIR evidence within 5 business days is an ITGC requirement",
        "CI/CD pipelines can function as automated change controls if properly configured — auditors test pipeline configuration, not just pipeline output",
        "Change freezes during high-risk periods must be enforced — violations during quarter-end or regulatory examinations are significant findings",
        "IaC changes (Terraform, CloudFormation) must be subject to change management controls — console changes bypass all pipeline controls",
      ],
      references: [
        { title: "ITIL 4 — Change Enablement Practice", url: "https://www.axelos.com/certifications/itil-service-management" },
        { title: "Knight Capital Post-Incident SEC Filing", url: "https://www.sec.gov/litigation/admin/2013/34-70694.pdf" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-05-q1", type: "Core Idea", challenge: "Controlled experiments.", text: "Why is change management a control?", options: ["Every production change is a controlled experiment — without control you're flying blind","Changes never fail","It slows developers for no reason","It only matters for hardware"], correctIndex: 0, explanation: "Controlled change reduces the risk that a deployment breaks production." },
        { id: "audit-05-q2", type: "ITIL", challenge: "Who reviews it.", text: "Which ITIL change type requires Change Advisory Board (CAB) review before production?", options: ["Normal changes","Standard (pre-approved) changes","Trivial changes","No changes need review"], correctIndex: 0, explanation: "Normal changes go through CAB to assess risk and confirm testing." },
        { id: "audit-05-q3", type: "Red Flag", challenge: "Too many 'emergencies'.", text: "Why is an emergency-change rate above ~10% a red flag?", options: ["It signals teams are bypassing normal controls by labeling changes 'emergency'","Emergencies are always fine","It means the system is healthy","It speeds approvals legitimately"], correctIndex: 0, explanation: "High emergency rates indicate process circumvention, not real emergencies." },
        { id: "audit-05-q4", type: "Real Incident", challenge: "Knight Capital, 2012.", text: "What change-management failure caused Knight Capital's $440M loss?", options: ["A deployment not verified across all servers, with no automated rollback","A stolen password","A DDoS attack","A phishing email"], correctIndex: 0, explanation: "A partial deployment caused erroneous trades with no rollback to stop them." },
        { id: "audit-05-q5", type: "Rollback", challenge: "Undo or don't ship.", text: "When is a rollback plan required?", options: ["For all production changes — if you can't undo it, you can't approve it","Only for critical systems","Never","Only after a failure"], correctIndex: 0, explanation: "A rollback plan is mandatory for every production change." },
        { id: "audit-05-q6", type: "Counting Violations", challenge: "Two distinct failures.", text: "A change deployed out-of-window by the same person who developed it represents how many control violations?", options: ["Two — a Segregation of Duties failure AND an out-of-window deployment","One","Zero","Four"], correctIndex: 0, explanation: "SoD failure and out-of-window deployment are two separate violations." },
        { id: "audit-05-q7", type: "Maintenance Window", challenge: "When changes happen.", text: "Deploying outside the approved maintenance window is…", options: ["A control violation — changes must occur in the approved window","Encouraged for speed","Irrelevant","Only an issue if it fails"], correctIndex: 0, explanation: "Out-of-window deployment bypasses the agreed change control." },
        { id: "audit-05-q8", type: "Concept", challenge: "Why control change.", text: "What does change management primarily protect against?", options: ["Untested or unauthorized changes breaking production","Slow typing","High electricity bills","Marketing errors"], correctIndex: 0, explanation: "It ensures changes are tested, approved, and reversible." },
      ],
    },
    ctf: {
      scenario: "NASA's mission control software change log has been pulled for audit. Identify the change that violated segregation of duties and was deployed outside the approved maintenance window.",
      hint: "Read the change log and maintenance window policy.",
      hints: [
        "Read: cat CHANGE-LOG.txt",
        "Check maintenance windows: cat MAINTENANCE-WINDOWS.txt",
        "Find the violation: cat findings/SoD-VIOLATION.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/CHANGE-LOG.txt", value: "FLAG{CH4NG3_", label: "Change Log — Reviewed" },
        { trigger: "/MAINTENANCE-WINDOWS.txt", value: "M4N4G3M3NT_S0D_", label: "Maintenance Windows — Compared" },
        { trigger: "/findings/SoD-VIOLATION.txt", value: "W1ND0W}", label: "SoD Violation — Confirmed" },
      ],
      files: {
        "/CHANGE-LOG.txt": [
          "NASA MISSION CONTROL — CHANGE LOG Q1 2026",
          "==========================================",
          "CHG-2001  2026-01-10 02:00  jbryant   approved:t.morse   Telemetry patch    IN WINDOW",
          "CHG-2002  2026-01-24 03:00  akowalski approved:t.morse   Nav software v3.2  IN WINDOW",
          "CHG-2003  2026-02-11 14:37  jbryant   approved:jbryant   Hotfix comm module OUT OF WINDOW",
          "CHG-2004  2026-03-05 02:00  rchen     approved:t.morse   DB migration       IN WINDOW",
          "",
          "Maintenance window: Saturdays 01:00–05:00 EST.",
        ].join("\n"),
        "/MAINTENANCE-WINDOWS.txt": [
          "APPROVED MAINTENANCE WINDOWS — NASA MISSION CONTROL",
          "====================================================",
          "Standard window: Saturday 01:00–05:00 EST",
          "Emergency window: Requires VP Operations approval before deployment",
          "",
          "CHG-2003 deployed 2026-02-11 (Tuesday) at 14:37 — NOT a maintenance window.",
          "No emergency approval on file for CHG-2003.",
        ].join("\n"),
        "/findings/SoD-VIOLATION.txt": [
          "FINDING: CHG-2003 — DUAL SOD AND WINDOW VIOLATIONS",
          "===================================================",
          "1. Segregation of Duties: Developer (jbryant) = Approver (jbryant) — VIOLATION",
          "2. Maintenance Window: Deployed Tuesday 14:37 — outside approved window — VIOLATION",
          "3. No emergency CAB approval on file",
          "System affected: Communications module (safety-critical)",
          "Rating: CRITICAL — two control failures on safety-critical system",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. Two simultaneous ITIL violations (SoD + maintenance window) on a safety-critical system compound risk exponentially",
          "  2. The Change Advisory Board (CAB) exists precisely to prevent this — no CAB approval = no production deployment",
          "  3. Emergency change rate above 10% signals process circumvention; 'emergencies' become a loophole for bypassing controls",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "CHANGE-LOG.txt", isDir: false },
          { name: "MAINTENANCE-WINDOWS.txt", isDir: false },
          { name: "findings", isDir: true },
        ],
        "/findings": [{ name: "SoD-VIOLATION.txt", isDir: false }],
      },
    },
  },

  // ─── audit-06: BCP/DR ──────────────────────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "FEMA National Response Center", location: "Washington, DC", era: "Present Day", emoji: "🛡️" },
    id: "audit-06",
    order: 6,
    title: "When Systems Fail",
    subtitle: "Business Continuity and Disaster Recovery Audit",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-06", name: "BCP Auditor", emoji: "🔁" },
    challengeType: "ctf",
    info: {
      tagline: "A recovery plan that has never been tested is a hope, not a control.",
      year: 2005,
      overview: [
        "Business Continuity Planning (BCP) and Disaster Recovery (DR) audits verify that an organization can keep its critical operations running and recover its IT systems after a disruption — a natural disaster, ransomware, a data-center fire, or a vendor failure. CISA dedicates substantial coverage to this area precisely because these plans are so systematically neglected: they are created during a compliance exercise, filed away in a shared drive, and never exercised again. An untested recovery plan is not a control at all; it is documentation of intent, and intent has never once restored a database.",
        "Two foundations define what recovery means and where it applies. The first is the set of metrics. The Recovery Time Objective (RTO) is the maximum tolerable downtime before consequences become unacceptable; the Recovery Point Objective (RPO) is the maximum acceptable data loss, measured in time; and the Maximum Tolerable Downtime (MTD) is the point of irreversible harm. The fundamental rule binding them is that RTO must be less than MTD, or the plan literally cannot save the business. The second foundation is the Business Impact Analysis (BIA), which auditors review first because it maps each critical process, its supporting systems, the impact of downtime, and the resulting RTO and RPO. A BIA that has not been updated since a major migration, cloud adoption, or acquisition is stale, so auditors test its currency by comparing the systems it lists against the current production inventory.",
        "Strategy and testing must then demonstrably meet the approved targets. Recovery strategies range from hot standby — a fully operational duplicate with near-zero RTO and RPO, but expensive — through warm and cold standby, where cold is cheap but carries RTOs measured in days, to on-demand cloud failover; in every case the auditor verifies that the chosen strategy has demonstrated the approved RTO and RPO in actual testing rather than merely on paper. Both tabletop and full DR tests are required, because each exercises something different. A tabletop is a discussion-based walkthrough that tests the logical structure of the plan, the roles, and the decisions without causing disruption, while a full DR test actually fails over to the recovery environment and verifies RTOs and RPOs in practice. Tabletop-only testing exercises the document; technical-only testing exercises the technology but never the human coordination that a real disaster demands.",
        "Two modern requirements have reshaped the audit. Ransomware broke the old assumption that backups would survive a disaster: an attack encrypts production, the backups, any cloud-connected repositories, and anything else reachable from the compromised network. Audits therefore now test for air-gapped or immutable backups, adherence to the 3-2-1 rule of three copies on two media types with one held offsite, restoration tested from an isolated backup that was disconnected before the attack, and a ransomware-specific tabletop that explicitly includes backup compromise. Geographic separation, meanwhile, is non-negotiable, as Hurricane Katrina demonstrated: the primary and backup sites must sit outside the same flood zone and be far enough apart to survive a regional disaster, with FDIC and OCC guidance generally calling for roughly 100 miles, so auditors examine the location documentation for shared dependencies such as a common power-grid segment, ISP backbone, or seismic fault.",
      ],
      technical: {
        title: "RTO, RPO, and MTD in Practice",
        body: [
          "A gap analysis translates abstract metrics into concrete operational requirements:\n- Take a payment system with a 4-hour MTD — beyond 4 hours, payment-network fines accrue and checkout failures trigger SLA penalties — so IT sets RTO at 2 hours (a 2-hour safety margin) and RPO at 15 minutes (acceptable given the processor's journal can reconstruct most transactions).\n- That 15-minute RPO has direct technical implications: backups or replication must run at least every 15 minutes and transaction logs ship continuously, since any schedule longer than the RPO creates data loss exceeding it — auditors verify by examining backup schedules, completion logs, and replication-lag dashboards.",
          "Meaningful DR tests require defined criteria, and missed targets must be fixed, not excused:\n- Before the test, expect a defined objective ('achieve 2-hour RTO from declared disaster'), specific success criteria (all critical functions operational, data consistent within 15 minutes of the failure time), a full-site-failure scenario, and business-stakeholder participation to confirm restored systems are adequate — and results documented against those criteria, not a narrative.\n- When actual RTOs exceed targets, the common excuses each name a real gap to remediate and retest: 'the test environment doesn't mirror production' (fix the environment), 'an unexpected configuration issue' (resolve it), 'not enough staff' (the plan assumes staffing that may not exist in a real disaster).",
          "Two artifacts get specific scrutiny:\n- Cloud DR — native cross-region replication, automated failover, and IaC rebuilding are cheaper than on-prem but bring new failure modes: provider outages spanning multiple regions (as AWS us-east-1 has shown), misconfigured replication with gaps found only at failover, and region-specific service dependencies missing in the failover region — so auditors verify DR tests exercise the failover, not just the replication.\n- The testing calendar — auditors review three years of the schedule for on-time tests, varied scenarios (repeating one scenario doesn't build resilience), documented and addressed lessons, and BCP updates after each test; a BCP unchanged across three years of tests is suspicious, since either the tests reveal nothing or the lessons aren't being incorporated.",
          "Crisis communication is an often-overlooked component auditors test directly:\n- A disaster requires communicating with employees (who may not reach the office), customers (facing disruption), regulators (with notification requirements that vary by incident and jurisdiction), media (when newsworthy), and vendors (whose help recovery may need).\n- Auditors verify contact lists are current (not a three-year-old list with former employees), templates are pre-drafted for likely scenarios, the escalation tree has been exercised in a tabletop, and the plan covers cases where primary channels (email, internal phones) are themselves down.",
        ],
        codeExample: {
          label: "BCP gap analysis worksheet",
          code: `System              MTD    RTO Target  RPO Target  Last Test   Test Result
------------------  -----  ----------  ----------  ----------  -----------
Payment Processing  4h     2h          15min       2025-11-01  FAILED (3.5h)
Core Banking        8h     4h          1h          2025-06-15  PASSED
Customer Portal     24h    8h          4h          2024-12-01  NOT TESTED (18mo)
Trading Platform    1h     30min       5min        2026-03-01  PASSED

FINDINGS:
- Payment Processing: actual RTO 3.5h > 2h target — REMEDIATE
- Customer Portal: not tested in 18 months — CRITICAL FINDING`,
        },
      },
      incident: {
        title: "Hurricane Katrina — Data Center Failures (2005)",
        when: "August 29, 2005",
        where: "New Orleans, Louisiana",
        impact: "Multiple financial institutions lost data; weeks of downtime; regulatory sanctions",
        body: [
          "Hurricane Katrina made landfall on August 29, 2005, and within 24 hours exposed systematic BCP/DR failures across New Orleans' financial sector:\n- The failures weren't a lack of plans — most institutions had them — but the assumptions underneath them.\n- The dominant assumption was that a regional disaster would hit the primary site and leave the backup intact; Katrina invalidated it, because both primary and backup data centers for multiple institutions sat in the same flood plain, and when the levees failed both became inaccessible at once.",
          "Geographic co-location was compounded by a physical-access problem:\n- Even institutions whose backup sites survived couldn't reach them — roads were flooded, staff were evacuated, and the regional power grid was down.\n- RTOs of hours became days and weeks wherever recovery assumed IT staff could physically reach the backup facility, and institutions with out-of-region sites but no remote-recovery runbooks discovered their plans assumed a physical presence a regional disaster specifically precludes.",
          "Data loss tracked directly to backup practices:\n- Institutions with near-real-time replication to geographically separated sites recovered with minimal loss.\n- Those relying on tape backups stored offsite but within the flood zone found tapes inaccessible or damaged — several community banks lost significant customer records (loan documentation, transaction history, account balances) because backup media sat in the same building or a similarly flooded facility.",
          "Katrina produced mandatory guidance now embedded in FDIC and OCC exams, and later events reinforced it:\n- The guidance requires geographically separated sites outside the same flood/seismic/regional-hazard zone, annual full-failover DR tests (not just component testing), BCPs addressing weeks-long outages with plans to operate from backup locations, and communication procedures for reaching evacuated staff — tested as a regulatory requirement, not a best practice.\n- Subsequent events extended the lesson: 9/11 established urban data-center separation, Hurricane Sandy (2012) largely validated the post-Katrina improvements, and COVID-19 (2020) exposed gaps in organizations that never planned for all-staff remote work — so current BCP/DR must address human recovery, not just technology recovery.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Disaster Event", sub: "outage trigger", type: "attacker" },
          { label: "RTO / RPO", sub: "recovery targets", type: "system" },
          { label: "DR Test", sub: "validates actual recovery", type: "victim" },
          { label: "MTD Compliance", sub: "business survives", type: "result" },
        ],
      },
      timeline: [
        { year: 2001, event: "9/11 — firms with offsite backups and DR plans recovered; others did not" },
        { year: 2005, event: "Hurricane Katrina — geographic co-location of primary/backup exposed", highlight: true },
        { year: 2012, event: "Hurricane Sandy — NYSE and NASDAQ DR plans successfully activated" },
        { year: 2020, event: "COVID-19 — remote work BCP gaps exposed at scale" },
      ],
      keyTakeaways: [
        "RTO = maximum downtime; RPO = maximum data loss; MTD = absolute business survival limit — RTO must always be less than MTD",
        "Untested recovery plans are not controls — DR tests must actually fail over to backup systems and measure real RTOs against targets",
        "BIA currency is foundational — a stale BIA produces a BCP that does not reflect the current environment",
        "Geographic separation requires sites outside the same flood zone, seismic zone, and regional power grid segment",
        "Ransomware requires immutable or air-gapped backups — network-connected backups are encrypted by the same attack that encrypts production",
        "Annual DR tests must vary scenarios — testing the same scenario repeatedly does not build comprehensive resilience",
        "Tabletop exercises test human coordination and decision-making; full failover tests test the technology — both are required",
        "RPO drives backup frequency — a 15-minute RPO requires replication or backups running at least every 15 minutes",
        "DR test missed RTO is a finding that requires remediation and retest — explanations are not evidence",
        "Crisis communication planning must include procedures for scenarios where email and internal phone systems are unavailable",
      ],
      references: [
        { title: "NIST SP 800-34 — Contingency Planning Guide for IT Systems", url: "https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final" },
        { title: "ISACA BCP/DR Audit Program", url: "https://www.isaca.org/resources/isaca-journal" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-06-q1", type: "Core Idea", challenge: "Tested, not hoped.", text: "Why is an untested recovery plan not a real control?", options: ["A plan never tested is a hope — only tested recovery with documented results counts","Tests are optional","Plans never fail","Testing weakens the plan"], correctIndex: 0, explanation: "ISACA requires test evidence with results for a DR plan to be a control." },
        { id: "audit-06-q2", type: "RPO", challenge: "How much data loss.", text: "What does RPO (Recovery Point Objective) define?", options: ["The maximum data loss the business can accept — driving backup frequency","How fast the system restarts","The number of backups","The cost of recovery"], correctIndex: 0, explanation: "RPO sets the acceptable data-loss window, which drives backup cadence." },
        { id: "audit-06-q3", type: "RTO vs MTD", challenge: "Leave a buffer.", text: "Is an RTO of 2 hours acceptable when the Maximum Tolerable Downtime (MTD) is also 2 hours?", options: ["No — RTO must be less than MTD to leave margin for complications","Yes — equal is fine","Only if RPO is zero","Only for small systems"], correctIndex: 0, explanation: "RTO must be below MTD; equal leaves no buffer." },
        { id: "audit-06-q4", type: "Real Incident", challenge: "Katrina, 2005.", text: "What DR design flaw did Hurricane Katrina expose at New Orleans institutions?", options: ["Primary and backup data centers were in the same flood zone — both lost at once","Backups were encrypted too strongly","RTO was too short","They had too many sites"], correctIndex: 0, explanation: "Co-located primary and backup sites failed together." },
        { id: "audit-06-q5", type: "Finding", challenge: "Missed the target.", text: "A DR test shows actual RTO of 5h20m against a 4-hour target. The auditor's finding?", options: ["A HIGH finding — the plan doesn't meet its approved RTO; remediation required","No finding — close enough","A LOW finding only","Praise the team"], correctIndex: 0, explanation: "Missing the approved RTO is a high finding even if MTD isn't breached." },
        { id: "audit-06-q6", type: "Definition", challenge: "Time to restore.", text: "RTO (Recovery Time Objective) measures…", options: ["The target time to restore a system after disruption","Acceptable data loss","Backup storage size","The audit duration"], correctIndex: 0, explanation: "RTO is the restoration-time target; RPO is the data-loss target." },
        { id: "audit-06-q7", type: "Geographic Separation", challenge: "Don't co-locate.", text: "Why must primary and backup data centers be geographically separated?", options: ["So a single regional disaster can't take out both at once","To save money","To slow recovery","It's not required"], correctIndex: 0, explanation: "Separation prevents one event from destroying both sites — the Katrina lesson." },
        { id: "audit-06-q8", type: "Concept", challenge: "Evidence of recovery.", text: "What turns a DR plan into a control an auditor can rely on?", options: ["A successful test with documented results","A nicely formatted document","Management's verbal assurance","A large budget"], correctIndex: 0, explanation: "Documented successful tests are the evidence that makes it a control." },
      ],
    },
    ctf: {
      scenario: "FEMA's internal systems are being audited for BCP/DR compliance. Read the DR test results and identify which system's actual RTO exceeds its target — creating a compliance gap.",
      hint: "Compare DR test results against approved RTO targets.",
      hints: [
        "Read: cat DR-TEST-RESULTS.txt",
        "Check targets: cat RTO-RPO-TARGETS.txt",
        "View the gap: cat findings/RTO-GAP.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/DR-TEST-RESULTS.txt", value: "FLAG{BCP_DR_", label: "DR Test Results — Loaded" },
        { trigger: "/RTO-RPO-TARGETS.txt", value: "RT0_T4RG3T_", label: "RTO/RPO Targets — Compared" },
        { trigger: "/findings/RTO-GAP.txt", value: "M1SS3D}", label: "RTO Gap — Finding Confirmed" },
      ],
      files: {
        "/DR-TEST-RESULTS.txt": [
          "FEMA DISASTER RECOVERY TEST — 2026-04-15",
          "=========================================",
          "Emergency Management System  Actual RTO: 1h 45min   Result: PASS",
          "Grant Management Portal      Actual RTO: 5h 20min   Result: FAIL",
          "Incident Reporting DB        Actual RTO: 3h 10min   Result: PASS",
          "Resource Tracking System     Actual RTO: 2h 05min   Result: PASS",
          "",
          "Cross-reference with RTO-RPO-TARGETS.txt to identify gaps.",
        ].join("\n"),
        "/RTO-RPO-TARGETS.txt": [
          "APPROVED RTO/RPO TARGETS — FEMA SYSTEMS",
          "=========================================",
          "Emergency Management System  RTO Target: 2h   RPO: 30min  MTD: 4h",
          "Grant Management Portal      RTO Target: 4h   RPO: 1h     MTD: 8h",
          "Incident Reporting DB        RTO Target: 4h   RPO: 2h     MTD: 8h",
          "Resource Tracking System     RTO Target: 4h   RPO: 2h     MTD: 8h",
          "",
          "Grant Management Portal target is 4h. Actual test result: 5h 20min.",
        ].join("\n"),
        "/findings/RTO-GAP.txt": [
          "FINDING: GRANT MANAGEMENT PORTAL — RTO TARGET MISSED",
          "======================================================",
          "Approved RTO target: 4 hours",
          "Actual RTO in DR test: 5 hours 20 minutes",
          "Gap: 1 hour 20 minutes above target",
          "MTD: 8 hours — business can still survive, but margin is reduced",
          "",
          "Finding: DR test FAILED. Remediation required before next audit.",
          "Required action: Investigate bottleneck; retest within 60 days.",
          "Rating: HIGH — DR plan does not meet approved targets",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. RTO is the maximum tolerable downtime; RPO is the maximum tolerable data loss — both must be validated by actual tests, not documentation",
          "  2. A DR plan that has never been tested (or fails when tested) is not a control — it is a false assurance",
          "  3. The MTD (Maximum Tolerable Downtime) is the absolute business survival limit; RTO must always be less than MTD",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "DR-TEST-RESULTS.txt", isDir: false },
          { name: "RTO-RPO-TARGETS.txt", isDir: false },
          { name: "findings", isDir: true },
        ],
        "/findings": [{ name: "RTO-GAP.txt", isDir: false }],
      },
    },
  },

  // ─── audit-07: Incident Response ──────────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "CISA Headquarters", location: "Arlington, Virginia", era: "Present Day", emoji: "🚨" },
    id: "audit-07",
    order: 7,
    title: "Incident Response Readiness",
    subtitle: "Auditing the IR Program Against NIST SP 800-61",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-07", name: "IR Auditor", emoji: "🧯" },
    challengeType: "ctf",
    info: {
      tagline: "An incident response plan that lives in a SharePoint folder and was never exercised is not a control.",
      year: 2012,
      overview: [
        "Incident Response (IR) program audits assess whether an organization can detect, contain, eradicate, and recover from security incidents — and do so consistently, at scale, under the time pressure and confusion that real incidents create. ISACA auditors use NIST SP 800-61 as the framework, evaluating all four of its phases — Preparation, Detection and Analysis, Containment/Eradication/Recovery, and Post-Incident Activity — because a program that detects well but cannot contain, or contains but learns nothing, is not a mature program. Preparation is both the most auditable phase and the most often deficient. A mature one shows a current IR plan reviewed within the past 12 months, named individuals rather than job titles assigned to roles, contact lists that reach external parties such as legal counsel, law enforcement, forensics, the cyber insurer, and PR, a severity matrix that distinguishes P1 from P4, notification protocols tied to each severity, and tabletop exercises run within the past 12 months with action items tracked to closure.",
        "Beyond preparation, two forces shape the program. The first is detection and analysis, where auditors review the SIEM for log-source coverage of the critical systems, alert rules tuned to the top threats, and managed false-positive rates — a SIEM firing thousands of alerts a day simply trains analysts to ignore it, which is worse than no SIEM at all — and then sample historical incidents to see how each was actually detected, since detection by external notification from law enforcement or a third party is a clear signal that internal detection is insufficient. The second is the SEC's 2023 disclosure rules, under which a material incident must be disclosed within four business days and the risk-management program described, turning IR into a financial-reporting matter. At public companies, auditors therefore assess whether the materiality determination is documented, whether the escalation from security to legal and finance is clear, and whether the four-day timeline is operationally achievable at all.",
        "Two operational measures define the program's maturity. Mean Time to Detect (MTTD) is the time from attacker activity to detection, and Mean Time to Respond (MTTR) is the time from detection to containment; the IBM Cost of a Data Breach report shows that breaches contained within 30 days cost far less, financial-services regulators expect high-severity MTTD measured in hours rather than days, and an organization with a 78-day MTTD like Equifax has a fundamental failure regardless of how good its documentation looks. Playbooks are the second measure — step-by-step procedures for the top incident types such as ransomware, data breach and exfiltration, insider threat, phishing with credential compromise, and DDoS, each one specifying detection indicators, triage, containment, eradication, recovery, communication, and evidence-preservation steps. Auditors test them both against those criteria and against whether the IR team members can actually execute them under tabletop conditions.",
        "Log retention is the evidentiary foundation of all of this. On detection, the IR team must be able to answer when the attacker entered, which systems they touched, and what data they accessed or exfiltrated, and answering those questions requires logs that reach back across the full dwell period — typically 90 days online and immediately searchable, with 12 months archived. Equifax's detection failure was in part a retention problem: an expired SSL inspection certificate meant the exfiltration traffic was never logged in a detectable form. Even with adequate retention, logs that go unreviewed or contain gaps from misconfigured shipping are not reliable evidence, so auditors confirm that every in-scope system ships its logs to the SIEM with no delivery gaps.",
      ],
      technical: {
        title: "IR Program Audit Checklist",
        body: [
          "The first two phases are tested through documents and direct SIEM access:\n- Preparation — verify the IR plan was reviewed within 12 months and updated for significant changes (new cloud, acquisitions, regulations) with a ransomware playbook if relevant, each role assigned to a named individual who confirmed their responsibilities, and a tabletop within 12 months on a current-threat scenario with open action items tracked to closure.\n- Detection — assess log-source coverage (what percentage of in-scope systems ship to the SIEM), alert-rule coverage of top threats, alert response time (sample P1/P2 alerts and measure generation-to-action), and false-positive rate (an alert-to-incident ratio above 100:1 suggests inadequate tuning and analyst fatigue), with retention checked against policy.",
          "Containment and post-incident review get hands-on testing:\n- Containment — verify EDR can isolate an endpoint from the network in a single action within target (typically under 5 minutes for P1), that network segmentation and emergency firewall changes can block lateral movement, and that cloud security groups and NACLs can isolate compromised instances per a documented cloud playbook.\n- Post-incident review (PIR) — verify PIRs were done for all P1/P2 incidents in the past year with root-cause analysis (not just a timeline), action items with owners and due dates that were actually completed, and no recurring root causes across multiple PIRs, since repetition means the process isn't driving remediation.",
          "Two reporting and alignment areas draw growing scrutiny:\n- Board metrics — under the SEC's 2023 rules, auditors test whether the CISO presents IR metrics to the board at least quarterly, including MTTD/MTTR trends, incident volume by type and severity, and near-misses (a leading indicator frequently absent from board reporting).\n- Cyber insurance alignment — policies require notifying the insurer within a tight window (often 72 hours or less), so auditors verify the IR plan includes the carrier's incident hotline, that the IR team understands what counts as a 'covered incident,' and that the notification deadline is built into escalation, since a covered incident reported late can mean denied coverage.",
          "Regulatory notification creates hard deadlines the program must be designed to meet:\n- GDPR requires notifying the supervisory authority within 72 hours of awareness, the SEC requires an 8-K within four business days of a materiality determination, many state laws require notifying individuals within 30–60 days, and HIPAA requires notifying HHS within 60 days for breaches of 500+ individuals.\n- Auditors verify IR plans include notification decision trees for all applicable jurisdictions and regulations, that legal is brought into escalation early enough to assess obligations, and that the organization has documented prior applications of the decision tree.",
        ],
        codeExample: {
          label: "IR metrics — measuring detection and response time",
          code: `# Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR)
# From incident ticket system

SELECT
  incident_id,
  severity,
  DATEDIFF(hour, event_time, detection_time) as hours_to_detect,
  DATEDIFF(hour, detection_time, containment_time) as hours_to_contain
FROM incidents
WHERE year = 2026
ORDER BY severity DESC;

-- Results show:
-- SEV-1 incidents: avg 4.2h to detect, 1.8h to contain
-- Industry benchmark: SEV-1 detect < 1h, contain < 4h
-- Finding: Detection time exceeds benchmark — SIEM tuning required`,
        },
      },
      incident: {
        title: "The Equifax Breach Detection Failure (2017)",
        when: "May–July 2017",
        where: "Atlanta, Georgia",
        impact: "147M records compromised; $575M FTC settlement; CISO and CEO resigned",
        body: [
          "The Equifax breach began on May 13, 2017, when attackers exploited a known Apache Struts vulnerability (CVE-2017-5638) in a consumer dispute portal:\n- The vulnerability had been publicly disclosed and patched two months earlier, in March 2017 — Equifax hadn't applied the patch.\n- The attackers held access for 78 days (May 13 to July 29), exfiltrating roughly 147 million Americans' personal data — Social Security numbers, birth dates, addresses, some driver's-license and credit-card numbers — and Equifax didn't detect it until July 29, nearly three months in.",
          "The detection failure had a specific, auditable cause:\n- An SSL inspection certificate in Equifax's traffic-monitoring infrastructure had expired 19 months earlier, in January 2016, so the tool that decrypts, inspects, and re-encrypts HTTPS traffic had stopped inspecting — encrypted traffic passed through uninspected.\n- The exfiltration was HTTPS-encrypted, the tool that should have caught it was broken, and no one had noticed the expired certificate, the halted inspection, or the resulting silence in its alerts.",
          "The IR program failed across three phases at once:\n- Preparation — the expired certificate was a detection-control failure that certificate-expiration monitoring, periodic effectiveness reviews, or a compensating-control audit should have caught; none existed in functioning form.\n- Detection — the 78-day dwell reflects not just the SSL gap but the absence of compensating detective controls (data-volume anomalies, destination-IP analysis, UEBA) that would have flagged the exfiltration another way.\n- Response — once detected, Equifax's initial public disclosure was confused and technically inaccurate, showing the crisis-communication component had not been adequately prepared or exercised.",
          "The consequences were severe and multi-jurisdictional, and the case produced a specific audit requirement:\n- The FTC/CFPB/states settlement reached $575 million (up to $425M for consumer restitution), the UK ICO fined the pre-GDPR maximum of £500,000, Canada's PIPEDA found multiple violations, the CISO retired within days and the CEO resigned at the congressional hearing, and total costs exceeded $1.7 billion.\n- The lesson: every detection control must be monitored for its own health, because a tool that fails silently is worse than none — so auditors now test whether SIEM, IDS/IPS, DLP, SSL inspection, and EDR have health monitoring that alerts when they stop ingesting data, stop generating alerts, or hit certificate expiry, a meta-monitoring practice now in the CISA curriculum.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Preparation", sub: "plan + exercise + tools", type: "attacker" },
          { label: "Detection & Analysis", sub: "SIEM + alerts", type: "system" },
          { label: "Containment / Eradication", sub: "isolate + remove", type: "victim" },
          { label: "Post-Incident Review", sub: "lessons learned", type: "result" },
        ],
      },
      timeline: [
        { year: 2004, event: "NIST SP 800-61 first published — IR lifecycle framework" },
        { year: 2012, event: "NIST SP 800-61 Rev 2 — updated with advanced threat guidance" },
        { year: 2017, event: "Equifax — 78-day dwell time; broken detection tool", highlight: true },
        { year: 2023, event: "SEC cyber rules — public companies must disclose incidents within 4 business days" },
      ],
      keyTakeaways: [
        "Four IR phases: Preparation, Detection and Analysis, Containment/Eradication/Recovery, Post-Incident — all must be documented and exercised",
        "Tabletop exercise required annually at minimum — full simulation preferred; both test different aspects of IR readiness",
        "MTTD and MTTR are the key IR metrics — Equifax's 78-day MTTD is the benchmark for what failure looks like",
        "Detection tools must be health-monitored — a tool that fails silently is worse than no tool",
        "Playbooks are required for at least the top 5 threat scenarios; ransomware and data breach are universal requirements",
        "SEC 2023 rules require 4-day disclosure of material incidents — materiality determination process must be pre-defined",
        "GDPR requires 72-hour supervisory authority notification — notification decision tree must be in the IR plan",
        "Log retention: 90 days online + 12 months archived — gaps in log coverage are forensic evidence gaps",
        "Post-incident reviews must drive remediation — recurring root causes across PIRs signal a broken improvement process",
        "Cyber insurance carrier notification requirements must be in the IR escalation tree — missed notification can void coverage",
      ],
      references: [
        { title: "NIST SP 800-61 Rev 2 — Computer Security Incident Handling Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final" },
        { title: "CISA Incident Response Resources", url: "https://www.cisa.gov/topics/cyber-threats-and-advisories/information-sharing/information-sharing-and-awareness" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-07-q1", type: "Core Idea", challenge: "Exercised, not filed.", text: "Why is an IR plan that was never exercised not a real control?", options: ["An untested plan sitting in a folder won't work under pressure — exercises make it a control","Plans never need testing","It's a control if it's long","Filing it is enough"], correctIndex: 0, explanation: "An incident response plan must be exercised to count as effective." },
        { id: "audit-07-q2", type: "NIST 800-61", challenge: "Most auditable phase.", text: "Which NIST SP 800-61 IR phase is most auditable?", options: ["Preparation — plans, role assignments, tabletop records, contact lists are verifiable","Eradication","Recovery","There are no phases"], correctIndex: 0, explanation: "Preparation produces the most documentary evidence to verify." },
        { id: "audit-07-q3", type: "Real Incident", challenge: "Equifax, 2017.", text: "Why did Equifax fail to detect the breach for 76 days?", options: ["Its SSL inspection tool's certificate had been expired for 19 months","Attackers used an undetectable zero-day","There was no internet","Staff were on holiday"], correctIndex: 0, explanation: "An expired cert blinded monitoring — a control failure, not a novel exploit." },
        { id: "audit-07-q4", type: "Plan Currency", challenge: "Stale and overdue.", text: "An IR plan last updated 21 months ago with 3 overdue tabletop action items rates as…", options: ["INEFFECTIVE — currency and follow-through both failed","EFFECTIVE","Not auditable","LOW risk only"], correctIndex: 0, explanation: "Annual update and action-item follow-through are both requirements." },
        { id: "audit-07-q5", type: "Metric", challenge: "Detect speed.", text: "What does Mean Time to Detect (MTTD) measure?", options: ["Time from when the incident occurred to when it was detected","Time to write the report","Time to recover","Time between audits"], correctIndex: 0, explanation: "MTTD is the incident-occurrence-to-detection interval." },
        { id: "audit-07-q6", type: "Playbooks", challenge: "Cover the threats.", text: "Is it acceptable to have no ransomware playbook if the org has never had a ransomware incident?", options: ["No — playbooks must cover the primary threat landscape regardless of past incidents","Yes — only after an incident","Only for large firms","Playbooks aren't needed"], correctIndex: 0, explanation: "Absence of a relevant playbook is itself a finding." },
        { id: "audit-07-q7", type: "Concept", challenge: "Monitoring upkeep.", text: "The Equifax detection failure shows that security tools…", options: ["Must be maintained (e.g., cert renewals) or they silently stop working","Never need maintenance","Are always reliable","Should be disabled"], correctIndex: 0, explanation: "An unmaintained tool is a decorative checkbox, not a control." },
        { id: "audit-07-q8", type: "Framework", challenge: "The standard.", text: "NIST SP 800-61 is the standard framework for…", options: ["Computer security incident handling","Password complexity","Network cabling","Tax filing"], correctIndex: 0, explanation: "800-61 defines the incident-handling lifecycle and phases." },
      ],
    },
    ctf: {
      scenario: "You are auditing CISA's own IR program. The IR plan metadata and last exercise results are on the audit terminal. Identify the control gap that would receive an audit finding.",
      hint: "Check the IR plan currency and the exercise results.",
      hints: [
        "Read: cat IR-PLAN-METADATA.txt",
        "Check exercise: cat TABLETOP-RESULTS.txt",
        "View the finding: cat findings/IR-GAP.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/IR-PLAN-METADATA.txt", value: "FLAG{1R_PL4N_", label: "IR Plan — Metadata Loaded" },
        { trigger: "/TABLETOP-RESULTS.txt", value: "0UTDAT3D_T4BL3T0P_", label: "Tabletop — Results Reviewed" },
        { trigger: "/findings/IR-GAP.txt", value: "F41L}", label: "IR Gap — Finding Confirmed" },
      ],
      files: {
        "/IR-PLAN-METADATA.txt": [
          "INCIDENT RESPONSE PLAN — METADATA",
          "==================================",
          "Document: IR-PLAN-v3.2.docx",
          "Last updated: 2024-08-01 (21 months ago)",
          "Next scheduled review: 2025-08-01 (OVERDUE by 9 months)",
          "Plan owner: CISO",
          "Status: STALE — not reviewed after Colonial Pipeline TTX findings",
          "",
          "Note: Plan does not include ransomware playbook (added to scope 2025-01).",
        ].join("\n"),
        "/TABLETOP-RESULTS.txt": [
          "TABLETOP EXERCISE RESULTS — Last conducted: 2024-06-15",
          "========================================================",
          "Scenario: Ransomware attack on OT systems",
          "Participants: IR team, IT, Legal, Communications",
          "Duration: 4 hours",
          "",
          "Open action items from exercise (UNRESOLVED as of 2026-05-15):",
          "  1. Update IR plan with ransomware playbook — DUE 2024-09-01 — OVERDUE",
          "  2. Establish encrypted out-of-band comms channel — DUE 2024-10-01 — OVERDUE",
          "  3. Test backup restoration — DUE 2024-12-01 — OVERDUE",
          "",
          "No tabletop conducted in the past 12 months.",
        ].join("\n"),
        "/findings/IR-GAP.txt": [
          "IR PROGRAM AUDIT FINDINGS",
          "==========================",
          "FINDING-01: IR plan not updated in 21 months (requirement: annual)",
          "FINDING-02: No tabletop exercise in past 12 months (requirement: annual)",
          "FINDING-03: 3 open action items from last tabletop — all overdue",
          "FINDING-04: No ransomware playbook despite ransomware being primary threat",
          "",
          "Overall IR Program Rating: INEFFECTIVE",
          "Required: Update plan, conduct tabletop within 60 days, close all action items.",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. NIST SP 800-61 four phases: Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-Incident — all must be documented and tested",
          "  2. An IR plan not reviewed after major incidents (like the Colonial Pipeline TTX findings here) fails the currency requirement",
          "  3. Open tabletop action items signal the organization cannot execute its own IR plan — the Equifax 78-day dwell time started with exactly this gap",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "IR-PLAN-METADATA.txt", isDir: false },
          { name: "TABLETOP-RESULTS.txt", isDir: false },
          { name: "findings", isDir: true },
        ],
        "/findings": [{ name: "IR-GAP.txt", isDir: false }],
      },
    },
  },

  // ─── audit-08: Vendor Risk ─────────────────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "The Pentagon", location: "Arlington, Virginia", era: "Present Day", emoji: "🔗" },
    id: "audit-08",
    order: 8,
    title: "The Supply Chain Threat",
    subtitle: "Vendor and Third-Party Risk Management",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-08", name: "Vendor Risk Manager", emoji: "🤝" },
    challengeType: "ctf",
    info: {
      tagline: "Your security is only as strong as the weakest vendor with access to your systems.",
      year: 2020,
      overview: [
        "Vendor and third-party risk management (TPRM) audits verify that an organization actually oversees every vendor, supplier, and partner that accesses its systems, processes its data, or runs part of its IT. ISACA places this under COBIT's APO10 (Managed Vendors), and it is one of the fastest-growing areas of regulatory scrutiny worldwide. The premise is simple but operationally complex: an organization's security posture is the product of its own controls and its vendors' controls, so a breach of a vendor is a breach of the organization — the data leaves through the vendor's door. The lifecycle therefore begins with inventory, which means knowing every vendor, including the shadow IT bought on a credit card outside procurement and the subcontractors of primary vendors. Organizations consistently undercount here, and the shadow-IT count alone can exceed the managed count, so auditors test the inventory against accounts-payable records, asset inventories, network traffic, and user-reported SaaS.",
        "The next two stages tier the vendors and then test their controls in proportion to that tier. Classification assigns a risk tier based on data sensitivity, system criticality, dependency (how quickly the vendor could be replaced), the vendor's own regulatory status, and its incident history: Tier 1 (Critical) is existential, Tier 2 (High) processes business data or has connectivity, and Tier 3 (Low) has no system access. Assessment then matches rigor to tier. A Tier 1 vendor warrants a questionnaire such as the SIG (Standardized Information Gathering), the vendor's SOC 2 Type II report as an independent attestation of controls operating over time, penetration-test and vulnerability-scan results, and an on-site review for the very highest risk. A questionnaire alone is insufficient for Tier 1, because it rests entirely on the vendor's own self-reporting.",
        "The final two stages bind the relationship contractually and then watch it between assessments. The contractual requirements an auditor verifies include security obligations, data protection covering encryption, access controls, and handling, a breach-notification timeline — GDPR's is 72 hours and many organizations require 24 — a right to audit, data return or destruction at termination, and restrictions requiring approval of subcontractors. Ongoing monitoring is then calibrated to tier: a Tier 1 vendor warrants continuous security-ratings monitoring through services like BitSight, SecurityScorecard, or RiskRecon, plus tracking of breaches, regulatory actions, and leadership changes, quarterly vendor-access reviews, and vendor security metrics; a Tier 2 vendor receives an annual reassessment plus significant-event tracking; and a Tier 3 vendor may warrant nothing more than a review at contract renewal.",
        "Fourth-party risk — the risk arising from a vendor's own vendors — is the hardest dimension and the one supply-chain attacks most often exploit. SolarWinds succeeded in part because affected organizations had never mapped the fact that their Orion instance held broad network visibility, nor assessed what a compromise of Orion itself would do to them. Managing this risk requires understanding each Tier 1 vendor's key dependencies — which cloud providers it runs on, which software libraries it relies on, and which subcontractors handle the organization's data — and organizations that have not answered those questions carry a gap that attackers have repeatedly shown they will exploit.",
      ],
      technical: {
        title: "Vendor Tiering and Assessment Requirements",
        body: [
          "Tier 1 vendors get the deepest due diligence on both controls and contract terms:\n- Assessment — review annual SOC 2 Type II reports (not Type I, which attests only to design, not operating effectiveness) within 60 days of receipt, follow up on any noted exceptions, verify the report scope actually covers the services rendered (a data-center SOC 2 doesn't cover a separately scoped SaaS app), review penetration tests from the past 12 months with remediation evidence for critical/high findings, and confirm patch compliance within 30 days for critical CVEs on internet-facing systems.\n- Contracts — the right to audit must be explicit, specifying who may assess, what systems and facilities are in scope, the notice required, and how findings get remediated; a contract without a right-to-audit clause is a finding, since it removes any independent verification of the vendor's security representations.",
          "Two risks bridge TPRM and the rest of the program:\n- Vendor access — vendor personnel must meet the same access rules as employees: documented requests with justification, least privilege, named individuals (not shared accounts), MFA, and regular reviews; accounts must be tied to active contract status and deprovisioned immediately at engagement end through both HR and IT offboarding, since access that persists afterward is both an access-control and a TPRM finding.\n- Concentration risk — three SaaS vendors all running on AWS us-east-1 create a single point of failure a regional outage hits at once even if each is individually redundant, so auditors map the top ten critical vendors against their underlying infrastructure providers and reflect any concentration in BCP/DR planning.",
          "Two controls organizations systematically neglect:\n- Termination — when a relationship ends (expiration, vendor failure, insourcing, or switching), deprovision vendor access within 24 hours for privileged and 5 business days for standard, return data in usable form or certify its destruction, return and wipe vendor equipment, and remove vendor personnel from distribution and notification lists; auditors test a sample of ended relationships for documented completion of each step.\n- Questionnaire skepticism — SIG responses are self-reported, so auditors look for inconsistencies (a vendor claiming comprehensive patch management while its security-ratings score shows many unpatched critical vulnerabilities) and cross-reference against externally observable indicators (open ports, certificate issues, breach history, dark-web exposure).",
          "TPRM governance needs executive sponsorship and cross-functional collaboration:\n- The program needs a named owner (typically the CISO or CRO), an executive steering committee reviewing the vendor risk profile quarterly, and a defined escalation path for items above appetite.\n- Procurement must route every onboarding through TPRM before contracts are signed, since shadow IT and unauthorized onboardings — introducing risk before any assessment — are the most common program failure; auditors test by reviewing the policy, the onboarding workflow, and a year of escalation records to confirm it functions as real risk management, not a documentation exercise.",
        ],
        codeExample: {
          label: "Vendor risk register — identifying overdue assessments",
          code: `SELECT
  vendor_name,
  tier,
  last_assessment_date,
  DATEDIFF(day, last_assessment_date, GETDATE()) as days_since_assessment,
  CASE
    WHEN tier = 1 AND DATEDIFF(day, last_assessment_date, GETDATE()) > 365
    THEN 'OVERDUE — Tier 1'
    WHEN tier = 2 AND DATEDIFF(day, last_assessment_date, GETDATE()) > 365
    THEN 'OVERDUE — Tier 2'
    ELSE 'CURRENT'
  END as status
FROM vendor_register
WHERE has_system_access = 1
ORDER BY tier, days_since_assessment DESC;`,
        },
      },
      incident: {
        title: "The SolarWinds Supply Chain Attack (2020)",
        when: "October 2019 – December 2020",
        where: "Austin, Texas (SolarWinds HQ)",
        impact: "18,000 organizations compromised; 9 US federal agencies breached; $40M+ in response costs",
        body: [
          "The SolarWinds attack, disclosed in December 2020, was the most consequential supply-chain attack in history at the time:\n- Between October 2019 and June 2020, attackers believed associated with Russia's SVR compromised SolarWinds' software build pipeline and inserted malicious code — SUNBURST — into the Orion IT monitoring software.\n- The code was digitally signed with SolarWinds' legitimate code-signing certificate and distributed to roughly 18,000 organizations, including nine US federal agencies (Treasury, State, parts of DHS).",
          "The TPRM failure was systemic across affected organizations:\n- Orion is IT monitoring software that needs broad network visibility, with agents on servers, network devices, and workstations throughout the environment — so a compromised Orion instance effectively sees the customer's entire IT estate.\n- Organizations that hadn't classified SolarWinds as a Tier 1 critical vendor ran this highly privileged third-party software with no enhanced monitoring of its network activity; the risk wasn't the sensitivity of data SolarWinds held but the access Orion had to the customer's own environment.",
          "Post-incident analysis by CISA, Microsoft, and FireEye showed SUNBURST was built to evade detection:\n- It lay dormant for two weeks after installation, performed careful reconnaissance to avoid security sandboxes, used legitimate Orion API calls to blend with normal Orion traffic, and communicated through legitimate cloud services.\n- Detecting it required behavioral analysis of Orion's network behavior rather than signatures, so organizations with UEBA baselining Orion's normal patterns had a better chance — most did not.",
          "SolarWinds sharply accelerated software-supply-chain requirements and produced a specific audit question:\n- Executive Order 14028 (May 2021) required federal SBOM adoption, stronger procurement supply-chain security, and zero-trust architecture; NIST SP 800-161 Rev 1 (2022) gave comprehensive supply-chain risk guidance; and CISA stood up the ICT Supply Chain Risk Management Task Force — translating into new tests for SBOM maintenance, SBOM procurement requirements, and assessment of vendor software-development practices, not just operational security.\n- The consequential question for each Tier 1 vendor: has the organization assessed not just the vendor's security but the access its software or personnel hold in the customer's environment? A SOC 2 attests to the vendor's own environment, not to its software behaving only as intended in yours — so TPRM must add monitoring of vendor software behavior (network traffic, spawned processes, binary-signature integrity), because the most dangerous attack surface is the trusted relationship, and trust must be continuously verified.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Vendor Inventory", sub: "know every vendor", type: "attacker" },
          { label: "Risk Tiering", sub: "classify by impact", type: "system" },
          { label: "Security Assessment", sub: "SOC 2 / questionnaire", type: "victim" },
          { label: "Contract + Monitoring", sub: "right to audit + alerts", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "Target breach — HVAC vendor used as attack entry point" },
        { year: 2019, event: "SolarWinds build pipeline compromised (discovered December 2020)", highlight: true },
        { year: 2021, event: "Biden Executive Order 14028 — software supply chain security requirements" },
        { year: 2023, event: "SEC rules — vendor breach disclosure requirements for public companies" },
      ],
      keyTakeaways: [
        "Vendor inventory completeness is the foundation — shadow IT vendors not in the register cannot be managed",
        "Tier 1 critical vendors require SOC 2 Type II (not Type I), right-to-audit clauses, and continuous monitoring",
        "Questionnaire-only assessments are insufficient for Tier 1 vendors — independent attestation is required",
        "Vendor access must be deprovisioned immediately at relationship end — vendor accounts tied to active contracts",
        "Fourth-party risk requires mapping your vendors' key infrastructure dependencies — SolarWinds succeeded by exploiting trusted software",
        "Concentration risk: multiple Tier 1 vendors on the same cloud region create a single point of failure",
        "Software supply chain risk requires SBOM assessment and behavioral monitoring of vendor software in your environment",
        "Right-to-audit clauses must specify scope, notice requirements, and remediation obligations — vague clauses are unenforceable",
        "Breach notification requirements (72 hours for GDPR, 24 hours internal best practice) must be in vendor contracts",
        "Shadow IT creates unmanaged vendor relationships — procurement must route all vendor onboardings through TPRM before contract signing",
      ],
      references: [
        { title: "CISA Supply Chain Risk Management Resources", url: "https://www.cisa.gov/supply-chain-risk-management" },
        { title: "NIST SP 800-161 — Cybersecurity Supply Chain Risk Management", url: "https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-08-q1", type: "Core Idea", challenge: "Weakest vendor.", text: "What is the core supply-chain risk principle?", options: ["Your security is only as strong as the weakest vendor with access to your systems","Vendors are always safe","Only internal staff are risks","Vendors need no review"], correctIndex: 0, explanation: "Third-party access extends your attack surface." },
        { id: "audit-08-q2", type: "Vendor Tiering", challenge: "Tier 1 vs Tier 2.", text: "What distinguishes a Tier 1 (Critical) vendor?", options: ["Access to sensitive data/critical systems, often single-source, needing the highest assessment frequency","It's the cheapest vendor","It has no system access","It's a new vendor"], correctIndex: 0, explanation: "Tier 1 vendors carry the most risk and need the most scrutiny." },
        { id: "audit-08-q3", type: "Assessment Depth", challenge: "Beyond a questionnaire.", text: "Is a questionnaire-only assessment enough for a Tier 1 vendor with admin access?", options: ["No — Tier 1 needs SOC 2 Type II (or equivalent) plus contractual right-to-audit","Yes — a questionnaire suffices","Only a phone call is needed","No assessment is needed"], correctIndex: 0, explanation: "Critical vendors require evidence-based assurance, not self-reported forms." },
        { id: "audit-08-q4", type: "Real Incident", challenge: "SolarWinds, 2020.", text: "Why did the SolarWinds supply-chain attack succeed at so many orgs?", options: ["They failed to classify SolarWinds as a critical vendor needing enhanced monitoring","SolarWinds had no customers","It was an insider","It used a zero-day in browsers"], correctIndex: 0, explanation: "Trusted vendor software wasn't monitored as the critical dependency it was." },
        { id: "audit-08-q5", type: "Lapsed Assessment", challenge: "Past due.", text: "What's required when a Tier 1 vendor's annual assessment lapses beyond 365 days?", options: ["Suspend the vendor's access until a current assessment is completed","Wait until next quarter","Nothing","Give them a discount"], correctIndex: 0, explanation: "Continued access with a lapsed assessment is an unmitigated risk." },
        { id: "audit-08-q6", type: "Offboarding", challenge: "When the deal ends.", text: "When must a vendor's access be deprovisioned?", options: ["When the relationship ends — not at the next scheduled review","At the next quarterly review","Never","Only if they ask"], correctIndex: 0, explanation: "Access must be removed at relationship end, immediately." },
        { id: "audit-08-q7", type: "Monitoring", challenge: "Watch the software.", text: "A lesson from SolarWinds for critical vendors is to…", options: ["Monitor the vendor's software network activity, not just trust its updates","Auto-install all updates blindly","Avoid all vendors","Disable logging"], correctIndex: 0, explanation: "Enhanced monitoring of trusted software can catch supply-chain compromise." },
        { id: "audit-08-q8", type: "Concept", challenge: "Trust boundary.", text: "Why are vendors with system access in audit scope?", options: ["Their access and security posture directly affect your risk","They pay you","They're outside your control entirely","Auditors like paperwork"], correctIndex: 0, explanation: "Vendor risk is your risk when they can touch your systems." },
      ],
    },
    ctf: {
      scenario: "The Pentagon's vendor register has been pulled for audit. Identify the Tier 1 vendor with an overdue security assessment that has active privileged access to defense systems.",
      hint: "Check the vendor register and cross-reference assessment dates.",
      hints: [
        "Read: cat VENDOR-REGISTER.txt",
        "Check Tier 1 assessments: cat TIER1-ASSESSMENTS.txt",
        "View the finding: cat findings/OVERDUE-VENDOR.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/VENDOR-REGISTER.txt", value: "FLAG{V3ND0R_", label: "Vendor Register — Loaded" },
        { trigger: "/TIER1-ASSESSMENTS.txt", value: "T13R1_4SS3SSM3NT_", label: "Tier 1 Assessments — Reviewed" },
        { trigger: "/findings/OVERDUE-VENDOR.txt", value: "0V3RDUE}", label: "Overdue Vendor — Finding Confirmed" },
      ],
      files: {
        "/VENDOR-REGISTER.txt": [
          "PENTAGON VENDOR REGISTER (EXCERPT)",
          "====================================",
          "Vendor              Tier  Access Level         Last Assessment",
          "------------------  ----  -------------------  ---------------",
          "Lockheed Martin     1     Classified systems   2025-11-01",
          "Booz Allen Hamilton 1     Admin — all networks  2024-03-15",
          "SAIC                1     Read — logistics DB  2025-09-20",
          "Dell Technologies   2     Hardware only        2025-06-01",
          "Staples             3     No system access     N/A",
          "",
          "Tier 1 vendors require annual assessment. See TIER1-ASSESSMENTS.txt.",
        ].join("\n"),
        "/TIER1-ASSESSMENTS.txt": [
          "TIER 1 VENDOR ASSESSMENT STATUS",
          "================================",
          "Lockheed Martin:      Last: 2025-11-01  Days since: 196  Status: CURRENT",
          "Booz Allen Hamilton:  Last: 2024-03-15  Days since: 426  Status: OVERDUE",
          "SAIC:                 Last: 2025-09-20  Days since: 238  Status: CURRENT",
          "",
          "Booz Allen Hamilton: 426 days since last assessment.",
          "BAH has admin access to ALL classified networks.",
          "SOC 2 Type II expired. No current assessment on file.",
        ].join("\n"),
        "/findings/OVERDUE-VENDOR.txt": [
          "FINDING: BOOZ ALLEN HAMILTON — OVERDUE TIER 1 ASSESSMENT",
          "==========================================================",
          "Vendor: Booz Allen Hamilton",
          "Tier: 1 (Critical) — Admin access to all classified networks",
          "Last assessment: 2024-03-15 (426 days ago)",
          "Requirement: Annual (365 days max)",
          "SOC 2 Type II: EXPIRED",
          "",
          "CRITICAL: A vendor with admin access to all classified networks has no",
          "current security assessment on file.",
          "Required action: Suspend vendor access until assessment is completed.",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. Tier 1 (Critical) vendors require annual SOC 2 Type II reports AND contractual right-to-audit — questionnaires alone are insufficient",
          "  2. Vendor access must be suspended when the assessment lapses — continued access without current assessment is an unmitigated risk",
          "  3. Fourth-party risk: you must also assess your vendor's vendors; SolarWinds (2020) succeeded because affected orgs didn't classify it as critical",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "VENDOR-REGISTER.txt", isDir: false },
          { name: "TIER1-ASSESSMENTS.txt", isDir: false },
          { name: "findings", isDir: true },
        ],
        "/findings": [{ name: "OVERDUE-VENDOR.txt", isDir: false }],
      },
    },
  },

  // ─── audit-09: Data Privacy ────────────────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "European Data Protection Board", location: "Brussels, Belgium", era: "Present Day", emoji: "📋" },
    id: "audit-09",
    order: 9,
    title: "The Right to Be Forgotten",
    subtitle: "Data Privacy Audit — GDPR and Data Lifecycle Controls",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-09", name: "Privacy Auditor", emoji: "🔏" },
    challengeType: "ctf",
    info: {
      tagline: "Collecting data you do not need is a liability, not an asset.",
      year: 2018,
      overview: [
        "Data privacy audits assess whether an organization collects, processes, retains, and deletes personal data in line with applicable privacy law — primarily GDPR in Europe and CCPA in California, alongside sector rules such as HIPAA, GLBA, and COPPA. ISACA's privacy framework maps to GDPR's six lawful bases and eight data-subject rights, which gives auditors a single methodology that travels across jurisdictions. The stakes are mainstream rather than niche: GDPR's maximum fine is €20 million or 4 percent of global annual turnover, whichever is higher. A comprehensive audit covers seven domains, and it begins with data mapping — what personal data is held, where it lives, how it flows, who has access to it, and the documented legal basis for processing it — because without that map no other control can be designed or tested.",
        "The remaining domains and the findings they generate are tightly linked. Consent mechanisms must be testable; data-subject-rights fulfillment for deletion, access, portability, rectification, and objection must work reliably at scale and within the required timeframes; and retention and deletion schedules must be documented, implemented in the systems, and enforced either automatically or through regular review. The most common findings all track the gap between policy and reality: personal data retained past its documented period because the schedule exists but automated deletion does not, processing with no documented Article 6 lawful basis because new analytics, marketing automation, or data-sharing shipped without a privacy assessment, DSARs missed beyond the 30-day window because the process is manual and untrained, and missing DPIAs for high-risk processing such as large-scale profiling, systematic monitoring, or sensitive-category data.",
        "Two structural elements are tested directly. The Data Protection Officer (DPO) is required for large-scale processing of special categories, large-scale systematic monitoring, or public authorities, and auditors verify that the role exists where it is required, that it has genuine independence rather than reporting to the very people whose processing it oversees, that it has sufficient resources and expertise, and that it is involved in all data-protection matters — flagging conflicts where, for instance, the CISO has also been named DPO. The data map itself is documented as the Record of Processing Activities (RoPA) under GDPR Article 30, and it must list the controller and DPO contacts, the processing purposes, the categories of data subjects and personal data, the recipients including any international transfers, the retention periods, and the security measures. Because it must be current, auditors test the RoPA against recent deployments, vendor onboardings, and IT data-flow diagrams, looking for flows that exist in reality but never made it into the record.",
        "Two forward-looking requirements round out the scope. International transfers of personal data outside the EEA to countries without an adequacy decision require Standard Contractual Clauses (updated in 2021), Binding Corporate Rules, or an approved certification scheme; the Schrems II invalidation of Privacy Shield in 2020 made US-EU transfers genuinely complex, so auditors verify that all EEA-to-US flows are identified, that valid transfer mechanisms are in place, and that Transfer Impact Assessments are completed where they are required. Privacy by Design is the other requirement — privacy controls built in from the start and tested through the SDLC. The auditor asks whether privacy review is a mandatory pre-production checkpoint, whether minimization, pseudonymization, and encryption are considered at design time, whether data collection is opt-in by default, and whether retention periods are configured at deployment rather than retrofitted after data has already accumulated. An organization that keeps discovering privacy violations in existing systems instead of preventing them has a Privacy by Design gap that will recur as findings cycle after cycle.",
      ],
      technical: {
        title: "GDPR Key Requirements for Auditors",
        body: [
          "GDPR Article 5's principles are the testing framework, and storage limitation generates the most findings:\n- Lawfulness/fairness/transparency (tested via privacy notices, consent, and collection practices), purpose limitation (data collected for one purpose not reused for incompatible ones), and data minimization (only data necessary for the stated purpose — auditors flag collected fields that can't be justified).\n- Storage limitation, Article 5(1)(e) — the most common finding source: it requires a documented retention schedule with a legal basis per category, automated deletion or archival enforcing it, regular review of data approaching limits, and legal-hold procedures, and auditors test it by querying personal-data tables for records older than the documented period.",
          "Two of the hardest requirements to operationalize:\n- Article 17 right to erasure — on request, delete from all primary systems, routinely-accessed backups (archived backups may be exempt but must be documented), and downstream systems the data was shared with, confirming to the subject within 30 days; the challenge is that personal data is rarely in one place (CRM, marketing automation, analytics, warehouses, billing, support ticketing), so auditors trace sample deletion requests through each system for deletion evidence.\n- DPIAs (Article 35) — mandatory before processing 'likely to result in a high risk,' which EDPB guidance says always includes systematic automated evaluation of personal aspects, large-scale special-category processing, and systematic monitoring of public areas; auditors check the processing list against the triggers and verify a DPIA preceded each, since a DPIA done after processing began is a finding.",
          "Two operational controls round out the core testing:\n- Consent management — where consent is the lawful basis, it must be freely given (not bundled with service acceptance), specific (per purpose), informed, and unambiguous (affirmative action, no pre-ticked boxes), and as easy to withdraw as to give; auditors review collection interfaces, the consent database, and the withdrawal mechanism, verify processing actually stops on withdrawal, and most often find consent unlawfully bundled with terms-of-service acceptance.\n- Breach notification — the 72-hour clock to the supervisory authority starts when the organization 'becomes aware,' a moment that must be defined in the IR plan; auditors examine that definition, the escalation path to DPO and authority, pre-prepared templates, and any past notifications — and a 9-to-5 security team is a structural gap, since the 72 hours include weekends and holidays.",
          "Cross-border transfer compliance is the most legally complex area after Schrems II:\n- Auditors must map the full picture of EEA personal data flowing out — analytics tools (Google, Adobe) to US servers, cloud providers processing EEA data in US regions, and enterprise software (Salesforce, Workday, ServiceNow) on US infrastructure.\n- For each flow they verify the transfer mechanism (SCCs are most common post-Schrems II), whether a Transfer Impact Assessment was conducted, and whether supplementary measures (encryption the US company can't break, pseudonymization before transfer) are in place where the TIA requires them.",
        ],
        codeExample: {
          label: "Data retention audit — finding records past retention date",
          code: `-- Find personal data records past retention schedule
SELECT
  table_name,
  COUNT(*) as record_count,
  MIN(created_date) as oldest_record,
  DATEDIFF(day, MIN(created_date), GETDATE()) as days_retained
FROM personal_data_inventory
WHERE data_category IN ('PII', 'sensitive', 'financial')
GROUP BY table_name
HAVING DATEDIFF(day, MIN(created_date), GETDATE()) > retention_days
ORDER BY days_retained DESC;

-- Output example:
-- customer_analytics  45,210 records  oldest: 2017-03-01  3,362 days retained
-- Retention schedule: 730 days (2 years)  → EXCEEDS BY 1,632 DAYS — FINDING`,
        },
      },
      incident: {
        title: "Meta GDPR Fine — Data Transfers to the US (2023)",
        when: "May 2023",
        where: "Ireland (Meta's EU headquarters)",
        impact: "€1.2B fine — largest GDPR fine ever issued",
        body: [
          "The Irish DPC's May 2023 decision fined Meta Platforms Ireland €1.2 billion — the largest in GDPR history — for transferring European users' personal data to US servers without an adequate legal basis:\n- The failure stemmed from a legal sequence: the EU-US Privacy Shield framework was invalidated by the CJEU in July 2020 (Schrems II).\n- Meta then relied on Standard Contractual Clauses for its EU-to-US Facebook transfers, but the DPC concluded the SCCs were insufficient given US surveillance laws and that Meta had failed to implement effective supplementary measures.",
          "The Meta case had an unusually clear, largely undisputed factual record:\n- Meta knew it was transferring EEA data to US servers, knew Privacy Shield had been invalidated, and continued the transfers; Meta's legal analysis judged SCCs sufficient, the DPC judged they weren't.\n- The audit lesson isn't that Meta failed to document its legal basis — it did — but that a documented basis must be valid, assessed against current law rather than historical assumption, so privacy auditors must evaluate whether a basis is currently sound, not merely present.",
          "The fine exposed the practical difficulty of GDPR compliance for global data-driven companies:\n- Meta processes billions of users' data across thousands of systems, so mapping all EEA-origin flows, assessing each transfer mechanism against current law, and implementing supplementary measures is an enormous undertaking.\n- Organizations that haven't invested in that mapping and assessment face the same enforcement risk Meta did, in a progressively more aggressive environment.",
          "Meta yields specific testing questions and a caution about the new transfer framework:\n- Has the organization comprehensively mapped all EEA transfers at the data-flow level (not just the contract level — knowing Salesforce processes EEA data isn't enough; which data, which region, which mechanism), conducted Transfer Impact Assessments for all EEA-to-US transfers and updated them after legal developments, and actually implemented the supplementary measures the TIAs require rather than documenting them in policy only?\n- The EU-US Data Privacy Framework (DPF, July 2023) offers a new adequacy mechanism for self-certified US companies, but it has already been challenged and its stability is uncertain — so auditors assess whether reliance on the DPF is appropriate and whether contingency plans and EEA data-residency controls exist for a scenario where it's invalidated like Privacy Shield.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Data Mapping", sub: "what, where, why", type: "attacker" },
          { label: "Lawful Basis", sub: "GDPR Article 6", type: "system" },
          { label: "Subject Rights", sub: "access, delete, port", type: "victim" },
          { label: "72h Breach Notice", sub: "to supervisory authority", type: "result" },
        ],
      },
      timeline: [
        { year: 2018, event: "GDPR effective — May 25, 2018", highlight: true },
        { year: 2019, event: "British Airways — £20M fine for breach affecting 400K customers" },
        { year: 2021, event: "WhatsApp — €225M fine for transparency violations" },
        { year: 2023, event: "Meta — €1.2B fine for unlawful data transfers to US" },
      ],
      keyTakeaways: [
        "Data minimization: only collect what you need for documented purposes — excess data is a liability, not an asset",
        "Retention schedules must be enforced in systems, not just documented in policy — manual deletion reviews consistently fail",
        "Data subject requests (deletion, access, portability) must be fulfilled within 30 days — DSAR process must be tested at scale",
        "GDPR breach notification: 72 hours to supervisory authority from becoming aware — weekends and holidays count",
        "DPIA is mandatory before high-risk processing begins — post-hoc DPIAs are findings, not remediation",
        "International transfers require valid mechanisms (SCCs + TIA) — documenting a legal basis that is legally invalid is still a violation",
        "DPO independence requires that the DPO not report to the person whose processing they oversee — dual roles create conflicts",
        "RoPA (Article 30 Record of Processing Activities) must be current — undocumented data flows are unmapped risks",
        "Consent must be freely given, specific, informed, and unambiguous — bundled consent with service terms violates GDPR",
        "Privacy by Design requires privacy controls at system inception, not as retrofit compliance — test SDLC privacy checkpoints",
      ],
      references: [
        { title: "GDPR Full Text — EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679" },
        { title: "ISACA Privacy Audit Framework", url: "https://www.isaca.org/resources/privacy" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-09-q1", type: "Core Idea", challenge: "Data you don't need.", text: "Why is collecting data you don't need a liability?", options: ["Unneeded data is risk to store and protect, not an asset","More data is always better","Data has no risk","Regulators reward hoarding"], correctIndex: 0, explanation: "Excess data expands breach impact and compliance burden." },
        { id: "audit-09-q2", type: "GDPR", challenge: "Storage limitation.", text: "What does GDPR Article 5(1)(e) (storage limitation) require?", options: ["Delete personal data once it's no longer needed, per the retention schedule","Keep all data forever","Encrypt data only","Sell old data"], correctIndex: 0, explanation: "Data must not be kept longer than necessary for its purpose." },
        { id: "audit-09-q3", type: "GDPR", challenge: "The 72-hour clock.", text: "Under GDPR, how quickly must a breach be reported to the supervisory authority?", options: ["Within 72 hours of discovery","Within 30 days","Within 1 year","Never"], correctIndex: 0, explanation: "GDPR requires authority notification within 72 hours of discovery." },
        { id: "audit-09-q4", type: "Violation", challenge: "Over-retained data.", text: "A table kept 450,000 records for 3,353 days against a 730-day policy violates what — and the action?", options: ["Article 5(1)(e) storage limitation — delete records older than 730 days and notify the DPO","Nothing — retention is optional","Article 17 only, no action","Encryption rules only"], correctIndex: 0, explanation: "Over-retention breaches storage limitation; purge and notify the DPO." },
        { id: "audit-09-q5", type: "Real Incident", challenge: "Meta, 2023.", text: "Meta's €1.2B GDPR fine in 2023 was for…", options: ["Transferring EU personal data to US servers after the legal basis was invalidated","A data breach of passwords","Selling data to spammers","Not encrypting disks"], correctIndex: 0, explanation: "Invalid EU-US data transfers drove the record fine." },
        { id: "audit-09-q6", type: "Right to Erasure", challenge: "Delete everywhere.", text: "Under GDPR Article 17 (right to erasure), a deletion request must be fulfilled…", options: ["Within 30 days, removing data from all systems including accessible backups","Whenever convenient","Only from the main database","Within 1 year"], correctIndex: 0, explanation: "Erasure covers all stores the data can be accessed from, including backups." },
        { id: "audit-09-q7", type: "Principle", challenge: "Minimize.", text: "Data minimization means…", options: ["Collect and keep only the data actually needed for a stated purpose","Collect as much as possible","Never collect data","Keep data indefinitely"], correctIndex: 0, explanation: "Less data held means less to leak and less to govern." },
        { id: "audit-09-q8", type: "Concept", challenge: "Retention schedules.", text: "Why do organizations need documented retention schedules?", options: ["To prove data is deleted when no longer needed, satisfying storage limitation","To slow down deletes","For decoration","They're not needed"], correctIndex: 0, explanation: "Schedules operationalize and evidence the storage-limitation principle." },
      ],
    },
    ctf: {
      scenario: "You are auditing a company's GDPR compliance. The data inventory shows personal data retained far beyond policy. Identify the table with the worst violation and confirm the deletion requirement.",
      hint: "Read the data inventory and compare to retention schedules.",
      hints: [
        "Read: cat DATA-INVENTORY.txt",
        "Check schedules: cat RETENTION-SCHEDULE.txt",
        "View finding: cat findings/RETENTION-VIOLATION.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/DATA-INVENTORY.txt", value: "FLAG{GDPR_", label: "Data Inventory — Loaded" },
        { trigger: "/RETENTION-SCHEDULE.txt", value: "D4T4_R3T3NT10N_", label: "Retention Schedule — Compared" },
        { trigger: "/findings/RETENTION-VIOLATION.txt", value: "V10L4T10N}", label: "Retention Violation — Confirmed" },
      ],
      files: {
        "/DATA-INVENTORY.txt": [
          "PERSONAL DATA INVENTORY",
          "=======================",
          "Table                   Records    Oldest Record    Days Retained",
          "----------------------  ---------  ---------------  -------------",
          "customer_profiles       2,340,000  2019-01-15       2676 days",
          "transaction_history     8,100,000  2018-06-01       2905 days",
          "marketing_analytics     450,000    2017-03-10       3353 days",
          "support_tickets         230,000    2020-11-01       1656 days",
          "",
          "Cross-reference with RETENTION-SCHEDULE.txt.",
        ].join("\n"),
        "/RETENTION-SCHEDULE.txt": [
          "GDPR DATA RETENTION SCHEDULE",
          "=============================",
          "customer_profiles       Retention: 1825 days (5 years)",
          "transaction_history     Retention: 2555 days (7 years — financial regulation)",
          "marketing_analytics     Retention: 730 days (2 years)",
          "support_tickets         Retention: 1825 days (5 years)",
          "",
          "marketing_analytics: retained 3353 days vs 730-day limit — EXCEEDS BY 2623 DAYS.",
        ].join("\n"),
        "/findings/RETENTION-VIOLATION.txt": [
          "GDPR FINDING: MARKETING_ANALYTICS RETENTION VIOLATION",
          "=======================================================",
          "Table: marketing_analytics",
          "Records: 450,000 EU data subjects",
          "Oldest record: 2017-03-10 (3353 days ago)",
          "Retention policy: 730 days",
          "Overage: 2623 days (7.2 years past retention date)",
          "",
          "GDPR Article 5(1)(e): storage limitation principle violated.",
          "Required action: Delete all records older than 730 days immediately.",
          "Notify DPO. Consider whether supervisory authority notification is required.",
          "Rating: CRITICAL — potential regulatory action",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. GDPR Article 5(1)(e) — storage limitation: personal data must not be kept longer than necessary for the stated purpose",
          "  2. Data past its retention date is a liability, not an asset — 450,000 records 7.2 years overdue exposes the org to supervisory authority fines",
          "  3. Data Protection Impact Assessments (DPIAs) are required before high-risk processing; the DPO must be notified of all retention violations",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "DATA-INVENTORY.txt", isDir: false },
          { name: "RETENTION-SCHEDULE.txt", isDir: false },
          { name: "findings", isDir: true },
        ],
        "/findings": [{ name: "RETENTION-VIOLATION.txt", isDir: false }],
      },
    },
  },

  // ─── audit-10: Pen Test Scoping ────────────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "NIST Campus", location: "Gaithersburg, Maryland", era: "Present Day", emoji: "🔍" },
    id: "audit-10",
    order: 10,
    title: "Rules of Engagement",
    subtitle: "Penetration Test Scoping and Authorization",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-10", name: "Pentest Auditor", emoji: "🎯" },
    challengeType: "ctf",
    info: {
      tagline: "An unauthorized penetration test is a crime. Authorization is the only thing separating a pentester from an attacker.",
      year: 2003,
      overview: [
        "Penetration testing is a critical control in any mature security program: a controlled adversarial simulation that validates whether defenses actually work in practice rather than only on paper. ISACA auditors review pentest programs to confirm two things — that they deliver genuine assurance rather than compliance theater, and that the authorization structure protects both the organization and the testers. That second point is not a formality. The line between a security professional and a criminal is defined entirely by the scope of written authorization, because the same technical actions taken without it are federal crimes under the Computer Fraud and Abuse Act (CFAA) and its equivalents elsewhere.",
        "Two documents make a test legal, and both must come from the right authority. The scope document is the legal foundation: it names exactly which systems are in scope by IP range, domain, application, and environment, which testing types are permitted — external, internal, web application, social engineering, physical, or wireless — the precise testing window and any blackout periods, and the escalation procedures for critical findings. Out-of-scope systems must be listed explicitly, because prosecutors apply the most conservative possible reading of what was authorized. Authorization itself must flow from the system owner, meaning the business or legal entity responsible, not from IT management alone when business units own the systems; and cloud workloads need the provider's approval as well, since AWS, Azure, and GCP each publish pentest policies defining what is allowed without notice and what requires advance approval.",
        "The next layer operationalizes the scope and protects the report it produces. Where the scope defines what may be tested, the rules of engagement (ROE) define how — the authorized tools and methods, the permitted versus prohibited techniques (denial-of-service may be explicitly barred on production), the handling of discovered credentials, evidence collection and retention, the protocol for communicating urgent findings, and what the tester must do upon discovering an active, real intrusion, which happens more often than clients expect. The test report is itself security-sensitive, a roadmap of working exploits and paths to the most critical findings, so its distribution is restricted to authorized recipients — typically the CISO and a small number of IT leaders — transmitted securely by encrypted email or a secure portal, and stored in an access-controlled repository, never on a general shared drive.",
        "Two practices determine whether the test produces lasting value. The first is remediation tracking: a kickoff within five business days, a plan with owners and due dates assigned by severity — critical within 30 days, high within 60, medium within 90 — and a retest against the specific remediated vulnerabilities rather than a general rescan, because that targeted retest is the actual evidence of effective remediation. The second is recognizing how a red team engagement differs from a pentest. A pentest has a defined scope, a find-and-report methodology, and a two-to-four-week duration; a red team instead simulates an advanced persistent threat working toward a defined objective such as reaching the most sensitive data or simulating ransomware, using any TTPs available including social engineering, physical intrusion, and the supply chain, running for months and requiring additional authorization for human targets, facilities, and supplier relationships — authorization that auditors verify was explicitly granted.",
      ],
      technical: {
        title: "Pentest Scoping Checklist",
        body: [
          "An adequate authorization needs specific technical content:\n- In-scope systems must list exact IP addresses or CIDR ranges (not 'the web environment'), hostnames, application URLs for web testing, and cloud account IDs or resource groups; the out-of-scope section is equally important, explicitly listing excluded systems with reasons (production financial transaction systems, unauthorized vendor-hosted systems, shared-hosting environments affecting other tenants).\n- The testing window must be specific — exact UTC times (avoiding timezone confusion), whether 24/7 or defined hours, blackout dates (quarter-end, releases, board meetings), and the max duration of any single sustained activity — because testing generates alerts the security team will investigate, and clear timing prevents wasted incident work and confusion with a real attack.",
          "Who signs and which provider rules apply are both gating:\n- The authorization must be signed by someone with legal authority — typically the CIO, CISO, or a contractually empowered executive; third-party-operated systems need the third party's authorization too, and federal systems require specific FISMA authorization and possibly agency legal counsel.\n- Cloud rules vary and must be researched first: AWS allows most testing of your own resources but bars AUP violations like DDoS and testing from EC2 against non-Amazon targets, Azure requires notification via Microsoft's Penetration Testing Rules of Engagement form, and GCP resembles AWS — all three prohibit anything affecting other customers, and violations can suspend the account.",
          "Two procedures the scope document must spell out:\n- Emergency contact and escalation — when a tester finds an active breach, an internet-visible critical exposure, or a vulnerability likely to be exploited imminently, they must reach a human with authority, not a generic inbox: primary and secondary contacts with personal mobile numbers, an escalation path if neither answers within 15 minutes, and the authority to decide whether testing pauses pending remediation.\n- Data handling — pentesters routinely find passwords, API keys, PII, and health and financial records, so the document must specify what to do on discovery (screenshot to document, don't exfiltrate or retain beyond demonstrating the finding, report immediately), what may go in the report (the path and type of data, not the content), and how artifacts are handled and destroyed at close.",
          "Post-engagement scope confirmation is a best practice that prevents authorization disputes:\n- Within 24 hours of finishing, the team should provide a brief written summary of which systems were tested, which methodologies were used, and any activities at the boundary of the scope's authorization, describing how ambiguous language was interpreted.\n- That contemporaneous record can be referenced later, and organizations that skip it and then dispute findings as 'out of scope' are retroactively rewriting the scope document — eroding trust and undermining the engagement's value.",
        ],
        codeExample: {
          label: "Scope validation — confirming IP is in authorized range",
          code: `#!/usr/bin/env python3
# Before any scan, validate target is in scope

import ipaddress

AUTHORIZED_RANGES = [
    "192.168.1.0/24",
    "10.0.0.0/8",
    "172.16.50.0/24",
]

OUT_OF_SCOPE = [
    "192.168.1.100",  # payment processor — explicitly excluded
    "10.0.0.1",       # core router — excluded
]

def is_authorized(target_ip):
    for oor in OUT_OF_SCOPE:
        if target_ip == oor:
            return False, "EXPLICITLY OUT OF SCOPE — DO NOT TEST"
    for cidr in AUTHORIZED_RANGES:
        if ipaddress.ip_address(target_ip) in ipaddress.ip_network(cidr):
            return True, "IN SCOPE"
    return False, "NOT IN SCOPE"`,
        },
      },
      incident: {
        title: "The AT&T Pentest Authorization Dispute (2010)",
        when: "2010",
        where: "United States",
        impact: "Security researchers arrested; charges later dropped; highlighted importance of written authorization",
        body: [
          "In June 2010, two members of the hacker group Goatse Security found that AT&T's iPad activation API leaked subscribers' data:\n- The API exposed users' ICC-ID numbers (SIM identifiers), and iterating through ICC-IDs returned the email addresses of iPad owners on AT&T's 3G service.\n- Their script submitted ~114,000 ICC-IDs and retrieved emails including prominent politicians, military officials, and executives, then reported it to Gawker, which published; AT&T was notified and patched, and the FBI investigated the researchers.",
          "The legal question turned on the CFAA's 'exceeded authorized access' even though no access control was bypassed:\n- AT&T's API was publicly accessible without authentication, and the researchers bypassed nothing.\n- The government argued that automated extraction far beyond any normal user's activity was unauthorized access, the researchers argued they accessed public information through its documented interface, and a federal grand jury indicted both in 2011.",
          "The charges were plea-bargained down with suspended sentences, but the effect on security research was chilling:\n- It established that researchers who discover and demonstrate vulnerabilities without explicit written authorization face real criminal jeopardy even when acting in good faith.\n- The case directly informed later CFAA reform, including the 2022 DOJ policy that good-faith security research won't be prosecuted, and the bug-bounty movement's emphasis on clear written safe-harbor provisions.",
          "For IT audit, AT&T shows the authorization structure is not a formality, and points to a broader control:\n- Written authorization from the correct system owner — not just IT management when business units own the systems, not just the primary client when cloud providers or third parties also own tested systems — is what turns criminal conduct into authorized testing, so scope must be specific and comprehensive, ROE explicit, and authorization in place before any testing, since retroactive authorization is no defense.\n- Today's disclosure frameworks and bug-bounty programs (HackerOne, Bugcrowd) provide written authorization, scope, safe harbor, and reporting, so auditors should also check whether the organization has a vulnerability disclosure policy (VDP) giving external researchers a legal safe harbor — because good-faith researchers are valuable intelligence, and lacking a VDP discourages them while doing nothing to deter attackers.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Scope Definition", sub: "what is in/out", type: "attacker" },
          { label: "Written Authorization", sub: "from system owner", type: "system" },
          { label: "Rules of Engagement", sub: "what is permitted", type: "victim" },
          { label: "Findings + Remediation", sub: "tracked to closure", type: "result" },
        ],
      },
      timeline: [
        { year: 1986, event: "CFAA enacted — unauthorized computer access becomes federal crime" },
        { year: 2003, event: "NIST SP 800-42 — guideline on network security testing published" },
        { year: 2010, event: "AT&T/iPad incident — authorization requirement in stark relief", highlight: true },
        { year: 2022, event: "CFAA reform — good-faith security research explicitly protected" },
      ],
      keyTakeaways: [
        "Written authorization from the system owner is the legal boundary between security professional and criminal — verbal authorization is not authorization",
        "Cloud workloads require explicit cloud provider approval — each major provider has a separate penetration testing policy",
        "Out-of-scope systems must be explicitly listed — scope ambiguity will be resolved against the tester in any legal dispute",
        "All discovered credentials and sensitive data must be handled per the data handling section — do not retain real data beyond the finding demonstration",
        "Emergency contact list with personal mobile numbers is required — critical findings need immediate human response, not generic inbox routing",
        "Red team engagements require additional authorization categories: social engineering targets, physical facility access, supply chain relationships",
        "Report distribution must be restricted and encrypted — pentest reports are attack roadmaps that must be access-controlled",
        "Remediation tracking requires a retest — retesting the remediation is evidence of effectiveness, not just another vulnerability scan",
        "Post-engagement scope confirmation creates a contemporaneous record of what was tested and how ambiguous scope was interpreted",
        "Vulnerability Disclosure Policies (VDPs) with safe harbor provisions encourage legitimate researchers — evaluate whether the organization has one",
      ],
      references: [
        { title: "NIST SP 800-115 — Technical Guide to Information Security Testing", url: "https://csrc.nist.gov/publications/detail/sp/800-115/final" },
        { title: "AWS Penetration Testing Policy", url: "https://aws.amazon.com/security/penetration-testing/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-10-q1", type: "Core Idea", challenge: "Crime vs job.", text: "What single thing separates a penetration tester from a criminal hacker?", options: ["Written authorization from the system owner for the systems and tests performed","A better laptop","A certification alone","A friendly attitude"], correctIndex: 0, explanation: "Authorization is the legal protection that makes testing lawful." },
        { id: "audit-10-q2", type: "Cloud", challenge: "The provider's rules.", text: "If a cloud workload is within the authorized IP range, is more approval needed before testing?", options: ["Yes — cloud providers (AWS/Azure/GCP) each have their own pentest approval policies","No — IP range is enough","Only for on-prem","Never"], correctIndex: 0, explanation: "Cloud workloads require explicit provider authorization too." },
        { id: "audit-10-q3", type: "Out of Scope", challenge: "You hit the wrong net.", text: "A tester scans an explicitly out-of-scope core banking subnet. What must happen?", options: ["Document it, disclose to the client within 24 hours, and cease testing immediately","Keep going quietly","Delete the logs","Ignore it"], correctIndex: 0, explanation: "Out-of-scope access must be stopped, documented, and disclosed." },
        { id: "audit-10-q4", type: "Real Incident", challenge: "AT&T / iPad, 2010.", text: "What did the 2010 AT&T iPad incident illustrate?", options: ["Without written authorization, access — even with defensive intent — can be prosecuted","Encryption is unnecessary","Cloud testing is always legal","Pentests need no scope"], correctIndex: 0, explanation: "Good intentions don't substitute for authorization." },
        { id: "audit-10-q5", type: "Scope Document", challenge: "List the no-go zones.", text: "Does listing only authorized IPs (without listing out-of-scope systems) adequately protect the tester?", options: ["No — out-of-scope systems must be explicitly listed; ambiguity protects no one","Yes — listing in-scope is enough","Only for cloud","Scope docs are optional"], correctIndex: 0, explanation: "Explicit out-of-scope listings remove dangerous ambiguity." },
        { id: "audit-10-q6", type: "Authorization", challenge: "Who signs.", text: "Whose signature makes a pentest authorization valid?", options: ["The system owner authorizing the specific systems and test types","Any employee","The tester themselves","No one — it's implied"], correctIndex: 0, explanation: "The owner must authorize the defined scope and test types." },
        { id: "audit-10-q7", type: "Concept", challenge: "Rules of engagement.", text: "Why are clear rules of engagement essential before testing?", options: ["They define what's permitted, protecting both client and tester legally","They slow the test","They're just paperwork","They help attackers"], correctIndex: 0, explanation: "Defined scope and ROE keep the engagement lawful and bounded." },
        { id: "audit-10-q8", type: "Definition", challenge: "The key document.", text: "The document that authorizes and bounds a penetration test is the…", options: ["Scope / rules-of-engagement (authorization) document","Invoice","Marketing brief","Org chart"], correctIndex: 0, explanation: "Scope/authorization defines and legally protects the engagement." },
      ],
    },
    ctf: {
      scenario: "You are reviewing a penetration test engagement. The scope document and tester's activity log have been loaded. Determine whether the tester exceeded the authorized scope.",
      hint: "Compare the tester's activity log against the authorized scope document.",
      hints: [
        "Read: cat SCOPE-DOCUMENT.txt",
        "Check activity: cat TESTER-ACTIVITY-LOG.txt",
        "View finding: cat findings/SCOPE-VIOLATION.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/SCOPE-DOCUMENT.txt", value: "FLAG{P3NT3ST_", label: "Scope Document — Loaded" },
        { trigger: "/TESTER-ACTIVITY-LOG.txt", value: "SC0P3_V10L4T10N_", label: "Activity Log — Compared" },
        { trigger: "/findings/SCOPE-VIOLATION.txt", value: "CFAA}", label: "Scope Violation — Confirmed" },
      ],
      files: {
        "/SCOPE-DOCUMENT.txt": [
          "PENETRATION TEST SCOPE DOCUMENT",
          "================================",
          "Client: Meridian Bank",
          "Tester: RedTeam Associates",
          "Period: 2026-05-01 through 2026-05-14",
          "",
          "IN SCOPE:",
          "  192.168.10.0/24  — DMZ web servers",
          "  192.168.20.0/24  — application servers",
          "",
          "EXPLICITLY OUT OF SCOPE:",
          "  192.168.30.0/24  — core banking systems (production)",
          "  192.168.40.0/24  — ATM network",
          "  Social engineering against customers",
          "",
          "Permitted: External network testing, web application testing.",
          "Prohibited: Exploitation of production banking systems.",
        ].join("\n"),
        "/TESTER-ACTIVITY-LOG.txt": [
          "TESTER ACTIVITY LOG — RedTeam Associates",
          "=========================================",
          "2026-05-02 09:15  nmap scan 192.168.10.0/24 — IN SCOPE",
          "2026-05-03 14:30  web app test 192.168.20.45 — IN SCOPE",
          "2026-05-05 11:00  nmap scan 192.168.30.0/24 — CORE BANKING",
          "2026-05-07 15:45  exploit attempt 192.168.30.12 — CORE BANKING",
          "2026-05-10 09:00  phishing email to customer@meridianbank.com — PROHIBITED",
          "",
          "2026-05-05 and 2026-05-07: Core banking (out of scope) accessed.",
          "2026-05-10: Customer social engineering prohibited by scope document.",
        ].join("\n"),
        "/findings/SCOPE-VIOLATION.txt": [
          "FINDING: PENETRATION TESTER EXCEEDED AUTHORIZED SCOPE",
          "=======================================================",
          "Violation 1: Scanned 192.168.30.0/24 (core banking) — explicitly out of scope",
          "Violation 2: Exploited 192.168.30.12 — production banking system",
          "Violation 3: Phished a customer — social engineering against customers prohibited",
          "",
          "Legal exposure: CFAA violations possible if client pursues action.",
          "Required action: Cease all testing immediately. Legal review required.",
          "Report all out-of-scope access to client within 24 hours.",
          "Rating: CRITICAL — unauthorized access to production financial systems",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. Written authorization from the system owner is the legal boundary between a penetration tester and a criminal — ambiguity protects no one",
          "  2. Out-of-scope access must be self-reported to the client within 24 hours regardless of who discovers the violation first",
          "  3. Cloud workloads require separate cloud provider authorization (AWS, Azure, GCP each have their own pentest approval policy)",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "SCOPE-DOCUMENT.txt", isDir: false },
          { name: "TESTER-ACTIVITY-LOG.txt", isDir: false },
          { name: "findings", isDir: true },
        ],
        "/findings": [{ name: "SCOPE-VIOLATION.txt", isDir: false }],
      },
    },
  },

  // ─── audit-11: Audit Evidence ──────────────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "SEC Headquarters", location: "Washington, DC", era: "Present Day", emoji: "⚖️" },
    id: "audit-11",
    order: 11,
    title: "The Evidence Chain",
    subtitle: "Audit Evidence Standards and Sampling Methodology",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-11", name: "Evidence Examiner", emoji: "🔬" },
    challengeType: "ctf",
    info: {
      tagline: "An assertion without evidence is an opinion. An audit finding without evidence is worthless.",
      year: 1972,
      overview: [
        "Audit evidence is the information auditors collect and evaluate to support their conclusions about whether controls operate effectively, and ISACA requires it to carry three attributes at once. It must be sufficient — enough of it, with an adequate sample size, the right period covered, and a well-defined population. It must be reliable — drawn from a credible source through a sound method and not manipulated. And it must be relevant — it has to actually test the control in question, since evidence that a backup ran does not test whether that backup is restorable. Failure on any one of the three invalidates the conclusion. When testing every item is impractical, sampling lets the auditor test a representative subset instead: for 1,200 change tickets, statistical sampling gives every item a known, non-zero chance of selection and lets results be projected with measurable precision, whereas judgmental, non-statistical sampling leans on auditor expertise but can describe only the sample and never project to the whole population.",
        "Two foundations govern how evidence is gathered and how far it can be trusted. The first is attribute sampling, the most common statistical method in IT audit, which tests a binary attribute — the control either operated or it did not. The auditor defines the population (all Q1 2026 change tickets), the attribute (each ticket carries CAB approval before deployment), the tolerable deviation rate (the maximum failures that still allow an 'effective' conclusion, typically 5 to 10 percent), the confidence level (95 percent is standard), and the expected deviation rate (a prior estimate, assumed at 0 percent if unknown), and statistical tables then set the minimum sample size. The second is chain of custody, which documents who collected each piece of evidence, when, from what source, by what method, and how it has been stored since. This matters because workpapers may later support legal proceedings, regulatory examinations, or litigation in which authenticity is challenged, so digital evidence adds hash values such as MD5 or SHA-256 captured at collection, authoritative timestamps, and storage that records every access.",
        "Two practices then scale and standardize the work. Computer-Assisted Audit Techniques (CAATs) automate evidence collection and analysis using data tools such as ACL/Galvanize, IDEA, and SQL, log platforms such as Splunk and Elastic, and configuration-comparison and reconciliation tools; they let auditors test entire populations instead of samples, run analyses that would be infeasible by hand such as comparing every payroll disbursement against the current employee roster, and produce reproducible evidence, since the same CAAT run against the same data yields the same result. Workpaper documentation standards then require, for each piece of evidence, the test objective, the population and sample definition, the method, the evidence examined with source references, the results including any deviations, and a conclusion. The test of adequacy is that another auditor with no prior knowledge could read the workpaper and understand exactly what was tested, how, and what was found — so a workpaper that requires oral explanation to be understood is, by definition, not adequately documented.",
        "An evidence-quality hierarchy guides how much weight to place on each type. Physical evidence — the auditor personally observing the control operate, by watching a CAB meeting, observing a restoration, or extracting data directly — sits at the top, because it cannot be fabricated after the fact. Documentary evidence such as logs, reports, screenshots, signed documents, and system extracts ranks second, and is reliable when pulled directly from the source system rather than received from management. Testimonial evidence — the representations people make in interviews — ranks lowest, because it depends entirely on the speaker's truthfulness, so auditors stay skeptical of any management claim that is unsupported by physical or documentary evidence, especially for the high-risk controls.",
      ],
      technical: {
        title: "Statistical Sampling for IT Audit",
        body: [
          "Attribute sampling starts with a clean population and a defensible sample size:\n- The population must be clearly bounded — a start (audit period beginning), an end, and a membership criterion (all production change tickets, all privileged accounts, all vendor invoices above $10,000) — and obtained from the source system, not management summaries that may omit inconvenient items; completeness is tested against independent counts, so 1,200 tickets in the change system but 1,247 deployments in the deployment log requires investigation.\n- Sample size comes from statistical tables: at 95% confidence, 5% tolerable, and 0% expected deviation it's 60, but as expected deviation rises the size grows sharply (about 150 at 2% expected) — which is why auditors shouldn't assume zero expected deviation when prior experience suggests the control has failed before.",
          "Two steps determine validity and meaning:\n- Random selection is required for statistical validity — every item needs a known non-zero probability via random-number generation, systematic sampling (every nth from a random start), or stratified sampling (subgroups by risk, sampled proportionally) — and judgmental selection (picking items because they look risky) invalidates the projection by making the sample unrepresentative.\n- Deviation analysis is the critical step: each failure is examined for nature — an isolated failure (one ticket missed approval due to a system error) may still permit an 'operating effectively' conclusion, while a systematic one (multiple tickets approved by the same person who developed the change, a segregation-of-duties failure) compromises the control's whole design.",
          "Two methodology requirements complete the testing:\n- Projection — a sample of 60 with 4 deviations (6.7%) against a 5% tolerable rate means the population rate likely exceeds tolerance, so the auditor either expands to the full population for precision (worth it when results are borderline) or issues the finding directly (typical when the rate clearly exceeds tolerance, like 6.7% versus 5%).\n- CAATs — using SQL, document the exact query, database and table, execution date/time, the access account, and the result set (row count plus a sample or a hash), designed to capture all relevant records since an implicit filter produces incomplete evidence; log searches document parameters, time range, sources, and the complete results — selectively presenting only confirming results while suppressing contradictory ones violates independence.",
          "Workpaper review and quality control are the final steps before evidence is complete:\n- Senior auditors verify each workpaper meets documentation standards, that the evidence supports the stated conclusion, and that all deviations are documented and explained.\n- QC catches workpapers where the conclusion isn't supported (3 deviations in 60 but a clean 'operating effectively' conclusion with no explanation of how that beats a 5% tolerable threshold), evidence is missing (referenced exhibits not attached), or a methodology flaw invalidates the results — and deficiencies require additional testing, not explanation, since the standard is that the evidence in the file, not the auditor's oral account, must support the conclusion.",
        ],
        codeExample: {
          label: "Calculating sample size for attribute sampling",
          code: `# Attribute sampling — using AICPA sampling tables
# Population: 1,200 change tickets in Q1
# Confidence level: 95%
# Tolerable deviation rate: 5%
# Expected deviation rate: 0% (assume controls working)

# From AICPA table: sample size = 60

population = 1200
sample_size = 60
deviations_found = 4  # found 4 tickets without approval

sample_deviation_rate = deviations_found / sample_size
# = 4/60 = 6.7%

if sample_deviation_rate > 0.05:  # exceeds 5% tolerable rate
    print(f"CONTROL FAILURE: {sample_deviation_rate:.1%} deviation rate")
    print("Conclude: Change management control NOT operating effectively")
    print("Action: Expand testing or issue finding")`,
        },
      },
      incident: {
        title: "Arthur Andersen and Enron — Evidence Destruction (2002)",
        when: "2002",
        where: "Houston, Texas",
        impact: "Arthur Andersen convicted of obstruction; 85,000 employees lost jobs; firm dissolved",
        body: [
          "Arthur Andersen's 2002 obstruction-of-justice conviction was the first criminal conviction of a major accounting firm in US history and dissolved the firm — a 90-year-old institution and 85,000 jobs gone:\n- The obstruction was the systematic shredding of Enron audit documents and deletion of electronic files after Andersen's general counsel sent a memo reminding staff of the document retention policy.\n- Federal prosecutors successfully argued that memo functioned as an instruction to destroy evidence in anticipation of litigation, and the episode reshaped how firms manage evidence, design retention policies, and how regulators view audit documentation.",
          "The destruction was large and coordinated:\n- Employees across multiple offices shredded tons of paper and deleted thousands of electronic files from mid-October to early November 2001, when the SEC issued a formal subpoena.\n- The coordination suggested senior partners understood the scope of Enron's problems and the likelihood of investigation, and the surviving workpapers were too incomplete to reconstruct the basis for Andersen's opinions, what the auditors had known, or whether the audit met professional standards.",
          "The aftermath permanently changed audit evidence standards:\n- PCAOB Auditing Standard AS 1215 (Audit Documentation) requires retaining documentation for seven years, complete enough for an experienced auditor with no prior connection to understand the work performed, evidence obtained, conclusions reached, and significant judgments made.\n- That 'experienced auditor' standard is the key quality test — if a workpaper needs explanation it isn't adequately documented — and digital evidence must be preserved in modification-proof formats with access audit trails.",
          "The case established both the legal exposure for destroying evidence and specific workpaper requirements:\n- Obstruction of justice — destroying evidence in anticipation of or during a proceeding — is a federal felony, and the general counsel's retention-policy memo was read by the jury as a signal to destroy rather than a routine reminder, so shredding during an investigation, 'routine' purges right after learning of one, or deleting records when litigation is foreseeable carries the same exposure, which auditors must understand both for their workpapers and when advising clients on IT-incident evidence preservation.\n- For IT auditors: compute hash values for all digital evidence at collection, store it in a system that records every access, retain workpapers for the required period (7 years under PCAOB) in durable readable formats, and activate legal-hold procedures whenever litigation or investigation is reasonably anticipated, preserving evidence that would otherwise be routinely deleted.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Evidence Collection", sub: "sufficient + reliable", type: "attacker" },
          { label: "Sampling", sub: "statistical or judgmental", type: "system" },
          { label: "Documentation", sub: "chain of custody", type: "victim" },
          { label: "Workpaper", sub: "supports conclusion", type: "result" },
        ],
      },
      timeline: [
        { year: 1972, event: "AICPA sampling standards first published for financial audit" },
        { year: 2002, event: "Arthur Andersen — evidence destruction conviction; firm dissolved", highlight: true },
        { year: 2004, event: "PCAOB AS 1215 — audit documentation standards for IT controls" },
        { year: 2023, event: "ISACA CISA updated — digital evidence handling and AI tool documentation" },
      ],
      keyTakeaways: [
        "Evidence must be sufficient (enough), reliable (credible source), and relevant (addresses the control tested) — failure on any attribute invalidates it",
        "Statistical sampling projects results to the full population with known confidence — judgmental sampling cannot produce statistical projections",
        "Deviation rate exceeding the tolerable rate means the control is NOT operating effectively — expand testing or issue a finding",
        "Audit evidence must be retained for 7 years (PCAOB standard) in tamper-evident format with hash verification",
        "Chain of custody documentation must be maintained from collection through retention — who collected it, when, from what source, using what method",
        "CAATs allow full-population testing — document the exact query, time of execution, and complete results, not just the results that support findings",
        "Physical evidence (observed directly) outranks documentary evidence, which outranks testimonial evidence — management representations must be corroborated",
        "Workpaper quality standard: an experienced auditor with no prior engagement knowledge must be able to understand what was done and why",
        "Legal holds suspend routine deletion for evidence relevant to anticipated litigation or regulatory investigation — obstruction of justice is a felony",
        "Hash values computed at evidence collection prove integrity — evidence without hash verification cannot definitively prove it was not modified",
      ],
      references: [
        { title: "AICPA AU-C Section 530 — Audit Sampling", url: "https://us.aicpa.org/content/dam/aicpa/research/standards/auditattest/downloadabledocuments/au-c-00530.pdf" },
        { title: "ISACA Audit Standards", url: "https://www.isaca.org/resources/isaca-journal/issues/2017/volume-3/it-audit-evidence" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-11-q1", type: "Core Idea", challenge: "Back it up.", text: "Why does an audit finding require evidence?", options: ["An assertion without evidence is just an opinion — evidence makes a finding valid","Findings need no support","Opinions are enough","Evidence slows audits"], correctIndex: 0, explanation: "Evidence is what makes an audit conclusion defensible." },
        { id: "audit-11-q2", type: "Evidence Quality", challenge: "Three attributes.", text: "What three attributes make audit evidence adequate?", options: ["Sufficient, reliable, and relevant","Cheap, fast, and pretty","Long, encrypted, and signed","Verbal, recent, and short"], correctIndex: 0, explanation: "Evidence must be enough, credible, and actually address the control tested." },
        { id: "audit-11-q3", type: "Sampling", challenge: "Over the threshold.", text: "In attribute sampling, if the sample deviation rate exceeds the tolerable rate, the auditor must…", options: ["Conclude the control is not operating effectively (or expand testing)","Pass the control anyway","Ignore the deviations","Reduce the sample"], correctIndex: 0, explanation: "Exceeding the tolerable rate means the control fails the test." },
        { id: "audit-11-q4", type: "Calculation", challenge: "Do the math.", text: "5 of 60 change tickets lack CAB approval; tolerable rate is 5%. The conclusion?", options: ["8.3% deviation exceeds 5% — the change-management control is not operating effectively","8.3% is fine","It's exactly at tolerance","The sample is invalid"], correctIndex: 0, explanation: "5/60 = 8.3% > 5%, so the control fails." },
        { id: "audit-11-q5", type: "Evidence Hierarchy", challenge: "Rank the evidence.", text: "Which is true about audit evidence quality?", options: ["Documentary evidence ranks higher than testimonial; directly observed physical evidence is highest","Interviews outrank documents","All evidence is equal","Hearsay is best"], correctIndex: 0, explanation: "Physical > documentary > testimonial in reliability." },
        { id: "audit-11-q6", type: "Real Incident", challenge: "Arthur Andersen.", text: "What principle did the Arthur Andersen case establish about evidence?", options: ["Evidence must be preserved (≈7 years); destroying it is obstruction of justice","Evidence can be shredded after review","Only digital evidence counts","Evidence is optional"], correctIndex: 0, explanation: "Collection isn't enough — evidence must be retained, not destroyed." },
        { id: "audit-11-q7", type: "Definition", challenge: "Tolerable rate.", text: "The 'tolerable deviation rate' is…", options: ["The maximum error rate at which the auditor can still rely on the control","The number of samples","The audit fee","The number of findings"], correctIndex: 0, explanation: "It's the threshold beyond which the control is deemed ineffective." },
        { id: "audit-11-q8", type: "Concept", challenge: "From opinion to fact.", text: "What elevates an audit finding from opinion to fact?", options: ["Sufficient, reliable, relevant evidence supporting it","A confident tone","Management agreement","A long report"], correctIndex: 0, explanation: "Quality evidence is what substantiates a finding." },
      ],
    },
    ctf: {
      scenario: "The SEC audit team has sampled change tickets from a broker-dealer. The sample results are loaded. Determine whether the deviation rate exceeds the tolerable threshold and what conclusion the auditor must reach.",
      hint: "Read the sample results and calculate the deviation rate.",
      hints: [
        "Read: cat SAMPLE-RESULTS.txt",
        "Check thresholds: cat SAMPLING-PARAMETERS.txt",
        "View conclusion: cat findings/CONTROL-CONCLUSION.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/SAMPLE-RESULTS.txt", value: "FLAG{4UD1T_", label: "Sample Results — Loaded" },
        { trigger: "/SAMPLING-PARAMETERS.txt", value: "S4MPL1NG_D3V14T10N_", label: "Parameters — Reviewed" },
        { trigger: "/findings/CONTROL-CONCLUSION.txt", value: "EXCE3DS}", label: "Conclusion — Control Failure Confirmed" },
      ],
      files: {
        "/SAMPLE-RESULTS.txt": [
          "ATTRIBUTE SAMPLING RESULTS — Q1 CHANGE TICKETS",
          "================================================",
          "Population: 1,450 change tickets",
          "Sample size: 60",
          "Attribute tested: Each ticket has documented CAB approval",
          "",
          "Items tested: 60",
          "Deviations found: 5 tickets with no CAB approval",
          "  CHG-0045: No approval signature",
          "  CHG-0182: Approver = Developer (SoD violation)",
          "  CHG-0290: Approval post-dated (approved after change deployed)",
          "  CHG-0451: Emergency — no post-hoc approval",
          "  CHG-0512: Approval from unauthorized approver",
          "",
          "Sample deviation rate: 5/60 = 8.3%",
        ].join("\n"),
        "/SAMPLING-PARAMETERS.txt": [
          "SAMPLING PARAMETERS",
          "====================",
          "Confidence level: 95%",
          "Tolerable deviation rate: 5%",
          "Expected deviation rate: 0%",
          "Sample size (from AICPA table): 60",
          "",
          "Decision rule: If sample deviation rate > 5%, conclude control NOT effective.",
          "Current sample deviation rate: 8.3% — EXCEEDS TOLERABLE RATE.",
        ].join("\n"),
        "/findings/CONTROL-CONCLUSION.txt": [
          "AUDITOR CONCLUSION — CHANGE MANAGEMENT CONTROL",
          "================================================",
          "Sample deviation rate: 8.3% (5 deviations in 60 items)",
          "Tolerable deviation rate: 5%",
          "Conclusion: CONTROL NOT OPERATING EFFECTIVELY",
          "",
          "The sample deviation rate of 8.3% exceeds the 5% tolerable rate.",
          "Auditor must: expand testing OR issue a control deficiency finding.",
          "Given nature of deviations (SoD, post-dating, unauthorized approvers),",
          "recommend issuing SIGNIFICANT DEFICIENCY or MATERIAL WEAKNESS.",
          "Rating: HIGH — SOX 404 implications for financial reporting reliability.",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. Attribute sampling projects a sample deviation rate to the full population — 8.3% vs 5% tolerable rate means the control is NOT operating effectively",
          "  2. Evidence quality matters: post-dated approvals and approvals from unauthorized personnel are deviations even if signatures exist",
          "  3. When the tolerable deviation rate is exceeded, the auditor must either expand testing to the full population or issue a control deficiency finding — not both",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "SAMPLE-RESULTS.txt", isDir: false },
          { name: "SAMPLING-PARAMETERS.txt", isDir: false },
          { name: "findings", isDir: true },
        ],
        "/findings": [{ name: "CONTROL-CONCLUSION.txt", isDir: false }],
      },
    },
  },

  // ─── audit-12: Audit Reporting ─────────────────────────────────────────────
  {
    epochId: "tech-audit-1",
    wonder: { name: "ISACA Chicago Chapter", location: "Chicago, Illinois", era: "Present Day", emoji: "🎯" },
    id: "audit-12",
    order: 12,
    title: "The Final Report",
    subtitle: "Audit Reporting, Findings, and Remediation Tracking",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "audit-badge-12", name: "CISA Graduate", emoji: "🏆" },
    challengeType: "ctf",
    info: {
      tagline: "The audit report is the product. Everything before it is just the work.",
      year: 1978,
      overview: [
        "The audit report is the formal deliverable that turns weeks of testing, evidence, and analysis into actionable information for leadership, the audit committee, and the board. ISACA standards (IS Audit Standards 1401–1405) require it to include the audit scope and objectives, the period covered, the methodology, the findings with their supporting evidence and risk ratings, management's response to each finding, and the agreed remediation timelines. It is not a list of problems but a communication document, and its quality is measured by whether it actually produces effective remediation. Each finding must therefore be written in the Condition-Criteria-Cause-Effect framework: the Condition is what was found, stated specifically, measurably, and objectively; the Criteria is what the standard or policy requires; the Cause is the root cause rather than the symptom; and the Effect is the business risk if the issue goes unremediated. Omit any one of the four and management cannot remediate while the board cannot assess the risk.",
        "Two elements determine whether findings actually drive action. The risk rating must be consistent and defensible — Critical, High, Medium, or Low based on likelihood, the magnitude of impact across financial, regulatory, reputational, and operational dimensions, the breadth of systems affected, and any compensating controls. Critical findings escalate immediately to the audit committee without waiting for the 30-day cycle, High findings are to be remediated within 30 to 60 days, Medium within 90 days, and Low may be accepted with documentation. Management responses, in turn, must substantively engage rather than defend: 'we disagree' without addressing the factual basis of the condition is inadequate, and 'we will remediate by [date]' without specific actions is not actionable. A good response acknowledges the finding's accuracy or disputes it specifically, identifies the root cause, lists remediation actions with owners and dates, and notes any interim compensating controls — and auditors review these responses before finalizing the report, requesting revision where the response falls short.",
        "Two operational controls protect the report and then close it out. Distribution is a security requirement in its own right, because the report details control weaknesses that are valuable to attackers: it is restricted to those with a legitimate need — the audit committee, the board for significant or material findings, the CISO, the CIO, and the relevant process owners — transmitted by encrypted email or a secure portal rather than standard email, stored under access control with access tracked, and routed through legal counsel when external parties such as regulators or external auditors request it. Remediation tracking then closes the loop that so many organizations leave open: a centralized system records every open finding with its rating, agreed date, owner, and status, escalates automatically as due dates approach, runs 30/60/90-day follow-ups that verify progress with evidence, and requires both management's attestation and the audit team's own verification before any finding is formally marked closed.",
        "Underpinning all of it is the audit committee relationship, the governance structure that gives internal audit its independence and authority. The audit committee — composed of independent board members — is internal audit's primary client, not management, and the Chief Audit Executive reports to that committee rather than to the CEO or CFO, so management cannot suppress or delay reports about its own weaknesses. Disputed findings are adjudicated by the committee, with the auditor presenting the evidence and management presenting its position, and when findings linger unresolved or management repeatedly fails to remediate, the committee can escalate — requiring an independent review, engaging the external auditors, or taking disciplinary action.",
      ],
      technical: {
        title: "Writing an Effective Audit Finding",
        body: [
          "The first two finding elements demand specificity:\n- Condition writing must be specific and objective: 'During our review of Q1 2026 production change tickets, we tested 60 of 1,450 and found 5 (8.3%) lacked documented CAB approval prior to deployment' identifies the period, population, sample, attribute, and deviation rate — versus a useless 'change management controls were inadequate,' which is an opinion that can't be confirmed or disputed.\n- Criteria writing must cite the specific standard: 'Per Change Management Policy v2.1 §4.3, all Normal changes must have documented CAB approval prior to deployment; COBIT 2019 BAI06 and ITIL 4 Change Enablement both require formal change-authority approval' — citing internal policy by version and aligning external frameworks leaves no wiggle room and is harder to challenge.",
          "The other two elements connect the finding to remediation and to the board:\n- Cause analysis drives remediation: 'the change tool (ServiceNow) doesn't enforce a mandatory approval workflow — the approval field is optional, allowing deploy without approval — and developers have production deployment access, removing the separate-deployer barrier' names two distinct root causes that both must be fixed.\n- Effect articulation states business risk the board can evaluate: untested changes risking trading outages (quantified at $X/hour), unauthorized code able to manipulate outputs or exfiltrate data, and a SOX 404 material weakness requiring disclosure and added external-auditor procedures — quantifying an impact, naming a fraud risk, and specifying the regulatory consequence.",
          "Two report-level qualities determine whether the message lands:\n- Rating calibration must be consistent across findings: if a terminated user in a non-critical system and an unauthorized change to a financial reporting system are both 'High,' they're miscalibrated (the latter is Critical), so auditors review all findings together, avoiding over-rating mediums to create urgency, under-rating criticals to dodge conflict, and flattening everything to one level.\n- The executive summary is what senior executives and board members actually read in 5–10 minutes, so it must be plain-language: scope and period, the overall opinion (effective / partially effective / ineffective), the count and distribution by rating, the top findings in business terms, and the cross-cutting themes (e.g., 'three of five findings stem from the absence of an automated provisioning/deprovisioning workflow') — one needing technical knowledge to parse has failed.",
          "Audit report quality review is a professional-standard requirement before issuance:\n- A senior auditor or manager not involved in the testing independently checks accuracy, completeness, and tone — that every finding has all four Condition-Criteria-Cause-Effect elements, ratings are consistent and defensible, management responses are adequate, and the executive summary represents the content.\n- The language must stay factual and precise, not pejorative: reports that call management dishonest, negligent, or incompetent — even when evidence supports it — create needless conflict and invite legal challenge.",
        ],
        codeExample: {
          label: "Remediation tracking dashboard (SQL)",
          code: `-- Track open findings and remediation status
SELECT
  finding_id,
  finding_title,
  risk_rating,
  agreed_remediation_date,
  actual_completion_date,
  CASE
    WHEN actual_completion_date IS NOT NULL THEN 'CLOSED'
    WHEN agreed_remediation_date < GETDATE() THEN 'OVERDUE'
    ELSE 'OPEN'
  END as status,
  CASE
    WHEN finding_id IN (SELECT finding_id FROM prior_audit_findings)
    THEN 'REPEAT FINDING'
    ELSE 'NEW'
  END as finding_type
FROM audit_findings
WHERE audit_year = 2026
ORDER BY risk_rating DESC, status;`,
        },
      },
      incident: {
        title: "The Wells Fargo Repeat Audit Findings (2016–2023)",
        when: "2016–2023",
        where: "San Francisco, California",
        impact: "$3.7B in penalties; asset cap imposed by Fed; consent orders still active",
        body: [
          "Wells Fargo's regulatory ordeal from 2016 is the most extensively documented case of repeat audit findings in US banking history:\n- The 2016 revelations — 3.5 million accounts created without customer authorization, driven by an internal sales-pressure culture — were followed by waves of findings on auto insurance, mortgage modification, foreign-exchange manipulation, and consumer protection.\n- The OCC, CFPB, Federal Reserve, and multiple state regulators all issued findings, and the Fed's unprecedented 2018 asset cap — freezing Wells Fargo at its December 31, 2017 size until it demonstrated adequate risk-management controls — remains in effect as of 2026.",
          "The repeat findings followed a consistent, damning cycle:\n- Regulators or internal audit identified a significant weakness, management agreed to a remediation plan with commitments and timelines, progress reports showed partial implementation, and the next examination found the same weakness still present — repeating across multiple business lines and years.\n- The OCC's consent orders document specific instances where management's remediation attestations were inaccurate — certifying controls effective when the next exam found them still deficient — exposing senior executives to personal liability and clawbacks of compensation.",
          "The diagnosis revealed structural failures that prevented genuine remediation:\n- Risk management wasn't sufficiently independent — it reported to business-unit executives rather than the board, creating pressure to accommodate business priorities over controls.\n- Internal audit had identified many weaknesses years before regulators but hadn't escalated effectively, and the board's audit committee never received complete information about the scope and persistence of deficiencies — so problems were identified, documented, agreed to be fixed, and then not fixed: a governance failure at every layer.",
          "Remediation-tracking failures were central, and the case set lasting lessons for internal audit:\n- Tracking handled only by the responsible business unit, without independent verification, gives no check on whether reported progress reflects real improvement — Wells Fargo leaned on management attestations that actions were taken without independent testing, but 'the process has been revised' is not evidence the revised process operates effectively.\n- The lessons: repeat findings must escalate to the audit committee (they show management accountability has failed), internal audit must test remediation effectiveness rather than mere occurrence (the gap between 'actions completed' and 'control now operating effectively' is the gap between process compliance and real risk reduction), and reports must be honest about remediation failures even when management resists — calling a finding 'in progress' after its agreed date has passed is not accurate.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Finding Structure", sub: "Condition-Criteria-Cause-Effect", type: "attacker" },
          { label: "Management Response", sub: "agree + remediation date", type: "system" },
          { label: "Report Issuance", sub: "to audit committee", type: "victim" },
          { label: "Remediation Tracking", sub: "30/60/90 day follow-up", type: "result" },
        ],
      },
      timeline: [
        { year: 1978, event: "ISACA founded — IT audit standards first developed" },
        { year: 2002, event: "SOX Section 301 — audit committee independence requirements" },
        { year: 2016, event: "Wells Fargo — repeat findings ignored by management", highlight: true },
        { year: 2023, event: "Wells Fargo — Fed asset cap still in place; $3.7B in penalties total" },
      ],
      keyTakeaways: [
        "Every finding requires all four elements: Condition (what was found), Criteria (the standard), Cause (root cause), Effect (business risk)",
        "Risk ratings must be calibrated across the report — an unauthorized change to a financial system must be rated higher than a missing recertification for a non-critical system",
        "Remediation tracking at 30/60/90 days is an audit control — verify evidence of remediation, not just management attestation that it occurred",
        "Repeat findings must be escalated directly to the audit committee — repeated failure demonstrates that management accountability has broken down",
        "The audit committee is the internal audit function's primary client — the CAE reports to the audit committee, not to the CEO",
        "Management responses must address condition, root cause, and specific remediation actions — 'we disagree' without factual basis is not an adequate response",
        "Report distribution is a security control — pentest findings and ITGC weakness details are sensitive information requiring access control",
        "Remediation testing verifies control effectiveness, not just action completion — testing whether the revised process works is different from confirming actions were taken",
        "The executive summary must be readable by non-technical board members — findings in technical jargon fail the governance communication purpose",
        "Audit report quality review by an uninvolved senior auditor is a professional standard — the reviewer checks accuracy, completeness, tone, and rating calibration",
      ],
      references: [
        { title: "ISACA IS Audit Standards", url: "https://www.isaca.org/resources/isaca-journal/issues/2016/volume-6/is-auditing-guideline-g16-use-of-caat" },
        { title: "IIA International Standards for the Professional Practice of Internal Auditing", url: "https://www.theiia.org/en/standards/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-12-q1", type: "Core Idea", challenge: "The deliverable.", text: "Why is the audit report described as 'the product'?", options: ["It communicates the findings and risk — everything before it is just the work","It's optional","It's only for the auditor","Reports don't matter"], correctIndex: 0, explanation: "The report is what conveys value and drives remediation." },
        { id: "audit-12-q2", type: "Finding Structure", challenge: "Four elements.", text: "What four elements make a complete CISA audit finding?", options: ["Condition, Criteria, Cause, and Effect","Who, What, When, Where","Start, Middle, End, Summary","Risk, Cost, Time, Scope"], correctIndex: 0, explanation: "Condition/Criteria/Cause/Effect: what was found, the standard, why, and the risk." },
        { id: "audit-12-q3", type: "Repeat Findings", challenge: "Seen this before.", text: "How should a repeat finding (unchanged from a prior audit) be handled?", options: ["Escalate directly to the audit committee — management accountability has failed","Give management another remediation period","Drop it","Mark it low risk"], correctIndex: 0, explanation: "Repeat findings go straight to the audit committee." },
        { id: "audit-12-q4", type: "Remediation Tracking", challenge: "30/60/90.", text: "Tracking remediation at 30, 60, and 90 days after the report is best described as…", options: ["An audit control itself — untracked remediation is indistinguishable from none","A formality","Optional follow-up","The client's private matter"], correctIndex: 0, explanation: "Without tracking, remediation can't be verified to have happened." },
        { id: "audit-12-q5", type: "Real Incident", challenge: "Wells Fargo, 2016–2023.", text: "What audit risk does the Wells Fargo case illustrate?", options: ["Management agrees to remediation plans but fails to implement them — producing repeat findings","Auditors fabricated findings","There were no findings","It was a single one-time error"], correctIndex: 0, explanation: "Acknowledged-but-unimplemented findings signal a broken control environment." },
        { id: "audit-12-q6", type: "Definition", challenge: "Spot the repeat.", text: "When is a current finding a 'repeat finding'?", options: ["Same condition and control as a prior-year finding, not remediated in 12+ months","Any new finding","A finding about a different system","A low-risk finding"], correctIndex: 0, explanation: "Same unremediated condition across cycles makes it a repeat." },
        { id: "audit-12-q7", type: "Escalation", challenge: "Why straight to the committee.", text: "Why are repeat findings escalated to the audit committee rather than re-issued to management?", options: ["Management has demonstrably failed to act, so higher oversight is required","Management is always right","The committee writes the code","It's faster to ignore"], correctIndex: 0, explanation: "Repeat failure is an accountability problem for governance to address." },
        { id: "audit-12-q8", type: "Concept", challenge: "Close the loop.", text: "What completes the audit lifecycle after the report is issued?", options: ["Tracked remediation of the findings to verified closure","Filing the report away","Starting an unrelated audit","Deleting the evidence"], correctIndex: 0, explanation: "Verified remediation closes the loop; untracked remediation isn't a control." },
      ],
    },
    ctf: {
      scenario: "You are finalizing the audit report for Meridian Bank. Three open findings are loaded. One is a repeat finding from the prior year. Identify it and confirm what escalation action is required.",
      hint: "Read the draft findings and compare against prior year findings.",
      hints: [
        "Read: cat DRAFT-FINDINGS.txt",
        "Check prior year: cat PRIOR-YEAR-FINDINGS.txt",
        "View escalation: cat findings/REPEAT-FINDING-ESCALATION.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/DRAFT-FINDINGS.txt", value: "FLAG{4UD1T_", label: "Draft Findings — Loaded" },
        { trigger: "/PRIOR-YEAR-FINDINGS.txt", value: "R3P34T_F1ND1NG_", label: "Prior Year — Compared" },
        { trigger: "/findings/REPEAT-FINDING-ESCALATION.txt", value: "3SC4L4T3}", label: "Escalation — Confirmed" },
      ],
      files: {
        "/DRAFT-FINDINGS.txt": [
          "DRAFT AUDIT FINDINGS — MERIDIAN BANK 2026",
          "==========================================",
          "F-2026-01  HIGH   Terminated user accounts not deprovisioned within SLA",
          "F-2026-02  MEDIUM Data retention policy not enforced for marketing data",
          "F-2026-03  HIGH   Change tickets missing CAB approval (8.3% deviation rate)",
          "",
          "Compare against PRIOR-YEAR-FINDINGS.txt to identify repeat findings.",
        ].join("\n"),
        "/PRIOR-YEAR-FINDINGS.txt": [
          "PRIOR YEAR AUDIT FINDINGS — MERIDIAN BANK 2025",
          "================================================",
          "F-2025-01  HIGH   Terminated user accounts not deprovisioned (agreed: 90 days)",
          "F-2025-02  HIGH   Unencrypted PII in marketing database (CLOSED 2025-09-01)",
          "F-2025-03  MEDIUM Backup restoration untested (CLOSED 2025-11-15)",
          "",
          "F-2025-01 was not remediated. Management agreed to 90-day remediation.",
          "F-2026-01 is the same finding — terminated users still active.",
        ].join("\n"),
        "/findings/REPEAT-FINDING-ESCALATION.txt": [
          "REPEAT FINDING ESCALATION — F-2026-01",
          "=======================================",
          "Finding: Terminated user accounts not deprovisioned within SLA",
          "First identified: 2025 audit (F-2025-01)",
          "Management agreed remediation: 90 days (2025-06-01)",
          "Status as of 2026 audit: NOT REMEDIATED",
          "",
          "ISACA standard: Repeat findings are escalated directly to the Audit Committee.",
          "Management has failed to remediate a HIGH finding for 12+ months.",
          "Required action: Audit Committee notification. Management response inadequate.",
          "Escalation: Letter to Audit Committee Chair within 5 business days.",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING:",
          "  1. Repeat findings bypass management escalation — they go directly to the Audit Committee because management accountability has demonstrably failed",
          "  2. ISACA finding structure: Condition (what was found), Criteria (the standard), Cause (why it exists), Effect (the business risk) — all four elements required",
          "  3. Remediation tracking at 30/60/90 days is an audit control itself; untracked remediation is indistinguishable from no remediation",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "DRAFT-FINDINGS.txt", isDir: false },
          { name: "PRIOR-YEAR-FINDINGS.txt", isDir: false },
          { name: "findings", isDir: true },
        ],
        "/findings": [{ name: "REPEAT-FINDING-ESCALATION.txt", isDir: false }],
      },
    },
  },
];
