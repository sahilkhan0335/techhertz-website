"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Business Understanding & Discovery",
    description: "Business goals aur vision samajhna\nTarget audience & user needs identify karna\nChallenges aur opportunities analyze karna\nProject scope, timeline & expectations define karna",
    accent: "text-blue-600",
    bgColor: "#E7F1FF",
    borderColor: "#D6E7FF",
    icon: (
      <svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <circle cx="21" cy="15" r="7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="19" y="22" width="4" height="6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Research & UX Strategy",
    description: "Market & competitor research\nUser behavior aur pain points study karna\nUX goals & success metrics define karna\nRight solution & approach decide karna",
    accent: "text-purple-600",
    bgColor: "#F1E9FF",
    borderColor: "#E6D9FF",
    icon: (
      <svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="23" y1="23" x2="31" y2="31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Information Architecture & Wireframing",
    description: "Content structure & navigation plan karna\nUser flows & journeys define karna\nLow-fidelity wireframes create karna\nUsability & clarity ensure karna",
    accent: "text-teal-600",
    borderColor: "#C7A8D6",
    bgColor: "#FAF5FF",
    icon: (
      <svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <rect x="9" y="24" width="12" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="15" y="18" width="12" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="21" y="12" width="12" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Visual UI Design",
    description: "Brand-aligned visual language design karna\nClean, modern & consistent UI create karna\nColor, typography & components finalize karna\nResponsive design for all devices",
    accent: "text-indigo-600",
    borderColor: "#C7A8D6",
    bgColor: "#FAF5FF",
    icon: (
      <svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M 10 20 Q 10 12 17 10 Q 24 10 28 14 Q 32 18 32 24 Q 32 30 28 34 Q 24 36 17 36 Q 10 36 10 28 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="20" r="2" fill="currentColor"/>
        <circle cx="21" cy="24" r="2" fill="currentColor"/>
        <circle cx="26" cy="21" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Development & Integration",
    description: "Scalable & secure code development\nFrontend & backend integration\nThird-party tools & APIs integrate karna\nPerformance optimization",
    accent: "text-green-600",
    bgColor: "#F0FDF4",
    borderColor: "#E3F7E9",
    icon: (
      <svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M 17 16 L 13 21 L 17 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 25 16 L 29 21 L 25 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Testing & Quality Assurance",
    description: "Functional & usability testing\nCross-browser & device testing\nPerformance & security checks\nBug fixing & final validation",
    accent: "text-orange-600",
    bgColor: "#FFF4E5",
    borderColor: "#FFE7D1",
    icon: (
      <svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <circle cx="21" cy="21" r="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 16 21 L 19 24 L 27 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Deployment & Launch",
    description: "Live server setup & configuration\nFinal checks before go-live\nSmooth deployment process\nPost-launch monitoring",
    accent: "text-rose-600",
    bgColor: "#FFEFF3",
    borderColor: "#FFDCE5",
    icon: (
      <svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M 21 6 L 25 18 L 21 22 L 17 18 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 17 18 L 14 30 C 13 32 14 34 16 34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 25 18 L 28 30 C 29 32 28 34 26 34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Support",
    description: "Technical support & issue resolution\nRegular updates & maintenance\nPerformance monitoring\nClient assistance & guidance",
    accent: "text-cyan-600",
    bgColor: "#E9F8FF",
    borderColor: "#D6F1FF",
    icon: (
      <svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <circle cx="13" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 7 17 Q 7 16 13 16 Q 19 16 19 17 L 19 27 Q 19 29 17 29 L 9 29 Q 7 29 7 27 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="29" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 23 17 Q 23 16 29 16 Q 35 16 35 17 L 35 27 Q 35 29 33 29 L 25 29 Q 23 29 23 27 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Optimization & Scaling",
    description: "User feedback analysis\nPerformance & UX improvements\nFeature enhancements\nScaling for future growth",
    accent: "text-amber-600",
    bgColor: "#FFF8E6",
    borderColor: "#FFEEC4",
    icon: (
      <svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <polyline points="9,30 15,24 21,28 31,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 27 14 L 31 10 L 35 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const WorkflowGrid = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 900"
          fill="none"
          aria-hidden
        >
          <path
            d="M120 120 C300 40, 420 40, 600 120 C780 200, 900 200, 1080 120"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="2"
          />
          <path
            d="M120 420 C300 340, 420 340, 600 420 C780 500, 900 500, 1080 420"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="2"
          />
          <path
            d="M120 720 C300 640, 420 640, 600 720 C780 800, 900 800, 1080 720"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
            className="relative h-full rounded-2xl border-2 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
            style={{ backgroundColor: step.bgColor, borderColor: step.borderColor }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <span
              className={`absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-xs font-semibold ${step.accent}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="p-6 sm:p-7 h-full flex flex-col gap-3">
              <div className={`h-10 w-10 rounded-xl bg-white border border-black/5 flex items-center justify-center ${step.accent}`}>
                {step.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold leading-snug" style={{ color: "#363636" }}>
                {step.title}
              </h3>
              <ul className="text-[12px] leading-relaxed list-disc pl-4 space-y-1" style={{ color: "#6C7E9" }}>
                {step.description.split("\n").map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowGrid;
