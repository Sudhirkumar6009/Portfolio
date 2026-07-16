"use client";

import { useTheme } from "../context/ThemeContext";

const highlights = [
  {
    emoji: "🏆",
    title: "IBM SkillsBuild AI Innovation Challenge 2026",
    subtitle: "1st Place",
    accent: true,
  },
  {
    emoji: "🚀",
    title: "25+ Public Projects",
    subtitle: "Open Source & Production",
  },
  {
    emoji: "🤖",
    title: "AI & Multi-Agent Systems",
    subtitle: "Agentic Architecture",
  },
  {
    emoji: "💻",
    title: "MERN + PERN + FastAPI",
    subtitle: "Full-Stack Expertise",
  },
  {
    emoji: "🏅",
    title: "National Hackathon Finalist",
    subtitle: "Multiple Competitions",
  },
  {
    emoji: "⚡",
    title: "Production-grade Applications",
    subtitle: "Real-world Deployments",
  },
];

export function HighlightsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-950 to-slate-900"
          : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className={isDark ? "text-white" : "text-gray-900"}>Key </span>
            <span
              className={
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"
              }
            >
              Highlights
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((h, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] ${
                h.accent
                  ? isDark
                    ? "bg-amber-500/8 border-amber-400/40 shadow-[0_8px_30px_-10px_rgba(251,191,36,0.3)]"
                    : "bg-amber-50 border-amber-300/60 shadow-[0_8px_30px_-10px_rgba(217,119,6,0.2)]"
                  : isDark
                  ? "bg-slate-900/60 border-green-500/15 hover:border-green-500/35 hover:bg-slate-900/80"
                  : "bg-white border-gray-200 hover:border-green-400/50 shadow-sm hover:shadow-md"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Top accent line */}
              <div
                className={`absolute inset-x-0 top-0 h-[2px] rounded-t-2xl ${
                  h.accent ? "bg-amber-400/80" : "bg-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                }`}
              />
              <div className="text-3xl mb-3">{h.emoji}</div>
              <h3
                className={`font-bold text-base mb-1 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {h.title}
              </h3>
              <p
                className={`text-sm ${
                  h.accent
                    ? isDark
                      ? "text-amber-400"
                      : "text-amber-700"
                    : isDark
                    ? "text-green-400"
                    : "text-green-600"
                }`}
              >
                {h.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
