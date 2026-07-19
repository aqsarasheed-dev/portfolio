"use client";

import { certificates } from "@/data/certificates";
import CertificateCard from "./CertificateCard";

export default function Certifications() {
  return (
    <section className="bg-[#F8F7F4] pt-16 pb-20">
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="mb-20 text-center">
          <p className="font-playfair uppercase tracking-[0.4em] text-[#233B6E]">
            Certifications
          </p>

          <h2 className="mt-6 font-playfair text-5xl text-[#1A1A1A]">
            Continuous Learning
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
           Learning never stops. 
           These certifications represent my journey of continuous growth in technology and innovation.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              {...certificate}
            />
          ))}
        </div>

      </div>
    </section>
  );
}