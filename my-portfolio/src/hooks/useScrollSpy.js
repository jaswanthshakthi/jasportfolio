import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/portfolioData";

export default function useScrollSpy() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const handler = () => {
      for (const id of NAV_LINKS.map((l) => l.toLowerCase())) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}
