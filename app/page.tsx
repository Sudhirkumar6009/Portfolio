"use client";

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HighlightsSection } from "./components/HighlightsSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TechStackSection } from "./components/TechStackSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <AchievementsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
