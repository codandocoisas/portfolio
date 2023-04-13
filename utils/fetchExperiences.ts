import { Experience } from "@/typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `https://${process.env.VERCEL_URL}:3000/api/getExperiences`
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
