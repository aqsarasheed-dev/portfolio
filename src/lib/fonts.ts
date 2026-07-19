// src/lib/fonts.ts
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";

// ✅ Path starts with "/" → Next.js looks in the "public" folder
export const transcity = localFont({
   src: "../../public/fonts/transcity.otf", // 👈 change this line
  variable: "--font-transcity",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});