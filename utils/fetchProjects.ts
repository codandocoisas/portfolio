import { Project } from "@/typings";

export const fetchProjects = async () => {
  const res = await fetch(
    `https://${process.env.VERCEL_URL}:3000/api/getProjects`
  );

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
