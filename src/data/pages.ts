import type { InfoItem } from "@/components/InfoGrid";
import type { IconName } from "@/components/ui/Icon";

export const placementActivities: InfoItem[] = [
  { icon: "Target", title: "Free Aptitude Training", text: "Quantitative aptitude, logical reasoning and verbal ability sessions to help you clear the first round of company recruitment tests." },
  { icon: "FileText", title: "Resume Building", text: "Our team helps you build an ATS-friendly resume and LinkedIn profile that highlights your projects, tools and certifications." },
  { icon: "MessageCircle", title: "Mock Interviews", text: "Technical and HR mock interviews with trainers, with detailed feedback so you walk into real interviews with confidence." },
  { icon: "Users", title: "Soft Skills & Communication", text: "Group discussions, presentation practice and spoken English support to improve your communication and interview skills." },
  { icon: "Briefcase", title: "Recruitment Drives", text: "Regular recruitment drives and interview schedules with our hiring partners across IT, SAP, design and construction." },
  { icon: "BellRing", title: "Job Alerts & Referrals", text: "Curated job openings shared on the NextGen app, plus referrals to companies looking for trained freshers and experienced candidates." },
];

export const degreeBackgrounds = ["BE / BTech", "BCA / BSc", "BCom", "BBA", "MCA", "ME / MTech", "MBA", "MSc", "Diploma", "B.Arch", "Arts & Science", "Any Degree"];

export const streams = ["CSE", "IT", "ECE", "EEE", "Mechanical", "Civil", "Architecture", "Commerce", "Finance", "Arts", "Science"];

export const corporateFeatures: InfoItem[] = [
  { icon: "Workflow", title: "Course Customisation", text: "Training programs tailored to your projects, technology stack and team skill levels — from beginner to advanced." },
  { icon: "CalendarCheck", title: "Flexible Schedules", text: "Weekday, weekend or intensive bootcamp formats that fit around your delivery timelines and business hours." },
  { icon: "Video", title: "Online & On-site Delivery", text: "Live virtual sessions for distributed teams, or classroom sessions at your office or at our Coimbatore and Trichy branches." },
  { icon: "BadgeCheck", title: "Certification Guidance", text: "Structured preparation for SAP, AWS, Azure, Salesforce, ISTQB, Scrum and other industry certifications." },
  { icon: "UserCheck", title: "Experienced Trainers", text: "Industry practitioners with real project experience who teach the way your teams will actually use the technology." },
  { icon: "LineChart", title: "Progress Reporting", text: "Assessments, attendance and skill reports for every participant so managers can track learning outcomes." },
];

export const corporateProcess = [
  { step: "01", title: "Requirement Analysis", text: "We understand your team, projects and skill gaps." },
  { step: "02", title: "Custom Curriculum", text: "Our experts design a program around your goals." },
  { step: "03", title: "Training Delivery", text: "Hands-on sessions online, on-site or at our centre." },
  { step: "04", title: "Assessment & Reports", text: "Skill evaluation and reports for every participant." },
];

export const hireBenefits: InfoItem[] = [
  { icon: "UserCheck", title: "Job-Ready Candidates", text: "Candidates trained on real tools and real-time projects, ready to contribute from day one with minimal onboarding." },
  { icon: "Award", title: "Pre-Screened Skills", text: "Every candidate is assessed on technical skills, aptitude and communication before we recommend them." },
  { icon: "Users", title: "Wide Talent Pool", text: "Freshers and experienced candidates across SAP, Data & AI, Software, Cloud, Testing, Marketing and Design." },
  { icon: "Rocket", title: "Fast Hiring", text: "Share your requirement and receive shortlisted profiles quickly, with interviews scheduled at your convenience." },
  { icon: "BadgeCheck", title: "Cost-Effective Hiring", text: "Reduce sourcing and training costs by hiring candidates who are already trained on the tools your projects use." },
  { icon: "Headphones", title: "Dedicated Support", text: "A single point of contact handles your requirement from profile sharing to interview coordination and joining." },
];

export const hireProcess = [
  { step: "01", title: "Share Requirement", text: "Tell us the role, skills and number of openings." },
  { step: "02", title: "Receive Profiles", text: "We share pre-screened candidate profiles." },
  { step: "03", title: "Interview", text: "We coordinate interviews on your schedule." },
  { step: "04", title: "Hire", text: "Select the right candidates and onboard them." },
];

