"use client";

import { useTheme } from "../context/ThemeContext";
import { Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
        <div
          className={`h-full w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent ${
            isDark ? "opacity-50" : "opacity-30"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark
                    ? "bg-gradient-to-br from-cyan-500 to-blue-600"
                    : "bg-gradient-to-br from-cyan-400 to-blue-500"
                }`}
              >
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span
                className={`font-bold text-xl ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Portfolio
              </span>
            </div>
            <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Building digital experiences that make a difference. Available for
              freelance work and collaborations.
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
                      ? "bg-slate-800 text-gray-400 hover:text-cyan-400 hover:bg-slate-700"
                      : "bg-white text-gray-500 hover:text-cyan-600 hover:bg-gray-100"
                  }`}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`font-bold text-lg mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`transition-colors duration-200 ${
                      isDark
                        ? "text-gray-400 hover:text-cyan-400"
                        : "text-gray-600 hover:text-cyan-600"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className={`font-bold text-lg mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Stay Updated
            </h3>
            <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Subscribe for the latest updates and insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-white placeholder:text-gray-500"
                    : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                }`}
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDark ? "border-slate-800" : "border-gray-200"
          }`}
        >
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            © 2025 Portfolio. Made with{" "}
            <Heart className="inline w-4 h-4 text-red-500" /> by Sudhirkumar
          </p>

          <button
            onClick={scrollToTop}
            className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
              isDark
                ? "bg-slate-800 text-cyan-400 hover:bg-slate-700"
                : "bg-white text-cyan-600 hover:bg-gray-100 shadow"
            }`}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
