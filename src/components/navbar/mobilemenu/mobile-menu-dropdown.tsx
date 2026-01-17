"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ContactButton from "../navlinks/contact-button";
import type { NavLink } from "../navlinks/nav-links-list";

interface MobileMenuDropdownProps {
  isOpen: boolean;
  links: NavLink[];
  onLinkClick?: () => void;
  className?: string;
}

const MobileMenuDropdown = ({
  isOpen,
  links,
  onLinkClick,
  className = "",
}: MobileMenuDropdownProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden fixed left-0 right-0 bg-white shadow-lg border-t overflow-hidden z-40 top-[73px] ${className}`}
        >
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col px-6 py-4 gap-4"
          >
            {links.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={link.path}
                  onClick={onLinkClick}
                  className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-medium py-2 block hover:pl-2 border-l-2 border-transparent hover:border-blue-500"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-2 border-t"
            >
              <ContactButton className="w-full text-center" />
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuDropdown;
