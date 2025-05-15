"use client";


import { motion } from "framer-motion";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { EXPERIENCES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-b bg-muted/30">
      <div className="container">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and work history in the field of web development"
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:ml-0" />

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              className={cn(
                "relative mb-12 last:mb-0 md:clear-both",
                index % 2 === 0 ? "md:float-left md:text-right md:pr-10" : "md:float-right md:pl-10",
                "md:w-1/2 w-full pl-10 md:pl-0"
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div
                className={cn(
                  "absolute w-4 h-4 rounded-full bg-primary border-4 border-muted top-1.5",
                  "left-0 md:left-auto md:right-0 md:translate-x-1/2",
                  index % 2 !== 0 && "md:left-0 md:right-auto md:-translate-x-1/2"
                )}
              />

              {/* Card */}
              <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{experience.role}</h3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {experience.duration}
                  </span>
                </div>

                <div className="flex items-center text-muted-foreground mb-4 gap-1 text-sm">
                  <BriefcaseIcon className="h-4 w-4" />
                  <span>{experience.company}</span>
                </div>

                <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                  {experience.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex gap-2">
                      <span className="text-primary text-lg leading-tight">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}