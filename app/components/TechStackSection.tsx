"use client";

import { useTheme } from "../context/ThemeContext";

/* SVG icons as inline components — matching the exact icons in image 3 */
const NodeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <path fill="#388e3c" d="M24 4L6 14v20l18 10 18-10V14z"/>
    <path fill="#fff" d="M24 8.5L9.5 17v14L24 39.5 38.5 31V17z" opacity=".1"/>
    <text x="24" y="30" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="monospace">JS</text>
  </svg>
);

const techs = [
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#388e3c" d="M24 4L6 14v20l18 10 18-10V14z"/>
        <path fill="white" d="M24 10l-12 7v14l12 7 12-7V17z" opacity="0.15"/>
        <text x="24" y="29" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Node</text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect width="48" height="48" rx="4" fill="#3178c6"/>
        <text x="24" y="32" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect width="48" height="48" rx="4" fill="#f7df1e"/>
        <text x="24" y="32" textAnchor="middle" fill="#000" fontSize="18" fontWeight="bold" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#3776ab" d="M24 4C13 4 14 9 14 9v6h10v2H10S4 16 4 24s5 13 5 13h4v-6s-.5-5 5-5h12s5 .5 5-5V9s1-5-11-5z"/>
        <path fill="#ffd43b" d="M24 44c11 0 10-5 10-5v-6H24v-2h14s6 .5 6-7-5-13-5-13h-4v6s.5 5-5 5H18s-5-.5-5 5v10s-1 5 11 5z"/>
        <circle cx="18" cy="11" r="2" fill="white"/>
        <circle cx="30" cy="37" r="2" fill="white"/>
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="4" fill="#61dafb"/>
        <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="2"/>
        <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(60 24 24)"/>
        <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(120 24 24)"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#000"/>
        <circle cx="24" cy="24" r="20" fill="none" stroke="#444" strokeWidth="1"/>
        <text x="24" y="29" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">N</text>
      </svg>
    ),
  },
  {
    name: "Express",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <text x="24" y="30" textAnchor="middle" fill="#888" fontSize="11" fontFamily="monospace" fontWeight="bold">ex</text>
      </svg>
    ),
  },
  {
    name: "FastAPI",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#009688"/>
        <text x="24" y="29" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">⚡</text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#4db33d" d="M24 4c-2 8-8 12-8 20 0 5 3 9 8 10 5-1 8-5 8-10 0-8-6-12-8-20z"/>
        <path fill="#3fa037" d="M24 4c2 8 8 12 8 20 0 5-3 9-8 10V4z"/>
        <rect x="23" y="34" width="2" height="10" fill="#3fa037"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <ellipse cx="24" cy="16" rx="14" ry="8" fill="#336791"/>
        <rect x="10" y="16" width="28" height="16" fill="#336791"/>
        <ellipse cx="24" cy="32" rx="14" ry="8" fill="#336791"/>
        <ellipse cx="24" cy="16" rx="14" ry="8" fill="#4a90d9" opacity="0.5"/>
        <text x="24" y="28" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">PG</text>
      </svg>
    ),
  },
  {
    name: "MySQL",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#00758f" d="M8 12h32v24H8z" rx="2"/>
        <text x="24" y="28" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">MySQL</text>
      </svg>
    ),
  },
  {
    name: "Redis",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <ellipse cx="24" cy="30" rx="18" ry="8" fill="#d82c20"/>
        <rect x="6" y="18" width="36" height="12" fill="#d82c20"/>
        <ellipse cx="24" cy="18" rx="18" ry="8" fill="#ff6b6b"/>
        <text x="24" y="22" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">REDIS</text>
      </svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#2496ed" d="M44 22c-1-5-5-7-9-7h-1c-1-4-5-6-9-5l-2 1c-2-2-5-3-8-2l-1 1C10 11 7 14 7 18c-4 1-6 4-5 8 1 3 4 5 7 5h28c4 0 7-3 7-7v-2z"/>
        <rect x="14" y="20" width="4" height="4" rx="1" fill="white"/>
        <rect x="20" y="20" width="4" height="4" rx="1" fill="white"/>
        <rect x="26" y="20" width="4" height="4" rx="1" fill="white"/>
        <rect x="20" y="14" width="4" height="4" rx="1" fill="white"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#24292e"/>
        <path fill="white" d="M24 8C15 8 8 15 8 24c0 7 5 13 11 15 1 .2 1-.4 1-1v-4c-5 1-6-2-6-2-1-2-2-3-2-3-2-1 0-1 0-1 2 0 3 2 3 2 2 3 4 2 5 2 0-1 1-2 1-3-4 0-8-2-8-9 0-2 1-4 2-5 0-1 0-4 2-6 0 0 2-1 6 2 2 0 4-.5 6-.5s4 .5 6 .5c4-3 6-2 6-2 2 2 2 5 2 6 1 1 2 3 2 5 0 7-4 9-8 9 1 1 1 2 1 4v5c0 .6 0 1.2 1 1 6-2 11-8 11-15C40 15 33 8 24 8z"/>
      </svg>
    ),
  },
  {
    name: "Git",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#f05032" d="M44 22l-18-18c-1-1-3-1-4 0L18 8l5 5c1-1 3-1 4 1 1 2 0 4-1 4l5 5c2-1 4 0 5 2 1 2 0 4-2 5s-4 0-5-2c-1-1-1-3 0-4l-5-5v13c1 0 2 1 2 2 0 2-1 3-3 3s-3-1-3-3c0-1 1-2 2-2V19c-1 0-2-1-2-2 0-2 1-3 3-3 1 0 2 0 2 1L20 9l-16 16c-1 1-1 3 0 4l18 18c1 1 3 1 4 0l18-18c1-2 1-4 0-5z"/>
      </svg>
    ),
  },
  {
    name: "HTML5",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#e34f26" d="M8 4l3 34 13 4 13-4 3-34z"/>
        <path fill="#ef652a" d="M24 40l10-3 3-29H24z"/>
        <path fill="white" d="M24 20h-6l-.5-5H24v-5H12l1.5 16H24zm0 10l-5-1.5-.3-4H14l.6 7 9.4 2.5z"/>
        <path fill="white" d="M24 20v5h5.5l-.5 5L24 31v5l9.4-2.5.7-8.5H24z"/>
      </svg>
    ),
  },
  {
    name: "CSS3",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#1572b6" d="M8 4l3 34 13 4 13-4 3-34z"/>
        <path fill="#33a9dc" d="M24 40l10-3 3-29H24z"/>
        <path fill="white" d="M24 20H13l.5 5H24zm-1 8l-4-1-.3-3H14l.5 6 8.5 2.5z"/>
        <path fill="white" d="M24 20v5h10l-.5 5-9.5 3v5l9.5-2.5 1.5-15.5H24z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#38bdf8" d="M24 12c-5 0-8 2.5-9 7.5 1.5-2 3.5-2.5 5.5-2 1.2.3 2 1.1 3 2 1.5 1.5 3 3 6.5 3 5 0 8-2.5 9-7.5-1.5 2-3.5 2.5-5.5 2-1.2-.3-2-1.1-3-2-1.5-1.5-3-3-6.5-3zm-9 12c-5 0-8 2.5-9 7.5 1.5-2 3.5-2.5 5.5-2 1.2.3 2 1.1 3 2 1.5 1.5 3 3 6.5 3 5 0 8-2.5 9-7.5-1.5 2-3.5 2.5-5.5 2-1.2-.3-2-1.1-3-2-1.5-1.5-3-3-6.5-3z"/>
      </svg>
    ),
  },
  {
    name: "IPFS",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="none" stroke="#65c2cb" strokeWidth="2"/>
        <circle cx="24" cy="24" r="5" fill="#65c2cb"/>
        <line x1="24" y1="4" x2="24" y2="19" stroke="#65c2cb" strokeWidth="1.5"/>
        <line x1="24" y1="29" x2="24" y2="44" stroke="#65c2cb" strokeWidth="1.5"/>
        <line x1="6" y1="14" x2="19" y2="21" stroke="#65c2cb" strokeWidth="1.5"/>
        <line x1="29" y1="27" x2="42" y2="34" stroke="#65c2cb" strokeWidth="1.5"/>
        <line x1="42" y1="14" x2="29" y2="21" stroke="#65c2cb" strokeWidth="1.5"/>
        <line x1="19" y1="27" x2="6" y2="34" stroke="#65c2cb" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Gemini AI",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <defs>
          <linearGradient id="gemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285f4"/>
            <stop offset="100%" stopColor="#34a853"/>
          </linearGradient>
        </defs>
        <path fill="url(#gemGrad)" d="M24 6C14 6 6 14 6 24s8 18 18 18 18-8 18-18S34 6 24 6zm0 8l6 10-6 10-6-10z"/>
      </svg>
    ),
  },
];

export function TechStackSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)";
  const cardBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";

  return (
    <section
      id="techstack"
      className="py-28 px-4 sm:px-6 lg:px-8"
      style={{ background: bg }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading — exactly like image 3 */}
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
          style={{ color: textPrimary }}
        >
          Technical Skills
        </h2>

        {/* Grid — 5 columns, dark bordered cards, icon + name — exactly like image 3 */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {techs.map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-3 py-6 px-3 rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:scale-105 cursor-default"
              style={{
                background: cardBg,
                borderColor: cardBorder,
              }}
            >
              {tech.svg}
              <span
                className="text-xs font-medium text-center leading-tight"
                style={{ color: textMuted }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
