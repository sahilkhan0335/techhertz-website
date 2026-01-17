export interface ProcessNode {
  id: number;
  title: string;
  icon: string; // SVG path or icon identifier
  position: "left" | "right";
  content: {
    title: string;
    items: string[];
  };
}

export const PROCESS_NODES: ProcessNode[] = [
  {
    id: 1,
    title: "Business Understanding & Discovery",
    icon: "M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z",
    position: "left",
    content: {
      title: "Business Understanding & Discovery",
      items: [
        "Business goals aur vision samajhna",
        "Target audience & user needs identify karna",
        "Challenges aur opportunities analyze karna",
        "Project scope, timeline & expectations define karna",
      ],
    },
  },
  {
    id: 2,
    title: "Research & UX Strategy",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    position: "left",
    content: {
      title: "Research & UX Strategy",
      items: [
        "Market & competitor research",
        "User behavior aur pain points study karna",
        "UX goals & success metrics define karna",
        "Right solution & approach decide karna",
      ],
    },
  },
  {
    id: 3,
    title: "Information Architecture & Wireframing",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    position: "left",
    content: {
      title: "Information Architecture & Wireframing",
      items: [
        "Content structure & navigation plan karna",
        "User flows & journeys define karna",
        "Low-fidelity wireframes create karna",
        "Usability & clarity ensure karna",
      ],
    },
  },
  {
    id: 4,
    title: "Visual UI Design",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    position: "left",
    content: {
      title: "Visual UI Design",
      items: [
        "Brand-aligned visual language design karna",
        "Clean, modern & consistent UI create karna",
        "Color, typography & components finalize karna",
        "Responsive design for all devices",
      ],
    },
  },
  {
    id: 5,
    title: "Development & Integration",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    position: "right",
    content: {
      title: "Development & Integration",
      items: [
        "Scalable & secure code development",
        "Frontend & backend integration",
        "Third-party tools & APIs integrate karna",
        "Performance optimization",
      ],
    },
  },
  {
    id: 6,
    title: "Testing & Quality Assurance",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    position: "right",
    content: {
      title: "Testing & Quality Assurance",
      items: [
        "Functional & usability testing",
        "Cross-browser & device testing",
        "Performance & security checks",
        "Bug fixing & final validation",
      ],
    },
  },
  {
    id: 7,
    title: "Deployment & Launch",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    position: "right",
    content: {
      title: "Deployment & Launch",
      items: [
        "Live server setup & configuration",
        "Final checks before go-live",
        "Smooth deployment process",
        "Post-launch monitoring",
      ],
    },
  },
  {
    id: 8,
    title: "Support",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    position: "right",
    content: {
      title: "Support",
      items: [
        "Technical support & issue resolution",
        "Regular updates & maintenance",
        "Performance monitoring",
        "Client assistance & guidance",
      ],
    },
  },
  {
    id: 9,
    title: "Optimization & Scaling",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    position: "right",
    content: {
      title: "Optimization & Scaling",
      items: [
        "User feedback analysis",
        "Performance & UX improvements",
        "Feature enhancements",
        "Scaling for future growth",
      ],
    },
  },
];
