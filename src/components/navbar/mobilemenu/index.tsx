"use client";
import { useState } from "react";
import type { NavLink } from "../navlinks/nav-links-list";
import MobileMenuButton from "./mobile-menu-button";
import MobileMenuDropdown from "./mobile-menu-dropdown";

interface MobileMenuProps {
  links: NavLink[];
  className?: string;
}

const MobileMenu = ({ links, className = "" }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`md:hidden relative ${className}`}>
      <MobileMenuButton isOpen={isOpen} onClick={handleToggle} />
      <MobileMenuDropdown isOpen={isOpen} links={links} onLinkClick={handleLinkClick} />
    </div>
  );
};

export default MobileMenu;
