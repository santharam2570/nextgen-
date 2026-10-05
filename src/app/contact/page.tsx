import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Inquiry from "@/components/Inquiry";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import { images, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | Course Enquiry & Free Counselling",
  description: `Contact ${site.name}, Coimbatore & Trichy. Call ${site.phone}, WhatsApp or visit our Coimbatore or Trichy branch for course details, fees, batch dates and a free demo class.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Talk to our course counsellors"
          text={`Call, WhatsApp, email or visit our Coimbatore or Trichy branch. Our team will help you with course details, fees, upcoming batches and a free demo class. ${site.hours}.`}
          image={images.inquiry}
          crumbs={[{ label: "Contact Us" }]}
        />
        <Inquiry />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
