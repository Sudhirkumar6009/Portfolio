"use client";

import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";

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
};

const projects: Project[] = [
  {
    title: "SafeSight",
    shortDesc: "AI-powered violence detection using Computer Vision.",
    description:
      "SafeSight is a real-time violence detection platform built with Computer Vision and Deep Learning. It processes live video feeds and classifies violent vs non-violent activity with 95%+ accuracy. Won the IBM SkillsBuild AI Innovation Challenge 2026.",
    learned: [
      "Deep Learning model training with custom datasets",
      "FastAPI for high-performance ML inference APIs",
      "Real-time video stream processing",
      "PostgreSQL + MongoDB hybrid storage architecture",
    ],
    tags: ["React", "FastAPI", "Python", "PostgreSQL", "MongoDB", "Computer Vision", "Deep Learning"],
    image: "/assets/storagex_dark.png",
    github: "https://github.com/Sudhirkumar6009",
    demo: "https://github.com/Sudhirkumar6009",
    winner: true,
  },
  {
    title: "NexusMCP",
    shortDesc: "Natural-language multi-agent orchestration platform.",
    description:
      "NexusMCP lets you describe a workflow in plain English and executes it across GitHub, Jira, Slack, and Google Sheets using a multi-agent architecture. Agents plan, delegate, and call tools autonomously.",
    learned: [
      "Multi-agent system design with tool-calling LLMs",
      "MCP (Model Context Protocol) integration",
      "Orchestrating external APIs via AI agents",
      "Prompt engineering for reliable agent behavior",
    ],
    tags: ["TypeScript", "Node.js", "Gemini API", "MCP", "Agentic AI", "REST APIs"],
    image: "/assets/storagex_dark.png",
    github: "https://github.com/Sudhirkumar6009",
    demo: "https://github.com/Sudhirkumar6009",
  },
  {
    title: "MindMapAI",
    shortDesc: "Transforms GitHub repos into interactive knowledge graphs.",
    description:
      "MindMapAI uses Gemini-powered agents to parse GitHub repositories and generate interactive knowledge graphs. It extracts relationships between files, functions, and modules, making large codebases easy to navigate.",
    learned: [
      "Graph data structures and D3.js visualization",
      "LLM-based code understanding and summarization",
      "GitHub API integration for repo parsing",
      "Knowledge extraction from unstructured code",
    ],
    tags: ["React", "Python", "Gemini API", "D3.js", "Graph Visualization", "LLMs"],
    image: "/assets/storagex_dark.png",
    github: "https://github.com/Sudhirkumar6009",
    demo: "https://github.com/Sudhirkumar6009",
  },
  {
    title: "StorageX",
    shortDesc: "Decentralized file storage with IPFS and Web3Auth.",
    description:
      "StorageX is a decentralized file storage platform combining IPFS with blockchain-based access control. Users authenticate via Web3Auth and store files in a censorship-resistant, distributed network.",
    learned: [
      "IPFS protocol and decentralized storage concepts",
      "Web3Auth OAuth integration for wallet-less onboarding",
      "Smart contract-based access control",
      "TypeScript full-stack architecture",
    ],
    tags: ["TypeScript", "Web3Auth", "IPFS", "MetaMask", "Node.js", "Solidity"],
    image: "/assets/storagex_dark.png",
    github: "https://github.com/Sudhirkumar6009/StorageX",
    demo: "https://storage-x-47xm.vercel.app/",
  },
  {
    title: "INDRA",
    shortDesc: "Climate Intelligence Platform with AI and spatial data.",
    description:
      "INDRA combines machine learning, geospatial datasets, and environmental APIs to predict and visualize climate patterns. It provides forecasting dashboards for temperature, rainfall, and air quality.",
    learned: [
      "Geospatial data processing with Python",
      "ML forecasting models for time-series data",
      "Map visualization with Leaflet.js",
      "Environmental dataset integration and ETL pipelines",
    ],
    tags: ["Python", "FastAPI", "React", "Leaflet.js", "Machine Learning", "PostgreSQL"],
    image: "/assets/storagex_dark.png",
    github: "https://github.com/Sudhirkumar6009",
    demo: "https://github.com/Sudhirkumar6009",
  },
  {
    title: "LibraXpert",
    shortDesc: "Advanced cross-platform Library Management System.",
    description:
      "LibraXpert is a full-featured library management system for educational institutions. It handles book cataloguing, member management, issue/return tracking, and fine calculation with a clean React UI.",
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
  },
];

