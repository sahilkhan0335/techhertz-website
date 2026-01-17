"use client";
import HeroButtons from "./buttons";
import HeroContent from "./hero-content";
import HeroImage from "./hero-image";

const HeroSection = () => {
  return (
    <section className="w-full bg-white min-h-screen flex items-start pt-20 xs:pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start min-h-[calc(100vh-8rem)] py-6 sm:py-8 md:py-10">
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
