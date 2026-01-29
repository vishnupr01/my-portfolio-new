import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GlowBackground from "../components/GlowBackGround";
import profile from "../assets/VISHNU.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-dark text-white overflow-hidden"
    >
      <GlowBackground />

      {/* Extra ambient glow blobs */}
      <div className="absolute w-[500px] h-[500px] bg-primary/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-accent/30 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Profile Image with Glow */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-xl opacity-70 animate-pulse" />

          <img
            src={profile}
            alt="Vishnu P R"
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white/10 shadow-2xl"
          />
        </div>

        <h1 className="font-space text-5xl md:text-7xl font-bold leading-tight">
          Vishnu P R
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Software Engineer • MERN • Real-Time Systems • Cloud
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400">
          I build high-performance backend systems, real-time communication
          platforms, and scalable cloud-native applications.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-primary text-black font-medium hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-8 py-3 rounded-xl border border-white/20 hover:border-primary transition"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-xl">
          <a href="https://github.com/vishnupr01" target="_blank">
            <FaGithub className="hover:text-primary transition" />
          </a>
          <a href="https://linkedin.com/in/vishnupr01" target="_blank">
            <FaLinkedin className="hover:text-primary transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
