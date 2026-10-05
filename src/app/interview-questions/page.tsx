import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Inquiry from "@/components/Inquiry";
import LinkCards from "@/components/LinkCards";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import { courses, images } from "@/data/site";

export const metadata: Metadata = {
  title: "Interview Questions and Answers for Freshers & Experienced",
  description:
    "Top interview questions and answers for SAP FICO, SAP MM, SAP ABAP, Data Science, Generative AI, Full Stack, Software Testing, Cloud, DevOps, Salesforce, BIM and more — prepared by NextGen Innovation trainers.",
  alternates: { canonical: "/interview-questions" },
};

export default function InterviewQuestionsPage() {
  const items = courses.map((c) => ({
    href: `/interview-questions/${c.slug}`,
    title: `${c.title} Interview Questions`,
    text: `Frequently asked ${c.title} interview questions with clear answers for freshers and experienced candidates.`,
    image: c.image,
    tag: c.category,
  }));

  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="Interview Questions"
          title="Crack your next interview"
          text="Frequently asked interview questions and answers prepared by our trainers. Use them to revise key concepts before your technical and HR rounds."
          image={images.cta}
          crumbs={[{ label: "Interview Questions" }]}
        />
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <LinkCards items={items} cta="View questions" />
          </div>
        </section>
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
