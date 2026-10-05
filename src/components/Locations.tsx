import Link from "next/link";
import { Globe, MapPin } from "lucide-react";
import { branches } from "@/data/branches";
import { locations } from "@/data/locations";
import { onlineRegions } from "@/data/pages";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const chip =
  "rounded-full border border-brand-100 border-b-[3px] border-b-brand-700 bg-white px-4 py-2 text-center text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-600 hover:bg-brand-600 hover:text-white";

export default function Locations() {
  return (
    <section id="locations" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Locations"
          title={<>Classroom in Coimbatore & Trichy, <span className="text-gradient">online everywhere</span></>}
          text="Attend classes at our Coimbatore or Trichy branch, or join live online from anywhere in India and abroad."
        />
        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="right" className="space-y-8">
            {branches.map((b) => (
              <div key={b.slug}>
                <h3 className="flex items-center justify-center gap-2 text-lg font-semibold">
                  <MapPin className="h-5 w-5 text-brand-600" /> {b.city} — Classroom Training
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {locations.filter((l) => l.branch === b.slug).map((l) => (
                    <Link key={l.slug} href={`/locations/${l.slug}`} className={chip}>{l.name}</Link>
                  ))}
                  <Link href="/branches" className={chip}>Branch details</Link>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal direction="left">
            <h3 className="flex items-center justify-center gap-2 text-lg font-semibold">
              <Globe className="h-5 w-5 text-brand-600" /> Online — India & Abroad
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {onlineRegions.slice(0, 8).map((r) => (
                <Link key={r} href="/online-training" className={chip}>{r}</Link>
              ))}
              <Link href="/online-training" className={chip}>More…</Link>
            </div>
            <p className="mt-5 text-center text-sm text-slate-500">Live instructor-led classes with recordings on the NextGen app</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
