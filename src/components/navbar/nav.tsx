"use client";
import { NAV_LINKS } from "./constants/nav-constants";
import Logo from "./logo";
import MobileMenu from "./mobilemenu";
import NavContainer from "./nav-container";
import NavContent from "./nav-content";
import ContactButton from "./navlinks/contact-button";
import NavLinksList from "./navlinks/nav-links-list";

const Navbar = () => {
  return (
    <NavContainer>
      <NavContent className="gap-6">
        <Logo />

        <div className="flex-1 flex justify-center">
          <NavLinksList links={NAV_LINKS} />
        </div>

        <div className="hidden md:block">
          <ContactButton />
        </div>

        <MobileMenu links={NAV_LINKS} className="md:hidden" />
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
