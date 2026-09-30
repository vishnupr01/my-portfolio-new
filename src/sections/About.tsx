import Section, { Reveal } from "../components/Section";
import { stats } from "../data/profile";

export default function About() {
  return (
    <Section id="about" title="About" accent="me">
      <Reveal>
        <div className="space-y-6 text-[18px] leading-[1.75] text-fg/80 max-w-[680px]">
          <p>
            I'm the <span className="text-fg font-medium">Backend Lead</span> at Altrodav Technologies, where I own the
            architecture of a 7-service technical hiring platform — from choosing the stack to shipping features into
            production.
          </p>
          <p>
            I like the parts of a system that get stressed: service-to-service communication, real-time messaging,
            background jobs, and running <span className="text-fg font-medium">AI/ML models</span> in production
            without slowing the product down.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-line pt-5">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="num block text-[40px] md:text-[44px] font-medium tracking-[-0.04em] leading-none">
                  {s.value}
                </span>
                <span className="mt-3 block text-[14px] text-muted">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
