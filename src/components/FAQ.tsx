"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, Plus } from "lucide-react";
import { faqs, site } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={<>Questions? <span className="text-gradient">Straight answers.</span></>}
            text="Everything learners ask before joining — about courses, fees, placements and learning modes. Can't find your answer? Talk to a counsellor directly."
          />
          <Reveal delay={0.2} className="mt-8 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-7 text-white shadow-2xl shadow-brand-600/30">
            <MessageCircle className="h-8 w-8" />
            <h3 className="mt-4 text-xl font-semibold text-white">Still deciding?</h3>
            <p className="mt-2 text-sm text-brand-100">Get honest, no-pressure advice on the right course for your background and goals.</p>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-5 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:scale-105">
              Call {site.phone}
            </a>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? "border-brand-300 bg-brand-50/60 shadow-lg shadow-brand-900/5" : "border-brand-100 bg-white"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-slate-900">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${isOpen ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-700"}`}
                    >
                      <Plus className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 leading-relaxed text-slate-600">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
