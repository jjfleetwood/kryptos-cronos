# Continuous Monitoring via AI Agents
## An Advisory for the Chief Audit Executive

**May 2026 — Confidential**

---

## The Structural Problem with Point-in-Time Auditing

Traditional IT audit operates on an annual or semi-annual cycle. Your team selects a sample, reviews configurations at a point in time, concludes the control either worked or did not, and issues a finding. The organization remediates, closes the ticket, and the cycle begins again.

This model has never matched the threat environment. It matches the capacity constraints of a manual audit function. Those constraints no longer apply.

In 2015, attackers maintained persistent access inside the Office of Personnel Management for **fourteen months** before detection. OPM's Inspector General had issued repeated warnings about the absence of a continuous monitoring program. The breach, which exposed 21.5 million security clearance records, is the canonical example of what a visibility gap costs. Not a vulnerability — a gap in continuous oversight. The kind of oversight an audit function is responsible for providing assurance on.

The OPM dwell time was not unusual. The SolarWinds SUNBURST campaign ran undetected across 18,000 organizations for over a year. The MGM Resorts ransomware incident, which resulted in more than $100 million in losses, followed a social engineering breach that moved laterally through an environment where detection capability was inadequate. In each case, the attacker's advantage was time — time that continuous monitoring is specifically designed to eliminate.

This paper describes what a mature continuous monitoring program looks like in 2026, built in two layers: the AI-agent layer that automates audit procedures continuously, and the detection stack that provides real-time visibility into threat activity.

---

## Layer 1 — Agentic Continuous Monitoring (CM 1.0)

The first layer replaces periodic manual audit procedures with AI agents that execute the same procedures continuously, against every resource, on a scheduled or event-driven basis.

### What an Audit Agent Does

An audit agent is a program that gives a large language model the ability to call real systems — read files, query APIs, check configurations — and reason over the results to produce structured findings. The agent is not guessing from training data. It is operating tools against live environments.

A well-designed audit agent for cloud environments runs tools like these on a continuous schedule:

- `check_s3_public_access` — inspect every S3 bucket's public access block configuration against the approved baseline
- `check_iam_policy` — analyze IAM role documents for overly permissive statements (Action:*, Resource:*)
- `list_security_groups` — enumerate inbound rules and flag any that expose ports to 0.0.0.0/0 outside of approved services
- `scan_repo_for_secrets` — check git history, CI/CD pipeline configs, and infrastructure-as-code for embedded credentials

The Capital One breach (2019, $190M settlement, 106 million customer records) succeeded because a misconfigured WAF allowed SSRF requests to the EC2 metadata service, leaking IAM credentials. The misconfiguration existed for months before exploitation. An agent polling WAF configurations against a known-good baseline would have flagged the deviation within hours of introduction. Manual quarterly review did not.

### API Surface Monitoring

Organizations routinely have 40–60% more API endpoints in production than their official API inventory documents. Shadow APIs, legacy versions left running after migrations, and undocumented internal endpoints accumulate faster than any manual documentation process can track.

An agentic API enumeration agent runs continuously: it fetches the official OpenAPI specification, compares it against the live API gateway route table, and flags undocumented endpoints for review. It also detects auth regressions — cases where a new API version drops authentication requirements that the prior version enforced.

Peloton's 2021 data exposure is illustrative. A security researcher discovered that `/stats/v2/workouts` returned full user profile data — age, gender, city, workout history — without authentication, while `/stats/v1/workouts` required a valid token. The v2 endpoint was not in Peloton's API inventory. An enumeration agent running weekly would have flagged it within days of deployment.

### AI-Powered Secrets Detection

Regex-based secrets scanners (truffleHog, Gitleaks, detect-secrets) catch known credential formats — AWS key prefixes, GitHub token patterns, PEM headers. They do not catch obfuscated credentials, credentials in operational scripts outside of the main git repository, or custom internal token formats where the value looks like random text.

