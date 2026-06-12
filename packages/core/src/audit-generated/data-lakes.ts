import type { EpochConfig, StageConfig } from "../types";

export const dataLakesEpoch: EpochConfig = {
  "id": "data-lakes",
  "name": "Data Lakes & Warehouses",
  "subtitle": "Agentic technical & privacy audit — Data Lakes & Warehouses",
  "description": "Audit Data Lakes & Warehouses end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🗄️",
  "color": "Blue",
  "unlocked": true
};

export const dataLakesStages: StageConfig[] = [
  {
    "epochId": "data-lakes",
    "id": "dlw-01",
    "order": 1,
    "title": "Data architecture and platform design",
    "subtitle": "Agentic technical & privacy audit of the data architecture and platform design control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 3,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data architecture and platform design\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data architecture and platform design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data architecture and platform design control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 3/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-01-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Data architecture and platform design",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data architecture and platform design\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data architecture and platform design control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Data architecture and platform design\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data architecture and platform design control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data architecture and platform design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_data_architecture_and_platform_design_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_data_architecture_and_platform_design_mcp.py` to expose it to your agent — or `python 01_data_architecture_and_platform_design_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data architecture and platform design\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data architecture and platform design control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data architecture and platform design\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data architecture and platform design control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_data_architecture_and_platform_design_mcp.py",
          "url": "/audit-code/data-lakes/01_data_architecture_and_platform_design_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Data architecture and platform design\" (in-scope inventory for the data architecture and platform design control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data architecture and platform design\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data architecture and platform design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data architecture and platform design control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Data architecture and platform design\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data architecture and platform design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the data architecture and platform design control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data architecture and platform design\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data architecture and platform design\" control must cover\n# fragment: data_architecture_platform_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "data_architecture_platform_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data architecture and platform design\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data architecture and platform design control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data architecture and platform design\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data architecture and platform design\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data architecture and platform design control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data architecture and platform design\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data architecture and platform design\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data architecture and platform design\", which part stays with the human auditor?",
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
          "id": "dlw-01-q7",
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
          "id": "dlw-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data architecture and platform design\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data architecture and platform design control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data architecture and platform design control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-01-q9",
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
          "id": "dlw-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data architecture and platform design\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-02",
    "order": 2,
    "title": "Source onboarding and ingestion",
    "subtitle": "Agentic technical & privacy audit of the source onboarding and ingestion control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Source onboarding and ingestion\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Source onboarding and ingestion\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the source onboarding and ingestion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-02-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Source onboarding and ingestion",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Source onboarding and ingestion\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the source onboarding and ingestion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Source onboarding and ingestion\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the source onboarding and ingestion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Source onboarding and ingestion\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_source_onboarding_and_ingestion_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_source_onboarding_and_ingestion_mcp.py` to expose it to your agent — or `python 02_source_onboarding_and_ingestion_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Source onboarding and ingestion\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the source onboarding and ingestion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Source onboarding and ingestion\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the source onboarding and ingestion control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_source_onboarding_and_ingestion_mcp.py",
          "url": "/audit-code/data-lakes/02_source_onboarding_and_ingestion_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Source onboarding and ingestion\" (in-scope inventory for the source onboarding and ingestion control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Source onboarding and ingestion\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Source onboarding and ingestion\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the source onboarding and ingestion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Source onboarding and ingestion\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Source onboarding and ingestion\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the source onboarding and ingestion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Source onboarding and ingestion\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Source onboarding and ingestion\" control must cover\n# fragment: source_onboarding_ingestion_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "source_onboarding_ingestion_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Source onboarding and ingestion\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the source onboarding and ingestion control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Source onboarding and ingestion\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Source onboarding and ingestion\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the source onboarding and ingestion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Source onboarding and ingestion\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Source onboarding and ingestion\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Source onboarding and ingestion\", which part stays with the human auditor?",
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
          "id": "dlw-02-q7",
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
          "id": "dlw-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Source onboarding and ingestion\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the source onboarding and ingestion control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the source onboarding and ingestion control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-02-q9",
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
          "id": "dlw-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Source onboarding and ingestion\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-03",
    "order": 3,
    "title": "ETL/ELT transformation controls",
    "subtitle": "Agentic technical & privacy audit of the etl/elt transformation controls control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"ETL/ELT transformation controls\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"ETL/ELT transformation controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the etl/elt transformation controls control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-03-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "ETL/ELT transformation controls",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"ETL/ELT transformation controls\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the etl/elt transformation controls control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"ETL/ELT transformation controls\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the etl/elt transformation controls control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"ETL/ELT transformation controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_etl_elt_transformation_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_etl_elt_transformation_controls_mcp.py` to expose it to your agent — or `python 03_etl_elt_transformation_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"ETL/ELT transformation controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the etl/elt transformation controls control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"ETL/ELT transformation controls\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the etl/elt transformation controls control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_etl_elt_transformation_controls_mcp.py",
          "url": "/audit-code/data-lakes/03_etl_elt_transformation_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"ETL/ELT transformation controls\" (in-scope inventory for the etl/elt transformation controls control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"ETL/ELT transformation controls\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"ETL/ELT transformation controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the etl/elt transformation controls control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"ETL/ELT transformation controls\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"ETL/ELT transformation controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the etl/elt transformation controls control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"ETL/ELT transformation controls\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"ETL/ELT transformation controls\" control must cover\n# fragment: etlelt_transformation_controls_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "etlelt_transformation_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"ETL/ELT transformation controls\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the etl/elt transformation controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"ETL/ELT transformation controls\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"ETL/ELT transformation controls\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the etl/elt transformation controls control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"ETL/ELT transformation controls\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"ETL/ELT transformation controls\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"ETL/ELT transformation controls\", which part stays with the human auditor?",
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
          "id": "dlw-03-q7",
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
          "id": "dlw-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"ETL/ELT transformation controls\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the etl/elt transformation controls control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the etl/elt transformation controls control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-03-q9",
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
          "id": "dlw-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"ETL/ELT transformation controls\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-04",
    "order": 4,
    "title": "Data quality management",
    "subtitle": "Agentic technical & privacy audit of the data quality management control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data quality management\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data quality management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data quality management control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-04-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Data quality management",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data quality management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data quality management control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Data quality management\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data quality management control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data quality management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_data_quality_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_data_quality_management_mcp.py` to expose it to your agent — or `python 04_data_quality_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data quality management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data quality management control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data quality management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data quality management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_data_quality_management_mcp.py",
          "url": "/audit-code/data-lakes/04_data_quality_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Data quality management\" (in-scope inventory for the data quality management control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data quality management\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data quality management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data quality management control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Data quality management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data quality management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the data quality management control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data quality management\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data quality management\" control must cover\n# fragment: data_quality_management_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "data_quality_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data quality management\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data quality management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data quality management\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data quality management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data quality management control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data quality management\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data quality management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data quality management\", which part stays with the human auditor?",
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
          "id": "dlw-04-q7",
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
          "id": "dlw-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data quality management\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data quality management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data quality management control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-04-q9",
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
          "id": "dlw-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data quality management\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-05",
    "order": 5,
    "title": "Metadata mgmt and catalog",
    "subtitle": "Agentic technical & privacy audit of the metadata mgmt and catalog control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Metadata mgmt and catalog\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Metadata mgmt and catalog\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the metadata mgmt and catalog control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-05-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Metadata mgmt and catalog",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Metadata mgmt and catalog\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the metadata mgmt and catalog control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Metadata mgmt and catalog\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the metadata mgmt and catalog control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Metadata mgmt and catalog\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_metadata_mgmt_and_catalog_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_metadata_mgmt_and_catalog_mcp.py` to expose it to your agent — or `python 05_metadata_mgmt_and_catalog_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Metadata mgmt and catalog\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the metadata mgmt and catalog control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Metadata mgmt and catalog\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the metadata mgmt and catalog control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_metadata_mgmt_and_catalog_mcp.py",
          "url": "/audit-code/data-lakes/05_metadata_mgmt_and_catalog_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Metadata mgmt and catalog\" (in-scope inventory for the metadata mgmt and catalog control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Metadata mgmt and catalog\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Metadata mgmt and catalog\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the metadata mgmt and catalog control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Metadata mgmt and catalog\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Metadata mgmt and catalog\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the metadata mgmt and catalog control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Metadata mgmt and catalog\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Metadata mgmt and catalog\" control must cover\n# fragment: metadata_mgmt_catalog_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "metadata_mgmt_catalog_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Metadata mgmt and catalog\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the metadata mgmt and catalog control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Metadata mgmt and catalog\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Metadata mgmt and catalog\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the metadata mgmt and catalog control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Metadata mgmt and catalog\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Metadata mgmt and catalog\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Metadata mgmt and catalog\", which part stays with the human auditor?",
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
          "id": "dlw-05-q7",
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
          "id": "dlw-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Metadata mgmt and catalog\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the metadata mgmt and catalog control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the metadata mgmt and catalog control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-05-q9",
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
          "id": "dlw-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Metadata mgmt and catalog\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-06",
    "order": 6,
    "title": "Data lineage and traceability",
    "subtitle": "Agentic technical & privacy audit of the data lineage and traceability control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data lineage and traceability\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data lineage and traceability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data lineage and traceability control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-06-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Data lineage and traceability",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data lineage and traceability\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data lineage and traceability control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Data lineage and traceability\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data lineage and traceability control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data lineage and traceability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_data_lineage_and_traceability_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_data_lineage_and_traceability_mcp.py` to expose it to your agent — or `python 06_data_lineage_and_traceability_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data lineage and traceability\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data lineage and traceability control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data lineage and traceability\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data lineage and traceability control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_data_lineage_and_traceability_mcp.py",
          "url": "/audit-code/data-lakes/06_data_lineage_and_traceability_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Data lineage and traceability\" (in-scope inventory for the data lineage and traceability control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data lineage and traceability\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data lineage and traceability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data lineage and traceability control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Data lineage and traceability\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Data lineage and traceability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the data lineage and traceability control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data lineage and traceability\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data lineage and traceability\" control must cover\n# fragment: data_lineage_traceability_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "data_lineage_traceability_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data lineage and traceability\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data lineage and traceability control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data lineage and traceability\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data lineage and traceability\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data lineage and traceability control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data lineage and traceability\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data lineage and traceability\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data lineage and traceability\", which part stays with the human auditor?",
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
          "id": "dlw-06-q7",
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
          "id": "dlw-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data lineage and traceability\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data lineage and traceability control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data lineage and traceability control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-06-q9",
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
          "id": "dlw-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data lineage and traceability\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-07",
    "order": 7,
    "title": "IAM (data lake)",
    "subtitle": "Agentic technical & privacy audit of the iam (data lake) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IAM (data lake)\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"IAM (data lake)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the iam (data lake) control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-07-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "IAM (data lake)",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"IAM (data lake)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the iam (data lake) control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"IAM (data lake)\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the iam (data lake) control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"IAM (data lake)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_iam_data_lake_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_iam_data_lake_mcp.py` to expose it to your agent — or `python 07_iam_data_lake_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"IAM (data lake)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the iam (data lake) control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"IAM (data lake)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the iam (data lake) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_iam_data_lake_mcp.py",
          "url": "/audit-code/data-lakes/07_iam_data_lake_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"IAM (data lake)\" (in-scope inventory for the iam (data lake) control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IAM (data lake)\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"IAM (data lake)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the iam (data lake) control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"IAM (data lake)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"IAM (data lake)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the iam (data lake) control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"IAM (data lake)\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"IAM (data lake)\" control must cover\n# fragment: iam_data_lake_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "iam_data_lake_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"IAM (data lake)\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the iam (data lake) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IAM (data lake)\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IAM (data lake)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the iam (data lake) control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"IAM (data lake)\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IAM (data lake)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IAM (data lake)\", which part stays with the human auditor?",
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
          "id": "dlw-07-q7",
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
          "id": "dlw-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IAM (data lake)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the iam (data lake) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the iam (data lake) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-07-q9",
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
          "id": "dlw-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IAM (data lake)\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-08",
    "order": 8,
    "title": "Sensitive data protection",
    "subtitle": "Agentic technical & privacy audit of the sensitive data protection control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Sensitive data protection\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Sensitive data protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the sensitive data protection control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-08-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Sensitive data protection",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Sensitive data protection\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the sensitive data protection control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Sensitive data protection\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the sensitive data protection control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Sensitive data protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_sensitive_data_protection_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_sensitive_data_protection_mcp.py` to expose it to your agent — or `python 08_sensitive_data_protection_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Sensitive data protection\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the sensitive data protection control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Sensitive data protection\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the sensitive data protection control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_sensitive_data_protection_mcp.py",
          "url": "/audit-code/data-lakes/08_sensitive_data_protection_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Sensitive data protection\" (in-scope inventory for the sensitive data protection control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Sensitive data protection\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Sensitive data protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the sensitive data protection control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Sensitive data protection\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Sensitive data protection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the sensitive data protection control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Sensitive data protection\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Sensitive data protection\" control must cover\n# fragment: sensitive_data_protection_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "sensitive_data_protection_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Sensitive data protection\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the sensitive data protection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Sensitive data protection\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Sensitive data protection\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the sensitive data protection control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Sensitive data protection\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Sensitive data protection\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Sensitive data protection\", which part stays with the human auditor?",
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
          "id": "dlw-08-q7",
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
          "id": "dlw-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Sensitive data protection\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the sensitive data protection control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the sensitive data protection control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-08-q9",
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
          "id": "dlw-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Sensitive data protection\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-09",
    "order": 9,
    "title": "Logging, monitoring, alerting",
    "subtitle": "Agentic technical & privacy audit of the logging, monitoring, alerting control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Logging, monitoring, alerting\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Logging, monitoring, alerting\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the logging, monitoring, alerting control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-09-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Logging, monitoring, alerting",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Logging, monitoring, alerting\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the logging, monitoring, alerting control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Logging, monitoring, alerting\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the logging, monitoring, alerting control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Logging, monitoring, alerting\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_logging_monitoring_alerting_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_logging_monitoring_alerting_mcp.py` to expose it to your agent — or `python 09_logging_monitoring_alerting_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Logging, monitoring, alerting\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the logging, monitoring, alerting control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Logging, monitoring, alerting\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the logging, monitoring, alerting control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_logging_monitoring_alerting_mcp.py",
          "url": "/audit-code/data-lakes/09_logging_monitoring_alerting_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Logging, monitoring, alerting\" (in-scope inventory for the logging, monitoring, alerting control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Logging, monitoring, alerting\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Logging, monitoring, alerting\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the logging, monitoring, alerting control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Logging, monitoring, alerting\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Logging, monitoring, alerting\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the logging, monitoring, alerting control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Logging, monitoring, alerting\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Logging, monitoring, alerting\" control must cover\n# fragment: logging_monitoring_alerting_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "logging_monitoring_alerting_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Logging, monitoring, alerting\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the logging, monitoring, alerting control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Logging, monitoring, alerting\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Logging, monitoring, alerting\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the logging, monitoring, alerting control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Logging, monitoring, alerting\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Logging, monitoring, alerting\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Logging, monitoring, alerting\", which part stays with the human auditor?",
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
          "id": "dlw-09-q7",
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
          "id": "dlw-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Logging, monitoring, alerting\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the logging, monitoring, alerting control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the logging, monitoring, alerting control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-09-q9",
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
          "id": "dlw-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Logging, monitoring, alerting\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-10",
    "order": 10,
    "title": "Backup, recovery, resilience",
    "subtitle": "Agentic technical & privacy audit of the backup, recovery, resilience control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Backup, recovery, resilience\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Backup, recovery, resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the backup, recovery, resilience control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-10-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Backup, recovery, resilience",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Backup, recovery, resilience\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the backup, recovery, resilience control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Backup, recovery, resilience\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the backup, recovery, resilience control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Backup, recovery, resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_backup_recovery_resilience_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_backup_recovery_resilience_mcp.py` to expose it to your agent — or `python 10_backup_recovery_resilience_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Backup, recovery, resilience\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the backup, recovery, resilience control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Backup, recovery, resilience\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the backup, recovery, resilience control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_backup_recovery_resilience_mcp.py",
          "url": "/audit-code/data-lakes/10_backup_recovery_resilience_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Backup, recovery, resilience\" (in-scope inventory for the backup, recovery, resilience control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Backup, recovery, resilience\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Backup, recovery, resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the backup, recovery, resilience control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Backup, recovery, resilience\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Backup, recovery, resilience\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the backup, recovery, resilience control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Backup, recovery, resilience\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Backup, recovery, resilience\" control must cover\n# fragment: backup_recovery_resilience_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "backup_recovery_resilience_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Backup, recovery, resilience\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the backup, recovery, resilience control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Backup, recovery, resilience\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Backup, recovery, resilience\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the backup, recovery, resilience control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Backup, recovery, resilience\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Backup, recovery, resilience\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Backup, recovery, resilience\", which part stays with the human auditor?",
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
          "id": "dlw-10-q7",
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
          "id": "dlw-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Backup, recovery, resilience\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the backup, recovery, resilience control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the backup, recovery, resilience control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-10-q9",
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
          "id": "dlw-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Backup, recovery, resilience\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-11",
    "order": 11,
    "title": "Environment segregation",
    "subtitle": "Agentic technical & privacy audit of the environment segregation control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Environment segregation\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Environment segregation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the environment segregation control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-11-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Environment segregation",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Environment segregation\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the environment segregation control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Environment segregation\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the environment segregation control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Environment segregation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_environment_segregation_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_environment_segregation_mcp.py` to expose it to your agent — or `python 11_environment_segregation_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Environment segregation\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the environment segregation control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Environment segregation\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the environment segregation control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_environment_segregation_mcp.py",
          "url": "/audit-code/data-lakes/11_environment_segregation_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Environment segregation\" (in-scope inventory for the environment segregation control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Environment segregation\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Environment segregation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the environment segregation control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Environment segregation\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Environment segregation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the environment segregation control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Environment segregation\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Environment segregation\" control must cover\n# fragment: environment_segregation_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "environment_segregation_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Environment segregation\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the environment segregation control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Environment segregation\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Environment segregation\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the environment segregation control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Environment segregation\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Environment segregation\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Environment segregation\", which part stays with the human auditor?",
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
          "id": "dlw-11-q7",
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
          "id": "dlw-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Environment segregation\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the environment segregation control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the environment segregation control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-11-q9",
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
          "id": "dlw-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Environment segregation\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-12",
    "order": 12,
    "title": "SDLC / DataOps / CI/CD",
    "subtitle": "Agentic technical & privacy audit of the sdlc / dataops / ci/cd control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"SDLC / DataOps / CI/CD\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"SDLC / DataOps / CI/CD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the sdlc / dataops / ci/cd control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-12-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "SDLC / DataOps / CI/CD",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"SDLC / DataOps / CI/CD\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the sdlc / dataops / ci/cd control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"SDLC / DataOps / CI/CD\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the sdlc / dataops / ci/cd control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"SDLC / DataOps / CI/CD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_sdlc_dataops_ci_cd_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_sdlc_dataops_ci_cd_mcp.py` to expose it to your agent — or `python 12_sdlc_dataops_ci_cd_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"SDLC / DataOps / CI/CD\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the sdlc / dataops / ci/cd control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"SDLC / DataOps / CI/CD\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the sdlc / dataops / ci/cd control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_sdlc_dataops_ci_cd_mcp.py",
          "url": "/audit-code/data-lakes/12_sdlc_dataops_ci_cd_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"SDLC / DataOps / CI/CD\" (in-scope inventory for the sdlc / dataops / ci/cd control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"SDLC / DataOps / CI/CD\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"SDLC / DataOps / CI/CD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the sdlc / dataops / ci/cd control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"SDLC / DataOps / CI/CD\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"SDLC / DataOps / CI/CD\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the sdlc / dataops / ci/cd control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"SDLC / DataOps / CI/CD\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"SDLC / DataOps / CI/CD\" control must cover\n# fragment: sdlc_dataops_cicd_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "sdlc_dataops_cicd_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"SDLC / DataOps / CI/CD\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the sdlc / dataops / ci/cd control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"SDLC / DataOps / CI/CD\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"SDLC / DataOps / CI/CD\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the sdlc / dataops / ci/cd control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"SDLC / DataOps / CI/CD\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"SDLC / DataOps / CI/CD\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"SDLC / DataOps / CI/CD\", which part stays with the human auditor?",
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
          "id": "dlw-12-q7",
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
          "id": "dlw-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"SDLC / DataOps / CI/CD\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the sdlc / dataops / ci/cd control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the sdlc / dataops / ci/cd control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-12-q9",
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
          "id": "dlw-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"SDLC / DataOps / CI/CD\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-13",
    "order": 13,
    "title": "Retention, archival, deletion",
    "subtitle": "Agentic technical & privacy audit of the retention, archival, deletion control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Retention, archival, deletion\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Retention, archival, deletion\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the retention, archival, deletion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-13-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Retention, archival, deletion",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Retention, archival, deletion\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the retention, archival, deletion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Retention, archival, deletion\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the retention, archival, deletion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Retention, archival, deletion\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_retention_archival_deletion_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_retention_archival_deletion_mcp.py` to expose it to your agent — or `python 13_retention_archival_deletion_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Retention, archival, deletion\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the retention, archival, deletion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Retention, archival, deletion\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the retention, archival, deletion control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_retention_archival_deletion_mcp.py",
          "url": "/audit-code/data-lakes/13_retention_archival_deletion_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Retention, archival, deletion\" (in-scope inventory for the retention, archival, deletion control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Retention, archival, deletion\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Retention, archival, deletion\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the retention, archival, deletion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Retention, archival, deletion\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Retention, archival, deletion\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the retention, archival, deletion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Retention, archival, deletion\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Retention, archival, deletion\" control must cover\n# fragment: retention_archival_deletion_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "retention_archival_deletion_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Retention, archival, deletion\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the retention, archival, deletion control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Retention, archival, deletion\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Retention, archival, deletion\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the retention, archival, deletion control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Retention, archival, deletion\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Retention, archival, deletion\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Retention, archival, deletion\", which part stays with the human auditor?",
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
          "id": "dlw-13-q7",
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
          "id": "dlw-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Retention, archival, deletion\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the retention, archival, deletion control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the retention, archival, deletion control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-13-q9",
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
          "id": "dlw-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Retention, archival, deletion\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-14",
    "order": 14,
    "title": "Reporting / semantic layer",
    "subtitle": "Agentic technical & privacy audit of the reporting / semantic layer control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 6,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Reporting / semantic layer\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Reporting / semantic layer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the reporting / semantic layer control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 6/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-14-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Reporting / semantic layer",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Reporting / semantic layer\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the reporting / semantic layer control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Reporting / semantic layer\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the reporting / semantic layer control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Reporting / semantic layer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_reporting_semantic_layer_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_reporting_semantic_layer_mcp.py` to expose it to your agent — or `python 14_reporting_semantic_layer_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Reporting / semantic layer\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the reporting / semantic layer control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Reporting / semantic layer\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the reporting / semantic layer control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_reporting_semantic_layer_mcp.py",
          "url": "/audit-code/data-lakes/14_reporting_semantic_layer_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Reporting / semantic layer\" (in-scope inventory for the reporting / semantic layer control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Reporting / semantic layer\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Reporting / semantic layer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the reporting / semantic layer control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Reporting / semantic layer\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Reporting / semantic layer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the reporting / semantic layer control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Reporting / semantic layer\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Reporting / semantic layer\" control must cover\n# fragment: reporting_semantic_layer_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "reporting_semantic_layer_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Reporting / semantic layer\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the reporting / semantic layer control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Reporting / semantic layer\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Reporting / semantic layer\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the reporting / semantic layer control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Reporting / semantic layer\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Reporting / semantic layer\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Reporting / semantic layer\", which part stays with the human auditor?",
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
          "id": "dlw-14-q7",
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
          "id": "dlw-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Reporting / semantic layer\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the reporting / semantic layer control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the reporting / semantic layer control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-14-q9",
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
          "id": "dlw-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Reporting / semantic layer\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-15",
    "order": 15,
    "title": "End-user computing / extracts",
    "subtitle": "Agentic technical & privacy audit of the end-user computing / extracts control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"End-user computing / extracts\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"End-user computing / extracts\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the end-user computing / extracts control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-15-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "End-user computing / extracts",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"End-user computing / extracts\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the end-user computing / extracts control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"End-user computing / extracts\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the end-user computing / extracts control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"End-user computing / extracts\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_end_user_computing_extracts_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 15_end_user_computing_extracts_mcp.py` to expose it to your agent — or `python 15_end_user_computing_extracts_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"End-user computing / extracts\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the end-user computing / extracts control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"End-user computing / extracts\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the end-user computing / extracts control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "15_end_user_computing_extracts_mcp.py",
          "url": "/audit-code/data-lakes/15_end_user_computing_extracts_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"End-user computing / extracts\" (in-scope inventory for the end-user computing / extracts control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"End-user computing / extracts\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"End-user computing / extracts\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the end-user computing / extracts control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"End-user computing / extracts\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"End-user computing / extracts\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the end-user computing / extracts control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"End-user computing / extracts\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"End-user computing / extracts\" control must cover\n# fragment: enduser_computing_extracts_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "enduser_computing_extracts_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-15-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"End-user computing / extracts\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the end-user computing / extracts control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-15-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"End-user computing / extracts\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-15-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"End-user computing / extracts\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the end-user computing / extracts control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-15-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"End-user computing / extracts\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-15-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"End-user computing / extracts\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-15-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"End-user computing / extracts\", which part stays with the human auditor?",
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
          "id": "dlw-15-q7",
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
          "id": "dlw-15-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"End-user computing / extracts\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the end-user computing / extracts control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the end-user computing / extracts control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-15-q9",
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
          "id": "dlw-15-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"End-user computing / extracts\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-16",
    "order": 16,
    "title": "Third-party / CSP mgmt",
    "subtitle": "Agentic technical & privacy audit of the third-party / csp mgmt control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party / CSP mgmt\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Third-party / CSP mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the third-party / csp mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-16-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Third-party / CSP mgmt",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Third-party / CSP mgmt\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the third-party / csp mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Third-party / CSP mgmt\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the third-party / csp mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Third-party / CSP mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `16_third_party_csp_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 16_third_party_csp_mgmt_mcp.py` to expose it to your agent — or `python 16_third_party_csp_mgmt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Third-party / CSP mgmt\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the third-party / csp mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Third-party / CSP mgmt\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the third-party / csp mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "16_third_party_csp_mgmt_mcp.py",
          "url": "/audit-code/data-lakes/16_third_party_csp_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Third-party / CSP mgmt\" (in-scope inventory for the third-party / csp mgmt control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party / CSP mgmt\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Third-party / CSP mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the third-party / csp mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Third-party / CSP mgmt\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Third-party / CSP mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the third-party / csp mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Third-party / CSP mgmt\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Third-party / CSP mgmt\" control must cover\n# fragment: thirdparty_csp_mgmt_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "thirdparty_csp_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-16-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Third-party / CSP mgmt\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the third-party / csp mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-16-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party / CSP mgmt\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-16-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party / CSP mgmt\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the third-party / csp mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-16-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Third-party / CSP mgmt\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-16-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party / CSP mgmt\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-16-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party / CSP mgmt\", which part stays with the human auditor?",
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
          "id": "dlw-16-q7",
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
          "id": "dlw-16-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party / CSP mgmt\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the third-party / csp mgmt control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the third-party / csp mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-16-q9",
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
          "id": "dlw-16-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party / CSP mgmt\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-17",
    "order": 17,
    "title": "Incident response / problem mgmt",
    "subtitle": "Agentic technical & privacy audit of the incident response / problem mgmt control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident response / problem mgmt\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Incident response / problem mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the incident response / problem mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-17-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Incident response / problem mgmt",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Incident response / problem mgmt\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the incident response / problem mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Incident response / problem mgmt\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the incident response / problem mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Incident response / problem mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `17_incident_response_problem_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 17_incident_response_problem_mgmt_mcp.py` to expose it to your agent — or `python 17_incident_response_problem_mgmt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Incident response / problem mgmt\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the incident response / problem mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Incident response / problem mgmt\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the incident response / problem mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "17_incident_response_problem_mgmt_mcp.py",
          "url": "/audit-code/data-lakes/17_incident_response_problem_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Incident response / problem mgmt\" (in-scope inventory for the incident response / problem mgmt control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident response / problem mgmt\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Incident response / problem mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the incident response / problem mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Incident response / problem mgmt\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Incident response / problem mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the incident response / problem mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Incident response / problem mgmt\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Incident response / problem mgmt\" control must cover\n# fragment: incident_response_problem_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "incident_response_problem_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-17-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Incident response / problem mgmt\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the incident response / problem mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-17-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident response / problem mgmt\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-17-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident response / problem mgmt\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the incident response / problem mgmt control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-17-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Incident response / problem mgmt\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-17-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident response / problem mgmt\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-17-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident response / problem mgmt\", which part stays with the human auditor?",
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
          "id": "dlw-17-q7",
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
          "id": "dlw-17-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Incident response / problem mgmt\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the incident response / problem mgmt control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the incident response / problem mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-17-q9",
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
          "id": "dlw-17-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident response / problem mgmt\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-18",
    "order": 18,
    "title": "Capacity, performance, cost",
    "subtitle": "Agentic technical & privacy audit of the capacity, performance, cost control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Capacity, performance, cost\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Capacity, performance, cost\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the capacity, performance, cost control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-18-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Capacity, performance, cost",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Capacity, performance, cost\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the capacity, performance, cost control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Capacity, performance, cost\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the capacity, performance, cost control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Capacity, performance, cost\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `18_capacity_performance_cost_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 18_capacity_performance_cost_mcp.py` to expose it to your agent — or `python 18_capacity_performance_cost_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Capacity, performance, cost\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the capacity, performance, cost control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Capacity, performance, cost\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the capacity, performance, cost control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "18_capacity_performance_cost_mcp.py",
          "url": "/audit-code/data-lakes/18_capacity_performance_cost_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Capacity, performance, cost\" (in-scope inventory for the capacity, performance, cost control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Capacity, performance, cost\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Capacity, performance, cost\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the capacity, performance, cost control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Capacity, performance, cost\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Capacity, performance, cost\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the capacity, performance, cost control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Capacity, performance, cost\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Capacity, performance, cost\" control must cover\n# fragment: capacity_performance_cost_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "capacity_performance_cost_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-18-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Capacity, performance, cost\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the capacity, performance, cost control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-18-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Capacity, performance, cost\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-18-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Capacity, performance, cost\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the capacity, performance, cost control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-18-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Capacity, performance, cost\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-18-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Capacity, performance, cost\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-18-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Capacity, performance, cost\", which part stays with the human auditor?",
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
          "id": "dlw-18-q7",
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
          "id": "dlw-18-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Capacity, performance, cost\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the capacity, performance, cost control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the capacity, performance, cost control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-18-q9",
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
          "id": "dlw-18-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Capacity, performance, cost\" also serve privacy and regulatory goals?",
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
    "epochId": "data-lakes",
    "id": "dlw-19",
    "order": 19,
    "title": "Regulatory / contractual data req",
    "subtitle": "Agentic technical & privacy audit of the regulatory / contractual data req control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Regulatory / contractual data req\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Regulatory / contractual data req\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery); Ingestion + ETL/ELT pipelines; Data catalog + lineage) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the regulatory / contractual data req control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Lakehouse / warehouse (Snowflake/Databricks/BigQuery)",
        "Ingestion + ETL/ELT pipelines",
        "Data catalog + lineage",
        "Fine-grained access + masking"
      ],
      "dataOwner": [
        "Data engineering / platform",
        "Data governance / stewards",
        "Security engineering",
        "Analytics / BI owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Data Lakes & Warehouses controls."
      }
    },
    "badge": {
      "id": "dlw-19-badge",
      "name": "Data Lakes & Warehouses Auditor",
      "emoji": "🗄️"
    },
    "wonder": {
      "name": "Regulatory / contractual data req",
      "location": "Data Lakes & Warehouses",
      "era": "Present Day",
      "emoji": "🗄️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Regulatory / contractual data req\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the regulatory / contractual data req control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery))) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Regulatory / contractual data req\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the regulatory / contractual data req control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Regulatory / contractual data req\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `19_regulatory_contractual_data_req_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse / warehouse (Snowflake/Databricks/BigQuery) and Ingestion + ETL/ELT pipelines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 19_regulatory_contractual_data_req_mcp.py` to expose it to your agent — or `python 19_regulatory_contractual_data_req_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An over-shared analytics store",
        "when": "Recurring",
        "where": "Data lakes / warehouses",
        "impact": "Broad access, missing masking, or an exposed extract turns the analytics platform — which concentrates the most sensitive data — into a single high-value breach.",
        "body": [
          "Lakes and warehouses concentrate sensitive data, so weak access controls, no masking, or unmanaged extracts create outsized exposure (e.g., a misconfigured cloud warehouse share).",
          "Auditors verify architecture, ingestion/ETL controls, catalog/lineage, fine-grained IAM, sensitive-data protection, logging, retention, and extract governance."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Data Lakes & Warehouses scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Lakehouse / warehouse (Snowflake/Databricks/BigQuery) · Ingestion + ETL/ELT pipelines",
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
          "year": 2023,
          "event": "Misconfigured cloud data shares expose large analytics datasets",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Credential-based warehouse intrusions exfiltrate customer datasets"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Regulatory / contractual data req\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the regulatory / contractual data req control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)).",
        "The test: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Regulatory / contractual data req\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Lakehouse / warehouse (Snowflake/Databricks/BigQuery), Ingestion + ETL/ELT pipelines, Data catalog + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the regulatory / contractual data req control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU/SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "DAMA-DMBOK — data governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "19_regulatory_contractual_data_req_mcp.py",
          "url": "/audit-code/data-lakes/19_regulatory_contractual_data_req_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Regulatory / contractual data req\" (in-scope inventory for the regulatory / contractual data req control (from lakehouse / warehouse (snowflake/databricks/bigquery))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Regulatory / contractual data req\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Regulatory / contractual data req\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the regulatory / contractual data req control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse / warehouse (Snowflake/Databricks/BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse / warehouse (Snowflake/Databricks/BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse / warehouse (Snowflake/Databricks/BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Regulatory / contractual data req\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Data Lakes & Warehouses policy/standard and flag every item where the \"Regulatory / contractual data req\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — In-scope inventory for the regulatory / contractual data req control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Regulatory / contractual data req\",\n  \"domain\": \"Data Lakes & Warehouses\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dlw_",
        "/evidence/data-lakes_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data engineering / platform\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Regulatory / contractual data req\" control must cover\n# fragment: regulatory_contractual_data_",
        "/evidence/data-lakes_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "data-lakes_inventory.json",
            "isDir": false
          },
          {
            "name": "data-lakes_state.json",
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
          "value": "FLAG{dlw_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/data-lakes_inventory.json",
          "value": "regulatory_contractual_data_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/data-lakes_state.json",
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
          "id": "dlw-19-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Regulatory / contractual data req\" sub-process of Data Lakes & Warehouses?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the regulatory / contractual data req control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dlw-19-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Regulatory / contractual data req\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dlw-19-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Regulatory / contractual data req\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the regulatory / contractual data req control (from Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dlw-19-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Regulatory / contractual data req\"?",
          "options": [
            "Lakehouse / warehouse (Snowflake/Databricks/BigQuery) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Lakehouse / warehouse (Snowflake/Databricks/BigQuery)) via read-only access."
        },
        {
          "id": "dlw-19-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Regulatory / contractual data req\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data engineering / platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering / platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dlw-19-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Regulatory / contractual data req\", which part stays with the human auditor?",
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
          "id": "dlw-19-q7",
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
          "id": "dlw-19-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Regulatory / contractual data req\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the regulatory / contractual data req control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the regulatory / contractual data req control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dlw-19-q9",
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
          "id": "dlw-19-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Regulatory / contractual data req\" also serve privacy and regulatory goals?",
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
