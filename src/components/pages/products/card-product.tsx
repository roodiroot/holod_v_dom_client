"use client";

import { format } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";

interface CardProductProps extends React.HtmlHTMLAttributes<HTMLElement> {
  productId: number;
  title: string;
  price: number;
  logo: string;
  options: { id: number; title: string; description: string }[];
}

const CardProduct: React.FC<CardProductProps> = ({
  productId,
  title,
  price,
  logo,
  options,
  ...props
}) => (
  <div
    {...props}
    className='relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'
  >
    <div className='relative aspect-[1/1]  sm:h-[15rem] p-4'>
      <Image
        src={`${process.env.NEXT_PUBLIC_URL}/${logo}`}
        alt={`${title}_logo`}
        className='h-full w-full object-cover object-center'
        width={300}
        height={300}
      />
      <span className='absolute inset-0 bg-gray-200/30'></span>
    </div>
    <div className='flex flex-1 flex-col p-4 space-y-2'>
      <h3 className='text-sm font-medium text-gray-900'>
        <Link href={`products/${productId}`} scroll={false}>
          <span className='absolute inset-0'></span>
          {title}
        </Link>
      </h3>
      <div className='text-xs'>
        {options?.map((i) => (
          <span key={i.id}>
            <span>
              {i.title} ... {i.description}
            </span>
            <br />
          </span>
        ))}
      </div>
      <div className='flex flex-1 flex-col justify-end'>
        {/* <p className='text-sm italic'>до 20 м²</p> */}
        <p className='text-gray-900 font-medium'>
          {price ? <span>{format(price)}</span> : "Товар временно отсутствует"}
        </p>
      </div>
    </div>
  </div>
);

export default CardProduct;
