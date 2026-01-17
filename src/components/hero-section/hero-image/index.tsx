"use client";
import { motion } from "framer-motion";
import Image3DPlaceholder from "./image-3d-placeholder";

interface HeroImageProps {
  className?: string;
}

const HeroImage = ({ className = "" }: HeroImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`flex items-start justify-center w-full ${className}`}
    >
      <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
        <Image3DPlaceholder />
      </div>
    </motion.div>
  );
};

export default HeroImage;
