import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/data/site";
import { WhatsappIcon } from "./ui/Brand";
import Reveal from "./ui/Reveal";

type Props = {
  title: string;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PageCTA({ title, text, ctaLabel = "Ask For Demo", ctaHref = "#contact" }: Props) {
  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi ${site.name}, I'd like to know more about your courses.`)}`;
  return (
    <section className="px-5 pb-4 lg:px-8">
      <Reveal scale className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-6 py-16 text-center shadow-2xl shadow-brand-900/30 sm:px-16">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100">{text}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={ctaHref} className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-brand-800 shadow-xl transition hover:scale-105">
              {ctaLabel} <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-4 font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/20">
              <Phone className="h-5 w-5" /> {site.phone}
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white transition hover:scale-105">
              <WhatsappIcon className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
