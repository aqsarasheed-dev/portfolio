// src/components/certifications/Certifications.tsx

"use client";

import SocialCards from "@/components/ui/card-fan-carousel";
// ✅ Correct
import { certificateCards } from "@/data/certificateCards";// ✅ Import mapped data

export default function Certifications() {
  return (
    <section className="bg-[#F8F7F4] pt-16 pb-20">
      <div className="mx-auto max-w-7xl px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="font-playfair uppercase tracking-[0.4em] text-[#233B6E]">
            Certifications
          </p>
          <h2 className="mt-6 font-playfair text-5xl text-[#1A1A1A]">
            Continuous Learning
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Learning never stops. These certifications represent my journey of continuous growth in technology and innovation.
          </p>
        </div>

        {/* Fan Carousel */}
        <div className="relative w-full overflow-visible py-4 min-h-[400px]">
          <SocialCards cards={certificateCards} />
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 font-playfair">
          Hover over cards to fan them out • Click to view full certificate
        </p>
      </div>
    </section>
  );
}