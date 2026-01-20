"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinkText from "./nav-link-text";
import NavLinkUnderline from "./nav-link-underline";

interface NavLinkItemProps {
  name: string;
  path: string;
  index?: number;
  className?: string;
}

const NavLinkItem = ({ name, path, index = 0, className = "" }: NavLinkItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
    >
      <Link
        href={path}
        className={`relative group px-2 py-1 ${className}`}
        aria-current={isActive ? "page" : undefined}
      >
        <span className="relative inline-block">
          <NavLinkText name={name} active={isActive} />
          <NavLinkUnderline active={isActive} />
        </span>
        <span className="pointer-events-none absolute inset-x-1 -bottom-2 h-6 rounded-full bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
    </motion.li>
  );
};

export default NavLinkItem;
