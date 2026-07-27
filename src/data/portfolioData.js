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
    "Data Analyst with 3+ years of experience transforming complex, cross-functional datasets into actionable insights and automated reporting. Skilled in SQL, Python, Tableau, Power BI, and Snowflake, with experience across logistics, e-commerce, CRM, and product analytics.",
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
    role: "Business Systems Analyst II & Data Analyst",
    duration: "Jan 2025 — Present",
    highlights: [
      "Automated Python and SQL pipelines, reducing manual reporting time by 20%.",
      "Built Tableau and Power BI dashboards for throughput, inventory, labor allocation, and pricing decisions.",
      "Integrated an AI-enabled validation layer, increasing data availability 30% and reporting accuracy 10%.",
      "Translated questions from 5+ teams into logistics KPIs and presented insights to 20+ stakeholders.",
    ],
    tech: ["Python", "SQL", "Tableau", "Power BI", "Logistics Analytics"],
  },
  {
    organization: "Northeastern University · Boston, MA",
    role: "Data Analyst",
    duration: "Jan 2025 — Mar 2025",
    highlights: [
      "Delivered Tableau dashboards surfacing inefficiencies across 100+ NAICS sectors.",
      "Used Python analysis to help redefine high-margin segments and improve pricing 15–20%.",
      "Led EDA that improved regional performance planning by approximately 18%.",
      "Built SQL cohort segmentation that improved engagement forecasting accuracy by 25%.",
    ],
    tech: ["Tableau", "Python", "SQL", "EDA", "Cohort Analysis"],
  },
  {
    organization: "Radical AI · New York, NY",
    role: "Data Scientist Intern",
    duration: "Jul 2024 — Nov 2024",
    highlights: [
      "Built scikit-learn and XGBoost workflows that improved decision accuracy by 15%+.",
      "Improved model reliability by 20% with Bayesian optimization and cross-validation.",
      "Used A/B testing and causal inference to identify 10–18% lift across key segments.",
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "A/B Testing", "Bayesian Optimization"],
  },
  {
    organization: "Grand Excelsior · Dubai",
    role: "Business Systems Analyst",
    duration: "Sep 2019 — Feb 2020",
    highlights: [
      "Built Power BI reporting for 5+ properties and cut manual reporting time by 40%.",
      "Segmented 50K+ guest profiles, improving campaign effectiveness by 11%.",
      "Analyzed 10K+ service interactions and identified drivers of a 13% satisfaction increase.",
      "Unified CRM, booking, and service-log data, reducing reconciliation time by 30%.",
    ],
    tech: ["Power BI", "K-means", "Regression", "CRM Analytics", "Data Integration"],
  },
];

export const education = {
  degree: "Master of Science in Analytics",
  institution: "Northeastern University",
  location: "Boston, MA",
  gpa: "3.7 / 4.0",
  duration: "Jul 2023 — Mar 2025",
  coursework: [
    "Big Data Systems",
    "Predictive Analytics",
    "Data Visualization",
    "Data Warehousing & SQL",
    "Business Intelligence",
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
  credential: "M.S. Analytics · GPA 3.7 / 4.0",
  copyright: `© ${new Date().getFullYear()} Krati Jadaun | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
