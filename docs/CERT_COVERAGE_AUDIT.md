# Certification Coverage Audit (resume-safe)

Goal: validate that the curriculum comprehensively covers each certification's official exam objectives, and fill gaps. Decisions (from user): tackle **all certs in order (security core → audit → AI), my call**; remediation = **mix** (augment existing epochs with targeted stages; spin up a new epoch only when a whole objective area is missing).

## Method (per cert)
1. List the cert's official domains + sub-objectives.
2. Probe the content corpus (`packages/core/src/*.ts`) for each objective's key terms — file count is coarse; verify whether the topic is actually *taught* (stage title/overview), not just mentioned.
3. Mark each objective: COVERED / PARTIAL / GAP.
4. Fill: add targeted quiz stages (category `cybersecurity`/`ai`), map them in `CERT_DOMAINS` (cert-domains.ts) to ALL relevant cert domains, register the epoch in `stages.ts`.
5. tsc + build; re-probe to confirm.

## Mapping mechanics
- `cert-domains.ts`: `CERT_DOMAINS: Record<stageId, CertDomain[]>`. Builders: sp=Security+, cc=ISC²CC, np=Network+, cy=CySA+, cisa/cism/crisc=ISACA, ai=AI+, awsaip=AWS-AIP, gcpml=GCP-PMLE, aaia/aaism=ISACA-AI. `combine(...)` merges. Add new stageIds here.
- Epoch registration in `stages.ts`: import {xEpoch,xStages} (~L11), add xEpoch to `EPOCHS`/epochs array (~L119), spread `...xStages` (~L175).
- `getStagesForCert` / `computeCertReadiness` read CERT_DOMAINS automatically.

## Quantitative snapshot (distinct mapped stages per cert / per domain) — baseline 2026-06-05
- Security+ 238 (GenSec 85, Threats 113, Arch 78, SecOps 55, Program 30)
- ISC² CC 226 (Principles 93, **BC/DR/IR 6 THIN**, Access 43, NetSec 63, SecOps 43)
- Network+ 97 (Fund 12, Impl 26, Ops 16, NetSec 38, Trbl 16)
- CySA+ 139 (SecOps 58, VulnMgmt 72, IR 15, **Reporting 8 THIN**)
- CISA 246 (Audit 19, Gov 18, Acq 14, Ops 70, Protection 170)
- CISM 219 (Gov 15, Risk 94, Program 79, Incident 45)
- CRISC 238 (Gov 26, RiskAssess 99, RiskResp 54, IT&Sec 101)
- AI+ 60 (Concepts 21, **Data 6 THIN**, Models 11, SecEthicsGov 49, Infra 20)
- AWS-AIP 49 (**AI/ML 4 THIN**, **GenAI 6 THIN**, FoundationModels 22, Responsible 17, Security 48)
- GCP-PMLE 33 (**LowCode 3**, **Collab 5**, **Scaling 4**, Serving 9, Pipelines 7, Monitoring 6) — thinnest cert
- AAIA 49 (Gov 18, Ops 32, Audit 23)
- AAISM 40 (**GovProgram 11**, Risk 28, Controls 28)
→ No EMPTY domains. Thin spots flagged. Real gaps are objective-level (below).

## Remediation home: new epoch `sec-foundations` — "Security Foundations"
Cross-cutting conceptual objectives the CTF/exploit content underserves; each stage mapped to all relevant certs (Sec+, CC, CISA, CISM, CRISC, Net+ where applicable). Planned stages:
1. Security Controls & Frameworks (control categories/types; NIST CSF / ISO 27001 / CIS) — Sec+1.1, CC, CISA, CRISC
2. Physical Security & Deception (bollards/vestibule/fencing/sensors/guards/badges; honeypot/honeynet/honeytoken) — **GAP** Sec+1.2, CC
3. Change Management (approval/impact/backout/maintenance window/versioning) — Sec+1.3, CISA
4. Cryptographic Solutions (PKI, certs CA/CRL/OCSP/CSR, encryption levels, hashing/salting, digital signatures, TPM/HSM, obfuscation/stego/tokenization) — Sec+1.4, CC
5. Identity & Access Management concepts (AAA, SSO SAML/OAuth/OIDC, federation, MFA factors, PAM, DAC/MAC/RBAC/ABAC, least privilege) — Sec+4.6, CC access-controls
6. Data Protection & Classification (states, classification, sovereignty, masking/tokenization/DLP) — Sec+3.3, CISA protection
7. Resilience & Recovery / BCDR (HA/clustering/LB, hot/warm/cold sites, geo dispersion, multi-cloud, backups freq/encryption/snapshots/replication/journaling, power UPS/generators, capacity planning, testing tabletop/failover/simulation/parallel) — **GAP** Sec+3.4, CC bc-dr-ir, CISA ops
8. Security Awareness & OpSec program (phishing campaigns, insider threat, anomalous behavior, training, reporting) — Sec+5.6
(Governance/Risk/Third-party/Compliance already covered by tech-audit-1..4 mapped to Sec+/CISA/CISM/CRISC — lean on those, don't duplicate.)

## Per-cert status
- [x] Security+ (SY0-701) — conceptual gaps CLOSED via sec-foundations 01–08 (controls/frameworks, physical security & deception, change mgmt, resilience/BCDR, crypto solutions, IAM, data protection/classification, awareness). Exploit domains (2.x threats, 4.x ops) already strong.
- [x] ISC² CC — thin BCDR (6) + access-controls reinforced by sec-foundations 02/04/05/06/07. Adequate.
- [ ] Network+ (N10-009) — fundamentals/ops/troubleshooting thinnish; deep-probe pending.
- [ ] CySA+ (CS0-003) — Reporting & Communication thin (8); deep-probe pending.
- [ ] CISA / CISM / CRISC — large mapped counts; audit-process/governance specifics deep-probe pending.
- [ ] CompTIA AI+ — Data Science Fundamentals thin (6); deep-probe pending.
- [ ] AWS AIP — AI/ML & GenAI fundamentals thin; deep-probe pending.
- [ ] GCP PMLE — thinnest; low-code/Vertex, scaling, pipelines deep-probe pending.
- [ ] ISACA AAIA / AAISM — AI governance/program deep-probe pending.

## Status log
- (start) snapshot computed; sec-foundations epoch planned; building Security+ gap stages first.
- BUILT sec-foundations epoch (8 stages) + cert mappings + registered in stages.ts; tsc clean. Closes Security+ conceptual gaps & ISC² CC BCDR/access. NEXT: deep-probe Network+ & CySA+, then CISA/CISM/CRISC, then AI certs.
