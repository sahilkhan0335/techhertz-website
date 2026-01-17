"use client";
import { motion } from "framer-motion";
import InfiniteTaglineMarquee from "../infinite-tagline-marquee";
import InfinityProcessSection from "../infinity-process-section";
import ProcessTitle from "../process-title";

const ProcessSection = () => {
  return (
    <section className="bg-black text-white w-full min-h-screen flex flex-col">
      {/* Section 1: Infinite Tagline - Animated entry */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6"
      >
        <InfiniteTaglineMarquee />
      </motion.div>

      {/* Section 2: Process Title - Animated entry */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-4 sm:py-6 md:py-8"
      >
        <ProcessTitle />
      </motion.div>

      {/* Section 3: Infinity Process Visual - Takes full remaining space */}
      <div className="flex-1 flex items-center justify-center -mt-32 sm:-mt-40 md:-mt-48">
        <InfinityProcessSection />
      </div>
    </section>
  );
};

export default ProcessSection;
