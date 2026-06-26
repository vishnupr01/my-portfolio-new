import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="text-[9px] font-mono text-white/22 tracking-widest">04</span>
          <div className="w-7 h-px bg-white/14" />
          <span className="text-[9px] font-mono text-white/22 uppercase tracking-[0.25em]">Projects</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2
            className="font-space font-bold text-white leading-[1.0]"
            style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
          >
            Personal<br />
            <span className="text-white/22">Projects</span>
          </h2>
          <p className="text-[11px] font-mono text-white/25 max-w-xs leading-relaxed">
            Side projects built to explore real engineering problems end-to-end.
          </p>
        </div>

        {/* Numbered list */}
        <div className="divide-y divide-white/[0.06]">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="group py-10 hover:bg-white/[0.018] transition-colors -mx-6 md:-mx-12 px-6 md:px-12"
            >
              <div className="flex items-start gap-6 md:gap-10">

                {/* Index number */}
                <span className="text-[10px] font-mono text-white/18 mt-1 shrink-0 w-5">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                    <h3 className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-5 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] font-mono text-white/25 hover:text-white transition-colors"
                      >
                        GitHub →
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] font-mono text-white/25 hover:text-white transition-colors"
                        >
                          Live →
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-[13px] text-white/35 leading-relaxed mb-5 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-white/22 border border-white/[0.08] px-2.5 py-0.5 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
