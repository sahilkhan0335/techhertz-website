"use client";
import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Intentional discovery",
    description: "Every engagement starts with deep research, stakeholder alignment, and clear positioning.",
  },
  {
    title: "Design-led execution",
    description: "We craft systems that scale, with motion and interaction built into every layer.",
  },
  {
    title: "Engineering excellence",
    description: "Performance, accessibility, and reliability are non-negotiable in every delivery.",
  },
];

export default function AboutStory() {
  return (
    <section className="section-dark-2 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="space-y-10">
            <SectionHeading
              label="Our Story"
              title="We blend product strategy, human experience, and cutting-edge engineering."
              description="TechHertz started with a single mission: help visionary teams ship premium digital products that feel alive and perform flawlessly."
            />

            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-8"
          >
            <div className="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.25),transparent_60%)] p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Studio Metrics</p>
              <div className="mt-6 grid grid-cols-2 gap-6 text-white">
                {[
                  { label: "Launches", value: "92" },
                  { label: "Teams", value: "50+" },
                  { label: "Countries", value: "12" },
                  { label: "Retention", value: "98%" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-semibold">{stat.value}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
