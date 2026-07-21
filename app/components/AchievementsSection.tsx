"use client";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const achievements = [
  {
    year: "2026",
    title: "IBM SkillsBuild AI Innovation Challenge",
    result: "1st Place",
    note: "Built SafeSight — violence detection platform using Computer Vision and Deep Learning.",
    rank: 5,
  },
  {
    year: "2026",
    title: "AMD Slingshot Demo Days",
    result: "Top 10",
    note: "Selected among top 10 teams for a hardware-accelerated AI demonstration.",
    rank: 4,
  },
  {
    year: "2025",
    title: "Odoo Hackathon",
    result: "Finalist",
    note: "Developed StackIt Q&A Forum and GlobeTrotter travel platform across rounds.",
    rank: 3,
  },
  {
    year: "2025",
    title: "Google Autonomous Hacks",
    result: "Participant",
    note: "Built an agentic AI solution for autonomous task execution.",
    rank: 2,
  },
  {
    year: "2025",
    title: "Tic Tech Toe",
    result: "Participant",
    note: "National-level competition showcasing full-stack engineering.",
    rank: 1,
  },
];

const stripColors: Record<number, string> = {
  5: "#f97316", // orange  — 1st Place
  4: "#22c55e", // green   — Top 10
  3: "rgba(22,163,74,0.55)",
  2: "rgba(22,163,74,0.30)",
  1: "rgba(22,163,74,0.15)",
};

// Badge colors per rank: bg, text, border
const badgeColors: Record<
  number,
  { bg: string; text: string; border: string }
> = {
  5: {
    bg: "rgba(249,115,22,0.15)",
    text: "#f97316",
    border: "rgba(249,115,22,0.4)",
  },
  4: {
    bg: "rgba(34,197,94,0.15)",
    text: "#22c55e",
    border: "rgba(34,197,94,0.4)",
  },
  3: {
    bg: "rgba(22,163,74,0.10)",
    text: "#86efac",
    border: "rgba(22,163,74,0.25)",
  },
  2: {
    bg: "rgba(22,163,74,0.07)",
    text: "#6b7280",
    border: "rgba(22,163,74,0.15)",
  },
  1: {
    bg: "rgba(22,163,74,0.04)",
    text: "#6b7280",
    border: "rgba(22,163,74,0.10)",
  },
};

function AchievementCard({
  a,
  i,
  isDark,
  cardBg,
  cardBorder,
  textPrimary,
  textMuted,
  compact = false,
  tall = false,
}: {
  a: (typeof achievements)[0];
  i: number;
  isDark: boolean;
  cardBg: string;
  cardBorder: string;
  textPrimary: string;
  textMuted: string;
  compact?: boolean;
  tall?: boolean;
}) {
  const strip = stripColors[a.rank];
  const triSize = 48 + a.rank * 14;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.07 }}
      className="relative overflow-hidden border cursor-target"
      style={{
        background: cardBg,
        borderColor:
          a.rank === 5
            ? "rgba(249,115,22,0.3)"
            : a.rank === 4
              ? "rgba(34,197,94,0.25)"
              : cardBorder,
        borderRadius: 0,
        padding: compact ? "20px 24px" : "28px 32px",
        minHeight: tall ? 150 : undefined,
        height: compact ? "100%" : "auto",
      }}
    >
      {/* Top accent line — rank 5 orange, rank 4 green */}
      {(a.rank === 5 || a.rank === 4) && (
        <div
          className="absolute inset-x-0 top-0 h-[1px]"
          style={{ background: a.rank === 5 ? "#f97316" : "#22c55e" }}
        />
      )}

      {/* Bottom-right triangle */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: `0 0 ${triSize}px ${triSize}px`,
          borderColor: `transparent transparent ${strip} transparent`,
        }}
      />

      {/* Result badge — pinned top-right, unique color per rank */}
      <span
        className="absolute top-0 right-0 px-3 py-1.5 text-xs font-semibold border-l border-b"
        style={{
          borderRadius: 0,
          background: badgeColors[a.rank].bg,
          color: badgeColors[a.rank].text,
          borderColor: badgeColors[a.rank].border,
        }}
      >
        {a.result}
      </span>

      <div className="flex items-start gap-3" style={{ paddingRight: 80 }}>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-xs font-mono" style={{ color: textMuted }}>
              {a.year}
            </span>
            <h3
              className="font-semibold leading-snug"
              style={{
                color: textPrimary,
                fontSize: compact ? "0.8rem" : "0.95rem",
              }}
            >
              {a.title}
            </h3>
          </div>
          {!compact && (
            <p className="text-sm" style={{ color: textMuted }}>
              {a.note}
            </p>
          )}
          {compact && (
            <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
              {a.note}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function AchievementsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.9)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";

  const top3 = achievements.slice(0, 2);
  const bottom3 = achievements.slice(2);

  const shared = { isDark, cardBg, cardBorder, textPrimary, textMuted };

  return (
    <section
      id="achievements"
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
            Achievements
          </h2>
          <p className="text-sm" style={{ color: textMuted }}>
            Hackathons and competitions I've participated in.
          </p>
        </motion.div>

        {/* Top 2 — full width stacked */}
        <div className="flex flex-col gap-4 mb-4">
          {top3.map((a, i) => (
            <AchievementCard key={i} a={a} i={i} {...shared} tall />
          ))}
        </div>

        {/* Bottom 3 — equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {bottom3.map((a, i) => (
            <AchievementCard key={i + 2} a={a} i={i + 2} {...shared} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
