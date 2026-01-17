import HeroSection from "@/components/hero-section";
import ProcessSection from "@/components/process/process-section";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section - Full viewport */}
      <div className="min-h-screen">
        <HeroSection />
      </div>

      {/* Process Section - Appears after hero */}
      <ProcessSection />
    </main>
  );
}
