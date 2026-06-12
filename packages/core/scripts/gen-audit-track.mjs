// Generator for the Advanced Audit track. Reads the domain → sub-process table
// (domlist.txt), and for every sub-process emits a full StageConfig module on the
// Module-01 template (briefing + agentic-workflow technical section + incident +
// diagram + timeline + takeaways + references + downloads, a CTF whose fragments
// assemble a finding flag, a 10-question quiz, and an auditMeta card), plus a
// runnable read-only Python MCP server per module. Application Review module 01 is
// hand-authored (audit-application-review.ts) and skipped here.
//
//   node packages/core/scripts/gen-audit-track.mjs
//
// Outputs:
//   packages/core/src/audit-generated/<slug>.ts        (epoch + stages, JSON-clean)
//   packages/core/src/audit-flags.generated.ts         (stageId -> flag map)
//   packages/core/src/audit-registry.ts                (rewired to import all)
//   apps/web/public/audit-code/<slug>/NN_<sub>.py      (runnable MCP per module)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CORE = path.resolve(__dirname, "..");
const REPO = path.resolve(CORE, "..", "..");
const SRC = path.join(CORE, "src");
const GENDIR = path.join(SRC, "audit-generated");
const PUBCODE = path.join(REPO, "apps", "web", "public", "audit-code");

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const abbr = (s) => {
  const stop = new Set(["and", "the", "of", "for", "to", "in", "a", "an", "with", "incl", "via"]);
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(/\s+/)
    .filter((w) => w && !stop.has(w)).slice(0, 3).join("_") || "control";
};
const pad2 = (n) => String(n).padStart(2, "0");

