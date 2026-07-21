"use client";

import { useTheme } from "../context/ThemeContext";
import { Mail, MapPin, Github, Linkedin, PhoneCall, ArrowRight, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

const contactInfo = [
  { icon: Mail,      label: "Email",    value: "sudhir.kuchara@email.com", href: "mailto:sudhir.kuchara@email.com" },
  { icon: PhoneCall, label: "Phone",    value: "+91 88499 41378",           href: "tel:+918849941378" },
  { icon: MapPin,    label: "Location", value: "Ahmedabad, India",          href: "#" },
];

const socialLinks = [
  { icon: Github,    label: "GitHub",      sub: "Sudhirkumar6009",          href: "https://github.com/Sudhirkumar6009" },
  { icon: Linkedin,  label: "LinkedIn",    sub: "sudhirkumar-kuchara",      href: "https://www.linkedin.com/in/sudhirkumar-kuchara" },
  { icon: XIcon,     label: "X (Twitter)", sub: "@Sudhirkuchara",           href: "https://x.com/Sudhirkuchara" },
  { icon: Instagram, label: "Instagram",   sub: "_sudhirkumar123_",         href: "https://www.instagram.com/_sudhirkumar123_" },
];

export function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg          = isDark ? "#0a0a0a" : "#f8f8f8";
  const cardBg      = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const cardBorder  = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const rowBg       = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted   = isDark ? "#9ca3af" : "#6b7280";
  const accent      = isDark ? "#86efac" : "#16a34a";

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: bg }}>
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: textPrimary }}>
            Let's Connect
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: textMuted }}>
            Open to collaborations, full-time roles, and interesting projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* ── LEFT: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="border p-7"
            style={{ background: cardBg, borderColor: cardBorder, borderRadius: 0 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: textMuted }}>
              Contact
            </p>
            <div className="flex flex-col gap-3">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4"
                  style={{ background: rowBg, borderRadius: 0 }}
                >
                  <div
                    className="p-2.5 flex-shrink-0"
                    style={{ background: isDark ? "rgba(22,163,74,0.15)" : "rgba(22,163,74,0.1)", borderRadius: 0 }}
                  >
                    <info.icon className="w-4 h-4" style={{ color: accent }} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: textMuted }}>{info.label}</p>
                    <p className="text-sm font-medium" style={{ color: textPrimary }}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Find Me Online ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="border p-7"
            style={{ background: cardBg, borderColor: cardBorder, borderRadius: 0 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: textMuted }}>
              Find Me Online
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4"
                  style={{ background: rowBg, borderRadius: 0 }}
                >
                  <div
                    className="p-2.5 flex-shrink-0"
                    style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)", borderRadius: 0 }}
                  >
                    <social.icon className="w-4 h-4" style={{ color: textMuted }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium" style={{ color: textPrimary }}>{social.label}</p>
                    <p className="text-xs truncate" style={{ color: textMuted }}>{social.sub}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: textMuted }} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
