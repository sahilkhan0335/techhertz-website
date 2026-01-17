"use client";
import { useEffect, useState } from "react";
import { calculateAnimationProgress, getCompletedNodes } from "./animation-tracker";

/**
 * Hook to track which nodes are completed based on animation progress
 */
export const useCompletedNodes = (): Set<number> => {
  const [completedNodes, setCompletedNodes] = useState<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const progress = calculateAnimationProgress(8000);
      const newCompleted = getCompletedNodes(progress);
      setCompletedNodes(newCompleted);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return completedNodes;
};
