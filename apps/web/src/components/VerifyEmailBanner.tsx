"use client";

import { useEffect, useState } from "react";

// Soft "verify your email" nudge. Shows only for logged-in, unverified accounts
// (grandfathered + admin accounts report verified). Blocks nothing.
export default function VerifyEmailBanner() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && d.emailVerified === false) {
          setShow(true);
          setEmail(d.email ?? "");
        }
      })
      .catch(() => {});
  }, []);

  if (!show) return null;

  async function resend() {
    setSending(true);
    try {
      await fetch("/api/resend-verification", { method: "POST" });
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-sm text-amber-200">
      <span>
        ⚠ Verify your email{email ? ` (${email})` : ""} to secure your account.
      </span>
      {sent ? (
        <span className="font-semibold text-emerald-300">Verification email sent ✓</span>
      ) : (
        <button
          onClick={resend}
          disabled={sending}
          className="font-semibold text-amber-100 underline underline-offset-2 hover:text-white disabled:opacity-50"
        >
          {sending ? "Sending…" : "Resend email"}
        </button>
      )}
    </div>
  );
}
