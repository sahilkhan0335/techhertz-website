"use client";
import NavLinkItem from "./nav-link-item";

export interface NavLink {
  name: string;
  path: string;
}

interface NavLinksListProps {
  links: NavLink[];
  className?: string;
}

const NavLinksList = ({ links, className = "" }: NavLinksListProps) => {
  return (
    <ul className={`hidden md:flex items-center gap-4 ${className}`}>
      {links.map((link, index) => (
        <NavLinkItem
          key={link.name}
          name={link.name}
          path={link.path}
          index={index}
        />
      ))}
    </ul>
  );
};

export default NavLinksList;
