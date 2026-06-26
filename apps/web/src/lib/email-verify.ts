import "server-only";
import { randomBytes } from "crypto";
import { redis } from "@/lib/redis";

// Soft email verification. New users get a verify link; until they click it the
// UI shows a "verify your email" banner, but NOTHING is blocked. Accounts created
// before VERIFY_CUTOFF are grandfathered (treated as verified) so existing users
// are never nagged retroactively.
export const VERIFY_CUTOFF = Date.parse("2026-06-26T00:00:00Z");
const TTL = 7 * 24 * 60 * 60; // 7 days

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** True when the user should be treated as verified (explicit flag OR grandfathered). */
export function isVerified(emailVerified: unknown, createdAt: number): boolean {
  if (emailVerified === "true" || emailVerified === true) return true;
  return createdAt > 0 && createdAt < VERIFY_CUTOFF;
}

export async function sendVerificationEmail(username: string, email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !email) return;

  const token = randomBytes(32).toString("hex");
  await redis.set(`emailverify:${token}`, username.toLowerCase(), { ex: TTL });

  const baseUrl = process.env.APP_URL || "https://www.kryptoscronos.com";
  const url = encodeURI(`${baseUrl}/api/verify-email?token=${token}`);
  const safeUser = esc(username);

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Kryptós CronOS <noreply@kryptoscronos.com>",
      to: [email],
      subject: "Verify your Kryptós CronOS email",
      html: `
        <div style="font-family: monospace; background: #0d1117; color: #e2e8f0; padding: 32px; border-radius: 8px; max-width: 480px;">
          <div style="font-size: 24px; margin-bottom: 8px;">🛡️ Kryptós CronOS</div>
          <div style="color: #94a3b8; font-size: 13px; margin-bottom: 24px;">Confirm your email</div>
          <p style="color: #cbd5e1;">Welcome, <strong style="color: #22d3ee;">${safeUser}</strong>. Confirm this email to secure your account.</p>
          <div style="margin: 24px 0;">
            <a href="${url}" style="background: linear-gradient(90deg, #22d3ee, #818cf8); color: #000; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Verify Email →</a>
          </div>
          <p style="color: #475569; font-size: 12px;">This link expires in 7 days. If you didn't create this account, ignore this email.</p>
        </div>
      `,
    }),
  }).catch(() => {});
}
