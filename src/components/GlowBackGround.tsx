export default function GlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Blue Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/30 blur-[120px] rounded-full animate-pulse" />

      {/* Purple Glow */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-accent/30 blur-[120px] rounded-full animate-pulse" />

    </div>
  );
}