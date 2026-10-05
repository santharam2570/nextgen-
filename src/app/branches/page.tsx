import type { Metadata } from "next";
import BranchTabs from "@/components/BranchTabs";
import Footer from "@/components/Footer";
import Inquiry from "@/components/Inquiry";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Branches | Coimbatore & Trichy Training Centres",
  description: `Visit ${site.name} branches in Coimbatore (Tech Park Road) and Trichy (Williams Road, Cantonment) for classroom SAP, AI, Cloud, IT and BIM training with placement support.`,
  alternates: { canonical: "/branches" },
};

export default function BranchesPage() {
  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="Branches"
          title="NextGen Innovations Branches"
          text="Classroom training centres in Coimbatore and Trichy — walk in for a free demo class, career counselling and course details, or join the same batches live online."
          image={gallery[5].src}
          crumbs={[{ label: "Branches" }]}
        />
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Visit Us"
              title={<>Find a branch <span className="text-gradient">near you</span></>}
              text="Choose your city to see the branch address, contact numbers and directions."
            />
            <div className="mt-10 sm:mt-14">
              <BranchTabs />
            </div>
          </div>
        </section>
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
