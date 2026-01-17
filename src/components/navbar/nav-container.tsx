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
      className={`w-full transition-all duration-300 z-50 ${
        isScrolled
          ? "fixed top-0 left-0 bg-white shadow-lg"
          : "relative bg-white"
      } ${className}`}
    >
      {children}
    </header>
  );
};

export default NavContainer;
