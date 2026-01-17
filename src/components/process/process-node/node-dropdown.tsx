"use client";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

interface NodeDropdownProps {
  isOpen: boolean;
  position: { top: number; left: number };
  title: string;
  content: string[];
}

const NodeDropdown = ({ isOpen, position, title, content }: NodeDropdownProps) => {
  if (!isOpen) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed w-[85vw] max-w-[320px] sm:max-w-90 md:max-w-100 bg-linear-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-4 sm:p-5 md:p-6"
      style={{
        top: position.top,
        left: position.left,
        transform: "translateY(-50%)",
        zIndex: 99999,
      }}
    >
      <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 border-b border-white/10 pb-2 sm:pb-3">
        {title}
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {content.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
            <span className="text-blue-400 mt-1 shrink-0">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>,
    document.body
  );
};

export default NodeDropdown;
