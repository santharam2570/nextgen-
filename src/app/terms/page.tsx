import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the ${site.name} website, app and training services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro={`By using the ${site.name} website, app or training services, you agree to the following terms. Please read them carefully.`}
      updated="October 2026"
      sections={[
        {
          heading: "Use of the website",
          paragraphs: ["You agree to use this website only for lawful purposes and to provide accurate information when submitting forms or enrolling in a course."],
        },
        {
          heading: "Courses and enrolment",
          paragraphs: ["Course content, duration, fees and batch schedules may change from time to time. Enrolment is confirmed only after registration and fee payment as communicated by our team."],
        },
        {
          heading: "Placement support",
          paragraphs: ["We provide placement assistance including aptitude training, resume building, mock interviews and interview opportunities. Job offers depend on the candidate's performance and the hiring company's decision; placement is not guaranteed."],
        },
        {
          heading: "Intellectual property",
          paragraphs: ["All course materials, recordings, content and branding on this website and app belong to " + site.name + ". They are provided for your personal learning and may not be copied, shared or redistributed without written permission."],
        },
        {
          heading: "Code of conduct",
          paragraphs: ["Students are expected to behave respectfully towards trainers, staff and fellow learners. We may suspend access for misconduct or misuse of our services or materials."],
        },
        {
          heading: "Limitation of liability",
          paragraphs: ["We aim to keep information on this website accurate and up to date but do not guarantee it is complete or error-free. We are not liable for any indirect loss arising from the use of this website."],
        },
        {
          heading: "Governing law",
          paragraphs: ["These terms are governed by the laws of India, and any disputes are subject to the jurisdiction of the courts in Coimbatore, Tamil Nadu."],
        },
      ]}
    />
  );
}
