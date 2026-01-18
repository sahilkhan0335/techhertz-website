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
  width = 2600,
  height = 3600,
  className = "",
}: Infinity3DShapeProps) => {
  const { pathD, pathLength } = useMemo(() => {
    const pathPoints = generateInfinityPathPoints(width, height, 0.38, 200);
    const d = pathPointsToSVGPath(pathPoints);
    const length = calculatePathLength(pathPoints);
    return { pathD: d, pathLength: length };
  }, [width, height]);

  return (
    <div
      className={`relative ${className}`}
      style={{ width: "100%", height: "100%", maxWidth: width, maxHeight: height }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
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
