"use client";

import { useTheme } from "../context/ThemeContext";
import { ExternalLink, Github, Folder, Star } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory and payment processing.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "🛒",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application powered by AI with natural language processing.",
    tags: ["React", "Node.js", "OpenAI", "Socket.io"],
    image: "🤖",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with drag-and-drop and analytics.",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    image: "📋",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Fitness Tracking App",
    description:
      "Mobile-first fitness app with workout tracking and progress charts.",
    tags: ["React Native", "Redux", "MongoDB"],
    image: "💪",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Portfolio Generator",
    description:
      "Dynamic portfolio builder with customizable themes and live preview.",
    tags: ["Next.js", "Prisma", "Tailwind"],
    image: "🎨",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather app with location-based forecasts and maps.",
    tags: ["React", "OpenWeather API", "Mapbox"],
    image: "🌤️",
    github: "#",
    demo: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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

        {/* Projects Grid - Using CSS transitions instead of Framer Motion */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 will-change-transform ${
                isDark
                  ? "bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5"
                  : "bg-white border-gray-200 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Project Icon */}
              <div
                className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 ${
                  isDark
                    ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20"
                    : "bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200"
                }`}
              >
                {project.image}
              </div>

              {/* Content */}
              <h3
                className={`text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-cyan-500 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`mb-4 text-sm leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      isDark
                        ? "bg-slate-800 text-cyan-300"
                        : "bg-cyan-50 text-cyan-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  className={`p-2 rounded-lg transition-colors duration-200 hover:scale-105 ${
                    isDark
                      ? "bg-slate-800 text-gray-300 hover:text-cyan-400"
                      : "bg-gray-100 text-gray-600 hover:text-cyan-600"
                  }`}
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={project.demo}
                  className={`p-2 rounded-lg transition-colors duration-200 hover:scale-105 ${
                    isDark
                      ? "bg-slate-800 text-gray-300 hover:text-cyan-400"
                      : "bg-gray-100 text-gray-600 hover:text-cyan-600"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.demo}
                  className={`ml-auto text-sm font-medium flex items-center gap-1 transition-colors duration-200 ${
                    isDark
                      ? "text-cyan-400 hover:text-cyan-300"
                      : "text-cyan-600 hover:text-cyan-700"
                  }`}
                >
                  View Details
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className={`px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 hover:scale-105 active:scale-95 ${
              isDark
                ? "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                : "border-cyan-500/50 text-cyan-600 hover:bg-cyan-500/10"
            }`}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
