import { NAV_LINKS } from "../constants/nav-constants";
import ContactButton from "./contact-button";
import NavLinksList from "./nav-links-list";

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className = "" }: NavLinksProps) => {
  return (
    <div className={`hidden md:flex items-center gap-8 ${className}`}>
      <NavLinksList links={NAV_LINKS} />
      <ContactButton />
    </div>
  );
};

export default NavLinks;
