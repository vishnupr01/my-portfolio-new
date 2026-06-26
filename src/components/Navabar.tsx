import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-5">
        <button
          onClick={() => scrollTo("hero")}
          className="font-space text-sm font-bold text-white tracking-[0.15em] uppercase"
        >
          VPR
        </button>

        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-[11px] uppercase tracking-[0.18em] text-white/35 hover:text-white transition-colors duration-200 font-mono"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
