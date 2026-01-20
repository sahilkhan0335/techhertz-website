"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

const HeroCanvas = dynamic(() => import("@/components/three/hero-canvas").then((mod) => mod.default), {
  ssr: false,
});

export default function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(34,211,238,0.2),transparent_55%)]" />
      <div className="absolute inset-0 subtle-grid opacity-30" />
      <HeroCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
            TechHertz · Digital Agency
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-white">
            We craft bold digital experiences for <span className="gradient-text">future-ready</span> brands.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl">
            TechHertz is a premium product studio merging engineering, design, and motion to build immersive web, mobile, and software solutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              Start a Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              View Showcase
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Projects", value: "180+" },
              { label: "Launches", value: "92" },
              { label: "Retention", value: "98%" },
              { label: "Global", value: "12" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <div className="text-xl font-semibold text-white">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
