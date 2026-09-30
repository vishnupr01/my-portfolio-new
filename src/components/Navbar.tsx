import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { profile, sections } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

// Highlights the link for whichever section is in the upper part of the viewport
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export default function Navbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[960px] px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-medium tracking-[-0.01em]">
          {profile.name}
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`rounded-full px-3.5 py-1.5 text-[14px] transition-colors ${
                    active === s.id ? "text-fg bg-fg/[0.06]" : "text-muted hover:text-fg"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume.href}
            download={profile.resume.filename}
            className="inline-flex items-center gap-1.5 rounded-full border border-line h-9 px-4 text-[13.5px] font-medium hover:border-fg/40 transition-colors"
          >
            Résumé <FiDownload />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
