"use client";

interface NodeContainerProps {
  position: { x: number; y: number };
  children: React.ReactNode;
}

const NodeContainer = ({ position, children }: NodeContainerProps) => {
  return (
    <div
      className="absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 50,
      }}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
};

export default NodeContainer;
