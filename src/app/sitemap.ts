import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { interviewQuestions } from "@/data/interview-questions";
import { locations } from "@/data/locations";
import { courses, site } from "@/data/site";

const staticPages: { path: string; priority: number }[] = [
  { path: "/courses", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/training-modes", priority: 0.7 },
  { path: "/placements", priority: 0.8 },
  { path: "/corporate-training", priority: 0.7 },
  { path: "/hire-from-us", priority: 0.6 },
  { path: "/online-training", priority: 0.8 },
  { path: "/reviews", priority: 0.6 },
  { path: "/contact", priority: 0.7 },
  { path: "/blog", priority: 0.6 },
  { path: "/interview-questions", priority: 0.6 },
  { path: "/sample-resumes", priority: 0.5 },
  { path: "/branches", priority: 0.7 },
  { path: "/locations", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
  { path: "/refund-policy", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("", 1, "weekly"),
    ...staticPages.map((p) => entry(p.path, p.priority)),
    ...courses.map((c) => entry(`/courses/${c.slug}`, c.featured ? 0.9 : 0.8)),
    ...blogPosts.map((p) => entry(`/blog/${p.slug}`, 0.5)),
    ...courses.filter((c) => interviewQuestions[c.slug]).map((c) => entry(`/interview-questions/${c.slug}`, 0.5)),
    ...courses.map((c) => entry(`/sample-resumes/${c.slug}`, 0.4)),
    ...locations.map((l) => entry(`/locations/${l.slug}`, 0.6)),
  ];
}
