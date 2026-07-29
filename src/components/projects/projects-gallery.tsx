'use client';

import React from 'react';
import { CircularGallery, type GalleryItem } from '@/components/ui/circular-gallery';
import { projects } from '@/data/project';
import { FaGithub } from 'react-icons/fa';

const ProjectsGallery = () => {
  const galleryItems: GalleryItem[] = projects.map(project => ({
    id: project.id,
    title: project.title,
    subtitle: project.subtitle,
    description: project.description,
    tech: project.tech,
    image: project.image,
    github: project.github,
    live: project.live,
  }));

  return (
    <div className="w-full bg-[#F8F7F4]" style={{ height: '120vh' }}>
      {/* Sticky container – flex column, centered content */}
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#F8F7F4] px-4 py-8">
        
        {/* Header – at top, centered */}
        <div className="flex w-full flex-col items-center text-center">
          <p className="font-playfair text-sm uppercase tracking-[0.4em] text-[#233B6E]">
            Portfolio
          </p>
          <h1 className="font-playfair text-4xl text-[#1A1A1A] md:text-5xl">
            Featured Projects
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-gray-600">
            A selection of projects showcasing my working in AI, backend engineering, automation, and modern web development.
          </p>
        </div>

        {/* Gallery – takes remaining space, centers vertically */}
        <div className="flex-1 w-full min-h-0 relative z-10">
          <CircularGallery items={galleryItems} />
        </div>

        {/* Bottom section – info + button */}
        <div className="flex w-full flex-col items-center gap-3 pt-4">
          <p className="text-center text-sm text-gray-500">
            Scroll to rotate the gallery • Click cards to view more details
          </p>
          <a
            href="https://github.com/aqsarasheed-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-[#233B6E] px-8 py-3 text-lg transition hover:bg-[#233B6E] hover:text-white"
          >
            <FaGithub />
            Explore More Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;