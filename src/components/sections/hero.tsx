"use client";


import { motion } from "framer-motion";
import { ArrowRightIcon, DownloadIcon, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ReactTyped } from "react-typed";
import samimPic from "../Images/samim.jpg";
import { Button } from "../ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 overflow-hidden border-b"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Hi, I&apos;m S@mim Hoss@in Sujon
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ReactTyped
                  strings={[
                    "MERN Stack Developer",
                    "Frontend Specialist",
                    "React Naitve Developer",
                    "Full Stack Developer",
                    "Web Developer",
                    "Software Engineer",
                    "JavaScript Developer",
                    "React Developer",
                    "Backend Developer",
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop
                />
              </motion.div>

              <motion.p
                className="text-muted-foreground max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I build exceptional and accessible digital experiences for the web.
                Specialized in creating modern, responsive applications using the MERN stack.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="#contact">
                  Contact Me <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <DownloadIcon className="h-4 w-4" /> Download CV
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICONS[link.icon.toLowerCase()];
                if (!Icon) return null;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image side */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 blur-md" />
              <div className="relative rounded-full border-4 border-muted p-2">
                <Avatar className="h-64 w-64 md:h-80 md:w-80">
                  <AvatarImage src={samimPic.src} alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              {/* Tech badges */}
              <motion.div
                className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-background p-1 shadow-lg flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-background p-1 shadow-lg flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-2xl">🌐</span>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-12 h-16 w-16 rounded-full bg-background p-1 shadow-lg flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-2xl">🔋</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">Scroll Down</p>
          <motion.div
            className="h-12 w-6 rounded-full border-2 border-muted flex items-start justify-center p-1.5"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="h-2 w-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}