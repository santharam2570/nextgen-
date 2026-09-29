"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((d: number) => {
    setDir(d);
    setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go, paused]);

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 to-white py-16 sm:py-24 lg:py-32">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Alumni Stories"
          title={<>Careers built at <span className="text-gradient">NextGen</span></>}
          text="Real words from freshers, career switchers and working professionals who built their careers with NextGen Innovation."
        />

        <div
          className="mx-auto mt-16 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[380px] sm:min-h-[320px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -80 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[2rem] bg-white p-8 shadow-2xl shadow-brand-900/10 ring-1 ring-brand-100 sm:p-12"
              >
                <Quote className="absolute right-8 top-8 h-16 w-16 text-brand-100" />
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="relative mt-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <Image src={t.image} alt={t.name} width={64} height={64} className="h-16 w-16 rounded-full object-cover ring-4 ring-brand-100" />
                  <div>
                    <p className="font-display text-lg font-semibold text-slate-900">{t.name}</p>
                    <p className="text-sm font-medium text-brand-600">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                  className={`h-2.5 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-brand-600" : "w-2.5 bg-brand-200 hover:bg-brand-300"}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => go(-1)} aria-label="Previous" className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-700 shadow-lg ring-1 ring-brand-100 transition hover:bg-brand-600 hover:text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => go(1)} aria-label="Next" className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-600/30 transition hover:scale-105">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
