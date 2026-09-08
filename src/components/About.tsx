"use client";

import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./ui/SectionHeader";
import { AboutData } from "@/types/portfolio";
import { portfolioData } from "@/data/portfolio";

interface AboutProps {
  data?: AboutData;
}

export default function About({ data = portfolioData.about }: AboutProps) {
  const {
    badge = "About Me",
    titlePrefix = "Turning ideas into",
    titleHighlight = "digital solutions.",
    paragraphs = [],
    highlights = [],
  } = data;

  return (
    <section id="about" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeader
            badge={badge}
            title={`${titlePrefix} `}
            titleHighlight={titleHighlight}
            align="left"
          />
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            {/* Description */}
            <div className="space-y-5">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-8 text-gray-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}