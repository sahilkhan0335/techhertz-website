"use client";
import { motion } from "framer-motion";
import ContactButton from "../navlinks/contact-button";

interface MobileMenuContactProps {
  className?: string;
}

const MobileMenuContact = ({ className = "" }: MobileMenuContactProps) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={`pt-2 border-t ${className}`}
    >
      <ContactButton className="w-full text-center" />
    </motion.li>
  );
};

export default MobileMenuContact;
