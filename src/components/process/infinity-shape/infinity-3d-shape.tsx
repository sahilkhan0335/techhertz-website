"use client";
import { useMemo } from "react";
import BlueLineAnimation from "./blue-line-animation";
import GradientOverlay from "./gradient-overlay";
import {
  calculatePathLength,
  generateInfinityPathPoints,
  pathPointsToSVGPath,
} from "./path-generator";
import WhiteOutlinePath from "./white-outline-path";

interface Infinity3DShapeProps {
  width?: number;
  height?: number;
  className?: string;
}

const Infinity3DShape = ({
  width = 2000,
  height = 1800,
  className = "",
}: Infinity3DShapeProps) => {
  const { pathD, pathLength } = useMemo(() => {
    const pathPoints = generateInfinityPathPoints(width, height, 0.38, 200);
    const d = pathPointsToSVGPath(pathPoints);
    const length = calculatePathLength(pathPoints);
    return { pathD: d, pathLength: length };
  }, [width, height]);

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-0"
        suppressHydrationWarning
      >
        <WhiteOutlinePath pathD={pathD} />
        <BlueLineAnimation width={width} height={height} scaleFactor={0.38} />
      </svg>

      <GradientOverlay />
    </div>
  );
};

export default Infinity3DShape;
