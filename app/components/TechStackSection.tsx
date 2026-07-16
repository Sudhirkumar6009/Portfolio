"use client";

import { useTheme } from "../context/ThemeContext";

const techGroups = [
  {
    label: "Languages",
    icon: "🔤",
    items: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    label: "Frontend",
    icon: "🎨",
    items: ["React", "Next.js", "Tailwind", "TypeScript"],
  },
  {
    label: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    label: "Databases",
    icon: "🗄️",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    label: "AI & ML",
    icon: "🤖",
    items: ["Gemini API", "LLMs", "Multi-Agent Systems", "Computer Vision"],
  },
  {
    label: "DevOps & Auth",
    icon: "🚀",
    items: ["Docker", "GitHub", "Vercel", "OAuth", "Web3Auth"],
  },
];

export function TechStackSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="techstack"
      className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-900 to-slate-950"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className={isDark ? "text-white" : "text-gray-900"}>Tech </span>
            <span
              className={
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"
              }
            >
              Stack
            </span>
          </h2>
          <p className={`text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Technologies I work with daily
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "bg-slate-900/60 border-green-500/15 hover:border-green-500/30"
                  : "bg-white border-gray-200 hover:border-green-400/40 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3
                  className={`font-bold text-lg ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      isDark
                        ? "bg-green-500/10 text-green-300 border border-green-500/20 hover:bg-green-500/15"
                        : "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100"
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
    </section>
  );
}
