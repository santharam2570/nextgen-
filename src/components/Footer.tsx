import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { branchAddress, branches } from "@/data/branches";
import { courses, site } from "@/data/site";
import { AppStoreBadge, FacebookIcon, InstagramIcon, LinkedinIcon, PlayStoreBadge, YoutubeIcon } from "./ui/Brand";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "All Courses", href: "/courses" },
  { label: "Modes of Training", href: "/training-modes" },
  { label: "Placements", href: "/placements" },
  { label: "Corporate Training", href: "/corporate-training" },
  { label: "Hire From Us", href: "/hire-from-us" },
  { label: "Online Training", href: "/online-training" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Interview Questions", href: "/interview-questions" },
  { label: "Sample Resumes", href: "/sample-resumes" },
  { label: "Branches", href: "/branches" },
  { label: "Locations", href: "/locations" },
  { label: "Contact Us", href: "/contact" },
];

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
      <div className="glow absolute -top-40 left-1/2 h-80 w-[800px] -translate-x-1/2 text-brand-600/30" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-12 sm:gap-10 sm:py-14 lg:grid-cols-[1.3fr_1.7fr_0.9fr_1.3fr] lg:px-8">
        <div className="col-span-2 sm:col-span-1">
          <Link href="/#home" aria-label="NextGen Innovations" className="inline-block">
            <Logo className="h-16 w-auto sm:h-20" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{site.description}</p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-gradient-to-br hover:from-brand-500 hover:to-brand-800">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h4 className="font-display text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="transition hover:pl-1 hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h4 className="font-display text-lg font-semibold text-white">Courses</h4>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm sm:grid-cols-1">
            {Array.from(new Set(courses.map((c) => c.category))).map((cat) => (
              <li key={cat}><Link href="/courses" className="transition hover:pl-1 hover:text-white">{cat}</Link></li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h4 className="font-display text-lg font-semibold text-white">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {branches.map((b) => (
              <li key={b.slug}>
                <Link href="/branches" className="flex gap-3 hover:text-white">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-300" />
                  <span><span className="font-semibold text-white">{b.city}:</span> {branchAddress(b)}</span>
                </Link>
              </li>
            ))}
            <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex gap-3 hover:text-white"><Phone className="h-5 w-5 text-brand-300" />{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white"><Mail className="h-5 w-5 text-brand-300" />{site.email}</a></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <PlayStoreBadge href={site.playStoreUrl} dark={false} />
            <AppStoreBadge href={site.appStoreUrl} dark={false} />
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-sm sm:flex-row sm:text-left lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            <Link href="/refund-policy" className="hover:text-white">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
