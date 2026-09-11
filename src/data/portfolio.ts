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

const raw: any = activeDataRaw;

// Hydrate icon komponen ke objek portofolio
export const portfolioData: PortfolioData = {
  meta: raw.meta,
  nav: raw.nav,
  hero: {
    ...raw.hero,
    socials: (raw.hero?.socials || []).map((s: any) => ({
      ...s,
      icon: resolveIcon(s.icon),
    })),
  },
  about: {
    ...raw.about,
    highlights: (raw.about?.highlights || []).map((h: any) => ({
      ...h,
      icon: resolveIcon(h.icon),
    })),
  },
  skills: {
    ...raw.skills,
    categories: (raw.skills?.categories || []).map((cat: any) => ({
      ...cat,
      icon: resolveIcon(cat.icon),
      skills: (cat.skills || []).map((sk: any) => ({
        ...sk,
        icon: resolveIcon(sk.icon),
      })),
    })),
  },
  education: raw.education || { items: [] },
  certificates: raw.certificates || { items: [] },
  experience: {
    ...raw.experience,
    items: (raw.experience?.items || []).map((exp: any) => ({
      ...exp,
      slug: exp.slug || "",
      technologies: (exp.technologies || []).map((tech: any) => ({
        ...tech,
        icon: resolveIcon(tech.icon),
      })),
    })),
  },
  contact: {
    ...raw.contact,
    socials: (raw.contact?.socials || []).map((soc: any) => ({
      ...soc,
      icon: resolveIcon(soc.icon),
    })),
  },
};
