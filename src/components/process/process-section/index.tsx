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
        className="pt-6 xs:pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-3 xs:pb-4 sm:pb-5 md:pb-6"
      >
        <InfiniteTaglineMarquee />
      </motion.div>

      {/* Section 2: Process Title - Animated entry */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-3 xs:py-4 sm:py-5 md:py-6 lg:py-8"
      >
        <ProcessTitle />
      </motion.div>

      {/* Section 3: Infinity Process Visual - Takes full remaining space */}
      <div className="flex-1 flex items-center justify-center -mt-16 xs:-mt-20 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-48">
        <InfinityProcessSection />
      </div>
    </section>
  );
};

export default ProcessSection;
