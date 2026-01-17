"use client";

interface ShapeContainerProps {
  width: number;
  height: number;
  children: React.ReactNode;
}

const ShapeContainer = ({ width, height, children }: ShapeContainerProps) => {
  return (
    <div className="relative" style={{ width, height }}>
      {children}
    </div>
  );
};

export default ShapeContainer;
