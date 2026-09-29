import { features } from "@/data/site";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Features() {
  return (
    <section className="relative bg-gradient-to-b from-white via-brand-50/50 to-white py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Everything you need to <span className="text-gradient">get job-ready</span></>}
          text="We combine industry expert trainers, real tools and live project work so that learning is practical, flexible and career-focused."
        />

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.08}
              className="group relative overflow-hidden rounded-3xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-brand-900/15"
            >
              <div className="absolute inset-0 -z-0 bg-gradient-to-br from-brand-600 to-brand-800 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-brand-700 transition-all duration-500 group-hover:rotate-6 group-hover:bg-white/20 group-hover:text-white">
                  <Icon name={f.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-semibold transition-colors duration-500 group-hover:text-white">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-brand-50">{f.text}</p>
                <span className="absolute -right-2 -top-2 font-display text-6xl font-extrabold text-brand-100 transition-colors duration-500 group-hover:text-white/15">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
