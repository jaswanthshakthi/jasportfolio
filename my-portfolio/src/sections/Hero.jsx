import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Brain, ChevronDown, Code2, Zap } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const visualRef = useRef(null);

  useEffect(() => {
    const el = visualRef.current;
    if (!el) return;
    let raf = 0;

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 16;
      const rotateX = (0.5 - y) * 16;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      });
    }

    function handleLeave() {
      cancelAnimationFrame(raf);
      el.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent"
      style={{ paddingTop: "4rem" }}
    >
      <div className="absolute inset-0 bg-[#090909]/45 z-0" />

      <div className="hero-visual-wrapper">
        <div ref={visualRef} className="hero-3d">
          <div className="hero-card">
            <div className="hero-image">
              <img src="/img.png" alt="Hero" className="hero-image-img" />
            </div>
          </div>
        </div>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-50 max-w-5xl mx-auto px-6 text-center">
        <div className="md:hidden relative mx-auto mt-24 mb-6 flex items-center justify-center w-full max-w-[240px] aspect-[4/5] pointer-events-none select-none">
          <div className="relative z-10 w-full h-full rounded-[28px] border border-white/10 bg-[#050505] shadow-[0_18px_40px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center">
            <img src="/img.png" alt="Hero" className="w-full h-full object-cover object-center block" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="interactive-surface inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-violet-500/35 bg-violet-500/10 text-violet-200 text-base font-medium mb-9"
        >
         
        </motion.div>

        {/* visual moved outside content to avoid overlaying buttons/text */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl xl:text-[5.25rem] font-black text-white leading-[0.98] mb-4"
        >
          Building{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            AI-native
          </span>
          <br />
          products that{" "}
            <span className="bg-gradient-to-r from-white/90 to-white/50 bg-clip-text text-transparent">
            scale.
          </span>
        </motion.h1>

      

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-xl md:text-2xl text-white/38 max-w-3xl mx-auto mb-12 leading-snug"
        >
          Full-stack engineer & AI specialist building production-grade SaaS platforms, developer tools, and intelligent applications with scalable architecture and modern user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="magnetic-button group flex items-center gap-2 px-8 py-4 bg-[#050505] hover:bg-[#141414] border border-white/15 hover:border-white/30 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-black/70 hover:-translate-y-1 relative z-20"
          >
            View My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="magnetic-button flex items-center gap-2 px-8 py-4 border border-white/12 hover:border-white/30 text-white/78 hover:text-white text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-white/5 relative z-20"
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {[
            { icon: <Code2 size={16} />, label: "10k+ lines shipped/week", color: "violet" },
            { icon: <Brain size={16} />, label: "LLM-first architecture", color: "blue" },
            { icon: <Zap size={16} />, label: "< 100ms API responses", color: "emerald" },
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className="interactive-surface flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/65 bg-[#090909]/70 backdrop-blur-sm shadow-lg shadow-black/30"
            >
              <span
                className={
                  item.color === "violet"
                    ? "text-violet-400"
                    : item.color === "blue"
                    ? "text-blue-400"
                    : "text-emerald-400"
                }
              >
                {item.icon}
              </span>
              <span className="text-white/60 text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
