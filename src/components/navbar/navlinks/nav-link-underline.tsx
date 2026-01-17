"use client";
import { motion } from "framer-motion";

interface NavLinkUnderlineProps {
  className?: string;
}

const NavLinkUnderline = ({ className = "" }: NavLinkUnderlineProps) => {
  return (
    <motion.span
      className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 ${className}`}
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default NavLinkUnderline;
