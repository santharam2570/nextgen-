"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  Boxes,
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  DraftingCompass,
  Landmark,
  Loader2,
  Megaphone,
  Phone,
  PhoneCall,
  Sparkles,
  Trophy,
  Video,
} from "lucide-react";
import {
  categorySlug,
  coursesByCategory,
  homeCategories,
  type HomeCategory,
} from "@/data/home-categories";
import { heroPortrait, inquiryCourses, site } from "@/data/site";
import { WhatsappIcon } from "./ui/Brand";

const SLIDE_MS = 7000;

const categoryIcons = {
  Boxes,
  Brain,
  Code2,
  Cloud,
  Megaphone,
  DraftingCompass,
  Landmark,
} as const;

function OrbitRing({
  items,
  size,
  spin,
  counter,
  offset = 0,
}: {
  items: { src: string; alt: string }[];
  size: number;
  spin: string;
  counter: string;
  offset?: number;
}) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 rounded-full border border-white/15 ${spin}`}
      style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
    >
      {items.map(({ src, alt }, i) => {
        const angle = (i / items.length) * Math.PI * 2 + offset;
        const x = 50 + 50 * Math.cos(angle);
        const y = 50 + 50 * Math.sin(angle);
        return (
          <div
            key={`${src}-${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 * i, type: "spring", stiffness: 220, damping: 18 }}
              className={`relative block h-14 w-14 overflow-hidden rounded-2xl bg-brand-800 shadow-xl ring-4 ring-white/20 ${counter}`}
            >
              <Image src={src} alt={alt} fill sizes="56px" className="object-cover" />
            </motion.span>
          </div>
        );
      })}
    </div>
  );
}

