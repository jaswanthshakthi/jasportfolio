import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/portfolioData";
import GlowOrb from "../components/GlowOrb";
import RevealSection from "../components/RevealSection";

export default function Experience() {
  return (
    <section id="experience" className="section-panel relative py-28 overflow-hidden">
      <GlowOrb className="w-[400px] h-[400px] bg-violet-600/6 right-10 top-20" />
      <div className="section-inner max-w-4xl mx-auto px-6">
        <RevealSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">The Journey</h2>
          <p className="text-white/35 text-lg">Experience with real time projects</p>
        </RevealSection>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent" />
          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div className="relative flex gap-8">
                  <div className="flex-shrink-0 w-16 flex justify-center">
                    <motion.div
                      whileInView={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="w-4 h-4 rounded-full bg-violet-600 border-2 border-violet-400 shadow-lg shadow-violet-500/40 mt-1.5"
                    />
                  </div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-1 pb-10 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-violet-200 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-white/25 font-mono">{exp.period}</span>
                    </div>
                    <div className="text-violet-400 text-sm font-semibold mb-3">{exp.company}</div>
                    <p className="text-white/40 text-sm leading-relaxed">{exp.desc}</p>
                  </motion.div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
