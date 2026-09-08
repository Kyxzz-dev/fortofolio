"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionBackground from "./ui/SectionBackground";
import SectionHeader from "./ui/SectionHeader";
import { SkillsData } from "@/types/portfolio";
import { portfolioData } from "@/data/portfolio";

interface SkillsProps {
  data?: SkillsData;
}

export default function Skills({ data = portfolioData.skills }: SkillsProps) {
  const {
    badge = "My Expertise",
    title = "Skills.",
    description = "Technologies and tools I use to transform ideas into scalable, functional, and modern digital solutions.",
    categories = [],
    bottomCallout,
  } = data;

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-32 text-white"
    >
      <SectionBackground glowPosition="center" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge={badge}
          badgeIcon={Sparkles}
          title={title}
          description={description}
        />

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: categoryIndex * 0.1,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] md:p-8"
              >
                {/* Category Header */}
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                      <CategoryIcon size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {category.title}
                      </h3>

                      <p className="text-sm text-zinc-500">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {category.skills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.06,
                        }}
                        whileHover={{
                          y: -5,
                          scale: 1.02,
                        }}
                        className="group/skill relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-5 transition-all duration-300 hover:border-white/30"
                      >
                        {/* Hover glow */}
                        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/[0.06] blur-2xl transition-all duration-500 group-hover/skill:bg-white/[0.12]" />

                        <div className="relative">
                          <div className="mb-5 flex items-center justify-between">
                            <Icon
                              size={30}
                              className="text-zinc-300 transition-transform duration-300 group-hover/skill:scale-110"
                            />

                            <span className="text-xs text-zinc-600">
                              {skill.level}%
                            </span>
                          </div>

                          <h4 className="mb-3 font-medium">
                            {skill.name}
                          </h4>

                          {/* Progress */}
                          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.2 + index * 0.05,
                                ease: "easeOut",
                              }}
                              className="h-full rounded-full bg-white"
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        {bottomCallout && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center md:flex-row md:text-left"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                {bottomCallout.label}
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                {bottomCallout.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-500" />
              {bottomCallout.status}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}