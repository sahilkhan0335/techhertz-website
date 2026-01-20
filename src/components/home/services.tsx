"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "High-performance marketing sites and complex web apps with pixel-perfect execution.",
    icon: "🌐",
  },
  {
    title: "App Development",
    description: "Cross-platform experiences with native-grade performance and delightful UI.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Human-centric research, UX flows, and scalable design systems.",
    icon: "✨",
  },
  {
    title: "Custom Software",
    description: "Mission-critical tools built for speed, reliability, and scale.",
    icon: "🧠",
  },
  {
    title: "Maintenance & Support",
    description: "Always-on monitoring, optimization, and improvements for peace of mind.",
    icon: "🛡️",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Services</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">Everything you need to ship confident digital products.</h2>
          </div>
          <p className="text-white/60 max-w-xl">
            From ideation to launch, we build with intention. Every service is engineered to deliver impact and measurable business value.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-white/60">{service.description}</p>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-linear-to-br from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
