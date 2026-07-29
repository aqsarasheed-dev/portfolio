"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-[#F8F7F4] pt-8 sm:pt-12 lg:pt-20">
      <div className="mx-auto flex max-w-[1550px] flex-col items-center justify-center gap-10 px-6 py-10 sm:gap-10 sm:py-14 lg:min-h-[88vh] lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-24 lg:py-0">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full text-center lg:flex-1 lg:text-left"
        >
          <h1 className="font-transcity text-[3.3rem] leading-[0.95] sm:text-[4.8rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9rem] bg-gradient-to-r from-[#233B6E] to-[#4a6fa5] bg-clip-text text-transparent">
            AQSA
            <br />
            RASHEED
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#233B6E] lg:mx-0 lg:mt-8 lg:w-28" />

          <p className="font-playfair mt-6 text-sm uppercase tracking-[0.25em] text-gray-500 sm:text-base lg:text-lg">
            Software Developer
          </p>

          <p className="font-playfair mt-2 text-sm uppercase tracking-[0.25em] text-gray-500 sm:text-base lg:text-lg">
            React.js • Next.js • Node.js • Python • AI
          </p>

          <p className="font-playfair mx-auto mt-6 max-w-[560px] text-base leading-8 text-gray-700 sm:mt-8 sm:text-lg sm:leading-9 lg:mx-0 lg:text-xl lg:leading-10">
            A self-learner passionate about building intelligent software and
            modern web applications. Currently exploring Artificial Intelligence
            while working as a Backend AI Intern at FlyRank AI.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="/resume/ARP.pdf"
              download
              className="flex items-center gap-2 rounded-full bg-[#233B6E] px-6 py-3 text-sm text-white transition duration-300 hover:bg-[#1d315c] sm:px-7 sm:text-base"
            >
              <FaDownload />
              Download CV
            </a>

            <a
              href="#projects-showcase"
              className="flex items-center gap-2 rounded-full border border-[#233B6E] px-6 py-3 text-sm text-[#233B6E] transition duration-300 hover:bg-[#233B6E] hover:text-white sm:px-7 sm:text-base"
            >
              View My Work
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/aqsa-rasheed-it/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#233B6E] px-6 py-3 text-sm text-[#233B6E] transition duration-300 hover:bg-[#233B6E] hover:text-white sm:px-7 sm:text-base"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT - Floating Profile Photo */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative flex w-full items-center justify-center lg:flex-1 lg:pt-0"
        >
          {/* Background Circle */}
          <div className="absolute h-[260px] w-[260px] rounded-full bg-gradient-to-br from-[#dce8fb] via-[#eef3fb] to-[#F8F7F4] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px] lg:h-[540px] lg:w-[540px]" />

          {/* Border Circle */}
          <div className="absolute h-[240px] w-[240px] rounded-full border border-gray-300 opacity-30 sm:h-[320px] sm:w-[320px] md:h-[400px] md:w-[400px] lg:h-[490px] lg:w-[490px]" />

          {/* Profile Image */}
          <Image
            src="/images/profile/profile2.png"
            alt="Aqsa Rasheed"
            width={560}
            height={760}
            loading="eager" 
            priority
            sizes="(max-width:640px) 240px,
                   (max-width:768px) 300px,
                   (max-width:1024px) 380px,
                   560px"
            className="relative z-20 h-auto w-[240px] object-contain object-bottom drop-shadow-2xl sm:w-[300px] md:w-[380px] lg:w-[500px] xl:w-[560px]"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 lg:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}