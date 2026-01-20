"use client";
import { triggerContactModal } from "@/components/contact/contact-modal";
import { motion } from "framer-motion";

interface ContactButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactButton = ({
  className = "",
  children = "Contact",
}: ContactButtonProps) => {
  const handleClick = () => {
    triggerContactModal();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        type="button"
        onClick={handleClick}
        className={`relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      >
        <span className="absolute inset-0 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600" />
        <span className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)]" />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    </motion.div>
  );
};

export default ContactButton;
