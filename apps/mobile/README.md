# Kryptós CronOS — Mobile App

The iOS/Android app, part of the Kryptós CronOS Turborepo monorepo. Built with
**Expo (SDK 56) + Expo Router + React Native**. It talks to the production API at
`kryptoscronos.com` and shares content/types via the workspace packages — it does
**not** have its own backend.

- **Shared packages:** `@kryptos/core` (stage data + types), `@kryptos/api-client`
  (typed client; bearer-token auth).
- **Auth:** Supabase (RN SDK) → access token sent as `Authorization: Bearer` to the API.
- **Native features:** push notifications (`expo-notifications`) and IAP (`react-native-purchases`)
  — these require a **dev build**, not Expo Go.

## Prerequisites

- Node 20+ and npm.
- A physical device (or simulator) with the **Expo Go** app for quick UI work, **or**
  an EAS **dev build** to exercise push + in-app purchases (those native modules don't
  run in Expo Go).

## 1. Install (from the monorepo root)

```bash
cd <repo-root>          # C:\Users\Ajax\Projects\cyberquest
npm install             # installs all workspaces (web + mobile + packages)
```

> Install from the **repo root**, not `apps/mobile` — this is an npm-workspaces monorepo
> and Metro is configured (`metro.config.js`) to resolve `@kryptos/*` from the workspace root.

## 2. Configure env

```bash
cd apps/mobile
cp .env.example .env
```

Fill in (`EXPO_PUBLIC_*` values are inlined into the app at build time; the Supabase
anon key and RevenueCat SDK keys are public and safe to ship):

| Var | Purpose |
|---|---|
| `EXPO_PUBLIC_SUPABASE_URL` / `EXPO_PUBLIC_SUPABASE_ANON_KEY` | Supabase auth (same project as the web app) |
| `EXPO_PUBLIC_API_BASE` | API origin — defaults to `https://www.kryptoscronos.com` |
| `EXPO_PUBLIC_REVENUECAT_IOS_KEY` / `_ANDROID_KEY` | RevenueCat SDK keys (IAP) |

## 3. Run

```bash
cd apps/mobile
npx expo start          # press i / a, or scan the QR with Expo Go
```

Quizzes, ARIA hints, leaderboard, and profile work in Expo Go. **Push notifications and
in-app purchases need a dev build** (next section).

## 4. Dev / production builds (EAS)

Push and IAP are native — build with EAS to test them on a device:

```bash
npm i -g eas-cli
eas login
cd apps/mobile
eas init                                   # creates the Expo project + writes extra.eas.projectId
eas build --profile development --platform ios   # or android / all  (see eas.json)
# install the resulting build on your device, then:
npx expo start --dev-client
```

Production / submission:

```bash
eas build  --profile production --platform all
eas submit --profile production --platform all
```

Build profiles live in `eas.json`. Store identifiers (`com.kryptoscronos.app`) and the
launch checklist are in `app.json` and `docs/MOBILE_ROADMAP.md` (Phase 6).

## Project layout

```
apps/mobile/
├── app.json            ← Expo config (bundle ids, plugins, splash)
├── eas.json            ← EAS build/submit profiles
├── metro.config.js     ← monorepo resolution (@kryptos/* + workspace root)
├── src/
│   ├── app/            ← Expo Router routes
│   │   ├── _layout.tsx     auth gate (Stack) + RevenueCat config
│   │   ├── login.tsx       sign in / sign up
│   │   ├── (tabs)/         Stages · Leaderboard · Profile
│   │   ├── stage/[id].tsx  interactive quiz + ARIA hint button
│   │   └── upgrade.tsx     RevenueCat paywall
│   ├── components/AriaChat.tsx   ARIA hint chat (→ /api/hint)
│   └── lib/            supabase · api (bearer) · auth · notifications · purchases
```

## Notes / gotchas

- **`typedRoutes` is temporarily disabled** in `app.json`. Re-enable it after running
  `npx expo start` once (which generates `.expo/types` for typed route hrefs).
- **Push + IAP backend** must be configured for full functionality: set `CRON_SECRET`
  and `REVENUECAT_WEBHOOK_AUTH` in Vercel, create RevenueCat products/offering (entitlement
  `pro`) + the webhook. See `docs/MOBILE_ROADMAP.md` (Phases 3, 5, 6).
- The app calls `Purchases.logIn(username)` so RevenueCat's `app_user_id` matches the
  backend's username — the `/api/webhooks/revenuecat` webhook keys off it.
- Typecheck: `npx tsc --noEmit` from `apps/mobile`.
