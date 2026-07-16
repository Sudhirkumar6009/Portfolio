"use client";

import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  PhoneCall,
  Instagram,
  Send,
} from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

const contactInfo = [
  { icon: Mail, label: "Email", value: "sudhir.kuchara@email.com", href: "mailto:sudhir.kuchara@email.com" },
  { icon: PhoneCall, label: "Phone", value: "+91 88499 41378", href: "tel:+918849941378" },
  { icon: MapPin, label: "Location", value: "Ahmedabad, India", href: "#" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Sudhirkumar6009" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sudhirkumar-kuchara" },
  { icon: XIcon, label: "X (Twitter)", href: "https://x.com/Sudhirkuchara" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/_sudhirkumar123_" },
];

export function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:sudhir.kuchara@email.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 ${
    isDark
      ? "bg-slate-800/60 border-slate-700 text-white placeholder-gray-500 focus:border-green-500/50 focus:ring-green-500/20"
      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20"
  }`;

  return (
    <section
      id="contact"
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-80 h-80 rounded-full ${isDark ? "bg-green-500/5" : "bg-green-300/10"}`} style={{ filter: "blur(80px)" }} />
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full ${isDark ? "bg-emerald-500/5" : "bg-emerald-300/10"}`} style={{ filter: "blur(80px)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="mt-3" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className={isDark ? "text-white" : "text-gray-900"}>Let's{" "}</span>
            <span className={isDark ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400" : "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"}>
              Connect
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Have a project in mind or want to collaborate? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Contact Info + Socials */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className={`p-8 rounded-3xl border ${isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-gray-200 shadow-lg"}`}>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <a key={i} href={info.href} className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-1 ${isDark ? "bg-slate-800/50 hover:bg-slate-800" : "bg-gray-50 hover:bg-gray-100"}`}>
                    <div className={`p-3 rounded-xl ${isDark ? "bg-green-500/20" : "bg-green-50"}`}>
                      <info.icon className={`w-5 h-5 ${isDark ? "text-green-400" : "text-green-600"}`} />
                    </div>
                    <div>
                      <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{info.label}</p>
                      <p className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={`p-8 rounded-3xl border ${isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-gray-200 shadow-lg"}`}>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Find Me Online</h3>
              <div className="space-y-3">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-1 ${isDark ? "bg-slate-800/50 hover:bg-slate-800" : "bg-gray-50 hover:bg-gray-100"}`}
                  >
                    <div className={`p-3 rounded-xl ${isDark ? "bg-slate-700" : "bg-gray-100"}`}>
                      <social.icon className={`w-5 h-5 ${isDark ? "text-gray-300" : "text-gray-700"}`} />
                    </div>
                    <p className={`font-medium flex-1 ${isDark ? "text-white" : "text-gray-900"}`}>{social.label}</p>
                    <ArrowRight className={`w-4 h-4 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className={`p-8 rounded-3xl border ${isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-gray-200 shadow-lg"}`}>
            <h3 className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  sent
                    ? isDark ? "bg-green-600 text-white" : "bg-green-600 text-white"
                    : "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                }`}
              >
                {sent ? "Message Sent! ✓" : (<><Send className="w-4 h-4" /> Send Message</>)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
