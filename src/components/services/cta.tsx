"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="section-dark py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Need a custom engagement?</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Tell us your goals and we&apos;ll curate a high-impact delivery plan tailored to your roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all hover:-translate-y-1"
            >
              Book Discovery Call
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white/90 transition-all hover:bg-white/20"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
