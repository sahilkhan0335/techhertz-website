"use client";
import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";

const values = [
  { title: "Precision", detail: "Every deliverable is engineered with measurable outcomes in mind." },
  { title: "Curiosity", detail: "We explore new ideas, tech stacks, and motion systems relentlessly." },
  { title: "Partnership", detail: "We embed with your team and win together." },
  { title: "Craft", detail: "Premium experiences demand premium execution." },
];

export default function AboutValues() {
  return (
    <section className="section-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          label="Core Values"
          title="A culture that feels bold, intentional, and future-facing."
          description="Our principles keep every engagement aligned, agile, and purpose-driven."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{value.title}</h3>
              <p className="mt-3 text-sm text-white/60">{value.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
