import type { EpochConfig, StageConfig } from "../types";

export const cloudSaasEpoch: EpochConfig = {
  "id": "cloud-saas",
  "name": "Cloud Platform & SaaS (Software-as-a-Service)",
  "subtitle": "Agentic technical & privacy audit — Cloud Platform & SaaS (Software-as-a-Service)",
  "description": "Audit Cloud Platform & SaaS (Software-as-a-Service) end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "☁️",
  "color": "Sky",
  "unlocked": true
};

export const cloudSaasStages: StageConfig[] = [
  {
    "epochId": "cloud-saas",
    "id": "cld-01",
    "order": 1,
    "title": "Cloud landing zone and guardrails",
    "subtitle": "Agentic technical & privacy audit of the cloud landing zone and guardrails control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cloud landing zone and guardrails\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud landing zone and guardrails\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cloud landing zone and guardrails control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-01-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Cloud landing zone and guardrails",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cloud landing zone and guardrails\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the cloud landing zone and guardrails control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Cloud landing zone and guardrails\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the cloud landing zone and guardrails control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud landing zone and guardrails\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_cloud_landing_zone_and_guardrails_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_cloud_landing_zone_and_guardrails_mcp.py` to expose it to your agent — or `python 01_cloud_landing_zone_and_guardrails_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cloud landing zone and guardrails\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the cloud landing zone and guardrails control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud landing zone and guardrails\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the cloud landing zone and guardrails control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_cloud_landing_zone_and_guardrails_mcp.py",
          "url": "/audit-code/cloud-saas/01_cloud_landing_zone_and_guardrails_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Cloud landing zone and guardrails\" (in-scope inventory for the cloud landing zone and guardrails control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud landing zone and guardrails\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud landing zone and guardrails\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the cloud landing zone and guardrails control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Cloud landing zone and guardrails\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud landing zone and guardrails\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the cloud landing zone and guardrails control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cloud landing zone and guardrails\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cloud landing zone and guardrails\" control must cover\n# fragment: cloud_landing_zone_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "cloud_landing_zone_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cloud landing zone and guardrails\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the cloud landing zone and guardrails control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cloud landing zone and guardrails\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cloud landing zone and guardrails\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the cloud landing zone and guardrails control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Cloud landing zone and guardrails\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cloud landing zone and guardrails\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cloud landing zone and guardrails\", which part stays with the human auditor?",
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
          "id": "cld-01-q7",
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
          "id": "cld-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cloud landing zone and guardrails\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the cloud landing zone and guardrails control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the cloud landing zone and guardrails control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-01-q9",
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
          "id": "cld-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cloud landing zone and guardrails\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-02",
    "order": 2,
    "title": "Cloud IAM and privileged roles",
    "subtitle": "Agentic technical & privacy audit of the cloud iam and privileged roles control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cloud IAM and privileged roles\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud IAM and privileged roles\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cloud iam and privileged roles control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-02-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Cloud IAM and privileged roles",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cloud IAM and privileged roles\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the cloud iam and privileged roles control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Cloud IAM and privileged roles\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the cloud iam and privileged roles control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud IAM and privileged roles\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_cloud_iam_and_privileged_roles_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_cloud_iam_and_privileged_roles_mcp.py` to expose it to your agent — or `python 02_cloud_iam_and_privileged_roles_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cloud IAM and privileged roles\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the cloud iam and privileged roles control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud IAM and privileged roles\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the cloud iam and privileged roles control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_cloud_iam_and_privileged_roles_mcp.py",
          "url": "/audit-code/cloud-saas/02_cloud_iam_and_privileged_roles_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Cloud IAM and privileged roles\" (in-scope inventory for the cloud iam and privileged roles control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud IAM and privileged roles\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud IAM and privileged roles\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the cloud iam and privileged roles control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Cloud IAM and privileged roles\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud IAM and privileged roles\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the cloud iam and privileged roles control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cloud IAM and privileged roles\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cloud IAM and privileged roles\" control must cover\n# fragment: cloud_iam_privileged_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "cloud_iam_privileged_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cloud IAM and privileged roles\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the cloud iam and privileged roles control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cloud IAM and privileged roles\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cloud IAM and privileged roles\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the cloud iam and privileged roles control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Cloud IAM and privileged roles\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cloud IAM and privileged roles\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cloud IAM and privileged roles\", which part stays with the human auditor?",
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
          "id": "cld-02-q7",
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
          "id": "cld-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cloud IAM and privileged roles\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the cloud iam and privileged roles control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the cloud iam and privileged roles control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-02-q9",
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
          "id": "cld-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cloud IAM and privileged roles\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-03",
    "order": 3,
    "title": "Logging and monitoring enablement",
    "subtitle": "Agentic technical & privacy audit of the logging and monitoring enablement control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Logging and monitoring enablement\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Logging and monitoring enablement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the logging and monitoring enablement control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-03-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Logging and monitoring enablement",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Logging and monitoring enablement\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the logging and monitoring enablement control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Logging and monitoring enablement\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the logging and monitoring enablement control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Logging and monitoring enablement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_logging_and_monitoring_enablement_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_logging_and_monitoring_enablement_mcp.py` to expose it to your agent — or `python 03_logging_and_monitoring_enablement_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Logging and monitoring enablement\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the logging and monitoring enablement control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Logging and monitoring enablement\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the logging and monitoring enablement control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_logging_and_monitoring_enablement_mcp.py",
          "url": "/audit-code/cloud-saas/03_logging_and_monitoring_enablement_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Logging and monitoring enablement\" (in-scope inventory for the logging and monitoring enablement control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Logging and monitoring enablement\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Logging and monitoring enablement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the logging and monitoring enablement control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Logging and monitoring enablement\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Logging and monitoring enablement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the logging and monitoring enablement control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Logging and monitoring enablement\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Logging and monitoring enablement\" control must cover\n# fragment: logging_monitoring_enablement_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "logging_monitoring_enablement_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Logging and monitoring enablement\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the logging and monitoring enablement control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Logging and monitoring enablement\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Logging and monitoring enablement\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the logging and monitoring enablement control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Logging and monitoring enablement\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Logging and monitoring enablement\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Logging and monitoring enablement\", which part stays with the human auditor?",
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
          "id": "cld-03-q7",
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
          "id": "cld-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Logging and monitoring enablement\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the logging and monitoring enablement control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the logging and monitoring enablement control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-03-q9",
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
          "id": "cld-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Logging and monitoring enablement\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-04",
    "order": 4,
    "title": "Cloud network security (SG, NACL)",
    "subtitle": "Agentic technical & privacy audit of the cloud network security (sg, nacl) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cloud network security (SG, NACL)\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud network security (SG, NACL)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cloud network security (sg, nacl) control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-04-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Cloud network security (SG, NACL)",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cloud network security (SG, NACL)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the cloud network security (sg, nacl) control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Cloud network security (SG, NACL)\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the cloud network security (sg, nacl) control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud network security (SG, NACL)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_cloud_network_security_sg_nacl_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_cloud_network_security_sg_nacl_mcp.py` to expose it to your agent — or `python 04_cloud_network_security_sg_nacl_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cloud network security (SG, NACL)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the cloud network security (sg, nacl) control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud network security (SG, NACL)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the cloud network security (sg, nacl) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_cloud_network_security_sg_nacl_mcp.py",
          "url": "/audit-code/cloud-saas/04_cloud_network_security_sg_nacl_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Cloud network security (SG, NACL)\" (in-scope inventory for the cloud network security (sg, nacl) control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud network security (SG, NACL)\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud network security (SG, NACL)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the cloud network security (sg, nacl) control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Cloud network security (SG, NACL)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud network security (SG, NACL)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the cloud network security (sg, nacl) control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cloud network security (SG, NACL)\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cloud network security (SG, NACL)\" control must cover\n# fragment: cloud_network_security_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "cloud_network_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cloud network security (SG, NACL)\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the cloud network security (sg, nacl) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cloud network security (SG, NACL)\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cloud network security (SG, NACL)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the cloud network security (sg, nacl) control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Cloud network security (SG, NACL)\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cloud network security (SG, NACL)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cloud network security (SG, NACL)\", which part stays with the human auditor?",
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
          "id": "cld-04-q7",
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
          "id": "cld-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cloud network security (SG, NACL)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the cloud network security (sg, nacl) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the cloud network security (sg, nacl) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-04-q9",
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
          "id": "cld-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cloud network security (SG, NACL)\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-05",
    "order": 5,
    "title": "SaaS configuration",
    "subtitle": "Agentic technical & privacy audit of the saas configuration control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"SaaS configuration\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"SaaS configuration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the saas configuration control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-05-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "SaaS configuration",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"SaaS configuration\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the saas configuration control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"SaaS configuration\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the saas configuration control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"SaaS configuration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_saas_configuration_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_saas_configuration_mcp.py` to expose it to your agent — or `python 05_saas_configuration_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"SaaS configuration\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the saas configuration control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"SaaS configuration\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the saas configuration control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_saas_configuration_mcp.py",
          "url": "/audit-code/cloud-saas/05_saas_configuration_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"SaaS configuration\" (in-scope inventory for the saas configuration control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"SaaS configuration\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"SaaS configuration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the saas configuration control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"SaaS configuration\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"SaaS configuration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the saas configuration control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"SaaS configuration\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"SaaS configuration\" control must cover\n# fragment: saas_configuration_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "saas_configuration_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"SaaS configuration\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the saas configuration control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"SaaS configuration\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"SaaS configuration\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the saas configuration control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"SaaS configuration\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"SaaS configuration\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"SaaS configuration\", which part stays with the human auditor?",
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
          "id": "cld-05-q7",
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
          "id": "cld-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"SaaS configuration\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the saas configuration control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the saas configuration control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-05-q9",
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
          "id": "cld-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"SaaS configuration\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-06",
    "order": 6,
    "title": "Admin activity monitoring",
    "subtitle": "Agentic technical & privacy audit of the admin activity monitoring control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Admin activity monitoring\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Admin activity monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the admin activity monitoring control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-06-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Admin activity monitoring",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Admin activity monitoring\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the admin activity monitoring control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Admin activity monitoring\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the admin activity monitoring control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Admin activity monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_admin_activity_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_admin_activity_monitoring_mcp.py` to expose it to your agent — or `python 06_admin_activity_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Admin activity monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the admin activity monitoring control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Admin activity monitoring\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the admin activity monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_admin_activity_monitoring_mcp.py",
          "url": "/audit-code/cloud-saas/06_admin_activity_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Admin activity monitoring\" (in-scope inventory for the admin activity monitoring control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Admin activity monitoring\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Admin activity monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the admin activity monitoring control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Admin activity monitoring\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Admin activity monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the admin activity monitoring control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Admin activity monitoring\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Admin activity monitoring\" control must cover\n# fragment: admin_activity_monitoring_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "admin_activity_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Admin activity monitoring\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the admin activity monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Admin activity monitoring\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Admin activity monitoring\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the admin activity monitoring control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Admin activity monitoring\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Admin activity monitoring\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Admin activity monitoring\", which part stays with the human auditor?",
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
          "id": "cld-06-q7",
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
          "id": "cld-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Admin activity monitoring\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the admin activity monitoring control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the admin activity monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-06-q9",
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
          "id": "cld-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Admin activity monitoring\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-07",
    "order": 7,
    "title": "Business and service resilience",
    "subtitle": "Agentic technical & privacy audit of the business and service resilience control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Business and service resilience\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Business and service resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the business and service resilience control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-07-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Business and service resilience",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Business and service resilience\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the business and service resilience control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Business and service resilience\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the business and service resilience control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Business and service resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_business_and_service_resilience_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_business_and_service_resilience_mcp.py` to expose it to your agent — or `python 07_business_and_service_resilience_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Business and service resilience\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the business and service resilience control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Business and service resilience\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the business and service resilience control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_business_and_service_resilience_mcp.py",
          "url": "/audit-code/cloud-saas/07_business_and_service_resilience_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Business and service resilience\" (in-scope inventory for the business and service resilience control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business and service resilience\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Business and service resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the business and service resilience control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Business and service resilience\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Business and service resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the business and service resilience control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Business and service resilience\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Business and service resilience\" control must cover\n# fragment: business_service_resilience_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "business_service_resilience_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Business and service resilience\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the business and service resilience control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Business and service resilience\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Business and service resilience\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the business and service resilience control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Business and service resilience\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Business and service resilience\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Business and service resilience\", which part stays with the human auditor?",
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
          "id": "cld-07-q7",
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
          "id": "cld-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Business and service resilience\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the business and service resilience control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the business and service resilience control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-07-q9",
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
          "id": "cld-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Business and service resilience\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-08",
    "order": 8,
    "title": "Cloud supply chain",
    "subtitle": "Agentic technical & privacy audit of the cloud supply chain control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cloud supply chain\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud supply chain\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cloud supply chain control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-08-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Cloud supply chain",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cloud supply chain\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the cloud supply chain control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Cloud supply chain\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the cloud supply chain control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud supply chain\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_cloud_supply_chain_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_cloud_supply_chain_mcp.py` to expose it to your agent — or `python 08_cloud_supply_chain_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cloud supply chain\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the cloud supply chain control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud supply chain\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the cloud supply chain control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_cloud_supply_chain_mcp.py",
          "url": "/audit-code/cloud-saas/08_cloud_supply_chain_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Cloud supply chain\" (in-scope inventory for the cloud supply chain control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud supply chain\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud supply chain\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the cloud supply chain control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Cloud supply chain\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud supply chain\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the cloud supply chain control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cloud supply chain\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cloud supply chain\" control must cover\n# fragment: cloud_supply_chain_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "cloud_supply_chain_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cloud supply chain\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the cloud supply chain control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cloud supply chain\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cloud supply chain\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the cloud supply chain control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Cloud supply chain\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cloud supply chain\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cloud supply chain\", which part stays with the human auditor?",
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
          "id": "cld-08-q7",
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
          "id": "cld-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cloud supply chain\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the cloud supply chain control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the cloud supply chain control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-08-q9",
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
          "id": "cld-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cloud supply chain\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-09",
    "order": 9,
    "title": "Cloud partner",
    "subtitle": "Agentic technical & privacy audit of the cloud partner control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cloud partner\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud partner\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cloud partner control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-09-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Cloud partner",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cloud partner\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the cloud partner control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Cloud partner\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the cloud partner control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud partner\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_cloud_partner_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_cloud_partner_mcp.py` to expose it to your agent — or `python 09_cloud_partner_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cloud partner\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the cloud partner control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud partner\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the cloud partner control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_cloud_partner_mcp.py",
          "url": "/audit-code/cloud-saas/09_cloud_partner_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Cloud partner\" (in-scope inventory for the cloud partner control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud partner\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud partner\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the cloud partner control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Cloud partner\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Cloud partner\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the cloud partner control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cloud partner\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cloud partner\" control must cover\n# fragment: cloud_partner_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "cloud_partner_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cloud partner\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the cloud partner control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cloud partner\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cloud partner\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the cloud partner control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Cloud partner\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cloud partner\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cloud partner\", which part stays with the human auditor?",
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
          "id": "cld-09-q7",
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
          "id": "cld-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cloud partner\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the cloud partner control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the cloud partner control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-09-q9",
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
          "id": "cld-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cloud partner\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-10",
    "order": 10,
    "title": "Security assessments",
    "subtitle": "Agentic technical & privacy audit of the security assessments control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Security assessments\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Security assessments\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the security assessments control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-10-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Security assessments",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Security assessments\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the security assessments control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Security assessments\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the security assessments control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Security assessments\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_security_assessments_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_security_assessments_mcp.py` to expose it to your agent — or `python 10_security_assessments_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Security assessments\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the security assessments control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Security assessments\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the security assessments control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_security_assessments_mcp.py",
          "url": "/audit-code/cloud-saas/10_security_assessments_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Security assessments\" (in-scope inventory for the security assessments control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security assessments\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Security assessments\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the security assessments control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Security assessments\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Security assessments\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the security assessments control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Security assessments\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Security assessments\" control must cover\n# fragment: security_assessments_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "security_assessments_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Security assessments\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the security assessments control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Security assessments\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Security assessments\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the security assessments control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Security assessments\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Security assessments\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Security assessments\", which part stays with the human auditor?",
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
          "id": "cld-10-q7",
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
          "id": "cld-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Security assessments\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the security assessments control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the security assessments control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-10-q9",
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
          "id": "cld-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Security assessments\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-11",
    "order": 11,
    "title": "Data protection and lifecycle",
    "subtitle": "Agentic technical & privacy audit of the data protection and lifecycle control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data protection and lifecycle\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Data protection and lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data protection and lifecycle control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-11-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Data protection and lifecycle",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data protection and lifecycle\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data protection and lifecycle control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Data protection and lifecycle\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data protection and lifecycle control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Data protection and lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_data_protection_and_lifecycle_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_data_protection_and_lifecycle_mcp.py` to expose it to your agent — or `python 11_data_protection_and_lifecycle_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data protection and lifecycle\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data protection and lifecycle control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Data protection and lifecycle\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data protection and lifecycle control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_data_protection_and_lifecycle_mcp.py",
          "url": "/audit-code/cloud-saas/11_data_protection_and_lifecycle_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Data protection and lifecycle\" (in-scope inventory for the data protection and lifecycle control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data protection and lifecycle\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Data protection and lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data protection and lifecycle control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Data protection and lifecycle\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Data protection and lifecycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the data protection and lifecycle control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data protection and lifecycle\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data protection and lifecycle\" control must cover\n# fragment: data_protection_lifecycle_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "data_protection_lifecycle_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data protection and lifecycle\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data protection and lifecycle control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data protection and lifecycle\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data protection and lifecycle\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data protection and lifecycle control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data protection and lifecycle\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data protection and lifecycle\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data protection and lifecycle\", which part stays with the human auditor?",
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
          "id": "cld-11-q7",
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
          "id": "cld-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data protection and lifecycle\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data protection and lifecycle control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data protection and lifecycle control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-11-q9",
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
          "id": "cld-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data protection and lifecycle\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-12",
    "order": 12,
    "title": "Data sovereignty",
    "subtitle": "Agentic technical & privacy audit of the data sovereignty control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data sovereignty\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Data sovereignty\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data sovereignty control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-12-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Data sovereignty",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data sovereignty\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data sovereignty control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Data sovereignty\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data sovereignty control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Data sovereignty\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_data_sovereignty_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_data_sovereignty_mcp.py` to expose it to your agent — or `python 12_data_sovereignty_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data sovereignty\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data sovereignty control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Data sovereignty\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data sovereignty control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_data_sovereignty_mcp.py",
          "url": "/audit-code/cloud-saas/12_data_sovereignty_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Data sovereignty\" (in-scope inventory for the data sovereignty control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data sovereignty\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Data sovereignty\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data sovereignty control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Data sovereignty\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Data sovereignty\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the data sovereignty control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data sovereignty\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data sovereignty\" control must cover\n# fragment: data_sovereignty_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "data_sovereignty_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data sovereignty\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data sovereignty control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data sovereignty\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data sovereignty\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data sovereignty control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data sovereignty\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data sovereignty\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data sovereignty\", which part stays with the human auditor?",
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
          "id": "cld-12-q7",
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
          "id": "cld-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data sovereignty\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data sovereignty control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data sovereignty control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-12-q9",
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
          "id": "cld-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data sovereignty\" also serve privacy and regulatory goals?",
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
    "epochId": "cloud-saas",
    "id": "cld-13",
    "order": 13,
    "title": "Security Ticketing Engine (STE)",
    "subtitle": "Agentic technical & privacy audit of the security ticketing engine (ste) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Security Ticketing Engine (STE)\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Security Ticketing Engine (STE)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS / Azure / GCP control plane; CSPM (Wiz / Prisma / Defender); SaaS admin consoles (M365/Salesforce)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the security ticketing engine (ste) control (from AWS / Azure / GCP control plane)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "AWS / Azure / GCP control plane",
        "CSPM (Wiz / Prisma / Defender)",
        "SaaS admin consoles (M365/Salesforce)",
        "Cloud audit logs (CloudTrail)"
      ],
      "dataOwner": [
        "Cloud Platform team",
        "SaaS application owners",
        "Cloud security",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cloud Platform & SaaS (Software-as-a-Service) controls."
      }
    },
    "badge": {
      "id": "cld-13-badge",
      "name": "Cloud Platform & SaaS (Software-as-a-Service) Auditor",
      "emoji": "☁️"
    },
    "wonder": {
      "name": "Security Ticketing Engine (STE)",
      "location": "Cloud Platform & SaaS (Software-as-a-Service)",
      "era": "Present Day",
      "emoji": "☁️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Security Ticketing Engine (STE)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the security ticketing engine (ste) control (from AWS / Azure / GCP control plane)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Security Ticketing Engine (STE)\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the security ticketing engine (ste) control (from AWS / Azure / GCP control plane), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Security Ticketing Engine (STE)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_security_ticketing_engine_ste_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS / Azure / GCP control plane and CSPM (Wiz / Prisma / Defender) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_security_ticketing_engine_ste_mcp.py` to expose it to your agent — or `python 13_security_ticketing_engine_ste_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Capital One: a cloud misconfiguration at scale",
        "when": "2019",
        "where": "AWS-hosted banking application",
        "impact": "An SSRF flaw plus an over-permissive IAM role let an attacker read 100M+ customer records from cloud storage.",
        "body": [
          "The breach combined an application flaw with a cloud-platform control failure: a role with far more access than it needed, and no guardrail to stop the metadata-service abuse.",
          "It made the cloud landing zone, IAM least-privilege, and CSPM guardrails central audit subjects — the platform's defaults decide the blast radius."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cloud Platform & SaaS (Software-as-a-Service) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull AWS / Azure / GCP control plane · CSPM (Wiz / Prisma / Defender)",
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
          "event": "Capital One — SSRF + over-privileged role, 100M records",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SaaS misconfiguration (over-shared tenants) emerges as a top breach vector"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Security Ticketing Engine (STE)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the security ticketing engine (ste) control (from AWS / Azure / GCP control plane).",
        "The test: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Security Ticketing Engine (STE)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (AWS / Azure / GCP control plane, CSPM (Wiz / Prisma / Defender), SaaS admin consoles (M365/Salesforce)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the security ticketing engine (ste) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "Cloud Security Alliance CCM",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
        },
        {
          "title": "NIST SP 800-210 — cloud access control",
          "url": "https://csrc.nist.gov/pubs/sp/800/210/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_security_ticketing_engine_ste_mcp.py",
          "url": "/audit-code/cloud-saas/13_security_ticketing_engine_ste_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Security Ticketing Engine (STE)\" (in-scope inventory for the security ticketing engine (ste) control (from aws / azure / gcp control plane)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security Ticketing Engine (STE)\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Security Ticketing Engine (STE)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the security ticketing engine (ste) control (from AWS / Azure / GCP control plane) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS / Azure / GCP control plane APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS / Azure / GCP control plane gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS / Azure / GCP control plane; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Security Ticketing Engine (STE)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cloud Platform & SaaS (Software-as-a-Service) policy/standard and flag every item where the \"Security Ticketing Engine (STE)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — In-scope inventory for the security ticketing engine (ste) control (from AWS / Azure / GCP control plane))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Security Ticketing Engine (STE)\",\n  \"domain\": \"Cloud Platform & SaaS (Software-as-a-Service)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cld_",
        "/evidence/cloud-saas_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Cloud Platform team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Security Ticketing Engine (STE)\" control must cover\n# fragment: security_ticketing_engine_",
        "/evidence/cloud-saas_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "cloud-saas_inventory.json",
            "isDir": false
          },
          {
            "name": "cloud-saas_state.json",
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
          "value": "FLAG{cld_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/cloud-saas_inventory.json",
          "value": "security_ticketing_engine_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/cloud-saas_state.json",
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
          "id": "cld-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Security Ticketing Engine (STE)\" sub-process of Cloud Platform & SaaS (Software-as-a-Service)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the security ticketing engine (ste) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cld-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Security Ticketing Engine (STE)\" matter to the broader Cloud Platform & SaaS (Software-as-a-Service) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cloud Platform & SaaS (Software-as-a-Service) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cld-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Security Ticketing Engine (STE)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the security ticketing engine (ste) control (from AWS / Azure / GCP control plane) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cld-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Security Ticketing Engine (STE)\"?",
          "options": [
            "AWS / Azure / GCP control plane (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS / Azure / GCP control plane) via read-only access."
        },
        {
          "id": "cld-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Security Ticketing Engine (STE)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Cloud Platform team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud Platform team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cld-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Security Ticketing Engine (STE)\", which part stays with the human auditor?",
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
          "id": "cld-13-q7",
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
          "id": "cld-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Security Ticketing Engine (STE)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the security ticketing engine (ste) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the security ticketing engine (ste) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cld-13-q9",
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
          "id": "cld-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Security Ticketing Engine (STE)\" also serve privacy and regulatory goals?",
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
