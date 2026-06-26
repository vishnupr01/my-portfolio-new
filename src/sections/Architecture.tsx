import { motion } from "framer-motion";

const points = [
  {
    title: "7-Service Microservices Monorepo",
    desc: "Nx monorepo with API Gateway, Auth, Company, Interview, Admin, Student, and Proctoring services — each independently containerized and registered on AWS ECR.",
  },
  {
    title: "gRPC Inter-Service Communication",
    desc: "Dedicated HTTP and gRPC ports per service for type-safe, high-performance internal API contracts — replacing brittle REST inter-service calls.",
  },
  {
    title: "GPU-Enabled AI Proctoring Pipeline",
    desc: "ML model Dockerized with Nvidia GPU support. Async frame and audio processing via Redis-backed Celery workers. Fully automated push to AWS ECR via CI.",
  },
  {
    title: "Smart CI/CD with Nx Affected Builds",
    desc: "GitHub Actions uses Nx affected detection — only rebuilds and redeploys services with actual code changes, cutting deployment time on every push.",
  },
  {
    title: "Real-Time at Scale",
    desc: "Socket.IO chat with Redis Pub/Sub for horizontal scalability across instances. BullMQ workers handle async background jobs and notification pipelines.",
  },
  {
    title: "Cloud Infrastructure",
    desc: "AWS EC2, S3, ECR with shared Docker Compose network, automated ECR login, and zero-downtime redeployment via force-recreate.",
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-32 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <span className="text-[9px] font-mono text-white/22 tracking-widest">05</span>
          <div className="w-7 h-px bg-white/14" />
          <span className="text-[9px] font-mono text-white/22 uppercase tracking-[0.25em]">Architecture</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <h2
            className="font-space font-bold text-white leading-[1.0]"
            style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
          >
            System<br />
            <span className="text-white/22">Architecture</span>
          </h2>
          <p className="text-[11px] font-mono text-white/25 max-w-xs leading-relaxed">
            Production infrastructure decisions for PlaceMux — 7-service microservices platform.
          </p>
        </div>

        {/* Gap-px grid — the gaps become the borders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {points.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-black p-8 hover:bg-white/[0.025] transition-colors group"
            >
              <span className="text-[9px] font-mono text-white/18 mb-5 block">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[13px] font-semibold text-white/80 mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-[12px] text-white/30 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
