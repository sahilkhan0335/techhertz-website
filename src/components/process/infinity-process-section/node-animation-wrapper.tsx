"use client";
import { motion } from "framer-motion";

interface NodeAnimationWrapperProps {
  index: number;
  children: React.ReactNode;
}

const NodeAnimationWrapper = ({ index, children }: NodeAnimationWrapperProps) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200
      }}
    >
      {children}
    </motion.div>
  );
};

export default NodeAnimationWrapper;
