interface WhiteOutlinePathProps {
  pathD: string;
  strokeWidth?: number;
  opacity?: number;
}

const WhiteOutlinePath = ({
  pathD,
  strokeWidth = 12,
  opacity = 0.95,
}: WhiteOutlinePathProps) => {
  return (
    <path
      d={pathD}
      fill="none"
      stroke="#ffffff"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      opacity={opacity}
      suppressHydrationWarning
    />
  );
};

export default WhiteOutlinePath;
