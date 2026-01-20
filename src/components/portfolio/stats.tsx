"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "120+", label: "Projects Shipped" },
  { value: "98%", label: "Retention" },
  { value: "14", label: "Industries" },
  { value: "4.9", label: "Avg. Rating" },
];

export default function PortfolioStats() {
  return (
    <section className="section-dark py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
