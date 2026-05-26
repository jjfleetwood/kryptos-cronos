# Data Diagram — Kryptós CronOS

**Version:** v1.0.0
**Last Updated:** 2026-05-26
**Status:** Current

All persistent state lives in Upstash Redis. There is no relational database. The diagrams below model logical entities, Redis key schemas, data flow, and session/XP update sequences.

---

## Entity Relationship Model

```mermaid
erDiagram
    USER {
        string username PK "Redis hash: user:{username}"
        string passwordHash "PBKDF2-SHA256 100k iters"
        string email
        string createdAt "ISO 8601"
        string tier "free or pro"
        string skin "standard or youth or mature"
    }
    PROGRESS {
        string username FK "Redis hash: progress:{username}"
        number xp "lifetime XP"
        number coins "spendable coins"
        number streak "current daily streak"
        string lastActive "ISO date string"
        json stages "completed stageId array"
        json badges "earned badgeId array"
    }
    LEADERBOARD_ENTRY {
        string listType "global or daily or weekly"
        string username FK "sorted set member"
        number score "XP score"
    }
    TROPHY_STOCK {
        string trophyId PK "Redis key: trophy:claimed:{id}"
        number claimedCount "atomic INCR counter"
        number maxSupply "defined in trophies.ts"
    }
    USER_TROPHY {
        string username FK "Redis set: user:trophies:{username}"
        string trophyId FK "member of the set"
    }
    NDA_RECORD {
        string email PK "Redis hash: nda:{email}"
        string username
        string timestamp
    }
    RATE_LIMIT {
        string key PK "rl:{type}:{ip}"
        number count "auto-expires via TTL"
    }
    PASSWORD_RESET {
        string token PK "pwreset:{token}"
        string username "expires 1 hour"
    }

    USER ||--|| PROGRESS : "has one"
    USER ||--o{ LEADERBOARD_ENTRY : "scored in"
    USER ||--o{ USER_TROPHY : "owns"
    TROPHY_STOCK ||--o{ USER_TROPHY : "claimed by"
    USER ||--o| NDA_RECORD : "may sign"
```

---

## Redis Key Inventory

| Key Pattern | Type | TTL | Purpose |
|---|---|---|---|
| `user:{username}` | Hash | None | User record — auth fields + profile |
| `progress:{username}` | Hash | None | XP, coins, stages, badges, streak |
| `leaderboard` | Sorted Set | None | All-time XP ranking |
| `lb:d:{YYYY-MM-DD}` | Sorted Set | 8 days | Daily XP ranking |
| `lb:w:{YYYY-MM-DD}` | Sorted Set | 35 days | Weekly XP ranking |
| `trophy:claimed:{id}` | String | None | Atomic supply reservation counter |
| `user:trophies:{username}` | Set | None | Owned trophy IDs |
| `nda:{email}` | Hash | None | NDA signatory record |
| `nda:token:{token}` | String | 7 days | NDA verification token |
| `pwreset:{token}` | String | 1 hour | Password reset token |
| `rl:forgot:{ip}` | String | 15 min | Forgot-password rate limit (3/15min) |
| `rl:login:{ip}` | String | 15 min | Login rate limit (5/15min) |
| `rl:register:{ip}` | String | 1 hour | Registration rate limit (5/hr) |
| `rl:hint:{username}` | String | 30 sec | ARIA hint cooldown (free tier) |
| `feedback:{timestamp}` | Hash | 90 days | User feedback submissions |

---

## System Data Flow

```mermaid
flowchart TD
    Browser["Browser / Client"]

    subgraph Edge["Vercel Edge — proxy.ts"]
        NonceGen["CSP Nonce Generation\nper-request"]
        AdminGuard["Admin Cookie Guard\nadmin_token HMAC"]
    end

    subgraph App["Next.js 16 App Router"]
        AuthRoutes["/api/auth/*\nlogin · register · logout · me"]
        ProgressRoute["/api/progress\nGET + POST"]
        FlagRoute["/api/check-flag\nCTF Validation"]
        AnswerRoute["/api/check-answer\nQuiz Validation"]
        HintRoute["/api/hint\nARIA Chatbot"]
        TrophyRoute["/api/trophies\nShop + Inventory"]
        StripeRoutes["/api/stripe/checkout\n/api/webhooks/stripe"]
        LeaderRoute["/api/leaderboard"]
        CertRoute["/api/progress/certificate\nPDF Generation"]
    end

    subgraph Redis["Upstash Redis"]
        UserHash["user:{username}\nHash — auth + profile"]
        ProgressHash["progress:{username}\nHash — XP + stages + coins"]
        LBSets["leaderboard\nlb:d:* · lb:w:*\nSorted Sets"]
        TrophyKeys["trophy:claimed:{id}\nuser:trophies:{u}"]
        RateLimits["rl:{type}:{ip}\nStrings with TTL"]
    end

    subgraph External["External Services"]
        Anthropic["Anthropic API\nClaude Haiku-4-5"]
        Resend["Resend Email"]
        Stripe["Stripe Payments"]
    end

    Browser -->|HTTPS| Edge
    Edge -->|x-nonce header| App
    AuthRoutes <-->|HMAC cookie| Browser
    AuthRoutes <--> UserHash
    AuthRoutes --> Resend
    ProgressRoute <--> ProgressHash
    ProgressRoute --> LBSets
    FlagRoute --> ProgressHash
    FlagRoute --> LBSets
    AnswerRoute --> ProgressHash
    HintRoute --> Anthropic
    HintRoute --> RateLimits
    TrophyRoute <--> TrophyKeys
    TrophyRoute <--> ProgressHash
    StripeRoutes <--> Stripe
    StripeRoutes --> UserHash
    LeaderRoute --> LBSets
    CertRoute --> ProgressHash
```

