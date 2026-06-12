"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useEffect, useRef, useState } from "react";
import { getSession, clearSession, setSession } from "@/lib/auth";
import { useRouter, usePathname } from "next/navigation";
import { useSkin } from "@/contexts/SkinContext";
import { useLocale } from "@/contexts/LocaleContext";
import { LOCALES, LOCALE_FLAGS, LOCALE_LABELS, type Locale } from "@/lib/locale";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const { skin } = useSkin();
  const { t, locale, changeLocale } = useLocale();
  const [username, setUsername] = useState<string | null>(null);
  const [admin, setAdmin] = useState(false);
  const [trialDaysLeft, setTrialDaysLeft] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Render immediately from sessionStorage cache, then validate via cookie
    setUsername(getSession());
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { username: string; isAdmin: boolean; tier?: string; trialDaysLeft?: number | null } | null) => {
        if (data) {
          setUsername(data.username);
          setAdmin(data.isAdmin);
          setSession(data.username);
          setTrialDaysLeft(data.tier === "trial" ? (data.trialDaysLeft ?? null) : null);
        } else {
          setUsername(null);
          setAdmin(false);
          setTrialDaysLeft(null);
        }
      })
      .catch(() => {});
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Close menus on route change
  useEffect(() => { setMobileOpen(false); setMoreOpen(false); }, [pathname]);

  function handleUpgrade() {
    router.push("/upgrade");
  }

  function handleLogout() {
    clearSession();
    setUsername(null);
    setMobileOpen(false);
    router.push("/");
  }

  // One uniform nav model — every item is an icon + small label (same format for
  // every entry) so the top bar reads as one consistent set. Primary items stay
  // in the row; the secondary ones fold behind a "More" menu to keep it tidy.
  type NavItem = { href: string; icon: string; label: string };
  const primaryItems: NavItem[] = [
    { href: "/stages", icon: "🗺️", label: t("nav.stages") },
    { href: "/certs", icon: "📜", label: t("nav.certs", "Certifications") },
    { href: "/leaderboard", icon: "🏆", label: t("nav.leaderboard") },
    ...(username
      ? [
          { href: "/quests", icon: "🎯", label: "Quests" },
          { href: "/leagues", icon: "⚔️", label: "Leagues" },
          { href: "/achievements", icon: "🏅", label: "Achievements" },
        ]
      : []),
  ];
  const moreItems: NavItem[] = username
    ? [
        { href: "/audit", icon: "🔎", label: t("nav.audit", "Advanced Audit") },
        { href: "/journey", icon: "🌍", label: t("nav.journey") },
        { href: "/explore", icon: "🧭", label: t("nav.explore", "Explore") },
        { href: "/account", icon: "⚙️", label: "Account" },
      ]
    : [];
  const allItems = [...primaryItems, ...moreItems]; // mobile drawer shows them flat
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const moreActive = moreItems.some((m) => isActive(m.href));

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled || mobileOpen ? skin.navBg : "transparent",
        borderBottom: scrolled || mobileOpen
          ? `1px solid ${skin.cardBorder}`
          : "1px solid transparent",
        backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo size={30} />
          <span className="text-white font-bold text-lg tracking-tight">
            Kryptós <span className="text-cyan-400">CronOS</span>
          </span>
        </Link>

        {/* Desktop nav — one uniform row of icon + small-label items; the secondary
            items fold behind "More" so the row stays comfortable. */}
        <nav className="hidden md:flex items-end gap-0.5">
          {primaryItems.map(({ href, icon, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                title={label}
                className="flex flex-col items-center justify-center gap-0.5 px-2 py-1 rounded-lg transition-colors hover:bg-white/10"
                style={{ background: active ? "rgba(255,255,255,0.10)" : undefined }}
              >
                <span className="text-[15px] leading-none">{icon}</span>
                <span className="text-[9px] leading-none font-medium tracking-tight whitespace-nowrap" style={{ color: active ? skin.accent : skin.textMuted }}>
                  {label}
                </span>
              </Link>
            );
          })}

          {moreItems.length > 0 && (
            <div ref={moreRef} className="relative">
              <button
                onClick={() => setMoreOpen((o) => !o)}
                title="More"
                className="flex flex-col items-center justify-center gap-0.5 px-2 py-1 rounded-lg transition-colors hover:bg-white/10"
                style={{ background: moreOpen || moreActive ? "rgba(255,255,255,0.10)" : undefined }}
              >
                <span className="text-[15px] leading-none">⋯</span>
                <span className="text-[9px] leading-none font-medium tracking-tight" style={{ color: moreActive ? skin.accent : skin.textMuted }}>More</span>
              </button>
              {moreOpen && (
                <div
                  className="absolute right-0 top-full mt-2 rounded-xl overflow-hidden shadow-2xl z-50 min-w-[170px] py-1"
                  style={{ background: skin.navBg, border: `1px solid ${skin.cardBorder}` }}
                >
                  {moreItems.map(({ href, icon, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:opacity-80"
                      style={{ color: isActive(href) ? skin.accent : skin.textSecondary, background: isActive(href) ? `${skin.accent}12` : "transparent" }}
                    >
                      <span className="text-base leading-none">{icon}</span> {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {admin && (
            <Link
              href="/admin"
              title={t("nav.admin")}
              className="flex flex-col items-center justify-center gap-0.5 px-2 py-1 rounded-lg transition-colors hover:bg-red-500/10"
            >
              <span className="text-[15px] leading-none">🛡️</span>
              <span className="text-[9px] leading-none font-medium tracking-tight text-red-400 whitespace-nowrap">{t("nav.admin")}</span>
            </Link>
          )}
        </nav>

        {/* Desktop auth + language switcher */}
        <div className="hidden md:flex items-center gap-3 relative">
          {/* Language switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              title={t("nav.language")}
              className="text-xs px-2 py-1.5 rounded-lg transition-colors flex items-center gap-1"
              style={{ border: `1px solid ${skin.cardBorder}`, color: skin.textMuted }}
            >
              <span>{LOCALE_FLAGS[locale]}</span>
              <span className="font-mono uppercase">{locale}</span>
            </button>
            {langOpen && (
              <div
                className="absolute right-0 top-full mt-2 rounded-xl overflow-hidden shadow-2xl z-50 min-w-[140px]"
                style={{ background: skin.navBg, border: `1px solid ${skin.cardBorder}` }}
              >
                {LOCALES.map((l) => (
                  <button
                    key={l}
                    onClick={() => { changeLocale(l as Locale); setLangOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-xs transition-colors hover:opacity-80 flex items-center gap-2"
                    style={{
                      color: locale === l ? skin.accent : skin.textSecondary,
                      background: locale === l ? `${skin.accent}12` : "transparent",
                    }}
                  >
                    {LOCALE_FLAGS[l]} {LOCALE_LABELS[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {username && trialDaysLeft !== null && (
            <button
              onClick={handleUpgrade}
              className="text-xs px-2.5 py-1 rounded-full font-bold transition-opacity hover:opacity-80"
              style={{ background: "rgba(245,158,11,0.15)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.35)" }}
            >
              ⚡ {trialDaysLeft}d left
            </button>
          )}
          {username ? (
            <>
              <Link href={`/profile/${username}`} className="text-sm hidden sm:block transition-opacity hover:opacity-80" style={{ color: skin.textSecondary }}>
                <span style={{ color: skin.accent }}>{username}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-xs px-3 py-1.5 rounded-lg transition-colors hover:text-red-400"
                style={{
                  border: `1px solid ${skin.cardBorder}`,
                  color: skin.textMuted,
                }}
              >
                {t("nav.logOut")}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm transition-colors"
                style={{ color: skin.textSecondary }}
              >
                {t("nav.signIn")}
              </Link>
              <Link
                href="/login"
                className="text-sm px-4 py-2 font-bold rounded-lg transition-opacity hover:opacity-80"
                style={{ background: skin.accent, color: skin.dark ? "#000" : "#fff" }}
              >
                {t("nav.getStarted")}
              </Link>
            </>
          )}
        </div>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-400 transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-400 transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-400 transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 py-4 space-y-1"
          style={{
            borderTop: `1px solid ${skin.cardBorder}`,
            background: skin.navBg,
          }}
        >
          {/* Same unified item set as desktop, shown flat (deduped — journey once) */}
          {allItems.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-3 py-2.5 rounded-lg text-sm transition-colors"
              style={{ color: isActive(href) ? skin.accent : skin.textSecondary }}
            >
              {icon} {label}
            </Link>
          ))}
          {username && (
            <Link href={`/profile/${username}`} className="block px-3 py-2.5 rounded-lg text-sm" style={{ color: skin.accent }}>
              🧑‍💻 {t("nav.profile")}
            </Link>
          )}
          {admin && (
            <Link href="/admin" className="block px-3 py-2.5 rounded-lg text-red-400 text-sm font-semibold">
              🛡️ {t("nav.admin")}
            </Link>
          )}
          <div className="pt-3 mt-3" style={{ borderTop: `1px solid ${skin.cardBorder}` }}>
            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 px-3 py-2 mb-2">
              <span className="text-xs" style={{ color: skin.textMuted }}>{t("nav.language")}:</span>
              {LOCALES.map((l) => (
                <button
                  key={l}
                  onClick={() => changeLocale(l as Locale)}
                  className="text-xs px-2 py-1 rounded-lg transition-colors"
                  style={{
                    background: locale === l ? `${skin.accent}20` : "transparent",
                    color: locale === l ? skin.accent : skin.textMuted,
                    border: `1px solid ${locale === l ? skin.accent : skin.cardBorder}`,
                  }}
                >
                  {LOCALE_FLAGS[l]}
                </button>
              ))}
            </div>

            {username ? (
              <div className="space-y-1">
                <p className="px-3 py-1 text-xs" style={{ color: skin.textMuted }}>
                  {t("common.signedInAs")} <span style={{ color: skin.accent }}>{username}</span>
                </p>
                {trialDaysLeft !== null && (
                  <button
                    onClick={handleUpgrade}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-opacity hover:opacity-80"
                    style={{ background: "rgba(245,158,11,0.1)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.25)" }}
                  >
                    ⚡ {t("nav.trialPrefix")} {trialDaysLeft} {trialDaysLeft === 1 ? t("nav.trialDaySingular") : t("nav.trialDayPlural")} {t("nav.trialSuffix")}
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm hover:text-red-400 transition-colors"
                  style={{ color: skin.textMuted }}
                >
                  {t("nav.logOut")}
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link href="/login" className="block px-3 py-2.5 rounded-lg text-sm" style={{ color: skin.textSecondary }}>
                  {t("nav.signIn")}
                </Link>
                <Link
                  href="/login"
                  className="block px-3 py-2.5 rounded-lg font-bold text-sm text-center transition-opacity hover:opacity-80"
                  style={{ background: skin.accent, color: skin.dark ? "#000" : "#fff" }}
                >
                  {t("nav.getStarted")}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
