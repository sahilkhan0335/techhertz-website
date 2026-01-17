"use client";
import { useEffect, useState } from "react";

interface UseDimensionsResult {
  width: number;
  height: number;
}

/**
 * Hook to track and update container dimensions based on window size
 */
export const useDimensions = (): UseDimensionsResult => {
  const [dimensions, setDimensions] = useState({ width: 2000, height: 1800 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = Math.min(window.innerWidth * 0.92, 2200);
      const height = window.innerHeight * 1.00;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return dimensions;
};