---

## Authentication & Session Flow

```mermaid
sequenceDiagram
    participant B as Browser
    participant E as proxy.ts Edge
    participant A as Auth API
    participant R as Redis

    B->>E: POST /api/auth/login
    E->>A: Forward + x-nonce header
    A->>R: HGETALL user:{username}
    R-->>A: {passwordHash, tier, ...}
    A->>A: PBKDF2-SHA256 verify (100k iters)
    A->>A: HMAC-SHA256 sign session token
    A-->>B: Set-Cookie: session_token (HttpOnly 30d)

    Note over B,E: Subsequent admin request
    B->>E: GET /admin
    E->>E: Verify admin_token HMAC
    E-->>B: 302 /stages (invalid cookie)

    Note over B,A: Auth me check
    B->>A: GET /api/auth/me
    A->>A: Verify session_token HMAC
    A->>R: HGETALL user:{username}
    R-->>A: user record
    A-->>B: {username, email, isAdmin, tier}
```

---

## XP Award & Leaderboard Update Flow

```mermaid
sequenceDiagram
    participant C as Client
    participant S as Stage API
    participant R as Redis

    C->>S: POST /api/check-flag {stageId, flag}
    S->>S: Verify session_token cookie
    S->>S: canAccessStage() — tier check
    S->>S: Validate flag against stage-flags.ts
    S->>R: HGET progress:{username} stages
    R-->>S: existing completed stages
    S->>S: Check deduplication
    S->>R: HSET progress:{username} {stages, xp, coins, badges}
    S->>R: ZADD leaderboard xp username
    S->>R: ZADD lb:d:{today} xp username
    S->>R: ZADD lb:w:{weekStart} xp username
    S-->>C: {success, xp, coins, badges, newBadges}
```

---

## Trophy Purchase Flow

```mermaid
sequenceDiagram
    participant C as Client
    participant T as /api/trophies POST
    participant R as Redis

    C->>T: POST {trophyId}
    T->>T: Verify session + tier
    T->>R: HGET progress:{username}
    R-->>T: coins balance
    T->>T: Verify trophyId in daily rotation (non-admin)
    T->>T: Check cost vs coins balance
    T->>R: INCR trophy:claimed:{id}
    R-->>T: new count
    T->>T: Compare count vs maxSupply
    T->>R: SADD user:trophies:{username} trophyId
    T->>R: HSET progress:{username} coins, coinsSpent
    T-->>C: {success, trophy}
```

---

## Progress Hash Schema

The `progress:{username}` hash stores all gameplay state for a user. Fields:

| Field | Type | Notes |
|---|---|---|
| `xp` | number string | Lifetime XP total |
| `coins` | number string | Spendable coin balance |
| `coinsSpent` | number string | All-time coins spent |
| `streak` | number string | Current daily login streak |
| `lastActive` | string | ISO date of last stage completion |
| `stages` | JSON string | `string[]` of completed stageIds |
| `badges` | JSON string | `string[]` of earned badgeIds |

---

## Badge ID Conventions

| Badge ID | Trigger |
|---|---|
| `m-xp-1k` | 1,000 XP milestone |
| `m-xp-5k` | 5,000 XP milestone |
| `m-xp-10k` | 10,000 XP milestone |
| `m-streak-3` | 3-day streak |
| `m-streak-7` | 7-day streak |
| `m-streak-30` | 30-day streak |

Badges are awarded server-side in `server-progress.ts` `awardStageInRedis()` and stored in `progress:{username}` badges array.
