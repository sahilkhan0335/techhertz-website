"use client";
import { motion } from "framer-motion";

interface NodeButtonProps {
  isCompleted: boolean;
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}

const NodeButton = ({ isCompleted, onClick, title, children }: NodeButtonProps) => {
  return (
    <motion.button
      className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full backdrop-blur-lg border-2 flex items-center justify-center transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg ${
        isCompleted
          ? "bg-linear-to-br from-green-500/40 to-emerald-600/30 border-green-400 hover:from-cyan-500/50 hover:to-blue-600/40 hover:border-cyan-400 hover:shadow-cyan-500/40"
          : "bg-linear-to-br from-white/20 to-white/5 border-white/70 hover:from-purple-500/30 hover:to-indigo-600/20 hover:border-purple-400 hover:shadow-purple-500/25"
      } hover:scale-110`}
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      aria-label={`View ${title} details`}
    >
      {children}
    </motion.button>
  );
};

export default NodeButton;
