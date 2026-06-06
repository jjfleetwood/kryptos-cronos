"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

// Counts a number up from 0 to `to` when it scrolls into view. Reduced-motion or
// no-JS shows the final value immediately.
export default function CountUp({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  durationMs = 1400,
  className = "",
  style,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  durationMs?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(to); // SSR / no-JS: final value
  const started = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setVal(to); return; }
    setVal(0);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
            else setVal(to);
          };
          requestAnimationFrame(tick);
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, durationMs]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{val.toFixed(decimals)}{suffix}
    </span>
  );
}
