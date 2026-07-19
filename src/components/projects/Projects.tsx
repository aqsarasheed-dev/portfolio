"use client";

import { section } from "framer-motion/client";
import { projects } from "../../data/project";
import ProjectCard from "./ProjectCard";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="bg-[#F8F7F4] pt-12 pb-14">

      {/* Divider */}
      <div className="mx-auto mb-16 h-px max-w-7xl bg-gray-200" />

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="font-playfair uppercase tracking-[0.4em] text-[#233B6E]">
            Portfolio
          </p>

          <h2 className="mt-6 font-playfair text-5xl text-[#1A1A1A]">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            A selection of projects showcasing my experience in AI,
            backend engineering, automation, and modern web development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/aqsarasheed-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-[#233B6E] px-8 py-4 text-lg transition hover:bg-[#233B6E] hover:text-white"
          >
            <FaGithub />
            Explore More Projects
          </a>
        </div>
      
    </section>
  );
}