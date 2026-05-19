import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Brain, Code2, Server, Database, BarChart, GitBranch, Zap } from "lucide-react";
import { SKILLS } from "../data/portfolioData";
import GlowOrb from "../components/GlowOrb";
import RevealSection from "../components/RevealSection";

const SKILL_ICONS = {
  Frontend: <Code2 size={18} />,
  Backend: <Server size={18} />,
  "AI & Tools": <Brain size={18} />,
  Databases: <Database size={18} />,
  "Data & Analytics": <BarChart size={18} />,
  DevOps: <GitBranch size={18} />,
  Automation: <Zap size={18} />,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="section-panel section-panel-alt relative py-28 overflow-hidden">
      <GlowOrb className="w-[500px] h-[500px] bg-blue-600/6 left-0 top-0" />
      <div className="skills-section-inner section-inner max-w-7xl mx-auto px-6">
        <RevealSection className="skills-heading text-center mb-16 flex flex-col items-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Technical Arsenal</h2>
          <p className="text-white/35 text-lg w-full max-w-xl mx-auto text-center">
            Tools, frameworks, and platforms I use to ship production-ready software.
          </p>
        </RevealSection>

        <RevealSection delay={0.1} className="skills-tabs-wrap">
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl bg-white/4 border border-white/8 gap-1">
              {Object.keys(SKILLS).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#050505] text-white border border-white/15 shadow-lg shadow-black/50"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {SKILL_ICONS[tab]} {tab}
                </button>
              ))}
            </div>
          </div>
        </RevealSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="skills-grid grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {SKILLS[activeTab].map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} delay={i * 0.08} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function SkillBar({ skill, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="p-5 rounded-2xl border border-white/6 bg-white/2 hover:border-violet-500/20 hover:bg-violet-500/3 transition-all duration-300 group"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-violet-400 font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-600 to-purple-400 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