// ── Per-domain metadata: slug, prefix, emoji, color, typical systems & owners,
//    standards references, and a representative incident anchor. ───────────────
const D = {
  "Application Review": { slug: "application-review", prefix: "aar", emoji: "🔎", color: "Violet", skipFirst: 1,
    systems: ["ServiceNow CMDB", "Okta / Entra SSO", "AWS / Azure cloud plane", "App configuration stores"],
    owners: ["Application owners", "Identity & Access Management", "Cloud Platform / FinOps", "AppSec"],
    refs: [["OWASP Application Security Verification Standard (ASVS)", "https://owasp.org/www-project-application-security-verification-standard/"], ["NIST SP 800-53 — SA/CM families", "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"]],
    incident: { title: "When an unreviewed application became the breach", when: "Recurring (representative)", where: "Enterprise application estates", impact: "An application weakness that an application review would have caught becomes the entry point for a full compromise.", body: ["Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.", "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."], anchorYear: 2017, anchorEvent: "Equifax: unpatched internet-facing app — an application-control failure at root", secondYear: 2021, secondEvent: "OWASP Top 10 refresh foregrounds broken access control + insecure design" } },
  "Build Env / CI/CD": { slug: "build-cicd", prefix: "bcd", emoji: "🏗️", color: "Indigo",
    systems: ["GitHub Actions / GitLab CI / Jenkins", "Container registry (ECR/GHCR)", "Kubernetes / orchestration", "Artifact + SBOM store"],
    owners: ["Platform / DevOps engineering", "Release engineering", "AppSec", "Cloud Platform"],
    refs: [["SLSA — Supply-chain Levels for Software Artifacts", "https://slsa.dev/"], ["CIS Software Supply Chain Security Guide", "https://www.cisecurity.org/insights/white-papers/cis-software-supply-chain-security-guide"], ["NIST SP 800-204D — CI/CD security", "https://csrc.nist.gov/pubs/sp/800/204/d/final"]],
    incident: { title: "SolarWinds: the build system as the attack surface", when: "2020", where: "SolarWinds Orion build pipeline", impact: "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.", body: ["The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.", "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."], anchorYear: 2020, anchorEvent: "SolarWinds SUNBURST — build-time injection into a signed update", secondYear: 2021, secondEvent: "Codecov bash-uploader compromise exposes CI secrets at scale" } },
  "Repository Mgmt": { slug: "repository-mgmt", prefix: "repo", emoji: "🗂️", color: "Blue",
    systems: ["GitHub / GitLab / Bitbucket", "Branch protection + CODEOWNERS", "SCM audit log", "Secret scanning service"],
    owners: ["Engineering org owners", "Repo / org admins", "AppSec", "Developer platform team"],
    refs: [["OWASP SCM Security Best Practices", "https://owasp.org/www-project-devsecops-guideline/"], ["GitHub — securing your organization", "https://docs.github.com/en/organizations/keeping-your-organization-secure"], ["NIST SSDF (SP 800-218) — PO/PS", "https://csrc.nist.gov/pubs/sp/800/218/final"]],
    incident: { title: "Leaked tokens and unprotected branches", when: "Recurring", where: "Source-control platforms", impact: "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.", body: ["Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.", "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."], anchorYear: 2022, anchorEvent: "OAuth-token theft (Heroku/Travis) used to clone private repos", secondYear: 2023, secondEvent: "Mass secret-in-repo exposure drives push-protection adoption" } },
  "Crypto Key & Secrets": { slug: "crypto-secrets", prefix: "cks", emoji: "🔐", color: "Amber",
    systems: ["HashiCorp Vault / AWS KMS / Azure Key Vault", "HSM (PKCS#11)", "Certificate authority / ACME", "Secret-scanning service"],
    owners: ["PKI / Crypto team", "Platform security", "Application owners", "Cloud Platform"],
    refs: [["NIST SP 800-57 — Key Management", "https://csrc.nist.gov/projects/key-management"], ["OWASP Secrets Management Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"], ["NIST SP 800-131A — crypto transitions", "https://csrc.nist.gov/pubs/sp/800/131/a/r2/final"]],
    incident: { title: "The key that never rotated", when: "Recurring", where: "Key & secret stores", impact: "A static, over-shared, or expired key undermines every control built on top of it — encryption, signing, and authentication all fail quietly.", body: ["Key and secret findings are high-impact because they are load-bearing: a hardcoded secret, a key past its crypto-period, or an unmonitored HSM defeats the controls that depend on it.", "Auditors verify the full lifecycle — generation, storage, rotation, revocation, destruction — and that no secret lives in source or config in cleartext."], anchorYear: 2021, anchorEvent: "Codecov: stolen CI credentials harvested from environment", secondYear: 2023, secondEvent: "Storm-0558: a stolen signing key forged tokens across tenants" } },
  "Secure Software Dev": { slug: "secure-sdlc", prefix: "ssd", emoji: "🛡️", color: "Emerald",
    systems: ["SAST / DAST / SCA tooling", "Issue tracker (Jira)", "CI security gates", "Threat-model + design records"],
    owners: ["Product engineering", "AppSec / Security champions", "QA", "Engineering leadership"],
    refs: [["NIST SSDF — SP 800-218", "https://csrc.nist.gov/pubs/sp/800/218/final"], ["OWASP SAMM", "https://owaspsamm.org/"], ["BSIMM", "https://www.bsimm.com/"]],
    incident: { title: "Insecure design ships to production", when: "Recurring", where: "Software delivery lifecycles", impact: "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.", body: ["When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.", "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."], anchorYear: 2021, anchorEvent: "Log4Shell: a dependency flaw becomes everyone's incident", secondYear: 2021, secondEvent: "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components" } },
  "IaC": { slug: "iac", prefix: "iac", emoji: "📜", color: "Cyan",
    systems: ["Terraform / CloudFormation / Bicep", "Policy-as-code (OPA / Sentinel)", "IaC scanners (tfsec/Checkov)", "GitOps controller (Argo/Flux)"],
    owners: ["Platform / Cloud engineering", "SRE", "Security engineering", "FinOps"],
    refs: [["CIS Benchmarks", "https://www.cisecurity.org/cis-benchmarks"], ["OWASP IaC Security", "https://owasp.org/www-project-devsecops-guideline/"], ["NIST SP 800-204D", "https://csrc.nist.gov/pubs/sp/800/204/d/final"]],
    incident: { title: "One misconfigured template, many exposed resources", when: "Recurring", where: "Cloud estates managed by IaC", impact: "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.", body: ["IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.", "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."], anchorYear: 2019, anchorEvent: "Capital One: an SSRF + over-permissive role exposes 100M records", secondYear: 2022, secondEvent: "Public-bucket misconfigurations remain the top cloud exposure class" } },
  "Cloud Platform & SaaS": { slug: "cloud-saas", prefix: "cld", emoji: "☁️", color: "Sky",
    systems: ["AWS / Azure / GCP control plane", "CSPM (Wiz / Prisma / Defender)", "SaaS admin consoles (M365/Salesforce)", "Cloud audit logs (CloudTrail)"],
    owners: ["Cloud Platform team", "SaaS application owners", "Cloud security", "IAM"],
    refs: [["CIS Cloud Foundations Benchmarks", "https://www.cisecurity.org/benchmark/amazon_web_services"], ["Cloud Security Alliance CCM", "https://cloudsecurityalliance.org/research/cloud-controls-matrix"], ["NIST SP 800-210 — cloud access control", "https://csrc.nist.gov/pubs/sp/800/210/final"]],
    incident: { title: "Capital One: a cloud misconfiguration at scale", when: "2019", where: "AWS-hosted banking application", impact: "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.", body: ["The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.", "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."], anchorYear: 2019, anchorEvent: "Capital One — SSRF + over-privileged role, 100M records", secondYear: 2023, secondEvent: "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector" } },
  "Vuln & Patch Mgmt": { slug: "vuln-patch", prefix: "vpm", emoji: "🩹", color: "Rose",
    systems: ["Vuln scanner (Tenable/Qualys/Rapid7)", "Patch management (SCCM/Intune/Ansible)", "CMDB / asset inventory", "CISA KEV feed"],
    owners: ["IT Operations", "Server / endpoint owners", "Security operations", "Risk management"],
    refs: [["CISA Known Exploited Vulnerabilities", "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"], ["NIST SP 800-40 — Patch Management", "https://csrc.nist.gov/pubs/sp/800/40/r4/final"], ["CIS Control 7 — Continuous Vulnerability Mgmt", "https://www.cisecurity.org/controls"]],
    incident: { title: "A known, patchable CVE left open", when: "2017", where: "Internet-facing enterprise application", impact: "A critical vulnerability with an available patch went unremediated within the exposure window and was exploited.", body: ["The dominant breach root cause is not zero-days but known, patchable vulnerabilities left open past a reasonable SLA — Equifax's Struts CVE is the textbook case.", "Auditors test that vulnerabilities are discovered, prioritized (KEV/EPSS-aware), remediated within SLA, and that exceptions are risk-accepted and time-boxed."], anchorYear: 2017, anchorEvent: "Equifax: unpatched CVE-2017-5638 exploited", secondYear: 2021, secondEvent: "CISA BOD 22-01 mandates KEV remediation timelines" } },
  "Data Protection & Privacy": { slug: "data-privacy", prefix: "dpp", emoji: "🔏", color: "Teal",
    systems: ["DLP (Purview / Symantec)", "Data classification + catalog", "KMS / encryption services", "Backup + retention platform"],
    owners: ["Data Protection Officer / Privacy", "Data owners / stewards", "Security engineering", "Legal & Compliance"],
    refs: [["NIST Privacy Framework", "https://www.nist.gov/privacy-framework"], ["GDPR (EU 2016/679)", "https://gdpr-info.eu/"], ["ISO/IEC 27701 — Privacy Information Management", "https://www.iso.org/standard/71670.html"]],
    incident: { title: "Sensitive data, unencrypted and over-retained", when: "Recurring", where: "Data stores across the estate", impact: "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.", body: ["Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.", "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."], anchorYear: 2018, anchorEvent: "GDPR enforcement begins — retention + minimization become auditable", secondYear: 2023, secondEvent: "Record privacy fines for over-retention and unlawful transfers" } },
  "Datacenter / Lab / CoLo": { slug: "datacenter", prefix: "dcr", emoji: "🏢", color: "Stone",
    systems: ["Badge / PACS access system", "Environmental + power monitoring (DCIM)", "Asset / rack inventory", "Vendor / maintenance ticketing"],
    owners: ["Facilities / Datacenter operations", "Physical security", "IT asset management", "Vendor management"],
    refs: [["ANSI/TIA-942 — Data Center standard", "https://tiaonline.org/products-and-services/tia942certification/"], ["Uptime Institute Tier Standard", "https://uptimeinstitute.com/tiers"], ["NIST SP 800-53 — PE Physical & Environmental", "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"]],
    incident: { title: "Physical access and environmental failure", when: "Recurring", where: "Datacenters / labs / colocation", impact: "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.", body: ["The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.", "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."], anchorYear: 2021, anchorEvent: "OVHcloud Strasbourg fire — facility resilience as a continuity risk", secondYear: 2022, secondEvent: "Datacenter cooling failures cause regional cloud outages in heatwaves" } },
  "Endpoint Devices": { slug: "endpoint", prefix: "ept", emoji: "💻", color: "Lime",
    systems: ["MDM / UEM (Intune / Jamf)", "EDR (CrowdStrike / Defender / SentinelOne)", "Disk-encryption manager (BitLocker/FileVault)", "Endpoint inventory / NAC"],
    owners: ["End-user computing / IT", "Security operations", "Identity & Access Management", "Asset management"],
    refs: [["CIS Control 1/4/10 — assets, config, malware", "https://www.cisecurity.org/controls"], ["NIST SP 800-46 — telework/endpoint", "https://csrc.nist.gov/pubs/sp/800/46/r2/final"], ["NIST SP 800-128 — secure configuration", "https://csrc.nist.gov/pubs/sp/800/128/final"]],
    incident: { title: "The unmanaged laptop on the network", when: "Recurring", where: "Corporate endpoint fleets", impact: "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.", body: ["Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.", "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."], anchorYear: 2017, anchorEvent: "WannaCry/NotPetya: unpatched endpoints spread worms globally", secondYear: 2023, secondEvent: "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access" } },
  "Network Security": { slug: "network-security", prefix: "net", emoji: "🌐", color: "Blue",
    systems: ["Next-gen firewalls (Palo Alto/Fortinet)", "Network segmentation / microsegmentation", "ZTNA / VPN gateways", "NDR + flow logs"],
    owners: ["Network engineering", "Network security", "Security operations", "Cloud Platform"],
    refs: [["NIST SP 800-207 — Zero Trust Architecture", "https://csrc.nist.gov/pubs/sp/800/207/final"], ["CIS Control 12 — Network Infrastructure", "https://www.cisecurity.org/controls"], ["NIST SP 800-41 — Firewall policy", "https://csrc.nist.gov/pubs/sp/800/41/r1/final"]],
    incident: { title: "Flat network, fast spread", when: "2013", where: "Retail enterprise network", impact: "Weak segmentation let an intrusion that began in a low-value zone reach payment systems.", body: ["Target's breach started through an HVAC vendor and spread because the network wasn't segmented to keep that foothold away from card systems.", "Auditors verify segmentation/trust zones, firewall-rule governance, secure remote access, and that logging and architecture would contain — not amplify — an intrusion."], anchorYear: 2013, anchorEvent: "Target: vendor foothold reaches POS via flat network", secondYear: 2021, secondEvent: "Zero-trust segmentation mandated in US EO 14028" } },
  "Identity & Access Mgmt": { slug: "iam", prefix: "iam", emoji: "🪪", color: "Violet",
    systems: ["IdP (Okta / Entra ID / Ping)", "PAM (CyberArk / Delinea)", "IGA / access-review platform", "Directory (AD / LDAP)"],
    owners: ["Identity & Access Management", "Application/data owners (approvers)", "HR (joiner-mover-leaver)", "Security operations"],
    refs: [["NIST SP 800-63 — Digital Identity", "https://pages.nist.gov/800-63-3/"], ["CIS Control 5/6 — Account & Access Mgmt", "https://www.cisecurity.org/controls"], ["NIST SP 800-207 — Zero Trust", "https://csrc.nist.gov/pubs/sp/800/207/final"]],
    incident: { title: "Orphaned accounts and missing MFA", when: "Recurring", where: "Enterprise identity stores", impact: "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.", body: ["Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.", "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."], anchorYear: 2023, anchorEvent: "MGM/Okta-adjacent intrusions via help-desk + identity gaps", secondYear: 2021, secondEvent: "US EO 14028 mandates MFA across federal systems" } },
  "Change, Release & Config Mgmt": { slug: "change-release", prefix: "crc", emoji: "🔁", color: "Orange",
    systems: ["ITSM change tooling (ServiceNow)", "Release/deploy pipeline", "Configuration baseline (CMDB)", "Change audit log"],
    owners: ["Change Advisory Board / IT Ops", "Release management", "Application owners", "Security engineering"],
    refs: [["ITIL 4 — Change Enablement", "https://www.axelos.com/certifications/itil-service-management"], ["NIST SP 800-128 — Configuration Mgmt", "https://csrc.nist.gov/pubs/sp/800/128/final"], ["CIS Control 4 — Secure Configuration", "https://www.cisecurity.org/controls"]],
    incident: { title: "An unapproved change takes prod down", when: "Recurring", where: "Production change pipelines", impact: "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.", body: ["Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.", "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."], anchorYear: 2024, anchorEvent: "A faulty content update triggers a mass outage — change/release rigor in focus", secondYear: 2021, secondEvent: "Major config-push outages reinforce staged rollout + backout requirements" } },
  "System Implementation — Enterprise": { slug: "sysimpl-enterprise", prefix: "sie", emoji: "🏛️", color: "Indigo",
    systems: ["PPM / PMO tooling", "Enterprise architecture repository", "Test management (E2E/UAT)", "Vendor + contract management"],
    owners: ["Program / PMO leadership", "Enterprise architecture", "Business process owners", "Procurement / Vendor management"],
    refs: [["PMI / PMBOK", "https://www.pmi.org/"], ["TOGAF — enterprise architecture", "https://www.opengroup.org/togaf"], ["ISACA — project assurance / IS audit", "https://www.isaca.org/"]],
    incident: { title: "The go-live that wasn't ready", when: "Recurring", where: "Large ERP/enterprise programs", impact: "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.", body: ["Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.", "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."], anchorYear: 2018, anchorEvent: "A bank's core-system migration locks out millions — implementation governance failure", secondYear: 2021, secondEvent: "ERP go-live disruptions reinforce cutover + data-migration assurance" } },
  "System Implementation — Functional": { slug: "sysimpl-functional", prefix: "sif", emoji: "🧩", color: "Purple",
    systems: ["Requirements / design records", "Test management", "Deployment pipeline", "Vendor / SLA documentation"],
    owners: ["Project management", "Business analysts / process owners", "QA", "Vendor management"],
    refs: [["PMI / PMBOK", "https://www.pmi.org/"], ["ISO/IEC/IEEE 29119 — Software Testing", "https://www.iso.org/standard/81291.html"], ["ISACA IS audit guidance", "https://www.isaca.org/"]],
    incident: { title: "Requirements gap reaches production", when: "Recurring", where: "Functional system implementations", impact: "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.", body: ["At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.", "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."], anchorYear: 2020, anchorEvent: "Public-sector system rollouts fail UAT-to-prod traceability", secondYear: 2022, secondEvent: "Requirements/testing gaps remain the top implementation finding" } },
  "System Implementation — AI": { slug: "sysimpl-ai", prefix: "sia", emoji: "🤖", color: "Fuchsia",
    systems: ["ML platform (SageMaker/Vertex/Azure ML)", "Feature + data store", "Model registry + eval harness", "Model monitoring / drift"],
    owners: ["Data science / ML engineering", "Data governance", "Responsible-AI / risk", "Product owners"],
    refs: [["NIST AI Risk Management Framework", "https://www.nist.gov/itl/ai-risk-management-framework"], ["ISO/IEC 42001 — AI management system", "https://www.iso.org/standard/81230.html"], ["EU AI Act", "https://artificialintelligenceact.eu/"]],
    incident: { title: "A model that was never validated for the real world", when: "Recurring", where: "AI/ML implementations", impact: "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.", body: ["AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.", "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."], anchorYear: 2024, anchorEvent: "EU AI Act sets risk-tiered obligations for AI systems", secondYear: 2023, secondEvent: "High-profile model bias + drift incidents drive validation rigor" } },
  "Third Party Systems": { slug: "third-party", prefix: "tps", emoji: "🔗", color: "Amber",
    systems: ["TPRM / GRC platform (Archer/OneTrust)", "Vendor inventory + contracts", "SOC 2 / attestation repository", "Integration / API gateway"],
    owners: ["Third-party risk management", "Procurement / Vendor management", "Application owners", "Legal & Compliance"],
    refs: [["NIST SP 800-161 — C-SCRM", "https://csrc.nist.gov/pubs/sp/800/161/r1/final"], ["Shared Assessments SIG", "https://sharedassessments.org/"], ["ISO/IEC 27036 — supplier security", "https://www.iso.org/standard/59648.html"]],
    incident: { title: "The breach that came through a vendor", when: "Recurring", where: "Third-party / supplier integrations", impact: "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.", body: ["From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.", "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."], anchorYear: 2023, anchorEvent: "MOVEit: one vendor flaw breaches thousands of downstream orgs", secondYear: 2013, secondEvent: "Target: HVAC-vendor credentials lead to a 40M-card breach" } },
  "Resiliency & Redundancy": { slug: "resiliency", prefix: "res", emoji: "♻️", color: "Green",
    systems: ["Backup + replication platform", "DR orchestration / runbooks", "Multi-AZ/region infrastructure", "BCP / BIA documentation"],
    owners: ["Business Continuity / DR", "SRE / Platform", "Application owners", "Risk management"],
    refs: [["ISO 22301 — Business Continuity", "https://www.iso.org/standard/75106.html"], ["NIST SP 800-34 — Contingency Planning", "https://csrc.nist.gov/pubs/sp/800/34/r1/final"], ["AWS Well-Architected — Reliability", "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"]],
    incident: { title: "Backups that didn't restore", when: "Recurring", where: "DR and continuity programs", impact: "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.", body: ["Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.", "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."], anchorYear: 2021, anchorEvent: "OVHcloud fire destroys servers + some customers' only backups", secondYear: 2024, secondEvent: "Mass outage shows untested recovery extends downtime for days" } },
  "Incident Management": { slug: "incident-mgmt", prefix: "inc", emoji: "🚨", color: "Red",
    systems: ["SIEM / SOAR (Sentinel/Splunk)", "IR case management", "Forensics + evidence store", "On-call / paging (PagerDuty)"],
    owners: ["Security operations / CSIRT", "IT operations", "Legal & Communications", "Risk management"],
    refs: [["NIST SP 800-61 — Incident Handling", "https://csrc.nist.gov/pubs/sp/800/61/r2/final"], ["SANS Incident Handler's Handbook", "https://www.sans.org/white-papers/33901/"], ["ISO/IEC 27035 — Incident Management", "https://www.iso.org/standard/78973.html"]],
    incident: { title: "Detected late, contained slowly", when: "Recurring", where: "Security operations", impact: "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.", body: ["The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.", "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."], anchorYear: 2017, anchorEvent: "Equifax: delayed detection + notification compounds the breach", secondYear: 2023, secondEvent: "SEC cyber-disclosure rules tighten incident-notification timelines" } },
  "IT Governance": { slug: "it-governance", prefix: "gov", emoji: "📋", color: "Sky",
    systems: ["GRC platform", "Policy + standard repository", "Risk register", "Metrics / KRI dashboard"],
    owners: ["CISO / IT risk", "Policy owners", "Internal audit", "Executive / board"],
    refs: [["NIST Cybersecurity Framework 2.0 — Govern", "https://www.nist.gov/cyberframework"], ["COBIT 2019", "https://www.isaca.org/resources/cobit"], ["ISO/IEC 27001 — ISMS", "https://www.iso.org/standard/27001"]],
    incident: { title: "Risk accepted by no one, tracked by nobody", when: "Recurring", where: "Security governance programs", impact: "Without policy lifecycle, a live risk register, and metrics, security decisions are invisible — and accountability evaporates when something fails.", body: ["Governance gaps are quiet until an incident: stale policies, risks with no owner or expiry, exceptions that never close, and no metrics to show the program's state.", "Auditors verify policy/standard lifecycle, risk assessment and tracking, security metrics/reporting, exception management, and awareness."], anchorYear: 2024, anchorEvent: "NIST CSF 2.0 adds a Govern function — accountability as a control", secondYear: 2023, secondEvent: "SEC rules require governance + risk-management disclosure" } },
  "RPA Governance": { slug: "rpa-governance", prefix: "rpa", emoji: "⚙️", color: "Cyan",
    systems: ["RPA platform (UiPath/Automation Anywhere/Power Automate)", "Bot credential vault", "Bot orchestration + logs", "Version control for bots"],
    owners: ["Automation CoE", "Bot/process owners", "Security engineering", "Internal audit"],
    refs: [["ISACA — Auditing RPA", "https://www.isaca.org/"], ["NIST SP 800-53 — AC/AU families", "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"], ["OWASP — automation/credential guidance", "https://owasp.org/"]],
    incident: { title: "The bot with standing privileged access", when: "Recurring", where: "RPA estates", impact: "An over-privileged, unmonitored bot with stored credentials becomes a powerful, unattended attack path or a compliance blind spot.", body: ["Bots act as users at machine speed, often with broad standing access and stored credentials — and frequently outside change control and logging.", "Auditors verify RPA governance, secure dev/test/deploy, change control, least-privilege bot access, credential handling, and bot activity logging."], anchorYear: 2022, anchorEvent: "Unattended bots flagged as a top emerging access-risk class", secondYear: 2023, secondEvent: "Credential-laden automation accounts targeted for lateral movement" } },
  "AI": { slug: "ai-audit", prefix: "aig", emoji: "🧠", color: "Purple",
    systems: ["Model registry + lineage", "Eval / red-team harness", "AI gateway + guardrails", "Model + prompt monitoring"],
    owners: ["AI/ML engineering", "Responsible-AI / governance", "Security (AI red team)", "Data governance"],
    refs: [["NIST AI RMF + Generative AI Profile", "https://www.nist.gov/itl/ai-risk-management-framework"], ["OWASP Top 10 for LLM Applications", "https://owasp.org/www-project-top-10-for-large-language-model-applications/"], ["MITRE ATLAS", "https://atlas.mitre.org/"]],
    incident: { title: "Prompt injection and the leaky model", when: "Recurring", where: "Production AI systems", impact: "An AI system with weak guardrails leaks data, executes injected instructions, or is manipulated — and without monitoring no one notices.", body: ["AI introduces new failure modes: prompt injection, training-data poisoning, model/output manipulation, and sensitive-data leakage through generations.", "Auditors verify AI governance, model testing/validation, data governance, adversarial defense, AI infra/access security, and operational monitoring."], anchorYear: 2023, anchorEvent: "OWASP LLM Top 10 codifies prompt injection + data leakage risks", secondYear: 2024, secondEvent: "Agentic-AI incidents elevate tool-use + autonomy as audit subjects" } },
  "IoT": { slug: "iot", prefix: "iot", emoji: "📡", color: "Teal",
    systems: ["IoT device fleet + firmware", "IoT gateway / broker", "Device-identity / certificate service", "IoT monitoring (NDR/asset)"],
    owners: ["IoT / product engineering", "Network security", "Security operations", "Facilities (for OT-adjacent IoT)"],
    refs: [["NIST SP 800-213 — IoT device cybersecurity", "https://csrc.nist.gov/pubs/sp/800/213/final"], ["OWASP IoT Top 10", "https://owasp.org/www-project-internet-of-things/"], ["ETSI EN 303 645 — Consumer IoT", "https://www.etsi.org/standards"]],
    incident: { title: "Default credentials, botnet at scale", when: "2016", where: "Internet-exposed IoT devices", impact: "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.", body: ["Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.", "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."], anchorYear: 2016, anchorEvent: "Mirai botnet: default-credential IoT powers record DDoS", secondYear: 2020, secondEvent: "Regulators mandate baseline IoT security (no default passwords)" } },
  "ICS": { slug: "ics", prefix: "ics", emoji: "🏭", color: "Amber", displayName: "Industrial Control Systems (ICS)",
    systems: ["ICS/SCADA + PLC/RTU/HMI", "OT network monitoring (Dragos/Nozomi)", "IT/OT boundary firewalls (DMZ)", "OT asset inventory"],
    owners: ["OT / plant engineering", "OT security", "IT/OT network team", "Physical security / safety"],
    refs: [["NIST SP 800-82 — ICS Security", "https://csrc.nist.gov/pubs/sp/800/82/r3/final"], ["IEC 62443 — IACS security", "https://www.iec.ch/cyber-security"], ["CISA ICS advisories", "https://www.cisa.gov/topics/industrial-control-systems"]],
    incident: { title: "Ransomware crosses into operations", when: "2021", where: "Pipeline operational systems", impact: "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.", body: ["Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.", "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."], anchorYear: 2021, anchorEvent: "Colonial Pipeline: IT intrusion forces OT shutdown", secondYear: 2015, secondEvent: "Ukraine grid attack: remote ICS manipulation cuts power" } },
  "Post-Quantum Readiness": { slug: "pqc-readiness", prefix: "pqc", emoji: "🧮", color: "Indigo",
    systems: ["Cryptographic inventory / CBOM tooling", "TLS + certificate estate", "KMS / HSM + PKI", "Vendor PQC roadmaps"],
    owners: ["Crypto / PKI team", "Enterprise architecture", "Security engineering", "Vendor management"],
    refs: [["NIST FIPS 203/204/205 — PQC standards", "https://csrc.nist.gov/projects/post-quantum-cryptography"], ["CISA/NSA/NIST PQC migration", "https://www.cisa.gov/quantum"], ["CNSA 2.0", "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"]],
    incident: { title: "Harvest now, decrypt later", when: "Ongoing", where: "Long-lived encrypted data + comms", impact: "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.", body: ["HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.", "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."], anchorYear: 2024, anchorEvent: "NIST finalizes FIPS 203/204/205 PQC standards", secondYear: 2022, secondEvent: "CNSA 2.0 sets quantum-resistant migration timelines for NSS" } },
  "Data Lakes & Warehouses": { slug: "data-lakes", prefix: "dlw", emoji: "🗄️", color: "Blue",
    systems: ["Lakehouse / warehouse (Snowflake/Databricks/BigQuery)", "Ingestion + ETL/ELT pipelines", "Data catalog + lineage", "Fine-grained access + masking"],
    owners: ["Data engineering / platform", "Data governance / stewards", "Security engineering", "Analytics / BI owners"],
    refs: [["Cloud Security Alliance — Big Data security", "https://cloudsecurityalliance.org/"], ["NIST SP 800-53 — AC/AU/SC", "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"], ["DAMA-DMBOK — data governance", "https://www.dama.org/"]],
    incident: { title: "An over-shared analytics store", when: "Recurring", where: "Data lakes / warehouses", impact: "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.", body: ["Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).", "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."], anchorYear: 2023, anchorEvent: "Misconfigured cloud data shares expose large analytics datasets", secondYear: 2024, secondEvent: "Credential-based warehouse intrusions exfiltrate customer datasets" } },
};

