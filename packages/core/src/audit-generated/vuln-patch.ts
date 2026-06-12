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
      "objective": "Prove the \"Server build standards and hardening\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Scan every in-scope server against the approved hardening baseline (CIS Benchmark / DISA STIG for that OS). PASS: each server is built from the current golden image and scores at or above the agreed threshold (e.g. ≥90% CIS Level 1), with documented, time-boxed exceptions for the remainder. Exceptions: servers built off-image or never hardened, baselines scoring below threshold, and 'temporary' exceptions with no expiry.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner); The image pipeline — Packer / golden AMI / VM template; CMDB (the authoritative in-scope server list)) as tools — e.g. `CIS-CAT Pro Assessor run against the CIS Benchmark for each OS (machin`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The approved hardening baseline per OS (the CIS Benchmark level or DISA STIG the org committed to)",
        "A configuration-compliance scan of in-scope servers scored against that baseline",
        "The golden-image definition with its build date/version (what new servers are built from)",
        "The exception register for accepted deviations from the baseline"
      ],
      "system": [
        "CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner)",
        "The image pipeline — Packer / golden AMI / VM template",
        "CMDB (the authoritative in-scope server list)"
      ],
      "dataOwner": [
        "IT Operations / Platform engineering — owns the build",
        "Security engineering — owns the baseline standard",
        "Server owners — own any exceptions"
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
      "tagline": "Auditing \"Server build standards and hardening\" as a repeatable agentic workflow: pull the real evidence (The approved hardening baseline per OS (the CIS Benchmark level or DISA STIG the org committed to)) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Server build standards and hardening\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the approved hardening baseline per OS (the CIS Benchmark level or DISA STIG the org committed to), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner), The image pipeline — Packer / golden AMI / VM template, CMDB (the authoritative in-scope server list) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `CIS-CAT Pro Assessor run against the CIS Benchmark for each OS (machine-readable` — read-only, against the systems of record.",
        "The test itself is specific. Scan every in-scope server against the approved hardening baseline (CIS Benchmark / DISA STIG for that OS). PASS: each server is built from the current golden image and scores at or above the agreed threshold (e.g. ≥90% CIS Level 1), with documented, time-boxed exceptions for the remainder. Exceptions: servers built off-image or never hardened, baselines scoring below threshold, and 'temporary' exceptions with no expiry. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_server_build_standards_and_hardening_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner) and The image pipeline — Packer / golden AMI / VM template (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner) · The image pipeline — Packer / golden AMI / VM template",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "CIS-CAT Pro Assessor run against the CIS Benchmark for each OS (machine-readable score)\nTenable.sc audit policy ('CIS …' / 'DISA STIG …') or Qualys Policy Compliance scan\nAWS:  compare each instance's running AMI id against the approved golden-AMI list\nChef InSpec / Ansible compliance profile run against the baseline"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The approved hardening baseline per OS (the CIS Benchmark level or DISA STIG the org committed to).",
        "The test: Scan every in-scope server against the approved hardening baseline (CIS Benchmark / DISA STIG for that OS).",
        "Reconcile the systems of record (CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner), The image pipeline — Packer / golden AMI / VM template, CMDB (the authoritative in-scope server list)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A subset of production servers built from a two-year-old image scoring ~60% against CIS Level 1 — SSH root login enabled, weak ciphers, and no host firewall."
      ],
      "references": [
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "DISA STIGs",
          "url": "https://public.cyber.mil/stigs/"
        },
        {
          "title": "NIST SP 800-123 Server Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/123/final"
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
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Server build standards and hardening\" (the approved hardening baseline per os (the cis benchmark level or disa stig the org committed to)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Server build standards and hardening\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Scan every in-scope server against the approved hardening baseline (CIS Benchmark / DISA STIG for that OS). PASS: each server is built from the current golden image and scores at or above the agreed threshold (e.g. ≥90% CIS Level 1), with documented, time-boxed exceptions for the remainder. Exceptions: servers built off-image or never hardened, baselines scoring below threshold, and 'temporary' exceptions with no expiry. The evidence — The approved hardening baseline per OS (the CIS Benchmark level or DISA STIG the org committed to) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Server build standards and hardening\" Audit Evidence\n\nThe test:\nScan every in-scope server against the approved hardening baseline (CIS Benchmark / DISA STIG for that OS). PASS: each server is built from the current golden image and scores at or above the agreed threshold (e.g. ≥90% CIS Level 1), with documented, time-boxed exceptions for the remainder. Exceptions: servers built off-image or never hardened, baselines scoring below threshold, and 'temporary' exceptions with no expiry.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — The approved hardening baseline per OS (the CIS Benchmark level or DISA STIG the org committed to))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The approved hardening baseline per OS (the CIS Benchmark level or DISA STIG the org committed to) reconciled against policy, plus the resulting findings working paper",
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
            "CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., CIS-CAT / Tenable Policy Compliance / Qualys PC (configuration-compliance scanner)) via read-only access."
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
            "IT Operations / Platform engineering — owns the build (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations / Platform engineering — owns the build owns the control data; the auditor independently verifies it."
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
            "A subset of production servers built from a two-year-old image scoring ~60% against CIS Level 1 — SSH root login enabled, weak ciphers, and no host firewall.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A subset of production servers built from a two-year-old image scoring ~60% against CIS Level 1 — SSH root login enabled, weak ciphers, and no host firewall."
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
      "objective": "Prove the \"Patch mgmt and exception handling\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile missing patches against the SLA and the KEV catalogue. PASS: every missing patch is within its severity SLA window; nothing on the CISA KEV list is open past the BOD 22-01 due date; and every overdue item has a formal, time-boxed risk acceptance with a compensating control. Exceptions: critical or KEV-listed vulnerabilities open past SLA, patches missing for months, and 'exceptions' with no owner or expiry date.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state; Vulnerability scanner (Tenable / Qualys) for missing-patch detection; CISA KEV feed) as tools — e.g. `SCCM / Intune update-compliance export per device`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The patch-compliance report by host — missing patches with severity and age",
        "The patch SLA policy (e.g. critical ≤7 days, high ≤30 days)",
        "The CISA Known Exploited Vulnerabilities (KEV) list mapped to the estate",
        "The risk-acceptance/exception register for systems that can't be patched on time"
      ],
      "system": [
        "WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state",
        "Vulnerability scanner (Tenable / Qualys) for missing-patch detection",
        "CISA KEV feed",
        "GRC / ticketing for exceptions"
      ],
      "dataOwner": [
        "IT Operations — applies the patches",
        "Security operations — tracks SLA + KEV",
        "Risk management — approves exceptions"
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
      "tagline": "Auditing \"Patch mgmt and exception handling\" as a repeatable agentic workflow: pull the real evidence (The patch-compliance report by host — missing patches with severity and age) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Patch mgmt and exception handling\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the patch-compliance report by host — missing patches with severity and age, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state, Vulnerability scanner (Tenable / Qualys) for missing-patch detection, CISA KEV feed — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SCCM / Intune update-compliance export per device` — read-only, against the systems of record.",
        "The test itself is specific. Reconcile missing patches against the SLA and the KEV catalogue. PASS: every missing patch is within its severity SLA window; nothing on the CISA KEV list is open past the BOD 22-01 due date; and every overdue item has a formal, time-boxed risk acceptance with a compensating control. Exceptions: critical or KEV-listed vulnerabilities open past SLA, patches missing for months, and 'exceptions' with no owner or expiry date. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_patch_mgmt_and_exception_handling_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state and Vulnerability scanner (Tenable / Qualys) for missing-patch detection (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state · Vulnerability scanner (Tenable / Qualys) for missing-patch detection",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "SCCM / Intune update-compliance export per device\nTenable: 'missing patch' plugin family + 'vulnerability age' field, filtered to severity\njoin scan CVEs to the CISA KEV catalogue (cisa.gov/known-exploited-vulnerabilities-catalog)\nLinux: dnf/yum updateinfo list security, apt list --upgradable across the fleet"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The patch-compliance report by host — missing patches with severity and age.",
        "The test: Reconcile missing patches against the SLA and the KEV catalogue.",
        "Reconcile the systems of record (WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state, Vulnerability scanner (Tenable / Qualys) for missing-patch detection, CISA KEV feed) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Several internet-facing hosts missing a KEV-listed critical patch for 90+ days with no risk acceptance on file — exactly the pattern behind most breaches."
      ],
      "references": [
        {
          "title": "NIST SP 800-40 Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CISA BOD 22-01 / KEV",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
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
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Patch mgmt and exception handling\" (the patch-compliance report by host — missing patches with severity and age), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Patch mgmt and exception handling\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Reconcile missing patches against the SLA and the KEV catalogue. PASS: every missing patch is within its severity SLA window; nothing on the CISA KEV list is open past the BOD 22-01 due date; and every overdue item has a formal, time-boxed risk acceptance with a compensating control. Exceptions: critical or KEV-listed vulnerabilities open past SLA, patches missing for months, and 'exceptions' with no owner or expiry date. The evidence — The patch-compliance report by host — missing patches with severity and age — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Patch mgmt and exception handling\" Audit Evidence\n\nThe test:\nReconcile missing patches against the SLA and the KEV catalogue. PASS: every missing patch is within its severity SLA window; nothing on the CISA KEV list is open past the BOD 22-01 due date; and every overdue item has a formal, time-boxed risk acceptance with a compensating control. Exceptions: critical or KEV-listed vulnerabilities open past SLA, patches missing for months, and 'exceptions' with no owner or expiry date.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — The patch-compliance report by host — missing patches with severity and age)\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The patch-compliance report by host — missing patches with severity and age reconciled against policy, plus the resulting findings working paper",
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
            "WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., WSUS / SCCM / Intune (Windows) and Satellite / Ansible (Linux) patch state) via read-only access."
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
            "IT Operations — applies the patches (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT Operations — applies the patches owns the control data; the auditor independently verifies it."
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
            "Several internet-facing hosts missing a KEV-listed critical patch for 90+ days with no risk acceptance on file — exactly the pattern behind most breaches.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Several internet-facing hosts missing a KEV-listed critical patch for 90+ days with no risk acceptance on file — exactly the pattern behind most breaches."
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
      "objective": "Prove the \"Configuration drift monitoring\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Compare running configuration to the enforced baseline. PASS: a configuration-management engine (Ansible/Chef/Puppet/AWS SSM) runs on schedule across ~100% of hosts; drift is detected and auto-remediated or ticketed within SLA; and every legitimate deviation maps to an approved change. Exceptions: hosts not under configuration management at all, drift left unremediated, and unauthorised changes (drift with no corresponding change record).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine); Drift dashboards / AWS Config; Change management (to correlate legitimate deviations)) as tools — e.g. `AWS Config rules + SSM State Manager association-compliance report`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The desired-state configuration baseline held by the CM tool",
        "Drift reports — hosts that deviated from the baseline since the last enforcement run",
        "The change record correlating to any legitimate deviation",
        "Coverage: hosts enrolled in configuration management vs total in the CMDB"
      ],
      "system": [
        "Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine)",
        "Drift dashboards / AWS Config",
        "Change management (to correlate legitimate deviations)"
      ],
      "dataOwner": [
        "Platform / SRE — owns configuration management",
        "Security engineering — owns the secure baseline",
        "Change management"
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
      "tagline": "Auditing \"Configuration drift monitoring\" as a repeatable agentic workflow: pull the real evidence (The desired-state configuration baseline held by the CM tool) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Configuration drift monitoring\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the desired-state configuration baseline held by the CM tool, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine), Drift dashboards / AWS Config, Change management (to correlate legitimate deviations) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `AWS Config rules + SSM State Manager association-compliance report` — read-only, against the systems of record.",
        "The test itself is specific. Compare running configuration to the enforced baseline. PASS: a configuration-management engine (Ansible/Chef/Puppet/AWS SSM) runs on schedule across ~100% of hosts; drift is detected and auto-remediated or ticketed within SLA; and every legitimate deviation maps to an approved change. Exceptions: hosts not under configuration management at all, drift left unremediated, and unauthorised changes (drift with no corresponding change record). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_configuration_drift_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine) and Drift dashboards / AWS Config (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine) · Drift dashboards / AWS Config",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "AWS Config rules + SSM State Manager association-compliance report\nChef Automate / Puppet 'corrective vs intentional changes' report\nlist hosts NOT enrolled in CM (CMDB minus CM inventory) — the blind spots\ncorrelate drift events to ServiceNow change tickets (authorised vs not)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The desired-state configuration baseline held by the CM tool.",
        "The test: Compare running configuration to the enforced baseline.",
        "Reconcile the systems of record (Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine), Drift dashboards / AWS Config, Change management (to correlate legitimate deviations)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. About 20% of the fleet isn't enrolled in configuration management, so its drift is invisible; among enrolled hosts, several have firewall/security-group drift unremediated for weeks."
      ],
      "references": [
        {
          "title": "NIST SP 800-128 Configuration Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Control 4 Secure Configuration",
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
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Configuration drift monitoring\" (the desired-state configuration baseline held by the cm tool), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Configuration drift monitoring\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Compare running configuration to the enforced baseline. PASS: a configuration-management engine (Ansible/Chef/Puppet/AWS SSM) runs on schedule across ~100% of hosts; drift is detected and auto-remediated or ticketed within SLA; and every legitimate deviation maps to an approved change. Exceptions: hosts not under configuration management at all, drift left unremediated, and unauthorised changes (drift with no corresponding change record). The evidence — The desired-state configuration baseline held by the CM tool — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Configuration drift monitoring\" Audit Evidence\n\nThe test:\nCompare running configuration to the enforced baseline. PASS: a configuration-management engine (Ansible/Chef/Puppet/AWS SSM) runs on schedule across ~100% of hosts; drift is detected and auto-remediated or ticketed within SLA; and every legitimate deviation maps to an approved change. Exceptions: hosts not under configuration management at all, drift left unremediated, and unauthorised changes (drift with no corresponding change record).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — The desired-state configuration baseline held by the CM tool)\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The desired-state configuration baseline held by the CM tool reconciled against policy, plus the resulting findings working paper",
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
            "Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Chef / Puppet / Ansible / AWS SSM State Manager (the desired-state engine)) via read-only access."
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
            "Platform / SRE — owns configuration management (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / SRE — owns configuration management owns the control data; the auditor independently verifies it."
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
            "About 20% of the fleet isn't enrolled in configuration management, so its drift is invisible; among enrolled hosts, several have firewall/security-group drift unremediated for weeks.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. About 20% of the fleet isn't enrolled in configuration management, so its drift is invisible; among enrolled hosts, several have firewall/security-group drift unremediated for weeks."
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
      "objective": "Prove the \"Administrative access controls\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Enumerate who holds administrative access to in-scope servers and how they reach it. PASS: admin access is least-privilege, brokered through a bastion/PAM with MFA, checkout, and session logging, prefers JIT over standing, and local admin is LAPS-managed; no direct admin logon from user workstations. Exceptions: broad standing admin, shared admin accounts, administrative logon without MFA, and direct RDP/SSH that bypasses the bastion.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Active Directory / local groups (server admin membership); PAM (CyberArk/Delinea) + bastion host; MFA/IdP for administrative logon) as tools — e.g. `per host: members of local Administrators (Windows) / sudoers + wheel `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The local/privileged administrator membership per server (who can log on as admin)",
        "Bastion / jump-host + PAM checkout logs for every administrative session",
        "MFA-enforcement evidence for administrative logon (RDP/SSH)",
        "The standing-vs-just-in-time (JIT) admin grant list"
      ],
      "system": [
        "Active Directory / local groups (server admin membership)",
        "PAM (CyberArk/Delinea) + bastion host",
        "MFA/IdP for administrative logon"
      ],
      "dataOwner": [
        "Platform / infrastructure — owns server administration",
        "PAM team — owns the brokered path",
        "Security operations — monitors sessions"
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
      "tagline": "Auditing \"Administrative access controls\" as a repeatable agentic workflow: pull the real evidence (The local/privileged administrator membership per server (who can log on as admin)) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Administrative access controls\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the local/privileged administrator membership per server (who can log on as admin), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Active Directory / local groups (server admin membership), PAM (CyberArk/Delinea) + bastion host, MFA/IdP for administrative logon — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per host: members of local Administrators (Windows) / sudoers + wheel (Linux)` — read-only, against the systems of record.",
        "The test itself is specific. Enumerate who holds administrative access to in-scope servers and how they reach it. PASS: admin access is least-privilege, brokered through a bastion/PAM with MFA, checkout, and session logging, prefers JIT over standing, and local admin is LAPS-managed; no direct admin logon from user workstations. Exceptions: broad standing admin, shared admin accounts, administrative logon without MFA, and direct RDP/SSH that bypasses the bastion. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_administrative_access_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Active Directory / local groups (server admin membership) and PAM (CyberArk/Delinea) + bastion host (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Active Directory / local groups (server admin membership) · PAM (CyberArk/Delinea) + bastion host",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per host: members of local Administrators (Windows) / sudoers + wheel (Linux)\nAD: who holds 'Allow log on through Remote Desktop' / Remote Desktop Users on servers\nPAM session logs: which privileged account was checked out, by whom, when\nconfirm MFA on RDP/SSH (Duo / Entra) and that direct paths to servers are blocked"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The local/privileged administrator membership per server (who can log on as admin).",
        "The test: Enumerate who holds administrative access to in-scope servers and how they reach it.",
        "Reconcile the systems of record (Active Directory / local groups (server admin membership), PAM (CyberArk/Delinea) + bastion host, MFA/IdP for administrative logon) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A shared local 'admin' account used by 30 engineers with no MFA and direct RDP from workstations, bypassing the bastion entirely — one phished laptop owns every server."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 AC-6 / AC-17",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "CIS Control 5 Account Management",
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
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Administrative access controls\" (the local/privileged administrator membership per server (who can log on as admin)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Administrative access controls\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Enumerate who holds administrative access to in-scope servers and how they reach it. PASS: admin access is least-privilege, brokered through a bastion/PAM with MFA, checkout, and session logging, prefers JIT over standing, and local admin is LAPS-managed; no direct admin logon from user workstations. Exceptions: broad standing admin, shared admin accounts, administrative logon without MFA, and direct RDP/SSH that bypasses the bastion. The evidence — The local/privileged administrator membership per server (who can log on as admin) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Active Directory / local groups (server admin membership) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Active Directory / local groups (server admin membership) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Active Directory / local groups (server admin membership); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Administrative access controls\" Audit Evidence\n\nThe test:\nEnumerate who holds administrative access to in-scope servers and how they reach it. PASS: admin access is least-privilege, brokered through a bastion/PAM with MFA, checkout, and session logging, prefers JIT over standing, and local admin is LAPS-managed; no direct admin logon from user workstations. Exceptions: broad standing admin, shared admin accounts, administrative logon without MFA, and direct RDP/SSH that bypasses the bastion.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — The local/privileged administrator membership per server (who can log on as admin))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The local/privileged administrator membership per server (who can log on as admin) reconciled against policy, plus the resulting findings working paper",
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
            "Active Directory / local groups (server admin membership) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Active Directory / local groups (server admin membership)) via read-only access."
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
            "Platform / infrastructure — owns server administration (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / infrastructure — owns server administration owns the control data; the auditor independently verifies it."
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
            "A shared local 'admin' account used by 30 engineers with no MFA and direct RDP from workstations, bypassing the bastion entirely — one phished laptop owns every server.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A shared local 'admin' account used by 30 engineers with no MFA and direct RDP from workstations, bypassing the bastion entirely — one phished laptop owns every server."
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
      "objective": "Prove the \"Vulnerability management\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess the vulnerability-management lifecycle end to end. PASS: scans are authenticated and cover ~100% of the CMDB on cadence; findings are prioritised risk-based (CVSS + EPSS + KEV + exposure, not raw CVSS); remediation meets SLA; and closure is verified by rescan. Exceptions: large unscanned or unauthenticated coverage gaps, prioritisation by CVSS alone, SLA breaches, and findings 'closed' without a confirming rescan.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Tenable / Qualys / Rapid7 (the scanner); CMDB (the coverage denominator); FIRST EPSS + CISA KEV (prioritisation inputs)) as tools — e.g. `Tenable.sc/io: scan-coverage + scan-age report; flag unauthenticated s`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The authenticated vulnerability-scan results across the asset estate",
        "Scan-coverage report — assets actually scanned vs total in the CMDB, and authenticated vs unauthenticated",
        "Risk-based prioritisation data — CVSS combined with EPSS and the KEV flag and asset exposure",
        "Remediation SLA tracking + aging report, with rescan-verified closures"
      ],
      "system": [
        "Tenable / Qualys / Rapid7 (the scanner)",
        "CMDB (the coverage denominator)",
        "FIRST EPSS + CISA KEV (prioritisation inputs)",
        "Ticketing (remediation workflow)"
      ],
      "dataOwner": [
        "Security operations / Vulnerability management — owns the program",
        "Asset & server owners — remediate",
        "Risk — accepts residual risk"
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
      "tagline": "Auditing \"Vulnerability management\" as a repeatable agentic workflow: pull the real evidence (The authenticated vulnerability-scan results across the asset estate) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Vulnerability management\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the authenticated vulnerability-scan results across the asset estate, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Tenable / Qualys / Rapid7 (the scanner), CMDB (the coverage denominator), FIRST EPSS + CISA KEV (prioritisation inputs) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Tenable.sc/io: scan-coverage + scan-age report; flag unauthenticated scans (cred` — read-only, against the systems of record.",
        "The test itself is specific. Assess the vulnerability-management lifecycle end to end. PASS: scans are authenticated and cover ~100% of the CMDB on cadence; findings are prioritised risk-based (CVSS + EPSS + KEV + exposure, not raw CVSS); remediation meets SLA; and closure is verified by rescan. Exceptions: large unscanned or unauthenticated coverage gaps, prioritisation by CVSS alone, SLA breaches, and findings 'closed' without a confirming rescan. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_vulnerability_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Tenable / Qualys / Rapid7 (the scanner) and CMDB (the coverage denominator) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Tenable / Qualys / Rapid7 (the scanner) · CMDB (the coverage denominator)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Tenable.sc/io: scan-coverage + scan-age report; flag unauthenticated scans (credential failures)\ncoverage = distinct scanned assets ÷ CMDB assets (the gap is your blind spot)\nenrich each CVE with its EPSS score (api.first.org/data/v1/epss) and KEV flag\nremediation aging buckets (0-30 / 30-90 / 90+ days) by severity"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The authenticated vulnerability-scan results across the asset estate.",
        "The test: Assess the vulnerability-management lifecycle end to end.",
        "Reconcile the systems of record (Tenable / Qualys / Rapid7 (the scanner), CMDB (the coverage denominator), FIRST EPSS + CISA KEV (prioritisation inputs)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Scanner coverage is ~70% of the CMDB and ~40% of scans are unauthenticated (so they miss most host vulnerabilities); a backlog of KEV-listed criticals sits unremediated on the unscanned remainder."
      ],
      "references": [
        {
          "title": "CISA KEV",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "FIRST EPSS",
          "url": "https://www.first.org/epss/"
        },
        {
          "title": "CIS Control 7",
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
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Vulnerability management\" (the authenticated vulnerability-scan results across the asset estate), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vulnerability management\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Assess the vulnerability-management lifecycle end to end. PASS: scans are authenticated and cover ~100% of the CMDB on cadence; findings are prioritised risk-based (CVSS + EPSS + KEV + exposure, not raw CVSS); remediation meets SLA; and closure is verified by rescan. Exceptions: large unscanned or unauthenticated coverage gaps, prioritisation by CVSS alone, SLA breaches, and findings 'closed' without a confirming rescan. The evidence — The authenticated vulnerability-scan results across the asset estate — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Tenable / Qualys / Rapid7 (the scanner) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Tenable / Qualys / Rapid7 (the scanner) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Tenable / Qualys / Rapid7 (the scanner); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Vulnerability management\" Audit Evidence\n\nThe test:\nAssess the vulnerability-management lifecycle end to end. PASS: scans are authenticated and cover ~100% of the CMDB on cadence; findings are prioritised risk-based (CVSS + EPSS + KEV + exposure, not raw CVSS); remediation meets SLA; and closure is verified by rescan. Exceptions: large unscanned or unauthenticated coverage gaps, prioritisation by CVSS alone, SLA breaches, and findings 'closed' without a confirming rescan.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — The authenticated vulnerability-scan results across the asset estate)\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The authenticated vulnerability-scan results across the asset estate reconciled against policy, plus the resulting findings working paper",
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
            "Tenable / Qualys / Rapid7 (the scanner) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Tenable / Qualys / Rapid7 (the scanner)) via read-only access."
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
            "Security operations / Vulnerability management — owns the program (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / Vulnerability management — owns the program owns the control data; the auditor independently verifies it."
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
            "Scanner coverage is ~70% of the CMDB and ~40% of scans are unauthenticated (so they miss most host vulnerabilities); a backlog of KEV-listed criticals sits unremediated on the unscanned remainder.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Scanner coverage is ~70% of the CMDB and ~40% of scans are unauthenticated (so they miss most host vulnerabilities); a backlog of KEV-listed criticals sits unremediated on the unscanned remainder."
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
      "objective": "Prove the \"Host event logging and monitoring\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify hosts produce and ship security-relevant logs. PASS: required event sources are enabled (authentication, process-creation with command line, PowerShell script-block, Sysmon, EDR), ~100% of hosts forward to the SIEM, logs are retained per policy and tamper-protected, and key ATT&CK techniques have detections. Exceptions: hosts not forwarding (logging blind spots), missing event sources (e.g. process-creation auditing off), retention below policy, and ATT&CK coverage gaps.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Sysmon / Windows Event Log / auditd (host configuration); SIEM — Splunk / Microsoft Sentinel (forwarding + retention); EDR telemetry) as tools — e.g. `SIEM: hosts reporting in the last 24h vs CMDB (forwarding-coverage gap`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The host logging configuration (what's collected: authentication, process-creation, PowerShell script-block, Sysmon, EDR telemetry)",
        "Log-forwarding coverage — hosts shipping to the SIEM vs total in the CMDB",
        "The detection use-case list mapped to MITRE ATT&CK techniques",
        "Log retention period + tamper-protection settings"
      ],
      "system": [
        "Sysmon / Windows Event Log / auditd (host configuration)",
        "SIEM — Splunk / Microsoft Sentinel (forwarding + retention)",
        "EDR telemetry",
        "MITRE ATT&CK (coverage mapping)"
      ],
      "dataOwner": [
        "Security operations / detection engineering",
        "Platform — deploys the agents",
        "Server owners"
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
      "tagline": "Auditing \"Host event logging and monitoring\" as a repeatable agentic workflow: pull the real evidence (The host logging configuration (what's collected: authentication, process-creation, PowerShell script-block, Sysmon, EDR telemetry)) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Host event logging and monitoring\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the host logging configuration (what's collected: authentication, process-creation, PowerShell script-block, Sysmon, EDR telemetry), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Sysmon / Windows Event Log / auditd (host configuration), SIEM — Splunk / Microsoft Sentinel (forwarding + retention), EDR telemetry — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SIEM: hosts reporting in the last 24h vs CMDB (forwarding-coverage gap)` — read-only, against the systems of record.",
        "The test itself is specific. Verify hosts produce and ship security-relevant logs. PASS: required event sources are enabled (authentication, process-creation with command line, PowerShell script-block, Sysmon, EDR), ~100% of hosts forward to the SIEM, logs are retained per policy and tamper-protected, and key ATT&CK techniques have detections. Exceptions: hosts not forwarding (logging blind spots), missing event sources (e.g. process-creation auditing off), retention below policy, and ATT&CK coverage gaps. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_host_event_logging_and_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Sysmon / Windows Event Log / auditd (host configuration) and SIEM — Splunk / Microsoft Sentinel (forwarding + retention) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Sysmon / Windows Event Log / auditd (host configuration) · SIEM — Splunk / Microsoft Sentinel (forwarding + retention)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "SIEM: hosts reporting in the last 24h vs CMDB (forwarding-coverage gap)\naudit policy: confirm Event ID 4688 process-creation + command-line capture and 4104 script-block logging are enabled\nSysmon configuration review (process, network, image-load coverage)\nATT&CK Navigator layer of current detections vs the technique list"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The host logging configuration (what's collected: authentication, process-creation, PowerShell script-block, Sysmon, EDR telemetry).",
        "The test: Verify hosts produce and ship security-relevant logs.",
        "Reconcile the systems of record (Sysmon / Windows Event Log / auditd (host configuration), SIEM — Splunk / Microsoft Sentinel (forwarding + retention), EDR telemetry) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. About 15% of servers send no logs to the SIEM, and command-line process auditing (4688) is off fleet-wide — so the single most useful host telemetry for investigations is simply missing."
      ],
      "references": [
        {
          "title": "NIST SP 800-92 Log Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
        },
        {
          "title": "MITRE ATT&CK",
          "url": "https://attack.mitre.org/"
        },
        {
          "title": "CIS Control 8",
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
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Host event logging and monitoring\" (the host logging configuration (what's collected: authentication, process-creation, powershell script-block, sysmon, edr telemetry)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Host event logging and monitoring\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Verify hosts produce and ship security-relevant logs. PASS: required event sources are enabled (authentication, process-creation with command line, PowerShell script-block, Sysmon, EDR), ~100% of hosts forward to the SIEM, logs are retained per policy and tamper-protected, and key ATT&CK techniques have detections. Exceptions: hosts not forwarding (logging blind spots), missing event sources (e.g. process-creation auditing off), retention below policy, and ATT&CK coverage gaps. The evidence — The host logging configuration (what's collected: authentication, process-creation, PowerShell script-block, Sysmon, EDR telemetry) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Sysmon / Windows Event Log / auditd (host configuration) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Sysmon / Windows Event Log / auditd (host configuration) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Sysmon / Windows Event Log / auditd (host configuration); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Host event logging and monitoring\" Audit Evidence\n\nThe test:\nVerify hosts produce and ship security-relevant logs. PASS: required event sources are enabled (authentication, process-creation with command line, PowerShell script-block, Sysmon, EDR), ~100% of hosts forward to the SIEM, logs are retained per policy and tamper-protected, and key ATT&CK techniques have detections. Exceptions: hosts not forwarding (logging blind spots), missing event sources (e.g. process-creation auditing off), retention below policy, and ATT&CK coverage gaps.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — The host logging configuration (what's collected: authentication, process-creation, PowerShell script-block, Sysmon, EDR telemetry))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The host logging configuration (what's collected: authentication, process-creation, PowerShell script-block, Sysmon, EDR telemetry) reconciled against policy, plus the resulting findings working paper",
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
            "Sysmon / Windows Event Log / auditd (host configuration) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Sysmon / Windows Event Log / auditd (host configuration)) via read-only access."
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
            "Security operations / detection engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / detection engineering owns the control data; the auditor independently verifies it."
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
            "About 15% of servers send no logs to the SIEM, and command-line process auditing (4688) is off fleet-wide — so the single most useful host telemetry for investigations is simply missing.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. About 15% of servers send no logs to the SIEM, and command-line process auditing (4688) is off fleet-wide — so the single most useful host telemetry for investigations is simply missing."
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
      "objective": "Prove the \"Red and blue teaming\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess the red/blue/purple program. PASS: adversary-emulation exercises run on cadence against realistic ATT&CK techniques with proper RoE; blue-team detection/response is measured (what was detected, MTTD/MTTR); a purple-team matrix shows technique coverage; and findings are remediated and retested. Exceptions: no adversary emulation, tests not mapped to ATT&CK, detections that silently failed and weren't fixed, and findings with no retest.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike; SIEM/EDR (detection evidence); ATT&CK Navigator (coverage)) as tools — e.g. `MITRE Caldera or Atomic Red Team to execute techniques safely`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The red-team engagement reports with scope and rules of engagement (RoE)",
        "The blue-team detections that fired (or were missed) per attack technique",
        "The purple-team coverage matrix — techniques exercised vs techniques detected",
        "Remediation tracking + retest evidence for findings"
      ],
      "system": [
        "Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike",
        "SIEM/EDR (detection evidence)",
        "ATT&CK Navigator (coverage)",
        "Findings tracker"
      ],
      "dataOwner": [
        "Offensive security (red)",
        "SOC / detection engineering (blue)",
        "Security leadership"
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
      "tagline": "Auditing \"Red and blue teaming\" as a repeatable agentic workflow: pull the real evidence (The red-team engagement reports with scope and rules of engagement (RoE)) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Red and blue teaming\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the red-team engagement reports with scope and rules of engagement (RoE), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike, SIEM/EDR (detection evidence), ATT&CK Navigator (coverage) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `MITRE Caldera or Atomic Red Team to execute techniques safely` — read-only, against the systems of record.",
        "The test itself is specific. Assess the red/blue/purple program. PASS: adversary-emulation exercises run on cadence against realistic ATT&CK techniques with proper RoE; blue-team detection/response is measured (what was detected, MTTD/MTTR); a purple-team matrix shows technique coverage; and findings are remediated and retested. Exceptions: no adversary emulation, tests not mapped to ATT&CK, detections that silently failed and weren't fixed, and findings with no retest. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_red_and_blue_teaming_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike and SIEM/EDR (detection evidence) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike · SIEM/EDR (detection evidence)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "MITRE Caldera or Atomic Red Team to execute techniques safely\nfor each executed technique, correlate to a SIEM/EDR alert: detected vs missed\nbuild an ATT&CK Navigator coverage layer from the results\ntrack each finding to closure with retest evidence"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The red-team engagement reports with scope and rules of engagement (RoE).",
        "The test: Assess the red/blue/purple program.",
        "Reconcile the systems of record (Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike, SIEM/EDR (detection evidence), ATT&CK Navigator (coverage)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Adversary emulation covers only a handful of ATT&CK techniques; several executed techniques (e.g. LSASS credential dumping) produced no alert, and the detection gap was never remediated."
      ],
      "references": [
        {
          "title": "MITRE ATT&CK",
          "url": "https://attack.mitre.org/"
        },
        {
          "title": "NIST SP 800-115 Security Testing",
          "url": "https://csrc.nist.gov/pubs/sp/800/115/final"
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
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Red and blue teaming\" (the red-team engagement reports with scope and rules of engagement (roe)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Red and blue teaming\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Assess the red/blue/purple program. PASS: adversary-emulation exercises run on cadence against realistic ATT&CK techniques with proper RoE; blue-team detection/response is measured (what was detected, MTTD/MTTR); a purple-team matrix shows technique coverage; and findings are remediated and retested. Exceptions: no adversary emulation, tests not mapped to ATT&CK, detections that silently failed and weren't fixed, and findings with no retest. The evidence — The red-team engagement reports with scope and rules of engagement (RoE) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Red and blue teaming\" Audit Evidence\n\nThe test:\nAssess the red/blue/purple program. PASS: adversary-emulation exercises run on cadence against realistic ATT&CK techniques with proper RoE; blue-team detection/response is measured (what was detected, MTTD/MTTR); a purple-team matrix shows technique coverage; and findings are remediated and retested. Exceptions: no adversary emulation, tests not mapped to ATT&CK, detections that silently failed and weren't fixed, and findings with no retest.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — The red-team engagement reports with scope and rules of engagement (RoE))\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The red-team engagement reports with scope and rules of engagement (RoE) reconciled against policy, plus the resulting findings working paper",
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
            "Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Adversary-emulation tooling — MITRE Caldera / Atomic Red Team / Cobalt Strike) via read-only access."
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
            "Offensive security (red) (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Offensive security (red) owns the control data; the auditor independently verifies it."
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
            "Adversary emulation covers only a handful of ATT&CK techniques; several executed techniques (e.g. LSASS credential dumping) produced no alert, and the detection gap was never remediated.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Adversary emulation covers only a handful of ATT&CK techniques; several executed techniques (e.g. LSASS credential dumping) produced no alert, and the detection gap was never remediated."
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
      "objective": "Prove the \"Malware analysis\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess malware-analysis capability and sample handling. PASS: suspected malware is detonated in an isolated sandbox (never production), IOCs are extracted and pushed to enforcement points (EDR block, SIEM watchlist, DNS sinkhole), YARA/Sigma rules are authored and deployed, and samples are contained with chain-of-custody. Exceptions: analysis on production systems, IOCs extracted but never operationalised, no detection content produced, and unsafe sample handling.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation; EDR / SIEM / firewall / DNS (IOC enforcement); Threat-intel platform (MISP)) as tools — e.g. `detonate in an isolated VLAN sandbox; capture behavioural + network IO`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The malware triage/analysis procedure + sandbox detonation reports",
        "IOC extraction + distribution evidence (hashes/domains/IPs pushed to EDR, SIEM, firewall/DNS)",
        "Sample-handling chain-of-custody + containment evidence",
        "Detection-as-code (YARA/Sigma) produced from the analysis and confirmed deployed"
      ],
      "system": [
        "Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation",
        "EDR / SIEM / firewall / DNS (IOC enforcement)",
        "Threat-intel platform (MISP)",
        "YARA/Sigma rule repository"
      ],
      "dataOwner": [
        "SOC / threat analysis / DFIR",
        "Detection engineering",
        "Threat intelligence"
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
      "tagline": "Auditing \"Malware analysis\" as a repeatable agentic workflow: pull the real evidence (The malware triage/analysis procedure + sandbox detonation reports) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"Malware analysis\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the malware triage/analysis procedure + sandbox detonation reports, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation, EDR / SIEM / firewall / DNS (IOC enforcement), Threat-intel platform (MISP) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `detonate in an isolated VLAN sandbox; capture behavioural + network IOCs` — read-only, against the systems of record.",
        "The test itself is specific. Assess malware-analysis capability and sample handling. PASS: suspected malware is detonated in an isolated sandbox (never production), IOCs are extracted and pushed to enforcement points (EDR block, SIEM watchlist, DNS sinkhole), YARA/Sigma rules are authored and deployed, and samples are contained with chain-of-custody. Exceptions: analysis on production systems, IOCs extracted but never operationalised, no detection content produced, and unsafe sample handling. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_malware_analysis_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation and EDR / SIEM / firewall / DNS (IOC enforcement) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation · EDR / SIEM / firewall / DNS (IOC enforcement)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "detonate in an isolated VLAN sandbox; capture behavioural + network IOCs\npush hashes/domains to the EDR block list + DNS sinkhole + SIEM watchlist (confirm live)\nauthor and deploy YARA/Sigma rules; verify the rule is active in the SIEM/EDR\nrecord the campaign + IOCs in MISP for sharing"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The malware triage/analysis procedure + sandbox detonation reports.",
        "The test: Assess malware-analysis capability and sample handling.",
        "Reconcile the systems of record (Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation, EDR / SIEM / firewall / DNS (IOC enforcement), Threat-intel platform (MISP)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Malware is analysed but the IOCs are never fed back into EDR/SIEM block lists, so the same indicators recur weeks later; no YARA/Sigma detections are produced from the work."
      ],
      "references": [
        {
          "title": "NIST SP 800-83 Malware Incident Prevention",
          "url": "https://csrc.nist.gov/pubs/sp/800/83/r1/final"
        },
        {
          "title": "MITRE ATT&CK",
          "url": "https://attack.mitre.org/"
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
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"Malware analysis\" (the malware triage/analysis procedure + sandbox detonation reports), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Malware analysis\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Assess malware-analysis capability and sample handling. PASS: suspected malware is detonated in an isolated sandbox (never production), IOCs are extracted and pushed to enforcement points (EDR block, SIEM watchlist, DNS sinkhole), YARA/Sigma rules are authored and deployed, and samples are contained with chain-of-custody. Exceptions: analysis on production systems, IOCs extracted but never operationalised, no detection content produced, and unsafe sample handling. The evidence — The malware triage/analysis procedure + sandbox detonation reports — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"Malware analysis\" Audit Evidence\n\nThe test:\nAssess malware-analysis capability and sample handling. PASS: suspected malware is detonated in an isolated sandbox (never production), IOCs are extracted and pushed to enforcement points (EDR block, SIEM watchlist, DNS sinkhole), YARA/Sigma rules are authored and deployed, and samples are contained with chain-of-custody. Exceptions: analysis on production systems, IOCs extracted but never operationalised, no detection content produced, and unsafe sample handling.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — The malware triage/analysis procedure + sandbox detonation reports)\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The malware triage/analysis procedure + sandbox detonation reports reconciled against policy, plus the resulting findings working paper",
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
            "Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Sandbox — Cuckoo / CAPE / Joe Sandbox, or EDR detonation) via read-only access."
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
            "SOC / threat analysis / DFIR (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "SOC / threat analysis / DFIR owns the control data; the auditor independently verifies it."
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
            "Malware is analysed but the IOCs are never fed back into EDR/SIEM block lists, so the same indicators recur weeks later; no YARA/Sigma detections are produced from the work.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Malware is analysed but the IOCs are never fed back into EDR/SIEM block lists, so the same indicators recur weeks later; no YARA/Sigma detections are produced from the work."
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
      "objective": "Prove the \"AI for red teaming\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess governance of AI used in offensive security. PASS: AI-assisted red-team tooling is inventoried and authorised; every AI-generated action runs within scope/RoE behind a human-in-the-loop gate; activity is fully logged and attributable; and sensitive target data is not sent to public/ungoverned models. Exceptions: shadow AI offensive tooling, AI actions taken autonomously outside RoE, missing logging/attribution, and target data leaking to public model endpoints.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (The AI/LLM tooling and its API/usage logs; C2 / emulation integration; Authorisation / RoE records) as tools — e.g. `inventory AI offensive tools and confirm each engagement's authorisati`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of AI-assisted offensive tooling in use, with its authorisation and guardrails",
        "Logs of AI-generated payloads/recon and the human approval gate before execution",
        "Evidence that AI red-team activity stayed within scope/RoE and is fully logged + attributable",
        "Data-handling controls — proof that target/client data isn't sent to ungoverned model endpoints"
      ],
      "system": [
        "The AI/LLM tooling and its API/usage logs",
        "C2 / emulation integration",
        "Authorisation / RoE records",
        "DLP for prompt content"
      ],
      "dataOwner": [
        "Offensive security",
        "AI governance / responsible-AI",
        "Security leadership"
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
      "tagline": "Auditing \"AI for red teaming\" as a repeatable agentic workflow: pull the real evidence (The inventory of AI-assisted offensive tooling in use, with its authorisation and guardrails) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"AI for red teaming\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of AI-assisted offensive tooling in use, with its authorisation and guardrails, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The AI/LLM tooling and its API/usage logs, C2 / emulation integration, Authorisation / RoE records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory AI offensive tools and confirm each engagement's authorisation` — read-only, against the systems of record.",
        "The test itself is specific. Assess governance of AI used in offensive security. PASS: AI-assisted red-team tooling is inventoried and authorised; every AI-generated action runs within scope/RoE behind a human-in-the-loop gate; activity is fully logged and attributable; and sensitive target data is not sent to public/ungoverned models. Exceptions: shadow AI offensive tooling, AI actions taken autonomously outside RoE, missing logging/attribution, and target data leaking to public model endpoints. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_ai_for_red_teaming_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The AI/LLM tooling and its API/usage logs and C2 / emulation integration (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull The AI/LLM tooling and its API/usage logs · C2 / emulation integration",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory AI offensive tools and confirm each engagement's authorisation\nreview LLM API logs for prompts/outputs tied to the engagement (attribution)\nconfirm a human-approval gate exists before any AI-driven action executes\nDLP/policy check that target or client data is not pasted into public model endpoints"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of AI-assisted offensive tooling in use, with its authorisation and guardrails.",
        "The test: Assess governance of AI used in offensive security.",
        "Reconcile the systems of record (The AI/LLM tooling and its API/usage logs, C2 / emulation integration, Authorisation / RoE records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. An engineer uses a public LLM to generate phishing pretexts with real client data pasted into the prompts — outside RoE, unlogged, and a data-leak in its own right."
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
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
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"AI for red teaming\" (the inventory of ai-assisted offensive tooling in use, with its authorisation and guardrails), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI for red teaming\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Assess governance of AI used in offensive security. PASS: AI-assisted red-team tooling is inventoried and authorised; every AI-generated action runs within scope/RoE behind a human-in-the-loop gate; activity is fully logged and attributable; and sensitive target data is not sent to public/ungoverned models. Exceptions: shadow AI offensive tooling, AI actions taken autonomously outside RoE, missing logging/attribution, and target data leaking to public model endpoints. The evidence — The inventory of AI-assisted offensive tooling in use, with its authorisation and guardrails — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The AI/LLM tooling and its API/usage logs APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The AI/LLM tooling and its API/usage logs gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The AI/LLM tooling and its API/usage logs; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"AI for red teaming\" Audit Evidence\n\nThe test:\nAssess governance of AI used in offensive security. PASS: AI-assisted red-team tooling is inventoried and authorised; every AI-generated action runs within scope/RoE behind a human-in-the-loop gate; activity is fully logged and attributable; and sensitive target data is not sent to public/ungoverned models. Exceptions: shadow AI offensive tooling, AI actions taken autonomously outside RoE, missing logging/attribution, and target data leaking to public model endpoints.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — The inventory of AI-assisted offensive tooling in use, with its authorisation and guardrails)\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The inventory of AI-assisted offensive tooling in use, with its authorisation and guardrails reconciled against policy, plus the resulting findings working paper",
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
            "The AI/LLM tooling and its API/usage logs (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., The AI/LLM tooling and its API/usage logs) via read-only access."
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
            "Offensive security (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Offensive security owns the control data; the auditor independently verifies it."
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
            "An engineer uses a public LLM to generate phishing pretexts with real client data pasted into the prompts — outside RoE, unlogged, and a data-leak in its own right.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. An engineer uses a public LLM to generate phishing pretexts with real client data pasted into the prompts — outside RoE, unlogged, and a data-leak in its own right."
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
      "objective": "Prove the \"STE — cloud infra vuln tickets\" control for Vulnerability & Patch Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess the automated cloud-vulnerability ticketing flow (the Security Ticketing Engine). PASS: every cloud finding (CSPM / Inspector / Wiz) auto-creates a ticket routed to the resource owner by tag, with a severity-based SLA, dedup, and closed-loop verification on rescan. Exceptions: findings with no ticket or owner (orphaned risk), tickets with no SLA, duplicate noise drowning real findings, and tickets closed without a confirming rescan.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Vulnerability & Patch Management systems of record (CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub; Ticketing — Jira / ServiceNow; Cloud tagging (ownership)) as tools — e.g. `AWS Security Hub / Inspector findings → EventBridge → ticket-automatio`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The pipeline from cloud vulnerability finding (CSPM/scanner) to a ticket with an owner and SLA",
        "Auto-routing rules (finding → owning team by resource tag) + the deduplication logic",
        "SLA + aging report for cloud-infrastructure vulnerability tickets",
        "Closure verification — a rescan confirms the cloud finding is actually gone"
      ],
      "system": [
        "CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub",
        "Ticketing — Jira / ServiceNow",
        "Cloud tagging (ownership)",
        "The Security Ticketing Engine automation"
      ],
      "dataOwner": [
        "Cloud security — owns the engine",
        "Account / resource owners — remediate",
        "Platform — owns the tagging standard"
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
      "tagline": "Auditing \"STE — cloud infra vuln tickets\" as a repeatable agentic workflow: pull the real evidence (The pipeline from cloud vulnerability finding (CSPM/scanner) to a ticket with an owner and SLA) with read-only agents, run the test against policy, and issue a defensible opinion on the Vulnerability & Patch Management control.",
      "year": 2025,
      "overview": [
        "The \"STE — cloud infra vuln tickets\" sub-process is one of the controls an auditor must verify for Vulnerability & Patch Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the pipeline from cloud vulnerability finding (CSPM/scanner) to a ticket with an owner and SLA, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub, Ticketing — Jira / ServiceNow, Cloud tagging (ownership) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `AWS Security Hub / Inspector findings → EventBridge → ticket-automation Lambda` — read-only, against the systems of record.",
        "The test itself is specific. Assess the automated cloud-vulnerability ticketing flow (the Security Ticketing Engine). PASS: every cloud finding (CSPM / Inspector / Wiz) auto-creates a ticket routed to the resource owner by tag, with a severity-based SLA, dedup, and closed-loop verification on rescan. Exceptions: findings with no ticket or owner (orphaned risk), tickets with no SLA, duplicate noise drowning real findings, and tickets closed without a confirming rescan. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_ste_cloud_infra_vuln_tickets_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub and Ticketing — Jira / ServiceNow (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub · Ticketing — Jira / ServiceNow",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "AWS Security Hub / Inspector findings → EventBridge → ticket-automation Lambda\nroute by resource tag (owner/team); dedup by finding id to suppress noise\nSLA aging dashboard for cloud tickets by severity\nauto-close a ticket only after a rescan shows the finding resolved"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The pipeline from cloud vulnerability finding (CSPM/scanner) to a ticket with an owner and SLA.",
        "The test: Assess the automated cloud-vulnerability ticketing flow (the Security Ticketing Engine).",
        "Reconcile the systems of record (CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub, Ticketing — Jira / ServiceNow, Cloud tagging (ownership)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. About 30% of cloud findings sit on resources with no owner tag, so they generate orphaned tickets nobody actions; criticals on untagged resources age indefinitely."
      ],
      "references": [
        {
          "title": "AWS Security Hub",
          "url": "https://docs.aws.amazon.com/securityhub/"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
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
          "description": "Runnable read-only MCP server: gathers the Vulnerability & Patch Management evidence for \"STE — cloud infra vuln tickets\" (the pipeline from cloud vulnerability finding (cspm/scanner) to a ticket with an owner and sla), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"STE — cloud infra vuln tickets\" control for Vulnerability & Patch Management at AcmeCorp. THE TEST: Assess the automated cloud-vulnerability ticketing flow (the Security Ticketing Engine). PASS: every cloud finding (CSPM / Inspector / Wiz) auto-creates a ticket routed to the resource owner by tag, with a severity-based SLA, dedup, and closed-loop verification on rescan. Exceptions: findings with no ticket or owner (orphaned risk), tickets with no SLA, duplicate noise drowning real findings, and tickets closed without a confirming rescan. The evidence — The pipeline from cloud vulnerability finding (CSPM/scanner) to a ticket with an owner and SLA — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Vulnerability & Patch Management: \"STE — cloud infra vuln tickets\" Audit Evidence\n\nThe test:\nAssess the automated cloud-vulnerability ticketing flow (the Security Ticketing Engine). PASS: every cloud finding (CSPM / Inspector / Wiz) auto-creates a ticket routed to the resource owner by tag, with a severity-based SLA, dedup, and closed-loop verification on rescan. Exceptions: findings with no ticket or owner (orphaned risk), tickets with no SLA, duplicate noise drowning real findings, and tickets closed without a confirming rescan.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- vuln-patch_inventory.json   (in-scope items — The pipeline from cloud vulnerability finding (CSPM/scanner) to a ticket with an owner and SLA)\n- vuln-patch_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The pipeline from cloud vulnerability finding (CSPM/scanner) to a ticket with an owner and SLA reconciled against policy, plus the resulting findings working paper",
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
            "CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., CSPM — Wiz / Prisma Cloud / Microsoft Defender for Cloud, or AWS Inspector + Security Hub) via read-only access."
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
            "Cloud security — owns the engine (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud security — owns the engine owns the control data; the auditor independently verifies it."
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
            "About 30% of cloud findings sit on resources with no owner tag, so they generate orphaned tickets nobody actions; criticals on untagged resources age indefinitely.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. About 30% of cloud findings sit on resources with no owner tag, so they generate orphaned tickets nobody actions; criticals on untagged resources age indefinitely."
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
