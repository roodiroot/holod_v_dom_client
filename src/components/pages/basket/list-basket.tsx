import { Product } from "@/queries/product";
import ItemBasket from "./item-basket";
import { memo } from "react";

interface ListBasketProps extends React.HtmlHTMLAttributes<HTMLElement> {
  list: Product[];
  removeElement: (value: string) => void;
}

const ListBasket: React.FC<ListBasketProps> = ({
  list,
  removeElement,
  ...props
}) => (
  <section {...props}>
    <h2 className='sr-only'>Товары в корзине</h2>
    <ul className='border-y border-gray-200 divide-y divide-gray-200'>
      {list.map((i) => (
        <ItemBasket
          key={i?.id}
          name={i?.name}
          logo={i?.logo}
          typeName={i?.type.name}
          brandName={i?.brand.name}
          price={i?.price}
          idElem={i?.id}
          removeElement={removeElement}
        />
      ))}
    </ul>
  </section>
);

export default memo(ListBasket);
