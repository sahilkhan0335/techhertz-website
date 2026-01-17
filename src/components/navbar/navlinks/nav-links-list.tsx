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
      {links.map((link) => (
        <NavLinkItem key={link.name} name={link.name} path={link.path} />
      ))}
    </ul>
  );
};

export default NavLinksList;
