import Link from "next/link";
import LogoImage from "./logo-image";
import LogoText from "./logo-text";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center gap-2 hover:scale-105 transition-transform duration-200 ${className}`}>
      <LogoImage />
      <LogoText />
    </Link>
  );
};

export default Logo;
