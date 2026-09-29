import Image from "next/image";
import { ArrowRight, CheckCircle2, Lightbulb, Heart, Target } from "lucide-react";
import { images, site } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const values = [
  { icon: Target, title: "Our Mission", text: "Make world-class career training affordable and accessible to every learner." },
  { icon: Lightbulb, title: "Our Vision", text: "Build a generation of job-ready professionals trusted by top companies." },
  { icon: Heart, title: "Our Promise", text: "Personal attention for every learner — you are never just a number with us." },
];

const highlights = [
  "20+ courses in SAP, AI, Cloud, IT & Design",
  "Trainers are working industry experts",
  "Hands-on projects on real industry tools",
  "Certification prep & placement support",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-100/60 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal direction="right" className="relative">
          <div className="relative aspect-[4/5] w-[80%] overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20">
            <Image src={images.about1} alt="Live training session" fill sizes="(min-width:1024px) 40vw, 80vw" className="object-cover transition duration-700 hover:scale-105" />
          </div>
          <div className="absolute -bottom-10 right-0 aspect-square w-[50%] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl">
            <Image src={images.inquiry} alt="Learner practising hands-on" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="absolute left-[60%] top-10 animate-float rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-5 text-white shadow-2xl shadow-brand-600/40">
            <p className="font-display text-4xl font-extrabold">8+</p>
            <p className="text-sm text-brand-100">Years of excellence</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title={<>Where learners <span className="text-gradient">become job-ready professionals</span></>}
            text={`${site.name} is a career training institute built on one simple belief — skills are best learned by doing, from people who do it every day. From SAP and Data Science to Software Testing, Digital Marketing, BIM and Design, our app connects learners with industry experts, real tools and live projects, so you are job-ready from day one.`}
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
              See how learning works at {site.shortName}
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
