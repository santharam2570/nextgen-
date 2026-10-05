"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Building2, Landmark, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { branches, mapDirectionsUrl, mapEmbedUrl } from "@/data/branches";
import { WhatsappIcon } from "./ui/Brand";

const digits = (phone: string) => phone.replace(/[^\d+]/g, "");

export default function BranchTabs() {
  const [active, setActive] = useState(branches[0].slug);
  const branch = branches.find((b) => b.slug === active) ?? branches[0];

  return (
    <div>
      <div role="tablist" aria-label="Branch cities" className="flex justify-center gap-2 border-b border-slate-200">
        {branches.map((b) => {
          const isActive = b.slug === active;
          return (
            <button
              key={b.slug}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(b.slug)}
              className={`relative flex items-center gap-2 px-5 py-3 text-base font-semibold transition-colors sm:px-8 ${
                isActive ? "text-brand-700" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Building2 className="h-5 w-5" />
              {b.city}
              {isActive && (
                <motion.span
                  layoutId="branch-tab"
                  className="absolute inset-x-0 -bottom-px h-[3px] rounded-full bg-brand-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={branch.slug}
          role="tabpanel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
          className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]"
        >
          <article className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-900/5 sm:p-8">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-brand-800 sm:text-2xl">
              <MapPin className="h-6 w-6 shrink-0 text-pink-600" />
              {branch.name}
            </h3>

            <address className="mt-5 not-italic leading-relaxed text-slate-600">
              {branch.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>

            {branch.landmark && (
              <p className="mt-3 flex items-start gap-2 text-sm text-slate-500">
                <Landmark className="mt-0.5 h-4 w-4 shrink-0" />
                {branch.landmark}
              </p>
            )}

            <ul className="mt-5 space-y-2.5 text-sm">
              {branch.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${digits(p)}`} className="flex items-center gap-2.5 font-medium text-slate-700 hover:text-brand-700">
                    <Phone className="h-4 w-4 text-brand-600" /> {p}
                  </a>
                </li>
              ))}
              {branch.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`} className="flex items-center gap-2.5 break-all text-slate-700 hover:text-brand-700">
                    <Mail className="h-4 w-4 shrink-0 text-brand-600" /> {e}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto grid grid-cols-2 gap-3 pt-7 sm:grid-cols-3">
              <a
                href={mapDirectionsUrl(branch.mapQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:scale-105 sm:col-span-1"
              >
                <Navigation className="h-4 w-4" /> Reach Us
              </a>
              <a
                href={`tel:${digits(branch.phones[0])}`}
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-brand-800 ring-2 ring-brand-200 transition hover:bg-brand-50"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={`https://wa.me/${digits(branch.phones[0]).replace("+", "")}?text=${encodeURIComponent(`Hi, I'd like to know more about courses at your ${branch.city} branch.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
              >
                <WhatsappIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </article>

          <div className="min-h-[320px] overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-brand-900/5">
            <iframe
              title={`Map of ${branch.name}`}
              src={mapEmbedUrl(branch.mapQuery)}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
