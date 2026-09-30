import Section, { Reveal } from "../components/Section";

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    place: "Manipal University Jaipur (Online)",
    period: "Mar 2026 — Present",
  },
  {
    title: "Diploma in Computer Science and Engineering",
    place: "IPT and GPTC Shoranur, Kerala",
    period: "2019 — 2022",
  },
  {
    title: "Certificate in MERN Full Stack Development",
    place: "Brototype, Kozhikode, Kerala",
    period: "2023 — 2024",
  },
];

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="divide-y divide-line border-y border-line">
        {education.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.04}>
            <div className="py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-[14px] text-muted">{item.place}</p>
              </div>
              <p className="font-mono text-[12.5px] text-muted shrink-0">{item.period}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
