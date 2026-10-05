import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Check, Clock } from "lucide-react";
import CourseEnquiry from "@/components/course/CourseEnquiry";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import Reveal from "@/components/ui/Reveal";
import { blogPosts } from "@/data/blog";
import { courses, site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const image = courses.find((c) => c.slug === post.courseSlug)?.image;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      images: image ? [image] : undefined,
    },
  };
}

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const course = courses.find((c) => c.slug === post.courseSlug);
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: course?.image,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ScrollExtras enquireHref="#enquire" />
      <Navbar ctaHref="#enquire" />
      <main>
        <PageHero
          eyebrow={post.category}
          title={post.title}
          text={post.excerpt}
          image={course?.image ?? ""}
          crumbs={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
          ctaHref="#enquire"
        />

        <section className="py-14 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_380px] lg:px-8">
            <article>
              <p className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-brand-500" />{formatDate(post.date)}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand-500" />{post.readTime}</span>
                <span>By {site.name} Trainers</span>
              </p>
              <div className="mt-8 space-y-10 sm:space-y-12">
                {post.sections.map((s) => (
                  <Reveal key={s.heading}>
                    <h2 className="text-2xl font-bold sm:text-3xl">{s.heading}</h2>
                    {s.paragraphs.map((p) => (
                      <p key={p} className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{p}</p>
                    ))}
                    {s.bullets && (
                      <ul className="mt-5 space-y-3">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-slate-700">
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Reveal>
                ))}
              </div>

              {course && (
                <Reveal className="mt-12 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 p-7 text-white shadow-xl shadow-brand-900/20">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-200">Recommended course</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{course.title} Training in Coimbatore & Trichy</h3>
                  <p className="mt-2 text-brand-100">{course.duration} · {course.price} · Classroom & Online</p>
                  <Link href={`/courses/${course.slug}`} className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:scale-105">
                    View course details <ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              )}
            </article>

            <aside id="enquire" className="scroll-mt-28 lg:sticky lg:top-28 lg:self-start">
              <CourseEnquiry course={course?.title ?? "Not sure — need guidance"} />
            </aside>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-brand-50/60 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-bold sm:text-4xl">More from our blog</h2>
              <Link href="/blog" className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-900">
                View all articles <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-3">
              {more.map((p) => {
                const img = courses.find((c) => c.slug === p.courseSlug)?.image;
                return (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10">
                    {img && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image src={img} alt={p.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">{p.category}</span>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                        Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
