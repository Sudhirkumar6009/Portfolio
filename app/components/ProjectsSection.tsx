"use client";

import { useTheme } from "../context/ThemeContext";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const projects = [
    {
      title: "StorageX",
      description:
        "StorageX is a decentralized file storage platform that combines IPFS technology with blockchain-based authentication to deliver secure, censorship-resistant data storage",
      tags: ["TypeScript", "Web3Auth", "IPFS", "MetaMask", "Node.js"],
      image: `${
        isDark ? "/assets/storagex_dark.png" : "/assets/storagex_light.png"
      }`,
      github: "https://github.com/Sudhirkumar6009/StorageX",
      demo: "https://storage-x-47xm.vercel.app/",
      details:
        "https://github.com/Sudhirkumar6009/StorageX/blob/main/README.md",
      featured: true,
    },
    {
      title: "LibraXpert",
      description:
        "LibraXpert is an advanced Cross-platform Library Management System designed for educational institutions, public libraries, and private collections",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      image: "/assets/libraXpert.png",
      github: "https://github.com/Sudhirkumar6009/LibraXpert",
      demo: "https://libraxpert.vercel.app/",
      details:
        "https://github.com/Sudhirkumar6009/StorageX/blob/main/README.md",
      featured: true,
    },
    {
      title: "StackIt Q/A Forum",
      description:
        "Odoo'25 Virtual round project — StackIt is a minimal Q/A forum platform built with modern web technologies, designed for clean, community-driven question-and-answer interactions.",
      tags: ["Express.js", "React", "Tailwind", "MongoDB"],
      image: "/assets/stackIt.png",
      github: "https://github.com/Sudhirkumar6009/StackIt_Odoo",
      demo: "https://libraxpert.vercel.app/",
      details:
        "https://github.com/Sudhirkumar6009/StackIt_Odoo/blob/main/README.md",
      featured: true,
    },
    {
      title: "Fitness Tracking App",
      description:
        "Mobile-first fitness app with workout tracking and progress charts.",
      tags: ["React Native", "Redux", "MongoDB"],
      image: "/projects/fitness-app.png",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Portfolio Generator",
      description:
        "Dynamic portfolio builder with customizable themes and live preview.",
      tags: ["Next.js", "Prisma", "Tailwind"],
      image: "/projects/portfolio-gen.png",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather app with location-based forecasts and maps.",
      tags: ["React", "OpenWeather API", "Mapbox"],
      image: "/projects/weather-app.png",
      github: "#",
      demo: "#",
      featured: false,
    },
  ];
  return (
    <section
      id="projects"
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Static Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 left-1/4 w-80 h-80 rounded-full ${
            isDark ? "bg-cyan-500/5" : "bg-cyan-300/10"
          }`}
          style={{ filter: "blur(80px)" }}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-80 h-80 rounded-full ${
            isDark ? "bg-blue-500/5" : "bg-blue-300/10"
          }`}
          style={{ filter: "blur(80px)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"
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
            A collection of projects showcasing my skills and passion for
            building digital experiences.
          </p>
        </div>

        {/* Projects Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative border border-cyan-200 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                isDark
                  ? "bg-slate-900/80 shadow-2xl shadow-black/20"
                  : "bg-white shadow-xl shadow-gray-200/50"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image/Preview Area */}
              <div className="relative h-48 overflow-hidden">
                {/* Fallback Background */}
                <div
                  className={`absolute inset-0 ${
                    isDark
                      ? "bg-white sm:bg-slate-800"
                      : "bg-white sm:bg-gray-200"
                  }`}
                />

                {/* Project Image as Background */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-2 sm:inset-0 w-[calc(100%-1rem)] sm:w-full h-[calc(100%-1rem)] sm:h-full object-cover transition-all duration-900 group-hover:scale-110 rounded-xl sm:rounded-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-2 left-2 px-1.5 py-1.5 rounded-full text-xs font-semibold flex items-center backdrop-blur-md border border-white/10">
                    <Star className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
                  </div>
                )}

                {/* Hover Overlay with View Button - Slides up from bottom */}
                <div className="absolute inset-y-0 end-2 h-full elevation-20 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out flex items-end justify-center pb-2">
                  <a
                    href={project.demo}
                    className={`px-4 py-3 bg-cyan-500 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-cyan-600 hover:scale-105 shadow-lg ${
                      isDark ? "text-black" : "text-white"
                    }`}
                    target="_blank"
                  >
                    Live
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDark
                      ? "text-white group-hover:text-cyan-400"
                      : "text-gray-900 group-hover:text-cyan-600"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={`mb-4 text-sm leading-relaxed line-clamp-2 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 3).map((tag, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                        isDark
                          ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-slate-800 text-cyan-400"
                          : "bg-cyan-50 text-cyan-600"
                      }`}
                    >
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div
                  className={`flex items-center gap-3 pt-4 border-t ${
                    isDark ? "border-slate-800" : "border-gray-100"
                  }`}
                >
                  <a
                    href={project.github}
                    className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:-rotate-6 ${
                      isDark
                        ? "bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700"
                        : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
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
                        ? "bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700"
                        : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                    target="_blank"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.details}
                    className={`ml-auto text-sm font-semibold flex items-center gap-1.5 transition-all duration-300 group/link ${
                      isDark
                        ? "text-cyan-400 hover:text-cyan-300"
                        : "text-cyan-600 hover:text-cyan-700"
                    }`}
                    target="_blank"
                  >
                    Details
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Animated Border Glow on Hover */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                style={{
                  background: `linear-gradient(135deg, transparent, transparent)`,
                  boxShadow: isDark
                    ? `inset 0 0 0 1px rgba(6, 182, 212, 0.3), 0 0 40px -10px rgba(6, 182, 212, 0.3)`
                    : `inset 0 0 0 1px rgba(6, 182, 212, 0.2), 0 0 40px -10px rgba(6, 182, 212, 0.2)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button
            className={`group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden ${
              isDark
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
