/* eslint-disable @next/next/no-img-element */
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { urlFor } from "@/sanity";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { ptSans, ubuntu } from "@/utils/fonts";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}: Props) {
  return (
    <div
      className={`bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    z-0 overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#D90724]/80 ${ptSans.variable} ${ubuntu.variable}`}
    >
      <Head>
        <title>Codando Coisas | Portfolio</title>
        <meta name="robots" content="index,nofollow" />
        <meta
          name="description"
          content="Personal Portfolio of a Experienced Full-Stack Developer & Software Engineer with expertise in Web and Mobile Development, Web Design, and cutting-edge technologies. Passionate about solving complex problems and delivering innovative solutions, always striving to stay up-to-date with industry trends. Committed to communication and collaboration to achieve the best results for clients."
          key="desc"
        />
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src={urlFor(pageInfo.heroImage).url()}
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Social[] = await fetchSocials();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      socials,
      experiences,
      skills,
      projects,
    },
    revalidate: 86400,
  };
};
