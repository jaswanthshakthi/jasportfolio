import { Terminal } from "lucide-react";
import { NAV_LINKS } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0D0D0D]/80 backdrop-blur py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
            <Terminal size={12} className="text-white" />
          </div>
          <span className="font-bold text-white/60 text-sm">
            Jaswanth<span className="text-violet-400">.</span>
          </span>
        </div>
        <div className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() =>
                document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-xs text-white/25 hover:text-white/60 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} Jaswanth. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
