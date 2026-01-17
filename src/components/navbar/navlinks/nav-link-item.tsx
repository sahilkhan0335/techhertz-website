"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavLinkItemProps {
  name: string;
  path: string;
  index?: number;
  className?: string;
}

const NavLinkItem = ({ name, path, index = 0, className = "" }: NavLinkItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
    >
      <Link href={path} className={`relative ${className}`}>
        <motion.span
          className="text-gray-700 font-medium block relative"
          whileHover={{ color: "#3b82f6" }}
          transition={{ duration: 0.2 }}
        >
          {name}
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.span>
      </Link>
    </motion.li>
  );
};

export default NavLinkItem;
