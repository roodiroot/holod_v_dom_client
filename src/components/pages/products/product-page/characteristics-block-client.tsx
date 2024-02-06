"use client";

import { memo } from "react";

import { Accordion } from "@/components/ui/accordion";
import MainCharacterTab from "./main-character-tab";
import CharacterTab from "./character-tab";
import InstalationTab from "./instalation-tab";
import PayTab from "./pay-tab";
import DeliveryTab from "./delivery-tab";
import { useFetchProductByIdOptions } from "@/queries/product";
import Stars from "@/components/ui/elements/stars";
import { format } from "@/lib/format";
import AddingBasket from "./server-component/adding-basket";
import CharacteristicsSkeleton from "./characteristics-skeleton";

interface CharacteristicsBlockProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  productId: string;
}

const CharacteristicsBlockClient: React.FC<CharacteristicsBlockProps> = ({
  productId,
  ...props
}) => {
  const { data, isLoading, error } = useFetchProductByIdOptions(productId);

  if (isLoading) {
    return <CharacteristicsSkeleton />;
  }

  if (error) {
    return <CharacteristicsSkeleton />;
  }

  return (
    <>
      <div {...props} className='mt-3'>
        <h2 className='sr-only'>Информация о товаре</h2>
        <p className='text-3xl tracking-tight text-gray-900'>
          {format(data?.price)}
        </p>
      </div>
      <div className='mt-3'>
        <h3 className='sr-only'>Отзывы</h3>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <Stars />
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <h3 className='sr-only'>Описание</h3>
        <p>{data?.description}</p>
      </div>
      <AddingBasket className='mt-10' prodId={productId} />
      <section className='mt-12'>
        <h2 className='sr-only'>Подробное описание</h2>
        <Accordion
          type='single'
          collapsible
          className='w-full border-t border-gray-200'
        >
          <MainCharacterTab
            characteristics={data?.options}
            brand={data?.brand}
            type={data?.type}
          />
          <CharacterTab characteristics={data?.options} />
          <InstalationTab />
          <PayTab />
          <DeliveryTab />
        </Accordion>
      </section>
    </>
  );
};

export default memo(CharacteristicsBlockClient);
