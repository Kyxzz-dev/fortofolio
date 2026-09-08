"use client";

import { motion } from "framer-motion";
import { IconComponent } from "@/types/portfolio";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: IconComponent;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleHighlight = ".",
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`mb-16 md:mb-20 ${
        isCenter ? "text-center mx-auto" : ""
      } ${className}`}
    >
      {badge && (
        <div
          className={`mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-zinc-500 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          {BadgeIcon && <BadgeIcon size={16} />}
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
        {title}
        {titleHighlight && (
          <span className="text-purple-500">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
