export type CourseDetail = {
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
    overview:
      "SAP FICO is the most in-demand SAP functional module, used by thousands of companies to run their finance and accounting. This course takes you from SAP basics to end-to-end S/4HANA Finance configuration, with daily hands-on practice on a live server and a complete implementation project.",
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
    overview:
      "SAP MM powers procurement and inventory for manufacturing, retail and logistics companies. Learn the complete Procure-to-Pay cycle on S/4HANA with real business scenarios, integration with Finance and Sales, and an end-to-end project.",
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
    overview:
      "SAP SD manages how companies sell, ship and bill their products. Master the Order-to-Cash cycle on S/4HANA — from sales orders and pricing to delivery, billing and credit management — through practical scenarios and a live project.",
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
    overview:
      "SAP ABAP is the programming language behind every SAP system. Learn classic ABAP and modern ABAP on HANA — CDS views, AMDP and the RESTful Application Programming model — and build the reports, forms and enhancements companies need every day.",
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
    overview:
      "SAP SuccessFactors is SAP's cloud HR suite, adopted by companies worldwide as they move HR to the cloud. Learn to configure Employee Central, Recruiting, Onboarding and Performance modules and work on real HR transformation scenarios.",
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
    overview:
      "Data Science turns raw data into business decisions. Learn Python, SQL, statistics, visualisation and machine learning step by step, and build a portfolio of real-world projects that prove you can solve business problems with data.",
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
    overview:
      "Go deep into Artificial Intelligence — machine learning, deep learning, NLP and computer vision. Build and deploy real AI models with Python, TensorFlow and PyTorch, and learn the MLOps practices companies use to run AI in production.",
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
    overview:
      "Generative AI is changing how every business works. Learn to use ChatGPT, Gemini and Claude like a pro, design effective prompts, and build real AI applications — chatbots, RAG systems and AI agents — that automate business tasks.",
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
    overview:
      "Data Analytics is the fastest way into a data career. Master Advanced Excel, SQL and Power BI, learn to clean and analyse business data, and build dashboards that managers actually use to make decisions.",
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
    overview:
      "Become a complete web developer. Learn front-end with HTML, CSS, JavaScript and React, back-end with Node.js and Express, databases, APIs and cloud deployment — and build real applications you can show to employers.",
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
    overview:
      "Software Testing is one of the easiest and most stable entries into IT. Learn manual testing, Selenium automation with Java, API testing and Agile tools, and prepare for the ISTQB certification with real project experience.",
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
    overview:
      "Salesforce is the world's No. 1 CRM, and certified Salesforce professionals are in constant demand. Learn Salesforce administration, automation and development with Apex and Lightning Web Components, and prepare for official certifications.",
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
    overview:
      "Build Android and iOS apps from a single codebase with Flutter. Learn Dart, beautiful UI design, state management, Firebase and APIs, and publish your own apps to the Play Store.",
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
    overview:
      "Almost every company now runs on the cloud. Learn Amazon Web Services and Microsoft Azure hands-on — compute, storage, networking, security and cost management — and prepare for the most valuable cloud certifications.",
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
    overview:
      "DevOps engineers automate how software is built, tested and deployed — one of the highest-paid roles in IT. Learn Linux, Git, CI/CD, Docker, Kubernetes, Terraform and monitoring through real pipeline projects.",
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
    overview:
      "Cyber attacks are rising every year, and companies urgently need security professionals. Learn network security, ethical hacking, penetration testing and SOC operations in hands-on labs, and prepare for top security certifications.",
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
    overview:
      "Every business needs online customers. Learn SEO, Google Ads, social media marketing, content, email and analytics — and use AI tools to work faster. Run live campaigns with real budgets and build a portfolio of results.",
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
  "master-of-bim": {
    overview:
      "Building Information Modelling (BIM) is now the standard for construction and infrastructure projects worldwide. Master Revit for Architecture, Structure and MEP, Navisworks coordination and BIM standards, and work on real project models.",
    level: "Beginner to Advanced",
    eligibility: [
      "B.E. / Diploma in Civil, Mechanical or Electrical Engineering",
      "B.Arch graduates and architecture students",
      "Draughtsmen and site engineers moving into BIM",
    ],
    modules: [
      { title: "BIM Fundamentals", topics: ["BIM concepts & LOD", "ISO 19650 standards", "BIM execution plan"] },
      { title: "Revit Architecture", topics: ["Walls, floors, roofs & families", "Sheets, views & annotations", "Rendering & walkthroughs"] },
      { title: "Revit Structure", topics: ["Structural modelling", "Reinforcement detailing", "Structural documentation"] },
      { title: "Revit MEP", topics: ["HVAC modelling", "Plumbing & fire protection", "Electrical systems"] },
      { title: "Coordination", topics: ["Navisworks clash detection", "4D scheduling & quantity take-off", "BIM 360 / Autodesk Construction Cloud"] },
      { title: "Project & Portfolio", topics: ["Complete building BIM model", "Coordination report", "Portfolio & interview prep"] },
    ],
    tools: ["Revit", "Navisworks", "AutoCAD", "BIM 360", "Dynamo", "Enscape"],
    projects: [
      "Complete BIM model of a commercial building",
      "MEP clash detection and coordination report",
      "4D construction sequence simulation",
    ],
    roles: ["BIM Modeller", "BIM Coordinator", "Revit MEP Engineer", "BIM Engineer"],
    salary: "₹3.5 – 12 LPA (higher in Gulf & overseas roles)",
    certification: "Preparation for Autodesk Certified Professional (Revit), plus a NextGen Innovation Master of BIM certificate.",
  },
  "interior-designing": {
    overview:
      "Turn spaces into experiences. Learn design principles, space planning, materials and lighting, and master AutoCAD, SketchUp, 3ds Max and V-Ray to create photorealistic interiors for homes, offices and retail spaces.",
    level: "Beginner to Advanced",
    eligibility: [
      "Anyone who has completed 12th standard",
      "Architecture and civil students",
      "Creative professionals and home-business entrepreneurs",
    ],
    modules: [
      { title: "Design Fundamentals", topics: ["Elements & principles of design", "Colour theory", "Design styles"] },
      { title: "Space Planning", topics: ["Residential & commercial planning", "Ergonomics & anthropometrics", "Furniture layouts"] },
      { title: "Materials & Services", topics: ["Materials, finishes & costing", "Lighting design", "Plumbing & electrical basics"] },
      { title: "AutoCAD Drafting", topics: ["2D plans & elevations", "Working drawings", "Detailing"] },
      { title: "3D Visualisation", topics: ["SketchUp modelling", "3ds Max", "V-Ray & photorealistic rendering"] },
      { title: "Portfolio & Business", topics: ["Client presentation", "Site execution basics", "Portfolio & freelancing guidance"] },
    ],
    tools: ["AutoCAD", "SketchUp", "3ds Max", "V-Ray", "Photoshop", "Enscape"],
    projects: [
      "Complete 2BHK residential interior design",
      "Modern office interior with 3D renders",
      "Retail showroom concept and walkthrough",
    ],
    roles: ["Interior Designer", "3D Visualiser", "Interior Design Consultant", "Freelance Designer"],
    salary: "₹3 – 10 LPA (unlimited as a freelancer)",
    certification: "NextGen Innovation Interior Designing certificate with a professional design portfolio.",
  },
  "architectural-designing": {
    overview:
      "Learn the software and skills architectural firms use every day. Master AutoCAD drafting, Revit modelling, SketchUp, Lumion rendering and working drawings, and graduate with a portfolio that stands out.",
    level: "Beginner to Advanced",
    eligibility: [
      "B.Arch students and graduates",
      "Diploma / B.E. Civil engineers",
      "Draughtsmen who want to upskill",
    ],
    modules: [
      { title: "Architectural Drafting", topics: ["AutoCAD 2D drafting", "Plans, sections & elevations", "Building bye-laws basics"] },
      { title: "Revit Architecture", topics: ["3D building modelling", "Families & components", "Documentation & sheets"] },
      { title: "SketchUp Modelling", topics: ["Concept massing", "Detailed 3D models", "Site modelling"] },
      { title: "Rendering & Visualisation", topics: ["Lumion & Enscape", "V-Ray basics", "Walkthroughs & animations"] },
      { title: "Working Drawings", topics: ["Construction details", "Door, window & staircase details", "Municipal drawing sets"] },
      { title: "Portfolio & Project", topics: ["Residential & commercial projects", "Presentation boards with Photoshop", "Portfolio & interview prep"] },
    ],
    tools: ["AutoCAD", "Revit", "SketchUp", "Lumion", "Enscape", "Photoshop"],
    projects: [
      "Independent villa design with full working drawings",
      "Commercial complex 3D model and renders",
      "Architectural walkthrough video",
    ],
    roles: ["Architectural Designer", "Architectural Draughtsman", "3D Visualiser", "Revit Architect"],
    salary: "₹3 – 10 LPA",
    certification: "Preparation for Autodesk Certified Professional (AutoCAD / Revit), plus a NextGen Innovation certificate.",
  },
  "ui-ux-design": {
    overview:
      "UI/UX designers shape how millions of people use apps and websites. Learn user research, wireframing, visual design and prototyping in Figma, and build a case-study portfolio that gets you hired — no coding needed.",
    level: "Beginner to Advanced",
    eligibility: [
      "Graduates in any discipline, including non-IT",
      "Graphic designers and front-end developers",
      "Creative thinkers who enjoy solving problems",
    ],
    modules: [
      { title: "UX Foundations", topics: ["Design thinking", "User research & interviews", "Personas & journey maps"] },
      { title: "Information Architecture", topics: ["User flows", "Sitemaps & card sorting", "Wireframing"] },
      { title: "Visual Design", topics: ["Typography, colour & layout", "Iconography & imagery", "Accessibility"] },
      { title: "Figma Mastery", topics: ["Components & auto layout", "Design systems", "Interactive prototypes"] },
      { title: "Usability & Handoff", topics: ["Usability testing", "Design handoff to developers", "AI tools for designers"] },
      { title: "Portfolio & Career", topics: ["Mobile & web app case studies", "Portfolio on Behance", "Interview & whiteboard prep"] },
    ],
    tools: ["Figma", "FigJam", "Adobe XD", "Photoshop", "Illustrator", "Maze"],
    projects: [
      "Food delivery app redesign case study",
      "Banking dashboard design system",
      "E-commerce website UX research and prototype",
    ],
    roles: ["UI/UX Designer", "Product Designer", "UX Researcher", "Visual Designer"],
    salary: "₹4 – 15 LPA",
    certification: "NextGen Innovation UI/UX Design certificate with a portfolio of 3 case studies.",
  },
};
