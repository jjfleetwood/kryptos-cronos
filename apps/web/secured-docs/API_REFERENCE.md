# API Reference — Kryptós CronOS

**Version:** v1.0.0
**Last Updated:** 2026-05-26
**Base URL:** `https://kryptoscronos.com`

All API routes are Next.js serverless functions. Session authentication uses an HMAC-signed `session_token` HttpOnly cookie. Admin routes require a separate `admin_token` cookie.

---

## Authentication

### POST /api/auth/register

Create a new user account.

**Auth:** None  
**Rate limit:** 5 requests/IP/hour

**Request:**
```json
{
  "username": "string (required, unique)",
  "email": "string (required, valid email)",
  "password": "string (required, min 8 chars)"
}
```

**Response 200:**
```json
{ "ok": true }
```
Sets `session_token` cookie (HttpOnly, Secure, 30 days).

**Error responses:**
- `400 { "error": "Missing fields" }` — any required field absent
- `409 { "error": "Username taken" }` — username already registered
- `429 { "error": "Rate limit" }` — too many registration attempts

---

### POST /api/auth/login

Authenticate an existing user.

**Auth:** None  
**Rate limit:** 5 requests/IP/15min

**Request:**
```json
{ "username": "string", "password": "string" }
```

**Response 200:**
```json
{ "ok": true }
```
Sets `session_token` (30d) and `admin_token` (24h, admin only).

**Error responses:**
- `401 { "error": "Invalid credentials" }`
- `429 { "error": "Rate limit" }`

---

### DELETE /api/auth/session

Log out — clear all auth cookies.

**Auth:** Session cookie (optional — clears regardless)

**Response 200:**
```json
{ "ok": true }
```

---

### GET /api/auth/me

Return the current user's identity.

**Auth:** Session cookie required

**Response 200:**
```json
{
  "username": "string",
  "email": "string",
  "isAdmin": false,
  "tier": "free"
}
```

**Error:** `401 { "error": "Unauthorized" }`

---

### POST /api/forgot-password

Send a password reset email.

**Auth:** None  
**Rate limit:** 3 requests/IP/15min

**Request:**
```json
{ "email": "string" }
```

**Response 200:** `{ "ok": true }` (always, to prevent email enumeration)

---

## Progress & XP

### GET /api/progress

Fetch current user's progress record from Redis.

**Auth:** Session cookie required

**Response 200:**
```json
{
  "xp": 1500,
  "coins": 300,
  "coinsSpent": 50,
  "streak": 7,
  "lastActive": "2026-05-26",
  "stages": ["bt-01", "bt-02", "stage-01"],
  "badges": ["m-xp-1k", "m-streak-3"]
}
```

---

### POST /api/progress

Award a completed stage (alternative to check-flag/check-answer for direct progress updates).

**Auth:** Session cookie required

**Request:**
```json
{ "stageId": "string" }
```

**Response 200:**
```json
{
  "ok": true,
  "xp": 1650,
  "coins": 330,
  "newBadges": [],
  "alreadyCompleted": false
}
```

---

### GET /api/progress/certificate

Stream a PDF progress report for the current user.

**Auth:** Session cookie required

**Response:** `application/pdf` binary stream  
**Content:** Username, XP, coins, stages completed, badges, streak, per-epoch breakdown

---

## Leaderboard

### GET /api/leaderboard

Fetch XP rankings.

**Auth:** None

**Query params:**
- `type` — `alltime` (default) | `daily` | `weekly`

**Response 200:**
```json
{
  "type": "alltime",
  "entries": [
    { "rank": 1, "username": "topuser", "score": 9500 },
    { "rank": 2, "username": "runner", "score": 7200 }
  ]
}
```

---

## Stage Validation

### POST /api/check-flag

Validate a CTF flag submission server-side.

**Auth:** Session cookie + tier access  
**Note:** Flag values are never present in any GET response or page HTML.

**Request:**
```json
{ "stageId": "bt-01", "flag": "FLAG{submitted_value}" }
```

**Response 200 — Correct:**
```json
{
  "success": true,
  "xp": 100,
  "coins": 20,
  "newBadges": [],
  "alreadyCompleted": false
}
```

**Response 200 — Wrong:**
```json
{ "success": false }
```

**Response 200 — Already completed:**
```json
{ "success": true, "alreadyCompleted": true }
```

**Error responses:**
- `401 { "error": "Unauthorized" }` — no session
- `403 { "error": "Pro required" }` — trial expired, free tier
- `404 { "error": "Stage not found" }` — unknown stageId

---

### POST /api/check-answer

Validate a quiz answer submission server-side.

**Auth:** Session cookie + tier access

**Request:**
```json
{ "stageId": "stage-01", "answerId": "b" }
```

**Response 200 — Correct:**
```json
{
  "correct": true,
  "xp": 100,
  "coins": 20,
  "explanation": "Explanation text shown after answer.",
  "newBadges": []
}
```

**Response 200 — Wrong:**
```json
{ "correct": false, "explanation": "Explanation text." }
```

---

## ARIA Chatbot

### POST /api/hint

Request a Socratic hint from ARIA (Claude Haiku).

