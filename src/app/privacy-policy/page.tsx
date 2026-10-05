import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy of ${site.name} — how we collect, use and protect the personal information you share with us.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains how ${site.name} collects, uses and protects the personal information you share with us through our website, app and enquiry forms.`}
      updated="October 2026"
      sections={[
        {
          heading: "Information we collect",
          paragraphs: ["We collect information you provide when you submit an enquiry, book a counselling session, enrol in a course or contact us."],
          bullets: ["Name, phone number and email address", "Course interest, preferred training mode and messages you send", "Company details for corporate training and hiring enquiries", "Basic technical data such as browser type and pages visited"],
        },
        {
          heading: "How we use your information",
          paragraphs: ["We use your information to:"],
          bullets: ["Respond to enquiries and provide course and fee details", "Schedule counselling, demo classes and training sessions", "Provide placement support and share relevant job opportunities", "Send updates about batches and offers (you can opt out anytime)", "Improve our website and services"],
        },
        {
          heading: "Sharing of information",
          paragraphs: [
            "We do not sell your personal information. With your consent, we may share your resume and profile with hiring partners for placement purposes.",
            "We may share information with service providers who help us operate our website and communication tools, under appropriate confidentiality obligations, or when required by law.",
          ],
        },
        {
          heading: "Data security",
          paragraphs: ["We use reasonable technical and organisational measures to protect your information from unauthorised access, loss or misuse."],
        },
        {
          heading: "Cookies",
          paragraphs: ["Our website may use cookies and similar technologies to understand how visitors use the site and to improve your experience. You can control cookies through your browser settings."],
        },
        {
          heading: "Your rights",
          paragraphs: ["You can request access to, correction of or deletion of your personal information, and opt out of marketing communications, by contacting us using the details below."],
        },
        {
          heading: "Changes to this policy",
          paragraphs: ["We may update this policy from time to time. The latest version will always be available on this page."],
        },
      ]}
    />
  );
}
