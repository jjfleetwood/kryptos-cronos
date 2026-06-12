import type { EpochConfig, StageConfig } from "../types";

export const dataPrivacyEpoch: EpochConfig = {
  "id": "data-privacy",
  "name": "Data Protection & Privacy",
  "subtitle": "Agentic technical & privacy audit — Data Protection & Privacy",
  "description": "Audit Data Protection & Privacy end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🔏",
  "color": "Teal",
  "unlocked": true
};

export const dataPrivacyStages: StageConfig[] = [
  {
    "epochId": "data-privacy",
    "id": "dpp-01",
    "order": 1,
    "title": "Data classification and handling",
    "subtitle": "Agentic technical & privacy audit of the data classification and handling control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data classification and handling\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data classification and handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DLP (Purview / Symantec); Data classification + catalog; KMS / encryption services) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data classification and handling control (from DLP (Purview / Symantec))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "DLP (Purview / Symantec)",
        "Data classification + catalog",
        "KMS / encryption services",
        "Backup + retention platform"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy",
        "Data owners / stewards",
        "Security engineering",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-01-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Data classification and handling",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data classification and handling\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data classification and handling control (from DLP (Purview / Symantec))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Data classification and handling\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data classification and handling control (from DLP (Purview / Symantec)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data classification and handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_data_classification_and_handling_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DLP (Purview / Symantec) and Data classification + catalog (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_data_classification_and_handling_mcp.py` to expose it to your agent — or `python 01_data_classification_and_handling_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DLP (Purview / Symantec) · Data classification + catalog",
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
          "year": 2018,
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data classification and handling\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data classification and handling control (from DLP (Purview / Symantec)).",
        "The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data classification and handling\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data classification and handling control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Privacy Framework",
          "url": "https://www.nist.gov/privacy-framework"
        },
        {
          "title": "GDPR (EU 2016/679)",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 — Privacy Information Management",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_data_classification_and_handling_mcp.py",
          "url": "/audit-code/data-privacy/01_data_classification_and_handling_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Data classification and handling\" (in-scope inventory for the data classification and handling control (from dlp (purview / symantec))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data classification and handling\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data classification and handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data classification and handling control (from DLP (Purview / Symantec)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DLP (Purview / Symantec) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DLP (Purview / Symantec) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DLP (Purview / Symantec); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Data classification and handling\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data classification and handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — In-scope inventory for the data classification and handling control (from DLP (Purview / Symantec)))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data classification and handling\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data classification and handling\" control must cover\n# fragment: data_classification_handling_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "data_classification_handling_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data classification and handling\" sub-process of Data Protection & Privacy?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data classification and handling control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dpp-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data classification and handling\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dpp-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data classification and handling\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data classification and handling control (from DLP (Purview / Symantec)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dpp-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data classification and handling\"?",
          "options": [
            "DLP (Purview / Symantec) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., DLP (Purview / Symantec)) via read-only access."
        },
        {
          "id": "dpp-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data classification and handling\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data Protection Officer / Privacy (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dpp-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data classification and handling\", which part stays with the human auditor?",
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
          "id": "dpp-01-q7",
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
          "id": "dpp-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data classification and handling\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data classification and handling control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data classification and handling control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dpp-01-q9",
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
          "id": "dpp-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data classification and handling\" also serve privacy and regulatory goals?",
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
    "epochId": "data-privacy",
    "id": "dpp-02",
    "order": 2,
    "title": "Encryption in transit/at rest/in use",
    "subtitle": "Agentic technical & privacy audit of the encryption in transit/at rest/in use control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Encryption in transit/at rest/in use\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Encryption in transit/at rest/in use\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DLP (Purview / Symantec); Data classification + catalog; KMS / encryption services) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the encryption in transit/at rest/in use control (from DLP (Purview / Symantec))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "DLP (Purview / Symantec)",
        "Data classification + catalog",
        "KMS / encryption services",
        "Backup + retention platform"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy",
        "Data owners / stewards",
        "Security engineering",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-02-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Encryption in transit/at rest/in use",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Encryption in transit/at rest/in use\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the encryption in transit/at rest/in use control (from DLP (Purview / Symantec))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Encryption in transit/at rest/in use\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the encryption in transit/at rest/in use control (from DLP (Purview / Symantec)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Encryption in transit/at rest/in use\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_encryption_in_transit_at_rest_in_use_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DLP (Purview / Symantec) and Data classification + catalog (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_encryption_in_transit_at_rest_in_use_mcp.py` to expose it to your agent — or `python 02_encryption_in_transit_at_rest_in_use_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DLP (Purview / Symantec) · Data classification + catalog",
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
          "year": 2018,
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Encryption in transit/at rest/in use\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the encryption in transit/at rest/in use control (from DLP (Purview / Symantec)).",
        "The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Encryption in transit/at rest/in use\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the encryption in transit/at rest/in use control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Privacy Framework",
          "url": "https://www.nist.gov/privacy-framework"
        },
        {
          "title": "GDPR (EU 2016/679)",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 — Privacy Information Management",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_encryption_in_transit_at_rest_in_use_mcp.py",
          "url": "/audit-code/data-privacy/02_encryption_in_transit_at_rest_in_use_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Encryption in transit/at rest/in use\" (in-scope inventory for the encryption in transit/at rest/in use control (from dlp (purview / symantec))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Encryption in transit/at rest/in use\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Encryption in transit/at rest/in use\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the encryption in transit/at rest/in use control (from DLP (Purview / Symantec)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DLP (Purview / Symantec) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DLP (Purview / Symantec) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DLP (Purview / Symantec); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Encryption in transit/at rest/in use\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Encryption in transit/at rest/in use\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — In-scope inventory for the encryption in transit/at rest/in use control (from DLP (Purview / Symantec)))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Encryption in transit/at rest/in use\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Encryption in transit/at rest/in use\" control must cover\n# fragment: encryption_transitat_restin_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "encryption_transitat_restin_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Encryption in transit/at rest/in use\" sub-process of Data Protection & Privacy?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the encryption in transit/at rest/in use control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dpp-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Encryption in transit/at rest/in use\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dpp-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Encryption in transit/at rest/in use\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the encryption in transit/at rest/in use control (from DLP (Purview / Symantec)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dpp-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Encryption in transit/at rest/in use\"?",
          "options": [
            "DLP (Purview / Symantec) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., DLP (Purview / Symantec)) via read-only access."
        },
        {
          "id": "dpp-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Encryption in transit/at rest/in use\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data Protection Officer / Privacy (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dpp-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Encryption in transit/at rest/in use\", which part stays with the human auditor?",
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
          "id": "dpp-02-q7",
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
          "id": "dpp-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Encryption in transit/at rest/in use\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the encryption in transit/at rest/in use control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the encryption in transit/at rest/in use control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dpp-02-q9",
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
          "id": "dpp-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Encryption in transit/at rest/in use\" also serve privacy and regulatory goals?",
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
    "epochId": "data-privacy",
    "id": "dpp-03",
    "order": 3,
    "title": "Data retention and disposal",
    "subtitle": "Agentic technical & privacy audit of the data retention and disposal control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data retention and disposal\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data retention and disposal\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DLP (Purview / Symantec); Data classification + catalog; KMS / encryption services) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data retention and disposal control (from DLP (Purview / Symantec))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "DLP (Purview / Symantec)",
        "Data classification + catalog",
        "KMS / encryption services",
        "Backup + retention platform"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy",
        "Data owners / stewards",
        "Security engineering",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-03-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Data retention and disposal",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data retention and disposal\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data retention and disposal control (from DLP (Purview / Symantec))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Data retention and disposal\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data retention and disposal control (from DLP (Purview / Symantec)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data retention and disposal\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_data_retention_and_disposal_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DLP (Purview / Symantec) and Data classification + catalog (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_data_retention_and_disposal_mcp.py` to expose it to your agent — or `python 03_data_retention_and_disposal_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DLP (Purview / Symantec) · Data classification + catalog",
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
          "year": 2018,
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data retention and disposal\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data retention and disposal control (from DLP (Purview / Symantec)).",
        "The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data retention and disposal\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data retention and disposal control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Privacy Framework",
          "url": "https://www.nist.gov/privacy-framework"
        },
        {
          "title": "GDPR (EU 2016/679)",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 — Privacy Information Management",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_data_retention_and_disposal_mcp.py",
          "url": "/audit-code/data-privacy/03_data_retention_and_disposal_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Data retention and disposal\" (in-scope inventory for the data retention and disposal control (from dlp (purview / symantec))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data retention and disposal\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data retention and disposal\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data retention and disposal control (from DLP (Purview / Symantec)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DLP (Purview / Symantec) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DLP (Purview / Symantec) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DLP (Purview / Symantec); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Data retention and disposal\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data retention and disposal\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — In-scope inventory for the data retention and disposal control (from DLP (Purview / Symantec)))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data retention and disposal\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data retention and disposal\" control must cover\n# fragment: data_retention_disposal_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "data_retention_disposal_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data retention and disposal\" sub-process of Data Protection & Privacy?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data retention and disposal control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dpp-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data retention and disposal\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dpp-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data retention and disposal\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data retention and disposal control (from DLP (Purview / Symantec)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dpp-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data retention and disposal\"?",
          "options": [
            "DLP (Purview / Symantec) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., DLP (Purview / Symantec)) via read-only access."
        },
        {
          "id": "dpp-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data retention and disposal\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data Protection Officer / Privacy (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dpp-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data retention and disposal\", which part stays with the human auditor?",
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
          "id": "dpp-03-q7",
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
          "id": "dpp-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data retention and disposal\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data retention and disposal control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data retention and disposal control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dpp-03-q9",
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
          "id": "dpp-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data retention and disposal\" also serve privacy and regulatory goals?",
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
    "epochId": "data-privacy",
    "id": "dpp-04",
    "order": 4,
    "title": "Backup governance and restore testing",
    "subtitle": "Agentic technical & privacy audit of the backup governance and restore testing control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Backup governance and restore testing\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Backup governance and restore testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DLP (Purview / Symantec); Data classification + catalog; KMS / encryption services) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the backup governance and restore testing control (from DLP (Purview / Symantec))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "DLP (Purview / Symantec)",
        "Data classification + catalog",
        "KMS / encryption services",
        "Backup + retention platform"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy",
        "Data owners / stewards",
        "Security engineering",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-04-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Backup governance and restore testing",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Backup governance and restore testing\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the backup governance and restore testing control (from DLP (Purview / Symantec))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Backup governance and restore testing\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the backup governance and restore testing control (from DLP (Purview / Symantec)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Backup governance and restore testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_backup_governance_and_restore_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DLP (Purview / Symantec) and Data classification + catalog (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_backup_governance_and_restore_testing_mcp.py` to expose it to your agent — or `python 04_backup_governance_and_restore_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DLP (Purview / Symantec) · Data classification + catalog",
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
          "year": 2018,
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Backup governance and restore testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the backup governance and restore testing control (from DLP (Purview / Symantec)).",
        "The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Backup governance and restore testing\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the backup governance and restore testing control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Privacy Framework",
          "url": "https://www.nist.gov/privacy-framework"
        },
        {
          "title": "GDPR (EU 2016/679)",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 — Privacy Information Management",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_backup_governance_and_restore_testing_mcp.py",
          "url": "/audit-code/data-privacy/04_backup_governance_and_restore_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Backup governance and restore testing\" (in-scope inventory for the backup governance and restore testing control (from dlp (purview / symantec))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Backup governance and restore testing\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Backup governance and restore testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the backup governance and restore testing control (from DLP (Purview / Symantec)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DLP (Purview / Symantec) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DLP (Purview / Symantec) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DLP (Purview / Symantec); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Backup governance and restore testing\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Backup governance and restore testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — In-scope inventory for the backup governance and restore testing control (from DLP (Purview / Symantec)))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Backup governance and restore testing\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Backup governance and restore testing\" control must cover\n# fragment: backup_governance_restore_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "backup_governance_restore_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Backup governance and restore testing\" sub-process of Data Protection & Privacy?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the backup governance and restore testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dpp-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Backup governance and restore testing\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dpp-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Backup governance and restore testing\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the backup governance and restore testing control (from DLP (Purview / Symantec)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dpp-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Backup governance and restore testing\"?",
          "options": [
            "DLP (Purview / Symantec) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., DLP (Purview / Symantec)) via read-only access."
        },
        {
          "id": "dpp-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Backup governance and restore testing\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data Protection Officer / Privacy (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dpp-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Backup governance and restore testing\", which part stays with the human auditor?",
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
          "id": "dpp-04-q7",
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
          "id": "dpp-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Backup governance and restore testing\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the backup governance and restore testing control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the backup governance and restore testing control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dpp-04-q9",
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
          "id": "dpp-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Backup governance and restore testing\" also serve privacy and regulatory goals?",
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
    "epochId": "data-privacy",
    "id": "dpp-05",
    "order": 5,
    "title": "Data loss prevention",
    "subtitle": "Agentic technical & privacy audit of the data loss prevention control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data loss prevention\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data loss prevention\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DLP (Purview / Symantec); Data classification + catalog; KMS / encryption services) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data loss prevention control (from DLP (Purview / Symantec))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "DLP (Purview / Symantec)",
        "Data classification + catalog",
        "KMS / encryption services",
        "Backup + retention platform"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy",
        "Data owners / stewards",
        "Security engineering",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-05-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Data loss prevention",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data loss prevention\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data loss prevention control (from DLP (Purview / Symantec))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Data loss prevention\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data loss prevention control (from DLP (Purview / Symantec)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data loss prevention\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_data_loss_prevention_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DLP (Purview / Symantec) and Data classification + catalog (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_data_loss_prevention_mcp.py` to expose it to your agent — or `python 05_data_loss_prevention_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DLP (Purview / Symantec) · Data classification + catalog",
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
          "year": 2018,
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data loss prevention\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data loss prevention control (from DLP (Purview / Symantec)).",
        "The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data loss prevention\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data loss prevention control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Privacy Framework",
          "url": "https://www.nist.gov/privacy-framework"
        },
        {
          "title": "GDPR (EU 2016/679)",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 — Privacy Information Management",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_data_loss_prevention_mcp.py",
          "url": "/audit-code/data-privacy/05_data_loss_prevention_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Data loss prevention\" (in-scope inventory for the data loss prevention control (from dlp (purview / symantec))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data loss prevention\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data loss prevention\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data loss prevention control (from DLP (Purview / Symantec)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DLP (Purview / Symantec) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DLP (Purview / Symantec) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DLP (Purview / Symantec); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Data loss prevention\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data loss prevention\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — In-scope inventory for the data loss prevention control (from DLP (Purview / Symantec)))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data loss prevention\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data loss prevention\" control must cover\n# fragment: data_loss_prevention_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "data_loss_prevention_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data loss prevention\" sub-process of Data Protection & Privacy?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data loss prevention control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dpp-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data loss prevention\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dpp-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data loss prevention\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data loss prevention control (from DLP (Purview / Symantec)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dpp-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data loss prevention\"?",
          "options": [
            "DLP (Purview / Symantec) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., DLP (Purview / Symantec)) via read-only access."
        },
        {
          "id": "dpp-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data loss prevention\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data Protection Officer / Privacy (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dpp-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data loss prevention\", which part stays with the human auditor?",
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
          "id": "dpp-05-q7",
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
          "id": "dpp-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data loss prevention\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data loss prevention control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data loss prevention control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dpp-05-q9",
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
          "id": "dpp-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data loss prevention\" also serve privacy and regulatory goals?",
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
    "epochId": "data-privacy",
    "id": "dpp-06",
    "order": 6,
    "title": "Alert handling",
    "subtitle": "Agentic technical & privacy audit of the alert handling control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Alert handling\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Alert handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DLP (Purview / Symantec); Data classification + catalog; KMS / encryption services) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the alert handling control (from DLP (Purview / Symantec))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "DLP (Purview / Symantec)",
        "Data classification + catalog",
        "KMS / encryption services",
        "Backup + retention platform"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy",
        "Data owners / stewards",
        "Security engineering",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-06-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Alert handling",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Alert handling\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the alert handling control (from DLP (Purview / Symantec))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Alert handling\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the alert handling control (from DLP (Purview / Symantec)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Alert handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_alert_handling_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DLP (Purview / Symantec) and Data classification + catalog (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_alert_handling_mcp.py` to expose it to your agent — or `python 06_alert_handling_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DLP (Purview / Symantec) · Data classification + catalog",
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
          "year": 2018,
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Alert handling\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the alert handling control (from DLP (Purview / Symantec)).",
        "The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Alert handling\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the alert handling control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Privacy Framework",
          "url": "https://www.nist.gov/privacy-framework"
        },
        {
          "title": "GDPR (EU 2016/679)",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 — Privacy Information Management",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_alert_handling_mcp.py",
          "url": "/audit-code/data-privacy/06_alert_handling_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Alert handling\" (in-scope inventory for the alert handling control (from dlp (purview / symantec))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Alert handling\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Alert handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the alert handling control (from DLP (Purview / Symantec)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DLP (Purview / Symantec) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DLP (Purview / Symantec) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DLP (Purview / Symantec); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Alert handling\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Alert handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — In-scope inventory for the alert handling control (from DLP (Purview / Symantec)))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Alert handling\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Alert handling\" control must cover\n# fragment: alert_handling_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "alert_handling_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Alert handling\" sub-process of Data Protection & Privacy?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the alert handling control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dpp-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Alert handling\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dpp-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Alert handling\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the alert handling control (from DLP (Purview / Symantec)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dpp-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Alert handling\"?",
          "options": [
            "DLP (Purview / Symantec) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., DLP (Purview / Symantec)) via read-only access."
        },
        {
          "id": "dpp-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Alert handling\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data Protection Officer / Privacy (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dpp-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Alert handling\", which part stays with the human auditor?",
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
          "id": "dpp-06-q7",
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
          "id": "dpp-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Alert handling\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the alert handling control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the alert handling control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dpp-06-q9",
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
          "id": "dpp-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Alert handling\" also serve privacy and regulatory goals?",
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
    "epochId": "data-privacy",
    "id": "dpp-07",
    "order": 7,
    "title": "Privacy compliance and sovereignty",
    "subtitle": "Agentic technical & privacy audit of the privacy compliance and sovereignty control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Privacy compliance and sovereignty\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Privacy compliance and sovereignty\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DLP (Purview / Symantec); Data classification + catalog; KMS / encryption services) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the privacy compliance and sovereignty control (from DLP (Purview / Symantec))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "DLP (Purview / Symantec)",
        "Data classification + catalog",
        "KMS / encryption services",
        "Backup + retention platform"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy",
        "Data owners / stewards",
        "Security engineering",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-07-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Privacy compliance and sovereignty",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Privacy compliance and sovereignty\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the privacy compliance and sovereignty control (from DLP (Purview / Symantec))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Privacy compliance and sovereignty\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the privacy compliance and sovereignty control (from DLP (Purview / Symantec)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Privacy compliance and sovereignty\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_privacy_compliance_and_sovereignty_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DLP (Purview / Symantec) and Data classification + catalog (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_privacy_compliance_and_sovereignty_mcp.py` to expose it to your agent — or `python 07_privacy_compliance_and_sovereignty_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DLP (Purview / Symantec) · Data classification + catalog",
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
          "year": 2018,
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Privacy compliance and sovereignty\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the privacy compliance and sovereignty control (from DLP (Purview / Symantec)).",
        "The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Privacy compliance and sovereignty\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the privacy compliance and sovereignty control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Privacy Framework",
          "url": "https://www.nist.gov/privacy-framework"
        },
        {
          "title": "GDPR (EU 2016/679)",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 — Privacy Information Management",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_privacy_compliance_and_sovereignty_mcp.py",
          "url": "/audit-code/data-privacy/07_privacy_compliance_and_sovereignty_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Privacy compliance and sovereignty\" (in-scope inventory for the privacy compliance and sovereignty control (from dlp (purview / symantec))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Privacy compliance and sovereignty\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Privacy compliance and sovereignty\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the privacy compliance and sovereignty control (from DLP (Purview / Symantec)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DLP (Purview / Symantec) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DLP (Purview / Symantec) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DLP (Purview / Symantec); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Privacy compliance and sovereignty\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Privacy compliance and sovereignty\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — In-scope inventory for the privacy compliance and sovereignty control (from DLP (Purview / Symantec)))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Privacy compliance and sovereignty\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Privacy compliance and sovereignty\" control must cover\n# fragment: privacy_compliance_sovereignty_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "privacy_compliance_sovereignty_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Privacy compliance and sovereignty\" sub-process of Data Protection & Privacy?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the privacy compliance and sovereignty control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dpp-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Privacy compliance and sovereignty\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dpp-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Privacy compliance and sovereignty\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the privacy compliance and sovereignty control (from DLP (Purview / Symantec)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dpp-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Privacy compliance and sovereignty\"?",
          "options": [
            "DLP (Purview / Symantec) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., DLP (Purview / Symantec)) via read-only access."
        },
        {
          "id": "dpp-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Privacy compliance and sovereignty\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data Protection Officer / Privacy (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dpp-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Privacy compliance and sovereignty\", which part stays with the human auditor?",
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
          "id": "dpp-07-q7",
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
          "id": "dpp-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Privacy compliance and sovereignty\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the privacy compliance and sovereignty control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the privacy compliance and sovereignty control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dpp-07-q9",
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
          "id": "dpp-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Privacy compliance and sovereignty\" also serve privacy and regulatory goals?",
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
    "epochId": "data-privacy",
    "id": "dpp-08",
    "order": 8,
    "title": "Data inventorying, lineage, provenance",
    "subtitle": "Agentic technical & privacy audit of the data inventorying, lineage, provenance control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data inventorying, lineage, provenance\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data inventorying, lineage, provenance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DLP (Purview / Symantec); Data classification + catalog; KMS / encryption services) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data inventorying, lineage, provenance control (from DLP (Purview / Symantec))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "DLP (Purview / Symantec)",
        "Data classification + catalog",
        "KMS / encryption services",
        "Backup + retention platform"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy",
        "Data owners / stewards",
        "Security engineering",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-08-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Data inventorying, lineage, provenance",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data inventorying, lineage, provenance\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data inventorying, lineage, provenance control (from DLP (Purview / Symantec))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Data inventorying, lineage, provenance\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data inventorying, lineage, provenance control (from DLP (Purview / Symantec)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data inventorying, lineage, provenance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_data_inventorying_lineage_provenance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DLP (Purview / Symantec) and Data classification + catalog (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_data_inventorying_lineage_provenance_mcp.py` to expose it to your agent — or `python 08_data_inventorying_lineage_provenance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DLP (Purview / Symantec) · Data classification + catalog",
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
          "year": 2018,
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data inventorying, lineage, provenance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data inventorying, lineage, provenance control (from DLP (Purview / Symantec)).",
        "The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data inventorying, lineage, provenance\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data inventorying, lineage, provenance control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Privacy Framework",
          "url": "https://www.nist.gov/privacy-framework"
        },
        {
          "title": "GDPR (EU 2016/679)",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 — Privacy Information Management",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_data_inventorying_lineage_provenance_mcp.py",
          "url": "/audit-code/data-privacy/08_data_inventorying_lineage_provenance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Data inventorying, lineage, provenance\" (in-scope inventory for the data inventorying, lineage, provenance control (from dlp (purview / symantec))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data inventorying, lineage, provenance\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data inventorying, lineage, provenance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data inventorying, lineage, provenance control (from DLP (Purview / Symantec)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DLP (Purview / Symantec) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DLP (Purview / Symantec) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DLP (Purview / Symantec); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Data inventorying, lineage, provenance\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data inventorying, lineage, provenance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — In-scope inventory for the data inventorying, lineage, provenance control (from DLP (Purview / Symantec)))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data inventorying, lineage, provenance\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data inventorying, lineage, provenance\" control must cover\n# fragment: data_inventorying_lineage_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "data_inventorying_lineage_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data inventorying, lineage, provenance\" sub-process of Data Protection & Privacy?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data inventorying, lineage, provenance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dpp-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data inventorying, lineage, provenance\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dpp-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data inventorying, lineage, provenance\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data inventorying, lineage, provenance control (from DLP (Purview / Symantec)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dpp-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data inventorying, lineage, provenance\"?",
          "options": [
            "DLP (Purview / Symantec) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., DLP (Purview / Symantec)) via read-only access."
        },
        {
          "id": "dpp-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data inventorying, lineage, provenance\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data Protection Officer / Privacy (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dpp-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data inventorying, lineage, provenance\", which part stays with the human auditor?",
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
          "id": "dpp-08-q7",
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
          "id": "dpp-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data inventorying, lineage, provenance\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data inventorying, lineage, provenance control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data inventorying, lineage, provenance control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dpp-08-q9",
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
          "id": "dpp-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data inventorying, lineage, provenance\" also serve privacy and regulatory goals?",
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
    "epochId": "data-privacy",
    "id": "dpp-09",
    "order": 9,
    "title": "Data monitoring",
    "subtitle": "Agentic technical & privacy audit of the data monitoring control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data monitoring\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DLP (Purview / Symantec); Data classification + catalog; KMS / encryption services) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data monitoring control (from DLP (Purview / Symantec))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "DLP (Purview / Symantec)",
        "Data classification + catalog",
        "KMS / encryption services",
        "Backup + retention platform"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy",
        "Data owners / stewards",
        "Security engineering",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-09-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Data monitoring",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data monitoring\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data monitoring control (from DLP (Purview / Symantec))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Data monitoring\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data monitoring control (from DLP (Purview / Symantec)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_data_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DLP (Purview / Symantec) and Data classification + catalog (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_data_monitoring_mcp.py` to expose it to your agent — or `python 09_data_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DLP (Purview / Symantec) · Data classification + catalog",
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
          "year": 2018,
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data monitoring control (from DLP (Purview / Symantec)).",
        "The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data monitoring\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Privacy Framework",
          "url": "https://www.nist.gov/privacy-framework"
        },
        {
          "title": "GDPR (EU 2016/679)",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 — Privacy Information Management",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_data_monitoring_mcp.py",
          "url": "/audit-code/data-privacy/09_data_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Data monitoring\" (in-scope inventory for the data monitoring control (from dlp (purview / symantec))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data monitoring\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data monitoring control (from DLP (Purview / Symantec)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DLP (Purview / Symantec) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DLP (Purview / Symantec) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DLP (Purview / Symantec); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Data monitoring\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Data monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — In-scope inventory for the data monitoring control (from DLP (Purview / Symantec)))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data monitoring\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data monitoring\" control must cover\n# fragment: data_monitoring_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "data_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data monitoring\" sub-process of Data Protection & Privacy?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dpp-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data monitoring\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dpp-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data monitoring\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data monitoring control (from DLP (Purview / Symantec)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dpp-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data monitoring\"?",
          "options": [
            "DLP (Purview / Symantec) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., DLP (Purview / Symantec)) via read-only access."
        },
        {
          "id": "dpp-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data monitoring\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data Protection Officer / Privacy (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dpp-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data monitoring\", which part stays with the human auditor?",
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
          "id": "dpp-09-q7",
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
          "id": "dpp-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data monitoring\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data monitoring control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dpp-09-q9",
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
          "id": "dpp-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data monitoring\" also serve privacy and regulatory goals?",
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
    "epochId": "data-privacy",
    "id": "dpp-10",
    "order": 10,
    "title": "Quantum-ready data protection",
    "subtitle": "Agentic technical & privacy audit of the quantum-ready data protection control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Quantum-ready data protection\" control for Data Protection & Privacy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Quantum-ready data protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Protection & Privacy systems of record (DLP (Purview / Symantec); Data classification + catalog; KMS / encryption services) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the quantum-ready data protection control (from DLP (Purview / Symantec))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "DLP (Purview / Symantec)",
        "Data classification + catalog",
        "KMS / encryption services",
        "Backup + retention platform"
      ],
      "dataOwner": [
        "Data Protection Officer / Privacy",
        "Data owners / stewards",
        "Security engineering",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Protection & Privacy controls."
      }
    },
    "badge": {
      "id": "dpp-10-badge",
      "name": "Data Protection & Privacy Auditor",
      "emoji": "🔏"
    },
    "wonder": {
      "name": "Quantum-ready data protection",
      "location": "Data Protection & Privacy",
      "era": "Present Day",
      "emoji": "🔏"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Quantum-ready data protection\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the quantum-ready data protection control (from DLP (Purview / Symantec))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Protection & Privacy control.",
      "year": 2025,
      "overview": [
        "The \"Quantum-ready data protection\" sub-process is one of the controls an auditor must verify for Data Protection & Privacy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the quantum-ready data protection control (from DLP (Purview / Symantec)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Quantum-ready data protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_quantum_ready_data_protection_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DLP (Purview / Symantec) and Data classification + catalog (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_quantum_ready_data_protection_mcp.py` to expose it to your agent — or `python 10_quantum_ready_data_protection_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Sensitive data, unencrypted and over-retained",
        "when": "Recurring",
        "where": "Data stores across the estate",
        "impact": "Regulated data held in cleartext, beyond its retention period, or outside its sovereignty boundary turns a breach into a reportable, fineable event.",
        "body": [
          "Privacy findings convert a security incident into a regulatory one: unencrypted PII, data kept long past its purpose, or data in the wrong jurisdiction each trigger statutory obligations.",
          "Auditors verify classification, encryption in transit/at rest/in use, retention/disposal, DLP coverage, and lawful cross-border handling."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Protection & Privacy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DLP (Purview / Symantec) · Data classification + catalog",
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
          "year": 2018,
          "event": "GDPR enforcement begins — retention + minimization become auditable",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Record privacy fines for over-retention and unlawful transfers"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Quantum-ready data protection\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the quantum-ready data protection control (from DLP (Purview / Symantec)).",
        "The test: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Quantum-ready data protection\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (DLP (Purview / Symantec), Data classification + catalog, KMS / encryption services) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the quantum-ready data protection control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST Privacy Framework",
          "url": "https://www.nist.gov/privacy-framework"
        },
        {
          "title": "GDPR (EU 2016/679)",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 — Privacy Information Management",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_quantum_ready_data_protection_mcp.py",
          "url": "/audit-code/data-privacy/10_quantum_ready_data_protection_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Protection & Privacy evidence for \"Quantum-ready data protection\" (in-scope inventory for the quantum-ready data protection control (from dlp (purview / symantec))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Quantum-ready data protection\" control for Data Protection & Privacy at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Quantum-ready data protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the quantum-ready data protection control (from DLP (Purview / Symantec)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DLP (Purview / Symantec) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DLP (Purview / Symantec) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DLP (Purview / Symantec); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Protection & Privacy: \"Quantum-ready data protection\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Protection & Privacy policy/standard and flag every item where the \"Quantum-ready data protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-privacy_inventory.json   (in-scope items — In-scope inventory for the quantum-ready data protection control (from DLP (Purview / Symantec)))\n- data-privacy_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Quantum-ready data protection\",\n  \"domain\": \"Data Protection & Privacy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dpp_",
        "/evidence/data-privacy_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data Protection Officer / Privacy\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Quantum-ready data protection\" control must cover\n# fragment: quantumready_data_protection_",
        "/evidence/data-privacy_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-privacy_inventory.json",
            "isDir": false
          },
          {
            "name": "data-privacy_state.json",
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
          "value": "FLAG{dpp_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-privacy_inventory.json",
          "value": "quantumready_data_protection_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-privacy_state.json",
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
          "id": "dpp-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Quantum-ready data protection\" sub-process of Data Protection & Privacy?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the quantum-ready data protection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dpp-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Quantum-ready data protection\" matter to the broader Data Protection & Privacy posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Protection & Privacy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dpp-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Quantum-ready data protection\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the quantum-ready data protection control (from DLP (Purview / Symantec)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dpp-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Quantum-ready data protection\"?",
          "options": [
            "DLP (Purview / Symantec) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., DLP (Purview / Symantec)) via read-only access."
        },
        {
          "id": "dpp-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Quantum-ready data protection\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data Protection Officer / Privacy (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data Protection Officer / Privacy owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dpp-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Quantum-ready data protection\", which part stays with the human auditor?",
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
          "id": "dpp-10-q7",
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
          "id": "dpp-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Quantum-ready data protection\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the quantum-ready data protection control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the quantum-ready data protection control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dpp-10-q9",
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
          "id": "dpp-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Quantum-ready data protection\" also serve privacy and regulatory goals?",
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
