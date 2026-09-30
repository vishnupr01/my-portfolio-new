import type { CSSProperties } from "react";

// gRPC has no icon in Simple Icons — its official logo is the wordmark itself
export default function GrpcMark({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center font-sans font-bold tracking-[-0.04em] leading-none ${className}`}
      style={{ ...style, fontSize: "0.72em" }}
    >
      gRPC
    </span>
  );
}
