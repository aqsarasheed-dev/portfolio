"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  image,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="group flex h-[620px] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px)100vw,50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">

        <h3 className="font-playfair text-3xl text-[#1A1A1A]">
          {title}
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#233B6E]">
          {subtitle}
        </p>

        <p className="mt-5 flex-1 text-[16px] leading-7 text-gray-600">
          {description}
        </p>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#233B6E]/15 bg-[#233B6E]/5 px-3 py-1 text-xs text-[#233B6E]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#233B6E] px-4 py-2 text-sm transition hover:bg-[#233B6E] hover:text-white"
          >
            <FaGithub />
            GitHub
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#233B6E] px-4 py-2 text-sm text-white transition hover:opacity-90"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}

        </div>

      </div>
    </motion.div>
  );
}