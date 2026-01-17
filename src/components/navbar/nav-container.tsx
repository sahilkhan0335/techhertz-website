"use client";
import { motion } from "framer-motion";
import { useScroll } from "./hooks/use-scroll";

interface NavContainerProps {
  children: React.ReactNode;
  className?: string;
}

const NavContainer = ({ children, className = "" }: NavContainerProps) => {
  const isScrolled = useScroll();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 w-full bg-white z-50 ${className}`}
    >
      <motion.div
        animate={{
          boxShadow: isScrolled
            ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.header>
  );
};

export default NavContainer;
