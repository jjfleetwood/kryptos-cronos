"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// Studio — landing for the "Siempre Segundo" set: the novel, the literary
// screenplay, and the lean sell draft. All three are served by /api/studio and
// are PUBLIC; the route is just unlisted in the nav (reachable by direct link).
// This page links into each reader, and carries the project overview + cast.
// (The signin/pro gate states below are retained for safety but no longer fire —
// the API returns 200 for everyone.)
// ─────────────────────────────────────────────────────────────────────────────

type State = "loading" | "ready" | "signin" | "pro" | "error";

function Gate({ icon, title, body, cta }: { icon: string; title: string; body: string; cta: { href: string; label: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1410 50%, #0d0a08 100%)" }}>
      <div className="text-center max-w-sm">
        <div className="text-6xl mb-4">{icon}</div>
        <h2 className="text-2xl font-black text-white mb-2">{title}</h2>
        <p className="text-gray-400 text-sm mb-6">{body}</p>
        <Link href={cta.href} className="inline-block px-5 py-2.5 rounded-xl font-bold text-sm text-black" style={{ background: "linear-gradient(90deg,#f59e0b,#fbbf24)" }}>
          {cta.label}
        </Link>
      </div>
    </div>
  );
}

function Card({ href, icon, title, sub, blurb }: { href: string; icon: string; title: string; sub: string; blurb: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-amber-500/20 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-colors hover:border-amber-400/50 hover:from-amber-500/[0.08]"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-[11px] font-mono font-bold text-amber-400/70 uppercase tracking-[0.25em] mb-1">{sub}</div>
      <h3 className="text-xl font-black text-white group-hover:text-amber-200 transition-colors">{title}</h3>
      <p className="text-[13px] leading-6 text-gray-400 mt-2">{blurb}</p>
      <span className="inline-block mt-4 text-amber-400 text-sm font-semibold group-hover:translate-x-0.5 transition-transform">Open →</span>
    </Link>
  );
}

function SectionH({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-5">
      <div className="text-[11px] font-mono font-bold text-amber-400/70 uppercase tracking-[0.25em]">{kicker}</div>
      <h2 className="text-2xl font-black text-white mt-1">{title}</h2>
    </div>
  );
}

function Person({ name, tag, children }: { name: string; tag?: string; children: ReactNode }) {
  return (
    <li className="leading-7">
      <span className="font-black text-white tracking-wide">{name}</span>
      {tag ? <span className="ml-2 text-[11px] font-mono uppercase tracking-wider text-amber-400/60">{tag}</span> : null}
      <span className="text-gray-400"> — {children}</span>
    </li>
  );
}

export default function StudioPage() {
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    fetch(`/api/studio?check=1`)
      .then((r) => {
        if (r.status === 401) { setState("signin"); return; }
        if (r.status === 403) { setState("pro"); return; }
        if (!r.ok) { setState("error"); return; }
        setState("ready");
      })
      .catch(() => setState("error"));
  }, []);

  if (state === "signin") {
    return <Gate icon="🔑" title="Sign in to read" body="The Studio — Siempre Segundo — is available to Pro members. Sign in to continue." cta={{ href: "/login", label: "Sign in" }} />;
  }
  if (state === "pro") {
    return <Gate icon="⭐" title="A Pro feature" body="Siempre Segundo — the novel and the screenplays — is part of Kryptós CronOS Pro. Upgrade to read the whole set." cta={{ href: "/upgrade", label: "Upgrade to Pro" }} />;
  }
  if (state === "error") {
    return <Gate icon="📕" title="Couldn't load it" body="The Studio didn't load. Try refreshing." cta={{ href: "/studio", label: "Retry" }} />;
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1410 55%, #0d0a08 100%)" }}>
      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="flex items-center justify-end mb-10">
          <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-[0.3em]">Studio</span>
        </div>

        <header className="mb-10">
          <h1 className="text-5xl font-black text-white tracking-tight">Siempre Segundo</h1>
          <p className="text-amber-200/90 italic mt-3 text-lg">&ldquo;Always second.&rdquo;</p>
          <p className="text-gray-400 text-[15px] leading-7 mt-4 max-w-2xl">
            A multigenerational California saga — loosely based on Frank Arellanes, the
            Santa Cruz ballplayer who became one of the first Mexican-American men in the
            major leagues, and the first Latino to pitch for the Boston Red Sox. Read it
            as a novel, as the literary screenplay, or as the lean sell draft.
          </p>
        </header>

        {state === "loading" ? (
          <div className="grid gap-5 sm:grid-cols-3 animate-pulse">
            {[0, 1, 2].map((i) => <div key={i} className="h-56 rounded-2xl bg-white/5" />)}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-3">
            <Card href="/studio/prose" icon="📖" sub="Novel" title="The Novel" blurb="166 chapters of full prose — plus the chaptered narrated audiobook with a one-file .m4b download." />
            <Card href="/studio/screenplay" icon="🎬" sub="Screenplay" title="Literary Draft" blurb="The screenplay as a read — full action, voice intact, Cold Open through Coda." />
            <Card href="/studio/screenplay-sell" icon="📄" sub="Sell Draft" title="Spec / Sell" blurb="Lean industry-standard spec — same beats, action stripped to the screen. For agents and contests." />
          </div>
        )}

        {/* ── Project overview + cast ──────────────────────────────────────── */}
        <div className="mt-16 border-t border-amber-500/15 pt-12 space-y-14">

          <section>
            <SectionH kicker="The story" title="In one breath" />
            <p className="text-gray-300 text-[15px] leading-7 max-w-2xl">
              <span className="text-white font-semibold">Cirilo Méndez</span> is born in 1882 on the floor of a Santa Cruz
              tannery — on the very ground his family&rsquo;s cattle once made them rich, before the courthouse and the
              conquest took it all. He has a cannon for a right arm and a silence for armor, and he spends his whole life
              being <em className="text-amber-200/90">second</em>: second-class, second-looked-at, second-chosen, the
              &ldquo;Spanish&rdquo; spitballer the big leagues won&rsquo;t call while paler men get the train east. Then,
              at thirty-six, in a season cut short by the war, the country is finally made to call him <em className="text-amber-200/90">first</em> —
              and what that one autumn costs is the whole tragedy and the whole point.
            </p>
          </section>

          <section>
            <SectionH kicker="The key" title="Siempre Segundo — the thesis" />
            <p className="text-gray-300 text-[15px] leading-7 max-w-2xl">
              The dignity of the runner-up. A life is measured not by the trophy you lift but by how you keep working when
              the answer is <em>no</em> — second, and second, and second, every day they tell you to wait. The lasting
              first is never the cup; it is the legacy: the son, the community, the name the town cannot stop saying.
              <span className="block mt-3 text-amber-200/80 italic">&ldquo;Keep working. Especially when you&rsquo;re second. Siempre.&rdquo;</span>
            </p>
            <p className="text-gray-400 text-[14px] leading-7 max-w-2xl mt-4">
              <span className="text-amber-300 font-semibold">The leather thread</span> is the visual spine — rancho hides
              (&ldquo;the banknotes of California&rdquo;) → the tannery wage → the stitched ball and the hand-made glove →
              the glove that ends in his son&rsquo;s hands. Race is the undercurrent; the machine of money is the engine.
            </p>
          </section>

          <section>
            <SectionH kicker="The people" title="Principal characters" />
            <ul className="space-y-3 text-[14px] max-w-2xl">
              <Person name="CIRILO MÉNDEZ" tag="the pitcher">
                b. 1882 on the tannery floor. Quiet, proud, watchful; the last hope of a fallen family. His silence is
                armor and wall both — and he is never sure whether his ambition is a virtue or the very pride the family
                curse warned of.
              </Person>
              <Person name="REBECCA WHITFIELD">
                wealthy, Anglo, motherless — raised by a frightened self-made father to be an ornament, married off to the
                right name. A bottle boy who looked <em>into</em> her, not at her, undid that in a single afternoon. She
                walks out of the gilded house and makes a marriage in the margins.
              </Person>
              <Person name="DON AURELIO MÉNDEZ" tag="the abuelo">
                last patriarch of a stolen rancho and the prologue&rsquo;s narrator; a baseball man since the Gold-Rush
                sandlots. Keeper of the family curse — &ldquo;always second&rdquo; — and, in a way he cannot face, its
                author. The coda&rsquo;s reversal is his to earn.
              </Person>
              <Person name="ESTEBAN MÉNDEZ">
                Cirilo&rsquo;s father, a hide-trimmer at Volkov&rsquo;s tannery, who loves in the only language the world
                left him, which is fear. He wants his son safe and small, and knows the wanting is both real love and real
                cowardice at once.
              </Person>
              <Person name="DOLORES MÉNDEZ">
                the mother. The kitchen is her pulpit and her faith the family&rsquo;s spine; the rosary kept in the
                window and the language taught indoors are her quiet, total rebellions. Has buried two children and shows
                the grief to no one.
              </Person>
              <Person name="CHUCK ASHBY III" tag="the rival">
                old San Francisco money, Rebecca&rsquo;s intended — not a villain but a wound, measured his whole life
                against a dead brother and found wanting. His one true feeling is for Rebecca, which is exactly why losing
                her curdles for decades.
              </Person>
              <Person name="ABEL & LUIS MÉNDEZ" tag="the brothers">
                Abel, the eldest, the wild natural who drank and brawled the gift away before reaching could cost him;
                Luis, the middle one, who took the butcher&rsquo;s apron and the whole weight of the family — the spine no
                one writes the song about.
              </Person>
            </ul>
          </section>

          <section>
            <SectionH kicker="Along the road" title="Ten lives of the secondary world" />
            <p className="text-gray-400 text-[14px] leading-7 max-w-2xl">
              The rooms Cirilo passes through, each a life with its own weight:
              <span className="text-gray-300"> Fyodor Volkov</span> (the Russian tannery owner),
              <span className="text-gray-300"> Father Fagan</span> (the Jesuit who finds the arm),
              <span className="text-gray-300"> Edward Purse</span> (the barred Black star — the book&rsquo;s conscience),
              <span className="text-gray-300"> &ldquo;Deacon&rdquo; Mulqueen</span> (the ruined bush-league catcher),
              <span className="text-gray-300"> Lim</span> (the Chinese café man who feeds the team at midnight),
              <span className="text-gray-300"> Aoife Doyle</span> (the Brooklyn landlady, gold star in the window),
              <span className="text-gray-300"> Nunzio Sabatini</span> (the Italian kiln-man),
              <span className="text-gray-300"> Eleanor Ashby</span> (Chuck&rsquo;s wife — the cage seen from inside), and
              <span className="text-gray-300"> Danny Halloran</span> (the Boston writer who hangs &ldquo;El Cid&rdquo; on him).
            </p>
            <p className="text-gray-500 text-[13px] leading-7 max-w-2xl mt-3">
              Real figures, woven in period-accurately: the <span className="text-gray-400">1918 Boston Red Sox</span> —
              Babe Ruth, manager Ed Barrow, and Hollister-born <span className="text-gray-400">Harry Hooper</span>, the
              teammate who carries Cirilo&rsquo;s name to Boston — and Walter &ldquo;Big Train&rdquo; Johnson across the
              duel.
            </p>
          </section>

          <section>
            <SectionH kicker="Architecture" title="Three acts + a prologue" />
            <div className="space-y-3 text-[14px] leading-7 text-gray-400 max-w-2xl">
              <p><span className="text-amber-300 font-semibold">Prologue — California Banknotes (1833–1882).</span> The Mexican golden age and its theft, told as Don Aurelio&rsquo;s memory: the rancho at its height, the false promise of Guadalupe Hidalgo, the slow strangulation by the Land Act and the drought, the fall into wage labor — ending on a newborn on the tannery floor.</p>
              <p><span className="text-amber-300 font-semibold">Act I — The Boardwalk (~1900).</span> Cirilo works the new pleasure pier built on the land his family lost; the booth, the Whitfields, Rebecca&rsquo;s laugh, Chuck&rsquo;s cruelty, and the arm that answers it.</p>
              <p><span className="text-amber-300 font-semibold">Act II — The Rematch &amp; the Long Wait (1903–1917).</span> Santa Clara as a class threshold; the Stanford game where Rebecca chooses; then the decade-plus of being passed over, and the call that finally comes when the war empties the rosters.</p>
              <p><span className="text-amber-300 font-semibold">Act III — Siempre Primero (1918).</span> His first real shot, at last, on Ed Barrow&rsquo;s Red Sox; a son born on New Year&rsquo;s Day; the one bright autumn the country is made to call him first — and its price.</p>
            </div>
          </section>

          <p className="text-gray-600 text-[12px] pt-2">© 2026 Jacob J. Bolotin. A work of fiction inspired by history.</p>
        </div>
      </div>
    </div>
  );
}
