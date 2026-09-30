import Section, { Reveal } from "../components/Section";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Where I've" accent="worked">
      {experience.map((exp) => (
        <div key={exp.company}>
          <Reveal>
            <div className="mb-8">
              <div>
                <h3 className="text-[19px] font-medium tracking-[-0.01em]">{exp.role}</h3>
                <p className="text-muted">{exp.company}</p>
              </div>
              <p className="mt-1 font-mono text-[12.5px] text-muted">
                {exp.period} · {exp.location}
              </p>
            </div>
          </Reveal>

          <ol className="relative border-l border-line ml-1 space-y-12">
            {exp.subRoles.map((sub, i) => (
              <li key={sub.title} className="pl-7 relative">
                <span
                  aria-hidden
                  className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 border-bg ${
                    i === 0 ? "bg-accent" : "bg-muted"
                  }`}
                />
                <Reveal delay={i * 0.05}>
                  <h4 className="text-[16px] font-medium">{sub.title}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {sub.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-fg/80 leading-relaxed">
                        <span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-muted/60" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-mono text-[12px] leading-relaxed text-muted">{sub.stack}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </Section>
  );
}
