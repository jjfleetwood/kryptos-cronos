import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}
    >
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1 mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-sm font-medium">Gamified Security Training</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Cyber</span>
          <span className="text-cyan-400">Quest</span>
        </h1>

        <p className="text-xl text-gray-400 mb-4 leading-relaxed">
          Master cybersecurity and AI through hands-on, stage-based challenges.
          Earn XP, unlock badges, and level up your skills — one mission at a time.
        </p>

        <p className="text-sm text-gray-600 mb-10">
          Built for learners, security professionals, and teams.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/stages"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg text-lg transition-colors"
          >
            Start Training →
          </Link>
          <Link
            href="/stages"
            className="px-8 py-4 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-semibold rounded-lg text-lg transition-colors"
          >
            View Stage Map
          </Link>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-24 grid grid-cols-3 gap-8 text-center max-w-lg mx-auto">
        {[
          { value: "10+", label: "Training Stages" },
          { value: "50+", label: "Challenges" },
          { value: "2", label: "Disciplines" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Feature cards */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
        {[
          {
            icon: "🛡️",
            title: "Cybersecurity",
            desc: "CIA Triad, phishing defense, network security, threat detection, and more.",
          },
          {
            icon: "🤖",
            title: "AI & Machine Learning",
            desc: "How AI detects threats, adversarial attacks, prompt injection, and AI ethics.",
          },
          {
            icon: "🎮",
            title: "Gamified Progression",
            desc: "Earn XP and badges as you unlock new stages. Compete, track, and level up.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/40 transition-colors"
          >
            <div className="text-3xl mb-3">{card.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-16 text-xs text-gray-700">CyberQuest — v0.1 Demo</p>
    </main>
  );
}
