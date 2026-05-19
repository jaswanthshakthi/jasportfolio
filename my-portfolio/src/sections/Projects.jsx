import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Play, Star, Terminal } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
import GlowOrb from "../components/GlowOrb";
import RevealSection from "../components/RevealSection";

const PROJECT_COLORS = {
  violet: { badge: "bg-violet-500/15 text-violet-300 border-violet-500/20" },
  blue: { badge: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
  emerald: { badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20" },
  amber: { badge: "bg-amber-500/15 text-amber-300 border-amber-500/20" },
};

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-panel section-panel-alt relative py-28 overflow-hidden">
      <GlowOrb className="w-[400px] h-[400px] bg-purple-600/6 left-0 top-20" />
      <div className="section-inner max-w-7xl mx-auto px-6">
        <RevealSection className="text-center mb-16 flex flex-col items-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Selected Work</h2>
          <p className="text-white/35 text-lg max-w-xl mx-auto">
            A curated selection of products I've built end-to-end.
          </p>
        </RevealSection>

        {featured && (
          <RevealSection className="mb-6">
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-purple-500/3 overflow-hidden p-8 md:p-12 group"
            >
              <GlowOrb className="w-[300px] h-[300px] bg-violet-600/10 -right-10 -top-10" />
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/25 text-violet-300 text-xs font-semibold mb-6">
                    <Star size={11} fill="currentColor" /> Featured Project
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    {featured.title}
                  </h3>
                  <p className="text-white/45 text-base leading-relaxed mb-6">{featured.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-violet-500/10 border border-violet-500/20 text-violet-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-white/90 transition-all">
                      <Play size={14} /> Live Demo
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 border border-white/15 text-white/60 hover:text-white font-medium text-sm rounded-xl hover:border-white/30 transition-all">
                      <GitBranch size={14} /> Source
                    </button>
                  </div>
                </div>
                <div className="h-56 md:h-72 rounded-2xl border border-white/6 bg-gradient-to-br from-white/3 to-white/0 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col gap-2 p-4 opacity-40">
                    {[100, 70, 90, 55, 80].map((w, i) => (
                      <div key={i} className="flex gap-2 items-center">
                        <div className="h-2 rounded-full bg-violet-400" style={{ width: `${w}%` }} />
                      </div>
                    ))}
                  </div>
                  <Terminal size={36} className="text-violet-400/30" />
                </div>
              </div>
            </motion.div>
          </RevealSection>
        )}

        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((project, i) => {
            const c = PROJECT_COLORS[project.color] || PROJECT_COLORS.violet;
            return (
              <RevealSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-2xl border border-white/6 bg-white/2 hover:border-white/12 transition-all duration-300 group h-full flex flex-col"
                >
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/38 leading-relaxed mb-5 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 text-xs font-mono rounded-md border ${c.badge}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors">
                      <ExternalLink size={12} /> Demo
                    </button>
                    <span className="text-white/10">·</span>
                    <button className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors">
                      <GitBranch size={12} /> Source
                    </button>
                  </div>
                </motion.div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
