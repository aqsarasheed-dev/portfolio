import type { Metadata } from "next";
import "./globals.css";

import { transcity, playfair } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-aqsarasheed.vercel.app"),

  title: "Aqsa Rasheed | Software Developer Portfolio",

  description:
    "Explore my portfolio featuring AI applications, backend engineering, automation projects, certifications, and modern web development.",

  openGraph: {
    title: "Aqsa Rasheed | Software Developer Portfolio",
    description:
      "Explore my portfolio featuring AI applications, backend engineering, automation projects, certifications, and modern web development.",
    url: "https://portfolio-aqsarasheed.vercel.app",
    siteName: "Aqsa Rasheed Portfolio",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Aqsa Rasheed Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aqsa Rasheed | Software Developer Portfolio",
    description:
      "Software Developer specializing in Backend Development, React, Next.js, Python, and Typescript.",
    images: ["/images/portfolio-preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${transcity.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}