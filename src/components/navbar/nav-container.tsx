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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[rgba(10,10,14,0.72)] backdrop-blur-xl ${className}`}
    >
      <motion.div
        animate={{
          boxShadow: isScrolled
            ? "0 18px 40px rgba(0,0,0,0.35)"
            : "0 0 0 rgba(0,0,0,0)",
          borderColor: isScrolled ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.3 }}
        className="border-b border-white/5"
      >
        {children}
      </motion.div>
    </motion.header>
  );
};

export default NavContainer;
