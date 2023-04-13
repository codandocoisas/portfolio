import { Skill } from "@/typings";

export const fetchSkills = async () => {
  const res = await fetch(`http://${process.env.VERCEL_URL}/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
