import Image from "next/image";
import { mentors, site } from "@/data/site";
import { InstagramIcon, LinkedinIcon } from "./ui/Brand";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Mentors() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Meet Our Trainers"
          title={<>Learn from <span className="text-gradient">working industry experts</span></>}
          text="Our trainers are SAP consultants, data scientists, engineers, marketers and architects with years of real project experience — and they love to teach."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-7 lg:grid-cols-4">
          {mentors.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/20 to-transparent opacity-80 transition group-hover:opacity-100" />
                <span className="absolute right-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-brand-700 sm:right-4 sm:top-4 sm:px-3 sm:text-xs">
                  {m.exp}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-3 transition duration-500 group-hover:-translate-y-2 sm:p-5">
                  <h3 className="text-sm font-semibold leading-tight text-white sm:text-lg">{m.name}</h3>
                  <p className="mt-0.5 text-[11px] leading-snug text-brand-200 sm:text-sm">{m.role}</p>
                  <div className="mt-3 hidden gap-2 opacity-0 sm:flex transition duration-500 group-hover:opacity-100">
                    <a href={site.socials.linkedin} aria-label="LinkedIn" className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white hover:bg-white hover:text-brand-700">
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                    <a href={site.socials.instagram} aria-label="Instagram" className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white hover:bg-white hover:text-brand-700">
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
