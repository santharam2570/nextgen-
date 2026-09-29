import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a1a3f",
};

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  keywords: [
    "SAP training",
    "SAP FICO",
    "SAP MM",
    "SAP SD",
    "SAP ABAP",
    "SAP SuccessFactors",
    "Data Science course",
    "Data Analytics Power BI course",
    "Generative AI course",
    "AWS Azure cloud course",
    "DevOps course",
    "Cybersecurity ethical hacking course",
    "Salesforce course",
    "Flutter app development course",
    "UI UX design course",
    "AI and Machine Learning course",
    "Full Stack Development course",
    "Software Testing course",
    "Digital Marketing course",
    "BIM course",
    "Interior Designing course",
    "Architectural Designing course",
    "career training institute Chennai",
    site.name,
  ],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">{children}</body>
    </html>
  );
}
