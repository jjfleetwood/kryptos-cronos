// Shared, pure password-strength policy — imported by the server routes that set
// passwords (register, reset-password) AND by the client UI for live feedback.
// Server enforcement is the security boundary; the client checklist is UX only.
//
// Policy (NIST 800-63B-leaning "strong" default):
//   • 12–128 characters
//   • at least 3 of 4 character classes (lowercase, uppercase, digit, symbol)
//   • not a known-common/weak password or a trivial pattern
//   • does not contain the username or the email local-part

export const PASSWORD_MIN = 12;
export const PASSWORD_MAX = 128;

// A compact blocklist of the most-abused passwords + bases. Substring/normalized
// match catches "Password123!", "qwerty12345", etc. (Not a full breach DB — the
// broader hardening pass can add a HaveIBeenPwned k-anonymity check.)
const COMMON = [
  "password", "passw0rd", "qwerty", "azerty", "123456", "12345678", "123456789",
  "111111", "000000", "iloveyou", "admin", "letmein", "welcome", "monkey",
  "dragon", "abc123", "football", "baseball", "superman", "trustno1", "sunshine",
  "princess", "qwertyuiop", "asdfgh", "zxcvbn", "master", "login", "starwars",
  "kryptos", "cronos", "changeme", "secret", "ninja",
];

export interface PasswordCheck {
  id: string;
  label: string;
  passed: boolean;
}

function classes(pw: string) {
  return {
    lower: /[a-z]/.test(pw),
    upper: /[A-Z]/.test(pw),
    digit: /[0-9]/.test(pw),
    symbol: /[^A-Za-z0-9]/.test(pw),
  };
}

function classCount(pw: string): number {
  const c = classes(pw);
  return Number(c.lower) + Number(c.upper) + Number(c.digit) + Number(c.symbol);
}

function isCommon(pw: string, username?: string, email?: string): boolean {
  const norm = pw.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (norm.length === 0) return true;
  // all-same character, or a short repeated unit ("abcabcabc")
  if (/^(.)\1+$/.test(pw)) return true;
  // simple ascending/descending numeric or alpha runs
  if (/^(?:0123456789|9876543210|abcdefghij|qwertyuiop)/.test(norm)) return true;
  for (const base of COMMON) {
    if (norm.includes(base)) return true;
  }
  const uname = username?.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (uname && uname.length >= 3 && norm.includes(uname)) return true;
  const local = email?.toLowerCase().split("@")[0]?.replace(/[^a-z0-9]/g, "");
  if (local && local.length >= 3 && norm.includes(local)) return true;
  return false;
}

/** Per-requirement results — drives the live checklist in the UI. */
export function checkPassword(
  pw: string,
  opts?: { username?: string; email?: string }
): PasswordCheck[] {
  return [
    { id: "length", label: `At least ${PASSWORD_MIN} characters`, passed: pw.length >= PASSWORD_MIN && pw.length <= PASSWORD_MAX },
    { id: "classes", label: "Mix of 3+ of: lower, UPPER, number, symbol", passed: classCount(pw) >= 3 },
    { id: "notcommon", label: "Not a common or guessable password", passed: pw.length > 0 && !isCommon(pw, opts?.username, opts?.email) },
  ];
}

/** True when every requirement passes. */
export function isStrongPassword(pw: string, opts?: { username?: string; email?: string }): boolean {
  return checkPassword(pw, opts).every((c) => c.passed);
}

/** A single user-facing error string for the server routes (or null if valid). */
export function passwordError(pw: string, opts?: { username?: string; email?: string }): string | null {
  if (pw.length < PASSWORD_MIN) return `Password must be at least ${PASSWORD_MIN} characters.`;
  if (pw.length > PASSWORD_MAX) return `Password must be at most ${PASSWORD_MAX} characters.`;
  if (classCount(pw) < 3) return "Password must mix at least 3 of: lowercase, uppercase, number, symbol.";
  if (isCommon(pw, opts?.username, opts?.email)) return "That password is too common or guessable. Choose something more unique.";
  return null;
}
