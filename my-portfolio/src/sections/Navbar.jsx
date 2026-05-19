import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Terminal, X } from "lucide-react";
import { CONTACT_EMAIL, NAV_LINKS } from "../data/portfolioData";
import useScrollSpy from "../hooks/useScrollSpy";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id, event) => {
    event?.preventDefault();
    setOpen(false);
    window.requestAnimationFrame(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 relative z-[70] transition-all duration-500 ${
        scrolled
          ? "bg-[#090909]/72 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/35"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-none mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <Terminal size={14} className="text-white" />
          </div>
          <span className="font-bold text-white tracking-tight text-sm">
            Jaswanth<span className="text-violet-400"></span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              type="button"
              onClick={(event) => scrollTo(link, event)}
              className={`px-1 py-2 text-base rounded-lg transition-all duration-200 ${
                active === link.toLowerCase()
                  ? "text-violet-300 bg-violet-500/10"
                  : "text-white/50 hover:text-white/90 hover:bg-white/5"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="magnetic-button flex items-center gap-2 px-5 py-3 text-base font-semibold bg-[#050505] hover:bg-[#141414] border border-white/15 hover:border-white/30 text-white rounded-lg transition-all duration-200 shadow-lg shadow-black/50 hover:shadow-black/70 hover:-translate-y-0.5"
          >
            Hire Me <ArrowRight size={14} />
          </a>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 z-[80] border-t border-white/5 bg-[#0D0D0D]/98 backdrop-blur-xl shadow-2xl shadow-black/50"
          >
            <div className="px-6 py-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  type="button"
                  onClick={(event) => scrollTo(link, event)}
                  className="text-left px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {link}
                </button>
              ))}
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 px-4 py-3 text-sm font-medium bg-[#050505] hover:bg-[#141414] border border-white/15 hover:border-white/30 text-white rounded-lg transition-all">
                Hire Me →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
