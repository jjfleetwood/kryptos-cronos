"use client";

import { type ReactNode } from "react";
import { LocaleProvider as BaseLocaleProvider, useLocale } from "@kryptos/ui/locale";
import { setClientLocale, type Locale } from "@/lib/locale";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import fr from "@/messages/fr.json";
import de from "@/messages/de.json";
import hi from "@/messages/hi.json";
import pt from "@/messages/pt.json";
import pl from "@/messages/pl.json";

// The locale context now lives in @kryptos/ui (shared with apps/audit). This thin
// wrapper injects the web app's message bundles + cookie persistence so every
// existing `@/contexts/LocaleContext` import keeps working unchanged.
const messages: Record<string, Record<string, string>> = { en, es, fr, de, hi, pt, pl };
const LOCALES = ["en", "es", "fr", "de", "hi", "pt", "pl"];

export function LocaleProvider({
  children,
  initialLocale = "en",
}: {
  children: ReactNode;
  initialLocale?: string;
}) {
  return (
    <BaseLocaleProvider
      messages={messages}
      locales={LOCALES}
      initialLocale={initialLocale}
      onChange={(l) => setClientLocale(l as Locale)}
    >
      {children}
    </BaseLocaleProvider>
  );
}

export { useLocale };
