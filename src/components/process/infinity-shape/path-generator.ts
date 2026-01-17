/**
 * Generate infinity path points using parametric equations
 * Lemniscate formula: x = a*cos(t)/(1+sin²(t)), y = b*sin(t)*cos(t)/(1+sin²(t))
 */
export interface PathPoint {
  x: number;
  y: number;
}

export const generateInfinityPathPoints = (
  width: number,
  height: number,
  scaleFactor: number = 0.38,
  steps: number = 200
): PathPoint[] => {
  const centerX = width / 2;
  const centerY = height / 2;
  const a = width * scaleFactor;
  const b = height * scaleFactor;

  const points: PathPoint[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const denominator = 1 + Math.sin(t) * Math.sin(t);
    const x = centerX + (a * Math.cos(t)) / denominator;
    const y = centerY + (b * Math.sin(t) * Math.cos(t)) / denominator;
    points.push({ x, y });
  }

  return points;
};

/**
 * Convert path points to SVG path string
 */
export const pathPointsToSVGPath = (points: PathPoint[]): string => {
  return (
    points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ") +
    " Z"
  );
};

/**
 * Calculate total path length from points
 */
export const calculatePathLength = (points: PathPoint[]): number => {
  return points.reduce((total, point, index) => {
    if (index === 0) return 0;
    const prev = points[index - 1];
    const dx = point.x - prev.x;
    const dy = point.y - prev.y;
    return total + Math.sqrt(dx * dx + dy * dy);
  }, 0);
};
