import type { Metadata } from "next";
import Footer from "@/components/Footer";
import InfoGrid from "@/components/InfoGrid";
import LeadForm from "@/components/LeadForm";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import ScrollExtras from "@/components/ScrollExtras";
import TrustedBy from "@/components/TrustedBy";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { corporateFeatures, corporateProcess } from "@/data/pages";
import { courses, images } from "@/data/site";

export const metadata: Metadata = {
  title: "Corporate Training in Coimbatore & Trichy | Employee Upskilling Programs",
  description:
    "Corporate training programs by NextGen Innovation — customised SAP, Data & AI, Cloud, DevOps, Testing, Salesforce and BIM training for teams. Online, on-site or at our Coimbatore and Trichy branches.",
  alternates: { canonical: "/corporate-training" },
};

export default function CorporateTrainingPage() {
  const categories = Array.from(new Set(courses.map((c) => c.category)));
  return (
    <>
      <ScrollExtras enquireHref="#enquire" />
      <Navbar ctaHref="#enquire" />
      <main>
        <PageHero
          eyebrow="Corporate Training"
          title="Transform your workforce"
          text="Corporate training that builds employee skills, boosts team performance and drives business growth — customised to your projects and delivered by industry experts."
          image={images.about2}
          crumbs={[{ label: "Corporate Training" }]}
          ctaLabel="Request a Proposal"
          ctaHref="#enquire"
        />
        <TrustedBy />

        <section className="relative bg-gradient-to-b from-white via-brand-50/50 to-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Why Companies Choose Us"
              title={<>Corporate training <span className="text-gradient">features</span></>}
              text="Programs delivered as per your training needs, with measurable outcomes for every participant."
            />
            <InfoGrid items={corporateFeatures} />
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Training Areas"
              title={<>Our skill <span className="text-gradient">repository</span></>}
              text="Upskill your teams across the technologies your business runs on."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, i) => (
                <Reveal key={cat} delay={i * 0.06} className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-700">{cat}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                    {courses.filter((c) => c.category === cat).map((c) => <li key={c.slug}>{c.title}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-brand-50/70 to-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="How It Works" title={<>Our corporate training <span className="text-gradient">process</span></>} />
            <ProcessSteps steps={corporateProcess} />
          </div>
        </section>

        <section id="enquire" className="scroll-mt-28 py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
            <SectionHeading
              align="left"
              eyebrow="Corporate Enquiry"
              title={<>Let&apos;s build your <span className="text-gradient">training plan</span></>}
              text="Share your requirement and our corporate training team will get back to you within 24 hours with a customised proposal."
            />
            <LeadForm
              title="Corporate Training Form"
              subtitle="Tell us about your team and training needs."
              interest="Corporate Training"
              companyField
              optionsLabel="Team size"
              options={["1–20", "21–50", "51–200", "200+"]}
              buttonLabel="Request a Proposal"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