export const onlineFeatures: InfoItem[] = [
  { icon: "Video", title: "Live Instructor-Led Classes", text: "Interactive live sessions with the same expert trainers as our classroom batches — ask questions and get answers in real time." },
  { icon: "PlayCircle", title: "Class Recordings", text: "Every session is recorded and available on the NextGen app, so you can revise anytime or catch up on a missed class." },
  { icon: "Laptop", title: "Hands-On Lab Access", text: "Practise on SAP servers, cloud labs, coding environments and design software with guided exercises." },
  { icon: "MessageCircle", title: "Doubt Clearing Support", text: "Message your trainer on the app and join doubt-clearing sessions to make sure no concept is left unclear." },
  { icon: "CalendarCheck", title: "Flexible Timings", text: "Weekday, weekend and fast-track batches with timings suitable for students and working professionals in India and abroad." },
  { icon: "Briefcase", title: "Placement Support", text: "Online learners get the same resume building, mock interviews and job referrals as our classroom students." },
];

export type TrainingMode = {
  icon: IconName;
  title: string;
  tag: string;
  text: string;
  points: string[];
  idealFor: string;
  href: string;
  cta: string;
};

export const trainingModes: TrainingMode[] = [
  {
    icon: "Building2",
    title: "Classroom Training",
    tag: "Coimbatore & Trichy branches",
    text: "Learn face-to-face at our Coimbatore or Trichy branch with expert trainers, hands-on lab sessions and real-time projects in a focused learning environment.",
    points: ["Face-to-face interaction with trainers", "Dedicated lab practice on real tools", "Group discussions and peer learning", "Mock interviews at the centre"],
    idealFor: "Freshers, students and career-switchers in and around Coimbatore and Trichy who learn best in person.",
    href: "/branches",
    cta: "Find a branch",
  },
  {
    icon: "Video",
    title: "Online Live Training",
    tag: "Learn from anywhere",
    text: "Attend live instructor-led classes from home, in India or abroad. Same trainers, same syllabus and same placement support as our classroom batches.",
    points: ["Live interactive sessions, not pre-recorded", "HD class recordings on the NextGen app", "Remote lab access and doubt clearing", "Batch timings for different time zones"],
    idealFor: "Working professionals and learners outside Coimbatore and Trichy or outside India.",
    href: "/online-training",
    cta: "Explore online training",
  },
  {
    icon: "Laptop",
    title: "Hybrid Training",
    tag: "Classroom + online",
    text: "Combine both modes — attend classes at the centre when you can and join online when you can't, without missing any part of the course.",
    points: ["Switch between classroom and online anytime", "Recordings for every session you miss", "Lab practice at the centre on weekends", "Full placement support"],
    idealFor: "Learners with changing schedules who want flexibility with classroom support.",
    href: "#contact",
    cta: "Ask about hybrid batches",
  },
  {
    icon: "Briefcase",
    title: "Corporate Training",
    tag: "For company teams",
    text: "Customised training programs for teams, delivered online, at your office or at our centre — designed around your projects and skill gaps.",
    points: ["Curriculum tailored to your projects", "On-site, online or at our centre", "Assessments and progress reports", "Flexible schedules for working teams"],
    idealFor: "Companies upskilling employees or training new hires.",
    href: "/corporate-training",
    cta: "Explore corporate training",
  },
];

export const modeComparison: { feature: string; values: [string, string, string, string] }[] = [
  { feature: "Learning location", values: ["Coimbatore / Trichy branch", "Anywhere", "Centre + anywhere", "Office / online / centre"] },
  { feature: "Live trainer interaction", values: ["Yes", "Yes", "Yes", "Yes"] },
  { feature: "Class recordings on app", values: ["Yes", "Yes", "Yes", "On request"] },
  { feature: "Hands-on labs", values: ["At centre", "Remote access", "Both", "Customised"] },
  { feature: "Batch options", values: ["Weekday / weekend", "Weekday / weekend / fast-track", "Flexible", "As per company schedule"] },
  { feature: "Placement support", values: ["Yes", "Yes", "Yes", "Not applicable"] },
];

export const everyModeIncludes: InfoItem[] = [
  { icon: "UserCheck", title: "Expert Trainers", text: "Industry professionals with real project experience teach every batch, in every mode." },
  { icon: "Workflow", title: "Real-Time Projects", text: "Practical projects and case studies so you can explain real work confidently in interviews." },
  { icon: "PlayCircle", title: "Learning App", text: "Class recordings, notes and assignments available on the NextGen app anytime." },
  { icon: "Headphones", title: "1:1 Support", text: "Personal mentor support for doubts, career guidance and progress tracking." },
  { icon: "BadgeCheck", title: "Certification", text: "A course completion certificate plus guidance for global certification exams." },
  { icon: "Briefcase", title: "Placement Assistance", text: "Aptitude training, resume building, mock interviews and job referrals for individual learners." },
];

export const onlineRegions = ["India", "USA", "UK", "Canada", "UAE", "Singapore", "Australia", "Saudi Arabia", "Qatar", "Malaysia"];
