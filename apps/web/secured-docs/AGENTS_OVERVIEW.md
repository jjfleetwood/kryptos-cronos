# The Agent Fleet — Overview

*A single reference for every automated agent on Kryptós CronOS: what each one does, when it runs, and the safety rules they all share. Companion to `AGENT_DEV_PLAN.md` (the original design).*

---

## The one rule that governs all of them

**No agent ever merges to `master`.** Every agent is one of two kinds:

- **Report-only** — it finds problems and files them as cards on the Development board. It never changes code.
- **Write-mode** — it makes a change on a **branch and opens a PR**, then stops. A human reviews and merges.

On top of that: each agent runs with **least privilege** (a reporter has no write access; the deploy/push flow stays human-gated), every run **leaves a trace** (Actions logs + board cards + Claude Code transcripts), and the whole reporting surface has a **kill switch** — `AGENTS_ENABLED=true` must be set in the environment or `/api/agent/report` rejects everything.

This is the **Generation / Integration / Amplification** discipline from the Auditing-Agentic-AI epochs applied to our own agents: bound what each one can generate, govern how they integrate (tokens, branches, the merge gate), and cap amplification (human approval before anything reaches production).

---

## How the pieces fit together

```
 nightly reporters ──▶ Development board ──▶ tier triage ──▶ hourly programming agent
 (find the work)        (scrum:items)        (AUTO vs HUMAN)   (clears the safe subset → PR)
                                                   │
 Claude Code subagents (supervised, on-demand) ────┘ (the judgement work humans drive)
```

The **Development scrum board** (admin page → "Development", Redis `scrum:items`) is the shared nervous system. Reporters file findings onto it; humans and the programming agent work it down; user feedback is ingested into it as Triage cards. The board is **admin-only** at every layer.

---

## 1. The nightly report-only fleet

Runs every night at **07:00 UTC** via `.github/workflows/test-agent.yml`, posting findings to `/api/agent/report`. All five are read-only. Each scopes its own dedup / auto-resolve / sweep-summary by `initiator = agent:<name>`, so they never step on each other.

| Agent | Script | What it checks |
|---|---|---|
| **Deep Testing Agent** | `test-agent.mjs` | Every quiz (unanswerable `correctIndex`, ambiguous duplicate option text, missing text/options/explanation, duplicate question ids, thin banks) and every CTF (mirrors `validate-ctf`). |
| **Content Integrity Agent** | `content-agent.mjs` | Duplicate stage/badge ids, missing badges, empty overview/takeaways, broken or missing references. |
| **Code Health Agent** | `code-health-agent.mjs` | Oversized files, `TODO`/`FIXME` debt, stray `console.log`, `any`-casts. |
| **Format Drift Agent** | `format-agent.mjs` | Colon-led 5+ item inline lists that should be house-style bullets. (Also has a write-mode — see §3.) |
| **i18n Coverage Agent** | `i18n-agent.mjs` | Missing or orphaned locale keys across the 7 locales vs. English. |

Shared plumbing lives in `_agent-lib.mjs` (`loadStages` / `makeCollector` / `walk` / `report`).

## 2. Maintenance / drift agents (supervised)

These keep generated and derived artifacts honest. They're report-only by default and carry a `--fix` write-mode. Run on demand (as Claude Code subagents) — and once a finding is on the board, the hourly programming agent (§4) can clear it automatically.

| Agent | Script + definition | What it does | `--fix` |
|---|---|---|---|
| **Content Drift Agent** | `drift-agent.mjs` · `.claude/agents/drift-agent.md` | `stages-meta` freshness (the CI `check:meta` build-blocker) + headline stage/epoch count drift across the app + 7 locales. | regenerates `stages-meta` |
| **Docs Agent** | `docs-agent.mjs` · `.claude/agents/docs-agent.md` | Every `docs/*.md` vs. its `apps/web/secured-docs/` copy (the admin Docs panel serves that copy) + stale headline counts. History/changelog files excluded from the count check. | re-syncs + reconciles counts |

## 3. The tier method (triage) + write-mode

- **`board-ops.mjs`** — pulls the open board, ranks by risk (priority) then age, and classifies each item **AUTO** (a deterministic agent can fix it safely → branch+PR) vs **HUMAN** (judgement / product / feedback / destructive). Read-only triage; `--annotate` leaves an audit note on each card.
- **`board-curator.mjs`** — moves / annotates cards in bulk (board housekeeping).
- **`format-agent.mjs --fix`** — the proven write-mode template: requires a clean tree, applies the highest-confidence fixes, **gates on core `tsc`**, opens an `agent/format-normalize-*` branch + PR, returns to `master`. Never merges.

