# Technical Specifications — Kryptós CronOS

**Version:** v1.0.0
**Last Updated:** 2026-05-26
**Status:** Current

---

## 1. Type System Overview

All types live in `src/types.ts` (shared) or colocated with their modules.

### 1.1 Core Stage Types

```typescript
type StageCategory =
  | "security" | "network" | "web" | "crypto" | "forensics" | "osint"
  | "audit" | "compliance" | "ai" | "quantum" | "arts" | "lifestyle"
  | "sports" | "travel" | "language";

type StageDifficulty = "beginner" | "intermediate" | "advanced" | "expert";

interface CtfFragment {
  id: string;         // unique within stage
  trigger: string;    // command string or file path that reveals fragment
  content: string;    // the fragment text shown on trigger
  hint?: string;      // optional inline hint
}

interface CtfConfig {
  flag: string;                    // server-only; stripped before client
  initialFiles: Record<string, string>;  // virtual filesystem
  fragments?: CtfFragment[];       // multi-step collection
  hints: string[];                 // up to 3 progressive hints
  extraCommands?: Record<string, string>; // additional terminal commands
}

interface QuizOption {
  id: string;
  text: string;
}

interface QuizConfig {
  question: string;
  options: QuizOption[];
  correctId: string;               // server-only; stripped before client
  hints: string[];
  explanation: string;             // shown after answer submitted
}

interface StageConfig {
  id: string;                      // unique slug, e.g. "bt-01"
  title: string;
  description: string;
  difficulty: StageDifficulty;
  category: StageCategory;
  xp: number;
  coins: number;
  type: "ctf" | "quiz";
  ctf?: CtfConfig;                 // present when type === "ctf"
  quiz?: QuizConfig;               // present when type === "quiz"
  info?: StageInfo;                // learning content
  skillsAcquired?: string[];       // shown in success modal
  downloads?: StageDownload[];     // MCP template links
}

interface EpochConfig {
  id: string;                      // e.g. "first-journey"
  displayName: string;
  description: string;
  stages: string[];                // ordered stageId array
  color: string;                   // Tailwind color class
  icon: string;                    // emoji
  unlockRequirement?: string;      // epochId that must be completed first
}
```

### 1.2 User & Progress Types

```typescript
interface UserRecord {
  passwordHash: string;
  email: string;
  createdAt: string;               // ISO 8601
  tier: "free" | "pro";
  skin: "standard" | "youth" | "mature";
}

interface ProgressRecord {
  xp: number;
  coins: number;
  coinsSpent: number;
  streak: number;
  lastActive: string;              // ISO date "YYYY-MM-DD"
  stages: string[];                // completed stageIds
  badges: string[];                // earned badgeIds
}

interface LeaderboardEntry {
  username: string;
  score: number;                   // XP total
  rank: number;
}
```

### 1.3 Trophy Types

```typescript
type TrophyTier = "Field" | "Enlisted" | "Commended" | "Decorated"
                | "Distinguished" | "Elite" | "Legendary" | "Apex";

interface Trophy {
  id: string;
  name: string;
  description: string;
  tier: TrophyTier;
  maxSupply: number;
  cost: number;                    // coins
  emoji: string;
  rarity: string;                  // display label
}
```

---

## 2. API Specifications

### 2.1 POST /api/auth/register

**Auth:** None  
**Rate limit:** 5/IP/hour

**Request body:**
```json
{ "username": "string", "email": "string", "password": "string" }
```

**Responses:**
| Status | Body | Condition |
|---|---|---|
| 200 | `{ "ok": true }` | Success — sets `session_token` cookie |
| 400 | `{ "error": "Missing fields" }` | Any field absent |
| 409 | `{ "error": "Username taken" }` | `user:{username}` exists in Redis |
| 429 | `{ "error": "Rate limit" }` | IP exceeded 5 registrations/hour |
| 500 | `{ "error": "Server error" }` | Redis or crypto failure |

**Side effects:**
- `HSET user:{username}` with passwordHash, email, createdAt, tier: free, skin: standard
- `SET session_token` cookie (HMAC-signed, HttpOnly, 30d)
- Send welcome email via Resend to user
- Send admin alert to `hello@kryptoscronos.com`

---

### 2.2 POST /api/auth/login

**Auth:** None  
**Rate limit:** 5/IP/15min

**Request body:**
```json
{ "username": "string", "password": "string" }
```

