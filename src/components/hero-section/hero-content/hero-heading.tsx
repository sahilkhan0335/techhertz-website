"use client";
import { motion } from "framer-motion";

interface HeroHeadingProps {
  className?: string;
}

const HeroHeading = ({ className = "" }: HeroHeadingProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight sm:leading-15.5 ${className}`}
    >
      Transform your <br /> business with digital <br /> solutions
    </motion.h1>
  );
};

export default HeroHeading;
