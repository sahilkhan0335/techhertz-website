interface NavContentProps {
  children: React.ReactNode;
  className?: string;
}

const NavContent = ({ children, className = "" }: NavContentProps) => {
  return (
    <nav className={`max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between w-full ${className}`}>
      {children}
    </nav>
  );
};

export default NavContent;
