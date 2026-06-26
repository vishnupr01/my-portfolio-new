import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/VISHNU.png";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden border-b border-white/[0.06]"
    >
      {/* Vertical guide lines */}
      <div className="absolute left-[calc(50%-380px)] top-0 bottom-0 w-px bg-white/[0.035] hidden xl:block pointer-events-none" />
      <div className="absolute right-[calc(50%-380px)] top-0 bottom-0 w-px bg-white/[0.035] hidden xl:block pointer-events-none" />

      {/* Watermark number */}
      <div className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-space font-bold text-[28vw] text-white/[0.018] leading-none select-none pointer-events-none">
        01
      </div>

      {/* Year tag */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute top-7 right-6 md:right-12 text-[10px] font-mono text-white/18 tracking-widest"
      >
        2025
      </motion.span>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-24 grid md:grid-cols-[1fr_auto] gap-16 items-center">

        {/* ── Left ── */}
        <div>
          {/* Role tag */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-7 h-px bg-white/30" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/35 font-mono">
              Backend Software Engineer
            </span>
          </motion.div>

          {/* Name — slide-up reveal */}
          <div className="mb-10 space-y-1">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
                className="font-space font-bold leading-[0.88] tracking-tight text-white"
                style={{ fontSize: "clamp(62px, 10.5vw, 148px)" }}
              >
                VISHNU
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.46, ease: EASE }}
                className="font-space font-bold leading-[0.88] tracking-tight text-white/25"
                style={{ fontSize: "clamp(62px, 10.5vw, 148px)" }}
              >
                P R
              </motion.h1>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.76, duration: 0.6 }}
            className="text-white/30 text-[13px] leading-relaxed max-w-[380px] mb-10 font-mono"
          >
            2+ years building production-grade distributed systems.
            Leading backend architecture — microservices, gRPC, AI
            deployment, cloud infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center gap-8 mb-12"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 text-[13px] font-medium text-white"
            >
              <span className="relative">
                View Work
                <span className="absolute -bottom-px left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </span>
              <span className="text-white/30 text-xs group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="text-[13px] text-white/28 hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
            className="flex items-center gap-7"
          >
            <a
              href="https://github.com/vishnupr01"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[11px] font-mono text-white/22 hover:text-white transition-colors"
            >
              <FaGithub className="text-sm" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/vishnu-p-r-b46998247/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[11px] font-mono text-white/22 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-sm" /> LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/vpr6748"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-mono text-white/22 hover:text-white transition-colors"
            >
              LeetCode
            </a>
          </motion.div>
        </div>

        {/* ── Right — photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: EASE }}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="absolute -right-4 -bottom-4 w-full h-full border border-white/12" />
            <div className="absolute -right-8 -bottom-8 w-full h-full border border-white/[0.05]" />
            <img
              src={profile}
              alt="Vishnu P R"
              className="relative w-[220px] h-[280px] object-cover grayscale contrast-110 brightness-[0.85] block"
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/18">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
