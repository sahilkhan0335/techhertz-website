"use client";

interface ShapeContainerProps {
  width: number;
  height: number;
  children: React.ReactNode;
}

const ShapeContainer = ({ width, height, children }: ShapeContainerProps) => {
  return (
    <div 
      className="relative mx-auto overflow-visible" 
      style={{ 
        width: '100%',
        maxWidth: width,
        height: '100%',
        maxHeight: height,
        aspectRatio: `${width} / ${height}`
      }}
    >
      {children}
    </div>
  );
};

export default ShapeContainer;
