"use client";


import { SKILLS } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../ui/section-heading";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = SKILLS.filter(skill =>
    activeTab === "all" || skill.category === activeTab
  );

  return (
    <section id="skills" className="py-24 border-b">
      <div className="container">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical skills and proficiency levels"
        />

        <div className="max-w-4xl mx-auto">
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-12"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <div className="mb-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-muted rounded-md h-8 w-8 flex items-center justify-center">
                      <span role="img" aria-label={skill.name} className="text-lg">
                        {skill.icon === "html" && "🌐"}
                        {skill.icon === "css" && "🎨"}
                        {skill.icon === "javascript" && "📜"}
                        {skill.icon === "typescript" && "🔷"}
                        {skill.icon === "react" && "⚛️"}
                        {skill.icon === "redux" && "🔄"}
                        {skill.icon === "nextjs" && "▲"}
                        {skill.icon === "nodejs" && "🟢"}
                        {skill.icon === "express" && "🚂"}
                        {skill.icon === "mongodb" && "🍃"}
                        {skill.icon === "mongoose" && "🏛️"}
                        {skill.icon === "git" && "📊"}
                        {skill.icon === "tailwind" && "🎐"}
                      </span>
                    </div>
                    <h3 className="font-medium">{skill.name}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>

                <div className="relative">
                  <Progress
                    value={0}
                    className="h-2 bg-muted"
                    style={{
                      "--radius": "9999px"
                    } as React.CSSProperties}
                  />
                  <motion.div
                    className={cn(
                      "absolute top-0 left-0 h-2 rounded-full",
                      skill.category === "frontend" && "bg-chart-1",
                      skill.category === "backend" && "bg-chart-2",
                      skill.category === "database" && "bg-chart-3",
                      skill.category === "other" && "bg-chart-4"
                    )}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}