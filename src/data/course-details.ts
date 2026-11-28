export type CourseDetail = {
  seoTitle: string;
  metaDescription: string;
  overview: string;
  level: string;
  eligibility: string[];
  modules: { title: string; topics: string[] }[];
  tools: string[];
  projects: string[];
  roles: string[];
  salary: string;
  certification: string;
};

export const courseDetails: Record<string, CourseDetail> = {
  "sap-fico": {
    seoTitle: "SAP FICO Training in Coimbatore & Trichy with Placement Support",
    metaDescription:
      "Job-focused SAP FICO course in Coimbatore, Trichy & online. Learn S/4HANA Finance on a live server — GL, AP, AR, Asset Accounting, Controlling — with a real project and placement support.",
    overview:
      "SAP FICO is the most in-demand SAP functional skill in finance. Our SAP FICO training in Coimbatore, Trichy and online takes you from SAP basics to end-to-end S/4HANA Finance configuration — with daily practice on a live server, a full implementation project and dedicated placement support.",
    level: "Beginner to Advanced",
    eligibility: [
      "B.Com, M.Com, BBA, MBA (Finance), CA / CMA aspirants",
      "Accountants and finance professionals looking to switch to SAP",
      "Freshers with an interest in finance and ERP",
    ],
    modules: [
      { title: "SAP & S/4HANA Fundamentals", topics: ["ERP concepts & SAP landscape", "SAP navigation & Fiori launchpad", "Enterprise structure in FI"] },
      { title: "General Ledger Accounting", topics: ["Chart of accounts & GL master data", "Document types, posting keys & number ranges", "Fiscal year variants & posting periods"] },
      { title: "Accounts Payable & Receivable", topics: ["Vendor & customer master (Business Partner)", "Invoice, payment & automatic payment program", "Dunning, credit management & reporting"] },
      { title: "Asset Accounting", topics: ["Asset classes & depreciation keys", "Acquisition, transfer & retirement", "Depreciation run & year-end closing"] },
      { title: "Controlling (CO)", topics: ["Cost element & cost center accounting", "Profit center & internal orders", "Product costing & CO-PA basics"] },
      { title: "Integration & Project", topics: ["FI-MM & FI-SD integration", "Month-end & year-end closing", "End-to-end implementation project (ASAP / Activate)"] },
    ],
    tools: ["SAP S/4HANA", "SAP Fiori", "SAP GUI", "Solution Manager", "Excel"],
    projects: [
      "Configure a complete company code with GL, AP, AR and Asset Accounting",
      "Automatic payment program and dunning setup for a trading company",
      "Cost center and product costing setup for a manufacturing client",
    ],
    roles: ["SAP FICO Consultant", "SAP Finance Analyst", "SAP FICO Support Consultant", "S/4HANA Finance Associate"],
    salary: "₹4.5 – 15 LPA",
    certification: "Preparation for SAP Certified Associate – S/4HANA Financial Accounting, plus a NextGen Innovation course completion certificate.",
  },
  "sap-mm": {
    seoTitle: "SAP MM Training in Coimbatore & Trichy | S/4HANA Procurement Course",
    metaDescription:
      "Master SAP MM on S/4HANA in Coimbatore, Trichy or online — Procure-to-Pay, inventory, valuation and FI/SD integration — through real business scenarios, a live project and placement support.",
    overview:
      "SAP MM runs procurement and inventory for manufacturing, retail and logistics leaders. Master the complete Procure-to-Pay cycle on S/4HANA through real business scenarios, integration with Finance and Sales, and an end-to-end project that mirrors a live client implementation.",
    level: "Beginner to Advanced",
    eligibility: [
      "Graduates in any discipline, especially B.E. Mechanical, B.Com, BBA and MBA (Operations)",
      "Purchase, stores, supply chain and logistics professionals",
      "Freshers aiming for an SAP functional career",
    ],
    modules: [
      { title: "SAP & Enterprise Structure", topics: ["SAP navigation & S/4HANA overview", "Plant, storage location & purchasing organisation", "Assignment of organisational units"] },
      { title: "Master Data", topics: ["Material master & Business Partner", "Purchasing info records & source list", "Batch & serial number management"] },
      { title: "Procurement Processes", topics: ["Purchase requisition, RFQ & quotation", "Purchase orders, contracts & scheduling agreements", "Release strategy & approvals"] },
      { title: "Inventory Management", topics: ["Goods receipt, issue & transfer posting", "Physical inventory", "Special stocks: consignment & subcontracting"] },
      { title: "Valuation & Invoice Verification", topics: ["Material valuation & account determination", "Logistics invoice verification", "Split valuation"] },
      { title: "Integration & Project", topics: ["MM-FI and MM-SD integration", "Pricing procedure in purchasing", "End-to-end Procure-to-Pay project"] },
    ],
    tools: ["SAP S/4HANA", "SAP Fiori", "SAP GUI", "Excel"],
    projects: [
      "Procure-to-Pay setup for a manufacturing company",
      "Release strategy for purchase orders with multi-level approval",
      "Subcontracting and consignment process configuration",
    ],
    roles: ["SAP MM Consultant", "SAP Procurement Analyst", "SAP MM Support Consultant", "Supply Chain SAP Executive"],
    salary: "₹4 – 14 LPA",
    certification: "Preparation for SAP Certified Associate – S/4HANA Sourcing and Procurement, plus a NextGen Innovation course completion certificate.",
  },
  "sap-sd": {
    seoTitle: "SAP SD Training in Coimbatore & Trichy | S/4HANA Sales Course",
    metaDescription:
      "Learn SAP SD on S/4HANA in Coimbatore, Trichy or online — Order-to-Cash, pricing, shipping, billing and credit management — with hands-on scenarios, a live project and placement support.",
    overview:
      "SAP SD controls how companies sell, ship and bill. Master the complete Order-to-Cash cycle on S/4HANA — sales orders, pricing, delivery, billing and credit management — through practical business scenarios and a live project designed around real consulting work.",
    level: "Beginner to Advanced",
    eligibility: [
      "Graduates in any discipline, especially B.Com, BBA and MBA (Marketing)",
      "Sales, billing, customer service and logistics professionals",
      "Freshers aiming for an SAP functional career",
    ],
    modules: [
      { title: "SAP & Enterprise Structure", topics: ["SAP navigation & S/4HANA overview", "Sales organisation, distribution channel & division", "Sales area & shipping point"] },
      { title: "Master Data", topics: ["Customer master (Business Partner)", "Material master sales views", "Customer-material info records"] },
      { title: "Sales Order Processing", topics: ["Sales document types & item categories", "Inquiry, quotation & sales order", "Copy control & incompletion log"] },
      { title: "Pricing", topics: ["Condition technique", "Pricing procedure & condition records", "Discounts, taxes & freight"] },
      { title: "Shipping & Billing", topics: ["Outbound delivery, picking & PGI", "Billing documents & invoice types", "Revenue account determination"] },
      { title: "Advanced & Project", topics: ["Credit management & returns", "Intercompany & third-party sales", "End-to-end Order-to-Cash project"] },
    ],
    tools: ["SAP S/4HANA", "SAP Fiori", "SAP GUI", "Excel"],
    projects: [
      "Order-to-Cash implementation for an FMCG distributor",
      "Custom pricing procedure with discounts and taxes",
      "Third-party and intercompany sales configuration",
    ],
    roles: ["SAP SD Consultant", "SAP Order-to-Cash Analyst", "SAP SD Support Consultant", "SAP Billing Executive"],
    salary: "₹4 – 14 LPA",
    certification: "Preparation for SAP Certified Associate – S/4HANA Sales, plus a NextGen Innovation course completion certificate.",
  },
  "sap-abap": {
    seoTitle: "SAP ABAP on HANA Training in Coimbatore & Trichy | RAP & CDS Course",
    metaDescription:
      "SAP ABAP on HANA course in Coimbatore, Trichy & online. Learn classic ABAP, CDS views, AMDP, RAP and OData, build real reports, forms and Fiori apps, and get placement support.",
    overview:
      "SAP ABAP is the language behind every SAP system. Learn classic ABAP and modern ABAP on HANA — CDS views, AMDP and the RESTful Application Programming model — and build the reports, forms, enhancements and Fiori apps that SAP teams deliver every day.",
    level: "Beginner to Advanced",
    eligibility: [
      "B.E., B.Tech, BCA, MCA, B.Sc Computer Science graduates",
      "Developers from Java, .NET or other backgrounds",
      "Freshers with basic programming knowledge",
    ],
    modules: [
      { title: "ABAP Fundamentals", topics: ["SAP architecture & ABAP workbench", "Data types, internal tables & control statements", "Modularisation: functions, subroutines & includes"] },
      { title: "Data Dictionary", topics: ["Tables, views & data elements", "Search helps & lock objects", "Database access with Open SQL"] },
      { title: "Reports & Forms", topics: ["Classical, interactive & ALV reports", "Smart Forms & Adobe Forms", "Module pool programming"] },
      { title: "Object-Oriented ABAP", topics: ["Classes, interfaces & inheritance", "Exception handling", "Design patterns in ABAP"] },
      { title: "Enhancements & Interfaces", topics: ["User exits, BADIs & enhancement points", "BAPI, RFC & IDoc", "BDC & LSMW data migration"] },
      { title: "ABAP on HANA & RAP", topics: ["Core Data Services (CDS) views", "AMDP & code pushdown", "RAP, OData services & Fiori elements"] },
    ],
    tools: ["SAP S/4HANA", "ABAP Development Tools (Eclipse)", "SAP GUI", "SAP Fiori", "Postman"],
    projects: [
      "ALV sales report with drill-down and Excel download",
      "Invoice print form using Adobe Forms",
      "RAP-based Fiori app with CDS views and OData",
    ],
    roles: ["SAP ABAP Developer", "SAP ABAP on HANA Consultant", "SAP Technical Consultant", "SAP Fiori / RAP Developer"],
    salary: "₹4.5 – 16 LPA",
    certification: "Preparation for SAP Certified Associate – Back-End Developer (ABAP Cloud), plus a NextGen Innovation course completion certificate.",
  },
  "sap-successfactors": {
    seoTitle: "SAP SuccessFactors Training in Coimbatore & Trichy | HCM Cloud Course",
    metaDescription:
      "SAP SuccessFactors course in Coimbatore, Trichy & online — Employee Central, Recruiting, Onboarding, Performance & Compensation — with real HR transformation projects and placement support.",
    overview:
      "SAP SuccessFactors is the cloud HR suite global companies are moving to right now. Learn to configure Employee Central, Recruiting, Onboarding, Performance and Compensation, and work through real HR transformation scenarios that prepare you for consulting roles.",
    level: "Beginner to Advanced",
    eligibility: [
      "HR professionals, MBA (HR) and BBA graduates",
      "SAP HCM consultants moving to cloud",
      "Freshers interested in HR technology",
    ],
    modules: [
      { title: "SuccessFactors Foundations", topics: ["HR cloud concepts & SuccessFactors suite", "Provisioning & instance setup", "Role-based permissions"] },
      { title: "Employee Central", topics: ["Foundation objects & corporate data model", "Employee data model & succession data model", "Workflows & business rules"] },
      { title: "Recruiting", topics: ["Requisition & job application templates", "Candidate profile & career site", "Offer letters & interview scheduling"] },
      { title: "Onboarding", topics: ["Onboarding process flows", "New hire tasks & document flow", "Integration with Employee Central"] },
      { title: "Performance & Goals", topics: ["Goal plans & performance forms", "Route maps & rating scales", "Calibration & 360 reviews"] },
      { title: "Compensation & Project", topics: ["Compensation plans & worksheets", "Reporting & People Analytics", "End-to-end HR implementation project"] },
    ],
    tools: ["SAP SuccessFactors", "Provisioning", "Admin Center", "People Analytics", "Excel"],
    projects: [
      "Employee Central setup for a multi-country company",
      "Recruiting-to-Onboarding flow with offer approvals",
      "Performance and goal management cycle configuration",
    ],
    roles: ["SAP SuccessFactors Consultant", "SAP HR Cloud Analyst", "Employee Central Consultant", "HRIS Specialist"],
    salary: "₹5 – 16 LPA",
    certification: "Preparation for SAP Certified Associate – SuccessFactors Employee Central, plus a NextGen Innovation course completion certificate.",
  },
  "data-science": {
    seoTitle: "Data Science Course in Coimbatore & Trichy with Placement Support",
    metaDescription:
      "Data Science course in Coimbatore, Trichy & online for beginners and professionals. Python, SQL, statistics, Power BI, Tableau and machine learning, with real projects and placement support.",
    overview:
      "Data Science turns raw data into decisions that move businesses. Learn Python, SQL, statistics, visualisation and machine learning step by step, and graduate with a portfolio of real-world projects that proves you can solve business problems with data.",
    level: "Beginner to Advanced",
    eligibility: [
      "Graduates in any discipline (engineering, science, commerce, maths)",
      "Working professionals moving into analytics or data roles",
      "No prior coding experience required",
    ],
    modules: [
      { title: "Python for Data Science", topics: ["Python basics, functions & OOP", "NumPy & Pandas", "Data cleaning & wrangling"] },
      { title: "Statistics & Probability", topics: ["Descriptive & inferential statistics", "Hypothesis testing", "Probability distributions"] },
      { title: "SQL & Databases", topics: ["SQL queries, joins & subqueries", "Window functions", "Working with MySQL / PostgreSQL"] },
      { title: "Data Visualisation", topics: ["Matplotlib & Seaborn", "Power BI dashboards", "Tableau storytelling"] },
      { title: "Machine Learning", topics: ["Regression & classification", "Clustering & dimensionality reduction", "Model evaluation & tuning"] },
      { title: "Capstone & Deployment", topics: ["Feature engineering", "Model deployment with Flask / Streamlit", "Industry capstone project"] },
    ],
    tools: ["Python", "Jupyter", "Pandas", "Scikit-learn", "SQL", "Power BI", "Tableau", "Git"],
    projects: [
      "Customer churn prediction for a telecom company",
      "Sales forecasting dashboard for a retail chain",
      "Credit risk scoring model for a bank",
    ],
    roles: ["Data Scientist", "Data Analyst", "Machine Learning Engineer (Junior)", "Business Intelligence Analyst"],
    salary: "₹5 – 18 LPA",
    certification: "NextGen Innovation Data Science certificate, plus guidance for Microsoft PL-300 (Power BI) certification.",
  },
  "ai-machine-learning": {
    seoTitle: "AI & Machine Learning Course in Coimbatore & Trichy | Deep Learning & MLOps",
    metaDescription:
      "Advanced AI & Machine Learning course in Coimbatore, Trichy & online — deep learning, NLP, computer vision and MLOps with TensorFlow and PyTorch. Build and deploy real AI models.",
    overview:
      "Go deep into Artificial Intelligence — machine learning, deep learning, NLP and computer vision. Build and deploy production-grade AI models with Python, TensorFlow and PyTorch, and master the MLOps practices companies rely on to run AI at scale.",
    level: "Intermediate to Advanced",
    eligibility: [
      "B.E., B.Tech, M.Sc, MCA graduates",
      "Developers and data analysts moving into AI",
      "Basic Python knowledge recommended (a bridge module is included)",
    ],
    modules: [
      { title: "Python & Maths for AI", topics: ["Python, NumPy & Pandas refresher", "Linear algebra & calculus essentials", "Probability for ML"] },
      { title: "Machine Learning", topics: ["Supervised & unsupervised learning", "Ensemble methods: Random Forest & XGBoost", "Model evaluation & tuning"] },
      { title: "Deep Learning", topics: ["Neural networks & backpropagation", "TensorFlow & PyTorch", "CNNs, RNNs & Transformers"] },
      { title: "Natural Language Processing", topics: ["Text processing & embeddings", "Sentiment analysis & classification", "Transformer models with Hugging Face"] },
      { title: "Computer Vision", topics: ["Image classification", "Object detection with YOLO", "OpenCV fundamentals"] },
      { title: "MLOps & Capstone", topics: ["Model deployment with FastAPI & Docker", "Experiment tracking with MLflow", "Industry AI capstone project"] },
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenCV", "MLflow", "Docker"],
    projects: [
      "Face mask / helmet detection with computer vision",
      "Customer review sentiment analyser with Transformers",
      "Deployed ML prediction API with Docker",
    ],
    roles: ["AI Engineer", "Machine Learning Engineer", "NLP Engineer", "Computer Vision Engineer"],
    salary: "₹6 – 22 LPA",
    certification: "NextGen Innovation AI & ML certificate, plus guidance for TensorFlow Developer and cloud AI certifications.",
  },
  "generative-ai": {
    seoTitle: "Generative AI & Prompt Engineering Course in Coimbatore & Trichy",
    metaDescription:
      "Generative AI course in Coimbatore, Trichy & online. Master prompt engineering with ChatGPT, Gemini & Claude, and build LLM apps, RAG chatbots and AI agents that automate real business work.",
    overview:
      "Generative AI is reshaping every job and every industry. Learn to use ChatGPT, Gemini and Claude like a professional, engineer prompts that deliver reliable results, and build real AI applications — chatbots, RAG systems and AI agents — that automate business work.",
    level: "Beginner to Intermediate",
    eligibility: [
      "Graduates and working professionals from any background",
      "Developers who want to build LLM-powered apps",
      "Marketers, analysts and managers who want to use AI at work",
    ],
    modules: [
      { title: "Generative AI Foundations", topics: ["How LLMs work", "ChatGPT, Gemini, Claude & open-source models", "Responsible & ethical AI"] },
      { title: "Prompt Engineering", topics: ["Prompt patterns & techniques", "Few-shot & chain-of-thought prompting", "Prompts for writing, analysis & coding"] },
      { title: "AI for Productivity", topics: ["AI for documents, Excel & presentations", "AI image & video generation", "Automating workflows with AI tools"] },
      { title: "Building LLM Apps", topics: ["OpenAI & Gemini APIs with Python", "LangChain fundamentals", "Building chatbots"] },
      { title: "RAG & AI Agents", topics: ["Embeddings & vector databases", "Retrieval-Augmented Generation (RAG)", "AI agents & tool calling"] },
      { title: "Deployment & Capstone", topics: ["Deploying AI apps with Streamlit", "Cost, safety & evaluation", "Business AI capstone project"] },
    ],
    tools: ["ChatGPT", "Gemini", "Claude", "Python", "LangChain", "Vector databases", "Streamlit", "Zapier / n8n"],
    projects: [
      "Company knowledge-base chatbot using RAG",
      "AI agent that automates email and report tasks",
      "AI content generator for marketing teams",
    ],
    roles: ["Generative AI Engineer", "Prompt Engineer", "AI Solutions Developer", "AI Automation Specialist"],
    salary: "₹5 – 20 LPA",
    certification: "NextGen Innovation Generative AI certificate, plus guidance for cloud AI certifications (Azure AI / Google Cloud).",
  },
  "data-analytics": {
    seoTitle: "Data Analytics Course in Coimbatore & Trichy | Excel, SQL & Power BI",
    metaDescription:
      "Data Analytics course in Coimbatore, Trichy & online — Advanced Excel, SQL, Power BI and Python basics. Build real business dashboards and get PL-300 prep plus placement support.",
    overview:
      "Data Analytics is the fastest route into a data career — no coding background required. Master Advanced Excel, SQL and Power BI, learn to clean and analyse real business data, and build dashboards managers actually use to make decisions.",
    level: "Beginner to Intermediate",
    eligibility: [
      "Graduates in any discipline, including non-IT backgrounds",
      "MIS executives, accountants and operations professionals",
      "No prior coding experience required",
    ],
    modules: [
      { title: "Advanced Excel", topics: ["Formulas, lookups & logical functions", "Pivot tables & pivot charts", "Data cleaning & Power Query"] },
      { title: "Excel Dashboards & Automation", topics: ["Interactive dashboards", "Macros & VBA basics", "MIS reporting"] },
      { title: "SQL for Analysts", topics: ["SELECT, filters & aggregations", "Joins, subqueries & CTEs", "Window functions for analysis"] },
      { title: "Power BI", topics: ["Data modelling & relationships", "DAX measures & calculated columns", "Reports, dashboards & publishing"] },
      { title: "Analytics Thinking", topics: ["Business KPIs & metrics", "Statistics for analysts", "Data storytelling"] },
      { title: "Python Basics & Capstone", topics: ["Python & Pandas for analysis", "Automating reports", "End-to-end analytics capstone"] },
    ],
    tools: ["Excel", "Power Query", "SQL", "Power BI", "Python", "Pandas"],
    projects: [
      "Sales performance dashboard in Power BI",
      "HR attrition analysis with SQL and Excel",
      "E-commerce customer insights report",
    ],
    roles: ["Data Analyst", "MIS Analyst", "Power BI Developer", "Business Analyst"],
    salary: "₹3.5 – 12 LPA",
    certification: "NextGen Innovation Data Analytics certificate, plus preparation for Microsoft PL-300 (Power BI Data Analyst).",
  },
  "full-stack-development": {
    seoTitle: "Full Stack Development Course in Coimbatore & Trichy | MERN & Next.js",
    metaDescription:
      "Full Stack Developer course in Coimbatore, Trichy & online — HTML, CSS, JavaScript, React, Next.js, Node.js and databases. Build and deploy real web apps with placement support.",
    overview:
      "Become a complete, hireable web developer. Learn front-end with HTML, CSS, JavaScript, React and Next.js, back-end with Node.js and Express, databases, APIs and cloud deployment — and ship real applications you can demo to employers.",
    level: "Beginner to Advanced",
    eligibility: [
      "B.E., B.Tech, BCA, MCA, B.Sc graduates",
      "Career switchers from any background with a passion for coding",
      "No prior coding experience required",
    ],
    modules: [
      { title: "Web Fundamentals", topics: ["HTML5 & semantic markup", "CSS3, Flexbox & Grid", "Responsive design & Tailwind CSS"] },
      { title: "JavaScript", topics: ["JavaScript fundamentals & ES6+", "DOM, events & async programming", "TypeScript basics"] },
      { title: "React & Next.js", topics: ["Components, props & hooks", "Routing & state management", "Next.js for production apps"] },
      { title: "Back-End with Node.js", topics: ["Node.js & Express", "REST APIs & authentication (JWT)", "File uploads & payments integration"] },
      { title: "Databases", topics: ["MongoDB & Mongoose", "SQL with PostgreSQL / MySQL", "Data modelling"] },
      { title: "DevOps & Capstone", topics: ["Git & GitHub", "Deploying on Vercel & AWS", "Full stack capstone project"] },
    ],
    tools: ["VS Code", "HTML/CSS", "JavaScript", "React", "Next.js", "Node.js", "MongoDB", "Git"],
    projects: [
      "E-commerce website with cart and payments",
      "Job portal with authentication and admin panel",
      "Real-time chat application",
    ],
    roles: ["Full Stack Developer", "Front-End Developer (React)", "Back-End Developer (Node.js)", "Web Developer"],
    salary: "₹4 – 15 LPA",
    certification: "NextGen Innovation Full Stack Development certificate with a verified project portfolio.",
  },
  "software-testing": {
    seoTitle: "Software Testing Course in Coimbatore & Trichy | Manual & Selenium Automation",
    metaDescription:
      "Software Testing course in Coimbatore, Trichy & online — manual testing, Selenium with Java, API testing, JIRA and CI/CD. ISTQB prep, live projects and placement support for freshers.",
    overview:
      "Software Testing is one of the most accessible and stable ways into IT. Learn manual testing, Selenium automation with Java, API testing and Agile tooling, and prepare for ISTQB certification through real project experience.",
    level: "Beginner to Advanced",
    eligibility: [
      "Graduates in any discipline, including non-IT backgrounds",
      "Career restarters and career switchers",
      "No prior coding experience required",
    ],
    modules: [
      { title: "Manual Testing", topics: ["SDLC & STLC", "Test cases, test plans & test design techniques", "Defect life cycle"] },
      { title: "Agile & Tools", topics: ["Agile & Scrum", "JIRA for test management", "Requirement analysis"] },
      { title: "Java for Testers", topics: ["Java fundamentals & OOP", "Collections & exception handling", "Coding practice for automation"] },
      { title: "Selenium Automation", topics: ["Selenium WebDriver", "TestNG & Page Object Model", "Framework design with Maven"] },
      { title: "API & Database Testing", topics: ["Postman & REST API testing", "Rest Assured automation", "SQL for testers"] },
      { title: "CI/CD & Project", topics: ["Git, Jenkins & CI integration", "Cucumber BDD", "Live testing project & ISTQB prep"] },
    ],
    tools: ["JIRA", "Selenium", "Java", "TestNG", "Postman", "Rest Assured", "Jenkins", "Git"],
    projects: [
      "Manual test suite for an e-commerce application",
      "Selenium automation framework with Page Object Model",
      "API automation suite for a banking app",
    ],
    roles: ["QA Engineer", "Automation Test Engineer", "Manual Tester", "API Test Engineer"],
    salary: "₹3.5 – 12 LPA",
    certification: "Preparation for ISTQB Foundation Level, plus a NextGen Innovation Software Testing certificate.",
  },
  salesforce: {
    seoTitle: "Salesforce Admin & Developer Training in Coimbatore & Trichy",
    metaDescription:
      "Salesforce training in Coimbatore, Trichy & online — administration, Flows, Apex and Lightning Web Components. Prepare for Admin and Platform Developer I certifications with real CRM projects.",
    overview:
      "Salesforce is the world's leading CRM, and certified Salesforce professionals are hired across industries. Learn administration, automation and development with Apex and Lightning Web Components, and prepare for official Salesforce certifications.",
    level: "Beginner to Advanced",
    eligibility: [
      "Graduates in any discipline",
      "Sales, support and CRM professionals",
      "Developers who want to move into Salesforce",
    ],
    modules: [
      { title: "Salesforce Fundamentals", topics: ["CRM concepts & Salesforce ecosystem", "Org setup & navigation", "Standard & custom objects"] },
      { title: "Administration", topics: ["Users, profiles, roles & permission sets", "Security & sharing model", "Data import & management"] },
      { title: "Automation", topics: ["Flows & approval processes", "Validation rules & formulas", "Reports & dashboards"] },
      { title: "Apex Programming", topics: ["Apex classes & triggers", "SOQL & SOSL", "Test classes & governor limits"] },
      { title: "Lightning Web Components", topics: ["LWC fundamentals", "Calling Apex from LWC", "Building custom UIs"] },
      { title: "Integration & Project", topics: ["REST & SOAP integration", "Deployment & change sets", "End-to-end CRM project"] },
    ],
    tools: ["Salesforce", "Trailhead", "Apex", "LWC", "VS Code", "Data Loader"],
    projects: [
      "Sales CRM for a real-estate company",
      "Support case management with automation",
      "Custom LWC dashboard with Apex integration",
    ],
    roles: ["Salesforce Administrator", "Salesforce Developer", "Salesforce Consultant", "CRM Analyst"],
    salary: "₹4.5 – 16 LPA",
    certification: "Preparation for Salesforce Certified Administrator and Platform Developer I, plus a NextGen Innovation certificate.",
  },
  "mobile-app-development": {
    seoTitle: "Flutter App Development Course in Coimbatore & Trichy | Android & iOS",
    metaDescription:
      "Flutter mobile app development course in Coimbatore, Trichy & online. Learn Dart, UI design, state management, Firebase and APIs, and publish real Android & iOS apps to the store.",
    overview:
      "Build Android and iOS apps from a single codebase with Flutter. Learn Dart, polished UI design, state management, Firebase and REST APIs — and publish your own apps to the Play Store as proof of your skills.",
    level: "Beginner to Advanced",
    eligibility: [
      "B.E., B.Tech, BCA, MCA, B.Sc graduates",
      "Web developers moving into mobile",
      "Beginners with basic programming interest",
    ],
    modules: [
      { title: "Dart Programming", topics: ["Dart fundamentals", "OOP in Dart", "Async programming & futures"] },
      { title: "Flutter UI", topics: ["Widgets & layouts", "Navigation & routing", "Responsive UI & animations"] },
      { title: "State Management", topics: ["setState & Provider", "Riverpod / Bloc", "App architecture"] },
      { title: "APIs & Storage", topics: ["REST APIs & JSON", "Local storage & SQLite", "Error handling"] },
      { title: "Firebase", topics: ["Authentication", "Firestore database", "Push notifications"] },
      { title: "Publishing & Project", topics: ["Testing & debugging", "Play Store & App Store publishing", "Capstone app project"] },
    ],
    tools: ["Flutter", "Dart", "Android Studio", "VS Code", "Firebase", "Git"],
    projects: [
      "Food delivery app with cart and payments",
      "Chat app with Firebase authentication",
      "Expense tracker published on Play Store",
    ],
    roles: ["Flutter Developer", "Mobile App Developer", "Android Developer", "Cross-Platform Developer"],
    salary: "₹4 – 14 LPA",
    certification: "NextGen Innovation Mobile App Development certificate with published app portfolio.",
  },
  "cloud-computing": {
    seoTitle: "Cloud Computing Course in Coimbatore & Trichy | AWS & Azure Training",
    metaDescription:
      "AWS & Azure cloud computing course in Coimbatore, Trichy & online — compute, storage, networking, IAM, security and cost control. Prepare for AWS SAA and AZ-104 with hands-on labs.",
    overview:
      "Almost every company now runs on the cloud. Learn Amazon Web Services and Microsoft Azure hands-on — compute, storage, networking, security and cost management — and prepare for the cloud certifications employers value most.",
    level: "Beginner to Advanced",
    eligibility: [
      "B.E., B.Tech, BCA, MCA, B.Sc graduates",
      "System administrators, network engineers and support staff",
      "Developers who want cloud skills",
    ],
    modules: [
      { title: "Cloud & Linux Fundamentals", topics: ["Cloud concepts & service models", "Linux administration basics", "Networking essentials"] },
      { title: "AWS Core Services", topics: ["EC2, S3 & EBS", "VPC, subnets & security groups", "IAM & access management"] },
      { title: "AWS Advanced", topics: ["RDS, DynamoDB & Lambda", "Load balancing & auto scaling", "CloudWatch & CloudFormation"] },
      { title: "Microsoft Azure", topics: ["Azure VMs, storage & networking", "Azure Active Directory (Entra ID)", "Azure App Service & Functions"] },
      { title: "Security & Cost", topics: ["Cloud security best practices", "Backup & disaster recovery", "Cost optimisation"] },
      { title: "Certification & Project", topics: ["Architecting a 3-tier application", "Migration to cloud", "AWS & Azure certification prep"] },
    ],
    tools: ["AWS", "Microsoft Azure", "Linux", "Terraform", "CloudFormation", "Git"],
    projects: [
      "Highly available 3-tier web app on AWS",
      "Serverless application with AWS Lambda",
      "On-premise to Azure migration plan and setup",
    ],
    roles: ["Cloud Engineer", "AWS Solutions Architect (Associate)", "Azure Administrator", "Cloud Support Engineer"],
    salary: "₹5 – 18 LPA",
    certification: "Preparation for AWS Solutions Architect – Associate and Microsoft Azure Administrator (AZ-104).",
  },
  devops: {
    seoTitle: "DevOps Training in Coimbatore & Trichy | Docker, Kubernetes & CI/CD",
    metaDescription:
      "DevOps course in Coimbatore, Trichy & online — Linux, Git, Jenkins, GitHub Actions, Docker, Kubernetes, Terraform, Ansible and monitoring. Real pipeline projects and CKA preparation.",
    overview:
      "DevOps engineers automate how software is built, tested and shipped — and are among the best-paid professionals in IT. Learn Linux, Git, CI/CD, Docker, Kubernetes, Terraform and monitoring by building real delivery pipelines end to end.",
    level: "Intermediate to Advanced",
    eligibility: [
      "B.E., B.Tech, BCA, MCA graduates",
      "System admins, testers and developers",
      "Basic Linux knowledge helpful (covered in the course)",
    ],
    modules: [
      { title: "Linux & Scripting", topics: ["Linux administration", "Shell scripting", "Networking for DevOps"] },
      { title: "Version Control", topics: ["Git branching & workflows", "GitHub & GitLab", "Code review practices"] },
      { title: "CI/CD", topics: ["Jenkins pipelines", "GitHub Actions", "Build tools & artifact management"] },
      { title: "Containers", topics: ["Docker images & containers", "Docker Compose", "Container registries"] },
      { title: "Kubernetes", topics: ["Pods, deployments & services", "Helm charts", "Scaling & self-healing"] },
      { title: "IaC, Monitoring & Project", topics: ["Terraform & Ansible", "Prometheus & Grafana", "End-to-end DevOps pipeline project"] },
    ],
    tools: ["Linux", "Git", "Jenkins", "Docker", "Kubernetes", "Terraform", "Ansible", "Prometheus", "AWS"],
    projects: [
      "CI/CD pipeline for a microservices application",
      "Kubernetes deployment with Helm and auto scaling",
      "Infrastructure as code with Terraform on AWS",
    ],
    roles: ["DevOps Engineer", "Site Reliability Engineer (SRE)", "Build & Release Engineer", "Cloud DevOps Engineer"],
    salary: "₹6 – 20 LPA",
    certification: "Preparation for Certified Kubernetes Administrator (CKA) and AWS DevOps certifications.",
  },
  cybersecurity: {
    seoTitle: "Cybersecurity & Ethical Hacking Course in Coimbatore & Trichy",
    metaDescription:
      "Cybersecurity and ethical hacking course in Coimbatore, Trichy & online — network security, penetration testing, web app security and SOC operations in hands-on labs. CEH & Security+ prep.",
    overview:
      "Cyber attacks grow every year, and companies urgently need skilled defenders. Learn network security, ethical hacking, penetration testing and SOC operations in hands-on labs, and prepare for globally recognised security certifications.",
    level: "Beginner to Advanced",
    eligibility: [
      "B.E., B.Tech, BCA, MCA, B.Sc graduates",
      "Network and system administrators",
      "IT professionals moving into security",
    ],
    modules: [
      { title: "Security Foundations", topics: ["Networking & OSI model", "Linux for security", "Security concepts & CIA triad"] },
      { title: "Network Security", topics: ["Firewalls, IDS & IPS", "VPNs & secure protocols", "Wireshark packet analysis"] },
      { title: "Ethical Hacking", topics: ["Reconnaissance & scanning", "System hacking & privilege escalation", "Malware & social engineering"] },
      { title: "Web Application Security", topics: ["OWASP Top 10", "Burp Suite", "SQL injection & XSS labs"] },
      { title: "SOC & Incident Response", topics: ["SIEM tools (Splunk)", "Log analysis & threat hunting", "Incident response process"] },
      { title: "Cloud Security & Project", topics: ["Cloud security basics", "Compliance: ISO 27001 & GDPR", "Penetration testing project & report"] },
    ],
    tools: ["Kali Linux", "Nmap", "Wireshark", "Metasploit", "Burp Suite", "Splunk"],
    projects: [
      "Vulnerability assessment of a web application",
      "Network penetration test with a professional report",
      "SOC monitoring and incident response simulation",
    ],
    roles: ["Cybersecurity Analyst", "Ethical Hacker / Penetration Tester", "SOC Analyst", "Security Engineer"],
    salary: "₹5 – 18 LPA",
    certification: "Preparation for CEH (Certified Ethical Hacker) and CompTIA Security+.",
  },
  "digital-marketing": {
    seoTitle: "Digital Marketing Course in Coimbatore & Trichy with Live Projects",
    metaDescription:
      "Digital Marketing course in Coimbatore, Trichy & online — SEO, Google Ads, Meta Ads, social media, content, email, GA4 and AI tools. Run live campaigns and earn Google certifications.",
    overview:
      "Every business is competing for customers online. Learn SEO, Google Ads, social media, content, email and analytics, and use AI tools to work faster. Run live campaigns with real budgets and build a portfolio of measurable results.",
    level: "Beginner to Advanced",
    eligibility: [
      "Graduates in any discipline",
      "Business owners, freelancers and entrepreneurs",
      "Sales and marketing professionals",
    ],
    modules: [
      { title: "Marketing Foundations", topics: ["Digital marketing landscape", "Buyer personas & funnels", "Website basics with WordPress"] },
      { title: "Search Engine Optimisation", topics: ["Keyword research", "On-page & technical SEO", "Link building & local SEO"] },
      { title: "Google Ads", topics: ["Search, display & YouTube ads", "Bidding & conversion tracking", "Performance Max campaigns"] },
      { title: "Social Media Marketing", topics: ["Instagram, Facebook & LinkedIn strategy", "Meta Ads Manager", "Content calendars & reels"] },
      { title: "Content, Email & AI", topics: ["Content marketing & copywriting", "Email marketing & automation", "AI tools for marketers"] },
      { title: "Analytics & Live Project", topics: ["Google Analytics 4 & Tag Manager", "Reporting & ROI", "Live campaign project"] },
    ],
    tools: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Search Console", "WordPress", "Canva", "ChatGPT", "SEMrush"],
    projects: [
      "Live Google Ads lead-generation campaign",
      "SEO audit and ranking plan for a real business",
      "Instagram growth campaign with Meta Ads",
    ],
    roles: ["Digital Marketing Executive", "SEO Specialist", "Performance Marketer", "Social Media Manager"],
    salary: "₹3 – 12 LPA",
    certification: "Preparation for Google Ads and Google Analytics certifications, plus a NextGen Innovation certificate.",
  },
  "autocad-mechanical": {
    seoTitle: "AutoCAD Course for Mechanical Engineering in Coimbatore & Trichy",
    metaDescription:
      "AutoCAD training for mechanical engineers in Coimbatore, Trichy & online — 2D drafting, detailing, orthographic drawings and industry standards with placement support.",
    overview:
      "Master AutoCAD for mechanical drafting — from basic sketching to professional manufacturing drawings. Learn layers, dimensions, blocks and detailing used in design and production offices.",
    level: "Beginner to Intermediate",
    eligibility: [
      "Diploma / B.E. Mechanical, Automobile or Production Engineering",
      "ITI draughtsmen and CAD beginners",
      "Working professionals who need AutoCAD for shop-floor drawings",
    ],
    modules: [
      { title: "AutoCAD Essentials", topics: ["Interface & coordinate systems", "Draw & modify commands", "Layers, colours & linetypes"] },
      { title: "Mechanical Drafting", topics: ["Orthographic projections", "Sectional views", "Dimensioning standards"] },
      { title: "Detailing & Blocks", topics: ["Blocks, attributes & templates", "Title blocks & borders", "Isometric drawings"] },
      { title: "Plotting & Standards", topics: ["Layouts & viewports", "Plot styles", "ISO / ASME drawing practices"] },
      { title: "Project Work", topics: ["Machine component drawings", "Assembly detailing", "Portfolio drawings"] },
    ],
    tools: ["AutoCAD", "PDF plotters", "Excel"],
    projects: [
      "Complete machine part detailing set",
      "Assembly drawing with BOM",
      "Isometric presentation drawing",
    ],
    roles: ["CAD Draughtsman", "AutoCAD Designer", "Junior Design Engineer", "Detailing Engineer"],
    salary: "₹2.5 – 6 LPA",
    certification: "Preparation for Autodesk Certified User / Professional (AutoCAD), plus a NextGen Innovation certificate.",
  },
  "solidworks": {
    seoTitle: "SolidWorks Course in Coimbatore & Trichy | Mechanical CAD Training",
    metaDescription:
      "SolidWorks training in Coimbatore, Trichy & online — part modelling, assemblies, drawings, sheet metal and product design projects with placement support.",
    overview:
      "Learn SolidWorks the way design offices use it. Build parts, assemblies and drawings, explore sheet metal and surfacing, and complete product design projects for your portfolio.",
    level: "Beginner to Advanced",
    eligibility: [
      "Diploma / B.E. Mechanical, Automobile or Mechatronics",
      "CAD professionals upgrading from 2D",
      "Freshers aiming for design engineer roles",
    ],
    modules: [
      { title: "Sketch & Part Modelling", topics: ["2D sketches & relations", "Extrude, revolve, sweep & loft", "Patterns, equations & configurations"] },
      { title: "Assemblies", topics: ["Mates & advanced mates", "Exploded views", "Interference detection"] },
      { title: "Drawings", topics: ["Drawing views & annotations", "GD&T basics on drawings", "BOM & balloons"] },
      { title: "Sheet Metal & Weldments", topics: ["Sheet metal features", "Flat patterns", "Weldment structures"] },
      { title: "Surfacing & Project", topics: ["Surface modelling basics", "Product design project", "Portfolio & interview prep"] },
    ],
    tools: ["SolidWorks", "SolidWorks eDrawings", "DraftSight"],
    projects: [
      "Consumer product assembly with drawings",
      "Sheet metal enclosure design",
      "Machine frame weldment project",
    ],
    roles: ["SolidWorks Design Engineer", "Product Design Engineer", "CAD Engineer", "Mechanical Design Engineer"],
    salary: "₹3 – 8 LPA",
    certification: "Preparation for CSWA / CSWP, plus a NextGen Innovation SolidWorks certificate.",
  },
  "creo": {
    seoTitle: "Creo Course in Coimbatore & Trichy | PTC Creo Parametric Training",
    metaDescription:
      "Creo Parametric training in Coimbatore, Trichy & online — part design, assemblies, surfacing, sheet metal and drawings for product development careers.",
    overview:
      "PTC Creo is widely used in automotive and manufacturing. Learn parametric modelling, assemblies, drawings and sheet metal so you can contribute on real product development teams.",
    level: "Beginner to Advanced",
    eligibility: [
      "Mechanical / Automobile / Production graduates",
      "Design engineers moving to Creo",
      "Diploma holders seeking CAD careers",
    ],
    modules: [
      { title: "Creo Fundamentals", topics: ["Sketcher & constraints", "Extrude, revolve & blend", "Datums & references"] },
      { title: "Advanced Parts", topics: ["Sweeps, helical sweeps", "Patterns & family tables", "Relations & parameters"] },
      { title: "Assemblies & Drawings", topics: ["Assembly constraints", "Exploded views", "Detailed drawings"] },
      { title: "Sheet Metal & Surfacing", topics: ["Sheet metal walls & forms", "Style & Freestyle surfaces", "Boundary blends"] },
      { title: "Project", topics: ["Product assembly project", "Drawing package", "Interview preparation"] },
    ],
    tools: ["Creo Parametric", "Creo View"],
    projects: [
      "Parametric product family design",
      "Sheet metal chassis project",
      "Surfaced consumer product",
    ],
    roles: ["Creo Design Engineer", "CAD Engineer", "Product Development Engineer", "Mechanical Designer"],
    salary: "₹3 – 9 LPA",
    certification: "NextGen Innovation Creo certificate with project portfolio.",
  },
  "catia": {
    seoTitle: "CATIA Course in Coimbatore & Trichy | Automotive CAD Training",
    metaDescription:
      "CATIA V5 training in Coimbatore, Trichy & online — Part Design, Assembly, GSD surfacing and automotive workflows with placement support.",
    overview:
      "CATIA powers automotive and aerospace design. Learn sketcher, part and assembly design, Generative Shape Design and drawing practices used by OEMs and Tier-1 suppliers.",
    level: "Beginner to Advanced",
    eligibility: [
      "B.E. / Diploma Mechanical or Automobile",
      "Design engineers targeting automotive OEMs",
      "CAD professionals switching to CATIA",
    ],
    modules: [
      { title: "Sketcher & Part Design", topics: ["Sketcher tools", "Pad, pocket, shaft & rib", "Boolean operations"] },
      { title: "Assembly Design", topics: ["Product structure", "Constraints", "Clash analysis"] },
      { title: "Drafting", topics: ["Views & projections", "Dimensions & annotations", "Bill of materials"] },
      { title: "Generative Shape Design", topics: ["Wireframe & surfaces", "Multi-section surfaces", "Surface quality checks"] },
      { title: "Automotive Project", topics: ["Body / BIW component", "Assembly with drawings", "Portfolio review"] },
    ],
    tools: ["CATIA V5", "DMU Navigator"],
    projects: [
      "Automotive bracket and assembly",
      "Surface modelling of a body panel",
      "Complete drawing package",
    ],
    roles: ["CATIA Design Engineer", "Automotive CAD Engineer", "Surface Designer", "BIW Design Engineer"],
    salary: "₹3.5 – 10 LPA",
    certification: "NextGen Innovation CATIA certificate with automotive project portfolio.",
  },
  "nx-cad": {
    seoTitle: "NX CAD Course in Coimbatore & Trichy | Siemens NX Training",
    metaDescription:
      "Siemens NX CAD training in Coimbatore, Trichy & online — part modelling, assemblies, drafting and synchronous technology for mechanical design careers.",
    overview:
      "Siemens NX is a leading CAD platform in automotive and industrial design. Learn part modelling, assemblies, drafting and synchronous design techniques used in Tier-1 and OEM environments.",
    level: "Beginner to Advanced",
    eligibility: [
      "Mechanical / Automobile / Production graduates",
      "CAD engineers upgrading to NX",
      "Freshers targeting Siemens NX roles",
    ],
    modules: [
      { title: "NX Interface & Sketching", topics: ["NX environment", "Sketch constraints", "Feature modelling"] },
      { title: "Part Modelling", topics: ["Extrude, revolve, sweep", "Synchronous modelling", "Expressions"] },
      { title: "Assemblies", topics: ["Assembly constraints", "Arrangements", "Clearance analysis"] },
      { title: "Drafting & PMI", topics: ["Drawing views", "Dimensions & PMI", "Templates"] },
      { title: "Project", topics: ["Complete product model", "Drawing set", "Interview prep"] },
    ],
    tools: ["Siemens NX", "Teamcenter basics"],
    projects: [
      "Parametric machine component design",
      "Multi-part product assembly",
      "Manufacturing drawing package",
    ],
    roles: ["NX CAD Engineer", "Siemens NX Designer", "Mechanical Design Engineer", "CAD Modeller"],
    salary: "₹3.5 – 10 LPA",
    certification: "NextGen Innovation NX CAD certificate.",
  },
  "mastercam": {
    seoTitle: "MasterCAM Course in Coimbatore & Trichy | CNC & CAM Training",
    metaDescription:
      "MasterCAM training in Coimbatore, Trichy & online — mill, lathe and multi-axis toolpaths, stock setup and G-code for CNC careers.",
    overview:
      "MasterCAM is one of the most widely used CAM systems worldwide. Learn mill and lathe programming, toolpath verification and G-code generation for job shops and manufacturing units.",
    level: "Beginner to Intermediate",
    eligibility: [
      "Mechanical / Production diploma or degree holders",
      "CNC operators upgrading to CAM",
      "ITI machinists and programming aspirants",
    ],
    modules: [
      { title: "MasterCAM Basics", topics: ["Interface & machine groups", "Stock & tool setup", "Geometry creation"] },
      { title: "Mill Toolpaths", topics: ["Contour, pocket & drill", "Surface rough & finish", "High-speed toolpaths"] },
      { title: "Lathe", topics: ["Turning & facing", "Grooving & threading", "C-axis basics"] },
      { title: "Verification & Code", topics: ["Backplot & Verify", "Post processing", "Shop floor docs"] },
      { title: "Project", topics: ["Complete mill job", "Lathe component", "Interview prep"] },
    ],
    tools: ["MasterCAM", "CNC simulator"],
    projects: [
      "3-axis milling job with fixture",
      "Lathe component with threading",
      "Production toolpath optimisation",
    ],
    roles: ["MasterCAM Programmer", "CNC Programmer", "CAM Engineer", "Manufacturing Programmer"],
    salary: "₹3 – 8 LPA",
    certification: "NextGen Innovation MasterCAM certificate.",
  },
  "solidworks-cam": {
    seoTitle: "SolidWorks CAM Course in Coimbatore & Trichy",
    metaDescription:
      "SolidWorks CAM training in Coimbatore, Trichy & online — milling, turning, tool libraries and post processing directly from SolidWorks models.",
    overview:
      "Program CNC machines without leaving SolidWorks. Learn feature-based machining, toolpath strategies and post processing so design and manufacturing stay in one workflow.",
    level: "Intermediate",
    eligibility: [
      "SolidWorks users and mechanical graduates",
      "CAM beginners with CAD background",
      "Design engineers supporting manufacturing",
    ],
    modules: [
      { title: "CAM Setup", topics: ["Machine & stock definition", "Coordinate systems", "Tool crib"] },
      { title: "Milling Strategies", topics: ["2.5D feature machining", "3D roughing & finishing", "Hole making"] },
      { title: "Turning", topics: ["Lathe setup", "Turning operations", "Live tooling basics"] },
      { title: "Posts & Simulation", topics: ["Toolpath simulation", "Post processors", "NC output"] },
      { title: "Project", topics: ["End-to-end CAM job", "Drawing-to-code workflow", "Portfolio"] },
    ],
    tools: ["SolidWorks", "SolidWorks CAM"],
    projects: [
      "Milled housing from SolidWorks model",
      "Turned shaft program",
      "Combined mill-turn sample job",
    ],
    roles: ["SolidWorks CAM Engineer", "CNC Programmer", "Manufacturing CAD/CAM Engineer"],
    salary: "₹3 – 8 LPA",
    certification: "NextGen Innovation SolidWorks CAM certificate.",
  },
  "fusion-360": {
    seoTitle: "Fusion 360 Course in Coimbatore & Trichy | CAD CAM Training",
    metaDescription:
      "Fusion 360 training in Coimbatore, Trichy & online — CAD modelling, assemblies, CAM, simulation and generative design with cloud collaboration.",
    overview:
      "Autodesk Fusion 360 combines CAD, CAM and simulation in one cloud platform. Learn modelling, assemblies, machining and collaboration skills valued by startups and product teams.",
    level: "Beginner to Intermediate",
    eligibility: [
      "Mechanical / Mechatronics students and graduates",
      "Makers, startups and product designers",
      "CAD beginners seeking an all-in-one tool",
    ],
    modules: [
      { title: "Sketch & Model", topics: ["Parametric sketches", "Extrude, revolve, loft", "Timeline & parameters"] },
      { title: "Assemblies & Drawings", topics: ["Joints & motion", "Drawings & annotations", "Renderings"] },
      { title: "CAM", topics: ["Setup & tooling", "2D/3D toolpaths", "Post processing"] },
      { title: "Simulation & Generative", topics: ["Static stress basics", "Generative design intro", "Design alternatives"] },
      { title: "Project", topics: ["Product design + CAM", "Cloud share & review", "Portfolio"] },
    ],
    tools: ["Fusion 360", "Autodesk Viewer"],
    projects: [
      "Consumer product from sketch to CAM",
      "Assembly with motion study",
      "Generative bracket redesign",
    ],
    roles: ["Fusion 360 Designer", "Product Design Engineer", "CAD/CAM Engineer", "Prototype Engineer"],
    salary: "₹3 – 8 LPA",
    certification: "Preparation for Autodesk Fusion 360 certification, plus a NextGen Innovation certificate.",
  },
  "wiring-harness-creo": {
    seoTitle: "Wiring Harness Using Creo Course in Coimbatore & Trichy",
    metaDescription:
      "Creo Cabling & Wiring Harness Design course in Coimbatore, Trichy & online — connectors, cable routing and automotive electrical harness projects.",
    overview:
      "Specialise in wiring harness design with Creo Cabling. Learn harness structures, connectors, routing and flattened drawings used in automotive and industrial electrical design.",
    level: "Intermediate",
    eligibility: [
      "Mechanical / Automobile / Electrical graduates",
      "Creo users moving into cabling",
      "Harness design and electrical CAD aspirants",
    ],
    modules: [
      { title: "Harness Fundamentals", topics: ["Wire harness concepts", "Connectors & terminals", "Spec-driven design"] },
      { title: "Creo Cabling", topics: ["Harness part creation", "Wire & cable routing", "Bundles & branches"] },
      { title: "Logical & Physical", topics: ["Logical references", "Length reports", "Flattened harness"] },
      { title: "Documentation", topics: ["Harness drawings", "Nailboard layouts", "BOM & reports"] },
      { title: "Project", topics: ["Automotive harness project", "Drawing package", "Interview prep"] },
    ],
    tools: ["Creo Parametric", "Creo Cabling & Harness"],
    projects: [
      "Door / cockpit wiring harness model",
      "Flattened nailboard drawing",
      "Harness BOM and length report",
    ],
    roles: ["Wiring Harness Design Engineer", "Creo Cabling Engineer", "Electrical CAD Engineer", "Harness Detailer"],
    salary: "₹3.5 – 9 LPA",
    certification: "NextGen Innovation Wiring Harness Using Creo certificate.",
  },
  "gd-and-t": {
    seoTitle: "GD&T Course in Coimbatore & Trichy | Geometric Dimensioning & Tolerancing",
    metaDescription:
      "GD&T training in Coimbatore, Trichy & online — ASME Y14.5 / ISO GPS, datums, tolerances and drawing interpretation for design and quality roles.",
    overview:
      "Geometric Dimensioning and Tolerancing is essential for design, manufacturing and quality. Learn symbols, datums and feature control frames so you can read and apply industry drawings correctly.",
    level: "Beginner to Intermediate",
    eligibility: [
      "Mechanical / Production / Automobile graduates",
      "Design, quality and manufacturing engineers",
      "Inspectors and draughtsmen",
    ],
    modules: [
      { title: "GD&T Basics", topics: ["Why GD&T vs coordinate tolerancing", "Symbols overview", "Feature control frames"] },
      { title: "Datums", topics: ["Datum reference frames", "Datum targets", "Degrees of freedom"] },
      { title: "Form & Orientation", topics: ["Flatness, straightness, cylindricity", "Parallelism, perpendicularity", "Angularity"] },
      { title: "Location & Profile", topics: ["Position tolerance", "Concentricity & symmetry", "Profile of a surface"] },
      { title: "Application", topics: ["Drawing exercises", "Inspection planning", "Interview Q&A"] },
    ],
    tools: ["Engineering drawings", "Tolerance stack-up worksheets"],
    projects: [
      "Annotate a part with full GD&T",
      "Interpret a production drawing package",
      "Basic tolerance stack-up exercise",
    ],
    roles: ["Design Engineer", "Quality Engineer", "Manufacturing Engineer", "Drawing Checker"],
    salary: "₹3 – 8 LPA",
    certification: "NextGen Innovation GD&T certificate.",
  },
  "reverse-engineering": {
    seoTitle: "Reverse Engineering Course in Coimbatore & Trichy | 3D Scan to CAD",
    metaDescription:
      "Reverse Engineering course in Coimbatore, Trichy & online — 3D scanning, point clouds, CAD reconstruction and redesign for mechanical parts.",
    overview:
      "Learn to recreate CAD models from physical parts. Cover scanning workflows, mesh cleanup, surface/solid reconstruction and redesign for manufacturing and spare-part applications.",
    level: "Intermediate",
    eligibility: [
      "Mechanical / Automobile / Production graduates",
      "CAD designers and product engineers",
      "Quality and tooling professionals",
    ],
    modules: [
      { title: "RE Fundamentals", topics: ["When to reverse engineer", "Scan vs CMM", "Accuracy & datums"] },
      { title: "Scanning & Meshes", topics: ["Point cloud capture basics", "Mesh cleanup", "Alignment"] },
      { title: "CAD Reconstruction", topics: ["Surface fitting", "Solid modelling from scans", "Parametric rebuild"] },
      { title: "Inspection & Redesign", topics: ["Deviation analysis", "Design improvements", "Manufacturing prep"] },
      { title: "Project", topics: ["Scan-to-CAD part", "Comparison report", "Portfolio"] },
    ],
    tools: ["SolidWorks / Creo / Fusion 360", "Mesh / scan software"],
    projects: [
      "Reconstruct a mechanical casting",
      "Scan-to-CAD plastic cover",
      "Deviation inspection report",
    ],
    roles: ["Reverse Engineering Engineer", "CAD Reconstruction Specialist", "Product Design Engineer", "Metrology Engineer"],
    salary: "₹3.5 – 9 LPA",
    certification: "NextGen Innovation Reverse Engineering certificate.",
  },
  "ansys": {
    seoTitle: "ANSYS Course in Coimbatore & Trichy | FEA & CFD Training",
    metaDescription:
      "ANSYS training in Coimbatore, Trichy & online — structural, thermal and CFD analysis, meshing and result interpretation for CAE careers.",
    overview:
      "ANSYS is the industry standard for simulation. Learn FEA and introductory CFD — geometry prep, meshing, boundary conditions and result interpretation — through practical engineering projects.",
    level: "Intermediate to Advanced",
    eligibility: [
      "B.E. Mechanical, Automobile, Aerospace or Civil",
      "Design engineers moving into CAE",
      "M.Tech / analysis aspirants",
    ],
    modules: [
      { title: "FEA Fundamentals", topics: ["Stress, strain & failure theories", "ANSYS Workbench UI", "Units & materials"] },
      { title: "Structural Analysis", topics: ["Static structural", "Modal analysis", "Contacts & joints"] },
      { title: "Thermal & Combined", topics: ["Steady-state thermal", "Thermal stress", "Basic transient intro"] },
      { title: "Meshing & CFD Intro", topics: ["Mesh controls & quality", "Fluent / CFD basics", "Post-processing"] },
      { title: "Project", topics: ["Component structural study", "Report writing", "Interview prep"] },
    ],
    tools: ["ANSYS Workbench", "Mechanical", "Fluent (intro)"],
    projects: [
      "Bracket / chassis structural analysis",
      "Thermal stress on a housing",
      "Simple CFD duct / valve study",
    ],
    roles: ["CAE Engineer", "FEA Analyst", "Simulation Engineer", "Structural Analyst"],
    salary: "₹4 – 12 LPA",
    certification: "NextGen Innovation ANSYS certificate with analysis reports.",
  },
  "autocad-civil": {
    seoTitle: "AutoCAD Course for Civil Engineering in Coimbatore & Trichy",
    metaDescription:
      "AutoCAD for civil engineers in Coimbatore, Trichy & online — plans, sections, elevations and working drawings for site and approval submissions.",
    overview:
      "Learn AutoCAD tailored for civil and architectural drafting. Produce plans, sections, elevations and municipal-ready working drawings used by consultants and contractors.",
    level: "Beginner to Intermediate",
    eligibility: [
      "Diploma / B.E. Civil Engineering",
      "Architecture and interior students",
      "Site engineers and draughtsmen",
    ],
    modules: [
      { title: "AutoCAD Basics", topics: ["Draw & modify tools", "Layers & annotations", "Units & templates"] },
      { title: "Building Drafting", topics: ["Floor plans", "Sections & elevations", "Door / window schedules"] },
      { title: "Civil Details", topics: ["Staircase & toilet details", "Column layout", "Centre-line plans"] },
      { title: "Layouts & Plotting", topics: ["Layouts & scales", "Title blocks", "Plotting to PDF"] },
      { title: "Project", topics: ["Residential plan set", "Working drawings", "Portfolio"] },
    ],
    tools: ["AutoCAD", "PDF tools"],
    projects: [
      "G+1 residential plan set",
      "Detailing sheet for staircase",
      "Municipal submission drawings",
    ],
    roles: ["Civil CAD Draughtsman", "AutoCAD Civil Drafter", "Junior Architect Assistant", "Site Drawing Engineer"],
    salary: "₹2.5 – 6 LPA",
    certification: "Preparation for Autodesk AutoCAD certification, plus a NextGen Innovation certificate.",
  },
  "revit": {
    seoTitle: "Revit Course in Coimbatore & Trichy | BIM for Civil Engineers",
    metaDescription:
      "Revit training in Coimbatore, Trichy & online — Architecture & Structure modelling, documentation and BIM basics for civil and architecture careers.",
    overview:
      "Build BIM models in Autodesk Revit. Learn walls, floors, roofs, structural elements, sheets and schedules so you can deliver coordinated building models and drawings.",
    level: "Beginner to Advanced",
    eligibility: [
      "B.E. / Diploma Civil or Architecture",
      "AutoCAD users moving to BIM",
      "Draughtsmen and site engineers",
    ],
    modules: [
      { title: "Revit Basics", topics: ["BIM concepts", "Levels & grids", "Project browser"] },
      { title: "Architecture Modelling", topics: ["Walls, floors, roofs", "Doors, windows & components", "Stairs & railings"] },
      { title: "Structure Basics", topics: ["Columns, beams & foundations", "Structural views", "Reinforcement intro"] },
      { title: "Documentation", topics: ["Views & sheets", "Tags & schedules", "Printing & exporting"] },
      { title: "Project", topics: ["Complete building model", "Drawing sheets", "Interview prep"] },
    ],
    tools: ["Revit", "Navisworks Freedom", "AutoCAD"],
    projects: [
      "Residential BIM model with sheets",
      "Structural framing model",
      "Door / window schedule package",
    ],
    roles: ["Revit Modeller", "BIM Engineer", "Revit Architect / Structure Modeller", "BIM Draughtsman"],
    salary: "₹3 – 9 LPA",
    certification: "Preparation for Autodesk Certified Professional (Revit), plus a NextGen Innovation certificate.",
  },
  "sketchup": {
    seoTitle: "SketchUp Course in Coimbatore & Trichy | 3D Modelling Training",
    metaDescription:
      "SketchUp training in Coimbatore, Trichy & online — 3D building and interior modelling, components, scenes and presentation layouts.",
    overview:
      "SketchUp is the fastest way to turn concepts into 3D. Learn modelling, components, materials and scenes for architecture, interiors and client presentations.",
    level: "Beginner to Intermediate",
    eligibility: [
      "Civil, architecture and interior students",
      "Designers needing quick 3D concepts",
      "Anyone starting in architectural visualisation",
    ],
    modules: [
      { title: "SketchUp Essentials", topics: ["Push-pull modelling", "Groups & components", "Inference system"] },
      { title: "Building Modelling", topics: ["Floor plans to 3D", "Roofs & openings", "Site & terrain basics"] },
      { title: "Interiors & Materials", topics: ["Furniture components", "Materials & textures", "Styles"] },
      { title: "Presentation", topics: ["Scenes & animation", "LayOut basics", "Exports"] },
      { title: "Project", topics: ["Villa / apartment model", "Interior scene", "Portfolio"] },
    ],
    tools: ["SketchUp", "LayOut", "Extension Warehouse"],
    projects: [
      "Residential exterior model",
      "Living room interior scene",
      "Client presentation with LayOut",
    ],
    roles: ["SketchUp Modeller", "3D Visualiser", "Architectural Assistant", "Interior 3D Artist"],
    salary: "₹2.5 – 7 LPA",
    certification: "NextGen Innovation SketchUp certificate.",
  },
  "staad-pro": {
    seoTitle: "STAAD Pro Course in Coimbatore & Trichy | Structural Analysis Training",
    metaDescription:
      "STAAD Pro training in Coimbatore, Trichy & online — modelling, load analysis and RCC / steel design as per IS codes with placement support.",
    overview:
      "Analyse and design structures with STAAD Pro. Learn modelling, load cases, steel and RCC design to IS codes, and produce analysis reports used by structural consultancies.",
    level: "Intermediate",
    eligibility: [
      "B.E. / M.E. Civil or Structural Engineering",
      "Site engineers moving to design offices",
      "Freshers aiming for structural design roles",
    ],
    modules: [
      { title: "Modelling", topics: ["Geometry & properties", "Supports & releases", "Load definitions"] },
      { title: "Analysis", topics: ["Dead, live, wind & seismic", "Load combinations", "Result interpretation"] },
      { title: "Concrete Design", topics: ["IS 456 design", "Beams, columns & slabs", "Design briefs"] },
      { title: "Steel Design", topics: ["IS 800 design", "Members & connections intro", "Optimisation basics"] },
      { title: "Project", topics: ["Building frame analysis", "Design report", "Interview prep"] },
    ],
    tools: ["STAAD Pro", "Excel"],
    projects: [
      "G+3 RCC building analysis",
      "Steel shed design",
      "Seismic load case study",
    ],
    roles: ["Structural Design Engineer", "STAAD Pro Engineer", "Junior Structural Analyst", "Design Consultant"],
    salary: "₹3 – 9 LPA",
    certification: "NextGen Innovation STAAD Pro certificate.",
  },
  "tekla": {
    seoTitle: "Tekla Structures Course in Coimbatore & Trichy | Steel Detailing",
    metaDescription:
      "Tekla Structures training in Coimbatore, Trichy & online — steel modelling, connections, GA and fabrication drawings for detailing careers.",
    overview:
      "Tekla Structures is the global standard for steel detailing. Learn modelling, connections, numbering and fabrication drawings used by detailing offices and fabricators.",
    level: "Beginner to Advanced",
    eligibility: [
      "Civil / Mechanical diploma or degree holders",
      "Steel detailers and draughtsmen",
      "BIM professionals focusing on steel",
    ],
    modules: [
      { title: "Tekla Basics", topics: ["Interface & grids", "Parts & assemblies", "Views & planes"] },
      { title: "Steel Modelling", topics: ["Beams, columns & plates", "Bolts & welds", "Custom components intro"] },
      { title: "Connections", topics: ["System connections", "Moment & shear connections", "Clash checks"] },
      { title: "Drawings & Reports", topics: ["GA drawings", "Assembly & single-part drawings", "Reports & NC files"] },
      { title: "Project", topics: ["Industrial shed model", "Full drawing set", "Interview prep"] },
    ],
    tools: ["Tekla Structures", "Trimble Connect basics"],
    projects: [
      "Industrial steel building model",
      "Connection detailing package",
      "Fabrication drawing set",
    ],
    roles: ["Tekla Detailer", "Steel Detailing Engineer", "BIM Steel Modeller", "Fabrication Draughtsman"],
    salary: "₹3 – 9 LPA (higher for overseas detailing)",
    certification: "NextGen Innovation Tekla Structures certificate.",
  },
  "etabs": {
    seoTitle: "ETABS Course in Coimbatore & Trichy | Building Design Training",
    metaDescription:
      "ETABS training in Coimbatore, Trichy & online — multi-storey modelling, seismic analysis and RCC design as per IS 456 and IS 1893.",
    overview:
      "ETABS is preferred for multi-storey building design. Learn modelling, load patterns, seismic analysis and RCC design workflows used in structural design consultancies.",
    level: "Intermediate",
    eligibility: [
      "B.E. / M.E. Civil or Structural Engineering",
      "STAAD users expanding to ETABS",
      "Design office aspirants",
    ],
    modules: [
      { title: "ETABS Modelling", topics: ["Grids, storeys & templates", "Beams, columns, slabs & walls", "Meshing & diaphragms"] },
      { title: "Loads", topics: ["Dead & live loads", "Wind loads", "Seismic as per IS 1893"] },
      { title: "Analysis", topics: ["Load combinations", "Drift & P-delta", "Result review"] },
      { title: "Design", topics: ["IS 456 concrete design", "Shear walls", "Design reports"] },
      { title: "Project", topics: ["Multi-storey building", "Design summary", "Interview prep"] },
    ],
    tools: ["ETABS", "Excel", "SAFE (intro)"],
    projects: [
      "G+5 residential building analysis",
      "Seismic design case study",
      "Shear wall building model",
    ],
    roles: ["ETABS Design Engineer", "Structural Engineer", "Building Design Engineer", "Junior Structural Consultant"],
    salary: "₹3.5 – 10 LPA",
    certification: "NextGen Innovation ETABS certificate.",
  },
  "lumion": {
    seoTitle: "Lumion Course in Coimbatore & Trichy | Architectural Rendering",
    metaDescription:
      "Lumion training in Coimbatore, Trichy & online — materials, lighting, effects and photoreal walkthroughs for architecture presentations.",
    overview:
      "Create stunning architectural visualisations in Lumion. Import models, apply materials and lighting, and produce stills and walkthroughs that win client approvals.",
    level: "Beginner to Intermediate",
    eligibility: [
      "Architecture, civil and interior students",
      "3D modellers needing faster rendering",
      "Visualisation artists",
    ],
    modules: [
      { title: "Lumion Basics", topics: ["Importing models", "Scene setup", "Objects library"] },
      { title: "Materials & Lighting", topics: ["Material editing", "Sun & real skies", "Omni / spot lights"] },
      { title: "Effects", topics: ["Photo & movie effects", "Weather & landscape", "People & vehicles"] },
      { title: "Output", topics: ["Still rendering", "Walkthrough videos", "Export settings"] },
      { title: "Project", topics: ["Villa exterior renders", "Interior scene", "Client walkthrough"] },
    ],
    tools: ["Lumion", "SketchUp / Revit imports"],
    projects: [
      "Residential exterior photo set",
      "Interior living room render",
      "30-second project walkthrough",
    ],
    roles: ["Architectural Visualiser", "Lumion Artist", "3D Rendering Artist", "Presentation Designer"],
    salary: "₹3 – 8 LPA",
    certification: "NextGen Innovation Lumion certificate.",
  },
  "3ds-max": {
    seoTitle: "3ds Max Course in Coimbatore & Trichy | Architectural Visualisation",
    metaDescription:
      "3ds Max training in Coimbatore, Trichy & online — modelling, materials, lighting and cameras for architectural and interior visualisation.",
    overview:
      "Master 3ds Max for architecture and interiors. Learn modelling, materials, lighting and camera setups used by professional visualisation studios.",
    level: "Beginner to Intermediate",
    eligibility: [
      "Architecture, civil and interior graduates",
      "SketchUp users upgrading to 3ds Max",
      "Aspiring 3D visualisation artists",
    ],
    modules: [
      { title: "3ds Max Basics", topics: ["Interface & navigation", "Primitive & editable poly", "Transforms & modifiers"] },
      { title: "Architectural Modelling", topics: ["Walls, floors & openings", "Furniture modelling", "Import workflows"] },
      { title: "Materials & Lighting", topics: ["Material Editor", "Photometric lights", "Daylight systems"] },
      { title: "Cameras & Output", topics: ["Camera setup", "Animation basics", "Render setup"] },
      { title: "Project", topics: ["Interior scene", "Exterior building", "Portfolio renders"] },
    ],
    tools: ["3ds Max", "V-Ray / Arnold (intro)", "Photoshop"],
    projects: [
      "Apartment interior model",
      "Building exterior scene",
      "Furniture product model",
    ],
    roles: ["3ds Max Artist", "Architectural Visualiser", "Interior 3D Artist", "Modelling Artist"],
    salary: "₹3 – 9 LPA",
    certification: "NextGen Innovation 3ds Max certificate.",
  },
  "v-ray": {
    seoTitle: "V-Ray Course in Coimbatore & Trichy | Photoreal Rendering Training",
    metaDescription:
      "V-Ray training in Coimbatore, Trichy & online — materials, lighting and GI for photoreal architectural renders in 3ds Max or SketchUp.",
    overview:
      "V-Ray is the go-to renderer for architecture. Learn materials, lighting, global illumination and render settings to produce photoreal stills for clients and portfolios.",
    level: "Intermediate",
    eligibility: [
      "3ds Max or SketchUp users",
      "Architecture and interior visualisers",
      "Artists seeking photoreal output",
    ],
    modules: [
      { title: "V-Ray Setup", topics: ["V-Ray renderer settings", "Image sampler", "Colour mapping"] },
      { title: "Materials", topics: ["V-Ray materials", "Reflections & refraction", "Textures & maps"] },
      { title: "Lighting", topics: ["V-Ray sun & sky", "Dome & HDRI", "Artificial lights"] },
      { title: "GI & Cameras", topics: ["Brute force & irradiance", "V-Ray physical camera", "Denoiser"] },
      { title: "Project", topics: ["Photoreal interior", "Exterior daylight render", "Post-production tips"] },
    ],
    tools: ["V-Ray", "3ds Max / SketchUp", "Photoshop"],
    projects: [
      "Photoreal living room render",
      "Exterior villa at golden hour",
      "Product / material study sheet",
    ],
    roles: ["V-Ray Artist", "Architectural Renderer", "Visualisation Specialist", "3D Lighting Artist"],
    salary: "₹3 – 9 LPA",
    certification: "NextGen Innovation V-Ray certificate.",
  },
};
