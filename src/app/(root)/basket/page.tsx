import BasketClient from "@/components/pages/basket/basket-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корзина",
  description:
    'Интернет–магазин климатической техники: кондиционеров, сплит систем "Холод в дом" 8 (905) 009 68 88. Гарантия на все климатическое оборудование.',
};

const Basket = () => (
  <>
    <BasketClient />
  </>
);

export default Basket;
