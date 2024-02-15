"use client";

import { Trash2 } from "lucide-react";

import { Product } from "@/queries/product";
import ItemBasket from "./item-basket";
import { memo } from "react";

interface ListBasketProps extends React.HtmlHTMLAttributes<HTMLElement> {
  list: Product[];
  removeElement: (value: string) => void;
  dropBasket: () => void;
}

const ListBasket: React.FC<ListBasketProps> = ({
  list,
  removeElement,
  dropBasket,
  ...props
}) => (
  <section {...props}>
    <h2 className='sr-only'>Товары в корзине</h2>
    <ul className='border-y border-gray-200 divide-y divide-gray-200'>
      {list.map((i, index) => (
        <ItemBasket
          key={i?.id + "_" + index}
          name={i?.name}
          logo={i?.logo}
          typeName={i?.type?.name}
          brandName={i?.brand?.name}
          price={i?.price}
          idElem={i?.id}
          removeElement={removeElement}
        />
      ))}
    </ul>
    <div className='w-full flex justify-end'>
      <span onClick={dropBasket} className='p-4 cursor-pointer'>
        <Trash2 className='w-5 h-5 text-red-500' />
      </span>
    </div>
  </section>
);

export default memo(ListBasket);
