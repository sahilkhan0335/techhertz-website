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
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      
      // Responsive width based on screen size
      let width: number;
      if (vw < 640) width = vw * 0.95;        // Mobile: 95% width
      else if (vw < 768) width = vw * 0.92;   // Tablet portrait: 92%
      else if (vw < 1024) width = vw * 0.88;  // Tablet landscape: 88%
      else if (vw < 1536) width = vw * 0.85;  // Desktop: 85%
      else width = Math.min(vw * 0.82, 2200); // Large screens: max 2200px
      
      // Responsive height based on aspect ratio
      const height = vh < 700 ? vh * 0.85 : vh * 0.95;
      
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return dimensions;
};
