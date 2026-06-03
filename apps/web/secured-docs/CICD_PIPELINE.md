# CI/CD Pipeline — Kryptós CronOS

**Version:** v1.0.0
**Last Updated:** 2026-05-26
**Status:** Current

---

## 1. Pipeline Overview

```mermaid
flowchart LR
    subgraph Dev["Local Development"]
        Code["Feature Code\non dev branch"]
    end

    subgraph GitHub["GitHub"]
        Push["git push → dev"]
        PR["PR: dev → master"]
        Merge["Merge to master"]
    end

    subgraph CI["GitHub Actions CI"]
        Lint["1. ESLint\nnpx eslint\n0 errors required"]
        TSC["2. TypeScript\nnpx tsc --noEmit\n--skipLibCheck"]
        Build["3. Next.js Build\nnpm run build\nproduction build"]
        Audit["4. npm audit\nno critical CVEs"]
    end

    subgraph Vercel["Vercel Deployments"]
        Preview["Preview URL\ndev branch\nauto-deploy"]
        Prod["kryptoscronos.com\nmaster branch\nauto-deploy"]
    end

    Code --> Push
    Push --> CI
    CI --> Preview
    Preview -->|"Manual UAT"| PR
    PR --> CI
    CI --> Merge
    Merge --> CI
    CI --> Prod
```

---

## 2. Branch Strategy

| Branch | Purpose | CI Trigger | Vercel Target |
|---|---|---|---|
| `master` | Single source of truth + production | Push + PR | kryptoscronos.com |
| `<feature>/*` | Short-lived branches for risky/structural changes | Push | Preview URL |

**Workflow (single-branch, as of 2026-06-03):** push to `master` → CI + Vercel auto-deploy to production. For risky changes, push a short-lived feature branch, validate the Vercel **Preview** build, then fast-forward `master` and delete the branch. The old `dev` branch was retired. CI runs from the **monorepo root** (`npm ci` + workspace-scoped lint/typecheck/build); Vercel Root Directory = `apps/web`.

---

## 3. GitHub Actions Workflow

**File:** `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./app

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
          cache-dependency-path: app/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npx eslint .

      - name: Type check
        run: npx tsc --noEmit --skipLibCheck

      - name: Build
        run: npm run build
        env:
          UPSTASH_REDIS_REST_URL: ${{ secrets.UPSTASH_REDIS_REST_URL }}
          UPSTASH_REDIS_REST_TOKEN: ${{ secrets.UPSTASH_REDIS_REST_TOKEN }}
          RESEND_API_KEY: ci-placeholder
          ADMIN_EMAIL: ci-placeholder
          ADMIN_USERNAME: ci-placeholder
          ADMIN_SECRET: ci-placeholder-secret-32-characters!!
          SESSION_SECRET: ci-placeholder-secret-32-characters!!
          ANTHROPIC_API_KEY: ci-placeholder
          STRIPE_SECRET_KEY: ci-placeholder
          STRIPE_WEBHOOK_SECRET: ci-placeholder
          STRIPE_PRO_MONTHLY_PRICE_ID: ci-placeholder
          STRIPE_PRO_YEARLY_PRICE_ID: ci-placeholder

      - name: Security audit
        run: npm audit --audit-level=critical
```

**GitHub Secrets required:**
- `UPSTASH_REDIS_REST_URL` — needed for actual build (Redis client initializes at build time)
- `UPSTASH_REDIS_REST_TOKEN` — same

All other env vars are stubbed with `ci-placeholder` for the build step. The build must succeed with stubs — all env var access must be lazy (inside route handlers, not at module load time).

---

## 4. Vercel Configuration

**Project name:** `kryptos-cronos` (must include `--project kryptos-cronos` flag on manual CLI deploys)

**Branch mapping:**
| Branch | Environment | URL |
|---|---|---|
| `master` | Production | kryptoscronos.com |
| `dev` | Preview | `kryptos-cronos-git-dev-*.vercel.app` |

**Build settings (Vercel dashboard):**
- Framework: Next.js (auto-detected)
- Root directory: `app`
- Build command: `npm run build`
- Output directory: `.next`

