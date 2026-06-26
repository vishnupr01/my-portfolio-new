export default function GlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/[0.06] blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-white/[0.04] blur-[140px] rounded-full animate-pulse" />
    </div>
  );
}
