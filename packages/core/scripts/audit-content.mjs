// Deep, per-module audit content for the Advanced Audit track. Keyed by module id
// (e.g. "iam-03"). Each record gives the REAL specifics an auditor needs — the
// concrete artifact (the actual file/export/list), the concrete test with PASS
// criteria and what an exception looks like, the real source systems, the real
// tools/commands/APIs to pull the evidence, the typical finding, and references.
//
// The generator (gen-audit-track.mjs) weaves these into each module's briefing,
// auditMeta, CTF, quiz, and the runnable MCP server. Modules without a record here
// fall back to a generic (clearly weaker) template — author them here to deepen.
//
// Fields per record:
//   artifacts: string[]   the concrete evidence objects (a user access list, a
//                         config file, an export) — surfaced as auditMeta.artifacts
//   test:      string     the procedure + PASS criteria + what an exception is
//   systems:   string[]   the real systems of record the evidence comes from
//   owners:    string[]   the role/function that owns each source
//   tools:     string[]   real commands / API calls / queries to gather it
//   finding:   string     what a typical, real finding looks like
//   refs:      [t,url][]   module-specific standards/guidance (optional)

export const MODULES = {
  // ── Identity & Access Management (IAM) ──────────────────────────────────────
  "iam-01": {
    artifacts: [
      "The IdP user export — every account with status, creation date, last-login, and licence/role assignments",
      "The HR worker feed — active workers with hire and termination dates (the authoritative 'who should exist')",
      "The access-request approval tickets that authorised each account at creation",
      "Deprovisioning evidence — disable/delete timestamps to compare against termination dates",
    ],
    test: "Reconcile every IdP account to an active worker in the HR system of record. PASS: each enabled account maps to an active worker; every new account had an approved access request before creation; every terminated worker's accounts were disabled within SLA (e.g. ≤24h privileged, ≤7d standard) and de-licensed. Exceptions: orphaned accounts with no matching active worker, terminated workers still enabled, and accounts created with no approval ticket.",
    systems: ["Okta / Microsoft Entra ID (the identity provider)", "Workday / SAP SuccessFactors (HR system of record)", "ServiceNow (access-request + approval workflow)"],
    owners: ["Identity & Access Management — runs provisioning operations", "HR — owns authoritative worker status and dates", "Line managers — approve the access requests"],
    tools: [
      "Okta:   GET /api/v1/users?limit=200  (status, created, lastLogin, then paginate the Link header)",
      "Entra:  Get-MgUser -All -Property displayName,accountEnabled,createdDateTime,signInActivity",
      "HR:     Workday/SuccessFactors 'active workers + termination date' report (CSV/SOAP)",
      "Trail:  ServiceNow table API /api/now/table/sysapproval_approver?sysparm_query=... for the approval record",
    ],
    finding: "Orphaned accounts with no active worker, and terminated employees whose accounts stayed enabled for days or weeks past their termination date — each named with account id, worker id, and the gap in days.",
    refs: [["NIST SP 800-53 AC-2 Account Management", "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"], ["NIST SP 800-63 Digital Identity", "https://pages.nist.gov/800-63-3/"]],
  },
  "iam-02": {
    artifacts: [
      "The joiner-mover-leaver (JML) event log from HR — hires, role/department changes, and terminations in the period",
      "Before/after entitlement snapshots for each worker who changed role",
      "The birthright-role mapping (job code → the access automatically granted)",
      "Leaver deprovisioning timestamps vs the HR termination date",
    ],
    test: "For every MOVER (role/department change) in the period, diff the worker's entitlements before and after. PASS: birthright access updated to the NEW role AND prior-role entitlements removed (no accumulation); joiners got only their role's birthright access; leavers were fully deprovisioned within SLA. Exceptions: 'privilege creep' — movers who kept old-role access on top of new; leavers with residual access; joiners over-provisioned beyond their role.",
    systems: ["HR / HRIS (the JML event source)", "IGA platform — SailPoint / Saviynt / Microsoft Entra ID Governance (entitlements)", "The role / birthright catalogue"],
    owners: ["IAM / Identity Governance — owns the JML automation", "HR — owns the lifecycle events", "Role owners — define each role's birthright access"],
    tools: [
      "IGA:   SailPoint identity-cube entitlement history, or Saviynt 'identity entitlement' export, before vs after the move date",
      "Entra: Get-MgUserMemberOf for each mover at two points in time, then diff the group sets",
      "Okta:  group-membership snapshots (/api/v1/users/{id}/groups) diffed across the move",
      "HR:    JML event extract (effective-dated hires / transfers / terminations)",
    ],
    finding: "Movers who accumulated entitlements across two or three past roles (named, with the stale entitlements listed), and a handful of leavers whose access was removed late.",
    refs: [["NIST SP 800-53 AC-2 / AC-6", "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"], ["Gartner — Identity Governance & Administration", "https://www.gartner.com/en/information-technology/glossary/identity-governance-and-administration-iga"]],
  },
  "iam-03": {
    artifacts: [
      "A CSV of every active user joined to their enrolled authentication factors (factor type + enrolment date)",
      "The per-application authentication-policy export showing which apps require MFA and which factor types are allowed",
      "The list of sensitive/regulated applications that the MFA requirement must cover",
      "Sign-in / system logs showing factor usage (to catch policy that exists but isn't enforced)",
    ],
    test: "Reconcile the active-user roster against factor enrolment and the per-app auth policies. PASS: every active human account has at least one phishing-resistant factor (FIDO2/WebAuthn or platform passkey); every application handling confidential/regulated data REQUIRES MFA (not 'optional'); no account relies on SMS or voice as its only factor. Exceptions: active accounts with zero factors or SMS-only, and sensitive apps where MFA is optional or disabled.",
    systems: ["Okta (Universal Directory + Authentication Policies)", "Microsoft Entra ID (Conditional Access)", "The HR system of record for 'active worker'"],
    owners: ["IAM — owns the IdP and the authentication policies", "Application owners — set each app's auth-policy requirement", "HR — the authoritative active-worker list"],
    tools: [
      "Okta:  GET /api/v1/users?filter=status eq \"ACTIVE\"  then  GET /api/v1/users/{id}/factors",
      "Okta:  GET /api/v1/policies?type=ACCESS_POLICY  for the per-application MFA rules",
      "Entra: Get-MgUserAuthenticationMethod -UserId <id>  ;  export Conditional Access policies",
      "Entra: AuthenticationMethods registration & usage report (CSV)",
    ],
    finding: "Typically 3–8% of active accounts have no MFA or are SMS-only, and one or two sensitive apps have MFA set to 'optional' — each named with the user or app id.",
    refs: [["NIST SP 800-63B Authenticator Assurance Levels", "https://pages.nist.gov/800-63-3/sp800-63b.html"], ["CISA — Implementing Phishing-Resistant MFA", "https://www.cisa.gov/resources-tools/resources/implementing-phishing-resistant-mfa"]],
  },
  "iam-04": {
    artifacts: [
      "The privileged-principal inventory — Domain/Enterprise Admins, cloud admin roles, root, local admins, and application super-users",
      "The PAM vault inventory — which privileged credentials are vaulted, rotated, and checkout-controlled",
      "Session checkout / recording logs for privileged access",
      "The standing-vs-just-in-time (JIT) grant list, and break-glass account usage records",
    ],
    test: "Enumerate every privileged principal across directory, cloud, and hosts, then reconcile against the PAM vault. PASS: each is vaulted with automatic rotation, requires MFA + approval/checkout, prefers JIT over standing access, and sessions are logged/recorded; break-glass accounts are sealed and alert on use. Exceptions: privileged accounts NOT in the vault ('discovered, not managed'), unjustified standing admin, shared admin credentials, and break-glass used without a corresponding incident.",
    systems: ["CyberArk / Delinea / BeyondTrust (PAM)", "Active Directory (privileged groups)", "Microsoft Entra PIM + AWS/Azure/GCP IAM (cloud admin roles)"],
    owners: ["Privileged Access Management team — owns the vault and policy", "Platform / infrastructure owners — own the admin accounts", "Security operations — monitor privileged sessions"],
    tools: [
      "AD:      Get-ADGroupMember 'Domain Admins','Enterprise Admins','Schema Admins','Administrators' -Recursive",
      "Entra:   Get-MgRoleManagementDirectoryRoleAssignment  +  PIM eligible vs active assignments",
      "AWS:     aws iam list-entities-for-policy --policy-arn arn:aws:iam::aws:policy/AdministratorAccess  + Access Analyzer",
      "CyberArk: 'accounts discovered (DNA/Discovery) vs onboarded' reconciliation export",
    ],
    finding: "Privileged accounts discovered on hosts and in cloud that are not vaulted, plus standing Domain Admin members beyond the approved break-glass set — each named.",
    refs: [["NIST SP 800-53 AC-6(5) Privileged Accounts", "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"], ["CISA — Privileged Access Management guidance", "https://www.cisa.gov/"]],
  },
  "iam-05": {
    artifacts: [
      "The IdP session/token policy export — idle timeout, absolute lifetime, refresh-token lifetime + rotation, reauthentication rules",
      "Per-application session configuration — cookie flags (HttpOnly/Secure/SameSite) and idle/absolute timeouts",
      "Conditional-access / sign-in-frequency policies (step-up reauth, device binding)",
      "Evidence that tokens/sessions are revoked on logout and on deprovisioning",
    ],
    test: "Review session controls across the IdP and the sensitive applications. PASS: idle and absolute session limits are set in proportion to sensitivity (e.g. ≤15-min idle for admin consoles); refresh-token lifetime is bounded and rotated; step-up reauthentication is required for high-risk actions; sessions are revoked on logout and termination; cookies are HttpOnly/Secure/SameSite. Exceptions: unbounded or over-long sessions on sensitive apps, no step-up, refresh tokens never rotated, sessions not revoked on deprovision.",
    systems: ["Okta / Microsoft Entra ID (session + token policies)", "The applications' own session configuration", "API gateway / reverse proxy (token validation)"],
    owners: ["IAM — owns IdP session policy", "Application owners — own app-level session config", "AppSec — reviews cookie/token handling"],
    tools: [
      "Okta:  GET /api/v1/policies?type=ACCESS_POLICY  (session rules) and the global session policy export",
      "Entra: Conditional Access 'Sign-in frequency' + 'Persistent browser session' policy export",
      "App:   inspect Set-Cookie flags + documented idle/absolute timeouts for each sensitive app",
      "Token: confirm refresh-token rotation + revocation-on-logout in the OAuth/OIDC config",
    ],
    finding: "An admin application with a 12-hour idle session and refresh tokens that never rotate, so a stolen token stays valid far beyond the user's presence.",
    refs: [["OWASP Session Management Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"], ["NIST SP 800-63B — Reauthentication", "https://pages.nist.gov/800-63-3/sp800-63b.html"]],
  },
  "iam-06": {
    artifacts: [
      "The access-certification campaign records — reviewer, items reviewed, approve/revoke decisions, and timestamps",
      "The entitlement catalogue under review (especially high-risk/privileged entitlements)",
      "Revocation evidence for every 'revoke' decision, with the time-to-revoke",
      "Rubber-stamp metrics — approve-all rate and time-per-decision per reviewer",
    ],
    test: "Examine the most recent recertification campaign for in-scope high-risk entitlements. PASS: every high-risk entitlement was reviewed by an accountable owner within the cycle (e.g. quarterly for privileged, annually for standard); 'revoke' decisions were actually executed within SLA; and no reviewer certified their own access. Exceptions: entitlements never included in any campaign, revokes decided but not executed, a reviewer approving 100% of items in minutes (rubber-stamping), or reviewer = grantee.",
    systems: ["SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine)", "The IGA entitlement catalogue", "ITSM (to correlate revoke decisions with actual removals)"],
    owners: ["IAM / Identity Governance — runs the campaigns", "Entitlement / business owners — perform the reviews", "Internal audit — independent assurance"],
    tools: [
      "SailPoint: certification campaign export (item-level decisions + decision timestamps)",
      "Entra:    GET /identityGovernance/accessReviews/definitions/{id}/instances/{id}/decisions",
      "Correlate: each 'revoke' decision → the deprovisioning ticket/event that executed it",
      "Analytics: per-reviewer approve-rate and median seconds-per-decision (rubber-stamp signal)",
    ],
    finding: "A privileged group that appears in no certification campaign, and 'revoke' decisions with no corresponding removal 60+ days later — the review happened on paper but changed nothing.",
    refs: [["NIST SP 800-53 AC-2(j) Account Reviews", "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"], ["SOX ITGC — periodic access reviews", "https://pcaobus.org/"]],
  },
  "iam-07": {
    artifacts: [
      "The non-human / service-account inventory — each account with a named human owner and documented purpose",
      "The local-administrator inventory per host, and whether each is LAPS-managed (unique per host)",
      "The generic/shared-account list and whether each permits interactive logon",
      "Password age / rotation and vaulting status for every service account",
    ],
    test: "Inventory every service, generic, and local account. PASS: each has a named human owner and documented purpose; service accounts are non-interactive, least-privileged, and vaulted + rotated (or gMSA); local-admin passwords are unique per host (Windows LAPS); no shared interactive generic accounts exist. Exceptions: ownerless service accounts, service accounts in privileged groups, shared interactive logins, identical local-admin passwords reused across hosts, and passwords years old.",
    systems: ["Active Directory (service accounts, gMSA, adminCount)", "Windows LAPS (local-admin password management)", "PAM vault (service-account custody)", "Host/endpoint inventory"],
    owners: ["IAM — owns the account standard", "Server / application owners — own their service accounts", "Platform security — owns LAPS + vaulting"],
    tools: [
      "AD:   Get-ADUser -Filter {ServicePrincipalName -like '*'} -Properties PasswordLastSet,adminCount,MemberOf",
      "AD:   find service accounts where PasswordLastSet is years old, or with adminCount=1 (privileged)",
      "LAPS: report ms-Mcs-AdmPwd / Windows-LAPS attribute coverage across the host estate",
      "Risk: list Kerberoastable SPNs (service accounts with weak/old passwords exposed to offline cracking)",
    ],
    finding: "A service account with a 5-year-old password sitting in Domain Admins, and a single local-admin password reused across 400 workstations (one cracked hash = lateral movement everywhere).",
    refs: [["Microsoft — Windows LAPS", "https://learn.microsoft.com/windows-server/identity/laps/laps-overview"], ["NIST SP 800-53 IA-5 Authenticator Management", "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"]],
  },
  "iam-08": {
    artifacts: [
      "The entitlement-to-user assignment export (who holds what, across apps and cloud)",
      "The Segregation-of-Duties (SoD) ruleset — the toxic combinations (e.g. create-vendor + approve-payment)",
      "The SoD violations report — users currently holding conflicting entitlements",
      "Mitigating-control evidence for any conflict that was risk-accepted",
    ],
    test: "Run the SoD ruleset against current assignments and assess least privilege. PASS: no user holds a toxic combination without an approved, real mitigating control; entitlements trend toward least privilege (unused/over-broad access is removed). Exceptions: active SoD conflicts (e.g. a user who can both create and approve payments), over-entitled accounts with access far beyond their role, and conflicts 'accepted' with no genuine compensating control.",
    systems: ["ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD)", "IGA platform (cross-app entitlements)", "Cloud IAM (AWS/Azure/GCP policies)"],
    owners: ["IAM / GRC — owns the ruleset", "Business process owners — own the SoD policy for their process", "Internal audit / Finance — for financially-significant SoD"],
    tools: [
      "SAP GRC: Access Risk Analysis (ARA) report — user-level risk violations against the ruleset",
      "IGA:     export entitlement assignments and join against the toxic-combination ruleset",
      "AWS:     IAM Access Analyzer 'unused access' + Access Advisor last-accessed (least-privilege evidence)",
      "Cloud:   flag policies granting wildcard '*' actions or '*' resources",
    ],
    finding: "A dozen users who can both create and approve vendor payments with no compensating control, and cloud roles granting wildcard '*' actions far beyond what the workload uses.",
    refs: [["NIST SP 800-53 AC-5 (SoD) / AC-6 (least privilege)", "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"], ["ISACA — Segregation of Duties", "https://www.isaca.org/"]],
  },
  "iam-09": {
    artifacts: [
      "The certificate inventory — CN/SAN, issuer, key type/size, signature algorithm, expiry, and where each cert is deployed",
      "The CA hierarchy and issuance policy (what may be issued, to whom, with what constraints)",
      "Renewal evidence — which certs auto-renew (ACME) vs are renewed manually",
      "Private-key protection evidence — HSM vs filesystem, and who can read the key",
    ],
    test: "Inventory all TLS, client, and code-signing certificates. PASS: every certificate is inventoried and owned, uses approved algorithms and key sizes (RSA-2048+/ECDSA-P256+, SHA-256+), is not expired or expiring-without-an-owner, auto-renews where possible, and has its private key HSM-protected with least-privilege access; no self-signed certs in production and no unmanaged wildcard sprawl. Exceptions: unknown or expired certs serving production, weak keys (RSA-1024/SHA-1), private keys world-readable on disk, and certs expiring with no renewal owner.",
    systems: ["Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS)", "The issuing CA(s)", "Load balancers, web servers, and service meshes where certs terminate"],
    owners: ["PKI / Cryptography team — owns the CA and policy", "Platform / application owners — own the endpoints where certs are deployed"],
    tools: [
      "Inventory: Venafi/ACM export (CN, issuer, key, expiry, deployment)",
      "Discovery: query Certificate Transparency logs (crt.sh) for all certs issued for the org's domains",
      "Endpoint: nmap --script ssl-cert / openssl s_client -connect host:443 (algorithm + expiry of what's actually served)",
      "AD CS:    the issued-certificates database (templates, key archival, weak-key issuance)",
    ],
    finding: "Three expired certificates still serving production, several RSA-1024/SHA-1 certificates, and a wildcard certificate whose private key sits unprotected in a web root.",
    refs: [["NIST SP 800-57 Key Management", "https://csrc.nist.gov/projects/key-management"], ["CA/Browser Forum Baseline Requirements", "https://cabforum.org/baseline-requirements-documents/"]],
  },
  "iam-10": {
    artifacts: [
      "The access-policy matrix — for each sensitive resource, what identity + device posture + context is required",
      "The device-trust / posture signals that feed access decisions (compliant, managed, healthy)",
      "Segmentation evidence showing no implicit trust is granted by network location alone",
      "Continuous-evaluation / session-revocation logs (access pulled when risk rises mid-session)",
    ],
    test: "Sample sensitive resources and verify access requires a verified identity AND device posture AND context on every request — not network location. PASS: policies enforce least privilege per session, require MFA + a compliant/managed device, and continuously evaluate risk to revoke access; there is no 'on the corporate LAN = trusted'. Exceptions: resources reachable on the LAN with no auth/posture check, a VPN that grants flat subnet access, and policies keyed only to source IP.",
    systems: ["Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf)", "ZTNA — Zscaler / Cloudflare Access / Netskope", "Network microsegmentation (Illumio / NSX / cloud security groups)"],
    owners: ["IAM — owns identity-based access policy", "Network security — owns segmentation/ZTNA", "Endpoint — owns device posture", "Security architecture — owns the zero-trust target state"],
    tools: [
      "Entra:  export Conditional Access policies + confirm Continuous Access Evaluation (CAE) is enabled",
      "Posture: Intune device-compliance state feeding device-based Conditional Access",
      "ZTNA:   export the per-application access policy (identity + posture + context conditions)",
      "Test:   attempt to reach a sensitive resource from an untrusted segment / non-compliant device and confirm it is denied",
    ],
    finding: "An administrative console reachable on the corporate LAN with no device-posture requirement, and a VPN that drops users onto a flat subnet with broad reachability — classic implicit network trust.",
    refs: [["NIST SP 800-207 Zero Trust Architecture", "https://csrc.nist.gov/pubs/sp/800/207/final"], ["CISA Zero Trust Maturity Model", "https://www.cisa.gov/zero-trust-maturity-model"]],
  },
  "iam-11": {
    artifacts: [
      "The cryptographic inventory / CBOM (Cryptographic Bill of Materials) for certificates and key-exchange — algorithms, key sizes, and where each is used",
      "The list of long-lived certificates/keys and the sensitivity + retention of the data they protect",
      "Crypto-agility evidence — whether cert/key algorithms can be rotated centrally without re-architecting apps",
      "The vendor / PKI post-quantum (PQC) roadmap and the org's migration plan",
    ],
    test: "Assess the certificate and PKI estate for quantum readiness. PASS: a complete CBOM exists; the classical algorithms in use are catalogued; crypto is agile (cert and key types can be rotated centrally); a migration plan to NIST PQC standards (ML-KEM / ML-DSA, FIPS 203/204) and hybrid certificates exists with timelines aligned to CNSA 2.0; and long-lived secrets are prioritised for harvest-now-decrypt-later (HNDL) risk. Exceptions: no crypto inventory, hardcoded/un-agile algorithms, long-lived RSA/ECC protecting data that must outlive a cryptographically-relevant quantum computer, and no vendor PQC commitment.",
    systems: ["PKI with CBOM support — Venafi / Keyfactor", "The TLS + code-signing estate", "KMS / HSM", "Vendor and third-party PKI roadmaps"],
    owners: ["Cryptography / PKI team — owns the CBOM and migration", "Enterprise architecture — owns crypto-agility", "Vendor management — tracks supplier PQC readiness"],
    tools: [
      "CBOM:  generate a cryptography Bill of Materials (e.g. CycloneDX crypto-assets) across the estate",
      "Inventory: Venafi/Keyfactor crypto inventory (algorithm + key size + validity + location)",
      "Scan:  probe endpoints for negotiated key-exchange and any hybrid PQC support",
      "Map:   join data sensitivity + retention period against certificate/key validity to score HNDL exposure",
    ],
    finding: "No CBOM exists; long-lived RSA-2048 certificates protect records with a 25-year retention requirement (squarely in HNDL range); and no key vendor has a published PQC timeline.",
    refs: [["NIST FIPS 203/204/205 (PQC standards)", "https://csrc.nist.gov/projects/post-quantum-cryptography"], ["NSA CNSA 2.0", "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"]],
  },

  // ── Vulnerability & Patch Management ────────────────────────────────────────
  "vpm-01": {
    artifacts: [
      "The approved hardening baseline per OS (the CIS Benchmark level or DISA STIG the org committed to)",
      "A configuration-compliance scan of in-scope servers scored against that baseline",
      "The golden-image definition with its build date/version (what new servers are built from)",
      "The exception register for accepted deviations from the baseline",
    ],
    test: "Scan every in-scope server against the approved hardening baseline (CIS Benchmark / DISA STIG for that OS). PASS: each server is built from the current golden image and scores at or above the agreed threshold (e.g. ≥90% CIS Level 1), with documented, time-boxed exceptions for the remainder. Exceptions: servers built off-image or never hardened, baselines scoring below threshold, and 'temporary' exceptions with no expiry.",
    systems: ["CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner)", "The image pipeline — Packer / golden AMI / VM template", "CMDB (the authoritative in-scope server list)"],
    owners: ["IT Operations / Platform engineering — owns the build", "Security engineering — owns the baseline standard", "Server owners — own any exceptions"],
    tools: [
      "CIS-CAT Pro Assessor run against the CIS Benchmark for each OS (machine-readable score)",
      "Tenable.sc audit policy ('CIS …' / 'DISA STIG …') or Qualys Policy Compliance scan",
      "AWS:  compare each instance's running AMI id against the approved golden-AMI list",
      "Chef InSpec / Ansible compliance profile run against the baseline",
    ],
    finding: "A subset of production servers built from a two-year-old image scoring ~60% against CIS Level 1 — SSH root login enabled, weak ciphers, and no host firewall.",
    refs: [["CIS Benchmarks", "https://www.cisecurity.org/cis-benchmarks"], ["DISA STIGs", "https://public.cyber.mil/stigs/"], ["NIST SP 800-123 Server Security", "https://csrc.nist.gov/pubs/sp/800/123/final"]],
  },
  "vpm-02": {
    artifacts: [
      "The patch-compliance report by host — missing patches with severity and age",
      "The patch SLA policy (e.g. critical ≤7 days, high ≤30 days)",
      "The CISA Known Exploited Vulnerabilities (KEV) list mapped to the estate",
      "The risk-acceptance/exception register for systems that can't be patched on time",
    ],
    test: "Reconcile missing patches against the SLA and the KEV catalogue. PASS: every missing patch is within its severity SLA window; nothing on the CISA KEV list is open past the BOD 22-01 due date; and every overdue item has a formal, time-boxed risk acceptance with a compensating control. Exceptions: critical or KEV-listed vulnerabilities open past SLA, patches missing for months, and 'exceptions' with no owner or expiry date.",
    systems: ["WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state", "Vulnerability scanner (Tenable / Qualys) for missing-patch detection", "CISA KEV feed", "GRC / ticketing for exceptions"],
    owners: ["IT Operations — applies the patches", "Security operations — tracks SLA + KEV", "Risk management — approves exceptions"],
    tools: [
      "SCCM / Intune update-compliance export per device",
      "Tenable: 'missing patch' plugin family + 'vulnerability age' field, filtered to severity",
      "join scan CVEs to the CISA KEV catalogue (cisa.gov/known-exploited-vulnerabilities-catalog)",
      "Linux: dnf/yum updateinfo list security, apt list --upgradable across the fleet",
    ],
    finding: "Several internet-facing hosts missing a KEV-listed critical patch for 90+ days with no risk acceptance on file — exactly the pattern behind most breaches.",
    refs: [["NIST SP 800-40 Patch Management", "https://csrc.nist.gov/pubs/sp/800/40/r4/final"], ["CISA BOD 22-01 / KEV", "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"]],
  },
  "vpm-03": {
    artifacts: [
      "The desired-state configuration baseline held by the CM tool",
      "Drift reports — hosts that deviated from the baseline since the last enforcement run",
      "The change record correlating to any legitimate deviation",
      "Coverage: hosts enrolled in configuration management vs total in the CMDB",
    ],
    test: "Compare running configuration to the enforced baseline. PASS: a configuration-management engine (Ansible/Chef/Puppet/AWS SSM) runs on schedule across ~100% of hosts; drift is detected and auto-remediated or ticketed within SLA; and every legitimate deviation maps to an approved change. Exceptions: hosts not under configuration management at all, drift left unremediated, and unauthorised changes (drift with no corresponding change record).",
    systems: ["Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine)", "Drift dashboards / AWS Config", "Change management (to correlate legitimate deviations)"],
    owners: ["Platform / SRE — owns configuration management", "Security engineering — owns the secure baseline", "Change management"],
    tools: [
      "AWS Config rules + SSM State Manager association-compliance report",
      "Chef Automate / Puppet 'corrective vs intentional changes' report",
      "list hosts NOT enrolled in CM (CMDB minus CM inventory) — the blind spots",
      "correlate drift events to ServiceNow change tickets (authorised vs not)",
    ],
    finding: "About 20% of the fleet isn't enrolled in configuration management, so its drift is invisible; among enrolled hosts, several have firewall/security-group drift unremediated for weeks.",
    refs: [["NIST SP 800-128 Configuration Management", "https://csrc.nist.gov/pubs/sp/800/128/final"], ["CIS Control 4 Secure Configuration", "https://www.cisecurity.org/controls"]],
  },
  "vpm-04": {
    artifacts: [
      "The local/privileged administrator membership per server (who can log on as admin)",
      "Bastion / jump-host + PAM checkout logs for every administrative session",
      "MFA-enforcement evidence for administrative logon (RDP/SSH)",
      "The standing-vs-just-in-time (JIT) admin grant list",
    ],
    test: "Enumerate who holds administrative access to in-scope servers and how they reach it. PASS: admin access is least-privilege, brokered through a bastion/PAM with MFA, checkout, and session logging, prefers JIT over standing, and local admin is LAPS-managed; no direct admin logon from user workstations. Exceptions: broad standing admin, shared admin accounts, administrative logon without MFA, and direct RDP/SSH that bypasses the bastion.",
    systems: ["Active Directory / local groups (server admin membership)", "PAM (CyberArk/Delinea) + bastion host", "MFA/IdP for administrative logon"],
    owners: ["Platform / infrastructure — owns server administration", "PAM team — owns the brokered path", "Security operations — monitors sessions"],
    tools: [
      "per host: members of local Administrators (Windows) / sudoers + wheel (Linux)",
      "AD: who holds 'Allow log on through Remote Desktop' / Remote Desktop Users on servers",
      "PAM session logs: which privileged account was checked out, by whom, when",
      "confirm MFA on RDP/SSH (Duo / Entra) and that direct paths to servers are blocked",
    ],
    finding: "A shared local 'admin' account used by 30 engineers with no MFA and direct RDP from workstations, bypassing the bastion entirely — one phished laptop owns every server.",
    refs: [["NIST SP 800-53 AC-6 / AC-17", "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"], ["CIS Control 5 Account Management", "https://www.cisecurity.org/controls"]],
  },
  "vpm-05": {
    artifacts: [
      "The authenticated vulnerability-scan results across the asset estate",
      "Scan-coverage report — assets actually scanned vs total in the CMDB, and authenticated vs unauthenticated",
      "Risk-based prioritisation data — CVSS combined with EPSS and the KEV flag and asset exposure",
      "Remediation SLA tracking + aging report, with rescan-verified closures",
    ],
    test: "Assess the vulnerability-management lifecycle end to end. PASS: scans are authenticated and cover ~100% of the CMDB on cadence; findings are prioritised risk-based (CVSS + EPSS + KEV + exposure, not raw CVSS); remediation meets SLA; and closure is verified by rescan. Exceptions: large unscanned or unauthenticated coverage gaps, prioritisation by CVSS alone, SLA breaches, and findings 'closed' without a confirming rescan.",
    systems: ["Tenable / Qualys / Rapid7 (the scanner)", "CMDB (the coverage denominator)", "FIRST EPSS + CISA KEV (prioritisation inputs)", "Ticketing (remediation workflow)"],
    owners: ["Security operations / Vulnerability management — owns the program", "Asset & server owners — remediate", "Risk — accepts residual risk"],
    tools: [
      "Tenable.sc/io: scan-coverage + scan-age report; flag unauthenticated scans (credential failures)",
      "coverage = distinct scanned assets ÷ CMDB assets (the gap is your blind spot)",
      "enrich each CVE with its EPSS score (api.first.org/data/v1/epss) and KEV flag",
      "remediation aging buckets (0-30 / 30-90 / 90+ days) by severity",
    ],
    finding: "Scanner coverage is ~70% of the CMDB and ~40% of scans are unauthenticated (so they miss most host vulnerabilities); a backlog of KEV-listed criticals sits unremediated on the unscanned remainder.",
    refs: [["CISA KEV", "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"], ["FIRST EPSS", "https://www.first.org/epss/"], ["CIS Control 7", "https://www.cisecurity.org/controls"]],
  },
  "vpm-06": {
    artifacts: [
      "The host logging configuration (what's collected: authentication, process-creation, PowerShell script-block, Sysmon, EDR telemetry)",
      "Log-forwarding coverage — hosts shipping to the SIEM vs total in the CMDB",
      "The detection use-case list mapped to MITRE ATT&CK techniques",
      "Log retention period + tamper-protection settings",
    ],
    test: "Verify hosts produce and ship security-relevant logs. PASS: required event sources are enabled (authentication, process-creation with command line, PowerShell script-block, Sysmon, EDR), ~100% of hosts forward to the SIEM, logs are retained per policy and tamper-protected, and key ATT&CK techniques have detections. Exceptions: hosts not forwarding (logging blind spots), missing event sources (e.g. process-creation auditing off), retention below policy, and ATT&CK coverage gaps.",
    systems: ["Sysmon / Windows Event Log / auditd (host configuration)", "SIEM — Splunk / Microsoft Sentinel (forwarding + retention)", "EDR telemetry", "MITRE ATT&CK (coverage mapping)"],
    owners: ["Security operations / detection engineering", "Platform — deploys the agents", "Server owners"],
    tools: [
      "SIEM: hosts reporting in the last 24h vs CMDB (forwarding-coverage gap)",
      "audit policy: confirm Event ID 4688 process-creation + command-line capture and 4104 script-block logging are enabled",
      "Sysmon configuration review (process, network, image-load coverage)",
      "ATT&CK Navigator layer of current detections vs the technique list",
    ],
    finding: "About 15% of servers send no logs to the SIEM, and command-line process auditing (4688) is off fleet-wide — so the single most useful host telemetry for investigations is simply missing.",
    refs: [["NIST SP 800-92 Log Management", "https://csrc.nist.gov/pubs/sp/800/92/final"], ["MITRE ATT&CK", "https://attack.mitre.org/"], ["CIS Control 8", "https://www.cisecurity.org/controls"]],
  },
  "vpm-07": {
    artifacts: [
      "The red-team engagement reports with scope and rules of engagement (RoE)",
      "The blue-team detections that fired (or were missed) per attack technique",
      "The purple-team coverage matrix — techniques exercised vs techniques detected",
      "Remediation tracking + retest evidence for findings",
    ],
    test: "Assess the red/blue/purple program. PASS: adversary-emulation exercises run on cadence against realistic ATT&CK techniques with proper RoE; blue-team detection/response is measured (what was detected, MTTD/MTTR); a purple-team matrix shows technique coverage; and findings are remediated and retested. Exceptions: no adversary emulation, tests not mapped to ATT&CK, detections that silently failed and weren't fixed, and findings with no retest.",
    systems: ["Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike", "SIEM/EDR (detection evidence)", "ATT&CK Navigator (coverage)", "Findings tracker"],
    owners: ["Offensive security (red)", "SOC / detection engineering (blue)", "Security leadership"],
    tools: [
      "MITRE Caldera or Atomic Red Team to execute techniques safely",
      "for each executed technique, correlate to a SIEM/EDR alert: detected vs missed",
      "build an ATT&CK Navigator coverage layer from the results",
      "track each finding to closure with retest evidence",
    ],
    finding: "Adversary emulation covers only a handful of ATT&CK techniques; several executed techniques (e.g. LSASS credential dumping) produced no alert, and the detection gap was never remediated.",
    refs: [["MITRE ATT&CK", "https://attack.mitre.org/"], ["NIST SP 800-115 Security Testing", "https://csrc.nist.gov/pubs/sp/800/115/final"]],
  },
  "vpm-08": {
    artifacts: [
      "The malware triage/analysis procedure + sandbox detonation reports",
      "IOC extraction + distribution evidence (hashes/domains/IPs pushed to EDR, SIEM, firewall/DNS)",
      "Sample-handling chain-of-custody + containment evidence",
      "Detection-as-code (YARA/Sigma) produced from the analysis and confirmed deployed",
    ],
    test: "Assess malware-analysis capability and sample handling. PASS: suspected malware is detonated in an isolated sandbox (never production), IOCs are extracted and pushed to enforcement points (EDR block, SIEM watchlist, DNS sinkhole), YARA/Sigma rules are authored and deployed, and samples are contained with chain-of-custody. Exceptions: analysis on production systems, IOCs extracted but never operationalised, no detection content produced, and unsafe sample handling.",
    systems: ["Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation", "EDR / SIEM / firewall / DNS (IOC enforcement)", "Threat-intel platform (MISP)", "YARA/Sigma rule repository"],
    owners: ["SOC / threat analysis / DFIR", "Detection engineering", "Threat intelligence"],
    tools: [
      "detonate in an isolated VLAN sandbox; capture behavioural + network IOCs",
      "push hashes/domains to the EDR block list + DNS sinkhole + SIEM watchlist (confirm live)",
      "author and deploy YARA/Sigma rules; verify the rule is active in the SIEM/EDR",
      "record the campaign + IOCs in MISP for sharing",
    ],
    finding: "Malware is analysed but the IOCs are never fed back into EDR/SIEM block lists, so the same indicators recur weeks later; no YARA/Sigma detections are produced from the work.",
    refs: [["NIST SP 800-83 Malware Incident Prevention", "https://csrc.nist.gov/pubs/sp/800/83/r1/final"], ["MITRE ATT&CK", "https://attack.mitre.org/"]],
  },
  "vpm-09": {
    artifacts: [
      "The inventory of AI-assisted offensive tooling in use, with its authorisation and guardrails",
      "Logs of AI-generated payloads/recon and the human approval gate before execution",
      "Evidence that AI red-team activity stayed within scope/RoE and is fully logged + attributable",
      "Data-handling controls — proof that target/client data isn't sent to ungoverned model endpoints",
    ],
    test: "Assess governance of AI used in offensive security. PASS: AI-assisted red-team tooling is inventoried and authorised; every AI-generated action runs within scope/RoE behind a human-in-the-loop gate; activity is fully logged and attributable; and sensitive target data is not sent to public/ungoverned models. Exceptions: shadow AI offensive tooling, AI actions taken autonomously outside RoE, missing logging/attribution, and target data leaking to public model endpoints.",
    systems: ["The AI/LLM tooling and its API/usage logs", "C2 / emulation integration", "Authorisation / RoE records", "DLP for prompt content"],
    owners: ["Offensive security", "AI governance / responsible-AI", "Security leadership"],
    tools: [
      "inventory AI offensive tools and confirm each engagement's authorisation",
      "review LLM API logs for prompts/outputs tied to the engagement (attribution)",
      "confirm a human-approval gate exists before any AI-driven action executes",
      "DLP/policy check that target or client data is not pasted into public model endpoints",
    ],
    finding: "An engineer uses a public LLM to generate phishing pretexts with real client data pasted into the prompts — outside RoE, unlogged, and a data-leak in its own right.",
    refs: [["NIST AI Risk Management Framework", "https://www.nist.gov/itl/ai-risk-management-framework"], ["MITRE ATLAS", "https://atlas.mitre.org/"]],
  },
  "vpm-10": {
    artifacts: [
      "The pipeline from cloud vulnerability finding (CSPM/scanner) to a ticket with an owner and SLA",
      "Auto-routing rules (finding → owning team by resource tag) + the deduplication logic",
      "SLA + aging report for cloud-infrastructure vulnerability tickets",
      "Closure verification — a rescan confirms the cloud finding is actually gone",
    ],
    test: "Assess the automated cloud-vulnerability ticketing flow (the Security Ticketing Engine). PASS: every cloud finding (CSPM / Inspector / Wiz) auto-creates a ticket routed to the resource owner by tag, with a severity-based SLA, dedup, and closed-loop verification on rescan. Exceptions: findings with no ticket or owner (orphaned risk), tickets with no SLA, duplicate noise drowning real findings, and tickets closed without a confirming rescan.",
    systems: ["CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub", "Ticketing — Jira / ServiceNow", "Cloud tagging (ownership)", "The Security Ticketing Engine automation"],
    owners: ["Cloud security — owns the engine", "Account / resource owners — remediate", "Platform — owns the tagging standard"],
    tools: [
      "AWS Security Hub / Inspector findings → EventBridge → ticket-automation Lambda",
      "route by resource tag (owner/team); dedup by finding id to suppress noise",
      "SLA aging dashboard for cloud tickets by severity",
      "auto-close a ticket only after a rescan shows the finding resolved",
    ],
    finding: "About 30% of cloud findings sit on resources with no owner tag, so they generate orphaned tickets nobody actions; criticals on untagged resources age indefinitely.",
    refs: [["AWS Security Hub", "https://docs.aws.amazon.com/securityhub/"], ["Cloud Security Alliance CCM", "https://cloudsecurityalliance.org/research/cloud-controls-matrix"]],
  },
};
