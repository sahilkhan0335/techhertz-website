"use client";
import { motion } from "framer-motion";

interface ButtonIconProps {
  className?: string;
}

const ButtonIcon = ({ className = "" }: ButtonIconProps) => {
  return (
    <motion.span
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
      className={`text-3xl leading-none ${className}`}
    >
      →
    </motion.span>
  );
};

export default ButtonIcon;
