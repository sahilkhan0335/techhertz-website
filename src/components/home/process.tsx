"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ProcessCanvas = dynamic(() => import("@/components/three/process-canvas").then((mod) => mod.default), {
  ssr: false,
});

const steps = [
  { title: "Discovery", detail: "Deep research, product vision, and roadmap alignment." },
  { title: "Design", detail: "Wireframes, UI systems, prototypes, and motion direction." },
  { title: "Build", detail: "Agile development, QA, and performance optimization." },
  { title: "Launch", detail: "Deployment, analytics, and growth experimentation." },
];

export default function ProcessSection() {
  return (
    <section className="section-dark-2 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">How We Work</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
              A transparent, visual-first process designed to move fast without losing quality.
            </h2>
            <p className="mt-5 text-white/60">
              Every step is intentional. We guide you through a structured journey with visual milestones, 3D touchpoints, and constant momentum.
            </p>
            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-white/50">0{index + 1}</span>
                    <h3 className="text-white font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/60">{step.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ProcessCanvas />
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["Strategy", "Design", "Engineering", "Growth"].map((chip) => (
                <div key={chip} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                  {chip}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
