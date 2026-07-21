"use client";

import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  Home,
  User,
  Trophy,
  Code2,
  FolderOpen,
  GraduationCap,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Download,
  Sun,
  Moon,
  Menu,
  X,
  ArrowUp,
} from "lucide-react";

/* ── accent colour tokens ── */
const GREEN = "#16a34a";
const GREEN_BG_DARK = "rgba(22,163,74,0.18)";
const GREEN_BG_LIGHT = "rgba(22,163,74,0.12)";

/* ── nav definition ── */
type NavItem =
  | { kind: "scroll"; icon: React.ElementType; href: string; label: string }
  | { kind: "external"; icon: React.ElementType; href: string; label: string }
  | { kind: "download"; icon: React.ElementType; href: string; label: string };

const NAV: NavItem[] = [
  { kind: "scroll", icon: Home, href: "#home", label: "Home" },
  { kind: "scroll", icon: User, href: "#about", label: "About Me" },
  {
    kind: "scroll",
    icon: Trophy,
    href: "#achievements",
    label: "Key Achievements",
  },
  {
    kind: "scroll",
    icon: Code2,
    href: "#techstack",
    label: "Technical Skills",
  },
  { kind: "scroll", icon: FolderOpen, href: "#projects", label: "Projects" },
  {
    kind: "scroll",
    icon: GraduationCap,
    href: "#education",
    label: "Education",
  },
  { kind: "scroll", icon: Briefcase, href: "#experience", label: "Experience" },
  { kind: "scroll", icon: Mail, href: "#contact", label: "Connect" },
  {
    kind: "external",
    icon: Github,
    href: "https://github.com/Sudhirkumar6009",
    label: "GitHub",
  },
  {
    kind: "external",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sudhirkumar-kuchara",
    label: "LinkedIn",
  },
  {
    kind: "download",
    icon: Download,
    href: "/resume.pdf",
    label: "Download Resume",
  },
];

