"use client";

import ActionBasket from "@/components/pages/basket/action-basket";
import ListBasket from "@/components/pages/basket/list-basket";
import SkeletonBasketWrapper from "@/components/pages/basket/skeleton-basket";
import WrapperBasket from "@/components/pages/basket/wrapper-basket";
import Cat from "@/components/ui/elements/cat";
import useBasket from "@/hooks/use-basket";
import useModalOrder from "@/hooks/use-modal-order";
import { useFetchAllProductsByIds } from "@/queries/product";

const BasketClient = () => {
  const { basketList, removeElementBasketList, dropBasket } = useBasket();
  const { data, pending, isError, summ } = useFetchAllProductsByIds(basketList);
  const { onOpen } = useModalOrder();

  if (isError) {
    return (
      <SkeletonBasketWrapper className="mt-12">
        <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-full  px-4 text-center my-8 sm:my-16 text-balance flex flex-col items-center">
          <span className="bg-white p-1 rounded-md">
            Ошибка загрузки данных попробуйте позже.
          </span>
          <span className="bg-white inline-block rounded-md">
            <Cat className="w-12 h-12" />
          </span>
        </div>
      </SkeletonBasketWrapper>
    );
  }

  return (
    <WrapperBasket>
      {pending ? (
        <SkeletonBasketWrapper className="mt-12" />
      ) : data?.length ? (
        <form onSubmit={(e) => e.preventDefault()} className="mt-12">
          <ListBasket
            list={data}
            removeElement={removeElementBasketList}
            dropBasket={dropBasket}
          />
          <ActionBasket
            className="mt-10"
            totalSumm={isNaN(summ) ? 0 : summ}
            openModal={() =>
              onOpen(
                `Техника в заказе ${JSON.stringify(
                  data?.map((i) => i?.name).join(", ")
                )} на сумму ${summ} руб. После отправки формы ожидайте звонка для уточнения деталей доставки и установки.`
              )
            }
          />
        </form>
      ) : (
        <SkeletonBasketWrapper className="mt-12 ">
          <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-full  px-4 text-center my-8 sm:my-16 text-balance flex flex-col items-center">
            <span className="bg-white p-1 rounded-md">
              В вашей корзине пока нет ни одного товара.
            </span>
            <span className="bg-white inline-block rounded-md">
              <Cat className="w-12 h-12" />
            </span>
          </div>
        </SkeletonBasketWrapper>
      )}
    </WrapperBasket>
  );
};

export default BasketClient;
