import { motion } from "framer-motion";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" }
];

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80; // navbar height
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1
          onClick={() => scrollToSection("hero")}
          className="font-space text-xl font-bold text-primary cursor-pointer"
        >
          Vishnu<span className="text-accent">.</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-sm text-gray-300">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-white transition relative group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
            </li>
          ))}
        </ul>

      </div>
    </motion.nav>
  );
}