import {
  Search,
  Lightbulb,
  Rocket,
  BarChart2,
  Code2,
  Cpu,
  Globe,
  Layers,
  Sparkles,
  BarChart3,
  Palette,
  Shield,
  Zap,
  Terminal,
  Database,
  Smartphone,
  XIcon,
  Linkedin,
  Github,
  Youtube,
} from "lucide-react";
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const steps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We start by deeply understanding your goals, constraints, and users. Every decision flows from this foundation.",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Architecture",
    description:
      "We design the technical blueprint — stack selection, system design, and a realistic timeline with clear milestones.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Build & Ship",
    description:
      "Iterative sprints with weekly demos. You see real progress constantly — not just promises and presentations.",
  },
  {
    step: "04",
    icon: BarChart2,
    title: "Grow & Scale",
    description:
      "Post-launch we monitor metrics, optimise performance, and iterate rapidly based on real user data.",
  },
];

export const services = [
  {
    icon: Code2,
    title: "Product Engineering",
    description:
      "Full-stack development from MVP to scale. React, Next.js, Node.js — we ship fast and right.",
    tag: "Core",
  },
  {
    icon: Cpu,
    title: "AI & ML Integration",
    description:
      "LLM pipelines, RAG systems, and custom model fine-tuning embedded directly into your product.",
    tag: "Trending",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description:
      "Premium UI/UX design with meticulous attention to typography, motion, and component architecture.",
    tag: "Creative",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "High-performance web apps with SEO, accessibility, and enterprise-grade reliability baked in.",
    tag: "Popular",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with React Native or native iOS/Android — fluid, fast, and polished.",
    tag: "Growing",
  },
  {
    icon: Database,
    title: "Data Architecture",
    description:
      "Schema design, data pipelines, real-time systems, and cloud-native databases that scale.",
    tag: "Infra",
  },
  {
    icon: Terminal,
    title: "DevOps & CI/CD",
    description:
      "Automated deployments, Kubernetes, Docker, and IaC with zero-downtime release strategies.",
    tag: "Infra",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "SOC2, GDPR, HIPAA-ready engineering. Security-first architecture from day one.",
    tag: "Enterprise",
  },
  {
    icon: Sparkles,
    title: "Rapid Prototyping",
    description:
      "Figma-to-code in days. We turn your ideas into testable, investor-ready prototypes at speed.",
    tag: "Fast",
  },
  {
    icon: BarChart3,
    title: "Analytics & Metrics",
    description:
      "Custom dashboards, event tracking, and behavioural analytics to understand and grow your users.",
    tag: "Data",
  },
  {
    icon: Layers,
    title: "API & Integrations",
    description:
      "RESTful and GraphQL APIs, webhooks, third-party integrations—connecting your entire stack.",
    tag: "Backend",
  },
  {
    icon: Zap,
    title: "Performance Optimisation",
    description:
      "Core Web Vitals, bundle optimisation, caching strategies — sub-second load times guaranteed.",
    tag: "Speed",
  },
];

export const stats = [
  {
    value: "50+",
    label: "Products Shipped",
    description: "End-to-end, production-ready",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    description: "Across all engagements",
  },
  {
    value: "3x",
    label: "Avg. Time-to-Market",
    description: "Faster than industry average",
  },
  {
    value: "$0",
    label: "Technical Debt",
    description: "We code it right, first time",
  },
];

export const clients = [
  "Google",
  "Stripe",
  "Notion",
  "Linear",
  "Vercel",
  "Supabase",
  "Figma",
  "GitHub",
];

export const projects = [
  {
    id: "01",
    title: "NeuroCommerce",
    category: "AI · E-commerce",
    description:
      "An AI-powered product recommendation engine that lifted conversion rates by 340% for a mid-market retailer.",
    tech: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
    year: "2024",
    accent: "#ffffff",
  },
  {
    id: "02",
    title: "FlowDesk",
    category: "SaaS · Productivity",
    description:
      "A real-time collaborative workspace tool with AI writing assistance used by 12,000+ daily active users.",
    tech: ["React", "Rust", "WebSockets", "Redis"],
    year: "2024",
    accent: "#ffffff",
  },
  {
    id: "03",
    title: "DataForge",
    category: "Analytics · Dashboard",
    description:
      "Custom analytics platform processing 500M events/day with sub-100ms query response times.",
    tech: ["ClickHouse", "Go", "React", "Grafana"],
    year: "2023",
    accent: "#ffffff",
  },
  {
    id: "04",
    title: "Orbis Health",
    category: "HealthTech · Mobile",
    description:
      "HIPAA-compliant telehealth platform connecting 50,000+ patients with licensed practitioners.",
    tech: ["React Native", "Node.js", "AWS", "FHIR"],
    year: "2023",
    accent: "#ffffff",
  },
  {
    id: "05",
    title: "PulseMarket",
    category: "Fintech · Trading",
    description:
      "Real-time financial data aggregator with ML-powered signal detection for retail investors.",
    tech: ["WebAssembly", "Rust", "TensorFlow", "D3.js"],
    year: "2022",
    accent: "#ffffff",
  },
  {
    id: "06",
    title: "Starboard CMS",
    category: "Open Source · CMS",
    description:
      "A headless CMS built for developers — 8,000+ GitHub stars, used by studios worldwide.",
    tech: ["TypeScript", "GraphQL", "Prisma", "Next.js"],
    year: "2022",
    accent: "#ffffff",
  },
];

export const team = [
  {
    initials: "VK",
    name: "Vikram Kumar",
    role: "Founder & Lead Engineer",
    bio: "10+ years building products at scale. Previously at Google, Stripe. Obsessed with clean code and elegant systems.",
    skills: ["Architecture", "React", "Rust", "AI/ML"],
  },
  {
    initials: "SL",
    name: "Sara Lin",
    role: "Head of Design",
    bio: "Ex-Figma design systems lead. Creates interfaces that feel inevitable — where form and function become one.",
    skills: ["UI/UX", "Motion", "Brand", "Design Systems"],
  },
  {
    initials: "AJ",
    name: "Aryan Joshi",
    role: "ML Engineer",
    bio: "PhD in Computer Vision. Transforms cutting-edge research into production ML systems that actually work.",
    skills: ["PyTorch", "LLMs", "RAG", "MLOps"],
  },
  {
    initials: "MN",
    name: "Maya Nair",
    role: "Backend Lead",
    bio: "Distributed systems expert. Has designed APIs serving billions of requests. Reliability is her religion.",
    skills: ["Go", "Kafka", "Kubernetes", "PostgreSQL"],
  },
];

export const footerLinks = {
  Build: [
    "Product Engineering",
    "AI & ML Integration",
    "Design Systems",
    "Mobile Development",
    "API & Integrations",
  ],
  Company: ["About VikLabs", "Selected Work", "Open Source", "Careers", "Blog"],
  Resources: ["Documentation", "Case Studies", "Tech Radar", "Newsletter"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export const socials = [
  { icon: XIcon, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];
