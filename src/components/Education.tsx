"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  Award,
} from "lucide-react";
import SectionBackground from "./ui/SectionBackground";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import { EducationData } from "@/types/portfolio";
import { portfolioData } from "@/data/portfolio";

interface EducationProps {
  data?: EducationData;
}

export default function Education({
  data = portfolioData.education,
}: EducationProps) {
  const {
    badge = "Academic Journey",
    title = "Education.",
    description = "My academic background and the foundation that shaped my approach to technology and software development.",
    items = [],
    footerLabel,
    footerText,
  } = data;

  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 py-32 text-white"
    >
      <SectionBackground glowPosition="right" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          badge={badge}
          badgeIcon={GraduationCap}
          title={title}
          description={description}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-0 hidden h-full w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent md:block" />

          <div className="space-y-16">
            {items.map((item, index) => (
              <motion.div
                key={`${item.school}-${item.year}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 hidden h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-black md:flex">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                </div>

                {/* Year */}
                <div className="mb-5 flex items-center gap-3 text-sm text-zinc-500">
                  <Calendar size={15} />
                  <span>{item.year}</span>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card withHoverGlow>
                  <div className="relative p-7 md:p-10">
                    {/* Top */}
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400">
                          <Award size={13} />
                          Academic Degree
                        </div>

                        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                          {item.degree}
                        </h3>

                        <p className="mt-3 text-lg text-zinc-400">
                          {item.school}
                        </p>
                      </div>

                      {/* Icon */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                        <GraduationCap
                          size={27}
                          className="text-zinc-300"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
                      <MapPin size={15} />
                      {item.location}
                    </div>

                    {/* Description */}
                    <p className="mt-7 max-w-3xl leading-7 text-zinc-400">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="mt-8 border-t border-white/10 pt-7">
                        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-zinc-300">
                          <BookOpen size={16} />
                          Areas of Study
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        {(footerLabel || footerText) && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            {footerLabel && (
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
                {footerLabel}
              </p>
            )}

            {footerText && (
              <p className="mt-3 text-zinc-400">{footerText}</p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}