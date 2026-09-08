"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  withHoverGlow?: boolean;
  withTopLine?: boolean;
}

export default function Card({
  children,
  className = "",
  withHoverGlow = false,
  withTopLine = false,
}: CardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-sm transition-all duration-500 hover:border-white/25 hover:bg-white/[0.045] ${className}`}
    >
      {/* Top line */}
      {withTopLine && (
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}

      {/* Hover glow */}
      {withHoverGlow && (
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl transition-all duration-500 group-hover:bg-white/[0.08]" />
      )}

      {children}
    </div>
  );
}
