"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface LogoLinkProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const LogoLink = ({ href = "/", className = "", children }: LogoLinkProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href} className={`flex items-center gap-2 ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
};

export default LogoLink;
