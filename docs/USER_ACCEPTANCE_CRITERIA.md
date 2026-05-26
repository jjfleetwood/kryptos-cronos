# User Acceptance Criteria — Kryptós CronOS

**Version:** v1.0.0
**Last Updated:** 2026-05-26
**Status:** Current

Each criterion follows the format: **Given** (precondition) / **When** (action) / **Then** (observable outcome). All server-side validations are verified by inspecting API responses, not client state.

---

## 1. Authentication

### UAC-AUTH-01 — Successful Registration
**Given** a user visits the registration form  
**When** they submit a unique username, valid email, and password (≥8 chars)  
**Then** a session cookie is set, the user is redirected to `/stages`, and their `user:{username}` hash exists in Redis with `tier: free` and `skin: standard`

### UAC-AUTH-02 — Duplicate Username Rejected
**Given** a username already exists in Redis  
**When** a registration attempt is made with that username  
**Then** the API returns 409 with `{ error: "Username taken" }` and no new Redis key is created

### UAC-AUTH-03 — Successful Login
**Given** a registered user with correct credentials  
**When** they submit the login form  
**Then** an HMAC-signed `session_token` HttpOnly cookie is issued and `/api/auth/me` returns `{ username, email, isAdmin, tier }`

### UAC-AUTH-04 — Wrong Password Rejected
**Given** a registered user  
**When** they submit an incorrect password  
**Then** the API returns 401; no cookie is set; rate limit counter increments in Redis

### UAC-AUTH-05 — Login Rate Limit
**Given** an IP that has made 5 failed login attempts within 15 minutes  
**When** a 6th login attempt is made from that IP  
**Then** the API returns 429 before any password comparison occurs

### UAC-AUTH-06 — Logout
**Given** a logged-in user  
**When** they click Logout  
**Then** both `session_token` and `admin_token` cookies are cleared; `/api/auth/me` returns 401

### UAC-AUTH-07 — Password Reset Flow
**Given** a registered email address  
**When** the user submits the forgot-password form  
**Then** a reset email is sent via Resend; `pwreset:{token}` key created in Redis with 1-hour TTL; token allows password update exactly once

### UAC-AUTH-08 — Admin Cookie Scope
**Given** a non-admin user session  
**When** they navigate to `/admin`  
**Then** `proxy.ts` returns 302 to `/stages` before the page renders

---

## 2. Stage Progression

### UAC-STAGE-01 — Stage Map Displays All Epoch Groups
**Given** any authenticated user  
**When** they visit `/stages`  
**Then** all public epoch groups are visible (Core Security, Tech Audit, Threat Frameworks, AI Security, Quantum Era, Defend the Enterprise); extended curriculum groups (Crafts, Driving, Baseball, Travel) are hidden

### UAC-STAGE-02 — CTF Flag Submission — Correct Flag
**Given** a user with active access on a CTF stage  
**When** they submit the correct flag via the terminal `submit` command  
**Then** `/api/check-flag` returns `{ success: true, xp, coins, newBadges }`; the stageId appears in `progress:{username}` stages array; leaderboard sorted sets are updated

### UAC-STAGE-03 — CTF Flag Submission — Wrong Flag
**Given** a user on a CTF stage  
**When** they submit an incorrect flag  
**Then** `/api/check-flag` returns `{ success: false }`; Redis is unchanged; XP is not awarded

### UAC-STAGE-04 — Stage XP Deduplication
**Given** a user who has already completed a stage  
**When** they submit the correct flag again  
**Then** `/api/check-flag` returns `{ success: true, alreadyCompleted: true }`; XP is not awarded a second time; leaderboard score is unchanged

### UAC-STAGE-05 — Quiz Correct Answer
**Given** a user on a quiz stage  
**When** they select the correct answer  
**Then** `/api/check-answer` returns `{ correct: true, xp, coins }`; progress and leaderboard updated

### UAC-STAGE-06 — Quiz Wrong Answer
**Given** a user on a quiz stage  
**When** they select an incorrect answer  
**Then** `/api/check-answer` returns `{ correct: false }`; no XP awarded

### UAC-STAGE-07 — Flag Never in Client Payload
**Given** a stage page with a CTF challenge  
**When** the page loads  
**Then** the flag value does not appear in the HTML source, the network response for the stage page, or any client-side JavaScript bundle

### UAC-STAGE-08 — Multi-Step Fragment Collection
**Given** a CTF stage with multiple flag fragments  
**When** the user runs `assemble` before collecting all fragments  
**Then** the terminal responds "Collect all fragments first"; no flag is shown  
**When** all fragments are collected and `assemble` is run  
**Then** the full flag is revealed and can be submitted

---

## 3. Pro Tier & Paywall

### UAC-PRO-01 — Trial Access
**Given** a user whose `createdAt` is within the last 7 days  
**When** they attempt to access any stage  
**Then** full access is granted without hitting the ProPaywall

### UAC-PRO-02 — Trial Expired — ProPaywall Shown
**Given** a user whose `createdAt` is more than 7 days ago and `tier` is `free`  
**When** they navigate to a stage page  
**Then** the `ProPaywall` component is shown instead of the stage content; no CTF/quiz config is rendered

### UAC-PRO-03 — Trial Expired — API Blocks
**Given** the same trial-expired free user  
**When** they POST directly to `/api/check-flag` or `/api/check-answer`  
**Then** the API returns 403; no flag/answer validation occurs

### UAC-PRO-04 — Stripe Checkout Redirect
**Given** a trial-expired user on the ProPaywall  
**When** they click Upgrade for monthly or yearly plan  
**Then** a Stripe Checkout Session is created and the user is redirected to the Stripe-hosted payment page

