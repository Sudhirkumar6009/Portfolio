"use client";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const techs = [
  {
    name: "JavaScript",
    category: "Languages",
    img: "/assets/logo_images/javaScript.png",
  },
  {
    name: "TypeScript",
    category: "Languages",
    img: "/assets/logo_images/typescript.png",
  },
  {
    name: "Python",
    category: "Languages",
    img: "/assets/logo_images/python.png",
  },
  {
    name: "Java",
    category: "Languages",
    img: "/assets/logo_images/java.png",
  },
  {
    name: "SQL",
    category: "Languages",
    img: "/assets/logo_images/mysql.png",
  },

  // Development
  {
    name: "CSS",
    category: "Development",
    img: "/assets/logo_images/css3.png",
  },
  {
    name: "React.js",
    category: "Development",
    img: "/assets/logo_images/react.png",
  },
  {
    name: "Next.js",
    category: "Development",
    img: "/assets/logo_images/nextjs.png",
  },
  {
    name: "Node.js",
    category: "Development",
    img: "/assets/logo_images/nodejs.png",
  },
  {
    name: "FastAPI",
    category: "Development",
    img: "/assets/logo_images/fastapi.png",
  },
  {
    name: "Express.js",
    category: "Development",
    img: "/assets/logo_images/express.png",
  },
  {
    name: "Tailwind CSS",
    category: "Development",
    img: "/assets/logo_images/tailwind.png",
  },
  {
    name: "React Native",
    category: "Development",
    img: "/assets/logo_images/react_native.png",
  },
  {
    name: "Vite",
    category: "Development",
    img: "/assets/logo_images/vite.png",
  },
  { name: "JWT", category: "Development", img: "/assets/logo_images/jwt.png" },

  // AI & Agents
  {
    name: "Gemini API",
    category: "AI & Agents",
    img: "/assets/logo_images/gemini.png",
  },
  {
    name: "Hugging Face",
    category: "AI & Agents",
    img: "/assets/logo_images/huggingface.png",
  },

  // Databases
  {
    name: "MongoDB",
    category: "Databases",
    img: "/assets/logo_images/mongodb.png",
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    img: "/assets/logo_images/postgresql.png",
  },
  {
    name: "MySQL",
    category: "Databases",
    img: "/assets/logo_images/mysql.png",
  },
  {
    name: "Firebase",
    category: "Databases",
    img: "/assets/logo_images/firebase.png",
  },
  {
    name: "Redis",
    category: "Databases",
    img: "/assets/logo_images/redis.png",
  },

  // Blockchain
  {
    name: "Web3.js",
    category: "Blockchain",
    img: "/assets/logo_images/web3.png",
  },
  { name: "IPFS", category: "Blockchain", img: "/assets/logo_images/ipfs.png" },
  {
    name: "Web3Auth",
    category: "Blockchain",
    img: "/assets/logo_images/web3auth.png",
  },
  {
    name: "MetaMask",
    category: "Blockchain",
    img: "/assets/logo_images/metamask.png",
  },

  // Tools
  { name: "Git", category: "Tools", img: "/assets/logo_images/git.png" },
  { name: "GitHub", category: "Tools", img: "/assets/logo_images/github.png" },
  { name: "Docker", category: "Tools", img: "/assets/logo_images/docker.png" },
  {
    name: "GitHub Actions",
    category: "Tools",
    img: "/assets/logo_images/githubactions.png",
  },
  {
    name: "Postman",
    category: "Tools",
    img: "/assets/logo_images/postman.png",
  },
  { name: "Vercel", category: "Tools", img: "/assets/logo_images/vercel.png" },
  { name: "Render", category: "Tools", img: "/assets/logo_images/render.png" },
  {
    name: "Google OAuth",
    category: "Tools",
    img: "/assets/logo_images/googleoauth.png",
  },
];

const categories = [
  "Languages",
  "Development",
  "AI & Agents",
  "Databases",
  "Blockchain",
  "Tools",
];

const categoryColors: Record<string, string> = {
  Languages: "#60a5fa",
  Development: "#34d399",
  "AI & Agents": "#a78bfa",
  Databases: "#fb923c",
  Blockchain: "#f472b6",
  Tools: "#facc15",
};

export function TechStackSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#f8f8f8";
  const textPrimary = isDark ? "#ffffff" : "#0a0a0a";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const divider = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const boxBg = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  const boxBorder = isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.09)";
  const imgBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";

  return (
    <section
      id="techstack"
      className="py-28 px-4 sm:px-6 lg:px-8"
      style={{ background: bg }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: textPrimary }}
          >
            Technical Skills
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.06 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  style={{
                    width: 8,
                    height: 8,
                    background: categoryColors[cat],
                    borderRadius: 0,
                    flexShrink: 0,
                  }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: textMuted }}
                >
                  {cat}
                </span>
              </div>

              {/* Square tech boxes — full width flex wrap */}
              <div className="flex flex-wrap gap-3">
                {techs
                  .filter((t) => t.category === cat)
                  .map((tech, ti) => {
                    const catColor = categoryColors[cat];
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.03 + ti * 0.025 }}
                        whileHover={{
                          y: -4,
                          boxShadow: `0 8px 24px ${catColor}25`,
                        }}
                        className="flex flex-col items-center justify-center gap-2 border transition-colors duration-150"
                        style={{
                          borderRadius: 0,
                          width: 88,
                          height: 88,
                          background: boxBg,
                          borderColor: boxBorder,
                          flexShrink: 0,
                        }}
                      >
                        {/* Image area — blank square, user drops image here */}
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 0,
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={tech.img}
                            alt={tech.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                            onError={(e) => {
                              // Show blank placeholder on missing image
                              (e.target as HTMLImageElement).style.display =
                                "none";
                            }}
                          />
                        </div>

                        {/* Name */}
                        <span
                          className="text-center leading-tight px-1"
                          style={{
                            fontSize: "0.6rem",
                            color: textMuted,
                            maxWidth: 80,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "block",
                          }}
                        >
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
              </div>

              {ci < categories.length - 1 && (
                <div
                  className="mt-8 w-full h-px"
                  style={{ background: divider }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
