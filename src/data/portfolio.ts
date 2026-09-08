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
import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  meta: {
    title: "Rahmad Rifky Alfaresh — Informatics Engineering & Developer",
    description:
      "Personal portfolio of Rahmad Rifky Alfaresh. Building modern web applications, backend systems, IoT solutions, and scalable software.",
    author: "Rahmad Rifky Alfaresh",
  },
  nav: {
    logoText: "K",
    logoHighlight: ".",
    items: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Education", href: "#education" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Rahmad Rifky Alfaresh",
    title: "Informatics Engineering & Developer",
    bio: "I build modern web applications, backend systems, IoT solutions, and AI-powered automation with a focus on scalable and practical solutions.",
    primaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
    secondaryCta: {
      label: "View My Work",
      href: "#experience",
    },
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com/Kyxzz-dev",
        icon: FaGithub,
        label: "GitHub",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/rifky-alfaresh/",
        icon: FaLinkedin,
        label: "LinkedIn",
      },
    ],
  },
  about: {
    badge: "About Me",
    titlePrefix: "Turning ideas into",
    titleHighlight: "digital solutions.",
    paragraphs: [
      "I am an Informatics Engineering graduate with an interest in software development, web technologies, backend systems, databases, IoT, and AI-powered automation.",
      "I enjoy developing applications from the initial requirements and system design through development, database and API integration, testing, and deployment.",
      "My goal is to build practical, scalable, and user-focused solutions while continuously improving my technical and problem-solving skills.",
    ],
    highlights: [
      {
        icon: Code2,
        title: "Web Development",
        description:
          "Building modern and responsive web applications using modern frontend and backend technologies.",
      },
      {
        icon: Database,
        title: "Backend & Database",
        description:
          "Developing APIs, managing databases, and designing reliable backend systems.",
      },
      {
        icon: Cpu,
        title: "IoT Development",
        description:
          "Developing IoT prototypes and integrating hardware with software systems.",
      },
      {
        icon: Layers3,
        title: "System Development",
        description:
          "Designing and developing systems based on project requirements and real-world needs.",
      },
    ],
  },
  skills: {
    badge: "My Expertise",
    title: "Skills.",
    description:
      "Technologies and tools I use to transform ideas into scalable, functional, and modern digital solutions.",
    categories: [
      {
        title: "Frontend",
        icon: Code2,
        description: "Building modern and responsive interfaces",
        skills: [
          { name: "Next.js", icon: SiNextdotjs, level: 90 },
          { name: "React", icon: SiReact, level: 88 },
          // { name: "TypeScript", icon: SiTypescript, level: 85 },
          { name: "JavaScript", icon: SiJavascript, level: 90 },
          { name: "Tailwind CSS", icon: SiTailwindcss, level: 88 },
        ],
      },
      {
        title: "Backend",
        icon: Server,
        description: "Developing APIs and backend systems",
        skills: [
          { name: "Node.js", icon: SiNodedotjs, level: 85 },
          { name: "Express.js", icon: SiExpress, level: 80 },
          { name: "Laravel", icon: SiLaravel, level: 82 },
          { name: "PHP", icon: SiPhp, level: 80 },
          { name: "Python", icon: SiPython, level: 75 },
        ],
      },
      {
        title: "Database",
        icon: Database,
        description: "Designing and managing application data",
        skills: [
          { name: "PostgreSQL", icon: SiPostgresql, level: 40 },
          { name: "MySQL", icon: SiMysql, level: 85 },
          { name: "Prisma", icon: SiPrisma, level: 30 },
        ],
      },
      {
        title: "Tools & DevOps",
        icon: Wrench,
        description: "Development workflow and deployment",
        skills: [
          { name: "Git", icon: SiGit, level: 90 },
          { name: "GitHub", icon: SiGithub, level: 90 },
          { name: "Docker", icon: SiDocker, level: 75 },
        ],
      },
      {
        title: "IoT",
        icon: Cpu,
        description: "Connecting hardware with software systems",
        skills: [
          { name: "Arduino", icon: SiArduino, level: 80 },
          { name: "ESP32", icon: SiEspressif, level: 82 },
        ],
      },
    ],
    bottomCallout: {
      label: "Always learning",
      title: "Exploring new technologies.",
      status: "Currently building & learning",
    },
  },
  education: {
    badge: "Academic Journey",
    title: "Education.",
    description:
      "My academic background and the foundation that shaped my approach to technology and software development.",
    items: [
      {
        year: "2022 — 2026",
        degree: "Bachelor of Informatics Engineering",
        school: "Universitas Prima Indonesia",
        location: "Medan, Indonesia",
        description:
          "Studied computer science and software development with a focus on web development, databases, system design, and machine learning.",
        highlights: [
          "Informatics Engineering",
          "Software Development",
          "Database & System Design",
          "Machine Learning",
        ],
        current: false,
      },
    ],
    footerLabel: "From learning to building",
    footerText: "Turning academic knowledge into real-world projects.",
  },
  experience: {
    badge: "Career Journey",
    title: "Experience.",
    description:
      "Experiences, projects, and responsibilities that shaped my journey as a developer.",
    items: [
      {
        period: "2026",
        role: "Freelance Software Developer",
        company: "Freelance",
        location: "Remote",
        type: "Freelance",
        description:
          "Developing web applications, SaaS solutions, IoT prototypes, and data management systems based on client requirements.",
        responsibilities: [
          "Developing responsive web applications",
          "Designing database and API integration",
          "Developing IoT prototypes with ESP32",
          "Managing project requirements and development workflow",
        ],
        technologies: [
          { name: "Next.js", icon: SiNextdotjs },
          { name: "Laravel", icon: SiLaravel },
          { name: "ESP32", icon: SiEspressif },
        ],
      },
      {
        period: "2025 — 2026",
        role: "Web Developer Intern",
        company: "Kementerian Hukum dan HAM",
        location: "Indonesia",
        type: "Internship",
        description:
          "Contributed to the development of Sinorat, a web-based system designed to support organizational and administrative processes.",
        responsibilities: [
          "Developing and maintaining web application features",
          "Implementing frontend and backend functionality",
          "Working with databases and application logic",
          "Collaborating with team members during development",
        ],
        technologies: [
          { name: "Laravel", icon: SiLaravel },
          { name: "PHP", icon: Code2 },
        ],
      },
      {
        period: "2025",
        role: "IT Intern",
        company: "DPRD Kota Medan",
        location: "Medan, Indonesia",
        type: "Internship",
        description:
          "Supported the IT and administrative workflow through asset inventory and digital data management activities.",
        responsibilities: [
          "Recording and managing organizational assets",
          "Maintaining inventory data",
          "Supporting administrative data processing",
          "Organizing and validating asset information",
        ],
        technologies: [{ name: "Data Management", icon: Code2 }],
      },
    ],
    stats: [
      { value: "3+", label: "Work Experiences" },
      { value: "10+", label: "Projects Built" },
      { value: "∞", label: "Things to Learn" },
    ],
  },
  contact: {
    badge: "Get In Touch",
    headingLines: ["Let's build", "something"],
    headingHighlight: "great.",
    description:
      "Have a project, idea, or opportunity in mind? Feel free to reach out. I'm always open to discussing new projects and opportunities.",
    email: "alfareshrahmadrifky@gmail.com",
    location: "Medan, Indonesia",
    copyrightName: "Kyxzz",
    socials: [
      {
        name: "GitHub",
        subtitle: "View my projects",
        url: "https://github.com/Kyxzz-dev",
        icon: FaGithub,
      },
      {
        name: "LinkedIn",
        subtitle: "Let's connect",
        url: "https://www.linkedin.com/in/rifky-alfaresh/",
        icon: FaLinkedin,
      },
    ],
  },
};
