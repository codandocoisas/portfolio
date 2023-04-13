import { Social } from "@/typings";

export const fetchSocials = async () => {
  const res = await fetch(`https://${process.env.VERCEL_URL}:3000/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
