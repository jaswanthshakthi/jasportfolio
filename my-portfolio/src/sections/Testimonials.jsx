import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data/portfolioData";
import GlowOrb from "../components/GlowOrb";
import RevealSection from "../components/RevealSection";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="section-panel section-panel-alt relative py-28 overflow-hidden">
      <GlowOrb className="w-[500px] h-[500px] bg-violet-600/7 left-1/2 -translate-x-1/2 top-0" />
      <div className="section-inner max-w-4xl mx-auto px-6">
        <RevealSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What People Say</h2>
        </RevealSection>

        <RevealSection delay={0.1}>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 md:p-12 rounded-3xl border border-white/6 bg-white/2 relative overflow-hidden"
              >
                <GlowOrb className="w-[200px] h-[200px] bg-violet-600/8 -right-10 -top-10" />
                <Quote size={40} className="text-violet-500/20 mb-6" />
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium mb-8 relative z-10">
                  "{TESTIMONIALS[idx].text}"
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/30">
                    {TESTIMONIALS[idx].initials}
                  </div>
                  <div>
                    <div className="font-bold text-white">{TESTIMONIALS[idx].name}</div>
                    <div className="text-sm text-white/35">
                      {TESTIMONIALS[idx].role} · {TESTIMONIALS[idx].company}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/25 flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === idx ? "w-6 bg-violet-500" : "w-1.5 bg-white/15"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/25 flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
