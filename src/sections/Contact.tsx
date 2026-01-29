import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-space text-4xl font-bold mb-6"
        >
          Let’s <span className="text-primary">Connect</span>
        </motion.h2>

        <p className="text-gray-400 mb-14">
          Have a project, startup idea, or job opportunity? Feel free to reach out.
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">

          {/* Phone */}
          <motion.a
            href="tel:+919656399230"
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-primary/40 transition block"
          >
            <FaPhoneAlt className="text-3xl text-primary mx-auto mb-4" />
            <h4 className="font-semibold">Mobile</h4>
            <p className="text-gray-400 mt-1">+91 96563 99230</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:vpr6748@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-primary/40 transition block"
          >
            <FaEnvelope className="text-3xl text-primary mx-auto mb-4" />
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-400 mt-1">vpr6748@gmail.com</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/919656399230"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-primary/40 transition block"
          >
            <FaWhatsapp className="text-3xl text-green-400 mx-auto mb-4" />
            <h4 className="font-semibold">WhatsApp</h4>
            <p className="text-gray-400 mt-1">+91 9207033463</p>
          </motion.a>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 text-3xl">
          <a
            href="https://github.com/vishnupr01"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vishnu-p-r-b46998247/"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </section>
  );
}