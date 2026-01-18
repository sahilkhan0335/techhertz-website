"use client";
import Infinity3DShape from "./infinity-3d-shape";

interface InfinityShapeProps {
  className?: string;
  width?: number;
  height?: number;
}

const InfinityShape = ({ className = "", width, height }: InfinityShapeProps) => {
  return (
    <div className={`absolute inset-0 flex items-center justify-center overflow-visible ${className}`}>
      <div className="w-full h-full flex items-center justify-center">
        <Infinity3DShape width={width} height={height} />
      </div>
    </div>
  );
};

export default InfinityShape;
