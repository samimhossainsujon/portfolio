'use client';

import AboutSection from "@/src/components/sections/about";
import ContactSection from "@/src/components/sections/contact";
import ExperienceSection from "@/src/components/sections/experience";
import HeroSection from "@/src/components/sections/hero";
import ProjectsSection from "@/src/components/sections/projects";
import ServicesSection from "@/src/components/sections/services";
import SkillsSection from "@/src/components/sections/skills";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}