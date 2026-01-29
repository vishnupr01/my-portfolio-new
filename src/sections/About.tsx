import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-4xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I’m a Software Engineer with <span className="text-white font-medium">2+ years of experience</span> 
            building scalable backend systems, real-time communication platforms, 
            and cloud-native applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I specialize in the <span className="text-white font-medium">MERN stack</span>, real-time systems 
            using <span className="text-white font-medium">Socket.IO & WebRTC</span>, and designing 
            <span className="text-white font-medium">high-performance cloud architectures</span> on AWS.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I enjoy solving complex engineering problems, optimizing system performance, 
            and building products that scale to thousands of users.
          </p>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "50k+", label: "Users Impacted" },
            { value: "10k+", label: "Realtime Connections" },
            { value: "75%", label: "API Latency Reduced" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-primary/40 transition"
            >
              <h3 className="text-3xl font-bold text-primary">{item.value}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}