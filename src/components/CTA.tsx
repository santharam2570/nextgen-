import { ArrowRight, Sparkles } from "lucide-react";
import { images, site } from "@/data/site";
import { AppStoreBadge, PlayStoreBadge } from "./ui/Brand";
import Reveal from "./ui/Reveal";

export default function CTA() {
  return (
    <section className="px-5 lg:px-8">
      <Reveal
        scale
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-cover bg-center px-6 py-20 text-center shadow-2xl shadow-brand-900/30 sm:px-16"
        style={{ backgroundImage: `url(${images.cta})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/95 via-brand-800/90 to-brand-900/90" />
        <div className="glow absolute -left-20 -top-20 h-72 w-72 animate-blob text-brand-700/40" />
        <div className="glow absolute -bottom-20 -right-20 h-72 w-72 animate-blob text-brand-400/40 [animation-delay:-6s]" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/25">
            <Sparkles className="h-4 w-4" /> Free demo class · Free counselling · No-cost EMI
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold text-white sm:text-5xl">
            Want an IT job? Be the next to get placed
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-100">
            Join 5,000+ students trained at {site.name}. Book a free demo class and 1:1 counselling session today and start your career in a top company.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-brand-700 shadow-xl transition hover:scale-105">
              Ask For Demo <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <PlayStoreBadge href={site.playStoreUrl} />
            <AppStoreBadge href={site.appStoreUrl} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
