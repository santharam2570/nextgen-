import type { Metadata } from "next";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import Inquiry from "@/components/Inquiry";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import Testimonials from "@/components/Testimonials";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Student Reviews & Testimonials",
  description:
    "Read student reviews and success stories of NextGen Innovation, Coimbatore & Trichy — SAP, Data Science, Software Testing, Digital Marketing, BIM and Interior Design graduates share their experience.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="Reviews"
          title="Hear it from our students"
          text="Real reviews from freshers, career switchers and working professionals who trained with NextGen Innovation — on Google and in their own words."
          image={images.cta}
          crumbs={[{ label: "Reviews" }]}
        />
        <GoogleReviews />
        <Testimonials />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
