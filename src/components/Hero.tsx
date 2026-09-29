"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Loader2,
  Megaphone,
  Phone,
  PhoneCall,
  PlayCircle,
  ShieldCheck,
  Sofa,
  Star,
  Trophy,
  Video,
} from "lucide-react";
import { heroPortrait, heroSlides, inquiryCourses, site } from "@/data/site";
import { WhatsappIcon } from "./ui/Brand";

const SLIDE_MS = 6500;

const outerOrbit = [
  { Icon: Database, color: "from-brand-400 to-brand-700" },
  { Icon: Brain, color: "from-brand-500 to-brand-800" },
  { Icon: Code2, color: "from-brand-400 to-brand-700" },
  { Icon: Building2, color: "from-brand-500 to-brand-800" },
];
const innerOrbit = [
  { Icon: Cloud, color: "from-brand-600 to-brand-900" },
  { Icon: ShieldCheck, color: "from-brand-600 to-brand-900" },
  { Icon: Megaphone, color: "from-brand-600 to-brand-900" },
  { Icon: Sofa, color: "from-brand-600 to-brand-900" },
];

function Orbit({
  items,
  size,
  spin,
  counter,
  offset = 0,
}: {
  items: typeof outerOrbit;
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
      {items.map(({ Icon, color }, i) => {
        const angle = (i / items.length) * Math.PI * 2 + offset;
        const x = 50 + 50 * Math.cos(angle);
        const y = 50 + 50 * Math.sin(angle);
        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span
              className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-xl ring-4 ring-white/20 ${counter}`}
            >
              <Icon className="h-6 w-6" />
            </span>
          </div>
        );
      })}
    </div>
  );
}

function QuickInquiry() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

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
    <div className="relative rounded-[1.75rem] bg-[linear-gradient(110deg,#60a5fa,#2563eb,#93c5fd,#1d4ed8,#60a5fa)] bg-[length:200%_auto] p-[3px] shadow-[0_0_60px_-10px_rgba(59,130,246,0.75)] animate-gradient">
      <div className="rounded-[calc(1.75rem-3px)] bg-white p-5 sm:p-6">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-lg shadow-brand-600/40">
              <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-brand-500/60" />
              <PhoneCall className="relative h-6 w-6" />
            </span>
            <div>
              <p className="flex flex-wrap items-center gap-2 font-display text-lg font-extrabold text-slate-900 sm:text-xl">
                Book a Free Career Counselling Call
                <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">Free</span>
              </p>
              <p className="text-sm text-slate-500">Takes 20 seconds · Our counsellor calls you back within 24 hours</p>
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
              <span className="font-semibold">Thanks {name.split(" ")[0]}! Our career counsellor will call you within 24 hours.</span>
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
              <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" placeholder="Mobile number" className={field} />
              <select value={course} onChange={(e) => setCourse(e.target.value)} className={`${field} ${course ? "" : "text-slate-500"}`}>
                <option value="">Which course interests you?</option>
                {inquiryCourses.map((c) => (
                  <option key={c} value={c}>{c}</option>
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
                  <>Book Free Call <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></>
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
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgba(147,197,253,0.2), transparent 60%)`;
  const tiltX = useSpring(useTransform(my, [0, 100], [8, -8]), { stiffness: 80, damping: 20 });
  const tiltY = useSpring(useTransform(mx, [0, 100], [-8, 8]), { stiffness: 80, damping: 20 });

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), SLIDE_MS);
    return () => clearInterval(t);
  }, [slide]);

  const onMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  const current = heroSlides[slide];

  return (
    <section
      ref={ref}
      id="home"
      onMouseMove={onMove}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-brand-950"
    >
      <AnimatePresence>
        <motion.div
          key={slide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 -z-30"
        >
          <div className="absolute inset-0 animate-kenburns">
            <Image src={current.image} alt="" fill priority={slide === 0} sizes="100vw" className="object-cover" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(10,26,63,0.97)_0%,rgba(19,42,99,0.9)_45%,rgba(29,78,216,0.55)_100%)]" />
      <motion.div className="pointer-events-none absolute inset-0 -z-10" style={{ background: spotlight }} />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-[500px] w-[500px] animate-blob rounded-full bg-brand-700/25 blur-3xl" />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="mx-auto w-full max-w-7xl px-4 pb-24 pt-28 sm:px-5 sm:pb-40 sm:pt-32 lg:px-8 lg:pb-44"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/10 py-1.5 pl-1.5 pr-4 text-sm text-brand-100 ring-1 ring-white/20 backdrop-blur"
            >
              <span className="rounded-full bg-gradient-to-r from-brand-400 to-brand-700 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                New
              </span>
              New batches: SAP, Generative AI, Cloud & more
            </motion.div>

            <h1 className="mt-6 font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-white min-[400px]:text-[2.5rem] sm:mt-7 sm:text-6xl lg:text-7xl">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Your journey to
              </motion.span>
              <span className="relative block h-[1.15em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.word}
                    initial={{ y: "110%", rotateX: -60, opacity: 0 }}
                    animate={{ y: "0%", rotateX: 0, opacity: 1 }}
                    exit={{ y: "-110%", rotateX: 60, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 whitespace-nowrap bg-gradient-to-r from-white via-brand-200 to-brand-400 bg-clip-text text-transparent"
                  >
                    {current.word}
                  </motion.span>
                </AnimatePresence>
              </span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative inline-block"
              >
                starts here.
                <svg viewBox="0 0 300 20" className="absolute -bottom-3 left-0 w-full" preserveAspectRatio="none" aria-hidden="true">
                  <motion.path
                    d="M3 14 C 80 4, 200 4, 297 12"
                    fill="none"
                    stroke="url(#hero-underline)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-brand-100/85 sm:mt-8 sm:text-lg"
            >
              Live classes by industry experts in SAP, Data Science, Generative AI, Cloud, Cybersecurity,
              Software, Digital Marketing, BIM and Design — hands-on projects and placement support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:mt-9 sm:gap-5"
            >
              <a
                href="#courses"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-4 font-semibold text-white shadow-2xl shadow-brand-950/40 transition hover:scale-105"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Explore Courses
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a href="#journey" className="group inline-flex items-center gap-3 font-semibold text-white">
                <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur transition group-hover:bg-white group-hover:text-brand-700">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-white/30" />
                  <PlayCircle className="relative h-6 w-6" />
                </span>
                How it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-100/80 sm:mt-10 sm:gap-x-8"
            >
              <span className="flex items-center gap-2">
                <span className="flex text-amber-300">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </span>
                <b className="text-white">4.9</b> Google rating
              </span>
              <span><b className="text-white">5,000+</b> professionals trained</span>
              <span><b className="text-white">92%</b> placement</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}
            className="relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block"
          >
            <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-brand-400/40 to-brand-700/40 blur-2xl" />
            <Orbit items={outerOrbit} size={480} spin="animate-orbit" counter="animate-orbit-reverse" offset={Math.PI / 4} />
            <Orbit items={innerOrbit} size={330} spin="animate-orbit-fast" counter="animate-orbit-fast-reverse" />

            <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-300 via-brand-400 to-brand-600 p-1.5 shadow-2xl shadow-brand-950/50">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image src={heroPortrait} alt="NextGen professional" fill sizes="240px" className="object-cover" priority />
              </div>
            </div>

            <div className="absolute -left-6 top-[14%] flex animate-float items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-2xl">
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-red-500 text-white">
                <Video className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-red-400" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-red-500">Live now</p>
                <p className="text-sm font-bold text-slate-900">SAP FICO · 240 watching</p>
              </div>
            </div>

            <div className="absolute -right-4 bottom-[14%] flex animate-float-slow items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-2xl">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <Trophy className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">Placed · BIM Modeller</p>
                <p className="text-xs text-slate-500">Lakshmi, our 2025 batch</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 sm:mt-14"
        >
          <div className="mb-4 flex items-center justify-end gap-4">
            <div className="hidden items-center gap-4 sm:flex">
              {heroSlides.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setSlide(i)}
                  className={`group flex flex-col gap-1.5 text-left text-xs font-semibold uppercase tracking-wider transition ${i === slide ? "text-white" : "text-white/50 hover:text-white/80"}`}
                >
                  {s.label}
                  <span className="h-0.5 w-16 overflow-hidden rounded-full bg-white/20">
                    {i === slide && (
                      <motion.span
                        key={slide}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                        className="block h-full bg-white"
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <QuickInquiry />
        </motion.div>
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
