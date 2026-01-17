"use client";
import { motion } from "framer-motion";

interface NodeIconProps {
  icon: string;
}

const NodeIcon = ({ icon }: NodeIconProps) => {
  return (
    <motion.svg
      className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-white"
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
