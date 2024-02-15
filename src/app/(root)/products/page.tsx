import { Metadata } from "next";

import TitleBlock from "@/components/pages/products/title-block";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import ProductsActions from "@/components/pages/products/products-actions";

export const metadata: Metadata = {
  title: "Выбрать кондиционер.",
  description:
    "Кондиционеры и сплит системы: купить по выгодной цене с доставкой по Саранску, Мордовии и всей России. ✔Широкий ассортимент. ✔ Гарантия от производителя..",
};

export default function Products() {
  return (
    <>
      <Breadcrumbs />
      <main className='mx-auto max-w-2xl px-4 pb-24 lg:max-w-7xl lg:px-8'>
        <TitleBlock
          title='Каталог магазина'
          description='Здесь вы найдете все интересующие вас товары. А что не найдете всегда
        можете связаться с нами.'
        />
        <ProductsActions />
      </main>
    </>
  );
}
