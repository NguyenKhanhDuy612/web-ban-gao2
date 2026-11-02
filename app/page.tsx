import Hero from "@/components/sections/Hero";
import CategorySection from "@/components/sections/CategorySection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import AboutSection from "@/components/sections/AboutSection";
import ShoppingSteps from "@/components/sections/ShoppingSteps";
import BranchSection from "@/components/sections/BranchSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <AboutSection />
      <ShoppingSteps />
      <BranchSection />
      <TestimonialsSection />
    </>
  );
}