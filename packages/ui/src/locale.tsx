"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// App-agnostic locale context shared by web + audit. The dictionary is injected
// by the host app via <LocaleProvider messages={...}> so this package carries no
// message bundles of its own. `t` falls back: current locale → English → the
// caller's fallback → the key itself.
type Dict = Record<string, Record<string, string>>;

type LocaleContextValue = {
  locale: string;
  changeLocale: (l: string) => void;
  t: (key: string, fallback?: string) => string;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  changeLocale: () => {},
  t: (key) => key,
});

export function LocaleProvider({
  children,
  messages,
  initialLocale = "en",
  locales,
  onChange,
}: {
  children: ReactNode;
  messages: Dict;
  initialLocale?: string;
  /** Allowed locale codes; defaults to the keys of `messages`. */
  locales?: string[];
  /** Side effect on locale change (e.g. persist a cookie). */
  onChange?: (l: string) => void;
}) {
  const allowed = locales ?? Object.keys(messages);
  const [locale, setLocale] = useState<string>(allowed.includes(initialLocale) ? initialLocale : "en");

  function changeLocale(l: string) {
    onChange?.(l);
    setLocale(l);
  }

  function t(key: string, fallback?: string): string {
    return messages[locale]?.[key] ?? messages.en?.[key] ?? fallback ?? key;
  }

  return <LocaleContext.Provider value={{ locale, changeLocale, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
