"use client";

import { checkPassword } from "@/lib/password-policy";

// Live password-requirements checklist. Render under a new-password field; it
// mirrors the server policy in lib/password-policy so users see exactly what's
// required (server still enforces — this is UX only).
export default function PasswordChecklist({
  password,
  username,
  email,
}: {
  password: string;
  username?: string;
  email?: string;
}) {
  if (!password) return null;
  const checks = checkPassword(password, { username, email });
  return (
    <ul className="flex flex-col gap-1 mt-1" aria-label="Password requirements">
      {checks.map((c) => (
        <li
          key={c.id}
          className={`flex items-center gap-2 text-xs transition-colors ${
            c.passed ? "text-emerald-400" : "text-gray-500"
          }`}
        >
          <span className="text-[10px]">{c.passed ? "✓" : "○"}</span>
          <span>{c.label}</span>
        </li>
      ))}
    </ul>
  );
}
