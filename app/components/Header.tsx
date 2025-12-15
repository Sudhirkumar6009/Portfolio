"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const ticking = useRef(false);

  // Throttled scroll handler using requestAnimationFrame for 60fps
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);

        const sections = ["home", "about", "projects", "contact"];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
          isScrolled
            ? `mt-3 mx-4 sm:mx-8 md:mx-12 lg:mx-[150px] rounded-3xl ${
                isDark
                  ? "bg-slate-950/90 backdrop-blur-md border border-cyan-500/20"
                  : "bg-white/90 backdrop-blur-md border border-cyan-500/30 shadow-lg"
              }`
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-3xl mx-auto px-2 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between h-17">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-1 group hover:scale-105 transition-transform duration-200"
            >
              <div
                className={`w-10 h-10 m-2 rounded-xl flex items-center justify-center ${
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
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
                    activeSection === link.href.slice(1)
                      ? isDark
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-cyan-600 bg-cyan-500/10"
                      : isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 ${
                  isDark
                    ? "bg-slate-800 text-cyan-400 hover:bg-slate-700"
                    : "bg-gray-100 text-cyan-600 hover:bg-gray-200"
                }`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-3 rounded-xl transition-all duration-200 active:scale-95 ${
                  isDark
                    ? "bg-slate-800 text-white hover:bg-slate-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className={`fixed left-4 right-4 z-40 md:hidden rounded-2xl ${
              isDark
                ? "bg-slate-950/95 backdrop-blur-md border border-cyan-500/20"
                : "bg-white/95 backdrop-blur-md border border-cyan-500/30"
            }`}
            style={{ top: isScrolled ? "calc(80px + 30px)" : "90px" }}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-colors duration-150 ${
                    activeSection === link.href.slice(1)
                      ? isDark
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-cyan-500/10 text-cyan-600"
                      : isDark
                      ? "text-gray-300 hover:bg-slate-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
