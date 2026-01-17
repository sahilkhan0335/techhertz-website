"use client";
import { motion } from "framer-motion";

interface LogoImageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const LogoImageWrapper = ({ children, className = "" }: LogoImageWrapperProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LogoImageWrapper;
