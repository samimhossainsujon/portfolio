"use client";


import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

import { useEffect, useState } from "react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

// Stagger animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(
      PROJECTS.flatMap(project => project.tags.map(tag => tag))
    )
  );

  // Handle filter change
  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(
        PROJECTS.filter(project =>
          project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
        )
      );
    }
    // Reset visible projects when filter changes
    setVisibleProjects(4);
  }, [filter]);

  // Handle loading more projects
  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 4, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-24 border-b">
      <div className="container">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work and personal projects"
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-colors",
              filter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
            onClick={() => setFilter("all")}
          >
            All
          </motion.button>

          {allTags.slice(0, 7).map(tag => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                filter === tag.toLowerCase()
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
              onClick={() => setFilter(tag.toLowerCase())}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-md">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLinkIcon className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <GithubIcon className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load more button */}
        {visibleProjects < filteredProjects.length && (
          <div className="mt-12 text-center">
            <Button onClick={handleLoadMore} variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}