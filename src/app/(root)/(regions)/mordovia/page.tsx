import { Metadata } from "next";

import { sertifcates } from "@/utils/constance";
import HeroBlock from "@/components/pages/hero/main-block/hero-block";
import GridList from "@/components/pages/hero/grid-section/grid-list";
import PromoSection from "@/components/pages/hero/promo-section/promo-section";
// import SaleSection from '@/components/pages/hero/sale-section/sale-section';
import TableSection from "@/components/pages/hero/table-section/table-section";
import TestimonialsSection from "@/components/pages/hero/testimonials-section/testimonials-section";
import DescriptionLinkSection from "@/components/pages/hero/description-link-section/description-link-section";

import listWorks from "@/utils/price.json";
import listAddWorks from "@/utils/additionalWorks.json";

export const metadata: Metadata = {
  title: "Кондиционеры в Мордовии — «Холод в дом»",
  description:
    "Установка кондиционеров в Мордовии с гарантией 12 месяцев. Профессиональный монтаж и обслуживание от компании с 7-летним опытом.",
};

const MordoviaPage = () => (
  <main>
    <HeroBlock />
    <DescriptionLinkSection />
    <PromoSection />
    <TableSection listAddWorks={listAddWorks} listWorks={listWorks} />
    <TestimonialsSection />
    <GridList list={sertifcates} />
    {/* <SaleSection /> */}
  </main>
);
export default MordoviaPage;
