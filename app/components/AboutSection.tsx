"use client";

import { useTheme } from "../context/ThemeContext";
import { Code, Database, Palette, Globe, Brain } from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: Database,
    name: "Backend",
    items: ["Node.js", "FastAPI", "MongoDB", "PostgreSQL", "Redis", "Express.js"],
  },
  {
    icon: Brain,
    name: "AI & Agents",
    items: ["Gemini API", "LLMs", "Multi-Agent Systems", "Computer Vision"],
  },
  {
    icon: Globe,
    name: "DevOps & Web3",
    items: ["Docker", "GitHub", "IPFS", "Web3Auth", "Vercel"],
  },
];

const experiences = [
  {
    from_year: "July 2024",
    to_year: "Present",
    title: "Bachelor of Information Technology",
    company: "Government Technological University",
    description: "Pursuing BE in Information Technology, currently in 6th semester",
  },
  {
    from_year: "Sep 2021",
    to_year: "Jun 2024",
    title: "Diploma in Information Technology",
    company: "Government Technological University",
    description: "9.05 CGPA",
  },
  {
    from_year: "May 2021",
    title: "GSEB Board Examination",
    company: "Axay Highschool",
    description: "89.33 Percentage",
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
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/3 -right-32 w-96 h-96 rounded-full ${
            isDark ? "bg-green-500/5" : "bg-green-300/10"
          }`}
          style={{ filter: "blur(80px)" }}
        />
        <div
          className={`absolute bottom-1/3 -left-32 w-96 h-96 rounded-full ${
            isDark ? "bg-emerald-500/5" : "bg-emerald-300/10"
          }`}
          style={{ filter: "blur(80px)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <p className="mt-3" />
            <span
              className={
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"
              }
            >
              About{" "}
            </span>
            <span className={isDark ? "text-white" : "text-gray-900"}>me</span>
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
                      ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20"
                      : "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
                  }`}
                >
                  <img
                    src={"/assets/me.png"}
                    className="inset-10 w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Sudhirkumar Kuchara
                  </h3>
                  <p className={isDark ? "text-green-400" : "text-green-600"}>
                    Full-Stack Developer · AI & Agentic Systems
                  </p>
                  <div className={`mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    isDark ? "bg-amber-500/15 text-amber-400 border border-amber-500/20" : "bg-amber-50 text-amber-700 border border-amber-200"
                  }`}>
                    🏆 IBM SkillsBuild AI Innovation Challenge 2026 — 1st Place
                  </div>
                </div>
              </div>
              <p
                className={`leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm a BE Information Technology student who loves solving real engineering problems — not cloning existing apps. I'm passionate about AI, backend systems, distributed architecture, and developer tools. Recently won the IBM SkillsBuild AI Innovation Challenge 2026 with SafeSight, an AI-powered violence detection platform.
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
                    isDark
                      ? "bg-slate-900/50 border-slate-800 hover:border-green-500/30"
                      : "bg-white border-gray-200 hover:border-green-500/30"
                  }`}
                >
                  <skill.icon
                    className={`w-6 h-6 mb-2 ${
                      isDark ? "text-green-400" : "text-green-600"
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

          {/* Right Column - Education */}
          <div>
            <h3
              className={`text-2xl font-bold mb-6 ml-20 hover:translate-y-1 hover:translate-x-5 hover:scale-110 transition-all duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Education
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`relative pl-8 pb-6 border-l-2 pb-10 m-12 ${
                    isDark ? "border-green-500" : "border-green-500"
                  }`}
                >
                  <div
                    className={
                      "absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-green-500"
                    }
                  />
                  <span
                    className={`text-sm italic ${
                      isDark ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    {exp.to_year == null
                      ? exp.from_year
                      : `${exp.from_year} — ${exp.to_year}`}
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
