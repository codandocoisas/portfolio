import { Ubuntu, PT_Sans } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const ptSans = PT_Sans({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-ptsans",
});
