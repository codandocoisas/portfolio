import { Skill } from "@/typings";

export const fetchSkills = async () => {
  const res = await fetch(`https://${process.env.VERCEL_URL}:3000/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
