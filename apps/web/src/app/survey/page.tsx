"use client";

import { useState } from "react";
import Link from "next/link";

type SurveyData = {
  hearAbout: string;
  securityLevel: string;
  mostValuable: string[];
  missing: string;
  nps: number | null;
  upgradeReason: string;
  preferredLearning: string;
  timePerWeek: string;
  role: string;
  comments: string;
};

const INITIAL: SurveyData = {
  hearAbout: "",
  securityLevel: "",
  mostValuable: [],
  missing: "",
  nps: null,
  upgradeReason: "",
  preferredLearning: "",
  timePerWeek: "",
  role: "",
  comments: "",
};

const TRACKS = [
  "Core Security (CVEs, SQL injection, phishing)",
  "Tech Audit (COBIT, cloud, AI agents)",
  "Threat Frameworks (MITRE ATT&CK / ATLAS)",
  "AI Security (OWASP LLM Top 10)",
  "Quantum Era (PQC, QKD)",
  "Cisco / Enterprise Defense",
  "Travel & Language modules",
  "Sports & Crafts modules",
];

const NPS_LABELS: Record<number, string> = {
  0: "Not at all likely",
  5: "Neutral",
  10: "Extremely likely",
};

export default function SurveyPage() {
  const [data, setData] = useState<SurveyData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [reward, setReward] = useState<{ durationDays: number; message: string } | null>(null);

  function toggleTrack(track: string) {
    setData((prev) => ({
      ...prev,
      mostValuable: prev.mostValuable.includes(track)
        ? prev.mostValuable.filter((t) => t !== track)
        : [...prev.mostValuable, track],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      const json = await res.json() as { ok: boolean; reward?: { durationDays: number; message: string } };
      if (json.reward) setReward(json.reward);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}
      >
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">{reward ? "🎉" : "🙏"}</div>
          <h2 className="text-3xl font-black text-white mb-3">{reward ? "Pro Unlocked!" : "Thank you!"}</h2>
          {reward ? (
            <>
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/8 px-6 py-5 mb-6">
                <p className="text-cyan-300 font-bold text-lg mb-1">{reward.durationDays} days of Pro access</p>
                <p className="text-gray-400 text-sm">All 811 stages · Unlimited ARIA hints · Certificate paths</p>
              </div>
              <p className="text-gray-500 text-sm mb-8">Thanks for your feedback — it directly shapes what we build next.</p>
            </>
          ) : (
            <p className="text-gray-400 mb-8">Your feedback helps us build a better training platform for everyone.</p>
          )}
          <Link href="/stages" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-colors">
            {reward ? "Start Exploring →" : "Continue Training →"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-4 py-16"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}
    >
      <div className="max-w-2xl mx-auto">
        <Link href="/stages" className="text-gray-500 hover:text-cyan-400 text-sm mb-8 inline-block transition-colors">
          ← Back to Stage Map
        </Link>

        <div className="mb-10">
          <h1 className="text-4xl font-black text-white mb-3">Tell us what you think</h1>
          <p className="text-gray-400">
            Takes 3 minutes. Your answers directly shape what we build next.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Q1: How did you hear about us */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <label className="block text-white font-bold mb-4">How did you hear about Kryptós CronOS?</label>
            <div className="grid grid-cols-2 gap-2">
              {["Search engine", "Social media", "Friend / colleague", "Security forum", "LinkedIn", "GitHub", "Conference / event", "Other"].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setData((p) => ({ ...p, hearAbout: opt }))}
                  className={`px-4 py-2.5 rounded-xl border text-sm text-left transition-all ${
                    data.hearAbout === opt
                      ? "border-cyan-500/60 bg-cyan-500/15 text-cyan-300"
                      : "border-white/10 bg-white/3 text-gray-400 hover:border-white/25"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Q2: Security background */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <label className="block text-white font-bold mb-4">What is your current cybersecurity background?</label>
            <div className="space-y-2">
              {[
                "Complete beginner — no security background",
                "Some IT experience, new to security",
                "1–3 years in security or adjacent role",
                "4–8 years — mid-level practitioner",
                "8+ years — senior / specialist",
                "Student (school or university)",
              ].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setData((p) => ({ ...p, securityLevel: opt }))}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-left transition-all ${
                    data.securityLevel === opt
                      ? "border-purple-500/60 bg-purple-500/12 text-purple-300"
                      : "border-white/10 bg-white/3 text-gray-400 hover:border-white/25"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Q3: Most valuable tracks */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <label className="block text-white font-bold mb-1">Which tracks are most valuable to you?</label>
            <p className="text-xs text-gray-600 mb-4">Select all that apply</p>
            <div className="space-y-2">
              {TRACKS.map((track) => {
                const selected = data.mostValuable.includes(track);
                return (
                  <button
                    type="button"
                    key={track}
                    onClick={() => toggleTrack(track)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-left transition-all flex items-center gap-3 ${
                      selected
                        ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-300"
                        : "border-white/10 bg-white/3 text-gray-400 hover:border-white/25"
                    }`}
                  >
                    <span className="flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center text-xs font-bold"
                      style={{
                        borderColor: selected ? "#4ade80" : "rgba(255,255,255,0.2)",
                        background: selected ? "rgba(74,222,128,0.2)" : "transparent",
                        color: selected ? "#4ade80" : "transparent",
                      }}>
                      ✓
                    </span>
                    {track}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Q4: What's missing */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <label className="block text-white font-bold mb-2">What content or features are missing?</label>
            <p className="text-xs text-gray-600 mb-3">Be specific — this goes directly to our roadmap.</p>
            <textarea
              value={data.missing}
              onChange={(e) => setData((p) => ({ ...p, missing: e.target.value }))}
              rows={4}
              placeholder="e.g. — mobile app, more OWASP stages, team/cohort mode, certificate exam prep..."
              className="w-full resize-none rounded-xl bg-black/40 border border-white/10 text-gray-200 placeholder-gray-700 text-sm px-4 py-3 focus:outline-none focus:border-cyan-500/50 leading-relaxed"
            />
          </div>

          {/* Q5: NPS */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <label className="block text-white font-bold mb-2">
              How likely are you to recommend Kryptós CronOS to a colleague?
            </label>
            <p className="text-xs text-gray-600 mb-4">0 = Not at all likely · 10 = Extremely likely</p>
            <div className="flex gap-1.5 flex-wrap">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <button
                  type="button"
                  key={n}
                  onClick={() => setData((p) => ({ ...p, nps: n }))}
                  className={`w-10 h-10 rounded-xl border text-sm font-bold transition-all ${
                    data.nps === n
                      ? n >= 9 ? "border-emerald-500 bg-emerald-500/20 text-emerald-300"
                        : n >= 7 ? "border-cyan-500 bg-cyan-500/20 text-cyan-300"
                        : "border-orange-500 bg-orange-500/20 text-orange-300"
                      : "border-white/10 bg-white/3 text-gray-500 hover:border-white/30"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            {data.nps !== null && (
              <p className="text-xs text-gray-600 mt-2">{NPS_LABELS[data.nps] ?? ""}</p>
            )}
          </div>

          {/* Q6: Upgrade reason */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <label className="block text-white font-bold mb-4">What would most make you upgrade to Pro?</label>
            <div className="space-y-2">
              {[
                "Certificate of completion (recognized by employers)",
                "Cisco / CompTIA / ISC² exam prep content",
                "Team/cohort mode for my security team",
                "Offline access (mobile app)",
                "Lower price",
                "More stages in my specific area",
                "I'm already Pro — nothing needed",
              ].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setData((p) => ({ ...p, upgradeReason: opt }))}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-left transition-all ${
                    data.upgradeReason === opt
                      ? "border-amber-500/60 bg-amber-500/10 text-amber-300"
                      : "border-white/10 bg-white/3 text-gray-400 hover:border-white/25"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Q7: Role */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <label className="block text-white font-bold mb-4">What best describes your current role?</label>
            <div className="grid grid-cols-2 gap-2">
              {["SOC Analyst", "Penetration Tester", "Cloud / DevSecOps", "AppSec / Secure Dev", "IT Auditor / GRC", "Security Manager", "Student", "Career switcher", "Educator / Trainer", "Other"].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setData((p) => ({ ...p, role: opt }))}
                  className={`px-4 py-2.5 rounded-xl border text-sm text-left transition-all ${
                    data.role === opt
                      ? "border-sky-500/60 bg-sky-500/12 text-sky-300"
                      : "border-white/10 bg-white/3 text-gray-400 hover:border-white/25"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Q8: Time per week */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <label className="block text-white font-bold mb-4">How much time per week can you dedicate to training?</label>
            <div className="grid grid-cols-2 gap-2">
              {["< 1 hour", "1–3 hours", "3–5 hours", "5–10 hours", "10+ hours"].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setData((p) => ({ ...p, timePerWeek: opt }))}
                  className={`px-4 py-2.5 rounded-xl border text-sm text-left transition-all ${
                    data.timePerWeek === opt
                      ? "border-violet-500/60 bg-violet-500/12 text-violet-300"
                      : "border-white/10 bg-white/3 text-gray-400 hover:border-white/25"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Q9: Open comments */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <label className="block text-white font-bold mb-2">Anything else you&apos;d like to tell us?</label>
            <textarea
              value={data.comments}
              onChange={(e) => setData((p) => ({ ...p, comments: e.target.value }))}
              rows={3}
              placeholder="Open feedback, bug reports, praise, complaints..."
              className="w-full resize-none rounded-xl bg-black/40 border border-white/10 text-gray-200 placeholder-gray-700 text-sm px-4 py-3 focus:outline-none focus:border-cyan-500/50 leading-relaxed"
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">Something went wrong — please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 rounded-2xl font-black text-black text-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            style={{ background: "linear-gradient(90deg, #22d3ee, #818cf8)" }}
          >
            {status === "submitting" ? "Submitting…" : "Submit Feedback →"}
          </button>

          <p className="text-center text-xs text-gray-700">
            Anonymous unless you&apos;re signed in. We read every response.
          </p>
        </form>
      </div>
    </div>
  );
}
