export const personalInfo = {
  name: "Krati Jadaun",
  firstName: "Krati",
  brandName: "Krati Jadaun",
  title: "Data Analyst & Business Systems Analyst",
  location: "Davenport, FL",
  phone: "(603) 438-6344",
  emails: {
    primary: "kratijadaun@gmail.com",
  },
  summary:
    "Data Analyst with 3+ years in logistics, higher education, and hospitality. Builds SQL and Python ETL pipelines, governed data models, and automated business intelligence dashboards in Tableau, Power BI, and Incorta that cut manual reporting and speed decisions.",
  resumeUrl: "/Krati_Jadaun_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/krati1108",
  linkedin: "https://www.linkedin.com/in/kratij1",
};

export const heroContent = {
  greeting: "Hi, I'm Krati",
  titleHighlight: "Data Analyst & Business Systems Analyst",
  subtitle:
    "I turn complex data into clear dashboards, reliable models, and decisions that move businesses forward.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:kratijadaun@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Krati%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards%2C",
  },
  ctaResume: { text: "Download Resume", href: "/Krati_Jadaun_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Krati Jadaun</span>. I am a data and business systems analyst based in Davenport, Florida, specializing in analytics automation, business intelligence, statistical modeling, and translating operational questions into measurable outcomes.`,
  techStack: ["SQL", "Python", "Power BI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here’s how I turn business questions into measurable results",
  description:
    "I combine analytical rigor, business context, and clear communication to deliver trustworthy insights.",
  cards: [
    {
      number: "01",
      title: "Define",
      text: "Align with stakeholders on the business question, requirements, success criteria, and the KPIs that matter.",
    },
    {
      number: "02",
      title: "Prepare",
      text: "Query, clean, integrate, and validate cross-functional data so every downstream insight starts from a reliable foundation.",
    },
    {
      number: "03",
      title: "Analyze",
      text: "Apply exploratory analysis, statistical testing, segmentation, forecasting, and machine learning to uncover patterns and drivers.",
    },
    {
      number: "04",
      title: "Communicate",
      text: "Deliver intuitive dashboards and decision-ready recommendations that connect analytical findings to business action.",
    },
  ],
  endText: "Insight to impact!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Analysis & BI",
      skills: ["EDA", "Time Series", "Predictive Analytics", "Tableau", "Power BI", "Excel", "VBA", "Incorta"],
    },
    {
      title: "Data & Querying",
      skills: ["SQL", "MySQL", "MongoDB", "Snowflake", "Data Warehousing", "Data Pipelines"],
    },
    {
      title: "Python & ML",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "Matplotlib"],
    },
    {
      title: "Statistics & Modeling",
      skills: ["A/B Testing", "Hypothesis Testing", "Regression", "Classification", "K-means", "Cross-Validation", "Feature Engineering"],
    },
    {
      title: "Platforms & Tools",
      skills: ["Git", "Flask", "Docker", "Azure Cloud", "Linux", "JIRA", "SAP", "Salesforce"],
    },
    {
      title: "Domain Expertise",
      skills: ["Logistics & Supply Chain", "Extensiv WMS/OMS", "Blue Yonder WMS", "CRM Analytics", "KPI Frameworks", "Funnel Analysis"],
    },
  ],
};

export const projects = [
  {
    id: "logistics-analysis",
    number: "01",
    badge: "Flagship Project",
    title: "Logistics Performance Analysis Dashboard",
    description:
      "A unified logistics analytics dashboard examining 15K+ shipments, 33.72M miles, delivery-time variance, route performance, and cutoff compliance. It gave leadership visibility into 83.54% on-time deliveries and 16.46% delayed shipments to support operational decision-making.",
    techTags: ["Data Analytics", "Dashboard Design", "Logistics", "KPI Frameworks", "Data Visualization"],
    image: "/assets/projects/logistics-analysis.png",
    imageAlt: "Logistics performance dashboard showing shipment, distance, delivery, route, and cutoff metrics",
    links: {},
    isFlagship: true,
  },
  {
    id: "loan-approval",
    number: "02",
    badge: "Machine Learning",
    title: "Loan Approval Prediction App",
    description:
      "A Streamlit application that predicts loan approval status from financial and behavioral inputs using a trained Random Forest classifier and a reproducible Python machine-learning workflow.",
    techTags: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Random Forest", "Joblib"],
    image: "/assets/projects/loan-approval-prediction.png",
    imageAlt: "Loan Approval Prediction App documentation and usage interface",
    links: {},
    isFlagship: false,
  },
];

