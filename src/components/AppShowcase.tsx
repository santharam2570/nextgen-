"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Bell, PlayCircle, Flame, CheckCircle2 } from "lucide-react";
import { appFeatures, site } from "@/data/site";
import { AppStoreBadge, PlayStoreBadge } from "./ui/Brand";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

function Phone() {
  return (
    <div className="relative mx-auto w-[280px] rounded-[3rem] bg-slate-950 p-3 shadow-2xl shadow-brand-950/60 ring-1 ring-white/10">
      <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
      <div className="overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-brand-50 to-white">
        <div className="bg-gradient-to-br from-brand-600 to-brand-800 px-5 pb-6 pt-10 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-brand-100">Good morning 👋</p>
              <p className="font-display text-lg font-bold">Harini</p>
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20"><Bell className="h-4 w-4" /></span>
          </div>
          <div className="mt-4 rounded-2xl bg-white/15 p-3 backdrop-blur">
            <div className="flex items-center justify-between text-xs">
              <span>Today&apos;s goal</span><span className="font-semibold">75%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/25">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-full rounded-full bg-white"
              />
            </div>
          </div>
        </div>
        <div className="space-y-3 p-4">
          <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-red-100 text-red-600"><PlayCircle className="h-5 w-5" /></span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-slate-900">S/4HANA FICO · GL Config</p>
              <p className="text-[10px] text-slate-500">Live · starts in 10 min</p>
            </div>
            <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">LIVE</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700"><Flame className="h-5 w-5" /></span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-slate-900">12-day streak!</p>
              <p className="text-[10px] text-slate-500">Keep it going</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-3 shadow-sm">
            <p className="text-xs font-semibold text-slate-900">Mock test score</p>
            <div className="mt-3 flex h-16 items-end gap-1.5">
              {[40, 55, 48, 70, 65, 82, 92].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.08 }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-green-50 p-3 text-xs font-medium text-green-700">
            <CheckCircle2 className="h-4 w-4" /> Doubt answered by trainer
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section ref={ref} id="app" className="relative overflow-hidden bg-brand-950 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="glow absolute left-1/4 top-0 h-[500px] w-[500px] animate-blob text-brand-600/30" />
      <div className="glow absolute bottom-0 right-0 h-[400px] w-[400px] animate-blob text-brand-800/25 [animation-delay:-7s]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            light
            align="left"
            eyebrow="The NextGen App"
            title={<>Your classroom and mentor, <span className="bg-gradient-to-r from-brand-300 to-brand-300 bg-clip-text text-transparent">in your pocket</span></>}
            text="The NextGen app keeps your entire learning journey in one place. Join live classes, replay any session, practise hands-on exercises, take exam-pattern mock tests, message your trainer and track job alerts — wherever you are."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {appFeatures.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 0.07}
                className="flex items-start gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="text-sm text-brand-200/80">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-3">
            <PlayStoreBadge href={site.playStoreUrl} dark={false} />
            <AppStoreBadge href={site.appStoreUrl} dark={false} />
          </Reveal>
        </div>

        <div className="relative mt-4 flex justify-center lg:mt-0">
          <div className="absolute top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute top-1/2 h-[560px] w-[560px] -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-white/10" />
          <motion.div style={{ y: phoneY, rotate }} className="max-lg:!transform-none">
            <Phone />
          </motion.div>
          <div className="absolute left-0 top-16 hidden animate-float rounded-2xl bg-white p-4 shadow-2xl sm:block">
            <p className="font-display text-2xl font-bold text-brand-700">50K+</p>
            <p className="text-xs text-slate-500">App downloads</p>
          </div>
          <div className="absolute bottom-16 right-0 hidden animate-float-slow rounded-2xl bg-white p-4 shadow-2xl sm:block">
            <p className="font-display text-2xl font-bold text-brand-700">4.8 ★</p>
            <p className="text-xs text-slate-500">Play Store rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