The two-phase approach combines regex speed with AI judgment: the regex scanner flags all pattern matches and high-entropy strings for review; a Claude classifier then evaluates each candidate against its surrounding code context, file path, and variable name to distinguish `confirmed_secret` from `likely_placeholder` from `false_positive`. In practice this reduces analyst review burden by over 80%.

The 2022 Uber breach is the reference case. The attacker, after an MFA fatigue attack, moved laterally by finding hardcoded credentials in PowerShell operational scripts stored on a network share — not in the main git repositories that conventional scanners covered. Semantic context analysis would have flagged `$uberProdKey` and `$awsToken` variable names as credential-indicative even without a known format match.

### The Agentic Audit Loop

The agent architecture that makes all of this work is consistent across use cases:

1. User instruction or scheduled trigger initiates the audit task
2. The agent calls tools against real systems in a sequence it determines
3. Each tool returns structured results
4. The agent reasons over results, calls additional tools as needed
5. The agent produces a structured findings report with severity ratings and recommended actions

The key governance point for audit leadership: the agent decides *what* to test; the tool implementations enforce the *rules of engagement* — rate limits, scope constraints, excluded paths. The agent cannot exceed the permissions encoded in its tools. This separation of reasoning (LLM) from permission boundary enforcement (code) is the correct architecture for audit automation.

---

## Layer 2 — The Detection Stack (CM 2.0)

The second layer is the real-time detection and response capability that the agent layer feeds into and that provides independent visibility into threat activity. NIST Special Publication 800-137 defines Information Security Continuous Monitoring as maintaining ongoing awareness of information security, vulnerabilities, and threats to support organizational risk management decisions. The detection stack is how that awareness is maintained operationally.

### SIEM: From Signatures to Machine Learning

Traditional SIEM platforms (Splunk, QRadar, ArcSight) operate on signature-based detection: correlation rules that match known attack patterns. This works for commodity malware. It fails for novel techniques, living-off-the-land attacks, and slow-burn APT campaigns that stay below individual rule thresholds.

The SolarWinds SUNBURST attack (2020, 18,000+ organizations, including nine US federal agencies) was specifically designed to evade signature detection. The malware mimicked legitimate SolarWinds traffic, used existing network paths, and remained dormant for 12–14 days after installation before activating. It was not detected by any SIEM correlation rule. FireEye discovered it through a human analyst noticing an unusual MFA device registration — a behavioral anomaly that a next-generation SIEM with machine learning would have flagged automatically.

Next-generation SIEM platforms (Microsoft Sentinel, Google Chronicle, Elastic SIEM) augment rule-based detection with ML: unsupervised anomaly detection, supervised classifiers trained on labeled attack data, and graph-based entity resolution. They normalize all data to a common schema (OCSF — Open Cybersecurity Schema Framework) at ingest, enabling a single detection rule to match across dozens of data sources simultaneously.

**What the CAE should assess:** Does the organization's SIEM use ML-based detection in addition to signature rules? What is the ML model retraining cadence? What is the false positive rate, and what MTTR target is being measured against?

### UEBA: Detecting What Valid Credentials Cannot Hide

User and Entity Behavior Analytics addresses the problem that signature-based security cannot solve: once an attacker has valid credentials, they appear legitimate to traditional controls. UEBA builds statistical baselines of normal behavior for every user and entity — typical working hours, usual geographic locations, normal data access volumes, peer group behavior patterns — and flags deviations.

The critical concept is risk score chaining. No single anomaly triggers an alert. Instead, multiple low-confidence signals compound into a high-confidence finding. In 2023, two Tesla employees exfiltrated over 100GB of data including 75,735 employee records before resigning. UEBA would have chained: large file downloads from HR systems (moderate risk), USB device activity outside normal patterns (moderate), email forwarding to personal addresses (moderate), access to repositories outside their normal job function (moderate). The chained risk score would have crossed a CRITICAL threshold well before the data reached a journalist.

