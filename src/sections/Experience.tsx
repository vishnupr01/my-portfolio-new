import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-32 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="text-[9px] font-mono text-white/22 tracking-widest">03</span>
          <div className="w-7 h-px bg-white/14" />
          <span className="text-[9px] font-mono text-white/22 uppercase tracking-[0.25em]">Experience</span>
        </div>

        <h2
          className="font-space font-bold text-white leading-[1.0] mb-16"
          style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
        >
          Work<br />
          <span className="text-white/22">Experience</span>
        </h2>

        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Company row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-8 mb-8 border-b border-white/[0.06]">
              <div>
                <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                <p className="text-[12px] text-white/35 mt-1">{exp.company}</p>
              </div>
              <div className="text-left md:text-right shrink-0">
                <p className="text-[11px] font-mono text-white/25">{exp.period}</p>
                <p className="text-[10px] font-mono text-white/18 mt-0.5">{exp.location}</p>
              </div>
            </div>

            {/* Sub-role cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {exp.subRoles.map((sub, sIdx) => (
                <motion.div
                  key={sIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIdx * 0.12, duration: 0.6 }}
                  className="border border-white/[0.07] rounded-xl p-7 hover:border-white/18 hover:bg-white/[0.018] transition-all duration-300 group"
                >
                  {/* Sub-role header */}
                  <div className="mb-5">
                    <span className="text-[9px] font-mono text-white/20 mb-2 block">
                      {String(sIdx + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-[13px] font-semibold text-white mb-2">
                      {sub.title}
                    </h4>
                    <p className="text-[10px] font-mono text-white/22 italic leading-relaxed">
                      {sub.stack}
                    </p>
                  </div>

                  {/* Points */}
                  <ul className="space-y-3">
                    {sub.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[12px] text-white/38 leading-relaxed"
                      >
                        <span className="text-white/20 shrink-0 mt-0.5">—</span>
                        <span className="group-hover:text-white/50 transition-colors">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
