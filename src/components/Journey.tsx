"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { journey } from "@/data/site";
import Icon from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="journey" className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/70 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Your Learning Journey"
          title={<>From first class to <span className="text-gradient">dream job</span></>}
          text="A simple, guided path that takes you step by step from your first class to your first job. Here is how your journey with us unfolds."
        />

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-7 top-0 h-full w-1 rounded-full bg-brand-100 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-7 top-0 h-full w-1 origin-top rounded-full bg-gradient-to-b from-brand-500 via-brand-700 to-brand-700 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-14">
            {journey.map((j, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={j.step}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  className="relative grid items-center md:grid-cols-2 md:gap-16"
                >
                  <motion.div
                    variants={{
                      hidden: { scale: 0.4, opacity: 0, rotate: -90 },
                      show: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 15 } },
                    }}
                    className="absolute left-7 top-6 z-10 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-xl shadow-brand-600/40 ring-8 ring-white md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                  >
                    <Icon name={j.icon} className="h-6 w-6" />
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: left ? -60 : 60 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className={`ml-20 md:ml-0 ${left ? "md:col-start-1 md:text-right" : "md:col-start-2"}`}
                  >
                    <div className="group relative isolate rounded-3xl border border-brand-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10">
                      <span className={`pointer-events-none absolute -top-5 -z-10 select-none font-display text-7xl font-extrabold text-brand-50 ${left ? "right-6 md:left-6 md:right-auto" : "right-6"}`}>
                        {j.step}
                      </span>
                      <span className="font-display text-sm font-bold uppercase tracking-widest text-brand-500">
                        Step {j.step}
                      </span>
                      <h3 className="mt-2 text-2xl font-semibold">{j.title}</h3>
                      <p className="mt-3 leading-relaxed text-slate-600">{j.text}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
