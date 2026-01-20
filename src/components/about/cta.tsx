"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-cyan-600" />
      <div className="absolute inset-0 subtle-grid opacity-20" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">Let&apos;s build the next big thing together.</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Share your vision and we&apos;ll map the fastest path to a stunning, high-performing release.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all hover:-translate-y-1"
            >
              Start a Project
            </Link>
            <Link
              href="/service"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white/90 transition-all hover:bg-white/20"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
