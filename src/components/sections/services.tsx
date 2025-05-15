"use client";

import SectionHeading from "@/src/components/ui/section-heading";
import { SERVICE_ICONS, SERVICES } from "@/src/lib/constants";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

export default function ServicesSection() {
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
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 border-b bg-muted/30">
      <div className="container">
        <SectionHeading
          title="Services I Offer"
          subtitle="I provide the following services with expertise and professionalism"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon];

            return (
              <motion.div
                key={service.title}
                variants={item}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className={cn(
                  "h-full rounded-lg border bg-card p-8",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:-translate-y-1"
                )}>
                  <div className="mb-6 relative w-16 h-16">
                    {/* Background glow */}
                    <div className={cn(
                      "absolute inset-0 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity",
                      index % 4 === 0 && "bg-chart-1/40",
                      index % 4 === 1 && "bg-chart-2/40",
                      index % 4 === 2 && "bg-chart-3/40",
                      index % 4 === 3 && "bg-chart-4/40"
                    )} />

                    {/* Icon container */}
                    <div className={cn(
                      "relative h-full w-full rounded-full flex items-center justify-center",
                      "border-2 bg-card",
                      "transition-colors duration-300",
                      index % 4 === 0 && "border-chart-1 group-hover:bg-chart-1/10",
                      index % 4 === 1 && "border-chart-2 group-hover:bg-chart-2/10",
                      index % 4 === 2 && "border-chart-3 group-hover:bg-chart-3/10",
                      index % 4 === 3 && "border-chart-4 group-hover:bg-chart-4/10",
                    )}>
                      <Icon className={cn(
                        "h-8 w-8 transition-colors",
                        index % 4 === 0 && "text-chart-1",
                        index % 4 === 1 && "text-chart-2",
                        index % 4 === 2 && "text-chart-3",
                        index % 4 === 3 && "text-chart-4"
                      )} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}