"use client";
import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="section-dark relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_55%)]" />
      <div className="absolute inset-0 subtle-grid opacity-20" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/70">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
            Work that proves we can ship world-class digital products.
          </h1>
          <p className="text-lg sm:text-xl text-white/65 max-w-3xl mx-auto">
            Explore highlights from our latest product launches, experiential websites, and brand systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
