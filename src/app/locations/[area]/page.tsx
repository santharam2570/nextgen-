import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Inquiry from "@/components/Inquiry";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import Reveal from "@/components/ui/Reveal";
import { branchAddress, branches, mapDirectionsUrl } from "@/data/branches";
import { locations } from "@/data/locations";
import { gallery, site } from "@/data/site";

const branchFor = (slug: string) => branches.find((b) => b.slug === slug) ?? branches[0];

type Props = { params: Promise<{ area: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ area: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const loc = locations.find((l) => l.slug === area);
  if (!loc) return {};
  const branch = branchFor(loc.branch);
  return {
    title: `Software Training Institute in ${loc.name}, ${branch.city}`,
    description: `SAP, Data Science, Gen AI, Cloud, Full Stack, Software Testing, Digital Marketing and BIM training for learners in ${loc.name}, ${branch.city} — classroom at our ${branch.city} branch and live online, with placement support.`,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { area } = await params;
  const loc = locations.find((l) => l.slug === area);
  if (!loc) notFound();
  const branch = branchFor(loc.branch);

  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow={`${loc.name}, ${branch.city}`}
          title={`Software training institute in ${loc.name}`}
          text={loc.intro}
          image={gallery[5].src}
          crumbs={[{ label: "Locations", href: "/locations" }, { label: loc.name }]}
        />

        <section className="py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
            <Reveal className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold">Who is this for?</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{loc.audience}</p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 p-7 text-white shadow-xl shadow-brand-900/20">
              <MapPin className="h-8 w-8 text-brand-200" />
              <h2 className="mt-3 text-xl font-bold text-white">{branch.name}</h2>
              <p className="mt-2 text-brand-100">{branchAddress(branch)}</p>
              <p className="mt-1 text-sm text-brand-200">{branch.phones[0]} · {site.hours}</p>
              <a href={mapDirectionsUrl(branch.mapQuery)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:scale-105">
                Get directions
              </a>
            </Reveal>
          </div>
        </section>

        <Courses />
        <Features />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
