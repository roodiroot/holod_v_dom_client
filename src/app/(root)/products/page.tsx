import FiltersBlock from "@/components/pages/products/filters-block";
import ProductsList from "@/components/pages/products/products-list";
import SortBlock from "@/components/pages/products/sort-block";
import TitleBlock from "@/components/pages/products/title-block";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Выбрать кондиционер.",
  description:
    "Кондиционеры и сплит системы: купить по выгодной цене с доставкой по Саранску, Мордовии и всей России. ✔Широкий ассортимент. ✔ Гарантия от производителя..",
};

export default function Products() {
  return (
    <main className='mx-auto max-w-2xl px-4 pb-24 lg:max-w-7xl lg:px-8'>
      <TitleBlock
        title='Каталог магазина'
        description='Здесь вы найдете все интересующие вас товары. А что не найдете всегда
        можете связаться с нами.'
      />
      <div className='py-4'>
        <SortBlock />
      </div>
      <div className='pt-0 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'>
        <FiltersBlock />
        <ProductsList />
      </div>
    </main>
  );
}
