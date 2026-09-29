import { Sparkles } from "lucide-react";
import { trustedBy } from "@/data/site";

export default function TrustedBy() {
  const items = [...trustedBy, ...trustedBy];
  return (
    <section className="border-b border-brand-100 bg-[#f5f9ff] py-8">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-700/70">
        Our trainers & alumni work at
      </p>
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap font-display text-xl font-semibold text-slate-400">
              <Sparkles className="h-5 w-5 text-brand-400" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
