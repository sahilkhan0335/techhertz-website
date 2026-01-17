"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonIcon from "./button-icon";

interface KnowMoreButtonProps {
  href?: string;
  className?: string;
  delay?: number;
}

const KnowMoreButton = ({ 
  href = "/about", 
  className = "",
  delay = 0.7 
}: KnowMoreButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={`bg-blue-500 text-white px-6 sm:px-8 md:px-10 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 font-semibold hover:shadow-lg text-base sm:text-lg flex items-center gap-2 h-12 whitespace-nowrap ${className}`}
      >
        Know More
        <ButtonIcon />
      </Link>
    </motion.div>
  );
};

export default KnowMoreButton;
