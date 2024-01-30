"use client";

import { memo, useState } from "react";
import Image from "next/image";

interface SliderElementProps extends React.HtmlHTMLAttributes<HTMLElement> {
  images: string[];
}

const SliderElement: React.FC<SliderElementProps> = memo(({ images }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <div className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <div className='grid grid-cols-4 gap-6'>
          {images &&
            images.map((i) => (
              <button
                key={i}
                onClick={() => setMain(i)}
                className='relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase'
              >
                <span className='absolute inset-0 overflow-hidden p-[10%] rounded-md'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}/${i}`}
                    alt='item_product'
                    className='h-full w-full object-cover object-center'
                    width={150}
                    height={100}
                  />
                  <span className='absolute inset-0 bg-gray-200/30'></span>
                </span>
                {i === main && (
                  <span className='absolute z-10 pointer-events-none inset-0 rounded-md border-2 border-accent-600'></span>
                )}
              </button>
            ))}
        </div>
      </div>
      <div className='relative w-full pb-[100%]'>
        <div className='absolute p-[10%] w-full h-full inset-0 rounded-md overflow-hidden'>
          <Image
            src={main ? `${process.env.NEXT_PUBLIC_URL}/${main}` : ""}
            alt='item_product'
            className='h-full w-full object-cover object-center'
            width={600}
            height={600}
          />
          <span className='absolute inset-0 bg-gray-200/30'></span>
        </div>
      </div>
    </div>
  );
});

export default SliderElement;
