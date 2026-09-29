import Link from "next/link";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { courses, navLinks, site } from "@/data/site";
import { AppStoreBadge, FacebookIcon, InstagramIcon, LinkedinIcon, PlayStoreBadge, YoutubeIcon } from "./ui/Brand";

const socials = [
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.socials.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: site.socials.youtube, Icon: YoutubeIcon },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden sm:mt-24 bg-brand-950 text-brand-100/80">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 sm:gap-12 sm:py-20 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr] lg:px-8">
        <div className="col-span-2 sm:col-span-1">
          <Link href="/#home" className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 text-white">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span className="font-display text-2xl font-bold text-white">
              {site.shortName}<span className="text-brand-300"> Innovation</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{site.description}</p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-gradient-to-br hover:from-brand-500 hover:to-brand-800">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}><a href={`/${l.href}`} className="transition hover:pl-1 hover:text-white">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-white">Courses</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {Array.from(new Set(courses.map((c) => c.category))).map((cat) => (
              <li key={cat}><Link href="/#courses" className="transition hover:pl-1 hover:text-white">{cat}</Link></li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h4 className="font-display text-lg font-semibold text-white">Get in Touch</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-brand-300" />{site.address}</li>
            <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex gap-3 hover:text-white"><Phone className="h-5 w-5 text-brand-300" />{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white"><Mail className="h-5 w-5 text-brand-300" />{site.email}</a></li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <PlayStoreBadge href={site.playStoreUrl} dark={false} />
            <AppStoreBadge href={site.appStoreUrl} dark={false} />
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-sm sm:flex-row sm:text-left lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
