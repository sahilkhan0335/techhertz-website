"use client";
import { motion } from "framer-motion";

interface AnimatedLetterProps {
  letter: string;
  index: number;
  className?: string;
}

const AnimatedLetter = ({ letter, index, className = "" }: AnimatedLetterProps) => {
  return (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={`inline-block ${className}`}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export default AnimatedLetter;