**Responses:**
| Status | Body | Condition |
|---|---|---|
| 200 | `{ "ok": true }` | Success — sets cookies |
| 400 | `{ "error": "Missing fields" }` | |
| 401 | `{ "error": "Invalid credentials" }` | Wrong username or password |
| 429 | `{ "error": "Rate limit" }` | |

**Cookie behavior:** Sets `session_token` (30d) + `admin_token` (24h, admin only).

---

### 2.3 GET /api/auth/me

**Auth:** Session cookie required

**Responses:**
| Status | Body |
|---|---|
| 200 | `{ "username": "string", "email": "string", "isAdmin": boolean, "tier": "free"|"pro" }` |
| 401 | `{ "error": "Unauthorized" }` |

---

### 2.4 GET/POST /api/progress

**Auth:** Session cookie required

**GET response:**
```json
{
  "xp": 1500,
  "coins": 300,
  "coinsSpent": 50,
  "streak": 7,
  "lastActive": "2026-05-26",
  "stages": ["bt-01", "bt-02"],
  "badges": ["m-xp-1k", "m-streak-3"]
}
```

**POST request body:**
```json
{ "stageId": "string" }
```

**POST response:**
```json
{
  "ok": true,
  "xp": 1750,
  "coins": 350,
  "newBadges": ["m-xp-1k"],
  "alreadyCompleted": false
}
```

---

### 2.5 POST /api/check-flag

**Auth:** Session cookie + tier access  
**Stage-secrets never exposed in GET responses**

**Request body:**
```json
{ "stageId": "string", "flag": "string" }
```

**Responses:**
| Status | Body | Condition |
|---|---|---|
| 200 | `{ "success": true, "xp": number, "coins": number, "newBadges": string[] }` | Correct flag |
| 200 | `{ "success": false }` | Wrong flag |
| 200 | `{ "success": true, "alreadyCompleted": true }` | Already solved |
| 401 | `{ "error": "Unauthorized" }` | No session |
| 403 | `{ "error": "Pro required" }` | Trial expired |
| 404 | `{ "error": "Stage not found" }` | Unknown stageId |

---

### 2.6 POST /api/check-answer

**Auth:** Session cookie + tier access

**Request body:**
```json
{ "stageId": "string", "answerId": "string" }
```

**Responses:**
| Status | Body | Condition |
|---|---|---|
| 200 | `{ "correct": true, "xp": number, "coins": number, "explanation": "string" }` | Correct answer |
| 200 | `{ "correct": false, "explanation": "string" }` | Wrong answer |
| 401 | `{ "error": "Unauthorized" }` | |
| 403 | `{ "error": "Pro required" }` | |

---

### 2.7 POST /api/hint

**Auth:** Session cookie  
**Rate limit:** Free tier — 1 hint/30s; Pro — unlimited

**Request body:**
```json
{
  "stageId": "string",
  "messages": [{ "role": "user"|"assistant", "content": "string" }],
  "hintIndex": number
}
```

**Responses:**
| Status | Body |
|---|---|
| 200 | `{ "message": "string" }` (Socratic hint from Claude Haiku) |
| 429 | `{ "error": "Cooldown" }` |
| 401 | `{ "error": "Unauthorized" }` |

---

### 2.8 GET /api/leaderboard

**Auth:** None

**Query params:** `type=alltime|daily|weekly`

**Response:**
```json
{
  "entries": [
    { "rank": 1, "username": "string", "score": 9500 }
  ],
  "type": "alltime"
}
```

---

### 2.9 GET/POST /api/trophies

**Auth:** Session cookie

**GET response:**
```json
{
  "daily": [{ "id": "string", "name": "string", "tier": "string", "cost": 50, "claimedCount": 12, "maxSupply": 2500 }],
  "owned": ["trophy-id-1", "trophy-id-2"],
  "coins": 300
}
```

**POST request body:**
```json
{ "trophyId": "string" }
```

**POST responses:**
| Status | Body | Condition |
|---|---|---|
| 200 | `{ "ok": true, "trophy": Trophy }` | Success |
| 400 | `{ "error": "Insufficient coins" }` | |
| 400 | `{ "error": "Not in daily rotation" }` | Trophy not in user's daily 10 |
| 409 | `{ "error": "Sold out" }` | Supply exhausted |
| 409 | `{ "error": "Already owned" }` | Duplicate purchase |

---

### 2.10 POST /api/stripe/checkout

**Auth:** Session cookie