## 4. The hourly programming agent (the executor)

`apps/web/scripts/auto-agent.mjs` · `.github/workflows/auto-agent.yml` — runs **every hour** (`0 * * * *`). It is the *executing* half of the tier method: it reviews the board (triage / backlog / todo) and, for the **unattended-safe subset of the AUTO tier only**, runs the fix, opens a branch + PR, and moves the card to **Review**.

- **Acts on** only deterministic, `tsc`-gated mechanical fixes: stale meta, stage/epoch-count drift, secured-docs sync, house-style bullet normalization.
- **Never touches** judgement work — even AUTO-lane items that need a person (i18n translation, large-file extraction) are left for a supervised run. This is deliberately *stricter* than board-ops' AUTO lane.
- **Never merges**, is **idempotent** (handled cards leave the sweep), capped at `AUTO_AGENT_MAX=3` PRs/run, with a kill switch (repo variable `AUTO_AGENT_ENABLED=false`) and a no-overlap concurrency guard.

> **Priority ≠ auto-completable.** The agent decides "is this a deterministic, script-able fix?", *not* "is this low priority?". A `P2` feature or authoring card (e.g. "build a PowerPoint generator", "write a doc") is HUMAN-lane regardless of priority and will never be auto-done.

## 5. Claude Code subagents (supervised, on-demand)

Defined in `.claude/agents/*.md`, invoked from a Claude Code session for the judgement-heavy work. All open a branch + PR (or just a report) and never merge.

| Subagent | Purpose |
|---|---|
| **epoch-author** | Scaffolds a brand-new curriculum epoch end-to-end — the `@kryptos/core` stage file (briefings + quizzes + optional CTFs), all 5 wiring spots, theme, count reconciliation, green gates (`gen:meta` + `validate-ctf` + `tsc`) — then PRs it. |
| **code-reviewer** | Weekly deep code sweep or on-demand focused refactor → ONE focused branch + PR. Forbidden zones: auth/payments/crypto/session/stage-flags/proxy; ≤12 files; tsc+lint+build gates. |
| **content-reviewer** | Rotating epoch accuracy / tone / reference review; proposes copy edits on a branch + PR; never silently re-keys quizzes. |
| **ux-reviewer** | Walks the live product as a learner and files UX-friction + gamification/retention findings to the board; PRs only tiny high-confidence copy fixes. |
| **drift-agent** / **docs-agent** | The supervised front-ends for the §2 maintenance scripts. |
| **audit-agent** | Runs a documented best-practice audit (scope → evidence → test → findings → CAPA), gathering evidence from the deterministic fleet + a security pass, then writes a dated, framework-mapped report to `docs/audits/` and a board summary. |

## 6. Shared infrastructure

- **`/api/agent/report`** — the single intake. Admin/agent-token gated (`AGENT_REPORT_TOKEN`) behind the `AGENTS_ENABLED` kill switch. Dedups by finding key, auto-resolves fixed findings, writes a per-agent sweep-summary card, and upserts a cross-agent **📊 Agent digest** card with ▲/▼/= trends every sweep.
- **`gen:meta` pre-push hook** (`apps/web/.claude/settings.json`) — blocks a `git push` when `stages-meta.generated.ts` is stale (`check:meta`), so the "forgot to regenerate meta" build break can't reach CI. Fix: `npm run gen:meta -w @kryptos/core`.
- **The Development board** — `lib/scrum.ts` (Redis `scrum:items`) + `app/api/admin/scrum` (admin-gated CRUD) + `components/ScrumBoard.tsx`. Columns: Triage → Backlog → To Do → In Progress → Review → Done.

## Schedules at a glance

| Cadence | Who | Mode |
|---|---|---|
| Nightly 07:00 UTC | The 5-agent report fleet (`test-agent.yml`) | report-only → board |
| Hourly | The programming agent (`auto-agent.yml`) | auto-fix safe AUTO subset → PR |
| On demand | Claude Code subagents + drift/docs `--fix` | supervised → PR |

## To activate / operate

- Report fleet: set `AGENTS_ENABLED=true` + `AGENT_REPORT_TOKEN` in Vercel (and the matching GitHub secret) — already live.
- Programming agent: repo secrets `ADMIN_SECRET` + `ADMIN_USERNAME` drive the board API; the default `GITHUB_TOKEN` opens PRs. Pause anytime with repo variable `AUTO_AGENT_ENABLED=false`. *(Note: PRs opened by `GITHUB_TOKEN` don't auto-trigger CI — run it on the PR manually, or switch to a PAT if you want CI on the auto-PRs.)*
- Everything is reversible: nothing reaches `master` (or production) without a human merge.
