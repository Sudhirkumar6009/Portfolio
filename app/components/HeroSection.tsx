"use client";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import RotatingText from "@/components/RotatingText";
import CountUp from "@/components/CountUp";
import { ArrowRight, Github } from "lucide-react";
import Aurora from "./Aurora";

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
      {/* Aurora WebGL background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: isDark ? 0.85 : 0.45 }}
      >
        <Aurora
          colorStops={["#16a34a", "#4ade80", "#15803d"]}
          blend={isDark ? 0.6 : 0.4}
          amplitude={1.1}
          speed={0.4}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)"
            : "linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center justify-center py-16 sm:py-20">
        <h1 className="h-10"></h1>
        {/* Big name */}
        <div className="overflow-hidden mb-6 sm:mb-7">
          <motion.h1
            ref={undefined}
            className="font-bold leading-none tracking-tight text-center"
            style={{
              fontSize: "clamp(2.9rem, 9vw, 6.5rem)",
              color: textPrimary,
              letterSpacing: "-0.025em",
            }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
          >
            <span className="block sm:inline">Sudhirkumar</span>
            <span className="block sm:inline"> </span>
            <span className="block sm:inline">Kuchara</span>
          </motion.h1>
        </div>

        {/* Rotating role — square badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-3 text-lg sm:text-2xl font-light mb-5 flex-wrap justify-center"
          style={{ color: textMuted }}
        >
          <span>I'm a</span>
          <RotatingText
            texts={[
              "Software Engineer",
              "Full-Stack Developer",
              "AI Engineer",
              "Agentic AI Engineer",
              "REST API Developer",
              "Problem Solver",
            ]}
            mainClassName="px-3 py-1.5 font-semibold text-white"
            style={{
              background: "linear-gradient(135deg,#16a34a,#15803d)",
              borderRadius: 0,
            }}
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
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="max-w-xl text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: textMuted }}
        >
          Building AI-powered applications, multi-agent systems, and scalable
          full-stack architectures that solve real-world problems.
        </motion.p>

        {/* CTA buttons — square */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center gap-4 mb-16 flex-wrap justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-target flex items-center gap-2 px-8 py-3.5 font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg,#16a34a,#15803d)",
              borderRadius: 0,
              fontSize: "0.95rem",
            }}
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://github.com/Sudhirkumar6009"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target flex items-center gap-2 px-8 py-3.5 font-semibold transition-all duration-200 hover:brightness-110 active:scale-95 border"
            style={{
              background: isDark
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.06)",
              borderColor: isDark
                ? "rgba(255,255,255,0.18)"
                : "rgba(0,0,0,0.18)",
              color: textPrimary,
              borderRadius: 0,
              fontSize: "0.95rem",
            }}
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </motion.div>

        {/* Stats row — square cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-0 max-w-3xl border-l border-t mt-2 sm:mt-4"
          style={{ borderColor: cardBorder }}
        >
          {[
            { value: 25, suffix: "+", label: "Public Projects" },
            { value: 5, suffix: "+", label: "Hackathons" },
            { value: 3, suffix: "+", label: "Years Coding" },
            { value: 1, suffix: "🏆", label: "IBM Winner" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-7 border-r border-b"
              style={{
                background: cardBg,
                borderColor: cardBorder,
                borderRadius: 0,
              }}
            >
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                suffix={stat.suffix}
                duration={1.2}
                className="text-3xl font-bold mb-1"
                style={{ color: isDark ? "#86efac" : "#16a34a" }}
              />
              <p className="text-xs" style={{ color: textMuted }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-10 sm:mt-12 flex flex-col items-center gap-2"
          style={{ color: textMuted }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div
            className="relative flex items-start justify-center"
            style={{
              width: 15,
              height: 30,
              border: `1.5px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
              borderRadius: 100,
            }}
          >
            <motion.div
              style={{
                width: 2,
                height: 2,
                background: isDark
                  ? "rgba(255,255,255,0.5)"
                  : "rgba(0,0,0,0.4)",
                borderRadius: 0,
                marginTop: 5,
              }}
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
