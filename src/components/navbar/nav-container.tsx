"use client";
import { useScroll } from "./hooks/use-scroll";

interface NavContainerProps {
  children: React.ReactNode;
  className?: string;
}

const NavContainer = ({ children, className = "" }: NavContainerProps) => {
  const isScrolled = useScroll();

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-200 ${
        isScrolled ? "shadow-lg" : "shadow-none"
      } ${className}`}
    >
      {children}
    </header>
  );
};

export default NavContainer;
