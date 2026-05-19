import { motion } from "framer-motion";
import { STATS } from "../data/portfolioData";
import GlowOrb from "../components/GlowOrb";
import RevealSection from "../components/RevealSection";

export default function About() {
  return (
    <section id="about" className="section-panel relative py-28 overflow-hidden">
      <GlowOrb className="w-[400px] h-[400px] bg-violet-600/8 -right-20 top-10" />
      <div className="section-inner max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <span className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Engineer who thinks like a{" "}
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                product founder.
              </span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-6">
               I specialize in building production-grade SaaS platforms, AI-powered applications, and modern developer tools — combining scalable backend systems, clean frontend experiences, and intelligent AI integrations into real-world products.
            </p>
            <p className="text-white/35 text-base leading-relaxed mb-8">
              My focus is on creating fast, scalable, and user-centered applications using modern technologies like React, Next.js, FastAPI, Tailwind CSS, and AI-driven workflows. I enjoy transforming ideas into polished digital experiences that are built for performance, growth, and long-term maintainability.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Open to contracts", "Remote-first", "Startup-ready"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/8 text-white/50 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300 group"
                >
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/35">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-5 rounded-2xl border border-white/5 bg-white/2">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Primary Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Python", "PostgreSQL", "LangChain", "AWS", "Docker", "Tailwind"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono bg-violet-500/10 border border-violet-500/20 text-violet-300 rounded-md"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────