// ── Parse domlist.txt → { domainName: [subprocess, ...] } ─────────────────────
const raw = fs.readFileSync(path.join(__dirname, "audit-domains.txt"), "utf8");
const groups = new Map();
for (const line of raw.split(/\r?\n/)) {
  const m = line.split(/\s{4,}/);
  if (m.length < 2) continue;
  const [name, sub] = [m[0].trim(), m[1].trim()];
  if (!name || !sub) continue;
  if (name === "Domain" || name.startsWith("PART ")) continue;
  if (!D[name]) continue;
  if (!groups.has(name)) groups.set(name, []);
  groups.get(name).push(sub);
}

// ── Content builders ──────────────────────────────────────────────────────────
const PASS = ["PASS", "EXCEPTIONS", "MATERIAL GAP"];
const opinionFor = (i) => (i % 5 === 0 ? "EXCEPTIONS" : "MATERIAL GAP");

function scores(sub, idx) {
  const s = sub.toLowerCase();
  let ease = 6, value = 7;
  if (/(inventory|logging|monitor|scan|config|baseline|review|report|metric)/.test(s)) ease += 1;
  if (/(hsm|forensic|migration|architecture|threat model|chaos|adversarial|red team|cutover|conversion)/.test(s)) ease -= 2;
  if (/(privileged|secret|key|encryption|access|iam|mfa|segmentation|patch|vuln|crypto|incident|backup|supply chain|third)/.test(s)) value += 2;
  if (/(training|naming|documentation|metric|report)/.test(s)) value -= 1;
  ease = Math.max(3, Math.min(9, ease + ((idx % 3) - 1)));
  value = Math.max(5, Math.min(10, value));
  return { ease, value };
}

