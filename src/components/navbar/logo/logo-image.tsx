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
      className={className}
      priority
    />
  );
};

export default LogoImage;
