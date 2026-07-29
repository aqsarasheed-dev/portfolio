// src/data/certificateCards.ts
import { certificates } from "./certificates";
import { CardItem } from "@/components/ui/certificate-stack"; // ✅ correct import

export const certificateCards: CardItem[] = certificates.map((cert) => ({
  id: cert.id,
  linkUrl: cert.pdf,
  issuer: cert.issuer,
  title: cert.title,
  description: cert.description,
}));