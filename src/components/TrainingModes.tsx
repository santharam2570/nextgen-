import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trainingModes } from "@/data/pages";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function TrainingModes() {
  return (
    <section id="modes" className="relative bg-gradient-to-b from-brand-50/70 to-white py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Modes of Training"
          title={<>Learn the way <span className="text-gradient">that suits you</span></>}
          text="Choose classroom, online, hybrid or corporate training — every mode includes expert trainers, real-time projects and complete support."
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {trainingModes.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <Link
                href="/training-modes"
                className="group flex h-full flex-col items-center rounded-3xl border border-brand-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/15 sm:p-7"
              >
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-lg shadow-brand-600/30 transition group-hover:rotate-6">
                  <Icon name={m.icon} className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{m.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-600">{m.tag}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.text}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-700">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
