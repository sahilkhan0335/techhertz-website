"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-80" />
      <div className="absolute inset-0 subtle-grid opacity-25" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Let&apos;s build</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Ready to launch something unforgettable?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Tell us about your product vision and we&apos;ll respond with a strategic plan within 48 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all hover:-translate-y-1"
            >
              Book a Strategy Call
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
