import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import CourseEnquiry from "@/components/course/CourseEnquiry";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import Reveal from "@/components/ui/Reveal";
import { interviewQuestions } from "@/data/interview-questions";
import { courses } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.filter((c) => interviewQuestions[c.slug]).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: `${course.title} Interview Questions and Answers`,
    description: `Top ${course.title} interview questions and answers for freshers and experienced candidates, prepared by NextGen Innovation trainers in Coimbatore and Trichy.`,
    alternates: { canonical: `/interview-questions/${slug}` },
  };
}

export default async function InterviewQuestionsDetail({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  const qas = interviewQuestions[slug];
  if (!course || !qas) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qas.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ScrollExtras enquireHref="#enquire" />
      <Navbar ctaHref="#enquire" />
      <main>
        <PageHero
          eyebrow="Interview Questions"
          title={`${course.title} interview questions and answers`}
          text={`The most frequently asked ${course.title} interview questions, with simple answers to help you revise before your interview.`}
          image={course.image}
          crumbs={[{ label: "Interview Questions", href: "/interview-questions" }, { label: course.title }]}
          ctaHref="#enquire"
        />

        <section className="py-14 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_380px] lg:px-8">
            <div>
              <div className="space-y-3">
                {qas.map((x, i) => (
                  <Reveal key={x.q} delay={i * 0.04}>
                    <details open={i === 0} className="group rounded-2xl border border-brand-100 bg-white shadow-sm open:shadow-lg open:shadow-brand-900/5">
                      <summary className="flex cursor-pointer list-none items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 font-display font-bold text-brand-700 group-open:bg-brand-600 group-open:text-white">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-semibold text-slate-900">{x.q}</span>
                        <ChevronDown className="h-5 w-5 shrink-0 text-brand-600 transition group-open:rotate-180" />
                      </summary>
                      <p className="px-5 pb-5 leading-relaxed text-slate-600 sm:pl-[4.75rem]">{x.a}</p>
                    </details>
                  </Reveal>
                ))}
              </div>

              <Reveal className="mt-12 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 p-7 text-white shadow-xl shadow-brand-900/20">
                <h2 className="text-xl font-bold text-white">Want complete interview preparation?</h2>
                <p className="mt-2 text-brand-100">
                  Our {course.title} course includes real-time projects, mock interviews, resume building and placement support.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href={`/courses/${course.slug}`} className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:scale-105">
                    View course details <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={`/sample-resumes/${course.slug}`} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/20">
                    {course.title} sample resume
                  </Link>
                </div>
              </Reveal>
            </div>

            <aside id="enquire" className="scroll-mt-28 lg:sticky lg:top-28 lg:self-start">
              <CourseEnquiry course={course.title} />
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