**Request body:**
```json
{ "plan": "monthly" | "yearly" }
```

**Response:**
```json
{ "url": "https://checkout.stripe.com/..." }
```

---

### 2.11 POST /api/webhooks/stripe

**Auth:** Stripe-Signature header (HMAC-SHA256)

**Events handled:**
| Event | Action |
|---|---|
| `checkout.session.completed` | `HSET user:{username} tier pro` |
| `customer.subscription.deleted` | `HSET user:{username} tier free` |

**Response:** Always `{ "received": true }` with 200 (Stripe retry safety)

---

## 3. Environment Variable Specifications

| Variable | Required | Format | Used By |
|---|---|---|---|
| `UPSTASH_REDIS_REST_URL` | Yes | `https://...upstash.io` | `src/lib/redis.ts` |
| `UPSTASH_REDIS_REST_TOKEN` | Yes | Upstash token string | `src/lib/redis.ts` |
| `RESEND_API_KEY` | Yes | `re_...` | Email routes |
| `ADMIN_EMAIL` | Yes | Email address | Registration alert |
| `ADMIN_USERNAME` | Yes | Username string | Admin detection |
| `ADMIN_SECRET` | Yes | ≥32 char random string | HMAC admin cookie signing |
| `SESSION_SECRET` | Yes | ≥32 char random string | HMAC session cookie signing |
| `ANTHROPIC_API_KEY` | Yes | `sk-ant-...` | `/api/hint` |
| `STRIPE_SECRET_KEY` | Yes | `sk_live_...` or `sk_test_...` | Stripe API calls |
| `STRIPE_WEBHOOK_SECRET` | Yes | `whsec_...` | Webhook signature verification |
| `STRIPE_PRO_MONTHLY_PRICE_ID` | Yes | `price_...` | Checkout session |
| `STRIPE_PRO_YEARLY_PRICE_ID` | Yes | `price_...` | Checkout session |

---

## 4. Curriculum Data Specifications

### Epoch Registration (`src/data/stages.ts`)

Every epoch must be registered in `stages.ts` with:
1. An `EpochConfig` object exported from its data file
2. Its stages spread into the `allStages` array
3. Import added to `stages.ts`

### Stage ID Conventions

| Epoch | Pattern | Example |
|---|---|---|
| Our First Journey | `bt-{NN}` | `bt-01` through `bt-30` |
| Foundations | `stage-{NN}` | `stage-01` through `stage-12` |
| Cisco Core CVEs | `stage-m{NN}` | `stage-m01` through `stage-m12` |
| Tech Audit | `audit-{NN}` | `audit-01` through `audit-12` |
| Tech Audit Technical | `audit-t{NN}` | `audit-t01` through `audit-t12` |
| Tech Audit Agentic | `audit-a{NN}` | `audit-a01` through `audit-a12` |
| Continuous Monitoring | `audit-cm{NN}` | `audit-cm01` through `audit-cm12` |
| MITRE ATT&CK | `mitre-{NN}` | `mitre-01` through `mitre-12` |
| MITRE ATLAS | `atlas-{NN}` | `atlas-01` through `atlas-12` |
| OWASP LLM | `llm-{NN}` | `llm-01` through `llm-12` |
| Paris in July | `paris-{NN}` | `paris-01` through `paris-20` |
| French Basics | `french-{NN}` | `french-01` through `french-20` |

---

## 5. XP & Coin Scale

| Stage Type | Typical XP | Typical Coins |
|---|---|---|
| Beginner CTF | 100 | 20 |
| Intermediate CTF | 150–200 | 30–40 |
| Advanced CTF | 250–300 | 50–60 |
| Expert CTF | 400–500 | 80–100 |
| Quiz (any difficulty) | 50–150 | 10–30 |

Milestone badge XP thresholds: 1k, 5k, 10k, 25k, 50k.  
Streak badge thresholds: 3, 7, 30 days.

---

## 6. Mermaid Diagram Support

The `DocsViewer` component detects `language-mermaid` code blocks and renders them via `MermaidDiagram.tsx`. The component:

- Dynamically imports the `mermaid` package (client-side only, not bundled in SSR)
- Uses `mermaid.render()` with a unique DOM ID per diagram
- Applies a dark theme matching the admin UI color palette
- Handles render errors gracefully — falls back to displaying the raw diagram code
- SVG output is injected into a container div and styled for responsive display

All architecture documents in the Architecture suite use Mermaid for visual diagrams.
