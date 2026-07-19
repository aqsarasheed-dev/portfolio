"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F8F7F4] py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-8">

        {/* Logo */}
        <h2
          className="text-5xl"
          style={{ fontFamily: "var(--font-transcity)" }}
        >
          AQSA
        </h2>

        {/* Quote */}
        <p className="mt-6 max-w-xl text-center font-playfair text-xl italic leading-9 text-gray-600">
          Passionate about building scalable software, exploring AI, and creating solutions that make a difference
          and continuous learning.
        </p>

        {/* Socials */}
        <div className="mt-10 flex items-center gap-8">

          <a
            href="https://github.com/aqsarasheed-dev"
            target="_blank"
            className="transition hover:text-[#233B6E]"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="www.linkedin.com/in/aqsa-rasheed-it"
            target="_blank"
            className="transition hover:text-[#233B6E]"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="aqsarasheed254@gmail.com"
            className="transition hover:text-[#233B6E]"
          >
            <FaEnvelope size={28} />
          </a>

        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gray-200" />

        {/* Copyright */}
        <div className="flex w-full flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Aqsa Rasheed. All rights reserved.
          </p>

          <p>
            Designed & Developed with ❤️ using Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}