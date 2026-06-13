import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Products from "@/components/Products";
import Ritual from "@/components/Ritual";
import Ingredients from "@/components/Ingredients";
import HowToUse from "@/components/HowToUse";
import Reviews from "@/components/Reviews";
import FounderStory from "@/components/FounderStory";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BrandStatement />
        <Products />
        <Ritual />
        <Ingredients />
        <HowToUse />
        <Reviews />
        <FounderStory />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
