import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Footer from "@/components/Footer";
import InfoGrid from "@/components/InfoGrid";
import Inquiry from "@/components/Inquiry";
import Navbar from "@/components/Navbar";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { everyModeIncludes, modeComparison, trainingModes } from "@/data/pages";
import { gallery } from "@/data/site";

export const metadata: Metadata = {
  title: "Modes of Training | Classroom, Online, Hybrid & Corporate",
  description:
    "Choose how you learn at NextGen Innovation — classroom training at our Coimbatore and Trichy branches, live online training, hybrid batches or customised corporate training. Same expert trainers and placement support.",
  alternates: { canonical: "/training-modes" },
};

export default function TrainingModesPage() {
  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="Modes of Training"
          title="Learn the way that suits you"
          text="Classroom, online, hybrid or corporate — choose the training mode that fits your schedule and learning style. Every mode includes expert trainers, real-time projects and complete support."
          image={gallery[0].src}
          crumbs={[{ label: "Modes of Training" }]}
        />

        <section className="relative bg-gradient-to-b from-white via-brand-50/50 to-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Choose Your Mode"
              title={<>Four flexible ways <span className="text-gradient">to learn</span></>}
              text="Pick one mode or combine them — you can switch as your schedule changes."
            />
            <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
              {trainingModes.map((m, i) => (
                <Reveal
                  key={m.title}
                  delay={(i % 2) * 0.1}
                  className="flex flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white">
                      <Icon name={m.icon} className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{m.title}</h3>
                      <p className="text-sm font-semibold text-brand-700">{m.tag}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-relaxed text-slate-600">{m.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-slate-700">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-2xl bg-brand-50/70 p-4 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">Ideal for: </span>{m.idealFor}
                  </p>
                  <Link
                    href={m.href}
                    className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white"
                  >
                    {m.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Compare"
              title={<>Which mode is <span className="text-gradient">right for you?</span></>}
              text="A quick comparison to help you decide. Still unsure? Book a free counselling session."
            />
            <Reveal className="mt-10 overflow-x-auto rounded-3xl border border-brand-100 bg-white shadow-sm sm:mt-14">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="bg-brand-950 text-white">
                    <th className="p-4 font-semibold sm:p-5">Feature</th>
                    {trainingModes.map((m) => (
                      <th key={m.title} className="p-4 font-semibold sm:p-5">{m.title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {modeComparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 ? "bg-brand-50/50" : "bg-white"}>
                      <td className="p-4 font-semibold text-slate-900 sm:p-5">{row.feature}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className="p-4 text-slate-600 sm:p-5">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        <section className="bg-gradient-to-b from-brand-50/70 to-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Included In Every Mode"
              title={<>Same quality, <span className="text-gradient">whichever you choose</span></>}
            />
            <InfoGrid items={everyModeIncludes} />
          </div>
        </section>

        <Inquiry />
        <PageCTA
          title="Not sure which mode to choose?"
          text="Talk to our counsellor — we'll recommend the right mode and batch based on your schedule and goals."
        />
      </main>
      <Footer />
    </>
  );
}
