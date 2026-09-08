"use client";

import { IconComponent } from "@/types/portfolio";

interface TechBadgeProps {
  name: string;
  icon: IconComponent;
  size?: "sm" | "md";
}

export default function TechBadge({
  name,
  icon: Icon,
  size = "md",
}: TechBadgeProps) {
  const sizeClasses = {
    sm: "gap-2 px-3 py-2 text-sm",
    md: "gap-2 px-4 py-2.5 text-sm",
  };

  const iconSizes = {
    sm: 16,
    md: 18,
  };

  return (
    <div
      className={`flex items-center rounded-xl border border-white/10 bg-black/30 text-zinc-400 transition-all duration-300 hover:border-white/25 hover:text-white ${sizeClasses[size]}`}
    >
      <Icon size={iconSizes[size]} />
      {name}
    </div>
  );
}
