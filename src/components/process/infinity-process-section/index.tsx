"use client";
import { motion } from "framer-motion";
import { PROCESS_NODES } from "../constants/process-data";
import InfinityShape from "../infinity-shape";
import ProcessNode from "../process-node";
import NodeAnimationWrapper from "./node-animation-wrapper";
import NodeContainer from "./node-container";
import ShapeContainer from "./shape-container";
import { useCompletedNodes } from "./use-completed-nodes";
import { useDimensions } from "./use-dimensions";
import { useNodePositions } from "./use-node-positions";

interface InfinityProcessSectionProps {
  className?: string;
}

const InfinityProcessSection = ({
  className = "",
}: InfinityProcessSectionProps) => {
  const dimensions = useDimensions();
  const completedNodes = useCompletedNodes();
  const nodePositions = useNodePositions({
    nodes: PROCESS_NODES,
    width: dimensions.width,
    height: dimensions.height,
  });

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      className={`relative w-full h-full flex items-center justify-center overflow-visible px-4 sm:px-6 md:px-8 ${className}`}
    >
      <ShapeContainer width={dimensions.width} height={dimensions.height}>
        <InfinityShape width={dimensions.width} height={dimensions.height} />

        {PROCESS_NODES.map((node, index) => {
          const position = nodePositions.get(node.id);
          if (!position) return null;

          return (
            <NodeContainer key={node.id} position={position}>
              <NodeAnimationWrapper index={index}>
                <ProcessNode
                  id={node.id}
                  icon={node.icon}
                  title={node.title}
                  content={node.content.items}
                  position={position}
                  isCompleted={completedNodes.has(node.id)}
                />
              </NodeAnimationWrapper>
            </NodeContainer>
          );
        })}
      </ShapeContainer>
    </motion.section>
  );
};

export default InfinityProcessSection;
