"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUp, Phone, Send } from "lucide-react";
import { site } from "@/data/site";
import { WhatsappIcon } from "./ui/Brand";

type Props = {
  enquireHref?: string;
  whatsappText?: string;
};

export default function ScrollExtras({
  enquireHref = "#contact",
  whatsappText = `Hi ${site.name}, I'd like to know more about your courses.`,
}: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-500 via-brand-700 to-brand-700"
      />

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-600/30 transition hover:scale-110 md:grid"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <WhatsappIcon className="relative h-7 w-7" />
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-50 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-xl shadow-brand-600/40 transition hover:scale-110 md:bottom-24 md:right-7 md:h-12 md:w-12"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-100 bg-white/95 px-3 pb-[calc(0.625rem+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-8px_30px_-12px_rgba(10,26,63,0.35)] md:hidden"
      >
        <div className="grid grid-cols-[1fr_1fr_1.4fr] gap-2">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="flex h-12 flex-col items-center justify-center rounded-xl bg-brand-50 text-[11px] font-bold text-brand-800 active:scale-95"
          >
            <Phone className="mb-0.5 h-5 w-5" /> Call
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 flex-col items-center justify-center rounded-xl bg-[#25D366]/10 text-[11px] font-bold text-[#128C7E] active:scale-95"
          >
            <WhatsappIcon className="mb-0.5 h-5 w-5" /> WhatsApp
          </a>
          <a
            href={enquireHref}
            className="flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-brand-600 to-brand-800 text-[13px] font-bold text-white shadow-lg shadow-brand-600/30 active:scale-95 min-[400px]:text-sm"
          >
            <Send className="hidden h-4 w-4 min-[390px]:block" /> Free Counselling
          </a>
        </div>
      </nav>
    </>
  );
}
