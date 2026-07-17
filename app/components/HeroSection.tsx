"use client";

import { useTheme } from "../context/ThemeContext";
import RotatingText from "@/components/RotatingText";
import CountUp from "@/components/CountUp";

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const cardBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: bg }}
    >
      {/* Purple/blue glow blob — exactly like image 1 */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.55) 0%, rgba(79,70,229,0.3) 40%, transparent 70%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.25) 0%, rgba(79,70,229,0.12) 40%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center pt-28 pb-16">
        {/* Big name — exactly like image 1 */}
        <h1
          className="font-bold leading-none tracking-tight mb-6"
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            color: textPrimary,
            letterSpacing: "-0.02em",
          }}
        >
          Sudhirkumar Kuchara
        </h1>

        {/* Rotating role */}
        <div
          className="flex items-center gap-3 text-xl sm:text-2xl font-light mb-5"
          style={{ color: textMuted }}
        >
          <span>I'm a</span>
          <RotatingText
            texts={[
              "Full-Stack Developer",
              "AI Systems Builder",
              "Hackathon Winner",
              "Agentic AI Engineer",
              "Open Source Dev",
            ]}
            mainClassName="px-3 py-1 rounded-lg font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.02}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
            splitBy="characters"
          />
        </div>

        {/* Tagline — exactly like image 1 */}
        <p
          className="max-w-2xl text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: textMuted }}
        >
          A results-driven software engineer passionate about building
          AI-powered applications, multi-agent systems, and scalable full-stack
          architectures that solve real-world problems.
        </p>

        {/* Two CTA buttons — exactly like image 1 */}
        <div className="flex items-center gap-4 mb-16 flex-wrap justify-center">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 rounded-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95"
            style={{ background: "#4f46e5", fontSize: "0.95rem" }}
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95 border"
            style={{
              background: isDark
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.06)",
              borderColor: isDark
                ? "rgba(255,255,255,0.18)"
                : "rgba(0,0,0,0.18)",
              color: textPrimary,
              fontSize: "0.95rem",
            }}
          >
            Contact Me
          </button>
        </div>

        {/* Stats row — fills the lower portion of the screen */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          {[
            { value: 25, suffix: "+", label: "Public Projects" },
            { value: 5, suffix: "+", label: "Hackathons" },
            { value: 3, suffix: "+", label: "Years Experience" },
            { value: 1, suffix: "🏆", label: "IBM Winner" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-6 rounded-2xl border"
              style={{ background: cardBg, borderColor: cardBorder }}
            >
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                suffix={stat.suffix}
                duration={1.2}
                className="text-3xl font-bold mb-1"
                style={{ color: isDark ? "#a5b4fc" : "#4f46e5" }}
              />
              <p className="text-xs" style={{ color: textMuted }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className="mt-12 flex flex-col items-center gap-2 animate-bounce"
          style={{ color: textMuted }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect
              x="1"
              y="1"
              width="14"
              height="22"
              rx="7"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="8" cy="7" r="2" fill="currentColor">
              <animate
                attributeName="cy"
                values="7;14;7"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
}
