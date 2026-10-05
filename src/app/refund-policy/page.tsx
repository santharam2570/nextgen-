import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund and cancellation policy for courses at ${site.name}.`,
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro={`This policy explains how course cancellations, batch changes and refunds are handled at ${site.name}.`}
      updated="October 2026"
      sections={[
        {
          heading: "Free demo before you enrol",
          paragraphs: ["We encourage every learner to attend a free demo class and counselling session before enrolling, so you can be confident the course is right for you."],
        },
        {
          heading: "Cancellation and refund requests",
          paragraphs: ["Refund requests must be submitted in writing to our email address with your enrolment details. Eligibility and the refundable amount depend on when the request is made and how much of the course has been attended, as communicated at the time of enrolment."],
        },
        {
          heading: "Batch change",
          paragraphs: ["If you are unable to continue with your current batch, you may request a transfer to a later batch, subject to seat availability."],
        },
        {
          heading: "Non-refundable cases",
          paragraphs: ["Refunds are generally not provided in the following cases:"],
          bullets: ["Registration or certification exam fees paid to third parties", "Requests made after a significant part of the course has been completed", "Suspension due to violation of our code of conduct"],
        },
        {
          heading: "Course cancellation by us",
          paragraphs: ["If we cancel a batch, you can choose to join the next available batch or receive a refund of the fees paid for that course."],
        },
        {
          heading: "Refund processing",
          paragraphs: ["Approved refunds are processed to the original payment method within a reasonable period after approval."],
        },
      ]}
    />
  );
}
