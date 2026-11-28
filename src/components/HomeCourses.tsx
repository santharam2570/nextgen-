"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Brain,
  Check,
  Clock,
  Cloud,
  Code2,
  DraftingCompass,
  Landmark,
  Megaphone,
  Star,
  Users,
} from "lucide-react";
import {
  categorySlug,
  coursesByCategory,
  homeCategories,
} from "@/data/home-categories";
import { courses } from "@/data/site";
import Icon from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";

const categoryIcons = {
  Boxes,
  Brain,
  Code2,
  Cloud,
  Megaphone,
  DraftingCompass,
  Landmark,
} as const;

type HomeCategoryName = (typeof homeCategories)[number]["category"];

export default function HomeCourses() {
  const [active, setActive] = useState<HomeCategoryName>(homeCategories[0].category);
  const navRef = useRef<HTMLDivElement>(null);
  const bandRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    homeCategories.forEach(({ category }) => {
      const el = bandRefs.current[category];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(category);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const btn = navRef.current?.querySelector<HTMLElement>(`[data-cat="${active}"]`);
    btn?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [active]);

  return (
    <section id="courses" className="relative bg-[#f5f9ff] py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="All Course Categories"
          title={
            <>
              Every program,{" "}
              <span className="text-gradient">organised by domain</span>
            </>
          }
          text={`Browse all ${courses.length} career programs across ${homeCategories.length} categories — SAP, Data & AI, Software, Cloud & Security, Marketing, Mechanical and Civil Engineering.`}
        />

        <div className="sticky top-16 z-20 -mx-5 mt-10 border-y border-brand-100/80 bg-[#f5f9ff]/90 py-3 backdrop-blur-md sm:mx-0 sm:mt-12 sm:rounded-2xl sm:border sm:px-2">
          <div
            ref={navRef}
            className="no-scrollbar flex gap-2 overflow-x-auto px-5 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-2"
            role="navigation"
            aria-label="Jump to category"
          >
            {homeCategories.map((cat) => {
              const CatIcon = categoryIcons[cat.icon];
              const count = coursesByCategory(cat.category).length;
              const isActive = active === cat.category;
              return (
                <motion.a
                  key={cat.category}
                  href={`#category-${categorySlug(cat.category)}`}
                  data-cat={cat.category}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "text-white"
                      : "bg-white text-brand-700 ring-1 ring-brand-100 hover:bg-brand-50"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="home-cat-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-brand-600 to-brand-800 shadow-lg shadow-brand-600/25"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  <CatIcon className={`relative h-4 w-4 ${isActive ? "text-brand-100" : "text-brand-500"}`} />
                  <span className="relative">{cat.shortLabel}</span>
                  <span
                    className={`relative rounded-full px-1.5 py-0.5 text-[11px] font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-brand-50 text-brand-600"
                    }`}
                  >
                    {count}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="mt-14 space-y-20 sm:mt-16 sm:space-y-24">
          {homeCategories.map((cat, bandIndex) => {
            const list = coursesByCategory(cat.category);
            const CatIcon = categoryIcons[cat.icon];
            return (
              <motion.div
                key={cat.category}
                id={`category-${categorySlug(cat.category)}`}
                ref={(el) => {
                  bandRefs.current[cat.category] = el;
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="scroll-mt-36"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                      <motion.span
                        whileInView={{ rotate: [0, -8, 8, 0], scale: [0.9, 1.08, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-600/30"
                      >
                        <CatIcon className="h-5 w-5" />
                      </motion.span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                          Category {String(bandIndex + 1).padStart(2, "0")}
                        </p>
                        <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                          {cat.category}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-slate-600">{cat.blurb}</p>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold text-brand-700"
                  >
                    {list.length} course{list.length === 1 ? "" : "s"}
                  </motion.p>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {list.map((c, i) => (
                    <motion.article
                      key={c.slug}
                      initial={{ opacity: 0, y: 36, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={{ y: -8, transition: { duration: 0.25 } }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-brand-900/12"
                    >
                      <Link
                        href={`/courses/${c.slug}`}
                        className="relative block aspect-[16/9] overflow-hidden sm:aspect-[16/10]"
                      >
                        <Image
                          src={c.image}
                          alt={c.title}
                          fill
                          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                          className="object-cover object-center transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 to-transparent" />
                        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-slate-950/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {c.rating}
                        </span>
                      </Link>

                      <div className="relative flex flex-1 flex-col p-5 pt-7 sm:p-6 sm:pt-8">
                        <span className="absolute -top-7 right-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-xl ring-4 ring-white transition duration-500 group-hover:-translate-y-2 group-hover:rotate-6">
                          <Icon name={c.icon} className="h-7 w-7" />
                        </span>
                        <h4 className="pr-14 text-lg font-semibold leading-snug sm:text-xl">
                          <Link href={`/courses/${c.slug}`} className="transition hover:text-brand-700">
                            {c.title}
                          </Link>
                        </h4>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-brand-500" />
                            {c.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <BookOpen className="h-4 w-4 text-brand-500" />
                            {c.lessons} lessons
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="h-4 w-4 text-brand-500" />
                            {c.students}
                          </span>
                        </div>
                        <ul className="mb-6 mt-5 space-y-2">
                          {c.points.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /> {p}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto flex items-center justify-end border-t border-brand-100 pt-5">
                          <Link
                            href={`/courses/${c.slug}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white"
                          >
                            View Details <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
