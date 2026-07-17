"use client";

import { useTheme } from "../context/ThemeContext";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering — Information Technology",
    institution: "Government Technological University, Ahmedabad, Gujarat",
    date: "July 2024 — Present",
    detail: "6th Semester · Currently Pursuing",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Government Technological University, Ahmedabad, Gujarat",
    date: "Sep 2021 — Jun 2024",
    detail: "9.05 CGPA",
  },
  {
    degree: "GSEB Board Examination",
    institution: "Axay Highschool",
    date: "May 2021",
    detail: "89.33 Percentage",
  },
];

export function EducationSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const lineColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";

  return (
    <section
      id="education"
      className="py-28 px-4 sm:px-6 lg:px-8"
      style={{ background: bg }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading — exactly like image 2 */}
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
          style={{ color: textPrimary }}
        >
          Education
        </h2>

        {/* Timeline — exactly like image 2 */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: lineColor }}
          />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <div key={i} className="relative flex items-start gap-6 pl-14">

                {/* Circle icon — exactly like image 2 (indigo filled circle with graduation cap) */}
                <div
                  className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                  style={{ background: "#4f46e5" }}
                >
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3
                    className="text-base font-bold mb-1 leading-snug"
                    style={{ color: textPrimary }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: textMuted }}>
                    {edu.institution}
                  </p>
                  <p className="text-xs" style={{ color: textMuted }}>
                    {edu.date}
                    {edu.detail && (
                      <span
                        className="ml-3 px-2 py-0.5 rounded-full text-xs"
                        style={{
                          background: isDark ? "rgba(99,102,241,0.15)" : "rgba(99,102,241,0.1)",
                          color: isDark ? "#a5b4fc" : "#4f46e5",
                        }}
                      >
                        {edu.detail}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
