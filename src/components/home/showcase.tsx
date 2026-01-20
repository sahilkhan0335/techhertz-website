"use client";
import { motion } from "framer-motion";

const showcases = [
  {
    title: "Fintech Experience",
    detail: "Immersive dashboard with realtime analytics and AI insights.",
    tag: "Web Platform",
  },
  {
    title: "Health Companion",
    detail: "Mobile-first experience with personalized wellness journeys.",
    tag: "App Suite",
  },
  {
    title: "SaaS Growth Hub",
    detail: "Conversion-optimized landing system and onboarding flows.",
    tag: "Product Launch",
  },
];

export default function ShowcaseSection() {
  return (
    <section className="section-dark-2 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Showcase</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">Visuals that prove we can ship.</h2>
          </div>
          <p className="text-white/60 max-w-xl">
            Even before a full case study, our mockups and interactive prototypes demonstrate capability and polish.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {showcases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-blue-400/40 hover:bg-white/10 transition-all"
            >
              <div className="h-44 rounded-2xl bg-linear-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 border border-white/10 mb-6 flex items-center justify-center">
                <div className="h-24 w-32 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-lg" />
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">{item.tag}</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
