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
  const [dimensions, setDimensions] = useState({ width: 2600, height: 3600 });

  useEffect(() => {
    const updateDimensions = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      
      // Responsive width based on screen size
      let width: number;
      let height: number;
      
      if (vw < 640) {
        // Mobile: smaller and contained
        width = Math.min(vw * 0.90, 600);
        height = Math.min(vh * 0.75, 700);
      } else if (vw < 768) {
        // Tablet portrait
        width = Math.min(vw * 0.85, 900);
        height = Math.min(vh * 0.80, 900);
      } else if (vw < 1024) {
        // Tablet landscape
        width = Math.min(vw * 0.80, 1200);
        height = Math.min(vh * 0.85, 1200);
      } else if (vw < 1536) {
        // Desktop (restore generous sizing)
        width = Math.min(vw * 0.90, 2200);
        height = Math.min(vh * 1.10, 2600);
      } else {
        // Large screens
        width = Math.min(vw * 0.92, 2600);
        height = Math.min(vh * 1.18, 4200);
      }
      
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return dimensions;
};
