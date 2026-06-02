import type { StageConfig, EpochConfig } from "./types";

export const techAudit2Epoch: EpochConfig = {
  id: "tech-audit-2",
  name: "Tech Audit: Technical",
  subtitle: "API Security, Secrets & Cloud Guardrails",
  description: "Hands-on technical audit testing — enumerate and exploit API misconfigurations, hunt for exposed secrets, audit IAM policies, test cloud guardrails, scan IaC templates, and validate container security controls.",
  emoji: "🛠️",
  color: "violet",
  unlocked: true,
};

export const techAudit2Stages: StageConfig[] = [
  // ─── audit-t01: API Security ──────────────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "Stripe Engineering HQ", location: "San Francisco, California", era: "Present Day", emoji: "🔌" },
    id: "audit-t01",
    order: 1,
    title: "The Exposed API",
    subtitle: "OWASP API Top 10 — Broken Object Level Authorization",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-01", name: "API Auditor", emoji: "🔌" },
    challengeType: "ctf",
    info: {
      tagline: "An API that trusts the caller to tell it which objects to return is an API that will return every object.",
      year: 2023,
      overview: [
        "Broken Object Level Authorization (BOLA) has ranked #1 in the OWASP API Security Top 10 since 2019, and it occurs when an API uses a user-supplied identifier to fetch objects without verifying the requester may access that specific object:\n- The mechanism is deceptively simple: the attacker swaps one ID for another.\n- Because the server checks only that the token is valid (authentication), not that the user owns the resource (authorization), it returns whatever object the ID points to — a flaw in object-level authorization logic, not in authentication.",
        "API audits differ from web-app audits because APIs are built assuming only authorized clients call them — an assumption that's almost always wrong:\n- APIs are discoverable through mobile-app traffic analysis, JavaScript bundle inspection, and gateway logs, and their parameters are highly predictable (sequential integers, UUIDs, resource names are all enumerable), so a payment API exposing `GET /api/v1/payments/{payment_id}` returns any payment in the database if BOLA exists.\n- The OWASP API Top 10 (2023) covers ten classes — API1 BOLA, API2 Broken Authentication, API3 Broken Object Property Level Authorization, API4 Unrestricted Resource Consumption, API5 Broken Function Level Authorization, API6 Unrestricted Access to Sensitive Business Flows, API7 SSRF, API8 Security Misconfiguration, API9 Improper Inventory Management, API10 Unsafe Consumption of APIs — and BOLA testing is the most universally applicable since nearly every API exposes object-level endpoints.",
        "Architecture and incidents both point to the same root cause:\n- NIST SP 800-204 and 800-204A recommend that API gateways enforce authorization centrally rather than each microservice implementing its own — inconsistent per-service logic is what creates the object-level gaps, so centralized enforcement via a gateway or service-mesh policy engine (Open Policy Agent, AWS Verified Permissions) is the architectural fix.\n- Real BOLA follows predictable targets by industry — the payment/account ID in fintech, the patient ID in healthcare (HL7 FHIR), the order ID in e-commerce — and the 2022 Optus breach exposed 9.8 million records through a legacy endpoint that took a customer ID and returned the full record (name, address, DOB, passport, license) without checking session ownership while the attacker simply incremented the ID, so every endpoint accepting an object identifier is a BOLA candidate until proven otherwise.",
        "Testing and fixing BOLA both center on server-side ownership:\n- The method needs at least two test accounts with different owned objects: authenticate as User A, capture a legitimate request and its object ID, then authenticate as User B and replay the identical request with User A's ID — if the server returns User A's data, BOLA is confirmed, tested systematically across every resource type (tools like Burp, ZAP, or APIClarity accelerate enumeration but don't replace account setup and analysis).\n- The fix is not harder-to-guess IDs (UUIDs only slow enumeration) but a server-side ownership check before returning the object — `SELECT * FROM payments WHERE payment_id = ? AND user_id = (authenticated_user_id)`, returning HTTP 403 on zero rows — and auditors verify it by confirming the cross-account test now returns 403 without disclosing the resource's existence.",
      ],
      technical: {
        title: "Testing for BOLA in API Audits",
        body: [
          "The systematic test starts before any tool launches:\n- Enumerate all endpoints — from OpenAPI/Swagger specs, mobile-app traffic via a proxy (Burp, mitmproxy), and gateway access logs — and classify each by whether it accepts an object identifier (ID in path, query, or body); `/users/{id}`, `/orders/{order_id}`, `/messages?thread_id=X` are the BOLA candidates, and undocumented endpoints are often most vulnerable since they may have skipped the authorization-review checklist.\n- Set up at least two accounts at the same permission level (User A and User B): perform the target action as A (create an order, make a payment, upload a file), note the returned object IDs, keep both tokens separate, then authenticate as B and replay every A request with A's IDs — HTTP 200 with A's data confirms BOLA, while 403 or 404 means protected (though 404 instead of 403 may still leak existence and warrants a secondary finding).",
          "Two steps extend and confirm the testing:\n- Automated fuzzing extends coverage — Burp Intruder or custom scripts enumerate sequential IDs across a range to find others' resources; for UUID APIs it's less effective, but UUIDs can often be harvested via other flaws (verbose errors, leaky responses, IDOR in metadata endpoints), and the auditor documents how many records were accessible, the data sensitivity, and whether authentication was required at all (unauthenticated BOLA, as in Peloton, is an automatic critical finding).\n- Remediation verification re-runs the original test after the fix: confirm 403 (not 200) when B requests A's object, no resource-existence disclosure, audit logs capturing the unauthorized attempt, and rate limiting preventing enumeration-at-scale — with evidence comprising the original BOLA request/response, the post-fix 403, and a screenshot of the server-side ownership check if code review is in scope (OWASP WSTG-ATHZ-01 is the authoritative test case).",
          "Two dimensions of analysis shape the finding:\n- Horizontal versus vertical — horizontal BOLA (another user's object at the same privilege) is the common form and OWASP API1's focus, while vertical BOLA (an admin-owned object as a regular user) overlaps with Broken Function Level Authorization (API5); both must be tested, since an endpoint like `GET /admin/users/{id}/permissions` may be function-level protected (only admins reach it) yet still have horizontal BOLA within the admin tier (Admin A modifying Admin B's config).\n- Impact rating via CVSS 3.1 — typically CRITICAL (9.1) when PII or financial data is exposed without authentication and HIGH (7.5) when it requires authentication but crosses user boundaries (Confidentiality HIGH, Integrity and Availability NONE), used with the OWASP Risk Rating Methodology to set priority: critical before the next production deployment, high within the sprint.",
          "False positives need careful handling so an indirect control isn't mistaken for a flaw:\n- Some APIs look like BOLA but authorize through an indirect chain — e.g., a payment ID that's a non-enumerable hash of the user ID and a timestamp, so a random ID returns 404 because the hash maps to no record.\n- Auditors confirm this isn't security through obscurity by verifying the server explicitly checks ownership in the database query rather than relying on ID non-guessability — a proper authorization check must be present regardless of ID format.",
        ],
      },
      incident: {
        title: "Peloton API BOLA — 3M User Records Exposed (2021)",
        when: "January 2021",
        where: "Peloton Interactive",
        impact: "3 million users' private profile data exposed; no authentication required for some endpoints",
        body: [
          "Security researcher Jan Masters found in January 2021 that Peloton's API let anyone query any user's private profile data, with several endpoints requiring no authentication at all:\n- The exposed data included age, weight, location, workout history, and gender identity, and the API had been in production for years — the flaw was baked into the original design, not a recent change.\n- Masters disclosed responsibly on January 20, 2021 and was told the exposure was 'by design' for public profile sharing — a response that ignored that those 'public' endpoints were returning data users had marked private.",
          "The technical root cause was a two-part failure:\n- Certain data-returning endpoints checked only that the requester had a valid token, not that the token's owner matched the requested user ID — the canonical BOLA pattern.\n- A separate set of leaderboard and class endpoints had no authentication check at all, relying on the assumption that unauthenticated clients would only call them through the approved app flow — which breaks the moment anyone queries the API directly.",
          "The response and the detection gap both follow common patterns:\n- Peloton initially disputed the severity, citing 'public' profile data, until Masters escalated to TechCrunch on May 5, 2021 and Peloton patched within two days — 90 days after disclosure; the regulatory consequence was limited (no financial data) but the reputational damage was significant for a trust-dependent health brand.\n- BOLA persists because signature-based IDS can't detect it: there's no malformed packet or injection string, traffic looks identical to legitimate calls except the object ID belongs to another user — so detection requires behavioral analytics, and an anomaly rule on unique user IDs queried per session per hour would have flagged the enumeration within minutes, but Peloton's logging had no ownership-mismatch alerts.",
          "Peloton's remediation and the broader lesson reinforce full-surface testing:\n- It added authentication to all previously public endpoints, server-side ownership verification to all user-specific endpoints, and engaged a third-party API security firm — whose audit found additional BOLA on less-prominent endpoints for fitness-challenge data and user connection graphs.\n- The lesson for auditors: when BOLA appears on a primary endpoint, always test the full API surface, because the developer pattern that caused it was usually reused across the codebase.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker (User A)", sub: "legitimate auth token", type: "attacker" },
          { label: "API Endpoint", sub: "/payments/{id}", type: "system" },
          { label: "Authorization Check", sub: "missing or bypassed", type: "victim" },
          { label: "User B's Data", sub: "returned to User A", type: "result" },
        ],
      },
      timeline: [
        { year: 2019, event: "OWASP API Security Top 10 first published — BOLA listed as #1" },
        { year: 2021, event: "Peloton API — 3M users exposed via BOLA", highlight: true },
        { year: 2022, event: "Optus Australia — API BOLA exposes 9.8M customer records" },
        { year: 2023, event: "OWASP API Top 10 updated — BOLA remains #1" },
      ],
      keyTakeaways: [
        "BOLA is the #1 API vulnerability — always verify the caller owns the requested object, not just that the token is valid",
        "Test by swapping object IDs between two authenticated test accounts at the same privilege level",
        "Unauthenticated API endpoints require explicit, documented business justification — absence of justification is an automatic finding",
        "Enumerate all endpoints including undocumented ones — use API gateway logs, OpenAPI specs, mobile app traffic analysis",
        "UUIDs do not prevent BOLA — non-guessable IDs reduce enumeration speed but do not replace server-side ownership checks",
        "Detection requires behavioral analytics: flag sessions querying many distinct user-object IDs in rapid succession",
        "Remediation must be verified: re-run the cross-account test after the fix and confirm HTTP 403 (not 404, which leaks existence)",
        "CVSS scoring: unauthenticated BOLA exposing PII is typically CRITICAL (9.1+); authenticated cross-user access is HIGH (7.5)",
        "Rate limiting alone is insufficient — it slows enumeration but does not fix the authorization gap",
        "After finding BOLA on one endpoint, audit the full API surface — the same developer pattern appears across related endpoints",
      ],
      references: [
        { title: "OWASP API Security Top 10 — 2023", url: "https://owasp.org/API-Security/editions/2023/en/0x11-t10/" },
        { title: "OWASP API Security Testing Guide", url: "https://owasp.org/www-project-api-security/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t01-q1", type: "Core Idea", challenge: "Trusting the caller.", text: "What is BOLA (Broken Object Level Authorization)?", options: ["An API checks you're logged in but not that you own the object you're requesting","A network firewall rule","A password policy","An encryption mode"], correctIndex: 0, explanation: "BOLA lets any authenticated user fetch another user's data by referencing its ID." },
        { id: "audit-t01-q2", type: "OWASP", challenge: "Top of the API list.", text: "Where does BOLA rank in the OWASP API Security Top 10?", options: ["#1 — the most common API flaw","Not listed","#10","It's a network risk only"], correctIndex: 0, explanation: "Broken Object Level Authorization is API1, the top API risk." },
        { id: "audit-t01-q3", type: "Testing", challenge: "How to find it.", text: "What's the primary way to test for BOLA?", options: ["Swap object IDs between two authenticated test accounts","Guess passwords","Scan for open ports","Read the privacy policy"], correctIndex: 0, explanation: "If account A can read account B's object by changing the ID, that's BOLA." },
        { id: "audit-t01-q4", type: "Real Incident", challenge: "Peloton, 2021.", text: "What made the Peloton API BOLA especially severe?", options: ["Some endpoints required no authentication at all","It deleted all data","It only affected admins","It was a hardware fault"], correctIndex: 0, explanation: "Unauthenticated endpoints returned private profile data to anyone." },
        { id: "audit-t01-q5", type: "Scope", challenge: "Beyond the docs.", text: "Is it enough to test only the documented endpoints?", options: ["No — undocumented endpoints must be enumerated too","Yes — docs cover everything","Only for small APIs","Only the homepage matters"], correctIndex: 0, explanation: "Hidden endpoints are still reachable and must be tested." },
        { id: "audit-t01-q6", type: "Correct Behavior", challenge: "The right response.", text: "How should an API respond when user A requests user B's object?", options: ["HTTP 403 Forbidden with no object data","200 OK with the data","301 redirect","500 error with a stack trace"], correctIndex: 0, explanation: "Deny with 403 and return nothing — never leak the object." },
        { id: "audit-t01-q7", type: "Fix", challenge: "Closing it.", text: "How do you fix BOLA?", options: ["Verify object ownership/authorization on every request, server-side","Hide the IDs","Use longer IDs","Trust the token alone"], correctIndex: 0, explanation: "A valid token isn't enough — check that this caller may access this object." },
        { id: "audit-t01-q8", type: "Concept", challenge: "Tie it together.", text: "The lesson of an exposed API is…", options: ["An API that trusts the caller to name the objects will return every object","APIs are always safe","Authentication equals authorization","IDs should be sequential"], correctIndex: 0, explanation: "Authentication ≠ authorization; ownership must be enforced." },
      ],
    },
    ctf: {
      scenario: "You are auditing a fintech API. You have two test accounts. Probe the payment endpoint to confirm whether BOLA exists, then document the finding.",
      hint: "Use the test-api command to probe the payments endpoint with different IDs.",
      hints: [
        "Read the API docs: cat API-DOCS.txt",
        "Test your own payment: test-api GET /payments/PAY-1001 --token USER_A",
        "Test BOLA: test-api GET /payments/PAY-2099 --token USER_A",
        "Document: cat findings/BOLA-FINDING.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/API-DOCS.txt", value: "FLAG{B0L4_", label: "API Docs — Loaded" },
        { trigger: "test-api GET /payments/PAY-2099 --token USER_A", value: "4P1_0W4SP_", label: "BOLA — Confirmed via Cross-Account Access" },
        { trigger: "/findings/BOLA-FINDING.txt", value: "CR1T1C4L}", label: "Finding — Documented" },
      ],
      files: {
        "/API-DOCS.txt": [
          "FINTECH API — ENDPOINT REFERENCE",
          "==================================",
          "GET /payments/{payment_id}",
          "  Auth: Bearer token required",
          "  Returns: Payment details for the given payment_id",
          "  Expected: Returns only the authenticated user's own payments",
          "",
          "Test accounts:",
          "  USER_A token: Bearer eyJUSERA...",
          "  USER_B token: Bearer eyJUSERB...",
          "",
          "USER_A payments: PAY-1001, PAY-1002",
          "USER_B payments: PAY-2099, PAY-2100",
          "",
          "Test BOLA: Can USER_A retrieve USER_B's payment (PAY-2099)?",
        ].join("\n"),
        "/findings/BOLA-FINDING.txt": [
          "FINDING: BROKEN OBJECT LEVEL AUTHORIZATION (BOLA)",
          "===================================================",
          "Endpoint: GET /payments/{payment_id}",
          "Test: Authenticated as USER_A, requested PAY-2099 (belongs to USER_B)",
          "Result: API returned USER_B payment data — BOLA CONFIRMED",
          "",
          "Condition: API returns payment data for any payment_id without verifying ownership.",
          "Criteria: OWASP API Top 10 API1:2023 — authorization must be object-level.",
          "Cause: Server-side code uses payment_id directly without ownership check.",
          "Effect: Any authenticated user can access any other user's payment history.",
          "",
          "Rating: CRITICAL — financial data exposure",
          "Remediation: Add server-side ownership verification before returning object.",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "API-DOCS.txt", isDir: false }, { name: "findings", isDir: true }],
        "/findings": [{ name: "BOLA-FINDING.txt", isDir: false }],
      },
      extraCommands: {
        "test-api": (args) => {
          const fullCmd = args.join(" ");
          if (fullCmd.includes("PAY-2099") && fullCmd.includes("USER_A")) {
            return {
              lines: [
                "GET /payments/PAY-2099 — Status: 200 OK",
                "",
                'Response: {"payment_id":"PAY-2099","user_id":"user_b","amount":3500.00,"card_last4":"4242","merchant":"Amazon"}',
                "",
                "⚠  BOLA CONFIRMED: USER_A token returned USER_B payment data.",
                "Fragment collected. See findings/BOLA-FINDING.txt for full write-up.",
                "",
                ">> LEARN: BOLA = Broken Object Level Authorization (OWASP API #1)",
                "   The API checked that the token was valid — but NOT that user_a owns PAY-2099.",
                "   Any user can access any other user's data by changing the object ID in the URL.",
                "   Fix: server must verify ownership on every request, not just authentication.",
              ],
            };
          }
          if (fullCmd.includes("PAY-1001") && fullCmd.includes("USER_A")) {
            return {
              lines: [
                "GET /payments/PAY-1001 — Status: 200 OK",
                'Response: {"payment_id":"PAY-1001","user_id":"user_a","amount":150.00}',
                "Legitimate access — this is USER_A's own payment.",
                "",
                ">> LEARN: This is what CORRECT authorization looks like",
                "   user_id in the response matches the authenticated user. Ownership verified.",
                "   Now try: test-api GET /payments/PAY-2099 --token USER_A to find the BOLA.",
              ],
            };
          }
          return { lines: [`Usage: test-api GET /payments/{id} --token USER_A|USER_B`] };
        },
      },
    },
  },

  // ─── audit-t02: Secrets Management ────────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "HashiCorp Headquarters", location: "San Francisco, California", era: "Present Day", emoji: "🔑" },
    id: "audit-t02",
    order: 2,
    title: "Secrets in the Open",
    subtitle: "Secrets Management — Vault, Rotation, and Exposure Detection",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-02", name: "Secrets Hunter", emoji: "🔑" },
    challengeType: "ctf",
    info: {
      tagline: "A secret committed to git is no longer a secret. It is a public credential with a timestamp.",
      year: 2022,
      overview: [
        "Secrets management audits hunt for hardcoded credentials, API keys, tokens, and passwords embedded in source code, config files, CI/CD variables, container image layers, and infrastructure-as-code templates:\n- OWASP A07:2021 (Identification and Authentication Failures) and A02:2021 (Cryptographic Failures) both treat secrets management as a foundational control.\n- GitGuardian's 2023 State of Secrets Sprawl found over 10 million secrets exposed in public GitHub repos — up 67% from 2022 — with the average exposed secret staying valid and unrevoked for over 500 days after detection, so persistence after discovery is as much a problem as the initial exposure.",
        "A mature program rests on three pillars, mapped to a defined lifecycle:\n- Centralized storage — all secrets in a dedicated store (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager), never in code, config, env files, or CI/CD dashboards; dynamic generation — short-lived, unique credentials issued on demand per instance or session instead of one shared static password; and automated rotation — credentials replaced on schedule or immediately on suspected exposure, without manual steps.\n- NIST SP 800-57 frames the lifecycle — generation (CSPRNG), distribution (encrypted, authenticated channels), storage (HSM or software vault with access logging), use (runtime injection, never in code), rotation (scheduled or event-driven), and destruction (cryptographic erasure with audit trail) — and the most common finding is that generation and storage are handled well but rotation is missing or manual.",
        "Two conditions make exposed secrets hard to contain:\n- Secrets sprawl — one AWS key pair might live in the developer's laptop, three git commits (initial, update, failed deletion), two CI/CD systems, a Docker layer, a Kubernetes secret, and a legacy EC2 config file, so rotating it after exposure means updating every location at once, and an incomplete inventory leaves the old key alive somewhere (GitGuardian estimates the average enterprise has over 1,000 unique secrets in sprawl).\n- The git-history problem — committing a key on January 15 and deleting it on January 16 removes it only from HEAD, not from history: every clone made before deletion has it, every CI run between the commits used it, and every fork keeps it permanently; `git filter-branch` and BFG can rewrite the main repo but not forks, clones, or systems that ran the code, so the only correct response is to treat the secret as fully compromised and rotate it immediately, regardless of it being 'just a dev key' or the repo being 'private.'",
        "Two more exposure surfaces are frequently overlooked:\n- CI/CD pipelines — variables in Jenkins, GitHub Actions, GitLab CI, or CircleCI can be logged to build output (if a step runs `set` or `env` unfiltered), reachable by forked pull-request builds (if branch protection is misconfigured), or embedded in artifacts; the 2023 CircleCI breach started with laptop malware that exfiltrated session tokens, then reached project environment variables including AWS credentials for hundreds of customer organizations — so auditors review CI/CD secrets configuration, access controls, and whether fork-based PRs can reach production secrets.\n- Container images — multi-stage Dockerfiles that copy a secret into an intermediate layer and 'delete' it later still retain it, since layers are immutable and additive (a secret in layer N stays accessible even after layer N+1 removes it); tools like Dive or Trivy enumerate secrets in layers, and auditors scan every image in the registry, not just running ones, since a dev image with embedded credentials pushed months ago may still be present.",
      ],
      technical: {
        title: "Secrets Scanning and Vault Configuration",
        body: [
          "Repository scanning must cover the full history, not just HEAD:\n- Run Gitleaks or detect-secrets with `--log-opts='--all'` to include all branches and commits, limited to branches pushed to the remote (local-only branches need separate scanning or pre-commit hooks).\n- A secret committed three years ago and later deleted is still in history, still valid until rotated, and present in every pre-deletion clone — so for large repos, scheduled scanning via GitHub Advanced Security secret scanning or GitGuardian provides continuous coverage as new commits arrive.",
          "The Vault configuration audit runs a four-point checklist:\n- Audit logging — confirm `vault audit enable file` has run and logs ship to a SIEM or separate account, since without them there's no record of who accessed which secrets.\n- Secret TTLs — review `max_ttl` per engine: human tokens under 24 hours, highly privileged service tokens under 1 hour.\n- Authentication — flag any static root tokens (unlimited, non-expiring; revoke after setup) and confirm production uses AppRole (apps), Kubernetes auth (pods), or AWS IAM auth (EC2/ECS/Lambda).\n- Dynamic secrets — verify the database secrets engine rotates database credentials, since on-demand unique time-limited credentials eliminate the whole 'stolen database password' class.",
          "Two practices document findings and stop new ones:\n- Evidence — for each exposed secret in history, collect the commit SHA, author, date, file path, and line, plus `aws iam get-access-key-last-used` (or equivalent) to tell potential exposure from confirmed exploitation, and document the exposure window — evidence required for breach-notification analysis under GDPR Article 33 and state laws.\n- Prevention — recommend detect-secrets or gitleaks as a pre-commit hook (via the pre-commit framework) that scans each commit's diff and rejects recognized secret patterns, backed by a CI/CD gate running the same scan on every pull request as a second layer; neither replaces the centralized secrets store, but together they sharply reduce the rate secrets enter the codebase.",
          "Rotation verification confirms a rotation actually took effect:\n- After rotating a credential, verify the old one is genuinely invalid (not still accepted), the new one is in the approved store (not hardcoded in the fix commit), and the rotation caused no service disruption (the app pulled the new credential from the store rather than having the old one baked in).\n- Updating the store entry isn't enough if applications cached the old credential at startup — the old credential stays in active use until each instance restarts, so blue-green deployments or pod restarts are required to complete rotation in containerized environments.",
        ],
        codeExample: {
          label: "Scanning git history for exposed secrets",
          code: `# Gitleaks — scan full git history
gitleaks detect --source . --log-opts="--all" --report-format json

# Output (finding):
{
  "Description": "AWS Access Key",
  "StartLine": 14,
  "EndLine": 14,
  "File": "config/database.yml",
  "Commit": "a3f1c2d",
  "Author": "jsmith",
  "Date": "2023-06-15",
  "Secret": "AKIA[REDACTED]"
}

# Even if the key was deleted in a later commit,
# it is in git history — run: aws iam get-access-key-last-used
# to verify if it was ever used after the exposure date`,
        },
      },
      incident: {
        title: "Uber GitHub Secrets Exposure (2022)",
        when: "September 2022",
        where: "San Francisco, California",
        impact: "Attacker accessed internal Slack, HackerOne tickets, internal dashboards; $148M prior breach settlement",
        body: [
          "The 2022 Uber breach began with MFA-fatigue social engineering against a contractor — repeated push notifications until the exhausted user approved one — but the foothold was only the start:\n- Rapid lateral movement depended entirely on finding hardcoded admin credentials stored in plaintext in a PowerShell script on an internal network share.\n- Those static credentials unlocked Thycotic, Uber's Privileged Access Management system, which in turn held credentials for every other internal system — AWS, Google Workspace, VMware vSphere, and production databases.",
          "The root cause was a scope gap in Uber's secrets program:\n- The program covered source repositories (GitHub scanning was in place) but not internal file shares, legacy scripts, and operational runbooks accumulated over years of DevOps.\n- The PowerShell script with the PAM admin credentials was never flagged because no scanner was pointed at that network share — a textbook case of secrets sprawl, the credential living in an inventory no one had catalogued as an exposure surface.",
          "The regulatory backdrop made the incident especially consequential and pointed to a documentation requirement:\n- Uber was still under an FTC consent decree from the 2016 breach (the $148M settlement and criminal charges against the CISO for concealment), and the 2022 incident happened while it was demonstrating an improved program; the then-CISO claimed limited scope, later disputed as more systems were confirmed compromised.\n- The auditor takeaway: secrets-management scope documentation must include non-standard locations — wiki pages, runbooks, operational scripts, file shares, and email attachments.",
          "Uber's remediation and the broader lesson both push for comprehensive scope:\n- It rotated all Thycotic-accessible credentials, deployed secrets scanning to internal file shares (not just code), migrated PowerShell scripts to Vault-managed retrieval, and added MFA-fatigue protection (number matching, richer push context), while the industry moved toward FIDO2 phishing-resistant MFA to eliminate the initial attack vector.\n- Every secrets audit should include a scope exercise asking the client to enumerate every location a credential could exist, not just where it should — commonly missed spots include CI/CD logs, browser-saved passwords, MDM profiles, network monitoring tools (SNMP strings, Nagios credentials), and legacy backup archives, and discovering undocumented scope gaps is often the audit's highest-value finding.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Exposed Secret", sub: "in code/config/CI", type: "attacker" },
          { label: "Git History", sub: "permanent record", type: "system" },
          { label: "Secrets Store", sub: "Vault / Secrets Manager", type: "victim" },
          { label: "Dynamic Rotation", sub: "short TTL + audit log", type: "result" },
        ],
      },
      timeline: [
        { year: 2020, event: "Samsung — source code with AWS keys pushed to public GitHub" },
        { year: 2022, event: "Uber breach — hardcoded admin credential in PowerShell script", highlight: true },
        { year: 2022, event: "GitGuardian report — 10M secrets exposed in public repos in 2022" },
        { year: 2023, event: "CircleCI breach — secrets extracted from CI/CD environment variables" },
      ],
      keyTakeaways: [
        "Scan full git history — secrets deleted from HEAD are still in every commit object and every historical clone",
        "Dynamic secrets with short TTLs eliminate the value of a stolen credential before an attacker can use it",
        "Secrets scanning scope must cover repositories, CI/CD variables, container image layers, file shares, and operational scripts",
        "Rotation must happen immediately after any possible exposure — not just on schedule — with verification that old credentials are actually invalid",
        "Vault audit logging is non-optional — without it, there is no record of who accessed which secrets during an incident",
        "AppRole and Kubernetes auth replace static root tokens — static root tokens must be revoked after initial setup",
        "Pre-commit hooks catch new secrets before they enter the repository; CI gates provide a second defensive layer",
        "Secrets sprawl audit: enumerate every location where credentials could exist, not just approved locations",
        "MFA fatigue attacks (as in Uber 2022) require FIDO2 phishing-resistant MFA, not just TOTP or push notifications",
        "After any breach involving credential theft, audit cloudtrail/access logs for the exposure window to determine if exploitation occurred",
      ],
      references: [
        { title: "OWASP Secrets Management Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html" },
        { title: "HashiCorp Vault — Secrets Management", url: "https://www.vaultproject.io/docs/what-is-vault" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t02-q1", type: "Core Idea", challenge: "Once it's committed.", text: "Why is a secret committed to git no longer a secret?", options: ["It lives in git history on every clone and fork","Git encrypts it forever","Only the author can see it","Git deletes it automatically"], correctIndex: 0, explanation: "A committed credential is effectively public, with a timestamp." },
        { id: "audit-t02-q2", type: "Myth", challenge: "Just delete it?", text: "Does `git rm` on a secret-containing file remove the secret?", options: ["No — it stays in history on every clone and fork","Yes — it's gone","Only on the main branch","Only after a reboot"], correctIndex: 0, explanation: "You must rotate the secret and rewrite history; rm alone leaves it in the log." },
        { id: "audit-t02-q3", type: "Defense", challenge: "Dynamic secrets.", text: "How do HashiCorp Vault dynamic secrets reduce risk?", options: ["They generate short-TTL credentials per request, so a stolen one expires fast","They print secrets to the console","They store secrets in git","They never expire"], correctIndex: 0, explanation: "Short-lived, per-request credentials make a leaked static secret far less useful." },
        { id: "audit-t02-q4", type: "Real Incident", challenge: "Uber, 2022.", text: "What enabled lateral movement in the 2022 Uber breach?", options: ["A hardcoded admin credential in a PowerShell script on an internal share","A zero-day in Windows","A phished customer","A DDoS attack"], correctIndex: 0, explanation: "A hardcoded admin secret in an internal script gave the attacker the keys." },
        { id: "audit-t02-q5", type: "Coverage", challenge: "Where to scan.", text: "Where must a secrets-scanning program look?", options: ["Repos, CI/CD variables, container images, file shares, and internal scripts","Only the main repo","Only production servers","Only email"], correctIndex: 0, explanation: "Secrets hide everywhere; scan the whole software supply chain." },
        { id: "audit-t02-q6", type: "Best Practice", challenge: "Keep TTLs short.", text: "What's a recommended max TTL for automated systems pulling from Vault?", options: ["Around 1 hour","1 year","Never expire","30 days"], correctIndex: 0, explanation: "Short TTLs (≈1 hour) limit the window a leaked credential is valid." },
        { id: "audit-t02-q7", type: "Remediation", challenge: "After a leak.", text: "When a secret is found in git, the first step is to…", options: ["Rotate (revoke and reissue) the secret — assume it's compromised","Just delete the file","Make the repo private","Add a comment"], correctIndex: 0, explanation: "Once exposed, it must be rotated; removing the file doesn't undo the exposure." },
        { id: "audit-t02-q8", type: "Concept", challenge: "Tie it together.", text: "A secret in source control is best thought of as…", options: ["A public credential with a timestamp","A safe backup","An encrypted vault","A private note"], correctIndex: 0, explanation: "Treat any committed secret as already public." },
      ],
    },
    ctf: {
      scenario: "You are auditing a startup's repository for secrets exposure. Scan the repo directory and find the hardcoded credential, then verify the Vault configuration is correctly set up.",
      hint: "Scan the repo files for secrets patterns, then check the Vault config.",
      hints: [
        "List the repo: ls repo/",
        "Scan for secrets: scan-secrets repo/",
        "Read the config file with the secret: cat repo/config/database.yml",
        "Check Vault config: cat VAULT-CONFIG.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/repo/config/database.yml", value: "FLAG{S3CR3TS_", label: "Hardcoded Secret — Found in Config" },
        { trigger: "scan-secrets repo/", value: "3XP0S3D_G1T_", label: "Secrets Scan — Completed" },
        { trigger: "/VAULT-CONFIG.txt", value: "H1ST0RY}", label: "Vault Config — Reviewed" },
      ],
      files: {
        "/repo/config/database.yml": [
          "# Database configuration",
          "production:",
          "  host: db.internal.company.com",
          "  port: 5432",
          "  database: prod_db",
          "  username: prod_user",
          "  password: Sup3rS3cr3tPa$$w0rd2024!",
          "",
          "aws:",
          "  access_key_id: AKIAIOSFODNN7EXAMPLE",
          "  secret_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
          "  region: us-east-1",
          "",
          "# TODO: move these to environment variables (jsmith, 2023-01-15)",
          "",
          "# ─────────────────────────────────────────────────────────────────────",
          "# WHAT YOU'RE LOOKING AT: Three critical secrets violations in one file",
          "#",
          "# 1. Plaintext database password in a config file committed to git.",
          "#    Anyone with repo access — past or present — has this password.",
          "#    Fix: store in HashiCorp Vault, AWS Secrets Manager, or env variable.",
          "#",
          "# 2. AWS Access Key ID (AKIA prefix = real, active key format).",
          "#    If this repo is or ever was public, this key is compromised.",
          "#    Check: aws cloudtrail lookup-events to see if it was misused.",
          "#",
          "# 3. AWS Secret Access Key (the pair that authenticates AWS API calls).",
          "#    Together, AKID + secret key = full programmatic AWS access.",
          "#    An attacker with these can spin up EC2, access S3, exfiltrate data.",
          "#",
          "# The TODO comment says 'jsmith, 2023-01-15' — this has been sitting here",
          "# for over a year. This is how real exposures happen.",
          "# ─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
        "/repo/src/app.py": [
          "# Application entry point",
          "import os",
          "from flask import Flask",
          "",
          "app = Flask(__name__)",
          "",
          "# Config loaded from environment",
          "app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')",
          "",
          "if __name__ == '__main__':",
          "    app.run()",
        ].join("\n"),
        "/VAULT-CONFIG.txt": [
          "HASHICORP VAULT CONFIGURATION REVIEW",
          "=====================================",
          "Vault address: https://vault.internal:8200",
          "",
          "FINDING 1 — Audit logging: DISABLED",
          "  Risk: No record of who accessed which secrets or when.",
          "  Fix: vault audit enable file file_path=/var/log/vault/audit.log",
          "  Why it matters: If a secret is misused, you need to know who retrieved it.",
          "",
          "FINDING 2 — Secret TTL: 87600h (10 years)",
          "  Risk: A stolen secret is valid for 10 years before automatic expiry.",
          "  Fix: max_ttl = 24h for human access, 1h for automated systems.",
          "  Why it matters: Short TTL = stolen credential expires before attacker can use it.",
          "",
          "FINDING 3 — Auth method: Token (static root token)",
          "  Risk: Static root tokens never expire and have unlimited permissions.",
          "  Fix: Use AppRole (for apps) or Kubernetes auth (for pods). Revoke root token.",
          "  Why it matters: Root token = keys to the entire Vault. Must not be used regularly.",
          "",
          "FINDING 4 — Dynamic secrets: NOT configured",
          "  Risk: All secrets are static long-lived credentials.",
          "  Fix: Configure Vault database secrets engine — generates temporary DB credentials",
          "       per-request, auto-revoked after TTL. No static password anywhere.",
          "  Why it matters: Dynamic secrets eliminate the entire class of 'stolen credential' risk.",
          "",
          "OVERALL: Vault is installed but providing no meaningful security benefit.",
          "The database.yml still uses hardcoded credentials — Vault is bypassed entirely.",
          "",
          "─────────────────────────────────────────────────────────────────────",
          "WHAT YOU'RE LEARNING: The difference between having a secrets tool",
          "and actually using it. Vault without proper config = false sense of security.",
          "Real Vault setup: dynamic secrets + short TTL + audit log + no static tokens.",
          "─────────────────────────────────────────────────────────────────────",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "repo", isDir: true }, { name: "VAULT-CONFIG.txt", isDir: false }],
        "/repo": [{ name: "config", isDir: true }, { name: "src", isDir: true }],
        "/repo/config": [{ name: "database.yml", isDir: false }],
        "/repo/src": [{ name: "app.py", isDir: false }],
      },
      extraCommands: {
        "scan-secrets": (args) => {
          if (args[0] && args[0].includes("repo")) {
            return {
              lines: [
                "Scanning repo/ for secrets...",
                "",
                "[CRITICAL] repo/config/database.yml:6 — Database password (plaintext)",
                "[CRITICAL] repo/config/database.yml:9 — AWS Access Key ID (AKIA...)",
                "[CRITICAL] repo/config/database.yml:10 — AWS Secret Access Key",
                "",
                "3 secrets found. Check git log for commit history:",
                "  git log --all -- repo/config/database.yml",
                "  Committed: 2023-01-15 by jsmith — in git history permanently.",
                "",
                ">> LEARN: Secrets scanner output is only the beginning",
                "   Step 1: Identify (done). Step 2: Verify — is this real or a test fixture?",
                "   Step 3: Assess exposure — was this repo ever public? Who had access?",
                "   Step 4: Rotate immediately. Step 5: Audit logs for misuse during exposure window.",
                "   Step 6: Add pre-commit hook to prevent re-occurrence.",
                "",
                ">> LEARN: The git history is permanent",
                "   'git rm' removes from current HEAD — it does NOT remove from git history.",
                "   Every clone, fork, and CI run that ran before deletion has a copy.",
                "   Real removal: git filter-branch or BFG Repo Cleaner, then force-push all branches.",
                "   Even then, any fork or clone retains the secret. Treat it as compromised.",
                "",
                "Fragment collected.",
              ],
            };
          }
          return { lines: ["Usage: scan-secrets <directory>"] };
        },
      },
    },
  },

  // ─── audit-t03: Cloud Guardrails ───────────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "AWS re:Inforce Conference", location: "Boston, Massachusetts", era: "Present Day", emoji: "☁️" },
    id: "audit-t03",
    order: 3,
    title: "Guardrails in the Cloud",
    subtitle: "AWS SCPs, Config Rules, and CloudTrail Audit",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-03", name: "Cloud Auditor", emoji: "☁️" },
    challengeType: "ctf",
    info: {
      tagline: "A cloud account without guardrails is a credit card with no spending limit pointed at the internet.",
      year: 2019,
      overview: [
        "Cloud security audits verify that preventive controls (guardrails that block dangerous actions) and detective controls (mechanisms that catch policy violations after the fact) are configured, comprehensive, and actively monitored:\n- AWS provides three primary guardrails at different layers — Service Control Policies (SCPs) at the Organizations level set the maximum permission boundary, AWS Config Rules continuously evaluate compliance against security policies, and CloudTrail captures an immutable record of every API call.\n- Understanding how the three interact, and where each can fail, is the foundation of cloud security auditing.",
        "The first two guardrails are preventive and detective respectively:\n- SCPs are the most powerful preventive control and the most frequently misconfigured — they define what actions are allowed regardless of IAM grants, and a denial can't be overridden by root, an admin, or any IAM policy, making them the right place for non-negotiable baselines (CloudTrail always enabled, public S3 always blocked, root API calls always denied); auditors review the SCP set against the SCP-appropriate CIS AWS Foundations Benchmark controls.\n- Config Rules detect existing non-compliant states rather than preventing actions — e.g., `s3-bucket-public-read-prohibited` continuously evaluates every bucket — running on configuration-change and periodic triggers so both new violations and drift are caught, with over 300 managed rules plus custom Lambda rules for organization-specific needs.",
        "CloudTrail and the way the three controls combine give defense in depth:\n- A proper CloudTrail setup is enabled in all regions, multi-region with global service events (to capture global IAM and STS events), has log file validation (a SHA-256 hash chain detecting tampering), stores logs in a dedicated security account (so a compromised account can't delete its own audit trail), and integrates with CloudWatch Logs metric filters and alerts — the most critical being root console login, SCP modification, CloudTrail disabling, IAM admin policy changes, and unusual API volume.\n- Together: SCPs prevent the most dangerous actions, Config Rules detect non-compliant configurations, and CloudTrail records everything for investigation — mapping directly to NIST SP 800-53 control families CA, AU, and CM in a cloud context.",
        "Two higher-level concerns complete the audit:\n- CSPM tools (AWS Security Hub, Prisma Cloud, Wiz, Orca) aggregate Config and other findings into a unified compliance score and prioritized list; Security Hub runs the CIS AWS Foundations Benchmark (180+ checks), PCI DSS, and NIST 800-53 in real time, so an auditor starts with the Security Hub score and its control-family breakdown before drilling into findings — below 80% on CIS Foundations is a significant finding.\n- Multi-account architecture adds complexity: auditors verify SCPs are attached at the right OU level without account-level overrides, CloudTrail is enabled in every account (not just management), Config Rules are deployed organization-wide via conformance packs, and Security Hub aggregates findings into a designated security account — the most common gap being controls deployed in the management account but never rolled out to member accounts, leaving blind spots in subsidiary or recently acquired accounts.",
      ],
      technical: {
        title: "Key Cloud Guardrails to Audit",
        body: [
          "The SCP audit maps policies to controls and tests them:\n- Obtain the complete SCP set on the organization, each OU, and each account, map each SCP to the controls it enforces, and flag accounts with fewer SCPs than the baseline (legacy or exception accounts).\n- Verify the minimum controls are present — deny public-access `s3:PutBucketPolicy`/`s3:DeleteBucketPolicy`, deny `cloudtrail:StopLogging`/`cloudtrail:DeleteTrail`, deny IAM user creation without MFA (or entirely, requiring roles), restrict services to approved regions, and deny root API key usage — then test each by attempting the denied action from a test account, expecting `AccessDenied: explicitly denied by a service control policy`.",
          "Config Rule coverage is assessed against the CIS benchmark:\n- Run `aws configservice describe-config-rules`, compare against the CIS AWS Foundations Benchmark rule set, and flag any CIS control with no Config Rule, since those are either unchecked or relying on manual processes.\n- Priority gaps: `iam-root-access-key-check`, `mfa-enabled-for-iam-console-access`, `ec2-imdsv2-check` (preventing SSRF credential theft), `cloudtrail-log-file-validation-enabled`, and `s3-bucket-server-side-encryption-enabled` — each missing rule may mean a control sat non-compliant for months or years undetected.",
          "Two verification passes confirm logging and alerting actually work:\n- CloudTrail — run `aws cloudtrail describe-trails` and confirm `IsMultiRegionTrail: true`, `IncludeGlobalServiceEvents: true`, `LogFileValidationEnabled: true`, and a `HomeRegion` matching the primary region, with the destination S3 bucket in a dedicated security account whose policy allows only CloudTrail to write, denies `s3:DeleteObject` to all principals, and blocks public access, plus active CloudWatch Logs integration with metric filters for the CIS 4.x high-priority conditions.\n- CloudWatch alerts — for each required metric filter (root login, unauthorized API calls, MFA policy changes, NACL changes, security group changes), run `aws cloudwatch describe-alarms`, confirm an alarm with SNS notification exists, and test it end-to-end, since an alarm with an invalid SNS topic ARN or broken email subscription is equivalent to no alert at all.",
          "IMDSv2 enforcement is a specific, critical Config Rule:\n- The EC2 instance metadata service at `169.254.169.254` returns IAM role credentials; IMDSv1 hands them to any HTTP GET — including one made by an SSRF vulnerability — while IMDSv2 requires a PUT with a TTL header to get a session token first, which a basic SSRF can't do.\n- The Capital One breach (2019) exploited IMDSv1 via SSRF, and the `ec2-imdsv2-check` rule identifies all instances still on IMDSv1, which should be zero in a well-managed environment.",
        ],
        codeExample: {
          label: "Auditing CloudTrail configuration via AWS CLI",
          code: `# Check CloudTrail is enabled in all regions
aws cloudtrail get-trail-status --name management-trail

# Verify log file validation
aws cloudtrail describe-trails --query 'trailList[*].{Name:Name,LogValidation:LogFileValidationEnabled}'
# Expected: LogFileValidationEnabled: true for all trails

# Check for root account activity in the last 7 days
aws cloudtrail lookup-events \\
  --lookup-attributes AttributeKey=Username,AttributeValue=root \\
  --start-time 2026-05-08 \\
  --query 'Events[*].{Time:EventTime,Event:EventName}'

# List S3 buckets with public access
aws s3api list-buckets --query 'Buckets[*].Name' | xargs -I{} \\
  aws s3api get-bucket-acl --bucket {} --query 'Grants[?Grantee.URI==\`http://acs.amazonaws.com/groups/global/AllUsers\`]'`,
        },
      },
      incident: {
        title: "Capital One S3 Misconfiguration (2019)",
        when: "March–July 2019",
        where: "AWS US-East-1",
        impact: "106M customer records; $190M settlement; no AWS Config rule for SSRF-exploitable metadata access",
        body: [
          "Capital One's 2019 breach is the canonical cloud case study because it shows how absent guardrails cascade:\n- The initial vector was an SSRF flaw in a misconfigured web application firewall (WAF) on an EC2 instance with an attached IAM role, set up to proxy external HTTP requests.\n- An attacker sent the WAF a request directing it to `http://169.254.169.254/latest/meta-data/iam/security-credentials/[role-name]` (the IMDSv1 metadata endpoint), and because the WAF didn't validate internal versus external URLs, it retrieved and returned the IAM role's temporary AWS credentials to the attacker.",
          "Two specific guardrail failures enabled the breach:\n- The EC2 instance used IMDSv1 — IMDSv2's pre-flight PUT for a session token is something a GET-only SSRF can't perform, so account-wide `ec2-imdsv2-check` enforcement or a metadata-options policy would have returned an error instead of credentials, stopping the breach at initial access.\n- The IAM role was over-permissioned with broad S3 read across the whole account rather than least-privilege access to the one bucket the WAF needed — which is how the attacker exfiltrated 106 million records from numerous buckets over the four-month window.",
          "The monitoring failure was equally consequential:\n- CloudTrail logged every S3 `GetObject` call made with the stolen credentials — over 30 million calls across March to July 2019 — but no CloudWatch alert fired because no volume-based anomaly rule existed for S3 API rates from the compromised role.\n- A threshold like 'more than 10,000 S3 GetObject calls from this role in one hour' would have fired on day one, enabling response in hours rather than months; the breach was instead discovered only when the attacker posted data samples on GitHub and a researcher reported it.",
          "The regulatory consequence and consent order validate every item on the cloud checklist:\n- The $190M FTC and OCC settlement was one of the largest cloud enforcement actions at the time, and the consent order required mandatory IMDSv2 enforcement across all instances, AWS Config Rules for all CIS Benchmark controls, volumetric alerting on S3 API activity, and quarterly third-party cloud posture reviews.\n- Each requirement maps to a specific guardrail that was absent — so for auditors, Capital One is concrete proof that each guardrail matters not as a compliance checkbox but as a barrier to a specific attack path.",
        ],
      },
      diagram: {
        nodes: [
          { label: "SCPs", sub: "preventive guardrails", type: "attacker" },
          { label: "AWS Config Rules", sub: "continuous compliance", type: "system" },
          { label: "CloudTrail", sub: "API activity log", type: "victim" },
          { label: "CloudWatch Alerts", sub: "anomaly detection", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "AWS Config Rules GA — continuous compliance monitoring available" },
        { year: 2019, event: "AWS SCPs fully launched for AWS Organizations" },
        { year: 2019, event: "Capital One — SSRF + S3 misconfiguration; no Config rule caught it", highlight: true },
        { year: 2023, event: "AWS Security Hub — aggregated compliance score across all Config rules" },
      ],
      keyTakeaways: [
        "SCPs override IAM — they are the highest-priority preventive control in AWS and cannot be overridden by account administrators",
        "CloudTrail must be enabled in ALL regions, not just us-east-1, with log file validation and cross-account storage",
        "AWS Config rules provide continuous compliance — every resource is evaluated on change and periodically, not just at audit time",
        "Volume-based CloudWatch alerts (S3 reads per hour, unusual API call rates) catch exfiltration that signature-based detection misses",
        "IMDSv2 enforcement prevents SSRF-based credential theft from EC2 instance metadata — this alone would have prevented the Capital One breach",
        "IAM roles attached to EC2 instances require least-privilege scoping — the WAF role should never have had broad S3 read access",
        "Multi-account environments need organization-wide Config Rule deployment via conformance packs — account-level-only deployment creates blind spots",
        "Security Hub compliance scores below 80% on CIS Foundations Benchmark indicate systemic control gaps",
        "CloudTrail log file validation detects tampering; logs must be stored in a separate security account to survive account compromise",
        "Test SCPs actively — attempt the denied action from a test account and confirm AccessDenied is returned",
      ],
      references: [
        { title: "AWS Security Best Practices — Guardrails", url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html" },
        { title: "CIS AWS Foundations Benchmark", url: "https://www.cisecurity.org/benchmark/amazon_web_services" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t03-q1", type: "Core Idea", challenge: "Why guardrails.", text: "What does a cloud account without guardrails resemble?", options: ["A credit card with no spending limit, pointed at the internet","A locked vault","An air-gapped server","A paper ledger"], correctIndex: 0, explanation: "Without preventive/detective controls, anything can be misconfigured and exposed." },
        { id: "audit-t03-q2", type: "SCPs", challenge: "Who wins.", text: "Can an in-account IAM admin override an AWS Service Control Policy (SCP)?", options: ["No — SCPs override IAM and can't be bypassed within the account","Yes — IAM always wins","Only in us-east-1","Only with MFA"], correctIndex: 0, explanation: "SCPs set an org-level ceiling no in-account admin can exceed." },
        { id: "audit-t03-q3", type: "Continuous Check", challenge: "Always-on compliance.", text: "Which AWS control continuously monitors resources against policies?", options: ["AWS Config Rules","S3 versioning","Route 53","CloudFront"], correctIndex: 0, explanation: "Config Rules evaluate resource compliance continuously, not at a point in time." },
        { id: "audit-t03-q4", type: "Real Incident", challenge: "Capital One, 2019.", text: "Which two guardrail failures enabled the 106M-record exfiltration?", options: ["No Config rule caught the WAF misconfig and no CloudWatch alert fired on S3 call volume","A leaked password and a phishing email","A DDoS and a power outage","A stolen laptop and a weak PIN"], correctIndex: 0, explanation: "Missing detective controls let the misconfig and the mass S3 access go unnoticed." },
        { id: "audit-t03-q5", type: "Logging", challenge: "Everywhere.", text: "Where must CloudTrail be enabled?", options: ["In all regions, not just us-east-1","Only the primary region","Only when audited","Only in production"], correctIndex: 0, explanation: "All-region CloudTrail ensures no API activity goes unlogged." },
        { id: "audit-t03-q6", type: "Log Integrity", challenge: "Protect the logs.", text: "Why store CloudTrail logs in a separate account?", options: ["A compromised admin in the audited account could delete in-account logs","It's faster","It saves money","It's not necessary"], correctIndex: 0, explanation: "Cross-account log storage protects the audit trail from a local compromise." },
        { id: "audit-t03-q7", type: "Concept", challenge: "Prevent vs detect.", text: "SCPs and Config Rules together provide…", options: ["Preventive guardrails plus continuous detection of drift","Only encryption","Only logging","Only alerting"], correctIndex: 0, explanation: "SCPs prevent disallowed actions; Config Rules detect noncompliant state." },
        { id: "audit-t03-q8", type: "Lesson", challenge: "The takeaway.", text: "The core lesson of cloud guardrails is…", options: ["Continuous, automated controls catch misconfigurations humans miss","Manual quarterly review is enough","Guardrails slow teams down for no benefit","Logging is optional"], correctIndex: 0, explanation: "Automated guardrails are how cloud misconfig is actually contained." },
      ],
    },
    ctf: {
      scenario: "You are auditing an AWS environment. Check the SCP configuration, CloudTrail status, and Config rule compliance. Find the three gaps.",
      hint: "Read each configuration file in the aws-audit/ directory.",
      hints: [
        "List: ls aws-audit/",
        "Check SCPs: cat aws-audit/SCP-REVIEW.txt",
        "Check CloudTrail: cat aws-audit/CLOUDTRAIL-STATUS.txt",
        "Check Config Rules: cat aws-audit/CONFIG-RULES.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/aws-audit/SCP-REVIEW.txt", value: "FLAG{4WS_SCPs_", label: "SCP Review — Gaps Found" },
        { trigger: "/aws-audit/CLOUDTRAIL-STATUS.txt", value: "CL0UDT4R41L_", label: "CloudTrail — Status Reviewed" },
        { trigger: "/aws-audit/CONFIG-RULES.txt", value: "C0NF1G_G4PS}", label: "Config Rules — Gaps Confirmed" },
      ],
      files: {
        "/aws-audit/SCP-REVIEW.txt": [
          "SCP CONFIGURATION REVIEW",
          "=========================",
          "Deny public S3 buckets:        PRESENT",
          "Deny CloudTrail disable:        MISSING  ← FINDING",
          "Deny root API calls:            PRESENT",
          "Restrict to approved regions:   PRESENT",
          "Deny IAM user creation w/o MFA: MISSING  ← FINDING",
          "",
          "2 SCPs missing. Attackers who compromise an account admin",
          "can disable CloudTrail and create IAM users without MFA.",
        ].join("\n"),
        "/aws-audit/CLOUDTRAIL-STATUS.txt": [
          "CLOUDTRAIL STATUS REVIEW",
          "=========================",
          "Trail name: management-trail",
          "Enabled: YES",
          "Multi-region: YES",
          "Log file validation: DISABLED  ← FINDING",
          "Log destination: Same account (account-logs-bucket)  ← FINDING",
          "CloudWatch integration: YES",
          "Root account alerts: CONFIGURED",
          "",
          "Logs stored in same account — a compromised admin could delete logs.",
          "Log validation disabled — logs could be tampered without detection.",
        ].join("\n"),
        "/aws-audit/CONFIG-RULES.txt": [
          "AWS CONFIG RULE COMPLIANCE",
          "===========================",
          "s3-bucket-public-read-prohibited:        COMPLIANT",
          "iam-root-access-key-check:               COMPLIANT",
          "iam-user-mfa-enabled:                    NON-COMPLIANT (3 IAM users without MFA)",
          "ec2-imdsv2-check:                        NON-COMPLIANT (12 instances on IMDSv1)",
          "cloudtrail-log-file-validation-enabled:  NON-COMPLIANT",
          "",
          "IMDSv1 on 12 EC2 instances — SSRF to metadata service is trivial.",
          "Same vulnerability class as Capital One breach (2019).",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "aws-audit", isDir: true }],
        "/aws-audit": [
          { name: "SCP-REVIEW.txt", isDir: false },
          { name: "CLOUDTRAIL-STATUS.txt", isDir: false },
          { name: "CONFIG-RULES.txt", isDir: false },
        ],
      },
    },
  },

  // ─── audit-t04: IAM Privilege Analysis ────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "Okta Headquarters", location: "San Francisco, California", era: "Present Day", emoji: "🪪" },
    id: "audit-t04",
    order: 4,
    title: "Who Can Do What",
    subtitle: "IAM Privilege Analysis — Least Privilege and Policy Review",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-04", name: "IAM Auditor", emoji: "🪪" },
    challengeType: "ctf",
    info: {
      tagline: "AdministratorAccess attached to a developer account is not a privilege — it is an attack surface.",
      year: 2021,
      overview: [
        "IAM privilege analysis is one of the highest-value activities in a cloud audit, because excessive permissions are both extremely common and directly enable the worst attack outcomes:\n- The most frequent AWS violations: developer IAM users with `AdministratorAccess` attached (granted for convenience, never restricted), service roles with wildcard (`*`) resource permissions (easier than scoping), IAM users with active access keys older than 90 days (no rotation policy), and third-party integration service accounts with far more permissions than they need.\n- Each pattern is detectable in minutes with standard AWS CLI commands and IAM analysis tools.",
        "Least privilege (NIST SP 800-53 AC-6) requires every principal to hold only the minimum permissions for its function, only as long as needed:\n- In practice it demands two things organizations consistently skip — granular initial scoping (specific actions on specific resources, not broad wildcards) and ongoing review (removing permissions as roles change).\n- AWS IAM Access Analyzer automates the ongoing review by mining CloudTrail to find permissions that exist in a policy but were never used, producing 'unused access' findings for pruning.",
        "Privilege escalation is where a limited user chains API calls into administrative access, often invisible to traditional reviews:\n- The taxonomy (documented by Spencer Gietzen of Rhino Security Labs) covers 20+ paths — the simplest being a user with `iam:CreatePolicyVersion` who creates a new default version of any managed policy granting `AdministratorAccess`, and with `iam:AttachUserPolicy` grants themselves full admin in two calls — paths invisible to reviews that look only at directly attached permissions, not permission chains.\n- Tooling adds depth: AWS IAM Access Analyzer flags external-access findings (policies granting access to external principals or public) and access previews (modeling a change before applying), PMapper (Principal Mapper) builds a directed graph of principals and permissions and computes all paths to `AdministratorAccess`, and Cloudsplaining generates an HTML report of escalation vectors, excessive permissions, and resource wildcards.",
        "Three data sources and review areas anchor the audit:\n- The IAM credential report (`aws iam generate-credential-report` then `get-credential-report`) lists every user's password status and last use, MFA status, and each access key's status, last-used date, and last-used service — yielding automatic findings: root with an active access key (always CRITICAL), password enabled without MFA (HIGH), keys unused for 90 days (MEDIUM, deactivation candidate), and last-used services that don't match the job function (permissions broader than needed).\n- Third-party vendor and service accounts are frequently overlooked — SaaS integrations and vendor support roles often get `AdministratorAccess` or broad custom policies at setup ('we'll scope it down later') and are never reviewed, as in the Okta 2022 breach where the Sitel support vendor's account held excessive permissions to Okta's internal support systems.\n- Cross-account roles need special scrutiny — a role trusting an external account effectively grants that account all the role's permissions, so auditors verify the trust policy names a specific account ID or role ARN (not a wildcard), an External ID condition is present for third-party roles (preventing confused-deputy attacks), and permissions are minimized, with Access Analyzer flagging overly broad trust policies.",
      ],
      technical: {
        title: "IAM Audit Techniques",
        body: [
          "Two automated passes surface most findings:\n- Credential report analysis — parse the CSV and flag root with `access_key_1_active = 'true'` (always CRITICAL), `password_enabled = 'true'` with `mfa_active = 'false'` (HIGH per CIS 1.10), active keys older than 90 days (MEDIUM) or 180 days (HIGH), and last-used services that don't match the user's function (a developer's key doing `ec2:RunInstances` may be expected, but `iam:*` or `kms:Decrypt` from a read-only reporting user is not).\n- Cloudsplaining — run `cloudsplaining scan` over the downloaded policies to flag wildcard actions (`Action: *`), resource wildcards with sensitive actions (`iam:*`, `s3:*`, `kms:*` with `Resource: *`), escalation vectors, data-exfiltration permissions (`s3:GetObject` on `*`, `ssm:GetParameter`, `secretsmanager:GetSecretValue`), and infrastructure-modification permissions, ranking principals by risk score with drill-down.",
          "PMapper finds the escalation paths reviewers miss:\n- Run `principalmapper graph create` to build the IAM graph, then `query 'who can do iam:* with *'` to identify every principal that can perform any IAM action on any resource — equivalent to finding all paths to `AdministratorAccess`.\n- For each principal, `argquery --principal <arn>` shows their available escalation paths, documented with the API-call sequence, the enabling permissions, and which policy on which entity grants them — often revealing that a 'read-only' developer actually has an indirect chain to admin no human reviewer would have spotted.",
          "Access-key rotation must be enforced, not just flagged:\n- Beyond flagging old keys, auditors verify a documented, tested rotation procedure: automated detection of keys older than 90 days (AWS Config rule `access-keys-rotated`), automated notification to owner and manager, a defined grace period (30 days max for high-privilege accounts), and automated deactivation — not just notification — if rotation isn't completed.\n- Without automated enforcement, rotation policies exist only on paper, so test by creating a dummy key in a test account and confirming the detection and notification chain fires within the expected timeframe.",
          "Remediating excessive service-role permissions is always specific replacement:\n- Replace `Action: *` with the specific actions the service uses (verifiable from CloudTrail last-used data) and `Resource: *` with the specific resource ARNs, and add `Condition` blocks where appropriate (`aws:RequestedRegion`, `aws:SourceVpc`, `aws:SourceIp`).\n- After remediation, run a functional test to confirm the service still works, since overly restrictive fixes break legitimate functionality and push teams back to wildcard policies — and document the test results as remediation evidence.",
        ],
        codeExample: {
          label: "Identifying IAM privilege escalation paths with PMapper",
          code: `# Generate IAM graph and find privilege escalation paths
python3 -m principalmapper graph create --account 123456789012

# Find all paths to AdministratorAccess
python3 -m principalmapper query \\
  "who can do iam:* with arn:aws:iam::123456789012:user/dev_user"

# Output:
# dev_user can do iam:CreatePolicyVersion (HIGH RISK)
# Path: dev_user --[iam:CreatePolicyVersion]--> AdminPolicy --[attach]--> dev_user
# This is a privilege escalation path to AdministratorAccess

# Check access keys older than 90 days
aws iam list-users --query 'Users[*].UserName' | xargs -I{} \\
  aws iam list-access-keys --user-name {} \\
  --query 'AccessKeyMetadata[?Status==\`Active\`].[UserName,CreateDate]'`,
        },
      },
      incident: {
        title: "Okta Breach via Lateral Movement (2022)",
        when: "January 2022",
        where: "Okta / Sitel (third-party support)",
        impact: "366 customer Okta tenants potentially accessed; 2.5% of Okta customers affected",
        body: [
          "The 2022 Okta breach began on January 16 when attackers compromised the workstation of a Sitel support engineer with access to Okta's internal support tool:\n- Sitel was a third-party vendor handling Tier 1 support, and the engineer's account reached a super-admin dashboard able to view customer tenant configurations, reset passwords, and manage customer user accounts.\n- It went undetected until a screenshot of the attacker's access was posted on Twitter on March 22 — over two months after the initial compromise.",
          "The core IAM failure wasn't the compromise but the over-permissioning:\n- Social engineering and endpoint compromise are hard to fully prevent; the failure was that the support account held permissions far beyond what Tier 1 support required.\n- Tier 1 support needs to view configurations and escalate tickets — not reset MFA, view sensitive tenant security logs, or access all customers' dashboards at once — yet over-permissioned support accounts are the rule, since support-tool vendors demand 'admin-level' access to handle any possible issue and those grants are never reviewed.",
          "The detection and communication failures were equally damaging:\n- Sitel notified Okta's security team on January 20, four days after the breach, and Okta determined the attacker had a five-day access window.\n- But the scope of what was accessed wasn't fully communicated to customers until March — over two months later, after public disclosure forced the timeline — and the CISO's claim that the blast radius was 'approximately 2.5% of customers' drew backlash because the methodology for clearing the other tenants wasn't disclosed, showing an IAM program needs monitoring, detection, and communication, not just access controls.",
          "Okta's remediation and the resulting audit procedure both treat vendor accounts as higher-risk:\n- Okta terminated the Sitel contract and brought support in-house, implemented just-in-time access for support engineers (on-demand with approval rather than persistent), deployed behavioral analytics to flag anomalous support activity (unusual numbers of tenants, tenants with no open ticket), and mandated annual third-party IAM reviews for all vendor accounts touching customer systems.\n- The auditor procedure for third-party IAM: enumerate all vendor accounts with access to customer or production systems, document each account's permissions, justification, and last-review date, compare granted permissions against tasks actually performed (via access logs), flag any account broader than its documented need, and verify vendor accounts have monitoring at least equal to internal ones — now an explicit requirement under SOC 2 Type II Common Criteria CC6.1.",
        ],
      },
      diagram: {
        nodes: [
          { label: "IAM Principal", sub: "user / role / service", type: "attacker" },
          { label: "Attached Policies", sub: "what actions are allowed", type: "system" },
          { label: "Resource Scope", sub: "specific vs wildcard", type: "victim" },
          { label: "Privilege Escalation Paths", sub: "indirect admin access", type: "result" },
        ],
      },
      timeline: [
        { year: 2018, event: "AWS IAM Access Analyzer launched — automated policy analysis" },
        { year: 2020, event: "Cloudsplaining released — open-source IAM policy analysis tool" },
        { year: 2021, event: "SolarWinds — Orion service account with broad IAM permissions" },
        { year: 2022, event: "Okta breach — overly permissive vendor support account", highlight: true },
      ],
      keyTakeaways: [
        "AdministratorAccess on individual IAM users is almost never justified — use roles with specific permissions and time-bounded sessions",
        "Access keys older than 90 days are a finding — automate rotation with AWS Config rule access-keys-rotated and enforcement",
        "Privilege escalation paths exist beyond direct permissions — use PMapper or Cloudsplaining to analyze indirect chains",
        "Vendor and service accounts need the same least-privilege review as human accounts and should be reviewed more frequently",
        "IAM credential reports are the fastest audit starting point — flag root access keys, users without MFA, and stale access keys immediately",
        "iam:CreatePolicyVersion combined with iam:AttachUserPolicy is a two-step path to AdministratorAccess — flag both permissions together",
        "iam:PassRole + ec2:RunInstances is a privilege escalation path — an attacker can launch EC2 with any role, including admin roles",
        "AWS IAM Access Analyzer unused access findings identify permissions granted but never used — excellent candidate for policy pruning",
        "Cross-account roles must have explicit External ID conditions to prevent confused deputy attacks from unauthorized principals",
        "Just-in-time (JIT) access provisioning for privileged roles eliminates persistent standing access that attackers can exploit",
      ],
      references: [
        { title: "AWS IAM Best Practices", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html" },
        { title: "Cloudsplaining — IAM Least Privilege Analysis", url: "https://github.com/salesforce/cloudsplaining" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t04-q1", type: "Core Idea", challenge: "Admin = attack surface.", text: "Why is AdministratorAccess on a developer account a problem?", options: ["It's an oversized attack surface — compromise grants full control","It speeds up coding","It's required by AWS","It improves security"], correctIndex: 0, explanation: "Excess privilege turns one compromised account into a full breach." },
        { id: "audit-t04-q2", type: "Priv-Esc", challenge: "A sneaky permission.", text: "Why is `iam:CreatePolicyVersion` alone a privilege-escalation path?", options: ["A user can publish a new policy version granting full admin and attach it to themselves","It only reads policies","It logs out other users","It's harmless"], correctIndex: 0, explanation: "Editing a policy version lets a user grant themselves admin." },
        { id: "audit-t04-q3", type: "Priv-Esc Combo", challenge: "Two keys.", text: "Which permission pair lets an attacker run an instance with a privileged role?", options: ["iam:PassRole + ec2:RunInstances","s3:GetObject + s3:PutObject","logs:CreateLogGroup + logs:PutLogEvents","ec2:DescribeInstances + ec2:DescribeTags"], correctIndex: 0, explanation: "PassRole + RunInstances lets you launch an EC2 with an admin role attached." },
        { id: "audit-t04-q4", type: "Real Incident", challenge: "Okta, 2022.", text: "What IAM principle did the 2022 Okta breach violate?", options: ["A third-party vendor support account had broader permissions than its function needed","Passwords were too short","MFA was disabled for all","Logs were deleted"], correctIndex: 0, explanation: "Over-permissioned vendor access — a least-privilege failure — enabled it." },
        { id: "audit-t04-q5", type: "Finding", challenge: "Stale keys.", text: "Access keys older than how long are a security finding?", options: ["90 days","10 years","1 day","They never expire"], correctIndex: 0, explanation: "Long-lived keys (>90 days) on active users should be flagged and rotated." },
        { id: "audit-t04-q6", type: "Best Practice", challenge: "Roles over keys.", text: "For applications, what does AWS recommend instead of IAM users with long-lived keys?", options: ["IAM roles with temporary credentials","Shared root keys","Hardcoded keys in code","No credentials at all"], correctIndex: 0, explanation: "Roles issue short-lived credentials with nothing to leak or rotate." },
        { id: "audit-t04-q7", type: "Principle", challenge: "The governing rule.", text: "Which principle prevents most IAM privilege-escalation paths?", options: ["Least privilege — grant only what each principal needs","Maximum privilege for flexibility","Shared admin accounts","No logging"], correctIndex: 0, explanation: "Least privilege removes the excess permissions escalation relies on." },
        { id: "audit-t04-q8", type: "Concept", challenge: "Tie it together.", text: "An over-permissioned IAM principal is…", options: ["Not a convenience but an attack surface","Always fine if trusted","Required for automation","Invisible to attackers"], correctIndex: 0, explanation: "Every extra permission is something an attacker can abuse." },
      ],
    },
    ctf: {
      scenario: "You are reviewing IAM policies for a cloud environment. Find the developer account with excessive permissions and the service role with a privilege escalation path.",
      hint: "Read the IAM policy files and identify the violations.",
      hints: [
        "List: ls iam-policies/",
        "Review developer policy: cat iam-policies/dev-user-policy.json",
        "Review service role: cat iam-policies/app-service-role.json",
        "View finding: cat findings/IAM-VIOLATIONS.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/iam-policies/dev-user-policy.json", value: "FLAG{14M_", label: "Dev Policy — Excessive Permissions Found" },
        { trigger: "/iam-policies/app-service-role.json", value: "PR1V3SC_W1LDC4RD_", label: "Service Role — Privilege Escalation Path" },
        { trigger: "/findings/IAM-VIOLATIONS.txt", value: "FOUND}", label: "IAM Violations — Documented" },
      ],
      files: {
        "/iam-policies/dev-user-policy.json": [
          '{"Version":"2012-10-17","Statement":[',
          '  {"Effect":"Allow","Action":"*","Resource":"*",',
          '   "Description":"AdministratorAccess — attached to jsmith (developer)"},',
          '  {"Effect":"Allow","Action":["iam:CreatePolicyVersion","iam:AttachUserPolicy"],',
          '   "Resource":"*"}',
          ']}',
          "",
          "// FINDING: Developer jsmith has AdministratorAccess (Action:*)",
          "// FINDING: iam:CreatePolicyVersion allows privilege escalation",
        ].join("\n"),
        "/iam-policies/app-service-role.json": [
          '{"Version":"2012-10-17","Statement":[',
          '  {"Effect":"Allow","Action":"s3:*","Resource":"*"},',
          '  {"Effect":"Allow","Action":"iam:PassRole","Resource":"*"},',
          '  {"Effect":"Allow","Action":"ec2:RunInstances","Resource":"*"}',
          ']}',
          "",
          "// FINDING: s3:* with Resource:* — reads ALL buckets in account",
          "// FINDING: iam:PassRole + ec2:RunInstances = privilege escalation",
          "//          Can launch EC2 with any role, including admin roles",
        ].join("\n"),
        "/findings/IAM-VIOLATIONS.txt": [
          "IAM AUDIT VIOLATIONS",
          "=====================",
          "VIOLATION-01: jsmith (developer) has AdministratorAccess — CRITICAL",
          "  Action: * Resource: * — no restrictions whatsoever",
          "  Remediation: Replace with developer-specific policy (CodeCommit, ECR, Lambda)",
          "",
          "VIOLATION-02: app-service-role has iam:PassRole + ec2:RunInstances — HIGH",
          "  Privilege escalation: role can launch EC2 with an admin role attached",
          "  Remediation: Restrict PassRole to specific non-privileged role ARNs",
          "",
          "VIOLATION-03: app-service-role has s3:* Resource:* — HIGH",
          "  Can read, write, delete ANY S3 bucket in the account",
          "  Remediation: Restrict to specific application bucket ARN",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "iam-policies", isDir: true }, { name: "findings", isDir: true }],
        "/iam-policies": [
          { name: "dev-user-policy.json", isDir: false },
          { name: "app-service-role.json", isDir: false },
        ],
        "/findings": [{ name: "IAM-VIOLATIONS.txt", isDir: false }],
      },
    },
  },

  // ─── audit-t05: Container Security ────────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "Docker Engineering", location: "San Francisco, California", era: "Present Day", emoji: "🐳" },
    id: "audit-t05",
    order: 5,
    title: "The Container Escape",
    subtitle: "Container Security — Image Scanning and Runtime Controls",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-05", name: "Container Auditor", emoji: "🐳" },
    challengeType: "ctf",
    info: {
      tagline: "A container running as root with a mounted host socket is a container that has already escaped.",
      year: 2019,
      overview: [
        "Container security audits evaluate the full lifecycle across four phases:\n- Build — base image selection (outdated or unverified images carry OS CVEs), Dockerfile best practices (non-root `USER`, minimal base images, multi-stage builds excluding build tools), and secrets in layers (credentials copied into intermediate layers and 'deleted' later stay accessible).\n- Registry — push/pull access controls, image signing (Notary or Sigstore for provenance and integrity), and vulnerability-scanning policies that block images above a severity threshold.\n- Runtime — container misconfigurations that create escape paths; and Orchestration — Kubernetes RBAC, network policies, pod security, and secrets management.",
        "The three most critical findings, by severity, are:\n- Running containers as root (UID 0) — a container escape via a kernel vulnerability lands on the host as root with full node control, so processes should run as a non-root UID via the Dockerfile `USER` directive or `securityContext.runAsNonRoot`.\n- Mounting the Docker socket (`/var/run/docker.sock`) — it's the Docker daemon's control plane, so any process with access can run new privileged containers mounting the host filesystem; this isn't an escape, it's host access by design.\n- Base images with known critical CVEs — e.g., CVE-2023-0465 in OpenSSL (CVSS 9.8, TLS cert bypass) or CVE-2023-28531 in OpenSSH (pre-auth RCE) give a direct attack vector — and the CIS Docker Benchmark covers all three plus 97 more controls.",
        "Kubernetes adds an orchestration layer audited independently of the container config:\n- Pod Security Standards (PSA, replacing Pod Security Policies in 1.25) define three levels — Privileged (no restrictions), Baseline (no privileged containers, hostPID, or hostNetwork), and Restricted (non-root UID, read-only root filesystem, no privilege escalation); production namespaces should enforce Restricted, only infrastructure namespaces Baseline or lower, and a namespace with no PSA label defaults to Privileged (a common finding in older clusters).\n- RBAC is the Kubernetes API authorization system, with critical findings being ClusterAdmin bound to a user or service account that shouldn't have it, wildcard verbs or resources in ClusterRoles, service accounts able to `pods/exec`, get secrets, or modify deployments (a compromised pod can then enumerate secrets and escalate), and reliance on the 'default' service account, which often accumulates permissions over time.",
        "Three more controls complete the audit:\n- Image vulnerability management integrates at three points — developer IDE plugins (Snyk, Trivy), a CI/CD gate that blocks images above a severity threshold (the most critical gate), and continuous registry scanning for newly published CVEs; the common finding is CI scanning using a CRITICAL-only threshold that lets exploitable HIGH CVEs through, where best practice is CRITICAL and HIGH for production images.\n- Kubernetes secrets have an encryption-at-rest gap: etcd stores them base64-encoded (encoding, not encryption), readable by anyone with etcd or backup access, so auditors verify the `--encryption-provider-config` flag (AES-CBC, AES-GCM, or KMS), with managed services (EKS, GKE, AKS) offering KMS envelope encryption that should be enabled in production.\n- Network policies define allowed pod traffic, but Kubernetes allows all pod-to-pod communication by default — a flat network like pre-segmentation Target that enabled lateral movement — so auditors verify a supporting CNI (Calico, Cilium, Weave; default kubenet doesn't qualify), default-deny policies in every namespace, and egress limited to required endpoints.",
      ],
      technical: {
        title: "Container Security Scanning",
        body: [
          "Two audit passes cover the image and its runtime:\n- Image scanning — integrate Trivy into CI/CD before the registry push with `trivy image --severity CRITICAL,HIGH --exit-code 1` to fail the build on findings above threshold, and also scan on push at the registry (ECR, GCR, Docker Hub with Snyk) to catch bypassed CI scans and CVEs published after an image is stored, with alerts driving remediation of in-production images.\n- Runtime configuration — for each pod, verify `runAsUser` isn't 0, `allowPrivilegeEscalation` is false, `privileged` is false, no `hostPID`/`hostNetwork`/`hostIPC`, no mounts to sensitive host paths (especially `/var/run/docker.sock`, `/proc`, `/sys`, or `/`), `readOnlyRootFilesystem` true where possible, and CPU/memory resource limits defined to prevent resource-exhaustion attacks.",
          "Two reviews target authorization and the build definition:\n- RBAC audit — `kubectl get clusterrolebindings -o json | jq` to list bindings and flag any `cluster-admin` bound to a service account, a group containing `system:authenticated`, or a non-operator user, plus `kubectl get clusterroles -o json` for wildcard verbs or resources, using `rbac-tool` or `kubectl-who-can` to answer 'who can exec into pods in production?' and 'who can read secrets in kube-system?' to reveal blast radius.\n- Dockerfile review — confirm `FROM` pins a specific version (not `latest`), a `USER` directive sets a non-root user, no secret files are copied, `RUN` commands clean up package caches (`apt-get clean`, `rm -rf /var/lib/apt/lists/*`), and multi-stage builds leave only the binary in the final stage, with base images pulled from trusted registries and verified via signing (Sigstore Cosign, Notary).",
          "In authorized penetration testing, auditors validate isolation by attempting known escapes from inside a test container:\n- With `privileged: true` and `hostPID: true`, `nsenter --target 1 --mount --uts --ipc --net --pid -- /bin/bash` enters the host's namespaces from inside the container.\n- With `/var/run/docker.sock` mounted, `docker run -v /:/host --privileged alpine chroot /host sh` mounts the host filesystem and yields a root shell — and seeing the escape confirmed in a test environment is powerful evidence that removes any ambiguity about whether the finding is theoretical.",
        ],
        codeExample: {
          label: "Container image scan and manifest review",
          code: `# Scan container image for CVEs
trivy image --severity CRITICAL,HIGH company/app:latest

# Output (example):
# Total: 3 (HIGH: 2, CRITICAL: 1)
# ┌────────────────┬───────────────┬──────────┬─────────────────────────────┐
# │ Library        │ Vulnerability │ Severity │ Installed → Fixed Version   │
# ├────────────────┼───────────────┼──────────┼─────────────────────────────┤
# │ openssl        │ CVE-2023-0465 │ CRITICAL │ 3.0.1 → 3.0.9              │
# └────────────────┴───────────────┴──────────┴─────────────────────────────┘

# Check Kubernetes pod spec for security issues
kubectl get pod app-pod -o yaml | grep -E "privileged|runAsRoot|hostPath|docker.sock"`,
        },
      },
      incident: {
        title: "Tesla Kubernetes Cryptojacking (2018)",
        when: "February 2018",
        where: "Tesla AWS Kubernetes cluster",
        impact: "Kubernetes dashboard exposed without auth; credentials extracted; AWS resources used for cryptomining",
        body: [
          "In February 2018, RedLock researchers found Tesla's Kubernetes cluster with its administrative dashboard exposed to the public internet with no authentication:\n- The kubernetes-dashboard service was deployed with a default no-login configuration common before Kubernetes 1.7 and left in place on older clusters.\n- From the unauthenticated dashboard, attackers could browse all resources across all namespaces, including the secrets namespace where AWS IAM credentials were stored as Kubernetes Secrets.",
          "The failure chain shows how container security gaps compound:\n- The dashboard was publicly accessible without authentication, AWS credentials sat in etcd as base64-encoded Secrets without encryption at rest (visible in the dashboard UI), no network policy blocked external access to the LoadBalancer-exposed dashboard, and no resource quotas or cost-anomaly detection flagged the spike in EC2 launches.\n- The attackers throttled their cryptomining to stay below what they estimated were billing-alert thresholds.",
          "The cryptomining operation was sophisticated in its evasion:\n- The mining workload ran in an unlabeled namespace to avoid the default `kubectl get pods` output, CPU was throttled to ~80% to dodge performance alerts, pool communication was routed through CloudFlare CDN to avoid IP blocking, and the EC2 region was chosen for cheapest compute, falling outside regional billing alerts.\n- This level of operational sophistication is typical of professional cryptojacking groups that understand Kubernetes and cloud infrastructure deeply.",
          "Detection, response, and the lasting lesson all reinforce mandatory hardening:\n- RedLock found it during a routine scan of publicly accessible Kubernetes dashboards (which also caught other organizations), and Tesla responded within hours — rotating credentials, removing the dashboard, deploying network policies, and reconfiguring the dashboard to require ServiceAccount-token authentication — driving dashboard authentication becoming default, widespread Network Policy adoption, and a CIS Kubernetes Benchmark control against unauthenticated dashboards.\n- The consequences were limited because only compute (not customer data) was stolen, but the case established that resource-theft misconfigurations are security incidents even without a data breach, so auditors treat dashboard authentication, etcd encryption at rest, and network-policy deployment as mandatory controls, not optional hardening.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Image CVE Scan", sub: "before registry push", type: "attacker" },
          { label: "Runtime Config", sub: "no root, no host mounts", type: "system" },
          { label: "Kubernetes RBAC", sub: "pod exec, secret access", type: "victim" },
          { label: "Network Policies", sub: "egress/ingress control", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "CIS Docker Benchmark v1.0 published" },
        { year: 2018, event: "Tesla Kubernetes cryptojacking — exposed dashboard + unencrypted secrets", highlight: true },
        { year: 2019, event: "Kubernetes Pod Security Policies deprecated; replaced with PSA" },
        { year: 2022, event: "Kubernetes Pod Security Admission (PSA) stable — Restricted/Baseline/Privileged" },
      ],
      keyTakeaways: [
        "Never run containers as root — specify a non-root UID in the Dockerfile USER directive and enforce via Kubernetes securityContext.runAsNonRoot",
        "Mounting /var/run/docker.sock inside a container provides full host access — this is not an escape risk, it IS host access",
        "Scan container images in CI/CD with exit code 1 on CRITICAL/HIGH findings to block vulnerable images before they reach the registry",
        "Kubernetes etcd must have encryption at rest enabled — base64 encoding is not encryption and secrets are readable from etcd backups",
        "Default-deny Kubernetes Network Policies are required — the default allow-all intra-cluster network is a flat network equivalent to Target's pre-2013 environment",
        "privileged: true gives a container all Linux kernel capabilities — equivalent to running directly on the host as root",
        "Pod Security Admission (Restricted level) enforces a comprehensive set of runtime security controls at the namespace level",
        "Kubernetes dashboard, if deployed, must require authentication — unauthenticated dashboard access is a CRITICAL finding",
        "ClusterAdmin binding to service accounts outside infrastructure namespaces is an automatic HIGH finding",
        "Image signing (Sigstore Cosign) verifies image provenance — prevents supply chain attacks that substitute malicious images",
      ],
      references: [
        { title: "CIS Docker Benchmark", url: "https://www.cisecurity.org/benchmark/docker" },
        { title: "CIS Kubernetes Benchmark", url: "https://www.cisecurity.org/benchmark/kubernetes" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t05-q1", type: "Core Idea", challenge: "The docker socket.", text: "What does mounting /var/run/docker.sock inside a container grant?", options: ["Effectively full control of the host","Faster networking","Read-only logs","Nothing"], correctIndex: 0, explanation: "The Docker socket lets the container control the daemon — and thus the host." },
        { id: "audit-t05-q2", type: "Config Risk", challenge: "Root + privileged.", text: "A container spec with `runAsUser: 0` and `privileged: true` means…", options: ["It runs as root with host kernel capabilities — escape equals root on the node","It's safely sandboxed","It can't access the network","It's read-only"], correctIndex: 0, explanation: "Privileged root containers make a process escape catastrophic." },
        { id: "audit-t05-q3", type: "Real Incident", challenge: "Tesla, 2018.", text: "How did attackers get in for the 2018 Tesla Kubernetes cryptojacking?", options: ["A Kubernetes dashboard exposed to the internet with no authentication","A phished employee","A stolen laptop","A SQL injection"], correctIndex: 0, explanation: "An open, unauthenticated K8s dashboard was the entry point." },
        { id: "audit-t05-q4", type: "Secrets", challenge: "base64 ≠ encrypted.", text: "Are Kubernetes Secrets encrypted at rest by default?", options: ["No — they're base64-encoded; encryption at rest must be configured","Yes, always","Only on AWS","Only for passwords"], correctIndex: 0, explanation: "base64 is encoding, not encryption — enable encryption at rest explicitly." },
        { id: "audit-t05-q5", type: "CI/CD", challenge: "Scan early.", text: "When should container image CVE scanning happen?", options: ["In CI/CD, before images are pushed to the registry","Only after a breach","Never","Only in production at runtime"], correctIndex: 0, explanation: "Pre-registry scanning keeps vulnerable images out of production." },
        { id: "audit-t05-q6", type: "Defense", challenge: "Drop privilege.", text: "A good container hardening default is to…", options: ["Run as a non-root user without privileged mode","Run everything as root","Mount the host filesystem","Disable all logging"], correctIndex: 0, explanation: "Non-root, unprivileged containers shrink the escape blast radius." },
        { id: "audit-t05-q7", type: "Concept", challenge: "Already escaped.", text: "Why is a privileged container with a host socket 'already escaped'?", options: ["It can control the host directly, so the isolation is effectively gone","It runs faster","It's offline","It has no network"], correctIndex: 0, explanation: "Such a container has host-level control before any exploit." },
        { id: "audit-t05-q8", type: "Audit", challenge: "What to check.", text: "A container security audit should flag…", options: ["Root/privileged containers, host mounts, unencrypted secrets, unscanned images","Only the container name","Only the color scheme","Only uptime"], correctIndex: 0, explanation: "These are the high-impact container misconfigurations." },
      ],
    },
    ctf: {
      scenario: "You are auditing a Kubernetes deployment. Review the container manifest and image scan results to identify critical security violations.",
      hint: "Read the deployment manifest and the image scan output.",
      hints: [
        "Read deployment: cat k8s/deployment.yaml",
        "Read scan results: cat k8s/IMAGE-SCAN.txt",
        "View finding: cat findings/CONTAINER-VIOLATIONS.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/k8s/deployment.yaml", value: "FLAG{C0NT41N3R_", label: "Deployment — Root User and Socket Mount Found" },
        { trigger: "/k8s/IMAGE-SCAN.txt", value: "R00T_S0CK3T_CVE_", label: "Image Scan — Critical CVE Confirmed" },
        { trigger: "/findings/CONTAINER-VIOLATIONS.txt", value: "CR1T}", label: "Container Violations — Documented" },
      ],
      files: {
        "/k8s/deployment.yaml": [
          "apiVersion: apps/v1",
          "kind: Deployment",
          "metadata:",
          "  name: app-deployment",
          "spec:",
          "  template:",
          "    spec:",
          "      containers:",
          "      - name: app",
          "        image: company/app:1.2.3",
          "        securityContext:",
          "          runAsUser: 0        # FINDING: running as root",
          "          privileged: true    # FINDING: privileged mode",
          "        volumeMounts:",
          "        - mountPath: /var/run/docker.sock",
          "          name: docker-sock   # FINDING: host socket mounted",
          "      volumes:",
          "      - name: docker-sock",
          "        hostPath:",
          "          path: /var/run/docker.sock",
        ].join("\n"),
        "/k8s/IMAGE-SCAN.txt": [
          "TRIVY IMAGE SCAN — company/app:1.2.3",
          "======================================",
          "Total: 4 (CRITICAL: 2, HIGH: 2)",
          "",
          "CVE-2023-0465  openssl  CRITICAL  3.0.1 → 3.0.9  (TLS cert verification bypass)",
          "CVE-2023-28531 openssh  CRITICAL  9.1p1 → 9.3p1  (pre-auth RCE)",
          "CVE-2023-0286  openssl  HIGH      3.0.1 → 3.0.8  (GeneralizedTime parsing)",
          "CVE-2022-4304  openssl  HIGH      3.0.1 → 3.0.8  (timing side-channel)",
          "",
          "Recommendation: Rebuild image with updated base OS before deploying.",
        ].join("\n"),
        "/findings/CONTAINER-VIOLATIONS.txt": [
          "CONTAINER SECURITY AUDIT FINDINGS",
          "===================================",
          "CRITICAL-01: Container running as root (runAsUser: 0)",
          "  Risk: Process escape = root on host node",
          "",
          "CRITICAL-02: privileged: true",
          "  Risk: Full host kernel capabilities — equivalent to host root",
          "",
          "CRITICAL-03: Docker socket mounted (/var/run/docker.sock)",
          "  Risk: Container escape to host — can manage ALL containers on host",
          "",
          "CRITICAL-04: openssl CVE-2023-0465 (CVSS 9.8) in deployed image",
          "  Risk: TLS certificate bypass — MITM attacks possible",
          "",
          "All four findings are CRITICAL. Deployment must be halted.",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "k8s", isDir: true }, { name: "findings", isDir: true }],
        "/k8s": [{ name: "deployment.yaml", isDir: false }, { name: "IMAGE-SCAN.txt", isDir: false }],
        "/findings": [{ name: "CONTAINER-VIOLATIONS.txt", isDir: false }],
      },
    },
  },

  // ─── audit-t06: IaC Security ───────────────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "HashiCorp Terraform Cloud", location: "San Francisco, California", era: "Present Day", emoji: "📐" },
    id: "audit-t06",
    order: 6,
    title: "Infrastructure as Code, Insecurity as Default",
    subtitle: "IaC Security Scanning — Terraform, tfsec, and Checkov",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-06", name: "IaC Auditor", emoji: "📐" },
    challengeType: "ctf",
    info: {
      tagline: "IaC makes misconfiguration reproducible at scale. One bad Terraform module can misconfigure every environment.",
      year: 2021,
      overview: [
        "Infrastructure as Code (IaC) security scanning applies static analysis to Terraform, CloudFormation, AWS CDK, Ansible, Pulumi, and Bicep templates before deployment — catching misconfigurations in code review rather than after:\n- The principle is 'shift left': a misconfiguration caught in a pull request costs minutes to fix and zero risk, the same one caught after deployment may need a maintenance window, data migration, and an exposure window, and if caught only after exploitation, a breach.\n- NIST SSDF (SP 800-218) explicitly requires IaC security review as part of a secure development lifecycle.",
        "Common findings span all cloud providers and resource types, each with a corresponding tfsec or Checkov rule:\n- AWS Terraform — S3 buckets without server-side encryption, security groups with `0.0.0.0/0` ingress on sensitive ports (SSH 22, RDP 3389, databases 3306/5432/1433), RDS without deletion protection or storage encryption, IAM policies with wildcard actions and resources, Lambda with over-permissive execution roles, and CloudTrail without log file validation.\n- Azure — storage accounts with public blob access, NSG rules permitting any-source traffic to management ports, and Key Vault without soft delete and purge protection.",
        "Two practices make scanning continuous and keep flaws from propagating:\n- CI/CD integration — at the pull request stage, the pipeline runs tfsec or Checkov on changed templates and fails the check on findings above the threshold (typically CRITICAL and HIGH), turning security review from periodic and manual into automated and continuous, with GitHub Advanced Security rendering SARIF findings directly in the PR diff.\n- Module security — a flaw in a shared Terraform module propagates to every deployment using it, so auditors check whether modules come from the verified Terraform Registry or internal repos with inconsistent governance, expose security-relevant config as variables (rather than hardcoding insecure defaults), and pin versions (`source = 'org/module@v1.2.3'`) rather than float (a floating version lets a compromised update auto-deploy to all users).",
        "Three more concerns round out IaC security:\n- State file security — `terraform.tfstate` holds every managed resource's configuration and often sensitive values (database passwords, private keys, API tokens), so it needs remote storage in Terraform Cloud or an encrypted, versioned S3 bucket, access restricted to CI/CD and specific admins, encryption with a KMS customer-managed key, and state locking (via DynamoDB for the S3 backend) to prevent concurrent modifications.\n- Drift detection — infrastructure changed outside IaC (Console, CLI, direct API) bypasses the scanning gate, like a developer manually adding a security group rule for debugging that tfsec never sees, so Terraform Cloud (scheduled, opening PRs to reconcile) and AWS Config (continuous baseline comparison) flag it.\n- Post-deployment verification — static analysis isn't enough; auditors query the cloud APIs to confirm the deployed resource matches the IaC intent (a declared `aws_s3_bucket_server_side_encryption_configuration` should show up in `aws s3api get-bucket-encryption`), since a mismatch means a silent apply failure, out-of-sync state, or drift, and the deployed configuration — not the IaC alone — is the compliance evidence.",
      ],
      technical: {
        title: "Running tfsec and Checkov",
        body: [
          "Two scanners cover most IaC, with CI/CD integration:\n- tfsec — `tfsec ./terraform/ --minimum-severity HIGH` scans recursively at HIGH and CRITICAL, `--format sarif` feeds GitHub Advanced Security PR annotations, and `--soft-fail` collects findings without failing the pipeline until the existing baseline is remediated (then remove it for hard fail); custom YAML checks cover organization-specific policies like tagging standards or mandated KMS key ARNs.\n- Checkov — `checkov -d ./terraform/ --framework terraform` (or `--framework kubernetes` for manifests), `--output junitxml` for Jenkins/GitLab, `--check CKV_AWS_18` for a single check, `--skip-check` to suppress specific checks with documented justification (tracked with reviewer and date), and `--external-checks-dir` for custom Python checks.",
          "Two practices manage rollout and produce audit evidence:\n- Baseline management — new codebases usually have many pre-existing findings, so create a baseline (`tfsec --format json > .tfsec-baseline.json`) that records them and only fail on new findings, letting teams remediate existing ones on a timeline while blocking new introductions; commit the baseline and review it quarterly as accepted technical debt with remediation plans.\n- Evidence — for each finding, collect the tool output JSON, the offending Terraform block, the file path and line, and the severity with its policy reference (tfsec rule ID or Checkov check ID mapping to CIS, NIST, or PCI DSS), then a clean post-remediation scan; the combination of a CI/CD scan gate, a clean result, and deployed configuration matching the IaC gives three-layer evidence of control effectiveness.",
          "KICS (Keeping Infrastructure as Code Secure) from Checkmarx is a complementary scanner for polyglot environments:\n- It supports 24 platforms including Terraform, CloudFormation, Ansible, Docker, Kubernetes, Helm, and Bicep, run as `kics scan -p ./infrastructure -o ./results --report-formats json,html`.\n- A single tool scans all of them with consistent severity classifications and a unified result format — valuable where teams use multiple frameworks, such as Ansible for configuration management alongside Terraform for provisioning.",
        ],
        codeExample: {
          label: "tfsec output — identifying open security groups and unencrypted S3",
          code: `$ tfsec ./terraform/ --minimum-severity HIGH

Result 1 [HIGH] - aws/ec2/main.tf:12
  aws_security_group.web ingress rule allows 0.0.0.0/0 on port 22 (SSH)
  See https://tfsec.dev/docs/aws/ec2/no-public-ingress-sgr

Result 2 [CRITICAL] - aws/s3/main.tf:5
  aws_s3_bucket.data has no server-side encryption configured
  See https://tfsec.dev/docs/aws/s3/enable-bucket-encryption

Result 3 [HIGH] - aws/rds/main.tf:18
  aws_db_instance.prod has deletion_protection = false
  See https://tfsec.dev/docs/aws/rds/enable-deletion-protection

Passed: 47  Failed: 3 (CRITICAL: 1, HIGH: 2)`,
        },
      },
      incident: {
        title: "Toyota Connected Services Data Exposure (2023)",
        when: "May 2023",
        where: "Toyota Connected Corporation, Japan",
        impact: "2.15M customers' location and vehicle ID data exposed for 10 years via misconfigured cloud storage",
        body: [
          "Toyota Connected Corporation discovered in May 2023 that a cloud storage environment configured in 2013 had set a storage bucket to allow public access:\n- Vehicle location data — precise GPS coordinates updated regularly — and vehicle identification numbers for 2.15 million Japanese customers had been publicly accessible for about 10 years to anyone who knew the bucket URL.\n- Toyota attributed it to 'insufficient data handling rules' at deployment and launched a broader cloud-configuration audit that found additional misconfigured environments at overseas subsidiaries.",
          "The technical root cause was straightforward, but the detection window was long:\n- The S3 bucket's ACL was set to public-read at setup in 2013, a common choice before AWS introduced S3 Public Access Block in 2018, and there was no `s3-bucket-public-read-prohibited` Config rule then either (also added 2018).\n- But both controls were available from 2018 — five additional years during which the misconfiguration persisted undetected because no automated compliance scanning was deployed against the environment.",
          "Two specific failures explain the persistence:\n- The 2013 environment was never imported into Terraform or CloudFormation — a legacy manually-configured setup that the organizational process never required retroactive IaC adoption for, and no drift detection monitored it against a secure baseline; an IaC scan would have caught the public access immediately, but only if the bucket were IaC-managed.\n- Toyota said there's no evidence the data was actually accessed during the 10-year window, but that's impossible to verify without comprehensive S3 access logging (server access logs or CloudTrail data events) — a secondary finding showing that without access logging on sensitive buckets the true scope of unauthorized access can't be determined, which is why S3 access logging matters despite being only a MEDIUM-severity finding.",
          "The remediation pattern reflects an auditor maxim — 'first finding predicts more':\n- Toyota's triggered audit found similar misconfigurations in other cloud accounts, because a gap found in one account or region usually exists in peer accounts and regions built by the same team with the same processes.\n- Systematic remediation: deploy `s3-bucket-public-read-prohibited` organization-wide via conformance pack, enable S3 Public Access Block at the account level (not just per bucket), import all legacy resources into IaC and scan them like new resources, and establish drift detection — each of which would have prevented or detected the Toyota exposure.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Terraform / CloudFormation", sub: "IaC template", type: "attacker" },
          { label: "tfsec / Checkov", sub: "static analysis scan", type: "system" },
          { label: "CI/CD Gate", sub: "fail on CRITICAL/HIGH", type: "victim" },
          { label: "Secure Deployment", sub: "no known misconfigs", type: "result" },
        ],
      },
      timeline: [
        { year: 2018, event: "tfsec initial release — Terraform static security analysis" },
        { year: 2019, event: "Checkov released by Bridgecrew — multi-IaC security scanner" },
        { year: 2021, event: "GitHub Advanced Security — SARIF format for IaC scan results in PRs" },
        { year: 2023, event: "Toyota — 10-year public S3 exposure via misconfigured cloud storage", highlight: true },
      ],
      keyTakeaways: [
        "IaC scanning in CI/CD catches misconfigurations before deployment — every PR is a security review opportunity",
        "Security groups with 0.0.0.0/0 on port 22/3389 are automatic CRITICAL findings — restrict to specific CIDR blocks or security group IDs",
        "S3 encryption and public access blocking should be enforced at the account level via SCP, not just at the bucket level",
        "Legacy cloud resources not managed by IaC must be imported and scanned — drift detection identifies resources outside IaC management",
        "Terraform state files contain sensitive values — store in encrypted S3 with KMS, enable versioning, and restrict access to CI/CD system",
        "Module version pinning prevents supply chain attacks via compromised module updates",
        "Post-deployment verification confirms the deployed resource matches IaC intent — silent Terraform apply failures create configuration gaps",
        "KICS provides unified scanning across multiple IaC frameworks in polyglot environments",
        "Baseline management allows IaC scanning adoption without blocking CI/CD on pre-existing findings",
        "S3 access logging is required to determine unauthorized access scope during a public bucket exposure incident",
      ],
      references: [
        { title: "tfsec — Terraform Security Scanner", url: "https://github.com/aquasecurity/tfsec" },
        { title: "Checkov — Infrastructure as Code Security", url: "https://www.checkov.io/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t06-q1", type: "Core Idea", challenge: "Reproducible at scale.", text: "What's the double-edged nature of Infrastructure as Code?", options: ["One bad module can misconfigure every environment it deploys","It can't be audited","It only affects one server","It removes all risk"], correctIndex: 0, explanation: "IaC reproduces config — including misconfigurations — across everything." },
        { id: "audit-t06-q2", type: "Shift Left", challenge: "Catch it early.", text: "What does IaC security scanning in CI/CD achieve?", options: ["Catches misconfigurations before infrastructure is deployed (shift left)","Scans live servers only","Replaces firewalls","Encrypts the state file"], correctIndex: 0, explanation: "Scanning the code pre-deploy is the cheapest place to catch issues." },
        { id: "audit-t06-q3", type: "Tooling", challenge: "Name the scanner.", text: "Which tools do static security analysis on Terraform?", options: ["tfsec or Checkov","Wireshark","Nmap","Burp Suite"], correctIndex: 0, explanation: "tfsec and Checkov scan Terraform templates for misconfigurations." },
        { id: "audit-t06-q4", type: "Severity", challenge: "SSH to the world.", text: "How does tfsec classify a security group allowing ingress from 0.0.0.0/0 on port 22?", options: ["HIGH — SSH open to the entire internet","LOW — cosmetic","INFO only","It ignores it"], correctIndex: 0, explanation: "Internet-wide SSH is an automatic significant finding." },
        { id: "audit-t06-q5", type: "Real Incident", challenge: "Toyota, 2023.", text: "What single control would have caught Toyota's misconfig on day one (2013)?", options: ["The AWS Config rule 's3-bucket-public-read-prohibited' running continuously","A quarterly manual review","A longer password","A new firewall"], correctIndex: 0, explanation: "Continuous Config monitoring would have flagged the public bucket immediately." },
        { id: "audit-t06-q6", type: "Legacy", challenge: "Don't exempt old stuff.", text: "How should legacy resources that predate IaC be treated?", options: ["Imported into IaC management and scanned to the same standard","Exempted as historical","Deleted without review","Ignored"], correctIndex: 0, explanation: "Legacy resources must meet current standards too — import and scan them." },
        { id: "audit-t06-q7", type: "Concept", challenge: "Scale cuts both ways.", text: "Why is IaC misconfiguration uniquely dangerous?", options: ["The same flaw is deployed identically across every environment","It can't be detected","It only affects dev","It self-heals"], correctIndex: 0, explanation: "Automation multiplies a single mistake across the fleet." },
        { id: "audit-t06-q8", type: "Defense", challenge: "The fix.", text: "The core IaC defense is…", options: ["Automated scanning in the pipeline plus importing all resources under IaC","Manual review once a year","Trusting the modules","Disabling CI"], correctIndex: 0, explanation: "Pipeline scanning + full coverage keeps misconfig from shipping." },
      ],
    },
    ctf: {
      scenario: "A Terraform pull request has been submitted. Run the IaC scan and identify the critical misconfigurations before the infrastructure is deployed.",
      hint: "Read the Terraform files and the scan results.",
      hints: [
        "List: ls terraform/",
        "Read main.tf: cat terraform/main.tf",
        "Check scan results: cat SCAN-RESULTS.txt",
        "View finding: cat findings/IAC-FINDINGS.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/terraform/main.tf", value: "FLAG{14C_SC4N_", label: "Terraform — Misconfigurations Found" },
        { trigger: "/SCAN-RESULTS.txt", value: "S3_0P3N_SG_", label: "Scan Results — Critical Confirmed" },
        { trigger: "/findings/IAC-FINDINGS.txt", value: "CR1T1C4L}", label: "IaC Findings — Documented" },
      ],
      files: {
        "/terraform/main.tf": [
          'resource "aws_s3_bucket" "data" {',
          '  bucket = "company-production-data"',
          "  # No encryption configured",
          "  # No public access block",
          "}",
          "",
          'resource "aws_security_group" "web" {',
          "  ingress {",
          "    from_port   = 22",
          "    to_port     = 22",
          "    protocol    = \"tcp\"",
          '    cidr_blocks = ["0.0.0.0/0"]  # SSH open to world',
          "  }",
          "  ingress {",
          "    from_port   = 3389",
          "    to_port     = 3389",
          "    protocol    = \"tcp\"",
          '    cidr_blocks = ["0.0.0.0/0"]  # RDP open to world',
          "  }",
          "}",
          "",
          'resource "aws_db_instance" "prod" {',
          '  identifier         = "prod-db"',
          "  deletion_protection = false",
          "  storage_encrypted   = false",
          "}",
        ].join("\n"),
        "/SCAN-RESULTS.txt": [
          "tfsec SCAN RESULTS",
          "===================",
          "[CRITICAL] terraform/main.tf:1 — S3 bucket has no server-side encryption",
          "[CRITICAL] terraform/main.tf:1 — S3 bucket has no public access block",
          "[HIGH]     terraform/main.tf:8 — Security group allows SSH (22) from 0.0.0.0/0",
          "[HIGH]     terraform/main.tf:14 — Security group allows RDP (3389) from 0.0.0.0/0",
          "[HIGH]     terraform/main.tf:20 — RDS instance has deletion_protection = false",
          "[HIGH]     terraform/main.tf:21 — RDS instance storage not encrypted",
          "",
          "CRITICAL: 2  HIGH: 4  MEDIUM: 0",
          "CI/CD gate: FAIL — pull request blocked",
        ].join("\n"),
        "/findings/IAC-FINDINGS.txt": [
          "IaC SECURITY AUDIT FINDINGS",
          "============================",
          "All findings must be remediated before deployment.",
          "",
          "1. S3 encryption missing — add aws_s3_bucket_server_side_encryption_configuration",
          "2. S3 public access not blocked — add aws_s3_bucket_public_access_block",
          "3. SSH/RDP open to 0.0.0.0/0 — restrict to VPN CIDR or bastion host only",
          "4. RDS unencrypted + no deletion protection — add storage_encrypted=true, deletion_protection=true",
          "",
          "Estimated remediation: 2 hours. PR must not merge until all CRITICAL/HIGH resolved.",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "terraform", isDir: true }, { name: "SCAN-RESULTS.txt", isDir: false }, { name: "findings", isDir: true }],
        "/terraform": [{ name: "main.tf", isDir: false }],
        "/findings": [{ name: "IAC-FINDINGS.txt", isDir: false }],
      },
    },
  },

  // ─── audit-t07: SAST/DAST ──────────────────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "Snyk Headquarters", location: "London, United Kingdom", era: "Present Day", emoji: "🔎" },
    id: "audit-t07",
    order: 7,
    title: "Static and Dynamic Analysis",
    subtitle: "SAST, DAST, and SCA in the Security Testing Toolchain",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-07", name: "AppSec Tester", emoji: "🔎" },
    challengeType: "ctf",
    info: {
      tagline: "SAST finds the hole before it is drilled. DAST confirms the hole is real.",
      year: 2021,
      overview: [
        "Application security testing uses three complementary methodologies for layered coverage:\n- Static Application Security Testing (SAST) analyzes source code, bytecode, or binary without executing it — examining code paths and data flows for SQL injection, XSS, command injection, path traversal, and hardcoded credentials.\n- It runs at developer speed (seconds to minutes), integrates into IDEs and CI/CD for feedback on every commit, and is required as a core element of a secure development lifecycle by OWASP WSTG-INFO-02 and NIST SSDF practice PW.7.",
        "The other two methodologies cover what SAST can't:\n- Dynamic Application Security Testing (DAST) attacks the running application — sending malicious inputs and observing behavior to confirm exploitability in the deployed environment, so unlike SAST (which may flag theoretical, unreachable issues) its findings are confirmed exploitable; run against staging with test data, it pairs with SAST to cut both false positives (SAST flags, DAST confirms reachability) and false negatives (DAST catches runtime issues like state-dependent authentication bypasses SAST can't see).\n- Software Composition Analysis (SCA) identifies known CVEs in open-source dependencies — the 70–90% of modern code that is third-party — flagging a Log4j 2.14.1, a Django 3.2.12 with an auth-bypass CVE, or a lodash below 4.17.21 with prototype pollution, synced to the NVD, GitHub Advisory Database, and vendor advisories; the 2021 Log4Shell crisis proved its value, as organizations with SCA in CI/CD knew within hours which apps were affected while others spent weeks auditing dependency trees by hand.",
        "Two factors determine whether the program actually works:\n- CI/CD integration — SAST runs on every commit at the pull request stage, SCA on every dependency change plus continuous CVE monitoring without a new build, and DAST on every staging deployment plus periodic production scans (weekly automated, quarterly or annual manual pentesting); the audit verifies all three are present, findings are triaged not just collected, and critical findings block releases, since the tool's existence isn't evidence — enforcement is.\n- SAST tool selection — rules-based pattern matching produces high false-positive rates (flagging any SQL concatenation regardless of source), whereas semantic SAST (Semgrep, CodeQL) does data-flow analysis to track whether user-controlled data reaches a sink without sanitization, dramatically cutting false positives; CodeQL is built into GitHub Advanced Security (free on public repos), Semgrep offers 2,000+ community rules with a simple YAML DSL, and both emit SARIF for GitHub, GitLab, and Azure DevOps dashboards.",
        "Two operational concerns make or break credibility:\n- False positive management — many false positives train developers to dismiss security findings as noise, so suppressions must each document the finding, the justification (e.g., 'this concatenation uses only server-controlled lookup values, not user input'), the author, and a security-engineer reviewer; suppression without security review is a program-integrity gap, and a suppression rate above 40% signals tool misconfiguration or misuse to avoid real findings.\n- Transitive dependencies — SCA must reach the dependencies of dependencies, since a package importing lodash five levels deep still exposes the app to lodash CVEs, so tools analyzing only direct dependencies miss most of the supply chain; modern tools (Snyk, Dependabot, OWASP Dependency-Check, Grype) analyze the full graph, and auditors verify transitive analysis plus that update PRs (Dependabot, Snyk fix) are actively reviewed and merged rather than accumulating as ignored open PRs.",
      ],
      technical: {
        title: "Reading SAST and DAST Output",
        body: [
          "Two tools anchor the source and runtime testing:\n- Semgrep — `semgrep --config=p/owasp-top-ten --config=p/python src/` applies the OWASP Top 10 plus language rules, with `--json` for CI/CD, and each finding is judged on three criteria: is the data flow confirmed (does the flagged variable trace from user input — request params, headers, uploads — to the sink without sanitization, versus a config constant or database value), is the sink exploitable (SQLi needs a database sink, XSS needs unescaped HTML output, command injection needs shell execution), and is there a compensating control (a parameterizing ORM may render a raw SQL concatenation unexploitable)?\n- DAST scoping — configure OWASP ZAP or Burp Suite Enterprise with the base URL, authenticated session cookies (ZAP supports script-based login), and scope rules restricting crawling and attacks to the application's own domain; run active scanning (injection against all inputs, headers, query params), passive scanning (information disclosure, missing headers, insecure cookies), and authenticated-versus-unauthenticated access testing, reviewing for false positives since DAST can misread rate-limiting responses or application-specific behavior.",
          "Two passes confirm dependency health and DAST accuracy:\n- SCA dependency management — `snyk test --all-projects` or `dependabot review` to identify CVEs across ecosystems, triaging CRITICAL CVEs with fixes (release blockers), HIGH with fixes (remediate within the sprint), and HIGH/CRITICAL with no fix (compensating controls — WAF rules, network isolation, vendor escalation), and verifying automated PR creation is enabled and PRs are reviewed and merged, since accumulating unmerged Dependabot PRs means the tool runs but the program doesn't function.\n- DAST false positives — DAST actively attacks and misfires (a redirect to login flagged as an auth bypass, an error echoing the request URL flagged as reflected XSS when content is actually escaped), so manually verify exploitability for each finding before reporting, given a typical 60–70% true-positive rate where the remaining 30–40% need triage, because unverified findings in reports damage credibility.",
          "Auditors judge AppSec maturity by metrics, not just tool presence:\n- Mean time to remediate critical findings under 7 days, false-positive suppression rate below 40%, DAST coverage above 80% of API endpoints for production apps, dependency-update latency under 48 hours for CRITICAL CVEs, and fewer than 5% of CRITICAL findings older than 30 days.\n- These distinguish a functioning program from compliance theater where tools run but findings accumulate unaddressed.",
        ],
        codeExample: {
          label: "Semgrep SAST scan — detecting SQL injection",
          code: `$ semgrep --config=p/owasp-top-ten src/

# FINDING: SQL Injection
# src/api/users.py:45
#   query = "SELECT * FROM users WHERE id = " + user_id
#   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# Rule: python.lang.security.audit.sqli.raw-query-formatting
# Severity: ERROR
# Message: User-supplied data directly concatenated into SQL query.
#          Use parameterized queries: cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))

# SCA: Snyk dependency scan
$ snyk test
# Tested 127 dependencies
# Found 2 critical vulnerabilities:
#   ✗ CVE-2023-28154 in webpack@5.75.0 (Prototype Pollution)
#   ✗ CVE-2023-26115 in word-wrap@1.2.3 (ReDoS)`,
        },
      },
      incident: {
        title: "Equifax Apache Struts Dependency Vulnerability (2017)",
        when: "March–July 2017",
        where: "Atlanta, Georgia",
        impact: "147M records; $575M FTC settlement; exploited via known CVE in unpatched dependency",
        body: [
          "The Equifax breach exploited CVE-2017-5638, a critical RCE in Apache Struts 2 publicly disclosed and patched on March 7, 2017:\n- The flaw lay in the Jakarta Multipart parser's Content-Type header parsing — a crafted Content-Type made Struts execute arbitrary OGNL expressions, granting remote code execution on the web server — with a public exploit available within 24 hours.\n- Equifax's security team received an internal alert about the vulnerability and patch requirement on March 9, yet the vulnerable version wasn't patched across all systems, specifically the consumer dispute portal that became the entry point.",
          "An SCA tool in Equifax's CI/CD would have helped at two moments:\n- At build and deploy, it would have flagged any known vulnerabilities in the Struts 2.x version, establishing a baseline of dependency health.\n- More critically, when CVE-2017-5638 was published on March 7, it would have immediately alerted on every application depending on the affected Struts version — and organizations with mature continuous-monitoring SCA got automated alerts within hours, while those without relied on manual discovery taking weeks or months.",
          "The two-month gap between CVE publication (March 7) and detection (~July 29) shows the practical cost of SCA absence:\n- Attackers monitoring Apache Struts advisories, as professional threat actors routinely do, identified Equifax using public information (its web app revealed the Struts version in HTTP headers and error pages) and began exploitation.\n- The attacker accessed systems 265 times over 76 days, exfiltrating roughly 147 million records in about 9,000 queries, each logged in network access logs that were never monitored for anomalies.",
          "The regulatory outcome effectively mandated SCA, and the case drives a specific audit procedure:\n- The $575M FTC settlement (plus $175M to states and $100M to the CFPB, $850M total) was the largest data-breach settlement in US history at the time, and the consent order required automated identification of software components and versions, cross-referencing with vulnerability databases within 48 hours of CVE publication, and risk-prioritized remediation — now standard in FTC consent orders.\n- The audit procedure for SCA: verify continuous monitoring (not just scan-at-build) so new CVEs against deployed versions alert without a rebuild, that alert routing reaches security teams within 24 hours of NVD publication, that a triage SLA exists (CRITICAL CVEs evaluated and patching initiated within 48 hours), and that the dependency inventory covers transitive dependencies — since a CVE in a transitive dependency, as Struts effectively was for many Java apps, may otherwise never trigger an alert.",
        ],
      },
      diagram: {
        nodes: [
          { label: "SAST", sub: "source code analysis", type: "attacker" },
          { label: "SCA", sub: "dependency CVEs", type: "system" },
          { label: "DAST", sub: "runtime attack simulation", type: "victim" },
          { label: "CI/CD Gate", sub: "block on critical findings", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "Equifax — Apache Struts CVE exploited 2 months after patch release", highlight: true },
        { year: 2019, event: "Semgrep open-sourced — semantic code analysis at developer velocity" },
        { year: 2021, event: "Log4Shell — SCA tools identify affected applications within hours" },
        { year: 2022, event: "OpenSSF Scorecard — automated security posture rating for open-source" },
      ],
      keyTakeaways: [
        "SAST in CI/CD gives developers security feedback on every commit — the earlier the finding, the cheaper the fix",
        "SCA continuous monitoring identifies vulnerable dependencies when new CVEs are published, without requiring a rebuild",
        "DAST confirms real exploitability — reduces SAST false positives and adds coverage for runtime-only vulnerabilities",
        "False positive suppressions must have security engineer sign-off with documented justification — self-service suppression is a program integrity gap",
        "SCA must cover transitive dependencies (dependencies of dependencies) — direct-only scanning misses the majority of the supply chain",
        "Equifax had 76 days between CVE patch availability and breach detection — SCA continuous monitoring would have reduced this to hours",
        "Semgrep and CodeQL perform data flow analysis — dramatically fewer false positives than pattern-matching SAST",
        "DAST requires authenticated scanning with test accounts to cover the full application surface — unauthenticated-only scans miss most functionality",
        "AppSec program metrics: MTTR critical < 7 days, suppression rate < 40%, DAST endpoint coverage > 80%",
        "Log4Shell demonstrated that SCA is not optional — every Java application in the enterprise needed assessment within 24 hours of CVE disclosure",
      ],
      references: [
        { title: "OWASP SAST Tools", url: "https://owasp.org/www-community/Source_Code_Analysis_Tools" },
        { title: "Semgrep — Static Analysis at Developer Scale", url: "https://semgrep.dev/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t07-q1", type: "SAST", challenge: "Reading the code.", text: "What does SAST (Static Application Security Testing) do?", options: ["Analyzes source code without running it to find flaws like SQL injection","Runs the live app and attacks it","Scans network ports","Manages passwords"], correctIndex: 0, explanation: "SAST inspects code statically, before the app is built or run." },
        { id: "audit-t07-q2", type: "DAST", challenge: "Confirm it's real.", text: "What confirms a SAST-found vulnerability is actually exploitable?", options: ["DAST (Dynamic Application Security Testing) against the running app","A second SAST run","A code comment","A firewall rule"], correctIndex: 0, explanation: "DAST drills the running app to confirm the hole SAST found is real." },
        { id: "audit-t07-q3", type: "SCA", challenge: "Dependencies.", text: "What does SCA (Software Composition Analysis) detect?", options: ["Known vulnerabilities in open-source dependencies","Typos in code","Slow functions","UI bugs"], correctIndex: 0, explanation: "SCA flags CVEs in third-party libraries you depend on." },
        { id: "audit-t07-q4", type: "Real Incident", challenge: "Equifax, 2017.", text: "What would have prevented the Equifax breach?", options: ["SCA in the pipeline flagging the vulnerable Apache Struts dependency when the patch dropped","A longer password","A bigger firewall","Disabling the website"], correctIndex: 0, explanation: "SCA would have caught the unpatched Struts CVE that was exploited." },
        { id: "audit-t07-q5", type: "Example", challenge: "Log4Shell.", text: "Why can SCA tools detect Log4Shell (CVE-2021-44228)?", options: ["It exists in a known open-source dependency SCA tracks","It's a hardware bug","It only affects printers","SCA can't detect it"], correctIndex: 0, explanation: "Log4j is a tracked dependency, so SCA flags the vulnerable version." },
        { id: "audit-t07-q6", type: "Process", challenge: "Suppressing noise.", text: "Who should authorize a SAST false-positive suppression?", options: ["A security engineer, with documented justification","Any developer silently","Nobody — leave them all","The end user"], correctIndex: 0, explanation: "Suppressions need review and a paper trail to avoid hiding real bugs." },
        { id: "audit-t07-q7", type: "Concept", challenge: "Find vs confirm.", text: "The relationship between SAST and DAST is…", options: ["SAST finds the hole before it's drilled; DAST confirms the hole is real","They're identical","DAST runs first always","Only one is ever needed"], correctIndex: 0, explanation: "Static finds candidates; dynamic confirms exploitability." },
        { id: "audit-t07-q8", type: "Defense", challenge: "The full stack.", text: "A complete app-security testing program combines…", options: ["SAST + DAST + SCA in the pipeline","Only manual code review","Only a firewall","Only DAST"], correctIndex: 0, explanation: "Code, runtime, and dependencies all need coverage." },
      ],
    },
    ctf: {
      scenario: "You are reviewing the AppSec testing program for a SaaS company. SAST and SCA results are loaded. Identify the critical finding that should block the release.",
      hint: "Read the SAST output and the dependency scan results.",
      hints: [
        "Read SAST output: cat SAST-RESULTS.txt",
        "Read SCA results: cat SCA-RESULTS.txt",
        "View the blocking finding: cat findings/RELEASE-BLOCKER.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/SAST-RESULTS.txt", value: "FLAG{S4ST_SQLI_", label: "SAST — SQL Injection Found" },
        { trigger: "/SCA-RESULTS.txt", value: "SC4_CV3_", label: "SCA — Critical CVE Found" },
        { trigger: "/findings/RELEASE-BLOCKER.txt", value: "R3L34S3_BL0CK}", label: "Release — Blocked on Critical Findings" },
      ],
      files: {
        "/SAST-RESULTS.txt": [
          "SEMGREP SAST SCAN — v2.4.1 release candidate",
          "=============================================",
          "[ERROR]  src/api/users.py:45 — SQL Injection (raw query concatenation)",
          "[ERROR]  src/auth/login.py:12 — Hardcoded JWT secret key",
          "[WARNING] src/utils/html.py:88 — Reflected XSS (unescaped user input in template)",
          "[INFO]   src/api/orders.py:201 — Verbose error message may leak stack trace",
          "",
          "CRITICAL findings: 2  HIGH: 1  MEDIUM: 0",
          "Release gate: BLOCKED — critical findings must be remediated",
        ].join("\n"),
        "/SCA-RESULTS.txt": [
          "SNYK DEPENDENCY SCAN — package.json + requirements.txt",
          "=======================================================",
          "[CRITICAL] CVE-2021-44228 — log4j-core 2.14.1 → upgrade to 2.17.1",
          "           CVSS: 10.0 — Remote Code Execution — Log4Shell",
          "[HIGH]     CVE-2023-28154 — webpack 5.75.0 → upgrade to 5.76.1",
          "[MEDIUM]   CVE-2022-25883 — semver 7.3.7 → upgrade to 7.5.2",
          "",
          "Critical CVE in production dependency: log4j-core (Log4Shell)",
          "This version is actively exploited in the wild.",
          "Release gate: BLOCKED",
        ].join("\n"),
        "/findings/RELEASE-BLOCKER.txt": [
          "RELEASE BLOCKED — CRITICAL SECURITY FINDINGS",
          "==============================================",
          "Release v2.4.1 is BLOCKED pending remediation of:",
          "",
          "1. SQL Injection in src/api/users.py:45",
          "   Impact: Full database read/write by unauthenticated user",
          "   Fix: Use parameterized queries (ORM or cursor.execute with %s)",
          "",
          "2. Log4Shell (CVE-2021-44228) in log4j-core 2.14.1",
          "   Impact: Remote code execution via JNDI lookup in log messages",
          "   Fix: Upgrade log4j-core to 2.17.1 immediately",
          "",
          "Release may not proceed until both findings are resolved and rescanned.",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "SAST-RESULTS.txt", isDir: false },
          { name: "SCA-RESULTS.txt", isDir: false },
          { name: "findings", isDir: true },
        ],
        "/findings": [{ name: "RELEASE-BLOCKER.txt", isDir: false }],
      },
    },
  },

  // ─── audit-t08: Network Segmentation ──────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "Palo Alto Networks", location: "Santa Clara, California", era: "Present Day", emoji: "🌐" },
    id: "audit-t08",
    order: 8,
    title: "The Flat Network",
    subtitle: "Network Segmentation — VPC Controls and Firewall Rule Review",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-08", name: "Network Auditor", emoji: "🌐" },
    challengeType: "ctf",
    info: {
      tagline: "A flat network means a single compromised endpoint can reach everything. Segmentation contains the blast radius.",
      year: 2013,
      overview: [
        "Network segmentation audits verify that network zones are properly separated and traffic between them follows least connectivity — only the ports and protocols required for documented business functions, in the minimum direction, to the minimum set of endpoints:\n- It's not just best practice but a mandatory control in PCI DSS (Requirements 1 and 1.3), the HIPAA Security Rule (45 CFR 164.312(e)(1)), NIST SP 800-53 (SC-7 Boundary Protection), and SOC 2 Common Criteria CC6.6.\n- An organization claiming PCI DSS compliance without demonstrated segmentation between the cardholder data environment (CDE) and other systems doesn't have a reduced audit scope — its scope is every system on the network.",
        "Cloud segmentation uses a layered model, each control at a different granularity:\n- VPC boundary — the outermost isolation, since traffic can't cross VPCs without explicitly approved and audited peering or Transit Gateway.\n- Subnet tiers — public subnets (internet-gateway routes, for load balancers and NAT), private application subnets (no direct internet, reachable only from public), and private data subnets (no internet, reachable only from application).\n- Security groups — the stateful instance-level firewall (return traffic auto-allowed), which can use a source security group ID rather than CIDR and should be the primary east-west control; and Network ACLs — stateless subnet-level controls for coarse-grained tier boundaries.",
        "Three perspectives reveal how segmentation breaks and how far it can go:\n- The flat-network failure happens when the controls exist but are misconfigured — security groups allowing `0.0.0.0/0` as a source on any port, VPC peering between production and development without access controls, or a database subnet with a NAT gateway route giving production databases outbound internet access.\n- On-premises uses different vocabulary but the same principles — VLANs separate Layer 2, routed firewall rules control Layer 3 between a DMZ, workstations, servers, production databases, and management segments, and the most common finding is 'ANY/ANY' rules added for debugging and never removed.\n- Microsegmentation extends segmentation to the workload level (Illumio, VMware NSX, Kubernetes Network Policies), so Server A reaches Server B on port 8080 by documented dependency but can't reach Server C in the same subnet, dramatically reducing blast radius — CISA's Zero Trust Maturity Model lists it as an 'Advanced' capability.",
        "Two things prove segmentation actually works:\n- VPC Flow Logs are the detective layer, capturing metadata for every accepted or rejected connection (source/destination IP and port, protocol, packets, bytes, ACCEPT/REJECT, timestamp); without them there's no evidence segmentation is working, and PCI DSS Requirement 10.3 needs them to demonstrate network-level access to PCI-scope systems, so auditors verify they're enabled for every in-scope VPC, retained, and aggregated in a SIEM.\n- Active testing goes beyond configuration review — auditors or penetration testers attempt connections from lower-trust zones to higher-trust targets (a public-subnet web server to the database on 5432, a corporate workstation to a PCI-scope system) and document expected versus actual; a connection that succeeds when it should be blocked is confirmed exploitable lateral movement, not a theoretical gap.",
      ],
      technical: {
        title: "Network Segmentation Testing",
        body: [
          "Firewall rule review builds a complete traffic picture and flags the dangerous rules:\n- Obtain the full ruleset — for AWS, `aws ec2 describe-security-groups`, `aws ec2 describe-network-acls`, and `aws ec2 describe-vpc-peering-connections` for peering and Transit Gateway.\n- Build a traffic matrix listing every ingress rule's source, port, and protocol (translating security group ID sources to resource descriptions), identify all rules touching sensitive zones (PCI-scope, database tier, admin CIDRs), and for each permissive rule verify a documented business justification — any rule without one is a finding, and any rule with `0.0.0.0/0` or `::/0` as source is flagged as internet-accessible regardless of port.",
          "Two AWS-specific checks confirm isolation:\n- VPC segmentation — map all peering connections (`describe-vpc-peering-connections`) with both CIDR ranges and whether route tables route all traffic or specific prefixes, verify database subnets have no internet-gateway route (`describe-route-tables` showing no `0.0.0.0/0` to an `igw-*`, flagging a NAT route if databases have no reason to initiate outbound), and confirm at least one active flow log per VPC (`describe-flow-logs`).\n- Security group least connectivity — for each sensitive resource (RDS, internal API, secrets server), the ingress source should be a specific security group ID, not a CIDR and never `0.0.0.0/0`, since a security group source means only resources in that group can connect (the app-server group sourcing the database group limits access to app servers regardless of VPC changes), whereas a subnet CIDR source lets every resource in the subnet — including unreviewed or compromised ones — reach the database, so recommend migrating sensitive targets from CIDR to security group sources.",
          "Two more steps validate reachability and untangle complex routing:\n- Lateral movement validation — with authorization, run reachability tests from each zone to each sensitive target (`nmap -p 22,80,443,3306,5432,1433,6379 <target>` or curl for HTTP), documenting source zone, target, expected and actual result, and the control that should enforce it, capturing traffic evidence (tcpdump or a flow-log ACCEPT where REJECT was expected) when actual differs — more persuasive than a configuration finding because it shows actual exploitability.\n- Transit Gateway — enterprise environments connect many VPCs, on-prem (Direct Connect or VPN), and shared services through it, and its routing can create unexpected paths (a spoke VPC routing `0.0.0.0/0` through a central inspection VPC may reach other spokes if the inspection route tables are misconfigured), so auditors review the route tables per attachment and confirm route domains isolate production, development, and shared services — unintended production-to-development connectivity via Transit Gateway is a common finding.",
        ],
        codeExample: {
          label: "Network segmentation test — verifying database isolation",
          code: `# Test 1: Can web tier reach database directly?
# From a web server (10.0.1.15), attempt database connection
nmap -p 5432 10.0.2.100  # database server in private subnet

# Expected (segmented): Host seems down / filtered
# BAD (flat network): 5432/tcp open postgresql

# AWS: Check security group attached to RDS instance
aws ec2 describe-security-groups --group-ids sg-0abc123 \\
  --query 'SecurityGroups[*].IpPermissions[?ToPort==\`5432\`]'
# Expected: Only the app server security group ID as source
# BAD: {CidrIpv4: "0.0.0.0/0"} — database accessible from anywhere

# Check VPC Flow Logs
aws ec2 describe-flow-logs --query 'FlowLogs[?ResourceId==\`vpc-xxx\`]'`,
        },
      },
      incident: {
        title: "Target Breach — HVAC Vendor to POS Network (2013)",
        when: "November–December 2013",
        where: "Target Corporation, Minneapolis, Minnesota",
        impact: "40M credit cards; 70M customer records; $290M total cost; CIO and CEO resigned",
        body: [
          "The 2013 Target breach is the canonical segmentation-failure case study because the attack path was conceptually simple yet catastrophic:\n- The initial vector was compromised credentials of Fazio Mechanical Services, an HVAC vendor with network access to remotely monitor and manage Target's climate-control equipment.\n- Attackers — attributed to a Ukrainian cybercriminal group — obtained Fazio's credentials through a phishing attack and used them to reach Target's vendor portal.",
          "The critical failure was that vendor access wasn't isolated to the systems the vendor actually managed:\n- The network segment reachable by the HVAC vendor was not isolated from the segment containing Target's point-of-sale (POS) systems that processed payment cards.\n- A properly segmented network would have placed vendor access in an isolated 'vendor DMZ' with firewall rules permitting only the specific HVAC management systems and protocol and blocking everything else — instead, the HVAC access provided a path, through several hops, to the POS segment.",
          "From the HVAC-accessible segment, the attackers moved laterally over weeks while alerts were ignored:\n- Target's security operations team received multiple FireEye alerts about anomalous behavior that were dismissed.\n- The attackers eventually deployed custom memory-scraping malware (a BlackPOS variant) to the POS terminals, capturing card data from the magnetic stripe during the swipe and exfiltrating it to an internal staging server before routing it to an external collection point — the full chain, from vendor credential compromise to card exfiltration, took about six weeks.",
          "The aftermath reshaped PCI DSS and underscored defense in depth:\n- PCI DSS Section 1.3 already required restricting traffic to only what's necessary, but Target's non-compliance drove more prescriptive guidance on vendor access, third-party connectivity, and segmentation testing, with PCI DSS v4.0 (2022) now requiring explicit penetration testing of segmentation controls — confirming segmentation works through active testing, not just configuration review — while Target paid about $290M in settlements plus remediation and reissuance costs.\n- The detection failure repeated a common pattern (FireEye alerts fired but weren't escalated by the Bangalore SOC, amid alert fatigue and unclear response procedures), but the deeper lesson is defense in depth: had the network been properly segmented, lateral movement from the HVAC zone to the POS zone would have been impossible regardless of whether alerts were acted on.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Internet / Vendor Access", sub: "untrusted zone", type: "attacker" },
          { label: "DMZ / Web Tier", sub: "semi-trusted zone", type: "system" },
          { label: "Firewall / Security Group", sub: "segmentation control", type: "victim" },
          { label: "Database / PCI Zone", sub: "isolated trusted zone", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "Target breach — HVAC vendor to POS via flat network", highlight: true },
        { year: 2014, event: "PCI DSS 3.0 — network segmentation requirements clarified" },
        { year: 2019, event: "Capital One — S3 accessible from compromised EC2 via flat IAM policy" },
        { year: 2021, event: "CISA Zero Trust maturity model — microsegmentation as advanced practice" },
      ],
      keyTakeaways: [
        "Flat networks maximize blast radius — segmentation contains lateral movement to a fraction of the attack surface",
        "Vendor network access must be in an isolated zone with explicit firewall rules permitting only the required vendor-specific protocols",
        "VPC Flow Logs must be enabled — you cannot audit, detect, or investigate what you cannot see",
        "PCI DSS v4.0 requires active penetration testing of segmentation controls, not just configuration review",
        "Security group sources should be security group IDs, not CIDR blocks — CIDR sources are less precise and harder to maintain",
        "Microsegmentation (Illumio, NSX, Kubernetes Network Policies) extends isolation to the per-workload level within segments",
        "Database subnets must have no internet gateway route — NAT-only outbound is acceptable only if databases have a documented need for outbound internet",
        "VPC peering connections require explicit route table review — transitive routing can create unexpected cross-VPC connectivity",
        "Transit Gateway route table audit is mandatory in multi-VPC environments — complex routing creates hard-to-see connectivity paths",
        "Detection failures (ignored alerts) cannot substitute for missing segmentation — defense in depth requires both layers",
      ],
      references: [
        { title: "PCI DSS v4.0 — Requirement 1: Network Security Controls", url: "https://www.pcisecuritystandards.org/document_library/" },
        { title: "NIST SP 800-125B — Secure Virtual Network Configuration", url: "https://csrc.nist.gov/publications/detail/sp/800-125b/final" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t08-q1", type: "Core Idea", challenge: "Why segment.", text: "What's the risk of a flat network?", options: ["A single compromised endpoint can reach everything","It's too slow","It uses more IPs","Nothing"], correctIndex: 0, explanation: "No internal boundaries means one foothold reaches the whole network." },
        { id: "audit-t08-q2", type: "Real Incident", challenge: "Target, 2013.", text: "How did the 2013 Target breach succeed?", options: ["An HVAC vendor's access sat on the same flat network as the point-of-sale systems","A brute-forced admin password","A stolen server","A DDoS"], correctIndex: 0, explanation: "Lack of segmentation let a vendor foothold reach payment systems." },
        { id: "audit-t08-q3", type: "Best Practice", challenge: "Lock the DB.", text: "An RDS database in a private subnet should allow port 5432 from…", options: ["Only the application server's security group","0.0.0.0/0","Any internal IP","The public internet"], correctIndex: 0, explanation: "Source-restrict to the app's security group, not broad ranges." },
        { id: "audit-t08-q4", type: "Validation", challenge: "Prove segmentation.", text: "Why enable VPC Flow Logs when auditing segmentation?", options: ["They're the record of actual traffic between subnets","They encrypt traffic","They speed up the network","They block attacks"], correctIndex: 0, explanation: "Flow Logs let you verify segmentation is real, not just intended." },
        { id: "audit-t08-q5", type: "Compliance", challenge: "Why PCI cares.", text: "Why does PCI DSS require network segmentation?", options: ["To shrink the cardholder-data scope and limit lateral movement","To make audits longer","To increase bandwidth","It doesn't"], correctIndex: 0, explanation: "Segmentation reduces the regulated scope and contains breaches." },
        { id: "audit-t08-q6", type: "Finding", challenge: "A leaky subnet.", text: "A database subnet with a NAT route allowing outbound internet is…", options: ["A segmentation gap — DB servers shouldn't have an outbound internet route","Best practice","Required for backups","Harmless"], correctIndex: 0, explanation: "Outbound internet from a DB subnet is an exfiltration path and a finding." },
        { id: "audit-t08-q7", type: "Concept", challenge: "Blast radius.", text: "Segmentation's main security benefit is…", options: ["Containing the blast radius of a single compromise","Faster downloads","Fewer servers","Simpler passwords"], correctIndex: 0, explanation: "Boundaries stop an intruder from reaching everything at once." },
        { id: "audit-t08-q8", type: "Lesson", challenge: "Target's takeaway.", text: "The lesson from Target is…", options: ["Keep sensitive systems off the same network as low-trust access (vendors, IoT)","Trust all internal traffic","Avoid HVAC vendors","Segmentation is optional"], correctIndex: 0, explanation: "Isolate sensitive systems from low-trust connections." },
      ],
    },
    ctf: {
      scenario: "You are auditing network segmentation for a payment processor. Review the VPC configuration and firewall rules to identify the segmentation failures.",
      hint: "Check the VPC diagram, security groups, and flow logs status.",
      hints: [
        "Read: cat VPC-CONFIG.txt",
        "Check security groups: cat SECURITY-GROUPS.txt",
        "Check flow logs: cat VPC-FLOW-LOGS.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/VPC-CONFIG.txt", value: "FLAG{N3TW0RK_S3G_", label: "VPC Config — Flat Network Found" },
        { trigger: "/SECURITY-GROUPS.txt", value: "FL4T_VPC_", label: "Security Groups — Open Rules Found" },
        { trigger: "/VPC-FLOW-LOGS.txt", value: "F10W_LOGS}", label: "Flow Logs — Not Enabled" },
      ],
      files: {
        "/VPC-CONFIG.txt": [
          "VPC CONFIGURATION REVIEW",
          "=========================",
          "VPC: vpc-prod (10.0.0.0/16)",
          "",
          "Subnets:",
          "  subnet-web  10.0.1.0/24  Public subnet  Route: 0.0.0.0/0 → igw-001",
          "  subnet-app  10.0.2.0/24  Private subnet Route: 0.0.0.0/0 → nat-001",
          "  subnet-db   10.0.3.0/24  Private subnet Route: 0.0.0.0/0 → nat-001",
          "",
          "FINDING: subnet-db has a NAT gateway route.",
          "Database subnet should have NO outbound internet route.",
          "Database servers should not be able to reach the internet.",
        ].join("\n"),
        "/SECURITY-GROUPS.txt": [
          "SECURITY GROUP REVIEW",
          "======================",
          "sg-web (attached to web servers):",
          "  Ingress: 80, 443 from 0.0.0.0/0  — OK",
          "  Ingress: 22 from 0.0.0.0/0         — FINDING: SSH open to world",
          "",
          "sg-db (attached to RDS instances):",
          "  Ingress: 5432 from 0.0.0.0/0       — CRITICAL: Database open to internet",
          "  Expected: 5432 from sg-app ONLY",
          "",
          "CRITICAL: Database (PCI scope) directly accessible from the internet.",
          "PCI DSS Requirement 1 — network segmentation control FAILED.",
        ].join("\n"),
        "/VPC-FLOW-LOGS.txt": [
          "VPC FLOW LOG STATUS",
          "====================",
          "vpc-prod: Flow logs DISABLED  ← FINDING",
          "",
          "VPC Flow Logs are required to:",
          "  - Validate segmentation is working",
          "  - Detect lateral movement between subnets",
          "  - Meet PCI DSS logging requirements",
          "  - Investigate security incidents",
          "",
          "Without flow logs, there is no visibility into network traffic.",
          "Remediation: Enable VPC Flow Logs to CloudWatch or S3 immediately.",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "VPC-CONFIG.txt", isDir: false },
          { name: "SECURITY-GROUPS.txt", isDir: false },
          { name: "VPC-FLOW-LOGS.txt", isDir: false },
        ],
      },
    },
  },

  // ─── audit-t09: Database Controls ─────────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "Snowflake Headquarters", location: "San Mateo, California", era: "Present Day", emoji: "🗄️" },
    id: "audit-t09",
    order: 9,
    title: "Data at Rest",
    subtitle: "Database Access Controls — RBAC and Row-Level Security",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-09", name: "Database Auditor", emoji: "🗄️" },
    challengeType: "ctf",
    info: {
      tagline: "A database with one role that can read every table is a database where every user is a data breach.",
      year: 2020,
      overview: [
        "Database access control audits verify that role-based access control (RBAC) is implemented, sensitive columns are masked or encrypted, all activity is logged at sufficient granularity, and encryption at rest is enabled for every database holding sensitive or regulated data:\n- Modern cloud-native databases — Snowflake, BigQuery, Redshift, Azure Synapse — provide native row-level security, dynamic data masking, column-level encryption, and fine-grained audit logging that once required expensive third-party database activity monitoring (DAM) tools.\n- Auditors must understand both the platform's capabilities and the regulations (GDPR, PCI DSS, HIPAA, CCPA) applying to the data, and the central principle is least privilege: a reporting analyst gets SELECT on the reporting schema and nothing else, an ETL service account gets INSERT/UPDATE on specific staging tables and SELECT on sources (not DBA), and a backup account gets export privileges only — the most common violation being service accounts granted DBA or ACCOUNTADMIN at setup and never restricted.",
        "Two controls limit what an authorized user can actually see:\n- Row-level security (RLS) partitions data within a table so each role sees only authorized rows — a regional analyst restricted to records where region matches their assignment, a clinician to records where assigned_provider matches their ID — since without it, SELECT on the table reads every row and a compromised analyst account becomes a breach of the entire dataset; Snowflake row access policies, PostgreSQL row security policies, and BigQuery row-level access are the native implementations auditors verify.\n- Dynamic data masking (DDM) returns obfuscated values for sensitive columns to unauthorized viewers and real values to authorized ones without changing stored data — a Snowflake policy returning 'XXX-XX-1234' for analysts and the full SSN for compliance officers — operating at query time based on the querying role, and auditors verify masking covers all PII columns and actually masks the sensitive portion rather than returning a placeholder that merely confirms the record exists.",
        "Two layers ensure database access is observable:\n- Audit logging must capture all access to sensitive data, not just DDL and DML — a database logging CREATE/ALTER/INSERT/UPDATE/DELETE but not SELECT can't detect read-based exfiltration, the most common theft method; SELECT logging is often disabled for performance, so auditors verify it's enabled for all PII, payment, or regulated tables, forwarded to a SIEM or immutable storage, with Snowflake's `ACCOUNT_USAGE.QUERY_HISTORY` monitored and alerts for bulk SELECTs (no WHERE clause, or over 10,000 rows from analyst-tier accounts).\n- Database Activity Monitoring (DAM) tools — Imperva, IBM Guardium, Oracle Audit Vault — monitor independently of native logging, capturing all traffic at the network layer or via plugins and alerting in real time on policy violations (row-count thresholds, access to columns outside an approved profile, unusual IPs); auditors verify DAM is deployed for all production PII or payment databases, alerts route to the SOC, and DAM data is retained independently so a compromised DBA can't delete the trail of their own actions.",
        "Encryption at rest is the foundational control, with two aspects:\n- Transparent data encryption (TDE) encrypts the database files on disk, protecting against physical media theft or filesystem access, and is enabled by default in most cloud services (Snowflake, RDS, BigQuery) but may need explicit configuration for legacy or self-managed databases.\n- Column-level encryption (CLE) encrypts specific sensitive values within the database, protecting against users who have SELECT on the table, and requires key management — typically a cloud KMS (AWS KMS, Azure Key Vault, GCP KMS) wrapping column encryption keys with a strictly controlled key encryption key — so auditors verify TDE for every sensitive database and CLE for the highest-sensitivity fields (payment card numbers, SSNs) where table-level SELECT must be broad but field-level access must be restricted.",
      ],
      technical: {
        title: "Testing Database Access Controls",
        body: [
          "Two tests cover roles and row partitioning:\n- RBAC audit — extract the full role membership graph (Snowflake `SHOW GRANTS OF ROLE`, PostgreSQL `information_schema.role_table_grants`, or the native user listing), map each role to its intended job function, enumerate every role's privileges (tables, operations, admin or schema ownership), and compare against the function, flagging any privilege not required; flag separately service accounts with DBA privileges (CRITICAL), analyst roles with INSERT/UPDATE/DELETE on production tables (HIGH), and shared-credential roles used by multiple unidentified users (HIGH, violating non-repudiation).\n- RLS validation — create test records for two entities (Region A and Region B), authenticate as a user restricted to Region A, and `SELECT * FROM target_table` with no WHERE; only Region A records should return, and Region B records appearing means RLS is misconfigured or unapplied, documented with the policy definition, the test user's roles, the query, and result counts (Snowflake `SHOW ROW ACCESS POLICIES` / `DESCRIBE ROW ACCESS POLICY` confirms the condition logic).",
          "Two checks confirm masking and encryption at rest:\n- Column masking — for each PII/regulated table, list masking-policy assignments (Snowflake `SELECT column_name, masking_policy_name FROM information_schema.columns`), since columns with no policy expose the raw value to any role with SELECT; verify policies on at least SSN/TIN, payment card numbers, bank accounts, passport and license numbers, dates of birth (healthcare), and email where classification requires it, then test effectiveness by querying as an analyst role and confirming the value is actually masked.\n- Encryption at rest — for RDS, `aws rds describe-db-instances` (with `StorageEncrypted: false` a CRITICAL finding for sensitive data); Snowflake is always AES-256-GCM and can't be disabled (verify Tri-Secret Secure customer-managed keys for highest-sensitivity data); self-managed PostgreSQL needs OS-level disk encryption (dm-crypt/LUKS); and for every finding also verify backups and snapshots are encrypted, since RDS can create unencrypted snapshots from encrypted instances if no KMS key is specified.",
          "Backup security is often overlooked but a significant exposure risk:\n- Verify automated backups are enabled with the required retention (7 days minimum, 35 for RDS), snapshots are encrypted with the same or equivalent KMS key as production, and snapshot access is restricted (no RDS snapshots marked public — `aws rds describe-db-snapshots --snapshot-type public` should return empty).\n- Verify backup restore is tested quarterly (an untested backup is not a backup) and that backup access is logged in CloudTrail so any snapshot access or copy is recorded.",
        ],
        codeExample: {
          label: "Snowflake — testing row-level security and column masking",
          code: `-- Check column masking policies on PII columns
SELECT column_name, masking_policy_name
FROM information_schema.columns
WHERE table_name = 'CUSTOMERS'
  AND column_name IN ('SSN', 'CREDIT_CARD', 'EMAIL');
-- Expected: all three columns should show a masking policy
-- Finding: NULL masking_policy_name = PII exposed to all users with table access

-- Test row-level security (as analyst_region_west)
SELECT region, COUNT(*) FROM customers GROUP BY region;
-- Expected: only 'WEST' rows visible
-- Finding: 'EAST', 'NORTH', 'SOUTH' returned = RLS not working

-- Check for service accounts with DBA roles
SELECT grantee_name, role
FROM information_schema.applicable_roles
WHERE role = 'SYSADMIN' OR role = 'ACCOUNTADMIN';
-- Expected: only named human admins
-- Finding: svc_etl_prod has ACCOUNTADMIN role = CRITICAL`,
        },
      },
      incident: {
        title: "Morgan Stanley Unencrypted Data Center Decommission (2020)",
        when: "2016–2019 (discovered 2020)",
        where: "Morgan Stanley — multiple data centers",
        impact: "$60M OCC fine; customer PII on decommissioned hardware sold without data wiping",
        body: [
          "Between 2016 and 2019, Morgan Stanley decommissioned two data centers whose local hardware — servers, storage arrays, backup tapes — held customer PII (names, addresses, Social Security numbers, account numbers) for about 15 million customers:\n- The hardware was sold to a third-party reseller as surplus IT equipment.\n- The critical failure: it was never subjected to proper data destruction (cryptographic erasure, degaussing, or physical destruction) before transfer, and the data was readable in clear text because encryption at rest had not been enabled for the affected storage when the data was written.",
          "The combined regulatory and civil cost shows database security spans the full storage lifecycle:\n- The OCC fined Morgan Stanley $60 million in 2020 for failing to maintain an adequate data-destruction program for decommissioned hardware, and a separate civil lawsuit settled for another $60 million paid to affected customers as a breach of fiduciary and privacy obligations.\n- The $120 million total, for what was operationally a hardware-disposition failure, illustrates that database security extends beyond the live instance to the underlying storage media.",
          "The encryption-at-rest failure is the technical root cause:\n- Had TDE been enabled, the data on the decommissioned hardware would have been encrypted under a key in Morgan Stanley's key management system, and without that key — never transferred with the hardware — the media would be unreadable however it was disposed of.\n- Cryptographic erasure (destroying or rotating the key) is an accepted destruction method in NIST SP 800-88 Rev 1 and is far more reliable than degaussing for modern solid-state storage that doesn't respond uniformly to magnetic erasure.",
          "The case extends the audit to the hardware-disposition process and the regulations behind it:\n- Auditors should verify an asset inventory tracks every device that contains or has contained sensitive data, a data-destruction procedure is applied before any hardware leaves custody (sale, donation, lease return, disposal), the method matches the data classification per NIST SP 800-88's tiered clear/purge/destroy, a certificate of destruction is obtained and retained for regulated hardware, and encryption at rest is enabled from day one so cryptographic erasure is always available.\n- The regulatory backing: the GLBA Safeguards Rule's data-disposal requirements, NIST SP 800-88 as the media-sanitization standard, PCI DSS Requirement 9.8, and SOC 2 CC6.5 — and the Morgan Stanley action is notable for showing these apply to the physical hardware lifecycle, a dimension database audits often exclude from scope.",
        ],
      },
      diagram: {
        nodes: [
          { label: "RBAC", sub: "role per job function", type: "attacker" },
          { label: "Column Masking", sub: "PII obfuscated", type: "system" },
          { label: "Row-Level Security", sub: "data partitioned", type: "victim" },
          { label: "Encryption at Rest", sub: "unreadable without key", type: "result" },
        ],
      },
      timeline: [
        { year: 2016, event: "GDPR draft finalized — encryption at rest becomes standard requirement" },
        { year: 2019, event: "Snowflake launches row-level security and dynamic data masking" },
        { year: 2020, event: "Morgan Stanley — $60M fine for unencrypted decommissioned hardware", highlight: true },
        { year: 2023, event: "NIST CSF 2.0 — data at rest encryption explicitly listed as baseline control" },
      ],
      keyTakeaways: [
        "Encryption at rest is a baseline control — every database containing sensitive data must have TDE enabled, including backups and snapshots",
        "Column masking on PII fields prevents bulk SELECT exfiltration — analysts with table access should never see raw SSNs or payment card numbers",
        "Row-level security limits the blast radius of a compromised user account to only their authorized data partition",
        "SELECT query logging must be enabled for sensitive tables — DDL/DML-only logging misses read-based exfiltration entirely",
        "Service accounts must not have DBA or ACCOUNTADMIN privileges — grant only the minimum specific operations on specific tables",
        "Database backups must be encrypted and access-controlled — public RDS snapshots are an automatic CRITICAL finding",
        "Hardware disposition requires certified data destruction — cryptographic erasure (key destruction) satisfies NIST SP 800-88 for encrypted storage",
        "Shared database credentials violate non-repudiation — each user must have an individual named account for audit trail integrity",
        "Database Activity Monitoring (DAM) operates independently of the database's native logging — critical for detecting DBA-level insider threats",
        "Test row-level security with actual queries from restricted roles — configuration review alone does not confirm enforcement",
      ],
      references: [
        { title: "Snowflake Security Features — Row-Level Security and Masking", url: "https://docs.snowflake.com/en/user-guide/security-column" },
        { title: "CIS Oracle Database Benchmark", url: "https://www.cisecurity.org/benchmark/oracle_database" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t09-q1", type: "Core Idea", challenge: "Read = breach.", text: "Why are DDL/DML-only database audit logs insufficient?", options: ["They miss read-based exfiltration via SELECT queries","They're too large","They slow the DB","They're encrypted"], correctIndex: 0, explanation: "Logging only writes misses an attacker reading (SELECTing) the data out." },
        { id: "audit-t09-q2", type: "Real Incident", challenge: "Morgan Stanley, 2020.", text: "What single control would have made the decommissioned-hardware data unreadable?", options: ["Encryption at rest — data without the key is unreadable even on recovered drives","A stronger password","A firewall","A longer retention policy"], correctIndex: 0, explanation: "Encrypted-at-rest data is useless on hardware recovered without the key." },
        { id: "audit-t09-q3", type: "Finding", challenge: "Superadmin service account.", text: "A Snowflake ETL service account granted ACCOUNTADMIN (it only needs INSERT) is…", options: ["A critical finding — any compromise grants full database access","Fine for convenience","A low finding","Required by Snowflake"], correctIndex: 0, explanation: "Superadmin on a service account turns its compromise into total access." },
        { id: "audit-t09-q4", type: "Defense", challenge: "Limit the rows.", text: "What does row-level security (RLS) do?", options: ["Limits which rows a user sees based on their attributes","Encrypts the whole disk","Blocks all SELECTs","Speeds up queries"], correctIndex: 0, explanation: "RLS partitions data so a compromised account sees only its rows." },
        { id: "audit-t09-q5", type: "Scope", challenge: "Dev isn't exempt.", text: "Does a dev database holding copies of production PII need encryption at rest?", options: ["Yes — any DB with sensitive data needs it, regardless of environment label","No — dev is exempt","Only in production","Only if audited"], correctIndex: 0, explanation: "Sensitive data requires protection wherever it lives." },
        { id: "audit-t09-q6", type: "Logging", challenge: "Capture reads.", text: "Effective database audit logging must capture…", options: ["Reads (SELECT) as well as writes","Only failed logins","Only schema changes","Nothing — too noisy"], correctIndex: 0, explanation: "Read logging is essential to detect data exfiltration." },
        { id: "audit-t09-q7", type: "Least Privilege", challenge: "Scope the role.", text: "A service account should be granted…", options: ["Only the minimum rights its job requires (e.g. INSERT to staging)","ACCOUNTADMIN for flexibility","Read on every table","No restrictions"], correctIndex: 0, explanation: "Least privilege caps the damage of a compromised service account." },
        { id: "audit-t09-q8", type: "Concept", challenge: "One over-broad role.", text: "A database with one role that can read every table means…", options: ["Every user with it is a potential full data breach","Faster queries","Better backups","Nothing risky"], correctIndex: 0, explanation: "Broad read roles make any account compromise a mass breach." },
      ],
    },
    ctf: {
      scenario: "You are auditing Snowflake database controls for a financial firm. Review the RBAC configuration, column masking status, and encryption settings.",
      hint: "Check each database control file in the db-audit/ directory.",
      hints: [
        "List: ls db-audit/",
        "Check RBAC: cat db-audit/RBAC-REVIEW.txt",
        "Check masking: cat db-audit/COLUMN-MASKING.txt",
        "Check encryption: cat db-audit/ENCRYPTION-STATUS.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/db-audit/RBAC-REVIEW.txt", value: "FLAG{DB_RB4C_", label: "RBAC — Overprivileged Role Found" },
        { trigger: "/db-audit/COLUMN-MASKING.txt", value: "M4SK1NG_", label: "Column Masking — PII Exposed" },
        { trigger: "/db-audit/ENCRYPTION-STATUS.txt", value: "3NCRYPT10N_G4P}", label: "Encryption — Gaps Found" },
      ],
      files: {
        "/db-audit/RBAC-REVIEW.txt": [
          "SNOWFLAKE RBAC REVIEW",
          "======================",
          "Role: ANALYST",
          "  Granted to: 45 analyst users",
          "  Permissions: SELECT on ALL tables in PROD database  ← FINDING",
          "  Expected: SELECT on REPORTING schema only",
          "",
          "Role: SVC_ETL",
          "  Granted to: etl_service account",
          "  Permissions: ACCOUNTADMIN  ← CRITICAL",
          "  Expected: INSERT/UPDATE on specific staging tables only",
          "",
          "SVC_ETL service account has superadmin rights — any compromise = full DB access.",
        ].join("\n"),
        "/db-audit/COLUMN-MASKING.txt": [
          "COLUMN MASKING POLICY REVIEW",
          "==============================",
          "Table: CUSTOMERS",
          "  SSN           — Masking policy: NONE  ← FINDING",
          "  CREDIT_CARD   — Masking policy: NONE  ← FINDING",
          "  EMAIL         — Masking policy: EMAIL_MASK (last 4 chars visible) — OK",
          "  NAME          — Masking policy: NONE  ← finding (PII)",
          "",
          "45 analyst users can query unmasked SSN and credit card numbers.",
          "Remediation: Apply PARTIAL_SSN_MASK and CC_LAST4_MASK policies.",
        ].join("\n"),
        "/db-audit/ENCRYPTION-STATUS.txt": [
          "DATABASE ENCRYPTION STATUS",
          "===========================",
          "PROD database: Encryption at rest ENABLED (AES-256)  — OK",
          "DEV database:  Encryption at rest DISABLED  ← FINDING",
          "ARCHIVE database: Encryption at rest DISABLED  ← FINDING",
          "",
          "DEV database contains copies of production PII for testing.",
          "ARCHIVE database contains 7 years of financial records.",
          "Both contain sensitive data and must be encrypted.",
          "Remediation: Enable encryption and audit who has accessed DEV/ARCHIVE.",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "db-audit", isDir: true }],
        "/db-audit": [
          { name: "RBAC-REVIEW.txt", isDir: false },
          { name: "COLUMN-MASKING.txt", isDir: false },
          { name: "ENCRYPTION-STATUS.txt", isDir: false },
        ],
      },
    },
  },

  // ─── audit-t10: Logging and Monitoring ────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "Datadog Headquarters", location: "New York, New York", era: "Present Day", emoji: "📡" },
    id: "audit-t10",
    order: 10,
    title: "The Silent Breach",
    subtitle: "Logging and Monitoring Audit — SIEM Coverage and Alert Quality",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-10", name: "SIEM Auditor", emoji: "📡" },
    challengeType: "ctf",
    info: {
      tagline: "If a breach happens and no log captures it, was there a breach? Yes. But you will not know for months.",
      year: 2017,
      overview: [
        "Logging and monitoring audits verify that security-relevant events are captured at sufficient granularity, forwarded reliably to a centralized SIEM, retained for the required duration, and that detection rules are properly configured, tuned, and actively investigated:\n- NIST SP 800-92 (Guide to Computer Security Log Management) is the federal baseline.\n- PCI DSS Requirement 10 sets payment-environment logging, HIPAA requires 'audit controls' (45 CFR 164.312(b)) recording activity on ePHI systems, and SOC 2 Common Criteria CC7.2 requires monitoring to detect anomalies indicative of security events.",
        "The foundation is having the right logs from the right systems with the right detail:\n- Log coverage — the percentage of in-scope systems forwarding to the SIEM; a SIEM seeing 70% of assets has a 30% blind spot where an attacker can operate for months (as Equifax's 78 days showed), and gaps are found by diffing the complete asset inventory against the SIEM log source list, prioritized by risk (internet-facing systems, domain controllers, databases, cloud management plane, identity providers).\n- Log quality — a system can forward logs at insufficient verbosity to detect what matters, so authentication logs must capture failed and successful logins with source IP, device, and privilege escalation (who, what, from where, when), network logs the connection 5-tuple and action, database logs query-level events including SELECT, and application logs user actions, since incomplete fields make investigation and correlation impossible even when coverage is full.",
        "Two dimensions determine whether real threats are caught:\n- Alert quality — an effective alert fires on real threats and stays silent on normal operations, failing either as too few alerts (missed threats) or too many (alert fatigue), so auditors review the alert backlog (unacknowledged alerts, age of the oldest critical, mean time to acknowledge), where MTTA over 15 minutes for critical alerts signals alert fatigue or understaffing against CISA's 2023 recommendation of 24/7 SOC coverage with sub-15-minute MTTA.\n- Detection content — the SIEM's alert rules need regular review against a threat model, mapping MITRE ATT&CK TTPs (Initial Access through Impact) to confirm a detection rule or compensating control exists for each relevant technique, with the most commonly missing rules being Living-off-the-Land (LOLBin) techniques, data staging and compression before exfiltration, and slow exfiltration over long periods.",
        "Two structural requirements complete the audit:\n- Log retention — minimums vary by framework: PCI DSS 10.7 requires 12 months with 3 immediately accessible, HIPAA 6 years for ePHI audit logs, GLBA 5 years, and GDPR no fixed minimum but no longer than necessary (balanced against investigation needs), so auditors verify the configured retention meets the applicable requirement for every in-scope system, since a compliance finding today becomes a forensic impossibility in 18 months.\n- Centralized architecture — more than routing to a SIEM: local-buffering collection agents (Elastic Beats, Splunk Universal Forwarder, Datadog Agent) that survive network or SIEM outages, a dedicated aggregation tier storing raw logs immutably and feeding the SIEM, and a SIEM correlating enriched events; the immutable raw store is critical for forensic integrity, since if the only copy is in the SIEM a compromise or admin error destroys irreplaceable evidence — logs must be write-once, and any system allowing deletion or modification is a forensic-integrity gap.",
      ],
      technical: {
        title: "Log Coverage Audit Methodology",
        body: [
          "The coverage audit is a set-difference between assets and log sources:\n- Build a complete asset inventory — cloud APIs (`aws ec2 describe-instances`, `aws rds describe-db-instances`, `aws eks list-clusters`), on-prem via Active Directory (`Get-ADComputer -Filter *`), nmap of RFC 1918 ranges, and CMDB exports, plus SaaS APIs — capturing hostname/IP, asset type, data classification, compliance scope, and expected log source type (Windows Event Log, syslog, CloudTrail, application logs).\n- Export the SIEM's current log source list and take the set difference: any asset not in the SIEM list is a coverage gap, prioritized by compliance scope (PCI/HIPAA gaps are regulatory findings), internet exposure, identity infrastructure (domain controllers, AD, identity providers), database servers, then the rest by data classification, documented with system name, type, compliance impact, and estimated log volume for capacity planning.",
          "Two reviews verify the logs and the rules are actually useful:\n- Log completeness — for each forwarding source, confirm the required fields are populated by searching the last 24 hours and checking for NULL/empty values: authentication needs user, source IP, destination host, timestamp, method, and outcome; network needs the 5-tuple, action, and bytes; applications need session ID, action, target resource, and outcome — missing source IPs in particular make investigation impossible.\n- Alert rule review — for each active rule, document its MITRE ATT&CK TTP, the log sources it depends on (a rule whose source is in the coverage gap is ineffective), its threshold, last fire time, last true positive, and 30-day false-positive rate, flagging rules that have never fired (misconfigured or simply not yet triggered — both need investigation) and rules above 80% false positives (tune or retire), since a well-maintained SIEM fires rarely but with high fidelity.",
          "Mean time to acknowledge (MTTA) quantifies SOC responsiveness:\n- Query the SIEM ticketing integration or SOC platform for 90 days of alerts, compute creation-to-first-action time, and segment by severity — critical-alert MTTA should be under 15 minutes with 24/7 coverage.\n- When MTTA runs to hours or days, diagnose the cause — alert volume (fatigue from false positives, fixed by tuning), staffing (insufficient analysts, fixed by hiring), or process (alerts not routed to on-call, fixed by on-call rotation and automated escalation) — and document the distribution and root-cause analysis as audit evidence.",
        ],
        codeExample: {
          label: "SIEM coverage gap analysis",
          code: `# Build asset inventory
Get-ADComputer -Filter * | Select-Object Name > asset_inventory.txt
aws ec2 describe-instances --query 'Reservations[*].Instances[*].PrivateIpAddress' >> asset_inventory.txt

# Build SIEM log source list
# (from SIEM API or admin console export)
Get-SIEMLogSources | Select-Object HostName > siem_log_sources.txt

# Find gaps (assets not sending logs to SIEM)
Compare-Object (Get-Content asset_inventory.txt) (Get-Content siem_log_sources.txt) |
  Where-Object {$_.SideIndicator -eq '<='} |
  ForEach-Object { $_.InputObject + " — NOT IN SIEM" }

# Output:
# SQLSERVER-PROD01 — NOT IN SIEM  ← CRITICAL: production DB not logging`,
        },
      },
      incident: {
        title: "Equifax 78-Day Breach — SSL Inspection Gap (2017)",
        when: "May–July 2017",
        where: "Atlanta, Georgia",
        impact: "147M records; attacker dwell time 78 days; broken SSL inspection = no log visibility",
        body: [
          "The 78-day dwell time in the Equifax breach — from first Apache Struts exploitation in mid-May 2017 to detection on July 29 — is one of the most consequential monitoring failures in US corporate history:\n- It wasn't simply sophisticated tradecraft but a specific technical failure in the monitoring infrastructure.\n- Equifax's network architecture included SSL/TLS inspection appliances that decrypt, inspect, and log HTTPS traffic for anomaly detection — a critical component for detecting exfiltration, since encrypted outbound connections carrying stolen data would be logged only if the appliance was functioning.",
          "The inspection appliance covering the compromised Apache Struts segment had an expired internal certificate:\n- The TLS-proxy certificate had expired about 19 months before the breach began and was never renewed, causing the appliance to fail silently — it stopped inspecting traffic but generated no alert about its own failure.\n- Traffic kept flowing through it, uninspected and unlogged, so the appliance looked healthy to the monitoring team while the attacker's exfiltration was completely invisible.",
          "The log-coverage failure is specific and instructive:\n- A coverage audit verifying not just that the appliance was in the SIEM log source list (it was) but that it was actively generating logs (it wasn't) would have caught the gap on day one.\n- Active log-source health monitoring — alerting when an expected source goes silent (no events in 15 minutes, 1 hour, or 24 hours by expected frequency) — is a distinct meta-alerting requirement from coverage enumeration, and auditors must verify it's configured for all critical sources, especially inspection infrastructure.",
          "The broken appliance crippled forensics and yields a specific audit procedure:\n- Post-breach investigators had to reconstruct activity from NetFlow/IPFIX, DNS query logs, and endpoint agent logs instead of the inspection appliance — far harder and less complete, which forced an over-inclusive notification scope of 147 million people because precisely whose data was accessed couldn't be determined; the regulatory response drove SSL-inspection health-monitoring requirements into FTC consent orders and OCC guidance.\n- The audit procedure: verify each critical source is actively sending by checking its most-recent event timestamp, flagging any source last seen beyond 2x its expected interval as a CRITICAL operational-health finding (not a coverage gap) — a firewall generating thousands of events a minute flagged if silent for 5 minutes, a weekly scheduled task flagged if silent for 10 days.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Log Sources", sub: "all assets in scope", type: "attacker" },
          { label: "SIEM", sub: "central log aggregation", type: "system" },
          { label: "Alert Rules", sub: "detection content", type: "victim" },
          { label: "Investigation", sub: "MTTA < 15 min", type: "result" },
        ],
      },
      timeline: [
        { year: 2012, event: "NIST SP 800-92 — Guide to Computer Security Log Management" },
        { year: 2017, event: "Equifax — 78-day dwell time; broken SSL inspection = no visibility", highlight: true },
        { year: 2020, event: "SolarWinds — 9 months dwell time; sophisticated evasion defeated most SIEMs" },
        { year: 2023, event: "CISA guidelines — 24/7 SOC monitoring and 15-minute MTTA for critical alerts" },
      ],
      keyTakeaways: [
        "Log coverage gaps are found by comparing SIEM log source list to complete asset inventory — every in-scope asset must be sending logs",
        "Verify log sources are ACTIVELY sending logs, not just configured — silent failure of a log source creates a blind spot identical to no coverage",
        "Alert MTTA for critical alerts must be under 15 minutes — higher MTTA indicates alert fatigue, understaffing, or broken escalation processes",
        "Log retention must meet the regulatory requirement for every in-scope system — 12 months for PCI DSS (3 months immediately accessible)",
        "Alert false positive rate above 80% indicates a tuning problem — high false positive rates cause alert fatigue that causes real threats to be missed",
        "Log source health monitoring (alert when a source goes silent) is as important as log coverage enumeration",
        "Immutable raw log storage is required for forensic integrity — SIEM-only log storage allows deletion of evidence during incidents",
        "Log completeness matters as much as coverage — missing source IP fields make investigation impossible even when events are logged",
        "MITRE ATT&CK coverage mapping verifies detection rules exist for the most relevant adversary techniques",
        "SolarWinds showed that sophisticated attackers can evade SIEM detection for months — behavioral analytics and anomaly detection supplement signature-based rules",
      ],
      references: [
        { title: "NIST SP 800-92 — Guide to Computer Security Log Management", url: "https://csrc.nist.gov/publications/detail/sp/800-92/final" },
        { title: "PCI DSS v4.0 — Requirement 10: Log and Monitor All Access", url: "https://www.pcisecuritystandards.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t10-q1", type: "Core Idea", challenge: "No log, no knowledge.", text: "What's the danger of a 'silent' breach?", options: ["With no logs capturing it, you won't know for months","Logs make breaches worse","It can't happen","It fixes itself"], correctIndex: 0, explanation: "Without logging/monitoring, breaches go undetected for long periods." },
        { id: "audit-t10-q2", type: "Real Incident", challenge: "Equifax, 2017.", text: "Why did Equifax's attackers go undetected for 78 days?", options: ["An SSL inspection appliance had an expired cert and stopped inspecting/logging HTTPS","Everyone was on vacation","A new law blocked logging","The data was fake"], correctIndex: 0, explanation: "An unmaintained (expired-cert) monitoring tool was blind to the traffic." },
        { id: "audit-t10-q3", type: "Coverage", challenge: "Find the gaps.", text: "How do you identify a SIEM log-coverage gap?", options: ["Compare the SIEM's log-source list against the full asset inventory","Count the alerts","Read the privacy policy","Reboot the SIEM"], correctIndex: 0, explanation: "Assets not sending logs to the SIEM are blind spots." },
        { id: "audit-t10-q4", type: "Verify", challenge: "Configured ≠ working.", text: "Beyond configuration, what must a log audit confirm?", options: ["That sources are actively sending logs, not just set up to","That the logo is correct","That alerts are colorful","Nothing else"], correctIndex: 0, explanation: "A configured-but-silent source is still a gap." },
        { id: "audit-t10-q5", type: "Compliance", challenge: "PCI retention.", text: "PCI DSS Requirement 10 mandates log retention of…", options: ["12 months, with at least 3 months immediately accessible","1 week","Forever, all online","No requirement"], correctIndex: 0, explanation: "12 months retained, 3 months hot, is the PCI baseline." },
        { id: "audit-t10-q6", type: "Alert Fatigue", challenge: "Too many alerts.", text: "A SIEM with 4,000+ unacknowledged alerts and 18-hour MTTA indicates…", options: ["Alert fatigue — ineffective monitoring (critical MTTA should be minutes)","A healthy program","Good coverage","Nothing to fix"], correctIndex: 0, explanation: "Huge backlogs and slow response mean alerts aren't actioned." },
        { id: "audit-t10-q7", type: "Concept", challenge: "Maintained controls.", text: "Equifax's logging failure shows monitoring tools…", options: ["Must be maintained (e.g. cert renewals) or they silently stop working","Never need upkeep","Are always reliable","Should be turned off"], correctIndex: 0, explanation: "An unmaintained tool is a decorative checkbox, not a control." },
        { id: "audit-t10-q8", type: "Defense", challenge: "What good looks like.", text: "Effective monitoring requires…", options: ["Full log coverage, verified delivery, retention, and fast response to critical alerts","One log source","No retention","Ignoring alerts"], correctIndex: 0, explanation: "Coverage + delivery + retention + timely response together." },
      ],
    },
    ctf: {
      scenario: "You are auditing the SIEM program for an e-commerce company. Review the log coverage, retention policy, and alert backlog to identify gaps.",
      hint: "Check each monitoring audit file in the siem-audit/ directory.",
      hints: [
        "List: ls siem-audit/",
        "Check coverage: cat siem-audit/LOG-COVERAGE.txt",
        "Check alerts: cat siem-audit/ALERT-BACKLOG.txt",
        "Check retention: cat siem-audit/RETENTION-POLICY.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/siem-audit/LOG-COVERAGE.txt", value: "FLAG{S13M_C0V3R4G3_", label: "Log Coverage — Gaps Found" },
        { trigger: "/siem-audit/ALERT-BACKLOG.txt", value: "4L3RT_", label: "Alert Backlog — Alert Fatigue Confirmed" },
        { trigger: "/siem-audit/RETENTION-POLICY.txt", value: "R3T3NT10N_G4P}", label: "Retention — Policy Gap Found" },
      ],
      files: {
        "/siem-audit/LOG-COVERAGE.txt": [
          "SIEM LOG COVERAGE AUDIT",
          "========================",
          "Asset Inventory: 127 systems",
          "SIEM Log Sources: 89 systems",
          "Coverage: 70%  ← FINDING (target: 100% for in-scope systems)",
          "",
          "Missing from SIEM (examples):",
          "  SQLSERVER-PROD01 — production database server",
          "  DC-PROD-01       — domain controller",
          "  PAYMENTGW-01     — payment gateway server",
          "",
          "CRITICAL: Payment gateway and domain controller not in SIEM.",
          "Both are PCI DSS in-scope. Compliance failure.",
        ].join("\n"),
        "/siem-audit/ALERT-BACKLOG.txt": [
          "ALERT BACKLOG ANALYSIS",
          "=======================",
          "Open unacknowledged alerts: 4,237",
          "Critical alerts unacknowledged > 24h: 312",
          "High alerts unacknowledged > 72h: 891",
          "Mean time to acknowledge (MTTA): 18.4 hours",
          "Target MTTA: < 15 minutes for critical",
          "",
          "FINDING: Alert fatigue — SOC is unable to process alert volume.",
          "4,237 unacknowledged alerts indicates effective monitoring breakdown.",
          "Recommendation: Tune alert rules, reduce false positives, expand SOC.",
        ].join("\n"),
        "/siem-audit/RETENTION-POLICY.txt": [
          "LOG RETENTION POLICY REVIEW",
          "============================",
          "Configured retention in SIEM: 90 days",
          "Archive (cold storage): NONE configured",
          "",
          "PCI DSS Requirement 10.7: 12 months retention, 3 months immediately accessible.",
          "Current configuration: 90 days only — 9 months SHORT of PCI requirement.",
          "",
          "FINDING: Log retention does not meet PCI DSS requirement.",
          "Remediation: Configure 12-month archive to S3/cold storage.",
          "Estimated implementation: 2 weeks.",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "siem-audit", isDir: true }],
        "/siem-audit": [
          { name: "LOG-COVERAGE.txt", isDir: false },
          { name: "ALERT-BACKLOG.txt", isDir: false },
          { name: "RETENTION-POLICY.txt", isDir: false },
        ],
      },
    },
  },

  // ─── audit-t11: Zero Trust ─────────────────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "Google Cloud Headquarters", location: "Sunnyvale, California", era: "Present Day", emoji: "🏰" },
    id: "audit-t11",
    order: 11,
    title: "Never Trust, Always Verify",
    subtitle: "Zero Trust Architecture Assessment",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-11", name: "Zero Trust Auditor", emoji: "🛡️" },
    challengeType: "ctf",
    info: {
      tagline: "The perimeter is dead. Every request must prove it is authorized — every time, from everywhere.",
      year: 2014,
      overview: [
        "Zero Trust is a security architecture built on the principle that no user, device, application, or network connection is trusted by default — not even inside the corporate perimeter — so every access request must be explicitly authenticated, authorized against policy, and continuously validated throughout the session:\n- NIST SP 800-207 (Zero Trust Architecture, 2020) is the authoritative federal standard.\n- Its seven tenets: all data sources and compute services are resources, all communication is secured regardless of network location, access is granted per session by dynamic policy, all assets are monitored for integrity and posture, authentication and authorization are dynamic and strictly enforced, and the enterprise collects state information about assets, infrastructure, and communications to improve posture.",
        "Two reference points frame implementation and prove it works at scale:\n- CISA's Zero Trust Maturity Model (v2.0, 2023) organizes work across five pillars — Identity (who), Device (what device), Network (what path), Application (what app), Data (what data) — each scored on four maturity levels: Traditional (0, perimeter-based with implicit internal trust), Initial (1, some controls), Advanced (2, most controls automated), and Optimal (3, fully automated, continuously evaluated, adaptive); an assessment produces a per-pillar maturity profile that drives the roadmap.\n- Google's BeyondCorp (launched 2014 after the 2009 Operation Aurora attacks) was the first major enterprise Zero Trust implementation at scale, routing all employee access through the same access proxy with the same authentication, authorization, and device-health checks regardless of location — the internal network providing no extra trust, a radical break from the VPN-as-boundary model.",
        "The two best-tooled pillars have the clearest implementation paths:\n- Identity — MFA is the baseline, but not all MFA is equal: TOTP (Google Authenticator, Authy) falls to real-time phishing relays, push MFA (Duo, Microsoft Authenticator) to MFA-fatigue flooding (as in Uber 2022), while FIDO2/WebAuthn hardware keys and passkeys are phishing-resistant because the response is cryptographically bound to the origin domain — CISA's phishing-resistant MFA guidance targets FIDO2 for Advanced or Optimal maturity.\n- Device — every device must be inventoried, posture-assessed, and verified compliant before access (MDM-managed, current and patched OS, EDR reporting to the SOC, disk encryption, recent clean malware scan), with ZTNA products (Zscaler, Cloudflare Access, Prisma Access, Cisco Duo) enforcing health checks at access time based on real-time compliance rather than network location, so a device that fails a check loses access until it remediates.",
        "The harder pillars define the journey's middle and end:\n- Network — moving from VPN to ZTNA is one of the most significant infrastructure changes: VPN grants network-level access (the device is on the internal network and can reach any system), while ZTNA grants application-level access (connected only to one application's proxy, unable to reach others), so a VPN compromise gives the attacker the internal network while a ZTNA compromise gives a single application; auditors assess the percentage of applications migrated to ZTNA, whether the VPN still grants broad access to non-migrated systems, and whether microsegmentation limits east-west traffic for systems not yet behind a proxy.\n- Continuous authorization — the most advanced capability, re-evaluating authorization throughout the session from monitored signals (device health, user behavior, network context, application context) and stepping up authentication, reducing permissions to read-only, or terminating the session when risk rises; UEBA tools feed those signals into the access-control decision plane, and this CISA Optimal-level capability needs significant data infrastructure and ML modeling.",
      ],
      technical: {
        title: "Auditing Zero Trust Maturity",
        body: [
          "The first two pillars are assessed against the CISA maturity scale:\n- Identity — query the identity provider (Azure AD, Okta, Ping) for total versus MFA-enrolled users (any gap is a finding, since MFA must be mandatory not opt-in), enumerate MFA methods (TOTP/SMS-only is Traditional, push with number matching is Initial, FIDO2 keys or passkeys for privileged accounts is Advanced), verify Conditional Access enforces MFA step-up for high-risk apps, locations, and device states, and confirm privileged roles (Global Admin, Domain Admin, DBA) are governed by PIM/PAM with just-in-time access, approval workflows, and session recording.\n- Device — query the MDM platform (Intune, Jamf, Workspace ONE) for total versus managed devices (any unmanaged device accessing company resources is a Traditional-maturity finding), check what percentage of managed devices meet all compliance requirements (OS version, encryption, EDR running, password policy), confirm non-compliant devices are blocked at the ZTNA layer and Conditional Access checks compliance at login, and for BYOD verify a MAM policy separates corporate data from personal apps.",
          "The next two pillars target access paths and the data itself:\n- Network (VPN versus ZTNA) — enumerate all applications accessed via VPN, determine which are migrated to ZTNA proxy versus still requiring full VPN access, compute the ZTNA adoption ratio (full-VPN apps are attack surface, since a compromised device reaches everything internal), prioritize migration by risk (customer-facing production first, internal business apps next, legacy last, possibly needing application-layer proxies), and verify each migrated app's ZTNA policy (URL, allowed user groups, device-compliance and MFA requirements).\n- Data — the most advanced pillar, requiring complete classification (Public/Internal/Confidential/Restricted) to enable policy, DLP configured to detect and block exfiltration of classified data through egress channels (email, web uploads, USB, printing), Information Rights Management binding access policy to the document itself (a Confidential file is unreadable to an unauthorized recipient however it's transferred), and CASB policies enforcing classification across sanctioned and unsanctioned cloud services.",
          "A roadmap gap analysis turns the assessment into a prioritized plan:\n- After scoring all five pillars, document the gap between current state and the target level (usually Advanced for most enterprises), estimating effort (person-months), cost (licensing, implementation, training), and risk-reduction impact per gap.\n- Prioritize by risk-reduction-to-effort ratio — high-impact, low-effort items (MFA for remaining users, MDM compliance deployment) in the next 90 days, high-impact, high-effort items (full ZTNA migration, continuous authorization) on 18–36 month roadmaps — and present it to leadership with breach incidents from unmitigated gaps as motivation, since SolarWinds ($100M+ in damage to affected organizations) is attributable to the absence of Zero Trust microsegmentation and continuous authorization.",
        ],
        codeExample: {
          label: "Zero Trust maturity assessment — identity pillar",
          code: `# Identity Pillar Maturity Assessment

Control                          Score  Level      Notes
---------------------------------  -----  ---------  -------
MFA for all users                  2/3    Advanced   VPN still exempt from MFA
Phishing-resistant MFA (FIDO2)     0/3    Traditional  SMS/TOTP only
Passwordless authentication        0/3    Traditional  Not implemented
Conditional Access policies        2/3    Advanced   Risk-based CA for high-risk apps
Continuous session re-auth         0/3    Traditional  Sessions valid 8h with no recheck
Privileged Identity Management     1/3    Initial     PIM for some roles, not all

Identity Pillar Score: 5/18 = Initial Maturity
Target: Advanced (12/18)
Gap: 7 points — 3 year roadmap required`,
        },
      },
      incident: {
        title: "SolarWinds — Implicit Internal Trust Exploited (2020)",
        when: "October 2019 – December 2020",
        where: "Multiple US federal agencies and enterprises",
        impact: "18,000 organizations compromised; 9 federal agencies breached",
        body: [
          "The SolarWinds supply chain attack — active from about October 2019 to December 2020, when FireEye found it while investigating its own compromise — exposed the fundamental weakness of perimeter-based security at the most consequential scale in cybersecurity history:\n- Russian state actors (APT29/Cozy Bear) compromised SolarWinds' software build process and inserted malicious code (SUNBURST) into the Orion monitoring software update.\n- About 18,000 organizations that installed the trojanized Orion update received a backdoor establishing a command-and-control channel to the attackers.",
          "The lateral movement phase is the most relevant to Zero Trust:\n- Once SUNBURST had its C2 channel, the attackers identified high-value targets among the 18,000 and moved laterally using implicit internal trust.\n- Orion ran as a highly privileged service account (network monitoring needs broad access to query devices and systems), and the attackers used those credentials to reach Active Directory, Azure AD, email, and cloud management interfaces — organizations with microsegmentation and least privilege saw movement significantly limited, while those with flat internal networks saw rapid, unimpeded access to everything.",
          "The federal response made Zero Trust a mandate rather than a concept:\n- Executive Order 14028 (May 2021) required agencies to develop Zero Trust implementation plans within 60 days, advance toward Zero Trust principles within 180 days, and complete specific milestones (MFA for all privileged users, EDR deployment, cloud security configuration) within a year.\n- CISA's Zero Trust Maturity Model (2021, updated to v2.0 in 2023) was built as the implementation framework for the mandate, and SolarWinds effectively ended the debate over whether Zero Trust was theoretical or a practical necessity.",
          "SUNBURST's year-long evasion drives three specific audit areas beyond standard maturity scoring:\n- It evaded common SIEM approaches — observing the environment for up to two weeks before activating to detect sandboxes, mimicking legitimate SolarWinds telemetry, using dormant periods and slow lateral movement to dodge velocity-based anomaly detection, and forging SAML tokens that appeared to come from Microsoft's legitimate authentication infrastructure.\n- For auditors: assess software supply chain trust (vendor security evaluated before deployment, update processes verifying code signing), privileged service-account monitoring (alerts for anomalous service-account behavior, not just user accounts, since service-credential lateral movement is often missed), and SAML token forgery detection (identity monitoring for forged assertions, per Microsoft's post-SolarWinds Azure AD logging and alert guidance absent from most environments before the breach).",
        ],
      },
      diagram: {
        nodes: [
          { label: "Identity Verification", sub: "MFA + FIDO2", type: "attacker" },
          { label: "Device Health Check", sub: "MDM compliance before access", type: "system" },
          { label: "ZTNA / Microsegmentation", sub: "no implicit trust", type: "victim" },
          { label: "Continuous Monitoring", sub: "re-verify every session", type: "result" },
        ],
      },
      timeline: [
        { year: 2010, event: "John Kindervag coins 'Zero Trust' at Forrester Research" },
        { year: 2014, event: "Google BeyondCorp published — enterprise ZTA blueprint" },
        { year: 2020, event: "NIST SP 800-207 — Zero Trust Architecture official standard" },
        { year: 2020, event: "SolarWinds — implicit internal trust exploited at scale", highlight: true },
        { year: 2021, event: "Biden EO 14028 — ZTA mandatory for US federal agencies" },
      ],
      keyTakeaways: [
        "Zero Trust: never trust, always verify — VPN and internal network location grant no implicit trust in a Zero Trust architecture",
        "CISA's five pillars: Identity, Device, Network, Application, Data — each requires independent maturity assessment and roadmap",
        "MFA is the baseline; phishing-resistant FIDO2 hardware keys or passkeys are the target for Advanced maturity",
        "ZTNA replaces VPN — per-application access with no network-level lateral movement capability for users or compromised devices",
        "Device health checks (MDM compliance, EDR running, OS patched) must be enforced at access time, not just at enrollment",
        "Continuous authorization re-evaluates risk signals throughout the session — not just at login",
        "SolarWinds demonstrated that implicit service account trust enables lateral movement as effectively as user account trust",
        "Privileged Identity Management (PIM/PAM) with just-in-time access eliminates persistent standing admin privileges",
        "SAML token forgery detection requires specific Azure AD logging configurations that most organizations lacked before SolarWinds",
        "Software supply chain trust — code signing verification for software updates — is a Zero Trust control for the build and deployment pipeline",
      ],
      references: [
        { title: "NIST SP 800-207 — Zero Trust Architecture", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" },
        { title: "CISA Zero Trust Maturity Model v2.0", url: "https://www.cisa.gov/zero-trust-maturity-model" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t11-q1", type: "Core Idea", challenge: "Never trust by default.", text: "What's the core principle of Zero Trust?", options: ["Every request is authenticated and authorized regardless of network location","Inside the network is trusted","Perimeter firewalls are enough","VPN users are always safe"], correctIndex: 0, explanation: "Zero Trust drops implicit trust — verify every request, every time." },
        { id: "audit-t11-q2", type: "Myth", challenge: "Inside the walls.", text: "Should devices inside the corporate network be trusted by default under Zero Trust?", options: ["No — location grants no trust; every request must be verified","Yes — they passed the perimeter","Only on weekdays","Only servers"], correctIndex: 0, explanation: "Network location is not a trust signal in Zero Trust." },
        { id: "audit-t11-q3", type: "Real Incident", challenge: "SolarWinds, 2020.", text: "What perimeter-security weakness did SolarWinds exploit?", options: ["Implicit internal trust that let the attacker move laterally once inside","A weak admin password","An open S3 bucket","A DDoS"], correctIndex: 0, explanation: "Once inside, implicit trust enabled broad lateral movement." },
        { id: "audit-t11-q4", type: "ZTNA", challenge: "Beyond VPN.", text: "How does ZTNA (Zero Trust Network Access) differ from a VPN?", options: ["It grants application-specific access, not broad network-level access","It's just a faster VPN","It removes authentication","It only works on-prem"], correctIndex: 0, explanation: "ZTNA scopes access to specific apps instead of the whole network." },
        { id: "audit-t11-q5", type: "Maturity", challenge: "Identity, advanced.", text: "Which represents the advanced Identity tier in CISA's Zero Trust Maturity Model?", options: ["Phishing-resistant FIDO2 hardware keys replacing SMS/TOTP","SMS one-time codes","Password-only login","Security questions"], correctIndex: 0, explanation: "FIDO2 hardware keys are phishing-resistant — the advanced identity control." },
        { id: "audit-t11-q6", type: "History", challenge: "BeyondCorp.", text: "Why was Google's BeyondCorp (2014) significant?", options: ["First major enterprise proof that internal network location grants no extra trust","It invented the VPN","It was the first firewall","It ended encryption"], correctIndex: 0, explanation: "BeyondCorp pioneered enterprise Zero Trust at scale." },
        { id: "audit-t11-q7", type: "Concept", challenge: "The perimeter is dead.", text: "'The perimeter is dead' means…", options: ["Trust can't be based on being inside a network boundary anymore","Firewalls are illegal","Networks no longer exist","Everyone is an admin"], correctIndex: 0, explanation: "With cloud and remote work, the network edge isn't a trust boundary." },
        { id: "audit-t11-q8", type: "Defense", challenge: "Stop lateral movement.", text: "Zero Trust most directly defends against…", options: ["Lateral movement after an initial compromise","Slow WiFi","High cloud bills","UI bugs"], correctIndex: 0, explanation: "Verifying every request blocks the free lateral movement breaches rely on." },
      ],
    },
    ctf: {
      scenario: "You are assessing a company's Zero Trust maturity. Review the identity, device, and network pillar assessments to determine their overall ZTA maturity level.",
      hint: "Read each pillar assessment in the zt-assessment/ directory.",
      hints: [
        "List: ls zt-assessment/",
        "Check identity: cat zt-assessment/IDENTITY-PILLAR.txt",
        "Check device: cat zt-assessment/DEVICE-PILLAR.txt",
        "Check network: cat zt-assessment/NETWORK-PILLAR.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/zt-assessment/IDENTITY-PILLAR.txt", value: "FLAG{Z3R0_TRUST_", label: "Identity Pillar — Maturity Assessed" },
        { trigger: "/zt-assessment/DEVICE-PILLAR.txt", value: "M4TUR1TY_", label: "Device Pillar — Maturity Assessed" },
        { trigger: "/zt-assessment/NETWORK-PILLAR.txt", value: "1N1T14L}", label: "Network Pillar — Overall Level Confirmed" },
      ],
      files: {
        "/zt-assessment/IDENTITY-PILLAR.txt": [
          "IDENTITY PILLAR — ZERO TRUST MATURITY",
          "=======================================",
          "MFA enforced: Partial (admin accounts only)  INITIAL",
          "Phishing-resistant MFA (FIDO2): Not deployed  TRADITIONAL",
          "Conditional Access: Basic (location-based)    INITIAL",
          "Continuous re-auth: Not implemented           TRADITIONAL",
          "PIM for privileged roles: Partial             INITIAL",
          "",
          "Identity Pillar Score: INITIAL (1.2/3.0)",
        ].join("\n"),
        "/zt-assessment/DEVICE-PILLAR.txt": [
          "DEVICE PILLAR — ZERO TRUST MATURITY",
          "=====================================",
          "MDM deployment: 60% of devices managed       INITIAL",
          "Device health check before access: No         TRADITIONAL",
          "Certificate-based device auth: No             TRADITIONAL",
          "BYOD policy: No controls on personal devices  TRADITIONAL",
          "",
          "Device Pillar Score: TRADITIONAL (0.6/3.0)",
        ].join("\n"),
        "/zt-assessment/NETWORK-PILLAR.txt": [
          "NETWORK PILLAR — ZERO TRUST MATURITY",
          "======================================",
          "Microsegmentation: Limited (VLAN only)        INITIAL",
          "ZTNA / VPN replacement: No (VPN still primary)TRADITIONAL",
          "DNS-layer security: Yes (Umbrella)             ADVANCED",
          "East-West traffic inspection: No              TRADITIONAL",
          "",
          "Network Pillar Score: INITIAL (0.9/3.0)",
          "",
          "OVERALL ZTA MATURITY: INITIAL",
          "Target for compliance: ADVANCED",
          "Estimated roadmap: 2-3 years",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "zt-assessment", isDir: true }],
        "/zt-assessment": [
          { name: "IDENTITY-PILLAR.txt", isDir: false },
          { name: "DEVICE-PILLAR.txt", isDir: false },
          { name: "NETWORK-PILLAR.txt", isDir: false },
        ],
      },
    },
  },

  // ─── audit-t12: Compliance Automation ─────────────────────────────────────
  {
    epochId: "tech-audit-2",
    wonder: { name: "AWS Security Hub", location: "Global / Cloud", era: "Present Day", emoji: "🤖" },
    id: "audit-t12",
    order: 12,
    title: "Automate the Audit",
    subtitle: "Compliance Automation — AWS Config, Azure Policy, and Security Hub",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "audit-t-badge-12", name: "Compliance Automator", emoji: "⚙️" },
    challengeType: "ctf",
    info: {
      tagline: "Manual compliance checks are point-in-time snapshots. Automated compliance is continuous truth.",
      year: 2017,
      overview: [
        "Compliance automation replaces manual, point-in-time audit checks with continuous, automated verification of security controls:\n- The distinction matters enormously — a manual audit confirms a control was in place when the auditor looked, but a resource can be misconfigured two hours after the audit closes and stay that way for months, whereas automated compliance evaluates every resource against policy in real time and flags deviations in minutes, not months.\n- AWS Config with Config Rules, AWS Security Hub, Azure Policy with Defender for Cloud, and GCP Security Command Center all implement this continuous model — the Toyota 10-year public S3 exposure would have been caught on day one by a single AWS Config managed rule available since 2018.",
        "Two AWS services anchor continuous compliance:\n- AWS Config tracks the configuration history of every resource (EC2, S3, IAM, security groups, RDS, CloudTrail) as configuration items in a timeline, and Config Rules evaluate them as COMPLIANT or NON-COMPLIANT — over 300 managed rules (CIS, PCI DSS, NIST 800-53) plus custom Lambda rules, triggered on resource changes and periodically so both real-time misconfigurations and persistent non-compliance are caught.\n- AWS Security Hub aggregates findings from Config Rules, GuardDuty, Inspector, Macie, and third-party tools (Palo Alto, CrowdStrike, Wiz) into one posture view, running standards-aligned checks (CIS AWS Foundations 180+, PCI DSS 133, NIST 800-53 240+, AWS Foundational Security Best Practices 170+) into a real-time 0–100% compliance score per standard — auditors start at the Security Hub dashboard, where below 80% on CIS is a systemic gap driving the finding set.",
        "Two framework-aligned deployment mechanisms scale compliance:\n- Azure Policy defines JSON rules evaluating resource configurations, with effects Audit (log only), Deny (block creation/modification), DeployIfNotExists (auto-deploy a remediation resource), and Modify (auto-update to compliant), aggregated by Defender for Cloud into a Secure Score, and Azure Policy Initiatives (like the CIS Microsoft Azure Foundations Benchmark) provide framework coverage in a single deployment.\n- AWS Config conformance packs provision all the rules for a framework (CIS AWS Foundations, PCI DSS 3.2.1, NIST 800-53, HIPAA, FedRAMP) in one operation, deployable organization-wide via AWS Organizations so every member account gets the same coverage — closing the multi-account blind spot where controls exist in the management account but not member accounts.",
        "Two layers extend automation from detection to prevention and correction:\n- Auto-remediation makes compliance corrective, not just detective — AWS Config remediation actions use SSM Automation runbooks (a public-S3-bucket rule triggering `AWS-DisableS3BucketPublicReadWrite`, plus `AWS-RevokeUnauthorizedInboundRules`, `AWS-SetIAMPasswordPolicy`), but require careful scoping since not every finding should auto-remediate without review (a 'non-compliant' resource may be a documented exception), so auditors verify it's enabled for highest-priority controls and that actions are logged.\n- Policy-as-code pushes enforcement into the deployment pipeline — Open Policy Agent (OPA) with Conftest expresses policies in Rego and evaluates Terraform plans, Kubernetes manifests, and Dockerfiles before they apply, rejecting a plan that would create a public unencrypted S3 bucket before `terraform apply` runs; preventive IaC gates plus detective continuous monitoring plus corrective auto-remediation together form a mature defense-in-depth compliance program.",
      ],
      technical: {
        title: "Implementing Continuous Compliance",
        body: [
          "Two steps establish and read the continuous-compliance baseline:\n- Conformance pack deployment — `aws configservice put-conformance-pack` referencing a pre-built pack (`OperationalBestPracticesForPCIDSS`, `...ForCISAWS-FoundationsBenchmark`, `...ForHIPAA`), then `describe-conformance-pack-compliance-details` to see each rule as COMPLIANT, NON_COMPLIANT, or INSUFFICIENT_DATA (not yet evaluated, usually resolving within 24 hours), building a remediation priority list by severity (CRITICAL first) and resource risk.\n- Security Hub score analysis — via console or `aws securityhub get-findings`, each standard's score is the percentage of controls passing, drill into failing controls for the specific non-compliant resources, export findings in ASFF JSON to ticketing (Jira, ServiceNow) via EventBridge rules auto-creating tickets for new CRITICAL/HIGH findings, and track the score trend, since a falling score means new resources are deployed faster than findings are remediated — a process breakdown.",
          "Two configuration steps make compliance automated and complete:\n- Auto-remediation — `aws configservice put-remediation-configurations` per rule with `Automatic: true`, `MaximumAutomaticAttempts: 3`, and `RetryAttemptSeconds: 60`, tested in a non-production account first (create a non-compliant resource, confirm detection, the remediation firing, and restoration within 5–15 minutes), with every disabled rule or unconfigured remediation carrying a documented exception (justification, owner, review date).\n- Organization-wide deployment — `aws organizations enable-aws-service-access --service-principal config.amazonaws.com` plus `put-organization-config-rule` to deploy rules to all accounts, and `aws securityhub enable-organization-admin-account` to designate a security account as the findings aggregator, verified by cross-referencing `aws organizations list-accounts` against per-account rule status, since any member account missing the rules is a monitoring blind spot.",
          "A compliance dashboard turns continuous monitoring into audit evidence:\n- Build a report from the Security Hub findings API filtered by standard, FAILED status, and severity, summarizing total controls per framework, passing, failing, and the critical resources affected by each failing control.\n- Map findings to the audit evidence matrix — for each objective (ISO 27001 control, SOC 2 criterion, PCI DSS requirement), document which Security Hub check provides continuous evidence — so auditors can show controls are continuously monitored, not just compliant at a point in time, and SOC 2 auditors increasingly accept Security Hub evidence for Common Criteria controls, reducing manual testing of continuously automated controls.",
        ],
        codeExample: {
          label: "AWS Config Rule with auto-remediation via Lambda",
          code: `# Deploy a Config Rule for S3 public access
aws configservice put-config-rule --config-rule '{
  "ConfigRuleName": "s3-bucket-public-read-prohibited",
  "Source": {
    "Owner": "AWS",
    "SourceIdentifier": "S3_BUCKET_PUBLIC_READ_PROHIBITED"
  }
}'

# Set up auto-remediation via SSM Automation
aws configservice put-remediation-configurations --remediation-configurations '[{
  "ConfigRuleName": "s3-bucket-public-read-prohibited",
  "TargetType": "SSM_DOCUMENT",
  "TargetId": "AWS-DisableS3BucketPublicReadWrite",
  "Automatic": true,
  "MaximumAutomaticAttempts": 3,
  "RetryAttemptSeconds": 60
}]'

# View Security Hub compliance score
aws securityhub get-insights --insight-arns arn:aws:securityhub:::insight/securityhub/default/1`,
        },
      },
      incident: {
        title: "Toyota S3 Public Bucket — 10 Years of Exposure (2023)",
        when: "2013–2023",
        where: "Toyota Connected Corporation",
        impact: "2.15M customer vehicle locations exposed for 10 years; no automated compliance check existed",
        body: [
          "The full scope of Toyota Connected Corporation's S3 misconfiguration — public access on a bucket holding vehicle GPS location data and vehicle identification numbers for 2.15 million customers — was discovered in May 2023 by a security researcher:\n- The bucket had been created in 2013 with public access enabled, a common practice before S3 Public Access Block (2018) existed.\n- What was less excusable was that the misconfiguration persisted for five years after AWS introduced both the technical controls and the automated detection to find and prevent it.",
          "A single managed rule would have caught it almost immediately:\n- `s3-bucket-public-read-prohibited` has been available since 2018, evaluating every bucket and flagging any allowing public read access, running on ACL/policy changes and periodically.\n- Enabling it takes about two minutes and would have identified the misconfiguration within hours of deployment (or within minutes of the 2013 bucket's creation if in place then) — the 10-year exposure reflects the absence of continuous compliance monitoring for the entire decade.",
          "Toyota's discovery exposed a replication pattern across the estate:\n- A broader audit found similar misconfigurations in subsidiary accounts in multiple countries — consistent with organizations that build cloud environments by copying rather than from a template, so when one team creates an environment without guardrails, later teams replicate the same gaps.\n- Organization-wide Config-rule deployment via Organizations conformance packs would have caught all of them centrally, instead of requiring each subsidiary team to implement and maintain compliance controls independently.",
          "The regulatory fallout and the program-design lessons both point to layered automation:\n- Under Japan's amended APPI (prompt breach notification, penalties for inadequate security), Toyota's notification was complicated by the 10-year window — determining whether any third party actually accessed the data was essentially impossible without complete S3 access logging for the whole period (which it lacked) — and GDPR Article 33's 72-hour notification would likely have triggered for any affected European customers, reinforcing that encryption at rest plus S3 Public Access Block gives defense in depth (encrypted data without the KMS key is unreadable even if public).\n- The program-design lessons: deploy Config managed rules organization-wide on day one, enable account-level S3 Block Public Access (as an SCP or account setting) so no bucket can be made public regardless of its own settings, extend monitoring to legacy environments (often the highest-risk because they predate the controls), and alert on all CRITICAL findings within 15 minutes via EventBridge to SNS — prevention plus detection plus alerting makes a 10-year undetected exposure structurally impossible.",
        ],
      },
      diagram: {
        nodes: [
          { label: "AWS Config Rules", sub: "continuous evaluation", type: "attacker" },
          { label: "Security Hub", sub: "aggregated compliance score", type: "system" },
          { label: "Auto-Remediation", sub: "Lambda or SSM fixes", type: "victim" },
          { label: "Compliance Score", sub: "real-time framework posture", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "AWS Config GA — continuous resource configuration monitoring" },
        { year: 2017, event: "CIS AWS Foundations Benchmark v1.0 — 49 automated checks" },
        { year: 2019, event: "AWS Security Hub GA — aggregated compliance across all Config rules" },
        { year: 2023, event: "Toyota — 10-year S3 exposure that AWS Config would have caught in minutes", highlight: true },
      ],
      keyTakeaways: [
        "Compliance automation catches misconfigurations in minutes — manual audits catch them months or years later if at all",
        "AWS Security Hub provides a unified compliance score across 180+ CIS Benchmark checks with real-time updating",
        "Deploy conformance packs organization-wide via AWS Organizations — account-level-only deployment leaves member accounts unmonitored",
        "Auto-remediation of critical controls (S3 public access, root access keys, unrestricted SSH) restores compliance without human intervention",
        "Manual audits verify the automation is working correctly — they supplement, not replace, continuous monitoring",
        "S3 account-level Public Access Block prevents any bucket in the account from being made public, regardless of individual bucket settings",
        "Policy-as-code (OPA with Conftest) evaluates Terraform plans before deployment — preventive compliance complements detective Config rules",
        "Security Hub findings should automatically create tickets via EventBridge — CRITICAL findings require 15-minute notification SLA",
        "Legacy environments created before compliance automation existed require retrospective compliance scanning and remediation planning",
        "Compliance score trending over time is more meaningful than a point-in-time score — a declining score indicates new resources are being deployed non-compliantly",
      ],
      references: [
        { title: "AWS Security Hub — Compliance Standards", url: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html" },
        { title: "CIS AWS Foundations Benchmark", url: "https://www.cisecurity.org/benchmark/amazon_web_services" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-t12-q1", type: "Core Idea", challenge: "Snapshot vs stream.", text: "How does automated compliance differ from manual audits?", options: ["Automated is continuous; manual audits are point-in-time snapshots","Manual is continuous; automated is a snapshot","They're identical","Neither covers cloud"], correctIndex: 0, explanation: "Automation gives continuous truth; manual review is a moment in time." },
        { id: "audit-t12-q2", type: "Real Incident", challenge: "Toyota, 10 years.", text: "What would have immediately caught Toyota's decade-long public S3 misconfig?", options: ["The continuous AWS Config rule 's3-bucket-public-read-prohibited'","An annual manual audit","A stronger password","A new region"], correctIndex: 0, explanation: "A continuously-running Config rule flags public buckets on day one." },
        { id: "audit-t12-q3", type: "Tooling", challenge: "One score.", text: "What does AWS Security Hub provide?", options: ["A unified compliance score aggregating Config, GuardDuty, Inspector, Macie, and third-party findings","A VPN","A password vault","A CDN"], correctIndex: 0, explanation: "Security Hub centralizes findings into one compliance view." },
        { id: "audit-t12-q4", type: "Auto-Remediation", challenge: "Log the fix.", text: "When a Config rule auto-remediates (e.g. closes a public bucket), it should…", options: ["Log the action to provide an audit trail","Do it silently","Skip notification","Delete the bucket"], correctIndex: 0, explanation: "Auto-remediation must be logged so the change is auditable." },
        { id: "audit-t12-q5", type: "Maturity", challenge: "Spot the immature posture.", text: "Which describes an immature compliance-automation program?", options: ["Only 3 of 67 Config rules auto-remediate and findings sit ~47 days before fix","All critical rules auto-remediate promptly","Findings fixed within hours","Continuous monitoring with alerts"], correctIndex: 0, explanation: "Few auto-remediations + long dwell times = immature." },
        { id: "audit-t12-q6", type: "Concept", challenge: "Continuous truth.", text: "The value of compliance automation is…", options: ["Continuous verification instead of a periodic snapshot that drifts out of date","Less logging","Fewer controls","Slower audits"], correctIndex: 0, explanation: "Continuous checks catch drift the moment it happens." },
        { id: "audit-t12-q7", type: "Best Practice", challenge: "Where to auto-fix.", text: "Auto-remediation should be enabled for…", options: ["Critical and high-severity rules, with prompt remediation","Nothing — always manual","Only low-severity style rules","Random rules"], correctIndex: 0, explanation: "Automate the high-impact fixes and remediate promptly." },
        { id: "audit-t12-q8", type: "Capstone", challenge: "Tie it together.", text: "A mature compliance program relies on…", options: ["Continuous automated checks, a unified score, and logged auto-remediation","An annual spreadsheet","Manual review only","Hoping for the best"], correctIndex: 0, explanation: "Continuous + unified + auto-remediated + audited is the mature state." },
      ],
    },
    ctf: {
      scenario: "You are reviewing the compliance automation program for a cloud-first company. Check the Security Hub score, Config rule coverage, and auto-remediation status.",
      hint: "Read the compliance automation files in the compliance/ directory.",
      hints: [
        "List: ls compliance/",
        "Check Security Hub: cat compliance/SECURITY-HUB-SCORE.txt",
        "Check Config coverage: cat compliance/CONFIG-RULES.txt",
        "Check auto-remediation: cat compliance/AUTO-REMEDIATION.txt",
        "Run 'assemble' then submit",
      ],
      fragments: [
        { trigger: "/compliance/SECURITY-HUB-SCORE.txt", value: "FLAG{C0MPL14NC3_", label: "Security Hub — Score Reviewed" },
        { trigger: "/compliance/CONFIG-RULES.txt", value: "4UT0M4T10N_SCH3D1LUD_", label: "Config Rules — Coverage Gaps Found" },
        { trigger: "/compliance/AUTO-REMEDIATION.txt", value: "R3M3D}", label: "Auto-Remediation — Status Confirmed" },
      ],
      files: {
        "/compliance/SECURITY-HUB-SCORE.txt": [
          "AWS SECURITY HUB — COMPLIANCE SCORE",
          "=====================================",
          "CIS AWS Foundations Benchmark v1.4:",
          "  Score: 61%  (118/192 controls passing)",
          "  Critical failures: 12",
          "  High failures: 31",
          "",
          "PCI DSS v3.2.1:",
          "  Score: 74%  (98/133 controls passing)",
          "  Critical failures: 4",
          "",
          "Target: 90%+ for both frameworks",
          "Current posture: NEEDS IMPROVEMENT",
        ].join("\n"),
        "/compliance/CONFIG-RULES.txt": [
          "AWS CONFIG RULE COVERAGE",
          "=========================",
          "Total managed rules deployed: 67 of 180 available  ← 37% coverage",
          "",
          "Notable missing rules:",
          "  s3-bucket-logging-enabled                — NOT DEPLOYED",
          "  ec2-imdsv2-check                         — NOT DEPLOYED",
          "  iam-password-policy                      — NOT DEPLOYED",
          "  cloudtrail-s3-dataevents-enabled         — NOT DEPLOYED",
          "  guardduty-enabled-centralized            — NOT DEPLOYED",
          "",
          "37% Config rule coverage means 63% of compliance checks are manual.",
        ].join("\n"),
        "/compliance/AUTO-REMEDIATION.txt": [
          "AUTO-REMEDIATION STATUS",
          "========================",
          "Rules with auto-remediation enabled: 3 of 67",
          "  s3-bucket-public-read-prohibited:  AUTO-REMEDIATE (Lambda)",
          "  iam-root-access-key-check:         AUTO-REMEDIATE (SSM)",
          "  restricted-ssh:                    AUTO-REMEDIATE (Lambda)",
          "",
          "64 Config rules have no auto-remediation configured.",
          "Findings sit in Security Hub until manually reviewed.",
          "Average finding age: 47 days before remediation.",
          "",
          "Recommendation: Enable auto-remediation for all critical and high rules.",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "compliance", isDir: true }],
        "/compliance": [
          { name: "SECURITY-HUB-SCORE.txt", isDir: false },
          { name: "CONFIG-RULES.txt", isDir: false },
          { name: "AUTO-REMEDIATION.txt", isDir: false },
        ],
      },
    },
  },
];
