import type { Metadata } from "next";
import "./globals.css";

import { transcity, playfair } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Aqsa Rasheed",
  description: "Software Developer Portfolio",
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