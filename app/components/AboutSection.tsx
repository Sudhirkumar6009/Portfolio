"use client";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const roles = ["Full-Stack Developer", "AI & Agentic Systems"];

const hobbies = [
  { emoji: "🎮", label: "Gaming" },
  { emoji: "📚", label: "Reading Tech Blogs" },
  { emoji: "🎵", label: "Music" },
];

const workBrief = [
  { label: "Focus", value: "AI Agents & Multi-Agent Systems" },
  { label: "Stack", value: "React · Next.js · FastAPI · Python" },
  { label: "Open to", value: "Full-time" },
];

export function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const accent = isDark ? "#86efac" : "#16a34a";
  const divider = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: bg }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-3"
            style={{ color: textPrimary }}
          >
            About Me
          </h2>
          <p className="text-sm" style={{ color: textMuted }}>
            Engineer · Builder · Problem Solver
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* ── LEFT: Photo + bio + role tags ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border p-7 flex flex-col gap-6"
            style={{
              background: cardBg,
              borderColor: cardBorder,
              borderRadius: 0,
            }}
          >
            {/* Photo */}
            <div className="flex items-center gap-5">
              <div
                className="flex-shrink-0 overflow-hidden border"
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: 0,
                  borderColor: cardBorder,
                }}
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
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: textPrimary }}
                >
                  Sudhirkumar Kuchara
                </h3>
                <div
                  className="flex items-center gap-1 text-xs"
                  style={{ color: textMuted }}
                >
                  <MapPin className="w-3 h-3" /> Ahmedabad, India
                </div>
              </div>
            </div>

            {/* Role tags — square boxes */}
            <div className="flex flex-wrap gap-2">
              {roles.map((r, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="px-3 py-1.5 text-xs font-semibold border"
                  style={{
                    borderRadius: 0,
                    background: isDark
                      ? "rgba(22,163,74,0.1)"
                      : "rgba(22,163,74,0.07)",
                    borderColor: isDark
                      ? "rgba(22,163,74,0.3)"
                      : "rgba(22,163,74,0.2)",
                    color: accent,
                  }}
                >
                  {r}
                </motion.span>
              ))}
            </div>

            {/* Bio */}
            <div style={{ borderTop: `1px solid ${divider}`, paddingTop: 20 }}>
              <p
                className="text-sm leading-relaxed"
                style={{ color: textMuted }}
              >
                BE Information Technology student who solves real engineering
                problems — not cloning existing apps. I build full-stack
                platforms, AI-powered systems, and decentralized tools that ship
                to production.
              </p>
              <p
                className="text-sm leading-relaxed mt-3"
                style={{ color: textMuted }}
              >
                Driven by curiosity, I go deep on distributed architecture,
                multi-agent AI, and developer tooling. Every project I take on
                has a clear problem worth solving.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: Hobbies + Work brief ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Hobbies */}
            <div
              className="border p-6"
              style={{
                background: cardBg,
                borderColor: cardBorder,
                borderRadius: 0,
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: textMuted }}
              >
                Hobbies
              </p>
              <div className="flex gap-3 flex-wrap">
                {hobbies.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="flex flex-col items-center gap-2 border px-5 py-4 cursor-default"
                    style={{
                      borderRadius: 0,
                      background: isDark
                        ? "rgba(255,255,255,0.04)"
                        : "rgba(0,0,0,0.03)",
                      borderColor: cardBorder,
                      minWidth: 80,
                    }}
                  >
                    <span className="text-2xl">{h.emoji}</span>
                    <span
                      className="text-xs font-medium text-center"
                      style={{ color: textMuted }}
                    >
                      {h.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work brief */}
            <div
              className="border p-6"
              style={{
                background: cardBg,
                borderColor: cardBorder,
                borderRadius: 0,
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: textMuted }}
              >
                Work Brief
              </p>
              <div className="flex flex-col gap-0">
                {workBrief.map((w, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="flex items-start gap-4 py-3"
                    style={{
                      borderBottom:
                        i < workBrief.length - 1
                          ? `1px solid ${divider}`
                          : "none",
                    }}
                  >
                    {/* Square accent dot */}
                    <span
                      className="flex-shrink-0 mt-1"
                      style={{
                        width: 8,
                        height: 8,
                        background: accent,
                        display: "inline-block",
                        borderRadius: 0,
                      }}
                    />
                    <div>
                      <p
                        className="text-xs mb-0.5"
                        style={{ color: textMuted }}
                      >
                        {w.label}
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: textPrimary }}
                      >
                        {w.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
