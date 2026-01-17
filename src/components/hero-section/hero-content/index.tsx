"use client";
import { motion } from "framer-motion";
import HeroDescription from "./hero-description";
import HeroHeading from "./hero-heading";

interface HeroTextContentProps {
  className?: string;
}

const HeroTextContent = ({ className = "" }: HeroTextContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`flex flex-col justify-start ${className}`}
    >
      <div>
        <HeroHeading />
        <HeroDescription />
      </div>
    </motion.div>
  );
};

export default HeroTextContent;
