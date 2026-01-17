import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full bg-white min-h-screen flex items-start pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-start">
            <div>
              
              <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mt-2 leading-[62px]">
                Transform your <br/> business with digital <br/> solutions
              </h1>
              <p className="text-gray-600 text-[20px] mt-[20px] leading-relaxed">
                We are a team of passionate developers and designers dedicated to transforming 
                your ideas into innovative digital solutions. 
              </p>
            </div>

            <div className="pt-[36px] flex gap-4 items-center">
              <Link
                href="/about"
                className="bg-blue-500 text-white px-10 py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold hover:shadow-lg hover:scale-105 text-lg flex items-center gap-2 h-12"
              >
                Know More <span className="text-3xl leading-none">→</span>
              </Link>
              <Link
                href="/contact"
                className="bg-blue-500 text-white px-10 py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold hover:shadow-lg hover:scale-105 text-lg h-12 flex items-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side - Image/Animation */}
          <div className="flex items-start justify-center">
            <div className="w-full h-96 bg-linear-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for image or 3D animation */}
              <div className="text-center">
                <svg
                  className="w-48 h-48 mx-auto text-blue-300 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                <p className="text-gray-400 mt-4 font-semibold">
                  Your image or 3D animation goes here
                </p>
              </div>

              {/* Decorative circles for animation appeal */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
