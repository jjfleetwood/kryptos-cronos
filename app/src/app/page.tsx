import Link from "next/link";
import Nav from "@/components/Nav";

const stages = [
  { icon: "🧱", title: "CIA Triad", tag: "Foundations" },
  { icon: "🤖", title: "AI Threat Detection", tag: "AI" },
  { icon: "💉", title: "SQL Injection", tag: "OWASP A03" },
  { icon: "🕸️", title: "Cross-Site Scripting", tag: "OWASP A03" },
  { icon: "🩸", title: "Heartbleed", tag: "CVE-2014-0160" },
  { icon: "🔓", title: "Broken Access Control", tag: "OWASP A01" },
  { icon: "🔑", title: "Auth Failures", tag: "OWASP A07" },
  { icon: "☠️", title: "Log4Shell", tag: "CVE-2021-44228" },
  { icon: "💀", title: "WannaCry", tag: "CVE-2017-0144" },
  { icon: "🌐", title: "SSRF", tag: "OWASP A10" },
  { icon: "💥", title: "Equifax / Struts", tag: "CVE-2017-5638" },
  { icon: "🗄️", title: "MongoDB Misconfiguration", tag: "OWASP A05" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main
        className="min-h-screen flex flex-col"
        style={{ background: "linear-gradient(160deg, #060a10 0%, #0d1117 40%, #0a0e1a 100%)" }}
      >
        {/* ── Hero ── */}
        <section className="relative flex flex-col items-center justify-center text-center px-4 pt-36 pb-28 overflow-hidden">
          {/* Glow orbs */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-32 left-1/3 w-[300px] h-[200px] bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/25 rounded-full px-4 py-1.5 mb-8 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-medium">54 Stages · Real CVEs · Hands-On CTF</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight">
              <span className="text-white">Hack to</span>
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #22d3ee, #a78bfa)" }}
              >
                Defend.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
              Master cybersecurity through the same exploits that hit Equifax, LinkedIn, and the NHS.
              Real vulnerabilities. Real terminals. Real skills.
            </p>

            <p className="text-sm text-gray-600 mb-10">
              No setup. No installations. Open your browser and start hacking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="px-8 py-4 font-bold rounded-xl text-base transition-all text-black"
                style={{ background: "linear-gradient(90deg, #22d3ee, #818cf8)" }}
              >
                Start Training — Free →
              </Link>
              <Link
                href="/stages"
                className="px-8 py-4 border border-white/15 hover:border-cyan-500/50 text-gray-300 hover:text-white font-semibold rounded-xl text-base transition-all backdrop-blur-sm"
              >
                View Stage Map
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-y border-white/5 bg-white/2 py-10 px-4">
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "54", label: "Training Stages" },
              { value: "10", label: "OWASP Top 10" },
              { value: "12+", label: "Real CVEs" },
              { value: "3.5M", label: "Unfilled Cyber Jobs" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-4xl font-black text-transparent bg-clip-text mb-1"
                  style={{ backgroundImage: "linear-gradient(90deg, #22d3ee, #a78bfa)" }}
                >
                  {s.value}
                </div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">How it works</h2>
              <p className="text-gray-500">Three steps from zero to hacker</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  icon: "📖",
                  title: "Read the briefing",
                  desc: "Each stage opens with a full breakdown of the vulnerability — how it works, what it exploits, and the real attack that made headlines.",
                },
                {
                  step: "02",
                  icon: "💻",
                  title: "Run the exploit",
                  desc: "Drop into a simulated terminal. Use real commands to investigate, exploit, and capture the flag — built on the actual vulnerable environment.",
                },
                {
                  step: "03",
                  icon: "🏆",
                  title: "Earn & rank up",
                  desc: "Capture the flag, earn XP, unlock your badge, and climb the leaderboard. Each stage gates the next — no skipping.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative bg-white/3 border border-white/10 rounded-2xl p-7 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="absolute -top-3 left-6 text-xs font-mono font-bold text-cyan-500/60 bg-gray-950 px-2">
                    {item.step}
                  </div>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stage preview ── */}
        <section className="py-16 px-4 bg-white/2 border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The curriculum</h2>
                <p className="text-gray-500">Powered by real incidents. Built for retention.</p>
              </div>
              <Link href="/stages" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                View all stages →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {stages.map((s, i) => (
                <div
                  key={s.title}
                  className="bg-white/3 border border-white/8 rounded-xl p-4 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{s.icon}</span>
                    <span className="text-xs font-mono text-gray-700">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-white text-sm font-semibold leading-snug mb-1.5">{s.title}</p>
                  <span className="text-[10px] text-gray-600 bg-white/5 rounded px-1.5 py-0.5">{s.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Feature highlights ── */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Built different</h2>
              <p className="text-gray-500">Not another video course. Not another quiz bank.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  color: "from-cyan-500/20 to-cyan-500/0",
                  border: "border-cyan-500/20",
                  title: "Real exploit environments",
                  desc: "Every CTF challenge is modeled on the actual server, code, or config from the real incident. Not a simulation of a simulation.",
                },
                {
                  icon: "📊",
                  color: "from-purple-500/20 to-purple-500/0",
                  border: "border-purple-500/20",
                  title: "Gamified progression",
                  desc: "Linear stage gating, XP, badges, and a live leaderboard. The same mechanics that make games addictive — applied to security training.",
                },
                {
                  icon: "📖",
                  color: "from-orange-500/20 to-orange-500/0",
                  border: "border-orange-500/20",
                  title: "Reference always open",
                  desc: "The full briefing — attack diagram, technical breakdown, incident story — is one click away while you're inside the terminal.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className={`relative rounded-2xl border ${f.border} p-7 overflow-hidden`}
                  style={{ background: `linear-gradient(135deg, ${f.color.split(" ")[0].replace("from-", "").replace("/20", "")}20, transparent)` }}
                >
                  <div className="text-4xl mb-5">{f.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Job outcomes ── */}
        <section className="py-24 px-4 bg-white/2 border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-4">
              <p className="text-xs font-mono text-emerald-400/70 uppercase tracking-widest mb-3">3.5 million unfilled positions globally</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Train for jobs that are hiring right now</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Every stage maps to real skills employers list in job postings. Here's what you'll be qualified to do.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {[
                {
                  role: "SOC Analyst",
                  salary: "$70K – $100K",
                  emoji: "🛡️",
                  color: "cyan",
                  skills: ["Threat detection & log analysis", "Incident triage and response", "CVE identification"],
                  stages: ["AI Threat Detection", "WannaCry / EternalBlue", "Log4Shell"],
                },
                {
                  role: "Penetration Tester",
                  salary: "$90K – $140K",
                  emoji: "🎯",
                  color: "purple",
                  skills: ["Web application exploitation", "Network vulnerability assessment", "CTF-style attack simulation"],
                  stages: ["SQL Injection", "XSS", "SSRF", "Heartbleed"],
                },
                {
                  role: "Cloud Security Engineer",
                  salary: "$110K – $160K",
                  emoji: "☁️",
                  color: "orange",
                  skills: ["IAM misconfigurations", "Server-side request forgery", "Secrets management"],
                  stages: ["SSRF / Capital One", "MongoDB Misconfiguration", "Broken Access Control"],
                },
                {
                  role: "AppSec / Secure Dev",
                  salary: "$100K – $150K",
                  emoji: "💻",
                  color: "emerald",
                  skills: ["OWASP Top 10 in production code", "Auth and session security", "Dependency risk management"],
                  stages: ["Auth Failures", "Equifax / Struts", "Log4Shell"],
                },
              ].map((job) => {
                const accent: Record<string, string> = {
                  cyan: "border-cyan-500/20 from-cyan-500/8",
                  purple: "border-purple-500/20 from-purple-500/8",
                  orange: "border-orange-500/20 from-orange-500/8",
                  emerald: "border-emerald-500/20 from-emerald-500/8",
                };
                const tag: Record<string, string> = {
                  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
                  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
                  orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
                  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                };
                const dot: Record<string, string> = {
                  cyan: "bg-cyan-400",
                  purple: "bg-purple-400",
                  orange: "bg-orange-400",
                  emerald: "bg-emerald-400",
                };
                return (
                  <div
                    key={job.role}
                    className={`rounded-2xl border ${accent[job.color]} bg-gradient-to-br ${accent[job.color]} to-transparent p-6`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-xs text-gray-600 mb-1 font-mono uppercase tracking-wider">Role</p>
                        <h3 className="text-white font-bold text-xl">{job.emoji} {job.role}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600 mb-1 font-mono uppercase tracking-wider">Avg salary</p>
                        <p className="text-white font-bold text-sm">{job.salary}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-gray-600 font-mono uppercase tracking-wider mb-2">Skills you'll build</p>
                      <ul className="space-y-1">
                        {job.skills.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-sm text-gray-400">
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot[job.color]}`} />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs text-gray-600 font-mono uppercase tracking-wider mb-2">Covered in</p>
                      <div className="flex flex-wrap gap-1.5">
                        {job.stages.map((s) => (
                          <span key={s} className={`text-xs px-2 py-0.5 rounded border font-mono ${tag[job.color]}`}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-sm text-gray-600 mt-8">
              Completions generate shareable certificates.{" "}
              <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Start earning them →
              </Link>
            </p>
          </div>
        </section>

        {/* ── CTA banner ── */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="rounded-2xl p-12 border border-cyan-500/20 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(167,139,250,0.08) 100%)" }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage: "linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }} />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">
                Ready to start hacking?
              </h2>
              <p className="text-gray-400 mb-8 relative z-10">
                Free to start. No credit card. No setup. Just open a terminal and go.
              </p>
              <Link
                href="/login"
                className="inline-block px-10 py-4 font-bold rounded-xl text-black text-lg relative z-10 transition-all hover:scale-105"
                style={{ background: "linear-gradient(90deg, #22d3ee, #818cf8)" }}
              >
                Create Free Account →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-white/5 py-8 px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xl">🛡️</span>
            <span className="text-white font-bold">Kryptós <span className="text-cyan-400">CronOS</span></span>
          </div>
          <div className="flex justify-center gap-6 text-sm text-gray-600 mb-3">
            <Link href="/stages" className="hover:text-gray-400 transition-colors">Stages</Link>
            <Link href="/leaderboard" className="hover:text-gray-400 transition-colors">Leaderboard</Link>
            <Link href="/login" className="hover:text-gray-400 transition-colors">Sign In</Link>
          </div>
          <p className="text-xs text-gray-700">© 2026 Kryptós CronOS (κρυπτός χρόνος) · Built for defenders</p>
        </footer>
      </main>
    </>
  );
}
