"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { calculateDropdownPosition } from "./dropdown-position";
import NodeButton from "./node-button";
import NodeDropdown from "./node-dropdown";
import NodeIcon from "./node-icon";

interface ProcessNodeProps {
  id: number;
  icon: string;
  title: string;
  content: string[];
  position: { x: number; y: number };
  isCompleted?: boolean;
  className?: string;
}

const ProcessNode = ({
  icon,
  title,
  content,
  isCompleted = false,
  className = "",
}: ProcessNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

  // Update dropdown position when open
  useEffect(() => {
    if (isOpen && nodeRef.current) {
      const rect = nodeRef.current.getBoundingClientRect();
      const position = calculateDropdownPosition(rect);
      setDropdownPos(position);
    }
  }, [isOpen]);

  // Close when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("scroll", handleScroll, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen]);

  return (
    <div
      ref={nodeRef}
      className={`relative ${className}`}
      style={{
        zIndex: isOpen ? 99999 : 50,
      }}
    >
      <NodeButton isCompleted={isCompleted} onClick={() => setIsOpen(!isOpen)} title={title}>
        <NodeIcon icon={icon} />
      </NodeButton>

      <AnimatePresence>
        <NodeDropdown isOpen={isOpen} position={dropdownPos} title={title} content={content} />
      </AnimatePresence>
    </div>
  );
};

export default ProcessNode;
