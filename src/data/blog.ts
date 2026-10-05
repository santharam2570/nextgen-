type BlogSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  courseSlug: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sap-fico-career-guide",
    title: "SAP FICO Career Guide: Skills, Roles and Salary in India",
    excerpt:
      "Everything you need to know about starting a career as an SAP FICO consultant — what the module covers, who can learn it, the skills companies expect and how to get your first job.",
    category: "SAP",
    date: "2026-09-12",
    readTime: "7 min read",
    courseSlug: "sap-fico",
    sections: [
      {
        heading: "What is SAP FICO?",
        paragraphs: [
          "SAP FICO combines two core modules of SAP ERP — Financial Accounting (FI) and Controlling (CO). FI handles external reporting such as the general ledger, accounts payable, accounts receivable and asset accounting, while CO supports internal reporting like cost centres, profit centres and product costing.",
          "With most large companies moving to SAP S/4HANA, demand for consultants who understand both finance processes and SAP configuration continues to grow.",
        ],
      },
      {
        heading: "Who can learn SAP FICO?",
        paragraphs: ["SAP FICO is one of the best SAP modules for commerce and finance backgrounds, but anyone with an interest in accounting processes can learn it."],
        bullets: ["BCom, BBA, MBA (Finance) and CA/CMA graduates", "Accountants and finance executives looking to move into SAP", "Freshers who want a stable career in ERP consulting", "Working professionals switching from non-IT roles"],
      },
      {
        heading: "Skills companies expect",
        paragraphs: ["Recruiters look for a combination of functional knowledge and hands-on configuration experience."],
        bullets: ["General ledger, AP, AR and asset accounting configuration", "Integration with SAP MM and SD", "Cost centre and profit centre accounting", "Knowledge of S/4HANA Finance and the Universal Journal", "Understanding of month-end and year-end closing"],
      },
      {
        heading: "How to start your SAP FICO career",
        paragraphs: [
          "Choose a course that offers real SAP server access, end-to-end implementation scenarios and interview preparation. Working on practical case studies helps you explain real business processes confidently in interviews.",
          "At NextGen Innovation, our SAP FICO course includes S/4HANA practice, real-time scenarios, resume building and placement support.",
        ],
      },
    ],
  },
  {
    slug: "data-science-roadmap-for-beginners",
    title: "Data Science Roadmap for Beginners: What to Learn and in What Order",
    excerpt:
      "A step-by-step learning path for freshers and career-switchers who want to become data scientists — from Python and statistics to machine learning and portfolio projects.",
    category: "Data & AI",
    date: "2026-09-05",
    readTime: "8 min read",
    courseSlug: "data-science",
    sections: [
      {
        heading: "Why data science?",
        paragraphs: ["Every industry — banking, healthcare, retail, manufacturing — now uses data to make decisions. Data scientists turn raw data into insights and predictive models, which makes it one of the most in-demand career paths in IT."],
      },
      {
        heading: "Step 1: Python and SQL",
        paragraphs: ["Start with Python fundamentals and libraries like NumPy and Pandas for data handling. Learn SQL to query databases — almost every data role tests SQL in interviews."],
      },
      {
        heading: "Step 2: Statistics and data visualisation",
        paragraphs: ["Understand descriptive statistics, probability, hypothesis testing and distributions. Use Matplotlib, Seaborn or Power BI to present insights clearly."],
      },
      {
        heading: "Step 3: Machine learning",
        paragraphs: ["Learn supervised and unsupervised algorithms with scikit-learn."],
        bullets: ["Linear and logistic regression", "Decision trees, random forests and boosting", "Clustering and dimensionality reduction", "Model evaluation and tuning"],
      },
      {
        heading: "Step 4: Build a portfolio",
        paragraphs: [
          "Recruiters want to see what you can build. Complete 3–5 end-to-end projects using real datasets and publish them on GitHub.",
          "Our Data Science course at NextGen Innovation follows this roadmap with real-time projects, mentor reviews and placement support.",
        ],
      },
    ],
  },
  {
    slug: "how-to-switch-from-non-it-to-it",
    title: "How to Switch from a Non-IT Background to an IT Job",
    excerpt:
      "Coming from mechanical, civil, commerce or arts? Here's a practical plan to choose the right course, build skills and land your first IT job — even with a career gap.",
    category: "Career",
    date: "2026-08-28",
    readTime: "6 min read",
    courseSlug: "software-testing",
    sections: [
      {
        heading: "Yes, you can switch to IT",
        paragraphs: ["Many successful IT professionals started in non-IT roles. Companies hire for skills — if you can demonstrate practical knowledge through projects and interviews, your degree matters less."],
      },
      {
        heading: "Choose a course that matches your background",
        paragraphs: ["Pick a path that builds on what you already know."],
        bullets: ["Commerce / finance: SAP FICO, Data Analytics", "Mechanical / production: SAP MM, SAP PP", "Civil / architecture: Master of BIM, Architectural Designing", "Arts / any degree: Software Testing, Digital Marketing, UI/UX Design"],
      },
      {
        heading: "Build practical skills",
        paragraphs: ["Focus on hands-on learning. Real-time projects and lab practice give you stories to share in interviews and make your resume stand out."],
      },
      {
        heading: "Prepare for placements",
        paragraphs: [
          "Work on aptitude, communication and mock interviews alongside your technical training. Address any career gap honestly and focus on what you learned.",
          "NextGen Innovation offers free counselling to help non-IT candidates choose the right course and provides complete placement support.",
        ],
      },
    ],
  },
  {
    slug: "what-is-generative-ai",
    title: "What is Generative AI? Careers, Tools and Skills to Learn",
    excerpt:
      "An introduction to Generative AI — how large language models work, popular tools, real business use cases and the skills you need for Gen AI roles.",
    category: "Data & AI",
    date: "2026-08-20",
    readTime: "7 min read",
    courseSlug: "generative-ai",
    sections: [
      {
        heading: "Generative AI in simple terms",
        paragraphs: ["Generative AI refers to models that create new content — text, images, code or audio — based on patterns learned from large datasets. Large language models (LLMs) power chat assistants, content tools and coding copilots."],
      },
      {
        heading: "Where businesses use Gen AI",
        paragraphs: ["Companies are adopting Gen AI to automate work and improve customer experience."],
        bullets: ["Customer support chatbots and virtual assistants", "Document summarisation and search (RAG)", "Code generation and testing", "Marketing content and personalisation"],
      },
      {
        heading: "Skills to learn",
        paragraphs: ["A Gen AI developer combines Python, prompt engineering and an understanding of how to connect LLMs to real data."],
        bullets: ["Python and APIs", "Prompt engineering", "LangChain and vector databases", "Retrieval-augmented generation (RAG)", "Responsible AI and evaluation"],
      },
      {
        heading: "Getting started",
        paragraphs: ["Our Generative AI course covers these tools with hands-on projects such as building chatbots and document assistants, along with placement support."],
      },
    ],
  },
  {
    slug: "bim-career-for-civil-engineers",
    title: "BIM Careers for Civil Engineers and Architects",
    excerpt:
      "Building Information Modelling is transforming the construction industry. Learn what BIM is, the software involved and the career opportunities in India and abroad.",
    category: "Design & BIM",
    date: "2026-08-10",
    readTime: "6 min read",
    courseSlug: "master-of-bim",
    sections: [
      {
        heading: "What is BIM?",
        paragraphs: ["BIM (Building Information Modelling) is a process of creating intelligent 3D models that contain information about every part of a building. Architects, engineers and contractors use BIM to plan, design, construct and manage projects more efficiently."],
      },
      {
        heading: "Software you will use",
        paragraphs: ["BIM professionals work with a set of industry-standard tools."],
        bullets: ["Autodesk Revit (Architecture, Structure, MEP)", "Navisworks for clash detection", "AutoCAD for 2D drafting", "BIM 360 / Autodesk Construction Cloud"],
      },
      {
        heading: "Career roles",
        paragraphs: ["Popular roles include BIM Modeller, BIM Coordinator, Revit Technician and BIM Engineer — with opportunities in Indian firms and international projects in the Middle East, UK and Australia."],
      },
      {
        heading: "How to start",
        paragraphs: ["Our Master of BIM program teaches these tools through real building projects and supports you with portfolio building and placement assistance."],
      },
    ],
  },
  {
    slug: "software-testing-manual-vs-automation",
    title: "Manual vs Automation Testing: Which Should You Learn First?",
    excerpt:
      "Understand the difference between manual and automation testing, the tools used in each and the best learning path to start a career in software testing.",
    category: "Software",
    date: "2026-07-30",
    readTime: "5 min read",
    courseSlug: "software-testing",
    sections: [
      {
        heading: "Manual testing",
        paragraphs: ["Manual testing involves executing test cases without automation tools. It builds your understanding of the software development life cycle, test case design and defect reporting — the foundation of every testing career."],
      },
      {
        heading: "Automation testing",
        paragraphs: ["Automation testing uses tools and scripts to run tests repeatedly and quickly."],
        bullets: ["Selenium WebDriver with Java or Python", "TestNG and JUnit", "API testing with Postman", "CI integration with Jenkins"],
      },
      {
        heading: "Which should you learn first?",
        paragraphs: [
          "Start with manual testing to understand testing concepts, then move to automation. Most companies expect testers to know both.",
          "Our Software Testing course covers manual testing, Selenium automation and API testing with live projects and placement support.",
        ],
      },
    ],
  },
];
