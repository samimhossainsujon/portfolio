"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, ChevronUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "../ui/button";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Instagram: Instagram,
};

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12 border-t">
      <div className="container  mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg">S@mim Hoss@ain</h3>
                <p className="text-sm text-muted-foreground">MERN Stack Developer</p>
              </div>
            </div>
            <p className="text-center md:text-left text-sm text-muted-foreground max-w-md">
              Creating exceptional web experiences with modern technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="font-semibold text-sm">Quick Links</h4>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              </nav>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="font-semibold text-sm">Resources</h4>
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
                <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </nav>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3 col-span-2 md:col-span-1">
              <h4 className="font-semibold text-sm">Connect</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = SOCIAL_ICONS[link.icon];
                  return (
                    <Link
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                      className="h-8 w-8 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-12 pt-6 border-t gap-4">
          <p className="text-center md:text-left text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} s@mim hossain. All rights reserved.
          </p>

          <Button
            size="icon"
            variant="outline"
            className="rounded-full h-10 w-10"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}