function quizFor(id, dn, sub, meta, opinion) {
  const sys = meta.systems[0];
  const art = `${sub} evidence export`;
  const owner = meta.owners[0];
  const q = (n, type, challenge, text, options, correct, explanation) => ({
    id: `${id}-q${n}`, type, challenge, text, options, correctIndex: correct, explanation,
  });
  // rotate correct answer position deterministically per question
  const rot = (opts, n) => { const k = n % opts.length; return { options: [...opts.slice(k), ...opts.slice(0, k)], correct: (opts.length - k) % opts.length }; };
  const build = (n, type, challenge, text, correctText, distractors, explanation) => {
    const base = [correctText, ...distractors];
    const r = rot(base, n);
    return q(n, type, challenge, text, r.options, r.correct, explanation);
  };
  return { questions: [
    build(1, "Objective", "Control objective", `What is the primary audit objective for the "${sub}" sub-process of ${dn}?`,
      `Obtain evidence that the ${sub.toLowerCase()} control is designed and operating effectively, and quantify the gap where it is not`,
      ["Re-implement the control on the auditor's behalf", "Increase the number of tools the team uses", "Replace the system owner's judgement entirely"],
      "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."),
    build(2, "Why it matters", "Materiality", `Why does a weakness in "${sub}" matter to the broader ${dn} posture?`,
      `It is a control other ${dn} controls depend on, so a gap here propagates risk into everything scoped to it`,
      ["It only affects documentation aesthetics", "It is relevant solely for marketing", "It has no effect once a firewall exists"],
      "Foundational controls are load-bearing; their failure undermines the controls layered on top."),
    build(3, "Artifacts", "Evidence", `Which artifact best evidences the "${sub}" control?`,
      `The ${art} reconciled against policy, plus the resulting findings working paper`,
      ["A verbal assurance from the team lead", "A screenshot of the login page", "The vendor's marketing datasheet"],
      "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."),
    build(4, "System", "Source of truth", `Where would an auditor pull the evidence for "${sub}"?`,
      `${sys} (and the other systems of record for this domain), accessed read-only`,
      ["Only from a spreadsheet emailed by a manager", "From social media", "From the auditor's memory of last year"],
      `Evidence comes from the authoritative systems (e.g., ${sys}) via read-only access.`),
    build(5, "Data owner", "Accountability", `Who is most likely accountable for the data behind "${sub}"?`,
      `${owner} (with related functions attesting their part)`,
      ["The external auditor", "No one — it is ownerless", "The end customer"],
      `${owner} owns the control data; the auditor independently verifies it.`),
    build(6, "Agentic", "Human vs agent", `In the agentic workflow for "${sub}", which part stays with the human auditor?`,
      "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
      ["Issuing the final audit opinion autonomously", "Nothing; the agent decides materiality", "Only installing dependencies"],
      "Agents automate evidence gathering at machine speed; humans own policy and judgement."),
    build(7, "Tooling", "Read-only", "Why must the MCP server for this module be read-only?",
      "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
      ["Read-only servers are simply faster", "MCP cannot perform writes", "So it can run without any credentials"],
      "Non-interference is a hard requirement for audit evidence-gathering tools."),
    build(8, "Findings", "What is a finding", `Which observation is a reportable finding for "${sub}"?`,
      "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
      ["The team uses a popular vendor", "The control exists and operates as designed", "A new feature shipped on time"],
      "A finding is a gap between the policy/standard and the observed evidence."),
    build(9, "Deliverable", "The opinion", "How does the coverage report escalate its opinion?",
      `PASS → EXCEPTIONS → ${"MATERIAL GAP"} as the count and severity of gaps increase`,
      ["It is always PASS to avoid conflict", "Randomly each run", "Only the asset count is reported, never an opinion"],
      "The opinion is a function of how many in-scope items fail and how severely."),
    build(10, "Privacy/Risk", "The data angle", `Why does auditing "${sub}" also serve privacy and regulatory goals?`,
      "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
      ["Privacy is unrelated to technical controls", "Regulators never look at this domain", "It only matters for public data"],
      "Security and privacy share the same controls; a technical gap is often also a compliance gap."),
  ] };
}

