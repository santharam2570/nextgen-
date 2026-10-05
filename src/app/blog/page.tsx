import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Inquiry from "@/components/Inquiry";
import LinkCards from "@/components/LinkCards";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import { blogPosts } from "@/data/blog";
import { courses, images } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog | Career Guides, Tutorials & Training Tips",
  description:
    "Career guides, learning roadmaps and tutorials on SAP, Data Science, Generative AI, Software Testing, BIM and more from the trainers at NextGen Innovation, Coimbatore & Trichy.",
  alternates: { canonical: "/blog" },
};

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function BlogPage() {
  const items = blogPosts.map((p) => ({
    href: `/blog/${p.slug}`,
    title: p.title,
    text: p.excerpt,
    image: courses.find((c) => c.slug === p.courseSlug)?.image,
    tag: p.category,
    meta: `${formatDate(p.date)} · ${p.readTime}`,
  }));

  return (
    <>
      <ScrollExtras />
      <Navbar ctaHref="#contact" />
      <main>
        <PageHero
          eyebrow="Blog"
          title="Career guides & tutorials"
          text="Practical articles from our trainers — learning roadmaps, career guides and tips to help you choose the right course and get placed."
          image={images.about2}
          crumbs={[{ label: "Blog" }]}
        />
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <LinkCards items={items} />
          </div>
        </section>
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
