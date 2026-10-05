import type { Metadata } from "next";
import Footer from "@/components/Footer";
import InfoGrid from "@/components/InfoGrid";
import LeadForm from "@/components/LeadForm";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import ScrollExtras from "@/components/ScrollExtras";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { hireBenefits, hireProcess } from "@/data/pages";
import { courseDetails } from "@/data/course-details";
import { courses, images } from "@/data/site";

export const metadata: Metadata = {
  title: "Hire From Us | Hire Trained Freshers & IT Professionals",
  description:
    "Hire job-ready, pre-screened candidates trained at NextGen Innovation, Coimbatore & Trichy — SAP consultants, data analysts, developers, testers, cloud engineers, digital marketers and BIM modellers.",
  alternates: { canonical: "/hire-from-us" },
};

export default function HireFromUsPage() {
  const categories = Array.from(new Set(courses.map((c) => c.category)));
  return (
    <>
      <ScrollExtras enquireHref="#enquire" />
      <Navbar ctaHref="#enquire" />
      <main>
        <PageHero
          eyebrow="Hire From Us"
          title="Hire job-ready talent"
          text="Hire trained and pre-screened freshers and experienced candidates across SAP, Data & AI, Software, Cloud, Testing, Digital Marketing and Design — ready to contribute from day one."
          image={images.hero}
          crumbs={[{ label: "Hire From Us" }]}
          ctaLabel="Share Your Requirement"
          ctaHref="#enquire"
        />

        <section className="relative bg-gradient-to-b from-white via-brand-50/50 to-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Why Hire From Us"
              title={<>Talent solutions <span className="text-gradient">for your business</span></>}
              text="Access a pool of trained candidates whose skills are evaluated before they reach you."
            />
            <InfoGrid items={hireBenefits} />
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Talent Pool"
              title={<>Roles you can <span className="text-gradient">hire for</span></>}
              text="Candidates trained on real tools and real-time projects in every domain."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, i) => {
                const roles = Array.from(
                  new Set(courses.filter((c) => c.category === cat).flatMap((c) => courseDetails[c.slug]?.roles.slice(0, 2) ?? []))
                );
                return (
                  <Reveal key={cat} delay={i * 0.06} className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-brand-700">{cat}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                      {roles.map((r) => <li key={r}>{r}</li>)}
                    </ul>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-brand-50/70 to-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Hiring Process" title={<>Hire in <span className="text-gradient">4 simple steps</span></>} />
            <ProcessSteps steps={hireProcess} />
          </div>
        </section>

        <section id="enquire" className="scroll-mt-28 py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
            <SectionHeading
              align="left"
              eyebrow="Hiring Enquiry"
              title={<>Share your <span className="text-gradient">hiring requirement</span></>}
              text="Tell us the role and skills you need. Our placement team will share suitable candidate profiles."
            />
            <LeadForm
              title="Hire From Us"
              subtitle="Our placement team will contact you within 24 hours."
              interest="Hire From Us"
              companyField
              optionsLabel="Experience required"
              options={["Fresher", "1–3 years", "3+ years"]}
              buttonLabel="Submit Requirement"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
