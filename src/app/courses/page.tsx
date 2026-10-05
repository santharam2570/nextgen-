import type { Metadata } from "next";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Inquiry from "@/components/Inquiry";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import { courses, images } from "@/data/site";

export const metadata: Metadata = {
  title: "All Courses | SAP, Data Science, Cloud, Testing & BIM Courses in Coimbatore & Trichy",
  description: `Explore all ${courses.length} courses at NextGen Innovation, Coimbatore & Trichy — SAP, Data Science, Gen AI, Cloud, DevOps, Cyber Security, Full Stack, Software Testing, Digital Marketing, BIM and Design. Classroom & online with placements.`,
  alternates: { canonical: "/courses" },
};

export default function AllCoursesPage() {
  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="All Courses"
          title="Explore our programs"
          text={`${courses.length} job-oriented courses across SAP, Data & AI, Software, Cloud & Security, Marketing and Design — classroom and online training with real-time projects and placement support.`}
          image={images.stats}
          crumbs={[{ label: "All Courses" }]}
        />
        <Courses />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
