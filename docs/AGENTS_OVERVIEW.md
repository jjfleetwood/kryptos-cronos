# The Agent Fleet — Overview

*A single reference for every automated agent on Kryptós CronOS: what each one does, when it runs, and the safety rules they all share. Companion to `AGENT_DEV_PLAN.md` (the original design).*

---

## The one rule that governs all of them

**No agent ever merges to `master`.** Every agent is one of two kinds:

- **Report-only** — it finds problems and files them as cards on the Development board. It never changes code.
- **Write-mode** — it makes a change on a **branch and opens a PR**, then stops. A human reviews and merges.

On top of that: each agent runs with **least privilege**, every run **leaves a trace** (Actions logs + board cards + Claude Code transcripts), and the whole reporting surface has a **kill switch** — `AGENTS_ENABLED=true` must be set or `/api/agent/report` rejects everything.

This is the **Generation / Integration / Amplification** discipline from the Auditing-Agentic-AI epochs applied to our own agents: bound what each one can generate, govern how they integrate (tokens, branches, the merge gate), and cap amplification (human approval before anything reaches production).

---

## How the pieces fit together

```
 nightly reporters ──▶ Development board ──▶ tier triage ──▶ hourly programming agent
 (11 deterministic     (scrum:items)         (AUTO vs HUMAN)   (clears the safe subset → PR)
  + nightly Claude          │
  subagents) ───────────────┘ (judgement work → board findings / focused PRs)
```

The **Development scrum board** (admin page → "Development", Redis `scrum:items`) is the shared nervous system. Reporters file findings onto it; humans and the programming agent work it down; user feedback is ingested into it as Triage cards. The board is **admin-only** — in fact restricted to the **owner account (`jjb`)**, not just any admin.

---

## 1. The nightly report-only fleet (11 deterministic agents)

Runs every night at **07:00 UTC** via `.github/workflows/test-agent.yml`, posting findings to `/api/agent/report`. All eleven are read-only. Each scopes its own dedup / auto-resolve / sweep-summary by `initiator = agent:<name>`, so they never step on each other. Shared plumbing lives in `_agent-lib.mjs` (`loadStages` / `makeCollector` / `walk` / `report`).

| Agent | Script | What it checks |
|---|---|---|
| **🧪 Deep Testing** | `test-agent.mjs` | Every quiz (unanswerable `correctIndex`, ambiguous duplicate option text, missing fields, duplicate qids, thin banks) and every CTF (mirrors `validate-ctf`). |
| **📝 Content Integrity** | `content-agent.mjs` | Duplicate stage/badge ids, missing badges, empty overview/takeaways, broken/missing references, quiz answer-length bias + thin pools. |
| **🩺 Code Health** | `code-health-agent.mjs` | Oversized files, `TODO`/`FIXME` debt, stray `console.log`, `any`-casts. |
| **🧹 Format Drift** | `format-agent.mjs` | Colon-led 5+ item inline lists that should be house-style bullets. (Also a write-mode — §3.) |
| **🌐 i18n Coverage** | `i18n-agent.mjs` | Missing / orphaned locale keys across the 7 locales vs. English. |
| **🧭 Content Drift** | `drift-agent.mjs` | `stages-meta` freshness (the CI `check:meta` build-blocker) + headline stage/epoch count drift across the app + 7 locales. (`--fix` regenerates meta.) |
| **📚 Docs** | `docs-agent.mjs` | Every `docs/*.md` vs. its `apps/web/secured-docs/` copy + stale headline counts (history files excluded). (`--fix` re-syncs.) |
| **🗂️ Curriculum Structure** | `curriculum-agent.mjs` | Orphan epochs (in no track group → hidden from nav), CTF stages with no flag (→ unsolvable), epochs with `ctf.extraCommands` but no `LOADERS` entry (→ terminal commands silently fail), stale flags. |
| **🖼️ Image Integrity** | `image-agent.mjs` | `STAGE_IMAGES` entries pointing at missing files (→ broken cover), oversized images, and the on-generated-cover coverage stat. |
| **🔐 Security Hygiene** | `security-agent.mjs` | `npm audit` critical/high advisories, hardcoded-secret scan (Stripe/AWS/private-key/GitHub/Slack patterns), XSS surface (`dangerouslySetInnerHTML`), `console.*` in API routes. |
| **✍️ Content Depth** | `prose-agent.mjs` | Overviews still in the terse bulleted format (vs. the narrative house standard) and thin overviews, rolled up per epoch — drives the prose-deepening work. |

## 2. The tier method (triage) + write-mode

- **`board-ops.mjs`** — pulls the open board, ranks by risk (priority) then age, and classifies each item **AUTO** (a deterministic agent can fix it safely → branch+PR) vs **HUMAN** (judgement / product / feedback / destructive). Read-only triage; `--annotate` leaves an audit note on each card.
- **`board-curator.mjs`** — moves / annotates cards in bulk (board housekeeping).
- **`format-agent.mjs --fix`** — the proven write-mode template: requires a clean tree, applies the highest-confidence fixes, **gates on core `tsc`**, opens an `agent/format-normalize-*` branch + PR, returns to `master`. Never merges.

## 3. The hourly programming agent (the executor)

