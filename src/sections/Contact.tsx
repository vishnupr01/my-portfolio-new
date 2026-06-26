import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const links = [
  { num: "01", icon: FaEnvelope, label: "vpr6748@gmail.com", href: "mailto:vpr6748@gmail.com" },
  { num: "02", icon: FaPhoneAlt, label: "+91 96563 99230", href: "tel:+919656399230" },
  { num: "03", icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/vishnu-p-r-b46998247/", external: true },
  { num: "04", icon: FaGithub, label: "GitHub", href: "https://github.com/vishnupr01", external: true },
  { num: "05", icon: FaWhatsapp, label: "WhatsApp — +91 9207033463", href: "https://wa.me/919656399230", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="text-[9px] font-mono text-white/22 tracking-widest">06</span>
          <div className="w-7 h-px bg-white/14" />
          <span className="text-[9px] font-mono text-white/22 uppercase tracking-[0.25em]">Contact</span>
        </div>

        {/* Big CTA heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2
            className="font-space font-bold text-white leading-none mb-0"
            style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
          >
            Let's work
          </h2>
          <h2
            className="font-space font-bold text-white/18 leading-none"
            style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
          >
            together.
          </h2>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl divide-y divide-white/[0.06]"
        >
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.num}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="flex items-center gap-5 py-5 group"
              >
                <span className="text-[9px] font-mono text-white/18 w-5 shrink-0">
                  {link.num}
                </span>
                <Icon className="text-sm text-white/25 group-hover:text-white transition-colors shrink-0" />
                <span className="text-[13px] text-white/60 group-hover:text-white transition-colors flex-1">
                  {link.label}
                </span>
                <span className="text-white/18 group-hover:text-white/50 group-hover:translate-x-1 transition-all text-xs">
                  →
                </span>
              </a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
