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

const homeTitle =
  "NextGen Innovation | Best Software & CAD Training Institute in Coimbatore & Trichy with Placements";
const homeDescription =
  "Job-oriented training in Coimbatore, Trichy & online — SAP FICO, MM, SD, ABAP, Data Science, Generative AI, AWS & Azure, DevOps, Cybersecurity, Full Stack, Software Testing, Digital Marketing, Mechanical CAD and Civil Engineering. Live classes, real projects, placement support.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: `%s | ${site.name}`,
  },
  description: homeDescription,
  applicationName: site.name,
  alternates: { canonical: "/" },
  keywords: [
    "software training institute in Coimbatore",
    "software training institute in Trichy",
    "IT training institute in Coimbatore with placement",
    "IT training institute in Trichy with placement",
    "SAP training in Coimbatore",
    "SAP training in Trichy",
    "SAP FICO training in Coimbatore",
    "SAP MM training in Coimbatore",
    "SAP SD training in Trichy",
    "SAP ABAP on HANA course",
    "SAP SuccessFactors training",
    "Data Science course in Coimbatore",
    "Data Science course in Trichy",
    "Data Analytics course Power BI",
    "Generative AI course in Coimbatore",
    "AI and Machine Learning course",
    "AWS Azure cloud computing course",
    "DevOps training in Coimbatore",
    "Cybersecurity ethical hacking course",
    "Full Stack Development course in Coimbatore",
    "Full Stack Development course in Trichy",
    "Software Testing course in Coimbatore",
    "Software Testing course in Trichy",
    "Selenium automation training",
    "Salesforce training in Coimbatore",
    "Flutter app development course",
    "Digital Marketing course in Coimbatore",
    "Digital Marketing course in Trichy",
    "AutoCAD course in Coimbatore",
    "AutoCAD course in Trichy",
    "SolidWorks course in Coimbatore",
    "CATIA course in Coimbatore",
    "ANSYS course in Coimbatore",
    "Revit course in Coimbatore",
    "STAAD Pro course in Trichy",
    "Mechanical Engineering CAD training",
    "Civil Engineering design course",
    "online courses with placement support",
    site.name,
  ],
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "education",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">{children}</body>
    </html>
  );
}
