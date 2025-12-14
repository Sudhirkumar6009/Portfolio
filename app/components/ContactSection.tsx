"use client";

import { useTheme } from "../context/ThemeContext";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 234 567 890",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, Country",
    href: "#",
  },
];

export function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Message sent successfully!");
  };

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
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border mb-4 ${
              isDark
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                : "bg-cyan-500/10 border-cyan-500/30 text-cyan-700"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </span>
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
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
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
                Contact Information
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
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-3xl border ${
                isDark
                  ? "bg-slate-900/50 border-slate-800"
                  : "bg-white border-gray-200 shadow-lg"
              }`}
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                      isDark
                        ? "bg-slate-800 border-slate-700 text-white placeholder:text-gray-500"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                    }`}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                      isDark
                        ? "bg-slate-800 border-slate-700 text-white placeholder:text-gray-500"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                    }`}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                    isDark
                      ? "bg-slate-800 border-slate-700 text-white placeholder:text-gray-500"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                  }`}
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none ${
                    isDark
                      ? "bg-slate-800 border-slate-700 text-white placeholder:text-gray-500"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                  }`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 ${
                  isDark
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
