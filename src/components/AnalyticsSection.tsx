"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig, type Stat } from "@/lib/site";

function parseStatValue(value: string) {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) {
    return { target: 0, suffix: value, useCommas: false };
  }
  const digits = match[1];
  return {
    target: Number(digits.replace(/,/g, "")),
    suffix: match[2] ?? "",
    useCommas: digits.includes(","),
  };
}

function formatCount(n: number, useCommas: boolean) {
  return useCommas ? n.toLocaleString("en-US") : String(n);
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function AnalyticsStat({
  value,
  label,
  delayMs,
}: Stat & { delayMs: number }) {
  const { target, suffix, useCommas } = parseStatValue(value);
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(() => formatCount(0, useCommas) + suffix);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const finish = () => {
      setDisplay(value);
      startedRef.current = true;
    };

    const animate = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      if (prefersReduced || target === 0) {
        finish();
        return;
      }

      const duration = 2600;
      const start = performance.now() + delayMs;

      const tick = (now: number) => {
        if (now < start) {
          requestAnimationFrame(tick);
          return;
        }
        const t = Math.min((now - start) / duration, 1);
        const current = Math.round(target * easeOutCubic(t));
        setDisplay(formatCount(current, useCommas) + suffix);
        if (t < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs, suffix, target, useCommas, value]);

  return (
    <div ref={ref} className="analytics-stat">
      <p className="analytics-value" aria-label={value}>
        {display}
      </p>
      <p className="analytics-label">{label}</p>
    </div>
  );
}

export function AnalyticsSection() {
  const { analytics } = siteConfig;

  return (
    <section className="analytics" aria-labelledby="analytics-heading">
      <h2 id="analytics-heading">{analytics.title}</h2>
      <div className="analytics-bar">
        {analytics.stats.map((stat, index) => (
          <AnalyticsStat
            key={stat.label}
            value={stat.value}
            label={stat.label}
            delayMs={index * 120}
          />
        ))}
      </div>
    </section>
  );
}
