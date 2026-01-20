import AboutCTA from "@/components/about/cta";
import AboutHero from "@/components/about/hero";
import AboutStory from "@/components/about/story";
import AboutValues from "@/components/about/values";

export default function AboutPage() {
  return (
    <main className="bg-[rgb(var(--bg-dark))]">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA />
    </main>
  );
}
