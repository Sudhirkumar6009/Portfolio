"use client";

import { useTheme } from "../context/ThemeContext";
import { Github, Linkedin, Mail, Instagram, Heart, ArrowUp } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Sudhirkumar6009" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/_sudhirkumar123_" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sudhirkumar-kuchara" },
  { icon: XIcon, label: "X", href: "https://x.com/Sudhirkuchara" },
  { icon: Mail, href: "mailto:sudhir.kuchara@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className={`relative overflow-hidden ${
        isDark
          ? "bg-slate-950 border-t border-slate-800"
          : "bg-gray-50 border-t border-gray-200"
      }`}
    >
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className={`h-full w-full bg-gradient-to-r from-transparent via-green-500 to-transparent ${isDark ? "opacity-50" : "opacity-30"}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-gradient-to-br from-green-500 to-emerald-600" : "bg-gradient-to-br from-green-400 to-emerald-500"}`}>
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className={`font-bold text-xl ${isDark ? "text-white" : "text-gray-900"}`}>
                Sudhirkumar Kuchara
              </span>
            </div>
            <p className={`mb-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Full-Stack Developer · AI & Agentic Systems Builder
            </p>
            <p className={`mb-6 text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              Building production-grade AI applications and scalable systems. Available for collaborations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 hover:-translate-y-1 ${
                    isDark
                      ? "bg-slate-800 text-gray-400 hover:text-green-400 hover:bg-slate-700"
                      : "bg-white text-gray-500 hover:text-green-600 hover:bg-gray-100"
                  }`}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="pl-0 md:pl-20">
            <h3 className={`font-bold text-lg mb-4 ${isDark ? "text-green-400" : "text-green-600"}`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`transition-colors duration-200 ${
                      isDark
                        ? "text-gray-400 hover:text-green-400"
                        : "text-gray-600 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${isDark ? "border-slate-800" : "border-gray-200"}`}>
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            © 2025 Sudhirkumar Kuchara. Made with{" "}
            <Heart className="inline w-4 h-4 text-red-500" /> in Ahmedabad
          </p>
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
              isDark
                ? "bg-slate-800 text-green-400 hover:bg-slate-700"
                : "bg-white text-green-600 hover:bg-gray-100 shadow"
            }`}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
