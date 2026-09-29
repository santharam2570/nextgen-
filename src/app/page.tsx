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
import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";
import ScrollExtras from "@/components/ScrollExtras";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <>
      <ScrollExtras />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Features />
        <Courses />
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
