import Image from "next/image";

interface LogoImageProps {
  width?: number;
  height?: number;
  className?: string;
}

const LogoImage = ({ width = 40, height = 40, className = "" }: LogoImageProps) => {
  return (
    <Image
      src="/thlogo.png"
      alt="Tech Hertz Logo"
      width={width}
      height={height}
      className={`w-8 h-8 sm:w-10 sm:h-10 ${className}`}
      priority
    />
  );
};

export default LogoImage;
