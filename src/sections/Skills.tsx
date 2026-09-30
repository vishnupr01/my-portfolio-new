import Section, { Reveal } from "../components/Section";
import { skills } from "../data/skills";
import { techIcons } from "../data/techIcons";

function SkillChip({ name }: { name: string }) {
  const tech = techIcons[name];
  const Icon = tech?.icon;
  return (
    <li className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-2.5 py-1 text-[13.5px] text-fg/85">
      {Icon && (
        <Icon aria-hidden className="text-[15px] shrink-0" style={{ color: tech.color ?? "rgb(var(--fg))" }} />
      )}
      {name}
    </li>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills &" accent="tools">
      <dl className="grid sm:grid-cols-2 gap-x-10">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={category} delay={(i % 2) * 0.04}>
            <div className="py-5 border-t border-line">
              <dt className="font-mono text-[12px] text-muted">{category}</dt>
              <dd className="mt-3">
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <SkillChip key={item} name={item} />
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
