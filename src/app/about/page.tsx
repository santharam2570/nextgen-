import type { Metadata } from "next";
import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Inquiry from "@/components/Inquiry";
import Journey from "@/components/Journey";
import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import Stats from "@/components/Stats";
import TrustedBy from "@/components/TrustedBy";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us | Software Training Institute in Coimbatore & Trichy",
  description:
    "About NextGen Innovation — a software training institute in Coimbatore and Trichy offering classroom, online and corporate training in SAP, Data Science, Gen AI, Cloud, Testing, Digital Marketing and BIM with placement support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Learn from experts. Grow your career."
          text="NextGen Innovation is a software training institute with branches in Coimbatore and Trichy that aligns academic learning with real industry needs — helping freshers, non-IT graduates and working professionals build successful careers in IT, SAP and design."
          image={images.about1}
          crumbs={[{ label: "About Us" }]}
        />
        <TrustedBy />
        <About />
        <Features />
        <Stats />
        <Journey />
        <Mentors />
        <Gallery />
        <Inquiry />
        <PageCTA
          title="Want an IT job? Be the next to get placed"
          text="Book a FREE counselling session and demo class with our team today."
        />
      </main>
      <Footer />
    </>
  );
}
