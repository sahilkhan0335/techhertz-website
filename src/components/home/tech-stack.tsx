"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Three.js",
  "Framer Motion",
  "GSAP",
  "Node.js",
  "PostgreSQL",
  "Vercel",
  "Figma",
];

export default function TechStackSection() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 22,
        ease: "linear",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-dark py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Tech Stack</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">Modern tools for modern products.</h2>
          </div>
          <p className="text-white/60 max-w-xl">
            We use a carefully curated stack focused on velocity, stability, and immersive user experiences.
          </p>
        </motion.div>
      </div>

      <div className="mt-10 relative">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[rgb(var(--bg-dark))] via-transparent to-[rgb(var(--bg-dark))]" />
        <div className="flex gap-6 whitespace-nowrap" ref={marqueeRef}>
          {[...stack, ...stack].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/70"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
