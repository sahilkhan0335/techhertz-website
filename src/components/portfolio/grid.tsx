"use client";
import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useState } from "react";

const filters = ["all", "web", "design", "brand", "ecommerce"] as const;

const projects = [
  {
    title: "Fintech Command Center",
    category: "web",
    description: "Realtime analytics platform with multi-layered data visualization.",
    tags: ["Next.js", "Data Viz", "Fintech"],
  },
  {
    title: "Luxury Commerce",
    category: "ecommerce",
    description: "High-converting storefront with personalized shopping flows.",
    tags: ["Shopify", "UX", "Growth"],
  },
  {
    title: "Healthtech Rebrand",
    category: "brand",
    description: "Complete identity refresh with digital-first brand guidelines.",
    tags: ["Brand", "Identity", "Systems"],
  },
  {
    title: "SaaS Product Suite",
    category: "design",
    description: "Design system and onboarding flows for a B2B platform.",
    tags: ["Design", "Motion", "UX"],
  },
  {
    title: "Creator Economy",
    category: "web",
    description: "A platform to monetize content with immersive dashboards.",
    tags: ["React", "Web", "Scalable"],
  },
  {
    title: "Retail Experience",
    category: "ecommerce",
    description: "Omnichannel journey with AR previews and loyalty systems.",
    tags: ["Commerce", "AR", "Mobile"],
  },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("all");
  const filteredProjects = activeFilter === "all" ? projects : projects.filter((item) => item.category === activeFilter);

  return (
    <section className="section-dark-2 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          label="Selected Work"
          title="Immersive launches crafted with precision, motion, and speed."
          description="Every project is tailored to the brand, market, and business goals it serves."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition-all ${
                activeFilter === filter
                  ? "border-cyan-400/60 bg-cyan-400/10 text-white"
                  : "border-white/10 bg-white/5 text-white/60 hover:border-white/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="h-36 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
              <h3 className="mt-6 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-white/60">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
