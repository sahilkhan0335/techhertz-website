"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface BlueLineAnimationProps {
  width: number;
  height: number;
  scaleFactor?: number;
}

const BlueLineAnimation = ({
  width,
  height,
  scaleFactor = 0.38,
}: BlueLineAnimationProps) => {
  const [progress, setProgress] = useState(0);

  // Sync with Date.now() timeline like node completion animation
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const cycleTime = 8000;
      const currentProgress = (now % cycleTime) / cycleTime;
      setProgress(currentProgress);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  const { animationPath, pathLength } = useMemo(() => {
    const centerX = width / 2;
    const centerY = height / 2;
    const a = width * scaleFactor;
    const b = height * scaleFactor;

    // Generate path starting from center connection (90°/π/2)
    // Goes through left loop, then right loop, back to center
    const generateAnimationPath = () => {
      const points: { x: number; y: number }[] = [];
      
      // Start angle: π/2 (90°, top center connection point)
      // End angle: 5π/2 (450° = 90°, complete loop back to start)
      const totalSteps = 200;
      
      for (let i = 0; i <= totalSteps; i++) {
        // t goes from π/2 to 5π/2 (90° to 450°)
        const t = (Math.PI / 2) + (i / totalSteps) * (2 * Math.PI);
        const denominator = 1 + Math.sin(t) * Math.sin(t);
        const x = centerX + (a * Math.cos(t)) / denominator;
        const y = centerY + (b * Math.sin(t) * Math.cos(t)) / denominator;
        points.push({ x, y });
      }

      return points;
    };

    const pathPoints = generateAnimationPath();
    const d = pathPoints
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ");

    const length = pathPoints.reduce((total, point, index) => {
      if (index === 0) return 0;
      const prev = pathPoints[index - 1];
      const dx = point.x - prev.x;
      const dy = point.y - prev.y;
      return total + Math.sqrt(dx * dx + dy * dy);
    }, 0);

    return { animationPath: d, pathLength: length };
  }, [width, height, scaleFactor]);

  if (!animationPath) return null;

  // Calculate strokeDashoffset based on progress (same timeline as node completion)
  const currentOffset = pathLength - pathLength * progress;

  return (
    <motion.path
      d={animationPath}
      fill="none"
      stroke="#3b82f6"
      strokeWidth={8}
      strokeLinecap="round"
      strokeDasharray={pathLength}
      strokeDashoffset={currentOffset}
      suppressHydrationWarning
    />
  );
};

export default BlueLineAnimation;
