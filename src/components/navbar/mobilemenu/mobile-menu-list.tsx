"use client";
import { motion } from "framer-motion";

interface MobileMenuListProps {
  children: React.ReactNode;
  className?: string;
}

const MobileMenuList = ({ children, className = "" }: MobileMenuListProps) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className={`flex flex-col px-6 py-4 gap-4 ${className}`}
    >
      {children}
    </motion.ul>
  );
};

export default MobileMenuList;
