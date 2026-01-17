"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface MobileMenuLinkProps {
  name: string;
  path: string;
  index: number;
  onClick?: () => void;
  className?: string;
}

const MobileMenuLink = ({ 
  name, 
  path, 
  index, 
  onClick, 
  className = "" 
}: MobileMenuLinkProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.1 }}
    >
      <Link
        href={path}
        onClick={onClick}
        className={`text-gray-700 hover:text-blue-500 transition-colors duration-300 font-medium py-2 block hover:pl-2 border-l-2 border-transparent hover:border-blue-500 ${className}`}
      >
        {name}
      </Link>
    </motion.li>
  );
};

export default MobileMenuLink;
