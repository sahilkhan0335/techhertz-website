import AboutSection from "@/components/home/about";
import HomeCTA from "@/components/home/cta";
import HomeHero from "@/components/home/hero";
import ProcessSection from "@/components/home/process";
import ServicesSection from "@/components/home/services";
import ShowcaseSection from "@/components/home/showcase";
import TechStackSection from "@/components/home/tech-stack";

export default function Home() {
  return (
    <main className="bg-[rgb(var(--bg-dark))]">
      <HomeHero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TechStackSection />
      <ShowcaseSection />
      <HomeCTA />
    </main>
  );
}
