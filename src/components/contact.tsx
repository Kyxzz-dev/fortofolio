"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import SectionBackground from "./ui/SectionBackground";
import { ContactData } from "@/types/portfolio";
import { portfolioData } from "@/data/portfolio";

interface ContactProps {
  data?: ContactData;
}

export default function Contact({
  data = portfolioData.contact,
}: ContactProps) {
  const [copied, setCopied] = useState(false);
  const {
    badge = "Get In Touch",
    headingLines = ["Let's build", "something"],
    headingHighlight = "great.",
    description,
    email,
    location,
    copyrightName,
    socials = [],
  } = data;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden px-6 py-32 text-white"
    >
      <SectionBackground glowPosition="center" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-between">
        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            <Mail size={17} />
            {badge}
          </div>

          <h2 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            {headingLines.map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
            <span className="text-purple-500">{headingHighlight}</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            {description}
          </p>
        </motion.div>

        {/* Contact Actions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-16"
        >
          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:border-white/25 hover:bg-white/[0.04] md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Mail size={23} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Email me
                  </p>

                  <p className="mt-1 text-base text-zinc-300 md:text-lg">
                    {email}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                {/* Copy */}
                <button
                  onClick={copyEmail}
                  className="flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-zinc-300 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy
                    </>
                  )}
                </button>

                {/* Send */}
                <a
                  href={`mailto:${email}`}
                  className="flex h-12 items-center gap-2 rounded-xl bg-white px-5 text-sm font-medium text-black transition-all hover:scale-[1.03] hover:bg-zinc-200"
                >
                  Send
                  <Send size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          {socials && socials.length > 0 && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-4">
                      <Icon size={23} />

                      <div>
                        <p className="font-medium">{social.name}</p>
                        <p className="text-sm text-zinc-600">
                          {social.subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </a>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-20 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            {location}
          </div>

          <p>
            © {new Date().getFullYear()} {copyrightName}. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}