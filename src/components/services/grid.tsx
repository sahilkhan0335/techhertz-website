"use client";
import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "High-performance marketing sites and web apps built for scale.",
    highlights: ["Next.js + React", "API ecosystems", "Performance budgets"],
  },
  {
    title: "App Development",
    description: "Cross-platform mobile experiences with premium UX and speed.",
    highlights: ["iOS + Android", "Design systems", "App store launch"],
  },
  {
    title: "UI/UX Design",
    description: "Human-first interfaces, design systems, and product storytelling.",
    highlights: ["Research + UX", "Motion systems", "Prototype testing"],
  },
  {
    title: "Custom Software",
    description: "Mission-critical platforms engineered for reliability and growth.",
    highlights: ["Cloud-native", "Automation", "Security"],
  },
  {
    title: "Maintenance & Support",
    description: "Always-on care with proactive monitoring and iteration.",
    highlights: ["24/7 coverage", "Performance tuning", "Continuous release"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-dark-2 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          label="Capabilities"
          title="Services built for velocity, polish, and measurable growth."
          description="Every engagement is tailored to your product goals, with modular delivery that scales." 
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <span className="h-10 w-10 rounded-full border border-white/15 bg-white/10 text-white/70 flex items-center justify-center">
                  ✦
                </span>
              </div>
              <p className="mt-3 text-sm text-white/60">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.highlights.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
