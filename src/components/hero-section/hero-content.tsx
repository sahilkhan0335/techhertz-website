"use client";
import { motion } from "framer-motion";

interface HeroContentProps {
  className?: string;
}

const HeroContent = ({ className = "" }: HeroContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`flex flex-col justify-start ${className}`}
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight sm:leading-[62px]"
        >
          Transform your <br /> business with digital <br /> solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 text-base sm:text-lg md:text-xl mt-4 sm:mt-5 md:mt-6 leading-relaxed"
        >
          From struggling sales to thriving success. We design and develop Custom websites and apps that drive real growth for your business.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroContent;
