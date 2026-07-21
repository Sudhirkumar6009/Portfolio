"use client";

import { useTheme } from "../context/ThemeContext";

const techCategories = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Development",
    items: [
      "React.js", "Next.js", "React Native", "Tailwind CSS", "Vite",
      "Node.js", "Express.js", "FastAPI", "REST API Design", "JWT",
    ],
  },
  {
    title: "AI & Agents",
    items: [
      "Multi-agent Systems", "LLM Integration", "Deep Learning",
      "Computer Vision", "Gemini API", "Prompt Engineering",
      "Hugging Face", "Google AI",
    ],
  },
  {
    title: "Databases & Storage",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
  },
  {
    title: "Blockchain & Web3",
    items: [
      "Web3.js", "IPFS", "Web3Auth", "Solidity",
      "dApp Development", "Filebase", "CRUST Network",
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      "Git", "GitHub", "Postman", "MongoDB Atlas", "Google OAuth",
      "Google Colab", "Docker", "CI/CD (GitHub Actions)",
      "Vercel", "Render", "Agile/Scrum", "Unit Testing",
    ],
  },
];

export function TechStackSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const divider = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const pillBg = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";
  const pillBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const pillText = isDark ? "#d1d5db" : "#374151";

  return (
    <section
      id="techstack"
      className="py-28 px-4 sm:px-6 lg:px-8"
      style={{ background: bg }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: textPrimary }}
          >
            Technical Skills
          </h2>
        </div>

        {/* Category rows */}
        <div>
          {techCategories.map((cat, i) => (
            <div key={i}>
              {/* Row */}
              <div className="py-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">

                {/* Category label — fixed width left column */}
                <div className="sm:w-52 flex-shrink-0">
                  <h3
                    className="text-base font-semibold leading-snug"
                    style={{ color: textPrimary }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 flex-1">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                      style={{
                        background: pillBg,
                        borderColor: pillBorder,
                        color: pillText,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider — not after last item */}
              {i < techCategories.length - 1 && (
                <div className="w-full h-px" style={{ background: divider }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
