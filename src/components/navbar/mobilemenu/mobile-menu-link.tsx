"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.1 }}
    >
      <Link
        href={path}
        onClick={onClick}
        className={`transition-colors duration-300 font-medium py-2 block hover:pl-2 border-l-2 transform cursor-pointer ${
          isActive
            ? "text-white border-cyan-400 pl-2"
            : "text-white/70 hover:text-white border-transparent hover:border-cyan-400"
        } ${className}`}
        aria-current={isActive ? "page" : undefined}
      >
        {name}
      </Link>
    </motion.li>
  );
};

export default MobileMenuLink;
