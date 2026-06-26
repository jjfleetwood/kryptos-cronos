import "server-only";
import { createHash } from "crypto";

// HaveIBeenPwned "Pwned Passwords" — k-anonymity range API. We SHA-1 the password,
// send ONLY the first 5 hex chars to the API, and match the 35-char suffix locally,
// so the password (and its full hash) never leave the server. `Add-Padding` pads
// the response so its size doesn't leak whether a hit exists.
//
// Fails OPEN (returns 0) on any network/timeout/parse error: an HIBP outage must
// not block all registrations — the strong-password policy still applies either way.
export async function pwnedCount(password: string): Promise<number> {
  try {
    const hash = createHash("sha1").update(password).digest("hex").toUpperCase();
    const prefix = hash.slice(0, 5);
    const suffix = hash.slice(5);

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 2500);
    let res: Response;
    try {
      res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
        headers: { "Add-Padding": "true", "User-Agent": "kryptos-cronos" },
        signal: ctrl.signal,
      });
    } finally {
      clearTimeout(timer);
    }
    if (!res.ok) return 0;

    const text = await res.text();
    for (const line of text.split("\n")) {
      const idx = line.indexOf(":");
      if (idx < 0) continue;
      if (line.slice(0, idx).trim().toUpperCase() === suffix) {
        return Number(line.slice(idx + 1).trim()) || 0;
      }
    }
    return 0;
  } catch {
    return 0; // fail open
  }
}

/** True if the password appears in a known breach corpus. */
export async function isPwnedPassword(password: string): Promise<boolean> {
  return (await pwnedCount(password)) > 0;
}
