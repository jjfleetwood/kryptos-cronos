import type { EpochConfig, StageConfig } from "../types";

export const vulnPatchEpoch: EpochConfig = {
  "id": "vuln-patch",
  "name": "Vulnerability & Patch Management",
  "subtitle": "Agentic technical & privacy audit — Vulnerability & Patch Management",
  "description": "Audit Vulnerability & Patch Management end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🩹",
  "color": "Rose",
  "unlocked": true
};

export const vulnPatchStages: StageConfig[] = [
  {
    "epochId": "vuln-patch",
    "id": "vpm-01",
    "order": 1,
    "title": "Server build standards and hardening",
    "subtitle": "Agentic technical & privacy audit of the server build standards and hardening control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Server build standards and hardening\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Server build standards and hardening\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Vuln scanner (Tenable/Qualys/Rapid7); Patch management (SCCM/Intune/Ansible); CMDB / asset inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the server build standards and hardening control (from Vuln scanner (Tenable/Qualys/Rapid7))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Vuln scanner (Tenable/Qualys/Rapid7)",
        "Patch management (SCCM/Intune/Ansible)",
        "CMDB / asset inventory",
        "CISA KEV feed"
      ],
      "dataOwner": [
        "IT Operations",
        "Server / endpoint owners",
        "Security operations",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Vulnerability & Patch Management controls."
      }
    },
    "badge": {
      "id": "vpm-01-badge",
      "name": "Vulnerability & Patch Management Auditor",
      "emoji": "🩹"
    },
    "wonder": {
      "name": "Server build standards and hardening",
      "location": "Vulnerability & Patch Management",
      "era": "Present Day",
      "emoji": "🩹"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Server build standards and hardening\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the server build standards and hardening control (from Vuln scanner (Tenable/Qualys/Rapid7))) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Server build standards and hardening\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the server build standards and hardening control (from Vuln scanner (Tenable/Qualys/Rapid7)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Server build standards and hardening\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_server_build_standards_and_hardening_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vuln scanner (Tenable/Qualys/Rapid7) and Patch management (SCCM/Intune/Ansible) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_server_build_standards_and_hardening_mcp.py` to expose it to your agent — or `python 01_server_build_standards_and_hardening_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A known, patchable CVE left open",
        "when": "2017",
        "where": "Internet-facing enterprise application",
        "impact": "A critical vulnerability with an available patch went unremediated within the exposure window and was exploited.",
        "body": [
          "The dominant breach root cause is not zero-days but known, patchable vulnerabilities left open past a reasonable SLA — Equifax's Struts CVE is the textbook case.",
          "Auditors test that vulnerabilities are discovered, prioritized (KEV/EPSS-aware), remediated within SLA, and that exceptions are risk-accepted and time-boxed."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Vulnerability & Patch Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vuln scanner (Tenable/Qualys/Rapid7) · Patch management (SCCM/Intune/Ansible)",
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
          "event": "Equifax: unpatched CVE-2017-5638 exploited",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "CISA BOD 22-01 mandates KEV remediation timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Server build standards and hardening\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the server build standards and hardening control (from Vuln scanner (Tenable/Qualys/Rapid7)).",
        "The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Server build standards and hardening\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the server build standards and hardening control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CISA Known Exploited Vulnerabilities",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "NIST SP 800-40 — Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CIS Control 7 — Continuous Vulnerability Mgmt",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_server_build_standards_and_hardening_mcp.py",
          "url": "/audit-code/vuln-patch/01_server_build_standards_and_hardening_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Server build standards and hardening\" (in-scope inventory for the server build standards and hardening control (from vuln scanner (tenable/qualys/rapid7))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Server build standards and hardening\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Server build standards and hardening\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the server build standards and hardening control (from Vuln scanner (Tenable/Qualys/Rapid7)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vuln scanner (Tenable/Qualys/Rapid7) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vuln scanner (Tenable/Qualys/Rapid7) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vuln scanner (Tenable/Qualys/Rapid7); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Server build standards and hardening\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Server build standards and hardening\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — In-scope inventory for the server build standards and hardening control (from Vuln scanner (Tenable/Qualys/Rapid7)))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Server build standards and hardening\",\n  \"domain\": \"Vulnerability & Patch Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{vpm_",
        "/evidence/vuln-patch_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IT Operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Server build standards and hardening\" control must cover\n# fragment: server_build_standards_",
        "/evidence/vuln-patch_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "vuln-patch_inventory.json",
            "isDir": false
          },
          {
            "name": "vuln-patch_state.json",
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
          "value": "FLAG{vpm_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/vuln-patch_inventory.json",
          "value": "server_build_standards_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/vuln-patch_state.json",
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
          "id": "vpm-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Server build standards and hardening\" sub-process of Vulnerability & Patch Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the server build standards and hardening control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "vpm-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Server build standards and hardening\" matter to the broader Vulnerability & Patch Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Vulnerability & Patch Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "vpm-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Server build standards and hardening\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the server build standards and hardening control (from Vuln scanner (Tenable/Qualys/Rapid7)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "vpm-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Server build standards and hardening\"?",
          "options": [
            "Vuln scanner (Tenable/Qualys/Rapid7) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Vuln scanner (Tenable/Qualys/Rapid7)) via read-only access."
        },
        {
          "id": "vpm-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Server build standards and hardening\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT Operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "vpm-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Server build standards and hardening\", which part stays with the human auditor?",
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
          "id": "vpm-01-q7",
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
          "id": "vpm-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Server build standards and hardening\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the server build standards and hardening control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the server build standards and hardening control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "vpm-01-q9",
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
          "id": "vpm-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Server build standards and hardening\" also serve privacy and regulatory goals?",
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
    "epochId": "vuln-patch",
    "id": "vpm-02",
    "order": 2,
    "title": "Patch mgmt and exception handling",
    "subtitle": "Agentic technical & privacy audit of the patch mgmt and exception handling control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Patch mgmt and exception handling\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Patch mgmt and exception handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Vuln scanner (Tenable/Qualys/Rapid7); Patch management (SCCM/Intune/Ansible); CMDB / asset inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the patch mgmt and exception handling control (from Vuln scanner (Tenable/Qualys/Rapid7))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Vuln scanner (Tenable/Qualys/Rapid7)",
        "Patch management (SCCM/Intune/Ansible)",
        "CMDB / asset inventory",
        "CISA KEV feed"
      ],
      "dataOwner": [
        "IT Operations",
        "Server / endpoint owners",
        "Security operations",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Vulnerability & Patch Management controls."
      }
    },
    "badge": {
      "id": "vpm-02-badge",
      "name": "Vulnerability & Patch Management Auditor",
      "emoji": "🩹"
    },
    "wonder": {
      "name": "Patch mgmt and exception handling",
      "location": "Vulnerability & Patch Management",
      "era": "Present Day",
      "emoji": "🩹"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Patch mgmt and exception handling\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the patch mgmt and exception handling control (from Vuln scanner (Tenable/Qualys/Rapid7))) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Patch mgmt and exception handling\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the patch mgmt and exception handling control (from Vuln scanner (Tenable/Qualys/Rapid7)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Patch mgmt and exception handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_patch_mgmt_and_exception_handling_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vuln scanner (Tenable/Qualys/Rapid7) and Patch management (SCCM/Intune/Ansible) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_patch_mgmt_and_exception_handling_mcp.py` to expose it to your agent — or `python 02_patch_mgmt_and_exception_handling_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A known, patchable CVE left open",
        "when": "2017",
        "where": "Internet-facing enterprise application",
        "impact": "A critical vulnerability with an available patch went unremediated within the exposure window and was exploited.",
        "body": [
          "The dominant breach root cause is not zero-days but known, patchable vulnerabilities left open past a reasonable SLA — Equifax's Struts CVE is the textbook case.",
          "Auditors test that vulnerabilities are discovered, prioritized (KEV/EPSS-aware), remediated within SLA, and that exceptions are risk-accepted and time-boxed."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Vulnerability & Patch Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vuln scanner (Tenable/Qualys/Rapid7) · Patch management (SCCM/Intune/Ansible)",
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
          "event": "Equifax: unpatched CVE-2017-5638 exploited",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "CISA BOD 22-01 mandates KEV remediation timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Patch mgmt and exception handling\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the patch mgmt and exception handling control (from Vuln scanner (Tenable/Qualys/Rapid7)).",
        "The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Patch mgmt and exception handling\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the patch mgmt and exception handling control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CISA Known Exploited Vulnerabilities",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "NIST SP 800-40 — Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CIS Control 7 — Continuous Vulnerability Mgmt",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_patch_mgmt_and_exception_handling_mcp.py",
          "url": "/audit-code/vuln-patch/02_patch_mgmt_and_exception_handling_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Patch mgmt and exception handling\" (in-scope inventory for the patch mgmt and exception handling control (from vuln scanner (tenable/qualys/rapid7))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Patch mgmt and exception handling\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Patch mgmt and exception handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the patch mgmt and exception handling control (from Vuln scanner (Tenable/Qualys/Rapid7)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vuln scanner (Tenable/Qualys/Rapid7) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vuln scanner (Tenable/Qualys/Rapid7) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vuln scanner (Tenable/Qualys/Rapid7); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Patch mgmt and exception handling\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Patch mgmt and exception handling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — In-scope inventory for the patch mgmt and exception handling control (from Vuln scanner (Tenable/Qualys/Rapid7)))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Patch mgmt and exception handling\",\n  \"domain\": \"Vulnerability & Patch Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{vpm_",
        "/evidence/vuln-patch_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IT Operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Patch mgmt and exception handling\" control must cover\n# fragment: patch_mgmt_exception_",
        "/evidence/vuln-patch_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "vuln-patch_inventory.json",
            "isDir": false
          },
          {
            "name": "vuln-patch_state.json",
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
          "value": "FLAG{vpm_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/vuln-patch_inventory.json",
          "value": "patch_mgmt_exception_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/vuln-patch_state.json",
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
          "id": "vpm-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Patch mgmt and exception handling\" sub-process of Vulnerability & Patch Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the patch mgmt and exception handling control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "vpm-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Patch mgmt and exception handling\" matter to the broader Vulnerability & Patch Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Vulnerability & Patch Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "vpm-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Patch mgmt and exception handling\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the patch mgmt and exception handling control (from Vuln scanner (Tenable/Qualys/Rapid7)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "vpm-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Patch mgmt and exception handling\"?",
          "options": [
            "Vuln scanner (Tenable/Qualys/Rapid7) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Vuln scanner (Tenable/Qualys/Rapid7)) via read-only access."
        },
        {
          "id": "vpm-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Patch mgmt and exception handling\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT Operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "vpm-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Patch mgmt and exception handling\", which part stays with the human auditor?",
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
          "id": "vpm-02-q7",
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
          "id": "vpm-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Patch mgmt and exception handling\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the patch mgmt and exception handling control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the patch mgmt and exception handling control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "vpm-02-q9",
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
          "id": "vpm-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Patch mgmt and exception handling\" also serve privacy and regulatory goals?",
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
    "epochId": "vuln-patch",
    "id": "vpm-03",
    "order": 3,
    "title": "Configuration drift monitoring",
    "subtitle": "Agentic technical & privacy audit of the configuration drift monitoring control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Configuration drift monitoring\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Configuration drift monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Vuln scanner (Tenable/Qualys/Rapid7); Patch management (SCCM/Intune/Ansible); CMDB / asset inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the configuration drift monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Vuln scanner (Tenable/Qualys/Rapid7)",
        "Patch management (SCCM/Intune/Ansible)",
        "CMDB / asset inventory",
        "CISA KEV feed"
      ],
      "dataOwner": [
        "IT Operations",
        "Server / endpoint owners",
        "Security operations",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Vulnerability & Patch Management controls."
      }
    },
    "badge": {
      "id": "vpm-03-badge",
      "name": "Vulnerability & Patch Management Auditor",
      "emoji": "🩹"
    },
    "wonder": {
      "name": "Configuration drift monitoring",
      "location": "Vulnerability & Patch Management",
      "era": "Present Day",
      "emoji": "🩹"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Configuration drift monitoring\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the configuration drift monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7))) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Configuration drift monitoring\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the configuration drift monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Configuration drift monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_configuration_drift_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vuln scanner (Tenable/Qualys/Rapid7) and Patch management (SCCM/Intune/Ansible) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_configuration_drift_monitoring_mcp.py` to expose it to your agent — or `python 03_configuration_drift_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A known, patchable CVE left open",
        "when": "2017",
        "where": "Internet-facing enterprise application",
        "impact": "A critical vulnerability with an available patch went unremediated within the exposure window and was exploited.",
        "body": [
          "The dominant breach root cause is not zero-days but known, patchable vulnerabilities left open past a reasonable SLA — Equifax's Struts CVE is the textbook case.",
          "Auditors test that vulnerabilities are discovered, prioritized (KEV/EPSS-aware), remediated within SLA, and that exceptions are risk-accepted and time-boxed."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Vulnerability & Patch Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vuln scanner (Tenable/Qualys/Rapid7) · Patch management (SCCM/Intune/Ansible)",
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
          "event": "Equifax: unpatched CVE-2017-5638 exploited",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "CISA BOD 22-01 mandates KEV remediation timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Configuration drift monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the configuration drift monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7)).",
        "The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Configuration drift monitoring\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the configuration drift monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CISA Known Exploited Vulnerabilities",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "NIST SP 800-40 — Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CIS Control 7 — Continuous Vulnerability Mgmt",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_configuration_drift_monitoring_mcp.py",
          "url": "/audit-code/vuln-patch/03_configuration_drift_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Configuration drift monitoring\" (in-scope inventory for the configuration drift monitoring control (from vuln scanner (tenable/qualys/rapid7))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Configuration drift monitoring\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Configuration drift monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the configuration drift monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vuln scanner (Tenable/Qualys/Rapid7) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vuln scanner (Tenable/Qualys/Rapid7) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vuln scanner (Tenable/Qualys/Rapid7); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Configuration drift monitoring\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Configuration drift monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — In-scope inventory for the configuration drift monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7)))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Configuration drift monitoring\",\n  \"domain\": \"Vulnerability & Patch Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{vpm_",
        "/evidence/vuln-patch_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IT Operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Configuration drift monitoring\" control must cover\n# fragment: configuration_drift_monitoring_",
        "/evidence/vuln-patch_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "vuln-patch_inventory.json",
            "isDir": false
          },
          {
            "name": "vuln-patch_state.json",
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
          "value": "FLAG{vpm_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/vuln-patch_inventory.json",
          "value": "configuration_drift_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/vuln-patch_state.json",
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
          "id": "vpm-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Configuration drift monitoring\" sub-process of Vulnerability & Patch Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the configuration drift monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "vpm-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Configuration drift monitoring\" matter to the broader Vulnerability & Patch Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Vulnerability & Patch Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "vpm-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Configuration drift monitoring\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the configuration drift monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "vpm-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Configuration drift monitoring\"?",
          "options": [
            "Vuln scanner (Tenable/Qualys/Rapid7) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Vuln scanner (Tenable/Qualys/Rapid7)) via read-only access."
        },
        {
          "id": "vpm-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Configuration drift monitoring\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT Operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "vpm-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Configuration drift monitoring\", which part stays with the human auditor?",
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
          "id": "vpm-03-q7",
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
          "id": "vpm-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Configuration drift monitoring\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the configuration drift monitoring control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the configuration drift monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "vpm-03-q9",
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
          "id": "vpm-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Configuration drift monitoring\" also serve privacy and regulatory goals?",
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
    "epochId": "vuln-patch",
    "id": "vpm-04",
    "order": 4,
    "title": "Administrative access controls",
    "subtitle": "Agentic technical & privacy audit of the administrative access controls control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Administrative access controls\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Administrative access controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Vuln scanner (Tenable/Qualys/Rapid7); Patch management (SCCM/Intune/Ansible); CMDB / asset inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the administrative access controls control (from Vuln scanner (Tenable/Qualys/Rapid7))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Vuln scanner (Tenable/Qualys/Rapid7)",
        "Patch management (SCCM/Intune/Ansible)",
        "CMDB / asset inventory",
        "CISA KEV feed"
      ],
      "dataOwner": [
        "IT Operations",
        "Server / endpoint owners",
        "Security operations",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Vulnerability & Patch Management controls."
      }
    },
    "badge": {
      "id": "vpm-04-badge",
      "name": "Vulnerability & Patch Management Auditor",
      "emoji": "🩹"
    },
    "wonder": {
      "name": "Administrative access controls",
      "location": "Vulnerability & Patch Management",
      "era": "Present Day",
      "emoji": "🩹"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Administrative access controls\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the administrative access controls control (from Vuln scanner (Tenable/Qualys/Rapid7))) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Administrative access controls\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the administrative access controls control (from Vuln scanner (Tenable/Qualys/Rapid7)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Administrative access controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_administrative_access_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vuln scanner (Tenable/Qualys/Rapid7) and Patch management (SCCM/Intune/Ansible) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_administrative_access_controls_mcp.py` to expose it to your agent — or `python 04_administrative_access_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A known, patchable CVE left open",
        "when": "2017",
        "where": "Internet-facing enterprise application",
        "impact": "A critical vulnerability with an available patch went unremediated within the exposure window and was exploited.",
        "body": [
          "The dominant breach root cause is not zero-days but known, patchable vulnerabilities left open past a reasonable SLA — Equifax's Struts CVE is the textbook case.",
          "Auditors test that vulnerabilities are discovered, prioritized (KEV/EPSS-aware), remediated within SLA, and that exceptions are risk-accepted and time-boxed."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Vulnerability & Patch Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vuln scanner (Tenable/Qualys/Rapid7) · Patch management (SCCM/Intune/Ansible)",
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
          "event": "Equifax: unpatched CVE-2017-5638 exploited",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "CISA BOD 22-01 mandates KEV remediation timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Administrative access controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the administrative access controls control (from Vuln scanner (Tenable/Qualys/Rapid7)).",
        "The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Administrative access controls\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the administrative access controls control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CISA Known Exploited Vulnerabilities",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "NIST SP 800-40 — Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CIS Control 7 — Continuous Vulnerability Mgmt",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_administrative_access_controls_mcp.py",
          "url": "/audit-code/vuln-patch/04_administrative_access_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Administrative access controls\" (in-scope inventory for the administrative access controls control (from vuln scanner (tenable/qualys/rapid7))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Administrative access controls\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Administrative access controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the administrative access controls control (from Vuln scanner (Tenable/Qualys/Rapid7)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vuln scanner (Tenable/Qualys/Rapid7) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vuln scanner (Tenable/Qualys/Rapid7) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vuln scanner (Tenable/Qualys/Rapid7); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Administrative access controls\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Administrative access controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — In-scope inventory for the administrative access controls control (from Vuln scanner (Tenable/Qualys/Rapid7)))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Administrative access controls\",\n  \"domain\": \"Vulnerability & Patch Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{vpm_",
        "/evidence/vuln-patch_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IT Operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Administrative access controls\" control must cover\n# fragment: administrative_access_controls_",
        "/evidence/vuln-patch_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "vuln-patch_inventory.json",
            "isDir": false
          },
          {
            "name": "vuln-patch_state.json",
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
          "value": "FLAG{vpm_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/vuln-patch_inventory.json",
          "value": "administrative_access_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/vuln-patch_state.json",
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
          "id": "vpm-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Administrative access controls\" sub-process of Vulnerability & Patch Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the administrative access controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "vpm-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Administrative access controls\" matter to the broader Vulnerability & Patch Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Vulnerability & Patch Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "vpm-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Administrative access controls\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the administrative access controls control (from Vuln scanner (Tenable/Qualys/Rapid7)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "vpm-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Administrative access controls\"?",
          "options": [
            "Vuln scanner (Tenable/Qualys/Rapid7) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Vuln scanner (Tenable/Qualys/Rapid7)) via read-only access."
        },
        {
          "id": "vpm-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Administrative access controls\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT Operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "vpm-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Administrative access controls\", which part stays with the human auditor?",
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
          "id": "vpm-04-q7",
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
          "id": "vpm-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Administrative access controls\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the administrative access controls control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the administrative access controls control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "vpm-04-q9",
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
          "id": "vpm-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Administrative access controls\" also serve privacy and regulatory goals?",
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
    "epochId": "vuln-patch",
    "id": "vpm-05",
    "order": 5,
    "title": "Vulnerability management",
    "subtitle": "Agentic technical & privacy audit of the vulnerability management control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vulnerability management\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Vuln scanner (Tenable/Qualys/Rapid7); Patch management (SCCM/Intune/Ansible); CMDB / asset inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vulnerability management control (from Vuln scanner (Tenable/Qualys/Rapid7))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Vuln scanner (Tenable/Qualys/Rapid7)",
        "Patch management (SCCM/Intune/Ansible)",
        "CMDB / asset inventory",
        "CISA KEV feed"
      ],
      "dataOwner": [
        "IT Operations",
        "Server / endpoint owners",
        "Security operations",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Vulnerability & Patch Management controls."
      }
    },
    "badge": {
      "id": "vpm-05-badge",
      "name": "Vulnerability & Patch Management Auditor",
      "emoji": "🩹"
    },
    "wonder": {
      "name": "Vulnerability management",
      "location": "Vulnerability & Patch Management",
      "era": "Present Day",
      "emoji": "🩹"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vulnerability management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vulnerability management control (from Vuln scanner (Tenable/Qualys/Rapid7))) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Vulnerability management\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vulnerability management control (from Vuln scanner (Tenable/Qualys/Rapid7)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_vulnerability_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vuln scanner (Tenable/Qualys/Rapid7) and Patch management (SCCM/Intune/Ansible) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_vulnerability_management_mcp.py` to expose it to your agent — or `python 05_vulnerability_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A known, patchable CVE left open",
        "when": "2017",
        "where": "Internet-facing enterprise application",
        "impact": "A critical vulnerability with an available patch went unremediated within the exposure window and was exploited.",
        "body": [
          "The dominant breach root cause is not zero-days but known, patchable vulnerabilities left open past a reasonable SLA — Equifax's Struts CVE is the textbook case.",
          "Auditors test that vulnerabilities are discovered, prioritized (KEV/EPSS-aware), remediated within SLA, and that exceptions are risk-accepted and time-boxed."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Vulnerability & Patch Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vuln scanner (Tenable/Qualys/Rapid7) · Patch management (SCCM/Intune/Ansible)",
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
          "event": "Equifax: unpatched CVE-2017-5638 exploited",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "CISA BOD 22-01 mandates KEV remediation timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vulnerability management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vulnerability management control (from Vuln scanner (Tenable/Qualys/Rapid7)).",
        "The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Vulnerability management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vulnerability management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CISA Known Exploited Vulnerabilities",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "NIST SP 800-40 — Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CIS Control 7 — Continuous Vulnerability Mgmt",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_vulnerability_management_mcp.py",
          "url": "/audit-code/vuln-patch/05_vulnerability_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Vulnerability management\" (in-scope inventory for the vulnerability management control (from vuln scanner (tenable/qualys/rapid7))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vulnerability management\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vulnerability management control (from Vuln scanner (Tenable/Qualys/Rapid7)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vuln scanner (Tenable/Qualys/Rapid7) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vuln scanner (Tenable/Qualys/Rapid7) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vuln scanner (Tenable/Qualys/Rapid7); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Vulnerability management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — In-scope inventory for the vulnerability management control (from Vuln scanner (Tenable/Qualys/Rapid7)))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vulnerability management\",\n  \"domain\": \"Vulnerability & Patch Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{vpm_",
        "/evidence/vuln-patch_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IT Operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vulnerability management\" control must cover\n# fragment: vulnerability_management_",
        "/evidence/vuln-patch_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "vuln-patch_inventory.json",
            "isDir": false
          },
          {
            "name": "vuln-patch_state.json",
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
          "value": "FLAG{vpm_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/vuln-patch_inventory.json",
          "value": "vulnerability_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/vuln-patch_state.json",
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
          "id": "vpm-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vulnerability management\" sub-process of Vulnerability & Patch Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the vulnerability management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "vpm-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vulnerability management\" matter to the broader Vulnerability & Patch Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Vulnerability & Patch Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "vpm-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vulnerability management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the vulnerability management control (from Vuln scanner (Tenable/Qualys/Rapid7)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "vpm-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Vulnerability management\"?",
          "options": [
            "Vuln scanner (Tenable/Qualys/Rapid7) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Vuln scanner (Tenable/Qualys/Rapid7)) via read-only access."
        },
        {
          "id": "vpm-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vulnerability management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT Operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "vpm-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vulnerability management\", which part stays with the human auditor?",
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
          "id": "vpm-05-q7",
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
          "id": "vpm-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vulnerability management\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the vulnerability management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vulnerability management control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "vpm-05-q9",
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
          "id": "vpm-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vulnerability management\" also serve privacy and regulatory goals?",
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
    "epochId": "vuln-patch",
    "id": "vpm-06",
    "order": 6,
    "title": "Host event logging and monitoring",
    "subtitle": "Agentic technical & privacy audit of the host event logging and monitoring control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Host event logging and monitoring\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Host event logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Vuln scanner (Tenable/Qualys/Rapid7); Patch management (SCCM/Intune/Ansible); CMDB / asset inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the host event logging and monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Vuln scanner (Tenable/Qualys/Rapid7)",
        "Patch management (SCCM/Intune/Ansible)",
        "CMDB / asset inventory",
        "CISA KEV feed"
      ],
      "dataOwner": [
        "IT Operations",
        "Server / endpoint owners",
        "Security operations",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Vulnerability & Patch Management controls."
      }
    },
    "badge": {
      "id": "vpm-06-badge",
      "name": "Vulnerability & Patch Management Auditor",
      "emoji": "🩹"
    },
    "wonder": {
      "name": "Host event logging and monitoring",
      "location": "Vulnerability & Patch Management",
      "era": "Present Day",
      "emoji": "🩹"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Host event logging and monitoring\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the host event logging and monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7))) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Host event logging and monitoring\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the host event logging and monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Host event logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_host_event_logging_and_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vuln scanner (Tenable/Qualys/Rapid7) and Patch management (SCCM/Intune/Ansible) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_host_event_logging_and_monitoring_mcp.py` to expose it to your agent — or `python 06_host_event_logging_and_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A known, patchable CVE left open",
        "when": "2017",
        "where": "Internet-facing enterprise application",
        "impact": "A critical vulnerability with an available patch went unremediated within the exposure window and was exploited.",
        "body": [
          "The dominant breach root cause is not zero-days but known, patchable vulnerabilities left open past a reasonable SLA — Equifax's Struts CVE is the textbook case.",
          "Auditors test that vulnerabilities are discovered, prioritized (KEV/EPSS-aware), remediated within SLA, and that exceptions are risk-accepted and time-boxed."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Vulnerability & Patch Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vuln scanner (Tenable/Qualys/Rapid7) · Patch management (SCCM/Intune/Ansible)",
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
          "event": "Equifax: unpatched CVE-2017-5638 exploited",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "CISA BOD 22-01 mandates KEV remediation timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Host event logging and monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the host event logging and monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7)).",
        "The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Host event logging and monitoring\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the host event logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CISA Known Exploited Vulnerabilities",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "NIST SP 800-40 — Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CIS Control 7 — Continuous Vulnerability Mgmt",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_host_event_logging_and_monitoring_mcp.py",
          "url": "/audit-code/vuln-patch/06_host_event_logging_and_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Host event logging and monitoring\" (in-scope inventory for the host event logging and monitoring control (from vuln scanner (tenable/qualys/rapid7))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Host event logging and monitoring\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Host event logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the host event logging and monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vuln scanner (Tenable/Qualys/Rapid7) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vuln scanner (Tenable/Qualys/Rapid7) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vuln scanner (Tenable/Qualys/Rapid7); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Host event logging and monitoring\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Host event logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — In-scope inventory for the host event logging and monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7)))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Host event logging and monitoring\",\n  \"domain\": \"Vulnerability & Patch Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{vpm_",
        "/evidence/vuln-patch_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IT Operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Host event logging and monitoring\" control must cover\n# fragment: host_event_logging_",
        "/evidence/vuln-patch_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "vuln-patch_inventory.json",
            "isDir": false
          },
          {
            "name": "vuln-patch_state.json",
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
          "value": "FLAG{vpm_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/vuln-patch_inventory.json",
          "value": "host_event_logging_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/vuln-patch_state.json",
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
          "id": "vpm-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Host event logging and monitoring\" sub-process of Vulnerability & Patch Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the host event logging and monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "vpm-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Host event logging and monitoring\" matter to the broader Vulnerability & Patch Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Vulnerability & Patch Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "vpm-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Host event logging and monitoring\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the host event logging and monitoring control (from Vuln scanner (Tenable/Qualys/Rapid7)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "vpm-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Host event logging and monitoring\"?",
          "options": [
            "Vuln scanner (Tenable/Qualys/Rapid7) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Vuln scanner (Tenable/Qualys/Rapid7)) via read-only access."
        },
        {
          "id": "vpm-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Host event logging and monitoring\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT Operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "vpm-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Host event logging and monitoring\", which part stays with the human auditor?",
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
          "id": "vpm-06-q7",
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
          "id": "vpm-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Host event logging and monitoring\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the host event logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the host event logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "vpm-06-q9",
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
          "id": "vpm-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Host event logging and monitoring\" also serve privacy and regulatory goals?",
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
    "epochId": "vuln-patch",
    "id": "vpm-07",
    "order": 7,
    "title": "Red and blue teaming",
    "subtitle": "Agentic technical & privacy audit of the red and blue teaming control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Red and blue teaming\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Red and blue teaming\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Vuln scanner (Tenable/Qualys/Rapid7); Patch management (SCCM/Intune/Ansible); CMDB / asset inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the red and blue teaming control (from Vuln scanner (Tenable/Qualys/Rapid7))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Vuln scanner (Tenable/Qualys/Rapid7)",
        "Patch management (SCCM/Intune/Ansible)",
        "CMDB / asset inventory",
        "CISA KEV feed"
      ],
      "dataOwner": [
        "IT Operations",
        "Server / endpoint owners",
        "Security operations",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Vulnerability & Patch Management controls."
      }
    },
    "badge": {
      "id": "vpm-07-badge",
      "name": "Vulnerability & Patch Management Auditor",
      "emoji": "🩹"
    },
    "wonder": {
      "name": "Red and blue teaming",
      "location": "Vulnerability & Patch Management",
      "era": "Present Day",
      "emoji": "🩹"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Red and blue teaming\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the red and blue teaming control (from Vuln scanner (Tenable/Qualys/Rapid7))) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Red and blue teaming\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the red and blue teaming control (from Vuln scanner (Tenable/Qualys/Rapid7)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Red and blue teaming\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_red_and_blue_teaming_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vuln scanner (Tenable/Qualys/Rapid7) and Patch management (SCCM/Intune/Ansible) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_red_and_blue_teaming_mcp.py` to expose it to your agent — or `python 07_red_and_blue_teaming_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A known, patchable CVE left open",
        "when": "2017",
        "where": "Internet-facing enterprise application",
        "impact": "A critical vulnerability with an available patch went unremediated within the exposure window and was exploited.",
        "body": [
          "The dominant breach root cause is not zero-days but known, patchable vulnerabilities left open past a reasonable SLA — Equifax's Struts CVE is the textbook case.",
          "Auditors test that vulnerabilities are discovered, prioritized (KEV/EPSS-aware), remediated within SLA, and that exceptions are risk-accepted and time-boxed."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Vulnerability & Patch Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vuln scanner (Tenable/Qualys/Rapid7) · Patch management (SCCM/Intune/Ansible)",
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
          "event": "Equifax: unpatched CVE-2017-5638 exploited",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "CISA BOD 22-01 mandates KEV remediation timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Red and blue teaming\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the red and blue teaming control (from Vuln scanner (Tenable/Qualys/Rapid7)).",
        "The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Red and blue teaming\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the red and blue teaming control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CISA Known Exploited Vulnerabilities",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "NIST SP 800-40 — Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CIS Control 7 — Continuous Vulnerability Mgmt",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_red_and_blue_teaming_mcp.py",
          "url": "/audit-code/vuln-patch/07_red_and_blue_teaming_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Red and blue teaming\" (in-scope inventory for the red and blue teaming control (from vuln scanner (tenable/qualys/rapid7))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Red and blue teaming\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Red and blue teaming\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the red and blue teaming control (from Vuln scanner (Tenable/Qualys/Rapid7)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vuln scanner (Tenable/Qualys/Rapid7) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vuln scanner (Tenable/Qualys/Rapid7) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vuln scanner (Tenable/Qualys/Rapid7); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Red and blue teaming\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Red and blue teaming\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — In-scope inventory for the red and blue teaming control (from Vuln scanner (Tenable/Qualys/Rapid7)))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Red and blue teaming\",\n  \"domain\": \"Vulnerability & Patch Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{vpm_",
        "/evidence/vuln-patch_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IT Operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Red and blue teaming\" control must cover\n# fragment: red_blue_teaming_",
        "/evidence/vuln-patch_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "vuln-patch_inventory.json",
            "isDir": false
          },
          {
            "name": "vuln-patch_state.json",
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
          "value": "FLAG{vpm_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/vuln-patch_inventory.json",
          "value": "red_blue_teaming_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/vuln-patch_state.json",
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
          "id": "vpm-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Red and blue teaming\" sub-process of Vulnerability & Patch Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the red and blue teaming control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "vpm-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Red and blue teaming\" matter to the broader Vulnerability & Patch Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Vulnerability & Patch Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "vpm-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Red and blue teaming\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the red and blue teaming control (from Vuln scanner (Tenable/Qualys/Rapid7)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "vpm-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Red and blue teaming\"?",
          "options": [
            "Vuln scanner (Tenable/Qualys/Rapid7) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Vuln scanner (Tenable/Qualys/Rapid7)) via read-only access."
        },
        {
          "id": "vpm-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Red and blue teaming\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT Operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "vpm-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Red and blue teaming\", which part stays with the human auditor?",
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
          "id": "vpm-07-q7",
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
          "id": "vpm-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Red and blue teaming\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the red and blue teaming control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the red and blue teaming control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "vpm-07-q9",
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
          "id": "vpm-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Red and blue teaming\" also serve privacy and regulatory goals?",
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
    "epochId": "vuln-patch",
    "id": "vpm-08",
    "order": 8,
    "title": "Malware analysis",
    "subtitle": "Agentic technical & privacy audit of the malware analysis control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Malware analysis\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Malware analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Vuln scanner (Tenable/Qualys/Rapid7); Patch management (SCCM/Intune/Ansible); CMDB / asset inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the malware analysis control (from Vuln scanner (Tenable/Qualys/Rapid7))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Vuln scanner (Tenable/Qualys/Rapid7)",
        "Patch management (SCCM/Intune/Ansible)",
        "CMDB / asset inventory",
        "CISA KEV feed"
      ],
      "dataOwner": [
        "IT Operations",
        "Server / endpoint owners",
        "Security operations",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Vulnerability & Patch Management controls."
      }
    },
    "badge": {
      "id": "vpm-08-badge",
      "name": "Vulnerability & Patch Management Auditor",
      "emoji": "🩹"
    },
    "wonder": {
      "name": "Malware analysis",
      "location": "Vulnerability & Patch Management",
      "era": "Present Day",
      "emoji": "🩹"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Malware analysis\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the malware analysis control (from Vuln scanner (Tenable/Qualys/Rapid7))) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Malware analysis\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the malware analysis control (from Vuln scanner (Tenable/Qualys/Rapid7)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Malware analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_malware_analysis_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vuln scanner (Tenable/Qualys/Rapid7) and Patch management (SCCM/Intune/Ansible) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_malware_analysis_mcp.py` to expose it to your agent — or `python 08_malware_analysis_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A known, patchable CVE left open",
        "when": "2017",
        "where": "Internet-facing enterprise application",
        "impact": "A critical vulnerability with an available patch went unremediated within the exposure window and was exploited.",
        "body": [
          "The dominant breach root cause is not zero-days but known, patchable vulnerabilities left open past a reasonable SLA — Equifax's Struts CVE is the textbook case.",
          "Auditors test that vulnerabilities are discovered, prioritized (KEV/EPSS-aware), remediated within SLA, and that exceptions are risk-accepted and time-boxed."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Vulnerability & Patch Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vuln scanner (Tenable/Qualys/Rapid7) · Patch management (SCCM/Intune/Ansible)",
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
          "event": "Equifax: unpatched CVE-2017-5638 exploited",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "CISA BOD 22-01 mandates KEV remediation timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Malware analysis\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the malware analysis control (from Vuln scanner (Tenable/Qualys/Rapid7)).",
        "The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Malware analysis\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the malware analysis control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CISA Known Exploited Vulnerabilities",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "NIST SP 800-40 — Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CIS Control 7 — Continuous Vulnerability Mgmt",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_malware_analysis_mcp.py",
          "url": "/audit-code/vuln-patch/08_malware_analysis_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Malware analysis\" (in-scope inventory for the malware analysis control (from vuln scanner (tenable/qualys/rapid7))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Malware analysis\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Malware analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the malware analysis control (from Vuln scanner (Tenable/Qualys/Rapid7)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vuln scanner (Tenable/Qualys/Rapid7) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vuln scanner (Tenable/Qualys/Rapid7) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vuln scanner (Tenable/Qualys/Rapid7); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Malware analysis\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"Malware analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — In-scope inventory for the malware analysis control (from Vuln scanner (Tenable/Qualys/Rapid7)))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Malware analysis\",\n  \"domain\": \"Vulnerability & Patch Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{vpm_",
        "/evidence/vuln-patch_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IT Operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Malware analysis\" control must cover\n# fragment: malware_analysis_",
        "/evidence/vuln-patch_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "vuln-patch_inventory.json",
            "isDir": false
          },
          {
            "name": "vuln-patch_state.json",
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
          "value": "FLAG{vpm_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/vuln-patch_inventory.json",
          "value": "malware_analysis_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/vuln-patch_state.json",
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
          "id": "vpm-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Malware analysis\" sub-process of Vulnerability & Patch Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the malware analysis control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "vpm-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Malware analysis\" matter to the broader Vulnerability & Patch Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Vulnerability & Patch Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "vpm-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Malware analysis\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the malware analysis control (from Vuln scanner (Tenable/Qualys/Rapid7)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "vpm-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Malware analysis\"?",
          "options": [
            "Vuln scanner (Tenable/Qualys/Rapid7) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Vuln scanner (Tenable/Qualys/Rapid7)) via read-only access."
        },
        {
          "id": "vpm-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Malware analysis\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT Operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "vpm-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Malware analysis\", which part stays with the human auditor?",
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
          "id": "vpm-08-q7",
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
          "id": "vpm-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Malware analysis\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the malware analysis control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the malware analysis control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "vpm-08-q9",
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
          "id": "vpm-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Malware analysis\" also serve privacy and regulatory goals?",
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
    "epochId": "vuln-patch",
    "id": "vpm-09",
    "order": 9,
    "title": "AI for red teaming",
    "subtitle": "Agentic technical & privacy audit of the ai for red teaming control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI for red teaming\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"AI for red teaming\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Vuln scanner (Tenable/Qualys/Rapid7); Patch management (SCCM/Intune/Ansible); CMDB / asset inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ai for red teaming control (from Vuln scanner (Tenable/Qualys/Rapid7))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Vuln scanner (Tenable/Qualys/Rapid7)",
        "Patch management (SCCM/Intune/Ansible)",
        "CMDB / asset inventory",
        "CISA KEV feed"
      ],
      "dataOwner": [
        "IT Operations",
        "Server / endpoint owners",
        "Security operations",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Vulnerability & Patch Management controls."
      }
    },
    "badge": {
      "id": "vpm-09-badge",
      "name": "Vulnerability & Patch Management Auditor",
      "emoji": "🩹"
    },
    "wonder": {
      "name": "AI for red teaming",
      "location": "Vulnerability & Patch Management",
      "era": "Present Day",
      "emoji": "🩹"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI for red teaming\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ai for red teaming control (from Vuln scanner (Tenable/Qualys/Rapid7))) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"AI for red teaming\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ai for red teaming control (from Vuln scanner (Tenable/Qualys/Rapid7)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"AI for red teaming\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_ai_for_red_teaming_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vuln scanner (Tenable/Qualys/Rapid7) and Patch management (SCCM/Intune/Ansible) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_ai_for_red_teaming_mcp.py` to expose it to your agent — or `python 09_ai_for_red_teaming_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A known, patchable CVE left open",
        "when": "2017",
        "where": "Internet-facing enterprise application",
        "impact": "A critical vulnerability with an available patch went unremediated within the exposure window and was exploited.",
        "body": [
          "The dominant breach root cause is not zero-days but known, patchable vulnerabilities left open past a reasonable SLA — Equifax's Struts CVE is the textbook case.",
          "Auditors test that vulnerabilities are discovered, prioritized (KEV/EPSS-aware), remediated within SLA, and that exceptions are risk-accepted and time-boxed."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Vulnerability & Patch Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vuln scanner (Tenable/Qualys/Rapid7) · Patch management (SCCM/Intune/Ansible)",
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
          "event": "Equifax: unpatched CVE-2017-5638 exploited",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "CISA BOD 22-01 mandates KEV remediation timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI for red teaming\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ai for red teaming control (from Vuln scanner (Tenable/Qualys/Rapid7)).",
        "The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"AI for red teaming\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ai for red teaming control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CISA Known Exploited Vulnerabilities",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "NIST SP 800-40 — Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CIS Control 7 — Continuous Vulnerability Mgmt",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_ai_for_red_teaming_mcp.py",
          "url": "/audit-code/vuln-patch/09_ai_for_red_teaming_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"AI for red teaming\" (in-scope inventory for the ai for red teaming control (from vuln scanner (tenable/qualys/rapid7))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI for red teaming\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"AI for red teaming\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ai for red teaming control (from Vuln scanner (Tenable/Qualys/Rapid7)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vuln scanner (Tenable/Qualys/Rapid7) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vuln scanner (Tenable/Qualys/Rapid7) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vuln scanner (Tenable/Qualys/Rapid7); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"AI for red teaming\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"AI for red teaming\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — In-scope inventory for the ai for red teaming control (from Vuln scanner (Tenable/Qualys/Rapid7)))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI for red teaming\",\n  \"domain\": \"Vulnerability & Patch Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{vpm_",
        "/evidence/vuln-patch_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IT Operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI for red teaming\" control must cover\n# fragment: ai_red_teaming_",
        "/evidence/vuln-patch_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "vuln-patch_inventory.json",
            "isDir": false
          },
          {
            "name": "vuln-patch_state.json",
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
          "value": "FLAG{vpm_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/vuln-patch_inventory.json",
          "value": "ai_red_teaming_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/vuln-patch_state.json",
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
          "id": "vpm-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI for red teaming\" sub-process of Vulnerability & Patch Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ai for red teaming control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "vpm-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI for red teaming\" matter to the broader Vulnerability & Patch Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Vulnerability & Patch Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "vpm-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI for red teaming\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ai for red teaming control (from Vuln scanner (Tenable/Qualys/Rapid7)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "vpm-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AI for red teaming\"?",
          "options": [
            "Vuln scanner (Tenable/Qualys/Rapid7) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Vuln scanner (Tenable/Qualys/Rapid7)) via read-only access."
        },
        {
          "id": "vpm-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI for red teaming\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT Operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "vpm-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI for red teaming\", which part stays with the human auditor?",
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
          "id": "vpm-09-q7",
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
          "id": "vpm-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI for red teaming\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ai for red teaming control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ai for red teaming control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "vpm-09-q9",
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
          "id": "vpm-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI for red teaming\" also serve privacy and regulatory goals?",
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
    "epochId": "vuln-patch",
    "id": "vpm-10",
    "order": 10,
    "title": "STE — cloud infra vuln tickets",
    "subtitle": "Agentic technical & privacy audit of the ste — cloud infra vuln tickets control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"STE — cloud infra vuln tickets\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"STE — cloud infra vuln tickets\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Vuln scanner (Tenable/Qualys/Rapid7); Patch management (SCCM/Intune/Ansible); CMDB / asset inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ste — cloud infra vuln tickets control (from Vuln scanner (Tenable/Qualys/Rapid7))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Vuln scanner (Tenable/Qualys/Rapid7)",
        "Patch management (SCCM/Intune/Ansible)",
        "CMDB / asset inventory",
        "CISA KEV feed"
      ],
      "dataOwner": [
        "IT Operations",
        "Server / endpoint owners",
        "Security operations",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Vulnerability & Patch Management controls."
      }
    },
    "badge": {
      "id": "vpm-10-badge",
      "name": "Vulnerability & Patch Management Auditor",
      "emoji": "🩹"
    },
    "wonder": {
      "name": "STE — cloud infra vuln tickets",
      "location": "Vulnerability & Patch Management",
      "era": "Present Day",
      "emoji": "🩹"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"STE — cloud infra vuln tickets\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ste — cloud infra vuln tickets control (from Vuln scanner (Tenable/Qualys/Rapid7))) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"STE — cloud infra vuln tickets\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ste — cloud infra vuln tickets control (from Vuln scanner (Tenable/Qualys/Rapid7)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"STE — cloud infra vuln tickets\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_ste_cloud_infra_vuln_tickets_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vuln scanner (Tenable/Qualys/Rapid7) and Patch management (SCCM/Intune/Ansible) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_ste_cloud_infra_vuln_tickets_mcp.py` to expose it to your agent — or `python 10_ste_cloud_infra_vuln_tickets_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A known, patchable CVE left open",
        "when": "2017",
        "where": "Internet-facing enterprise application",
        "impact": "A critical vulnerability with an available patch went unremediated within the exposure window and was exploited.",
        "body": [
          "The dominant breach root cause is not zero-days but known, patchable vulnerabilities left open past a reasonable SLA — Equifax's Struts CVE is the textbook case.",
          "Auditors test that vulnerabilities are discovered, prioritized (KEV/EPSS-aware), remediated within SLA, and that exceptions are risk-accepted and time-boxed."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Vulnerability & Patch Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vuln scanner (Tenable/Qualys/Rapid7) · Patch management (SCCM/Intune/Ansible)",
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
          "event": "Equifax: unpatched CVE-2017-5638 exploited",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "CISA BOD 22-01 mandates KEV remediation timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"STE — cloud infra vuln tickets\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ste — cloud infra vuln tickets control (from Vuln scanner (Tenable/Qualys/Rapid7)).",
        "The test: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"STE — cloud infra vuln tickets\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Vuln scanner (Tenable/Qualys/Rapid7), Patch management (SCCM/Intune/Ansible), CMDB / asset inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ste — cloud infra vuln tickets control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CISA Known Exploited Vulnerabilities",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "NIST SP 800-40 — Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CIS Control 7 — Continuous Vulnerability Mgmt",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_ste_cloud_infra_vuln_tickets_mcp.py",
          "url": "/audit-code/vuln-patch/10_ste_cloud_infra_vuln_tickets_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"STE — cloud infra vuln tickets\" (in-scope inventory for the ste — cloud infra vuln tickets control (from vuln scanner (tenable/qualys/rapid7))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"STE — cloud infra vuln tickets\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"STE — cloud infra vuln tickets\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ste — cloud infra vuln tickets control (from Vuln scanner (Tenable/Qualys/Rapid7)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vuln scanner (Tenable/Qualys/Rapid7) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vuln scanner (Tenable/Qualys/Rapid7) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vuln scanner (Tenable/Qualys/Rapid7); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"STE — cloud infra vuln tickets\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Vulnerability & Patch Management policy/standard and flag every item where the \"STE — cloud infra vuln tickets\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — In-scope inventory for the ste — cloud infra vuln tickets control (from Vuln scanner (Tenable/Qualys/Rapid7)))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"STE — cloud infra vuln tickets\",\n  \"domain\": \"Vulnerability & Patch Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{vpm_",
        "/evidence/vuln-patch_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IT Operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"STE — cloud infra vuln tickets\" control must cover\n# fragment: ste_cloud_infra_",
        "/evidence/vuln-patch_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "vuln-patch_inventory.json",
            "isDir": false
          },
          {
            "name": "vuln-patch_state.json",
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
          "value": "FLAG{vpm_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/vuln-patch_inventory.json",
          "value": "ste_cloud_infra_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/vuln-patch_state.json",
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
          "id": "vpm-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"STE — cloud infra vuln tickets\" sub-process of Vulnerability & Patch Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ste — cloud infra vuln tickets control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "vpm-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"STE — cloud infra vuln tickets\" matter to the broader Vulnerability & Patch Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Vulnerability & Patch Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "vpm-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"STE — cloud infra vuln tickets\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ste — cloud infra vuln tickets control (from Vuln scanner (Tenable/Qualys/Rapid7)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "vpm-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"STE — cloud infra vuln tickets\"?",
          "options": [
            "Vuln scanner (Tenable/Qualys/Rapid7) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Vuln scanner (Tenable/Qualys/Rapid7)) via read-only access."
        },
        {
          "id": "vpm-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"STE — cloud infra vuln tickets\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT Operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "vpm-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"STE — cloud infra vuln tickets\", which part stays with the human auditor?",
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
          "id": "vpm-10-q7",
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
          "id": "vpm-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"STE — cloud infra vuln tickets\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ste — cloud infra vuln tickets control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ste — cloud infra vuln tickets control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "vpm-10-q9",
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
          "id": "vpm-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"STE — cloud infra vuln tickets\" also serve privacy and regulatory goals?",
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
