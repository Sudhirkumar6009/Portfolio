"use client";

import { useTheme } from "../context/ThemeContext";
import { ExternalLink, Github, Star, ArrowUpRight, Trophy } from "lucide-react";

export function ProjectsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const projects = [
    {
      title: "SafeSight",
      description:
        "AI-powered violence detection platform using Computer Vision. Achieved 95%+ classification accuracy. IBM SkillsBuild AI Innovation Challenge 2026 Winner.",
      tags: ["React", "FastAPI", "Python", "PostgreSQL", "MongoDB"],
      highlights: ["95%+ Accuracy", "IBM Winner", "Computer Vision"],
      github: "https://github.com/Sudhirkumar6009",
      demo: "https://github.com/Sudhirkumar6009",
      featured: true,
      winner: true,
    },
    {
      title: "NexusMCP",
      description:
        "Natural-language multi-agent orchestration platform capable of executing workflows across GitHub, Jira, Slack and Google Sheets.",
      tags: ["AI Planning", "Tool Calling", "Agentic Architecture"],
      highlights: ["Multi-Agent", "Workflow Automation", "NLP"],
      github: "https://github.com/Sudhirkumar6009",
      demo: "https://github.com/Sudhirkumar6009",
      featured: true,
      winner: false,
    },
    {
      title: "MindMapAI",
      description:
        "Transforms GitHub repositories into interactive knowledge graphs using Gemini-powered agents.",
      tags: ["Graph Visualization", "LLMs", "Knowledge Extraction"],
      highlights: ["Gemini API", "Knowledge Graph", "Repo Analysis"],
      github: "https://github.com/Sudhirkumar6009",
      demo: "https://github.com/Sudhirkumar6009",
      featured: true,
      winner: false,
    },
    {
      title: "StorageX",
      description:
        "Decentralized secure file storage using IPFS, Web3Auth and blockchain-based access control.",
      tags: ["TypeScript", "Web3Auth", "IPFS", "MetaMask", "Node.js"],
      highlights: ["Web3", "Authentication", "Decentralized Storage"],
      github: "https://github.com/Sudhirkumar6009/StorageX",
      demo: "https://storage-x-47xm.vercel.app/",
      featured: true,
      winner: false,
    },
    {
      title: "INDRA",
      description:
        "Climate Intelligence Platform combining AI, spatial data and environmental datasets for prediction and visualization.",
      tags: ["Machine Learning", "Geospatial Data", "Forecasting"],
      highlights: ["ML Models", "Spatial Analysis", "Climate AI"],
      github: "https://github.com/Sudhirkumar6009",
      demo: "https://github.com/Sudhirkumar6009",
      featured: true,
      winner: false,
    },
  ];

  return (
    <section
      id="projects"
      className={`px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 left-1/4 w-80 h-80 rounded-full ${
            isDark ? "bg-green-500/5" : "bg-green-300/10"
          }`}
          style={{ filter: "blur(80px)" }}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-80 h-80 rounded-full ${
            isDark ? "bg-emerald-500/5" : "bg-emerald-300/10"
          }`}
          style={{ filter: "blur(80px)" }}
        />
      </div>

      <div className="relative mt-23 z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="mt-3" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className={isDark ? "text-white" : "text-gray-900"}>
              Featured{" "}
            </span>
            <span
              className={
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"
              }
            >
              Projects
            </span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            AI-powered, production-grade applications built to solve real problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl overflow-hidden border backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01] ${
                project.winner
                  ? isDark
                    ? "border-amber-300/70 bg-transparent shadow-[0_22px_55px_-20px_rgba(251,191,36,0.45)]"
                    : "border-amber-400/70 bg-transparent shadow-[0_22px_50px_-20px_rgba(217,119,6,0.32)]"
                  : isDark
                  ? "border-green-500/20 bg-transparent shadow-[0_16px_45px_-24px_rgba(0,0,0,0.9)] hover:border-green-400/40"
                  : "border-green-300/40 bg-transparent shadow-[0_18px_40px_-24px_rgba(15,23,42,0.15)] hover:border-green-400/60"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Top accent line */}
              <div
                className={`absolute inset-x-0 top-0 h-[2px] pointer-events-none ${
                  project.winner ? "bg-amber-300/90" : "bg-green-500/60"
                }`}
              />

              {/* Content Area */}
              <div className="p-6 pt-8">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-4">
                  {project.winner && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-300 text-amber-950 border border-amber-100/80">
                      <Trophy className="w-3 h-3" /> IBM Winner
                    </span>
                  )}
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs">
                      <Star className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDark
                      ? "text-white group-hover:text-green-400"
                      : "text-gray-900 group-hover:text-green-600"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={`mb-4 text-sm leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((h, j) => (
                    <span
                      key={j}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-green-50 text-green-700 border border-green-200"
                      }`}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 3).map((tag, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                        isDark
                          ? "bg-white/10 text-gray-300 hover:bg-white/15"
                          : "bg-white/55 text-gray-700 hover:bg-white/75"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-white/10 text-green-300"
                          : "bg-white/55 text-green-700"
                      }`}
                    >
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div
                  className={`flex items-center gap-3 pt-4 border-t ${
                    isDark ? "border-white/10" : "border-slate-200/70"
                  }`}
                >
                  <a
                    href={project.github}
                    className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:-rotate-6 ${
                      isDark
                        ? "bg-white/8 text-gray-300 hover:text-white hover:bg-white/14"
                        : "bg-white/50 text-gray-600 hover:text-gray-900 hover:bg-white/75"
                    }`}
                    target="_blank"
                    title="View Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-6 ${
                      isDark
                        ? "bg-white/8 text-gray-300 hover:text-white hover:bg-white/14"
                        : "bg-white/50 text-gray-600 hover:text-gray-900 hover:bg-white/75"
                    }`}
                    target="_blank"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className={`ml-auto text-sm font-semibold flex items-center gap-1.5 transition-all duration-300 group/link ${
                      isDark
                        ? "text-green-400 hover:text-green-300"
                        : "text-green-600 hover:text-green-700"
                    }`}
                    target="_blank"
                  >
                    Details
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                style={{
                  boxShadow: isDark
                    ? `inset 0 0 0 1px rgba(34, 197, 94, 0.2), 0 0 40px -10px rgba(34, 197, 94, 0.2)`
                    : `inset 0 0 0 1px rgba(34, 197, 94, 0.15), 0 0 40px -10px rgba(34, 197, 94, 0.15)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 pb-16">
          <a href="https://github.com/Sudhirkumar6009" target="_blank">
            <button
              className={`cursor-pointer group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40`}
            >
              <span className="relative z-10 flex items-center gap-1">
                View All Projects on GitHub
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
