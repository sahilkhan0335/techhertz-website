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
      className={`text-gray-900 text-xl xs:text-2xl sm:text-3xl text-left tracking-tight font-semibold mb-2 xs:mb-3 sm:mb-4 -mt-1 ml-56 ${className}`}
    >
      WORK PROCESS
    </motion.h1>
  );
};

export default ProcessTitle;
