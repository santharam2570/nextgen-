import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Inquiry from "@/components/Inquiry";
import LinkCards from "@/components/LinkCards";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import { branches } from "@/data/branches";
import { locations } from "@/data/locations";
import { gallery } from "@/data/site";

export const metadata: Metadata = {
  title: "Training Locations in Coimbatore & Trichy | Classroom & Online Courses",
  description:
    "NextGen Innovation offers classroom training at our Coimbatore and Trichy branches for learners from Gandhipuram, Peelamedu, RS Puram, Saravanampatti, Cantonment, Thillai Nagar, Srirangam, K.K. Nagar and nearby areas — plus live online classes.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  const items = locations.map((l) => ({
    href: `/locations/${l.slug}`,
    title: `Software Training in ${l.name}`,
    text: l.audience,
    tag: branches.find((b) => b.slug === l.branch)?.city ?? "",
  }));

  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="Locations"
          title="Training near you in Coimbatore & Trichy"
          text="Our classroom training branches are in Coimbatore (Tech Park Road) and Trichy (Williams Road, Cantonment). Can't travel? Every course is also available live online."
          image={gallery[5].src}
          crumbs={[{ label: "Locations" }]}
        />
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <LinkCards items={items} cta="View courses" />
          </div>
        </section>
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
