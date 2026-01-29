import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-space text-4xl font-bold text-center mb-16"
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="relative border-l border-white/10 ml-6">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-10 pb-16"
            >
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_#38bdf8]" />

              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-primary text-sm mt-1">
                {exp.company} • {exp.period}
              </p>
              <p className="text-gray-500 text-xs mb-4">{exp.location}</p>

              <ul className="space-y-3 text-gray-400">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}