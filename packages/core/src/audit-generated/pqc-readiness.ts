import type { EpochConfig, StageConfig } from "../types";

export const pqcReadinessEpoch: EpochConfig = {
  "id": "pqc-readiness",
  "name": "Post-Quantum Readiness",
  "subtitle": "Agentic technical & privacy audit — Post-Quantum Readiness",
  "description": "Audit Post-Quantum Readiness end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🧮",
  "color": "Indigo",
  "unlocked": true
};

export const pqcReadinessStages: StageConfig[] = [
  {
    "epochId": "pqc-readiness",
    "id": "pqc-01",
    "order": 1,
    "title": "Cryptographic inventory and visibility",
    "subtitle": "Agentic technical & privacy audit of the cryptographic inventory and visibility control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cryptographic inventory and visibility\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Cryptographic inventory and visibility\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cryptographic inventory and visibility control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-01-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Cryptographic inventory and visibility",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cryptographic inventory and visibility\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the cryptographic inventory and visibility control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Cryptographic inventory and visibility\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the cryptographic inventory and visibility control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Cryptographic inventory and visibility\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_cryptographic_inventory_and_visibility_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_cryptographic_inventory_and_visibility_mcp.py` to expose it to your agent — or `python 01_cryptographic_inventory_and_visibility_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cryptographic inventory and visibility\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the cryptographic inventory and visibility control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Cryptographic inventory and visibility\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the cryptographic inventory and visibility control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_cryptographic_inventory_and_visibility_mcp.py",
          "url": "/audit-code/pqc-readiness/01_cryptographic_inventory_and_visibility_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Cryptographic inventory and visibility\" (in-scope inventory for the cryptographic inventory and visibility control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cryptographic inventory and visibility\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Cryptographic inventory and visibility\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the cryptographic inventory and visibility control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Cryptographic inventory and visibility\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Cryptographic inventory and visibility\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the cryptographic inventory and visibility control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cryptographic inventory and visibility\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cryptographic inventory and visibility\" control must cover\n# fragment: cryptographic_inventory_visibility_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "cryptographic_inventory_visibility_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cryptographic inventory and visibility\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the cryptographic inventory and visibility control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cryptographic inventory and visibility\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cryptographic inventory and visibility\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the cryptographic inventory and visibility control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Cryptographic inventory and visibility\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cryptographic inventory and visibility\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cryptographic inventory and visibility\", which part stays with the human auditor?",
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
          "id": "pqc-01-q7",
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
          "id": "pqc-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cryptographic inventory and visibility\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the cryptographic inventory and visibility control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the cryptographic inventory and visibility control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-01-q9",
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
          "id": "pqc-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cryptographic inventory and visibility\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-02",
    "order": 2,
    "title": "Crypto Bill of Materials (CBOM)",
    "subtitle": "Agentic technical & privacy audit of the crypto bill of materials (cbom) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Crypto Bill of Materials (CBOM)\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Crypto Bill of Materials (CBOM)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the crypto bill of materials (cbom) control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-02-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Crypto Bill of Materials (CBOM)",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Crypto Bill of Materials (CBOM)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the crypto bill of materials (cbom) control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Crypto Bill of Materials (CBOM)\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the crypto bill of materials (cbom) control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Crypto Bill of Materials (CBOM)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_crypto_bill_of_materials_cbom_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_crypto_bill_of_materials_cbom_mcp.py` to expose it to your agent — or `python 02_crypto_bill_of_materials_cbom_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Crypto Bill of Materials (CBOM)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the crypto bill of materials (cbom) control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Crypto Bill of Materials (CBOM)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the crypto bill of materials (cbom) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_crypto_bill_of_materials_cbom_mcp.py",
          "url": "/audit-code/pqc-readiness/02_crypto_bill_of_materials_cbom_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Crypto Bill of Materials (CBOM)\" (in-scope inventory for the crypto bill of materials (cbom) control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Crypto Bill of Materials (CBOM)\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Crypto Bill of Materials (CBOM)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the crypto bill of materials (cbom) control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Crypto Bill of Materials (CBOM)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Crypto Bill of Materials (CBOM)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the crypto bill of materials (cbom) control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Crypto Bill of Materials (CBOM)\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Crypto Bill of Materials (CBOM)\" control must cover\n# fragment: crypto_bill_materials_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "crypto_bill_materials_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Crypto Bill of Materials (CBOM)\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the crypto bill of materials (cbom) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Crypto Bill of Materials (CBOM)\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Crypto Bill of Materials (CBOM)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the crypto bill of materials (cbom) control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Crypto Bill of Materials (CBOM)\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Crypto Bill of Materials (CBOM)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Crypto Bill of Materials (CBOM)\", which part stays with the human auditor?",
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
          "id": "pqc-02-q7",
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
          "id": "pqc-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Crypto Bill of Materials (CBOM)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the crypto bill of materials (cbom) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the crypto bill of materials (cbom) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-02-q9",
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
          "id": "pqc-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Crypto Bill of Materials (CBOM)\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-03",
    "order": 3,
    "title": "Long-lived data identification",
    "subtitle": "Agentic technical & privacy audit of the long-lived data identification control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Long-lived data identification\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Long-lived data identification\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the long-lived data identification control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-03-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Long-lived data identification",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Long-lived data identification\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the long-lived data identification control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Long-lived data identification\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the long-lived data identification control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Long-lived data identification\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_long_lived_data_identification_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_long_lived_data_identification_mcp.py` to expose it to your agent — or `python 03_long_lived_data_identification_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Long-lived data identification\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the long-lived data identification control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Long-lived data identification\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the long-lived data identification control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_long_lived_data_identification_mcp.py",
          "url": "/audit-code/pqc-readiness/03_long_lived_data_identification_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Long-lived data identification\" (in-scope inventory for the long-lived data identification control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Long-lived data identification\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Long-lived data identification\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the long-lived data identification control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Long-lived data identification\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Long-lived data identification\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the long-lived data identification control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Long-lived data identification\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Long-lived data identification\" control must cover\n# fragment: longlived_data_identification_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "longlived_data_identification_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Long-lived data identification\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the long-lived data identification control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Long-lived data identification\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Long-lived data identification\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the long-lived data identification control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Long-lived data identification\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Long-lived data identification\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Long-lived data identification\", which part stays with the human auditor?",
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
          "id": "pqc-03-q7",
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
          "id": "pqc-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Long-lived data identification\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the long-lived data identification control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the long-lived data identification control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-03-q9",
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
          "id": "pqc-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Long-lived data identification\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-04",
    "order": 4,
    "title": "Network traffic exposure",
    "subtitle": "Agentic technical & privacy audit of the network traffic exposure control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Network traffic exposure\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Network traffic exposure\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the network traffic exposure control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-04-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Network traffic exposure",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Network traffic exposure\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the network traffic exposure control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Network traffic exposure\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the network traffic exposure control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Network traffic exposure\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_network_traffic_exposure_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_network_traffic_exposure_mcp.py` to expose it to your agent — or `python 04_network_traffic_exposure_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Network traffic exposure\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the network traffic exposure control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Network traffic exposure\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the network traffic exposure control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_network_traffic_exposure_mcp.py",
          "url": "/audit-code/pqc-readiness/04_network_traffic_exposure_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Network traffic exposure\" (in-scope inventory for the network traffic exposure control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Network traffic exposure\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Network traffic exposure\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the network traffic exposure control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Network traffic exposure\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Network traffic exposure\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the network traffic exposure control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Network traffic exposure\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Network traffic exposure\" control must cover\n# fragment: network_traffic_exposure_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "network_traffic_exposure_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Network traffic exposure\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the network traffic exposure control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Network traffic exposure\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Network traffic exposure\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the network traffic exposure control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Network traffic exposure\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Network traffic exposure\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Network traffic exposure\", which part stays with the human auditor?",
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
          "id": "pqc-04-q7",
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
          "id": "pqc-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Network traffic exposure\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the network traffic exposure control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the network traffic exposure control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-04-q9",
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
          "id": "pqc-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Network traffic exposure\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-05",
    "order": 5,
    "title": "Historical encryption assessment",
    "subtitle": "Agentic technical & privacy audit of the historical encryption assessment control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Historical encryption assessment\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Historical encryption assessment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the historical encryption assessment control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-05-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Historical encryption assessment",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Historical encryption assessment\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the historical encryption assessment control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Historical encryption assessment\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the historical encryption assessment control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Historical encryption assessment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_historical_encryption_assessment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_historical_encryption_assessment_mcp.py` to expose it to your agent — or `python 05_historical_encryption_assessment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Historical encryption assessment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the historical encryption assessment control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Historical encryption assessment\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the historical encryption assessment control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_historical_encryption_assessment_mcp.py",
          "url": "/audit-code/pqc-readiness/05_historical_encryption_assessment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Historical encryption assessment\" (in-scope inventory for the historical encryption assessment control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Historical encryption assessment\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Historical encryption assessment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the historical encryption assessment control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Historical encryption assessment\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Historical encryption assessment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the historical encryption assessment control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Historical encryption assessment\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Historical encryption assessment\" control must cover\n# fragment: historical_encryption_assessment_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "historical_encryption_assessment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Historical encryption assessment\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the historical encryption assessment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Historical encryption assessment\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Historical encryption assessment\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the historical encryption assessment control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Historical encryption assessment\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Historical encryption assessment\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Historical encryption assessment\", which part stays with the human auditor?",
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
          "id": "pqc-05-q7",
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
          "id": "pqc-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Historical encryption assessment\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the historical encryption assessment control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the historical encryption assessment control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-05-q9",
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
          "id": "pqc-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Historical encryption assessment\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-06",
    "order": 6,
    "title": "PQC regulatory compliance",
    "subtitle": "Agentic technical & privacy audit of the pqc regulatory compliance control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"PQC regulatory compliance\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"PQC regulatory compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the pqc regulatory compliance control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-06-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "PQC regulatory compliance",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"PQC regulatory compliance\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the pqc regulatory compliance control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"PQC regulatory compliance\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the pqc regulatory compliance control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"PQC regulatory compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_pqc_regulatory_compliance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_pqc_regulatory_compliance_mcp.py` to expose it to your agent — or `python 06_pqc_regulatory_compliance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"PQC regulatory compliance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the pqc regulatory compliance control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"PQC regulatory compliance\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the pqc regulatory compliance control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_pqc_regulatory_compliance_mcp.py",
          "url": "/audit-code/pqc-readiness/06_pqc_regulatory_compliance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"PQC regulatory compliance\" (in-scope inventory for the pqc regulatory compliance control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"PQC regulatory compliance\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"PQC regulatory compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the pqc regulatory compliance control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"PQC regulatory compliance\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"PQC regulatory compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the pqc regulatory compliance control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"PQC regulatory compliance\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"PQC regulatory compliance\" control must cover\n# fragment: pqc_regulatory_compliance_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "pqc_regulatory_compliance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"PQC regulatory compliance\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the pqc regulatory compliance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"PQC regulatory compliance\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"PQC regulatory compliance\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the pqc regulatory compliance control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"PQC regulatory compliance\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"PQC regulatory compliance\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"PQC regulatory compliance\", which part stays with the human auditor?",
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
          "id": "pqc-06-q7",
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
          "id": "pqc-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"PQC regulatory compliance\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the pqc regulatory compliance control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the pqc regulatory compliance control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-06-q9",
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
          "id": "pqc-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"PQC regulatory compliance\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-07",
    "order": 7,
    "title": "Active HNDL threat intel",
    "subtitle": "Agentic technical & privacy audit of the active hndl threat intel control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Active HNDL threat intel\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Active HNDL threat intel\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the active hndl threat intel control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-07-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Active HNDL threat intel",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Active HNDL threat intel\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the active hndl threat intel control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Active HNDL threat intel\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the active hndl threat intel control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Active HNDL threat intel\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_active_hndl_threat_intel_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_active_hndl_threat_intel_mcp.py` to expose it to your agent — or `python 07_active_hndl_threat_intel_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Active HNDL threat intel\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the active hndl threat intel control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Active HNDL threat intel\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the active hndl threat intel control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_active_hndl_threat_intel_mcp.py",
          "url": "/audit-code/pqc-readiness/07_active_hndl_threat_intel_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Active HNDL threat intel\" (in-scope inventory for the active hndl threat intel control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Active HNDL threat intel\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Active HNDL threat intel\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the active hndl threat intel control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Active HNDL threat intel\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Active HNDL threat intel\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the active hndl threat intel control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Active HNDL threat intel\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Active HNDL threat intel\" control must cover\n# fragment: active_hndl_threat_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "active_hndl_threat_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Active HNDL threat intel\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the active hndl threat intel control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Active HNDL threat intel\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Active HNDL threat intel\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the active hndl threat intel control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Active HNDL threat intel\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Active HNDL threat intel\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Active HNDL threat intel\", which part stays with the human auditor?",
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
          "id": "pqc-07-q7",
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
          "id": "pqc-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Active HNDL threat intel\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the active hndl threat intel control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the active hndl threat intel control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-07-q9",
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
          "id": "pqc-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Active HNDL threat intel\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-08",
    "order": 8,
    "title": "Crypto, protocol, hardware agility",
    "subtitle": "Agentic technical & privacy audit of the crypto, protocol, hardware agility control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Crypto, protocol, hardware agility\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Crypto, protocol, hardware agility\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the crypto, protocol, hardware agility control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-08-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Crypto, protocol, hardware agility",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Crypto, protocol, hardware agility\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the crypto, protocol, hardware agility control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Crypto, protocol, hardware agility\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the crypto, protocol, hardware agility control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Crypto, protocol, hardware agility\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_crypto_protocol_hardware_agility_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_crypto_protocol_hardware_agility_mcp.py` to expose it to your agent — or `python 08_crypto_protocol_hardware_agility_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Crypto, protocol, hardware agility\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the crypto, protocol, hardware agility control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Crypto, protocol, hardware agility\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the crypto, protocol, hardware agility control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_crypto_protocol_hardware_agility_mcp.py",
          "url": "/audit-code/pqc-readiness/08_crypto_protocol_hardware_agility_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Crypto, protocol, hardware agility\" (in-scope inventory for the crypto, protocol, hardware agility control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Crypto, protocol, hardware agility\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Crypto, protocol, hardware agility\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the crypto, protocol, hardware agility control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Crypto, protocol, hardware agility\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Crypto, protocol, hardware agility\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the crypto, protocol, hardware agility control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Crypto, protocol, hardware agility\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Crypto, protocol, hardware agility\" control must cover\n# fragment: crypto_protocol_hardware_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "crypto_protocol_hardware_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Crypto, protocol, hardware agility\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the crypto, protocol, hardware agility control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Crypto, protocol, hardware agility\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Crypto, protocol, hardware agility\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the crypto, protocol, hardware agility control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Crypto, protocol, hardware agility\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Crypto, protocol, hardware agility\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Crypto, protocol, hardware agility\", which part stays with the human auditor?",
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
          "id": "pqc-08-q7",
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
          "id": "pqc-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Crypto, protocol, hardware agility\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the crypto, protocol, hardware agility control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the crypto, protocol, hardware agility control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-08-q9",
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
          "id": "pqc-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Crypto, protocol, hardware agility\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-09",
    "order": 9,
    "title": "Secure communications PQC migration",
    "subtitle": "Agentic technical & privacy audit of the secure communications pqc migration control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secure communications PQC migration\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Secure communications PQC migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the secure communications pqc migration control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-09-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Secure communications PQC migration",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secure communications PQC migration\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the secure communications pqc migration control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Secure communications PQC migration\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the secure communications pqc migration control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Secure communications PQC migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_secure_communications_pqc_migration_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_secure_communications_pqc_migration_mcp.py` to expose it to your agent — or `python 09_secure_communications_pqc_migration_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secure communications PQC migration\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the secure communications pqc migration control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Secure communications PQC migration\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the secure communications pqc migration control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_secure_communications_pqc_migration_mcp.py",
          "url": "/audit-code/pqc-readiness/09_secure_communications_pqc_migration_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Secure communications PQC migration\" (in-scope inventory for the secure communications pqc migration control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secure communications PQC migration\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Secure communications PQC migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the secure communications pqc migration control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Secure communications PQC migration\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Secure communications PQC migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the secure communications pqc migration control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secure communications PQC migration\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secure communications PQC migration\" control must cover\n# fragment: secure_communications_pqc_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "secure_communications_pqc_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secure communications PQC migration\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the secure communications pqc migration control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secure communications PQC migration\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secure communications PQC migration\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the secure communications pqc migration control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Secure communications PQC migration\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secure communications PQC migration\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secure communications PQC migration\", which part stays with the human auditor?",
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
          "id": "pqc-09-q7",
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
          "id": "pqc-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secure communications PQC migration\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the secure communications pqc migration control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the secure communications pqc migration control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-09-q9",
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
          "id": "pqc-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secure communications PQC migration\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-10",
    "order": 10,
    "title": "RFC 9881 alignment",
    "subtitle": "Agentic technical & privacy audit of the rfc 9881 alignment control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"RFC 9881 alignment\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"RFC 9881 alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the rfc 9881 alignment control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-10-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "RFC 9881 alignment",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"RFC 9881 alignment\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the rfc 9881 alignment control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"RFC 9881 alignment\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the rfc 9881 alignment control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"RFC 9881 alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_rfc_9881_alignment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_rfc_9881_alignment_mcp.py` to expose it to your agent — or `python 10_rfc_9881_alignment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"RFC 9881 alignment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the rfc 9881 alignment control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"RFC 9881 alignment\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the rfc 9881 alignment control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_rfc_9881_alignment_mcp.py",
          "url": "/audit-code/pqc-readiness/10_rfc_9881_alignment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"RFC 9881 alignment\" (in-scope inventory for the rfc 9881 alignment control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"RFC 9881 alignment\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"RFC 9881 alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the rfc 9881 alignment control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"RFC 9881 alignment\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"RFC 9881 alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the rfc 9881 alignment control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"RFC 9881 alignment\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"RFC 9881 alignment\" control must cover\n# fragment: rfc_9881_alignment_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "rfc_9881_alignment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"RFC 9881 alignment\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the rfc 9881 alignment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"RFC 9881 alignment\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"RFC 9881 alignment\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the rfc 9881 alignment control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"RFC 9881 alignment\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"RFC 9881 alignment\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"RFC 9881 alignment\", which part stays with the human auditor?",
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
          "id": "pqc-10-q7",
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
          "id": "pqc-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"RFC 9881 alignment\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the rfc 9881 alignment control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the rfc 9881 alignment control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-10-q9",
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
          "id": "pqc-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"RFC 9881 alignment\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-11",
    "order": 11,
    "title": "CNSA 2.0 compliance planning",
    "subtitle": "Agentic technical & privacy audit of the cnsa 2.0 compliance planning control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"CNSA 2.0 compliance planning\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"CNSA 2.0 compliance planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cnsa 2.0 compliance planning control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-11-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "CNSA 2.0 compliance planning",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"CNSA 2.0 compliance planning\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the cnsa 2.0 compliance planning control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"CNSA 2.0 compliance planning\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the cnsa 2.0 compliance planning control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"CNSA 2.0 compliance planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_cnsa_2_0_compliance_planning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_cnsa_2_0_compliance_planning_mcp.py` to expose it to your agent — or `python 11_cnsa_2_0_compliance_planning_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"CNSA 2.0 compliance planning\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the cnsa 2.0 compliance planning control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"CNSA 2.0 compliance planning\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the cnsa 2.0 compliance planning control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_cnsa_2_0_compliance_planning_mcp.py",
          "url": "/audit-code/pqc-readiness/11_cnsa_2_0_compliance_planning_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"CNSA 2.0 compliance planning\" (in-scope inventory for the cnsa 2.0 compliance planning control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"CNSA 2.0 compliance planning\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"CNSA 2.0 compliance planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the cnsa 2.0 compliance planning control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"CNSA 2.0 compliance planning\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"CNSA 2.0 compliance planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the cnsa 2.0 compliance planning control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"CNSA 2.0 compliance planning\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"CNSA 2.0 compliance planning\" control must cover\n# fragment: cnsa_20_compliance_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "cnsa_20_compliance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"CNSA 2.0 compliance planning\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the cnsa 2.0 compliance planning control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"CNSA 2.0 compliance planning\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"CNSA 2.0 compliance planning\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the cnsa 2.0 compliance planning control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"CNSA 2.0 compliance planning\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"CNSA 2.0 compliance planning\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"CNSA 2.0 compliance planning\", which part stays with the human auditor?",
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
          "id": "pqc-11-q7",
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
          "id": "pqc-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"CNSA 2.0 compliance planning\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the cnsa 2.0 compliance planning control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the cnsa 2.0 compliance planning control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-11-q9",
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
          "id": "pqc-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"CNSA 2.0 compliance planning\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-12",
    "order": 12,
    "title": "Standards monitoring (IETF, NIST)",
    "subtitle": "Agentic technical & privacy audit of the standards monitoring (ietf, nist) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Standards monitoring (IETF, NIST)\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Standards monitoring (IETF, NIST)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the standards monitoring (ietf, nist) control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-12-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Standards monitoring (IETF, NIST)",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Standards monitoring (IETF, NIST)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the standards monitoring (ietf, nist) control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Standards monitoring (IETF, NIST)\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the standards monitoring (ietf, nist) control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Standards monitoring (IETF, NIST)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_standards_monitoring_ietf_nist_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_standards_monitoring_ietf_nist_mcp.py` to expose it to your agent — or `python 12_standards_monitoring_ietf_nist_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Standards monitoring (IETF, NIST)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the standards monitoring (ietf, nist) control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Standards monitoring (IETF, NIST)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the standards monitoring (ietf, nist) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_standards_monitoring_ietf_nist_mcp.py",
          "url": "/audit-code/pqc-readiness/12_standards_monitoring_ietf_nist_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Standards monitoring (IETF, NIST)\" (in-scope inventory for the standards monitoring (ietf, nist) control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Standards monitoring (IETF, NIST)\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Standards monitoring (IETF, NIST)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the standards monitoring (ietf, nist) control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Standards monitoring (IETF, NIST)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Standards monitoring (IETF, NIST)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the standards monitoring (ietf, nist) control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Standards monitoring (IETF, NIST)\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Standards monitoring (IETF, NIST)\" control must cover\n# fragment: standards_monitoring_ietf_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "standards_monitoring_ietf_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Standards monitoring (IETF, NIST)\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the standards monitoring (ietf, nist) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Standards monitoring (IETF, NIST)\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Standards monitoring (IETF, NIST)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the standards monitoring (ietf, nist) control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Standards monitoring (IETF, NIST)\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Standards monitoring (IETF, NIST)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Standards monitoring (IETF, NIST)\", which part stays with the human auditor?",
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
          "id": "pqc-12-q7",
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
          "id": "pqc-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Standards monitoring (IETF, NIST)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the standards monitoring (ietf, nist) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the standards monitoring (ietf, nist) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-12-q9",
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
          "id": "pqc-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Standards monitoring (IETF, NIST)\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-13",
    "order": 13,
    "title": "Regional standards alignment",
    "subtitle": "Agentic technical & privacy audit of the regional standards alignment control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Regional standards alignment\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Regional standards alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the regional standards alignment control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-13-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Regional standards alignment",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Regional standards alignment\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the regional standards alignment control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Regional standards alignment\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the regional standards alignment control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Regional standards alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_regional_standards_alignment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_regional_standards_alignment_mcp.py` to expose it to your agent — or `python 13_regional_standards_alignment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Regional standards alignment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the regional standards alignment control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Regional standards alignment\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the regional standards alignment control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_regional_standards_alignment_mcp.py",
          "url": "/audit-code/pqc-readiness/13_regional_standards_alignment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Regional standards alignment\" (in-scope inventory for the regional standards alignment control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Regional standards alignment\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Regional standards alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the regional standards alignment control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Regional standards alignment\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Regional standards alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the regional standards alignment control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Regional standards alignment\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Regional standards alignment\" control must cover\n# fragment: regional_standards_alignment_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "regional_standards_alignment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Regional standards alignment\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the regional standards alignment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Regional standards alignment\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Regional standards alignment\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the regional standards alignment control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Regional standards alignment\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Regional standards alignment\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Regional standards alignment\", which part stays with the human auditor?",
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
          "id": "pqc-13-q7",
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
          "id": "pqc-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Regional standards alignment\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the regional standards alignment control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the regional standards alignment control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-13-q9",
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
          "id": "pqc-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Regional standards alignment\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-14",
    "order": 14,
    "title": "Trust store updates",
    "subtitle": "Agentic technical & privacy audit of the trust store updates control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Trust store updates\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Trust store updates\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the trust store updates control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-14-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Trust store updates",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Trust store updates\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the trust store updates control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Trust store updates\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the trust store updates control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Trust store updates\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_trust_store_updates_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_trust_store_updates_mcp.py` to expose it to your agent — or `python 14_trust_store_updates_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Trust store updates\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the trust store updates control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Trust store updates\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the trust store updates control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_trust_store_updates_mcp.py",
          "url": "/audit-code/pqc-readiness/14_trust_store_updates_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Trust store updates\" (in-scope inventory for the trust store updates control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Trust store updates\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Trust store updates\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the trust store updates control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Trust store updates\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Trust store updates\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the trust store updates control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Trust store updates\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Trust store updates\" control must cover\n# fragment: trust_store_updates_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "trust_store_updates_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Trust store updates\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the trust store updates control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Trust store updates\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Trust store updates\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the trust store updates control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Trust store updates\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Trust store updates\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Trust store updates\", which part stays with the human auditor?",
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
          "id": "pqc-14-q7",
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
          "id": "pqc-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Trust store updates\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the trust store updates control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the trust store updates control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-14-q9",
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
          "id": "pqc-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Trust store updates\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-15",
    "order": 15,
    "title": "Vendor PQC roadmap",
    "subtitle": "Agentic technical & privacy audit of the vendor pqc roadmap control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor PQC roadmap\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Vendor PQC roadmap\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vendor pqc roadmap control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-15-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Vendor PQC roadmap",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor PQC roadmap\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vendor pqc roadmap control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Vendor PQC roadmap\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vendor pqc roadmap control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Vendor PQC roadmap\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_vendor_pqc_roadmap_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 15_vendor_pqc_roadmap_mcp.py` to expose it to your agent — or `python 15_vendor_pqc_roadmap_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor PQC roadmap\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vendor pqc roadmap control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Vendor PQC roadmap\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vendor pqc roadmap control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "15_vendor_pqc_roadmap_mcp.py",
          "url": "/audit-code/pqc-readiness/15_vendor_pqc_roadmap_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Vendor PQC roadmap\" (in-scope inventory for the vendor pqc roadmap control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor PQC roadmap\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Vendor PQC roadmap\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vendor pqc roadmap control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Vendor PQC roadmap\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Vendor PQC roadmap\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the vendor pqc roadmap control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor PQC roadmap\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor PQC roadmap\" control must cover\n# fragment: vendor_pqc_roadmap_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "vendor_pqc_roadmap_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-15-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor PQC roadmap\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the vendor pqc roadmap control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-15-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor PQC roadmap\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-15-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor PQC roadmap\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the vendor pqc roadmap control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-15-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Vendor PQC roadmap\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-15-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor PQC roadmap\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-15-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor PQC roadmap\", which part stays with the human auditor?",
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
          "id": "pqc-15-q7",
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
          "id": "pqc-15-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor PQC roadmap\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the vendor pqc roadmap control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vendor pqc roadmap control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-15-q9",
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
          "id": "pqc-15-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor PQC roadmap\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-16",
    "order": 16,
    "title": "Third-party PKI dependency",
    "subtitle": "Agentic technical & privacy audit of the third-party pki dependency control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party PKI dependency\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Third-party PKI dependency\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the third-party pki dependency control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-16-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Third-party PKI dependency",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Third-party PKI dependency\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the third-party pki dependency control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Third-party PKI dependency\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the third-party pki dependency control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Third-party PKI dependency\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `16_third_party_pki_dependency_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 16_third_party_pki_dependency_mcp.py` to expose it to your agent — or `python 16_third_party_pki_dependency_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Third-party PKI dependency\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the third-party pki dependency control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Third-party PKI dependency\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the third-party pki dependency control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "16_third_party_pki_dependency_mcp.py",
          "url": "/audit-code/pqc-readiness/16_third_party_pki_dependency_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Third-party PKI dependency\" (in-scope inventory for the third-party pki dependency control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party PKI dependency\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Third-party PKI dependency\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the third-party pki dependency control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Third-party PKI dependency\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Third-party PKI dependency\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the third-party pki dependency control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Third-party PKI dependency\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Third-party PKI dependency\" control must cover\n# fragment: thirdparty_pki_dependency_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "thirdparty_pki_dependency_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-16-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Third-party PKI dependency\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the third-party pki dependency control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-16-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party PKI dependency\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-16-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party PKI dependency\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the third-party pki dependency control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-16-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Third-party PKI dependency\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-16-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party PKI dependency\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-16-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party PKI dependency\", which part stays with the human auditor?",
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
          "id": "pqc-16-q7",
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
          "id": "pqc-16-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party PKI dependency\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the third-party pki dependency control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the third-party pki dependency control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-16-q9",
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
          "id": "pqc-16-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party PKI dependency\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-17",
    "order": 17,
    "title": "Secure product PQC readiness",
    "subtitle": "Agentic technical & privacy audit of the secure product pqc readiness control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secure product PQC readiness\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Secure product PQC readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the secure product pqc readiness control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-17-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Secure product PQC readiness",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secure product PQC readiness\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the secure product pqc readiness control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Secure product PQC readiness\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the secure product pqc readiness control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Secure product PQC readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `17_secure_product_pqc_readiness_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 17_secure_product_pqc_readiness_mcp.py` to expose it to your agent — or `python 17_secure_product_pqc_readiness_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secure product PQC readiness\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the secure product pqc readiness control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Secure product PQC readiness\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the secure product pqc readiness control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "17_secure_product_pqc_readiness_mcp.py",
          "url": "/audit-code/pqc-readiness/17_secure_product_pqc_readiness_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Secure product PQC readiness\" (in-scope inventory for the secure product pqc readiness control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secure product PQC readiness\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Secure product PQC readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the secure product pqc readiness control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Secure product PQC readiness\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Secure product PQC readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the secure product pqc readiness control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secure product PQC readiness\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secure product PQC readiness\" control must cover\n# fragment: secure_product_pqc_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "secure_product_pqc_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-17-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secure product PQC readiness\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the secure product pqc readiness control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-17-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secure product PQC readiness\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-17-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secure product PQC readiness\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the secure product pqc readiness control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-17-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Secure product PQC readiness\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-17-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secure product PQC readiness\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-17-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secure product PQC readiness\", which part stays with the human auditor?",
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
          "id": "pqc-17-q7",
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
          "id": "pqc-17-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secure product PQC readiness\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the secure product pqc readiness control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the secure product pqc readiness control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-17-q9",
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
          "id": "pqc-17-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secure product PQC readiness\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-18",
    "order": 18,
    "title": "Industry interop testing",
    "subtitle": "Agentic technical & privacy audit of the industry interop testing control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Industry interop testing\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Industry interop testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the industry interop testing control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-18-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Industry interop testing",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Industry interop testing\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the industry interop testing control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Industry interop testing\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the industry interop testing control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Industry interop testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `18_industry_interop_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 18_industry_interop_testing_mcp.py` to expose it to your agent — or `python 18_industry_interop_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Industry interop testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the industry interop testing control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Industry interop testing\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the industry interop testing control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "18_industry_interop_testing_mcp.py",
          "url": "/audit-code/pqc-readiness/18_industry_interop_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Industry interop testing\" (in-scope inventory for the industry interop testing control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Industry interop testing\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Industry interop testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the industry interop testing control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Industry interop testing\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"Industry interop testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the industry interop testing control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Industry interop testing\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Industry interop testing\" control must cover\n# fragment: industry_interop_testing_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "industry_interop_testing_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-18-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Industry interop testing\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the industry interop testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-18-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Industry interop testing\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-18-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Industry interop testing\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the industry interop testing control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-18-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Industry interop testing\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-18-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Industry interop testing\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-18-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Industry interop testing\", which part stays with the human auditor?",
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
          "id": "pqc-18-q7",
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
          "id": "pqc-18-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Industry interop testing\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the industry interop testing control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the industry interop testing control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-18-q9",
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
          "id": "pqc-18-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Industry interop testing\" also serve privacy and regulatory goals?",
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
    "epochId": "pqc-readiness",
    "id": "pqc-19",
    "order": 19,
    "title": "PQC pen testing",
    "subtitle": "Agentic technical & privacy audit of the pqc pen testing control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"PQC pen testing\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"PQC pen testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Cryptographic inventory / CBOM tooling; TLS + certificate estate; KMS / HSM + PKI) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the pqc pen testing control (from Cryptographic inventory / CBOM tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Cryptographic inventory / CBOM tooling",
        "TLS + certificate estate",
        "KMS / HSM + PKI",
        "Vendor PQC roadmaps"
      ],
      "dataOwner": [
        "Crypto / PKI team",
        "Enterprise architecture",
        "Security engineering",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-19-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "PQC pen testing",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"PQC pen testing\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the pqc pen testing control (from Cryptographic inventory / CBOM tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"PQC pen testing\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the pqc pen testing control (from Cryptographic inventory / CBOM tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"PQC pen testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `19_pqc_pen_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cryptographic inventory / CBOM tooling and TLS + certificate estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 19_pqc_pen_testing_mcp.py` to expose it to your agent — or `python 19_pqc_pen_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cryptographic inventory / CBOM tooling · TLS + certificate estate",
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
          "year": 2024,
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"PQC pen testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the pqc pen testing control (from Cryptographic inventory / CBOM tooling).",
        "The test: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"PQC pen testing\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Cryptographic inventory / CBOM tooling, TLS + certificate estate, KMS / HSM + PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the pqc pen testing control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 — PQC standards",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "CISA/NSA/NIST PQC migration",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "19_pqc_pen_testing_mcp.py",
          "url": "/audit-code/pqc-readiness/19_pqc_pen_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"PQC pen testing\" (in-scope inventory for the pqc pen testing control (from cryptographic inventory / cbom tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"PQC pen testing\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"PQC pen testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the pqc pen testing control (from Cryptographic inventory / CBOM tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cryptographic inventory / CBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cryptographic inventory / CBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cryptographic inventory / CBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"PQC pen testing\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Post-Quantum Readiness policy/standard and flag every item where the \"PQC pen testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — In-scope inventory for the pqc pen testing control (from Cryptographic inventory / CBOM tooling))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"PQC pen testing\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"PQC pen testing\" control must cover\n# fragment: pqc_pen_testing_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "pqc_pen_testing_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-19-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"PQC pen testing\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the pqc pen testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "pqc-19-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"PQC pen testing\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "pqc-19-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"PQC pen testing\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the pqc pen testing control (from Cryptographic inventory / CBOM tooling) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "pqc-19-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"PQC pen testing\"?",
          "options": [
            "Cryptographic inventory / CBOM tooling (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cryptographic inventory / CBOM tooling) via read-only access."
        },
        {
          "id": "pqc-19-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"PQC pen testing\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Crypto / PKI team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Crypto / PKI team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "pqc-19-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"PQC pen testing\", which part stays with the human auditor?",
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
          "id": "pqc-19-q7",
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
          "id": "pqc-19-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"PQC pen testing\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the pqc pen testing control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the pqc pen testing control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "pqc-19-q9",
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
          "id": "pqc-19-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"PQC pen testing\" also serve privacy and regulatory goals?",
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
