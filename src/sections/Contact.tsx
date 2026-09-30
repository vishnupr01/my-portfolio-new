import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import Section, { Reveal } from "../components/Section";
import { profile } from "../data/profile";

const rows = [
  { label: "Call", value: profile.phone.label, href: profile.phone.href },
  { label: "WhatsApp", value: profile.whatsapp.label, href: profile.whatsapp.href, external: true },
  { label: "LinkedIn", value: "vishnu-p-r", href: profile.socials.linkedin, external: true },
  { label: "GitHub", value: "vishnupr01", href: profile.socials.github, external: true },
  { label: "Résumé", value: "Download PDF", href: profile.resume.href, download: profile.resume.filename },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section id="contact" title="Let's build something" accent="reliable.">
      <Reveal>
        <p className="text-muted max-w-[520px]">
          I'm open to Backend and Full Stack roles — any location, remote or relocation. The fastest way to reach me is
          email.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="text-[24px] md:text-[30px] font-medium tracking-[-0.02em] link"
          >
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[12.5px] text-muted hover:text-fg hover:border-fg/30 transition-colors"
          >
            {copied ? <FiCheck className="text-ok" /> : <FiCopy />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="mt-12 divide-y divide-line border-y border-line max-w-[620px]">
          {rows.map((r) => (
            <li key={r.label}>
              <a
                href={r.href}
                target={r.external ? "_blank" : undefined}
                rel={r.external ? "noreferrer" : undefined}
                download={r.download}
                className="group flex items-center gap-6 py-4"
              >
                <span className="w-24 shrink-0 font-mono text-[12px] text-muted">{r.label}</span>
                <span className="flex-1 text-fg/85 group-hover:text-fg">{r.value}</span>
                <FiArrowUpRight className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
