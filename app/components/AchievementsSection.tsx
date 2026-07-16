"use client";

import { useTheme } from "../context/ThemeContext";
import { Trophy, Medal, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "IBM SkillsBuild AI Innovation Challenge 2026",
    result: "1st Place",
    description: "Won with SafeSight — AI-powered violence detection platform achieving 95%+ classification accuracy.",
    tier: "gold",
  },
  {
    icon: Medal,
    title: "AMD Slingshot Demo Days 2026",
    result: "Top 10 Team",
    description: "Selected among top 10 teams nationally for innovative hardware-accelerated AI demo.",
    tier: "silver",
  },
  {
    icon: Award,
    title: "Google Autonomous Hacks",
    result: "National Hackathon",
    description: "Competed in Google's autonomous systems hackathon with an agentic AI solution.",
    tier: "bronze",
  },
  {
    icon: Award,
    title: "Odoo Hackathon",
    result: "National Finalist",
    description: "Built StackIt Q&A Forum and GlobeTrotter travel platform in competitive rounds.",
    tier: "bronze",
  },
  {
    icon: Award,
    title: "Tic Tech Toe",
    result: "National Hackathon",
    description: "Participated in national-level tech competition showcasing full-stack engineering skills.",
    tier: "bronze",
  },
];

const tierStyles = {
  gold: {
    dark: "border-amber-400/50 bg-amber-500/8 shadow-[0_8px_30px_-10px_rgba(251,191,36,0.25)]",
    light: "border-amber-300/60 bg-amber-50 shadow-[0_8px_30px_-10px_rgba(217,119,6,0.15)]",
    badge: "bg-amber-300 text-amber-950",
    icon: "text-amber-400",
    line: "bg-amber-400/80",
  },
  silver: {
    dark: "border-slate-400/40 bg-slate-800/40 shadow-[0_8px_30px_-10px_rgba(148,163,184,0.2)]",
    light: "border-slate-300/60 bg-slate-50 shadow-sm",
    badge: "bg-slate-300 text-slate-800",
    icon: "text-slate-400",
    line: "bg-slate-400/60",
  },
  bronze: {
    dark: "border-green-500/20 bg-slate-900/50 hover:border-green-500/35",
    light: "border-gray-200 bg-white hover:border-green-400/40 shadow-sm",
    badge: "bg-green-500/15 text-green-400 border border-green-500/25",
    icon: "text-green-400",
    line: "bg-green-500/40",
  },
};

export function AchievementsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="achievements"
      className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 right-1/4 w-80 h-80 rounded-full ${
            isDark ? "bg-green-500/4" : "bg-green-300/8"
          }`}
          style={{ filter: "blur(80px)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className={isDark ? "text-white" : "text-gray-900"}>
              Achievements &{" "}
            </span>
            <span
              className={
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"
              }
            >
              Hackathons
            </span>
          </h2>
          <p className={`text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Competing and winning at national and global levels
          </p>
        </div>

        <div className="space-y-5">
          {achievements.map((a, i) => {
            const styles = tierStyles[a.tier as keyof typeof tierStyles];
            return (
              <div
                key={i}
                className={`relative group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark ? styles.dark : styles.light
                }`}
              >
                <div className={`absolute inset-x-0 top-0 h-[2px] rounded-t-2xl ${styles.line}`} />
                <div className="flex items-start gap-5">
                  <div
                    className={`p-3 rounded-xl flex-shrink-0 ${
                      isDark ? "bg-slate-800" : "bg-gray-100"
                    }`}
                  >
                    <a.icon className={`w-6 h-6 ${styles.icon}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3
                        className={`font-bold text-base ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {a.title}
                      </h3>
                      <span
                        className={`px-3 py-0.5 rounded-full text-xs font-semibold ${styles.badge}`}
                      >
                        {a.result}
                      </span>
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {a.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
