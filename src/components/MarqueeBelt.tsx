const ITEMS = [
  "BACKEND ENGINEER",
  "NESTJS",
  "MICROSERVICES",
  "GRPC",
  "REAL-TIME SYSTEMS",
  "DISTRIBUTED SYSTEMS",
  "CLOUD NATIVE",
  "NODEJS",
  "POSTGRESQL",
  "DOCKER",
  "AWS ECR",
  "REDIS",
  "SOCKET.IO",
  "PRISMA",
  "NX MONOREPO",
  "GITHUB ACTIONS",
];

export default function MarqueeBelt() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div className="border-y border-white/[0.06] py-3 overflow-hidden bg-white/[0.01]">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeated.map((item, i) => (
          <span key={i} className="shrink-0 inline-flex items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/22 font-mono">
              {item}
            </span>
            <span className="text-white/10 text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
