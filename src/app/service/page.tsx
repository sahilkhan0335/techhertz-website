import ServicesCTA from "@/components/services/cta";
import ServicesGrid from "@/components/services/grid";
import ServicesHero from "@/components/services/hero";

export default function ServicePage() {
  return (
    <main className="bg-[rgb(var(--bg-dark))]">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </main>
  );
}
