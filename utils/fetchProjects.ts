import { sanityClient } from "@/sanity";
import { Project } from "@/typings";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "project"]{
      ...,
      technologies[]->
    }
`;

export const fetchProjects = async () => {
  const projects: Project[] = await sanityClient.fetch(query);
  return projects;
};
