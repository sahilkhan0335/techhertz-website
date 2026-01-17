import Link from "next/link";

interface NavLinkItemProps {
  name: string;
  path: string;
  className?: string;
}

const NavLinkItem = ({ name, path, className = "" }: NavLinkItemProps) => {
  return (
    <li>
      <Link
        href={path}
        className={`text-gray-700 hover:text-blue-500 transition-all duration-300 relative group font-medium ${className}`}
      >
        {name}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
};

export default NavLinkItem;