function infoFor(id, dn, sub, meta, opinion, pyName) {
  const sys = meta.systems;
  return {
    tagline: `Auditing "${sub}" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the ${dn} control.`,
    year: 2025,
    overview: [
      `The "${sub}" sub-process is one of the controls an auditor must verify for ${dn}. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: "show me the evidence that ${sub.toLowerCase()} is in place and working, for everything in scope."`,
      `It is hard because the truth lives across systems that were never reconciled — typically ${sys.slice(0, 3).join(", ")} — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.`,
      `The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail.`,
    ],
    technical: {
      title: "The agentic workflow — automate the evidence, not the judgement",
      body: [
        `The included \`${pyName}\` exposes read-only tools that turn each ${dn} source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a \`coverage_report()\` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.`,
        `The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across ${sys.length} systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.`,
        `To run it: \`pip install "mcp[cli]"\`, wire the source credentials read-only, then \`mcp run ${pyName}\` to expose it to your agent — or \`python ${pyName} --selftest\` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required.`,
      ],
      codeExample: {
        label: "coverage_report() — the audit deliverable (excerpt)",
        code: `def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i["compliant"]]\n    return {\n      "in_scope": len(items),\n      "compliant": len(items) - len(exceptions),\n      "exceptions": [i["id"] for i in exceptions],\n      "opinion": "PASS" if not exceptions\n                 else "EXCEPTIONS" if len(exceptions) <= 3\n                 else "MATERIAL GAP",\n    }`,
      },
    },
    incident: {
      title: meta.incident.title, when: meta.incident.when, where: meta.incident.where,
      impact: meta.incident.impact, body: meta.incident.body,
    },
    diagram: { nodes: [
      { label: "Scope", sub: `define ${dn} scope + policy`, type: "attacker" },
      { label: "Agent + MCP", sub: `pull ${sys.slice(0, 2).join(" · ")}`, type: "system" },
      { label: "Evaluate", sub: "reconcile vs policy, find gaps", type: "system" },
      { label: "Findings + opinion", sub: "exceptions · CAPA", type: "result" },
    ] },
    timeline: [
      { year: meta.incident.anchorYear, event: meta.incident.anchorEvent, highlight: true },
      { year: meta.incident.secondYear, event: meta.incident.secondEvent },
      { year: 2025, event: `Agentic evidence-gathering becomes the practical way to keep "${sub}" continuously assured`, highlight: true },
    ],
    keyTakeaways: [
      `Audit "${sub}" by evidence, not assertion: reconcile the systems of record and name the exceptions.`,
      `The control is scoped per item — anything the control was never applied to is the highest-value finding.`,
      `The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.`,
      `Audit tooling must be read-only — verify the MCP server can list and report but never change state.`,
      `The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path.`,
    ],
    references: [
      ...meta.refs.map(([title, url]) => ({ title, url })),
      { title: "Model Context Protocol — specification", url: "https://modelcontextprotocol.io/" },
    ],
    downloads: [
      { name: pyName, url: `/audit-code/${meta.slug}/${pyName}`,
        description: `Runnable read-only MCP server: gathers ${dn} evidence for "${sub}", evaluates against policy, and reports exceptions + opinion. pip install "mcp[cli]".` },
    ],
  };
}

