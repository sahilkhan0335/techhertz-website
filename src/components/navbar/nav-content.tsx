interface NavContentProps {
  children: React.ReactNode;
  className?: string;
}

const NavContent = ({ children, className = "" }: NavContentProps) => {
  return (
    <nav className={`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ${className}`}>
      {children}
    </nav>
  );
};

export default NavContent;
