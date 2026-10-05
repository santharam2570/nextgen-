"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, ChevronRight, Menu, Phone, X } from "lucide-react";
import { courses, navLinks, site } from "@/data/site";
import Logo from "./Logo";
import { WhatsappIcon } from "./ui/Brand";

const courseGroups = Array.from(
  courses.reduce((map, course) => {
    const list = map.get(course.category) ?? [];
    list.push(course);
    map.set(course.category, list);
    return map;
  }, new Map<string, (typeof courses)[number][]>())
);

const linkHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);

function AllCoursesDropdown({ solid, active }: { solid: boolean; active: boolean }) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<string | null>(null);
  const rootRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const group = courseGroups.find(([name]) => name === category);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const hide = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setCategory(null);
    }, 140);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setCategory(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <li
      ref={rootRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) hide();
      }}
    >
      <a
        href="/#courses"
        aria-haspopup="true"
        aria-expanded={open}
        className={`relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm 2xl:px-3.5 ${
          solid
            ? active || open
              ? "text-brand-700"
              : "text-slate-600 hover:text-brand-700"
            : active || open
              ? "text-white"
              : "text-white/75 hover:text-white"
        }`}
      >
        {active && (
          <motion.span
            layoutId="nav-pill"
            className={`absolute inset-0 -z-10 rounded-full ${solid ? "bg-brand-100" : "bg-white/15"}`}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        {open && !active && (
          <span className={`absolute inset-0 -z-10 rounded-full ${solid ? "bg-brand-100" : "bg-white/15"}`} />
        )}
        All Courses
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.16 }}
            className="absolute left-0 top-full z-50 pt-3"
          >
            <div className="flex overflow-hidden rounded-2xl bg-white shadow-2xl shadow-brand-950/20 ring-1 ring-slate-200">
              <ul className="w-56 py-2" role="menu" aria-label="Course categories">
                {courseGroups.map(([name]) => {
                  const selected = name === category;
                  return (
                    <li key={name} role="none">
                      <button
                        type="button"
                        role="menuitem"
                        aria-expanded={selected}
                        onMouseEnter={() => setCategory(name)}
                        onFocus={() => {
                          show();
                          setCategory(name);
                        }}
                        className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm font-medium transition ${
                          selected
                            ? "bg-brand-50 text-brand-800"
                            : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                        }`}
                      >
                        <span className="whitespace-nowrap">{name}</span>
                        <ChevronRight className={`h-4 w-4 shrink-0 ${selected ? "text-brand-600" : "text-slate-400"}`} />
                      </button>
                    </li>
                  );
                })}
                <li className="mt-1 border-t border-slate-100 px-2 pt-2" role="none">
                  <Link
                    href="/courses"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                  >
                    View all courses
                  </Link>
                </li>
              </ul>

              {group && (
                <ul className="w-80 border-l border-slate-100 bg-slate-50 py-2" role="menu" aria-label={group[0]}>
                  <li className="px-4 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {group[0]}
                  </li>
                  {group[1].map((course) => (
                    <li key={course.slug} role="none">
                      <Link
                        href={`/courses/${course.slug}`}
                        role="menuitem"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 text-sm font-medium leading-snug text-slate-700 transition hover:bg-white hover:text-brand-700"
                      >
                        {course.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Navbar({ ctaHref = "/#contact" }: { ctaHref?: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileCourses, setMobileCourses] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);
  const [sectionActive, setActive] = useState("#home");
  const active = pathname === "/" ? sectionActive : pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hrefs = new Set(navLinks.filter((l) => l.href.startsWith("#")).map((l) => l.href));
    hrefs.add("#courses");
    const sections = [...hrefs]
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding,background-color,box-shadow] duration-300 ${
        solid ? "bg-white/95 py-3 shadow-lg shadow-brand-900/5" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 lg:px-6 xl:px-8">
        <Link href="/#home" aria-label="NextGen Innovations" className="shrink-0">
          <span className="grid">
            <Logo
              priority
              className={`col-start-1 row-start-1 h-10 w-auto sm:h-11 lg:h-12 xl:h-14 ${solid ? "invisible" : ""}`}
            />
            <Logo
              variant="light"
              priority
              className={`col-start-1 row-start-1 h-10 w-auto sm:h-11 lg:h-12 xl:h-14 ${solid ? "" : "invisible"}`}
            />
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex 2xl:gap-1">
          {navLinks.map((l) => {
            const isCourses = l.href === "#courses";
            const isActive = isCourses
              ? pathname.startsWith("/courses") || active === "#courses"
              : active === l.href;
            if (isCourses) {
              return <AllCoursesDropdown key={l.href} solid={solid} active={isActive} />;
            }
            return (
              <li key={l.href}>
                <a
                  href={linkHref(l.href)}
                  className={`relative whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm 2xl:px-3.5 ${
                    solid
                      ? isActive ? "text-brand-700" : "text-slate-600 hover:text-brand-700"
                      : isActive ? "text-white" : "text-white/75 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 -z-10 rounded-full ${solid ? "bg-brand-100" : "bg-white/15"}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2 xl:gap-3">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            aria-label={`Call ${site.phone}`}
            title={site.phone}
            className={`hidden h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold ring-2 transition hover:scale-105 lg:flex lg:w-10 2xl:w-auto 2xl:px-4 ${
              solid ? "bg-brand-50 text-brand-800 ring-brand-200 hover:bg-brand-100" : "bg-white/10 text-white ring-white/40 hover:bg-white/20"
            }`}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden 2xl:inline">{site.phone}</span>
          </a>
          <a
            href={ctaHref}
            className="relative hidden whitespace-nowrap rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2.5 text-sm font-bold text-white shadow-[0_0_24px_-4px_rgba(59,130,246,0.8)] ring-2 ring-white/30 transition hover:scale-105 sm:inline-block xl:px-5"
          >
            <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-brand-500/50" />
            Free Counselling
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`grid h-10 w-10 place-items-center rounded-xl lg:hidden ${
              solid ? "bg-brand-100 text-brand-700" : "bg-white/15 text-white"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pb-28 pt-6">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {l.href === "#courses" ? (
                    <div>
                      <button
                        type="button"
                        aria-expanded={mobileCourses}
                        onClick={() => setMobileCourses((value) => !value)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-lg font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-700"
                      >
                        All Courses
                        <ChevronDown className={`h-5 w-5 transition-transform ${mobileCourses ? "rotate-180" : ""}`} />
                      </button>
                      {mobileCourses && (
                        <div className="mt-1 space-y-1 pl-3">
                          {courseGroups.map(([name, items]) => {
                            const expanded = mobileCategory === name;
                            return (
                              <div key={name}>
                                <button
                                  type="button"
                                  aria-expanded={expanded}
                                  onClick={() => setMobileCategory(expanded ? null : name)}
                                  className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-base font-semibold ${
                                    expanded ? "bg-brand-50 text-brand-800" : "text-slate-700 hover:bg-slate-50"
                                  }`}
                                >
                                  {name}
                                  <ChevronRight className={`h-4 w-4 transition-transform ${expanded ? "rotate-90 text-brand-600" : "text-slate-400"}`} />
                                </button>
                                {expanded && (
                                  <div className="ml-3 border-l border-brand-100 py-1 pl-3">
                                    {items.map((course) => (
                                      <Link
                                        key={course.slug}
                                        href={`/courses/${course.slug}`}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                                      >
                                        {course.title}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                          <Link
                            href="/courses"
                            onClick={() => setOpen(false)}
                            className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                          >
                            View all courses
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={linkHref(l.href)}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-lg font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {l.label}
                    </a>
                  )}
                </motion.li>
              ))}
              <li className="mt-4 space-y-3 px-4">
                <a
                  href={ctaHref}
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gradient-to-r from-brand-600 to-brand-800 py-3.5 text-center font-semibold text-white shadow-lg shadow-brand-600/30"
                >
                  Book Free Counselling
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 rounded-full bg-brand-50 py-3 font-semibold text-brand-800"
                  >
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi ${site.name}, I'd like to know more about your courses.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-semibold text-white"
                  >
                    <WhatsappIcon className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
