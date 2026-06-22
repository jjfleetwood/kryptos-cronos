import "./globals.css";
import type { Metadata } from "next";
import { LocaleProvider } from "@kryptos/ui/locale";
import en from "../messages/en.json";

export const metadata: Metadata = {
  title: "Agentic Audit Library",
  description: "Private agentic-audit working library.",
  robots: { index: false, follow: false },
};

// English-only: the shared briefing renderer (StageInfo) reads its section labels
// from this dictionary via useLocale.
const messages = { en: en as Record<string, string> };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#0d1117", color: "#e5e7eb", margin: 0 }}>
        <LocaleProvider messages={messages}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
