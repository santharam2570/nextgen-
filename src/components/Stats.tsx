"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { images, stats } from "@/data/site";
import Reveal from "./ui/Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="relative bg-cover bg-center py-16 sm:py-24 lg:bg-fixed"
      style={{ backgroundImage: `url(${images.stats})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-800/90 to-brand-950/90" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Numbers that speak for themselves</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100/90">
            Every number is a professional who trusted us with their career — and made it happen.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
              scale
              className="rounded-3xl bg-white/10 p-8 text-center ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/15"
            >
              <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-brand-200">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
