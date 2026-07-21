"use client";

import { useTheme } from "../context/ThemeContext";
import { MapPin } from "lucide-react";

export function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const accent = isDark ? "#a5b4fc" : "#4f46e5";

  const facts = [
    ["🎓", "BE Information Technology — GTU, 6th Semester"],
    ["💼", "PHP Intern @ Patel Web Solution"],
    ["🏆", "IBM SkillsBuild AI Innovation Challenge 2026 — 1st Place"],
    ["🚀", "25+ public repositories on GitHub"],
    ["🤖", "Focused on AI Agents & Multi-Agent Systems"],
    ["📍", "Ahmedabad, India"],
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: bg }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-3" style={{ color: textPrimary }}>
            About Me
          </h2>
          <p className="text-base" style={{ color: textMuted }}>
            Engineer · Builder · Problem Solver
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left — avatar + bio */}
          <div
            className="p-7 rounded-2xl border"
            style={{ background: cardBg, borderColor: cardBorder }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border"
                style={{ borderColor: cardBorder }}
              >
                <img
                  src="/assets/me.png"
                  alt="Sudhirkumar"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-0.5" style={{ color: textPrimary }}>
                  Sudhirkumar Kuchara
                </h3>
                <p className="text-sm mb-1" style={{ color: accent }}>
                  Full-Stack Developer · AI & Agentic Systems
                </p>
                <div className="flex items-center gap-1 text-xs" style={{ color: textMuted }}>
                  <MapPin className="w-3 h-3" /> Ahmedabad, India
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: textMuted }}>
              I'm a BE Information Technology student who loves solving real engineering problems —
              not cloning existing apps. Passionate about AI, backend systems, distributed
              architecture, and developer tools.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
              I enjoy turning ambitious ideas into production-ready software. My work spans
              full-stack web apps, AI-powered platforms, and decentralized systems.
            </p>
          </div>

          {/* Right — quick facts */}
          <div
            className="p-7 rounded-2xl border"
            style={{ background: cardBg, borderColor: cardBorder }}
          >
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: textMuted }}
            >
              Quick Facts
            </h4>
            <div className="space-y-3.5">
              {facts.map(([emoji, text], i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm pb-3.5 border-b last:border-b-0 last:pb-0"
                  style={{ borderColor: cardBorder, color: textMuted }}
                >
                  <span className="text-base flex-shrink-0 mt-0.5">{emoji}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
