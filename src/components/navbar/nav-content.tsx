interface NavContentProps {
  children: React.ReactNode;
  className?: string;
}

const NavContent = ({ children, className = "" }: NavContentProps) => {
  return (
    <nav className={`max-w-7xl mx-auto px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between w-full ${className}`}>
      {children}
    </nav>
  );
};

export default NavContent;
