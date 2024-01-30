"use client";

import { fetchProductById } from "@/api";
import ActionBasket from "@/components/pages/basket/action-basket";
import ListBasket from "@/components/pages/basket/list-basket";
import WrapperBasket from "@/components/pages/basket/wrapper-basket";
import Cat from "@/components/ui/elements/cat";
import useBasket from "@/hooks/use-basket";
import useModal from "@/hooks/use-modal";
import { useFetchAllProductsByIds } from "@/queries/product";

const Basket = () => {
  const { basketList, removeElementBasketList } = useBasket();
  const { data, pending, isError, summ } = useFetchAllProductsByIds(basketList);
  const { onOpen } = useModal();

  if (isError) {
    return (
      <WrapperBasket>
        <div className='max-w-2xl px-4 text-center my-16 text-balance'>
          Ошибка загрузки данных попробуйте позже
        </div>
      </WrapperBasket>
    );
  }

  return (
    <WrapperBasket>
      {pending ? (
        <div>Загрузка ...</div>
      ) : data.length ? (
        <ListBasket list={data} removeElement={removeElementBasketList} />
      ) : (
        <div className='max-w-2xl px-4 text-center my-16 text-balance'>
          В вашей корзине пока нет ни одного товара.
          <Cat className='w-12 h-12 mx-auto' />
        </div>
      )}
      <ActionBasket
        className='mt-10'
        totalSumm={isNaN(summ) ? 0 : summ}
        openModal={onOpen}
      />
    </WrapperBasket>
  );
};

export default Basket;
