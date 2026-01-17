"use client";
import { motion } from "framer-motion";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MobileMenuButton = ({ isOpen, onClick, className = "" }: MobileMenuButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group ${className}`}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <motion.span
        className="w-6 h-0.5 bg-gray-700 group-hover:bg-blue-500"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-gray-700 group-hover:bg-blue-500"
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-gray-700 group-hover:bg-blue-500"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default MobileMenuButton;
