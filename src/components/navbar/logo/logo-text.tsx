interface LogoTextProps {
  className?: string;
}

const LogoText = ({ className = "" }: LogoTextProps) => {
  return (
    <span className={`font-bold text-lg hover:opacity-80 transition-opacity ${className}`}>
      <span className="text-blue-500">Tech</span> Hertz
    </span>
  );
};

export default LogoText;
