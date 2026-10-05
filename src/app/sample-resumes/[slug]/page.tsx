import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import CourseEnquiry from "@/components/course/CourseEnquiry";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollExtras from "@/components/ScrollExtras";
import Reveal from "@/components/ui/Reveal";
import { courseDetails } from "@/data/course-details";
import { courses } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.filter((c) => courseDetails[c.slug]).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: `${course.title} Sample Resume for Freshers & Experienced`,
    description: `${course.title} sample resume with professional summary, key skills, tools, projects and certifications — plus resume tips from NextGen Innovation trainers.`,
    alternates: { canonical: `/sample-resumes/${slug}` },
  };
}

const tips = [
  "Keep your resume to one or two pages with a clean, ATS-friendly layout.",
  "Write a short professional summary tailored to the role you are applying for.",
  "List tools and skills that match the job description.",
  "Describe projects with your role, the tools used and the outcome.",
  "Add certifications and training with the institute name and year.",
  "Proofread carefully — spelling mistakes create a poor first impression.",
];

const block = "rounded-3xl border border-brand-100 bg-white p-7 shadow-sm";
const label = "font-display text-sm font-bold uppercase tracking-widest text-brand-700";

export default async function SampleResumeDetail({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  const detail = courseDetails[slug];
  if (!course || !detail) notFound();
  const role = detail.roles[0];

  return (
    <>
      <ScrollExtras enquireHref="#enquire" />
      <Navbar ctaHref="#enquire" />
      <main>
        <PageHero
          eyebrow="Sample Resume"
          title={`${course.title} sample resume`}
          text={`A sample resume format for ${role} roles. Replace the details with your own education, skills and projects.`}
          image={course.image}
          crumbs={[{ label: "Sample Resumes", href: "/sample-resumes" }, { label: course.title }]}
          ctaHref="#enquire"
        />

        <section className="py-14 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_380px] lg:px-8">
            <div className="space-y-6">
              <Reveal className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 p-7 text-white shadow-xl shadow-brand-900/20">
                <p className="font-display text-3xl font-extrabold text-white">Your Name</p>
                <p className="mt-1 text-lg font-semibold text-brand-200">{role}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-100">
                  <span className="flex items-center gap-1.5"><Phone className="h-4 w-4" /> +91 XXXXX XXXXX</span>
                  <span className="flex items-center gap-1.5"><Mail className="h-4 w-4" /> yourname@email.com</span>
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Coimbatore, Tamil Nadu</span>
                </div>
              </Reveal>

              <Reveal className={block}>
                <h2 className={label}>Professional Summary</h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {role} with hands-on training in {course.title}, including {detail.modules.slice(0, 3).map((m) => m.title).join(", ")}. Experienced in working with {detail.tools.slice(0, 3).join(", ")} through real-time projects. Looking for an opportunity to contribute to a growing organisation and build a long-term career as a {role}.
                </p>
              </Reveal>

              <Reveal className={block}>
                <h2 className={label}>Key Skills</h2>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {[...detail.tools, ...detail.modules.map((m) => m.title)].slice(0, 14).map((s) => (
                    <span key={s} className="rounded-xl border border-brand-100 bg-brand-50/50 px-3.5 py-2 text-sm font-medium text-slate-700">{s}</span>
                  ))}
                </div>
              </Reveal>

              <Reveal className={block}>
                <h2 className={label}>Projects</h2>
                <ul className="mt-4 space-y-4">
                  {detail.projects.map((p) => (
                    <li key={p}>
                      <p className="font-semibold text-slate-900">{p}</p>
                      <p className="mt-1 text-sm text-slate-600">Tools: {detail.tools.slice(0, 4).join(", ")} · Role: worked on requirement analysis, implementation and testing.</p>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-2">
                <Reveal className={block}>
                  <h2 className={label}>Education</h2>
                  <p className="mt-3 font-semibold text-slate-900">Your Degree — Specialisation</p>
                  <p className="text-sm text-slate-600">College Name, University · Year</p>
                </Reveal>
                <Reveal delay={0.1} className={block}>
                  <h2 className={label}>Certification & Training</h2>
                  <p className="mt-3 font-semibold text-slate-900">{course.title} — NextGen Innovation, Coimbatore & Trichy</p>
                  <p className="text-sm text-slate-600">{course.duration} · Classroom / Online</p>
                </Reveal>
              </div>

              <Reveal className={block}>
                <h2 className="text-2xl font-bold">Resume tips for {role} roles</h2>
                <ul className="mt-5 space-y-3">
                  {tips.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-slate-600">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/interview-questions/${course.slug}`} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white">
                    {course.title} interview questions <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={`/courses/${course.slug}`} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white">
                    View course details <ArrowRight className="h-4 w-4" />
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
