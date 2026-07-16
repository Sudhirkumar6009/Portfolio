"use client";

import { useTheme } from "../context/ThemeContext";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "PHP Technology Intern",
    company: "Patel Web Solution",
    period: "2023",
    description:
      "Worked on PHP-based web applications, gaining hands-on experience with backend development, database management, and client-side integrations.",
    skills: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
  },
];

export function ExperienceSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="experience"
      className={`py-16 px-4 sm:px-6 lg:px-8 ${
        isDark
          ? "bg-gradient-to-b from-slate-950 to-slate-900"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className={isDark ? "text-white" : "text-gray-900"}>Work </span>
            <span
              className={
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"
              }
            >
              Experience
            </span>
          </h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-slate-900/60 border-green-500/20 hover:border-green-500/35"
                  : "bg-white border-gray-200 hover:border-green-400/40 shadow-sm hover:shadow-md"
              }`}
            >
              <div className={`absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-green-500/50`} />
              <div className="flex items-start gap-5">
                <div
                  className={`p-3 rounded-xl flex-shrink-0 ${
                    isDark ? "bg-green-500/10 border border-green-500/20" : "bg-green-50 border border-green-200"
                  }`}
                >
                  <Briefcase className={`w-6 h-6 ${isDark ? "text-green-400" : "text-green-600"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                      {exp.title}
                    </h3>
                    <span className={`text-sm font-medium ${isDark ? "text-green-400" : "text-green-600"}`}>
                      @ {exp.company}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${isDark ? "bg-slate-800 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, j) => (
                      <span
                        key={j}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                          isDark
                            ? "bg-green-500/10 text-green-300 border border-green-500/20"
                            : "bg-green-50 text-green-700 border border-green-200"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
