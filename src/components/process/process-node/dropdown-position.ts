/**
 * Calculate dropdown position with viewport boundary checking
 */
export interface DropdownPosition {
  top: number;
  left: number;
}

export const calculateDropdownPosition = (
  nodeRect: DOMRect,
  dropdownWidth: number = 320
): DropdownPosition => {
  const viewportWidth = window.innerWidth;
  const wouldOverflowRight = nodeRect.right + dropdownWidth + 24 > viewportWidth;

  if (wouldOverflowRight) {
    // Position on left side of node
    return {
      top: nodeRect.top + nodeRect.height / 2,
      left: nodeRect.left - dropdownWidth - 12,
    };
  } else {
    // Position on right side of node
    return {
      top: nodeRect.top + nodeRect.height / 2,
      left: nodeRect.right + 12,
    };
  }
};
