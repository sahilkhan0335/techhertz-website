"use client";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MobileMenuButton = ({ isOpen, onClick, className = "" }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group ${className}`}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      <span
        className={`w-6 h-0.5 bg-gray-700 group-hover:bg-blue-500 transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-gray-700 group-hover:bg-blue-500 transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-gray-700 group-hover:bg-blue-500 transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
};

export default MobileMenuButton;
