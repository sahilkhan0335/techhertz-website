"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ContactButtonProps {
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

const ContactButton = ({
  className = "",
  href = "/contact",
  children = "Contact",
}: ContactButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={`bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default ContactButton;
