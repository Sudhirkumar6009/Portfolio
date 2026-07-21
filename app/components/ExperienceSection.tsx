"use client";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Java Development & Internship",
    company: "TRL FutureX",
    period: "Jun-2026 — Jul-2026",
    type: "ONLINE",
    description:
      "Worked on Java Development including OOP-concepts, Java accent and Backend Development. Gained hands-on experience in building scalable applications.",
    skills: ["Java", "Springboot"],
    current: false,
  },
  {
    title: "PHP Technology Intern",
    company: "Patel Web Solution",
    period: "2023",
    type: "OFFLINE",
    description:
      "Worked on PHP-based web applications — backend development, database management, and client-side integrations. Gained hands-on experience shipping real client projects.",
    skills: ["PHP", "HTML/CSS", "JavaScript"],
    current: false,
  },
];

export function ExperienceSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const accent = isDark ? "#86efac" : "#16a34a";
  const lineColor = isDark ? "rgba(22,163,74,0.2)" : "rgba(22,163,74,0.3)";

  return (
    <section
      id="experience"
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
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{ left: 20, background: lineColor }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative flex gap-10 pl-14"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                {/* Square dot */}
                <div
                  className="absolute left-0 top-6 z-10 flex items-center justify-center"
                  style={{ width: 40, height: 40 }}
                >
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      background: isDark
                        ? "rgba(22,163,74,0.5)"
                        : "rgba(22,163,74,0.6)",
                      borderRadius: 0,
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="flex-1 p-7 border transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: cardBg,
                    borderColor: cardBorder,
                    borderRadius: 0,
                    borderLeftWidth: 3,
                    borderLeftStyle: "solid",
                    borderLeftColor: accent,
                  }}
                >
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3
                        className="text-xl font-bold mb-0.5"
                        style={{ color: textPrimary }}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: accent }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className="px-3 py-1 text-xs font-mono border"
                        style={{
                          borderRadius: 0,
                          background: isDark
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(0,0,0,0.04)",
                          borderColor: cardBorder,
                          color: textMuted,
                        }}
                      >
                        {exp.period}
                      </span>
                      <span
                        className="px-3 py-1 text-xs font-semibold border"
                        style={{
                          borderRadius: 0,
                          background: isDark
                            ? "rgba(22,163,74,0.1)"
                            : "rgba(22,163,74,0.07)",
                          borderColor: isDark
                            ? "rgba(22,163,74,0.25)"
                            : "rgba(22,163,74,0.2)",
                          color: accent,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: textMuted }}
                  >
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + j * 0.05 }}
                        className="px-3 py-1 text-xs font-medium border"
                        style={{
                          borderRadius: 0,
                          background: isDark
                            ? "rgba(22,163,74,0.08)"
                            : "rgba(22,163,74,0.06)",
                          borderColor: isDark
                            ? "rgba(22,163,74,0.22)"
                            : "rgba(22,163,74,0.18)",
                          color: accent,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
