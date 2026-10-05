"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const batches = ["Weekday", "Weekend", "Fast-track"];
const modes = ["Online (App)", "Classroom", "Hybrid"];

const input =
  "w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

export default function CourseEnquiry({ course }: { course: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [batch, setBatch] = useState(batches[0]);
  const [mode, setMode] = useState(modes[0]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Please enter your name");
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10))) return setError("Enter a valid 10-digit mobile number");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Enter a valid email");
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, course, mode, message: `Preferred batch: ${batch}` }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const chip = (active: boolean) =>
    `cursor-pointer rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
      active ? "border-brand-600 bg-brand-600 text-white" : "border-brand-200 bg-white text-slate-700 hover:border-brand-400"
    }`;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-brand-900/10 ring-1 ring-brand-100">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-8 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-8 w-8" />
            </span>
            <h3 className="mt-5 text-xl font-bold">Thank you, {name.split(" ")[0]}!</h3>
            <p className="mt-2 text-sm text-slate-600">
              A senior counsellor will call you within 24 hours with fee details and the next batch dates for {course}.
            </p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={submit} noValidate exit={{ opacity: 0 }} className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Book a FREE Counselling</h3>
              <p className="mt-1 text-sm text-slate-500">Course details, fees & upcoming batch dates.</p>
            </div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name *" className={input} />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" placeholder="Mobile number *" className={input} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email (optional)" className={input} />
            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">Preferred batch</span>
              <div className="flex flex-wrap gap-2">
                {batches.map((b) => (
                  <button type="button" key={b} onClick={() => setBatch(b)} className={chip(batch === b)}>{b}</button>
                ))}
              </div>
            </div>
            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">Mode</span>
              <div className="flex flex-wrap gap-2">
                {modes.map((m) => (
                  <button type="button" key={m} onClick={() => setMode(m)} className={chip(mode === m)}>{m}</button>
                ))}
              </div>
            </div>
            {(error || status === "error") && (
              <p className="text-xs font-medium text-red-500">{error || "Something went wrong. Please try again or call us."}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:scale-[1.02] disabled:opacity-70"
            >
              {status === "loading" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>Ask For Demo <Send className="h-4 w-4 transition group-hover:translate-x-1" /></>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
