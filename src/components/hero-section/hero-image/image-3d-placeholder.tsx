"use client";
import { motion } from "framer-motion";

interface Image3DPlaceholderProps {
  className?: string;
}

const Image3DPlaceholder = ({ className = "" }: Image3DPlaceholderProps) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* 3D Card Effect Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.02, rotateY: 5 }}
        className="w-full h-full perspective-1000"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-2xl shadow-2xl relative overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
            animate={{
              y: [0, 30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl"
            animate={{
              y: [0, -40, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Central icon/visual element */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.svg
              className="w-48 h-48 sm:w-64 sm:h-64 text-white/30"
              fill="currentColor"
              viewBox="0 0 24 24"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </motion.svg>
          </motion.div>

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Decorative floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-300 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Image3DPlaceholder;
