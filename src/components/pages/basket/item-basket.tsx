import { format } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";

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
        <Image
          className='h-24 w-24 object-cover object-center sm:w-32 sm:h-32 p-[10%]'
          src={process.env.NEXT_PUBLIC_URL + "/" + logo}
          alt='basket_product'
          width={128}
          height={128}
        />
        <span className='absolute inset-0 bg-gray-200/30'></span>
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
          <div className='mt-1 text-sm'>Сплит система</div>
        </div>
        <div className='mt-4 flex flex-1 items-end justify-between'>
          <p className='flex items-center text-sm text-gray-900'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
              className='h-5 w-5 shrink-0 text-green-500'
            >
              <path
                fillRule='evenodd'
                d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                clipRule='evenodd'
              ></path>
            </svg>
            <span>В наличии</span>
          </p>
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
