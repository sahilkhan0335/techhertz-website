/**
 * Calculate animation progress and return completed node IDs
 * Blue line starts at top center connection (90°), goes through left loop to bottom,
 * then right loop back to top
 * 
 * Animation path: 90° → 117° → 169° → 211° → 243° → 270° → 297° → 339° → 0° → 21° → 42° → 63° → 90°
 */
export const getCompletedNodes = (progress: number): Set<number> => {
  const completedNodes = new Set<number>();

  // Animation starts at 90° (top center connection)
  // Left loop: 90° to 270° (top to bottom) - first 50% of animation
  // Nodes at: 117° (7.5%), 169° (21.9%), 211° (33.6%), 243° (42.5%)
  if (progress > 0.075) completedNodes.add(1); // Node 1 at 117° (7.5% of animation)
  if (progress > 0.219) completedNodes.add(2); // Node 2 at 169° (21.9% of animation)
  if (progress > 0.336) completedNodes.add(3); // Node 3 at 211° (33.6% of animation)
  if (progress > 0.425) completedNodes.add(4); // Node 4 at 243° (42.5% of animation)

  // Right loop: 270° to 90° (bottom to top) - second 50% of animation
  // Nodes at: 297° (57.5%), 339° (69.2%), 21° (80.8%), 42° (86.7%), 63° (92.5%)
  if (progress > 0.575) completedNodes.add(5); // Node 5 at 297° (57.5% of animation)
  if (progress > 0.692) completedNodes.add(6); // Node 6 at 339° (69.2% of animation)
  if (progress > 0.808) completedNodes.add(7); // Node 7 at 21° (80.8% of animation)
  if (progress > 0.867) completedNodes.add(8); // Node 8 at 42° (86.7% of animation)
  if (progress > 0.925) completedNodes.add(9); // Node 9 at 63° (92.5% of animation)

  return completedNodes;
};

/**
 * Calculate current animation progress (0 to 1)
 */
export const calculateAnimationProgress = (cycleTime: number = 8000): number => {
  const now = Date.now();
  return (now % cycleTime) / cycleTime;
};
