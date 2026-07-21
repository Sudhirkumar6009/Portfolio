"use client";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import RotatingText from "@/components/RotatingText";
import CountUp from "@/components/CountUp";
import { useRef, useEffect, useState } from "react";

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [nameWidth, setNameWidth] = useState(600);

  useEffect(() => {
    if (nameRef.current) {
      setNameWidth(nameRef.current.offsetWidth);
    }
  }, []);

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
      {/* Glow blob — width animates to match name width */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: nameWidth + 80, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        style={{ height: "240px" }}
      >
        <div
          className="w-full h-full"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.6) 0%, rgba(79,70,229,0.32) 45%, transparent 72%)"
              : "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.28) 0%, rgba(79,70,229,0.13) 45%, transparent 72%)",
            filter: "blur(1px)",
          }}
        />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)"
            : "linear-gradient(rgba(0,0,0,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.035) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center pt-28 pb-16">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-8 border"
          style={{
            background: isDark ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.08)",
            borderColor: isDark ? "rgba(99,102,241,0.35)" : "rgba(99,102,241,0.25)",
            color: isDark ? "#a5b4fc" : "#4f46e5",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Big name — motion.dev style: each word slides up */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            ref={nameRef}
            className="font-bold leading-none tracking-tight"
            style={{
              fontSize: "clamp(2.6rem, 9vw, 6.5rem)",
              color: textPrimary,
              letterSpacing: "-0.025em",
              whiteSpace: "nowrap",
            }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            Sudhirkumar Kuchara
          </motion.h1>
        </div>

        {/* Rotating role */}
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
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="max-w-2xl text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: textMuted }}
        >
          A results-driven software engineer passionate about building AI-powered applications,
          multi-agent systems, and scalable full-stack architectures that solve real-world problems.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center gap-4 mb-16 flex-wrap justify-center"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95"
            style={{ background: "#4f46e5", fontSize: "0.95rem" }}
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95 border"
            style={{
              background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
              borderColor: isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)",
              color: textPrimary,
              fontSize: "0.95rem",
            }}
          >
            Contact Me
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl"
        >
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
              <p className="text-xs" style={{ color: textMuted }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-2 animate-bounce"
          style={{ color: textMuted }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="7" r="2" fill="currentColor">
              <animate attributeName="cy" values="7;14;7" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