`apps/web/scripts/auto-agent.mjs` · `.github/workflows/auto-agent.yml` — runs **every hour** (`0 * * * *`). The *executing* half of the tier method: it reviews the board (triage / backlog / todo) and, for the **unattended-safe subset of the AUTO tier only**, runs the fix, opens a branch + PR, and moves the card to **Review**.

- **Acts on** only deterministic, `tsc`-gated mechanical fixes: stale meta, stage/epoch-count drift, secured-docs sync, house-style bullet normalization.
- **Never touches** judgement work — even AUTO-lane items that need a person (i18n translation, large-file extraction) are left for a supervised run. Deliberately *stricter* than board-ops' AUTO lane.
- **Never merges**, **idempotent** (handled cards leave the sweep), capped at `AUTO_AGENT_MAX=3` PRs/run, kill switch `AUTO_AGENT_ENABLED=false`, no-overlap concurrency guard.

> **Priority ≠ auto-completable.** The agent decides "is this a deterministic, script-able fix?", *not* "is this low priority?". A `P2` feature/authoring card is HUMAN-lane regardless of priority and is never auto-done.

## 4. The nightly Claude subagents (judgement work)

`.github/workflows/nightly-subagents.yml` — runs the supervised Claude Code subagents (`.claude/agents/*.md`) headless on a **weekday rotation**, the judgement-heavy work the deterministic scripts can't do. Report-only or PR-only by their definitions; **never merge**.

| Day | Subagent | Purpose |
|---|---|---|
| Mon / weekend | **audit-agent** | Documented best-practice audit (scope → evidence → test → findings → CAPA): gathers evidence from the deterministic fleet + a security pass, writes a dated, framework-mapped report to `docs/audits/`, files a board summary. |
| Tue | **content-reviewer** | Rotating epoch accuracy / tone / reference review; proposes copy edits on a branch + PR; never silently re-keys quizzes. |
| Wed | **ux-reviewer** | Walks the live product as a learner; files UX-friction + gamification/retention findings; PRs only tiny high-confidence copy fixes. |
| Thu | **code-reviewer** | Deep code sweep / focused refactor → ONE branch + PR. Forbidden zones: auth/payments/crypto/session/stage-flags/proxy; ≤12 files; tsc+lint+build gates. |
| Fri | **docs-agent** / **drift-agent** | Supervised front-ends for the §1 maintenance scripts. |

Also available on-demand (not scheduled): **epoch-author** — scaffolds a brand-new epoch end-to-end (stage file + 5 wiring spots + theme + green gates) → PR. It needs a topic, so it's invoked by hand.

**Safety:** the workflow uses a **bounded tool allowlist** (read/edit/write + `git` branch/commit/push + `gh pr create` + node/npm) — *not* `--dangerously-skip-permissions` — and explicitly **denies `gh pr merge` / `git merge` / push-to-master**, so the human-merge gate holds. **Dormant until the repo secret `ANTHROPIC_API_KEY` is set** (each run is billed Claude API usage); without it the job logs a skip and exits clean.

## 5. Shared infrastructure

- **`/api/agent/report`** — the single intake. Token-gated (`AGENT_REPORT_TOKEN`) behind the `AGENTS_ENABLED` kill switch. Dedups by finding key, auto-resolves fixed findings, writes a per-agent sweep-summary card, and upserts a cross-agent **📊 Agent digest** card with ▲/▼/= trends every sweep.
- **`gen:meta` pre-push hook** (`apps/web/.claude/settings.json`) — blocks a `git push` when `stages-meta.generated.ts` is stale (`check:meta`). Fix: `npm run gen:meta -w @kryptos/core`.
- **The Development board** — `lib/scrum.ts` (Redis `scrum:items`) + `app/api/admin/scrum` (owner-gated CRUD) + `components/ScrumBoard.tsx`. Columns: Triage → Backlog → To Do → In Progress → Review → Done.

## Schedules at a glance

| Cadence | Who | Mode |
|---|---|---|
| Nightly 07:00 UTC | The 11-agent deterministic report fleet (`test-agent.yml`) | report-only → board |
| Nightly 07:30 UTC | One rotating Claude subagent (`nightly-subagents.yml`) | report-only / PR-only (dormant w/o API key) |
| Hourly | The programming agent (`auto-agent.yml`) | auto-fix safe AUTO subset → PR |
| On demand | Claude subagents (epoch-author) + drift/docs `--fix` | supervised → PR |

## To activate / operate

- **Report fleet:** `AGENTS_ENABLED=true` + `AGENT_REPORT_TOKEN` in Vercel (and the matching GitHub secret) — live.
- **Programming agent:** repo secrets `ADMIN_SECRET` + `ADMIN_USERNAME` drive the board; default `GITHUB_TOKEN` opens PRs. Pause with repo variable `AUTO_AGENT_ENABLED=false`. *(PRs opened by `GITHUB_TOKEN` don't auto-trigger CI — run it on the PR, or use a PAT.)*
- **Claude subagents:** set `ANTHROPIC_API_KEY` to turn the nightly rotation on (billed). Override the rotation via the workflow's manual dispatch.
- Everything is reversible: nothing reaches `master` (or production) without a human merge.
