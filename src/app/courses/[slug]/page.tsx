import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  GraduationCap,
  IndianRupee,
  Mail,
  MonitorPlay,
  Phone,
  Star,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import CourseEnquiry from "@/components/course/CourseEnquiry";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollExtras from "@/components/ScrollExtras";
import { WhatsappIcon } from "@/components/ui/Brand";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { branchAddress, branches } from "@/data/branches";
import { courseDetails } from "@/data/course-details";
import { courses, site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  const detail = courseDetails[slug];
  if (!course || !detail) return {};
  return {
    title: detail.seoTitle,
    description: detail.metaDescription,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${detail.seoTitle} | ${site.name}`,
      description: detail.metaDescription,
      url: `/courses/${course.slug}`,
      images: [course.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${detail.seoTitle} | ${site.name}`,
      description: detail.metaDescription,
      images: [course.image],
    },
  };
}

const batches = [
  { name: "Weekday Batch", time: "Mon – Fri · 1.5 hrs/day", note: "Best for freshers & final-year students" },
  { name: "Weekend Batch", time: "Sat & Sun · 3 hrs/day", note: "Built for working professionals" },
  { name: "Fast-track Batch", time: "Mon – Fri · 3 hrs/day", note: "Job-ready in half the time" },
];

const included = [
  "Free aptitude & technical skills training",
  "Hands-on real-time projects",
  "Interview preparation for freshers",
  "Learning app with HD class recordings",
  "Resume building & mock interviews",
  "Placement assistance in top MNC companies",
];

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  const detail = courseDetails[slug];
  if (!course || !detail) notFound();

  const tel = `tel:${site.phone.replace(/\s/g, "")}`;
  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hi ${site.name}, I'm interested in the ${course.title} course. Please share the details.`
  )}`;
  const mail = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${course.title} course`)}`;

  const sameCategory = courses.filter((c) => c.category === course.category && c.slug !== course.slug);
  const related = [...sameCategory, ...courses.filter((c) => c.featured && c.category !== course.category)].slice(0, 3);

  const facts = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: BookOpen, label: "Lessons", value: `${course.lessons}+ sessions` },
    { icon: GraduationCap, label: "Level", value: detail.level },
    { icon: Users, label: "Learners", value: course.students },
  ];

  const faqs = [
    { q: `What are the requirements to become a ${course.title} professional?`, a: `No prior experience is required. A basic understanding of computers and a willingness to learn are enough — the course starts from the fundamentals and builds up to real-time projects using ${detail.tools.slice(0, 4).join(", ")}.` },
    { q: `Who can join ${course.title} training?`, a: `Fresh graduates, non-IT career switchers, candidates with a career gap, graduates with less than 60%, diploma holders and working professionals can join. It is especially suited for: ${detail.eligibility.join("; ")}.` },
    { q: `What is the ${course.title} course fee and duration?`, a: `The course runs for ${course.duration} with ${course.lessons}+ sessions. The fee is ${course.price}, with no-cost EMI and early registration offers available.` },
    { q: `What kind of placement support is provided after ${course.title} training?`, a: `Our placement cell provides free aptitude training, resume building, interview preparation, mock interviews and recruitment drives for roles like ${detail.roles.slice(0, 3).join(", ")}. The typical salary range is ${detail.salary}.` },
    { q: `Will I receive a certificate after completing the ${course.title} course?`, a: detail.certification },
    { q: "Are classroom and online batches available?", a: `Yes. ${course.title} training is available as classroom training at our Coimbatore and Trichy branches and as live online training, with weekday, weekend and fast-track batches.` },
    { q: "Can I attend a free demo class?", a: "Yes. Fill in the enquiry form, call or WhatsApp us, and we will schedule a free demo class and 1:1 counselling session for you." },
  ];

  const courseUrl = `${site.url}/courses/${course.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${courseUrl}#course`,
        name: `${course.title} Training`,
        description: detail.overview,
        url: courseUrl,
        image: course.image,
        educationalLevel: detail.level,
        teaches: detail.modules.map((m) => m.title),
        provider: { "@type": "EducationalOrganization", name: site.name, url: site.url },
        offers: {
          "@type": "Offer",
          category: "Paid",
          price: Number(course.price.replace(/[^\d]/g, "")),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: courseUrl,
        },
        hasCourseInstance: [
          ...branches.map((b) => ({
            "@type": "CourseInstance",
            courseMode: "Onsite",
            location: { "@type": "Place", name: b.name, address: branchAddress(b) },
          })),
          { "@type": "CourseInstance", courseMode: "Online" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Courses", item: `${site.url}/courses` },
          { "@type": "ListItem", position: 3, name: course.title, item: courseUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ScrollExtras
        enquireHref="#enquire"
        whatsappText={`Hi ${site.name}, I'm interested in the ${course.title} course. Please share the details.`}
      />
      <Navbar ctaHref="#enquire" />
      <main>
        <section className="relative isolate overflow-hidden bg-brand-950 pb-14 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
          <Image src={course.image} alt="" fill preload sizes="100vw" className="-z-20 object-cover opacity-25" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(10,26,63,0.98)_0%,rgba(19,42,99,0.92)_55%,rgba(29,78,216,0.6)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-grid opacity-20" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.25fr_1fr] lg:px-8">
            <div>
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-brand-200/80">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/courses" className="hover:text-white">Courses</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">{course.title}</span>
              </nav>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-100 ring-1 ring-white/20">
                  {course.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-brand-100">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <b className="text-white">{course.rating}</b> rating · {course.students} learners
                </span>
              </div>

              <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                {course.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100/85 sm:mt-6 sm:text-lg">{detail.overview}</p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center">
                <a
                  href="#enquire"
                  className="group inline-flex items-center gap-2 col-span-2 justify-center rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-4 font-semibold text-white shadow-2xl shadow-brand-900/40 transition hover:scale-105 sm:col-span-1"
                >
                  Enroll Now <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a href={tel} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-4 font-semibold text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/20">
                  <Phone className="h-5 w-5" /> Call Now
                </a>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
                  <WhatsappIcon className="h-5 w-5" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/20">
                <Image src={course.image} alt={course.title} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-200">Course fee</p>
                    <p className="font-display text-3xl font-extrabold text-white">{course.price}</p>
                    <p className="text-xs text-brand-100">No-cost EMI · No hidden charges</p>
                  </div>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-xl">
                    <Icon name={course.icon} className="h-7 w-7" />
                  </span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3.5 ring-1 ring-white/15 backdrop-blur">
                    <f.icon className="h-5 w-5 shrink-0 text-brand-300" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-brand-200/80">{f.label}</p>
                      <p className="text-sm font-semibold text-white">{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_380px] lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              <Reveal>
                <h2 className="text-2xl font-bold sm:text-3xl">What you&apos;ll learn from {course.title} training</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[...course.points, ...detail.modules.slice(0, 3).map((m) => m.title)].map((p) => (
                    <div key={p} className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50/50 p-4">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-medium text-slate-700">{p}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <h2 className="text-2xl font-bold sm:text-3xl">{course.title} course syllabus</h2>
                  <p className="text-sm text-slate-500">
                    {detail.modules.length} modules · {course.lessons}+ sessions · {course.duration}
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  {detail.modules.map((m, i) => (
                    <details key={m.title} open={i === 0} className="group rounded-2xl border border-brand-100 bg-white shadow-sm open:shadow-lg open:shadow-brand-900/5">
                      <summary className="flex cursor-pointer list-none items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 font-display font-bold text-brand-700 group-open:bg-brand-600 group-open:text-white">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1">
                          <span className="block font-semibold text-slate-900">{m.title}</span>
                          <span className="text-xs text-slate-500">{m.topics.length} topics</span>
                        </span>
                        <ChevronDown className="h-5 w-5 text-brand-600 transition group-open:rotate-180" />
                      </summary>
                      <ul className="space-y-2.5 px-5 pb-5 pl-[4.75rem]">
                        {m.topics.map((t) => (
                          <li key={t} className="flex items-start gap-2.5 text-slate-600">
                            <MonitorPlay className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> {t}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
                  <Wrench className="h-7 w-7 text-brand-600" /> Tools covered
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {detail.tools.map((t) => (
                    <span key={t} className="rounded-xl border border-brand-100 bg-white px-4 py-2.5 font-semibold text-slate-700 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <h2 className="text-2xl font-bold sm:text-3xl">Gain hands-on experience with real-time projects</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {detail.projects.map((p, i) => (
                    <div key={p} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-950 p-6 text-white shadow-lg">
                      <span className="absolute -right-2 -top-4 font-display text-7xl font-extrabold text-white/10">0{i + 1}</span>
                      <BriefcaseBusiness className="h-7 w-7 text-brand-300" />
                      <p className="relative mt-4 font-semibold leading-snug">{p}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
                  <TrendingUp className="h-7 w-7 text-brand-600" /> Job roles for {course.title}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto]">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {detail.roles.map((r) => (
                      <div key={r} className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4 shadow-sm">
                        <BriefcaseBusiness className="h-5 w-5 shrink-0 text-brand-600" />
                        <span className="font-medium text-slate-800">{r}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col justify-center rounded-2xl bg-brand-950 p-6 text-white sm:w-56">
                    <IndianRupee className="h-7 w-7 text-brand-300" />
                    <p className="mt-3 text-xs uppercase tracking-wider text-brand-200">Typical salary range</p>
                    <p className="mt-1 font-display text-2xl font-bold">{detail.salary}</p>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-2">
                <Reveal className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold">Who should take this course?</h3>
                  <ul className="mt-4 space-y-3">
                    {detail.eligibility.map((e) => (
                      <li key={e} className="flex items-start gap-2.5 text-slate-600">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> {e}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.1} className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 p-7 text-white shadow-xl shadow-brand-900/20">
                  <Award className="h-9 w-9 text-brand-200" />
                  <h3 className="mt-4 text-xl font-bold text-white">Industry-recognised certification</h3>
                  <p className="mt-3 leading-relaxed text-brand-100">{detail.certification}</p>
                </Reveal>
              </div>

              <Reveal>
                <h2 className="text-2xl font-bold sm:text-3xl">What&apos;s included?</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {included.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-slate-700">
                      <Check className="h-5 w-5 shrink-0 text-brand-600" /> {f}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <aside id="enquire" className="scroll-mt-28 lg:sticky lg:top-28 lg:self-start">
              <CourseEnquiry course={course.title} />
              <div className="mt-5 rounded-3xl border border-brand-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Prefer to talk? Reach us directly</p>
                <div className="mt-4 grid gap-2.5">
                  <a href={tel} className="flex items-center gap-3 rounded-xl bg-brand-50 px-4 py-3 font-semibold text-brand-800 transition hover:bg-brand-100">
                    <Phone className="h-5 w-5" /> {site.phone}
                  </a>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-[#25D366]/10 px-4 py-3 font-semibold text-[#128C7E] transition hover:bg-[#25D366]/20">
                    <WhatsappIcon className="h-5 w-5" /> Chat on WhatsApp
                  </a>
                  <a href={mail} className="flex items-center gap-3 rounded-xl bg-brand-50 px-4 py-3 font-semibold text-brand-800 transition hover:bg-brand-100">
                    <Mail className="h-5 w-5" /> {site.email}
                  </a>
                </div>
                <p className="mt-4 text-xs text-slate-500">{site.hours}</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-gradient-to-b from-brand-50/70 to-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="text-center">
              <h2 className="text-2xl font-bold sm:text-4xl">Upcoming batches for classroom and online</h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">New batches start every month. Choose the timing that suits you — every batch includes class recordings, trainer support and placement assistance.</p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
              {batches.map((b, i) => (
                <Reveal key={b.name} delay={i * 0.1} className="rounded-3xl border border-brand-100 bg-white p-5 text-center shadow-sm sm:p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white">
                    <CalendarDays className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{b.name}</h3>
                  <p className="mt-2 font-semibold text-brand-700">{b.time}</p>
                  <p className="mt-1 text-sm text-slate-500">{b.note}</p>
                  <a href="#enquire" className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white">
                    Reserve a seat <ArrowRight className="h-4 w-4" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <Reveal className="text-center">
              <h2 className="text-2xl font-bold sm:text-4xl">{course.title} course FAQs</h2>
            </Reveal>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-brand-100 bg-white shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-brand-600 transition group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-gradient-to-b from-white to-brand-50/60 py-14 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <Reveal className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="text-2xl font-bold sm:text-4xl">Related category courses</h2>
                <Link href="/courses" className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-900">
                  View all courses <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
              <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.slug} href={`/courses/${r.slug}`} className="group overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={r.image} alt={r.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">{r.category}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold leading-snug">{r.title}</h3>
                      <p className="mt-2 flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand-500" />{r.duration}</span>
                        <span className="font-semibold text-brand-700">{r.price}</span>
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                        View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-5 pb-4 lg:px-8">
          <Reveal scale className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-6 py-16 text-center shadow-2xl shadow-brand-900/30 sm:px-16">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                Getting started with {course.title} training in Coimbatore & Trichy
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-brand-100">
                Book a FREE counselling session and demo class today. Limited seats in every batch.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="#enquire" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-brand-800 shadow-xl transition hover:scale-105">
                  Enroll Now <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a href={tel} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-4 font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/20">
                  <Phone className="h-5 w-5" /> {site.phone}
                </a>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white transition hover:scale-105">
                  <WhatsappIcon className="h-5 w-5" /> WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