function QuickInquiry({ preferredCourse }: { preferredCourse?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (preferredCourse) setCourse(preferredCourse);
  }, [preferredCourse]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Enter your name");
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10))) return setError("Enter a valid mobile number");
    if (!course) return setError("Choose a course");
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, course, mode: "Hero quick inquiry" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border-2 border-brand-100 bg-brand-50/60 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-[1.75rem] bg-[linear-gradient(110deg,#60a5fa,#2563eb,#93c5fd,#1d4ed8)] p-[3px] shadow-[0_0_60px_-10px_rgba(59,130,246,0.75)]"
    >
      <div className="rounded-[calc(1.75rem-3px)] bg-white p-5 sm:p-6">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-lg shadow-brand-600/40">
              <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-brand-500/60" />
              <PhoneCall className="relative h-6 w-6" />
            </span>
            <div>
              <p className="flex flex-wrap items-center gap-2 font-display text-lg font-extrabold text-slate-900 sm:text-xl">
                Book a FREE Counselling Session
                <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  Free
                </span>
              </p>
              <p className="text-sm text-slate-500">
                Schedule 1:1 free counselling · Our team calls you within 24 hours
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-4 py-2.5 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:bg-brand-800"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi ${site.name}, I'd like a free career counselling call.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-lg transition hover:scale-105"
            >
              <WhatsappIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {status === "done" ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 rounded-xl bg-green-50 px-4 py-4 text-green-800"
            >
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <span className="font-semibold">
                Thanks {name.split(" ")[0]}! A senior counsellor will call you within 24 hours with your
                personalised career roadmap.
              </span>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={submit}
              noValidate
              exit={{ opacity: 0 }}
              className="grid gap-3 md:grid-cols-[1fr_1fr_1.3fr_auto]"
            >
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                placeholder="Mobile number"
                className={field}
              />
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className={`${field} ${course ? "" : "text-slate-500"}`}
              >
                <option value="">Which career path interests you?</option>
                {inquiryCourses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-xl bg-gradient-to-r from-brand-600 to-brand-800 px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-brand-600/40 transition hover:scale-[1.03] hover:shadow-brand-600/60 disabled:opacity-70"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {status === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Ask For Demo <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
        {(error || status === "error") && (
          <p className="pt-3 text-sm font-semibold text-red-600">
            {error || "Something went wrong, please try again."}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const tiltX = useSpring(useTransform(my, [0, 100], [8, -8]), { stiffness: 80, damping: 20 });
  const tiltY = useSpring(useTransform(mx, [0, 100], [-8, 8]), { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % homeCategories.length), SLIDE_MS);
    return () => clearInterval(t);
  }, [slide, paused]);

  const onMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    mx.set((x / r.width) * 100);
    my.set((y / r.height) * 100);
    spotX.set(x - r.width / 2);
    spotY.set(y - r.height * 0.4);
  };

  const current = homeCategories[slide] as HomeCategory;
  const catCourses = coursesByCategory(current.category);
  const count = catCourses.length;
  const preferred = catCourses[0]?.title;
  const Icon = categoryIcons[current.icon];
  const orbitOuter = catCourses.slice(0, 4).map((c) => ({ src: c.image, alt: c.title }));
  const orbitInner = catCourses.slice(4, 8).map((c) => ({ src: c.image, alt: c.title }));
  const liveCourse = catCourses[0];
  const placedCourse = catCourses[1] ?? catCourses[0];

  function selectCategory(index: number) {
    setSlide(index);
    setPaused(true);
  }

  return (
    <section
      ref={ref}
      id="home"
      onMouseMove={onMove}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-brand-950"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={current.category}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 -z-30"
        >
          <div className="absolute inset-0 animate-kenburns">
            <Image
              src={current.image}
              alt=""
              fill
              preload={slide === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,rgba(10,26,63,0.97)_0%,rgba(19,42,99,0.88)_48%,rgba(29,78,216,0.5)_100%)]" />
      <motion.div
        style={{ x: spotX, y: spotY }}
        className="pointer-events-none absolute left-1/2 top-[38%] -z-10 -ml-[360px] -mt-[360px] h-[720px] w-[720px] bg-[radial-gradient(closest-side,rgba(147,197,253,0.22),transparent)]"
      />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="glow absolute -top-40 right-1/4 -z-10 h-[500px] w-[500px] animate-blob text-brand-700/25" />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="mx-auto w-full max-w-7xl px-4 will-change-[transform,opacity] pb-20 pt-28 sm:px-5 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-36"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-brand-300 sm:text-base"
            >
              NextGen Innovations
            </motion.p>

            <h1 className="mt-5 font-display text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white min-[400px]:text-[2.45rem] sm:mt-6 sm:text-6xl lg:text-7xl">
              <motion.span
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3"
              >
                Learn
                <Sparkles className="h-[0.55em] w-[0.55em] animate-twinkle text-amber-300 drop-shadow-[0_0_12px_rgba(252,211,77,0.7)]" />
              </motion.span>
              <span className="relative mt-1 block h-[1.15em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.word}
                    initial={{ y: "110%", rotateX: -50, opacity: 0 }}
                    animate={{ y: "0%", rotateX: 0, opacity: 1 }}
                    exit={{ y: "-110%", rotateX: 40, opacity: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 animate-shimmer-text whitespace-nowrap bg-[linear-gradient(90deg,#ffffff,#93c5fd,#60a5fa,#93c5fd,#ffffff)] bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(96,165,250,0.45)]"
                  >
                    {current.word}
                  </motion.span>
                </AnimatePresence>
              </span>
              <motion.span
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="relative inline-block"
              >
                from experts.
                <svg
                  viewBox="0 0 300 20"
                  className="absolute -bottom-3 left-0 w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M3 14 C 80 4, 200 4, 297 12"
                    fill="none"
                    stroke="url(#hero-underline)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.1, delay: 0.8, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="hero-underline" x1="0" x2="1">
                      <stop offset="0" stopColor="#93c5fd" />
                      <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.span>
            </h1>

            <AnimatePresence mode="wait">
              <motion.p
                key={current.category}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-brand-100/90 sm:mt-7 sm:text-lg"
              >
                {current.blurb}{" "}
                <span className="font-semibold text-white">
                  {count} program{count === 1 ? "" : "s"}
                </span>{" "}
                in Coimbatore &amp; Trichy — classroom and live online.
              </motion.p>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="mt-8 sm:mt-9"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300/90">
                Browse by category
              </p>
              <motion.div
                role="tablist"
                aria-label="Course categories"
                className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.45 } } }}
              >
                {homeCategories.map((cat, i) => {
                  const CatIcon = categoryIcons[cat.icon];
                  const active = i === slide;
                  return (
                    <motion.button
                      key={cat.category}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => selectCategory(i)}
                      variants={{
                        hidden: { opacity: 0, y: 14, scale: 0.9 },
                        show: { opacity: 1, y: 0, scale: 1 },
                      }}
                      whileHover={{ y: -3, scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className={`group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
                        active
                          ? "bg-white text-brand-800 shadow-lg shadow-brand-400/35"
                          : "bg-white/10 text-brand-50 ring-1 ring-white/20 hover:bg-white/20"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="hero-cat-glow"
                          className="absolute inset-0 -z-0 rounded-full bg-white"
                          transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        />
                      )}
                      <CatIcon className={`relative h-4 w-4 ${active ? "text-brand-600" : "text-brand-300"}`} />
                      <span className="relative">{cat.shortLabel}</span>
                      {"hot" in cat && cat.hot && (
                        <motion.span
                          animate={{ scale: [1, 1.08, 1] }}
                          transition={{ duration: 1.6, repeat: Infinity }}
                          className="relative rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-1.5 py-px text-[10px] font-bold uppercase tracking-wide text-brand-950"
                        >
                          Hot
                        </motion.span>
                      )}
                      {active && !paused && (
                        <motion.span
                          key={`progress-${slide}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-500"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55 }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:mt-9"
            >
              <motion.a
                href={`#category-${categorySlug(current.category)}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-4 font-semibold text-white shadow-2xl shadow-brand-950/40"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.category}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="relative inline-flex items-center gap-2"
                  >
                    <Icon className="h-5 w-5" />
                    Explore {current.shortLabel}
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </motion.span>
                </AnimatePresence>
              </motion.a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-2 py-2 font-semibold text-white transition hover:text-brand-200"
              >
                Free counselling
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.82, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}
            className="relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block"
          >
            <div className="glow absolute inset-[10%] text-brand-500/40" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`orbit-${current.category}`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {orbitOuter.length > 0 && (
                  <OrbitRing
                    items={orbitOuter}
                    size={480}
                    spin="animate-orbit"
                    counter="animate-orbit-reverse"
                    offset={Math.PI / 4}
                  />
                )}
                {orbitInner.length > 0 && (
                  <OrbitRing
                    items={orbitInner}
                    size={330}
                    spin="animate-orbit-fast"
                    counter="animate-orbit-fast-reverse"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-300 via-brand-400 to-brand-600 p-1.5 shadow-2xl shadow-brand-950/50"
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.category}
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.55 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={catCourses[0]?.image ?? heroPortrait}
                      alt={current.category}
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
                <motion.div
                  key={`badge-${current.category}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-x-0 bottom-5 text-center"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-800 shadow-lg">
                    <Icon className="h-3.5 w-3.5 text-brand-600" />
                    {current.shortLabel}
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              key={`live-${current.category}`}
              initial={{ opacity: 0, x: -24, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 200, damping: 18 }}
              className="absolute -left-6 top-[14%] flex animate-float items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-2xl"
            >
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-red-500 text-white">
                <Video className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-red-400" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-red-500">Live now</p>
                <p className="max-w-[11rem] truncate text-sm font-bold text-slate-900">
                  {liveCourse?.title ?? current.shortLabel}
                </p>
              </div>
            </motion.div>

            <motion.div
              key={`placed-${current.category}`}
              initial={{ opacity: 0, x: 24, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 18 }}
              className="absolute -right-4 bottom-[14%] flex animate-float-slow items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-2xl"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <Trophy className="h-5 w-5" />
              </span>
              <div>
                <p className="max-w-[11rem] truncate text-sm font-bold text-slate-900">
                  Placed · {placedCourse?.title?.split("(")[0]?.trim() ?? current.shortLabel}
                </p>
                <p className="text-xs text-slate-500">{count} programs in this path</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 sm:mt-16">
          <QuickInquiry preferredCourse={preferred} />
        </div>
      </motion.div>

      <svg
        className="absolute inset-x-0 bottom-0 -mb-px h-16 w-full sm:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 60 C 240 110, 480 10, 720 50 S 1200 100, 1440 40 V100 H0 Z" fill="#f5f9ff" />
      </svg>
    </section>
  );
}
