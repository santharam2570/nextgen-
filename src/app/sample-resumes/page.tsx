import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Inquiry from "@/components/Inquiry";
import LinkCards from "@/components/LinkCards";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import { courseDetails } from "@/data/course-details";
import { courses, images } from "@/data/site";

export const metadata: Metadata = {
  title: "Sample Resumes for Freshers & Experienced | Resume Templates",
  description:
    "Free sample resumes for SAP, Data Science, Generative AI, Full Stack, Software Testing, Cloud, DevOps, Salesforce, Digital Marketing, BIM and design roles — with skills, projects and resume tips.",
  alternates: { canonical: "/sample-resumes" },
};

export default function SampleResumesPage() {
  const items = courses.map((c) => ({
    href: `/sample-resumes/${c.slug}`,
    title: `${c.title} Sample Resume`,
    text: `Resume format for ${courseDetails[c.slug]?.roles[0] ?? c.title} roles, with key skills, projects and certifications to highlight.`,
    image: c.image,
    tag: c.category,
  }));

  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="Sample Resumes"
          title="Build a resume that gets shortlisted"
          text="Role-wise sample resumes showing the skills, tools, projects and certifications recruiters look for. Use them as a guide to create your own ATS-friendly resume."
          image={images.about1}
          crumbs={[{ label: "Sample Resumes" }]}
        />
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <LinkCards items={items} cta="View resume" />
          </div>
        </section>
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
