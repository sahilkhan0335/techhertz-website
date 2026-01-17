"use client";
import { useMemo } from "react";
import type { ProcessNode } from "../constants/process-data";
import { calculateNodePositions, type NodePosition } from "./calculate-node-positions";

interface UseNodePositionsParams {
  nodes: ProcessNode[];
  width: number;
  height: number;
}

/**
 * Hook to calculate and update node positions
 */
export const useNodePositions = ({
  nodes,
  width,
  height,
}: UseNodePositionsParams): Map<number, NodePosition> => {
  const nodePositions = useMemo(() => {
    return calculateNodePositions(nodes, width, height);
  }, [nodes, width, height]);

  return nodePositions;
};
