import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  Award,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import SectionBackground from "@/components/ui/SectionBackground";
import Card from "@/components/ui/Card";
import TechBadge from "@/components/ui/TechBadge";
import { portfolioData } from "@/data/portfolio";
import { ExperienceItem } from "@/types/portfolio";

interface ExperienceDetailProps {
  slug: string;
}

export default function ExperienceDetailPage({ slug }: ExperienceDetailProps) {
  const items = portfolioData.experience.items;
  const currentIndex = items.findIndex((item) => item.slug === slug);
  const experience: ExperienceItem = items[currentIndex] || items[0];

  const prevExp = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextExp = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  const siteMeta = portfolioData.meta;
  const pageTitle = `${experience.role} at ${experience.company} | ${siteMeta.author}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={experience.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative min-h-screen text-white selection:bg-purple-500/30 selection:text-white">
        {/* Ambient Glow */}
        <SectionBackground glowPosition="center" glowColor="purple" />

        {/* Top Floating Navbar */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/#experience"
              className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <span>Back to Experience</span>
            </Link>

            <div className="hidden items-center gap-2 text-xs text-zinc-500 sm:flex">
              <span>Home</span>
              <span>/</span>
              <Link href="/#experience" className="hover:text-zinc-300">
                Experience
              </Link>
              <span>/</span>
              <span className="max-w-[200px] truncate text-zinc-300">
                {experience.company}
              </span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative mx-auto max-w-6xl px-6 py-12 md:py-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            {/* Type badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300">
              <Briefcase size={13} />
              <span>{experience.type}</span>
            </div>

            {/* Role Title */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {experience.role}
            </h1>

            {/* Subtitle / Company & Metadata */}
            <div className="mt-6 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-zinc-400 sm:text-base">
              <div className="flex items-center gap-2">
                <Building2 size={18} className="text-purple-400" />
                <span className="font-semibold text-zinc-200">
                  {experience.company}
                </span>
              </div>

              <div className="h-1 w-1 rounded-full bg-zinc-600 hidden sm:block" />

              <div className="flex items-center gap-2 text-zinc-400">
                <Calendar size={16} />
                <span>{experience.period}</span>
              </div>

              <div className="h-1 w-1 rounded-full bg-zinc-600 hidden sm:block" />

              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin size={16} />
                <span>{experience.location}</span>
              </div>

              {experience.websiteUrl && (
                <a
                  href={experience.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 sm:text-sm"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Grid Layout: Main Details + Sidebar */}
          <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
            {/* Left / Main Column */}
            <div className="space-y-10">
              {/* Detailed Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card withTopLine className="p-7 md:p-9">
                  <div className="mb-5 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-400">
                      <Sparkles size={18} />
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      Overview & Context
                    </h2>
                  </div>

                  <div className="space-y-4 text-base leading-relaxed text-zinc-300">
                    {experience.detailedDescription &&
                    experience.detailedDescription.length > 0 ? (
                      experience.detailedDescription.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{experience.description}</p>
                    )}
                  </div>
                </Card>
              </motion.section>

              {/* Key Responsibilities */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card withTopLine className="p-7 md:p-9">
                  <div className="mb-6 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-400">
                      <CheckCircle2 size={18} />
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      Key Responsibilities
                    </h2>
                  </div>

                  <ul className="space-y-3.5">
                    {experience.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300 md:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.section>

              {/* Key Achievements (if available) */}
              {experience.keyAchievements &&
                experience.keyAchievements.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Card withTopLine className="p-7 md:p-9">
                      <div className="mb-6 flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-400">
                          <Award size={18} />
                        </div>
                        <h2 className="text-xl font-semibold tracking-tight">
                          Key Achievements & Impact
                        </h2>
                      </div>

                      <div className="grid gap-3.5">
                        {experience.keyAchievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm leading-relaxed text-zinc-300 md:text-base"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 shrink-0 text-emerald-400"
                            />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.section>
                )}

              {/* Related Projects (if available) */}
              {experience.projects && experience.projects.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  <Card withTopLine className="p-7 md:p-9">
                    <div className="mb-6 flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-400">
                        <Layers size={18} />
                      </div>
                      <h2 className="text-xl font-semibold tracking-tight">
                        Featured Systems & Projects
                      </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {experience.projects.map((proj, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-white">
                              {proj.title}
                            </h3>
                            {proj.url && (
                              <a
                                href={proj.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white"
                                title="Open project link"
                              >
                                <ArrowUpRight size={16} />
                              </a>
                            )}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                            {proj.description}
                          </p>
                          {proj.tags && proj.tags.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {proj.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-lg border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-zinc-400"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.section>
              )}
            </div>

            {/* Right / Sidebar Column */}
            <div className="space-y-8">
              {/* Technologies Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card withTopLine className="p-6 md:p-7">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                    Technologies Used
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <TechBadge
                        key={tech.name}
                        name={tech.name}
                        icon={tech.icon}
                        size="sm"
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Quick Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <Card withTopLine className="p-6 md:p-7">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                    Role Summary
                  </p>

                  <div className="space-y-4 text-sm">
                    <div className="border-b border-white/5 pb-3">
                      <span className="text-xs text-zinc-500">Company</span>
                      <p className="mt-0.5 font-medium text-zinc-200">
                        {experience.company}
                      </p>
                    </div>

                    <div className="border-b border-white/5 pb-3">
                      <span className="text-xs text-zinc-500">Employment Type</span>
                      <p className="mt-0.5 font-medium text-zinc-200">
                        {experience.type}
                      </p>
                    </div>

                    <div className="border-b border-white/5 pb-3">
                      <span className="text-xs text-zinc-500">Duration</span>
                      <p className="mt-0.5 font-medium text-zinc-200">
                        {experience.period}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs text-zinc-500">Location</span>
                      <p className="mt-0.5 font-medium text-zinc-200">
                        {experience.location}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Get in touch CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-transparent p-6 text-center">
                  <h3 className="text-lg font-semibold">Have a project in mind?</h3>
                  <p className="mt-2 text-xs text-zinc-400">
                    Let&apos;s collaborate and build something remarkable together.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500/40 bg-purple-600/30 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <span>Contact Me</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Previous & Next Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 border-t border-white/10 pt-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {prevExp ? (
                <Link
                  href={`/experience/${prevExp.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 group-hover:text-purple-400">
                    <ArrowLeft size={13} />
                    <span>Previous Experience</span>
                  </span>
                  <div className="mt-2">
                    <p className="font-semibold text-zinc-200 group-hover:text-white">
                      {prevExp.role}
                    </p>
                    <p className="text-xs text-zinc-400">{prevExp.company}</p>
                  </div>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}

              {nextExp ? (
                <Link
                  href={`/experience/${nextExp.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-right transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <span className="inline-flex items-center justify-end gap-1.5 text-xs text-zinc-500 group-hover:text-purple-400">
                    <span>Next Experience</span>
                    <ArrowRight size={13} />
                  </span>
                  <div className="mt-2">
                    <p className="font-semibold text-zinc-200 group-hover:text-white">
                      {nextExp.role}
                    </p>
                    <p className="text-xs text-zinc-400">{nextExp.company}</p>
                  </div>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/#experience"
                className="inline-flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-zinc-300"
              >
                <span>← Back to all experiences on homepage</span>
              </Link>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = portfolioData.experience?.items || [];
  const paths = items
    .filter(
      (item) =>
        item &&
        typeof item.slug === "string" &&
        item.slug.trim().length > 0
    )
    .map((item) => ({
      params: { slug: item.slug.trim() },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug as string) || "";
  const items = portfolioData.experience?.items || [];
  const exists = items.some((item) => item.slug === slug);

  if (!exists) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
    },
  };
};