**All environment variables** set in Vercel → Project → Settings → Environment Variables for Production environment (and optionally Preview).

---

## 5. Manual Deploy Procedure

When deploying from the CLI (e.g., after hotfix):

```bash
cd C:\Users\Ajax\Projects\cyberquest\app

# Step 1: Run CI gates locally
npm run lint
npx tsc --noEmit
npm run build

# Step 2: Run security audit
npm audit

# Step 3: Deploy to production
npx vercel --prod --project kryptos-cronos
```

**Critical:** Always include `--project kryptos-cronos`. Without it, Vercel may deploy to the wrong project.

---

## 6. Pre-Deploy Security Audit (6-Pass)

The deploy skill (`app/.claude/commands/deploy.md`) enforces a 6-pass security audit before every production deploy:

| Pass | Check | Tool |
|---|---|---|
| 1 | Dangerous patterns — `eval`, `innerHTML`, `dangerouslySetInnerHTML` | `grep` / ESLint |
| 2 | API route auth — every state-changing route has session/admin cookie check | Code review |
| 3 | Session integrity — cookies are HttpOnly, HMAC-signed, no localStorage | Code review |
| 4 | Client exposure — no flag values, no secrets in client bundles | `grep` built files |
| 5 | New attack surface — any new API route inventoried for auth requirements | Code review |
| 6 | Header integrity — CSP nonce, HSTS, X-Frame-Options all present | Response inspection |

---

## 7. Docs Sync Procedure

All internal documentation lives in two locations:
- `docs/` — source of truth (editable)
- `app/secured-docs/` — served by API (deployed with app)

On every deploy, sync docs to secured-docs:

```bash
# From project root
cp docs/*.md app/secured-docs/
```

Any new `.md` file added to `docs/` must also be:
1. Copied to `app/secured-docs/`
2. Added to `ALLOWED_FILES` in `app/src/app/api/docs/[file]/route.ts`
3. Added to the `DOCS` array in `app/src/components/DocsViewer.tsx`

---

## 8. Rollback Procedure

Vercel maintains full deployment history. To roll back production:

```bash
# List recent deployments
npx vercel ls --project kryptos-cronos

# Promote a previous deployment to production
npx vercel promote <deployment-url> --project kryptos-cronos
```

**Redis rollback:** Redis data changes (user records, progress) are not automatically reversed. For data issues:
1. Identify affected keys using Upstash console
2. Manually correct via Upstash Data Browser or CLI
3. Document the remediation in the incident log

---

## 9. Environment Promotion

```mermaid
sequenceDiagram
    participant Dev as dev branch
    participant Preview as Vercel Preview
    participant Master as master branch
    participant Prod as kryptoscronos.com

    Dev->>Preview: git push dev (auto-deploy)
    Note over Preview: Test on preview URL\nwith real Redis + Resend
    Dev->>Master: PR: dev → master
    Note over Master: CI must pass\n(lint + tsc + build + audit)
    Master->>Prod: auto-deploy on merge
    Note over Prod: kryptoscronos.com live
```

---

## 10. Monitoring & Alerts

| Signal | Source | Action |
|---|---|---|
| Build failure | GitHub Actions email notification | Investigate CI logs immediately |
| Deploy failure | Vercel dashboard notification | Check Vercel build logs |
| 5xx error spike | Vercel Analytics | Check serverless function logs |
| Redis connection failure | API route 500 responses | Check Upstash dashboard status |
| Stripe webhook failures | Stripe dashboard → Developers → Webhooks | Replay failed events |
| High error rate on `/api/hint` | Anthropic console | Check API quota + rate limits |

---

## 11. Feature Flag Strategy

No feature flag system is currently in place. Features are gated by:
- **Code deployment** — features ship when the branch merges to master
- **Tier gating** — `canAccessStage()` controls stage access per user tier
- **Admin-only** — admin-specific UI components rendered only for `isAdmin === true`
- **Group visibility** — extended curriculum groups hidden from public nav (accessible via direct URL)

For future A/B testing or gradual rollouts, consider implementing a Redis-backed flag store per user.
