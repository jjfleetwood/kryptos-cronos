"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

// Scroll-reveal wrapper: fades/translates children up as they enter the viewport.
// Progressive-enhancement + reduced-motion safe — without JS the content is fully
// visible (the hiding only applies once `kc-reveal-on` is added to <html> on mount).
export default function Reveal({
  children,
  delay = 0,
  className = "",
  style,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("kc-reveal-on");
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("kc-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement>}
      className={`kc-reveal ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Comp>
  );
}
