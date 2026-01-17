"use client";
import { motion } from "framer-motion";

interface ProcessTitleProps {
  className?: string;
}

const ProcessTitle = ({ className = "" }: ProcessTitleProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2 
      }}
      className={`bg-clip-text text-transparent bg-linear-to-r from-white via-white to-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-tight font-(--font-orbitron) mb-2 -mt-4 ${className}`}
    >
      PROCESS
    </motion.h1>
  );
};

export default ProcessTitle;
