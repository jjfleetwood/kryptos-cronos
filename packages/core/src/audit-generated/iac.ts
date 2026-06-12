import type { EpochConfig, StageConfig } from "../types";

export const iacEpoch: EpochConfig = {
  "id": "iac",
  "name": "IaC",
  "subtitle": "Agentic technical & privacy audit — IaC",
  "description": "Audit IaC end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "📜",
  "color": "Cyan",
  "unlocked": true
};

export const iacStages: StageConfig[] = [
  {
    "epochId": "iac",
    "id": "iac-01",
    "order": 1,
    "title": "Change management and peer review",
    "subtitle": "Agentic technical & privacy audit of the change management and peer review control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Change management and peer review\" control for IaC is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each IaC source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the change management and peer review control (from Terraform / CloudFormation / Bicep)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Terraform / CloudFormation / Bicep",
        "Policy-as-code (OPA / Sentinel)",
        "IaC scanners (tfsec/Checkov)",
        "GitOps controller (Argo/Flux)"
      ],
      "dataOwner": [
        "Platform / Cloud engineering",
        "SRE",
        "Security engineering",
        "FinOps"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream IaC controls."
      }
    },
    "badge": {
      "id": "iac-01-badge",
      "name": "IaC Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Change management and peer review",
      "location": "IaC",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Change management and peer review\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the IaC control.",
      "year": 2025,
      "overview": [
        "The \"Change management and peer review\" sub-process is one of the controls an auditor must verify for IaC. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that change management and peer review is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically Terraform / CloudFormation / Bicep, Policy-as-code (OPA / Sentinel), IaC scanners (tfsec/Checkov) — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_change_management_and_peer_review_mcp.py` exposes read-only tools that turn each IaC source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_change_management_and_peer_review_mcp.py` to expose it to your agent — or `python 01_change_management_and_peer_review_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define IaC scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Terraform / CloudFormation / Bicep · Policy-as-code (OPA / Sentinel)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Change management and peer review\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Change management and peer review\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "OWASP IaC Security",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "NIST SP 800-204D",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_change_management_and_peer_review_mcp.py",
          "url": "/audit-code/iac/01_change_management_and_peer_review_mcp.py",
          "description": "Runnable read-only MCP server: gathers IaC evidence for \"Change management and peer review\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Change management and peer review\" control for IaC at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. Terraform / CloudFormation / Bicep is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — IaC: \"Change management and peer review\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items from Terraform / CloudFormation / Bicep)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Change management and peer review\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Change management and peer review\",\n  \"domain\": \"IaC\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Change management and peer review\" control must cover\n# fragment: change_management_peer_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "change_management_peer_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Change management and peer review\" sub-process of IaC?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the change management and peer review control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iac-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Change management and peer review\" matter to the broader IaC posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other IaC controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iac-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Change management and peer review\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Change management and peer review evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iac-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Change management and peer review\"?",
          "options": [
            "Terraform / CloudFormation / Bicep (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Terraform / CloudFormation / Bicep) via read-only access."
        },
        {
          "id": "iac-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Change management and peer review\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / Cloud engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / Cloud engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iac-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Change management and peer review\", which part stays with the human auditor?",
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
          "id": "iac-01-q7",
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
          "id": "iac-01-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Change management and peer review\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "iac-01-q9",
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
          "id": "iac-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Change management and peer review\" also serve privacy and regulatory goals?",
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
    "epochId": "iac",
    "id": "iac-02",
    "order": 2,
    "title": "Scanning and security testing",
    "subtitle": "Agentic technical & privacy audit of the scanning and security testing control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Scanning and security testing\" control for IaC is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each IaC source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the scanning and security testing control (from Terraform / CloudFormation / Bicep)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Terraform / CloudFormation / Bicep",
        "Policy-as-code (OPA / Sentinel)",
        "IaC scanners (tfsec/Checkov)",
        "GitOps controller (Argo/Flux)"
      ],
      "dataOwner": [
        "Platform / Cloud engineering",
        "SRE",
        "Security engineering",
        "FinOps"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream IaC controls."
      }
    },
    "badge": {
      "id": "iac-02-badge",
      "name": "IaC Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Scanning and security testing",
      "location": "IaC",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Scanning and security testing\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the IaC control.",
      "year": 2025,
      "overview": [
        "The \"Scanning and security testing\" sub-process is one of the controls an auditor must verify for IaC. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that scanning and security testing is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically Terraform / CloudFormation / Bicep, Policy-as-code (OPA / Sentinel), IaC scanners (tfsec/Checkov) — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_scanning_and_security_testing_mcp.py` exposes read-only tools that turn each IaC source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_scanning_and_security_testing_mcp.py` to expose it to your agent — or `python 02_scanning_and_security_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define IaC scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Terraform / CloudFormation / Bicep · Policy-as-code (OPA / Sentinel)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Scanning and security testing\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Scanning and security testing\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "OWASP IaC Security",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "NIST SP 800-204D",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_scanning_and_security_testing_mcp.py",
          "url": "/audit-code/iac/02_scanning_and_security_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers IaC evidence for \"Scanning and security testing\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Scanning and security testing\" control for IaC at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. Terraform / CloudFormation / Bicep is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — IaC: \"Scanning and security testing\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items from Terraform / CloudFormation / Bicep)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Scanning and security testing\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Scanning and security testing\",\n  \"domain\": \"IaC\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Scanning and security testing\" control must cover\n# fragment: scanning_security_testing_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "scanning_security_testing_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Scanning and security testing\" sub-process of IaC?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the scanning and security testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iac-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Scanning and security testing\" matter to the broader IaC posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other IaC controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iac-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Scanning and security testing\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Scanning and security testing evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iac-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Scanning and security testing\"?",
          "options": [
            "Terraform / CloudFormation / Bicep (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Terraform / CloudFormation / Bicep) via read-only access."
        },
        {
          "id": "iac-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Scanning and security testing\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / Cloud engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / Cloud engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iac-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Scanning and security testing\", which part stays with the human auditor?",
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
          "id": "iac-02-q7",
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
          "id": "iac-02-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Scanning and security testing\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "iac-02-q9",
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
          "id": "iac-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Scanning and security testing\" also serve privacy and regulatory goals?",
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
    "epochId": "iac",
    "id": "iac-03",
    "order": 3,
    "title": "Cloud resource misconfig via IaC",
    "subtitle": "Agentic technical & privacy audit of the cloud resource misconfig via iac control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cloud resource misconfig via IaC\" control for IaC is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each IaC source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cloud resource misconfig via iac control (from Terraform / CloudFormation / Bicep)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Terraform / CloudFormation / Bicep",
        "Policy-as-code (OPA / Sentinel)",
        "IaC scanners (tfsec/Checkov)",
        "GitOps controller (Argo/Flux)"
      ],
      "dataOwner": [
        "Platform / Cloud engineering",
        "SRE",
        "Security engineering",
        "FinOps"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream IaC controls."
      }
    },
    "badge": {
      "id": "iac-03-badge",
      "name": "IaC Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Cloud resource misconfig via IaC",
      "location": "IaC",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cloud resource misconfig via IaC\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the IaC control.",
      "year": 2025,
      "overview": [
        "The \"Cloud resource misconfig via IaC\" sub-process is one of the controls an auditor must verify for IaC. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that cloud resource misconfig via iac is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically Terraform / CloudFormation / Bicep, Policy-as-code (OPA / Sentinel), IaC scanners (tfsec/Checkov) — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_cloud_resource_misconfig_via_iac_mcp.py` exposes read-only tools that turn each IaC source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_cloud_resource_misconfig_via_iac_mcp.py` to expose it to your agent — or `python 03_cloud_resource_misconfig_via_iac_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define IaC scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Terraform / CloudFormation / Bicep · Policy-as-code (OPA / Sentinel)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cloud resource misconfig via IaC\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Cloud resource misconfig via IaC\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "OWASP IaC Security",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "NIST SP 800-204D",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_cloud_resource_misconfig_via_iac_mcp.py",
          "url": "/audit-code/iac/03_cloud_resource_misconfig_via_iac_mcp.py",
          "description": "Runnable read-only MCP server: gathers IaC evidence for \"Cloud resource misconfig via IaC\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud resource misconfig via IaC\" control for IaC at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. Terraform / CloudFormation / Bicep is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — IaC: \"Cloud resource misconfig via IaC\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items from Terraform / CloudFormation / Bicep)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Cloud resource misconfig via IaC\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cloud resource misconfig via IaC\",\n  \"domain\": \"IaC\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cloud resource misconfig via IaC\" control must cover\n# fragment: cloud_resource_misconfig_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "cloud_resource_misconfig_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cloud resource misconfig via IaC\" sub-process of IaC?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the cloud resource misconfig via iac control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iac-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cloud resource misconfig via IaC\" matter to the broader IaC posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other IaC controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iac-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cloud resource misconfig via IaC\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Cloud resource misconfig via IaC evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iac-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Cloud resource misconfig via IaC\"?",
          "options": [
            "Terraform / CloudFormation / Bicep (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Terraform / CloudFormation / Bicep) via read-only access."
        },
        {
          "id": "iac-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cloud resource misconfig via IaC\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / Cloud engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / Cloud engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iac-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cloud resource misconfig via IaC\", which part stays with the human auditor?",
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
          "id": "iac-03-q7",
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
          "id": "iac-03-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Cloud resource misconfig via IaC\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "iac-03-q9",
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
          "id": "iac-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cloud resource misconfig via IaC\" also serve privacy and regulatory goals?",
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
    "epochId": "iac",
    "id": "iac-04",
    "order": 4,
    "title": "Policy/compliance as code",
    "subtitle": "Agentic technical & privacy audit of the policy/compliance as code control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Policy/compliance as code\" control for IaC is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each IaC source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the policy/compliance as code control (from Terraform / CloudFormation / Bicep)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Terraform / CloudFormation / Bicep",
        "Policy-as-code (OPA / Sentinel)",
        "IaC scanners (tfsec/Checkov)",
        "GitOps controller (Argo/Flux)"
      ],
      "dataOwner": [
        "Platform / Cloud engineering",
        "SRE",
        "Security engineering",
        "FinOps"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream IaC controls."
      }
    },
    "badge": {
      "id": "iac-04-badge",
      "name": "IaC Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Policy/compliance as code",
      "location": "IaC",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Policy/compliance as code\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the IaC control.",
      "year": 2025,
      "overview": [
        "The \"Policy/compliance as code\" sub-process is one of the controls an auditor must verify for IaC. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that policy/compliance as code is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically Terraform / CloudFormation / Bicep, Policy-as-code (OPA / Sentinel), IaC scanners (tfsec/Checkov) — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_policy_compliance_as_code_mcp.py` exposes read-only tools that turn each IaC source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_policy_compliance_as_code_mcp.py` to expose it to your agent — or `python 04_policy_compliance_as_code_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define IaC scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Terraform / CloudFormation / Bicep · Policy-as-code (OPA / Sentinel)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Policy/compliance as code\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Policy/compliance as code\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "OWASP IaC Security",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "NIST SP 800-204D",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_policy_compliance_as_code_mcp.py",
          "url": "/audit-code/iac/04_policy_compliance_as_code_mcp.py",
          "description": "Runnable read-only MCP server: gathers IaC evidence for \"Policy/compliance as code\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Policy/compliance as code\" control for IaC at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. Terraform / CloudFormation / Bicep is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — IaC: \"Policy/compliance as code\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items from Terraform / CloudFormation / Bicep)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Policy/compliance as code\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Policy/compliance as code\",\n  \"domain\": \"IaC\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Policy/compliance as code\" control must cover\n# fragment: policycompliance_as_code_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "policycompliance_as_code_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Policy/compliance as code\" sub-process of IaC?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the policy/compliance as code control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iac-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Policy/compliance as code\" matter to the broader IaC posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other IaC controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iac-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Policy/compliance as code\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Policy/compliance as code evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iac-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Policy/compliance as code\"?",
          "options": [
            "Terraform / CloudFormation / Bicep (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Terraform / CloudFormation / Bicep) via read-only access."
        },
        {
          "id": "iac-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Policy/compliance as code\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / Cloud engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / Cloud engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iac-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Policy/compliance as code\", which part stays with the human auditor?",
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
          "id": "iac-04-q7",
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
          "id": "iac-04-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Policy/compliance as code\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "iac-04-q9",
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
          "id": "iac-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Policy/compliance as code\" also serve privacy and regulatory goals?",
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
    "epochId": "iac",
    "id": "iac-05",
    "order": 5,
    "title": "Module and template governance",
    "subtitle": "Agentic technical & privacy audit of the module and template governance control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Module and template governance\" control for IaC is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each IaC source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the module and template governance control (from Terraform / CloudFormation / Bicep)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Terraform / CloudFormation / Bicep",
        "Policy-as-code (OPA / Sentinel)",
        "IaC scanners (tfsec/Checkov)",
        "GitOps controller (Argo/Flux)"
      ],
      "dataOwner": [
        "Platform / Cloud engineering",
        "SRE",
        "Security engineering",
        "FinOps"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream IaC controls."
      }
    },
    "badge": {
      "id": "iac-05-badge",
      "name": "IaC Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Module and template governance",
      "location": "IaC",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Module and template governance\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the IaC control.",
      "year": 2025,
      "overview": [
        "The \"Module and template governance\" sub-process is one of the controls an auditor must verify for IaC. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that module and template governance is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically Terraform / CloudFormation / Bicep, Policy-as-code (OPA / Sentinel), IaC scanners (tfsec/Checkov) — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_module_and_template_governance_mcp.py` exposes read-only tools that turn each IaC source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_module_and_template_governance_mcp.py` to expose it to your agent — or `python 05_module_and_template_governance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define IaC scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Terraform / CloudFormation / Bicep · Policy-as-code (OPA / Sentinel)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Module and template governance\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Module and template governance\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "OWASP IaC Security",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "NIST SP 800-204D",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_module_and_template_governance_mcp.py",
          "url": "/audit-code/iac/05_module_and_template_governance_mcp.py",
          "description": "Runnable read-only MCP server: gathers IaC evidence for \"Module and template governance\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Module and template governance\" control for IaC at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. Terraform / CloudFormation / Bicep is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — IaC: \"Module and template governance\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items from Terraform / CloudFormation / Bicep)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Module and template governance\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Module and template governance\",\n  \"domain\": \"IaC\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Module and template governance\" control must cover\n# fragment: module_template_governance_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "module_template_governance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Module and template governance\" sub-process of IaC?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the module and template governance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iac-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Module and template governance\" matter to the broader IaC posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other IaC controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iac-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Module and template governance\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Module and template governance evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iac-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Module and template governance\"?",
          "options": [
            "Terraform / CloudFormation / Bicep (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Terraform / CloudFormation / Bicep) via read-only access."
        },
        {
          "id": "iac-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Module and template governance\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / Cloud engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / Cloud engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iac-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Module and template governance\", which part stays with the human auditor?",
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
          "id": "iac-05-q7",
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
          "id": "iac-05-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Module and template governance\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "iac-05-q9",
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
          "id": "iac-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Module and template governance\" also serve privacy and regulatory goals?",
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
    "epochId": "iac",
    "id": "iac-06",
    "order": 6,
    "title": "Configuration drift detection",
    "subtitle": "Agentic technical & privacy audit of the configuration drift detection control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Configuration drift detection\" control for IaC is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each IaC source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the configuration drift detection control (from Terraform / CloudFormation / Bicep)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Terraform / CloudFormation / Bicep",
        "Policy-as-code (OPA / Sentinel)",
        "IaC scanners (tfsec/Checkov)",
        "GitOps controller (Argo/Flux)"
      ],
      "dataOwner": [
        "Platform / Cloud engineering",
        "SRE",
        "Security engineering",
        "FinOps"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream IaC controls."
      }
    },
    "badge": {
      "id": "iac-06-badge",
      "name": "IaC Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Configuration drift detection",
      "location": "IaC",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Configuration drift detection\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the IaC control.",
      "year": 2025,
      "overview": [
        "The \"Configuration drift detection\" sub-process is one of the controls an auditor must verify for IaC. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that configuration drift detection is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically Terraform / CloudFormation / Bicep, Policy-as-code (OPA / Sentinel), IaC scanners (tfsec/Checkov) — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_configuration_drift_detection_mcp.py` exposes read-only tools that turn each IaC source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_configuration_drift_detection_mcp.py` to expose it to your agent — or `python 06_configuration_drift_detection_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define IaC scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Terraform / CloudFormation / Bicep · Policy-as-code (OPA / Sentinel)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Configuration drift detection\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Configuration drift detection\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "OWASP IaC Security",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "NIST SP 800-204D",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_configuration_drift_detection_mcp.py",
          "url": "/audit-code/iac/06_configuration_drift_detection_mcp.py",
          "description": "Runnable read-only MCP server: gathers IaC evidence for \"Configuration drift detection\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Configuration drift detection\" control for IaC at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. Terraform / CloudFormation / Bicep is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — IaC: \"Configuration drift detection\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items from Terraform / CloudFormation / Bicep)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Configuration drift detection\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Configuration drift detection\",\n  \"domain\": \"IaC\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Configuration drift detection\" control must cover\n# fragment: configuration_drift_detection_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "configuration_drift_detection_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Configuration drift detection\" sub-process of IaC?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the configuration drift detection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iac-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Configuration drift detection\" matter to the broader IaC posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other IaC controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iac-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Configuration drift detection\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Configuration drift detection evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iac-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Configuration drift detection\"?",
          "options": [
            "Terraform / CloudFormation / Bicep (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Terraform / CloudFormation / Bicep) via read-only access."
        },
        {
          "id": "iac-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Configuration drift detection\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / Cloud engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / Cloud engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iac-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Configuration drift detection\", which part stays with the human auditor?",
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
          "id": "iac-06-q7",
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
          "id": "iac-06-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Configuration drift detection\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "iac-06-q9",
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
          "id": "iac-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Configuration drift detection\" also serve privacy and regulatory goals?",
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
    "epochId": "iac",
    "id": "iac-07",
    "order": 7,
    "title": "Secrets and credential handling",
    "subtitle": "Agentic technical & privacy audit of the secrets and credential handling control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secrets and credential handling\" control for IaC is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each IaC source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the secrets and credential handling control (from Terraform / CloudFormation / Bicep)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Terraform / CloudFormation / Bicep",
        "Policy-as-code (OPA / Sentinel)",
        "IaC scanners (tfsec/Checkov)",
        "GitOps controller (Argo/Flux)"
      ],
      "dataOwner": [
        "Platform / Cloud engineering",
        "SRE",
        "Security engineering",
        "FinOps"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream IaC controls."
      }
    },
    "badge": {
      "id": "iac-07-badge",
      "name": "IaC Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Secrets and credential handling",
      "location": "IaC",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secrets and credential handling\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the IaC control.",
      "year": 2025,
      "overview": [
        "The \"Secrets and credential handling\" sub-process is one of the controls an auditor must verify for IaC. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that secrets and credential handling is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically Terraform / CloudFormation / Bicep, Policy-as-code (OPA / Sentinel), IaC scanners (tfsec/Checkov) — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_secrets_and_credential_handling_mcp.py` exposes read-only tools that turn each IaC source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_secrets_and_credential_handling_mcp.py` to expose it to your agent — or `python 07_secrets_and_credential_handling_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define IaC scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Terraform / CloudFormation / Bicep · Policy-as-code (OPA / Sentinel)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secrets and credential handling\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Secrets and credential handling\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "OWASP IaC Security",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "NIST SP 800-204D",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_secrets_and_credential_handling_mcp.py",
          "url": "/audit-code/iac/07_secrets_and_credential_handling_mcp.py",
          "description": "Runnable read-only MCP server: gathers IaC evidence for \"Secrets and credential handling\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secrets and credential handling\" control for IaC at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. Terraform / CloudFormation / Bicep is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — IaC: \"Secrets and credential handling\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items from Terraform / CloudFormation / Bicep)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Secrets and credential handling\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secrets and credential handling\",\n  \"domain\": \"IaC\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secrets and credential handling\" control must cover\n# fragment: secrets_credential_handling_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "secrets_credential_handling_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secrets and credential handling\" sub-process of IaC?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the secrets and credential handling control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iac-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secrets and credential handling\" matter to the broader IaC posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other IaC controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iac-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secrets and credential handling\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Secrets and credential handling evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iac-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Secrets and credential handling\"?",
          "options": [
            "Terraform / CloudFormation / Bicep (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Terraform / CloudFormation / Bicep) via read-only access."
        },
        {
          "id": "iac-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secrets and credential handling\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / Cloud engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / Cloud engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iac-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secrets and credential handling\", which part stays with the human auditor?",
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
          "id": "iac-07-q7",
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
          "id": "iac-07-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Secrets and credential handling\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "iac-07-q9",
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
          "id": "iac-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secrets and credential handling\" also serve privacy and regulatory goals?",
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
    "epochId": "iac",
    "id": "iac-08",
    "order": 8,
    "title": "Pipeline integration",
    "subtitle": "Agentic technical & privacy audit of the pipeline integration control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Pipeline integration\" control for IaC is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each IaC source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the pipeline integration control (from Terraform / CloudFormation / Bicep)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Terraform / CloudFormation / Bicep",
        "Policy-as-code (OPA / Sentinel)",
        "IaC scanners (tfsec/Checkov)",
        "GitOps controller (Argo/Flux)"
      ],
      "dataOwner": [
        "Platform / Cloud engineering",
        "SRE",
        "Security engineering",
        "FinOps"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream IaC controls."
      }
    },
    "badge": {
      "id": "iac-08-badge",
      "name": "IaC Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "Pipeline integration",
      "location": "IaC",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Pipeline integration\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the IaC control.",
      "year": 2025,
      "overview": [
        "The \"Pipeline integration\" sub-process is one of the controls an auditor must verify for IaC. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that pipeline integration is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically Terraform / CloudFormation / Bicep, Policy-as-code (OPA / Sentinel), IaC scanners (tfsec/Checkov) — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_pipeline_integration_mcp.py` exposes read-only tools that turn each IaC source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_pipeline_integration_mcp.py` to expose it to your agent — or `python 08_pipeline_integration_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define IaC scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Terraform / CloudFormation / Bicep · Policy-as-code (OPA / Sentinel)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Pipeline integration\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"Pipeline integration\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "OWASP IaC Security",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "NIST SP 800-204D",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_pipeline_integration_mcp.py",
          "url": "/audit-code/iac/08_pipeline_integration_mcp.py",
          "description": "Runnable read-only MCP server: gathers IaC evidence for \"Pipeline integration\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Pipeline integration\" control for IaC at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. Terraform / CloudFormation / Bicep is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — IaC: \"Pipeline integration\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items from Terraform / CloudFormation / Bicep)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"Pipeline integration\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Pipeline integration\",\n  \"domain\": \"IaC\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Pipeline integration\" control must cover\n# fragment: pipeline_integration_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "pipeline_integration_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Pipeline integration\" sub-process of IaC?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the pipeline integration control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iac-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Pipeline integration\" matter to the broader IaC posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other IaC controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iac-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Pipeline integration\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Pipeline integration evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iac-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Pipeline integration\"?",
          "options": [
            "Terraform / CloudFormation / Bicep (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Terraform / CloudFormation / Bicep) via read-only access."
        },
        {
          "id": "iac-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Pipeline integration\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / Cloud engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / Cloud engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iac-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Pipeline integration\", which part stays with the human auditor?",
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
          "id": "iac-08-q7",
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
          "id": "iac-08-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"Pipeline integration\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "iac-08-q9",
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
          "id": "iac-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Pipeline integration\" also serve privacy and regulatory goals?",
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
    "epochId": "iac",
    "id": "iac-09",
    "order": 9,
    "title": "GitOps security controls",
    "subtitle": "Agentic technical & privacy audit of the gitops security controls control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"GitOps security controls\" control for IaC is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The example MCP code gathers the evidence, evaluates it against policy, and returns a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the exceptions named.",
      "approach": "An audit agent calls a read-only MCP server that wraps each IaC source system as a tool, pulls the inventory and observed state, reconciles them against the policy the auditor sets, and returns the exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the gitops security controls control (from Terraform / CloudFormation / Bicep)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Terraform / CloudFormation / Bicep",
        "Policy-as-code (OPA / Sentinel)",
        "IaC scanners (tfsec/Checkov)",
        "GitOps controller (Argo/Flux)"
      ],
      "dataOwner": [
        "Platform / Cloud engineering",
        "SRE",
        "Security engineering",
        "FinOps"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream IaC controls."
      }
    },
    "badge": {
      "id": "iac-09-badge",
      "name": "IaC Auditor",
      "emoji": "📜"
    },
    "wonder": {
      "name": "GitOps security controls",
      "location": "IaC",
      "era": "Present Day",
      "emoji": "📜"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"GitOps security controls\" as a repeatable agentic workflow: gather the evidence with read-only agents, reconcile it against policy, and issue a defensible opinion on the IaC control.",
      "year": 2025,
      "overview": [
        "The \"GitOps security controls\" sub-process is one of the controls an auditor must verify for IaC. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is simple and usually revealing: \"show me the evidence that gitops security controls is in place and working, for everything in scope.\"",
        "It is hard because the truth lives across systems that were never reconciled — typically Terraform / CloudFormation / Bicep, Policy-as-code (OPA / Sentinel), IaC scanners (tfsec/Checkov) — each authoritative for part of the picture and blind to the rest. The gaps between those sources are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The agentic approach automates the reconciliation, not the judgement. An audit agent calls a read-only MCP server that wraps each source as a tool, pulls the evidence, evaluates it against the policy the auditor sets, and returns the findings with a clear PASS / EXCEPTIONS / MATERIAL-GAP opinion. The human sets the thresholds, reviews the findings, and signs — the control is verified at machine speed with a complete, logged evidence trail."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_gitops_security_controls_mcp.py` exposes read-only tools that turn each IaC source system into a callable for the agent: one to gather the raw evidence, one to evaluate it against policy and surface the exceptions, and a `coverage_report()` that produces the working-paper deliverable — totals, the exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes across the whole Advanced Audit track and is the point of agentic audit: the agent gathers and correlates evidence across 4 systems with a complete, logged trail, while the auditor owns the policy and the opinion. The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_gitops_security_controls_mcp.py` to expose it to your agent — or `python 09_gitops_security_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "One misconfigured template, many exposed resources",
        "when": "Recurring",
        "where": "Cloud estates managed by IaC",
        "impact": "A single insecure module is reused across hundreds of deployments, multiplying one mistake into a fleet-wide exposure.",
        "body": [
          "IaC's power is repetition, which is also its risk: a module that defaults a bucket to public or a security group to 0.0.0.0/0 propagates that flaw everywhere it's instantiated.",
          "Auditors check that IaC changes are peer-reviewed, scanned, governed by policy-as-code, and that runtime hasn't drifted from the declared state."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define IaC scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Terraform / CloudFormation / Bicep · Policy-as-code (OPA / Sentinel)",
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
          "year": 2019,
          "event": "Capital One: an SSRF + over-permissive role exposes 100M records",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Public-bucket misconfigurations remain the top cloud exposure class"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"GitOps security controls\" continuously assured",
          "highlight": true
        }
      ],
      "keyTakeaways": [
        "Audit \"GitOps security controls\" by evidence, not assertion: reconcile the systems of record and name the exceptions.",
        "The control is scoped per item — anything the control was never applied to is the highest-value finding.",
        "The agent gathers and correlates; the human sets policy, reviews findings, and signs the opinion.",
        "Audit tooling must be read-only — verify the MCP server can list and report but never change state.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path."
      ],
      "references": [
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "OWASP IaC Security",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "NIST SP 800-204D",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_gitops_security_controls_mcp.py",
          "url": "/audit-code/iac/09_gitops_security_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers IaC evidence for \"GitOps security controls\", evaluates against policy, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"GitOps security controls\" control for IaC at AcmeCorp. The evidence has been exported from the systems of record into /evidence. Reconcile the sources against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's MCP server against live APIs; here the same sources are exported to files.)",
      "hint": "The systems of record disagree. Read every file in /evidence — the gaps between them, and the items the control never reached, are the finding.",
      "hints": [
        "cat each file in /evidence. Terraform / CloudFormation / Bicep is the system of record; the others show what is actually configured/running.",
        "An in-scope item present in one source but missing the required control in another is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — IaC: \"GitOps security controls\" Audit Evidence\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iac_inventory.json   (in-scope items from Terraform / CloudFormation / Bicep)\n- iac_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy. Find the items where the\n\"GitOps security controls\" control is missing, mis-scoped, or not operating. Then read\ncoverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"GitOps security controls\",\n  \"domain\": \"IaC\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iac_",
        "/evidence/iac_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / Cloud engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"GitOps security controls\" control must cover\n# fragment: gitops_security_controls_",
        "/evidence/iac_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iac_inventory.json",
            "isDir": false
          },
          {
            "name": "iac_state.json",
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
          "value": "FLAG{iac_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iac_inventory.json",
          "value": "gitops_security_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iac_state.json",
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
          "id": "iac-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"GitOps security controls\" sub-process of IaC?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the gitops security controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iac-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"GitOps security controls\" matter to the broader IaC posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other IaC controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iac-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"GitOps security controls\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The GitOps security controls evidence export reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iac-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"GitOps security controls\"?",
          "options": [
            "Terraform / CloudFormation / Bicep (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Terraform / CloudFormation / Bicep) via read-only access."
        },
        {
          "id": "iac-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"GitOps security controls\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / Cloud engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / Cloud engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iac-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"GitOps security controls\", which part stays with the human auditor?",
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
          "id": "iac-09-q7",
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
          "id": "iac-09-q8",
          "type": "Findings",
          "challenge": "What is a finding",
          "text": "Which observation is a reportable finding for \"GitOps security controls\"?",
          "options": [
            "Evidence shows the control is missing, mis-scoped, or not operating for in-scope items — a gap against policy",
            "The team uses a popular vendor",
            "The control exists and operates as designed",
            "A new feature shipped on time"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a gap between the policy/standard and the observed evidence."
        },
        {
          "id": "iac-09-q9",
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
          "id": "iac-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"GitOps security controls\" also serve privacy and regulatory goals?",
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
