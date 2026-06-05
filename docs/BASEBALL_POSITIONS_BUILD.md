# Baseball Position Epochs — Build Checklist (resume-safe)

Goal: one full epoch per position. Merge existing pitcher epochs (5+6+7) into one **Pitcher** epoch; build 8 new full 10-stage position epochs.

## Architecture notes (verified)
- Epochs registered in `packages/core/src/stages.ts`: import `baseballNEpoch`/`baseballNStages`, add epoch to `epochs` array (~line 130), spread stages (~line 180).
- Track grouping + unlock gate by `epochId` (`access.ts:90`: `epochId===... && order<...`). **Order must be unique 1..N within an epoch.**
- Epoch page sorts stages by `order` (`stages/epoch/[epochId]/page.tsx:90`).
- Stage **ids** key images (`stage-images.ts`), player progress/XP, exam banks, translations → NEVER change existing ids.
- Content attribution flags: `packages/core/src/content-flags.ts` (one entry per epochId; admin panel links `/stages/epoch/<epochId>`).
- Stage template = see `baseball-1.ts`: `{epochId,wonder{name,location,era,emoji},id,order,title,subtitle,category:"sports",xp,badge{id,name,emoji},challengeType:"quiz",info{tagline,year,overview[3],technical{title,body[2],codeExample{label,code}},incident{title,when,where,impact,body[2]},diagram{nodes[4]{label,sub,type}},timeline[6],keyTakeaways[4],references[3]},quiz{questions[4]{id,type,challenge,text,options[4],correctIndex,explanation}}}`. diagram node types: attacker|system|victim|result.

## Units
- [ ] **MERGE** Pitcher: baseball-5 relabel "Pitcher"; baseball-6 stages epochId→baseball-5 order 11-20; baseball-7 stages epochId→baseball-5 order 21-30; drop baseball6/7Epoch from stages.ts; collapse content-flags 6/7 into 5.
- [ ] baseball-8  Catcher (Yadier Molina / Busch Stadium)
- [ ] baseball-9  First Base (Keith Hernandez / Shea-Citi Field NY)
- [ ] baseball-10 Second Base (Roberto Alomar / SkyDome Toronto)
- [ ] baseball-11 Third Base (Brooks Robinson / Memorial Stadium-Camden Yards Baltimore)
- [ ] baseball-12 Shortstop (Ozzie Smith / Busch Memorial Stadium STL)
- [ ] baseball-13 Left Field (Carl Yastrzemski / Fenway Green Monster)
- [ ] baseball-14 Center Field (Ken Griffey Jr. / Kingdome Seattle)
- [ ] baseball-15 Right Field (Ichiro Suzuki / Safeco Field Seattle)
- [ ] WIRE + DEPLOY: register 8 epochs in stages.ts; add 8 content-flags; update counts (stages +80 → 662; epochs 50-2+8=56; tracks unchanged 11); tsc+eslint+audit; commit+push; report Live.

## Per-stage theme spine (apply to every position)
01 The Position & Its Job · 02 Stance & Pre-pitch Setup · 03 Footwork · 04 The Primary Skill (pos-specific) · 05 Building the Body (conditioning/drills) · 06 Reading the Play / First Step · 07 Cutoffs, Relays & Throws · 08 Backups & Coverage for Every Situation · 09 Situational IQ (bunts, DPs, counts, score) · 10 The Greats & Mastery Mindset.

## Status log
- (start) tasks #8-17 created.
- DONE + wired + tsc-clean: MERGE (Pitcher), baseball-8 Catcher, baseball-9 First Base, baseball-10 Second Base, baseball-11 Third Base, baseball-12 Shortstop.
- NEXT: baseball-13 Left Field, baseball-14 Center Field, baseball-15 Right Field, then WIRE+DEPLOY (counts: stages +80 → 662; epochs 50-2+8=56).
- Wiring recipe per epoch (run from repo root): 3 perl inserts into packages/core/src/stages.ts (import after prev baseball import; epoch after prev baseballNEpoch; spread after prev baseballNStages) then `npx tsc --noEmit -p packages/core/tsconfig.json`.
