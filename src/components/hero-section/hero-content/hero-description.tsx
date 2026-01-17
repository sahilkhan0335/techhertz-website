"use client";
import { motion } from "framer-motion";

interface HeroDescriptionProps {
  className?: string;
}

const HeroDescription = ({ className = "" }: HeroDescriptionProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`text-gray-600 text-base sm:text-lg md:text-xl mt-4 sm:mt-5 md:mt-6 leading-relaxed ${className}`}
    >
      From struggling sales to thriving success. We design and develop Custom websites and apps that drive real growth for your business.
    </motion.p>
  );
};

export default HeroDescription;
