import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses, gallery, images, site } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const domains = new Set(courses.map((c) => c.category)).size;

const blocks = [
  {
    title: "Placement Assistance",
    text: "Our dedicated placement cell works with hiring partners across IT, SAP, design and construction to connect students with job opportunities. Aptitude training, resume building, mock interviews and regular recruitment drives prepare you for every round.",
    stats: [
      { value: "5,000+", label: "Careers launched" },
      { value: "92%", label: "Placement rate" },
    ],
    image: gallery[4].src,
    alt: "Mock interview session for placement preparation",
    cta: { label: "View Placements", href: "/placements" },
  },
  {
    title: "Get Experienced Faculty Guidance",
    text: "Learn from certified trainers who bring real project experience into every class. They explain concepts the way they are used at work, review your projects and mentor you personally until you are job-ready.",
    stats: [
      { value: "8+", label: "Years of training" },
      { value: "4.9/5", label: "Google rating" },
      { value: "1:1", label: "Support program" },
    ],
    image: images.about1,
    alt: "Experienced trainer guiding students at NextGen Innovation",
    cta: { label: "Meet Our Mentors", href: "/about" },
  },
  {
    title: "Industry-Relevant Training",
    text: `At ${site.name}, every syllabus is aligned with current industry trends and the tools companies actually use. Hands-on labs and real-time projects ensure you gain the practical, in-demand skills needed to succeed in today's job market.`,
    stats: [
      { value: `${courses.length}+`, label: "Career programs offered" },
      { value: `${domains}`, label: "In-demand domains" },
    ],
    image: gallery[6].src,
    alt: "Hands-on coding and testing lab session",
    cta: { label: "Enquiry Now", href: "#contact" },
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="glow absolute left-0 top-1/3 -z-10 h-[500px] w-[500px] text-brand-100/60" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Why choose <span className="text-gradient">{site.name}</span></>}
        />
        <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-24">
          {blocks.map((b, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={b.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal direction={flip ? "left" : "right"} className={flip ? "lg:order-2" : ""}>
                  <h3 className="text-2xl font-bold sm:text-3xl">{b.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600 sm:text-lg">{b.text}</p>
                  <div className={`mt-6 grid gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-lg shadow-brand-900/5 ${b.stats.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                    {b.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <p className="font-display text-2xl font-extrabold text-brand-700 sm:text-3xl">{s.value}</p>
                        <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={b.cta.href}
                    className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:scale-105"
                  >
                    {b.cta.label} <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </Link>
                </Reveal>
                <Reveal direction={flip ? "right" : "left"} className={flip ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20">
                    <Image src={b.image} alt={b.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
