import type { Metadata } from "next";
import AppShowcase from "@/components/AppShowcase";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import InfoGrid from "@/components/InfoGrid";
import Inquiry from "@/components/Inquiry";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { onlineFeatures, onlineRegions } from "@/data/pages";
import { gallery } from "@/data/site";

export const metadata: Metadata = {
  title: "Online Training | Live Instructor-Led Courses with Placement",
  description:
    "Live online training in SAP, Data Science, Gen AI, Cloud, DevOps, Testing, Digital Marketing and BIM from NextGen Innovation — for learners across India, USA, UK, Canada, UAE, Singapore and Australia.",
  alternates: { canonical: "/online-training" },
};

export default function OnlineTrainingPage() {
  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="Online Training"
          title="Live online training from anywhere"
          text="Join live instructor-led classes from India or abroad. Same expert trainers, same real-time projects and same placement support as our Coimbatore and Trichy classroom batches — with every class recorded on our app."
          image={gallery[7].src}
          crumbs={[{ label: "Online Training" }]}
        />

        <section className="relative bg-gradient-to-b from-white via-brand-50/50 to-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Why Learn Online"
              title={<>Classroom quality, <span className="text-gradient">online flexibility</span></>}
              text="Online classes give you the flexibility of remote learning without compromising on practical training."
            />
            <InfoGrid items={onlineFeatures} />
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Global Learners"
              title={<>Learners join us <span className="text-gradient">from across the world</span></>}
              text="Batch timings are planned to suit learners in different time zones."
            />
            <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
              {onlineRegions.map((r) => (
                <span key={r} className="rounded-xl border border-brand-100 bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm">{r}</span>
              ))}
            </Reveal>
          </div>
        </section>

        <AppShowcase />
        <Courses />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