The strongest UEBA use case is insider threat — employees with legitimate access whose behavior changes. The second strongest is credential compromise — external attackers using stolen valid credentials who behave differently from the account's baseline.

**What the CAE should assess:** Does the organization's UEBA program have a documented baseline period (typically 30–90 days minimum before detection accuracy is reliable)? Is risk score chaining configured, or does it alert only on individual anomalies?

### NDR: Network Visibility Independent of Endpoints

Network Detection and Response provides security visibility at the network layer, independent of endpoint agents. Where EDR requires an agent on every managed device, NDR passively observes all traffic traversing monitored network segments — including IoT devices, OT systems, and unmanaged assets that cannot run agents.

The signature capability of NDR is C2 beaconing detection. Malware that communicates with its operator on a schedule creates a distinctive pattern in NetFlow data: high-frequency connections to a single external IP with consistent inter-arrival timing and small, uniform payload sizes. This pattern is detectable even in encrypted channels — TLS metadata (certificate fields, JA3 fingerprints, connection frequency) provides enough signal for classification without decrypting the payload.

When the Hafnium group exploited four Microsoft Exchange zero-days (ProxyLogon, 2021), initial exploitation was via legitimate HTTPS — indistinguishable from normal traffic by signature detection. NDR platforms detected the attacks through behavioral anomalies: Exchange servers initiating external connections, which is a fundamental behavioral deviation from their expected network role.

**What the CAE should assess:** Is NDR coverage complete for all network segments, or are there blind spots (OT networks, guest WiFi, cloud VPC ingress/egress)? Is C2 beaconing detection enabled, or only signature-based detection?

### CSPM: Cloud Misconfiguration as the Primary Attack Vector

Cloud Security Posture Management continuously monitors cloud infrastructure configurations against security benchmarks (CIS AWS Foundations, NIST 800-53, PCI-DSS, SOC 2) and flags deviations in real time. Misconfiguration accounts for more than 80% of cloud breaches — not software vulnerabilities, but configuration errors: public S3 buckets, over-permissive IAM roles, unencrypted databases, security groups open to 0.0.0.0/0.

The Capital One breach chain demonstrates why attack path analysis matters more than single-resource checks: a public EC2 instance (one finding) with an over-permissive IAM role (a second finding) that had read access to 700+ S3 buckets containing customer PII (the impact). Neither finding alone would have been rated CRITICAL by a single-resource scanner. The three-hop chain — internet to SSRF-vulnerable EC2, to metadata service credential leak, to unrestricted S3 access — is what CSPM attack path analysis surfaces.

**What the CAE should assess:** Does the organization use CSPM with attack path analysis, or only individual resource checks? What is the mean time from misconfiguration introduction to detection and remediation?

### SOAR: Automation Is Not Optional at Scale

A SOC generating 10,000 alerts per day with 99% false positives still produces 100 real incidents that require human review. At 15 minutes of analyst time per alert, 10,000 alerts equals 2,500 analyst-hours per day — an impossible staffing requirement. SOAR (Security Orchestration, Automation, and Response) automates the investigation and response playbooks that analysts would otherwise execute manually.

A phishing triage playbook that takes a human analyst 45 minutes — extract indicators, look up reputation, check endpoint isolation status, determine scope — takes a SOAR automation 30 seconds. The 2022 Twilio cascade breach, which compromised 125 downstream organizations, moved faster than manual response processes could contain. Organizations with SOAR automation containing an account isolation playbook had material advantage in limiting blast radius.

**What the CAE should assess:** What percentage of the alert backlog is handled by automated SOAR playbooks? Do playbooks include human-in-the-loop gates for high-impact actions (account suspension, endpoint isolation)?

### SOC Maturity: MTTD and MTTR as Audit Evidence

The ultimate measure of a continuous monitoring program is two metrics: Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR). MTTD measures the gap between when an attacker first gains a foothold and when the SOC is aware of it. MTTR measures the gap between detection and containment.

