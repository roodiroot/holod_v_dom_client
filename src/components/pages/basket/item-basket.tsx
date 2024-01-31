import { Skeleton } from "@/components/ui/skeleton";
import { format } from "@/lib/format";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ItemStock from "./item-stock";

interface ItemBasketProps extends React.HtmlHTMLAttributes<HTMLElement> {
  name: string;
  logo: string;
  idElem: string;
  typeName: string;
  brandName: string;
  price: number;
  removeElement: (value: string) => void;
}

const ItemBasket: React.FC<ItemBasketProps> = ({
  name,
  logo,
  idElem,
  typeName,
  brandName,
  price,
  removeElement,
  ...props
}) => {
  return (
    <li {...props} className='flex py-6'>
      <div className='relative shrink-0 rounded-md overflow-hidden'>
        {logo ? (
          <div>
            <Image
              className='h-24 w-24 object-cover object-center sm:w-32 sm:h-32 p-[10%]'
              src={process.env.NEXT_PUBLIC_URL + "/" + logo}
              alt='basket_product'
              width={128}
              height={128}
            />
            <span className='absolute inset-0 bg-gray-200/30'></span>
          </div>
        ) : (
          <Skeleton className='h-24 w-24 sm:w-32 sm:h-32' />
        )}
      </div>
      <div className='ml-4 flex flex-1 flex-col sm:ml-6'>
        <div>
          <div className='flex justify-between'>
            <h4 className='text-sm text-gray-900 font-medium'>
              <Link href={/products/ + idElem}>{name}</Link>
            </h4>
            <div className='text-sm font-medium text-gray-900'>
              {format(price)}
            </div>
          </div>
          <div className='mt-1 text-sm'>{typeName}</div>
          <div className='mt-1 text-sm'>{brandName}</div>
        </div>
        <div className='mt-4 flex flex-1 items-end justify-between'>
          <ItemStock price={price} />
          <div className='ml-4'>
            <button
              onClick={() => removeElement(idElem)}
              className='text-sm font-medium text-accent-600'
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ItemBasket;
