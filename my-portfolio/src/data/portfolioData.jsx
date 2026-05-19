import { Brain, Globe, Layers, MessageSquare, Shield, Zap } from "lucide-react";

export const NAV_LINKS = ["About", "Skills", "Services", "Projects", "Experience", "Contact"];
export const CONTACT_EMAIL = "jaswanthshakthi@gmail.com";

export const SKILLS = {
  Frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "Component Architecture", level: 88 },
    { name: "Dashboard UI Systems", level: 92 },
    { name: "WebSocket Integration", level: 78 },
    { name: "App Router", level: 90 },
    { name: "Glassmorphism UI", level: 92 },
    { name: "Monaco Editor", level: 80 },
  ],
  Backend: [
    { name: "Python", level: 88 },
    { name: "FastAPI", level: 90 },
    { name: "REST API Development", level: 88 },
    { name: "JWT Authentication", level: 85 },
    { name: "Async Programming", level: 80 },
    { name: "Middleware Architecture", level: 82 },
    { name: "WebSocket Systems", level: 78 },
    { name: "Microservices Architecture", level: 80 },
    { name: "API Security", level: 75 },
    { name: "File Upload Systems", level: 85 },
    { name: "Background Tasks", level: 75 },
  ],
  Databases: [
    { name: "PostgreSQL", level: 82 },
    { name: "MySQL", level: 80 },
    { name: "Supabase", level: 92 },
    { name: "Redis", level: 68 },
    { name: "Database Design", level: 80 },
    { name: "Signed URL Systems", level: 84 },
    { name: "Authentication Systems", level: 88 },
  ],
  "AI & Tools": [
    { name: "Prompt Engineering", level: 92 },
    { name: "LLM Fine-Tuning", level: 84 },
    { name: "LoRA / QLoRA", level: 85 },
    { name: "Ollama Integration", level: 90 },
    { name: "Local LLM Deployment", level: 85 },
    { name: "Phi-3 Mini", level: 88 },
    { name: "llama.cpp", level: 75 },
    { name: "GGUF Models", level: 78 },
    { name: "RAG Systems", level: 72 },
    { name: "AI Chat Systems", level: 90 },
    { name: "AI Inference Optimization", level: 78 },
    { name: "AI Workflow Automation", level: 86 },
    { name: "Dataset Processing", level: 88 },
  ],
  "Data & Analytics": [
    { name: "Pandas", level: 78 },
    { name: "Data Processing Pipelines", level: 80 },
    { name: "Dataset Preview Systems", level: 90 },
    { name: "Analytics Dashboard Development", level: 88 },
    { name: "Search & Pagination Systems", level: 90 },
    { name: "CSV Processing", level: 85 },
    { name: "Structured Data Handling", level: 84 },
  ],
  Automation: [
    { name: "n8n", level: 88 },
    { name: "AI Workflow Automation", level: 86 },
    { name: "API Automation", level: 84 },
    { name: "Webhook Integration", level: 82 },
    { name: "Background Job Systems", level: 75 },
    { name: "Event-Based Workflows", level: 78 },
  ],
  "DevOps": [
    { name: "Vercel", level: 90 },
    { name: "Git & GitHub", level: 88 },
    { name: "Docker", level: 70 },
    { name: "CI/CD Basics", level: 68 },
    { name: "Environment Configuration", level: 88 },
    { name: "API Deployment", level: 85 },
    { name: "Local AI Serving", level: 84 },
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
