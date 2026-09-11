import {
  Code2,
  Database,
  Cpu,
  Layers3,
  Server,
  Wrench,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiArduino,
  SiEspressif,
  SiPython,
} from "react-icons/si";
import {
  IconComponent,
  PortfolioData,
} from "@/types/portfolio";
import activeDataRaw from "./portfolio.current.json";

// Registry pemetaan nama icon string ke komponen React
export const iconMap: Record<string, IconComponent> = {
  Code2,
  Database,
  Cpu,
  Layers3,
  Server,
  Wrench,
  FaGithub,
  FaLinkedin,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiArduino,
  SiEspressif,
  SiPython,
};

function resolveIcon(iconName?: string): IconComponent {
  if (iconName && iconMap[iconName]) {
    return iconMap[iconName];
  }
  return Code2; // Fallback jika icon tidak ditemukan
}

// Hydrate icon komponen ke objek portofolio
export const portfolioData: PortfolioData = {
  meta: activeDataRaw.meta,
  nav: activeDataRaw.nav,
  hero: {
    ...activeDataRaw.hero,
    socials: (activeDataRaw.hero.socials || []).map((s) => ({
      ...s,
      icon: resolveIcon(s.icon),
    })),
  },
  about: {
    ...activeDataRaw.about,
    highlights: (activeDataRaw.about.highlights || []).map((h) => ({
      ...h,
      icon: resolveIcon(h.icon),
    })),
  },
  skills: {
    ...activeDataRaw.skills,
    categories: (activeDataRaw.skills.categories || []).map((cat) => ({
      ...cat,
      icon: resolveIcon(cat.icon),
      skills: (cat.skills || []).map((sk) => ({
        ...sk,
        icon: resolveIcon(sk.icon),
      })),
    })),
  },
  education: activeDataRaw.education,
  certificates: activeDataRaw.certificates,
  experience: {
    ...activeDataRaw.experience,
    items: (activeDataRaw.experience.items || []).map((exp) => ({
      ...exp,
      technologies: (exp.technologies || []).map((tech) => ({
        ...tech,
        icon: resolveIcon(tech.icon),
      })),
    })),
  },
  contact: {
    ...activeDataRaw.contact,
    socials: (activeDataRaw.contact.socials || []).map((soc) => ({
      ...soc,
      icon: resolveIcon(soc.icon),
    })),
  },
};
