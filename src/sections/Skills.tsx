import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="py-32 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="text-[9px] font-mono text-white/22 tracking-widest">02</span>
          <div className="w-7 h-px bg-white/14" />
          <span className="text-[9px] font-mono text-white/22 uppercase tracking-[0.25em]">Skills</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2
            className="font-space font-bold text-white leading-[1.0]"
            style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
          >
            Technical<br />
            <span className="text-white/22">Skills</span>
          </h2>
          <p className="text-[11px] font-mono text-white/25 max-w-xs leading-relaxed">
            Languages, frameworks, infrastructure, and tooling used in production systems.
          </p>
        </div>

        {/* Row table */}
        <div className="divide-y divide-white/[0.06]">
          {entries.map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-8 py-5 group hover:bg-white/[0.018] transition-colors -mx-6 md:-mx-12 px-6 md:px-12"
            >
              {/* Category */}
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono text-white/18 w-5 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/32">
                  {category}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-x-5 gap-y-1.5 items-center">
                {items.map((skill, i) => (
                  <span key={skill} className="flex items-center gap-5">
                    <span className="text-[13px] text-white/50 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                    {i < items.length - 1 && (
                      <span className="text-white/12 text-[10px]">·</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
