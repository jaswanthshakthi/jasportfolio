import "./App.css";
import InteractiveGrid from "./components/InteractiveGrid";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        backgroundColor: "#0D0D0D",
        fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0D0D0D; }
        section[id] { scroll-margin-top: 88px; }
        button, a, input, textarea { -webkit-tap-highlight-color: transparent; }
        button:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible {
          outline: 2px solid rgba(167, 139, 250, 0.75);
          outline-offset: 3px;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0D0D0D; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        .interactive-grid {
          --mx: 50%;
          --my: 32%;
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 1;
          background:
            radial-gradient(circle at var(--mx) var(--my), rgba(139, 92, 246, 0.1), transparent 24rem),
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px);
          background-size: auto, 68px 68px, 68px 68px, 34px 34px, 34px 34px;
        }
        .interactive-grid::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.055), transparent 13rem);
          opacity: 0.8;
          transition: opacity 200ms ease;
        }
        .section-panel {
          position: relative;
          z-index: 1;
          background:
            linear-gradient(rgba(13,13,13,0.9), rgba(13,13,13,0.92)),
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: auto, 48px 48px, 48px 48px;
        }
        .section-inner {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
        .skills-section-inner {
          max-width: 1280px;
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .skills-heading,
        .skills-tabs-wrap,
        .skills-grid {
          width: min(100%, 960px);
          margin-inline: auto;
        }
        .skills-grid {
          justify-content: center;
        }
        .section-panel-alt {
          background:
            linear-gradient(rgba(10,10,10,0.92), rgba(10,10,10,0.94)),
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: auto, 48px 48px, 48px 48px;
        }
        .interactive-surface {
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 50px rgba(0,0,0,0.18);
        }
        .magnetic-button {
          position: relative;
          overflow: hidden;
        }
        .magnetic-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: translateX(-120%);
          transition: transform 550ms ease;
        }
        .magnetic-button:hover::before {
          transform: translateX(120%);
        }
        .magnetic-button > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
      <InteractiveGrid />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
