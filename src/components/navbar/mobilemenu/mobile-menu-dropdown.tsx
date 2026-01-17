"use client";
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
  className = "" 
}: MobileMenuDropdownProps) => {
  return (
    <div
      className={`md:hidden fixed left-0 right-0 bg-white shadow-lg border-t transition-all duration-300 overflow-hidden z-40 ${
        isOpen ? "max-h-96 opacity-100 visible top-[73px]" : "max-h-0 opacity-0 invisible pointer-events-none top-[73px]"
      } ${className}`}
    >
      <ul className="flex flex-col px-6 py-4 gap-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              onClick={onLinkClick}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-medium py-2 block hover:pl-2 border-l-2 border-transparent hover:border-blue-500"
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li className="pt-2 border-t">
          <ContactButton className="w-full text-center" />
        </li>
      </ul>
    </div>
  );
};

export default MobileMenuDropdown;
