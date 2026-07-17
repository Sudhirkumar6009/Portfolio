"use client";

import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  Briefcase,
  Code2,
  User,
  GraduationCap,
  Wrench,
  Mail,
  Github,
  Linkedin,
  Download,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { icon: Briefcase, href: "#projects", label: "Projects" },
  { icon: Code2, href: "#techstack", label: "Skills" },
  { icon: User, href: "#about", label: "About" },
  { icon: GraduationCap, href: "#education", label: "Education" },
  { icon: Wrench, href: "#experience", label: "Experience" },
  { icon: Mail, href: "#contact", label: "Contact" },
  { icon: Github, href: "https://github.com/Sudhirkumar6009", label: "GitHub", external: true },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sudhirkumar-kuchara", label: "LinkedIn", external: true },
  { icon: Download, href: "#", label: "Resume" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const sections = ["home", "about", "projects", "education", "techstack", "experience", "achievements", "contact"];
        for (const s of sections) {
          const el = document.getElementById(s);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActiveSection(s);
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

  const scrollTo = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank");
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Pill Navbar — centered at top */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        {/* Desktop pill */}
        <div
          className="hidden md:flex items-center gap-1 px-4 py-2.5 rounded-full border"
          style={{
            background: isDark ? "rgba(10,10,10,0.85)" : "rgba(255,255,255,0.85)",
            borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
            backdropFilter: "blur(16px)",
            boxShadow: isDark
              ? "0 4px 24px rgba(0,0,0,0.6)"
              : "0 4px 24px rgba(0,0,0,0.12)",
          }}
        >
          {navItems.map((item, i) => {
            const isActive = !item.external && activeSection === item.href.slice(1);
            return (
              <button
                key={i}
                onClick={() => scrollTo(item.href, item.external)}
                title={item.label}
                className={`relative p-2.5 rounded-full transition-all duration-200 hover:scale-110 group ${
                  isActive
                    ? "bg-[#4f46e5] text-white"
                    : isDark
                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                    : "text-gray-500 hover:text-gray-900 hover:bg-black/8"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                  style={{
                    background: isDark ? "#1e1e1e" : "#111",
                    color: "#fff",
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Divider */}
          <div className={`w-px h-5 mx-1 ${isDark ? "bg-white/15" : "bg-black/15"}`} />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            className={`p-2.5 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark
                ? "text-gray-400 hover:text-white hover:bg-white/10"
                : "text-gray-500 hover:text-gray-900 hover:bg-black/8"
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-3 rounded-full border"
          style={{
            background: isDark ? "rgba(10,10,10,0.9)" : "rgba(255,255,255,0.9)",
            borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen
            ? <X className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`} />
            : <Menu className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`} />
          }
        </button>
      </header>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="fixed top-20 left-1/2 -translate-x-1/2 z-40 md:hidden rounded-2xl border px-4 py-4 w-64"
          style={{
            background: isDark ? "rgba(10,10,10,0.97)" : "rgba(255,255,255,0.97)",
            borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="grid grid-cols-3 gap-3">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollTo(item.href, item.external)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all duration-200 ${
                  isDark ? "hover:bg-white/10 text-gray-300" : "hover:bg-black/5 text-gray-700"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all duration-200 ${
                isDark ? "hover:bg-white/10 text-gray-300" : "hover:bg-black/5 text-gray-700"
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span className="text-xs">Theme</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
