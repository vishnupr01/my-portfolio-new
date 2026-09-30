import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import photo from "../assets/VISHNU.jpg";
import { profile } from "../data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  { href: profile.socials.github, label: "GitHub", icon: FaGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: profile.socials.leetcode, label: "LeetCode", icon: SiLeetcode },
];

export default function Hero() {
  return (
    <section className="pt-28 pb-24 md:pt-40 md:pb-32 grid md:grid-cols-[minmax(0,1fr)_300px] lg:grid-cols-[minmax(0,1fr)_340px] gap-12 md:gap-14 items-center">
      <div className="order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[15px]">
            <span className="font-medium">{profile.name}</span>
            <span className="text-muted"> — {profile.role}</span>
          </p>

          <h1 className="mt-6 text-[42px] sm:text-[52px] lg:text-[60px] font-medium leading-[1.02] tracking-[-0.035em] max-w-[820px]">
            I design and build{" "}
            <span className="font-serif italic font-normal tracking-[-0.01em] text-accent">scalable backend systems.</span>
          </h1>

          <p className="mt-7 text-[17px] md:text-[18px] leading-relaxed text-muted max-w-[600px]">
            Software Engineer with 2+ years in Node.js, NestJS and TypeScript. I lead the backend of a 7-service
            hiring platform built for 100k+ users.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={profile.resume.href}
            download={profile.resume.filename}
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-[15px] font-medium text-bg hover:opacity-90 transition-opacity"
          >
            Download résumé
            <FiDownload className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[15px] font-medium hover:border-fg/40 transition-colors"
          >
            Get in touch
            <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="flex items-center gap-1 -ml-2.5">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted hover:text-fg hover:bg-fg/5 transition-colors"
              >
                <Icon className="text-[19px]" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex items-start gap-2.5 text-[14px] text-muted"
        >
          <span className="relative mt-[7px] flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
          </span>
          {profile.availability}
        </motion.p>
      </div>

      <motion.figure
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="order-1 md:order-2 w-full max-w-[280px] sm:max-w-[320px] md:max-w-none rounded-[28px] border border-line bg-surface p-2.5"
      >
        <img
          src={photo}
          alt="Vishnu P R, Software Engineer"
          width={540}
          height={675}
          className="aspect-[4/5] w-full rounded-[20px] object-cover object-top"
        />
      </motion.figure>
    </section>
  );
}
