// src/data/certificateCards.ts

import { certificates } from "./certificates";
import { CardItem } from "@/components/ui/card-fan-carousel";

export const certificateCards: CardItem[] = certificates.map((cert) => ({
  linkUrl: cert.pdf,
  issuer: cert.issuer,
  title: cert.title,
  description: cert.description,
  // No imgUrl – the carousel uses a gradient background
}));