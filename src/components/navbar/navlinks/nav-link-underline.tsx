"use client";
import { motion } from "framer-motion";

interface NavLinkUnderlineProps {
  className?: string;
  active?: boolean;
}

const NavLinkUnderline = ({ className = "", active = false }: NavLinkUnderlineProps) => {
  return (
    <motion.span
      className={`absolute left-0 -bottom-2 w-full h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 transform origin-left transition-transform duration-300 ease-out ${active ? "scale-x-100 opacity-100" : "scale-x-0 group-hover:scale-x-100"} ${className}`}
    />
  );
};

export default NavLinkUnderline;
