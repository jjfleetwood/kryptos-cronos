"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// Studio — an internal home for the screenplay/novel project "Siempre Segundo,"
// a loosely-based multigenerational saga inspired by early-1900s Californio
// ballplayer history (Frank Arellanes). Admin-only, like the deck generator.
// This page is a living manuscript: structure + the written Prologue and Act I.
// ─────────────────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Themes" },
  { id: "characters", label: "Characters" },
  { id: "structure", label: "Structure" },
  { id: "prologue", label: "Prologue" },
  { id: "act-one", label: "Act I — sample" },
  { id: "act-two", label: "Act II — sample" },
  { id: "notes", label: "Notes & to-do" },
];

/** Monospaced screenplay block — preserves industry-format whitespace. */
function Screenplay({ children }: { children: string }) {
  return (
    <pre className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-gray-300 bg-black/40 border border-white/10 rounded-xl p-5 overflow-x-auto">
      {children}
    </pre>
  );
}

/** Serif "novel" prose block. */
function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-manuscript space-y-4 text-[15px] leading-7 text-gray-300">{children}</div>;
}

function H({ id, kicker, title }: { id: string; kicker?: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-5 pt-2">
      {kicker && <p className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-[0.2em]">{kicker}</p>}
      <h2 className="text-2xl font-black text-white mt-1">{title}</h2>
    </div>
  );
}

export default function StudioPage() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setIsAdmin(!!d?.isAdmin))
      .catch(() => setIsAdmin(false));
  }, []);

  if (isAdmin === false) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1410 50%, #0d0a08 100%)" }}>
        <div className="text-center max-w-sm">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-black text-white mb-2">Admin only</h2>
          <p className="text-gray-400 text-sm mb-6">The Studio is an internal tool, available from the admin dashboard.</p>
          <Link href="/admin" className="text-amber-300 hover:text-amber-200 text-sm transition-colors">→ Admin dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1410 55%, #0d0a08 100%)" }}>
      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
        {/* Side nav */}
        <aside className="lg:sticky lg:top-12 h-max">
          <Link href="/admin" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">← Admin dashboard</Link>
          <nav className="mt-6 flex flex-col gap-1.5">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm text-gray-400 hover:text-amber-300 transition-colors py-0.5">
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Manuscript */}
        <main className="min-w-0">
          {/* Title block */}
          <div className="mb-12 border-b border-white/10 pb-8">
            <p className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-[0.3em]">Studio · Working Manuscript</p>
            <h1 className="text-5xl font-black text-white mt-3 tracking-tight">SIEMPRE SEGUNDO</h1>
            <p className="text-amber-200/80 italic mt-2 text-lg">&ldquo;He was born second. He died first.&rdquo;</p>
            <p className="text-gray-500 text-sm mt-4 max-w-2xl">
              A multigenerational saga — feature screenplay + companion novel — loosely inspired by the life of
              Frank Arellanes, the Californio pitcher from Santa Cruz. Fiction. Names and events invented.
            </p>
          </div>

          {/* OVERVIEW */}
          <section className="mb-14">
            <H id="overview" kicker="Logline" title="The story in one breath" />
            <Prose>
              <p>
                In a Santa Cruz that his family once owned and now merely works, a dispossessed Californio boy
                — born on the floor of the tannery where his ancestors&rsquo; cattle hides once made them rich —
                claws his way from the planks of a brand-new beach boardwalk to the pitcher&rsquo;s mound of a
                championship. He becomes the second man of Mexican blood to reach the big leagues, and spends his
                life being <em>second</em> — second-class, second-looked-at, second-chosen — until the autumn he
                finally becomes <em>first</em>: Rookie of the Year, a World Series, the game of his life pitched in
                a burning fever. Carried off the field a champion, he is dead of the influenza inside a week. The
                land outlives him. The leather outlives him. The story is how a town forgets a family, and how a
                family refuses to be forgotten.
              </p>
            </Prose>
          </section>

          {/* THEMES */}
          <section className="mb-14">
            <H id="themes" kicker="The key" title="Siempre Segundo — the thesis" />
            <div className="mb-6 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-600/15 to-transparent p-5">
              <p className="text-[15px] leading-7 text-amber-100">
                <strong className="text-amber-300">This is what the picture is about.</strong> It is an argument for the
                dignity of the runner-up — that a life is measured not by the trophy you lift but by how you keep
                working when you are <em>always second</em>: second-class, second-looked-at, second-chosen, the second
                of your blood ever to reach the top. Frank spends thirty-five years second and a single autumn first,
                and then he dies — proof that the trophy was never the point. The worth was in the striving through all
                the years no one was watching. <span className="text-amber-200/80">Keep working. Especially when you&rsquo;re second. Siempre.</span>
              </p>
            </div>
            <p className="text-[15px] leading-7 text-gray-300 mb-3">Two things make that thesis land hard:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-amber-500/60 text-[15px] leading-7 text-gray-300 mb-7">
              <li><strong className="text-white">The Brooklyn club is the perfect vessel.</strong> Baseball&rsquo;s eternal also-rans — &ldquo;Wait Till Next Year,&rdquo; the lovable losers who lose the Series and show up again anyway. The team&rsquo;s whole identity <em>is</em> the theme; Frank&rsquo;s one season makes the second-place team first, and it costs him everything.</li>
              <li><strong className="text-white">It is the wound of the Mexican-American.</strong> A people who had their world taken and were told to keep their heads down and keep working — made second-class on the very land that was first theirs. <em>Siempre segundo</em> is at once a virtue to live by and an injustice to rage against, and the film holds both without resolving them.</li>
            </ul>
            <Prose>
              <p>
                <strong className="text-amber-300">Leather is the visual through-line</strong> — the
                single object the camera (and the prose) returns to across three centuries, the way we keep the thesis in frame:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-amber-500/60">
                <li>
                  <strong>Hides as wealth.</strong> On the rancho, sun-dried cowhides are stacked like money —
                  &ldquo;the banknotes of California&rdquo; — and the family tans its own leather on its own land.
                </li>
                <li>
                  <strong>Leather as wage.</strong> After the land is taken, the same hands that owned the hide trade
                  trim another man&rsquo;s hides for a Prussian&rsquo;s wages at Kron&rsquo;s tannery. The craft survives;
                  the standing is gone.
                </li>
                <li>
                  <strong>Leather as escape.</strong> A baseball is stitched cowhide; a glove is tanned leather. The
                  boy&rsquo;s way out of the tannery is the same material that trapped his father — reshaped into a ball
                  and a mitt.
                </li>
                <li>
                  <strong>Leather as memory.</strong> The film opens and closes on a single worn glove. The last image
                  is that glove laid on the dirt of a mound, or in the hands of the woman he loved.
                </li>
              </ul>
              <p>Underneath the leather, the saga is really about:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-amber-500/60">
                <li><strong>Dispossession &amp; reinvention</strong> — a town and a bloodline conquered, paved over, and remade, again and again, on the same ground.</li>
                <li><strong>The rooted treated as foreign</strong> — the family that was here a century before the United States, made to feel like guests at the beach.</li>
                <li><strong>&ldquo;Always second.&rdquo;</strong> The cruel arithmetic of being second — to the Anglo, to the rich boy, to history — and the single, fatal season of being first.</li>
                <li><strong>The body that betrays</strong> — first the breaking labor, then the fever in the air. A man, and a people, the country never moved to protect.</li>
              </ul>
            </Prose>
          </section>

          {/* CHARACTERS */}
          <section className="mb-14">
            <H id="characters" kicker="The people" title="Principal characters" />
            <Prose>
              <ul className="space-y-3 list-none pl-0">
                <li><strong className="text-white">FRANK SOTO</strong> — our pitcher (b. 1882). Quiet, proud, watchful; a cannon for a right arm. Born on the tannery floor; raised on the boardwalk. The last hope of a fallen family. <span className="text-gray-500">(Working surname &ldquo;Soto&rdquo; — placeholder; easily changed.)</span></li>
                <li><strong className="text-white">DON AURELIO SOTO</strong> — the abuelo. Last patriarch of a rancho that no longer exists. Keeper of the Mexican past, the family&rsquo;s memory and conscience; our prologue narrator. Walks Frank past fenced land that used to be theirs.</li>
                <li><strong className="text-white">ESTEBAN SOTO</strong> — Frank&rsquo;s father. A hide-trimmer at Kron&rsquo;s tannery. Wants his son safe and small; has seen what the world does to Mexicans who reach. Love expressed as fear.</li>
                <li><strong className="text-white">DOLORES SOTO</strong> — Frank&rsquo;s mother. The rosary, the language, the kitchen that holds the family together. Quietly the strongest person in the film.</li>
                <li><strong className="text-white">CLARA WHITFIELD</strong> — Anglo, wealthy; meets Frank at the beach (~17), then goes up to <strong>Stanford</strong> — which puts her in the grandstand the day Chet&rsquo;s Stanford nine faces Frank&rsquo;s Santa Clara. Bright, restless, drawn to the one boy who won&rsquo;t perform for her. The woman who crosses every line she was raised inside — and marries him.</li>
                <li><strong className="text-white">CHESTER &ldquo;CHET&rdquo; ASHBY III</strong> — old San Francisco money, Clara&rsquo;s intended. Casually cruel to &ldquo;the help.&rdquo; Plays for <strong>Stanford</strong>, and meets Frank again across the diamond. Our antagonist — and the embodiment of the class that inherited the family&rsquo;s land.</li>
                <li><strong className="text-white">LUIS &amp; ABEL SOTO</strong> — Frank&rsquo;s older brothers; the meat market, the sandlot, the Santa Cruz Beachcombers. The road not taken.</li>
                <li><strong className="text-white">&ldquo;UNCLE&rdquo; — the manager</strong> — the gruff Brooklyn skipper who finally bets on Frank in Act III. <span className="text-gray-500">(Period-real option: Wilbert &ldquo;Uncle Robbie&rdquo; Robinson, Brooklyn 1914–31.)</span></li>
              </ul>
            </Prose>
          </section>

          {/* STRUCTURE */}
          <section className="mb-14">
            <H id="structure" kicker="Architecture" title="Three acts + prologue" />
            <Prose>
              <p><strong className="text-amber-300">PROLOGUE — &ldquo;California Banknotes&rdquo; (1833–1882).</strong> The Mexican golden age and its theft, told as Don Aurelio&rsquo;s memory: the secularization grant, the rancho at its height (vaqueros, the matanza, hides as money, the fandango, Branciforte rowdy across the river), the false promise of Guadalupe Hidalgo, the slow strangulation by the Land Act of 1851 and the drought, the fall into wage labor — ending on a match cut from a wet new hide to a newborn: Frank, 1882, born on the tannery floor.</p>

              <p><strong className="text-amber-300">ACT I — &ldquo;The Boardwalk&rdquo; (Santa Cruz, ~1900–1903).</strong> Frank, eighteen, works the brand-new pleasure pier — hauling, running a ball-toss booth — labor in the leisure economy built on the land his family lost. The Whitfields summer at the beach. Clara and Frank collide; sparks, then danger. Chet humiliates him; Frank answers the only way the Anglo world can&rsquo;t argue with — his arm — striking out the visiting college boys in a beach exhibition. The attraction to Clara becomes perilous for a Mexican worker. The abuelo blesses the climb; the father dreads it. A scout (or a Santa Clara man) sees the arm. Frank leaves the beach — and Clara — carrying her token and the family&rsquo;s buried hope of rising again.</p>

              <p><strong className="text-amber-300">ACT II — &ldquo;The Rematch &amp; The Long Wait&rdquo; (~1901–1916).</strong> College of Santa Clara as a class threshold — a tannery worker&rsquo;s son among the sons of the men who took his family&rsquo;s land. The act&rsquo;s hinge is the <strong>Stanford–Santa Clara game</strong>: Clara, now a Stanford woman, in the grandstand; <strong>Chet at the plate for Stanford</strong>; Frank on the mound. The boardwalk is paid back — Frank strikes him out (&ldquo;costs a nickel&rdquo;) — and Clara chooses, against everything she was raised inside. Then the cruelty of the long middle: a decade of being passed over, the exotic &ldquo;Spanish&rdquo; spitballer who can&rsquo;t get his call to the bigs while lesser, paler men do. <em>Always second.</em> Clara waits, or doesn&rsquo;t, or comes back. The act ends ~1917 with the call finally coming — and Frank and Clara marrying in the teeth of both their worlds.</p>

              <p><strong className="text-amber-300">ACT III — &ldquo;Siempre Primero&rdquo; (1917–1918).</strong> The bigs at last — at <strong>thirty-six</strong>, the oldest rookie anyone&rsquo;s seen, and with baseball&rsquo;s <strong>eternal second-place club</strong> (the team that always loses the Series and always comes back — which is exactly why it must be them). On <strong>January 1, 1918</strong>, a son is born: first child of the new year, the bloodline continuing, a mixed-heritage child who is both Californias at once. Then the season of his life — a rookie sensation who pitches the team to the pennant and the World Series championship; <strong>Rookie of the Year</strong> and <strong>MVP</strong>. For one autumn the man who was always second is <em>first</em>. Then the influenza. Burning with fever, he pitches the deciding game, is carried off the field a champion — and is dead within days, his boy not yet a year old. Final image: the worn glove laid in the cradle, or in Clara&rsquo;s hands; the land that outlives him; the abuelo&rsquo;s voice closing the circle. <span className="text-gray-500">(Anachronism note: ROY/WS-MVP/&ldquo;Dodgers&rdquo; are post-1918; keep as fiction, or swap to Brooklyn Robins + the real Chalmers Award.)</span></p>
            </Prose>
          </section>

          {/* PROLOGUE */}
          <section className="mb-14">
            <H id="prologue" kicker="Written — Prologue" title="California Banknotes" />

            <p className="text-sm text-gray-500 mb-4 italic">Novel prose.</p>
            <Prose>
              <p>
                Before this was a town for strangers — before the lights on the water and the laughing on the pier —
                it was ours. All of it. The old man said it the way other men said prayers, which is to say he said it
                until the words wore smooth and stopped meaning anything to anyone but him.
              </p>
              <p>
                In the year the bells came down — 1833, when Mexico unlocked the mission and handed God&rsquo;s land back
                to men — a governor&rsquo;s pen made the Sotos rancheros. The grant ran from the river to the redwood line,
                hills the color of a lion in August, and on it the family put cattle and a chapel and a low white house
                that held the cool like a cellar. They were <em>gente de razón</em>: people of reason, people of name,
                Mexicans and Catholics and, above all, owners.
              </p>
              <p>
                The wealth came on the hoof and left on the hide. Each spring the vaqueros rode the cattle down out of
                the hills for the <em>matanza</em>, and the killing-ground ran red and then the hides went out to dry,
                staked in their hundreds to the ground like a field of dark windows. The Yankee ships stood off the cove
                and the Sotos rowed the hides out and rowed back with silver and silk and iron, because a cowhide was as
                good as coin in those years — better; men called them <em>California banknotes</em>, and laughed, and
                meant it. And on the rancho, in a shed that smelled of oak bark and lime, the family tanned its own
                leather from its own herds on its own ground. Remember that. The leather was theirs before it was
                anyone&rsquo;s.
              </p>
              <p>
                Across the San Lorenzo the pueblo of Branciforte gambled and brawled and drank — a town the Spanish had
                stocked, a lifetime before, with the contents of a Guadalajara jail — and on feast nights the guitars
                carried over the water to the rancho&rsquo;s own fandango, so that the sacred bank of the river and the
                profane bank of the river sang to each other in the dark. It seemed it would last forever. Nothing built
                on land ever does.
              </p>
              <p>
                The thunder came from the north. A flag at Sonoma; a war; the stars-and-stripes run up over Monterey
                where the eagle of Mexico had flown that morning. And then, in &rsquo;48, the paper that was supposed to
                save them: Guadalupe Hidalgo, which swore on the honor of the United States that the grants would be
                respected, that what was theirs would stay theirs. Don Aurelio&rsquo;s father believed it. That was his
                only crime, and it cost him everything.
              </p>
              <p>
                For the conquest did not come with a sword. It came with a courthouse. The Land Act of 1851 made every
                Californio prove, in English, before a commission in a city three days&rsquo; ride north, that the ground
                under his own chapel was his — and even the families who won bled to death paying the lawyers who won
                it for them. Squatters fenced the range. The cattle wandered and were not returned. Then the sky itself
                turned against them: the flood that drowned the valley, and after it the long drought of &rsquo;64 that
                left the hills white with bone. They sold the rancho the way a man bleeds — not all at once, but a
                little at a time, until there is no more.
              </p>
              <p>
                By the time Don Aurelio was an old man, the new Santa Cruz had risen on the grave of his: lime kilns
                smoking on the hill, the long wharf walking out into the bay, strangers&rsquo; money everywhere and the
                family&rsquo;s name on nothing. The language went indoors. The rosary stayed out.
              </p>
              <p>
                And on a winter morning in 1882, his son Esteban walked down off the hill and through the gate of
                Kron&rsquo;s tannery to do for a Prussian&rsquo;s wages the one thing the Sotos had always known how to do —
                turn hide into leather — only now the hide was another man&rsquo;s, and the leather was another man&rsquo;s, and
                all that was left to the family was the knowing. <em>They left us our hands,</em> the old man would say.
                <em> So we gave them to the leather.</em>
              </p>
              <p>
                That same morning, in the back room where the women waited, a child was born — wet and red and roaring,
                the way a new hide comes off the beam. They wiped him clean and the old man looked at the boy&rsquo;s
                hands, already big, already strong, and did not yet know what they would do. He only knew the family
                was not finished. Not while there was a Soto with hands.
              </p>
            </Prose>

            <p className="text-sm text-gray-500 mt-8 mb-4 italic">Screenplay — the same movement, compressed.</p>
            <Screenplay>{`FADE IN:

EXT. SOTO RANCHO -- COASTAL HILLS, ALTA CALIFORNIA -- DAY (1840s)

Hills the color of a lion. No fences anywhere -- the land
just goes. A herd of cattle moves like a slow brown river.

DON AURELIO (V.O.)
(old, unhurried)
Before this was a town for strangers...
it was ours. All of it.

VAQUEROS wheel their horses through the herd, reatas singing.

EXT. THE MATANZA -- KILLING GROUND -- DAY

HIDES -- hundreds of them -- staked to the earth to dry, dark
and gleaming, a field of black windows.

DON AURELIO (V.O.)
A cowhide was as good as coin in those
years. Men called them California
banknotes. And they laughed. And they
meant it.

A YANKEE SHIP stands off the cove. Men row hides out, row
silver back.

INT. RANCHO TANNING SHED -- DAY

Oak bark, lime, the honest stink of the work. YOUNG ESTEBAN
(10) watches his father draw a knife along a hide.

DON AURELIO (V.O.)
Our leather. From our herds. On our
ground. Remember that.

EXT. THE SAN LORENZO RIVER -- NIGHT

A FANDANGO on the rancho side -- guitars, firelight, skirts
turning. Across the black water, the pueblo of BRANCIFORTE
gambles and brawls. The two banks sing to each other.

DON AURELIO (V.O.)
It seemed it would last forever.
Nothing built on land ever does.

INT. U.S. LAND COMMISSION, SAN FRANCISCO -- DAY (1850s)

A cold room. ANGLO COMMISSIONERS in English. DON AURELIO'S
FATHER lays a bundle of Mexican deeds on the table with
shaking hands. No one leans forward to read them.

DON AURELIO (V.O.)
The conquest did not come with a
sword. It came with a courthouse.

EXT. THE RANCHO -- DAY (1860s) -- DROUGHT

White bones in white grass. A SQUATTER'S FENCE cuts the old
range in two. A WEATHERED SIGN, new: property of another name.

DON AURELIO (V.O.)
We sold it the way a man bleeds. Not
all at once. A little at a time. Until
there is no more.

EXT. KRON'S TANNERY, SANTA CRUZ -- WINTER MORNING (1882)

Smoke. The long wharf beyond. ESTEBAN SOTO (grown) walks
through the gate, takes up another man's knife, another
man's hide.

DON AURELIO (V.O.)
They left us our hands. So we gave
them to the leather.

INT. TANNERY BACK ROOM -- CONTINUOUS

A CRY. DOLORES, spent and radiant, holds a NEWBORN -- wet,
red, roaring. DON AURELIO takes the small hands in his.
Already big. Already strong.

DON AURELIO (V.O.)
The family was not finished. Not while
there was a Soto with hands.

MATCH CUT TO:

A WET NEW HIDE coming off the beam -- then a BASEBALL,
white and new, dropping into a small brown palm.

TITLE OVER BLACK:  SIEMPRE SEGUNDO

FADE IN:`}</Screenplay>
          </section>

          {/* ACT I SAMPLE */}
          <section className="mb-14">
            <H id="act-one" kicker="Written — Act I opening" title="The Boardwalk (1900)" />

            <p className="text-sm text-gray-500 mb-4 italic">Screenplay — the meeting.</p>
            <Screenplay>{`EXT. SANTA CRUZ BEACH -- THE NEW PLEASURE PIER -- DAY (1900)

Fresh-cut planks, white paint, electric bulbs strung against
a blue sky. The leisure economy, newborn and gleaming -- built
on the very ground the prologue mourned.

FRANK SOTO (18) hauls a crate of bottles down the boards,
shirt stuck to his back. Beautiful, watchful, silent. He does
not look at the summer people. He has learned not to.

A BANNER: "TEST YOUR ARM -- 3 BALLS A NICKEL -- KNOCK 'EM DOWN."
Frank sets down the crate and takes his post behind the booth:
a pyramid of iron milk-bottles, a basket of worn baseballs.

CHET ASHBY III (20), white flannels, straw boater, steers
CLARA WHITFIELD (17) toward the booth by the elbow. She is
bright-eyed and already bored of him.

CHET
Watch. I rowed stroke at the club.

He throws three. Misses, misses, clips the pyramid -- it holds.
He throws money down instead, annoyed.

CHET (CONT'D)
Rigged. They weight the bottom row.
(to Frank, not really to him)
Aren't they weighted, boy?

Frank says nothing. He picks up one ball. Turns it in his
fingers -- the stitched leather, an old friend -- and without
seeming to wind up at all, throws.

CRACK. The pyramid does not fall over. It LEAVES, all six
bottles blown clean off the shelf, ringing on the boards.

Silence. Clara laughs -- a real one, surprised out of her.

CLARA
Do it again.

FRANK
(quiet)
Costs a nickel.

She holds his eye a beat too long. Chet sees it. Everything
that happens in this picture is already happening, right here.

CLARA
(producing a coin)
Then here's a nickel.`}</Screenplay>

            <p className="text-sm text-gray-500 mt-8 mb-4 italic">Novel prose — the same beat, interior.</p>
            <Prose>
              <p>
                He had learned not to look at the summer people, which was a thing you learned the way you learned not
                to touch the lime vats — once, and never again. So he was looking at the bottles, and the worn ball in
                his hand, when the girl laughed.
              </p>
              <p>
                It was not the laugh they used on the pier, the bright tin one the young ladies kept in their purses
                with their handkerchiefs. It came out of her sideways and surprised, as if he had knocked it loose along
                with the bottles, and that was the trouble with it. Frank had thrown a baseball through six iron bottles
                and felt nothing; one honest laugh from a stranger and his ears went hot.
              </p>
              <p>
                The boy in the white flannels had felt it too, the shift in the air, the way a dog feels weather. <em>Aren&rsquo;t
                they weighted, boy.</em> Frank knew that voice. It was the voice that had bought the rancho at the
                courthouse and never once had to raise itself. He had been answering it with his silence his whole life,
                because silence was the only thing they couldn&rsquo;t take and couldn&rsquo;t use against you. But the girl was
                holding out a nickel and looking at him as though he were a person and not a fixture of the pier, and the
                old man&rsquo;s voice was somewhere in him saying <em>not while there is a Soto with hands</em> — and Frank
                understood, with the flat cold clarity of a thing already decided, that the silence was going to cost him
                more than it ever had.
              </p>
              <p>
                &ldquo;Then here&rsquo;s a nickel,&rdquo; she said.
              </p>
              <p>
                He took it. Her glove was kid leather, soft as a thing his father might have made in another life, in
                another century, when leather still belonged to them. He gave her a ball, and tried not to think about
                whose hands had tanned the hide of her glove, and failed.
              </p>
            </Prose>
          </section>

          {/* ACT II SAMPLE */}
          <section className="mb-14">
            <H id="act-two" kicker="Written — Act II hinge" title="The Rematch (1903)" />

            <p className="text-sm text-gray-500 mb-4 italic">Screenplay — Stanford at Santa Clara.</p>
            <Screenplay>{`EXT. SANTA CLARA COLLEGE -- BALL GROUND -- DAY (1903)

A college crowd, straw hats and parasols. A hand-painted score
board: STANFORD vs. SANTA CLARA. The Stanford side is louder,
richer, sure of itself.

In the grandstand, among the cardinal red: CLARA WHITFIELD,
older now, a Stanford woman. She did not expect to know anyone
on the field. She is wrong.

ON THE MOUND: FRANK SOTO, 21, Santa Clara flannels gone gray
with dust. He toes the rubber. He has not seen her yet.

AT THE PLATE: CHET ASHBY III, cardinal "S" on his chest,
tapping the corners like he owns them. He owns most things.

CHET
(grinning down the line)
Well. The bottle boy.

The recognition moves across Frank's face and is gone. He
says nothing. He has always said nothing.

Frank looks in. And THERE -- the red of the grandstand, and
Clara, half-risen from her seat, a glove of kid leather
forgotten in her lap. Their eyes meet across four years.

CHET (CONT'D)
(to his bench, loud)
Three balls a nickel, fellas!

Laughter from the Stanford side. Frank sets. Winds. The first
pitch is past Chet before the laugh is finished. STRIKE ONE.

The second buckles his knees. STRIKE TWO. The Stanford bench
goes quiet.

Frank holds the ball a moment -- the stitched leather, an old
friend -- and looks once more at Clara. Then he throws the
best thing he owns.

STRIKE THREE. Chet swings at air and nearly screws himself
into the dirt.

The Santa Clara side erupts. Chet stares at the empty plate.
And Clara is on her feet, alone in a sea of red, clapping --
for the wrong team, for the wrong boy, in front of everyone
she knows.

She doesn't care. That is the whole story of her, right there.

FRANK
(under his breath, to no one)
Costs a nickel.`}</Screenplay>
          </section>

          {/* NOTES */}
          <section className="mb-14">
            <H id="notes" kicker="Working notes" title="Notes & to-do" />
            <Prose>
              <ul className="list-disc pl-6 space-y-2 marker:text-amber-500/60">
                <li><strong>Decide the name.</strong> &ldquo;Frank Soto&rdquo; is a placeholder surname; confirm or swap (keeping &ldquo;Frank&rdquo;).</li>
                <li><strong>Anachronism call (Act III).</strong> Keep ROY / World Series MVP / &ldquo;Dodgers&rdquo; as full fiction, or swap to the period-real Brooklyn Robins + Chalmers Award? Changes a few lines, not the emotion.</li>
                <li><strong>Act II now has its hinge</strong> (the Stanford rematch + Clara&rsquo;s choice). Still to break: the decade of being passed over, how Clara &amp; Frank stay tethered through it, and whether/how Chet resurfaces in the bigs in Act III.</li>
                <li><strong>Timeline locked to the emotion:</strong> son born <strong>Jan 1, 1918</strong> → Frank&rsquo;s one great season is 1918 → makes him a <strong>36-year-old rookie</strong>. We keep that on purpose — the lateness is the tragedy. (Loosely-based license; the real Arellanes debuted at 26.)</li>
                <li><strong>The leather match-cut</strong> (hide → newborn → baseball → final glove) is the visual spine — plant and pay off in every act.</li>
                <li><strong>Verify before leaning on it:</strong> the 1863–64 California drought details and the reported 1812 Mission Santa Cruz uprising.</li>
                <li><strong>Optional COVID bracket</strong> — a brief 2020 bookend if we want the pandemic echo made explicit.</li>
                <li><strong>Dedication / give-back</strong> — end-card dedication; trace descendants or give to a Latino-baseball / Santa Cruz heritage cause if the project earns.</li>
              </ul>
            </Prose>
          </section>
        </main>
      </div>
    </div>
  );
}
