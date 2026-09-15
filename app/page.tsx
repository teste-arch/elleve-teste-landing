import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { PhilosophySection } from "@/components/landing/philosophy-section";
import { BentoServices } from "@/components/landing/bento-services";
import { PorcelainCraft } from "@/components/landing/porcelain-craft";
import { SolutionsGrid } from "@/components/landing/solutions-grid";
import { ElleveTechSection } from "@/components/landing/elleve-tech-section";
import { TestimonialsPortfolio } from "@/components/landing/testimonials-portfolio";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <BentoServices />
      <PorcelainCraft />
      <SolutionsGrid />
      <ElleveTechSection />
      <TestimonialsPortfolio />
      <CTASection />
      <Footer />
    </main>
  );
}
