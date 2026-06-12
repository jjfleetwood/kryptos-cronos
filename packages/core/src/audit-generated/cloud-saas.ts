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
      "objective": "Prove the \"Cloud landing zone and guardrails\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify every cloud account/subscription is governed by the landing zone's guardrails. PASS: all accounts are vended through the landing zone with org-level preventive guardrails (SCPs / Azure Policy) that local admins can't disable — deny public object storage, require encryption + logging, restrict regions, block root keys; detective controls flag drift. Exceptions: accounts created outside the landing zone (no guardrails), guardrails left in audit-only mode, and accounts where the baseline was detached.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS Control Tower + Organizations SCPs / Azure Landing Zones + Policy / GCP Org Policy; CSPM — Wiz / Prisma / Defender for Cloud; The account/subscription inventory) as tools — e.g. `aws organizations list-accounts vs Control Tower enrolled accounts (th`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The landing-zone definition (AWS Control Tower / Azure Landing Zone) + the org-level guardrails (SCPs / Azure Policy)",
        "The list of enforced preventive + detective guardrails (deny public object storage, require encryption + logging, region restriction, block root access keys)",
        "The account/subscription baseline applied to every account (logging, IAM, network)",
        "The drift/non-conformance report against the landing-zone standard"
      ],
      "system": [
        "AWS Control Tower + Organizations SCPs / Azure Landing Zones + Policy / GCP Org Policy",
        "CSPM — Wiz / Prisma / Defender for Cloud",
        "The account/subscription inventory"
      ],
      "dataOwner": [
        "Cloud platform / Cloud CoE — owns the landing zone",
        "Cloud security — owns the guardrails",
        "Account owners"
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
      "tagline": "Auditing \"Cloud landing zone and guardrails\" as a repeatable agentic workflow: pull the real evidence (The landing-zone definition (AWS Control Tower / Azure Landing Zone) + the org-level guardrails (SCPs / Azure Policy)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Cloud landing zone and guardrails\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the landing-zone definition (AWS Control Tower / Azure Landing Zone) + the org-level guardrails (SCPs / Azure Policy), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS Control Tower + Organizations SCPs / Azure Landing Zones + Policy / GCP Org Policy, CSPM — Wiz / Prisma / Defender for Cloud, The account/subscription inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `aws organizations list-accounts vs Control Tower enrolled accounts (the un-gover` — read-only, against the systems of record.",
        "The test itself is specific. Verify every cloud account/subscription is governed by the landing zone's guardrails. PASS: all accounts are vended through the landing zone with org-level preventive guardrails (SCPs / Azure Policy) that local admins can't disable — deny public object storage, require encryption + logging, restrict regions, block root keys; detective controls flag drift. Exceptions: accounts created outside the landing zone (no guardrails), guardrails left in audit-only mode, and accounts where the baseline was detached. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_cloud_landing_zone_and_guardrails_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS Control Tower + Organizations SCPs / Azure Landing Zones + Policy / GCP Org Policy and CSPM — Wiz / Prisma / Defender for Cloud (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AWS Control Tower + Organizations SCPs / Azure Landing Zones + Policy / GCP Org Policy · CSPM — Wiz / Prisma / Defender for Cloud",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "aws organizations list-accounts vs Control Tower enrolled accounts (the un-governed gap)\nlist SCPs + Azure Policy assignments at the org/management-group root; check enforce vs audit mode\nCSPM: accounts/subscriptions non-conformant to the baseline\nlook for accounts in an exempt OU or with guardrail SCPs detached"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The landing-zone definition (AWS Control Tower / Azure Landing Zone) + the org-level guardrails (SCPs / Azure Policy).",
        "The test: Verify every cloud account/subscription is governed by the landing zone's guardrails.",
        "Reconcile the systems of record (AWS Control Tower + Organizations SCPs / Azure Landing Zones + Policy / GCP Org Policy, CSPM — Wiz / Prisma / Defender for Cloud, The account/subscription inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A dozen AWS accounts were created directly (not via Control Tower), so they carry no SCP guardrails — public S3 and root access keys are possible there, and CSPM shows several buckets already public."
      ],
      "references": [
        {
          "title": "AWS Control Tower / Well-Architected",
          "url": "https://docs.aws.amazon.com/controltower/"
        },
        {
          "title": "CIS AWS Foundations Benchmark",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "CSA Cloud Controls Matrix",
          "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Cloud landing zone and guardrails\" (the landing-zone definition (aws control tower / azure landing zone) + the org-level guardrails (scps / azure policy)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud landing zone and guardrails\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Verify every cloud account/subscription is governed by the landing zone's guardrails. PASS: all accounts are vended through the landing zone with org-level preventive guardrails (SCPs / Azure Policy) that local admins can't disable — deny public object storage, require encryption + logging, restrict regions, block root keys; detective controls flag drift. Exceptions: accounts created outside the landing zone (no guardrails), guardrails left in audit-only mode, and accounts where the baseline was detached. The evidence — The landing-zone definition (AWS Control Tower / Azure Landing Zone) + the org-level guardrails (SCPs / Azure Policy) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS Control Tower + Organizations SCPs / Azure Landing Zones + Policy / GCP Org Policy APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS Control Tower + Organizations SCPs / Azure Landing Zones + Policy / GCP Org Policy gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS Control Tower + Organizations SCPs / Azure Landing Zones + Policy / GCP Org Policy; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Cloud landing zone and guardrails\" Audit Evidence\n\nThe test:\nVerify every cloud account/subscription is governed by the landing zone's guardrails. PASS: all accounts are vended through the landing zone with org-level preventive guardrails (SCPs / Azure Policy) that local admins can't disable — deny public object storage, require encryption + logging, restrict regions, block root keys; detective controls flag drift. Exceptions: accounts created outside the landing zone (no guardrails), guardrails left in audit-only mode, and accounts where the baseline was detached.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The landing-zone definition (AWS Control Tower / Azure Landing Zone) + the org-level guardrails (SCPs / Azure Policy))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The landing-zone definition (AWS Control Tower / Azure Landing Zone) + the org-level guardrails (SCPs / Azure Policy) reconciled against policy, plus the resulting findings working paper",
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
            "AWS Control Tower + Organizations SCPs / Azure Landing Zones + Policy / GCP Org Policy (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS Control Tower + Organizations SCPs / Azure Landing Zones + Policy / GCP Org Policy) via read-only access."
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
            "Cloud platform / Cloud CoE — owns the landing zone (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud platform / Cloud CoE — owns the landing zone owns the control data; the auditor independently verifies it."
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
            "A dozen AWS accounts were created directly (not via Control Tower), so they carry no SCP guardrails — public S3 and root access keys are possible there, and CSPM shows several buckets already public.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A dozen AWS accounts were created directly (not via Control Tower), so they carry no SCP guardrails — public S3 and root access keys are possible there, and CSPM shows several buckets already public."
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
      "objective": "Prove the \"Cloud IAM and privileged roles\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess cloud identity and privilege. PASS: human access is federated via SSO (few/no long-lived IAM users or access keys); privileged roles are least-privilege and just-in-time (e.g. Entra PIM), not standing; root/break-glass is MFA-protected, sealed, and alerts on use; access keys are rotated and unused permissions removed. Exceptions: long-lived IAM users with access keys, standing Administrator/Owner, wildcard `*:*` policies, root with no MFA or in routine use, and access keys unused or un-rotated for ages.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS IAM + IAM Identity Center / Azure Entra ID + PIM / GCP IAM; Access Analyzer / Access Advisor / Entra access reviews; CSPM / CIEM — Wiz / Sonrai) as tools — e.g. `aws iam list-users + list-access-keys (key age, last-used); flag long-`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The cloud IAM principal inventory (users, roles, service principals) + their effective permissions",
        "The list of admin/privileged roles (Administrator, Owner, iam:*, *:*) and who/what holds them",
        "Unused-access + last-used data (IAM Access Analyzer / Access Advisor / Entra access reviews)",
        "Root / break-glass config (MFA, sealed, monitored) and federation/SSO vs local IAM users + access keys"
      ],
      "system": [
        "AWS IAM + IAM Identity Center / Azure Entra ID + PIM / GCP IAM",
        "Access Analyzer / Access Advisor / Entra access reviews",
        "CSPM / CIEM — Wiz / Sonrai"
      ],
      "dataOwner": [
        "Cloud security / CIEM — owns cloud identity",
        "Cloud platform",
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
      "tagline": "Auditing \"Cloud IAM and privileged roles\" as a repeatable agentic workflow: pull the real evidence (The cloud IAM principal inventory (users, roles, service principals) + their effective permissions) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Cloud IAM and privileged roles\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the cloud IAM principal inventory (users, roles, service principals) + their effective permissions, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS IAM + IAM Identity Center / Azure Entra ID + PIM / GCP IAM, Access Analyzer / Access Advisor / Entra access reviews, CSPM / CIEM — Wiz / Sonrai — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `aws iam list-users + list-access-keys (key age, last-used); flag long-lived keys` — read-only, against the systems of record.",
        "The test itself is specific. Assess cloud identity and privilege. PASS: human access is federated via SSO (few/no long-lived IAM users or access keys); privileged roles are least-privilege and just-in-time (e.g. Entra PIM), not standing; root/break-glass is MFA-protected, sealed, and alerts on use; access keys are rotated and unused permissions removed. Exceptions: long-lived IAM users with access keys, standing Administrator/Owner, wildcard `*:*` policies, root with no MFA or in routine use, and access keys unused or un-rotated for ages. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_cloud_iam_and_privileged_roles_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS IAM + IAM Identity Center / Azure Entra ID + PIM / GCP IAM and Access Analyzer / Access Advisor / Entra access reviews (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AWS IAM + IAM Identity Center / Azure Entra ID + PIM / GCP IAM · Access Analyzer / Access Advisor / Entra access reviews",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "aws iam list-users + list-access-keys (key age, last-used); flag long-lived keys\nfind policies granting Action:'*' on Resource:'*' (wildcard admin)\nIAM Access Analyzer 'unused access' findings + Access Advisor last-accessed services\nEntra PIM: standing vs eligible role assignments; confirm root/global-admin MFA + usage"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The cloud IAM principal inventory (users, roles, service principals) + their effective permissions.",
        "The test: Assess cloud identity and privilege.",
        "Reconcile the systems of record (AWS IAM + IAM Identity Center / Azure Entra ID + PIM / GCP IAM, Access Analyzer / Access Advisor / Entra access reviews, CSPM / CIEM — Wiz / Sonrai) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Thirty long-lived IAM users with active access keys (several unused for a year), three custom policies granting `*:*`, and the root account has an active access key with no MFA."
      ],
      "references": [
        {
          "title": "AWS IAM Security Best Practices",
          "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
        },
        {
          "title": "CIS AWS / Azure Foundations",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "NIST SP 800-207",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Cloud IAM and privileged roles\" (the cloud iam principal inventory (users, roles, service principals) + their effective permissions), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud IAM and privileged roles\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Assess cloud identity and privilege. PASS: human access is federated via SSO (few/no long-lived IAM users or access keys); privileged roles are least-privilege and just-in-time (e.g. Entra PIM), not standing; root/break-glass is MFA-protected, sealed, and alerts on use; access keys are rotated and unused permissions removed. Exceptions: long-lived IAM users with access keys, standing Administrator/Owner, wildcard `*:*` policies, root with no MFA or in routine use, and access keys unused or un-rotated for ages. The evidence — The cloud IAM principal inventory (users, roles, service principals) + their effective permissions — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS IAM + IAM Identity Center / Azure Entra ID + PIM / GCP IAM APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS IAM + IAM Identity Center / Azure Entra ID + PIM / GCP IAM gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS IAM + IAM Identity Center / Azure Entra ID + PIM / GCP IAM; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Cloud IAM and privileged roles\" Audit Evidence\n\nThe test:\nAssess cloud identity and privilege. PASS: human access is federated via SSO (few/no long-lived IAM users or access keys); privileged roles are least-privilege and just-in-time (e.g. Entra PIM), not standing; root/break-glass is MFA-protected, sealed, and alerts on use; access keys are rotated and unused permissions removed. Exceptions: long-lived IAM users with access keys, standing Administrator/Owner, wildcard `*:*` policies, root with no MFA or in routine use, and access keys unused or un-rotated for ages.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The cloud IAM principal inventory (users, roles, service principals) + their effective permissions)\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The cloud IAM principal inventory (users, roles, service principals) + their effective permissions reconciled against policy, plus the resulting findings working paper",
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
            "AWS IAM + IAM Identity Center / Azure Entra ID + PIM / GCP IAM (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS IAM + IAM Identity Center / Azure Entra ID + PIM / GCP IAM) via read-only access."
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
            "Cloud security / CIEM — owns cloud identity (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud security / CIEM — owns cloud identity owns the control data; the auditor independently verifies it."
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
            "Thirty long-lived IAM users with active access keys (several unused for a year), three custom policies granting `*:*`, and the root account has an active access key with no MFA.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Thirty long-lived IAM users with active access keys (several unused for a year), three custom policies granting `*:*`, and the root account has an active access key with no MFA."
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
      "objective": "Prove the \"Logging and monitoring enablement\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify cloud audit + threat logging is on everywhere and tamper-resistant. PASS: management-event logging (CloudTrail/Activity Log) is enabled org-wide across all regions; Config + flow logs + threat detection (GuardDuty/Defender for Cloud) are on; logs ship to a central, immutable archive in a separate security account with retention per policy; and findings reach the SIEM. Exceptions: accounts/regions with no trail, logs writable/deletable by the workload account, threat detection off, and findings that go nowhere.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS CloudTrail / Config / GuardDuty / Security Hub — or Azure Monitor + Defender for Cloud; Central log-archive account (S3 + Object Lock); SIEM) as tools — e.g. `aws cloudtrail describe-trails across accounts/regions; confirm an org`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "CloudTrail/Activity Log + Config + VPC flow-log + threat-detection (GuardDuty/Defender) enablement status across every account and region",
        "The central log archive (immutable, in a separate security account) + its retention",
        "Detection coverage — GuardDuty/Defender/Security Hub findings flowing to the SIEM",
        "The gaps — accounts/regions with logging off or logs deletable locally"
      ],
      "system": [
        "AWS CloudTrail / Config / GuardDuty / Security Hub — or Azure Monitor + Defender for Cloud",
        "Central log-archive account (S3 + Object Lock)",
        "SIEM"
      ],
      "dataOwner": [
        "Cloud security — owns detection",
        "Cloud platform — enables logging",
        "SOC"
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
      "tagline": "Auditing \"Logging and monitoring enablement\" as a repeatable agentic workflow: pull the real evidence (CloudTrail/Activity Log + Config + VPC flow-log + threat-detection (GuardDuty/Defender) enablement status across every account and region) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Logging and monitoring enablement\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me cloudTrail/Activity Log + Config + VPC flow-log + threat-detection (GuardDuty/Defender) enablement status across every account and region, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS CloudTrail / Config / GuardDuty / Security Hub — or Azure Monitor + Defender for Cloud, Central log-archive account (S3 + Object Lock), SIEM — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `aws cloudtrail describe-trails across accounts/regions; confirm an org-trail tha` — read-only, against the systems of record.",
        "The test itself is specific. Verify cloud audit + threat logging is on everywhere and tamper-resistant. PASS: management-event logging (CloudTrail/Activity Log) is enabled org-wide across all regions; Config + flow logs + threat detection (GuardDuty/Defender for Cloud) are on; logs ship to a central, immutable archive in a separate security account with retention per policy; and findings reach the SIEM. Exceptions: accounts/regions with no trail, logs writable/deletable by the workload account, threat detection off, and findings that go nowhere. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_logging_and_monitoring_enablement_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS CloudTrail / Config / GuardDuty / Security Hub — or Azure Monitor + Defender for Cloud and Central log-archive account (S3 + Object Lock) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AWS CloudTrail / Config / GuardDuty / Security Hub — or Azure Monitor + Defender for Cloud · Central log-archive account (S3 + Object Lock)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "aws cloudtrail describe-trails across accounts/regions; confirm an org-trail that is multi-region\nGuardDuty/Defender enablement per account; AWS Config recorder status\nconfirm the log-archive bucket has Object Lock and sits in a separate account with deny-delete\nSecurity Hub → SIEM integration health"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: CloudTrail/Activity Log + Config + VPC flow-log + threat-detection (GuardDuty/Defender) enablement status across every account and region.",
        "The test: Verify cloud audit + threat logging is on everywhere and tamper-resistant.",
        "Reconcile the systems of record (AWS CloudTrail / Config / GuardDuty / Security Hub — or Azure Monitor + Defender for Cloud, Central log-archive account (S3 + Object Lock), SIEM) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. CloudTrail is off in three regions and two accounts entirely; the log bucket lives in the same workload account and is deletable by its admins; GuardDuty is disabled outside the primary region."
      ],
      "references": [
        {
          "title": "CIS AWS Foundations",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "AWS Security Reference Architecture",
          "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/"
        },
        {
          "title": "NIST SP 800-92",
          "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Logging and monitoring enablement\" (cloudtrail/activity log + config + vpc flow-log + threat-detection (guardduty/defender) enablement status across every account and region), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Logging and monitoring enablement\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Verify cloud audit + threat logging is on everywhere and tamper-resistant. PASS: management-event logging (CloudTrail/Activity Log) is enabled org-wide across all regions; Config + flow logs + threat detection (GuardDuty/Defender for Cloud) are on; logs ship to a central, immutable archive in a separate security account with retention per policy; and findings reach the SIEM. Exceptions: accounts/regions with no trail, logs writable/deletable by the workload account, threat detection off, and findings that go nowhere. The evidence — CloudTrail/Activity Log + Config + VPC flow-log + threat-detection (GuardDuty/Defender) enablement status across every account and region — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS CloudTrail / Config / GuardDuty / Security Hub — or Azure Monitor + Defender for Cloud APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS CloudTrail / Config / GuardDuty / Security Hub — or Azure Monitor + Defender for Cloud gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS CloudTrail / Config / GuardDuty / Security Hub — or Azure Monitor + Defender for Cloud; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Logging and monitoring enablement\" Audit Evidence\n\nThe test:\nVerify cloud audit + threat logging is on everywhere and tamper-resistant. PASS: management-event logging (CloudTrail/Activity Log) is enabled org-wide across all regions; Config + flow logs + threat detection (GuardDuty/Defender for Cloud) are on; logs ship to a central, immutable archive in a separate security account with retention per policy; and findings reach the SIEM. Exceptions: accounts/regions with no trail, logs writable/deletable by the workload account, threat detection off, and findings that go nowhere.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — CloudTrail/Activity Log + Config + VPC flow-log + threat-detection (GuardDuty/Defender) enablement status across every account and region)\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The CloudTrail/Activity Log + Config + VPC flow-log + threat-detection (GuardDuty/Defender) enablement status across every account and region reconciled against policy, plus the resulting findings working paper",
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
            "AWS CloudTrail / Config / GuardDuty / Security Hub — or Azure Monitor + Defender for Cloud (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS CloudTrail / Config / GuardDuty / Security Hub — or Azure Monitor + Defender for Cloud) via read-only access."
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
            "Cloud security — owns detection (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud security — owns detection owns the control data; the auditor independently verifies it."
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
            "CloudTrail is off in three regions and two accounts entirely; the log bucket lives in the same workload account and is deletable by its admins; GuardDuty is disabled outside the primary region.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. CloudTrail is off in three regions and two accounts entirely; the log bucket lives in the same workload account and is deletable by its admins; GuardDuty is disabled outside the primary region."
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
      "objective": "Prove the \"Cloud network security (SG, NACL)\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess cloud network exposure. PASS: no security group allows 0.0.0.0/0 to sensitive ports (SSH 22, RDP 3389, DB 3306/5432, etc.); ingress is least-privilege and justified; default VPCs/SGs aren't used for workloads; private subnets + endpoints keep the data plane off the internet; and flow logs confirm no unexpected ingress. Exceptions: SSH/RDP/DB open to the world, over-broad SG rules, publicly-accessible databases, and default-SG allow-all in use.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (AWS VPC SG/NACL / Azure NSG / GCP firewall rules; CSPM — Wiz / Prisma; VPC flow logs) as tools — e.g. `aws ec2 describe-security-groups → rules with CidrIp 0.0.0.0/0 on 22 /`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The security-group + NACL (or NSG) rule export across the estate",
        "The list of internet-exposed resources (0.0.0.0/0 ingress) and the ports open",
        "Default-VPC / default-security-group usage",
        "VPC flow logs showing actual ingress to exposed resources"
      ],
      "system": [
        "AWS VPC SG/NACL / Azure NSG / GCP firewall rules",
        "CSPM — Wiz / Prisma",
        "VPC flow logs"
      ],
      "dataOwner": [
        "Cloud platform / network — own cloud networking",
        "Cloud security — owns the exposure policy",
        "App owners"
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
      "tagline": "Auditing \"Cloud network security (SG, NACL)\" as a repeatable agentic workflow: pull the real evidence (The security-group + NACL (or NSG) rule export across the estate) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Cloud network security (SG, NACL)\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the security-group + NACL (or NSG) rule export across the estate, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AWS VPC SG/NACL / Azure NSG / GCP firewall rules, CSPM — Wiz / Prisma, VPC flow logs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `aws ec2 describe-security-groups → rules with CidrIp 0.0.0.0/0 on 22 / 3389 / 33` — read-only, against the systems of record.",
        "The test itself is specific. Assess cloud network exposure. PASS: no security group allows 0.0.0.0/0 to sensitive ports (SSH 22, RDP 3389, DB 3306/5432, etc.); ingress is least-privilege and justified; default VPCs/SGs aren't used for workloads; private subnets + endpoints keep the data plane off the internet; and flow logs confirm no unexpected ingress. Exceptions: SSH/RDP/DB open to the world, over-broad SG rules, publicly-accessible databases, and default-SG allow-all in use. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_cloud_network_security_sg_nacl_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AWS VPC SG/NACL / Azure NSG / GCP firewall rules and CSPM — Wiz / Prisma (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AWS VPC SG/NACL / Azure NSG / GCP firewall rules · CSPM — Wiz / Prisma",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "aws ec2 describe-security-groups → rules with CidrIp 0.0.0.0/0 on 22 / 3389 / 3306 / 5432\nCSPM 'publicly exposed' resource inventory\ncheck for RDS / databases with PubliclyAccessible=true\nflow logs: accepted ingress from the internet to exposed resources"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The security-group + NACL (or NSG) rule export across the estate.",
        "The test: Assess cloud network exposure.",
        "Reconcile the systems of record (AWS VPC SG/NACL / Azure NSG / GCP firewall rules, CSPM — Wiz / Prisma, VPC flow logs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Several security groups allow SSH and RDP from 0.0.0.0/0, two RDS databases are publicly accessible, and the default VPC's allow-all security group is attached to production workloads."
      ],
      "references": [
        {
          "title": "CIS AWS / Azure Foundations",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "AWS VPC Security Best Practices",
          "url": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Cloud network security (SG, NACL)\" (the security-group + nacl (or nsg) rule export across the estate), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud network security (SG, NACL)\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Assess cloud network exposure. PASS: no security group allows 0.0.0.0/0 to sensitive ports (SSH 22, RDP 3389, DB 3306/5432, etc.); ingress is least-privilege and justified; default VPCs/SGs aren't used for workloads; private subnets + endpoints keep the data plane off the internet; and flow logs confirm no unexpected ingress. Exceptions: SSH/RDP/DB open to the world, over-broad SG rules, publicly-accessible databases, and default-SG allow-all in use. The evidence — The security-group + NACL (or NSG) rule export across the estate — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AWS VPC SG/NACL / Azure NSG / GCP firewall rules APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AWS VPC SG/NACL / Azure NSG / GCP firewall rules gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AWS VPC SG/NACL / Azure NSG / GCP firewall rules; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Cloud network security (SG, NACL)\" Audit Evidence\n\nThe test:\nAssess cloud network exposure. PASS: no security group allows 0.0.0.0/0 to sensitive ports (SSH 22, RDP 3389, DB 3306/5432, etc.); ingress is least-privilege and justified; default VPCs/SGs aren't used for workloads; private subnets + endpoints keep the data plane off the internet; and flow logs confirm no unexpected ingress. Exceptions: SSH/RDP/DB open to the world, over-broad SG rules, publicly-accessible databases, and default-SG allow-all in use.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The security-group + NACL (or NSG) rule export across the estate)\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The security-group + NACL (or NSG) rule export across the estate reconciled against policy, plus the resulting findings working paper",
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
            "AWS VPC SG/NACL / Azure NSG / GCP firewall rules (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., AWS VPC SG/NACL / Azure NSG / GCP firewall rules) via read-only access."
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
            "Cloud platform / network — own cloud networking (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud platform / network — own cloud networking owns the control data; the auditor independently verifies it."
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
            "Several security groups allow SSH and RDP from 0.0.0.0/0, two RDS databases are publicly accessible, and the default VPC's allow-all security group is attached to production workloads.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Several security groups allow SSH and RDP from 0.0.0.0/0, two RDS databases are publicly accessible, and the default VPC's allow-all security group is attached to production workloads."
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
      "objective": "Prove the \"SaaS configuration\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess the security configuration of business-critical SaaS. PASS: each major SaaS enforces SSO + MFA, restricts external sharing/guest access per policy, limits admin roles, enables audit logging shipped to the SIEM, and follows a documented baseline (e.g. CIS M365); OAuth app grants are reviewed. Exceptions: SaaS with local logins bypassing SSO, open external sharing, excessive global admins, audit logging off, and risky third-party OAuth grants with broad scopes.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (SSPM — AppOmni / Adaptive Shield / Microsoft Secure Score; The SaaS admin consoles (M365, Salesforce, Workday, ServiceNow, Slack); IdP (SSO)) as tools — e.g. `SSPM scan across connected SaaS for posture drift vs baseline`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The SaaS application inventory (M365, Salesforce, Workday, ServiceNow, Slack) + each app's security-config baseline",
        "Each app's posture vs the baseline (SSO + MFA enforced, external sharing, admin roles, audit logging on)",
        "SaaS Security Posture Management (SSPM) scan results for misconfigurations",
        "The third-party OAuth app / integration grants per SaaS tenant"
      ],
      "system": [
        "SSPM — AppOmni / Adaptive Shield / Microsoft Secure Score",
        "The SaaS admin consoles (M365, Salesforce, Workday, ServiceNow, Slack)",
        "IdP (SSO)"
      ],
      "dataOwner": [
        "SaaS application owners — own each tenant's config",
        "Cloud/SaaS security — owns the baseline",
        "IAM (SSO)"
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
      "tagline": "Auditing \"SaaS configuration\" as a repeatable agentic workflow: pull the real evidence (The SaaS application inventory (M365, Salesforce, Workday, ServiceNow, Slack) + each app's security-config baseline) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"SaaS configuration\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the SaaS application inventory (M365, Salesforce, Workday, ServiceNow, Slack) + each app's security-config baseline, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SSPM — AppOmni / Adaptive Shield / Microsoft Secure Score, The SaaS admin consoles (M365, Salesforce, Workday, ServiceNow, Slack), IdP (SSO) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SSPM scan across connected SaaS for posture drift vs baseline` — read-only, against the systems of record.",
        "The test itself is specific. Assess the security configuration of business-critical SaaS. PASS: each major SaaS enforces SSO + MFA, restricts external sharing/guest access per policy, limits admin roles, enables audit logging shipped to the SIEM, and follows a documented baseline (e.g. CIS M365); OAuth app grants are reviewed. Exceptions: SaaS with local logins bypassing SSO, open external sharing, excessive global admins, audit logging off, and risky third-party OAuth grants with broad scopes. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_saas_configuration_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SSPM — AppOmni / Adaptive Shield / Microsoft Secure Score and The SaaS admin consoles (M365, Salesforce, Workday, ServiceNow, Slack) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull SSPM — AppOmni / Adaptive Shield / Microsoft Secure Score · The SaaS admin consoles (M365, Salesforce, Workday, ServiceNow, Slack)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "SSPM scan across connected SaaS for posture drift vs baseline\nM365: Secure Score + Conditional Access, external-sharing settings, global-admin count\nreview OAuth / enterprise-app grants + their scopes per tenant\nconfirm audit-log export to the SIEM for each SaaS"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The SaaS application inventory (M365, Salesforce, Workday, ServiceNow, Slack) + each app's security-config baseline.",
        "The test: Assess the security configuration of business-critical SaaS.",
        "Reconcile the systems of record (SSPM — AppOmni / Adaptive Shield / Microsoft Secure Score, The SaaS admin consoles (M365, Salesforce, Workday, ServiceNow, Slack), IdP (SSO)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Salesforce permits local password logins that bypass SSO/MFA, M365 has 14 global admins and open guest sharing, and a third-party OAuth app holds org-wide 'read all mail' that nobody remembers approving."
      ],
      "references": [
        {
          "title": "CIS Microsoft 365 Benchmark",
          "url": "https://www.cisecurity.org/benchmark/microsoft_365"
        },
        {
          "title": "CSA SaaS Governance Best Practices",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "OWASP SaaS Security",
          "url": "https://owasp.org/"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"SaaS configuration\" (the saas application inventory (m365, salesforce, workday, servicenow, slack) + each app's security-config baseline), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"SaaS configuration\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Assess the security configuration of business-critical SaaS. PASS: each major SaaS enforces SSO + MFA, restricts external sharing/guest access per policy, limits admin roles, enables audit logging shipped to the SIEM, and follows a documented baseline (e.g. CIS M365); OAuth app grants are reviewed. Exceptions: SaaS with local logins bypassing SSO, open external sharing, excessive global admins, audit logging off, and risky third-party OAuth grants with broad scopes. The evidence — The SaaS application inventory (M365, Salesforce, Workday, ServiceNow, Slack) + each app's security-config baseline — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SSPM — AppOmni / Adaptive Shield / Microsoft Secure Score APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SSPM — AppOmni / Adaptive Shield / Microsoft Secure Score gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SSPM — AppOmni / Adaptive Shield / Microsoft Secure Score; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"SaaS configuration\" Audit Evidence\n\nThe test:\nAssess the security configuration of business-critical SaaS. PASS: each major SaaS enforces SSO + MFA, restricts external sharing/guest access per policy, limits admin roles, enables audit logging shipped to the SIEM, and follows a documented baseline (e.g. CIS M365); OAuth app grants are reviewed. Exceptions: SaaS with local logins bypassing SSO, open external sharing, excessive global admins, audit logging off, and risky third-party OAuth grants with broad scopes.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The SaaS application inventory (M365, Salesforce, Workday, ServiceNow, Slack) + each app's security-config baseline)\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The SaaS application inventory (M365, Salesforce, Workday, ServiceNow, Slack) + each app's security-config baseline reconciled against policy, plus the resulting findings working paper",
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
            "SSPM — AppOmni / Adaptive Shield / Microsoft Secure Score (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SSPM — AppOmni / Adaptive Shield / Microsoft Secure Score) via read-only access."
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
            "SaaS application owners — own each tenant's config (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "SaaS application owners — own each tenant's config owns the control data; the auditor independently verifies it."
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
            "Salesforce permits local password logins that bypass SSO/MFA, M365 has 14 global admins and open guest sharing, and a third-party OAuth app holds org-wide 'read all mail' that nobody remembers approving.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Salesforce permits local password logins that bypass SSO/MFA, M365 has 14 global admins and open guest sharing, and a third-party OAuth app holds org-wide 'read all mail' that nobody remembers approving."
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
      "objective": "Prove the \"Admin activity monitoring\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify cloud administrative + control-plane activity is monitored for abuse. PASS: high-risk control-plane events are alerted (IAM/policy changes, new access keys, KMS key use, SG opened to 0.0.0.0/0, CloudTrail disabled, root login, mass deletion); alerts cover all accounts and route to a monitored queue; and there's evidence they're triaged. Exceptions: no detections on control-plane events, key risky actions unalerted (e.g. trail-disabled), accounts missing from the pipeline, and alerts no one reviews.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (SIEM (Sentinel/Splunk) + cloud-native (GuardDuty, Defender, Security Hub); CloudTrail / Activity Log (event source); SOAR / case management) as tools — e.g. `confirm detections for: PutUserPolicy/AttachRolePolicy, CreateAccessKe`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The detection rules over cloud admin / control-plane activity (CloudTrail / Activity Log)",
        "Alerting on high-risk actions (IAM/policy changes, key/secret access, security-group opened to world, logging disabled, root usage)",
        "The triage record for admin-activity alerts",
        "Coverage — all accounts feeding the detection pipeline"
      ],
      "system": [
        "SIEM (Sentinel/Splunk) + cloud-native (GuardDuty, Defender, Security Hub)",
        "CloudTrail / Activity Log (event source)",
        "SOAR / case management"
      ],
      "dataOwner": [
        "Cloud security / detection engineering",
        "SOC",
        "Cloud platform"
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
      "tagline": "Auditing \"Admin activity monitoring\" as a repeatable agentic workflow: pull the real evidence (The detection rules over cloud admin / control-plane activity (CloudTrail / Activity Log)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Admin activity monitoring\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the detection rules over cloud admin / control-plane activity (CloudTrail / Activity Log), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SIEM (Sentinel/Splunk) + cloud-native (GuardDuty, Defender, Security Hub), CloudTrail / Activity Log (event source), SOAR / case management — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm detections for: PutUserPolicy/AttachRolePolicy, CreateAccessKey, StopLog` — read-only, against the systems of record.",
        "The test itself is specific. Verify cloud administrative + control-plane activity is monitored for abuse. PASS: high-risk control-plane events are alerted (IAM/policy changes, new access keys, KMS key use, SG opened to 0.0.0.0/0, CloudTrail disabled, root login, mass deletion); alerts cover all accounts and route to a monitored queue; and there's evidence they're triaged. Exceptions: no detections on control-plane events, key risky actions unalerted (e.g. trail-disabled), accounts missing from the pipeline, and alerts no one reviews. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_admin_activity_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SIEM (Sentinel/Splunk) + cloud-native (GuardDuty, Defender, Security Hub) and CloudTrail / Activity Log (event source) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull SIEM (Sentinel/Splunk) + cloud-native (GuardDuty, Defender, Security Hub) · CloudTrail / Activity Log (event source)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm detections for: PutUserPolicy/AttachRolePolicy, CreateAccessKey, StopLogging, AuthorizeSecurityGroupIngress 0.0.0.0/0, root ConsoleLogin\nverify every account feeds the SIEM (coverage)\nGuardDuty/Defender alert routing + triage records\ntest: trigger a benign risky action and confirm it alerts"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The detection rules over cloud admin / control-plane activity (CloudTrail / Activity Log).",
        "The test: Verify cloud administrative + control-plane activity is monitored for abuse.",
        "Reconcile the systems of record (SIEM (Sentinel/Splunk) + cloud-native (GuardDuty, Defender, Security Hub), CloudTrail / Activity Log (event source), SOAR / case management) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Disabling CloudTrail and creating new IAM access keys generate no alert; admin-activity monitoring exists only for the primary account, leaving the rest of the org's control plane unwatched."
      ],
      "references": [
        {
          "title": "AWS Security Reference Architecture",
          "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/"
        },
        {
          "title": "MITRE ATT&CK — Cloud",
          "url": "https://attack.mitre.org/matrices/enterprise/cloud/"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Admin activity monitoring\" (the detection rules over cloud admin / control-plane activity (cloudtrail / activity log)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Admin activity monitoring\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Verify cloud administrative + control-plane activity is monitored for abuse. PASS: high-risk control-plane events are alerted (IAM/policy changes, new access keys, KMS key use, SG opened to 0.0.0.0/0, CloudTrail disabled, root login, mass deletion); alerts cover all accounts and route to a monitored queue; and there's evidence they're triaged. Exceptions: no detections on control-plane events, key risky actions unalerted (e.g. trail-disabled), accounts missing from the pipeline, and alerts no one reviews. The evidence — The detection rules over cloud admin / control-plane activity (CloudTrail / Activity Log) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SIEM (Sentinel/Splunk) + cloud-native (GuardDuty, Defender, Security Hub) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SIEM (Sentinel/Splunk) + cloud-native (GuardDuty, Defender, Security Hub) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SIEM (Sentinel/Splunk) + cloud-native (GuardDuty, Defender, Security Hub); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Admin activity monitoring\" Audit Evidence\n\nThe test:\nVerify cloud administrative + control-plane activity is monitored for abuse. PASS: high-risk control-plane events are alerted (IAM/policy changes, new access keys, KMS key use, SG opened to 0.0.0.0/0, CloudTrail disabled, root login, mass deletion); alerts cover all accounts and route to a monitored queue; and there's evidence they're triaged. Exceptions: no detections on control-plane events, key risky actions unalerted (e.g. trail-disabled), accounts missing from the pipeline, and alerts no one reviews.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The detection rules over cloud admin / control-plane activity (CloudTrail / Activity Log))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The detection rules over cloud admin / control-plane activity (CloudTrail / Activity Log) reconciled against policy, plus the resulting findings working paper",
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
            "SIEM (Sentinel/Splunk) + cloud-native (GuardDuty, Defender, Security Hub) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SIEM (Sentinel/Splunk) + cloud-native (GuardDuty, Defender, Security Hub)) via read-only access."
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
            "Cloud security / detection engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud security / detection engineering owns the control data; the auditor independently verifies it."
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
            "Disabling CloudTrail and creating new IAM access keys generate no alert; admin-activity monitoring exists only for the primary account, leaving the rest of the org's control plane unwatched.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Disabling CloudTrail and creating new IAM access keys generate no alert; admin-activity monitoring exists only for the primary account, leaving the rest of the org's control plane unwatched."
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
      "objective": "Prove the \"Business and service resilience\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess resilience of cloud-hosted services. PASS: critical workloads are multi-AZ (and multi-region where RTO/RPO demands), with auto-scaling, health checks, and self-healing; stateful data is backed up and replicated cross-region; DR failover is tested (game days) and meets RTO/RPO; no tier-1 service has a single-AZ/single-region SPOF. Exceptions: tier-1 workloads in a single AZ, no cross-region backup/replication for critical data, DR never tested, and undocumented RTO/RPO.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (The cloud workloads (compute, DB, storage); AWS Resilience Hub / Well-Architected (or Azure equivalents); Backup + replication services) as tools — e.g. `map tier-1 workloads to AZ/region spread (single-AZ SPOFs?)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The cloud workloads' multi-AZ / multi-region design + documented RTO/RPO",
        "Auto-scaling + health-check + self-healing configuration",
        "Backup + cross-region replication evidence for stateful services",
        "DR test / game-day records for cloud failover"
      ],
      "system": [
        "The cloud workloads (compute, DB, storage)",
        "AWS Resilience Hub / Well-Architected (or Azure equivalents)",
        "Backup + replication services"
      ],
      "dataOwner": [
        "SRE / platform — own resilience",
        "Application owners — own RTO/RPO",
        "Business continuity"
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
      "tagline": "Auditing \"Business and service resilience\" as a repeatable agentic workflow: pull the real evidence (The cloud workloads' multi-AZ / multi-region design + documented RTO/RPO) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Business and service resilience\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the cloud workloads' multi-AZ / multi-region design + documented RTO/RPO, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The cloud workloads (compute, DB, storage), AWS Resilience Hub / Well-Architected (or Azure equivalents), Backup + replication services — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `map tier-1 workloads to AZ/region spread (single-AZ SPOFs?)` — read-only, against the systems of record.",
        "The test itself is specific. Assess resilience of cloud-hosted services. PASS: critical workloads are multi-AZ (and multi-region where RTO/RPO demands), with auto-scaling, health checks, and self-healing; stateful data is backed up and replicated cross-region; DR failover is tested (game days) and meets RTO/RPO; no tier-1 service has a single-AZ/single-region SPOF. Exceptions: tier-1 workloads in a single AZ, no cross-region backup/replication for critical data, DR never tested, and undocumented RTO/RPO. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_business_and_service_resilience_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The cloud workloads (compute, DB, storage) and AWS Resilience Hub / Well-Architected (or Azure equivalents) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull The cloud workloads (compute, DB, storage) · AWS Resilience Hub / Well-Architected (or Azure equivalents)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "map tier-1 workloads to AZ/region spread (single-AZ SPOFs?)\nAWS Resilience Hub assessment vs RTO/RPO; check Multi-AZ on RDS, cross-region replication on S3\npull DR game-day records: date, RTO achieved, outcome\nreview auto-scaling + health-check configuration"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The cloud workloads' multi-AZ / multi-region design + documented RTO/RPO.",
        "The test: Assess resilience of cloud-hosted services.",
        "Reconcile the systems of record (The cloud workloads (compute, DB, storage), AWS Resilience Hub / Well-Architected (or Azure equivalents), Backup + replication services) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The primary transaction database is single-AZ with no read replica or cross-region backup, and no cloud DR failover has ever been tested — the stated one-hour RTO is aspirational."
      ],
      "references": [
        {
          "title": "AWS Well-Architected — Reliability Pillar",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "ISO 22301",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Business and service resilience\" (the cloud workloads' multi-az / multi-region design + documented rto/rpo), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business and service resilience\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Assess resilience of cloud-hosted services. PASS: critical workloads are multi-AZ (and multi-region where RTO/RPO demands), with auto-scaling, health checks, and self-healing; stateful data is backed up and replicated cross-region; DR failover is tested (game days) and meets RTO/RPO; no tier-1 service has a single-AZ/single-region SPOF. Exceptions: tier-1 workloads in a single AZ, no cross-region backup/replication for critical data, DR never tested, and undocumented RTO/RPO. The evidence — The cloud workloads' multi-AZ / multi-region design + documented RTO/RPO — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The cloud workloads (compute, DB, storage) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The cloud workloads (compute, DB, storage) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The cloud workloads (compute, DB, storage); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Business and service resilience\" Audit Evidence\n\nThe test:\nAssess resilience of cloud-hosted services. PASS: critical workloads are multi-AZ (and multi-region where RTO/RPO demands), with auto-scaling, health checks, and self-healing; stateful data is backed up and replicated cross-region; DR failover is tested (game days) and meets RTO/RPO; no tier-1 service has a single-AZ/single-region SPOF. Exceptions: tier-1 workloads in a single AZ, no cross-region backup/replication for critical data, DR never tested, and undocumented RTO/RPO.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The cloud workloads' multi-AZ / multi-region design + documented RTO/RPO)\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The cloud workloads' multi-AZ / multi-region design + documented RTO/RPO reconciled against policy, plus the resulting findings working paper",
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
            "The cloud workloads (compute, DB, storage) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., The cloud workloads (compute, DB, storage)) via read-only access."
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
            "SRE / platform — own resilience (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "SRE / platform — own resilience owns the control data; the auditor independently verifies it."
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
            "The primary transaction database is single-AZ with no read replica or cross-region backup, and no cloud DR failover has ever been tested — the stated one-hour RTO is aspirational.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The primary transaction database is single-AZ with no read replica or cross-region backup, and no cloud DR failover has ever been tested — the stated one-hour RTO is aspirational."
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
      "objective": "Prove the \"Cloud supply chain\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess the cloud software + service supply chain. PASS: workloads use only trusted, scanned, signed images from approved registries (no unvetted public/marketplace images); base images + Lambda layers are inventoried and vuln-scanned; IaC modules come from trusted sources; and third-party tools get least-privilege, time-bound cross-account roles (with an ExternalId). Exceptions: untrusted public/marketplace images in production, unsigned images, unscanned base layers with known CVEs, and broad standing cross-account roles to vendors.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (Container registry (ECR/ACR) + image scanning (Trivy / Inspector); Sigstore/cosign + admission control (Kyverno / OPA Gatekeeper); IaC module registry) as tools — e.g. `registry scan: base images + layers with CVEs; flag images from untrus`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of third-party code/components in cloud workloads (container base images, Lambda layers, marketplace AMIs/images, IaC modules)",
        "Image provenance + signing (signed images, approved registries only)",
        "Vulnerability + license scan of images/layers in the registry",
        "The IAM permissions granted to third-party/marketplace tools + cross-account roles"
      ],
      "system": [
        "Container registry (ECR/ACR) + image scanning (Trivy / Inspector)",
        "Sigstore/cosign + admission control (Kyverno / OPA Gatekeeper)",
        "IaC module registry",
        "Cross-account role inventory"
      ],
      "dataOwner": [
        "Platform / DevOps — own the images",
        "Cloud security — owns the supply-chain policy",
        "Procurement (for vendor roles)"
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
      "tagline": "Auditing \"Cloud supply chain\" as a repeatable agentic workflow: pull the real evidence (The inventory of third-party code/components in cloud workloads (container base images, Lambda layers, marketplace AMIs/images, IaC modules)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Cloud supply chain\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of third-party code/components in cloud workloads (container base images, Lambda layers, marketplace AMIs/images, IaC modules), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Container registry (ECR/ACR) + image scanning (Trivy / Inspector), Sigstore/cosign + admission control (Kyverno / OPA Gatekeeper), IaC module registry — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `registry scan: base images + layers with CVEs; flag images from untrusted source` — read-only, against the systems of record.",
        "The test itself is specific. Assess the cloud software + service supply chain. PASS: workloads use only trusted, scanned, signed images from approved registries (no unvetted public/marketplace images); base images + Lambda layers are inventoried and vuln-scanned; IaC modules come from trusted sources; and third-party tools get least-privilege, time-bound cross-account roles (with an ExternalId). Exceptions: untrusted public/marketplace images in production, unsigned images, unscanned base layers with known CVEs, and broad standing cross-account roles to vendors. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_cloud_supply_chain_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Container registry (ECR/ACR) + image scanning (Trivy / Inspector) and Sigstore/cosign + admission control (Kyverno / OPA Gatekeeper) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Container registry (ECR/ACR) + image scanning (Trivy / Inspector) · Sigstore/cosign + admission control (Kyverno / OPA Gatekeeper)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "registry scan: base images + layers with CVEs; flag images from untrusted sources\nverify image signing (cosign) + that admission control blocks unsigned images\nlist IAM roles assumable by external accounts (cross-account trust) + their permissions + ExternalId\ninventory marketplace AMIs/images in use vs the approved list"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of third-party code/components in cloud workloads (container base images, Lambda layers, marketplace AMIs/images, IaC modules).",
        "The test: Assess the cloud software + service supply chain.",
        "Reconcile the systems of record (Container registry (ECR/ACR) + image scanning (Trivy / Inspector), Sigstore/cosign + admission control (Kyverno / OPA Gatekeeper), IaC module registry) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Production runs several unsigned public Docker Hub images with critical CVEs, and a monitoring vendor holds a standing cross-account role with broad read on all data services and no ExternalId."
      ],
      "references": [
        {
          "title": "SLSA Supply-chain Framework",
          "url": "https://slsa.dev/"
        },
        {
          "title": "NIST SP 800-161 C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Cloud supply chain\" (the inventory of third-party code/components in cloud workloads (container base images, lambda layers, marketplace amis/images, iac modules)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud supply chain\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Assess the cloud software + service supply chain. PASS: workloads use only trusted, scanned, signed images from approved registries (no unvetted public/marketplace images); base images + Lambda layers are inventoried and vuln-scanned; IaC modules come from trusted sources; and third-party tools get least-privilege, time-bound cross-account roles (with an ExternalId). Exceptions: untrusted public/marketplace images in production, unsigned images, unscanned base layers with known CVEs, and broad standing cross-account roles to vendors. The evidence — The inventory of third-party code/components in cloud workloads (container base images, Lambda layers, marketplace AMIs/images, IaC modules) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Container registry (ECR/ACR) + image scanning (Trivy / Inspector) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Container registry (ECR/ACR) + image scanning (Trivy / Inspector) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Container registry (ECR/ACR) + image scanning (Trivy / Inspector); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Cloud supply chain\" Audit Evidence\n\nThe test:\nAssess the cloud software + service supply chain. PASS: workloads use only trusted, scanned, signed images from approved registries (no unvetted public/marketplace images); base images + Lambda layers are inventoried and vuln-scanned; IaC modules come from trusted sources; and third-party tools get least-privilege, time-bound cross-account roles (with an ExternalId). Exceptions: untrusted public/marketplace images in production, unsigned images, unscanned base layers with known CVEs, and broad standing cross-account roles to vendors.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The inventory of third-party code/components in cloud workloads (container base images, Lambda layers, marketplace AMIs/images, IaC modules))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The inventory of third-party code/components in cloud workloads (container base images, Lambda layers, marketplace AMIs/images, IaC modules) reconciled against policy, plus the resulting findings working paper",
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
            "Container registry (ECR/ACR) + image scanning (Trivy / Inspector) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Container registry (ECR/ACR) + image scanning (Trivy / Inspector)) via read-only access."
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
            "Platform / DevOps — own the images (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / DevOps — own the images owns the control data; the auditor independently verifies it."
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
            "Production runs several unsigned public Docker Hub images with critical CVEs, and a monitoring vendor holds a standing cross-account role with broad read on all data services and no ExternalId.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Production runs several unsigned public Docker Hub images with critical CVEs, and a monitoring vendor holds a standing cross-account role with broad read on all data services and no ExternalId."
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
      "objective": "Prove the \"Cloud partner\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess reliance on the cloud provider and managed partners. PASS: shared responsibility is documented per service (you know which controls are yours); current CSP attestations (SOC 2 / ISO / FedRAMP) are on file and cover the services used; partner/MSP access is least-privilege, federated, JIT, logged, and reviewed; and contracts carry security, breach-notification, and data-residency terms. Exceptions: unclear shared-responsibility boundaries, stale/missing CSP attestations, MSPs with standing admin into the tenant, and partner access that isn't logged or reviewed.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (CSP trust portals (AWS Artifact / Azure Trust Center); Partner/MSP access (cross-tenant roles / Azure Lighthouse / delegated admin); TPRM / GRC + contracts) as tools — e.g. `pull current CSP SOC 2 / ISO / FedRAMP from AWS Artifact / Azure Trust`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The cloud-provider / managed-service-provider relationship docs — the shared-responsibility matrix per service",
        "The CSP's current assurance evidence (SOC 2, ISO 27001, FedRAMP) and its currency",
        "The MSP/partner access into the tenant (roles, federation, standing vs JIT) + monitoring",
        "Contractual security terms — breach notification, data-handling, residency commitments"
      ],
      "system": [
        "CSP trust portals (AWS Artifact / Azure Trust Center)",
        "Partner/MSP access (cross-tenant roles / Azure Lighthouse / delegated admin)",
        "TPRM / GRC + contracts"
      ],
      "dataOwner": [
        "Vendor / third-party risk + Cloud security",
        "Legal (contracts)",
        "Cloud platform (partner access)"
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
      "tagline": "Auditing \"Cloud partner\" as a repeatable agentic workflow: pull the real evidence (The cloud-provider / managed-service-provider relationship docs — the shared-responsibility matrix per service) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Cloud partner\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the cloud-provider / managed-service-provider relationship docs — the shared-responsibility matrix per service, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CSP trust portals (AWS Artifact / Azure Trust Center), Partner/MSP access (cross-tenant roles / Azure Lighthouse / delegated admin), TPRM / GRC + contracts — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `pull current CSP SOC 2 / ISO / FedRAMP from AWS Artifact / Azure Trust Center; c` — read-only, against the systems of record.",
        "The test itself is specific. Assess reliance on the cloud provider and managed partners. PASS: shared responsibility is documented per service (you know which controls are yours); current CSP attestations (SOC 2 / ISO / FedRAMP) are on file and cover the services used; partner/MSP access is least-privilege, federated, JIT, logged, and reviewed; and contracts carry security, breach-notification, and data-residency terms. Exceptions: unclear shared-responsibility boundaries, stale/missing CSP attestations, MSPs with standing admin into the tenant, and partner access that isn't logged or reviewed. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_cloud_partner_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CSP trust portals (AWS Artifact / Azure Trust Center) and Partner/MSP access (cross-tenant roles / Azure Lighthouse / delegated admin) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull CSP trust portals (AWS Artifact / Azure Trust Center) · Partner/MSP access (cross-tenant roles / Azure Lighthouse / delegated admin)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "pull current CSP SOC 2 / ISO / FedRAMP from AWS Artifact / Azure Trust Center; check scope + date\nlist partner/MSP access (Azure Lighthouse delegations, cross-account roles) + permissions\nconfirm partner actions are logged in CloudTrail/Activity Log and reviewed\nmap shared responsibility per service actually used"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The cloud-provider / managed-service-provider relationship docs — the shared-responsibility matrix per service.",
        "The test: Assess reliance on the cloud provider and managed partners.",
        "Reconcile the systems of record (CSP trust portals (AWS Artifact / Azure Trust Center), Partner/MSP access (cross-tenant roles / Azure Lighthouse / delegated admin), TPRM / GRC + contracts) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. An MSP holds standing Owner via Azure Lighthouse across all subscriptions with no JIT or review, and the CSP SOC 2 on file is two years old and doesn't cover two services now in production."
      ],
      "references": [
        {
          "title": "CSA STAR / Cloud Controls Matrix",
          "url": "https://cloudsecurityalliance.org/star"
        },
        {
          "title": "Shared Responsibility Model",
          "url": "https://aws.amazon.com/compliance/shared-responsibility-model/"
        },
        {
          "title": "ISO/IEC 27036",
          "url": "https://www.iso.org/standard/59648.html"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Cloud partner\" (the cloud-provider / managed-service-provider relationship docs — the shared-responsibility matrix per service), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cloud partner\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Assess reliance on the cloud provider and managed partners. PASS: shared responsibility is documented per service (you know which controls are yours); current CSP attestations (SOC 2 / ISO / FedRAMP) are on file and cover the services used; partner/MSP access is least-privilege, federated, JIT, logged, and reviewed; and contracts carry security, breach-notification, and data-residency terms. Exceptions: unclear shared-responsibility boundaries, stale/missing CSP attestations, MSPs with standing admin into the tenant, and partner access that isn't logged or reviewed. The evidence — The cloud-provider / managed-service-provider relationship docs — the shared-responsibility matrix per service — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CSP trust portals (AWS Artifact / Azure Trust Center) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CSP trust portals (AWS Artifact / Azure Trust Center) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CSP trust portals (AWS Artifact / Azure Trust Center); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Cloud partner\" Audit Evidence\n\nThe test:\nAssess reliance on the cloud provider and managed partners. PASS: shared responsibility is documented per service (you know which controls are yours); current CSP attestations (SOC 2 / ISO / FedRAMP) are on file and cover the services used; partner/MSP access is least-privilege, federated, JIT, logged, and reviewed; and contracts carry security, breach-notification, and data-residency terms. Exceptions: unclear shared-responsibility boundaries, stale/missing CSP attestations, MSPs with standing admin into the tenant, and partner access that isn't logged or reviewed.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The cloud-provider / managed-service-provider relationship docs — the shared-responsibility matrix per service)\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The cloud-provider / managed-service-provider relationship docs — the shared-responsibility matrix per service reconciled against policy, plus the resulting findings working paper",
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
            "CSP trust portals (AWS Artifact / Azure Trust Center) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., CSP trust portals (AWS Artifact / Azure Trust Center)) via read-only access."
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
            "Vendor / third-party risk + Cloud security (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Vendor / third-party risk + Cloud security owns the control data; the auditor independently verifies it."
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
            "An MSP holds standing Owner via Azure Lighthouse across all subscriptions with no JIT or review, and the CSP SOC 2 on file is two years old and doesn't cover two services now in production.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. An MSP holds standing Owner via Azure Lighthouse across all subscriptions with no JIT or review, and the CSP SOC 2 on file is two years old and doesn't cover two services now in production."
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
      "objective": "Prove the \"Security assessments\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the cloud estate is regularly assessed. PASS: CSPM runs continuously against a recognised benchmark (CIS Foundations) across all accounts with a tracked, improving score; periodic penetration tests cover internet-facing cloud apps with findings remediated and retested; and assessment coverage spans the estate. Exceptions: accounts not in CSPM, no benchmark score/trend, no pen testing of cloud-exposed apps, and findings reported but never remediated.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (CSPM — Wiz / Prisma / Defender for Cloud (continuous benchmark); Penetration-test vendor + reports; Findings tracker) as tools — e.g. `CSPM: CIS Foundations score per account + trend; list accounts not enr`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The cloud-assessment schedule + scope (continuous CSPM, periodic penetration test, config review)",
        "The latest CSPM/benchmark posture report (CIS Foundations score) + the trend over time",
        "Penetration-test reports for cloud-hosted apps + remediation tracking",
        "Coverage — accounts/services assessed vs total"
      ],
      "system": [
        "CSPM — Wiz / Prisma / Defender for Cloud (continuous benchmark)",
        "Penetration-test vendor + reports",
        "Findings tracker"
      ],
      "dataOwner": [
        "Cloud security — owns assessments",
        "Account owners — remediate",
        "Risk"
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
      "tagline": "Auditing \"Security assessments\" as a repeatable agentic workflow: pull the real evidence (The cloud-assessment schedule + scope (continuous CSPM, periodic penetration test, config review)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Security assessments\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the cloud-assessment schedule + scope (continuous CSPM, periodic penetration test, config review), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CSPM — Wiz / Prisma / Defender for Cloud (continuous benchmark), Penetration-test vendor + reports, Findings tracker — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `CSPM: CIS Foundations score per account + trend; list accounts not enrolled` — read-only, against the systems of record.",
        "The test itself is specific. Verify the cloud estate is regularly assessed. PASS: CSPM runs continuously against a recognised benchmark (CIS Foundations) across all accounts with a tracked, improving score; periodic penetration tests cover internet-facing cloud apps with findings remediated and retested; and assessment coverage spans the estate. Exceptions: accounts not in CSPM, no benchmark score/trend, no pen testing of cloud-exposed apps, and findings reported but never remediated. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_security_assessments_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CSPM — Wiz / Prisma / Defender for Cloud (continuous benchmark) and Penetration-test vendor + reports (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull CSPM — Wiz / Prisma / Defender for Cloud (continuous benchmark) · Penetration-test vendor + reports",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "CSPM: CIS Foundations score per account + trend; list accounts not enrolled\npen-test report inventory for cloud apps + remediation/retest status\ncoverage = assessed accounts ÷ total accounts\ncompare the current posture score to prior periods (is it improving?)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The cloud-assessment schedule + scope (continuous CSPM, periodic penetration test, config review).",
        "The test: Verify the cloud estate is regularly assessed.",
        "Reconcile the systems of record (CSPM — Wiz / Prisma / Defender for Cloud (continuous benchmark), Penetration-test vendor + reports, Findings tracker) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. CSPM covers 60% of accounts; the CIS Foundations score has been flat for a year (findings reported, not fixed), and the customer-facing cloud app hasn't had a penetration test in two years."
      ],
      "references": [
        {
          "title": "CIS Cloud Foundations Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "NIST SP 800-115",
          "url": "https://csrc.nist.gov/pubs/sp/800/115/final"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Security assessments\" (the cloud-assessment schedule + scope (continuous cspm, periodic penetration test, config review)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security assessments\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Verify the cloud estate is regularly assessed. PASS: CSPM runs continuously against a recognised benchmark (CIS Foundations) across all accounts with a tracked, improving score; periodic penetration tests cover internet-facing cloud apps with findings remediated and retested; and assessment coverage spans the estate. Exceptions: accounts not in CSPM, no benchmark score/trend, no pen testing of cloud-exposed apps, and findings reported but never remediated. The evidence — The cloud-assessment schedule + scope (continuous CSPM, periodic penetration test, config review) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CSPM — Wiz / Prisma / Defender for Cloud (continuous benchmark) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CSPM — Wiz / Prisma / Defender for Cloud (continuous benchmark) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CSPM — Wiz / Prisma / Defender for Cloud (continuous benchmark); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Security assessments\" Audit Evidence\n\nThe test:\nVerify the cloud estate is regularly assessed. PASS: CSPM runs continuously against a recognised benchmark (CIS Foundations) across all accounts with a tracked, improving score; periodic penetration tests cover internet-facing cloud apps with findings remediated and retested; and assessment coverage spans the estate. Exceptions: accounts not in CSPM, no benchmark score/trend, no pen testing of cloud-exposed apps, and findings reported but never remediated.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The cloud-assessment schedule + scope (continuous CSPM, periodic penetration test, config review))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The cloud-assessment schedule + scope (continuous CSPM, periodic penetration test, config review) reconciled against policy, plus the resulting findings working paper",
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
            "CSPM — Wiz / Prisma / Defender for Cloud (continuous benchmark) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., CSPM — Wiz / Prisma / Defender for Cloud (continuous benchmark)) via read-only access."
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
            "Cloud security — owns assessments (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud security — owns assessments owns the control data; the auditor independently verifies it."
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
            "CSPM covers 60% of accounts; the CIS Foundations score has been flat for a year (findings reported, not fixed), and the customer-facing cloud app hasn't had a penetration test in two years.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. CSPM covers 60% of accounts; the CIS Foundations score has been flat for a year (findings reported, not fixed), and the customer-facing cloud app hasn't had a penetration test in two years."
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
      "objective": "Prove the \"Data protection and lifecycle\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess protection and lifecycle of data in the cloud. PASS: every store holding sensitive data is encrypted with a customer-managed key, has public access blocked, enforces lifecycle/retention + versioning, and logs data access; classification tags drive the controls. Exceptions: public buckets/blobs with sensitive data, default or no encryption, no lifecycle (infinite retention) or no versioning (no ransomware recovery), and keys accessible too broadly.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (S3 / Blob / object storage, RDS / Redshift / managed DBs; KMS / Key Vault; CSPM + storage config) as tools — e.g. `aws s3api get-public-access-block + bucket policy across buckets; flag`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of cloud data stores (S3/Blob/RDS/Redshift) with classification + encryption + public-access status",
        "Object-storage public-access-block + bucket-policy review",
        "Lifecycle/retention + versioning + encryption configuration per store",
        "Key management — customer-managed key (CMK) vs provider-default, and who can access keys"
      ],
      "system": [
        "S3 / Blob / object storage, RDS / Redshift / managed DBs",
        "KMS / Key Vault",
        "CSPM + storage config"
      ],
      "dataOwner": [
        "Data owners + cloud platform",
        "Cloud security",
        "Privacy"
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
      "tagline": "Auditing \"Data protection and lifecycle\" as a repeatable agentic workflow: pull the real evidence (The inventory of cloud data stores (S3/Blob/RDS/Redshift) with classification + encryption + public-access status) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Data protection and lifecycle\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of cloud data stores (S3/Blob/RDS/Redshift) with classification + encryption + public-access status, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here S3 / Blob / object storage, RDS / Redshift / managed DBs, KMS / Key Vault, CSPM + storage config — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `aws s3api get-public-access-block + bucket policy across buckets; flag public + ` — read-only, against the systems of record.",
        "The test itself is specific. Assess protection and lifecycle of data in the cloud. PASS: every store holding sensitive data is encrypted with a customer-managed key, has public access blocked, enforces lifecycle/retention + versioning, and logs data access; classification tags drive the controls. Exceptions: public buckets/blobs with sensitive data, default or no encryption, no lifecycle (infinite retention) or no versioning (no ransomware recovery), and keys accessible too broadly. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_data_protection_and_lifecycle_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from S3 / Blob / object storage, RDS / Redshift / managed DBs and KMS / Key Vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull S3 / Blob / object storage, RDS / Redshift / managed DBs · KMS / Key Vault",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "aws s3api get-public-access-block + bucket policy across buckets; flag public + sensitive\nconfirm default encryption + CMK (not the aws/s3 default key) on sensitive stores\nlifecycle + versioning config per bucket; RDS encryption + backup retention\nKMS key policy: who can use/manage the CMK"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of cloud data stores (S3/Blob/RDS/Redshift) with classification + encryption + public-access status.",
        "The test: Assess protection and lifecycle of data in the cloud.",
        "Reconcile the systems of record (S3 / Blob / object storage, RDS / Redshift / managed DBs, KMS / Key Vault, CSPM + storage config) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Two S3 buckets holding customer exports are public, several sensitive stores use the default AWS-managed key (no CMK control), and no bucket has versioning — so a ransomware overwrite is unrecoverable."
      ],
      "references": [
        {
          "title": "CIS AWS Foundations",
          "url": "https://www.cisecurity.org/benchmark/amazon_web_services"
        },
        {
          "title": "NIST SP 800-57",
          "url": "https://csrc.nist.gov/projects/key-management"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Data protection and lifecycle\" (the inventory of cloud data stores (s3/blob/rds/redshift) with classification + encryption + public-access status), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data protection and lifecycle\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Assess protection and lifecycle of data in the cloud. PASS: every store holding sensitive data is encrypted with a customer-managed key, has public access blocked, enforces lifecycle/retention + versioning, and logs data access; classification tags drive the controls. Exceptions: public buckets/blobs with sensitive data, default or no encryption, no lifecycle (infinite retention) or no versioning (no ransomware recovery), and keys accessible too broadly. The evidence — The inventory of cloud data stores (S3/Blob/RDS/Redshift) with classification + encryption + public-access status — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live S3 / Blob / object storage, RDS / Redshift / managed DBs APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. S3 / Blob / object storage, RDS / Redshift / managed DBs gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from S3 / Blob / object storage, RDS / Redshift / managed DBs; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Data protection and lifecycle\" Audit Evidence\n\nThe test:\nAssess protection and lifecycle of data in the cloud. PASS: every store holding sensitive data is encrypted with a customer-managed key, has public access blocked, enforces lifecycle/retention + versioning, and logs data access; classification tags drive the controls. Exceptions: public buckets/blobs with sensitive data, default or no encryption, no lifecycle (infinite retention) or no versioning (no ransomware recovery), and keys accessible too broadly.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The inventory of cloud data stores (S3/Blob/RDS/Redshift) with classification + encryption + public-access status)\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The inventory of cloud data stores (S3/Blob/RDS/Redshift) with classification + encryption + public-access status reconciled against policy, plus the resulting findings working paper",
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
            "S3 / Blob / object storage, RDS / Redshift / managed DBs (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., S3 / Blob / object storage, RDS / Redshift / managed DBs) via read-only access."
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
            "Data owners + cloud platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data owners + cloud platform owns the control data; the auditor independently verifies it."
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
            "Two S3 buckets holding customer exports are public, several sensitive stores use the default AWS-managed key (no CMK control), and no bucket has versioning — so a ransomware overwrite is unrecoverable.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Two S3 buckets holding customer exports are public, several sensitive stores use the default AWS-managed key (no CMK control), and no bucket has versioning — so a ransomware overwrite is unrecoverable."
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
      "objective": "Prove the \"Data sovereignty\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify regulated data stays in its required jurisdiction. PASS: residency requirements are documented per category; sensitive workloads, backups, replicas, and logs reside only in permitted regions; cross-region/CDN/support flows don't move data out of bounds; and region-restriction guardrails prevent deployment elsewhere. Exceptions: regulated data (or its backups/logs) in a prohibited region, replication/CDN egressing data cross-border, and no preventive region guardrail.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (Cloud region/policy config (SCP region-deny / Azure Policy 'allowed locations'); Backup + replication + CDN config; Data catalogue (where data lives)) as tools — e.g. `enumerate resource regions for sensitive workloads (including backups,`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The data-residency requirement per data category (regulatory + contractual)",
        "The actual region placement of each sensitive workload + its backups, replicas, and logs",
        "Cross-region replication / CDN / support-data flows that could move data out of region",
        "Sovereignty controls — region-restriction SCP / Azure Policy 'allowed locations', sovereign-cloud usage"
      ],
      "system": [
        "Cloud region/policy config (SCP region-deny / Azure Policy 'allowed locations')",
        "Backup + replication + CDN config",
        "Data catalogue (where data lives)"
      ],
      "dataOwner": [
        "Privacy / Legal — own residency requirements",
        "Cloud platform — enforces region controls",
        "Data owners"
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
      "tagline": "Auditing \"Data sovereignty\" as a repeatable agentic workflow: pull the real evidence (The data-residency requirement per data category (regulatory + contractual)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Data sovereignty\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the data-residency requirement per data category (regulatory + contractual), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cloud region/policy config (SCP region-deny / Azure Policy 'allowed locations'), Backup + replication + CDN config, Data catalogue (where data lives) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `enumerate resource regions for sensitive workloads (including backups, replicas,` — read-only, against the systems of record.",
        "The test itself is specific. Verify regulated data stays in its required jurisdiction. PASS: residency requirements are documented per category; sensitive workloads, backups, replicas, and logs reside only in permitted regions; cross-region/CDN/support flows don't move data out of bounds; and region-restriction guardrails prevent deployment elsewhere. Exceptions: regulated data (or its backups/logs) in a prohibited region, replication/CDN egressing data cross-border, and no preventive region guardrail. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_data_sovereignty_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cloud region/policy config (SCP region-deny / Azure Policy 'allowed locations') and Backup + replication + CDN config (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Cloud region/policy config (SCP region-deny / Azure Policy 'allowed locations') · Backup + replication + CDN config",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "enumerate resource regions for sensitive workloads (including backups, replicas, log archives)\nconfirm an SCP region-deny / Azure Policy 'allowed locations' is enforced\ncheck cross-region replication + CDN POP configuration for cross-border data movement\nverify support / telemetry data-handling region"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The data-residency requirement per data category (regulatory + contractual).",
        "The test: Verify regulated data stays in its required jurisdiction.",
        "Reconcile the systems of record (Cloud region/policy config (SCP region-deny / Azure Policy 'allowed locations'), Backup + replication + CDN config, Data catalogue (where data lives)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. EU customer data is primary in eu-west-1 but its backups replicate to us-east-1 and CloudTrail logs land in a US bucket — and no region-deny SCP prevents deploying EU workloads to US regions."
      ],
      "references": [
        {
          "title": "GDPR",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "EU Standard Contractual Clauses",
          "url": "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
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
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Data sovereignty\" (the data-residency requirement per data category (regulatory + contractual)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data sovereignty\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Verify regulated data stays in its required jurisdiction. PASS: residency requirements are documented per category; sensitive workloads, backups, replicas, and logs reside only in permitted regions; cross-region/CDN/support flows don't move data out of bounds; and region-restriction guardrails prevent deployment elsewhere. Exceptions: regulated data (or its backups/logs) in a prohibited region, replication/CDN egressing data cross-border, and no preventive region guardrail. The evidence — The data-residency requirement per data category (regulatory + contractual) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cloud region/policy config (SCP region-deny / Azure Policy 'allowed locations') APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cloud region/policy config (SCP region-deny / Azure Policy 'allowed locations') gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cloud region/policy config (SCP region-deny / Azure Policy 'allowed locations'); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Data sovereignty\" Audit Evidence\n\nThe test:\nVerify regulated data stays in its required jurisdiction. PASS: residency requirements are documented per category; sensitive workloads, backups, replicas, and logs reside only in permitted regions; cross-region/CDN/support flows don't move data out of bounds; and region-restriction guardrails prevent deployment elsewhere. Exceptions: regulated data (or its backups/logs) in a prohibited region, replication/CDN egressing data cross-border, and no preventive region guardrail.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The data-residency requirement per data category (regulatory + contractual))\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The data-residency requirement per data category (regulatory + contractual) reconciled against policy, plus the resulting findings working paper",
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
            "Cloud region/policy config (SCP region-deny / Azure Policy 'allowed locations') (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Cloud region/policy config (SCP region-deny / Azure Policy 'allowed locations')) via read-only access."
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
            "Privacy / Legal — own residency requirements (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Privacy / Legal — own residency requirements owns the control data; the auditor independently verifies it."
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
            "EU customer data is primary in eu-west-1 but its backups replicate to us-east-1 and CloudTrail logs land in a US bucket — and no region-deny SCP prevents deploying EU workloads to US regions.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. EU customer data is primary in eu-west-1 but its backups replicate to us-east-1 and CloudTrail logs land in a US bucket — and no region-deny SCP prevents deploying EU workloads to US regions."
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
      "objective": "Prove the \"Security Ticketing Engine (STE)\" control for Cloud Platform & SaaS (Software-as-a-Service) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess the engine that operationalises cloud findings into tracked work (the Security Ticketing Engine). PASS: every cloud security finding auto-creates a ticket routed to the resource owner by tag, with a severity-based SLA, dedup, and closed-loop verification on rescan; orphaned (untagged) findings are escalated to a named owner. Exceptions: findings with no ticket/owner, no SLA, duplicate noise drowning real findings, and tickets closed without confirming the finding is gone.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cloud Platform & SaaS (Software-as-a-Service) systems of record (CSPM / GuardDuty / Inspector / Security Hub (sources); Ticketing — Jira / ServiceNow; EventBridge / automation) as tools — e.g. `Security Hub findings → EventBridge → ticket automation (confirm it ru`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The pipeline turning every cloud security finding (CSPM / GuardDuty / Inspector) into a ticket with an owner + SLA",
        "Auto-routing by resource tag + the deduplication logic",
        "SLA + aging dashboard for cloud security tickets",
        "Closure verification — rescan / auto-resolve on remediation"
      ],
      "system": [
        "CSPM / GuardDuty / Inspector / Security Hub (sources)",
        "Ticketing — Jira / ServiceNow",
        "EventBridge / automation",
        "Cloud tagging (ownership)"
      ],
      "dataOwner": [
        "Cloud security — owns the engine",
        "Resource owners — remediate",
        "Platform — owns the tagging standard"
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
      "tagline": "Auditing \"Security Ticketing Engine (STE)\" as a repeatable agentic workflow: pull the real evidence (The pipeline turning every cloud security finding (CSPM / GuardDuty / Inspector) into a ticket with an owner + SLA) with read-only agents, run the test against policy, and issue a defensible opinion on the Cloud Platform & SaaS (Software-as-a-Service) control.",
      "year": 2025,
      "overview": [
        "The \"Security Ticketing Engine (STE)\" sub-process is one of the controls an auditor must verify for Cloud Platform & SaaS (Software-as-a-Service). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the pipeline turning every cloud security finding (CSPM / GuardDuty / Inspector) into a ticket with an owner + SLA, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CSPM / GuardDuty / Inspector / Security Hub (sources), Ticketing — Jira / ServiceNow, EventBridge / automation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Security Hub findings → EventBridge → ticket automation (confirm it runs for ALL` — read-only, against the systems of record.",
        "The test itself is specific. Assess the engine that operationalises cloud findings into tracked work (the Security Ticketing Engine). PASS: every cloud security finding auto-creates a ticket routed to the resource owner by tag, with a severity-based SLA, dedup, and closed-loop verification on rescan; orphaned (untagged) findings are escalated to a named owner. Exceptions: findings with no ticket/owner, no SLA, duplicate noise drowning real findings, and tickets closed without confirming the finding is gone. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_security_ticketing_engine_ste_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CSPM / GuardDuty / Inspector / Security Hub (sources) and Ticketing — Jira / ServiceNow (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull CSPM / GuardDuty / Inspector / Security Hub (sources) · Ticketing — Jira / ServiceNow",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Security Hub findings → EventBridge → ticket automation (confirm it runs for ALL finding types, not just Security Hub)\nrouting rules by tag + dedup by finding id; aging dashboard by severity\nuntagged-resource findings: are they escalated to an owner or silently dropped?\nauto-close a ticket only after a rescan shows it resolved"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The pipeline turning every cloud security finding (CSPM / GuardDuty / Inspector) into a ticket with an owner + SLA.",
        "The test: Assess the engine that operationalises cloud findings into tracked work (the Security Ticketing Engine).",
        "Reconcile the systems of record (CSPM / GuardDuty / Inspector / Security Hub (sources), Ticketing — Jira / ServiceNow, EventBridge / automation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Only Security Hub criticals create tickets (GuardDuty + Inspector findings are dropped), ~30% of resources are untagged so their findings have no owner, and tickets auto-close on a timer without confirming remediation."
      ],
      "references": [
        {
          "title": "AWS Security Hub Automation",
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
          "name": "13_security_ticketing_engine_ste_mcp.py",
          "url": "/audit-code/cloud-saas/13_security_ticketing_engine_ste_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cloud Platform & SaaS (Software-as-a-Service) evidence for \"Security Ticketing Engine (STE)\" (the pipeline turning every cloud security finding (cspm / guardduty / inspector) into a ticket with an owner + sla), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security Ticketing Engine (STE)\" control for Cloud Platform & SaaS (Software-as-a-Service) at AcmeCorp. THE TEST: Assess the engine that operationalises cloud findings into tracked work (the Security Ticketing Engine). PASS: every cloud security finding auto-creates a ticket routed to the resource owner by tag, with a severity-based SLA, dedup, and closed-loop verification on rescan; orphaned (untagged) findings are escalated to a named owner. Exceptions: findings with no ticket/owner, no SLA, duplicate noise drowning real findings, and tickets closed without confirming the finding is gone. The evidence — The pipeline turning every cloud security finding (CSPM / GuardDuty / Inspector) into a ticket with an owner + SLA — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CSPM / GuardDuty / Inspector / Security Hub (sources) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CSPM / GuardDuty / Inspector / Security Hub (sources) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CSPM / GuardDuty / Inspector / Security Hub (sources); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cloud Platform & SaaS (Software-as-a-Service): \"Security Ticketing Engine (STE)\" Audit Evidence\n\nThe test:\nAssess the engine that operationalises cloud findings into tracked work (the Security Ticketing Engine). PASS: every cloud security finding auto-creates a ticket routed to the resource owner by tag, with a severity-based SLA, dedup, and closed-loop verification on rescan; orphaned (untagged) findings are escalated to a named owner. Exceptions: findings with no ticket/owner, no SLA, duplicate noise drowning real findings, and tickets closed without confirming the finding is gone.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- cloud-saas_inventory.json   (in-scope items — The pipeline turning every cloud security finding (CSPM / GuardDuty / Inspector) into a ticket with an owner + SLA)\n- cloud-saas_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The pipeline turning every cloud security finding (CSPM / GuardDuty / Inspector) into a ticket with an owner + SLA reconciled against policy, plus the resulting findings working paper",
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
            "CSPM / GuardDuty / Inspector / Security Hub (sources) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., CSPM / GuardDuty / Inspector / Security Hub (sources)) via read-only access."
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
            "Cloud security — owns the engine (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cloud security — owns the engine owns the control data; the auditor independently verifies it."
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
            "Only Security Hub criticals create tickets (GuardDuty + Inspector findings are dropped), ~30% of resources are untagged so their findings have no owner, and tickets auto-close on a timer without confirming remediation.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Only Security Hub criticals create tickets (GuardDuty + Inspector findings are dropped), ~30% of resources are untagged so their findings have no owner, and tickets auto-close on a timer without confirming remediation."
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
