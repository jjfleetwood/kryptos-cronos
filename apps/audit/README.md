# @kryptos/audit — private Agentic Audit deployment

**Separate Vercel project, own subdomain, OWNER-ONLY. Not part of the public Kryptós product.**
Holds the Agentic Audit library (the founder's personal job-related audit work), kept off the main site for IP/COI reasons. See `../../docs/AUDIT_EXTRACTION.md` and `../../docs/legal/`.

## Status — WIP (shell only)
Scaffold built + type-checks. Still to migrate from `apps/web`: the `/audit` routes, the
`audit-registry` / `audit-quiz-data` / `audit-generated` data, and the `public/audit-code`
+ `public/mcp-templates/audit-*` downloads — and to **untangle** the audit modules from the
main app's gameplay engine (they're imported by check-answer/check-flag/server-progress/
decks/export-pptx/stages-[stageId]).

## Gate
`src/proxy.ts` requires a valid `admin_token` cookie (shared `ADMIN_SECRET` with the main
app), optionally restricted to `AUDIT_ALLOWLIST`. Unauthorized → bare 404. `noindex` everywhere.

## Founder infra (cannot be done from here)
1. New Vercel project, **Root Directory = `apps/audit`**, "Include files outside root" ON.
2. Add a subdomain (e.g. `audit.<yourdomain>`); DNS CNAME.
3. Env: `ADMIN_SECRET` (same as main app), optional `AUDIT_ALLOWLIST=you`, plus any data env the
   migrated pages need.
4. For the admin_token cookie to reach the subdomain, set it `Domain=.<yourdomain>` on the main
   app, or add a tiny login on this app that mints a token.
