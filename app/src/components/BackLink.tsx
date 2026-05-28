"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackLink({
  label = "← Back",
  className,
  href,
}: {
  label?: string;
  className?: string;
  href?: string;
}) {
  const router = useRouter();
  const cls = className ?? "text-gray-500 hover:text-cyan-400 text-sm mb-6 inline-block transition-colors";

  if (href) {
    return <Link href={href} className={cls}>{label}</Link>;
  }

  return (
    <button onClick={() => router.back()} className={cls}>
      {label}
    </button>
  );
}
