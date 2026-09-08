import Head from "next/head";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import { PortfolioData } from "@/types/portfolio";
import { portfolioData } from "@/data/portfolio";

interface PortfolioPageProps {
  data?: PortfolioData;
}

export default function Page({ data = portfolioData }: PortfolioPageProps) {
  const { meta, nav, hero, about, skills, education, experience, contact } =
    data;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-white selection:bg-purple-500/30 selection:text-white">
        <Navbar data={nav} />
        <Home data={hero} />
        <About data={about} />
        <Skills data={skills} />
        <Education data={education} />
        <Experience data={experience} />
        <Contact data={contact} />
      </main>
    </>
  );
}