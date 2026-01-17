"use client";
import { motion } from "framer-motion";

interface LogoTextWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const LogoTextWrapper = ({ children, className = "" }: LogoTextWrapperProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LogoTextWrapper;
