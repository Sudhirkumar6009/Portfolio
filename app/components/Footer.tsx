"use client";

import { useTheme } from "../context/ThemeContext";
import { Github, Linkedin, Mail, Instagram, Heart } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

const socialLinks = [
  { icon: Github,    label: "GitHub",    href: "https://github.com/Sudhirkumar6009" },
  { icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/sudhirkumar-kuchara" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/_sudhirkumar123_" },
  { icon: XIcon,     label: "X",         href: "https://x.com/Sudhirkuchara" },
  { icon: Mail,      label: "Email",     href: "mailto:sudhir.kuchara@gmail.com" },
];

const quickLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Projects",     href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education",    href: "#education" },
  { label: "Contact",      href: "#contact" },
];

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg          = isDark ? "#0a0a0a" : "#f0f0f0";
  const borderTop   = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted   = isDark ? "#6b7280" : "#9ca3af";
  const iconBg      = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: bg, borderTop: `1px solid ${borderTop}` }}>
      {/* Green gradient top line */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg,transparent,rgba(22,163,74,0.5),transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-base"
                style={{ background: "linear-gradient(135deg,#16a34a,#15803d)" }}
              >
                S
              </div>
              <span className="font-bold text-lg" style={{ color: textPrimary }}>
                Sudhirkumar Kuchara
              </span>
            </div>
            <p className="text-sm mb-1" style={{ color: textMuted }}>
              Full-Stack Developer · AI & Agentic Systems
            </p>
            <p className="text-sm mb-6" style={{ color: textMuted }}>
              Building production-grade software. Available for collaborations.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2.5 rounded-xl transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                  style={{ background: iconBg, color: textMuted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#16a34a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = textMuted)}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-16">
            <h3 className="text-sm font-semibold mb-4" style={{ color: isDark ? "#86efac" : "#16a34a" }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-150"
                    style={{ color: textMuted }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = isDark ? "#86efac" : "#16a34a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = textMuted)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: `1px solid ${borderTop}` }}
        >
          <p className="text-sm" style={{ color: textMuted }}>
            © 2025 Sudhirkumar Kuchara · Made with{" "}
            <Heart className="inline w-3.5 h-3.5 text-red-500" /> in Ahmedabad
          </p>
          <p className="text-xs" style={{ color: textMuted }}>
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
