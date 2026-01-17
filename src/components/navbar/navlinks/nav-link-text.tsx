"use client";
import { motion } from "framer-motion";

interface NavLinkTextProps {
  name: string;
  className?: string;
}

const NavLinkText = ({ name, className = "" }: NavLinkTextProps) => {
  return (
    <motion.span
      className={`text-gray-700 font-medium block relative ${className}`}
      whileHover={{ color: "#3b82f6" }}
      transition={{ duration: 0.2 }}
    >
      {name}
    </motion.span>
  );
};

export default NavLinkText;