/* ── Tooltip ── */
function Tip({ label, isDark }: { label: string; isDark: boolean }) {
  return (
    <span
      className="
        pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2
        whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-medium
        opacity-0 group-hover:opacity-100
        translate-y-1 group-hover:translate-y-0
        transition-all duration-200 z-[60]
      "
      style={{
        background: isDark ? "#1a1a1a" : "#111111",
        color: "#ffffff",
        border: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.15)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
      }}
    >
      {label}
      {/* small arrow */}
      <span
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
        style={{ background: isDark ? "#1a1a1a" : "#111111" }}
      />
    </span>
  );
}

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const ticking = useRef(false);

  /* ── scroll tracking ── */
  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      /* show scroll-to-top after passing hero (~100vh) */
      setShowScrollTop(window.scrollY > window.innerHeight * 0.6);

      const ids = [
        "home",
        "about",
        "achievements",
        "techstack",
        "projects",
        "education",
        "experience",
        "contact",
      ];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 130 && r.bottom >= 130) {
            setActiveSection(id);
            break;
          }
        }
      }
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ── click handler ── */
  const handleClick = (item: NavItem) => {
    if (item.kind === "scroll") {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    } else if (item.kind === "external") {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else if (item.kind === "download") {
      const a = document.createElement("a");
      a.href = item.href;
      a.download = "Sudhirkumar_Kuchara_Resume.pdf";
      a.click();
    }
  };

  /* ── shared style helpers ── */
  const pillBg = isDark ? "rgba(10,10,10,0.88)" : "rgba(255,255,255,0.88)";
  const pillBdr = isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
  const pillShadow = isDark
    ? "0 4px 28px rgba(0,0,0,0.65)"
    : "0 4px 28px rgba(0,0,0,0.10)";

  const btnBase = `
    relative group p-2.5 rounded-full
    transition-all duration-200 hover:scale-110 active:scale-95
    focus:outline-none
  `;

  const btnIdle = isDark
    ? "text-gray-400 hover:text-white hover:bg-white/10"
    : "text-gray-500 hover:text-gray-900 hover:bg-black/[0.07]";

  const isActive = (item: NavItem) =>
    item.kind === "scroll" && activeSection === item.href.slice(1);

  return (
    <>
      {/* ════════════════════════════════════════
          DESKTOP PILL NAVBAR
      ════════════════════════════════════════ */}
      <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <nav
          className="flex items-center gap-0.5 px-3 py-2 rounded-full border"
          style={{
            background: pillBg,
            borderColor: pillBdr,
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: pillShadow,
          }}
        >
          {/* ── S logo button ── */}
          <button
            onClick={() => {
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${btnBase} mr-1`}
            title="Home"
          >
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold text-white transition-all duration-200"
              style={{
                background:
                  activeSection === "home"
                    ? `linear-gradient(135deg, ${GREEN}, #15803d)`
                    : "linear-gradient(135deg,#16a34a,#15803d)",
                boxShadow:
                  activeSection === "home"
                    ? `0 0 12px rgba(22,163,74,0.5)`
                    : "none",
              }}
            >
              S
            </span>
            <Tip label="Home" isDark={isDark} />
          </button>

          {/* thin divider after S */}
          <div className="w-px h-4 mx-1.5" style={{ background: pillBdr }} />

          {/* ── nav items 2-8 (scroll) ── */}
          {NAV.filter((n) => n.kind === "scroll" && n.href !== "#home").map(
            (item, i) => (
              <button
                key={i}
                onClick={() => handleClick(item)}
                className={`${btnBase} ${isActive(item) ? "" : btnIdle}`}
                style={
                  isActive(item)
                    ? {
                        background: isDark ? GREEN_BG_DARK : GREEN_BG_LIGHT,
                        color: GREEN,
                      }
                    : {}
                }
              >
                <item.icon className="w-[17px] h-[17px]" />
                <Tip label={item.label} isDark={isDark} />
              </button>
            ),
          )}

          {/* thin divider before external links */}
          <div className="w-px h-4 mx-1.5" style={{ background: pillBdr }} />

          {/* ── GitHub ── */}
          {NAV.filter((n) => n.kind === "external").map((item, i) => (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className={`${btnBase} ${btnIdle}`}
            >
              <item.icon className="w-[17px] h-[17px]" />
              <Tip label={item.label} isDark={isDark} />
            </button>
          ))}

          {/* ── Download Resume — special elegant tooltip ── */}
          {NAV.filter((n) => n.kind === "download").map((item, i) => (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className={`${btnBase} group`}
              style={{ color: isDark ? "#86efac" : GREEN }}
            >
              <item.icon className="w-[17px] h-[17px]" />
              {/* Elegant download tooltip */}
              <span
                className="
                  pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2
                  opacity-0 group-hover:opacity-100
                  translate-y-1 group-hover:translate-y-0
                  transition-all duration-200 z-[60]
                  flex items-center gap-1.5 whitespace-nowrap
                  rounded-xl px-3 py-2 text-xs font-semibold
                "
                style={{
                  background: isDark
                    ? "linear-gradient(135deg,rgba(22,163,74,0.25),rgba(21,128,61,0.2))"
                    : "linear-gradient(135deg,rgba(22,163,74,0.15),rgba(21,128,61,0.1))",
                  border: `1px solid ${isDark ? "rgba(22,163,74,0.4)" : "rgba(22,163,74,0.35)"}`,
                  color: isDark ? "#86efac" : GREEN,
                  boxShadow: "0 4px 16px rgba(22,163,74,0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Download className="w-3 h-3" />
                Download Resume
                <span
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                  style={{
                    background: isDark
                      ? "rgba(22,163,74,0.25)"
                      : "rgba(22,163,74,0.15)",
                    clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                  }}
                />
              </span>
            </button>
          ))}

          {/* thin divider before theme */}
          <div className="w-px h-4 mx-1.5" style={{ background: pillBdr }} />

          {/* ── Theme toggle ── */}
          <button onClick={toggleTheme} className={`${btnBase} ${btnIdle}`}>
            {isDark ? (
              <Sun className="w-[17px] h-[17px]" />
            ) : (
              <Moon className="w-[17px] h-[17px]" />
            )}
            <Tip label={isDark ? "Light Mode" : "Dark Mode"} isDark={isDark} />
          </button>
        </nav>
      </header>

      {/* ════════════════════════════════════════
          MOBILE HAMBURGER
      ════════════════════════════════════════ */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-3 rounded-full border transition-all duration-200 hover:scale-105"
          style={{
            background: pillBg,
            borderColor: pillBdr,
            backdropFilter: "blur(16px)",
            boxShadow: pillShadow,
          }}
        >
          {mobileOpen ? (
            <X
              className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`}
            />
          ) : (
            <Menu
              className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="fixed top-16 right-4 z-40 md:hidden rounded-2xl border p-4 w-56"
          style={{
            background: isDark
              ? "rgba(10,10,10,0.97)"
              : "rgba(255,255,255,0.97)",
            borderColor: pillBdr,
            backdropFilter: "blur(20px)",
            boxShadow: pillShadow,
          }}
        >
          <div className="space-y-1">
            {NAV.map((item, i) => (
              <button
                key={i}
                onClick={() => handleClick(item)}
                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                style={
                  isActive(item)
                    ? {
                        background: isDark ? GREEN_BG_DARK : GREEN_BG_LIGHT,
                        color: GREEN,
                      }
                    : { color: isDark ? "#d1d5db" : "#374151" }
                }
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
              </button>
            ))}
            <div className="h-px my-1" style={{ background: pillBdr }} />
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
              style={{ color: isDark ? "#d1d5db" : "#374151" }}
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════
          SCROLL-TO-TOP BUTTON — bottom-right
      ════════════════════════════════════════ */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-7 right-7 z-50 p-3 rounded-full border transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: isDark
            ? "linear-gradient(135deg,rgba(22,163,74,0.22),rgba(21,128,61,0.18))"
            : "linear-gradient(135deg,rgba(22,163,74,0.15),rgba(21,128,61,0.1))",
          borderColor: isDark ? "rgba(22,163,74,0.4)" : "rgba(22,163,74,0.35)",
          color: isDark ? "#86efac" : GREEN,
          backdropFilter: "blur(12px)",
          boxShadow: isDark
            ? "0 4px 20px rgba(22,163,74,0.25)"
            : "0 4px 20px rgba(22,163,74,0.18)",
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? "auto" : "none",
          transform: showScrollTop
            ? "translateY(0) scale(1)"
            : "translateY(12px) scale(0.9)",
        }}
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </>
  );
}
