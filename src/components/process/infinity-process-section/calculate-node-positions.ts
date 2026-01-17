import type { ProcessNode } from "../constants/process-data";

export interface NodePosition {
  x: number;
  y: number;
}

/**
 * Calculate positions for nodes along the infinity path
 * Using parametric equations for infinity symbol (lemniscate)
 */
export const calculateNodePositions = (
  nodes: ProcessNode[],
  width: number,
  height: number
): Map<number, NodePosition> => {
  const positions = new Map<number, NodePosition>();
  const centerX = width / 2;
  const centerY = height / 2;
  const a = width * 0.38;
  const b = height * 0.38;

  const leftNodes = nodes.filter((n) => n.position === "left");
  const rightNodes = nodes.filter((n) => n.position === "right");

  // Calculate positions for left loop (4 nodes) - avoiding center connection points
  leftNodes.forEach((node, index) => {
    // Left loop: avoid top center (π/2 = 90°) and bottom center (3π/2 = 270°)
    // Start well after top center and end well before bottom center
    const startAngle = Math.PI * 0.65; // ~117 degrees (upper-left, away from top center)
    const endAngle = Math.PI * 1.35; // ~243 degrees (lower-left, away from bottom center)
    const t = startAngle + (index * (endAngle - startAngle)) / Math.max(1, leftNodes.length - 1);

    const denominator = 1 + Math.sin(t) * Math.sin(t);
    const x = centerX + (a * Math.cos(t)) / denominator;
    const y = centerY + (b * Math.sin(t) * Math.cos(t)) / denominator;

    positions.set(node.id, {
      x: Math.max(0, Math.min(100, (x / width) * 100)),
      y: Math.max(0, Math.min(100, (y / height) * 100)),
    });
  });

  // Calculate positions for right loop (5 nodes) - avoiding center connection points
  rightNodes.forEach((node, index) => {
    // Right loop: avoid bottom center (3π/2 = 270°) and top center (π/2 = 90°)
    // Start well after bottom center and end well before top center (wrapping around)
    const startAngle = Math.PI * 1.65; // ~297 degrees (lower-right, away from bottom center)
    const endAngle = Math.PI * 2.35; // ~423 degrees = 63 degrees (upper-right, away from top center)
    const t = startAngle + (index * (endAngle - startAngle)) / Math.max(1, rightNodes.length - 1);

    const denominator = 1 + Math.sin(t) * Math.sin(t);
    const x = centerX + (a * Math.cos(t)) / denominator;
    const y = centerY + (b * Math.sin(t) * Math.cos(t)) / denominator;

    positions.set(node.id, {
      x: Math.max(0, Math.min(100, (x / width) * 100)),
      y: Math.max(0, Math.min(100, (y / height) * 100)),
    });
  });

  return positions;
};
