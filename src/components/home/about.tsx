"use client";
import { motion } from "framer-motion";

const insights = [
  { title: "Human-first design", detail: "Interfaces that feel effortless, crafted around behavior and clarity." },
  { title: "Engineering precision", detail: "Scalable systems with relentless performance and security focus." },
  { title: "Motion storytelling", detail: "Subtle movement that guides attention and elevates perception." },
];

export default function AboutSection() {
  return (
    <section className="section-dark-2 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">About TechHertz</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
              We are a studio obsessed with launching category-defining digital products.
            </h2>
            <p className="mt-5 text-white/70 text-lg">
              Our teams blend strategy, design, and engineering to build experiences that feel alive. From MVPs to enterprise platforms, we deliver with clarity, speed, and unmatched craft.
            </p>
            <div className="mt-8 grid gap-4">
              {insights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-8">
              <div className="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.3),transparent_55%)] p-8">
                <div className="text-sm uppercase tracking-[0.3em] text-white/60">Our Edge</div>
                <div className="mt-4 text-2xl font-semibold text-white">Tech + Emotion</div>
                <p className="mt-3 text-white/70">
                  We humanize technology through elegant UX, responsive motion, and stunning visuals.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 text-white/70">
                  <div>
                    <div className="text-2xl font-semibold text-white">24/7</div>
                    <div className="text-xs uppercase tracking-[0.2em]">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white">6x</div>
                    <div className="text-xs uppercase tracking-[0.2em]">Faster Launch</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white">50+</div>
                    <div className="text-xs uppercase tracking-[0.2em]">Teams Led</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white">12</div>
                    <div className="text-xs uppercase tracking-[0.2em]">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
