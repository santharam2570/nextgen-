import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";

export type LinkCard = {
  href: string;
  title: string;
  text?: string;
  image?: string;
  tag?: string;
  meta?: string;
};

export default function LinkCards({ items, cta = "Read more" }: { items: LinkCard[]; cta?: string }) {
  return (
    <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => (
        <Reveal key={c.href} delay={(i % 3) * 0.08}>
          <Link
            href={c.href}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10"
          >
            {c.image && (
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={c.image} alt={c.title} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                {c.tag && <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">{c.tag}</span>}
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              {!c.image && c.tag && <span className="mb-3 self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{c.tag}</span>}
              <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
              {c.text && <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>}
              {c.meta && <p className="mt-3 text-xs font-medium text-slate-500">{c.meta}</p>}
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-700">
                {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
