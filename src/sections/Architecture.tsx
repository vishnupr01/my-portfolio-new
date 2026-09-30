import type { ReactNode } from "react";
import Section, { Reveal } from "../components/Section";

const decisions = [
  {
    title: "Microservices in an Nx monorepo",
    desc: "An API gateway in front of independently deployable domain services, each in its own container, sharing one monorepo for types and tooling.",
    result: "Built to scale to 100,000+ users",
  },
  {
    title: "gRPC between services",
    desc: "Moved service-to-service calls from REST to gRPC for typed contracts and lower overhead, keeping REST for the public API.",
    result: "~25% lower internal response latency",
  },
  {
    title: "AI/ML models in production",
    desc: "Containerized models with GPU support; heavy inference runs on async queue workers so user-facing APIs stay fast.",
    result: "80–90% detection accuracy in production",
  },
  {
    title: "Change-aware CI/CD",
    desc: "The pipeline detects which services a commit actually touched and only rebuilds and redeploys those.",
    result: "40–60% faster build & deploy",
  },
  {
    title: "Real-time at scale",
    desc: "Socket.IO with Redis Pub/Sub so events reach users on any server instance; BullMQ workers for background jobs and notifications.",
    result: "Designed for 10,000 concurrent connections",
  },
  {
    title: "Observable & documented",
    desc: "Containerized services on AWS with automated redeploys, health tracked in CloudWatch and Grafana, every API in Swagger/OpenAPI.",
    result: "Monitored and documented end to end",
  },
];

function Node({ children, accent = false, sub }: { children: ReactNode; accent?: boolean; sub?: string }) {
  return (
    <div
      className={`rounded-lg border px-3 py-2.5 text-center font-mono text-[12.5px] ${
        accent ? "border-accent/50 bg-accent/[0.06] text-fg" : "border-line bg-surface text-fg/85"
      }`}
    >
      {children}
      {sub && <div className="mt-0.5 text-[11px] text-muted">{sub}</div>}
    </div>
  );
}

function Edge({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center py-1.5 font-mono text-[11px] text-muted" aria-hidden>
      <span className="h-3 w-px bg-line" />
      <span className="py-0.5">{label}</span>
      <span className="h-3 w-px bg-line" />
    </div>
  );
}

export default function Architecture() {
  return (
    <Section
      id="architecture"
      title="How I"
      accent="build"
      intro="The patterns I use to build backends that scale — and what they delivered in production."
    >
      <Reveal>
        <figure
          className="rounded-xl border border-line bg-bg p-5 md:p-8"
          style={{
            backgroundImage: "radial-gradient(rgb(var(--line)) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        >
          <div
            role="img"
            aria-label="Clients call an API gateway over REST; the gateway talks to domain services and an AI inference service over gRPC; services use PostgreSQL, Redis and AWS."
            className="max-w-[560px] mx-auto"
          >
            <div className="max-w-[240px] mx-auto">
              <Node>Web &amp; mobile clients</Node>
            </div>
            <Edge label="REST · JWT" />
            <div className="max-w-[240px] mx-auto">
              <Node accent>API gateway</Node>
            </div>
            <Edge label="gRPC" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Node>Service</Node>
              <Node>Service</Node>
              <Node>Service</Node>
              <Node accent>AI · GPU</Node>
            </div>
            <Edge label="data & queues" />
            <div className="grid grid-cols-3 gap-2">
              <Node sub="per-service schema">PostgreSQL</Node>
              <Node sub="cache · queues">Redis</Node>
              <Node sub="storage · registry">AWS</Node>
            </div>
          </div>
          <figcaption className="mt-6 text-center font-mono text-[11.5px] text-muted">
            git push → CI detects changed services → Docker build → deploy on AWS → CloudWatch · Grafana
          </figcaption>
        </figure>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-2 gap-x-10">
        {decisions.map((d, i) => (
          <Reveal key={d.title} delay={(i % 2) * 0.05}>
            <div className="py-6 border-t border-line">
              <h3 className="font-medium">{d.title}</h3>
              <p className="mt-2 text-[14px] text-muted leading-relaxed">{d.desc}</p>
              <p className="mt-3 font-mono text-[12.5px] text-accent">→ {d.result}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
