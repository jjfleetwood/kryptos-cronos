import type { StageConfig } from "../types";

export const applicationReviewStages: StageConfig[] = [
  {
    "epochId": "application-review",
    "id": "aar-02",
    "order": 2,
    "title": "Authentication and authorization design",
    "subtitle": "Agentic technical & privacy audit of the authentication and authorization design control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Authentication and authorization design\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Authentication and authorization design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (ServiceNow CMDB; Okta / Entra SSO; AWS / Azure cloud plane) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the authentication and authorization design control (from ServiceNow CMDB)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ServiceNow CMDB",
        "Okta / Entra SSO",
        "AWS / Azure cloud plane",
        "App configuration stores"
      ],
      "dataOwner": [
        "Application owners",
        "Identity & Access Management",
        "Cloud Platform / FinOps",
        "AppSec"
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
      "tagline": "Auditing \"Authentication and authorization design\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the authentication and authorization design control (from ServiceNow CMDB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Authentication and authorization design\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the authentication and authorization design control (from ServiceNow CMDB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Authentication and authorization design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_authentication_and_authorization_design_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ServiceNow CMDB and Okta / Entra SSO (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull ServiceNow CMDB · Okta / Entra SSO",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the authentication and authorization design control (from ServiceNow CMDB).",
        "The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Authentication and authorization design\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the authentication and authorization design control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP Application Security Verification Standard (ASVS)",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "NIST SP 800-53 — SA/CM families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Authentication and authorization design\" (in-scope inventory for the authentication and authorization design control (from servicenow cmdb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Authentication and authorization design\" control for Application Review at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Authentication and authorization design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the authentication and authorization design control (from ServiceNow CMDB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ServiceNow CMDB APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ServiceNow CMDB gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ServiceNow CMDB; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Authentication and authorization design\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Authentication and authorization design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — In-scope inventory for the authentication and authorization design control (from ServiceNow CMDB))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the authentication and authorization design control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aar-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Authentication and authorization design\" matter to the broader Application Review posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aar-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Authentication and authorization design\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the authentication and authorization design control (from ServiceNow CMDB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aar-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Authentication and authorization design\"?",
          "options": [
            "ServiceNow CMDB (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ServiceNow CMDB) via read-only access."
        },
        {
          "id": "aar-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Authentication and authorization design\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Application owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aar-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Authentication and authorization design\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "aar-02-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "aar-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Authentication and authorization design\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the authentication and authorization design control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the authentication and authorization design control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aar-02-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "aar-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Authentication and authorization design\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secure configuration and OWASP controls\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Secure configuration and OWASP controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (ServiceNow CMDB; Okta / Entra SSO; AWS / Azure cloud plane) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the secure configuration and owasp controls control (from ServiceNow CMDB)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ServiceNow CMDB",
        "Okta / Entra SSO",
        "AWS / Azure cloud plane",
        "App configuration stores"
      ],
      "dataOwner": [
        "Application owners",
        "Identity & Access Management",
        "Cloud Platform / FinOps",
        "AppSec"
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
      "tagline": "Auditing \"Secure configuration and OWASP controls\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the secure configuration and owasp controls control (from ServiceNow CMDB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Secure configuration and OWASP controls\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the secure configuration and owasp controls control (from ServiceNow CMDB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Secure configuration and OWASP controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_secure_configuration_and_owasp_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ServiceNow CMDB and Okta / Entra SSO (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull ServiceNow CMDB · Okta / Entra SSO",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the secure configuration and owasp controls control (from ServiceNow CMDB).",
        "The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Secure configuration and OWASP controls\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the secure configuration and owasp controls control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP Application Security Verification Standard (ASVS)",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "NIST SP 800-53 — SA/CM families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Secure configuration and OWASP controls\" (in-scope inventory for the secure configuration and owasp controls control (from servicenow cmdb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secure configuration and OWASP controls\" control for Application Review at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Secure configuration and OWASP controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the secure configuration and owasp controls control (from ServiceNow CMDB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ServiceNow CMDB APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ServiceNow CMDB gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ServiceNow CMDB; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Secure configuration and OWASP controls\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Secure configuration and OWASP controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — In-scope inventory for the secure configuration and owasp controls control (from ServiceNow CMDB))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the secure configuration and owasp controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aar-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secure configuration and OWASP controls\" matter to the broader Application Review posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aar-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secure configuration and OWASP controls\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the secure configuration and owasp controls control (from ServiceNow CMDB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aar-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Secure configuration and OWASP controls\"?",
          "options": [
            "ServiceNow CMDB (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ServiceNow CMDB) via read-only access."
        },
        {
          "id": "aar-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secure configuration and OWASP controls\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Application owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aar-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secure configuration and OWASP controls\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "aar-03-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "aar-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secure configuration and OWASP controls\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the secure configuration and owasp controls control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the secure configuration and owasp controls control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aar-03-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "aar-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secure configuration and OWASP controls\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"API security controls\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"API security controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (ServiceNow CMDB; Okta / Entra SSO; AWS / Azure cloud plane) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the api security controls control (from ServiceNow CMDB)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ServiceNow CMDB",
        "Okta / Entra SSO",
        "AWS / Azure cloud plane",
        "App configuration stores"
      ],
      "dataOwner": [
        "Application owners",
        "Identity & Access Management",
        "Cloud Platform / FinOps",
        "AppSec"
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
      "tagline": "Auditing \"API security controls\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the api security controls control (from ServiceNow CMDB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"API security controls\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the api security controls control (from ServiceNow CMDB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"API security controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_api_security_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ServiceNow CMDB and Okta / Entra SSO (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull ServiceNow CMDB · Okta / Entra SSO",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the api security controls control (from ServiceNow CMDB).",
        "The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"API security controls\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the api security controls control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP Application Security Verification Standard (ASVS)",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "NIST SP 800-53 — SA/CM families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"API security controls\" (in-scope inventory for the api security controls control (from servicenow cmdb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"API security controls\" control for Application Review at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"API security controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the api security controls control (from ServiceNow CMDB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ServiceNow CMDB APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ServiceNow CMDB gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ServiceNow CMDB; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"API security controls\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"API security controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — In-scope inventory for the api security controls control (from ServiceNow CMDB))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the api security controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aar-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"API security controls\" matter to the broader Application Review posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aar-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"API security controls\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the api security controls control (from ServiceNow CMDB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aar-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"API security controls\"?",
          "options": [
            "ServiceNow CMDB (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ServiceNow CMDB) via read-only access."
        },
        {
          "id": "aar-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"API security controls\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Application owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aar-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"API security controls\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "aar-04-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "aar-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"API security controls\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the api security controls control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the api security controls control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aar-04-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "aar-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"API security controls\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Application logging and monitoring\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (ServiceNow CMDB; Okta / Entra SSO; AWS / Azure cloud plane) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the application logging and monitoring control (from ServiceNow CMDB)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ServiceNow CMDB",
        "Okta / Entra SSO",
        "AWS / Azure cloud plane",
        "App configuration stores"
      ],
      "dataOwner": [
        "Application owners",
        "Identity & Access Management",
        "Cloud Platform / FinOps",
        "AppSec"
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
      "tagline": "Auditing \"Application logging and monitoring\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the application logging and monitoring control (from ServiceNow CMDB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Application logging and monitoring\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the application logging and monitoring control (from ServiceNow CMDB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_application_logging_and_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ServiceNow CMDB and Okta / Entra SSO (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull ServiceNow CMDB · Okta / Entra SSO",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the application logging and monitoring control (from ServiceNow CMDB).",
        "The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application logging and monitoring\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the application logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP Application Security Verification Standard (ASVS)",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "NIST SP 800-53 — SA/CM families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Application logging and monitoring\" (in-scope inventory for the application logging and monitoring control (from servicenow cmdb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Application logging and monitoring\" control for Application Review at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the application logging and monitoring control (from ServiceNow CMDB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ServiceNow CMDB APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ServiceNow CMDB gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ServiceNow CMDB; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Application logging and monitoring\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — In-scope inventory for the application logging and monitoring control (from ServiceNow CMDB))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the application logging and monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aar-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Application logging and monitoring\" matter to the broader Application Review posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aar-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Application logging and monitoring\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the application logging and monitoring control (from ServiceNow CMDB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aar-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Application logging and monitoring\"?",
          "options": [
            "ServiceNow CMDB (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ServiceNow CMDB) via read-only access."
        },
        {
          "id": "aar-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Application logging and monitoring\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Application owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aar-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Application logging and monitoring\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "aar-05-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "aar-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Application logging and monitoring\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the application logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the application logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aar-05-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "aar-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Application logging and monitoring\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Application functionality (auto controls, business rules)\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application functionality (auto controls, business rules)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (ServiceNow CMDB; Okta / Entra SSO; AWS / Azure cloud plane) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the application functionality (auto controls, business rules) control (from ServiceNow CMDB)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ServiceNow CMDB",
        "Okta / Entra SSO",
        "AWS / Azure cloud plane",
        "App configuration stores"
      ],
      "dataOwner": [
        "Application owners",
        "Identity & Access Management",
        "Cloud Platform / FinOps",
        "AppSec"
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
      "tagline": "Auditing \"Application functionality (auto controls, business rules)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the application functionality (auto controls, business rules) control (from ServiceNow CMDB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Application functionality (auto controls, business rules)\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the application functionality (auto controls, business rules) control (from ServiceNow CMDB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application functionality (auto controls, business rules)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_application_functionality_auto_controls_business_rules_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ServiceNow CMDB and Okta / Entra SSO (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull ServiceNow CMDB · Okta / Entra SSO",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the application functionality (auto controls, business rules) control (from ServiceNow CMDB).",
        "The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application functionality (auto controls, business rules)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the application functionality (auto controls, business rules) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP Application Security Verification Standard (ASVS)",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "NIST SP 800-53 — SA/CM families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Application functionality (auto controls, business rules)\" (in-scope inventory for the application functionality (auto controls, business rules) control (from servicenow cmdb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Application functionality (auto controls, business rules)\" control for Application Review at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application functionality (auto controls, business rules)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the application functionality (auto controls, business rules) control (from ServiceNow CMDB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ServiceNow CMDB APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ServiceNow CMDB gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ServiceNow CMDB; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Application functionality (auto controls, business rules)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application functionality (auto controls, business rules)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — In-scope inventory for the application functionality (auto controls, business rules) control (from ServiceNow CMDB))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the application functionality (auto controls, business rules) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aar-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Application functionality (auto controls, business rules)\" matter to the broader Application Review posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aar-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Application functionality (auto controls, business rules)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the application functionality (auto controls, business rules) control (from ServiceNow CMDB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aar-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Application functionality (auto controls, business rules)\"?",
          "options": [
            "ServiceNow CMDB (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ServiceNow CMDB) via read-only access."
        },
        {
          "id": "aar-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Application functionality (auto controls, business rules)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Application owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aar-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Application functionality (auto controls, business rules)\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "aar-06-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "aar-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Application functionality (auto controls, business rules)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the application functionality (auto controls, business rules) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the application functionality (auto controls, business rules) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aar-06-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "aar-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Application functionality (auto controls, business rules)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Patch and vulnerability management\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Patch and vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (ServiceNow CMDB; Okta / Entra SSO; AWS / Azure cloud plane) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the patch and vulnerability management control (from ServiceNow CMDB)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ServiceNow CMDB",
        "Okta / Entra SSO",
        "AWS / Azure cloud plane",
        "App configuration stores"
      ],
      "dataOwner": [
        "Application owners",
        "Identity & Access Management",
        "Cloud Platform / FinOps",
        "AppSec"
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
      "tagline": "Auditing \"Patch and vulnerability management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the patch and vulnerability management control (from ServiceNow CMDB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Patch and vulnerability management\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the patch and vulnerability management control (from ServiceNow CMDB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Patch and vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_patch_and_vulnerability_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ServiceNow CMDB and Okta / Entra SSO (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull ServiceNow CMDB · Okta / Entra SSO",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the patch and vulnerability management control (from ServiceNow CMDB).",
        "The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Patch and vulnerability management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the patch and vulnerability management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP Application Security Verification Standard (ASVS)",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "NIST SP 800-53 — SA/CM families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Patch and vulnerability management\" (in-scope inventory for the patch and vulnerability management control (from servicenow cmdb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Patch and vulnerability management\" control for Application Review at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Patch and vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the patch and vulnerability management control (from ServiceNow CMDB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ServiceNow CMDB APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ServiceNow CMDB gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ServiceNow CMDB; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Patch and vulnerability management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Patch and vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — In-scope inventory for the patch and vulnerability management control (from ServiceNow CMDB))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the patch and vulnerability management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aar-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Patch and vulnerability management\" matter to the broader Application Review posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aar-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Patch and vulnerability management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the patch and vulnerability management control (from ServiceNow CMDB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aar-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Patch and vulnerability management\"?",
          "options": [
            "ServiceNow CMDB (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ServiceNow CMDB) via read-only access."
        },
        {
          "id": "aar-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Patch and vulnerability management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Application owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aar-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Patch and vulnerability management\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "aar-07-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "aar-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Patch and vulnerability management\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the patch and vulnerability management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the patch and vulnerability management control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aar-07-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "aar-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Patch and vulnerability management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IAM including SoD\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"IAM including SoD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (ServiceNow CMDB; Okta / Entra SSO; AWS / Azure cloud plane) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the iam including sod control (from ServiceNow CMDB)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ServiceNow CMDB",
        "Okta / Entra SSO",
        "AWS / Azure cloud plane",
        "App configuration stores"
      ],
      "dataOwner": [
        "Application owners",
        "Identity & Access Management",
        "Cloud Platform / FinOps",
        "AppSec"
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
      "tagline": "Auditing \"IAM including SoD\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the iam including sod control (from ServiceNow CMDB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"IAM including SoD\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the iam including sod control (from ServiceNow CMDB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"IAM including SoD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_iam_including_sod_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ServiceNow CMDB and Okta / Entra SSO (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull ServiceNow CMDB · Okta / Entra SSO",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the iam including sod control (from ServiceNow CMDB).",
        "The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"IAM including SoD\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the iam including sod control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP Application Security Verification Standard (ASVS)",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "NIST SP 800-53 — SA/CM families",
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
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"IAM including SoD\" (in-scope inventory for the iam including sod control (from servicenow cmdb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IAM including SoD\" control for Application Review at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"IAM including SoD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the iam including sod control (from ServiceNow CMDB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ServiceNow CMDB APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ServiceNow CMDB gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ServiceNow CMDB; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"IAM including SoD\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"IAM including SoD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — In-scope inventory for the iam including sod control (from ServiceNow CMDB))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the iam including sod control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aar-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IAM including SoD\" matter to the broader Application Review posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aar-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IAM including SoD\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the iam including sod control (from ServiceNow CMDB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aar-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"IAM including SoD\"?",
          "options": [
            "ServiceNow CMDB (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ServiceNow CMDB) via read-only access."
        },
        {
          "id": "aar-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IAM including SoD\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Application owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aar-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IAM including SoD\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "aar-08-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "aar-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IAM including SoD\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the iam including sod control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the iam including sod control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aar-08-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "aar-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IAM including SoD\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Application interfaces\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application interfaces\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (ServiceNow CMDB; Okta / Entra SSO; AWS / Azure cloud plane) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the application interfaces control (from ServiceNow CMDB)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ServiceNow CMDB",
        "Okta / Entra SSO",
        "AWS / Azure cloud plane",
        "App configuration stores"
      ],
      "dataOwner": [
        "Application owners",
        "Identity & Access Management",
        "Cloud Platform / FinOps",
        "AppSec"
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
      "tagline": "Auditing \"Application interfaces\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the application interfaces control (from ServiceNow CMDB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Application interfaces\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the application interfaces control (from ServiceNow CMDB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application interfaces\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_application_interfaces_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ServiceNow CMDB and Okta / Entra SSO (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull ServiceNow CMDB · Okta / Entra SSO",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the application interfaces control (from ServiceNow CMDB).",
        "The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application interfaces\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the application interfaces control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP Application Security Verification Standard (ASVS)",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "NIST SP 800-53 — SA/CM families",
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
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Application interfaces\" (in-scope inventory for the application interfaces control (from servicenow cmdb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Application interfaces\" control for Application Review at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application interfaces\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the application interfaces control (from ServiceNow CMDB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ServiceNow CMDB APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ServiceNow CMDB gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ServiceNow CMDB; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Application interfaces\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application interfaces\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — In-scope inventory for the application interfaces control (from ServiceNow CMDB))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the application interfaces control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aar-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Application interfaces\" matter to the broader Application Review posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aar-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Application interfaces\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the application interfaces control (from ServiceNow CMDB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aar-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Application interfaces\"?",
          "options": [
            "ServiceNow CMDB (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ServiceNow CMDB) via read-only access."
        },
        {
          "id": "aar-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Application interfaces\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Application owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aar-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Application interfaces\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "aar-09-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "aar-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Application interfaces\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the application interfaces control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the application interfaces control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aar-09-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "aar-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Application interfaces\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 6,
    "valueScore": 6,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Reports and data extracts\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Reports and data extracts\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (ServiceNow CMDB; Okta / Entra SSO; AWS / Azure cloud plane) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the reports and data extracts control (from ServiceNow CMDB)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ServiceNow CMDB",
        "Okta / Entra SSO",
        "AWS / Azure cloud plane",
        "App configuration stores"
      ],
      "dataOwner": [
        "Application owners",
        "Identity & Access Management",
        "Cloud Platform / FinOps",
        "AppSec"
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
      "tagline": "Auditing \"Reports and data extracts\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the reports and data extracts control (from ServiceNow CMDB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Reports and data extracts\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the reports and data extracts control (from ServiceNow CMDB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Reports and data extracts\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_reports_and_data_extracts_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ServiceNow CMDB and Okta / Entra SSO (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull ServiceNow CMDB · Okta / Entra SSO",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the reports and data extracts control (from ServiceNow CMDB).",
        "The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Reports and data extracts\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the reports and data extracts control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP Application Security Verification Standard (ASVS)",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "NIST SP 800-53 — SA/CM families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Reports and data extracts\" (in-scope inventory for the reports and data extracts control (from servicenow cmdb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Reports and data extracts\" control for Application Review at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Reports and data extracts\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the reports and data extracts control (from ServiceNow CMDB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ServiceNow CMDB APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ServiceNow CMDB gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ServiceNow CMDB; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Reports and data extracts\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Reports and data extracts\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — In-scope inventory for the reports and data extracts control (from ServiceNow CMDB))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the reports and data extracts control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aar-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Reports and data extracts\" matter to the broader Application Review posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aar-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Reports and data extracts\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the reports and data extracts control (from ServiceNow CMDB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aar-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Reports and data extracts\"?",
          "options": [
            "ServiceNow CMDB (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ServiceNow CMDB) via read-only access."
        },
        {
          "id": "aar-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Reports and data extracts\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Application owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aar-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Reports and data extracts\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "aar-10-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "aar-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Reports and data extracts\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the reports and data extracts control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the reports and data extracts control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aar-10-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "aar-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Reports and data extracts\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "application-review",
    "id": "aar-11",
    "order": 11,
    "title": "Cryptographic library and dependency mgmt (+PQC)",
    "subtitle": "Agentic technical & privacy audit of the cryptographic library and dependency mgmt (+pqc) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cryptographic library and dependency mgmt (+PQC)\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Cryptographic library and dependency mgmt (+PQC)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (ServiceNow CMDB; Okta / Entra SSO; AWS / Azure cloud plane) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cryptographic library and dependency mgmt (+pqc) control (from ServiceNow CMDB)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ServiceNow CMDB",
        "Okta / Entra SSO",
        "AWS / Azure cloud plane",
        "App configuration stores"
      ],
      "dataOwner": [
        "Application owners",
        "Identity & Access Management",
        "Cloud Platform / FinOps",
        "AppSec"
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
      "name": "Cryptographic library and dependency mgmt (+PQC)",
      "location": "Application Review",
      "era": "Present Day",
      "emoji": "🔎"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cryptographic library and dependency mgmt (+PQC)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the cryptographic library and dependency mgmt (+pqc) control (from ServiceNow CMDB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Cryptographic library and dependency mgmt (+PQC)\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the cryptographic library and dependency mgmt (+pqc) control (from ServiceNow CMDB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Cryptographic library and dependency mgmt (+PQC)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_cryptographic_library_and_dependency_mgmt_pqc_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ServiceNow CMDB and Okta / Entra SSO (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_cryptographic_library_and_dependency_mgmt_pqc_mcp.py` to expose it to your agent — or `python 11_cryptographic_library_and_dependency_mgmt_pqc_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
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
            "sub": "pull ServiceNow CMDB · Okta / Entra SSO",
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
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cryptographic library and dependency mgmt (+PQC)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the cryptographic library and dependency mgmt (+pqc) control (from ServiceNow CMDB).",
        "The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Cryptographic library and dependency mgmt (+PQC)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the cryptographic library and dependency mgmt (+pqc) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP Application Security Verification Standard (ASVS)",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "NIST SP 800-53 — SA/CM families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_cryptographic_library_and_dependency_mgmt_pqc_mcp.py",
          "url": "/audit-code/application-review/11_cryptographic_library_and_dependency_mgmt_pqc_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Cryptographic library and dependency mgmt (+PQC)\" (in-scope inventory for the cryptographic library and dependency mgmt (+pqc) control (from servicenow cmdb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cryptographic library and dependency mgmt (+PQC)\" control for Application Review at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Cryptographic library and dependency mgmt (+PQC)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the cryptographic library and dependency mgmt (+pqc) control (from ServiceNow CMDB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ServiceNow CMDB APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ServiceNow CMDB gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ServiceNow CMDB; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Cryptographic library and dependency mgmt (+PQC)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Cryptographic library and dependency mgmt (+PQC)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — In-scope inventory for the cryptographic library and dependency mgmt (+pqc) control (from ServiceNow CMDB))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cryptographic library and dependency mgmt (+PQC)\",\n  \"domain\": \"Application Review\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aar_",
        "/evidence/application-review_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Application owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cryptographic library and dependency mgmt (+PQC)\" control must cover\n# fragment: cryptographic_library_dependency_",
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
          "text": "What is the primary audit objective for the \"Cryptographic library and dependency mgmt (+PQC)\" sub-process of Application Review?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the cryptographic library and dependency mgmt (+pqc) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aar-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cryptographic library and dependency mgmt (+PQC)\" matter to the broader Application Review posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aar-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cryptographic library and dependency mgmt (+PQC)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the cryptographic library and dependency mgmt (+pqc) control (from ServiceNow CMDB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aar-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Cryptographic library and dependency mgmt (+PQC)\"?",
          "options": [
            "ServiceNow CMDB (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ServiceNow CMDB) via read-only access."
        },
        {
          "id": "aar-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cryptographic library and dependency mgmt (+PQC)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Application owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aar-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cryptographic library and dependency mgmt (+PQC)\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "aar-11-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "aar-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cryptographic library and dependency mgmt (+PQC)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the cryptographic library and dependency mgmt (+pqc) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the cryptographic library and dependency mgmt (+pqc) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aar-11-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "aar-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cryptographic library and dependency mgmt (+PQC)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Application threat modeling\" control for Application Review is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application threat modeling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Application Review systems of record (ServiceNow CMDB; Okta / Entra SSO; AWS / Azure cloud plane) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the application threat modeling control (from ServiceNow CMDB)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ServiceNow CMDB",
        "Okta / Entra SSO",
        "AWS / Azure cloud plane",
        "App configuration stores"
      ],
      "dataOwner": [
        "Application owners",
        "Identity & Access Management",
        "Cloud Platform / FinOps",
        "AppSec"
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
      "tagline": "Auditing \"Application threat modeling\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the application threat modeling control (from ServiceNow CMDB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Application Review control.",
      "year": 2025,
      "overview": [
        "The \"Application threat modeling\" sub-process is one of the controls an auditor must verify for Application Review. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the application threat modeling control (from ServiceNow CMDB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application threat modeling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_application_threat_modeling_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ServiceNow CMDB and Okta / Entra SSO (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull ServiceNow CMDB · Okta / Entra SSO",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the application threat modeling control (from ServiceNow CMDB).",
        "The test: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application threat modeling\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ServiceNow CMDB, Okta / Entra SSO, AWS / Azure cloud plane) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the application threat modeling control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "OWASP Application Security Verification Standard (ASVS)",
          "url": "https://owasp.org/www-project-application-security-verification-standard/"
        },
        {
          "title": "NIST SP 800-53 — SA/CM families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Application Review evidence for \"Application threat modeling\" (in-scope inventory for the application threat modeling control (from servicenow cmdb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Application threat modeling\" control for Application Review at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application threat modeling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the application threat modeling control (from ServiceNow CMDB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ServiceNow CMDB APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ServiceNow CMDB gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ServiceNow CMDB; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Application Review: \"Application threat modeling\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Application Review policy/standard and flag every item where the \"Application threat modeling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- application-review_inventory.json   (in-scope items — In-scope inventory for the application threat modeling control (from ServiceNow CMDB))\n- application-review_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the application threat modeling control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aar-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Application threat modeling\" matter to the broader Application Review posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Application Review controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aar-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Application threat modeling\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the application threat modeling control (from ServiceNow CMDB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aar-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Application threat modeling\"?",
          "options": [
            "ServiceNow CMDB (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ServiceNow CMDB) via read-only access."
        },
        {
          "id": "aar-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Application threat modeling\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Application owners (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application owners owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aar-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Application threat modeling\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "aar-12-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "aar-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Application threat modeling\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the application threat modeling control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the application threat modeling control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aar-12-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "aar-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Application threat modeling\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  }
];
