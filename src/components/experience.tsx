"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ArrowUpRight,
  Building2,
} from "lucide-react";
import SectionBackground from "./ui/SectionBackground";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import TechBadge from "./ui/TechBadge";
import { ExperienceData } from "@/types/portfolio";
import { portfolioData } from "@/data/portfolio";

interface ExperienceProps {
  data?: ExperienceData;
}

export default function Experience({
  data = portfolioData.experience,
}: ExperienceProps) {
  const {
    badge = "Career Journey",
    title = "Experience.",
    description = "Experiences, projects, and responsibilities that shaped my journey as a developer.",
    items = [],
    stats = [],
  } = data;

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-32 text-white"
    >
      <SectionBackground glowPosition="left" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge={badge}
          badgeIcon={Briefcase}
          title={title}
          description={description}
        />

        {/* Experience List */}
        <div className="space-y-10">
          {items.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group relative"
            >
              {/* Number */}
              <div className="absolute -left-3 -top-6 hidden select-none text-[100px] font-bold leading-none text-white/[0.025] lg:block">
                0{index + 1}
              </div>

              <Card withTopLine className="p-7 md:p-10">
                  {/* Header */}
                  <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex gap-5">
                      {/* Icon */}
                      <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] sm:flex">
                        <Building2 size={24} className="text-zinc-300" />
                      </div>

                      <div>
                        {/* Type */}
                        <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">
                          {experience.type}
                        </div>

                        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                          {experience.role}
                        </h3>

                        <p className="mt-2 text-lg text-zinc-400">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar size={15} />
                      {experience.period}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
                    <MapPin size={15} />
                    {experience.location}
                  </div>

                  {/* Description */}
                  <p className="mt-7 max-w-4xl leading-7 text-zinc-400">
                    {experience.description}
                  </p>

                  {/* Content Grid */}
                  <div className="mt-10 grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-[1fr_280px]">
                    {/* Responsibilities */}
                    <div>
                      <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Responsibilities
                      </p>

                      <ul className="space-y-3">
                        {experience.responsibilities.map(
                          (responsibility) => (
                            <li
                              key={responsibility}
                              className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                              {responsibility}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Technologies
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <TechBadge
                            key={technology.name}
                            name={technology.name}
                            icon={technology.icon}
                            size="sm"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                {/* Detail Link Button */}
                <Link
                  href={`/experience/${experience.slug}`}
                  aria-label={`View details for ${experience.role} at ${experience.company}`}
                  title="View experience details"
                  className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-white group-hover:border-white/30 group-hover:text-white"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </Card>
            </motion.article>
          ))}
        </div>

        {/* Bottom Stats */}
        {stats && stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`mt-16 grid gap-4 ${
              stats.length === 3
                ? "sm:grid-cols-3"
                : stats.length === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-4"
            }`}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}