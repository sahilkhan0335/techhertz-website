"use client";
import HeroTextContent from "./hero-content/index";

interface HeroContentProps {
  className?: string;
}

const HeroContent = ({ className = "" }: HeroContentProps) => {
  return <HeroTextContent className={className} />;
};

export default HeroContent;
