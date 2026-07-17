"use client";

import { useTheme } from "../context/ThemeContext";
import { MapPin, Trophy, Rocket, Brain, Code2, GitBranch } from "lucide-react";

const highlights = [
  { icon: Trophy, label: "IBM SkillsBuild AI Innovation Challenge 2026", value: "1st Place" },
  { icon: Rocket, label: "Public Projects", value: "25+" },
  { icon: Brain, label: "AI & Multi-Agent Systems", value: "Specialist" },
  { icon: Code2, label: "Full-Stack", value: "MERN · PERN · FastAPI" },
  { icon: GitBranch, label: "Open Source", value: "Active Contributor" },
  { icon: Trophy, label: "National Hackathon Finalist", value: "Multiple" },
];

export function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const accent = isDark ? "#a5b4fc" : "#4f46e5";

  return (
    <section
      id="about"
      className="py-28 px-4 sm:px-6 lg:px-8"
      style={{ background: bg }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: textPrimary }}>
            About Me
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: textMuted }}>
            Engineer. Builder. Problem Solver.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — profile card + bio */}
          <div className="space-y-6">
            <div
              className="p-8 rounded-2xl border"
              style={{ background: cardBg, borderColor: cardBorder }}
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border"
                  style={{ borderColor: cardBorder }}
                >
                  <img
                    src="/assets/me.png"
                    alt="Sudhirkumar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-0.5" style={{ color: textPrimary }}>
                    Sudhirkumar Kuchara
                  </h3>
                  <p className="text-sm mb-2" style={{ color: accent }}>
                    Full-Stack Developer · AI & Agentic Systems
                  </p>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: textMuted }}>
                    <MapPin className="w-3.5 h-3.5" />
                    Ahmedabad, India
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: textMuted }}>
                I'm a BE Information Technology student who loves solving real engineering problems —
                not cloning existing apps. Passionate about AI, backend systems, distributed
                architecture, and developer tools.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                Recently won the <span style={{ color: accent, fontWeight: 600 }}>IBM SkillsBuild AI Innovation Challenge 2026</span> with
                SafeSight — an AI-powered violence detection platform achieving 95%+ classification
                accuracy. I enjoy turning ambitious ideas into production-ready software.
              </p>
            </div>

            {/* Quick facts */}
            <div
              className="p-6 rounded-2xl border"
              style={{ background: cardBg, borderColor: cardBorder }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: textMuted }}>
                Quick Facts
              </h4>
              <div className="space-y-3">
                {[
                  ["🎓", "BE Information Technology — GTU (6th Semester)"],
                  ["💼", "PHP Intern @ Patel Web Solution"],
                  ["🏆", "IBM SkillsBuild AI Innovation Challenge 2026 Winner"],
                  ["🚀", "25+ public repositories on GitHub"],
                  ["🤖", "Specialised in AI Agents & Multi-Agent Systems"],
                ].map(([emoji, text], i) => (
                  <div key={i} className="flex items-start gap-3 text-sm" style={{ color: textMuted }}>
                    <span className="text-base flex-shrink-0">{emoji}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — highlights grid */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: textMuted }}>
              Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-1"
                  style={{ background: cardBg, borderColor: cardBorder }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(99,102,241,0.15)" }}
                  >
                    <h.icon className="w-4.5 h-4.5" style={{ color: accent }} />
                  </div>
                  <p className="text-xs mb-1" style={{ color: textMuted }}>{h.label}</p>
                  <p className="text-sm font-semibold" style={{ color: textPrimary }}>{h.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
