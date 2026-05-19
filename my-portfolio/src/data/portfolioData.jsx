import { Brain, Globe, Layers, MessageSquare, Shield, Zap } from "lucide-react";

export const NAV_LINKS = ["About", "Skills", "Services", "Projects", "Experience", "Contact"];
export const CONTACT_EMAIL = "jaswanthshakthi@gmail.com";

export const SKILLS = {
  Frontend: [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "Three.js / WebGL", level: 70 },
  ],
  Backend: [
    { name: "Node.js / Express", level: 90 },
    { name: "Python / FastAPI", level: 85 },
    { name: "PostgreSQL", level: 85 },
    { name: "Redis / MongoDB", level: 80 },
    { name: "GraphQL", level: 75 },
    { name: "Docker / K8s", level: 78 },
  ],
  "AI & Tools": [
    { name: "LangChain / LLMs", level: 88 },
    { name: "OpenAI API", level: 92 },
    { name: "Hugging Face", level: 80 },
    { name: "Vector DBs", level: 82 },
    { name: "AWS / Vercel", level: 85 },
    { name: "CI/CD Pipelines", level: 80 },
  ],
};

export const SERVICES = [
  {
    icon: <Layers size={28} />,
    title: "Full-Stack Development",
    desc: "End-to-end product engineering — from pixel-perfect frontends to robust backend APIs and cloud infrastructure.",
    accent: "from-violet-500 to-purple-600",
  },
  {
    icon: <Brain size={28} />,
    title: "AI Integration",
    desc: "Custom LLM workflows, RAG pipelines, and AI-powered features embedded seamlessly into your product.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Globe size={28} />,
    title: "SaaS Architecture",
    desc: "Scalable multi-tenant architectures designed for growth, with auth, billing, and analytics built in.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: <Zap size={28} />,
    title: "Performance Engineering",
    desc: "Core Web Vitals optimization, edge rendering, and infrastructure tuning for sub-100ms load times.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: <Shield size={28} />,
    title: "API Design",
    desc: "Clean, versioned REST and GraphQL APIs with OpenAPI specs, rate limiting, and developer-first DX.",
    accent: "from-rose-500 to-pink-500",
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Technical Consulting",
    desc: "Architecture reviews, tech-stack decisions, and fractional CTO services for early-stage startups.",
    accent: "from-violet-400 to-fuchsia-500",
  },
];

export const PROJECTS = [
  {
    title: "Nexus AI Platform",
    desc: "A production-grade AI copilot SaaS with RAG pipelines, streaming responses, and team workspaces. Built for scale — 50k+ active users.",
    tags: ["Next.js", "LangChain", "PostgreSQL", "Stripe"],
    featured: true,
    color: "violet",
  },
  {
    title: "FlowBoard",
    desc: "Real-time collaborative project management tool with AI task prioritization and smart deadline prediction.",
    tags: ["React", "Socket.io", "Redis", "FastAPI"],
    featured: false,
    color: "blue",
  },
  {
    title: "DataForge CLI",
    desc: "Developer CLI for synthetic data generation using LLMs — schema-aware, type-safe, blazing fast.",
    tags: ["Python", "OpenAI", "Typer", "Pydantic"],
    featured: false,
    color: "emerald",
  },
  {
    title: "Pulse Analytics",
    desc: "Open-source web analytics alternative with privacy-first design, edge-first ingestion, and beautiful dashboards.",
    tags: ["Next.js", "ClickHouse", "Cloudflare", "D3"],
    featured: false,
    color: "amber",
  },
];

export const EXPERIENCE = [
  {
    role: "flo19 API Workflow ",
    company: "API Workflow & Monitoring Platform",
    period: "2024 - Present",
    desc: "Building a modern developer platform for API workflows, realtime monitoring, deployment tracking, and collaborative engineering experiences.",
  },
  {
    role: "AI Portfolio Assistant",
    company: "Conversational AI System",
    period: "2025 - Present",
    desc: "Creating an interactive AI assistant integrated into a modern portfolio experience to showcase projects, technical skills, and intelligent workflows.",
  },
  {
    role: "Flo19 Insights",
    company: "AI-Powered Analytics SaaS",
    period: "2025 - Present",
    desc: "Developing an AI-native analytics platform focused on intelligent data workflows, dataset management, collaborative dashboards, and scalable insight systems.",
  },
  {
    role: "Freelance & Experimental Projects",
    company: "Full-Stack Development",
    period: "2023 - Present",
    desc: "Designing and developing modern SaaS applications, AI-powered systems, responsive dashboards, and scalable web experiences using contemporary full-stack technologies.",
  },
];

export const TESTIMONIALS = [
  {
    text: "Exceptionally rare to find someone who can move seamlessly between product thinking and deep technical execution. Delivered our MVP in 6 weeks — on spec, on time.",
    name: "Alex Morgan",
    role: "CEO, Founder",
    company: "Stealth Startup",
    initials: "AM",
  },
  {
    text: "The AI integration work was transformative. Our support resolution time dropped 70% after the custom LLM workflow went live. Phenomenal attention to edge cases.",
    name: "Jordan Wei",
    role: "CTO",
    company: "Series B SaaS",
    initials: "JW",
  },
  {
    text: "Best technical collaborator I've worked with. Communicates complex tradeoffs clearly, writes clean maintainable code, and never ships without proper tests.",
    name: "Sam Patel",
    role: "VP Engineering",
    company: "Fintech Scale-up",
    initials: "SP",
  },
];

export const STATS = [
  { value: "2+", label: "Years Of Experience with real time projects." },
  { value: "15+", label: "Projects Shipped" },
  { value: "10+", label: "Happy Clients" },
  { value: "99%", label: "Satisfaction Rate" },
];
