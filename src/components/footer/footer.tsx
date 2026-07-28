"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 bg-[#F8F7F4] py-16 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-8">

        {/* Logo with gradient */}
        <h2
          className="text-5xl bg-gradient-to-r from-[#233B6E] to-[#4a6fa5] bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-transcity)" }}
        >
          AQSA
        </h2>

        {/* Quote – shortened version */}
        <p className="mt-6 max-w-xl text-center font-playfair text-xl italic leading-9 text-gray-600">
          Passionate about building scalable software, exploring AI, and creating solutions that make a difference through continuous learning.
        </p>

        {/* Socials with hover scale */}
        <div className="mt-10 flex items-center gap-8">
          <a
            href="https://github.com/aqsarasheed-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#233B6E] hover:scale-110"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/aqsa-rasheed-it/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#233B6E] hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="mailto:aqsarasheed254@gmail.com"
            className="transition hover:text-[#233B6E] hover:scale-110"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="mt-8 flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#233B6E]"
          aria-label="Back to top"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Top
        </button>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gray-200" />

        {/* Copyright */}
        <div className="flex w-full flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Aqsa Rasheed. All rights reserved.
          </p>

          <p>
            Designed &amp; Developed with ❤️ using Next.js &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}