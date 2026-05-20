"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login, register } from "@/lib/auth";
import { useSkin } from "@/contexts/SkinContext";

type Tab = "login" | "signup";

export default function LoginPage() {
  const router = useRouter();
  const { skin } = useSkin();
  const [tab, setTab] = useState<Tab>("login");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");
  const [signupError, setSignupError] = useState("");
  const [signupLoading, setSignupLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    const result = await login(loginUsername, loginPassword);
    setLoginLoading(false);
    if (result.success) router.push("/stages");
    else setLoginError(result.error ?? "Login failed.");
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setSignupError("");
    if (signupPassword !== signupConfirm) {
      setSignupError("Passwords do not match.");
      return;
    }
    setSignupLoading(true);
    const result = await register(signupUsername, signupEmail, signupPassword);
    setSignupLoading(false);
    if (result.success) router.push("/stages");
    else setSignupError(result.error ?? "Registration failed.");
  }

  const inputClass = skin.dark
    ? "w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm"
    : "w-full rounded-lg px-4 py-3 focus:outline-none transition-all text-sm font-medium";

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ background: skin.pageBg }}
    >
      {/* Background effects */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: skin.dark ? "rgba(34,211,238,0.08)" : "rgba(14,165,233,0.15)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full blur-3xl pointer-events-none"
        style={{ background: skin.dark ? "rgba(167,139,250,0.08)" : "rgba(250,204,21,0.2)" }}
      />
      {skin.dark && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      )}

      <div className="w-full max-w-sm relative z-10">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm transition-colors mb-8 hover:opacity-70"
          style={{ color: skin.textMuted }}
        >
          ← Back to home
        </Link>

        {/* Branding */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-3xl mb-4"
            style={{
              background: skin.dark
                ? "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.15))"
                : "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(250,204,21,0.2))",
              border: `1px solid ${skin.cardBorder}`,
            }}
          >
            🛡️
          </div>
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: skin.textPrimary }}>
            Kryptós <span style={{ color: skin.accent }}>CronOS</span>
          </h1>
          <p className="text-xs mt-1 font-mono" style={{ color: skin.textMuted }}>(κρυπτός χρόνος)</p>
          <p className="text-sm mt-1" style={{ color: skin.textSecondary }}>
            {tab === "login"
              ? (skin.id === "youth" ? "Welcome back! Let's play! 🎮" : "Welcome back, Agent.")
              : (skin.id === "youth" ? "Join the adventure! 🚀" : "Join the mission.")}
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: skin.cardBg,
            border: `1px solid ${skin.cardBorder}`,
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Tabs */}
          <div className="flex" style={{ borderBottom: `1px solid ${skin.cardBorder}` }}>
            {(["login", "signup"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                  setLoginError("");
                  setSignupError("");
                }}
                className="flex-1 py-4 text-sm font-semibold transition-all"
                style={{
                  color: tab === t ? skin.accent : skin.textMuted,
                  background: tab === t ? `${skin.accent}12` : "transparent",
                  borderBottom: tab === t ? `2px solid ${skin.accent}` : "2px solid transparent",
                }}
              >
                {t === "login" ? "Log In" : "Sign Up"}
              </button>
            ))}
          </div>

          <div className="p-6">
            {tab === "login" ? (
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: skin.textMuted }}>
                    {skin.id === "youth" ? "Your Name" : "Username"}
                  </label>
                  <input
                    type="text"
                    autoComplete="username"
                    placeholder={skin.id === "youth" ? "your_name" : "agent_name"}
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    required
                    className={inputClass}
                    style={skin.dark ? {} : {
                      background: skin.inputBg,
                      border: `1px solid ${skin.inputBorder}`,
                      color: skin.textPrimary,
                      borderRadius: 10,
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: skin.textMuted }}>
                    Password
                  </label>
                  <input
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    className={inputClass}
                    style={skin.dark ? {} : {
                      background: skin.inputBg,
                      border: `1px solid ${skin.inputBorder}`,
                      color: skin.textPrimary,
                      borderRadius: 10,
                    }}
                  />
                </div>

                {loginError && (
                  <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5">
                    <span>⚠</span> {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full py-3 font-bold rounded-xl text-sm mt-1 transition-all disabled:opacity-50"
                  style={{
                    background: loginLoading ? skin.accent + "80" : skin.btnPrimary,
                    color: skin.btnPrimaryText,
                  }}
                >
                  {loginLoading ? "Verifying…" : skin.id === "youth" ? "Let's Go! 🚀" : "Log In →"}
                </button>

                <div className="flex items-center justify-between text-xs" style={{ color: skin.textMuted }}>
                  <span>
                    No account?{" "}
                    <button type="button" onClick={() => setTab("signup")} style={{ color: skin.accent }} className="hover:opacity-80 transition-opacity">
                      Sign up free
                    </button>
                  </span>
                  <Link href="/forgot-password" style={{ color: skin.textMuted }} className="hover:opacity-80 transition-opacity">
                    Forgot password?
                  </Link>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSignup} className="flex flex-col gap-4">
                {[
                  { label: skin.id === "youth" ? "Your Name" : "Username", type: "text", placeholder: "agent_name (min. 3 chars)", value: signupUsername, set: setSignupUsername, auto: "username" },
                  { label: "Email", type: "email", placeholder: "agent@example.com", value: signupEmail, set: setSignupEmail, auto: "email" },
                  { label: "Password", type: "password", placeholder: "min. 8 characters", value: signupPassword, set: setSignupPassword, auto: "new-password" },
                  { label: "Confirm Password", type: "password", placeholder: "••••••••", value: signupConfirm, set: setSignupConfirm, auto: "new-password" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: skin.textMuted }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      autoComplete={field.auto}
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={(e) => field.set(e.target.value)}
                      required
                      className={inputClass}
                      style={skin.dark ? {} : {
                        background: skin.inputBg,
                        border: `1px solid ${skin.inputBorder}`,
                        color: skin.textPrimary,
                        borderRadius: 10,
                      }}
                    />
                  </div>
                ))}

                {signupError && (
                  <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5">
                    <span>⚠</span> {signupError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={signupLoading}
                  className="w-full py-3 font-bold rounded-xl text-sm mt-1 transition-all disabled:opacity-50"
                  style={{
                    background: signupLoading ? skin.accent + "80" : skin.btnPrimary,
                    color: skin.btnPrimaryText,
                  }}
                >
                  {signupLoading ? "Creating account…" : skin.id === "youth" ? "Start Adventure! 🌟" : "Create Account →"}
                </button>

                <p className="text-center text-xs" style={{ color: skin.textMuted }}>
                  Have an account?{" "}
                  <button type="button" onClick={() => setTab("login")} style={{ color: skin.accent }} className="hover:opacity-80 transition-opacity">
                    Log in
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>

        <p className="text-center text-xs mt-5" style={{ color: skin.textMuted }}>
          {skin.id === "youth" ? "Your scores are saved! 🎯" : "Credentials stored locally · Progress synced to server"}
        </p>
      </div>
    </div>
  );
}
