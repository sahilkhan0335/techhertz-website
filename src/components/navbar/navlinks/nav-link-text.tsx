"use client";
import { motion } from "framer-motion";

interface NavLinkTextProps {
  name: string;
  className?: string;
  active?: boolean;
}

const NavLinkText = ({ name, className = "", active = false }: NavLinkTextProps) => {
  return (
    <motion.span
      className={`block relative text-sm font-medium tracking-wide ${active ? "text-white" : "text-white/70"} ${className}`}
      whileHover={{ color: "#ffffff" }}
      transition={{ duration: 0.2 }}
    >
      {name}
    </motion.span>
  );
};

export default NavLinkText;
