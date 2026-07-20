"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#F8F7F4] py-24">

      <div className="mx-auto max-w-[1400px] px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <p className="font-playfair uppercase tracking-[0.5em] text-[#233B6E]">
            About
          </p>

          <div className="mx-auto mt-6 h-[2px] w-24 bg-[#233B6E]" />

          <h2 className="font-playfair mt-10 text-5xl italic text-[#2C2C2C]">
            Technology is where creativity meets logic.
          </h2>
        </motion.div>

        {/* Content */}

        <div className="grid gap-20 lg:grid-cols-2">

          {/* Image */}

       <motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex justify-center"
>
  <div className="relative overflow-hidden rounded-2xl">

    <Image
      src="/images/profile/profile2.png"
      alt="Aqsa Rasheed"
      width={420}
      height={520}
      sizes="420px"
      className="h-auto w-[420px] object-contain drop-shadow-xl"
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
            <h3 className="font-playfair text-4xl">
              Hi, I'm Aqsa.
            </h3>

            <p className="font-playfair mt-8 text-xl leading-10 text-gray-700">
              I'm a Software Developer passionate about building scalable web
              applications and exploring Artificial Intelligence. My journey
              has been driven by curiosity, continuous learning, and solving
              real-world problems through technology.
            </p>

            <p className="font-playfair mt-8 text-xl leading-10 text-gray-700">
              Currently working as an AI Intern at FlyRank AI, I enjoy creating
               solutions using Nextjs, Supabase, Postgre, Javascript,
              and modern backend technologies.
            </p>

            <div className="mt-12 space-y-4">

              <div>
                <span className="font-playfair font-semibold">
                  Education
                </span>

                <p className="font-playfair text-gray-600">
                  BS Information Technology
                </p>
              </div>

              <div>
                <span className="font-playfair font-semibold">
                  Current Role
                </span>

                <p className="font-playfair text-gray-600">
                   Backend AI Intern • FlyRank AI
                </p>
              </div>

              <div>
                <span className="font-playfair font-semibold">
                  Interests
                </span>

                <p className="font-playfair text-gray-600">
                  AI • Backend • Full Stack Web Development
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}