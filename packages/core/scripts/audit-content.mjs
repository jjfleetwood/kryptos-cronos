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
};
