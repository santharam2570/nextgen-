"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { branches } from "@/data/branches";
import { inquiryCourses, site } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

type Form = {
  name: string;
  phone: string;
  email: string;
  course: string;
  mode: string;
  message: string;
};

const empty: Form = { name: "", phone: "", email: "", course: "", mode: "Online (App)", message: "" };

function validate(f: Form) {
  const e: Partial<Record<keyof Form, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name";
  if (!/^[6-9]\d{9}$/.test(f.phone.replace(/\D/g, "").slice(-10))) e.phone = "Enter a valid 10-digit mobile number";
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email";
  if (!f.course) e.course = "Please choose a course";
  return e;
}

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

export default function Inquiry() {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  }

  const contacts = [
    { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Visit", value: branches.map((b) => b.city).join(" & ") + " branches", href: "/branches" },
    { icon: Clock, label: "Hours", value: site.hours },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 via-white to-brand-50/40" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Course Enquiry"
          title={<>Book a FREE <span className="text-gradient">counselling session</span></>}
          text="Fill in the form and our team will call you within 24 hours with course details, fees, upcoming batch dates and a free demo class."
        />

        <div className="mt-10 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-[1fr_1.35fr]">
          <Reveal direction="right" className="order-2 flex flex-col gap-4 sm:gap-5 lg:order-none">
            {contacts.map((c) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-600/30">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-600">{c.label}</span>
                    <span className="block font-medium text-slate-800">{c.value}</span>
                  </span>
                </>
              );
              const cls = "flex items-center gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg";
              return c.href ? (
                <a key={c.label} href={c.href} className={cls}>{inner}</a>
              ) : (
                <div key={c.label} className={cls}>{inner}</div>
              );
            })}
            <div className="min-h-[220px] flex-1 overflow-hidden rounded-2xl border border-brand-100 shadow-sm">
              <iframe
                title={`${branches[0].name} location`}
                src={site.mapEmbed}
                className="h-full min-h-[220px] w-full grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal direction="left" className="relative order-1 rounded-3xl bg-white p-5 shadow-2xl sm:rounded-[2rem] sm:p-10 lg:order-none shadow-brand-900/10 ring-1 ring-brand-100">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[460px] flex-col items-center justify-center text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                    className="grid h-20 w-20 place-items-center rounded-full bg-green-100 text-green-600"
                  >
                    <CheckCircle2 className="h-10 w-10" />
                  </motion.span>
                  <h3 className="mt-6 text-2xl font-bold">Thank you! 🎉</h3>
                  <p className="mt-3 max-w-sm text-slate-600">
                    Your request is in. A senior counsellor will call you within 24 hours to plan your next step.
                  </p>
                  <button onClick={() => setStatus("idle")} className="mt-8 rounded-full bg-brand-50 px-6 py-3 font-semibold text-brand-700 hover:bg-brand-100">
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <h3 className="text-2xl font-bold">Schedule 1:1 free counselling</h3>
                    <p className="mt-1 text-sm text-slate-500">Get course details, fees and batch dates.</p>
                  </div>

                  <Field label="Full name *" error={errors.name}>
                    <input value={form.name} onChange={set("name")} placeholder="Your name" className={`${inputBase} ${errors.name ? "border-red-400" : "border-brand-100"}`} />
                  </Field>
                  <Field label="Mobile number *" error={errors.phone}>
                    <input value={form.phone} onChange={set("phone")} inputMode="tel" placeholder="98765 43210" className={`${inputBase} ${errors.phone ? "border-red-400" : "border-brand-100"}`} />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input value={form.email} onChange={set("email")} type="email" placeholder="you@example.com" className={`${inputBase} ${errors.email ? "border-red-400" : "border-brand-100"}`} />
                  </Field>
                  <Field label="Interested course *" error={errors.course}>
                    <select value={form.course} onChange={set("course")} className={`${inputBase} ${errors.course ? "border-red-400" : "border-brand-100"} ${form.course ? "" : "text-slate-400"}`}>
                      <option value="">Select a course</option>
                      {inquiryCourses.map((c) => <option key={c} value={c} className="text-slate-900">{c}</option>)}
                      <option value="Not sure yet" className="text-slate-900">Not sure yet — help me choose</option>
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Preferred mode</span>
                    <div className="flex flex-wrap gap-3">
                      {["Online (App)", "Offline (Centre)", "Hybrid"].map((m) => (
                        <label key={m} className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium transition ${form.mode === m ? "border-brand-600 bg-brand-600 text-white shadow-lg shadow-brand-600/25" : "border-brand-200 bg-white text-slate-700 hover:border-brand-400"}`}>
                          <input type="radio" name="mode" value={m} checked={form.mode === m} onChange={set("mode")} className="sr-only" />
                          {m}
                        </label>
                      ))}
                    </div>
                  </div>

                  <Field label="Message" className="sm:col-span-2">
                    <textarea value={form.message} onChange={set("message")} rows={4} placeholder="Tell us your qualification, current role or career goal — and any questions about the course, fees or batches..." className={`${inputBase} resize-none border-brand-100`} />
                  </Field>

                  {status === "error" && (
                    <p className="text-sm text-red-600 sm:col-span-2">
                      Something went wrong. Please try again or call us at {site.phone}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 via-brand-800 to-brand-600 bg-[length:200%_auto] px-8 py-4 font-semibold text-white shadow-xl shadow-brand-600/30 transition-all hover:bg-right disabled:opacity-70 sm:col-span-2"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      <>Ask For Demo <Send className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 sm:col-span-2">
                    By submitting, you agree to be contacted by {site.name}. Your details stay private — we never sell or share them.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, className = "", children }: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}
