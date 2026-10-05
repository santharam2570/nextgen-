import About from "@/components/About";
import AppShowcase from "@/components/AppShowcase";
import Courses from "@/components/Courses";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import GoogleReviews from "@/components/GoogleReviews";
import Hero from "@/components/Hero";
import Inquiry from "@/components/Inquiry";
import Journey from "@/components/Journey";
import Locations from "@/components/Locations";
import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";
import ScrollExtras from "@/components/ScrollExtras";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import TrainingModes from "@/components/TrainingModes";
import TrustedBy from "@/components/TrustedBy";
import WhyChoose from "@/components/WhyChoose";
import { branchAddress, branches } from "@/data/branches";
import { courses, faqs, site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
      image: `${site.url}/logo.png`,
      description: site.description,
      telephone: site.phone,
      email: site.email,
      location: branches.map((b) => ({
        "@type": "Place",
        name: b.name,
        telephone: b.phones[0],
        address: {
          "@type": "PostalAddress",
          streetAddress: branchAddress(b),
          addressLocality: b.city,
          addressRegion: "Tamil Nadu",
          ...(b.postalCode && { postalCode: b.postalCode }),
          addressCountry: "IN",
        },
      })),
      openingHours: "Mo-Sa 09:00-20:00",
      priceRange: "₹₹",
      areaServed: ["Coimbatore", "Trichy", "Tamil Nadu", "India"],
      sameAs: [site.socials.instagram, site.socials.facebook, site.socials.youtube],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Career Training Programs",
        itemListElement: courses.map((c) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Course", name: c.title, url: `${site.url}/courses/${c.slug}` },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ScrollExtras />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Features />
        <Courses />
        <Locations />
        <TrainingModes />
        <WhyChoose />
        <AppShowcase />
        <Journey />
        <Stats />
        <Mentors />
        <Testimonials />
        <GoogleReviews />
        <Gallery />
        <FAQ />
        <Inquiry />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
