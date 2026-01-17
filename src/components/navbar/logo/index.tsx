"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import LogoImage from "./logo-image";
import LogoText from "./logo-text";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className={`flex items-center gap-2 ${className}`}>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <LogoImage />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <LogoText />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Logo;
