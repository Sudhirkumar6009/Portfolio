"use client";

import { useTheme } from "../context/ThemeContext";

const achievements = [
  {
    year: "2026",
    title: "IBM SkillsBuild AI Innovation Challenge",
    result: "1st Place",
    note: "Built SafeSight — a violence detection platform using Computer Vision and Deep Learning.",
    highlight: true,
  },
  {
    year: "2026",
    title: "AMD Slingshot Demo Days",
    result: "Top 10",
    note: "Selected among top 10 teams for a hardware-accelerated AI demonstration.",
    highlight: false,
  },
  {
    year: "2025",
    title: "Google Autonomous Hacks",
    result: "Participant",
    note: "Built an agentic AI solution for autonomous task execution.",
    highlight: false,
  },
  {
    year: "2025",
    title: "Odoo Hackathon",
    result: "Finalist",
    note: "Developed StackIt Q&A Forum and GlobeTrotter travel platform across rounds.",
    highlight: false,
  },
  {
    year: "2025",
    title: "Tic Tech Toe",
    result: "Participant",
    note: "National-level competition showcasing full-stack engineering.",
    highlight: false,
  },
];

export function AchievementsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.9)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";

  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: bg }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold mb-3" style={{ color: textPrimary }}>
            Achievements
          </h2>
          <p className="text-sm" style={{ color: textMuted }}>
            Hackathons and competitions I've participated in.
          </p>
        </div>

        <div className="space-y-4">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: a.highlight
                  ? isDark ? "rgba(251,191,36,0.05)" : "rgba(251,191,36,0.06)"
                  : cardBg,
                borderColor: a.highlight
                  ? isDark ? "rgba(251,191,36,0.3)" : "rgba(251,191,36,0.4)"
                  : cardBorder,
              }}
            >
              {/* Top accent for winner */}
              {a.highlight && (
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-amber-400/70" />
              )}

              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span
                      className="text-xs font-mono"
                      style={{ color: textMuted }}
                    >
                      {a.year}
                    </span>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: textPrimary }}
                    >
                      {a.title}
                    </h3>
                  </div>
                  <p className="text-sm" style={{ color: textMuted }}>{a.note}</p>
                </div>

                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0"
                  style={{
                    background: a.highlight
                      ? "rgba(251,191,36,0.15)"
                      : isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                    color: a.highlight
                      ? "#f59e0b"
                      : textMuted,
                    border: `1px solid ${a.highlight ? "rgba(251,191,36,0.3)" : cardBorder}`,
                  }}
                >
                  {a.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
