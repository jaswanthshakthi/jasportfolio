import { useState } from "react";
import { motion } from "framer-motion";
import { Check, GitBranch, Globe, Mail, Send, Sparkles } from "lucide-react";
import { CONTACT_EMAIL } from "../data/portfolioData";
import GlowOrb from "../components/GlowOrb";
import RevealSection from "../components/RevealSection";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    await new Promise((r) => setTimeout(r, 500));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-panel relative py-28 overflow-hidden">
      <GlowOrb className="w-[500px] h-[500px] bg-violet-600/10 left-1/2 -translate-x-1/2 top-10" />
      <div className="section-inner max-w-6xl mx-auto px-6">
        <RevealSection className="text-center mb-16 flex flex-col items-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let's Build Together</h2>
          <p className="text-white/35 text-lg w-full max-w-xl mx-auto text-center">
            Have a project in mind? Drop me a message and I'll get back within 24 hours.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-[minmax(280px,420px)_minmax(420px,760px)] gap-10 items-start justify-center">
          <RevealSection className="space-y-6">
            {[
              { icon: <Mail size={18} />, label: "Email", value: CONTACT_EMAIL },
              { icon: <Globe size={18} />, label: "Location", value: "India-Remote worldwide" },
              { icon: <Sparkles size={18} />, label: "Schedule", value: "Book a free 30-min call" },
            ].map((item, i) => (
              <div
                key={i}
                className="interactive-surface flex items-center gap-5 p-7 rounded-2xl border border-white/8 bg-[#090909]/55 hover:border-violet-500/25 transition-all duration-300 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-white/28 mb-0.5 font-semibold">{item.label}</div>
                  <div className="text-lg font-semibold text-white/72">{item.value}</div>
                </div>
              </div>
            ))}

            <div className="flex gap-4 justify-start">
              {[
                { icon: <GitBranch size={18} />, href: "#", label: "GitHub" },
                { icon: <Globe size={18} />, href: "#", label: "LinkedIn" },
                { icon: <Globe size={18} />, href: "#", label: "Twitter" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-16 h-16 rounded-2xl border border-white/8 bg-[#090909]/55 hover:border-violet-500/30 hover:bg-violet-500/8 flex items-center justify-center text-white/40 hover:text-violet-300 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="interactive-surface p-10 rounded-3xl border border-white/8 bg-[#090909]/55 text-left">
              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Ready!</h3>
                  <p className="text-white/40 text-sm">Your email app should open with the message filled in.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/30 mb-2 font-semibold tracking-wide text-center">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-6 py-4 rounded-2xl bg-white/4 border border-white/10 text-white placeholder-white/24 text-lg focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/30 mb-2 font-semibold tracking-wide text-center">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-6 py-4 rounded-2xl bg-white/4 border border-white/10 text-white placeholder-white/24 text-lg focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/30 mb-2 font-semibold tracking-wide text-center">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-6 py-5 rounded-2xl bg-white/4 border border-white/10 text-white placeholder-white/24 text-lg focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={sending}
                    className="magnetic-button w-full flex items-center justify-center gap-3 py-5 bg-[#050505] hover:bg-[#141414] disabled:bg-[#111] border border-white/15 hover:border-white/30 text-white text-2xl font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-black/50 hover:shadow-black/70"
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
