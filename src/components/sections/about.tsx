/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronsRightIcon } from "lucide-react";
import samimPic from "../Images/samim.jpg";
import SectionHeading from "../ui/section-heading";
import { Button } from "../ui/button";


export default function AboutSection() {
  const achievements = [
    { number: "2+", label: "Years Experience" },
    { number: "30+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
    { number: "6+", label: "Awards" },
  ];

  return (
    <section id="about" className="py-24 border-b">
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="Here you will find more information about me, what I do, and my current skills in terms of programming and technology"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:order-1 order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-chart-1/20 to-chart-2/20 blur-xl -z-10" />
              <div className="relative aspect-square rounded-xl overflow-hidden border-4 border-muted shadow-xl">
                <img
                  src={samimPic.src}
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Achievement boxes */}
              <div className="absolute -bottom-10 -right-5 md:-right-10 bg-background rounded-xl p-4 shadow-lg border">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-primary">{achievement.number}</div>
                      <div className="text-xs text-muted-foreground">{achievement.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6 lg:order-2 order-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get to know me!
            </motion.h3>

            <motion.div
              className="space-y-4 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                I'm a <span className="text-foreground font-medium">MERN Stack Developer</span> with a passion for
                building digital experiences that are both functional and beautiful. I specialize in creating responsive web applications using
                <span className="text-foreground font-medium"> MongoDB, Express.js, React.js, and Node.js</span>.
              </p>
              <p>
                With 5+ years of experience in web development, I've worked on a variety of projects ranging from small business websites to complex enterprise applications. I'm dedicated to writing clean, efficient code and staying up-to-date with the latest industry trends.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blogs and community forums. I believe in continuous learning and growth, both professionally and personally.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild>
                <Link href="#contact" className="gap-2">
                  Contact Me <ChevronsRightIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline">My Resume</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}