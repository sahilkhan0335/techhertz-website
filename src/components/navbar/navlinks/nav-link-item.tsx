"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import NavLinkText from "./nav-link-text";
import NavLinkUnderline from "./nav-link-underline";

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
        <span className="relative inline-block">
          <NavLinkText name={name} />
          <NavLinkUnderline />
        </span>
      </Link>
    </motion.li>
  );
};

export default NavLinkItem;
