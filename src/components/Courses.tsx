"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, BookOpen, Check, Clock, Star, Users } from "lucide-react";
import { courses } from "@/data/site";
import Icon from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";

const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

export default function Courses() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const collapsed = filter === "All" && !showAll;
  const list =
    filter === "All"
      ? collapsed
        ? courses.filter((c) => c.featured)
        : courses
      : courses.filter((c) => c.category === filter);

  return (
    <section id="courses" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Courses"
          title={<>Courses designed for <span className="text-gradient">real careers</span></>}
          text="SAP, Data Science, Generative AI, Cloud, Cybersecurity, Full Stack, Software Testing, Digital Marketing, BIM, UI/UX and Design — pick your path and start learning on the app today."
        />

        <div className="no-scrollbar -mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:mt-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                filter === c ? "text-white" : "bg-brand-50 text-brand-700 hover:bg-brand-100"
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="course-filter"
                  className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-brand-600 to-brand-800 shadow-lg shadow-brand-600/30"
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((c, i) => (
              <motion.article
                layout
                key={c.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-brand-900/15"
              >
                <Link href={`/courses/${c.slug}`} className="relative block aspect-[16/9] overflow-hidden sm:aspect-[16/10]">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                    {c.category}
                  </span>
                  <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-slate-950/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {c.rating}
                  </span>
                </Link>

                <div className="relative flex flex-1 flex-col p-5 pt-7 sm:p-6 sm:pt-8">
                  <span className="absolute -top-7 right-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-xl ring-4 ring-white transition duration-500 group-hover:-translate-y-2 group-hover:rotate-6">
                    <Icon name={c.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="pr-14 text-lg font-semibold leading-snug sm:text-xl">
                    <Link href={`/courses/${c.slug}`} className="transition hover:text-brand-700">{c.title}</Link>
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand-500" />{c.duration}</span>
                    <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-brand-500" />{c.lessons} lessons</span>
                    <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-brand-500" />{c.students}</span>
                  </div>
                  <ul className="mb-6 mt-5 space-y-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-brand-600" /> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between border-t border-brand-100 pt-5">
                    <p>
                      <span className="text-xs text-slate-500">Course fee</span>
                      <span className="block font-display text-xl font-bold text-brand-700">{c.price}</span>
                    </p>
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
          </AnimatePresence>
        </motion.div>

        {collapsed && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-8 py-4 font-semibold text-white shadow-xl shadow-brand-600/30 transition hover:scale-105"
            >
              View all {courses.length} courses
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
