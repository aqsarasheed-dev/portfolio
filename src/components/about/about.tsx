"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
            About
          </p>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-[#233B6E] lg:mt-6 lg:w-24" />

          <h2 className="font-playfair mt-8 text-3xl italic text-[#2C2C2C] sm:text-4xl lg:mt-10 lg:text-5xl">
            Technology is where creativity meets logic.
          </h2>
        </motion.div>

        {/* Content */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image (Desktop Only) */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden justify-center lg:flex"
          >
            <div className="relative overflow-hidden rounded-2xl">
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

          {/* Story */}

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
              I'm a Software Developer passionate about building scalable web
              applications and exploring Artificial Intelligence. My journey
              has been driven by curiosity, continuous learning, and solving
              real-world problems through technology.
            </p>

            <p className="font-playfair mt-6 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9 lg:mt-8 lg:text-xl lg:leading-10">
              Currently working as a Backend AI Intern at FlyRank AI, I enjoy
              creating modern applications using Next.js, Supabase,
              PostgreSQL, JavaScript, Python, and AI technologies.
            </p>

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
                  Backend AI Intern • FlyRank AI
                </p>
              </div>

              <div>
                <span className="font-playfair font-semibold text-[#1A1A1A]">
                  Interests
                </span>

                <p className="font-playfair mt-1 text-gray-600">
                  Artificial Intelligence • Backend • Full Stack Development
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}