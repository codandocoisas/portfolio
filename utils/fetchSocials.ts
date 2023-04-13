import { Social } from "@/typings";

export const fetchSocials = async () => {
  const res = await fetch(`http://${process.env.VERCEL_URL}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
