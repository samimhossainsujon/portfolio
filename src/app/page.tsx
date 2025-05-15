'use client';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import ExperienceSection from '@/components/sections/experience';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import ServicesSection from '@/components/sections/services';
import SkillsSection from '@/components/sections/skills';
import React from 'react';

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