export type Experience = {
  role: string;
  company: string;
  subtitle?: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  start: string;
  end: string;
  href?: string;
};

export const personal = {
  name: "Siddhant Dixit",
  title: "Computer Science @ Michigan State University",
  tagline:
    "Building reliable data platforms, applied ML systems, and polished web products.",
  location: "East Lansing, MI",
  email: "dixit.siddhant22@gmail.com",
  github: "https://github.com/Siddhant-Dixit22",
  linkedin: "https://www.linkedin.com/in/siddhant-dixit22",
  resumeHref: "/Siddhant_Dixit_Resume_v8.pdf",
  availability: "Open to software engineering and data-focused opportunities",
};

export const about = [
  "I'm a Computer Science student at Michigan State University focused on data engineering, applied machine learning, and full-stack software development.",
  "Most recently, I built a production data-quality toolkit and monitoring system at FordDirect. Outside of work, I'm building MarketLens, a news-aware stock forecasting platform. I care about dependable data systems, measurable model performance, and interfaces that make complex information clear.",
];

export const education = {
  school: "Michigan State University",
  degree: "B.S. in Computer Science",
  location: "East Lansing, MI",
  graduation: "Expected May 2027",
  gpa: "3.68",
  coursework: [
    "Data Structures & Algorithms",
    "Computer Organization & Architecture",
    "Computer Systems",
    "Object-Oriented Software Design",
    "Information Management & the Cloud",
    "Linear Algebra",
    "Discrete Mathematics",
    "Probability & Statistics",
    "Biometrics & Pattern Recognition",
    "Introduction to Machine Learning",
    "Artificial Intelligence",
    "AI Agents",
  ],
};

export const experience: Experience[] = [
  {
    role: "Data Services & IT Ops Intern",
    company: "FordDirect",
    location: "Dearborn, MI",
    start: "Jun 2026",
    end: "Aug 2026",
    highlights: [
      "Delivered a Databricks Labs DQX (PySpark) data-quality toolkit as a Python wheel across CJP and EID ingestion pipelines, loading governed rules, splitting valid and invalid records, and automatically provisioning Delta quarantine tables per source.",
      "Designed a universal rule framework with parameterized check templates, versioned rule resolution, and hash-based deduplication, enabling approved rules to validate arbitrary datasets without re-quarantining records.",
      "Built automated monitoring and alerting that sends daily Microsoft Teams Adaptive Card notifications from validation metrics, giving the platform team same-morning visibility into failing rules across monitored tables.",
      "Established feedback loops between quarantine outcomes and rule tuning, sustaining 95%+ classification model accuracy; also extended the internal DQX Studio UI and metadata-driven rule generator.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "OpenVerse",
    subtitle: "Client Project",
    location: "East Lansing, MI",
    start: "Sep 2025",
    end: "May 2026",
    highlights: [
      "Developed a full-stack marketplace connecting independent artists with buyers, including artist profiles, product listings, and integrated payment processing.",
      "Built a responsive React frontend and Python FastAPI backend; designed and documented 15+ RESTful endpoints for authentication, user management, and Stripe payment integration.",
      "Architected a Supabase PostgreSQL database with Row Level Security to enforce secure, role-based access for authentication and data management.",
      "Containerized the full-stack application with Docker to streamline local development and simplify deployment workflows.",
    ],
  },
  {
    role: "Technology and Transformation Intern",
    company: "Deloitte",
    location: "Mumbai, Maharashtra",
    start: "May 2025",
    end: "Aug 2025",
    highlights: [
      "Developed a client-facing presentation analyzing the feasibility of AI integration in a pharmacy company's educational systems, delivering data-driven adoption recommendations.",
      "Analyzed 10+ Excel datasets containing server usage metrics, cost data, virtual machine utilization, and legacy system records across global locations.",
      "Synthesized server health logs, usage trends, and cost data into a 50+ slide infrastructure report with recommendations for server consolidation, VM optimization, and legacy system migration.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "MarketLens",
    tagline: "News-aware stock forecasting platform",
    description:
      "Fuses quantitative time-series features with retrieval-augmented market context to generate probabilistic next-day and five-day trading signals for liquid equities.",
    stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "pgvector"],
    highlights: [
      "End-to-end ML pipeline for price and news ingestion, feature engineering, walk-forward validation, and backtesting against baseline strategies",
      "Evaluation reports directional accuracy, precision, recall, and calibration metrics across 15+ liquid equities",
      "Retrieval system embeds financial news, ranks evidence by ticker and date relevance, and grounds each prediction explanation in cited sources",
      "React dashboard with per-stock views, signal-confidence visualization, evidence-linked explanations, and interactive backtest results",
    ],
    start: "Jul 2026",
    end: "Present",
  },
  {
    name: "IntelliPay",
    tagline: "Centralized LLM billing dashboard",
    description:
      "Consolidates API usage across LLM providers with real-time cost tracking, subscription and usage-based billing, and detailed transaction logs.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Stripe", "Docker"],
    highlights: [
      "Real-time cost tracking across providers including OpenAI and Anthropic",
      "Optimized PostgreSQL indexing for standard API operations under 300ms and sub-second analytics queries",
      "Integrated Stripe payment processing and webhooks for subscription and usage-based billing",
      "Containerized the app and deployed it through a GitHub Actions CI/CD pipeline",
    ],
    start: "Oct 2025",
    end: "Present",
  },
  {
    name: "Flight Path Optimization",
    tagline: "MSU Unmanned Systems",
    description:
      "Autonomous flight-path planner for agricultural drone coverage using simulated annealing and battery-aware navigation.",
    stack: ["Python", "C++", "Simulated Annealing"],
    highlights: [
      "Designed a simulated-annealing path-finding algorithm that reduced redundant coverage by 15% while ensuring complete field traversal",
      "Integrated battery monitoring and return-to-base logic with real-time state management to prevent mid-flight depletion",
      "Simulated and tested paths across varied field geometries, reducing flight time by approximately 15% versus baseline algorithms",
    ],
    start: "Sep 2025",
    end: "Present",
  },
];

export const skills = {
  Languages: ["Python", "C/C++", "TypeScript", "JavaScript", "HTML/CSS", "Bash"],
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "Node.js",
    "Vite",
    "FastAPI",
    "Tailwind CSS",
  ],
  Databases: ["PostgreSQL", "Supabase", "MongoDB", "SQLite"],
  "Tools & Platforms": [
    "Docker",
    "Git",
    "GitHub Actions",
    "CI/CD Pipelines",
    "Postman",
    "PySpark",
    "Databricks",
    "Delta Lake",
    "Spark SQL",
  ],
};

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "IBM AI Engineering Professional Certificate",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
