# Agent-Based Development — Plan for Review & Approval

**Status:** DRAFT — awaiting founder review & approval
**Author:** Claude (agent)
**Date:** 2026-06-08
**Review location:** Admin → Development (this plan is pinned to the top of the scrum board)

> **Decision requested:** approve to proceed (and in what phase order), request changes, or defer. Approve by moving the pinned plan card from **Review → Backlog**, or add notes/decisions on the card.

---

## 1. The idea in one paragraph

Stand up a small team of **specialized AI agents** that do real development work on Kryptós CronOS **on a schedule, largely without you** — deep code reviews and refactoring, content reviews, format-deviation normalization, and deep testing of every quiz and CTF. The agents **never act as a black box**: each run is bounded by least-privilege permissions, leaves a full trace, and **reports its findings back into the Development scrum board** (as `source: agent` cards) for your review and a human gate before anything risky ships. We are, deliberately, applying the **Generation / Integration / Amplification** audit lens from the new Auditing-Agentic-AI epochs to our own agents — dogfooding the curriculum.

---

## 2. Principles (the guardrails)

1. **Human gate on anything outward-facing.** Agents propose; you dispose. Review/refactor agents open branches + PRs; they never push to `master` directly. Reporting agents only write scrum cards.
2. **Least privilege per agent.** A review agent is read-only on prod and write-only to a branch. A testing agent can run the repo's validators but cannot edit content. No shared "do-everything" agent.
3. **Everything leaves a trace.** Each run records what it read, did, and decided (Claude Code transcripts / run logs), and produces a dated report card. "We can't reconstruct what the agent did" is a stop condition.
4. **Bounded blast radius.** Hard limits per run (files touched, time, token budget), a tested **kill switch** (a single `AGENTS_ENABLED` flag), and circuit breakers (abort on repeated failures).
5. **Findings, not silent changes.** Even autonomous fixes land as a reviewable diff on a branch + a board card describing what and why.
6. **Start read-only, earn write.** New agents begin in report-only mode; we grant write (branch/PR) only after their reports prove reliable.

---

## 3. The agent roster

### 3.1 Deep Code Review & Refactor Agent  🔍
- **What:** Periodic deep review of the codebase — correctness smells, dead code, duplication, inconsistent patterns, oversized files/components, dependency hygiene, and safe refactors (extract/dedupe/simplify) that preserve behavior.
- **Cadence:** weekly (full sweep) + on-demand.
- **Autonomy:** *Supervised.* Read-only analysis → opens a branch with a focused refactor + a board card. **Never merges.** You review the PR and merge.
- **Output:** one board card per finding/PR (`type: chore|enhancement`, `source: agent`, `initiator: agent:reviewer`), linking the branch/PR. High-severity correctness issues → `type: bug`, `priority: p1`.
- **Guardrails:** caps on files-per-PR; no changes to auth, payments, or `stage-flags`; tsc + build + lint must pass before the card is filed.

### 3.2 Content Review Agent  📝
- **What:** Reviews stage content for accuracy, tone/level consistency, broken references, stale facts, missing image coverage, and curriculum gaps. Cross-checks claims against the references in each stage.
- **Cadence:** weekly, rotating across epochs (so the whole catalog is swept over time).
- **Autonomy:** *Report-only* to start. Flags issues as cards; proposes copy edits as suggestions in the card (or a branch once trusted).
- **Output:** cards (`type: content`, `initiator: agent:content`), e.g., "stage X cites a CVE wrong," "epoch Y tone drifts adult vs. beginner," "N stages missing imagery."

### 3.3 Format-Normalization Agent  🧹
- **What:** Detects **deviation of format** and normalizes it — inline lists that should be bullets, inconsistent `info` structure, missing/duplicated fields, heading/casing drift, prompt/quiz shape inconsistencies, flowchart/label conventions. (This is exactly the kind of pass we just did by hand on the agentic epochs.)
- **Cadence:** weekly + after any large content drop.
- **Autonomy:** *Supervised.* Produces a normalization branch + a card summarizing the diffs; deterministic, low-risk edits, so this is a strong early candidate for trusted auto-PRs.
- **Output:** cards (`type: chore`, `initiator: agent:format`) + branch. Includes a "format drift score" trend so we can see consistency improving.

### 3.4 Deep Testing Agent — Quizzes & CTFs  🧪
- **What:** The highest-value, lowest-risk agent. For **quizzes**: checks every question has exactly one defensible correct answer, distractors are plausible-but-wrong, no ambiguous/true-of-multiple options, explanations match the key, and coverage maps to the stage. For **CTFs**: runs `validate-ctf`, confirms flags resolve, fragments assemble, terminal commands/`extraCommands` work, hints lead somewhere, and the documented solve path actually solves.
- **Cadence:** nightly (changed stages) + full weekly sweep.
- **Autonomy:** *Report-only.* It runs validators and reasons over content; it **does not edit** — it files findings.
- **Output:** cards (`type: test`, `initiator: agent:tester`, `priority` by severity). A passing run files a single green "Test sweep: N quizzes / M CTFs, 0 problems" card; failures file one card each with the exact stage + defect.

---

## 4. How agents report (the loop closes here)

