import { motion } from "framer-motion";

const architecturePoints = [
  {
    title: "Real-Time Communication Layer",
    desc: "Socket.IO based scalable architecture supporting 10k+ concurrent users using Redis Pub/Sub and horizontal scaling."
  },
  {
    title: "Event-Driven Backend",
    desc: "BullMQ worker queues for background jobs, notification pipelines, and heavy async processing."
  },
  {
    title: "Cloud Infrastructure",
    desc: "AWS EC2, Nginx, PM2, S3, RDS, Redis ElastiCache with monitoring via CloudWatch."
  },
  {
    title: "Security & Authentication",
    desc: "JWT + Refresh token rotation, OTP verification, and role-based access control."
  }
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-space text-4xl font-bold text-center mb-16"
        >
          System <span className="text-primary">Architecture</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {architecturePoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur hover:border-primary/40 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}