Industry benchmarks (IBM Cost of a Data Breach Report, 2025): MTTD median is 194 days. MTTR median is 64 days. Organizations with full continuous monitoring capability — SIEM + UEBA + NDR + CSPM + SOAR — achieve MTTD under 30 days and MTTR under 7 days.

The MGM Resorts ransomware incident (2023, $100M+ in losses) began with a social engineering call to the IT help desk. The lateral movement and ransomware deployment that followed happened over a period where detection and response capability was inadequate to contain it at the point of initial access. MTTD and MTTR for that incident were measured in days, not hours.

**What the CAE should report to the audit committee:** The organization's current MTTD and MTTR targets, actual performance against those targets, and the trend over the prior four quarters.

---

## The Integration: What a Mature Program Looks Like

A mature continuous monitoring program integrates both layers:

**Layer 1 (Agentic)** runs continuous audit procedures that replace manual point-in-time checks. Cloud configuration baseline verification, secrets scanning across all repositories and CI/CD pipelines, API surface enumeration, and IAM policy analysis run on scheduled cadences — daily for high-risk controls, weekly for moderate-risk. Findings feed directly into the risk register and ticketing system.

**Layer 2 (Detection stack)** provides real-time visibility into threat activity independent of the audit schedule. SIEM correlation and ML detection, UEBA behavioral baselines, NDR network monitoring, and CSPM cloud posture monitoring run continuously. SOAR automation handles initial triage and low-complexity response. MTTD and MTTR are measured and reported.

**Threat intelligence** (STIX/TAXII from sector ISACs and CISA's Automated Indicator Sharing feed) enriches every alert from both layers with context about known attacker infrastructure and TTPs. When an alert fires on a connection to IP 185.220.101.45, the Volt Typhoon attribution and Tor exit node classification are surfaced automatically — not after a separate analyst lookup.

**Continuous compliance monitoring** produces audit evidence in real time. Instead of assembling compliance evidence annually during audit season, the system maintains a continuously updated control status against frameworks (NIST CSF, SOC 2, ISO 27001). The FTC's 2023 action against Drizly, which established personal liability for the CEO over inadequate security controls, underscores that compliance monitoring is no longer solely an audit function concern — it is a governance obligation with personal liability consequences for executives.

---

## What the CAE Should Ask

1. **ISCM program structure** — Does the organization have a documented ISCM program per NIST SP 800-137? Are monitoring frequencies tied to FIPS 199 impact levels (continuous for high-impact systems, daily for moderate, weekly for low)?

2. **Detection capability** — Is the SIEM ML-enhanced or signature-only? Is UEBA deployed with peer group baselining? Is NDR coverage complete for all network segments?

3. **Cloud posture** — Is CSPM deployed with attack path analysis? What is the mean time from misconfiguration detection to remediation?

4. **Automation depth** — What percentage of alert triage is automated via SOAR? What is the human escalation rate?

5. **Performance metrics** — What are the current MTTD and MTTR figures? What are the targets? What is the trend?

6. **Agentic audit coverage** — Are continuous automated checks running against cloud configurations, API surfaces, and credential stores, or is coverage still primarily point-in-time?

7. **Threat intelligence** — Is the organization subscribed to its sector ISAC and CISA AIS? Are threat intelligence feeds enriching SIEM alerts automatically?

---

## Conclusion

Point-in-time auditing of security controls in a threat environment that operates continuously is a structural mismatch. The technology to close that gap exists and is in production at organizations that have made the investment. The OPM breach (14-month dwell time), SolarWinds (14-month undetected campaign), and MGM Resorts ($100M+ loss) are not anomalies — they are predictable outcomes in environments where monitoring capability lags the threat.

The CAE's mandate is to provide the board and audit committee with independent assurance that controls are operating effectively. In 2026, that mandate requires assurance over continuous monitoring programs — which means understanding what a mature program looks like, what each layer is designed to detect, and what the evidence of effectiveness is. MTTD and MTTR are that evidence. The questions in the prior section are the starting point for getting it.
