import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { site } from "@/data/site";
import { WhatsappIcon } from "./ui/Brand";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image: string;
  crumbs: Crumb[];
  ctaLabel?: string;
  ctaHref?: string;
  whatsappText?: string;
};

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  crumbs,
  ctaLabel = "Book a FREE Counselling",
  ctaHref = "#contact",
  whatsappText = `Hi ${site.name}, I'd like to know more about your courses.`,
}: Props) {
  const tel = `tel:${site.phone.replace(/\s/g, "")}`;
  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section className="relative isolate overflow-hidden bg-brand-950 pb-14 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
      <Image src={image} alt="" fill preload sizes="100vw" className="-z-20 object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(10,26,63,0.98)_0%,rgba(19,42,99,0.92)_55%,rgba(29,78,216,0.6)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-brand-200/80">
          <Link href="/" className="hover:text-white">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-4 w-4" />
              {c.href ? (
                <Link href={c.href} className="hover:text-white">{c.label}</Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="mt-6">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-100 ring-1 ring-white/20">
            {eyebrow}
          </span>
        </div>

        <h1 className="mt-5 max-w-4xl font-display text-[2rem] font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-100/85 sm:mt-6 sm:text-lg">{text}</p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center">
          <a
            href={ctaHref}
            className="group inline-flex items-center gap-2 col-span-2 justify-center rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-4 font-semibold text-white shadow-2xl shadow-brand-900/40 transition hover:scale-105 sm:col-span-1"
          >
            {ctaLabel} <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <a href={tel} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-4 font-semibold text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/20">
            <Phone className="h-5 w-5" /> Call Now
          </a>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
            <WhatsappIcon className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
