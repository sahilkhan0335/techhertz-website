interface GradientOverlayProps {
  className?: string;
}

const GradientOverlay = ({ className = "" }: GradientOverlayProps) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 80%)`,
      }}
    />
  );
};

export default GradientOverlay;
