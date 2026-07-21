"use client";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const education = [
  {
    period: "July 2024 — Present",
    degree: "Bachelor of Engineering — Information Technology",
    institution: "Government Technological University, Ahmedabad",
    description:
      "Currently in 6th semester. Building expertise in software engineering, AI systems, distributed computing, and full-stack development. Active in national hackathons and open-source projects.",
    grade: "Currently Pursuing",
    current: true,
  },
  {
    period: "Sep 2021 — Jun 2024",
    degree: "Diploma in Information Technology",
    institution: "Government Technological University, Ahmedabad",
    description:
      "3-year diploma covering core CS fundamentals, web technologies, database management, and software development practices.",
    grade: "9.05 CGPA",
    current: false,
  },
];

export function EducationSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const accent = "#22c55e";
  const lineColor = isDark ? "rgba(34,197,94,0.2)" : "rgba(34,197,94,0.3)";

  return (
    <section
      id="education"
      className="py-28 px-4 sm:px-6 lg:px-8"
      style={{ background: bg }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: textPrimary }}
          >
            Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{ left: 20, background: lineColor }}
          />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="relative flex gap-10 pl-14"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-6 z-10"
                  style={{ width: 40, height: 40 }}
                >
                  {edu.current ? (
                    /* Pulsing ring for current study */
                    <div className="relative flex items-center justify-center w-full h-full">
                      {/* Outer pulse rings */}
                      <motion.div
                        className="absolute"
                        style={{
                          width: 40,
                          height: 40,
                          border: `1.5px solid ${accent}`,
                          borderRadius: 0,
                          opacity: 0.5,
                        }}
                        animate={{
                          scale: [1, 1.55, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                      <motion.div
                        className="absolute"
                        style={{
                          width: 40,
                          height: 40,
                          border: `1.5px solid ${accent}`,
                          borderRadius: 0,
                          opacity: 0.3,
                        }}
                        animate={{ scale: [1, 1.9, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                      />
                      {/* Inner square dot */}
                      <div
                        style={{
                          width: 16,
                          height: 16,
                          background: accent,
                          borderRadius: 0,
                        }}
                      />
                    </div>
                  ) : (
                    /* Static square dot for completed */
                    <div className="flex items-center justify-center w-full h-full">
                      <div
                        style={{
                          width: 14,
                          height: 14,
                          background: isDark
                            ? "rgba(34,197,94,0.4)"
                            : "rgba(34,197,94,0.5)",
                          borderRadius: 0,
                          border: `1.5px solid ${accent}`,
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Card — square corners */}
                <div
                  className="flex-1 p-7 border transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: cardBg,
                    borderColor: edu.current
                      ? "rgba(34,197,94,0.3)"
                      : cardBorder,
                    borderRadius: 0,
                    borderLeftWidth: 3,
                    borderLeftStyle: "solid",
                    borderLeftColor: edu.current ? accent : "transparent",
                  }}
                >
                  <p
                    className="text-xs font-semibold mb-2 font-mono"
                    style={{ color: accent }}
                  >
                    {edu.period}
                  </p>
                  <h3
                    className="text-xl font-bold mb-1 leading-snug"
                    style={{ color: textPrimary }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: isDark ? "#86efac" : "#16a34a" }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: textMuted }}
                  >
                    {edu.description}
                  </p>
                  <span
                    className="inline-block px-3 py-1 text-xs font-semibold border"
                    style={{
                      borderRadius: 0,
                      background: isDark
                        ? "rgba(34,197,94,0.1)"
                        : "rgba(34,197,94,0.08)",
                      color: accent,
                      borderColor: isDark
                        ? "rgba(34,197,94,0.25)"
                        : "rgba(34,197,94,0.3)",
                    }}
                  >
                    {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
