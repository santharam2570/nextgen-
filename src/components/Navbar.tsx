"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { GraduationCap, Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { WhatsappIcon } from "./ui/Brand";

export default function Navbar({ ctaHref = "/#contact" }: { ctaHref?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-white/85 py-3 shadow-lg shadow-brand-900/5 backdrop-blur-xl" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 lg:px-6 xl:px-8">
        <Link href="/#home" className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-lg shadow-brand-600/30">
            <GraduationCap className="h-6 w-6" />
          </span>
          <span className={`whitespace-nowrap font-display text-lg font-bold transition-colors xl:text-xl ${solid ? "text-slate-900" : "text-white"}`}>
            {site.shortName}
            <span className={solid ? "text-brand-600" : "text-brand-200"}> Innovation</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex 2xl:gap-1">
          {navLinks.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={`/${l.href}`}
                  className={`relative whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm 2xl:px-3.5 ${
                    solid
                      ? isActive ? "text-brand-700" : "text-slate-600 hover:text-brand-700"
                      : isActive ? "text-white" : "text-white/75 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 -z-10 rounded-full ${solid ? "bg-brand-100" : "bg-white/15"}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2 xl:gap-3">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            aria-label={`Call ${site.phone}`}
            title={site.phone}
            className={`hidden h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold ring-2 transition hover:scale-105 lg:flex lg:w-10 2xl:w-auto 2xl:px-4 ${
              solid ? "bg-brand-50 text-brand-800 ring-brand-200 hover:bg-brand-100" : "bg-white/10 text-white ring-white/40 hover:bg-white/20"
            }`}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden 2xl:inline">{site.phone}</span>
          </a>
          <a
            href={ctaHref}
            className="relative hidden whitespace-nowrap rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2.5 text-sm font-bold text-white shadow-[0_0_24px_-4px_rgba(59,130,246,0.8)] ring-2 ring-white/30 transition hover:scale-105 sm:inline-block xl:px-5"
          >
            <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-brand-500/50" />
            Free Counselling
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`grid h-10 w-10 place-items-center rounded-xl lg:hidden ${
              solid ? "bg-brand-100 text-brand-700" : "bg-white/15 text-white"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pt-6">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={`/${l.href}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-lg font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-4 space-y-3 px-4">
                <a
                  href={ctaHref}
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gradient-to-r from-brand-600 to-brand-800 py-3.5 text-center font-semibold text-white shadow-lg shadow-brand-600/30"
                >
                  Book Free Counselling
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 rounded-full bg-brand-50 py-3 font-semibold text-brand-800"
                  >
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi ${site.name}, I'd like to know more about your courses.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-semibold text-white"
                  >
                    <WhatsappIcon className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
