'use client';

import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
}

export interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
  onProjectClick?: (project: GalleryItem) => void;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, onProjectClick, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [selectedProject, setSelectedProject] = useState<GalleryItem | null>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        const scrollRotation = scrollProgress * 360;
        setRotation(scrollRotation);

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, []);

    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling) {
          setRotation(prev => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isScrolling, autoRotateSpeed]);

    const anglePerItem = 360 / items.length;
    
    return (
      <div
        ref={ref}
        role="region"
        aria-label="Projects Gallery"
        className={cn("relative w-full h-full flex items-center justify-center", className)}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.3, 1 - (normalizedAngle / 180));
            const isFacingFront = normalizedAngle < 90;

            return (
              <div
                key={item.id} 
                role="group"
                aria-label={item.title}
                className="absolute w-[280px] h-[420px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-140px',
                  marginTop: '-210px',
                  opacity: opacity,
                  transition: 'opacity 0.3s linear',
                  pointerEvents: isFacingFront ? 'auto' : 'none',
                  cursor: isFacingFront ? 'pointer' : 'default',
                }}
                onClick={() => {
                  setSelectedProject(item);
                  if (onProjectClick) {
                    onProjectClick(item);
                  }
                }}
              >
                {/* Card Container - Like Your ProjectCard */}
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:y-6">
                  
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-1 flex-col p-4">
                    
                    {/* Title */}
                    <h3 className="font-playfair text-2xl text-[#1A1A1A]">
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#233B6E]">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="mt-3 flex-1 text-sm leading-6 text-gray-600 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#233B6E]/15 bg-[#233B6E]/5 px-2 py-1 text-xs text-[#233B6E]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex gap-2">
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 rounded-full border border-[#233B6E] px-3 py-1 text-xs transition hover:bg-[#233B6E] hover:text-white"
                      >
                        <FaGithub size={12} />
                        GitHub
                      </a>

                      {item.live && item.live !== "Not live" && item.live !== "NOT LIVE" && (
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 rounded-full bg-[#233B6E] px-3 py-1 text-xs text-white transition hover:opacity-90"
                        >
                          <FiExternalLink size={12} />
                          Live Demo
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Selected Project - OPTIONAL */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                
                {/* Title & Subtitle */}
                <div>
                  <h2 className="font-playfair text-4xl text-[#1A1A1A] mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-[#233B6E] font-semibold uppercase tracking-[0.2em] text-sm">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    About This Project
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 bg-[#233B6E]/5 text-[#233B6E] rounded-full text-sm font-medium border border-[#233B6E]/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors"
                  >
                    <FaGithub size={18} />
                    View Code
                  </a>
                  {selectedProject.live && selectedProject.live !== "Not live" && selectedProject.live !== "NOT LIVE" && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#233B6E] hover:bg-[#233B6E]/90 text-white font-semibold rounded-full transition-colors"
                    >
                      <FiExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