**Auth:** Session cookie required  
**Rate limit:** Free tier — 1 request/30s; Pro — unlimited

**Request:**
```json
{
  "stageId": "bt-01",
  "hintIndex": 0,
  "messages": [
    { "role": "user", "content": "I'm stuck on finding the config file" }
  ]
}
```

**Response 200:**
```json
{ "message": "What directory typically holds application configuration in Linux?" }
```

**Error responses:**
- `429 { "error": "Cooldown active" }` — free tier rate limited
- `401 { "error": "Unauthorized" }`

---

## Trophies & Shop

### GET /api/trophies

Fetch the daily shop rotation and owned trophies.

**Auth:** Session cookie required

**Response 200:**
```json
{
  "daily": [
    {
      "id": "trophy-001",
      "name": "Recon Pioneer",
      "description": "First to map the network perimeter",
      "tier": "Field",
      "cost": 50,
      "emoji": "🔭",
      "claimedCount": 1240,
      "maxSupply": 50000
    }
  ],
  "owned": ["trophy-001", "trophy-007"],
  "coins": 300
}
```

Admin response includes all 51 trophies with supply counters, bypassing daily rotation.

---

### POST /api/trophies

Purchase a trophy from the daily shop.

**Auth:** Session cookie required

**Request:**
```json
{ "trophyId": "trophy-001" }
```

**Response 200:**
```json
{ "ok": true, "trophy": { "id": "trophy-001", "name": "Recon Pioneer", ... } }
```

**Error responses:**
- `400 { "error": "Insufficient coins" }`
- `400 { "error": "Not in daily rotation" }` — trophy not in user's daily 10
- `409 { "error": "Sold out" }` — supply exhausted
- `409 { "error": "Already owned" }` — duplicate purchase attempt

---

## Admin Routes

All admin routes require a valid `admin_token` HMAC cookie.

### GET /api/docs/[file]

Serve an internal secured document.

**Auth:** Admin cookie required  
**Allowed files:** All filenames in `ALLOWED_FILES` set in the route handler

**Response 200:** `text/plain; charset=utf-8` — raw markdown content

**Error responses:**
- `401 { "error": "Unauthorized" }` — no/invalid admin cookie
- `404 { "error": "Not found" }` — file not in allowlist or not on disk

---

### GET /api/admin/users

List all registered users with stats.

**Auth:** Admin cookie required

**Response 200:**
```json
{
  "users": [
    {
      "username": "string",
      "email": "string",
      "tier": "free",
      "skin": "standard",
      "createdAt": "2026-05-15T10:00:00Z",
      "xp": 1500,
      "coins": 300,
      "stages": 12,
      "badges": 3,
      "streak": 7
    }
  ]
}
```

---

### POST /api/admin/set-tier

Manually set a user's subscription tier.

**Auth:** Admin cookie required

**Request:**
```json
{ "username": "string", "tier": "pro" | "free" }
```

**Response 200:** `{ "ok": true }`

---

### POST /api/admin/set-skin

Set a user's content skin/age level.

**Auth:** Admin cookie required

**Request:**
```json
{ "username": "string", "skin": "standard" | "youth" | "mature" }
```

**Response 200:** `{ "ok": true }`

---

### GET /api/admin/cms/stage/[stageId]

Fetch any admin CMS override for a stage.

**Auth:** Admin cookie required

**Response 200:**
```json
{ "override": { "title": "string", "description": "string" } | null }
```

---

### POST /api/admin/cms/stage/[stageId]

Save a CMS override for a stage.

**Auth:** Admin cookie required

**Request:**
```json
{ "title": "string", "description": "string" }
```

**Response 200:** `{ "ok": true }`

---

## Payment & Webhooks

### POST /api/stripe/checkout

Create a Stripe Checkout session for Pro subscription.

**Auth:** Session cookie required

**Request:**
```json
{ "plan": "monthly" | "yearly" }
```

**Response 200:**
```json
{ "url": "https://checkout.stripe.com/c/pay/cs_live_..." }
```

The client should redirect to this URL.

---

### POST /api/webhooks/stripe

Receive Stripe lifecycle events.

**Auth:** `Stripe-Signature` header (HMAC-SHA256, `STRIPE_WEBHOOK_SECRET`)

**Handled events:**

| Event | Redis action |
|---|---|
| `checkout.session.completed` | `HSET user:{username} tier pro` |
| `customer.subscription.deleted` | `HSET user:{username} tier free` |

**Response:** Always `200 { "received": true }` (enables Stripe retry on failure)

---

## Feedback & NDA

### POST /api/feedback

Submit user feedback.

**Auth:** None (public)

**Request:**
```json
{ "message": "string", "username": "string (optional)", "email": "string (optional)" }
```

**Response 200:** `{ "ok": true }`

---

### GET /api/nda

List all NDA signatories.

**Auth:** Admin cookie required

**Response 200:**
```json
{
  "signatories": [
    { "email": "string", "username": "string", "timestamp": "string" }
  ]
}
```

---

### POST /api/nda

Record an NDA acceptance.

**Auth:** None (NDA token in body)

**Request:**
```json
{ "token": "string", "email": "string" }
```

**Response 200:** `{ "ok": true }`
