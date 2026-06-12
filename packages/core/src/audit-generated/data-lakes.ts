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
    "xp": 140,
    "easeScore": 3,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data architecture and platform design\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the data platform is architected securely by design. PASS: a documented architecture (zone/medallion layering, storage/compute separation, private networking) with a security review; data products follow a security-by-design standard (encryption, access, classification at design); and the platform uses private connectivity (no public endpoints). Exceptions: undocumented/organic architecture, no security review, data products built ad hoc with no standard, and the platform reachable over the public internet.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lakehouse/warehouse (Snowflake / Databricks / BigQuery / Redshift); Cloud network (PrivateLink / Private Service Connect); Architecture / EA records) as tools — e.g. `review the platform architecture: medallion zones, storage/compute sep`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The data-platform architecture (lakehouse/warehouse design: medallion bronze-silver-gold zones, compute/storage separation, network)",
        "The security-architecture review of the platform (tenancy, network isolation, private connectivity)",
        "Design standards for new data products (security-by-design gates)",
        "Coverage: data products built to the standard vs ad hoc"
      ],
      "system": [
        "Lakehouse/warehouse (Snowflake / Databricks / BigQuery / Redshift)",
        "Cloud network (PrivateLink / Private Service Connect)",
        "Architecture / EA records"
      ],
      "dataOwner": [
        "Data platform / engineering",
        "Security architecture",
        "Data governance"
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
      "tagline": "Auditing \"Data architecture and platform design\" as a repeatable agentic workflow: pull the real evidence (The data-platform architecture (lakehouse/warehouse design: medallion bronze-silver-gold zones, compute/storage separation, network)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Data architecture and platform design\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the data-platform architecture (lakehouse/warehouse design: medallion bronze-silver-gold zones, compute/storage separation, network), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lakehouse/warehouse (Snowflake / Databricks / BigQuery / Redshift), Cloud network (PrivateLink / Private Service Connect), Architecture / EA records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `review the platform architecture: medallion zones, storage/compute separation, t` — read-only, against the systems of record.",
        "The test itself is specific. Verify the data platform is architected securely by design. PASS: a documented architecture (zone/medallion layering, storage/compute separation, private networking) with a security review; data products follow a security-by-design standard (encryption, access, classification at design); and the platform uses private connectivity (no public endpoints). Exceptions: undocumented/organic architecture, no security review, data products built ad hoc with no standard, and the platform reachable over the public internet. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_data_architecture_and_platform_design_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lakehouse/warehouse (Snowflake / Databricks / BigQuery / Redshift) and Cloud network (PrivateLink / Private Service Connect) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Lakehouse/warehouse (Snowflake / Databricks / BigQuery / Redshift) · Cloud network (PrivateLink / Private Service Connect)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "review the platform architecture: medallion zones, storage/compute separation, tenancy\nconfirm private connectivity (PrivateLink / Private Service Connect; no public endpoints)\nsecurity-by-design standard for new data products + a design gate\ncoverage: data products built to the standard vs ad hoc"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The data-platform architecture (lakehouse/warehouse design: medallion bronze-silver-gold zones, compute/storage separation, network).",
        "The test: Verify the data platform is architected securely by design.",
        "Reconcile the systems of record (Lakehouse/warehouse (Snowflake / Databricks / BigQuery / Redshift), Cloud network (PrivateLink / Private Service Connect), Architecture / EA records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The warehouse is reachable over a public endpoint with no PrivateLink, there's no medallion layering (raw and curated data mixed), and new data products are stood up ad hoc with no security-design review."
      ],
      "references": [
        {
          "title": "Cloud Security Alliance — Big Data Security",
          "url": "https://cloudsecurityalliance.org/"
        },
        {
          "title": "NIST SP 800-53 SC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Data architecture and platform design\" (the data-platform architecture (lakehouse/warehouse design: medallion bronze-silver-gold zones, compute/storage separation, network)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data architecture and platform design\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify the data platform is architected securely by design. PASS: a documented architecture (zone/medallion layering, storage/compute separation, private networking) with a security review; data products follow a security-by-design standard (encryption, access, classification at design); and the platform uses private connectivity (no public endpoints). Exceptions: undocumented/organic architecture, no security review, data products built ad hoc with no standard, and the platform reachable over the public internet. The evidence — The data-platform architecture (lakehouse/warehouse design: medallion bronze-silver-gold zones, compute/storage separation, network) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lakehouse/warehouse (Snowflake / Databricks / BigQuery / Redshift) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lakehouse/warehouse (Snowflake / Databricks / BigQuery / Redshift) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lakehouse/warehouse (Snowflake / Databricks / BigQuery / Redshift); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Data architecture and platform design\" Audit Evidence\n\nThe test:\nVerify the data platform is architected securely by design. PASS: a documented architecture (zone/medallion layering, storage/compute separation, private networking) with a security review; data products follow a security-by-design standard (encryption, access, classification at design); and the platform uses private connectivity (no public endpoints). Exceptions: undocumented/organic architecture, no security review, data products built ad hoc with no standard, and the platform reachable over the public internet.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The data-platform architecture (lakehouse/warehouse design: medallion bronze-silver-gold zones, compute/storage separation, network))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the data architecture and platform design control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data architecture and platform design control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data architecture and platform design against comparable organisations in the sector",
            "Obtain evidence that the data architecture and platform design control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data architecture and platform design\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data architecture and platform design\" control?",
          "options": [
            "A point-in-time screenshot of one system's data architecture and platform design settings, captured during the walkthrough",
            "The The data-platform architecture (lakehouse/warehouse design: medallion bronze-silver-gold zones, compute/storage separation, network), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data architecture and platform design control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data architecture and platform design capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data architecture and platform design\"?",
          "options": [
            "From Lakehouse/warehouse (Snowflake / Databricks / BigQuery / Redshift) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data architecture and platform design works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Lakehouse/warehouse (Snowflake / Databricks / BigQuery / Redshift)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data architecture and platform design\"?",
          "options": [
            "The external audit firm, since it is the party examining the data architecture and platform design control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data architecture and platform design data is shared, so the accountability sits with no one in particular",
            "Data platform / engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data platform / engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data architecture and platform design\", which part stays with the human auditor?",
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
          "id": "dlw-01-q7",
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
          "id": "dlw-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data architecture and platform design\", which of these is a realistic reportable finding?",
          "options": [
            "The warehouse is reachable over a public endpoint with no PrivateLink, there's no medallion layering (raw and curated data mixed), and new data products are stood up ad hoc with no security-design review.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The warehouse is reachable over a public endpoint with no PrivateLink, there's no medallion layering (raw and curated data mixed), and new data products are stood up ad hoc with no security-design review. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-01-q9",
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
          "id": "dlw-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data architecture and platform design\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data architecture and platform design, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-02",
    "order": 2,
    "title": "Source onboarding and ingestion",
    "subtitle": "Agentic technical & privacy audit of the source onboarding and ingestion control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Source onboarding and ingestion\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data sources are onboarded with governance + secure ingestion. PASS: every source is inventoried, owned, classified, and approved before onboarding; ingestion is authenticated + encrypted with vaulted source credentials; schema/data contracts are validated; and external/untrusted sources get extra controls. Exceptions: undocumented/shadow sources, ingestion with plaintext or hardcoded source credentials, no schema validation (bad/poisoned data lands), and external sources ingested with no vetting.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Ingestion (Fivetran / Airbyte / Kafka / cloud-native pipelines); Source-credential vault; Data catalogue (source registry)) as tools — e.g. `source inventory: owner, classification, onboarding approval per sourc`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The source-onboarding inventory (every data source feeding the platform) + owner, classification, approval",
        "The ingestion-security controls (authenticated + encrypted ingestion, source-credential handling)",
        "Schema/data-contract validation at ingestion + handling of untrusted/external sources",
        "Unauthorized / shadow-ingestion detection"
      ],
      "system": [
        "Ingestion (Fivetran / Airbyte / Kafka / cloud-native pipelines)",
        "Source-credential vault",
        "Data catalogue (source registry)"
      ],
      "dataOwner": [
        "Data engineering",
        "Source / data owners",
        "Data governance"
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
      "tagline": "Auditing \"Source onboarding and ingestion\" as a repeatable agentic workflow: pull the real evidence (The source-onboarding inventory (every data source feeding the platform) + owner, classification, approval) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Source onboarding and ingestion\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the source-onboarding inventory (every data source feeding the platform) + owner, classification, approval, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Ingestion (Fivetran / Airbyte / Kafka / cloud-native pipelines), Source-credential vault, Data catalogue (source registry) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `source inventory: owner, classification, onboarding approval per source` — read-only, against the systems of record.",
        "The test itself is specific. Verify data sources are onboarded with governance + secure ingestion. PASS: every source is inventoried, owned, classified, and approved before onboarding; ingestion is authenticated + encrypted with vaulted source credentials; schema/data contracts are validated; and external/untrusted sources get extra controls. Exceptions: undocumented/shadow sources, ingestion with plaintext or hardcoded source credentials, no schema validation (bad/poisoned data lands), and external sources ingested with no vetting. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_source_onboarding_and_ingestion_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Ingestion (Fivetran / Airbyte / Kafka / cloud-native pipelines) and Source-credential vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Ingestion (Fivetran / Airbyte / Kafka / cloud-native pipelines) · Source-credential vault",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "source inventory: owner, classification, onboarding approval per source\ningestion auth + encryption + where source credentials live (vault vs hardcoded)\nschema / data-contract validation at ingestion\ndetect shadow ingestion (data landing from un-onboarded sources)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The source-onboarding inventory (every data source feeding the platform) + owner, classification, approval.",
        "The test: Verify data sources are onboarded with governance + secure ingestion.",
        "Reconcile the systems of record (Ingestion (Fivetran / Airbyte / Kafka / cloud-native pipelines), Source-credential vault, Data catalogue (source registry)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Several data sources were onboarded with no approval or classification, ingestion pipelines store source database passwords in plaintext config, and there's no schema validation — so a malformed upstream change silently corrupted a curated table."
      ],
      "references": [
        {
          "title": "DAMA-DMBOK",
          "url": "https://www.dama.org/"
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
          "name": "02_source_onboarding_and_ingestion_mcp.py",
          "url": "/audit-code/data-lakes/02_source_onboarding_and_ingestion_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Source onboarding and ingestion\" (the source-onboarding inventory (every data source feeding the platform) + owner, classification, approval), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Source onboarding and ingestion\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify data sources are onboarded with governance + secure ingestion. PASS: every source is inventoried, owned, classified, and approved before onboarding; ingestion is authenticated + encrypted with vaulted source credentials; schema/data contracts are validated; and external/untrusted sources get extra controls. Exceptions: undocumented/shadow sources, ingestion with plaintext or hardcoded source credentials, no schema validation (bad/poisoned data lands), and external sources ingested with no vetting. The evidence — The source-onboarding inventory (every data source feeding the platform) + owner, classification, approval — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Ingestion (Fivetran / Airbyte / Kafka / cloud-native pipelines) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Ingestion (Fivetran / Airbyte / Kafka / cloud-native pipelines) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Ingestion (Fivetran / Airbyte / Kafka / cloud-native pipelines); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Source onboarding and ingestion\" Audit Evidence\n\nThe test:\nVerify data sources are onboarded with governance + secure ingestion. PASS: every source is inventoried, owned, classified, and approved before onboarding; ingestion is authenticated + encrypted with vaulted source credentials; schema/data contracts are validated; and external/untrusted sources get extra controls. Exceptions: undocumented/shadow sources, ingestion with plaintext or hardcoded source credentials, no schema validation (bad/poisoned data lands), and external sources ingested with no vetting.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The source-onboarding inventory (every data source feeding the platform) + owner, classification, approval)\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the source onboarding and ingestion control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the source onboarding and ingestion control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for source onboarding and ingestion against comparable organisations in the sector",
            "Obtain evidence that the source onboarding and ingestion control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Source onboarding and ingestion\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Source onboarding and ingestion\" control?",
          "options": [
            "A point-in-time screenshot of one system's source onboarding and ingestion settings, captured during the walkthrough",
            "The The source-onboarding inventory (every data source feeding the platform) + owner, classification, approval, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the source onboarding and ingestion control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's source onboarding and ingestion capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Source onboarding and ingestion\"?",
          "options": [
            "From Ingestion (Fivetran / Airbyte / Kafka / cloud-native pipelines) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how source onboarding and ingestion works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Ingestion (Fivetran / Airbyte / Kafka / cloud-native pipelines)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Source onboarding and ingestion\"?",
          "options": [
            "The external audit firm, since it is the party examining the source onboarding and ingestion control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the source onboarding and ingestion data is shared, so the accountability sits with no one in particular",
            "Data engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Source onboarding and ingestion\", which part stays with the human auditor?",
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
          "id": "dlw-02-q7",
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
          "id": "dlw-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Source onboarding and ingestion\", which of these is a realistic reportable finding?",
          "options": [
            "Several data sources were onboarded with no approval or classification, ingestion pipelines store source database passwords in plaintext config, and there's no schema validation — so a malformed upstream change silently corrupted a curated table.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Several data sources were onboarded with no approval or classification, ingestion pipelines store source database passwords in plaintext config, and there's no schema validation — so a malformed upstream change silently corrupted a curated table. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-02-q9",
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
          "id": "dlw-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Source onboarding and ingestion\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind source onboarding and ingestion, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-03",
    "order": 3,
    "title": "ETL/ELT transformation controls",
    "subtitle": "Agentic technical & privacy audit of the etl/elt transformation controls control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"ETL/ELT transformation controls\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify ETL/ELT transformations are controlled + correct. PASS: transformation code is version-controlled, peer-reviewed, and access-controlled (least-privilege to modify/run in prod); transformations have tests (dbt/data tests) + reconciliation (source-to-target counts) so data isn't silently dropped/duplicated; and changes go through change control. Exceptions: transformations edited directly in prod with no version control/review, no tests or reconciliation (silent corruption), and broad access to modify production pipelines.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Transformation (dbt / Spark / Snowflake tasks / Dataform); Version control + CI; Orchestration (Airflow / Dagster)) as tools — e.g. `confirm transformations are in version control + peer-reviewed (not ed`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The transformation-pipeline inventory + change control (transformations version-controlled + reviewed)",
        "Evidence transformations preserve integrity (no silent data loss/duplication; source-to-target reconciliation)",
        "Access control on who can modify + run transformations in production",
        "Test coverage for transformations (dbt tests / data tests)"
      ],
      "system": [
        "Transformation (dbt / Spark / Snowflake tasks / Dataform)",
        "Version control + CI",
        "Orchestration (Airflow / Dagster)"
      ],
      "dataOwner": [
        "Data / analytics engineering",
        "Data governance",
        "Change management"
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
      "tagline": "Auditing \"ETL/ELT transformation controls\" as a repeatable agentic workflow: pull the real evidence (The transformation-pipeline inventory + change control (transformations version-controlled + reviewed)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"ETL/ELT transformation controls\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the transformation-pipeline inventory + change control (transformations version-controlled + reviewed), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Transformation (dbt / Spark / Snowflake tasks / Dataform), Version control + CI, Orchestration (Airflow / Dagster) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm transformations are in version control + peer-reviewed (not edited in pr` — read-only, against the systems of record.",
        "The test itself is specific. Verify ETL/ELT transformations are controlled + correct. PASS: transformation code is version-controlled, peer-reviewed, and access-controlled (least-privilege to modify/run in prod); transformations have tests (dbt/data tests) + reconciliation (source-to-target counts) so data isn't silently dropped/duplicated; and changes go through change control. Exceptions: transformations edited directly in prod with no version control/review, no tests or reconciliation (silent corruption), and broad access to modify production pipelines. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_etl_elt_transformation_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Transformation (dbt / Spark / Snowflake tasks / Dataform) and Version control + CI (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Transformation (dbt / Spark / Snowflake tasks / Dataform) · Version control + CI",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm transformations are in version control + peer-reviewed (not edited in prod)\ntransformation tests (dbt tests) + source-to-target reconciliation (row counts / checksums)\nwho can modify + run production transformations (least-privilege?)\nchange control on transformation deployments"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The transformation-pipeline inventory + change control (transformations version-controlled + reviewed).",
        "The test: Verify ETL/ELT transformations are controlled + correct.",
        "Reconcile the systems of record (Transformation (dbt / Spark / Snowflake tasks / Dataform), Version control + CI, Orchestration (Airflow / Dagster)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Analysts edit production SQL transformations directly in the warehouse with no version control or review, there are no dbt tests or reconciliation, and a join change silently dropped 10% of rows from a regulatory report."
      ],
      "references": [
        {
          "title": "dbt — Best Practices",
          "url": "https://docs.getdbt.com/best-practices"
        },
        {
          "title": "NIST SP 800-53 SI",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"ETL/ELT transformation controls\" (the transformation-pipeline inventory + change control (transformations version-controlled + reviewed)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"ETL/ELT transformation controls\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify ETL/ELT transformations are controlled + correct. PASS: transformation code is version-controlled, peer-reviewed, and access-controlled (least-privilege to modify/run in prod); transformations have tests (dbt/data tests) + reconciliation (source-to-target counts) so data isn't silently dropped/duplicated; and changes go through change control. Exceptions: transformations edited directly in prod with no version control/review, no tests or reconciliation (silent corruption), and broad access to modify production pipelines. The evidence — The transformation-pipeline inventory + change control (transformations version-controlled + reviewed) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Transformation (dbt / Spark / Snowflake tasks / Dataform) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Transformation (dbt / Spark / Snowflake tasks / Dataform) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Transformation (dbt / Spark / Snowflake tasks / Dataform); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"ETL/ELT transformation controls\" Audit Evidence\n\nThe test:\nVerify ETL/ELT transformations are controlled + correct. PASS: transformation code is version-controlled, peer-reviewed, and access-controlled (least-privilege to modify/run in prod); transformations have tests (dbt/data tests) + reconciliation (source-to-target counts) so data isn't silently dropped/duplicated; and changes go through change control. Exceptions: transformations edited directly in prod with no version control/review, no tests or reconciliation (silent corruption), and broad access to modify production pipelines.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The transformation-pipeline inventory + change control (transformations version-controlled + reviewed))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the etl/elt transformation controls control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the etl/elt transformation controls control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for etl/elt transformation controls against comparable organisations in the sector",
            "Obtain evidence that the etl/elt transformation controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"ETL/ELT transformation controls\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"ETL/ELT transformation controls\" control?",
          "options": [
            "A point-in-time screenshot of one system's etl/elt transformation controls settings, captured during the walkthrough",
            "The The transformation-pipeline inventory + change control (transformations version-controlled + reviewed), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the etl/elt transformation controls control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's etl/elt transformation controls capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"ETL/ELT transformation controls\"?",
          "options": [
            "From Transformation (dbt / Spark / Snowflake tasks / Dataform) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how etl/elt transformation controls works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Transformation (dbt / Spark / Snowflake tasks / Dataform)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"ETL/ELT transformation controls\"?",
          "options": [
            "The external audit firm, since it is the party examining the etl/elt transformation controls control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the etl/elt transformation controls data is shared, so the accountability sits with no one in particular",
            "Data / analytics engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data / analytics engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"ETL/ELT transformation controls\", which part stays with the human auditor?",
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
          "id": "dlw-03-q7",
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
          "id": "dlw-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"ETL/ELT transformation controls\", which of these is a realistic reportable finding?",
          "options": [
            "Analysts edit production SQL transformations directly in the warehouse with no version control or review, there are no dbt tests or reconciliation, and a join change silently dropped 10% of rows from a regulatory report.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Analysts edit production SQL transformations directly in the warehouse with no version control or review, there are no dbt tests or reconciliation, and a join change silently dropped 10% of rows from a regulatory report. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-03-q9",
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
          "id": "dlw-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"ETL/ELT transformation controls\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind etl/elt transformation controls, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-04",
    "order": 4,
    "title": "Data quality management",
    "subtitle": "Agentic technical & privacy audit of the data quality management control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data quality management\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data quality is measured and managed for critical datasets. PASS: data-quality rules/SLAs are defined for critical datasets (completeness/accuracy/validity/timeliness/uniqueness), monitored continuously with alerting on failures + anomalies, and issues are triaged + remediated; coverage spans the critical estate. Exceptions: no data-quality rules, quality issues found only by downstream consumers/regulators, no monitoring/alerting, and unremediated quality issues feeding decisions/reports.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Data-quality tooling (Great Expectations / Monte Carlo / Soda / dbt tests); The data catalogue (quality scores); Alerting) as tools — e.g. `data-quality rules/SLAs per critical dataset + monitoring (Great Expec`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The data-quality rules/SLAs per critical dataset (completeness, accuracy, validity, timeliness, uniqueness)",
        "Data-quality monitoring results + trend (failed checks, anomalies)",
        "The data-quality issue-management process (detection → triage → remediation)",
        "Coverage: critical datasets with quality monitoring vs total"
      ],
      "system": [
        "Data-quality tooling (Great Expectations / Monte Carlo / Soda / dbt tests)",
        "The data catalogue (quality scores)",
        "Alerting"
      ],
      "dataOwner": [
        "Data quality / governance",
        "Data stewards",
        "Data engineering"
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
      "tagline": "Auditing \"Data quality management\" as a repeatable agentic workflow: pull the real evidence (The data-quality rules/SLAs per critical dataset (completeness, accuracy, validity, timeliness, uniqueness)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Data quality management\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the data-quality rules/SLAs per critical dataset (completeness, accuracy, validity, timeliness, uniqueness), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Data-quality tooling (Great Expectations / Monte Carlo / Soda / dbt tests), The data catalogue (quality scores), Alerting — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `data-quality rules/SLAs per critical dataset + monitoring (Great Expectations / ` — read-only, against the systems of record.",
        "The test itself is specific. Verify data quality is measured and managed for critical datasets. PASS: data-quality rules/SLAs are defined for critical datasets (completeness/accuracy/validity/timeliness/uniqueness), monitored continuously with alerting on failures + anomalies, and issues are triaged + remediated; coverage spans the critical estate. Exceptions: no data-quality rules, quality issues found only by downstream consumers/regulators, no monitoring/alerting, and unremediated quality issues feeding decisions/reports. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_data_quality_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Data-quality tooling (Great Expectations / Monte Carlo / Soda / dbt tests) and The data catalogue (quality scores) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Data-quality tooling (Great Expectations / Monte Carlo / Soda / dbt tests) · The data catalogue (quality scores)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "data-quality rules/SLAs per critical dataset + monitoring (Great Expectations / Monte Carlo)\nquality results + trend + anomaly alerting\nissue-management: detection → triage → remediation tracking\ncoverage: critical datasets monitored vs total"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The data-quality rules/SLAs per critical dataset (completeness, accuracy, validity, timeliness, uniqueness).",
        "The test: Verify data quality is measured and managed for critical datasets.",
        "Reconcile the systems of record (Data-quality tooling (Great Expectations / Monte Carlo / Soda / dbt tests), The data catalogue (quality scores), Alerting) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no data-quality monitoring; a duplicate-records issue in the customer dataset was discovered only when a regulator queried inconsistent figures, and quality issues feed financial reports unchecked."
      ],
      "references": [
        {
          "title": "DAMA-DMBOK — Data Quality",
          "url": "https://www.dama.org/"
        },
        {
          "title": "ISO 8000",
          "url": "https://www.iso.org/standard/50798.html"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Data quality management\" (the data-quality rules/slas per critical dataset (completeness, accuracy, validity, timeliness, uniqueness)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data quality management\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify data quality is measured and managed for critical datasets. PASS: data-quality rules/SLAs are defined for critical datasets (completeness/accuracy/validity/timeliness/uniqueness), monitored continuously with alerting on failures + anomalies, and issues are triaged + remediated; coverage spans the critical estate. Exceptions: no data-quality rules, quality issues found only by downstream consumers/regulators, no monitoring/alerting, and unremediated quality issues feeding decisions/reports. The evidence — The data-quality rules/SLAs per critical dataset (completeness, accuracy, validity, timeliness, uniqueness) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Data-quality tooling (Great Expectations / Monte Carlo / Soda / dbt tests) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Data-quality tooling (Great Expectations / Monte Carlo / Soda / dbt tests) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Data-quality tooling (Great Expectations / Monte Carlo / Soda / dbt tests); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Data quality management\" Audit Evidence\n\nThe test:\nVerify data quality is measured and managed for critical datasets. PASS: data-quality rules/SLAs are defined for critical datasets (completeness/accuracy/validity/timeliness/uniqueness), monitored continuously with alerting on failures + anomalies, and issues are triaged + remediated; coverage spans the critical estate. Exceptions: no data-quality rules, quality issues found only by downstream consumers/regulators, no monitoring/alerting, and unremediated quality issues feeding decisions/reports.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The data-quality rules/SLAs per critical dataset (completeness, accuracy, validity, timeliness, uniqueness))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the data quality management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data quality management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data quality management against comparable organisations in the sector",
            "Obtain evidence that the data quality management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data quality management\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data quality management\" control?",
          "options": [
            "A point-in-time screenshot of one system's data quality management settings, captured during the walkthrough",
            "The The data-quality rules/SLAs per critical dataset (completeness, accuracy, validity, timeliness, uniqueness), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data quality management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data quality management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data quality management\"?",
          "options": [
            "From Data-quality tooling (Great Expectations / Monte Carlo / Soda / dbt tests) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data quality management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Data-quality tooling (Great Expectations / Monte Carlo / Soda / dbt tests)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data quality management\"?",
          "options": [
            "The external audit firm, since it is the party examining the data quality management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data quality management data is shared, so the accountability sits with no one in particular",
            "Data quality / governance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data quality / governance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data quality management\", which part stays with the human auditor?",
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
          "id": "dlw-04-q7",
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
          "id": "dlw-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data quality management\", which of these is a realistic reportable finding?",
          "options": [
            "There's no data-quality monitoring; a duplicate-records issue in the customer dataset was discovered only when a regulator queried inconsistent figures, and quality issues feed financial reports unchecked.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no data-quality monitoring; a duplicate-records issue in the customer dataset was discovered only when a regulator queried inconsistent figures, and quality issues feed financial reports unchecked. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-04-q9",
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
          "id": "dlw-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data quality management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data quality management, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-05",
    "order": 5,
    "title": "Metadata mgmt and catalog",
    "subtitle": "Agentic technical & privacy audit of the metadata mgmt and catalog control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Metadata mgmt and catalog\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify metadata is managed so data is discoverable + governable. PASS: a data catalogue covers the in-scope datasets with owner, description, classification, and schema; metadata is harvested automatically + kept fresh; classification tags drive downstream controls (masking/access); and shadow/undocumented datasets are minimal. Exceptions: low catalogue coverage, stale/incomplete metadata, classification tags that drive no control, and large undocumented data.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Data catalogue (Collibra / Alation / Purview / DataHub / Unity Catalog); Auto-harvesting / scanning; The platform's native catalogue) as tools — e.g. `catalogue coverage: datasets with owner + classification + schema vs t`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Data-catalogue coverage (datasets catalogued with owner, description, classification, schema vs total)",
        "Business + technical metadata completeness",
        "The classification/tagging in the catalogue that drives controls (sensitive-data tags)",
        "Catalogue freshness (auto-harvested vs stale manual entries)"
      ],
      "system": [
        "Data catalogue (Collibra / Alation / Purview / DataHub / Unity Catalog)",
        "Auto-harvesting / scanning",
        "The platform's native catalogue"
      ],
      "dataOwner": [
        "Data governance / Chief Data Office",
        "Data stewards",
        "Data platform"
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
      "tagline": "Auditing \"Metadata mgmt and catalog\" as a repeatable agentic workflow: pull the real evidence (Data-catalogue coverage (datasets catalogued with owner, description, classification, schema vs total)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Metadata mgmt and catalog\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me data-catalogue coverage (datasets catalogued with owner, description, classification, schema vs total), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Data catalogue (Collibra / Alation / Purview / DataHub / Unity Catalog), Auto-harvesting / scanning, The platform's native catalogue — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `catalogue coverage: datasets with owner + classification + schema vs total (the ` — read-only, against the systems of record.",
        "The test itself is specific. Verify metadata is managed so data is discoverable + governable. PASS: a data catalogue covers the in-scope datasets with owner, description, classification, and schema; metadata is harvested automatically + kept fresh; classification tags drive downstream controls (masking/access); and shadow/undocumented datasets are minimal. Exceptions: low catalogue coverage, stale/incomplete metadata, classification tags that drive no control, and large undocumented data. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_metadata_mgmt_and_catalog_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Data catalogue (Collibra / Alation / Purview / DataHub / Unity Catalog) and Auto-harvesting / scanning (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Data catalogue (Collibra / Alation / Purview / DataHub / Unity Catalog) · Auto-harvesting / scanning",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "catalogue coverage: datasets with owner + classification + schema vs total (the gap = shadow data)\nmetadata completeness (business + technical)\ndo classification tags drive controls (masking / access policy)?\ncatalogue freshness (auto-harvested vs stale manual)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Data-catalogue coverage (datasets catalogued with owner, description, classification, schema vs total).",
        "The test: Verify metadata is managed so data is discoverable + governable.",
        "Reconcile the systems of record (Data catalogue (Collibra / Alation / Purview / DataHub / Unity Catalog), Auto-harvesting / scanning, The platform's native catalogue) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The catalogue covers a third of datasets, most lack an owner or classification, and the few classification tags drive no controls — so sensitive columns aren't masked because nothing knows they're sensitive."
      ],
      "references": [
        {
          "title": "DAMA-DMBOK — Metadata",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Microsoft Purview",
          "url": "https://learn.microsoft.com/purview/"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Metadata mgmt and catalog\" (data-catalogue coverage (datasets catalogued with owner, description, classification, schema vs total)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Metadata mgmt and catalog\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify metadata is managed so data is discoverable + governable. PASS: a data catalogue covers the in-scope datasets with owner, description, classification, and schema; metadata is harvested automatically + kept fresh; classification tags drive downstream controls (masking/access); and shadow/undocumented datasets are minimal. Exceptions: low catalogue coverage, stale/incomplete metadata, classification tags that drive no control, and large undocumented data. The evidence — Data-catalogue coverage (datasets catalogued with owner, description, classification, schema vs total) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Data catalogue (Collibra / Alation / Purview / DataHub / Unity Catalog) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Data catalogue (Collibra / Alation / Purview / DataHub / Unity Catalog) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Data catalogue (Collibra / Alation / Purview / DataHub / Unity Catalog); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Metadata mgmt and catalog\" Audit Evidence\n\nThe test:\nVerify metadata is managed so data is discoverable + governable. PASS: a data catalogue covers the in-scope datasets with owner, description, classification, and schema; metadata is harvested automatically + kept fresh; classification tags drive downstream controls (masking/access); and shadow/undocumented datasets are minimal. Exceptions: low catalogue coverage, stale/incomplete metadata, classification tags that drive no control, and large undocumented data.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — Data-catalogue coverage (datasets catalogued with owner, description, classification, schema vs total))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the metadata mgmt and catalog control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the metadata mgmt and catalog control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for metadata mgmt and catalog against comparable organisations in the sector",
            "Obtain evidence that the metadata mgmt and catalog control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Metadata mgmt and catalog\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Metadata mgmt and catalog\" control?",
          "options": [
            "A point-in-time screenshot of one system's metadata mgmt and catalog settings, captured during the walkthrough",
            "The Data-catalogue coverage (datasets catalogued with owner, description, classification, schema vs total), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the metadata mgmt and catalog control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's metadata mgmt and catalog capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Metadata mgmt and catalog\"?",
          "options": [
            "From Data catalogue (Collibra / Alation / Purview / DataHub / Unity Catalog) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how metadata mgmt and catalog works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Data catalogue (Collibra / Alation / Purview / DataHub / Unity Catalog)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Metadata mgmt and catalog\"?",
          "options": [
            "The external audit firm, since it is the party examining the metadata mgmt and catalog control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the metadata mgmt and catalog data is shared, so the accountability sits with no one in particular",
            "Data governance / Chief Data Office, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data governance / Chief Data Office owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Metadata mgmt and catalog\", which part stays with the human auditor?",
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
          "id": "dlw-05-q7",
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
          "id": "dlw-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Metadata mgmt and catalog\", which of these is a realistic reportable finding?",
          "options": [
            "The catalogue covers a third of datasets, most lack an owner or classification, and the few classification tags drive no controls — so sensitive columns aren't masked because nothing knows they're sensitive.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The catalogue covers a third of datasets, most lack an owner or classification, and the few classification tags drive no controls — so sensitive columns aren't masked because nothing knows they're sensitive. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-05-q9",
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
          "id": "dlw-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Metadata mgmt and catalog\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind metadata mgmt and catalog, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-06",
    "order": 6,
    "title": "Data lineage and traceability",
    "subtitle": "Agentic technical & privacy audit of the data lineage and traceability control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data lineage and traceability\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data lineage is captured so changes + breaches are traceable. PASS: end-to-end (and column-level for regulated fields) lineage exists for critical datasets/reports; lineage is automated + current; and it's used for impact analysis (trace a source change or a quality/security issue to every affected downstream report). Exceptions: no lineage for regulated/critical datasets, manual/stale lineage, no column-level lineage where needed, and an inability to scope the blast radius of a change or breach.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Lineage (catalogue-native / OpenLineage / dbt docs / Spline); The transformation layer (lineage source); The catalogue) as tools — e.g. `end-to-end lineage for a critical report: source → ETL → consumers (tr`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "End-to-end lineage for critical datasets/reports (source → transformations → consumers)",
        "Column-level lineage for regulated/financial fields",
        "Lineage coverage vs the critical estate",
        "Evidence lineage is used for impact analysis (a change/breach traced to affected downstream assets)"
      ],
      "system": [
        "Lineage (catalogue-native / OpenLineage / dbt docs / Spline)",
        "The transformation layer (lineage source)",
        "The catalogue"
      ],
      "dataOwner": [
        "Data governance",
        "Data engineering",
        "Analytics"
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
      "tagline": "Auditing \"Data lineage and traceability\" as a repeatable agentic workflow: pull the real evidence (End-to-end lineage for critical datasets/reports (source → transformations → consumers)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Data lineage and traceability\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me end-to-end lineage for critical datasets/reports (source → transformations → consumers), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Lineage (catalogue-native / OpenLineage / dbt docs / Spline), The transformation layer (lineage source), The catalogue — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `end-to-end lineage for a critical report: source → ETL → consumers (traceable?)` — read-only, against the systems of record.",
        "The test itself is specific. Verify data lineage is captured so changes + breaches are traceable. PASS: end-to-end (and column-level for regulated fields) lineage exists for critical datasets/reports; lineage is automated + current; and it's used for impact analysis (trace a source change or a quality/security issue to every affected downstream report). Exceptions: no lineage for regulated/critical datasets, manual/stale lineage, no column-level lineage where needed, and an inability to scope the blast radius of a change or breach. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_data_lineage_and_traceability_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Lineage (catalogue-native / OpenLineage / dbt docs / Spline) and The transformation layer (lineage source) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Lineage (catalogue-native / OpenLineage / dbt docs / Spline) · The transformation layer (lineage source)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "end-to-end lineage for a critical report: source → ETL → consumers (traceable?)\ncolumn-level lineage for regulated/financial fields\nlineage coverage vs the critical estate\nimpact analysis: trace a source change/breach to affected downstream assets"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: End-to-end lineage for critical datasets/reports (source → transformations → consumers).",
        "The test: Verify data lineage is captured so changes + breaches are traceable.",
        "Reconcile the systems of record (Lineage (catalogue-native / OpenLineage / dbt docs / Spline), The transformation layer (lineage source), The catalogue) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no automated lineage; when a source field changed, no one could identify the dozen downstream reports affected, and a regulated figure couldn't be traced back to its source on demand."
      ],
      "references": [
        {
          "title": "OpenLineage",
          "url": "https://openlineage.io/"
        },
        {
          "title": "DAMA-DMBOK",
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Data lineage and traceability\" (end-to-end lineage for critical datasets/reports (source → transformations → consumers)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data lineage and traceability\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify data lineage is captured so changes + breaches are traceable. PASS: end-to-end (and column-level for regulated fields) lineage exists for critical datasets/reports; lineage is automated + current; and it's used for impact analysis (trace a source change or a quality/security issue to every affected downstream report). Exceptions: no lineage for regulated/critical datasets, manual/stale lineage, no column-level lineage where needed, and an inability to scope the blast radius of a change or breach. The evidence — End-to-end lineage for critical datasets/reports (source → transformations → consumers) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Lineage (catalogue-native / OpenLineage / dbt docs / Spline) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Lineage (catalogue-native / OpenLineage / dbt docs / Spline) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Lineage (catalogue-native / OpenLineage / dbt docs / Spline); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Data lineage and traceability\" Audit Evidence\n\nThe test:\nVerify data lineage is captured so changes + breaches are traceable. PASS: end-to-end (and column-level for regulated fields) lineage exists for critical datasets/reports; lineage is automated + current; and it's used for impact analysis (trace a source change or a quality/security issue to every affected downstream report). Exceptions: no lineage for regulated/critical datasets, manual/stale lineage, no column-level lineage where needed, and an inability to scope the blast radius of a change or breach.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — End-to-end lineage for critical datasets/reports (source → transformations → consumers))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the data lineage and traceability control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data lineage and traceability control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data lineage and traceability against comparable organisations in the sector",
            "Obtain evidence that the data lineage and traceability control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data lineage and traceability\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data lineage and traceability\" control?",
          "options": [
            "A point-in-time screenshot of one system's data lineage and traceability settings, captured during the walkthrough",
            "The End-to-end lineage for critical datasets/reports (source → transformations → consumers), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data lineage and traceability control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data lineage and traceability capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data lineage and traceability\"?",
          "options": [
            "From Lineage (catalogue-native / OpenLineage / dbt docs / Spline) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data lineage and traceability works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Lineage (catalogue-native / OpenLineage / dbt docs / Spline)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data lineage and traceability\"?",
          "options": [
            "The external audit firm, since it is the party examining the data lineage and traceability control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data lineage and traceability data is shared, so the accountability sits with no one in particular",
            "Data governance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data governance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data lineage and traceability\", which part stays with the human auditor?",
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
          "id": "dlw-06-q7",
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
          "id": "dlw-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data lineage and traceability\", which of these is a realistic reportable finding?",
          "options": [
            "There's no automated lineage; when a source field changed, no one could identify the dozen downstream reports affected, and a regulated figure couldn't be traced back to its source on demand.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no automated lineage; when a source field changed, no one could identify the dozen downstream reports affected, and a regulated figure couldn't be traced back to its source on demand. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-06-q9",
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
          "id": "dlw-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data lineage and traceability\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data lineage and traceability, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-07",
    "order": 7,
    "title": "IAM (data lake)",
    "subtitle": "Agentic technical & privacy audit of the iam (data lake) control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IAM (data lake)\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify access to the data platform is least-privilege + governed. PASS: access is role-based + least-privilege (no blanket access to all data); privileged roles (ACCOUNTADMIN / workspace-admin) are minimal + monitored; fine-grained (row/column-level) security protects sensitive data; access is via SSO + MFA; and access is recertified. Exceptions: broad/all-data access, excessive privileged-role holders, no row/column-level security on sensitive data, local logins bypassing SSO/MFA, and no access reviews.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (The platform's RBAC (Snowflake roles / Unity Catalog / BigQuery IAM); Row/column-level security + dynamic masking; IdP (SSO/MFA) + access-review tooling) as tools — e.g. `Snowflake: SHOW GRANTS + role hierarchy; who holds ACCOUNTADMIN / SYSA`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The access model for the platform (roles, role-based grants, who has access to which datasets/schemas)",
        "Privileged-role inventory (ACCOUNTADMIN/SYSADMIN in Snowflake; workspace admins in Databricks) + least-privilege",
        "Fine-grained access (row/column-level security, dynamic masking) on sensitive data",
        "Access reviews + the federation/SSO + MFA posture for the platform"
      ],
      "system": [
        "The platform's RBAC (Snowflake roles / Unity Catalog / BigQuery IAM)",
        "Row/column-level security + dynamic masking",
        "IdP (SSO/MFA) + access-review tooling"
      ],
      "dataOwner": [
        "Data platform security + IAM",
        "Data owners (grant approval)",
        "Data governance"
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
      "tagline": "Auditing \"IAM (data lake)\" as a repeatable agentic workflow: pull the real evidence (The access model for the platform (roles, role-based grants, who has access to which datasets/schemas)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"IAM (data lake)\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the access model for the platform (roles, role-based grants, who has access to which datasets/schemas), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The platform's RBAC (Snowflake roles / Unity Catalog / BigQuery IAM), Row/column-level security + dynamic masking, IdP (SSO/MFA) + access-review tooling — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Snowflake: SHOW GRANTS + role hierarchy; who holds ACCOUNTADMIN / SYSADMIN` — read-only, against the systems of record.",
        "The test itself is specific. Verify access to the data platform is least-privilege + governed. PASS: access is role-based + least-privilege (no blanket access to all data); privileged roles (ACCOUNTADMIN / workspace-admin) are minimal + monitored; fine-grained (row/column-level) security protects sensitive data; access is via SSO + MFA; and access is recertified. Exceptions: broad/all-data access, excessive privileged-role holders, no row/column-level security on sensitive data, local logins bypassing SSO/MFA, and no access reviews. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_iam_data_lake_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The platform's RBAC (Snowflake roles / Unity Catalog / BigQuery IAM) and Row/column-level security + dynamic masking (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull The platform's RBAC (Snowflake roles / Unity Catalog / BigQuery IAM) · Row/column-level security + dynamic masking",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Snowflake: SHOW GRANTS + role hierarchy; who holds ACCOUNTADMIN / SYSADMIN\nfine-grained: row-access policies + column masking on sensitive datasets\nconfirm SSO + MFA (no local users with passwords); key-pair / PAT inventory\naccess-review / recertification records for dataset grants"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The access model for the platform (roles, role-based grants, who has access to which datasets/schemas).",
        "The test: Verify access to the data platform is least-privilege + governed.",
        "Reconcile the systems of record (The platform's RBAC (Snowflake roles / Unity Catalog / BigQuery IAM), Row/column-level security + dynamic masking, IdP (SSO/MFA) + access-review tooling) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A dozen users hold ACCOUNTADMIN, analysts have blanket SELECT on all schemas including PII, there's no row/column-level security, and several service accounts use static passwords bypassing SSO."
      ],
      "references": [
        {
          "title": "Snowflake / Databricks Security Best Practices",
          "url": "https://docs.snowflake.com/en/user-guide/security"
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
          "name": "07_iam_data_lake_mcp.py",
          "url": "/audit-code/data-lakes/07_iam_data_lake_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"IAM (data lake)\" (the access model for the platform (roles, role-based grants, who has access to which datasets/schemas)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IAM (data lake)\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify access to the data platform is least-privilege + governed. PASS: access is role-based + least-privilege (no blanket access to all data); privileged roles (ACCOUNTADMIN / workspace-admin) are minimal + monitored; fine-grained (row/column-level) security protects sensitive data; access is via SSO + MFA; and access is recertified. Exceptions: broad/all-data access, excessive privileged-role holders, no row/column-level security on sensitive data, local logins bypassing SSO/MFA, and no access reviews. The evidence — The access model for the platform (roles, role-based grants, who has access to which datasets/schemas) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The platform's RBAC (Snowflake roles / Unity Catalog / BigQuery IAM) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The platform's RBAC (Snowflake roles / Unity Catalog / BigQuery IAM) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The platform's RBAC (Snowflake roles / Unity Catalog / BigQuery IAM); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"IAM (data lake)\" Audit Evidence\n\nThe test:\nVerify access to the data platform is least-privilege + governed. PASS: access is role-based + least-privilege (no blanket access to all data); privileged roles (ACCOUNTADMIN / workspace-admin) are minimal + monitored; fine-grained (row/column-level) security protects sensitive data; access is via SSO + MFA; and access is recertified. Exceptions: broad/all-data access, excessive privileged-role holders, no row/column-level security on sensitive data, local logins bypassing SSO/MFA, and no access reviews.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The access model for the platform (roles, role-based grants, who has access to which datasets/schemas))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the iam (data lake) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the iam (data lake) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for iam (data lake) against comparable organisations in the sector",
            "Obtain evidence that the iam (data lake) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IAM (data lake)\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IAM (data lake)\" control?",
          "options": [
            "A point-in-time screenshot of one system's iam (data lake) settings, captured during the walkthrough",
            "The The access model for the platform (roles, role-based grants, who has access to which datasets/schemas), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the iam (data lake) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's iam (data lake) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"IAM (data lake)\"?",
          "options": [
            "From The platform's RBAC (Snowflake roles / Unity Catalog / BigQuery IAM) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how iam (data lake) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The platform's RBAC (Snowflake roles / Unity Catalog / BigQuery IAM)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IAM (data lake)\"?",
          "options": [
            "The external audit firm, since it is the party examining the iam (data lake) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the iam (data lake) data is shared, so the accountability sits with no one in particular",
            "Data platform security + IAM, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data platform security + IAM owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IAM (data lake)\", which part stays with the human auditor?",
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
          "id": "dlw-07-q7",
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
          "id": "dlw-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IAM (data lake)\", which of these is a realistic reportable finding?",
          "options": [
            "A dozen users hold ACCOUNTADMIN, analysts have blanket SELECT on all schemas including PII, there's no row/column-level security, and several service accounts use static passwords bypassing SSO.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A dozen users hold ACCOUNTADMIN, analysts have blanket SELECT on all schemas including PII, there's no row/column-level security, and several service accounts use static passwords bypassing SSO. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-07-q9",
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
          "id": "dlw-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IAM (data lake)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind iam (data lake), so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-08",
    "order": 8,
    "title": "Sensitive data protection",
    "subtitle": "Agentic technical & privacy audit of the sensitive data protection control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Sensitive data protection\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify sensitive data in the platform is discovered + protected. PASS: sensitive data is discovered + classified across all zones (including raw/landing); dynamic masking/tokenization protects it from those without need; data-at-rest uses CMK encryption; and analytics/non-prod use de-identified copies. Exceptions: undiscovered sensitive data (esp. in raw zones), no masking (analysts see raw PII), provider-default encryption keys, and real sensitive data copied to non-prod/analytics unmasked.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Discovery/classification (BigID / native classification / Purview); Dynamic data masking + tokenization; KMS / CMK) as tools — e.g. `sensitive-data discovery across all zones incl. raw/landing (where PII`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Sensitive-data discovery/classification results across the platform (where PII/PHI/PCI/financial lives, incl. raw/landing zones)",
        "Masking/tokenization/encryption applied to sensitive columns (dynamic data masking, tokenization)",
        "Encryption at rest + key management (CMK vs provider) + in-transit",
        "De-identification for analytics/non-prod (masked copies, differential privacy where used)"
      ],
      "system": [
        "Discovery/classification (BigID / native classification / Purview)",
        "Dynamic data masking + tokenization",
        "KMS / CMK",
        "De-identification tooling"
      ],
      "dataOwner": [
        "Data protection / privacy + data platform security",
        "Data owners",
        "Security"
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
      "tagline": "Auditing \"Sensitive data protection\" as a repeatable agentic workflow: pull the real evidence (Sensitive-data discovery/classification results across the platform (where PII/PHI/PCI/financial lives, incl. raw/landing zones)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Sensitive data protection\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me sensitive-data discovery/classification results across the platform (where PII/PHI/PCI/financial lives, incl. raw/landing zones), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Discovery/classification (BigID / native classification / Purview), Dynamic data masking + tokenization, KMS / CMK — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `sensitive-data discovery across all zones incl. raw/landing (where PII actually ` — read-only, against the systems of record.",
        "The test itself is specific. Verify sensitive data in the platform is discovered + protected. PASS: sensitive data is discovered + classified across all zones (including raw/landing); dynamic masking/tokenization protects it from those without need; data-at-rest uses CMK encryption; and analytics/non-prod use de-identified copies. Exceptions: undiscovered sensitive data (esp. in raw zones), no masking (analysts see raw PII), provider-default encryption keys, and real sensitive data copied to non-prod/analytics unmasked. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_sensitive_data_protection_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Discovery/classification (BigID / native classification / Purview) and Dynamic data masking + tokenization (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Discovery/classification (BigID / native classification / Purview) · Dynamic data masking + tokenization",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "sensitive-data discovery across all zones incl. raw/landing (where PII actually is)\ndynamic data masking / tokenization on sensitive columns (do non-privileged users see masked?)\nencryption at rest with CMK + in-transit; key access\nnon-prod/analytics: masked / de-identified copies vs raw production data"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Sensitive-data discovery/classification results across the platform (where PII/PHI/PCI/financial lives, incl. raw/landing zones).",
        "The test: Verify sensitive data in the platform is discovered + protected.",
        "Reconcile the systems of record (Discovery/classification (BigID / native classification / Purview), Dynamic data masking + tokenization, KMS / CMK) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Raw zones hold unclassified PII no one knew about, analysts query unmasked SSNs, encryption uses the provider default key, and a full production copy with real customer data sits in the analytics sandbox."
      ],
      "references": [
        {
          "title": "NIST SP 800-122 (PII)",
          "url": "https://csrc.nist.gov/pubs/sp/800/122/final"
        },
        {
          "title": "GDPR",
          "url": "https://gdpr-info.eu/"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Sensitive data protection\" (sensitive-data discovery/classification results across the platform (where pii/phi/pci/financial lives, incl. raw/landing zones)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Sensitive data protection\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify sensitive data in the platform is discovered + protected. PASS: sensitive data is discovered + classified across all zones (including raw/landing); dynamic masking/tokenization protects it from those without need; data-at-rest uses CMK encryption; and analytics/non-prod use de-identified copies. Exceptions: undiscovered sensitive data (esp. in raw zones), no masking (analysts see raw PII), provider-default encryption keys, and real sensitive data copied to non-prod/analytics unmasked. The evidence — Sensitive-data discovery/classification results across the platform (where PII/PHI/PCI/financial lives, incl. raw/landing zones) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Discovery/classification (BigID / native classification / Purview) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Discovery/classification (BigID / native classification / Purview) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Discovery/classification (BigID / native classification / Purview); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Sensitive data protection\" Audit Evidence\n\nThe test:\nVerify sensitive data in the platform is discovered + protected. PASS: sensitive data is discovered + classified across all zones (including raw/landing); dynamic masking/tokenization protects it from those without need; data-at-rest uses CMK encryption; and analytics/non-prod use de-identified copies. Exceptions: undiscovered sensitive data (esp. in raw zones), no masking (analysts see raw PII), provider-default encryption keys, and real sensitive data copied to non-prod/analytics unmasked.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — Sensitive-data discovery/classification results across the platform (where PII/PHI/PCI/financial lives, incl. raw/landing zones))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the sensitive data protection control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the sensitive data protection control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for sensitive data protection against comparable organisations in the sector",
            "Obtain evidence that the sensitive data protection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Sensitive data protection\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Sensitive data protection\" control?",
          "options": [
            "A point-in-time screenshot of one system's sensitive data protection settings, captured during the walkthrough",
            "The Sensitive-data discovery/classification results across the platform (where PII/PHI/PCI/financial lives, incl. raw/landing zones), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the sensitive data protection control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's sensitive data protection capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Sensitive data protection\"?",
          "options": [
            "From Discovery/classification (BigID / native classification / Purview) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how sensitive data protection works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Discovery/classification (BigID / native classification / Purview)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Sensitive data protection\"?",
          "options": [
            "The external audit firm, since it is the party examining the sensitive data protection control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the sensitive data protection data is shared, so the accountability sits with no one in particular",
            "Data protection / privacy + data platform security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data protection / privacy + data platform security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Sensitive data protection\", which part stays with the human auditor?",
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
          "id": "dlw-08-q7",
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
          "id": "dlw-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Sensitive data protection\", which of these is a realistic reportable finding?",
          "options": [
            "Raw zones hold unclassified PII no one knew about, analysts query unmasked SSNs, encryption uses the provider default key, and a full production copy with real customer data sits in the analytics sandbox.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Raw zones hold unclassified PII no one knew about, analysts query unmasked SSNs, encryption uses the provider default key, and a full production copy with real customer data sits in the analytics sandbox. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-08-q9",
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
          "id": "dlw-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Sensitive data protection\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind sensitive data protection, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-09",
    "order": 9,
    "title": "Logging, monitoring, alerting",
    "subtitle": "Agentic technical & privacy audit of the logging, monitoring, alerting control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Logging, monitoring, alerting\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data-platform activity is logged + monitored. PASS: query history, access, admin actions, and data exports are logged and forwarded to the SIEM with retention; detections fire on data-exfil patterns (bulk export, mass sensitive reads, privilege changes, off-hours); and coverage spans all accounts/workspaces. Exceptions: audit logging off or not forwarded, no detections on bulk-export/mass-read, short retention, and workspaces missing from monitoring.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Platform audit logs (Snowflake ACCESS_HISTORY / QUERY_HISTORY; Databricks audit logs; BigQuery audit); SIEM (Sentinel / Splunk); Detection content) as tools — e.g. `confirm audit logs (query/access/admin/export) forward to the SIEM + r`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The platform audit-log config (query history, access, admin actions, data exports) + forwarding to the SIEM",
        "Detection use-cases on data activity (bulk export, mass reads of sensitive tables, privilege changes, off-hours access)",
        "Log retention + tamper protection",
        "Coverage: are all workspaces/accounts feeding the SIEM"
      ],
      "system": [
        "Platform audit logs (Snowflake ACCESS_HISTORY / QUERY_HISTORY; Databricks audit logs; BigQuery audit)",
        "SIEM (Sentinel / Splunk)",
        "Detection content"
      ],
      "dataOwner": [
        "Security operations / data security",
        "Data platform",
        "SOC"
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
      "tagline": "Auditing \"Logging, monitoring, alerting\" as a repeatable agentic workflow: pull the real evidence (The platform audit-log config (query history, access, admin actions, data exports) + forwarding to the SIEM) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Logging, monitoring, alerting\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the platform audit-log config (query history, access, admin actions, data exports) + forwarding to the SIEM, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Platform audit logs (Snowflake ACCESS_HISTORY / QUERY_HISTORY; Databricks audit logs; BigQuery audit), SIEM (Sentinel / Splunk), Detection content — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm audit logs (query/access/admin/export) forward to the SIEM + retention` — read-only, against the systems of record.",
        "The test itself is specific. Verify data-platform activity is logged + monitored. PASS: query history, access, admin actions, and data exports are logged and forwarded to the SIEM with retention; detections fire on data-exfil patterns (bulk export, mass sensitive reads, privilege changes, off-hours); and coverage spans all accounts/workspaces. Exceptions: audit logging off or not forwarded, no detections on bulk-export/mass-read, short retention, and workspaces missing from monitoring. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_logging_monitoring_alerting_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Platform audit logs (Snowflake ACCESS_HISTORY / QUERY_HISTORY; Databricks audit logs; BigQuery audit) and SIEM (Sentinel / Splunk) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Platform audit logs (Snowflake ACCESS_HISTORY / QUERY_HISTORY; Databricks audit logs; BigQuery audit) · SIEM (Sentinel / Splunk)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm audit logs (query/access/admin/export) forward to the SIEM + retention\ndetections: bulk data export, mass reads of sensitive tables, role grants, off-hours access\nSnowflake ACCESS_HISTORY for who-queried-what on sensitive objects\ncoverage: all accounts/workspaces feeding the SIEM?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The platform audit-log config (query history, access, admin actions, data exports) + forwarding to the SIEM.",
        "The test: Verify data-platform activity is logged + monitored.",
        "Reconcile the systems of record (Platform audit logs (Snowflake ACCESS_HISTORY / QUERY_HISTORY; Databricks audit logs; BigQuery audit), SIEM (Sentinel / Splunk), Detection content) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Warehouse query and export logs aren't forwarded to the SIEM, there are no detections for bulk exports, and a departing employee's mass download of the customer table left no alert."
      ],
      "references": [
        {
          "title": "NIST SP 800-92",
          "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
        },
        {
          "title": "MITRE ATT&CK — Exfiltration",
          "url": "https://attack.mitre.org/tactics/TA0010/"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Logging, monitoring, alerting\" (the platform audit-log config (query history, access, admin actions, data exports) + forwarding to the siem), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Logging, monitoring, alerting\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify data-platform activity is logged + monitored. PASS: query history, access, admin actions, and data exports are logged and forwarded to the SIEM with retention; detections fire on data-exfil patterns (bulk export, mass sensitive reads, privilege changes, off-hours); and coverage spans all accounts/workspaces. Exceptions: audit logging off or not forwarded, no detections on bulk-export/mass-read, short retention, and workspaces missing from monitoring. The evidence — The platform audit-log config (query history, access, admin actions, data exports) + forwarding to the SIEM — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Platform audit logs (Snowflake ACCESS_HISTORY / QUERY_HISTORY; Databricks audit logs; BigQuery audit) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Platform audit logs (Snowflake ACCESS_HISTORY / QUERY_HISTORY; Databricks audit logs; BigQuery audit) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Platform audit logs (Snowflake ACCESS_HISTORY / QUERY_HISTORY; Databricks audit logs; BigQuery audit); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Logging, monitoring, alerting\" Audit Evidence\n\nThe test:\nVerify data-platform activity is logged + monitored. PASS: query history, access, admin actions, and data exports are logged and forwarded to the SIEM with retention; detections fire on data-exfil patterns (bulk export, mass sensitive reads, privilege changes, off-hours); and coverage spans all accounts/workspaces. Exceptions: audit logging off or not forwarded, no detections on bulk-export/mass-read, short retention, and workspaces missing from monitoring.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The platform audit-log config (query history, access, admin actions, data exports) + forwarding to the SIEM)\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the logging, monitoring, alerting control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the logging, monitoring, alerting control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for logging, monitoring, alerting against comparable organisations in the sector",
            "Obtain evidence that the logging, monitoring, alerting control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Logging, monitoring, alerting\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Logging, monitoring, alerting\" control?",
          "options": [
            "A point-in-time screenshot of one system's logging, monitoring, alerting settings, captured during the walkthrough",
            "The The platform audit-log config (query history, access, admin actions, data exports) + forwarding to the SIEM, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the logging, monitoring, alerting control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's logging, monitoring, alerting capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Logging, monitoring, alerting\"?",
          "options": [
            "From Platform audit logs (Snowflake ACCESS_HISTORY / QUERY_HISTORY; Databricks audit logs; BigQuery audit) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how logging, monitoring, alerting works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Platform audit logs (Snowflake ACCESS_HISTORY / QUERY_HISTORY; Databricks audit logs; BigQuery audit)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Logging, monitoring, alerting\"?",
          "options": [
            "The external audit firm, since it is the party examining the logging, monitoring, alerting control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the logging, monitoring, alerting data is shared, so the accountability sits with no one in particular",
            "Security operations / data security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / data security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Logging, monitoring, alerting\", which part stays with the human auditor?",
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
          "id": "dlw-09-q7",
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
          "id": "dlw-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Logging, monitoring, alerting\", which of these is a realistic reportable finding?",
          "options": [
            "Warehouse query and export logs aren't forwarded to the SIEM, there are no detections for bulk exports, and a departing employee's mass download of the customer table left no alert.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Warehouse query and export logs aren't forwarded to the SIEM, there are no detections for bulk exports, and a departing employee's mass download of the customer table left no alert. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-09-q9",
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
          "id": "dlw-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Logging, monitoring, alerting\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind logging, monitoring, alerting, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-10",
    "order": 10,
    "title": "Backup, recovery, resilience",
    "subtitle": "Agentic technical & privacy audit of the backup, recovery, resilience control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Backup, recovery, resilience\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the data platform's data is recoverable + resilient. PASS: backups/snapshots + point-in-time recovery (Snowflake Time Travel + Fail-safe, or warehouse snapshots) meet defined RTO/RPO; cross-region replication exists for critical data; restores are tested; and malicious/accidental deletion is recoverable (immutability/retention). Exceptions: no backup beyond default short time-travel, no cross-region replication for critical data, restores never tested, and no protection against a malicious mass-delete/drop.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Platform recovery features (Time Travel / Fail-safe, snapshots, replication); Cross-region replication; Backup of critical datasets) as tools — e.g. `recovery config: time-travel / snapshot retention + fail-safe + cross-`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The backup/recovery config for the platform (time-travel, fail-safe, snapshots, cross-region replication)",
        "RTO/RPO definitions + restore-test evidence",
        "Resilience design (multi-AZ/region, the platform's own DR)",
        "Protection against malicious deletion (immutability, separate-credential delete)"
      ],
      "system": [
        "Platform recovery features (Time Travel / Fail-safe, snapshots, replication)",
        "Cross-region replication",
        "Backup of critical datasets"
      ],
      "dataOwner": [
        "Data platform / engineering",
        "Business continuity",
        "Security"
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
      "tagline": "Auditing \"Backup, recovery, resilience\" as a repeatable agentic workflow: pull the real evidence (The backup/recovery config for the platform (time-travel, fail-safe, snapshots, cross-region replication)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Backup, recovery, resilience\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the backup/recovery config for the platform (time-travel, fail-safe, snapshots, cross-region replication), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Platform recovery features (Time Travel / Fail-safe, snapshots, replication), Cross-region replication, Backup of critical datasets — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `recovery config: time-travel / snapshot retention + fail-safe + cross-region rep` — read-only, against the systems of record.",
        "The test itself is specific. Verify the data platform's data is recoverable + resilient. PASS: backups/snapshots + point-in-time recovery (Snowflake Time Travel + Fail-safe, or warehouse snapshots) meet defined RTO/RPO; cross-region replication exists for critical data; restores are tested; and malicious/accidental deletion is recoverable (immutability/retention). Exceptions: no backup beyond default short time-travel, no cross-region replication for critical data, restores never tested, and no protection against a malicious mass-delete/drop. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_backup_recovery_resilience_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Platform recovery features (Time Travel / Fail-safe, snapshots, replication) and Cross-region replication (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Platform recovery features (Time Travel / Fail-safe, snapshots, replication) · Cross-region replication",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "recovery config: time-travel / snapshot retention + fail-safe + cross-region replication\nRTO/RPO defined + restore-test evidence\nprotection against malicious DROP/DELETE (retention / immutability; who can purge)\nresilience: multi-region for critical data"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The backup/recovery config for the platform (time-travel, fail-safe, snapshots, cross-region replication).",
        "The test: Verify the data platform's data is recoverable + resilient.",
        "Reconcile the systems of record (Platform recovery features (Time Travel / Fail-safe, snapshots, replication), Cross-region replication, Backup of critical datasets) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Time-travel retention is the 1-day default with no additional backup, there's no cross-region replication, no restore has been tested, and any admin can permanently drop a schema with no recovery path."
      ],
      "references": [
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "ISO 22301",
          "url": "https://www.iso.org/standard/75106.html"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Backup, recovery, resilience\" (the backup/recovery config for the platform (time-travel, fail-safe, snapshots, cross-region replication)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Backup, recovery, resilience\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify the data platform's data is recoverable + resilient. PASS: backups/snapshots + point-in-time recovery (Snowflake Time Travel + Fail-safe, or warehouse snapshots) meet defined RTO/RPO; cross-region replication exists for critical data; restores are tested; and malicious/accidental deletion is recoverable (immutability/retention). Exceptions: no backup beyond default short time-travel, no cross-region replication for critical data, restores never tested, and no protection against a malicious mass-delete/drop. The evidence — The backup/recovery config for the platform (time-travel, fail-safe, snapshots, cross-region replication) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Platform recovery features (Time Travel / Fail-safe, snapshots, replication) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Platform recovery features (Time Travel / Fail-safe, snapshots, replication) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Platform recovery features (Time Travel / Fail-safe, snapshots, replication); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Backup, recovery, resilience\" Audit Evidence\n\nThe test:\nVerify the data platform's data is recoverable + resilient. PASS: backups/snapshots + point-in-time recovery (Snowflake Time Travel + Fail-safe, or warehouse snapshots) meet defined RTO/RPO; cross-region replication exists for critical data; restores are tested; and malicious/accidental deletion is recoverable (immutability/retention). Exceptions: no backup beyond default short time-travel, no cross-region replication for critical data, restores never tested, and no protection against a malicious mass-delete/drop.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The backup/recovery config for the platform (time-travel, fail-safe, snapshots, cross-region replication))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the backup, recovery, resilience control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the backup, recovery, resilience control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for backup, recovery, resilience against comparable organisations in the sector",
            "Obtain evidence that the backup, recovery, resilience control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Backup, recovery, resilience\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Backup, recovery, resilience\" control?",
          "options": [
            "A point-in-time screenshot of one system's backup, recovery, resilience settings, captured during the walkthrough",
            "The The backup/recovery config for the platform (time-travel, fail-safe, snapshots, cross-region replication), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the backup, recovery, resilience control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's backup, recovery, resilience capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Backup, recovery, resilience\"?",
          "options": [
            "From Platform recovery features (Time Travel / Fail-safe, snapshots, replication) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how backup, recovery, resilience works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Platform recovery features (Time Travel / Fail-safe, snapshots, replication)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Backup, recovery, resilience\"?",
          "options": [
            "The external audit firm, since it is the party examining the backup, recovery, resilience control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the backup, recovery, resilience data is shared, so the accountability sits with no one in particular",
            "Data platform / engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data platform / engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Backup, recovery, resilience\", which part stays with the human auditor?",
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
          "id": "dlw-10-q7",
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
          "id": "dlw-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Backup, recovery, resilience\", which of these is a realistic reportable finding?",
          "options": [
            "Time-travel retention is the 1-day default with no additional backup, there's no cross-region replication, no restore has been tested, and any admin can permanently drop a schema with no recovery path.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Time-travel retention is the 1-day default with no additional backup, there's no cross-region replication, no restore has been tested, and any admin can permanently drop a schema with no recovery path. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-10-q9",
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
          "id": "dlw-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Backup, recovery, resilience\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind backup, recovery, resilience, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-11",
    "order": 11,
    "title": "Environment segregation",
    "subtitle": "Agentic technical & privacy audit of the environment segregation control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Environment segregation\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify environments are segregated. PASS: prod, non-prod, and sandbox are isolated (separate accounts/workspaces, network, credentials); production data only flows to lower environments masked/de-identified; access to prod is separated + restricted; and there's no unmasked prod-data sprawl. Exceptions: shared prod/non-prod environments, raw prod data copied into dev/sandbox, the same broad access across environments, and unmasked prod data in analytics sandboxes.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Separate accounts/workspaces per environment; Data-copy / masking controls between envs; IAM (per-environment access)) as tools — e.g. `confirm prod/non-prod/sandbox are separate accounts/workspaces with is`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The environment model (prod / non-prod / dev / sandbox) + their isolation (separate accounts/workspaces, network, credentials)",
        "Data-flow controls between environments (no raw prod data into non-prod without masking)",
        "Access separation (who can access prod vs non-prod)",
        "Evidence prod data isn't sprawling into dev/sandbox unmasked"
      ],
      "system": [
        "Separate accounts/workspaces per environment",
        "Data-copy / masking controls between envs",
        "IAM (per-environment access)"
      ],
      "dataOwner": [
        "Data platform",
        "Data security",
        "Data governance"
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
      "tagline": "Auditing \"Environment segregation\" as a repeatable agentic workflow: pull the real evidence (The environment model (prod / non-prod / dev / sandbox) + their isolation (separate accounts/workspaces, network, credentials)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Environment segregation\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the environment model (prod / non-prod / dev / sandbox) + their isolation (separate accounts/workspaces, network, credentials), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Separate accounts/workspaces per environment, Data-copy / masking controls between envs, IAM (per-environment access) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm prod/non-prod/sandbox are separate accounts/workspaces with isolated cre` — read-only, against the systems of record.",
        "The test itself is specific. Verify environments are segregated. PASS: prod, non-prod, and sandbox are isolated (separate accounts/workspaces, network, credentials); production data only flows to lower environments masked/de-identified; access to prod is separated + restricted; and there's no unmasked prod-data sprawl. Exceptions: shared prod/non-prod environments, raw prod data copied into dev/sandbox, the same broad access across environments, and unmasked prod data in analytics sandboxes. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_environment_segregation_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Separate accounts/workspaces per environment and Data-copy / masking controls between envs (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Separate accounts/workspaces per environment · Data-copy / masking controls between envs",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm prod/non-prod/sandbox are separate accounts/workspaces with isolated credentials + network\ndata-copy controls: is prod data masked before landing in non-prod?\naccess separation: prod vs non-prod (different roles/people)\nfind unmasked prod data in dev/sandbox"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The environment model (prod / non-prod / dev / sandbox) + their isolation (separate accounts/workspaces, network, credentials).",
        "The test: Verify environments are segregated.",
        "Reconcile the systems of record (Separate accounts/workspaces per environment, Data-copy / masking controls between envs, IAM (per-environment access)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Dev and prod share one Snowflake account, developers refresh sandbox tables with raw production customer data, and the same admin role spans every environment."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 SC / CM",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Cloud Security Alliance",
          "url": "https://cloudsecurityalliance.org/"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Environment segregation\" (the environment model (prod / non-prod / dev / sandbox) + their isolation (separate accounts/workspaces, network, credentials)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Environment segregation\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify environments are segregated. PASS: prod, non-prod, and sandbox are isolated (separate accounts/workspaces, network, credentials); production data only flows to lower environments masked/de-identified; access to prod is separated + restricted; and there's no unmasked prod-data sprawl. Exceptions: shared prod/non-prod environments, raw prod data copied into dev/sandbox, the same broad access across environments, and unmasked prod data in analytics sandboxes. The evidence — The environment model (prod / non-prod / dev / sandbox) + their isolation (separate accounts/workspaces, network, credentials) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Separate accounts/workspaces per environment APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Separate accounts/workspaces per environment gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Separate accounts/workspaces per environment; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Environment segregation\" Audit Evidence\n\nThe test:\nVerify environments are segregated. PASS: prod, non-prod, and sandbox are isolated (separate accounts/workspaces, network, credentials); production data only flows to lower environments masked/de-identified; access to prod is separated + restricted; and there's no unmasked prod-data sprawl. Exceptions: shared prod/non-prod environments, raw prod data copied into dev/sandbox, the same broad access across environments, and unmasked prod data in analytics sandboxes.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The environment model (prod / non-prod / dev / sandbox) + their isolation (separate accounts/workspaces, network, credentials))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the environment segregation control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the environment segregation control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for environment segregation against comparable organisations in the sector",
            "Obtain evidence that the environment segregation control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Environment segregation\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Environment segregation\" control?",
          "options": [
            "A point-in-time screenshot of one system's environment segregation settings, captured during the walkthrough",
            "The The environment model (prod / non-prod / dev / sandbox) + their isolation (separate accounts/workspaces, network, credentials), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the environment segregation control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's environment segregation capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Environment segregation\"?",
          "options": [
            "From Separate accounts/workspaces per environment and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how environment segregation works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Separate accounts/workspaces per environment) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Environment segregation\"?",
          "options": [
            "The external audit firm, since it is the party examining the environment segregation control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the environment segregation data is shared, so the accountability sits with no one in particular",
            "Data platform, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data platform owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Environment segregation\", which part stays with the human auditor?",
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
          "id": "dlw-11-q7",
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
          "id": "dlw-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Environment segregation\", which of these is a realistic reportable finding?",
          "options": [
            "Dev and prod share one Snowflake account, developers refresh sandbox tables with raw production customer data, and the same admin role spans every environment.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Dev and prod share one Snowflake account, developers refresh sandbox tables with raw production customer data, and the same admin role spans every environment. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-11-q9",
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
          "id": "dlw-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Environment segregation\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind environment segregation, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-12",
    "order": 12,
    "title": "SDLC / DataOps / CI/CD",
    "subtitle": "Agentic technical & privacy audit of the sdlc / dataops / ci/cd control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"SDLC / DataOps / CI/CD\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data products follow a controlled SDLC / DataOps. PASS: transformations + pipelines are deployed via CI/CD (version-controlled, reviewed, tested), not hand-deployed; promotion to prod is gated; pipeline secrets are vaulted/OIDC (not hardcoded); and security scanning (IaC/secrets) runs. Exceptions: manual production deployment of data pipelines, no review/testing, hardcoded warehouse credentials in pipeline code, and no promotion gate.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (dbt / Dataform + CI (GitHub Actions / GitLab); Orchestration (Airflow / Dagster); Secret vault / OIDC) as tools — e.g. `confirm data products deploy via CI/CD (not manual) with review + test`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The DataOps CI/CD for data products (pipelines/transformations deployed via CI, not manual)",
        "Code review + automated testing in the data pipeline (dbt tests, data tests, security scans)",
        "Secrets handling in data pipelines (no hardcoded warehouse creds; OIDC / vault)",
        "Promotion controls (dev → prod gated)"
      ],
      "system": [
        "dbt / Dataform + CI (GitHub Actions / GitLab)",
        "Orchestration (Airflow / Dagster)",
        "Secret vault / OIDC"
      ],
      "dataOwner": [
        "Data / analytics engineering",
        "DataOps / platform",
        "AppSec"
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
      "tagline": "Auditing \"SDLC / DataOps / CI/CD\" as a repeatable agentic workflow: pull the real evidence (The DataOps CI/CD for data products (pipelines/transformations deployed via CI, not manual)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"SDLC / DataOps / CI/CD\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the DataOps CI/CD for data products (pipelines/transformations deployed via CI, not manual), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here dbt / Dataform + CI (GitHub Actions / GitLab), Orchestration (Airflow / Dagster), Secret vault / OIDC — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm data products deploy via CI/CD (not manual) with review + tests` — read-only, against the systems of record.",
        "The test itself is specific. Verify data products follow a controlled SDLC / DataOps. PASS: transformations + pipelines are deployed via CI/CD (version-controlled, reviewed, tested), not hand-deployed; promotion to prod is gated; pipeline secrets are vaulted/OIDC (not hardcoded); and security scanning (IaC/secrets) runs. Exceptions: manual production deployment of data pipelines, no review/testing, hardcoded warehouse credentials in pipeline code, and no promotion gate. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_sdlc_dataops_ci_cd_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from dbt / Dataform + CI (GitHub Actions / GitLab) and Orchestration (Airflow / Dagster) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull dbt / Dataform + CI (GitHub Actions / GitLab) · Orchestration (Airflow / Dagster)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm data products deploy via CI/CD (not manual) with review + tests\npromotion gates dev → prod\npipeline secrets: vaulted / OIDC vs hardcoded warehouse credentials\nsecurity scanning (secrets / IaC) in the data pipeline"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The DataOps CI/CD for data products (pipelines/transformations deployed via CI, not manual).",
        "The test: Verify data products follow a controlled SDLC / DataOps.",
        "Reconcile the systems of record (dbt / Dataform + CI (GitHub Actions / GitLab), Orchestration (Airflow / Dagster), Secret vault / OIDC) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Data pipelines are deployed by copy-pasting SQL into the prod warehouse by hand, with warehouse passwords hardcoded in pipeline scripts and no tests or promotion gates."
      ],
      "references": [
        {
          "title": "NIST SSDF (SP 800-218)",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "dbt CI/CD",
          "url": "https://docs.getdbt.com/docs/deploy/continuous-integration"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"SDLC / DataOps / CI/CD\" (the dataops ci/cd for data products (pipelines/transformations deployed via ci, not manual)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"SDLC / DataOps / CI/CD\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify data products follow a controlled SDLC / DataOps. PASS: transformations + pipelines are deployed via CI/CD (version-controlled, reviewed, tested), not hand-deployed; promotion to prod is gated; pipeline secrets are vaulted/OIDC (not hardcoded); and security scanning (IaC/secrets) runs. Exceptions: manual production deployment of data pipelines, no review/testing, hardcoded warehouse credentials in pipeline code, and no promotion gate. The evidence — The DataOps CI/CD for data products (pipelines/transformations deployed via CI, not manual) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live dbt / Dataform + CI (GitHub Actions / GitLab) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. dbt / Dataform + CI (GitHub Actions / GitLab) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from dbt / Dataform + CI (GitHub Actions / GitLab); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"SDLC / DataOps / CI/CD\" Audit Evidence\n\nThe test:\nVerify data products follow a controlled SDLC / DataOps. PASS: transformations + pipelines are deployed via CI/CD (version-controlled, reviewed, tested), not hand-deployed; promotion to prod is gated; pipeline secrets are vaulted/OIDC (not hardcoded); and security scanning (IaC/secrets) runs. Exceptions: manual production deployment of data pipelines, no review/testing, hardcoded warehouse credentials in pipeline code, and no promotion gate.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The DataOps CI/CD for data products (pipelines/transformations deployed via CI, not manual))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the sdlc / dataops / ci/cd control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the sdlc / dataops / ci/cd control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for sdlc / dataops / ci/cd against comparable organisations in the sector",
            "Obtain evidence that the sdlc / dataops / ci/cd control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"SDLC / DataOps / CI/CD\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"SDLC / DataOps / CI/CD\" control?",
          "options": [
            "A point-in-time screenshot of one system's sdlc / dataops / ci/cd settings, captured during the walkthrough",
            "The The DataOps CI/CD for data products (pipelines/transformations deployed via CI, not manual), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the sdlc / dataops / ci/cd control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's sdlc / dataops / ci/cd capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"SDLC / DataOps / CI/CD\"?",
          "options": [
            "From dbt / Dataform + CI (GitHub Actions / GitLab) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how sdlc / dataops / ci/cd works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. dbt / Dataform + CI (GitHub Actions / GitLab)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"SDLC / DataOps / CI/CD\"?",
          "options": [
            "The external audit firm, since it is the party examining the sdlc / dataops / ci/cd control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the sdlc / dataops / ci/cd data is shared, so the accountability sits with no one in particular",
            "Data / analytics engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data / analytics engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"SDLC / DataOps / CI/CD\", which part stays with the human auditor?",
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
          "id": "dlw-12-q7",
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
          "id": "dlw-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"SDLC / DataOps / CI/CD\", which of these is a realistic reportable finding?",
          "options": [
            "Data pipelines are deployed by copy-pasting SQL into the prod warehouse by hand, with warehouse passwords hardcoded in pipeline scripts and no tests or promotion gates.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Data pipelines are deployed by copy-pasting SQL into the prod warehouse by hand, with warehouse passwords hardcoded in pipeline scripts and no tests or promotion gates. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-12-q9",
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
          "id": "dlw-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"SDLC / DataOps / CI/CD\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind sdlc / dataops / ci/cd, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-13",
    "order": 13,
    "title": "Retention, archival, deletion",
    "subtitle": "Agentic technical & privacy audit of the retention, archival, deletion control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Retention, archival, deletion\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data is retained, archived, and deleted per policy. PASS: a retention schedule per dataset is enforced (lifecycle/TTL, purge jobs); cold data is tiered/archived; expired data is deleted; and right-to-erasure deletes propagate across derived datasets + backups. Exceptions: indefinite retention (raw zones never cleaned), retention defined but unenforced, no archival tiering (cost + exposure), and right-to-erasure that doesn't reach derived copies/backups.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Storage lifecycle (S3 / GCS lifecycle) + platform retention; Archival tiering; DSAR / erasure tooling + lineage) as tools — e.g. `retention schedule per dataset/zone + enforcement (lifecycle / TTL / p`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The retention schedule per dataset/zone + its enforcement (lifecycle policies, automated purge)",
        "Archival of cold data (tiering) + the deletion process for expired / right-to-erasure data",
        "Evidence retention is enforced (data past retention deleted; raw-zone cleanup)",
        "Right-to-erasure (DSAR deletion) capability across the lineage (delete propagates to derived datasets + backups)"
      ],
      "system": [
        "Storage lifecycle (S3 / GCS lifecycle) + platform retention",
        "Archival tiering",
        "DSAR / erasure tooling + lineage"
      ],
      "dataOwner": [
        "Data governance / records + privacy",
        "Data engineering",
        "Data owners"
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
      "tagline": "Auditing \"Retention, archival, deletion\" as a repeatable agentic workflow: pull the real evidence (The retention schedule per dataset/zone + its enforcement (lifecycle policies, automated purge)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Retention, archival, deletion\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the retention schedule per dataset/zone + its enforcement (lifecycle policies, automated purge), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Storage lifecycle (S3 / GCS lifecycle) + platform retention, Archival tiering, DSAR / erasure tooling + lineage — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `retention schedule per dataset/zone + enforcement (lifecycle / TTL / purge jobs)` — read-only, against the systems of record.",
        "The test itself is specific. Verify data is retained, archived, and deleted per policy. PASS: a retention schedule per dataset is enforced (lifecycle/TTL, purge jobs); cold data is tiered/archived; expired data is deleted; and right-to-erasure deletes propagate across derived datasets + backups. Exceptions: indefinite retention (raw zones never cleaned), retention defined but unenforced, no archival tiering (cost + exposure), and right-to-erasure that doesn't reach derived copies/backups. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_retention_archival_deletion_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Storage lifecycle (S3 / GCS lifecycle) + platform retention and Archival tiering (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Storage lifecycle (S3 / GCS lifecycle) + platform retention · Archival tiering",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "retention schedule per dataset/zone + enforcement (lifecycle / TTL / purge jobs)\nfind data past its retention period (esp. raw/landing zones never cleaned)\narchival / tiering of cold data\nright-to-erasure: does a deletion propagate to derived datasets + backups?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The retention schedule per dataset/zone + its enforcement (lifecycle policies, automated purge).",
        "The test: Verify data is retained, archived, and deleted per policy.",
        "Reconcile the systems of record (Storage lifecycle (S3 / GCS lifecycle) + platform retention, Archival tiering, DSAR / erasure tooling + lineage) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Raw landing zones retain everything indefinitely (years of unneeded PII), no retention is enforced on curated tables, and a right-to-erasure request deleted the source row but not the dozens of derived copies."
      ],
      "references": [
        {
          "title": "GDPR Art. 5 / 17",
          "url": "https://gdpr-info.eu/art-17-gdpr/"
        },
        {
          "title": "NIST SP 800-88",
          "url": "https://csrc.nist.gov/pubs/sp/800/88/r1/final"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Retention, archival, deletion\" (the retention schedule per dataset/zone + its enforcement (lifecycle policies, automated purge)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Retention, archival, deletion\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify data is retained, archived, and deleted per policy. PASS: a retention schedule per dataset is enforced (lifecycle/TTL, purge jobs); cold data is tiered/archived; expired data is deleted; and right-to-erasure deletes propagate across derived datasets + backups. Exceptions: indefinite retention (raw zones never cleaned), retention defined but unenforced, no archival tiering (cost + exposure), and right-to-erasure that doesn't reach derived copies/backups. The evidence — The retention schedule per dataset/zone + its enforcement (lifecycle policies, automated purge) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Storage lifecycle (S3 / GCS lifecycle) + platform retention APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Storage lifecycle (S3 / GCS lifecycle) + platform retention gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Storage lifecycle (S3 / GCS lifecycle) + platform retention; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Retention, archival, deletion\" Audit Evidence\n\nThe test:\nVerify data is retained, archived, and deleted per policy. PASS: a retention schedule per dataset is enforced (lifecycle/TTL, purge jobs); cold data is tiered/archived; expired data is deleted; and right-to-erasure deletes propagate across derived datasets + backups. Exceptions: indefinite retention (raw zones never cleaned), retention defined but unenforced, no archival tiering (cost + exposure), and right-to-erasure that doesn't reach derived copies/backups.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The retention schedule per dataset/zone + its enforcement (lifecycle policies, automated purge))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the retention, archival, deletion control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the retention, archival, deletion control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for retention, archival, deletion against comparable organisations in the sector",
            "Obtain evidence that the retention, archival, deletion control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Retention, archival, deletion\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Retention, archival, deletion\" control?",
          "options": [
            "A point-in-time screenshot of one system's retention, archival, deletion settings, captured during the walkthrough",
            "The The retention schedule per dataset/zone + its enforcement (lifecycle policies, automated purge), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the retention, archival, deletion control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's retention, archival, deletion capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Retention, archival, deletion\"?",
          "options": [
            "From Storage lifecycle (S3 / GCS lifecycle) + platform retention and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how retention, archival, deletion works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Storage lifecycle (S3 / GCS lifecycle) + platform retention) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Retention, archival, deletion\"?",
          "options": [
            "The external audit firm, since it is the party examining the retention, archival, deletion control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the retention, archival, deletion data is shared, so the accountability sits with no one in particular",
            "Data governance / records + privacy, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data governance / records + privacy owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Retention, archival, deletion\", which part stays with the human auditor?",
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
          "id": "dlw-13-q7",
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
          "id": "dlw-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Retention, archival, deletion\", which of these is a realistic reportable finding?",
          "options": [
            "Raw landing zones retain everything indefinitely (years of unneeded PII), no retention is enforced on curated tables, and a right-to-erasure request deleted the source row but not the dozens of derived copies.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Raw landing zones retain everything indefinitely (years of unneeded PII), no retention is enforced on curated tables, and a right-to-erasure request deleted the source row but not the dozens of derived copies. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-13-q9",
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
          "id": "dlw-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Retention, archival, deletion\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind retention, archival, deletion, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-14",
    "order": 14,
    "title": "Reporting / semantic layer",
    "subtitle": "Agentic technical & privacy audit of the reporting / semantic layer control",
    "category": "cybersecurity",
    "xp": 120,
    "easeScore": 7,
    "valueScore": 6,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Reporting / semantic layer\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the reporting/semantic layer is governed + access-controlled. PASS: BI tools use a governed semantic layer (certified metrics/datasets); row/column-level security is enforced consistently in BI (a user can't see in a dashboard what they can't see in the warehouse); certified reports are distinguished from ad hoc; and reports pull from governed sources. Exceptions: BI bypassing platform security (broader access via a shared service account), inconsistent row/column security in BI, uncontrolled rogue dashboards on raw data, and conflicting metric definitions.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (BI (Power BI / Tableau / Looker) + semantic layer (dbt metrics / LookML / Cube); Row/column-level security in BI; The certified-report catalogue) as tools — e.g. `BI access model: does it use the governed semantic layer + enforce row`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The BI/reporting + semantic-layer config (governed metrics, certified datasets) + access control",
        "Row/column-level security enforced in the BI/semantic layer (consistent with the platform)",
        "The certified-vs-uncertified report inventory (governed metrics vs rogue dashboards)",
        "Evidence reports use governed sources (no direct-to-raw, no spreadsheet sprawl)"
      ],
      "system": [
        "BI (Power BI / Tableau / Looker) + semantic layer (dbt metrics / LookML / Cube)",
        "Row/column-level security in BI",
        "The certified-report catalogue"
      ],
      "dataOwner": [
        "Analytics / BI + data governance",
        "Data platform security",
        "Business report owners"
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
      "tagline": "Auditing \"Reporting / semantic layer\" as a repeatable agentic workflow: pull the real evidence (The BI/reporting + semantic-layer config (governed metrics, certified datasets) + access control) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Reporting / semantic layer\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the BI/reporting + semantic-layer config (governed metrics, certified datasets) + access control, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here BI (Power BI / Tableau / Looker) + semantic layer (dbt metrics / LookML / Cube), Row/column-level security in BI, The certified-report catalogue — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `BI access model: does it use the governed semantic layer + enforce row/column se` — read-only, against the systems of record.",
        "The test itself is specific. Verify the reporting/semantic layer is governed + access-controlled. PASS: BI tools use a governed semantic layer (certified metrics/datasets); row/column-level security is enforced consistently in BI (a user can't see in a dashboard what they can't see in the warehouse); certified reports are distinguished from ad hoc; and reports pull from governed sources. Exceptions: BI bypassing platform security (broader access via a shared service account), inconsistent row/column security in BI, uncontrolled rogue dashboards on raw data, and conflicting metric definitions. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_reporting_semantic_layer_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from BI (Power BI / Tableau / Looker) + semantic layer (dbt metrics / LookML / Cube) and Row/column-level security in BI (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull BI (Power BI / Tableau / Looker) + semantic layer (dbt metrics / LookML / Cube) · Row/column-level security in BI",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "BI access model: does it use the governed semantic layer + enforce row/column security?\ndoes BI connect via per-user identity or a shared over-privileged service account (security bypass)?\ncertified vs uncertified report inventory (rogue dashboards)\nconfirm reports pull from governed sources, not direct-to-raw / spreadsheets"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The BI/reporting + semantic-layer config (governed metrics, certified datasets) + access control.",
        "The test: Verify the reporting/semantic layer is governed + access-controlled.",
        "Reconcile the systems of record (BI (Power BI / Tableau / Looker) + semantic layer (dbt metrics / LookML / Cube), Row/column-level security in BI, The certified-report catalogue) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Power BI connects via one service account with broad warehouse access, so dashboards expose data users couldn't otherwise see (row-level security bypassed), and dozens of uncertified dashboards report conflicting revenue figures."
      ],
      "references": [
        {
          "title": "DAMA-DMBOK — BI Governance",
          "url": "https://www.dama.org/"
        },
        {
          "title": "Cloud BI Security",
          "url": "https://cloud.google.com/looker/docs/admin-security"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Reporting / semantic layer\" (the bi/reporting + semantic-layer config (governed metrics, certified datasets) + access control), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Reporting / semantic layer\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify the reporting/semantic layer is governed + access-controlled. PASS: BI tools use a governed semantic layer (certified metrics/datasets); row/column-level security is enforced consistently in BI (a user can't see in a dashboard what they can't see in the warehouse); certified reports are distinguished from ad hoc; and reports pull from governed sources. Exceptions: BI bypassing platform security (broader access via a shared service account), inconsistent row/column security in BI, uncontrolled rogue dashboards on raw data, and conflicting metric definitions. The evidence — The BI/reporting + semantic-layer config (governed metrics, certified datasets) + access control — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live BI (Power BI / Tableau / Looker) + semantic layer (dbt metrics / LookML / Cube) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. BI (Power BI / Tableau / Looker) + semantic layer (dbt metrics / LookML / Cube) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from BI (Power BI / Tableau / Looker) + semantic layer (dbt metrics / LookML / Cube); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Reporting / semantic layer\" Audit Evidence\n\nThe test:\nVerify the reporting/semantic layer is governed + access-controlled. PASS: BI tools use a governed semantic layer (certified metrics/datasets); row/column-level security is enforced consistently in BI (a user can't see in a dashboard what they can't see in the warehouse); certified reports are distinguished from ad hoc; and reports pull from governed sources. Exceptions: BI bypassing platform security (broader access via a shared service account), inconsistent row/column security in BI, uncontrolled rogue dashboards on raw data, and conflicting metric definitions.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The BI/reporting + semantic-layer config (governed metrics, certified datasets) + access control)\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the reporting / semantic layer control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the reporting / semantic layer control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for reporting / semantic layer against comparable organisations in the sector",
            "Obtain evidence that the reporting / semantic layer control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Reporting / semantic layer\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Reporting / semantic layer\" control?",
          "options": [
            "A point-in-time screenshot of one system's reporting / semantic layer settings, captured during the walkthrough",
            "The The BI/reporting + semantic-layer config (governed metrics, certified datasets) + access control, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the reporting / semantic layer control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's reporting / semantic layer capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Reporting / semantic layer\"?",
          "options": [
            "From BI (Power BI / Tableau / Looker) + semantic layer (dbt metrics / LookML / Cube) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how reporting / semantic layer works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. BI (Power BI / Tableau / Looker) + semantic layer (dbt metrics / LookML / Cube)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Reporting / semantic layer\"?",
          "options": [
            "The external audit firm, since it is the party examining the reporting / semantic layer control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the reporting / semantic layer data is shared, so the accountability sits with no one in particular",
            "Analytics / BI + data governance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Analytics / BI + data governance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Reporting / semantic layer\", which part stays with the human auditor?",
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
          "id": "dlw-14-q7",
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
          "id": "dlw-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Reporting / semantic layer\", which of these is a realistic reportable finding?",
          "options": [
            "Power BI connects via one service account with broad warehouse access, so dashboards expose data users couldn't otherwise see (row-level security bypassed), and dozens of uncertified dashboards report conflicting revenue figures.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Power BI connects via one service account with broad warehouse access, so dashboards expose data users couldn't otherwise see (row-level security bypassed), and dozens of uncertified dashboards report conflicting revenue figures. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-14-q9",
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
          "id": "dlw-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Reporting / semantic layer\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind reporting / semantic layer, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-15",
    "order": 15,
    "title": "End-user computing / extracts",
    "subtitle": "Agentic technical & privacy audit of the end-user computing / extracts control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"End-user computing / extracts\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data extracted from the platform (end-user computing) is controlled. PASS: data extracts/downloads are governed + monitored; bulk export of sensitive data is restricted (export limits, DLP, masking on export); sensitive data isn't sprawling into uncontrolled spreadsheets/local files; and there's a policy + detection for data leaving the platform. Exceptions: unrestricted bulk download of sensitive data, no monitoring of extracts, sensitive data in uncontrolled EUC spreadsheets, and no export DLP.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Platform export controls + DLP; BI export limits; DLP / CASB (where data lands)) as tools — e.g. `who exports/downloads from the platform + to where (export logs)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of data extracts/downloads from the platform (who exports what, to where) + the controls",
        "Controls on bulk export / download of sensitive data (DLP, export limits, masking-on-export)",
        "Spreadsheet / EUC sprawl (sensitive data extracted into uncontrolled files)",
        "Monitoring + the policy on data leaving the governed platform"
      ],
      "system": [
        "Platform export controls + DLP",
        "BI export limits",
        "DLP / CASB (where data lands)"
      ],
      "dataOwner": [
        "Data security + data governance",
        "Data owners",
        "Security operations"
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
      "tagline": "Auditing \"End-user computing / extracts\" as a repeatable agentic workflow: pull the real evidence (The inventory of data extracts/downloads from the platform (who exports what, to where) + the controls) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"End-user computing / extracts\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of data extracts/downloads from the platform (who exports what, to where) + the controls, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Platform export controls + DLP, BI export limits, DLP / CASB (where data lands) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `who exports/downloads from the platform + to where (export logs)` — read-only, against the systems of record.",
        "The test itself is specific. Verify data extracted from the platform (end-user computing) is controlled. PASS: data extracts/downloads are governed + monitored; bulk export of sensitive data is restricted (export limits, DLP, masking on export); sensitive data isn't sprawling into uncontrolled spreadsheets/local files; and there's a policy + detection for data leaving the platform. Exceptions: unrestricted bulk download of sensitive data, no monitoring of extracts, sensitive data in uncontrolled EUC spreadsheets, and no export DLP. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_end_user_computing_extracts_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Platform export controls + DLP and BI export limits (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Platform export controls + DLP · BI export limits",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "who exports/downloads from the platform + to where (export logs)\ncontrols on bulk export of sensitive data (limits, masking-on-export, blocking)\nEUC / spreadsheet sprawl: sensitive data extracted into uncontrolled files\nmonitoring + DLP on data leaving the governed platform"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of data extracts/downloads from the platform (who exports what, to where) + the controls.",
        "The test: Verify data extracted from the platform (end-user computing) is controlled.",
        "Reconcile the systems of record (Platform export controls + DLP, BI export limits, DLP / CASB (where data lands)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Anyone can export unlimited rows including PII to CSV with no logging or DLP, and the finance team maintains dozens of spreadsheets full of extracted customer data on local drives — the governed platform's controls end at the download button."
      ],
      "references": [
        {
          "title": "CIS Control 3",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-53 SC-7",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"End-user computing / extracts\" (the inventory of data extracts/downloads from the platform (who exports what, to where) + the controls), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"End-user computing / extracts\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify data extracted from the platform (end-user computing) is controlled. PASS: data extracts/downloads are governed + monitored; bulk export of sensitive data is restricted (export limits, DLP, masking on export); sensitive data isn't sprawling into uncontrolled spreadsheets/local files; and there's a policy + detection for data leaving the platform. Exceptions: unrestricted bulk download of sensitive data, no monitoring of extracts, sensitive data in uncontrolled EUC spreadsheets, and no export DLP. The evidence — The inventory of data extracts/downloads from the platform (who exports what, to where) + the controls — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Platform export controls + DLP APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Platform export controls + DLP gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Platform export controls + DLP; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"End-user computing / extracts\" Audit Evidence\n\nThe test:\nVerify data extracted from the platform (end-user computing) is controlled. PASS: data extracts/downloads are governed + monitored; bulk export of sensitive data is restricted (export limits, DLP, masking on export); sensitive data isn't sprawling into uncontrolled spreadsheets/local files; and there's a policy + detection for data leaving the platform. Exceptions: unrestricted bulk download of sensitive data, no monitoring of extracts, sensitive data in uncontrolled EUC spreadsheets, and no export DLP.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The inventory of data extracts/downloads from the platform (who exports what, to where) + the controls)\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the end-user computing / extracts control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the end-user computing / extracts control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for end-user computing / extracts against comparable organisations in the sector",
            "Obtain evidence that the end-user computing / extracts control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-15-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"End-user computing / extracts\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-15-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"End-user computing / extracts\" control?",
          "options": [
            "A point-in-time screenshot of one system's end-user computing / extracts settings, captured during the walkthrough",
            "The The inventory of data extracts/downloads from the platform (who exports what, to where) + the controls, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the end-user computing / extracts control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's end-user computing / extracts capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-15-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"End-user computing / extracts\"?",
          "options": [
            "From Platform export controls + DLP and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how end-user computing / extracts works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Platform export controls + DLP) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-15-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"End-user computing / extracts\"?",
          "options": [
            "The external audit firm, since it is the party examining the end-user computing / extracts control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the end-user computing / extracts data is shared, so the accountability sits with no one in particular",
            "Data security + data governance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data security + data governance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-15-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"End-user computing / extracts\", which part stays with the human auditor?",
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
          "id": "dlw-15-q7",
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
          "id": "dlw-15-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"End-user computing / extracts\", which of these is a realistic reportable finding?",
          "options": [
            "Anyone can export unlimited rows including PII to CSV with no logging or DLP, and the finance team maintains dozens of spreadsheets full of extracted customer data on local drives — the governed platform's controls end at the download button.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Anyone can export unlimited rows including PII to CSV with no logging or DLP, and the finance team maintains dozens of spreadsheets full of extracted customer data on local drives — the governed platform's controls end at the download button. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-15-q9",
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
          "id": "dlw-15-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"End-user computing / extracts\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind end-user computing / extracts, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-16",
    "order": 16,
    "title": "Third-party / CSP mgmt",
    "subtitle": "Agentic technical & privacy audit of the third-party / csp mgmt control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party / CSP mgmt\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the managed-platform provider + connected third parties are governed. PASS: the shared-responsibility split is understood (the org owns access/data/config; the CSP owns the platform); current CSP attestations + data-residency terms are on file; data-sharing features (Snowflake shares/marketplace, reader accounts) are controlled + reviewed; and third-party tools connected to the platform are vetted + least-privilege. Exceptions: unclear shared responsibility, stale/missing CSP attestation, uncontrolled outbound data shares/marketplace listings, and unvetted third-party tools with broad platform access.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (The data-platform provider (Snowflake / Databricks / BigQuery); Data-share / marketplace config; TPRM (connected tools + the CSP)) as tools — e.g. `confirm the shared-responsibility split + the CSP's current SOC 2 / IS`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The shared-responsibility understanding for the managed platform (Snowflake/Databricks/BigQuery — CSP's vs the org's)",
        "The CSP's assurance (SOC 2 / ISO / FedRAMP) + data-residency / processing terms",
        "Data-sharing / marketplace controls (outbound shares, marketplace listings, reader accounts)",
        "Third-party tools connected to the platform (their access + vetting)"
      ],
      "system": [
        "The data-platform provider (Snowflake / Databricks / BigQuery)",
        "Data-share / marketplace config",
        "TPRM (connected tools + the CSP)"
      ],
      "dataOwner": [
        "Data platform + vendor risk",
        "Cloud security",
        "Data governance"
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
      "tagline": "Auditing \"Third-party / CSP mgmt\" as a repeatable agentic workflow: pull the real evidence (The shared-responsibility understanding for the managed platform (Snowflake/Databricks/BigQuery — CSP's vs the org's)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Third-party / CSP mgmt\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the shared-responsibility understanding for the managed platform (Snowflake/Databricks/BigQuery — CSP's vs the org's), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The data-platform provider (Snowflake / Databricks / BigQuery), Data-share / marketplace config, TPRM (connected tools + the CSP) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm the shared-responsibility split + the CSP's current SOC 2 / ISO / FedRAM` — read-only, against the systems of record.",
        "The test itself is specific. Verify the managed-platform provider + connected third parties are governed. PASS: the shared-responsibility split is understood (the org owns access/data/config; the CSP owns the platform); current CSP attestations + data-residency terms are on file; data-sharing features (Snowflake shares/marketplace, reader accounts) are controlled + reviewed; and third-party tools connected to the platform are vetted + least-privilege. Exceptions: unclear shared responsibility, stale/missing CSP attestation, uncontrolled outbound data shares/marketplace listings, and unvetted third-party tools with broad platform access. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `16_third_party_csp_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The data-platform provider (Snowflake / Databricks / BigQuery) and Data-share / marketplace config (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull The data-platform provider (Snowflake / Databricks / BigQuery) · Data-share / marketplace config",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm the shared-responsibility split + the CSP's current SOC 2 / ISO / FedRAMP + residency terms\ndata-sharing: outbound shares, marketplace listings, reader accounts — controlled + reviewed?\nthird-party tools connected to the platform + their access scope + vetting\ndata residency: is data confined to required regions?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The shared-responsibility understanding for the managed platform (Snowflake/Databricks/BigQuery — CSP's vs the org's).",
        "The test: Verify the managed-platform provider + connected third parties are governed.",
        "Reconcile the systems of record (The data-platform provider (Snowflake / Databricks / BigQuery), Data-share / marketplace config, TPRM (connected tools + the CSP)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. An outbound Snowflake data share exposes a sensitive table to a partner account no one reviewed, several third-party BI/ETL tools hold broad warehouse access with no vetting, and the CSP attestation on file is stale."
      ],
      "references": [
        {
          "title": "CSA STAR / CCM",
          "url": "https://cloudsecurityalliance.org/star"
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
          "name": "16_third_party_csp_mgmt_mcp.py",
          "url": "/audit-code/data-lakes/16_third_party_csp_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Third-party / CSP mgmt\" (the shared-responsibility understanding for the managed platform (snowflake/databricks/bigquery — csp's vs the org's)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party / CSP mgmt\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify the managed-platform provider + connected third parties are governed. PASS: the shared-responsibility split is understood (the org owns access/data/config; the CSP owns the platform); current CSP attestations + data-residency terms are on file; data-sharing features (Snowflake shares/marketplace, reader accounts) are controlled + reviewed; and third-party tools connected to the platform are vetted + least-privilege. Exceptions: unclear shared responsibility, stale/missing CSP attestation, uncontrolled outbound data shares/marketplace listings, and unvetted third-party tools with broad platform access. The evidence — The shared-responsibility understanding for the managed platform (Snowflake/Databricks/BigQuery — CSP's vs the org's) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The data-platform provider (Snowflake / Databricks / BigQuery) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The data-platform provider (Snowflake / Databricks / BigQuery) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The data-platform provider (Snowflake / Databricks / BigQuery); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Third-party / CSP mgmt\" Audit Evidence\n\nThe test:\nVerify the managed-platform provider + connected third parties are governed. PASS: the shared-responsibility split is understood (the org owns access/data/config; the CSP owns the platform); current CSP attestations + data-residency terms are on file; data-sharing features (Snowflake shares/marketplace, reader accounts) are controlled + reviewed; and third-party tools connected to the platform are vetted + least-privilege. Exceptions: unclear shared responsibility, stale/missing CSP attestation, uncontrolled outbound data shares/marketplace listings, and unvetted third-party tools with broad platform access.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The shared-responsibility understanding for the managed platform (Snowflake/Databricks/BigQuery — CSP's vs the org's))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the third-party / csp mgmt control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the third-party / csp mgmt control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for third-party / csp mgmt against comparable organisations in the sector",
            "Obtain evidence that the third-party / csp mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-16-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party / CSP mgmt\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-16-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party / CSP mgmt\" control?",
          "options": [
            "A point-in-time screenshot of one system's third-party / csp mgmt settings, captured during the walkthrough",
            "The The shared-responsibility understanding for the managed platform (Snowflake/Databricks/BigQuery — CSP's vs the org's), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the third-party / csp mgmt control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's third-party / csp mgmt capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-16-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Third-party / CSP mgmt\"?",
          "options": [
            "From The data-platform provider (Snowflake / Databricks / BigQuery) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how third-party / csp mgmt works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The data-platform provider (Snowflake / Databricks / BigQuery)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-16-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party / CSP mgmt\"?",
          "options": [
            "The external audit firm, since it is the party examining the third-party / csp mgmt control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the third-party / csp mgmt data is shared, so the accountability sits with no one in particular",
            "Data platform + vendor risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data platform + vendor risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-16-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party / CSP mgmt\", which part stays with the human auditor?",
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
          "id": "dlw-16-q7",
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
          "id": "dlw-16-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party / CSP mgmt\", which of these is a realistic reportable finding?",
          "options": [
            "An outbound Snowflake data share exposes a sensitive table to a partner account no one reviewed, several third-party BI/ETL tools hold broad warehouse access with no vetting, and the CSP attestation on file is stale.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. An outbound Snowflake data share exposes a sensitive table to a partner account no one reviewed, several third-party BI/ETL tools hold broad warehouse access with no vetting, and the CSP attestation on file is stale. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-16-q9",
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
          "id": "dlw-16-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party / CSP mgmt\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind third-party / csp mgmt, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-17",
    "order": 17,
    "title": "Incident response / problem mgmt",
    "subtitle": "Agentic technical & privacy audit of the incident response / problem mgmt control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident response / problem mgmt\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data-platform incidents are handled. PASS: playbooks exist for data-platform incidents (exfiltration, corruption, ransomware, mass-delete); platform alerts feed the IR process; incidents get RCA + containment; and recovery (restore + integrity validation) is defined. Exceptions: no data-specific incident playbooks, platform alerts not wired into IR, no RCA for data incidents, and no tested recovery for a data-corruption/deletion event.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (IR playbooks (data-specific) + SOAR; Platform alerts → SIEM / IR; Recovery features (time-travel / restore)) as tools — e.g. `data-platform incident playbooks (exfil / corruption / ransomware / ma`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Data-platform-specific incident playbooks (data breach/exfil, data corruption, ransomware on data, accidental mass-delete)",
        "Integration of platform monitoring into the IR process (alerts → IR)",
        "Evidence of response to past data-platform incidents (RCA, containment)",
        "The recovery path for data incidents (restore + integrity validation)"
      ],
      "system": [
        "IR playbooks (data-specific) + SOAR",
        "Platform alerts → SIEM / IR",
        "Recovery features (time-travel / restore)"
      ],
      "dataOwner": [
        "Security operations / CSIRT + data platform",
        "Data owners",
        "DFIR"
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
      "tagline": "Auditing \"Incident response / problem mgmt\" as a repeatable agentic workflow: pull the real evidence (Data-platform-specific incident playbooks (data breach/exfil, data corruption, ransomware on data, accidental mass-delete)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Incident response / problem mgmt\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me data-platform-specific incident playbooks (data breach/exfil, data corruption, ransomware on data, accidental mass-delete), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IR playbooks (data-specific) + SOAR, Platform alerts → SIEM / IR, Recovery features (time-travel / restore) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `data-platform incident playbooks (exfil / corruption / ransomware / mass-delete)` — read-only, against the systems of record.",
        "The test itself is specific. Verify data-platform incidents are handled. PASS: playbooks exist for data-platform incidents (exfiltration, corruption, ransomware, mass-delete); platform alerts feed the IR process; incidents get RCA + containment; and recovery (restore + integrity validation) is defined. Exceptions: no data-specific incident playbooks, platform alerts not wired into IR, no RCA for data incidents, and no tested recovery for a data-corruption/deletion event. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `17_incident_response_problem_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IR playbooks (data-specific) + SOAR and Platform alerts → SIEM / IR (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull IR playbooks (data-specific) + SOAR · Platform alerts → SIEM / IR",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "data-platform incident playbooks (exfil / corruption / ransomware / mass-delete)\nare platform alerts wired into the IR / case process?\npast data incidents: RCA + containment evidence\nrecovery: restore + integrity-validation path for a data-corruption/deletion event"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Data-platform-specific incident playbooks (data breach/exfil, data corruption, ransomware on data, accidental mass-delete).",
        "The test: Verify data-platform incidents are handled.",
        "Reconcile the systems of record (IR playbooks (data-specific) + SOAR, Platform alerts → SIEM / IR, Recovery features (time-travel / restore)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no data-platform incident playbook, platform alerts (where they exist) don't reach the IR team, and a recent accidental table-drop had no defined recovery — it was reconstructed manually over days."
      ],
      "references": [
        {
          "title": "NIST SP 800-61",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "ISO/IEC 27035",
          "url": "https://www.iso.org/standard/78973.html"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Incident response / problem mgmt\" (data-platform-specific incident playbooks (data breach/exfil, data corruption, ransomware on data, accidental mass-delete)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident response / problem mgmt\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify data-platform incidents are handled. PASS: playbooks exist for data-platform incidents (exfiltration, corruption, ransomware, mass-delete); platform alerts feed the IR process; incidents get RCA + containment; and recovery (restore + integrity validation) is defined. Exceptions: no data-specific incident playbooks, platform alerts not wired into IR, no RCA for data incidents, and no tested recovery for a data-corruption/deletion event. The evidence — Data-platform-specific incident playbooks (data breach/exfil, data corruption, ransomware on data, accidental mass-delete) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IR playbooks (data-specific) + SOAR APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IR playbooks (data-specific) + SOAR gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IR playbooks (data-specific) + SOAR; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Incident response / problem mgmt\" Audit Evidence\n\nThe test:\nVerify data-platform incidents are handled. PASS: playbooks exist for data-platform incidents (exfiltration, corruption, ransomware, mass-delete); platform alerts feed the IR process; incidents get RCA + containment; and recovery (restore + integrity validation) is defined. Exceptions: no data-specific incident playbooks, platform alerts not wired into IR, no RCA for data incidents, and no tested recovery for a data-corruption/deletion event.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — Data-platform-specific incident playbooks (data breach/exfil, data corruption, ransomware on data, accidental mass-delete))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the incident response / problem mgmt control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the incident response / problem mgmt control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for incident response / problem mgmt against comparable organisations in the sector",
            "Obtain evidence that the incident response / problem mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-17-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident response / problem mgmt\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-17-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident response / problem mgmt\" control?",
          "options": [
            "A point-in-time screenshot of one system's incident response / problem mgmt settings, captured during the walkthrough",
            "The Data-platform-specific incident playbooks (data breach/exfil, data corruption, ransomware on data, accidental mass-delete), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the incident response / problem mgmt control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's incident response / problem mgmt capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-17-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Incident response / problem mgmt\"?",
          "options": [
            "From IR playbooks (data-specific) + SOAR and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how incident response / problem mgmt works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. IR playbooks (data-specific) + SOAR) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-17-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident response / problem mgmt\"?",
          "options": [
            "The external audit firm, since it is the party examining the incident response / problem mgmt control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the incident response / problem mgmt data is shared, so the accountability sits with no one in particular",
            "Security operations / CSIRT + data platform, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / CSIRT + data platform owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-17-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident response / problem mgmt\", which part stays with the human auditor?",
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
          "id": "dlw-17-q7",
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
          "id": "dlw-17-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Incident response / problem mgmt\", which of these is a realistic reportable finding?",
          "options": [
            "There's no data-platform incident playbook, platform alerts (where they exist) don't reach the IR team, and a recent accidental table-drop had no defined recovery — it was reconstructed manually over days.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no data-platform incident playbook, platform alerts (where they exist) don't reach the IR team, and a recent accidental table-drop had no defined recovery — it was reconstructed manually over days. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-17-q9",
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
          "id": "dlw-17-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident response / problem mgmt\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind incident response / problem mgmt, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-18",
    "order": 18,
    "title": "Capacity, performance, cost",
    "subtitle": "Agentic technical & privacy audit of the capacity, performance, cost control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Capacity, performance, cost\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the platform is governed for capacity, performance, and cost. PASS: utilization + query performance are monitored; cost is governed (FinOps: per-workload spend, budgets, anomaly alerts, resource monitors/quotas); compute auto-suspends + is right-sized; and there are no runaway-cost or capacity-failure incidents. Exceptions: no cost monitoring (surprise bills), no resource monitors/quotas (runaway spend), no performance monitoring (degradation hits users), and oversized always-on compute. (Weighted operational/financial — but uncontrolled cost is a real governance + availability risk.)",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (Platform usage/cost views (Snowflake account-usage; Databricks / BigQuery billing); FinOps tooling; Resource monitors / quotas) as tools — e.g. `capacity/performance monitoring (warehouse utilization, query performa`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Capacity/performance monitoring (compute/warehouse utilization, query performance, concurrency)",
        "Cost monitoring + governance (FinOps: credit/spend per workload, anomaly detection, budgets)",
        "Resource governance (warehouse sizing, auto-suspend, resource monitors / quotas)",
        "Evidence of cost/performance controls (no runaway spend; right-sizing)"
      ],
      "system": [
        "Platform usage/cost views (Snowflake account-usage; Databricks / BigQuery billing)",
        "FinOps tooling",
        "Resource monitors / quotas"
      ],
      "dataOwner": [
        "Data platform / FinOps",
        "Data engineering",
        "Finance"
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
      "tagline": "Auditing \"Capacity, performance, cost\" as a repeatable agentic workflow: pull the real evidence (Capacity/performance monitoring (compute/warehouse utilization, query performance, concurrency)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Capacity, performance, cost\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me capacity/performance monitoring (compute/warehouse utilization, query performance, concurrency), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Platform usage/cost views (Snowflake account-usage; Databricks / BigQuery billing), FinOps tooling, Resource monitors / quotas — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `capacity/performance monitoring (warehouse utilization, query performance, concu` — read-only, against the systems of record.",
        "The test itself is specific. Verify the platform is governed for capacity, performance, and cost. PASS: utilization + query performance are monitored; cost is governed (FinOps: per-workload spend, budgets, anomaly alerts, resource monitors/quotas); compute auto-suspends + is right-sized; and there are no runaway-cost or capacity-failure incidents. Exceptions: no cost monitoring (surprise bills), no resource monitors/quotas (runaway spend), no performance monitoring (degradation hits users), and oversized always-on compute. (Weighted operational/financial — but uncontrolled cost is a real governance + availability risk.) The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `18_capacity_performance_cost_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Platform usage/cost views (Snowflake account-usage; Databricks / BigQuery billing) and FinOps tooling (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Platform usage/cost views (Snowflake account-usage; Databricks / BigQuery billing) · FinOps tooling",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "capacity/performance monitoring (warehouse utilization, query performance, concurrency)\ncost governance: per-workload spend, budgets, anomaly alerts, resource monitors / quotas\nauto-suspend + right-sizing of compute\nrunaway-cost / capacity-failure incident history"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Capacity/performance monitoring (compute/warehouse utilization, query performance, concurrency).",
        "The test: Verify the platform is governed for capacity, performance, and cost.",
        "Reconcile the systems of record (Platform usage/cost views (Snowflake account-usage; Databricks / BigQuery billing), FinOps tooling, Resource monitors / quotas) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There are no resource monitors or budgets, so a runaway query pattern tripled the monthly Snowflake bill before anyone noticed, and several warehouses run always-on oversized with no auto-suspend."
      ],
      "references": [
        {
          "title": "FinOps Foundation",
          "url": "https://www.finops.org/"
        },
        {
          "title": "AWS Well-Architected — Cost / Performance",
          "url": "https://aws.amazon.com/architecture/well-architected/"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Capacity, performance, cost\" (capacity/performance monitoring (compute/warehouse utilization, query performance, concurrency)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Capacity, performance, cost\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify the platform is governed for capacity, performance, and cost. PASS: utilization + query performance are monitored; cost is governed (FinOps: per-workload spend, budgets, anomaly alerts, resource monitors/quotas); compute auto-suspends + is right-sized; and there are no runaway-cost or capacity-failure incidents. Exceptions: no cost monitoring (surprise bills), no resource monitors/quotas (runaway spend), no performance monitoring (degradation hits users), and oversized always-on compute. (Weighted operational/financial — but uncontrolled cost is a real governance + availability risk.) The evidence — Capacity/performance monitoring (compute/warehouse utilization, query performance, concurrency) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Platform usage/cost views (Snowflake account-usage; Databricks / BigQuery billing) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Platform usage/cost views (Snowflake account-usage; Databricks / BigQuery billing) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Platform usage/cost views (Snowflake account-usage; Databricks / BigQuery billing); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Capacity, performance, cost\" Audit Evidence\n\nThe test:\nVerify the platform is governed for capacity, performance, and cost. PASS: utilization + query performance are monitored; cost is governed (FinOps: per-workload spend, budgets, anomaly alerts, resource monitors/quotas); compute auto-suspends + is right-sized; and there are no runaway-cost or capacity-failure incidents. Exceptions: no cost monitoring (surprise bills), no resource monitors/quotas (runaway spend), no performance monitoring (degradation hits users), and oversized always-on compute. (Weighted operational/financial — but uncontrolled cost is a real governance + availability risk.)\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — Capacity/performance monitoring (compute/warehouse utilization, query performance, concurrency))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the capacity, performance, cost control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the capacity, performance, cost control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for capacity, performance, cost against comparable organisations in the sector",
            "Obtain evidence that the capacity, performance, cost control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-18-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Capacity, performance, cost\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-18-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Capacity, performance, cost\" control?",
          "options": [
            "A point-in-time screenshot of one system's capacity, performance, cost settings, captured during the walkthrough",
            "The Capacity/performance monitoring (compute/warehouse utilization, query performance, concurrency), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the capacity, performance, cost control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's capacity, performance, cost capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-18-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Capacity, performance, cost\"?",
          "options": [
            "From Platform usage/cost views (Snowflake account-usage; Databricks / BigQuery billing) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how capacity, performance, cost works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Platform usage/cost views (Snowflake account-usage; Databricks / BigQuery billing)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-18-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Capacity, performance, cost\"?",
          "options": [
            "The external audit firm, since it is the party examining the capacity, performance, cost control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the capacity, performance, cost data is shared, so the accountability sits with no one in particular",
            "Data platform / FinOps, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data platform / FinOps owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-18-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Capacity, performance, cost\", which part stays with the human auditor?",
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
          "id": "dlw-18-q7",
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
          "id": "dlw-18-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Capacity, performance, cost\", which of these is a realistic reportable finding?",
          "options": [
            "There are no resource monitors or budgets, so a runaway query pattern tripled the monthly Snowflake bill before anyone noticed, and several warehouses run always-on oversized with no auto-suspend.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There are no resource monitors or budgets, so a runaway query pattern tripled the monthly Snowflake bill before anyone noticed, and several warehouses run always-on oversized with no auto-suspend. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-18-q9",
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
          "id": "dlw-18-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Capacity, performance, cost\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind capacity, performance, cost, so there is no overlap",
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
    "epochId": "data-lakes",
    "id": "dlw-19",
    "order": 19,
    "title": "Regulatory / contractual data req",
    "subtitle": "Agentic technical & privacy audit of the regulatory / contractual data req control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Regulatory / contractual data req\" control for Data Lakes & Warehouses is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the data platform meets its regulatory + contractual data obligations. PASS: applicable obligations (GDPR/CCPA/HIPAA/PCI/sector + residency + contracts) are mapped to platform controls; residency is enforced (data in required regions); access/retention/encryption/audit satisfy each obligation; and compliance is evidenced for audit. Exceptions: unmapped obligations, regulated data in a prohibited region, controls that don't satisfy a mandate (e.g. no audit trail for SOX-relevant data), and no audit-ready evidence.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Data Lakes & Warehouses systems of record (The platform region/residency config + controls; GRC (obligation mapping); Data catalogue (classification → obligation)) as tools — e.g. `map regulatory/contractual obligations → the data + the platform contr`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The mapping of regulatory/contractual data requirements to the platform (GDPR, CCPA, HIPAA, PCI, sector, data-residency, contractual data-handling)",
        "Evidence the platform's controls satisfy each (residency, access, retention, encryption, audit)",
        "Data-residency/sovereignty enforcement (data confined to required regions)",
        "Audit-readiness: can the org evidence compliance for the data estate on demand"
      ],
      "system": [
        "The platform region/residency config + controls",
        "GRC (obligation mapping)",
        "Data catalogue (classification → obligation)"
      ],
      "dataOwner": [
        "Compliance / GRC + privacy",
        "Data governance",
        "Data platform"
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
      "tagline": "Auditing \"Regulatory / contractual data req\" as a repeatable agentic workflow: pull the real evidence (The mapping of regulatory/contractual data requirements to the platform (GDPR, CCPA, HIPAA, PCI, sector, data-residency, contractual data-handling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Data Lakes & Warehouses control.",
      "year": 2025,
      "overview": [
        "The \"Regulatory / contractual data req\" sub-process is one of the controls an auditor must verify for Data Lakes & Warehouses. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the mapping of regulatory/contractual data requirements to the platform (GDPR, CCPA, HIPAA, PCI, sector, data-residency, contractual data-handling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The platform region/residency config + controls, GRC (obligation mapping), Data catalogue (classification → obligation) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `map regulatory/contractual obligations → the data + the platform controls that s` — read-only, against the systems of record.",
        "The test itself is specific. Verify the data platform meets its regulatory + contractual data obligations. PASS: applicable obligations (GDPR/CCPA/HIPAA/PCI/sector + residency + contracts) are mapped to platform controls; residency is enforced (data in required regions); access/retention/encryption/audit satisfy each obligation; and compliance is evidenced for audit. Exceptions: unmapped obligations, regulated data in a prohibited region, controls that don't satisfy a mandate (e.g. no audit trail for SOX-relevant data), and no audit-ready evidence. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `19_regulatory_contractual_data_req_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The platform region/residency config + controls and GRC (obligation mapping) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull The platform region/residency config + controls · GRC (obligation mapping)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "map regulatory/contractual obligations → the data + the platform controls that satisfy them\ndata residency: confirm regulated data is confined to required regions (Snowflake / BigQuery region)\ndo access/retention/encryption/audit satisfy each mandate (SOX audit trail, PCI scope)?\naudit-ready evidence pack for the data estate"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The mapping of regulatory/contractual data requirements to the platform (GDPR, CCPA, HIPAA, PCI, sector, data-residency, contractual data-handling).",
        "The test: Verify the data platform meets its regulatory + contractual data obligations.",
        "Reconcile the systems of record (The platform region/residency config + controls, GRC (obligation mapping), Data catalogue (classification → obligation)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. EU personal data sits in a US Snowflake region with no residency control, there's no obligation-to-control mapping, and the org can't produce audit-ready evidence that the data estate meets SOX/GDPR/PCI on demand."
      ],
      "references": [
        {
          "title": "GDPR",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "PCI DSS",
          "url": "https://www.pcisecuritystandards.org/"
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
          "description": "Runnable read-only MCP server: gathers the Data Lakes & Warehouses evidence for \"Regulatory / contractual data req\" (the mapping of regulatory/contractual data requirements to the platform (gdpr, ccpa, hipaa, pci, sector, data-residency, contractual data-handling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Regulatory / contractual data req\" control for Data Lakes & Warehouses at AcmeCorp. THE TEST: Verify the data platform meets its regulatory + contractual data obligations. PASS: applicable obligations (GDPR/CCPA/HIPAA/PCI/sector + residency + contracts) are mapped to platform controls; residency is enforced (data in required regions); access/retention/encryption/audit satisfy each obligation; and compliance is evidenced for audit. Exceptions: unmapped obligations, regulated data in a prohibited region, controls that don't satisfy a mandate (e.g. no audit trail for SOX-relevant data), and no audit-ready evidence. The evidence — The mapping of regulatory/contractual data requirements to the platform (GDPR, CCPA, HIPAA, PCI, sector, data-residency, contractual data-handling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The platform region/residency config + controls APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The platform region/residency config + controls gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The platform region/residency config + controls; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Data Lakes & Warehouses: \"Regulatory / contractual data req\" Audit Evidence\n\nThe test:\nVerify the data platform meets its regulatory + contractual data obligations. PASS: applicable obligations (GDPR/CCPA/HIPAA/PCI/sector + residency + contracts) are mapped to platform controls; residency is enforced (data in required regions); access/retention/encryption/audit satisfy each obligation; and compliance is evidenced for audit. Exceptions: unmapped obligations, regulated data in a prohibited region, controls that don't satisfy a mandate (e.g. no audit trail for SOX-relevant data), and no audit-ready evidence.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- data-lakes_inventory.json   (in-scope items — The mapping of regulatory/contractual data requirements to the platform (GDPR, CCPA, HIPAA, PCI, sector, data-residency, contractual data-handling))\n- data-lakes_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the regulatory / contractual data req control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the regulatory / contractual data req control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for regulatory / contractual data req against comparable organisations in the sector",
            "Obtain evidence that the regulatory / contractual data req control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "dlw-19-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Regulatory / contractual data req\" matter to the broader Data Lakes & Warehouses posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Data Lakes & Warehouses",
            "It stops mattering once a firewall and endpoint agent are deployed across the Data Lakes & Warehouses estate",
            "It is a control other Data Lakes & Warehouses controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Data Lakes & Warehouses controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "dlw-19-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Regulatory / contractual data req\" control?",
          "options": [
            "A point-in-time screenshot of one system's regulatory / contractual data req settings, captured during the walkthrough",
            "The The mapping of regulatory/contractual data requirements to the platform (GDPR, CCPA, HIPAA, PCI, sector, data-residency, contractual data-handling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the regulatory / contractual data req control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's regulatory / contractual data req capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "dlw-19-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Regulatory / contractual data req\"?",
          "options": [
            "From The platform region/residency config + controls and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how regulatory / contractual data req works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The platform region/residency config + controls) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "dlw-19-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Regulatory / contractual data req\"?",
          "options": [
            "The external audit firm, since it is the party examining the regulatory / contractual data req control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the regulatory / contractual data req data is shared, so the accountability sits with no one in particular",
            "Compliance / GRC + privacy, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Compliance / GRC + privacy owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "dlw-19-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Regulatory / contractual data req\", which part stays with the human auditor?",
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
          "id": "dlw-19-q7",
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
          "id": "dlw-19-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Regulatory / contractual data req\", which of these is a realistic reportable finding?",
          "options": [
            "EU personal data sits in a US Snowflake region with no residency control, there's no obligation-to-control mapping, and the org can't produce audit-ready evidence that the data estate meets SOX/GDPR/PCI on demand.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. EU personal data sits in a US Snowflake region with no residency control, there's no obligation-to-control mapping, and the org can't produce audit-ready evidence that the data estate meets SOX/GDPR/PCI on demand. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "dlw-19-q9",
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
          "id": "dlw-19-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Regulatory / contractual data req\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind regulatory / contractual data req, so there is no overlap",
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
