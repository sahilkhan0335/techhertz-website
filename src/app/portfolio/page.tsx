import PortfolioCTA from "@/components/portfolio/cta";
import PortfolioGrid from "@/components/portfolio/grid";
import PortfolioHero from "@/components/portfolio/hero";
import PortfolioStats from "@/components/portfolio/stats";

export default function PortfolioPage() {
  return (
    <main className="bg-[rgb(var(--bg-dark))]">
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioStats />
      <PortfolioCTA />
    </main>
  );
}
