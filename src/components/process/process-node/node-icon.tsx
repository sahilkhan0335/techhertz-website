"use client";
import { motion } from "framer-motion";

interface NodeIconProps {
  icon: string;
}

const NodeIcon = ({ icon }: NodeIconProps) => {
  return (
    <motion.svg
      className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      whileHover={{ scale: 1.3, rotate: 15 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
    </motion.svg>
  );
};

export default NodeIcon;