### UAC-PRO-05 — Subscription Activation
**Given** a user who completes Stripe payment  
**When** the `checkout.session.completed` webhook fires  
**Then** `HSET user:{username} tier pro` is executed; subsequent stage access is granted

### UAC-PRO-06 — Subscription Cancellation
**Given** a Pro user who cancels their subscription  
**When** the `customer.subscription.deleted` webhook fires  
**Then** `HSET user:{username} tier free` is executed; ProPaywall is shown on next stage access

### UAC-PRO-07 — Admin Bypass
**Given** the admin user (matching `ADMIN_USERNAME`)  
**When** they access any stage regardless of tier  
**Then** full access is granted; ProPaywall is never shown

---

## 4. Leaderboard

### UAC-LB-01 — Leaderboard Displays Top Users
**Given** any visitor  
**When** they visit `/leaderboard`  
**Then** the top users are shown with XP and rank; daily, weekly, and all-time tabs are available

### UAC-LB-02 — Leaderboard Updates After Stage Completion
**Given** a user completes a new stage  
**When** they visit `/leaderboard`  
**Then** their XP increase is reflected in all three leaderboard tabs

### UAC-LB-03 — Leaderboard XP Not Manually Inflatable
**Given** a user who attempts to POST a custom XP value to `/api/progress`  
**When** the API processes the request  
**Then** the server ignores any client-supplied XP value; only the server-side `STAGE_XP` map determines the award amount

---

## 5. Trophy & Shop System

### UAC-TROPHY-01 — Daily Shop Rotation
**Given** a logged-in user  
**When** they visit `/shop` → Treasures tab  
**Then** exactly 10 trophies are shown; the selection is deterministic for the same user on the same UTC day

### UAC-TROPHY-02 — Trophy Purchase — Sufficient Coins
**Given** a user with enough coins and a valid daily shop trophy  
**When** they click Buy  
**Then** the trophy is added to `user:trophies:{username}`; `trophy:claimed:{id}` increments atomically; user's coin balance decreases

### UAC-TROPHY-03 — Trophy Purchase — Insufficient Coins
**Given** a user with fewer coins than the trophy cost  
**When** they click Buy  
**Then** the API returns 400; no Redis state changes

### UAC-TROPHY-04 — Supply Exhaustion
**Given** a trophy that has reached its `maxSupply` claimed count  
**When** any user attempts to purchase it  
**Then** the API returns 409; `trophy:claimed:{id}` is atomically decremented back; the trophy is marked Sold Out

### UAC-TROPHY-05 — Owned Trophy Collection
**Given** a user who owns trophies  
**When** they visit `/trophies`  
**Then** all owned trophies are displayed with name, tier, and description

---

## 6. ARIA Chatbot

### UAC-ARIA-01 — Hint Available
**Given** a user on any stage  
**When** they open the ARIA panel and send a message  
**Then** Claude Haiku returns a Socratic hint that guides without revealing the flag

### UAC-ARIA-02 — ARIA Never Reveals Flag
**Given** a user who asks ARIA "what is the flag?"  
**When** the response is returned  
**Then** the response does not contain the literal flag value (enforced by system prompt constraints)

### UAC-ARIA-03 — Rate Limiting (Free Tier)
**Given** a free-tier user who has used ARIA within the last 30 seconds  
**When** they send another message  
**Then** the API returns 429; `rl:hint:{username}` key exists in Redis

### UAC-ARIA-04 — No Rate Limit (Pro Tier)
**Given** a Pro user  
**When** they send messages to ARIA in rapid succession  
**Then** all messages are processed without rate limiting; Pro users have unlimited ARIA access

---

## 7. Admin Dashboard

### UAC-ADMIN-01 — User Table
**Given** the admin user  
**When** they visit `/admin`  
**Then** a table of all registered users is displayed with username, email, tier, XP, coins, stages, badges, streak

### UAC-ADMIN-02 — Tier Toggle
**Given** the admin user on the user table  
**When** they toggle a user's tier  
**Then** `/api/admin/set-tier` sets `tier: pro` or `tier: free` in Redis; the change takes effect on the user's next stage access

### UAC-ADMIN-03 — Docs Viewer
**Given** the admin user  
**When** they navigate to `/admin/docs`  
**Then** the DocsViewer loads and displays all documents in the DOCS array; Mermaid diagrams in docs render as visual SVG diagrams

### UAC-ADMIN-04 — Investor Metrics Panel
**Given** the admin user  
**When** they view the Investor Metrics panel  
**Then** WAU, 7-day return rate, avg stages/user, user funnel, tier breakdown, and per-epoch completion rates are shown with accurate Redis-sourced data

---

## 8. Security

### UAC-SEC-01 — CSP Nonce
**Given** any page load  
**When** the HTML is inspected  
**Then** all inline scripts have a `nonce` attribute; the `Content-Security-Policy` header contains `nonce-{value}` and no `unsafe-inline` in script-src

### UAC-SEC-02 — Secured Docs Not Publicly Accessible
**Given** any unauthenticated user  
**When** they attempt to directly access a URL under `secured-docs/`  
**Then** the file is not served (no static route exists); the only access path is `/api/docs/{file}` with a valid admin cookie

### UAC-SEC-03 — HSTS Header
**Given** any HTTPS response from kryptoscronos.com  
**When** the response headers are inspected  
**Then** `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` is present

### UAC-SEC-04 — No Credentials in localStorage
**Given** any authenticated user  
**When** `localStorage` is inspected in devtools  
**Then** no password, session token, or admin secret is stored in localStorage
