"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-[#F8F7F4] py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center lg:mb-24"
        >
          <p className="font-playfair text-sm uppercase tracking-[0.4em] text-[#233B6E] lg:text-base">
            📖 About
          </p>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-[#233B6E] lg:mt-6 lg:w-24" />

          <h2 className="font-playfair mt-8 text-3xl italic text-[#2C2C2C] sm:text-4xl lg:mt-10 lg:text-5xl">
            Technology is where creativity meets logic.
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image – visible only on desktop (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden justify-center lg:flex"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Decorative accent */}
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#233B6E]/5" />
              <Image
                src="/images/profile/profile2.png"
                alt="Aqsa Rasheed"
                width={420}
                height={520}
                sizes="420px"
                className="h-auto w-[380px] xl:w-[420px] object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Story – no mobile image now */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-playfair text-3xl lg:text-4xl">
              Hi, I'm Aqsa.
            </h3>

            <p className="font-playfair mt-6 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9 lg:mt-8 lg:text-xl lg:leading-10">
              I'm an AI-focused  passionate about building  systems
that solve real problems. My journey has been driven by curiosity, a love
for continuous learning, and the belief that AI can make everyday life
simpler and smarter.
            </p>

            <p className="font-playfair mt-6 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9 lg:mt-8 lg:text-xl lg:leading-10">
              Right now, I'm pursuing Agentic AI Engineering at Ideoversity, Arfa Tower Lahore, 
after completing a Backend AI Internship at FlyRank AI. My focus has shifted from 
traditional web apps to building autonomous AI agents systems that can reason, 
plan, and take action. I work with Python, LLM, LangChain, LangGraph, RAG and modern AI stacks 
to bring these ideas to life.
            </p>

            {/* Education & Current Role */}
            <div className="mt-10 space-y-6">
              <div>
                <span className="font-playfair font-semibold text-[#1A1A1A]">
                  Education
                </span>
                <p className="font-playfair mt-1 text-gray-600">
                  BS Information Technology
                </p>
              </div>

              <div>
                <span className="font-playfair font-semibold text-[#1A1A1A]">
                  Current Role
                </span>
                <p className="font-playfair mt-1 text-gray-600">
                  Agentic AI Engineering • Ideoversity, Arfa Tower Lahore
                </p>
              </div>
                <div>
    <span className="font-playfair font-semibold text-[#1A1A1A]">Past Role</span>
    <p className="font-playfair mt-1 text-gray-600">
      Backend AI Intern • FlyRank AI (Completed)
    </p>
  </div>
            </div>

            {/* Interests – pill style with icons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#233B6E]/10 px-4 py-2 text-sm font-medium text-[#233B6E]">
                🤖 Agentic AI & LLMs
              </span>
              <span className="rounded-full bg-[#233B6E]/10 px-4 py-2 text-sm font-medium text-[#233B6E]">
                🌱 Growing Every Day
              </span>
              <span className="rounded-full bg-[#233B6E]/10 px-4 py-2 text-sm font-medium text-[#233B6E]">
                🛠️ Building Side Projects
              </span>
            </div>

            {/* Connect Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/aqsa-rasheed-it/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#233B6E] px-6 py-3 text-sm text-white transition hover:bg-[#1d315c]"
              >
                <FaLinkedin />
                Let's Connect
              </a>
              <a
                href="mailto:aqsarasheed254@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-[#233B6E] px-6 py-3 text-sm text-[#233B6E] transition hover:bg-[#233B6E] hover:text-white"
              >
                Email Me
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}