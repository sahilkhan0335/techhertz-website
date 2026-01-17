"use client";
import HeroButtons from "./buttons";
import HeroContent from "./hero-content";
import HeroImage from "./hero-image";

const HeroSection = () => {
  return (
    <section className="w-full bg-white min-h-screen flex items-start pt-24 sm:pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[calc(100vh-8rem)] py-8">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-start space-y-6">
            <HeroContent />
            <HeroButtons />
          </div>

          {/* Right Side - 3D Image */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
