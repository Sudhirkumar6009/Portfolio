"use client";

import { useTheme } from "../context/ThemeContext";
import { User, Code, Palette, Database, Globe } from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Database,
    name: "Backend",
    items: ["Node.js", "Python", "PostgreSQL"],
  },
  {
    icon: Palette,
    name: "Design",
    items: ["Figma", "Tailwind CSS", "UI/UX"],
  },
  {
    icon: Globe,
    name: "DevOps",
    items: ["Docker", "AWS", "CI/CD"],
  },
];

const experiences = [
  {
    year: "2023",
    title: "Senior Developer",
    company: "Tech Corp",
    description: "Led development of enterprise applications",
  },
  {
    year: "2022",
    title: "Full-Stack Developer",
    company: "StartupX",
    description: "Built scalable web applications from scratch",
  },
  {
    year: "2021",
    title: "Frontend Developer",
    company: "Agency Pro",
    description: "Created responsive websites for clients",
  },
];

export function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      }`}
    >
      {/* Static Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/3 -right-32 w-96 h-96 rounded-full ${
            isDark ? "bg-cyan-500/5" : "bg-cyan-300/10"
          }`}
          style={{ filter: "blur(80px)" }}
        />
        <div
          className={`absolute bottom-1/3 -left-32 w-96 h-96 rounded-full ${
            isDark ? "bg-blue-500/5" : "bg-blue-300/10"
          }`}
          style={{ filter: "blur(80px)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <p className="mt-3" />
            <span className={isDark ? "text-white" : "text-gray-900"}>
              Know{" "}
            </span>
            <span
              className={
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"
              }
            >
              Who I Am
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile */}
          <div>
            <div
              className={`p-8 rounded-3xl border mb-8 ${
                isDark
                  ? "bg-slate-900/50 border-slate-800"
                  : "bg-white border-gray-200 shadow-lg"
              }`}
            >
              <div className="flex items-start gap-6 mb-6">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl ${
                    isDark
                      ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20"
                      : "bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200"
                  }`}
                >
                  👨‍💻
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Sudhirkumar Kuchara
                  </h3>
                  <p className={isDark ? "text-cyan-400" : "text-cyan-600"}>
                    Full-Stack Developer
                  </p>
                </div>
              </div>
              <p
                className={`leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm a passionate developer with expertise in building modern web
                applications. I love turning complex problems into simple,
                beautiful solutions that users love.
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
                    isDark
                      ? "bg-slate-900/50 border-slate-800 hover:border-cyan-500/30"
                      : "bg-white border-gray-200 hover:border-cyan-500/30"
                  }`}
                >
                  <skill.icon
                    className={`w-6 h-6 mb-2 ${
                      isDark ? "text-cyan-400" : "text-cyan-600"
                    }`}
                  />
                  <h4
                    className={`font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {skill.name}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {skill.items.map((item, j) => (
                      <span
                        key={j}
                        className={`text-xs px-2 py-1 rounded ${
                          isDark
                            ? "bg-slate-800 text-gray-400"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Experience */}
          <div>
            <h3
              className={`text-xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`relative pl-8 pb-6 border-l-2 last:pb-0 ${
                    isDark ? "border-cyan-500/30" : "border-cyan-500/50"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
                      isDark
                        ? "bg-cyan-500 border-4 border-slate-950"
                        : "bg-cyan-500 border-4 border-white"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      isDark ? "text-cyan-400" : "text-cyan-600"
                    }`}
                  >
                    {exp.year}
                  </span>
                  <h4
                    className={`text-lg font-bold mt-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {exp.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {exp.company}
                  </p>
                  <p
                    className={`text-sm mt-2 ${
                      isDark ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
