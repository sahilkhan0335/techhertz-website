import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-blue-500 text-sm font-semibold uppercase tracking-wide">
                Welcome to Tech Hertz
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                Keep Growing with Us
              </h1>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                We are a team of passionate developers and designers dedicated to transforming 
                your ideas into innovative digital solutions. Let&apos;s build something extraordinary together.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300 font-semibold"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* Right Side - Image/Animation */}
          <div className="flex items-center justify-center h-96 md:h-full">
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
