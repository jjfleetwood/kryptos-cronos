import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic Audit Library",
  description: "Private agentic-audit working library.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#0d1117", color: "#e5e7eb", margin: 0 }}>{children}</body>
    </html>
  );
}