export const experienceList = [
  {
    organization: "RealCold · Lakeland, FL",
    role: "Business Systems Analyst II (Data Analyst)",
    duration: "Jan 2026 — Present",
    highlights: [
      "Engineered SQL and Python ETL pipelines across 5+ sources — Extensiv WMS/OMS, Blue Yonder WMS, Sage, SharePoint, and inventory snapshots — reducing manual reporting by 20% and improving reporting accuracy by 10%.",
      "Spearheaded foundational data ecosystem and governance across 5+ teams by defining source-to-KPI mappings, dataset grain, joins, validation rules, and ownership for 10+ logistics KPIs.",
      "Architected live, automated Incorta dashboards for occupancy, pallet flow, throughput, delayed deliveries, e-commerce orders, and revenue, expanding live KPI coverage by 30% for 20+ operational and executive stakeholders.",
      "Managed the full analytics lifecycle for 5+ production dashboards, from requirements and data cleaning through QA, user acceptance testing (UAT), deployment, and adoption, raising SOP adherence by 15% and saving 45 hours weekly.",
      "Translated ad hoc requests from 20+ stakeholders into site, customer, and unit-level analyses that supported labor and pricing decisions across 5 functions and reduced turnaround time by 20%.",
    ],
    tech: ["SQL", "Python", "Incorta", "ETL", "Data Governance"],
  },
  {
    organization: "Northeastern University · Boston, MA",
    role: "Data Analyst",
    duration: "Jan 2025 — May 2025",
    highlights: [
      "Built SQL cohort datasets and segmentation logic, reducing analyst effort by 42% and improving engagement forecast accuracy by 25%.",
      "Automated Python EDA and recurring analysis workflows using Pandas, reducing the reporting cycle from 6 hours to 45 minutes.",
      "Designed interactive Tableau dashboards using a STAR schema with 80+ tables to analyze 100+ NAICS sectors and strengthen business-driven storytelling.",
      "Conducted variance analysis and KPI reporting that uncovered $5.3M in funding gaps, informing a 17% budget reallocation across priority programs.",
      "Performed Python statistical and ad hoc analysis with data cleaning and validation, identifying $430K in contractor savings and improving resource planning.",
    ],
    tech: ["SQL", "Python", "Pandas", "Tableau", "STAR Schema"],
  },
  {
    organization: "RadicalX · New York, NY",
    role: "Data Scientist",
    duration: "Jul 2024 — Nov 2024",
    highlights: [
      "Developed and evaluated 15 machine learning models through 10+ experiments using Python, Scikit-learn, and XGBoost, improving model performance by 15% and user satisfaction by 20%.",
      "Optimized 7 fine-tuned models using Bayesian optimization and cross-validation, improving generalization on holdout data and cutting processing time by 25%.",
      "Streamlined end-to-end model deployment using Git, Flask, and Docker within a 5-person team, reducing deployment time by 30% and improving production reproducibility.",
      "Collaborated with AI researchers and engineering teams to refine GPT-4 agent behavior and inference workflows, improving model precision and system responsiveness by 10%.",
      "Executed large-scale A/B testing and causal inference analysis that selected the production model, delivering performance gains of 10–18% across key user segments.",
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "Flask", "Docker"],
  },
  {
    organization: "Grand Excelsior Hotels · Dubai, UAE",
    role: "Data Analyst",
    duration: "Jun 2019 — Apr 2020",
    highlights: [
      "Built ETL reporting pipelines across 3 operational sources, integrating CRM, booking, and service log data while reducing reconciliation time by 30%.",
      "Analyzed 10K+ guest interactions through data cleaning, validation, and root cause analysis, improving the accuracy of operational reporting across 5+ properties.",
      "Segmented 50K+ guest profiles using K-Means clustering and cohort analysis, generating targeted customer insights that increased campaign effectiveness by 11%.",
      "Delivered Power BI dashboards across 5+ properties, consolidating occupancy, turnaround, and satisfaction KPIs while reducing manual reporting by 40%.",
      "Produced recurring KPI analysis across 15+ operational metrics for non-technical stakeholders, reducing guest check-in delays by 20%; named Employee of the Month four times.",
    ],
    tech: ["ETL", "Power BI", "K-Means", "Cohort Analysis", "CRM"],
  },
];

export const education = {
  degree: "Master of Professional Studies (MPS) in Analytics",
  institution: "Northeastern University",
  location: "Boston, MA",
  gpa: null,
  duration: "Jul 2023 — May 2025",
  coursework: [
    "Machine Learning",
    "Algorithms",
    "Data Management & Warehousing",
    "BI & Data Visualization",
  ],
};

export const certificates = {
  featured: [],
  documentUrl: null,
};

export const footerContent = {
  taglines: [
    "Data Analytics & Business Intelligence",
    "SQL · Python · Tableau · Power BI",
    "Insights that drive decisions",
  ],
  credential: "MPS in Analytics · Northeastern University",
  copyright: `© ${new Date().getFullYear()} Krati Jadaun | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
