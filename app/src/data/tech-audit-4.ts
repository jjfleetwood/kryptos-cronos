import type { StageConfig, EpochConfig } from "./types";

export const techAudit4Epoch: EpochConfig = {
  id: "tech-audit-4",
  name: "Continuous Monitoring 2.0",
  subtitle: "AI-Powered Detection and Response",
  description: "Master next-generation continuous monitoring: ML-enhanced SIEM, UEBA, NDR, CSPM, SOAR automation, deception technology, Zero Trust telemetry, XDR, and compliance monitoring — the full stack of modern SOC operations.",
  emoji: "📡",
  color: "rose",
  unlocked: true,
};

export const techAudit4Stages: StageConfig[] = [
  // ─── audit-cm01: The Monitoring Baseline ─────────────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "NIST Headquarters", location: "Gaithersburg, Maryland", era: "Present Day", emoji: "📋" },
    id: "audit-cm01",
    order: 1,
    title: "The Monitoring Baseline",
    subtitle: "NIST SP 800-137 — Information Security Continuous Monitoring",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "audit-cm-badge-01", name: "Monitoring Architect", emoji: "📡" },
    easeScore: 6,
    valueScore: 8,
    rank: 11,
    challengeType: "ctf",
    info: {
      tagline: "You cannot defend what you cannot see. Continuous monitoring turns visibility into security.",
      year: 2011,
      overview: [
        "NIST Special Publication 800-137 defines Information Security Continuous Monitoring (ISCM) as maintaining ongoing awareness of security, vulnerabilities, and threats to support risk-management decisions — published in 2011, updated through 2024, and still the authoritative federal framework:\n- It runs on six continuous steps — Define, Establish, Implement, Analyze/Report, Respond, and Review — a cycle, not a one-time project.\n- It distinguishes three monitoring tiers: organizational (governance and strategy), mission/business process (process-level risk), and information system (technical controls and data).",
        "Mature ISCM goes beyond compliance-checkbox monitoring to maintain an accurate, real-time picture of security posture:\n- It establishes metrics, sets monitoring frequencies by asset criticality, automates collection, and feeds findings into risk-management decisions — the goal is not just detecting incidents but knowing posture continuously.\n- The architectural foundation is selecting metrics genuinely predictive of risk — patch compliance percentage, vulnerability scan coverage, MFA enforcement rate, log-forwarding health, mean time to remediate critical vulnerabilities, privileged-account review completion — each with a defined owner, collection mechanism, target threshold, and breach response procedure.",
        "ISCM plugs into the broader federal ecosystem and is being reshaped by AI:\n- Through CISA's Continuous Diagnostics and Mitigation (CDM) program, federal civilian agencies get shared commercial tools (asset, vulnerability, identity management) feeding agency-level and federal-level dashboards for government-wide situational awareness.\n- AI changes ISCM two ways: ML models classify assets by criticality and recommend monitoring frequencies without manual FIPS 199 categorization of every system, and LLMs are appearing as natural-language interfaces to ISCM dashboards, so a CISO can ask 'which HIGH-impact systems have stale vulnerability scan data?' and get an immediate plain-language answer backed by live metric queries.",
        "Operationally, good ISCM means a security team that can answer three questions in under five minutes at any time:\n- The current patch-compliance percentage for critical systems, whether all HIGH-impact systems are forwarding logs to the SIEM, and the top five open vulnerabilities by CVSS score.\n- Organizations that can't answer these within hours are running an ISCM program at maturity Level 1 or below.",
      ],
      technical: {
        title: "ISCM Implementation Architecture",
        body: [
          "A production ISCM program is built on four layers, with monitoring frequency driven by criticality:\n- Data collection (agents, APIs, log forwarders), normalization (parsing into a common schema like ECS or OCSF), analysis (correlation rules, ML models, threat-intel enrichment), and response (dashboards, alerts, ticketing, automated playbooks).\n- Frequency follows asset criticality and control volatility — a public-facing web app needs vulnerability scans daily or continuously while an air-gapped backup may need only weekly — and NIST 800-137 provides a frequency decision framework based on FIPS 199 Low/Moderate/High categorization.",
          "The stage's `ISCMMetric` class is the core data structure of any ISCM automation:\n- Its constructor takes a metric name (like `patch_compliance_pct`), a `frequency_hours` cadence derived from FIPS 199 impact level, and a LOW/MODERATE/HIGH criticality, storing `last_collected` and `current_value` so it can represent stale and fresh states; `is_stale()` compares current UTC time against `last_collected` plus the frequency window (never-collected counts as stale), and `status()` serializes to a dict for SIEM or dashboard export.\n- The four instantiated metrics model a realistic HIGH-impact system — patch compliance at 24h, vulnerability scan coverage at 1h (near-continuous), MFA enforcement at 24h, log-forwarding health at 1h — reflecting NIST 800-137's guidance that HIGH-impact systems need sub-hourly monitoring of the most critical controls, and in production the script gains real fetchers hitting the vulnerability-management API, the IDP, and the SIEM.",
          "Enterprise ISCM architectures wire the metrics into the operational stack:\n- They integrate with SIEM (Splunk, Microsoft Sentinel, Chronicle) via syslog or API push, GRC platforms (ServiceNow GRC, Archer) for control-evidence storage, and ticketing (Jira, ServiceNow ITSM) for remediation workflows.\n- When a metric breaches its threshold, the integration layer opens a ticket assigned to the system owner with SLA tracking, and repeat breaches escalate to the CISO dashboard automatically.",
          "An MCP server — `mcp-iscm-monitor` — exposes live monitoring metrics to AI assistants, but its access is sensitive and must be tightly controlled:\n- It would expose tools like `get_metric_status`, `list_stale_metrics`, `get_system_fips_tier`, `run_coverage_report`, and `create_remediation_ticket`, so an auditor using Claude could ask 'which HIGH-impact systems have stale vulnerability scan data today?' and get a synthesized finding in seconds rather than 30–45 minutes of manual gathering.\n- Because ISCM data (asset inventories, vulnerability counts, control-failure details) is sensitive, the server should authenticate via OAuth 2.0 with scoped tokens, give auditor personas read-only access, log every tool call to an immutable audit trail, and stay off the public internet (private VPC endpoint) — and any remediation-triggering tool like `create_remediation_ticket` must require elevated privileges and record which AI session initiated the action.",
        ],
        codeExample: {
          label: "ISCM metric definition (Python — organiztional security score tracker)",
          code: `import json
from datetime import datetime, timedelta

class ISCMMetric:
    def __init__(self, name: str, frequency_hours: int, criticality: str):
        self.name = name
        self.frequency_hours = frequency_hours
        self.criticality = criticality  # LOW, MODERATE, HIGH
        self.last_collected: datetime | None = None
        self.current_value: float | None = None

    def is_stale(self) -> bool:
        if self.last_collected is None:
            return True
        age = datetime.utcnow() - self.last_collected
        return age > timedelta(hours=self.frequency_hours)

    def status(self) -> dict:
        return {
            "metric": self.name,
            "criticality": self.criticality,
            "stale": self.is_stale(),
            "last_collected": self.last_collected.isoformat() if self.last_collected else None,
            "value": self.current_value,
        }

# High-impact systems: continuous (1h); Moderate: daily (24h); Low: weekly (168h)
iscm_metrics = [
    ISCMMetric("patch_compliance_pct", frequency_hours=24, criticality="HIGH"),
    ISCMMetric("vuln_scan_coverage_pct", frequency_hours=1, criticality="HIGH"),
    ISCMMetric("mfa_enforcement_pct", frequency_hours=24, criticality="MODERATE"),
    ISCMMetric("log_forwarding_health_pct", frequency_hours=1, criticality="HIGH"),
]

report = [m.status() for m in iscm_metrics]
print(json.dumps(report, indent=2))`,
        },
      },
      incident: {
        title: "OPM Data Breach — Monitoring Gap (2015)",
        when: "March 2014 – June 2015",
        where: "Office of Personnel Management, Washington D.C.",
        impact: "21.5 million security clearance records stolen; breach undetected for over a year",
        body: [
          "The Office of Personnel Management breach was the largest theft of US government personnel data in history:\n- Attackers attributed to Chinese state actors maintained persistent access for over 14 months before detection.\n- OPM's Inspector General had repeatedly warned about inadequate continuous monitoring, and OPM had failed to implement the DHS Continuous Diagnostics and Mitigation (CDM) program despite federal mandates — leaving the agency essentially blind to the attacker's movements.",
          "Post-breach analysis found OPM blind in exactly the ways ISCM addresses:\n- It lacked visibility into lateral movement, had no behavioral baselining of privileged accounts, and hadn't implemented the DHS-mandated CDM program, so the attackers used the SOGU malware family to persist and exfiltrate across multiple channels for over a year.\n- The specific gaps map directly to NIST 800-137 requirements OPM never implemented: no continuous log aggregation from network devices (lateral movement invisible), no monitoring of privileged-account access patterns (compromised admin credentials used freely), no asset inventory revealing unauthorized systems talking externally, and no automated alerting on large transfers to unexpected destinations.",
          "The breach catalyzed the US government's investment in federal ISCM:\n- Congress approved $6B in additional cybersecurity spending, the CDM program was accelerated across all federal civilian agencies, and NIST published SP 800-137A in 2022 with specific ISCM assessment guidance.\n- The lesson for every organization: a mature ISCM program costs a fraction of the breach it prevents.",
          "A proper ISCM program would have caught the breach within 48–72 hours by correlating signals each easy to dismiss alone:\n- The initial SOGU installation would have surfaced as an anomalous process outside the approved software inventory, the credential-harvesting tools would have triggered endpoint alerts a SIEM could correlate, lateral movement would have appeared as authentication events from unusual source systems, and data staging before exfiltration would have generated network-flow anomalies to unexpected internal endpoints.\n- A functioning ISCM program with anomaly detection on privileged access would likely have detected the breach in days, not months.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Define & Establish", sub: "metrics, frequency, tools", type: "system" },
          { label: "Collect & Normalize", sub: "agents, APIs, parsers", type: "attacker" },
          { label: "Analyze & Report", sub: "correlation, enrichment", type: "victim" },
          { label: "Respond & Review", sub: "tickets, playbooks, review", type: "result" },
        ],
      },
      timeline: [
        { year: 2011, event: "NIST SP 800-137 published — federal ISCM framework established" },
        { year: 2014, event: "DHS CDM program launched — continuous monitoring across federal agencies" },
        { year: 2015, event: "OPM breach revealed — 14-month dwell time exposes ISCM gaps", highlight: true },
        { year: 2022, event: "NIST SP 800-137A published — ISCM program assessment guidance" },
        { year: 2024, event: "AI-native ISCM platforms emerge — LLM-assisted alert triage and reporting" },
      ],
      keyTakeaways: [
        "ISCM is a continuous cycle of six steps — not a one-time compliance project",
        "Monitoring frequency must match asset criticality (FIPS 199: Low/Moderate/High)",
        "Three tiers: organizational governance, business process, and information system",
        "Visibility gaps cause long dwell times — OPM went undetected for 14 months",
        "CDM and ISCM programs must be funded, staffed, and reviewed regularly",
        "The four ISCM architecture layers are: collect, normalize, analyze, and respond — gaps in any layer create blind spots",
        "ISCM metrics must have defined owners, collection mechanisms, target thresholds, and breach response procedures",
        "LLM-enhanced ISCM dashboards enable natural language querying of live security posture data",
        "MCP servers can expose ISCM metrics to AI auditors, automating evidence collection that previously took 30-45 minutes manually",
        "The CDM program provides shared ISCM tooling to federal agencies — the model for enterprise shared services",
      ],
      references: [
        { title: "NIST SP 800-137 Rev. 1", url: "https://csrc.nist.gov/publications/detail/sp/800-137/1/final" },
        { title: "DHS CDM Program", url: "https://www.cisa.gov/cdm" },
        { title: "OPM Breach Congressional Report", url: "https://oversight.house.gov/sites/democrats.oversight.house.gov/files/OPM%20Breach%20Report.pdf" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm01-q1", type: "Framework", challenge: "The standard.", text: "What does NIST SP 800-137 define?", options: ["ISCM — Information Security Continuous Monitoring as an ongoing cycle","A password policy","An encryption cipher","A firewall ruleset"], correctIndex: 0, explanation: "800-137 defines continuous monitoring as a repeating six-step cycle." },
        { id: "audit-cm01-q2", type: "Governance", challenge: "Who owns strategy.", text: "Which tier owns governance and strategy in ISCM?", options: ["The organizational tier (CISO governance)","The system tier (SOC team)","The vendor","The end user"], correctIndex: 0, explanation: "Org-tier governance sets the monitoring strategy; the system tier executes." },
        { id: "audit-cm01-q3", type: "Frequency", challenge: "Not one-size-fits-all.", text: "Should monitoring frequency be the same for all systems?", options: ["No — it scales with system criticality (HIGH-impact ≈ hourly)","Yes, identical for all","Only annually for everything","Frequency doesn't matter"], correctIndex: 0, explanation: "Higher-impact systems are monitored far more frequently." },
        { id: "audit-cm01-q4", type: "Real Incident", challenge: "OPM breach.", text: "Why did the OPM breach go undetected for over a year?", options: ["Absence of a functioning ISCM program with anomaly detection","An undetectable zero-day","A natural disaster","Too much monitoring"], correctIndex: 0, explanation: "No working continuous-monitoring program meant the intrusion went unseen." },
        { id: "audit-cm01-q5", type: "Concept", challenge: "Continuous, not periodic.", text: "The core idea of ISCM is…", options: ["Ongoing, frequency-tiered monitoring instead of point-in-time checks","One annual scan","Monitoring only after a breach","Disabling alerts"], correctIndex: 0, explanation: "Continuous monitoring replaces snapshots with an ongoing cycle." },
        { id: "audit-cm01-q6", type: "Cycle", challenge: "Close the loop.", text: "The ISCM cycle ends by reviewing/updating the strategy so that…", options: ["The program continuously improves rather than going stale","It stops after one pass","It never changes","Review is skipped"], correctIndex: 0, explanation: "The final review step feeds back into the next cycle." },
        { id: "audit-cm01-q7", type: "Risk-Based", challenge: "Match effort to risk.", text: "Frequency tiers exist so that…", options: ["Scarce monitoring effort concentrates on the highest-impact systems","Every system gets ignored equally","Low systems get the most attention","Effort is random"], correctIndex: 0, explanation: "Risk-based frequency focuses resources where impact is greatest." },
        { id: "audit-cm01-q8", type: "Why It Matters", challenge: "Dwell time.", text: "A functioning ISCM program primarily reduces…", options: ["The time an intrusion goes undetected (dwell time)","The cost of laptops","The number of employees","Network speed"], correctIndex: 0, explanation: "Continuous monitoring shortens detection time dramatically." },
      ],
    },
    ctf: {
      scenario: "You've gained access to an organization's ISCM program documentation server. Three fragments of the master monitoring policy contain the flag. The files are split across the policy, metrics, and review directories.",
      hint: "Navigate the ISCM policy directory tree. Three policy fragments each hold part of the flag.",
      hints: [
        "Start with `ls /iscm-policy` to see the directory structure.",
        "Each subdirectory (policy/, metrics/, review/) contains a fragment file.",
        "Concatenate the flag_fragment values from all three files in order.",
      ],
      files: {
        "/iscm-policy/policy/iscm-charter.txt": `# ISCM Program Charter — CLASSIFIED INTERNAL

Organization: Federal Civilian Agency (REDACTED)
Program Owner: CISO
Last Updated: 2024-01-15
FIPS 199 Categorization: HIGH

## Purpose
This charter establishes the Information Security Continuous Monitoring
program in accordance with NIST SP 800-137A.

## Monitoring Tiers
- Tier 1 (Organizational): CISO governance, quarterly review
- Tier 2 (Mission/Business): Process owners, monthly review
- Tier 3 (Information Systems): SOC team, continuous

## Flag Fragment A
flag_fragment_a = "FLAG{1SCM_"

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  ISCM programs define monitoring at three tiers — governance, process,
  and system level. Each tier has different owners and review cadences.
─────────────────────────────────────────────────────────────────────`,
        "/iscm-policy/metrics/kpi-registry.txt": `# ISCM KPI Registry

HIGH-Impact Systems (continuous / 1h frequency):
  - vuln_scan_coverage_pct       target: ≥ 98%
  - log_forwarding_health_pct    target: ≥ 99.5%
  - critical_patch_compliance    target: ≥ 95% within 15 days

MODERATE-Impact Systems (daily / 24h frequency):
  - mfa_enforcement_pct          target: ≥ 100%
  - privileged_account_review    target: monthly

LOW-Impact Systems (weekly / 168h frequency):
  - asset_inventory_accuracy     target: ≥ 90%

## Flag Fragment B
flag_fragment_b = "C0NT1NU0US_"

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  Monitoring frequency is tied to FIPS 199 impact levels. High-impact
  systems require near-real-time metrics; low-impact allows weekly checks.
─────────────────────────────────────────────────────────────────────`,
        "/iscm-policy/review/annual-review-2024.txt": `# ISCM Annual Review — FY2024

## Summary
Program maturity score: 3.2 / 5.0 (Defined)
Prior year: 2.8 / 5.0 (Developing)
Target FY2025: 4.0 / 5.0 (Managed)

## Key Gaps Identified
1. Alert triage mean time: 4.2 hours (target: < 1 hour)
2. SOAR automation coverage: 31% of playbooks (target: 70%)
3. Cloud asset discovery lag: 6 hours (target: real-time)

## Remediation Plan
- Deploy SOAR playbooks for top 10 alert types by Q2
- Integrate cloud APIs for real-time asset inventory
- Hire two additional SOC Tier 2 analysts

## Flag Fragment C
flag_fragment_c = "V1S1B1L1TY}"

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  ISCM maturity is measured and improved annually. Gaps in SOAR coverage
  and alert triage time are common — and measurable targets for improvement.
─────────────────────────────────────────────────────────────────────`,
        "/iscm-policy/README.md": `# ISCM Policy Server

This server hosts the organization's ISCM program documentation.

## Directory Structure
- policy/    → Program charter and governance documents
- metrics/   → KPI registry and monitoring frequency definitions
- review/    → Annual review reports and gap analysis

Access is restricted to ISCM program staff and auditors.
All access is logged per NIST SP 800-137A Section 3.4.`,
      },
      dirs: {
        "/": [{ name: "iscm-policy", isDir: true }],
        "/iscm-policy": [
          { name: "README.md", isDir: false },
          { name: "policy", isDir: true },
          { name: "metrics", isDir: true },
          { name: "review", isDir: true },
        ],
        "/iscm-policy/policy": [{ name: "iscm-charter.txt", isDir: false }],
        "/iscm-policy/metrics": [{ name: "kpi-registry.txt", isDir: false }],
        "/iscm-policy/review": [{ name: "annual-review-2024.txt", isDir: false }],
      },
      fragments: [
        { trigger: "/iscm-policy/policy/iscm-charter.txt", value: "FLAG{1SCM_", label: "Fragment A — Charter" },
        { trigger: "/iscm-policy/metrics/kpi-registry.txt", value: "C0NT1NU0US_", label: "Fragment B — Metrics" },
        { trigger: "/iscm-policy/review/annual-review-2024.txt", value: "V1S1B1L1TY}", label: "Fragment C — Review" },
      ],
    },
  },

  // ─── audit-cm02: Next-Gen SIEM ───────────────────────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "IBM Security Intelligence Center", location: "Cambridge, Massachusetts", era: "Present Day", emoji: "🧠" },
    id: "audit-cm02",
    order: 2,
    title: "The Intelligence Engine",
    subtitle: "Next-Gen SIEM — ML-enhanced detection beyond signatures",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "audit-cm-badge-02", name: "SIEM Analyst", emoji: "🧠" },
    easeScore: 6,
    valueScore: 10,
    rank: 4,
    challengeType: "ctf",
    info: {
      tagline: "Signatures catch yesterday's attacks. ML catches tomorrow's.",
      year: 2020,
      overview: [
        "Traditional SIEM platforms (Splunk, ArcSight, QRadar) rely on signature-based detection — engineers write correlation rules matching known attack patterns:\n- This works for commodity attacks but fails against novel techniques, living-off-the-land (LOTL) attacks, and slow-burn APT campaigns that stay below individual rule thresholds.\n- Next-gen platforms (Microsoft Sentinel, Google Chronicle, Elastic SIEM, Securonix) augment rules with machine learning — unsupervised anomaly detection, supervised classifiers on labeled attack data, and graph-based entity resolution — and ingest petabyte-scale data from cloud APIs, endpoint agents, network taps, and identity providers, not just syslog.",
        "Two architectural shifts define next-gen SIEM:\n- Normalization to a common schema (OCSF — Open Cybersecurity Schema Framework, or Elastic Common Schema) before storage, so a single detection rule matches across dozens of data sources, and with threat-intel enrichment at ingest time analysts see context-rich alerts rather than raw log lines.\n- Cloud-scale data-lake architectures — Sentinel on Azure Data Explorer and Log Analytics, Chronicle on Google's Bigtable-based lake, Elastic SIEM on Elasticsearch — eliminating capacity planning (petabytes per day without hardware procurement) and shifting cost from CapEx hardware to OpEx ingestion volume, which has driven fierce per-GB pricing competition.",
        "Detection has become a software-engineering discipline, increasingly AI-assisted:\n- Detection-as-Code writes rules in platform languages (KQL for Sentinel, YARA-L for Chronicle, SPL for Splunk), stores them in version control, unit-tests them against synthetic attack data, peer-reviews, and deploys through a pipeline — with Sigma letting you write a rule once and compile to any SIEM's native language.\n- AI transforms SIEM beyond anomaly detection two ways: LLMs as natural-language query interfaces ('show me all authentication events from Russia for admin accounts in the last 24 hours' translated to KQL or SPL and executed), and generative AI for alert triage (summarizing context, retrieving threat intelligence, and drafting a recommended response to cut analyst cognitive load).",
        "Auditing a next-gen SIEM program examines five dimensions:\n- Data source coverage (what percentage of assets send logs), detection rule freshness (when rules were last reviewed against current TTPs), and false positive rate (alerts with no action / total alerts — target below 5%).\n- Mean time to alert (event-to-alert latency — target under 5 minutes for critical events) and MITRE ATT&CK coverage (what percentage of techniques have at least one active detection rule).",
      ],
      technical: {
        title: "ML Detection Patterns in Next-Gen SIEM",
        body: [
          "Next-gen SIEM detection rests on a few ML techniques, with false-positive reduction the central operational challenge:\n- Three dominate — Isolation Forest / DBSCAN for unsupervised outlier detection on user/entity behavior baselines, gradient-boosting classifiers (XGBoost, LightGBM) trained on labeled threat data for supervised detection, and graph neural networks for lateral-movement detection by modeling authentication relationships.\n- False positives are the primary challenge — a SIEM producing 10,000 alerts a day at 99% false positives still buries 100 real incidents in noise — so next-gen platforms use alert clustering, deduplication, and UEBA risk scores to surface only the highest-confidence findings.",
          "The stage's script is a canonical unsupervised anomaly detector for login events:\n- `extract_features()` engineers each raw login into a five-feature vector — hour of day (off-hours logins), failed_attempts (credential stuffing), new_country (geographic anomalies), bytes_out_mb (in-session exfiltration), and admin_escalation (privilege abuse) — each chosen for behavioral signal independent of the attacker's identity.\n- The `IsolationForest` is initialized with `contamination=0.01` (assuming 1% of training data may itself be anomalous, realistic for 30 days of logins), `fit()` trains on 30 days of normal behavior to set the baseline, and `decision_function()` scores today's logins with negative values flagging anomalies (the `-0.1` threshold is a starting point to tune to alert-volume tolerance); in production it runs as a scheduled job pushing results to the SIEM and SOAR for triage.",
          "Enterprise integration turns the script's output into investigable incidents:\n- Alerts push to Microsoft Sentinel via the Log Analytics Data Collector API or to Splunk via the HTTP Event Collector (HEC), each anomaly becoming a custom security event mapped to OCSF's Authentication class.\n- The SIEM's correlation engine links the anomaly to other alerts on the same user or IP within a time window to build an incident timeline, and SOAR integration triggers a playbook enriching it with AD group membership, recent ticket history, and manager contact before routing to an analyst.",
          "An MCP server — `mcp-siem-hunter` — exposes live SIEM querying to AI assistants, with guardrails:\n- It would expose tools like `run_kql_query`, `get_alert_timeline`, `search_by_ioc`, `get_detection_coverage`, and `tune_alert_threshold`, so an auditor could instruct Claude to 'find all alerts involving IP 185.220.101.45 in the last 72 hours and correlate them with associated user accounts,' chaining the tools into a comprehensive threat timeline in seconds versus 20 minutes of manual queries.\n- A sample `run_kql_query` (built with the fastmcp SDK) authenticates to the Sentinel workspace via a managed-identity token, runs the query through the Azure Monitor Query SDK, and returns results — enforcing a 10,000-row limit to prevent runaway queries, logging every execution to an audit table in Sentinel itself, and validating queries against a whitelist of allowed table names to block query-injection exfiltration.",
        ],
        codeExample: {
          label: "Anomaly detection on login events (Python / scikit-learn Isolation Forest)",
          code: `import numpy as np
from sklearn.ensemble import IsolationForest
from datetime import datetime

# Feature engineering: login behavior per user
def extract_features(login_events: list[dict]) -> np.ndarray:
    features = []
    for event in login_events:
        hour = datetime.fromisoformat(event["timestamp"]).hour
        features.append([
            hour,                              # time of day
            event.get("failed_attempts", 0),   # consecutive failures
            int(event.get("new_country", False)), # first login from this country
            event.get("bytes_out_mb", 0),      # data exfiltration signal
            int(event.get("admin_escalation", False)),  # privilege escalation
        ])
    return np.array(features)

# Train on 30 days of normal login data
normal_logins = load_events(days=30, label="normal")
X_train = extract_features(normal_logins)

model = IsolationForest(contamination=0.01, random_state=42)
model.fit(X_train)

# Score today's logins — negative scores = anomalies
todays_logins = load_events(days=1)
X_today = extract_features(todays_logins)
scores = model.decision_function(X_today)
anomalies = [e for e, s in zip(todays_logins, scores) if s < -0.1]
print(f"Anomalous logins: {len(anomalies)} of {len(todays_logins)}")`,
        },
      },
      incident: {
        title: "SolarWinds Orion Supply Chain Attack — SIEM Miss (2020)",
        when: "October 2019 – December 2020",
        where: "18,000+ organizations globally",
        impact: "9 US federal agencies compromised; 14-month undetected dwell time",
        body: [
          "The SolarWinds SUNBURST attack trojanized the Orion build process, inserting a backdoor into legitimate signed updates sent to 18,000 customers, with evasion no signature could catch:\n- It lay dormant for 12–14 days after installation, communicated using the same DNS patterns as legitimate SolarWinds telemetry, refused to execute on security-vendor systems (checking the hostname against a blocklist), and used a domain-generation algorithm for C2 that blended with normal DNS traffic.\n- No signature-based SIEM rule could detect it, because it looked identical to legitimate software behavior.",
          "FireEye found the attack not through SIEM alerts but through a human noticing a behavioral anomaly:\n- An analyst spotted an unusual MFA device registration on a FireEye corporate account — a phone number that didn't match the employee's profile — exactly the kind of anomaly a next-gen SIEM with UEBA would flag automatically, and that thread unraveled the whole campaign.\n- Post-incident, Sentinel and other next-gen platforms deployed specific SUNBURST behavioral models — detection rules for the DGA pattern, the dormancy behavior, and the process-injection technique.",
          "SolarWinds fundamentally changed the SIEM industry's understanding of detection scope:\n- Before SUNBURST, most SIEM programs were optimized for known-bad signatures and compliance rules; after it, behavioral detection became a board-level requirement and signature-only shops scrambled to add ML.\n- It also drove software-supply-chain monitoring — detecting when signed, legitimate software exhibits unexpected network behavior is now a standard next-gen SIEM detection category.",
          "For auditors assessing SIEM programs post-SolarWinds, the key questions are:\n- Does the SIEM have ML-based behavioral baselines for network traffic from all software-management tools, does it detect dormancy-then-activation patterns in process execution, is there a rule for DGA-based DNS queries, and does it ingest endpoint telemetry granular enough to see process-level network connections?\n- A SIEM ingesting only firewall logs would have missed SUNBURST entirely, since the attack used legitimate, allowed DNS traffic.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Data Sources", sub: "cloud, endpoint, identity, net", type: "attacker" },
          { label: "Normalize (OCSF/ECS)", sub: "schema at ingest", type: "system" },
          { label: "ML + Rules Engine", sub: "anomaly + signatures", type: "victim" },
          { label: "Enriched Alerts", sub: "context + risk score", type: "result" },
        ],
      },
      timeline: [
        { year: 2005, event: "ArcSight / QRadar era — signature-based SIEM becomes enterprise standard" },
        { year: 2015, event: "Splunk ML Toolkit released — first ML capabilities in traditional SIEM" },
        { year: 2019, event: "Microsoft Sentinel (cloud-native SIEM) launched; Google Chronicle announced" },
        { year: 2020, event: "SolarWinds attack exposes limits of signature detection — ML SIEM adoption accelerates", highlight: true },
        { year: 2022, event: "OCSF (Open Cybersecurity Schema Framework) launched by AWS, Splunk, and 17 partners" },
        { year: 2024, event: "LLM-assisted alert triage integrated into major SIEM platforms" },
      ],
      keyTakeaways: [
        "Signature detection misses novel attacks — ML detects behavioral anomalies independent of known patterns",
        "Schema normalization (OCSF/ECS) at ingest enables cross-source detection with a single rule",
        "False positive reduction is the #1 operational SIEM challenge — risk scoring and clustering help",
        "SolarWinds showed that supply chain and LOTL attacks require behavioral, not signature, detection",
        "Next-gen SIEM ingests cloud APIs and identity providers, not just traditional syslog",
        "Detection-as-Code applies CI/CD principles to rule development — version control, peer review, and testing",
        "Sigma format enables writing detection rules once and compiling to any SIEM platform's native language",
        "MITRE ATT&CK coverage percentage is a key audit metric — what percentage of techniques have active detections",
        "LLM interfaces allow analysts to query SIEM data in natural language, dramatically reducing query skill requirements",
        "MCP servers (mcp-siem-hunter) can expose live SIEM query capabilities to AI auditors for automated evidence collection",
      ],
      references: [
        { title: "OCSF Schema Framework", url: "https://schema.ocsf.io/" },
        { title: "CISA SolarWinds Advisory AA20-352A", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a" },
        { title: "Microsoft Sentinel Documentation", url: "https://learn.microsoft.com/en-us/azure/sentinel/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm02-q1", type: "Core Idea", challenge: "Signatures miss LOTL.", text: "Why do signature-based SIEMs miss living-off-the-land attacks?", options: ["LOTL activity stays below individual rule thresholds and uses legitimate tools","Signatures are too fast","LOTL is loud and obvious","Signatures catch everything"], correctIndex: 0, explanation: "LOTL blends into normal admin activity, evading fixed signatures." },
        { id: "audit-cm02-q2", type: "Normalization", challenge: "One rule, many sources.", text: "What's the purpose of schema normalization (OCSF/ECS) at ingest?", options: ["A single detection rule can match across dozens of data sources","To compress logs for storage","To delete old logs","To encrypt at rest"], correctIndex: 0, explanation: "Normalized schemas let one rule work across many log types." },
        { id: "audit-cm02-q3", type: "Real Incident", challenge: "SUNBURST.", text: "Was SolarWinds SUNBURST caught by a SIEM signature on known patterns?", options: ["No — it was novel and evaded signature detection","Yes, instantly","Only by antivirus","It was never detected"], correctIndex: 0, explanation: "Novel attacks slip past signatures — behavioral detection is needed." },
        { id: "audit-cm02-q4", type: "ML Technique", challenge: "No labels.", text: "Which ML technique best detects novel login anomalies with no labeled attack data?", options: ["Isolation Forest (unsupervised outlier detection)","XGBoost on labeled threat data","A signature list","A spreadsheet"], correctIndex: 0, explanation: "Unsupervised outlier detection finds novel anomalies without labels." },
        { id: "audit-cm02-q5", type: "Operations", challenge: "The main pain.", text: "What's the primary operational challenge in next-gen SIEM?", options: ["Reducing false positives","Running out of disk only","Too few alerts","No challenges"], correctIndex: 0, explanation: "False-positive reduction is the core day-to-day SIEM challenge." },
        { id: "audit-cm02-q6", type: "Supervised vs Unsupervised", challenge: "Pick the tool.", text: "Supervised ML (e.g. XGBoost) is appropriate when…", options: ["You have labeled attack data to train on","You have no labels at all","You never want to detect anything","Only for encryption"], correctIndex: 0, explanation: "Supervised needs labels; unsupervised handles the novel/unlabeled case." },
        { id: "audit-cm02-q7", type: "Concept", challenge: "Beyond signatures.", text: "A next-gen SIEM improves on the old model by adding…", options: ["Behavioral/ML detection on normalized data, not just static signatures","More signatures only","Fewer data sources","Manual log reading"], correctIndex: 0, explanation: "ML on normalized telemetry catches what signatures can't." },
        { id: "audit-cm02-q8", type: "Defense", challenge: "Catch the quiet ones.", text: "To catch attacks that stay below rule thresholds, you need…", options: ["Anomaly detection that models normal and flags deviations","Higher thresholds","Fewer rules","To ignore low-volume activity"], correctIndex: 0, explanation: "Anomaly detection surfaces stealthy, sub-threshold behavior." },
      ],
    },
    ctf: {
      scenario: "You've accessed a compromised SIEM node. The breach left behind ML model artifacts and detection logs split across three directories. Collect all three flag fragments to reconstruct the incident signature.",
      hint: "The SIEM stores model configs, detection logs, and enrichment data in separate directories.",
      hints: [
        "List /siem-node to see the directory structure.",
        "Check the models/, detections/, and enrichment/ subdirectories.",
        "Each directory has one file containing a fragment value.",
      ],
      files: {
        "/siem-node/models/isolation-forest-config.json": `{
  "model_type": "IsolationForest",
  "trained_on": "30d_login_events",
  "contamination": 0.01,
  "features": ["hour_of_day", "failed_attempts", "new_country", "bytes_out_mb", "admin_escalation"],
  "last_retrained": "2024-01-10T00:00:00Z",
  "auc_roc": 0.94,
  "false_positive_rate": 0.008,
  "_fragment": "A/3",
  "flag_fragment": "FLAG{N3XT_"
}`,
        "/siem-node/detections/alert-2024-01-15.jsonl": `{"ts":"2024-01-15T03:12:44Z","user":"svc-backup","src_ip":"10.0.4.88","event":"login","anomaly_score":-0.31,"risk":"HIGH","reason":"login at 03:12 (baseline: 09:00-17:00), new_country=RU, bytes_out=2.1GB","_fragment":"B/3","flag_fragment":"G3N_S13M_"}
{"ts":"2024-01-15T03:14:01Z","user":"svc-backup","src_ip":"10.0.4.88","event":"file_access","path":"/finance/payroll-2024.xlsx","anomaly_score":-0.44,"risk":"CRITICAL"}
{"ts":"2024-01-15T03:18:22Z","user":"svc-backup","src_ip":"10.0.4.88","event":"data_export","bytes_out":2147483648,"dest":"185.220.101.45","risk":"CRITICAL"}`,
        "/siem-node/enrichment/threat-intel-hits.txt": `# Threat Intelligence Enrichment Results — 2024-01-15

IP: 185.220.101.45
  → Tor exit node (Abuse.ch)
  → Associated with Lazarus Group C2 (Recorded Future, confidence: HIGH)
  → Previous targets: financial sector, healthcare
  → Geolocation: Netherlands (AS: Frantech Solutions)

User: svc-backup
  → Service account — should NEVER initiate logins
  → Last password change: 2022-03-01 (stale)
  → Group memberships: Domain Admins (unexpected!)

_fragment: C/3
flag_fragment: D3T3CT10N}"`,
        "/siem-node/README.md": `# SIEM Forensic Node

This node contains artifacts from the Jan 15 2024 incident investigation.

Directories:
  models/     → ML model configurations and performance metrics
  detections/ → Raw alert JSONL from the anomaly detection pipeline
  enrichment/ → Threat intelligence and entity enrichment results

All data is read-only for forensic preservation.`,
      },
      dirs: {
        "/": [{ name: "siem-node", isDir: true }],
        "/siem-node": [
          { name: "README.md", isDir: false },
          { name: "models", isDir: true },
          { name: "detections", isDir: true },
          { name: "enrichment", isDir: true },
        ],
        "/siem-node/models": [{ name: "isolation-forest-config.json", isDir: false }],
        "/siem-node/detections": [{ name: "alert-2024-01-15.jsonl", isDir: false }],
        "/siem-node/enrichment": [{ name: "threat-intel-hits.txt", isDir: false }],
      },
      fragments: [
        { trigger: "/siem-node/models/isolation-forest-config.json", value: "FLAG{N3XT_", label: "Fragment A — Model Config" },
        { trigger: "/siem-node/detections/alert-2024-01-15.jsonl", value: "G3N_S13M_", label: "Fragment B — Alert Log" },
        { trigger: "/siem-node/enrichment/threat-intel-hits.txt", value: "D3T3CT10N}", label: "Fragment C — Intel Hit" },
      ],
    },
  },

  // ─── audit-cm03: UEBA ────────────────────────────────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "Securonix UEBA Research Lab", location: "Addison, Texas", era: "Present Day", emoji: "👤" },
    id: "audit-cm03",
    order: 3,
    title: "The Behavioral Lens",
    subtitle: "UEBA — User and Entity Behavior Analytics",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "audit-cm-badge-03", name: "Behavior Analyst", emoji: "👤" },
    easeScore: 5,
    valueScore: 9,
    rank: 9,
    challengeType: "ctf",
    info: {
      tagline: "Attackers steal credentials. UEBA detects the behavior that follows.",
      year: 2018,
      overview: [
        "User and Entity Behavior Analytics (UEBA) addresses the fundamental limit of perimeter and signature-based security: once an attacker holds valid credentials, they look legitimate to traditional controls:\n- UEBA builds statistical baselines of normal behavior for every user and entity (devices, service accounts, applications) and flags deviations even when the attacker uses stolen but valid credentials.\n- It ingests identity data (Active Directory, Okta, Azure AD), endpoint telemetry (EDR), network flows (NetFlow, IPFIX), application logs, and DLP events, computing per-entity features like typical working hours, usual locations, normal data-access volumes, peer-group comparison, application usage, and authentication sequences.",
        "UEBA's output is a risk score, produced by two engines and reliant on chaining weak signals:\n- The score is a continuous measure of how anomalous an entity's current behavior is relative to its own baseline and peer group, and a single anomaly rarely alerts — UEBA chains multiple low-confidence anomalies into a high-confidence finding, which is what distinguishes it from single-rule alerting.\n- Its architecture has a baseline engine (continuously updating per-entity statistical models via exponential moving averages, ARIMA time-series, or LSTM neural networks for temporal patterns) and a scoring engine (computing anomaly magnitude as deviation in standard deviations, normalized to 0–10) — and baselines are per-entity, not global, so a CFO's normal data-access volume would be catastrophic for a junior analyst.",
        "Two design factors keep scoring accurate:\n- Peer group analysis adds a second dimension — each entity is grouped by job title, department, location, and access, so behavior anomalous to one's own baseline but normal for peers (an M&A analyst downloading large volumes of financial data) gets a reduced score, while behavior normal to one's own baseline but far from peers (the only engineer accessing HR systems) gets an elevated one.\n- The 30–90 day baseline-establishment period must run in monitor-only mode (scoring but not alerting) to avoid disrupting operations with false positives, and known anomalous periods (year-end financial reviews, major launches) should be excluded from training data so legitimate seasonal patterns don't skew the baseline toward anomaly.",
        "AI is extending UEBA beyond statistical anomaly detection into explanation:\n- LLMs generate natural-language reasons a behavior triggered a score — instead of 'anomaly score 7.8,' an analyst sees 'Marcus Chen accessed 3x his normal volume of HR files, from a new device, at 3am, then transferred a large file to an external cloud service — matching patterns in 87% of confirmed insider-theft cases in the training dataset.'\n- That explainability dramatically reduces analyst investigation time.",
      ],
      technical: {
        title: "Risk Scoring and Threat Chaining",
        body: [
          "UEBA risk scores are computed by ensemble models whose power is in combining weak signals:\n- The ensemble uses time-series forecasting (ARIMA, LSTM) for temporal baselines, peer-group comparison for relative scoring, and Bayesian networks to correlate independent signals into a compound score — the key insight being that no single signal may exceed an alert threshold, but their combination does.\n- Threat-chaining example: a 500MB download (low risk 2.1), a login from a new country (4.8), first-time HR-database access (5.2), and an external email with an attachment (4.1) trigger nothing individually, but chain to 8.9 — dramatically cutting false positives versus rule-based detection.",
          "The stage's script implements threat chaining via the `BehaviorSignal` dataclass and `chain_risk_score` function:\n- Each `BehaviorSignal` captures `raw_score` (anomaly magnitude on 0–10), `confidence` (model certainty 0.0–1.0), and `weight` (a domain multiplier — bulk HR downloads weighted 1.5x for higher true-positive rates), combined into `weighted_score`.\n- `chain_risk_score` applies logarithmic scaling so the total grows with the number of signals but with diminishing returns — `math.log1p(len(signals))` rises from 0.69 for two signals to 2.30 for ten, penalizing single-signal alerting and preventing one high-volume low-quality source from dominating, while `min(10.0, ...)` caps the maximum.",
          "In production, `chain_risk_score` feeds a case-management workflow:\n- When a score exceeds the critical threshold (typically 8.0), the platform auto-creates a SIEM case, attaches all contributing signals as evidence, pulls the entity's recent HR record (departure date, performance-review status, access certifications), and routes to the appropriate SOC tier by access level.\n- Service accounts hitting a critical score route straight to the IR team, since a service account should never show behavioral anomalies — any deviation is treated as an indicator of compromise rather than an insider threat.",
          "An MCP server — `mcp-ueba-analyst` — exposes entity risk data to AI assistants, but UEBA's surveillance nature demands strict controls:\n- It would expose tools like `get_entity_risk_score`, `get_risk_timeline`, `list_high_risk_entities`, `compare_to_peers`, and `get_signal_explanation`, so a CISO could ask Claude 'are there any finance-department employees with risk scores above 7 in the last 7 days?' and get a human-readable summary with specific concerns in seconds instead of 15–30 minutes of manual review per entity.\n- Because UEBA data is detailed behavioral surveillance of employees — requiring works-council notification, privacy impact assessments, and data minimization in some jurisdictions — dashboard access must be strictly controlled (HR shouldn't see IT UEBA data and vice versa, enforced by the MCP server's role-based tool permissions), with data retained only as long as necessary (90–180 days for baselines, 1–2 years for confirmed-incident evidence) under automated deletion.",
        ],
        codeExample: {
          label: "UEBA risk score chaining (Python)",
          code: `from dataclasses import dataclass, field
from typing import Sequence
import math

@dataclass
class BehaviorSignal:
    name: str
    raw_score: float      # 0–10: anomaly magnitude
    confidence: float     # 0–1: model confidence
    weight: float = 1.0

    @property
    def weighted_score(self) -> float:
        return self.raw_score * self.confidence * self.weight

def chain_risk_score(signals: Sequence[BehaviorSignal]) -> float:
    """Compound risk score: signals reinforce each other non-linearly."""
    if not signals:
        return 0.0
    total = sum(s.weighted_score for s in signals)
    # Diminishing returns: log scaling prevents single signal from dominating
    # but multiple moderate signals compound toward critical threshold (8.0)
    return min(10.0, total * math.log1p(len(signals)))

# Insider threat scenario: IT admin exfiltrating data before resignation
signals = [
    BehaviorSignal("after_hours_access", raw_score=3.5, confidence=0.85),
    BehaviorSignal("bulk_download_hr_data", raw_score=5.0, confidence=0.92, weight=1.5),
    BehaviorSignal("new_usb_device_mount", raw_score=4.0, confidence=0.88),
    BehaviorSignal("linkedin_job_search_spike", raw_score=2.0, confidence=0.70),
]

risk = chain_risk_score(signals)
print(f"Chained risk score: {risk:.2f}")  # → 9.41 (CRITICAL)
print(f"Alert threshold: 8.0 → {'ALERT' if risk >= 8.0 else 'monitor'}")`,
        },
      },
      incident: {
        title: "Tesla Insider Threat — Data Exfiltration (2023)",
        when: "May 2023",
        where: "Tesla, Gigafactory Nevada",
        impact: "75,735 employee records leaked; includes Social Security numbers and financial data",
        body: [
          "Two former Tesla employees transferred over 100GB of confidential data to German media outlet Handelsblatt before resigning:\n- The leaked data included personal information of 75,735 Tesla employees, customer complaints about Autopilot, and financial records.\n- Tesla's investigation found the employees had systematically extracted data over weeks using their legitimate access — a textbook insider-threat pattern, invisible to signature-based security but highly visible to UEBA.",
          "UEBA would have detected multiple behavioral signals in the weeks before departure:\n- Large HR-system downloads well above baseline, USB device activity outside normal patterns (transfers to external drives), email forwarding to personal accounts (a classic pre-departure collection pattern), and access to repositories outside the employees' normal job function.\n- Each signal alone might have been dismissed as plausible work activity, but the chained risk score across all of them would have generated a critical alert well before the data reached the journalist.",
          "The specific signals that would have fired chain into a critical score within days of the first anomalous access:\n- Access-volume anomaly — a bulk HR-records download, a 40x increase over the 90-day baseline; new-resource access — engineers reaching HR compensation databases for the first time in their tenure; USB exfiltration — a new device mounted then immediately used for large transfers.\n- Off-hours access — many transfers during evenings and weekends; and peer-group deviation — no other engineers in their department accessing HR systems.",
          "Tesla's legal response was significant but came too late:\n- It sued both former employees and obtained a temporary restraining order against further disclosure — after the data had already been transferred.\n- A UEBA-triggered response would have flagged the behavior while the employees were still employed, letting HR and legal investigate before resignation and potentially recover the data before it reached external parties — the operational value of insider-threat detection: intervention before harm rather than litigation after.",
          "The industry lesson from the Tesla case is that insider threats are fundamentally a data access governance and monitoring problem, not just a security technology problem. Tesla, like many rapidly growing companies, granted broad access rights to employees in the name of operational speed — a legacy of startup culture. UEBA alone cannot solve the problem if the underlying access rights are excessive. The combination of least-privilege access controls (limiting what data employees can access) with UEBA (detecting anomalous access within those rights) is the complete defense. UEBA alerts should trigger access reviews, not just incident response.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Identity + Endpoint + Net", sub: "AD, EDR, NetFlow, DLP", type: "attacker" },
          { label: "Behavioral Baseline", sub: "per-user/entity ML models", type: "system" },
          { label: "Signal Chaining", sub: "compound risk scoring", type: "victim" },
          { label: "Prioritized Risk Alert", sub: "entity risk score + context", type: "result" },
        ],
      },
      timeline: [
        { year: 2015, event: "Gartner coins 'UEBA' term — UBA extended to cover non-human entities" },
        { year: 2018, event: "UEBA integrated into major SIEM platforms (Splunk UBA, IBM QRadar UBA)", highlight: true },
        { year: 2020, event: "Identity-centric security model rises — UEBA becomes core Zero Trust component" },
        { year: 2023, event: "Tesla insider threat — 75k employee records exfiltrated by departing employees" },
        { year: 2024, event: "LLM-enhanced UEBA: natural language explanation of anomalous behavior patterns" },
      ],
      keyTakeaways: [
        "UEBA detects compromised credentials by behavior, not by signature — the attacker looks different even with valid access",
        "Risk score chaining: multiple low-confidence signals compound into high-confidence alerts",
        "Baseline models are per-entity and per-peer-group — a CFO's 'normal' differs from a junior analyst's",
        "Insider threats are UEBA's strongest use case — employees with legitimate access who change behavior",
        "UEBA requires 30–90 days of baseline data before detection accuracy is reliable",
        "Peer group comparison is the second scoring dimension — deviation from peers elevates scores independent of self-baseline",
        "The baseline learning period should exclude known seasonal anomalies (year-end reviews, major launches) to prevent skew",
        "LLM explainability transforms UEBA output from numeric scores to plain-language behavioral narratives",
        "UEBA must be paired with least-privilege access controls — detecting anomalies within excessive rights is insufficient",
        "Privacy and employment law constraints apply to UEBA — works council notifications and data minimization policies are required in many jurisdictions",
      ],
      references: [
        { title: "Gartner UEBA Market Guide", url: "https://www.gartner.com/en/documents/3986057" },
        { title: "NIST SP 800-207 Zero Trust Architecture", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" },
        { title: "Tesla Data Breach Report (Reuters)", url: "https://www.reuters.com/technology/tesla-data-breach-75000-employees-2023-08-18/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm03-q1", type: "Core Idea", challenge: "Stolen but valid.", text: "How does UEBA catch an attacker using valid stolen credentials?", options: ["By comparing behavior against that account's own baseline","By checking the password length","By blocking all logins","It can't"], correctIndex: 0, explanation: "Valid creds pass auth, but anomalous behavior versus baseline reveals misuse." },
        { id: "audit-cm03-q2", type: "Risk Chaining", challenge: "Compound the signals.", text: "What's the advantage of UEBA risk-score chaining over single-rule alerts?", options: ["Multiple low-confidence signals compound into a high-confidence alert, cutting false positives","It uses signatures only","It removes the need for baselines","It alerts on everything"], correctIndex: 0, explanation: "Chaining weak signals reduces noise while raising confidence." },
        { id: "audit-cm03-q3", type: "Baseline Period", challenge: "Not day one.", text: "Is UEBA reliable from its first day of deployment?", options: ["No — it needs a baseline period to learn normal behavior","Yes, immediately","Only with signatures","Never"], correctIndex: 0, explanation: "UEBA must learn baselines before detection is accurate." },
        { id: "audit-cm03-q4", type: "Real Incident", challenge: "Tesla insider.", text: "Which signal would have flagged the Tesla insider earliest?", options: ["Large HR file downloads and USB activity outside normal patterns","Perimeter firewall logs","A signature match","CPU temperature"], correctIndex: 0, explanation: "Behavioral anomalies (bulk downloads, USB) are the insider tell." },
        { id: "audit-cm03-q5", type: "Per-Role Baselines", challenge: "Different normals.", text: "Should a CFO and a junior analyst share one UEBA baseline?", options: ["No — each role/user has its own behavioral baseline","Yes, same org same baseline","Only on weekends","Baselines don't vary"], correctIndex: 0, explanation: "Normal differs by role and user; baselines must be per-entity." },
        { id: "audit-cm03-q6", type: "Concept", challenge: "Behavior over signatures.", text: "UEBA's detection approach is…", options: ["Modeling normal behavior and flagging deviations","Matching known malware hashes","Blocking by IP","Reading the privacy policy"], correctIndex: 0, explanation: "It's a behavioral lens, not a signature engine." },
        { id: "audit-cm03-q7", type: "Insider Threat", challenge: "Why UEBA shines.", text: "UEBA is especially valuable against…", options: ["Insider threats and credential misuse that look like 'authorized' activity","Loud network scans only","Physical break-ins","Power outages"], correctIndex: 0, explanation: "It catches misuse by accounts that are technically authorized." },
        { id: "audit-cm03-q8", type: "False Positives", challenge: "Keeping it usable.", text: "Risk-score chaining helps operations by…", options: ["Reducing false positives so analysts trust the high-confidence alerts","Generating more alerts","Removing all alerts","Slowing detection"], correctIndex: 0, explanation: "Compounding signals raises precision and reduces fatigue." },
      ],
    },
    ctf: {
      scenario: "A UEBA system flagged a user 'm.chen' as CRITICAL risk. The risk engine left its scoring artifacts on disk. Reconstruct the chained risk score by reading the signal files across the entity profile.",
      hint: "The UEBA engine writes signal files per-category. Read each signal file to collect the flag fragments.",
      hints: [
        "List /ueba-artifacts/m.chen/ to find the signal categories.",
        "Each signal directory (identity/, endpoint/, network/) holds a scored signal file.",
        "Combine the flag_fragment values in directory order.",
      ],
      files: {
        "/ueba-artifacts/m.chen/identity/auth-signals.json": `{
  "entity": "m.chen",
  "signal_type": "identity_anomaly",
  "signals": [
    {"name": "new_country_login", "country": "RU", "score": 6.2, "confidence": 0.91},
    {"name": "after_hours_admin_access", "hour": 2, "score": 4.8, "confidence": 0.87},
    {"name": "mfa_bypass_attempt", "method": "legacy_auth", "score": 7.1, "confidence": 0.95}
  ],
  "category_risk": 7.8,
  "flag_fragment": "FLAG{U3BA_"
}`,
        "/ueba-artifacts/m.chen/endpoint/file-signals.json": `{
  "entity": "m.chen",
  "signal_type": "endpoint_anomaly",
  "signals": [
    {"name": "bulk_hr_download", "files": 1842, "bytes": 2.3e9, "score": 8.1, "confidence": 0.93},
    {"name": "usb_mount_new_device", "device_id": "VID_090C", "score": 5.5, "confidence": 0.82},
    {"name": "zip_archive_sensitive_data", "archive": "q4-payroll.zip", "score": 7.4, "confidence": 0.90}
  ],
  "category_risk": 8.6,
  "flag_fragment": "R1SK_CH41N_"
}`,
        "/ueba-artifacts/m.chen/network/flow-signals.json": `{
  "entity": "m.chen",
  "signal_type": "network_anomaly",
  "signals": [
    {"name": "large_outbound_transfer", "dest_ip": "185.220.101.45", "bytes": 2.1e9, "score": 9.0, "confidence": 0.97},
    {"name": "tor_exit_node_connection", "ip": "185.220.101.45", "score": 8.8, "confidence": 0.99},
    {"name": "dns_tunneling_pattern", "domain": "exfil.attacker.io", "score": 7.9, "confidence": 0.88}
  ],
  "category_risk": 9.6,
  "chained_total": 9.87,
  "alert_level": "CRITICAL",
  "flag_fragment": "D3T3CT3D}"
}`,
        "/ueba-artifacts/m.chen/README.txt": `# UEBA Entity Profile: m.chen (Marcus Chen, IT Admin)

Risk assessment: CRITICAL (9.87 / 10.0)
Alert triggered: 2024-01-15 03:47 UTC
Analyst assigned: SOC-T2-Rodriguez

Signal categories:
  identity/  → Authentication and identity anomalies
  endpoint/  → File system and device anomalies
  network/   → Network flow anomalies

Recommended action: Suspend account, preserve evidence, escalate to IR team.`,
      },
      dirs: {
        "/": [{ name: "ueba-artifacts", isDir: true }],
        "/ueba-artifacts": [{ name: "m.chen", isDir: true }],
        "/ueba-artifacts/m.chen": [
          { name: "README.txt", isDir: false },
          { name: "identity", isDir: true },
          { name: "endpoint", isDir: true },
          { name: "network", isDir: true },
        ],
        "/ueba-artifacts/m.chen/identity": [{ name: "auth-signals.json", isDir: false }],
        "/ueba-artifacts/m.chen/endpoint": [{ name: "file-signals.json", isDir: false }],
        "/ueba-artifacts/m.chen/network": [{ name: "flow-signals.json", isDir: false }],
      },
      fragments: [
        { trigger: "/ueba-artifacts/m.chen/identity/auth-signals.json", value: "FLAG{U3BA_", label: "Fragment A — Identity" },
        { trigger: "/ueba-artifacts/m.chen/endpoint/file-signals.json", value: "R1SK_CH41N_", label: "Fragment B — Endpoint" },
        { trigger: "/ueba-artifacts/m.chen/network/flow-signals.json", value: "D3T3CT3D}", label: "Fragment C — Network" },
      ],
    },
  },

  // ─── audit-cm04: NDR ─────────────────────────────────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "Darktrace Global Threat Center", location: "Cambridge, England", era: "Present Day", emoji: "🌐" },
    id: "audit-cm04",
    order: 4,
    title: "The Network Eye",
    subtitle: "NDR — Network Detection and Response",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "audit-cm-badge-04", name: "Network Defender", emoji: "🌐" },
    easeScore: 5,
    valueScore: 9,
    rank: 10,
    challengeType: "ctf",
    info: {
      tagline: "The network never lies. Every attacker move leaves a packet trail.",
      year: 2019,
      overview: [
        "Network Detection and Response (NDR) — formerly Network Traffic Analysis (NTA) — gives security visibility into encrypted and unencrypted traffic at the network layer, independent of endpoint agents:\n- Where EDR needs an agent on every managed device, NDR passively observes all traffic on monitored segments, including IoT devices, OT systems, and unmanaged assets that can't run agents.\n- Platforms like Darktrace, ExtraHop, Vectra AI, and Corelight do deep packet inspection, protocol decoding, and ML behavioral modeling to flag anomalous patterns — unexpected external connections, unusual transfer volumes, port scanning, lateral movement via SMB/RDP/WMI, DNS tunneling, and C2 beaconing even over HTTPS (analyzing connection timing and size, not payload).",
        "Two structural points shape how NDR is used:\n- Integrating NDR with EDR and SIEM data creates the XDR (Extended Detection and Response) model — correlating network, endpoint, and identity signals for higher-confidence detections — and NDR is especially valuable for threats that bypass endpoint controls: supply-chain implants, firmware-level malware, and cloud-hosted C2 using legitimate services.\n- Deployment varies by topology: physical data centers connect NDR sensors to network taps or SPAN ports on core switches; cloud environments use VPC flow logs (AWS, Azure NSG, GCP) providing source/destination IP, port, protocol, and byte counts (enough for behavioral analysis without full capture); and hybrid organizations need both, with a unified platform aggregating on-prem packet data and cloud flow logs into one behavioral model.",
        "Two capabilities make NDR more than flow monitoring:\n- Protocol decoding — where a NetFlow record says host A sent 2GB to host B on port 445, NDR decodes the SMB protocol to reveal a ransomware encryption sweep across 847 files, and protocol fingerprints catch specific tools (Cobalt Strike beacons by their distinctive TLS handshake / JA3 fingerprint, Mimikatz by patterns in Kerberos tickets, RDP scanning by its handshake sequence).\n- East-west monitoring — NDR's most critical capability for lateral movement, since perimeter firewalls see only north-south traffic while attackers move laterally on east-west paths that never touch the perimeter, so sensors at internal aggregation points (core switches, data center fabric) observe the reconnaissance scanning, credential relay, and remote execution of the lateral-movement phase.",
        "Auditing an NDR program examines coverage, accuracy, latency, integration, and storage:\n- Sensor coverage (what percentage of segments have visibility), protocol-decode coverage (which application-layer protocols are decoded beyond raw flow), false-positive rate per detection category, detection latency (packet to alert), and SIEM/EDR integration for correlated incidents.\n- Organizations often underestimate full-packet-capture storage — a 10Gbps link generates ~10TB per day — so most programs use tiered storage: full PCAP for 24–72 hours, metadata/flow records for 30–90 days.",
      ],
      technical: {
        title: "C2 Beaconing Detection",
        body: [
          "C2 detection turns on the rhythm of malware check-ins, even when encrypted:\n- C2 malware contacts its operator on a schedule — typically every 30–300 seconds with small check-in packets — creating a distinctive beaconing pattern in NetFlow: high-frequency connections to a single external IP with consistent inter-arrival times and small, uniform payloads, detected via Fourier analysis of connection timing and clustering of flow-size distributions.\n- Encrypted C2 (HTTPS, DNS-over-HTTPS) can't be decrypted by passive NDR, but TLS metadata — certificate fields, handshake timing, JA3 fingerprints, connection frequency — gives enough signal to classify, since a legitimate CDN connection behaves differently from a C2 channel on the same port.",
          "The stage's script detects beaconing from raw NetFlow records:\n- `detect_beaconing` groups flows by the three-tuple (`src_ip`, `dst_ip`, `dst_port`) — a channel's fingerprint — sorts timestamps, and computes inter-arrival intervals with NumPy's `diff`, the key metric being the coefficient of variation (CV): a human browsing has highly variable timing (CV >> 1.0) while a 90-second beacon has near-zero CV, so the regularity score is `1 - min(CV, 1.0)` (1.0 perfectly regular and most suspicious, 0.0 irregular and normal).\n- Two thresholds must both hold to flag a beacon — regularity ≥ 0.85 and mean interval < 300 seconds — with a 10-sample minimum to avoid false positives from short bursts; in the CTF the beacon is a 90-second interval at regularity 0.97 (software-driven, not human browsing), and production extends it with JA3 lookups against a known-malicious database, threat-intel on the destination IP, and OCSF-formatted pushes to the SIEM.",
          "NDR integration follows the detect-enrich-respond pattern:\n- When the beaconing detector fires, the platform queries the threat-intelligence platform for the destination IP (via TAXII/STIX), the asset inventory for the source host's owner and criticality, and the EDR for the last 24 hours of endpoint alerts on that host, packaging the combined context into a SIEM alert.\n- The SOAR platform then runs a playbook that pulls full PCAP for the connection, preserves the evidence in an immutable S3 bucket for forensics, and routes the alert to the appropriate SOC tier by host criticality.",
          "An MCP server — `mcp-ndr-analyst` — exposes network detection to AI assistants, with credentials kept out of the model:\n- It would expose tools like `query_flow_data`, `run_beacon_scan`, `get_ja3_verdict`, `get_host_network_profile`, and `get_pcap_summary`, so an incident responder could tell Claude 'analyze all outbound connections from 10.0.1.55 in the last 6 hours for C2 beaconing,' chaining a beacon scan, JA3 verdicts, and PCAP summaries into a structured threat assessment with confidence levels and recommended containment.\n- A production `run_beacon_scan` (built with fastmcp) takes `src_ip`, `time_window_hours`, `min_connections`, and `regularity_threshold`, queries the NDR REST API, runs the algorithm, performs JA3 lookups for HTTPS connections, and returns candidates sorted by confidence — authenticating with an API key from the server's secret manager (never exposed to the model) and logging every call to an immutable audit trail with session ID, timestamp, and parameters.",
        ],
        codeExample: {
          label: "Beaconing detection from NetFlow records (Python)",
          code: `import numpy as np
from collections import defaultdict
from datetime import datetime

def detect_beaconing(flows: list[dict], threshold_regularity: float = 0.85) -> list[dict]:
    """Detect C2 beaconing: regular, high-frequency connections to a single external IP."""
    # Group flows by (src_ip, dst_ip, dst_port)
    sessions: dict[tuple, list[float]] = defaultdict(list)
    for flow in flows:
        key = (flow["src_ip"], flow["dst_ip"], flow["dst_port"])
        sessions[key].append(datetime.fromisoformat(flow["timestamp"]).timestamp())

    beacons = []
    for (src, dst, port), timestamps in sessions.items():
        if len(timestamps) < 10:
            continue  # need enough samples for statistical significance
        timestamps.sort()
        intervals = np.diff(timestamps)

        # Regularity: coefficient of variation (low = regular = suspicious)
        cv = np.std(intervals) / np.mean(intervals) if np.mean(intervals) > 0 else 1.0
        regularity = 1.0 - min(cv, 1.0)

        if regularity >= threshold_regularity and np.mean(intervals) < 300:
            beacons.append({
                "src": src, "dst": dst, "port": port,
                "connections": len(timestamps),
                "avg_interval_sec": round(np.mean(intervals), 1),
                "regularity_score": round(regularity, 3),
                "verdict": "C2_BEACON_SUSPECTED",
            })
    return beacons`,
        },
      },
      incident: {
        title: "Hafnium Exchange Server Attack — C2 Detection (2021)",
        when: "January–March 2021",
        where: "250,000+ on-premises Microsoft Exchange servers globally",
        impact: "Four zero-day vulnerabilities; nation-state espionage campaign attributed to China",
        body: [
          "The Hafnium group, attributed to Chinese state intelligence, exploited four Exchange Server zero-days (collectively ProxyLogon) to install web shells and establish persistent access across 250,000 servers globally:\n- The attack began in January 2021 and was publicly disclosed in March, by which point tens of thousands of organizations were already compromised.\n- The initial vector — HTTPS requests to Exchange's Outlook Web Access interface — was indistinguishable from legitimate user traffic to any signature-based detection.",
          "The post-exploitation C2 technique is what makes this case instructive for NDR:\n- After installing web shells, Hafnium established C2 over HTTPS to attacker infrastructure, traffic that appeared to originate from the Exchange server itself — like an outbound web request from a mail server.\n- This violated a fundamental behavioral norm: Exchange servers are destinations for HTTPS, not sources, so NDR platforms with established baselines for Exchange's legitimate external contacts and volumes flagged the anomalous outbound HTTPS immediately.",
          "Organizations with NDR detected the compromise through three behavioral signals:\n- Exchange servers initiating HTTPS POST requests to external IPs (a server-role violation), connections to recently-registered domains with fresh TLS certificates (freshly-spun attacker infrastructure), and regular timing patterns inconsistent with user-driven mail traffic.\n- Each is invisible to perimeter firewalls (HTTPS on 443 is allowed) and to endpoint agents on systems the attacker hadn't reached beyond Exchange, but clearly visible to NDR monitoring east-west and north-south traffic from the Exchange servers.",
          "The timeline asymmetry is the operational value of NDR, and Hafnium reshaped NDR coverage:\n- Microsoft patched on March 2, 2021, and organizations whose NDR caught the anomalous Exchange behavior before public disclosure had a window to isolate servers and preserve evidence ahead of the broader exploitation wave, while those without NDR found out only when Microsoft published IoCs — by which point web shells had been in place for weeks and data was already exfiltrated.\n- The industry response expanded NDR to explicitly baseline server-to-external behavior (mail, web, and file servers initiating unexpected external connections are now equally important detection targets), with vendors adding specific Hafnium/ProxyLogon modules and Exchange protocol decoders (MAPI, OWA, EWS).",
        ],
      },
      diagram: {
        nodes: [
          { label: "Network Tap / Mirror", sub: "passive traffic capture", type: "attacker" },
          { label: "Protocol Decode + DPI", sub: "application layer visibility", type: "system" },
          { label: "Behavioral ML Engine", sub: "flow baselining + anomaly", type: "victim" },
          { label: "NDR Alert + PCAP", sub: "evidence-ready detection", type: "result" },
        ],
      },
      timeline: [
        { year: 2016, event: "Gartner defines NTA (Network Traffic Analysis) category" },
        { year: 2019, event: "Gartner renames NTA to NDR — response capabilities emphasized", highlight: true },
        { year: 2021, event: "Hafnium Exchange attacks — NDR behavioral detection proves value vs zero-days" },
        { year: 2022, event: "Cloud NDR emerges — VPC flow log analysis replaces on-prem packet capture" },
        { year: 2024, event: "NDR + LLM integration — natural language network forensics queries" },
      ],
      keyTakeaways: [
        "NDR observes all network traffic passively — no agent required on monitored devices",
        "C2 beaconing is detectable by timing regularity even in encrypted channels",
        "Servers initiating unexpected outbound connections is a high-fidelity behavioral anomaly",
        "JA3/JA3S TLS fingerprints identify malware families even without decryption",
        "NDR fills the visibility gap for IoT, OT, and unmanaged endpoints that can't run EDR",
        "East-west traffic monitoring is NDR's most critical capability — lateral movement never touches the perimeter",
        "Full PCAP retention at 10Gbps generates ~10TB/day — tiered storage (PCAP 72h, flows 90d) is standard",
        "Protocol decode enables attack tool identification — Cobalt Strike, Mimikatz, and ransomware all have protocol fingerprints",
        "Cloud NDR uses VPC flow logs — provides behavioral analysis without physical packet capture infrastructure",
        "MCP servers (mcp-ndr-analyst) expose network detection to AI assistants for automated C2 and lateral movement analysis",
      ],
      references: [
        { title: "CISA Hafnium Advisory AA21-062A", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-062a" },
        { title: "Corelight NDR Open Source Tools", url: "https://corelight.com/resources/zeek-bro" },
        { title: "Vectra AI NDR Platform", url: "https://www.vectra.ai/products/platform" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm04-q1", type: "Core Idea", challenge: "See encrypted C2.", text: "Can NDR detect C2 beaconing in encrypted HTTPS without decrypting it?", options: ["Yes — via connection timing and payload-size patterns","No — decryption is required","Only on weekends","Only for plaintext"], correctIndex: 0, explanation: "Beaconing has rhythmic timing/size patterns visible without decryption." },
        { id: "audit-cm04-q2", type: "No Agent", challenge: "IoT and OT.", text: "Why is NDR uniquely valuable for IoT/OT devices?", options: ["It passively observes network traffic with no agent on the device","It decrypts all TLS","It installs on every device","It only watches servers"], correctIndex: 0, explanation: "Agentless observation covers devices that can't run EDR agents." },
        { id: "audit-cm04-q3", type: "Real Incident", challenge: "Hafnium / Exchange.", text: "What anomaly did NDR-equipped orgs catch in the Hafnium Exchange attack?", options: ["Exchange servers initiating unexpected outbound external connections","Malformed packets matching a signature","A failed login","High CPU"], correctIndex: 0, explanation: "Servers deviating from their expected network role is a behavioral tell." },
        { id: "audit-cm04-q4", type: "JA3", challenge: "Fingerprint the handshake.", text: "What can JA3 TLS fingerprints do even on encrypted traffic?", options: ["Identify specific malware families by their TLS handshake signature","Decrypt the payload","Read the password","Block all TLS"], correctIndex: 0, explanation: "JA3 identifies C2/malware by handshake characteristics without decryption." },
        { id: "audit-cm04-q5", type: "Baseline", challenge: "Role-based normal.", text: "A web server making large unexpected outbound HTTPS connections is…", options: ["Abnormal — a deviation from its expected role","Perfectly normal","Required for backups","Impossible"], correctIndex: 0, explanation: "NDR baselines each device's role and flags deviations." },
        { id: "audit-cm04-q6", type: "EDR vs NDR", challenge: "Different coverage.", text: "NDR complements EDR by…", options: ["Covering unmanaged/agentless devices EDR can't reach","Replacing all endpoints","Decrypting everything","Ignoring the network"], correctIndex: 0, explanation: "NDR sees the network; EDR sees the endpoint — together they cover more." },
        { id: "audit-cm04-q7", type: "Concept", challenge: "Behavior on the wire.", text: "NDR detects threats primarily by…", options: ["Analyzing traffic behavior (timing, volume, peers) rather than payloads","Reading file contents","Checking passwords","Scanning USB drives"], correctIndex: 0, explanation: "Network behavior reveals C2 and lateral movement without decryption." },
        { id: "audit-cm04-q8", type: "Defense", challenge: "Encrypted blind spot.", text: "NDR matters because increasingly…", options: ["Malicious traffic is encrypted, so behavioral analysis beats payload inspection","All traffic is plaintext","Networks no longer exist","Payloads are always readable"], correctIndex: 0, explanation: "With pervasive encryption, behavior is the visible signal." },
      ],
    },
    ctf: {
      scenario: "You've accessed an NDR sensor's forensic data store. Three files document a suspected C2 beaconing incident — the NetFlow data, the TLS fingerprint analysis, and the incident verdict. Read each to collect the flag.",
      hint: "The NDR stores raw flows, TLS analysis, and verdicts in separate directories.",
      hints: [
        "Navigate to /ndr-sensor and list the subdirectories.",
        "Read flows/, tls/, and verdict/ in that order.",
        "Each file contains a flag_fragment field.",
      ],
      files: {
        "/ndr-sensor/flows/beacon-flows.jsonl": `{"ts":"2024-01-15T02:00:11Z","src":"10.0.1.55","dst":"185.220.101.45","dport":443,"bytes":412,"proto":"tcp","flag_fragment":"FLAG{NDR_"}
{"ts":"2024-01-15T02:01:41Z","src":"10.0.1.55","dst":"185.220.101.45","dport":443,"bytes":408,"proto":"tcp"}
{"ts":"2024-01-15T02:03:11Z","src":"10.0.1.55","dst":"185.220.101.45","dport":443,"bytes":415,"proto":"tcp"}
{"ts":"2024-01-15T02:04:41Z","src":"10.0.1.55","dst":"185.220.101.45","dport":443,"bytes":411,"proto":"tcp"}
# Pattern: 90-second interval, ~411 byte average, regularity_score=0.97 → C2_BEACON_SUSPECTED`,
        "/ndr-sensor/tls/ja3-analysis.json": `{
  "connection": "10.0.1.55 → 185.220.101.45:443",
  "ja3_fingerprint": "e7d705a3286e19ea42f587b344ee6865",
  "ja3_match": "CobaltStrike Beacon (CrowdStrike JA3 DB)",
  "cert_cn": "*.cloudservices-microsoft-cdn.net",
  "cert_issued": "2024-01-14T00:00:00Z",
  "cert_issuer": "Let's Encrypt (1-day-old cert — suspicious)",
  "sni_mismatch": true,
  "verdict": "MALICIOUS_TLS",
  "flag_fragment": "B34C0N_"
}`,
        "/ndr-sensor/verdict/incident-report.txt": `# NDR Incident Report — IR-2024-0115-007

Detection: C2 Beaconing (CobaltStrike Beacon)
Source host: 10.0.1.55 (workstation-chen.corp.internal)
C2 server: 185.220.101.45 (Frantech Solutions, NL)
Duration: 6h 22m
Beacon interval: ~90 seconds (regularity: 0.97)
Total connections: 254
Total bytes out: 104,348

JA3 match: CobaltStrike Beacon (confirmed)
TLS cert: 1-day-old Let's Encrypt wildcard — typosquatting Microsoft CDN

Recommended action: Isolate workstation-chen immediately.
Escalation: IR team notified at 08:14 UTC.

flag_fragment: C4PT4IN_HOOK}"`,
        "/ndr-sensor/README.md": `# NDR Forensic Sensor — Case IR-2024-0115-007

Evidence directories:
  flows/   → Raw NetFlow records (JSONL format)
  tls/     → TLS metadata and JA3 fingerprint analysis
  verdict/ → Analyst incident report and verdict

Do not modify. Chain of custody preserved.`,
      },
      dirs: {
        "/": [{ name: "ndr-sensor", isDir: true }],
        "/ndr-sensor": [
          { name: "README.md", isDir: false },
          { name: "flows", isDir: true },
          { name: "tls", isDir: true },
          { name: "verdict", isDir: true },
        ],
        "/ndr-sensor/flows": [{ name: "beacon-flows.jsonl", isDir: false }],
        "/ndr-sensor/tls": [{ name: "ja3-analysis.json", isDir: false }],
        "/ndr-sensor/verdict": [{ name: "incident-report.txt", isDir: false }],
      },
      fragments: [
        { trigger: "/ndr-sensor/flows/beacon-flows.jsonl", value: "FLAG{NDR_", label: "Fragment A — Flows" },
        { trigger: "/ndr-sensor/tls/ja3-analysis.json", value: "B34C0N_", label: "Fragment B — TLS" },
        { trigger: "/ndr-sensor/verdict/incident-report.txt", value: "C4PT4IN_HOOK}", label: "Fragment C — Verdict" },
      ],
    },
  },

  // ─── audit-cm05: CSPM ────────────────────────────────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "AWS Security Operations Center", location: "Seattle, Washington", era: "Present Day", emoji: "☁️" },
    id: "audit-cm05",
    order: 5,
    title: "The Cloud Watchman",
    subtitle: "CSPM — Cloud Security Posture Management",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "audit-cm-badge-05", name: "Cloud Auditor", emoji: "☁️" },
    easeScore: 8,
    valueScore: 9,
    rank: 1,
    challengeType: "ctf",
    info: {
      tagline: "Misconfiguration is the #1 cloud breach vector. CSPM finds it before attackers do.",
      year: 2019,
      overview: [
        "Cloud Security Posture Management (CSPM) continuously monitors cloud infrastructure configurations against security benchmarks — CIS AWS Foundations, NIST 800-53, PCI-DSS, SOC 2 — and flags deviations in real time:\n- Where traditional vulnerability management targets software flaws, CSPM targets configuration errors: public S3 buckets, over-permissive IAM roles, unencrypted databases, security groups open to `0.0.0.0/0`.\n- Platforms (Wiz, Prisma Cloud, Orca Security, AWS Security Hub, Microsoft Defender for Cloud) use cloud provider APIs — not agents — to inventory all resources and configurations, an agentless approach covering serverless functions, managed databases, container registries, and cloud-native services that can't run endpoint agents.",
        "Modern CSPM works by polling and reasoning about chains, not just single resources:\n- It has evolved beyond single-resource checks to attack path analysis — modeling how an attacker could chain misconfigurations (a public EC2 instance with an over-permissive IAM role that can read an S3 bucket of customer PII) to reach sensitive resources — and prioritizes the paths that matter most.\n- Operationally it polls cloud provider APIs continuously (typically every 5–15 minutes), compares returned configurations against a library of checks each mapped to a control (CIS AWS 2.1.5 for S3 public-access block, CIS AWS 1.16 for IAM policies without full admin, NIST 800-53 SC-28 for encryption at rest), and on a failure creates a finding with severity, remediation guidance, and the exact API call or console action to fix it.",
        "Two framings explain CSPM's place in cloud security:\n- The shared responsibility model is its conceptual foundation — providers secure the infrastructure (data centers, hypervisors, managed-service availability) while customers own everything they configure on top (IAM policies, security group rules, encryption, network access), and CSPM is the automated mechanism for continuously verifying customers fulfill their half, not just at audit time.\n- CSPM has expanded into the CNAPP (Cloud-Native Application Protection Platform) category, merging CSPM (infrastructure configuration) with CWPP (runtime workload protection for containers and VMs), CIEM (fine-grained IAM entitlement analysis), and secrets scanning, as Wiz, Orca, and Prisma Cloud all grew to the full scope — reflecting that cloud security needs visibility across the whole stack, not just configuration.",
        "Auditing a CSPM program examines coverage, speed, and the paths that matter:\n- Resource coverage (what percentage of resources are inventoried and checked), benchmark coverage (which frameworks are actively enforced), remediation SLA (critical within 24h, high within 7d typically), and suppression rate (findings suppressed as accepted risk versus remediated — a high rate signals control erosion).\n- The most operationally meaningful metric is attack-path count — how many critical multi-hop paths exist from internet-facing resources to sensitive data — since a single unresolved critical attack path represents a potential Capital One-scale breach.",
      ],
      technical: {
        title: "Attack Path Analysis",
        body: [
          "Attack path analysis models cloud infrastructure as a directed graph and computes blast radius:\n- Nodes are resources (EC2 instances, IAM roles, S3 buckets, RDS databases) and edges are access relationships (role assumption, bucket policy grants, security group rules), so an attacker starting from a public EC2 instance traverses by assuming attached IAM roles and following their permissions.\n- CSPM computes each misconfiguration's blast radius — if EC2 instance X is compromised, what's reachable via its roles, instance profiles, and network paths — and resources reachable within two hops of a public-facing resource are elevated priority regardless of their individual severity.",
          "The stage's script implements two CSPM checks with boto3:\n- `audit_s3_buckets` iterates all buckets and checks two things — whether `PublicAccessBlock` is fully enabled (all four of `BlockPublicAcls`, `IgnorePublicAcls`, `BlockPublicPolicy`, `RestrictPublicBuckets` must be True) and whether a bucket lacks the configuration entirely (so it may default to public via ACL and bucket policy) — yielding findings as a generator to stream to a dashboard or database without loading hundreds of buckets into memory.\n- `audit_iam_policies` paginates customer-managed policies (`Scope='Local'` excludes AWS-managed ones), retrieves each default version, and scans statements for the most dangerous policy — `Effect=Allow, Action=*, Resource=*`, complete account control, the exact misconfiguration behind Capital One's lateral movement — with production extending to per-service wildcards (`iam:*`, `s3:*`), policies without conditions, and overly permissive cross-account trusts.",
          "Enterprise CSPM runs a findings-to-ticketing pipeline that closes the loop:\n- Findings push via webhook to a SIEM (Splunk, Sentinel) as security events, then to a SOAR platform that creates a Jira or ServiceNow ticket with the specific remediation command, assigns it to the cloud-team owner via an Owner-tag lookup, and tracks SLA compliance.\n- When the resource is remediated the CSPM re-scans and auto-closes the ticket, and unresolved critical findings after 24 hours escalate to the CISO dashboard — turning CSPM from a reporting tool into a risk-management system.",
          "An MCP server — `mcp-cspm-auditor` — exposes cloud posture data to AI assistants, read-only and account-scoped:\n- It would expose tools like `get_misconfig_findings`, `get_attack_paths`, `run_resource_check`, `get_blast_radius`, and `generate_remediation_script`, so a cloud auditor could ask Claude 'show me all critical attack paths from internet-facing resources to S3 buckets containing PII in production,' getting a structured finding with remediation priority in place of a 2–3 hour manual Wiz review.\n- A production `get_attack_paths` authenticates to the CSPM API with a read-only service account, queries paths with `severity=CRITICAL` and `destination_type=S3_BUCKET` filtered to buckets tagged `DataClassification=PII`/`Confidential`, and returns path ID, start and end resources, hop count, each hop's resource type and access vector, and estimated remediation effort — enforcing account-level scoping (the AI sees only explicitly granted accounts) and logging every call to an immutable CloudTrail-based audit log.",
        ],
        codeExample: {
          label: "CSPM posture check — public S3 bucket and over-permissive IAM (Python / boto3)",
          code: `import boto3
import json
from typing import Generator

def audit_s3_buckets(s3_client) -> Generator[dict, None, None]:
    buckets = s3_client.list_buckets()["Buckets"]
    for bucket in buckets:
        name = bucket["Name"]
        # Check public access block
        try:
            pab = s3_client.get_public_access_block(Bucket=name)
            config = pab["PublicAccessBlockConfiguration"]
            if not all(config.values()):
                yield {
                    "resource": f"s3://{name}",
                    "finding": "PublicAccessBlock not fully enabled",
                    "severity": "HIGH",
                    "cis_control": "CIS AWS 2.1.5",
                    "remediation": f"aws s3api put-public-access-block --bucket {name} --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true",
                }
        except s3_client.exceptions.NoSuchPublicAccessBlockConfiguration:
            yield {
                "resource": f"s3://{name}",
                "finding": "No PublicAccessBlock configuration — bucket may be public",
                "severity": "CRITICAL",
                "cis_control": "CIS AWS 2.1.5",
            }

def audit_iam_policies(iam_client) -> Generator[dict, None, None]:
    paginator = iam_client.get_paginator("list_policies")
    for page in paginator.paginate(Scope="Local"):
        for policy in page["Policies"]:
            version = iam_client.get_policy_version(
                PolicyArn=policy["Arn"],
                VersionId=policy["DefaultVersionId"]
            )["PolicyVersion"]["Document"]
            for stmt in version.get("Statement", []):
                if stmt.get("Effect") == "Allow" and stmt.get("Action") == "*" and stmt.get("Resource") == "*":
                    yield {
                        "resource": policy["Arn"],
                        "finding": "Policy grants Action:* Resource:* — violates least privilege",
                        "severity": "CRITICAL",
                        "cis_control": "CIS AWS 1.16",
                    }`,
        },
      },
      incident: {
        title: "Capital One S3 Misconfiguration — SSRF + CSPM Miss (2019)",
        when: "March–July 2019",
        where: "AWS US-East-1",
        impact: "106 million customer records; $190M settlement; SSRF via misconfigured WAF",
        body: [
          "The Capital One breach combined two failures into one attack chain:\n- A misconfigured WAF allowed Server-Side Request Forgery (SSRF) to the EC2 instance metadata service (`169.254.169.254`), which leaked temporary IAM credentials.\n- An over-permissive IAM role on the WAF's EC2 instance let the attacker — Paige Thompson, a former AWS engineer — list and download content from over 700 S3 buckets, exploiting it within minutes of discovery, since manual review of IAM permissions across 700+ buckets was impractical without automation.",
          "A CSPM system continuously checking IAM role permissions and S3 access policies would have flagged the role immediately on deployment:\n- The finding: IAM role 'capitalone-WAF-role' grants `s3:ListAllMyBuckets` and `s3:GetObject` on `Resource: '*'` — all buckets — attached to an internet-facing EC2 instance.\n- That's a textbook CIS AWS 1.16 violation (no IAM policies with full administrative privileges) and a CRITICAL finding requiring remediation within 24 hours under standard SLA.",
          "Post-breach, Capital One implemented Wiz, whose attack path analysis would have identified the exact chain:\n- SSRF-vulnerable EC2 instance (internet-accessible) → metadata service access (no IMDSv2 required) → IAM role credential retrieval → S3 ListBuckets + GetObject on all buckets — a three-hop path from internet to 106 million customer records, all through misconfigurations rather than software vulnerabilities.\n- It would have been flagged as a CRITICAL attack path the moment the WAF was deployed with the over-permissive role.",
          "The consequences made CSPM a regulatory expectation and ended the IMDSv1 era:\n- The OCC fined Capital One $80M for inadequate cloud security risk management, the FTC settlement added $190M, and the SEC required disclosure within four business days — establishing that CSPM isn't optional for cloud-operating financial institutions, with Basel III operational risk and OCC guidelines now explicitly referencing continuous cloud security monitoring.\n- The broader lesson was mandatory EC2 IMDSv2, which requires a session token for metadata requests and blocks SSRF access to the metadata service; AWS made it the default for new instances in 2020, CSPM now checks IMDSv2 enforcement as a standard control, and the combined Capital One + Twitter SSRF incidents of 2019–2020 effectively ended IMDSv1 in production.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Cloud APIs", sub: "AWS / Azure / GCP agentless", type: "attacker" },
          { label: "Resource Inventory", sub: "all resources + configs", type: "system" },
          { label: "Benchmark + Attack Path", sub: "CIS / NIST + graph analysis", type: "victim" },
          { label: "Prioritized Findings", sub: "severity + blast radius", type: "result" },
        ],
      },
      timeline: [
        { year: 2018, event: "Gartner defines CSPM category — cloud config monitoring formalized" },
        { year: 2019, event: "Capital One breach — S3 misconfiguration + over-permissive IAM exposes 106M records", highlight: true },
        { year: 2021, event: "Wiz raises $250M — CSPM becomes critical enterprise security category" },
        { year: 2022, event: "Attack path analysis becomes CSPM standard — graph-based risk modeling" },
        { year: 2024, event: "CNAPP (Cloud-Native Application Protection Platform) merges CSPM + CWPP + CIEM" },
      ],
      keyTakeaways: [
        "Misconfiguration causes 80%+ of cloud breaches — CSPM catches it before attackers do",
        "Agentless API-based scanning provides complete cloud coverage including serverless and PaaS",
        "Attack path analysis reveals which misconfigs enable data breach chains — prioritize those first",
        "CIS Benchmarks and NIST 800-53 provide the compliance control library for CSPM checks",
        "CNAPP extends CSPM to include container security, secrets scanning, and runtime protection",
        "The cloud shared responsibility model means customers own configuration security — CSPM automates verification of that responsibility",
        "IMDSv2 enforcement is now a standard CSPM check following the Capital One SSRF class of attacks",
        "CSPM findings must feed a ticketing pipeline with SLA tracking — critical findings unresolved after 24h escalate to CISO",
        "Blast radius calculation determines which misconfigs represent genuine breach risks vs theoretical concerns",
        "MCP servers (mcp-cspm-auditor) expose attack path data to AI auditors, replacing 2-3 hour manual Wiz review sessions",
      ],
      references: [
        { title: "CIS AWS Foundations Benchmark", url: "https://www.cisecurity.org/benchmark/amazon_web_services" },
        { title: "Capital One OCC Settlement", url: "https://www.occ.gov/news-issuances/news-releases/2020/nr-occ-2020-97.html" },
        { title: "Wiz Attack Path Analysis", url: "https://www.wiz.io/blog/attack-paths" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm05-q1", type: "Core Idea", challenge: "No agents.", text: "Does CSPM require an agent on every cloud resource?", options: ["No — it audits configuration via the cloud provider's APIs","Yes, one per resource","Only on EC2","Only for databases"], correctIndex: 0, explanation: "CSPM is agentless, reading config through provider APIs." },
        { id: "audit-cm05-q2", type: "Attack Path", challenge: "Chain the misconfigs.", text: "What does CSPM attack-path analysis model that single-resource checks can't?", options: ["How chained misconfigurations let an attacker reach sensitive data","Whether one resource meets a CIS control","The cloud bill","Server uptime"], correctIndex: 0, explanation: "Graph-based analysis finds multi-step paths to sensitive data." },
        { id: "audit-cm05-q3", type: "Highest Severity", challenge: "Rank the finding.", text: "Which would CSPM flag as the most severe?", options: ["A public EC2 with an IAM role granting Action:* Resource:* to all S3","An S3 bucket missing server-side encryption","A missing tag","A non-recommended TLS version"], correctIndex: 0, explanation: "Internet-facing + full S3 access is a complete data-exposure path." },
        { id: "audit-cm05-q4", type: "Real Incident", challenge: "Capital One.", text: "Was the Capital One breach caused by a software vulnerability or a misconfiguration?", options: ["A misconfiguration (WAF + over-permissive IAM)","A software vulnerability in a cloud service","A physical break-in","A supply-chain implant"], correctIndex: 0, explanation: "It was a misconfiguration chain — exactly what CSPM attack-path analysis catches." },
        { id: "audit-cm05-q5", type: "Evolution", challenge: "Beyond checklists.", text: "How has CSPM evolved?", options: ["From per-resource config checks to graph-based attack-path analysis","From graphs back to manual review","It hasn't changed","Into a VPN"], correctIndex: 0, explanation: "Modern CSPM reasons about chains, not just isolated resources." },
        { id: "audit-cm05-q6", type: "Concept", challenge: "Context matters.", text: "Why is attack-path context more useful than a flat findings list?", options: ["It prioritizes the misconfigs that actually combine to expose data","It's prettier","It has more rows","It ignores severity"], correctIndex: 0, explanation: "Path context shows which findings truly matter together." },
        { id: "audit-cm05-q7", type: "Continuous", challenge: "Always watching.", text: "CSPM provides value as a…", options: ["Continuous monitor of cloud config and attack paths","One-time scan","Manual checklist","Annual review"], correctIndex: 0, explanation: "Continuous CSPM catches misconfig and new paths as they appear." },
        { id: "audit-cm05-q8", type: "Defense", challenge: "Break the chain.", text: "To reduce CSPM-identified risk, you should…", options: ["Fix the misconfigurations that form the path to sensitive data first","Add more public buckets","Disable logging","Ignore high-severity paths"], correctIndex: 0, explanation: "Breaking the chain to sensitive data is the highest-leverage fix." },
      ],
    },
    ctf: {
      scenario: "A CSPM scan found critical misconfigurations in a cloud environment. The findings are split across three reports: S3 posture, IAM posture, and the attack path analysis. Read each to reconstruct the flag.",
      hint: "The CSPM stored findings in s3-report/, iam-report/, and attack-path/ directories.",
      hints: [
        "List /cspm-findings to see the report directories.",
        "Each report file contains a flag_fragment field among the findings.",
        "Read all three reports in order to assemble the flag.",
      ],
      files: {
        "/cspm-findings/s3-report/s3-posture.json": `{
  "scan_time": "2024-01-15T06:00:00Z",
  "benchmark": "CIS AWS Foundations Benchmark v3.0",
  "findings": [
    {
      "resource": "s3://corp-customer-data-prod",
      "control": "CIS AWS 2.1.5",
      "severity": "CRITICAL",
      "finding": "PublicAccessBlock not enabled — bucket is publicly listable",
      "object_count": 2847392,
      "estimated_records": "106M customer records"
    },
    {
      "resource": "s3://corp-backups-2019",
      "control": "CIS AWS 2.1.2",
      "severity": "HIGH",
      "finding": "Server-side encryption not enabled"
    }
  ],
  "critical_count": 1,
  "high_count": 4,
  "flag_fragment": "FLAG{C5PM_"
}`,
        "/cspm-findings/iam-report/iam-posture.json": `{
  "scan_time": "2024-01-15T06:00:00Z",
  "benchmark": "CIS AWS Foundations Benchmark v3.0",
  "findings": [
    {
      "resource": "arn:aws:iam::123456789012:role/ec2-web-role",
      "control": "CIS AWS 1.16",
      "severity": "CRITICAL",
      "finding": "IAM role allows Action:* Resource:* — full AWS access",
      "attached_to": "ec2-web-prod (internet-facing)",
      "blast_radius": "ALL AWS RESOURCES IN ACCOUNT"
    },
    {
      "resource": "arn:aws:iam::123456789012:user/svc-deploy",
      "control": "CIS AWS 1.11",
      "severity": "HIGH",
      "finding": "Access key age: 847 days (> 90 day rotation policy)"
    }
  ],
  "critical_count": 1,
  "high_count": 3,
  "flag_fragment": "M15C0NF1G_"
}`,
        "/cspm-findings/attack-path/critical-path.json": `{
  "path_id": "AP-2024-001",
  "severity": "CRITICAL",
  "title": "Internet to customer PII — 3 hop attack path",
  "steps": [
    {"hop": 1, "resource": "ec2-web-prod", "vector": "SSRF via misconfigured WAF", "access": "EC2 metadata service"},
    {"hop": 2, "resource": "ec2-web-role", "vector": "IAM role credentials from metadata", "access": "Action:* Resource:*"},
    {"hop": 3, "resource": "s3://corp-customer-data-prod", "vector": "s3:ListBucket + s3:GetObject", "access": "106M customer records"}
  ],
  "remediation_priority": 1,
  "estimated_breach_impact": "$190M+ (Capital One precedent)",
  "flag_fragment": "4TT4CK_P4TH}"
}`,
        "/cspm-findings/README.md": `# CSPM Scan Results — 2024-01-15

Environment: AWS Production Account 123456789012
Scanner: Wiz CSPM v4.2
Benchmark: CIS AWS Foundations Benchmark v3.0 + NIST 800-53

Reports:
  s3-report/     → S3 bucket posture findings
  iam-report/    → IAM role and user policy findings
  attack-path/   → Critical attack path analysis

Total findings: 47 (3 CRITICAL, 11 HIGH, 33 MEDIUM/LOW)`,
      },
      dirs: {
        "/": [{ name: "cspm-findings", isDir: true }],
        "/cspm-findings": [
          { name: "README.md", isDir: false },
          { name: "s3-report", isDir: true },
          { name: "iam-report", isDir: true },
          { name: "attack-path", isDir: true },
        ],
        "/cspm-findings/s3-report": [{ name: "s3-posture.json", isDir: false }],
        "/cspm-findings/iam-report": [{ name: "iam-posture.json", isDir: false }],
        "/cspm-findings/attack-path": [{ name: "critical-path.json", isDir: false }],
      },
      fragments: [
        { trigger: "/cspm-findings/s3-report/s3-posture.json", value: "FLAG{C5PM_", label: "Fragment A — S3 Posture" },
        { trigger: "/cspm-findings/iam-report/iam-posture.json", value: "M15C0NF1G_", label: "Fragment B — IAM Posture" },
        { trigger: "/cspm-findings/attack-path/critical-path.json", value: "4TT4CK_P4TH}", label: "Fragment C — Attack Path" },
      ],
    },
  },

  // ─── audit-cm06: Threat Intelligence Integration ─────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "FS-ISAC Threat Intelligence Hub", location: "Reston, Virginia", era: "Present Day", emoji: "🕵️" },
    id: "audit-cm06",
    order: 6,
    title: "The Intel Feed",
    subtitle: "Threat Intelligence Integration — STIX, TAXII, and indicator enrichment",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "audit-cm-badge-06", name: "Threat Intel Analyst", emoji: "🕵️" },
    easeScore: 7,
    valueScore: 8,
    rank: 6,
    challengeType: "ctf",
    info: {
      tagline: "Your network sees events. Threat intelligence tells you what they mean.",
      year: 2017,
      overview: [
        "Threat intelligence integration turns raw security events into contextualized findings by enriching indicators of compromise (IoCs) — IP addresses, domains, file hashes, URLs — with external knowledge about known attacker infrastructure, malware families, and threat-actor TTPs:\n- When an NDR platform detects a connection to IP 185.220.101.45, threat intelligence answers whether it's a known Tor exit node, whether it's attributed to a specific actor, and what sector that actor targets.\n- The STIX (Structured Threat Information eXpression) standard defines the data model — Indicators (IoC patterns), Threat Actors, Attack Patterns (MITRE ATT&CK TTPs), Campaigns, Malware, and their Relationships — and TAXII (Trusted Automated eXchange of Intelligence Information) is the transport protocol for sharing STIX content between organizations and platforms.",
        "Intelligence comes from tiered feeds, processed through a five-phase lifecycle:\n- Feeds span three tiers — open-source (CISA AIS, Abuse.ch, AlienVault OTX, Emerging Threats), commercial (CrowdStrike Intelligence, Mandiant, Recorded Future), and sector-specific ISACs (FS-ISAC finance, H-ISAC healthcare, E-ISAC energy) — and modern SIEM and NDR platforms consume STIX/TAXII feeds automatically, enriching every alert at ingest time.\n- The intelligence lifecycle runs collection (gathering raw data), processing (parsing to STIX, deduplicating), analysis (assessing confidence, relevance, attribution), dissemination (TAXII or platform APIs), and feedback (reporting whether intelligence led to detections to refine future collection) — and treating TI as a one-way feed misses the feedback loop that makes it operationally effective.",
        "Two operational layers keep intelligence high-quality:\n- A Threat Intelligence Platform (TIP — OpenCTI, MISP, ThreatConnect, Anomali) sits between raw feeds and operational tools, consuming feeds from many sources (potentially billions of raw IoCs), deduplicating and normalizing, applying confidence scoring and expiry management, tagging with sector and geographic context, and exposing a curated high-confidence TAXII endpoint — without it, feeding raw intelligence into a SIEM creates noise from low-quality or expired indicators.\n- Confidence scoring and indicator lifecycle management are critical: an IoC highly relevant six months ago (a campaign's C2 IP) may be useless today after the attacker moves infrastructure, so STIX Indicators' `valid_until` field must be respected (expired indicators are a primary cause of false positives), and confidence scores (0–100 in STIX 2.1) below 70 should be used for hunting and enrichment, not automated blocking.",
        "AI is transforming threat intelligence two ways:\n- LLMs parse unstructured threat reports (PDFs, blog posts, vendor advisories) and automatically extract STIX objects — work that previously took a skilled analyst 1–4 hours per report.\n- LLMs generate natural-language summaries of threat-actor TTPs for teams lacking dedicated intelligence analysts, so instead of reading a 40-page APT report, a SOC analyst gets a plain-language briefing on the actor's preferred initial-access techniques, typical dwell time, and known C2 infrastructure patterns.",
      ],
      technical: {
        title: "STIX/TAXII Integration Architecture",
        body: [
          "The architecture centers on a TAXII server fronted by a TIP:\n- A TAXII server exposes collections of STIX objects via a REST API that clients poll on a schedule (typically every 5–60 minutes), where STIX Indicators carry STIX Patterning Language expressions describing IoCs (`[ipv4-addr:value = '185.220.101.45']`, `[file:hashes.'SHA-256' = 'abc123...']`) that the SIEM's enrichment pipeline evaluates against normalized log data.\n- The TIP (OpenCTI, MISP, ThreatConnect, Anomali) is the aggregation layer — consuming many feeds, deduplicating, scoring confidence, and exposing a unified TAXII endpoint to the SOC's SIEM — preventing SIEM overload from raw feed volume (billions of IoCs) by pre-filtering to high-confidence, relevant indicators.",
          "The stage's script implements a TAXII 2.1 client and an enrichment function:\n- `fetch_threat_indicators` connects to a TAXII server (basic auth here; OAuth 2.0 or certificate auth preferred in production), accesses the first collection, pages through all Indicator objects via the `as_pages` helper, and extracts each one's STIX pattern, confidence, labels, and validity period into a clean list.\n- `enrich_alert` takes an alert's `src_ip` and the indicator list, finds any indicator whose pattern quotes that IP, applies a confidence filter (≥ 70) to keep low-quality indicators from elevating alerts, and on a match adds a `threat_intel_hits` array, boosts the risk score by the max matching confidence, and sets the verdict to MALICIOUS (≥90) or SUSPICIOUS (<90) — in production a SIEM enrichment rule or SOAR step running at ingest time rather than post-hoc.",
          "Enterprise integration enriches at ingest so context is already present when an analyst opens an alert:\n- The TAXII client runs every 15 minutes, pulling new indicators into a Redis cache with TTL equal to each indicator's `valid_until` duration, and the SIEM's enrichment pipeline queries Redis synchronously at log ingest for every observable (IP, domain, hash), adding threat-context fields to each event before indexing.\n- This enrichment-at-ingest means no manual lookup is needed when an analyst opens an alert, and expired indicators are automatically evicted by their TTL, preventing stale-indicator false positives.",
          "An MCP server — `mcp-tip-analyst` — exposes the TIP to AI assistants, but TI data is itself sensitive and needs strict controls:\n- It would expose tools like `lookup_indicator`, `get_actor_profile`, `search_campaign`, `enrich_incident`, and `get_feed_health`, so a threat hunter could ask Claude 'what do we know about the actor behind IP 185.220.101.45, and what other infrastructure is attributed to them?' and get a threat briefing with actionable hunting leads in under 2 minutes versus a 20–30 minute analyst task.\n- Because knowing which actors an organization tracks, its indicators, and its detection gaps would help an attacker evade detection, the server must enforce need-to-know access (SOC Tier 1 can look up indicators, only Tier 2+ can see actor profiles and campaign details), keep raw feed credentials and API keys away from the model, log all lookups for handling audits, and programmatically enforce any ISAC or bilateral sharing terms that restrict further dissemination.",
        ],
        codeExample: {
          label: "TAXII client — pull STIX indicators and enrich SIEM alerts (Python / taxii2-client)",
          code: `from taxii2client.v21 import Server, as_pages
from stix2 import Filter, MemoryStore
import json

def fetch_threat_indicators(taxii_url: str, api_root: str, collection_id: str) -> list[dict]:
    """Pull STIX Indicator objects from a TAXII 2.1 server."""
    server = Server(taxii_url, user="readonly", password="changeme")
    collection = server.api_roots[0].collections[0]

    indicators = []
    for bundle_page in as_pages(collection.get_objects, type="indicator", per_request=100):
        for obj in bundle_page.get("objects", []):
            if obj.get("type") == "indicator":
                indicators.append({
                    "id": obj["id"],
                    "pattern": obj["pattern"],
                    "confidence": obj.get("confidence", 50),
                    "labels": obj.get("labels", []),
                    "valid_until": obj.get("valid_until"),
                })
    return indicators

def enrich_alert(alert: dict, indicators: list[dict]) -> dict:
    """Check if alert's src_ip matches any STIX indicator."""
    src_ip = alert.get("src_ip", "")
    matches = [
        ind for ind in indicators
        if f"'{src_ip}'" in ind["pattern"] and ind["confidence"] >= 70
    ]
    if matches:
        alert["threat_intel_hits"] = matches
        alert["risk_boost"] = max(ind["confidence"] for ind in matches)
        alert["verdict"] = "MALICIOUS" if alert["risk_boost"] >= 90 else "SUSPICIOUS"
    return alert`,
        },
      },
      incident: {
        title: "Volt Typhoon — Living-off-the-Land C2 Intelligence Sharing (2023)",
        when: "May 2023 (public disclosure)",
        where: "US critical infrastructure — communications, energy, transportation",
        impact: "Chinese state actor pre-positioning in US critical infrastructure for potential wartime disruption",
        body: [
          "CISA, NSA, and Five Eyes partners (UK NCSC, Australia's ASD, New Zealand's GCSB, Canada's CCCS) jointly disclosed the Volt Typhoon campaign in May 2023 — a Chinese state actor living-off-the-land in US critical infrastructure for an estimated 5+ years:\n- Volt Typhoon used only built-in Windows tools (LOLBins: netsh, wmic, PowerShell, certutil) and legitimate network paths (compromised SOHO routers as proxy nodes), making signature-based detection completely ineffective.\n- It was detected through a combination of behavioral analytics at affected organizations and cross-agency threat-intelligence sharing.",
          "The disclosure shipped a comprehensive STIX 2.1 bundle that enabled retrospective detection:\n- It mapped Volt Typhoon TTPs to 30+ MITRE ATT&CK techniques, with C2 infrastructure IoCs (IP ranges for SOHO router proxies), YARA rules for the malware strains, and detection guidance including KQL queries for Microsoft Sentinel.\n- Organizations subscribed to CISA's AIS (Automated Indicator Sharing) TAXII feed received the indicators within hours and their SIEMs matched them against historical logs, in some cases finding prior Volt Typhoon activity that had been invisible before the intelligence became available.",
          "That retrospective detection capability is a key value proposition of threat-intelligence integration:\n- Historical log retention (typically 90–365 days in a SIEM) combined with newly-published IoCs lets organizations determine whether they were targeted before public disclosure — giving a window to assess the extent of compromise, preserve evidence, and remediate before the attacker knows they're detected.\n- Organizations without TI integration had no way to perform this retrospective analysis efficiently.",
          "Volt Typhoon also showed the value of sector-specific ISACs and set a benchmark for TI program auditors:\n- The E-ISAC (Electricity) and WaterISAC shared Volt Typhoon indicators with members before the public CISA disclosure, letting targeted sectors hunt while the joint advisory was still being finalized — early warning available only to ISAC members, which is why ISAC membership is now standard CISA guidance for critical infrastructure operators.\n- Auditor questions: is the organization subscribed to CISA AIS (free, automated, STIX/TAXII), is it a member of the relevant sector ISAC, how fast do new Five Eyes advisory IoCs reach the SIEM enrichment pipeline (target under 1 hour via automated TAXII polling), and can it run a retrospective hunt against 90 days of logs within 4 hours of a major advisory — the operational floor for a Tier 3 (Proactive) program.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Intel Feeds", sub: "ISAC, CISA, commercial TI", type: "attacker" },
          { label: "TIP (MISP/OpenCTI)", sub: "aggregate, deduplicate, score", type: "system" },
          { label: "SIEM Enrichment", sub: "STIX/TAXII at ingest", type: "victim" },
          { label: "Contextualized Alerts", sub: "actor + TTP + confidence", type: "result" },
        ],
      },
      timeline: [
        { year: 2012, event: "STIX 1.0 released by MITRE — structured threat intel format standardized" },
        { year: 2016, event: "STIX 2.0 + TAXII 2.0 released — REST-based automated sharing" },
        { year: 2017, event: "CISA AIS (Automated Indicator Sharing) goes live — free federal TI feed", highlight: true },
        { year: 2022, event: "OASIS STIX 2.1 ratified — Extensions, Notes, and Opinions added" },
        { year: 2023, event: "Volt Typhoon disclosure — Five Eyes STIX bundle shared globally via TAXII" },
      ],
      keyTakeaways: [
        "STIX defines the data model; TAXII is the transport — both required for automated TI sharing",
        "TIP platforms aggregate, deduplicate, and score feeds before exposing to SIEM",
        "CISA AIS provides free STIX/TAXII access — every SOC should be subscribed",
        "Confidence scores and expiry dates prevent stale IoCs from generating false positives",
        "ISACs share sector-specific intelligence that generic commercial feeds miss",
        "The intelligence lifecycle has five phases: collect, process, analyze, disseminate, feedback — the feedback loop makes programs effective",
        "Retrospective detection: new IoCs applied against 90-day historical logs can reveal prior compromises invisible before the intelligence was available",
        "LLMs can parse unstructured threat reports and extract STIX objects automatically, reducing analyst report parsing time from hours to minutes",
        "TI MCP servers must enforce need-to-know access controls and ISAC sharing agreement terms programmatically",
        "Volt Typhoon showed that LOLBin-based attackers are only detectable through behavioral analytics plus TI sharing — neither alone is sufficient",
      ],
      references: [
        { title: "CISA Automated Indicator Sharing", url: "https://www.cisa.gov/topics/cyber-threats-and-advisories/information-sharing/automated-indicator-sharing-ais" },
        { title: "STIX 2.1 Specification (OASIS)", url: "https://docs.oasis-open.org/cti/stix/v2.1/stix-v2.1.html" },
        { title: "CISA Volt Typhoon Advisory", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-144a" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm06-q1", type: "Core Idea", challenge: "Model vs transport.", text: "What's the relationship between STIX and TAXII?", options: ["STIX is the data model for threat intel; TAXII is the transport for sharing it","They're the same thing","TAXII is the model; STIX the transport","Both are encryption ciphers"], correctIndex: 0, explanation: "STIX structures the intel; TAXII moves it between parties." },
        { id: "audit-cm06-q2", type: "TIP", challenge: "Between feeds and SIEM.", text: "What does a Threat Intelligence Platform (TIP) do?", options: ["Aggregates, deduplicates, and scores feeds, then exposes a unified TAXII endpoint","Generates new malware signatures in a sandbox","Replaces the SIEM","Stores passwords"], correctIndex: 0, explanation: "A TIP consolidates and scores intel before it reaches the SIEM." },
        { id: "audit-cm06-q3", type: "Real Incident", challenge: "Volt Typhoon.", text: "Was Volt Typhoon detected mainly by signature rules matching malware hashes?", options: ["No — it was living-off-the-land, evading hash/signature detection","Yes, instantly","Only by antivirus","It was never real"], correctIndex: 0, explanation: "LOTL actors like Volt Typhoon evade signatures; behavior is the signal." },
        { id: "audit-cm06-q4", type: "IoC Hygiene", challenge: "Stale indicators.", text: "Why do STIX indicators carry confidence scores and expiry dates?", options: ["To stop stale or low-confidence IoCs from generating false positives","To rank attacker sophistication","To encrypt them","For decoration"], correctIndex: 0, explanation: "Scoring and expiry keep old/weak indicators from creating noise." },
        { id: "audit-cm06-q5", type: "AIS", challenge: "Free sharing.", text: "What does CISA's Automated Indicator Sharing (AIS) provide?", options: ["Free STIX/TAXII threat-intel access to subscribing organizations","Paid antivirus","A firewall","A VPN"], correctIndex: 0, explanation: "AIS offers free machine-speed indicator sharing via STIX/TAXII." },
        { id: "audit-cm06-q6", type: "Concept", challenge: "Operationalize intel.", text: "The point of a threat-intel pipeline is to…", options: ["Turn many raw feeds into scored, deduplicated indicators the SIEM can act on","Collect feeds and never use them","Replace detection entirely","Generate more noise"], correctIndex: 0, explanation: "Aggregation + scoring makes intel actionable instead of overwhelming." },
        { id: "audit-cm06-q7", type: "Quality over Quantity", challenge: "Not just more feeds.", text: "Adding more raw feeds without a TIP tends to…", options: ["Increase false positives from stale, duplicate, low-confidence IoCs","Always improve detection","Reduce all alerts","Have no effect"], correctIndex: 0, explanation: "Unmanaged feeds create noise; scoring/dedup is what helps." },
        { id: "audit-cm06-q8", type: "Defense", challenge: "Behavior + intel.", text: "Against LOTL actors, intel should be paired with…", options: ["Behavioral detection, since hashes/signatures alone won't catch them","Only more signatures","Manual log reading","Nothing"], correctIndex: 0, explanation: "LOTL needs behavior-based detection alongside curated intel." },
      ],
    },
    ctf: {
      scenario: "A threat intelligence platform received a STIX bundle about a recent campaign. The bundle is split across three files: the threat actor profile, the indicator set, and the campaign report. Collect all three flag fragments.",
      hint: "The TIP stores STIX objects in actor/, indicators/, and campaign/ directories.",
      hints: [
        "Navigate to /tip-stix and list the subdirectories.",
        "Each directory holds one STIX object file with a flag_fragment.",
        "Read actor.json, ioc-set.json, and campaign-report.json.",
      ],
      files: {
        "/tip-stix/actor/threat-actor.json": `{
  "type": "threat-actor",
  "spec_version": "2.1",
  "id": "threat-actor--volt-typhoon-001",
  "name": "Volt Typhoon",
  "aliases": ["Bronze Silhouette", "VANGUARD PANDA"],
  "threat_actor_types": ["nation-state"],
  "sophistication": "expert",
  "resource_level": "government",
  "primary_motivation": "strategic-advantage",
  "sectors_targeted": ["communications", "energy", "transportation", "water"],
  "attribution": "People's Republic of China (MSS)",
  "confidence": 95,
  "flag_fragment": "FLAG{ST1X_"
}`,
        "/tip-stix/indicators/ioc-set.json": `{
  "type": "bundle",
  "spec_version": "2.1",
  "objects": [
    {
      "type": "indicator",
      "id": "indicator--vt-c2-001",
      "name": "Volt Typhoon C2 IP",
      "pattern": "[ipv4-addr:value = '45.142.212.100']",
      "pattern_type": "stix",
      "confidence": 92,
      "labels": ["malicious-activity", "c2-server"],
      "valid_from": "2023-05-01T00:00:00Z",
      "valid_until": "2024-05-01T00:00:00Z",
      "flag_fragment": "T4X11_1NT3L_"
    },
    {
      "type": "indicator",
      "id": "indicator--vt-lolbin-001",
      "name": "Volt Typhoon LOLBin pattern",
      "pattern": "[process:name = 'netsh.exe' AND process:command_line LIKE '%portproxy%']",
      "pattern_type": "stix",
      "confidence": 88,
      "labels": ["living-off-the-land"]
    }
  ]
}`,
        "/tip-stix/campaign/campaign-report.json": `{
  "type": "campaign",
  "spec_version": "2.1",
  "id": "campaign--volt-typhoon-2023",
  "name": "Volt Typhoon — US Critical Infrastructure Pre-positioning",
  "description": "Multi-year Chinese state actor campaign targeting US critical infrastructure sectors for potential wartime disruption. Uses LOLBins exclusively to evade signature detection. Detected via behavioral analytics and cross-agency TI sharing.",
  "first_seen": "2021-01-01T00:00:00Z",
  "last_seen": "2023-05-24T00:00:00Z",
  "objective": "Pre-position for disruptive cyberattacks in event of US-China military conflict",
  "disclosed_by": ["CISA", "NSA", "NCSC", "ASD", "GCSB", "CCCS"],
  "flag_fragment": "SH4R1NG}"
}`,
        "/tip-stix/README.md": `# Threat Intelligence Platform — STIX 2.1 Bundle

Campaign: Volt Typhoon
Source: CISA AA23-144A (joint Five Eyes advisory)
Received: 2023-05-24T18:00:00Z via TAXII 2.1

Bundle components:
  actor/      → Threat actor profile
  indicators/ → IoC indicator set (IPs, process patterns, file hashes)
  campaign/   → Campaign context and objectives`,
      },
      dirs: {
        "/": [{ name: "tip-stix", isDir: true }],
        "/tip-stix": [
          { name: "README.md", isDir: false },
          { name: "actor", isDir: true },
          { name: "indicators", isDir: true },
          { name: "campaign", isDir: true },
        ],
        "/tip-stix/actor": [{ name: "threat-actor.json", isDir: false }],
        "/tip-stix/indicators": [{ name: "ioc-set.json", isDir: false }],
        "/tip-stix/campaign": [{ name: "campaign-report.json", isDir: false }],
      },
      fragments: [
        { trigger: "/tip-stix/actor/threat-actor.json", value: "FLAG{ST1X_", label: "Fragment A — Threat Actor" },
        { trigger: "/tip-stix/indicators/ioc-set.json", value: "T4X11_1NT3L_", label: "Fragment B — Indicators" },
        { trigger: "/tip-stix/campaign/campaign-report.json", value: "SH4R1NG}", label: "Fragment C — Campaign" },
      ],
    },
  },

  // ─── audit-cm07: SOAR ────────────────────────────────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "Palo Alto Networks Cortex XSOAR Lab", location: "Santa Clara, California", era: "Present Day", emoji: "⚡" },
    id: "audit-cm07",
    order: 7,
    title: "The Response Automator",
    subtitle: "SOAR — Security Orchestration, Automation, and Response",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "audit-cm-badge-07", name: "Automation Engineer", emoji: "⚡" },
    easeScore: 6,
    valueScore: 9,
    rank: 5,
    challengeType: "ctf",
    info: {
      tagline: "Humans can't outrun 10,000 alerts per day. SOAR can.",
      year: 2017,
      overview: [
        "Security Orchestration, Automation, and Response (SOAR) platforms (Palo Alto Cortex XSOAR, Splunk SOAR, Microsoft Sentinel SOAR, IBM QRadar SOAR) automate the investigation and response playbooks SOC analysts otherwise run manually for every alert:\n- A phishing triage playbook that takes a human 15 minutes takes a SOAR automation under 30 seconds, running 24/7 without analyst fatigue.\n- Playbooks are structured workflows — trigger (alert received) → enrichment (look up IP in threat intel, pull AD user info, check endpoint isolation) → decision (malicious? above threshold?) → response (block IP, disable user, isolate endpoint, create ticket, notify analyst) — each step calling one of the 500–1,000 pre-built integrations SOAR platforms ship with.",
        "Two things define a SOAR program's value and structure:\n- The ROI case is MTTR (Mean Time to Respond): manual phishing triage at 45 minutes × 200 alerts/day is 150 analyst-hours/day, while SOAR at 30 seconds × 200 alerts is 100 analyst-minutes/day with human review only on the ~3% that escalate — so the value isn't eliminating analysts but ensuring they spend time on decisions, not data gathering.\n- The architecture has three layers: orchestration (stores playbook definitions, tracks execution state across hours-long workflows, handles retries and error recovery), integration (connectors translating SOAR actions like `block_ip`, `lookup_user`, `create_ticket` into each tool's API calls), and case management (tracking each alert's full lifecycle from ingestion through closure with a complete audit trail of every automated and human action).",
        "Two patterns separate effective SOAR from tool-only implementations:\n- Playbook design follows three principles — fail-safe defaults (a failed integration call routes to human review, never silently closing the alert), idempotency (running a playbook twice produces the same result as once — no double-blocking, double-ticketing, or double-notification), and minimal privilege (the enrichment phase uses read-only credentials, the response phase uses write credentials only when needed and only for the resource being acted upon).\n- The SOAR market has partly merged with SIEM — Microsoft Sentinel Logic Apps, Splunk SOAR (formerly Phantom) integrated with Splunk SIEM, IBM QRadar SOAR built into QRadar — while standalone platforms (Cortex XSOAR, Swimlane) compete on integration-library depth and playbook-development flexibility, the consolidation reflecting enterprise preference for fewer vendors.",
        "AI is fundamentally changing SOAR two ways:\n- LLMs generate playbook code from natural-language descriptions — a SOC engineer can describe 'a playbook that triages phishing by checking the sender domain reputation, detonating attachments in a sandbox, and blocking the domain if the score exceeds 70' and the LLM produces executable playbook code.\n- AI-native SOAR platforms use LLMs as decision-making agents rather than fixed decision trees — the LLM reads the enrichment context and decides the action, enabling handling of novel alert types without pre-programmed playbooks.",
      ],
      technical: {
        title: "Playbook Design Patterns",
        body: [
          "Effective SOAR playbooks follow three design principles, and are tested like code:\n- Enrich first, decide later (collect all context before any action that could tip off an attacker or cause disruption), human-in-the-loop for high-impact actions (auto-block at the firewall, but require analyst approval before disabling a CEO's account), and idempotent actions (a playbook firing twice has the same net result as firing once).\n- Testing runs against synthetic alert data in the platform's built-in sandbox or a staging environment wired to test instances of all integrations — a bug in the 'disable account' step running against production is an outage risk — so version control (Git), peer review, and staged rollout apply to playbooks just as to code.",
          "The stage's script is phishing-triage pseudocode in the Cortex XSOAR style, running three phases:\n- Phase 1 (Enrichment) extracts the sender domain, URLs, and attachments, then calls three enrichers — `lookup_domain_reputation` (VirusTotal and Cisco Talos), `lookup_url` per link (URL sandboxing), and `detonate_file` per attachment (an automated malware sandbox like Any.run or CrowdStrike Falcon Sandbox) — in parallel in a real implementation to minimize total enrichment time.\n- Phase 2 (Scoring) sums weighted contributions reflecting empirical detection rates — a malicious sender domain 40 points, a malicious URL 35, a malicious attachment 50 (the highest, since attachments are the most reliable indicator of targeted phishing) — with configurable thresholds (70 for auto-block, 40 for analyst review) tuned to false-positive tolerance and the >100 case capped at action selection, not scoring.",
          "Phase 3 implements the response branch and the operational guardrails:\n- Score ≥ 70 triggers fully automated response — `block_sender_domain` adds firewall and email-gateway blocks, `quarantine_email_for_all_users` pulls the email from every mailbox that received it (critical at scale, since manual quarantine across 200 recipients is impossible), and `notify_analyst` creates a Slack message and ServiceNow ticket; score 40–69 routes to analyst review with full enrichment context; below 40 auto-closes as FALSE_POSITIVE and feeds the outcome back to the ML models.\n- Enterprise integration handles API rate limits and authentication carefully — VirusTotal's free tier caps at 4 requests/minute (premium keys for commercial deployments), the integration layer queues calls and retries with exponential backoff, and credentials live in the platform's encrypted credential store (never in playbook code or environment variables) with automated rotation.",
          "An MCP server — `mcp-soar-operator` — exposes playbook execution and case management to AI assistants:\n- It would expose tools like `run_playbook`, `get_playbook_status`, `get_case_timeline`, `list_pending_approvals`, and `approve_action`, so a SOC manager could ask Claude 'show me all phishing cases from the last 24 hours where the playbook escalated for human review, and summarize the common enrichment patterns.'\n- Claude calls `get_case_timeline` for each escalated case, extracts the enrichment data, and synthesizes a pattern analysis — identifying whether the escalations share a common sender domain, URL pattern, or attachment type, which helps tune the playbook's scoring thresholds.",
        ],
        codeExample: {
          label: "Phishing triage playbook (Python pseudocode — Cortex XSOAR style)",
          code: `# SOAR Playbook: Phishing Email Triage
# Trigger: Email security gateway alert

def phishing_triage_playbook(alert: dict) -> dict:
    email = alert["reported_email"]

    # Step 1: Extract and enrich indicators
    sender_domain = extract_domain(email["from"])
    links = extract_urls(email["body"])
    attachments = email.get("attachments", [])

    sender_rep = lookup_domain_reputation(sender_domain)  # VirusTotal, Cisco Talos
    url_verdicts = [lookup_url(url) for url in links]
    file_verdicts = [detonate_file(att) for att in attachments]  # sandbox

    # Step 2: Compute phishing score
    score = 0
    if sender_rep["malicious"]: score += 40
    if any(v["malicious"] for v in url_verdicts): score += 35
    if any(v["malicious"] for v in file_verdicts): score += 50

    # Step 3: Automated response based on score
    if score >= 70:
        block_sender_domain(sender_domain)        # auto: firewall rule
        quarantine_email_for_all_users(email)     # auto: email gateway
        notify_analyst(alert, score, "HIGH")      # auto: Slack + ticket
        return {"verdict": "PHISHING", "score": score, "action": "AUTO_BLOCKED"}

    elif score >= 40:
        notify_analyst(alert, score, "MEDIUM")    # human reviews
        return {"verdict": "SUSPICIOUS", "score": score, "action": "ANALYST_REVIEW"}

    else:
        close_alert(alert["id"], "FALSE_POSITIVE")
        return {"verdict": "BENIGN", "score": score, "action": "AUTO_CLOSED"}`,
        },
      },
      incident: {
        title: "Twilio SMS Phishing — Manual Response Delay (2022)",
        when: "August 4, 2022",
        where: "Twilio, San Francisco",
        impact: "125 customer organizations compromised via Okta and Twilio employee credential theft",
        body: [
          "On August 4, 2022, multiple Twilio employees received SMS messages impersonating Twilio IT, directing them to a fake Okta SSO login page (the URL substituted 'twilio-okta.com' for 'okta.com'):\n- It was a carefully timed operation — messages sent to multiple employees simultaneously to maximize the chance of at least one credential submission before the security team became aware.\n- Several employees fell victim, submitting their Okta credentials to the attacker-controlled page.",
          "Twilio's initial response took hours after the first credential submission, and the delay enabled a supply-chain attack:\n- In that window, the attackers used the stolen credentials to reach Twilio's internal customer administration console, viewing and sometimes modifying customer account data.\n- They then used Twilio's SMS infrastructure to message Okta customers and Twilio's downstream customers, cascading to 125 downstream organizations including Okta, Signal, and DoorDash.",
          "An automated SOAR playbook triggered by the anomalous authentication events would have dramatically reduced the impact:\n- The trigger — multiple employees logging in from new IPs within a 15-minute window, a high-anomaly pattern in any UEBA system.\n- The playbook would have pushed confirmation prompts to the affected employees' registered phones, temporarily suspended the accounts pending confirmation, and paged the on-call security engineer within 60 seconds of the first credential submission — the entire cascading attack on 125 customers was a consequence of the response delay.",
          "Twilio also exposed a phishing-resistant-MFA gap and reinforced SOAR requirements for platform providers:\n- Employees used TOTP, which is phishable in real time — the fake login page immediately replays the stolen credentials plus the TOTP code to the real Okta instance before the 30-second window expires — so SOAR playbooks should now correlate simultaneous authentication events (real use and the phishing replay), and Twilio subsequently deployed FIDO2/WebAuthn hardware keys, which would have prevented the attack entirely.\n- The regulatory angle: the SEC's cybersecurity disclosure rules require public companies to report material incidents within four business days, and Twilio's breach affected publicly-traded Okta's stock and customer trust — now a standard case study in why platform providers with privileged access to customer infrastructure need SOAR automation for identity-based attacks, not just network alerts.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Alert Trigger", sub: "SIEM → SOAR webhook", type: "attacker" },
          { label: "Enrich + Analyze", sub: "TI, AD, EDR, sandbox", type: "system" },
          { label: "Decision Tree", sub: "score-based branching", type: "victim" },
          { label: "Auto-Response + Ticket", sub: "block, isolate, notify", type: "result" },
        ],
      },
      timeline: [
        { year: 2015, event: "SOAR concept emerges from SIEM + ticketing + scripting integration gaps" },
        { year: 2017, event: "Palo Alto acquires Demisto (XSOAR) — SOAR becomes enterprise product category", highlight: true },
        { year: 2019, event: "Splunk acquires Phantom — major SIEM vendors bundle SOAR capabilities" },
        { year: 2022, event: "Twilio breach highlights MTTR risk — manual response enables cascading attacks" },
        { year: 2024, event: "AI-native SOAR: LLMs generate playbook code from natural language descriptions" },
      ],
      keyTakeaways: [
        "SOAR reduces MTTR from hours to seconds for automated-response playbooks",
        "Enrich first, then decide — collect context before any action that could be disruptive",
        "Human-in-the-loop for high-impact actions (account disable, production changes)",
        "Playbooks are code — version control, review, and staging apply",
        "500–1,000 pre-built integrations make SOAR a force multiplier across the security stack",
        "Idempotency is a core playbook design requirement — running twice must produce the same result as running once",
        "SOAR integration credentials must be stored in encrypted credential stores, never in playbook code",
        "AI-native SOAR uses LLMs as decision agents for novel alert types without pre-programmed playbooks",
        "Phishing-resistant MFA (FIDO2/WebAuthn) must be a SOAR-enforced policy check — TOTP can be phished in real-time relay attacks",
        "MCP servers (mcp-soar-operator) expose playbook execution to AI assistants for automated case analysis and approval workflows",
      ],
      references: [
        { title: "Cortex XSOAR Documentation", url: "https://docs-cortex.paloaltonetworks.com/p/XSOAR" },
        { title: "Twilio Breach Disclosure", url: "https://www.twilio.com/blog/august-2022-social-engineering-attack" },
        { title: "SANS SOAR Playbook Repository", url: "https://www.sans.org/tools/soar-playbooks/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm07-q1", type: "Core Idea", challenge: "Speed up response.", text: "What does SOAR primarily automate?", options: ["Incident response actions via playbooks (orchestration + automated response)","Writing source code","Encrypting disks","Designing logos"], correctIndex: 0, explanation: "SOAR orchestrates and automates response steps." },
        { id: "audit-cm07-q2", type: "Human Approval", challenge: "High-impact actions.", text: "Should a SOAR playbook auto-disable a CEO's account with no approval?", options: ["No — high-impact actions need a human approval step","Yes, always automatic","Only on weekends","Only if logged"], correctIndex: 0, explanation: "Consequential actions require human-in-the-loop approval." },
        { id: "audit-cm07-q3", type: "Metric", challenge: "Measuring value.", text: "What's the primary metric for SOAR's value?", options: ["MTTR — Mean Time to Respond","MTTD — Mean Time to Detect","Lines of code","Number of playbooks"], correctIndex: 0, explanation: "SOAR shortens response time, so MTTR is the key metric." },
        { id: "audit-cm07-q4", type: "Playbook Order", challenge: "Enrich first.", text: "What's the correct playbook order?", options: ["Enrich context first, then respond once the decision is confirmed","Respond first, then enrich","Skip enrichment","Never respond"], correctIndex: 0, explanation: "Enriching before acting prevents wrong automated responses." },
        { id: "audit-cm07-q5", type: "Real Incident", challenge: "Twilio 2022.", text: "Which SOAR action could have limited Twilio's cascading 2022 impact?", options: ["Auto-suspending affected accounts within minutes of anomalous authentication","Blocking all SMS until manual review","Rebooting servers","Emailing customers"], correctIndex: 0, explanation: "Fast automated containment on anomalous auth limits cascade." },
        { id: "audit-cm07-q6", type: "Playbooks as Code", challenge: "Treat them seriously.", text: "SOAR playbooks should be treated as…", options: ["Production code — version controlled, peer reviewed, staged rollout","Throwaway scripts","One-time notes","Never changed"], correctIndex: 0, explanation: "Playbooks act on prod systems, so they need software rigor." },
        { id: "audit-cm07-q7", type: "Concept", challenge: "Why automate.", text: "SOAR's core benefit is…", options: ["Consistent, fast response that scales beyond manual analyst speed","Slower response","Fewer logs","Removing humans entirely"], correctIndex: 0, explanation: "Automation cuts MTTR while keeping humans for high-impact calls." },
        { id: "audit-cm07-q8", type: "Balance", challenge: "Automate wisely.", text: "The right SOAR balance is…", options: ["Automate enrichment and low-risk containment; gate high-impact actions on approval","Automate everything blindly","Automate nothing","Only manual response"], correctIndex: 0, explanation: "Automate the safe steps; keep humans on the consequential ones." },
      ],
    },
    ctf: {
      scenario: "A SOAR platform ran a phishing triage playbook on a suspicious email. The playbook left its enrichment results, decision log, and response actions in three separate files. Read them to reconstruct the flag.",
      hint: "The SOAR stores enrichment/, decisions/, and actions/ for each playbook run.",
      hints: [
        "List /soar-run to see the playbook output directories.",
        "Read the files in enrichment/, decisions/, and actions/ in that order.",
        "Each file contains a flag_fragment.",
      ],
      files: {
        "/soar-run/enrichment/indicators.json": `{
  "playbook": "phishing-triage-v3",
  "run_id": "PB-2024-001542",
  "timestamp": "2024-01-15T09:12:44Z",
  "email": {
    "from": "it-helpdesk@twil1o-support.com",
    "subject": "URGENT: Update your Okta credentials now",
    "sender_domain_rep": {"malicious": true, "confidence": 0.96, "category": "phishing"},
    "urls": [
      {"url": "https://twil1o-okta.support/login", "malicious": true, "confidence": 0.99}
    ],
    "attachments": []
  },
  "phishing_score": 75,
  "flag_fragment": "FLAG{S04R_"
}`,
        "/soar-run/decisions/verdict.json": `{
  "run_id": "PB-2024-001542",
  "phishing_score": 75,
  "threshold_auto_block": 70,
  "verdict": "PHISHING",
  "decision_path": [
    {"check": "sender_domain_malicious", "result": true, "score_add": 40},
    {"check": "url_malicious", "result": true, "score_add": 35},
    {"check": "attachment_malicious", "result": false, "score_add": 0}
  ],
  "action_selected": "AUTO_BLOCKED",
  "human_review_required": false,
  "flag_fragment": "4UT0_R3SP0NS3_"
}`,
        "/soar-run/actions/response-log.json": `{
  "run_id": "PB-2024-001542",
  "actions_taken": [
    {"action": "block_sender_domain", "target": "twil1o-support.com", "status": "SUCCESS", "duration_ms": 234},
    {"action": "quarantine_email_all_users", "count_quarantined": 47, "status": "SUCCESS", "duration_ms": 1820},
    {"action": "create_incident_ticket", "ticket_id": "INC-2024-8834", "priority": "HIGH", "status": "SUCCESS"},
    {"action": "notify_soc_slack", "channel": "#soc-alerts", "status": "SUCCESS"}
  ],
  "total_duration_ms": 2287,
  "analyst_time_saved_min": 14.5,
  "flag_fragment": "PL4YB00K}"
}`,
        "/soar-run/README.md": `# SOAR Playbook Run — PB-2024-001542

Playbook: phishing-triage-v3
Trigger: Email security gateway alert (Rule: SUSP_PHISH_DOMAIN)
Runtime: 2.29 seconds
Analyst time saved: ~14.5 minutes

Output directories:
  enrichment/  → Indicator enrichment results
  decisions/   → Verdict and decision tree log
  actions/     → Response actions taken and status`,
      },
      dirs: {
        "/": [{ name: "soar-run", isDir: true }],
        "/soar-run": [
          { name: "README.md", isDir: false },
          { name: "enrichment", isDir: true },
          { name: "decisions", isDir: true },
          { name: "actions", isDir: true },
        ],
        "/soar-run/enrichment": [{ name: "indicators.json", isDir: false }],
        "/soar-run/decisions": [{ name: "verdict.json", isDir: false }],
        "/soar-run/actions": [{ name: "response-log.json", isDir: false }],
      },
      fragments: [
        { trigger: "/soar-run/enrichment/indicators.json", value: "FLAG{S04R_", label: "Fragment A — Enrichment" },
        { trigger: "/soar-run/decisions/verdict.json", value: "4UT0_R3SP0NS3_", label: "Fragment B — Decision" },
        { trigger: "/soar-run/actions/response-log.json", value: "PL4YB00K}", label: "Fragment C — Actions" },
      ],
    },
  },

  // ─── audit-cm08: Deception Technology ───────────────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "CISA Deception Research Center", location: "Arlington, Virginia", era: "Present Day", emoji: "🍯" },
    id: "audit-cm08",
    order: 8,
    title: "The Decoy Master",
    subtitle: "Deception Technology — honeypots, honeytokens, and canaries",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "audit-cm-badge-08", name: "Deception Architect", emoji: "🍯" },
    easeScore: 8,
    valueScore: 7,
    rank: 8,
    challengeType: "ctf",
    info: {
      tagline: "The best trap looks like exactly what the attacker is looking for.",
      year: 2016,
      overview: [
        "Deception technology deploys fake assets — honeypots (decoy systems), honeytokens (decoy credentials and files), and canary tokens (embedded trackers) — across the network to detect attackers who have already bypassed perimeter defenses:\n- Any interaction with a decoy is a near-zero false-positive alert, since legitimate users have no reason to access fake credentials, connect to honeypot servers, or open canary documents.\n- Modern platforms (Attivo Networks, Illusive Networks, Canarytokens.org, TrapX) distribute hundreds or thousands of decoys — fake Active Directory accounts with enticing names like 'svc-admin-backup', fake file shares with documents labeled 'Q4-Salary-Review.xlsx', honeypot database servers on standard ports — so an attacker doing lateral movement or reconnaissance will almost certainly trip one.",
        "Honeytokens extend deception beyond systems, organized into a three-layer architecture:\n- Honeytokens include fake API keys in code repositories (GitHub monitoring), fake AWS access keys (monitored via CloudTrail), fake database records with traceable values, and canary documents with hidden web beacons that phone home when opened — providing early warning of credential theft, data exfiltration, and insider access.\n- The architecture has three layers: deployment (placing decoys across every segment, server type, and data repository for density, so an attacker enumerating AD users, scanning hosts, or searching a file share hits decoys before reaching real assets), monitoring (watching for any decoy interaction and collecting attacker source IP, session data, and technique), and response integration.",
        "Two deployment patterns are especially effective:\n- Active Directory deception — a realistic AD honeypot account has a privileged-sounding username (svc-backup-admin, helpdesk-admin2), a last-login timestamp within 30 days (to avoid looking unused), Domain Users membership, and a Kerberoastable SPN making it an attractive Kerberoasting target, so when an attacker requests the honeypot SPN's Kerberos ticket the domain controller logs it, the deception platform alerts immediately, and SOAR triggers account isolation and IR notification.\n- Canary documents — a Word or PDF file with a hidden HTTP request (a web bug in metadata or a linked image from a tracking server) that fires when opened, so even on an attacker's isolated machine the tracking server receives the opener's IP, time, and a unique document ID; placed in HR systems, financial repositories, and source code, they detect exfiltration even after the data has left the organization.",
        "The MITRE ENGAGE framework provides a structured methodology for deception as part of an adversary-engagement strategy:\n- It distinguishes passive deception (decoys that detect but don't interact with attackers) from active engagement (maintaining attacker access to gather intelligence on their tools, techniques, and objectives).\n- Active engagement — letting an attacker spend time in a honeypot network while monitoring their behavior — is used by threat-intelligence teams to gather TTPs and attribution, but requires careful legal review and operational security so the honeypot can't be used as a platform for attacks on third parties.",
      ],
      technical: {
        title: "Honeytoken Deployment Patterns",
        body: [
          "Two deployment patterns anchor honeytoken practice:\n- AWS honeytoken — create an IAM user with no permissions but a monitored access key, embed the key in a realistic location (`~/.aws/credentials`, a config file, a GitHub repo), and any use generates a CloudTrail event that triggers an immediate alert; the key has no real permissions, so there's zero operational risk from exposure — only signal value.\n- Active Directory honeypot — accounts with realistic names ('svc-backup-admin', 'helpdesk-admin2'), group memberships, and last-login timestamps attract attackers doing LDAP enumeration for privileged accounts, and a Kerberoastable SPN on a decoy is particularly effective since requesting its ticket immediately reveals the attacker.",
          "The stage's script implements the full AWS honeytoken workflow:\n- `deploy_aws_honeytoken` creates an IAM user with two tags (`Purpose=honeytoken` for CloudTrail filtering, `Alert=immediate` for severity classification) plus a deny-all policy as belt-and-suspenders (so even future AWS service expansions can't accidentally grant access), then `create_access_key` generates the monitored key and the function prints deployment instructions including the key ID and suggested embedding locations.\n- `monitor_honeytoken_use` is an EventBridge handler firing on any CloudTrail API call by the honeypot user — it matches the honeypot username in the calling identity's ARN, extracts the source IP and attempted API action, and calls `alert_soc`, which in production pushes to PagerDuty, opens a CRITICAL ServiceNow incident, and triggers a SOAR playbook that captures the full CloudTrail context, with the EventBridge rule filtering on the specific IAM user ARN so the Lambda fires only for honeytoken interactions.",
          "Two practical concerns keep honeytokens effective in production:\n- Extensions: add geolocation enrichment (ipinfo.io or MaxMind for the source IP's country and ASN, to distinguish security-team testing from real attacker use), a suppression list for known-safe IPs (pentest firms, red-team ranges), and threat-intel lookup of the source IP (escalating to CRITICAL if it's a Tor exit node or known VPN).\n- Maintenance: decoys must stay realistic over time, since an AD honeypot account not 'logged into' in 18 months is obviously a trap, so platforms run automated behavioral simulation — periodically generating realistic authentication events, file access, and network connections from honeypot accounts — tuned to look active without tripping the deception platform's own anomaly alerts.",
          "An MCP server — `mcp-deception-monitor` — exposes honeytoken and honeypot status to AI assistants:\n- It would expose tools like `list_active_decoys`, `get_trigger_alert`, `analyze_attacker_behavior`, `deploy_honeytoken`, and `get_canary_document_status`, so a red-team coordinator could ask Claude 'analyze the sequence of honeypot interactions from the current red team exercise and map them to MITRE ATT&CK techniques.'\n- Claude calls `get_trigger_alert` for each event and `analyze_attacker_behavior`, producing an ATT&CK-mapped timeline of the red team's reconnaissance and lateral movement.",
        ],
        codeExample: {
          label: "AWS honeytoken deployment and CloudTrail alerting (Python / boto3)",
          code: `import boto3
import json

def deploy_aws_honeytoken(username: str = "svc-monitoring-backup") -> dict:
    """Create a monitored honeypot IAM user with a tracked access key."""
    iam = boto3.client("iam")
    cloudwatch = boto3.client("cloudwatch")

    # Create honeypot user with no permissions
    iam.create_user(UserName=username, Tags=[
        {"Key": "Purpose", "Value": "honeytoken"},
        {"Key": "Alert", "Value": "immediate"},
    ])
    # Explicitly deny all actions (belt-and-suspenders)
    iam.put_user_policy(
        UserName=username,
        PolicyName="deny-all",
        PolicyDocument=json.dumps({
            "Version": "2012-10-17",
            "Statement": [{"Effect": "Deny", "Action": "*", "Resource": "*"}]
        })
    )
    # Create monitored access key
    key = iam.create_access_key(UserName=username)["AccessKey"]

    # CloudWatch alarm on any CloudTrail event for this user
    # (In practice: use EventBridge rule + Lambda + SNS for instant alerting)
    print(f"Honeytoken deployed: {key['AccessKeyId']}")
    print(f"Embed in: ~/.aws/credentials, config files, or code repos")
    print(f"Any use triggers CloudTrail → EventBridge → SOC alert (0 false positives)")
    return {"access_key_id": key["AccessKeyId"], "user": username}

def monitor_honeytoken_use(event: dict) -> bool:
    """EventBridge handler — fires on any CloudTrail event for honeypot user."""
    user_arn = event.get("detail", {}).get("userIdentity", {}).get("arn", "")
    if "svc-monitoring-backup" in user_arn:
        src_ip = event["detail"].get("sourceIPAddress")
        action = event["detail"].get("eventName")
        alert_soc(f"HONEYTOKEN TRIGGERED: {user_arn} called {action} from {src_ip}")
        return True
    return False`,
        },
      },
      incident: {
        title: "Uber Data Breach — GitHub Honeytoken Miss (2022)",
        when: "September 15, 2022",
        where: "Uber internal systems",
        impact: "Full internal system access; 57,000 employee records; MFA fatigue attack",
        body: [
          "The 18-year-old attacker who compromised Uber in September 2022 began with an MFA-fatigue attack:\n- Repeated Uber Eats push notifications to a contractor's phone until the contractor accepted one, believing it legitimate, established the initial foothold via the contractor's VPN access.\n- The attacker then navigated Uber's internal network searching for credentials, finding exactly what they wanted: a PowerShell script on an internal network share with hard-coded admin credentials for Uber's PAM (Privileged Access Management) system.",
          "With PAM credentials, the attacker reached Uber's most sensitive internal tools:\n- HackerOne (the vulnerability disclosure program, revealing all known security bugs), the AWS console, Google Workspace admin, Slack admin, and SentinelOne (the EDR platform).\n- The attacker posted screenshots in Uber's Slack and messaged all employees, publicly demonstrating full administrative control, with the breach affecting roughly 57,000 employee records and exposing sensitive vulnerability information.",
          "The critical deception-technology gap: honeytokens placed among the real credentials would have caught the attacker mid-lateral-movement:\n- If fake credentials had been embedded in the same internal file shares, PowerShell scripts, and config files as the real ones, the attacker's testing of those fakes would have triggered an immediate alert.\n- The entire breach hinged on finding real plaintext credentials, so a single honeytoken credential file placed among the real ones — especially a honeytoken PAM credential triggering on first use — would have alerted within seconds of the attacker testing it, enabling account suspension and IR before any privileged access was gained.",
          "The breach also exposed a systemic credential-hygiene failure and carried significant regulatory weight:\n- Credentials in PowerShell scripts on network shares indicate a broader secrets-management failure (ironically Uber had a PAM system, but the script predated it), so deception's role isn't to replace secrets management but to be the final detection layer when it fails — the defense-in-depth being secrets management (HashiCorp Vault, AWS Secrets Manager) + hardcoded-secret scanning (TruffleHog, GitGuardian) + honeytokens.\n- The aftermath: CISO Joseph Sullivan was convicted of obstruction of justice for concealing a prior 2016 Uber breach and paying the attacker $100,000 disguised as a bug bounty, and the SEC's cybersecurity disclosure rules (effective December 2023) would require disclosure within four business days — a strong incentive for earlier detection through tools like honeytokens.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Decoy Assets", sub: "honeypots, honeytokens, canaries", type: "attacker" },
          { label: "Interaction Monitoring", sub: "CloudTrail, AD logs, web beacon", type: "system" },
          { label: "Zero-FP Alert", sub: "any touch = attacker detected", type: "victim" },
          { label: "Attacker Attribution", sub: "IP, user, method, timing", type: "result" },
        ],
      },
      timeline: [
        { year: 1991, event: "Clifford Stoll's 'The Cuckoo's Egg' — first documented honeypot use" },
        { year: 2003, event: "Honeynet Project publishes honeypot research — academic foundations" },
        { year: 2016, event: "Attivo Networks, Illusive Networks commercialize enterprise deception", highlight: true },
        { year: 2020, event: "Canarytokens.org launches — free honeytoken generation at scale" },
        { year: 2022, event: "Uber breach — hard-coded credentials found; no honeytoken detection" },
        { year: 2024, event: "AI-generated decoy content — LLMs create convincing fake documents and credentials" },
      ],
      keyTakeaways: [
        "Any interaction with a decoy is a near-zero false-positive alert — attackers have no reason to touch fakes",
        "AWS honeytokens (IAM access keys) provide zero-risk, zero-permission monitoring of credential theft",
        "Canary documents embed web beacons that fire when opened — detect data exfiltration after the fact",
        "AD decoy accounts with Kerberoastable SPNs detect privilege escalation reconnaissance",
        "Scale matters — hundreds of decoys ensure an attacker moving laterally hits one",
        "Decoys must remain realistic over time — automated behavioral simulation maintains honeypot account activity",
        "Defense-in-depth for credentials: secrets management + hardcoded scanning + honeytokens — all three layers are needed",
        "MITRE ENGAGE provides a structured framework for passive deception (detection) and active engagement (intelligence gathering)",
        "Canary documents in HR and financial data repositories detect exfiltration even after data leaves the organization",
        "MCP servers (mcp-deception-monitor) expose honeytoken trigger events to AI assistants for real-time attacker behavior analysis",
      ],
      references: [
        { title: "Canarytokens — Free Honeytoken Generator", url: "https://canarytokens.org/" },
        { title: "MITRE ENGAGE Deception Framework", url: "https://engage.mitre.org/" },
        { title: "Uber 2022 Breach Disclosure", url: "https://www.uber.com/newsroom/security-update/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm08-q1", type: "Core Idea", challenge: "High-signal alerts.", text: "Why do honeytokens generate so few false positives?", options: ["Legitimate users have no reason to touch them — any access is suspicious","They alert on everything","Users access them constantly","They're random"], correctIndex: 0, explanation: "A honeytoken touch is almost always malicious — very high signal." },
        { id: "audit-cm08-q2", type: "AD Decoy", challenge: "Kerberoast bait.", text: "Why is an AD honeypot account with a Kerberoastable SPN effective?", options: ["A ticket request for the decoy SPN reveals an attacker doing privilege-esc recon","It blocks the login automatically","It speeds up logins","It encrypts AD"], correctIndex: 0, explanation: "Requesting the decoy's ticket exposes the attacker's reconnaissance." },
        { id: "audit-cm08-q3", type: "Safe Tokens", challenge: "No real access.", text: "Does an AWS honeytoken key with a deny-all policy create operational risk if used?", options: ["No — deny-all means it grants no access; the use just triggers an alert","Yes — the attacker gains AWS access","Only on weekends","It deletes resources"], correctIndex: 0, explanation: "A deny-all honeytoken is safe: it only signals, never grants access." },
        { id: "audit-cm08-q4", type: "Real Incident", challenge: "Uber 2022.", text: "What deception would have warned during the 2022 Uber lateral movement?", options: ["Honeytokens — fake credentials placed alongside real ones in internal repos","A louder firewall","A longer password","A new logo"], correctIndex: 0, explanation: "Honeytokens in repos catch attackers harvesting credentials." },
        { id: "audit-cm08-q5", type: "Scale", challenge: "More decoys, more catches.", text: "Why deploy hundreds of decoys?", options: ["It raises the probability a laterally-moving attacker trips one","It's cheaper to have one","Decoys slow the network","Scale doesn't matter"], correctIndex: 0, explanation: "Dense decoys make it hard for an attacker to avoid them all." },
        { id: "audit-cm08-q6", type: "Concept", challenge: "Detection by deception.", text: "Deception technology works by…", options: ["Planting traps that only an intruder would interact with","Blocking all traffic","Encrypting everything","Reading user email"], correctIndex: 0, explanation: "Decoys turn attacker curiosity into a high-confidence alert." },
        { id: "audit-cm08-q7", type: "Lateral Movement", challenge: "Where it shines.", text: "Deception is especially good at catching…", options: ["Attackers during lateral movement and credential harvesting","Slow WiFi","Billing errors","UI bugs"], correctIndex: 0, explanation: "Post-foothold movement is exactly when decoys get tripped." },
        { id: "audit-cm08-q8", type: "Defense", challenge: "Low cost, high value.", text: "Honeytokens are attractive because…", options: ["They're cheap to deploy yet produce near-zero-false-positive alerts","They require huge infrastructure","They're noisy","They grant access"], correctIndex: 0, explanation: "Minimal cost, maximal signal — a strong detective control." },
      ],
    },
    ctf: {
      scenario: "An attacker triggered a honeytoken during a lateral movement exercise. The deception platform logged the event across three files: the token inventory, the trigger alert, and the attacker attribution report. Collect the flag.",
      hint: "The deception platform stores decoys/, alerts/, and attribution/ separately.",
      hints: [
        "List /deception-platform to find the evidence directories.",
        "Read the honeytoken inventory, trigger alert, and attribution report in order.",
        "Each file contains a flag_fragment.",
      ],
      files: {
        "/deception-platform/decoys/honeytoken-registry.json": `{
  "tokens": [
    {
      "id": "HT-AWS-001",
      "type": "aws_access_key",
      "access_key_id": "AKIAIOSFODNN7EXAMPLE",
      "deployed_location": "/home/admin/.aws/credentials (internal jumphost)",
      "permissions": "NONE (deny-all policy)",
      "status": "TRIGGERED",
      "flag_fragment": "FLAG{D3C3PT10N_"
    },
    {
      "id": "HT-DOC-002",
      "type": "canary_document",
      "filename": "Q4-2024-Salary-Review-CONFIDENTIAL.docx",
      "deployed_location": "\\\\fileserver\\HR\\Private\\",
      "beacon_url": "https://canarytokens.com/beacon/abc123",
      "status": "NOT_TRIGGERED"
    },
    {
      "id": "HT-AD-003",
      "type": "ad_honeypot_account",
      "username": "svc-backup-admin2",
      "spn": "HTTP/backup.corp.internal",
      "status": "NOT_TRIGGERED"
    }
  ]
}`,
        "/deception-platform/alerts/trigger-2024-01-15.json": `{
  "alert_id": "HONEY-2024-001",
  "timestamp": "2024-01-15T03:22:17Z",
  "token_id": "HT-AWS-001",
  "token_type": "aws_access_key",
  "trigger_event": "AssumeRole",
  "source_ip": "185.220.101.45",
  "aws_region": "us-east-1",
  "user_agent": "aws-cli/2.13.4 Python/3.11.4",
  "verdict": "ATTACKER_DETECTED",
  "false_positive_probability": 0.001,
  "flag_fragment": "H0N3YT0K3N_"
}`,
        "/deception-platform/attribution/attacker-profile.txt": `# Attacker Attribution Report — HONEY-2024-001

Source IP: 185.220.101.45
  → Tor exit node (Abuse.ch, confidence: HIGH)
  → Prior associations: Lazarus Group C2, Volt Typhoon infrastructure
  → ASN: Frantech Solutions (AS53667)

Trigger sequence:
  02:00 — Lateral movement detected (UEBA risk: 9.87)
  02:14 — Credential harvesting via Mimikatz (EDR alert)
  03:22 — AWS honeytoken triggered (THIS ALERT)
  03:22 — Automated isolation: workstation-chen quarantined

Time from breach to honeytoken detection: 82 minutes
Time from honeytoken to isolation: 4 seconds (SOAR playbook)

flag_fragment: TR4P_F1R3D}"`,
        "/deception-platform/README.md": `# Deception Platform — Incident IR-2024-0115-007

Active decoys: 847 (honeytokens: 312, honeypots: 89, canary docs: 446)
Triggered alerts (30d): 3
False positives (30d): 0

Evidence for IR-2024-0115-007:
  decoys/      → Honeytoken inventory and deployment map
  alerts/      → Trigger event log
  attribution/ → Attacker profile and response timeline`,
      },
      dirs: {
        "/": [{ name: "deception-platform", isDir: true }],
        "/deception-platform": [
          { name: "README.md", isDir: false },
          { name: "decoys", isDir: true },
          { name: "alerts", isDir: true },
          { name: "attribution", isDir: true },
        ],
        "/deception-platform/decoys": [{ name: "honeytoken-registry.json", isDir: false }],
        "/deception-platform/alerts": [{ name: "trigger-2024-01-15.json", isDir: false }],
        "/deception-platform/attribution": [{ name: "attacker-profile.txt", isDir: false }],
      },
      fragments: [
        { trigger: "/deception-platform/decoys/honeytoken-registry.json", value: "FLAG{D3C3PT10N_", label: "Fragment A — Registry" },
        { trigger: "/deception-platform/alerts/trigger-2024-01-15.json", value: "H0N3YT0K3N_", label: "Fragment B — Alert" },
        { trigger: "/deception-platform/attribution/attacker-profile.txt", value: "TR4P_F1R3D}", label: "Fragment C — Attribution" },
      ],
    },
  },

  // ─── audit-cm09: Zero Trust Monitoring ──────────────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "Google BeyondCorp Research Lab", location: "Mountain View, California", era: "Present Day", emoji: "🔐" },
    id: "audit-cm09",
    order: 9,
    title: "The Trust Auditor",
    subtitle: "Zero Trust Monitoring — verify every request, trust no implicit access",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "audit-cm-badge-09", name: "Zero Trust Engineer", emoji: "🔐" },
    easeScore: 4,
    valueScore: 9,
    rank: 12,
    challengeType: "ctf",
    info: {
      tagline: "The perimeter is gone. Identity is the new perimeter. Zero Trust verifies both.",
      year: 2020,
      overview: [
        "Zero Trust Architecture (ZTA), defined in NIST SP 800-207, operates on 'never trust, always verify' — every access request must be authenticated, authorized, and continuously monitored regardless of whether it originates inside or outside the traditional perimeter:\n- Google's BeyondCorp, deployed after the 2010 Aurora attacks, was the first enterprise Zero Trust deployment at scale.\n- Zero Trust monitoring differs from perimeter monitoring because every resource access generates a rich telemetry event — who (identity), what (resource + action), from where (device posture, network location), and whether policy allowed it — creating a comprehensive audit trail where every access decision, not just security events, is logged for analysis.",
        "Zero Trust is organized into five pillars and rolled out in phases over years:\n- The five pillars — Identity (continuous authentication of every user and service), Devices (posture assessed at access time), Networks (microsegmentation, encrypted everywhere), Applications (per-application access control, no implicit trust), and Data (classified and protected at the object level) — each generate telemetry feeding SIEM and UEBA for behavioral analytics.\n- The transition typically takes 2–5 years for large enterprises, in phases: identity consolidation (single IDP), device management (MDM and posture assessment for all endpoints), application microsegmentation (per-application access replacing broad network access), data classification (tagging assets for data-layer policy), and continuous monitoring integration (feeding all ZT access decisions to SIEM/UEBA).",
        "Two architectural concepts drive the runtime decisions:\n- The Policy Decision Point (PDP) and Policy Enforcement Point (PEP) — the PDP evaluates every request against policy (identity, device posture, network context, resource sensitivity, UEBA risk score) while the PEP sits between user and resource and enforces the decision by allowing, denying, or stepping up authentication, implemented as software proxies (Zscaler, Cloudflare Access, Google BeyondCorp Enterprise), hardware appliances, or cloud services.\n- Continuous Adaptive Risk and Trust Assessment (CARTA, Gartner) makes trust a continuous spectrum rather than binary — a user authenticating with MFA from a known device on the corporate network starts HIGH, drops slightly on accessing a never-before-seen resource, and drops further (possibly triggering step-up authentication) if their UEBA risk simultaneously rises from large data transfers — implemented through continuous telemetry from all pillars into the PDP's risk engine.",
        "Auditing a Zero Trust program examines coverage, compliance, and telemetry completeness:\n- PDP coverage (what percentage of application access requests the policy engine evaluates), device compliance rate (what percentage of devices pass MDM enrollment and posture checks), policy deny rate (low rates may indicate policy gaps), step-up authentication rate (how often MFA is re-requested mid-session on risk elevation), and access-telemetry completeness (are all five pillars generating telemetry into the SIEM).\n- The CISA Zero Trust Maturity Model v2.0 provides specific measurement criteria for each pillar at Traditional, Initial, Advanced, and Optimal maturity levels.",
      ],
      technical: {
        title: "Continuous Adaptive Risk and Trust Assessment (CARTA)",
        body: [
          "CARTA and NIST 800-207 both describe dynamic trust, implemented from a few core components:\n- A session's trust level isn't fixed at authentication but continuously reassessed on behavioral signals — device posture drift, location change, anomalous resource access, privilege escalation — and if trust degrades mid-session the policy engine can step-up authenticate or terminate the session.\n- The components: an identity provider (Okta, Azure AD, Google Identity) for authentication and MFA, a Policy Decision Point (PDP) evaluating requests against policy, a Policy Enforcement Point (PEP — reverse proxy or network agent) enforcing the decision, and a telemetry pipeline feeding all access decisions and denials to the SIEM for behavioral analysis.",
          "The stage's script implements a CARTA-style trust-evaluation engine:\n- The `AccessContext` dataclass captures the full request context — user identity, target resource and action, device compliance (MDM-managed, patched, encrypted), enrollment status, MFA verification, IP reputation, UEBA risk score, and time-of-day — which is what distinguishes Zero Trust from firewall rules, since the same user accessing the same resource from different contexts gets different trust decisions.\n- `evaluate_trust` is two-phase: Phase 1 hard denials (IP reputation below 0.3, UEBA risk above 8.0, or MFA not verified) override everything, and Phase 2 accumulates a score from five positive factors — device compliance (30), enrollment (20), working hours (15), good IP reputation (20), low UEBA risk (15) — mapping thresholds to policies: 80+ HIGH (full access), 60–79 MEDIUM (standard access with enhanced logging), 40–59 LOW (read-only requiring step-up auth), below 40 DENIED.",
          "The integration between the trust engine and SIEM/UEBA creates a progressive-restriction feedback loop:\n- The UEBA system continuously updates each user's risk score from behavioral signals, and the trust engine reads the current score at every access evaluation.\n- So a user whose risk rises mid-session from anomalous file access finds their next request evaluated at a lower trust level than the previous one — progressively restricting access as anomalies accumulate, without a static rule for each scenario.",
          "An MCP server — `mcp-zt-auditor` — exposes ZT policy and telemetry to AI assistants, but ZT access logs are among the most sensitive operational data anywhere:\n- It would expose tools like `get_access_decision_log`, `get_policy_deny_summary`, `evaluate_hypothetical_access`, `get_pillar_coverage`, and `get_trust_score_history`, so an auditor could ask Claude 'show me all access requests denied in the last 7 days due to device posture failures, grouped by device owner and department' and get a structured analysis identifying which teams have the highest non-compliant-device rates for targeted MDM remediation.\n- Because the logs record what every employee tried to access, from where, and whether it was allowed, the server must enforce strict access controls — HR and legal shouldn't see employee ZT logs (privacy), red-team members shouldn't see ZT policy details (evasion), and the model itself must only audit policies, never modify them — with every tool call logged to an immutable audit trail recording analyst identity, query parameters, and data returned, matching the accountability ZT creates for resource access.",
        ],
        codeExample: {
          label: "Zero Trust policy evaluation engine (Python — NIST 800-207 model)",
          code: `from dataclasses import dataclass
from enum import Enum

class TrustLevel(Enum):
    DENIED = 0
    LOW = 1
    MEDIUM = 2
    HIGH = 3

@dataclass
class AccessContext:
    user_id: str
    resource: str
    action: str
    device_compliant: bool       # MDM-managed, patched, encrypted
    device_known: bool           # registered in device inventory
    mfa_verified: bool
    ip_reputation: float         # 0.0 (malicious) to 1.0 (clean)
    user_risk_score: float       # UEBA score 0 (normal) to 10 (critical)
    in_work_hours: bool

def evaluate_trust(ctx: AccessContext) -> tuple[TrustLevel, str]:
    """CARTA-style continuous trust evaluation."""
    # Hard denials — no appeal
    if ctx.ip_reputation < 0.3:
        return TrustLevel.DENIED, "IP reputation below threshold"
    if ctx.user_risk_score > 8.0:
        return TrustLevel.DENIED, "UEBA risk score critical — session terminated"
    if not ctx.mfa_verified:
        return TrustLevel.DENIED, "MFA required for all resources"

    # Score-based trust level
    score = 0
    if ctx.device_compliant: score += 30
    if ctx.device_known: score += 20
    if ctx.in_work_hours: score += 15
    if ctx.ip_reputation > 0.8: score += 20
    if ctx.user_risk_score < 2.0: score += 15

    if score >= 80: return TrustLevel.HIGH, "Full access granted"
    if score >= 60: return TrustLevel.MEDIUM, "Standard access — enhanced logging"
    if score >= 40: return TrustLevel.LOW, "Read-only access — step-up auth required"
    return TrustLevel.DENIED, "Insufficient trust score"

# Example: off-hours access from compliant device, low risk user
ctx = AccessContext("alice", "/api/payroll", "GET",
    device_compliant=True, device_known=True, mfa_verified=True,
    ip_reputation=0.95, user_risk_score=1.2, in_work_hours=False)
level, reason = evaluate_trust(ctx)
print(f"Trust: {level.name} — {reason}")  # → MEDIUM — Standard access`,
        },
      },
      incident: {
        title: "Google Aurora Attack — BeyondCorp Origin (2010)",
        when: "December 2009 – January 2010",
        where: "Google, 34+ other technology companies",
        impact: "Google source code stolen; Chinese state actor attributed; led to Google's Zero Trust architecture",
        body: [
          "Operation Aurora was a sophisticated Chinese state-sponsored attack beginning in mid-December 2009 that targeted Google and at least 34 other major technology companies including Adobe, Juniper Networks, and Rackspace:\n- The vector was a zero-day in Internet Explorer 6 (CVE-2010-0249), used to deliver a remote access trojan via a spear-phishing email.\n- Google attributed the attack to the Chinese government and publicly disclosed it in January 2010 — a landmark moment in corporate cyber transparency.",
          "Aurora succeeded because Google, like everyone at the time, ran a perimeter security model:\n- Once inside the corporate network (via VPN or physical access), users and systems received broad implicit trust.\n- The attackers moved laterally from their initial foothold to Google's source code repositories and internal systems — the perimeter was breached, and behind it lateral movement was trivially easy because everything on the internal network was trusted.",
          "Google's response was BeyondCorp, a 4-year engineering project that redesigned how employees access corporate resources:\n- Published in academic papers between 2014 and 2018, it eliminated the concept of a trusted internal network, so by 2014 Google employees accessed all corporate resources from any network (home, cafe, airport, hotel) using the same access path, with every request evaluated by a policy engine checking identity, device posture, and context.\n- VPN was eliminated, and the 'trusted internal network' ceased to exist.",
          "BeyondCorp generates rich telemetry the perimeter model never could, and its industry impact, though delayed, was transformative:\n- Every access request creates a record (user, device, IP, resource, action, trust score, decision) feeding Google's SIEM equivalent and enabling detection of anomalous access — a never-before-accessed repository, a device failing posture mid-session, behavior off the user's baseline — so Aurora-style lateral movement would generate immediate anomaly alerts because every hop requires re-authentication and re-authorization.\n- When COVID-19 forced overnight remote work in March 2020, VPN-based organizations were overwhelmed (VPN scales poorly and assumed corporate network = trusted), while organizations with Zero Trust access models scaled immediately without security compromises — the pandemic accelerated Zero Trust adoption by an estimated 5–7 years versus pre-pandemic projections.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Identity + Device + Context", sub: "IDP, MDM, posture check", type: "attacker" },
          { label: "Policy Decision Point", sub: "CARTA trust evaluation", type: "system" },
          { label: "Policy Enforcement Point", sub: "allow / deny / step-up", type: "victim" },
          { label: "Access Telemetry → SIEM", sub: "every decision logged", type: "result" },
        ],
      },
      timeline: [
        { year: 2010, event: "Operation Aurora — Chinese attack on Google leads to BeyondCorp design" },
        { year: 2014, event: "Google publishes BeyondCorp paper — Zero Trust model documented publicly", highlight: true },
        { year: 2019, event: "NIST begins SP 800-207 development — Zero Trust formalized for federal use" },
        { year: 2020, event: "NIST SP 800-207 published — Zero Trust Architecture official NIST standard" },
        { year: 2021, event: "US Executive Order 14028 mandates Zero Trust across federal agencies by 2024" },
        { year: 2024, event: "CISA Zero Trust Maturity Model v2.0 — five-pillar implementation guidance" },
      ],
      keyTakeaways: [
        "Zero Trust: never trust, always verify — every access request authenticated and authorized",
        "CARTA enables continuous trust re-evaluation — session trust can degrade and trigger step-up auth",
        "Zero Trust monitoring produces access telemetry for every decision, not just security events",
        "Five pillars: Identity, Devices, Networks, Applications, Data — each generates monitoring signals",
        "Google Aurora created the industry's Zero Trust model — the VPN perimeter died in 2010",
        "ZT implementation is a 2-5 year journey for large enterprises, proceeding through five phases",
        "PDP and PEP are the core ZT architecture components — the PDP decides, the PEP enforces",
        "COVID-19 accelerated ZT adoption by 5-7 years — organizations with ZT scaled remote work instantly",
        "CISA Zero Trust Maturity Model v2.0 provides measurement criteria for Traditional/Initial/Advanced/Optimal maturity",
        "MCP servers (mcp-zt-auditor) expose ZT access logs to AI auditors — but require the strictest access controls of any monitoring MCP",
      ],
      references: [
        { title: "NIST SP 800-207 Zero Trust Architecture", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" },
        { title: "CISA Zero Trust Maturity Model v2.0", url: "https://www.cisa.gov/zero-trust-maturity-model" },
        { title: "Google BeyondCorp Research Papers", url: "https://cloud.google.com/beyondcorp#researchPapers" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm09-q1", type: "Core Idea", challenge: "No implicit trust.", text: "Does Zero Trust grant implicit trust once you're inside the network?", options: ["No — every request is authenticated and authorized regardless of location","Yes — inside is trusted","Only for admins","Only on VPN"], correctIndex: 0, explanation: "Zero Trust replaces 'trust but verify' with 'never trust, always verify'." },
        { id: "audit-cm09-q2", type: "Real Incident", challenge: "BeyondCorp's origin.", text: "What triggered Google to build BeyondCorp?", options: ["Operation Aurora — an attack that exploited implicit internal-network trust","A NIST mandate to drop VPNs","A pricing change","A UI redesign"], correctIndex: 0, explanation: "Aurora exposed the danger of trusting internal traffic by default." },
        { id: "audit-cm09-q3", type: "CARTA", challenge: "Trust changes.", text: "Under Zero Trust CARTA, is a session's trust fixed at initial authentication?", options: ["No — trust is continuously re-evaluated and can change mid-session","Yes — fixed at login","Only daily","Trust never changes"], correctIndex: 0, explanation: "CARTA continuously assesses risk and adapts trust during the session." },
        { id: "audit-cm09-q4", type: "PDP", challenge: "Who decides.", text: "Which Zero Trust component makes the allow/deny decision?", options: ["The Policy Decision Point (PDP)","The Identity Provider (IdP)","The firewall only","The end user"], correctIndex: 0, explanation: "The PDP evaluates policy and decides; the PEP enforces it." },
        { id: "audit-cm09-q5", type: "Telemetry", challenge: "Richer logs.", text: "Why does Zero Trust produce richer audit telemetry?", options: ["Every access decision — not just security events — is logged","It logs nothing","It only logs failures","It disables logging"], correctIndex: 0, explanation: "Per-request decisions create a far more complete audit trail." },
        { id: "audit-cm09-q6", type: "Concept", challenge: "The principle.", text: "Zero Trust's guiding principle is…", options: ["Never trust, always verify — location grants no trust","Trust the internal network","Perimeter is enough","VPN users are safe"], correctIndex: 0, explanation: "Verification is per-request, independent of network position." },
        { id: "audit-cm09-q7", type: "Lateral Movement", challenge: "What it stops.", text: "Zero Trust most directly defends against…", options: ["Lateral movement after an initial compromise","Slow downloads","High bills","Typos"], correctIndex: 0, explanation: "Re-verifying every request blocks the free movement breaches rely on." },
        { id: "audit-cm09-q8", type: "Audit", challenge: "Auditing ZT.", text: "Auditing a Zero Trust deployment leans on…", options: ["The per-decision telemetry to verify policy is enforced everywhere","The absence of logs","Trusting the vendor","Perimeter firewall rules only"], correctIndex: 0, explanation: "Decision logs let auditors confirm Zero Trust is actually enforced." },
      ],
    },
    ctf: {
      scenario: "A Zero Trust Policy Decision Point denied an access request and logged the full evaluation. The PDP audit log is split across identity/, device/, and policy/ directories. Read all three to reconstruct the denial decision and collect the flag.",
      hint: "The PDP logs identity context, device posture, and policy decision in separate files.",
      hints: [
        "Navigate to /zt-pdp-audit and list the subdirectories.",
        "Read identity-context.json, device-posture.json, and policy-decision.json.",
        "Each file contains a flag_fragment in the audit record.",
      ],
      files: {
        "/zt-pdp-audit/identity/identity-context.json": `{
  "request_id": "ZT-2024-001-AUTH",
  "timestamp": "2024-01-15T03:22:19Z",
  "user": {
    "id": "m.chen@corp.internal",
    "mfa_verified": true,
    "mfa_method": "TOTP",
    "last_password_change": "2022-03-01",
    "ueba_risk_score": 9.87,
    "ueba_risk_level": "CRITICAL",
    "active_incidents": ["IR-2024-0115-007"]
  },
  "evaluation": "IDENTITY_HIGH_RISK — UEBA risk 9.87 exceeds threshold 8.0",
  "flag_fragment": "FLAG{Z3R0_"
}`,
        "/zt-pdp-audit/device/device-posture.json": `{
  "request_id": "ZT-2024-001-AUTH",
  "device_id": "WS-CHEN-001",
  "device_known": true,
  "mdm_managed": true,
  "disk_encrypted": true,
  "os_patched": true,
  "edr_agent": "CrowdStrike Falcon (active)",
  "edr_threat_status": "CRITICAL — active Cobalt Strike beacon detected",
  "device_posture_score": 2,
  "device_posture_level": "COMPROMISED",
  "flag_fragment": "TR4ST_"
}`,
        "/zt-pdp-audit/policy/policy-decision.json": `{
  "request_id": "ZT-2024-001-AUTH",
  "resource": "/api/admin/finance/payroll",
  "action": "GET",
  "trust_score": 0,
  "decision": "DENY",
  "deny_reasons": [
    "UEBA risk score 9.87 exceeds hard-deny threshold 8.0",
    "Device posture: COMPROMISED (active malware beacon detected)",
    "Source IP 185.220.101.45 is a known Tor exit node"
  ],
  "policy_rule": "ZT-POLICY-CRITICAL-DENY-001",
  "soar_action": "TRIGGERED — session terminated, account suspended, IR notified",
  "flag_fragment": "N3V3R_VER1FY}"
}`,
        "/zt-pdp-audit/README.md": `# Zero Trust PDP Audit Log — Request ZT-2024-001-AUTH

Outcome: DENIED
Resource: /api/admin/finance/payroll
User: m.chen@corp.internal
Timestamp: 2024-01-15T03:22:19Z

Audit components:
  identity/  → Identity context and UEBA risk evaluation
  device/    → Device posture assessment from MDM + EDR
  policy/    → Policy decision, deny reasons, and SOAR trigger`,
      },
      dirs: {
        "/": [{ name: "zt-pdp-audit", isDir: true }],
        "/zt-pdp-audit": [
          { name: "README.md", isDir: false },
          { name: "identity", isDir: true },
          { name: "device", isDir: true },
          { name: "policy", isDir: true },
        ],
        "/zt-pdp-audit/identity": [{ name: "identity-context.json", isDir: false }],
        "/zt-pdp-audit/device": [{ name: "device-posture.json", isDir: false }],
        "/zt-pdp-audit/policy": [{ name: "policy-decision.json", isDir: false }],
      },
      fragments: [
        { trigger: "/zt-pdp-audit/identity/identity-context.json", value: "FLAG{Z3R0_", label: "Fragment A — Identity" },
        { trigger: "/zt-pdp-audit/device/device-posture.json", value: "TR4ST_", label: "Fragment B — Device" },
        { trigger: "/zt-pdp-audit/policy/policy-decision.json", value: "N3V3R_VER1FY}", label: "Fragment C — Policy" },
      ],
    },
  },

  // ─── audit-cm10: XDR ─────────────────────────────────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "Microsoft Defender XDR Operations Center", location: "Redmond, Washington", era: "Present Day", emoji: "🛡️" },
    id: "audit-cm10",
    order: 10,
    title: "The Unified Defender",
    subtitle: "XDR — Extended Detection and Response across all telemetry layers",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "audit-cm-badge-10", name: "XDR Operator", emoji: "🛡️" },
    easeScore: 7,
    valueScore: 10,
    rank: 3,
    challengeType: "ctf",
    info: {
      tagline: "EDR sees the endpoint. NDR sees the network. XDR sees the whole story.",
      year: 2018,
      overview: [
        "Extended Detection and Response (XDR) is the architectural evolution of siloed security tools — unifying telemetry from endpoints (EDR), network (NDR), identity (IDP logs), cloud (CSPM/CWPP), and email into one correlated detection and response platform:\n- Where an analyst previously had to pivot across five separate consoles to reconstruct an attack, XDR automatically correlates signals across all sources and presents a unified incident timeline.\n- Platforms (Microsoft Defender XDR, CrowdStrike Falcon XDR, Palo Alto Cortex XDR, SentinelOne Singularity) use a centralized data lake with a common schema so detection rules and ML models operate across all sources simultaneously — a correlation that would take a human 45 minutes of console-pivoting completes in milliseconds against the unified dataset.",
        "The core value is compressing alerts into incidents, via three capabilities:\n- A SIEM generates thousands of independent alerts; XDR automatically groups related alerts into a single incident with a timeline, a MITRE ATT&CK technique mapping, and a recommended response — so analysts work incidents, not individual alerts, a fundamental SOC-workflow shift improving both efficiency and coverage.\n- Architecturally it has three core capabilities: a unified data lake with a common schema (OCSF or vendor-proprietary) normalizing telemetry from all tools (CrowdStrike EDR, Darktrace NDR, Okta identity, AWS Security Hub cloud in the same lake), an entity-resolution engine maintaining a graph of entities (users, hosts, IPs, domains, file hashes) and linking alerts that share entities, and an incident engine that groups correlated alerts, scores severity, maps to ATT&CK, and generates recommended responses.",
        "Two strategic dimensions shape an XDR deployment:\n- Native versus open XDR — native (Microsoft Defender XDR, CrowdStrike XDR) assumes a single vendor's suite for all telemetry, giving deeply integrated correlation with minimal configuration, while open XDR (Palo Alto Cortex XDR, Exabeam Fusion SIEM) accepts any vendor's telemetry via APIs, trading native depth for flexibility — and large enterprises typically end up hybrid: a native XDR primary plus connectors for tools the preferred vendor doesn't cover.\n- AI generations — first-gen XDR AI did signature-free behavioral endpoint detection, second-gen did cross-source correlation and automated incident creation, and emerging third-gen uses LLMs to generate natural-language incident summaries, recommend remediation, answer analyst questions, and draft SOAR playbook code for novel patterns (Microsoft Security Copilot, integrated with Defender XDR, being the leading example).",
        "Auditing an XDR program examines coverage, latency, and compression:\n- Data source coverage (what percentage of the security stack feeds the data lake), correlation latency (how fast alerts are grouped into incidents — target under 5 minutes), incident-to-alert ratio (the compression factor — ideally 1 incident per 20–50 related alerts, not 1:1), MITRE ATT&CK technique coverage in automated detections, and mean time from incident creation to analyst assignment (target under 15 minutes for CRITICAL incidents).\n- XDR programs ingesting fewer than 5 data sources or with correlation latency above 30 minutes aren't realizing the platform's core value proposition.",
      ],
      technical: {
        title: "Cross-Source Correlation and Incident Graph",
        body: [
          "XDR correlation builds an entity graph and maps it to ATT&CK:\n- Every alert references entities (user accounts, device hostnames, IPs, file hashes), so the platform indexes all alerts by entity and links those sharing an entity within a time window — a process-injection alert on endpoint A and a lateral-movement alert from A to B are automatically linked through the shared host entity.\n- Each correlated alert is tagged with the ATT&CK technique it represents, so a cluster mapping to T1059 (Command Scripting Interpreter), T1547 (Boot/Logon Autostart), and T1071 (Application Layer Protocol) tells the analyst this is a persistence-establishing malware-execution chain, not three unrelated events.",
          "The stage's script implements the XDR entity-graph correlation algorithm:\n- The `Alert` dataclass captures source (telemetry layer), timestamp, entities (a single alert may reference multiple hosts, users, or IPs), and the MITRE technique ID, while the `Incident` dataclass accumulates correlated alerts and exposes a `mitre_chain` property summarizing the full attack chain as a readable technique sequence.\n- `correlate_to_incidents` runs a breadth-first search over the entity graph — building an `entity_index` mapping each entity to its alerts, then for each unvisited alert doing BFS to gather all alerts sharing at least one entity within the time window (default 60 minutes) into one incident, with a `visited` set preventing an alert from landing in multiple incidents, dramatically reducing the volume an analyst must triage.",
          "Two tuning concerns govern correlation quality:\n- The time window trades false positives against false negatives — a 60-minute window captures most attack chains (attackers typically move through initial access, execution, and lateral movement within an hour), a 24-hour window over-correlates unrelated events sharing an entity, and a 5-minute window under-correlates slow-burn campaigns, so production systems use adaptive windows (shorter for high-volume entities like domain controllers and jump servers, longer for low-activity ones like specialty servers and privileged accounts).\n- Schema mapping and data quality matter because raw alerts use different identifier formats (CrowdStrike device hostnames, Okta email addresses, AWS ARNs), so the entity-resolution engine maintains a lookup table mapping them to canonical entity IDs — mapping 'workstation-chen.corp.internal' (CrowdStrike) and 'm.chen@corp.internal' (Okta) to the same entity to enable cross-source correlation.",
          "An MCP server — `mcp-xdr-investigator` — exposes incident data and investigation to AI assistants:\n- It would expose tools like `get_incident_details`, `search_entity_history`, `run_ad_hoc_hunt`, `get_mitre_coverage`, and `generate_incident_report`, so an IR lead could ask Claude to 'reconstruct the complete attack timeline for incident INC-2024-0115-001, including all entity movements and technique detections, and generate a draft incident report.'\n- Claude calls `get_incident_details`, `search_entity_history` for each entity, and `generate_incident_report`, producing a structured incident report in under 3 minutes — a task that typically takes a skilled IR analyst 2–4 hours.",
        ],
        codeExample: {
          label: "XDR cross-source incident correlation (Python — entity graph model)",
          code: `from collections import defaultdict
from dataclasses import dataclass, field
from datetime import datetime, timedelta

@dataclass
class Alert:
    id: str
    source: str            # "edr", "ndr", "identity", "cloud"
    timestamp: datetime
    entities: list[str]    # hostnames, IPs, user accounts, file hashes
    technique: str         # MITRE ATT&CK technique ID
    severity: str

@dataclass
class Incident:
    id: str
    alerts: list[Alert] = field(default_factory=list)
    techniques: set[str] = field(default_factory=set)

    def mitre_chain(self) -> str:
        return " → ".join(sorted(self.techniques))

def correlate_to_incidents(alerts: list[Alert], window_minutes: int = 60) -> list[Incident]:
    """Group alerts sharing entities within a time window into incidents."""
    entity_index: dict[str, list[Alert]] = defaultdict(list)
    for alert in alerts:
        for entity in alert.entities:
            entity_index[entity].append(alert)

    visited: set[str] = set()
    incidents: list[Incident] = []

    for alert in alerts:
        if alert.id in visited:
            continue
        # BFS: find all alerts connected via shared entities within time window
        incident_alerts = [alert]
        queue = [alert]
        visited.add(alert.id)
        while queue:
            current = queue.pop(0)
            for entity in current.entities:
                for related in entity_index[entity]:
                    if related.id not in visited:
                        time_diff = abs((related.timestamp - current.timestamp).total_seconds())
                        if time_diff <= window_minutes * 60:
                            visited.add(related.id)
                            incident_alerts.append(related)
                            queue.append(related)

        inc = Incident(id=f"INC-{len(incidents)+1:04d}", alerts=incident_alerts)
        inc.techniques = {a.technique for a in incident_alerts}
        incidents.append(inc)

    return incidents`,
        },
      },
      incident: {
        title: "Lapsus$ Microsoft Breach — XDR Correlation Gap (2022)",
        when: "March 2022",
        where: "Microsoft, Okta, Samsung, Nvidia, Ubisoft",
        impact: "37GB of Microsoft source code exfiltrated; Okta admin console accessed",
        body: [
          "The Lapsus$ group was a loosely organized cybercriminal gang, primarily teenagers, that breached some of the world's largest technology companies in rapid succession in late 2021 and early 2022 — Microsoft, Okta, Samsung, Nvidia, Ubisoft, Vodafone, and T-Mobile:\n- Their methodology combined social engineering (SIM swapping, insider bribery, social media manipulation) with credential purchasing from dark-web markets and MFA-fatigue attacks.\n- Their unusual transparency — posting about attacks and stolen data in real time on Telegram — made them a uniquely visible threat actor.",
          "At Microsoft, Lapsus$ exfiltrated 37GB of source code from Azure DevOps repositories:\n- They posted screenshots of internal tools to prove access, and Microsoft confirmed the breach traced to a single compromised account — one employee's credentials, purchased or obtained via social engineering, gave access to Azure DevOps repositories containing Bing, Cortana, and other source code.\n- Critically, signals existed across multiple telemetry sources before detection: unusual Azure DevOps repository clone operations, geographic anomalies in authentication, and access to repositories far outside the employee's typical work scope.",
          "The XDR correlation failure was that those signals lived in three separate telemetry sources but were never automatically correlated:\n- Azure AD (identity anomaly), Azure DevOps audit logs (unusual repository access), and network telemetry (large data transfers from DevOps infrastructure) each held a piece.\n- An XDR platform with proper entity-based correlation would have linked the anomalous Azure AD authentication to the unusual DevOps access and the network transfer through the shared entity of the compromised user account, creating a single CRITICAL incident within minutes of the first anomalous access.",
          "The Okta breach was especially consequential, and Lapsus$ accelerated several industry changes:\n- Because Okta provides identity management for thousands of organizations, Lapsus$ accessing the Okta admin console via a support engineer's credentials to view customer tenant data — discovered only when a member posted a screenshot on Telegram, not by Okta's own monitoring — raised fundamental questions about supply-chain identity security: if an identity provider's own environment is compromised, how do downstream customers detect the impact?\n- The response accelerated phishing-resistant MFA (FIDO2/WebAuthn, immune to the real-time relay and SIM-swap attacks that bypassed TOTP and SMS), added repository-level access controls and clone-anomaly detection to Azure DevOps and GitHub, and drove XDR vendors to add detection models for the Lapsus$ TTP cluster (rapid authentication from new locations → large repository clones → Telegram activity) — making the case a canonical example of why cross-source correlation is necessary to detect sophisticated-but-unsophisticated-method attacks.",
        ],
      },
      diagram: {
        nodes: [
          { label: "EDR + NDR + IDP + Cloud", sub: "unified telemetry lake", type: "attacker" },
          { label: "Entity Graph Correlation", sub: "cross-source alert linking", type: "system" },
          { label: "ATT&CK-Mapped Incident", sub: "timeline + technique chain", type: "victim" },
          { label: "Prioritized Response", sub: "one incident, not 1,000 alerts", type: "result" },
        ],
      },
      timeline: [
        { year: 2018, event: "Palo Alto Networks introduces XDR concept — 'beyond EDR'", highlight: true },
        { year: 2019, event: "CrowdStrike Falcon XDR, Microsoft Defender ATP rebranded to XDR" },
        { year: 2021, event: "Gartner XDR Market Guide — XDR recognized as security platform category" },
        { year: 2022, event: "Lapsus$ breaches Microsoft, Okta — multi-source correlation urgency highlighted" },
        { year: 2024, event: "AI-native XDR: LLM-generated incident summaries and response recommendations" },
      ],
      keyTakeaways: [
        "XDR unifies EDR + NDR + identity + cloud into a single correlated detection platform",
        "Entity graph correlation automatically links alerts sharing hosts, IPs, or users within a time window",
        "MITRE ATT&CK technique mapping turns alert clusters into readable attack chain narratives",
        "Analysts work incidents, not individual alerts — XDR reduces alert fatigue fundamentally",
        "The 'X' in XDR is extensible — best platforms ingest any telemetry source via OCSF/API",
        "Native XDR (single vendor) vs open XDR (multi-vendor) is the primary architectural trade-off",
        "Entity resolution maps different identifier formats (hostname, email, ARN) to canonical IDs for cross-source correlation",
        "Adaptive time windows — shorter for high-volume entities, longer for low-activity ones — balance false positives and negatives",
        "LLM integration generates plain-language incident reports from technical alert data, reducing IR report authoring time from hours to minutes",
        "MCP servers (mcp-xdr-investigator) enable AI-assisted attack reconstruction across all telemetry sources simultaneously",
      ],
      references: [
        { title: "Microsoft Defender XDR Documentation", url: "https://learn.microsoft.com/en-us/microsoft-365/security/defender/" },
        { title: "MITRE ATT&CK Framework", url: "https://attack.mitre.org/" },
        { title: "Lapsus$ Microsoft Disclosure (MSRC)", url: "https://msrc.microsoft.com/blog/2022/03/lapsus-targeting-with-multifactor-authentication/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm10-q1", type: "Core Idea", challenge: "Unify the signals.", text: "How does XDR differ from juggling separate EDR/NDR/identity consoles?", options: ["It auto-correlates signals across sources into one incident view","It adds more consoles","It removes detection","It only does endpoints"], correctIndex: 0, explanation: "XDR unifies and correlates telemetry rather than forcing manual pivoting." },
        { id: "audit-cm10-q2", type: "Entity Graph", challenge: "How it links.", text: "How does XDR entity-graph correlation link alerts from different sources?", options: ["By finding alerts sharing the same entity (host, IP, user) within a time window","By matching alert text to a description library","Randomly","By alphabetical order"], correctIndex: 0, explanation: "Shared entities within a window stitch alerts into one incident." },
        { id: "audit-cm10-q3", type: "ATT&CK", challenge: "The narrative.", text: "Why does XDR tag alerts with MITRE ATT&CK techniques?", options: ["To show the attack-chain narrative instead of isolated alerts","To make reports longer","To hide alerts","For billing"], correctIndex: 0, explanation: "ATT&CK tagging reveals the story across the kill chain." },
        { id: "audit-cm10-q4", type: "Real Incident", challenge: "Lapsus$ / Microsoft.", text: "What detection failure was XDR designed to address (seen in the Lapsus$ Microsoft breach)?", options: ["Disparate signals across sources weren't correlated into one incident view in time","A zero-day with no signature","A power outage","A weak password only"], correctIndex: 0, explanation: "Uncorrelated signals across tools delayed recognizing the incident." },
        { id: "audit-cm10-q5", type: "Incidents over Alerts", challenge: "Group, don't drown.", text: "XDR's core value is that analysts work…", options: ["Grouped incidents, not thousands of isolated alerts","Individual alerts one by one","No alerts at all","Only emails"], correctIndex: 0, explanation: "Correlated incidents beat alert-by-alert triage." },
        { id: "audit-cm10-q6", type: "Concept", challenge: "Why correlation.", text: "Cross-source correlation matters because…", options: ["A single attack shows up as weak signals in multiple tools that only mean something together","Each tool sees everything","Alerts are always obvious","Correlation adds noise"], correctIndex: 0, explanation: "The full picture emerges only when signals are joined." },
        { id: "audit-cm10-q7", type: "Speed", challenge: "Faster triage.", text: "Auto-correlation improves the SOC by…", options: ["Cutting the time to understand and respond to an incident","Adding manual steps","Increasing console-switching","Hiding context"], correctIndex: 0, explanation: "One incident view speeds investigation and response." },
        { id: "audit-cm10-q8", type: "Defense", challenge: "The unified view.", text: "XDR helps prevent the 'missed-in-the-noise' breach by…", options: ["Stitching endpoint, network, and identity signals into a single timeline","Using one data source","Ignoring identity","Disabling alerts"], correctIndex: 0, explanation: "A unified timeline surfaces what siloed tools miss." },
      ],
    },
    ctf: {
      scenario: "An XDR platform correlated a multi-source incident. The incident artifacts are in three directories: raw alerts from different telemetry sources, the entity graph output, and the final incident report with ATT&CK mapping. Collect the flag.",
      hint: "The XDR stores raw-alerts/, entity-graph/, and incident-report/ for each correlated incident.",
      hints: [
        "List /xdr-incident to see the correlation artifacts.",
        "Read the files inside raw-alerts/, entity-graph/, and incident-report/.",
        "Each contains a flag_fragment.",
      ],
      files: {
        "/xdr-incident/raw-alerts/multi-source-alerts.jsonl": `{"id":"EDR-001","source":"edr","entity":"workstation-chen","technique":"T1059.001","severity":"HIGH","detail":"PowerShell encoded command executed","flag_fragment":"FLAG{XDR_"}
{"id":"NDR-001","source":"ndr","entity":"workstation-chen","technique":"T1071.001","severity":"HIGH","detail":"C2 beaconing to 185.220.101.45:443 (JA3: CobaltStrike)"}
{"id":"IDN-001","source":"identity","entity":"m.chen@corp.internal","technique":"T1078","severity":"CRITICAL","detail":"User account accessed 3 new systems in 4 minutes"}
{"id":"CLD-001","source":"cloud","entity":"m.chen@corp.internal","technique":"T1530","severity":"CRITICAL","detail":"Bulk S3 download: 2.3GB from corp-customer-data-prod"}`,
        "/xdr-incident/entity-graph/correlation-graph.json": `{
  "incident_id": "INC-2024-0115-001",
  "correlation_window_min": 60,
  "entities": {
    "workstation-chen": ["EDR-001", "NDR-001"],
    "m.chen@corp.internal": ["IDN-001", "CLD-001"]
  },
  "entity_links": [
    {"from": "workstation-chen", "to": "m.chen@corp.internal", "relationship": "logged_in_as"}
  ],
  "correlated_alert_count": 4,
  "flag_fragment": "C0RR3L4T3D_"
}`,
        "/xdr-incident/incident-report/incident-summary.json": `{
  "incident_id": "INC-2024-0115-001",
  "severity": "CRITICAL",
  "title": "Active intrusion — credential compromise + C2 + data exfiltration",
  "attack_chain": [
    {"step": 1, "technique": "T1059.001", "name": "PowerShell Execution", "source": "EDR"},
    {"step": 2, "technique": "T1071.001", "name": "C2 via HTTPS (CobaltStrike)", "source": "NDR"},
    {"step": 3, "technique": "T1078", "name": "Valid Account Abuse", "source": "Identity"},
    {"step": 4, "technique": "T1530", "name": "Data from Cloud Storage", "source": "Cloud"}
  ],
  "mitre_tactics": ["Execution", "Command and Control", "Defense Evasion", "Exfiltration"],
  "recommended_response": "Isolate workstation-chen, suspend m.chen account, revoke AWS credentials, preserve forensics",
  "flag_fragment": "1NC1D3NT}"
}`,
        "/xdr-incident/README.md": `# XDR Correlated Incident — INC-2024-0115-001

Sources: EDR (CrowdStrike) + NDR (Darktrace) + Identity (Azure AD) + Cloud (AWS)
Severity: CRITICAL
Correlation time: 2.1 seconds
Alert count → Incident count: 4 alerts → 1 incident

Artifacts:
  raw-alerts/      → Individual alerts from all telemetry sources
  entity-graph/    → Entity correlation output
  incident-report/ → Final incident with ATT&CK mapping and response recommendation`,
      },
      dirs: {
        "/": [{ name: "xdr-incident", isDir: true }],
        "/xdr-incident": [
          { name: "README.md", isDir: false },
          { name: "raw-alerts", isDir: true },
          { name: "entity-graph", isDir: true },
          { name: "incident-report", isDir: true },
        ],
        "/xdr-incident/raw-alerts": [{ name: "multi-source-alerts.jsonl", isDir: false }],
        "/xdr-incident/entity-graph": [{ name: "correlation-graph.json", isDir: false }],
        "/xdr-incident/incident-report": [{ name: "incident-summary.json", isDir: false }],
      },
      fragments: [
        { trigger: "/xdr-incident/raw-alerts/multi-source-alerts.jsonl", value: "FLAG{XDR_", label: "Fragment A — Raw Alerts" },
        { trigger: "/xdr-incident/entity-graph/correlation-graph.json", value: "C0RR3L4T3D_", label: "Fragment B — Entity Graph" },
        { trigger: "/xdr-incident/incident-report/incident-summary.json", value: "1NC1D3NT}", label: "Fragment C — Report" },
      ],
    },
  },

  // ─── audit-cm11: Continuous Compliance Monitoring ────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "ISACA Compliance Research Center", location: "Schaumburg, Illinois", era: "Present Day", emoji: "📜" },
    id: "audit-cm11",
    order: 11,
    title: "The Compliance Engine",
    subtitle: "Continuous Compliance Monitoring — real-time control verification",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "audit-cm-badge-11", name: "Compliance Architect", emoji: "📜" },
    easeScore: 8,
    valueScore: 9,
    rank: 2,
    challengeType: "ctf",
    info: {
      tagline: "Annual compliance audits are already obsolete. Controls drift every day.",
      year: 2022,
      overview: [
        "Traditional compliance runs on annual point-in-time audits — a snapshot of controls on the day the auditor visits, which may not represent the organization's posture for the other 364 days:\n- Continuous Compliance Monitoring replaces the snapshot with a real-time dashboard, verifying controls programmatically and continuously against frameworks like SOC 2, PCI-DSS, ISO 27001, FedRAMP, and HIPAA.\n- GRC platforms (ServiceNow GRC, IBM OpenPages, Archer, Vanta, Drata, Tugboat Logic) and CSPM tools with compliance modules automate evidence collection — pulling configuration data from AWS/Azure APIs, verifying MFA enforcement from IDP logs, confirming encryption status from storage APIs, and checking patch compliance from MDM — continuously, not manually for an auditor visit.",
        "The shift delivers concrete benefits but depends on mapping controls to checks:\n- Three benefits: year-round audit readiness (no 'audit crunch'), immediate detection and remediation of control drift before it becomes a finding, and 60–80% less audit-preparation time freeing GRC staff for higher-value risk work.\n- It requires a control-to-check mapping — every framework control needs one or more automated checks; some map cleanly (MFA enforcement: query the IDP API and verify all privileged-role users have active MFA factors) while others resist automation (security-awareness training completion: query the LMS, but human judgment is needed to assess training quality), and the automatable ratio varies by framework (FedRAMP ~70% in a typical cloud environment, HIPAA closer to 40% given its administrative and physical safeguards).",
        "Two practices keep continuous compliance trustworthy and preventive:\n- Evidence artifact management — each check produces an artifact (an API response, configuration export, log excerpt) that must be cryptographically timestamped (ideally a trusted timestamping authority per RFC 3161), sourced with clear chain of custody (which system produced it, which API call retrieved it), and stored tamper-evident (write-once, cryptographic hash), with modern platforms using S3 Object Lock (WORM) to create immutable evidence vaults satisfying auditor integrity requirements.\n- Compliance-as-code — organizations using infrastructure-as-code (Terraform, CloudFormation) embed compliance checks in deployment pipelines (a Terraform module creating an S3 bucket checks PublicAccessBlock is enabled before applying), and policy-as-code tools (Open Policy Agent, Sentinel, Conftest) enforce controls at the code level, preventing non-compliant configurations from deploying rather than detecting them after.",
        "AI is transforming compliance monitoring two ways:\n- LLMs interpret the natural language of compliance frameworks and generate automated check specifications — given a control like 'all administrative access must use multi-factor authentication,' an LLM identifies which IDP APIs to call, what response fields to check, and what threshold constitutes a pass.\n- LLMs generate audit narrative — given structured evidence artifacts (API responses, configuration exports), they produce the plain-language description auditors require, transforming technical JSON into readable compliance documentation.",
      ],
      technical: {
        title: "Automated Control Evidence Collection",
        body: [
          "Continuous compliance starts by mapping each control to automatable checks producing tamper-evident artifacts:\n- PCI-DSS Requirement 8.3.6 (MFA for all non-console administrative access) maps to: query the IDP for all admin-role users, verify an MFA method is enrolled and active for each, and verify no admin access was granted without MFA in the past 30 days — running daily and updating the control evidence record.\n- Evidence artifacts (API response payloads, screenshots for UI-only controls, logs, configuration exports) are stored with timestamps and source identifiers to form an immutable audit trail, with modern platforms cryptographically signing artifacts to prevent tampering and support chain-of-custody for regulatory audits.",
          "The stage's script implements a PCI-DSS control check for MFA enrollment:\n- `check_pci_mfa_requirement` takes an Okta client and a look-back period, building an evidence dictionary with the control identifier (PCI-DSS-4.0-8.3.6), the UTC ISO 8601 `check_time` (the timestamp that appears in the audit record as the evidence-collection time), and empty arrays for `users_checked` and `failures`.\n- For each admin user from `list_group_users`, it calls `list_enrolled_factors`, filters for ACTIVE factors, appends a CRITICAL failure record if none exist (a PCI-DSS violation requiring immediate remediation), records a per-user MFA-enrollment status, and finally computes `compliance_pct` as the ratio of MFA-enrolled to total admin users — a metric trackable over time to show trend improvement.",
          "Production hardens the check across systems and edge cases:\n- It integrates with three systems — the Okta API (user and factor data), the compliance-platform database (evidence storage with timestamp and hash), and the ticketing system (automated remediation tickets on failure) — and the platform computes a SHA-256 hash of the evidence before storage, recording it in a separate tamper-log the audit team can verify, so when the external auditor requests evidence for PCI-DSS 8.3.6 they receive the artifact plus its hash plus the tamper-log entry, a chain of custody satisfying QSA (Qualified Security Assessor) requirements.\n- Enterprise extensions: add pagination (large admin groups exceed the API page size), a service-account exclusion list (they authenticate via API key, not TOTP), factor-type validation (PCI-DSS 4.0 requires factors from two different categories, so email-only TOTP may not satisfy it), and evidence signing (RSA-sign the artifact with the cryptography library before storage).",
          "An MCP server — `mcp-compliance-monitor` — exposes continuous compliance data to AI assistants:\n- It would expose tools like `get_control_status`, `run_framework_check`, `get_evidence_artifact` (with hash for integrity verification), `list_failing_controls`, and `generate_audit_response`, so a compliance manager preparing for a PCI-DSS QSA audit could ask Claude to 'generate a draft audit response for all PCI-DSS Requirement 8 controls, including the evidence collected in the last 30 days.'\n- Claude calls `run_framework_check` for Requirement 8, `get_evidence_artifact` for each control, and `generate_audit_response`, producing audit-ready documentation in minutes rather than days.",
        ],
        codeExample: {
          label: "Continuous control verification — PCI-DSS MFA requirement (Python)",
          code: `import boto3
from datetime import datetime, timedelta
from typing import Literal

ControlStatus = Literal["PASS", "FAIL", "ERROR"]

def check_pci_mfa_requirement(okta_client, days: int = 30) -> dict:
    """
    PCI-DSS v4.0 Req 8.3.6: MFA required for all non-console admin access.
    Collects evidence: admin user list, MFA status per user, recent auth events.
    """
    evidence = {
        "control": "PCI-DSS-4.0-8.3.6",
        "check_time": datetime.utcnow().isoformat() + "Z",
        "users_checked": [],
        "failures": [],
        "status": "PASS",
    }

    # Pull all users with admin role
    admin_users = okta_client.list_group_users("ADMIN_GROUP_ID")

    for user in admin_users:
        mfa_factors = okta_client.list_enrolled_factors(user["id"])
        active_factors = [f for f in mfa_factors if f["status"] == "ACTIVE"]

        if not active_factors:
            evidence["failures"].append({
                "user": user["profile"]["login"],
                "finding": "No active MFA factor enrolled",
                "severity": "CRITICAL",
            })
            evidence["status"] = "FAIL"

        evidence["users_checked"].append({
            "user": user["profile"]["login"],
            "mfa_enrolled": bool(active_factors),
            "factor_types": [f["factorType"] for f in active_factors],
        })

    evidence["total_users"] = len(evidence["users_checked"])
    evidence["compliant_users"] = sum(1 for u in evidence["users_checked"] if u["mfa_enrolled"])
    evidence["compliance_pct"] = round(evidence["compliant_users"] / max(evidence["total_users"], 1) * 100, 1)
    return evidence`,
        },
      },
      incident: {
        title: "Drizly FTC Consent Order — Compliance Program Failure (2023)",
        when: "January 2023",
        where: "Drizly (Uber subsidiary), Boston",
        impact: "2.5 million customer records breached; FTC consent order binding on CEO personally",
        body: [
          "The FTC's 2023 consent order against Drizly — and its CEO Cory Rellas personally — was remarkable for establishing that individual executives can be held liable for systemic compliance-program failures:\n- The underlying 2020 breach was a textbook credential-hygiene failure: an attacker accessed Drizly's public GitHub repository, found hard-coded AWS credentials, used them to access Drizly's AWS environment, and exfiltrated 2.5 million customer records including email addresses, dates of birth, and encrypted passwords.\n- But the FTC's focus was on the systemic compliance failures that enabled it.",
          "The FTC's complaint enumerated specific compliance failures, each a control a standard SOC 2 or CIS AWS assessment would flag as missing:\n- No MFA on employee accounts (so stolen GitHub credentials worked without a second factor), no least-privilege IAM (the credentials in GitHub had excessive permissions), no monitoring for credential exposure (no alerting when AWS keys were pushed to a public repo), and inadequate security monitoring (the breach went undetected for months).",
          "The consent order's most significant precedent was the personal binding obligation on CEO Cory Rellas:\n- It requires him to implement a comprehensive security program at any future employer with more than 25,000 users for the next 10 years — even after leaving Drizly.\n- That precedent created immediate urgency in C-suite security conversations, with executives who had viewed security as a technical-department responsibility now facing personal liability for compliance-program failures, and the FTC specifically cited the CEO's awareness of the weaknesses and failure to prioritize remediation.",
          "Continuous compliance monitoring would have broken the attack chain, and the case reshaped the platform market:\n- Credential-exposure monitoring (GitGuardian, TruffleHog) would have caught the AWS key in the public repo within minutes of the commit, triggered automated key rotation, and opened a ticket; a CSPM least-privilege check would have flagged the over-permissive credentials; and a SOC 2 MFA-enrollment check would have caught the missing MFA — any one, automated and continuous, would have broken the chain before the breach.\n- The aftermath: Vanta, Drata, and similar platforms added CEO-level compliance dashboards showing real-time control status (giving executives the visibility the FTC held them accountable for) and pre-built check templates for the specific cited controls (MFA enforcement, least-privilege IAM, credential-exposure monitoring), producing a tangible increase in enterprise demand for continuous compliance monitoring driven by C-suite risk awareness rather than technical teams.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Compliance Frameworks", sub: "SOC 2, PCI, HIPAA, FedRAMP", type: "attacker" },
          { label: "Automated Control Checks", sub: "APIs, logs, config exports", type: "system" },
          { label: "Real-Time Dashboard", sub: "pass/fail with evidence", type: "victim" },
          { label: "Continuous Audit Readiness", sub: "no crunch, no surprises", type: "result" },
        ],
      },
      timeline: [
        { year: 2002, event: "SOX enacted — annual controls testing becomes mandatory for public companies" },
        { year: 2013, event: "Cloud-era compliance gap: annual audits can't keep pace with cloud change rates" },
        { year: 2018, event: "Vanta, Drata founded — automated continuous compliance platforms emerge", highlight: true },
        { year: 2022, event: "FedRAMP 20x initiative — continuous monitoring replaces annual authorization renewal" },
        { year: 2023, event: "FTC Drizly order — CEO personally liable for compliance program failure" },
        { year: 2024, event: "AI-native GRC: LLMs map controls to evidence and generate audit narratives" },
      ],
      keyTakeaways: [
        "Annual compliance audits are point-in-time snapshots — controls drift in between",
        "Continuous compliance replaces audit crunch with year-round automated control verification",
        "Evidence artifacts must be timestamped, sourced, and tamper-evident for regulatory audits",
        "FTC Drizly established personal CEO liability for systemic compliance failures",
        "Automated evidence collection reduces audit prep time by 60–80%",
        "Compliance-as-code embeds control checks in IaC pipelines — preventing non-compliant configs from deploying",
        "FedRAMP has ~70% automatable controls in cloud environments; HIPAA is ~40% due to administrative safeguard focus",
        "Evidence signing with RSA and tamper-logs satisfy QSA chain-of-custody requirements for PCI audits",
        "LLMs can generate auditor-ready narrative from structured evidence artifacts, transforming JSON into compliance documentation",
        "MCP servers (mcp-compliance-monitor) enable AI-generated audit responses, reducing preparation from days to minutes",
      ],
      references: [
        { title: "NIST SP 800-53 Rev. 5 — Security and Privacy Controls", url: "https://csrc.nist.gov/publications/detail/sp/800-53/5/final" },
        { title: "FTC Drizly Consent Order", url: "https://www.ftc.gov/legal-library/browse/cases-proceedings/2023184-drizly" },
        { title: "Vanta Continuous Compliance Platform", url: "https://www.vanta.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm11-q1", type: "Core Idea", challenge: "Snapshot vs stream.", text: "Do annual compliance audits give a continuous real-time view?", options: ["No — they're point-in-time; continuous compliance is the real-time view","Yes, year-round","Only in December","They're identical to continuous"], correctIndex: 0, explanation: "Annual audits are snapshots; continuous compliance monitors constantly." },
        { id: "audit-cm11-q2", type: "Evidence", challenge: "How it collects.", text: "How do continuous compliance platforms collect control evidence?", options: ["Automated, scheduled API calls to cloud and IdP systems","Quarterly manual questionnaires","Phone interviews","Screenshots by hand"], correctIndex: 0, explanation: "API-driven, scheduled collection replaces manual gathering." },
        { id: "audit-cm11-q3", type: "Efficiency", challenge: "Less prep.", text: "Roughly how much can continuous compliance cut audit prep time?", options: ["60–80% by automating evidence collection","Around 5%","It increases prep time","No effect"], correctIndex: 0, explanation: "Automated evidence drastically reduces audit crunch." },
        { id: "audit-cm11-q4", type: "Real Incident", challenge: "FTC Drizly.", text: "Why was the FTC Drizly consent order significant?", options: ["It established that individual executives can be personally liable for systemic compliance failures","It required a one-time audit only","It fined customers","It banned alcohol delivery"], correctIndex: 0, explanation: "Drizly extended accountability to executives personally." },
        { id: "audit-cm11-q5", type: "Control Drift", challenge: "Catch it now.", text: "In continuous compliance, when is control drift detected?", options: ["Immediately — not at the next annual audit","Only yearly","Never","After a breach only"], correctIndex: 0, explanation: "Continuous monitoring flags drift the moment it happens." },
        { id: "audit-cm11-q6", type: "Concept", challenge: "Continuous truth.", text: "The value of continuous compliance is…", options: ["Ongoing verification that controls stay effective between audits","A nicer annual report","Fewer controls","Slower audits"], correctIndex: 0, explanation: "It proves controls hold continuously, not just on audit day." },
        { id: "audit-cm11-q7", type: "Mapping", challenge: "Tie evidence to controls.", text: "Collected evidence should map to…", options: ["Specific framework controls (SOC 2, ISO 27001, PCI) it satisfies","Random tags","Nothing","The marketing site"], correctIndex: 0, explanation: "Each evidence item proves a specific control." },
        { id: "audit-cm11-q8", type: "Accountability", challenge: "Why it matters now.", text: "Cases like Drizly mean compliance programs increasingly need…", options: ["Demonstrable, continuous control effectiveness — not point-in-time box-checking","Less rigor","Annual snapshots only","No evidence"], correctIndex: 0, explanation: "Personal-liability precedents raise the bar for ongoing proof." },
      ],
    },
    ctf: {
      scenario: "A continuous compliance platform ran overnight checks across three frameworks. The results are in separate framework report files. Read all three to collect the flag fragments hidden in the compliance evidence.",
      hint: "The GRC platform stores compliance results per-framework: soc2/, pci/, and fedramp/.",
      hints: [
        "Navigate to /compliance-engine and list the report directories.",
        "Each directory has one report file with a flag_fragment in the evidence.",
        "Read soc2-report.json, pci-report.json, and fedramp-report.json.",
      ],
      files: {
        "/compliance-engine/soc2/soc2-report.json": `{
  "framework": "SOC 2 Type II",
  "check_date": "2024-01-15T06:00:00Z",
  "trust_service_criteria": {
    "CC6.1": {"name": "Logical Access Controls", "status": "PASS", "evidence": "MFA: 100% admin users enrolled"},
    "CC6.6": {"name": "Security Monitoring", "status": "PASS", "evidence": "SIEM alerts: 99.7% uptime (30d)"},
    "CC7.2": {"name": "System Monitoring", "status": "FAIL", "evidence": "3 critical alerts unacknowledged > 4h SLA"},
    "CC9.2": {"name": "Vendor Risk Management", "status": "PASS", "evidence": "47/47 critical vendors assessed"}
  },
  "overall_status": "CONDITIONAL_PASS",
  "findings_count": 1,
  "flag_fragment": "FLAG{C0MPL14NC3_"
}`,
        "/compliance-engine/pci/pci-report.json": `{
  "framework": "PCI-DSS v4.0",
  "check_date": "2024-01-15T06:00:00Z",
  "requirements": {
    "Req_1": {"name": "Network Security Controls", "status": "PASS"},
    "Req_7": {"name": "Restrict Access by Business Need", "status": "PASS"},
    "Req_8.3.6": {"name": "MFA for Admin Access", "status": "PASS", "evidence": "47/47 admin users MFA-enrolled"},
    "Req_10": {"name": "Log and Monitor Access", "status": "PASS", "evidence": "100% CDE systems logging to SIEM"},
    "Req_11.3": {"name": "Penetration Testing", "status": "FAIL", "evidence": "Annual pentest overdue by 47 days"}
  },
  "overall_status": "CONDITIONAL_PASS",
  "findings_count": 1,
  "flag_fragment": "C0NT1NU0US_"
}`,
        "/compliance-engine/fedramp/fedramp-report.json": `{
  "framework": "FedRAMP Moderate",
  "check_date": "2024-01-15T06:00:00Z",
  "control_families": {
    "AC": {"name": "Access Control", "controls_checked": 25, "passing": 25, "status": "PASS"},
    "AU": {"name": "Audit and Accountability", "controls_checked": 16, "passing": 16, "status": "PASS"},
    "CM": {"name": "Configuration Management", "controls_checked": 11, "passing": 10, "status": "FAIL",
           "finding": "CM-8: Asset inventory incomplete — 4 cloud assets undiscovered"},
    "IR": {"name": "Incident Response", "controls_checked": 10, "passing": 10, "status": "PASS"},
    "SC": {"name": "System & Communications", "controls_checked": 44, "passing": 44, "status": "PASS"}
  },
  "authorization_status": "IN_GOOD_STANDING",
  "findings_count": 1,
  "flag_fragment": "4UD1T}"
}`,
        "/compliance-engine/README.md": `# Continuous Compliance Engine — Overnight Run 2024-01-15

Frameworks checked: SOC 2 Type II, PCI-DSS v4.0, FedRAMP Moderate
Run time: 06:00 UTC (daily schedule)
Total controls checked: 847
Passing: 844 (99.6%)
Findings: 3

Report directories:
  soc2/      → SOC 2 Trust Service Criteria results
  pci/       → PCI-DSS v4.0 requirement results
  fedramp/   → FedRAMP Moderate control family results`,
      },
      dirs: {
        "/": [{ name: "compliance-engine", isDir: true }],
        "/compliance-engine": [
          { name: "README.md", isDir: false },
          { name: "soc2", isDir: true },
          { name: "pci", isDir: true },
          { name: "fedramp", isDir: true },
        ],
        "/compliance-engine/soc2": [{ name: "soc2-report.json", isDir: false }],
        "/compliance-engine/pci": [{ name: "pci-report.json", isDir: false }],
        "/compliance-engine/fedramp": [{ name: "fedramp-report.json", isDir: false }],
      },
      fragments: [
        { trigger: "/compliance-engine/soc2/soc2-report.json", value: "FLAG{C0MPL14NC3_", label: "Fragment A — SOC 2" },
        { trigger: "/compliance-engine/pci/pci-report.json", value: "C0NT1NU0US_", label: "Fragment B — PCI-DSS" },
        { trigger: "/compliance-engine/fedramp/fedramp-report.json", value: "4UD1T}", label: "Fragment C — FedRAMP" },
      ],
    },
  },

  // ─── audit-cm12: Monitoring Maturity Metrics ─────────────────────────────────
  {
    epochId: "tech-audit-4",
    wonder: { name: "Gartner Security Research Institute", location: "Stamford, Connecticut", era: "Present Day", emoji: "📊" },
    id: "audit-cm12",
    order: 12,
    title: "The Maturity Scorecard",
    subtitle: "Monitoring Maturity — MTTD, MTTR, and the SOC maturity model",
    category: "cybersecurity",
    xp: 250,
    badge: { id: "audit-cm-badge-12", name: "SOC Architect", emoji: "📊" },
    easeScore: 7,
    valueScore: 8,
    rank: 7,
    challengeType: "ctf",
    info: {
      tagline: "What gets measured gets improved. MTTD and MTTR are the vital signs of your security program.",
      year: 2023,
      overview: [
        "Monitoring maturity is measured through operational metrics that quantify security effectiveness, not just compliance checkbox completion:\n- The two most important SOC metrics are MTTD (Mean Time to Detect — average time from a security event occurring to the SOC detecting it) and MTTR (Mean Time to Respond — average time from detection to full containment), with industry benchmarks of 21-day MTTD and 73-day MTTR (IBM Cost of a Data Breach 2023 median) and mature programs achieving MTTD under 24 hours.\n- The SOC Maturity Model (CREST, Gartner, SANS) defines five levels — Level 1 Reactive (incident-driven, no proactive monitoring), Level 2 Compliance-Focused (regulatory monitoring only), Level 3 Proactive (threat hunting, behavioral detection), Level 4 Threat Intelligence-Led (external TI integrated, adversary simulation), Level 5 Adaptive (AI-augmented, metrics-driven continuous improvement) — with most enterprises targeting Level 3–4.",
        "Beyond MTTD/MTTR, mature programs track supporting metrics, and the IBM report makes the business case:\n- Additional metrics: false positive rate (alerts requiring no action / total alerts — target below 5%), SOAR automation coverage (percentage of alert types with automated playbooks — target above 70%), alert-to-incident escalation rate (informing detection tuning), and mean time to recover (full business-service restoration, distinct from containment).\n- The IBM 2023 report (553 organizations) found that fully AI-and-automation-deployed organizations achieved MTTD of 28 days (vs 82 without) and MTTR of 33 days (vs 96 without), a 49-day breach-lifecycle reduction saving an average of $1.76M per breach — concrete, board-communicable numbers for AI-enhanced monitoring.",
        "Two points keep maturity assessment honest:\n- Methodology combines quantitative metrics (MTTD, MTTR, false positive rate, automation coverage) with qualitative capability assessments across threat detection, incident response, threat hunting, and security engineering — CREST's SOC certification awards tiered certifications (Foundation, Practitioner, Expert) against a formal capability model, and the annual SANS SOC Survey provides peer benchmarking by company size and sector.\n- Tool maturity doesn't equal SOC maturity: organizations with mature tools (enterprise XDR, next-gen SIEM, SOAR) can still operate at Level 2 without the processes and people to use them, while organizations with simpler stacks but highly skilled analysts often achieve better outcomes — which is why CREST and SANS assess people, processes, and technology in equal measure.",
        "AI is changing the maturity conversation by collapsing the cost of reaching Level 3–4:\n- Achieving proactive threat hunting (Level 3) previously required rare, expensive specialist analysts, but LLM-based hunting tools let Tier 1 analysts run sophisticated hunts via natural-language queries, AI-assisted triage lowers the skill needed for Tier 1 work, and AI-generated incident reports cut the documentation burden on senior analysts.\n- The net effect is that organizations can reach Level 3–4 operational outcomes with smaller, less specialized SOC teams — democratizing advanced monitoring maturity.",
      ],
      technical: {
        title: "MTTD/MTTR Calculation and Benchmarking",
        body: [
          "The two headline metrics are computed from incident timestamps and visualized over time:\n- MTTD uses the breach timestamp (when the event actually occurred, determined retrospectively from logs) and the detection timestamp (when the SIEM/SOC first identified it); where the breach timestamp is unknown, it's detection timestamp minus the earliest indicator of compromise found in forensics.\n- MTTR runs from detection to containment (the moment the threat is isolated and can no longer cause damage), with full recovery (business-service restoration) tracked separately as MTTRECOVER — dashboards show MTTD/MTTR trend lines over 90-day rolling windows segmented by severity, detection source (automated versus human), and attack category, and a regression in either triggers a program review.",
          "The stage's script implements the core MTTD/MTTR computation engine:\n- `compute_mttd_mttr` takes incident records with three timestamps each — `breach_ts`, `detected_ts`, `contained_ts` — computing MTTD as (detected − breach) and MTTR as (contained − detected) in hours, and its inner `stats` function reports mean (the primary benchmark), median (robust to outliers, since one 312-hour incident skews the mean), p90 (worst-case understanding), min (best case), and max (worst incident).\n- The `benchmarks` dictionary is critical for context — an 18-hour MTTD sounds fast, but the IBM benchmark of 504 hours (21 days) makes it look excellent while the 24-hour target shows it's meeting but not exceeding — so organizations track metrics against both internal targets (what the CISO committed to the board) and external benchmarks (IBM, CREST peer comparison) to communicate effectiveness in business terms.",
          "Two operational systems turn the metrics into board-level reporting:\n- Enterprise dashboards integrate four data sources — the incident management system (ServiceNow, Jira) for the three timestamps, the SIEM for alert timestamps validating `detected_ts`, the forensic system for retrospective `breach_ts`, and the executive reporting tool for visualization — with a nightly pipeline recomputing rolling 90-day statistics and pushing to the CISO dashboard, and any regression over 10% from the prior week triggering an automated program-review alert to the SOC director.\n- An MCP server, `mcp-soc-metrics`, exposes operational and maturity data via tools like `get_mttd_mttr_trends`, `get_maturity_assessment`, `get_detection_gap_analysis`, `compare_to_benchmarks`, and `generate_board_report`, so a CISO preparing a quarterly board presentation could ask Claude to 'generate a board-ready security metrics report comparing our Q4 MTTD/MTTR to industry benchmarks and explaining our improvement roadmap' and get a polished executive report in under 5 minutes versus 3–4 hours.",
          "The capstone value is seeing how every tool in the Continuous Monitoring 2.0 stack contributes to the MTTD/MTTR metrics that define program effectiveness:\n- ISCM (Stage 1) establishes the baseline visibility without which MTTD can't be measured, Next-Gen SIEM (2) provides ML-enhanced detection cutting MTTD from weeks to hours, UEBA (3) catches insider threats signatures miss, NDR (4) gives network-layer visibility for encrypted C2, CSPM (5) prevents cloud misconfigurations that create attack paths, and Threat Intelligence (6) adds context that reduces false positives and aids attribution.\n- SOAR (7) drives MTTR from hours to minutes via automated response, Deception (8) provides zero-false-positive early warning for attackers who bypass every other layer, Zero Trust (9) generates the per-request access telemetry enabling precise MTTD, XDR (10) correlates signals across all sources into the unified incident view that enables rapid MTTR, Continuous Compliance (11) ensures controls don't drift between audits, and this stage — monitoring maturity — provides the measurement framework that proves the stack is working and drives continuous improvement.",
        ],
        codeExample: {
          label: "MTTD/MTTR metrics dashboard (Python — incident data aggregation)",
          code: `import statistics
from datetime import datetime
from typing import Sequence

def compute_mttd_mttr(incidents: list[dict]) -> dict:
    """
    Compute MTTD and MTTR from incident records.
    Each incident requires: breach_ts, detected_ts, contained_ts (ISO 8601).
    """
    mttd_hours: list[float] = []
    mttr_hours: list[float] = []

    for inc in incidents:
        breach = datetime.fromisoformat(inc["breach_ts"])
        detected = datetime.fromisoformat(inc["detected_ts"])
        contained = datetime.fromisoformat(inc["contained_ts"])

        mttd_hours.append((detected - breach).total_seconds() / 3600)
        mttr_hours.append((contained - detected).total_seconds() / 3600)

    def stats(values: list[float]) -> dict:
        return {
            "mean_hours": round(statistics.mean(values), 1),
            "median_hours": round(statistics.median(values), 1),
            "p90_hours": round(sorted(values)[int(len(values) * 0.9)], 1),
            "min_hours": round(min(values), 1),
            "max_hours": round(max(values), 1),
        }

    result = {
        "period": "Q4 2024",
        "incident_count": len(incidents),
        "mttd": stats(mttd_hours),
        "mttr": stats(mttr_hours),
        "benchmarks": {
            "industry_mttd_median_hours": 504,  # IBM 2023: 21 days
            "industry_mttr_median_hours": 1752, # IBM 2023: 73 days
            "target_mttd_hours": 24,
            "target_mttr_hours": 4,
        },
    }
    # Flag if regressing vs target
    result["mttd_status"] = "ON_TARGET" if result["mttd"]["mean_hours"] <= 24 else "NEEDS_IMPROVEMENT"
    result["mttr_status"] = "ON_TARGET" if result["mttr"]["mean_hours"] <= 4 else "NEEDS_IMPROVEMENT"
    return result`,
        },
      },
      incident: {
        title: "MGM Resorts Breach — MTTD/MTTR Failure (2023)",
        when: "September 11–13, 2023",
        where: "MGM Resorts International, Las Vegas",
        impact: "$100M+ operational losses; casino floor offline; 10-day recovery",
        body: [
          "The MGM Resorts breach began with a remarkably low-tech attack: a 10-minute social-engineering phone call to the MGM IT helpdesk:\n- The attacker — a member of the Scattered Spider group — found an MGM IT employee's LinkedIn profile and used the public information (name, employer, job title) to impersonate them, convincing the helpdesk agent to reset the account's credentials and disable MFA.\n- The attack required no malware, no zero-days, and no sophisticated technical capabilities — just social-engineering skills and a LinkedIn search.",
          "With valid credentials, Scattered Spider moved from MGM's Okta environment into its cloud infrastructure and deployed ransomware within hours:\n- They deployed ALPHV/BlackCat ransomware across MGM's systems, encrypting critical systems controlling casino slot machines, hotel digital room keys, restaurant reservations, and the website.\n- The casino floor went dark and guests couldn't use digital room keys — an immediate, publicly visible, and unusually transparent indicator of breach severity.",
          "MGM's MTTD was adequate in one sense but failed in the way that mattered:\n- The attack was detected quickly because the ransomware's impact was immediately obvious, so MTTD from social-engineering attack to detection was essentially the time for Scattered Spider to go from helpdesk reset to ransomware deployment — hours, not days.\n- The real failure was detecting the pre-ransomware intrusion phase: the unusual Okta activity, the credential reset from a helpdesk call that should have required additional verification, and the rapid access to new systems that should have triggered a UEBA alert.",
          "MGM's MTTR was catastrophic — full operational recovery took 10 days at an estimated cost exceeding $100M — and the incident reinforced three maturity imperatives:\n- The 10-day recovery reflects ransomware's specific challenge: recovery needs not just containment but complete rebuilding from verified-clean backups, staged restoration in dependency order, and testing before reconnecting to production (MGM did not pay the ransom; Caesars, hit by the same group in the same period, reportedly paid ~$15M).\n- The three imperatives: social-engineering resistance is a people-and-process control (helpdesk verification procedures must be continuously tested and trained, not just technical controls), MTTD for pre-ransomware activity (credential misuse, unusual cloud access) must be measured separately from MTTD for ransomware impact (by the time ransomware is obvious, the chance to prevent catastrophic damage has passed), and MTTR for ransomware requires tested, clean, staged backup restoration — organizations that have never practiced recovery discover during the incident that their backups are inadequate, incomplete, or compromised, so tabletop exercises and red team simulations testing the recovery workflow are now a standard Level 4–5 requirement.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Incident Data", sub: "breach, detect, contain timestamps", type: "attacker" },
          { label: "MTTD / MTTR Computation", sub: "rolling 90-day metrics", type: "system" },
          { label: "Maturity Scoring", sub: "Level 1–5 SOC model", type: "victim" },
          { label: "Program Improvement", sub: "gap analysis → investment plan", type: "result" },
        ],
      },
      timeline: [
        { year: 2012, event: "SANS SOC Survey — first industry-wide SOC maturity benchmarking" },
        { year: 2017, event: "IBM Cost of Data Breach Report establishes MTTD/MTTR as standard metrics", highlight: true },
        { year: 2020, event: "CREST SOC Maturity Model published — five-level framework for SOC assessment" },
        { year: 2023, event: "IBM 2023 report: median MTTD 21 days, MTTR 73 days — maturity gap quantified" },
        { year: 2023, event: "MGM Resorts breach: 10-day MTTR, $100M+ losses — maturity failure case study" },
        { year: 2024, event: "AI-augmented SOC targets: MTTD < 1 hour, MTTR < 30 minutes for automated playbooks" },
      ],
      keyTakeaways: [
        "MTTD and MTTR are the vital signs of a security program — track them on rolling 90-day windows",
        "Industry median MTTD: 21 days; industry median MTTR: 73 days — mature programs target < 24h / < 4h",
        "SOC Maturity Level 3 (Proactive) is the minimum target — Levels 1–2 are compliance-only reactive postures",
        "False positive rate > 5% degrades analyst effectiveness and masks real threats in noise",
        "SOAR automation coverage > 70% is needed to achieve sub-hour MTTR at scale",
        "AI-automated organizations achieve 49-day shorter breach lifecycles and $1.76M lower breach costs vs non-AI (IBM 2023)",
        "MTTD for pre-ransomware activity must be tracked separately — by the time ransomware is visible, MTTD has already failed",
        "MTTR for ransomware requires pre-tested clean backup restoration capabilities — discover gaps in tabletop exercises, not during incidents",
        "People, processes, and technology must all mature together — tool maturity without process maturity produces poor outcomes",
        "MCP servers (mcp-soc-metrics) enable AI-generated board reports from operational metrics, collapsing 3-4 hour reporting tasks to minutes",
      ],
      references: [
        { title: "IBM Cost of a Data Breach Report 2023", url: "https://www.ibm.com/reports/data-breach" },
        { title: "CREST SOC Maturity Model", url: "https://www.crest-approved.org/soc-maturity-assessment/" },
        { title: "MGM Resorts Breach SEC 8-K Filing", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000789570&type=8-K" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-cm12-q1", type: "Core Idea", challenge: "Measure to mature.", text: "What is a SOC maturity scorecard for?", options: ["Assessing and improving the SOC's detection/response capability over time","Counting employees","Setting salaries","Choosing a logo"], correctIndex: 0, explanation: "Maturity scoring drives targeted improvement of the SOC." },
        { id: "audit-cm12-q2", type: "Target Level", challenge: "The minimum bar.", text: "What's the minimum recommended SOC maturity target (CREST model)?", options: ["Level 3 (Proactive — threat hunting and behavioral detection)","Level 1 (Reactive — incident-driven)","Level 0","No target"], correctIndex: 0, explanation: "Proactive (L3) is the recommended enterprise minimum." },
        { id: "audit-cm12-q3", type: "False Positives", challenge: "Quality bar.", text: "Is a false-positive rate above 5% acceptable for a mature SOC?", options: ["No — high FP rates cause alert fatigue and missed real threats","Yes — analysts can handle it","Only on weekends","FP rate doesn't matter"], correctIndex: 0, explanation: "Low false-positive rates are a hallmark of maturity." },
        { id: "audit-cm12-q4", type: "Real Incident", challenge: "MGM 2023.", text: "Did the MGM 2023 breach show that faster tools alone would have fully prevented the $100M loss?", options: ["No — it's not purely a technical/MTTD problem; process and response maturity matter too","Yes, tools alone fix it","It had no impact","Tools are irrelevant"], correctIndex: 0, explanation: "Detection speed helps, but process/response maturity is equally vital." },
        { id: "audit-cm12-q5", type: "Automation Target", challenge: "Coverage for speed.", text: "What SOAR automation coverage is needed for sub-hour MTTR at scale?", options: ["Greater than 70% of alert types covered by automated playbooks","About 20%","0% — keep it manual","It doesn't depend on automation"], correctIndex: 0, explanation: "High automation coverage is what enables fast response at scale." },
        { id: "audit-cm12-q6", type: "Metrics", challenge: "MTTD vs MTTR.", text: "Which pair of metrics best gauges SOC effectiveness?", options: ["MTTD (time to detect) and MTTR (time to respond)","Lines of code and uptime","Headcount and budget only","Page views"], correctIndex: 0, explanation: "Detection and response times are the core SOC performance metrics." },
        { id: "audit-cm12-q7", type: "Concept", challenge: "Mature = proactive.", text: "Moving from reactive to mature means…", options: ["Proactive threat hunting and behavioral detection, low FP rates, high automation","Waiting for incidents","Disabling alerts","Fewer metrics"], correctIndex: 0, explanation: "Maturity is proactive, low-noise, and highly automated." },
        { id: "audit-cm12-q8", type: "Capstone", challenge: "Tie it together.", text: "The continuous-monitoring epoch's thesis is…", options: ["Mature security is continuous, automated, and measured — not periodic and manual","Annual manual audits suffice","Detection doesn't matter","Tools replace strategy"], correctIndex: 0, explanation: "Continuous, automated, measured monitoring is the modern standard." },
      ],
    },
    ctf: {
      scenario: "A SOC maturity assessment completed overnight. The results are stored across three report files: the MTTD/MTTR metrics, the maturity level assessment, and the program improvement roadmap. Read all three to collect the final flag of the Continuous Monitoring 2.0 epoch.",
      hint: "The maturity assessment stores metrics/, maturity/, and roadmap/ in separate directories.",
      hints: [
        "List /soc-maturity to find the assessment output directories.",
        "Read the files in metrics/, maturity/, and roadmap/ in that order.",
        "The final flag fragment is in the roadmap file — it represents the culmination of the full monitoring program.",
      ],
      files: {
        "/soc-maturity/metrics/mttd-mttr-q4-2024.json": `{
  "period": "Q4 2024",
  "incident_count": 47,
  "mttd": {
    "mean_hours": 18.4,
    "median_hours": 11.2,
    "p90_hours": 44.1,
    "min_hours": 0.08,
    "max_hours": 312.0
  },
  "mttr": {
    "mean_hours": 3.2,
    "median_hours": 1.8,
    "p90_hours": 8.4,
    "min_hours": 0.02,
    "max_hours": 96.0
  },
  "benchmarks": {
    "industry_mttd_median_hours": 504,
    "industry_mttr_median_hours": 1752,
    "target_mttd_hours": 24,
    "target_mttr_hours": 4
  },
  "mttd_status": "ON_TARGET",
  "mttr_status": "ON_TARGET",
  "false_positive_rate_pct": 3.2,
  "soar_automation_coverage_pct": 74,
  "flag_fragment": "FLAG{M4TUR1TY_"
}`,
        "/soc-maturity/maturity/level-assessment.json": `{
  "assessment_date": "2024-01-15",
  "framework": "CREST SOC Maturity Model",
  "current_level": 4,
  "level_name": "Threat Intelligence-Led",
  "criteria_met": [
    "Level 1: Reactive incident response — PASS",
    "Level 2: Compliance monitoring (SOC2, PCI, FedRAMP) — PASS",
    "Level 3: Proactive detection — UEBA, NDR, CSPM deployed — PASS",
    "Level 4: Threat intel integration — STIX/TAXII feeds, TTP mapping — PASS"
  ],
  "criteria_not_met": [
    "Level 5: Adaptive — AI-augmented continuous improvement not yet deployed"
  ],
  "target_level": 5,
  "gap_to_target": "Deploy AI-augmented triage; establish continuous improvement feedback loop",
  "flag_fragment": "M3TR1CS_"
}`,
        "/soc-maturity/roadmap/improvement-roadmap.txt": `# SOC Maturity Improvement Roadmap — FY2025

Current State: Level 4 (Threat Intelligence-Led)
Target State:  Level 5 (Adaptive)
Timeline:      Q1 2025 – Q4 2025

## Q1 2025 — AI-Augmented Alert Triage
- Deploy LLM-based alert summarization (target: reduce analyst triage time 40%)
- Implement automated MITRE ATT&CK technique tagging on all alerts
- Milestone metric: MTTD < 8 hours average

## Q2 2025 — Continuous Improvement Feedback Loop
- Establish weekly SOC metrics review (MTTD, MTTR, FP rate trend)
- Deploy red team / purple team exercise program (monthly)
- Milestone metric: False positive rate < 2%

## Q3 2025 — Adversary Simulation Integration
- Integrate BAS (Breach and Attack Simulation) with detection validation
- Automate detection gap identification from purple team exercises
- Milestone metric: SOAR automation coverage > 85%

## Q4 2025 — Level 5 Certification
- CREST SOC Maturity Level 5 assessment
- Publish internal SOC scorecard to board
- Milestone metric: MTTD < 4 hours, MTTR < 1 hour

─────────────────────────────────────────────────────────────────────
WHAT YOU'VE LEARNED IN THIS EPOCH:
  You've mastered the full Continuous Monitoring 2.0 stack:
  ISCM frameworks → Next-Gen SIEM → UEBA → NDR → CSPM →
  Threat Intel → SOAR → Deception → Zero Trust → XDR →
  Continuous Compliance → and finally: Monitoring Maturity.

  The best SOC is not the one with the most tools —
  it is the one that knows exactly how effective it is
  and improves continuously.
─────────────────────────────────────────────────────────────────────

flag_fragment: S0C_L3V3L5}"`,
        "/soc-maturity/README.md": `# SOC Maturity Assessment — Q4 2024

Assessor: Internal GRC Team + CREST Certified Assessor
Assessment date: 2024-01-15
Current level: 4 (Threat Intelligence-Led)
Target level: 5 (Adaptive)

Assessment components:
  metrics/   → MTTD, MTTR, and operational metrics (Q4 2024)
  maturity/  → Level assessment and criteria evaluation
  roadmap/   → FY2025 improvement roadmap to Level 5`,
      },
      dirs: {
        "/": [{ name: "soc-maturity", isDir: true }],
        "/soc-maturity": [
          { name: "README.md", isDir: false },
          { name: "metrics", isDir: true },
          { name: "maturity", isDir: true },
          { name: "roadmap", isDir: true },
        ],
        "/soc-maturity/metrics": [{ name: "mttd-mttr-q4-2024.json", isDir: false }],
        "/soc-maturity/maturity": [{ name: "level-assessment.json", isDir: false }],
        "/soc-maturity/roadmap": [{ name: "improvement-roadmap.txt", isDir: false }],
      },
      fragments: [
        { trigger: "/soc-maturity/metrics/mttd-mttr-q4-2024.json", value: "FLAG{M4TUR1TY_", label: "Fragment A — Metrics" },
        { trigger: "/soc-maturity/maturity/level-assessment.json", value: "M3TR1CS_", label: "Fragment B — Level" },
        { trigger: "/soc-maturity/roadmap/improvement-roadmap.txt", value: "S0C_L3V3L5}", label: "Fragment C — Roadmap" },
      ],
    },
  },
];
