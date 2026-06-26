import { motion } from "framer-motion";

const bento = [
  { span: "col-span-2", value: "2+", label: "Years of production experience" },
  { span: "", value: "7", label: "Microservices\narchitected" },
  { span: "", value: "10k+", label: "Concurrent\nconnections" },
  { span: "", value: "GPU", label: "AI proctoring\ndeployed to prod" },
  { span: "", value: "Nx CI/CD", label: "Affected builds\npipeline" },
];

export default function About() {
  return (
    <section id="about" className="py-32 border-b border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="text-[9px] font-mono text-white/22 tracking-widest">01</span>
          <div className="w-7 h-px bg-white/14" />
          <span className="text-[9px] font-mono text-white/22 uppercase tracking-[0.25em]">About</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-space font-bold text-white leading-[1.05] mb-10"
              style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
            >
              Backend engineer<br />
              building systems<br />
              <span className="text-white/22">that scale.</span>
            </h2>

            <div className="space-y-5 text-[13px] leading-relaxed text-white/38">
              <p>
                Backend Software Engineer with{" "}
                <span className="text-white/80">2+ years</span> designing and
                shipping production-grade distributed systems — currently
                leading full backend architecture for an early-stage platform.
              </p>
              <p>
                Making tech stack decisions, designing{" "}
                <span className="text-white/80">microservices from scratch</span>,
                and deploying AI models to production via Docker, AWS ECR, and
                GitHub CI/CD pipelines.
              </p>
              <p>
                Hands-on expertise in{" "}
                <span className="text-white/80">NestJS, gRPC, PostgreSQL, Prisma,
                and real-time systems</span>. Strong foundation in cloud
                infrastructure, containerization, and async job processing.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Bento ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-2"
          >
            {bento.map((item, i) => (
              <div
                key={i}
                className={`${item.span} border border-white/[0.07] rounded-lg p-6 hover:border-white/18 hover:bg-white/[0.02] transition-all duration-300 group`}
              >
                <span className="block font-space font-bold text-white mb-2 group-hover:translate-x-0.5 transition-transform"
                  style={{ fontSize: i === 0 ? "clamp(36px,4vw,56px)" : "clamp(26px,3vw,36px)" }}
                >
                  {item.value}
                </span>
                <p className="text-[10px] font-mono text-white/25 uppercase tracking-wider leading-snug whitespace-pre-line">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
