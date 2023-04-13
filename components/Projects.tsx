import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const reverseProjects = projects.reverse();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex overflow-hidden relative flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0 font-ptsans"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-ubuntu">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll 
      overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#D90724]/80"
      >
        {reverseProjects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col
            space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              className="h-1/2"
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt={project.title}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center font-ubuntu">
                <span className="underline decoration-[#D90724]/50 underline-offset-8">
                  Case {i + 1} of {projects.length}:
                </span>
                &nbsp;{project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center rounded-full object-cover overflow-hidden">
                {project?.technologies.map((technology) => (
                  <Image
                    width={1000}
                    height={1000}
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                    className="h-10 w-10 rounded-full"
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
              <div className="w-full text-center">
                <Link
                  href={project?.linkToBuild}
                  className="text-lg text-center mt-2 decoration-[#D90724]/50 underline underline-offset-8"
                >
                  {project?.linkToBuild.replace("https://", "")}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#D90724]/10 left-0 h-[500px]
        -skew-y-12"
      ></div>
    </motion.div>
  );
}
