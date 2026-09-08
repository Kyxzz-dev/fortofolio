"use client";

import { motion } from "framer-motion";
import { HeroData } from "@/types/portfolio";
import { portfolioData } from "@/data/portfolio";

interface HomeProps {
  data?: HeroData;
}

export default function Home({ data = portfolioData.hero }: HomeProps) {
  const {
    greeting = "Hello, I'm",
    name,
    title,
    bio,
    primaryCta,
    secondaryCta,
    socials,
  } = data;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:gap-12 lg:grid-cols-2">
        {/* Text Content */}
        <div className="order-2 space-y-4 text-center lg:order-1 lg:space-y-5 lg:text-left">
          {greeting && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium uppercase tracking-[0.3em] text-purple-500"
            >
              {greeting}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg font-semibold text-gray-400 sm:text-xl lg:text-2xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base lg:mx-0 lg:max-w-2xl lg:text-lg"
          >
            {bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-wrap justify-center gap-3 lg:mt-8 lg:justify-start lg:gap-4"
          >
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200 sm:px-6 sm:py-3"
              >
                {primaryCta.label}
              </a>
            )}

            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-6 sm:py-3"
              >
                {secondaryCta.label}
              </a>
            )}
          </motion.div>

          {/* Social Links */}
          {socials && socials.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 flex justify-center gap-4 lg:mt-10 lg:justify-start lg:gap-5"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 transition hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon size={21} />
                  </a>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative order-1 flex justify-center lg:order-2 lg:block"
        >
          <div className="relative mx-auto h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl" />
            
            {/* Avatar Container */}
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/10 bg-gradient-to-br from-purple-500/20 to-purple-600/10">
              <img 
                src="/avatar.jpg" 
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Decorative Ring */}
            <div className="absolute -inset-4 rounded-full border border-purple-500/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}