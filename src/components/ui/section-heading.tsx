"use client";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ label, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-4 ${alignment}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/60">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base sm:text-lg text-white/60">
          {description}
        </p>
      )}
    </motion.div>
  );
}