function ctfFor(id, dn, sub, meta, opinion) {
  const tag = abbr(sub);
  const f1 = `FLAG{${meta.prefix}_`;
  const f2 = `${tag}_`;
  const f3 = `gap_`;
  const opTok = opinion.toLowerCase().replace(/\s+/g, "_");
  const f4 = `${opTok}}`;
  const flag = f1 + f2 + f3 + f4;
  const sys = meta.systems;
  return { flag, ctf: {
    scenario: `You're the auditor testing the "${sub}" control for ${dn} at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)`,
    hint: `The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.`,
    hints: [
      `cat each file in /evidence. ${sys[0]} is the system of record; the others show what is actually configured/running.`,
      `An in-scope item present in one source but missing the required control in another is an exception — that is your finding.`,
      `Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion).`,
    ],
    files: {
      "/evidence/README.md":
        `# AcmeCorp — ${dn}: "${sub}" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ${meta.slug}_inventory.json   (in-scope items from ${sys[0]})\n- ${meta.slug}_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n"${sub}" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. \`cat\` every file to collect the finding.`,
      "/evidence/policy.json":
        `{\n  "control": ${JSON.stringify(sub)},\n  "domain": ${JSON.stringify(dn)},\n  "requirement": "every in-scope item must have the control applied and operating",\n  "exception_threshold": 3\n}\n# fragment: ${f1}`,
      [`/evidence/${meta.slug}_inventory.json`]:
        `[\n  {"id":"item-001","in_scope":true,"owner":${JSON.stringify(meta.owners[0])}},\n  {"id":"item-002","in_scope":true},\n  {"id":"item-003","in_scope":true},\n  {"id":"item-004","in_scope":true}\n]\n# 4 in-scope items the "${sub}" control must cover\n# fragment: ${f2}`,
      [`/evidence/${meta.slug}_state.json`]:
        `[\n  {"id":"item-001","control_applied":true},\n  {"id":"item-002","control_applied":false},   // exception: not covered\n  {"id":"item-003","control_applied":false},   // exception: drifted from baseline\n  {"id":"item-004","control_applied":true}\n]\n# 2 of 4 items fail the control\n# fragment: ${f3}`,
      "/evidence/coverage_report.json":
        `{\n  "in_scope": 4,\n  "compliant": 2,\n  "exceptions": ["item-002","item-003"],\n  "opinion": ${JSON.stringify(opinion)}\n}\n# fragment: ${f4}`,
    },
    dirs: {
      "/": [{ name: "evidence", isDir: true }],
      "/evidence": [
        { name: "README.md", isDir: false },
        { name: "policy.json", isDir: false },
        { name: `${meta.slug}_inventory.json`, isDir: false },
        { name: `${meta.slug}_state.json`, isDir: false },
        { name: "coverage_report.json", isDir: false },
      ],
    },
    fragments: [
      { trigger: "/evidence/policy.json", value: f1, label: "Policy — the control standard" },
      { trigger: `/evidence/${meta.slug}_inventory.json`, value: f2, label: "Inventory — the in-scope items" },
      { trigger: `/evidence/${meta.slug}_state.json`, value: f3, label: "State — the items that fail the control" },
      { trigger: "/evidence/coverage_report.json", value: f4, label: "Coverage report — the audit opinion" },
    ],
  } };
}

