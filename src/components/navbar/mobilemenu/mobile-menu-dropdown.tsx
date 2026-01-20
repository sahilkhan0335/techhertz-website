"use client";
import { AnimatePresence, motion } from "framer-motion";
import type { NavLink } from "../navlinks/nav-links-list";
import MobileMenuContact from "./mobile-menu-contact";
import MobileMenuLink from "./mobile-menu-link";
import MobileMenuList from "./mobile-menu-list";

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
          className={`md:hidden fixed left-0 right-0 bg-[rgba(10,10,14,0.92)] backdrop-blur-xl shadow-2xl border-t border-white/10 overflow-hidden z-40 top-20 ${className}`}
        >
          <MobileMenuList>
            {links.map((link, index) => (
              <MobileMenuLink
                key={link.name}
                name={link.name}
                path={link.path}
                index={index}
                onClick={onLinkClick}
              />
            ))}
            <MobileMenuContact />
          </MobileMenuList>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuDropdown;
