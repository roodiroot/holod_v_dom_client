import DescriptionLinkSection from "@/components/pages/hero/description-link-section/description-link-section";
import HeroBlock from "@/components/pages/hero/main-block/hero-block";
import PromoSection from "@/components/pages/hero/promo-section/promo-section";
import SaleSection from "@/components/pages/hero/sale-section/sale-section";
import TableSection from "@/components/pages/hero/table-section/table-section";
import TestimonialsSection from "@/components/pages/hero/testimonials-section/testimonials-section";

const Home = () => (
  <main>
    <HeroBlock />
    <DescriptionLinkSection />
    <PromoSection />
    <TableSection />
    <TestimonialsSection />
    {/* <SaleSection /> */}
  </main>
);
export default Home;
