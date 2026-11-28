import { courses } from "./site";

const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Homepage-only category model — labels match `courses[].category` exactly. */
export const homeCategories = [
  {
    category: "SAP",
    word: "SAP S/4HANA",
    shortLabel: "SAP",
    blurb: "Finance, MM, SD, ABAP & SuccessFactors — mentor-led S/4HANA training with placement support.",
    image: img("1460925895917-afdab827c52f"),
    icon: "Boxes" as const,
  },
  {
    category: "Data & AI",
    word: "Data & AI",
    shortLabel: "Data & AI",
    blurb: "Data Science, Generative AI, Machine Learning and Power BI — build job-ready AI skills.",
    image: img("1551288049-bebda4e38f71"),
    icon: "Brain" as const,
    hot: true,
  },
  {
    category: "Software",
    word: "Full Stack & QA",
    shortLabel: "Software",
    blurb: "Full Stack, Software Testing, Salesforce and Flutter — ship real products employers want.",
    image: img("1531482615713-2afd69097998"),
    icon: "Code2" as const,
  },
  {
    category: "Cloud & Security",
    word: "Cloud & Security",
    shortLabel: "Cloud",
    blurb: "AWS, Azure, DevOps and Cybersecurity — cloud-native careers with hands-on labs.",
    image: img("1451187580459-43490279c0fa"),
    icon: "Cloud" as const,
  },
  {
    category: "Marketing",
    word: "Digital Marketing",
    shortLabel: "Marketing",
    blurb: "SEO, ads, social and analytics — grow brands with campaigns that convert.",
    image: img("1432888498266-38ffec3eaf0a"),
    icon: "Megaphone" as const,
  },
  {
    category: "Mechanical Engineering",
    word: "Mechanical CAD",
    shortLabel: "Mechanical",
    blurb: "AutoCAD, SolidWorks, Creo, CATIA, NX, CAM and ANSYS — industry CAD for mechanical careers.",
    image: img("1581091226825-a6a2a5aee158"),
    icon: "DraftingCompass" as const,
  },
  {
    category: "Civil Engineering",
    word: "Civil & Structure",
    shortLabel: "Civil",
    blurb: "Revit, STAAD, ETABS, Tekla, Lumion and more — civil design tools used on live projects.",
    image: img("1504307651254-35680f356dfd"),
    icon: "Landmark" as const,
  },
] as const;

export type HomeCategory = (typeof homeCategories)[number];

export function coursesByCategory(category: string) {
  return courses.filter((c) => c.category === category);
}

export function categorySlug(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const homeCategoryOrder = homeCategories.map((c) => c.category);
