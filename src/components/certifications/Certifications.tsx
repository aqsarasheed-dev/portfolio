// src/components/certifications/Certifications.tsx
"use client";

import CertificateStack from "@/components/ui/certificate-stack";
import { certificateCards } from "@/data/certificateCards";

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

        <div className="relative w-full overflow-visible py-4">
          <CertificateStack cards={certificateCards} />
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 font-playfair">
          Click "Next Certificate" to browse • Click "View" to open the certificate
        </p>
      </div>
    </section>
  );
}