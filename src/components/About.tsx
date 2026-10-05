import Image from "next/image";
import { ArrowRight, CheckCircle2, Lightbulb, Heart, Target } from "lucide-react";
import { images, site } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const values = [
  { icon: Target, title: "Placement Assistance", text: "A dedicated placement cell, recruitment drives and referrals to connect you with leading companies." },
  { icon: Lightbulb, title: "Experienced Faculty", text: "Certified trainers who bring real-world project knowledge and personal mentorship to every class." },
  { icon: Heart, title: "Industry-Relevant Training", text: "Courses aligned with current IT trends, so you gain the practical skills employers demand." },
];

const highlights = [
  "Classroom Training — face-to-face, hands-on",
  "Online Training — live classes from anywhere",
  "Corporate Training — upskill your teams",
  "1:1 Support Program for every student",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="glow absolute right-0 top-0 -z-10 h-[500px] w-[500px] text-brand-100/60" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal direction="right" className="relative">
          <div className="relative aspect-[4/5] w-[80%] overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20">
            <Image src={images.about1} alt="Live mentor-led training session at NextGen Innovation" fill sizes="(min-width:1024px) 40vw, 80vw" className="object-cover transition duration-700 hover:scale-105" />
          </div>
          <div className="absolute -bottom-10 right-0 aspect-square w-[50%] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl">
            <Image src={images.inquiry} alt="Learner practising hands-on" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="absolute left-[60%] top-10 animate-float rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-5 text-white shadow-2xl shadow-brand-600/40">
            <p className="font-display text-4xl font-extrabold">8+</p>
            <p className="text-sm text-brand-100">Years shaping careers</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About NextGen Innovation"
            title={<>Learn from experts, <span className="text-gradient">grow your career</span></>}
            text={`${site.name} is a software training institute with branches in Coimbatore and Trichy that aligns academic learning with real industry needs. We train freshers, job seekers, non-IT graduates and working professionals in SAP, Data Science, Generative AI, Cloud, Software Testing, Digital Marketing, BIM and Design — through classroom, online and corporate training — and support every student until they are placed.`}
          />

          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.2 + i * 0.1} className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10">
                <v.icon className="h-7 w-7 text-brand-600" />
                <h3 className="mt-3 font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <a href="#journey" className="group mt-10 inline-flex items-center gap-2 font-semibold text-brand-700">
              Explore the {site.shortName} learning journey
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
