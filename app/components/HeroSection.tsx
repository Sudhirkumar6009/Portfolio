"use client";

import { useTheme } from "../context/ThemeContext";
import { ArrowDown } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import CountUp from "@/components/CountUp";
import RotatingText from "@/components/RotatingText";
import MetaBalls from "@/components/MetaBalls";

const particles = [
  { x: 10, y: 20, delay: 0, duration: 8 },
  { x: 30, y: 60, delay: 1, duration: 9 },
  { x: 50, y: 30, delay: 2, duration: 10 },
  { x: 70, y: 70, delay: 0.5, duration: 7 },
  { x: 90, y: 40, delay: 1.5, duration: 11 },
  { x: 20, y: 80, delay: 2.5, duration: 8 },
];

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-gray-50 via-white to-green-50"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-40 animate-float-slow ${
            isDark ? "bg-green-500/20" : "bg-green-300/40"
          }`}
          style={{ filter: "blur(60px)" }}
        />
        <div
          className={`absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-40 animate-float-slower ${
            isDark ? "bg-emerald-500/20" : "bg-emerald-300/40"
          }`}
          style={{ filter: "blur(60px)" }}
        />
        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:100px_100px] ${
            isDark ? "opacity-100" : "opacity-50"
          }`}
        />
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float-up ${
              isDark ? "bg-green-400/60" : "bg-green-500/60"
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[10vh]">
          {/* Left Side */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 text-sm font-medium"
              style={{
                background: isDark ? "rgba(34,197,94,0.08)" : "rgba(34,197,94,0.1)",
                borderColor: isDark ? "rgba(34,197,94,0.25)" : "rgba(34,197,94,0.35)",
                color: isDark ? "#4ade80" : "#16a34a",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className={`block text-sm sm:text-base font-normal mb-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                Building AI Agents, Intelligent Systems &amp;
              </span>
              <span className={`block ${isDark ? "text-white" : "text-gray-900"}`}>
                Modern Full-Stack
              </span>
              <span
                className={`inline-block ${
                  isDark
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-400"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600"
                }`}
              >
                Applications.
              </span>
            </h1>

            <p className={`text-base sm:text-lg mb-6 leading-relaxed max-w-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              I'm <strong className={isDark ? "text-white" : "text-gray-900"}>Sudhirkumar Kuchara</strong>, a Full-Stack Developer focused on AI-powered applications, multi-agent systems, and scalable backend architecture.
            </p>

            {/* Subtitle with RotatingText */}
            <p
              className={`text-xl sm:text-2xl font-light mb-8 flex items-center gap-2 justify-center lg:justify-start flex-wrap ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm a{" "}
              <RotatingText
                texts={[
                  "Full-Stack Developer",
                  "AI Systems Builder",
                  "Hackathon Winner",
                  "Open Source Dev",
                  "Agentic AI Engineer",
                ]}
                mainClassName={`px-3 py-1 rounded-lg font-medium ${
                  isDark
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                    : "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                }`}
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
                splitBy="characters"
              />
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12">
              <InteractiveHoverButton
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </InteractiveHoverButton>

              <a href="https://github.com/Sudhirkumar6009" target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton>
                  GitHub
                </InteractiveHoverButton>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
              <div className="flex flex-col items-center">
                <CountUp
                  from={0}
                  to={25}
                  separator=","
                  direction="up"
                  suffix="+"
                  duration={1}
                  className={`text-2xl sm:text-3xl font-bold mb-1 ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                />
                <p className="text-xs text-gray-500 text-center">Public Projects</p>
              </div>
              <div className="flex flex-col items-center">
                <CountUp
                  from={0}
                  to={5}
                  separator=","
                  direction="up"
                  suffix="+"
                  duration={1}
                  className={`text-2xl sm:text-3xl font-bold mb-1 ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                />
                <p className="text-xs text-gray-500 text-center">Hackathons</p>
              </div>
              <div className="flex flex-col items-center">
                <CountUp
                  from={0}
                  to={1}
                  separator=","
                  direction="up"
                  suffix="🏆"
                  duration={1}
                  className={`text-2xl sm:text-3xl font-bold mb-1 ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                />
                <p className="text-xs text-gray-500 text-center">IBM Winner</p>
              </div>
            </div>
          </div>

          {/* Right Side – MetaBalls */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden">
              <MetaBalls
                color={isDark ? "#4ade80" : "#22c55e"}
                cursorBallColor={isDark ? "#16a34a" : "#15803d"}
                cursorBallSize={2}
                ballCount={15}
                animationSize={30}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={1}
                speed={0.3}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce ${
          isDark
            ? "text-gray-400 hover:text-green-400"
            : "text-gray-500 hover:text-green-600"
        } transition-colors`}
      >
        <span className="text-sm">Scroll Down</span>
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
}
