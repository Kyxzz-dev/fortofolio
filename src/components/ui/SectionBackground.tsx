"use client";

interface SectionBackgroundProps {
  glowPosition?: "left" | "right" | "center";
  glowColor?: "purple" | "white";
}

export default function SectionBackground({
  glowPosition = "center",
  glowColor = "purple",
}: SectionBackgroundProps) {
  const glowClass: Record<string, string> = {
    left: "absolute left-0 top-1/4 h-[500px] w-[500px] -translate-x-1/2",
    right: "absolute right-0 top-1/3 h-[400px] w-[400px] translate-x-1/2",
    center: "absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2",
  };

  const colorClass = glowColor === "purple" 
    ? "bg-purple-500/8" 
    : "bg-white/[0.03]";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle accent glow */}
      <div
        className={`${glowClass[glowPosition]} rounded-full ${colorClass} blur-[100px]`}
      />
    </div>
  );
}
