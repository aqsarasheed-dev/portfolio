"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

type CertificateCardProps = {
  issuer: string;
  title: string;
  description: string;
  pdf: string;
};

export default function CertificateCard({
  issuer,
  title,
  description,
  pdf,
}: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div>
        <span className="inline-block rounded-full bg-[#233B6E]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#233B6E]">
          {issuer}
        </span>

        <h3 className="mt-5 font-playfair text-2xl text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#233B6E]">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>
      </div>

      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 font-medium text-[#233B6E] transition-all duration-300 group-hover:translate-x-1"
      >
        View Certificate
        <FiExternalLink />
      </a>
    </motion.div>
  );
}