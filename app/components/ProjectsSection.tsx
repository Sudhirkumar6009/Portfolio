"use client";

import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  shortDesc: string;
  description: string;
  learned: string[];
  tags: string[];
  image: string;
  github: string;
  demo: string;
  winner?: boolean;
  color: string; // tag accent color
};

const projects: Project[] = [
  {
    title: "SafeSight",
    shortDesc: "AI-powered violence detection using Computer Vision.",
    description:
      "Real-time violence detection platform built with Computer Vision and Deep Learning. Processes live video feeds and classifies violent vs non-violent activity with 95%+ accuracy. Won the IBM SkillsBuild AI Innovation Challenge 2026.",
    learned: [
      "Deep Learning model training with custom datasets",
      "FastAPI for high-performance ML inference APIs",
      "Real-time video stream processing",
      "PostgreSQL + MongoDB hybrid storage architecture",
    ],
    tags: ["React", "FastAPI", "Python", "PostgreSQL", "Computer Vision"],
    image: "/assets/storagex_dark.png",
    github: "https://github.com/Sudhirkumar6009",
    demo: "https://github.com/Sudhirkumar6009",
    winner: true,
    color: "#f59e0b",
  },
  {
    title: "NexusMCP",
    shortDesc: "Natural-language multi-agent orchestration platform.",
    description:
      "Describe a workflow in plain English and execute it across GitHub, Jira, Slack, and Google Sheets using a multi-agent architecture. Agents plan, delegate, and call tools autonomously.",
    learned: [
      "Multi-agent system design with tool-calling LLMs",
      "MCP (Model Context Protocol) integration",
      "Orchestrating external APIs via AI agents",
      "Prompt engineering for reliable agent behavior",
    ],
    tags: ["TypeScript", "Node.js", "Gemini API", "MCP", "Agentic AI"],
    image: "/assets/storagex_dark.png",
    github: "https://github.com/Sudhirkumar6009",
    demo: "https://github.com/Sudhirkumar6009",
    color: "#818cf8",
  },
  {
    title: "MindMapAI",
    shortDesc: "Transforms GitHub repos into interactive knowledge graphs.",
    description:
      "Uses Gemini-powered agents to parse GitHub repositories and generate interactive knowledge graphs. Extracts relationships between files, functions, and modules.",
    learned: [
      "Graph data structures and D3.js visualization",
      "LLM-based code understanding and summarization",
      "GitHub API integration for repo parsing",
      "Knowledge extraction from unstructured code",
    ],
    tags: ["React", "Python", "Gemini API", "D3.js", "LLMs"],
    image: "/assets/storagex_dark.png",
    github: "https://github.com/Sudhirkumar6009",
    demo: "https://github.com/Sudhirkumar6009",
    color: "#34d399",
  },
  {
    title: "StorageX",
    shortDesc: "Decentralized file storage with IPFS and Web3Auth.",
    description:
      "Decentralized file storage platform combining IPFS with blockchain-based access control. Users authenticate via Web3Auth and store files in a censorship-resistant, distributed network.",
    learned: [
      "IPFS protocol and decentralized storage concepts",
      "Web3Auth OAuth integration for wallet-less onboarding",
      "Smart contract-based access control",
      "TypeScript full-stack architecture",
    ],
    tags: ["TypeScript", "Web3Auth", "IPFS", "MetaMask", "Solidity"],
    image: "/assets/storagex_dark.png",
    github: "https://github.com/Sudhirkumar6009/StorageX",
    demo: "https://storage-x-47xm.vercel.app/",
    color: "#60a5fa",
  },
  {
    title: "INDRA",
    shortDesc: "Climate Intelligence Platform with AI and spatial data.",
    description:
      "Combines machine learning, geospatial datasets, and environmental APIs to predict and visualize climate patterns. Provides forecasting dashboards for temperature, rainfall, and air quality.",
    learned: [
      "Geospatial data processing with Python",
      "ML forecasting models for time-series data",
      "Map visualization with Leaflet.js",
      "Environmental dataset integration and ETL pipelines",
    ],
    tags: ["Python", "FastAPI", "React", "Leaflet.js", "Machine Learning"],
    image: "/assets/storagex_dark.png",
    github: "https://github.com/Sudhirkumar6009",
    demo: "https://github.com/Sudhirkumar6009",
    color: "#4ade80",
  },
  {
    title: "LibraXpert",
    shortDesc: "Advanced cross-platform Library Management System.",
    description:
      "Full-featured library management system for educational institutions. Handles book cataloguing, member management, issue/return tracking, and fine calculation.",
    learned: [
      "MERN stack full-stack development",
      "Role-based access control (RBAC)",
      "Complex MongoDB aggregation pipelines",
      "Responsive UI design with Tailwind CSS",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    image: "/assets/mockup_libraXpert.png",
    github: "https://github.com/Sudhirkumar6009/LibraXpert",
    demo: "https://libraxpert.vercel.app/",
    color: "#f472b6",
  },
];

function ProjectModal({
  project,
  onClose,
  isDark,
}: {
  project: Project;
  onClose: () => void;
  isDark: boolean;
}) {
  const bg          = isDark ? "#111111" : "#ffffff";
  const border      = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted   = isDark ? "#9ca3af" : "#6b7280";

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border"
        style={{ background: bg, borderColor: border, borderRadius: 0 }}
        initial={{ scale: 0.94, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 20 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 transition-all hover:scale-110"
          style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)", borderRadius: 0 }}
        >
          <X className="w-4 h-4" style={{ color: textMuted }} />
        </button>

        <div className="w-full h-52 overflow-hidden" style={{ background: isDark ? "#1a1a1a" : "#f0f0f0" }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </div>

        <div className="p-7">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-2xl font-bold" style={{ color: textPrimary }}>{project.title}</h3>
            {project.winner && (
              <span className="px-3 py-0.5 text-xs font-semibold bg-amber-300 text-amber-950" style={{ borderRadius: 0 }}>
                🏆 IBM Winner
              </span>
            )}
          </div>

          <p className="text-sm leading-relaxed mb-6" style={{ color: textMuted }}>{project.description}</p>

          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: textMuted }}>
              Key Learnings
            </h4>
            <ul className="space-y-2">
              {project.learned.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: textMuted }}>
                  <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0" style={{ background: "#16a34a", display: "inline-block" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-7">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium"
                style={{
                  borderRadius: 999,
                  background: `${project.color}18`,
                  border: `1px solid ${project.color}40`,
                  color: project.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105 border"
              style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)", borderColor: border, color: textPrimary, borderRadius: 0 }}
            >
              <Github className="w-4 h-4" /> View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:brightness-110"
              style={{ background: "linear-gradient(135deg,#16a34a,#15803d)", borderRadius: 0 }}
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selected, setSelected] = useState<Project | null>(null);

  const bg          = isDark ? "#0a0a0a" : "#f8f8f8";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted   = isDark ? "#9ca3af" : "#6b7280";
  const cardBorder  = isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.09)";

  return (
    <>
      <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: textPrimary }}>
              Featured Projects
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: textMuted }}>
              Hover to preview — click for full details.
            </p>
          </div>

          {/* 3×2 grid — 3 cols, 2 rows */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t"
            style={{ borderColor: cardBorder }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden cursor-pointer border-r border-b cursor-target"
                style={{
                  borderColor: project.winner ? "rgba(251,191,36,0.4)" : cardBorder,
                  aspectRatio: "4 / 3",
                }}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                onClick={() => setSelected(project)}
              >
                {/* Winner top line */}
                {project.winner && (
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-amber-400/80 z-10" />
                )}

                {/* Background image — full cover, fully visible */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-300"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isDark
                        ? "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.65) 100%)"
                        : "linear-gradient(to bottom, rgba(248,248,248,0.3) 0%, rgba(248,248,248,0.7) 100%)",
                    }}
                  />
                </div>

                {/* Default content */}
                <div className="relative z-10 p-6 flex flex-col h-full justify-between group-hover:opacity-0 transition-opacity duration-300">
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-lg font-bold" style={{ color: textPrimary }}>{project.title}</h3>
                      {project.winner && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-amber-300 text-amber-950" style={{ borderRadius: 0 }}>
                          🏆
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: textMuted }}>{project.shortDesc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 text-xs font-medium"
                        style={{
                          borderRadius: 999,
                          background: `${project.color}18`,
                          border: `1px solid ${project.color}40`,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay — slides up from bottom */}
                <motion.div
                  className="absolute inset-0 z-20 flex flex-col justify-end p-6"
                  initial={false}
                  style={{
                    background: isDark
                      ? "linear-gradient(to top, rgba(10,10,10,0.97) 60%, rgba(10,10,10,0.7))"
                      : "linear-gradient(to top, rgba(248,248,248,0.98) 60%, rgba(248,248,248,0.7))",
                    clipPath: "inset(100% 0 0 0)",
                    transition: "clip-path 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  // We use CSS group-hover via inline style trick below
                >
                  <div>
                    <h3 className="text-base font-bold mb-1" style={{ color: textPrimary }}>{project.title}</h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: textMuted }}>{project.shortDesc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2 py-0.5 text-xs font-medium"
                          style={{
                            borderRadius: 999,
                            background: `${project.color}18`,
                            border: `1px solid ${project.color}40`,
                            color: project.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#16a34a" }}>
                      <ArrowUpRight className="w-3.5 h-3.5" /> Click for details
                    </div>
                  </div>
                </motion.div>

                {/* CSS-driven hover overlay using a sibling approach */}
                <style>{`
                  .group:hover .hover-slide {
                    clip-path: inset(0% 0 0 0) !important;
                  }
                `}</style>
                <div
                  className="hover-slide absolute inset-0 z-20 flex flex-col justify-end p-6"
                  style={{
                    background: isDark
                      ? "linear-gradient(to top, rgba(10,10,10,0.97) 60%, rgba(10,10,10,0.5))"
                      : "linear-gradient(to top, rgba(248,248,248,0.98) 60%, rgba(248,248,248,0.5))",
                    clipPath: "inset(100% 0 0 0)",
                    transition: "clip-path 0.38s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div>
                    <h3 className="text-base font-bold mb-1" style={{ color: textPrimary }}>{project.title}</h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: textMuted }}>{project.shortDesc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2 py-0.5 text-xs font-medium"
                          style={{
                            borderRadius: 999,
                            background: `${project.color}18`,
                            border: `1px solid ${project.color}40`,
                            color: project.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#16a34a" }}>
                      <ArrowUpRight className="w-3.5 h-3.5" /> Click for details
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Sudhirkumar6009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-white transition-all hover:scale-105 hover:brightness-110"
              style={{ background: "linear-gradient(135deg,#16a34a,#15803d)", borderRadius: 0 }}
            >
              View All on GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} isDark={isDark} />
        )}
      </AnimatePresence>
    </>
  );
}
