"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ContactButtonProps {
  href?: string;
  className?: string;
  delay?: number;
}

const ContactButton = ({ 
  href = "/contact", 
  className = "",
  delay = 0.8 
}: ContactButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={`bg-transparent text-blue-500 border-2 border-blue-500 px-6 sm:px-8 md:px-10 py-3 rounded-md hover:bg-blue-50 transition-all duration-300 font-semibold hover:shadow-md text-base sm:text-lg h-12 flex items-center whitespace-nowrap ${className}`}
      >
        Contact Us
      </Link>
    </motion.div>
  );
};

export default ContactButton;