function pyFor(dn, sub, meta, pyName) {
  const cls = meta.prefix.toUpperCase();
  return `#!/usr/bin/env python3
"""Read-only MCP server — ${dn}: "${sub}" audit evidence.

Gathers the in-scope inventory and the observed control state from this domain's
systems of record, evaluates each item against policy, and reports the exceptions
with a PASS / EXCEPTIONS / MATERIAL-GAP opinion. READ-ONLY: it lists and reports,
never changes state — the hard requirement for audit tooling.

  pip install "mcp[cli]"
  mcp run ${pyName}                 # expose to an agent
  python ${pyName} --selftest       # reproduce findings against fixtures, offline

Wire real sources by replacing the _gather() fixtures with read-only API calls to
${meta.systems.join(", ")}.
"""
from __future__ import annotations
import json, sys
from dataclasses import dataclass, asdict

EXCEPTION_THRESHOLD = 3  # auditor-set policy: >3 exceptions => material gap

# ---- Offline fixtures (replace with read-only source API calls) ----------------
_FIXTURE_INVENTORY = [
    {"id": "item-001", "in_scope": True},
    {"id": "item-002", "in_scope": True},
    {"id": "item-003", "in_scope": True},
    {"id": "item-004", "in_scope": True},
]
_FIXTURE_STATE = {
    "item-001": True,
    "item-002": False,   # exception: control not applied
    "item-003": False,   # exception: drifted from baseline
    "item-004": True,
}

@dataclass
class Item:
    id: str
    in_scope: bool
    control_applied: bool
    @property
    def compliant(self) -> bool:
        return (not self.in_scope) or self.control_applied

def _gather() -> list[Item]:
    """Read-only: pull in-scope inventory + observed state from systems of record."""
    state = _FIXTURE_STATE
    return [Item(i["id"], bool(i.get("in_scope")), bool(state.get(i["id"], False)))
            for i in _FIXTURE_INVENTORY]

def _evaluate(items: list[Item]) -> list[dict]:
    return [{"id": i.id, "compliant": i.compliant} for i in items if i.in_scope]

# ---- MCP tools -----------------------------------------------------------------
def build_inventory() -> list[dict]:
    """List every in-scope item the "${sub}" control must cover."""
    return [asdict(i) for i in _gather()]

def find_exceptions() -> list[str]:
    """Return in-scope items where the control is missing or not operating."""
    return [r["id"] for r in _evaluate(_gather()) if not r["compliant"]]

def coverage_report() -> dict:
    """The audit deliverable: totals, exceptions, and the opinion."""
    rows = _evaluate(_gather())
    exceptions = [r["id"] for r in rows if not r["compliant"]]
    opinion = ("PASS" if not exceptions
               else "EXCEPTIONS" if len(exceptions) <= EXCEPTION_THRESHOLD
               else "MATERIAL GAP")
    return {
        "domain": ${JSON.stringify(dn)},
        "control": ${JSON.stringify(sub)},
        "in_scope": len(rows),
        "compliant": len(rows) - len(exceptions),
        "exceptions": exceptions,
        "opinion": opinion,
    }

# ---- MCP wiring (guarded so --selftest runs without the dependency) ------------
def _register():
    from mcp.server.fastmcp import FastMCP
    mcp = FastMCP("${cls} ${sub} Audit (read-only)")
    mcp.tool()(build_inventory)
    mcp.tool()(find_exceptions)
    mcp.tool()(coverage_report)
    return mcp

if __name__ == "__main__":
    if "--selftest" in sys.argv:
        print(json.dumps(coverage_report(), indent=2))
    else:
        _register().run()
`;
}

// ── Emit ──────────────────────────────────────────────────────────────────────
fs.mkdirSync(GENDIR, { recursive: true });
const registryImports = [];
const registryEpochs = [];
const registryStages = [];
const flags = {};
let totalModules = 0;
const camel = (slug) => slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

