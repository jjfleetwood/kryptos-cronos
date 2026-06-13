import type { StageConfig } from "../types";

export const applicationReviewStages: StageConfig[] = [
  {
    "epochId": "application-review",
    "id": "aar-02",
    "order": 2,
    "title": "Authentication and authorization design",
    "subtitle": "Agentic technical & privacy audit of the authentication and authorization design control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Authentication and authorization design\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the application's authn + authz are sound. PASS: authentication is robust (SSO/MFA, secure session management, proper password handling), authorization is enforced server-side with least privilege + no broken object/function-level access (IDOR), sessions are secured (timeout, invalidation, anti-fixation), and authz is checked consistently on every sensitive action. Exceptions: weak/custom auth or no MFA on sensitive access, authorization enforced only in the UI (IDOR/forced-browsing works), broken function-level access (privilege escalation), and insecure session handling.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (App authentication / SSO / MFA; Authorization / access-control model; Session management) as tools — e.g. `authentication design (SSO/federation, MFA, session mgmt, password han`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The application's authentication design (how users authenticate — SSO/federation, MFA, session management, password handling; no weak/custom auth)",
        "The authorization model (role/attribute-based access enforced server-side; least privilege; no broken object/function-level authorization — IDOR/privilege escalation)",
        "Session security (secure session tokens, timeout, invalidation on logout, protection against fixation/hijacking)",
        "Evidence auth is enforced consistently (every sensitive function + object checks authZ server-side, not just hidden in the UI)"
      ],
      "system": [
        "App authentication / SSO / MFA",
        "Authorization / access-control model",
        "Session management",
        "Access-control testing (IDOR / authz)"
      ],
      "dataOwner": [
        "Application owners + AppSec",
        "Development",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Application Review controls."
      }
    },
    "badge": {
      "id": "aar-02-badge",
      "name": "Application Review Auditor",
      "emoji": "🔎"
    },
    "wonder": {
      "name": "Authentication and authorization design",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Authentication and authorization design\" as a repeatable agentic workflow: pull the real evidence (The application's authentication design (how users authenticate — SSO/federation, MFA, session management, password handling; no weak/custom auth)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Authentication and authorization design\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the application's authentication design (how users authenticate — SSO/federation, MFA, session management, password handling; no weak/custom auth), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here App authentication / SSO / MFA, Authorization / access-control model, Session management — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `authentication design (SSO/federation, MFA, session mgmt, password handling; no ` — read-only, against the systems of record.",
        "The test itself is specific. Verify the application's authn + authz are sound. PASS: authentication is robust (SSO/MFA, secure session management, proper password handling), authorization is enforced server-side with least privilege + no broken object/function-level access (IDOR), sessions are secured (timeout, invalidation, anti-fixation), and authz is checked consistently on every sensitive action. Exceptions: weak/custom auth or no MFA on sensitive access, authorization enforced only in the UI (IDOR/forced-browsing works), broken function-level access (privilege escalation), and insecure session handling. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_authentication_and_authorization_design_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from App authentication / SSO / MFA and Authorization / access-control model (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_authentication_and_authorization_design_mcp.py` to expose it to your agent — or `python 02_authentication_and_authorization_design_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "When an unreviewed application became the breach",
        "when": "Recurring (representative)",
        "where": "Enterprise application estates",
        "impact": "An application weakness that an application review would have caught becomes the entry point for a full compromise.",
        "body": [
          "Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.",
          "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Application Review scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull App authentication / SSO / MFA · Authorization / access-control model",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2017,
          "event": "Equifax: unpatched internet-facing app — an application-control failure at root",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 refresh foregrounds broken access control + insecure design"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Authentication and authorization design\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "authentication design (SSO/federation, MFA, session mgmt, password handling; no weak/custom auth)\nauthorization model (server-side RBAC/ABAC, least privilege, no broken object/function-level access — IDOR)\nsession security (secure tokens, timeout, invalidation on logout, anti-fixation/hijacking)\nauthz enforced consistently server-side (every sensitive function + object)?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The application's authentication design (how users authenticate — SSO/federation, MFA, session management, password handling; no weak/custom auth).",
        "The test: Verify the application's authn + authz are sound.",
        "Reconcile the systems of record (App authentication / SSO / MFA, Authorization / access-control model, Session management) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The application enforces access only by hiding buttons in the UI — changing the object ID in the URL (IDOR) returns another user's records, and sensitive admin functions are reachable by forced browsing with no server-side authorization check."
      ],
      "references": [
        {
          "title": "OWASP ASVS",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "OWASP Top 10 — A01/A07",
          "url": "https://owasp.org/www-project-top-ten/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_authentication_and_authorization_design_mcp.py",
          "url": "/audit-code/application-review/02_authentication_and_authorization_design_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Authentication and authorization design\" (the application's authentication design (how users authenticate — sso/federation, mfa, session management, password handling; no weak/custom auth)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Authentication and authorization design\" control for Application Review at AcmeCorp. THE TEST: Verify the application's authn + authz are sound. PASS: authentication is robust (SSO/MFA, secure session management, proper password handling), authorization is enforced server-side with least privilege + no broken object/function-level access (IDOR), sessions are secured (timeout, invalidation, anti-fixation), and authz is checked consistently on every sensitive action. Exceptions: weak/custom auth or no MFA on sensitive access, authorization enforced only in the UI (IDOR/forced-browsing works), broken function-level access (privilege escalation), and insecure session handling. The evidence — The application's authentication design (how users authenticate — SSO/federation, MFA, session management, password handling; no weak/custom auth) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live App authentication / SSO / MFA APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. App authentication / SSO / MFA gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from App authentication / SSO / MFA; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Authentication and authorization design\" Audit Evidence\n\nThe test:\nVerify the application's authn + authz are sound. PASS: authentication is robust (SSO/MFA, secure session management, proper password handling), authorization is enforced server-side with least privilege + no broken object/function-level access (IDOR), sessions are secured (timeout, invalidation, anti-fixation), and authz is checked consistently on every sensitive action. Exceptions: weak/custom auth or no MFA on sensitive access, authorization enforced only in the UI (IDOR/forced-browsing works), broken function-level access (privilege escalation), and insecure session handling.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — The application's authentication design (how users authenticate — SSO/federation, MFA, session management, password handling; no weak/custom auth))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Authentication and authorization design\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Authentication and authorization design\" control must cover\n# fragment: authentication_authorization_design_",
        "/evidence/application-review_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "application-review_inventory.json",
            "isDir": false
          },
          {
            "name": "application-review_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{aar_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/application-review_inventory.json",
          "value": "authentication_authorization_design_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/application-review_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "aar-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Authentication and authorization design\" sub-process of Application Review?",
          "options": [
            "Deploy and operate the authentication and authorization design control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the authentication and authorization design control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for authentication and authorization design against comparable organisations in the sector",
            "Obtain evidence that the authentication and authorization design control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aar-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Authentication and authorization design\" matter to the broader Application Review posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Application Review",
            "It stops mattering once a firewall and endpoint agent are deployed across the Application Review estate",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Application Review controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aar-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Authentication and authorization design\" control?",
          "options": [
            "A point-in-time screenshot of one system's authentication and authorization design settings, captured during the walkthrough",
            "The The application's authentication design (how users authenticate — SSO/federation, MFA, session management, password handling; no weak/custom auth), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the authentication and authorization design control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's authentication and authorization design capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aar-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Authentication and authorization design\"?",
          "options": [
            "From App authentication / SSO / MFA and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how authentication and authorization design works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. App authentication / SSO / MFA) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aar-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Authentication and authorization design\"?",
          "options": [
            "The external audit firm, since it is the party examining the authentication and authorization design control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the authentication and authorization design data is shared, so the accountability sits with no one in particular",
            "Application owners + AppSec, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Application owners + AppSec owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aar-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Authentication and authorization design\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "aar-02-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "aar-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Authentication and authorization design\", which of these is a realistic reportable finding?",
          "options": [
            "The application enforces access only by hiding buttons in the UI — changing the object ID in the URL (IDOR) returns another user's records, and sensitive admin functions are reachable by forced browsing with no server-side authorization check.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The application enforces access only by hiding buttons in the UI — changing the object ID in the URL (IDOR) returns another user's records, and sensitive admin functions are reachable by forced browsing with no server-side authorization check. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aar-02-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "aar-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Authentication and authorization design\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind authentication and authorization design, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "application-review",
    "id": "aar-03",
    "order": 3,
    "title": "Secure configuration and OWASP controls",
    "subtitle": "Agentic technical & privacy audit of the secure configuration and owasp controls control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secure configuration and OWASP controls\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the app is securely configured + OWASP-hardened. PASS: hardened framework config (security headers, safe error handling, no debug/defaults), OWASP Top 10 controls are present (parameterised queries, output encoding, SSRF/deserialization protections), server-side input validation + context-aware encoding, confirmed by SAST/DAST/pen test. Exceptions: misconfiguration (missing security headers, verbose errors, debug enabled, default creds), injection/XSS vulnerabilities (no parameterisation/encoding), and no security testing of the app.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (App security config / headers; OWASP control implementation; Input validation / output encoding) as tools — e.g. `security configuration (hardened framework, security headers CSP/HSTS,`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The application's security configuration (hardened framework config, security headers — CSP/HSTS, error handling that doesn't leak, disabled debug/default features, no default credentials)",
        "Coverage of the OWASP Top 10 controls (injection — parameterised queries; XSS — output encoding; SSRF; insecure deserialization; security misconfiguration)",
        "Input validation + output encoding (server-side validation; context-aware encoding preventing injection/XSS)",
        "Evidence via testing (SAST/DAST/pen test confirming the OWASP controls hold)"
      ],
      "system": [
        "App security config / headers",
        "OWASP control implementation",
        "Input validation / output encoding",
        "SAST / DAST / pen-test"
      ],
      "dataOwner": [
        "Development + AppSec",
        "Application owners",
        "Security testing"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Application Review controls."
      }
    },
    "badge": {
      "id": "aar-03-badge",
      "name": "Application Review Auditor",
      "emoji": "🔎"
    },
    "wonder": {
      "name": "Secure configuration and OWASP controls",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secure configuration and OWASP controls\" as a repeatable agentic workflow: pull the real evidence (The application's security configuration (hardened framework config, security headers — CSP/HSTS, error handling that doesn't leak, disabled debug/default features, no default credentials)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Secure configuration and OWASP controls\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the application's security configuration (hardened framework config, security headers — CSP/HSTS, error handling that doesn't leak, disabled debug/default features, no default credentials), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here App security config / headers, OWASP control implementation, Input validation / output encoding — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `security configuration (hardened framework, security headers CSP/HSTS, safe erro` — read-only, against the systems of record.",
        "The test itself is specific. Verify the app is securely configured + OWASP-hardened. PASS: hardened framework config (security headers, safe error handling, no debug/defaults), OWASP Top 10 controls are present (parameterised queries, output encoding, SSRF/deserialization protections), server-side input validation + context-aware encoding, confirmed by SAST/DAST/pen test. Exceptions: misconfiguration (missing security headers, verbose errors, debug enabled, default creds), injection/XSS vulnerabilities (no parameterisation/encoding), and no security testing of the app. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_secure_configuration_and_owasp_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from App security config / headers and OWASP control implementation (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_secure_configuration_and_owasp_controls_mcp.py` to expose it to your agent — or `python 03_secure_configuration_and_owasp_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "When an unreviewed application became the breach",
        "when": "Recurring (representative)",
        "where": "Enterprise application estates",
        "impact": "An application weakness that an application review would have caught becomes the entry point for a full compromise.",
        "body": [
          "Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.",
          "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Application Review scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull App security config / headers · OWASP control implementation",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2017,
          "event": "Equifax: unpatched internet-facing app — an application-control failure at root",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 refresh foregrounds broken access control + insecure design"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secure configuration and OWASP controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "security configuration (hardened framework, security headers CSP/HSTS, safe error handling, no debug/defaults)\nOWASP Top 10 controls (injection — parameterised; XSS — encoding; SSRF; deserialization; misconfig)\ninput validation + output encoding (server-side; context-aware)\ntesting evidence (SAST/DAST/pen test) the controls hold"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The application's security configuration (hardened framework config, security headers — CSP/HSTS, error handling that doesn't leak, disabled debug/default features, no default credentials).",
        "The test: Verify the app is securely configured + OWASP-hardened.",
        "Reconcile the systems of record (App security config / headers, OWASP control implementation, Input validation / output encoding) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The application builds SQL with string concatenation (SQL injection), reflects user input without encoding (stored XSS), ships with verbose stack-trace errors and debug mode on in production, and has never been DAST-scanned or pen-tested."
      ],
      "references": [
        {
          "title": "OWASP Top 10",
          "url": "https://owasp.org/www-project-top-ten/"
        },
        {
          "title": "OWASP ASVS",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_secure_configuration_and_owasp_controls_mcp.py",
          "url": "/audit-code/application-review/03_secure_configuration_and_owasp_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Secure configuration and OWASP controls\" (the application's security configuration (hardened framework config, security headers — csp/hsts, error handling that doesn't leak, disabled debug/default features, no default credentials)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secure configuration and OWASP controls\" control for Application Review at AcmeCorp. THE TEST: Verify the app is securely configured + OWASP-hardened. PASS: hardened framework config (security headers, safe error handling, no debug/defaults), OWASP Top 10 controls are present (parameterised queries, output encoding, SSRF/deserialization protections), server-side input validation + context-aware encoding, confirmed by SAST/DAST/pen test. Exceptions: misconfiguration (missing security headers, verbose errors, debug enabled, default creds), injection/XSS vulnerabilities (no parameterisation/encoding), and no security testing of the app. The evidence — The application's security configuration (hardened framework config, security headers — CSP/HSTS, error handling that doesn't leak, disabled debug/default features, no default credentials) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live App security config / headers APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. App security config / headers gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from App security config / headers; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Secure configuration and OWASP controls\" Audit Evidence\n\nThe test:\nVerify the app is securely configured + OWASP-hardened. PASS: hardened framework config (security headers, safe error handling, no debug/defaults), OWASP Top 10 controls are present (parameterised queries, output encoding, SSRF/deserialization protections), server-side input validation + context-aware encoding, confirmed by SAST/DAST/pen test. Exceptions: misconfiguration (missing security headers, verbose errors, debug enabled, default creds), injection/XSS vulnerabilities (no parameterisation/encoding), and no security testing of the app.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — The application's security configuration (hardened framework config, security headers — CSP/HSTS, error handling that doesn't leak, disabled debug/default features, no default credentials))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secure configuration and OWASP controls\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secure configuration and OWASP controls\" control must cover\n# fragment: secure_configuration_owasp_",
        "/evidence/application-review_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "application-review_inventory.json",
            "isDir": false
          },
          {
            "name": "application-review_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{aar_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/application-review_inventory.json",
          "value": "secure_configuration_owasp_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/application-review_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "aar-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secure configuration and OWASP controls\" sub-process of Application Review?",
          "options": [
            "Deploy and operate the secure configuration and owasp controls control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the secure configuration and owasp controls control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for secure configuration and owasp controls against comparable organisations in the sector",
            "Obtain evidence that the secure configuration and owasp controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aar-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secure configuration and OWASP controls\" matter to the broader Application Review posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Application Review",
            "It stops mattering once a firewall and endpoint agent are deployed across the Application Review estate",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Application Review controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aar-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secure configuration and OWASP controls\" control?",
          "options": [
            "A point-in-time screenshot of one system's secure configuration and owasp controls settings, captured during the walkthrough",
            "The The application's security configuration (hardened framework config, security headers — CSP/HSTS, error handling that doesn't leak, disabled debug/default features, no default credentials), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the secure configuration and owasp controls control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's secure configuration and owasp controls capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aar-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Secure configuration and OWASP controls\"?",
          "options": [
            "From App security config / headers and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how secure configuration and owasp controls works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. App security config / headers) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aar-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secure configuration and OWASP controls\"?",
          "options": [
            "The external audit firm, since it is the party examining the secure configuration and owasp controls control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the secure configuration and owasp controls data is shared, so the accountability sits with no one in particular",
            "Development + AppSec, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Development + AppSec owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aar-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secure configuration and OWASP controls\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "aar-03-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "aar-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secure configuration and OWASP controls\", which of these is a realistic reportable finding?",
          "options": [
            "The application builds SQL with string concatenation (SQL injection), reflects user input without encoding (stored XSS), ships with verbose stack-trace errors and debug mode on in production, and has never been DAST-scanned or pen-tested.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The application builds SQL with string concatenation (SQL injection), reflects user input without encoding (stored XSS), ships with verbose stack-trace errors and debug mode on in production, and has never been DAST-scanned or pen-tested. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aar-03-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "aar-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secure configuration and OWASP controls\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind secure configuration and owasp controls, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "application-review",
    "id": "aar-04",
    "order": 4,
    "title": "API security controls",
    "subtitle": "Agentic technical & privacy audit of the api security controls control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"API security controls\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the application's APIs are secured. PASS: every API endpoint enforces authentication + object/function-level authorization, rate limiting + resource controls protect against abuse (OWASP API Top 10 — BOLA/BFLA/resource), inputs are schema-validated (mass-assignment protected), and the API inventory is complete (no shadow/deprecated endpoints). Exceptions: unauthenticated or BOLA/BFLA-vulnerable endpoints, no rate limiting (resource-exhaustion/scraping), mass-assignment/unvalidated inputs, and undocumented shadow/zombie APIs exposed.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (API gateway (auth / rate-limit); API authorization (object/function-level); Schema / input validation) as tools — e.g. `API security: authentication + object-level + function-level authz on `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The API security controls (authentication + authorization on every endpoint — object-level + function-level; no unauthenticated/over-permissive endpoints)",
        "Rate limiting + abuse protection (throttling, resource limits — against the OWASP API Top 10: unrestricted resource consumption, BOLA/BFLA)",
        "Input validation + schema enforcement on API inputs (mass-assignment protection, payload validation)",
        "API inventory + exposure (all APIs known + documented; no shadow/undocumented/deprecated endpoints exposed)"
      ],
      "system": [
        "API gateway (auth / rate-limit)",
        "API authorization (object/function-level)",
        "Schema / input validation",
        "API inventory / discovery"
      ],
      "dataOwner": [
        "API / Development + AppSec",
        "Application owners",
        "API platform"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Application Review controls."
      }
    },
    "badge": {
      "id": "aar-04-badge",
      "name": "Application Review Auditor",
      "emoji": "🔎"
    },
    "wonder": {
      "name": "API security controls",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"API security controls\" as a repeatable agentic workflow: pull the real evidence (The API security controls (authentication + authorization on every endpoint — object-level + function-level; no unauthenticated/over-permissive endpoints)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"API security controls\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the API security controls (authentication + authorization on every endpoint — object-level + function-level; no unauthenticated/over-permissive endpoints), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here API gateway (auth / rate-limit), API authorization (object/function-level), Schema / input validation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `API security: authentication + object-level + function-level authz on every endp` — read-only, against the systems of record.",
        "The test itself is specific. Verify the application's APIs are secured. PASS: every API endpoint enforces authentication + object/function-level authorization, rate limiting + resource controls protect against abuse (OWASP API Top 10 — BOLA/BFLA/resource), inputs are schema-validated (mass-assignment protected), and the API inventory is complete (no shadow/deprecated endpoints). Exceptions: unauthenticated or BOLA/BFLA-vulnerable endpoints, no rate limiting (resource-exhaustion/scraping), mass-assignment/unvalidated inputs, and undocumented shadow/zombie APIs exposed. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_api_security_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from API gateway (auth / rate-limit) and API authorization (object/function-level) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_api_security_controls_mcp.py` to expose it to your agent — or `python 04_api_security_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "When an unreviewed application became the breach",
        "when": "Recurring (representative)",
        "where": "Enterprise application estates",
        "impact": "An application weakness that an application review would have caught becomes the entry point for a full compromise.",
        "body": [
          "Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.",
          "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Application Review scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull API gateway (auth / rate-limit) · API authorization (object/function-level)",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2017,
          "event": "Equifax: unpatched internet-facing app — an application-control failure at root",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 refresh foregrounds broken access control + insecure design"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"API security controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "API security: authentication + object-level + function-level authz on every endpoint\nrate limiting + abuse protection (OWASP API Top 10: resource consumption, BOLA/BFLA)\ninput validation + schema enforcement (mass-assignment protection)\nAPI inventory + exposure (no shadow/undocumented/deprecated endpoints)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The API security controls (authentication + authorization on every endpoint — object-level + function-level; no unauthenticated/over-permissive endpoints).",
        "The test: Verify the application's APIs are secured.",
        "Reconcile the systems of record (API gateway (auth / rate-limit), API authorization (object/function-level), Schema / input validation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. An API endpoint returns any user's data by changing an ID (BOLA) with no authorization check, there's no rate limiting (the API was scraped wholesale), and several deprecated, undocumented endpoints remain exposed and unauthenticated."
      ],
      "references": [
        {
          "title": "OWASP API Security Top 10",
          "url": "https://owasp.org/www-project-api-security/"
        },
        {
          "title": "NIST SP 800-204",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_api_security_controls_mcp.py",
          "url": "/audit-code/application-review/04_api_security_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"API security controls\" (the api security controls (authentication + authorization on every endpoint — object-level + function-level; no unauthenticated/over-permissive endpoints)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"API security controls\" control for Application Review at AcmeCorp. THE TEST: Verify the application's APIs are secured. PASS: every API endpoint enforces authentication + object/function-level authorization, rate limiting + resource controls protect against abuse (OWASP API Top 10 — BOLA/BFLA/resource), inputs are schema-validated (mass-assignment protected), and the API inventory is complete (no shadow/deprecated endpoints). Exceptions: unauthenticated or BOLA/BFLA-vulnerable endpoints, no rate limiting (resource-exhaustion/scraping), mass-assignment/unvalidated inputs, and undocumented shadow/zombie APIs exposed. The evidence — The API security controls (authentication + authorization on every endpoint — object-level + function-level; no unauthenticated/over-permissive endpoints) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live API gateway (auth / rate-limit) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. API gateway (auth / rate-limit) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from API gateway (auth / rate-limit); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"API security controls\" Audit Evidence\n\nThe test:\nVerify the application's APIs are secured. PASS: every API endpoint enforces authentication + object/function-level authorization, rate limiting + resource controls protect against abuse (OWASP API Top 10 — BOLA/BFLA/resource), inputs are schema-validated (mass-assignment protected), and the API inventory is complete (no shadow/deprecated endpoints). Exceptions: unauthenticated or BOLA/BFLA-vulnerable endpoints, no rate limiting (resource-exhaustion/scraping), mass-assignment/unvalidated inputs, and undocumented shadow/zombie APIs exposed.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — The API security controls (authentication + authorization on every endpoint — object-level + function-level; no unauthenticated/over-permissive endpoints))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"API security controls\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"API security controls\" control must cover\n# fragment: api_security_controls_",
        "/evidence/application-review_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "application-review_inventory.json",
            "isDir": false
          },
          {
            "name": "application-review_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{aar_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/application-review_inventory.json",
          "value": "api_security_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/application-review_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "aar-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"API security controls\" sub-process of Application Review?",
          "options": [
            "Deploy and operate the api security controls control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the api security controls control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for api security controls against comparable organisations in the sector",
            "Obtain evidence that the api security controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aar-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"API security controls\" matter to the broader Application Review posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Application Review",
            "It stops mattering once a firewall and endpoint agent are deployed across the Application Review estate",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Application Review controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aar-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"API security controls\" control?",
          "options": [
            "A point-in-time screenshot of one system's api security controls settings, captured during the walkthrough",
            "The The API security controls (authentication + authorization on every endpoint — object-level + function-level; no unauthenticated/over-permissive endpoints), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the api security controls control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's api security controls capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aar-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"API security controls\"?",
          "options": [
            "From API gateway (auth / rate-limit) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how api security controls works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. API gateway (auth / rate-limit)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aar-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"API security controls\"?",
          "options": [
            "The external audit firm, since it is the party examining the api security controls control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the api security controls data is shared, so the accountability sits with no one in particular",
            "API / Development + AppSec, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "API / Development + AppSec owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aar-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"API security controls\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "aar-04-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "aar-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"API security controls\", which of these is a realistic reportable finding?",
          "options": [
            "An API endpoint returns any user's data by changing an ID (BOLA) with no authorization check, there's no rate limiting (the API was scraped wholesale), and several deprecated, undocumented endpoints remain exposed and unauthenticated.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. An API endpoint returns any user's data by changing an ID (BOLA) with no authorization check, there's no rate limiting (the API was scraped wholesale), and several deprecated, undocumented endpoints remain exposed and unauthenticated. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aar-04-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "aar-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"API security controls\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind api security controls, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "application-review",
    "id": "aar-05",
    "order": 5,
    "title": "Application logging and monitoring",
    "subtitle": "Agentic technical & privacy audit of the application logging and monitoring control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Application logging and monitoring\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the app logs + is monitored. PASS: security-relevant events (auth, authz failures, privileged/sensitive actions, validation failures) are logged with detail, forwarded to the SIEM with app-attack detections, logs are integrity-protected + free of clear credentials/PII, and business-significant actions have an audit trail. Exceptions: no security logging (attacks + abuse invisible), logs not reaching the SOC/no app-level detection, sensitive data written to logs, and no audit trail of significant actions.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (App security logging; SIEM forwarding + app detections; Log integrity / protection) as tools — e.g. `application security logging (auth events, authz failures, privileged/`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Application security logging (authentication events, authorization failures, privileged/sensitive actions, input-validation failures logged with enough detail for investigation)",
        "Log forwarding to the SIEM + monitoring/alerting on app-level attacks (the app's logs reach the SOC; detections for credential stuffing, injection attempts, privilege abuse)",
        "Log integrity + no sensitive data in logs (logs protected from tampering; credentials/PII not written in clear)",
        "Audit trail of business-significant actions (who did what, for accountability + non-repudiation)"
      ],
      "system": [
        "App security logging",
        "SIEM forwarding + app detections",
        "Log integrity / protection",
        "Business audit trail"
      ],
      "dataOwner": [
        "Development + Security operations",
        "Application owners",
        "SOC"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Application Review controls."
      }
    },
    "badge": {
      "id": "aar-05-badge",
      "name": "Application Review Auditor",
      "emoji": "🔎"
    },
    "wonder": {
      "name": "Application logging and monitoring",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Application logging and monitoring\" as a repeatable agentic workflow: pull the real evidence (Application security logging (authentication events, authorization failures, privileged/sensitive actions, input-validation failures logged with enough detail for investigation)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Application logging and monitoring\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me application security logging (authentication events, authorization failures, privileged/sensitive actions, input-validation failures logged with enough detail for investigation), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here App security logging, SIEM forwarding + app detections, Log integrity / protection — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `application security logging (auth events, authz failures, privileged/sensitive ` — read-only, against the systems of record.",
        "The test itself is specific. Verify the app logs + is monitored. PASS: security-relevant events (auth, authz failures, privileged/sensitive actions, validation failures) are logged with detail, forwarded to the SIEM with app-attack detections, logs are integrity-protected + free of clear credentials/PII, and business-significant actions have an audit trail. Exceptions: no security logging (attacks + abuse invisible), logs not reaching the SOC/no app-level detection, sensitive data written to logs, and no audit trail of significant actions. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_application_logging_and_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from App security logging and SIEM forwarding + app detections (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_application_logging_and_monitoring_mcp.py` to expose it to your agent — or `python 05_application_logging_and_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "When an unreviewed application became the breach",
        "when": "Recurring (representative)",
        "where": "Enterprise application estates",
        "impact": "An application weakness that an application review would have caught becomes the entry point for a full compromise.",
        "body": [
          "Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.",
          "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Application Review scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull App security logging · SIEM forwarding + app detections",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2017,
          "event": "Equifax: unpatched internet-facing app — an application-control failure at root",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 refresh foregrounds broken access control + insecure design"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Application logging and monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "application security logging (auth events, authz failures, privileged/sensitive actions, validation failures)\nlog forwarding to SIEM + monitoring/alerting on app attacks (credential stuffing, injection, privilege abuse)\nlog integrity + no sensitive data in logs (tamper-protected; no clear credentials/PII)\naudit trail of business-significant actions (accountability/non-repudiation)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Application security logging (authentication events, authorization failures, privileged/sensitive actions, input-validation failures logged with enough detail for investigation).",
        "The test: Verify the app logs + is monitored.",
        "Reconcile the systems of record (App security logging, SIEM forwarding + app detections, Log integrity / protection) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The application logs almost nothing — failed logins, authorization denials, and admin actions aren't recorded, nothing reaches the SOC, so a credential-stuffing attack and subsequent privilege abuse left no trace and no one was alerted."
      ],
      "references": [
        {
          "title": "OWASP Top 10 — A09",
          "url": "https://owasp.org/www-project-top-ten/"
        },
        {
          "title": "NIST SP 800-92 — Log Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_application_logging_and_monitoring_mcp.py",
          "url": "/audit-code/application-review/05_application_logging_and_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Application logging and monitoring\" (application security logging (authentication events, authorization failures, privileged/sensitive actions, input-validation failures logged with enough detail for investigation)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Application logging and monitoring\" control for Application Review at AcmeCorp. THE TEST: Verify the app logs + is monitored. PASS: security-relevant events (auth, authz failures, privileged/sensitive actions, validation failures) are logged with detail, forwarded to the SIEM with app-attack detections, logs are integrity-protected + free of clear credentials/PII, and business-significant actions have an audit trail. Exceptions: no security logging (attacks + abuse invisible), logs not reaching the SOC/no app-level detection, sensitive data written to logs, and no audit trail of significant actions. The evidence — Application security logging (authentication events, authorization failures, privileged/sensitive actions, input-validation failures logged with enough detail for investigation) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live App security logging APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. App security logging gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from App security logging; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Application logging and monitoring\" Audit Evidence\n\nThe test:\nVerify the app logs + is monitored. PASS: security-relevant events (auth, authz failures, privileged/sensitive actions, validation failures) are logged with detail, forwarded to the SIEM with app-attack detections, logs are integrity-protected + free of clear credentials/PII, and business-significant actions have an audit trail. Exceptions: no security logging (attacks + abuse invisible), logs not reaching the SOC/no app-level detection, sensitive data written to logs, and no audit trail of significant actions.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — Application security logging (authentication events, authorization failures, privileged/sensitive actions, input-validation failures logged with enough detail for investigation))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Application logging and monitoring\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Application logging and monitoring\" control must cover\n# fragment: application_logging_monitoring_",
        "/evidence/application-review_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"EXCEPTIONS\"\n}\n# fragment: exceptions}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "application-review_inventory.json",
            "isDir": false
          },
          {
            "name": "application-review_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{aar_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/application-review_inventory.json",
          "value": "application_logging_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/application-review_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "exceptions}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "aar-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Application logging and monitoring\" sub-process of Application Review?",
          "options": [
            "Deploy and operate the application logging and monitoring control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the application logging and monitoring control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for application logging and monitoring against comparable organisations in the sector",
            "Obtain evidence that the application logging and monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aar-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Application logging and monitoring\" matter to the broader Application Review posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Application Review",
            "It stops mattering once a firewall and endpoint agent are deployed across the Application Review estate",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Application Review controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aar-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Application logging and monitoring\" control?",
          "options": [
            "A point-in-time screenshot of one system's application logging and monitoring settings, captured during the walkthrough",
            "The Application security logging (authentication events, authorization failures, privileged/sensitive actions, input-validation failures logged with enough detail for investigation), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the application logging and monitoring control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's application logging and monitoring capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aar-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Application logging and monitoring\"?",
          "options": [
            "From App security logging and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how application logging and monitoring works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. App security logging) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aar-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Application logging and monitoring\"?",
          "options": [
            "The external audit firm, since it is the party examining the application logging and monitoring control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the application logging and monitoring data is shared, so the accountability sits with no one in particular",
            "Development + Security operations, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Development + Security operations owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aar-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Application logging and monitoring\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "aar-05-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "aar-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Application logging and monitoring\", which of these is a realistic reportable finding?",
          "options": [
            "The application logs almost nothing — failed logins, authorization denials, and admin actions aren't recorded, nothing reaches the SOC, so a credential-stuffing attack and subsequent privilege abuse left no trace and no one was alerted.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The application logs almost nothing — failed logins, authorization denials, and admin actions aren't recorded, nothing reaches the SOC, so a credential-stuffing attack and subsequent privilege abuse left no trace and no one was alerted. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aar-05-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "aar-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Application logging and monitoring\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind application logging and monitoring, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "application-review",
    "id": "aar-06",
    "order": 6,
    "title": "Application functionality (auto controls, business rules)",
    "subtitle": "Agentic technical & privacy audit of the application functionality (auto controls, business rules) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Application functionality (auto controls, business rules)\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the app's automated controls + business rules are effective. PASS: the configured automated controls (validations, limits, approvals, matching, calculations) are tested + correctly enforce the business rules, the business logic can't be bypassed/manipulated, and changes to control configuration are approved + logged. Exceptions: automated controls misconfigured or not enforcing the rule (a tolerance/approval threshold that doesn't fire), business-logic bypass (skipping approvals, manipulating values), and ungoverned changes to control parameters.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (Application config / control parameters; Control / business-rule testing; Workflow / business-logic integrity) as tools — e.g. `automated/business-logic controls (validations, limits, approvals, cal`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The application's automated/business-logic controls (the configured controls enforcing business rules — validations, limits, approvals, calculations, tolerances — that the process relies on)",
        "Control configuration testing (the automated controls are configured correctly + actually enforce the rule — e.g. a 3-way match, a credit-limit check, an approval threshold works)",
        "Protection of business logic from abuse (the workflow can't be bypassed/manipulated — no skipping approval steps, no negative-quantity/price manipulation)",
        "Change control over the business-rule configuration (who can change a control parameter; changes approved + logged)"
      ],
      "system": [
        "Application config / control parameters",
        "Control / business-rule testing",
        "Workflow / business-logic integrity",
        "Config change control"
      ],
      "dataOwner": [
        "Business process + application owners",
        "Internal audit / controls",
        "Development"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Application Review controls."
      }
    },
    "badge": {
      "id": "aar-06-badge",
      "name": "Application Review Auditor",
      "emoji": "🔎"
    },
    "wonder": {
      "name": "Application functionality (auto controls, business rules)",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Application functionality (auto controls, business rules)\" as a repeatable agentic workflow: pull the real evidence (The application's automated/business-logic controls (the configured controls enforcing business rules — validations, limits, approvals, calculations, tolerances — that the process relies on)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Application functionality (auto controls, business rules)\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the application's automated/business-logic controls (the configured controls enforcing business rules — validations, limits, approvals, calculations, tolerances — that the process relies on), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Application config / control parameters, Control / business-rule testing, Workflow / business-logic integrity — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `automated/business-logic controls (validations, limits, approvals, calculations,` — read-only, against the systems of record.",
        "The test itself is specific. Verify the app's automated controls + business rules are effective. PASS: the configured automated controls (validations, limits, approvals, matching, calculations) are tested + correctly enforce the business rules, the business logic can't be bypassed/manipulated, and changes to control configuration are approved + logged. Exceptions: automated controls misconfigured or not enforcing the rule (a tolerance/approval threshold that doesn't fire), business-logic bypass (skipping approvals, manipulating values), and ungoverned changes to control parameters. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_application_functionality_auto_controls_business_rules_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Application config / control parameters and Control / business-rule testing (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_application_functionality_auto_controls_business_rules_mcp.py` to expose it to your agent — or `python 06_application_functionality_auto_controls_business_rules_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "When an unreviewed application became the breach",
        "when": "Recurring (representative)",
        "where": "Enterprise application estates",
        "impact": "An application weakness that an application review would have caught becomes the entry point for a full compromise.",
        "body": [
          "Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.",
          "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Application Review scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Application config / control parameters · Control / business-rule testing",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2017,
          "event": "Equifax: unpatched internet-facing app — an application-control failure at root",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 refresh foregrounds broken access control + insecure design"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Application functionality (auto controls, business rules)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "automated/business-logic controls (validations, limits, approvals, calculations, tolerances)\ncontrol configuration testing (the control is configured + actually enforces the rule — 3-way match, credit limit, approval threshold)\nbusiness-logic abuse protection (workflow can't be bypassed; no value manipulation)\nchange control over business-rule configuration (who can change; approved + logged)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The application's automated/business-logic controls (the configured controls enforcing business rules — validations, limits, approvals, calculations, tolerances — that the process relies on).",
        "The test: Verify the app's automated controls + business rules are effective.",
        "Reconcile the systems of record (Application config / control parameters, Control / business-rule testing, Workflow / business-logic integrity) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The application's approval-threshold control was misconfigured so high-value transactions bypass approval entirely, the workflow lets a user skip the review step by manipulating the request, and control parameters can be changed by anyone with no approval or log."
      ],
      "references": [
        {
          "title": "PCAOB AS 2201 — ICFR",
          "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"
        },
        {
          "title": "ISACA — Application Controls",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_application_functionality_auto_controls_business_rules_mcp.py",
          "url": "/audit-code/application-review/06_application_functionality_auto_controls_business_rules_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Application functionality (auto controls, business rules)\" (the application's automated/business-logic controls (the configured controls enforcing business rules — validations, limits, approvals, calculations, tolerances — that the process relies on)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Application functionality (auto controls, business rules)\" control for Application Review at AcmeCorp. THE TEST: Verify the app's automated controls + business rules are effective. PASS: the configured automated controls (validations, limits, approvals, matching, calculations) are tested + correctly enforce the business rules, the business logic can't be bypassed/manipulated, and changes to control configuration are approved + logged. Exceptions: automated controls misconfigured or not enforcing the rule (a tolerance/approval threshold that doesn't fire), business-logic bypass (skipping approvals, manipulating values), and ungoverned changes to control parameters. The evidence — The application's automated/business-logic controls (the configured controls enforcing business rules — validations, limits, approvals, calculations, tolerances — that the process relies on) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Application config / control parameters APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Application config / control parameters gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Application config / control parameters; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Application functionality (auto controls, business rules)\" Audit Evidence\n\nThe test:\nVerify the app's automated controls + business rules are effective. PASS: the configured automated controls (validations, limits, approvals, matching, calculations) are tested + correctly enforce the business rules, the business logic can't be bypassed/manipulated, and changes to control configuration are approved + logged. Exceptions: automated controls misconfigured or not enforcing the rule (a tolerance/approval threshold that doesn't fire), business-logic bypass (skipping approvals, manipulating values), and ungoverned changes to control parameters.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — The application's automated/business-logic controls (the configured controls enforcing business rules — validations, limits, approvals, calculations, tolerances — that the process relies on))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Application functionality (auto controls, business rules)\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Application functionality (auto controls, business rules)\" control must cover\n# fragment: application_functionality_auto_",
        "/evidence/application-review_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "application-review_inventory.json",
            "isDir": false
          },
          {
            "name": "application-review_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{aar_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/application-review_inventory.json",
          "value": "application_functionality_auto_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/application-review_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "aar-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Application functionality (auto controls, business rules)\" sub-process of Application Review?",
          "options": [
            "Deploy and operate the application functionality (auto controls, business rules) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the application functionality (auto controls, business rules) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for application functionality (auto controls, business rules) against comparable organisations in the sector",
            "Obtain evidence that the application functionality (auto controls, business rules) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aar-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Application functionality (auto controls, business rules)\" matter to the broader Application Review posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Application Review",
            "It stops mattering once a firewall and endpoint agent are deployed across the Application Review estate",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Application Review controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aar-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Application functionality (auto controls, business rules)\" control?",
          "options": [
            "A point-in-time screenshot of one system's application functionality (auto controls, business rules) settings, captured during the walkthrough",
            "The The application's automated/business-logic controls (the configured controls enforcing business rules — validations, limits, approvals, calculations, tolerances — that the process relies on), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the application functionality (auto controls, business rules) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's application functionality (auto controls, business rules) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aar-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Application functionality (auto controls, business rules)\"?",
          "options": [
            "From Application config / control parameters and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how application functionality (auto controls, business rules) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Application config / control parameters) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aar-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Application functionality (auto controls, business rules)\"?",
          "options": [
            "The external audit firm, since it is the party examining the application functionality (auto controls, business rules) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the application functionality (auto controls, business rules) data is shared, so the accountability sits with no one in particular",
            "Business process + application owners, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business process + application owners owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aar-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Application functionality (auto controls, business rules)\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "aar-06-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "aar-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Application functionality (auto controls, business rules)\", which of these is a realistic reportable finding?",
          "options": [
            "The application's approval-threshold control was misconfigured so high-value transactions bypass approval entirely, the workflow lets a user skip the review step by manipulating the request, and control parameters can be changed by anyone with no approval or log.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The application's approval-threshold control was misconfigured so high-value transactions bypass approval entirely, the workflow lets a user skip the review step by manipulating the request, and control parameters can be changed by anyone with no approval or log. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aar-06-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "aar-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Application functionality (auto controls, business rules)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind application functionality (auto controls, business rules), so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "application-review",
    "id": "aar-07",
    "order": 7,
    "title": "Patch and vulnerability management",
    "subtitle": "Agentic technical & privacy audit of the patch and vulnerability management control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Patch and vulnerability management\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the application is patched + vulnerabilities managed. PASS: the app + its stack (server/runtime/OS/dependencies) are scanned, vulnerabilities are tracked + remediated to SLA, the platform/frameworks are current (no EOL components), and periodic pen-tests/scans drive remediation + retest. Exceptions: unscanned app/stack, unpatched known vulnerabilities past SLA, EOL/unsupported components in production, and pen-test findings left unremediated.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (App / stack vulnerability scanning; Patch management (app platform / deps); Remediation / SLA tracking) as tools — e.g. `vulnerability management for the app + stack (app, server, runtime, OS`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Vulnerability management for the application + its stack (the app, app server, runtime, OS — scanned; vulnerabilities tracked + remediated to SLA)",
        "Patch currency (the application platform, frameworks, and dependencies are kept current; no end-of-life/unsupported components)",
        "Remediation tracking (found vulnerabilities have owners + SLAs + are closed; not an ever-growing backlog)",
        "Pen-test/scan cadence + the closure of findings (periodic testing; findings remediated + retested)"
      ],
      "system": [
        "App / stack vulnerability scanning",
        "Patch management (app platform / deps)",
        "Remediation / SLA tracking",
        "Pen-test cadence"
      ],
      "dataOwner": [
        "Application owners + Security",
        "Development / operations",
        "Vulnerability management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Application Review controls."
      }
    },
    "badge": {
      "id": "aar-07-badge",
      "name": "Application Review Auditor",
      "emoji": "🔎"
    },
    "wonder": {
      "name": "Patch and vulnerability management",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Patch and vulnerability management\" as a repeatable agentic workflow: pull the real evidence (Vulnerability management for the application + its stack (the app, app server, runtime, OS — scanned; vulnerabilities tracked + remediated to SLA)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Patch and vulnerability management\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me vulnerability management for the application + its stack (the app, app server, runtime, OS — scanned; vulnerabilities tracked + remediated to SLA), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here App / stack vulnerability scanning, Patch management (app platform / deps), Remediation / SLA tracking — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `vulnerability management for the app + stack (app, server, runtime, OS scanned; ` — read-only, against the systems of record.",
        "The test itself is specific. Verify the application is patched + vulnerabilities managed. PASS: the app + its stack (server/runtime/OS/dependencies) are scanned, vulnerabilities are tracked + remediated to SLA, the platform/frameworks are current (no EOL components), and periodic pen-tests/scans drive remediation + retest. Exceptions: unscanned app/stack, unpatched known vulnerabilities past SLA, EOL/unsupported components in production, and pen-test findings left unremediated. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_patch_and_vulnerability_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from App / stack vulnerability scanning and Patch management (app platform / deps) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_patch_and_vulnerability_management_mcp.py` to expose it to your agent — or `python 07_patch_and_vulnerability_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "When an unreviewed application became the breach",
        "when": "Recurring (representative)",
        "where": "Enterprise application estates",
        "impact": "An application weakness that an application review would have caught becomes the entry point for a full compromise.",
        "body": [
          "Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.",
          "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Application Review scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull App / stack vulnerability scanning · Patch management (app platform / deps)",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2017,
          "event": "Equifax: unpatched internet-facing app — an application-control failure at root",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 refresh foregrounds broken access control + insecure design"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Patch and vulnerability management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "vulnerability management for the app + stack (app, server, runtime, OS scanned; tracked + remediated to SLA)\npatch currency (platform, frameworks, dependencies current; no EOL/unsupported)\nremediation tracking (owners + SLAs; findings closed, not an ever-growing backlog)\npen-test/scan cadence + closure of findings (tested, remediated, retested)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Vulnerability management for the application + its stack (the app, app server, runtime, OS — scanned; vulnerabilities tracked + remediated to SLA).",
        "The test: Verify the application is patched + vulnerabilities managed.",
        "Reconcile the systems of record (App / stack vulnerability scanning, Patch management (app platform / deps), Remediation / SLA tracking) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The application runs on an end-of-life framework and unpatched app server with known exploitable CVEs; vulnerability scans haven't been run in over a year, and the last pen test's high findings remain open with no owner or SLA."
      ],
      "references": [
        {
          "title": "NIST SP 800-40 — Patch Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "OWASP Top 10 — A06",
          "url": "https://owasp.org/www-project-top-ten/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_patch_and_vulnerability_management_mcp.py",
          "url": "/audit-code/application-review/07_patch_and_vulnerability_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Patch and vulnerability management\" (vulnerability management for the application + its stack (the app, app server, runtime, os — scanned; vulnerabilities tracked + remediated to sla)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Patch and vulnerability management\" control for Application Review at AcmeCorp. THE TEST: Verify the application is patched + vulnerabilities managed. PASS: the app + its stack (server/runtime/OS/dependencies) are scanned, vulnerabilities are tracked + remediated to SLA, the platform/frameworks are current (no EOL components), and periodic pen-tests/scans drive remediation + retest. Exceptions: unscanned app/stack, unpatched known vulnerabilities past SLA, EOL/unsupported components in production, and pen-test findings left unremediated. The evidence — Vulnerability management for the application + its stack (the app, app server, runtime, OS — scanned; vulnerabilities tracked + remediated to SLA) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live App / stack vulnerability scanning APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. App / stack vulnerability scanning gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from App / stack vulnerability scanning; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Patch and vulnerability management\" Audit Evidence\n\nThe test:\nVerify the application is patched + vulnerabilities managed. PASS: the app + its stack (server/runtime/OS/dependencies) are scanned, vulnerabilities are tracked + remediated to SLA, the platform/frameworks are current (no EOL components), and periodic pen-tests/scans drive remediation + retest. Exceptions: unscanned app/stack, unpatched known vulnerabilities past SLA, EOL/unsupported components in production, and pen-test findings left unremediated.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — Vulnerability management for the application + its stack (the app, app server, runtime, OS — scanned; vulnerabilities tracked + remediated to SLA))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Patch and vulnerability management\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Patch and vulnerability management\" control must cover\n# fragment: patch_vulnerability_management_",
        "/evidence/application-review_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "application-review_inventory.json",
            "isDir": false
          },
          {
            "name": "application-review_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{aar_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/application-review_inventory.json",
          "value": "patch_vulnerability_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/application-review_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "aar-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Patch and vulnerability management\" sub-process of Application Review?",
          "options": [
            "Deploy and operate the patch and vulnerability management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the patch and vulnerability management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for patch and vulnerability management against comparable organisations in the sector",
            "Obtain evidence that the patch and vulnerability management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aar-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Patch and vulnerability management\" matter to the broader Application Review posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Application Review",
            "It stops mattering once a firewall and endpoint agent are deployed across the Application Review estate",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Application Review controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aar-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Patch and vulnerability management\" control?",
          "options": [
            "A point-in-time screenshot of one system's patch and vulnerability management settings, captured during the walkthrough",
            "The Vulnerability management for the application + its stack (the app, app server, runtime, OS — scanned; vulnerabilities tracked + remediated to SLA), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the patch and vulnerability management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's patch and vulnerability management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aar-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Patch and vulnerability management\"?",
          "options": [
            "From App / stack vulnerability scanning and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how patch and vulnerability management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. App / stack vulnerability scanning) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aar-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Patch and vulnerability management\"?",
          "options": [
            "The external audit firm, since it is the party examining the patch and vulnerability management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the patch and vulnerability management data is shared, so the accountability sits with no one in particular",
            "Application owners + Security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Application owners + Security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aar-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Patch and vulnerability management\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "aar-07-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "aar-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Patch and vulnerability management\", which of these is a realistic reportable finding?",
          "options": [
            "The application runs on an end-of-life framework and unpatched app server with known exploitable CVEs; vulnerability scans haven't been run in over a year, and the last pen test's high findings remain open with no owner or SLA.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The application runs on an end-of-life framework and unpatched app server with known exploitable CVEs; vulnerability scans haven't been run in over a year, and the last pen test's high findings remain open with no owner or SLA. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aar-07-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "aar-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Patch and vulnerability management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind patch and vulnerability management, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "application-review",
    "id": "aar-08",
    "order": 8,
    "title": "IAM including SoD",
    "subtitle": "Agentic technical & privacy audit of the iam including sod control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IAM including SoD\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify application IAM + SoD are controlled. PASS: access is provisioned via request + approval (IAM/JML-integrated), SoD conflicts (e.g. maker/approver, create-vendor/pay-vendor) are prevented or monitored against a ruleset, privileged app access is least-privilege + monitored, and access is periodically recertified. Exceptions: access granted directly with no approval/JML, toxic SoD combinations live (one user does maker + checker), excessive/unmonitored admin rights, and no access recertification (orphaned/accumulated access).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (App access provisioning (IAM / JML); SoD ruleset / monitoring (e.g. SAP GRC); Privileged-access controls) as tools — e.g. `app access model + provisioning (request + approval; IAM/JML-integrate`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The application's access model + provisioning (how access is granted/changed/removed — request + approval; integrated with IAM/JML; no direct back-end grants)",
        "Segregation of duties within the application (conflicting functions — e.g. create-vendor + pay-vendor, or maker + approver — can't be held by one user; an SoD ruleset enforced/monitored)",
        "Privileged/admin access to the application (who has elevated rights; least privilege; monitored)",
        "Periodic access recertification (application access reviewed; excess/orphaned access removed; SoD conflicts reviewed)"
      ],
      "system": [
        "App access provisioning (IAM / JML)",
        "SoD ruleset / monitoring (e.g. SAP GRC)",
        "Privileged-access controls",
        "Access recertification"
      ],
      "dataOwner": [
        "Application owners + IAM",
        "Controls / SoD team",
        "Internal audit"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Application Review controls."
      }
    },
    "badge": {
      "id": "aar-08-badge",
      "name": "Application Review Auditor",
      "emoji": "🔎"
    },
    "wonder": {
      "name": "IAM including SoD",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"IAM including SoD\" as a repeatable agentic workflow: pull the real evidence (The application's access model + provisioning (how access is granted/changed/removed — request + approval; integrated with IAM/JML; no direct back-end grants)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"IAM including SoD\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the application's access model + provisioning (how access is granted/changed/removed — request + approval; integrated with IAM/JML; no direct back-end grants), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here App access provisioning (IAM / JML), SoD ruleset / monitoring (e.g. SAP GRC), Privileged-access controls — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `app access model + provisioning (request + approval; IAM/JML-integrated; no dire` — read-only, against the systems of record.",
        "The test itself is specific. Verify application IAM + SoD are controlled. PASS: access is provisioned via request + approval (IAM/JML-integrated), SoD conflicts (e.g. maker/approver, create-vendor/pay-vendor) are prevented or monitored against a ruleset, privileged app access is least-privilege + monitored, and access is periodically recertified. Exceptions: access granted directly with no approval/JML, toxic SoD combinations live (one user does maker + checker), excessive/unmonitored admin rights, and no access recertification (orphaned/accumulated access). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_iam_including_sod_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from App access provisioning (IAM / JML) and SoD ruleset / monitoring (e.g. SAP GRC) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_iam_including_sod_mcp.py` to expose it to your agent — or `python 08_iam_including_sod_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "When an unreviewed application became the breach",
        "when": "Recurring (representative)",
        "where": "Enterprise application estates",
        "impact": "An application weakness that an application review would have caught becomes the entry point for a full compromise.",
        "body": [
          "Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.",
          "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Application Review scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull App access provisioning (IAM / JML) · SoD ruleset / monitoring (e.g. SAP GRC)",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2017,
          "event": "Equifax: unpatched internet-facing app — an application-control failure at root",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 refresh foregrounds broken access control + insecure design"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"IAM including SoD\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "app access model + provisioning (request + approval; IAM/JML-integrated; no direct back-end grants)\nsegregation of duties in the app (conflicting functions can't be one user; SoD ruleset enforced/monitored)\nprivileged/admin app access (least privilege; monitored)\nperiodic access recertification (excess/orphaned removed; SoD conflicts reviewed)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The application's access model + provisioning (how access is granted/changed/removed — request + approval; integrated with IAM/JML; no direct back-end grants).",
        "The test: Verify application IAM + SoD are controlled.",
        "Reconcile the systems of record (App access provisioning (IAM / JML), SoD ruleset / monitoring (e.g. SAP GRC), Privileged-access controls) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The application has no SoD ruleset — one finance user can both create a vendor and pay it — access is granted directly in the back end with no approval, several terminated users still have active accounts, and access has never been recertified."
      ],
      "references": [
        {
          "title": "PCAOB AS 2201 — ICFR",
          "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"
        },
        {
          "title": "NIST SP 800-53 AC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_iam_including_sod_mcp.py",
          "url": "/audit-code/application-review/08_iam_including_sod_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"IAM including SoD\" (the application's access model + provisioning (how access is granted/changed/removed — request + approval; integrated with iam/jml; no direct back-end grants)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IAM including SoD\" control for Application Review at AcmeCorp. THE TEST: Verify application IAM + SoD are controlled. PASS: access is provisioned via request + approval (IAM/JML-integrated), SoD conflicts (e.g. maker/approver, create-vendor/pay-vendor) are prevented or monitored against a ruleset, privileged app access is least-privilege + monitored, and access is periodically recertified. Exceptions: access granted directly with no approval/JML, toxic SoD combinations live (one user does maker + checker), excessive/unmonitored admin rights, and no access recertification (orphaned/accumulated access). The evidence — The application's access model + provisioning (how access is granted/changed/removed — request + approval; integrated with IAM/JML; no direct back-end grants) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live App access provisioning (IAM / JML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. App access provisioning (IAM / JML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from App access provisioning (IAM / JML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"IAM including SoD\" Audit Evidence\n\nThe test:\nVerify application IAM + SoD are controlled. PASS: access is provisioned via request + approval (IAM/JML-integrated), SoD conflicts (e.g. maker/approver, create-vendor/pay-vendor) are prevented or monitored against a ruleset, privileged app access is least-privilege + monitored, and access is periodically recertified. Exceptions: access granted directly with no approval/JML, toxic SoD combinations live (one user does maker + checker), excessive/unmonitored admin rights, and no access recertification (orphaned/accumulated access).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — The application's access model + provisioning (how access is granted/changed/removed — request + approval; integrated with IAM/JML; no direct back-end grants))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"IAM including SoD\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"IAM including SoD\" control must cover\n# fragment: iam_including_sod_",
        "/evidence/application-review_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "application-review_inventory.json",
            "isDir": false
          },
          {
            "name": "application-review_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{aar_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/application-review_inventory.json",
          "value": "iam_including_sod_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/application-review_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "aar-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"IAM including SoD\" sub-process of Application Review?",
          "options": [
            "Deploy and operate the iam including sod control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the iam including sod control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for iam including sod against comparable organisations in the sector",
            "Obtain evidence that the iam including sod control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aar-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IAM including SoD\" matter to the broader Application Review posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Application Review",
            "It stops mattering once a firewall and endpoint agent are deployed across the Application Review estate",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Application Review controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aar-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IAM including SoD\" control?",
          "options": [
            "A point-in-time screenshot of one system's iam including sod settings, captured during the walkthrough",
            "The The application's access model + provisioning (how access is granted/changed/removed — request + approval; integrated with IAM/JML; no direct back-end grants), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the iam including sod control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's iam including sod capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aar-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"IAM including SoD\"?",
          "options": [
            "From App access provisioning (IAM / JML) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how iam including sod works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. App access provisioning (IAM / JML)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aar-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IAM including SoD\"?",
          "options": [
            "The external audit firm, since it is the party examining the iam including sod control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the iam including sod data is shared, so the accountability sits with no one in particular",
            "Application owners + IAM, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Application owners + IAM owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aar-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IAM including SoD\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "aar-08-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "aar-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IAM including SoD\", which of these is a realistic reportable finding?",
          "options": [
            "The application has no SoD ruleset — one finance user can both create a vendor and pay it — access is granted directly in the back end with no approval, several terminated users still have active accounts, and access has never been recertified.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The application has no SoD ruleset — one finance user can both create a vendor and pay it — access is granted directly in the back end with no approval, several terminated users still have active accounts, and access has never been recertified. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aar-08-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "aar-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IAM including SoD\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind iam including sod, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "application-review",
    "id": "aar-09",
    "order": 9,
    "title": "Application interfaces",
    "subtitle": "Agentic technical & privacy audit of the application interfaces control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Application interfaces\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify application interfaces are secure + reliable. PASS: all inbound/outbound interfaces are inventoried + documented, secured (authenticated + encrypted, vaulted system credentials), have integrity controls (reconciliation/control totals, failed-transfer detection + handling), and are monitored for failure. Exceptions: undocumented/unknown interfaces, cleartext/unauthenticated data feeds, no reconciliation (data silently lost/duplicated between systems), and unmonitored interface failures.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (Interface / integration inventory; Interface security (auth / encryption); Reconciliation / integrity controls) as tools — e.g. `interfaces/integrations inventory (inbound/outbound; what data flows w`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The application's interfaces/integrations inventory (every inbound/outbound interface — files, APIs, message queues, DB links — documented with what data flows where)",
        "Interface security (authenticated + encrypted interfaces; no anonymous/cleartext data feeds; secured credentials for system-to-system)",
        "Interface integrity + error handling (data transferred completely + accurately — reconciliation/control totals; failed/partial transfers detected + handled, not silently dropped)",
        "Monitoring of interfaces (interface failures detected + alerted; data isn't silently lost between systems)"
      ],
      "system": [
        "Interface / integration inventory",
        "Interface security (auth / encryption)",
        "Reconciliation / integrity controls",
        "Interface monitoring"
      ],
      "dataOwner": [
        "Application + integration owners",
        "Security",
        "Operations"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Application Review controls."
      }
    },
    "badge": {
      "id": "aar-09-badge",
      "name": "Application Review Auditor",
      "emoji": "🔎"
    },
    "wonder": {
      "name": "Application interfaces",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Application interfaces\" as a repeatable agentic workflow: pull the real evidence (The application's interfaces/integrations inventory (every inbound/outbound interface — files, APIs, message queues, DB links — documented with what data flows where)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Application interfaces\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the application's interfaces/integrations inventory (every inbound/outbound interface — files, APIs, message queues, DB links — documented with what data flows where), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Interface / integration inventory, Interface security (auth / encryption), Reconciliation / integrity controls — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `interfaces/integrations inventory (inbound/outbound; what data flows where)` — read-only, against the systems of record.",
        "The test itself is specific. Verify application interfaces are secure + reliable. PASS: all inbound/outbound interfaces are inventoried + documented, secured (authenticated + encrypted, vaulted system credentials), have integrity controls (reconciliation/control totals, failed-transfer detection + handling), and are monitored for failure. Exceptions: undocumented/unknown interfaces, cleartext/unauthenticated data feeds, no reconciliation (data silently lost/duplicated between systems), and unmonitored interface failures. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_application_interfaces_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Interface / integration inventory and Interface security (auth / encryption) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_application_interfaces_mcp.py` to expose it to your agent — or `python 09_application_interfaces_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "When an unreviewed application became the breach",
        "when": "Recurring (representative)",
        "where": "Enterprise application estates",
        "impact": "An application weakness that an application review would have caught becomes the entry point for a full compromise.",
        "body": [
          "Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.",
          "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Application Review scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Interface / integration inventory · Interface security (auth / encryption)",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2017,
          "event": "Equifax: unpatched internet-facing app — an application-control failure at root",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 refresh foregrounds broken access control + insecure design"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Application interfaces\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "interfaces/integrations inventory (inbound/outbound; what data flows where)\ninterface security (authenticated + encrypted; no anonymous/cleartext feeds; vaulted system credentials)\ninterface integrity + error handling (reconciliation/control totals; failed/partial transfers detected)\ninterface monitoring (failures detected + alerted; no silent data loss)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The application's interfaces/integrations inventory (every inbound/outbound interface — files, APIs, message queues, DB links — documented with what data flows where).",
        "The test: Verify application interfaces are secure + reliable.",
        "Reconcile the systems of record (Interface / integration inventory, Interface security (auth / encryption), Reconciliation / integrity controls) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A nightly file interface transfers financial data in cleartext over an unauthenticated channel with no reconciliation, so a partial-transfer failure silently dropped records for weeks before the downstream imbalance was noticed."
      ],
      "references": [
        {
          "title": "ISACA — Application Controls",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-53",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_application_interfaces_mcp.py",
          "url": "/audit-code/application-review/09_application_interfaces_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Application interfaces\" (the application's interfaces/integrations inventory (every inbound/outbound interface — files, apis, message queues, db links — documented with what data flows where)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Application interfaces\" control for Application Review at AcmeCorp. THE TEST: Verify application interfaces are secure + reliable. PASS: all inbound/outbound interfaces are inventoried + documented, secured (authenticated + encrypted, vaulted system credentials), have integrity controls (reconciliation/control totals, failed-transfer detection + handling), and are monitored for failure. Exceptions: undocumented/unknown interfaces, cleartext/unauthenticated data feeds, no reconciliation (data silently lost/duplicated between systems), and unmonitored interface failures. The evidence — The application's interfaces/integrations inventory (every inbound/outbound interface — files, APIs, message queues, DB links — documented with what data flows where) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Interface / integration inventory APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Interface / integration inventory gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Interface / integration inventory; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Application interfaces\" Audit Evidence\n\nThe test:\nVerify application interfaces are secure + reliable. PASS: all inbound/outbound interfaces are inventoried + documented, secured (authenticated + encrypted, vaulted system credentials), have integrity controls (reconciliation/control totals, failed-transfer detection + handling), and are monitored for failure. Exceptions: undocumented/unknown interfaces, cleartext/unauthenticated data feeds, no reconciliation (data silently lost/duplicated between systems), and unmonitored interface failures.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — The application's interfaces/integrations inventory (every inbound/outbound interface — files, APIs, message queues, DB links — documented with what data flows where))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Application interfaces\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Application interfaces\" control must cover\n# fragment: application_interfaces_",
        "/evidence/application-review_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "application-review_inventory.json",
            "isDir": false
          },
          {
            "name": "application-review_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{aar_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/application-review_inventory.json",
          "value": "application_interfaces_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/application-review_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "aar-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Application interfaces\" sub-process of Application Review?",
          "options": [
            "Deploy and operate the application interfaces control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the application interfaces control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for application interfaces against comparable organisations in the sector",
            "Obtain evidence that the application interfaces control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aar-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Application interfaces\" matter to the broader Application Review posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Application Review",
            "It stops mattering once a firewall and endpoint agent are deployed across the Application Review estate",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Application Review controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aar-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Application interfaces\" control?",
          "options": [
            "A point-in-time screenshot of one system's application interfaces settings, captured during the walkthrough",
            "The The application's interfaces/integrations inventory (every inbound/outbound interface — files, APIs, message queues, DB links — documented with what data flows where), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the application interfaces control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's application interfaces capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aar-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Application interfaces\"?",
          "options": [
            "From Interface / integration inventory and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how application interfaces works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Interface / integration inventory) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aar-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Application interfaces\"?",
          "options": [
            "The external audit firm, since it is the party examining the application interfaces control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the application interfaces data is shared, so the accountability sits with no one in particular",
            "Application + integration owners, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Application + integration owners owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aar-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Application interfaces\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "aar-09-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "aar-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Application interfaces\", which of these is a realistic reportable finding?",
          "options": [
            "A nightly file interface transfers financial data in cleartext over an unauthenticated channel with no reconciliation, so a partial-transfer failure silently dropped records for weeks before the downstream imbalance was noticed.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A nightly file interface transfers financial data in cleartext over an unauthenticated channel with no reconciliation, so a partial-transfer failure silently dropped records for weeks before the downstream imbalance was noticed. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aar-09-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "aar-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Application interfaces\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind application interfaces, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "application-review",
    "id": "aar-10",
    "order": 10,
    "title": "Reports and data extracts",
    "subtitle": "Agentic technical & privacy audit of the reports and data extracts control",
    "category": "cybersecurity",
    "xp": 120,
    "easeScore": 6,
    "valueScore": 6,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Reports and data extracts\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify application reports + extracts are controlled + accurate. PASS: reports relied on for decisions/financials/regulatory use are validated for completeness + accuracy, data extracts/exports are access-controlled + logged (bulk-export risk managed), sensitive reports are access-restricted, and key/regulatory reports are accuracy-tested. Exceptions: unvalidated reports feeding decisions/financials (report-logic errors), uncontrolled/unlogged bulk data exports (data-loss/privacy risk), over-broad report access to sensitive data, and untested regulatory reports.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (Reporting / BI platform; Data-extract / export controls + logging; Report access control) as tools — e.g. `report integrity + accuracy (decision/financial/regulatory reports val`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The integrity + accuracy of application reports (reports — especially those relied on for decisions/financials/regulatory — are complete + accurate; the report logic is validated)",
        "Control over data extracts (who can extract/export data, the controls on bulk extracts/downloads — a data-loss + privacy risk; logged)",
        "Report access control (reports containing sensitive data are access-restricted; no over-broad report access)",
        "Validation of key/regulatory reports (the reports auditors/regulators or management rely on are tested for accuracy — the EUC/report-integrity risk)"
      ],
      "system": [
        "Reporting / BI platform",
        "Data-extract / export controls + logging",
        "Report access control",
        "Report validation / EUC"
      ],
      "dataOwner": [
        "Application + report owners",
        "Internal audit / controls",
        "Data protection"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 6/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Application Review controls."
      }
    },
    "badge": {
      "id": "aar-10-badge",
      "name": "Application Review Auditor",
      "emoji": "🔎"
    },
    "wonder": {
      "name": "Reports and data extracts",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Reports and data extracts\" as a repeatable agentic workflow: pull the real evidence (The integrity + accuracy of application reports (reports — especially those relied on for decisions/financials/regulatory — are complete + accurate; the report logic is validated)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Reports and data extracts\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the integrity + accuracy of application reports (reports — especially those relied on for decisions/financials/regulatory — are complete + accurate; the report logic is validated), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Reporting / BI platform, Data-extract / export controls + logging, Report access control — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `report integrity + accuracy (decision/financial/regulatory reports validated; re` — read-only, against the systems of record.",
        "The test itself is specific. Verify application reports + extracts are controlled + accurate. PASS: reports relied on for decisions/financials/regulatory use are validated for completeness + accuracy, data extracts/exports are access-controlled + logged (bulk-export risk managed), sensitive reports are access-restricted, and key/regulatory reports are accuracy-tested. Exceptions: unvalidated reports feeding decisions/financials (report-logic errors), uncontrolled/unlogged bulk data exports (data-loss/privacy risk), over-broad report access to sensitive data, and untested regulatory reports. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_reports_and_data_extracts_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Reporting / BI platform and Data-extract / export controls + logging (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_reports_and_data_extracts_mcp.py` to expose it to your agent — or `python 10_reports_and_data_extracts_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "When an unreviewed application became the breach",
        "when": "Recurring (representative)",
        "where": "Enterprise application estates",
        "impact": "An application weakness that an application review would have caught becomes the entry point for a full compromise.",
        "body": [
          "Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.",
          "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Application Review scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Reporting / BI platform · Data-extract / export controls + logging",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2017,
          "event": "Equifax: unpatched internet-facing app — an application-control failure at root",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 refresh foregrounds broken access control + insecure design"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Reports and data extracts\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "report integrity + accuracy (decision/financial/regulatory reports validated; report logic correct)\ncontrol over data extracts (who can export; bulk-extract controls; logged)\nreport access control (sensitive reports restricted)\nvalidation of key/regulatory reports (accuracy-tested; report-integrity/EUC risk)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The integrity + accuracy of application reports (reports — especially those relied on for decisions/financials/regulatory — are complete + accurate; the report logic is validated).",
        "The test: Verify application reports + extracts are controlled + accurate.",
        "Reconcile the systems of record (Reporting / BI platform, Data-extract / export controls + logging, Report access control) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A financial report management relies on has a logic error that understates a liability and was never validated; meanwhile any user can export the full customer database to a spreadsheet with no logging or restriction — both a report-integrity and a data-loss exposure."
      ],
      "references": [
        {
          "title": "PCAOB AS 2201 — ICFR",
          "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"
        },
        {
          "title": "ISACA — Application Controls",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_reports_and_data_extracts_mcp.py",
          "url": "/audit-code/application-review/10_reports_and_data_extracts_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Reports and data extracts\" (the integrity + accuracy of application reports (reports — especially those relied on for decisions/financials/regulatory — are complete + accurate; the report logic is validated)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Reports and data extracts\" control for Application Review at AcmeCorp. THE TEST: Verify application reports + extracts are controlled + accurate. PASS: reports relied on for decisions/financials/regulatory use are validated for completeness + accuracy, data extracts/exports are access-controlled + logged (bulk-export risk managed), sensitive reports are access-restricted, and key/regulatory reports are accuracy-tested. Exceptions: unvalidated reports feeding decisions/financials (report-logic errors), uncontrolled/unlogged bulk data exports (data-loss/privacy risk), over-broad report access to sensitive data, and untested regulatory reports. The evidence — The integrity + accuracy of application reports (reports — especially those relied on for decisions/financials/regulatory — are complete + accurate; the report logic is validated) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Reporting / BI platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Reporting / BI platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Reporting / BI platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Reports and data extracts\" Audit Evidence\n\nThe test:\nVerify application reports + extracts are controlled + accurate. PASS: reports relied on for decisions/financials/regulatory use are validated for completeness + accuracy, data extracts/exports are access-controlled + logged (bulk-export risk managed), sensitive reports are access-restricted, and key/regulatory reports are accuracy-tested. Exceptions: unvalidated reports feeding decisions/financials (report-logic errors), uncontrolled/unlogged bulk data exports (data-loss/privacy risk), over-broad report access to sensitive data, and untested regulatory reports.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — The integrity + accuracy of application reports (reports — especially those relied on for decisions/financials/regulatory — are complete + accurate; the report logic is validated))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Reports and data extracts\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Reports and data extracts\" control must cover\n# fragment: reports_data_extracts_",
        "/evidence/application-review_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"EXCEPTIONS\"\n}\n# fragment: exceptions}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "application-review_inventory.json",
            "isDir": false
          },
          {
            "name": "application-review_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{aar_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/application-review_inventory.json",
          "value": "reports_data_extracts_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/application-review_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "exceptions}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "aar-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Reports and data extracts\" sub-process of Application Review?",
          "options": [
            "Deploy and operate the reports and data extracts control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the reports and data extracts control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for reports and data extracts against comparable organisations in the sector",
            "Obtain evidence that the reports and data extracts control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aar-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Reports and data extracts\" matter to the broader Application Review posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Application Review",
            "It stops mattering once a firewall and endpoint agent are deployed across the Application Review estate",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Application Review controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aar-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Reports and data extracts\" control?",
          "options": [
            "A point-in-time screenshot of one system's reports and data extracts settings, captured during the walkthrough",
            "The The integrity + accuracy of application reports (reports — especially those relied on for decisions/financials/regulatory — are complete + accurate; the report logic is validated), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the reports and data extracts control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's reports and data extracts capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aar-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Reports and data extracts\"?",
          "options": [
            "From Reporting / BI platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how reports and data extracts works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Reporting / BI platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aar-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Reports and data extracts\"?",
          "options": [
            "The external audit firm, since it is the party examining the reports and data extracts control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the reports and data extracts data is shared, so the accountability sits with no one in particular",
            "Application + report owners, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Application + report owners owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aar-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Reports and data extracts\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "aar-10-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "aar-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Reports and data extracts\", which of these is a realistic reportable finding?",
          "options": [
            "A financial report management relies on has a logic error that understates a liability and was never validated; meanwhile any user can export the full customer database to a spreadsheet with no logging or restriction — both a report-integrity and a data-loss exposure.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A financial report management relies on has a logic error that understates a liability and was never validated; meanwhile any user can export the full customer database to a spreadsheet with no logging or restriction — both a report-integrity and a data-loss exposure. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aar-10-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "aar-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Reports and data extracts\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind reports and data extracts, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "application-review",
    "id": "aar-11",
    "order": 11,
    "title": "Cryptographic library and dependency management (+PQC)",
    "subtitle": "Agentic technical & privacy audit of the cryptographic library and dependency management (+pqc) control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cryptographic library and dependency management (+PQC)\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the app's crypto + dependencies are sound + PQC-aware. PASS: the app uses strong, current, correctly-implemented crypto (no weak/deprecated/homegrown), dependencies are inventoried (SBOM) + vuln-scanned + current, keys are properly managed (vaulted/HSM, rotated, not hardcoded; strong TLS), and there's crypto-agility + a PQC inventory/migration path for long-lived data. Exceptions: weak/deprecated/homegrown crypto, hardcoded keys, vulnerable/abandoned dependencies (no SBOM/scanning), and no crypto-agility or PQC awareness for long-lived sensitive data.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (App crypto implementation; Dependency / SBOM + scanning (SCA); Key management (vault / HSM)) as tools — e.g. `application cryptography (strong, current, correctly implemented; no w`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The application's cryptography (algorithms + libraries used — strong, current, correctly implemented; no weak/deprecated crypto — MD5/SHA1/DES/ECB or homegrown; proper key management)",
        "Dependency/library management (the app's third-party libraries inventoried — SBOM — scanned for known vulnerabilities, kept current; no abandoned/vulnerable dependencies)",
        "Cryptographic key management (keys generated/stored/rotated properly — vaulted/HSM, not hardcoded; TLS configured strongly)",
        "Crypto-agility + PQC readiness (the app's crypto can be updated; an inventory of quantum-vulnerable crypto — RSA/ECC — and a migration path for long-lived data/systems)"
      ],
      "system": [
        "App crypto implementation",
        "Dependency / SBOM + scanning (SCA)",
        "Key management (vault / HSM)",
        "Crypto inventory (PQC)"
      ],
      "dataOwner": [
        "Development + AppSec + crypto",
        "Application owners",
        "Security architecture"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Application Review controls."
      }
    },
    "badge": {
      "id": "aar-11-badge",
      "name": "Application Review Auditor",
      "emoji": "🔎"
    },
    "wonder": {
      "name": "Cryptographic library and dependency management (+PQC)",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cryptographic library and dependency management (+PQC)\" as a repeatable agentic workflow: pull the real evidence (The application's cryptography (algorithms + libraries used — strong, current, correctly implemented; no weak/deprecated crypto — MD5/SHA1/DES/ECB or homegrown; proper key management)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Cryptographic library and dependency management (+PQC)\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the application's cryptography (algorithms + libraries used — strong, current, correctly implemented; no weak/deprecated crypto — MD5/SHA1/DES/ECB or homegrown; proper key management), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here App crypto implementation, Dependency / SBOM + scanning (SCA), Key management (vault / HSM) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `application cryptography (strong, current, correctly implemented; no weak/deprec` — read-only, against the systems of record.",
        "The test itself is specific. Verify the app's crypto + dependencies are sound + PQC-aware. PASS: the app uses strong, current, correctly-implemented crypto (no weak/deprecated/homegrown), dependencies are inventoried (SBOM) + vuln-scanned + current, keys are properly managed (vaulted/HSM, rotated, not hardcoded; strong TLS), and there's crypto-agility + a PQC inventory/migration path for long-lived data. Exceptions: weak/deprecated/homegrown crypto, hardcoded keys, vulnerable/abandoned dependencies (no SBOM/scanning), and no crypto-agility or PQC awareness for long-lived sensitive data. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_cryptographic_library_and_dependency_management_pqc_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from App crypto implementation and Dependency / SBOM + scanning (SCA) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_cryptographic_library_and_dependency_management_pqc_mcp.py` to expose it to your agent — or `python 11_cryptographic_library_and_dependency_management_pqc_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "When an unreviewed application became the breach",
        "when": "Recurring (representative)",
        "where": "Enterprise application estates",
        "impact": "An application weakness that an application review would have caught becomes the entry point for a full compromise.",
        "body": [
          "Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.",
          "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Application Review scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull App crypto implementation · Dependency / SBOM + scanning (SCA)",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2017,
          "event": "Equifax: unpatched internet-facing app — an application-control failure at root",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 refresh foregrounds broken access control + insecure design"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cryptographic library and dependency management (+PQC)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "application cryptography (strong, current, correctly implemented; no weak/deprecated/homegrown; key mgmt)\ndependency/library management (SBOM, vuln-scanned, current; no abandoned/vulnerable deps)\ncryptographic key management (vaulted/HSM, rotated, not hardcoded; strong TLS)\ncrypto-agility + PQC readiness (updatable crypto; quantum-vulnerable inventory + migration for long-lived data)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The application's cryptography (algorithms + libraries used — strong, current, correctly implemented; no weak/deprecated crypto — MD5/SHA1/DES/ECB or homegrown; proper key management).",
        "The test: Verify the app's crypto + dependencies are sound + PQC-aware.",
        "Reconcile the systems of record (App crypto implementation, Dependency / SBOM + scanning (SCA), Key management (vault / HSM)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The application hashes passwords with unsalted MD5, hardcodes its encryption key in source, and depends on several abandoned libraries with known CVEs and no SBOM; its RSA-based crypto has no agility or PQC migration plan despite protecting decade-long-sensitive data."
      ],
      "references": [
        {
          "title": "NIST SP 800-57 — Key Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final"
        },
        {
          "title": "NIST PQC (FIPS 203/204)",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_cryptographic_library_and_dependency_management_pqc_mcp.py",
          "url": "/audit-code/application-review/11_cryptographic_library_and_dependency_management_pqc_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Cryptographic library and dependency management (+PQC)\" (the application's cryptography (algorithms + libraries used — strong, current, correctly implemented; no weak/deprecated crypto — md5/sha1/des/ecb or homegrown; proper key management)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cryptographic library and dependency management (+PQC)\" control for Application Review at AcmeCorp. THE TEST: Verify the app's crypto + dependencies are sound + PQC-aware. PASS: the app uses strong, current, correctly-implemented crypto (no weak/deprecated/homegrown), dependencies are inventoried (SBOM) + vuln-scanned + current, keys are properly managed (vaulted/HSM, rotated, not hardcoded; strong TLS), and there's crypto-agility + a PQC inventory/migration path for long-lived data. Exceptions: weak/deprecated/homegrown crypto, hardcoded keys, vulnerable/abandoned dependencies (no SBOM/scanning), and no crypto-agility or PQC awareness for long-lived sensitive data. The evidence — The application's cryptography (algorithms + libraries used — strong, current, correctly implemented; no weak/deprecated crypto — MD5/SHA1/DES/ECB or homegrown; proper key management) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live App crypto implementation APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. App crypto implementation gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from App crypto implementation; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Cryptographic library and dependency management (+PQC)\" Audit Evidence\n\nThe test:\nVerify the app's crypto + dependencies are sound + PQC-aware. PASS: the app uses strong, current, correctly-implemented crypto (no weak/deprecated/homegrown), dependencies are inventoried (SBOM) + vuln-scanned + current, keys are properly managed (vaulted/HSM, rotated, not hardcoded; strong TLS), and there's crypto-agility + a PQC inventory/migration path for long-lived data. Exceptions: weak/deprecated/homegrown crypto, hardcoded keys, vulnerable/abandoned dependencies (no SBOM/scanning), and no crypto-agility or PQC awareness for long-lived sensitive data.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — The application's cryptography (algorithms + libraries used — strong, current, correctly implemented; no weak/deprecated crypto — MD5/SHA1/DES/ECB or homegrown; proper key management))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cryptographic library and dependency management (+PQC)\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cryptographic library and dependency management (+PQC)\" control must cover\n# fragment: cryptographic_library_dependency_",
        "/evidence/application-review_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "application-review_inventory.json",
            "isDir": false
          },
          {
            "name": "application-review_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{aar_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/application-review_inventory.json",
          "value": "cryptographic_library_dependency_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/application-review_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "aar-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cryptographic library and dependency management (+PQC)\" sub-process of Application Review?",
          "options": [
            "Deploy and operate the cryptographic library and dependency management (+pqc) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the cryptographic library and dependency management (+pqc) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for cryptographic library and dependency management (+pqc) against comparable organisations in the sector",
            "Obtain evidence that the cryptographic library and dependency management (+pqc) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aar-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cryptographic library and dependency management (+PQC)\" matter to the broader Application Review posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Application Review",
            "It stops mattering once a firewall and endpoint agent are deployed across the Application Review estate",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Application Review controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aar-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cryptographic library and dependency management (+PQC)\" control?",
          "options": [
            "A point-in-time screenshot of one system's cryptographic library and dependency management (+pqc) settings, captured during the walkthrough",
            "The The application's cryptography (algorithms + libraries used — strong, current, correctly implemented; no weak/deprecated crypto — MD5/SHA1/DES/ECB or homegrown; proper key management), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the cryptographic library and dependency management (+pqc) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's cryptographic library and dependency management (+pqc) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aar-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Cryptographic library and dependency management (+PQC)\"?",
          "options": [
            "From App crypto implementation and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how cryptographic library and dependency management (+pqc) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. App crypto implementation) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aar-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cryptographic library and dependency management (+PQC)\"?",
          "options": [
            "The external audit firm, since it is the party examining the cryptographic library and dependency management (+pqc) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the cryptographic library and dependency management (+pqc) data is shared, so the accountability sits with no one in particular",
            "Development + AppSec + crypto, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Development + AppSec + crypto owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aar-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cryptographic library and dependency management (+PQC)\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "aar-11-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "aar-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cryptographic library and dependency management (+PQC)\", which of these is a realistic reportable finding?",
          "options": [
            "The application hashes passwords with unsalted MD5, hardcodes its encryption key in source, and depends on several abandoned libraries with known CVEs and no SBOM; its RSA-based crypto has no agility or PQC migration plan despite protecting decade-long-sensitive data.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The application hashes passwords with unsalted MD5, hardcodes its encryption key in source, and depends on several abandoned libraries with known CVEs and no SBOM; its RSA-based crypto has no agility or PQC migration plan despite protecting decade-long-sensitive data. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aar-11-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "aar-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cryptographic library and dependency management (+PQC)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind cryptographic library and dependency management (+pqc), so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "application-review",
    "id": "aar-12",
    "order": 12,
    "title": "Application threat modeling",
    "subtitle": "Agentic technical & privacy audit of the application threat modeling control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Application threat modeling\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the application is threat-modeled. PASS: a structured threat model (STRIDE/data-flow) covers the app's trust boundaries, entry points, assets, and threats — done at design + updated on change — with each significant threat mapped to a mitigating control, app-specific abuse cases, and the model driving security requirements + testing. Exceptions: no threat model, a stale one not updated as the app changed, threats identified but not mapped to controls, and a model that doesn't feed requirements/testing.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (Threat-model records (STRIDE / DFD); Threat → control mapping; Abuse-case catalogue) as tools — e.g. `application threat model (STRIDE/data-flow: trust boundaries, entry po`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The application threat model (a structured model — STRIDE/data-flow — of the app's trust boundaries, entry points, assets, and threats; done at design + updated on change)",
        "Identified threats mapped to mitigating controls (each significant threat has a control/requirement; gaps flagged as risk)",
        "Abuse/misuse cases for the application's specific function (how an attacker abuses this app — not generic)",
        "The threat model driving security requirements + testing (it feeds the security test plan + design decisions, not a one-off document)"
      ],
      "system": [
        "Threat-model records (STRIDE / DFD)",
        "Threat → control mapping",
        "Abuse-case catalogue",
        "Threat-model → test-plan link"
      ],
      "dataOwner": [
        "AppSec + Development",
        "Security architecture",
        "Application owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Application Review controls."
      }
    },
    "badge": {
      "id": "aar-12-badge",
      "name": "Application Review Auditor",
      "emoji": "🔎"
    },
    "wonder": {
      "name": "Application threat modeling",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Application threat modeling\" as a repeatable agentic workflow: pull the real evidence (The application threat model (a structured model — STRIDE/data-flow — of the app's trust boundaries, entry points, assets, and threats; done at design + updated on change)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Application threat modeling\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the application threat model (a structured model — STRIDE/data-flow — of the app's trust boundaries, entry points, assets, and threats; done at design + updated on change), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Threat-model records (STRIDE / DFD), Threat → control mapping, Abuse-case catalogue — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `application threat model (STRIDE/data-flow: trust boundaries, entry points, asse` — read-only, against the systems of record.",
        "The test itself is specific. Verify the application is threat-modeled. PASS: a structured threat model (STRIDE/data-flow) covers the app's trust boundaries, entry points, assets, and threats — done at design + updated on change — with each significant threat mapped to a mitigating control, app-specific abuse cases, and the model driving security requirements + testing. Exceptions: no threat model, a stale one not updated as the app changed, threats identified but not mapped to controls, and a model that doesn't feed requirements/testing. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_application_threat_modeling_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Threat-model records (STRIDE / DFD) and Threat → control mapping (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_application_threat_modeling_mcp.py` to expose it to your agent — or `python 12_application_threat_modeling_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "When an unreviewed application became the breach",
        "when": "Recurring (representative)",
        "where": "Enterprise application estates",
        "impact": "An application weakness that an application review would have caught becomes the entry point for a full compromise.",
        "body": [
          "Across post-mortems the pattern is the same: a control that an application review is designed to test — inventory, authn, secure config, API security — was never verified for one app, and that app became the entry point.",
          "The audit lesson is that application controls are only as good as the review that confirms they exist and operate on every app in scope."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Application Review scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Threat-model records (STRIDE / DFD) · Threat → control mapping",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2017,
          "event": "Equifax: unpatched internet-facing app — an application-control failure at root",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 refresh foregrounds broken access control + insecure design"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Application threat modeling\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "application threat model (STRIDE/data-flow: trust boundaries, entry points, assets, threats; at design + updated on change)\nthreats mapped to mitigating controls (gaps flagged as risk)\nabuse/misuse cases specific to the app's function\nthreat model driving security requirements + testing"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The application threat model (a structured model — STRIDE/data-flow — of the app's trust boundaries, entry points, assets, and threats; done at design + updated on change).",
        "The test: Verify the application is threat-modeled.",
        "Reconcile the systems of record (Threat-model records (STRIDE / DFD), Threat → control mapping, Abuse-case catalogue) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The application was never threat-modeled, so its trust boundaries and abuse cases were never analysed; the high-risk paths an attacker would actually use (the ones a model would have surfaced) were left without mitigating controls until a pen test found them in production."
      ],
      "references": [
        {
          "title": "OWASP Threat Modeling",
          "url": "https://owasp.org/www-community/Threat_Modeling"
        },
        {
          "title": "OWASP ASVS",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_application_threat_modeling_mcp.py",
          "url": "/audit-code/application-review/12_application_threat_modeling_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Application threat modeling\" (the application threat model (a structured model — stride/data-flow — of the app's trust boundaries, entry points, assets, and threats; done at design + updated on change)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Application threat modeling\" control for Application Review at AcmeCorp. THE TEST: Verify the application is threat-modeled. PASS: a structured threat model (STRIDE/data-flow) covers the app's trust boundaries, entry points, assets, and threats — done at design + updated on change — with each significant threat mapped to a mitigating control, app-specific abuse cases, and the model driving security requirements + testing. Exceptions: no threat model, a stale one not updated as the app changed, threats identified but not mapped to controls, and a model that doesn't feed requirements/testing. The evidence — The application threat model (a structured model — STRIDE/data-flow — of the app's trust boundaries, entry points, assets, and threats; done at design + updated on change) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Threat-model records (STRIDE / DFD) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Threat-model records (STRIDE / DFD) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Threat-model records (STRIDE / DFD); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Application threat modeling\" Audit Evidence\n\nThe test:\nVerify the application is threat-modeled. PASS: a structured threat model (STRIDE/data-flow) covers the app's trust boundaries, entry points, assets, and threats — done at design + updated on change — with each significant threat mapped to a mitigating control, app-specific abuse cases, and the model driving security requirements + testing. Exceptions: no threat model, a stale one not updated as the app changed, threats identified but not mapped to controls, and a model that doesn't feed requirements/testing.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — The application threat model (a structured model — STRIDE/data-flow — of the app's trust boundaries, entry points, assets, and threats; done at design + updated on change))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Application threat modeling\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Application threat modeling\" control must cover\n# fragment: application_threat_modeling_",
        "/evidence/application-review_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "application-review_inventory.json",
            "isDir": false
          },
          {
            "name": "application-review_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{aar_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/application-review_inventory.json",
          "value": "application_threat_modeling_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/application-review_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "aar-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Application threat modeling\" sub-process of Application Review?",
          "options": [
            "Deploy and operate the application threat modeling control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the application threat modeling control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for application threat modeling against comparable organisations in the sector",
            "Obtain evidence that the application threat modeling control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aar-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Application threat modeling\" matter to the broader Application Review posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Application Review",
            "It stops mattering once a firewall and endpoint agent are deployed across the Application Review estate",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Application Review controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aar-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Application threat modeling\" control?",
          "options": [
            "A point-in-time screenshot of one system's application threat modeling settings, captured during the walkthrough",
            "The The application threat model (a structured model — STRIDE/data-flow — of the app's trust boundaries, entry points, assets, and threats; done at design + updated on change), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the application threat modeling control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's application threat modeling capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aar-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Application threat modeling\"?",
          "options": [
            "From Threat-model records (STRIDE / DFD) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how application threat modeling works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Threat-model records (STRIDE / DFD)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aar-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Application threat modeling\"?",
          "options": [
            "The external audit firm, since it is the party examining the application threat modeling control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the application threat modeling data is shared, so the accountability sits with no one in particular",
            "AppSec + Development, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "AppSec + Development owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aar-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Application threat modeling\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "aar-12-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "aar-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Application threat modeling\", which of these is a realistic reportable finding?",
          "options": [
            "The application was never threat-modeled, so its trust boundaries and abuse cases were never analysed; the high-risk paths an attacker would actually use (the ones a model would have surfaced) were left without mitigating controls until a pen test found them in production.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The application was never threat-modeled, so its trust boundaries and abuse cases were never analysed; the high-risk paths an attacker would actually use (the ones a model would have surfaced) were left without mitigating controls until a pen test found them in production. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aar-12-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "aar-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Application threat modeling\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind application threat modeling, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  }
];
