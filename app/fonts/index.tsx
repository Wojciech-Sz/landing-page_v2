// eslint-disable-next-line camelcase
import { Caudex, Kaushan_Script } from "next/font/google";

export const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-kaushan-script",
});

export const caudex = Caudex({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caudex",
});
