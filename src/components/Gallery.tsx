"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Maximize2, X } from "lucide-react";
import { gallery } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-brand-50/60 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Inside NextGen"
          title={<>A campus built for <span className="text-gradient">hands-on learning</span></>}
          text="Live sessions, practical labs, design studios, project reviews and mock interviews — a glimpse of what a day at NextGen Innovation really looks like."
        />
        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, i) => (
            <motion.button
              key={g.src}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl ${g.span}`}
            >
              <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-950/80 via-brand-900/20 to-transparent p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="text-left text-sm font-semibold text-white">{g.alt}</span>
                <Maximize2 className="ml-auto h-5 w-5 text-white" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-brand-950/90 p-5 backdrop-blur-sm"
          >
            <button aria-label="Close" className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[3/2] w-full max-w-5xl overflow-hidden rounded-3xl"
            >
              <Image src={gallery[active].src} alt={gallery[active].alt} fill sizes="90vw" className="object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
