"use client";
import { NAV_LINKS } from "./constants/nav-constants";
import Logo from "./logo";
import MobileMenu from "./mobilemenu";
import NavContainer from "./nav-container";
import NavContent from "./nav-content";
import NavLinks from "./navlinks";

const Navbar = () => {
  return (
    <NavContainer>
      <NavContent>
        <Logo />
        <NavLinks />
        <MobileMenu links={NAV_LINKS} />
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
