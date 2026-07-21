"use client";

import { useTheme } from "../context/ThemeContext";

const education = [
  {
    period: "July 2024 — Present",
    degree: "Bachelor of Engineering — Information Technology",
    institution: "Government Technological University, Ahmedabad, Gujarat",
    description:
      "Currently in 6th semester, building expertise in software engineering, AI systems, distributed computing, and full-stack development. Active participant in national hackathons and open-source projects.",
    grade: "Currently Pursuing",
  },
  {
    period: "Sep 2021 — Jun 2024",
    degree: "Diploma in Information Technology",
    institution: "Government Technological University, Ahmedabad, Gujarat",
    description:
      "Completed a rigorous 3-year diploma program covering core computer science fundamentals, web technologies, database management, and software development practices.",
    grade: "9.05 CGPA",
  },
  {
    period: "May 2021",
    degree: "GSEB Board Examination",
    institution: "Axay Highschool",
    description:
      "Completed secondary education with a strong foundation in Mathematics, Science, and Computer Studies, setting the stage for a career in technology.",
    grade: "89.33%",
  },
];

export function EducationSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f5f5f5";
  const cardBg = isDark ? "#111111" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const accentGreen = "#22c55e";
  const lineColor = isDark ? "rgba(34,197,94,0.25)" : "rgba(34,197,94,0.35)";

  return (
    <section
      id="education"
      className="py-28 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center"
      style={{ background: bg }}
    >
      <div className="max-w-4xl mx-auto w-full">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: accentGreen }}>
            Academic Background
          </p>
          <h2
            className="text-4xl sm:text-6xl font-bold"
            style={{ color: textPrimary }}
          >
            EDUCATION
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5"
            style={{ background: lineColor }}
          />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="relative flex gap-8 sm:gap-12 pl-14 sm:pl-16">

                {/* Green dot — exactly like the attached image */}
                <div
                  className="absolute left-0 top-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-2"
                  style={{
                    background: isDark ? "#0a0a0a" : "#f5f5f5",
                    borderColor: accentGreen,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: accentGreen }}
                  />
                </div>

                {/* Card — white card like the attached image */}
                <div
                  className="flex-1 p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: cardBg,
                    borderColor: cardBorder,
                    boxShadow: isDark
                      ? "0 4px 24px rgba(0,0,0,0.4)"
                      : "0 4px 24px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Period — green, like the attached image */}
                  <p
                    className="text-sm font-semibold mb-2"
                    style={{ color: accentGreen }}
                  >
                    {edu.period}
                  </p>

                  {/* Degree — bold, large */}
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-1 leading-snug"
                    style={{ color: textPrimary }}
                  >
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: isDark ? "#a5b4fc" : "#4f46e5" }}
                  >
                    {edu.institution}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: textMuted }}
                  >
                    {edu.description}
                  </p>

                  {/* Grade badge */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: isDark ? "rgba(34,197,94,0.12)" : "rgba(34,197,94,0.1)",
                      color: accentGreen,
                      border: `1px solid ${isDark ? "rgba(34,197,94,0.25)" : "rgba(34,197,94,0.3)"}`,
                    }}
                  >
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
