# Agent Risk Management — How to Audit

*A practical field guide for auditing agentic-AI systems. Companion to the Tech Audit track's "Auditing Agentic AI" epochs (`tech-audit-5` baseline + `tech-audit-6` advanced).*

---

## 1. Why agentic systems need their own audit

A traditional model audit asks "is this prediction fair / accurate / private?" An **agent** does more than predict — it **plans, calls tools, and acts** in a loop, often with memory and autonomy. That changes the risk surface: the failure you care about is no longer just a wrong output, it's a wrong *action* taken with real privileges (sending email, moving money, changing infrastructure, ingesting untrusted data).

Audit it through the lens of three risk classes — the **G-I-A framework**:

- **Generation** — risk created *inside* the model: hallucination, unsafe content, biased reasoning, prompt-injection susceptibility.
- **Integration** — risk at the *seams*: tools/MCP servers the agent can call, the non-human identity (NHI) it acts as, the data it ingests, the systems it touches.
- **Amplification** — risk from *autonomy + scale*: a small error repeated across thousands of runs, multi-agent cascades, feedback loops, and actions with no human in the loop.

Every finding should map to one of these three so the report stays legible.

---

## 2. Scope the engagement first

Before testing anything, write down:

1. **What the agent is allowed to do** — its tools, their scopes, its identity/permissions, what it reads, what it can change.
2. **The autonomy level** — fully autonomous, human-approved actions, or advisory-only? (NIST AI RMF "human oversight"; EU AI Act Art. 14.)
3. **The blast radius** — worst realistic outcome of a wrong action.
4. **The regulatory class** — is the use case EU AI Act *high-risk* (Annex III)? That pulls in the full Title III obligations (risk management, data governance, logging, transparency, human oversight).

This scoping decides depth. An advisory chatbot ≠ an agent with `iam:PassRole`.

---

## 3. Get the evidence (the artifact trail)

You cannot audit what you cannot see. Demand the **assurance artifacts** — and demand them as *pipeline outputs*, not screenshots someone made for the audit:

| Artifact | What it proves | Where it should come from |
|---|---|---|
| **Model card** | the base model, version, known limits | model registry, signed |
| **AIBOM** (AI Bill of Materials) | every model/dataset/dependency + provenance | build pipeline, signed |
| **Prompt registry** | the system prompts/policies actually shipped | version control, gated |
| **Tool / MCP manifest** | every tool the agent can call + its scope | config, reviewed |
| **Non-human identity (NHI)** | the credential the agent acts as + its grants | IAM, least-privilege |
| **Eval reports** | how it scored on safety/quality/regression evals | CI eval gate |
| **Traces** | what it actually did, step by step, in prod | observability, tamper-evident |
| **Guardrail / policy cards** | the input/output filters + their bypass testing | security review |

If an artifact is missing, that *is* a finding (you can't assure an unobserved control).

---

## 4. Test each G-I-A layer

**Generation**
- Red-team the model: jailbreaks, indirect **prompt injection** through ingested content, data exfiltration via tool calls (the confused-deputy pattern).
- Check the eval gate: are there *adversarial* evals, not just happy-path? Do they run on every release, and does a regression block the deploy?

**Integration**
- Enumerate the tools and their scopes. Is the NHI **least-privilege**? A common critical finding: a wildcard grant (e.g. `iam:PassRole` on `*`) that lets the agent escalate.
- Is there an **egress allowlist** on tools that can reach the network? Untrusted-ingest → tool-call is the canonical exfil path.
- Are tool results treated as **untrusted input** (scanned), or trusted?

**Amplification**
- What runs **without a human**? For those, is there an independent **safety envelope** / circuit breaker that can stop a runaway?
- Multi-agent: can one agent's output poison another's input (cascade)? Is there Byzantine/loop protection?
- Is there **rate limiting** on consequential actions, and a kill switch (the `AGENTS_ENABLED`-style global off)?

---

## 5. Map to a framework (so findings have teeth)

Tie each control to a recognized framework so the report is defensible and the remediation is non-optional:

- **NIST AI RMF** — Govern / Map / Measure / Manage; great for the overall function.
- **EU AI Act** — high-risk obligations (risk mgmt, data governance, logging, transparency, human oversight, accuracy/robustness). Enforceable.
- **ISO/IEC 42001** — the AI management-system standard; use for the *program*, not a single agent.
- **OWASP LLM Top 10 / MITRE ATLAS** — concrete attack taxonomy for the Generation + Integration findings.

---

## 6. Report — CAPA, not just a list

For every finding: **severity · the G-I-A class · the evidence · the framework clause · a corrective action**. Prefer the **hierarchy of controls** (eliminate > engineer > administrative) over "add a guardrail prompt" — a prompt is the weakest control. Verify effectiveness *after* remediation, don't assume it.

Close with a **blameless** posture: the goal is a safer system, not a culprit. (Just Culture / the substitution test — would a competent engineer have done the same under the same conditions?)

---

## 7. The one-page engagement checklist

1. ☐ Scope: tools, identity, autonomy, blast radius, regulatory class.
2. ☐ Collect the artifact trail (§3) — flag every missing one.
3. ☐ Generation tests: jailbreak, injection, exfil; confirm an adversarial eval gate.
4. ☐ Integration: least-privilege NHI, tool scopes, egress allowlist, untrusted tool results.
5. ☐ Amplification: human-oversight points, safety envelope, kill switch, rate limits, multi-agent cascade.
6. ☐ Map each finding to NIST AI RMF / EU AI Act / ISO 42001 / OWASP-LLM / ATLAS.
7. ☐ Write CAPA with the hierarchy of controls; verify effectiveness post-fix.
8. ☐ Blameless postmortem framing.

*Want the deep version? Run the `tech-audit-5` (baseline) and `tech-audit-6` (advanced) epochs — they walk the agentic audit lifecycle, the evidence trail, eval engineering, the MCP/NHI ecosystem, continuous controls monitoring, and incident forensics with worked examples.*