Every agent writes to the **Development scrum board** via the existing admin scrum API (an agent-scoped token, not your cookie):
- New findings land in **Triage** (or **Review** for proposed PRs) with `source: agent` and `initiator: agent:<name>`.
- You triage exactly like human-submitted feedback: drag to **Backlog** to accept, add a note, or delete to reject.
- Branches/PRs are linked in the card; merging stays a human action.

This means **one inbox for all proposed work** — human feedback, survey items, and agent findings all flow into the same board you already use.

---

## 5. Implementation options (to decide during approval)

| Option | How it runs | Pros | Cons |
|---|---|---|---|
| **A. Claude Code subagents + scheduled routines** | Custom `.claude/agents/*` + cron `/schedule` routines on your machine/CI | Fastest to stand up; reuses tools we already have; great traces | Tied to a runner being available |
| **B. GitHub Actions + Claude** | Scheduled workflow invokes Claude on the repo, opens PRs, posts cards | Fully hands-off, cloud-native, PR-native | More setup; secrets management |
| **C. Claude Agent SDK pipeline** | A small service orchestrating the agents programmatically | Most control over multi-agent orchestration + budgets | Most engineering to build/operate |

**Recommendation:** start with **A** for the testing + format agents (this week), graduate the code-review and content agents to **B (GitHub Actions → PRs)** once their reports prove trustworthy. Keep a single `AGENTS_ENABLED` kill switch and an agent-scoped scrum token regardless of option.

---

## 6. Phased rollout

- **Phase 0 — Board (DONE).** The Development scrum board + feedback/survey ingestion is live. Agents have an inbox to report into.
- **Phase 1 — Deep Testing Agent (BUILT 2026-06-08).** Report-only quiz/CTF validator that files findings to this board. **To activate:** set `AGENTS_ENABLED=true` and `AGENT_REPORT_TOKEN=<secret>` in Vercel, then run `npm run test:agent -w @kryptos/web` (dry run) or, to post to the board, `AGENT_REPORT_URL=https://www.kryptoscronos.com AGENT_REPORT_TOKEN=<secret> node apps/web/scripts/test-agent.mjs --report` (use the **www** host — the apex redirects and drops the auth header). A nightly **GitHub Action** is included (`.github/workflows/test-agent.yml`, 07:00 UTC + manual `workflow_dispatch`) that runs **all four report-only agents** (testing, content, code-health, format) → board. Set the `AGENT_REPORT_TOKEN` GitHub secret (same value as Vercel) and it runs hands-off. Each agent keeps its own summary card and only manages its own findings. First sweep: 821 quiz stages + 371 CTF stages, 0 high/medium findings, 11 low (thin banks). Endpoint: `POST /api/agent/report` (token + kill-switch gated; can only create agent cards; dedupes by finding key and auto-resolves fixed findings; upserts a single sweep-summary card).
- **Phase 2 — Content Review + Format-Normalization (report-only versions BUILT 2026-06-08).** `content-agent.mjs` (broken/missing references, duplicate stage/badge ids, missing badges, empty overviews/takeaways, thin technical stages) and `format-agent.mjs` (high-confidence colon-led inline lists that should be bullets; conservative, caps at 8 cards). Both file findings to the board; the *write-mode* (auto-PR normalization) is the remaining step.
- **Phase 3 — Code Review & Refactor.** Report-only `code-health-agent.mjs` BUILT (oversized files, TODO/FIXME, stray console.log, `any` casts, `dangerouslySetInnerHTML`). The branch/PR auto-refactor with mandatory green gates + human merge is the remaining step.
- **Phase 4 — Orchestrated continuous loop.** Scheduled cadence across all agents, a weekly "agent digest" card, and trend metrics (format-drift score, test pass rate, open agent findings).

Each phase ships behind the kill switch and is reviewed before the next.

## 7. Risk register (G-I-A applied to our own agents)

| Risk | Layer | Mitigation |
|---|---|---|
| Agent makes a wrong "fix" | Generation | Report-only first; green gates (tsc/build/lint/validate-ctf) before any card/PR; human merge |
| Over-broad permissions / secret access | Integration | Least-privilege per agent; agent-scoped scrum token; no auth/payments/flags edits; egress limited |
| A bad run at scale / runaway cost | Amplification | Per-run file/time/token caps; circuit breaker on repeated failures; `AGENTS_ENABLED` kill switch |
| Unreviewable change | Integration | Every change is a branch diff + a board card with rationale; full run trace retained |
| Agents flood the board | Amplification | Passing runs file a single summary card; dedupe by finding; rate-limited |

## 8. Success criteria

- The agent→board loop works end-to-end (a scheduled agent files a card you can act on).
- Test pass-rate and format-drift trends are visible and improving.
- Zero agent-caused regressions reach `master` (human gate holds).
- Net founder time saved on review/testing/normalization — the whole point.

---

## 9. What I need from you (tomorrow)

1. **Approve / change / defer** this plan (move the pinned card, or add notes).
2. Pick the **phase order** (default: Testing → Format/Content → Code Review → Orchestration).
3. Pick the **implementation option** for Phase 1 (default: A — Claude Code subagent + nightly routine).
4. Confirm the **non-negotiables**: human merge gate, least-privilege tokens, kill switch.

Once approved, Phase 1 (the Deep Testing Agent reporting to this board) is the first build.
