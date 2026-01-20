interface LogoTextProps {
  className?: string;
}

const LogoText = ({ className = "" }: LogoTextProps) => {
  return (
    <span className={`font-semibold text-base sm:text-lg tracking-wide hover:opacity-90 transition-opacity ${className}`}>
      <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Tech</span>
      <span className="text-white">Hertz</span>
    </span>
  );
};

export default LogoText;
