import { FiArrowUpRight } from "react-icons/fi";
import Section, { Reveal } from "../components/Section";
import { projects } from "../data/projects";

function Links({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px]">
      {project.links.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1 text-fg/80 hover:text-fg"
        >
          <span className="link">{l.label}</span>
          <FiArrowUpRight className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
      {project.demo ? (
        <a href={project.demo} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1 text-fg/80 hover:text-fg">
          <span className="link">Live</span>
          <FiArrowUpRight className="text-muted" />
        </a>
      ) : project.status ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-line px-2.5 py-0.5 font-mono text-[11.5px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          Live: {project.status}
        </span>
      ) : null}
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" title="Selected" accent="projects">
      {/* Featured */}
      <Reveal>
        <article className="rounded-2xl border border-line bg-surface p-6 md:p-8">
          <p className="font-mono text-[12px] text-accent mb-3">Latest · personal project</p>
          <h3 className="text-[24px] font-medium tracking-[-0.02em]">{featured.title}</h3>
          <div className="mt-3">
            <Links project={featured} />
          </div>
          {featured.tagline && <p className="mt-3 text-[16px] text-fg/85 max-w-[620px]">{featured.tagline}</p>}
          <p className="mt-2 text-muted max-w-[620px]">{featured.description}</p>

          {featured.metrics && (
            <div className="mt-7">
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl border border-line bg-line">
                {featured.metrics.map((m) => (
                  <div key={m.label} className="bg-surface p-4">
                    <dt className="sr-only">{m.label}</dt>
                    <dd>
                      <span className="num block text-[24px] font-medium tracking-[-0.02em] leading-none">{m.value}</span>
                      <span className="mt-2 block text-[12.5px] leading-snug text-muted">{m.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              {featured.metricsNote && (
                <p className="mt-3 font-mono text-[11.5px] leading-relaxed text-muted">{featured.metricsNote}</p>
              )}
            </div>
          )}

          {featured.highlights && (
            <ul className="mt-7 space-y-2.5">
              {featured.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[14.5px] text-fg/80 leading-relaxed">
                  <span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-muted/60" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-6 font-mono text-[12px] text-muted">{featured.tech.join(" · ")}</p>
        </article>
      </Reveal>

      {/* Others */}
      <div className="mt-6 divide-y divide-line">
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article className="py-7 grid md:grid-cols-[1fr_auto] gap-x-8 gap-y-3">
              <div>
                <h3 className="text-[17px] font-medium">{p.title}</h3>
                <p className="mt-1.5 text-muted max-w-[560px]">{p.description}</p>
                <p className="mt-3 font-mono text-[12px] text-muted">{p.tech.join(" · ")}</p>
              </div>
              <Links project={p} />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
