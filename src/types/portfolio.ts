import { ComponentType } from "react";

export type IconComponent = ComponentType<{
  size?: number;
  className?: string;
}>;

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconComponent;
  label: string;
}

export interface HeroData {
  greeting?: string;
  name: string;
  title: string;
  bio: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  socials: SocialLink[];
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface AboutData {
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  paragraphs: string[];
  highlights: HighlightItem[];
}

export interface SkillItem {
  name: string;
  icon: IconComponent;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: IconComponent;
  description: string;
  skills: SkillItem[];
}

export interface SkillsData {
  badge?: string;
  title?: string;
  description?: string;
  categories: SkillCategory[];
  bottomCallout?: {
    label: string;
    title: string;
    status: string;
  };
}

export interface EducationItem {
  year: string;
  degree: string;
  school: string;
  location: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

export interface EducationData {
  badge?: string;
  title?: string;
  description?: string;
  items: EducationItem[];
  footerLabel?: string;
  footerText?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  issuerLogo?: string;
  date: string;
  credentialId?: string;
  credentialUrl: string;
  image?: string;
  skills?: string[];
  description?: string;
}

export interface CertificatesData {
  badge?: string;
  title?: string;
  description?: string;
  items: CertificateItem[];
}

export interface ExperienceTech {
  name: string;
  icon: IconComponent;
}

export interface ExperienceProject {
  title: string;
  description: string;
  tags?: string[];
  url?: string;
}

export interface ExperienceItem {
  slug: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  detailedDescription?: string[];
  responsibilities: string[];
  keyAchievements?: string[];
  technologies: ExperienceTech[];
  projects?: ExperienceProject[];
  websiteUrl?: string;
}

export interface ExperienceStat {
  value: string;
  label: string;
}

export interface ExperienceData {
  badge?: string;
  title?: string;
  description?: string;
  items: ExperienceItem[];
  stats?: ExperienceStat[];
}

export interface ContactSocial {
  name: string;
  subtitle: string;
  url: string;
  icon: IconComponent;
}

export interface ContactData {
  badge?: string;
  headingLines?: string[];
  headingHighlight?: string;
  description: string;
  email: string;
  location: string;
  copyrightName: string;
  socials: ContactSocial[];
}

export interface PortfolioMeta {
  title: string;
  description: string;
  author: string;
}

export interface NavbarData {
  logoText: string;
  logoHighlight?: string;
  items: NavItem[];
}

export interface PortfolioData {
  meta: PortfolioMeta;
  nav: NavbarData;
  hero: HeroData;
  about: AboutData;
  skills: SkillsData;
  education: EducationData;
  certificates: CertificatesData;
  experience: ExperienceData;
  contact: ContactData;
}
