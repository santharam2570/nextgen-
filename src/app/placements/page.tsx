import type { Metadata } from "next";
import Footer from "@/components/Footer";
import InfoGrid from "@/components/InfoGrid";
import Inquiry from "@/components/Inquiry";
import Navbar from "@/components/Navbar";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import SectionHeading from "@/components/ui/SectionHeading";
import { placementActivities } from "@/data/pages";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Placement Statistics & Placement Support",
  description:
    "NextGen Innovation placement statistics and support — students placed from fresher, non-IT, career-gap and less-than-60% backgrounds. Aptitude training, resume building, mock interviews and recruitment drives.",
  alternates: { canonical: "/placements" },
};

export default function PlacementsPage() {
  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="Placements"
          title="Students placed every month. Be the next!"
          text="Our dedicated placement cell works with leading companies to connect our students with job opportunities — through aptitude training, interview preparation, recruitment drives and referrals."
          image={images.stats}
          crumbs={[{ label: "Placements" }]}
        />
        <TrustedBy />
        <Stats />

        <section className="relative bg-gradient-to-b from-white via-brand-50/50 to-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Placement Activities"
              title={<>How we get you <span className="text-gradient">job-ready</span></>}
              text="Every student gets complete placement support — from aptitude training to the final interview."
            />
            <InfoGrid items={placementActivities} />
          </div>
        </section>

        <Testimonials />
        <Inquiry />
        <PageCTA
          title="Want an IT job? Be the next to get placed"
          text="Book a FREE counselling session to find the right course for your background."
        />
      </main>
      <Footer />
    </>
  );
}
