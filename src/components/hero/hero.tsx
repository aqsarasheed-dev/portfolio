"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#F8F7F4] pt-12 lg:pt-20">
      <div className="mx-auto flex min-h-[88vh] max-w-[1550px] flex-col items-center justify-center gap-16 px-8 lg:flex-row lg:items-center lg:justify-between lg:px-24">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h1 className="font-transcity text-[5rem] leading-[0.9] md:text-[8rem] xl:text-[9rem]">
            AQSA
            <br />
            RASHEED
          </h1>

          <div className="mt-8 h-[2px] w-28 bg-[#233B6E]" />

          <p className="font-playfair mt-8 text-lg uppercase tracking-[0.3em] text-gray-500">
            Software Developer
          </p>

          <p className="font-playfair mt-2 text-lg uppercase tracking-[0.3em] text-gray-500">
            React.js • Node.js • Python • AI
          </p>

          <p className="font-playfair mt-8 max-w-[540px] text-xl leading-10 text-gray-700">
            A self-learner who turns every free moment into a skill and every
            project into a lesson. Currently exploring Artificial Intelligence
            while working as a Backend AI Intern at FlyRank AI.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume/AR-IT.pdf"
              download
              className="flex items-center gap-2 rounded-full bg-[#233B6E] px-7 py-3 text-white transition duration-300 hover:bg-[#1c3059]"
            >
              <FaDownload />
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/aqsa-rasheed-it/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#233B6E] px-7 py-3 text-[#233B6E] transition duration-300 hover:bg-[#233B6E] hover:text-white"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.3,
          }}
          className="relative flex flex-1 items-center justify-center"
        >
          {/* Background Circle */}

          <div className="absolute h-[540px] w-[540px] rounded-full bg-gradient-to-br from-[#dce8fb] via-[#eef3fb] to-[#F8F7F4]" />

          <div className="absolute h-[540px] w-[490px] rounded-full border border-gray-300 opacity-30" />

          {/* Profile */}

          <Image
            src="/images/profile/profile2.png"
            alt="Aqsa Rasheed"
            width={560}
            height={760}
            priority
            className="relative z-20 h-auto w-[430px] object-contain object-bottom drop-shadow-2xl lg:w-[560px]"
          />
        </motion.div>
      </div>
    </section>
  );
}