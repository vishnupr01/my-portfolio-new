import type { ReactNode } from "react";
import { motion } from "framer-motion";

// Shared section shell: an editorial heading (sans + serif-italic accent) over a hairline
export default function Section({
  id,
  title,
  accent,
  intro,
  children,
}: {
  id: string;
  title: string;
  accent?: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 py-24 md:py-32 border-t border-line">
      <h2 className="text-[34px] md:text-[44px] font-medium tracking-[-0.03em] leading-[1.05] text-fg">
        {title}
        {accent && (
          <>
            {" "}
            <span className="font-serif italic font-normal text-[1.12em] tracking-normal">{accent}</span>
          </>
        )}
      </h2>
      {intro && <p className="mt-4 text-[17px] text-muted max-w-xl">{intro}</p>}
      <div className="mt-14">{children}</div>
    </section>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