function ProjectModal({ project, onClose, isDark }: { project: Project; onClose: () => void; isDark: boolean }) {
  const bg = isDark ? "#111111" : "#ffffff";
  const border = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border"
        style={{ background: bg, borderColor: border }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full transition-all hover:scale-110"
          style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}
        >
          <X className="w-4 h-4" style={{ color: textMuted }} />
        </button>

        {/* Image */}
        <div className="w-full h-52 overflow-hidden rounded-t-2xl" style={{ background: isDark ? "#1a1a1a" : "#f0f0f0" }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </div>

        <div className="p-7">
          {/* Title + winner badge */}
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-2xl font-bold" style={{ color: textPrimary }}>{project.title}</h3>
            {project.winner && (
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-amber-300 text-amber-950">
                🏆 IBM Winner
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-6" style={{ color: textMuted }}>{project.description}</p>

          {/* What I learned */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: textMuted }}>
              Key Learnings
            </h4>
            <ul className="space-y-2">
              {project.learned.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: textMuted }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#4f46e5" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-7">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  background: isDark ? "rgba(99,102,241,0.1)" : "rgba(99,102,241,0.07)",
                  borderColor: isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.2)",
                  color: isDark ? "#a5b4fc" : "#4f46e5",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-105 border"
              style={{
                background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                borderColor: border,
                color: textPrimary,
              }}
            >
              <Github className="w-4 h-4" /> View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105 hover:brightness-110"
              style={{ background: "#4f46e5" }}
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selected, setSelected] = useState<Project | null>(null);

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.9)";
  const cardBorder = isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.09)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";

  return (
    <>
      <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: textPrimary }}>
              Featured Projects
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: textMuted }}>
              Hover a card to preview — click for full details.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: cardBg,
                  borderColor: project.winner
                    ? "rgba(251,191,36,0.5)"
                    : cardBorder,
                  boxShadow: project.winner
                    ? "0 0 0 0 transparent"
                    : undefined,
                }}
                onClick={() => setSelected(project)}
              >
                {/* Winner top line */}
                {project.winner && (
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-amber-400/80 z-10" />
                )}

                {/* Card content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <h3 className="text-lg font-bold" style={{ color: textPrimary }}>
                      {project.title}
                    </h3>
                    {project.winner && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-300 text-amber-950">
                        🏆 IBM Winner
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: textMuted }}>
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded-full text-xs border"
                        style={{
                          background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                          borderColor: cardBorder,
                          color: textMuted,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 rounded-full text-xs" style={{ color: isDark ? "#a5b4fc" : "#4f46e5" }}>
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover overlay — blur + "Click for details" */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl"
                  style={{
                    background: isDark ? "rgba(10,10,10,0.72)" : "rgba(248,248,248,0.78)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div
                    className="flex flex-col items-center gap-3 px-6 py-5 rounded-xl border"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.9)",
                      borderColor: isDark ? "rgba(99,102,241,0.35)" : "rgba(99,102,241,0.25)",
                    }}
                  >
                    <ArrowUpRight className="w-6 h-6" style={{ color: "#4f46e5" }} />
                    <span className="text-sm font-semibold" style={{ color: textPrimary }}>
                      Click for more details
                    </span>
                    <div className="flex gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: "#4f46e5", color: "#fff" }}
                      >
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all */}
          <div className="text-center mt-14">
            <a
              href="https://github.com/Sudhirkumar6009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:brightness-110"
              style={{ background: "#4f46e5" }}
            >
              View All on GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} isDark={isDark} />
      )}
    </>
  );
}
