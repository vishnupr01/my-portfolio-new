import { marqueeStack, type Tech } from "../data/techIcons";

function Logo({ tech, hidden = false }: { tech: Tech; hidden?: boolean }) {
  const Icon = tech.icon;
  return (
    <li
      aria-hidden={hidden || undefined}
      title={tech.name}
      className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl border border-line bg-surface"
    >
      <Icon aria-hidden className="text-[32px]" style={{ color: tech.color ?? "rgb(var(--fg))" }} />
      {!hidden && <span className="sr-only">{tech.name}</span>}
    </li>
  );
}

// One row. A single pass repeats the logos until it is wider than any common screen (~3,000px);
// the pass is then rendered twice so sliding by half loops with no gap or seam.
const REPEAT = 3;

function Row({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) {
  const pass = Array.from({ length: REPEAT }, (_, r) => items.map((tech) => ({ tech, r }))).flat();
  return (
    <ul className={`marquee-track flex w-max gap-4 ${reverse ? "marquee-reverse" : ""}`}>
      {[0, 1].map((copy) =>
        pass.map(({ tech, r }) => (
          // Only the very first set is read by screen readers
          <Logo key={`${copy}-${r}-${tech.name}`} tech={tech} hidden={copy > 0 || r > 0} />
        ))
      )}
    </ul>
  );
}

export default function LogoMarquee() {
  const half = Math.ceil(marqueeStack.length / 2);
  const top = marqueeStack.slice(0, half);
  const bottom = marqueeStack.slice(half);

  return (
    <section aria-label="Technologies I work with" className="py-10 md:py-14">
      <p className="mx-auto max-w-[960px] px-6 mb-6 font-mono text-[12.5px] text-muted">
        Tools I build with every day
      </p>
      {/* Always animates on its own; hovering pauses it so a logo can be looked at */}
      <div className="marquee-mask space-y-4 overflow-hidden hover:[&_.marquee-track]:[animation-play-state:paused]">
        <Row items={top} />
        <Row items={bottom} reverse />
      </div>
    </section>
  );
}
