import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../data/portfolioData";
import GlowOrb from "../components/GlowOrb";
import RevealSection from "../components/RevealSection";

export default function Services() {
  return (
    <section id="services" className="section-panel relative py-28 overflow-hidden">
      <GlowOrb className="w-[500px] h-[500px] bg-violet-600/8 right-0 bottom-0" />
      <div className="section-inner max-w-7xl mx-auto px-6">
        <RevealSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What I Build</h2>
          <p className="text-white/35 text-lg max-w-xl mx-auto">
            End-to-end delivery across the full product lifecycle.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <RevealSection key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-7 rounded-2xl border border-white/6 bg-white/2 hover:border-white/12 overflow-hidden group h-full transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl bg-gradient-to-br ${svc.accent}`}
                />
                <div
                  className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${svc.accent} border border-white/8 relative z-10`}
                >
                  <span className="text-white">{svc.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 relative z-10">{svc.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed relative z-10">{svc.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs text-white/25 group-hover:text-violet-400 transition-colors duration-300 relative z-10">
                  <span>Learn more</span>
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