for (const [name, subs] of groups) {
  const meta = D[name];
  const dn = meta.displayName ?? name; // display/content name (e.g. expand "ICS")
  const skip = meta.skipFirst || 0;
  const stages = [];
  subs.forEach((sub, i) => {
    const order = i + 1;
    if (order <= skip) return; // hand-authored exemplar(s)
    const id = `${meta.prefix}-${pad2(order)}`;
    const opinion = opinionFor(order);
    const pyName = `${pad2(order)}_${slugify(sub).replace(/-/g, "_")}_mcp.py`;
    const { ease, value } = scores(sub, i);
    const { flag, ctf } = ctfFor(id, dn, sub, meta, opinion);
    flags[id] = flag;
    const stage = {
      epochId: meta.slug,
      id, order,
      title: sub,
      subtitle: `Agentic technical & privacy audit of the ${sub.toLowerCase()} control`,
      category: "cybersecurity",
      xp: 100,
      easeScore: ease, valueScore: value, rank: 0,
      auditMeta: {
        objective: `Prove the "${sub}" control for ${dn} is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.`,
        approach: `An audit agent calls a read-only MCP server that wraps each ${dn} source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)`,
        artifacts: [
          `In-scope inventory for the ${sub.toLowerCase()} control (from ${meta.systems[0]})`,
          `Observed configuration/state evidence showing whether the control is applied and operating`,
          `The control policy / standard / threshold the evidence is judged against`,
          `The reconciled exceptions list + coverage report (the working paper)`,
        ],
        system: meta.systems.map((s) => `${s}`),
        dataOwner: meta.owners.map((o) => `${o}`),
        scoring: {
          ease: `EASE ${ease}/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.`,
          value: `VALUE ${value}/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream ${dn} controls.`,
        },
      },
      badge: { id: `${id}-badge`, name: `${dn} Auditor`, emoji: meta.emoji },
      wonder: { name: `${sub}`, location: dn, era: "Present Day", emoji: meta.emoji },
      challengeType: "ctf",
      info: infoFor(id, dn, sub, meta, opinion, pyName),
      ctf,
      quiz: quizFor(id, dn, sub, meta, opinion),
    };
    stages.push(stage);
    totalModules++;
    // write python
    const pdir = path.join(PUBCODE, meta.slug);
    fs.mkdirSync(pdir, { recursive: true });
    fs.writeFileSync(path.join(pdir, pyName), pyFor(dn, sub, meta, pyName), "utf8");
  });

  const cml = camel(meta.slug);
  const epoch = {
    id: meta.slug, name: dn, subtitle: `Agentic technical & privacy audit — ${dn}`,
    description: `Audit ${dn} end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.`,
    emoji: meta.emoji, color: meta.color, unlocked: true,
  };

  // Application Review: epoch + module 01 are hand-authored; only emit gen stages.
  const isAppReview = meta.slug === "application-review";
  const lines = [`import type { ${isAppReview ? "StageConfig" : "EpochConfig, StageConfig"} } from "../types";`, ""];
  if (!isAppReview) {
    lines.push(`export const ${cml}Epoch: EpochConfig = ${JSON.stringify(epoch, null, 2)};`, "");
  }
  lines.push(`export const ${cml}Stages: StageConfig[] = ${JSON.stringify(stages, null, 2)};`, "");
  fs.writeFileSync(path.join(GENDIR, `${meta.slug}.ts`), lines.join("\n"), "utf8");

  registryImports.push(
    isAppReview
      ? `import { ${cml}Stages } from "./audit-generated/${meta.slug}";`
      : `import { ${cml}Epoch, ${cml}Stages } from "./audit-generated/${meta.slug}";`
  );
  registryEpochs.push(isAppReview ? null : `  ${cml}Epoch,`);
  registryStages.push(isAppReview ? `  ...${cml}Stages,` : `  ...${cml}Stages,`);
}

// ── Rank all modules globally by ease+value, then re-write the stage files ─────
//    (rank is assigned across the whole track; do a second pass to set it.)
const allForRank = [];
for (const [name, subs] of groups) {
  const meta = D[name];
  const file = path.join(GENDIR, `${meta.slug}.ts`);
}
// Simpler: recompute rank by reading the emitted JSON back is overkill — instead
// rank is computed here from the in-memory `flags`/scores. We re-walk groups.
// (Left as rank:0 placeholder; auditRanked() in the registry sorts live.)

// ── audit-flags.generated.ts ──────────────────────────────────────────────────
fs.writeFileSync(
  path.join(SRC, "audit-flags.generated.ts"),
  `// AUTO-GENERATED by scripts/gen-audit-track.mjs — do not edit by hand.\n` +
  `export const auditGeneratedFlags: Record<string, string> = ${JSON.stringify(flags, null, 2)};\n`,
  "utf8",
);

// ── audit-registry.ts ─────────────────────────────────────────────────────────
const registry = `// Registry for the gated Advanced Audit track — deliberately SEPARATE from the
// main \`stages.ts\` barrel + stages-meta, so these modules stay off to the side
// (not in the public learner catalog, counts, or validators). Domain epochs are
// generated by scripts/gen-audit-track.mjs; Application Review module 01 is the
// hand-authored exemplar in audit-application-review.ts.
import type { EpochConfig, StageConfig } from "./types";
import { auditApplicationReviewEpoch, auditApplicationReviewStages } from "./audit-application-review";
${registryImports.join("\n")}

export const auditEpochs: EpochConfig[] = [
  auditApplicationReviewEpoch,
${registryEpochs.filter(Boolean).join("\n")}
];

export const auditStages: StageConfig[] = [
  ...auditApplicationReviewStages,
${registryStages.join("\n")}
].map((s, i, all) => s); // rank assigned below

// Rank every module across the whole track by easeScore + valueScore.
const _ranked = [...auditStages].sort(
  (a, b) => ((b.easeScore ?? 0) + (b.valueScore ?? 0)) - ((a.easeScore ?? 0) + (a.valueScore ?? 0)),
);
_ranked.forEach((s, i) => { s.rank = i + 1; });

export function auditStagesForEpoch(epochId: string): StageConfig[] {
  return auditStages.filter((s) => s.epochId === epochId).sort((a, b) => a.order - b.order);
}
export function getAuditEpoch(epochId: string): EpochConfig | undefined {
  return auditEpochs.find((e) => e.id === epochId);
}
export function getAuditStage(id: string): StageConfig | undefined {
  return auditStages.find((s) => s.id === id);
}
export function auditRanked(): StageConfig[] {
  return [...auditStages].sort(
    (a, b) => ((b.easeScore ?? 0) + (b.valueScore ?? 0)) - ((a.easeScore ?? 0) + (a.valueScore ?? 0)),
  );
}
`;
fs.writeFileSync(path.join(SRC, "audit-registry.ts"), registry, "utf8");

console.log(`Generated ${groups.size} domains, ${totalModules} modules (+1 hand-authored aar-01).`);
console.log(`Flags: ${Object.keys(flags).length}. Files in src/audit-generated/ and public/audit-code/.`);
