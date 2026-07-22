"use client";

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { TechStackSection } from "./components/TechStackSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import ClickSpark from "./components/ClickSpark";

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#22c55e"
      sparkSize={8}
      sparkRadius={22}
      sparkCount={8}
      duration={450}
    >
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <TechStackSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </ClickSpark>
  );
}
