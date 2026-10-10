"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiAward, FiFileText } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    role: "Backend AI Intern",
    company: "FlyRank AI",
    duration: "2025 – 2026 (Completed)",
    description:
      "Worked on backend AI pipelines, API integrations, and automation tools. Contributed to real-world AI projects using Python, FastAPI, and modern LLM tools.",
    achievements: [
      "Built AI-powered automation workflows",
      "Integrated Groq & OpenAI APIs",
      "Delivered weekly progress reports",
    ],
    certificate: "/documents/flyrank-internship-certificate.pdf",
    recommendation: "/documents/flyrank-recommendation-letter.pdf",
    progressReport: "/documents/flyrank-progress-report.pdf",
  },
  {
    id: 2,
    role: "Agentic AI Engineering Student",
    company: "Ideoversity, Arfa Tower Lahore",
    duration: "2026 – Present",
    description:
      "Currently enrolled in an advanced Agentic AI Engineering program focused on autonomous agents, LangChain, LangGraph, RAG, and multi-agent systems.",
    achievements: [
      "Learning autonomous agent design",
      "Exploring LangChain & LangGraph",
      "Building real-world AI agent projects",
    ],
    certificate: null,
    recommendation: null,
    progressReport: null,
  },
];

export default function Experience() {
  return (
    <section className="bg-[#F8F7F4] py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center lg:mb-14">
          <p className="font-playfair text-sm uppercase tracking-[0.4em] text-[#233B6E] lg:text-base">
            Experience
          </p>
          <h2 className="mt-5 font-playfair text-3xl text-[#1A1A1A] sm:text-4xl lg:mt-6 lg:text-5xl">
            My Journey So Far
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            From backend AI internships to advanced agentic AI learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8 sm:space-y-10 lg:space-y-12 lg:before:absolute lg:before:left-1/2 lg:before:top-0 lg:before:h-full lg:before:w-[2px] lg:before:-translate-x-1/2 lg:before:bg-[#233B6E]/20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Dot – desktop only (center) */}
              <div className="absolute left-1/2 top-6 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#F8F7F4] bg-[#233B6E] lg:block" />

              {/* Card */}
              <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg sm:p-6 lg:w-[calc(50%-2rem)]">
                {/* Duration badge */}
                <span className="inline-block rounded-full bg-[#233B6E]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#233B6E] sm:text-xs">
                  {exp.duration}
                </span>

                <h3 className="mt-3 font-playfair text-xl text-[#1A1A1A] sm:text-2xl">
                  {exp.role}
                </h3>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  {exp.company}
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#233B6E]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Document Links – View only */}
                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      type="application/pdf"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#233B6E]/10 px-4 py-2 text-xs font-semibold text-[#233B6E] transition hover:bg-[#233B6E] hover:text-white"
                    >
                      <FiAward className="flex-shrink-0" />
                      View Certificate
                    </a>
                  )}
                  {exp.recommendation && (
                    <a
                      href={exp.recommendation}
                      target="_blank"
                      rel="noopener noreferrer"
                      type="application/pdf"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#233B6E]/10 px-4 py-2 text-xs font-semibold text-[#233B6E] transition hover:bg-[#233B6E] hover:text-white"
                    >
                      <FiFileText className="flex-shrink-0" />
                      View Recommendation
                    </a>
                  )}
                  {exp.progressReport && (
                    <a
                      href={exp.progressReport}
                      target="_blank"
                      rel="noopener noreferrer"
                      type="application/pdf"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#233B6E]/10 px-4 py-2 text-xs font-semibold text-[#233B6E] transition hover:bg-[#233B6E] hover:text-white"
                    >
                      <FiExternalLink className="flex-shrink-0" />
                      View Progress Report
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}