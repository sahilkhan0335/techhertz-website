"use client";
import { motion } from "framer-motion";

interface TypingCursorProps {
  className?: string;
}

const TypingCursor = ({ className = "" }: TypingCursorProps) => {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity }}
      className={`inline-block ml-1 ${className}`}
    >
      |
    </motion.span>
  );
};

export default TypingCursor;
