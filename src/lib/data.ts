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
    "Full-stack developer building performant web apps and autonomous systems.",
  location: "East Lansing, MI",
  email: "dixit.siddhant22@gmail.com",
  github: "https://github.com/Siddhant-Dixit22",
  linkedin: "https://www.linkedin.com/in/siddhant-dixit22",
  resumeHref: "/Siddhant_Dixit_Resume_v8.pdf",
  availability: "Open to SWE internships for Summer 2026",
};

export const about = [
  "I'm a junior at Michigan State University studying Computer Science, with a focus on full-stack engineering, distributed systems, and applied algorithms.",
  "Lately I've been building a centralized LLM billing dashboard (IntelliPay), a marketplace for independent artists (OpenVerse), and drone path-planning software for MSU Unmanned Systems. I care about fast APIs, clear data models, and interfaces that feel obvious.",
];

export const education = {
  school: "Michigan State University",
  degree: "B.S. in Computer Science",
  location: "East Lansing, MI",
  graduation: "Expected May 2027",
  gpa: "3.71",
  coursework: [
    "Data Structures & Algorithms",
    "Computer Organization & Architecture",
    "Computer Systems",
    "Object-Oriented Software Design",
    "Information Management & the Cloud",
    "Linear Algebra",
    "Discrete Mathematics",
  ],
};

export const experience: Experience[] = [
  {
    role: "Freelance Full-Stack Developer",
    company: "OpenVerse",
    subtitle: "Client Project",
    location: "East Lansing, MI",
    start: "Sep 2025",
    end: "Present",
    highlights: [
      "Developed a full-stack marketplace connecting independent artists with buyers — artist profiles, product listings, and integrated payment processing.",
      "Built a responsive React frontend and Python FastAPI backend; designed 15+ RESTful endpoints for auth, user management, and Stripe payment integration.",
      "Architected a Supabase PostgreSQL database with Row Level Security to enforce role-based access for user data.",
      "Containerized the full-stack app with Docker to streamline local dev and deployment.",
    ],
  },
  {
    role: "Technology and Transformation Intern",
    company: "Deloitte",
    location: "Mumbai, Maharashtra",
    start: "May 2025",
    end: "Aug 2025",
    highlights: [
      "Built a client-facing presentation analyzing AI-integration feasibility in a pharmacy company's educational systems, delivering data-driven adoption recommendations.",
      "Analyzed 10+ Excel datasets covering server usage, cost data, VM utilization, and legacy system records across global locations.",
      "Synthesized server health logs and usage trends into a 50+ slide infrastructure report recommending server consolidation, VM optimization, and legacy migration.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "IntelliPay",
    tagline: "Centralized LLM billing dashboard",
    description:
      "Consolidates API usage across OpenAI, Anthropic, and other LLM providers with real-time cost tracking, usage-based billing, and detailed transaction logs.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Stripe", "Docker"],
    highlights: [
      "Real-time cost tracking across multiple LLM providers",
      "APIs under 300ms for standard ops; sub-second analytics via optimized Postgres indexing",
      "Stripe webhooks for subscription + usage-based billing",
      "CI/CD via GitHub Actions",
    ],
    start: "Oct 2025",
    end: "Present",
  },
  {
    name: "Flight Path Optimization",
    tagline: "MSU Unmanned Systems",
    description:
      "Autonomous flight path planner for drones over agricultural fields. Uses simulated annealing to generate optimized coverage paths while respecting battery constraints.",
    stack: ["Python", "C++", "Simulated Annealing"],
    highlights: [
      "~15% reduction in redundant coverage while guaranteeing full field traversal",
      "Battery monitoring + return-to-base logic prevents mid-flight depletion",
      "Tested across varied field geometries with ~15% flight-time savings vs. baseline",
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
    "AWS",
  ],
};

export const certifications = ["AWS Certified Cloud Practitioner"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
