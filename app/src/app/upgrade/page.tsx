"use client";

import { useState } from "react";
import Link from "next/link";
import { useSkin } from "@/contexts/SkinContext";
import { useLocale } from "@/contexts/LocaleContext";

const FEATURE_KEYS = [
  { icon: "🗺️", key: "upgrade.feature1" },
  { icon: "🤖", key: "upgrade.feature2" },
  { icon: "🏆", key: "upgrade.feature3" },
  { icon: "🛒", key: "upgrade.feature4" },
  { icon: "📄", key: "upgrade.feature5" },
  { icon: "📦", key: "upgrade.feature6" },
  { icon: "🔒", key: "upgrade.feature7" },
  { icon: "♾️", key: "upgrade.feature8" },
];

const FAQ_KEYS = [
  { qKey: "upgrade.faq1q", aKey: "upgrade.faq1a" },
  { qKey: "upgrade.faq2q", aKey: "upgrade.faq2a" },
  { qKey: "upgrade.faq3q", aKey: "upgrade.faq3a" },
  { qKey: "upgrade.faq4q", aKey: "upgrade.faq4a" },
];

const TRUST_KEYS = ["upgrade.stripePayments", "upgrade.cancelAnytime", "upgrade.noHiddenFees"];

export default function UpgradePage() {
  const { skin } = useSkin();
  const { t } = useLocale();
  const [loading, setLoading] = useState<"monthly" | "yearly" | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function checkout(plan: "monthly" | "yearly") {
    setLoading(plan);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json() as { url?: string; error?: string };
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error ?? t("upgrade.redirecting"));
        setLoading(null);
      }
    } catch {
      alert(t("paywall.somethingWentWrong"));
      setLoading(null);
    }
  }

  return (
    <main
      className="min-h-screen pt-20 pb-24 px-4"
      style={{ background: skin.pageBg }}
    >
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center pt-12 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-widest"
          style={{ background: "rgba(245,158,11,0.12)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)" }}>
          {t("upgrade.trialEndingSoon")}
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: skin.textPrimary }}>
          {t("upgrade.headingLine1")}<br />
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #22d3ee, #818cf8)" }}>
            {t("upgrade.headingLine2")}
          </span>
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: skin.textSecondary }}>
          {t("upgrade.subtitle")}
        </p>
      </div>

      {/* Pricing cards */}
      <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-5 mb-16">

        {/* Yearly — featured */}
        <div className="relative rounded-2xl p-px overflow-hidden order-first sm:order-last"
          style={{ background: "linear-gradient(135deg, #22d3ee44, #818cf888, #6366f144)" }}>
          <div className="rounded-2xl p-7 h-full flex flex-col"
            style={{ background: "#0d1117" }}>

            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest"
                style={{ background: "linear-gradient(90deg, #22d3ee, #818cf8)", color: "#000" }}>
                {t("upgrade.bestValue")}
              </span>
            </div>

            <div className="text-xs uppercase tracking-widest mb-3 mt-2" style={{ color: "#818cf8" }}>{t("upgrade.annual")}</div>

            <div className="flex items-end gap-1.5 mb-1">
              <span className="text-5xl font-black" style={{ color: skin.textPrimary }}>$99</span>
              <span className="text-sm pb-2" style={{ color: skin.textMuted }}>{t("upgrade.perYearUnit")}</span>
            </div>
            <div className="text-xs mb-1" style={{ color: "#22d3ee" }}>{t("upgrade.annualMonthlyRate")}</div>
            <div className="inline-block text-xs px-2 py-0.5 rounded-full font-bold mb-6"
              style={{ background: "rgba(129,140,248,0.15)", color: "#818cf8" }}>
              {t("upgrade.save41")}
            </div>

            <button
              onClick={() => checkout("yearly")}
              disabled={loading !== null}
              className="w-full py-3.5 rounded-xl font-black text-sm transition-opacity hover:opacity-90 disabled:opacity-50 mb-3"
              style={{ background: "linear-gradient(90deg, #22d3ee, #818cf8, #6366f1)", color: "#000" }}
            >
              {loading === "yearly" ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  {t("upgrade.redirecting")}
                </span>
              ) : t("upgrade.getProAnnual")}
            </button>

            <p className="text-center text-xs" style={{ color: skin.textMuted }}>{t("upgrade.cancelBilledYearly")}</p>
          </div>
        </div>

        {/* Monthly */}
        <div className="rounded-2xl p-7 flex flex-col"
          style={{ background: skin.cardBg, border: `1px solid ${skin.cardBorder}` }}>

          <div className="text-xs uppercase tracking-widest mb-3" style={{ color: skin.accent }}>{t("upgrade.monthly")}</div>

          <div className="flex items-end gap-1.5 mb-1">
            <span className="text-5xl font-black" style={{ color: skin.textPrimary }}>$13.99</span>
            <span className="text-sm pb-2" style={{ color: skin.textMuted }}>{t("upgrade.perMoUnit")}</span>
          </div>
          <div className="text-xs mb-6" style={{ color: skin.textMuted }}>{t("upgrade.perYearTotal")}</div>

          <button
            onClick={() => checkout("monthly")}
            disabled={loading !== null}
            className="w-full py-3.5 rounded-xl font-black text-sm transition-colors disabled:opacity-50 mb-3"
            style={{ background: "rgba(34,211,238,0.12)", color: skin.accent, border: `1px solid rgba(34,211,238,0.35)` }}
          >
            {loading === "monthly" ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                {t("upgrade.redirecting")}
              </span>
            ) : t("upgrade.getProMonthly")}
          </button>

          <p className="text-center text-xs" style={{ color: skin.textMuted }}>{t("upgrade.cancelBilledMonthly")}</p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-center mb-6" style={{ color: skin.textMuted }}>
          {t("upgrade.everythingInPro")}
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {FEATURE_KEYS.map((f) => (
            <div key={f.key}
              className="flex items-start gap-3 px-4 py-3.5 rounded-xl"
              style={{ background: skin.cardBg, border: `1px solid ${skin.cardBorder}` }}>
              <span className="text-lg shrink-0">{f.icon}</span>
              <span className="text-sm leading-snug" style={{ color: skin.textSecondary }}>{t(f.key)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-center mb-6" style={{ color: skin.textMuted }}>
          {t("upgrade.faq")}
        </h2>
        <div className="space-y-2">
          {FAQ_KEYS.map((item, i) => (
            <div key={i}
              className="rounded-xl overflow-hidden"
              style={{ border: `1px solid ${skin.cardBorder}` }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold transition-colors"
                style={{ color: skin.textSecondary, background: skin.cardBg }}
              >
                {t(item.qKey)}
                <span className="ml-4 shrink-0 text-xs transition-transform duration-200"
                  style={{ color: skin.textMuted, transform: openFaq === i ? "rotate(180deg)" : "none" }}>▼</span>
              </button>
              {openFaq === i && (
                <div className="px-5 py-4 text-sm" style={{ color: skin.textMuted, background: "rgba(255,255,255,0.02)", borderTop: `1px solid ${skin.cardBorder}` }}>
                  {t(item.aKey)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Trust footer */}
      <div className="max-w-xl mx-auto text-center">
        <div className="flex items-center justify-center gap-6 mb-4 flex-wrap">
          {TRUST_KEYS.map((key) => (
            <span key={key} className="text-xs" style={{ color: skin.textMuted }}>{t(key)}</span>
          ))}
        </div>
        <Link href="/stages" className="text-xs transition-colors" style={{ color: skin.textMuted }}>
          {t("upgrade.continueFreeTrial")}
        </Link>
      </div>
    </main>
  );
}
