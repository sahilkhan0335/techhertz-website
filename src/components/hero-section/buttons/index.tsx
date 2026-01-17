"use client";
import { motion } from "framer-motion";
import ContactButton from "./contact-button";
import KnowMoreButton from "./know-more-button";

interface HeroButtonsProps {
  className?: string;
}

const HeroButtons = ({ className = "" }: HeroButtonsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className={`pt-6 sm:pt-8 md:pt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center ${className}`}
    >
      <KnowMoreButton />
      <ContactButton />
    </motion.div>
  );
};

export default HeroButtons;
