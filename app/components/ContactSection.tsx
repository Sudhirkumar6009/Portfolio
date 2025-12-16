"use client";

import { useTheme } from "../context/ThemeContext";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Coffee,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Instagram,
} from "lucide-react";

// Custom X (Twitter) Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sudhir.kuchara@email.com",
    href: "mailto:sudhir.kuchara@email.com",
  },
  {
    icon: PhoneCall,
    label: "Phone",
    value: "+91 88499 41378",
    href: "tel:+918849941378",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Sudhirkumar6009",
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sudhirkumar-kuchara",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
  },
  {
    icon: XIcon,
    label: "X",
    href: "https://x.com/Sudhirkuchara",
    color: "hover:text-sky-500",
    bgColor: "hover:bg-sky-50 dark:hover:bg-sky-900/30",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/_sudhirkumar123_",
    color: "hover:text-sky-500",
    bgColor: "hover:bg-sky-50 dark:hover:bg-sky-900/30",
  },
];

const services = [
  { title: "Web Development", description: "Modern, responsive websites" },
  { title: "UI/UX Design", description: "Beautiful, intuitive interfaces" },
  { title: "Consulting", description: "Technical guidance & strategy" },
];

export function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Static Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-80 h-80 rounded-full ${
            isDark ? "bg-cyan-500/5" : "bg-cyan-300/10"
          }`}
          style={{ filter: "blur(80px)" }}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full ${
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
              Let's{" "}
            </span>
            <span
              className={
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"
              }
            >
              Connect
            </span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have a project in mind or want to collaborate? Contact me
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services */}
          <div
            className={`p-8 rounded-3xl border ${
              isDark
                ? "bg-slate-900/50 border-slate-800"
                : "bg-white border-gray-200 shadow-lg"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-3 rounded-xl ${
                  isDark ? "bg-cyan-500/20" : "bg-cyan-50"
                }`}
              >
                <Coffee
                  className={`w-5 h-5 ${
                    isDark ? "text-cyan-400" : "text-cyan-600"
                  }`}
                />
              </div>
              <h3
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Services
              </h3>
            </div>
            <div className="space-y-4">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl ${
                    isDark ? "bg-slate-800/50" : "bg-gray-50"
                  }`}
                >
                  <h4
                    className={`font-semibold mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`p-8 rounded-3xl border ${
              isDark
                ? "bg-slate-900/50 border-slate-800"
                : "bg-white border-gray-200 shadow-lg"
            }`}
          >
            <h3
              className={`text-xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Contact Info
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-1 ${
                    isDark
                      ? "bg-slate-800/50 hover:bg-slate-800"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl ${
                      isDark ? "bg-cyan-500/20" : "bg-cyan-50"
                    }`}
                  >
                    <info.icon
                      className={`w-5 h-5 ${
                        isDark ? "text-cyan-400" : "text-cyan-600"
                      }`}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {info.label}
                    </p>
                    <p
                      className={`font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`p-8 rounded-3xl border ${
              isDark
                ? "bg-slate-900/50 border-slate-800"
                : "bg-white border-gray-200 shadow-lg"
            }`}
          >
            <h3
              className={`text-xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Connect With Me
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-1 ${
                    isDark
                      ? "bg-slate-800/50 hover:bg-slate-800"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl ${
                      isDark ? "bg-slate-700" : "bg-gray-100"
                    }`}
                  >
                    <social.icon
                      className={`w-5 h-5 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {social.label}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
